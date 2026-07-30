# Fact Check Report: chrome-1072-bugs-bottleneck-moved

- **대상:** `_posts/2026-07-31-chrome-1072-bugs-bottleneck-moved.md`
- **발행일(date):** 2026-07-31 09:00 +0900 (KST)
- **검증 수행:** 2026-07-30 (웹 검색 12회 교차)
- **직접 수정:** 2건 적용 (아래 C절)
- **제약:** `blog.google`, `securityweek.com`, `techcrunch.com`, `9to5google.com`, `digitaltrends.com`, `securityaffairs.com`, `docs.cloud.google.com`은 이 세션 egress 정책상 WebFetch 403. 검색 스니펫(원문 인용 포함) + 다중 2차 매체 교차로 대체 검증했다. 이 제약이 남긴 미확인 항목은 B-14 하나뿐이다.

---

## A. 시점 일관성 (최우선 검사)

### 본문에 등장하는 날짜·사건 전수

| 인용된 사건 | 실제 일자 | 발행일(2026-07-31) 대비 | 판정 |
|---|---|---|---|
| 포드 하이랜드파크 이동조립라인 | 1913-10-07 | 이전 ✓ | 유지 |
| 데이크스트라 "테스팅은 존재만" | 1969 (NATO 로마 회의 10/27~31) | 이전 ✓ | 유지 |
| Big Sleep 공개 | 2024 (Naptime 2024-06 → Big Sleep 2024-10~11) | 이전 ✓ | **수정 반영** (초고는 "2025년 시작"이라 오기) |
| Big Sleep 크롬 투입 (V8·그래픽 스택) | 2025 | 이전 ✓ | 유지 |
| 에이전트 하네스 구축 | 2026 초 ("earlier this year") | 이전 ✓ | 유지 |
| 20건+ 프로덕션 도달 전 차단, S1+ 1건 | 2026-05 ("In May alone") | 이전 ✓ | 유지 |
| 크롬 149·150 보안 버그 1,072개 발표 | **2026-07-30** | 이전(1일 전) ✓ | 유지 |
| 버그바운티 재편 (크롬↓·안드로이드↑) | 2026-04~05 개정, 발표/보도 2026 상반기 | 이전 ✓ | 유지 |
| CVE-2026-0628 (Gemini Live 패널 탈취) | 2025-10-23 제보 → 2026-01-05 패치 → 2026-03 공개 | 이전 ✓ | 유지 |
| 2026년 악용된 제로데이 5건 | 2026-02 ~ 2026-06-09 | 이전 ✓ | 유지 |
| 크롬 153 / 2주 주기 전환 | **2026-09-08 (미래)** | **이후** | **"줄일 예정" 예정형 서술 확인 → 유지 가능** |

- **사후 시점 표현 검사:** "훗날 드러나듯", "나중에 밝혀진 바", "결국 ~로 판명" 등 **없음**. 본문의 "결국"은 1913년 포드 서사 내부에서 쓰였고(62줄) 역사 앵커라 시점 규율 대상이 아니다.
- **미래 사건의 완료형 서술:** 없음. 153/2주 주기는 "줄일 예정입니다"(36줄), 주 2회 릴리스는 "파일럿 형태로 검토되고 있고", 재기동 없는 업데이트는 "구상까지 거론된다고 합니다 … 아직 확정된 것은 없습니다"로 3중 완화되어 있다.
- **용어·약어 시점성:** CodeMender(2025-10 공개, 2026-07 관리형 프리뷰), Big Sleep(2024), 에이전트 하네스(2026 초), Extended Stable(2021~), MiraclePtr(미사용) — 모두 발행일 시점 존재. ✓
- **`_style/ai-timeline.md` 대조:** 본문 사건 중 타임라인 기준선(2026-07-30)을 넘는 것은 2026-09-08 하나뿐이며 예정형으로 처리됨. **시점 붕괴 없음.**
- **후속 조치 권고(비차단):** `_style/ai-timeline.md` 2026 Q2 표에 `2026-07-30 구글 크롬 보안 블로그 — 149·150 두 마일스톤 1,072건 수정, 에이전트 하네스/Big Sleep/CodeMender, 09-08 v153부터 2주 주기` 행이 아직 없다. 다음 포스트 전에 추가할 것.

---

## B. 사실 검증

| # | 주장 (본문 위치) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 1913년 미시간 하이랜드파크에 이동조립라인 도입 (12줄) | ✓ 확인 | History.com·LoC·automotivehistory.org: 1913-10-07 Highland Park 섀시 이동조립라인 | - |
| 2 | 섀시 조립 시간 "열두 시간 반 → 한 시간 반 남짓" (12줄) | ✓ 확인 | LoC/History: "more than 12 hours to one hour and 33 minutes" (12h30m→1h33m 통용치) | - |
| 3 | 당시 도료 건조에 며칠 (14줄) | ✓ 확인 | American Coatings Assoc.: 도장·건조가 "many days" → DuPont Duco가 수 시간으로 단축. 도장 대기 차량이 공장 바닥을 메웠다는 기록 일치 | - |
| 4 | 빨리 마르는 검은색 에나멜로 색 통일 (14줄) | ⚠ 근거 약함(통설) | Japan black(japanning)이 당시 유일하게 쓸 수 있던 안료이며 타 색보다 빨리 건조. 단 "검정이 가장 빨라서"라는 인과에는 사학적 이견 존재(도료 교체 중단·품질관리 편의도 원인) | 본문이 "포드의 해법은 유명하지요"로 통설임을 이미 표시 → **유지 가능** |
| 5 | "어떤 색이든 좋습니다. 검은색이라면." (14줄) | ✓ 확인(출처는 1922) | 원문 "Any customer can have a car painted any colour that he wants so long as it is black" — 『My Life and Work』(1922). 본문은 연도를 붙이지 않아 1913 서사에 오귀속되지 않음 | - |
| 6 | 2026-07-30 구글 발표 (18줄) | ✓ 확인 | blog.google 「Stronger with every update」, TechCrunch·9to5Google 모두 2026-07-30 | - |
| 7 | 크롬 **149·150** 두 마일스톤에서 보안 버그 **1,072개** 수정 (20줄) | ✓ 확인 | 구글 공식 블로그 + 다중 매체: "1,072 security bugs in Chrome 149 and 150" | - |
| 8 | 직전 **23개** 마일스톤 총합 초과, 기간 약 2년 (20줄) | ✓ 확인 | "more than the previous 23 updates put together … 1,036 fixes from the previous 23 versions released over the last two years" | - |
| 9 | 개별 버전 패치 수 미인용 (전체) | ✓ 준수 | 본문에 151/382/433/429/27/15 등 **일절 없음**. (검색상 Forbes는 크롬 149=429건·critical 22, PCWorld는 크롬 150=약 400건·critical 15로 상충 — 인용 안 한 판단이 옳다) | - |
| 10 | "6월 한 달" 표현 부재 (전체) | ✓ 준수 | 본문 "6월" 0회. 유일한 월 언급은 구글 블로그가 직접 쓴 "2026년 5월"(30줄) | - |
| 11 | 2026년 초 Gemini+기타 모델 '에이전트 하네스', "더 높은 효율·더 낮은 오탐" (22줄) | ✓ 확인 | 구글 원문: "earlier this year created an agent harness that uses Gemini and other models … higher efficiency and lower false positives" | - |
| 12 | 구글이 1,072개 전부를 AI 성과로 못 박지 않았다 / SecurityWeek 인과 유보 (22줄) | ✓ 확인 | SecurityWeek: "while Google has not specifically said the vulnerabilities were discovered using AI, the timing of the surge … suggest that AI is responsible" | - |
| 13 | Big Sleep 기원·크롬 투입 (26줄) | ✗ **오류 → 수정 완료** | Naptime 2024-06 도입 → 「From Naptime to Big Sleep」2024-10/11, 첫 실제 취약점 2024-11(SQLite). 크롬 V8·그래픽 스택 성과는 2025년 협업 | **수정 적용** (C-1) |
| 14 | Big Sleep·CodeMender가 CI에 통합, 24시간마다 모든 코드 변경 스캔 (26줄) | ✓ 확인 | 구글 원문: "natively integrated into Chrome's CI system, running every 24 hours across all CLs" | - |
| 15 | CodeMender = 스캔→검증→수정, 익스플로잇 작성·샌드박스 실행으로 오탐 제거, 패치를 code diff로 제출해 사람 승인 (28줄) | ✓ 확인 | Google Cloud 공식(CodeMender 프리뷰) + Infosecurity·Help Net Security·cybersecuritynews: "builds and tests exploits in your sandbox … eliminating false positives … code diff for developer review and approval … does not automatically commit" | - |
| 16 | 대상 취약점 유형이 메모리 손상·인젝션 등 (28줄) | ✓ 확인 | 공식: memory corruption, injection flaws, web security, cryptographic weaknesses, insecure data handling | - |
| 17 | 손상된 렌더러가 브라우저를 속여 로컬 파일을 읽게 하는 샌드박스 탈출, 13년 넘게 잠재 (30줄) | ✓ 확인 | 구글 원문: "a compromised renderer to trick the browser into reading local files … more than 13 years" (Digital Trends도 동일) | - |
| 18 | 2026년 5월 한 달 20건 이상 프로덕션 도달 전 차단, 그중 하나가 최고 등급 (30줄) | ✓ 확인 | 구글 원문: "In May alone … blocked over 20 vulnerabilities from reaching production, including a critical S1+ issue" | - |
| 19 | 2026-09-08 **버전 153**부터 4주→2주, 데스크톱·안드로이드·iOS 전체 (36줄) | ✓ 확인 | developer.chrome.com 공식 + TechSpot·gHacks·The New Stack·Android Enterprise Community 교차: "Chrome 153, September 8, 2026, first stable release under the two-week cycle across desktop, Android, and iOS" | - |
| 20 | 마일스톤 사이 주간 보안 업데이트 유지 (36줄) | ✓ 확인 | developer.chrome.com 공식 안내 (2주 마일스톤 + 주간 보안 업데이트 병행) | - |
| 21 | 주 2회 보안 릴리스 파일럿 (36줄) | ✓ 확인 (본문이 오히려 보수적) | 구글: "piloting two security releases per week instead of one" — 실제로 파일럿 **진행 중**. 본문 "파일럿 형태로 검토되고 있고"는 안전한 축소 | - |
| 22 | 재기동 없는 업데이트 "구상까지 거론" (36줄) | ✓ 확인 (본문이 오히려 보수적) | 9to5Google 제목 "Google wants to update Chrome without a full browser restart" + 본문 "also testing 'dynamic patching' that could eventually eliminate needing to restart Chrome entirely for most updates". 실제 강도는 **"테스트 중"** | 본문은 이보다 약하게 썼으므로 과장 위험 없음. 원한다면 "테스트 중"으로 격상 가능(선택) |
| 23 | 1,072개의 심각도 분포·악용 가능성 미공개 (44줄) | ✓ 확인 | 공식 블로그·주요 매체 모두 1,072건의 severity breakdown 미제시 | - |
| 24 | 구글이 크롬 보상은 내리고 안드로이드는 올렸다 (48줄) | ✓ 확인 | SecurityWeek·Security Affairs·BleepingComputer: 크롬 메모리 버그 기본 보상 인하 + 픽셀 Titan M 제로클릭 최대 **$1.5M**로 인상 | - |
| 25 | 일부 크롬 버그 보상이 종전의 **10분의 1** 수준이라는 연구자 지적 (48줄) | ⚠ 근거 약함 | "일부 보상 인하·2025년 도입 보너스 폐지"는 다중 확인. 그러나 **"1/10"이라는 배수와 그 지적의 발화자**는 검색 3회로 재확인 실패(원문 SecurityWeek는 403). 브리프가 SecurityWeek 근거로 기재 | 본문이 이미 "연구자 지적"으로 귀속 처리 → 유지 가능. **다만 리스크 최소화를 원하면** "일부 크롬 버그 보상이 크게 깎였다는 연구자 지적"으로 배수 삭제 권고 (C-3, 선택) |
| 26 | 풀체인 익스플로잇 최대 **25만 달러(약 3억 5천만 원)** (48줄) | ✓ 확인 | SecurityWeek: "a full-chain Chrome exploit remains … up to $250,000" (+MiraclePtr 우회 보너스 동액). 환산: 250,000×약 1,380원=약 3.45억 → "약 3억 5천만 원" 허용 오차. 기존 포스트 환율(1,369~1,383원/달러)과 정합 | - |
| 27 | 구글이 2025년 사상 최대 **1,710만 달러** 지급 (48줄) | ✓ 확인 | SecurityWeek·Security Affairs·cipherssecurity: "record-high $17.1 million in 2025" | - |
| 28 | CVE-2026-0628, **CVSS 8.8**, 악성 확장이 Gemini Live 패널 탈취 (50줄) | ✓ 확인 | Unit 42 + The Hacker News + SC Media + SOCRadar 교차: high severity, **CVSS 8.8**, WebView tag 정책 미비, declarativeNetRequests로 gemini.google.com/app 가로채기 → 카메라·마이크·로컬 파일 접근. Unit 42 제보 2025-10-23, 패치 2026-01-05(143.0.7499.192 이전 취약) | - |
| 29 | 2026년 악용된 제로데이 5건이 **V8 엔진**에 집중 (50줄) | ✗ **오류 → 수정 완료** | 5건의 컴포넌트가 서로 다르다: CVE-2026-2441=CSS(CSSFontFeatureValuesMap UAF), CVE-2026-3909=**Skia** 2D 그래픽, CVE-2026-3910=V8, CVE-2026-5281=**Dawn/WebGPU**, CVE-2026-11645=V8(2026-06-09 패치, $55,000). **V8은 5건 중 2건** | **수정 적용** (C-2) |
| 30 | Extended Stable 8주 (58줄) | ✓ 확인 | 공식: "Extended Stable will continue with its existing eight-week cycle" | - |
| 31 | 데이크스트라 1969년 발언, "프로그램 테스팅은 버그의 존재를 보여줄 수 있을 뿐, 부재를 증명하지는 못한다" (60줄) | ✓ 확인 | 1969-10-27~31 NATO 로마 소프트웨어 공학 기법 회의(Buxton·Randell 편, 1970-04 발간)에 수록. 1969 'Structured Programming' 판본: "Program testing can be used to show the presence of bugs, but never to show their absence!" — 본문 번역이 이 판본과 정확히 일치. 1969 귀속 정확 | - |
| 32 | 포드 라인이 페인트 문제까지 풀고 하루 수천 대 생산 (62줄) | ✓ 확인 | Duco 도료로 건조 병목 해소, 하이랜드파크→리버루즈 일산 수천 대. "판매망·도로가 다음 병목"은 서사적 논평(검증 대상 아님) | - |
| 33 | 회사·제품·인물 철자 (전체) | ✓ 확인 | Big Sleep, CodeMender, Gemini, Project Zero, DeepMind, V8, Extended Stable, 헨리 포드, 하이랜드파크, 에츠허르 데이크스트라(네덜란드어 표기 준용) 모두 정확. 억지 병기 없음, `에이전트 하네스(agent harness)` 1회만 괄호 병기 — 블로그 병기 규칙 준수 | - |
| 34 | 국내 금융·공공의 표준 브라우저·검증 절차·폐쇄망 서술 (56줄) | ✓ 논평 | 특정 수치·기관명 없는 일반 서술. "검증 사이클이 6주라면"은 가정법 예시로 명시됨 → 팩트 주장 아님 | - |
| 35 | 외부 URL·서비스명 (전체) | ✓ 확인 | 본문에 외부 링크 없음. 언급된 서비스·도구 전부 실존 | - |

---

## C. 수정 권고 및 적용 내역

### C-1 [치명적 — 적용 완료] 26줄, Big Sleep 기원 연도

- 수정 전: `Big Sleep은 2025년 DeepMind와 Project Zero의 협업으로 시작해 V8 자바스크립트 엔진과 그래픽 스택의 버그를 찾아냈고, 지금은 …`
- 수정 후: `Big Sleep은 2024년 Project Zero와 DeepMind가 함께 공개한 취약점 탐색 에이전트인데, 2025년 크롬에 투입되어 V8 자바스크립트 엔진과 그래픽 스택의 버그를 찾아냈습니다. 지금은 …`
- 근거: Project Naptime 2024-06 도입 → 「From Naptime to Big Sleep」(Project Zero, 2024-10/11) → 첫 실제 취약점 2024-11(SQLite). 구글 블로그의 "In 2025 … Big Sleep" 문구는 **크롬 적용 시점**이지 도구의 출발점이 아니다. 초고 표현은 국내 보안 독자가 즉시 잡아낼 수 있는 오류였다.

### C-2 [치명적 — 적용 완료] 50줄, 제로데이 5건의 컴포넌트 오귀속

- 수정 전: `그리고 크롬 V8 엔진은 2026년에 실제로 악용된 제로데이를 다섯 건 맞았습니다.`
- 수정 후: `그리고 크롬은 2026년에 실제로 악용된 제로데이를 다섯 건 맞았습니다. V8 자바스크립트 엔진만이 아니라 그래픽 라이브러리와 WebGPU 구현까지 번갈아 뚫렸습니다.`
- 근거: 5건은 CSS / Skia / V8 / Dawn(WebGPU) / V8 — V8은 2건뿐. 원문은 "크롬 제로데이 5건"을 전부 V8 소관으로 만들어 사실과 다르며, 오히려 "공격면이 넓다"는 본문 논지를 약화시켰다. 수정본은 정확하면서 논지를 강화한다. (브리프 원문도 동일 오류를 담고 있었으므로 `_workspace/daily/2026-07-31-brief.md` 58줄도 재사용 시 주의)

### C-3 [경미 — 미적용, 저자 판단 권고] 48줄, 버그바운티 "10분의 1"

- 현재: `일부 크롬 버그 보상이 종전의 10분의 1 수준이라는 연구자 지적이 나왔습니다.`
- 권고안: `일부 크롬 버그 보상이 크게 깎였다는 연구자 지적이 나왔습니다.`
- 이유: 인하 사실 자체는 다중 확인됐으나 **"1/10" 배수**는 원문 접근 차단(403)으로 재확인 못 했다. 현 문장은 "연구자 지적"으로 귀속돼 있어 곧바로 오류는 아니다. 리스크를 0으로 만들려면 배수만 제거하면 된다.

### C-4 [경미 — 미적용, 선택] 36줄, 재기동 없는 업데이트의 강도

- 실제 출처(9to5Google)는 "dynamic patching을 **테스트하고 있다**"까지 나가 있다. 본문의 "구상까지 거론된다고 합니다"는 과소 서술이므로 사실 리스크는 없다. 원문 강도를 살리려면 `업데이트를 적용하려고 브라우저를 다시 시작하지 않아도 되게 만드는 '동적 패치'도 시험 중이라고 합니다`로 격상 가능.

### C-5 [비차단 후속] `_style/ai-timeline.md`에 2026-07-30 크롬 이벤트 행 추가

---

## D. 종합 판정

- [x] **수정 후 발행** → **C-1·C-2 수정을 적용했으므로 현재 상태로 발행 가능**
- [ ] 발행 보류

**요약:** ghostwriter가 지목한 치명적 위험 10개 항목 중 **1~6, 9, 10은 모두 통과**했다. "6월" 오기 없음, 개별 버전 패치 수 미인용, AI 인과의 명시적 유보, 153/2주 주기의 예정형 서술, 주 2회 릴리스의 파일럿 한정 — 초고가 이미 정확히 지켰다. 6번(재기동 없는 업데이트)은 오히려 원출처보다 보수적으로 써서 안전하다.

반면 유의사항 목록에 **없던 곳에서 오류 2건**이 나왔다. Big Sleep의 시작 연도(2025 → 2024)와 2026년 제로데이 5건의 컴포넌트 귀속(전부 V8 → V8 2건뿐)이다. 둘 다 브리프에서 그대로 옮겨온 것이고, 둘 다 국내 보안 실무 독자가 곧바로 알아차릴 수 있는 종류였다. 직접 수정으로 해소했다.

시점 규율 위반은 없다. 검증 불가(?) 항목도 없다. 남은 것은 "10분의 1" 배수(⚠) 하나이며, 본문이 이미 "연구자 지적"으로 귀속해 두었으므로 발행을 막지 않는다.
