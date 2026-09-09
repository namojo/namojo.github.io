# Fact Check Report: 2026-09-10-nsa-china-distillation-altered-responses

- **검증 일시:** 2026-09-10 (KST)
- **대상 초고:** `_posts/2026-09-10-nsa-china-distillation-altered-responses.md`
- **팩트 카드:** `_workspace/daily/2026-09-10-brief.md`
- **검증 방식:** CISA 권고문 원문 페이지 3회 교차 조회(섹션별 verbatim 요청) + 보도 5건(TNW·CyberScoop·The Hacker News·Unite.AI·Engadget) + DeepSeek-V3 논문(arXiv 2412.19437) + 사내 이전 발행분 대조
- **종합:** **수정 후 발행.** 치명적 오류 없음. 수정 권고 3건(중요도 순: 탐지 지표 개수 / "전부 정상 사용" 절대화 / "의심" vs "고신뢰도" 조건).

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-09-10 09:00 +0900
- **본문에 등장하는 날짜·시점 표현**

| 인용된 사건·표현 | 실제 | 발행일 대비 | 판정 |
|---|---|---|---|
| "현지 시각 9월 8일에 나온 권고문" | CISA 게시 Release Date **September 08, 2026** | 이전 ✓ (미국 9/8 = KST 9/9) | 유지 |
| 권고문 ID `AA26-251A` | 2026년 제251일 = 9월 8일(2026년 비윤년). ID 체계와 발표일이 자체 정합 | 이전 ✓ | 유지 |
| "최소 2024년 말부터" | 권고문 "since at least late 2024" | 이전 ✓ | 유지 |
| "예전에 이 숫자를 다룬 적이 있는데요" | `_posts/2025-02-02-deepseek-shock-the-sputnik-moment.md`("560만 달러의 진실 : 숫자는 틀리지 않았지만, 전부는 아니었다") | 이전 ✓ | 유지 — 날짜·'이 블로그' 없이 가볍게 참조한 형태로 스타일 규칙에도 부합 |

- **미래 사건 혼입:** 없음. 본문에 발행일 이후 사건·모델·수치가 등장하지 않음.
- **사후 시점 표현("훗날 드러나듯", "결국 ~였다" 등):** 없음. 52줄의 "결국 총액은 여전히 아무도 모릅니다"는 사후 회고가 아니라 현재 시점 진술이므로 문제 없음.
- **용어 시점성:** 증류(distillation), 트랜스퍼 스테이션, MITRE ATLAS, 오픈웨이트 모두 발행일 이전에 통용. 문제 없음.
- **날짜 지칭 방식:** "어제"가 아니라 "현지 시각 9월 8일"로 못 박아 KST/현지 시각 시차(9/8 현지 = 9/9 KST) 문제를 회피함. 적절.

**A 판정: 통과.**

---

## B. 지시된 16개 항목 판정

| # | 확인 항목 | 초고 서술 | 원문·출처 확인 | 판정 |
|---|---|---|---|---|
| 1 | 권고문 ID·제목·발표일·발행 기관 | "합동 사이버보안 권고문 AA26-251A", "현지 시각 9월 8일", "NSA와 사이버보안·인프라보안국(CISA), FBI가 함께" | CISA 페이지: ID `AA26-251A`, 제목 "China-Based Artificial Intelligence Companies Conducting Industrial-Scale Distillation Campaigns Against U.S. AI Companies", Release Date September 08, 2026, 발행 NSA·CISA·FBI | **통과** |
| 2 | 지목 기업 6곳 명단 | DeepSeek, Moonshot AI, 알리바바, MiniMax, StepFun, Z.AI | 동일 6곳. 빠짐·추가 없음(CISA 원문 + CyberScoop + Engadget + Unite.AI 일치) | **통과** |
| 3 | 기간·규모 표현 | "최소 2024년 말부터 수백만 건의 주고받은 요청에 걸쳐 수십억 토큰" | "at least late 2024", "billions of tokens across millions of exchanges/requests" | **통과** |
| 4 | 증류를 "정당하고 유용한 기법"으로 인정 | "권고문도 정당하고 유용한 기법이라고 먼저 인정해 둡니다" | 원문: "While 'distillation' is recognized as a legitimate and useful technique in AI research, …" | **통과** |
| 5 | "보조 수단이 아니라 개발 전략의 핵심" | 동일 취지 | 원문: "distillation is not a supplement to these companies' AI model development, but the critical core of it" | **통과** |
| 6 | 응답 변경 권고 + 예시 3종 + 정당한 연구자 통보 | "응답을 미묘하게 바꿔서 그 대가를 줄이라", 예시 "추론의 깊이를 줄이거나, 맞는 정보를 다른 추론 과정에 담아 내놓거나, 문체를 일관되지 않게" / "정당한 연구자에게는 알린다는 취지가 함께 적혀 있습니다" | 원문: "employing targeted changes in response to high-confidence malicious distillation requests" / "reducing reasoning depth, presenting correct information with different reasoning, or stylistic inconsistencies" / "Avoid informing China-based AI company users suspected of distillation campaigns of a switch to a downgraded model" / "AI safety researchers and third-party evaluators should be informed of model changes". TNW도 "subtly alter output to suspected distillers without telling them, while informing legitimate researchers"로 동일 | **경미** — 예시 3종·비통보·연구자 통보 모두 원문에 실재하며 과장 아님. 단 두 가지 정밀화 필요: ① 원문 조건은 "의심"보다 강한 **high-confidence / confirmed**, ② 통보 대상은 일반 "정당한 연구자"가 아니라 **AI 안전 연구자와 서드파티 평가자**로 더 좁다(초고 논지에 오히려 유리) → C-2, C-3 |
| 7 | 탐지 지표 3종 | "권고문이 제안한 탐지 지표를 그대로 읽어 보면 **세 가지**입니다" | 3종 각각은 원문 확인됨("anomalous subscription-to-usage ratios", "new subscriptions immediately at maximum usage as opposed to gradual AI adoption", "enterprise-scale throughput patterns"). 그러나 원문 행위 탐지 항목은 3개가 아니라 최소 4개 — "shared accounts from multiple IPs/user agents", "24/7 sustained usage without human variation/idle periods"가 더 있음 | **경미(중요)** — 개별 3종은 정확하나 "지표는 세 가지"라는 총량 서술이 사실과 다름 → C-1 |
| 8 | 트랜스퍼 스테이션 정의 + 자동 전환 | "지역 제한과 이용약관과 안전장치를 한꺼번에 우회하는 회색시장 프록시… 트랜스퍼 스테이션… 한 경로가 막히면 자동으로 다른 경로로 넘어간다" | 원문: "a large gray market of API proxies, or 'transfer stations,' which resell access to frontier models at a fraction of the official price" / "bypass U.S. AI companies' geographic restrictions, breach terms of use, evade safeguards, and undermine traceability" / 라우팅은 "native APIs, cloud providers, third-party aggregators, third-party relays, and vendor account pools"의 다중 경로. Unite.AI가 "automated failover between pathways during blocking attempts"로 명시 | **통과** (정의의 핵심인 '공식가의 일부 값으로 재판매'가 초고에 빠졌으나 논지에 불필요 — 선택 사항, C-4) |
| 9 | 애그리게이터 메타데이터 제거 / 프리미엄 대량 구매 후 팀 공유 / 출신 국가 은닉 | 세 가지 모두 서술 | 원문: "third-party aggregators that automatically obfuscate user metadata", 인프라 계층의 "automated sanitization to systematically remove organizational identifiers", "create user accounts obfuscating their country of origin and subsequentially procure bulk premium AI subscription services", "premium subscriptions shared across teams" | **통과** |
| 10 | DeepSeek의 프롬프트 수법 | "이미 완성된 답의 내부 추론을 상상해서 단계별로 적어 보라고 지시하는 프롬프트" | 원문: "DeepSeek employed prompts instructing models to imagine and articulate the internal reasoning behind completed responses and write it out step by step" | **통과** (직역 수준으로 정확) |
| 11 | 560만 달러 문장의 취지 + 권고문이 빠진 금액을 적지 않았다 | "널리 인용되는 560만 달러의 학습 비용은 오해를 부르는데, 광범위한 악의적 증류로 취득한 데이터의 진짜 비용이 그 안에 들어 있지 않기 때문이다" / "권고문은 빠진 금액이 얼마인지 적지 않았습니다" | 원문 verbatim: "DeepSeek's publicly quoted training costs of $5.6M are misleading as it does not include the true cost of the data acquired through extensive malicious distillation." 원문 재조회 결과 **대체 금액·추정치 없음**, 보도 5건 중 어느 곳도 금액을 인용하지 않음 | **통과** (초고의 한국어 번역이 원문 취지와 일치) |
| 12 | 원 논문이 560만 달러를 최종 학습 실행 비용으로 한정 | "원 논문도 그 금액이 최종 학습 실행에 든 비용이라고 적어 두었으니" | DeepSeek-V3 Technical Report(arXiv 2412.19437): 2.788M H800 GPU-hours × $2 = **$5.576M**, 그리고 "The aforementioned costs include only the official training of DeepSeek-V3, excluding the costs associated with prior research and ablation experiments on architectures, algorithms, or data." | **통과** (본문에 V3임을 명시하지 않았으나 2025-02-02 발행분에서 이미 "V3 훈련"으로 특정해 둔 바 있어 일관성 문제 없음) |
| 13 | 알리바바=Qwen, Moonshot AI=Kimi, Z.AI=GLM | 그대로 서술 | 알리바바 Qwen 계열(권고문도 Qwen 명시), Moonshot AI Kimi 계열(K2·K3), Z.AI는 Zhipu AI의 브랜드로 GLM 계열(GLM-5.2/5.3) — 업계 자료 다수 일치 | **통과** (권고문 본문은 Z.AI에 대해 GLM 이름을 직접 붙이지 않으나, 회사-모델 계보 자체는 사실이고 초고도 권고문 인용이 아니라 회사 소개로 서술함) |
| 14 | 6개 기업 무응답 + 중국 대사관 "의도적 공격" 일축 | 그대로 서술 | TNW: "None of the six companies responded to requests for comment." / 중국 대사관 대변인 Liu Chang이 "a deliberate attack on China's development in AI"라며 일축(Bloomberg 인용) | **통과** (초고가 대변인 실명을 넣지 않은 것은 문제 없음) |
| 15 | **해킹·침입·가중치 유출을 주장하지 않는다**(초고 핵심 논지) | "서버가 뚫린 이야기가 없습니다. 가중치가 유출된 것도 아니고, 취약점이 악용된 것도 아닙니다. 나열된 행위는 전부 제품을 정상적으로 사용한 것입니다… 악의성의 근거는 기술적 경계를 넘은 데 있지 않고, 이용약관을 어긴 것과 그 사실을 감추려 쌓아 올린 회피 장치에 있습니다" | **논지의 뼈대는 확인됨.** CyberScoop: "alleges terms-of-service violations rather than hacking or theft of model weights… using publicly available APIs, not unauthorized access". Engadget도 동일. 나아가 한 분석은 권고문 본문 약 3,585단어에 theft·stolen·illegal·unlawful·copyright·trade secret·lawsuit·sanction이 **한 번도 등장하지 않는다**고 집계 — 초고의 "법적 효력 없음·제재 아님" 서술까지 뒷받침. **단, 권고문에는 탈옥·프롬프트 인젝션 시도와 "evade safeguards"가 명시**되고 MITRE ATLAS의 prompt injection/jailbreaking 항목에 매핑돼 있으며, MiniMax는 Claude Code에 프롬프트 인젝션을 시도한 것으로 지목됨 | **경미(중요)** — "침입·가중치 유출·취약점 악용 없음"은 **정확**. 그러나 "나열된 행위는 **전부** 제품을 정상적으로 사용한 것"과 "**기술적 경계**를 넘은 데 있지 않고"는 안전장치 우회·탈옥·프롬프트 인젝션을 포함한 원문과 충돌하는 절대 표현 → C-2 |
| 16 | 시점 일관성 | 위 A절 참조 | — | **통과** |

### 추가로 검증한 항목(지시 목록 외)

| 항목 | 확인 | 판정 |
|---|---|---|
| "미국 연구소들이 자기 대형 모델을 증류해 소형 모델 계보를 만들어 온 것" | 일반적으로 확립된 사실(플래시·미니 계열 등), 특정 수치 주장 없음 | 통과 |
| 인용 표현 "산업적 규모의 증류 캠페인" | 권고문 제목 "Industrial-Scale Distillation Campaigns" 직역 | 통과 |
| 본문 이미지 캡션 "권고문은 이 회사가 2024년 말부터 미국 모델을 상대로 조직적인 증류를 해 왔다고 적었습니다" | 권고문: DeepSeek은 "since at least late 2024" 조직적 캠페인 수행 | 통과 |
| 본문 이미지 파일·출처 | `public/images/covers/nsa-china-distillation-altered-responses-deepseek.jpg` 존재, 내용도 DeepSeek 앱 첫 화면과 일치. 인라인 출처 `*출처: Unsplash, Solen Feyissa*` 표기, `_workspace/image-credits-2026.md` 75행과 일치 | 통과 |
| 커버 이미지·하단 크레딧 | `coverImage: ""`이지만 `covers/{slug}.jpg`가 존재하고 `build_posts_json.py`가 슬러그 매칭으로 커버를 채우는 규약(2026-07-18 이력)이라 정상. 파일 내용은 구리 증류기 사진으로 하단 크레딧 문구와 일치, credits 74행과도 일치 | 통과 |
| 429/403, 상태 코드 200, "자기 쪽 로그로는 탐지할 수 없다" | 권고문 문구가 아니라 저자 해석·평론. 권고문의 '비통보' 규정에서 논리적으로 도출되며 사실 주장으로 오독될 표현은 아님 | 통과(평론) |

---

## C. 수정 권고 (우선순위 순)

**C-1. [중요·경미] 30줄 — 탐지 지표를 "세 가지"로 단정한 부분**

- 현재: "권고문이 제안한 탐지 지표를 그대로 읽어 보면 세 가지입니다."
- 문제: 권고문의 행위 기반 탐지 항목은 최소 4개이며, 초고가 뺀 두 항목("여러 IP·유저에이전트에서 공유되는 계정", "사람다운 변동이나 유휴 시간 없이 24시간 지속되는 사용")도 원문에 있습니다. 개수를 단정하면 원문 대조 시 곧바로 걸립니다.
- 권고 수정: "권고문이 제안한 탐지 지표 가운데 눈에 걸리는 것이 세 가지입니다." 또는 "권고문이 제안한 탐지 지표를 그대로 읽어 보면 이런 항목들이 있습니다."
- 참고: 누락된 두 항목도 야간 배치·상시 파이프라인과 겹치므로, 넣으면 오탐 논지가 오히려 강해집니다(선택).

**C-2. [중요·경미] 22줄 — "전부 정상 사용" / "기술적 경계를 넘은 데 있지 않고"의 절대화**

- 현재: "나열된 행위는 전부 제품을 정상적으로 사용한 것입니다." / "이 문서에서 악의성의 근거는 기술적 경계를 넘은 데 있지 않고, 이용약관을 어긴 것과 …"
- 문제: 권고문에는 안전장치 우회(evade safeguards), 숨겨진 CoT를 끌어내기 위한 탈옥·프롬프트 인젝션 시도가 명시돼 있고 MITRE ATLAS의 prompt injection/jailbreaking에 매핑됩니다(MiniMax는 Claude Code 대상 프롬프트 인젝션으로 지목). 초고 스스로 18줄에서 "안전장치를 한꺼번에 우회하는 회색시장 프록시"라고 적어 두어 내부 충돌도 있습니다. 핵심 논지(침입·가중치 유출·취약점 악용 부재)는 그대로 유효하므로 절대 표현만 완화하면 됩니다.
- 권고 수정(예):
  - "나열된 행위는 전부 제품을 정상적으로 사용한 것입니다." → "나열된 행위는 대부분 제품을 정상적으로 사용한 것입니다. 구독을 사고, 프롬프트를 보내고, 돌아온 응답을 읽었습니다. 안전장치를 우회하거나 숨은 추론을 끌어내려 한 프롬프트가 섞여 있긴 하지만, 그것도 정문으로 들어와 질문을 던진 일입니다."
  - "기술적 경계를 넘은 데 있지 않고" → "시스템에 침입한 데 있지 않고"

**C-3. [경미] 14줄·34줄 — 응답 변경의 발동 조건과 통보 대상 정밀화**

- 현재: 14줄 "악의적 증류가 의심되는 시도에는 응답을 미묘하게 바꿔서" / 34줄 "정당한 연구자에게는 알린다는 취지가 함께 적혀 있습니다."
- 확인된 원문: 발동 조건은 "high-confidence malicious distillation requests"·"users confirmed to be…"(단순 의심보다 강함), 통보 대상은 "AI safety researchers and third-party evaluators".
- 권고 수정: 14줄은 "악의적 증류로 고신뢰도 판정된 시도에는"으로, 34줄은 "AI 안전 연구자와 서드파티 평가자에게는 모델 변경을 알린다는 취지가 함께 적혀 있습니다."로. 후자는 통보 대상이 명단 안에 든 소수라는 뜻이어서 "그 분류는 내가 조회할 수 있는 값이 아니다"라는 뒤 문장의 근거가 더 단단해집니다. 34줄의 오탐 논지는 "고신뢰도"라는 조건을 명시해도 무너지지 않습니다(고신뢰도 판정 기준이 공개돼 있지 않다는 점이 그대로 남으므로).

**C-4. [선택] 18줄 — 트랜스퍼 스테이션 정의 보강**

- 권고문의 정의는 "공식가의 일부 값으로 프런티어 모델 접근권을 재판매하는" 회색시장 API 프록시입니다. 초고는 우회 기능만 적고 '재판매'를 빼서 정의가 절반입니다. 논지에 필수는 아니므로 한 어절만 덧붙이는 선택 수정: "공식가의 일부만 받고 접근권을 되파는 회색시장 프록시".

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — C-1·C-2 반영 권고(각 한 문장 수정), C-3 권장, C-4 선택. 치명적 오류 없음.
- [ ] 발행 보류

**요약:** 지시된 16개 항목 중 12개가 원문 대조 통과, 4개(6·7·15 및 8의 일부)가 경미. 오류가 아니라 **절대 표현·총량 단정의 정밀도 문제**이며, 특히 15번 핵심 논지(권고문은 해킹·침입·가중치 유출을 주장하지 않는다)는 CyberScoop·Engadget 및 원문 어휘 집계(theft/stolen/illegal/copyright/trade secret/lawsuit/sanction 0회)로 **강하게 뒷받침**됩니다. 6번 응답 변경 권고도 과장이 아니라 원문 직역 수준입니다. C-1이 대조 시 가장 먼저 걸릴 문장이므로 우선 수정 대상입니다.

---

## 출처

- https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-251a (권고문 원문, 3회 섹션별 조회)
- https://www.cisa.gov/news-events/news/cisa-nsa-and-fbi-warn-china-based-ai-companies-targeting-us-ai-models-industrial-scale-knowledge
- https://cyberscoop.com/us-accuses-chinese-ai-companies-distillation/
- https://thenextweb.com/news/nsa-fbi-cisa-advisory-chinese-ai-distillation
- https://thehackernews.com/2026/09/us-agencies-accuse-china-ai-firms-of.html
- https://www.unite.ai/nsa-cisa-fbi-warn-china-based-ai-firms-distill-us-frontier-models/
- https://www.engadget.com/2253604/us-authorities-accuse-chinese-ai-companies-of-industrial-scale-campaigns-to-copy-american-models/
- https://www.beri.net/article/cisa-aa26-251a-distillation-signature-agent-fleet-silent-model-downgrade (권고문 본문 어휘 집계)
- https://arxiv.org/abs/2412.19437 (DeepSeek-V3 Technical Report — $5.576M, 최종 학습분 한정)
- `_posts/2025-02-02-deepseek-shock-the-sputnik-moment.md` (자기 참조 대조)
- `_workspace/image-credits-2026.md` 74~75행 (이미지 출처 대조)
