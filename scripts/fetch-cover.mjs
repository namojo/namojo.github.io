#!/usr/bin/env node
/**
 * fetch-cover.mjs — Wikimedia Commons 자유 라이선스 실사 사진으로 커버 만들기
 *
 * 왜 이렇게 만드나:
 *   - 저자 지시(2026-08-11): 커버는 검색된 실제 이미지가 1순위다. 개인 블로그이므로
 *     **라이선스 종류는 문제가 되지 않고, 출처만 간단히 명기하면 된다.**
 *     따라서 이 스크립트는 라이선스를 조회해 기록하되 그것으로 막지 않는다.
 *   - 그동안 실사 경로는 손으로 내려받아 크롭하고 크레딧 표를 직접 고치는 수작업이었다.
 *     이 스크립트가 (1) 출처·저작자 조회, (2) 다운로드, (3) 1200x630 크롭, (4) 크레딧 표
 *     한 줄 추가를 한 번에 처리한다.
 *   - 네트워크 호출은 curl로 한다. Node 내장 fetch는 HTTPS_PROXY를 읽지 않는 환경이 있어
 *     프록시 뒤에서 조용히 실패한다(에이전트 실행 환경이 그렇다).
 *
 * 사용:
 *   node scripts/fetch-cover.mjs --file "IBM PC 5150.jpg" --slug meta-muse-glimmer-open-weight-return \
 *        --subject "IBM PC 5150 (1981)"
 *   node scripts/fetch-cover.mjs --file "Meta Headquarters Sign.jpg" --slug ... --dry-run
 *
 * 옵션:
 *   --file      Commons 파일 제목 ("File:" 접두사는 있어도 없어도 됨). 필수.
 *   --slug      포스트 슬러그. 결과는 public/images/covers/{slug}.jpg. 필수.
 *   --subject   크레딧 표에 적을 피사체 설명. 생략하면 파일명에서 유추.
 *   --credits   크레딧 파일 경로. 기본 _workspace/image-credits-{연도}.md
 *               같은 슬러그로 다시 실행하면 기존 행을 **제자리에서 갱신**한다(중복 추가 없음).
 *               커버를 더 나은 사진으로 교체했는데 표에는 이전 출처가 남는 사고를 막는다.
 *               실행 끝에 파일이 없는 고아 크레딧 행이 있으면 경고만 남긴다(발행은 막지 않음).
 *   --focus     크롭 기준점 (center|top|bottom). 기본 center.
 *   --dry-run   라이선스·출처만 조회해 출력하고 파일은 쓰지 않는다.
 *   --local     Commons가 아닌 출처(뉴스 매체 이미지 등)나 에그레스 차단 환경용.
 *               이미 손에 있는 이미지 파일을 크롭하고 크레딧만 기록한다.
 *               `--source <출처>`는 필수 (출처 표기 없이 실사진을 쓰지 않는다).
 *               `--artist`, `--license`는 아는 경우에만 — 개인 블로그 기준으로
 *               출처 한 줄이면 충분하다는 저자 지시(2026-08-11)를 따른다.
 *
 * 종료코드: 0=성공, 2=실패(호출측은 다음 폴백으로 넘어가면 된다. 발행을 막지 않는다)
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const API = 'https://commons.wikimedia.org/w/api.php';

// ── 인자 파싱 ────────────────────────────────────────────────
const argv = process.argv.slice(2);
const opt = {};
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (!a.startsWith('--')) continue;
  const key = a.slice(2);
  if (key === 'dry-run') { opt.dryRun = true; continue; }
  opt[key] = argv[++i];
}
function die(msg) {
  console.error(`[cover:fetch] ${msg}`);
  process.exit(2);
}
if (!opt.slug || (!opt.file && !opt.local)) {
  die('usage: node scripts/fetch-cover.mjs --file "<Commons 파일명>" --slug <post-slug> [--subject "<피사체>"] [--dry-run]\n'
    + '       node scripts/fetch-cover.mjs --local <이미지경로> --slug <post-slug> --artist "<저작자>" --license "<라이선스>" --source <출처URL>');
}
if (opt.local && !opt.source) {
  die('--local 을 쓰면 최소한 --source <출처> 는 줘야 한다 (출처 표기 없이 실사진을 쓰지 않는다).');
}
const fileTitle = opt.file
  ? 'File:' + String(opt.file).replace(/^File:/i, '').replace(/_/g, ' ').trim()
  : '';
const slug = String(opt.slug).replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
const focus = ['center', 'top', 'bottom'].includes(opt.focus) ? opt.focus : 'center';

// ── curl 래퍼 ───────────────────────────────────────────────
// HTTPS_PROXY와 CA 번들을 이미 읽는 클라이언트를 쓰는 게 가장 안전하다.
function curl(args) {
  return execFileSync('curl', ['-fsSL', '--max-time', '60', ...args], {
    encoding: 'buffer',
    maxBuffer: 64 * 1024 * 1024,
  });
}
function curlText(url) {
  try {
    return curl([url]).toString('utf-8');
  } catch (e) {
    throw new Error(`요청 실패(${url}): ${e.message.split('\n')[0]}`);
  }
}
function curlFile(url, outPath) {
  try {
    curl(['-o', outPath, url]);
  } catch (e) {
    throw new Error(`다운로드 실패(${url}): ${e.message.split('\n')[0]}`);
  }
}

const plain = (v) => String(v ?? '')
  .replace(/<[^>]*>/g, ' ')          // Commons의 Artist 필드는 HTML로 온다
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#039;/g, "'")
  .replace(/\s+/g, ' ')
  .trim();

// ── 1) Commons에서 원본 URL + 저작자 + 라이선스 조회 ─────────
// --local 모드면 이 단계를 건너뛴다 (출처 정보는 인자로 받는다).
let artist, license, licenseUrl, descUrl, srcUrl, dims = '';
if (opt.local) {
  artist = plain(opt.artist);
  license = plain(opt.license);
  descUrl = String(opt.source);
  console.log(`[cover:fetch] 로컬 파일: ${opt.local}`);
  console.log(`  저작자   : ${artist}`);
  console.log(`  라이선스 : ${license}`);
  console.log(`  출처     : ${descUrl}`);
} else {
const qs = new URLSearchParams({
  action: 'query',
  titles: fileTitle,
  prop: 'imageinfo',
  iiprop: 'url|size|extmetadata',
  iiurlwidth: '2400',            // 원본이 수십 MB일 수 있어 스케일본을 받는다
  format: 'json',
  formatversion: '2',
  origin: '*',
});

let info;
try {
  const json = JSON.parse(curlText(`${API}?${qs}`));
  const page = json?.query?.pages?.[0];
  if (!page || page.missing) die(`Commons에 그 파일이 없다: ${fileTitle}`);
  info = page.imageinfo?.[0];
  if (!info) die(`imageinfo를 받지 못했다: ${fileTitle}`);
} catch (e) {
  die(`${e.message}\n  → 이 환경에서 commons.wikimedia.org가 막혀 있으면(EGRESS_BLOCKED/403) 이 경로는 쓸 수 없다.\n     환경의 네트워크 정책에 commons.wikimedia.org와 upload.wikimedia.org를 허용해야 한다.`);
}

const meta = info.extmetadata || {};
artist = plain(meta.Artist?.value) || plain(meta.Credit?.value) || '(저작자 표기 없음)';
license = plain(meta.LicenseShortName?.value) || plain(meta.License?.value) || '(라이선스 불명)';
licenseUrl = plain(meta.LicenseUrl?.value);
descUrl = info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(fileTitle.replace(/ /g, '_'))}`;
srcUrl = info.thumburl || info.url;
dims = `${info.width}x${info.height}`;

// ── 2) 라이선스는 기록만 한다 (게이트 아님) ──────────────────
// 저자 지시(2026-08-11): 개인 블로그라 라이선스 종류는 문제가 되지 않는다. 출처만 명기하면 된다.
// 그래서 여기서 발행을 막지 않는다. 다만 눈에 띄는 비자유 표기는 로그로 알려 준다.
if (/fair use|non-?free|all rights reserved/i.test(license)) {
  console.warn(`[cover:fetch] 참고 — 라이선스 표기가 "${license}"다. 출처는 기록하니 그대로 진행한다.`);
}

console.log(`[cover:fetch] ${fileTitle}`);
console.log(`  저작자   : ${artist}`);
console.log(`  라이선스 : ${license}${licenseUrl ? ` (${licenseUrl})` : ''}`);
console.log(`  출처     : ${descUrl}`);
console.log(`  원본     : ${dims} → 내려받을 URL ${srcUrl}`);
}

if (opt.dryRun) {
  console.log('[cover:fetch] --dry-run: 파일을 쓰지 않고 종료.');
  process.exit(0);
}

// ── 3) 원본 확보 (다운로드 또는 로컬 파일) ───────────────────
let tmpPath;
if (opt.local) {
  tmpPath = resolve(process.cwd(), opt.local);
  if (!existsSync(tmpPath)) die(`로컬 파일이 없다: ${tmpPath}`);
} else {
  tmpPath = resolve(tmpdir(), `cover-src-${slug}-${process.pid}`);
  try {
    curlFile(srcUrl, tmpPath);
  } catch (e) {
    die(`${e.message}\n  → upload.wikimedia.org가 막혀 있으면 이 경로는 쓸 수 없다.`);
  }
}
const bytes = statSync(tmpPath).size;
if (bytes < 4096) die(`내려받은 파일이 너무 작다(${bytes}B) — 응답이 이미지가 아닐 수 있다.`);

// ── 4) 1200x630 크롭 (Chromium object-fit: cover) ────────────
async function loadChromium() {
  const cands = ['playwright', '/opt/node22/lib/node_modules/playwright/index.js', 'playwright-core'];
  for (const c of cands) {
    try { const mod = await import(c); return (mod.chromium || mod.default?.chromium); } catch { /* next */ }
  }
  return null;
}
const chromium = await loadChromium();
if (!chromium) die('playwright 미탑재 — 크롭할 수단이 없다.');

const dataUri = `data:image/*;base64,${readFileSync(tmpPath).toString('base64')}`;
const objectPosition = focus === 'top' ? '50% 15%' : focus === 'bottom' ? '50% 85%' : '50% 50%';
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;width:1200px;height:630px;background:#0b0b0d;overflow:hidden}
  img{width:1200px;height:630px;object-fit:cover;object-position:${objectPosition};display:block}
</style></head><body><img src="${dataUri}"></body></html>`;

const outDir = resolve(ROOT, 'public/images/covers');
mkdirSync(outDir, { recursive: true });
const outPath = resolve(outDir, `${slug}.jpg`);

let browser;
try {
  const launchOpts = { args: ['--no-sandbox', '--disable-dev-shm-usage'] };
  try { browser = await chromium.launch(launchOpts); }
  catch { browser = await chromium.launch({ ...launchOpts, executablePath: '/opt/pw-browsers/chromium' }); }
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'load' });
  await page.waitForFunction(() => {
    const img = document.querySelector('img');
    return img && img.complete && img.naturalWidth > 0;
  }, null, { timeout: 15000 });
  await page.screenshot({ path: outPath, type: 'jpeg', quality: 86, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await browser.close();
} catch (e) {
  if (browser) try { await browser.close(); } catch { /* noop */ }
  die(`크롭 실패: ${e.message}`);
}

// ── 5) 크레딧 표에 한 줄 추가 (출처 표기 의무) ───────────────
const year = new Date().getFullYear();
const creditsPath = resolve(ROOT, opt.credits || `_workspace/image-credits-${year}.md`);
const subject = opt.subject
  || (fileTitle ? fileTitle.replace(/^File:/, '').replace(/\.[a-z]+$/i, '') : '(피사체 미기재)');
const origin = fileTitle
  ? `Wikimedia Commons "${fileTitle.replace(/^File:/, '')}"`
  : descUrl;
const source = artist ? `${origin} — ${artist}` : origin;
const row = `| covers/${slug}.jpg | ${subject} | ${source} | ${license || '—'} |`;

let credits = existsSync(creditsPath) ? readFileSync(creditsPath, 'utf-8') : `# 이미지 출처 (${year}년 포스트)

> 커버·본문 이미지는 웹 검색으로 찾은 실제 사진이며 크롭·리사이즈만 했다.
> 개인 블로그이므로 라이선스 종류를 따지지 않되(저자 지시 2026-08-11), **출처는 반드시 남긴다.**
> 라이선스 칸은 확인된 경우에만 채운다.

| 파일 | 피사체 | 출처 | 라이선스(있으면) |
|------|--------|------|------------------|
`;
// 같은 슬러그로 커버를 교체 재실행하는 경우가 흔하다(더 나은 사진을 찾았을 때).
// 예전에는 행이 이미 있으면 통째로 건너뛰어서 **이전 이미지의 출처가 그대로 남는**
// 크레딧 불일치가 생겼다(2026-08-12 실제 발생). 그래서 있으면 제자리에서 갱신한다.
const slugRe = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const rowRe = new RegExp(`^\\|\\s*covers/${slugRe}\\.jpg\\s*\\|.*$`, 'm');
let creditAction;
if (rowRe.test(credits)) {
  const before = credits;
  credits = credits.replace(rowRe, row);
  creditAction = before === credits ? '변경 없음(동일 출처)' : '기존 행 갱신(이미지 교체 반영)';
} else {
  credits = credits.replace(/\s*$/, '\n') + row + '\n';
  creditAction = '새 행 추가';
}
writeFileSync(creditsPath, credits, 'utf-8');

console.log(`[cover:fetch] 저장 완료: public/images/covers/${slug}.jpg (${(statSync(outPath).size / 1024).toFixed(0)}KB)`);
console.log(`[cover:fetch] 크레딧 기록: ${creditsPath.replace(ROOT + '/', '')} — ${creditAction}`);

// 파일이 사라졌는데 크레딧 행만 남은 경우를 경고한다(작업 중 만들었다 지운 후보 이미지 등).
// 경고일 뿐 발행을 막지 않는다.
const orphans = credits
  .split('\n')
  .map((l) => l.match(/^\|\s*covers\/([A-Za-z0-9._-]+\.jpg)\s*\|/))
  .filter(Boolean)
  .map((m) => m[1])
  .filter((f) => !existsSync(resolve(ROOT, 'public/images/covers', f)));
if (orphans.length) {
  console.warn(`[cover:fetch] 경고 — 크레딧 표에만 남은 항목 ${orphans.length}건(파일 없음): ${orphans.join(', ')}`);
  console.warn('[cover:fetch]   삭제한 후보 이미지라면 해당 행을 지우세요.');
}
process.exit(0);
