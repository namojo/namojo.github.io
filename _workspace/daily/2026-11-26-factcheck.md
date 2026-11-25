# Fact Check Report: walmart-agent-gateway-account-profile

- **대상:** `_posts/2026-11-26-walmart-agent-gateway-account-profile.md`
- **팩트 카드:** `_workspace/daily/2026-11-26-brief.md`
- **검증 일시:** 2026-11-25 (타임라인 기준 시점과 동일)
- **검증자 판정:** **수정 후 발행** — 치명적 1건(발표 주체 귀속 오류), 중간 3건, 경미 4건

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-26 09:00 KST
- **`_style/ai-timeline.md` 기준 시점:** 2026-11-25 (L351)

| 인용된 사건 | 본문 표기 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|---|
| 메타 Muse로 월마트 블랙프라이데이 구매 개시 | "11월 24일" | 2026-11-24 (화) | 이전 ✓ | 유지 |
| 에이전트 게이트웨이 발표 | "한 달 전인 10월 21일" | 2026-10-21 (수) | 이전 ✓ | 유지 (간격 34일, "한 달 전" 적합) |
| 아마존의 서드파티 에이전트 차단 | "같은 가을" | Muse 차단 2026-09-20 발효, 그 전후로 구글·오픈AI 에이전트 대상 조치·퍼플렉시티 소송 | 이전 ✓ | 유지 |
| 블랙프라이데이 | "블랙프라이데이 상품" | 2026-11-27 (금) | **발행 다음 날** | 유지 — 사전 딜 기간이므로 정합 |
| 에이전트 프로필 가용성 | 본문 현재형("생기는데요") | 10-21 시점엔 "다음 달 출시 예정", 11-24 Muse 개시와 함께 실사용 | 이전 ✓ | 유지 |

- **요일 교차 검증:** 2026-11-24 = 화요일(TechCrunch "announced on a Tuesday"와 일치), 2026-10-21 = 수요일(TechCrunch "announced on Wednesday"와 일치). 본문 날짜 2건 모두 요일까지 맞음.
- **⚠ 출처 간 날짜 불일치 1건:** Arkansas Democrat-Gazette(11-25자)는 롤아웃을 "on Wednesday"(= 11-25)로 적었다. 그러나 **1차 출처인 월마트 뉴스룸 게시물이 11-24자이고 "Starting today"**라고 명시하며 TechCrunch도 11-24(화)로 보도했다. **본문의 "11월 24일"이 맞고 수정 불필요.** 다만 Arkansas를 단독 근거로 인용하는 문장은 두지 말 것.
- **사후 시점 표현 검사:** "훗날 드러나듯", "결국", "돌이켜보면" **없음 ✓**. 마지막 문단의 "처음으로 눈에 보이게 됐습니다"는 발행 시점 기준 진술이라 시점 규율 위반 아님(다만 B-20 참조).
- **용어·약어 시점성:** MCP(2024-11 공개) ✓ / Muse(2026-09-08 출시) ✓ / 에이전트 게이트웨이·에이전트 프로필(2026-10-21 명명) ✓ / 샘스클럽 ✓ — 발행일 기준 전부 존재.

---

## B. 사실 검증

| # | 주장 (본문 줄) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 11/24 월마트가 메타 Muse로 블랙프라이데이 상품을 사도록 열었다 (L12) | ✓ 확인 | 월마트 뉴스룸 11-24 "Starting today" + TechCrunch 11-24 + Arkansas 11-25 | - |
| 2 | 상품 찾기→장바구니→**대화창 안에서 결제까지** 완료 (L12) | ✓ 확인 | 월마트 뉴스룸 11-24 "Complete your purchase within the conversation" / Arkansas "shop and complete purchases on the retailer's website" | - (TechCrunch 11-24는 장바구니 구성까지만 적어 1차 출처가 더 강함) |
| 3 | 결제는 **고객의 월마트 계정에 저장된 카드**로 (본문에는 "결제 수단은 월마트 쪽에 그대로 남아", L22) | ✓ 확인 | 월마트 뉴스룸 11-24 "a card saved in your Walmart account" | - |
| 4 | 게이트웨이 발표일 10월 21일 (L12) | ✓ 확인 | TechCrunch 10-21, Retail Dive 10-22("Wednesday announcement"), DigitalCommerce360 10-23 | - |
| 5 | **"존 퍼너 월마트 CEO가 발표한"** (L12) — 발표 주체 | **✗ 오류(귀속)** | 발표 자체는 월마트 뉴스룸 게시물 「Making It Possible for Agents to Shop on Behalf of Customers」(10-21). 퍼너는 **같은 날 샌프란시스코 Masters of Scale Summit에서 발언**했을 뿐, TechCrunch조차 게이트웨이가 서밋에서 공개됐다고 쓰지 않았다. Retail Dive·DigitalCommerce360은 퍼너를 전혀 언급하지 않고 **다니엘 댄커(EVP of AI acceleration, product and design)**를 인용 | **수정 (C-1)** |
| 6 | 존 퍼너의 직함 = 월마트 CEO (L12) | ✓ 확인 | 월마트 리더십 페이지 "President and CEO, Walmart Inc." / 2025-11-14 발표로 2026-02-01부 더그 맥밀런 승계 / 2026-11 FY27 3분기 실적 발표도 퍼너 명의. **"월마트 US 사장"이 아니라 Walmart Inc. 전체 CEO가 맞다** | - |
| 7 | 게이트웨이는 **MCP 서버** (L12) | ✓ 확인 | TechCrunch 10-21 "the company's new MCP server" / Retail Dive·DigitalCommerce360 모두 MCP 명시 | - |
| 8 | **승인받은** 외부 에이전트만 (L12) | ✓ 확인 | TechCrunch "approved agents", 초대제 한정 베타(limited beta, 접근 신청 walmart.com/agents) | - |
| 9 | 월마트 **및 샘스클럽** 재고 (L12) | ✓ 확인 | TechCrunch 10-21 "supports agentic shopping from both Walmart and Sam's Club" | - |
| 10 | 에이전트는 **구매 이력·개인정보**에 접근 못 함 (L22) | ✓ 확인 | TechCrunch 10-21·11-24, 월마트 뉴스룸 11-24("without sharing customers' broader purchase history"), Arkansas | - |
| 11 | **결제 수단이 에이전트를 통과하지 않음** (L22) | ✓ 확인 | TechCrunch 10-21 "cannot access payment information" / DigitalCommerce360: 약관상 "receiving payment-card details" 금지 + **결제수단 추가·변경도 불가** | - (원하면 '추가·변경 불가'까지 보강 가능) |
| 12 | 프로필은 **에이전트를 처음 쓸 때 생성** (L22) | ✓ 확인 | TechCrunch 10-21 "created the first time an agent shops through the gateway" / 월마트 뉴스룸 11-24 "the first time you add an item to your cart" | - (전자는 자동 생성, 후자는 고객 설정으로 서술 — 본문 "생기는데요"는 양쪽과 양립) |
| 13 | **지출 한도** 또는 **건건이 승인** (L22) | ✓ 확인 | TechCrunch 10-21 "require approval for each transaction or pre-authorize purchases within a spending limit" | - (경미 보강: C-6) |
| 14 | 에이전트 구매가 **본인 구매와 분리 표시** (L22) | ✓ 확인 | TechCrunch 10-21 "purchases appear separately" / Arkansas 11-25 "keeps the agent's orders separate from the customer's orders" | - |
| 15 | 프로필 **언제든 삭제 가능** (L22) | ✓ 확인 | TechCrunch 10-21 "can delete it at any time" / TechCrunch 11-24 "users can always delete their agent's profile" | - |
| 16 | **"신용카드 추가 사용자" 비유가 월마트가 직접 든 것** (L22·L26) | ⚠ 근거 약함 | TechCrunch 10-21이 월마트에 귀속("Walmart compares this to adding an authorized user on a credit card"), ppc.land도 유사 표현으로 월마트에 귀속. 그러나 **월마트 뉴스룸 11-24 본문·Retail Dive·DigitalCommerce360에서는 이 비유를 찾을 수 없었다.** 직접 인용부호를 쓰지 않은 요지 전달이라 유지 가능하나 "직접 든"은 과함 | **완화 (C-5)** — 본문 논지(출처 바깥의 사고)가 이 비유에 기대고 있어 더 신중할 가치 있음 |
| 17 | 아마존이 가을 내내 서드파티 에이전트의 대리 구매를 차단, **메타 에이전트도 그중 하나** (L14) | ✓ 확인 | 2026-09-20(일) 저녁 Amazon.com에서 Muse 차단 발효(GeekWire·Axios·TechRepublic·Adweek). 아마존은 구글·오픈AI 에이전트도 대상으로 삼았고 퍼플렉시티는 소송 중 | - |
| 18 | **"여행·예약 사이트 상당수는 아예 접속 자체를 차단"** (L14) | ⚠ 근거 약함 | 근거는 TechCrunch 10-21의 한 줄("various travel and booking sites… locking them out completely") **단일 출처**. 보강 검색 결과: 유나이티드항공이 무단 서드파티 에이전트의 항공권 예약·계정 접근 차단 추진(WSJ 인용 보도), 델타도 차단 보도. **반면 호텔 쪽은 반대 사례가 더 많다** — 2026-10-18 실측에서 메리어트·IHG·아코르·초이스는 통과, 힐튼은 "AI 에이전트 예약을 받으며 Muse를 막지 않았다"고 Skift에 답변 | **완화 + 주체 교정 (C-2)** — "상당수"는 과장. 사실에 가까운 주체는 '항공사' |
| 19 | 쇼핑 에이전트가 상품 페이지·리뷰에 심어 둔 문장에 속을 수 있다는 **지적이 꾸준히 나왔다** (L26) | ✓ 확인 (오히려 과소 진술) | 2026년 벤치마크 연구: 리뷰·메타데이터에 숨긴 간접 인젝션 성공률 41.67~68.16%(CSO Online 2026-06 보도) / F-Secure가 모의 마켓플레이스 리뷰에 가짜 할인코드 지시를 심어 에이전트가 그대로 따른 것을 재현 / 전자상거래 챗봇 실사 사례(쿠폰 우회) 보고. **"지적"이 아니라 반복 재현된 실험 결과** | **문장 구조 오류 수정 + 근거 강화 (C-3)** |
| 20 | 아마존에게 **"그것 말고 할 수 있는 일이 없었다"** (L20) | ⚠ 해석 과잉 | 아마존이 공개한 차단 사유는 ①사전 고지 없음 ②Muse가 브라우징 중 자기 식별 안 함 ③고객 자격증명 수집·저장 정황 — '탐지 외에 수단이 없었다'는 진술은 없다. 아마존은 자체 에이전트(Buy for Me)를 운영하고 메타에 '아마존 제외'를 요청하기까지 했다. `_style/ai-timeline.md` L282에도 **아마존 동기 단정 금지** 주의가 달려 있다 | **완화 (C-4)** |
| 21 | "에이전트를 받는다"가 무엇인지 **처음으로** 눈에 보이게 됐다 (L30) | ⚠ 경미 | 월마트는 2025-10 ChatGPT 연동, 2026-01 구글 UCP 공동 참여 전례가 있고, 2026-10-06 시에라·메타의 개인 에이전트 프로토콜(PAP)도 같은 방향이다(월마트도 PAP 명단에 포함). '계정 안 별도 주체 등록'이 정말 최초인지는 단정 어려움 | **완화 권고 (C-7)** — 삭제까지는 불필요 |
| 22 | 커버 크레딧 "월마트 슈퍼센터 매장 외관(플로리다주 스튜어트) — Wikimedia Commons, FLGALine1999" (L34) | ✓ 확인 | Commons `File:Walmart Supercenter - Stuart, FL.jpg`, Author: FLGALine1999, 자작 업로드, CC0 1.0, 캡션 "exterior of Walmart Supercenter located in Stuart, FL" | - (`_workspace/image-credits-2026.md` L202 기록과도 일치. `public/images/covers/walmart-agent-gateway-account-profile.jpg` 파일 존재 여부만 발행 전 확인 요망) |

**상태 요약:** ✓ 확인 15건 / ⚠ 근거 약함·해석 과잉 5건 / ✗ 오류 1건 / ? 검증 불가 0건

---

## C. 수정 권고 (우선순위 순)

### 1. [치명적] 본문 12줄 — 발표 주체 귀속 오류

- **원문:** "통로는 한 달 전인 10월 21일 존 퍼너 월마트 CEO가 발표한 에이전트 게이트웨이(Agent Gateway)인데요,"
- **문제:** 게이트웨이는 월마트 뉴스룸 게시물로 발표됐고, 퍼너는 같은 날 Masters of Scale Summit에서 발언했을 뿐이다. 1차 출처 어디에도 "퍼너가 발표했다"는 서술이 없다. (직함 '월마트 CEO' 자체는 정확하다 — #6 참조)
- **제안 A (최소 수정, 권장):** "통로는 한 달 전인 10월 21일 월마트가 발표한 에이전트 게이트웨이(Agent Gateway)인데요,"
- **제안 B (CEO 언급을 살리려면):** "통로는 한 달 전인 10월 21일 월마트가 발표한 에이전트 게이트웨이(Agent Gateway)인데요, 존 퍼너 CEO가 같은 날 행사 무대에서 직접 설명하기도 했죠."

### 2. [중간] 본문 14줄 — 여행·예약 사이트 차단 범위 과장

- **원문:** "여행·예약 사이트 상당수는 아예 접속 자체를 차단했고요."
- **문제:** 근거가 TechCrunch 한 줄("various travel and booking sites")뿐인데 "상당수"로 키웠다. 확인된 사례는 항공사(유나이티드·델타) 쪽이고, 호텔 체인은 오히려 통과시킨 실측이 다수다.
- **제안:** "항공사 몇 곳은 아예 접속 자체를 막았고요." 또는 "일부 여행·예약 사이트는 아예 접속 자체를 막았고요."

### 3. [중간] 본문 26줄 — 프롬프트 인젝션 문장의 수식 꼬임 + 근거 강화

- **원문:** "쇼핑 에이전트가 상품 페이지나 리뷰에 심어 둔 문장에 속아 엉뚱하게 움직일 수 있다는 지적은 꾸준히 나왔습니다."
- **문제 (a) 문법:** "쇼핑 에이전트가 ~ 심어 둔 문장에"로 읽혀 **에이전트가 문장을 심어 둔 것처럼** 보인다. 주어가 꼬였다.
- **문제 (b) 사실:** 과장이 아니라 오히려 **과소 진술**이다. 리뷰·메타데이터에 숨긴 간접 인젝션 성공률이 41.67~68.16%로 측정된 2026년 벤치마크 연구가 있고, F-Secure는 모의 마켓플레이스에서 리뷰에 심은 가짜 할인코드 지시를 에이전트가 그대로 따르는 것을 재현했다. "지적이 나왔다"는 전언형보다 "실험에서 거듭 재현됐다"가 더 정확하다.
- **제안:** "상품 페이지나 리뷰에 심어 둔 문장에 쇼핑 에이전트가 속아 엉뚱하게 움직이는 일은, 보안 연구에서 이미 여러 차례 재현됐습니다."

### 4. [중간] 본문 20줄 — 아마존의 선택에 대한 단정 완화

- **원문:** "아마존이 택한 길이 옹졸해서가 아니라, 그 구조에서는 그것 말고 할 수 있는 일이 없었던 겁니다."
- **문제:** 아마존이 밝힌 차단 사유는 '사전 고지 없음·에이전트 자기 식별 없음·자격증명 수집 정황'이지 '다른 수단이 없었다'가 아니다. 아마존은 자체 에이전트를 운영 중이고 메타에 제외 요청까지 했다. `ai-timeline.md`도 아마존 동기 단정을 금지하고 있다.
- **제안:** "아마존이 택한 길이 옹졸해서라기보다, 그 구조에서 상인이 쥘 수 있는 레버가 그것뿐이었던 탓이 큽니다." (또는 문장 뒤에 아마존의 공개 사유 한 구절을 붙여 사실로 받치기: "실제로 아마존이 든 사유도 '에이전트가 자기를 밝히지 않는다'는 것이었죠.")

### 5. [경미] 본문 22줄·26줄 — "월마트가 직접 든 비유" 완화

- **원문 (L22):** "월마트가 직접 든 비유가 정확합니다. 신용카드에 추가 사용자를 등록하는 것과 비슷하다고요."
- **원문 (L26):** "다만 월마트 자신이 꺼낸 추가 사용자 비유가 바로 그 발상이에요."
- **문제:** 비유를 월마트에 귀속한 것은 TechCrunch이고, 월마트 뉴스룸·Retail Dive·DigitalCommerce360에서는 확인되지 않았다. 직접 인용은 아니므로 유지해도 되지만 "직접"·"자신이 꺼낸"은 1차 확인 수준을 넘는다.
- **제안 (L22):** "월마트가 든 비유가 정확합니다. 신용카드에 추가 사용자를 등록하는 것과 비슷하다고요."
- **제안 (L26):** "다만 월마트가 든 추가 사용자 비유가 바로 그 발상이에요."

### 6. [경미] 본문 22줄 — 한도 설정의 기본값 보강 (선택)

- **원문:** "여기에 지출 한도를 걸거나 건건이 승인을 받도록 설정할 수 있습니다."
- **보강 근거:** 월마트 약관상 **기본값은 고객 승인**이고, 한도 안의 구매라도 월마트가 추가 승인을 요구할 수 있다(DigitalCommerce360). 또 에이전트는 결제수단을 추가·변경할 수 없다.
- **제안(원할 경우):** "…설정할 수 있습니다. 기본값은 승인을 받는 쪽이고요." — 넣지 않아도 사실 오류는 아니다.

### 7. [경미] 본문 30줄 — "처음으로" 완화

- **원문:** "그래도 덕분에 '에이전트를 받는다'가 구체적으로 무엇을 만들어 두는 일인지는 처음으로 눈에 보이게 됐습니다."
- **문제:** 월마트의 ChatGPT 연동(2025-10)·구글 UCP 참여(2026-01)·시에라와 메타의 PAP(2026-10-06, 월마트도 참여사) 등 선행 사례가 있어 '최초'는 단정하기 어렵다.
- **제안:** "…무엇을 만들어 두는 일인지가 이번에야 구체적으로 눈에 보이게 됐습니다."

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — ✗ 1건(C-1, 발표 주체 귀속)은 반드시 고칠 것. C-2·C-3·C-4는 과장·문법 교정이라 함께 반영 권장. C-5~C-7은 선택.
- [ ] 발행 보류

**시점 규율:** 위반 없음. 본문의 모든 날짜·사건·용어가 2026-11-26 이전에 존재하고, 요일 교차 검증까지 일치한다.

**후속 조치:**
1. 본문 수정 후 `node scripts/lint-post.mjs _posts/2026-11-26-walmart-agent-gateway-account-profile.md` **재실행 의무**(daily-post 절대 규칙 7).
2. 커버 파일 `public/images/covers/walmart-agent-gateway-account-profile.jpg` 실재 여부 확인(크레딧 기록·하단 크레딧 줄은 검증 완료).
3. `_style/ai-timeline.md`에 2026-10-21(에이전트 게이트웨이·에이전트 프로필 발표)과 2026-11-24(Muse 개시) 항목 추가 권장 — 현재 타임라인에는 2026-09-20 아마존의 Muse 차단까지만 들어 있다.

**재활용 메모(다음 포스트용):** 존 퍼너 = Walmart Inc. President and CEO(2026-02-01 취임, 전임 더그 맥밀런) / 아마존의 Muse 차단 = 2026-09-20 발효, 공개 사유 3가지 / 게이트웨이 = 2026-10-21, MCP, 초대제 베타, 월마트+샘스클럽 — 이 네 건은 본 리포트에서 1차·준1차로 확정했으므로 재검증 생략 가능.

---

## E. 사용한 출처

**1차**
- https://corporate.walmart.com/news/2026/11/black-friday-deals-with-meta-muse (11-24, "Starting today" / 대화 내 결제 / 월마트 계정 저장 카드 / 첫 장바구니 시 프로필·지출 한도)
- https://corporate.walmart.com/leadership/john-furner ("President and CEO, Walmart Inc.")
- https://corporate.walmart.com/news/2025/11/14/walmart-announces-john-furner-as-president-and-chief-executive-o0 (2026-02-01 승계)
- https://commons.wikimedia.org/wiki/File:Walmart_Supercenter_-_Stuart,_FL.jpg (커버 저작자·라이선스)

**준1차 / 권위 언론**
- https://techcrunch.com/2026/11/24/walmart-teams-up-with-meta-to-bring-black-friday-deals-to-ai-agent-muse/
- https://techcrunch.com/2026/10/21/while-amazon-blocks-ai-agents-walmart-rolls-out-the-welcome-mat/
- https://www.arkansasonline.com/news/2026/nov/25/metas-muse-ai-agent-now-a-walmart-shopper/
- https://retaildive.com/news/walmart-welcomes-external-ai-shopping-agents-terms-boundaries/833723 (발표 주체 = 월마트 뉴스룸 게시물)
- https://www.digitalcommerce360.com/2026/10/23/walmart-unveils-ai-agent-shopping-controls-spending-limits/ (약관 세부·다니엘 댄커 직함)
- https://www.axios.com/2026/09/21/amazon-meta-muse-ai-agentic-shopping · https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/ (아마존의 Muse 차단)
- https://www.emarketer.com/content/united-jetblue-ai-booking-agents-airlines-direct-booking · https://skift.com/2026/11/09/dear-robot-how-travel-is-and-isnt-talking-to-ai/ (항공사 차단 / 호텔 수용 — C-2 근거)
- https://www.csoonline.com/article/4184455/prompt-injection-breaks-todays-ai-agents-study-warns.html · https://www.f-secure.com/us-en/partners/insights/can-ai-shopping-agents-be-trusted-we-built-one-to-find-out (프롬프트 인젝션 — C-3 근거)

**참고(단독 인용 금지)**
- https://ppc.land/walmart-lets-ai-agents-buy-within-customer-set-limits-such-as-50-or-100/ ("cardholder" 비유 — TechCrunch 보강용으로만)
