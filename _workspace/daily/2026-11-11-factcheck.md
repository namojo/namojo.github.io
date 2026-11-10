# Fact Check Report: 2026-11-11 llmjacking-mixers-stolen-llm-keys

- 검증 대상: `_posts/2026-11-11-llmjacking-mixers-stolen-llm-keys.md`
- 팩트 카드: `_workspace/daily/2026-11-11-brief.md`
- 검증일: 2026-11-10~11 (KST)
- 1차 출처 직접 대조 완료: 파이어웍스 불리틴 / GTIG·맨디언트 블로그 / **노션 공식 보안 권고**(팩트 카드에 없던 1차 출처를 추가로 확보)
- 보조 대조: The Hacker News(11-10), 블룸버그 인용 보도(대변인 발언)

---

## 0. 치명적 오류

**치명적 오류 없음.**

날짜 오류 0건, 없는 발언 0건, 수치 자릿수 오류 0건, 시점 붕괴 0건, "출처가 말하지 않은 것을 단정"한 문장 0건.
특히 ZDR("영향이 탐지되지 않았다" vs "영향이 없었다") 구분, Jet Night 행위자와 파이어웍스 침해자를 동일범으로 쓰지 않은 점, 가정 문단에 근거의 사정거리를 스스로 그은 점 — 세 군데 모두 정확하게 처리돼 있다.

아래 C절의 **[중요] 1건**(12줄 "들어온 경로는 파이어웍스가 아니었습니다")은 사실 오류는 아니지만 **두 번의 침해 중 두 번째만 해당하는 서술이 전체에 걸리는 것처럼 읽힐 수 있는 구조적 부정확**이라 발행 전 손보기를 권한다.

---

## A. 시점 일관성

- **발행일:** 2026-11-11 (KST)
- 본문에 등장하는 사건은 전부 발행일 **이전**이며, 미래 사건을 과거형으로 쓴 곳이 없다.

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 파이어웍스 불리틴 갱신 | 2026-11-09 ("Last updated November 9, 2026") | 이전 ✓ | 유지 |
| 파이어웍스 최초 불리틴 | 2026-10-09 | 이전 ✓ | 유지 |
| 제3자 클라우드 사업자 침해 | 2026-10-23 | 이전 ✓ | 유지 |
| 개발 머신 도달·무단 워크로드 실행 | 2026-10-24 (이튿날, 같은 날 탐지) | 이전 ✓ | 유지 |
| GTIG·맨디언트 LLMjacking 보고서 | 2026-11-02 | 이전 ✓ | 유지 |
| 노션 공식 권고 공개 | 2026-11-09 (같은 날 갱신) | 이전 ✓ | 유지 |
| 더해커뉴스 등 2차 보도 | 2026-11-10 | 이전 ✓ | 유지 |

- **사후 시점 표현:** "훗날", "결국", "돌이켜보면" 류 없음. ✓
- **용어 시점성:** "LLM 믹서"(GTIG 11-02 명명), "LLMjacking", CVE-2026-40217 모두 발행일 이전에 공개된 용어·식별자. ✓
- **"오늘 확인해 볼 것"** 류 현재 시점 서술은 발행일과 충돌 없음. ✓

---

## B. 사실 검증 (요청 항목 전수)

| # | 주장 (본문 위치) | 상태 | 근거 |
|---|---|---|---|
| 1 | 파이어웍스가 **11월 9일** 공지 갱신 (12줄) | ✓ 확인 | 불리틴 상단 "Last updated November 9, 2026" (1차) |
| 2 | 제3자 클라우드 사업자 침해 **10/23**, 개발 머신 도달·무단 워크로드 **10/24(이튿날)**, 같은 날 탐지 (12줄) | ✓ 확인 | 불리틴 1차. ※ 2차 보도 일부가 "10/24 침해"로 뭉뚱그렸으나 1차 기준 23→24가 맞다 |
| 3 | 유출 범주 = 계정·과금 / 일부 고객의 시크릿·데이터셋 / **완성되지 않은** 모델 가중치 일부 (12줄) | ✓ 확인, 과장 없음 | 불리틴: resource metadata + billing(주소·인보이스·결제 이력·잔액·크레딧), "limited set of accounts"의 secrets·datasets·incomplete models, "a subset of incomplete model weights". 카드번호 미저장·미영향도 일치. 본문이 "들여다봤다(accessed)"로 쓴 것은 원문 수준에 정확 |
| 4 | **노션·커서가 파이어웍스 고객** (12줄) | ⚠ 2차 출처 기반(단, 복수 교차) | 파이어웍스 불리틴에는 **고객명이 없다**. 근거는 (a) 파이어웍스 웹사이트 고객 목록(노션·커서·하비), (b) 블룸버그가 인용한 파이어웍스 대변인 "actively working with our customers to manage the incident, including Notion, Cursor and others". 노션은 자사 권고에서 파이어웍스를 직접 거명. **커서는 스스로 아무것도 공개하지 않았다** — 본문이 "고객입니다"까지만 쓰고 피해를 주장하지 않은 것은 정확 |
| 5 | 귀속: "금전적 동기를 가진 범죄 집단", "무단 확보한 LLM 접근 권한에서 나온 토큰을 불법 라우팅 게이트웨이에 판매" (16줄) | ✓ 확인 | 불리틴에 "financially motivated" 표현 실재, "selling tokens from unauthorized access to Large Language Models (LLMs) to illicit routing gateways", 용어 "LLMJacking" 사용 확인 |
| 6 | GTIG·맨디언트 보고서 **11월 2일** 공개 (18줄) | ✓ 확인 | Google Cloud 블로그 게시일 2026-11-02. 파이어웍스 불리틴도 "on November 2 ... published a blog post"로 교차 확인 |
| 7 | "LLM 믹서" 정의 = 모아 두고 / 요청을 키들에 나눠 보내고 / 사용량을 재서 요금 부과 (18줄) | ✓ 확인 | 원문 "illicit routing gateways that proxy, aggregate, and resell unauthorized LLM access to underground subscribers" + "pool stolen credentials, meter usage, and obscure the origin of the requests". 본문의 "지하 구독자" 표현도 원문 그대로. (원문의 "요청 출처 은닉"은 본문에서 생략됐을 뿐 왜곡 아님) |
| 8 | "계정들 사이에 요청 부하를 분산" (22줄) | ✓ 확인 (서술 강도만 ⚠) | 원문 "likely to aggregate stolen keys and **balance request loads across accounts**" — 표현 일치. 다만 원문은 UNC6993의 new-api·gcli2api 사용에 대한 **GTIG의 평가(likely)**이고 본문은 단정형 "짚은"으로 받았다. C-3 참조 |
| 9 | Jet Night 월 **60달러** 무제한 | ✓ 확인 (⚠ "approximately") | 원문 "an unlimited token plan for **approximately $60 USD per month**". 본문 "월 60달러에" → "월 60달러 남짓" 권고 (C-4) |
| 10 | 정상 서비스 월 **100~250달러** | ✓ 확인 | "a consumer service level that would typically run between $100 and $250 per month" |
| 11 | **8시간 미만에 50만 건 초과** 호출 | ✓ 확인 | "more than 500,000 LLM API calls in less than eight hours" |
| 12 | 피해 조직에 **100만 달러에 가까운** 토큰 비용 | ✓ 확인 (연결 방식만 ⚠) | "Jet Night passed nearly one million dollars in token costs to the victim organization." 원문도 8시간 서술과 같은 문단에 놓여 있어 기간 귀속을 명시하지 않는다. 본문이 두 수치를 "~했고,"로 이어 붙여 **100만 달러가 그 8시간 안에 발생한 것처럼 읽힐 여지**가 있다 (C-5). ※ 별도로 보고서는 "individual incidents ... exceeding $100,000 USD in a single day, with cumulative charges at some organizations reaching $1 million USD"라는 전체 통계도 제시 — 본문은 이 수치를 쓰지 않았다 |
| 13 | 구글이 "훔친 키에 기대야만 수익이 난다"고 판단, **근거는 가격** | ✓ 확인 | "Given Jet Night's per-token costs to users are so far below typical market rates GTIG believes the service relies on stolen keys to operate profitably." 판단 근거를 가격으로 적시한 본문 서술이 원문 구조와 일치 |
| 14 | `max_tokens=1`·온도 0 요청 = **검증용**, 대규모 악용의 선행 신호 | ✓ 확인 | 보고서 본문: 한 행위자가 공개 깃허브에서 수집한 키를 `max_tokens=1` 최소 요청으로 검증, 볼륨 기반 EDR/SIEM 임계 아래로 유지. 권고: "anomalous, low-volume requests (such as `max_tokens=1` or zero-temperature pings)"를 대규모 악용의 **전조(precursor)**로 모니터링. 본문의 "비용이 거의 안 나오니 예산 경보에 안 걸린다 / 양으로도 묻힌다"도 원문 논리 그대로 |
| 15 | CVE-2026-40217 = **LiteLLM `/key/regenerate`** 사용자 식별자 재바인딩 결함, 일반 키 → **PROXY_ADMIN** 승격 | ✓ 확인 | 원문: follow-on cluster가 LiteLLM `/key/regenerate`의 user ID rebind 취약점을 악용해 standard Virtual Key를 PROXY_ADMIN master credential로 전환. 본문의 "평범한 키를 관리자 자격증명으로 올려 줍니다"는 정확 |
| 16 | 지배적 초기 침투 경로 = 노출·탈취된 **클라우드 신원 토큰**(서비스 계정 키, 깃허브 PAT 등) | ✓ 확인 | "exposed or stolen cloud identity tokens — including IAM credentials, Service Account keys, GitHub Personal Access Tokens (PATs), and active session tokens" |
| 17 | ZDR 문장을 "**영향이 탐지되지 않았다**"로 (32줄), 조사 진행 중임도 명시 (34줄) | ✓ 확인 — **정확한 처리** | 원문 "We have not detected any impact to Inference, Training SDK and Nexus, which are all zero data retention (ZDR) by default." + "Our investigation is ongoing and may reveal additional information." 본문이 "영향이 없었다"로 넘어가지 않았고, 34줄에서 조사 진행 중임을 따로 적어 두 번 선을 그었다 |
| 18 | 10/9 공지 시점에 알려진 피해 = **평가 작업에 쓰이던 시크릿** (32줄) | ✓ 확인 (어휘 정밀도만 ⚠) | 불리틴 갱신본: 당시엔 "only Fireworks stored secrets (**e.g.** used in evaluation jobs) were known to have been accessed". 즉 ① **파이어웍스가 저장한** 시크릿이고 ② 평가 작업은 **예시**다. C-2 참조 |
| 19 | 노션: 1% 미만 / Insights의 AI 대화 기록 / Insights 비활성화 / 파이어웍스 통한 모델 서빙 중단 / 자격증명 교체 권고 (36줄) | ✓ 확인 (**1차 출처로 전건 확인**) | 노션 공식 권고 `notion.com/security/advisories/security-incident-involving-a-third-party-ai-vendor`: "fewer than 1% of Notion workspaces", 두 번째 데이터셋에 "Notion AI chat transcripts used for the Insights feature"(대다수 비귀속), "this was not a breach of our systems", Insights 비활성화, 파이어웍스 통한 오픈웨이트 모델 서빙 중단, 파이어웍스 시스템 내 데이터 삭제·연결 차단, 해당 기간에 붙여 넣은 비밀번호·API 키·자격증명 교체 권고. 날짜도 11/2 최초 통보 → 11/3 연결 차단·삭제 → 11/6 고객 데이터 가능성 통보 → 11/8 확인 → 11/9 권고 공개로 팩트 카드와 일치 |
| 20 | Jet Night 행위자 ≠ 파이어웍스 침해자, 어느 출처도 동일범이라 말하지 않음 (34줄) | ✓ 확인 — **부인이 정확하다** | 파이어웍스는 "financially motivated cybercriminal threat actor group"·"LLMJacking"까지만 적고 **UNC6993·Jet Night를 특정하지 않았다**. GTIG 보고서도 파이어웍스를 피해자로 지목하지 않는다. 본문의 "LLMjacking 집단과 연결된다고만 적었을 뿐 특정하지 않았고" + "조사 진행 중" 서술 모두 원문에 대응 |
| 21 | 커버 이미지 크레딧 "한 건물에 늘어선 전기 계량기들 — Wikimedia Commons, Downtowngal" (40줄) | ✓ 확인 | `public/images/covers/llmjacking-mixers-stolen-llm-keys.jpg` 실물 확인 — 건물 외벽에 늘어선 전력량계 9기. 캡션 일치. `_workspace/image-credits-2026.md` 182행에 동일 출처(CC BY-SA 4.0) 기록 존재. 프런트매터 `coverImage: ""`는 레포 관례(슬러그 매칭 폴백)대로라 문제 없음 |

추가로 확인한 것(본문에 쓰이지 않았으나 상충 없음): 파이어웍스는 법집행기관 통보 + Unit 42 포렌식 투입, 상태 "Active monitoring", 배치 추론·데이터셋 기반 학습의 셀프서브 업로드/다운로드 비활성화.

---

## C. 수정 권고 (우선순위 순)

### C-1. [중요] 12줄 — 두 번째 침입의 경로가 사고 전체의 경로처럼 읽힌다

이번 사건은 **두 건**이다. ① 10월 초 내부 자격증명 무단 사용(10/9 최초 공지) ② 10/23 제3자 클라우드 사업자 → 10/24 개발 머신. 11/9 갱신본의 피해 목록은 두 건의 결과가 합쳐진 것인데, 본문은 "들어온 경로는 파이어웍스가 아니었습니다"를 피해 목록 바로 뒤에 놓아 **전체가 제3자 경유인 것처럼** 읽힌다. (본문 32줄에서는 저자가 두 건을 정확히 구분하고 있으므로, 도입부 한 구절만 손보면 된다.)

- 현재: `들어온 경로는 파이어웍스가 아니었습니다. 10월 23일 파이어웍스의 연구개발용 머신을 호스팅하던 제3자 클라우드 사업자가 먼저 뚫렸고,`
- 제안: `이번에 범위가 넓어진 쪽의 경로는 파이어웍스가 아니었습니다. 10월 23일 파이어웍스의 연구개발용 머신을 호스팅하던 제3자 클라우드 사업자가 먼저 뚫렸고,`

### C-2. [경미] 32줄 — 10/9 공지의 시크릿은 "파이어웍스가 저장한" 것이고, 평가 작업은 예시

원문이 "only Fireworks stored secrets (e.g. used in evaluation jobs)"이므로 평가 작업은 열거된 예시다. 이 문장은 ZDR 가정의 근거 한쪽을 떠받치고 있어 정밀도가 필요하다.

- 현재: `10월 9일 공지에서 확인된 피해는 평가 작업에 쓰이던 시크릿이었고,`
- 제안: `10월 9일 공지 시점에 확인된 피해는 평가 작업 같은 데 쓰이려고 파이어웍스가 보관하던 시크릿이었고,`

### C-3. [경미] 22줄 — GTIG의 평가(likely)를 단정형으로 받았다

- 현재: `보고서가 공격자 인프라의 목적을 계정들 사이에 요청 부하를 분산하는 것이라고 짚은 이유가 여기 있습니다.`
- 제안: `보고서가 공격자 인프라의 목적을 훔친 키를 모아 계정들 사이에 요청 부하를 분산하는 것으로 본 이유가 여기 있습니다.`

### C-4. [경미] 24줄 — "approximately $60"

- 현재: `Jet Night이라는 서비스는 월 60달러에 무제한 플랜을 팔았습니다.`
- 제안: `Jet Night이라는 서비스는 월 60달러 남짓에 무제한 플랜을 팔았습니다.`

### C-5. [경미] 24줄 — 100만 달러가 8시간 안의 금액으로 읽힐 여지 + 호출 주체

원문은 "또 다른 행위자가 8시간이 안 되는 사이 50만 건 넘게 호출해 Jet Night을 굴렸다"이고, 100만 달러의 기간 귀속은 명시하지 않는다.

- 현재: `이 한 서비스가 여덟 시간이 채 안 되는 사이에 LLM API를 50만 번 넘게 호출했고, 100만 달러에 가까운 토큰 비용이 피해 조직 앞으로 청구됐습니다.`
- 제안: `이 서비스를 굴린 쪽은 여덟 시간이 채 안 되는 사이에 LLM API를 50만 번 넘게 호출했습니다. 그렇게 피해 조직 한 곳 앞으로 넘어간 토큰 비용이 100만 달러에 가깝습니다.`

### C-6. [경미] 7줄 excerpt — "가져간"은 "accessed"보다 센 말

불리틴의 표현은 접근(accessed)이고 대상도 "불완전한" 가중치 일부다. 본문 12줄은 "들여다봤다"로 정확하게 쓰고 있어, excerpt만 수위가 어긋나 있다.

- 현재: `모델 가중치를 가져간 쪽이 원한 건 모델이 아니었습니다.`
- 제안: `완성되지도 않은 모델 가중치까지 들여다본 쪽이 원한 건 모델이 아니었습니다.`

### C-7. [경미] 32줄 — 노션 대화 기록의 소재(所在)

노션 권고 기준으로 그 대화 기록은 Insights 분류 작업 때문에 **파이어웍스 쪽에 가 있던** 데이터다(그래서 노션이 "파이어웍스 시스템 내 데이터를 삭제"했다). "Insights 기능이 보관하고 있던"은 노션 내부 보관처럼 읽히고, 오히려 이 문단의 ZDR 논지를 약하게 만든다.

- 현재: `노션에서 새어 나간 것도 추론 트래픽이 아니라 Insights라는 분석 기능이 보관하고 있던 AI 대화 기록이었고요.`
- 제안: `노션에서 새어 나간 것도 추론 트래픽이 아니라 Insights라는 분석 기능의 분류 작업 때문에 파이어웍스 쪽에 가 있던 AI 대화 기록이었고요.`

### C-8. [선택] 30줄 — CVE-2026-40217은 LiteLLM 고유 결함

"LiteLLM 같은 게이트웨이"로 쓰면 동류 게이트웨이 전반의 패치 대상처럼 읽힐 수 있다.

- 현재: `LiteLLM 같은 게이트웨이를 직접 돌리고 있다면 CVE-2026-40217 패치 여부도요.`
- 제안: `게이트웨이를 직접 돌리고 있다면, LiteLLM이라면 CVE-2026-40217 패치 여부도요.`

### C-9. [선택, 사실 아님 — 보강 제안] 34줄

파이어웍스 불리틴은 **스스로 GTIG·맨디언트 11월 2일 글을 인용**한다. 동일범 부인을 유지하면서 "파이어웍스 자신이 그 보고서를 가리켰다"를 한 구절 넣으면 두 사건을 나란히 놓는 근거가 본문 안에서 분명해진다. 넣지 않아도 사실관계에는 문제 없다.

---

## D. 종합 판정

- [x] **수정 후 발행** — 치명적 오류 없음. C-1(중요) 반영 후 발행 권장, C-2~C-7은 함께 반영하면 좋음.
- [ ] 발행 가능 (무수정)
- [ ] 발행 보류

보완 메모
1. 팩트 카드에 2차 보도만 있던 **노션 항목을 1차 출처(노션 공식 권고)로 승격**해 전건 확인했다. 카드의 노션 관련 서술은 모두 1차와 일치.
2. "노션·커서 고객" 한 줄만이 1차 출처가 아닌 유일한 사실(대변인 발언 + 파이어웍스 웹사이트). 본문이 피해가 아니라 고객 관계만 주장하므로 그대로 둬도 무방.
3. 본문 수정 후에는 `node scripts/lint-post.mjs _posts/2026-11-11-llmjacking-mixers-stolen-llm-keys.md` 재실행 필요(이번 세션은 Bash 미사용이라 미실행).
