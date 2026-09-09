#!/usr/bin/env node
/**
 * TOOLKIT build — 의존성 0 (Node 내장 모듈만 사용)
 *
 * tools.json 이 단일 진실 원천이고, 이 스크립트가 아래를 생성/주입한다:
 *   1. index.html  : 카드 그리드, 태그 칩, 카테고리 탭  (정적 마크업 → SEO + JS 없이도 목록 노출)
 *   2. 각 도구 페이지: <head> 메타(title/desc/OG/canonical/CSP), 공통 헤더·푸터
 *   3. sitemap.xml, robots.txt
 *
 * 보안 설계상 핵심 두 가지:
 *   - CSP 는 도구가 tools.json 에 선언한 `network` 값에서 자동 파생된다.
 *     "none" 이라고 선언한 도구는 connect-src 'none' 이 강제로 박힌다.
 *     즉 "서버로 안 보낸다"가 문서상 약속이 아니라 빌드 산출물로 검증 가능해진다.
 *   - `sensitive: true` 페이지에는 트래커/광고 스니펫이 절대 주입되지 않는다.
 *     개발자가 실수로 넣을 수 있는 경로 자체를 파이프라인에서 없앤다.
 *
 * 사용법:  node scripts/build.mjs [--check]
 *   --check : 파일을 쓰지 않고 검증만 (CI 용)
 */

import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK_ONLY = process.argv.includes('--check');

const problems = [];
const notes = [];
const fail = (m) => problems.push(m);
const note = (m) => notes.push(m);

/* ────────────────────────── 유틸 ────────────────────────── */

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const readJSON = async (p) => JSON.parse(await readFile(path.join(ROOT, p), 'utf8'));

const exists = async (p) => {
  try { await stat(path.join(ROOT, p)); return true; } catch { return false; }
};

/** <!-- TK:NAME --> ... <!-- /TK:NAME --> 사이를 교체. 재빌드해도 결과가 같다(idempotent). */
function injectBlock(html, name, content) {
  const re = new RegExp(
    `(<!--\\s*TK:${name}\\s*-->)[\\s\\S]*?(<!--\\s*/TK:${name}\\s*-->)`,
    'g'
  );
  if (!re.test(html)) {
    fail(`마커 <!-- TK:${name} --> 를 찾을 수 없습니다.`);
    return html;
  }
  return html.replace(re, (_m, open, close) => `${open}\n${content}\n${close}`);
}

/* ────────────────────────── CSP 정책 ────────────────────────── */

/**
 * 선언된 network 자세(posture) → CSP.
 * default-src 'none' 에서 출발해 필요한 것만 연다. 화이트리스트 방식.
 */
const CSP_BY_NETWORK = {
  none: {
    'connect-src': "'none'",
    note: '외부 통신 없음',
  },
  'local-model': {
    // 브라우저 내 추론(Transformers.js 등)이 모델 가중치를 내려받는 경우에만.
    'connect-src': "'self' https://huggingface.co https://cdn-lfs.huggingface.co https://cdn-lfs-us-1.hf.co",
    'worker-src': "'self' blob:",
    note: '모델 가중치 다운로드 허용(입력 데이터는 전송되지 않음)',
  },
  external: {
    'connect-src': "'self'",
    note: '외부 API 호출 — allowedHosts 필수',
  },
};

function buildCSP(tool) {
  const posture = tool ? tool.network : 'none';
  const spec = CSP_BY_NETWORK[posture];
  if (!spec) {
    fail(`[${tool.id}] 알 수 없는 network 값: ${tool.network}`);
    return '';
  }

  const d = {
    'default-src': "'none'",
    'script-src': "'self'",
    'style-src': "'self'",
    'img-src': "'self' data: blob:",
    'font-src': "'self'",
    'media-src': "'self' blob:",
    'connect-src': spec['connect-src'],
    'frame-src': "'self'",
    'form-action': "'none'",
    'base-uri': "'none'",
  };
  if (spec['worker-src']) d['worker-src'] = spec['worker-src'];

  if (posture === 'external') {
    const hosts = (tool.allowedHosts || []).filter(Boolean);
    if (!hosts.length) {
      fail(`[${tool.id}] network: "external" 인데 allowedHosts 가 비어 있습니다. 빌드를 중단합니다.`);
    }
    d['connect-src'] = ["'self'", ...hosts].join(' ');
  }

  return Object.entries(d).map(([k, v]) => `${k} ${v}`).join('; ');
}

/* ────────────────────────── <head> 생성 ────────────────────────── */

function headMeta({ site, title, description, canonical, csp, depth, extraNoindex }) {
  const up = depth === 0 ? '' : '../'.repeat(depth);
  const rows = [
    `<meta http-equiv="Content-Security-Policy" content="${esc(csp)}">`,
    `<meta name="referrer" content="strict-origin-when-cross-origin">`,
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    `<link rel="canonical" href="${esc(canonical)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${esc(site.name)}">`,
    `<meta property="og:locale" content="${esc(site.locale)}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${esc(canonical)}">`,
    `<meta name="twitter:card" content="summary">`,
    `<link rel="stylesheet" href="${up}assets/base.css">`,
  ];
  if (extraNoindex) rows.push(`<meta name="robots" content="noindex">`);
  if (site.verification?.google) {
    rows.push(`<meta name="google-site-verification" content="${esc(site.verification.google)}">`);
  }
  if (site.verification?.naver) {
    rows.push(`<meta name="naver-site-verification" content="${esc(site.verification.naver)}">`);
  }
  return rows.map((r) => '  ' + r).join('\n');
}

/* ────────────────────────── 카드/필터 마크업 ────────────────────────── */

function renderCards(tools, catById) {
  return tools
    .map((t) => {
      const cat = catById.get(t.category);
      const haystack = [t.title, t.summary, ...(t.keywords || []), ...(t.tags || []), cat?.label]
        .join(' ')
        .toLowerCase();
      const tags = (t.tags || [])
        .map((tag) => `<li class="tag">${esc(tag)}</li>`)
        .join('');
      return `      <article class="card" data-id="${esc(t.id)}" data-cat="${esc(t.category)}"
               data-tags="${esc((t.tags || []).join('|'))}"
               data-search="${esc(haystack)}"
               data-path="tools/${esc(t.id)}/">
        <button class="star" type="button" aria-pressed="false"
                aria-label="${esc(t.title)} 즐겨찾기 토글">
          <span aria-hidden="true">☆</span>
        </button>
        <p class="card-cat">${esc(cat ? cat.label : t.category)}</p>
        <h3 class="card-title"><a href="tools/${esc(t.id)}/">${esc(t.title)}</a></h3>
        <p class="card-sum">${esc(t.summary)}</p>
        <ul class="tags">${tags}</ul>
        <p class="card-meta"><span class="mono">v${esc(t.version)}</span> · ${esc(t.updated)}${
          t.network === 'none' ? ' · <span class="badge">외부통신 없음</span>' : ''
        }</p>
      </article>`;
    })
    .join('\n');
}

function renderCatTabs(categories, tools) {
  const used = new Set(tools.map((t) => t.category));
  const btn = (id, label, n) =>
    `        <button class="chip" type="button" data-cat="${esc(id)}">${esc(label)}<span class="n">${n}</span></button>`;
  return [
    `        <button class="chip is-on" type="button" data-cat="*">전체<span class="n">${tools.length}</span></button>`,
    `        <button class="chip" type="button" data-cat="@fav">즐겨찾기<span class="n" data-fav-count>0</span></button>`,
    ...categories
      .filter((c) => used.has(c.id))
      .map((c) => btn(c.id, c.label, tools.filter((t) => t.category === c.id).length)),
  ].join('\n');
}

function renderTagChips(tools) {
  const counts = new Map();
  for (const t of tools) for (const tag of t.tags || []) counts.set(tag, (counts.get(tag) || 0) + 1);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ko'))
    .map(([tag, n]) => `        <button class="chip chip-sm" type="button" data-tag="${esc(tag)}">#${esc(tag)}<span class="n">${n}</span></button>`)
    .join('\n');
}

/* ────────────────────────── 공통 헤더/푸터 ────────────────────────── */

function renderHeader(site, depth) {
  const up = depth === 0 ? '' : '../'.repeat(depth);
  return `  <a class="skip" href="#main">본문으로 건너가기</a>
  <header class="site-head">
    <a class="brand" href="${up}index.html"><span class="brand-mark" aria-hidden="true">TK</span><span>${esc(site.name)}</span></a>
    <nav aria-label="주요">
      <a href="${up}index.html">전체 도구</a>
      <a href="${up}about.html">소개</a>
    </nav>
  </header>`;
}

function renderFooter(site, tool) {
  const posture = tool ? CSP_BY_NETWORK[tool.network]?.note : '외부 통신 없음';
  const ver = tool ? `<span class="mono">v${esc(tool.version)}</span> · ${esc(tool.updated)} · ` : '';
  return `  <footer class="site-foot">
    <p>${ver}${esc(posture || '')}</p>
    <p>입력한 파일과 텍스트는 브라우저를 벗어나지 않습니다. 이 페이지는 서버로 데이터를 보내지 않습니다.</p>
    <p>© ${new Date().getFullYear()} ${esc(site.owner)} · <a href="mailto:${esc(site.contact)}">${esc(site.contact)}</a></p>
  </footer>`;
}

/** 민감 페이지에는 어떤 경우에도 트래커를 주입하지 않는다. */
function renderTracker(site, isSensitive, label) {
  if (isSensitive) {
    note(`트래커 미주입(민감 페이지): ${label}`);
    return '  <!-- sensitive: true → 트래커/광고 스니펫 주입 금지 -->';
  }
  if (!site.tracker?.enabled || !site.tracker?.snippet) {
    return '  <!-- tracker.enabled = false -->';
  }
  return '  ' + site.tracker.snippet;
}

/* ────────────────────────── 메인 ────────────────────────── */

const site = await readJSON('site.json');
const reg = await readJSON('tools.json');

const catById = new Map(reg.categories.map((c) => [c.id, c]));
const seen = new Set();

for (const t of reg.tools) {
  for (const k of ['id', 'category', 'title', 'summary', 'version', 'updated']) {
    if (!t[k]) fail(`도구 항목에 필수 필드 '${k}' 가 없습니다: ${JSON.stringify(t.id ?? t)}`);
  }
  if (!/^[a-z0-9][a-z0-9-]*$/.test(t.id || '')) fail(`id 형식 위반(소문자·숫자·하이픈): ${t.id}`);
  if (seen.has(t.id)) fail(`id 중복: ${t.id}`);
  seen.add(t.id);
  if (!catById.has(t.category)) fail(`[${t.id}] 존재하지 않는 category: ${t.category}`);
  if (typeof t.sensitive !== 'boolean') fail(`[${t.id}] sensitive 는 true/false 로 명시해야 합니다.`);
  if (!CSP_BY_NETWORK[t.network]) fail(`[${t.id}] network 는 none | local-model | external 중 하나여야 합니다.`);
  if (!(await exists(`tools/${t.id}/index.html`))) fail(`[${t.id}] tools/${t.id}/index.html 이 없습니다.`);
}

/* 레지스트리에 없는 고아 디렉터리 탐지 */
try {
  for (const d of await readdir(path.join(ROOT, 'tools'), { withFileTypes: true })) {
    if (d.isDirectory() && !seen.has(d.name)) {
      fail(`tools/${d.name}/ 이 tools.json 에 등록되지 않았습니다(고아 디렉터리).`);
    }
  }
} catch { /* tools/ 없음 */ }

if (problems.length) {
  console.error('\n✗ 빌드 검증 실패\n');
  for (const p of problems) console.error('  · ' + p);
  process.exit(1);
}

const base = site.baseUrl.replace(/\/$/, '') + site.basePath;
const written = [];
const write = async (rel, content) => {
  if (!CHECK_ONLY) await writeFile(path.join(ROOT, rel), content, 'utf8');
  written.push(rel);
};

/* ── index.html ── */
{
  let html = await readFile(path.join(ROOT, 'index.html'), 'utf8');
  html = injectBlock(html, 'HEAD', headMeta({
    site,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    canonical: base,
    csp: buildCSP(null),
    depth: 0,
  }));
  html = injectBlock(html, 'HEADER', renderHeader(site, 0));
  html = injectBlock(html, 'CATS', renderCatTabs(reg.categories, reg.tools));
  html = injectBlock(html, 'TAGS', renderTagChips(reg.tools));
  html = injectBlock(html, 'CARDS', renderCards(reg.tools, catById));
  html = injectBlock(html, 'FOOTER', renderFooter(site, null));
  html = injectBlock(html, 'TRACKER', renderTracker(site, false, 'index.html'));
  await write('index.html', html);
}

/* ── about.html ── */
if (await exists('about.html')) {
  let html = await readFile(path.join(ROOT, 'about.html'), 'utf8');
  html = injectBlock(html, 'HEAD', headMeta({
    site,
    title: `소개 · ${site.name}`,
    description: `${site.name} 의 운영 방식과 데이터 처리 원칙.`,
    canonical: base + 'about.html',
    csp: buildCSP(null),
    depth: 0,
  }));
  html = injectBlock(html, 'HEADER', renderHeader(site, 0));
  html = injectBlock(html, 'FOOTER', renderFooter(site, null));
  html = injectBlock(html, 'TRACKER', renderTracker(site, false, 'about.html'));
  await write('about.html', html);
}

/* ── 도구 페이지 ── */
for (const t of reg.tools) {
  const rel = `tools/${t.id}/index.html`;
  let html = await readFile(path.join(ROOT, rel), 'utf8');
  const canonical = `${base}tools/${t.id}/`;
  html = injectBlock(html, 'HEAD', headMeta({
    site,
    title: `${t.title} · ${site.name}`,
    description: t.summary,
    canonical,
    csp: buildCSP(t),
    depth: 2,
  }));
  html = injectBlock(html, 'HEADER', renderHeader(site, 2));
  html = injectBlock(html, 'FOOTER', renderFooter(site, t));
  html = injectBlock(html, 'TRACKER', renderTracker(site, t.sensitive, rel));
  // 도구 id 를 마크업에 심어 SDK 가 스토리지 네임스페이스로 사용한다.
  html = html.replace(/(<html[^>]*?)\sdata-tool-id="[^"]*"/, '$1').replace(/<html([^>]*)>/, `<html$1 data-tool-id="${esc(t.id)}">`);
  await write(rel, html);
}

/* ── sitemap.xml / robots.txt ── */
{
  const urls = [
    { loc: base, pri: '1.0' },
    ...(await exists('about.html') ? [{ loc: base + 'about.html', pri: '0.5' }] : []),
    ...reg.tools.map((t) => ({ loc: `${base}tools/${t.id}/`, pri: '0.8', lastmod: t.updated })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <priority>${u.pri}</priority>
  </url>`).join('\n')}
</urlset>
`;
  await write('sitemap.xml', xml);
  await write('robots.txt', `User-agent: *\nAllow: ${site.basePath}\n\nSitemap: ${site.baseUrl.replace(/\/$/, '')}${site.basePath}sitemap.xml\n`);
}

/* ── 리포트 ── */
console.log(`\n✓ ${CHECK_ONLY ? '검증' : '빌드'} 완료 — 도구 ${reg.tools.length}개 / 카테고리 ${reg.categories.length}개\n`);
for (const t of reg.tools) {
  console.log(`  ${t.id.padEnd(14)} ${t.sensitive ? '[민감]' : '[일반]'} network=${t.network.padEnd(11)} → connect-src ${CSP_BY_NETWORK[t.network]['connect-src']}`);
}
console.log('');
for (const n of notes) console.log('  · ' + n);
console.log(`\n  ${CHECK_ONLY ? '검사한' : '기록한'} 파일 ${written.length}개: ${written.join(', ')}\n`);
