# Fact Check Report: 2026-11-27-android-developer-verification-package-registry

- **검증일:** 2026-11-27
- **초고:** `_posts/2026-11-27-android-developer-verification-package-registry.md`
- **팩트 카드:** `_workspace/daily/2026-11-27-brief.md` (카드 자체도 검증 대상으로 다룸 — 오류 1건, 누락 1건 발견)
- **종합 판정:** **수정 후 발행** — 치명적 1건(1월/3월 시행 범위), 중간 1건(제한 배포 20대→50대), 경미 4건

---

## A. 시점 일관성 (최우선 검사)

**발행일:** 2026-11-27 (KST)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 구글 발표(글로벌 확대 계획) | 2026-11-19 | 이전 ✓ | 유지 — 공식 블로그 게시일 `19 Nov 2026` 확인 |
| 브라질·인도네시아·싱가포르·태국 시행 | 2026-09-30 | 이전 ✓ | 유지 |
| 개발자 API·제한 배포 계정·고급 절차 출시 | 2026-08 | 이전 ✓ | 본문 미언급(문제 없음) |
| 글로벌 롤아웃 '시작' | 2027-01 | **이후** | 미래 시제로 서술됨 ✓ |
| 7개 외 스토어 적용 목표 | **2027-03-01** | **이후** | **본문에 없음 → 치명적 누락(C-1)** |

- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" 등 **없음** ✓
- **"예정 vs 완료" 혼동:** 전반적으로 "~한다고 합니다", "~게 됩니다"로 미래형 유지 ✓.
  단 **"1월 이후로는 ~ 없게 됩니다"가 시행 범위를 1월에 몰아넣어 사실상 완료형으로 읽힘** → C-1 참조.
- **용어 시점성:** `Android developer verification`, `advanced flow`, `adi-registration.properties`,
  `Android Studio Panda 4`, `Android Developer Console API` 모두 2026-11-27 시점에 존재 ✓
- **`_style/ai-timeline.md` 대조:** 안드로이드 개발자 인증 관련 기존 엔트리 **없음**. 모순 없음.
  (발행 후 타임라인에 2026-09-30 / 2026-11-19 / 2027-01 / 2027-03-01 추가 권고 — fact-checker 소관 밖이나 메모)

---

## B. 사실 검증

| # | 주장 (초고) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 구글이 **11월 19일** 발표 | ✓ 확인 | 공식 블로그 "Expanding Android developer verification in 2027", 게시일 `19 Nov 2026`, 저자 Matthew Forsythe(Director, PM, Android App Safety). Android Authority도 2026-11-19 보도 | 유지 |
| 2 | **7개 배포처** — 구글 플레이, 갤럭시 스토어, 아너, 오포, 샤오미, 트랜션, 비보 | ✓ 확인 | 공식 블로그 원문: "in partnership with seven app distributors (Google Play, Galaxy Store, Honor, Oppo, Xiaomi, Transsion, and Vivo)". 배포자 가이드도 동일 7곳 | 빠짐·더함 없음. 유지 |
| 3 | 9월 30일 시행 **4개국** 브라질·인도네시아·싱가포르·태국 | ✓ 확인 | 공식 타임라인: "Protections begin for all users who install apps from participating stores in Brazil, Indonesia, Singapore, and Thailand" | 유지. 단 "참여 스토어" 한정 누락(C-4) |
| 4 | **안드로이드 8(API 26) 이상** | ✓ 확인 (초고가 맞음) | 공식 FAQ "What Android versions...": "all certified Android devices running Android 8 (API level 26) or higher" *(Last updated: November 10, 2026)*. 공식 블로그의 "certified Android devices" 링크도 이 FAQ 앵커를 가리킴 | 유지. **Android Authority의 "Android 7.0 or newer"가 오보** |
| 5 | 검사 기능은 구글 플레이 서비스로 전달 | ✓ 확인 | 같은 FAQ: "These updates are delivered through Google Play services" | 유지 |
| 6 | 서명키 분실 시 **패키지 등록 불가**, 우회 절차 없음 | ✓ 확인 | FAQ 원문: "**Can I recover a lost signing key?** We strongly recommend all developers use a secure key management solution. If you lose your signing key you won't be able to register your packages." *(Last updated: March 23, 2026)* — 초고 인용과 의미 일치. 복구 절차 기재 없음 | 유지 (보강 메모는 C-5) |
| 7 | 분쟁 규칙: **50% 초과 키 우선 / 과반 없으면 50건 이상 키 모두 자격 / 그것도 없으면 선착순** | ✓ 확인 | 지원센터 16640821: 키가 "over 50% of total known installs"면 우선, 과반 없으면 "every key with 50 or more installs is eligible", 50건 도달 키가 없으면 "any key may be used on a first-come, first-served basis" | 숫자·조건 모두 정확. 유지 |
| 8 | 자격 없으면 요청 가능하되 **거절될 수 있다** | ✓ 확인 | 같은 페이지: 요청 절차는 "requires a request to Google, **which may be rejected**". FAQ "Can I register without an eligible key": "You should consider using a different package name. If this is not possible, you can request to register the package name, but this will require an additional review" | 유지 |
| 9 | 기존 패키지 소유권 증명: **assets 폴더에 `adi-registration.properties` → 릴리스 APK 재빌드 → 업로드** | ✓ 확인 | 지원센터 16640821: 파일명을 "exactly `adi-registration.properties`"로 생성 → **assets** 폴더에 배치 → 콘솔에서 복사한 스니펫 삽입 → 릴리스 APK 빌드 후 선택한 공개 인증서에 대응하는 개인키로 서명(jarsigner 또는 Gradle `signingConfigs`) → 업로드. 섹션 제목 "Step 3: Verifying private key ownership (existing packages only)" | **철자 정확**. 유지 |
| 10 | 새 패키지 이름은 **공개 키 인증서만** 제출 | ✓ 확인 | 같은 페이지: "For a new package name that has never been seen on Android, you just need to provide the public key certificate." APK 업로드 불필요 | 유지 |
| 11 | **D-U-N-S 번호 발급 최대 28일** | ✓ 확인 | FAQ: "The process can take up to 28 days so you should make preparations to obtain a D-U-N-S number." 법인(organization) 등록 시 필수 | 유지 |
| 12 | 제한 배포 계정 **20대**, 신분증·수수료 없음 | ✗ **오류 (20대 → 50대)** | **11/19 공식 블로그가 상향을 발표**: "we expanded the sharing limit **from 20 to 50 authorized devices**". 공식 가이드 현행: "Share apps with up to **50** devices that end-users have explicitly authorized" / "This account is free" / "you don't need to provide a government ID" | **수정 필수**(C-2). 신분증·수수료 없음은 ✓ |
| 13 | 고급 절차: 개발자 모드 → 강압 여부 확인 → 재부팅 → **24시간 대기** | ✓ 확인 | FAQ "How does the advanced flow work for users?" 4단계 일치 + "Why is there a 24-hour waiting period" 별도 항목. 활성화 후 7일 또는 무기한 선택, 설치 시 경고는 계속 표시 | 유지 |
| 14 | **ADB 설치는 예외** (24시간 대기 미적용) | ✓ 확인 | FAQ: "Apps installed using ADB won't require verification" / "The waiting period does not apply to ADB installs" | 유지 |
| 15 | 미등록 앱은 고급 절차 또는 ADB로만 **설치·업데이트** 가능 | ✓ 확인 (강함) | FAQ 두 항목이 각각 명시: "Unregistered apps can only be installed **or updated** when the advanced flow is enabled or by using ADB so if the advanced flow is disabled updates to unregistered apps will fail." *(Mar 25, 2026)* + "Can I update existing unregistered apps ... without advanced flow and/or ADB? **No.**" | **글의 핵심 장면을 뒷받침함.** 유지 |
| 16 | **MDM 관리 기기 사내 스토어 배포는 면제**, 포털 APK 방식은 해당 없음 | ✓ 확인 | FAQ: "Apps distributed through your organization store, on managed devices, won't need to complete the verification requirements since your IT admin has vetted them. However, we recommend to still register ... if the app is downloaded from **another source (not the managed store) or to a non-managed device**." → 면제 요건이 '조직 스토어 + 관리 기기' 둘 다이므로 사내 포털 APK 직접 내려받기는 면제 밖. 초고의 구분 정확 | 유지 |
| 17 | 등록 상태 확인: 플레이 콘솔 / 안드로이드 개발자 콘솔 **Package names 탭** | ✓ 확인 | FAQ "Where can I check the status...": Play Console의 Android developer verification 페이지 / Android Developer Console의 **Package names** 탭(Registered, Not registered, Draft) | 유지. 문장 구조만 경미 손질(C-6) |
| 18 | **안드로이드 스튜디오 Panda 4 이상**에서 서명 빌드 시 표시 | ✓ 확인 | 같은 FAQ: "available in **Android Studio Panda 4** and higher", 서명된 App Bundle·APK 생성 시 표시 | 버전명 정확. 유지 |
| 19 | 콘솔 API로 CI 파이프라인 자동화 가능 | ✓ 확인 | FAQ: "the APIs are specifically designed to streamline registration in bulk or directly through continuous integration and deployment pipelines". Android Developer Console API(등록·키 관리) / Developer ID Status API(상태 조회) | 유지 |
| 20 | 구글이 "이미 사용 중인 이름이면 다른 이름을 고려하라"고 적음 | ✓ 확인 | FAQ: "You should consider using a different package name." | 유지 |
| 21 | **"1월까지 다섯 주"** | ✓ 확인 (계산 정확) | 2026-11-27 → 2027-01-01 = **35일 = 정확히 5주** | 산술은 유지. 다만 "무엇까지 5주인가"의 의미가 C-1에 걸림 |
| 22 | 1월에 시작해 **이후 수개월에 걸쳐 모든 국가·모든 설치 경로로** 확대 | ✓ 확인 | 공식 블로그: "User protections will continue to gradually expand to all countries to cover all installation sources on certified Android devices **over several months**." | 유지 — 다만 본문 뒷부분이 이 단계성을 지키지 않음(C-1) |
| 23 | 7개 외 스토어·전 설치 경로 적용 시점 **2027-03-01** | ? **본문 누락** | 배포자 가이드: "will be in effect for other stores by **March 2027**", 마일스톤 표 "**March 1, 2027** (Target readiness)", 샘플 메일 "All developers should verify their identity and register their apps **by March 1, 2027** to ensure uninterrupted distribution" | **추가 필요**(C-1) |

---

## C. 수정 권고 (우선순위 순)

### C-1. [수정필요-치명적] 본문 30줄 — "1월 이후"로 차단 시점을 단정

> **초고:** "이 앱은 지금도 멀쩡히 돕니다. 그런데 **1월 이후로는 새로 깔 수도, 업데이트할 수도 없게 됩니다.**"

**문제:** 2027년 1월은 **7개 배포처(스토어)를 통한 설치**에 한해 롤아웃이 *시작*되는 시점이다.
초고의 시나리오(사내 포털에 APK를 올려 두고 직원이 직접 내려받음)는 스토어 경유가 아니라
**설치 경로 전반(all installation sources)** 에 해당하며, 공식 문서는 이를 "1월부터 수개월에 걸쳐"
확대한다고만 했고 배포자 가이드는 **2027년 3월 1일을 목표 시점**으로 제시한다.
즉 "1월 이후로는 설치·업데이트 불가"는 **시행 범위를 1월로 앞당긴 단정**이며,
글의 핵심 장면과 마무리("다섯 주 남았습니다")가 이 단정 위에 서 있어 치명적으로 분류한다.

**제안 문장:**
> "이 앱은 지금도 멀쩡히 돕니다. 그런데 롤아웃이 스토어를 넘어 설치 경로 전반으로 번지면 새로 깔 수도, 업데이트할 수도 없게 됩니다. 1월에 일곱 개 배포처로 시작하고, 구글이 나머지 스토어에 제시한 목표 시점은 3월 1일입니다."

- 근거: https://developer.android.com/blog/posts/android-developer-verification-2027
- 근거: https://developer.android.com/developer-verification/guides/distributor-resources

**연동 수정 2곳:**

(a) **excerpt(7줄)**
> **초고:** "1월부터 안드로이드 앱은 등록된 패키지 이름이라야 깔립니다."

전 경로 일괄 적용으로 읽힌다.
> **제안:** "내년 1월부터 안드로이드 앱은 등록된 패키지 이름이라야 깔리기 시작합니다."

(b) **본문 38줄 마무리**
> **초고:** "다섯 주 남았습니다."

'다섯 주 뒤 차단'으로 읽힐 수 있다. 시작 시점임을 드러내는 편이 안전하다.
> **제안:** "다섯 주 뒤에 시작됩니다."

---

### C-2. [수정필요-중간] 본문 36줄 — 제한 배포 계정 기기 수가 **20대가 아니라 50대**

> **초고:** "테스트 배포가 **20대 이하**라면 신분증도 수수료도 없는 제한 배포 계정이 따로 있고"

**문제:** 바로 이 11월 19일 발표에서 상향된 수치다. 공식 블로그가
"we expanded the sharing limit **from 20 to 50 authorized devices**"라고 적었고,
현행 가이드도 "Share apps with up to **50** devices"로 갱신돼 있다.
같은 발표를 다루는 글이 구 수치를 쓰면 신뢰가 직접 깎인다.

> **제안:** "테스트 배포가 **50대 이하**라면 신분증도 수수료도 없는 제한 배포 계정이 따로 있고"
> (한 걸음 더: "이번에 20대에서 50대로 늘었고요"를 덧붙이면 발표 내용과 맞물린다.)

- 근거: https://developer.android.com/blog/posts/android-developer-verification-2027
- 근거: https://developer.android.com/developer-verification/guides/limited-distribution

**⚠ 팩트 카드 오류:** `2026-11-27-brief.md` 49줄 "**20대** — limited distribution 계정으로 공유 가능한 기기 수"도 같이 고칠 것.

---

### C-3. [경미] 본문 12줄 — "1월부터 전 세계로 확대"의 표현

> **초고:** "안드로이드 개발자 인증(Android developer verification)을 **2027년 1월부터 전 세계로 확대한다고** 밝혔습니다."

원문은 "global rollout will **begin** in January 2027"이다. 뒤 문장이 단계성을 보완하지만,
C-1을 고치는 김에 첫 문장도 '시작'으로 맞추면 글 전체가 일관된다.

> **제안:** "...2027년 1월부터 전 세계로 **단계적으로 확대한다고** 밝혔습니다."

---

### C-4. [경미] 본문 12줄 — 9월 30일 시행의 한정 조건 누락

> **초고:** "9월 30일부터 브라질, 인도네시아, 싱가포르, 태국 **네 나라에서** 먼저 돌고 있던 제도인데요."

공식 문구는 "**participating stores** in Brazil, Indonesia, Singapore, and Thailand"다.
그 네 나라에서도 참여 스토어에 한정됐고 사이드로딩은 대상이 아니었다.
이 한정을 넣어 두면 C-1의 '1월에도 스토어부터'라는 단계성이 자연스럽게 깔린다.

> **제안:** "9월 30일부터 브라질, 인도네시아, 싱가포르, 태국 **네 나라의 참여 스토어에서** 먼저 돌고 있던 제도인데요."

---

### C-5. [경미] 본문 28줄 — "우회 절차가 따로 적혀 있지 않습니다"

사실로서 맞다(FAQ에 복구 경로 없음). 다만 지원센터에는 개별 문의 양식
(`support.google.com/android-developer-console/contact/developer_verification_issue`)이 있고,
자격 없는 키에 대한 '요청' 경로도 존재한다. 단, 그 요청 역시 **소유권 증명(개인키 서명 APK 업로드)을
완료해야** 하므로 키를 잃은 쪽에는 실질적으로 닫혀 있다 — 초고의 결론은 그대로 성립한다.
현재 문장을 **유지해도 무방**하며, 더 단단히 가려면 한 어절만 덧대면 된다.

> **제안(선택):** "그게 전부예요. 문의 양식 말고 **문서에 적힌** 우회 절차는 없습니다."

---

### C-6. [경미] 본문 36줄 — 확인 경로 문장이 'Package names 탭이 양쪽에 있는 것'처럼 읽힘

> **초고:** "등록 상태는 플레이 콘솔과 안드로이드 개발자 콘솔의 Package names 탭에서 볼 수 있고"

Package names 탭은 **안드로이드 개발자 콘솔** 쪽이고, 플레이 콘솔은 'Android developer verification' 페이지에서 앱별로 표시된다.

> **제안:** "등록 상태는 플레이 콘솔의 개발자 인증 페이지나 안드로이드 개발자 콘솔의 Package names 탭에서 볼 수 있고"

---

## D. 교차 확인했으나 **수정 불필요**한 항목 (오보 주의)

- **Android 7.0 vs Android 8:** Android Authority 기사는 "Android 7.0 or newer"로 적었다. **오보다.**
  공식 FAQ(2026-11-10 갱신)와 공식 블로그가 가리키는 앵커 모두 **Android 8 (API level 26) 이상**.
  **초고가 맞으므로 그대로 둘 것.** 2차 매체를 근거로 되돌리지 말 것.
- **`adi-registration.properties`** 철자 — 지원센터가 "exactly"라는 단어까지 써서 고정한 파일명. 초고 철자 정확.
- **50% / 50건** — 백분율과 건수가 뒤섞이기 쉬운 지점인데 초고가 정확히 구분했다.
- **24시간 대기** — FAQ에 "one-time, one-day wait"와 "24-hour waiting period"가 병존하나 동일 사안. 초고 표현 문제없음.

---

## E. 팩트 카드 자체에 대한 지적

| 위치 | 내용 | 판정 |
|---|---|---|
| 49줄 | "**20대** — limited distribution 계정으로 공유 가능한 기기 수" | ✗ **오류 → 50대**. 11/19 발표에서 상향 |
| 44~45줄 | 1월·7개 배포처를 "11/19~20 발표 보도"로만 표기 | ⚠ 보완 — **공식 블로그(developer.android.com/blog/posts/android-developer-verification-2027, 19 Nov 2026)가 1차 출처**다. 2차 매체 근거로 둘 필요 없음 |
| 전반 | **2027-03-01(타 스토어 적용 목표)** 항목 자체가 없음 | ⚠ 누락 — 카드에 추가 권고 |
| 43줄 | "일부 매체가 Android 7이라 적었으나 공식 문서는 8/API 26" | ✓ 정확 |
| 70~72줄 | 키 분실 FAQ 인용 | ✓ 원문과 자구까지 일치 |
| 32~38줄 | 분쟁 규칙 표 | ✓ 지원센터 원문과 일치 |

---

## F. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — C-1(치명적) 반영 필수, C-2(중간) 반영 필수, C-3~C-6은 권고
- [ ] 발행 보류

**발행 전 필수 조치 2건**
1. **C-1** — 30줄의 "1월 이후로는 ~ 없게 됩니다"를 단계적 롤아웃으로 교정 + 3월 1일 목표 시점 명기, excerpt·마무리 연동 수정
2. **C-2** — 36줄 "20대" → "50대", 팩트 카드 49줄도 함께 수정

본문을 고친 뒤 `node scripts/lint-post.mjs` 재실행 필요(일일 루틴 절대 규칙 7).

---

## 근거 URL

1. https://developer.android.com/blog/posts/android-developer-verification-2027 — 공식 블로그 "Expanding Android developer verification in 2027", 2026-11-19, Matthew Forsythe. 1월 롤아웃 시작·7개 배포처·20→50대 상향·99% 설치 비중
2. https://developer.android.com/developer-verification — 공식 타임라인(2026-08 / 2026-09-30 / 2027)
3. https://developer.android.com/developer-verification/guides/faq — 키 분실, ADB 예외, 엔터프라이즈 면제, D-U-N-S 28일, $25, 고급 절차 24시간, 미등록 앱 업데이트 실패, Android 8(API 26), Panda 4, 상태 확인 경로
4. https://support.google.com/android-developer-console/answer/16640821 — `adi-registration.properties`·assets·릴리스 APK 재빌드, 50% 초과 / 50건 이상 / 선착순, "may be rejected", 신규 패키지는 인증서만
5. https://developer.android.com/developer-verification/guides/limited-distribution — 최대 50대, 무료, 정부 발행 신분증 불필요
6. https://developer.android.com/developer-verification/guides/distributor-resources — 1월 7개 스토어 시작, **타 스토어 2027년 3월**, "March 1, 2027 (Target readiness)", T-90/60/30 캠페인 마일스톤
7. https://www.androidauthority.com/android-sideloading-rules-developer-verification-global-3737188/ — 2026-11-19 보도. **Android 7.0 표기는 오보**(대조용으로만 사용)
