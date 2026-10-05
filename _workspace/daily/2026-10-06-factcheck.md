# 팩트체크 리포트 — 2026-10-06
포스트: `_posts/2026-10-06-reflection-beam-open-weight-compute-baseline.md`
판정: **발행 가능** (치명적 오류 없음. 초고에서 3건 수정)

## 1차 검증에서 잡아 수정한 항목

| # | 초고 서술 | 문제 | 수정 결과 | 근거 |
|---|---|---|---|---|
| 1 | "신세계그룹은 2026년 3월 17일 샌프란시스코에서" | 날짜 오류. 3월 17일은 한국 보도일(KST). 체결은 **현지시각 3월 16일** | "현지시각 3월 16일 샌프란시스코에서" | ZDNet·머니투데이 모두 "2026년 3월 16일(현지시간) 미국 샌프란시스코" |
| 2 | "국내 언론은 투자 규모를 10조 원 이상, 약 68억 달러로 보도했고" | **국내 언론은 그렇게 보도하지 않았다.** 머니투데이는 "건립 지역과 투자 규모는 확정되지 않았다"고 명시. 10조 원은 해외 매체(DCD 등) 수치 | "건립 지역과 투자 규모는 확정되지 않았다고 했어요. 해외 매체 일부가 10조 원대 사업비를 언급했는데 양측이 발표한 숫자는 아닙니다." | 머니투데이 2026-03-17, ZDNet 2026-03-17(투자액 미기재) |
| 3 | "스페이스X와 2029년까지 GB300 기준 총 70억 달러가 넘는 규모의 컴퓨트 계약을 맺고 네비우스와 10억 달러" | 금액 귀속 오류. 70억 달러는 **두 계약의 합계**이지 스페이스X 단독 금액이 아님 | "스페이스X와 약 63억 달러, 네비우스와 10억 달러가 넘는 ... 합치면 73억 달러" | 스페이스X 약 63억 달러(2026-07-01부터 월 1.5억 달러×2029년까지), 네비우스 10억 달러 초과, 합계 73억 달러 초과 |

그 외 보완: 투자 유치액·기업가치는 2026년 4월 기준(47억 달러/250억 달러)으로 명시. 일부 과거 기사의 26억 달러/80억 달러는 이전 라운드 수치라 사용하지 않음.

## 2차 검증 — 본문 잔여 팩트 전수 대조 (모두 통과)

**모델 사양** (1차 출처: reflection.ai 공식 블로그)
- 발표일 현지시각 2026-10-05 ✓ / 가중치·기술보고서·모델카드·개발자 아티팩트 "이달 중" 공개 예정, Apache 2.0 ✓ (발표 시점 미공개 — 본문이 "공개하겠다고 발표했습니다"로 정확히 구분)
- 희소 MoE 총 501B / 활성 23B ✓ · 52레이어, local+global 어텐션 교차 ✓
- 네이티브 256K, 미드트레이닝으로 유효 1M ✓ · 23.8조 토큰 ✓ · 원시 토큰 95% 제거, 1.8조 토큰 회수 ✓
- 사전학습 GB300 NVL72 6,144장 ✓ · RL GB300 10.5K장 4주 미만 ✓ · 롤아웃 1억 회 초과 ✓
- 샌드박스 누적 13억 개, 피크 동시 17만 개 ✓ · 텍스트 전용 ✓

**벤치마크** (공식 표 → runtimewire 2차 교차 확인)
- Terminal Bench v2.1: Beam 80.1 / Inkling 63.8 / Nemotron 3 Ultra 56.4 / GLM-5.2 81.0 / GLM-5.3 88.2 / Kimi K3 88.3 / Qwen 3.8 Max 86.6 / DeepSeek V4.1 Flash 90.6 ✓
- SWE Bench Pro v1: Beam 65.5 / GLM-5.2 62.1 / Qwen 3.8 Max 67.7 / Inkling 54.3 / Nemotron 46.4 ✓
- SWE Bench Pro v2-Hard: Beam 77.2 / GLM-5.3 84.3 / Kimi K3 88.2 ✓
- ⚠ 최초 1회 추출에서 열 정렬이 어긋난 표를 얻어(DeepSWE 44.4 vs 74.2 등) 논지에 쓸 뻔했으나, runtimewire 교차 확인으로 오류를 잡고 공식 표를 재추출해 확정. **그 수치는 본문에 쓰지 않았다.**

**효율 주장**
- 공식 문구 "scores comparable to GLM-5.2 while using 3–4× less inference compute" ✓ (본문 번역 일치, 비교 대상 GLM-5.2 명시 ✓)
- 제외 항목 "prompt prefill, context-dependent attention operations, and serving overhead" ✓
- "모델 연산 비교이지 고객이 실제로 지불할 금액의 측정치는 아니다" — runtimewire 평 ✓ (본문이 "한 매체는"으로 귀속)
- 독립 검증 부재 ✓ (TechCrunch 명시)

**회사·인물**
- 2024년 설립, 브루클린 ✓ / 미샤 라스킨 CEO, 딥마인드 Gemini 보상 모델링 ✓ / 이오아니스 안토노글루 CTO, AlphaGo·AlphaZero 공동 제작 후 Gemini RLHF 주도 ✓
- 투자자 Nvidia·Sequoia·Lightspeed ✓ / Inkling = Thinking Machines Lab 모델 ✓ / Nemotron 3 Ultra = 엔비디아 ✓

**신세계 건**
- 250MW, 국내 최대 규모 ✓ / 역할 분담(Reflection=칩·모델·풀스택 / 신세계=부지·전력·인허가·금융·건축) ✓
- 정용진 신세계그룹 회장·미샤 라스킨·하워드 러트닉 미 상무장관 참석, 러트닉 지원 의사 표명 ✓
- 미국 정부 AI 수출 프로그램 첫 대표 사례 ✓ (프로그램 개시 2025년 ✓)
- 연내 조인트벤처 설립 계획, '풀스택 AI 팩토리' ✓ / 건립 지역·투자 규모 미확정 ✓
- 라스킨 인용 "신세계와 함께 우리는 한국이 주체적으로 진화시켜 나갈 수 있는 AI 인프라를 창출할 것" ✓ (머니투데이 원문)

## 시점 규율
- 오늘 2026-10-06(KST). 발표는 현지시각 10/5 = KST 10/6 새벽 → 초고의 "어제" 3곳을 "이번에"로 교체(현지/한국 시차로 "어제"가 부정확).
- 가중치 미공개 상태를 본문 3곳에서 명시 — "공개했습니다 → 정확히 쓰면 공개하겠다고 발표했습니다", "가중치가 아직 나오지 않았으니 … 독립적으로 재현해 본 곳은 없습니다", "이달 안에 가중치가 실제로 올라오면".
- `_style/ai-timeline.md`보다 미래인 사건을 과거형으로 쓴 곳 없음.

## 출처
- https://reflection.ai/blog/introducing-beam (1차)
- https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/
- https://www.semafor.com/article/10/05/2026/reflection-ai-unveils-an-open-source-answer-to-chinese-labs
- https://runtimewire.com/article/reflection-ai-beam-open-weight-model
- https://zdnet.co.kr/view/?no=20260317072745 · https://www.mt.co.kr/living/2026/03/17/2026031616482879929
- https://w.media/shinsegae-group-joins-hands-with-reflection-ai-to-build-sovereign-ai-factory-in-south-korea/
