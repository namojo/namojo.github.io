# Fact Check Report: dragos-canary-tokens-ai-supply-chain

- 검증일: 2026-11-21
- 초고: `_posts/2026-11-22-dragos-canary-tokens-ai-supply-chain.md`
- 1차 출처: https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens (HD Moore, Chief Research Officer, Dragos / 2026-11-19 08:00)
- 2차 출처: https://cryptobriefing.com/hd-moore-ai-supply-chain-data-leaks/ (2026-11-20), Dragos 리더십 페이지, runZero 인수 보도(2026-09-22)

## A. 시점 일관성

- **발행일:** 2026-11-22
- 본문에 등장하는 시점 표현 전수:

| 인용된 사건·시점 | 실제 | 발행일 대비 | 판정 |
|---|---|---|---|
| 무어 글 게시 "11월 19일" | 2026-11-19 08:00 (Dragos 블로그) | 이전 ✓ | 유지 |
| 프롬프트 발송 "7월부터 11월까지" | "Over a five-month period from July through November 2026" | 이전 ✓ | 유지 |
| 최대 침해 "10월 말" | "all within a few short windows in late October" | 이전 ✓ | 유지 |
| 중국 연구소 스크래핑 "7월부터 10월 사이" | "from July through October" | 이전 ✓ | 유지 |
| "24일 뒤" 메신저 사건 | 원문 "Twenty-four days after..." | 이전 ✓ | 유지 |

- **사후 시점 표현:** "훗날", "결국", "돌이켜보면" 등 없음. ✓
- **용어 시점성:** 카나리아 토큰·ZDR·라우터·리셀러 마켓플레이스 모두 발행일 기준 통용 용어. ✓
- 시점 규율 위반 **없음**.

## B. 사실 검증

| # | 초고의 주장 | 상태 | 근거 |
|---|---|---|---|
| 1 | "드래고스(Dragos)의 최고연구책임자 HD 무어" | ✓ 확인 | 원문 "HD Moore, Chief Research Officer, will be regularly sharing work from the research team he leads at Dragos." + Dragos 리더십 페이지(전 runZero CEO·공동창업자, Metasploit 제작자). Dragos가 2026-09-22 runZero·NetRise 인수 → 소속 이동 경위도 확인됨. **runZero/Rapid7로 잘못 쓸 위험은 없음** |
| 2 | 게시일 11월 19일 | ✓ 확인 | 원문 게시 2026-11-19 08:00 (2차 보도는 11-20) |
| 3 | 프롬프트 약 200만 건 / 7~11월 | ✓ 확인 | "approximately two million prompts", 5개월 |
| 4 | "AI 제공사 최소 세 곳" | ✓ 확인 | 요약부 "data from at least three AI providers was exposed". 본문은 "three different hosting providers"로 더 단정. 초고의 "최소 세 곳"이 더 안전한 표현 |
| 5 | 세 곳 모두 통보 전까지 몰랐다 | ✓ 확인 | 원문 명시. 2차 보도도 동일 |
| 6 | 10월 말, 각각 단 한 번씩만 보낸 AWS 키 수백 개 | ✓ 확인(단, 표현 주의 — C-2) | "The largest breach involved a couple hundred of our AWS keys." / "Each key was sent in exactly one request to one provider, all within a few short windows in late October" |
| 7 | "세 건을 합쳐 수만 번의 호출" | ⚠ 근거 약함 | 원문 "In total, our bait keys were used for tens of thousands of AWS API calls." **"세 건을 합쳐"라는 범위 한정은 원문에 없음** (C-1) |
| 8 | 공격자가 키 생존 확인 → 저장소·비밀 보관소 조회 | ✓ 확인 | "First, they tested each key to see if it was live..." 이후 S3 버킷 목록·Secrets Manager·Parameter Store 조회 |
| 9 | 중국 연구소, 7~10월 프롬프트의 절반 넘는 비율에서 비밀 주소 회수 | ✓ 확인 | "fetched the secret URLs from more than half of the prompts that we sent to its models" |
| 10 | "그중에는 데이터 미수집으로 표시해 보낸 요청의 3분의 2가량이 포함" | ✓ 확인 | "including roughly two-thirds of the requests marked as 'no data collection' or Zero Data Retention." 초고의 "포함돼 있었습니다"가 원문 "including"과 정확히 일치. **두 수치를 뒤섞지 않았음** |
| 11 | 미국 호스팅 업체를 거친 요청에서도 같은 움직임 | ✓ 확인 | 원문: 여러 미국 호스팅 제공사가 이 연구소 모델을 리셀하며, 같은 스크래퍼가 동작 |
| 12 | 24일 뒤 메신저 대화방, 2분 안에 베이징·상하이 데스크톱 3대·휴대전화 3대 | ✓ 확인 | "Within two minutes, the link was opened from three desktops and three phones in Beijing and Shanghai." (원문은 Feishu로 명시) |
| 13 | (12의 제공사 소속 미표기) | ✓ 적절 | **원문이 자가당착**: "one Chinese provider" vs 바로 뒤 "a U.S.-based provider with the ZDR flag". 원문이 해소하지 않으므로 **초고의 회피가 올바른 처리** |
| 14 | 추적 경로 약 2천 개 | ✓ 확인 | "So far, we have traced about two thousand routes." |
| 15 | 에러 봉투 중첩으로 중간 경유지가 드러남 | ✓ 확인 | 일부러 깨뜨린 요청 → 라우터가 상위 에러를 자기 포맷으로 감쌈 → 3~4겹 중첩, 시그니처 DB 대조로 홉·소프트웨어·네트워크·운영자 식별 |
| 16 | 마켓플레이스 출발 → 미공개 중개 1곳 경유 → 목적지 모델 | ✓ 확인 | Figure 7: SurplusIntelligence → (추적으로 드러난 미공개) OpenRouter → Anthropic |
| 17 | 리셀러가 취약점 없이 표준 로깅만으로 프롬프트 열람·보관 | ✓ 확인 | "using standard logging capabilities, without exploiting a vulnerability or bypassing platform controls." |
| 18 | 무어 권고 4가지 요약 | ✓ 확인(1건 누락 — C-4) | 원문 5개: ①자체 호스팅 ②1티어 직접 계약 ③라우터 주의(업스트림 직접 선택 + 프라이버시 설정이 실제 라우팅을 바꾸는지 검증 + **리셀러 마켓플레이스 회피**) ④에이전트·파이프라인 컨텍스트에 자체 카나리아 ⑤시크릿 필터링 |
| 19 | 사정거리 긋기(이름 미공개·목적 미공개·ZDR 미준수 원인 구분 불가) | ✓ 확인 | 원문은 침해 3사·중국 연구소 실명 비공개. 스크래핑 목적에 대한 언급 없음. 원문도 "프라이버시 플래그는 첫 홉에만 적용된다"고 하여 중개 단계 미전달 가능성과 양립 |
| 20 | 카나리아 메커니즘(DNS 질의만으로 탐지 / 빈 계정 + 전체 로깅) | ✓ 확인 | "The AWS keys are real keys tied to empty accounts with full logging." DNS 선행 질의 탐지는 기술적으로 정확 |
| 21 | 시작은 기성품 토큰 → 자체 서비스(시드에서 프롬프트별 파생) / DNS·웹·git·SSH·DB 리스너 | ✓ 확인 | "We started in July by seeding prompts with Thinkst Canarytokens." / "DNS, web, git, SSH, databases, mail, and a long tail of older protocols." |
| 22 | 하단 커버 크레딧(1928, George McCaa, 미국 광산국, Commons) | ✓ 확인 | Commons `File:Canary_coal_mine.jpg` — 1928-01-01, George McCaa, U.S. Bureau of Mines, PD. 사진은 감독 R. Thornburg가 새장을 든 모습 |

### 2차 보도와의 차이(초고 오류 아님)
- CryptoBriefing은 AWS 키를 "approximately 200"으로, 무어를 직함 없이 "Dragos의 보안 연구자"로 씀. 1차 출처("a couple hundred", Chief Research Officer)가 우선. 초고는 1차 출처를 따름 → 문제 없음.

## C. 수정 권고 (우선순위 순)

### 치명적 오류
**없음.** 날짜·수치 자릿수·인물/직함/소속·발언 귀속에서 틀린 항목이 발견되지 않았다.

### 중간 — 출처가 말하지 않은 범위를 단정
1. **28줄:** "세 건을 합쳐 수만 번의 호출이 빈 계정에 기록됐고요."
   - 원문은 `In total, our bait keys were used for tens of thousands of AWS API calls.` — "In total"의 범위를 원문이 명시하지 않는다(최대 침해 건 서술 직후에 나오지만 "미끼 키 전체"로도 읽힌다).
   - 권고: "세 건을 합쳐" → **"미끼 키 전체로는"** 또는 **"모두 합쳐"**.

### 경미
2. **28줄:** "AWS 키 수백 개가 **한꺼번에 사용된** 경우였어요."
   - 원문에서 "짧은 시간대에 몰린" 것은 키를 **보낸** 쪽이고(`all within a few short windows in late October`), 사용은 "일부는 요청 몇 시간 내 생존 확인"이다. 또 원문은 그 구간에 보낸 요청이 **전부** 도난당했고 일부는 모델이 돌기 전에 제공사가 거절한 요청이어서 "제공사 현관에서 요청을 복사했다"고 본다 — 초고가 쓰지 않은 가장 강한 디테일이다.
   - 권고: "한꺼번에 사용된" → **"짧은 시간대에 통째로 빠져나가 그대로 사용된"** 정도. 여유가 있으면 '모델이 돌기도 전에 거절된 요청까지 샜다'는 한 줄을 추가하면 침해 지점이 선명해진다.
3. **34줄 배치:** 24일 뒤 메신저 사건이 중국 연구소 문단 끝에 붙어 있어, 제공사를 밝히지 않았는데도 독자가 **중국 제공사로 읽게 된다.** 원문이 같은 사건을 "one Chinese provider"와 "a U.S.-based provider with the ZDR flag"로 엇갈리게 쓴 상황이므로, 암시도 피하는 편이 안전하다.
   - 권고: "한 건은 결이 좀 다릅니다" 뒤에 **"어느 제공사를 거친 건인지는 글 안에서도 서술이 엇갈립니다"** 한 구절을 넣거나, 문단을 분리.
4. **42줄:** 라우터 권고에서 원문 ③의 세 번째 항목 **"리셀러 마켓플레이스는 피하라"**가 빠졌다. 본문이 리셀러 로깅 문제를 한 문단 통째로 다뤘는데 정작 처방에서 그 항목이 사라져 논지가 끊긴다. 또 "설정을 바꿨을 때"는 원문이 **프라이버시 설정**으로 특정한다.
   - 권고: "설정을" → "프라이버시 설정을", 그리고 리셀러 마켓플레이스 회피 한 구절 추가 검토.
5. **7줄 excerpt:** "AI 제공사 **세 곳**에서" — 본문(12줄)은 "최소 세 곳"으로 정확한데 excerpt에서 '최소'가 빠졌다. 원문 요약부도 "at least three"다. 권고: excerpt도 "최소 세 곳".
6. **커버 중복:** `public/images/covers/dragos-canary-tokens-ai-supply-chain.jpg`는 2026-08-29 「뽑지 않은 자리는 기억에 남지 않습니다」 커버와 **동일한 Commons 사진**(`Canary_coal_mine.jpg`)이다. 크레딧 표기는 양쪽 다 정확하지만 같은 사진이 두 번째 커버로 쓰인다. 발행 차단 사유는 아니며, 교체 여부는 저자 판단.
   - 부수: 캡션이 "카나리아 새장"인데 사진은 **새장을 든 광산 감독**이다. 원하면 "카나리아 새장을 든 광산 감독(1928, 미국 광산국)"으로.
   - `coverImage: ""`는 파일명 매칭 관례대로이므로 문제 없음(파일 존재 확인함).

## D. 검증 불가 / 출처가 침묵하는 항목

- **24일 사건의 제공사 소속** — 1차 출처 내부에서 상충(중국 제공사 vs ZDR 플래그를 건 미국 제공사). 2차 보도도 해소하지 않음. → 초고처럼 **쓰지 않는 것이 유일하게 정확한 처리**.
- **"세 건을 합쳐"의 범위** — 위 C-1. 원문이 범위를 명시하지 않음.
- **스크래핑 목적(학습용/운영용)** — 원문에 없음. 초고가 "글에는 없고요"로 정확히 처리.
- **ZDR 미준수의 책임 소재** — 원문도 "프라이버시 플래그는 첫 홉에만 적용된다"고만 하고 단정하지 않음. 초고의 양가 서술이 출처와 일치.

## E. 종합 판정

- [x] **수정 후 발행** — 치명적 오류 0건. C-1(범위 단정)은 발행 전 고치기를 권한다. C-2~C-6은 저자 재량.
- [ ] 발행 가능 (무수정)
- [ ] 발행 보류

> 본문을 수정하면 `node scripts/lint-post.mjs _posts/2026-11-22-dragos-canary-tokens-ai-supply-chain.md` 재실행 필요.
