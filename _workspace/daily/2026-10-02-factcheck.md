# 팩트체크 리포트 — 2026-10-02
포스트: `_posts/2026-10-02-google-suncatcher-mvp-orbit-heat.md`
판정: **통과 (발행 가능)**

## 검증 항목

| # | 본문 주장 | 판정 | 근거 |
|---|---|---|---|
| 1 | 현지시각 10월 1일 발사 | ✅ | space.com: 2026-10-01 11:22 a.m. PT, 밴덴버그. 발사 성공, 1단 귀환 착륙(약 7.5분 후), 해당 부스터 25번째 비행 |
| 2 | 밴덴버그 우주군기지 / 스페이스X 팰컨 9 / Transporter-18 | ✅ | space.com, keyt.com, Hardware Busters 일치 |
| 3 | 페이로드 130기 | ✅ | space.com "Google AI satellite, 129 other payloads" = 총 130. 본문을 "130기를 한꺼번에 태운"으로 총계 표현에 맞춰 교정함 |
| 4 | 위성 이름 MVP, 냉장고 크기, 구글·플래닛 공동 | ✅ | NPR, Hardware Busters, TechRadar |
| 5 | TPU 4개, 트릴리움 세대 = Cloud TPU v6e | ✅ | 구글 리서치 블로그(1차) + 복수 보도 |
| 6 | 태양전지 약 1 kW | ✅ | techblog.comsoc.org "roughly 1 kW … comparable to a household hair dryer" |
| 7 | 피차이 인용 "우리 TPU가 우주에서 살아남아 동작할 수 있을까요? 자, 이제 알아보려 합니다." / 발사 엿새 전 | ✅ | 원문 "Can our TPUs survive and operate in space? Well, we're going to find out", X, 2026-09-25 → 10-01까지 6일 |
| 8 | 81기 / 반경 1 km / 고도 650 km / 새벽-황혼 태양동기궤도 / 간격 100~200 m | ✅ | 구글 리서치 블로그(1차) |
| 9 | 빌스 "지상의 같은 패널보다 5~8배" | ✅ | 빌스 직접 발언. 구글 블로그는 "up to 8 times"로 표기 — 본문은 발언 쪽(5~8배)을 인용했고 범위가 블로그와 모순되지 않음 |
| 10 | **15분 가동 후 냉각 정지** (본문 핵심 축) | ✅ | Futurum("process short Gemini queries in roughly 15-minute windows before shutting down to cool"), techblog.comsoc.org, Hardware Busters 3곳 독립 일치 |
| 11 | 임무 1년, 궤도 잔류 약 6년 후 재진입 | ✅ | techblog.comsoc.org |
| 12 | 15 krad(Si)까지 TID 하드 페일 없음 / 차폐 시 5년 예상 750 rad(Si) | ✅ | 구글 리서치 블로그(1차) 및 arXiv 2511.19468 요약. HBM이 2 krad(Si) 이후 이상 징후라는 점도 일치 |
| 13 | 빌스 진동 시험 소감 | ✅ | "Tests like this rarely go as planned, so we were pleasantly surprised that the hardware held up to the force" |
| 14 | 2027년 초까지 위성 2기로 레이저 링크 시험 | ✅ | 구글 블로그 "by early 2027", Futurum "two-satellite launch in 2027" |
| 15 | 각 방향 800Gbps / 합계 1.6Tbps, **실험실 벤치** | ✅ | 구글 블로그(수치) + Futurum "Bench demonstrations using off-the-shelf DWDM optical transceivers achieved 800 Gbps unidirectional, 1.6 Tbps bidirectional" → '실험실 벤치' 표현 확정 |
| 16 | 위성군 목표 수십 Tbps | ✅ | 구글 블로그 "tens of terabits per second" |
| 17 | 요구 수준 10Tbps 안팎 vs 상용 위성 간 링크 1~100Gbps | ✅(출처 명시) | 10Tbps는 Futurum·Hardware Busters 2곳 일치. 1~100Gbps는 Hardware Busters 1곳 → 본문에서 "한 보도는 … 지적합니다"로 단일 출처임을 드러냄 |
| 18 | kg당 200달러 미만(2030년대 중반) / 스타십 의존 | ✅ | 구글 블로그(비용 전제), 스타십 의존 지적은 Hardware Busters |
| 19 | 구글이 밝힌 미해결 3가지: 열 관리·고대역 지상 통신·궤도 신뢰성 | ✅ | 구글 리서치 블로그(1차) 명시 |
| 20 | 정정 불가 오류율 수용 범위가 추론 워크로드 기준 | ✅ | Hardware Busters: "a rate the team judged likely acceptable for inference" |
| 21 | "거기서 모델을 학습시키겠다고 말한 사람은 아직 아무도 없습니다" | ✅ | Hardware Busters "Nobody is training Gemini up there." 편집적 서술로 수용 |

## 시점 규율
오늘(KST 2026-10-02) 기준. 발사는 현지시각 10-01(=KST 10-02 새벽)이므로 본문은 "현지시각 10월 1일"로 표기. 2027년 2기 링크 시험은 '예정'으로만 서술 — 완료형 혼동 없음. `_style/ai-timeline.md`보다 미래 사건을 과거처럼 쓴 곳 없음.

## 수정 이력 (초고 → 최종)
1. 페이로드 130기를 "함께 실려 있었습니다"(=별도 130기로 오독 가능) → "130기를 한꺼번에 태운"으로 총계 표현 교정
2. **`성단` → `위성군`** — 성단(star cluster)은 천문 용어 오용. 2곳 교정
3. 궤도 속도 "초속 7킬로미터로" → "초속 7킬로미터가 넘는 속도로" (고도 650 km 원궤도는 약 7.5 km/s)
4. 소제목 "두 자릿수 모자란 대역폭" ↔ 본문 "두세 자릿수의 간격" 불일치 → 소제목을 수치 표현에서 분리하고 본문을 "100배에서 1만 배 사이의 간격"으로 명확화 (10Tbps ÷ 1~100Gbps = 10²~10⁴)
5. 문체: `~인데요` 연속 중복 해소, 구어체 "때려 본" → "쬐어 본", "TPU 네 개에 1킬로와트짜리" 수식 정리

## 사용하지 않은 수치 (출처 부족)
- "라디에이터 300 W/m², 칩당 1.3 m²" — 2차 매체 1곳, 원문 표현이 깨져 있어(`333x`) 제외
- "발사 진동 50~100 g" — 단일 출처, 본문에서 수치 없이 서술

## 이미지
- 커버 `public/images/covers/google-suncatcher-mvp-orbit-heat.jpg` — Wikimedia Commons, Falcon 9 Transporter-6 발사 (U.S. Space Force / Joshua Conti, public domain). ⚠ Transporter-18 사진은 Commons에 아직 없어 같은 라이드셰어 시리즈의 Transporter-6 사진을 사용했고, 캡션·하단 크레딧에 **Transporter-6임을 명시**함 (Transporter-17 밴덴버그 사진을 먼저 받았으나 피사체가 식별 불가한 흐린 이미지라 폐기)
- 본문 1 `public/images/inline/suncatcher-planet-doves.jpg` — Commons, ISS에서 방출되는 플래닛 소형 위성
- 본문 2 `public/images/inline/suncatcher-iss-radiators.jpg` — Commons/NASA, ISS 라디에이터 패널
- 출처는 본문 인라인(`*출처: …*`) + 하단 커버 크레딧 + `_workspace/image-credits-2026.md` 3곳에 기록
