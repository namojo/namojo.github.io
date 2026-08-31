# 팩트체크 리포트 — 2026-09-01

포스트: `_posts/2026-09-01-anthropic-claude-code-limit-baseline.md`
제목: 25% 인상은 17% 감소였습니다 : 앤트로픽과 기준점

## 판정: 통과 (치명적 오류 없음)

초고 작성 중 4건을 정밀화했고, 발행을 막는 오류는 남지 않았다.

## 항목별 검증

| # | 본문 서술 | 검증 결과 | 출처 |
|---|-----------|-----------|------|
| 1 | 현지 시각 8월 29일 토요일 발표 | ✅ 확인. bleepingcomputer가 발표일을 8월 29일로 명기, 같은 날 notebookcheck도 보도. xenospectrum은 "일본 시각 8월 30일"이라 적었는데 이는 현지 8/29와 동일. 2026-08-29는 실제로 토요일 | 1, 2, 6 |
| 2 | 영구 25% 인상, 대상은 Pro·Max·Team·좌석 기반 Enterprise | ✅ 3개 출처 일치. xenospectrum: "individual Pro and Max plans, as well as the organizational Team and seat-based Enterprise plans" | 1, 2, 6 |
| 3 | 시행일 9월 14일 | ✅ 3개 출처 일치 | 1, 2, 6 |
| 4 | 임시 50% 상향, 2026-05-13 시작, 여름 동안 네 차례 연장 | ✅ notebookcheck·xenospectrum 모두 개시일 5월 13일 명기, "extended the deadline four separate times over the summer" | 2, 6 |
| 5 | 150% → 125%, 125÷150 = 0.833, 17% 감소 | ✅ 산수 검산 완료(0.8333, 감소율 16.67%). xenospectrum이 "(125−150)÷150 = 약 −16.666%"로 같은 계산 제시 | 6 + 자체 검산 |
| 6 | 앤트로픽 인용 "오늘과 비교하면 이것은 Claude Code 주간 한도의 17% 감소에 해당합니다" | ✅ 원문 "Compared to today, this works out to a 17% reduction in weekly limits on Claude Code." 직역 일치 | 1 |
| 7 | 발표 본문은 25%만, 감소분은 답글에 / 커뮤니티 노트 / 원 글 삭제 후 재게시 / 직원 인정 | ⚠️ **출처별 강조점이 갈린다.** notebookcheck: 감소 인정은 스레드 답글에 있었고 이용자들이 원 글에 커뮤니티 노트를 붙임. bleepingcomputer: 원 스레드를 삭제하고 해명과 함께 재게시. xenospectrum: 삭제·재게시 근거는 확인되지 않는다고 서술. → **조치:** 삭제·재게시는 "…라는 보도가 이어졌습니다"로 전문 표기로 낮추고, 답글·커뮤니티 노트는 사실로 서술. 단정 회피 완료 | 1, 2, 6 |
| 8 | 앤트로픽은 어떤 플랜에서도 한도의 절대 토큰 수를 공개하지 않고 배수만 공개 | ✅ 확인. "Anthropic publishes no token count for Claude Pro, and Anthropic does not publish a token count for any plan." | 8 |
| 9 | Pro는 5시간 세션 기준 무료 플랜의 최소 5배, Max 5x는 Pro의 5배, Max 20x는 Pro의 20배 | ✅ 확인. **초고 수정 1건:** 초고는 이 배수를 '주간 한도'의 배수처럼 읽히게 썼으나 실제로는 **5시간 세션 기준**이다 → "5시간 세션 기준으로"를 명시하고 "주간 한도의 절대 토큰 수" → "한도의 절대 토큰 수"로 정정 | 8 |
| 10 | 구독료가 보장하는 것은 작업량이 아니라 비율 | ✅ 출처의 서술과 일치: "The plan you pay for guarantees a ratio, not a fixed amount of work." | 8 |
| 11 | 사용량은 5시간 세션의 지분으로 계량되고 회사가 조정 권리 보유 / `/usage`는 비율만 표시 | ✅ 확인. `/usage` 명령과 Settings > Usage 화면 모두 자기 소비 비율·리셋 시각을 보여주며 상한의 절대값은 표시하지 않음 | 3, 8 |
| 12 | Sonnet 5 6월 출시, 100만 토큰당 입력 $2·출력 $10을 "8월 31일까지"로 명시, 9월 1일부터 $3/$15 인상 예정 | ✅ 확인. `_style/ai-timeline.md` 2026-06-30 항목과도 일치(intro $2/$10 → 이후 $3/$15) | 4, 5, 타임라인 |
| 13 | 8월 11일 도입가 영구화 발표, 인상 취소 | ✅ 공식 계정 원문 확인: "We're making Claude Sonnet 5's introductory pricing permanent. We launched Sonnet 5 in June at $2 per million input tokens and $10 per million output tokens through August 31, and that price will remain unchanged." | 5 |
| 14 | "오늘(9/1)이 원래 가격이 오르는 날" | ✅ 도입가 종료일이 8월 31일, 인상 예정일이 9월 1일이므로 KST 9월 1일 발행 시점 서술로 정확 | 4, 5 |
| 15 | 후속 계획 — 사용량 가시성·통제 확대 | ✅ 확인. "more visibility and control of your usage" | 1 |
| 16 | 앤트로픽이 8월 11일과 8월 29일 사이 "보름 남짓" | ✅ **초고 수정 1건:** 초고의 "3주 사이"는 18일이므로 부정확 → "보름 남짓 사이"로 정정 | 자체 계산 |

## 시점 규율 점검

- 발행일 2026-09-01(KST) 이후 사건 언급 없음. ✅
- 9월 14일 시행은 **예정**으로만 서술했고 완료된 일로 쓰지 않았다. ✅
- 사후 시점 표현("훗날", "돌이켜보면") 없음. ✅
- `_style/ai-timeline.md`와 충돌하는 서술 없음(Sonnet 5 출시일·가격 구조 일치). ✅

## 초고에서 수정한 4건 (요약)

1. 배수의 기준을 '주간 한도' → '5시간 세션'으로 정정 (항목 9).
2. 삭제·재게시 경위를 단정에서 전문(傳聞) 표기로 완화 (항목 7).
3. "3주 사이" → "보름 남짓 사이" (항목 16).
4. 발표일에 "현지 시각"을 붙여 시간대 혼동 제거 (항목 1).

## 미해결·의도적 생략

- xenospectrum이 지적한 앤트로픽 헬프센터(8월 31일 종료)와 발표(9월 14일 종료) 사이의 날짜 불일치는 단일 출처라 본문에 넣지 않았다. 논지를 보강하는 흥미로운 정황이지만 교차 확인이 안 됐다.
- 임시 상향 종료일이 9월 13일(출처 1)인지 9월 14일(출처 2·6)인지 갈린다. → 본문은 **"9월 14일부터 새 한도 적용"** 이라는 공통 표현만 사용해 우회했다.
- 커뮤니티 반응 중 "임시 조치는 어차피 끝날 예정이었으니 문제가 아니다"는 반론(출처 1의 댓글)은 논지상 유효한 반대 관점이지만, 본문이 이미 "정액 요금제에서 상한을 절대값으로 밝히기 어려운 사정은 이해할 만합니다" 단락으로 균형을 잡고 있어 중복 서술을 피했다.

## 이미지 검증

- 커버 `public/images/covers/anthropic-claude-code-limit-baseline.jpg` — Wikimedia Commons, 앤트로픽 샌프란시스코 사무실 실사(촬영 Department for Science, Innovation and Technology, CC BY 2.0). 출처는 `_workspace/image-credits-2026.md`에 기록. 사진 속 인물을 본문에서 특정하지 않았다.
- 본문 이미지 `...-numbers.jpg` — 위 검증된 수치만으로 렌더한 비교 도표. 그림 안 문자는 전부 영문(클라우드 환경에 한글 폰트가 없어 도표 내 한글 미포함), 한국어 설명은 캡션으로 제공. 캡션에 `*출처: 앤트로픽 공개 자료 정리*`로 자체 정리임을 명시해 사진·보도 이미지로 오인되지 않게 했다.

## 출처

1. https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-is-cutting-claude-codes-current-weekly-limits-by-17-percent/
2. https://www.notebookcheck.net/Anthropic-announces-a-25-increase-to-Claude-Code-limits-but-there-s-a-17-catch.1382735.0.html
3. https://www.explainx.ai/blog/claude-usage-limits-2026-timeline-explained
4. https://explainx.ai/blog/anthropic-sonnet-5-permanent-pricing-august-2026
5. https://x.com/claudeai/status/2086891169217122586
6. https://xenospectrum.com/en/claude-code-weekly-limit-change/
7. https://www.androidheadlines.com/2026/08/anthropic-claude-code-weekly-limits-update.html (403 — 검색 요약만 참조)
8. https://www.morphllm.com/claude-code-usage-limits
