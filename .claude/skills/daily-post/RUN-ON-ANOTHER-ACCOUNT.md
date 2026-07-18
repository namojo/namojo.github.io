# 데일리 자동 발행 루틴 — 다른 Claude 계정에서 실행하기

이 루틴은 **레포 안에 전부 자기완결(self-contained)** 되어 있다. `.claude/skills/daily-post/`(스킬)·`.claude/agents/`(news-curator·ghostwriter·fact-checker)·`_style/`(문체·타임라인·이력)·`scripts/`(빌드·커버 생성)가 모두 `namojo/namojo.github.io`에 커밋되어 있으므로, **다른 Claude 계정도 이 레포에 접근 + 동일한 스케줄만 걸면** 똑같이 돌아간다. 계정별로 하드코딩된 비밀·경로는 없다.

## 옮길 때 필요한 것 (전제 조건)

1. 그 계정이 **`namojo/namojo.github.io` 레포에 읽기/쓰기(push)** 권한을 가질 것.
2. **Claude Code (클라우드/웹) 스케줄 실행** 환경. 매 실행마다 최신 main을 클론해 돈다.
3. 네트워크 정책이 **웹 검색(토픽 선정·팩트체크)과 git push(발행)** 를 허용할 것.
4. 커버 자동 생성을 쓰려면 실행 환경에 **Chromium(Playwright)** 이 있을 것(클라우드 기본 이미지엔 이미 존재). 없으면 커버만 hero로 폴백되고 발행은 정상 진행.

> GitHub Pages 배포는 레포의 `deploy.yml`(GitHub Actions)이 담당하므로 계정과 무관하게 동일하게 동작한다. Pages 소스는 반드시 **"GitHub Actions"** 여야 한다(브랜치 배포로 두면 흰 화면 사고 재발).

## 스케줄 (KST 09:00)

- 09:00 KST = **00:00 UTC** → cron: `0 0 * * *`
- 하루 1편. 같은 날 중복 실행은 스킬의 게이트(`_posts/오늘날짜-*.md` 존재 시 즉시 종료)가 막는다.

## 루틴 프롬프트 (그대로 붙여넣기)

다른 계정의 스케줄 작업(Routine/Trigger)에 아래 프롬프트를 넣고 위 크론으로 건다:

```
너는 namojo.github.io 블로그(엔지니어를 위한 이야기 공장)의 데일리 자동 발행 에이전트다.

레포의 `.claude/skills/daily-post/SKILL.md`를 반드시 먼저 읽고, 그 파이프라인을 그대로 수행하라. 요약하면:

1. 게이트: `TZ=Asia/Seoul date +%F`로 오늘(KST) 날짜를 얻는다. `_posts/`에 오늘 날짜 파일이 이미 있으면 아무것도 하지 말고 종료.
2. 토픽 선정: 웹 검색으로 최근 24~48시간 AI 뉴스에서 토픽 1개(약한 날은 IT 전반). `_style/topics-written.md`와 대조해 중복 제외. 팩트 카드를 `_workspace/daily/`에 작성(출처 URL 2개 이상).
3. 작성: `_style/style-guide.md`·`.claude/agents/ghostwriter.md`를 따라 `_posts/YYYY-MM-DD-{slug}.md` 1편 작성. 프런트매터의 `coverImage`는 빈 문자열로 두고, 저장 후 `node scripts/generate-cover.mjs _posts/YYYY-MM-DD-{slug}.md`로 커버를 생성한다(실패해도 발행 계속).
4. 팩트체크: `.claude/agents/fact-checker.md`대로 모든 날짜·수치·인물·발언을 웹으로 재검증하고 리포트를 `_workspace/daily/`에 남긴다. 치명적 오류는 1회 수정 후 재검증, 그래도 실패하면 push 없이 종료·보고.
5. 발행: 통과 시에만 `_style/topics-written.md`(+굵직하면 `_style/ai-timeline.md`) 갱신 → 신규 파일(`_posts/`·`_workspace/daily/`·생성된 `public/images/covers/{slug}.jpg`)과 `_style/` 변경만 git add → 커밋 `post: {제목} (데일리 자동 발행)` → main push. `public/posts.json`은 직접 편집·스테이징하지 않는다(CI 재생성). push 실패 시 pull --rebase 후 1회 재시도(충돌은 원격 우선).

절대 규칙: 기존 포스트 수정·삭제 금지. `public/posts.json` 직접 편집 금지. 하루 1편. 팩트체크 미통과 글은 절대 발행하지 않는다.
```

## 계정 이전 시 유의

- **두 계정에서 동시에 스케줄을 켜지 말 것.** 같은 날 두 세션이 각각 다른 토픽으로 1편씩 push하면 하루 2편이 된다(게이트는 같은 세션/파일 기준). 옮길 때는 **기존 계정 스케줄을 끄고** 새 계정에서 켠다.
- 새 계정 스케줄을 만든 뒤 하루는 라이브(`https://namojo.github.io`)에 새 글·고유 커버가 뜨는지 확인.
