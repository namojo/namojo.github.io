# Fact Check Report: google-pixel-11-tensor-g6-on-device-limit

**발행일:** 2026-08-13 (KST)
**초고:** `_posts/2026-08-13-google-pixel-11-tensor-g6-on-device-limit.md`
**판정: 발행 가능 (치명적 오류 없음. 검증 중 발견된 오류 1건은 수정 완료)**

---

## A. 시점 일관성 (최우선 검사)

| 본문에서 언급된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| Made by Google 2026 (픽셀 11·Tensor G6·픽셀 워치 5 공개) | 2026-08-12 (뉴욕, 수요일) | 하루 전 ✓ | 유지 |
| Gemini Nano 4 공개 | 2026-04 | 이전 ✓ | 유지 |
| Gemini Nano 4 실측 리뷰 (Android Authority) | 2026-04-11 | 이전 ✓ | 유지 |
| 메타의 로컬 구동 모델 공개 (본문에서 "예전에" 로 가볍게 참조) | 2026-08-10 | 이전 ✓ | 유지 |

- **본문 시점 표현:** "어제 뉴욕에서 열린" — 발행일 08-13 기준 08-12는 정확히 어제. ✓
- **사후 시점 표현 검사:** "훗날", "돌이켜보면", "결국", "나중에 밝혀진" — 전부 미검출 ✓
- **용어 시점성:** Tensor G6, Gemini Nano 4, Google AI Pro, Gboard Rambler, Magic Capture — 모두 발행일 시점에 존재 ✓
- **미래 사건 언급:** 없음 ✓ (픽셀 태그 11월 11일 출시는 본문에 쓰지 않음)

---

## B. 사실 검증

| # | 주장 | 상태 | 출처 | 조치 |
|---|------|------|------|------|
| 1 | Made by Google 2026이 8월 12일 뉴욕에서 열림 | ✓ 확인 | Google 공식 블로그, TechCrunch, 9to5Google (교차) | - |
| 2 | 픽셀 11 899달러, 기본 저장용량 256GB, RAM 12GB | ✓ 확인 | 9to5Google, TechCrunch (교차) | - |
| 3 | 프로 1,099 / 프로 XL 1,299 / 폴드 1,899달러 | ✓ 확인 | 9to5Google | - |
| 4 | 픽셀 워치 5 399달러부터 | ✓ 확인 | 9to5Google, TechCrunch (교차) | - |
| 5 | Tensor G6 TPU 연산량 50% 증가 | ✓ 확인 | **Google 공식 블로그** ("50% more TPU compute") | - |
| 6 | 온디바이스 AI 최대 3.5배 빠름 / 전력 3.5배 덜 씀 | ✓ 확인 | **Google 공식 블로그** (원문 "up to 3.5 times faster … up to 3.5 times less energy") | - |
| 7 | 메모리 대역폭 증가 | ⚠ 근거 약함 | Android Authority는 "higher memory bandwidth"라고만 적고 수치 미제공. 일부 매체는 "2x"로 보도하나 구글 발표문에 없음 | **초고에서 "두 배"를 "함께 올라갔다"로 완화 수정 완료** |
| 8 | TPU가 맡는 일: 음성 인식·전사, 문자 제안, Gboard Rambler, 카메라 수어 번역, Magic Capture(최대 500프레임), Live Translate | ✓ 확인 | Gadget Hacks, 9to5Google (교차) | - |
| 9 | 클라우드 의존: Gemini Intelligence(구글 문서 연동·일부 클라우드 처리), 이미지 생성, Video Boost | ✓ 확인 | Gadget Hacks | - |
| 10 | Google AI Pro 구독 필요, 미구독 시 사용량 제한 | ✓ 확인 | Gadget Hacks ("restrictive rate limits", "Google AI Pro subscription") | - |
| 11 | 픽셀 11 프로에 6개월 AI 이용권 포함 | ✓ 확인 | 9to5Google ("AI Access: Six months") | - |
| 12 | Gemini가 매장에 전화해 재고·가격 확인 후 요약 제공 | ✓ 확인 | 9to5Google, TechCrunch, 'Let Google Call'(Duplex 기반) 관련 보도 (교차) | - |
| 13 | 픽셀 워치 5 오프라인 Gemini — 별도 온디바이스 모델, 타이머·알람/밝기·모드/음악/앱 실행/운동 시작 | ✓ 확인 | 9to5Google 원문 인용 ("leverage another on-device model when you don't have your phone or internet") | - |
| 14 | Gemini Nano 4 — Fast 약 20억 파라미터 4.2GB, Full 약 40억 파라미터 5.9GB, 12GB 이상 RAM 권장 | ✓ 확인 | Android Authority 실측 리뷰 (2026-04-11) | - |
| 15 | 생성 속도 초당 5.3토큰(Full) / 19.14토큰(Fast) | ✗ **오류 → 수정 완료** | 이 수치는 **픽셀 10 프로 XL(Tensor G5)** 에서 측정된 값. 초고는 측정 하드웨어를 밝히지 않아 Tensor G6의 실측치로 오독될 수 있었음 | **본문에 "이전 세대인 Tensor G5를 얹은 픽셀 10 프로 XL에서 측정한 결과"로 하드웨어를 명시하고, "3.5배가 붙는다고 해도 문제의 성격은 그대로"라는 단서를 추가함** |
| 16 | "strawberry" 글자 세기 등 단순 과제 오답 | ✓ 확인 | Android Authority 실측 리뷰. 수정본에서 "같은 측정에서"로 출처 범위를 한정함 | - |
| 17 | Tensor G6가 TSMC 2나노 최초라는 보도는 있으나 구글 공식 발표문에 공정 노드 없음 | ✓ 확인 | **직접 교차 검증함.** Google 공식 블로그 2개 페이지(제품 발표문·행사 랜딩) 모두 공정 노드 미기재. Android Authority도 "Not disclosed by Google" 명시. 2나노 보도는 공급망 소식통(대만 Ctee 등) 기반 | - |
| 18 | 7코어 구성 — C1 Ultra 1개 4.1GHz, C1 Pro 성능 4개 3.4GHz, 효율 2개 2.65GHz | ✓ 확인 | Android Authority 스펙 + 본문 삽입 이미지(DevCheck 실기 화면: 4109 / 3379 / 2649MHz)가 상호 일치 | - |

---

## C. 이미지 검증

| 파일 | 내용 | 출처 표기 | 판정 |
|---|---|---|---|
| `covers/google-pixel-11-tensor-g6-on-device-limit.jpg` (커버) | Made by Google 2026 공식 제품군 이미지 | `_workspace/image-credits-2026.md`에 "Google" 기록 | ✓ |
| `covers/google-pixel-11-tensor-g6-on-device-limit-devcheck.jpg` (본문) | 픽셀 11 실기 DevCheck 화면 — Tensor G6 CPU 구성 | 본문 캡션 아래 `*출처: Android Authority*` + 크레딧 파일 기록 | ✓ |

- 본문 캡션("7코어라는 사실은 나오지만 공정 노드는 어디에도 표시되지 않습니다")이 이미지에서 실제로 확인되는 내용과 일치함 ✓

---

## D. 문체·표기 규율 검사

- 도입부 연도로 시작하지 않음 ✓ (최근 3편 중 08-10·08-11 두 편이 연도로 시작 → 이번은 템플릿 B 일상 관찰형 적용)
- 붙여쓰기 병기 미검출 ✓ / 의성어 영어 병기 없음 ✓
- 작은따옴표 대조 강조 미사용 ✓ (2026-08-12 저자 개고 반영)
- 소제목 4개, `### ▸` 프리픽스, 산문 완성 후 사후 삽입 ✓
- 금기 표현(이모지·해시태그·느낌표 남발·단정적 예언) 미검출 ✓
- 본문 3,200자 내외 — 목표 구간(2,500~4,500자) 내 ✓

---

## E. 최종 판정

**발행 승인.** 검증 과정에서 발견된 오류 1건(#15, 벤치마크 측정 하드웨어 미표기)과 근거 약한 수치 1건(#7, 메모리 대역폭 2배)은 본문에서 수정 완료했으며, 재검증 결과 남은 치명적 오류 없음.

**출처 URL**
- https://blog.google/products-and-platforms/devices/pixel/google-pixel-11-pro-xl/
- https://blog.google/products-and-platforms/devices/pixel/made-by-google-2026/
- https://techcrunch.com/2026/08/12/google-unveils-pixel-11-lineup-new-airtag-rival-and-gemini-features-at-made-by-google-2026/
- https://9to5google.com/2026/08/12/made-by-google-2026-announcements/
- https://9to5google.com/2026/08/12/pixel-watch-5-gemini-intelligence/
- https://www.androidauthority.com/google-tensor-g6-3695351/
- https://www.androidauthority.com/gemini-nano-4-benchmarks-3655763/
- https://android.gadgethacks.com/news/pixel-11-tensor-g6-tpu-upgrade-local-ai-gains-vs-cloud-limits/
