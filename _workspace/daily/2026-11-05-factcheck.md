# Fact Check Report: git-reference-lock-agent-scale-push

검증일: 2026-11-04(UTC) / 발행 예정 2026-11-05 09:00 KST
초고: `_posts/2026-11-05-git-reference-lock-agent-scale-push.md`
팩트 카드: `_workspace/daily/2026-11-05-brief.md`

**결론 먼저: 치명적 오류 0건.** 수치·인용·날짜는 전부 1차 출처(깃허브 엔지니어링 블로그 2편, Octoverse 2026) 또는 복수 2차 출처(오픈AI Pando·Pierre 인수)로 확인됐다. 다만 **사실관계를 가정법으로 바꿔 버린 Azure 문장 1건**과 **"같은 달" 표현**은 고쳐야 한다.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-05 (KST)
- 본문에 "어제/오늘/지난주" 같은 상대 시점 표현 없음. 모든 사건을 날짜로 명시 → 시점 붕괴 위험 낮음.
- **사후 시점 표현("훗날 드러나듯", "결국", "돌이켜보면") 없음.** ✓
- 미래 사건·발행일 이후 사건 인용 **없음.** ✓

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 깃허브 "Building Git infrastructure for agent-scale development"(Brian Celenza) | 2026-10-06 게시, 2026-10-26 갱신 | 이전 ✓ | 유지 |
| 깃허브 "The bridge to agent-scale Git infrastructure"(Eleanor White, Victoria Dye) | 2026-10-21 | 이전 ✓ | 유지 |
| 오픈AI Pando 공개("Scaling Git at OpenAI") | 2026-11-02 | 이전 ✓ | 유지 |
| 오픈AI, Pierre Computer 인수 **발표** | 2026-11-04 | **전날** ✓ | 유지 (과거형 적절) |
| Octoverse 2026 (수치 출처, 본문 미언급) | 2026-10-28 | 이전 ✓ | 유지 |

- **"인수하겠다고 발표"(L12) 표기 적절.** 거래는 **종료 전**이고 금액 미공개이며 규제 승인이 남아 있다. 본문은 "인수했다"가 아니라 "인수하겠다고 발표했어요"로 썼다 → **완료 오인 없음.** ✓
- **용어 시점성:** Pando·Code Storage·Pierre Computer 모두 발행일 시점에 공개된 이름. ✓

### ⚠ A-1 [경미·수정 권고] "같은 달"은 사실과 다름 — L40

> L40: "두 회사가 **같은 달에** 같은 결론에 닿은 게 저는 우연 같지 않습니다."

깃허브 글은 **10월**(6일·21일), 오픈AI Pando는 **11월** 2일이다. 달이 다르다. L12와 excerpt는 이미 "한 달 사이"로 정확하게 썼으므로 L40만 어긋난다.
→ **"한 달 사이에 같은 결론에 닿은 게"** 로 교체 권고. (L44의 서술과도 일관됨)

### ⚠ A-2 [참고] "한 달 사이에 세 건"(L12)

깃허브 글 2편 + Pando + Pierre = 사건으로 세면 4건, 묶으면 3건(깃허브 재설계 / Pando / Pierre). 바로 앞 문장이 글 "두 편"을 명시했기 때문에 독자가 "세 건"을 세다 걸릴 수 있다. 사실 오류는 아니나 **"한 달 사이에 네 번인데"** 또는 **"한 달 사이에 벌어진 일인데"** 가 더 깔끔. 선택 사항.

---

## B. 사실 검증

### B-1. 깃허브 엔지니어링 블로그 ① (2026-10-06, Brian Celenza)

| # | 본문 주장 | 상태 | 원문 | 조치 |
|---|---|---|---|---|
| 1 | L12 "10월 6일" 게시 | ✓ 확인 | October 6, 2026 (updated October 26, 2026), Brian Celenza(@bcelenza) | - |
| 2 | L16 월간 푸시 1년 만에 4.9배, 6억 9천만 → 33억 5천만 | ✓ 확인 | "Pushes grew 4.9x year over year, from 0.69 billion to 3.35 billion per month." | - |
| 3 | L16 9월 커밋 73억 8천만, 전년의 5배 초과 | ✓ 확인 | 7.38 billion commits in September, "more than five times as many as a year earlier" | - |
| 4 | L24 저장소 하나당 기본 파일서버 5대 | ✓ 확인 | "five by default" fileservers per repository (①) / "most repositories have five replicas" (②) | - |
| 5 | L40 수천 에이전트가 "아키텍처의 한 지점으로 수렴하는 지속적인 쓰기 부하" | ✓ 확인 | "a sustained write rate that converges on a single point in our architecture" | - |
| 6 | L42 "머지는 하나의 레퍼런스에서 경합한다" | ✓ 확인 | "Merges contend on one reference" (글의 소제목) | - |
| 7 | L44 "다른 글에 나오는 35배도 내부 시험 수치" | ✓ 확인 | "in internal benchmarks ... up to 35 times higher write throughput" — 프로덕션 아님 | - |

출처: https://github.blog/engineering/architecture-optimization/building-git-infrastructure-for-agent-scale-development/

### B-2. 깃허브 엔지니어링 블로그 ② (2026-10-21, Eleanor White·Victoria Dye)

| # | 본문 주장 | 상태 | 원문 | 조치 |
|---|---|---|---|---|
| 8 | L12 "10월 21일" 게시, 저자 2인 | ✓ 확인 | October 21, 2026 — Eleanor White, Victoria Dye | - |
| 9 | L24 "살아 있는 복제본들의 응답을 기다려야 하고, 가장 느린 한 대가 전체 속도를 정한다" | ✓ 확인 | "it waits for every healthy replica to respond (up to a timeout) before moving on" + 느린 복제본이 모든 쓰기를 지연 | (아래 B-2a 미세 보정 참고) |
| 10 | L32 인용문 번역 | ✓ 확인 (번역 미세 보정 권고) | "Holding a repository-wide lock for the entire reference update, round trips included, turns the quorum into a single, unordered request queue with one write in flight at a time." | 아래 B-2b |
| 11 | L32 약 1,600킬로미터 / 왕복 1회 25밀리초 / 쓰기 하나에 왕복 여러 번 | ✓ 수치 확인, **✗ 서술 방식 오류** | "it's about 1,000 miles from our data centers, making each network round trip around 25ms" + "a write requires multiple round trips" | 아래 B-2c (**수정 권고**) |
| 12 | L36 깃의 일관성 규칙이 원래 레퍼런스 단위 | ✓ 확인 | "Git's consistency requirements apply to each reference individually." | - |
| 13 | L36 쿼럼 범위를 저장소 전체 → 개별 레퍼런스로 | ✓ 확인 | "we're changing the scope of the quorum from the whole repository to individual references." | - |
| 14 | L36 서로 다른 레퍼런스 쓰기 처리량 **내부 시험에서** 3~4배 | ✓ 확인 | "In internal testing with realistic traffic, writes to different references consistently saw 3–4x higher throughput at lower latency." | - |
| 15 | L44 "시험 조건과 하드웨어도 밝히지 않았다" | ✓ 확인 | 글에 방법론·하드웨어 기술 없음 | - |

출처: https://github.blog/engineering/architecture-optimization/the-bridge-to-agent-scale-git-infrastructure/

#### B-2a [경미] 쿼럼의 커밋 조건이 한 단계 생략됨 — L24

원문은 **"다수(majority)만 모이면 쓰기는 커밋되지만, 넘어가기 전에 살아 있는 모든 복제본의 응답을 (타임아웃까지) 기다린다"** 이다. 본문은 "쓰기 하나가 **끝나려면** 살아 있는 복제본들의 응답을 기다려야 하고"로 썼는데, "끝나려면"이 원문의 `before moving on`에 대응하므로 **틀리지 않다**. 다만 "과반이면 커밋은 되는데도 전부를 기다린다"가 이 글의 아이러니라 한 어절 넣으면 더 정확해진다.
→ 선택: "과반만 모여도 커밋은 되지만, 그래도 살아 있는 복제본 전부의 응답을 기다리고"

#### B-2b [경미] 인용문 번역 — 뜻 왜곡 없음, 다만 "single"이 증발함 — L32

> 본문: "…쿼럼은 **한 번에 하나씩만 처리하는 정렬되지 않은 요청 큐**가 된다."
> 원문: "…turns the quorum into **a single, unordered request queue with one write in flight at a time**."

- `round trips included` → "네트워크 왕복까지 포함해서" ✓ 정확
- `for the entire reference update` → "레퍼런스 업데이트가 끝날 때까지" ✓ 허용 범위
- `unordered` → "정렬되지 않은" ✓
- ⚠ `a single ... queue`(모든 쓰기가 **하나의 큐**로 합쳐진다)와 `with one write in flight at a time`(동시에 진행 중인 쓰기는 **하나**)은 서로 다른 두 정보인데, 번역이 둘을 "한 번에 하나씩만 처리하는"으로 합쳐 버렸다. **뜻이 뒤집히지는 않았고 핵심(직렬화)은 보존**됐지만, "그대로 옮기면"이라고 선언한 직접 인용이므로 정확도를 올리는 편이 낫다.
→ 권고: "쿼럼은 **한 번에 쓰기 하나만 진행되는, 정렬되지 않은 단일 요청 큐**가 된다."

#### B-2c [수정 권고 — 이 리포트에서 제일 중요] 이미 벌어진 일을 가정법으로 썼다 — L32

> 본문: "**복제본 하나를 Azure 쪽 지역으로 옮기면** 데이터센터에서 1,600킬로미터쯤 떨어지니 왕복 한 번에 25밀리초가 걸리고…"

원문 사실관계:
- 깃허브 저장소는 이미 **"두 곳에 동시에 살고 있다"**(자사 데이터센터 + Azure).
- **"Today, most repositories have two of their five replicas in Azure."** — 다섯 중 **두 대**가 **이미** Azure에 있고, 깃 트래픽의 약 절반을 Azure가 받는다.
- 대상 Azure 지역이 데이터센터에서 약 1,000마일(≈1,609km) → 왕복 25ms.

즉 **가정("옮기면")이 아니라 현재 상태**이고, **한 대가 아니라 다섯 중 두 대**다. 수치(1,600km·25ms)는 정확하지만 조건절이 사실을 약화시킨다. 25ms가 이미 모든 쓰기에 실리고 있다는 점이 논지("그래서 잠금 범위가 치명적")를 떠받치는 근거이므로 가정법으로 쓰면 글의 힘도 같이 빠진다.
→ 권고: "지금은 **다섯 중 두 대가 Azure 지역에 올라가 있는데**, 데이터센터에서 1,600킬로미터쯤 떨어져 있어 왕복 한 번에 25밀리초가 걸립니다. 쓰기 하나에 왕복은 여러 번 필요하고요."

### B-3. Octoverse 2026 (2026-10-28)

| # | 본문 주장 | 상태 | 원문 | 조치 |
|---|---|---|---|---|
| 16 | L16 9월 에이전트 시작 PR 1억 1천만 건 | ✓ 확인 | "That is 110 million in September alone, about 6x March's volume." | - |
| 17 | L16 전체 PR의 40% 초과 / 3월 17% | ✓ 확인 | "By September 2026, more than 40% of pull requests on GitHub started with an agent's first draft, up from 17% in March." | - |
| 18 | L42 Actions 연 454억 건, 초당 1,440건 | ✓ 확인 | 차트 "45.4B" / "GitHub Actions ran a job 1,440 times every second this year." | - |

출처: https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/

> 참고: 9월 **커밋 73.8억 건**은 Octoverse가 아니라 엔지니어링 블로그 ①의 수치다(Octoverse는 연간 343억 건만 제시). 본문이 출처를 명시하지 않아 문제는 없지만, 나중에 누가 Octoverse에서 찾으면 못 찾는다. 팩트 카드에는 이미 바르게 분리돼 있음.

### B-4. 오픈AI Pando (2026-11-02)

openai.com은 403으로 직접 페치 불가 → **2차 출처 3곳 이상 교차**(nesbitt.io 소스컨트롤 주간정리 11-04, MarkTechPost 11-02, 복수 기술 매체 요약)로 확인.

| # | 본문 주장 | 상태 | 근거 | 조치 |
|---|---|---|---|---|
| 19 | L12 11월 2일 공개, 모노레포용 깃 백엔드 | ✓ 확인 | "a Rust backend for git repositories that now serves all development in OpenAI's monorepo", 11-02 공개 | (표현 보정 B-4a) |
| 20 | L38 변경 불가능한 팩파일을 블롭 스토리지에 | ✓ 확인 | "stored as an immutable packfile in blob storage" | - |
| 21 | L38 브랜치 갱신은 메타데이터 저장소에 ref 버전 기록 | ✓ 확인 | 2차 출처 다수 일치 | - |
| 22 | L38 같은 레퍼런스를 겨냥한 푸시끼리만 충돌 | ✓ 확인 | "pushes contend only when they target the same ref" | - |
| 23 | L38 엄격한 전역 순서 포기 → 인과적 일관성 | ✓ 확인 | "The trade-off is causal consistency" | - |
| 24 | L38 중앙값 푸시 지연 약 80% 감소 | ✓ 확인 (자사 측정) | "median push latency ... down by nearly 80%" | 본문 L44에서 이미 자사 측정으로 못 박음 ✓ |
| 25 | L38 하루 1페타바이트에 가까운 깃 데이터 | ✓ 확인 | "nearly a petabyte of git data served a day" | - |
| 26 | L38 여러 브랜치를 함께 읽으면 시점이 다를 수 있음 | ✓ 확인 | 복수 출처가 동일 서술 | - |
| 27 | L44 판도는 내부 전용 | ✓ 확인 | "the backend stays internal for now" (업스트림 반영분은 packfile-uri 수정 등 일부) | - |

#### B-4a [경미] "공개했고"의 중의성 — L12

판도는 **내부 전용이고 코드가 공개되지 않았다.** "판도(Pando)를 공개했고"는 "오픈소스로 풀었다"로 읽힐 소지가 있다(오픈AI가 실제로 공개 깃 포크를 운영 중이라 더 헷갈린다). L44에서 "내부 전용"을 밝히긴 하지만 32줄 뒤다.
→ 권고: "판도(Pando)를 **소개하는 글을 올렸고**" 또는 "판도(Pando)를 **공개 설명했고**".

#### ✓ 본문에 들어가지 않은 것 확인

팩트 카드가 "본문에 쓰지 않음"으로 표시한 **단일 출처 수치 1,378% / 2,442%(master 커밋 증가율)**는 본문에 **없다.** ✓
(일부 매체가 "2,442% 커밋 급증", "푸시 5배 빨라졌다" 같은 제목을 달고 있는데 본문은 둘 다 쓰지 않았다. 잘 피했다.)

### B-5. 오픈AI, Pierre Computer 인수 발표 (2026-11-04)

| # | 본문 주장 | 상태 | 근거 | 조치 |
|---|---|---|---|---|
| 28 | L12 11월 4일 발표 | ✓ 확인 | 2026-11-04 발표, Axios 최초 보도 후 복수 매체 | - |
| 29 | L12 "깃 기반 저장 서비스를 만드는 피에르 컴퓨터(Pierre Computer)" | ✓ 확인 | Pierre Computer Company의 Code Storage — 깃 호스팅/프로그래머블 스토리지 계층, 고객사 Lovable·Bolt·Poke 등 (code.storage 자체 페이지로 확인) | - |
| 30 | L12 "인수하겠다고 발표" (= 미완료) | ✓ 확인 | **거래 종료 전**, 규제 승인 필요, **금액 미공개** | - |

- 회사명 철자 ✓ Pierre Computer Company / 제품명 ✓ Code Storage.
- 본문은 Axios식 "깃허브 대체" 해석을 **쓰지 않았다** — 팩트 카드의 주의사항을 지켰다. ✓

### B-6. 본문의 핵심 주장 (검증 항목 13)

> "깃의 일관성 규칙이 원래 레퍼런스 단위이고, 병목은 깃 포맷이 아니라 호스팅 백엔드의 합의 범위였다"

**✓ 출처와 어긋나지 않음.** 깃허브 ②가 직접 `Git's consistency requirements apply to each reference individually` → 그래서 쿼럼 범위를 레퍼런스로 내릴 수 있다고 말하고, 오픈AI도 ref 단위 충돌로 같은 결론에 닿았다. 두 회사 모두 **깃 프로토콜 호환은 유지**(오픈AI는 엔지니어·Codex가 평소대로 `git push`/`git fetch`를 쓴다고 밝힘)하면서 백엔드만 바꿨다는 점이 이 주장을 뒷받침한다.

"두 회사가 독립적으로 같은 결론에 닿았다"는 **본문이 '가정'으로 명시**(L40 "예측은 아니고 가정인데요")하고 있어 과장 아님. ✓

---

## C. 자사 측정치 단정 여부 (검증 항목 9·10)

**통과.** 오히려 모범적이다.

- L36 "**내부 시험에서** 처리량이 3~4배 올랐다고 합니다" — 출처 표기 ✓
- L38 Pando 수치 뒤에 "**대가도 분명합니다**" + 인과적 일관성의 비용 서술 ✓
- L44가 한 문단을 통째로 할애해 ①3~4배·35배 모두 내부 시험, ②프로덕션 결과 미공개, ③시험 조건·하드웨어 미공개, ④80%는 자사 모노레포 한 곳의 자체 측정, ⑤판도는 내부 전용이라 외부 재현 불가 — **다섯 가지를 전부 밝혔다.** 스타일 가이드의 '출처가 침묵한 지점' 규율에 부합.

프로덕션 실적처럼 단정한 문장 **없음.** ✓

---

## D. 기술 서술 정확성 (팩트는 아니나 전문 독자가 걸고넘어질 지점)

### D-1 [경미] "한쪽이 다른 쪽을 덮어쓰게 되니까요" — L24

깃의 레퍼런스 업데이트는 **compare-and-swap**이라 두 번째 푸시는 덮어쓰는 게 아니라 **거부**된다(non-fast-forward). "합의가 필요한 이유"를 설명하는 자리라 결과적으로 틀린 말은 아니지만(합의가 없으면 덮어쓰기가 난다), 깃을 아는 독자에게는 어색하게 읽힌다.
→ 권고: "두 사람이 같은 브랜치에 동시에 밀면 **한쪽은 거부돼야 하니까요**" 또는 "**순서를 정하지 않으면 한쪽이 다른 쪽을 덮어쓰게 되니까요**".

### D-2 [경미] 커밋 배수와 CI 트리거의 짝이 어긋남 — L42

> "푸시마다 전체 파이프라인이 도는 설정이면 **커밋이 다섯 배**로 늘 때 청구서도 같이 다섯 배가 됩니다."

같은 문장 안에서 트리거 단위는 **푸시**인데 배수는 **커밋**(9월 YoY 5배 초과)을 쓴다. 푸시는 **4.9배**(L16에서 이미 제시)라 수치도 마침 가까우니 단위를 맞추는 게 깔끔하다.
→ 권고: "커밋이" → "**푸시가**" (혹은 "다섯 배" → "**다섯 배 가까이**").

---

## E. 이미지·크레딧 검증

Wikimedia Commons API로 두 파일 모두 **실존·저작자·라이선스 확인 완료.**

| 위치 | 파일 | 확인 결과 |
|---|---|---|
| 커버 | `File:CERN Server 03.jpg` (pageid 6212692) | Artist **Florian Hirzinger - www.fh-ap.com**, **CC BY-SA 3.0**, 설명 "Server room in CERN (Switzerland)" ✓ |
| 본문 중간 | `File:Wikimedia Foundation Servers-8055 35.jpg` (pageid 20348454) | Artist **Victor Grigas (User:Victorgrigas)**, **CC BY-SA 3.0**, 설명 "Wikimedia Foundation Servers" ✓ |

- L50 하단 커버 크레딧 "CERN 전산센터의 서버 랙 — Wikimedia Commons, Florian Hirzinger" ✓ (2026-09-04 규칙 준수)
- L28 본문 이미지 인라인 출처 "Wikimedia Commons, Victor Grigas" ✓, 하단 중복 표기 없음 ✓
- `_workspace/image-credits-2026.md` 169~170행 기록 일치 ✓

### E-1 [경미·확인 요청] 프런트매터 `coverImage`가 빈 문자열 — L8

크레딧 파일에는 `covers/git-reference-lock-agent-scale-push.jpg`로 등록돼 있는데 프런트매터는 `coverImage: ""`다. 레포 관례상 **빈 값 + 슬러그 파일명 매칭**으로 동작하도록 백필한 전례가 있으니 의도한 것일 수 있다. 다만 **파일이 실제로 `public/images/covers/`에 있는지는 내 도구로 확인하지 못했다**(이 세션에 셸이 없어 바이너리 존재 확인 불가).
→ 발행 전에 커버·인라인 두 파일의 실제 존재를 직접 확인할 것. 없으면 hero 폴백으로 떨어지는데, 그 경우 **L50 커버 크레딧 줄은 빼야 한다**(폴백에는 크레딧을 달지 않는 것이 규칙).

### E-2 [선택] 인라인 캡션이 피사체를 특정하지 않음 — L26~28

사진은 **위키미디어 재단 서버**인데 캡션은 "같은 저장소의 복제본은 이렇게…"로 설명해, 문맥상 깃허브 장비로 읽힐 여지가 아주 약간 있다. 출처에 Victor Grigas/Commons가 붙어 있어 허위 표시는 아니다. 신경 쓰인다면 "위키미디어 재단 데이터센터의 서버들" 한 마디를 캡션에 넣으면 깔끔히 해소된다.

---

## F. 수정 권고 (우선순위 순)

**치명적: 없음.**

1. **[중요] L32** — "복제본 하나를 Azure 쪽 지역으로 옮기면" → 이미 **다섯 중 두 대가 Azure에 올라가 있는** 현재 상태다. 가정법 제거 + 대수 수정. (B-2c)
2. **[중요] L40** — "같은 달에" → **"한 달 사이에"** (깃허브 10월 / 오픈AI 11월). (A-1)
3. **[경미] L32** — 직접 인용 번역에서 `a single ... queue`가 누락됨 → "한 번에 쓰기 하나만 진행되는, 정렬되지 않은 단일 요청 큐가 된다". (B-2b)
4. **[경미] L12** — "판도(Pando)를 공개했고" → 내부 전용이므로 "소개하는 글을 올렸고" 등으로 중의성 제거. (B-4a)
5. **[경미] L42** — "커밋이 다섯 배로 늘 때" → 트리거 단위에 맞춰 "**푸시가**". (D-2)
6. **[경미] L24** — "한쪽이 다른 쪽을 덮어쓰게 되니까요" → 깃은 거부(CAS)한다. 표현 보정. (D-1)
7. **[경미] L24** — 쿼럼은 과반이면 커밋되지만 전부를 기다린다는 한 단계 추가(선택). (B-2a)
8. **[확인] L8** — `coverImage: ""` 상태에서 커버 파일 실존 여부 확인. 없으면 L50 크레딧 줄 삭제. (E-1)
9. **[선택] L12** — "한 달 사이에 세 건인데" 계수 모호. (A-2)
10. **[선택] L26~28** — 인라인 캡션에 피사체(위키미디어 재단 서버) 한 마디. (E-2)

---

## G. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — 치명적 오류 없음. 1·2번(Azure 가정법, "같은 달")만 고치면 발행에 지장 없음. 3~7번은 정확도·가독성 보정.
- [ ] 발행 보류

**요약:** 수치 18건·인용 3건·날짜 5건 전수 교차 확인 완료, **자릿수 오류 0, 존재하지 않는 발언 0, 시점 붕괴 0.** 단일 출처 과장 수치(1,378%/2,442%, "푸시 5배")는 본문에 섞여 들지 않았고, 내부 벤치마크를 프로덕션으로 포장한 곳도 없다. 지적 사항은 전부 표현·정밀도 층위다.

---

## H. 후속 메모 (발행과 무관)

`_style/ai-timeline.md`에 **2026-10-06/10-21 깃허브 깃 인프라 2부작, 10-28 Octoverse 2026, 11-02 오픈AI Pando, 11-04 Pierre Computer 인수 발표**가 아직 없다. 발행 후 타임라인에 추가해 두면 이후 글의 시점 검증에 쓰인다.

## 참고 출처

- https://github.blog/engineering/architecture-optimization/building-git-infrastructure-for-agent-scale-development/
- https://github.blog/engineering/architecture-optimization/the-bridge-to-agent-scale-git-infrastructure/
- https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/
- https://nesbitt.io/2026/11/04/this-week-in-source-control.html
- https://www.marktechpost.com/2026/11/02/openai-pando-git-backend-monorepo/ (403 — 검색 요약으로 확인)
- https://openai.com/index/scaling-git-at-openai/ (403 — 2차 출처로 교차)
- https://openai.com/index/openai-to-acquire-pierre/ (403 — unite.ai·securities.io·startuphub.ai 등 복수 2차 출처로 교차)
- https://code.storage/ (Pierre 자사 페이지 — Code Storage 제품 설명)
- Wikimedia Commons API: File:CERN Server 03.jpg, File:Wikimedia Foundation Servers-8055 35.jpg
