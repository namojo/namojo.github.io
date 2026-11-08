# Fact Check Report: 2026-11-09-agent-approval-file-secret-leak

검증일: 2026-11-08 (KST 기준 11-09 발행 예정분)
검증 대상: `_posts/2026-11-09-agent-approval-file-secret-leak.md`
팩트 카드: `_workspace/daily/2026-11-09-brief.md`

**원문 접근 제약:** Apiiro 블로그(apiiro.com)는 WebFetch 403으로 직접 읽지 못했다. 따라서 모든 Apiiro 수치는 **같은 원문을 요약한 2차 보도 4곳**(iTWire 11-07, i10x, idlen.io, DEV 재게시)으로 교차 확인했다. 네 곳이 서로 독립 취재가 아니라 같은 1차 자료의 요약이라는 점은 본문 사정거리 문단(32줄)이 이미 밝히고 있어 문제없다. `claudeissues.com`은 이 세션 네트워크 정책상 DNS가 막혀 있어 깃허브 이슈는 github.com에서 직접 확인했다.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-09 (금요일 아님 — 월요일. 요일 언급은 본문에 없으므로 무관)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|-----------|---------|-----------|------|
| Apiiro 리서치 공개 "11월 5일" | 2026-11-05 | 4일 전 ✓ | 유지 |
| 수집 기간 "11월 1일부터 사흘 동안" | 2026-11-01 ~ 11-03 | 이전 ✓ | 유지 |
| Check Point npm 조사 "지난 4월" | 2026-04-23 공개 | 약 7개월 전 ✓ | 유지 (같은 해 4월이므로 "지난 4월" 자연스러움) |

- **사후 시점 표현:** "훗날", "결국", "돌이켜보면" 등 없음 ✓
- **발행일 이후 사건 인용:** 없음 ✓
- **용어 시점성:** `.claude/settings.local.json`, "Yes, and don't ask again", `git rm --cached`, `npm publish` — 전부 발행일에 존재 ✓
- **미래형 주장:** 없음. 다만 "앤트로픽이 고쳤는지"에 대한 언급이 전혀 없는데, 11-08 현재 **수정 릴리스는 확인되지 않으므로** 현재형 서술은 안전하다 ✓

→ **시점 규율 위반 없음.**

---

## B. 사실 검증

| # | 본문 주장 | 상태 | 증거 | 조치 |
|---|---------|------|------|------|
| 1 | Apiiro = 애플리케이션 보안 업체 | ✓ 확인 | iTWire; Apiiro는 ASPM/Secrets Security 제품 판매 | - |
| 2 | 11월 5일 조사 결과 공개 | ✓ 확인 | iTWire(11-07), i10x, idlen 모두 11-05 | - |
| 3 | 11월 1~3일 공개 깃허브 수집 | ✓ 확인 | 동일 3곳 일치. 통보는 11-02~03 | - |
| 4 | 사본 104,185개 | ✓ 확인 | 103,617개 저장소에 걸쳐 104,185개 | - |
| 5 | 1,122개(약 1.1%)에서 자격증명 | ✓ 확인 | 1122/104185 = 1.08% | - |
| 6 | 서로 다른 값 1,379개 | ✓ 확인 | i10x·idlen·iTWire 일치 | - |
| 7 | 유형: DB 비밀번호·API 토큰·SSH 로그인·AWS 키 | ✓ 확인 | 세부 내역 DB 379, Supabase 서비스롤 키 122, SSH 43, GitHub/GitLab/npm 토큰 42, AWS 23, 개인키 6 | - |
| 8 | 추적 가능한 저장소 1,105곳 중 539곳이 Claude 공동작성 커밋 | ✓ 확인 | iTWire·i10x·idlen 일치. i10x는 "커밋 메타데이터에서 추론한 것이지 Claude가 모든 시크릿을 넣었다는 증명은 아니다"라고 단서를 붙임 — 초고의 서술("이 파일을 바꾼 커밋이 Claude 공동작성 커밋이었다")은 이 단서와 어긋나지 않음 | - |
| 9 | 살아 있다고 확인된 사례는 한 기업 한 건 | ✓ 확인 | 통보받은 조직 1곳이 자사 키가 유효했음을 확인 | - |
| 10 | Apiiro는 키 유효성을 시험하지 않았다 | ✓ 확인 | iTWire·idlen 명시. "real secret"은 탐지기 통과 + 사람 검토이지 유효성 증명 아님 | - |
| 11 | 독립 재현되지 않았다 | ✓ 확인 | 2차 보도는 전부 같은 원문 요약. 독립 재현 보고 없음 | - |
| 12 | **"도구가 고른 쪽은 두 번째 — 승인한 명령 문자열을 글자 그대로 적고 똑같을 때만 통과"** | **✗ 과장/부정확** | 공식 문서의 승인 프롬프트 예시는 `Yes, and don't ask again for: npm test *` — **접두사 + 와일드카드** 규칙이 기본. "A rule with no `*` matches one exact command"는 규칙 문법 설명일 뿐 저장 기본값이 아님 | **수정 필수** (아래 C-1) |
| 13 | 공식 문서상 전역 깃 제외 목록에 넣는다 / 그 기계에만 남는다 | ✓ 확인 | 공식 문서 원문: "The first time Claude Code writes the file in a git repository that doesn't already ignore it, it adds `**/.claude/settings.local.json` to your global git excludes file" | - (단서 하나, C-5) |
| 14 | 한 번이라도 추적된 파일에는 무시 규칙이 적용되지 않는다 | ✓ 확인 | git 공식 문서 gitignore: "Files already tracked by Git are not affected"; 해제는 `git rm --cached` | - |
| 15 | 체크포인트, 지난 4월, npm 약 46,500개 중 428개에 이 파일 | ✓ 확인 | SecurityBrief 2026-04-23: Check Point, CouchDB changes feed로 약 46,500개 모니터링, 428개에 파일 | - |
| 16 | "그중 33개에 자격증명" | ⚠ 근거는 맞되 단위 부정확 | 실제는 **설정 파일 33개 / 패키지 30개** (약 13개 중 1개꼴) | 단위 보정 권고 (C-3) |
| 17 | `npm publish`는 폴더에 있는 것을 싣는다 | ✓ 확인 | Check Point 설명: `.npmignore`나 package 설정으로 빼지 않으면 그대로 실려 나감 | - |
| 18 | 제목 "공개 저장소에서 발견된 에이전트 승인 파일 1,122개" | **✗ 수치 의미 오기** | 공개 저장소에서 발견된 승인 파일은 **104,185개**이고, 1,122개는 그중 **시크릿이 들어 있던** 파일 수 | **수정 필수** (C-2) |
| 19 | 커버 크레딧 줄(Unsplash, Bernd Dittrich) | ⚠ 본문-프런트매터 불일치 | `coverImage: ""`인데 하단에 커버 크레딧 줄이 있음. `_workspace/image-credits-2026.md` 178행에는 `covers/agent-approval-file-secret-leak.jpg`가 등록돼 있음 | 확인 필요 (C-6) |
| 20 | 앤트로픽 대응 언급 없음 | ? 검증 불가(상충) | i10x·일부 집계 매체는 "보리스 처니가 해커뉴스에서 시크릿 스크러빙을 해오지 않았고 막을 방법을 보고 있다, 파일은 로컬용이며 유출본은 수작업 생성·커밋된 것"이라 답했다고 전하나, idlen·The Hacker News는 11-07 기준 **앤트로픽 무응답**이라고 씀. HN 원 코멘트를 찾지 못함 | **추가하지 말 것** (C-7) |

---

## C. 수정 권고 (우선순위 순)

### [치명적] C-1. 18~20줄 — 메커니즘 서술이 실제 동작과 다르다

초고는 "선택지 두 가지" 중 **도구가 두 번째(승인한 명령 문자열을 글자 그대로 저장, 똑같을 때만 통과)를 택했다**고 단정하고, 거기에 "보안 설계로 보면 그쪽이 맞죠. 권한은 좁을수록 좋으니까요"라는 **설계 의도**까지 부여한다. 확인 결과 둘 다 사실과 어긋난다.

확인된 실제 동작:

1. **기본값은 접두사 패턴이다.** 공식 permissions 문서의 프롬프트 스크린샷 설명에 선택지가 그대로 적혀 있다 — `Yes, and don't ask again for: npm test *`. 그리고 "The permission dialog writes the space-separated form when you select 'Yes, and don't ask again' for a command prefix." 즉 도구가 적는 것은 보통 `Bash(npm test *)`지 명령 전체가 아니다.
2. **그런데도 비밀이 적힌다.** 와일드카드 앞부분은 승인한 명령의 **문자 그대로의 앞 조각**이기 때문이다. `PGPASSWORD=... psql -h prod-db ...`처럼 자격증명이 명령 앞쪽(환경변수 접두)에 있으면 규칙에 그대로 들어간다. 본문 예시로 PGPASSWORD를 고른 것은 오히려 정확한 선택이다.
3. **명령 전체가 통째로 적히는 경우도 실재한다. 다만 그것은 설계가 아니라 버그로 보고된 동작이다.** anthropics/claude-code **#21845 "Permission allow-list captures entire literal commands instead of extracting command patterns"**(2026-01-30 개설, 2026-02-28 비활동 자동 종료, `bug`·`area:security` 라벨), 그 중복으로 닫힌 **#24994 "[Bug] 'Allow always' saves full command text leaking secrets and causing parse errors"**(2026-02-11). #24994 신고자는 heredoc·인라인 스크립트·환경변수 접두 명령에서 명령 전문이 한 항목으로 저장됐고, 파일이 311개 항목 31KB로 불어나며 라이브 Stripe 키와 Supabase JWT가 들어 있었다고 적었다. 앤트로픽 답변은 없고 봇이 닫았다.

따라서 "도구는 정밀함을 택했고 그 대가로 비밀이 적힌다"는 **깔끔하지만 사실과 다른 이야기**다. 더 정확한 구도는 "허용 규칙이 명령 **문자열 그 자체**로 되어 있다는 점이 원인이고, 범위를 넓히는 와일드카드를 붙여도 그 앞부분은 승인한 명령 그대로다. 게다가 패턴으로 줄여지지 않는 명령(환경변수 접두·heredoc·여러 줄 구문)에서는 명령 전체가 그대로 적히는 일이 보고돼 있다"이다.

→ 권고: "도구가 고른 쪽은 두 번째입니다 / 보안 설계로 보면 그쪽이 맞죠" 두 문장을 **삭제 또는 전면 교체**. 역설("정밀하게 적을수록 비밀이 더 적힌다")은 살릴 수 있지만, 그것을 **도구의 의도적 선택**이 아니라 **문자열로 권한을 적는 방식의 성질**로 돌려야 한다. 깃허브 이슈 번호를 한 줄 넣으면 "똑같을 때만 통과" 서술의 근거도 함께 선다.

### [치명적] C-2. 제목 — 1,122개는 "발견된 승인 파일" 수가 아니다

현재 제목: `공개 저장소에서 발견된 에이전트 승인 파일 1,122개`
발견된 승인 파일은 104,185개이고, 1,122개는 그중 **시크릿이 든** 파일이다. 본문 12줄은 정확하게 쓰고 있으므로 제목만 바로잡으면 된다.
→ 대안 예시: `에이전트 승인 파일 1,122개에서 나온 자격증명` / `공개 저장소의 에이전트 승인 파일에서 나온 시크릿 1,122건` (※ 어느 쪽이든 1,122는 파일 수이지 시크릿 값 수가 아님 — 값으로 세면 1,379)

### [경미] C-3. 34줄 — Check Point 수치 단위

"428개에서 이 파일을 발견했고 그중 33개에 자격증명" → 정확히는 **설정 파일 33개(패키지로는 30개)**. "그중 33개"는 패키지 33개로 읽힌다.
→ 권고: "428개에서 이 파일이 나왔고 그 가운데 33개 파일, 패키지로는 30개에 자격증명이 있었습니다" 또는 "428개 중 서른 개 남짓한 패키지에".

### [경미] C-4. 34줄 — 회사 표기

본문 `체크포인트` → 스타일 가이드(2026-10-13, 알파벳 기업명은 영문 단독 기본: 스트라이프→Stripe) 기준으로 **Check Point**가 맞다. 사실 오류는 아니지만 표기 규칙 위반.

### [경미] C-5. 28줄 — 전역 제외 동작의 단서 두 개

공식 문서는 두 조건을 달고 있다. (a) "**저장소가 이미 그 파일을 무시하고 있지 않을 때**" 추가하고, (b) **사용자가 손으로 만든 파일에는 추가하지 않는다**("If you created the file by hand and Claude Code hasn't written to it yet, add it to `.gitignore` yourself"). 초고의 "처음 쓸 때 전역 제외 목록에 넣는다"는 맞지만, (b)는 공개 저장소에 파일이 남은 경로를 설명하는 데 실제로 쓰이는 지점이다(공급사 쪽에서도 이 점을 들어 반박한다는 보도가 있다 — C-7). 한 구절 추가는 선택 사항이며, 넣지 않아도 오류는 아니다.

### [경미] C-6. 프런트매터 — `coverImage`가 비어 있는데 하단 커버 크레딧이 있다

`_workspace/image-credits-2026.md` 178행에 `covers/agent-approval-file-secret-leak.jpg`(Unsplash, Bernd Dittrich)가 이미 등록돼 있다. 둘 중 하나로 맞출 것: 파일이 실제로 있으면 `coverImage`를 채우고, 없으면 하단 크레딧 줄을 지운다(하네스 규칙: hero 폴백·텍스트 카드에는 크레딧 줄을 넣지 않는다). 본문 중간 이미지(24~26줄)는 인라인 출처 표기가 규칙대로 돼 있다 ✓.

### [경미] C-7. 공급사 입장 — 넣지 말 것

보리스 처니(Claude Code)가 해커뉴스에서 "시크릿 스크러빙은 지금까지 하지 않았고 막을 방법을 보고 있다 / 이 파일은 로컬용이며 유출된 것들은 수작업으로 만들어 커밋된 파일이다"라고 답했다는 **2차 전언**이 있으나, 같은 날짜 보도(idlen·The Hacker News)는 앤트로픽 무응답이라고 쓰고 있고 HN 원 코멘트를 확인하지 못했다. **검증 불가 → 본문에 넣지 않는 현재 상태가 옳다.** 다만 이 전언이 사실이라면 초고 30줄의 "승인, 기록, 커밋, 푸시가 전부 정상 절차대로 이어진 결과입니다"는 공급사가 다투는 지점이 된다. 현재 초고는 그 문장을 **539/1,105라는 Apiiro 집계에 근거해서만** 말하고 있어 사정거리 안에 있다 — 근거 없이 "에이전트가 커밋했다"로 더 밀지 말 것.

### [참고] 오류 아님 — 그대로 둬도 되는 것들

- 12줄 "진짜 자격증명": Apiiro의 "real secret"은 탐지기 통과 + 사람 검토이지 유효성 증명이 아닌데, 32줄에서 그 선을 긋고 있으므로 문제없다.
- 30줄 "프롬프트 인젝션도 아니고 침해도 아닙니다" ✓ — 어떤 보도도 공격을 보고하지 않았다.
- 36줄 `git log --all -- '.claude/settings.local.json'`, `git rm --cached` ✓ — git 문서와 일치하는 정확한 조치 순서(폐기 먼저 → 추적 해제 → 저장소 `.gitignore`).
- 36줄 "포크와 클론은 되돌릴 수 없으니까요" ✓ — Apiiro도 74개 저장소의 포크 211개가 같은 시크릿을 들고 있다고 집계했다.

---

## D. 종합 판정

- [ ] 발행 가능
- [x] **수정 후 발행** — 치명적 2건(C-1 메커니즘, C-2 제목)을 고치면 나머지는 경미. 시점 규율 위반 없음, 수치는 전부 교차 확인됨.
- [ ] 발행 보류

**요약:** 숫자·날짜·출처는 흠잡을 데 없다(104,185 / 1,122 / 1.1% / 1,379 / 539·1,105 / 한 기업 한 건 / 46,500·428·33 전부 확인). 위험한 곳은 글의 본체인 메커니즘 한 군데다. 초고는 "정밀한 권한 기록이라는 올바른 설계의 대가"라는 매끄러운 인과로 정리했는데, 공식 문서상 기본 저장 형태는 접두사 와일드카드 규칙이고 명령 전문 저장은 버그로 보고된 동작이다. 역설 자체는 살아 있으니 원인을 "도구의 의도적 선택"에서 "문자열로 권한을 적는 방식"으로 옮기고 이슈 번호로 받치면 된다.

---

## 참고 URL

- iTWire 2026-11-07: https://itwire.com/business-it-news/security/claude-code-approval-files-found-exposing-company-secrets-on-github-says-apirro-researchers
- i10x: https://i10x.ai/news/claude-code-settings-local-json-secrets-leak
- idlen.io: https://www.idlen.io/news/claude-code-dont-ask-again-passwords-github/
- Cyber Security News: https://cybersecuritynews.com/claude-codes-yes-and-dont-ask-again/
- Claude Code 공식 문서(설정): https://code.claude.com/docs/en/settings
- Claude Code 공식 문서(권한): https://code.claude.com/docs/en/permissions
- anthropics/claude-code #21845: https://github.com/anthropics/claude-code/issues/21845
- anthropics/claude-code #24994: https://github.com/anthropics/claude-code/issues/24994
- git gitignore 문서: https://git-scm.com/docs/gitignore
- Check Point npm 건(SecurityBrief 2026-04-23): https://securitybrief.asia/story/claude-code-can-leak-secrets-in-public-npm-packages
- Apiiro 원문: https://apiiro.com/blog/ (403 — 직접 확인 불가)
