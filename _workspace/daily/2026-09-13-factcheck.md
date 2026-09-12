# Fact Check Report: anthropic-threat-report-observable-misuse (2026-09-13)

- **검증 대상:** `_posts/2026-09-13-anthropic-threat-report-observable-misuse.md`
- **팩트 카드:** `_workspace/daily/2026-09-13-brief.md`
- **검증 일시:** 2026-09-12 (KST)
- **1차 출처 접근:** `anthropic.com/threat-intelligence-report-september-2026` **직접 조회 성공** (본문이 길어 재래식 무기 섹션은 렌더 누락 → TWZ·보스턴글로브·알자지라·게시 후 보도로 교차)

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-09-13 09:00 +0900 (KST)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 앤트로픽 「Detecting and countering misuse of AI: September 2026」 공개 | 2026-09-10 (현지, 목요일) | 이전 ✓ | 유지 |
| 보고서 대상 기간 | 2025-12 ~ 2026-08 | 이전 ✓ | 유지 |
| GTG-87001 관련 주요 보도(TWZ·WaPo·알자지라·보스턴글로브 등) | 2026-09-11 | 이전 ✓ | 유지 |
| SKT A.X K2 공개 | 2026-07-29 | 이전 ✓ | 유지 |
| LG AI연구원 K-EXAONE 2.0 공개 | 2026-07-31 | 이전 ✓ | 유지 |
| 앤트로픽 vs 미 국방부 AUP 판결(본문 "예전에 다룬 적이 있는데요") | 2026-08-27 판결 / 자사 08-30 포스트 | 이전 ✓ | 유지 |

- **2026-09-10이 목요일인지 확인:** ✅ 맞음(보스턴글로브 "released Thursday" + 9/11자 보도와 정합).
- **발행일 이후 사건·수치·발언:** ❌ 없음. 본문 최신 참조는 09-11 보도 범위 안.
- **사후 시점 표현 검사:** "훗날", "결국 드러났듯", "돌이켜보면" 류 ❌ 없음. 미래 추정은 모두 가정법("~했다면 어땠을까요")으로 처리돼 시점 규율 위반 아님.
- **용어 시점성:** GTG(앤트로픽 위협 그룹 식별자), Claude Code, 오픈웨이트, 온프렘 — 모두 발행일에 통용 ✅.
- **※ 참고(리포트 범위 밖):** `_style/ai-timeline.md`에 **2026-09-10 앤트로픽 위협 인텔리전스 보고서 항목이 아직 없다.** 발행 전 타임라인 추가 권고(팩트 오류는 아님).

---

## B. 사실 검증

### B-1. 앤트로픽 보고서 (요청 항목 1)

| # | 주장(본문) | 상태 | 근거 |
|---|---|---|---|
| 1 | 제목 「Detecting and countering misuse of AI: September 2026」 | ✅ 확인 | anthropic.com/threat-intelligence 목록에 **정확히 이 제목**으로 등재(Sep 10, 2026). 검색엔진에 노출되는 `<title>`이 "Countering misuse of AI: September 2026"로 짧게 잡히지만, 보고서 정식 제목은 본문 표기 쪽이 맞음 |
| 2 | "현지 시각 9월 10일" 공개 | ✅ 확인 | 1차 페이지 게시일 Sep 10, 2026 / 보스턴글로브 "released Thursday"(=9/10) / 데일리콜러 9/10자 기사 |
| 3 | 대상 기간 2025년 12월~2026년 8월 | ✅ 확인 | 1차 원문 "The report covers activity between December 2025 and August 2026" |
| 4 | "여덟 달 동안" (excerpt·본문 2회 포함 총 3회) | ✅ 확인 | **앤트로픽 원문 표현을 그대로 따른 것** — "**Over the past eight months**, our Threat Intelligence team identified and disrupted operations…". 12월~8월을 포괄 계산하면 9개월이라 일부 2차 매체는 "nine-month window"로 씀. 1차 표현 우선 원칙상 **수정 불필요** |
| 5 | "회사는 … 가장 상세한 판이라고 소개했습니다" | ✅ 확인 | 앤트로픽 공식 X: "We're publishing our **most detailed threat intelligence report to date**." ⚠ 단, 이 문장은 **보고서 본문이 아니라 공식 발표 게시물**에 있음. 본문이 "회사는 … 소개했습니다"로 (보고서가 아니라) 회사를 주어로 쓴 덕에 귀속 오류 없음 |
| 6 | 7개 영역: 사이버 작전·영향력 공작·감시·사기·생물학적 오용·재래식 무기·불법 증류 | ✅ 확인 | 1차 원문 7개 목록(cyber operations, surveillance operations, influence operations, conventional weapons, biological misuse, scams and fraud, illicit distillation)과 **집합 완전 일치**(나열 순서만 다름 — 무해) |
| 7 | "여기 실린 작전은 전부 차단했다고 적혀 있습니다" | ✅ 확인 | 1차 원문 "**In each case, we disrupted the activity**, used what we learned to strengthen our safeguards, and shared intelligence with authorities and industry partners, where appropriate." + 공식 X "We disrupted every operation in the report" |

### B-2. GTG-87001 (요청 항목 2)

| # | 주장(본문) | 상태 | 근거 |
|---|---|---|---|
| 8 | 사건 번호 `GTG-87001` 표기 | ✅ 확인 | TWZ·SOCRadar·Military.com 등 다수에서 동일 표기 |
| 9 | 예멘 북부 근거, 소규모 유도무기 엔지니어링 셀 | ✅ 확인 | TWZ "northern Yemen", "small cell" |
| 10 | Claude·Claude Code를 GNC(유도·항법·제어) 소프트웨어 작성에 사용 | ✅ 확인 | TWZ: Claude Code를 "as a substitute for human software engineers"로 써 GNC 소프트웨어 개발 |
| 11 | ① 상용 휴대폰급 비행 컴퓨터 + 종말 단계 호밍 유도 로켓 | ✅ 확인 | "guided rocket using commodity phone-class flight computer with terminal homing" |
| 12 | ② 목표 사거리 2,000km 초과 다단 탄도미사일 | ✅ 확인 | "multi-stage ballistic missile with **stated range goal exceeding 2,000 km**". 본문이 "목표 사거리를 … 잡은"으로 **달성이 아닌 목표**임을 명시 — 정확 |
| 13 | ③ 극초음속 활공체 변형 포함 R2000 다변형 세트 | ✅ 확인 | "R2000 multi-variant missile set including hypersonic glide vehicle variant". 앤트로픽이 "R2000"이라 부른 명칭 ✅ |
| 14 | Claude 작업 목록(오픈소스 오토파일럿 이식 / 제어·위치 추정 소프트웨어 작성 / 제어 파라미터 튜닝 / 펌웨어 빌드 파이프라인 / 비행 시뮬레이션) | ✅ 확인 | TWZ 및 다수 보도에 5개 항목 모두 동일하게 열거. **누락·추가 없음** |
| 15 | 인스턴스 여러 개 동시 운용 — 코딩 / 리서치 / 코드 리뷰 3역 분담 | ✅ 확인 | TWZ: "one for writing code, another for research, and a third for code review—mimicking a small engineering team" |
| 16 | 유도 로켓 실제 시험 발사 1회, 실패한 것으로 보임 | ✅ 확인 | TWZ: 로켓 1발 야외 시험이 "**appears to have failed**". 본문 "실패한 것으로 보입니다"로 완충 표현 유지 — 정확 |
| 17 | "몇 시간 안에 Claude로 돌아와 무엇이 잘못됐는지를 물었습니다" | ✅ 확인 | TWZ: "returned to Claude **within hours** to diagnose the failure" |
| 18 | 계정 차단 + 정부·민간 파트너에 공유 | ✅ 확인 | 1차 원문의 대응 문장 + 보스턴글로브 "blocked the accounts", "shared its findings with private and public partners" |

### B-3. 인용 2건 (요청 항목 3 — 최우선)

| # | 인용 | 상태 | 근거 |
|---|---|---|---|
| 19 | "많은 요청을 막았지만 전부를 막지는 못했다" | ✅ 확인 | 보고서 원문 "**Our safeguards blocked many of their requests, but not all of them.**" (TWZ 직접 인용). **번역 정확** — 원문은 (a)다수 차단 (b)전부는 아님 두 사실을 나란히 두는데, 한국어 번역도 동일 구조·동일 강도. 과장·축소 없음. 본문이 인용의 주체를 "보고서도 안전장치가 …고 적었습니다"로 보고서에 귀속한 것도 맞음 ✅ |
| 20 | "정교한 공격에 더 이상 정교한 공격자가 필요하지 않다" | ✅ 확인 | 보고서 원문 "**Sophisticated attacks no longer require sophisticated attackers.**" 번역 정확 |
| 21 | **위 문장의 섹션 귀속** — 본문 "보고서가 **사이버 작전 쪽에** 적어 둔 한 문장" | ✅ 확인 (귀속 정확) | 1차 페이지 실측: 이 문장은 **Cyber operations 섹션의 Trends 하위**, 자원이 풍부한 조직과 개인 운영자 사이의 노동 격차 붕괴를 논하는 도입부에 있음. **초고의 귀속이 맞다.** 요청에서 우려한 오귀속은 발생하지 않았음 |

> ⚠ 다만 한 가지만 짚어 둡니다(오류 아님, 논지 정합성 참고). 이 문장은 **사이버 작전** 맥락에서 쓰인 것인데 본문에서는 **재래식 무기(예멘 셀)** 단락의 요약으로 끌어옵니다. 본문이 "보고서가 사이버 작전 쪽에 적어 둔"이라고 출처 섹션을 밝히고 인용하므로 팩트체크상 문제는 없습니다. 저자 의도라면 그대로 두어도 됩니다.

### B-4. 균형 서술 (요청 항목 4)

| # | 주장 | 상태 | 근거 |
|---|---|---|---|
| 22 | "앤트로픽은 … 실제로 작동하는 장비를 배치했다는 증거는 없다고 명시했습니다" | ✅ 확인 | 보고서 원문 "**We do not have evidence the actors succeeded in fielding an operational device.**" 보스턴글로브·알자지라도 동일 취지로 보도. "명시했습니다"라는 강한 서술이 정당 |
| 23 | "확인된 실물 시험은 실패로 보이는 유도 로켓 한 건이 전부입니다" | ✅ 확인 | 보고서에서 확인된 유일한 물리 시험은 실패로 보이는 유도 로켓 시험 1건(TWZ·SOCRadar·IBTimes 교차). 앤트로픽도 "unsuccessful test-fire"로 표현(알자지라) |
| 24 | "AI로 극초음속 미사일을 완성했다는 식의 요약은 정확하지 않습니다" | ✅ 확인 | 위 22·23의 직접 귀결. 오히려 일부 매체 헤드라인("build hypersonic missiles")이 과장인 쪽이며, 본문이 이를 바로잡는 방향 |

### B-5. 후티 귀속 (요청 항목 5 — 치명적 위험 구간)

| # | 주장 | 상태 | 근거 |
|---|---|---|---|
| 25 | "보고서 자체는 소속을 특정하지 않았습니다" | ✅ 확인 | **3개 출처 교차.** (1) 보스턴글로브: "In a report released Thursday, **the company did not identify the users**." (2) TWZ: "The report does not explicitly name the Houthis" — 후티 연결은 기사 필자가 지리·능력으로 추론한 것. (3) 알자지라: 기사 전체가 "the operators", "the group"으로만 지칭하고 후티 명칭을 쓰지 않음. → **초고의 서술이 맞다.** |
| 26 | "여러 보도는 이란의 지원을 받는 후티 세력일 가능성이 매우 높다고 보는데요" | ✅ 확인 | Tom's Hardware/Yahoo("Iran and Houthi rebels…"), The National, The Indian Panorama("Anthropic report points to Iran-backed Houthis"), RedState, Organiser 등 다수가 후티로 단정 또는 유력 추정. 보스턴글로브도 "mountainous northern Yemen is controlled by Houthis, suggesting that the rebels are pursuing more sophisticated weapons"로 추론 제시 |
| 27 | 위 두 문장의 **이중 서술 구조** | ✅ 확인 (권장 서술) | "보도는 유력 추정 / 보고서는 미특정"의 이중 표기가 **사실관계를 정확히 반영**한다. 이 문단이 이번 초고에서 팩트체크상 가장 위험했던 지점인데, 처리가 올바르다. **수정 불필요** |

### B-6. 한국 모델명 (요청 항목 6)

| # | 주장 | 상태 | 근거 |
|---|---|---|---|
| 28 | `SKT의 A.X K2` | ✅ 확인 | SK텔레콤, 2026-07-29 허깅페이스 공개. 688B(직전 A.X K1 519B), Apache 2.0 오픈웨이트. 독자 AI 파운데이션 모델 2차수. 표기 `A.X K2`(점 포함) 정확 — `AX K2`는 오표기 |
| 29 | `LG의 K-EXAONE 2.0` | ✅ 확인 | LG AI연구원, 2026-07-31 허깅페이스 공개(`LGAI-EXAONE/K-EXAONE-2.0-750B-A37B`). 750B MoE, Apache 2.0. 표기 `K-EXAONE 2.0` 정확 — `EXAONE 2.0`은 오표기 |
| 30 | 두 모델이 2026-09-13 시점에 이미 공개됐는지 | ✅ 확인 | 각 7월 말 공개 → 발행일 기준 약 6주 전. 시점 문제 없음 |
| 31 | "국내에서 나온 오픈웨이트 모델" | ✅ 확인 | 둘 다 Apache 2.0 가중치 공개 → '오픈웨이트' 규정 정확 |
| 32 | 소속 기업 표기 "LG의" | ⚠ 경미 | 엄밀히는 **LG AI연구원**(LG AI Research)이 공개 주체. "LG의"는 통상 허용 범위이며 문맥상 오해 소지 낮음. 정밀도를 높이려면 "LG AI연구원의 K-EXAONE 2.0". **필수 수정 아님** |

### B-7. 기타 고유명사·자기 인용·커버

| # | 주장 | 상태 | 근거 |
|---|---|---|---|
| 33 | "유도·항법·제어(GNC)" 병기 | ✅ 확인 | Guidance, Navigation and Control ✅. 낯선 약어 1회 병기 — 스타일 가이드 병기 규칙 부합 |
| 34 | "앤트로픽에는 위협 인텔리전스 팀이 있어서" | ✅ 확인 | 1차 원문 "our Threat Intelligence team" |
| 35 | "무기 관련 이용정책을 두고 앤트로픽과 미국 국방부가 부딪힌 일 … 그때 문제가 된 것은 정책 문장이었고" | ✅ 확인 | 자사 2026-08-30 포스트(`anthropic-pentagon-aup-first-amendment`)와 정합. 해당 분쟁의 발단이 앤트로픽 **이용정책(AUP) 두 줄**이었고 2026-08-27 캘리포니아 북부연방지방법원 판결로 이어짐 → "정책 문장" 요약 정확. 날짜·'이 블로그' 없이 가볍게 참조 — 스타일 가이드 부합 |
| 36 | 하단 커버 크레딧 "앤트로픽 CEO 다리오 아모데이(TechCrunch Disrupt 2023) — Wikimedia Commons, TechCrunch" | ✅ 확인 | 파일 실재(`public/images/covers/anthropic-threat-report-observable-misuse.jpg`) 확인, 이미지 내용도 TechCrunch Disrupt 배경의 다리오 아모데이 대담 사진으로 캡션과 일치. `_workspace/image-credits-2026.md` 79행(Commons "Dario Amodei at TechCrunch Disrupt 2023 06.jpg", TechCrunch, CC BY 2.0)과 일치. 직함 CEO 정확 |
| 37 | 프런트매터 `coverImage: ""` | ✅ 확인 (사양대로) | 슬러그명 커버 파일이 존재하므로 빌드 스크립트가 파일명 매칭으로 렌더 — 7/11~8/10 백필 때 확정된 관례와 동일. 하단 크레딧 줄도 실사 커버가 있으므로 2026-09-04 규칙에 부합 |

### B-8. 검증 대상 아님으로 분류한 문장 (저자의 해석·평론)

아래는 사실 진술이 아니라 저자의 논지이므로 검증하지 않았습니다. 다만 **사실 오류를 전제로 하고 있지 않은지**만 확인했고, 모두 위 B-1~B-7의 확인된 사실 위에 서 있습니다.

- "이 셀이 적발된 이유는 미사일이 아니라 경로였습니다" / "Claude Code가 요청마다 본사 서버로 신호를 보냈기 때문" — API 경유 사용이라는 사실 전제는 정확(7개 영역 39건 모두 Claude API/제품 경유, Haiku·Sonnet·Opus에서 관측).
- "같은 프로그램을 로컬 오픈웨이트 모델로 돌렸다면 보고서도, 차단도, GTG 번호도 없다" — 반사실 가정. 검증 대상 아님.
- "이 사례집은 프런티어 모델 API를 쓰지 말아야 할 이유의 목록으로도 읽힙니다" / 온프렘 관측 책임 논지 — 의견.
- "서술하는 주체와 서술되는 대상이 같은 회사" — 자기 공개 보고서라는 사실 전제 정확.

---

## C. 수정 권고 (우선순위 순)

**치명적(❌): 없음.**

1. **[경미·선택] 38줄** — "LG의 K-EXAONE 2.0" → "LG AI연구원의 K-EXAONE 2.0". 공개 주체 정밀화. 문체상 길어지는 것이 싫으면 현행 유지 가능.
2. **[경미·선택] 14줄** — "회사는 지금까지 낸 위협 인텔리전스 보고서 가운데 가장 상세한 판이라고 소개했습니다". 이 표현의 출처는 보고서 본문이 아니라 **앤트로픽 공식 발표 게시물**. 현행 문장은 주어가 "회사"여서 귀속 오류가 없으므로 **수정 불필요**. 혹시 후속 개고에서 "보고서는 … 라고 적었습니다"로 바꾸면 그때는 오류가 됨 — 주의만.
3. **[경미·선택] 34줄** — 인용문의 원 섹션(사이버 작전)과 인용 위치(재래식 무기 단락)가 다름. 본문이 "보고서가 사이버 작전 쪽에 적어 둔"이라고 이미 밝혀 두었으므로 그대로 두어도 정확. 유지 권고.
4. **[발행 전 체크리스트] `_style/ai-timeline.md`** — 2026-09-10 「Detecting and countering misuse of AI: September 2026」 항목을 추가하고 발행할 것(다음 포스트의 시점 판정 기준이 됨). 팩트 오류는 아니나 하네스 규칙상 누락.
5. **[정보] 슬러그** — 팩트 카드는 `anthropic-threat-report-gtg87001-observable-misuse`, 실제 파일·커버는 `anthropic-threat-report-observable-misuse`. **커버 파일명·크레딧 표와 실제 파일명이 서로 일치**하므로 빌드에 문제 없음. 팩트 카드 쪽 표기만 구버전.

---

## D. 종합 판정

- **검증 항목 37건: ✅ 확인 36건 / ⚠ 경미 1건(B-32, LG 표기 정밀도) / ❌ 오류 0건 / ? 검증 불가 0건**
- 요청된 7개 중점 항목 **전부 통과**. 특히 위험도가 높았던 두 곳 — (3) 인용문 2건의 원문 대조 및 "사이버 작전" 섹션 귀속, (5) 후티 이중 서술 — 은 **초고 쪽이 정확**했습니다. 오귀속·과장 없음.
- 시점 규율 위반 없음. 발행일 이후 사건·수치·발언 없음. 사후 시점 표현 없음.

### ☑ 발행 가능

경미 권고 1~3은 모두 선택 사항이며 사실 오류가 아니므로, 초고 그대로 발행해도 팩트체크상 문제가 없습니다. 4번(타임라인 항목 추가)만 발행 전후로 처리해 주십시오.

---

## 출처

**1차**
- https://www.anthropic.com/threat-intelligence-report-september-2026 (보고서 원문, 기간·7개 영역·"In each case, we disrupted"·"Over the past eight months"·"Sophisticated attacks…" 섹션 위치)
- https://www.anthropic.com/threat-intelligence (제목·발행일 목록)
- https://x.com/AnthropicAI/status/2098097512544444447 ("our most detailed threat intelligence report to date")

**교차**
- https://www.twz.com/news-features/adversaries-using-claude-ai-to-target-americans-and-develop-missiles-is-a-sign-of-whats-to-come (GTG-87001 전 항목, safeguards 원문, 후티 미특정)
- https://www.bostonglobe.com/2026/09/11/business/ai-anthropic-yemen-houthi/ ("the company did not identify the users", fielding 관련)
- https://www.aljazeera.com/news/2026/9/11/anthropic-claims-claude-ai-used-for-missile-projects-global-espionage (소속 미특정, 시험 발사 실패)
- https://www.washingtonpost.com/technology/2026/09/11/rebels-used-anthropics-ai-bot-develop-guided-weapons-report-says/ (헤드라인 단계 "rebels" 표기)
- https://www.military.com/users-in-houthi-held-yemen-tried-to-develop-advanced-weapons-with-ai-anthropic-says / https://www.thenationalnews.com/news/mena/2026/09/11/how-yemeni-rebels-used-anthropics-ai-software-to-design-and-build-guided-weapons/ / https://www.theindianpanorama.news/anthropic-report-points-to-iran-backed-houthis-using-claude-to-develop-missiles/ (후티·이란 지원 추정 보도군)
- https://aigovernance.com/news/anthropic-documents-nine-months-of-ai-misuse-across-agentic-attack-chains (기간을 "nine months"로 표기한 2차 사례 — 1차 "eight months" 우선)
- https://www.aitimes.com/news/articleView.html?idxno=213289 / https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B / https://github.com/LG-AI-EXAONE/K-EXAONE-2.0 / https://www.koreajoongangdaily.com/business/lg-unveils-kexaone-20-koreas-largest-opensource-ai-model/12802076 (A.X K2·K-EXAONE 2.0 표기·공개일)

**내부**
- `_style/ai-timeline.md` 178·179행 (A.X K2 2026-07-29 / K-EXAONE 2.0 2026-07-31)
- `_posts/2026-08-30-anthropic-pentagon-aup-first-amendment.md` (자기 인용 정합성)
- `_workspace/image-credits-2026.md` 79행 (커버 크레딧)
