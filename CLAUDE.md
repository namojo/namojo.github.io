# myblog — 엔지니어를 위한 이야기 공장

출판 예정 도서(`생존을 위한 최소한의 AI 교양.md`) 저자의 블로그 `namojo.github.io`를 운영하기 위한 작업 공간.

## 하네스: 블로그 고스트라이터 팩토리

**목표:** 저자(namojo)의 문체를 유지하며 AI 뉴스 평론 블로그 글을 생성·관리한다. 2024년부터의 과거 포스트와 향후 지속 연재를 모두 지원.

**트리거:** 블로그 포스트 작성·추가·수정·블로그 인프라 작업 요청 시 `blog-factory` 스킬을 사용하라. 책 내용 자체에 대한 질문(요약, 교정)은 일반 응답 가능.

**기술 스택:** React 19 + Vite 5 + TypeScript + React Router (HashRouter) + Tailwind CSS. 포스트 데이터는 `public/posts.json` 단일 배열로 관리. Jekyll 아님.

**주요 산출물 경로:**
- 저자 문체 레퍼런스: `_style/style-guide.md` (영구 자산, 수정 전 확인)
- AI 이벤트 타임라인: `_style/ai-timeline.md` (ghostwriter·fact-checker 공유. 시점 규율의 기준)
- 작성한 토픽 이력: `_style/topics-written.md` (중복 방지)
- 작업 중간 파일: `_workspace/` (세션 간 재활용, factcheck 리포트 보존)
- 최종 포스트 데이터: `public/posts.json` (배열 엔트리 추가 방식)
- 선택적 마크다운 백업: `_posts/*.md` (소스 참고용, 배포 경로 아님)

**절대 규칙:** `public/posts.json`의 기존 엔트리는 사용자가 명시적으로 "삭제하라"고 하지 않는 한 **절대 삭제하지 않는다**. 샘플 포스트(id 1~4)도 보존.

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-04-23 | 하네스 초기 구성 (5 에이전트 + 4 스킬) | 전체 | namojo.github.io 고스트라이터 팩토리 구축 |
| 2026-04-23 | Jekyll → React+posts.json 워크플로로 전환 | blog-factory, ghostwriter, blog-architect, write-post | 기존 namojo.github.io는 React+Vite SPA였음. Jekyll 스캐폴딩을 폐기하고 기존 스택 존중. 샘플 포스트 4편 + about 보존하도록 규칙 추가. |
| 2026-04-23 | setup-jekyll 스킬 제거 | .claude/skills/setup-jekyll | React 스택 전환에 따라 불필요 |
| 2026-04-23 | 소셜 공유/SNS 로그인 댓글 기능 추가 | components/ShareButtons.tsx, components/Comments.tsx, config.ts, pages/PostView.tsx, agents/blog-architect.md | 외부 공유·댓글 기능 요청. Disqus(다중 SNS 로그인) 기본, Giscus 옵션. 카카오톡 공유는 앱키 설정 시 활성화. |
| 2026-04-23 | 포스트별 정적 공유 페이지 생성 파이프라인 추가 | scripts/build-static-posts.mjs, package.json, components/ShareButtons.tsx, agents/blog-architect.md | SNS 공유 시 타이포·디자인이 깨지는 문제 해결. 빌드 시 dist/p/{id}/index.html 생성 (OG/Twitter Card 메타 + JSON-LD + Noto KR 타이포그래피 인라인). 공유 URL을 /#/post/xxx → /p/xxx/로 전환. 루트 OG, sitemap.xml, robots.txt도 함께 생성. |
| 2026-04-23 | 시점 규율·팩트체크 엄격화 | _style/ai-timeline.md (신규), agents/ghostwriter.md, agents/fact-checker.md, skills/write-post | 피드백: "2024년부터의 글 작성 시 시점에 맞춰 작성, 팩트체크 확실히". AI 이벤트 타임라인 레퍼런스 신설(2022~2026 월 단위). ghostwriter에 7문항 시점 점검표 추가. fact-checker에 시점 일관성 최우선 검사 + 웹 검증 의무화. 기존 9편 감사 후 Sora/MCP/Claude Code/AI 튜터 4편 시점·수치 오류 수정. |
| 2026-04-24 | 디자인 시스템 Airbnb × Apple로 전면 개편 | index.html, pages/Home.tsx, pages/PostView.tsx, pages/About.tsx, components/Layout.tsx, components/PostCard.tsx, scripts/build-static-posts.mjs, public/images/ (신규), agents/blog-architect.md | 피드백: "에어비앤비와 애플 느낌을 섞어주세요". Pretendard 도입(SF Pro 대응), Ink/Warm/Coral 팔레트, Apple식 대형 히어로 + 타이포 스케일, Airbnb식 이미지 중심 카드 + 소프트 그림자 + 호버 리프트. Gemini 3 Pro로 홈 히어로와 저자 포트레이트 이미지 생성해 배치. |
| 2026-04-24 | 이메일 구독 + 쉬운 글 등록 CLI + RSS 피드 | scripts/new-post.mjs (신규), components/SubscribeForm.tsx (신규), pages/Home.tsx, pages/PostView.tsx, pages/About.tsx, components/Layout.tsx, scripts/build-static-posts.mjs, config.ts, package.json, agents/blog-architect.md | 피드백: "쉽게 등록할 수 있고, 이메일 구독으로 새 글 알림받기". `npm run new` 대화형 CLI로 마크다운 스캐폴딩 → `npm run build`가 posts.json·정적 페이지·RSS feed.xml 일괄 생성. Buttondown 임베드로 이메일 수집, RSS-to-email로 신규 글 자동 발송. SubscribeForm을 Home/PostView/About 3곳에 배치. |
| 2026-04-24 | 구독 서비스 기본값을 Substack으로 전환 | config.ts, components/SubscribeForm.tsx, README.md, agents/blog-architect.md | 피드백: "buttondown이 아니라 substack으로 바꿔줘". Substack은 외부 RSS 자동 발송을 지원하지 않으므로, 이메일 prefill URL 방식(`/subscribe?email=...`)으로 새 탭 이동 구현. Buttondown 코드는 provider 스위치로 남겨서 자동화 원하면 다시 전환 가능. README에 Substack 제약(자체 발행 필요) 정직하게 명시. |
| 2026-04-24 | 구독 기본값 Buttondown으로 되돌림 | config.ts | 피드백: "구독기능은 그대로 우선 놔주죠. 잘못생각했어요". 두 경로 코드는 모두 유지, provider 플래그만 전환. |
| 2026-04-24 | 저자 아바타 교체 — 사용자 제공 캐릭터 이미지 | public/images/author-avatar.jpg (신규), _workspace/build_posts_json.py, services/dataService.ts, pages/Editor.tsx, 관련 하네스 문서 | pravatar.cc의 자동 생성 아바타가 엉뚱하다는 피드백. 사용자가 제공한 886x886 캐릭터 이미지를 공식 아바타로 지정. 전 페이지 참조 일괄 교체. |
| 2026-04-24 | 마크다운 인라인 포맷팅 버그 수정 + 본문 폰트 Pretendard 통일 | components/MarkdownRenderer.tsx, pages/PostView.tsx, pages/About.tsx, scripts/build-static-posts.mjs | 피드백: "중간에 markdown 그대로 보이는 페이지들이 있습니다" + "폰트는 pretendard를 유지". MarkdownRenderer의 heading/list/blockquote 경로에서 인라인 `**bold**`/`*italic*`/`[link](url)`/``\`code\``` 파싱 누락이 원인 — `renderInline` 함수로 통합 처리. 리스트는 `<ul>`/`<ol>` 래퍼 추가. 장문 본문을 Noto Serif KR → Pretendard로 일원화. |
| 2026-04-24 | Disqus 표시 개선 | components/Comments.tsx | 피드백: "disqus 댓글 토론의 폰트랑 보여지는 모습이 이상해요". 한국어 UI 강제(`language:'ko'`), 카드형 컨테이너(패딩·라운드·보더)로 감싸기, 다크모드 자동 전환, 프로덕션에서는 설정 힌트 대신 친절한 "댓글 준비 중" 메시지만 노출. 폰트는 Disqus iframe 내부 고정이라 관리자 페이지에서 조정 권고. |
| 2026-04-24 | Home 수정: 최근 글 스크롤 버튼 복구, 카테고리 섹션 삭제 + 공유 아이콘 대비 강화 | pages/Home.tsx, components/ShareButtons.tsx | 피드백: "최근 글 보기가 정상적으로 동작하지 않아요. 주제별로 둘러보기 기능은 삭제" + "공유하기 아이콘이 흐릿해서 잘 보이지 않아요". HashRouter는 `#latest` 앵커와 충돌 → `scrollIntoView` 교체. 카테고리 섹션 제거(getCategories 호출도 제거). 공유 버튼: 크기 11/아이콘 18~20으로 확대, stroke 2.2~2.6 강화, SNS 브랜드 컬러(X 검정, FB #1877F2, LinkedIn #0A66C2, Kakao #FEE500) hover로 대비 확보. |
| 2026-04-24 | 기존 샘플 포스트 4편(id 1~4) 삭제 | _workspace/build_posts_json.py, services/dataService.ts INITIAL_POSTS | 사용자 명시 요청: "The Future of Generative AI in Creative Work / Agile Methodologies / Sketching Ideas / The Art of Storytelling 포스트는 삭제하세요". 이전 "기존 엔트리 절대 삭제 금지" 규칙의 특별 예외. posts.json 총 엔트리 수 14 → 10(about + 한국어 9편)으로 감소. git 히스토리에서 복구 가능. |
