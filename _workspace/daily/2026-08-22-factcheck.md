# Fact Check Report: binance-agent-os-mcp-trading-scope

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-08-22 (KST)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|-----------|---------|-----------|------|
| 바이낸스 Agent OS·MCP 서버 공개 | 현지 2026-08-20 | 이전 ✓ | 유지 |
| 크라켄 오픈소스 CLI(MCP 서버 내장) | 2026-03 | 이전 ✓ | 유지 |
| 코인베이스 Coinbase for Agents | 2026-06 | 이전 ✓ | 유지 |
| OKX 오픈소스 MCP 툴킷 | 시점 표기 불일치(TechCrunch "earlier in 2026" vs 2차 매체 "2025년 초") | 이전 ✓ | **연도 삭제 후 "앞서"로 완화** |
| 다올투자증권 MCP 트레이딩 사전예약 | 2026-07-27 | 이전 ✓ | 유지 |
| 다올 정식 출시 | 2026년 8월 예정 | 예정 = 미완료로 표기 ✓ | "8월 중 …열린다고 합니다" 유지 |
| 금융위 망분리·데이터 규제 정비 | 2026-06 보도, 진행 중 | 이전 ✓ | "방향을 잡고 있습니다"(진행형) 유지 |

- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" — 없음 ✓
- **용어 시점성:** MCP, 프롬프트 인젝션, x402 모두 2026-08 시점에 통용 ✓
- **미래 사건 언급:** 없음 ✓

## B. 사실 검증

| # | 주장 | 상태 | 증거 | 조치 |
|---|------|------|------|------|
| 1 | 현지 8월 20일 Agent OS + MCP 서버 동시 공개 | ✓ 확인 | TechCrunch·crypto.news·Blockonomi 3곳 일치 | - |
| 2 | 구성 요소: Binance APIs, Wallet Agentic Hub, Binance x402, Skill Hub, MCP Server | ✓ 확인 | TechCrunch, crypto.news | - |
| 3 | 지원 클라이언트 ChatGPT·Codex·Claude·Claude Code·Cursor | ✓ 확인 | TechCrunch(ChatGPT, Codex, Claude Code, Cursor) + crypto.news(Claude, VS Code 추가) | 본문은 두 출처의 교집합·합집합 범위 내 |
| 4 | 거래 범위: 현물·마진·선물 | ✓ 확인 | crypto.news(spot, margin, Convert, USDⓈ-M/COIN-M futures) | Convert는 지면상 생략 |
| 5 | 공개 시세는 인증 없이 조회 가능 | ✓ 확인 | crypto.news | - |
| 6 | 외부 주소 출금 불가 / 메인→에이전틱 서브계좌 이동도 에이전트 불가 | ✓ 확인 | crypto.news, Blockonomi | - |
| 7 | 스왑 하루 5만 달러 | ✓ 확인 | TechCrunch, BigGo | 환산 약 7,000만 원(1,400원 기준, 최근 포스트 관례와 동일) |
| 8 | DeFi 하루 10만 달러(기본값) | ✓ 확인 | TechCrunch, BigGo | - |
| 9 | x402 하루 20달러 | ✓ 확인 | TechCrunch, BigGo | - |
| 10 | 현물·선물 서브계좌에 손실 한도 없음, 입금액이 사실상 한도 | ✓ 확인 | TechCrunch, BigGo("the amount a user transfers into the subaccount effectively serves as the limit") | 본문 논지의 축 |
| 11 | 주문별 승인 / 자율 거래 선택 가능, 권한 회수 가능 | ✓ 확인 | TechCrunch, BigGo | - |
| 12 | 제프 리 = 바이낸스 제품 부사장(VP of Product) | ✓ 확인 | TechCrunch | 첫 등장에 직함 표기 |
| 13 | 인용 "완전한 자유를 주는 대신 … 사용자 손에 쥐여 주었다" | ✓ 확인 | TechCrunch 원문: "Instead of total freedom, we put the power in users' hands to give them the granular access control of what they can do through the agent." | 의역 아닌 직역 범위 |
| 14 | 인용 "우리는 사용자의 행위가 어떤 판단에서 나온 것인지 정말로 볼 수 없다" | ✓ 확인 | TechCrunch 원문: "We really cannot see the reasoning of what the user's action is." | - |
| 15 | ~~"바이낸스도 프롬프트 인젝션에 취약할 수 있다는 점을 인정했다"~~ | ✗ **오류 → 수정 완료** | TechCrunch 재확인: 프롬프트 인젝션은 **기자가 질문으로 제기**했고, 바이낸스가 자발적으로 인정한 것이 아니다. 리 부사장은 서브계좌를 주요 안전장치로 답했다 | 본문을 "기자가 … 물었을 때, 리 부사장이 내놓은 답은 서브계좌였습니다"로 교체 |
| 16 | OKX/크라켄/코인베이스 타임라인 | ⚠ OKX 시점만 근거 불일치 | TechCrunch "earlier in 2026" vs BigGo "Early 2025" | **OKX 연도 삭제, "앞서"로 완화** (크라켄 3월·코인베이스 6월은 두 출처 일치, 유지) |
| 17 | 다올투자증권 7월 27일 사전예약, 8월 정식 출시, 사전예약 고객 우선 | ✓ 확인 | 이데일리·이투데이·비즈월드·글로벌이코노믹·이코노미스트·비즈니스리포트 (한국 언론 5곳 이상 일치) | - |
| 18 | 조회 항목: 국내주식 시세·보유종목·계좌잔고·주문가능금액 + 주문 요청 | ✓ 확인 | 위 동일 출처 | - |
| 19 | 금융위: 망분리 추가 완화 + AI 학습 개인신용정보 동의·가명처리·결합 규제 정비 | ✓ 확인 | 이데일리 마켓인, 아주경제(2026-06-18), 금융위 보도자료 페이지 | 진행형으로 표기 |
| 20 | 본문 이미지의 봇 로그가 freqtrade이며 api.binance.com/api/v3/klines 호출 | ✓ 확인 | 이미지 자체에 `freqtrade.freqtradebot`, `GET https://api.binance.com/api/v3/klines?symbol=BTCUSDT` 육안 확인 | 캡션은 날짜를 주장하지 않음 |
| 21 | 커버 이미지가 바이낸스 가입 화면 | ✓ 확인 | 이미지 육안 확인. 크롭 후 구글 버튼이 잘려 캡션을 "다른 계정으로 계속하겠느냐"로 수정 | 캡션 정정 완료 |

## C. 수정 권고 및 처리 결과

1. [치명적] 프롬프트 인젝션 주체 오류 → **수정 완료** (검증 #15). 사실 확인 결과가 오히려 논지를 강화했다.
2. [경미] OKX 연도 근거 불일치 → **완화 완료** (검증 #16).
3. [경미] 커버 캡션과 실제 크롭 불일치 → **정정 완료** (검증 #21).

## D. 종합 판정

- [x] **발행 가능** — 치명적 오류 1건은 수정 후 재검증 통과, 잔여 항목은 완화 처리됨.

## E. 검증에 쓴 출처

- https://techcrunch.com/2026/08/20/binance-now-lets-ai-agents-trade-but-keeping-them-in-check-is-largely-up-to-users/
- https://crypto.news/binance-launches-agent-os-and-mcp-trading-server/
- https://finance.biggo.com/news/a22ee137-fbbb-4643-9bf4-dd1bbb62ef96
- https://blockonomi.com/binance-launches-binance-agent-os-and-binance-mcp-server-for-ai-driven-trading/
- https://edaily.co.kr/News/Read?mediaCodeNo=257&newsId=02820806645518784
- https://www.etoday.co.kr/news/view/2607723
- https://www.businessreport.kr/news/articleView.html?idxno=53266
- https://marketin.edaily.co.kr/News/ReadE?newsId=04683846645483032
- https://www.ajunews.com/view/20260618152522999
- https://commons.wikimedia.org/wiki/File:Crypto_Trading_Bot_running.png
- https://www.flickr.com/photos/196993421@N03/52521305410
