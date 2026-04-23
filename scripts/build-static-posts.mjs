#!/usr/bin/env node
/**
 * 각 포스트별 정적 HTML 페이지를 dist/p/{id}/index.html 에 생성.
 *
 * 목적: SNS(X/페이스북/카카오톡/LinkedIn)의 크롤러가 해시 경로 뒤의
 *       메타를 읽지 못하는 문제를 해결. 각 포스트에 대해 자체 OG/Twitter Card
 *       태그를 가진 정적 페이지를 만들어, 공유 시 올바른 미리보기 카드가
 *       나오고 외부 링크 클릭 시에도 브랜드 타이포그래피로 깨끗하게
 *       렌더링되도록 한다.
 *
 * 실행: `node scripts/build-static-posts.mjs` (npm run build 이후 자동 호출)
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

// ─── Config ──────────────────────────────────────────────────────────────
// config.ts의 값을 런타임에 읽기 어려우므로, 빌드 시 사용할 SITE URL은 여기서 결정.
// 필요하면 환경변수 SITE_URL로 오버라이드 가능.
const SITE_URL = (process.env.SITE_URL || 'https://namojo.github.io').replace(/\/$/, '');
const SITE_TITLE = '엔지니어를 위한 이야기 공장';
const SITE_AUTHOR = '조남호 (namojo)';

const DIST = join(ROOT, 'dist');
const POSTS_JSON = join(ROOT, 'public', 'posts.json');

// ─── Minimal markdown → HTML ─────────────────────────────────────────────
// MarkdownRenderer.tsx의 동작과 평행하게 유지 (동일한 서브셋 지원).
function escapeHtml(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderInline(line) {
  // Image  ![alt](url) — 독립 줄로 처리하므로 여기 이전에 match함
  // Bold   **text** → <strong>
  // Link   [text](url) → <a>
  let out = escapeHtml(line);
  out = out.replace(/\*\*([^*]+?)\*\*/g, (_, g1) => `<strong>${g1}</strong>`);
  out = out.replace(/\[([^\]]+?)\]\(([^)]+?)\)/g, (_, text, url) => `<a href="${url}">${text}</a>`);
  return out;
}

function markdownToHtml(md) {
  const lines = md.split('\n');
  const out = [];
  let listType = null; // 'ul' or 'ol'
  let quoteOpen = false;

  const closeList = () => {
    if (listType) { out.push(`</${listType}>`); listType = null; }
  };
  const closeQuote = () => {
    if (quoteOpen) { out.push('</blockquote>'); quoteOpen = false; }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/\r$/, '');

    // Image
    const imgMatch = line.match(/^!\[([^\]]*)\]\((https?:[^)]+)\)\s*$/);
    if (imgMatch) {
      closeList(); closeQuote();
      const alt = escapeHtml(imgMatch[1]);
      const url = imgMatch[2];
      out.push(`<figure><img src="${url}" alt="${alt}" loading="lazy"/>${alt ? `<figcaption>${alt}</figcaption>` : ''}</figure>`);
      continue;
    }

    // Headings (#1 ~ #6). 관대한 매치: "### " 처럼 공백 하나 + 본문, 또는 "####" 단독 라인.
    const hMatch = line.match(/^(#{1,6})(?:\s+(.*))?$/);
    if (hMatch) {
      closeList(); closeQuote();
      const level = Math.min(6, hMatch[1].length);
      const text = (hMatch[2] || '').trim();
      if (!text) continue; // 빈 헤딩은 건너뜀
      const tag = level === 1 ? 'h2' : `h${level}`; // h1은 타이틀 중복 방지로 h2로
      out.push(`<${tag}>${renderInline(text)}</${tag}>`);
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      closeList();
      if (!quoteOpen) { out.push('<blockquote>'); quoteOpen = true; }
      out.push(`<p>${renderInline(line.slice(2))}</p>`);
      continue;
    }

    // Table (GFM): | col1 | col2 | ... 형식
    if (line.includes('|') && lines[i + 1] && /^\s*\|[-:\s|]+\|\s*$/.test(lines[i + 1])) {
      closeList(); closeQuote();
      const split = (row) => row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((s) => s.trim());
      const headers = split(line);
      i += 2; // skip header + separator
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].includes('|')) {
        rows.push(split(lines[i]));
        i++;
      }
      i--; // for-loop 증가 보정
      const ths = headers.map((h) => `<th>${renderInline(h)}</th>`).join('');
      const trs = rows
        .map((r) => `<tr>${r.map((c) => `<td>${renderInline(c)}</td>`).join('')}</tr>`)
        .join('');
      out.push(`<div class="table-wrap"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`);
      continue;
    }

    // Unordered list
    if (/^- /.test(line)) {
      closeQuote();
      if (listType !== 'ul') { closeList(); out.push('<ul>'); listType = 'ul'; }
      out.push(`<li>${renderInline(line.slice(2))}</li>`);
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      closeQuote();
      if (listType !== 'ol') { closeList(); out.push('<ol>'); listType = 'ol'; }
      out.push(`<li>${renderInline(line.replace(/^\d+\.\s+/, ''))}</li>`);
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      closeList(); closeQuote();
      continue;
    }

    // Paragraph
    closeList(); closeQuote();
    out.push(`<p>${renderInline(line)}</p>`);
  }

  closeList(); closeQuote();
  return out.join('\n');
}

// ─── ISO 날짜 변환 ("Feb 20, 2024" → "2024-02-20") ──────────────────────
const MONTHS = { Jan:1, Feb:2, Mar:3, Apr:4, May:5, Jun:6, Jul:7, Aug:8, Sep:9, Oct:10, Nov:11, Dec:12 };
function toIsoDate(display) {
  const m = display.match(/^(\w{3})\s+(\d{1,2}),\s+(\d{4})/);
  if (!m) return '';
  const [, mon, d, y] = m;
  const mm = String(MONTHS[mon] || 1).padStart(2, '0');
  const dd = String(d).padStart(2, '0');
  return `${y}-${mm}-${dd}`;
}

// ─── HTML 템플릿 ────────────────────────────────────────────────────────
function postHtml(post) {
  const url = `${SITE_URL}/p/${post.id}/`;
  const title = `${post.title} — ${SITE_TITLE}`;
  const description = (post.excerpt || '').replace(/\n/g, ' ').trim();
  const isoDate = toIsoDate(post.date);
  const image = post.coverImage || '';
  const contentHtml = markdownToHtml(post.content || '');
  const tags = (post.tags || []).map(t => `<span class="tag">#${escapeHtml(t)}</span>`).join(' ');
  const articleTags = (post.tags || [])
    .map(t => `<meta property="article:tag" content="${escapeHtml(t)}"/>`)
    .join('\n  ');

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}"/>
  <meta name="author" content="${escapeHtml(SITE_AUTHOR)}"/>
  <link rel="canonical" href="${url}"/>

  <!-- Open Graph -->
  <meta property="og:type" content="article"/>
  <meta property="og:site_name" content="${escapeHtml(SITE_TITLE)}"/>
  <meta property="og:title" content="${escapeHtml(post.title)}"/>
  <meta property="og:description" content="${escapeHtml(description)}"/>
  <meta property="og:url" content="${url}"/>
  <meta property="og:locale" content="ko_KR"/>
  ${image ? `<meta property="og:image" content="${image}"/>` : ''}
  ${image ? `<meta property="og:image:alt" content="${escapeHtml(post.title)}"/>` : ''}
  <meta property="article:author" content="${escapeHtml(SITE_AUTHOR)}"/>
  ${isoDate ? `<meta property="article:published_time" content="${isoDate}T09:00:00+09:00"/>` : ''}
  <meta property="article:section" content="${escapeHtml(post.category || 'AI')}"/>
  ${articleTags}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${escapeHtml(post.title)}"/>
  <meta name="twitter:description" content="${escapeHtml(description)}"/>
  ${image ? `<meta name="twitter:image" content="${image}"/>` : ''}

  <!-- Pretendard (한글 최적, SF Pro 대응) — 본문·UI 통일 -->
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"/>

  <style>
    *, *::before, *::after { box-sizing: border-box; }
    :root { color-scheme: light dark; }
    html { font-size: 17px; -webkit-text-size-adjust: 100%; }

    :root {
      --bg: #FBFBFD;
      --surface: #FFFFFF;
      --text: #1D1D1F;
      --text-muted: #6E6E73;
      --hairline: #E8E8ED;
      --warm: #C6462C;
      --warm-bg: #FDF6F1;
      --link: #0066CC;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0D0D0E;
        --surface: #1D1D1F;
        --text: #F5F5F7;
        --text-muted: #A1A1A6;
        --hairline: #2E2E30;
        --warm: #EBB99A;
        --warm-bg: #2A241C;
        --link: #6BB9FF;
      }
    }

    body {
      margin: 0; padding: 0;
      font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Noto Sans KR', sans-serif;
      color: var(--text); background: var(--bg);
      line-height: 1.6;
      word-break: keep-all; overflow-wrap: break-word;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a { color: var(--link); text-decoration: none; }
    a:hover { text-decoration: underline; text-underline-offset: 3px; }

    .wrapper { max-width: 720px; margin: 0 auto; padding: 0 1.5rem; }
    .wrapper-wide { max-width: 1080px; margin: 0 auto; padding: 0 1.5rem; }

    /* ── Header — Apple 메뉴바 감성 ── */
    header.site {
      position: sticky; top: 0; z-index: 10;
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      background: rgba(255,255,255,0.82);
      border-bottom: 1px solid var(--hairline);
      padding: .8rem 0;
    }
    @media (prefers-color-scheme: dark) { header.site { background: rgba(13,13,14,0.82); } }
    header.site .wrapper-wide {
      display: flex; justify-content: space-between; align-items: center;
    }
    header.site a.site-name {
      font-weight: 700; font-size: .95rem; letter-spacing: -.01em;
      color: var(--text); display: inline-flex; align-items: center; gap: .5rem;
    }
    header.site a.site-name:hover { text-decoration: none; }
    header.site .logo-box {
      width: 1.6rem; height: 1.6rem; border-radius: .4rem;
      background: var(--text); color: var(--bg);
      display: inline-flex; align-items: center; justify-content: center;
      font-size: .85rem; font-weight: 900;
    }
    header.site .tagline {
      font-size: .82rem; color: var(--text-muted); font-weight: 500;
    }

    /* ── Article ── */
    article { padding: 4rem 0 3rem; }
    .article-category {
      display: inline-block;
      font-size: .72rem; font-weight: 600;
      text-transform: uppercase; letter-spacing: .12em;
      color: var(--warm);
      margin-bottom: 1.25rem;
    }
    h1 {
      font-size: 2.5rem; line-height: 1.12; font-weight: 700;
      letter-spacing: -.025em; margin: 0 0 1.5rem;
      color: var(--text);
    }
    @media (min-width: 640px) { h1 { font-size: 3rem; } }
    .article-meta {
      font-size: .9rem; color: var(--text-muted);
      margin-bottom: 2.5rem;
      padding-bottom: 2.5rem; border-bottom: 1px solid var(--hairline);
      display: flex; align-items: center; gap: .6rem;
    }
    .article-meta .author {
      font-weight: 600; color: var(--text);
    }
    .article-meta .dot { color: var(--hairline); }

    .cover-wrap { max-width: 1080px; margin: 0 auto 3rem; padding: 0 1.5rem; }
    .cover {
      width: 100%; aspect-ratio: 16/9; object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06);
    }

    /* ── Body — Pretendard로 통일 ── */
    .body-content {
      font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 1.05rem; line-height: 1.85;
    }
    .body-content p { margin: 0 0 1.5rem; color: var(--text); }
    .body-content h2 {
      font-family: 'Pretendard Variable', sans-serif;
      font-size: 1.6rem; margin: 3.5rem 0 1.25rem;
      padding-bottom: .5rem; border-bottom: 1px solid var(--hairline);
      font-weight: 700; letter-spacing: -.02em;
    }
    .body-content h3 {
      font-family: 'Pretendard Variable', sans-serif;
      font-size: 1.25rem; margin: 2.5rem 0 1rem;
      color: var(--warm); font-weight: 700; letter-spacing: -.01em;
    }
    .body-content h4 {
      font-family: 'Pretendard Variable', sans-serif;
      font-size: 1.1rem; margin: 2rem 0 .8rem;
      color: var(--text); font-weight: 700; letter-spacing: -.01em;
    }
    .body-content h5 {
      font-family: 'Pretendard Variable', sans-serif;
      font-size: .98rem; margin: 1.6rem 0 .6rem;
      color: var(--text); font-weight: 600;
      text-transform: uppercase; letter-spacing: .04em;
    }
    .body-content h6 {
      font-family: 'Pretendard Variable', sans-serif;
      font-size: .88rem; margin: 1.4rem 0 .5rem;
      color: var(--text-muted); font-weight: 600;
      text-transform: uppercase; letter-spacing: .06em;
    }
    .body-content blockquote {
      border-left: 3px solid var(--warm);
      padding: .25rem 0 .25rem 1.5rem; margin: 2rem 0;
      color: var(--text-muted);
    }
    .body-content blockquote p { margin-bottom: .6rem; }
    .body-content strong { color: var(--text); font-weight: 700; }
    .body-content figure { margin: 2.5rem 0; }
    .body-content img { max-width: 100%; height: auto; border-radius: 16px; }
    .body-content figcaption {
      font-family: 'Pretendard Variable', sans-serif;
      font-size: .88rem; color: var(--text-muted);
      text-align: center; margin-top: .8rem;
    }
    .body-content ul, .body-content ol { margin: 0 0 1.5rem 1.5rem; padding: 0; }
    .body-content li { margin-bottom: .5rem; color: var(--text); }
    .body-content .table-wrap { margin: 1.5rem 0; overflow-x: auto; }
    .body-content table { width: 100%; border-collapse: collapse; font-size: .95rem; }
    .body-content th, .body-content td { padding: .6rem .8rem; text-align: left; vertical-align: top; }
    .body-content thead tr { border-bottom: 2px solid var(--hairline); background: var(--bg); }
    .body-content thead th { font-weight: 700; color: var(--text); }
    .body-content tbody tr { border-bottom: 1px solid var(--hairline); }
    .body-content tbody td { color: var(--text); }

    .tags {
      margin: 3rem 0 2rem; padding-top: 2rem;
      border-top: 1px solid var(--hairline);
    }
    .tags .tag {
      display: inline-block;
      font-size: .85rem; color: var(--text-muted);
      background: var(--surface);
      border: 1px solid var(--hairline);
      padding: .4rem .9rem; border-radius: 999px;
      margin-right: .4rem; margin-bottom: .4rem;
    }

    .spa-link {
      text-align: center; padding: 3rem 0 0;
      font-size: .95rem; color: var(--text-muted);
    }
    .spa-link .btn {
      display: inline-flex; align-items: center; gap: .5rem;
      padding: .85rem 1.75rem; border-radius: 999px;
      background: var(--text); color: var(--bg);
      font-weight: 600; font-size: .9rem;
      text-decoration: none; margin-top: .75rem;
      transition: opacity .25s cubic-bezier(0.28, 0.11, 0.32, 1);
    }
    .spa-link .btn:hover { opacity: .88; text-decoration: none; }

    footer.site {
      margin-top: 5rem; padding: 3rem 0;
      border-top: 1px solid var(--hairline);
      text-align: center; font-size: .85rem; color: var(--text-muted);
    }
  </style>

  <!-- 구조화 데이터 (JSON-LD) — 리치 결과 향상 -->
  <script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: description,
  image: image ? [image] : undefined,
  datePublished: isoDate ? `${isoDate}T09:00:00+09:00` : undefined,
  dateModified: isoDate ? `${isoDate}T09:00:00+09:00` : undefined,
  author: { '@type': 'Person', name: SITE_AUTHOR },
  publisher: { '@type': 'Organization', name: SITE_TITLE },
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  inLanguage: 'ko-KR',
  articleSection: post.category || 'AI',
  keywords: (post.tags || []).join(', '),
}, null, 2)}
  </script>
</head>
<body>
  <header class="site">
    <div class="wrapper-wide">
      <a href="${SITE_URL}/" class="site-name">
        <span class="logo-box">이</span>
        엔지니어를 위한 이야기 공장
      </a>
      <span class="tagline">AI 기술에 인문학의 온기를</span>
    </div>
  </header>

  <main>
    <div class="wrapper">
      <article>
        <span class="article-category">${escapeHtml(post.category || 'AI')}</span>
        <h1>${escapeHtml(post.title)}</h1>
        <div class="article-meta">
          <span class="author">${escapeHtml(SITE_AUTHOR)}</span>
          <span class="dot">·</span>
          <time datetime="${isoDate}">${escapeHtml(post.date)}</time>
        </div>
      </article>
    </div>

    ${image ? `<div class="cover-wrap"><img src="${image}" alt="${escapeHtml(post.title)}" class="cover"/></div>` : ''}

    <div class="wrapper">
      <article>
        <div class="body-content">
          ${contentHtml}
        </div>

        ${(post.tags && post.tags.length) ? `<div class="tags">${tags}</div>` : ''}

        <div class="spa-link">
          <p>전체 사이트에서 댓글·관련 글을 함께 보시려면</p>
          <a href="${SITE_URL}/#/post/${post.id}" class="btn">
            이야기 공장에서 보기 →
          </a>
        </div>
      </article>
    </div>
  </main>

  <footer class="site">
    <div class="wrapper">
      <p>&copy; ${new Date().getFullYear()} ${escapeHtml(SITE_AUTHOR)} &nbsp;·&nbsp; <a href="${SITE_URL}/">엔지니어를 위한 이야기 공장</a></p>
    </div>
  </footer>
</body>
</html>
`;
}

// ─── 루트 index.html에 OG 메타 추가 ────────────────────────────────────
function injectRootOg(htmlPath) {
  if (!existsSync(htmlPath)) return;
  let html = readFileSync(htmlPath, 'utf-8');
  if (html.includes('property="og:type"')) return; // 이미 있음

  const rootMeta = `  <!-- Open Graph (site root) -->
  <meta property="og:type" content="website"/>
  <meta property="og:site_name" content="${SITE_TITLE}"/>
  <meta property="og:title" content="${SITE_TITLE} — ${SITE_AUTHOR}"/>
  <meta property="og:description" content="AI 기술에 인문학의 온기를 불어넣다. 2024년부터 기록해온 AI 뉴스 평론과 인문학적 IT기술론."/>
  <meta property="og:url" content="${SITE_URL}/"/>
  <meta property="og:locale" content="ko_KR"/>
  <meta name="twitter:card" content="summary"/>
  <meta name="twitter:title" content="${SITE_TITLE}"/>
  <meta name="twitter:description" content="AI 기술에 인문학의 온기를 불어넣다."/>
  <link rel="canonical" href="${SITE_URL}/"/>
`;
  html = html.replace('</head>', `${rootMeta}</head>`);
  writeFileSync(htmlPath, html, 'utf-8');
}

// ─── 실행 ────────────────────────────────────────────────────────────────
function main() {
  if (!existsSync(DIST)) {
    console.error(`[build-static-posts] ${DIST} not found. Run \`vite build\` first.`);
    process.exit(1);
  }
  if (!existsSync(POSTS_JSON)) {
    console.error(`[build-static-posts] ${POSTS_JSON} not found.`);
    process.exit(1);
  }

  const posts = JSON.parse(readFileSync(POSTS_JSON, 'utf-8'));
  const generatable = posts.filter(p => p.id && p.id !== 'about');

  for (const post of generatable) {
    const dir = join(DIST, 'p', post.id);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), postHtml(post), 'utf-8');
  }

  // 루트에 메타 추가
  injectRootOg(join(DIST, 'index.html'));

  // robots.txt
  writeFileSync(
    join(DIST, 'robots.txt'),
    `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`,
    'utf-8',
  );

  // sitemap.xml
  const urls = [
    { loc: `${SITE_URL}/`, priority: '1.0' },
    ...generatable.map(p => ({
      loc: `${SITE_URL}/p/${p.id}/`,
      lastmod: toIsoDate(p.date) || undefined,
      priority: '0.8',
    })),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u =>
  `  <url>\n    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}\n    <priority>${u.priority}</priority>\n  </url>`
).join('\n')}
</urlset>
`;
  writeFileSync(join(DIST, 'sitemap.xml'), sitemap, 'utf-8');

  // feed.xml (RSS 2.0) — Buttondown 등 구독 서비스가 폴링하여 새 글을 자동 발송
  writeFileSync(join(DIST, 'feed.xml'), buildRss(generatable), 'utf-8');

  console.log(`[build-static-posts] Generated ${generatable.length} static post pages under dist/p/`);
  console.log(`[build-static-posts] Updated root OG, robots.txt, sitemap.xml, feed.xml`);
}

// ─── RSS 2.0 피드 ─────────────────────────────────────────────────────
// Buttondown의 RSS-to-email 자동화가 이 피드를 폴링해 새 item을 감지하면
// 구독자에게 전체 본문(content:encoded)을 발송한다.
function toRfc822(dateDisplay) {
  const iso = toIsoDate(dateDisplay);
  if (!iso) return new Date().toUTCString();
  const [y, m, d] = iso.split('-').map(Number);
  // 한국 시각 오전 9시로 고정
  const utc = new Date(Date.UTC(y, m - 1, d, 0, 0, 0));
  return utc.toUTCString();
}

function buildRss(posts) {
  // 최신 20편만 피드에 포함
  const sorted = [...posts]
    .sort((a, b) => (toIsoDate(b.date) || '').localeCompare(toIsoDate(a.date) || ''))
    .slice(0, 20);

  const items = sorted.map(p => {
    const link = `${SITE_URL}/p/${p.id}/`;
    const description = escapeXml((p.excerpt || '').trim());
    const contentHtml = markdownToHtml(p.content || '');
    return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${toRfc822(p.date)}</pubDate>
      <author>${escapeXml(SITE_AUTHOR)}</author>
      <category>${escapeXml(p.category || 'AI')}</category>
      <description>${description}</description>
      <content:encoded><![CDATA[${contentHtml}${p.coverImage ? `\n<p><em>원문: <a href="${link}">${escapeXml(p.title)}</a></em></p>` : ''}]]></content:encoded>
    </item>`;
  }).join('\n');

  const lastBuild = new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/</link>
    <description>AI 기술에 인문학의 온기를 불어넣다. 2024년부터 기록해온 AI 뉴스 평론과 인문학적 IT기술론.</description>
    <language>ko-KR</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>${escapeXml(SITE_AUTHOR)}</managingEditor>
    <copyright>© ${new Date().getFullYear()} ${escapeXml(SITE_AUTHOR)}</copyright>
${items}
  </channel>
</rss>
`;
}

function escapeXml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

main();
