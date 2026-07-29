# 엔지니어를 위한 이야기 공장

namojo.github.io에 배포되는 블로그의 소스 코드입니다. AI 기술에 인문학의 온기를 불어넣는 '인문학적 IT기술론' 블로그.

## 구조

- **기술 스택**: React 19 + Vite 5 + TypeScript + React Router (HashRouter) + Tailwind CSS
- **콘텐츠 저장소**: `public/posts.json` — 모든 포스트가 단일 JSON 배열에 담겨 있음
- **백업 소스**: `_posts/*.md` — 새 포스트의 Jekyll 스타일 마크다운 원본 (선택적)

## 로컬 미리보기

```bash
npm install
npm run dev
# http://localhost:5173 접속
```

## 프로덕션 빌드

```bash
npm run build
# dist/ 디렉토리에 정적 파일 생성
npm run preview  # 빌드 결과 로컬 확인
```

## GitHub Pages 배포

이 저장소를 `namojo.github.io` 리모트와 연결한 뒤, 다음 중 하나를 선택:

### 옵션 A — gh-pages 브랜치 수동 배포

```bash
npm run build
# dist/ 폴더 안의 파일들을 gh-pages 브랜치로 푸시
```

### 옵션 B — GitHub Actions 자동 배포 (권장)

`.github/workflows/deploy.yml`에 다음을 추가:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

저장소 **Settings → Pages**에서 Source를 `gh-pages` 브랜치로 설정.

## 새 포스트 추가 방법

### 방법 1 — CLI로 쉽게 추가 (가장 권장)

```bash
npm run new
```

대화형 질문(제목·슬러그·날짜·태그·카테고리·커버 이미지)에 답하면 `_posts/YYYY-MM-DD-slug.md` 파일이 생성됩니다. 그 파일을 에디터로 열어 본문을 작성한 뒤:

```bash
npm run build   # posts.json + 정적 페이지 + RSS 전부 재생성
git add . && git commit -m "post: 새 글 제목" && git push
```

GitHub Pages가 자동 배포되고, `feed.xml`(RSS)도 함께 갱신됩니다. **저자는 마크다운만 쓰면 됩니다.**

### 방법 2 — Claude Code 하네스 사용 (저자 문체 자동 재현)

대화창에서 "2026년 5월 오픈AI 신제품 발표에 대해 블로그 글 한 편 써줘"처럼 요청하면 `blog-factory` 스킬이 자동 트리거됩니다. 에이전트 팀(스타일 분석가·뉴스 큐레이터·고스트라이터·팩트 체커·블로그 아키텍트)이 저자 문체로 글을 작성해 `public/posts.json`에 추가합니다. **기존 포스트는 절대 삭제되지 않습니다.**

### 방법 3 — 수동 JSON 편집

`public/posts.json`의 배열에 새 객체를 직접 추가하는 것도 가능합니다 (비권장).

## 새 글 알림 (RSS)

이메일 구독(뉴스레터) 기능은 2026-07-29에 **완전히 제거**되었습니다. 외부 뉴스레터 서비스(Buttondown/Substack) 연동이 정상 동작하지 않아 구독 폼·설정·관련 코드를 모두 삭제했습니다.

새 글 알림은 RSS 피드로만 제공합니다:

```
https://namojo.github.io/feed.xml
```

`npm run build`가 최신 20편(전체 본문 포함)을 담은 `dist/feed.xml`을 계속 생성하므로, 독자는 원하는 RSS 리더에 위 주소를 등록하면 됩니다.

## 공유 시 타이포그래피 유지 (정적 페이지 생성)

SNS(X/페이스북/카카오톡/LinkedIn)의 크롤러는 SPA의 해시 라우트(`#/post/xxx`) 뒤를 읽지 못하므로, 포스트별 공유 미리보기가 모두 똑같아지는 문제가 있습니다. 이를 해결하기 위해 `npm run build`는 두 단계로 실행됩니다:

1. **Vite SPA 빌드** — `dist/` 에 React 앱
2. **정적 포스트 페이지 생성** (`scripts/build-static-posts.mjs`) — `dist/p/{id}/index.html` 에 포스트별:
   - **OG/Twitter Card 메타태그** (제목·설명·커버이미지·발행일 등)
   - **JSON-LD 구조화 데이터** (검색엔진 리치 결과)
   - **Noto Serif/Sans KR 인라인 CSS** — 외부에서 링크를 클릭해 도착했을 때도 한국어 타이포그래피가 그대로 유지됨
   - 본문 마크다운 → HTML 렌더링
   - 다크 모드 자동 대응

동시에 `dist/index.html`에 루트 OG 메타태그를 주입하고, `sitemap.xml`·`robots.txt`도 생성합니다.

**공유 URL 체계:**
- SPA 내부 네비게이션: `https://namojo.github.io/#/post/{id}`
- 외부 공유 (ShareButtons가 사용): `https://namojo.github.io/p/{id}/`

`SITE_URL` 환경변수로 도메인을 오버라이드할 수 있습니다 (`SITE_URL=https://example.com npm run build`).

## 소셜 공유 & 댓글 설정

### 공유 버튼 (`components/ShareButtons.tsx`)

포스트 페이지 하단에 **X(트위터)·페이스북·LinkedIn·링크 복사·Web Share** 버튼이 기본 포함됩니다. 추가 기능:

- **카카오톡 공유** — `config.ts`의 `SHARE.kakaoJsKey`에 [Kakao Developers](https://developers.kakao.com)에서 발급받은 JavaScript 키를 입력하면 자동으로 버튼이 나타납니다. 비워두면 숨김.

### 댓글 (`components/Comments.tsx`)

기본값은 **Disqus** — 트위터·페이스북·구글·Disqus 계정으로 로그인 가능한 다중 SNS 댓글 시스템.

**설정 방법:**
1. [disqus.com](https://disqus.com)에서 사이트 등록 → shortname을 받음
2. `config.ts`의 `COMMENTS.disqusShortname`에 입력
3. 저장하면 전 포스트에 자동으로 댓글창이 붙음

**엔지니어 친화 대안 — Giscus (GitHub Discussions 기반, 광고 없음):**
1. `config.ts`의 `COMMENTS.provider`를 `"giscus"`로 변경
2. [giscus.app](https://giscus.app)에서 repo 설정 생성 → 나오는 `data-repo-id`와 `data-category-id`를 `COMMENTS.giscus`에 입력

**댓글 비활성화:** `COMMENTS.provider`를 `"none"`으로.

## 저자의 문체 가이드

`_style/style-guide.md`에 책에서 추출한 저자의 문체 원칙이 정리되어 있습니다. 고스트라이터가 글을 쓸 때 이 가이드를 헌법처럼 따릅니다.

## 빌드 파이프라인 전체 흐름

```
_posts/*.md          (저자가 작성·수정)
       ↓
npm run build:posts  (build_posts_json.py)
       ↓
public/posts.json    (SPA가 fetch)
       ↓
npm run build:spa    (vite build → dist/)
       ↓
npm run build:static (build-static-posts.mjs)
       ↓
dist/
  ├── index.html          (SPA + 루트 OG)
  ├── posts.json          (SPA 데이터)
  ├── assets/index-xxx.js (Vite 번들)
  ├── images/             (히어로·저자 이미지)
  ├── p/{id}/index.html   (포스트별 정적 공유 페이지 × 13)
  ├── feed.xml            (RSS 2.0, 새 글 알림용)
  ├── sitemap.xml
  └── robots.txt
```

`npm run build`는 위 세 단계를 한 번에 실행합니다.

## 현재 포스트 구성

`public/posts.json`에 총 14개 엔트리:
- `about` — 저자 소개 (About 페이지에서 렌더링)
- **2024~2026년 한국어 AI 평론 9편** (신규):
  - 2024-02 Sora 공개 / 2024-05 GPT-4o / 2024-09 o1 / 2024-12 MCP
  - 2025-02 딥씨크 쇼크 / 2025-05 클로드 코드와 에이전트 시대 / 2025-09 소버린 AI / 2025-12 A2A 프로토콜
  - 2026-03 AI 튜터와 블룸의 2시그마
- **기존 샘플 4편** (id 1~4, 2023년, 영문, 보존)

## 라이선스

포스트 내용 © 조남호 (namojo). 코드는 MIT.
