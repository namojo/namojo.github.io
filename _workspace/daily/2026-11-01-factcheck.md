# Fact Check Report: 2026-11-01-shared-ai-training-preference-robots-txt

검증일: 2026-10-31 (발행 예정일 2026-11-01 KST)
검증자: fact-checker
1차 확인분(구글·Bing 원문, 드래프트 전문)은 **전부 독립 재확인**했습니다. 재활용하지 않았습니다.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-01 (KST)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|-----------|---------|-----------|------|
| 구글 Search Central 블로그 "Supporting a shared AI training control for websites" | 2026-10-30 (Friday, October 30, 2026 — 본문 날짜줄 확인) | 이전 ✓ | 유지 |
| Bing 블로그 "Your content, your choice..." | 2026-10-30 (본문 확인) | 이전 ✓ | 유지 |
| 오픈AI "Making it easier for websites..." | 2026-10-30 (복수 2차 출처 일치. 원문은 403으로 재확인 불가) | 이전 ✓ | 유지 |
| IETF draft-kelley-aipref-training-preference-signal-00 | 2026-10-30 (드래프트 헤더 "30 October 2026", Datatracker revision 00) | 이전 ✓ | 유지 |
| MS NoArchive/NoCache를 AI 통제용으로 제공 시작 | 2023 (Bing 원문: "Microsoft was the first company to provide publisher controls for AI training and grounding in 2023") | 이전 ✓ | 유지(단, B-12 표기 주의) |
| Google-Extended | 2023 (구글 원문: "Google-Extended, the AI training control we've offered since 2023") | 이전 ✓ | 유지 |
| MS 새 선호 반영 개시 | 2027-02-01 | **이후 (미래)** | 미래형 서술 ✓ 유지 |
| MS NoArchive/NoCache 해석 종료 | 2027-03-01 | **이후 (미래)** | 미래형 서술 ✓ 유지 |
| 구글 지원 목표 | 2027 | **이후 (미래)** | 미래형 서술 ✓ 유지 |

- **"어제/지난주" 등 상대 표현:** 0건. 10월 30일을 날짜로 명기함 ✓
- **사후 시점 표현("훗날 드러나듯", "결국", "돌이켜보면"):** 0건 ✓
- **미래 일정을 완료형으로 쓴 곳:** 0건 ✓ (40줄 "2027년 2월 1일부터 ... 반영하고", "2027년 3월 1일 이후로는 ... 읽지 않습니다" — 모두 미래 일정 서술로 읽힘)
- **용어 시점성:** `robots.txt`·`RFC 9309`(2022)·`Google-Extended`·`GPTBot`(2023) 모두 발행일 이전 존재 ✓

**판정: 시점 규율 위반 없음.**

---

## B. 사실 검증

| # | 본문 줄 | 주장 | 상태 | 증거 | 조치 |
|---|------|------|------|------|------|
| 1 | 12 | "구글과 마이크로소프트, 오픈AI, **앤트로픽이** 10월 30일 **각자의 블로그에** 같은 내용을 올렸습니다" | **✗ 오류** | 구글·Bing·오픈AI 세 곳은 10-30 블로그 게시 확인. **앤트로픽의 블로그 글은 존재가 확인되지 않음.** 복수 2차 출처가 "Anthropic's employee wrote the draft; no company announcement found"로 명시. 팩트 카드도 앤트로픽은 '메일링리스트 공지(2차 출처)'로만 적고 있음 | **수정 필수** (C-1) |
| 2 | 12 | 드래프트도 같은 날(10-30) 올라옴 | ✓ 확인 | 드래프트 헤더 "30 October 2026" / Datatracker revision 00, 2026-10-30 | - |
| 3 | 12 | "쓴 사람은 앤트로픽의 케빈 켈리(Kevin Kelley)" | ✓ 확인 | 드래프트 헤더 "K. Kelley / Anthropic", Author's Address "Kevin Kelley / Anthropic". Datatracker 동일. **철자 Kelley(≠Kelly, ≠Wired의 Kevin Kelly)** 정확 | - |
| 4 | 16~20 | 예제 코드 블록 3줄 | ✓ 확인 | 드래프트 Figure 1과 **완전 일치** (`User-Agent: __usage_ai-training` / `Disallow: /` / `Allow: /press-kit/`) | - |
| 5 | 22 | "학습에는 쓰지 말되, `/press-kit/` 아래는 써도 좋다" | ✓ 확인 | 드래프트 §4.3/§4.4 "This policy token is not a directive for crawling behavior" — 본문이 '크롤링 차단'이 아니라 '용도 선호'로 정확히 옮김 | - |
| 6 | 26 | RFC 9309가 그 값을 '프로덕트 토큰'이라 부른다 | ✓ 확인 | RFC 9309 §2.2.1 "Crawlers set their own name, which is called a product token, to find relevant groups." | - |
| 7 | 26 | "크롤러가 스스로 '나는 Googlebot이다'라고 선언한 이름과 맞춰 보는 것 / 신원 확인 절차가 아니라 이름표" | ✓ 확인 | 동 §2.2.1. 매칭 주체가 크롤러 자신이고, 토큰은 크롤러가 스스로 정한 이름 — 서버측 신원 검증 절차 없음. 서술 정확 | - |
| 8 | 26 | "robots.txt의 그 줄이 HTTP User-Agent 헤더와 맞춰진다고 생각하기 쉽습니다. **그런데** ..." (헤더와의 관계를 부정하는 대조 구문) | **⚠ 정밀도 부족** | RFC 9309 §2.2.1은 둘을 **끊지 않음**: "The product token SHOULD be a substring of the identification string that the crawler sends to the service. For example, in the case of HTTP, the product token SHOULD be a substring in the User-Agent header." 즉 헤더와 **무관**한 게 아니라 '헤더 문자열의 부분집합이 되기를 SHOULD 권고'하는 느슨한 관계 | **보강 권고** (C-2) — 이 글의 중심 논지라 정밀도 중요 |
| 9 | 30 | "새 지시어도, 새 문법도 ... 드래프트가 **초록에** 먼저 적어 뒀다" | ✓ 확인 | Abstract 원문: "It introduces no new directive names and no new grammar: the path language, longest-match precedence, and group structure of robots.txt are not changed." | - |
| 10 | 30 | "경로 매칭 방식 / 긴 쪽이 이기는 우선순위 / 그룹을 나누는 구조 손대지 않았다" | ✓ 확인 | 위 Abstract와 1:1 대응 | - |
| 11 | 30 | "새 **파일**도 없습니다" | ⚠ 저자 부연(출처에 없음) | Abstract는 directive·grammar만 언급. 다만 robots.txt 안에서 끝난다는 사실의 자연스러운 함의 | 허용 가능 (수정 불필요) |
| 12 | 30 | "모르는 이름이 붙은 그룹은 원래 무시하게 돼 있다" | ✓ 확인 | RFC 9309 §2.2.1 "Crawlers MUST use case-insensitive matching to find the group that matches the product token and then obey the rules of the group." (매칭 안 되는 그룹은 따르지 않음) | - |
| 13 | 34 | "`User-Agent: *` 그룹은 이 토큰에 매칭되면 안 된다 / 드래프트가 MUST NOT이라고 썼다" | ✓ 확인 | 드래프트 §4.2 원문: "However, wildcard groups (i.e., User-Agent: *) MUST NOT be interpreted as matching the policy token." | - |
| 14 | 34 | 예시 "`User-Agent: *` 아래 `Disallow: /admin`" → "한 번도 말한 적 없는 학습 거부 의사" | ⚠ 예시 적합성 | 논리는 성립하나, `/admin`만 막아 둔 사이트는 '전면 학습 거부'가 아니라 '/admin 학습 거부'로 읽힐 뿐이라 위험의 크기가 덜 드러남. `Disallow: /`가 더 강한 예시 | 선택적 교체 (C-5) |
| 15 | 36 | `__` 접두사 이유 = "배포된 파서 중 일부가 느슨하게 맞춘다" | ✓ 확인 | 드래프트 §4.1 원문: "(Note that some deployed parsers match more flexibly; the __ prefix makes accidental matches unlikely.)" | - |
| 16 | 36 | **직접 인용** "이상적인 RFC 9309 파서**가 아니라** 실제로 배포된 파서" | **✗ 인용 부정확** | Goal 4 원문: "This holds for parsers that are actually deployed, **not only for** idealized RFC 9309 parsers." 원문은 '이상적 파서**뿐 아니라**'(포함)인데 본문은 '아니라'(배제)로 뒤집음. 따옴표 안이라 더 엄격 | **수정 필수** (C-3) |
| 17 | 40 | MS: 2027-02-01부터 크롤하며 새 선호 반영 | ✓ 확인 | Bing 원문 "Starting February 1, 2027, Microsoft will honor the new preferences as it crawls" | - |
| 18 | 40 | MS: 2027-03-01 이후 NoArchive/NoCache를 학습·그라운딩 선호로 읽지 않음 | ✓ 확인 | Bing 원문 "...by March 1, 2027" + "after that date, NoArchive and NoCache will no longer be read as a preference for training or grounding." | - |
| 19 | 40 | "**2023년부터 쓰던** NoArchive와 NoCache" | ⚠ 표현 부정확 | Bing 원문은 "Microsoft was the first company to provide publisher controls for AI training and grounding **in 2023**" — 2023년에 시작된 것은 **AI 통제용 용법**이고, 태그 자체는 검색 캐시용으로 훨씬 전부터 존재 | **완화 권고** (C-4) |
| 20 | 42 | MS가 학습 거부와 그라운딩 거부를 분리 | ✓ 확인 | Bing 원문 "AI Grounding is a separate page-level preference from Microsoft..." | - |
| 21 | 42 | 그라운딩 = "AI가 답을 만들 때 내 문서를 근거로 끌어다 쓰고 **출처로 거는** 일" | ✓ 확인(허용 범위의 의역) | Bing 원문 "AI Grounding covers using content as input to help inform AI-generated responses." + "Grounding **connects** generated responses **to web content** when an answer is created" — '근거로 끌어다 씀'은 1:1, '출처로 건다'는 connects-to-web-content의 저자 의역. 과장 아님 | - |
| 22 | 42 | "'학습에는 안 쓰되 답변에는 인용돼도 좋다'가 **처음으로** 표현 가능한 선택지" | ⚠ 과한 단정 | 마이크로소프트 체계 안에서는 맞음. 다만 업계 전체로는 선례 있음 — 오픈AI가 GPTBot(학습)과 OAI-SearchBot(검색·인용)을 **별도 토큰으로 분리**한 이래 같은 의사 표현이 가능했음 | **완화 권고** (C-6) |
| 23 | 42 | "**두 회사 모두** 이 설정이 일반 검색 색인 자격에는 영향을 주지 않는다고 못 박았습니다" | **✗ 오류** | Bing 원문은 명시 ✓ ("These usage preferences do not change eligibility for traditional Bing search results"). 그러나 **구글 블로그 본문에는 검색 색인·노출 자격에 관한 문장이 없음**(3회 교차 확인). 구글 본문의 유일한 자격 언급은 "Websites that specifically allow Google-Extended are eligible to appear in responses and receive clicks via **grounding in Gemini Apps**" — 일반 검색이 아님. ※ 팩트 카드의 "둘 다 ... 명시"는 **두 '회사'가 아니라 MS의 두 '선호(Training/Grounding)'**를 가리킨 것으로 보임 | **수정 필수** (C-1과 동급) |
| 24 | 44 | 드래프트: 토큰 그룹 없으면 "선호가 표명되지 않았다" | ✓ 확인 | 드래프트 원문 "If no group contains the __usage_ai-training policy token ... then no preference has been expressed." | - |
| 25 | 44 | MS: 선호 미공표 시 기본값 Allow | ✓ 확인 | Bing 원문 "Both default to Allow when no applicable preference is published." / "Both preferences default to Allow when no preference is set." | - |
| 26 | 46 | "아직 드래프트이고 강제력도 없습니다" | ✓ 확인 | Datatracker: "Active Internet-Draft (**individual**)", 스트림 없음, "not endorsed by the IETF". WG 산출물 아님 | - |
| 27 | 46 | 구글은 "2027년" | ✓ 확인 | 구글 원문 "We aim to support this new control along with other AI providers **in 2027**, and will provide updates on our progress." (일부 2차 보도의 "early 2027"은 부정확 — 본문 표기가 원문과 일치) | - |
| 28 | 46 | 오픈AI는 "몇 달 안"이라고만 | ✓ 확인 | 복수 2차 출처 일치: "OpenAI says the coming months", 구체 날짜 없음. 원문은 403이라 2차 교차로 확정 | - |
| 29 | 48 | "2023년에 각 회사가 Google-Extended, GPTBot, **ClaudeBot**을 하나씩 내놓는" | **⚠ 근거 약함** | Google-Extended 2023 ✓(구글 블로그 자인), GPTBot 2023-08 ✓. **ClaudeBot은 2023년 발표 통제 수단이 아님** — 2023년 앤트로픽의 토큰은 `anthropic-ai`·`Claude-Web`(현재 deprecated)이고, ClaudeBot은 2024년에 널리 알려짐(iFixit 사건 2024-07, The Register 2024-07-30). robots.txt 등장 최초 흔적은 HTTP Archive 기준 2023-12(단일 2차 출처, 2,382개 사이트)로 '공개 발표'와는 다름 | **수정 권고** (C-7) |

### 상태 집계
- ✓ 확인 17건 / ⚠ 근거 약함·정밀도 6건 / ✗ 오류 3건 / ? 검증 불가 0건

---

## C. 수정 권고 (우선순위 순)

### 1. [치명적] 12줄 — 앤트로픽은 블로그 글을 올리지 않았다
현재: `구글과 마이크로소프트, 오픈AI, 앤트로픽이 10월 30일 각자의 블로그에 같은 내용을 올렸습니다.`
→ 앤트로픽의 10-30 블로그 포스트는 확인되지 않습니다(2차 출처들도 "no company announcement found"). 앤트로픽의 역할은 **드래프트 집필**입니다. 바로 다음 문장이 이미 켈리를 소개하므로 아래로 바꾸면 사실관계가 맞고 흐름도 자연스러워집니다.

권고:
```
구글과 마이크로소프트, 오픈AI가 10월 30일 각자의 블로그에 같은 내용을 올렸습니다. 사이트가 AI 학습 거부 의사를 밝히는 방법을 하나로 통일하겠다는 것이고, 그 방법을 적은 IETF 인터넷 드래프트도 같은 날 올라왔습니다. 쓴 사람은 앤트로픽의 케빈 켈리(Kevin Kelley)입니다.
```
(제목이 이미 '구글·MS·오픈AI'라 일관성도 좋아집니다. excerpt의 "네 곳이 같은 신호를 쓰기로 했습니다"는 네 회사가 모두 지지를 표명한 것은 사실이므로 그대로 두어도 되지만, 더 엄밀히 하려면 "세 곳이 같은 날 발표했고, 그 방법을 적은 건 앤트로픽" 식으로 조정)

### 2. [치명적] 42줄 — 구글은 "일반 검색 색인 자격에 영향 없음"을 말한 적이 없다
현재: `참고로 두 회사 모두 이 설정이 일반 검색 색인 자격에는 영향을 주지 않는다고 못 박았습니다.`
→ Bing 블로그에는 명시돼 있지만, **구글 블로그 본문에는 해당 문장이 없습니다**(본문 3회 재확인). 구글의 자격 언급은 Gemini Apps 그라운딩에 관한 것입니다. 또 "두 회사"가 어느 두 곳인지 앞 문맥상 불명확합니다.

권고:
```
참고로 마이크로소프트는 이 두 선호 설정이 일반 Bing 검색 결과 노출 자격에는 영향을 주지 않는다고 못 박았습니다.
```

### 3. [중대] 36줄 — 따옴표 안 인용이 원문의 의미를 뒤집는다
현재: `이 조건은 "이상적인 RFC 9309 파서가 아니라 실제로 배포된 파서"에 대해 성립해야 한다고요.`
원문(Goal 4): `This holds for parsers that are actually deployed, not only for idealized RFC 9309 parsers.`
→ 원문은 '이상적 파서뿐 아니라'(포함)인데 본문은 '아니라'(배제)로 읽힙니다. 직접 인용 부호 안이라 그대로 두면 오인용입니다.

권고:
```
목표 항목에는 아예 이렇게 썼습니다. 이 조건은 "이상적인 RFC 9309 파서뿐 아니라 실제로 배포된 파서"에 대해서도 성립해야 한다고요.
```
(논지 — '표준이 배포된 구현의 버릇을 본다' — 는 그대로 살아 있고, 오히려 Goal 4의 취지에 더 맞습니다.)

### 4. [경미·권고] 8번 항목 / 26줄 — 중심 논지의 정밀도 보강
현재 문장은 "User-Agent 헤더와 맞춰진다고 생각하기 쉽다 → 그런데 프로덕트 토큰이다"로 둘을 끊어 놓는데, RFC 9309 §2.2.1은 "프로덕트 토큰은 크롤러가 보내는 식별 문자열의 **부분 문자열이어야 한다(SHOULD)**"며 느슨하게 이어 둡니다. 독자가 "헤더와 전혀 무관"으로 읽으면 과장입니다. 한 구절만 덧대면 정확해지고, 오히려 '이름표'라는 논지가 강해집니다.

권고(26줄에 한 문장 삽입):
```
... 크롤러가 스스로 "나는 Googlebot이다"라고 선언한 이름과 맞춰 보는 거예요. 규격은 그 이름이 헤더 문자열 안에 들어 있기를 권할 뿐, 요구하지는 않습니다. 신원을 확인하는 절차가 아니라 그냥 이름표입니다.
```

### 5. [경미] 40줄 — "2023년부터 쓰던"
NoArchive·NoCache 태그 자체는 검색 캐시 제어용으로 훨씬 전부터 있었고, 2023년에 시작된 것은 **AI 학습·그라운딩 통제용 용법**입니다(Bing 원문: "first company to provide publisher controls for AI training and grounding in 2023").

권고: `2023년부터 쓰던 NoArchive와 NoCache` → `2023년부터 AI 통제용으로 쓰이던 NoArchive와 NoCache`

### 6. [경미] 42줄 — "처음으로"
`"학습에는 안 쓰되 답변에는 인용돼도 좋다"가 처음으로 표현 가능한 선택지가 됐습니다.`
→ 마이크로소프트 체계 안에서는 맞지만, 오픈AI가 GPTBot(학습)과 OAI-SearchBot(검색·인용)을 분리한 뒤로는 유사한 의사 표현이 가능했습니다.

권고: `처음으로 표현 가능한` → `마이크로소프트 쪽에서는 처음으로 표현 가능한` (또는 `하나의 선호 설정으로 표현 가능한`)

### 7. [경미] 48줄 — ClaudeBot의 2023년
2023년에 '내놓은' 것으로 묶기에는 ClaudeBot의 근거가 약합니다. 2023년 앤트로픽의 토큰은 `anthropic-ai`·`Claude-Web`였고, ClaudeBot은 2024년에 알려졌습니다.

권고 A(가장 안전): `2023년에 각 회사가 Google-Extended, GPTBot, ClaudeBot을 하나씩 내놓는 걸 보면서`
→ `2023년부터 Google-Extended와 GPTBot이 하나씩 나오고 앤트로픽 크롤러 이름까지 줄줄이 붙는 걸 보면서`

권고 B(ClaudeBot을 꼭 쓰려면): `2023년에` → `그 무렵부터`

### 8. [경미·선택] 34줄 — 와일드카드 예시
`Disallow: /admin`보다 `Disallow: /`가 "말한 적 없는 거부 의사"의 크기를 더 분명히 보여 줍니다. 논리 오류는 아니므로 저자 판단에 맡깁니다.

### 9. [경미·선택] 40줄 — `User-Agent: *`에 대한 오독 방지
`User-Agent: *`로 넉넉히 막아 뒀으니 됐다고 생각하셨다면 그게 아니라는 거고요.`
→ 맞는 지적이지만, 독자가 "내 `*` 차단이 무의미하다"로 과하게 읽을 수 있습니다. `*` 그룹은 여전히 **크롤링 자체**를 막습니다. 바로 앞 문장이 "AI 학습에 대해"로 범위를 한정하고 있어 치명적이진 않으나, 반 문장("크롤링은 여전히 막히지만, 학습 용도에 대해서는 아무 말도 하지 않은 셈입니다")을 덧대면 깔끔합니다.

---

## D. 완화·단정 강도 점검 (요청 항목)

| 지점 | 현재 | 판정 |
|------|------|------|
| 앤트로픽 구현 착수를 본문에서 뺀 것 | 2차 출처뿐이라 생략 | **적절.** 생략이 옳은 판단 |
| 44줄 "그렇게 될 거라는 예측은 아니고, 두 문서가 각각 그렇게 적어 뒀다는 데서 나온 가정입니다" | 가정임을 명시 + 근거(두 문서) 제시 | **적절.** 과하지 않음. 스타일 가이드의 '출처 바깥의 사고' 조건(예측 아님 명시 + 근거)을 충족 |
| 46줄 "아직 드래프트이고 강제력도 없습니다" | - | **적절.** 오히려 더 강화해도 됨(개인 제출, WG 산출물 아님). 현재도 충분 |
| 46줄 "이건 소급되지 않습니다" | 단정 | **정확.** 드래프트는 수집 시점 기준이며 기존 학습 데이터에 소급하지 않음. 단정해도 됨 |
| 44줄 "이번 합의는 옵트아웃 쪽을 골랐습니다" | 단정 | **정확.** 두 문서의 기본값 Allow + no-preference 규정에서 직접 도출됨 |
| 42줄 "처음으로 표현 가능한 선택지" | 단정 | **과한 단정** → C-6 |
| 42줄 "두 회사 모두 ... 못 박았습니다" | 단정 | **근거 없는 단정** → C-2 |
| 제목 "하나로 통일" | 단정 | **허용.** 네 곳이 같은 토큰을 지지한다는 사실에 부합. 다만 아직 '지지 표명 + 일정 발표' 단계라는 점이 46줄에서 해소됨 |

**종합:** 완화는 전반적으로 잘 걸려 있습니다. 문제는 완화가 **부족한** 쪽이 아니라, **출처가 없는 문장이 단정형으로 들어간** 두 군데(C-1, C-2)입니다.

---

## E. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — 치명적 오류 2건(C-1 앤트로픽 블로그, C-2 구글의 검색 색인 언급), 오인용 1건(C-3 Goal 4)
- [ ] 발행 보류

**시점 규율 위반 없음. 날짜·수치·고유명사 오기 없음. 코드 블록은 드래프트 Figure 1과 완전 일치.**
C-1·C-2·C-3 세 건만 고치면 발행 가능합니다. C-4~C-9는 저자 판단에 맡기는 권고입니다.
**본문을 수정한 뒤에는 `node scripts/lint-post.mjs` 재실행이 필요합니다.**

---

## F. 출처

- 드래프트 원문: https://www.ietf.org/archive/id/draft-kelley-aipref-training-preference-signal-00.txt (Abstract·Goal 4·§4.1·§4.2·Figure 1·저자 블록 직접 확인)
- Datatracker: https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/ (individual submission, 만료 2027-05-03, "not endorsed by the IETF")
- RFC 9309 §2.2.1: https://www.rfc-editor.org/rfc/rfc9309.html (product token 정의, SHOULD-substring 관계)
- 구글: https://developers.google.com/search/blog/2026/10/ai-training-control (John Mueller, Friday, October 30, 2026 / "in 2027" / Google-Extended since 2023 / 검색 색인 언급 **없음**)
- 마이크로소프트: https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/ (Krishna Madhavan, October 30, 2026 / 2027-02-01·2027-03-01·2027-09-30·2026-12-15 / default Allow / traditional Bing search eligibility)
- 오픈AI: https://openai.com/index/helping-websites-express-ai-training-preferences/ (**403 — 직접 확인 불가**, 2차 출처 교차)
- ClaudeBot 시점 2차: https://www.theregister.com/2024/07/30/taming_ai_content_crawlers/ · https://404media.co/anthropic-ai-scraper-hits-ifixits-website-a-million-times-in-a-day/ · https://ppc.land/claudebot/ (HTTP Archive 기준 2023-12 최초 등장)
