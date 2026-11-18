# Fact Check Report: 2026-11-19-entra-agent-id-local-coding-agents

- **검증일:** 2026-11-19 (KST)
- **대상:** `_posts/2026-11-19-entra-agent-id-local-coding-agents.md`
- **팩트 카드:** `_workspace/daily/2026-11-19-brief.md`
- **종합 판정:** **수정 후 발행** — 치명적 1건(본문의 메커니즘 설명 전체), 상태 표기 오류 1건. 나머지 사실 항목은 전부 통과.

---

## A. 시점 일관성

- **발행일:** 2026-11-19 09:00 KST
- Microsoft Ignite 2026: **2026-11-17 ~ 11-20, 모스콘 센터(샌프란시스코) + 온라인**. 발행일 기준 이미 개막(3일차). "11월 17일 … 열었습니다" 과거형 **적절** ✓
- "나흘짜리 행사" ✓ (17·18·19·20 = 4일)
- `_style/ai-timeline.md` 2026-10-12 Maia 300 항목에도 "Ignite 2026(11/17~20, 샌프란시스코)"로 기재돼 있어 내부 일관성 ✓
- 사후 시점 표현("훗날", "결국", "돌이켜보면") 없음 ✓
- 용어 시점성: MCP·Entra Agent ID·Global Secure Access·Agent 365 모두 발행일 이전 존재 ✓
- 출처: https://www.moscone.com/node/852 , https://news.microsoft.com/events/ignite/2026/book-of-news/ ("November 17-20, 2026 / San Francisco and online")

---

## B. 사실 검증

| # | 본문 주장 | 상태 | 근거 | 조치 |
|---|---|---|---|---|
| 1 | Ignite 2026, 11/17 샌프란시스코 개막, 나흘 | ✓ 확인 | Book of News "November 17-20, 2026 / San Francisco and online" · moscone.com | - |
| 2 | 로컬 에이전트 Agent ID 부여는 **프리뷰**, 시작 대상 **GitHub Copilot CLI·Claude Code** | ✓ 확인 | Book of News: "Agent ID for discovered local agents, in preview", "starting with GitHub Copilot CLI and Claude Code" | - |
| 3 | 목적 문구 = "에이전트의 활동을 사람의 활동에서 떼어내는 것" | ✓ 확인 | Book of News 원문: "to separate agent from human activity and help secure their access." (Agent 365 블로그는 "tell agent activity apart from human activity") | 한국어 의역으로 정확. 직접 인용부호 미사용이라 문제없음 |
| 4 | Defender가 **관리되는 Windows·macOS 단말**에서 에이전트를 찾아 **단말·사용자에 묶는다** | ✓ 확인 | Agent 365 블로그: "Defender supports managed Windows and macOS devices", "ties each agent to its device and user" / Learn: "Defender defines an agent as a combination of a user, a device, and an agent type" (GA) | - |
| 5 | GSA가 네트워크 쪽에서 **에이전트의 목적지**를 본다 | ✓ 확인 | Book of News GSA "Local agents"(preview): "network visibility and control over local agents and the destinations they reach" | 본문이 상태를 적지 않음 → §C-3 참고 |
| 6 | 발견 대상 **60종 이상**, **에이전트가 설정해 둔 MCP 서버까지** 포함 | ✓ 확인 | Agent 365 블로그 "discover more than 60 local AI agents" + "their configured MCP servers" / Defender Learn: "discovers local AI agents and their configured MCP servers" | - |
| 7-a | 기존 서비스 주체는 **자기 자격증명으로 직접** 토큰 획득 | ✓ 확인 | Learn `agent-service-principals`: "Standard service principals were designed for static, deterministic workloads and operate using their own credentials directly." | - |
| 7-b | 블루프린트가 자식 신원을 대신해 토큰 획득 / 토큰·감사 로그 클라이언트는 에이전트 / "자격증명은 블루프린트, 권한·감사 신원은 에이전트" / 블루프린트 1:N · 침해 시 전부 영향 · 블루프린트 개수가 보안 경계 | ⚠→✗ **인용 자체는 정확하나 이 사건에 적용하면 오류** | 원문 4개 문장 모두 확인. **단 전부 "Multi-instance Agent IDs" 절 안의 서술**이며, 로컬 단말 에이전트는 문서상 **단일 인스턴스·퍼블릭 클라이언트**가 규정 경로 | **§C-1 치명적** |
| 8 | Defender 런타임 보호는 **Defender for Endpoint P2** 전제, **Audit/Block 모드** | ✓ 확인 | Book of News: "Runtime protection for local AI agents will be available to Defender for Endpoint P2 customers." / "configured in the Defender or Microsoft Intune portal with either Audit or Block mode selected." | - |
| 9 | **Intune 로컬 AI 에이전트 거버넌스 통제는 프리뷰** | ✓ 확인 | Book of News: "New Microsoft Intune controls for local AI agents governance are in preview." | - |
| 10 | 마이크로소프트가 **MCP 서버 접근을 따로 통제하는 기능을 별도로 내놓았다** | ✓ 확인 | Book of News GSA "MCP Firewall"(preview): MCP 서버의 tools/prompts/protocols/transports 접근 제어 | 프리뷰임을 덧붙이면 더 정확(§C-3) |
| 11 | "Entra Agent ID라고 부르는 기능이고, 아직 프리뷰이고" | ✗ **상태 오류** | Learn `whats-new-agent-id`: "**Microsoft Entra Agent ID is now generally available.**" 프리뷰인 것은 *로컬 에이전트에 자동 부여하는 기능*뿐 | **§C-2 수정 필요** |
| 12 | "노트북 수천 대에 자격증명을 하나씩 뿌릴 수는 없으니까요 … 비밀은 한 군데 모아 두고" (저자 추론) | ✗ **출처와 반대** | Learn `authenticate-local-agent`: 로컬 에이전트는 **클라이언트 자격증명 자체가 없다**(퍼블릭 클라이언트 + PKCE) | **§C-1에 포함** |

### 근거 URL
- Ignite 2026 Book of News — https://news.microsoft.com/events/ignite/2026/book-of-news/
- Agent 365 공식 블로그(Ignite 2026) — https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-microsoft-agent-365-ignite-2026/4571753
- Learn, Agent identities, service principals, and applications — https://learn.microsoft.com/en-us/entra/agent-id/agent-service-principals
- Learn, Agent identity blueprints (instance modes) — https://learn.microsoft.com/en-us/entra/agent-id/agent-blueprint
- Learn, **Sign in users from a local agent** — https://learn.microsoft.com/en-us/entra/agent-id/authenticate-local-agent
- Learn, Create an identity for your agent (single-instance) — https://learn.microsoft.com/en-us/entra/agent-id/create-single-instance-agent
- Learn, What's new in Microsoft Entra Agent ID — https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id
- Learn, Local AI agent discovery with Defender for Endpoint — https://learn.microsoft.com/en-us/defender-endpoint/local-agent-discovery-overview
- Learn, AI agent discovery in Global Secure Access (preview) — https://learn.microsoft.com/en-us/entra/global-secure-access/concept-ai-agent-discovery
- 행사 일정·장소 — https://www.moscone.com/node/852

---

## C. 치명적 오류

### C-1. [치명적] 본문 24·26·28줄 — 메커니즘 설명이 **로컬 에이전트에 적용되지 않는 모델**을 설명하고 있다

본문이 인용한 네 문장은 Learn 문서에 **그대로 있습니다**. 문제는 그 문장들이 전부 `### Impersonation model` / `### Multi-instance relationship` 절, 즉 **다중 인스턴스(multi-instance) 블루프린트** 서술이라는 점입니다. 같은 문서가 바로 다음 문단에서 이렇게 끊습니다.

> "A single-instance Agent ID **doesn't use this impersonation step**. It requests a token with the shared client ID…"
> — https://learn.microsoft.com/en-us/entra/agent-id/agent-service-principals

그리고 **이 글의 주제인 '단말에서 도는 로컬 에이전트'는 문서가 단일 인스턴스로 못 박은 경우**입니다.

> "**Public-client agents that run on endpoint devices must use single-instance mode.** Every installation uses the same client ID; **installing the agent on another device doesn't create another Agent ID.**"
> — https://learn.microsoft.com/en-us/entra/agent-id/agent-blueprint

> "A local agent runs on an endpoint device and can't securely store a client secret or certificate. **Configure it as an OAuth public client and use authorization code flow with PKCE.** … **Every installation uses the same client ID. Don't create a separate Agent ID for each device, and don't add a client secret, certificate, or federated identity credential for this flow.**"
> — https://learn.microsoft.com/en-us/entra/agent-id/authenticate-local-agent

> "Microsoft Entra Agent ID now supports local agents as **OAuth public clients** … **without storing or presenting a client credential**." (Local agent authentication, preview)
> — https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id

즉 로컬 CLI 에이전트 경로에서는 — ①블루프린트가 자식을 대신해 토큰을 받는 **위임 단계가 없고**, ②블루프린트가 쥐는 **자격증명 자체가 없으며**(퍼블릭 클라이언트), ③블루프린트 하나가 노트북마다 신원을 찍어내는 **1:N이 아니라 설치본 전체가 하나의 Agent ID를 공유**합니다. 본문 28줄의 "블루프린트 자격증명이 털리면 아래 전부 영향 → 블루프린트 개수가 보안 경계"도 이 경로에는 그대로 성립하지 않습니다(털릴 자격증명이 없음).

26줄의 저자 추론 — "노트북 수천 대에 자격증명을 하나씩 뿌릴 수는 없으니까요. 비밀은 한 군데 모아 두고, 대신 로그에 남는 이름만 에이전트별로 쪼갠 겁니다" — 은 **출처에 근거가 없을 뿐 아니라 방향이 반대**입니다. 문서가 제시한 실제 해법은 "비밀을 한 군데 모았다"가 아니라 **"비밀을 아예 쓰지 않는다(PKCE)"**이고, 신원도 설치본별로 쪼개지지 않습니다.

**추가로 짚어야 할 공백:** Ignite에서 발표된 *"Agent ID for discovered local agents"*(발견된 에이전트에 자동 부여)가 어느 인스턴스 모드로 프로비저닝되는지는 **마이크로소프트가 아직 공개하지 않았습니다**(Book of News·Agent 365 블로그·Learn 어디에도 없음). Defender가 에이전트를 "사용자+단말+에이전트 종류"의 조합으로 센다는 점을 들어 다중 인스턴스를 추측할 여지는 있지만, **추측입니다.** 지금 본문은 그 미공개 지점을 다중 인스턴스로 단정하고 그 위에 글의 절반을 얹어 두었습니다. IT·보안 독자가 "그럼 우리는 블루프린트 개수를 보안 경계로 잡고 설계하자"는 잘못된 결론을 가져갈 수 있어 치명으로 분류합니다.

#### 수정안 A (권장 — 구조는 살리고 사정거리를 긋는다)

24줄 교체:

> 신원의 생김새도 보통의 것과 다릅니다. 기존 서비스 주체는 자기 자격증명으로 직접 토큰을 받아 옵니다. 에이전트 신원은 위에 블루프린트(blueprint)라는 상위 주체를 하나 더 두는데, 둘 사이를 잇는 방식이 두 가지입니다. 하나는 블루프린트가 자식 신원을 대신해 토큰을 받아 오는 방식이에요. 이때도 발급된 토큰과 감사 로그에 클라이언트로 찍히는 것은 블루프린트가 아니라 에이전트입니다. 문서는 이 분리를 이렇게 요약합니다. 자격증명은 블루프린트가 들고, 권한과 감사 신원은 에이전트가 든다.

26줄 교체(추론을 추론으로 표시하고, 로컬 경로의 실제 규정을 함께 적음):

> 다만 노트북에서 도는 에이전트에는 다른 쪽이 걸립니다. 문서는 단말에서 돌아가는 퍼블릭 클라이언트 에이전트에 대해 클라이언트 비밀이나 인증서를 두지 말고 PKCE를 쓰라고, 그리고 설치본마다 신원을 따로 만들지 말고 같은 클라이언트 ID를 쓰라고 적어 뒀습니다. 노트북에 안전하게 숨길 수 있는 비밀이 애초에 없다는 전제에서 출발한 설계인 셈이죠. 이번에 발표된 자동 부여가 둘 중 어느 쪽으로 돌아가는지는 아직 공개되지 않았습니다.

28줄 교체:

> 공짜는 아닙니다. 블루프린트 하나가 그 아래로 여러 개의 에이전트 신원을 찍어내는 쪽을 택하면, 마이크로소프트 문서는 그 대가를 숨기지 않고 적어 뒀습니다. 블루프린트의 자격증명이 털리면 그 아래 모든 에이전트 신원이 영향을 받고, 그래서 블루프린트를 몇 개 둘 것인가가 보안 경계를 정하는 결정이 된다고요. 신원이 많아진 게 아니라, 키를 쥔 자리가 한 층 위로 올라간 셈입니다.

#### 수정안 B (더 짧게 — 로컬 경로 하나만 설명)
블루프린트 위임 모델을 통째로 걷어내고, 24~28줄을 "단말에는 비밀을 두지 않는다(퍼블릭 클라이언트+PKCE), 설치본 전체가 하나의 Agent ID를 공유한다, 그래서 로그에서 갈리는 단위는 노트북이 아니라 '에이전트 종류'다"로 재구성. 분량은 줄지만 '왜 신원이 둘로 쪼개져 있는가'라는 excerpt의 약속을 못 지키므로, 이 경우 excerpt도 함께 손봐야 합니다.

---

### C-2. [치명적—상태 표기] 본문 12줄 — Entra Agent ID 자체는 **GA**, 프리뷰는 로컬 에이전트 자동 부여 쪽

현재: "Entra Agent ID라고 부르는 기능이고, **아직 프리뷰이고**, 지원 대상의 시작점이 저 둘입니다."

- Learn: "**Microsoft Entra Agent ID is now generally available.**" — https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id
- 프리뷰인 것: "Agent ID for discovered local agents"(Book of News), "Local agent authentication"(Learn), 블루프린트 instance modes(Learn)

조달·일정 판단에 직접 걸리는 표기라 수정 권고.

**수정 문구:** "Entra Agent ID라는 이미 정식 출시된 신원 체계에 로컬 에이전트를 끌어들이는 쪽인데, **이 부분은 아직 프리뷰고**, 지원 대상의 시작점이 저 둘입니다."

---

## D. 경미한 지적

1. **[경미] 32줄 — 프리뷰 열거에서 GSA가 빠져 있다.** "Agent ID 부여와 Intune 통제는 아직 프리뷰라"고만 적어, 앞서 22줄에 등장한 Global Secure Access 네트워크 발견도 프리뷰(Book of News "Local agents", preview / Learn "AI agent discovery is currently in preview")라는 사실이 가려집니다. 반대로 Defender의 로컬 에이전트 발견은 GA입니다. → "Agent ID 부여와 GSA 네트워크 발견, Intune 통제는 아직 프리뷰고, Defender 쪽 발견만 정식 출시입니다" 정도로 한 줄 정리 권고.
2. **[경미] 34줄 — "별도로 내놓은"의 상태.** MCP Firewall도 프리뷰입니다. "따로 통제하는 기능(MCP Firewall)을 프리뷰로 함께 내놓은 것도" 정도로 한 단어 추가 권고. 아울러 저자가 명명하지 않은 영문 고유명사라 `MCP Firewall` 병기는 선택 사항(안 넣어도 무방).
3. **[경미] 12줄 — "문서에 적힌 목적은 짧습니다".** Book of News 원문은 "to separate agent from human activity **and help secure their access**"로 뒤가 더 있습니다. 직접 인용부호를 쓰지 않았으므로 오류는 아니지만, "짧습니다"가 원문이 그 한 조각뿐이라는 인상을 줍니다. "문서가 적은 목적은 이겁니다" 정도로 중립화 권고.
4. **[경미] 7줄 excerpt·본문 12줄 — "붙이기 시작했습니다".** 프리뷰 기능이므로 "붙이기 시작했습니다"는 반걸음 앞선 표현. 본문 32줄에서 "오늘 켜서 쓰는 물건은 아니에요"로 스스로 보정하고 있어 치명은 아니지만, excerpt만 읽는 독자에게는 GA로 읽힐 수 있습니다. → "붙이는 길이 열렸습니다" 정도.
5. **[참고, 수정 불요] 22줄 "60종을 넘는다" ✓.** 2차 매체(windowsforum)는 여기에 OpenAI Codex가 포함된다고 전하나 1차 출처에는 개별 목록이 없으므로 본문이 종수만 쓴 것은 적절합니다.
6. **[참고] 34줄의 "예측은 아니고 가정입니다만"** — 섀도 IT 단위가 내려간다는 서술에 이미 가정 표시가 붙어 있어 적절합니다. C-1에서 지적한 26줄 추론에는 이 표시가 **없다**는 점이 대비됩니다.

---

## E. 검증 통과 항목 (수정 불필요)

- Ignite 2026 날짜·장소·기간 (11/17~20, 샌프란시스코 모스콘, 나흘)
- 로컬 에이전트 Agent ID 부여의 프리뷰 상태와 시작 대상 2종(GitHub Copilot CLI, Claude Code)
- 목적 문구의 의미("에이전트 활동을 사람 활동에서 분리")
- Defender의 발견 범위: 관리되는 Windows·macOS 단말, 단말·사용자 결속
- GSA의 네트워크 쪽 목적지 가시성
- 발견 대상 60종 이상 + 설정된 MCP 서버 포함
- "기존 서비스 주체는 자기 자격증명으로 직접 토큰을 받는다"
- Defender 런타임 보호의 Defender for Endpoint P2 전제, Audit/Block 모드
- Intune 로컬 AI 에이전트 거버넌스 통제 = 프리뷰
- MCP 서버 접근 통제 기능(MCP Firewall)의 존재
- 인명·제품명 철자: Microsoft Ignite 2026 / Entra Agent ID / Global Secure Access / Defender for Endpoint / Intune / Agent 365 / GitHub Copilot CLI / Claude Code / MCP — 전부 정확
- 본문에 존재하지 않는 발언·수치를 지어낸 곳 없음

---

## F. 종합 판정

- [ ] 발행 가능
- [x] **수정 후 발행** — C-1(메커니즘 단락 3개)과 C-2(상태 표기) 반영 필수. D는 선택.
- [ ] 발행 보류

**후속:** C-1을 반영하면 본문 분량과 문단 구성이 바뀌므로 `node scripts/lint-post.mjs` 재실행 필요. 커버 이미지 크레딧은 이 리포트 범위 밖.
