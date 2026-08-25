# 팩트체크 리포트 — 2026-08-26

대상: `_posts/2026-08-26-anthropic-claude-tag-silence-classifier.md`
검증 방식: 1차 출처(anthropic.com 발표문, claude.com 블로그) 직접 조회 + 2차 출처(벤처비트) 교차 확인.

## 항목별 검증

| 본문 서술 | 판정 | 근거 |
|---|---|---|
| 앤트로픽이 6월 23일 클로드 태그 공개 | 확인 | anthropic.com/news/introducing-claude-tag, 게시일 2026-06-23. Claude Enterprise·Team 베타 |
| "제품팀 코드의 65%를 사내 버전 클로드 태그가 만든다" | 확인 | 같은 발표문. **6월 시점 기준·코드에 한정**이라는 조건을 본문에서 "발표문에서"로 시점 고정 |
| 8월 13일 자사 블로그로 판단 구조 변경 공지 | 확인 | claude.com/blog/claude-tag-now-reads-even-more-of-the-room, 페이지 표기 날짜 "August 13, 2026" |
| 현지 시각 8월 24일 벤처비트가 정리 | 확인 | venturebeat.com 기사 게시일 2026-08-24. 기사는 발표를 "earlier this month"로 서술 — 8월 13일과 충돌 없음 |
| 경량 분류기가 메시지를 개별 평가해 이진 판단했다 | 확인 | 벤처비트: "lightweight classifier evaluated each Slack message in isolation", 이진 결정 |
| 그 분류기를 완전히 제거했다 | 확인 | 벤처비트 "removed entirely", 블로그 "With the classifier removed" |
| 채널 전체 대화 + 메모리 + 상시 지침으로 판단 | 확인 | 블로그 원문 |
| 약 30% 개선 | 확인 | 블로그 원문: "Claude is now roughly 30% better at determining when, and when not, to proactively respond." 자체 측정치이며 방법론 미공개 → 본문에 "앤트로픽의 자체 측정으로는", "측정 방법론은 공개되지 않았으니"로 명시 |
| 네 가지 선택지(인라인 답변 / 스레드 심층 작업 / 진행 중 작업에 편입 / 아무 말도 하지 않기) | 확인 | 블로그 원문 4개 항목과 1:1 대응 |
| 채점 기준에 "더 잘 답할 사람이 있는지"가 포함 | 확인 | 블로그 원문: "…whether there is a person better suited to respond" (rubric 항목) |
| 휴면 상태 진입, 태그되면 깨어남 | 확인 | 블로그: "…it goes to sleep." / 태그 시 활성화는 블로그·벤처비트 양쪽 서술 |
| 비용 인용문 | 확인 | 블로그 원문 직접 인용을 번역: "This update comes at no additional cost today. While holding more context does increase Claude Tag's usage, the additional context Claude Tag holds does not count toward usage or spend limits on any plan." |
| 스콧 화이트 직함(앤트로픽 엔터프라이즈 제품 총괄) | 확인 | 벤처비트: Scott White, Head of Product for Enterprise |
| 화이트가 향후 과금 확약 회피, "적극적인 실험" 표현 | 확인 | 벤처비트: declined to commit to future billability, "active experimentation" |
| "지식 노동은 소프트웨어 엔지니어링보다 훨씬 지저분하다" | 확인 | 벤처비트 인용 ("Knowledge work is much messier than software engineering.") |
| 거슬리는 에이전트가 도움이 안 되는 에이전트보다 나쁘다 | 확인 | 벤처비트: "an annoying agent is worse than an unhelpful one" — 본문은 직접 인용부호 없이 취지 서술로 처리 |
| Slack·Microsoft Teams도 채널 상주 에이전트를 내놓고 있다 | 확인 | Slack Agentforce, Teams 채널 에이전트 업계 보도 다수. 구체 수치는 본문에 쓰지 않음 |
| 국내 협업툴 AI 도입 명분이 알림 과부하 완화 | 확인(일반 서술) | 국내 협업툴 보도 종합. 수치·업체명은 인용하지 않아 과잉 주장 없음 |

## 시점 규율
- 오늘 날짜(KST) 2026-08-26 기준. "이번 달", "지난 6월 23일", "현지 시각 8월 24일" 모두 발행일 기준으로 정합.
- `_style/ai-timeline.md`보다 미래의 사건을 과거처럼 서술한 부분 없음.
- 발표와 완료를 혼동한 부분 없음. 향후 과금은 "확약하지 않았다"로 미확정 상태를 명시.

## 치명적 오류
없음. 수정 없이 발행 가능.

## 경미한 지적(수정 완료)
- "눈에 걸립니다" → "눈여겨볼 만합니다" (관용 표현 부정확)
- 소제목 중간 마침표 → 콜론 형식으로 통일
- "짜증나게 하는" → "거슬리는" (어휘 격조)
- "수백 명이 묶여 있고" → "수백 명이 들어와 있고" (자연스러운 술어)

## 이미지 출처
- 커버 `public/images/covers/anthropic-claude-tag-silence-classifier.jpg` — Unsplash, Annie Spratt (노트북을 놓고 한 테이블에 모여 일하는 팀)
- 본문 `…-badge.jpg` — Unsplash, Brian J. Tromp (읽지 않은 알림 6,753건이 쌓인 휴대폰 화면). 캡션에 알림 건수를 그대로 서술했고 사진 속 숫자와 일치.
- 위키미디어 커먼즈는 이 세션 실행 시점에 공유 이그레스 IP에 대한 API·이미지 호스트 429(rate limit)가 지속돼 사용하지 못했다. Unsplash는 정상 접근.
