# Fact Check Report: 2026-09-12 openai-agents-api-free-harness-compaction

- **검증 대상:** `_posts/2026-09-12-openai-agents-api-free-harness-compaction.md`
- **팩트 카드:** `_workspace/daily/2026-09-12-brief.md`
- **검증 일시:** 2026-09-11 (발행 예정 2026-09-12 09:00 KST)
- **종합 판정:** **수정 후 발행** — 치명적 2건(둘 다 문장 교체로 해소 가능), 중요 4건, 경미 4건. 날짜 오류·가공 인물·자릿수 오류·시점 붕괴는 없음.

## 0. 1차 출처 접근 상황 (반드시 참고)

- `openai.com/index/introducing-the-agents-api/` → **HTTP 403**. 예상대로 차단되어 2차 출처 다중 교차로 대체했다.
- `developers.openai.com` 페이지는 접근은 되지만 **본문이 부분만 렌더되어 돌아온다.** 실측 근거: `agents-api/overview` 페이지 fetch에서 "minutes, hours, or even days"와 tool search가 "없음"으로 나왔으나, 두 항목 모두 다른 경로로 **존재가 확인**됐다. 같은 현상이 `environments/self-hosted`(ZDR 문단 누락)에서도 재현됐다.
- **따라서 이 리포트에서 developers.openai.com 기반의 "없음(부재)" 판정은 약한 증거로만 취급했다.** 반대로 문장을 찾아낸 "존재(귀속)" 판정은 강한 증거다. 이 구분이 아래 4-(d) 판정의 핵심이다.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-09-12 09:00 +0900 (KST)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| Agents API 퍼블릭 베타 | 현지 2026-09-10 (= KST 09-11) | 이전 ✓ | 유지 |
| GPT-6 Astra 공개 | 2026-09-03 | 이전 ✓ | 유지 ("이달 초" 적절) |
| 일반 API 데이터 레지던시 한국 포함 | 2025년 확대 | 이전 ✓ | 유지 |
| MCP 서버 언급 | 2024-11 이래 통용 | 이전 ✓ | 유지 |

- **사후 시점 표현:** "훗날 드러나듯", "결국", "돌이켜보면" 등 **없음** ✓
- **미래·예정의 완료 혼동:** 없음 ✓. "베타가 끝나면 돌아올 수도 있겠죠", "풀릴 가능성이 큽니다"는 모두 추측으로 정확히 완충됨 ✓
- **⚠ 하루 어긋남 1건 (아래 [중요] C-3):** 62줄 "어제까지 그 길은 누구나 걷는 길이었고, **오늘부터는** 굳이 고르는 길이 됐습니다." 발표는 KST 09-11(=발행일 기준 '어제')이므로 변화 시점이 '오늘'이 아니다. 본문 16줄이 "현지 시각 9월 10일"이라고 정확히 못박아 둔 것과 자기모순이 된다.
- **타임라인 파일 상태:** `_style/ai-timeline.md`의 마지막 엔트리는 2026-09-11(기준일)이고 **Agents API(09-10) 항목이 아직 없다.** 초고의 오류는 아니지만 발행 후 타임라인 추가 필요.

---

## B. 사실 검증 (요청 항목 1~12 순서)

### 1. 발표일 현지 2026-09-10 — **[확인]**
- OpenAI 개발자 포럼 공식 공지 「Introducing the Agents API and hosted sandboxes」 게시 시각 **"September 10, 2026, 8:54pm"** (openai.com 도메인 계열 1차급)
- MarkTechPost 기사 URL·일자 `2026/09/10`, DataStudios, AI/TLDR 모두 09-10로 일치
- 초고 16줄 "현지 시각 9월 10일" ✓

### 2. "The Agents API adds no fee of its own." — **[치명적] (귀속 오류)**
초고 30줄은 이 문장을 **「공식 문서의 문장은 이렇습니다」라며 인용부호로 제시**한다. 그러나 이 영문 문장이 확인되는 곳은 **2차 매체 AI/TLDR 한 곳뿐**이고, 오픈AI 도메인에서는 찾지 못했다.

오픈AI 측 실제 표현은 다음 두 가지다.
- 개발자 문서(overview): **"Model usage is billed at the selected model's API rates"** / **"OpenAI tools use their standard rates, and OpenAI-hosted sandboxes use standard container rates."**
- 오픈AI 개발자 포럼 공지: **"There are no additional fees for using the Agents API – you simply pay for the tokens and tools your agents use"**

→ **내용(별도 요금 없음)은 사실이지만, 저 영문 문장을 공식 문서의 문장으로 인용하면 안 된다.** 제목과 논지 전체가 이 인용에 걸려 있어 치명적으로 분류했다.

**과금 대상 범위**도 한 칸 넓다 — 문서는 **오픈AI가 호스팅하는** 샌드박스의 컨테이너 요율을 말한다. 초고의 "샌드박스 사용량"은 뒤에서 자체 호스팅을 논하는 글의 맥락에서 오해를 부른다. → [중요] C-4

### 3. 4개 프리미티브 + 오픈AI의 역할 분담 — **[확인]**
개발자 문서 원문 대조 결과 전부 일치.
- Agent: "The model, instructions, tools, and MCP servers available to the agent"
- Environment: "An optional sandbox or computer where the agent accesses files, loads skills, and runs commands"
- Session: "A durable instance of an agent that works on tasks and responds to input"
- Events and items: "The inputs sent to an agent and the output produced during a session"
- 역할: **"OpenAI manages sessions, orchestration, context compaction, and recovery while your application provides tools and chooses its execution environment."**

초고 20줄의 네 조각 서술과 "세션을 살려 두고, 오케스트레이션을 하고, 컨텍스트가 차면 압축하고, 실패하면 복구하는 일" 모두 정확 ✓

### 4. 압축(compaction) — (a)(b)(c) **[확인]** / (d) **[치명적] (출처 오귀속 + 과단정)**

**(a) 압축된 윈도 + 암호화된 압축 아이템 — [확인]**
> "The returned compacted window includes an encrypted compaction item that carries forward key prior state and reasoning using fewer tokens."

초고 36줄·48줄 서술 정확 ✓ (참고로 문서는 "The compacted window generally contains more than just the compaction item. It can also include retained items from the previous window."라고도 적는다 — 초고 서술과 상충하지는 않음)

**(b) 불투명 · 사람이 해석할 것을 의도하지 않음 — [확인]**
> **"It is opaque and not intended to be human-interpretable."** (문서 내 2회 등장)

초고 48줄 "문서는 그것이 불투명하며 사람이 해석할 것을 의도하지 않았다고 적어 뒀습니다" — **직역 수준으로 정확** ✓ 이 글에서 가장 잘 검증된 문장이다.

**(c) 문턱값 기반 서버 측 자동 압축 — [확인]**
> "You can enable server-side compaction in a Responses create request (`POST /responses` or `client.responses.create`) by setting `context_management` with `compact_threshold`."
> "When the rendered token count crosses the configured threshold, the server runs server-side compaction."
> "No separate `/responses/compact` call is required in this mode."

초고 36줄의 두 가지 방식(직접 호출 / 문턱값 설정 후 서버 자동 실행) 서술 정확 ✓

**(d) "자동 압축 요청의 사용량이 같은 실행 합계에 더해진다" — [치명적]**

요청대로 근거 문장을 그대로 인용한다. 확인된 원문은 이것 하나다.

> **"When an `OpenAIResponsesCompactionSession` automatically compacts history before the run finishes, usage reported by that `responses.compact` request is also added to the same run totals."**
> — 출처: **`https://openai.github.io/openai-agents-python/usage/` (오픈AI Agents SDK, "Usage" 문서)**

같은 페이지에 사용량 필드도 있다: `requests`(LLM API 호출 횟수), `input_tokens`, `output_tokens`, `total_tokens`, `request_usage_entries`, `details`(cached·cache write·reasoning tokens). 또 "A manual `run_compaction()` call made outside a run has no enclosing run context, so it does not update the usage from that earlier run."

**문제는 세 겹이다.**

1. **문서가 다르다.** 초고 36줄은 "개발자 문서에 동작이 적혀 있는데요"로 압축 가이드(`developers.openai.com/.../compaction`)를 가리키고, 38줄이 그 흐름을 이어받아 과금 문장을 제시한다. 그런데 저 문장은 압축 가이드가 아니라 **오픈소스 Agents SDK의 사용량 추적 문서**에 있다. 압축 가이드를 두 차례 독립 조회했으나 usage·billing·run totals 관련 문장을 찾지 못했다(단, §0의 부분 렌더 한계상 "없다"고 단정하지는 않는다).
2. **제품 범주가 뒤집힌다.** 근거가 된 SDK는 초고 62줄이 **대안 경로로 제시한 바로 그 물건**이다("루프를 직접 소유하고 싶으면 오픈소스인 Agents SDK로"). 자체 호스팅 루프의 사용량 집계 문서로 관리형 Agents API의 과금을 논증하는 것은 범주 오류이고, 하필 이 글의 대립축을 스스로 무너뜨린다.
3. **성격이 다르다.** SDK 문장은 **사용량 회계·보고**(`Usage` 객체 합산) 규정이며 "billed/charged"라는 단어가 없다. 초고 38줄의 "압축은 공짜로 처리되는 정리 작업이 아니라 **청구되는 추론 호출입니다**"는 문서상 **단정이 아니라 추론**이다.

**단, 추론 자체는 근거가 튼튼하다.** 아래 두 문서 사실을 이으면 성립한다.
- `/responses/compact` 응답에는 사용량 객체가 있다 — API 레퍼런스 원문: **"Token accounting for the compaction pass, including cached, reasoning, and total tokens."** (`input_tokens`, `output_tokens`, `total_tokens`, `input_tokens_details.cached_tokens`/`cache_write_tokens`, `output_tokens_details.reasoning_tokens`)
- Agents API는 별도 요금이 없고 **모델 사용량을 모델 API 요율로 과금**한다(항목 2).
→ 압축 패스가 모델 토큰을 소모하고 그 토큰이 모델 요율로 청구된다는 결론은 타당하다. **바꿔야 할 것은 결론이 아니라 근거 제시 방식이다.** (교정문 C-2)

### 5. GPT-6 Astra: 출시일·요율·"이달 초" — **[확인]** / 지원 모델 단독 서술 **[중요]**
- 출시 **2026-09-03** ✓ (복수 출처 일치). 발행일 09-12 기준 **"이달 초 공개된"은 정확**하다 ✓
- API 요율 **100만 토큰당 입력 $10 / 출력 $50** ✓ (캐시 입력 $1, 배치·flex 반값 $5/$25, Fast mode 2배). 자릿수 오류 없음 ✓
- 팩트 카드의 "09-03 승인 조직 한정 → 다음 날 GA"는 초고에 쓰이지 않았다(무해).
- **⚠ [중요]:** 초고 40줄 "**지원 모델은** 이달 초 공개된 GPT-6 Astra이고"는 **유일 지원 모델이라는 함의**를 준다. `gpt-6-astra`는 문서 예제에서 쓰이는 모델로만 확인되며, 단독 지원이라는 1차 근거는 찾지 못했다. → 완화 필요 (C-5)

### 6. 자체 호스팅 샌드박스도 ZDR 비대상 + 베타 중 미국 한정 — **[확인]** (2차 3곳 교차)
`environments/self-hosted` 1차 페이지는 §0의 부분 렌더로 해당 문단이 오지 않았다. 2차로 교차했고 서술이 일치한다.
- AI/TLDR: **"Data residency for the Agents API is limited to the United States during the public beta, and zero data retention is unsupported no matter which sandbox type is selected."** + 자체 호스팅 선택이 **"does not make the Agents API eligible for zero data retention"**
- `developers.openai.com/.../your-data` 및 ProgressiveRobot(09-11), byteiota 검색 결과에서 "Agents API는 미국만 지원하고 ZDR 미지원, 자체 호스팅 샌드박스를 골라도 ZDR 적격이 되지 않는다"로 동일 확인

초고 58줄 서술 ✓ 유지. **단 "문서에 이렇게 적혀 있습니다"는 유지해도 되지만, 인용부호를 붙인 직접 인용으로 바꾸지는 말 것**(1차 문면을 이 세션에서 직접 확인하지 못했다).

### 7. 샌드박스 제공자 — **[확인]**
1차 문서(`environments/self-hosted`)에 **정확히 아홉 곳**: Modal, Cloudflare, Vercel, Daytona, Blaxel, E2B, Runloop, DigitalOcean, **Oracle Cloud Infrastructure(OCI)**. DataStudios·MarkTechPost도 동일 9개 이름.
- 초고 56줄이 호명한 **Cloudflare·E2B·Modal·Vercel·Oracle 전부 목록에 있고**, "제공자 아홉 곳" ✓
- 경미: Oracle의 문서상 표기는 "Oracle Cloud Infrastructure(OCI)"다. 초고의 "Oracle"은 허용 범위.

### 8. 일반 API 레지던시에 한국 포함 + ZDR — **[확인]**
오픈AI 원문: **"Data residency is currently available in Europe, the United Kingdom, the United States, Canada, Japan, South Korea, Singapore, India, Australia, and the United Arab Emirates."**
→ 초고 60줄의 "유럽·영국·미국·캐나다·일본·싱가포르·인도·호주·UAE와 함께 한국" — **열 곳 목록이 하나도 틀리지 않고 누락도 없다** ✓

ZDR: **"API requests initiated through Projects will be handled in-region by OpenAI with zero data retention"**, 적용 대상은 **"API users who have been approved for advanced data controls"**.
→ 초고 "ZDR도 적격 조직과 엔드포인트를 대상으로 제공됩니다" ✓ 사실과 부합. (정밀하게는 '사전 승인된 조직 + Projects 경유 요청' 조건이다 — 굳이 고칠 필요는 없으나 원하면 C-9 참고)

### 9. 벤더 수치 60% / 86% — **[중요]** (귀속은 적절, 묶음이 틀림)
DataStudios 원문은 **서로 다른 세 고객**이다.
- "one early adopter" → **"4× reduction in latency"**
- "another reported" → **"60% reduction in cost per case"** (case-review 워크플로)
- "a third saw" → **"86% reduction in failed agent responses"**

초고 42줄 "오픈AI가 소개한 **사례에는** 건당 비용이 60% 줄고 실패한 에이전트 응답이 86% 줄었다는 숫자도 있고요"는 **한 사례에서 두 수치가 같이 나온 것처럼 읽힌다.** 팩트 카드가 세 수치를 "어떤 고객" 한 줄로 묶어 놓은 것이 원인이다.
- 다만 **"오픈AI가 소개한 사례"** 귀속과 **"고객명과 워크로드가 공개되지 않은 벤더 제시 수치이고 독립 검증도 없습니다"** 명시는 **모범적**이다 ✓ 이 부분은 그대로 유지.
- "건당 비용"은 "cost per case"의 타당한 번역 ✓

### 10. Agents SDK vs Responses API — **[확인]**
Agents SDK는 오픈소스이며 내 애플리케이션 프로세스 안에서 도는 프레임워크, Responses API 직접 호출은 턴 관리까지 개발자 소유 — SDK 문서와 부합 ✓ 초고 62줄 서술 정확.
(팩트 카드의 "Agent Builder·Evals 2026-11-30 이후 종료"는 2차 출처라 초고가 쓰지 않았다 — **올바른 판단** ✓)

### 11. "분, 시간, 심지어 며칠" — **[확인]**
공식 서술 확인: Agents API는 **"tasks that may continue for minutes, hours, or even days"**를 대상으로 하며, 단일 모델 응답으로 부족해 컨텍스트 보존·툴 실행·파일 관리·중단 복구·병렬 조율이 필요한 작업을 전제한다.
초고 20줄 "상정하는 작업 길이는 분 단위나 시간 단위, 심지어 며칠이라고 적혀 있고요" ✓

### 12. tool search — **[확인]**
공식 서술: **"Tool search loads relevant tool definitions as needed, helping reduce token usage and cost while preserving the model's cache."**
초고 28줄 "툴 정의를 전부 컨텍스트에 밀어 넣지 않고 필요할 때만 불러오는 tool search" ✓ / 42줄 "tool search도 컨텍스트를 줄이는 장치입니다" ✓ (문서가 명시한 비용 절감 방향과 일치 — 균형 서술로 적절)

### 기타 스캔 결과

| 항목 | 판정 | 비고 |
|---|---|---|
| "가장 짧은 경로" 귀속 (18줄) | [확인] | 오픈AI가 Agents API를 "the shortest route from idea to working agent"로 내세운 것으로 확인. 인용부호 없이 "소개했습니다"로 처리해 안전 ✓. 단 "오픈AI 개발자 **계정**"은 한국어로 'developer account'로 오독될 수 있음 → C-8 |
| 인물·직함 | [확인] | 실명 인물·직함·발언 인용이 **본문에 하나도 없음.** 가공 인물 위험 0 |
| 제품·회사 철자 | [확인] | Agents API, Codex, MCP, Agents SDK, Responses API, Cloudflare, E2B, Modal, Vercel, Oracle, GPT-6 Astra, ZDR(zero data retention), compact_threshold — 전부 정확 |
| 병기 규칙 | [확인] | 마구(harness), 압축(compaction), ZDR(zero data retention) — 2026-08-12 개정 규칙(낯선 고유명사 한글+병기 후 한글 단독) 준수 |
| "지난 2년 동안" (26줄) | [경미] | 느슨한 시대 규정이나 에이전트 프레임워크 확산기와 대체로 부합. 검증 대상 수치 아님 |
| 자기 글 참조 (50줄) | [확인] | "기록하는 손과 기록되는 손" — 09-11(감사인 독립성 조항)·09-03(자기 신고 숫자가 법적 근거가 됨)과 연결되는 실재 논지. 날짜·'이 블로그' 없이 가볍게 처리해 스타일 규칙 준수 ✓ |
| excerpt (7줄) | [치명적 연동] | 본문 38줄과 같은 "청구되는 추론 호출" 단정을 반복 → 본문 교정 시 **함께** 고쳐야 함 |
| coverImage 공란 (8줄) | 운영 확인 | 현재 공란이므로 하단 커버 크레딧 줄 불필요(2026-09-04 규칙과 정합). 실사 이미지를 넣으면 크레딧 한 줄 추가 필요 |
| 검증 불가(?) 항목 | **없음** | 삭제 권고 대상 문장 없음 |

---

## C. 수정 권고 (우선순위 순)

### C-1 [치명적] 30줄 — 공식 문서에 없는 문장을 공식 인용으로 제시
현재:
> 공식 문서의 문장은 이렇습니다. "The Agents API adds no fee of its own." 하네스 자체에는 별도 요금이 없다는 뜻이고, 청구되는 것은 모델 토큰과 오픈AI가 제공하는 유료 툴, 그리고 샌드박스 사용량입니다.

교정안(오픈AI 실제 문면으로 교체 + 과금 범위 정밀화):
> 오픈AI의 공지 문장은 이렇습니다. "There are no additional fees for using the Agents API." 하네스 자체에는 별도 요금이 없다는 뜻이고, 개발자 문서는 청구되는 것을 세 가지로 적어 뒀습니다. 선택한 모델의 API 요율로 계산되는 모델 사용량, 오픈AI가 제공하는 유료 툴, 그리고 오픈AI가 호스팅하는 샌드박스의 컨테이너 사용량입니다.

### C-2 [치명적] 36~38줄 — 중심 논지의 근거를 바로 세우기
현재 38줄:
> 중요한 것은 그다음입니다. 자동 압축이 일어나면 그 압축 요청의 사용량이 같은 실행의 합계에 더해집니다. 호출 횟수와 입력 토큰과 출력 토큰이 모두 거기 들어갑니다. 압축은 공짜로 처리되는 정리 작업이 아니라 청구되는 추론 호출입니다.

교정안(문서에 실제로 있는 두 사실만으로 같은 결론에 도달 — 논지 강도는 그대로, 근거는 검증된 것으로 교체):
> 중요한 것은 그다음입니다. 압축 호출의 응답에는 사용량 객체가 함께 돌아옵니다. API 레퍼런스가 그것을 "압축 패스에 대한 토큰 회계"라고 부르고, 입력 토큰과 출력 토큰, 추론 토큰과 캐시 토큰까지 항목을 나눠 적어 뒀습니다. 그리고 Agents API에 별도 요금이 없다는 말은 모델 사용량이 그 모델의 API 요율로 계산된다는 뜻이지요. 두 문장을 이으면 답이 나옵니다. 압축은 공짜로 처리되는 정리 작업이 아니라 토큰을 쓰는 추론 호출이고, 그 토큰은 제 청구서에 올라갑니다.

- "같은 실행의 합계에 더해집니다"를 **꼭 살리려면** 반드시 출처를 바꿔 적어야 한다: "오픈AI Agents SDK의 사용량 문서는 자동 압축이 실행 중에 일어나면 그 `responses.compact` 요청의 사용량이 같은 실행 합계에 더해진다고 적습니다." **다만 그 문서는 관리형 Agents API가 아니라 이 글이 대안으로 제시한 오픈소스 SDK를 설명하는 문서**여서, 논지의 대립축이 흐려진다. **권고: 위 교정안으로 교체하고 SDK 문장은 쓰지 않는다.**
- 같은 취지로 **7줄 excerpt**도 함께 수정: "하네스가 자율적으로 하는 일은 청구되는 추론 호출입니다" → "하네스가 자율적으로 하는 일은 토큰을 쓰는 추론 호출입니다."

### C-3 [중요] 62줄 — 하루 어긋남
현재: "다만 어제까지 그 길은 누구나 걷는 길이었고, **오늘부터는** 굳이 고르는 길이 됐습니다."
교정안: "다만 지금까지 그 길은 누구나 걷는 길이었고, **이제부터는** 굳이 고르는 길이 됐습니다."
(발표는 KST 09-11이므로 '어제/오늘' 대비가 16줄의 "현지 시각 9월 10일"과 충돌한다. 날짜 표현을 지우면 해소.)

### C-4 [중요] 30줄 — 과금 대상 정밀화
"샌드박스 사용량" → "오픈AI가 호스팅하는 샌드박스의 컨테이너 사용량". C-1 교정안에 이미 반영. 뒤에서 자체 호스팅을 논하는 글이므로 이 구분이 특히 중요하다.

### C-5 [중요] 40줄 — 지원 모델 단독 함의 완화
현재: "지원 모델은 이달 초 공개된 GPT-6 Astra이고, API 요율은 100만 토큰당 입력 10달러, 출력 50달러입니다."
교정안: "문서가 예제에서 쓰는 모델은 이달 초 공개된 GPT-6 Astra이고, 그 API 요율은 100만 토큰당 입력 10달러, 출력 50달러입니다."

### C-6 [중요] 42줄 — 서로 다른 고객 사례임을 명시
현재: "오픈AI가 소개한 사례에는 건당 비용이 60% 줄고 실패한 에이전트 응답이 86% 줄었다는 숫자도 있고요."
교정안: "오픈AI가 소개한 사례에는 건당 비용이 60% 줄었다는 고객도, 실패한 에이전트 응답이 86% 줄었다는 다른 고객도 있고요."
(뒤 문장의 "고객명과 워크로드가 공개되지 않은 벤더 제시 수치이고 독립 검증도 없습니다"는 그대로 유지 — 귀속 처리는 모범적이다.)

### C-7 [경미] 58줄 — 인용 형식 유지 권고
"그런데 문서에 이렇게 적혀 있습니다"는 현재처럼 **인용부호 없는 간접 서술로 유지**할 것. ZDR·미국 한정은 2차 3곳으로 확인됐으나 1차 문면을 직접 확인하지 못했으므로 직접 인용으로 승격하지 말 것.

### C-8 [경미] 18줄 — 오독 방지
"오픈AI 개발자 계정은" → "오픈AI 개발자 채널은" 또는 "오픈AI 디벨로퍼스는".
('개발자 계정'이 developer account로 읽힌다.)

### C-9 [경미, 선택] 60줄 — ZDR 조건 정밀화
"ZDR도 적격 조직과 엔드포인트를 대상으로 제공됩니다"는 사실과 부합한다. 더 정밀하게 쓰고 싶으면 "사전 승인을 받은 조직이 Projects를 통해 보낸 요청을 대상으로 제공됩니다".

### C-10 [경미] 발행 후 작업
`_style/ai-timeline.md`에 2026-09-10 Agents API 퍼블릭 베타 엔트리 추가(현재 없음). ZDR·미국 한정이 **베타 한정 제약**이라는 점, 벤더 수치 3건이 **서로 다른 고객**이라는 점을 ⚠로 기록해 재사용 시 오류 재발 방지.

---

## D. 종합 판정

- [ ] 발행 가능
- [x] **수정 후 발행** — C-1, C-2를 반영하면 발행 가능. C-3~C-6도 함께 반영 권고.
- [ ] 발행 중단

**판단 근거:** 날짜(09-10 발표, 09-03 Astra), 수치(10달러/50달러, 60%, 86%, 아홉 곳), 레지던시 10개국 목록, 4개 프리미티브, 압축의 (a)(b)(c) 동작은 **모두 정확했다.** 특히 "It is opaque and not intended to be human-interpretable."와 레지던시 국가 목록은 원문과 한 칸도 어긋나지 않는다. 시점 규율 위반도 없다.

문제는 두 개의 **인용·귀속**이며 둘 다 사실관계가 아니라 출처 표기의 문제다. (1) 제목이 걸린 영문 인용이 공식 문서가 아니라 2차 매체 문장이고, (2) 중심 논지의 근거 문장이 관리형 Agents API 문서가 아니라 오픈소스 Agents SDK 문서에서 왔다 — 게다가 그 SDK는 같은 글이 대안으로 제시한 물건이다. 논지 자체는 `/responses/compact`의 토큰 회계 + 모델 요율 과금이라는 **문서에 실재하는 두 사실로 그대로 지탱되므로, 논지를 버릴 필요 없이 근거만 교체하면 된다.**
