# Fact Check Report: getty-stability-uk-appeal-infringing-copy

- **대상 초고:** `_posts/2026-11-14-getty-stability-uk-appeal-infringing-copy.md`
- **팩트 카드:** `_workspace/daily/2026-11-14-brief.md`
- **검증 수행일:** 2026-11-13 (발행 예정 2026-11-14)
- **종합:** 치명적 오류 **0건**. 수정 권고 **1건(중)** + 경미 **6건**. → **수정 후 발행**

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-14
- **본문에서 언급된 날짜·사건:**

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 영국 항소법원 항소심 심리(이틀) | 2026-11-11(수)~11-12(목) | 이전 ✓ | 유지 |
| 1심 판결 선고(고등법원) | 2025-11-04 | 이전 ✓ (= "지난해 11월 4일" 정확) | 유지 |
| 게티의 1차 침해·데이터베이스권 청구 철회 | 2025-06-25 (최종변론 단계) | 이전 ✓ | 유지(표현만 보정 — B-3) |
| USENIX Security 학회 발표 연구 | 2023-08 (arXiv 2023-01) | 이전 ✓ | 유지(수치 보정 — B-13) |
| 항소심 판결 선고 | 미선고, 일정 미공표 | — | "아직 나오지 않았고 선고 일정도 공표되지 않았습니다" **정확** |

- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" 등 **없음**. 44행의 미래 언급은 "예측도 아닙니다. … 가정입니다"로 명시적 한정 → 시점 규율 위반 아님.
- **용어 시점성:** CDPA, 확산 모델, 오픈웨이트 모두 발행일 시점에 통용. 문제 없음.
- **참고(결함 아님):** `_style/ai-timeline.md`에 게티 v 스태빌리티 항목이 **전혀 없음**. 2025-11-04 1심과 2026-11-11~12 항소심 2줄 추가를 권고(향후 재검증 비용 절감).

**A 판정: 통과.**

---

## B. 사실 검증 (요청 항목 1~13)

| # | 주장 | 상태 | 근거 | 조치 |
|---|---|---|---|---|
| 1 | 항소심 심리 2026-11-11~12 이틀, 판결 미선고·일정 미공표 | ✓ 확인 | City AM(2026-11-11자, "is being heard between Wednesday and Thursday"), Burges Salmon(2026-11-12자, "today hearing the second day", "We will report on the judgment when it is handed down") | - |
| 2 | 1심 [2025] EWHC 2863 (Ch), 2025-11-04, Mrs Justice Smith | ⚠ 보정 권고 | judiciary.uk / caselaw.nationalarchives.gov.uk — 사건번호·날짜 정확. 재판관 정식 호칭은 **Mrs Justice Joanna Smith DBE** | 경미 — C-2 |
| 3 | 1차 침해·DB권 청구를 "최종변론 직전"에 철회, 사유는 영국 내 학습 증거 부재 | ⚠ 보정 권고 | Pinsent Masons·Jones Day·Moore Barlow — 철회는 **2025-06-25, 최종변론 단계에서**("fought to closing submissions and then abandoned", 2026-01-05 봉인 명령 문구). 사유는 맞음 | 경미 — C-3 |
| 4 | 판결문 600항 인용 2건 | ✓ 확인 | 판결문 본문 확인(caselaw.nationalarchives.gov.uk, 600항) + Latham & Watkins 인용: "the Model itself does not store any of those Copyright Works; the model weights are not themselves an infringing copy and they do not store an infringing copy. They are purely the product of the patterns and features which they have learnt over time during the training process." 초고 번역 충실 | - |
| 5 | CDPA 조문 — s.22/s.23/s.27, s.27(3), s.17 "storing … by electronic means" | ✓ 확인 (조항 표기만 보정 권고) | legislation.gov.uk s.27(2)(3) 원문 확인: (3)(a) "has been or is proposed to be imported into the United Kingdom" (3)(b) "its making in the United Kingdom would have constituted an infringement". s.17(2) "This includes storing the work in any medium by electronic means" 확인. 본문의 **"법 27조"는 틀리지 않으나 해당 문장은 정확히는 27조 3항** | 경미 — C-5 |
| 6 | 무형물도 'article'이라는 판단이 영국 법원 최초 | ✓ 확인 | CMS·Bird&Bird·Wolters Kluwer Copyright Blog 등 복수 로펌 해설이 "for the first time … an 'article' … can be intangible"로 일치 | - |
| 7 | RAM 복제물이 "짧은 시간 동안" 침해 복제물이었다는 선례를 대조군으로 언급 | ✓ 확인 | 판결문 594·597·600항 — *Sony Computer Entertainment Inc v Ball* [2004] EWHC 1738 (Ch)(Laddie J). 600항 자체가 RAM 칩이 "became an infringing copy for a short time"이라고 대조 | 선택 — C-7 |
| 8 | 호스팅 접근은 수입·소지 아님 / 로컬 다운로드는 수입에 해당할 수 있음(단 그 파일이 침해 복제물일 때) | ✓ 확인 | Latham & Watkins 1심 분석 | - |
| 9 | 항소심 양측 주장 요약 | ✓ 확인 | Burges Salmon — 게티: "making"에 학습 포함, "whether or not it actually contains copies" / 스태빌리티: 결과물 기준, "making it unlawful to import the model but lawful to copy it once it is in the UK", "a matter for Parliament, not the courts" | - |
| 10 | BPI가 게티 측 보조참가 허가 | ✓ 확인 (2곳 교차) | Burges Salmon("The British Recorded Music Industry Limited (BPI) … given permission to intervene in support of Getty") + mlex/Lexology 보도. 단체명 영문 표기도 정확 | 경미 — C-10 |
| 11 | 스태빌리티가 1심의 두 판단(무형물 article / 수입·배포 주체)을 뒤집어 달라고 요청 | ✓ 확인 | Burges Salmon, City AM | - |
| 12 | 확산 모델 학습·생성 메커니즘 설명 | ✓ 확인 (한 곳 선택 보정) | 전방 확산→역과정 학습, 가중치=조정값 — 기술적으로 정확. SD 1.x U-Net 약 8.6억 파라미터이므로 "수억 개"도 정확. 다만 표준 노이즈 스케줄은 보통 1,000스텝이라 "수백 번"은 약간 낮음 | 선택 — C-12 |
| 13 | USENIX 2023 연구에서 "천 장 넘게" 거의 원본 그대로 추출 / 중복 학습 데이터에서 주로 발생 | ⚠ **수정 필요(중)** | Carlini et al., arXiv 2301.13188 §4~§6 원문 확인 | **C-13** |

### B-13 상세 (가장 중요한 지적)

논문의 실제 수치는 모델별로 갈립니다.

- **스테이블 디퓨전:** 가장 많이 중복된 학습 예시 **35만 건**의 캡션으로 각 500장씩 **약 1억 7,500만 장**을 생성 → (ℓ2, 0.15) 기준 **94장** 추출. 수작업 검수를 더해 **109장**.
- **Imagen:** 중복 상위 1,000개 프롬프트 × 500장(50만 장) → **23장** (+ 분포 외 공격으로 3장).
- **"천 장 넘게"의 출처:** 연구진이 **직접 학습시킨 CIFAR-10 소형 확산 모델 16개**에서 약 100만 장을 생성해 **1,280장**(데이터셋의 2.5%) 추출. 논문 초록의 "extract over a thousand training examples"는 사실상 이 실험 수치입니다.

즉 초고의 "확산 모델에서 … 천 장 넘게"는 **논문 초록 표현과는 어긋나지 않지만**, 문맥이 스테이블 디퓨전을 다루는 글이어서 독자가 "스테이블 디퓨전에서 천 장 넘게 뽑혔다"로 읽습니다. 실제로는 **94~109장**입니다. 자릿수가 한 자리 다르고, 이 글의 논지(1심의 '저장하지 않는다' 판단이 흔들릴 여지)를 **과장**하는 방향이라 수정 권고합니다.

한편 **"같은 이미지가 학습 데이터에 여러 번 들어간 경우에 주로 생기는 현상"은 논문과 정확히 일치**합니다. 중복 예시는 비중복 대비 암기 확률이 "orders of magnitude" 높고, 스테이블 디퓨전에서는 **100회 이상 중복된 이미지**에서 사실상 전부 발생했으며, 논문 스스로 자신들의 수치가 중복 이미지를 표적으로 삼았기에 **상한선**이라고 밝힙니다. "흔한 일은 아니고"도 논문의 "just one in a million" 서술과 부합합니다.

---

## C. 수정 권고 (우선순위 순)

### [중] C-13 — 본문 44행, USENIX 연구 수치

현재:
> 2023년 USENIX 보안 학회에서 발표된 연구는 확산 모델에서 학습에 쓰인 이미지를 천 장 넘게 거의 원본 그대로 뽑아냈습니다.

권고안(둘 중 택일):

- (A) 스테이블 디퓨전 기준으로 좁히기 — 글의 맥락과 가장 잘 맞음
  > 2023년 USENIX 보안 학회에서 발표된 연구는 스테이블 디퓨전에서 학습에 쓰인 이미지 94장을 거의 원본 그대로 되살려 냈습니다.
- (B) 논문 전체를 쓰되 출처를 나누기
  > 2023년 USENIX 보안 학회에서 발표된 연구는 확산 모델이 학습 이미지를 그대로 토해 내는 사례를 모았습니다. 연구진이 직접 학습시킨 소형 모델에서는 천 장이 넘었고, 스테이블 디퓨전에서도 94장이 거의 원본 그대로 나왔습니다.

뒤이은 "흔한 일은 아니고, 같은 이미지가 학습 데이터에 여러 번 들어간 경우에 주로 생기는 현상이에요"는 **그대로 두면 됩니다**(검증 완료).

### [경미] C-2 — 본문 14행, 재판관 호칭

현재 `스미스 판사(Mrs Justice Smith)` → 권고 `조애나 스미스 판사(Mrs Justice Joanna Smith)`.
판결문 표제와 사법부 공식 표기가 "MRS JUSTICE JOANNA SMITH"입니다(동성 재판관 구별을 위해 이름을 붙여 쓰는 호칭). 일부 로펌 해설이 "Mrs Justice Smith"로 줄여 쓰므로 오류까지는 아니나, 고유명사 정확성 기준으로는 보정이 낫습니다.

### [경미] C-3 — 본문 14행, 철회 시점

현재 `최종변론 직전에` → 권고 `최종변론에 이르러` 또는 `최종변론 단계에서`.
기록상 해당 청구들은 "최종변론까지 다툰 뒤 포기(fought to closing submissions and then abandoned)"되었습니다(2026-01-05 봉인 명령 문구). "직전"은 한 단계 이릅니다.

### [경미] C-5 — 본문 18행, 조항 번호

현재 `법 27조는 그 정의를 이렇게 적어 뒀습니다` → 권고 `법 27조 3항은 그 정의를 이렇게 적어 뒀습니다`.
36행의 `27조의 가정법 문장`도 같이 `27조 3항의 가정법 문장`으로 맞추면 일관됩니다(본문에 숫자를 더 넣기 싫다면 18행만 고치고 36행은 그대로 둬도 무방).
덧붙여 s.27(3)은 문언상 "영국 밖에서 만들어졌을 것"이 아니라 "영국으로 수입되었을 것"을 요건으로 합니다. 초고의 "영국 밖에서 만들어 들여온 물건은"은 실무상 같은 상황을 가리키므로 오류는 아니지만, 엄밀히 쓰려면 "영국으로 들여온 물건은"이 정확합니다.

### [경미] C-10 — 본문 38행, 단체명

현재 `영국음반산업협회가 게티 쪽 보조참가 허가를 받아` → 권고 `영국음반산업협회(BPI)가 …`.
영문 정식 명칭은 The British Recorded Music Industry Limited이고 한국어 번역으로 '영국음반산업협회'는 적절합니다(국내 언론은 '영국축음기산업협회', '영국레코드산업협회'도 병용). 다만 독자 인지도가 약어 쪽에 있으므로 `(BPI)` 병기를 권고합니다. 10-13 병기 규칙(낯선 고유명사는 한글+병기 후 한글 단독)에도 부합.

### [선택] C-7 — 본문 34행, 선례 명시

`과거 판례에서는` → `2004년 소니 대 볼 사건에서는` 정도로 사건명을 한 번 주면 독자가 확인할 수 있습니다. 다만 10-19 지침(출처·기관명은 논지를 떠받칠 때만 본문에)에 비춰 보면 **지금처럼 익명으로 둬도 문제없습니다**. 판단에 맡깁니다.

### [선택] C-12 — 본문 28행, 노이즈 스텝 수

`수백 번 반복하면` → `천 번 가까이 반복하면` 또는 `수백에서 천 번쯤 반복하면`.
표준 DDPM 계열 노이즈 스케줄은 보통 T=1,000입니다. 개념 설명으로서 "수백 번"이 틀렸다고 할 수는 없으므로 선택 사항입니다.

---

## D. 추가 확인 사항 (요청 외, 이상 없음)

- **이미지 2장 모두 실물·캡션 일치 확인.**
  - 본문 이미지 `/images/inline/getty-stability-uk-appeal-denoising-steps.jpg` — 파일을 직접 열어 확인한 결과 라벨이 **Steps: 5 / 10 / 20 / 40 / 80 / 150**. 캡션의 "5회에서 150회까지"와 정확히 일치. 원본은 Commons "Stable Diffusion - Rhino X Y Plot to show different Steps.png"(업로더 MrAlanKoh, public domain).
  - 커버 `covers/getty-stability-uk-appeal-infringing-copy.jpg` — Commons "Royal Courts of Justice 2019.jpg", 촬영 David Castor, CC0. **왕립재판소는 실제 항소법원(민사부) 소재지**이므로 하단 크레딧의 "(항소법원 소재지)" 설명도 정확.
  - 프런트매터 `coverImage: ""`는 파일명 매칭 폴백을 쓰는 레포 관례와 일치 — 오류 아님.
  - `_workspace/image-credits-2026.md` 186~187행에 두 건 모두 기록되어 있음.
- **"영국 법원은 아직까지 '학습이 저작권 침해인가'를 판단한 적이 없습니다"** — 복수 로펌 해설과 일치(✓ 확인).
- **"영국 저작권·디자인·특허법(CDPA)"** 역어 정확(Copyright, Designs and Patents Act 1988).
- **2차 침해의 구조(수입 s.22 / 소지·배포 s.23 + 침해 복제물일 것)** — 정확.
- **BPI의 실제 주장**(역외 학습 후 반입 우회 우려, 독일 뮌헨 2건의 암기 인정 판결 원용, 1심 판단은 모델별 사실관계 문제라 일반화 불가)은 본문에 쓰이지 않았습니다. 분량 여유가 있고 논지를 강화하고 싶다면 한 줄 추가할 여지는 있으나, **필수 아님**.

---

## E. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — 치명적 오류 없음. **C-13(USENIX 수치) 1건만 반드시 반영**하고, C-2·C-3·C-5·C-10은 저자 판단에 따라 함께 반영 권고.
- [ ] 발행 보류

> 참고: 본문을 수정한 뒤에는 `node scripts/lint-post.mjs`를 재실행해야 합니다(daily-post 절대 규칙 7).

---

## F. 사용한 출처

1. https://www.burges-salmon.com/articles/102o9ee/getty-images-v-stability-ai-court-of-appeal-hearing/ (2026-11-12, 심리 2일차·양측 주장·BPI 보조참가)
2. https://www.cityam.com/getty-images-faces-london-ai-firm-in-court/ (2026-11-11, 심리 일정·게티 변론)
3. https://caselaw.nationalarchives.gov.uk/ewhc/ch/2025/2863 (1심 판결문 원문, 594·597·600항)
4. https://www.judiciary.uk/judgments/getty-images-v-stability-ai/ (판결문 PDF·재판관 표기)
5. https://www.lw.com/en/insights/getty-images-v-stability-ai-english-high-court-rejects-secondary-copyright-claim (600항 인용·RAM 대조·호스팅/다운로드 구분)
6. https://www.legislation.gov.uk/ukpga/1988/48/section/27 (s.27(2)(3) 원문)
7. https://www.legislation.gov.uk/ukpga/1988/48/section/17 (s.17(2)(6) 원문)
8. https://cms.law/en/int/legal-updates/getty-images-v-stability-ai-getty-unsuccessful-in-secondary-copyright-infringement-claim (무형물 article 최초 인정)
9. https://www.pinsentmasons.com/out-law/news/getty-images-stability-ai-copyright-claims-dropped (2025-06-25 청구 철회)
10. https://www.jonesday.com/en/insights/2025/07/the-uk-getty-trial-key-takeaways-on-the-aicopyright-case (철회 경위·사유)
11. https://ar5iv.labs.arxiv.org/html/2301.13188 · https://arxiv.org/abs/2301.13188 (Carlini et al., 추출 수치·중복 상관관계)
12. https://www.mlex.com/mlex/intellectual-property/articles/2548997 (항소심 보도, BPI 교차 확인)
13. https://commons.wikimedia.org/wiki/File:Royal_Courts_of_Justice_2019.jpg · https://commons.wikimedia.org/wiki/File:Stable_Diffusion_-_Rhino_X_Y_Plot_to_show_different_Steps.png (이미지 출처·라이선스)
