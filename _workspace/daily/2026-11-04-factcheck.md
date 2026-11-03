# Fact Check Report: goldman-sachs-pulls-coding-agents-non-engineers

- **검증일:** 2026-11-03 (발행 예정 2026-11-04 09:00 KST)
- **대상:** `_posts/2026-11-04-goldman-sachs-pulls-coding-agents-non-engineers.md`
- **팩트 카드:** `_workspace/daily/2026-11-04-brief.md`
- **원보도:** Bloomberg, 2026-11-02(월). 본문의 사실 주장은 사실상 전량이 이 단일 원보도에서 나온다(2차 보도 다수가 이를 받아 씀). 검증은 블룸버그 전재본 1곳 + 독립 2차 보도 3곳으로 교차했다.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-04 (수요일). 보도일 2026-11-02는 월요일(요일 계산 확인).

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|-----------|---------|-----------|------|
| 블룸버그 보도 | 2026-11-02 | 이전 ✓ (이틀 전) | 유지 |
| 사내 지침 갱신 | 2026년 10월 | 이전 ✓ | 유지 |
| 마르코 아르젠티의 "바이브 코딩" 칭찬 | 2026년 7월 | 이전 ✓ | 유지 |
| 앤트로픽 S-1 제출(골드만 대표 주관) | 2026-10-26 | 이전 ✓ | 유지 (본문은 상장 완료라 쓰지 않음 — 올바름) |
| 골드만 자체 AI 어시스턴트 운용 | 2025-06 전사 출시 이후 현재까지 | 이전 ✓ | 유지 |

- **"넉 달 전" 표현:** 7월 → 11월 초는 약 4개월. 아르젠티 발언의 정확한 7월 일자는 블룸버그도 밝히지 않아 ±2주 오차 가능. "넉 달 전"은 안전 범위 안. ✓
- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" 등 미래 시점 누설 표현 없음. ✓
- **"예정 ↔ 완료" 혼동:** 없음. 앤트로픽 IPO는 "기업공개의 대표 주관사"로만 적어 상장 완료를 함의하지 않는다(S-1 제출 단계, 거래 개시 전). ✓
- **미래 사건의 과거형 서술:** 없음. ✓
- **용어 시점성:** Claude Code·GitHub·바이브 코딩·코딩 에이전트 모두 발행일 시점에 존재. ✓
- ⚠ **`_style/ai-timeline.md` 미기재** — 타임라인의 마지막 항목은 2026-11-02(Cursor 마켓플레이스 변조)·2026-11-02(SemiAnalysis GDPx)이며 **골드만삭스 건은 아직 등재되어 있지 않다.** 시점 오류는 아니고, 발행 후 타임라인 갱신이 필요하다는 뜻(ghostwriter/daily-post 몫).

**판정: 시점 규율 위반 없음.**

---

## B. 사실 검증

| # | 주장(본문 위치) | 상태 | 증거 | 조치 |
|---|------|------|------|------|
| 1 | 블룸버그가 **11월 2일** 보도 (L12) | ✓ 확인 | Bloomberg 전재(Yahoo Finance) 데이트라인 Nov 2 / PYMNTS 11-02 / the-decoder 11-02 / thestateofai 11-02 | - |
| 2 | 사내 지침은 **10월에 갱신**된 문서 (L12) | ✓ 확인 | 4개 출처 모두 "internal guidance updated in October" | - |
| 3 | 제한 대상 = **앤트로픽의 Claude Code와 마이크로소프트의 GitHub 코딩 도구** (L12) | ✓ 확인 (표기 안전) | 블룸버그 원문 표기 **"Anthropic PBC's Claude Code and Microsoft Corp's GitHub"**. the-decoder도 "Microsoft's GitHub (no specific GitHub product is named)" | **그대로 유지 권고.** 아래 별도 판정 참조 |
| 4 | 골드만삭스 엔지니어 **약 1만 2천 명** (L12, L16) | ✓ 확인 | 블룸버그 "Goldman has 12,000 of them" / thestateofai "약 12,000명, 아르젠티는 전체 약 47,000명 중 12,000명 이상을 개발자로" | - |
| 5 | 접근 권한을 잃은 쪽은 **뱅커와 트레이더**(비개발 직군) (L12) | ✓ 확인 | 블룸버그: bankers and traders lost access, engineers retain | - |
| 6 | **일부는 불만을 표시** (L12) | ⚠ 주어 범위 약간 넓음 | 출처는 전부 **"some traders were frustrated"** — 뱅커의 불만은 보도에 없음 | [경미] "일부 트레이더는 불만을 표시했다고 해요"로 좁히면 더 정확 |
| 7 | 용도 = **고객 트레이딩 플로 모니터링, 시장 포지션 모델링** (L12) | ✓ 확인 | 블룸버그: "monitor client trading flows, model market changes and positions, and generate written and graphic content" | 본문은 앞 두 가지만 인용 — 축소지만 왜곡 아님 |
| 8 | **"스트랫(strats)" 예외**, 트레이딩·퀀트 리서치·소프트웨어 엔지니어링의 교집합 (L44) | ✓ 확인 (2곳 교차) | 블룸버그 전재: "The directive does not apply to 'strats,' staff who work across trading, quantitative research and software engineering" / thestateofai: "Strats … still have access, according to a second source" | 익명 소식통 근거임은 본문에서 단정하지 않아도 무방(본문은 "적용되지 않는다고 해요"로 전문 처리 ✓) |
| 9 | 대변인 발언 — **"장기적으로 가장 잘 활용할 수 있는 사람들의 손에"** (L40) | ✓ 확인 (번역 범위 안) | 원문 "we put them in the hands of those who are best suited to leverage them for the long term" (팩트 카드와 일치, the-decoder·PYMNTS 교차) | 아래 별도 판정 참조 |
| 10 | 대변인이 **생산성과 리스크 관리를 포함한 여러 요소**를 평가했다고 말함 (L40) | ✓ 확인 | "a variety of factors including productivity and risk management" (Nick Carcaterra) | - |
| 11 | **마르코 아르젠티 = 골드만삭스 최고정보책임자(CIO)** (L16) | ✓ 확인 | 4개 출처 모두 "chief information officer Marco Argenti". 철자 Marco Argenti ✓ | - |
| 12 | 7월에 **비기술 직원의 "바이브 코딩"을 공개적으로 칭찬** (L16) | ✓ 확인 | 블룸버그: "In July … praised 'vibe coding' by non-technical staff" | - |
| 13 | 구상 = **비개발자가 만들고 → 1만 2천 명의 엔지니어 중 한 명에게 넘겨 다듬어 운영에 올린다** (L16) | ✓ 확인 | 블룸버그: "whose creations were passed to engineers to improve", 아르젠티가 12,000명 풀을 언급 / the-decoder: "prototyping with AI, then handing the work to an engineer for production" | - |
| 14 | **오픈AI·앤트로픽·알파벳 모델을 묶은 자체 AI 어시스턴트가 계속 운용 중** (L46) | ✓ 확인 (**치명 항목, 통과**) | 블룸버그 본문 "It combines models from OpenAI, Anthropic and Alphabet" + 전사 가용 유지. 배경: GS AI Assistant 2025-06 전사 출시(Fox Business — GPT-4o·o3-mini, Gemini 복수, Claude 3.7 Sonnet) | 단, 아래 ⚠ 참조 |
| 15 | **앤트로픽 기업공개의 대표 주관사** (L46) | ✓ 확인 (**치명 항목, 통과**) | 블룸버그: "Goldman has been named lead underwriter on Anthropic's IPO". S-1(2026-10-26) 기준 골드만이 lead-left, 모건스탠리가 그다음 — Axios·thestateofai 교차 | [경미] 모건스탠리도 공동 대표 주관사다. 단수형이 거슬리면 "대표 주관사 가운데 하나"로 완화 가능(블룸버그 원문도 단수형이라 현행도 허용 범위) |
| 16 | 커버·본문 이미지 파일 실존 및 캡션 일치 | ✓ 확인 | `public/images/covers/goldman-sachs-pulls-coding-agents-non-engineers.jpg`(200 웨스트 스트리트 항공뷰) / `public/images/inline/…-floor.jpg`(프랑크푸르트 독일거래소 플로어, DAX 전광판 확인). `_workspace/image-credits-2026.md` 167~168행에 기록 존재 | 아래 D-경미 참조 |

### ⚠ 14번에 붙이는 단서 (본문 수정 불요, 참고용)
같은 보도군에 **"올해 초 홍콩 지역 직원의 Claude 사용 제한"**(일부 매체는 4월)이 함께 나온다. 즉 자체 어시스턴트의 모델 구성은 지역에 따라 다를 수 있다. 본문은 모델 라인업을 "묶여 있다"까지만 쓰고 "모든 직원이 전부 쓸 수 있다"로 주장하지 않으므로 **현재 문장은 안전하다.** 이 문장을 더 구체화(예: "전 직원이 세 회사 모델을 모두 쓴다")하면 그때는 오류가 된다.

### 본문에 쓰이지 않은 것 (올바른 배제)
- "약 1만 명이 접근 권한을 잃었다" — Gadget Review 등 일부 2차 보도에만 있고 블룸버그 원보도에 없음. **본문에 없음. 잘한 판단.**
- "유지보수 부담·컴플라이언스 취약점 때문" — 한 매체의 자체 해석. **본문에 없음.**
- "GitHub Copilot" — 2차 보도 표기. **본문에 없음.**

---

## C. 별도 판정 2건

### C-1. 출처에 없는 인과를 단정했는가 → **단정하지 않았다. 통과.**
본문 L40이 정면으로 선을 긋는다.
> "골드만삭스가 검토에서 무엇을 발견했는지는 공개되지 않았습니다. 대변인이 말한 건 … 그것뿐이에요. **무슨 사고가 있었는지는 말하지 않았고요.**"

- "보안 사고", "유출", "침해" 같은 단어가 본문에 **0회**.
- 제목·excerpt·태그에도 사고 암시 없음("거버넌스"는 중립).
- L38의 "고장이 나야 알게 되죠", L38의 "어제 만든 … 스크립트" 서술은 **일반적 메커니즘 설명/가정 시나리오**이지 골드만에서 실제로 일어난 일로 적지 않았다. 다만 L38 문단은 '골드만에서 그런 일이 있었다'로 오독될 여지가 아주 약간 있는데, 바로 다음 문단(L40)이 "무엇을 발견했는지는 공개되지 않았다"로 즉시 차단하므로 **조치 불요**.

### C-2. '가정' 문단이 가정임을 밝혔는가 → **명시했다. 통과.**
- L42: "다만 직군이라는 선을 그었다는 사실 하나는 짐작할 거리를 줍니다. **예측이 아니라 가정으로 적어 볼게요.**" — 문단 진입 전에 라벨을 붙였다.
- L44 종결: "…**예외를 판 것 아닐까 싶습니다.**" — 추정 어미로 닫는다.
- 근거도 본문 안에 제시됨("이 가정의 근거는 예외 조항입니다" → 스트랫 예외라는 검증된 사실).
- 가정 블록 이후 L46에서 다시 검증된 사실(어시스턴트·IPO 주관)로 복귀해 가정이 번지지 않는다.
- [경미] L44의 "레포에 들어가지 않고 각자 노트북에서 도는 스크립트에는 목록이 없어요"는 골드만 내부 환경에 대한 확인되지 않은 전제지만, 가정 블록 안에 있고 일반론으로 읽히므로 수정 불요.

---

## D. 수정 권고 (우선순위 순)

**치명적 오류: 0건.**

경미 3건 (모두 발행 차단 사유 아님):

1. [경미] L12: "뱅커와 트레이더는 접근 권한을 잃었고, **일부는** 불만을 표시했다고 해요"
   → 출처가 말한 것은 **트레이더**의 불만뿐. "**일부 트레이더는** 불만을 표시했다고 해요"로 좁히는 것을 권고.
2. [경미] L30 본문 이미지 캡션: "*출처: Wikimedia Commons*"
   → 크레딧 파일에 촬영자 **Dontworry**(CC BY-SA 3.0)가 기록돼 있다. 레포 선례(09-19 "Carl Lender", 09-27 "Patrick Finnegan", 10-29 "Enrique Jiménez")를 따라 "*출처: Wikimedia Commons, Dontworry*"로 한 단어 추가 권고.
3. [경미] L46: "앤트로픽 기업공개의 **대표 주관사**이기도 해요"
   → 모건스탠리와 공동(골드만이 lead-left). 블룸버그 원문도 단수형이라 현행 유지 가능하나, 엄밀을 원하면 "대표 주관사 가운데 하나"로.

### 확인만 하고 수정 불필요
- **프런트매터 `coverImage: ""`와 하단 커버 크레딧의 정합성:** 문제 없음. `_workspace/build_posts_json.py` 83~89행이 `coverImage`가 비면 `/images/covers/{slug}.jpg` 실존 여부로 폴백하는데 해당 파일이 존재하므로 **골드만 본사 사진이 실제 커버로 렌더된다.** 따라서 L54의 커버 크레딧 한 줄은 정확하다(히어로 폴백이 아님).
- 발행 후 `_style/ai-timeline.md`에 2026-11-02 골드만 항목 추가 필요(현재 미기재).

---

## E. 종합 판정

- [x] **발행 가능** — 검증 대상 10개 항목 전원 ✓, 치명적 오류 0건, 경미 3건은 선택 사항.
- [ ] 수정 후 발행
- [ ] 발행 보류

**요약:** 날짜(11-02 보도 / 10월 지침 / 7월 아르젠티), 수치(엔지니어 1만 2천 명), 고유명사(Marco Argenti·CIO·Nick Carcaterra·Claude Code·GitHub·strats), 인용문(대변인 2종), 그리고 특별 지정된 치명 항목 2개(**오픈AI·앤트로픽·알파벳 모델 결합 자체 어시스턴트 / 앤트로픽 IPO 대표 주관사**)가 모두 블룸버그 원보도 본문으로 확인됐다. 본문은 보도에 없는 인과(보안 사고)를 단정하지 않았고, 추론 문단은 "예측이 아니라 가정"이라고 명시한 뒤 추정 어미로 닫는다. 미검증 수치("약 1만 명")와 2차 보도 표기("GitHub Copilot")를 들이지 않은 것도 확인했다.

---

## F. 확인에 사용한 출처

- Bloomberg 전재: https://sg.finance.yahoo.com/news/goldman-restricts-traders-bankers-using-063339234.html
- PYMNTS (2026-11-02): https://www.pymnts.com/news/artificial-intelligence/2026/goldman-sachs-bars-bankers-from-employing-some-ai-tools/
- the-decoder (2026-11-02): https://the-decoder.com/goldman-sachs-pulls-ai-coding-tools-from-traders-and-bankers/
- The State of AI (2026-11-02, 스트랫 예외·IPO 주관 교차): https://www.thestateofai.com/news/goldman-sachs-claude-code-traders-bankers
- Anthropic IPO 주관사: https://www.axios.com/2026/10/26/anthropic-ipo , https://www.cnbc.com/2026/10/26/anthropic-ipo-live-updates-ai-s-1-filing.html
- GS AI Assistant 모델 구성 배경: https://www.foxbusiness.com/technology/goldman-sachs-announces-firmwide-launch-ai-assistant , https://www.cnbc.com/2025/01/21/goldman-sachs-launches-ai-assistant.html
- 미사용 수치 출처 확인(약 1만 명): https://www.gadgetreview.com/goldman-sachs-restricts-ai-coding-tools-to-engineers
- 기타 교차: https://qz.com/goldman-sachs-restricts-ai-coding-tools-traders-bankers-110226 , https://www.finextra.com/newsarticle/48690/goldman-bans-traders-and-bankers-from-using-ai-coding-tools (둘 다 403으로 본문 미열람, 검색 결과 요약만 참고)
