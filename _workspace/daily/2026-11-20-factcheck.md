# Fact Check Report: 2026-11-20-pth-startup-hook-ci-oidc-tokens

검증일: 2026-11-19 / 검증자: fact-checker
초고: `_posts/2026-11-20-pth-startup-hook-ci-oidc-tokens.md`
팩트 카드: `_workspace/daily/2026-11-20-brief.md`

교차 확인에 사용한 1차·2차 출처
- Elastic Security Labs (1차 분석) + `github.com/elastic/supply-chain-monitor` (탐지기 구현)
- StepSecurity (분 단위 타임라인·수집 대상 수치)
- Wiz Research (유출 실측·진입 경로 — **이번 검증에서 새로 확보**)
- BleepingComputer, Endor Labs, OX Security(본문 403, 검색 스니펫만)
- docs.python.org `site` 모듈 문서 + PEP 829
- docs.github.com Actions OIDC 레퍼런스
- learn.microsoft.com CAE for workload identities / managed identities FAQ
- pypi.org/project/agent-framework

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-20 (`date: 2026-11-20 09:00:00 +0900`)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| `agent-framework` 1.26.1 업로드 | 2026-11-17 20:35:20 UTC | 이전 ✓ | 유지 (단, 시각 표기 수정 — C-1) |
| Elastic 공급망 모니터 플래그 | 2026-11-17 20:41 UTC | 이전 ✓ | 유지 |
| PyPI 1.26.1 격리 | 2026-11-17 21:06:16 UTC | 이전 ✓ | 유지 |
| 1.26.2 업로드 | 2026-11-17 21:08:39 UTC | 이전 ✓ | 유지 |
| PyPI 1.26.2 격리 | 2026-11-17 21:16:44 UTC | 이전 ✓ | 유지 |
| 정상 버전 1.26.0 | 2026-11-12 18:24~18:25 UTC | 이전 ✓ | 유지 |

- **사후 시점 표현:** "훗날", "결국", "돌이켜보면" 류 **0건** ✓
- **용어 시점성:** `.pth`, `site` 모듈, GitHub Actions OIDC, IMDS, 연합 자격증명 — 전부 발행일 이전부터 존재 ✓
- **중복 점검:** `.pth` 시작 훅을 다룬 과거 포스트 없음(`_posts` 전체 grep). 11-11 LLMJacking 편과 주제가 인접하나 메커니즘이 다름 ✓
- **발행일 이후 사건 인용:** 없음 ✓

→ **시점 규율 위반 없음.** 단, 시각의 **시간대 표기**에 오류가 있다(C-1, 아래).

---

## B. 사실 검증

### B-1. 타임라인 (검증 항목 1)

| # | 주장(본문) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | "11월 17일 저녁 8시 35분, … 1.26.1이 올라왔습니다" | ✗ **오류(시간대)** | 20:35:20 **UTC** (StepSecurity, Elastic, Wiz 전부 UTC). KST로는 **11/18 05:35** | **C-1** |
| 2 | "6분 뒤 Elastic의 공급망 모니터가 악성으로 표시" | ✓ 확인 | Elastic: 20:41 UTC 플래그 (20:35→20:41 = 6분) | - |
| 3 | "PyPI는 31분 만에 그 버전을 격리" | ✓ 확인 | 20:35:20 → 21:06:16 = **30분 56초** (StepSecurity). 반올림 허용 범위 | - |
| 4 | "격리 2분 23초 뒤에 1.26.2가 올라왔습니다" | ✓ 확인 | 21:06:16 → 21:08:39 = 정확히 2분 23초 (StepSecurity가 동일 표현 사용) | - |
| 5 | "그것도 8분 만에 격리" | ✓ 확인 | 21:08:39 → 21:16:44 = 8분 5초 | - |
| 6 | "지금은 둘 다 설치할 수 없습니다" | ✓ 확인 | PyPI 프로젝트 페이지 릴리스 히스토리에 1.26.1/1.26.2 없음, 1.26.0이 latest (2026-11-19 직접 확인) | - |
| 7 | "정상 버전은 그 닷새 전에 나온 1.26.0" | ✓ 확인 | 1.26.0 = 2026-11-12 18:24 UTC(StepSecurity) / 18:25(Wiz) / "Nov 12, 2026"(PyPI). 11/12→11/17 = 닷새 | - |

⚠ 격리 시각(21:06:16 / 21:16:44)은 **StepSecurity 단독**이다. Elastic은 "within the hour", Wiz는 "~21:30에는 둘 다 내려감", BleepingComputer는 "약 2.5분 뒤 2차 업로드, 약 8분 뒤 격리"로 **간격만** 적었다. 간격(2분 23초·8분)은 세 곳이 일치하므로 본문 서술은 안전하다.

### B-2. `.pth` 메커니즘 (검증 항목 2) — 전부 정확

| # | 주장 | 상태 | 증거 |
|---|---|---|---|
| 8 | "인터프리터가 켜질 때 표준 라이브러리의 `site` 모듈이 site-packages 안의 `.pth`를 전부 훑어 읽는다" | ✓ 확인 | `site` 문서: 인터프리터 초기화 시 자동 import(`-S`로 억제), "adds it to `sys.path` and also inspects the newly added path for configuration files", 파일명 알파벳 순 정렬 후 파싱 |
| 9 | "적힌 경로를 `sys.path`에 더하려는 것" | ✓ 확인 | `site` 문서: "contains additional items (one per line) to be appended to `sys.path`" |
| 10 | "`import`로 시작하는 줄은 경로가 아니라 코드로 보고 그 자리에서 실행" | ✓ 확인 | `site` 문서 축자: **"For backward compatibility, lines starting with `import` (followed by space or tab) are executed with `exec()`."** 본문의 `import af_runtime_diag`는 공백이 뒤따르므로 조건 충족 |
| 11 | "버그가 아니라 문서에 적혀 있는 동작이고, 꽤 오래된 기능" | ✓ 확인 | "For backward compatibility"라는 문구 자체가 근거. 다만 **PEP 829**로 3.15에서 deprecated → C-7 참고 |
| 12 | "그 가상환경에서 `python`을 입력하는 모든 순간 … 심지어 `pip list`를 하든" | ✓ 확인 | 성립한다. 해당 venv의 `pip`는 같은 인터프리터로 기동하는 콘솔 스크립트이고, 인터프리터 시작 시 `site`가 돌면서 `.pth`가 처리된다. (성립하지 않는 경우는 `python -S`, 또는 **다른** 환경의 pip/uv로 설치만 할 때인데 본문 서술 범위 밖) |
| 13 | "리눅스에서는 프로세스를 포크해 `setsid()`로 떼어 놓기까지" | ✓ 확인 | Elastic·StepSecurity·Wiz 3곳 일치. fork 불가 시(윈도우) 데몬 스레드 |
| 14 | "`agent-framework`를 한 줄도 쓰지 않는 프로젝트여도 같은 환경에 설치돼 있으면 마찬가지" | ✓ 확인 | `.pth`는 패키지 import와 무관하게 site-packages 루트에서 처리됨 |
| 15 | "악성 버전이 집어넣은 `.pth` … 딱 한 줄, `import af_runtime_diag`" | ⚠ 부분 정확 | 이건 **1.26.2**다. 1.26.1은 `agent_framework_meta.pth`(내용 `import agent_framework_meta`) → C-6 |

### B-3. 수집 대상 (검증 항목 3) — 전부 정확

| # | 주장 | 상태 | 증거 |
|---|---|---|---|
| 16 | "TOKEN·SECRET·PASSWORD 같은 문자열이 들어간 환경변수" | ✓ 확인 | StepSecurity: 부분문자열 패턴 1.26.2 35개 / 1.26.1 31개. Elastic: TOKEN, SECRET, PASSWORD, KEY, AZURE, GITHUB, CI_ |
| 17 | "Azure CLI 토큰 캐시와 `.npmrc`, `.netrc`, `.git-credentials`, 도커 설정 파일까지 수십 개" | ✓ 확인 | StepSecurity: 최대 **80개**(1.26.1은 60개), 글롭 37개. Wiz도 60/80 동일. "수십 개"는 과소도 과장도 아님 |
| 18 | "`/proc`을 뒤져 다른 프로세스 300개의 환경변수까지" | ✓ 확인 | `/proc/[0-9]*/environ` 앞 300개 — Elastic·StepSecurity·Wiz 3곳 일치 |

### B-4. OIDC (검증 항목 4)

| # | 주장 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 19 | 환경변수명 `ACTIONS_ID_TOKEN_REQUEST_URL` | ✓ 확인 | GitHub 공식 OIDC 레퍼런스에 `ACTIONS_ID_TOKEN_REQUEST_URL` / `ACTIONS_ID_TOKEN_REQUEST_TOKEN` 그대로 존재. curl 예시의 audience 기본값이 `api://AzureADTokenExchange`인 것까지 악성코드 동작과 일치 | - |
| 20 | "그 발급 창구로 가는 길은 환경변수에 **그대로 적혀 있습니다**" | ⚠ 과장 | 이 두 변수는 **잡이 `permissions: id-token: write`를 선언한 경우에만** 러너에 주입된다. GitHub 문서: "Without `id-token: write`, the OIDC JWT ID token cannot be requested." Wiz도 "In workflows with `id-token: write`"로 한정 | **C-4** |
| 21 | "관리 ID 엔드포인트가 없으면 `169.254.169.254`까지" | ✓ 확인 | Elastic·StepSecurity: `IDENTITY_ENDPOINT`/`MSI_ENDPOINT` 우선, 없으면 IMDS `169.254.169.254`, 12개 리소스에 토큰 요청 | - |
| 22 | audience `https://management.azure.com/` | ✓ 확인 | Elastic·StepSecurity: 1.26.2의 GitHub Actions OIDC 요청 audience가 `api://AzureADTokenExchange`와 `https://management.azure.com/` | 단, 해석은 C-5 |
| 23 | "발급이 실제로 성공했는지는 확인되지 않았습니다. 분석한 쪽들도 '요청했다'까지만 적었고요" | ✓ 확인 | StepSecurity: "정적 분석이 입증하는 것은 시도이지 발급 성공이나 이후 클라우드 접근이 아니다". Elastic: Azure DevOps 흐름은 "unclear whether these requests return a token that matches any federated credential". Wiz·BleepingComputer도 발급 성공 미확인 | 유지. 단 **'유출'은 확인됐다** → C-8 |
| 24 | "깃허브 액션스, 애저 데브옵스, 그리고 관리 ID" | ⚠ 부분 정확 | GitHub Actions 경로는 **1.26.2에만** 추가됐다(Elastic·BleepingComputer·StepSecurity 일치). Azure DevOps·관리 ID는 두 버전 모두 | C-6 |

### B-5. "이미 발급된 토큰은 회수할 수 없다" (검증 항목 5)

| # | 주장 | 상태 | 증거 |
|---|---|---|---|
| 25 | "연합 자격증명의 신뢰 관계를 지금 끊어도 이미 발급된 토큰은 만료 시각까지 멀쩡히 삽니다" | ✓ 확인 | 맞다. 연합 자격증명(FIC) 삭제는 **앞으로의 토큰 교환**만 막는다. 이미 발급된 Entra 액세스 토큰은 서명·클레임으로 검증되는 베어러 JWT라 만료까지 유효하다. 관리 ID 쪽은 더 나쁘다 — Microsoft 관리 ID FAQ상 백엔드가 리소스 URI별로 **약 24시간** 캐시하고, IMDS 토큰 수명도 1시간보다 길게 발급되는 사례가 문서화돼 있다 |
| 26 | "**회수 버튼이 없습니다**" | ⚠ **과장** | 세 가지 예외가 있다. ① **Azure RBAC 권한 회수** — ARM은 요청마다 역할 할당을 평가하므로 역할 할당을 떼면(전파 지연 수 분~수십 분) 그 토큰으로 할 수 있는 일이 사라진다. 토큰을 지울 수는 없어도 **쓸모를 없앨 수는 있다.** ② **서비스 주체/관리 ID 비활성화·삭제.** ③ **CAE(지속적 액세스 평가) for workload identities** — 서비스 주체 비활성화·삭제·고위험 탐지를 준실시간으로 반영해 `401` 클레임 챌린지로 토큰을 거부한다. 다만 **리소스 공급자는 Microsoft Graph 한정, 관리 ID는 미지원, 단일 테넌트 LOB 서비스 주체만**이라 이번 사건의 주 표적인 ARM(`management.azure.com`)에는 **적용되지 않는다.** |

→ 결론: **"토큰 자체는 회수할 수 없다"는 참이고, "손쓸 방법이 없다"는 과장**이다. 본문이 바로 다음 문단에서 "역할 할당을 감사하라"고 권하는데, 역할 할당을 **떼는 것**이 사실상 유일한 차단 수단이라는 점과 충돌하지 않게 한 구절만 보완하면 된다(C-3).

### B-6. 패키지 소유·배포 주체 (검증 항목 6)

| # | 주장 | 상태 | 증거 |
|---|---|---|---|
| 27 | "마이크로소프트가 공식 배포하는 에이전트 개발 패키지" | ✓ 확인 | PyPI 직접 확인: author "Microsoft"(af-support@microsoft.com), 프로젝트 링크 `github.com/microsoft/agent-framework`·`aka.ms/agent-framework`, 메인테이너 `microsoft`. OX Security·BleepingComputer도 "Microsoft's official Agent Framework" |
| 28 | "올라온 건 공식 빌드가 아니었어요" | ⚠ **단정 주의** | 출처가 갈린다. **Elastic·StepSecurity·BleepingComputer·Endor Labs는 진입 경로를 "확인되지 않음"으로 명시**(BleepingComputer: "It remains unclear how the attacker gained access to publish malicious releases", 마이크로소프트는 문의에 무응답). StepSecurity의 정황 근거는 provenance attestation 없음·wheel 단독(정상 릴리스에 있는 sdist 없음)·업로더 User-Agent `RestSharp/106.13.0.0`. 반면 **Wiz는 "마이크로소프트 ESRP(서명·배포 서비스)의 클라이언트 인증서와 개인키가 침해된 것으로 보인다"**고 적었다 — 첫 시도는 AWS IP라 ESRP의 IP 필터링에 막혔고, **마이크로소프트 소유 IP 대역에서 재시도해 성공**. 자격증명 입수 경위는 미상. 즉 Wiz가 맞다면 악성 휠은 **마이크로소프트의 공식 배포 경로를 타고** 올라온 것이어서, "공식 빌드가 아니었다"는 독자에게 '마이크로소프트 파이프라인 밖에서 올라왔다'로 읽힐 위험이 있다 |
| 29 | "공격자의 배포 권한이 그대로 살아 있었던 거죠" | ✓ 확인 | 격리 2분 23초 뒤 재업로드 성공 — Elastic·StepSecurity·BleepingComputer 전부 동일 해석 |

⚠ 참고: PyPI 프로젝트 페이지의 현재 메인테이너는 `microsoft`와 **`vibiret`** 두 계정이다(2026-11-19 직접 확인). StepSecurity는 `vibiret` 계정이 **11월 17일에 생성되어 프로젝트에 추가됐다**고 적었다. 다만 OX Radar의 퍼블리셔 목록에는 `vibiret`이 없고, 마이크로소프트·PyPI의 공식 확인도 없다. **본문에 이 계정명을 쓰지 말 것**(단일 출처, 실명 지목 위험).

### B-7. "출처 바깥의 사고" 문단의 전제 (본문 36줄)

| # | 주장 | 상태 | 증거 |
|---|---|---|---|
| 30 | "이번 공격이 6분 만에 잡힌 건 **데이터를 밖으로 내보냈기 때문**입니다. webhook.site 주소로 한 번 쏜 그 POST와 특이한 User-Agent가 **지문이 됐죠**" | ✗ **오류** | 탐지 경위가 다르다. Elastic의 `supply-chain-monitor`는 **상위 PyPI·npm 패키지의 신규 릴리스를 폴링해, 직전 버전과의 unified diff를 LLM(읽기 전용 Cursor Agent CLI)으로 분류**하는 **정적 분석** 도구다. 네트워크 트래픽이나 피해자 텔레메트리를 보지 않는다. 20:41 UTC 플래그는 **업로드된 코드를 읽고** 내린 판정이지, 유출 통신을 관측한 결과가 아니다. Elastic 글 본문도 탐지 트리거를 명시하지 않으며 **확인된 피해자·유출을 보고하지 않는다**("if either one touched a build agent or a laptop, assume every secret on that host is gone"는 가정법 권고). webhook.site 도메인과 User-Agent는 Elastic이 **방어자용 헌팅 쿼리**로 제시한 IOC이지 탐지의 단서가 아니다 |
| 31 | "그건 들고 나가서 파는 토큰이라기보다 받은 자리에서 쓰는 토큰입니다" (audience `https://management.azure.com/` 근거) | ⚠ **기술적 부정확** | GitHub OIDC 공급자가 발급하는 것은 **ID 토큰(JWT)**이고, audience를 `https://management.azure.com/`으로 달아도 **ARM이 그 토큰을 직접 받아주지 않는다.** ARM은 Entra가 발급한 액세스 토큰만 받는다. 그 ID 토큰은 Entra의 연합 자격증명과 교환해야 비로소 ARM 액세스 토큰이 되고, **교환은 러너 밖에서도 가능**하다(수명 5~10분 내). 반면 **IMDS/관리 ID 경로에서 받는 것은 처음부터 ARM용 진짜 액세스 토큰**이라 "받은 자리에서 바로 쓰는" 서술이 정확히 들어맞는다. 악성코드가 IMDS에 ARM 포함 12개 리소스 토큰을 요청한 것이 이 논지의 더 단단한 근거다 |
| 32 | "러너의 외부 통신 통제는 대개 허용 목록 방식이고 클라우드 엔드포인트는 당연히 그 목록 안에 있으니까요" | ⚠ 근거 약함(일반론) | 출처가 뒷받침하지 않는 일반 서술. 다만 본문이 "실제로 그런 변종이 돌고 있다는 말은 아닙니다"로 스스로 사정거리를 그었고, 팩트 카드도 '가정'으로 분류 → **유지 가능** |

### B-8. 실행 권고 (본문 38줄)

| # | 주장 | 상태 | 증거 |
|---|---|---|---|
| 33 | "site-packages에서 `agent_framework_meta.pth`와 `af_runtime_diag.pth`를 찾아보고" | ✓ 확인 | 두 파일명 모두 정확(1.26.1 / 1.26.2). Elastic·StepSecurity·Wiz 권고와 동일 |
| 34 | "버전은 1.26.0으로 해시까지 고정하고요" | ✓ 확인 | 모든 출처가 1.26.0 핀 고정 권고 |
| 35 | "연합 자격증명, 서비스 연결, 관리 ID에 붙은 역할 할당" 감사 | ✓ 확인 | 팩트 카드·StepSecurity 권고와 일치 |

### B-9. 고유명사·표기 스캔

- `agent-framework`, `agent_framework_meta.pth`, `af_runtime_diag.pth`, `af_runtime_diag.py`, `ACTIONS_ID_TOKEN_REQUEST_URL`, `169.254.169.254`, `https://management.azure.com/`, `.npmrc`, `.netrc`, `.git-credentials`, `sys.path`, `site`, `setsid()`, webhook.site — **철자 전부 정확** ✓
- "Elastic", "깃허브 액션스", "애저 데브옵스", "관리 ID", "PyPI" — 표기 일관 ✓ (`OpenAI` 등 금칙 표기 해당 없음)
- 직접 인용부호로 묶인 외부 발언 **0건** → 인용 검증 대상 없음 ✓
- 본문에 노출된 URL 없음(도메인 `webhook.site`만 언급, 실제 악성 URL 미노출 — 적절) ✓

---

## C. 수정 권고 (우선순위 순)

### 치명적 — 수정 전 발행 금지

**C-1. [치명적] 12줄 — 시각의 시간대가 한국 독자 기준과 9시간 어긋난다**
> 현재: "11월 17일 저녁 8시 35분, PyPI에 `agent-framework` 1.26.1이 올라왔습니다."

모든 출처의 20:35는 **UTC**다. 한국 시간으로는 **11월 18일 새벽 5시 35분**이다. 지금 문장은 한국 독자에게 KST 11/17 저녁으로 읽히고, 본문이 분 단위 타임라인을 뼈대로 삼고 있어 그대로 두면 글 전체의 정밀도가 무너진다.

선택지 둘 — 저자 취향에 맡긴다.
- (a) 시각을 지우고 간격만 남긴다(권장. 2-C절 #7 "수치는 논지를 떠받칠 때만"에 부합):
  `11월 17일 밤, PyPI에 agent-framework 1.26.1이 올라왔습니다.`
  → 이후 "6분 뒤", "31분 만에", "2분 23초 뒤", "8분 만에"는 **전부 그대로 유효**하다. 이 글이 실제로 쓰는 것은 절대 시각이 아니라 간격이다.
- (b) 시간대를 한 번 밝힌다:
  `협정세계시로 11월 17일 저녁 8시 35분, …`

**C-2. [치명적] 36줄 — 탐지 경위 서술이 사실과 다르다**
> 현재: "이번 공격이 6분 만에 잡힌 건 데이터를 밖으로 내보냈기 때문입니다. webhook.site 주소로 한 번 쏜 그 POST와 특이한 User-Agent가 지문이 됐죠."

Elastic의 `supply-chain-monitor`는 **신규 릴리스의 diff를 LLM으로 읽는 정적 분석기**다. 피해자 트래픽도, 실제 POST도 보지 않는다. 6분은 '유출이 관측되기까지'가 아니라 '**코드가 공개되고 읽히기까지**'의 시간이다. 지금 문장은 ① 탐지 원리를 틀리게 적었고 ② 그 시점에 실제 전송이 관측된 것처럼 읽힌다.

다행히 **논지는 그대로 살릴 수 있다.** 정적 분석기가 보는 신호 목록에 '난독화·예기치 않은 네트워크 호출·자격증명 유출'이 들어 있으므로, 원인을 '유출 통신'에서 '**코드 안에 박힌 유출 경로**'로 옮기면 된다.

제안:
> 이번 공격이 6분 만에 잡힌 건 코드 안에 밖으로 내보내는 줄이 들어 있었기 때문입니다. 새로 올라온 버전의 변경분을 읽는 쪽에서는 낯선 도메인으로 데이터를 압축해 쏘는 코드만큼 눈에 띄는 게 없죠. 그 도메인과 특이한 User-Agent는 그대로 방어자들의 검색어가 됐고요.

(그 뒤 "러너 안에서 토큰을 받아 그대로 클라우드 API를 호출하면 밖으로 나가는 수상한 통신이 한 번도 없습니다" 이하는 수정 없이 이어진다.)

### 중요 — 수정 권장

**C-3. [중요] 34줄 — "회수 버튼이 없습니다"는 과장이다**
> 현재: "연합 자격증명의 신뢰 관계를 지금 끊어도 이미 발급된 토큰은 만료 시각까지 멀쩡히 삽니다. 회수 버튼이 없습니다."

앞 문장은 정확하다. 뒤 문장은 아니다. **토큰을 지우는 버튼은 없지만, 권한을 떼는 버튼은 있다** — ARM은 요청마다 역할 할당을 평가하므로 역할 할당을 제거하거나 신원을 비활성화하면 그 토큰으로 할 수 있는 일이 사라진다(전파 지연 수 분~수십 분). CAE는 준실시간 차단을 제공하지만 Microsoft Graph 한정·관리 ID 미지원이라 이번 표적인 ARM에는 쓸 수 없다. Azure에 밝은 독자가 가장 먼저 반박할 지점이다.

제안:
> …만료 시각까지 멀쩡히 삽니다. 토큰을 되돌려 받는 버튼은 없어요. 할 수 있는 건 그 토큰이 가리키는 권한을 떼어 내는 것뿐이고, 그것도 전파에 시간이 걸립니다.

**C-4. [중요] 32줄 — OIDC 환경변수는 모든 러너에 있는 게 아니다**
> 현재: "그런데 그 발급 창구로 가는 길은 환경변수에 그대로 적혀 있습니다."

`ACTIONS_ID_TOKEN_REQUEST_URL`·`ACTIONS_ID_TOKEN_REQUEST_TOKEN`은 잡이 `permissions: id-token: write`를 선언했을 때만 주입된다(GitHub 공식 문서). Azure DevOps의 `SYSTEM_ACCESSTOKEN`도 명시적으로 켜야 노출된다. 지금 서술은 '모든 러너가 토큰 발급 창구를 들고 있다'로 읽히는데, 정확히는 **이미 OIDC를 쓰기로 한 잡에서만** 창구가 열려 있다. 오히려 이쪽이 글의 논지를 더 날카롭게 만든다 — 장기 비밀을 없애려고 OIDC를 켠 바로 그 잡이 표적이 된다.

제안: 그 문단에 한 문장 추가.
> 물론 아무 잡에나 있는 건 아닙니다. OIDC를 쓰겠다고 선언한 잡에만 주입되죠. 그러니까 장기 비밀을 없애려고 OIDC로 옮긴 그 잡이 정확히 표적입니다.

**C-5. [중요] 36줄 — `management.azure.com` audience를 "받은 자리에서 쓰는 토큰"의 근거로 삼는 건 기술적으로 헐겁다**

GitHub OIDC가 주는 것은 ID 토큰이고, ARM은 그 토큰을 직접 받지 않는다. Entra와 교환해야 ARM 액세스 토큰이 되며 그 교환은 러너 밖에서도 가능하다. 반면 **IMDS/관리 ID에서 받는 토큰은 처음부터 ARM용 액세스 토큰**이라 "받은 자리에서 쓴다"가 정확히 성립한다. 근거를 IMDS 쪽으로 옮기면 논지가 더 단단해진다.

제안:
> 그런데 이 코드는 러너 안의 메타데이터 주소에서 애저 리소스 매니저를 포함한 열두 곳짜리 토큰도 받아 가려 했습니다. 그건 들고 나가서 파는 토큰이라기보다 받은 자리에서 쓰는 토큰입니다.

**C-6. [중요] 12줄 — "공식 빌드가 아니었어요"는 단정을 피하는 게 안전하다**

Elastic·StepSecurity·BleepingComputer·Endor Labs는 **진입 경로를 미확인으로 명시**했고, 마이크로소프트는 BleepingComputer 문의에 무응답이다. 반대로 Wiz는 마이크로소프트 **ESRP 서명·배포 서비스의 클라이언트 인증서·개인키 침해**로 추정했는데, 이게 맞으면 악성 휠은 오히려 **공식 배포 경로를 타고** 올라온 셈이라 지금 문장과 어긋나 읽힐 수 있다. 어느 쪽이든 단정할 근거가 없다.

제안: "올라온 건 공식 빌드가 아니었어요." → `올라온 건 정상 릴리스가 아니었습니다. 공격자가 어떻게 올릴 수 있었는지는 아직 공개되지 않았고요.`
(⚠ 메인테이너 계정명 `vibiret`은 단일 출처라 **본문에 쓰지 말 것.**)

### 경미

**C-7. [경미] 24줄 — `.pth` 내용 예시는 1.26.2의 것**
"악성 버전이 집어넣은" → "두 번째 버전이 집어넣은" 정도로 한정하면 정확해진다. 1.26.1은 `agent_framework_meta.pth`(내용 `import agent_framework_meta`)였고, 38줄에서 이미 두 파일명을 다 적고 있어 지금은 미세한 불일치가 있다.

**C-8. [경미] 32줄 — GitHub Actions 경로는 1.26.2에만 추가됐다**
"깃허브 액션스, 애저 데브옵스, 그리고 관리 ID 엔드포인트가 없으면…" → 엄밀히는 Azure DevOps·관리 ID는 두 버전 모두, GitHub Actions는 두 번째 버전에서 추가. 글의 흐름상 굳이 버전을 나눌 필요는 없으나, 나눌 거면 "두 번째 버전은 깃허브 액션스까지 추가했습니다" 한 구절이면 된다. **수정하지 않아도 오류는 아님.**

**C-9. [경미/추가 정보] 22줄 — 파이썬이 이 기능을 걷어내는 중이다**
PEP 829(3.15에서 accepted)로 **`.pth`의 `import` 줄은 3.15에서 deprecated**됐고, 3.18부터는 조용히 무시된다. 대체재로 `<name>.start` 파일이 들어온다. 공식 문서에도 "Deprecated since 3.15"가 붙어 있다.
제목이 "파이썬은 왜 허용하나?"인 만큼 **"지금은 걷어내는 중"이라는 한 줄이 글을 닫아 준다.** 오류 정정이 아니라 보강 제안이다.
> 참고로 파이썬도 이 조항을 걷어내는 중입니다. 3.15에서 `import` 줄을 폐기 예정으로 표시했고, 3.18부터는 조용히 무시합니다. 다만 그 사이의 모든 버전에서는 그대로 돕니다.
(⚠ 3.18 "silently ignored"는 PEP 829 본문과 3.15 문서의 pending-removal 목록에서 확인했으나 릴리스 노트 원문까지는 확인하지 못했다. 넣을 거면 "3.15에서 폐기 예정으로 표시됐습니다"까지만 쓰는 쪽이 안전하다.)

**C-10. [경미/참고] 32줄 — 유출은 "미확인"이 아니라 일부 확인됐다**
본문의 "발급이 실제로 성공했는지는 확인되지 않았습니다"는 **토큰 발급**에 한정된 서술이라 정확하다. 다만 **Wiz는 공격자 webhook에 저장된 50건을 분석해 "세 건의 고유한 실제 피해자 데이터 유출"을 확인**했다(공격자 도구가 자기 진행 상황을 같은 공개 webhook에 보고해 들여다볼 수 있었다). 지금 문장이 "아무 일도 없었다"로 읽히지는 않으므로 **수정 불필요**하지만, 저자가 한 줄 보탤 생각이라면 이 사실이 "그 호스트의 비밀은 전부 노출된 것으로 칩니다"(38줄)라는 권고를 떠받쳐 준다.

---

## D. 종합 판정

- [ ] 발행 가능
- [x] **수정 후 발행** — 치명적 2건(C-1 시간대, C-2 탐지 경위)을 고치면 발행 가능
- [ ] 발행 보류

**필수(2):** C-1, C-2 — 둘 다 문장 교체로 해결되며 글의 구조나 논지는 건드리지 않는다.
**권장(4):** C-3(과장 완화), C-4(정확도 보강 겸 논지 강화), C-5(기술적 근거 교체), C-6(단정 회피).
**선택(4):** C-7, C-8, C-9(보강), C-10(참고).

**시점 규율:** 위반 없음.
**본문 수정 여부:** 지시대로 **초고는 수정하지 않았다.** 모든 지적은 이 리포트에만 기록.
**재검증 필요:** C-2를 반영하면 36줄 문단이 바뀌므로, 수정 후 `scripts/lint-post.mjs` 재실행 필요.
