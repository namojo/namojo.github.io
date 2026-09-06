# Fact Check Report: anthropic-fermat-lean-kernel-verification

- **검증 대상:** `_posts/2026-09-07-anthropic-fermat-lean-kernel-verification.md` (개고본 기준, 2026-09-07 재검증)
- **팩트 카드:** `_workspace/daily/2026-09-07-brief.md`
- **검증 일시:** 2026-09-07 (KST)
- **검증자:** fact-checker

---

## 0. 치명적 오류 (Critical) — **0건**

발행을 막을 수준의 오류는 발견되지 않았습니다. 잘못된 날짜, 존재하지 않는 발언·인물, 자릿수 오류, 시점 붕괴, 1차 출처가 뒷받침하지 않는 단정 — 모두 해당 없음.

단, 아래 **중간 등급 1건(와일스·테일러 논문 서술)** 은 수학계 독자가 곧바로 지적할 수 있는 부정확이므로 발행 전 수정을 강하게 권고합니다.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-09-07 (KST)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 앤트로픽 FLT 형식화 발표 ("현지 시각 9월 4일") | 2026-09-04 (현지) / KST 09-05 | 이전 ✓ | 유지 |
| "며칠 전" (발표 시점 지칭) | 09-04 → 09-07, 3일 전 | 이전 ✓ | 유지 |
| 케빈 버자드 블로그 반응 | 2026-09-04 | 이전 ✓ | 유지 |
| 와일스 1993년 강연 | 1993-06-23 (케임브리지 아이작뉴턴연구소) | 이전 ✓ | 유지 |
| 와일스·테일러 논문 1995 | Annals of Math 141(3), 1995-05 | 이전 ✓ | 유지 |
| 아펠·하켄 사색정리 "오십 년 전" | 1976 → 2026, 정확히 50년 | 이전 ✓ | 유지 |
| 버자드 EPSRC 과제 "2024년부터" | 2024-10 착수, 2029-09 종료(5년) | 이전 ✓ | 유지 |
| SKT A.X K2 IMO/AIME 발표 | 2026-08-11 | 이전 ✓ | 유지 |
| "Mathlib 2026년 기준 190만 줄" | 2026 시점 값 | 동시점 ✓ | 유지 |

- **사후 시점 표현 검사:** "훗날", "결국 드러났듯", "돌이켜보면" 류 없음. ✓
- **미래 사건 유입 검사:** 09-07 이후 사건 없음. 브리프에서 탈락시킨 GPT-6 Astra 시스템 카드·오픈AI 위키 인시던트·Nscale 조달 등 미언급. ✓
- **용어 시점성:** Lean, Mathlib, DAG, Prove2Me, comparator 모두 발행일 시점에 존재. ✓

**판정: 시점 규율 위반 없음.**

---

## B. 사실 검증

| # | 본문 주장 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 앤트로픽 발표 "현지 시각 9월 4일" | ✓ 확인 | anthropic.com/research/formalizing-fermats-last-theorem (Sep 4, 2026), Xena 블로그 동일자, SiliconANGLE 09-04 | - |
| 2 | "최종적으로 성공한 실행에 걸린 시간이 11일" | ✓ 확인 (1차) | 앤트로픽: "In 11 days, working largely autonomously, Claude produced the first end-to-end, computer-checked proof of FLT." | 완충 표현("최종적으로 성공한 실행") 적절 |
| 3 | "Lean 코드가 1,300만 줄 이상" | ✓ 확인 (1차+당사자) | 앤트로픽 "13 million lines"; 버자드 "over 13.4 million lines"; TNW "13 million (Buzzard measured 13.4 million)" | "이상" 완충 적절. 13.5M(2차) 미사용 ✓ |
| 4 | "중간 정리 3만 300개 / 최종 사용 2만 9,500개" | ✓ 확인 (1차) | 앤트로픽: "proved 29,500 intermediate theorems", 30,300 총수 | GitHub README의 29,511(2차 상세치) 미사용 ✓ |
| 5 | "출력 토큰 약 60억" | ✓ 확인 (1차) | 앤트로픽: "consuming about six billion output tokens" | - |
| 6 | "에이전트 수십 개 / 정확한 대수 미공개" | ✓ 확인 | 앤트로픽: "Dozens of Claude agents collaborated" (수치 미명시) | - |
| 7 | "상용 제품이 아니라 앤트로픽 사내 범용 리서치 모델" | ✓ 확인 (1차) | 앤트로픽: "a general-purpose internal research model" | 제품명(Claude Fable 5.1 대비 표현) 미사용 — 안전 ✓ |
| 8 | "결과물 전체는 GitHub에 공개" | ✓ 확인 | github.com/anthropics/fermats-last-theorem 실재, Lean 4.33.1 / Mathlib v4.33.0 | - |
| 9 | "Lean 표준 공리 세 개 외에 새 공리를 끌어들이지 않았고, sorry 자리표시자도 남기지 않았습니다" | ✓ **확인 (1차)** | 앤트로픽: "it uses just Lean's three standard axioms". **GitHub README `FinalCheck.lean`: `#print axioms fermat_last_theorem` → `[propext, Classical.choice, Quot.sound]` — "no `sorry`, no added `axiom`, no `native_decide`"** | **과장 아님.** 앤트로픽 블로그는 sorry를 명시하지 않지만 공식 저장소 README가 직접 명시 |
| 10 | "Lean comparator를 돌려 Mathlib FLT 진술과 일치 대조" | ✓ 확인 (1차) | 앤트로픽: "a comparator confirmed the theorem statement matches Mathlib's own FLT statement"; README: `leanprover/comparator` v4.33.0, `Verdict: Your solution is okay!` | 정확. 앤트로픽이 comparator를 '만들었다'고 쓰지 않음 ✓ |
| 11 | "Mathlib 2026년 기준 190만 줄, 이번 산출물은 그 다섯 배가 넘습니다" | ⚠ 부분 확인 | **"5배 초과"는 1차**(앤트로픽: "over 5x the size of Mathlib"). **"190만 줄"은 2차**(NAS 패널 발언) | "알려져 있는데" 완충 유지. 배수는 1차라 안전 |
| 12 | "Mathlib 열린 PR 3,000건 안팎 / 리뷰 큐 600여 건" | ✓ 확인 (2차 단일) | TNW 2026-09-06: "approximately 3,000 open pull requests, with over 600 currently in the review queue" | **브리프에서 '미확인'이던 항목이 TNW로 확인됨.** "보도에 따르면" 완충 유지 권고 |
| 13 | 버자드 = "임페리얼칼리지런던 수학과 교수" | ✓ 확인 | Imperial College London, Professor of Pure Mathematics (Dept. of Mathematics) | - |
| 14 | "2024년부터 EPSRC 5년 과제" | ✓ 확인 | EPSRC 'Formalising Fermat' EP/Y022904/1, 2024-10 착수 ~ 2029-09 종료 | - |
| 15 | "보도에 따르면 100만 파운드 규모" | ✓ 확인 (본인 진술) | 버자드 블로그 원문: "I was given £1M to run my project over 5 years"; TNW도 동일 | **완충 과잉.** 2차가 아니라 본인 진술이므로 "버자드 본인의 표현으로는"이 더 정확 |
| 16 | 버자드 인용 ①: "수학적으로 이 작업은 우리에게 본질적으로 아무것도 알려주지 않는다" + 99.9% | ✓ 확인 (원문 일치) | "Note that mathematically this work of anthropic tells us essentially nothing: I am on record as saying that I am 99.9% sure that the proof of FLT is OK." | 번역 정확 |
| 17 | 버자드 인용 ② 의역: "자동 형식화 분야에서 무엇이 가능한지… 최신 연구가 나오는 즉시 형식화" | ✓ 확인 (의미 일치) | "What this work *does* tell us... is what is possible in the field of autoformalization. If thousands of pages of the literature can be formalized end-to-end by some kind of AI swarm in an 11 day period now, then in the future we will start to see formalization of modern research being done on the fly." | 정확. "on the fly"→"나오는 즉시" 적절 |
| 18 | 아펠·하켄 1976, "1,936개의 경우" | ✓ 확인 | 최종 불가피 집합 = 1,936개 가환 배치(후에 1,476개로 축소). 1976년 증명 | 정확값 사용 안전 |
| 19 | "17 이상의 소수 지수" | ✓ 확인 (당사자 1차) | 버자드: "their FLT proof only works for p≥17" (마주르의 아이젠슈타인 아이디얼 결과 때문) | - |
| 20 | "쿠머의 정규소수에 대한 기존 형식화" | ✓ 확인 | 버자드: "FLT was already formalized for odd regular primes by Best–Birkbeck–Brasca–Rodriguez–van-der-Velde–Yang" (`flt-regular`, 쿠머 정리 기반). 최소 비정규 소수는 37 | - |
| 21 | "버자드가 이끄는 임페리얼 프로젝트가 쌓아 둔 Lean 조각들을 가져다 확장" | ✓ 확인 (1차) | 앤트로픽: "adapted from the Imperial College London FLT project and the flt-regular project" | - |
| 22 | 톈이 펑 = "앤트로픽 연구원이자 컬럼비아대 조교수" | ✓ 확인 | Columbia Business School, Assistant Professor (Decision, Risk and Operations). 앤트로픽 연구원 겸직 | 엄밀히는 '컬럼비아 경영대학원' — 현행 표기도 오류 아님 |
| 23 | "이 프로젝트를 이끈 사람은 … 톈이 펑입니다" | ⚠ 근거 약함 | 앤트로픽 1차는 **"Prove2Me, designed by Tianyi Peng and his collaborators at Columbia"**까지만 명시. 2차(Techstrong/AI Weekly)는 "project led by researcher Tianyi Peng" | 완화 권고 (아래 C-2) |
| 24 | Prove2Me = DAG 기반 공유 할 일 목록, 초기 실패는 컨텍스트 윈도우 상태 관리 | ✓ 확인 (1차) | 앤트로픽 본문 + 기술 문서. TNW: "the coordination platform that enabled the agents to succeed after initial failures" | - |
| 25 | "앤트로픽 스스로 이 증명이 필요한 것보다 훨씬 길 가능성이 크다고 인정" | ✓ 확인 (1차) | "our proof is likely much longer than it needs to be" | - |
| 26 | "비용은 공개되지 않았고요" | ✓ 확인 | 1차·2차 어디에도 비용 수치 없음 | - |
| 27 | 버자드가 EPSRC에 약속한 나머지 둘 (Mathlib 병합 / 탐색 가능한 문서) | ✓ 확인 (1차) | 버자드 블로그: "making pull requests to Lean's mathematics library" / "creating a dynamic document enabling humans to explore the modern proof" | - |
| 28 | SKT A.X K2 "2026년 IMO 금메달 수준", "AIME 기반 벤치마크 97.1%", "자체 발표 기준" | ✓ 확인 | SKT 뉴스룸(news.sktelecom.com/**229153**, 2026-08-11) + ZDNet·서울경제·뉴스웨이 교차: IMO 2026 6문제 42점 만점 중 **29점**(금메달 커트라인 29점), **매스아레나 AIME 2026 리더보드 97.1%** 공동 1위 | 수치 정확, "자체 발표" 명시 ✓. ※ 브리프의 URL 229907은 오기(사이버보안 모델 기사) |
| 29 | 와일스 1993년 강연 증명에 빈틈이 있었고 사람이 찾아냄 | ✓ 확인 | 1993-06-23 케임브리지 발표 → 1993년 여름 심사 중 오일러 시스템(셀머 군 상계) 논증의 빈틈 발견 → 1994-09 테일러와 보완 | - |
| 30 | "리처드 테일러와 함께 그것을 메워 **129쪽짜리 논문**으로 완성" | ✗ **부정확 (중간 등급)** | 실제로는 **논문 2편**. Wiles 단독 "Modular elliptic curves and Fermat's Last Theorem", Annals 141(3) **pp. 443–551(109쪽)** + Taylor–Wiles 공저 "Ring-theoretic properties of certain Hecke algebras" **pp. 553–572(20쪽)**. 129쪽은 **두 편의 합** | 수정 권고 (C-1) |
| 31 | "증명이라는 말의 뿌리는 라틴어 probare" | ⚠ 표현 부정확 | 라틴어 probare(시험·검증하다)는 영어 prove/proof의 어원. 한국어 '증명'은 한자어 證明 | 경미 — 문구 조정 권고 (C-3) |
| 32 | 커버·본문 이미지 | ✓ 확인 | `public/images/covers/anthropic-fermat-lean-kernel-verification.jpg`(1670년판 『아리스메티카』, OBSERVATIO DOMINI PETRI DE FERMAT 여백 주석) 및 `-imperial.jpg`(임페리얼 사우스켄싱턴 캠퍼스) 실재. `_workspace/image-credits-2026.md` 68·69행에 출처 기록됨 | `coverImage: ""`는 빌드 스크립트가 슬러그 파일명으로 자동 매칭(우선순위 3) → 하단 커버 크레딧 줄 유효 ✓ |

### 브리프 '사용 금지' 항목 대조 (항목 11)

| 금지 수치 | 본문 포함 여부 |
|---|---|
| 96코어 / 컴파일 20배 | **미포함 ✓** |
| 29,511 + 헬퍼 보조정리 53만 | **미포함 ✓** (본문은 1차값 2만 9,500 사용) |
| 13.5M 줄 | **미포함 ✓** ("1,300만 줄 이상"으로 완충) |
| 약 7% 기여율 | 미포함 (사용 가능 항목이었으나 미사용 — 문제 없음) |

**금지 수치 유입 0건.**

---

## C. 수정 권고 (우선순위 순)

### C-1. [중간 — 발행 전 수정 권고] 본문 14줄, 와일스·테일러 논문 서술

현행:
> 리처드 테일러와 함께 그것을 메워 129쪽짜리 논문으로 완성한 것이 1995년입니다.

문제: 129쪽짜리 단일 공저 논문이 있었던 것처럼 읽힙니다. 실제로는 와일스 **단독** 본 논문 109쪽(pp. 443–551)과 테일러·와일스 **공저** 보조 논문 20쪽(pp. 553–572), 두 편이 1995년 5월 『Annals of Mathematics』 141권 3호에 나란히 실렸고 129쪽은 그 합계입니다. 수학계 독자가 가장 먼저 지적할 대목입니다.

수정안(택1):
- (a) "리처드 테일러와 함께 그 빈틈을 메웠고, 1995년 두 편의 논문으로 — 합쳐 129쪽이었습니다 — 완성됐습니다."
- (b) "리처드 테일러와 함께 그 빈틈을 메웠습니다. 와일스의 본 논문과 테일러와의 공저 보조 논문, 합쳐서 129쪽이 1995년에 실렸습니다."

### C-2. [경미] 본문 38줄, 톈이 펑의 역할 강도

현행:
> 이 프로젝트를 이끈 사람은 앤트로픽 연구원이자 컬럼비아대 조교수인 톈이 펑입니다.

앤트로픽 1차 출처는 그가 **Prove2Me를 설계했다**는 데까지만 말합니다("designed by Tianyi Peng and his collaborators at Columbia University"). "프로젝트를 이끌었다"는 2차 보도(Techstrong·AI Weekly) 표현입니다. 40줄에서 Prove2Me를 "만들어"라고 이미 서술하므로, 38줄을 낮춰도 논지 손실이 없습니다.

수정안: "이 프로젝트의 협업 구조를 설계한 사람은 앤트로픽 연구원이자 컬럼비아대 조교수인 톈이 펑입니다."

### C-3. [경미] 본문 12줄, probare 어원 서술

현행:
> 증명이라는 말의 뿌리는 라틴어 probare입니다.

'증명'은 한자어(證明)이고 probare는 영어 prove/proof의 어원입니다. 도입부 훅으로서의 효과는 그대로 두면서 정확도만 올릴 수 있습니다.

수정안: "증명을 뜻하는 영어 proof의 뿌리는 라틴어 probare입니다. 시험한다, 검사한다는 뜻인데요."

### C-4. [경미] 본문 20줄, EPSRC 금액의 완충 과잉

"보도에 따르면 100만 파운드 규모입니다" — 이 수치는 2차 보도가 아니라 버자드 **본인이 자기 블로그에 쓴 문장**("I was given £1M to run my project over 5 years")입니다. 완충을 덜어내는 편이 정확합니다.

수정안: "본인 표현으로는 5년에 100만 파운드짜리 과제입니다."

### C-5. [경미 — 스타일] 본문 34줄, "Lean comparator" 병기

2026-08-12 병기 규칙(그날 처음 접하는 낯선 고유명사는 `한글(영어)` 후 한글 단독)에 따르면 영어 단독 노출은 어색합니다. 다만 comparator는 Lean 생태계의 도구 이름(`leanprover/comparator`)이기도 하므로 "대조기(comparator)" 정도로 한 번 풀어 주면 충분합니다.

### C-6. [참고 — 수정 불필요] 지적하지 않는 항목

- "sorry 자리표시자도 남기지 않았습니다": 앤트로픽 블로그 본문만 보면 근거가 약해 보이지만, **공식 저장소 README가 `#print axioms` 결과와 함께 "no `sorry`, no added `axiom`, no `native_decide`"를 명시**합니다. 과잉 단정 아님. 그대로 유지하십시오. (덧붙이면, Lean에서 `sorry`는 `sorryAx` 공리로 잡히므로 "표준 공리 3개뿐"이라는 진술 자체가 sorry 부재를 함의합니다.)
- "190만 줄 / 다섯 배": 배수는 앤트로픽 1차 진술이고 줄 수만 2차입니다. "알려져 있는데"라는 완충이 이미 붙어 있어 그대로 두어도 됩니다.
- "3,000건 / 600여 건": 브리프에서 미확인이었으나 TNW(2026-09-06)로 확인됐습니다. "보도에 따르면"은 유지하십시오(단일 2차 출처).
- 커버 이미지: 프런트매터 `coverImage`가 비어 있어도 `build_posts_json.py`가 `covers/{slug}.jpg`를 자동 매칭하므로 하단 커버 크레딧 줄은 유효합니다.

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행 가능** — 치명적 오류 0건, 중간 등급 1건(C-1), 경미 4건
- [ ] 발행 보류

**요약:** 시점 규율 위반 없음, 브리프 '사용 금지' 수치 유입 없음, 1차 출처 수치 전부 일치, 인용문 2건 모두 원문 대조 통과, 인물·직함·고유명사 정확. **C-1(와일스·테일러 논문 129쪽 서술)만 고치면 즉시 발행 가능**하며, C-2~C-5는 저자 판단 사항입니다.

---

## 검증에 사용한 출처

1. 앤트로픽 리서치 — https://www.anthropic.com/research/formalizing-fermats-last-theorem
2. 공식 저장소 README(공리·comparator 검증) — https://github.com/anthropics/fermats-last-theorem
3. 케빈 버자드, Xena Project「FLT: Anthropic has beaten me to it」(2026-09-04) — https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
4. The Next Web(2026-09-06) — https://thenextweb.com/news/anthropic-claude-fermat-last-theorem-lean-buzzard
5. SiliconANGLE(2026-09-04) — https://siliconangle.com/2026/09/04/anthropic-uses-claude-to-formalize-proof-of-fermats-last-theorem/
6. Annals of Mathematics 141-3(1995) — https://annals.math.princeton.edu/1995/141-3/p01
7. EPSRC 'Formalising Fermat' EP/Y022904/1 — https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/Y022904/1
8. Imperial College London FLT 프로젝트 — https://github.com/ImperialCollegeLondon/FLT
9. SKT 뉴스룸(A.X K2 수학 성능, 2026-08-11) — https://news.sktelecom.com/229153
10. ZDNet Korea(A.X K2 IMO) — https://zdnet.co.kr/view/?no=20260811103025
11. Tianyi Peng, Columbia Business School — https://business.columbia.edu/faculty/people/tianyi-peng
12. flt-regular(정규소수 FLT 형식화) — https://arxiv.org/pdf/2410.01466
