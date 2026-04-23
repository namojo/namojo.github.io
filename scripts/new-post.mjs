#!/usr/bin/env node
/**
 * 새 블로그 글의 마크다운 스캐폴딩 CLI.
 *
 * 사용:
 *   npm run new              (대화형)
 *   npm run new -- "제목"    (인자 전달)
 *
 * 작성된 파일은 _posts/YYYY-MM-DD-slug.md 경로에 생성되며,
 * `npm run build` 시 자동으로 posts.json으로 변환되어 배포됩니다.
 */
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const POSTS_DIR = join(ROOT, '_posts');

if (!existsSync(POSTS_DIR)) mkdirSync(POSTS_DIR, { recursive: true });

// ─── ANSI 색상 ──────────────────────────────────────────────────────────
const c = {
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  warm: (s) => `\x1b[38;5;166m${s}\x1b[0m`,
  ink: (s) => `\x1b[38;5;252m${s}\x1b[0m`,
  gray: (s) => `\x1b[90m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
};

// ─── 한글 → slug 변환 ──────────────────────────────────────────────────
function slugify(text) {
  // 한글은 음운 변환 없이, 공백을 하이픈으로만 바꾸고 소문자로
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w가-힣\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

// 영문 제목이면 그대로, 한글 제목이면 영문 슬러그 제안 요구
function suggestSlug(title) {
  const hasKorean = /[가-힣]/.test(title);
  if (hasKorean) {
    // 한글 제목은 자동 slug가 URL에 적절치 않으므로 빈 제안
    return '';
  }
  return slugify(title);
}

// ─── Date utility ────────────────────────────────────────────────────
function todayYmd() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

// ─── Main ────────────────────────────────────────────────────────────
async function main() {
  const rl = createInterface({ input, output });
  const ask = async (q, defaultVal) => {
    const suffix = defaultVal ? c.gray(` [${defaultVal}]`) : '';
    const ans = (await rl.question(c.warm('?') + ' ' + c.bold(q) + suffix + c.dim(' › '))).trim();
    return ans || defaultVal || '';
  };

  console.log();
  console.log(c.warm('━'.repeat(52)));
  console.log(c.bold('  엔지니어를 위한 이야기 공장 — 새 글 만들기'));
  console.log(c.warm('━'.repeat(52)));
  console.log(c.dim('  질문에 답하고 Enter를 누르세요. 기본값이 있으면 바로 Enter.'));
  console.log();

  // 1. Title
  const argvTitle = process.argv.slice(2).join(' ').trim();
  const title = argvTitle || (await ask('포스트 제목 (한국어 가능)'));
  if (!title) {
    console.log(c.red('✖ 제목이 없으면 진행할 수 없습니다.'));
    rl.close();
    process.exit(1);
  }

  // 2. Slug (영문·숫자·하이픈만)
  const suggested = suggestSlug(title);
  let slug = await ask(
    'URL 슬러그 (영문·하이픈만. 예: sora-release-thoughts)',
    suggested,
  );
  slug = slugify(slug).replace(/[가-힣]/g, '');
  if (!slug) {
    console.log(c.red('✖ 유효한 영문 슬러그를 입력해 주세요.'));
    rl.close();
    process.exit(1);
  }

  // 3. Publish date
  const date = await ask('발행일 (YYYY-MM-DD)', todayYmd());
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    console.log(c.red('✖ 날짜 형식이 맞지 않습니다.'));
    rl.close();
    process.exit(1);
  }

  // 4. Excerpt
  const excerpt = await ask('한 줄 요약 (목록·OG에 노출됨)');

  // 5. Category
  const category = await ask('카테고리', 'AI');

  // 6. Tags
  const tagsInput = await ask('태그 (쉼표로 구분)', '');
  const tags = tagsInput ? tagsInput.split(',').map((t) => t.trim()).filter(Boolean) : [];

  // 7. Cover image
  const coverPlaceholder = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
  const cover = await ask('커버 이미지 URL (비워두면 기본값)', coverPlaceholder);

  rl.close();

  // ─── 파일 경로 결정 ────────────────────────────────────────────────
  const filePath = join(POSTS_DIR, `${date}-${slug}.md`);
  if (existsSync(filePath)) {
    console.log(c.red(`\n✖ 이미 존재하는 파일입니다: ${filePath}`));
    process.exit(1);
  }

  // ─── 프런트매터 + 본문 템플릿 ─────────────────────────────────────
  const tagsLine = tags.length ? `[${tags.join(', ')}]` : '[]';
  const body = `---
layout: post
title: "${title.replace(/"/g, '\\"')}"
date: ${date} 09:00:00 +0900
categories: [ai-news]
tags: ${tagsLine}
excerpt: "${excerpt.replace(/"/g, '\\"')}"
coverImage: "${cover}"
category: "${category}"
---

{{여기에 도입부를 씁니다. 역사적 일화·일상 장면·숫자 충격·인물 서사 중 하나를 선택하세요.}}

### ▸ 첫 번째 소제목

{{본론 시작.}}

### ▸ 두 번째 소제목 (비판적 균형)

{{그렇지만, 한 발 물러서 보면…}}

### ▸ 세 번째 소제목 (한국적 맥락 또는 심화)

{{한국의 상황과 연결하거나, 더 깊은 관찰을 덧붙입니다.}}

{{마무리 문단. 독자에게 질문을 던지거나, 선언적 예언 또는 철학적 반문으로 수렴합니다. 책의 핵심 논지(질문하는 인간, 인문학적 IT기술론)와 연결되면 더 좋습니다.}}
`;

  writeFileSync(filePath, body, 'utf-8');

  console.log();
  console.log(c.green('✓') + ' ' + c.bold(`새 글 파일이 생성되었습니다.`));
  console.log(c.dim('  → ') + filePath);
  console.log();
  console.log(c.bold('다음 단계:'));
  console.log(`  ${c.warm('1.')} 에디터로 파일을 열어 본문을 작성합니다.`);
  console.log(`     ${c.dim('code ' + filePath)}`);
  console.log(`  ${c.warm('2.')} 작성이 끝나면 빌드하여 posts.json에 반영합니다.`);
  console.log(`     ${c.dim('npm run build')}`);
  console.log(`  ${c.warm('3.')} GitHub에 푸시하면 GitHub Pages가 자동 배포하고,`);
  console.log(`     ${c.dim('Buttondown이 RSS를 감지해 구독자에게 이메일을 보냅니다.')}`);
  console.log();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
