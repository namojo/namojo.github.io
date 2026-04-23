---
name: blog-factory
description: 엔지니어를 위한 이야기 공장(namojo.github.io) 블로그에 글을 쓰고, 과거 포스트를 추가하고, 사이트 구조를 관리한다. "블로그 글 써줘", "포스트 추가해줘", "AI 뉴스 글로 써줘", "블로그 업데이트", "새 포스트 작성", "YYYY년 X월에 발행한 것처럼 써줘", "블로그 초기화", "사이트 설정 변경", "기존 포스트 수정", "블로그 다시 실행", "이전 결과로 보완" 같은 블로그 관련 요청이면 반드시 이 스킬을 사용할 것. 단순 글 교정이나 책 내용 질문은 해당 없음.
---

# Blog Factory — 엔지니어를 위한 이야기 공장 오케스트레이터

## 목적

저자의 블로그 `namojo.github.io` (엔지니어를 위한 이야기 공장)에 **저자의 문체로** 블로그 포스트를 생성·발행한다. 초기 구축과 지속 확장을 모두 지원한다.

## 실행 모드

**에이전트 팀 모드.** 5명 팀으로 구성:
- style-analyst (문체 레퍼런스 유지)
- news-curator (토픽 발굴·팩트 수집)
- ghostwriter (본문 작성)
- fact-checker (팩트 검증)
- blog-architect (인프라)

## Phase 0: 컨텍스트 확인

`_style/style-guide.md`, `package.json`, `public/posts.json`, `_workspace/` 존재 여부를 확인하여 실행 모드를 결정한다:

| 상황 | 모드 |
|------|------|
| 셋 다 없음 | **초기 구축** (전체 파이프라인) |
| posts.json 있음 + 신규 포스트 요청 | **포스트 추가 모드** (Phase 3~5만) — 기존 엔트리 절대 삭제 금지 |
| posts.json 있음 + 기존 수정 요청 | **수정 모드** (해당 id 엔트리만 업데이트) |
| 스타일 가이드 갱신 요청 | **스타일 재추출 모드** (Phase 1만) |

**중요:** 기존 `public/posts.json` 엔트리는 사용자가 명시적으로 "삭제하라"고 하지 않는 한 절대 삭제하지 않는다. 샘플/테스트 포스트도 보존.

## Phase 1: 스타일 가이드 확보

`_style/style-guide.md`가 없으면:
- **style-analyst** 호출 → 책 파일 분석 → `_style/style-guide.md` 생성

이미 있으면 읽고 검토만. 사용자가 "스타일 다시 분석"이라 하면 재실행.

## Phase 2: 인프라 확보

`package.json`이 있고 React 앱 구조가 이미 있으면 건너뜀 (이 블로그는 React+Vite SPA이며 기본 구조가 이미 구축되어 있음).

사용자가 레이아웃·브랜드·테마 변경을 요청하는 경우에만:
- **blog-architect** 호출 → 해당 컴포넌트/스타일만 수정

## Phase 3: 토픽 큐레이션

사용자가 구체적 토픽을 지정하지 않은 경우:
- **news-curator** 호출 → `_workspace/topic-briefs.md`에 팩트 카드 작성
- `_style/topics-written.md`를 읽어 중복 제외

사용자가 구체 토픽·날짜를 지정한 경우:
- curator가 해당 토픽의 팩트 카드만 준비

## Phase 4: 포스트 작성

각 포스트에 대해:

1. **ghostwriter 호출** — `_style/style-guide.md` + topic-briefs에서 해당 토픽 카드 로드 → 초고 작성 → `public/posts.json`에 **신규 엔트리 추가** (기존 엔트리는 손대지 않음)
2. **fact-checker 호출** — 초고 검증 → `_workspace/factcheck-{slug}.md`
3. 치명적 오류 발견 시 ghostwriter 재호출하여 해당 엔트리만 수정
4. 완료된 포스트의 토픽을 `_style/topics-written.md`에 append

**배치 처리:** 여러 포스트 요청 시 ghostwriter를 순차 호출(팩트체크 병행). 병렬 작성은 스타일 일관성을 떨어뜨리므로 피한다.

**posts.json 편집 안전 절차:**
1. `public/posts.json` 전체를 Read로 읽는다
2. 새 엔트리를 적절한 위치(날짜 역순)에 삽입 — `about` 다음이 권장
3. 전체 파일을 Write로 저장 — 들여쓰기 2칸, UTF-8, 한글 그대로 (ensure_ascii=false)
4. 여러 편 동시 추가일 때는 `_workspace/build_posts_json.py` 헬퍼 패턴 활용 가능

## Phase 5: 보고

완료 후 사용자에게 보고:
- 추가된 posts.json 엔트리 id 목록 + 발행일
- 팩트 체크 결과 요약
- 로컬 미리보기 방법 (`npm install && npm run dev`)
- GitHub Pages 배포 절차 안내 (gh-pages 브랜치 또는 actions)

## 데이터 전달 프로토콜

- **파일 기반**이 주 전달 방식
  - `_style/style-guide.md` (영구, 모든 에이전트 읽음)
  - `_style/topics-written.md` (영구, 중복 방지용)
  - `_workspace/topic-briefs.md` (세션 내 재활용 가능)
  - `_workspace/factcheck-*.md` (검증 기록)
  - `public/posts.json` (최종 산출물 — 배포되는 데이터)
  - `_posts/*.md` (선택적 백업 소스, 있을 수도 없을 수도)

## 에러 핸들링

- 스타일 가이드 생성 실패 시 중단. 가이드 없이 글 쓰지 않는다.
- 팩트 체크에서 치명적 오류(잘못된 날짜, 존재하지 않는 인물 등) 발견 시 발행 보류하고 사용자에게 보고.
- 네트워크 불안정으로 웹 검색 실패 시, news-curator가 책 내용 기반으로 대체 작성하도록 우회.

## 테스트 시나리오

**정상 흐름:**
1. 사용자: "블로그 초기 구축해줘. 2024년부터 AI 주요 사건에 대한 글 6편 과거 날짜로."
2. Phase 1: style-analyst 실행 → 가이드 생성
3. Phase 2: blog-architect 실행 → Jekyll 구조 생성
4. Phase 3: news-curator 실행 → 6개 토픽 브리프 생성
5. Phase 4: ghostwriter × 6 → _posts/에 과거 날짜로 저장, fact-checker 병행
6. Phase 5: 사용자에게 목록과 배포법 안내

**에러 흐름 — 스타일 가이드 오염:**
1. 사용자가 "스타일 가이드를 다시 만들어줘. 너무 격식적이야"
2. Phase 1만 실행, style-analyst에 피드백 전달
3. 기존 가이드를 백업(`_style/style-guide.backup.md`)하고 재생성
4. 이후 신규 포스트 요청 시 새 가이드 적용

## 후속 작업 지원

- "새 포스트 추가해줘 — 2025년 10월 앤트로픽 이야기" → Phase 3~5만 실행, 이미 있는 가이드·인프라 재사용
- "3월 15일 포스트 톤이 너무 딱딱해" → 해당 파일만 ghostwriter 재호출 (수정 모드), 가이드에 피드백 반영 옵션 제시
