# Fact Check Report: 2026-11-13-wells-fargo-ai-agent-authorized-transactions

검증 일시: 2026-11-13 (KST) · 검증자: fact-checker
대상: `_posts/2026-11-13-wells-fargo-ai-agent-authorized-transactions.md`
근거: 1차 출처(웰스파고 약관 원문·공지 페이지·RFC 원문) 직접 조회 + 2차 보도 교차

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-13 09:00 +0900
- **본문에서 언급된 날짜·이벤트**

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 웰스파고 온라인 접근 약관 개정 공지 | 공지 게시(10월 말~11월 초), 보도 2026-11-02(American Banker) | 이전 ✓ | 유지 |
| 개정 약관 **발효일 11월 24일** | 2026-11-24 | **이후(미래)** | ✓ 유지 — 본문이 "11월 24일부터 적용한다고 공지했습니다"로 예정 시제를 지켰다. 발효 완료로 읽히는 문장 없음 |
| JP모건·슈왑의 외부 에이전트 차단 | 2026-10-13(다이먼 실적콜)·2026-10-15~16(워스터) | 이전 ✓ | 유지 |
| 뱅크오브아메리카 모이니핸 발언 | 2026-10-15 블룸버그 | 이전 ✓ | 유지 |
| 씨티 읽기 전용 접근 입장 | 2026-10-22 Axios → 10-23 USA TODAY | 이전 ✓ | 유지 |
| 핑 아이덴티티 뒤랑 발언 | 2026-10-23 보도 | 이전 ✓ | 유지 |

- **사후 시점 표현 검사:** "훗날", "결국 드러나듯", "돌이켜보면" 류 **0건**. "얼마 전까지"(L16)는 10월 중순 사건을 가리키므로 11-13 시점에 적절.
- **용어·약어 시점성:** 에이전틱 AI, 패스키, 생체인증, 토큰 교환, 오픈뱅킹 — 전부 발행일 이전부터 통용. RFC 번호·DPoP·CIBA는 본문에 노출하지 않아 문제 없음.
- **판정: 시점 규율 위반 없음.**
- (운영 메모) `_style/ai-timeline.md`의 기준 시점 행이 아직 `2026-11-12 | 오늘`이다. 이 포스트 발행 시 11-13로 갱신하고 웰스파고 약관 15조 항목을 타임라인에 추가할 것.

---

## B. 사실 검증

### B-1. 웰스파고 약관 (1차 출처 직접 확인)

조회: `https://www.wellsfargo.com/online-banking/online-access-agreement/upcoming/` (본문 204,413자, 구간 분할 조회) 및 `https://www.wellsfargo.com/mobile-online-banking/updates/`

| # | 주장 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 개정 약관 발효일 **2026-11-24** | ✓ 확인 | 약관 상단 "Version Effective November 24, 2026" / 공지 페이지 "we're updating our Online Access Agreement ("Agreement"), effective November 24, 2026" | - |
| 2 | 15조 제목이 "Third-Party Artificial Intelligence Agents or Agentic AI" | ✓ 확인 | 개정판 §15 제목 일치. 하위 (a)~(h) 구성 | - |
| 3 | **15조가 "새로 붙은" 조항인가** | ✓ 확인 | 현행판(Version Effective May 21, 2026)의 §15는 **"Fees"**이고 전체에 "AI Agent"·"Artificial Intelligence" 표현 없음(17(b)의 "virtual AI assistant", 18조의 "chat, virtual assistant" 뿐). 개정판에서 15조가 신설되며 이후 번호가 밀림 | 본문 "새로 붙은 15조" 정확 |
| 4 | 감시 안 함 인용 | ✓ 확인 | §15(e) 원문: "You acknowledge that **we do not monitor, screen, or review AI Agent activities, including any transactions initiated by an AI Agent.**" | 아래 C-3 참고(문형 주의) |
| 5 | 고객 책임 범위 인용 | ✓ 확인 | §15(e)에 "unintended actions", "incomplete, inaccurate, or manipulated inputs", "actions that exceed the authority you granted" 포함. "AT YOUR OWN RISK" 명시. 법령 유보 있음 | - |
| 6 | 취소·증거 보관 인용 | ✓ 확인 | §15(f) 원문: "You are responsible for properly and timely revoking any authorization provided to an AI Agent and taking any necessary further action to cease the AI Agent's activities." / "You must retain evidence of such revocation and must provide such evidence to us, at our request." | - |
| 7 | 차단권 인용 | ✓ 확인 | §15(g) 원문 "limit, prohibit, prevent, suspend, or terminate access by any AI Agent" (Service·Eligible Account 대상). 등록 요구·API 변경·중단 권한도 함께 명시 | - |
| 8 | 5조 무권한 EFT 정의 | ✓ 확인 | §5(a): "an electronic fund transfer from your account that is initiated by a person other than you" + "without actual authority to initiate the transfer" + "from which you receive no benefit" | - |
| 9 | 법령 유보 단서("달리 정한 법이나 규정이 있으면 그에 따른다") | ✓ 확인 | §15(d) "unless law provides otherwise", §15(e)·(f) "subject to legal limits"/"to the extent law permits" | - |
| 10 | 본문 제목의 근거 — 에이전트 행위를 본인 거래로 본다 | ✓ 확인(보강 근거) | §15(d): 자격증명으로 접근을 주면 그 행위는 "deemed to have been initiated and authorized directly by you"이고 은행은 권한 확인 의무 없이 지시에 의존할 수 있다. 공지 페이지도 "Requests made through such a tool may be treated as coming from you" | 제목·논지 뒷받침됨 |
| 11 | **"우리가 그러한 에이전트의 사용을 허용하는 경우에 한해" 단서가 약관에 있다** | ⚠ **위치 오인(해석 과장)** | 해당 문구는 실재하나, **15조 안이 아니라 1조 앞 개요 불릿**에 있다: "This Agreement covers, among other things: **Your responsibilities for artificial intelligence agents, if and when we permit the use of such agents.**" 반면 §15(a)는 "AI Agent로 Service·Eligible Account에 접근하는 경우 적용"이라고 적용 범위를 조건 없이 선언하고, §15(d)는 발효일부터 자격증명 기반 행위를 본인 행위로 간주한다 | **C-2 참조 — 문장 수정 권고** |

### B-2. 타 은행·인물 (2차 출처 교차)

출처: USA TODAY/Yahoo Finance 2026-10-23(최초 Axios 10-22) — `https://finance.yahoo.com/technology/ai/articles/window-vulnerability-banks-move-restrict-202731426.html`

| # | 주장 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 12 | 씨티: 승인된 오픈뱅킹 제공자 경유 읽기 전용만 | ✓ 확인 | 대변인 "We do not permit third-party AI agents or assistants to log into a customer's account." + 승인 제공자 통한 read-only 한정 접근 | - |
| 13 | BofA: 결제 전 사람 승인 | ✓ 확인 | 모이니핸 10-15 블룸버그 "So before you pay, you authorize it, so that we know that you know you're paying for something." | - |
| 14 | JP모건: 외부 에이전트의 계좌 정보 접근 차단 | ✓ 확인 | 기사: CEO가 블룸버그에 외부 에이전트의 계좌정보 접근 차단 확인. 타임라인의 10-13 실적콜 기록과도 일치 | - |
| 15 | **슈왑 "수십 건 단위로 차단"** | ⚠ 번역 뉘앙스 | 원문: 워스터(10-16 블룸버그)가 주요 AI 에이전트의 **"tens and twenties"** 규모 시도를 차단 중이라고 발언. 세는 대상은 단순 로그인이 아니라 **"attempts … to access and manipulate client funds"**. 기간은 기사에 없음 | "수십 건 단위"는 수치 자릿수로는 틀리지 않음(과장·축소 없음). 다만 ①원문이 모호한 구어 표현이고 ②대상이 '자금 접근·조작 시도'라는 점이 빠졌다. **C-5 참조(선택적 보강)** |
| 16 | 안드레 뒤랑이 핑 아이덴티티 CEO | ✓ 확인 | 공식 리더십 페이지·2026년 보도 모두 Founder & CEO. RSAC 2026 NYSE 인터뷰에서도 Founder & CEO 표기 | 표기만 경미 지적(C-6) |
| 17 | 이메일 OTP는 더 이상 안전하지 않다며 패스키·생체인증 권고 | ✓ 확인 | 기사: 에이전트가 이메일에도 접근하므로 이메일 OTP는 불충분. 발언 "Passkeys and biometrics ensure that the human is the one authenticating, and/or that the human is the one authorizing." | 본문의 간접 서술이 원문과 일치 |

### B-3. 위임 인가 메커니즘 서술 (RFC 원문 확인)

| # | 본문 서술 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 18 | "토큰 교환에는 대신 행동하는 주체를 따로 적는 `act` 항목이 있어서, 주체는 나이되 실제로 움직인 것은 이 에이전트라고 토큰에 남길 수 있습니다" | ✓ 확인 | RFC 8693 §4.1: `act` 클레임은 "provides a means within a JWT to express that delegation has occurred". 최상위 `sub`는 권리의 주체, `act.sub`는 그를 대신해 현재 행동하는 주체(§1.1, Figure 5). 중첩 `act`는 이전 행위자 | 서술 정확 |
| 19 | "허용할 작업과 금액 상한, 수취인을 앱의 내부 로직이 아니라 인가 자체에 적어 두는 방식도 표준으로 정리돼 있고" | ✓ 확인(1곳 뉘앙스) | RFC 9396 RAR: `authorization_details`에 `actions`(예 initiate/status/cancel), `instructedAmount`(currency·amount), `creditorName`·`creditorAccount` 기재. 서문이 "scope는 세밀한 인가 요구를 표현하기에 부족하다"고 명시. **다만 RFC는 범용 '금액 상한' 필드를 정의하지 않으며** 금액이 정액인지 상한인지는 API(`payment_initiation` 등) 정의에 달렸다 | "금액 상한"은 엄밀히는 프로파일에 달린 해석. 본문이 기능 수준 서술이라 **오류 아님**, 수정 불필요(원하면 "금액"으로 완화 가능) |
| 20 | "토큰을 에이전트가 가진 키에 묶어 두면 탈취된 토큰은 쓸모가 없어집니다" | ✓ 확인 | RFC 9449 DPoP의 발신자 제한(sender-constrained) 토큰. 엄밀히는 개인키까지 함께 탈취되면 재사용 가능하나, 통상적 서술 범위 | - |
| 21 | "사람 확인이 필요한 순간에는 뱅킹 앱 푸시처럼 에이전트가 손댈 수 없는 별도 채널로 물어보게 할 수도 있죠" | ✓ 확인 | CIBA(디커플드 인증)의 정의 그대로 | - |
| 22 | "씨티가 '읽기 전용'이라고 말할 때 가리키는 것도 결국 이런 칸이 있는 경로입니다" | ⚠ 해석 확장 | 출처는 씨티가 "승인된 오픈뱅킹 제공자 경유 읽기 전용"이라고만 밝혔고, 그 경로가 `act`/RAR/DPoP/CIBA를 쓴다는 근거는 없다. 오픈뱅킹 API가 토큰·스코프를 쓴다는 일반론으로는 성립하지만(읽기 전용=스코프 제한), 앞 문단에서 열거한 네 가지 칸 전부를 가리키는 것처럼 읽힌다 | **C-4 참조 — 한정 권고** |

### B-4. 규제 현황

| # | 주장 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 23 | **"미국에는 위임받은 에이전트의 접근을 정의한 규칙 자체가 아직 없죠"** | ⚠ 과장 | 에이전트를 **정면으로** 규정한 연방 규칙이 없다는 취지는 맞다. 그러나 CFPB 1033조 최종규칙(2024-10-22 확정, 2024-11-18 연방관보)은 **"authorized third party"의 소비자 허락 기반 접근 틀을 이미 정의**하고 있고, 현재는 2025-10 켄터키 동부지법 가처분으로 **집행정지 + 재작성(2025-08-22 ANPR) 진행 중**이라는 사정이 본문에 없다. 또 1033 재작성 의견서(FDATA·FinRegLab 등)에서 에이전틱 AI 사용례가 쟁점으로 다뤄지고 있다. 즉 "규칙이 없다"보다 "있던 틀이 멈춰 서 있고 에이전트는 아직 정의되지 않았다"가 정확 | **C-1 참조 — 치명적 분류, 문장 수정 권고** |

### B-5. 저자의 추론(출처 바깥의 사고) 검사 — 과잉 단정 여부

본문 L30. **결론: 약관이 말하지 않은 것을 말했다고 단정하지는 않는다.** 근거로 든 두 가지(5조가 "actual authority" 유무에 판정을 건다 / 15(e)에서 은행이 감시하지 않는다고 적었다)는 모두 원문 확인됨. "AI 에이전트 거래가 5조 정의에 들어가는가"에 대해 약관이 침묵한다는 점을 본문이 **단정하지 않고** "소비자 보호 규정과 이 조항이 부딪히면 어느 쪽이 이기는지, 약관은 말하지 않습니다"(L32)로 명시한 것도 적절하다.

다만 **두 가지 사실 문제**가 추론의 전제에 섞여 있다.

| # | 주장 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 24 | "**비밀번호를 바꾸거나** 앱에서 연결을 끊는 것으로는 '에이전트의 권한이 몇 시 몇 분에 끝났다'는 기록이 은행 쪽에 남지 않습니다" | ✗ 부정확 | 비밀번호 변경은 **은행 쪽에 시각이 찍히는 서버 측 사건**이다(인증정보 변경 로그). 은행에 남지 않는 것은 '시각'이 아니라 **'그 변경이 어느 에이전트의 어떤 권한을 언제 끊었는지에 대한 대응 관계'**다 | **C-3 참조 — 수정 권고** |
| 25 | 자격증명 기반 구조에서는 취소 증거가 만들어지지 않는다 | ⚠ 반례 존재 | 웰스파고는 **Control Tower**에서 제3자 앱의 데이터 접근을 조회·차단하게 하고 있고, 데이터 공유를 스크래핑이 아닌 API로 전환해 왔다(Plaid 2020·Envestnet\|Yodlee 2021 등 데이터 교환 계약). 그 경로에서의 차단은 은행 측 기록이 남는다. 본문이 "자격증명 기반 구조에서는"이라고 범위를 한정했으므로 **오류는 아니지만**, 웰스파고에 이미 은행 측 취소 경로가 있다는 사실은 논지에 대한 가장 강한 반론이다 | C-5 참조(선택적 보강) |

### B-6. 고유명사·철자·수치 스캔

- 제품·회사: 웰스파고(Wells Fargo) ✓ / 씨티 ✓ / 뱅크오브아메리카 ✓ / JP모건 ✓ / 슈왑 ✓ / 핑 아이덴티티(Ping Identity) ✓ / 패스키 ✓
- 수치: "11월 24일"(✓), "15조"(✓), "5조"(✓), "수십 건"(⚠ #15), "30만 원까지"(가상 예시 — 사실 주장 아님) — **자릿수 오류 없음**
- 직접 인용: 본문의 모든 큰따옴표 인용 4건이 약관 원문과 대응 확인됨(#4·#5·#6·#11). 인명 직접 인용 없음(뒤랑 발언은 간접 서술)
- 맞춤법 스캔: `쓸모`·`묶어`·`옮겨 적었습니다` 등 의심 구간 직접 확인 — **오탈자 없음**
- URL·서비스명: 본문에 외부 URL 없음

---

## C. 수정 권고 (우선순위 순)

### 치명적

1. **[치명적] L32 — "미국에는 위임받은 에이전트의 접근을 정의한 규칙 자체가 아직 없죠."**
   규칙이 '처음부터 없다'로 읽혀 CFPB 1033조의 존재와 집행정지 상태를 지운다. 1033 최종규칙은 authorized third party 접근 틀을 이미 정의했고, 지금은 가처분으로 멈춘 채 재작성 중이다.
   → 권고: **"위임받은 에이전트의 접근을 정면으로 정의한 규칙은 미국에도 아직 없습니다. 오픈뱅킹 쪽 규칙은 법원에서 멈춘 채 다시 쓰이고 있고요."** (사실관계를 한 줄 더 쓰기 싫다면 최소한 "에이전트를 정면으로 다룬 규칙"으로 한정할 것)

2. **[치명적/운영] 프런트매터 L8 `coverImage: ""` 와 본문 L38 커버 크레딧 줄의 충돌.**
   `public/images/covers/wells-fargo-ai-agent-authorized-transactions.jpg`(1200×630, 웰스파고 지점 간판 실사)가 실제로 존재하고 `_workspace/image-credits-2026.md` 185행에 출처(Wikimedia Commons, Tony Webster, CC BY 2.0)도 기록돼 있는데, 프런트매터가 비어 있어 **렌더 시 hero 폴백이 뜨면서 하단에는 보이지도 않는 사진의 출처 줄만 남는다**(CLAUDE.md 2026-09-04 규칙: hero 폴백에는 크레딧 줄을 넣지 않는다).
   → 권고: `coverImage: "/images/covers/wells-fargo-ai-agent-authorized-transactions.jpg"`로 채울 것. (이미지를 쓰지 않기로 했다면 L36~38 구분선·크레딧 줄을 함께 삭제)

### 중간

3. **[중간] L30 — "비밀번호를 바꾸거나 앱에서 연결을 끊는 것으로는 … 기록이 은행 쪽에 남지 않습니다."**
   비밀번호 변경은 은행 서버에 시각이 찍히는 사건이라 사실과 어긋난다. 논지의 진짜 알맹이는 '시각의 부재'가 아니라 '그 시각이 어느 에이전트의 어떤 권한에 대응하는지를 은행이 모른다'이다.
   → 권고: **"비밀번호를 바꾸거나 제3자 앱에서 연결을 끊어도, 은행 쪽에 남는 것은 '비밀번호가 바뀌었다'는 기록이지 '어느 에이전트의 권한이 몇 시 몇 분에 끝났다'는 기록이 아닙니다."**

4. **[중간] L32 — "약관은 에이전트 관련 의무가 '우리가 그러한 에이전트의 사용을 허용하는 경우에 한해' 적용된다고 단서를 달아 두었고"**
   문구 자체는 원문에 실재하지만 **15조의 단서가 아니라 1조 앞 개요 불릿**이다("This Agreement covers, among other things: Your responsibilities for artificial intelligence agents, if and when we permit the use of such agents."). 정작 15(a)는 적용 범위를 조건 없이 선언하고 15(d)는 발효일부터 자격증명 기반 행위를 본인 행위로 간주하므로, '당장 전면 적용되는 것은 아니다'의 근거로 쓰기에는 약하다.
   → 권고: **"약관은 머리말에서 에이전트 관련 책임이 '우리가 그러한 에이전트의 사용을 허용하는 경우에 한해' 적용된다고 적어 두었고"**처럼 위치를 밝히거나, 근거를 15(g)의 차단·등록 요구 권한 쪽으로 옮길 것. (15조 본문 안의 단서로 단정하는 현재 표현은 피할 것)

5. **[중간] L26 끝 — "씨티가 '읽기 전용'이라고 말할 때 가리키는 것도 결국 이런 칸이 있는 경로입니다."**
   출처는 "승인된 오픈뱅킹 제공자 경유 읽기 전용"까지만 말했다. 앞 문단에서 열거한 네 가지 기능을 씨티 경로가 다 갖췄다는 근거는 없다.
   → 권고: **"씨티가 '읽기 전용'이라고 말할 때 가리키는 것도 적어도 '무엇까지 할 수 있는가'가 적히는 경로입니다."** 정도로 한정.

### 경미

6. **[경미] L16 — 슈왑 "수십 건 단위로 차단".** 원문은 `"tens and twenties"`라는 모호한 구어이고, 세는 대상이 **고객 자금에 접근·조작하려는 시도**다. 수치 자체는 틀리지 않으나 대상이 빠져 단순 로그인 시도처럼 읽힌다. → 선택: "고객 자금에 손대려는 시도를 수십 건 단위로 차단하고 있다고 밝혔고요."

7. **[경미] L24 — 인명 표기 '안드레 뒤랑'.** Andre Durand는 미국(덴버) 기반 인물로 영어권에서는 '두랜드'에 가깝게 불린다. 영문 병기가 있어 식별에는 문제가 없으나 프랑스식 음차가 굳는 것은 피하는 편이 낫다. → 선택: 표기 유지하되 다음 등장부터는 'Ping Identity의 안드레 두랜드 CEO' 또는 직함만("핑 아이덴티티 CEO")으로.

8. **[경미] L12 — 인용 문형.** §15(e)의 해당 문장은 "**You acknowledge that** we do not monitor…"로, 은행의 선언이 아니라 **고객의 인정** 형식이다. 본문의 "…적었습니다"는 틀린 요약은 아니지만, 책임 구조를 다루는 글이라면 이 문형 자체가 논지의 재료가 될 수 있다. → 선택: "고객이 '은행은 … 감시하지 않는다'는 점을 인정하는 형식으로 적혀 있습니다."

9. **[경미] L24 — "두 개의 요소가 같은 폭발 반경 안에 들어가 있는 셈이니".** blast radius의 직역으로, 보안 업계 밖 독자에게는 저자가 만든 비유로 읽힌다(스타일 가이드: 저자가 명명하지 않은 비유적 조어 자제). → 선택: "두 요소가 같은 울타리 안에 있는 셈이니" 또는 비유 없이 "같은 계정 하나가 뚫리면 둘 다 뚫리는 셈이니".

10. **[경미/선택] L30 보강 여지.** 웰스파고에는 Control Tower라는 **은행 측 제3자 접근 차단 경로**가 이미 있고 데이터 공유도 API 계약으로 옮겨 왔다. 이 글의 가정에 대한 가장 강한 반론이므로, 한 구절로 선을 그어 두면 논지가 더 단단해진다(저자의 '반박 문단' 습관과도 맞음). → 예: "물론 웰스파고에도 제3자 앱 연결을 끄는 자체 경로가 있습니다. 다만 그 경로 바깥에서 자격증명을 넘겨받은 에이전트라면 이야기가 다르죠."

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — C-1(규제 현황 과장)과 C-2(커버 프런트매터 충돌)를 고치면 발행 가능. C-3·C-4·C-5는 사실관계 정확도에 직접 걸리므로 함께 반영 권고.
- [ ] 발행 보류

**요약:** 시점 규율 위반 없음. 약관 인용 **5건 전부 1차 출처 원문과 일치**(감시 안 함·책임 범위·취소 증거 2문장·차단권·5조 무권한 EFT 정의), 발효일 2026-11-24 1차 출처 2곳에서 확인, 15조가 신설 조항이라는 점까지 현행판 대조로 확인. 타 은행 4곳과 뒤랑 발언도 원 보도와 일치하며, 위임 인가 메커니즘 서술은 RFC 8693 `act`·RFC 9396 RAR·RFC 9449 DPoP·CIBA 원문과 어긋나는 부분이 없다. 존재하지 않는 발언이나 자릿수 오류, 시점 붕괴는 없다. 남은 문제는 **(a) 규제 공백을 실제보다 크게 말한 한 문장, (b) 원문에 있긴 하나 위치를 오인해 인용한 단서, (c) 비밀번호 변경 로그에 대한 기술적 부정확, (d) 커버 이미지 프런트매터 누락**이다.

**재사용 메모(다음 검증용):** 웰스파고 약관 15조 인용 6건·발효일·타 은행 4곳·뒤랑 발언은 이 리포트에서 1차/원 보도로 확정했으므로, 같은 팩트가 후속 포스트에 다시 등장하면 재검증 없이 이 리포트를 인용할 것.

---

## 참고 출처

- https://www.wellsfargo.com/online-banking/online-access-agreement/upcoming/ (개정판, Version Effective November 24, 2026 — §15 전문)
- https://www.wellsfargo.com/online-banking/online-access-agreement/ (현행판, Version Effective May 21, 2026 — §15 = Fees)
- https://www.wellsfargo.com/mobile-online-banking/updates/ (개정 공지)
- https://finance.yahoo.com/technology/ai/articles/window-vulnerability-banks-move-restrict-202731426.html (USA TODAY 2026-10-23, 최초 Axios 10-22)
- https://www.rfc-editor.org/rfc/rfc8693.html (§1.1, §4.1 `act`)
- https://www.rfc-editor.org/rfc/rfc9396.html (authorization_details, payment_initiation 예시)
- https://www.pingidentity.com/en/company/leadership (Andre Durand, Founder & CEO)
- https://www.govinfo.gov/content/pkg/FR-2024-11-18/html/2024-25079.htm (1033 최종규칙 연방관보)
- https://www.cozen.com/news-resources/publications/2026/section-1033-compliance-date-open-banking-rule-enjoined-and-under-reconsideration (1033 집행정지·재검토)
- https://infobytes.orrick.com/2025-08-22/cfpb-proposes-new-rule-to-implement-section-1033-for-consumer-data-rights/ (ANPR)
- https://www.americanbanker.com/news/wells-fargo-strikes-data-sharing-agreement-with-plaid · https://www.bankingdive.com/news/wells-fargo-envestnet-yodlee-sign-data-sharing-agreement/585902/ (Control Tower·API 데이터 공유)
