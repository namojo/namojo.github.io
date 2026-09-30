# Fact Check Report: 2026-10-01-sign-in-with-chatgpt-plan-usage-limit

검증일: 2026-10-01 (KST) / 검증자: fact-checker
대상: `_posts/2026-10-01-sign-in-with-chatgpt-plan-usage-limit.md`
브리프: `_workspace/daily/2026-10-01-brief.md`

**종합: CRITICAL 0건 / MINOR 9건 / UNVERIFIED 1건 → 발행 가능 (MINOR 반영 권고)**

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-10-01 (KST)
- **사건일:** 2026-09-29 OpenAI DevDay 2026 — **Fort Mason Center, Festival Pavilion, 샌프란시스코**, 키노트 10:00 PT (Sam Altman). 초고의 "9월 29일 샌프란시스코" 표기 ✓ 확인.

| 본문 언급 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| DevDay 2026 / Sign in with ChatGPT plan usage 공개 | 2026-09-29 | 이전 ✓ | 유지 |
| 신원(identity) 기능 베타 개시 "7월부터" | 2026-07-29~31 (매체별 29일/31일 편차, 베타·전 세계) | 이전 ✓ | 유지 |
| Cognition(Devin) 블로그 "같은 날" | 2026-09-29 | 이전 ✓ | 유지 |
| Pro 200 포함 사용량 축소 "10월 30일부터" | 2026-10-30 시행 | **이후(미래)** | ✓ 미래형("~부터 내려갑니다")으로 정확히 서술 — 문제 없음 |
| 기존 가입자 "10월 29일까지 현재 한도 유지" | 2026-10-29 | **이후(미래)** | ✓ 미래형 서술 — 문제 없음 |
| 사용 크레딧 "연말에 만료" | 2026-12-31 만료 | 이후(미래) | ✓ 정확 |
| "지난 2년간" (AI 앱 손익 프레임) | 서술적 기간 표현 | — | 유지 |

- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면", "지나고 보니" 등 **없음** ✓
- **용어 시점성:** ChatGPT Work(2026-07-09 도입), Codex, GPT-6 Pro, Pro 200/Pro 500, Ultrafast, Sign in with ChatGPT — 전부 2026-09-29 시점에 존재 ✓. MCP·A2A 등 미사용.
- **과거 글 자기참조:** "예전에 잘 팔릴수록 적자가 커지는 소프트웨어를 다룬 적이 있는데요" → `_posts/2026-09-23-harvey-negative-margin-open-weight-tenet.md` 실존 ✓. 날짜·'이 블로그' 없이 가볍게 참조 — 스타일 규율 준수 ✓.
- ⚠ **레포 housekeeping(초고 오류 아님):** `_style/ai-timeline.md`에 **DevDay 2026(09-29) 엔트리와 7월 Sign in with ChatGPT 엔트리가 아직 없음**. 파일 하단 "오늘" 마커도 2026-09-30에 멈춰 있음. 발행 후 갱신 필요.

**시점 규율 판정: 통과.** 발행일 이후 사건 인용 없음, 미래 시행일은 모두 미래형으로 표기.

---

## B. 우선 검증 항목 7건

### 1. Pro 200 포함 사용량 축소 수치·시행일 — ✓ 확인 (1차 출처)

- **검증 대상 문장:** "10월 30일부터 Pro 200 요금제의 ChatGPT Work·Codex 포함 사용량이 Plus 대비 20배에서 10배로 내려갑니다. GPT-6 Pro로 보낼 수 있는 채팅 메시지도 주 200건에서 100건으로 줄어요. 기존 가입자는 10월 29일까지 현재 한도를 유지하고"
- **출처:**
  - OpenAI 공식 릴리스 노트 — https://learn.chatgpt.com/docs/whats-new/devday-2026 : "Effective October 30, 2026 … Reduced from 20x to 10x … GPT-6 Pro weekly message limit: decreased to 100 (previously 200)"
  - TheNextWeb — https://thenextweb.com/news/openai-devday-pro-200-usage-cut-pro-500-plan : ChatGPT Work·Codex 사용량이 "from 20 times to 10 times the Plus allowance", "GPT-6 Pro messages in chat fall from 200 to 100 a week", "Current subscribers retain their existing limits through October 29"
- **판정:** ✓ **확인** — 수치·기준(Plus 대비)·대상(Work·Codex)·시행일·유예일 전부 일치. 자릿수 오류 없음.
- **수정안:** 없음.

### 2. $2,500 일회성 크레딧·연말 만료 / 5시간 한도 재도입 안 함 — ✓ 확인 (1차 출처)

- **검증 대상 문장:** "연말에 만료되는 일회성 사용 크레딧 2,500달러를 받습니다. 과거의 5시간 단위 한도는 다시 도입하지 않겠다고 했고"
- **출처:**
  - learn.chatgpt.com/docs/whats-new/devday-2026 : "$2,500 one-time usage credit available, expiring December 31, 2026"
  - TheNextWeb : "a one-time grant of usage credits worth $2,500, which expire at the end of the year" / OpenAI "will not reintroduce Pro 200's five-hour limit"
- **판정:** ✓ **확인**. "연말 만료" = 2026-12-31 ✓. 5시간 한도 관련 발언도 확인 — 원문은 **Pro 200의** 5시간 한도를 특정하며, 초고의 "과거의 5시간 단위 한도"는 이 범위와 충돌하지 않음.
- **수정안:** 없음. (선택) "과거 Pro 200에 있던 5시간 단위 한도"로 주체를 밝히면 더 정확.

### 3. Pro 500 — $500/월, Ultrafast, Codex 초당 300토큰, 표준 대비 8배 — ✓ 확인 / ⚠ 성격 규정에 MINOR

- **검증 대상 문장:** "월 500달러짜리 Pro 500 요금제가 신설됐습니다. Codex에서 초당 최대 300토큰까지 나오는 Ultrafast 전용 등급이고요."
- **출처:**
  - learn.chatgpt.com/docs/whats-new/devday-2026 : "Monthly subscription cost: $500 … Ultrafast performance: 300 tokens per second (approximately 8x faster)"
  - TheNextWeb : "Ultrafast generates up to 300 tokens per second in Codex, up to eight times faster than standard" / Pro 500은 "the only Pro plan with Ultrafast"
  - Simon Willison 라이브블로그 / dev.to 정리 : Pro 500은 **"25× the Plus allowance"**, Ultrafast는 **표준 단가의 6배** 과금
- **판정:** 수치 ✓ **확인**. 단 **MINOR 2건**:
  - (a) "Ultrafast **전용** 등급"은 원 사실("Ultrafast를 쓸 수 있는 **유일한** Pro 등급")과 어감이 다르며, "Ultrafast만 쓰는 등급"으로 오독될 수 있음.
  - (b) Pro 500이 **Plus 대비 25배 사용량**을 포함한다는 사실이 빠져 있음. 초고의 논지("한도가 절반이 됐다")를 오히려 선명하게 하는 사실이므로 넣는 편이 정확하고 유리함 — 10배로 내려간 한도 위에 25배 등급이 2.5배 가격으로 새로 생긴 구도.
- **수정안(MINOR-1, 22줄):**
  > 기존: "대신 월 500달러짜리 Pro 500 요금제가 신설됐습니다. Codex에서 초당 최대 300토큰까지 나오는 Ultrafast 전용 등급이고요."
  > 권고: "그리고 월 500달러짜리 Pro 500 요금제가 신설됐습니다. Plus 대비 25배 사용량에, Codex에서 초당 최대 300토큰까지 나오는 Ultrafast를 쓸 수 있는 유일한 등급이고요."
- **수정안(MINOR-2, 22줄 — 인식론 규율 관련):** 위 문장 앞의 접속사 **"대신"**은 "5시간 한도를 재도입하지 않겠다"는 발표와 "Pro 500 신설"을 **보상 관계로 묶는** 함의를 만듭니다. OpenAI는 두 항목을 그렇게 연결해 설명하지 않았습니다. **"대신" → "그리고"** 로 교체 권고(위 권고안에 반영).

### 4. 로그아웃 ≠ 해지, 해지 경로, 비복구·비삭제 — ✓ 확인 (OpenAI 1차 문서)

- **검증 대상 문장:** "앱에서 로그아웃하는 것으로는 연결이 끊기지 않는다 … 로그아웃한 뒤에도 그 앱의 사용이 내 요금제를 계속 소비할 수 있어요. 실제로 끊으려면 ChatGPT 설정에서 Security and login 아래의 Sign in with ChatGPT 항목까지 들어가 연결을 해제해야 합니다. 그렇게 끊어도 이미 소비된 사용량은 돌아오지 않고, 앱이 이미 받아 간 데이터도 삭제되지 않습니다."
- **출처:**
  - OpenAI 공식 문서 — https://learn.chatgpt.com/docs/sign-in-with-chatgpt : 해지 경로 **"Settings > Security and login > Sign in with ChatGPT"** 후 앱 선택·연결 해제. "Simply signing out of an app doesn't disconnect it; usage can continue until you formally disconnect." / 해제는 "does not reverse previously consumed usage nor recover data already transmitted to the app"
  - Notebookcheck — https://www.notebookcheck.net/ChatGPT-Plus-in-other-apps-signing-out-does-not-stop-the-usage.1411949.0.html : "Signing out of the app only ends your session there. The app stays connected to ChatGPT and can keep using your plan." / "Disconnecting does not restore usage that has already been counted, and it does not delete data the app has already received."
- **판정:** ✓ **확인** — 경로 문자열까지 1차 문서와 일치. 4개 하위 주장(연결 유지 / 소비 지속 가능 / 사용량 비복구 / 데이터 비삭제) 전부 확인.
- **수정안:** 없음. ("앱 제공사에 따로 요청해야 하는 일"도 Notebookcheck·OpenAI 문서 취지와 일치.)

### 5. 확정 표기 파트너 4곳 + 총수 16곳 — ✓ 확인

- **검증 대상 문장:** "출범 파트너는 16곳인데, 보도에서 반복 확인되는 이름은 Notion과 Vercel, Warp, 그리고 Cognition의 코딩 에이전트 Devin 정도이고 나머지는 매체마다 명단 구성이 조금씩 다릅니다."
- **출처 및 이름별 교차:**

| 이름 | 출처 | 판정 |
|---|---|---|
| **Devin (Cognition)** | 1차: https://devin.ai/blog/sign-in-with-chatgpt · Cognition 공식 X 게시물 · TechCrunch · The New Stack · dev.to · Notebookcheck | ✓ 확인 (1차) |
| **Notion** | TechCrunch · The New Stack · dev.to · Notebookcheck · Kingy AI | ✓ 확인 |
| **Vercel** | TechCrunch · The New Stack · dev.to · Notebookcheck · Kingy AI | ✓ 확인 |
| **Warp** | **1차: https://www.warp.dev/blog/sign-in-to-warp-with-chatgpt (2026-09-29, "use your subscription's included Work and Codex usage for AI requests in Warp")** · The New Stack("Sixteen launch partners are named, including OpenCode, Devin, Amp, Warp, Notion and Vercel, with Lovable coming soon") · Kingy AI | ✓ 확인 (1차) — ※ TechCrunch·Notebookcheck 기사에는 Warp 이름이 없으므로 "보도에서 반복 확인"의 근거는 Warp 자사 블로그 + The New Stack 계열 |
| 총수 **16곳** | TechCrunch("16 launch partners") · The New Stack("Sixteen launch partners") · dev.to("Launched with 16 partners including Devin, Notion, and Vercel") | ✓ 확인 |

- **판정:** ✓ **확인**. 철자도 정확(Notion / Vercel / Warp / Cognition / Devin). "매체마다 명단 구성이 조금씩 다릅니다"도 사실 — TechCrunch·Notebookcheck는 T3·OpenClaw·Dactyl을, The New Stack은 OpenCode·Amp를, Kingy AI는 Amp Code·Conductor·Hermes Agent·Hyperagent·Kilo Code·Vorflux를 열거.
- **MINOR-3 (14줄):** 일부 2차 매체(Kingy AI)는 "**plan usage 지원 11개 앱 + Lovable(예정) + 사인인 전용 5곳**"으로 분해해 적습니다. 즉 "16곳"에 **사인인 전용 파트너가 섞여 있을 가능성**이 있습니다. TechCrunch·The New Stack의 "16 launch partners" 표현을 그대로 쓰는 것은 안전하지만, 한 단어만 완화하면 이 편차를 흡수할 수 있습니다.
  > 권고: "출범 파트너는 16곳으로 발표됐는데," (← "출범 파트너는 16곳인데,")

### 6. 신원 기능의 7월 베타 시점 — ✓ 확인

- **검증 대상 문장:** "신원 확인 기능은 7월부터 베타로 전 세계에 열려 있었고, 이번에 붙은 것은 포함 사용량(plan usage)입니다."
- **출처:** RuntimeWire — https://runtimewire.com/article/openai-sign-in-with-chatgpt-identity-partner-apps : "began rolling out Sign in with ChatGPT on Friday, July 31st, 2026. The feature is currently in beta and **available globally to authenticated users, including members of Enterprise organizations**." / 초기 파트너 Airtable·GitLab·HubSpot·Notion·Supabase·Vercel. 보조: Supabase 공식 블로그 "Sign in with ChatGPT is in beta on Supabase".
- **판정:** ✓ **확인** — "7월부터", "베타", "전 세계" 세 요소 모두 확인. (개시일은 매체별 7/29~7/31 편차가 있으나 초고는 "7월부터"로만 적어 충돌 없음.)
- **수정안:** 없음.

### 7. 공유 범위·승인 구조·통제 장치 — ✓ 확인 (OpenAI 1차 문서)

- **검증 대상 문장:** "로그인 단계에서 앱으로 넘어가는 것은 이름과 이메일, 프로필 사진 세 가지입니다. 대화 내용도, 메모리도, API 키도 넘어가지 않아요. 포함 사용량은 그 위에 따로 얹히는 승인 단계입니다. … 앱별 주간 사용량 상한을 사용자가 직접 걸 수 있고, 포함 사용량을 다 쓴 뒤 따로 구매해 둔 크레딧까지 끌어다 쓰는 동작은 기본적으로 꺼져 있어서 사용자가 명시적으로 켜야 합니다."
- **출처:** OpenAI 공식 문서 https://learn.chatgpt.com/docs/sign-in-with-chatgpt : 공유 항목 "your name, email address, and profile picture" / "Using your plan does not give the app access to your ChatGPT conversations or memories" (API 키 미공유도 Notebookcheck가 "does not give it your conversations, memories or an API key"로 확인) / plan usage는 별도 동의 / "App limits"로 앱별 주간 상한 설정 / "By default, purchased credits are disabled for app usage" / 대상은 "eligible ChatGPT Plus and Pro subscribers".
- **판정:** ✓ **확인** — 5개 하위 주장 전부 1차 문서 확인.
- **MINOR-4 (14줄 및 36줄):** 공식 문서는 앱별 주간 상한이 **"전체 주간 사용량의 몇 퍼센트"** 형태(Notebookcheck: "sets the share of your overall weekly usage that the app may consume", Kingy AI: "an app's weekly cap is a percentage of overall weekly usage")라고 적습니다. 36줄의 "주간 상한을 **실제 값으로** 걸어 두는 일"은 절대값 설정처럼 읽힙니다. 이 정밀도는 초고의 "환산 규칙이 공개되지 않았다"는 논지와도 맞물리므로 살릴 가치가 있습니다.
  > 권고(36줄): "연결한 앱마다 주간 상한을 기본값에 맡기지 말고 직접 정해 두는 일(상한은 전체 주간 사용량의 비율로 걸립니다)."

---

## ⚠ C. 번역 인용 대조 (3건 — 전부 원문 확인)

### 인용 1 — Cognition/Devin (16줄)

- **초고:** "Devin에서의 사용량은 이미 당신의 요금제에 포함된 Codex 및 ChatGPT Work 사용량에서 차감됩니다"
- **영어 원문(확인):** *"Usage in Devin counts toward the Codex and ChatGPT Work usage already included in your plan."* — https://devin.ai/blog/sign-in-with-chatgpt (1차, 2026-09-29)
- **판정:** ✓ **확인 / 번역 충실**. "counts toward"를 "차감됩니다"로 옮긴 것은 직역은 아니지만, 같은 문서의 "draw down"과 OpenAI 문서의 "Usage draws from your existing plan limits"가 같은 방향을 가리키므로 **의미 왜곡 없음**.

### 인용 2 — Cognition/Devin (16줄)

- **초고:** "당신의 요금제가 각 세션의 OpenAI 모델 몫을 지불하고, 다른 모델들은 당신에게 포함된 Devin 할당량에서 차감됩니다."
- **영어 원문(확인):** *"Your plan pays for the OpenAI-model share of each session while other models draw down from your included Devin quota."* — 동일 출처.
- **판정:** ✓ **확인 / 번역 충실**. 절 구조·주체·대상 모두 정확. 초고의 해석("한 세션 안에서 청구서가 둘로 갈린다")도 원문 범위 안.
- 보강 확인: Cognition 공식 X 게시물 — "sign in to Devin with your ChatGPT Plus or Pro plan and all OpenAI model usage in Devin will drawn down from your quota. Now live in Devin Cloud, Devin Desktop, and Devin CLI."

### 인용 3 — OpenAI 문서 (18줄)

- **초고:** "포함된 사용량을 얼마나 빨리 소진하는지는 앱과 당신이 실행하는 작업에 따라 달라집니다."
- **영어 원문(확인):** *"How quickly you use your included usage depends on the app and the tasks you run."* — OpenAI 공식 문서 https://learn.chatgpt.com/docs/sign-in-with-chatgpt (Notebookcheck도 동일 문장 인용)
- **판정:** ✓ **확인 / 번역 충실**. 출처 귀속("OpenAI 문서가 내놓은 설명")도 정확 — 1차 문서에 실재하는 문장입니다.
- ※ 브리프와 작업 지시에 적힌 판본은 "the app and tasks you run"이지만 OpenAI 문서·Notebookcheck 실제 표기는 "the app and **the** tasks you run"입니다. 한국어 번역에는 영향 없음.

**번역 인용 총평: 3건 모두 원문 확인 완료. 확인 불가 인용 0건. 서술로 풀어쓸 필요 없음.**
**MINOR-5 (문체, 16줄):** 인용문 안의 "당신의/당신에게" 2회는 번역투로 읽힙니다. 의미 훼손 없이 "요금제가 각 세션의 OpenAI 모델 몫을 지불하고, 다른 모델들은 포함된 Devin 할당량에서 차감됩니다"로 다듬을 수 있습니다(인용의 정확성은 유지됨).

---

## D. 인식론적 절제 검사 (저자 규율 — 2026-09-13)

### D-1. 인과 단정 여부 — ✓ 통과

- 소제목이 이미 **"두 발표의 인과는 공개되지 않았습니다"**로 사정거리를 선언.
- 24줄에 필수 관용구 2개가 모두 존재:
  - "한쪽이 다른 쪽을 부른 걸까요? **그렇게 단정할 수는 없습니다.** OpenAI는 두 발표를 연결해 설명하지 않았고 한도 축소의 이유도 밝히지 않았습니다."
  - "**더 정확한 표현은,** 이제 여러 앱이 하나의 한도를 나누어 쓰게 되고 그 한도의 크기는 그중 한쪽이 정한다는 것까지입니다."
- 제목·excerpt·본문 다른 문단을 전수 검사한 결과 **인과를 단정하는 문장 없음**. 제목의 "같은 무대에서 그 한도는 절반이 됐습니다"는 병치이며 인과 주장이 아닙니다. 12줄도 "같은 행사에서 … 밝혔습니다"로 사실 진술.
- **판정: CRITICAL 아님.** 규율 준수.
- 유일한 잔여 지점이 **22줄의 접속사 "대신"**(→ MINOR-2, 위 B-3에 수정안 제시). 5시간 한도 미재도입과 Pro 500 신설을 보상 관계로 읽히게 하므로 "그리고"로 바꾸면 규율이 문장 단위까지 일관됩니다.

### D-2. 출처가 침묵한 지점의 명시 — 4/5 명시, 1건 정밀화 필요

| 브리프가 지정한 침묵 지점 | 본문 반영 | 판정 |
|---|---|---|
| ① 환산 규칙 미공개 | 18줄 "정작 공개되지 않은 것이 가장 중요한 숫자입니다 … 앱별로 가중치가 다른지, 에이전트가 내부에서 모델을 서른 번 부르면 그것이 몇 단위로 계산되는지는 적혀 있지 않습니다" | ✓ 명시 |
| ② 상업 조건·파트너 선정 기준 | 18줄 "파트너 16곳을 무슨 기준으로 골랐는지, OpenAI가 파트너에게 수수료를 받는지 아니면 반대로 단가를 깎아 주는지도 발표에 없었습니다" | ⚠ 부분 정밀화 필요 → MINOR-6 |
| ③ 한도 축소와의 인과 미설명 | 20·24줄 소제목 + 단정 회피 문장 | ✓ 명시 |
| ④ 적용 범위 불명 | 24줄 "포함 사용량이 Plus·Pro에만 적용되는지, Business·Enterprise는 어떻게 되는지, 팀 관리자가 이 연결을 막을 수단이 있는지조차 확인되지 않은 상태예요" | ✓ 명시 (사용자 측 Plus·Pro 대상은 문서 확인됨, "Plus·Pro에만"의 배타성과 Business·Enterprise·관리자 차단 수단은 실제로 미확인 — 문장 구조상 충돌 없음) |
| ⑤ 기업 감사 경로 부재 | 36줄 "조직 계정과 개인 구독의 경계를 어디에 그을 것인지", "감사 로그와 비용 배분을 설계할 때 미리 계산에 넣는 일" | ✓ 명시 |

- **MINOR-6 (18줄) — 선정 기준은 '전면 미공개'가 아니라 '부분 공개':** OpenAI 개발자 문서는 plan usage의 **자격 범주를 공개**하고 있습니다. https://developers.openai.com/cookbook/articles/sign-in-with-chatgpt : *"ChatGPT plan usage is available to open-source projects, personal projects that run locally, and selected private apps"*, 신원 연동 상용은 "a select group of commercial partners", 유료·원격 호스팅 앱은 **waitlist**. 공식 릴리스 노트도 "Commercial sign-in is currently in limited trials with select partners, while ChatGPT plan usage is available to open-source collaborators and certain private clients"라고 적습니다.
  즉 **"16곳을 무슨 기준으로 골랐는지"는 여전히 미공개(왜 그 16곳인지)이지만, "누가 이 경로에 올라탈 수 있는지"의 범주는 공개돼 있습니다.** 이 사실은 초고의 26줄 논지("이 경로는 OpenAI 구독자를 사용자로 가진 제품에서만 열립니다")를 한 겹 더 강하게 만들어 줍니다 — 게이트가 사용자 쪽에만 있는 게 아니라 **개발사 쪽에도** 있다는 뜻이니까요.
  > 권고(18줄 해당 문장 교체): "파트너 16곳을 하필 그 16곳으로 고른 기준이 무엇인지, OpenAI가 파트너에게 수수료를 받는지 아니면 반대로 단가를 깎아 주는지도 발표에 없었습니다. 문서가 밝혀 둔 것은 자격 범주까지입니다 — 포함 사용량은 오픈소스 프로젝트와 로컬에서 돌아가는 개인 프로젝트, 그리고 선별된 비공개 앱에 열려 있고, 유료로 호스팅되는 앱은 대기 명단에 이름을 올려야 합니다."
  > (26줄에 한 문장을 덧붙이는 방식도 가능: "게다가 지금은 이 문이 오픈소스·로컬 프로젝트와 선별된 앱에만 열려 있고, 나머지는 대기 명단입니다.")

---

## E. 사실 검증 — 잔여 항목

| # | 주장(본문 줄) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | "9월 29일 샌프란시스코에서 열린 DevDay 2026" (12) | ✓ 확인 | 2026-09-29, Fort Mason Center Festival Pavilion, SF, 키노트 10:00 PT | - |
| 2 | "월 200달러짜리 Pro 200" (12) | ✓ 확인 | TheNextWeb "$200 Pro allowance"; 요금제명이 월 요금 반영 | - |
| 3 | "포함 사용량을 … 절반으로 줄인다" (12) | ✓ 확인 | 20배→10배, 200건→100건 모두 정확히 1/2 | - |
| 4 | "내 요금제에 들어 있는 ChatGPT Work·Codex 사용량에서 깎여 나갑니다" (14) | ✓ 확인 | Devin 블로그(1차) + Warp 블로그(1차) 모두 "Work and Codex" 명시 | - |
| 5 | "그 앱에서 발생한 요청 가운데 **대상이 되는** 것들" (14) | ✓ 확인 | OpenAI "eligible" usage — 적격 요청 한정 표현이 정확 | - |
| 6 | "Cognition이 **같은 날** 올린 글" (16) | ✓ 확인 | devin.ai 블로그 2026-09-29, Cognition 공식 X 동일 일자 | - |
| 7 | "설정 화면은 앱별 사용량을 보여주지만, 어떤 동작이 그 사용량을 만들었는지는 보여주지 않고요" (18) / "앱별 사용량 화면이 무엇이 그 사용량을 만들었는지는 알려주지 않는다는 점" (36) | **? UNVERIFIED (부재 주장)** | 앱별 사용량 표시는 확인(OpenAI 문서 "App limits", Notebookcheck). 그러나 **"동작별 내역을 보여주지 않는다"를 명시한 출처는 없음** — 문서가 그 기능을 언급하지 않는다는 '침묵'에서 끌어낸 추론 | **완화 권고 → MINOR-7** |
| 8 | "회수 경로가 설정 화면 세 단계 아래에 놓인 것도 우연은 아니겠죠. 누군가 그렇게 그려 넣은 화면입니다." (32) | ⚠ 의도 추정(평론) | 경로 3단계는 사실 확인(Settings > Security and login > Sign in with ChatGPT). 설계 의도는 OpenAI가 밝히지 않음 | 추정형 어미("~겠죠")로 평론임이 드러나 **발행 가능**. 단정으로 바꾸지 말 것 → MINOR-8 |
| 9 | "로그아웃이 권한 회수가 아니라는 사실 자체는 2010년대 소셜 로그인에서 이미 다 겪은 일 … OAuth로 위임한 권한은 앱 세션과 수명이 다르다" (32) | ✓ 확인 | OAuth 2.0의 일반적 성질(액세스·리프레시 토큰의 수명이 앱 세션과 독립). 기술적 통념 | - |
| 10 | "지난 2년간 AI 앱의 손익을 결정한 항목은 사용자당 추론 비용" (26) | ✓ 정합 | 09-23 하비 사례(매출총이익률 50%→-50%, 토큰 사용량 20배)가 타임라인에 기록됨. 특정 수치를 끌어오지 않아 검증 부담 없음 | - |
| 11 | 고유명사 철자 전수 (OpenAI, ChatGPT, DevDay, Sign in with ChatGPT, plan usage, ChatGPT Work, Codex, GPT-6 Pro, Pro 200, Pro 500, Ultrafast, Notion, Vercel, Warp, Cognition, Devin, OAuth, Security and login) | ✓ 확인 | 전부 실제 표기와 일치. 인물명 미등장(허위 발언 인용 위험 0) | - |
| 12 | 병기 규칙 | ✓ 준수 | "포함 사용량(plan usage)" — 그날 처음 생긴 낯선 개념에 한글+병기 후 한글 단독(2026-08-12 규칙). 널리 알려진 이름(OpenAI·ChatGPT·Notion·Vercel·Warp·Devin·Codex)은 영어 단독 ✓ | - |
| 13 | `coverImage: ""` (8) + 하단 커버 크레딧 줄 없음 | ✓ 정합 | 커버 미첨부 상태이므로 hero 폴백. 크레딧 줄을 넣지 않는 것이 규칙에 맞음 | 실사 커버를 붙이면 본문 맨 끝에 `*커버 이미지: {피사체} — {출처}*` 추가 필요 |

- **MINOR-7 수정안 (18줄):**
  > 기존: "설정 화면은 앱별 사용량을 보여주지만, 어떤 동작이 그 사용량을 만들었는지는 보여주지 않고요."
  > 권고: "문서가 설명하는 설정 화면은 앱별 사용량까지이고, 어떤 동작이 그 사용량을 만들었는지에 대한 설명은 없습니다."
  > (36줄도 같은 결로: "앱별 사용량 화면에서 무엇이 그 사용량을 만들었는지까지는 문서에 언급이 없다는 점을, 감사 로그와 비용 배분을 설계할 때 미리 계산에 넣는 일입니다.")
  > 근거: 현재 문장은 UI를 직접 확인한 것처럼 읽히지만 확인된 것은 문서의 서술 범위입니다. '문서 기준'으로 한정하면 사실 주장이 되고, 논지는 그대로 유지됩니다.

- **MINOR-9 (선택, 12줄) — 날짜 표기 관례:** DevDay 키노트는 09-29 10:00 PT이므로 KST로는 09-30 새벽입니다. 국내 관례대로 현지 일자를 쓰는 것은 문제 없으나, 엄밀히 하려면 "현지시각 9월 29일"로 적을 수 있습니다. 발행을 막는 사안 아님.

---

## F. 수정 권고 (우선순위 순)

| 순위 | 등급 | 위치 | 조치 |
|---|---|---|---|
| 1 | MINOR-2 | 22줄 | "**대신** 월 500달러짜리" → "**그리고** 월 500달러짜리" (두 발표의 보상 관계 함의 제거 — 인식론 규율 일관성) |
| 2 | MINOR-1 | 22줄 | "Ultrafast 전용 등급" → "Plus 대비 25배 사용량에, … Ultrafast를 쓸 수 있는 유일한 등급" |
| 3 | MINOR-7 | 18·36줄 | 동작별 내역 부재를 **문서 기준**으로 한정 ("문서에 설명이 없습니다") |
| 4 | MINOR-6 | 18줄(또는 26줄) | plan usage 자격 범주(오픈소스·로컬 개인 프로젝트·선별 비공개 앱, 나머지 대기 명단)를 한 문장 추가 |
| 5 | MINOR-4 | 36줄 | 주간 상한이 **전체 주간 사용량의 비율**임을 명시 |
| 6 | MINOR-3 | 14줄 | "출범 파트너는 16곳인데" → "출범 파트너는 16곳으로 발표됐는데" |
| 7 | MINOR-5 | 16줄 | 인용문 번역투("당신의/당신에게") 다듬기 — 선택 |
| 8 | MINOR-8 | 32줄 | 현 추정형 유지(단정으로 바꾸지 말 것) — 조치 불요, 경고만 |
| 9 | MINOR-9 | 12줄 | "현지시각" 병기 — 선택 |
| 10 | 레포 | `_style/ai-timeline.md` | DevDay 2026(09-29) + 2026-07 Sign in with ChatGPT 베타 엔트리 추가, "오늘" 마커 갱신 |

---

## G. 종합 판정

- [x] **수정 후 발행 (권고)** — CRITICAL 0건. 우선 검증 7개 항목 전부 ✓ 확인(대부분 OpenAI 1차 문서 또는 파트너 1차 문서). 번역 인용 3건 모두 영어 원문 확인, 의미 왜곡 없음. 시점 규율 통과. 인과 단정 없음(필수 관용구 2개 존재).
- [ ] 발행 보류 — 해당 없음
- **그대로 발행해도 사실 오류는 없습니다.** 위 MINOR 1~5번(특히 1·2·7)은 정확도를 한 단계 올리고 인식론 규율을 문장 단위까지 일관되게 만들므로 반영 권고.

### 확인에 사용한 출처

- OpenAI 공식 — https://learn.chatgpt.com/docs/sign-in-with-chatgpt (공유 범위·승인·App limits·크레딧 기본 비활성·로그아웃≠해지·해지 경로·비복구/비삭제·Plus·Pro 자격·"How quickly…" 원문)
- OpenAI 공식 릴리스 노트 — https://learn.chatgpt.com/docs/whats-new/devday-2026 (20x→10x, GPT-6 Pro 200→100, 2026-10-30, $2,500/2026-12-31 만료, Pro 500 $500·300 tok/s·약 8배, 상용 제한 트라이얼)
- OpenAI 개발자 문서 — https://developers.openai.com/cookbook/articles/sign-in-with-chatgpt (plan usage 자격 범주·waitlist)
- Cognition/Devin 1차 — https://devin.ai/blog/sign-in-with-chatgpt (인용 2건 원문, Pro·Max·Teams, Cloud/Desktop/CLI, Fusion 39%) + Cognition 공식 X
- Warp 1차 — https://www.warp.dev/blog/sign-in-to-warp-with-chatgpt (2026-09-29, Work·Codex 포함 사용량)
- TheNextWeb — https://thenextweb.com/news/openai-devday-pro-200-usage-cut-pro-500-plan (Pro 200 축소 원문 표현, 10-29 유예, 5시간 한도 미재도입, "the only Pro plan with Ultrafast")
- Notebookcheck — https://www.notebookcheck.net/ChatGPT-Plus-in-other-apps-signing-out-does-not-stop-the-usage.1411949.0.html (로그아웃≠해지, 주간 상한=전체 사용량의 share, API 키 미공유)
- TechCrunch — https://techcrunch.com/2026/09/29/openais-latest-features-take-direct-aim-at-the-app-store-model/ (16 launch partners, Devin·Notion·Vercel·T3·OpenClaw·Dactyl)
- The New Stack — https://thenewstack.io/sign-in-with-chatgpt/ (16곳 명단에 OpenCode·Devin·Amp·Warp·Notion·Vercel, Lovable 예정)
- Simon Willison 라이브블로그 — https://simonwillison.net/2026/Sep/29/openai-devday-2026-live-blog/ (Pro 500 = 25x Plus, Ultrafast 6x 단가)
- dev.to DevDay 2026 정리 — https://dev.to/axrisi/openai-devday-2026-every-announcement-with-prices-and-availability-1mbh
- RuntimeWire — https://runtimewire.com/article/openai-sign-in-with-chatgpt-identity-partner-apps (7월 베타 개시·전 세계·초기 6개 파트너)
- Kingy AI — https://kingy.ai/blog/sign-in-with-chatgpt/ (plan usage 11개 앱 + 사인인 전용 분해, 주간 상한 비율)
