# Fact Check Report: google-heir-encrypted-inference-no-chatbot

발행 예정일 2026-08-17 (KST) / 검증 수행 2026-08-17

## A. 시점 일관성 (최우선 검사)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|-----------|---------|-----------|------|
| 구글 HEIR을 Private Computing Toolkit에 편입·데모 4종 공개 | 2026-08-14 (금) | 3일 전 ✓ | 유지 |
| "지난 금요일" 표현 | 2026-08-14는 실제 금요일 (`date -d` 확인) | 정확 ✓ | 유지 |
| tl;dv 파이어스토어 노출 공개 | 2026년 8월 초 (Dark Reading·Netizen 등 8/4 전후) | 이전 ✓ | 유지 |
| tl;dv 최초 제보 | 2026-01-28 | 이전 ✓ | 유지 |
| HE-LRM 논문 (arXiv 2506.18150) | 최초 2025-06-22, v4 2026-07-18 | 이전 ✓ | 유지 |
| 벨포트-LG 협업 결과(0.56초) | 구글 8/14 발표에 데모로 포함 | 이전 ✓ | 유지 |

- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" 등 미사용 ✓
- **용어 시점성:** 동형암호·HEIR·파이어스토어 모두 발행일에 존재 ✓
- **과장 방지 확인:** HEIR 프로젝트 자체는 이전부터 존재(깃허브 저장소, arXiv 2508.11095는 2025-08).
  본문은 "이번에 프라이빗 컴퓨팅 툴킷에 정식으로 편입했습니다"로 표현해 신규 창설로 오독될 여지 없음 ✓

## B. 사실 검증

| # | 주장 | 상태 | 증거 | 조치 |
|---|------|------|------|------|
| 1 | tl;dv 노출 회의 기록 181,874건 / 사용자 84,312명 / 도메인 35,003개 | ✓ 확인 | explainx, Dark Reading 등 복수 매체 일치 | - |
| 2 | 약 1,000건이 특정 시점에 녹화 중, conference ID로 외부인 입장 가능 | ✓ 확인 | 복수 매체 일치 | - |
| 3 | 노출 정부 도메인이 23개국 | ✓ 확인 | 복수 매체 일치 | - |
| 4 | 원인은 Firestore `meetings` 컬렉션의 테넌트 격리 규칙 누락, 무료 계정도 전체 조회 가능 | ✓ 확인 | explainx 상세 기술 | - |
| 5 | 2026-01-28 제보, 약 6개월 미조치 후 공개 직전 패치 | ✓ 확인 | explainx 타임라인 | - |
| 6 | 구글 HEIR 발표일 2026-08-14, 작성자 제러미 쿤(Staff Software Engineer) | ✓ 확인 | blog.google 원문 | - |
| 7 | Private Computing Toolkit 구성(차등 프라이버시·PSM·PIR·보안 엔클레이브 + 동형암호) | ✓ 확인 | blog.google 원문 | - |
| 8 | 데모 4종 = 딥러닝 추천 모델 / 카드 사기 탐지 / 네트워크 침입 탐지(Kitsune) / 호출어 감지 | ✓ 확인 | blog.google 원문 | - |
| 9 | 지연 시간이 단일 스레드 CPU 기준이라고 구글이 명시 | ✓ 확인 | blog.google: "latency numbers are presented for a single-threaded CPU" | - |
| 10 | 구글 인용 — 비용 부담은 있으나 능력/프라이버시 선택 문제를 비용 문제로 옮긴다 | ✓ 확인 | blog.google 원문: "while homomorphic encryption has a nontrivial cost overhead, it shifts the capability/privacy trade-off to a question of cost." 직접 인용부호 없이 풀어 옮김 | - |
| 11 | 가속기 파트너 4곳 = Belfort, Niobium, Cornami, Optalysys | ✓ 확인 | blog.google 원문 | - |
| 12 | 암호화 임베딩 조회 56배 개선 (client-side digit decomposition) | ✓ 확인 | arXiv 2506.18150 초록 + Belfort 블로그 | - |
| 13 | 단일 스레드 CPU 지연: 작은 데이터셋 24초, Criteo 228~489초 | ✓ 확인 | arXiv 2506.18150 | - |
| 14 | 벨포트 GPU 가속으로 400배 추가 → 0.56초 (약 4분에서) | ✓ 확인 | Belfort 공식 블로그. 산술 검증: 228초 ÷ 400 ≈ 0.57초 — 본문의 "4분 → 0.56초"와 정합 | - |
| 15 | 연구 프로토타입이며 상용 서비스가 아님 | ✓ 확인 | Belfort 블로그 명시 | - |
| 16 | 브랜던 리건 = 뉴욕대 조교수 | ✓ 확인 | NYU Tandon 교수 프로필 (Assistant Professor, ECE/CSE). 초고의 "교수 팀" → "조교수인 …의 연구팀"으로 수정 완료 | 수정 반영 |
| 17 | LG전자 미국 신기술연구소가 알고리즘 담당 | ✓ 확인 | Belfort 블로그("LG Electronics' Emerging Technology Lab") + arXiv 저자 소속(LG Electronics USA) + 제이컵 송 소재지 Santa Clara | - |
| 18 | 제이컵 송 = 신기술연구소장, 발언 내용 | ⚠→✓ 조치 완료 | 확인된 원문: "Our research team had already demonstrated significant algorithmic gains… What impressed us was how quickly Belfort's acceleration platform translated those advances into practical execution times." 초고에 있던 "상용화로 가는 길이 보인다"는 한 차례 조회에서만 나타나 교차 확인 실패 → **해당 구절 삭제하고 확인된 문장만 남기도록 수정** | 수정 반영 |
| 19 | 동형암호 원리 설명(잠긴 상자 비유, 열지 않고 덧셈·곱셈) | ✓ 확인 | 표준적 설명. 특정 수치 주장 없음 | - |
| 20 | "발상 자체는 오래됐습니다" | ✓ 확인 | 구체 연도·인물을 특정하지 않은 일반 서술이라 검증 위험 없음 | - |
| 21 | 회사명 표기 Cornami | ✓ 확인 | 초고의 "코나미"는 일본 게임사 Konami와 혼동 소지 → "코르나미(Cornami)"로 수정 | 수정 반영 |

## C. 수정 권고 및 반영 결과

1. [치명적 없음]
2. [경미·반영] 제이컵 송 발언에서 교차 확인 안 된 "상용화 경로" 구절 삭제 → 확인된 내용으로 교체
3. [경미·반영] "브랜던 리건 교수" → "뉴욕대 조교수인 브랜던 리건" (직함 정확화)
4. [경미·반영] "코나미(Cornami)" → "코르나미(Cornami)" (Konami 혼동 방지)
5. [경미·반영] 인물명 영문 병기 제거(제러미 쿤·브랜던 리건) — 스타일 가이드 6절 3항, 저자는 인명에 병기하지 않음
6. [경미·반영] "이달 초 …공개" / "이번 달 공개를 앞둔 시점" 중복 → 후자를 "공개 직전"으로 정리

## D. 종합 판정

- [x] **발행 가능** — 치명적 오류 없음. 경미 지적 5건 모두 본문에 반영 완료.
- 근거의 질: 핵심 주장 대부분이 1차 출처(구글 공식 블로그, arXiv 논문, Belfort 공식 블로그, NYU 교수 프로필)로 확인됨.
  tl;dv 사고만 1차 출처가 연구자 공개 글이라 복수 매체 교차 확인으로 대체했으며, 매체 간 수치가 모두 일치함.
