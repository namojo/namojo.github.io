# Fact Check Report: plugin4shell-sha-pinning-checkout-verification

- **검증일:** 2026-09-20 (발행 예정 2026-09-21 09:00 KST)
- **초고:** `_posts/2026-09-21-plugin4shell-sha-pinning-checkout-verification.md`
- **팩트 카드:** `_workspace/daily/2026-09-21-brief.md`
- **검증 방식:** 1차 출처(AIR Security 블로그) + 보도 3곳(더 레지스터·헬프넷시큐리티·더해커뉴스) 교차 + git 동작 문서 확인 + 레포 내부 자산(이미지·크레딧·과거 포스트) 대조

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-09-21 (월)
- **요일 계산:** 2026-01-01 = 목요일. 9/17 = 연중 260일째 = **목요일**, 9/18 = 금요일, 9/21 = **월요일**.

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 에어 시큐리티 취약점 발견 (PoC 포함) | 2026-05 | 이전 ✓ | 유지 |
| 4개 벤더 통보(disclosure) | 2026-06 | 이전 ✓ | 유지 |
| Claude Code 2.1.179 패치 | 2026-06-17 | 이전 ✓ | 유지 |
| 구글 회신(패치 거부·지원 종료) | 2026-08-04 | 이전 ✓ | 유지 |
| Codex 0.146.0 수정 확인 | 2026-08-12 | 이전 ✓ | 유지 |
| 더 레지스터 최초 보도 | 2026-09-17 (목) | 이전 ✓ | 유지 |
| 연구진 기술 상세 / 후속 보도 | 2026-09-18 (금) | 이전 ✓ | 유지 (단 B-3 참조) |

- **"지난주에 공개한" 판정:** ✓ **정확**. 9/17(목)·9/18(금)은 9/21(월) 기준 직전 주. 시점 붕괴 없음.
- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" 등 미래 시점 누설 표현 **없음**. "공개 시점까지 수정본을 내지 않았습니다"는 과거·현재 시제로 정확히 한정돼 있음.
- **용어 시점성:** Plugin4Shell·Antigravity·Gemini CLI·Codex·Claude Code 모두 발행일에 존재. `_style/ai-timeline.md` 기준 시점(2026-09-20)과 충돌 없음.
- **자기 글 참조:** "Antigravity는 얼마 전에 한 번 다룬 적이 있는데요" → `_posts/2026-09-16-google-antigravity-claude-opus5-quota.md`(5일 전), `_posts/2025-12-06-google-antigravity-editor-agents.md` 확인. ✓ 실재하며 "얼마 전"도 사실.

**A 판정: 시점 규율 위반 없음.**

---

## B. 사실 검증

| # | 주장 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 발견 2026년 5월, 동작하는 PoC 포함 | ✓ 확인 | AIR 블로그(1차) | - |
| 2 | 6월 4개 벤더 전부에 통보 | ✓ 확인 | AIR·헬프넷·THN·사이버시큐리티뉴스 | - |
| 3 | 더 레지스터 9/17 최초 보도 | ✓ 확인 | theregister.com URL 경로 `/2026/09/17/`, 본문 게재일 9/17 | - |
| 4 | 연구진 기술 상세는 18일 | ⚠ 근거 약함 | 헬프넷·THN은 9/18 확정. AIR 자체 블로그 게시일은 페이지에 명시 안 됨. 일부 2차 요약은 "On September 17, AIR disclosed"로 씀 | 날짜 단정 완화 권고 (C-2) |
| 5 | Claude Code **2.1.179** 패치, 2026-06-17 | ✓ 확인 | AIR(날짜) + 헬프넷·THN·더레지스터(버전) 교차. 자릿수 정확 | - |
| 6 | Codex **0.146.0** 수정, 2026-08-12 | ✓ 확인 | 동일 4곳 교차. 자릿수 정확 | - |
| 7 | 구글 8/4 회신, Gemini CLI 지원 종료·미패치, Antigravity 이전 권고 | ✓ 확인 | AIR(8/4 날짜) + 더레지스터·THN·헬프넷 | - |
| 8 | 에어 시큐리티는 Antigravity에는 공격이 닿지 않는다고 봄 | ✓ 확인 | 더레지스터 "Antigravity CLI (protected from attack)", THN "Air Security confirmed is resistant" | - |
| 9 | 마이크로소프트, 공개 시점까지 Copilot 미패치 | ✓ 확인 | 헬프넷·THN·사이버시큐리티뉴스. 9/20자 후속 보도에서도 여전히 미패치 | - |
| 10 | 대상 4종 = Claude Code, Codex, GitHub Copilot, Gemini CLI | ✓ 확인 | 전 출처 일치 | - |
| 11 | 인용 "AI 에이전트 생태계 최초의 공급망 취약점" | ✓ 확인 | 원문 "It is the first supply chain vulnerability of the AI agent ecosystem." — 직역 정확, 연구진 발언으로 귀속도 정확 | - |
| 12 | Gemini CLI는 `git fetch origin <SHA>` 후 `git checkout FETCH_HEAD` | ✓ 확인 | AIR 1차 + THN. 기본 브랜치명을 `FETCH_HEAD`로 지으면 받아 온 커밋이 버려진다는 서술도 원문과 일치 | - |
| 13 | 나머지 셋은 해시와 같은 이름의 브랜치 경로 | ✓ 확인 | AIR "git prefers a ref over a commit of the same name" + 보도 3곳 | - |
| 14 | 깃허브는 커밋 해시처럼 보이는 브랜치·태그 이름을 허용하지 않음 | ✓ 확인 | 깃허브 대변인 성명 + git 자체 경고문("Git normally never creates a ref that ends with 40 hex characters") | - |
| 15 | 깃허브 대변인 입장 | ✓ 확인 | 더 레지스터 원문: "To prevent abuse of SHAs, GitHub does not allow users to create branch or tag names that resemble commit SHAs. This mitigation ensures the reported vulnerability cannot be exploited on GitHub." 초고의 요약은 원문 취지와 일치 | - |
| 16 | 연구진 반박 = 보호가 깃허브 바깥에는 안 닿음 | ✓ 확인 | 더 레지스터·THN | - |
| 17 | 취약 호스트로 Bitbucket·사내 git 서버 지목 | ✓ 확인 | AIR 1차에서 명시, 더레지스터·THN 동일. 철자 `Bitbucket` 정확 | - |
| 18 | CVE 번호가 어느 기사에도 등장하지 않음 | ✓ 확인 | AIR·헬프넷·더레지스터·THN 전부 CVE 없음. THN "No CVE identifier assigned as of September 18, 2026", 9/20 후속 보도도 "No CVE has been assigned" | - |
| 19 | 실제 악용 사례 미확인 | ✓ 확인 | THN "No evidence of active exploitation detected" | - |
| 20 | "수백만 개의 에이전트"가 에어 시큐리티의 추정이고 산정 근거 비공개 | ✓ 확인 | AIR 블로그 제목 자체가 "millions of agents affected"이며 산정식 없음. 더 레지스터는 "could affect millions of users and machines"로 완화 인용. 초고가 이를 **추정으로 귀속**한 것은 정확 | - |
| 21 | 고유명사 철자 (AIR Security / Claude Code / Codex / GitHub Copilot / Gemini CLI / Antigravity / Bitbucket) | ✓ 확인 | 전부 정확 | B-22 참조 |
| 22 | "보안 연구소 에어 시큐리티" 라는 소개 | ⚠ 근거 약함 | 더 레지스터는 "Air security **startup**"으로 씀. AIR 자체·일부 매체는 "research lab". 영리 스타트업을 "연구소"로 부르면 비영리 기관으로 읽힐 소지 | 표현 조정 권고 (C-3) |
| 23 | 커버 크레딧 "Wikimedia Commons, Wikideas1" | ✓ 확인 | `_workspace/image-credits-2026.md:94` = "GitHub Codespaces side by side terminal.webp" — Wikideas1, CC0. 파일 `public/images/covers/plugin4shell-sha-pinning-checkout-verification.jpg` 실재, 내용(코파일럿 패널+터미널)이 캡션과 일치 | - |
| 24 | 본문 재현 이미지 경로 | ✓ 확인 | `public/images/covers/plugin4shell-sha-pinning-checkout-verification-repro.jpg` 실재. 화면 내용이 본문 서술과 한 글자도 어긋나지 않음(아래 D-1) | - |

### 저자 재현 구간 검증 (git 2.43.0)

저자 지시에 따라 "보도 요약보다 좁다"는 논지 자체는 오류로 보지 않았고, **git 동작 설명의 기술적 정확성만** 점검했다.

재현 이미지와 본문 대조 결과:

| 본문 서술 | 이미지 출력 | 판정 |
|---|---|---|
| `rev-parse`에 40자리를 넘기면 같은 이름의 브랜치가 있어도 커밋 객체를 돌려준다 | `git rev-parse $PINNED` → `c7e5c102…6239e` (핀한 커밋) | ✓ 일치 |
| `checkout`에 같은 값을 넘기면 브랜치로 간다 | `Switched to branch 'c7e5c102…6239e'`, 이후 `git rev-parse HEAD` → `d9b9ffa8…ae741` | ✓ 일치 |
| git이 경고를 낸다 (40 hex로 끝나는 ref는 보통 만들지 않으며 실수일 수 있다) | `warning: refname '…' is ambiguous.` + `warning: Git normally never creates a ref that ends with 40 hex characters … These refs may be created by mistake.` | ✓ 일치 |
| 핀한 커밋이 아니라 저장소 통제자의 코드가 놓인다 | `cat plugin.txt` → `swapped code` | ✓ 일치 |

- 해시 `c7e5c1023daf4e26f5fc4604baa3bef528d6239e` **자릿수 40 정확**(본문 "40자리"와 일치).
- git 공식 문서·이슈 트래커 검증: 40-hex 문자열에 대해 rev-parse가 객체를 우선하고 동명 ref는 무시하며 ambiguity 경고를 내는 것은 **git의 문서화된 동작**. 저자 재현과 일치.
- 참고(오류 아님): 동일한 40-hex 브랜치명 혼동 자체는 2020년 GitLab 대상 HackerOne 리포트 #790634에 선례가 있다. 다만 초고는 "최초"를 **연구진 발언으로 인용·귀속**했을 뿐 저자가 단정하지 않았으므로 수정 불필요.

---

## C. 수정 권고 (우선순위 순)

### 치명적 오류: **없음**

잘못된 날짜·버전, 존재하지 않는 발언, 자릿수 오류, 시점 붕괴 **모두 해당 없음**.

### 경미 (발행 전 반영 권장)

1. **[경미·기술 정확성] 26줄** — "체크아웃은 인자를 브랜치 이름으로 먼저 취급하거든요."
   - 관측된 결과는 정확하지만, **메커니즘 설명으로는 부정확**하다. `git checkout <arg>`는 인자를 먼저 객체로 해석한 뒤(`git rev-parse`와 동일), HEAD를 브랜치에 붙이기 위해 `refs/heads/<arg>`를 조회하고 그 브랜치가 존재하면 앞서 해석한 커밋을 **덮어쓴다**. 즉 "먼저"가 아니라 "나중에 덮어쓴다"가 실제 순서다.
   - 더 중요한 문제는 **같은 글 안의 자기모순**이다. 두 문단 뒤에 인용한 git 경고문은 "40-hex를 그냥 지정하면 그 ref는 **무시된다**"는 내용인데, 바로 앞에서 "브랜치 이름으로 먼저 취급한다"고 써 두면 독자가 충돌을 느낀다.
   - **권고(결과 기술형으로 교체):** "체크아웃은 같은 이름의 브랜치가 있으면 그쪽에 HEAD를 붙이거든요." 또는 "체크아웃은 해석한 커밋보다 같은 이름의 브랜치를 앞세웁니다."

2. **[경미] 14줄** — "연구진의 기술 상세는 18일에 나왔어요."
   - 헬프넷·더해커뉴스 후속 보도가 9/18인 것은 확정이나, **AIR 블로그 자체의 게시일은 페이지에 명시돼 있지 않고** 일부 2차 요약은 9/17로 적는다. 하루 단위로 단정하면 반박 여지가 생긴다.
   - **권고:** "연구진의 기술 상세와 후속 보도가 이어졌어요" 또는 "연구진의 기술 상세는 하루 뒤에 나왔고요" 정도로 완화. (그대로 두어도 치명적이지 않음)

3. **[경미] 14줄** — "보안 연구소 에어 시큐리티(AIR Security)"
   - 더 레지스터는 "Air security **startup**"으로 소개한다. 영리 보안 스타트업을 "연구소"로 쓰면 중립 연구기관으로 읽힐 수 있다.
   - **권고:** "보안 업체 에어 시큐리티(AIR Security)" 또는 "보안 스타트업 에어 시큐리티(AIR Security)".

4. **[경미·균형] 44줄** — "마이크로소프트는 공개 시점까지 Copilot에 수정본을 내지 않았습니다."
   - 사실은 정확하다. 다만 깃허브 대변인 입장("이 취약점은 깃허브에서 악용될 수 없다")을 고려하면 **미패치와 취약을 등치하지 않는 편이 정확**하다. 실제로 일부 보도는 Copilot의 완화 범위를 두고 연구진과 깃허브의 해석이 갈린다고 적는다.
   - 다행히 초고는 38줄에서 깃허브 이름 규칙 문단을 이미 배치해 두었으므로 구조적 균형은 확보돼 있다. 한 마디만 잇는 것으로 충분.
   - **권고(선택):** 해당 문장 뒤에 "깃허브 쪽 설명대로라면 깃허브에 올라온 저장소에서는 이 경로가 막혀 있지만, 그 밖의 호스트를 쓰는 경우는 남습니다." 한 문장 추가.

5. **[경미·편집] 58줄 커버 크레딧** — 크레딧·파일·캡션은 전부 일치하여 사실 오류는 없다. 다만 커버가 **깃허브 코파일럿 화면**인데 본문에서 코파일럿은 유일한 미패치 제품이다. 특정 제품이 침해된 화면으로 오독될 여지가 약간 있다. 캡션이 중립적("AI 코딩 도우미 패널이 붙은 코드 편집기와 터미널")이므로 **교체 불필요**하되, 인지해 둘 것.

6. **[참고·수정 불요] 44줄** — "Antigravity는 얼마 전에 한 번 다룬 적이 있는데요"
   - 실제로는 2025-12-06, 2026-09-16 두 차례 다뤘다. "한 번"은 엄밀히는 부정확하지만 구어에서 "한번 다룬 적이 있다"는 횟수 단정이 아니라 관용 표현으로 읽히므로 그대로 두어도 무방.

---

## D. 교차 검증 메모

1. **저자 재현 화면은 본문의 가장 강한 자산이다.** 이미지 안의 명령·출력·해시 자릿수가 본문 서술과 완전히 일치하며, git 공식 문서가 설명하는 동작과도 어긋나지 않는다. C-1의 한 문장만 손보면 이 구간은 보도 4곳보다 정확한 서술이 된다.
2. **Gemini CLI 변형은 사실 저자가 발견한 것과 같은 현상이다.** `git checkout FETCH_HEAD`가 `refs/heads/FETCH_HEAD` 브랜치로 끌려가는 것도 "체크아웃이 동명 브랜치를 앞세운다"는 같은 규칙이다. 초고의 "조금 다른 길로 같은 곳에 도착합니다"는 이 구조를 정확히 짚은 표현이다.
3. **재사용 가능 팩트:** Claude Code 2.1.179 / Codex 0.146.0 / 패치일 6-17·8-12 / 구글 회신 8-4 / CVE 미부여 / Bitbucket·사내 서버 취약 — 이후 포스트에서 재등장하면 본 리포트 결과를 재활용할 것.
4. **게시 상태 참고:** 본 포스트는 이미 `public/posts.json`(id `plugin4shell-sha-pinning-checkout-verification`)에 엔트리가 생성돼 있고 `coverImage`가 채워져 있다. 초고 프런트매터의 `coverImage: ""`는 파일명 매칭 관례에 따른 것으로 정상.

---

## E. 종합 판정

- [x] **발행 가능** — 치명적 오류 없음. C-1(체크아웃 메커니즘 한 문장)만 반영하고 발행 권장.
- [ ] 수정 후 발행
- [ ] 발행 보류

**한 줄 판정: 발행 가능 — 날짜·버전·인용·수치 전 항목이 1차 출처와 일치하고 시점 규율도 지켜졌으며, 남은 것은 `git checkout` 설명 한 문장의 기술적 정밀도 보정(C-1)뿐이다.**

---

## 참조 출처

1. https://www.air.security/blog-posts/plugin4shell (1차 — 연구진 기술 상세)
2. https://www.theregister.com/security/2026/09/17/ai-coding-agents-0-click-rce-flaw-could-hand-attackers-keys-to-the-kingdom/5297335 (깃허브 대변인 성명·연구진 반박)
3. https://www.helpnetsecurity.com/2026/09/18/plugin4shell-ai-coding-agents-vulnerability/
4. https://thehackernews.com/2026/09/plugin4shell-lets-repository-owners.html (CVE 미부여·악용 미확인)
5. https://cybersecuritynews.com/plugin4shell-zero-click-rce/
6. https://git-scm.com/docs/git-rev-parse (40-hex 해석 우선순위·ambiguity 경고)
7. https://hackerone.com/reports/790634 (2020 GitLab 선례 — "최초" 주장 맥락)
8. 레포 내부: `_workspace/image-credits-2026.md`, `_posts/2026-09-16-google-antigravity-claude-opus5-quota.md`, `_style/ai-timeline.md`
