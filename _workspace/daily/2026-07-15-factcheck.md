# Fact Check Report: mcp-agent-protocol-standard-war

- **검증일:** 2026-07-15
- **발행 예정일:** 2026-07-15 09:00 KST
- **대상 파일:** `_posts/2026-07-15-mcp-agent-protocol-standard-war.md`

---

## A. 시점 일관성 (최우선)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|-----------|---------|-----------|------|
| The Information 보도 (구글·MS 연합) | 2026-07 중순 (이번 주) | 이전/동시 ✓ | 유지 |
| MCP 공개 | 2024-11-25 | 이전 ✓ | 유지 |
| Agentic AI Foundation 출범 | 2025-12-09 | 이전 ✓ | 유지 |
| Anthropic MCP 재단 기부 | 2025-12 | 이전(지난해 말) ✓ | 유지 |
| Google A2A 공개 | 2025-04-09 | 이전 ✓ | 유지 |
| MCP 월 9,700만 다운로드 도달 | **2026-03** (16개월차) | 이전 ✓ | **라벨 오류(아래 B-3)** |

- **사후 시점 표현:** "돌이켜보면" 류의 미래 관점 표현 없음. 미래 사건을 과거로 서술한 시점 붕괴 없음.
- **용어 시점성:** MCP·A2A·AAIF·Agents.md·Goose 모두 발행일(2026-07) 시점에 존재. 문제 없음.

---

## B. 사실 검증

| # | 주장 | 상태 | 증거 | 조치 |
|---|------|------|------|------|
| 1 | The Information 이번 주 보도: 구글·MS·Salesforce·Snowflake·ServiceNow가 공유 에이전트 백엔드 프로토콜 지원, Anthropic·OpenAI를 "beat back" | ✅ 확인 | The Information 원문 헤드라인·본문, cryptobriefing 재보도 | - |
| 2 | Anthropic MCP 2024년 11월 공개 | ✅ 확인 | Anthropic 공식(2024-11-25), Wikipedia | - |
| 3 | "지난해 말 기준" 월 9,700만 SDK 다운로드 | ⚠️ 경미(시점 라벨 오류) | 97M은 **2026-03-25 기준**. 2025년 말(AWS 합류)엔 ~68M | "지난해 말 기준" → "올해 들어"/"최근"/"2026년 봄 기준"으로 수정 권고 |
| 4 | Agentic AI Foundation 2025년 12월 리눅스 재단 산하 출범, 구글·MS·OpenAI·Anthropic 회원 | ✅ 확인 | Linux Foundation 보도자료(2025-12-09), TechCrunch, OpenAI 공식 | - |
| 5 | Anthropic이 지난해 말 MCP를 이 재단에 기부 | ✅ 확인 | Anthropic 공식 "Donating MCP", MCP 블로그(2025-12-09) | - |
| 6 | 재단이 MCP·OpenAI Agents.md·Block Goose 관리 | ✅ 확인 | Linux Foundation 보도자료(세 창립 프로젝트 명시). AGENTS.md는 OpenAI Codex 계열, Goose는 Block 소유 | - |
| 7 | Google A2A(Agent-to-Agent) 2025년 4월 공개 | ✅ 확인 | 2025-04-09 공개, 50+ 창립 파트너, IBM/Galileo 해설 | - |
| 8 | Salesforce·Snowflake·ServiceNow 이미 MCP 지원 중 | ✅ 확인 | Salesforce(Agentforce MCP, 2025-06~), Snowflake(관리형 MCP GA 2025-11), ServiceNow(Zurich 릴리스 네이티브 MCP) | - |
| 9 | 넷스케이프 1995 지배(열에 아홉)·MS의 IE 윈도우 번들·"embrace/extend/extinguish"·2000년대 초 소멸 | ✅ 확인 | 브라우저 전쟁·MS 반독점 소송 기록의 정설. 넷스케이프 점유율 ~90%, EEE 전략 문서화 | - |
| 10 | OSI(위원회 설계) vs TCP/IP(현장) — TCP/IP 승리 | ✅ 확인 | 네트워크 역사 정설 | - |

---

## C. 수정 권고 (우선순위 순)

1. **[경미] 본문 24줄:** "지난해 말 기준 SDK 다운로드가 월 9,700만 회를 넘어섰다고 알려졌습니다."
   - 수치 9,700만(97M)은 **정확**하나, 이 수치에 도달한 시점은 2025년 말이 아니라 **2026년 3월경**(공개 16개월차)이다. 2025년 말(AWS 합류 시점)에는 약 6,800만 수준.
   - 이미 "알려졌습니다"로 완화되어 있어 수치 단정 리스크는 없음. 다만 "지난해 말 기준"이라는 시점 라벨이 사실과 어긋남.
   - 권고: "지난해 말 기준" → "**올해 들어**" 또는 "**최근**" 또는 "**공개 16개월 만인 올봄 기준**"으로 교체. 수치·완화표현은 유지.

2. **[참고, 수정 불요] 본문 24줄:** "약 1년 반 만에" — 2024-11 → 2026-07은 약 20개월(1년 8개월)이나, 사실상 표준화·97M 도달은 16개월차(2026-03)이므로 "약 1년 반"은 허용 가능한 근사. 유지.

---

## D. 종합 판정

- [x] **수정 후 발행** — 치명적 오류 없음. 시점 라벨 오류 1건(B-3/C-1)만 손보면 발행 가능.
- [ ] 발행 가능(무수정)
- [ ] 발행 보류

**요약:** 핵심 사건(The Information 보도), 모든 날짜(MCP 2024-11, AAIF 2025-12, A2A 2025-04), 회원사 구성, 엔터프라이즈 3사 MCP 지원, 역사 유추(브라우저 전쟁·EEE·OSI/TCP-IP)까지 전부 사실과 일치. 유일한 결함은 97M 다운로드 수치를 "지난해 말"에 귀속시킨 시점 라벨 오류(실제 2026-03). 수치 자체는 정확하고 "알려졌습니다"로 완화되어 있어 경미. 시점 라벨만 교정 권고.

---

## 검증에 사용한 URL

- https://www.theinformation.com/newsletters/applied-ai/google-microsoft-team-beat-back-anthropic-openai
- https://cryptobriefing.com/ard-ai-standard-google-microsoft-salesforce/
- https://www.anthropic.com/news/model-context-protocol
- https://en.wikipedia.org/wiki/Model_Context_Protocol
- https://beingguru.com/anthropic-mcp-hits-97-million-installs/
- https://medium.com/@AdithyaGiridharan/mcp-at-97-million-anthropics-protocol-bet-has-already-won-the-standard-for-agentic-ai-8601151b3f46
- https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation
- https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
- https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/
- https://techcrunch.com/2025/12/09/openai-anthropic-and-block-join-new-linux-foundation-effort-to-standardize-the-ai-agent-era/
- https://openai.com/index/agentic-ai-foundation/
- https://www.ibm.com/think/topics/agent2agent-protocol
- https://developer.salesforce.com/blogs/2025/06/introducing-mcp-support-across-salesforce
- https://www.snowflake.com/en/blog/managed-mcp-servers-secure-data-agents/
- https://www.servicenow.com/docs/r/intelligent-experiences/mcp-client.html
