# Fact Check Report: 2026-11-02-cursor-marketplace-fake-claude-code-extension

- **검증일:** 2026-11-01
- **검증 대상:** `_posts/2026-11-02-cursor-marketplace-fake-claude-code-extension.md`
- **팩트 카드:** `_workspace/daily/2026-11-02-brief.md`
- **종합:** **수정 후 발행** — 시점 규율 위반 없음. 날짜·수치·인용은 전부 1차 또는 권위 출처로 확인됨. 다만 **배경 메커니즘 서술 2건(Cursor 마켓플레이스 구조, VS Code 확장 활성화 시점)이 사실과 어긋나** 수정이 필요하다. 이 두 건은 본문의 논지 축(“같은 이름인데 창고가 다르다”)에 직접 올라앉아 있어 치명 등급으로 분류한다.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-02 (`date: 2026-11-02 09:00:00 +0900`)
- **타임라인 기준 시점:** `_style/ai-timeline.md` 318행 = 2026-11-01

| 본문에 인용된 사건·시점 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| Cursor, 변조 빌드 배포·회수 (본문 "10월 29일") | 2026-10-29 (PT 02:27~13:35) | 이전 ✓ | 유지 |
| Cursor 공지 갱신 (본문 미언급) | 2026-10-30 11:30 PT | 이전 ✓ | — |
| Socket·Microsoft·앤트로픽 확인 발언 | 2026-10-29~30 | 이전 ✓ | 유지 |
| 정상 최신 2.1.314 배포 | 2026-10-29~30 | 이전 ✓ | 유지 |
| Koi Security의 Open VSX 결함 발견 (본문 "2025년") | 보고 2025-05-04 | 이전 ✓ | 유지 |
| Open VSX 수정 배포 (본문 "6월 25일") | **Eclipse 공식 타임라인은 2025-06-24** | 이전 ✓ | **날짜 1일 불일치 — B-18 참조** |

- **사후 시점 표현 검사:** "훗날", "돌이켜보면", "결국" 등 **없음**. ✓
- **용어·약어 시점성:** Open VSX(2020~), Cursor 마켓플레이스, LaunchAgent, OVSX_PAT 모두 발행일에 존재. ✓
- **미래 시점 누출:** 없음. 본문의 "다음에 벌어질 일도 이 층일 거라고 봅니다"는 명시적 가정이며 "예측은 아니고 가정인데요"로 사정거리를 스스로 그었다. ✓
- **참고(오류 아님):** 타임라인에는 이 사건(2026-10-29)이 아직 등재돼 있지 않다. 발행 후 `_style/ai-timeline.md`에 추가 권장.

---

## B. 사실 검증

### B-1. 사건 개요·수치

| # | 주장(본문) | 상태 | 증거 |
|---|---|---|---|
| 1 | "Cursor가 10월 29일 자사 확장 마켓플레이스에서 Claude Code 확장의 변조된 빌드를 내렸습니다" | ✓ 확인 | Cursor 공식 공지(1차). https://cursor.com/blog/claude-code-extension-security-notice |
| 2 | "버전은 2.1.312와 2.1.313" | ✓ 확인 | Cursor 공지가 "Anthropic.claude-code 2.1.312 and 2.1.313" 명시. 10-30 11:30 PT 갱신에서 2.1.312를 추가 확정("We updated the IOCs and clarified affected versions"). https://cursor.com/blog/claude-code-extension-security-notice · https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html |
| 3 | "Windows와 macOS용" | ✓ 확인 | Cursor 공지 해시 목록이 `darwin-arm64`·`win32-x64` 두 빌드만 적시. https://www.stepsecurity.io/blog/claude-code-extension-trojanized |
| 4 | "태평양 시간으로 오전 2시 27분부터 오후 1시 35분까지" | ✓ 확인 | Cursor 공지 원문 "Between about 2:27am PT and 1:35pm PT today". https://cursor.com/blog/claude-code-extension-security-notice |
| 5 | "약 11시간" | ✓ 확인 | 02:27→13:35 = 11시간 8분. BleepingComputer도 "about 11 hours". ⚠ 다만 **앤트로픽은 "close to 12 hours"**라고 표현했다(복수 보도). 본문의 "약 11시간"은 Cursor 공지의 시각 계산과 일치하므로 그대로 둬도 된다. https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/ |
| 6 | "Cursor는 최대 5,000명이 이 빌드를 받았을 수 있다고 밝혔어요" | ✓ 확인 (출처 주의) | 수치와 귀속 모두 정확. 단 **Cursor 블로그 공지 본문에는 이 숫자가 없다** — 10-29 오전 7:46(PT) Cursor의 X 게시물 표현 "impacting at most 5,000 users"가 출처이고, THN·BleepingComputer·Socket이 이를 인용. 각주·출처 링크를 단다면 블로그가 아니라 X 게시물 또는 THN을 걸 것. https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html · https://www.bankinfosecurity.com/cursor-confirms-anthropic-claude-code-extension-compromised-a-33263 |
| 7 | "정상 최신 2.1.314" (본문 "2.1.314로 올리는 것은…") | ✓ 확인 | THN: 앤트로픽이 Open VSX·Microsoft VS Code Marketplace에 올린 정상 릴리스가 2.1.314. ⚠ Cursor 공지 자체에는 2.1.314 언급이 없다. https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html |
| 8 | "`anthropic.claude-code`라고 적혀 있으면" (확장 ID) | ✓ 확인 | 확장 식별자 표기 정확. https://www.stepsecurity.io/blog/claude-code-extension-trojanized |

### B-2. 페이로드

| # | 주장(본문) | 상태 | 증거 |
|---|---|---|---|
| 9 | "`~/.ssh/authorized_keys`에 공격자 키를 한 줄 더 써 넣고" | ✓ 확인 | Cursor 공지. Ed25519 키 1행 추가. https://cursor.com/blog/claude-code-extension-security-notice |
| 10 | "`svc-telemetry`라는 라벨이 붙은 키" | ✓ 확인 | Cursor 공지 + StepSecurity: `authorized_keys` 엔트리의 주석이 `svc-telemetry`. https://www.stepsecurity.io/blog/claude-code-extension-trojanized |
| 11 | "공격자 서버로 리버스 SSH 터널을 여는 것이었습니다" (도입부) | ⚠ **완료형 과장** | 1차 출처는 전부 **시도(attempts to enable the local SSH service and open a reverse SSH tunnel)**로 적는다. 본문 8문단에서 "대개 실패한다"고 스스로 교정하지만, 도입부가 완료형이라 앞뒤가 충돌한다. → C-3 |
| 12 | "`extension.js` 맨 앞에 66줄을 붙인 게 전부" | ⚠ 근거 약함(단일 출처) | 파일명 `extension.js` 선두 삽입·나머지 정상 코드 유지는 StepSecurity·BleepingComputer(Phorion/OpenSourceMalware 분석)로 교차 확인 ✓. 그러나 **"66줄"은 The Hacker News 한 곳뿐**이고, StepSecurity는 같은 로더를 **7,386바이트**로 기술하며 줄 수를 주지 않는다. 치명적이진 않으나 단일 출처임을 인지할 것. → C-6 |
| 13 | "macOS에서는 LaunchAgent, Windows에서는 예약 작업, 그리고 crontab에…" | ✗ **분류 오류(경미)** | LaunchAgent(macOS, `com.apple.sysmond`)·예약 작업(Windows, `SysMon`, SYSTEM 의도 + 시작 폴더 `sysmon.cmd` 폴백)은 정확 ✓. 그러나 **crontab(`@reboot`)은 페이로드의 Linux 분기**이고, 실제 배포된 빌드는 `darwin-arm64`·`win32-x64` 둘뿐이다. 세 번째 병렬 항목으로 나열하면 Linux용 빌드가 있었던 것처럼 읽힌다. → C-4 |
| 14 | "약 60초마다 재시도하는 스크립트" | ✓ 확인 | Cursor 공지 "roughly every 60 seconds", StepSecurity는 터널 루프의 `sleep 60`을 코드 수준에서 확인. BleepingComputer "roughly every minute". https://www.stepsecurity.io/blog/claude-code-extension-trojanized |
| 15 | "빠져나간 정보도 환경변수의 값이 아니라 이름까지였습니다" | ✓ 확인 | 정규식 `/KEY\|TOKEN\|SECRET\|PASS\|AWS\|GCP/i`에 걸리는 환경변수 **이름 최대 40개**, 값은 비콘에 포함되지 않음. 함께 수집된 것: public IP·호스트명·사용자명·OS/아키텍처·홈/작업 디렉터리·git global email. https://www.stepsecurity.io/blog/claude-code-extension-trojanized · https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html |
| 16 | "SSH 서비스를 켜는 단계는 관리자 권한이 필요한데 확장에는 대개 그 권한이 없습니다. Cursor도 이 단계는 보통 실패한다고 적었어요" | ✓ 확인 | Cursor 공지 원문: 악성 확장은 대부분의 macOS·Windows 호스트에서 그 권한을 "does not have"며, 그럼에도 조치는 수행하라고 안내. 보강 근거: Phorion이 macOS 권한 점검 결함과 Windows에서 `/bin/sh` 호출(표준 Windows에 부재)을 확인. https://cursor.com/blog/claude-code-extension-security-notice · https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/ |
| 17 | "확장을 삭제하면 확장 폴더만 사라지고 … 2.1.314로 올리는 것은 … 이미 들어간 것을 치워 주지 않습니다" | ✓ 확인 | Microsoft 진술 원문 "Removing or updating the extension does not remove artifacts written outside its installation directory." Cursor 공지도 "Uninstalling the extension may not be sufficient"로 동일. https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html |

### B-3. 배포 경로와 각사 확인

| # | 주장(본문) | 상태 | 증거 |
|---|---|---|---|
| 18 | "Socket은 문제의 2.1.313이 Open VSX에도, npm에도, Microsoft 마켓플레이스에도 올라온 흔적이 없다고 밝혔습니다" | ✓ 확인 | Socket 공식 X 게시물이 세 레지스트리를 **한 문장으로 함께** 다룬다: 초기 오보가 "Open VSX, npm and Microsoft's marketplace"를 지목했고 "Our registry checks found no evidence of publication". Socket 블로그는 Open VSX의 append-only 변경 피드에 2.1.312·2.1.314의 8개 플랫폼 빌드 이벤트는 있으나 **2.1.313의 게시·삭제 기록이 없음**을, npm 발행 이력에도 항목이 없음을 제시. https://x.com/SocketSecurity/status/2116223794117308872 · https://socket.dev/blog/claude-code-extension-compromise |
| 19 | "Microsoft도 자사 마켓플레이스와 npm에서 배포된 적이 없다고 확인했고요" | ✓ 확인 | Microsoft가 Visual Studio Marketplace 및 npm `@anthropic-ai/claude-code`를 통한 게시·배포 사실 없음을 확인. https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html |
| 20 | "앤트로픽은 자사 시스템과 직원 노트북이 침해되지 않았다고 했습니다" | ✓ 확인 (발언 실재) | 펠릭스 리제베르크(Felix Rieseberg, 앤트로픽 엔지니어링) 원문 **"it wasn't a compromise of Anthropic's systems or employee laptops"** — '직원 노트북'까지 정확히 실재하는 발언이다. 데이비드 드워큰(David Dworken, 보안) "This did not involve compromising any Anthropic systems… We were not involved in building, publishing, or hosting this." / "the versions on our official channels including VS Code and OpenVSX are not affected." https://www.theregister.com/cyber-crime/2026/10/30/anthropic-that-claude-code-extension-compromise-couldnt-be-us/5306682 · https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html |
| 21 | "이름도 같고 퍼블리셔도 같은데, Cursor 창고에서 받은 것만 달랐던 거죠" | ✓ 확인 (단정 허용 범위) | **초기 오보 정정 경위까지 추적한 결과, 본문의 단정은 과하지 않다.** OpenSourceMalware가 Open VSX를 발원지로 지목했고 Morphisec 초기 글과 StepSecurity 초판이 이를 따랐으나, **OpenSourceMalware·StepSecurity 모두 사후 정정**했다(StepSecurity 현행본: Open VSX의 2.1.312는 별개의 정상 산출물이며 2.1.313은 Open VSX·MS 마켓플레이스 어디에도 게시된 적 없음). Socket은 원 기사 스크린샷이 편집된 것으로 의심한다고 밝혔다. ⚠ **팩트 카드의 "StepSecurity 주장은 미해소"는 더 이상 유효하지 않다** — 이미 정정됐으므로 리포트·카드 양쪽에서 폐기할 것. https://www.stepsecurity.io/blog/claude-code-extension-trojanized · https://socket.dev/blog/claude-code-extension-compromise |
| 22 | "Cursor는 키를 교체하고 마켓플레이스를 다시 세웠다고 밝혔습니다" | ✓ 확인 (축자 일치) | Cursor 공지 원문 **"We rotated our keys, rebuilt the marketplace, and brought it back online."** https://cursor.com/blog/claude-code-extension-security-notice |
| 23 | "어떻게 앤트로픽 이름으로 그 빌드가 올라갔는지, 공격자가 어디까지 손댈 수 있었는지는 아직 아무도 공개하지 않았습니다" | ✓ 확인 | BleepingComputer가 동일하게 미해결 항목으로 적시. Cursor 공지에도 경로 설명 없음. https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/ |

### B-4. 배경 메커니즘 (본문 3문단·6문단)

| # | 주장(본문) | 상태 | 증거 |
|---|---|---|---|
| 24 | "그 마켓플레이스의 퍼블리셔 약관은 Visual Studio 제품군과 Microsoft가 배포하는 VS Code 외의 제품을 지원하는 용도로는 쓰지 못하게 막아 두었어요" | ✓ 확인 (단서 1개) | **원문 확인 완료.** Microsoft Visual Studio Marketplace **Publisher Agreement(rev. 2019-01) SECTION 3(a) "Visual Studio Products and Services"**: *"Offerings must be designed to work with and extend the capabilities of Microsoft Visual Studio, Visual Studio for Mac, Visual Studio Code, Azure DevOps and/or Team Foundation Server and successor Microsoft products and services… Offerings are intended for use only with Visual Studio Products and Services and may only be installed and used with Visual Studio Products and Services."* 즉 **팩트 카드의 "3.a"는 정확**하다. ⚠ 단, 조항 자체는 "Visual Studio Code"라고만 적고 **"Microsoft가 배포하는"이라는 한정어는 조항에 없다** — 그 한정은 Microsoft의 해석·집행(2025-04 C/C++ 확장 포크 차단)에서 나온 것이다. 또 사용자 측 구속은 별도 문서인 Terms of Use(2025-09판) §2.b·§3에 있다("Marketplace Offerings are intended for use only with In-Scope Products and Services…", In-Scope = Visual Studio, VS Code, GitHub Codespaces, Azure DevOps 등). → C-5 / https://cdn.vsassets.io/v/M146_20190123.39/_content/Visual-Studio-Marketplace-Publisher-Agreement.pdf · https://cdn.vsassets.io/v/M264_20251020.18/_content/Microsoft-Visual-Studio-Marketplace-Terms-of-Use.pdf · https://www.theregister.com/software/2025/04/24/microsoft-subtracts-c/c-extension-from-vs-code-forks/721912 |
| 25 | "대신 Eclipse 재단이 운영하는 Open VSX를 쓰거나, **Cursor처럼 자기 마켓플레이스를 따로 둡니다**" | ✗ **오류 (치명)** | Cursor는 둘 중 하나를 고른 게 아니라 **둘 다**다. Cursor 공식 문서: *"Cursor uses the Open VSX extension registry for third-party extensions"*이며, 검색·다운로드를 **자체 마켓플레이스 프록시(`marketplace.cursorapi.com`)로 경유**시켜 악성코드·공급망 분석을 돌린다. 즉 Open VSX가 상류 레지스트리이고 Cursor 마켓플레이스는 그 앞단의 프록시·캐시 계층(+Anysphere 자체 빌드)이다. 별도 카탈로그를 가진 독립 레지스트리가 아니다. **그리고 이번 사건은 정확히 그 프록시 계층에서 벌어졌다** — 상류 Open VSX에는 2.1.313 기록이 없는데 Cursor 쪽에서만 나왔다. 바로잡으면 본문 논지가 약해지는 게 아니라 더 날카로워진다. → C-1 / https://cursor.com/help/customization/extensions |
| 26 | "Cursor, Windsurf, VSCodium, Gitpod처럼 VS Code를 포크해서 만든 편집기들" | ⚠ 2건 부정확 | (a) **Windsurf는 2026-06-02 Cognition이 Devin Desktop으로 개명**했다(OTA 업데이트로 전환, windsurf.com은 devin.ai로 리다이렉트). 2026-11 시점 글에서 현재형 제품명으로 쓰면 시점이 어긋난다. 단 docs.windsurf.com은 아직 살아 있고 Open VSX 사용도 사실이다. (b) **Gitpod은 "편집기"가 아니라 클라우드 개발환경 플랫폼**이다. 오히려 Open VSX를 처음 만든 쪽(TypeFox/Gitpod, 2020-04 개시 → 2020-09 Eclipse 재단 이관 → 2021-01 Eclipse 호스팅 가동)이라 "포크 편집기" 예시로는 어색하다. → C-7 / https://en.wikipedia.org/wiki/Cognition_AI · https://eclipse.org/community/eclipse_newsletter/2021/january/1.php |
| 27 | "Eclipse 재단이 운영하는 Open VSX" | ✓ 확인 | 2021-01부터 Eclipse 재단 호스팅·운영. https://eclipse.org/community/eclipse_newsletter/2021/january/1.php |
| 28 | "확장은 편집기를 켜는 순간 `activate()`가 불리고" | ✗ **오류 (치명)** | VS Code는 확장을 **일괄 기동하지 않고 지연 로딩**한다. Microsoft 공식 문서: *"VS Code lets extensions declare their Activation Events and loads them lazily"* — 예시로 마크다운 확장은 사용자가 `.md`를 열 때만 로드된다. `activate()`가 켜자마자 불리는 것은 `onStartupFinished`나 `*`를 선언한 확장에 한한다(Claude Code 확장이 그에 해당할 개연성은 높으나 공개 확인 안 됨). 개발자 독자에게는 바로 걸리는 대목이다. → C-2 / https://code.visualstudio.com/api/advanced-topics/extension-host |
| 29 | "그때부터 편집기와 똑같은 권한으로 돕니다. 샌드박스가 따로 없어요" | ⚠ 근거 약함(실질 정확) | 결론은 맞지만 **Microsoft 1차 문서에 'sandbox'·'privilege'라는 단어가 없다.** 공식 문서가 말하는 Extension Host의 제약은 성능·UI 영역이고, VS Code가 공표한 샌드박싱은 **메인 프로세스**에 대한 것이지 확장 호스트가 아니다. "확장은 호스트 IDE와 동일 권한으로 샌드박스 없이 실행된다"는 보안 연구·학술 문헌 쪽 서술이다. 본문처럼 단정해도 사실과 어긋나지 않으나, 완화하려면 "편집기 프로세스와 같은 권한"보다 "편집기를 띄운 사용자 권한 그대로"가 더 정확하다. https://code.visualstudio.com/api/advanced-topics/extension-host · https://nhsjs.com/2025/automated-security-framework-for-vs-code-extensions-risk-profiling-policy-generation-and-runtime-sandboxing/ |
| 30 | "자동 업데이트가 기본값이죠" | ⚠ 근거 약함(통설) | `extensions.autoUpdate` 기본 활성은 널리 알려진 동작이고 이번 사건 보도 전반이 이를 전제하지만, 이번 검색에서 **Microsoft 설정 레퍼런스의 기본값 문장을 1차로 확보하지 못했다.** 사실로 굳어 있는 서술이라 삭제까지는 불필요. 포크는 기본값을 바꿀 수 있다는 점만 유의. |
| 31 | "npm 패키지는 대개 빌드하거나 실행할 때 깨어납니다" (확장과의 대비) | ✓ 확인 | 일반론으로 정확하며, 공교롭게 B-4 #18의 Open VSX 결함(`npm install`이 빌드 스크립트를 실행) 자체가 이 대비의 근거가 된다. |

### B-5. Koi Security / Open VSX 전례 (본문 9문단)

| # | 주장(본문) | 상태 | 증거 |
|---|---|---|---|
| 32 | "2025년에 Koi Security가 … 찾아냈죠" | ✓ 확인 | 발견자 Koi Security 연구원 오렌 욤토브(Oren Yomtov). CVE-2025-6705. https://thehackernews.com/2025/06/critical-open-vsx-registry-flaw-exposes.html |
| 33 | "Open VSX의 자동 게시 작업에서 … 매일 도는 GitHub Actions의 `npm install` 빌드 스크립트에 노출" | ✓ 확인 | 매일 03:03 UTC 실행되는 GitHub Actions 워크플로가 `vsce`로 auto-listed 확장을 게시하는데, `npm install`이 그 확장들과 의존성의 임의 빌드 스크립트를 실행하면서 `OVSX_PAT` 환경변수에 접근 가능. **"자동 게시 작업"이라는 한정도 정확** — Eclipse는 "this vulnerability only affected the auto-publishing mechanism"이라고 명시. https://thehackernews.com/2025/06/critical-open-vsx-registry-flaw-exposes.html · https://blogs.eclipse.org/post/mika%C3%ABl-barbero/eclipse-open-vsx-registry-security-advisory |
| 34 | "레지스트리 관리자급 토큰" | ✓ 확인 | `@open-vsx` 서비스 계정의 특권 토큰. Koi는 마켓플레이스 전체 통제가 가능했다고 표현. |
| 35 | "그 토큰을 쥐면 어느 확장이든 **갱신을 밀어 넣을** 수 있었습니다" | ✓ 확인 (표현 정확) | Eclipse 어드바이저리: 토큰은 *"allowed publishing of new extension versions under any namespace"*이며 **삭제나 기존 버전 덮어쓰기는 불가**했다. 본문이 '덮어쓰기'가 아니라 '갱신을 밀어 넣는다'로 쓴 것은 조항과 정확히 맞는다. 바꾸지 말 것. https://blogs.eclipse.org/post/mika%C3%ABl-barbero/eclipse-open-vsx-registry-security-advisory |
| 36 | "5월 초에 통보했고" | ✓ 확인 | Eclipse 공개 타임라인 "May 4, 2025 – Vulnerability reported by Koi Security researchers". |
| 37 | "**6월 25일**에 수정이 배포됐습니다" | ⚠ **1일 불일치** | **Eclipse 공식 타임라인은 "June 24, 2025 – Final fix approved and deployed; privileged token rotated"**. The Hacker News(Koi 측 서술)는 6월 25일로 적는다. 1차 출처(Eclipse)를 따르면 **6월 24일**. 이후 일정: 6월 27일 CVE-2025-6705 공개, 7월 2일 어드바이저리 공개. → C-8 |
| 38 | "Eclipse는 기존 확장이 실제로 당한 증거는 없다고 밝혔고요" | ✓ 확인 | Eclipse 어드바이저리 TL;DR **"No evidence of compromise was found"**, 그리고 결함이 *"did not affect existing extensions or admin functions"*. 예방 차원에서 해당 토큰으로 게시된 81개 버전을 비활성화. https://blogs.eclipse.org/post/mika%C3%ABl-barbero/eclipse-open-vsx-registry-security-advisory |

### B-6. 숫자·고유명사 전수 스캔

- **숫자:** 10월 29일 ✓ / 2:27 ✓ / 1:35 ✓ / 11시간 ✓ / 5,000 ✓ / 2.1.312 ✓ / 2.1.313 ✓ / 2.1.314 ✓ / 66줄 ⚠(단일 출처) / 60초 ✓ / 2025년 ✓ / 6월 25일 ⚠(1일) / "열몇 개"(저자 노트북, 검증 불요)
- **고유명사·철자:** Cursor ✓ / Claude Code ✓ / 앤트로픽 ✓ / Microsoft ✓ / Socket ✓ / Open VSX ✓(`Open VSX` 두 단어 표기 정확) / Eclipse ✓ / Koi Security ✓ / VSCodium ✓ / Gitpod ✓(철자는 맞음, 분류가 문제 — #26) / Windsurf ⚠(현재명 Devin Desktop) / `extension.js` ✓ / `authorized_keys` ✓ / `svc-telemetry` ✓ / `activate()` ✓ / `anthropic.claude-code` ✓ / LaunchAgent ✓
- **직접 인용:** 본문에 큰따옴표 직접 인용 **0건**. 전부 간접 전달이며 B-3에서 귀속 확인 완료. ✓
- **URL·외부 서비스명:** 본문에 외부 URL 없음. 언급된 서비스(Cursor 마켓플레이스·Open VSX·Microsoft 마켓플레이스·npm)는 전부 실재. ✓
- **레포 규약 스캔:** "현지시각" 0회 ✓ / 본문 `OpenAI` 0회 ✓ / 굽은 따옴표 0건 ✓ / `### ▸` 소제목 0개(10-13 이후 저자 패턴 부합) ✓ / 제목에 ` : ` 없음·의문형 종결 ✓

---

## C. 수정 권고 (우선순위 순)

### 치명 — 발행 전 반드시 수정

**C-1. [치명적] 18줄(3문단) — Cursor 마켓플레이스 구조 서술이 사실과 다름**

> 현재: "대신 Eclipse 재단이 운영하는 Open VSX를 쓰거나, Cursor처럼 자기 마켓플레이스를 따로 둡니다."

Cursor는 **Open VSX를 상류로 쓰면서 그 앞에 자체 마켓플레이스 프록시를 둔다**(공식 문서: "Cursor uses the Open VSX extension registry for third-party extensions", 검색·다운로드는 `marketplace.cursorapi.com` 경유). '둘 중 하나'가 아니다. 그리고 이 구조가 이번 사건의 급소다 — 상류 Open VSX에는 2.1.313 게시 기록이 아예 없는데 프록시 계층에서만 변조본이 나왔다.

수정안:

> "대신 Eclipse 재단이 운영하는 Open VSX를 씁니다. Cursor는 거기서 한 겹 더 갑니다. Open VSX를 상류에 두되, 검색과 내려받기를 자기 마켓플레이스 프록시로 통과시키면서 그 자리에서 악성코드 검사를 돌려요."

그리고 22줄의 "Cursor 창고에서 받은 것만 달랐던 거죠" 바로 앞뒤에 한 줄을 보태면 논지가 훨씬 세진다:

> "상류인 Open VSX에는 2.1.313이 올라온 기록 자체가 없습니다. 중간에 낀 한 겹에서만 나온 겁니다."

**C-2. [치명적] 26줄(6문단) — `activate()` 호출 시점이 틀림**

> 현재: "확장은 편집기를 켜는 순간 `activate()`가 불리고, 그때부터 편집기와 똑같은 권한으로 돕니다."

VS Code는 확장을 **지연 로딩**한다(공식 문서: "loads them lazily", 활성화 이벤트 선언에 따름). 켜자마자 도는 건 `onStartupFinished`/`*`를 선언한 확장뿐이다. 개발자 독자가 즉시 알아채는 오류.

수정안:

> "확장은 자기가 선언해 둔 조건이 맞는 순간 `activate()`가 불립니다. 편집기를 켜자마자 도는 것들도 많고요. 그때부터는 편집기를 띄운 사용자 권한 그대로 돕니다."

(참고: 이번 로더는 활성화 조건과 무관하게 모듈 선두에 박혀 있어 **확장이 로드되는 즉시, 사용자 조작 없이** 실행됐다 — BleepingComputer. 이 사실을 한 줄 넣으면 '켜는 순간'이라는 직관을 잃지 않으면서 정확해진다.)

### 경미 — 다듬으면 좋음

**C-3. [경미] 12줄(도입) — 터널을 '열었다'를 '열려고 했다'로**

> 현재: "…공격자 서버로 리버스 SSH 터널을 여는 것이었습니다."

1차 출처는 모두 *attempts to*. 본문 32줄에서 "대개 실패한다"고 교정하므로 도입부와 충돌한다. → "…공격자 서버로 리버스 SSH 터널을 열려고 하는 것이었습니다."

**C-4. [경미] 30줄 — crontab은 Linux 분기**

> 현재: "macOS에서는 LaunchAgent, Windows에서는 예약 작업, 그리고 crontab에 터널을 되살리는 스크립트가 들어갔고"

배포된 빌드는 `darwin-arm64`·`win32-x64` 둘뿐이고, `@reboot` crontab은 페이로드의 Linux 분기다. 셋을 나란히 두면 Linux 빌드가 있었던 것처럼 읽힌다. → "macOS에서는 LaunchAgent, Windows에서는 SYSTEM 권한 예약 작업(실패하면 시작 폴더)에 터널을 되살리는 스크립트가 들어갔고" 로 줄이거나, crontab을 남기려면 "(코드에는 Linux용 crontab 분기도 들어 있었습니다)"로 괄호 처리.
단, 30줄 뒷부분의 점검 체크리스트에서 crontab을 **확인 대상으로 열거하는 것은 그대로 둬도 무방**하다(확인해서 손해 볼 것이 없고 macOS에도 cron은 있다).

**C-5. [경미] 18줄 — 약관 한정어**

조항(Publisher Agreement §3(a)) 원문은 "Visual Studio Code"라고만 적고 "Microsoft가 배포하는"이라는 한정은 없다. 그 한정은 Microsoft의 해석·집행에서 나온다. → "…약관은 확장을 Visual Studio 제품군에서만 쓰도록 묶어 두었고, Microsoft는 여기서 말하는 VS Code를 자사가 배포하는 빌드로 해석해 왔어요." 정도면 정확해진다. (조항 번호 3(a)는 팩트 카드 기재대로 정확하므로 각주를 단다면 그대로 써도 된다.)

**C-6. [경미] 26줄 — "66줄"은 단일 출처**

The Hacker News만 줄 수를 제시하고, 코드를 직접 뜯은 StepSecurity는 7,386바이트로만 적는다. 그대로 둬도 되지만, 더 안전한 표현은 "`extension.js` 맨 앞에 로더 한 덩어리를 붙인 게 전부였어요".

**C-7. [경미] 18줄 — 포크 편집기 예시 2건**

(a) **Windsurf는 2026-06-02 Devin Desktop으로 개명**됐다. 2026-11 글에서 현재형으로 쓰면 어색하다. (b) **Gitpod은 편집기가 아니라 클라우드 개발환경 플랫폼**이고, 오히려 Open VSX를 처음 만든 쪽이다. → "Cursor, VSCodium, Devin Desktop(옛 Windsurf)처럼 VS Code를 포크해서 만든 편집기들" 또는 Gitpod 대신 Coder·Eclipse Theia로 교체.

**C-8. [경미] 34줄 — Open VSX 수정 배포일**

Eclipse 공식 타임라인은 **2025-06-24**(배포·토큰 교체), THN은 6월 25일. 1차 출처를 따라 "6월 24일"로 바꾸거나 "6월 말"로 완화.

**C-9. [경미, 선택] 6줄(excerpt)·22줄 — 5,000명 수치의 출처 표기**

Cursor **블로그 공지에는 5,000이라는 숫자가 없다**(10-30 갱신본 기준). 출처는 Cursor의 X 게시물이다. 본문 표현("Cursor는 … 밝혔어요")은 귀속상 정확하므로 수정 불요. 다만 나중에 링크를 걸 일이 있으면 블로그가 아니라 X 게시물/THN을 걸 것.

**C-10. [경미, 선택] 32줄 — Cursor의 단서 한 줄 추가 여지**

본문은 "환경변수의 값이 아니라 이름까지"로 사정거리를 정확히 그었다. Cursor 공지에 같은 결의 단서가 있다 — *"the limited env-var collection does not rule out later credential access over the backdoor."* 본문의 "그래도 이름만 봐도…" 문장을 이 쪽으로 한 걸음 더 밀면 근거가 Cursor 발언으로 뒷받침된다.

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** (치명 2건 + 경미 8건, 단 날짜·수치·발언 귀속에는 오류 없음)
- [ ] 발행 보류

**판단 근거**

1. **시점 규율 위반 없음.** 본문의 모든 사건이 발행일(2026-11-02) 이전이고, 사후 시점 표현도 없다. 미래 추정은 "예측은 아니고 가정인데요"로 스스로 사정거리를 그었다.
2. **날짜·수치·인용 귀속에 오류가 없다.** 배포 창(02:27~13:35 PT), 11시간, 5,000명, 버전 3개, 60초, svc-telemetry, Cursor의 키 교체·마켓플레이스 재구축 발언은 모두 1차 출처와 일치한다. 앤트로픽의 "직원 노트북" 발언도 실재하는 원문이다. 특히 **"갱신을 밀어 넣을 수 있었다"(덮어쓰기가 아님)**, **"환경변수의 이름까지"**, **"Cursor도 이 단계는 보통 실패한다고 적었어요"** 세 대목은 출처가 그은 선을 정확히 지켰다.
3. **초기 오보 정정 경위를 추적한 결과, 본문의 단정(Cursor 단독 경로)은 과하지 않다.** Open VSX를 지목했던 OpenSourceMalware·StepSecurity가 모두 정정했고, Socket의 레지스트리 기록 검증과 Microsoft·앤트로픽의 확인이 같은 방향으로 수렴한다. 팩트 카드의 "StepSecurity 주장은 미해소"는 폐기해야 한다.
4. **문제는 사건 사실이 아니라 배경 메커니즘 2건이다.** C-1(Cursor는 Open VSX 프록시이지 별도 레지스트리가 아님)과 C-2(`activate()`는 지연 로딩)는 둘 다 개발자 독자가 바로 알아채는 층위이고, 하필 본문의 논지 축에 올라앉아 있다. 다만 **C-1은 바로잡으면 글이 약해지는 게 아니라 강해진다** — "상류에는 기록조차 없는 빌드가 중간 한 겹에서만 나왔다"는 것이 '창고가 갈라진다'는 주장의 가장 좋은 증거다.

**발행 전 체크**: C-1·C-2 반영 후 `node scripts/lint-post.mjs`를 재실행할 것(본문 수정이 들어가므로 재검사 의무 — daily-post 절대 규칙 7). 본 리포트 작성 과정에서 **본문 파일은 수정하지 않았다.**

---

## E. 검증에 사용한 출처

**1차 (공식·원전)**
- Cursor 보안 공지 — https://cursor.com/blog/claude-code-extension-security-notice
- Microsoft VS Marketplace Publisher Agreement (rev. 2019-01), §3(a) — https://cdn.vsassets.io/v/M146_20190123.39/_content/Visual-Studio-Marketplace-Publisher-Agreement.pdf
- Microsoft VS Marketplace & NuGet.org Terms of Use (2025-09), §2.b·§3 — https://cdn.vsassets.io/v/M264_20251020.18/_content/Microsoft-Visual-Studio-Marketplace-Terms-of-Use.pdf
- Cursor 공식 문서 — Extensions (Open VSX + 자체 프록시) — https://cursor.com/help/customization/extensions
- VS Code 공식 문서 — Extension Host (지연 로딩·Activation Events) — https://code.visualstudio.com/api/advanced-topics/extension-host
- Eclipse Foundation — Open VSX Registry Security Advisory (타임라인·"No evidence of compromise") — https://blogs.eclipse.org/post/mika%C3%ABl-barbero/eclipse-open-vsx-registry-security-advisory
- Eclipse Newsletter — Open VSX Registry 연혁 (TypeFox/Gitpod → Eclipse 이관) — https://eclipse.org/community/eclipse_newsletter/2021/january/1.php
- Socket 공식 X 게시물 (Open VSX·npm·MS 마켓플레이스 일괄 부인) — https://x.com/SocketSecurity/status/2116223794117308872

**기술 분석**
- Socket — Cursor Removes Malicious Claude Code 2.1.313 Extension — https://socket.dev/blog/claude-code-extension-compromise
- StepSecurity — Trojanized Claude Code Extension (정정본: 로더 7,386B, `sleep 60`, `com.apple.sysmond`, `SysMon`, IOC) — https://www.stepsecurity.io/blog/claude-code-extension-trojanized

**보도**
- The Hacker News — Official Claude Code Extension on Cursor Marketplace Trojanized (66줄 로더·2.1.314·Microsoft/앤트로픽 확인·환경변수 40개) — https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html
- BleepingComputer — Malicious Claude Code extension on Cursor planted SSH backdoors (초기 오보 정정·Phorion 분석·미해결 항목) — https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/
- The Register — Anthropic: That Claude Code extension compromise… couldn't be us (리제베르크 "employee laptops" 원문) — https://www.theregister.com/cyber-crime/2026/10/30/anthropic-that-claude-code-extension-compromise-couldnt-be-us/5306682
- BankInfoSecurity — Cursor Confirms Anthropic Claude Code Extension Compromised (5,000 수치의 X 게시물 출처) — https://www.bankinfosecurity.com/cursor-confirms-anthropic-claude-code-extension-compromised-a-33263
- Help Net Security — Claude Code extension poisoned with persistent SSH backdoor — https://www.helpnetsecurity.com/2026/10/30/claude-code-extension-ssh-backdoor/
- The Hacker News — Critical Open VSX Registry Flaw (Koi Security, OVSX_PAT, 03:03 UTC 일일 잡) — https://thehackernews.com/2025/06/critical-open-vsx-registry-flaw-exposes.html
- The Register — Microsoft subtracts C/C++ extension from VS Code forks (약관 해석·집행 사례) — https://www.theregister.com/software/2025/04/24/microsoft-subtracts-c/c-extension-from-vs-code-forks/721912
- Wikipedia — Cognition AI (Windsurf → Devin Desktop, 2026-06-02) — https://en.wikipedia.org/wiki/Cognition_AI
