# 팩트체크 리포트 — 2026-09-08

대상: `_posts/2026-09-08-openai-agent-workdays-intervention-rate.md`

원문(openai.com/index/research-acceleration-view-inside-openai/)은 이 세션에서 HTTP 403으로 직접 열람할 수 없어, **서로 독립적인 2차 출처 5곳**으로 교차 검증했다.
(Help Net Security 2026-09-07 / unite.ai / DataStudios / Kingy AI / OfficeChai / Inside AI News)

## 검증 결과

| # | 본문 진술 | 판정 | 근거 |
|---|-----------|------|------|
| 1 | 발표는 현지 시각 9월 6일, 제목은 「Research acceleration: The view inside OpenAI」 | ✅ | unite.ai·InsideAI·OfficeChai 모두 9월 6일. Help Net Security만 9월 7일자 기사. 원문 URL 확인. |
| 2 | 사람 연구자 1근무일(8시간)당 에이전트 3.1근무일 | ✅ | 5개 출처 전부 동일 수치. "3.1 agent-workdays for every workday put in by a human researcher" |
| 3 | 에이전트 가동량이 사람 노동량을 넘어선 것은 올해 6월 이후 | ✅ | InsideAI·OfficeChai: 1:1 임계를 넘은 것이 2026년 6월. |
| 4 | 3.1은 생산성 3.1배를 뜻하지 않는다는 회사 자신의 단서 | ✅ | DataStudios: "explicitly warns this should not be interpreted as a 3.1× productivity gain". Kingy: "That does not mean one researcher suddenly became 3.1 times more productive. Agent runtime is not the same as valuable output." 병렬·중복·실패·강한 조종 가능성 명시. |
| 5 | 연구 진전이 활동량에 비례한다고 볼 수 없다 | ✅ | DataStudios: OpenAI가 연구 성과 증가를 직접 주장하지 않고 간접 지표(코드 기여 속도, 실험 건수)만 제시. |
| 6 | 중위 연구자 하루 600달러 초과 추론(API 정가 기준), 상위 10%는 7,000달러 초과 | ✅ | 5개 출처 동일. "at API prices" / "north of $7,000 a day" 표현 확인. |
| 7 | 600달러가 실지출이 아니라 API 정가 환산이라는 해석 | ✅ (해석) | 출처가 일관되게 "at API prices"로 한정. 자사 모델·자사 인프라라는 사실로부터의 저자 추론이며 본문에도 추론임이 드러나게 서술. 수치 자체를 왜곡하지 않음. |
| 8 | 4~8시간 규모 작업: 성공률은 1월~여름 상승, 성공한 건의 절반 초과가 사람 개입 최소 1회 | ✅ | DataStudios("success rates improved from January through July 2026", "over 50% of successful tasks... at least one human intervention"), Kingy, unite.ai, OfficeChai 일치. |
| 9 | 작업이 길어질수록 개입 의존도가 커진다 | ✅ | unite.ai: "agents require significant steering as complexity increases". DataStudios: "Longer tasks remain dependent on human steering". |
| 10 | '자동화된 연구 인턴' 정의 = 사람의 지시 아래 잘 정의된 연구 과제 수행, 숙련 연구자가 며칠 걸릴 일 포함 | ✅ | 원문 인용문 "a system that can carry out well-defined research tasks under human direction — including tasks that would take a skilled researcher a few days" 확인(검색 결과·unite.ai·Help Net Security). ※ OfficeChai만 "independently"로 옮겼으나 소수 표현이라 다수 출처를 따름. |
| 11 | 목표는 지난해 가을에 설정, 기한은 올해 9월 | ✅ | unite.ai·OfficeChai: 목표를 "last fall"에 세웠고 기한이 2026년 9월. |
| 12 | 에이전트가 못 하는 일: 연구 의제 설정, 자원 배분 결정, 결과 중요도 판단 / 사람이 쥐는 것: 우선순위·확대·중단·배포 결정 | ✅ | DataStudios·unite.ai·ai-tldr 모두 동일 취지. "humans retain control over research priorities, judge which results to pursue, and decide whether to scale, pause or deploy". |
| 13 | 다음 목표는 2028년 3월 '자동화된 AI 연구자', 설계에 사람 감독 잔존 | ✅ | 5개 출처 일치. DataStudios: "human supervision remains part of the target design". |
| 14 | 정렬된 완전한 재귀적 자기개선까지 안전하게 가는 법을 아직 모른다는 회사 진술 | ✅ | unite.ai·InsideAI 인용: "We do not yet know how to safely get all the way to aligned, full RSI." 본문은 직접 인용 대신 풀어 서술. |
| 15 | 지난 7월 프런티어 연구소 임직원들이 개발 속도 조절 수단을 정부에 요청 | ✅ | 본 블로그 2026-07-30 발행분(`pacing-the-frontier-letter-brake-pedal`)에 기록된 2026-07-28 'Pacing the Frontier' 공개 성명. |
| 16 | 로버트 솔로, 1987년, 노벨 경제학상 수상자 | ✅ | 솔로의 생산성 역설 문구는 1987년 New York Review of Books(7/12) 서평. 같은 해 노벨 경제학상 수상. 본문은 매체명을 특정하지 않아 인용 오류 위험 없음. |
| 17 | 컴퓨터 투자와 생산성 통계의 간극이 1990년대 후반에 좁혀지기 시작 | ✅ | 미국 생산성 반등은 1995년 이후로 널리 확립된 사실. |
| 18 | 커버 사진: 1515 서드 스트리트가 OpenAI가 우버에서 전대한 미션베이 사옥 | ✅ | SF Standard·SF Chronicle·The Real Deal: OpenAI가 1455·1515 서드 스트리트 두 동을 우버로부터 전대(48만 6,600 sq ft). 2024년 8월 파이오니어 빌딩에서 이전 완료. → **파이오니어 빌딩 사진을 쓰지 않은 이유이기도 하다.** |

## 사용하지 않기로 한 항목

- 일부 매체(Inside AI News, ai-tldr, OfficeChai)가 언급한 **7월 20일 연구 인프라 침해 및 2주간 RL 중단, 8월 7일 Astra 사이버 역량 관련 제한, Astra급 GPU 배정 59.2% 감소** — 매체 간 서술이 엇갈리고 1차 출처로 확인할 수 없어 본문에서 전면 배제.
- 같은 시기 보도된 GPT-6 Astra의 WebDev Arena 순위, FluidStack 투자 등 — 이번 논지와 무관해 제외.

## 시점 규율 점검

- 발행일 2026-09-08(KST) 기준. 9월 6일 발표를 "지난 주말"로 지칭 → 9월 6일은 일요일이므로 정확.
- 2028년 3월 목표를 달성된 것처럼 쓰지 않음(목표로만 서술). ✅
- '자동화된 연구 인턴'은 회사의 자체 선언이며 외부 검증이 아님을 본문이 드러냄. ✅

## 판정

**발행 가능.** 치명적 오류 없음.
