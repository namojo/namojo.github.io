import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * TOOLKIT 브라우저 검증 — Chromium 을 띄워 실제 동작을 확인한다.
 *   node verify/browser-check.mjs
 * playwright 가 필요하다:  npm i -D playwright && npx playwright install chromium
 */

const PROJECT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.dirname(PROJECT);            // toolkit/ 의 상위 = 서버 루트
const MOUNT = '/' + path.basename(PROJECT) + '/';
const SHOT = path.join(PROJECT, 'verify', 'shots');
await mkdir(SHOT, { recursive: true });
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.png': 'image/png' };

const server = createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(ROOT, p);
  try {
    const buf = await readFile(file);
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(buf);
  } catch { res.writeHead(404); res.end('404'); }
});
await new Promise((r) => server.listen(8099, r));
const BASE = 'http://127.0.0.1:8099' + MOUNT;

const results = [];
const check = (name, ok, extra = '') => { results.push({ name, ok, extra }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? '  — ' + extra : ''}`); };

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();

const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push('[page] ' + m.text()); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));

/* 1. 허브 로드 */
await page.goto(BASE, { waitUntil: 'networkidle' });
const cards = await page.locator('.card').count();
check('허브 카드 렌더', cards === 3, `카드 ${cards}개`);
const note = await page.locator('#filter-note').textContent();
check('필터 안내 텍스트', /3개의 도구/.test(note), note.trim());

/* 2. 검색 */
await page.fill('#q', 'csv');
await page.waitForTimeout(250);
let visible = await page.locator('.card:not([hidden])').count();
check('검색 필터 (csv → 1개)', visible === 1, `${visible}개`);
await page.click('#q-clear');
await page.waitForTimeout(250);

/* 3. 태그 필터 */
await page.click('.chip[data-tag="프라이버시"]');
await page.waitForTimeout(150);
visible = await page.locator('.card:not([hidden])').count();
check('태그 필터 (#프라이버시 → 1개)', visible === 1, `${visible}개`);
await page.click('.chip[data-tag="프라이버시"]');
await page.waitForTimeout(150);

/* 4. 즐겨찾기 */
await page.click('.card[data-id="table-tidy"] .star');
await page.waitForTimeout(150);
const favs = await page.evaluate(() => localStorage.getItem('tk:favorites'));
check('즐겨찾기 저장', favs === '["table-tidy"]', String(favs));
const pressed = await page.getAttribute('.card[data-id="table-tidy"] .star', 'aria-pressed');
check('즐겨찾기 별표 상태', pressed === 'true', pressed);
const order = await page.evaluate(() => getComputedStyle(document.querySelector('.card[data-id="table-tidy"]')).order);
check('즐겨찾기 최상단 정렬(order:0)', order === '0', 'order=' + order);
await page.click('.chip[data-cat="@fav"]');
await page.waitForTimeout(150);
visible = await page.locator('.card:not([hidden])').count();
check('즐겨찾기 탭 필터', visible === 1, `${visible}개`);
await page.click('.chip[data-cat="*"]');

/* 5. 격리 뷰어 + 샌드박스 CSP */
await page.click('.card[data-id="text-diff"] .card-title a');
await page.waitForTimeout(1000);
check('뷰어 dialog 열림', await page.locator('#viewer[open]').count() === 1);
check('해시 라우팅', page.url().endsWith('#/t/text-diff'), page.url());

const frame = await (await page.$('#viewer-frame')).contentFrame();
check('iframe 로드', !!frame, frame ? frame.url() : 'none');

const sdkOK = await frame.evaluate(() => typeof window.TK === 'object' && typeof window.TK.storage === 'object');
check("샌드박스에서 script-src 'self' 동작 (SDK 로드)", sdkOK);
const isolated = await frame.evaluate(() => window.TK && window.TK.isolated);
check('SDK 격리 모드 감지', isolated === true, 'isolated=' + isolated);
const lsState = await frame.evaluate(() => { try { localStorage.getItem('x'); return 'accessible'; } catch { return 'blocked'; } });
check('샌드박스 localStorage 차단(오리진 격리)', lsState === 'blocked', lsState);

/* 6. diff 동작 + XSS */
await frame.fill('#a', 'alpha\nbravo\ncharlie\ndelta');
await frame.fill('#b', 'alpha\nbravo X\ncharlie\ndelta\necho');
await frame.click('#run');
await page.waitForTimeout(350);
const nAdd = await frame.textContent('#n-add');
const nDel = await frame.textContent('#n-del');
const nEq = await frame.textContent('#n-eq');
check('diff 계산 (추가 2 / 삭제 1 / 동일 3)', nAdd === '2' && nDel === '1' && nEq === '3', `add=${nAdd} del=${nDel} eq=${nEq}`);
check('diff 행 렌더', (await frame.locator('.diff-row').count()) > 0);

await frame.fill('#b', 'alpha\n<img src=x onerror="window.__pwned=1">\ncharlie\ndelta');
await frame.click('#run');
await page.waitForTimeout(350);
const pwned = await frame.evaluate(() => !!window.__pwned);
const imgCount = await frame.locator('.diff img').count();
check('diff XSS 방어', !pwned && imgCount === 0, `pwned=${pwned} img=${imgCount}`);

/* 7. 스토리지 브리지 */
await frame.check('#opt-case');
await page.waitForTimeout(500);
const bridged = await page.evaluate(() => localStorage.getItem('tk:tool:text-diff:opts'));
let bridgeOK = false;
try { bridgeOK = !!bridged && JSON.parse(bridged).case === true; } catch {}
check('postMessage 스토리지 브리지', bridgeOK, String(bridged));

const escapeAttempt = await frame.evaluate(() => new Promise((resolve) => {
  const onMsg = (e) => { if (e.data && e.data.op === 'reply' && e.data.id === 9999) { window.removeEventListener('message', onMsg); resolve(e.data); } };
  window.addEventListener('message', onMsg);
  parent.postMessage({ __tk: 1, id: 9999, op: 'set', key: '../table-tidy:opts', value: { hacked: true } }, '*');
  setTimeout(() => resolve({ timeout: true }), 1500);
}));
const stillClean = await page.evaluate(() => localStorage.getItem('tk:tool:../table-tidy:opts'));
check('네임스페이스 탈출 차단', escapeAttempt.ok === false && stillClean === null, JSON.stringify(escapeAttempt));

/* 8. 뷰어 닫기 */
await page.click('#viewer-close');
await page.waitForTimeout(250);
check('뷰어 닫힘 + iframe src 해제',
  (await page.locator('#viewer[open]').count()) === 0 && !(await page.getAttribute('#viewer-frame', 'src')));

/* 9. table-tidy */
const tt = await ctx.newPage();
const ttErrors = [];
tt.on('console', (m) => { if (m.type() === 'error') ttErrors.push(m.text()); });
tt.on('pageerror', (e) => ttErrors.push(e.message));
await tt.goto(BASE + 'tools/table-tidy/', { waitUntil: 'networkidle' });
await tt.click('#demo');
await tt.waitForTimeout(350);
const cols = await tt.textContent('#n-cols');
const rows = await tt.textContent('#n-rows');
const delim = await tt.textContent('#delim-info');
check('CSV 파싱 (4열)', cols === '4', `cols=${cols} rows=${rows}`);
check('구분자 자동 판별', /쉼표/.test(delim), delim);
const quoted = await tt.locator('#tbody tr').first().locator('td').nth(3).textContent();
check('RFC4180 따옴표 셀 처리', quoted === '쉼표, 포함된 셀', JSON.stringify(quoted));
await tt.check('#opt-dedupe');
await tt.waitForTimeout(300);
const rows2 = await tt.textContent('#n-rows');
check('중복 행 제거', Number(rows2) === Number(rows) - 1, `${rows} → ${rows2}`);

await tt.fill('#src', 'a,b\n"<img src=x onerror=\'window.__pwned2=1\'>",2');
await tt.waitForTimeout(350);
const pwned2 = await tt.evaluate(() => !!window.__pwned2);
const cellImg = await tt.locator('#tbody img').count();
check('표 XSS 방어', !pwned2 && cellImg === 0, `pwned=${pwned2} img=${cellImg}`);

await tt.uncheck('#opt-dedupe');
await tt.click('#demo');
await tt.waitForTimeout(300);
await tt.click('#thead th:nth-child(3)');
await tt.waitForTimeout(250);
const firstScore = (await tt.locator('#tbody tr').first().locator('td').nth(2).textContent()).trim();
check('숫자 열 정렬 (오름차순 첫 값 72)', firstScore === '72', firstScore);
check('table-tidy 콘솔 청결', ttErrors.length === 0, ttErrors.join(' | '));
await tt.screenshot({ path: path.join(SHOT, 'shot-table.png') });

/* 10. image-resize */
// 테스트용 이미지: 캔버스에서 직접 만들어 외부 의존을 없앤다
const png = path.join(SHOT, 'test.png');
{
  const gen = await ctx.newPage();
  await gen.goto(BASE, { waitUntil: 'domcontentloaded' });
  const b64 = await gen.evaluate(() => {
    const c = document.createElement('canvas');
    c.width = 900; c.height = 600;
    const g = c.getContext('2d');
    g.fillStyle = '#285a8c'; g.fillRect(0, 0, 900, 600);
    g.fillStyle = '#e8c46a'; g.fillRect(80, 80, 300, 200);
    return c.toDataURL('image/png').split(',')[1];
  });
  await gen.close();
  await (await import('node:fs/promises')).writeFile(png, Buffer.from(b64, 'base64'));
}

const ir = await ctx.newPage();
const irErrors = [];
ir.on('console', (m) => { if (m.type() === 'error') irErrors.push(m.text()); });
ir.on('pageerror', (e) => irErrors.push(e.message));
await ir.goto(BASE + 'tools/image-resize/', { waitUntil: 'networkidle' });
await ir.setInputFiles('#file', png);
await ir.waitForTimeout(800);
check('이미지 로드', (await ir.textContent('#n-files')) === '1');
const thumb = await ir.locator('.shot img').first().getAttribute('src');
check('썸네일 data: URI (CSP img-src data:)', !!thumb && thumb.startsWith('data:image'), thumb ? thumb.slice(0, 24) : '');
await ir.fill('#maxw', '300');
await ir.click('#run');
await ir.waitForTimeout(1500);
const meta = await ir.locator('.shot-meta').first().textContent();
check('리사이즈 실행 (900×600 → 300×200)', /300×200/.test(meta), meta);
check('용량 절감 표시', /절감/.test(await ir.textContent('#n-saved')), await ir.textContent('#n-saved'));
check('image-resize 콘솔 청결', irErrors.length === 0, irErrors.join(' | '));
await ir.screenshot({ path: path.join(SHOT, 'shot-image.png') });

/* 11. 스크린샷 */
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.screenshot({ path: path.join(SHOT, 'shot-hub-light.png') });
const dark = await ctx.newPage();
await dark.emulateMedia({ colorScheme: 'dark' });
await dark.goto(BASE, { waitUntil: 'networkidle' });
await dark.click('.card[data-id="text-diff"] .card-title a');
await dark.waitForTimeout(1000);
const dframe = await (await dark.$('#viewer-frame')).contentFrame();
if (dframe) {
  await dframe.fill('#a', '계약 기간은 12개월로 한다.\n대금은 익월 15일에 지급한다.\n비밀유지 의무는 2년간 유지된다.\n분쟁은 서울중앙지법을 관할로 한다.');
  await dframe.fill('#b', '계약 기간은 24개월로 한다.\n대금은 익월 15일에 지급한다.\n비밀유지 의무는 2년간 유지된다.\n지연 이자는 연 6%로 한다.\n분쟁은 서울중앙지법을 관할로 한다.');
  await dframe.click('#run');
  await dark.waitForTimeout(400);
}
await dark.screenshot({ path: path.join(SHOT, 'shot-hub-dark.png') });

/* 12. CSP / 콘솔 종합 */
const cspErrors = errors.filter((e) => /Content Security Policy|Refused to/i.test(e));
check('CSP 위반 없음', cspErrors.length === 0, cspErrors.join(' | '));
check('허브 콘솔 청결', errors.length === 0, errors.slice(0, 4).join(' | '));

/* 13. JS 없이 */
const noJs = await browser.newContext({ javaScriptEnabled: false });
const nj = await noJs.newPage();
await nj.goto(BASE, { waitUntil: 'domcontentloaded' });
const njCards = await nj.locator('.card').count();
const njLink = await nj.getAttribute('.card[data-id="text-diff"] .card-title a', 'href');
check('JS 비활성 시 목록·링크 유지', njCards === 3 && njLink === 'tools/text-diff/', `${njCards}개 / ${njLink}`);

await browser.close();
server.close();

const failed = results.filter((r) => !r.ok);
console.log(`\n=== ${results.length - failed.length}/${results.length} 통과 ===`);
if (failed.length) {
  console.log('실패:');
  for (const f of failed) console.log('  · ' + f.name + ' — ' + f.extra);
  process.exitCode = 1;
}
