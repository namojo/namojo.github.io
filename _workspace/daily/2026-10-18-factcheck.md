# 팩트체크 리포트 — 2026-10-18

대상: `_posts/2026-10-18-google-willow-magic-state-cultivation.md`
결과: **통과** (치명적 오류 0건, 경미 수정 1건 반영)

## 검증 항목

| 항목 | 본문 서술 | 검증 | 출처 |
|------|----------|------|------|
| 게재일 | "10월 15일 사이언스에 논문" | ✅ 구글 블로그가 10-15에 "published today"로 게재 사실 명시 | blog.google(10-15), Quantum Computing Report |
| 논문명 | "Magic state cultivation on a superconducting quantum processor" | ✅ 일치. DOI 10.1126/science.aee7961 (science.org 본문은 403 페이월, 구글 블로그 링크·QCR 2중 확인) | QCR, blog.google |
| 칩·큐비트 수 | "105큐비트짜리 윌로우" | ✅ 윌로우 105 초전도 큐비트(정사각 격자) | QCR, The Quantum Insider |
| 충실도 | "T 상태의 논리 충실도 99.99%" | ✅ 99.99(1)%, 오류율 ≤ 0.0001 | QCR, blog.google("record logical fidelity of 99.99%") |
| 오류 감소 | "약 40배" | ✅ 구글 블로그 "reducing errors about 40x compared to without it" | blog.google |
| 길러내기 없을 때 결함률 | "1,000번에 네 번쯤" | ✅ "about 4 in 1,000 attempts produced a faulty state" | Scientific American |
| 통과율 | "통과율 8%, 시도의 92%가 쓰레기통" | ✅ 8% 유지 / 약 92% 폐기 | QCR(8% retained), Scientific American(92% discarded) |
| 부호 전환 | "거리 3 색 부호 → 거리 5 표면 부호, 접붙이기(grafting)" | ✅ "grafting states from a distance-3 color code to a distance-5 surface code" | blog.google, QCR |
| 접붙이기 단계 큐비트 | "105큐비트 중 54개" | ✅ 거리 5 단계에 54큐비트 | Scientific American, The Quantum Insider |
| 강화학습 보정 | "네 시간짜리 보정, 통과율 한 자릿수 개선" | ✅ 약 4시간 학습, 논리 오류 확률과 유지 비율을 각각 약 한 자릿수 개선 | The Quantum Insider |
| 접붙이기 후 오차 | "시뮬레이션 예측보다 일곱 배 높게" | ✅ "about seven times higher than simulations predicted" | The Quantum Insider |
| 자원 비중 | "양자컴퓨터 용량의 90~95%" + 본문에서 "자원 추정 문헌의 숫자이지 측정값 아님"으로 사정거리 명시 | ✅ 구글 블로그 "up to 95% of a quantum computer's entire capacity"는 추정치. 본문이 이 구분을 직접 밝힘 | blog.google, QCR |
| 정제 15-to-1 | "더러운 상태 15개 → 1개, p의 세제곱 수준" | ✅ Bravyi-Kitaev [[15,1,3]] 양자 리드-뮬러 부호, 출력 오류 O(p³) | arXiv 1501.01298, quant-ph/0411036 |
| 고츠먼-닐 | "클리퍼드만으로 짠 회로는 고전 컴퓨터로 효율적으로 흉내 가능" | ✅ 교과서 정리. 스태빌라이저 회로의 고전 시뮬레이션 가능성 | quant-ph/0411036 외 |
| 이스틴-닐 | "어떤 오류 정정 부호도 필요한 연산 전부를 횡단으로 내주지 않음" | ✅ "no quantum error-correcting code can have a universal set of transversal logical gates" | arXiv 2408.07764 |
| 3단계 구성 | 주입 → 길러내기 → 접붙이기(탈출) | ✅ 원 논문 2.1절 "injection stage, cultivation stage, escape stage" | arXiv 2409.17595 p.4 |
| "작은 부호에서 고치지 않고 버린다" | 본문 핵심 논지 | ✅ 원 논문 직접 서술: "we don't attempt to correct any errors at small code distances. Instead, we postselect using error detection." | arXiv 2409.17595 p.4 |
| 기법 고안자 | 본문에 미표기(논문 저자들로만 지칭) | — Gidney·Shutty·Jones 2024 (블로그 확인) | blog.google |
| RSA-2048 요구 수준 | "100억 번에 한 번" | ✅ "magic states that fail only once in 10 billion tries" | Scientific American |
| T 게이트 사용 횟수 | 초고 "쓸 만한 알고리즘은 수십억 번" → **수정**: "규모 있는 알고리즘 하나를 돌리는 데 수십억 번이 필요하다는 추정이 있으니" | ⚠ 경미. 모든 알고리즘에 해당하지 않으므로 추정 출처임을 드러내도록 완화. 근거: Gidney 2025, RSA-2048 1회 시도에 톨폴리 약 65억 개 | arXiv 2505.15917 |
| 구글의 한계 인정 | "더 큰 규모에서 보여야 한다" 취지 반영 | ✅ "still needs to demonstrate magic state cultivation at a larger scale" | blog.google |

## 시점 규율
- 기준일 2026-10-18(KST). 논문 게재(10-15)는 사흘 전 과거 사실로 서술 — 일관.
- "40배"·"99.99%"를 완료된 실험 결과로, 실용화는 미래 과제로 분리 서술 — 혼동 없음.
- `_style/ai-timeline.md`보다 미래의 사건을 과거처럼 쓴 곳 없음.

## 사정거리 긋기 확인 (09-13 규율)
본문이 직접 밝힌 한계: (1) 40배는 준비 한 단계의 오류 감소이지 전체 비용 40분의 1이 아님, (2) 90~95%는 추정 문헌 수치이지 윌로우 측정값 아님, (3) 현재 1만 번에 1번 대 RSA-2048의 100억 번에 1번, (4) 접붙이기 후 시뮬레이션 대비 7배 오차. 금지 관용구 사용 0회(lint 통과).

## 출처 바깥의 사고
버퍼 고갈 가정 1문단. "예측은 아닙니다"로 가정임을 명시했고, 근거(강화학습 보정으로 통과율이 한 자릿수 변동)를 함께 제시 — 규율 충족.
