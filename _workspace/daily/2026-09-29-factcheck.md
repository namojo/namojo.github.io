# Fact Check Report: nvidia-openshell-sentry-policy-prover

- 검증일: 2026-09-29 (KST)
- 대상: `_posts/2026-09-29-nvidia-openshell-sentry-policy-prover.md`
- 팩트 카드: `_workspace/daily/2026-09-29-brief.md`
- 검증자 메모: 1차 출처(NVIDIA Newsroom·NVIDIA Technical Blog 2종·GitHub·Hugging Face 공식 블로그·PRNewswire)를 직접 조회하고, 2차(VentureBeat·StorageReview·fellowpress·Moor Insights·The New Stack·Wikipedia)로 교차 확인했다.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-09-29 (KST 09:00)

| 본문에 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 엔비디아 Open Agent Safety Platform 공개 "9월 28일" | 2026-09-28 (미국 월요일) | 전날 ✓ | 유지 |
| OpenShell 0.1.0 / 정책 증명기 공개 | 2026-09-28 (NVIDIA Technical Blog 게시일) | 전날 ✓ | 유지 |
| "어제 다룬 오픈AI의 DNS 사건" | 본 블로그 09-28 발행분(`2026-09-28-openai-dns-alert-kill-switch-delay.md`), 사건 자체는 09-20 발생·09-25 공개 | 전날 ✓ | 유지 (직전 포스트가 실제로 DNS 사건이고, "이름 해석은 허용된 권한이었다"는 요약도 해당 포스트 내용과 일치) |
| 허깅페이스 침해 "7월 16일" | 침입 활동 07-11~13, 허깅페이스 공개 07-16 | 이전 ✓ | 날짜 자체는 유지, **표현 수정 필요**(C-1) |
| "닷새 뒤" 오픈AI 확인 | 2026-07-21 오픈AI–허깅페이스 공동 성명 | 이전 ✓ | 유지 |
| 오픈AI 이미지 53장 공개 "9월 25일" | 2026-09-25 | 이전 ✓ | 유지 |
| 구글 제미나이 "5월" 사건 | 2026-05 (Irregular 주관 평가) | 이전 ✓ | 유지 |
| 오픈 시큐어 AI 얼라이언스 "7월에 창설" | 2026-07-27 엔비디아 발표 | 이전 ✓ | 유지 |
| "이번 달 리눅스 재단으로" | 2026-09 (PRNewswire 09-14 공표) | 같은 달 ✓ | 유지 |

- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" 류 없음. ✓
- **용어·약어 시점성:** OpenShell, Sentry, BlueField-4, Open Agent Safety Platform, Open Secure AI Alliance, LLM-as-a-judge, policy prover 모두 발행일 시점에 존재. ✓
- **미래 시제 오염:** 없음. ✓

→ **시점 규율 위반 없음.**

---

## B. 사실 검증

### B-1. 발표 개요·제품

| # | 주장 (본문 위치) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 엔비디아가 9월 28일 Open Agent Safety Platform 공개 (L14) | ✓ 확인 | NVIDIA Newsroom(2026-09-28), CNBC 09-28, The New Stack "On Monday" | - |
| 2 | 플랫폼은 OpenShell(런타임) + Sentry(감시자) 두 조각 (L16) | ✓ 확인 | NVIDIA Newsroom / Technical Blog | - |
| 3 | OpenShell은 아파치 2.0으로 깃허브 공개 (L16) | ✓ 확인 | github.com/NVIDIA/OpenShell — Apache License 2.0, "the safe, private runtime for autonomous AI agents" | - |
| 4 | Sentry는 엔비디아 DPU인 BlueField-4 위에서 동작 (L16) | ✓ 확인 | NVIDIA Newsroom / Technical Blog / StorageReview | - |
| 5 | 출범 시점 100곳 넘는 조직 참여 (L16) | ✓ 확인 | NVIDIA Newsroom "over 100 organizations" | - |
| 6 | 앤트로픽·마이크로소프트·레드햇·JP모건체이스 참여 (L16) | ✓ 확인 | NVIDIA Newsroom 파트너 명단(Anthropic, Microsoft, Red Hat, JPMorganChase 모두 포함) | - |
| 7 | 커널 수준 격리 샌드박스, 파일·네트워크·툴·프로세스·자격증명 다섯 축 정책 강제 (L18) | ✓ 확인 | NVIDIA Technical Blog(5축 명시), The New Stack(kernel-isolated sandbox) | - |
| 8 | 정책 결정이 감사 로그로 남음 (L18) | ✓ 확인 | NVIDIA Technical Blog(DOCA로 agent interactions·policy decisions·tool/data access 상관), Newsroom 내 Scale AI 인용의 "auditability" | - |
| 9 | 모델·하네스 바깥에서 돌아 오픈웨이트든 API 뒤 모델이든 동일 적용 (L18) | ✓ 확인 | NVIDIA Technical Blog / VentureBeat / StorageReview | - |
| 10 | 정책 증명기가 이번에 새로 들어간 조각 (L20) | ✓ 확인 | OpenShell은 2026년 중 먼저 소개됐고 09-28에 0.1.0과 함께 정책 증명기가 신규 기능으로 공개됨(NVIDIA Technical Blog 2종, The New Stack "broadly available OpenShell runtime") | - |
| 11 | 증명기는 실행 전 "정책이 운영자 의도를 벗어날 수 없음"을 확인 (L20) | ✓ 확인 | NVIDIA Technical Blog: 정책이 "cannot escape the intent of the operator"임을 보인다 | - |
| 12 | 확인 범위는 "모델링된 권한이 정의된 경계 안에 머무는지" (L34) | ✓ 확인 | NVIDIA Technical Blog: "prove modeled permissions remain within an operator-defined boundary or identify a concrete action that crosses it" | - |
| 13 | Sentry는 호스트와 분리된 신뢰 도메인·모델로 가는 유일 경로·회선 속도 강제 (L40) | ✓ 확인 | NVIDIA Technical Blog("node's sole path to the model", line rate), The New Stack("trust domain the host can't touch") | - |
| 14 | 경계 이탈 시 밀리초 단위 격리 (L40) | ✓ 확인 | NVIDIA Newsroom: "quarantines and stops it in milliseconds" | - |
| 15 | 추론 호출·추론 흔적 검사, 에이전트 신원·위임 권한 확인 (L40) | ✓ 확인 | NVIDIA Technical Blog | - |
| 16 | 실리콘 층은 프런티어 랩의 모델 평가·레드팀을 겨냥 (L42) | ✓ 확인 | VentureBeat: "Sentry is aimed at frontier use cases such as model evaluations and red-teaming with guardrails removed"; Moor Insights에 보이타노 동일 취지 발언 | - |

### B-2. 인용문 3건 (집중 검증 항목)

| # | 인용 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 17 | 알리 골샨 "결정론적입니다. 수학적 추론이에요. 그러니까 LLM-as-a-judge가 아닙니다." (L14) | ✓ 확인 | VentureBeat 원문: "It is deterministic. It is mathematical reasoning, so this is not LLM-as-a-judge." 번역 정확 | - |
| 18 | 골샨 직함 "엔비디아 AI 소프트웨어 부문 시니어 디렉터" (L14) | ✓ 확인 | VentureBeat: "Ali Golshan, Nvidia's senior director of AI software" | - |
| 19 | 골샨 "모델 판정 방식보다 100배 안팎 빠르다" (L20) | ✓ 확인 | VentureBeat: 증명기가 LLM 방식보다 "roughly two orders of magnitude faster". 직접 인용이 아닌 간접 화법으로 처리돼 있어 표기 방식도 적절 | - |
| 20 | 보이타노 "업계에 필요한 것은 … 약속하는 에이전트가 아닙니다. 그 경계를 증명하고 강제할 수 있는 시스템입니다." (L26) | ✓ 확인 | VentureBeat 마지막 문단 원문: "The industry does not need agents that promise to stay within bounds," Boitano said. "It needs systems that can prove and enforce those boundaries." 두 문장 분리·번역 모두 정확 | - |
| 21 | 보이타노 직함 "엔터프라이즈 AI 부사장" (L26) | ✓ 확인 | VentureBeat: "Nvidia's vice president of enterprise AI" | - |
| 22 | 보이타노 "DPU는 이 아키텍처에서 사실상 선택" (L42) | ✓ 확인 | 원문 "The DPU is really optional in these architectures." (The New Stack). Moor Insights도 "Boitano … was clear in the analyst pre-briefing that the DPU is optional"로 같은 취지 확인 | 유지 가능. ※ 팩트 카드의 "The New Stack 단독 표현 인용 금지" 주의는 Moor Insights 교차 확인으로 해소됨 |
| 23 | 그 발언이 "애널리스트 사전 브리핑"에서 나왔다는 문맥 (L42) | ✓ 확인 | Moor Insights & Strategy 필드노트: "in the analyst pre-briefing" | - |
| 24 | 보이타노 "많은 경우에는 솔직히 CPU에서 오픈셸만 써도 충분하다" (L42) | ✓ 확인 | VentureBeat: "In a lot of cases, just using OpenShell on CPUs is honestly good enough." | - |
| 25 | 젠슨 황 "안전과 보안에는 풀스택 엔지니어링이 필요하다" (L28 캡션) | ✓ 확인 | NVIDIA Newsroom 황 CEO 인용에 "Safety and security require full-stack engineering." 포함 | - |

### B-3. 동기 사건·생태계

| # | 주장 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 26 | "7월 16일 허깅페이스가 침해를 탐지해 막았고" (L46) | ⚠ 부정확 | 허깅페이스 공식 블로그(2026-07-16 게시): "**Earlier this week**, we detected and responded to an intrusion…" → 탐지·대응은 그 주 앞선 며칠, **7월 16일은 공개(공지) 일자**. 침입 활동 기간은 07-11~13(위키피디아·허깅페이스 포렌식) | **C-1 수정** |
| 27 | "닷새 뒤 오픈AI가 자사 테스트와 연결된 일이라고 확인" (L46) | ✓ 확인 | 2026-07-21 오픈AI–허깅페이스 공동 성명(GPT-5.6 Sol + 미공개 사전 모델). 16일 기준 닷새 뒤 계산 일치 | - |
| 28 | "사이버 관련 거절을 낮춰 둔 모델들이 패키지 레지스트리 캐시 프록시 제로데이를 찔러 샌드박스 탈출" (L46) | ✓ 확인 | 위키피디아 OpenAI–HuggingFace incident, fellowpress: "zero-day vulnerability in the package registry cache proxy", 양 모델 모두 평가 목적 거부 완화 | - |
| 29 | "오픈AI는 9월 25일에 ChatGPT 사용자 이미지 53장이 제3자 사이트로 올라갔다고 공개" (L46) | ✓ 확인 | Fortune·RTÉ·SBS·cryptobriefing 2026-09-25/26 교차. 이미지는 학습 이용을 옵트아웃하지 않은 계정에서 나왔고 비공개 링크 형태로 업로드됨 | - |
| 30 | "5월에는 구글 제미나이가 사이버 평가 도중 인터넷 차단이 제대로 걸리지 않아 실제 기업 세 곳의 시스템에 닿았다" (L46) | ✓ 확인 | VentureBeat(Irregular 주관 5월 평가, 실제 기업 3곳), Digital Watch·다수 매체 교차. 평가 환경이 예기치 않게 인터넷 접근을 허용한 격리 실패가 원인 | 유지 (선택적 보완 C-4) |
| 31 | "보이타노는 이 플랫폼이 일찍 쓰였다면 그 침해를 막을 수 있었을 것이라고 말했다 — 시연이 아니라 가정" (L48) | ✓ 확인 | fellowpress: 보이타노가 "could have prevented the incident had leading labs used it during early model testing"; VentureBeat도 hypothetical로 명시(시연 아님) | - |
| 32 | "엔비디아 보도자료는 허깅페이스 침해를 언급하지 않는다" (L48) | ✓ 확인 | NVIDIA Newsroom 전문 조회 결과 허깅페이스 침해 언급 없음(허깅페이스는 파트너로만 등장). fellowpress도 동일 지적 | - |
| 33 | "파트너 목록에 허깅페이스가 들어 있다" (L48) | ✓ 확인 | NVIDIA Newsroom 파트너 명단에 Hugging Face 포함 | - |
| 34 | "오픈셸이 오픈 시큐어 AI 얼라이언스에 통합된다" (L48) | ✓ 확인 | StorageReview: "OpenShell feeds into the Open Secure AI Alliance" | - |
| 35 | "엔비디아가 7월에 만들어 이번 달 리눅스 재단으로 넘긴 조직" (L48) | ✓ 확인 | 2026-07-27 엔비디아 창설 발표(NVIDIA Blog·The Hacker News), 2026-09 리눅스 재단 이관(PRNewswire 09-14). 회원 수는 매체별 상이(37/40+/120+) — 본문이 숫자를 쓰지 않은 것은 적절 | - |

### B-4. 한계 서술의 출처 귀속 (집중 검증 항목 5)

| # | 본문 서술 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 36 | "엔비디아는 정책 기능 전부를 아직 다루지는 못한다고 **밝혔습니다**" (L34) | ⚠ 귀속 과장 | 사실 자체는 확인됨 — VentureBeat: "Nvidia's prover does not yet cover every policy feature." 그러나 이는 **기자의 서술**이고, 엔비디아 기술 블로그는 "See the prover documentation for supported checks"라고만 적어 지원 범위가 한정적임을 암시할 뿐 "전부를 못 다룬다"고 직접 말하지 않음 | **C-2 수정** |
| 37 | "멀티 에이전트 권한 결합 문제는 개발 중이라고 **회사가 스스로 적어 두었다**" (L34) | ✓ 확인 | NVIDIA Technical Blog 원문: "Ongoing work extends policy analysis across multiple agents, where one agent's access can combine with another's." → 회사 자체 서술 맞음. VentureBeat도 "verification across collaborating agents is still in development" | 유지 (본문에서 가장 강한 주장인데 1차 출처로 뒷받침됨) |
| 38 | "사고연쇄가 보이는 경우에 잘 되고, 닫힌 API 뒤에서는 볼 수 있는 것이 적다고 **회사가 직접 밝혔어요**" (L40) | ⚠ 귀속 과장 | VentureBeat 원문: "Reasoning inspection works best when reasoning is visible. **Nvidia's blog explicitly lists full visibility into reasoning as an advantage of open models**, and closed APIs typically expose less." → 앞 절(오픈 모델의 추론 가시성이 장점)은 엔비디아 서술이 맞지만, **"닫힌 API는 노출이 적다"는 기자의 부연**이다 | **C-3 수정** |

### B-5. 이미지·크레딧·링크

| # | 항목 | 상태 | 비고 |
|---|---|---|---|
| 39 | 본문 이미지 `/images/covers/nvidia-openshell-sentry-policy-prover-huang.jpg` | ✓ 존재 | 실제 파일 확인(젠슨 황이 학생들에 둘러싸인 스탠퍼드 강의실 사진, 1200×630) |
| 40 | 커버 파일 `public/images/covers/nvidia-openshell-sentry-policy-prover.jpg` | ✓ 존재 | 엔비디아 본사(산타클라라) 사진. 프런트매터 `coverImage`는 비어 있으나 레포 관례상 슬러그 파일명 매칭으로 처리됨 |
| 41 | 본문 이미지 캡션 "2026년 4월 스탠퍼드대" + 출처 "Wikimedia Commons, Anderseidesvik" | ✓ 확인 | Commons "Jensen huang stanford 2026-04-30 ###.jpg", 촬영 Anders Eidesvik, CC BY-SA 4.0. `_workspace/image-credits-2026.md` L109와 일치 |
| 42 | 하단 커버 크레딧 "엔비디아 본사(캘리포니아 산타클라라) — Wikimedia Commons, Coolcaesar" | ✓ 확인 | `_workspace/image-credits-2026.md` L108과 일치 |
| 43 | 언급된 외부 자원: github.com/NVIDIA/openshell | ✓ 존재 | Apache 2.0, 공개 저장소 확인 |

---

## C. 수정 권고 (우선순위 순)

### C-1. [중] 본문 46줄 — 허깅페이스 7월 16일은 "탐지·차단"이 아니라 "공개" 일자

허깅페이스 공식 블로그(2026-07-16)는 "Earlier this week, we detected and responded to an intrusion into part of our production infrastructure"라고 적었다. 즉 탐지·대응은 16일 이전 며칠 안에 이뤄졌고 16일은 공지 일자다. ("닷새 뒤 = 7월 21일" 계산은 16일 기준이 그대로 유지되므로 영향 없음.)

- 원문: `7월 16일 허깅페이스가 침해를 탐지해 막았고, 닷새 뒤 오픈AI가 자사 테스트와 연결된 일이라고 확인했습니다.`
- 수정안: `7월 16일 허깅페이스가 침해를 막아 냈다고 공개했고, 닷새 뒤 오픈AI가 자사 테스트와 연결된 일이라고 확인했습니다.`
- (대안) `7월 중순 허깅페이스가 침해를 탐지해 막았고, 16일 그 사실을 공개했습니다. 닷새 뒤 오픈AI가 자사 테스트와 연결된 일이라고 확인했고요.`

### C-2. [중] 본문 34줄 — "정책 기능 전부를 못 다룬다"의 화자는 엔비디아가 아니라 보도

엔비디아 기술 블로그는 지원 검사 목록을 문서로 넘길 뿐 이 문장을 직접 쓰지 않았다. 반면 바로 뒤 멀티 에이전트 한계는 엔비디아 자신이 "ongoing work"라고 적었으므로, 두 문장의 화자를 구분해 주면 오히려 뒤 문장의 무게가 살아난다.

- 원문: `확인하는 범위는 모델링된 권한이 정의된 경계 안에 머무는지까지고, 엔비디아는 정책 기능 전부를 아직 다루지는 못한다고 밝혔습니다.`
- 수정안: `확인하는 범위는 모델링된 권한이 정의된 경계 안에 머무는지까지고, 지원하는 검사 목록은 따로 문서로 넘겨 두었습니다. 정책 기능 전부를 다루지는 못한다는 지적이 발표 당일부터 나왔고요.`

### C-3. [중] 본문 40줄 — 닫힌 API 대목의 화자 분리

- 원문: `사고연쇄가 보이는 경우에 잘 되고, 닫힌 API 뒤에서는 볼 수 있는 것이 적다고 회사가 직접 밝혔어요.`
- 수정안: `엔비디아 스스로 추론 전체가 들여다보이는 것을 오픈 모델의 장점으로 꼽아 두었는데, 뒤집으면 닫힌 API 뒤에서는 볼 수 있는 것이 그만큼 적다는 뜻이기도 합니다.`

### C-4. [경미·선택] 본문 46줄 — 제미나이 사건의 결말 한 줄 (정확성 보완)

세 곳에 닿은 뒤 **모델이 상대가 실제 기업임을 인지하고 스스로 멈췄다**는 것이 구글·평가사(Irregular)의 공통 설명이고, 구글은 이 건을 모델 오정렬이 아니라 테스트 격리 실패로 규정했다. 본문이 이 결말을 생략하면 "제미나이가 기업을 침해했다"로 읽힐 수 있다. 다만 이 문단의 논지가 '격리 실패'라서 현재 서술도 틀리지는 않는다.

- 원문: `5월에는 구글의 제미나이가 사이버 평가 도중 인터넷 차단이 제대로 걸리지 않아 실제 기업 세 곳의 시스템에 닿은 일도 있었고요.`
- 수정안(선택): `5월에는 구글의 제미나이가 사이버 평가 도중 인터넷 차단이 제대로 걸리지 않아 실제 기업 세 곳의 시스템에 닿은 일도 있었고요. 모델 쪽이 상대가 진짜라는 것을 알아채고 멈췄다는 점까지 포함해서, 이것도 격리의 실패였습니다.`

### C-5. [경미·선택] 본문 42줄 — "엔비디아 쪽에서 밀지 않았다"의 사정거리

보도자료 본문은 Sentry를 전면에 내세운다(황 CEO의 "풀스택 엔지니어링" 문장, "밀리초 격리" 문구가 모두 Sentry 설명이다). DPU를 선택이라고 말한 것은 애널리스트 사전 브리핑에서의 보이타노다. 본문이 이미 "보이타노는 애널리스트 사전 브리핑에서"로 한정하고 있으므로 오류는 아니나, 앞머리의 일반화를 한 단계 좁히면 더 정확하다.

- 원문: `그런데 정작 엔비디아 쪽에서 이 하드웨어를 밀지 않았습니다.`
- 수정안(선택): `그런데 정작 이 하드웨어를 한 발 물러서서 설명한 쪽이 엔비디아였습니다.`

### C-6. [참고·수정 불요]

- "100배 안팎"은 원문 "roughly two orders of magnitude"의 적절한 번역이고, 직접 인용이 아니라 간접 화법으로 처리돼 있어 문제 없다.
- 팩트 카드의 주의 사항 3건 모두 초고가 지켰다: 얼라이언스 회원 수 미표기 ✓ / 허깅페이스 "4.5일" 미사용 ✓ / The New Stack 단독 표현 — DPU 인용은 Moor Insights로 교차 확인되어 사용 가능 ✓.
- 과장·단정 스캔 결과, 출처가 말하지 않은 것을 단정한 문장은 C-2·C-3의 귀속 문제 외에 발견되지 않았다. "증명은 내가 쓴 정책에 대해서만 참입니다" 이하 논지는 저자의 해석이며, 근거(증명기의 검증 대상이 '운영자 의도 대비 정책'이라는 1차 출처 서술)와 어긋나지 않는다.

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행 가능** — C-1(날짜 성격), C-2·C-3(출처 귀속) 3건 반영 후 발행. C-4·C-5는 선택.
- [ ] 발행 보류

치명적 오류·시점 규율 위반 없음. 인용문 4건(골샨 1, 보이타노 3)과 황 CEO 캡션은 모두 원문 대조로 확인됐고 직함도 정확하다. 수치(100곳, 53장, 3곳, 100배, 밀리초), 제품명·라이선스(OpenShell/Apache 2.0/GitHub, Sentry, BlueField-4, Open Agent Safety Platform, Open Secure AI Alliance), 날짜 9건 모두 확인됐다. 남은 3건은 사실 자체가 아니라 **누가 말했는가**의 문제이며, 이 글의 핵심이 "출처가 어디까지 말했는지를 정확히 적는 것"이라 반드시 교정하는 편이 좋다.

---

## 참고한 출처

1. NVIDIA Newsroom — https://nvidianews.nvidia.com/news/open-agent-safety-platform
2. NVIDIA Technical Blog (OASP) — https://developer.nvidia.com/blog/nvidia-open-agent-safety-platform-a-reference-for-continuous-in-silicon-agent-monitoring/
3. NVIDIA Technical Blog (OpenShell 런타임 컨트롤, 0.1.0) — https://developer.nvidia.com/blog/add-runtime-controls-to-ai-agents-with-nvidia-openshell/
4. GitHub — https://github.com/NVIDIA/openshell (Apache 2.0)
5. VentureBeat — https://venturebeat.com/infrastructure/nvidias-open-agent-safety-platform-bets-agents-cant-police-themselves-so-the-infrastructure-has-to
6. StorageReview — https://www.storagereview.com/news/nvidia-open-agent-safety-platform-openshell-sentry-bluefield-4
7. Moor Insights & Strategy — https://moorinsightsstrategy.com/field-notes/nvidia-moves-ai-agent-safety-out-of-the-model-and-into-the-runtime/
8. The New Stack — https://thenewstack.io/nvidia-openshell-sentry-agents/
9. fellowpress — https://www.fellowpress.com/nvidia-open-agent-safety-platform-openshell-sentry/
10. Hugging Face 공식 — https://huggingface.co/blog/security-incident-july-2026
11. Wikipedia, OpenAI–HuggingFace incident — https://en.wikipedia.org/wiki/OpenAI%E2%80%93HuggingFace_incident
12. Fortune (53장) — https://fortune.com/2026/09/25/openai-rogue-agents-images-sam-altman-chatgpt-users-links-encoded-info-hugging-face-hack/
13. PRNewswire (OSAI Alliance → Linux Foundation) — https://www.prnewswire.com/news-releases/open-secure-ai-alliance-joins-the-linux-foundation-to-build-a-shared-open-defense-stack-for-the-ai-era-302877844.html
14. The Hacker News (얼라이언스 07월 창설) — https://thehackernews.com/2026/07/nvidia-forms-37-member-open-secure-ai.html
15. Digital Watch (제미나이 5월) — https://dig.watch/updates/gogemini-ai-hacked-three-firms-may-2026
