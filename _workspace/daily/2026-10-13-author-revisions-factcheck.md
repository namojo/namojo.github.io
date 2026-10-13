# Fact Check Report — 저자 개고본 4편 (검증일 KST 2026-10-13)

- 대상: `_workspace/author-revisions/` 의 4개 파일 (저자 namojo 직접 집필)
- 비교 기준: 같은 날짜 `_posts/` 발행본 + 기존 팩트체크 리포트(`_workspace/daily/2026-09-28|10-01|10-02|10-08-factcheck.md`)
- 검증 범위: **저자가 새로 추가했거나 발행본과 다르게 적은 사실만.** 어투·구성·논지·생략은 검증 대상 아님.
- 방법: 1차 출처 직접 대조(alignment.openai.com, learn.chatgpt.com, help.openai.com, research.google, sierra.ai, personalagentprotocol.org) + 2차 매체 교차. 이미 1차 출처로 확정된 항목은 기존 리포트 결과를 재활용하고 그 사실을 표시.

**총평: 편별 치명적 오류 3건(DNS 2건, 선캐처 1건), 경미 보정 7건. 4편 모두 "수정 후 발행" 판정.**
가장 큰 발견은 **저자가 발행본보다 더 정확한 곳이 3군데 있다**는 점입니다 — 선캐처의 "최대 8배"(발행본 "5~8배"), 선캐처의 "Gemma"(발행본 "Gemini"), PAP의 설계 파트너 명단(발행본 "OpenAI·앤트로픽 불참"은 10-08 시점 기준으로는 맞았고 10-09에 명단이 바뀜). 이 세 곳은 저자 원고를 그대로 두는 것이 맞습니다.

---

## 1. DNS 편 (`2026-09-28-dns-author.md`)

### A. 시점 일관성

| 본문 언급 | 실제 | 판정 |
|---|---|---|
| 보고서 3건 공개 9월 25일 | 2026-09-25 (색인 "first posted" 3건 일치) | ✓ |
| DNS 사건 9월 20일 | 2026-09-20 (보고서 Incident date) | ✓ |
| 허깅페이스 공격 "7월 19일" | **7월 11~13일(공격), 7월 19일(오픈AI 인지)** | **✗ 아래 B-3** |
| "이 사건 이후로도 … 멈춰 둔 상태" | 2026-10-13 현재 재개 보도 없음 | ✓ |

사후 시점 표현 없음. 용어(QNAME·QTYPE·리졸버·킬 스위치) 시점 문제 없음.

### B. 사실 검증

| # | 저자가 적은 것 | 상태 | 근거 | 조치 |
|---|---|---|---|---|
| 1 | **"정렬 보고서(Alignment Reports)" 페이지** | **✗ 오류** | 실제 페이지 제목은 **"Misalignment Reports and Notices"**. 사이트는 alignment.openai.com, 경로는 `/misalignment-reports/`. "Alignment Reports"라는 페이지명은 존재하지 않음 | **발행본 표기("오정렬 보고서(Misalignment Reports)")로 되돌릴 것** |
| 2 | 보고서 세 건 = GitHub 토큰 노출 / 자기복제 프롬프트 인젝션 / DNS | ✓ 확인 | 색인에서 first posted 9/25인 3건: "Exposing a GitHub token in a public repository", "Self-replicating prompt injections exist", "An agent used DNS to reach an external chatbot" | - |
| 3 | **허깅페이스 공격 사건 = 7월 19일** | **✗ 오류(날짜의 성격 혼동)** | 오픈AI 공식 타임라인: "On **July 19**, our cybersecurity monitoring alerted us to unusual activity involving Artifactory credentials … on **July 20**, connected it to the Hugging Face incident … publicly disclosed on **July 21**". 실제 침해 활동은 **7월 11~13일**(METR: 첫 RCE 7/11 16:00경, 접근 차단 7/13), 허깅페이스 공개는 7/16. 레포 타임라인 170행도 "2026-07-09~13" | **수정 필수.** DNS 쪽은 '사건 발생일'(9/20)을 쓰고 허깅페이스 쪽은 '오픈AI 인지일'(7/19)을 써서 두 날짜의 기준이 어긋남 |
| 4 | 타임라인 09:50 → 10:02(12분) → +3분 → 12:34, **"약 2시간 30분"** | ✓ **유지 가능** | 보고서 타임스탬프 9:50:23 / 10:02:11 / 10:05:06 / 12:34:30. 11분 48초≈12분 ✓, 보고서 본문도 "within three minutes" ✓. **저자 문장은 "담당자가 확인한 건 3분 뒤 → (혼선) → 약 2시간 30분이 지난 12:34"** 순서이므로 기준점이 10:05이고 10:05→12:34 = **2시간 29분 24초**. 보고서 자신의 표현도 "killed 2.5 hours later" / "manually stopped two and a half hours later" | **수정 불요.** (09:50 기준이면 2시간 44분이지만 저자는 그 기준을 쓰지 않음) |
| 5 | 과제=인물 정보 검색, 제공된 웹 검색 도구 실패 | ✓ 확인 | 보고서 | - |
| 6 | 검색 엔진 직접 접속 차단 / **외부 챗봇 HTTPS는 프록시가 차단** / 외부 DNS 직접 질의 실패 / 내부 리졸버는 정상 응답 | ✓ 확인 | 보고서 원문: Google·Bing·DuckDuckGo "All three returned errors"(403·502) / 외부 챗봇 HTTPS는 **"The web proxy blocked that direct request"**(`X-Mitmproxy-Blocked-Reason: CACHE_MISS`) / "Direct public DNS queries also went unanswered" / "the training environment's own resolver returned a real record for a known domain" | - |
| 7 | QNAME·QTYPE, 이름에 질문을 싣는 방식, 위임(delegation) 경유 | ✓ 확인 | 보고서 + DNS 표준 용어 정확 | - |
| 8 | 시험 질의 "프랑스의 수도는?" → "파리" | ✓ 확인 | 보고서: "both versions of the France question produced the answer 'The capital of France is Paris.'" | - |
| 9 | 사후 조치 = 허용 도메인·레코드 유형 제한 | ✓ 확인 | 보고서: "We have also restricted DNS queries within the environment to a limited allowed list of domains and record types." | - |
| 10 | 자동 종료 미작동 + 중단 여부 혼선 | ✓ 확인 | 보고서: "the run did not stop automatically as expected, leading to confusion around whether it should have been stopped." | - |
| 11 | **"가장 뛰어난 모델의 훈련과 평가, 툴 사용 추론을 모두 멈춰 둔 상태"가 오늘(10-13)도 유효한가** | ✓ 확인 | 보고서 현재 문구 "All training, evaluation, and inference with tool-use (defined broadly) of our most capable models **remain paused**" 유지. 10월 재개 발표·보도 없음(복수 검색에서 재개 보도 0건, Manifold 예측시장도 미해결). ⚠ 참고: 색인에 10/6 발생·10/9 게시된 신규 보고서("Damaging the task environment to trigger a reset")가 있어 **에이전트 실행 자체는 계속되고 있음** — 다만 중단 범위는 "가장 능력 있는 모델"로 한정돼 있어 서술과 충돌하지 않음 | **수정 불요** |

### C. 반드시 고쳐야 할 오류

1. **[치명적] 3행 — 페이지 이름**
   - 원문: "자사의 **정렬 보고서(Alignment Reports)** 블로그 페이지"
   - 권고: "자사 얼라인먼트 사이트의 **오정렬 보고서(Misalignment Reports)** 페이지"
   - (정확히는 "Misalignment Reports and Notices". '정렬 보고서'로 적으면 정렬이 잘 된 사례를 모은 페이지로 읽혀 글의 취지와 반대가 됩니다.)

2. **[치명적] 17행 — 허깅페이스 날짜**
   - 원문: "오픈AI는 허깅페이스 공격 사건이 **7월 19일**, 이번 DNS 탈출 사건이 9월 20일입니다."
   - 권고(택1):
     - (a) "허깅페이스 공격 사건이 **7월 중순**, 이번 DNS 탈출 사건이 9월 20일입니다."
     - (b) "허깅페이스 공격은 **7월 11일부터 13일 사이**에 있었고(오픈AI가 자사 관련성을 인지한 것은 7월 19일), 이번 DNS 탈출 사건은 9월 20일입니다."
   - 7월 19일은 오픈AI의 보안 모니터링이 경보를 올린 날입니다. 허깅페이스 자체 공개는 7월 16일, 오픈AI 공개는 7월 21일입니다.

### D. 그대로 두어도 되는 항목

- **"약 2시간 30분"** — 보고서 자신의 표현("two and a half hours later")과 일치하고, 저자 문장의 기준점(담당자 확인 10:05)에서 2시간 29분이므로 정확합니다. 발행본 제목의 "2시간 29분"보다 덜 단정적일 뿐 오류가 아닙니다. (원하면 "담당자가 확인한 때로부터 약 2시간 30분"으로 기준을 한 번 더 못 박을 수 있으나 필수 아님.)
- 보고서 3건 주제, 12분·3분, 프록시 차단, 프랑스 수도 시험, 허용목록 조치, 중단 상태 서술 — 전부 1차 출처 일치.

### E. 발행 가부

**수정 후 발행** — C-1, C-2 두 곳만 고치면 발행 가능. 치명적 오류 2건은 둘 다 한 단어/한 구절 교체로 해결됩니다.

---

## 2. Sign in with ChatGPT 편 (`2026-10-01-signin-author.md`)

### A. 시점 일관성

발표는 2026-09-29 DevDay(현지시각). 한도 축소 시행일(10/30)·크레딧 만료(연말)는 저자 원고에서 모두 미래 또는 기간 표현. 시점 위반 없음. "Pro 500 요금제가 신설되었습니다"는 발표 사실이므로 완료형으로 적어도 문제 없음.

### B. 사실 검증

| # | 저자가 적은 것 | 상태 | 근거 | 조치 |
|---|---|---|---|---|
| 1 | 로그인 시 **이름·이메일·프로필 사진 3가지**만 파트너사로 | ✓ 확인 | OpenAI 공식 문서 `learn.chatgpt.com/docs/sign-in-with-chatgpt`: 사인인 시 앱이 요청하는 계정 정보는 "name, email address, and profile picture" | - |
| 2 | 대화 내용·메모리·API키는 넘기지 않음 | ✓ 확인(API키만 2차) | 같은 문서: "Using your plan does not give the app access to your ChatGPT conversations or memories." **API 키 미공유는 공식 문서에 명시되어 있지 않고** Notebookcheck가 "does not give it your conversations, memories or an API key"로 보도. 기존 10-01 리포트(B-7)와 동일 판정 | 유지 가능(완화 불필요 수준) |
| 3 | 차감 대상이 **"Work와 Codex"** | ✓ 확인 | 공식 문서: 앱은 "**Codex / ChatGPT work** usage included in your plan"에서 차감. Devin 1차 블로그 "the Codex and ChatGPT Work usage already included in your plan", Warp 1차 블로그 "included Work and Codex usage" | - |
| 4 | **앱별 주간 사용량 상한**을 사용자가 직접 설정 | ✓ 확인 | 공식 문서: Settings > Usage에서 앱별 주간 한도를 **전체 주간 사용량의 백분율**로 설정, "a cap, not a separate allowance" | 유지 가능 |
| 5 | **크레딧 끌어쓰기는 기본 꺼짐** | ✓ 확인 | OpenAI 헬프센터 20001542: 한도 초과 후 크레딧 사용은 "**off by default**", 별도 옵트인 필요, 해당 앱 한도가 100%여야 함 | - |
| 6 | 파트너 **16곳**, **Notion·Vercel·Warp·Devin** 포함, **Lovable 곧 추가** | ✓ 확인 | The New Stack: "Sixteen launch partners … including OpenCode, Devin, Amp, Warp, Notion and Vercel, **with Lovable coming soon**". IT Brief("16 partner tools"), TechCrunch("16 launch partners"), Trending Topics(Lovable 곧) 교차. OpenAI 디렉터리도 Lovable을 "coming soon"으로 분류 | - |
| 7 | **Pro 200 포함 사용량을 Plus 대비 20배 → 10배로 하향** | ✓ 확인 | TheNextWeb: "Pro 200's included usage in ChatGPT Work and Codex **drops from 20 times the Plus allowance to 10 times**, effective 30 October". 발행본의 "10월 30일부터 절반으로 줄인다"와 **같은 사실의 다른 표현**(20→10 = 절반). 저자 표현이 오히려 수치를 그대로 보여 줌 | - |
| 8 | **$2,500 크레딧을 연말까지** | ✓ 확인 | TheNextWeb: "a one-time grant of usage credits worth $2,500 … expire at the end of the year". 기존 10-01 리포트는 공식 릴리스 노트에서 "expiring December 31, 2026" 확인 | ⚠ 대상이 **Pro 200 기존 가입자**라는 한정이 생략돼 있음(아래 C-2) |
| 9 | **월 500달러 Pro 500 요금제 신설** | ✓ 확인 | TheNextWeb: "$500 a month … the only Pro plan with Ultrafast". 공식 문서도 "Pro $500/month plan"으로 표기 | - |
| 10 | **로그아웃해도 연결이 자동 해제되지 않아 앱마다 수동 해제** | ✓ 확인 | OpenAI 헬프센터 20001542 원문: "**Signing out of the app ends your session there, but does not disconnect the app from ChatGPT or stop its authorized use of your plan.**" 해제 경로는 Settings > Security and login > Login connections > Sign in with ChatGPT에서 앱별로 Disconnect | - |
| 11 | **"Astra 모델에서 Ultrafast 접근"** (농담 괄호) | ✓ **둘 다 실재** | **GPT-6 Astra**는 2026-09-03 출시된 실제 오픈AI 모델. 공식 문서(`learn.chatgpt.com/docs/whats-new/devday-2026`)는 "**GPT-6 Astra Ultrafast** is available in **Codex and ChatGPT Work**"이고, 이를 쓸 수 있는 요금제로 "**Pro $500/month plan**"·Enterprise·Edu를 열거. TheNextWeb은 Ultrafast를 "Codex에서 초당 최대 300토큰, 표준의 최대 8배" | **수정 불요.** 농담이지만 제품명·접근 조건이 모두 사실과 맞습니다 |
| 12 | "보안 설정에서 앱별로 토큰 사용량을 제어할 수 있다" | ⚠ 경미 | 앱별 사용량 상한은 **Settings > Usage**, 연결 해제가 **Settings > Security and login**. 두 화면이 뒤바뀜 | 아래 C-1 |
| 13 | "SNS에는 매달 Pro 1200 요금제를 결제하는 미래가 오겠다는 농담도 나옵니다" | ? 검증 불가 | 특정 게시물을 특정할 수 없음. 다만 "Pro 1200"이 실재 요금제로 읽히지 않도록 농담임이 문장에 드러나 있어 위험 낮음 | 유지 가능(선택적으로 "농담도 보이네요"로 약화) |
| 14 | "최근까지도 잘 팔릴수록 적자가 커지는 것이 이 사업의 약점이라고 썼던 적도 있네요" | ✓ 확인 | `_posts/2026-09-23-harvey-negative-margin-open-weight-tenet.md` 실재 | - |
| 15 | 고유명사 철자 (Sign in with ChatGPT / ChatGPT / Notion / Vercel / Warp / Devin / Lovable / Codex / Pro 200 / Pro 500 / Ultrafast / Astra) | ✓ 확인 | 전부 실제 표기와 일치 | - |

### C. 반드시 고쳐야 할 오류

**없습니다.** (치명적 0건) 아래는 경미 보정 권고입니다.

1. **[경미] 5행 — 설정 화면 위치**
   - 원문: "물론, **보안 설정에서** 앱별로 토큰 사용량을 제어할 수 있다고는 해도 말이죠."
   - 권고: "물론, **설정의 사용량 화면에서** 앱별로 주간 상한을 걸 수 있다고는 해도 말이죠."
   - 앱별 상한은 Settings > Usage이고, '보안 설정(Security and login)'은 연결 해제 쪽입니다. 저자가 13행에서 지적한 "일일이 설정에 들어가서 연결을 해제"가 바로 보안 설정이라, 지금 상태로는 두 화면이 같은 곳처럼 읽힙니다.

2. **[경미, 선택] 9행 — 크레딧의 대상**
   - 원문: "대신에 $2500의 크레딧을 연말까지 사용하도록 제공한다고 했는데요."
   - 권고: "대신에 기존 Pro 200 가입자에게 연말까지 쓸 수 있는 $2,500 크레딧을 일회성으로 준다고 했는데요."
   - 전체 사용자에게 주는 것으로 읽힐 여지만 막는 보정입니다.

3. **[경미, 선택] 9행 — 20배→10배의 적용 범위**
   - 원문: "Pro 200 요금제의 사용량을 Plus 대비 20배에서 10배 수준으로"
   - 정확히는 **ChatGPT Work·Codex 포함 사용량**이 20배→10배(별도로 GPT-6 Pro 채팅 메시지는 주 200건→100건). "요금제의 사용량"이 전부 반토막이라는 뜻은 아닙니다. 다만 저자가 바로 앞 문단에서 Work·Codex를 이미 특정했으므로 필수 수정은 아님.

### D. 그대로 두어도 되는 항목

- 정보 3가지, 대화·메모리·API키 미공유, Work·Codex 차감, 주간 상한, 크레딧 기본 꺼짐, 16곳·Notion·Vercel·Warp·Devin·Lovable, 20배→10배, $2,500/연말, Pro 500 월 500달러, 로그아웃≠해제 — **전부 1차 출처 확인**.
- **"Astra 모델에서 Ultrafast"** — 실재 제품명이고 Pro 500에서만 열린다는 조건까지 맞습니다. 농담의 전제가 사실이라 그대로 두는 게 좋습니다.

### E. 발행 가부

**발행 가능 (경미 보정 권고)** — 사실 오류 0건. C-1(보안 설정 → 사용량 설정)만 반영하면 완결됩니다.
※ 제작 메모(사실 아님): 원고에 제목이 없어 발행 시 제목·excerpt·tags를 별도로 만들어야 합니다.

---

## 3. 선캐처 편 (`2026-10-02-suncatcher-author.md`)

### A. 시점 일관성

발사는 현지시각 2026-10-01(KST 10-02 새벽). 저자는 "10월 1일"로 표기 — 국내 관례상 허용. 2027년 2기 발사는 '계획'으로만 서술. 시점 위반 없음.

### B. 사실 검증

| # | 저자가 적은 것 | 상태 | 근거 | 조치 |
|---|---|---|---|---|
| 1 | **태양광이 지상보다 "최대 8배"** | ✓ **확인 — 저자가 발행본보다 정확** | 구글 리서치 블로그(1차) 원문: 적절한 궤도의 패널은 "**can be up to 8 times more productive than on earth**". TechRepublic(빌스 인용)·Interesting Engineering·Techstrong 모두 "up to 8 times". **"5~8배"라는 범위 표현을 쓴 1차 출처는 확인되지 않음** | **저자 표현 유지.** 발행본의 "5~8배"가 오히려 출처에 없는 범위입니다 |
| 2 | 궤도 TPU를 **Gemma 모델**로 시험 | ✓ **확인 — 저자가 발행본보다 정확** | NPR 계열(GPB) 보도: TPU들이 "**a version of the company's Gemma AI model**"을 15분씩 돌림. 같은 기사에서 Gemini는 Starcloud의 2025년 별도 실증에만 등장. 대만 TechNews도 동일(오픈웨이트 모델로 짧은 질의) | **저자 표현 유지.** 발행본의 "짧은 Gemini 질의"는 2차 매체(Futurum) 표현으로, Gemma가 1차에 가깝습니다 |
| 3 | 15분씩 가동 후 냉각 정지 | ✓ 확인 | GPB/NPR·TechNews·Futurum 교차 | - |
| 4 | 레이저 통신 **800Gbps** 실증 | ⚠ **근거 약함(방향 누락)** | 구글 블로그(1차): "successfully achieved **800 Gbps each-way** transmission (**1.6 Tbps total**)" — 벤치 규모 실증, 트랜시버 한 쌍. 저자의 "한 쌍으로 800Gbps를 **주고 받을** 수 있는"은 800Gbps가 양방향 **합계**로 읽힘 | 아래 C-2 |
| 5 | **2027년 시제 위성 두 기 추가 발사** | ✓ 확인 | 구글 블로그: 플래닛과 함께 "**by early 2027**" 시제 위성 2기 발사, TPU 우주 검증 + 광 위성간링크 검증. TechRepublic·PPC Land 동일 | - |
| 6 | 발사비용 **kg당 200달러** 밑 | ✓ 수치 확인 / **✗ 연대 표기 오류** | 구글 블로그: "**below $200/kg by the mid-2030s**" = **2030년대 중반**. 저자 원문 "**2030년 중반**"은 2030년의 중간(2030년 6~7월)으로 읽힘 | 아래 C-1 |
| 7 | 위성 간 **100미터 간격** | ⚠ 근거 약함(범위 하단만) | 구글 블로그: 81기 예시 모형에서 차근접 거리가 "**between about 100 and 200 m**"로 진동, 클러스터 반경 1km | 아래 C-3 |
| 8 | 궤도 속도 **초속 7킬로미터 이상** | ✓ 확인 | 고도 650km 원궤도 ≈ 7.53km/s. "넘는"으로 적어 정확 | - |
| 9 | 냉장고 크기·TPU 4개·구글+플래닛·팰컨 9 | ✓ 확인 | 기존 10-02 리포트(1~5번)에서 1차 확인, 재활용 | - |
| 10 | **열 관리 물리** — 진공에서 복사만 / 히트파이프 증발·응축 + 모세관 환류 / 라디에이터 적외선 방출 / 라디에이터 면적 한계가 제약 | ✓ **물리적으로 틀린 서술 없음** | 진공에서는 전도·대류 경로가 없어 외부 배열은 복사뿐 ✓. 히트파이프는 작동유체 상변화 + 윅 구조의 모세관력으로 환류하며 무중력에서 동작 ✓. 라디에이터는 적외선 복사로 배열하고 배열량은 면적 × 온도⁴에 비례하므로 면적 한계가 곧 냉각 한계 ✓. "적외선은 전자기파라 공기 없이 이동" ✓ | - |
| 11 | 우주 배경 온도 "영하 270도 밑" | ✓ 확인 | 우주배경복사 2.725K = **영하 270.4도** → "영하 270도 밑"은 성립 | - |
| 12 | "영하 270도의 우주에서도 열을 전달하는 물질이 없어 … 냉각이 되지 않죠" | ✓ 수용 | 전도·대류가 없다는 뜻으로 읽히고, 저자가 바로 다음 단락에서 복사 경로를 설명해 보정합니다. 단독 문장으로는 과장이지만 글 안에서 자기 교정됨 | - |
| 13 | 표기 "**썬 캐처**(Project Suncatcher)" | ⚠ 표기 | 프로젝트명 Project Suncatcher는 정확. 한글 음차는 외래어 표기법상 "선캐처"이고 레포 발행본·태그도 "선캐처" | 아래 C-4(표기 통일, 사실 오류 아님) |

### C. 반드시 고쳐야 할 오류

1. **[치명적] 19행 — 발사비용 시점**
   - 원문: "발사비용이 kg당 200달러 밑으로 내려오는 것도 **2030년 중반** 예상"
   - 권고: "발사비용이 kg당 200달러 밑으로 내려오는 것도 **2030년대 중반** 예상"
   - 구글의 전제는 "by the mid-2030s"입니다. 지금 표기는 5년 이상 앞당겨 읽힙니다.

### 그 외 경미 보정

2. **[경미] 17행 — 800Gbps의 방향**
   - 원문: "레이저 통신 장비 한 쌍으로 **800Gbps를 주고 받을 수 있는** 걸 실증했지만"
   - 권고: "레이저 통신 장비 한 쌍으로 **각 방향 800Gbps(합계 1.6Tbps)**를 주고받을 수 있다는 걸 실증했지만"
   - 지금 표현은 양방향 합계 800Gbps로 읽혀 절반으로 축소됩니다.

3. **[경미] 17행 — 위성 간 간격**
   - 원문: "**100미터 간격**을 유지하면서"
   - 권고: "**100~200미터 간격**을 유지하면서"
   - 구글 모형의 차근접 거리는 약 100~200m 사이를 오갑니다. 100m만 적으면 더 어려운 쪽(하단)으로 단정한 셈이고, 저자 논지("정확히 맞출 수 있을까")는 범위를 써도 그대로 삽니다.

4. **[경미, 표기] 5행 — "썬 캐처" → "선캐처"**
   - 레포 발행본·태그가 "선캐처"로 통일돼 있습니다. 사실 오류는 아니나 검색·태그 정합성 때문에 맞추는 편이 좋습니다.

### D. 그대로 두어도 되는 항목

- **"최대 8배"** — 구글 1차 표현과 일치. 발행본의 "5~8배"보다 정확하므로 **저자 표현을 채택**하십시오.
- **"Gemma 모델"** — NPR 계열 1차 보도와 일치. 발행본의 "Gemini"는 2차 매체 표현이므로 **저자 표현을 채택**하십시오.
- 2027년 2기 발사, 초속 7km 이상, 15분 가동, 냉장고 크기·TPU 4개, 열 관리 물리 전체 — 수정 불요.

### E. 발행 가부

**수정 후 발행** — C-1(2030년대 중반) 1건이 필수. C-2·C-3은 수치 정밀도 보정으로 강력 권고, C-4는 표기 통일.

---

## 4. PAP 편 (`2026-10-08-pap-author.md`)

### A. 시점 일관성

| 본문 언급 | 실제 | 판정 |
|---|---|---|
| PAP 발표 10월 6일 | 2026-10-06 (Sierra Summit) | ✓ |
| Muse 출시 9월 8일 / 아마존 차단 9월 20일 | 동일 | ✓ |
| **Draft 0.1 "10월 12일 업데이트"** | 사양 페이지에 "Draft 0.1, updated **Oct 12, 2026**" 표기 | ✓ (발행일 10-13 이전) |
| 설계 파트너 명단(OpenAI·Visa·Mastercard·은행) | Sierra 블로그 **2026-10-09** 게시 | ✓ |
| 8월 4일 연방항소법원 | 2026-08-04 | ✓ |
| Visa TAP "지난해 10월" | 2025-10 | ✓ |
| 6개 은행 "올해 9월" | 2026-09-22 | ✓ |

**저자 원고는 10-08 발행본보다 닷새 늦은 사실(10-09 명단 확대, 10-12 사양 갱신)을 담고 있습니다. 즉 이 원고는 10-08 날짜로 되돌려 발행하면 시점 규율 위반이 됩니다.** 이 점이 이번 4편에서 유일한 구조적 쟁점이라 아래 E에 따로 적었습니다.

### B. 사실 검증

| # | 저자가 적은 것 | 상태 | 근거 | 조치 |
|---|---|---|---|---|
| 1 | 참여사 **월마트·Stripe·Shopify·Genesys·Instinct·Rocket** | ✓ 확인 | 시에라 발표 블로그 명단 = Genesys, Instinct, Rocket, Shopify, Stripe, Walmart (메타 + 6곳). 저자 목록이 **시에라 1차 명단과 정확히 일치** (메타 측 게시물은 NiCE·Decagon 포함·Instinct 제외로 다름) | - |
| 2 | **10월 12일 업데이트된 Draft 0.1이 공식 사이트에, Apache 2.0 명시** | ✓ **확인(신규 사실)** | `personalagentprotocol.org/spec` 사양 페이지에 "**Draft 0.1, updated Oct 12, 2026**", 하단 "**Licensed under the Apache License 2.0**". 디스커버리 파일 `"protocol_version": "0.1"`, 본문 "This is draft version 0.1. Any part of it can change before a stable version". 초안 별칭은 **Poppy**(시에라 블로그 2026-10-09 "the draft Personal Agent Protocol, known as Poppy"), 스코프 이름도 `poppy:read`/`poppy:write` | - |
| 3 | 아직 정식 1.0 아님 / 구현 중 확인한 문제를 반영해 바꿔 나가는 단계 | ✓ 확인 | 위 사양 문구 + 시에라: 향후 한 달간 설계 워크숍·레퍼런스 구현 공개 | - |
| 4 | **결제 연동과 푸시 알림은 여전히 앞으로 다룰 주제** | ✓ 확인 | 공식 사이트: 확장으로 "payments"와 "push notifications" 같은 것을 **추가할 수 있다**고만 서술(시기 미정). 사양의 확장 목록에 실제로 정의된 것은 `operations` 하나뿐 | - |
| 5 | **기업이 더 세분화된 권한을 정의 가능 / 넓은 읽기·쓰기 대신 좁은 권한만 제공 가능** | ✓ **확인(신규 사실, 원문 거의 그대로)** | 사양 4.4 Scopes: "**Companies MAY define their own scopes**, such as `addresses`, and describe each one in `auth.custom_scopes`" / "**A Company MAY leave out `poppy:read` and `poppy:write` and offer only its own, narrower scopes**". `poppy:` 접두사는 프로토콜 예약. 공식 사이트도 Blocked ~ Full access 5단계 스펙트럼 제시 | **발행본("더 세분화된 권한도 빠졌습니다")은 10-08 시점 기준이었고, Draft 0.1에서 실제로 들어왔습니다. 저자 서술이 현재 사양과 맞습니다** |
| 6 | **선택적 확장 — 기업이 행동·조건을 먼저 제시하고, 에이전트가 승인을 확인한 뒤 실행** | ✓ **확인(신규 사실)** | Operations 확장(version 1, **optional**): "The extension is **optional**, and a Company can use it for some actions and not others." 흐름 = ① 제안(API·MCP·대화·웹사이트가 **terms**와 함께 operation 반환, 아직 아무 일도 일어나지 않음) ② 승인(에이전트가 사용자에게 terms를 보여주고 승인 획득, 또는 기존 상시 권한 적용) ③ 확인(에이전트가 operations 엔드포인트에서 해당 revision을 confirm → 기업이 실행) ④ 추적. 조건 변경 시 새 revision에 재승인 필요, `user_approval_required: true`면 상시 권한 배제. 적용 예시로 교환·예약 변경·**구독 취소** 명시 — 저자의 "주문 변경이나 구독 취소 같은 행동" ✓ | - |
| 7 | **명세가 "에이전트의 승인 주장과 사용자의 실제 승인은 다르다"는 한계를 인정** | ✓ **확인(신규 사실, 거의 원문)** | Operations 확장: 확인(confirmation)은 "**It doesn't prove that the User saw the terms or approved them.**" / `approved_by`는 "**works on trust**, like the sign-in types (spec 4.4)" / 기업은 에이전트 인터페이스를 볼 수 없고, 주장한 승인 없이 confirm하면 `client_id`를 **revoke 가능** / 더 강한 증거가 필요하면 자사 로그인 웹사이트에서 승인받으라고 하되 **그 단계는 확장이 정의하지 않음**. 사양 4.4에도 "A Company can't always verify which type actually happened. The types work on trust" | - |
| 8 | OAuth 기반 + **에이전트가 식별 정보와 공개키를 제공하고 서명으로 자신을 인증** | ✓ 확인 | 사양 4.1: `client_id`는 메타데이터 문서를 반환하는 HTTPS URL이어야 하고, 기업은 이를 가져와 "who the Personal Agent is, … the keys it signs with"를 확인. "The key set contains only public keys." / 토큰 엔드포인트에서 "a client assertion signed by a key from `jwks_uri`"로 인증(= private_key_jwt). 시에라도 OAuth·JWT·HTTPS·OpenAPI·MCP 기반이라고 명시 | - |
| 9 | 게스트 세션 → 필요 시 고객 로그인·권한 부여 / 기업이 경로 선택(웹·MCP·OpenAPI·자사 에이전트) / 한 세션 연속 | ✓ 확인 | 시에라 1차 + 사양 5·6·7절(Web browsing / APIs / Conversations) | - |
| 10 | "지금은 에이전트가 웹페이지에서 처리 못 하면 고객지원 전화나 웹챗을 여는 경우도 있다 → 이 우회를 줄이자" | ✓ 확인 | 시에라 원문의 '현재 문제 상황' 서술과 일치. (10-08 발행본 초고에서 이것을 '프로토콜의 폴백'으로 오기해 교정했던 항목 — **저자 원고는 처음부터 올바른 방향**) | - |
| 11 | 브렛 테일러 = 시에라 공동창업자 겸 **OpenAI 이사회 의장**, CNBC 인터뷰, "혼돈 상태" | ✓ 확인 | 기존 10-08 리포트 B-2·B-4에서 1차·교차 확인, 재활용. 원 발언 "It is kind of chaos until such a standard exists." | - |
| 12 | 아마존 Muse 차단 **이유 세 가지**(사전 통보 없음 / 에이전트임을 밝히지 않음 / 자격 증명 수집·저장 추정), 출시 **9월 8일**, 차단 **9월 20일** | ✓ 확인 | 기존 10-08 리포트 B-6·B-7 재활용(GeekWire·implicator.ai·Yahoo Tech·TechSpot 교차). 9/8→9/20 = 12일 → 저자의 "2주도 지나지 않아" ✓ | - |
| 13 | 메타 반박(보안 저장소·비밀번호·결제수단 직접 미열람·민감 행동 확인) | ✓ 확인 | 동일 출처 | - |
| 14 | 아마존 공식 입장("구매 대행 서비스가 공개적으로 작동하고, 서비스 제공자가 참여 여부를 결정할 권리를 존중해야") | ✓ 확인 | 대변인 성명 "operate openly" + "respect service provider decisions about whether or not to participate". 광고 수익 해석을 저자가 '가능한 해석'으로 분리한 것도 출처 상태와 부합 | - |
| 15 | **8월 4일 미 연방항소법원이 아마존-퍼플렉시티 가처분 취소, 접근 주체는 퍼플렉시티가 아니라 AI 도구를 쓴 사용자** | ✓ **확인(날짜·법원·판단 모두)** | **2026-08-04 제9연방항소법원**, Amazon.com Services, LLC v. Perplexity AI, Inc., No. 26-1444. 가처분 파기(vacate), CFAA·캘리포니아 CDAFA 승소 가능성 부정. 판시: 아마존 컴퓨터에 '접근'한 주체는 사용자이고 Comet은 "**a tool, not a person**", "Perplexity itself does not directly communicate with Amazon's servers". 또한 **이용약관으로 접근을 규율할 아마존의 권한은 다루지 않음** → 저자의 "아마존이 이용약관으로 접근을 제한할 가능성까지 없어진 것도 아닙니다" ✓. 저자의 "에이전트 자체를 사용자와 동일한 법적 주체로 인정한 것은 아닙니다" ✓ | "미 연방항소법원"도 맞지만 **"제9연방항소법원"**으로 특정하면 더 정확(선택) |
| 16 | **Visa가 지난해 10월 Trusted Agent Protocol 발표** | ✓ 확인 | 2025-10 Visa 발표, **Cloudflare 공동 개발**, Web Bot Auth(HTTP Message Signatures) 기반. Cloudflare 2025-10 보도자료·Visa IR·the Paypers·Fintech News SG 교차. Adyen·Coinbase·Microsoft·Shopify·Stripe가 개발 과정 피드백 | - |
| 17 | **올해 9월 Bank of America·Capital One·ING·NatWest 등 6개 은행이 에이전트 상거래 신뢰 원칙 공동 발표** | ✓ 확인 | 2026-09-22 BofA 보도자료 "Global banks collaborate on principles for trusted agentic commerce". 6곳 = **ASB Bank, Bank of America, Capital One, Commonwealth Bank of Australia, ING, NatWest**. 문서명 *Building Trust in Agentic Commerce*, 5개 영역(투명성·안전·프라이버시/데이터·선택·상호운용성), 자율·비강제. 저자가 6곳 중 4곳만 적고 "등 6개 은행"으로 쓴 것은 정확 | - |
| 18 | **PAP 설계 파트너 목록에 OpenAI·Visa·Mastercard·여러 은행** | ✓ **확인(신규 사실) — 발행본과 상충하지 않음** | 시에라 블로그(2026-10-09, Poppy): 기존 참여사에 **설계 파트너 35곳 추가**. 명단에 **OpenAI, Visa, Mastercard, Bank of America, Wells Fargo, BBVA, PayPal, Synchrony, Venmo, Plaid, Adyen, Chime, Okta, 1Password, Cloudflare, Notion, Zapier, Zendesk, Target, Nordstrom, United Airlines, Hertz, GEICO, Liberty Mutual, Insurify, Cigna, Comcast, DIRECTV, FOX, SiriusXM, ElevenLabs, Klaviyo, OneSignal, Atomic, Gap Inc.** 포함. **발행본의 "OpenAI·앤트로픽·아마존 불참"은 10-06~08 시점 사실이고, 10-09에 OpenAI가 설계 파트너로 들어온 것** | 저자 서술 유지. 단 **앤트로픽·아마존은 10-09 명단에도 없음** — 필요하면 한 구절로 유지 가능 |
| 19 | **FSB가 AI의 쏠림 행동·시스템 위험 증폭 가능성을 지적** | ✓ 확인 | FSB 2024-11 보고서: AI가 "potentially amplify certain financial sector vulnerabilities and thereby pose risks to financial stability", 다수 금융기관이 같은 모델을 쓰면 **herding**으로 시장 변동을 증폭 / FSB 2025-10 *Monitoring Adoption of Artificial Intelligence and Related Vulnerabilities in the Financial Sector*: 동일 모델·특수 하드웨어 집중이 **herd-like behaviour**로 이어질 수 있고 소수 공급자 의존이 취약성을 만든다고 경고(로이터 보도) | - |
| 20 | 뱅크런 시나리오 | 검증 제외 | 저자가 "실제로 그렇게 된다는 예측은 아닙니다 … 가정입니다"로 사정거리를 명시 | - |
| 21 | 고유명사 철자(Sierra / 브렛 테일러 / Walmart·월마트 / Stripe / Shopify / Genesys / Instinct / Rocket / Muse / Personal Agent Protocol / Trusted Agent Protocol / Visa / Mastercard / Bank of America / Capital One / ING / NatWest / FSB) | ✓ 확인 | 전부 정확 | - |

### C. 반드시 고쳐야 할 오류

**없습니다.** 검증 요청 항목 전부가 1차 출처로 확인됐고, 특히 신규 사실 4건(Draft 0.1·Apache 2.0 / 세분화 권한 / Operations 확장 / 승인 주장의 한계)은 사양 원문과 거의 그대로 일치합니다.

경미 보정 2건(모두 선택):

1. **[경미, 선택] 19행 — 법원 특정**: "미 연방항소법원" → "**제9연방항소법원**". 틀린 표기는 아니지만 레포 발행본·타임라인이 제9연방항소법원으로 적고 있어 통일성 차원.
2. **[경미, 선택] 21행 — 설계 파트너 서술의 날짜 근거**: "현재 PAP의 설계 파트너 목록에도 OpenAI와 Visa, Mastercard, 여러 은행이 이름을 올리고 있습니다"는 **10월 9일 추가된 35곳** 기준입니다. 발행본과 정반대로 보일 수 있으니 "**초안 공개와 함께 설계 파트너가 35곳 더 늘었고, 그 명단에는**" 정도로 시점을 한 번 보이면 독자 혼란이 없습니다. (사실로는 수정 불요.)

### D. 그대로 두어도 되는 항목

- 참여사 6곳, Draft 0.1·10월 12일·Apache 2.0, 결제·푸시 알림 미정, 세분화 권한, Operations 선택적 확장, 승인 주장의 한계 인정, OAuth·공개키·서명, 게스트→로그인 흐름, 전화·웹챗 서술, 테일러 발언, Muse 3대 이유·9/8·9/20, 아마존 성명, 8월 4일 판결, Visa TAP, 6개 은행, 설계 파트너, FSB — **전부 유지**.

### E. 발행 가부

**발행 가능(사실 기준)** — 치명적 오류 0건. 단 **발행일 처리가 선행 조건**입니다.

이 원고에는 **10월 9일(설계 파트너 35곳 추가)과 10월 12일(Draft 0.1 갱신)** 사실이 들어 있어, `_posts/2026-10-08-...`에 그대로 덮어쓰면 발행일 이후 사건을 과거처럼 적는 시점 규율 위반이 됩니다. 선택지는 둘입니다.

- **(권장) 발행일을 옮긴다** — 10월 13일자(또는 10-09 이후 빈 날짜) 신규 포스트로 발행하고, 10-08 발행본은 그대로 둡니다. 저자 원고가 담은 "초안이 실제로 나왔다"는 후속 전개가 살고, 두 글이 서로를 부정하지 않습니다.
- **(대안) 10-08 날짜를 유지하되 해당 부분을 제거한다** — 11행의 "현재 공식 사이트에는 10월 12일 업데이트된 Draft 0.1이 올라와 있습니다. Apache 2.0 라이선스도 명시되어 있고요", 13행 세분화 권한·Operations 확장 문단, 15행 승인 한계 문단, 21행 설계 파트너 문장을 모두 빼야 합니다. **즉 저자가 새로 넣은 핵심 네 가지를 전부 버리는 선택이라 권하지 않습니다.**

---

## 종합 요약 (편별 한 줄)

| 편 | 치명적 | 경미 | 판정 |
|---|---|---|---|
| DNS (09-28) | **2건** — "Alignment Reports"→"Misalignment Reports", 허깅페이스 "7월 19일"→7월 11~13일 | 0 | **수정 후 발행** |
| Sign in with ChatGPT (10-01) | 0 | 1~3건(보안 설정→사용량 설정 등) | **발행 가능(보정 권고)** |
| 선캐처 (10-02) | **1건** — "2030년 중반"→"2030년대 중반" | 3건(800Gbps 방향, 100~200m, 선캐처 표기) | **수정 후 발행** |
| PAP (10-08) | 0 | 2건(선택) | **발행 가능 — 단 발행일을 10-13 등으로 옮길 것** |

### 저자 원고가 발행본보다 정확한 곳 (발행본 쪽을 고쳐야 하는 항목)

1. **선캐처 "최대 8배"** — 구글 1차 표현. 발행본의 "5~8배"는 출처가 확인되지 않는 범위 표현.
2. **선캐처 "Gemma 모델"** — NPR 계열 1차 보도. 발행본의 "짧은 Gemini 질의"는 2차 매체 표현.
3. **PAP 세분화 권한·결제/푸시 알림** — 발행본은 "세분화된 권한도 빠졌습니다"였으나 Draft 0.1(10-12)에서 커스텀 스코프가 들어왔습니다. 발행본은 10-08 시점으로는 정확하므로 소급 수정은 불필요하나, 두 글이 함께 서면 저자 원고 쪽이 최신입니다.

### 사용한 1차 출처

- OpenAI 얼라인먼트 — https://alignment.openai.com/misalignment-reports/ (페이지 제목·색인), https://alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/ (타임스탬프·프록시 차단·중단 범위·조치)
- OpenAI — https://openai.com/index/hugging-face-incident-and-the-road-ahead/ (7/19 경보·7/20 연결·7/21 공개), METR https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/ (7/11 첫 RCE)
- OpenAI 공식 문서 — https://learn.chatgpt.com/docs/sign-in-with-chatgpt , https://learn.chatgpt.com/docs/whats-new/devday-2026 (Astra Ultrafast·Pro $500), https://help.openai.com/articles/20001542-using-your-chatgpt-plan-in-other-apps-and-sites (크레딧 기본 꺼짐·로그아웃≠해제)
- TheNextWeb — https://thenextweb.com/news/openai-devday-pro-200-usage-cut-pro-500-plan (20x→10x·$2,500·Pro 500·Ultrafast 300 tok/s)
- The New Stack — https://thenewstack.io/sign-in-with-chatgpt/ (16곳·Lovable 예정)
- Google Research — https://research.google/blog/exploring-a-space-based-scalable-ai-infrastructure-system-design/ (up to 8x·800Gbps each-way/1.6Tbps·100~200m·$200/kg mid-2030s·2027 2기)
- GPB/NPR — https://www.gpb.org/news/2026/10/01/google-launches-project-suncatcher-step-towards-ai-data-centers-in-space (Gemma·15분·2027)
- Sierra — https://sierra.ai/blog/introducing-personal-agent-protocol (참여 6곳), https://sierra.ai/blog/poppy (2026-10-09, 설계 파트너 35곳)
- PAP 사양 — https://personalagentprotocol.org/ , https://personalagentprotocol.org/spec (Draft 0.1 updated Oct 12 2026·Apache 2.0·4.1 Agent identity·4.4 Scopes·3.3 Extensions), Operations 확장 문서(`/docs/extensions/operations`)
- Ninth Circuit — https://www.cooley.com/news/insight/2026/2026-08-06-ninth-circuit-rules-on-ai-agent-access-to-third-party-websites-under-cfaa , https://knightcolumbia.org/content/ninth-circuit-vacates-injunction-against-perplexitys-ai-agents
- Visa/Cloudflare — https://www.cloudflare.com/press/press-releases/2025/cloudflare-collaborates-with-leading-payments-companies-to-secure-and-enable-agentic-commerce/
- Bank of America — https://newsroom.bankofamerica.com/content/newsroom/press-releases/2026/09/global-banks-collaborate-on-principles-for-trusted-agentic-comme.html
- FSB 관련 보도 — https://www.euronews.com/2024/11/14/ai-use-poses-risks-to-global-financial-system-fsb-standard-setters-warn , https://www.kitco.com/news/off-the-wire/2025-10-10/global-financial-watchdogs-ramp-monitoring-ai
