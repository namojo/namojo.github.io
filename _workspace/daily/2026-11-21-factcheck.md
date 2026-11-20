# Fact Check Report: macos-agent-permission-split

- 대상: `_posts/2026-11-21-macos-agent-permission-split.md`
- 팩트 카드: `_workspace/daily/2026-11-21-brief.md`
- 검증 수행: 2026-11-20 (발행 예정일 2026-11-21 KST)
- 판정 요약: **수정 후 발행** — 치명적 1건(날짜 오류), 경미 5건, 출처 보강 1건. 시점 규율 위반 없음.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-21
- **본문 언급 사건:**

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 애플 개발자 공지 "Updates to Device Control and Data Access, and Full Disk Access in macOS" | 2026-11-16 | 이전 ✓ | 유지 |
| macOS 27.3 beta 2 배포 | 2026-11-16 | 이전 ✓ | 유지 |
| 거먼(블룸버그) 4단계→14단계 보도 | 2026-11-19 | 이전 ✓ | 유지 |
| 애플 Agentic AI 채용 공고 보도 | 2026-11-19 (공고 자체는 11-17 게시설) | 이전 ✓ | 유지 |
| 구글 맥용 Gemini 컴퓨터 사용 출시 | 2026-11-19 | 이전 ✓ | **본문의 "하루 앞선" 표현은 오류 — C-1 참조** |
| macOS 27(Golden Gate)에서 권한 칸 이동 | 2026년(27 정식) | 이전 ✓ | 유지 |
| 미 법무부 반독점 소송 계류 | 2024 제소, 2026-11 현재 디스커버리 단계 | 이전 ✓ | 유지 |

- **베타/출시 상태 (지시 8번):** **[확인]** 본문은 27.3을 출시된 것으로 쓰지 않았다. "macOS 27.3 베타 2에 들어간 변경"(12줄), "같은 베타에서 다른 것도 함께 관측됐습니다"(36줄), "베타의 단계 수는 정식 출시 전에 바뀌니까요"(42줄)로 세 번 베타임을 명시한다. 정식 출시 시점(12월 관측)은 본문에 쓰지 않았는데, 확정이 아니므로 적절한 생략이다.
  - 다만 34줄 "설치 안내서와 응대 스크립트가 **곧 틀려집니다**"는 베타 변경이 그대로 출시된다는 전제를 단정한다 → C-4(경미).
- **사후 시점 표현:** "훗날", "결국", "돌이켜보면" 류 없음. ✓
- **용어 시점성:** "컴퓨터 사용(computer use)", "System & App Protection Override", "entitlement" 모두 2026-11-16~19 시점에 존재. ✓

---

## B. 사실 검증

### 1. 애플 개발자 공지(11-16)의 내용 — **[확인]**

공지 원문을 직접 확인했다(https://developer.apple.com/news/?id=oqng0zjk). 본문의 대응 서술을 1:1로 대조한 결과 전부 일치한다.

| 본문 서술 | 공지 원문 | 판정 |
|---|---|---|
| 하나였던 권한을 둘로 가른다 | "A split of Device Control and Data Access into two settings: (1) System & App Protection Override, and (2) Accessibility" | ✓ |
| 전체 디스크 접근은 필요한 폴더만 | "Guidance to encourage users to grant access to just the specific apps (for System & App Protection Override) or folders (for Full Disk Access) that are required for their workflows" | ✓ |
| 필요할 때마다 묻도록 설정 | "The option for users to configure apps to ask every time they require access" | ✓ |
| 조작 중 표시기 | "A transparency indicator when a requesting app is controlling another app using System & App Protection Override" | ✓ |
| 기존 승인은 그대로 유지 | "All app permissions previously granted by users will remain in effect." | ✓ |
| 애플이 아는 앱들은 영향 없음 | "Currently, known apps aren't affected and will keep the same experience without an entitlement." | ✓ |
| 백업 앱·보조 기술 앱은 entitlement 신청 | "Developers of apps that use Full Disk Access for disk backup, or the new Accessibility settings to provide assistive technologies, can request entitlements..." | ✓ |
| 세부는 추후 공개 | "Additional entitlement details will be available soon." | ✓ |
| 제한된 폴더·앱만 받아도 정상 동작하게 하라 | "make sure their apps can gracefully handle having access to only a limited set of folders or apps" | ✓ |
| 새로 설치하는 경우가 바뀜 | "Users will see these updates when approving new app permission requests." + entitlement은 "for new installations" | ✓ |

보조 확인: MacRumors 2026-11-16(표시기가 메뉴 막대에 표시된다는 세부 추가), Daring Fireball 2026-11-16 링크.

### 2. macOS 27.2 애플 설명문("메일을 보고 보내고…") — **[출처 부족 / 경미 수정 권고]**

- 실제 문구는 9to5Mac이 애플 설명으로 인용한 다음 목록이다: **"view and send email, edit contacts and photos, monitor your keyboard, track websites, record your screen, control any app on your Mac, and more."**
- 본문이 옮긴 세 항목(메일·연락처와 사진·키보드)은 이 목록의 **정확한 부분집합**이며 왜곡은 없다. ✓
- 다만 본문은 이를 **"27.2 기준 애플 지원 문서"**의 서술로 특정했는데, 이 목록이 실린 애플 1차 문서(지원 문서 URL)는 확인되지 않았다. 512pixels가 인용한 9to5Mac 기사에 링크된 애플 지원 문서는 전체 디스크 접근 프롬프트를 다루고 있고 이 목록은 담고 있지 않다. 출처는 **9to5Mac이 전한 애플의 설명**까지만 확정된다 → C-2.

### 3. macOS 27의 권한 칸 이동 + 마이크로소프트 DLP 서술 — **[확인]**

- 마이크로소프트 Purview 문서(https://learn.microsoft.com/purview/endpoint-dlp-macos-27-changes) 원문 확인:
  - "Before macOS 27 (Golden Gate), Endpoint DLP relied on the **Accessibility** permission for browser and website visibility. In macOS 27, **Device Control and Data Access** manages this capability."
  - "In macOS 27, the permission is under **Settings > Privacy & Security > Device Control and Data Access**. In earlier macOS versions, the permission is under **Settings > Privacy & Security > Accessibility**."
- 따라서 본문 30줄 "macOS 27에서 이 설정은 '손쉬운 사용'에서 '기기 제어 및 데이터 접근'으로 자리를 옮겼거든요"는 정확하다. ✓
- **"과장이 아닌지" 확인 결과 — 과장 아님.** 마이크로소프트 문서는 이 권한의 용도를 "identify the active browser, website, application, and file associated with user activity", "browser and website visibility"로 명시하고, 권한이 꺼지면 "Safari, Chrome, Firefox의 URL·브라우저 컨텍스트를 더 이상 얻을 수 없다"고 적는다. 본문의 "어느 사이트를 보는지 알아내려고 이 권한을 씁니다"는 문서의 서술 범위 안이다. ✓
  - (선택적 보강: 목적이 감시가 아니라 업로드·붙여넣기 DLP 정책 판정이라는 점을 반 줄 덧붙이면 더 정확하다. 필수 아님.)
- **별도 확인:** macOS 27이 여러 권한(입력 모니터링·화면 기록)을 하나로 **병합**했다는 근거는 찾지 못했다. 입력 모니터링은 macOS 27에서도 별도 항목으로 유지된다. 본문은 병합을 주장하지 않으므로 문제없음. ✓

### 4. 거먼 보도(11-19) — **[확인]**

| 본문 서술 | 확인 결과 |
|---|---|
| 11월 19일 보도 | ✓ 거먼 X 게시 2026-11-19, TechCrunch 동일 일자 |
| 4단계 → 14단계 | ✓ "14 distinct steps, up from four" — 복수 매체 일치 |
| 경고가 "이 맥이 당신의 데이터를 그 앱으로부터 보호할 수 없다"로 시작 | ✓ 거먼 공개 스크린샷 첫 문장 "Your Mac will not be able to protect your data from…" 이후 읽기·변경·삭제·반출 가능 항목 나열 (techbetweenthelines 2026-11-19 인용) |
| 채용 공고 "사람이 컴퓨터를 쓰듯 컴퓨터를 쓸 수 있는 AI 에이전트" | ✓ 공고 원문 "use a computer the way a capable person does" — MacRumors·Macworld가 공고 인용. 직책은 Senior Engineering Manager, Agentic AI (Proactive) |
| 애플은 확인해 주지 않았고 | ✓ "Apple did not respond to requests for comment" |
| 나와도 빨라야 2027년 말 | ✓ 블룸버그 "as soon as the end of next year" = 2027년 말, 개발 초기 단계 |

참고(본문 반영 불필요): 경고 스크린샷에 등장한 앱 이름은 매체마다 "Codex Computer Use app"과 "ChatGPT.app"으로 갈린다. 본문은 앱 이름을 적지 않아 안전하다. 또한 채용 공고는 이후 애플 채용 사이트에서 내려갔다는 보도가 있다(본문 주장과 충돌 없음).

### 5. 구글 맥용 Gemini(11-19) — **[확인 / 단, 날짜 표현 오류]**

- 구글 공식 블로그 및 9to5Google·MacRumors·SiliconANGLE 모두 **2026-11-19** 출시로 일치. ✓
- "사용자가 접근 허용 앱을 고를 수 있다" ✓ — 구글 블로그가 사용자가 접근 앱을 선택한다고 명시, Decrypt는 허용/차단 목록 생성 가능으로 보도. 격리된 백그라운드 창, 주요 동작 전 승인도 확인됨.
- **그러나 본문 44줄 "하루 앞선 11월 19일"은 오류** — 바로 앞 문단에서 거먼 보도를 11월 19일로 적었으므로 같은 날이다. 어느 기준으로도 "하루 앞선"이 성립하지 않는다 → **C-1(치명적)**.
- 참고(수정 불필요): ChatGPT 컴퓨터 사용도 앱 안에서 앱별 승인("항상 허용")을 받는다. 본문이 "구글만"이라고 쓰지 않았으므로 오류는 아니며, 오히려 본문의 결론("앱이 아무리 곱게 물어봐도 OS가 내준 권한은 전부였다")을 강화한다.

### 6. 반독점 소송 서술 — **[확인]**

- 미 법무부 외 주들이 제기한 United States v. Apple(2024, 뉴저지 연방지법)은 2026-11 현재 **디스커버리 단계로 계류 중**이며, 애플의 기각 신청은 받아들여지지 않았다. 2026-10 문서 제출 기한을 둘러싼 교착, 2026-07 블룸버그의 합의 논의 보도가 있으나 소 취하·종결은 없다.
- 소장의 핵심 주장에 **서드파티의 기능·하드웨어 접근 차단**(슈퍼앱, 클라우드 게임, 메시징, 스마트워치, 디지털 지갑)이 포함된다는 점도 블룸버그 보도가 이번 건과 묶어 언급했다. 본문 42줄 "애플이 서드파티의 기능 접근을 막았다는 혐의로 이미 소송을 받고 있다"는 정확하다. ✓
- 선택적 보강: 주체를 "미 법무부"로 한 단어 명시하면 더 단단해진다(필수 아님) → C-6.

### 7. 메커니즘 서술의 기술적 정확성 — **[대체로 확인 / 경미 수정 2건]**

**맞는 부분:**
- 접근성 API가 다른 앱의 UI 요소 트리(버튼·이름·위치·활성 상태)를 읽고, 합성 입력 이벤트로 클릭·입력을 보낸다 → 맥의 Accessibility(AXUIElement) API와 이벤트 합성의 표준적 설명으로 정확하다. ✓
- **all-or-nothing이었다는 서술** ✓ — 개발자 커뮤니티에서 직접 확인됨. Michael Tsai(2026-11-17)는 기존 권한을 "the old Accessibility permission that was **not per-target-app**"으로 명시한다. 마이크로소프트 문서가 보여 주듯 DLP·원격 지원·창 정렬 유틸리티가 모두 같은 칸을 쓰는 상태였다는 점도 이를 뒷받침한다. ✓
- 화면 낭독기·스위치 제어 사용자가 모든 앱·모든 창을 다뤄야 하므로 쪼갤 수 없었다는 설명 ✓(macOS의 VoiceOver·스위치 제어 기능 설명과 일치).

**과장·누락 2건:**

- **(a) "요즘 나오는 컴퓨터 사용 에이전트가 하는 일이 정확히 이겁니다"(18줄) — 절반만 맞다.** OpenAI 공식 문서(learn.chatgpt.com/docs/computer-use) 기준 맥에서 컴퓨터 사용은 **두 개의 권한**을 쓴다: 대상 앱을 **보기 위한 화면 기록(Screen Recording)** + **클릭·입력을 위한 접근성(Accessibility)**. 즉 '보는' 쪽은 UI 트리 읽기가 아니라 화면 캡처인 경우가 많고, 접근성 권한은 주로 '조작'을 담당한다. 화면 기록은 지금도 별도 TCC 권한이며 이번 분리 대상이 아니다. → C-3.
- **(b) "다른 앱을 조작하는 길은 오래전부터 하나였습니다"(18줄) / "거기서 처음으로 범위라는 게 생겨요"(32줄) — 반론 여지 있음.** 맥에는 Apple Events/AppleScript 자동화 경로가 따로 있고, 그 권한(Automation, 자동화)은 Mojave 이후 **대상 앱 단위로 이미 쪼개져 있었다**. Michael Tsai도 이번 변경에서 'control'이라는 단어가 Automation 창의 용어와 겹쳐 혼란스럽다고 지적한다. 본문의 주장은 "GUI를 통째로 조작하는 경로"에 한정하면 맞다 → C-5.

**추가 메모(수정 불필요):** 27.3 베타의 실제 설정 화면에서 어떤 앱이 Accessibility로 남고 어떤 앱이 Override로 가는지의 매핑은 아직 깔끔하지 않다는 개발자 관찰이 있다(Tsai: Accessibility 창 설명문에 여전히 "control apps as if they were you"가 남아 있음). 본문 32줄은 애플이 공지에서 밝힌 **의도**를 서술한 것이므로 허용 범위이나, 단정 어조를 조금 낮춰도 좋다.

### 8. 날짜·수치·고유명사 철자 — **[확인]**

- "11월 16일"(공지) ✓ / "11월 19일"(거먼·구글) ✓ / "네 단계 → 열네 단계" ✓ / "2027년 말" ✓ / "macOS 27.3 베타 2" ✓ / "macOS 27" ✓
- 고유명사: Device Control and Data Access ✓, System & App Protection Override ✓(`&` 표기 포함 공지와 일치), Accessibility ✓, Full Disk Access ✓, entitlement ✓, 마크 거먼 ✓, 블룸버그 ✓, Gemini ✓, ChatGPT ✓
- 한글 표기: "손쉬운 사용"은 애플 한국어 UI의 Accessibility 명칭 ✓. **"기기 제어 및 데이터 접근"은 애플 한국어 UI 문자열로 확인되지 않았다**(한국어 보도·애플 ko 문서 모두 미확인). 다만 본문 12줄에서 영문을 괄호로 병기한 뒤 사용하므로 독자 오인 위험은 낮다. 그대로 두어도 무방.
- 이미지: 본문 인라인 1장 + 하단 커버 크레딧 1줄, `_workspace/image-credits-2026.md` 195~196행과 피사체·출처가 일치한다 ✓. (발행 전 `public/images/covers/macos-agent-permission-split.jpg`, `public/images/inline/macos-agent-permission-split-braille.jpg` 두 파일의 실제 존재만 빌드 단계에서 확인할 것 — 팩트 사항은 아님.)

---

## C. 수정 권고 (우선순위 순)

**C-1. [치명적] 44줄 — 날짜 오류 (같은 글 안에서 모순)**

현재:
> 구글은 **하루 앞선** 11월 19일 맥용 Gemini에도 컴퓨터 사용 기능을 붙이면서,

38줄에서 거먼 보도를 11월 19일로 적었으므로 같은 날이다. 대체 문구:
> 구글은 **거먼의 보도와 같은 날인** 11월 19일, 맥용 Gemini에도 컴퓨터 사용 기능을 붙이면서,

(혹은 더 짧게: "구글은 **같은 11월 19일**, 맥용 Gemini에도…")

**C-2. [경미] 30줄 — 출처 특정 완화 + 인용 목록 보강 권고**

현재:
> 27.2 기준 **애플 지원 문서는** 이 권한을 받은 앱이 할 수 있는 일을 이렇게 적어 뒀습니다. 메일을 보고 보내고, 연락처와 사진을 편집하고, 키보드를 감시한다.

이 목록이 실린 애플 1차 문서는 확인되지 않았다(9to5Mac이 애플 설명으로 인용). 권고:
> 27.2에서 **애플이 이 권한을 설명한 문구는** 그 앱이 할 수 있는 일을 이렇게 늘어놓습니다. 메일을 보고 보내고, 연락처와 사진을 편집하고, 키보드를 감시하고, 어떤 사이트를 보는지 따라다니고, 화면을 녹화한다.

(뒤 두 항목을 되살리면 C-3의 누락 지적도 함께 해소된다. 원문: "view and send email, edit contacts and photos, monitor your keyboard, track websites, record your screen, control any app on your Mac, and more.")

**C-3. [경미] 18줄 — 메커니즘 단정 완화 (화면 기록 권한 누락)**

현재:
> 그리고 직접 만든 입력 이벤트를 던져 그 버튼을 누릅니다. 요즘 나오는 컴퓨터 사용(computer use) 에이전트가 하는 일이 정확히 이겁니다.

권고(한 문장 추가):
> 그리고 직접 만든 입력 이벤트를 던져 그 버튼을 누릅니다. 요즘 나오는 컴퓨터 사용(computer use) 에이전트가 화면을 누르고 입력하는 경로가 이겁니다. 화면을 보는 쪽은 화면 기록이라는 다른 권한이 맡고, 손에 해당하는 쪽이 이 권한이에요.

**C-4. [경미] 34줄 — 베타를 기정사실로 쓴 단정 완화**

현재:
> 사내에 에이전트나 자동화 도구를 배포하고 있다면 설치 안내서와 응대 스크립트가 곧 틀려집니다.

권고:
> 사내에 에이전트나 자동화 도구를 배포하고 있다면, 이대로 정식 출시되는 순간 설치 안내서와 응대 스크립트가 틀려집니다.

**C-5. [경미] 18줄 또는 32줄 — "유일한 길"·"처음으로"의 사정거리 긋기**

Apple Events/AppleScript 자동화(Automation 권한)는 오래전부터 대상 앱 단위로 쪼개져 있었다. 18줄을 한 단어로 좁히는 쪽을 권한다:
> 맥에서 한 앱이 다른 앱의 **화면을 직접** 조작하는 길은 오래전부터 하나였습니다. 접근성 API입니다.

32줄의 "거기서 처음으로 범위라는 게 생겨요"는 위 수정이 들어가면 그대로 두어도 무방하다.

**C-6. [경미·선택] 42줄 — 소송 주체 명시**

> 애플이 **미 법무부로부터** 서드파티의 기능 접근을 막았다는 혐의로 이미 소송을 받고 있다는 점도 같이 놓고 보면요.

**C-7. [참고·수정 불필요]** 32줄 "진짜 보조 기술은 Accessibility에 남기고, 나머지를 전부 반대쪽으로 보냅니다"는 애플이 밝힌 의도로는 정확하나, 베타 UI의 실제 매핑은 아직 불분명하다는 개발자 관찰이 있다(Michael Tsai, 2026-11-17). 어조를 낮출 생각이 있다면 "보냅니다" → "보내겠다는 겁니다" 정도.

---

## D. 종합 판정

- [ ] 발행 가능
- [x] **수정 후 발행** — C-1(치명적, 날짜) 반영 필수. C-2·C-3는 신뢰도에 직접 영향이 있어 함께 반영 권고. C-4·C-5·C-6은 선택.
- [ ] 발행 보류

**시점 규율:** 위반 없음. 인용된 모든 사건이 발행일 이전이며, macOS 27.3이 베타임을 본문이 세 차례 명시한다.
**팩트 카드 대조:** 카드의 "주의" 5개 항목(베타·채용 공고 미확인·14단계는 ChatGPT 한정·entitlement 기준 미공개·macOS 27 이름 변경은 MS 문서 근거)은 모두 본문에서 지켜졌다. 다섯 번째 항목(단정 수위)은 마이크로소프트 1차 문서를 직접 확인해 단정해도 무방한 수준임을 이번에 확인했다.

### 검증에 사용한 출처

| 항목 | URL |
|---|---|
| 애플 개발자 공지 원문 | https://developer.apple.com/news/?id=oqng0zjk |
| 마이크로소프트 Purview Endpoint DLP on macOS 27 | https://learn.microsoft.com/purview/endpoint-dlp-macos-27-changes |
| MacRumors (27.3 변경·표시기 위치) | https://www.macrumors.com/2026/11/16/macos-27-3-full-desk-access/ |
| 512 Pixels (27.2 설명문·메일/메시지 예시, 9to5Mac 인용) | https://512pixels.net/2026/11/macos-27-3-bringing-new/ |
| Daring Fireball (27.3b2 정리) | https://daringfireball.net/linked/2026/11/16/macos-27-full-disk-access |
| Michael Tsai — System & App Protection Override (개발자 관찰, all-or-nothing 확인) | https://mjtsai.com/blog/2026/11/17/system-app-protection-override/ |
| techbetweenthelines (거먼 경고 문구 인용 + Gemini 맥) | https://www.techbetweenthelines.com/gemini-mac-computer-use-macos-27-3/ |
| The Tech Portal (14단계·채용 공고·2027년 말·DOJ 소송·애플 무응답) | https://thetechportal.com/2026/11/20/apple-building-its-own-ai-agent-to-operate-your-mac-while-macos-27-3-makes-rival-agents-harder-to-enable/ |
| 9to5Google (Gemini 맥 컴퓨터 사용, 11-19) | https://9to5google.com/2026/11/19/gemini-mac-computer-use/ |
| 구글 공식 블로그 (Gemini 컴퓨터 사용 for Mac) | https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/ |
| OpenAI Computer Use 문서 (화면 기록 + 접근성 2개 권한) | https://learn.chatgpt.com/docs/computer-use |
| United States v. Apple (2024) 현황 | https://en.wikipedia.org/wiki/United_States_v._Apple_(2024) |
| DOJ-애플 디스커버리 교착 (2026-10-21) | https://appleinsider.com/articles/26/10/21/apple-doj-antitrust-suit-reaches-impasse-over-document-collection |
