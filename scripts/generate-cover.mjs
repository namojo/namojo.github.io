#!/usr/bin/env node
/**
 * generate-cover.mjs — 데일리 포스트용 결정적 브랜드 커버 생성기
 *
 * 왜 이렇게 만드나:
 *   - 데일리 클라우드 에이전트 환경에는 AI 이미지 생성 수단도, 한글 폰트도 없다.
 *     따라서 (1) 사진풍 AI 커버는 불가, (2) 그림 안에 한글을 넣으면 두부박스로 깨진다.
 *   - 대신 슬러그의 "영문 키워드 + 카테고리 + 날짜 + 브랜드 팔레트"로 글마다 고유한
 *     커버를 결정적으로 렌더한다. 외부 네트워크/폰트/이미지 의존이 전혀 없다.
 *   - 렌더는 환경에 미리 깔린 Chromium(Playwright)으로 1200x630(OG 비율) 스크린샷 → JPG.
 *
 * 사용:  node scripts/generate-cover.mjs _posts/YYYY-MM-DD-slug.md
 * 출력:  public/images/covers/{slug}.jpg
 * 종료코드: 0=생성 성공, 2=렌더 불가(호출측은 coverImage를 비워 hero 폴백 처리)
 *
 * 비차단 원칙: 이 스크립트가 실패해도 발행 파이프라인은 멈추지 않는다.
 */
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// ── 입력 파싱 ────────────────────────────────────────────────
const mdArg = process.argv[2];
if (!mdArg) {
  console.error('usage: node scripts/generate-cover.mjs _posts/YYYY-MM-DD-slug.md');
  process.exit(2);
}
const mdPath = resolve(ROOT, mdArg);
if (!existsSync(mdPath)) {
  console.error(`[cover] 파일 없음: ${mdPath}`);
  process.exit(2);
}
const fname = basename(mdPath, '.md');          // 2026-07-18-waico-shanghai-ai-world-order
const datePart = fname.slice(0, 10);            // 2026-07-18
const slug = fname.slice(11);                   // waico-shanghai-ai-world-order

const raw = readFileSync(mdPath, 'utf-8');
const fm = {};
const m = raw.match(/^---\n([\s\S]*?)\n---/);
if (m) {
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) fm[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  }
}
const category = (fm.category || 'AI').replace(/["']/g, '');

// ── 결정적 해시 (slug 기반) ──────────────────────────────────
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
const H = hash(slug);

// ── 슬러그 → 화면용 영문 키워드 2개 ──────────────────────────
const STOP = new Set(['the','a','an','and','or','to','of','in','on','for','vs','as','is','ai','2024','2025','2026','q1','q2','q3','q4']);
let tokens = slug.split('-').filter((t) => t && !STOP.has(t.toLowerCase()) && !/^\d+$/.test(t));
// 너무 긴 토큰(>11자)은 그림에서 넘치므로, 다른 토큰이 남아 있으면 제외한다
// (예: anthropomorphic → 제외하고 china/companion 사용).
const short = tokens.filter((t) => t.length <= 11);
if (short.length) tokens = short;
const picked = (tokens.length ? tokens : slug.split('-')).slice(0, 2);
const kwLines = picked.map((t) => t.toUpperCase());
const keyword = kwLines.join('\n');
// 가장 긴 줄 길이에 맞춰 폰트 크기 자동 축소 (넘침 방지). 대문자 볼드 advance ~0.72em, 가용폭 ~1080px.
const maxLen = Math.max(...kwLines.map((l) => l.length), 1);
const kwFont = Math.max(56, Math.min(118, Math.floor(1080 / (maxLen * 0.72))));

// ── 카테고리/팔레트 매핑 (브랜드 Ink/Warm/Coral) ─────────────
const PALETTES = [
  { name: 'warm',  a: '#C6462C', b: '#6B281E', ink: '#2A0F0B', text: '#FDF6F1', accent: '#EBB99A' },
  { name: 'ink',   a: '#3A3A3C', b: '#0D0D0E', ink: '#0D0D0E', text: '#F5F5F7', accent: '#86868B' },
  { name: 'blue',  a: '#0A4A8F', b: '#0D0D0E', ink: '#04121F', text: '#EAF2FB', accent: '#5FA8E6' },
  { name: 'coral', a: '#E11C4C', b: '#6B281E', ink: '#2A0810', text: '#FFF0F3', accent: '#F3AEBD' },
  { name: 'steel', a: '#2E4756', b: '#0D0D0E', ink: '#08151C', text: '#EAF1F4', accent: '#7FA6B5' },
];
// 카테고리로 1차 결정, 같은 카테고리 안에서는 slug 해시로 미세 변주(현재는 팔레트 고정)
const CAT_LABEL = {
  AI: 'AI NEWS', Story: 'STORY', Policy: 'POLICY', Semiconductor: 'SILICON',
};
const catKey = category.toLowerCase();
let pal;
if (catKey.includes('semi') || slug.includes('tsmc') || slug.includes('hbm') || slug.includes('foundry') || slug.includes('semiconductor')) pal = PALETTES[4];
else if (slug.includes('policy') || slug.includes('rules') || slug.includes('crackdown') || slug.includes('sues') || slug.includes('regulat') || slug.includes('world-order') || slug.includes('waico')) pal = PALETTES[1];
else if (slug.includes('ransomware') || slug.includes('security') || slug.includes('jade')) pal = PALETTES[2];
else pal = PALETTES[H % PALETTES.length];

const eyebrow = (CAT_LABEL[category] || category.toUpperCase()) + '  ·  ' + datePart.replace(/-/g, '.');

// ── 결정적 장식(도트 그리드 + 아크) 좌표 ─────────────────────
const arcCx = 980 + (H % 120);
const arcCy = 120 + ((H >> 3) % 120);
const rot = (H % 40) - 20;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { width:1200px; height:630px; }
  .cover {
    width:1200px; height:630px; position:relative; overflow:hidden;
    background: radial-gradient(120% 130% at 82% 18%, ${pal.a} 0%, ${pal.b} 55%, ${pal.ink} 100%);
    font-family: 'DejaVu Sans','Liberation Sans','Helvetica Neue',Arial,sans-serif;
    color:${pal.text};
  }
  .grid { position:absolute; inset:0;
    background-image: radial-gradient(${pal.accent}22 1.4px, transparent 1.4px);
    background-size: 30px 30px; opacity:.35;
    -webkit-mask-image: linear-gradient(115deg, transparent 40%, #000 100%);
            mask-image: linear-gradient(115deg, transparent 40%, #000 100%);
  }
  .arc { position:absolute; border-radius:50%;
    border:2px solid ${pal.accent}; opacity:.5; }
  .a1 { width:520px; height:520px; left:${arcCx - 260}px; top:${arcCy - 60}px;
        transform:rotate(${rot}deg); border-color:${pal.accent}66; }
  .a2 { width:760px; height:760px; left:${arcCx - 380}px; top:${arcCy - 180}px;
        border-color:${pal.accent}33; }
  .content { position:absolute; left:84px; top:0; height:630px;
    display:flex; flex-direction:column; justify-content:center; max-width:760px; }
  .eyebrow { font-size:22px; font-weight:700; letter-spacing:.22em;
    color:${pal.accent}; text-transform:uppercase; margin-bottom:26px; }
  .keyword { font-size:${kwFont}px; line-height:.98; font-weight:800; letter-spacing:-.02em;
    white-space:pre-line; text-shadow:0 2px 30px rgba(0,0,0,.28); }
  .rule { width:96px; height:6px; background:${pal.accent}; margin:38px 0 22px; border-radius:3px; }
  .brand { font-size:22px; font-weight:600; letter-spacing:.02em; color:${pal.text}cc; }
  .brand b { color:${pal.text}; }
</style></head><body>
  <div class="cover">
    <div class="grid"></div>
    <div class="arc a2"></div>
    <div class="arc a1"></div>
    <div class="content">
      <div class="eyebrow">${eyebrow}</div>
      <div class="keyword">${keyword.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</div>
      <div class="rule"></div>
      <div class="brand">엔지니어를 위한 이야기 공장</div>
    </div>
  </div>
</body></html>`;

// ── Playwright 로드 (로컬 → 전역 폴백) ───────────────────────
async function loadChromium() {
  const cands = ['playwright', '/opt/node22/lib/node_modules/playwright/index.js', 'playwright-core'];
  for (const c of cands) {
    try { const mod = await import(c); return (mod.chromium || mod.default?.chromium); } catch { /* next */ }
  }
  return null;
}

const chromium = await loadChromium();
if (!chromium) {
  console.error('[cover] playwright 미탑재 — 커버 생성 건너뜀(hero 폴백)');
  process.exit(2);
}

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
  await page.screenshot({ path: outPath, type: 'jpeg', quality: 84, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await browser.close();
  console.log(`[cover] 생성 완료: public/images/covers/${slug}.jpg  (palette=${pal.name}, kw=${picked.join('/')})`);
  process.exit(0);
} catch (e) {
  if (browser) try { await browser.close(); } catch {}
  console.error('[cover] 렌더 실패 — 커버 생성 건너뜀(hero 폴백):', e.message);
  process.exit(2);
}
