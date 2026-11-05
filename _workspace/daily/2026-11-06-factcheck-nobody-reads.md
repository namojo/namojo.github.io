# Fact Check Report: 2026-11-06-code-nobody-reads-supervision-paradox

- 검증일: 2026-11-05
- 대상: `/home/user/namojo.github.io/_posts/2026-11-06-code-nobody-reads-supervision-paradox.md`
- 1차 출처(직접 열람·대조 완료):
  - Addy Osmani, "The Code Nobody Reads", Elevate, **Sep 28, 2026** — https://addyo.substack.com/p/the-code-nobody-reads
  - Addy Osmani, "Agentic Skill Decay", Elevate, **Aug 31, 2026** — https://addyo.substack.com/p/agentic-skill-decay
- 판정 요약: **✗ 2건(본문 수정 필요) + 발행 차단 이슈 1건(날짜 충돌) + ⚠ 8건**

---

## 0. 발행 차단 이슈 (사실오류는 아니나 먼저 처리할 것)

**같은 날짜·같은 저자 소재의 포스트가 두 편 존재한다.**

| 파일 | date | 소재 |
|---|---|---|
| `_posts/2026-11-06-code-nobody-reads-supervision-paradox.md` | 2026-11-06 10:00:00 +0900 | 오스마니 9/28 「The Code Nobody Reads」 |
| `_posts/2026-11-06-addy-osmani-agentic-verification.md` | **2026-11-06 10:00:00 +0900** | 오스마니 10/14 「Agentic Verification」 |

두 편 모두 "오스마니를 구글 사람으로 기억하는 분이 많을 텐데요. 지금은 앤트로픽에서 Claude Code를 만들고 있습니다."라는 **동일 문장**을 쓰고, **'같은 모델이 코드와 테스트를 모두 쓰면 오해가 공유된다'는 동일 논점**을 각각 전개한다(본 초고 38줄 / 다른 초고 22~26줄). CLAUDE.md 2026-07-06 항목의 중복 포스트 사고(같은 날짜·중복 엔트리 → 렌더링 중복)와 같은 구조다.

→ 조치: 둘 중 하나의 `date`를 다른 날로 옮기고, 남는 편에서 중복 소개 문장과 중복 논점을 덜어 낼 것. (오케스트레이터 판단 사항)

---

## A. 시점 일관성

- **발행일:** 2026-11-06 (검증 시점 2026-11-05, 즉 내일 발행)
- 본문에 등장하는 모든 시점 요소:

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 오스마니 「The Code Nobody Reads」 | 2026-09-28 | 이전 ✓ | 유지 |
| 오스마니 「Agentic Skill Decay」("8월 글") | 2026-08-31 | 이전 ✓ | 유지 |
| 앤트로픽 머지량 "올해 2분기" | 2026 Q2 | 이전 ✓ | 유지("올해" 표기 적정) |
| 오스마니 "2년 전" 에세이 | 원문 "Two years ago" (≈2024) | 이전 ✓ | 유지 |
| 마이크로소프트 코드 리뷰 연구 2013 | 2013 | 이전 ✓ | 유지 |
| 오스마니 앤트로픽 합류 | 2026-09-08 보도 | 이전 ✓ | 유지(단 B-1 ⚠ 참조) |

- **사후 시점 표현:** "훗날", "결국", "돌이켜보면" 류 없음 ✓
- **미래 시제 처리:** "3~5년에 걸쳐"는 원문 저자의 예측이며 본문도 "~거라고 보고요"로 전망임을 표시 ✓ (단 B-9의 범위 한정 누락은 별건)

---

## B. 사실 검증

### B-1. 제목·발행일·부제 — ✓ (부제 번역 ✓)

- 제목 "The Code Nobody Reads" ✓
- 발행일 페이지 표기 **"Sep 28, 2026"** ✓ — 본문 "9월 28일" 정확
- 원 부제 verbatim: **"Line-by-line review is going away. Whatever replaces it has to earn the trust reading used to provide."**
  본문: "줄 단위 리뷰는 사라지고 있고, 그 자리를 대신할 무엇은 읽기가 주던 신뢰를 스스로 벌어야 한다."
  → 의미·어순·강조점 모두 일치. "earn"을 "스스로 벌어야 한다"로 옮긴 것도 적절. **✓**

### B-2. 영어 인용 3건 한 글자 대조 — 전부 ✓

| 본문(12~34줄) | 원문 verbatim | 판정 |
|---|---|---|
| `Nobody reads eight times as much code carefully.` | "Nobody reads eight times as much code carefully." | **✓ 완전 일치** |
| `The problem isn't that nobody reads the code. It's that nothing replaced the reading.` | "The problem isn't that nobody reads the code. It's that nothing replaced the reading." (섹션 "When the reading stops and nothing replaces it" 서두) | **✓ 완전 일치** |
| `Order a team to stop reading and you haven't just removed a defect check. You've told them the bar is no longer theirs to hold.` | "Order a team to stop reading and you haven't just removed a defect check." / "You've told them the bar is no longer theirs to hold." | **✓ 완전 일치** |

아포스트로피 직선화는 레포 관례대로 문제 삼지 않음. 단어·어순·대소문자·마침표 모두 동일.

### B-3. 앤트로픽 8배 수치 — ✓ (⚠ 보완 2건)

- 원문: "the typical Anthropic engineer was merging about eight times as much code per day as in 2024" (2026년 2분기), 엔지니어를 "directing and reviewing, rather than typing"으로 묘사.
- **출처 구분 적절성: ✓.** 본문 "그가 인용한 앤트로픽 수치로"는 정확하다. 오스마니의 관찰이 아니라 앤트로픽 자체 발표를 인용한 것이고, 원문에도 링크가 걸려 있다("Even Anthropic's own write-up on its 8x output number…"라는 재언급이 그 근거).
- **⚠ (a) 원문이 붙인 유보가 빠졌다.** 원문: "Even Anthropic's own write-up on its 8x output number calls lines of code **'an imperfect measure.'**" 본문은 이 수치를 "입장을 바꾸게 한 숫자"로 세우므로, 발표자 본인이 단 유보를 생략하면 수치가 본문에서 원문보다 단단해 보인다.
- **⚠ (b)** 원문은 "the typical … engineer"(전형적인 엔지니어)인데 본문은 "엔지니어 한 명"이라 평균/대표값 뉘앙스가 빠졌고, 앤트로픽 소속임도 앞 구절에 기대고 있다.

### B-4. 마이크로소프트 2013 연구 — ✓

- 원문: "Finding defects was the top answer." / "Of the 570 review comments the researchers classified, only 14% were about defects." / 나머지는 "teaching, sharing context, suggesting better approaches and keeping team norms".
- 본문 22줄: "리뷰를 왜 하느냐고 물으면 결함을 찾으려고가 1위로 나오는데, 정작 분류된 리뷰 코멘트 570개 중 결함에 관한 것은 14%" + "주니어가 시니어의 사고방식을 넘겨받고, 팀이 무엇이 바뀌는지 알게 되고, 이 팀의 기준이 어디쯤인지가 계속 맞춰지는 자리" → **원문 4항목을 한국어로 풀어쓴 것으로 왜곡 없음. ✓**

### B-5. 앤트로픽 Trio 연구 (50 vs 67) — ✓ (⚠ 표기 2건)

- 출처 위치 ✓: **8/31 「Agentic Skill Decay」**에 있음. 본문 "그가 8월 글에서 든 앤트로픽 연구" 정확.
- 원문 verbatim: "There was a 2026 study by Anthropic looking at junior engineers learning a particular Python library, **Trio**." / "People who used AI assistants scored **50%** on a follow-up quiz against **67%** for the group who were working by hand."
- **단서를 오스마니 본인이 달았는가: ✓ 맞다.** verbatim: "Of course, this was a short-term study of just one Python library" … "so I wouldn't say it's conclusive necessarily". 본문 "짧은 기간에 라이브러리 하나로 본 것이라 결론으로 삼을 수는 없다고 그 자신이 단서를 답니다"는 **원문 그대로의 구조**다.
- **⚠ (a)** 원문은 퀴즈 **백분율**(50%/67%)인데 본문은 "50점/67점". 환산이 아니라 단위 치환이라 사소하지만 수치 표기는 원문을 따르는 편이 안전.
- **⚠ (b) Trio 미표기는 사실오류 아님**(원문도 "a particular Python library, Trio"로 라이브러리 하나임을 강조). 다만 고유명을 적어 두면 독자가 원 연구를 찾아갈 수 있다. 선택 사항.
- 참고(미반영 사실, 지적 아님): 원문은 "within the AI group, the strong results came from those who asked conceptual questions"라는 결을 덧붙인다.

### B-6. SQLite 15만 6천 줄 / 590배 — ✓

- 원문(9/28 글) verbatim: "The library is about 156,000 lines of C, and its test code is 590 times larger." → 본문 38줄과 일치. **9/28 글에 있는 수치가 맞다. ✓**
- 참고: 원문은 "가장 철저한 SQLite 테스트 스위트는 비공개(proprietary)"라는 점도 덧붙인다. 본문의 논지(증거의 독립성)에 필수는 아님.

### B-7. '감독의 역설' — ✓ (⚠ 표기 1건)

- 원문: **"Anthropic's researchers describe a 'paradox of supervision': supervising Claude well takes the very coding skills that fade if you never use them."** (섹션 "Keep your hands in")
- → (가) 9/28 글에 있다 ✓ (나) **앤트로픽의 표현을 오스마니가 인용한 것이 맞다. 오스마니의 조어가 아니다 ✓** (다) 본문의 한국어 풀이("클로드를 잘 감독하려면 쓰지 않으면 닳아 없어지는 바로 그 코딩 능력이 필요하다")는 원문 직역에 가깝다 ✓
- 앤트로픽 엔지니어의 의도적 비(非)클로드 작업 ✓: "**Some engineers there** deliberately solve problems without Claude now and then, even when they know it could handle it." 한 엔지니어는 "helps me keep myself sharp"라고 말함. 본문 "앤트로픽 엔지니어 중에는 일부러 클로드 없이 문제를 푸는 사람들이 있다"와 일치.
- **⚠** 원문 표현은 "paradox of supervision"이고 주어는 "Anthropic's **researchers**". 본문은 "앤트로픽이 … 부르는 것"으로 주체를 회사 전체로 넓혔다(사소).

### B-8. '찌그러짐 구역' — ✓ (⚠ 2건)

- 원 출처 ✓: **Madeleine Clare Elish**의 **"moral crumple zone"**. 원문: "Madeleine Clare Elish has a name for what happens to people at the edge of automated systems." + 링크 텍스트가 "the moral crumple zone".
- 설명 취지 일치 ✓: 원문 "In a car, the crumple zone is built to absorb the impact so the passengers don't have to." / "Their name is on the approval." / "the pace, the checks and the decision about what was worth reading were all made somewhere else." / "When something breaks, the incident review will find the human who approved it." / "They take the blame for a failure they had little real power to prevent."
  → 본문 "속도도 무엇을 점검할지도 다른 데서 정해지는데 사고가 나면 승인 버튼을 누른 사람이 받아 낸다"는 **원문 세 문장을 정확히 압축**했다. ✓
- **⚠ (a)** 본문은 "'찌그러짐 구역'이라는 **남의 용어**"라고만 쓰고 Elish를 익명 처리했다. 원문은 이름을 밝히므로, 인용의 인용에서 저작자가 사라진 모양이 된다.
- **⚠ (b)** 원 개념어는 "**moral** crumple zone"인데 '찌그러짐 구역'은 'moral'이 탈락했다. 본문의 쓰임(책임 전가)은 바로 그 'moral' 때문에 성립한다.

### B-9. "3~5년, diff에서 증거로" — ✗ **범위 한정 누락**

- 원문의 해당 대목은 **저자가 명시적으로 "내 추측"이라 선언한 예측 목록**이며("Here are my guesses, specific enough that you can hold me to them:"), 셋으로 갈라져 있다:
  - 소비자 소프트웨어·내부 도구·대부분의 SaaS: "a person reading every line of a routine change will be unusual **within two years**" (승인·책임은 사람이 유지)
  - **엔터프라이즈·금융 소프트웨어**: "agents will write most of the code on the same timeline, with human approval kept as a control. **Over three to five years, that approval shifts from the diff to the evidence.**"
  - 비행 제어·최고위험 의료기기: "people will keep reading line by line", 규제기관이 여러 해 동안 수용하지 않을 것.
- 본문 38줄은 한정 없이 "앞으로 3~5년에 걸쳐 승인의 대상이 diff에서 증거로 옮겨 갈 거라고 보고요"라고 써서, **엔터프라이즈·금융에 한정된 구간을 소프트웨어 전체의 일정으로 일반화**했다. 같은 글이 소비자/SaaS는 2년, 안전필수 영역은 "many years"로 갈라 두었으므로 사실 왜곡에 해당한다. **✗ 수정 필요.**

**대체 문구(38줄 두 번째 문장):**

> 그의 답은 증거입니다. 다만 일정은 영역마다 갈라 둡니다. 소비자 소프트웨어와 대부분의 SaaS는 2년 안에 줄 단위로 읽는 일이 드물어지고, 엔터프라이즈와 금융은 3~5년에 걸쳐 승인의 대상이 diff에서 증거로 옮겨 가고, 비행 제어나 고위험 의료기기는 한참 더 오래 줄 단위로 읽을 거라고요. 본인도 "내 추측"이라고 못 박은 구간입니다.

(분량을 줄이려면 최소 수정안: "앞으로" → "엔터프라이즈와 금융 쪽은".)

### B-10. 증거의 독립성 — ✗ **'옛 시스템'은 원문에 없음**

- 원문 verbatim: "A test written or controlled by the thing it's testing doesn't prove much." / "a second copy of the same model shares the first one's blind spots." / **"Real independence comes from a different source of truth: a spec a person wrote, a reference implementation, a proof."**
- 본문 38줄: "사람이 쓴 명세, 참조 구현, **옛 시스템** 같은 것들이요."
  → 앞의 두 개는 일치하나 세 번째가 다르다. 원문의 세 번째 항목은 **"a proof"(증명)**이고, 목록에 "older system"은 **없다**. (원문이 드는 다른 예는 Carlini의 C 컴파일러 프로젝트에서 **GCC를 known-good 참조로 쓴 사례**이며, 이는 '참조 구현' 항목에 속한다.)
- 참고: '옛 시스템을 정답지로 두는' 서술은 같은 날짜의 다른 초고 `_posts/2026-11-06-addy-osmani-agentic-verification.md` 26줄에 있다(그쪽은 10/14 「Agentic Verification」 근거). **두 초고 사이 교차 오염으로 보인다.** **✗ 수정 필요.**

**대체 문구:** "사람이 쓴 명세, 참조 구현, 수학적 증명 같은 것들이요."

### B-11. 개인용 처방 4개 — 전부 ✓

| 본문(40줄) | 원문 근거 | 판정 |
|---|---|---|
| 에이전트 돌리기 전에 무엇을 만드는지/무엇은 깨지면 안 되는지/됐다는 걸 어떻게 알지 적기 | "Before an agent touches anything, write down what you're building, what it must not break and how you'll know it worked." | ✓ 거의 직역 |
| "설명할 수 있나" 테스트 | "You don't need to have read every line, but you should be able to explain what the change does" (+ 무엇을 건드리는지, 왜 내보내도 되는지) | ✓ |
| 못 읽은 부분을 PR 설명에 적기 | "say so where people will see it, like the PR description: 'agent-reviewed, tests pass, I haven't read the migration logic.'" | ✓ 본문의 예시 나열("에이전트 리뷰 통과, 테스트 통과, 마이그레이션 로직은 안 읽었음")은 **원문 예시 그대로**다 |
| 가끔 손으로 풀기 | 섹션 "Keep your hands in" + "Some engineers there deliberately solve problems without Claude now and then" | ✓ |

### B-12. 관리자용 처방 3개 — 전부 ✓

| 본문(42줄) | 원문 근거(소제목 + 본문) | 판정 |
|---|---|---|
| 책임을 묻는다면 속도와 이해에 쓸 시간에 대한 발언권도 | **"Accountability needs authority."** + 책임지는 엔지니어는 "need a say in how fast changes go out and how much they get to understand first" | ✓ |
| 머지된 PR 수가 아니라 장애·롤백·복구 시간 | **"Measure what shipped, not how much"** — incidents, rollbacks, recovery time, 고객 경험 / merged PR·LOC 아님 | ✓ |
| 사람이 서명할 문서는 사람 크기로, 100쪽 보고서 말고 한 쪽 요약 | **"Keep what you ask people to sign human-sized"** + "A 100-page generated report nobody can read has the same problem as a 5,000-line diff nobody read." + "asking for the **one-page version** isn't obstruction. It's review." | ✓ "한 쪽짜리 요약"까지 원문 근거 있음 |

- 원문에는 이 밖에 "Make room for mentoring on purpose"(페어링·에이전트 변경 설명시키기)와 "Budget for understanding like any other capacity"가 더 있다. 본문이 둘을 생략한 것은 누락이지 오류가 아니다(단 후자는 B-14와 연결).

### B-13. 도입부 자기 번복 — ✓

- 원문: "Two years ago I wrote an essay about AI-assisted coding, and one of my tips was to review every line of generated code." / "I'd give that advice *very* differently today." / "Every change still needs *some* review and every change still needs a person who **owns the decision** to ship it." / "a careful human read of every line is no longer the only way to provide that review, or always the best one."
- 본문 14줄과 대체로 일치 ✓.
- **⚠** 본문은 "사람이 모든 줄을 읽는 것이 **그 책임을 지는** 유일한 방법은 아니라는 겁니다"로 옮겼는데, 원문이 "the only way to provide **that review**"라고 한 것은 **리뷰의 방법**이지 책임의 방법이 아니다. 원문은 책임(ownership)은 그대로 둔 채 리뷰 방식만 바꾸자는 구조이므로, 한 칸 어긋나면 "책임도 다른 방법으로 질 수 있다"로 읽힐 수 있다.
  → 권고: "…**그 리뷰를 제공하는** 유일한 방법은 아니라는 겁니다."

### B-14. 마지막 문단의 원문 근거 주장 — ✓

본문 46줄: "그 자신이 관리자용 처방에 **책임에는 권한이 따라야 한다**는 것과 **이해에 쓸 시간을 용량처럼 계획에 넣으라**는 것을 굳이 따로 적어 뒀다"

- 원문 소제목 **"Accountability needs authority."** ✓
- 원문 소제목 **"Budget for understanding like any other capacity."** (본문: "decide, area by area, how much human attention a change needs, and plan the work around that") ✓
- 두 항목이 **각각 별도 항목으로 나란히** 적혀 있는 것도 맞다. **✓ 근거 확인됨.** (46줄의 나머지는 저자 가정이므로 검증 대상 외)

### B-15. 인물 신원 — ⚠ 근거 약함(유지 가능)

- "오스마니를 구글 사람으로 기억하는 분이 많을 텐데요" ✓ — 구글/크롬 출신은 널리 확인됨.
- "지금은 앤트로픽에서 Claude Code를 만들고 있습니다" — **⚠**. 2026-09-08 본인 X 게시물을 받아쓴 복수 매체가 있으나 **전부 2차 애그리게이터**이고, 앤트로픽 공식 발표나 1차 확인은 찾지 못했다. 그의 Substack 소개란은 여전히 "an engineering leader with over a decade at Google"이며 현 고용주를 적지 않는다(9/28 글 하단에는 고용주를 밝히지 않는 면책 문구만 있음).
- 다만 ① 복수 매체 일치 ② "회사 견해가 아니다" 면책 ③ 글이 앤트로픽 내부 수치·엔지니어 관행을 내부자 톤으로 서술한다는 점에서 **유지해도 무방**하다고 본다. 더 안전하게 가려면 역할 단정만 덜어 낼 것.
  → 선택적 대체: "지금은 앤트로픽으로 자리를 옮겨 Claude Code 쪽 일을 하고 있습니다."
- 참고: 그가 앤트로픽 사람이라면 본문이 인용하는 앤트로픽 8배 수치·감독의 역설·사내 관행은 모두 **고용주 자료**다. B-3 ⚠(a)의 "imperfect measure" 유보를 살리면 이 결이 자연스럽게 해소된다.

### B-16. 오귀속 점검 — ✓ 1건 / ⚠ 1건

- **33줄 "읽기를 그만두는 것 자체보다 나쁜 모양이 있습니다" — ⚠.** 원문은 상향식/하향식을 **좋고 나쁨으로 줄 세우지 않는다.** 원문이 말하는 것은 "These tools usually spread bottom-up… This way of working was imposed top-down, and **that difference matters a lot**"이고, "worst possible order"는 *읽기를 멈추면서 대체 검사를 두지 않은 그 회사의 순서*를 가리킨다. 앞 문장 "제가 더 무섭게 읽은 건 그다음 대목이었습니다"가 화자 표시 역할을 하지만, 바로 뒤에 원문 내용이 이어져 **오스마니의 비교 판단으로 읽힐 여지**가 있다.
  → 권고: "읽기를 그만두는 것 자체보다 저를 더 걸리게 한 모양이 있었습니다." 또는 "그는 둘을 좋고 나쁨으로 줄 세우지는 않는데, 저는 이 모양이 더 걸렸습니다."
- **24줄 "리뷰를 걷어내면 결함 검사 하나가 빠지는 게 아닙니다" — ✓ 문제없음.** 이것은 사실상 오스마니 본인의 문장("you haven't just removed a defect check")과 같은 주장이므로 오귀속이 아니다. 다만 같은 취지가 34줄 영어 인용으로 **한 번 더** 나와 중복이다(사실 문제 아님, 편집 참고).
- 그 밖에 오스마니가 하지 않은 말을 그의 말로 돌린 곳은 **발견되지 않았다.** 44줄 "여기서부터는 글에 없는 제 생각입니다" 경계도 지켜져 있다.

---

## C. 수정 권고 (우선순위 순)

1. **[치명적·발행 차단]** 날짜 충돌: `2026-11-06-addy-osmani-agentic-verification.md`와 `date`가 분 단위까지 동일하고 소재·소개 문장·핵심 논점이 겹친다. 한 편을 다른 날로 옮기고 중복 문장을 덜 것.
2. **[치명적] 38줄 ✗** — "앞으로 3~5년에 걸쳐 승인의 대상이 diff에서 증거로 옮겨 갈 거라고 보고요."
   → **"다만 일정은 영역마다 갈라 둡니다. 소비자 소프트웨어와 대부분의 SaaS는 2년 안에 줄 단위로 읽는 일이 드물어지고, 엔터프라이즈와 금융은 3~5년에 걸쳐 승인의 대상이 diff에서 증거로 옮겨 가고, 비행 제어나 고위험 의료기기는 한참 더 오래 줄 단위로 읽을 거라고요. 본인도 '내 추측'이라고 못 박은 구간입니다."**
   (최소 수정: "앞으로" → "엔터프라이즈와 금융 쪽은")
3. **[치명적] 38줄 ✗** — "사람이 쓴 명세, 참조 구현, 옛 시스템 같은 것들이요."
   → **"사람이 쓴 명세, 참조 구현, 수학적 증명 같은 것들이요."**
4. **[중요] 16줄 ⚠** — 8배 수치에 원문이 붙인 유보 복원.
   → 문단 끝에 한 줄 추가: **"다만 앤트로픽 자신도 그 발표에서 코드 줄 수는 '불완전한 척도'라고 적어 뒀습니다."**
5. **[중요] 33줄 ⚠** — 오귀속 여지 제거.
   → **"읽기를 그만두는 것 자체보다 저를 더 걸리게 한 모양이 있었습니다."**
6. **[중요] 34줄 ⚠** — 개념어 저작자 복원.
   → **"그는 여기서 매들린 클레어 엘리시(Madeleine Clare Elish)의 '도덕적 찌그러짐 구역'이라는 말을 빌려 옵니다."**
7. **[경미] 14줄 ⚠** — "그 책임을 지는 유일한 방법" → **"그 리뷰를 제공하는 유일한 방법"**
8. **[경미] 30줄 ⚠** — "50점, … 67점" → **"50%, … 67%"**. 원하면 "파이썬 라이브러리 하나(Trio)"로 고유명 보강.
9. **[경미] 16줄 ⚠** — "엔지니어 한 명이" → **"앤트로픽의 보통 엔지니어 한 명이"**
10. **[경미] 28줄 ⚠** — "앤트로픽이 '감독의 역설'이라 부르는 것" → **"앤트로픽 연구진이 '감독의 역설(paradox of supervision)'이라 부르는 것"**
11. **[선택] 15줄 ⚠** — "지금은 앤트로픽에서 Claude Code를 만들고 있습니다" → **"지금은 앤트로픽으로 자리를 옮겨 Claude Code 쪽 일을 하고 있습니다."** (2차 매체만 존재, 직함·담당 범위 미공개)
12. **[선택·편집]** 24줄의 한국어 요약과 34줄 영어 인용이 같은 주장을 두 번 한다. 24줄을 "리뷰가 사실은 다른 일을 하고 있었던 겁니다" 정도로 덜어 내면 34줄 인용이 산다.

---

## D. 종합 판정

- [ ] 발행 가능
- [x] **수정 후 발행** — 사실오류 ✗ 2건(B-9 범위 한정 누락, B-10 '옛 시스템')은 반드시 고칠 것. 두 건 모두 한 문장 교체로 해결된다.
- [ ] 발행 보류

단, **C-1(동일 날짜 중복 포스트)은 사실 문제와 별개로 발행 전에 반드시 정리**해야 한다. 과거 같은 유형의 사고 선례가 있다(CLAUDE.md 2026-07-06).

핵심 인용 3건은 **한 글자도 틀리지 않았고**, 오스마니가 하지 않은 말을 그의 말로 돌린 곳도 없다. 수치의 출처 구분(인용 vs 본인 추정)도 Trio 연구의 단서 귀속까지 포함해 대체로 정확하다. 문제는 **예측의 적용 범위를 넓힌 것 하나**와 **옆 초고에서 섞여 들어온 항목 하나**다.
