#!/usr/bin/env node
/**
 * 게이트 — 리포트가 규약(CLAUDE.md)대로 만들어졌는지 기계가 검사한다.
 *
 * 왜 사람이 아니라 스크립트가 보는가:
 *   규칙을 문서에만 적어 두면, 에이전트는 바쁠 때 그 문서를 요약해서 읽는다.
 *   요약된 규칙은 지켜지지 않는다. 그래서 기계로 잡을 수 있는 것은 기계가 잡는다.
 *
 * 종료코드: 0 = 통과, 1 = 차단
 */
import { readFileSync, existsSync } from 'node:fs';

const REPORT = 'out/report.md';
const SCAN = 'out/scan.json';
const errs = [];

if (!existsSync(REPORT)) {
  console.error(`[gate] ${REPORT} 가 없다. 작성 단계가 끝나지 않았다.`);
  process.exit(1);
}
const body = readFileSync(REPORT, 'utf8');

// ── 1. 필수 섹션이 정해진 순서로 있는가 ──────────────────
const REQUIRED = ['## 요약', '## 분류', '## 정리 후보', '## 확인 필요'];
let cursor = -1;
for (const h of REQUIRED) {
  const at = body.indexOf(h);
  if (at === -1) errs.push(`필수 섹션 "${h}" 이(가) 없다.`);
  else if (at < cursor) errs.push(`"${h}" 섹션이 규약과 다른 순서에 있다.`);
  else cursor = at;
}

// ── 2. 빈 섹션이 없는가 ──────────────────────────────────
const marks = REQUIRED.map((h) => ({ h, at: body.indexOf(h) })).filter((m) => m.at !== -1);
for (let i = 0; i < marks.length; i++) {
  const start = marks[i].at + marks[i].h.length;
  const end = i + 1 < marks.length ? marks[i + 1].at : body.length;
  if (body.slice(start, end).trim().length === 0) {
    errs.push(`"${marks[i].h}" 섹션이 비어 있다. 없으면 "없음"이라고 적는다.`);
  }
}

// ── 3. 요약의 파일 수가 실제 스캔 결과와 맞는가 ──────────
if (!existsSync(SCAN)) {
  errs.push(`${SCAN} 이 없다. 수집 단계를 건너뛰었는지 확인한다.`);
} else {
  let actual = null;
  try {
    const parsed = JSON.parse(readFileSync(SCAN, 'utf8'));
    actual = Array.isArray(parsed) ? parsed.length
      : Array.isArray(parsed?.files) ? parsed.files.length : null;
  } catch {
    errs.push(`${SCAN} 이 올바른 JSON이 아니다.`);
  }
  if (actual !== null) {
    const m = body.match(/총\s*([\d,]+)\s*개/);
    if (!m) {
      errs.push('요약에 파일 수가 "총 N개" 형식으로 적혀 있지 않다.');
    } else if (Number(m[1].replace(/,/g, '')) !== actual) {
      errs.push(`요약은 ${m[1]}개라고 적었는데 ${SCAN} 에는 ${actual}개다.`);
    }
  }
}

// ── 4. 규약이 금지한 추측 표현이 섞이지 않았는가 ─────────
for (const w of ['아마', '추정컨대', '것 같다', '것으로 보인다', '듯하다']) {
  if (body.includes(w)) {
    errs.push(`추측 표현 "${w}" 이(가) 있다. 확인된 것만 적는다 (CLAUDE.md 절대 규칙 3).`);
  }
}

// ── 판정 ─────────────────────────────────────────────────
if (errs.length) {
  console.error('[gate] 통과하지 못했다:');
  for (const e of errs) console.error('  - ' + e);
  console.error('\n리포트를 고쳐 다시 돌린다. 이 스크립트를 고치지 않는다.');
  process.exit(1);
}
console.log('[gate] ✓ 통과 — 리포트가 규약대로 만들어졌다.');
