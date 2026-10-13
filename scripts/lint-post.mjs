#!/usr/bin/env node
/**
 * lint-post.mjs — 발행 전 문체 게이트 (2026-10-13 신설)
 *
 * 왜 이 스크립트가 있나:
 *   저자 지시(2026-10-13): "제목이 매우 AI가 쓴 것처럼 불편하고 내용이 제대로 읽혀지지가
 *   않습니다. 루틴에서 작성해 준 내용이 전혀 마음에 들지 않았다는거죠. (...) 앞으로 제대로
 *   글을 쓰도록 루틴이 수정되어야 한다는 겁니다. 일회성으로 끝나는게 아니라요."
 *
 *   _style/style-guide.md에 규칙을 적어 두는 것만으로는 드리프트가 반복됐다. 09-13에 뽑은
 *   관용구가 공식으로 굳어 모든 글에 들어간 것이 그 증거다. 그래서 **기계로 잡을 수 있는
 *   규칙은 기계가 잡는다.** daily-post / write-post 가 발행 전에 반드시 이걸 돌린다.
 *
 * 사용:
 *   node scripts/lint-post.mjs _posts/2026-10-13-foo.md
 *   node scripts/lint-post.mjs --all          # _posts 전체 점검 (리포트용, 실패해도 0)
 *
 * 종료코드: 0=통과(경고만), 1=차단 위반 있음, 2=사용법·파일 오류
 *   ERROR 는 고치지 않고 발행하지 않는다. WARN 은 사람이 판단한다.
 */
import { readFileSync, existsSync } from 'node:fs';
import { globSync } from 'node:fs';

const argv = process.argv.slice(2);
if (argv.length === 0) {
  console.error('usage: node scripts/lint-post.mjs <_posts/YYYY-MM-DD-slug.md> [...] | --all');
  process.exit(2);
}

// ── 규칙 정의 ───────────────────────────────────────────────
// 2026-09-13 개고에서 뽑혔다가 공식으로 굳어 버린 관용구 (스타일 가이드 7절)
const FORMULA_PHRASES = [
  '더 정확한 표현은',
  '증명하는 것과 증명하지 않는 것',
  '라고 묶는 것도 정확하지 않',
  '라고 묶는 것도 정확하지 않습니다',
];
// 마무리 공식 — 한 편의 끝을 이 문형으로 닫는 습관
const FORMULA_ENDINGS = [
  /그럼에도,?\s*우린?\s+.*사이에서\s+갈등하게\s+됩니다/,
  /그럼에도,?\s*우리는?\s+.*사이에서\s+갈등하게\s+됩니다/,
];
const BANNED_WORDS = [
  { re: /현지시각/g, msg: '"현지시각"은 쓰지 않는다 (스타일 가이드 6절 2026-10-13). 그냥 "10월 6일"로 적는다.' },
  { re: /[\u201C\u201D\u2018\u2019]/g, msg: '굽은 따옴표가 있다. 레포 관례는 곧은 따옴표(")다.' },
  { re: /\bOpenAI\b/g, msg: '본문에서는 "오픈AI"가 기본이다 (스타일 가이드 6절 2026-10-13). 제품명 ChatGPT·Codex는 영문 유지. ※ 저자가 PAP 편에서는 "OpenAI 이사회 의장"으로 영문을 쓴 전례가 있어 차단이 아니라 경고다.', bodyOnly: true, warn: true },
];

function parse(file) {
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^['"]|['"]$/g, '');
  }
  return { fm, body: m[2] };
}

function lint(file) {
  const errs = [], warns = [];
  const p = parse(file);
  if (!p) return { errs: ['프런트매터를 읽을 수 없다.'], warns: [] };
  const { fm, body } = p;
  const title = fm.title || '';

  // ── 제목 (2-A절) ─────────────────────────────────────────
  if (/\s:\s/.test(title)) {
    errs.push(`제목에 " : "가 있다 — 쌍둥이 평서문 금지 (2-A절). 제목: ${title}`);
  }
  if (/(습니다|입니다|됩니다|합니다|있습니다|없습니다)\s*$/.test(title.trim())) {
    errs.push(`제목이 평서문 종결어미로 끝난다 (2-A절). 명사구·기사 헤드라인·질문으로 끝낸다. 제목: ${title}`);
  }
  const tlen = title.replace(/\s/g, '').length;
  if (tlen > 30) warns.push(`제목이 ${tlen}자다. 저자 제목은 13~26자였다 (2-A절 기준 20~30자).`);

  // ── 관용구 (7절) ─────────────────────────────────────────
  for (const ph of FORMULA_PHRASES) {
    if (body.includes(ph)) {
      errs.push(`굳어 버린 관용구 "${ph}"가 있다 (7절 2026-10-13). 평이한 말로 바꾼다.`);
    }
  }
  for (const re of FORMULA_ENDINGS) {
    if (re.test(body)) {
      errs.push('마무리가 "그럼에도, 우린 ~ 사이에서 갈등하게 됩니다" 공식이다 (9절 유형 7은 기본값이 아니다). 유형 8(담백한 걱정·기대형)을 쓴다.');
    }
  }

  // ── 표기 (6절) ───────────────────────────────────────────
  for (const b of BANNED_WORDS) {
    const hay = b.bodyOnly ? body : body + '\n' + title;
    const hits = hay.match(b.re);
    if (hits) (b.warn ? warns : errs).push(`${b.msg} (${hits.length}회)`);
  }

  // ── 분량·구조 (4절·11절) ─────────────────────────────────
  const chars = body.replace(/^!\[.*$/gm, '').replace(/^\*출처:.*$/gm, '').length;
  if (chars > 3200) {
    warns.push(`본문 ${chars}자. 기준은 1,600~2,800자다 (11절 2026-10-13). 취재 디테일로 채운 것이 아닌지 확인한다.`);
  }
  if (chars < 1200) {
    warns.push(`본문 ${chars}자로 짧다. 메커니즘 설명이 들어갔는지 확인한다.`);
  }
  const subs = (body.match(/^###\s/gm) || []).length;
  if (chars < 2500 && subs > 0) {
    errs.push(`본문 ${chars}자인데 소제목이 ${subs}개다. 2,500자 미만에서는 소제목을 넣지 않는다 (4절 2026-10-13).`);
  }
  if (subs > 2) {
    errs.push(`소제목이 ${subs}개다. 최대 2개다 (4절 2026-10-13).`);
  }
  for (const h of body.match(/^###\s.*$/gm) || []) {
    if (/\s:\s/.test(h)) errs.push(`소제목에 " : "가 있다 — 제목 규칙이 소제목에도 적용된다 (4절). ${h.trim()}`);
    if (/(습니다|입니다|됩니다|합니다)\s*$/.test(h.trim())) {
      errs.push(`소제목이 평서문으로 끝난다 (4절). 짧은 명사구로 쓴다. ${h.trim()}`);
    }
  }

  // ── 도입부 (3절 템플릿 H) ────────────────────────────────
  const first = body.trim().split('\n')[0] || '';
  if (/^\d+년[,\s]/.test(first)) {
    warns.push('첫 문장이 연도로 시작한다 (3절 도입부 다양화 규율). 최근 3편을 확인했는가.');
  }

  return { errs, warns };
}

let files = argv;
if (argv[0] === '--all') {
  files = globSync('_posts/*.md').sort();
}

let blocked = 0;
for (const f of files) {
  if (!existsSync(f)) { console.error(`[lint] 파일 없음: ${f}`); process.exit(2); }
  const { errs, warns } = lint(f);
  if (errs.length === 0 && warns.length === 0) {
    if (files.length === 1) console.log(`[lint] ✓ ${f} — 통과`);
    continue;
  }
  console.log(`\n[lint] ${f}`);
  for (const e of errs) console.log(`  ✗ ERROR ${e}`);
  for (const w of warns) console.log(`  ! WARN  ${w}`);
  if (errs.length) blocked++;
}

if (argv[0] === '--all') {
  console.log(`\n[lint] --all 모드: ${files.length}편 점검, 차단 위반이 있는 글 ${blocked}편 (리포트용이므로 종료코드 0)`);
  process.exit(0);
}
if (blocked) {
  console.log(`\n[lint] 차단: ERROR ${blocked}개 파일. 고치지 않고 발행하지 않는다.`);
  process.exit(1);
}
console.log('[lint] 통과 (WARN은 판단 후 진행 가능)');
process.exit(0);
