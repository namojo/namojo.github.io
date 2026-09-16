# Fact Check Report: apple-ios27-siri-gemini-trust-boundary

- **검증일:** 2026-09-16 (발행 예정일 2026-09-17 KST)
- **초고:** `_posts/2026-09-17-apple-ios27-siri-gemini-trust-boundary.md`
- **팩트 카드:** `_workspace/daily/2026-09-17-brief.md`
- **결론 요약:** **발행 중단.** 글의 중심 논지("애플은 공식 확인하지 않았다 / 사용자가 알 방법이 없다")를 정면으로 무너뜨리는 애플 **공식 문서**가 2026년 6월 8일에 이미 발행돼 있습니다. 팩트 카드 자체가 이 문서를 누락했습니다.

---

## 0. 가장 먼저 — 논지 붕괴 사유 (검증 대상 9번)

**애플은 이 라우팅을 공식 확인했습니다.** 애플 자사 보안 연구 블로그(security.apple.com)가 **2026년 6월 8일** "Expanding Private Cloud Compute"를 게시했고, 디 인포메이션 보도(6월 4일) **나흘 뒤**입니다.

애플의 공식 문장(원문 인용):

> "collaborating with Google and NVIDIA to run new Apple Intelligence workloads on Google Cloud, extending our industry-leading PCC privacy commitments to third-party data centers for the first time."

추가로 애플이 같은 문서에서 공개한 것:

| 항목 | 애플 공식 문서의 내용 |
|---|---|
| 어느 사업자 하드웨어인가 | Google Cloud. NVIDIA GPU + Intel CPU(TDX) + Google Titan 칩 |
| 암호화 방식 | NVIDIA Confidential Computing (하드웨어 기반 기밀 컴퓨팅) |
| 무엇이 클라우드로 나가는가 | "For the most demanding tasks, including agentic tool-use and complex reasoning" |
| 검증 가능성 | "a cryptographically verifiable, append-only ledger of all Google Cloud hardware", "all binaries will be published for public inspection" |
| 소프트웨어 통제권 | "Apple devices will only trust PCC software that is cryptographically approved by Apple", "Apple retains complete control over PCC software" |

- 출처(1차): https://security.apple.com/blog/expanding-pcc/ (2026-06-08)
- 출처(교차): https://www.helpnetsecurity.com/2026/06/10/apple-private-cloud-compute-google-cloud-expansion/ (2026-06-10) — 인용: "Together, these capabilities help ensure that even outside of Apple's hardware and data centers, user data will continue to be protected by the full force of PCC's extraordinary security and privacy properties."
- 출처(교차): https://www.cloudcomputing-news.net/news/apple-private-cloud-compute-google-cloud/

**게다가 애플·구글은 2026년 1월 12일 공동성명으로 제휴 자체를 공식 발표했고, 성명문에 "cloud technology"가 명시돼 있습니다.**

> "Apple and Google have entered into a multi-year collaboration under which the next generation of Apple Foundation Models will be based on Google's Gemini models **and cloud technology**."

- 출처: https://techcrunch.com/2026/01/12/googles-gemini-to-power-apples-ai-features-like-siri/
- 출처: https://www.marketingdive.com/news/apple-taps-google-gemini-to-power-ai-features-in-multiyear-deal/809697/

**따라서 초고의 다음 문장들은 사실과 다릅니다.**

| 초고 위치 | 문장 | 판정 |
|---|---|---|
| 7줄 (excerpt) | "애플은 그 어느 쪽도 공식 확인하지 않았습니다." | ✗ 오류 |
| 7줄 (excerpt) | "지난 반년 사이에 **조용히** 달라졌고" | ✗ 오류 (애플이 공개 블로그로 발표) |
| 38줄 (소제목) | "다만 애플이 확인해 준 것은 어느 쪽도 아닙니다" | ✗ 오류 |
| 40줄 | "이것은 디 인포메이션의 보도이고 애플은 공식 확인하지 않았습니다." | ✗ 오류 (6/8 확인) |
| 40줄 | "애플이 iOS 27과 함께 내놓은 설명에도 어떤 요청이 기기에 남고 어떤 요청이 어디까지 나가는지를 단계별로 밝힌 문서는 없습니다." | ⚠ 부분 오류 ("단계별"이라는 한정어로만 겨우 버팀. 애플은 온디바이스/PCC 구분과 "가장 부담이 큰 작업은 Google Cloud"를 공개함) |
| 42줄 | "둘 다 애플의 발표가 아니라 보도거든요." | ✗ 오류 (6월 건은 애플 발표) |
| 42줄 | "공개된 정보만으로는 지금 제 질문이 어느 회사의 실리콘에서 계산되는지 사용자가 알 방법이 없다" | ✗ 오류 (애플이 공개. 하드웨어 원장까지 공개) |
| 36줄 | "사용자가 믿어야 하는 대상이 애플의 운영 정책과 **검증 공개 약속에서** Nvidia 실리콘의 기밀 컴퓨팅 구현과 그 증명 체계로 **바뀝니다**" | ✗ 오류 (애플은 검증 공개 약속을 **철회한 것이 아니라 확장**했다 — 구글 클라우드 하드웨어 전량의 검증 가능 원장 + 바이너리 공개) |
| 48줄 | "애플은 이 중 어느 칸도 사용자에게 보여주지 않았고" | ✗ 오류 (열거한 6개 칸 중 최소 4개를 공개 — 하드웨어 사업자, 기밀 컴퓨팅 여부, 증명 확인 경로, 국가별 가용성) |

**남아 있는 진짜 공백(살릴 수 있는 논지):** 질의 단위로 "이 요청이 어디서 처리됐는지" 사용자에게 표시되지 않음, 입출력 보존 기간의 수치, 기업 고객용 감사 로그. 즉 "애플이 숨겼다"가 아니라 "애플이 공개한 것은 아키텍처이고, 개별 요청의 처리 위치는 사용자에게 보이지 않는다"가 정확한 표현입니다.

---

## A. 시점 일관성

- **발행일:** 2026-09-17 (KST)
- 본문에 등장하는 사건은 모두 발행일 **이전**이므로 미래 사건 참조 오류는 없습니다.

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 애플·구글 제휴 공동성명 | 2026-01-12 | 이전 ✓ | **본문 누락** |
| 블룸버그 거먼 보도 | 2025-11-05 | 이전 ✓ | 유지 |
| 디 인포메이션 보도 | 2026-06-04 | 이전 ✓ | 유지 |
| 애플 "Expanding PCC" 공식 블로그 | 2026-06-08 | 이전 ✓ | **본문 누락 (치명적)** |
| WWDC 2026 / Siri AI 발표 | 2026-06-08~09 | 이전 ✓ | **본문 누락** |
| iOS 27 공개 배포 | 2026-09-14 | 이전 ✓ | 유지 |
| PCC 최초 공개 | 2024-06 | 이전 ✓ | 유지 |

- **사후 시점 표현:** "훗날", "돌이켜보면" 등 없음. 문제 없음.
- **시점 규율의 반대 방향 오류:** 본문 40줄이 **6월 4일 시점의 "불분명하다"를 9월 17일의 현재 상태로 제시**합니다. 그 질문은 6월 8일에 애플이 답했습니다. 과거 보도를 현재형으로 고정한 시점 오류입니다.

---

## B. 사실 검증 (항목별)

### 1. iOS 27 공개 배포일 2026-09-14 — ✓ 확인
애플이 9월 9일 발표, 9월 14일(월) 태평양시 오전 10시경 배포.
- https://9to5mac.com/2026/09/09/apple-confirms-ios-27-release-date-september-14/
- https://appleinsider.com/articles/26/09/09/ios-27-arrives-on-september-14-heres-what-youll-get
- https://en.wikipedia.org/wiki/IOS_27 — "It was released on September 14, 2026."

### 2. 새 Siri의 기능 명세 — ✓ 확인
- "The new Siri uses generative AI technology and behaves more like a chatbot."
- "iOS 27 introduces a Siri app that syncs via iCloud" / 대화를 "begin, view, or continue" 가능 → 독립 앱 + 과거 대화 기록 ✓
- "use personal information from apps such as Messages" ✓
- "understand content displayed on screen" ✓
- 호출 경로 보강: 홈 화면 Dynamic Island 하단 당김으로도 호출.
- ⚠ **초고 미반영 사실:** Siri AI는 출시 시점에 **베타이며 영어 전용**입니다. "이번 주에 Siri가 달라졌다는 것을 이미 느끼셨을 겁니다"(12줄)는 한국 독자 기준으로는 과도한 단정입니다 — 한국어 사용자는 아직 체감할 수 없습니다.
- https://en.wikipedia.org/wiki/IOS_27
- https://www.macworld.com/article/3172166/ios-27-beta-updates-features-release-date.html

### 3. EU·중국 미제공 및 사유 — ✓ 확인 (단, 범위 부정확)
애플 공식 각주 원문:
> "Mac and Apple Vision Pro users in the EU will be able to access Siri AI when set to a supported language. **Siri AI will not be available initially in the EU in iOS, iPadOS, and watchOS.**"
> "Siri AI and the other new Apple Intelligence features will not be available in China **while Apple works through regulatory requirements**."

- 사유 "규제 요건"은 애플 공식 표현으로 정확 ✓
- ⚠ EU는 **전면 미제공이 아니라 iOS·iPadOS·watchOS 한정**이며 Mac·Vision Pro는 제공됩니다. 또한 애플 각주에서 "규제 요건" 문구가 붙은 대상은 **중국**입니다. 초고 14줄이 둘을 한 문장으로 묶어 EU까지 같은 사유로 처리한 것은 부정확합니다.
- https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/

### 4. AI 생성 이미지에 구글 SynthID — ✓ 확인
WWDC 2026에서 발표. Image Playground 및 사진 앱 일부 기능의 생성·편집 결과물에 적용. 메타데이터가 아니라 픽셀에 삽입.
- https://en.wikipedia.org/wiki/IOS_27 — "Image Playground images include Google's Synth ID to identify them as AI-generated."
- https://techtrendske.co.ke/2026/06/16/apple-synthid-ai-photo-watermarking-ios-27/

### 5. 블룸버그 거먼 2025-11-05 보도 — ✓ 확인 (전 항목 일치)
| 초고 서술 | 원 보도 | 판정 |
|---|---|---|
| 연 10억 달러 남짓 | "approximately $1 billion per year" | ✓ |
| 구글 전용 1조 2,000억 파라미터 | 1.2 trillion parameters | ✓ |
| 애플 자체 클라우드 모델 1,500억 | 150 billion | ✓ |
| MoE, 질의당 일부만 활성 | "Mixture-of-Experts architecture, so while it has over a trillion total parameters, only a fraction of them are activated for each query" | ✓ |
| PCC에서 돌아가므로 구글은 접근 불가 | "The AI model that Google is developing for Apple will run on Apple's Private Cloud Compute servers, so Google will not have access to Apple data." | ✓ |
| "여덟 배쯤" | 1.2T / 150B = 8배 | ✓ |
- https://www.macrumors.com/2025/11/05/apple-siri-google-gemini-partnership/
- ⚠ 경미: 10억 달러 금액은 **양사 모두 공식 확인한 적 없는 보도 수치**입니다. 초고는 "거먼 기자가 전한 내용"으로 귀속했으므로 허용 범위이나, 금액 뒤에 "보도된" 유지 권고.

### 6. 당초 iOS 26.4 (2026년 봄) 예정에서 지연 — ✓ 확인
> "expected to be introduced in an iOS 26.4 update that's coming in spring 2026"
- https://www.macrumors.com/2025/11/05/apple-siri-google-gemini-partnership/
- ⚠ 44줄 "이 사정과 무관하지 않을 것입니다 / 못 박을 근거는 없습니다"는 완화가 적절합니다. 다만 **지연 원인을 지연 시간 문제로 기울여 암시**하는데, 6월 8일 애플 발표를 반영하면 애플은 이를 지연 사유로 제시한 바 없습니다. 유지하되 추측임을 더 분명히 할 것.

### 7. Private Cloud Compute (2024) — ✓ 확인 / 칩 표현은 ⚠
- 2024년 공개 ✓ (WWDC 2024, security.apple.com/blog/private-cloud-compute/)
- 애플 자체 설계 칩 기반 ✓ — 애플 표현은 "custom-built server hardware that brings the power and security of **Apple silicon** to the data center", Secure Enclave·Secure Boot 포함
- 소프트웨어 이미지 공개 검증 약속 ✓ — 모든 프로덕션 PCC 노드의 소프트웨어 이미지 공개, Virtual Research Environment 제공, 보안 핵심 소스 일부 공개
- ⚠ **"애플이 맥에 쓰는 계열의 칩"(28줄)**: 틀린 말은 아니지만 출처가 약합니다. MacRumors가 "Apple's Mac-series chips"라고 썼고, PCC는 2024년 M2 Ultra로 시작해 2026년 M5 계열로 이전 중이라는 보도가 있습니다. 애플 자신의 용어는 "Apple silicon"입니다. **"애플 실리콘(맥과 같은 M 계열)"로 표기 권고.**
- https://security.apple.com/blog/private-cloud-compute/
- https://www.datacenterdynamics.com/en/news/apple-announces-private-cloud-compute-for-ai-processing/

### 8. 디 인포메이션 2026-06-04 보도 — ✓ 확인 (내용) / ✗ 오류 (미확인 여부)
- "Apple tried to get a modified version of Gemini working on its in-house server system, but found that it ran too slowly." ✓
- Google의 "fleet of Nvidia Blackwell B200 data center chips" ✓
- "user data encrypted using Nvidia's hardware-based confidential compute feature" ✓
- MacRumors: "it's unclear how Apple's previously launched server system, called Private Cloud Compute, will fit into the upcoming Siri launch." ✓ (단, **6월 4일 시점의 서술**)
- ✗ **"애플이 공식 확인하지 않았다"는 6월 4일에만 참이고 6월 8일에 무효가 됩니다.** (위 0절)
- https://www.macrumors.com/2026/06/04/apple-siri-rely-on-google-nvidia-chips/
- https://appleinsider.com/articles/26/06/04/revamped-siri-will-tap-nvidia-chips-for-fast-private-cloud-computing
- 참고: 애플 공식 문서는 "NVIDIA GPU"라고만 쓰고 **Blackwell/B200 모델명은 명시하지 않습니다.** 모델명은 보도에만 존재하므로 "보도에 따르면 Blackwell B200"으로 귀속 유지 필요.
- 참고: 보도에는 질의가 Apple ID와 분리·익명화·토큰화된다는 내용도 있습니다(초고 미반영).

### 9. "애플 미확인" 프레임 — ✗ **치명적 오류**
0절 참조. **이 글의 중심 논지가 무너집니다.**

---

## C. 수정 권고 (우선순위 순)

1. **[치명적 / 재집필]** 38~42줄 3번째 절 전체. "애플이 확인해 준 것은 어느 쪽도 아니다"는 폐기해야 합니다. 대체 논지 두 가지 중 택일:
   - (a) **"애플은 발표했다. 다만 발표한 것은 아키텍처이고, 내 질문 한 건이 어디서 계산됐는지는 여전히 보이지 않는다."** — 6월 8일 애플 문서를 본문의 축으로 끌어올리고, 애플이 실제로 공개한 것(구글 클라우드, NVIDIA 기밀 컴퓨팅, 하드웨어 원장, 바이너리 공개)과 공개하지 않은 것(요청 단위 처리 위치 표시, 보존 기간 수치, 감사 로그)을 갈라서 쓰는 방식. 사실 관계가 탄탄하고 마무리의 체크리스트와도 그대로 이어집니다.
   - (b) **"신뢰 경계는 실제로 옮겨졌고, 애플은 그것을 숨기지 않고 다시 정의했다."** — PCC라는 이름은 유지되지만 그 이름이 가리키는 대상이 '애플 소유 기계'에서 '애플이 서명한 소프트웨어 + 남의 기계의 암호화 메모리'로 바뀌었다는 정의 변경을 다루는 방식. 저자의 "옮겨진 것은 신뢰 경계"라는 통찰을 살리면서 사실 오류를 없앨 수 있습니다.
2. **[치명적]** 7줄 excerpt: "애플은 그 어느 쪽도 공식 확인하지 않았습니다" 및 "조용히 달라졌고" 삭제. 제목의 문제의식("제 질문은 누구의 서버에서 계산될까요")은 유지 가능하나, 답이 "알 수 없다"가 아니라 "구글 클라우드의 NVIDIA GPU이고 애플이 그렇게 발표했다"임을 전제로 다시 써야 합니다.
3. **[치명적]** 36줄: "검증 공개 약속에서 ... 로 바뀝니다" → 애플이 검증 약속을 **확장**했다는 사실(구글 클라우드 하드웨어 전량의 append-only 검증 원장, 전 바이너리 공개)로 교체. 현재 문장은 애플이 검증을 포기한 것처럼 읽혀 사실과 반대입니다.
4. **[치명적]** 48줄: "애플은 이 중 어느 칸도 사용자에게 보여주지 않았고" → "애플은 이 중 몇 칸은 문서로 공개했고, 나머지 몇 칸은 비어 있습니다"류로 교체. 열거한 6개 칸 중 4개는 공개돼 있습니다.
5. **[중대]** 42줄: "둘 다 애플의 발표가 아니라 보도거든요" 삭제. 2026-01-12 공동성명과 2026-06-08 애플 블로그가 존재합니다.
6. **[중대]** 40줄: MacRumors의 "불분명하다"를 현재 상태로 인용하는 대목 삭제 또는 "6월 4일 시점에는 ~라고 적었지만 나흘 뒤 애플이 직접 답했습니다"로 시점 명시.
7. **[중대]** 14줄: EU·중국을 한 문장으로 묶은 서술 분리. EU는 iOS·iPadOS·watchOS 한정 미제공(Mac·Vision Pro는 제공), "규제 요건" 표현은 애플이 중국에 붙인 문구. 아울러 Siri AI가 **베타·영어 전용**이라는 사실 추가.
8. **[중대]** 12줄: "이번 주에 Siri가 달라졌다는 것을 이미 느끼셨을 겁니다" → 영어 전용 베타이므로 한국 독자에게는 성립하지 않습니다. "미국에서 영어로 쓰는 사용자라면" 같은 한정 또는 도입부 전면 교체 필요.
9. **[경미]** 28줄: "애플이 맥에 쓰는 계열의 칩" → "애플 실리콘(맥과 같은 M 계열)"로 표기하고 출처가 애플 공식 표현("Apple silicon")임을 반영.
10. **[경미]** 28줄: "Nvidia의 Blackwell B200" → 애플 공식 문서에는 모델명이 없으므로 "보도에 따르면 Blackwell B200" 귀속 유지.
11. **[경미]** 20줄: "연 10억 달러 남짓" → 양사 미확인 보도 수치임을 유지(현재 거먼 귀속은 적절).
12. **[경미]** 44줄: 지연 사유 추정은 완화돼 있으나, 애플이 지연 사유를 밝힌 적 없다는 점을 한 마디로 명시하면 더 안전합니다.
13. **[확인 필요]** 32줄 본문 이미지와 52줄 커버 크레딧: 파일 존재 여부와 `_workspace/image-credits-2026.md` 기록이 실제 피사체·출처와 일치하는지 확인 필요(본 검증 범위 외). 본문 이미지 캡션 "이런 시설의 가속기로 나간다는 보도가 6월에 있었습니다"는 이제 "보도"가 아니라 애플 발표이므로 캡션도 수정 대상입니다.

---

## D. 종합 판정

- [ ] 발행 가능
- [ ] 수정 후 발행 가능
- [x] **발행 중단 — 논지 재구성 후 재검증 필요**

**사유:** 문장 교정으로 수습되는 수준이 아닙니다. 3번째 절 전체와 excerpt·소제목·마무리가 "애플 미확인"이라는 **틀린 전제** 위에 서 있습니다. 2026-06-08 애플 공식 문서가 초고보다 3개월 앞서 공개돼 있어, 이 상태로 발행하면 "AI에 대한 시각이 대단한 사람"의 신뢰가 바로 흔들립니다 — 애플 보안 블로그는 이 주제 독자층이 반드시 읽는 1차 출처입니다.

**다행인 점:** 저자의 통찰("옮겨진 것은 성능이 아니라 신뢰 경계다")은 애플 공식 문서를 반영해도 **그대로 살아 있습니다.** 오히려 애플이 스스로 PCC의 정의를 "우리 기계"에서 "우리가 서명한 소프트웨어 + 남의 기계의 암호화 메모리"로 다시 쓴 것을 1차 출처로 인용할 수 있어 논지가 더 단단해집니다. C-1의 (a) 또는 (b)로 방향을 잡고, 팩트 카드에 2026-01-12 공동성명과 2026-06-08 애플 블로그를 추가한 뒤 재집필을 권고합니다.

**팩트 카드 결함:** `_workspace/daily/2026-09-17-brief.md`의 "추론 위치" 절이 6월 4일 보도에서 멈춰 있고, 나흘 뒤 애플 공식 발표를 누락했습니다. 그 결과 "사정거리 표시(필수) 1. 애플 미확인" 지침 자체가 틀린 지시가 됐습니다. 카드 31줄과 39줄을 먼저 고쳐야 합니다.

---

## E. 재활용 가능한 검증 결과 (후속 포스트용)

| 팩트 | 판정 | 1차 출처 |
|---|---|---|
| 애플·구글 제휴 공동성명 2026-01-12, "Gemini models and cloud technology" | ✓ | techcrunch.com/2026/01/12/... |
| 애플 PCC를 Google Cloud로 확장 공식 발표 2026-06-08 | ✓ | security.apple.com/blog/expanding-pcc/ |
| PCC 최초 공개 2024, Apple silicon, 소프트웨어 이미지 공개 검증 | ✓ | security.apple.com/blog/private-cloud-compute/ |
| Gemini 계약 조건(연 10억 달러·1.2T·150B·MoE) | ✓ (보도, 양사 미확인 금액) | Bloomberg 2025-11-05 / MacRumors |
| iOS 27 배포 2026-09-14, Siri AI 베타·영어 전용 | ✓ | 9to5mac / Wikipedia |
| Siri AI EU 미제공 범위(iOS·iPadOS·watchOS), 중국 미제공 사유 "regulatory requirements" | ✓ | apple.com/newsroom/2026/06/apple-introduces-siri-ai-... |

---
---

# 2차 검증 (재집필본) — 2026-09-16

- **대상:** `_posts/2026-09-17-apple-ios27-siri-gemini-trust-boundary.md` (전면 재집필본)
- **팩트 카드:** `_workspace/daily/2026-09-17-brief.md` (2차 개정판)
- **결론:** **수정 후 발행 가능.** 1차에서 지적한 치명적 오류 7건은 **전량 제거**됐고, 새로 도입된 사실·인용은 **전부 1차 출처로 확인**됐습니다. 남은 것은 **중대 1건(보존 기간 집계 — 본문 내부 모순)**과 경미 3건입니다.

## 2-1. 1차 지적 오류의 제거 여부 (요청 1)

잔존 표현 스캔(`공식 확인|확인하지 않|알 방법이 없|조용히|어느 쪽도|어느 칸도|보도거든요|불분명`) 결과 **적중 1건뿐이며, 그것은 정당한 용법**입니다 — 50줄 "연 10억 달러 ... 두 회사 모두 확인하지 않은 수치입니다"(금액에 대한 정확한 귀속).

| 1차 지적 | 재집필본 | 판정 |
|---|---|---|
| excerpt "애플은 그 어느 쪽도 공식 확인하지 않았습니다" | "애플은 그 변경을 6월에 직접 문서로 냈습니다" | ✓ 제거 |
| excerpt "조용히 달라졌고" | 삭제 | ✓ 제거 |
| 소제목 "애플이 확인해 준 것은 어느 쪽도 아닙니다" | "6월 8일, 애플은 PCC를 외부 데이터센터로 확장했다고 직접 밝혔습니다" | ✓ 제거 |
| "디 인포메이션의 보도이고 애플은 공식 확인하지 않았습니다" | 삭제. 46줄에서 6/4 보도와 6/8 애플 문서의 선후를 명시 | ✓ 제거 |
| "둘 다 애플의 발표가 아니라 보도거든요" | 삭제 | ✓ 제거 |
| "공개된 정보만으로는 ... 알 방법이 없다" | 54줄 "공개하지 않은 것은 라우팅의 존재가 아니라 그 세부입니다"로 반전 | ✓ 제거 |
| "검증 공개 약속**에서** ... 로 바뀝니다" | 44줄 "2024년에 한 검증 공개 약속을 포기한 것이 아니라 외부 데이터센터까지 끌고 간 셈" | ✓ 제거 + 사실관계 교정 |
| "애플은 이 중 어느 칸도 보여주지 않았고" | 56줄 "하드웨어와 증명에 관한 칸은 이례적으로 자세히 공개했고 ... 칸은 비워 두었습니다" | ✓ 제거 (단 2-8 참조) |
| MacRumors "불분명하다"를 현재 상태로 인용 | 삭제 | ✓ 제거 |

## 2-2. 애플 인용 3곳의 번역 정확성 (요청 2) — ✓ 3건 모두 원문 범위 내

| 초고 | 원문 | 판정 |
|---|---|---|
| 22줄 "Private Cloud Compute가 사용자의 요청을 처리할 때, 사용자의 개인 데이터는 저장되지 않으며 애플이나 다른 누구에게도 접근이 허용되지 않습니다." | "When Private Cloud Compute is handling users' requests, their personal data is not stored nor made accessible to Apple or anyone else." | ✓ 정확 |
| 36줄 "인프라가 어디에 호스팅되든, 애플은 PCC 소프트웨어에 대한 완전한 통제를 유지합니다." | "Regardless of where the infrastructure is hosted, Apple retains complete control over PCC software" | ✓ 정확 (직역 수준) |
| 32줄 "처음으로 제3자 데이터센터까지 확장한다" | "extending our industry-leading PCC privacy commitments to third-party data centers for the first time" | ✓ 정확 |
| 24줄 "기기에서, 그리고 Private Cloud Compute를 사용하는 서버에서 구동된다" | "run on device and on servers using Private Cloud Compute" | ✓ 정확 |
| 24줄 "구글 및 구글의 Gemini 모델과 협업해 맞춤 제작한 차세대 Apple Foundation Models" | "These new capabilities are powered by the next generation of Apple Foundation Models, custom-built in collaboration with Google and its Gemini models for deeply integrated Apple Intelligence experiences." | ✓ 정확 |

- **20줄 "이번 보도자료"라는 귀속도 정확합니다.** 위 두 문장(프라이버시 보증문·"기기에서 그리고 PCC를 사용하는 서버에서")은 **9월 보도자료**에 실제로 들어 있습니다(6월 보도자료에도 동일 문장이 있으나, 9월 문서에도 있으므로 "이번"이 맞음).
- 출처: https://www.apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/
- 출처: https://security.apple.com/blog/expanding-pcc/

## 2-3. 6/8 문서의 기술 목록 (요청 3) — ✓ 확인

애플 원문: **"NVIDIA Confidential Computing with NVIDIA GPUs, Intel CPUs with TDX, and Google's Titan chip"**

초고 32줄: "엔비디아 GPU의 기밀 컴퓨팅(confidential computing), 인텔 CPU의 TDX, 그리고 구글의 타이탄(Titan) 칩" → **세 항목 모두 원문과 일치**하며 순서도 동일합니다. 표기(`타이탄(Titan)`)도 병기 규칙에 맞습니다.

## 2-4. 투명성 장치 3종 (요청 4) — ✓ 3건 모두 원문 확인

| 초고 44줄 | 애플 원문 |
|---|---|
| "구글 클라우드에 놓인 하드웨어 전량을 암호학적으로 검증할 수 있는, 기록을 덧붙이기만 할 수 있는 원장(append-only ledger)으로 관리한다" | "We maintain a cryptographically verifiable, append-only ledger of all Google Cloud hardware that is part of the PCC fleet" |
| "바이너리를 전부 공개하며" | "All binaries will be published for public inspection" |
| "Apple Security Bounty를 통해 연구자에게 연구 모드로 돌아가는 실제 PCC 노드에 접근할 수 있게 하겠다" | "Access to live PCC nodes in research mode through the Apple Security Bounty Program" |

"전량"(all Google Cloud hardware), "연구 모드"(research mode), "실제 노드"(live nodes) 모두 원문 범위 내입니다. **과장 없음.**

## 2-5. EU·중국 분리 문장 (요청 5) — ✓ 애플 각주와 일치

애플 각주 원문:
> "Mac and Apple Vision Pro users in the EU will be able to access Siri AI when set to a supported language. Siri AI will not be available initially in the EU in iOS, iPadOS, and watchOS."
> "Siri AI and the other new Apple Intelligence features will not be available in China while Apple works through regulatory requirements."

초고 14줄: "EU에서는 iOS·iPadOS·watchOS에서 Siri AI가 켜지지 않는데 맥과 Vision Pro에서는 제공됩니다. 중국에서는 규제 요건을 정리하는 동안 제공되지 않습니다." → **범위·사유 귀속 모두 정확.** 1차 지적이 정확히 반영됐습니다.

- 참고(오류 아님): 애플은 EU 지연 사유를 별도 보도자료 「Due to DMA, Siri AI delayed in EU for iOS 27 and iPadOS 27」(2026-06)로 밝혔습니다. 초고는 EU에 사유를 붙이지 않았으므로 오류가 아니며, 굳이 넣을 필요도 없습니다. 넣는다면 "DMA 때문"이 애플의 표현입니다.
- 출처: https://www.apple.com/newsroom/2026/06/due-to-dma-siri-ai-delayed-in-eu-for-ios-27-and-ipados-27/

## 2-6. 2026년 1월 공동성명 (요청 6) — ✓ 확인, 그리고 **논지를 더 강화할 문장 발견**

1차 출처는 구글 공식 블로그 「Joint statement from Google and Apple」(2026-01-12)입니다. 전문:

> "Apple and Google have entered into a multi-year collaboration under which the next generation of Apple Foundation Models will be based on Google's **Gemini models and cloud technology**. These models will help power future Apple Intelligence features, including a more personalized Siri coming this year. After careful evaluation, Apple determined that Google's AI technology provides the most capable foundation for Apple Foundation Models and is excited about the innovative new experiences it will unlock for Apple users. **Apple Intelligence will continue to run on Apple devices and Private Cloud Compute, while maintaining Apple's industry-leading privacy standards.**"

- 초고 24줄 "그 성명에는 Gemini 모델과 함께 클라우드 기술도 적혀 있었습니다" → ✓ **정확** ("Gemini models and cloud technology"가 성명 첫 문장에 있음)
- ⚠ 주의: 일부 매체(TechCrunch·Marketing Dive 본문)는 성명의 **두 번째 문장만** 인용해 "Google's AI technology"로 적었습니다. "cloud technology" 문구를 확인하려면 **구글 공식 블로그를 1차 출처로 달아 두는 것이 안전**합니다.
- **[보강 권고 — 오류 아님]** 같은 성명의 마지막 문장 "Apple Intelligence will continue to run on Apple devices and Private Cloud Compute"는 이 글의 논지에 결정적입니다. 1월에 애플·구글은 "애플 기기와 PCC에서 계속 돌아간다"고 썼고, 6월에 **그 PCC 자체가 구글 클라우드로 확장**됐습니다. 즉 약속을 어긴 것이 아니라 **약속의 용어가 재정의된 것**이라는 글의 중심 주장을 저자가 직접 증명할 수 있는 1차 인용입니다. 28줄 "그 전제가 올해 6월에 바뀌었습니다" 앞에 한 문장 넣으면 글의 무게가 올라갑니다.
- 출처: https://blog.google/company-news/inside-google/company-announcements/joint-statement-google-apple/

## 2-7. Blackwell·B200 귀속 처리 (요청 7) — ✓ 적절

애플 6/8 문서를 재확인한 결과 **"Blackwell"도 "B200"도 등장하지 않습니다.** 애플은 "NVIDIA GPUs"까지만 씁니다.

초고 46줄 "다만 애플의 공식 문서는 가속기를 '엔비디아 GPU'라고만 적었고 Blackwell이나 B200 같은 모델명은 쓰지 않았으니, 그 부분은 보도로 남겨 두는 것이 맞습니다." → **팩트체커 기준으로 모범적인 처리**입니다. 출처의 침묵 지점을 독자에게 그대로 넘겼습니다. 수정 불필요.

## 2-8. 최종 집계 문장 (요청 8) — ⚠ **1건 부정확 + 본문 내부 모순**

초고 56줄: "애플은 이 중 하드웨어와 증명에 관한 칸은 이례적으로 자세히 공개했고, **요청 단위의 처리 위치와 보존 기간, 감사 로그**에 관한 칸은 비워 두었습니다."

| 칸 | 애플의 공개 여부 | 초고 집계 | 판정 |
|---|---|---|---|
| 추론이 어느 사업자 하드웨어에서 도는지 | 공개 (구글 클라우드, NVIDIA GPU) | "공개" | ✓ |
| 기밀 컴퓨팅 켜짐 + 증명 확인 경로 | 공개 (NVIDIA CC, 원장, 바이너리, 바운티 노드) | "공개" | ✓ |
| 나라별 기능 차이 | 공개 (각주) | 미언급 | ⚠ 경미 (집계에서 빠짐) |
| 요청 단위 처리 위치 표시 | 미공개 | "비어 있음" | ✓ |
| 감사 로그 | 미공개 | "비어 있음" | ✓ |
| **입력·출력 보존 기간** | **애플이 답한 항목** | **"비어 있음"** | **✗ 부정확** |

**보존 기간은 애플이 이미 답했습니다.** 2024년 PCC 문서의 stateless computation 항목 원문:

> "Personal user data must be used exclusively for fulfilling the user's request" / "must not be retained, including via logging or for debugging, after the response is returned."
> "User data stays on the PCC nodes that are processing the request only until the response is returned. PCC deletes the user's data after fulfilling the request."

그리고 6/8 문서는 구글 클라우드로 확장된 PCC도 **동일한 핵심 보안 모델(stateless computation, no privileged runtime access, verifiable transparency)을 유지**한다고 적었습니다.

→ 애플의 답은 "며칠"이 아니라 **"응답 반환 후 삭제, 로깅·디버깅 목적 보존조차 금지"**입니다. 즉 비어 있는 칸이 아니라 **채워진 칸**입니다.

**더 문제는 본문 내부 모순입니다.** 초고 22줄이 애플 문장 "**개인 데이터는 저장되지 않으며**"를 직접 인용한 뒤, 54줄에서 "입력과 출력이 며칠 보존되는지도 ... 아직 문장으로 나와 있지 않아요"라고 적습니다. 주의 깊은 독자에게 바로 걸립니다.

**수정 권고 (택일):**
- (a) 54줄·56줄에서 **보존 기간을 공백 목록에서 빼고**, 공백은 '요청 단위 처리 위치 표시'와 '감사 로그' 둘로 좁힌다. 가장 간단하고 안전합니다.
- (b) 보존 기간을 남기되 **성격을 바꿔** 쓴다 — "보존에 대해서는 애플의 답이 있습니다. 응답을 돌려준 뒤 삭제하며 로깅조차 남기지 않는다는 것이지요. 다만 그 약속이 내 요청 하나에 대해 지켜졌는지를 사용자가 확인할 경로는 원장과 바이너리 쪽이지, 내 화면 쪽이 아닙니다." → 글의 '증명으로 옮겨갔다'는 축과 오히려 더 잘 맞습니다.

**학습 제외 조건을 판정 대상에서 뺀 것은 ✓ 타당합니다.** 근거: 2024년 PCC 문서는 학습 사용 여부를 **직접 언급하지 않으며**, "저장되지 않는다 / 응답 후 삭제한다"가 학습 활용을 사실상 배제하지만 **계약 문구로 명시된 것은 아닙니다.** 즉 '공개했다'도 '비워 뒀다'도 단정하기 어려운 항목이므로, 체크리스트에는 물어야 할 칸으로 올려 두고 애플에 대한 판정에서는 빼는 처리가 출처 상황에 가장 충실합니다. 이 회피는 유지하시기 바랍니다.

## 2-9. 그 외 남은 단정·수치 (요청 9)

### 새로 도입된 사실 — 전부 ✓ 확인

| 초고 | 검증 결과 | 출처 |
|---|---|---|
| 12줄 "새 Siri는 영어 베타로만 시작" | ✓ "Siri AI launches today in English beta" | 9월 보도자료 |
| 12줄 "한국어는 다음 달에 ... 프랑스어, 일본어, 포르투갈어, 스페인어도 같은 시기" | ✓ "French, Japanese, Korean, Portuguese, and Spanish next month" — 5개 언어 목록·시점 정확 | 9월 보도자료 |
| 14줄 "iOS 27 9월 14일 공개 배포" | ✓ | 9to5Mac / 애플 |
| 14줄 "Apple Intelligence는 iPhone 16 이후 기종과 iPhone 15 Pro·15 Pro Max에서 동작" | ✓ 애플 각주와 정확히 일치 | 9월 보도자료 |
| 26줄 "애플 실리콘" (종전 "맥에 쓰는 계열의 칩") | ✓ 애플 용어로 교정됨 | PCC 2024 문서 |
| 32줄 "6월 8일" 애플 보안 연구 블로그 「Expanding Private Cloud Compute」 | ✓ 날짜·제목·매체 정확 | security.apple.com |
| 46줄 "6월 4일 디 인포메이션 ... 자사 PCC에 올려 돌려 보았지만 너무 느리게 동작했다" | ✓ | MacRumors / AppleInsider 2026-06-04 |
| 50줄 1조 2,000억 / 1,500억 / 여덟 배 / 연 10억 달러(양사 미확인) | ✓ 전부 일치 | Bloomberg 2025-11-05 |
| 50줄 "당초 봄의 iOS 26.4 ... 9월로 밀린" | ✓ | MacRumors 2025-11-05 |
| 54줄 "'가장 부담이 큰 작업'이라는 질적 구분만" | ✓ "For the most demanding tasks, including agentic tool-use and complex reasoning" | 6/8 애플 문서 |

### 남은 완화 권고

1. **[경미] 46줄 "이 결정의 이유는 나흘 앞선 6월 4일에 먼저 보도됐습니다."** — 보도된 배경을 애플의 확정 동기로 읽히게 합니다. 애플 6/8 문서는 확장 사유를 지연 시간 문제가 아니라 "가장 부담이 큰 작업" 수요로 설명하며, 자사 PCC가 느렸다는 진술은 어디에도 없습니다. → "이 결정의 배경으로 보도된 내용은 나흘 앞서 나왔습니다" 정도로 완화 권고.
2. **[경미] 50줄 "그런 회사도 빌려 온 모델을 자기 서버만으로는 감당하지 못했다는 것이지요."** — 근거는 디 인포메이션 보도 하나이고 애플은 확인한 바 없습니다. 46줄에서 귀속이 먼저 나오므로 치명적이지는 않으나, "감당하지 못했다"는 단정형입니다. → "감당하지 못했다는 것이 보도된 사정입니다" 류로 한 글자만 완화하면 안전합니다.
3. **[경미] 56줄 집계에 '나라별 기능 차이'가 빠졌습니다.** 체크리스트 7개 칸 중 이 칸도 애플이 각주로 공개한 항목이고 본문 14줄이 이미 다뤘으니, "하드웨어와 증명, 그리고 나라별 가용성에 관한 칸은 공개했고"로 묶으면 집계가 완결됩니다.
4. **[선택] 40줄 이미지 캡션** "애플은 6월에 PCC를 이런 제3자 데이터센터까지 확장했다고 밝혔습니다" — 애플은 구글 클라우드의 **어느 리전·어느 시설**인지 밝히지 않았습니다. "이런"으로 일반화해 특정 시설을 PCC 노드 소재지로 단정하지 않은 처리는 ✓ 적절합니다. 다만 캡션 첫머리에 사진이 카운실블러프스 시설임이 명시돼 있어 오해 여지가 조금 남으니, "구글 클라우드의 시설 중 어디인지는 공개되지 않았습니다"를 캡션에 반 줄 더하면 완전해집니다.
5. **[선택 · 보강]** 2-6의 1월 공동성명 마지막 문장 인용 추가 (논지 강화).
6. **[확인 필요 — 검증 범위 외]** 커버 이미지 파일 및 본문 이미지 파일의 실제 존재, `_workspace/image-credits-2026.md` 기록과 피사체·출처 일치. `coverImage: ""`이므로 파일명 매칭 규칙이 정상 동작하는지 빌드 단계에서 확인하십시오.

## 2-10. 종합 판정 (2차)

- [ ] 발행 가능
- [x] **수정 후 발행 가능**
- [ ] 발행 중단

**사유:** 1차의 치명적 오류 7건은 전량 제거됐고, 애플 인용 5건·기술 목록 3항목·투명성 장치 3종·EU/중국 범위·1월 공동성명·언어 로드맵·기종 요건까지 **새로 도입된 사실은 예외 없이 1차 출처로 확인**됐습니다. 특히 Blackwell·B200을 보도에 귀속하고 애플 문서의 침묵 지점을 독자에게 그대로 넘긴 46줄 처리는 모범적입니다.

**발행 전 반드시 고칠 것: 2-8의 보존 기간 1건.** 본문이 인용한 애플 문장("저장되지 않으며")과 결론의 집계("보존 기간은 비어 있다")가 서로 충돌하므로, (a) 공백 목록에서 빼거나 (b) 성격을 바꿔 쓰는 방식 중 하나를 적용해야 합니다. 이 한 곳을 고치면 나머지 경미 3건은 발행을 막지 않습니다.

## 2-11. 팩트 카드 2차 개정판 검토

- 6/8 애플 문서를 "★ 중심 사실"로 올린 재구성 ✓ 적절. 인용 4건 모두 원문 대조 일치.
- 13줄(EU/중국 분리), 34줄(애플 실리콘 표기), 46줄(Blackwell 귀속), 40줄(1월 공동성명) — 1차 리포트 지적이 전부 반영됐습니다.
- ⚠ **카드에 추가할 것 1건:** "보존 기간"을 공백으로 적은 53~56줄. **PCC의 stateless computation(응답 후 삭제, 로깅 보존 금지)이 이미 답한 항목**이므로 "남은 진짜 공백"에서 2번을 빼고, 대신 "보존에 대한 애플의 답은 '보존하지 않는다'이며, 개별 요청 단위의 확인 경로가 없다는 점이 공백"으로 고쳐 두면 다음 세션에서 같은 오류가 재발하지 않습니다.
- ⚠ **카드 40줄 출처 보강:** 1월 공동성명의 "Gemini models and cloud technology" 문구는 TechCrunch·Marketing Dive 본문에는 인용되지 않았습니다(두 매체는 두 번째 문장만 인용). 1차 출처 https://blog.google/company-news/inside-google/company-announcements/joint-statement-google-apple/ 로 교체 권고.

## 2-12. 2차에서 새로 확정한 재활용 팩트

| 팩트 | 판정 | 1차 출처 |
|---|---|---|
| 1월 공동성명 전문에 "Gemini models and cloud technology" + "Apple Intelligence will continue to run on Apple devices and Private Cloud Compute" | ✓ | blog.google/.../joint-statement-google-apple/ |
| 6/8 문서 4대 인용(제3자 데이터센터 최초 확장 / 호스팅 위치 무관 완전 통제 / 기술 3종 / 투명성 3종) | ✓ | security.apple.com/blog/expanding-pcc/ |
| 6/8 문서에 Blackwell·B200 모델명 없음 | ✓ | 동일 |
| Siri AI 영어 베타 출시, 한국어 등 5개 언어 10월 | ✓ | apple.com/newsroom/2026/09/siri-ai-...-is-here/ |
| Apple Intelligence 기종: iPhone 16 이후 + 15 Pro/Pro Max. Siri AI 최고급 온디바이스 기능(표현형 음성·고급 구술)은 iPhone 18 Pro·18 Pro Max·17 Pro·17 Pro Max·Air·Duo 한정(12GB RAM) | ✓ | 동일 / 9to5Mac 2026-09-14 |
| PCC stateless computation: 응답 반환 후 삭제, 로깅·디버깅 보존 금지 | ✓ | security.apple.com/blog/private-cloud-compute/ (2024-06-10) |
| EU 지연 사유는 DMA (애플 별도 보도자료) | ✓ | apple.com/newsroom/2026/06/due-to-dma-siri-ai-delayed-in-eu-... |
