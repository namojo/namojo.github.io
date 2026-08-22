# Fact Check Report: linear-ai-half-issues-total-time-up

**발행일:** 2026-08-23 (KST) / **초고:** `_posts/2026-08-23-linear-ai-half-issues-total-time-up.md`

## A. 시점 일관성 (최우선 검사)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|-----------|---------|-----------|------|
| 암달의 법칙 발표 (AFIPS 춘계 합동 컴퓨터 학회) | 1967년 | 이전 ✓ | 유지 |
| METR 무작위 대조 실험 공개 | 2025-07-10 | 이전 ✓ | 유지. 본문 표현 "지난해 7월"이 2026년 기준으로 정확 |
| 리니어 데이터 집계 구간 | 2024-06 ~ 2026-08 | 발행일까지 ✓ | 유지 |
| 리니어 리포트 공개 시점 | **페이지에 명시 없음**("EDITION 01", 2026) | — | 본문에서 특정 발표일을 단정하지 않고 "최근"으로 처리 ✓ |
| METR 실험이 쓴 모델 세대 | 2025년 초(Cursor Pro + Claude 3.5/3.7) | 이전 ✓ | 본문에 "2025년 초 모델"이라는 한계를 명시 ✓ |

- **사후 시점 표현 검사:** "훗날 드러나듯", "결국", "돌이켜보면" 없음 ✓
- **용어 시점성:** MCP, 코딩 에이전트, 풀 리퀘스트 — 모두 발행일에 통용 ✓
- **미래 사건 과거 서술:** 없음 ✓

## B. 사실 검증

| # | 주장 | 상태 | 증거 | 조치 |
|---|------|------|------|------|
| 1 | 진 암달이 IBM에서 System/360의 아키텍처를 총괄 | ✓ 확인 | ETHW/Wikipedia/Network World — "manager of architecture for the IBM System/360", "led the design of the System/360" | 초고의 "수석 아키텍트"를 원 표현에 더 가까운 **"아키텍처를 총괄했고"로 수정 완료** |
| 2 | 자기 이름을 딴 회사를 세워 IBM과 경쟁 | ✓ 확인 | Amdahl Corporation (IBM 호환 메인프레임). 연도는 본문에 쓰지 않음 | - |
| 3 | 암달의 법칙 1967년 학회 발표 | ✓ 확인 | 1967 AFIPS Spring Joint Computer Conference, 논문 "Validity of the single processor approach to achieving large scale computing capabilities" | - |
| 4 | 직렬 구간이 10%면 상한은 10배 | ✓ 확인 | 최대 속도 향상 = 1/x (x=직렬 비중) → 1/0.1 = 10. 본문 이미지(AmdahlsLaw.svg)의 병렬 90% 곡선이 10에서 평탄해지는 것과 일치 | - |
| 5 | 리니어 집계 구간 2024-06 ~ 2026-08, 유료 워크스페이스 한정 | ✓ 확인 | linear.app/data 1차 출처 | - |
| 6 | 도입률 분석 표본 유료 사용자 12만 7,000명 | ✓ 확인 | "N = 127,000 paid users, active in both January and June 2026" | - |
| 7 | 풀 리퀘스트 분석 표본 유료 워크스페이스 4만 7,900곳 | ✓ 확인 | "N = 47,900 paid workspaces (June 2026)" | - |
| 8 | 2년 전에는 이슈 1,000건 중 AI 작성이 1건 미만 | ✓ 확인 | 직접 인용 "Two years ago, fewer than one issue in a thousand was created by AI." | - |
| 9 | 지금은 만들어지는 것의 절반 가까이를 AI가 작성 | ✓ 확인 | "Teams now use AI to write just under half of everything created" | - |
| 10 | **AI 작성 이슈 주당 물량** | ✗ **오류 → 수정 완료** | 초고는 "주당 약 2,500건"으로 썼으나, 해당 차트 제목이 **"Issues created per week (thousands) by source"** — y축 단위가 **천 건**이다. 2,500은 250만 건을 뜻하므로 초고는 1,000배 축소된 자릿수 오류였다. | 자릿수 단정을 피하고 **"주당 수백만 건 규모로 올라와, 사람과 기존 연동이 만드는 양과 거의 같아졌어요"**로 교체 완료. 본문 뒷부분에서 "2,500건"을 세 번 반복한 문장도 수치 없이 재작성 완료 |
| 11 | 풀 리퀘스트 워크스페이스당 111% 증가 | ✓ 확인 | "Pull requests opened per workspace are up 111% since June 2024" | - |
| 12 | 코딩 에이전트 연결 팀 주당 21건 → 65건, 미연결 팀 8~10건 | ✓ 확인 | "from 21 to 65 PRs per team weekly", "flat at 8 to 10 PRs weekly" | - |
| 13 | 인용 ①"기존 작업에 쓰는 시간은 그대로 유지된 반면 AI 사용은 새로운 층의 작업으로 나타났고…전체 시간이 줄어드는 것이 아니라 늘어난다" | ✓ 확인 | 원문 "Time spent on existing tasks in Linear held while AI usage appeared as a new layer of work, meaning the overall time spent on product development is going up rather than down." 번역 충실 | - |
| 14 | 인용 ②"거의 모든 것이 위로 움직인 해에 고객 요청과 문서, 프로젝트에 쓴 시간은 그대로였다" | ✓ 확인 | 원문 "Time spent on customer requests, docs, and projects held steady in a year when nearly everything else in this report moved up." | 어순만 자연스럽게 조정(의미 동일) |
| 15 | 인용 ③"AI는 지금까지 팀이 무엇을 만들지 결정하는 방식보다 어떻게 실행하는지를 훨씬 많이 바꿨다" | ✓ 확인 | 원문 "AI has so far changed how teams execute far more than how they decide what to build." | - |
| 16 | METR 실험 설계: 숙련 오픈소스 개발자 16명, 실제 작업 246건, 작업별 AI 허용/금지 무작위 배정 | ✓ 확인 | metr.org 2025-07-10 공개 | - |
| 17 | METR 결과: 사전 예상 +24%, 사후 자기평가 +20%, 실측 −19% | ✓ 확인 | METR 공식 블로그 및 METR 공식 X 계정 게시 | - |
| 18 | 리니어가 다루지 않은 항목(AI 이슈 완료율, 코드 리뷰 소요 시간, PR 품질) | ✓ 확인 | 1차 출처 재확인 결과 세 항목 모두 리포트에 없음 → 본문의 "이 자료로 말할 수 없습니다"가 정확 | - |
| 19 | 리니어를 "프로젝트 관리 도구를 만드는" 회사로 소개 | ✓ 확인 | 이슈 트래킹·프로젝트 관리 SaaS | - |

### 함정 회피 기록
초고 작성 중 참고한 2차 블로그 여러 곳이 METR의 "체감 +20% / 실측 −19%" 수치를 **"LinearB의 2026년 800만 PR 벤치마크"** 결과로 잘못 귀속하고 있었다. 리니어(Linear)와 LinearB는 별개 회사이며, 해당 수치는 METR의 무작위 대조 실험 결과다. 본문은 METR로 정확히 귀속했고, 검증되지 않은 LinearB 수치(98%·91%·10% 등)는 **일절 인용하지 않았다.**

## C. 수정 권고 및 조치 결과

1. [치명적] AI 작성 이슈 "주당 약 2,500건" → **자릿수 오류(천 건 단위 차트)**. 수치 단정을 피한 표현으로 교체 **완료**. (항목 10)
2. [경미] "System/360의 수석 아키텍트" → 출처 표현에 맞춘 "아키텍처를 총괄했고"로 **완료**.
3. [경미] "AI 도구를 파는 회사가 자기 도구를 자랑하는 자료가 아니라" → 리니어도 AI 기능을 판매하는 이해관계자이므로 과한 중립성 부여. "벤치마크 점수로 도구의 성능을 주장하는 자료가 아니라"로 **완료**.
4. [경미] 리포트 공개 일자 미확인 → 특정 날짜를 쓰지 않고 "최근"으로 처리 **완료**.
5. [경미] 문장 다듬기: "무작위…무작위" 중복 제거, "그 사실이 그동안은" 어순 교정, "반드시 올라갑니다" → "올라갑니다"(단정적 표현 완화), 인용 ② 어순 조정 **완료**.

## D. 균형 서술 확인 (본문에 반영됨)

- 리니어 자사 텔레메트리이고 유료 워크스페이스 한정이며 업계 대표성이 없다 — 반영 ✓
- 리니어 밖(저장소·빌드·배포)에서 생긴 절약은 이 표에 잡히지 않는다 — 반영 ✓
- 리포트가 다루지 않은 것(완료율·리뷰 시간·PR 품질)은 이 자료로 말할 수 없다 — 반영 ✓
- 총 시간 증가가 도입 초기 학습 비용일 가능성 — 반영 ✓
- METR은 표본 16명·2025년 초 모델이라는 좁은 설계 — 반영 ✓

## E. 종합 판정

- [x] **수정 후 발행** — 치명적 자릿수 오류 1건(항목 10)을 포함해 총 5건을 교정 완료. 재검증 결과 남은 ✗·? 항목 없음. 발행 가능.
