# Fact Check Report: asahi-linux-mit-to-gpl-llm-laundering

검증일: 2026-11-11 (발행 예정 2026-11-12 09:00 KST)
초고: `_posts/2026-11-12-asahi-linux-mit-to-gpl-llm-laundering.md`
팩트 카드: `_workspace/daily/2026-11-12-brief.md`

**결론 먼저: 치명적 오류 0건.** 1차 출처(asahilinux.org 보고서, m1n1 README)와 본문이 어긋나는 지점이 없고, 인용·날짜·고유명사·법리 모두 통과했다. 경미한 정밀도 권고 7건.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-12 (`date: 2026-11-12 09:00:00 +0900`)
- **기준 시점:** `_style/ai-timeline.md`의 "오늘"은 2026-11-11. 발행일은 그 다음 날 아침.

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|-----------|---------|-----------|------|
| 아사히 리눅스 "Progress Report: Linux 7.3" 공개 | 2026-11-07 | 5일 전 ✓ | 유지 |
| 브라이언 스틸의 X 게시물 | 2026-11-07 | 5일 전 ✓ | 유지 |
| WINE, MIT → LGPL 전환 | 2002-03-09 (커밋), 2002-02 논의 | 이전 ✓ | 유지 |
| 아사히 리눅스 프로젝트 시작 | 2020-12 발표 / 2021-01 본격 착수 | 이전 ✓ | 유지 |
| m1n1 1.9.9 → 2.0.0 라이선스 전환 | **날짜 주장 없음** | — | ✓ 올바른 처리 |

- **미래 사건 없음.** 보고서 이후에 벌어진 일을 과거형으로 쓴 문장이 없다. 42줄의 전망은 "예측은 아니고 가정입니다만"으로 명시적으로 표시했고, 46줄 마무리도 "~되지 않을까 싶네요"의 열린 질문형이라 사후 시점 표현에 해당하지 않는다.
- **사후 시점 표현 검사:** "훗날 드러나듯", "결국", "돌이켜보면" → 0건.
- **용어 시점성:** LLM, 에이전트, 카피레프트, 퍼미시브 — 전부 2026-11 시점에 문제 없음.
- **m1n1 2.0.0 날짜 주장 여부(요청 3의 ⚠):** 40줄 "m1n1 저장소는 1.9.9까지가 MIT, 2.0.0부터가 GPL이고" — **날짜를 주장하지 않는다. 팩트 카드의 경고를 정확히 지켰다.**
- **타임라인 미등재:** `_style/ai-timeline.md`에 아사히/m1n1 관련 항목이 0건이다. 발행 후 2026-11-07 항목 추가 필요(팩트체크 사항은 아니고 후속 작업).

---

## B. 사실 검증

| # | 줄 | 주장 | 상태 | 증거 | 조치 |
|---|---|------|------|------|------|
| 1 | 12 | 보고서 공개일 11월 7일 | ✓ 확인 | asahilinux.org 글 말미 "James Calligeros · 2026-11-07" | - |
| 2 | 12 | "모든 저장소를 GPL v2 또는 그 이후로" | ✓ 확인 | 원문 "transitioning all of our repositories to the GNU General Public License version 2 or later" | - |
| 3 | 12 | "앞으로 나오는 코드는 강한 카피레프트로만" | ✓ 확인 | 원문 "Going forward all Asahi Linux code will be licenced under strong copyleft licences only." | - |
| 4 | 14 | 개발 중 기능 코드가 개인 포크에서 유출, 출처 표기 없이 공개 | ✓ 확인 | 원문 "in-development feature code was being lifted straight out of our personal forks and published without attribution" | 경미 권고 3 참조 |
| 5 | 14 | LLM으로 고쳐 써 출신을 흐림 | ✓ 확인 | 원문 "lazily rewritten with LLM assistance to obfuscate its origin" | - |
| 6 | 14 | 프로젝트 대체 + 공격적 수익화 의도 | ✓ 확인 | 원문 "with a direct view to replacing the project and aggressively monetising Linux on Apple Silicon" | - |
| 7 | 14 | 특정 상대를 지목하지 않음 | ✓ 확인 | 보고서 라이선스 절에 기업·개인·단체 실명 0건("frontier AI labs", "bad actors"만) | - |
| 8 | 16 | 애플이 GPU·디스플레이 컨트롤러·전원 관리 내부 동작을 문서로 공개한 적 없음 | ✓ 확인(단서) | 애플은 주변장치 블록 문서를 공개하지 않음. ⚠ 단, **Apple Silicon CPU Optimization Guide**(v4~v5, developer.apple.com)는 CPU ISA·마이크로아키텍처를 문서로 공개함 | 경미 권고 1 |
| 9 | 16 | "5년 넘게 걸린 일" | ✓ 확인 | 2020-12 발표 / 2021-01 착수 → 2026-11 기준 5년 10~11개월. "5년 넘게"는 참 | 경미 권고 2(excerpt와 불일치) |
| 10 | 16 | OpenBSD 애플 실리콘 지원이 m1n1 위에 올라감 | ✓ 확인(2곳) | OpenBSD `distrib/notes/arm64/prep`가 아사히 설치 관리자의 "UEFI environment only (m1n1 + U-Boot + ESP)" 선택을 요구 / itsfoss "OpenBSD's Apple Silicon support relies on Asahi's m1n1 bootloader" | - |
| 11 | 32 | "저작권은 표현을 보호하지 사실이나 아이디어를 보호하지 않는다" | ✓ 확인 | 아이디어·표현 이분법(17 U.S.C. §102(b), Baker v. Selden, Feist). 한국 저작권법도 동일 법리 | 경미 권고 4 |
| 12 | 36 | MIT에서는 소스를 닫고 팔아도 적법, 의무는 고지뿐 | ✓ 확인 | MIT 본문: 저작권 고지·허가 고지를 "all copies or substantial portions"에 포함시키는 것이 유일한 조건 | - |
| 13 | 36 | "GPL에서는 닫힌 포크로 가는 적법한 길이 아예 없다" | ⚠ 근거 약함 | GPLv2는 **배포 시점**에 소스 제공 의무가 발동한다. 배포하지 않는 사내 포크, 네트워크 서비스(GPLv2에 네트워크 카피레프트 없음)는 적법 | 경미 권고 5 |
| 14 | 38 | 보고서가 MIT가 "이것을 명시적으로 허용하며 악의적 행위자에 대한 예외 조항이 없다"고 적음 | ✓ 확인 | 원문 "The MIT licence explicitly allows this, and has no carveouts to protect against bad faith actors." | - |
| 15 | 38 | 그 문장이 두 층위를 섞었다는 본문의 비판 | ✓ 타당 | 원문에서 해당 문장 **직전 문장**이 "published without attribution **or** lazily rewritten with LLM assistance"다. 즉 "this"의 선행사에 '고지 제거'가 포함되어 있어, 본문의 지적이 문맥상 성립한다 | - |
| 16 | 38 | "출처 표기를 떼고 재공개하는 것은 MIT에서도 위반" | ✓ 확인 | MIT 조건 그대로 | 경미 권고 6("substantial portions" 단서) |
| 17 | 38 | 보고서가 상대도, 향후 조치도 밝히지 않음 | ✓ 확인 | 보고서에 집행·법적 대응 언급 0건, 실명 0건 | - |
| 18 | 40 | m1n1은 1.9.9까지 MIT, 2.0.0부터 GPL v2-or-later, 그 뒤 체크인 코드만 GPL | ✓ 확인 | README License 절: "made available under the terms of the MIT license until version 1.9.9" / 2.0.0부터 GPLv2 or later, "any code checked in thereafter is available under the terms of the GPL exclusively" | - |
| 19 | 40 | 브라이언 스틸 = OpenBSD 개발자 | ✓ 확인 | brynet@openbsd.org, undeadly.org 2015 인터뷰에서 본인이 OpenBSD 개발자로 소개 | - |
| 20 | 40 | 비판 요지 = "사전 기여자 모두의 동의 없이" | ✓ 확인 | 원문 "relicensing m1n1 and drivers under GPL2-or-later, seemingly without the consent of all prior contributors" — 본문의 "~으로 보인다며"가 원문 "seemingly"를 정확히 옮김 | - |
| 21 | 40 | "공개적으로 비판했다"는 완화 표현(요청 4) | ✓ 문제 없음 | 스틸이 쓴 "disingenuous and misguided", "burning bridges"를 생략했을 뿐 **방향을 바꾸거나 약화시켜 오도하지 않는다.** 생략은 과장의 반대 방향이라 저자 신뢰도 위험이 없다 | - |
| 22 | 40 | 애초에 MIT를 고른 이유가 BSD 쪽에서 쓰게 하려던 것 | ✓ 확인 | 원문 "To facilitate and encourage the participation of our friends at the BSDs and other Free Software operating systems." | - |
| 23 | 42 | WINE은 원래 MIT, 2002년 LGPL로 전환 | ✓ 확인(2곳) | 보고서 원문 "It may surprise some to learn that WINE was originally made available under the MIT licence" / "In 2002, WINE was relicenced under the LGPL to prevent further proprietary forks". winehq 메일링리스트 2002-02 논의 + 2002-03-09 커밋 "Changed license to LGPL" | - |
| 24 | 42 | 아사히가 보고서에서 WINE 선례를 직접 끌어옴 | ✓ 확인 | 보고서 "Learning from history" 절이 WINE으로 시작 | - |
| 25 | 44 | 유출 경로가 main이 아니라 개인 포크 | ✓ 확인 | 원문 "lifted straight out of our personal forks" | 경미 권고 7 |
| 26 | 18~20, 50 | 이미지·크레딧 | ✓ 확인 | 본문 이미지 `public/images/inline/asahi-linux-mit-to-gpl-llm-laundering-m1.jpg` 실재(M1 패키지 + 양옆 메모리 — 캡션과 일치). 커버는 `coverImage: ""`지만 `build_posts_json.py`가 슬러그 동명 파일 `public/images/covers/asahi-linux-mit-to-gpl-llm-laundering.jpg`로 자동 매칭(실재 확인) → **하단 커버 크레딧 줄은 유효**. `_workspace/image-credits-2026.md` 183·184행에 두 장 모두 기록됨 | - |

---

## C. 수정 권고 (우선순위 순)

**치명적: 없음.**

### 경미 1 — 16줄, 애플 문서 공개 범위를 한 칸 좁힐 것
현재: "애플은 이 칩의 내부 동작을 문서로 공개한 적이 없어요."
애플은 **Apple Silicon CPU Optimization Guide**(개발자 계정 필요, 현재 v5)를 공개하고 있다. CPU ISA·SME·성능 이벤트까지 문서화돼 있어 "이 칩의 내부 동작"이라는 범위로 쓰면 반박이 가능하다. 바로 다음 문장이 GPU·디스플레이·전원으로 좁히고 있으니 첫 문장만 맞추면 된다.
→ 권고: "애플은 이 칩에 들어간 주변장치들의 동작을 문서로 공개한 적이 없어요."

### 경미 2 — 7줄(excerpt) vs 16줄, 연수 표기 불일치
excerpt는 "5년 동안", 본문은 "5년 넘게". 실제는 2020년 12월 발표·2021년 1월 착수라 **5년 10~11개월**이다. 둘 다 거짓은 아니지만 excerpt 쪽이 과소 표기다.
→ 권고: excerpt를 "이 프로젝트가 6년 가까이 만들어 낸 것"으로. (본문 "5년 넘게"는 그대로 둬도 무방)

### 경미 3 — 14줄, 보고서의 "극단적인 경우" 한정어가 빠짐
원문은 "In some extreme cases, in-development feature code was being lifted…"로 **여러 시도 중 일부 극단적 사례**로 범위를 좁혔다. 초고는 유출·LLM 재작성을 라이선스 변경의 일반적 사유처럼 제시한다.
→ 권고: "…쓰였다는 겁니다" 앞에 범위를 한 번 표시. 예) "일부 극단적인 사례로는, 개발 중이던 기능 코드가…"

### 경미 4 — 32줄, "알아낸 사실 자체는 누구의 소유도 아닙니다"
아이디어·표현 이분법 자체는 정확하다. 다만 이 단정은 (a) 사실의 **선택·배열**에 대한 편집저작물 보호, (b) 소프트웨어의 구조·순서·조직(SSO) 보호, (c) **영업비밀**로 보호되는 미공개 사실을 모두 사상(捨象)한다. 이 사건에서는 아사히가 알아낸 내용을 스스로 공개해 왔으므로 결론은 달라지지 않지만, 법리 문장으로 단독 인용되면 과도한 단정이다.
→ 권고(선택): "공개된 이상 알아낸 사실 자체는 누구의 소유도 아닙니다" 정도로 조건을 한 단어만 붙일 것.

### 경미 5 — 36줄, "GPL에서는 닫힌 포크로 가는 적법한 길이 아예 없습니다"
GPLv2의 의무는 **배포 시점**에 발동한다. 배포하지 않는 사내 포크, 네트워크 서비스로만 제공하는 경우(GPLv2에 네트워크 카피레프트 없음)는 적법하다. 앞 문장이 "제품으로 파는" 맥락이라 독해상 큰 오해는 없지만, "아예 없습니다"는 반박 가능한 단정이다.
→ 권고: "GPL에서는 제품으로 배포하면서 소스를 닫는 적법한 길이 없습니다."

### 경미 6 — 38줄, MIT 고지 의무의 범위 단서
"출처 표기를 떼고 재공개하는 것은 MIT에서도 위반입니다"는 맞다. 단 MIT 조문은 "copies or **substantial portions** of the Software"에 고지를 요구하므로, 비실질적 일부만 가져간 경우까지 포괄하지는 않는다. 본문 논지(유출된 기능 코드 전체)에는 영향이 없어 **수정하지 않아도 되는 수준**이다. 기록용.

### 경미 7 — 44줄, "공개되지 않은 브랜치"라는 표현
보고서는 포크가 **비공개였다고 말하지 않는다.** "unreleased/in-development"(아직 릴리스하지 않은)와 "비공개(private)"는 다른 말이고, 깃허브 개인 포크는 보통 공개다. 현재 문장은 사설 저장소 침해처럼 읽힐 여지가 있다.
→ 권고: "아직 릴리스하지 않은 개인 포크도 배포면으로 취급해야 한다는 이야기죠."

### 참고(수정 불필요) — 42줄 "구조적으로 똑같았습니다"
2002년 WINE의 사유는 '독점 포크가 변경사항을 돌려주지 않음'이고, 이번은 '고지가 지워짐'이다. 동일한 것은 **"퍼미시브의 암묵적 거래를 집행할 수단이 없다"**는 층위뿐이다. 본문 바로 앞 문장이 이미 그 층위를 세워 놓았으므로 논리적 비약은 아니다. 다만 비교 근거를 한 구절로 명시해 두면 더 단단하다. 예) "집행할 면이 없다는 점에서 구조가 똑같았습니다."

---

## D. 종합 판정

- [x] **발행 가능** — 치명적 오류 0건. 경미 1·2·3·5·7은 반영을 권고하나 발행을 막지 않음.
- [ ] 수정 후 발행
- [ ] 발행 보류

**검증 강도:** 1차 출처 2건(asahilinux.org 보고서 본문, m1n1 README License 절)을 직접 확인했고, 인물·의존관계·선례는 2차 출처 2곳 이상으로 교차했다. 보고서 인용 7건은 모두 원문과 일치하며 **존재하지 않는 발언·날짜 오류·자릿수 오류는 없다.**

**팩트 카드가 친 경고선을 초고가 모두 지켰다:** m1n1 2.0.0 출시일 미주장, 특정 상대 미지목, 2차 보도가 거론한 포크(Aurora Silicon/Borealis, Gravity Linux) 미언급 — 보고서가 지목하지 않은 이름을 본문에 끌어들이지 않은 판단이 옳다.

### 1차 출처
- https://asahilinux.org/2026/11/progress-report-7-3/ (보고서 본문, 2026-11-07, James Calligeros)
- https://github.com/AsahiLinux/m1n1 (README License 절)
- https://openbsd.org/arm64.html · OpenBSD `distrib/notes/arm64/prep` (m1n1 의존)
- https://developer.apple.com/documentation/apple-silicon/cpu-optimization-guide (경미 1의 근거)
- winehq.org 메일링리스트 2002-02 아카이브 + 2002-03-09 라이선스 변경 커밋

### 2차 출처
- https://itsfoss.com/news/asahi-linux-drops-mit-for-gpl/ (스틸 발언 전문, 포크 맥락)
- https://news.slashdot.org/story/26/11/09/0440238/
- https://www.undeadly.org/features/2015/10/beastie_pl_interviews/bryan-steele.html (브라이언 스틸 = brynet@, OpenBSD 개발자)
