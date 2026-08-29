# 2026-08-30 팩트체크 리포트

**대상:** `_posts/2026-08-30-anthropic-pentagon-aup-first-amendment.md`
**검증자:** fact-checker 역할 (daily-post 파이프라인, 서브에이전트 미사용 — 정의 파일 직접 적용)
**결론:** **통과 (발행 가능)**. 초고 단계에서 치명적 오류 1건·경미 1건을 발견해 수정 완료. 재검증에서 잔여 치명적 오류 없음.

---

## 1. 시점 일관성 (최우선 검사)

| 항목 | 확인 |
|------|------|
| 발행일(KST) | 2026-08-30. `TZ=Asia/Seoul date +%F`로 확보 |
| 본문의 모든 사건이 발행일 이전인가 | **예.** 최신 사건은 2026-08-27(현지) 판결 |
| "지난주"라는 표현이 맞는가 | **예.** 8/27(목) → 8/30(일) 기준으로 지난주가 맞음 |
| `_style/ai-timeline.md`보다 미래 사건 언급 | 없음 |
| 사후 시점 표현("훗날", "돌이켜보면") | 없음 |
| 발표 "예정"과 "완료" 혼동 | 없음. 항소는 "의사 시사"로만 존재하므로 본문에 확정 사실로 쓰지 않았음(아예 언급하지 않음) |

---

## 2. 항목별 검증

| # | 본문 주장 | 판정 | 근거 |
|---|-----------|------|------|
| 1 | 현지 8/27 목요일 저녁, 캘리포니아 북부연방지방법원 리타 F. 린 판사 판결 | ✅ | 2026-08-27은 목요일(2026-08-30이 일요일임을 `date`로 확인). 다수 매체가 "Thursday evening" 발부·8/28자 보도. CNN URL은 08/27, Fortune·Forbes·TheHill·Decrypt는 08/28. **본문은 "현지 시각 8월 27일 목요일 저녁"으로 표기해 충돌 회피** |
| 2 | 59페이지 판결문 | ✅ | Decrypt("59 pages"), TheNextWeb("59-page order"), 검색 요약("59-page summary-judgment order") 교차 |
| 3 | 공급망 위험(supply chain risk) 지정 철회 명령 | ✅ | "ordered the designation be removed"(CNN 경유), TheNextWeb "government directed to withdraw directives" |
| 4 | 2025년 7월 CDAO가 앤트로픽·구글·xAI 3사에 각 최대 2억 달러 2년 계약, OpenAI는 한 달 앞섬 | ✅ **(초고 오류 수정됨)** | 초고는 "네 곳에 각각" 동시 부여로 썼으나, CDAO는 2025-07-14 앤트로픽·구글·xAI에 6억 달러를 균등 배분했고 **OpenAI 2억 달러는 그 전달 발표**된 별건. Breaking Defense·DefenseScoop·CNBC(2025-07-14)·PYMNTS 교차 확인 후 수정 |
| 5 | Claude가 기밀망에서 승인된 최초의 프런티어 모델 | ✅ | Mayer Brown 클라이언트 얼럿(로펌 1차 분석) "Claude became the first frontier model approved for use on classified networks" |
| 6 | 국방부가 앤트로픽의 이용정책(AUP)을 준수하기로 계약에서 합의 | ✅ | 동일 출처. 이 글의 논지를 지탱하는 핵심 팩트이므로 별도 검색으로 2회 확인 |
| 7 | AUP 금지 2항목 — 미국인 대상 대규모 국내 감시 / 인간 개입 없이 표적 선정·교전하는 완전 자율 무기 | ✅ | Mayer Brown 원문 표현과 일치. CBS·CNN·Axios 보도도 동일 |
| 8 | 국방부가 "모든 합법적 목적(all lawful purposes)" 무제한 사용을 요구 | ✅ | Mayer Brown·CNBC 인용 문구 일치 |
| 9 | 2026-02-27 금요일 오후 5시 1분 최종 시한 | ✅ | Mayer Brown "deadline of 5:01 p.m. on Friday, February 27". 2026-02-27이 금요일인지 확인 필요했고, 출처가 직접 "Friday"로 명시 |
| 10 | 같은 날 트럼프 대통령의 전 연방기관 사용 중단 지시 | ✅ | TechCrunch 2026-02-27·CNN 2026-02-27 교차 |
| 11 | 헤그세스 인용 — "효력 즉시 … 어떠한 상업적 활동도 할 수 없다" | ✅ | Just Security 인용 원문 "effective immediately, no contractor, supplier, or partner that does business with the United States military may conduct any commercial activity with Anthropic" |
| 12 | 일부 기관에 여섯 달 전환 기간 | ✅ **(초고 표현 수정됨)** | 초고는 "군이 쓰던 Claude는 여섯 달까지만"으로 좁게 단정. Mayer Brown은 "giving some agencies a six-month transition period", Just Security는 군의 Claude 사용을 "up to six months" 허용으로 기술 — 두 진술을 모두 포괄하도록 "일부 기관에는 여섯 달의 전환 기간"으로 완화 |
| 13 | 근거 조항이 미국 연방법전 10편 3252조로 **지목**됨 | ✅ | Just Security는 "likely authority"로 표현. 본문도 "근거로 지목된 조항"으로 단정을 피함 — 표현 적정 |
| 14 | 3252조 권한 범위는 NSS 조달 배제이지 전면 거래금지가 아님 | ✅ | Just Security § 3252(d)(2) 분석 요지와 일치 |
| 15 | 지난 3월 예비적 금지명령, 이번은 본안 판결 | ✅ | 2026-03-26 preliminary injunction(CNBC·Axios·NPR·CNN), 2026-08-27 summary judgment |
| 16 | 승소 4개 쟁점 (수정헌법 1조·5조·법률 권한 일탈·APA 자의성) | ✅ | Decrypt가 4개 청구를 명시. 검색 요약도 "retaliatory under the First Amendment, imposed without the pre-deprivation process the Fifth Amendment requires, outside the supply chain statute, and arbitrary and capricious"로 동일 |
| 17 | 영구적 금지명령 | ✅ | "ordered permanent injunctive relief" |
| 18 | 인용 — "'오만함'에 대해 공개적 본보기를 만들려는 욕구에 근거한 것이지, … 사보타주하리라고 볼 어떤 설명 가능한 근거에 따른 것이 아니다" | ✅ | Fortune 원문 "were based on a desire to make a public example out of Anthropic for its 'arrogance' in criticizing the government, not based on any articulable basis to believe that Anthropic would actually sabotage its model." 한국어 번역이 원문 구조·의미와 일치 |
| 19 | 인용 — "국가안보를 공허하게 들먹이는 것이 정부 비판자를 처벌하고 보복할 백지수표가 되지는 않습니다" | ✅ | 원문 "The empty invocation of national security is not a blank check to punish and retaliate against government critics" — 3개 매체 동일 인용 |
| 20 | 앤트로픽의 거부 근거가 "오늘의 기술" 기준이었다는 서술 | ✅ | "given its assessment of what today's technology can safely and reliably do"(Mayer Brown). 본문 큰따옴표는 "오늘의 기술"에만 걸어 과인용 회피 |
| 21 | 같은 시기 OpenAI의 국방부 기밀망 배포 계약 → #QuitGPT 운동 | ✅ | `_style/ai-timeline.md` 117행(2026-02, 250만 명 지지·언인스톨 295% 급증). 본문은 수치를 옮기지 않고 사실 관계만 언급 |

---

## 3. 발견·수정 내역

**치명적 1건 (수정 완료)**
- 항목 4. "2025년 7월 국방부가 네 곳에 각각" → OpenAI 계약은 한 달 앞선 별건. CDAO 발표 구조를 반영해 "앤트로픽·구글·xAI 세 곳 / 한 달 앞서 OpenAI"로 교정.

**경미 1건 (수정 완료)**
- 항목 12. 여섯 달 전환 기간의 적용 대상을 군으로 좁게 단정 → 출처 두 개를 모두 포괄하는 표현으로 완화.

**본문에서 의도적으로 배제한 항목 (출처 신뢰도·성격 문제)**
- 트럼프 지시문의 "RADICAL LEFT, WOKE COMPANY" 표현 — 소셜미디어 게시 기반이라 인용 성격을 길게 설명해야 해서 논지에 비해 부담이 큼. 생략.
- 국방부 메모의 "increasingly hostile manner through the press" — 위와 동일 사유로 생략.
- 지정 6개월간 앤트로픽의 매출·계약 피해 규모 — **공개 확인 불가**. 수치로 쓰지 않음.
- 법무부 항소 의사 — "signaled"에 그쳐 확정 사실이 아님. 본문에 넣지 않음.
- D.C. 항소법원 계류 별건 — 논지에 불필요.

---

## 4. 스타일 규율 점검 (품질 검수 4항목)

1. **오탈자·오기** — 문장 단위 재검토 완료. 날짜(8/27, 2/27, 2025-07, 2026-03)·인명(리타 F. 린, 피트 헤그세스, 도널드 트럼프)·기관명(캘리포니아 북부연방지방법원, CDAO) 철자 확인.
2. **조사·호응** — 4개 쟁점 나열을 "하나는 … 둘은 … 셋은 … 넷은 …"으로 병렬 통일(초고는 "하나였고요 / 둘 / 셋 / 넷이었습니다"로 어긋나 있었음).
3. **개념어·인용구** — 작은따옴표는 판결문 인용 안의 '오만함' 한 곳만. 추상적 대조에는 쓰지 않음(2026-08-12 저자 개고 규칙).
4. **어휘 격조** — "꺼내 든 도구와 실제로 휘두른 범위" 같은 비유적 조어를 "법이 준 권한보다 실제 조치가 훨씬 넓었던" 평이한 서술로 교체(저자가 명명하지 않은 조어 금지). 마무리의 "약관은 계속 짧게 읽힐 겁니다"도 조어라 판단해 "우리는 앞으로도 약관을 끝까지 읽지는 않을 겁니다"로 교체.

**도입부 다양화** — 최근 3편(08-27 역사 일화 / 08-28 인용 / 08-29 비유) 모두 연도로 시작하지 않았으나, 이번 글도 연도 없이 템플릿 B(일상 관찰형)로 열어 반복을 피함.

---

## 5. 출처

브리프(`2026-08-30-brief.md`)의 URL 목록과 동일. 핵심 재검증에 사용한 것:
- Mayer Brown 클라이언트 얼럿 (2025-07 계약 조건·AUP·2/27 시한) — 로펌 1차 분석
- Just Security (10 U.S.C. § 3252 권한 범위, 헤그세스 문구 원문)
- Fortune 2026-08-28 ('오만함' 인용)
- Decrypt 2026-08-28 (59페이지·4개 청구)
- TheNextWeb (N.D. Cal.·구제 수단·앤트로픽 입장)
- CNBC 2025-07-14 / Breaking Defense / DefenseScoop (CDAO 계약 구조)
- `_style/ai-timeline.md` 117행 (OpenAI 국방부 계약·#QuitGPT)
