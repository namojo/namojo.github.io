# Fact Check Report: mckinsey-build-vs-buy-run-cost

- **대상 초고:** `_posts/2026-09-06-mckinsey-build-vs-buy-run-cost.md`
- **팩트 카드:** `_workspace/daily/2026-09-06-brief.md`
- **검증일:** 2026-09-05 (발행 예정 2026-09-06 09:00 KST)
- **결론 요약:** **치명적 오류 없음. 수정 권고 반영 후 발행 가능.**
  - 논지의 축인 NANDA 33% vs 67%는 **2차 매체가 만든 숫자가 아니라 원 보고서 본문에 그대로 있는 문장**임을 확인했다(아래 B-9).
  - 맥킨지 수치 7종(1,719명 / 97개국 / 5.4~6.8 / 32% / 37% / 6% / 20%)과 업종별 41·19·17은 모두 교차 확인됐다.
  - 완화가 필요한 항목은 소프트웨어 공학 통설(60~90%)과 운영비 어림셈(15~25%) 두 가지, 그리고 제목의 한정 표현이다.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-09-06 (KST)

| 인용된 사건·시점 표현 | 본문 위치 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|---|
| 맥킨지 「The State of AI in 2026」 발간 | 16줄 | 2026-08-25 발간 | 12일 전 ✓ | 유지 |
| 맥킨지 조사 현장 기간 "올해 5월 4일~6월 8일" | 16줄 | 2026-05-04 ~ 06-08 | 이전 ✓ | 유지 ("올해"=2026 정확) |
| MIT NANDA 「The GenAI Divide」 "지난해 나온 조사" | 26줄 | 2025년 7월(표지 기준), 언론 확산 2025-08-18 | 이전 ✓ | 유지 |
| "지난 이십 년 동안 답은 대체로 사는 쪽" | 20줄 | 일반 서술 | - | 유지 |

- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" 등 발행 시점을 넘어서는 회고 표현 **없음**. ✓
- **허위 즉시성 표현 검사:** "이번 주", "어제", "오늘" 류 표현 **없음**. ✓
  - 다만 16줄 "맥킨지가 … 조사 결과를 내놓았습니다"는 시점 부사가 없어 발간 당일처럼 읽힐 여지가 있다. 실제로는 8월 25일 발간이므로 **"지난달 말"** 한 마디를 넣으면 정확해진다(경미).
- **용어 시점성:** "에이전틱 코딩", "코딩 에이전트", "SaaS", "EBIT" 모두 2026-09 시점에 통용되는 용어. ✓
- **판정: 시점 규율 위반 없음.**

---

## B. 사실 검증

| # | 주장 (본문 위치) | 상태 | 증거 / 출처 | 조치 |
|---|---|---|---|---|
| 1 | 맥킨지 「The State of AI in 2026」 — 97개국 1,719명, 2026-05-04~06-08 (16줄) | ✓ 확인 | The Register(2026-08-25) "surveyed 1,719 professionals … globally"; digitalapplied "Published: August 25, 2026 / Survey conducted: May 4 to June 8, 2026"; McKinsey 원제 "The state of AI in 2026: On the road to ROI" | 유지. 약칭 「The State of AI in 2026」은 원제의 앞부분이라 문제없음 |
| 2 | 32% — "최소 한 건 이상 소프트웨어 제품·기능을 구매하지 않기로 결정. 사내에서 코딩 에이전트로 만들 수 있어서" (16줄) | ✓ 확인 | Yahoo Finance(2026-09-01) "32% of organizations have decided against buying off-the-shelf software, opting instead to build their own solutions using agentic coding tools"; McKinsey 원문 "decided against purchasing at least one software product or feature because they were able to build the functionality in-house using agentic coding tools" | **원 조사 결과와 정확히 일치.** 본문 서술 유지 |
| 3 | 리번 판 데르 베컨 = 맥킨지 시니어 파트너 (18줄) | ✓ 확인 | EasySAM "Lieven Van der Veken, McKinsey Senior Partner"; McKinsey 인물 페이지(리옹 오피스 시니어 파트너, QuantumBlack 글로벌 리더) | 유지 |
| 4 | 인용 — "리더들은 조직이 AI 도구를 직접 만들기 위해 무엇이 필요한지 묻고 있다" (18줄) | ✓ 확인 | 원문 "Now, the tone is changing. Leaders are asking what their organisations need to build AI tools themselves." | 유지 |
| 5 | 인용 — "소프트웨어 코딩 에이전트의 부상은 이 광범위한 전환의 명백한 신호 중 하나" (18줄) | ⚠ 근거 약함(번역 정밀도) | 원문 "The rise of software coding agents **and in-house development** is **one clear sign** of this broader shift." | 원문은 "코딩 에이전트와 사내 개발의 부상"이고 "하나의 분명한 신호". 직접 인용부호 안이므로 **"소프트웨어 코딩 에이전트와 사내 개발의 부상은 이 광범위한 전환을 보여주는 분명한 신호"**로 조정 권고 |
| 6 | 업종별 — 기술 41%, 보험 19%, 공공 17% (18줄) | ✓ 확인 | EasySAM 업종 표: Technology 41 / Healthcare payers·providers 39 / Professional services 38 / Energy·materials 38 / Financial institutions 36 / Media·telecom 34 / Pharma 33 / **Insurance 19 / Public and social sector 17** | 유지 |
| 7 | 37% — AI가 EBIT에 조금이라도 영향, "1년 전과 사실상 변화 없음" (22줄) | ✓ 확인 | The Register "37 percent of respondents attribute at least some EBIT impact to AI use … essentially flat compared to 2025"; McKinsey 본문 "essentially unchanged from 2025" | 유지. 다만 원문은 "긍정적 기여(contributed positively)"에 가까우므로 "**조금이라도 기여했다**"가 더 정확(경미) |
| 8 | 고성과 기업 6%(EBIT 5% 이상 귀속), 이들 중 거의 절반이 구매 건너뜀 / 나머지는 31% (44줄) | ✓ 확인 | Yahoo Finance "the 6% attributing at least 5% of their EBIT to AI … nearly half choosing to build internally compared to 31% of other organizations"; The Register "6 percent … unchanged from the prior year" | 유지 |
| 9 | **NANDA — 사내 자체 구축 약 33% vs 벤더 구매 약 67%, "정확히 두 배" (34줄)** | ✓ **확인 (원 보고서 본문)** | 보고서 원문 직접 인용: **"External partnerships with learning-capable, customized tools reached deployment ~67% of the time, compared to ~33% for internally built tools."** / **"Pilots built via strategic partnerships were 2x as likely to reach full deployment as those built internally."** (pi.inc 미러본 「The GenAI Divide: State of AI in Business 2025」) | **2차 매체 창작이 아님. 논지 축으로 사용 가능.** 아래 상세 주석 참조 |
| 10 | NANDA 20% AI 운영 비용 압박 → 맥킨지 20% (44줄) | ✓ 확인 | The Register "Twenty percent of respondents reported that AI-related operating expenses have limited their technology deployment"; Yahoo "20% of organizations are already feeling the pinch of AI operating costs" | 유지 |
| 11 | NANDA 발간 2025년 7월, 사례 300여 건 + 인터뷰 52건 + 설문 153건 (26·32줄) | ✓ 확인 | 다수 출처 "published in July 2025 … review of more than 300 publicly disclosed enterprise generative AI initiatives, 52 structured interviews, and 153 survey responses" (조사 수행 2025-01~06, 언론 확산 2025-08-18) | 유지. 굳이 정밀하게 하려면 "지난해 여름"도 가능(선택) |
| 12 | 기업 지출 300~400억 달러, 약 95%가 손익 영향 없음 (32줄) | ✓ 확인 | 보고서 원문 "Despite $30–40 billion in enterprise investment into GenAI, this report uncovers a surprising result in that 95% of organizations are getting zero return." | 유지 (자릿수 정확) |
| 13 | NANDA 연구진이 짚은 이유 = "벤더는 통합·반복 개선을 이미 끝내 놓았고 사내 파일럿은 그 부분을 건너뛴다" (36줄) | ⚠ 근거 약함(해석 확장) | 보고서가 실제로 든 이유는 ①사내 구축물의 취약성·워크플로 부적합, ②성공 조직은 벤더를 SaaS 공급자가 아니라 서비스 파트너로 대하며 깊은 커스터마이징·워크플로 통합을 요구, ③학습·기억 능력(경영진 66%가 요구) | 방향은 맞지만 "벤더가 이미 끝내 놓았다"는 공급자 측 서술은 보고서가 강조한 '구매자 측 태도'와 초점이 다름. **"업무 흐름에 파고든 도구가 살아남았고, 사내 파일럿은 대개 그 통합과 반복 개선을 건너뛴다는 것이었습니다"** 정도로 조정 권고 |
| 14 | NANDA 보고서의 성격 (26줄, "MIT의 연구 프로젝트인 난다") | ✓ 확인 (단, 맥락 보강 권고) | MIT Media Lab의 Project NANDA. 다만 **동료 심사를 거치지 않은 업계 리포트**이며 원자료 미공개·방법론 비판이 공개적으로 제기됨(Futuriom 2025-08 등) | 사실 오류 아님. 저자 권위 보호 차원에서 **"동료 심사를 거친 연구는 아니지만"** 같은 반 문장 삽입 권고 |
| 15 | 소프트웨어 생애주기 — 최초 개발 10~40%, 유지보수 60~90% "오래된 정설" (40줄) | ⚠ 근거 약함(범위 과장) | 실제 문헌 분포: Glass 「Facts and Fallacies」 40~80%(평균 60%), IEEE Computer Society 60~80%, O'Reilly 60/60 법칙 60%, Schach 67%, Galorath 75%, Pigoski 80% 초과, Erlikh 90% 초과. 즉 **60~90%는 상단 값들을 모은 범위**이고 하한 40%대 연구도 다수 | 하한을 낮추거나 폭을 명시. 예: "연구마다 편차가 크지만 대체로 **60%에서 많게는 80~90%**", 앞 숫자는 "10~40%"→"**20~40%**". 논지에는 영향 없음 |
| 16 | "원래 구축비의 15~25%를 해마다 운영비로 잡으라는 오래된 어림셈" (50줄) | ⚠ 근거 약함(업계 관행, 학술 근거 아님) | 15~25%/년은 개발사·컨설팅 업계에서 널리 쓰이는 벤치마크로 실재함(다수 업계 자료). Gartner 계열 정리는 도입 1~2년 10~25%, 3~5년 15~30%, 6년 이상 20~40%로 단계별 제시 | 숫자 자체는 유지 가능하나 "**오래된**"은 학술 정설로 오독될 소지. **"업계에서 흔히 쓰는 어림셈"**으로 완화 권고 |
| 17 | 국내 SI·SM 유지보수 요율 별도 계약 관행 (48줄) | ✓ 확인 (일반 사실) | 국내 공공·기업 SW 사업이 구축비와 유지관리 요율을 분리 계상해 온 관행은 널리 알려진 사실. 본문이 **구체 요율 수치를 제시하지 않아** 검증 리스크 없음 | 유지. (요율 수치를 추가한다면 국내 실제 요율은 10% 초반대라 15~25%와 다르므로 **혼동 방지를 위해 숫자 추가 금지 권고**) |
| 18 | 커버 이미지 크레딧 "CERN 데이터센터 서버실 — Wikimedia Commons, Hugovanmeijeren" (56줄) | ✓ 확인 | Commons `File:Cern_datacenter.jpg`, 업로더·촬영 Hugovanmeijeren, CC BY-SA 3.0(2010-03-12 촬영). 파일 `public/images/covers/mckinsey-build-vs-buy-run-cost.jpg` 실재하며 내용 일치 | 유지. `coverImage: ""`이지만 빌드 스크립트가 슬러그 동명 파일을 자동 매칭하므로 커버 정상 노출됨(확인 완료) |
| 19 | 본문 이미지 "MIT 그레이트 돔" + `*출처: Wikimedia Commons*` (28·30줄) | ✓ 확인 | 파일 `covers/mckinsey-build-vs-buy-run-cost-mit.jpg` 실재, MIT 킬리언 코트에서 본 그레이트 돔 정면으로 캡션과 일치. 크레딧 원장에 Mys 721tx / CC BY-SA 3.0 기록됨 | 유지 |
| 20 | 제목·발췌 "셋 중 하나가 소프트웨어를 사지 않았습니다" (3·7줄) | ⚠ 한정 부족 | 32%의 실제 측정 단위는 "**최소 한 건**의 제품 또는 기능"을 사지 않은 조직. 전체 구매 중단이 아님 | 본문 16줄에서 즉시 정확히 한정하므로 치명적은 아님. 발췌 문장에 "**최소 한 건**"을 넣어 균형 권고 |

### B-9 상세 — 33% vs 67%에 대한 추적 결과 (요청 최우선 항목)

이 수치는 **2차 매체가 만들어낸 숫자가 아니다.** 다만 유통 경로가 두 갈래여서 오해 소지가 있어 기록해 둔다.

1. **보고서 본문 계열(정확):** 「The GenAI Divide: State of AI in Business 2025」 본문에 "External partnerships with learning-capable, customized tools reached deployment **~67%** of the time, compared to **~33%** for internally built tools."라는 문장이 그대로 있다. 같은 보고서에 "Pilots built via strategic partnerships were **2x** as likely to reach full deployment as those built internally."도 함께 있어 두 배 서술도 보고서 자체 표현이다. → 초고 34줄의 "약 33% / 약 67% / 정확히 두 배"는 **원전 근거 있음.**
2. **언론 인용 계열(주의):** Fortune(2025-08-18) 등은 "Purchasing AI tools from specialized vendors and building partnerships succeed about 67% of the time, while internal builds succeed **only one-third as often**"으로 옮겼다. 이 문장을 글자 그대로 계산하면 67%의 3분의 1인 **약 22%**가 되어 33%와 어긋난다. 여러 2차 매체가 이 문장을 "33%"로 되옮기며 혼선이 생겼다. → 초고는 다행히 보고서 본문 값(33%)과 일치하므로 **수정 불필요**. 다만 향후 이 수치를 다시 쓸 때 Fortune 문장을 근거로 달지 않는 편이 안전하다.
3. **용어 정밀도(경미):** 원문의 대비 축은 "external partnerships(외부 파트너십으로 도입한, 학습형·맞춤형 도구)" 대 "internally built tools"이고, 측정 지표는 성공률이 아니라 "**정식 배포(deployment)에 도달한 비율**"이다. 초고의 "벤더에게서 구매한 도구의 성공률"은 Fortune의 "purchasing … and building partnerships" 표현과 호환되지만, 엄밀히는 **"벤더와 손잡고 들인 도구가 실제 배포까지 간 비율"**이 정확하다. 한 단어만 바꾸면 정밀도가 올라간다(선택).

---

## C. 수정 권고 (우선순위 순)

**치명적 (발행 전 필수):** 없음.

**중간 (반영 권장):**

1. **40줄** — "총비용의 10~40% 정도이고, 나머지 60~90%는 유지보수에서 나온다는 것입니다"
   → 문헌 분포상 상단만 취한 범위. **"연구마다 편차가 크지만 최초 개발은 총비용의 20~40% 안팎이고, 나머지 60% 이상 — 길게 잡으면 80~90%까지 — 이 유지보수에서 나온다는 것입니다"** 정도로 완화. (같은 문단 42줄의 "앞의 10~40%", "뒤의 60~90%"도 함께 조정 필요)
2. **50줄** — "통상 원래 구축비의 15~25%를 해마다 운영비로 잡으라는 오래된 어림셈"
   → 학술 정설이 아니라 업계 관행. **"업계에서 흔히 쓰는 어림셈"**으로 표현 완화(숫자는 유지).
3. **18줄 인용문** — 원문에 있는 "and in-house development"가 빠지고 "one clear sign"이 "명백한 신호 중 하나"로 옮겨졌다. 직접 인용부호 안이므로 **"소프트웨어 코딩 에이전트와 사내 개발의 부상은 이 광범위한 전환을 보여주는 분명한 신호"**로 교체 권고.
4. **36줄** — 보고서가 든 이유는 '벤더가 미리 끝내 놓았다'보다 '워크플로에 파고들었고, 성공한 조직은 벤더에게 깊은 통합을 요구했다'에 가깝다. **"특정 업무 흐름에 파고든 도구가 살아남았고, 사내 파일럿은 대개 그 통합과 반복 개선을 건너뛴다는 것이었습니다"**로 조정 권고.

**경미 (선택):**

5. **16줄** — "맥킨지가 「The State of AI in 2026」 조사 결과를 내놓았습니다" → **"지난달 말, 맥킨지가 …"**. 실제 발간은 8월 25일.
6. **22줄** — "영업이익에 조금이라도 영향을 줬다고" → **"조금이라도 기여했다고"**. 원문은 긍정적 기여를 묻는 문항.
7. **26줄 또는 32줄** — NANDA 보고서는 동료 심사를 거치지 않았고 방법론 비판이 있었다는 점을 반 문장으로 덧붙이면, 이 숫자를 논지 축으로 쓰는 데 대한 반론을 미리 막을 수 있다. 예: "동료 심사를 거친 연구는 아니어서 방법론을 두고 말이 많았습니다만,"
8. **7줄(발췌)** — "기업 셋 중 하나가 소프트웨어 구매를 건너뛰었다" → **"최소 한 건의 소프트웨어 구매를 건너뛰었다"**로 한정.
9. **34줄** — "벤더에게서 구매한 도구의 성공률" → **"벤더와 손잡고 들인 도구가 실제 배포까지 간 비율"** (원 지표 정합, 선택).
10. **32줄** — 문단 첫 글자 앞에 공백 한 칸이 들어가 있다(` 공개된 기업…`). 렌더링에는 영향 없으나 제거 권장.

**팩트체크 범위 밖 관찰(참고):** 20줄 "이 질문의 답은 대체로 '사는 쪽'이었습니다"의 작은따옴표 강조는 2026-08-12 스타일 규칙(작은따옴표 대조 강조 사실상 금지)과 충돌 소지가 있다. 판단은 저자·ghostwriter 몫.

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** (치명적 오류 없음. ⚠ 4건 — B-5, B-13, B-15, B-16 — 완화 권고)
- [ ] 발행 보류

**근거:** 시점 규율 위반 없음. 맥킨지 조사 수치는 원 발표 및 복수 매체와 전건 일치. 글의 논지 축인 NANDA 33% vs 67%는 원 보고서 본문에 실재하는 문장으로 확인되어 **논지를 유지해도 된다.** 남은 지적은 모두 표현 완화·번역 정밀도 수준이며 주장의 구조를 바꾸지 않는다. 커버·본문 이미지 2장 모두 파일이 실재하고 캡션·출처가 일치한다.

---

## 참고 — 재사용 가능한 검증 결과 (다음 포스트에서 재활용)

- 맥킨지 「The state of AI in 2026: On the road to ROI」: 2026-08-25 발간, 1,719명/97개국, 현장 2026-05-04~06-08. 32%(빌드 전환) / 37%(EBIT 기여, 전년과 동일) / 6%(고성과) / 20%(운영비 압박) / 80%(개인 생산성 향상) / 대기업 에이전트 확산 27%→40%.
- MIT NANDA 「The GenAI Divide: State of AI in Business 2025」: 2025년 7월, 사례 300+/인터뷰 52/설문 153, $30~40B, 95% 무수익, 외부 파트너십 배포 도달 ~67% vs 사내 구축 ~33%(2x). **동료 심사 없음, 방법론 비판 존재.**
- 소프트웨어 유지보수 비중: Glass 40~80%(평균 60), IEEE 60~80%, O'Reilly 60/60, Erlikh 90%+. **"60~90%"로 단정하지 말 것.**
- 연간 운영비 어림셈 15~25%: 업계 벤치마크로 실재하나 학술 근거 아님. **"업계 어림셈"으로만 인용할 것.**

### 확인에 사용한 출처

- https://www.theregister.com/ai-and-ml/2026/08/25/mckinsey-says-enterprise-ai-is-finally-on-the-road-to-roi/5292388
- https://finance.yahoo.com/technology/ai/articles/build-vs-buy-shift-32-113806700.html
- https://easysam.co.uk/news/organisations-turn-to-building-in-house-software-over-buying-3rd-party-alternatives/
- https://www.digitalapplied.com/blog/a-third-of-companies-skipped-buying-software-and-built-it
- https://www.hpcwire.com/bigdatawire/2026/08/26/mckinsey-report-enterprise-ai-is-becoming-a-two-speed-race/
- https://www.pi.inc/docs/356103613275648 (NANDA 보고서 본문 미러)
- https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/
- https://www.theregister.com/2025/08/18/generative_ai_zero_return_95_percent/
- https://aiwiki.ai/wiki/mit_genai_divide_report
- https://getdx.com/blog/the-ai-divide/
- https://www.futuriom.com/articles/news/why-we-dont-believe-mit-nandas-werid-ai-study/2025/08
- https://ventionteams.com/enterprise/software-maintenance-costs
- https://commons.wikimedia.org/wiki/File:Cern_datacenter.jpg
