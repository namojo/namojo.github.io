# Fact Check Report: 2026-11-08-deepmind-fan-factories-batch-factoring-rsa

검증일: 2026-11-07 (KST 기준 발행 예정일 2026-11-08)
검증자: fact-checker
대상: `/home/user/namojo.github.io/_posts/2026-11-08-deepmind-fan-factories-batch-factoring-rsa.md`
팩트 카드: `/home/user/namojo.github.io/_workspace/daily/2026-11-08-brief.md`

---

## 0. 치명적 오류 — **없음**

날짜 오류·존재하지 않는 인물/발언·수치 자릿수 오류·귀속 오류·시점 붕괴에 해당하는 항목은 발견되지 않았습니다.
의뢰받은 7개 항목 중 **6개 [확인]**, **1개 [수정 필요 — 경미]**(6번: "두 논문 모두"라는 귀속 범위). 그 외 경미한 정밀도 권고 4건.

> 다만 **[수정 필요] 1건(§B-6)은 본문 14행의 "두 논문 모두 같은 문장을 달고 있습니다"**로, 글의 두 번째 문단 전체를 떠받치는 전제입니다. 근거가 확인되지 않은 쪽은 「Modular Roots」 논문 **PDF 자체가 공개 URL로 존재하지 않는다**는 점이며(원문 부재이지 반증이 아님), 주어를 한 단어 바꾸면 전부 확인된 사실로 떨어집니다. 발행 전 반영 권고.

---

## A. 시점 일관성

- **발행일:** 2026-11-08 (오늘 2026-11-07 기준 +1일)
- **본문에서 언급된 날짜·사건**

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 딥마인드 발표("11월 6일") | 2026-11-06 | 이전 ✓ (2일 전) | 유지 |
| 「Fan Factories」 논문 | 2026-11-05 (표지 날짜) | 이전 ✓ | 본문에 날짜 미기재 — 충돌 없음 |
| 코퍼스미스 '인수분해 공장' 1993년 | 1993년 3월 (J. Cryptology 6(3)) | 이전 ✓ | 유지 |
| "9월에 나온 선행 논문" | ePrint 2026/2131 접수 2026-09-20, 언론 보도 9/24~29 | 이전 ✓ | 유지 |
| "33년" (1993 → 2026) | 33년 ✓ | — | 유지 |

- **사후 시점 표현:** "훗날 드러나듯", "결국", "돌이켜보면" 류 **없음**. "예측은 아니고 가정입니다만"으로 추정임을 명시 — 양호.
- **용어 시점성:** Lean 4, number field sieve, MNFS, HSM, DNSSEC 모두 발행일 시점 존재 ✓. "부채 공장(fan factory)"은 이번 논문이 도입한 신조어이며 본문이 논문의 용어임을 밝히고 씀 ✓.
- **발표일 당일성:** 발표(11/6) → 발행(11/8)로 2일 간격. 시점 붕괴 없음.

---

## B. 의뢰 항목별 검증

### 1. 발표일 2026-11-06 — **[확인]**

- Crypto Briefing 기사 자체가 **2026-11-06 12:53 EST** 게재이며 본문에서 "DeepMind announced the findings on November 6, 2026"이라고 명시.
- FourWeekMBA는 Kohli의 X 게시물 타임스탬프를 **Nov 06 17:14**로 기록.
- 「Fan Factories」 PDF 표지 날짜는 **November 5, 2026**(직접 확인). 즉 **논문 표지 11/5 ≠ 발표 11/6**이며, 본문은 발표만 "11월 6일"로 적고 논문 날짜는 언급하지 않으므로 **구분이 정확**합니다.
- 참고: dev.to 요약은 두 워킹 페이퍼가 "11월 5일과 6일에 공개됐다"고 적고 있어, 「Modular Roots」 쪽이 11/6일 가능성이 있습니다. 본문이 논문별 날짜를 쓰지 않은 현재 구성이 가장 안전합니다. **수정 불필요.**
- 근거: https://cryptobriefing.com/google-deepmind-ai-rsa-1024-bit-weaknesses/ · https://fourweekmba.com/ai-deepmind-ai-agents-find-2-weaknesses-in-legacy-1024-bit-rsa/ · https://x.com/pushmeet/status/2118753824194408683

### 2. 「Modular Roots from a Restricted Oracle」 1,600배 — **[확인]** (4개 조건 모두)

딥마인드 에세이 원문 인용이 FourWeekMBA에 축자로 실려 있습니다.

| 세부 | 판정 | 근거 |
|---|---|---|
| (a) 약 1,600배 | ✓ | 에세이: "improves on the previous best method by **roughly 1,600x** for 1024-bit keys" |
| (b) 1024비트 대상 | ✓ | 같은 문장에 "for 1024-bit keys" 명시 |
| (c) 이론적 추정치 | ✓ | 에세이가 "theoretical estimate, not a measured result"로 한정. dev.to 요약표도 "Theoretical estimate for 1024-bit keys; not run at this size" |
| (d) 공격자가 서명 데이터 일부 통제 | ✓ | 에세이는 "공격자가 서명 블록의 **더 작은 부분**(예: 32바이트 디지털 지문)만 통제하는 경우"로 설명. 블록 절반 이상을 통제하면 패딩이 보호를 전혀 못 준다고 덧붙임 |

- **원문 PDF는 공개 URL을 찾지 못했습니다.** `storage.googleapis.com/deepmind-media/papers/Modular_Roots_from_a_Restricted_Oracle.pdf`는 **404**, 검색 엔진 색인에도 없고, arXiv·IACR ePrint에도 없습니다(FourWeekMBA 저자도 11/6에 양 archive를 검색해 못 찾았다고 기록). 즉 현재 이 논문은 **딥마인드 에세이와 2차 보도로만 확인 가능**합니다.
- 본문 12행의 서술("공격자가 서명될 데이터의 일부를 통제할 수 있을 때 기존 최선보다 약 1,600배 낫다는 이론적 추정치")은 네 조건을 모두 충족하며 **수정 불필요**.
- (선택) 에세이가 예시로 든 "32바이트 디지털 지문"을 괄호로 한 번 넣으면 독자가 조건의 크기 감각을 잡기 쉽습니다. 필수 아님.

### 3. "1993년에 돈 코퍼스미스가 낸 '인수분해 공장'" — **[확인]** (세 요소 모두)

- (a) **이름:** Don Coppersmith(IBM T. J. Watson Research Center). 논문 참고문헌 [8]은 `D. Coppersmith` ✓
- (b) **1993년:** 참고문헌 [8] 축자 — *"D. Coppersmith. Modifications to the number field sieve. Journal of Cryptology, 6(3):169–180, Mar. 1993."* ✓ Crossref DOI 10.1007/BF00198464도 1993년 ✓
- (c) **인수분해 공장을 코퍼스미스가 냈는가:** 「Fan Factories」 1장 축자 — *"Coppersmith [8] introduced two modifications of GNFS. The first, the multiple number field sieve (MNFS)… The second, the **factorization factory**, addresses the case where many integers of the same size must be factored."* ✓ 같은 절에 *"the best known cost per integer has therefore been L[c_MNFS] **since 1993**"* ✓
- 교차 확인: Kleinjung–Bos–Lenstra "Mersenne factorization factory"(ePrint 2014/419)가 "Coppersmith's 'factorization factory' idea"로, Detrey의 "FFS Factory"가 "Adapting Coppersmith's 'Factorization Factory'"로 같은 귀속을 씁니다.
- **연도 귀속 오류 없음.** 수정 불필요.
- 근거: PDF 1~2면·14면(직접 추출) · https://api.crossref.org/works/10.1007%2FBF00198464 · https://eprint.iacr.org/2014/419

### 4. 4096비트 문장의 귀속 — **[확인]**

- ePrint 2026/2131 초록 축자: **"Even 4096-bit RSA does not appear to meet a 128-bit security level in this attack model."** → 본문이 옮긴 "4096비트도 128비트 보안 수준에 못 미친다"와 일치 ✓
- 저자: Laura Shea, Miro Haller, Adam Suhl, Nadia Heninger(UC San Diego), Emmanuel Thomé(INRIA Nancy). **딥마인드 논문이 아님** ✓
- 접수 2026-09-20 / 승인 09-22 → "9월에 나온 선행 논문" ✓
- "서명 오라클을 쓸 수 있다는 특정 공격 모델 안에서의 이야기" ✓ — 초록 문장 자체가 `in this attack model`로 한정하며, 이 공격 모델은 임시로 raw signing oracle에 접근할 수 있는 경우(HSM을 오라클로 사용해 실험)입니다. 4096비트 외삽치는 약 2^119 연산·2^57 쿼리.
- **참고(오류 아님):** Heninger와 Thomé는 이 선행 논문과 딥마인드 「Fan Factories」의 **공동 저자이기도** 합니다. "딥마인드가 아니라"는 문헌 귀속으로는 정확하지만, 혹시 독자 질문이 들어올 수 있는 지점이라 기록해 둡니다. 본문 수정은 불필요.
- 근거: https://eprint.iacr.org/2026/2131 · https://www.schneier.com/blog/archives/2026/09/new-attack-against-rsa.html

### 5. "사람이 지도한 AI 에이전트가 몇 주 만에" — **[확인]**

- Pushmeet Kohli(X, 2026-11-06) 축자: *"our team showed how AI agents could make two significant cryptographic advances **in just weeks**"* ✓
- Google DeepMind 공식 X 축자: *"**Guided by humans**, our models uncovered two major weaknesses in legacy 1024-bit RSA cryptosystems."* ✓
- 에세이: 이런 진전이 역사적으로는 "years or decades"가 걸렸다고 대비 ✓
- 근거: https://x.com/pushmeet/status/2118753824194408683 · https://x.com/GoogleDeepMind/status/2118755418675765656

### 6. "두 논문 모두 같은 문장을 달고 있습니다" (2048비트) — **[수정 필요 / 경미]**

| 주체 | 2048비트 문장 | 판정 |
|---|---|---|
| 「Fan Factories」 논문 | "Our results do not threaten deployed cryptosystems today that are based on 2048-bit and larger RSA." (1면 Important 박스, 직접 확인) | ✓ 확인 |
| 딥마인드 에세이 | "modern encryption protocols, which almost universally use 2048-bit or larger keys, **remain secure**" | ✓ 확인 |
| Kohli X | 결과가 "RSA 2048 같은 현대 암호 스킴의 보안에는 영향을 주지 않는다" | ✓ 확인 |
| **「Modular Roots」 논문 본문** | **확인 불가** — 공개 PDF 부재(404·미색인·arXiv/ePrint 없음). 2차 보도는 모두 같은 취지를 **딥마인드 발표/Scope 절**에 귀속시키고, **논문 본문에 그 문장이 있다고 적은 곳은 없음** | ? |

→ 즉 "**두 논문 모두** 같은 문장을 달고 있습니다"는 절반만 원전 확인입니다. 사실관계상 틀렸을 가능성은 낮지만(발표 전체가 같은 한정을 반복함) **원전으로 확인되지 않은 귀속**이므로 주어를 한 단계 넓히기를 권고합니다. 내용과 뒤 문장("그래서 기사 제목도 딱 둘로 갈렸습니다")의 논리에는 영향이 없습니다.

**대체 문구(택1):**
- (a) `두 결과 모두 같은 단서를 달고 나왔습니다. 2048비트 이상을 쓰는 오늘의 시스템은 위협받지 않는다는 것.`
- (b) `발표도 논문도 같은 문장을 달고 있습니다. 2048비트 이상을 쓰는 오늘의 시스템은 위협받지 않는다는 것.`

### 7. 기타 날짜·수치·고유명사 전수 스캔

| # | 본문 주장 (행) | 상태 | 근거 |
|---|---|---|---|
| 1 | "구글 딥마인드" / "레거시 1024비트 RSA" (12) | ✓ | 공식 발표 문구와 일치 |
| 2 | "논문은 두 편" (12) | ✓ | 「Fan Factories」 + 「Modular Roots from a Restricted Oracle」 |
| 3 | 「Fan Factories」 제목·주제(여러 개 한꺼번에 소인수분해) (12) | ✓ | PDF 표지 + 초록 |
| 4 | 초록 의의 인용: "보통 느리게 움직이는 분야를 AI 보조 연구가 얼마나 빨리 움직일 수 있는지" (18) | ✓ | 축자 원문: "The main significance of these results is that they do sharpen our picture of how quickly AI-assisted research can move a field that usually advances slowly." 번역 충실 |
| 5 | NFS가 두 덩이(미리 해 두는 밑작업 + 숫자별 마무리)로 나뉨 (20) | ✓ | 1장: 유리수 다항식 x−m은 N의 **크기**에만 의존하므로 유리수 쪽을 한 번만 체질해 재사용 가능 |
| 6 | "공유할 수 있게 만든 밑작업이 숫자 하나를 통째로 분해하는 것보다 비쌌습니다" (22) | ✓ | c_pre ≈ 2.0069 > c_GNFS ≈ 1.9230 |
| 7 | 영어 인용 "With a smaller budget the factory gives nothing" (22) | ✓ | 초록 축자 일치(철자·대소문자 포함) |
| 8 | "그 자리가 33년 동안 비어 있었습니다" (24) | ✓ | 1993 → 2026 = 33년 |
| 9 | "두 번째 숫자부터 드는 비용은 1993년 이후로 줄곧 같은 값" (26) | ✓ | 초록: "the best known cost of each further integer has been L_N[1/3, 1.902] since 1993" |
| 10 | fan 구조: 숫자마다 수체 여러 개를 달고 공유된 밑작업에 물림 (26) | ✓ | 1.1절: "each target receives its own fan of L[τ] algebraic polynomials, all tested against the same precomputed pairs with smooth rational norm" |
| 11 | **1/58** · **30배** (26) | ✓ | 초록 축자: "a precomputation of one factorization lets each further 1024-bit integer be factored at about 1/58 of the cost of factoring it with the NFS, 30 times less than with MNFS" |
| 12 | Outlook 인용: "같은 크기의 키가 많이 쓰이고 있을 때 그 키 길이가 얼마나 보호해 주는지" (28) | ✓ | 14면 Outlook 축자: "such analyses help to judge how much protection a key size gives **when many keys of that size are in use**" |
| 13 | "부채 공장은 한 번도 구현된 적이 없습니다 … 어느 크기에서 앞지르는지는 경험적으로 열린 문제" (32) | ✓ | 14면 Open questions 축자: "no fan factory has been implemented, and the size at which one would overtake a well-tuned number field sieve is empirically open" (4.2절 Scope도 동지) |
| 14 | "측정값이 아니라 선도 차수 추정" (32) | ✓ | 초록: "At leading order, that is, with the o(1) terms set to zero" |
| 15 | **2의 75제곱 개 쌍** 저장 테이블 (32) | ✓ | 4.2절 Scope(팩트 카드 직접 확인분): L[1.6603] 쌍 ≈ 1024비트에서 약 2^75 |
| 16 | **1.9019 → 1.7929** (34) | ✓ | 5절 축자: "a budget of one run lowers the exponent from 1.9019, where it had stood since 1993, to 1.7929 (Theorem 3.3)" |
| 17 | 두 에이전트(생성/검증) + Lean 4 (34) | ✓ (단서 아래 §C-4) | Important 박스: "two-agent AI harness: one model generated the proofs, and a second model verified them" / 초록: "machine-checked in Lean 4" |
| 18 | 고유명사 철자: 딥마인드, 코퍼스미스, Lean 4, RSA, DNSSEC, VPN, SSH, number field sieve | ✓ | 전부 정확. 본문에 OpenAI 등 표기 규칙 대상 영문 사명 없음 |
| 19 | 1024/2048/4096/128비트 숫자 (32) | ✓ | 위 §B-4 |
| 20 | 외부 URL·서비스명 | — | 본문에 외부 URL 없음. 커버 이미지 없음(`coverImage: ""`)이므로 하단 커버 크레딧 줄 불필요 ✓ |

---

## C. 수정 권고 (우선순위 순)

1. **[경미·권고]** 본문 **14행**: `두 논문 모두 같은 문장을 달고 있습니다.`
 → `두 결과 모두 같은 단서를 달고 나왔습니다.` (또는 `발표도 논문도 같은 문장을 달고 있습니다.`)
 사유: 「Modular Roots」 논문 PDF가 공개돼 있지 않아 '논문 본문에 그 문장이 있다'는 부분만 원전 미확인. 2048비트 한정 자체는 Fan Factories 논문·에세이·Kohli 게시물에서 모두 확인됨.

2. **[경미]** 본문 **20행**: `큰 수를 소인수분해하는 가장 빠른 알고리즘은 수체 체(number field sieve)입니다.`
 → `특수한 형태가 아닌 큰 수를 소인수분해하는, 지금까지 알려진 가장 빠른 알고리즘은 수체 체(number field sieve)입니다.`
 사유: 논문 1장 원문은 "the fastest known **classical** algorithm for factoring integers **without special form**". 현재 문장은 특수형 수(SNFS)와 양자 알고리즘을 암묵적으로 배제하지 않아 엄밀하지 않습니다. 한 어절만 보강하면 됩니다.

3. **[경미]** 본문 **20행**: `목표 숫자가 무엇이든 상관없이 미리 해 둘 수 있는 밑작업`
 → `목표 숫자가 무엇이든 — 크기만 같다면 — 미리 해 둘 수 있는 밑작업` 정도.
 사유: 유리수 다항식 x−m은 N의 **크기**에만 의존합니다. 크기 무관이 아니라 '같은 크기 안에서' 공유됩니다. 뒤 문단(28행)에서 "같은 크기의 키"가 논지의 핵심이 되므로, 여기서 한 번 짚어 두면 28행의 반전이 더 자연스럽게 걸립니다.

4. **[경미]** 본문 **34행**: `그 증명은 두 에이전트가 하나는 만들고 하나는 검증하는 방식으로 나왔습니다. 검증 쪽은 Lean 4로 기계가 확인했고요.`
 → `그 증명은 두 에이전트가 하나는 만들고 하나는 검증하는 방식으로 나왔고, 그 바탕이 되는 대수적 항등식과 실현 가능성 증거는 Lean 4로 기계가 확인했습니다.`
 사유: 논문이 Lean 4로 기계 검증했다고 밝힌 대상은 "the algebraic identities and exact feasibility witnesses"이지 증명 전체가 아닙니다. 현재 문장은 '증명 전체가 기계 검증됐다'로 읽힐 수 있습니다. (사실 왜곡 수준은 아니나, 이 글의 마지막 논지를 떠받치는 문장이라 정확도를 올려 두는 편이 안전)

5. **[표현·선택]** 본문 **22행**: `공장을 세우려면 먼저 공장보다 비싼 돈을 써야 하는 셈이라`
 → `공장을 세우는 값이 숫자 하나를 그냥 분해하는 값보다 비쌌던 셈이라` 정도.
 사유: 사실 오류는 아니지만 "공장보다 비싼 돈"이 무엇과의 비교인지 문장 안에서 해소되지 않아 뜻이 흐려집니다. 비교 대상(1회 분해 비용)을 문장 안에 넣기를 권고.

6. **[선택·추가 가능]** 본문 **12행** 1,600배 조건에 에세이의 예시를 한 번 넣는 안: `…서명될 데이터의 일부(에세이가 든 예로는 32바이트짜리 지문 정도)를 통제할 수 있을 때…`. 사실 보강이며 필수 아님.

---

## D. 종합 판정

- [x] **수정 후 발행** — 치명적 오류 없음. **C-1(권고 반영 필요)** 1건 + 경미 4건.
- [ ] 발행 가능 (모든 항목 ✓)
- [ ] 발행 보류

C-1만 반영하면 본문의 모든 주장이 원전 또는 공식 발표로 확인된 상태가 됩니다. C-2~C-5는 저자 판단에 맡겨도 발행에 지장 없습니다.

---

## E. 참고 — 원전 확보 상태

| 자료 | 상태 |
|---|---|
| 「Fan Factories」 PDF | **직접 확보·열람**(표지·초록·1장·1.1절·14면 Open questions/Outlook/References까지 본문 축자 대조 완료) |
| 「Modular Roots from a Restricted Oracle」 PDF | **미확보** — 추정 URL 404, 검색 미색인, arXiv/IACR ePrint 미등재. 에세이+2차 보도로만 확인 |
| 딥마인드 에세이 "Advancing the frontier of cryptanalysis" | 원 URL 직접 접근 실패(404/402). **FourWeekMBA에 축자 인용된 문장들**로 간접 확인 |
| ePrint 2026/2131 | 초록·저자·접수일 직접 확인 |

**출처 URL**
1. https://storage.googleapis.com/deepmind-media/papers/Fan_Factories_Multiple_Number_Fields_in_Factorization_Factories_and_Batch_NFS.pdf
2. https://eprint.iacr.org/2026/2131
3. https://fourweekmba.com/ai-deepmind-ai-agents-find-2-weaknesses-in-legacy-1024-bit-rsa/
4. https://cryptobriefing.com/google-deepmind-ai-rsa-1024-bit-weaknesses/
5. https://dev.to/delimitter/google-deepmind-ai-agents-found-two-weaknesses-in-legacy-1024-bit-rsa-2d5d
6. https://x.com/pushmeet/status/2118753824194408683
7. https://x.com/GoogleDeepMind/status/2118755418675765656
8. https://api.crossref.org/works/10.1007%2FBF00198464 (Coppersmith 1993)
9. https://eprint.iacr.org/2014/419 (Mersenne factorization factory — 용어 귀속 교차 확인)
10. https://www.schneier.com/blog/archives/2026/09/new-attack-against-rsa.html (선행 논문 9월 보도)
