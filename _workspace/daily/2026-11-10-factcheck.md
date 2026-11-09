# Fact Check Report: uk-public-bodies-ai-generated-complaints

- **대상 초고:** `_posts/2026-11-10-uk-public-bodies-ai-generated-complaints.md`
- **팩트 카드:** `_workspace/daily/2026-11-10-brief.md`
- **검증일:** 2026-11-09 (발행 예정 2026-11-10 09:00 KST)
- **1차 출처 확보 상황:** arXiv 2608.16603 **PDF 전문 확보·직접 판독 완료**(본문 8쪽까지 육안 확인). 가디언 원문은 `www.theguardian.com` 직접 fetch 차단(툴 레벨) + 검색엔진 미색인 → **byteseu.com 전재본**으로 본문 확인.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-10 (KST)

| 인용된 사건 | 초고 표현 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|---|
| 가디언 「'AI clog': UK public bodies battle onslaught of chatbot-generated complaints」 | "가디언이 11월 8일" | 2026-11-08 (전재본 표기) | 이전 ✓ | 유지 (단일 출처 주의, B-1) |
| arXiv 2608.16603 논문 | "지난 8월에 나온 논문" | v1 2026-08-17 / v2 2026-08-19 | 이전 ✓ | 유지 |
| ChatGPT 출시(Figure 1 점선) | "점선은 ChatGPT 출시 시점" | 2022-11 | 이전 ✓ | 유지 |
| 호주 FOI 수수료 | "재도입을 **검토**하기도 했고요" | 2025, 검토 단계 | 이전 ✓ | 유지 — **검토/시행 구분 정확** |
| 옴부즈맨 글자 수 제한 | "이미 ... 쓰고 있어요" | 보도 시점 현재진행 | 이전 ✓ | 유지 |

- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" 등 **없음**. "이제야 알게 된 셈이네요"는 저자 현재 시점 소회라 시점 붕괴 아님.
- **미래 사건의 과거화:** 없음. "검토", "가능성이 높습니다", "가정입니다"로 미완료 사안을 모두 구분해 씀.
- **용어 시점성:** "에이전틱 플러딩(agentic flooding)"은 2026-08 논문이 명명 → 발행일 기준 존재 ✓. 초고가 한글+괄호 병기 후 한글 단독으로 처리(2026-08-12 병기 규칙 준수) ✓.
- **판정: 시점 규율 위반 없음.**

---

## B. 사실 검증

| # | 초고의 주장 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 가디언 보도일 **2026-11-08** | ⚠ 근거 약함(단일 전재) | byteseu.com/2506479/ 가 헤드라인 일치 + "November 8, 2026" 명기. 가디언 원문·검색 색인·타 전재본으로는 **교차 확인 실패**(가디언 도메인 fetch 차단, 검색 미색인). 다만 전재본 내 주변 사실이 독립 검증됨(#2·#5·#8·Deborah Evans 직함) | 유지 가능. 무리수를 피하려면 "최근"으로 완화하는 선택지도 있음(C-4) |
| 2 | "예전에는 두 쪽 → 지금은 대개 그 열 배, 확인된 최장 200쪽" | ✓ 확인(단, **1인 진술**) | 전재본: Deborah Evans(Lawyers in Local Government CEO, 지자체 변호사 5,600명 대표)가 "챗봇 이전 평균 약 두 쪽 대비 지금은 약 열 배", "자신이 아는 최장은 약 200쪽". Evans 직함·5,600명은 localgovernmentlawyer.co.uk로 별도 확인 | **"확인된"→화자 귀속으로 완화 권고**(C-3). 측정 통계가 아니라 단체장의 체감 진술 |
| 3 | "경력 10년 차 선임 직원", "이메일의 절반이 어떤 형태로든 AI" | ✓ 확인 | 전재본: Hollie Wickens, 노동당 의원실 **선임 케이스워커**, "her decade of experience in the role", "half the emails the office receives now involve some form of AI" | 유지. "선임 직원"→"선임 케이스워커"가 더 정확(C-5) |
| 4-a | 저자 소속 "독일과 영국의 연구자 세 명" | ⚠ 대체로 확인 | 논문 1쪽 각주: ¹Centre for Digital Governance, **Hertie School**(베를린, 독일) ²**Cooperative AI Foundation** ³**GovAI**. GovAI=옥스퍼드(영국) 확인. CAIF는 **공식 소재지 명시 자료 미확보** — 채용 공고 "Remote from UK", 2025 서머스쿨 영국 Marlow 개최, 해먼드 본인은 옥스퍼드 DPhil → 영국 거점으로 보는 것이 합리적이나 문서상 확정 불가 | 유지 가능. 완전히 안전하게 가려면 "독일과 영국 기관에 소속된 연구자 세 명"(C-6) |
| 4-b | "11개 관할권에서 84건" | ✓ 확인 | 논문 초록·§4: "84 potential cases of flooding across 11 jurisdictions", "84 cases across 11 jurisdictions and 13 service domains"(스캔 대상국은 12개국) | 유지. 논문 표현은 "**potential** cases"(C-7) |
| 4-c | "양적 60% / 질적 90%" | ✓ 확인 | 논문 §4: "We code 60% (N=50) of cases as quantitative flooding and 90% (N=76) as qualitative, with 50% (N=42) exhibiting both types." | 유지. 둘 다 50% 중복 집계라는 점 미표기(C-8) |
| 4-d | "69%는 담당자·전문가가 제출물 패턴의 이상을 알아채 포함된 사례" | ✓ 확인 | 논문 §5 한계 논의: "cases largely enter our dataset because officials or domain experts noticed an anomalous change in the pattern of submissions (69%, N=58)" + 이어지는 문장에서 "제출 형식이 짧은 필드·구조화 온라인 폼으로 제약되면 사람 제출물과 동일하게 보일 수 있고, 그 경우 관측 가능한 신호는 요청 **건수**뿐" | 유지. 초고의 후속 서술까지 논문과 일치 |
| 4-e | "독일 사회법원 서면 4,000쪽 초과" | ✓ 확인 | 논문 §4: "as in [Case B], where some letters spanned over 4000 pages." Table 2에서 Case B = Germany / Justice & Legal / **Social Court Lawsuits** | 유지 |
| 5 | ICO: "부정확한 내용이 섞인 AI 작성 청구라도 사람이 답해야 한다" | ✓ 확인 | 전재본: ICO는 AI 생성 청구가 "very long, repetitive and contain unrelated comments or misdirected demands"일 수 있다고 보며, 부정확해도 "still need to be answered by humans", AI가 썼다는 이유로 기각 불가 | 유지. **과장 아님** |
| 6 | "영국에 적용되지 않는 캐나다 판례가 근거로 달린 사례" | ⚠ 근거 약함 | 전재본의 실제 문장은 Evans의 **가정형 예시**: "It might find some great case law from Canada or somewhere." 실제 제출 사례로 보도된 바는 확인 불가 | 초고는 "~라고 해 보죠"라는 **가상 시나리오**로 써서 문제 없음. 단 **팩트 카드의 "제출된 사례" 표현은 과장**이므로 향후 단정형으로 끌어올리지 말 것 |
| 7 | "호주 정부가 AI 작성 청구가 몰리자 FOI 수수료 재도입을 검토" | ✓ 확인 | 논문 §1: "the Australian government has considered reintroducing fees for Freedom of Information (FOI) requests citing a wave of AI-generated submissions (Canales 2025)". Table 2 Case A = Australia/FOI | 유지. "검토"로 쓴 것이 정확 |
| 8 | "일부 옴부즈맨이 글자 수 제한을 두거나 첨부 분량을 제한하는 온라인 서식을 쓴다" | ✓ 확인 | 전재본(Evans): "imposing word limits for complaints", "designing online templates to restrict how much information can be attached" | 유지 |
| 9-a | "버틴 것은 설계 덕분이 아니라 마찰 덕분" | ✓ 확인 | 논문 §5.1: "each service's resilience has historically been owed to friction rather than design. With few structural limits on submission length or volume, the complexity of submitting – and the legal or professional knowledge it demanded – historically gated who submitted, and how well." | 유지 (초고 §27·§23 서술 전부 일치) |
| 9-b | 고위험 조건 2가지 | ✓ 확인 | 논문 §5.1: "First, each successful submission is individually consequential: it is financially valuable to the claimant if successful, or triggers legally mandated processing effort. Second, ... friction rather than design." | 유지 |
| 9-c | 마찰의 역진성 | ✓ 확인 | 논문 §6.1: "Friction disproportionately deters poorer, less digitally literate, and otherwise vulnerable users." + Table 3 Add Friction 단점 "Can drive procedural inequality" | 유지 |
| 9-d | "수수료·절차 강화가 가장 빨리 깔 수 있는 조치" | ✓ 확인 | 논문 §1·§6: "demand suppression is far faster to deploy", Table 3 "Fast to deploy / Few prerequisites" | 유지 |
| **9-e** | **"실제로 효과가 확인된 쪽은 서식을 바꾸는 겁니다"** | **✗ 오류 (방향 반전)** | 논문 Table 3에서 **"Proven to work"는 Add Friction(마찰) 쪽 장점**이고, §5.1은 "Where governments respond, e.g. by re-introducing FOI fees [Case A] and batch-dismissing consultation responses [Cases C, G], these responses also **appear effective**"라고 마찰 조치의 효과를 인정한다. 반대로 **Redesign the Service(서식·인터페이스 재설계)의 단점은 "High upfront investment / Often needs legislative change; can take years"**이고 효과 입증 언급은 없다. 가디언 쪽도 "일부 옴부즈맨이 그렇게 하고 있다"는 사실만 전하고 효과는 말하지 않음 | **수정 필수** (C-1) |
| 10 | 본문 이미지 캡션(Figure 1) | ✓ 확인 | 논문 Figure 1 캡션: "Annualized submission volumes (2018–2025) for 12 government services. For each, either government officials (red) or reputable secondary sources (blue) have asserted AI involvement in surges. Only some surges begin around the 2022 release of ChatGPT (dashed lines)." 레포의 `public/images/inline/...-flooding-cases.jpg`를 직접 열어 **12개 패널·적/청 선·점선 수직선 일치 확인** | 유지 (C-9는 선택 사항) |
| 11 | 커버 크레딧 "엔필드 구청사 — Wikimedia Commons, David Howard" | ✓ 확인 | Commons API: `File:Enfield Civic Centre - geograph.org.uk - 4131779.jpg`, Artist=David Howard, CC BY-SA 2.0. 엔필드 카운슬은 가디언 보도 등장 기관이라 소재 적합 | 크레딧 문구 정확. 단 **프런트매터 불일치**(C-2) |

---

## C. 수정 권고 (우선순위 순)

### [치명적] C-1 — 35줄: 논문 근거와 반대 방향의 단정

> 현재: `실제로 효과가 확인된 쪽은 서식을 바꾸는 겁니다.`

논문에서 "효과가 입증된(proven to work)" 쪽은 **마찰(수수료·접근 제한)**이고, 서식 재설계는 "초기 투자 큼·입법 필요·수년 소요"로 분류된 쪽이다. 바로 앞 문단에서 마찰을 비판하고 곧바로 "실제로 효과가 확인된 쪽"이라고 쓰면 출처를 정반대로 인용한 셈이 된다.

**제안 수정 문구(택1):**
- (A) `마찰을 덜 쓰면서 가능한 쪽은 서식을 바꾸는 겁니다.`
- (B) `그래서 이미 손을 댄 곳들이 고른 쪽은 서식을 바꾸는 겁니다.`
- (C) `대신 창구의 모양을 바꾸는 길이 있습니다.`

※ 뒤 문장("일부 옴부즈맨은 이미 ... 쓰고 있어요")은 사실이므로 그대로 두면 됩니다.

### [치명적] C-2 — 8줄 / 47줄: 커버 이미지 프런트매터와 하단 크레딧 불일치

`coverImage: ""`로 비어 있는데 본문 맨 끝에는 엔필드 구청사 커버 크레딧이 붙어 있습니다. 현재 상태로 발행하면 빌드가 hero 폴백 이미지를 쓰고, **독자에게는 보이지도 않는 사진의 출처만 남습니다.**

- 파일은 이미 존재합니다: `/home/user/namojo.github.io/public/images/covers/uk-public-bodies-ai-generated-complaints.jpg`
- 크레딧 표도 이미 기록돼 있습니다: `_workspace/image-credits-2026.md` 180~181줄

**제안 수정 문구:** `coverImage: "/images/covers/uk-public-bodies-ai-generated-complaints.jpg"` (또는 커버를 쓰지 않기로 했다면 47줄 크레딧 줄을 삭제)

### [경미] C-3 — 12줄: 1인 진술을 일반 사실처럼 씀

"예전에는 두 쪽 / 지금은 대개 열 배 / 확인된 가장 긴 것은 200쪽"은 모두 **지자체 변호사 단체 대표 한 사람의 진술**이고, 200쪽도 "자신이 아는 한 최장"입니다. 측정 통계가 아닙니다.

**제안 수정 문구:** `지자체 변호사 5,600명을 대표하는 단체의 대표는, 챗봇 이전에 두 쪽이면 끝나던 민원서가 지금은 대개 그 열 배쯤 된다고 말합니다. 자신이 아는 가장 긴 것은 200쪽이었고요.`
(간결성을 유지하려면 `확인된 가장 긴 것은` → `알려진 가장 긴 것은` 정도의 최소 수정만으로도 가능)

### [경미] C-4 — 12줄: 가디언 보도일의 출처 강도

보도일 2026-11-08은 전재본 한 곳에서만 확인됩니다(가디언 도메인 차단 + 검색 미색인). 전재본 내용 자체는 독립 검증된 사실들과 전부 들어맞아 신빙성은 높다고 봅니다. **그대로 둬도 무방**하나, 날짜를 틀리는 위험을 0으로 두고 싶다면 `가디언이 지난 주말 영국 공공기관의 사정을 전했습니다.` 로 완화할 수 있습니다. (11월 8일은 일요일 → "지난 주말"로 호환)

### [경미] C-5 — 12줄: 직함 정확도

`선임 직원` → `선임 케이스워커`. 원문은 senior caseworker이고, 의원실에서 민원 처리를 전담하는 직무라 이 글의 논지(읽는 노동)와도 더 맞습니다.

### [경미] C-6 — 16줄: 저자 소속의 국가 귀속

Cooperative AI Foundation의 공식 소재지를 문서로 확정하지 못했습니다(영국 거점 정황만). `독일과 영국의 연구자 세 명` → `독일과 영국 기관에 소속된 연구자 세 명` 으로 하면 사실 주장이 약해져 안전합니다. (현 문구를 유지해도 명백한 오류는 아님)

### [경미] C-7 — 16줄: 논문의 자기 한계 표현

논문은 84건을 일관되게 "**potential** cases"로 부르고, "인과적·정량적 주장을 할 수 없다"고 명시합니다. 초고 16줄의 "84건의 사례"는 단정으로 읽힐 수 있습니다. 37줄에서 "지금 AI 탓으로 집계된 사례"라고 이미 잘 완화해 두었으므로, 16줄도 `AI 관여가 지목된 사례 84건` 정도면 충분합니다.

### [경미] C-8 — 16줄: 60%와 90%의 중복 집계

`60%인 데 비해 ... 90%였습니다`는 두 값이 배타적인 것처럼 읽힐 수 있습니다(실제로는 둘 다인 경우가 50%). **제안:** 문장 끝에 `(둘 다인 경우가 절반입니다)`를 덧붙이거나, `갈라 보면` → `나눠 보면(중복 집계입니다)`.

### [선택] C-9 — 20줄: 캡션의 단서 생략

논문 캡션은 "**일부** 급증만 ChatGPT 출시 무렵에 시작된다"는 단서를 달고 있습니다(실제로 점선 이전부터 오르는 곡선이 있음). 초고 캡션은 이 단서를 생략했지만 왜곡은 아니며, 본문도 인과를 단정하지 않으므로 **그대로 둬도 무방**합니다. 굳이 넣는다면 캡션 끝에 `(점선 이전부터 오르는 곡선도 있습니다)`.

---

## D. 사실관계상 문제가 없다고 확인한 부분 (수정 불필요)

- 27줄 마찰론 전개 전체 — 논문 §5.1과 일치.
- 31줄 "응답 의무는 건당, 노동은 장당" — 논문 Factor 11("Processing effort the law mandates per request")·ICO 입장과 정합. 저자의 표현이고 출처 왜곡 없음.
- 33줄 마찰의 역진성 — 논문 §6.1과 일치.
- 37줄 관측 가능성 상실 — 논문 §5 사례 선정 편향 논의와 일치. **이 글에서 가장 정확하게 인용된 대목.**
- 39줄 실행 권고 2가지(신원 확인 경로 / 법적·계약적 가능 여부 사전 확인) — 논문 §7.1 근시일 권고 ②디지털 신원 ③법적 확실성과 대응.
- 41줄 민간 큐 추론 — "예측은 아니고 가정입니다"로 명시했고 근거(논문의 역진성 지적)를 댐. 출처 바깥의 사고 규칙 준수.

---

## E. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — 치명적 2건(C-1 출처 방향 반전, C-2 커버 프런트매터 불일치)을 고치면 발행 가능
- [ ] 발행 보류

**요약:** 시점 규율 위반 없음. 논문 인용 수치(84건/11개 관할권, 60%·90%, 69%, 4,000쪽, 마찰 명제, 고위험 두 조건, Figure 1 캡션)는 PDF 전문 대조 결과 **전부 정확**합니다. 가디언 측 수치(2쪽→10배, 200쪽, 이메일 절반, ICO 입장, 옴부즈맨 글자 수 제한)도 전재본과 일치합니다. 문제는 사실의 오기가 아니라 **한 문장(35줄)이 논문의 증거 방향을 뒤집어 인용한 것**이며, 여기에 커버 이미지 프런트매터 누락이 겹쳐 있습니다.

**검증 불가로 남긴 것:** ①가디언 보도일의 2차 교차 확인(전재본 1곳만), ②Cooperative AI Foundation의 공식 소재 국가, ③캐나다 판례가 실제로 제출됐다는 사례(원문은 가정형 발언).

---

## F. 반영 결과 (ghostwriter 조치, 2026-11-10)

| 항목 | 조치 | 비고 |
|---|---|---|
| **C-1 (치명적)** | **반영** | `실제로 효과가 확인된 쪽은 서식을 바꾸는 겁니다` → `마찰을 덜 쓰면서 갈 수 있는 길은 창구의 모양을 바꾸는 겁니다`. 아울러 논문 Table 3의 단점(초기 비용·입법 필요·수년 소요)을 한 문장 추가해 균형을 맞췄다: "다만 이쪽은 초기 비용이 크고 오래 걸립니다. 서식 하나 바꾸는 데 법을 고쳐야 하는 경우도 있고요." |
| **C-2 (치명적)** | **반영하지 않음 — 오탐** | `coverImage: ""`는 이 레포의 **정상 규약**이다. `_workspace/build_posts_json.py` 83~89줄이 프런트매터가 비어 있으면 `public/images/covers/{slug}.jpg`의 **존재 여부로 자동 연결**하고, 파일은 이미 그 경로에 있다(1200×630). hero 폴백은 그 파일마저 없을 때만 걸린다. daily-post 스킬 Phase 2도 "coverImage는 빈 문자열로 둔다"를 명시한다. 따라서 하단 커버 크레딧과 불일치하지 않는다. |
| C-3 | 반영 | 1인 진술임을 화자에게 귀속: "지자체 변호사 5,600명을 대표하는 단체의 대표는 ~ 말합니다. 자신이 아는 가장 긴 것은 200쪽이었고요." |
| C-4 | 반영하지 않음 | 보도일 11월 8일 유지. 전재본이 날짜를 명기하고 주변 사실이 독립 검증됐으며, 복수 애그리게이터가 같은 날짜로 묶는다. "지난 주말"은 오히려 모호해진다. |
| C-5 | 반영 | `선임 직원` → `선임 케이스워커` |
| C-6 | 반영 | `독일과 영국의 연구자 세 명` → `독일과 영국 기관에 소속된 연구자 세 명` |
| C-7 | 반영 | `84건의 사례` → `AI 관여가 지목된 사례 84건` |
| C-8 | 반영 | 문장 끝에 "둘 다인 경우가 절반이고요." 추가 (중복 집계 명시) |
| C-9 | 반영하지 않음 | 캡션 단서 생략은 왜곡이 아니고 본문이 인과를 단정하지 않는다는 리포트 판단에 동의. 캡션 길이를 더 늘리지 않는다. |
| 팩트 카드 수정 | 반영 | `_workspace/daily/2026-11-10-brief.md`의 "캐나다 판례가 제출된 사례" → 가정형 발언임을 명시하도록 수정(향후 단정형 승격 방지). |

**게이트 재실행:** 본문 수정 후 `node scripts/lint-post.mjs` 재실행 → **통과(WARN 0건)**. 본문 2,244자(이미지·캡션·크레딧 제외).

**최종 판정: 발행 진행.**
