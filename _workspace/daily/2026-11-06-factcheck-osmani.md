# Fact Check Report: 2026-11-06-addy-osmani-agentic-verification

- **대상:** `/home/user/namojo.github.io/_posts/2026-11-06-addy-osmani-agentic-verification.md`
- **1차 출처:** Addy Osmani, "Agentic Verification", Elevate (Substack), 2026-10-14 — https://addyo.substack.com/p/agentic-verification
- **보조 출처:** https://addyosmani.com/bio , Wikimedia Commons 파일 페이지
- **검증일:** 2026-11-05
- **종합:** ✗ **0건** / ⚠ 5건(전부 경미, 치명적 오류 없음) → **수정 후 발행**

---

## A. 시점 일관성

- 발행 예정일 **2026-11-06**, 원문 발행 **2026-10-14** → 발행일 이전 ✓
- 본문의 유일한 날짜 표현은 "10월 14일" ✓ (연도 생략, 당해 연도라 모호하지 않음)
- 사후 시점 표현("훗날", "결국", "돌이켜보면") 없음 ✓
- 오스마니의 앤트로픽 소속은 2026년 중 발생한 사실로, 발행일 기준 유효 ✓
- 용어(Claude Code, 속성 기반 테스트, E2E)는 모두 발행일에 통용 ✓

---

## B. 사실 검증

### B-1. 서지 정보

| # | 주장(본문 위치) | 상태 | 근거 |
|---|---|---|---|
| 1 | 글 제목 「Agentic Verification」 (12행) | ✓ | 원문 타이틀 동일 |
| 2 | 발행 "10월 14일" (12행) | ✓ | 페이지 표기 "Oct 14, 2026" |
| 3 | "자기 뉴스레터" (12행) | ✓ | Substack 'Elevate', 바이라인 Addy Osmani |
| 4 | 부제 취지 "병목이 코드를 쓰는 일에서 그것이 맞다는 걸 아는 일로 옮겨 갔다" (12행) | ✓ | 원 부제 "The bottleneck has moved from writing code to knowing it's correct." 직역으로 정확 |

### B-2. 영문 인용 한 글자 대조 (최우선 항목)

모두 **원문 본문(Addy Osmani 집필분)** 에 있으며, 독자 댓글이 아님을 별도 확인함. 차이는 굽은/곧은 아포스트로피뿐으로, 레포 관례상 문제 삼지 않음.

| # | 본문 행 | 인용문 | 상태 | 원문 위치 |
|---|---|---|---|---|
| 1 | 16 | "I would always prefer a much better feedback loop to a slightly better model." | ✓ 일치 | 본문 "Verification is the bottleneck" 절 |
| 2 | 22 | "A mock-based unit test might pass, and the feature could be broken because the agent and your test share a misunderstanding." | ✓ 일치 | 본문 E2E 절. 앞 문장 "Machines will often write code that passes checks but misses the big picture.", 뒤 문장 "An E2E test, on the other hand, is very hard to trick." |
| 3 | 28 | "Example tests say what should happen; properties say what must not." | ✓ 일치 | 본문 속성 테스트 절, 불릿 목록 뒤 |
| 4 | 32 | "Humans are kinder to bad testing infrastructure." | ✓ 일치 | 본문 "Make the loop fast and deterministic" 절 |
| 5 | 34 | "The agent, however, learns from the incentives of the loop." | ✓ 일치 | 같은 절, #4의 두 문장 뒤 |
| 6 | 42 | "Your job doesn't need to be reading each line of output, but you need to define what success looks like." | ✓ 일치 | 본문 "Write the check before the code" 절 (원문은 doesn't의 굽은 아포스트로피) |

> 참고: 본문 40행의 한국어 점검 질문은 원문 Note의 "(does this test actually distinguish correct from plausible-incorrect implementations?)" — 원문은 implementations 복수형이나, 본문은 영어를 인용하지 않고 한국어로 옮겼으므로 번역상 문제 없음. ✓

### B-3. 원문 내용 요약의 정확성

| # | 본문 행 | 주장 | 상태 | 원문 근거 |
|---|---|---|---|---|
| 7 | 22–24 | 모킹 단위 테스트가 통과해도 기능이 깨지는 이유 = 에이전트와 테스트가 오해를 공유 | ✓ | 인용 #2 그대로 |
| 8 | 26 | E2E는 실제 사용자 흐름을 돌리는 테스트이고 속이기 어렵다 | ✓ | "Write end-to-end tests that simulate real user flows and act as the ground truth.", "An E2E test, on the other hand, is very hard to trick." |
| 9 | 26 | 갈아엎는 작업에서는 옛 시스템을 정답지로 두고 같은 입력을 양쪽에 넣어 출력을 비교 | ✓ | "When doing a rewrite or migration, treat the old system as the oracle." / "run the old and new systems side by side with the same inputs" / "If there's a discrepancy in the outputs…" |
| 10 | 28 | E2E·차분·속성 세 가지를 권함 | ✓ | 세 절이 모두 본문에 존재 |
| 11 | 28 | 도구가 입력 수천 개를 생성 | ✓ | "a tool will generate hundreds or thousands of inputs to break it." |
| 12 | 28 | 깨지면 **최소 반례로 줄여서** 보여 줌 | ✓ | "the input is reduced to the minimal case that breaks the test" |
| 13 | 28 | 속성 예 "들어온 돈과 나간 돈이 맞는가" | ✓ | Invariants 항목의 "Money in is money out." |
| 14 | 28 | 속성 예 "두 번 해도 한 번 한 것과 같은가" | ✓ | "Idempotency: migrating, normalizing, or retrying the same thing twice has the same effect as doing it once." |
| 15 | 34 | 에이전트는 재시도가 통과로 가는 더 짧은 길임을 학습 | ✓ | "the agent will learn that sometimes just restarting the test is better than trying to fix the problem." / "it'll pick retrying as its preferred strategy." |
| 16 | 36 | 흔들리는 테스트를 즉시 격리/삭제 | ⚠ (→ C-2) | "Flaky tests are isolated from the main suite, and removed immediately." — 원문은 '격리 **그리고** 즉시 삭제'인데 본문은 "격리하거나 지우라"로 택일처럼 읽힘 |
| 17 | 40 | 테스트 명령을 에이전트가 쉽게 찾을 자리에 + 매 사이클 돌릴 만큼 빠르게(서브초) | ✓ | "Write a command that the agent can find and run easily, with any applicable quiet flags." / "Test suite runs fast enough to run in each cycle. For the core loop, subsecond is great." |
| 18 | 40 | 난수 시드·시계 고정·네트워크 통제 | ✓ | "Use seeded randomness, frozen clocks, controlled networking, and isolated state." |
| 19 | 40 | 출력은 짧고 구체적으로, 통과 로그보다 실패 지점 | ✓ | "Output is short and to the point. Specific messages about what failed are better than voluminous logs about what passed." |
| 20 | 40 | "30초 초과"만 찍히는 메시지는 쓸모없다 | ⚠ (→ C-1) | 원문은 E2E 절의 "'Timeout after 30s' tells you nothing." — 메시지 문구 번역이 원문과 다름 |
| 21 | 40 | 검증은 맥락이 빈 별도 에이전트에게 | ✓ | Note의 "fresh-context or separate reviewer agents for verification" |
| 22 | 40 | 생성된 테스트 자체도 산출물로 의심 | ✓ | Note의 "treating generated tests themselves as artifacts that need some scrutiny" |
| 23 | 40 | "이 테스트가 맞는 구현과 그럴듯하게 틀린 구현을 실제로 갈라내는가" | ✓ | Note 괄호의 원문 질문의 정확한 번역 |

### B-4. 인물·소속

| # | 본문 행 | 주장 | 상태 | 근거 |
|---|---|---|---|---|
| 24 | 14 | "지금은 앤트로픽에서 Claude Code를 만들고 있습니다" | ✓ | 본인 바이오: "as of 2026, a Member of Technical Staff at Anthropic, working on Claude Code." / "He departed Google in 2026 after 14 years, and joined Anthropic as a Member of Technical Staff". 2차 매체도 앤트로픽 합류·Claude Code 담당을 보도(직함은 미보도) |
| 25 | 14 | "오스마니를 구글 사람으로 기억하는 분이 많을 텐데요" | ✓ **서술 수위 적절** | 바이오상 구글 14년+(Chrome DevRel 총괄 → Google Cloud AI 디렉터). 본문은 기간·직함을 단정하지 않아 안전. 2차 매체들이 직함을 서로 다르게("Chrome engineering director" 등) 적고 있어 **구체 직함을 추가하지 않는 편이 낫다** |

### B-5. 커버 이미지

| # | 항목 | 상태 | 비고 |
|---|---|---|---|
| 26 | `coverImage: ""` 인데 하단 크레딧 줄이 있음 | ✓ 문제 없음 | `build_posts_json.py`가 빈 값일 때 `/images/covers/{slug}.jpg`를 자동 매칭. `public/images/covers/addy-osmani-agentic-verification.jpg` 실존 확인(1200×630) |
| 27 | 크레딧 "Wikimedia Commons, Deetah" | ✓ | Commons 파일 페이지 author 필드가 Deetah. (라이선스 Apache 2.0, 저작권 표기는 Michał Zalewski — 레포 정책은 '출처만 명기'라 현 표기로 충분) |
| 28 | 캡션 "afl-fuzz가 테스트 프로그램에 입력을 쏟아붓는 화면" | ⚠ (→ C-5) | 실제 이미지는 afl-fuzz의 **상태 대시보드**(실행 시간·경로·크래시 카운터). 틀린 설명은 아니나 화면이 보여 주는 것과 어긋남 |

---

## C. 수정 권고 (우선순위 순)

### C-1. [경미] 40행 — 번역된 오류 메시지가 원문과 다름

- 현재: `"30초 초과"만 찍히는 메시지는 아무 쓸모가 없습니다.`
- 원문: `"Timeout after 30s" tells you nothing.`
- 권고(택1):
  - `"30초 뒤 타임아웃"만 찍히는 메시지는 아무 쓸모가 없습니다.`
  - 또는 따옴표를 풀어 `타임아웃만 찍히고 끝나는 메시지는 아무 쓸모가 없습니다.`
- 사유: 따옴표 안에 든 문구는 독자가 원문 메시지로 읽는다. 지금 표기는 원문에 없는 문자열이다.

### C-2. [경미] 36행 — 'or'가 아니라 'and'

- 현재: `그래서 발견하는 즉시 격리하거나 지우라고 해요.`
- 원문: `Flaky tests are isolated from the main suite, and removed immediately.`
- 권고: `그래서 주 스위트에서 떼어 내고 즉시 지우라고 해요.`
- 사유: 원문은 격리 후 삭제까지를 한 묶음으로 요구한다. '거나'는 격리만 하고 두는 선택지를 허용하는 것처럼 읽힌다.

### C-3. [경미] 46행 — "끝에 가서"의 위치 서술이 원문 구성과 어긋남

- 현재: `오스마니도 그 틈을 알고 있어요. 그래서 끝에 가서 생성된 테스트를 의심하라고 하죠.`
- 사실: 해당 서술은 "What good looks like" 점검 목록 **뒤에 붙인 Note**에 있고, 그 뒤로 "Write the check before the code" 절이 더 이어진다(42행에 인용한 문장이 바로 그 절의 것). 글의 맨 끝이 아니다.
- 권고: `오스마니도 그 틈을 알고 있어요. 그래서 점검 목록 뒤에 생성된 테스트 자체도 의심하라는 단서를 달아 둡니다.`

### C-4. [경미·귀속] 36행 — 해석과 원문 주장의 경계

- 현재: `흔들리는 테스트의 우선순위가 여기서 바뀝니다. … 빚이 아니라 잘못된 교육 자료가 됩니다. 그래서 발견하는 즉시 격리하거나 지우라고 해요.`
- 판정: **오귀속까지는 아님.** 우선순위 격상은 원문에도 근거가 있고("A flaky test in the main suite is worse than no test at all, because it breaks trust in every other result."), '배운다/훈련시킨다'는 틀 역시 원문의 것이다("It's not merely a time sink - it's a training exercise."). '빚 vs 잘못된 교육 자료' 대비만 저자(블로거)의 표현이다.
- 다만 `그래서 … 라고 해요`가 바로 뒤에 붙어 **앞 문장까지 오스마니의 말로 읽힐 여지**가 있다. 또 레포 규칙(2026-08-12 '저자가 명명하지 않은 비유적 조어 금지')과도 걸친다.
- 권고(택1):
  - 화자 분리: `흔들리는 테스트는 여기서 '언젠가 고칠 것' 자리에 둘 수 없게 됩니다. 원문은 주 스위트의 흔들리는 테스트가 아예 없는 것만 못하다고 적고, 떼어 낸 뒤 즉시 지우라고 합니다.`
  - 비유 유지 시 소유 표시: `제 식으로 말하면 빚이 아니라 잘못된 교육 자료인 셈이죠.` 를 별도 문장으로 두고, 그다음에 `원문은 … 지우라고 합니다.`
- 질의하신 "이것이 그의 주장처럼 읽히는가"에 대한 답: **현 상태로도 치명적이지는 않으나, 위 분리 중 하나를 적용하면 완전히 안전해진다.**

### C-5. [경미] 52행 — 커버 캡션

- 현재: `afl-fuzz가 테스트 프로그램에 입력을 쏟아붓는 화면`
- 권고: `afl-fuzz가 테스트 프로그램을 퍼징하는 상태 화면`
- 사유: 이미지는 입력이 쏟아지는 장면이 아니라 실행 통계 대시보드다.

### 선택 사항 (수정 불필요)

- 12행에 뉴스레터 이름 'Elevate'를 넣어도 사실에 부합한다(`자기 뉴스레터 Elevate에`). 현 표기도 오류 아님.
- 24행 `사람이 짠 테스트도 물론 틀립니다. 다만 그건 대체로 다른 사람의 오해였어요.`는 원문에 없는 저자 해설이나, 원문 주장과 충돌하지 않고 일반론이라 사실 검증 대상 밖. 유지 가능.
- 26행 `그가 고르는 테스트들에는 공통점이 있습니다. 전부 그 오해를 함께 나눠 가질 수 없는 것들이에요.`는 저자의 종합이지만, 원문이 E2E를 "very hard to trick", 차분 테스트를 "treat the old system as the oracle"로 세운 것과 정합. 유지 가능.

---

## D. 검증 대상 아님 (명시적 분리 확인)

- 44행 `여기서부터는 글에 없는 제 생각입니다.` 이후 문단은 저자의 가정이며, 46행 끝에 `예측은 아니고, … 끌어낸 가정입니다`로 다시 한 번 표시됨 ✓ (레포 규칙의 '출처 바깥의 사고 1문단' + 가정 명시 조건 충족)
- 그 안의 사실성 주장 하나만 검증: `오스마니도 그 틈을 알고 있어요. 그래서 … 생성된 테스트를 의심하라고 하죠.` → **근거 있음 ✓** (Note의 "treating generated tests themselves as artifacts that need some scrutiny"). 단 위치 서술은 C-3 참조.
  - 보강 근거: 원문은 "A human still owns what ships but now they're reviewing evidence and not just diffs."라고도 적는다. 다만 **생성된 테스트를 누가 검증하는가는 원문이 명시하지 않는다** — 46행이 "그 의심에 답하는 건 결국 사람입니다"라고 쓴 것은 저자의 추론 구간 안에 있으므로 문제없음.

---

## E. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — ✗ 0건, ⚠ 5건(C-1~C-5 전부 경미). 영문 인용 6개는 전부 원문 본문과 일치하여 인용 조작 위험 없음.
- [ ] 발행 보류
