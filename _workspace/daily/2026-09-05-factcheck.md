# Fact Check Report: humain-m3-minimax-sovereign-weights

- **대상 초고:** `_posts/2026-09-05-humain-m3-minimax-sovereign-weights.md`
- **발행 기준 시점:** 2026-09-05 09:00 KST
- **검증 일시:** 2026-09-04
- **종합 판정: 수정 후 발행 가능** (치명적 오류 없음 / [중요] 3건 · [경미] 6건)

---

## A. 시점 일관성 (최우선 검사)

| 본문 언급 | 실제 일자 | 발행일(9/5) 대비 | 판정 |
|---|---|---|---|
| "이틀 전 리야드" / humain-m3 공개 | 2026-09-03 | 이전 ✓ (정확히 이틀 전) | 유지 |
| MiniMax-M3 공개 ("지난 6월") | 2026-06-01 (HF 가중치 06-07) | 이전 ✓ | 유지 |
| 미니맥스 홍콩 상장 ("올해 1월") | 2026-01-09 | 이전 ✓ | 유지 |
| 전체 가중치 공개 "다음 달 목표" | 2026-10 예정 | **미래·예정형으로 정확히 표기** ✓ | 유지 |
| 독파모 1차 단계평가 | 2026-01-15 | 이전 ✓ | 유지 |
| 네이버 인코더 유사도 보도 | 2026-01-06 | 이전 ✓ | 유지 |
| 독파모 2차 단계평가 | 2026-08-18 | 이전 ✓ | 유지 |
| 트럼프 걸프 순방·엔비디아/AMD 발표 | 2025-05-13 | 이전 ✓ | 유지 |
| 걸프권 AI 칩 수출 승인 | 2025-11-19 (상무부) | 이전 ✓ | 유지 |

- **미래 사건 과거화: 없음.**
- **사후 시점 표현("훗날 드러나듯", "결국", "돌이켜보면"): 없음.**
- **용어 시점성:** 오픈웨이트, MoE, 독파모, HUMAIN Node, MiniMax Community License 모두 발행일 이전 존재 확인.
- **시점 규율 판정: 통과.**

---

## B. 항목별 검증

### 1. [확인됨] ⚠ 최우선 항목 — "리야드에서 열린 LEAP 컨퍼런스"

**결론: 초고 표기가 맞습니다. 수정 불필요.**

의뢰 취지(LEAP은 2월 행사 아닌가?)는 타당한 의심이었으나, **LEAP 2026은 개최 시기가 옮겨졌습니다.**

| 회차 | 일자 | 장소 |
|---|---|---|
| LEAP 2022 | 2월 1–3일 | 리야드 |
| LEAP 2023 | 2월 6–9일 | 리야드 |
| LEAP 2024 | 3월 4–7일 | 말함(리야드) |
| LEAP 2025 | 2월 9–12일 | 말함(리야드) |
| **LEAP 2026** | **8월 31일 – 9월 3일** | **리야드 전시컨벤션센터(RECC), 말함** |

즉 **9월 3일은 LEAP 2026의 마지막 날**이며, 발표가 이 행사에서 나온 것이 맞습니다.

교차 확인 3곳 이상:
- PR Newswire 원문 데이트라인 `RIYADH, Saudi Arabia, Sept. 3, 2026` + 본문 "announced at LEAP 2026"
- Unite.AI 제목 자체가 "…Launches humain-m3 Arabic Model **at LEAP Riyadh**"
- Al-Monitor: "September 3, 2026 at the **LEAP technology conference in Riyadh**"
- dimsumdaily: "announced during the **LEAP technology conference in Riyadh on September 3**"

> 참고: 실제 개최지는 리야드 북쪽 말함(Malham)의 RECC이지만, 보도자료 데이트라인과 모든 매체가 "리야드"로 표기하므로 "리야드에서 열린 LEAP 컨퍼런스"는 문제 없습니다. 행사명을 빼라는 대안 권고는 **적용하지 않습니다.**

---

### 2. [확인됨] 모델 스펙 — 4,280억 파라미터 / MoE / MiniMax-M3 계보 / 아랍어 1조 토큰

PR Newswire 원문·Unite.AI·dimsumdaily 일치.
- "428-billion-parameter mixture-of-experts model" ✓
- "built on MiniMax-M3 lineage" ✓ → 초고 "계보를 그대로 이어받았습니다" 적절
- "further pre-trained on more than one trillion tokens of Arabic-native content" ✓ → 초고 "아랍어 네이티브 콘텐츠 1조 토큰 이상으로 추가 사전학습" 정확
- "Commissioned by HUMAIN and delivered by MiniMax" ✓ → 초고 "휴메인이 발주하고 미니맥스가 개발해 넘긴 관계" 정확
- (본문 미사용 정보) 토큰당 활성 파라미터 약 230억, 멀티모달·툴유즈 지원.

---

### 3. [확인됨] 아랍어 벤치마크 7종 평균 최고 — 주장 범위 정확

초고: **"…평균 점수가 가장 높았다는 것이 휴메인의 설명인데요"**

이 귀속(attribution)이 정확합니다. 근거:
- 해당 문장은 HUMAIN 보도자료 문구("achieved the highest average score among frontier models tested across seven public Arabic benchmarks")이며, **제3자 검증이 없습니다.**
- Unite.AI는 "HUMAIN claims / HUMAIN's evaluation"으로 명시(평균 89.37% vs GPT-5.6 SOL 87.30%, Opus 5 87.34%, MiniMax M3 레퍼런스 80.34%).
- TechTimes 기사 제목이 아예 "…Frontier Claims, **Scores Unverified**".

**과장 없음.** 개별 점수를 본문에 넣지 않은 것도 팩트 카드 지침에 부합합니다. 수정 불필요.

---

### 4. [확인됨] 리서치 프리뷰 / 가중치 "다음 달 공개 목표"

초고: "지금은 자체 플랫폼인 HUMAIN Node에서 리서치 프리뷰로만 열려 있고, 전체 가중치는 안전성 학습을 마친 뒤 다음 달 공개를 목표로 하고 있습니다. 아직 받아서 돌려 볼 수 있는 물건은 아니라는 뜻입니다."

원문: "available in research preview through HUMAIN Node (node.humain.com)… weights to be released under the MiniMax Community License once safety training and alignment are complete, **targeted for next month**."

**완료가 아닌 예정으로 정확히 표현되었습니다.** 마지막 한 문장이 오해 가능성까지 닫아 줍니다. 수정 불필요.

---

### 5. [경미] 보도자료 제목 인용이 원문보다 짧음

- **원문 전체:** `HUMAIN Unveils humain-m3, a Frontier Arabic Language Model Developed by MiniMax, in Research Preview on HUMAIN Node`
- **초고 인용:** `"HUMAIN Unveils humain-m3, a Frontier Arabic Language Model Developed by MiniMax"`

인용한 부분은 **한 글자도 틀리지 않았지만**, 뒤를 자른 채 "보도자료 제목이 …입니다"라고 단정해 전체 제목처럼 읽힙니다. 논지("제목에 개발사를 적었다")에는 영향이 없으나 정확성을 위해 말줄임 표시를 권합니다.

**교체 문장(택1):**
> 보도자료 제목이 "HUMAIN Unveils humain-m3, a Frontier Arabic Language Model Developed by MiniMax…"입니다.

또는 전체 인용:
> 보도자료 제목이 "HUMAIN Unveils humain-m3, a Frontier Arabic Language Model Developed by MiniMax, in Research Preview on HUMAIN Node"입니다.

---

### 6. [중요] MiniMax Community License — 2,000만 달러 기준의 적용 대상이 다름

라이선스 원문(Hugging Face `MiniMaxAI/MiniMax-M3/LICENSE`) 확인 결과:

- 표시 의무: "you shall prominently display **'Built with MiniMax M3'** on a related website, user interface, blogpost, about page or product documentation" → **초고 서술 정확 ✓**
- 승인 의무: "you shall obtain a separate, prior written authorization from MiniMax… **if such products and services generate more than 20 million US dollars… in yearly revenue**"

즉 기준은 **사업자 전체의 연매출이 아니라 '그 모델로 만든 제품·서비스'가 내는 연매출**입니다. 초고의 "연매출 2,000만 달러를 넘는 사업자라면"은 적용 범위를 잘못 좁혔습니다(혹은 넓혔습니다). 라이선스 조항을 직접 확인하는 독자층이 있는 주제라 교정 권장.

**교체 문장:**
> 그 모델로 만든 제품·서비스의 연매출이 2,000만 달러를 넘으면 미니맥스의 사전 서면 승인도 받아야 하고요.

> 참고(수정 불필요): 휴메인은 미니맥스에 개발을 **발주**한 관계이므로 커뮤니티 라이선스가 아니라 별도 상업 계약의 적용을 받았을 수도 있습니다. 다만 초고가 이미 "표시 의무가 있다는 사실과 제목에 이름이 들어갔다는 사실을 나란히 놓아 두겠습니다 / 어느 쪽이 이유였는지는 밖에서 확인할 방법이 없습니다"로 인과를 단정하지 않아, 논증상 문제는 없습니다.

---

### 7-a. [중요] 미니맥스 주가 "발표 당일 10% 가까이" — 출처 간 수치 불일치

| 출처 | 보도 내용 |
|---|---|
| dimsumdaily (9/3~4) | "shares jumped **about 10 percent**" — 휴메인 발표를 원인으로 지목 |
| Investing.com (9/4) | "MiniMax stock rallied **5.1%** to reach HK$373" — 같은 휴메인 건을 원인으로 지목 |

두 수치가 엇갈립니다(장중 고점 vs 종가, 또는 9/3 vs 9/4 차이로 추정되나 확정 불가). 게다가 Bloomberg가 9월 2일 "본토 투자자가 가장 선호하는 홍콩 상장주"로 다룰 만큼 **발표 직전부터 이미 랠리 중**이었기 때문에, 상승분 전체를 발표에 귀속하는 서술은 단일 출처에 의존합니다.

**교체 문장:**
> 어쨌든 시장은 반응했는데요. 올해 1월 홍콩증권거래소에 상장한 미니맥스의 주가는 발표 직후 5~10% 뛰었습니다.

더 안전하게 가려면:
> 어쨌든 시장은 반응했는데요. 올해 1월 홍콩증권거래소에 상장한 미니맥스의 주가는 발표 직후 큰 폭으로 올랐습니다.

### 7-b. [경미] "상하이의 AI 연구소 미니맥스" → "AI 기업"이 정확

미니맥스는 2021년 설립돼 2026년 1월 9일 홍콩거래소에 상장(종목코드 0100, 공모가 HK$165 → 첫날 종가 HK$345, +109%)한 **상장사**입니다. 200개국 2억 1,200만 사용자, 2026년 상반기 매출 약 1억 1,700만 달러. 영문 매체가 "Shanghai lab"으로 부르기도 하지만, 상장·주가 이야기가 바로 이어지는 문맥에서 "연구소"는 어색합니다. 상하이 소재는 ✓.

**교체 문장:**
> 상하이의 AI 기업 미니맥스(MiniMax)가 지난 6월 공개한 오픈웨이트 모델 MiniMax-M3의 계보를 그대로 이어받았습니다.

---

### 8. [확인됨] MiniMax-M3 공개 시점 = 2026년 6월

2026-06-01 발표, Hugging Face 공식 저장소에 가중치 2026-06-07 업로드. 428B MoE, 컨텍스트 100만 토큰, 네이티브 멀티모달, SWE-Bench Pro 59.0%. 초고 "지난 6월" ✓, "오픈웨이트"(오픈소스 아님) 표기도 정확 ✓.

---

### 9. [확인됨] 타레크 아민 직함·발언

- 직함: **CEO of HUMAIN** ✓ (초고 "휴메인의 CEO인 타레크 아민" 정확, 철자 Tareq Amin ✓)
- 발언 원문: "Arabic is spoken by hundreds of millions of people, yet it remains significantly underrepresented at the frontier of artificial intelligence."
- 초고: "아랍어가 수억 명이 쓰는 언어인데도 인공지능의 프런티어에서는 여전히 현저하게 과소대표되어 있다고 말했습니다." → **직접 인용부호 없이 간접화**했고 의미가 정확합니다. 수정 불필요.

---

### 10-a. [중요] "Nvidia는 …GB300 1만 8,000개를 공급하기 시작했습니다" — 시제 오류 + 본문 내 자기모순

2025년 5월 13일(미·사우디 투자포럼, 리야드)에 있었던 것은 **파트너십·구매 발표**이지 인도 개시가 아닙니다. 실제 대(對)걸프 반도체 **수출 허가는 2025년 11월 19일**에야 나왔습니다 — 초고가 바로 다음 문장에서 스스로 적고 있는 사실입니다. 지금 문장대로면 "5월에 공급을 시작했는데 11월에 수출이 승인됐다"는 모순이 됩니다.

엔비디아 보도자료 원문: "The first phase of deployment will be **an 18,000 NVIDIA GB300 Grace Blackwell AI supercomputer** with NVIDIA InfiniBand networking" / "up to 500 megawatts powered by **several hundred thousand** of NVIDIA's most advanced GPUs **over the next five years**."
→ 초고의 "슈퍼컴퓨터 한 대분", "5년간 수십만 개"는 원문에 정확히 부합합니다 ✓. 고칠 곳은 동사 하나입니다.

**교체 문장:**
> 2025년 5월 트럼프 대통령의 걸프 순방을 계기로 사우디는 6,000억 달러 규모의 대미 투자를 약속했고, Nvidia는 휴메인에 GB300 1만 8,000개를 공급하기로 했습니다.

### 10-b. [확인됨] 나머지 수치

- 사우디의 **6,000억 달러** 대미 투자 약속(2025년 5월 트럼프 순방) ✓ — 2025년 11월 왕세자 방미 때 1조 달러로 상향됐지만, 초고는 5월 시점을 말하므로 6,000억이 맞습니다.
- **AMD: 100억 달러 규모, 5년간 500MW** ✓ (2025-05-13 동시 발표. 엔비디아 건의 500MW와는 별건이며 초고는 AMD에만 귀속해 정확).

---

### 11. [확인됨] 2025년 11월 걸프권 AI 칩 수출 승인

- 무함마드 빈 살만 왕세자 워싱턴 방문(2025-11-18) 직후, **미 상무부가 2025-11-19 사우디 HUMAIN·UAE G42에 대한 첨단 반도체 수출을 승인**(블랙웰 GB300 최대 3만 5,000개, 엄격한 보안·보고 조건 부과). CNBC(11-20), 상무부 성명, MEI 정책메모 교차 확인 ✓.
- 초고 "2025년 11월 사우디 왕세자의 워싱턴 방문 뒤에 미국은 걸프권에 대한 AI 칩 수출을 승인했고요" — 정확.

---

### 12. 한국 파트 (독파모) — **전 항목 확인됨**

가장 신중하게 봤고, **결과적으로 고칠 사실 오류는 없습니다.**

| 초고 주장 | 판정 | 근거 |
|---|---|---|
| 주관: 과기정통부 + 정보통신산업진흥원, 사업명 '독자 AI 파운데이션 모델'(독파모) | ✓ | 과기정통부 발표, ZDNet |
| 하이퍼클로바X 시드 32B 싱크 **비전 인코더** vs Qwen 2.5 비전 인코더 **코사인 유사도 99.51%**, **피어슨 상관계수 98.98% 이상** | ✓ | 아이티데일리(2026-01-06), 뉴스1, 다음뉴스 등 한국 언론 3곳 이상 |
| 네이버클라우드 입장 인용 | ✓ | 원문: "글로벌 기술 생태계와의 호환성과 전체 시스템의 효율적 최적화를 고려해 검증된 외부 인코더를 전략적으로 채택했다", "해당 모델은 프롬 스크래치 단계부터 100% 자체 기술로 개발해왔다" — 초고 요약과 일치 |
| **2026-01-15 1차 단계평가**에서 네이버클라우드가 벤치마크·전문가·사용자 합산 **상위 4개 팀**에 들었으나 **'독자성' 요건 미충족으로 탈락** | ✓ | ZDNet(2026-01-15) 명시. 정부 설명: "해외 AI 모델을 단순 파인튜닝한 파생 모델은 독자 AI 파운데이션 모델로 인정하지 않았다", "전문가 의견에서 네이버클라우드 모델의 독자성 부족 우려가 제기됐다" |
| LG AI연구원·SK텔레콤·업스테이지 2차 진출 | ✓ | ZDNet, 플래텀, 경향신문, 바이라인 |
| **2026-08-18 2차 단계평가**에서 모티프테크놀로지스 탈락, 세 팀 잔류 | ✓ | ZDNet(2026-08-18), 바이라인, 디일렉 |
| 배점 벤치마크 40 / 전문가 35 / 사용자 25 | ✓ | 2차 단계평가 기준으로 복수 매체 확인 |
| (초고 미언급) NC AI 동반 탈락 | ✓ 사실 | 다만 NC AI는 독자성 결격이 아니라 종합점수 열위. 초고가 언급하지 않은 것은 논지상 문제 없음 |

**의뢰하신 핵심 질문 — "탈락 사유가 독자성"이라는 인과 서술이 보도로 뒷받침되는가:**
**예, 뒷받침됩니다.** 정부가 공개적으로 독자성 기준 미충족을 탈락 사유로 밝혔습니다. 게다가 초고는 이미 **"'독자성' 요건을 충족하지 못했다는 판정을 받고 탈락했습니다"**라고 *판정*을 매개로 서술해 완화 표현이 필요 없는 수준입니다. **추가 완화 불필요 — 현행 유지 권고.**

또한 초고가 유사도 분석을 **"…분석이 나온 뒤였습니다"**라는 시간 순서로만 붙이고 인과로 단정하지 않은 것도 정확한 처리입니다.

#### 12-보완. [경미] 3건 — 사실 오류는 아니나 독자 오해 소지

**(1) "상위 4개 팀"의 모수를 밝히면 정직해집니다.** 1차 평가 참여 정예팀은 네이버클라우드·NC AI·LG AI연구원·SK텔레콤·업스테이지 **5곳**이었습니다. 즉 "5개 팀 중 4위 안"이며, 모수 없이 쓰면 실제보다 높은 순위처럼 읽힐 수 있습니다.
> 권고: `…상위 4개 팀에 들었지만` → `…참여한 5개 팀 가운데 상위 4개 팀에 들었지만`

**(2) 모티프테크놀로지스가 어디서 왔는지 독자가 알 수 없습니다.** 앞 문장에서 2차 진출팀을 LG·SKT·업스테이지 셋으로 적어 놓고 곧바로 "모티프테크놀로지스가 떨어지고"가 나옵니다. 모티프는 네이버·NC 탈락 뒤 **추가 공모로 2026-02-20 선정**된 팀입니다(ZDNet·전자신문·바이라인 확인).
> 권고: `8월 18일 2차 단계평가에서는 모티프테크놀로지스가 떨어지고 세 팀이 남았습니다.` → `8월 18일 2차 단계평가에서는 추가 공모로 합류한 모티프테크놀로지스가 떨어지고 세 팀이 남았습니다.`

**(3) 배점 문장의 소속을 명시하는 편이 안전합니다.** 벤치마크 40 / 전문가 35 / 사용자 25는 **2차 단계평가** 기준으로 확인된 수치입니다. 현재 위치상 1차에도 같은 배점이 적용된 것처럼 읽힐 수 있는데, 1차의 배점은 공개 확인되지 않았습니다.
> 권고: `배점은 벤치마크 40점…` → `2차 평가 배점은 벤치마크 40점, 전문가 35점, 사용자 25점이었습니다.`

**(4) 참고(수정 불요):** 유사도 지적은 비전 인코더뿐 아니라 **오디오 인코더(피어슨 100%, 사실상 그대로 사용)**에도 있었고, 두 인코더는 32B 모델 전체 파라미터의 약 12%(12.8억)입니다. 초고는 비전 인코더만 다루므로 "부품 하나"라는 표현이 내부적으로 일관되며, 오류는 아닙니다.

---

## C. 수정 권고 (우선순위 순)

| 순위 | 등급 | 위치 | 현재 | 교체 |
|---|---|---|---|---|
| 1 | **[중요]** | 32줄 | `Nvidia는 휴메인에 GB300 1만 8,000개를 공급하기 시작했습니다.` | `Nvidia는 휴메인에 GB300 1만 8,000개를 공급하기로 했습니다.` |
| 2 | **[중요]** | 28줄 | `연매출 2,000만 달러를 넘는 사업자라면 미니맥스의 사전 서면 승인도 받아야 하고요.` | `그 모델로 만든 제품·서비스의 연매출이 2,000만 달러를 넘으면 미니맥스의 사전 서면 승인도 받아야 하고요.` |
| 3 | **[중요]** | 28줄 | `미니맥스의 주가는 발표 당일 10% 가까이 올랐습니다.` | `미니맥스의 주가는 발표 직후 5~10% 뛰었습니다.` |
| 4 | [경미] | 26줄 | `상하이의 AI 연구소 미니맥스(MiniMax)` | `상하이의 AI 기업 미니맥스(MiniMax)` |
| 5 | [경미] | 26줄 | `…Developed by MiniMax"입니다.` | `…Developed by MiniMax…"입니다.` (말줄임 추가) |
| 6 | [경미] | 44줄 | `상위 4개 팀에 들었지만` | `참여한 5개 팀 가운데 상위 4개 팀에 들었지만` |
| 7 | [경미] | 44줄 | `모티프테크놀로지스가 떨어지고` | `추가 공모로 합류한 모티프테크놀로지스가 떨어지고` |
| 8 | [경미] | 44줄 | `배점은 벤치마크 40점` | `2차 평가 배점은 벤치마크 40점` |

**수정 불필요 확인 항목:** LEAP 컨퍼런스 표기(1번 의뢰 사항), 428B MoE·1조 토큰, 7종 벤치마크 귀속, 리서치 프리뷰/다음 달 예정, 타레크 아민 직함·발언, 6,000억 달러·슈퍼컴퓨터 한 대분·5년 수십만 개·AMD 100억 달러 500MW, 2025년 11월 수출 승인, 한국 파트 사실관계 전체(특히 '독자성' 탈락 인과).

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행 가능** — [중요] 3건([치명적] 0건) + [경미] 5건
- [ ] 발행 보류

시점 규율 위반 없음, 사실 오류로 논지가 무너지는 대목 없음. 위 8건 중 1~3번만 반영해도 발행 가능하며, 4~8번은 정확도를 위한 권고입니다.

---

## E. 검증에 사용한 출처

- PR Newswire 보도자료 원문 — https://www.prnewswire.com/news-releases/humain-unveils-humain-m3-a-frontier-arabic-language-model-developed-by-minimax-in-research-preview-on-humain-node-302869158.html
- Unite.AI — https://www.unite.ai/pif-backed-humain-launches-humain-m3-arabic-model-at-leap-riyadh/
- Al-Monitor — https://www.al-monitor.com/originals/2026/09/saudi-arabia-taps-chinas-minimax-arabic-ai-model
- dimsumdaily — https://www.dimsumdaily.hk/minimax-shares-jump-as-saudi-humain-launches-arabic-ai/
- Investing.com (주가 5.1%) — https://au.investing.com/news/stock-market-news/why-is-minimax-stock-rallying-today-93CH-4629433
- TechTimes (벤치마크 미검증) — https://www.techtimes.com/articles/326703/20260904/humain-launches-humain-m3-saudi-arabias-arabic-ai-runs-chinese-weights-scores-unverified.htm
- LEAP Tech Event (회차별 일자) — https://en.wikipedia.org/wiki/LEAP_Tech_Event
- MiniMax Community License 원문 — https://huggingface.co/MiniMaxAI/MiniMax-M3/raw/main/LICENSE
- NVIDIA 뉴스룸 (2025-05-13) — https://nvidianews.nvidia.com/news/humain-and-nvidia-announce-strategic-partnership-to-build-ai-factories-of-the-future-in-saudi-arabia
- CNBC (2025-11-20 수출 승인) — https://www.cnbc.com/2025/11/20/us-approves-ai-chip-exports-to-gulf-after-saudi-crown-prince-visit.html
- TechNode / CNBC (미니맥스 홍콩 상장) — https://technode.com/2026/01/09/minimax-lists-in-hong-kong-as-largest-ipo-among-ai-foundation-model-companies/
- 아이티데일리 (네이버 입장) — http://www.itdaily.kr/news/articleView.html?idxno=237261
- ZDNet Korea (1차 단계평가) — https://zdnet.co.kr/view/?no=20260115150326
- ZDNet Korea (2차 단계평가) — https://zdnet.co.kr/view/?no=20260818110107
- ZDNet Korea (모티프 추가 선정) — https://zdnet.co.kr/view/?no=20260220160826
- 플래텀 / 경향신문 / 바이라인네트워크 (1차 평가 교차) — https://platum.kr/archives/279684
