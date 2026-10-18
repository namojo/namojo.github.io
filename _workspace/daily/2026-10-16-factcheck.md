# Fact Check Report: banks-block-third-party-ai-agents (재집필본)

검증일: 2026-10-18 / 대상: `_posts/2026-10-16-banks-block-third-party-ai-agents.md`
※ 기존 리포트(옛 원고분)는 전량 교체됨.

## A. 시점 일관성 (최우선 검사)

- **발행일(프런트매터):** 2026-10-16 09:00 +0900 = **2026-10-15 20:00 ET**

| 본문에 인용된 사건 | 실제 일자 | 발행 시점 대비 | 판정 |
|---|---|---|---|
| 다이먼 JP모건 3분기 실적 콜 "rogue agents" | 2026-10-13(화) | 이전 ✓ | 유지 |
| JP모건 대변인 CNBC 확인(조회 허용·송금/청구서 불가) | 2026-10-13 | 이전 ✓ | 유지 |
| 모이니핸 BofA CNBC 인터뷰(실적일) | 2026-10-14(수) | 이전 ✓ | 유지 |
| 슈왑 3분기 실적 콜(워스터) | **2026-10-15(목)** | 이전 ✓ | 유지 — 본문 "이틀 뒤" **정확** |
| 워스터 블룸버그TV 인터뷰(Muse 거명·주당 수십 건) | 2026-10-16(금) | **이후 ✗** | 본문이 Muse를 "슈왑 실적 발표에서" 발언한 것으로 서술 → 재서술 필요 |
| 씨티, FT에 공식 입장 전달 | 2026-10-16 보도 | **경계 ✗/⚠** | "같은 주에 씨티도" 서술은 발행 시각보다 뒤의 보도에 의존 |
| 선행 포스트(PAP, "에이전트가 자신을…") | 2026-10-13(화) | 같은 주 | 본문 "**지난주에**" → **같은 주(이틀 전)**, 사실 오기 |

- **사후 시점 표현:** "훗날", "결국", "돌이켜보면" 등 없음 ✓
- **용어 시점성:** MCP·오픈뱅킹·Plaid·Muse(2026-09-08 출시) 모두 발행일에 존재 ✓
- **같은 날짜 포스트 중복:** `2026-10-16-liquid-ai-lfm25-moe-active-params-bandwidth.md`가 동일 날짜에 존재. 10/17·10/18·10/19도 2편씩이라 관례상 문제는 아님(참고만).

## B. 사실 검증

| # | 주장(본문) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 다이먼, 10월 13일 3분기 실적 발표 | ✓ 확인 | Banking Dive(10/13), CNBC, Forbes | - |
| 2 | "제멋대로 구는 에이전트가 있을 수 있고, 그런 게 수천 개일 수도 있다" | ✓ 확인 | 원문 "You don't want rogue agents, and there could be thousands of them"(Banking Dive·Benzinga) | 번역이 "원하지 않는다"의 뉘앙스를 평서화 — 허용 범위, 선택 수정 |
| 3 | "외부 에이전트가 고객 대신 로그인·실행하는 것을 막고 있다고 **했습니다**"(다이먼 발언으로 귀속) | ⚠ 부분확인 | 콜 발언은 "we're not going to allow just any outside agent to come in inside the company". 로그인·자격증명 금지의 구체 서술은 **대변인이 CNBC에 확인**(10/13) | 주어를 "JP모건은 …밝혔습니다"로 분리 권고 |
| 4 | 다이먼 "책임 이전(liability transfer)" | ✓ 확인 | "There's a liability transfer. They should understand the liability transfer."(Banking Dive) | - |
| 5 | 다이먼 "에이전트에 반대도 찬성도 아니다" | ✓ 확인 | Forbes "not against agents or for agents"(10/13), 서울경제 영문판 동일 취지 | - |
| 6 | JP모건이 내부에서 에이전트 사용·고객용 도구 개발 중 | ✓ 확인 | Smart Cash 파일럿(CFO 제러미 바넘), Banking Dive | - |
| 7 | 오픈뱅킹 커넥터(Plaid 등) 통한 **조회는 계속 허용**, 송금·청구서 납부 불가 | ✓ 확인 | JP모건 대변인→CNBC(10/13): 잔액 등 read-only 가능, "cannot send money or pay a bill" | - |
| 8 | 슈왑 실적 콜이 다이먼 **이틀 뒤** | ✓ 확인 | 10/15 Q3 콜(Fool 트랜스크립트·American Banker "Thursday") | - |
| 9 | 워스터 "고객 대신 로그인하려는 무단 에이전트를 막고 있다" | ✓ 확인 | 트랜스크립트 원문 "First, we are blocking unauthorized agents who try to log in on behalf of clients." | - |
| 10 | **"거기엔 메타의 Muse도 포함된다"를 슈왑 실적 발표 발언으로 서술** | ✗ 불일치(귀속 오류) | 10/15 콜 트랜스크립트에 "Muse" **미등장**, American Banker도 워스터를 Muse로 인용하지 않음. Muse 거명은 **10/16 블룸버그TV 인터뷰 및 언론 프레이밍**(TNW 리드, Fortune 10/15 헤드라인은 다이먼·JP모건 쪽에 붙임) | **수정 필요**(아래 C-1) |
| 11 | 같은 주 씨티·BofA도 비슷한 입장 | ⚠ 부분확인 | BofA 모이니핸 10/14 CNBC ✓ / 씨티 공식 입장은 **FT 10/16 보도** — 발행 시각 이후 | 완화 또는 씨티 축소 권고 |
| 12 | 슈왑 MCP 서버 개방, "LLM이 연결되는 건 허용하되 경험은 우리가 통제한다" | ✓ 확인 | 트랜스크립트 "We are allowing LLMs to connect, but we are controlling the experience." / "we will also allow clients to use their LLMs to connect to our MCP servers." | - |
| 13 | 앤트로픽 Claude로 **거래까지** 해 보는 시범 운영 | ✓ 확인 | 트랜스크립트 "a pilot for traders to safely and securely connect to our MCP layer via the LLM of their choice" / "We have started the pilot with Claude" / "We do have clients that are trading through LLMs and APIs" | 단, 같은 콜에서 "We do not allow them to move money" — 본문이 '송금'이 아니라 '거래'라고 쓴 것은 정확 |
| 14 | 모이니핸 "돈이 나가는 일에는 사람이 승인 단계에" | ✓ 확인 | "We strongly believe there should be a human in the loop to authorise money moving out of your account."(CNBC, FT 인용) | - |
| 15 | 아폴로 수석이코노미스트가 **1.6조 달러**를 봤다 | ⚠ 부분확인(귀속) | 금액 **1조 6천억 달러**(3사 무이자 예금, 합산 부채의 약 16%)는 **FT의 집계**. 토르스텐 슬록(Apollo 수석이코노미스트)은 0.1% 요구불 vs 3.3~5% 대안 금리 차로 자금이 옮겨갈 수 있다는 **논지**를 FT에 제시 | 귀속 분리 권고(C-3). 자릿수 오류 없음 |
| 16 | 인물·직함: 제이미 다이먼(JP모건 CEO), 릭 워스터(슈왑 CEO), 브라이언 모이니핸(BofA CEO) | ✓ 확인 | 전원 현직·표기 정확 | - |
| 17 | 기술 서술: 오픈뱅킹 토큰은 비밀번호가 제3자에 넘어가지 않고, 기관이 앱별 권한 목록 보유·개별 해지 가능 | ✓ 확인(일반적 사실) | Chase는 OAuth 기반 동의 흐름(은행 화면 로그인) 운영, Plaid 체인지로그에 Chase OAuth 동의 기간 선택(6개월/1년/상시) 도입 기재. 기관 측 Permissions/Consent API로 앱별 조회 항목·최근 접근 확인 및 해지 가능 | 유지. ⚠ CNBC는 "Plaid 등 커넥터가 사용자 자격증명을 갖고 있으면"이라는 느슨한 표현을 씀 — 일부 기관의 스크래핑 잔존 경로를 포함한 서술. 본문은 '오픈뱅킹 토큰' 경로를 특정하고 있어 오류 아님 |
| 18 | "네 기관이 같은 주에 같은 경계선" | ⚠ 부분확인 | JPM(10/13)·BofA(10/14)·슈왑(10/15)은 확정, 씨티(10/16)만 경계 | #11과 동일 처리 |
| 19 | "지난주에 … 표준 이야기를 다룬 적이 있는데" | ✗ 오류 | 해당 포스트 `2026-10-13-meta-sierra-personal-agent-protocol-declare.md`는 **같은 주 화요일** | 수정 필요(C-2) |

## C. 수정 권고 (우선순위 순)

1. **[치명적·귀속 오류] 12줄** — "이틀 뒤 슈왑 실적 발표에서는 릭 워스터 최고경영자가 … 무단 에이전트를 막고 있고 **거기엔 메타의 Muse도 포함된다고요**."
   → 콜에서 Muse를 거명한 기록이 없다. 둘 중 하나로.
   (a) Muse 삭제: "…무단 에이전트를 막고 있다고요."
   (b) 귀속 분리: "…무단 에이전트를 막고 있다고요. 차단 대상에 메타의 Muse가 들어간다는 것은 이후 보도로 알려졌습니다." (단, 해당 보도는 10/16자이므로 발행 시각상 (a)가 안전)

2. **[치명적·날짜 오기] 28줄** — "**지난주에** 에이전트가 자기를 에이전트라고 밝히는 표준 이야기를 다룬 적이 있는데"
   → "**며칠 전에**" 또는 "**이번 주 초에**" (해당 글은 10/13 화요일, 이 글은 10/16 금요일).

3. **[경미·귀속] 26줄** — "아폴로의 수석이코노미스트는 JP모건·BofA·웰스파고가 들고 있는 … 1조 6천억 달러 규모라고 봤어요."
   → 금액은 FT 집계, 논지는 슬록. 제안: "JP모건·BofA·웰스파고가 들고 있는 이자가 붙지 않는 예금은 합쳐서 1조 6천억 달러 규모입니다. 아폴로의 수석이코노미스트 토르스텐 슬록은 0.1% 남짓인 요구불 금리와 3~5%대 대안 사이의 차이를 들어, 에이전트가 이 현금을 금리 높은 쪽으로 옮기기 시작하면…"
   (현재 문장 끝의 "애널리스트의 해석이고 은행이 밝힌 이유는 아닙니다"는 유보로 **충분**하며, 이 자체는 오류가 아님.)

4. **[경미·귀속] 12줄** — "…실행하는 것을 막고 있다고 했습니다"(다이먼 발언으로 읽힘)
   → "…JP모건은 외부 에이전트가 고객 자격증명으로 로그인하거나 계좌에서 실행하는 것을 허용하지 않는다고 밝혔습니다."(콜 발언 + 대변인 확인의 혼합이므로 주어를 회사로)

5. **[경미·시점] 12줄** — "같은 주에 씨티와 뱅크오브아메리카도 비슷한 입장을 냈습니다."
   → 씨티 공식 입장 보도는 10/16(발행 시각 이후)이므로 완화 권고: "뱅크오브아메리카도 같은 주에 비슷한 입장을 냈고, 씨티도 같은 선을 긋고 있습니다." 또는 24줄 모이니핸 언급과 묶고 씨티는 생략.
   연동: 28줄 "네 기관이 약속이나 한 듯 같은 주에" → 씨티를 빼면 "**세 기관이**"로 조정.

6. **[선택] 12줄 인용 번역** — "제멋대로 구는 에이전트가 있을 수 있고, 그런 게 수천 개일 수도 있다"
   → 원문은 "You don't want rogue agents, and there could be thousands of them"(원하지 않는다는 화자의 태도가 핵심). "제멋대로 구는 에이전트가 들어오게 둘 수는 없고, 그런 게 수천 개일 수도 있다" 정도가 원문에 더 가깝다.

## D. 종합 판정

- [ ] 발행 가능
- [x] **수정 후 발행** — C-1(Muse 귀속), C-2(지난주→며칠 전) 두 건은 반드시 고칠 것. C-3~C-6은 권고.
- [ ] 발행 보류

치명적 수치 오류·존재하지 않는 인물/발언·자릿수 오류·시점 붕괴는 **없음**. 핵심 인용 3건(다이먼 rogue agents·liability transfer, 워스터 blocking unauthorized agents, 워스터 controlling the experience, 모이니핸 human in the loop)은 1차 트랜스크립트 또는 권위 언론으로 원문 확인됨.

## E. 참고 출처(이번 검증에서 실제 확인한 것)

- Fool, Schwab (SCHW) Q3 2026 Earnings Call Transcript (2026-10-15) — 워스터 원문 인용 전부
- American Banker, "Schwab blocks unauthorized AI agents, points clients to 'Charley'" (2026-10-15)
- Banking Dive, "JPMorgan CEO Dimon warns customers of 'liability transfer' with AI" (2026-10-13)
- CNBC, "JPMorgan Chase blocks outside AI agents like Muse, Instinct from directly accessing accounts" (2026-10-13)
- Forbes, "JPMorgan's Jamie Dimon Warns Of Rogue AI Agents…" (2026-10-13)
- Fortune, "'You don't want rogue agents'…" (2026-10-15 14:10 ET)
- TNW, "Schwab and JPMorgan are blocking AI agents from moving customer money" (2026-10-16 14:56 UTC, 블룸버그TV 인터뷰 기반)
- Bloomberg, "US Banks Block AI Agents Attempting to Move Money for Customers" (2026-10-16)
- oninvest(영문), "Citigroup and BofA are the latest U.S. banks to restrict AI agents…" (2026-10-17) — 씨티 문구·모이니핸 인용·슬록/1.6조 귀속
- Plaid 체인지로그·Core Exchange Permissions Manager 문서 — Chase OAuth 동의, 앱별 권한 조회·해지
