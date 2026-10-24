# Fact Check Report: 2026-10-25-github-package-firewall-dependency-cooldown

검증일: 2026-10-24 (발행 예정일 2026-10-25 KST)
대상: `_posts/2026-10-25-github-package-firewall-dependency-cooldown.md`
팩트 카드: `_workspace/daily/2026-10-25-brief.md`

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-10-25 (KST)

| 본문 표현 | 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|---|
| "10월 20일 패키지 방화벽을 퍼블릭 프리뷰로 열었습니다" | GitHub package firewall public preview | 2026-10-20 (체인지로그, 10-21 재작성 노트) | 5일 전 ✓ | 유지 |
| "올해 5월 19일 … npm에서 벌어진 일" | @antv / `atool` 계정 탈취 웨이브 | 2026-05-19 | 이전 ✓ | 유지 (단, B-4 참조) |
| "3월 axios 침해" | axios 1.14.1 / 0.30.4 악성 릴리스 | 2026-03-31 | 이전 ✓ | 유지 |
| "디펜더봇은 7월부터" | Dependabot 기본 쿨다운 3일 | 2026-07-14 체인지로그 | 이전 ✓ | 유지 |
| "PyPI는 7월부터" | 14일 경과 릴리스 신규 파일 업로드 거부 | 2026-07-08 머지 / 07-22 공지 | 이전 ✓ | 유지 |
| "npm이 7월부터 게시 시점에 멀웨어 검사" | npm publish-time malware scanning | 2026-07-28 체인지로그 | 이전 ✓ | 유지 |
| "같은 계열의 악성 코드가 111일 만에 되살아난" | Shai-Hulud 페이로드 재게시 | 2026-09-07 | 이전 ✓ | 유지 (5/19 + 111일 = 9/7, 산술 일치) |

- **사후 시점 표현:** "훗날", "결국 드러나듯", "돌이켜보면" 류 **없음**. ✓
- **미래 사건의 과거화:** **없음.** GA 날짜는 미발표인데 본문이 GA를 전혀 언급하지 않아 시제 붕괴 없음. ✓
- **시제:** 방화벽은 "열었습니다"(완료), 쿨다운 기능은 "있습니다"(현재), 가정은 "가정입니다 / 예측은 아니지만"으로 명시. ✓
- **용어 시점성:** `package firewall`·`cooldown`·`min-release-age`·`minimumReleaseAge` 모두 발행일 이전 존재 확인. ✓

> **⚠ 단 하나의 시점성 문제 (B-11 참조):** 본문 22줄이 npm의 설치 스크립트 자동 실행을 **현재형 일반 서술**로 적고 있는데, npm 12(2026-07-08 GA)부터 의존성 lifecycle script가 **기본 비활성**이다. 사실 자체가 틀린 건 아니지만(npm 11 이하·allowScripts 허용 시 그대로) 발행일 기준으로 "지금 npm은 이렇다"는 서술은 반쯤 낡았다.

**A 종합: 시점 규율 위반 없음.** 치명적 시점 오류 0건.

---

## B. 사실 검증

| # | 주장 (본문 줄) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 10/20 퍼블릭 프리뷰 공개 (12줄) | ✓ 확인 | 체인지로그 2026-10-20 "available today in public preview" | - |
| 2 | 빌드 머신·코딩 에이전트와 레지스트리 사이에 선다 (12줄) | ✓ 확인 | 체인지로그: "sits between endpoints such as Actions runners or coding agents and upstream registries", 메타데이터 요청·패키지 다운로드 양쪽 검사 | - |
| 3 | npm만 지원 (12줄) | ✓ 확인 | 체인지로그 "Currently … only supports npm packages" | - |
| 4 | GitHub Enterprise Cloud 고객 대상 (12줄) | ✓ 확인 | 체인지로그 "all GitHub Enterprise Cloud customers, including data-resident GHEC" | - |
| 5 | 프리뷰 동안 무료 (12줄) | ✓ 확인 | 체인지로그 "free during the preview period". GA 시 Actions 유사 종량 과금 예정, 날짜·요율 미발표 | - |
| 6 | 설정 항목에 쿨다운이 있다 (14줄) | ✓ 확인 | 체인지로그 정책 3종: configurable cooldown period / Advisory DB 멀웨어·취약점 검사 / 공급망 검사(어테스테이션 다운그레이드) | - |
| 7 | 체인지로그가 "에이전트와 CI 러너는 사람 개입 없이 설치해 특히 취약"이라 적었다 (26줄) | ✓ 확인 | 원문: "Agents and CI runners are particularly vulnerable to these attacks" + 사람이 개입하지 않고 의존성을 설치한다는 이유. **귀속 정확** | - |
| 8 | 547개 패키지를 관리하는 계정 탈취 (20줄) | ✓ 확인 | safedep(`atool` maintains 547) + Chainguard(547) 2곳 교차 | - |
| 9 | **"317개 패키지"** (20줄) | **✗ 오류 (중간)** | Chainguard **314**, OSV **314**, safedep **본문 317 / 자기 글 제목과 URL 슬러그는 314**, Snyk(Gridinsoft 경유) **323**. safedep 내부 산술도 309+4=313으로 자기모순. **317을 쓴 곳은 safedep 본문 단 한 곳** | **수정** — `314개` 또는 `300여 개`로 |
| 10 | "637개의 악성 버전" (20줄) | ✓ 확인 | safedep·Chainguard·Snyk 모두 637 (OSV만 631) | - |
| 11 | "22분 동안" (20줄) | ⚠ 근거 약함 | safedep TL;DR "22-minute automated burst"(IoC 01:44–02:06 UTC) + Chainguard "over the next 22 minutes"로 2곳이 같은 수를 쓴다. 다만 **두 기사 모두 자기 타임스탬프 표와 어긋난다**(safedep 표 01:39 시작 → 27분, Chainguard IoC 01:39–02:18 → 39분) | 유지 가능하나 `20여 분`으로 완화 권고 |
| 12 | "새벽"이라는 시간대 표현 (20줄) | ⚠ 중간 | 버스트는 01:44–02:06 **UTC** = **KST 10:44–11:06(오전)**. 한국어 독자는 KST로 읽는다 | **"새벽" 삭제** 권고 (`올해 5월 19일 npm에서 벌어진 일`). 스타일 가이드상 `현지시각` 표기는 폐기됐으므로 보충어 대신 삭제가 맞다 |
| 13 | preinstall 훅으로 실행 (20·22·34줄) | ✓ 확인 | safedep·Chainguard·OSV 모두 "every malicious version adds a `preinstall` hook running `bun run index.js`" | - |
| 14 | 클라우드·쿠버네티스 자격증명, SSH 키, 깃허브 토큰 수집 (22줄) | ✓ 확인 | safedep: AWS(env·config·IMDS·ECS 메타데이터·Secrets Manager)·GCP SA 키·Azure, K8s SA 토큰, Vault, GitHub PAT, npm 토큰, SSH 키, 도커 auth, 1Password/Bitwarden 등 | - |
| 15 | 같은 머신의 다른 프로젝트에 자기 복사 (22줄) | ✓ 확인 | safedep: 로컬 Node.js 프로젝트로 전파, `**/settings.json` 스캔 후 페이로드·훅 복사 | - |
| 16 | "코딩 도구 설정에도 훅을 심어서 다음 세션에 다시 깨어나게" (22줄) | ✓ 확인 | Claude Code `SessionStart` 훅(`node .claude/setup.mjs`), Codex(`~/.codex/package/index.js`), VS Code `.vscode/tasks.json` `runOn: folderOpen` | - |
| 17 | axios 침해 시 악성 버전 **약 3시간** 라이브 (24줄) | ✓ 확인 | Datadog 00:21–03:25 UTC(약 3시간), Google GTIG 00:21–03:20 UTC, Endor 버전별 약 3.5h / 2.9h. **독립 3곳 교차** | - (근거 충분, 본문 유지) |
| 18 | Dependabot 7월부터 기본 3일 쿨다운 (30줄) | ✓ 확인 | GitHub 체인지로그 2026-07-14 + GitHub Docs "By default, Dependabot applies a cooldown period of 3 days" | - |
| 19 | 보안 업데이트는 예외라 바로 올라온다 (30줄) | ✓ 확인 | GitHub Docs "This default cooldown does not apply to security updates" | - |
| 20 | npm에 `min-release-age`가 있다 (30줄) | ✓ 확인 | npm CLI PR #8825, v11.10.0 추가, 단위 일(day), 기본값 0(비활성) | - |
| 21 | pnpm에 `minimumReleaseAge`가 있다 (30줄) | ✓ 확인 | pnpm settings 문서. 단위 **분**. 기본값은 출처마다 엇갈림(10.x 문서 undefined / 11.0부터 1440분 주장 / 12.3 strict 주장) | **본문이 기본값을 단정하지 않은 것이 정확하다.** 그대로 유지 |
| 22 | PyPI 7월부터 14일 경과 릴리스에 새 파일 업로드 거부 (30줄) | ✓ 확인 | blog.pypi.org 2026-07-22, 패치 머지 2026-07-08 | - |
| 23 | npm 7월부터 게시 시점 스캐닝, **5~15분** 보류 (36줄) | ⚠ 근거 약함(경미) | GitHub 체인지로그 2026-07-28로 도입 시점 확인. 다만 원문은 "**보통 약 5분**, 피크·대용량 시 **15분 이상**까지"이고 "서비스 보장 아님"을 명시. 본문의 "5분에서 15분"은 보장된 구간처럼 읽힌다 | 완화 권고: `보통 5분, 길면 15분 넘게` |
| 24 | Shai-Hulud 계열이 **111일** 만에 재출현 (36줄) | ✓ 확인 | Aikido(2026-09-07, 4개 패키지, @antv 웨이브와 **동일 해시**), ITPro·SCWorld·gbhackers 전재. 5/19+111일=9/7 산술 일치 | - |
| 25 | `.npmrc`의 `ignore-scripts=true`가 설치 스크립트를 막는다 (34줄) | ✓ 확인 (단서 있음) | npm 문서 "If true, npm does not run scripts specified in package.json files." 의존성의 preinstall/install/postinstall 차단 | 기술 서술 정확. **단** 자기 프로젝트 스크립트도 함께 꺼지고 네이티브 모듈은 `npm rebuild` 필요, `bin`으로 들어온 악성 바이너리는 못 막는다 (본문이 완전 방어라 주장하진 않으므로 수정 불요) |
| 26 | 5월 사건의 실행 경로가 정확히 ignore-scripts가 막는 그 자리였다 (34줄) | ✓ 확인 | preinstall → `bun run index.js`. 연결 정확 | - |
| 27 | **"npm은 … 설치 스크립트를 자동으로 실행해 줍니다"** (22줄, 현재형 일반 서술) | **⚠ 중간 — 낡음** | **npm 12가 2026-07-08 GA되며 의존성 lifecycle script를 기본 비활성화**했다(`allowScripts` 명시 허용제, `npm approve-scripts`, `strict-allow-scripts`). 5월 사건 당시(npm 11)엔 맞지만 발행일 현재의 일반 서술로는 절반만 맞다 | **한정어 추가 권고** (B-27 상세 참조) |
| 28 | 락파일은 '무엇을 쓸지' 고정 / 설치 순간엔 이미 실행 / 신규 의존성·`^` 재해석·간접 의존성 유입 시 레지스트리로 나가는 길이 열려 있다 (32줄) | ✓ 확인 (경미한 정밀도 지적) | 기술적으로 정확. 셋 다 락파일을 갱신·재해석하는 동작이다 | 정밀도: 커밋된 락파일 + `npm ci`에서는 `^`가 **재해석되지 않는다**(재해석은 `npm install`/`npm update`/락파일 불일치 시). 본문이 반대로 말하진 않으나 "상시 열려 있다"로 읽힐 여지 |
| 29 | **"5~15분 보류" 사례와 "111일 재출현" 사례가 서로 다른 두 사례다** (36줄) | **✗ 오류 (중간)** | **같은 하나의 사건이다.** Aikido 보도의 핵심은 "111일 만에 돌아온 @antv 동일 해시 페이로드가 게시 시점 스캐닝을 그대로 통과했다"는 것. 본문은 "그 시간을 넘긴 뒤에 다시 올라온 페이로드가 나왔습니다 / 111일 만에 되살아난 사례**도** 보고됐고요"로 **근거 2건처럼 제시** (팩트 카드도 "근거 둘"로 적어 같은 오류를 공유) | **수정** — 한 사건으로 합치기 |
| 30 | "그 시간을 넘긴 뒤에 다시 올라온" = 공격자가 5~15분 보류를 **기다렸다 터뜨렸다**는 뉘앙스 (36줄) | **✗ 오류 (중간)** | Aikido·ITPro·SCWorld 어디에도 "보류 시간을 넘겨 우회했다"는 서술이 없다. 실제는 **이미 문서화된 동일 해시를 스캐너가 탐지하지 못하고 통과시켰다**는 탐지 실패다. 지연 전술이 아니라 검사 품질 문제 | **수정** — 아래 C-2 참조 |

---

### B-27 상세 — npm 12 기본값 변화 (중간, 반드시 반영 권고)

- npm 12 GA **2026-07-08**. 의존성의 `preinstall`/`install`/`postinstall`이 **기본 미실행**, `binding.gyp`의 암묵적 `node-gyp rebuild`도 차단, git/file/link 의존성의 `prepare`도 동일. 승인은 `npm approve-scripts` → `package.json`의 `allowScripts`. 미승인 스크립트는 경고 후 건너뛰고 설치는 성공(`strict-allow-scripts`로 실패 전환 가능). npm 11.16부터 경고 단계 선행.
- 영향 1 — **본문 22줄**: "npm은 … 설치 스크립트를 자동으로 실행해 줍니다"가 발행일 기준 npm 12 사용자에겐 사실과 다르다.
- 영향 2 — **본문 34줄 행동 권고**: "CI에서 설치 스크립트를 꺼 두었는지 … `ignore-scripts=true` 한 줄"은 npm 12 팀에겐 이미 기본값이다. devops.com도 방화벽의 존재 이유를 설명하며 "npm 12를 쓰는 팀만 해당된다"고 짚었다. 지적은 **틀렸다**가 아니라 **독자가 오늘 회의에서 써먹을 문장으로는 한 단계 낡았다**는 쪽.
- 권고 수정안(택1):
  - (a) 22줄: `npm은 의존성을 내려받은 다음 … 자동으로 실행해 줍니다` → `npm 11까지는 의존성을 내려받은 다음 … 자동으로 실행해 줬습니다` + 34줄에 `npm 12부터는 이게 기본으로 꺼져 있고, 그 전 버전을 쓰고 있다면 .npmrc에 ignore-scripts=true 한 줄입니다` 한 문장 추가.
  - (b) 최소 개입: 34줄만 `지금 npm 버전이 몇인지부터 — 12부터는 기본으로 꺼져 있고, 아니라면 .npmrc에 ignore-scripts=true 한 줄입니다`로 교체.

---

## C. 수정 권고 (우선순위 순)

**치명적(발행 전 필수) — 0건.** 잘못된 날짜·존재하지 않는 발언·자릿수 오류·시점 붕괴 없음.

**중간 (발행 전 반영 권고) — 4건**

1. **20줄 · 수치 단일출처 상충** — `317개 패키지` → **`314개 패키지`** (Chainguard·OSV 일치, safedep 자기 제목/URL도 314). 또는 `300여 개 패키지`. 현재 값은 safedep 본문 한 곳에만 있고 그 글 내부 산술(309+4=313)과도 어긋난다.
2. **36줄 · 한 사건을 두 근거로 셈 + 메커니즘 왜곡** — 현재:
   > "npm이 7월부터 게시 시점에 멀웨어 검사를 돌리며 모든 패키지를 5분에서 15분 붙잡아 두기 시작하자, 그 시간을 넘긴 뒤에 다시 올라온 페이로드가 나왔습니다. 같은 계열의 악성 코드가 111일 만에 되살아난 사례도 보고됐고요."

   두 문장이 같은 하나의 사건(2026-09-07, Aikido)이고, 실제 성질은 '보류 시간 우회'가 아니라 '이미 알려진 동일 해시를 스캐너가 놓침'이다. 권고 대안:
   > "npm이 7월부터 게시 시점에 멀웨어 검사를 돌리며 새 패키지를 보통 5분, 길면 15분 넘게 붙잡아 두기 시작했는데요. 9월에 5월 그 페이로드가 **해시까지 똑같은 채로** 111일 만에 다시 올라왔고, 검사를 그대로 통과했습니다."

   이렇게 고치면 "검사도 알려진 것을 놓치더라"와 "111일을 자고 돌아오더라"가 한 사건 안에서 자연스럽게 둘 다 서고, 뒤 문장의 '지연 폭발' 가정과도 논리가 맞는다.
3. **22·34줄 · npm 12 기본값** — B-27 상세의 (a) 또는 (b) 적용.
4. **20줄 · 시간대** — `올해 5월 19일 새벽 npm에서` → `올해 5월 19일 npm에서`. 버스트는 UTC 01:44–02:06, KST로는 오전 10~11시다.

**경미 (선택) — 3건**

5. **20줄** — `22분 동안` → `20여 분 동안`. 두 출처가 22분을 쓰지만 둘 다 자기 타임스탬프 표(27분·39분)와 어긋난다. 바로 뒤 26줄의 "22분 안에 637개를 뿌리는 이유"도 함께 손봐야 한다.
6. **36줄** — `5분에서 15분` → `보통 5분, 길면 15분 넘게` (체인지로그가 보장 아님을 명시).
7. **32줄** — `범위 지정(^)을 다시 해석할 때`는 `npm ci` + 커밋된 락파일에서는 일어나지 않는다. 지금 문장도 '그럴 때'라는 조건절이라 틀리지 않으니 손대지 않아도 되지만, 한 단어(`락파일을 갱신하며 범위 지정을 다시 해석할 때`)만 넣으면 더 정확하다.

**확인했고 고칠 것 없음 (저자 판단 보조)**

- axios "세 시간쯤"은 Datadog·GTIG·Endor 3곳이 떠받친다. 팩트 카드의 ⚠ 우려와 달리 **본문에서 뺄 이유 없다.**
- pnpm `minimumReleaseAge` 기본값을 단정하지 않은 것은 **옳은 판단**이다(10.x 문서 undefined, 11.0 1440분 주장, 12.3 strict 주장이 서로 엇갈림).
- 체인지로그 인용(26줄)의 귀속은 원문과 일치한다. 직접 인용부호를 쓰지 않고 "그렇게 적었습니다"로 간접 처리한 것도 안전하다.
- `ignore-scripts=true`의 기술 서술은 정확하다.
- 111일 = 5/19→9/7 산술이 맞는다.
- 본문에 등장하는 고유명사 철자 전부 확인: `package firewall`, `preinstall`, `Dependabot`(디펜더봇), `min-release-age`, `minimumReleaseAge`, `PyPI`, `.npmrc`, `^`. 오기 없음.
- 숫자 자릿수 오류 없음(547 / 637 / 22 / 3 / 14 / 5~15 / 111 전부 교차 확인).

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — ✗ 3건(#9, #29, #30) + ⚠ 중간 1건(#27). **치명적 오류 없음, 시점 규율 위반 없음.**
- [ ] 발행 보류

C의 중간 4건(317→314, 36줄 두 문장 통합·메커니즘 교정, npm 12 한정어, "새벽" 삭제)을 반영하면 발행 가능하다. 경미 3건은 저자 재량.

> **본문 수정 없음.** 지시대로 리포트만 작성했다. 36줄과 22·34줄을 고치면 `scripts/lint-post.mjs` 재실행이 필요하다.

---

## 확인에 사용한 URL

**1차 출처(공식)**
- https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/ (방화벽 프리뷰·npm 전용·GHEC·무료·쿨다운·에이전트/CI 문장·GA 과금)
- https://github.blog/changelog/2026-07-14-dependabot-version-updates-introduce-default-package-cooldown/ (Dependabot 기본 3일)
- https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates (보안 업데이트 예외)
- https://github.com/dependabot/dependabot-core/discussions/15582 (3일 기본값 배경)
- https://github.blog/changelog/2026-07-28-npm-publish-time-malware-scanning-and-dual-use-metadata/ (게시 시점 스캐닝, 보통 5분·피크 15분+·보장 아님)
- https://blog.pypi.org/posts/2026-07-22-releases-now-reject-new-files-after-14-days/ (PyPI 14일)
- https://docs.npmjs.com/cli/v11/using-npm/config#ignore-scripts (ignore-scripts 정의)
- https://github.com/npm/cli/pull/8825 (min-release-age 추가, 기본 0)
- https://pnpm.io/10.x/settings (minimumReleaseAge, 분 단위)

**보안 분석(1차 리서치)**
- https://safedep.io/mini-shai-hulud-strikes-again-314-npm-packages-compromised/ (547·637·22분·preinstall·자격증명·자가복제·AI 도구 훅. **본문 317 vs 제목 314 내부 불일치**)
- https://chainguard.dev/unchained/mini-shai-hulud-npm-attack-antv-ecosystem-compromise-may-2026 (**314**·637·22분·preinstall 교차)
- https://osv.dev/vulnerability/MAL-2026-4030 (314·631, preinstall/498KB Bun)
- https://www.aikido.dev/blog/shai-hulud-npm-resurfaces (111일·2026-09-07·@antv 동일 해시·스캐닝 통과)
- https://securitylabs.datadoghq.com/articles/axios-npm-supply-chain-compromise/ (axios 00:21–03:25 UTC ≈ 3시간)
- https://cloud.google.com/blog/topics/threat-intelligence/north-korea-threat-actor-targets-axios-npm-package (00:21–03:20 UTC)
- https://www.endorlabs.com/learn/npm-axios-compromise (39분 내 두 브랜치, 버전별 3.5h/2.9h)
- https://unit42.paloaltonetworks.com/monitoring-npm-supply-chain-attacks/ (24~72시간 차단 권고. **axios 3시간·39분 수치는 여기 없음**)

**npm 12 기본값**
- https://socket.dev/blog/npm-12
- https://thehackernews.com/2026/07/npm-12-disables-install-scripts-by.html
- https://appsecbrief.com/articles/npm-12-install-scripts-allowlist-supply-chain-defense-guide-2026/

**2차 보도**
- https://devops.com/github-puts-a-firewall-between-npm-and-your-ci-runners (방화벽 ↔ npm 12 관계)
- https://runtimewire.com/article/github-package-firewall-enterprise-npm (우회 경로 한계)
- https://www.itpro.com/security/malware/is-shai-hulud-back-researchers-spot-wormy-boy-slipping-past-npm-malware-scanning-features
- https://blog.gridinsoft.com/shai-hulud-antv-npm-supply-chain-wave/ (Snyk 집계 637/323)
