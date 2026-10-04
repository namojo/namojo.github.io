# Fact Check Report: 2026-10-05-hfs-math-random-session-key-chain

- 대상: `_posts/2026-10-05-hfs-math-random-session-key-chain.md`
- 팩트 카드: `_workspace/daily/2026-10-05-brief.md`
- 검증 일시: 2026-10-04 (세션 기준) / 발행 예정 2026-10-05 09:00 +0900
- 검증 방식: 팩트 카드 원 출처 5건 재확인 + 추가 웹검색 6건(The Register 전문, OSV, OpenCVE, Wikimedia Commons, Horizon3.ai 보도자료, V8 구현)

---

## A. 시점 일관성 (최우선 검사)

**발행일:** 2026-10-05 (KST 월요일)

### 요일 계산 검증
| 날짜 | 요일 | 발행일 대비 | 본문 표현 | 판정 |
|------|------|-----------|----------|------|
| 2026-09-30 | **수요일** | 5일 전, 직전 주 | "현지시각으로 지난주 수요일" | ✓ 유지 |
| 2026-10-01 | **목요일** | 4일 전 | "다음 날 저녁", "목요일 저녁" | ✓ 유지 |
| 2026-10-02 | **금요일** | 3일 전 | "금요일에는" | ✓ 유지 |
| 2026-10-05 | **월요일** | 발행일 | — | ✓ |

- 2026-01-01이 목요일 → 10-05는 연중 278일째 → 월요일. 09-30은 수요일로 확정.
- 월요일(10-05) 기준 09-30은 **직전 주**에 속한다(주 시작을 일·월 어느 쪽으로 잡아도 동일). **"지난주 수요일" 표기 적절.**
- 본문이 "현지시각으로"를 명시해 KST/PT 간 하루 차이 문제를 선제 차단했다. 적절한 처리.

### 사후 시점 표현 검사
- "훗날", "결국 드러나듯", "돌이켜보면" 류 **없음** ✓
- 미래형은 "앞으로 더 줄어들지는 지켜볼 일", "내일 당장 확인할 수 있는 것들" 두 곳뿐이고 모두 발행 시점에서 열린 서술 ✓

### 용어·약어 시점성
| 용어 | 발행일 존재 여부 | 근거 |
|------|----------------|------|
| Claude Mythos | ✓ 2026-04 Project Glasswing과 함께 공개 | ai-timeline 07-30·08-07·09-10 항목 |
| Project Glasswing | ✓ 2026-04-07 발표 | Anthropic 공지, The Register 09-21 |
| Horizon3.ai의 Glasswing 합류 | ✓ 2026-07-15 보도자료 | horizon3.ai / Businesswire 20260715 |
| Z3, Koa, xorshift128+, Node v22 | ✓ 전부 이전 | — |

### 타임라인 교차
- `_style/ai-timeline.md`에 **이 사건(HFS CVE)은 아직 등재돼 있지 않다.** 발행 후 타임라인 추가 필요(Phase 4 항목).
- 타임라인의 10-02 이후 항목(앤트로픽 프런티어 아카데미 등)과 본문은 무관. **발행일 이후 사건을 과거처럼 쓴 곳 없음.** ✓

**A 판정: 시점 규율 위반 없음.**

---

## B. 사실 검증

| # | 줄 | 주장 | 상태 | 증거 | 조치 |
|---|----|------|------|------|------|
| 1 | 12 | CVE 번호 **CVE-2026-61500** | ✓ 확인 | OSV / OpenCVE / cvemon / The Register 4곳 일치 | - |
| 2 | 14 | 영향 **3.0.0 ~ 3.2.0** | ✓ 확인 | OSV, OpenCVE, cvemon 일치 | - |
| 3 | 14 | 수정 **3.2.1** | ✓ 확인 | OSV "fixed 3.2.1", GitHub v3.2.1 릴리스 | - |
| 4 | 14 | **CVSS 3.1 = 9.8** (`AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`) | ✓ 확인 | OpenCVE, cvemon | - |
| 5 | 14 | **CVSS 4.0 = 9.3** (`AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/...`) | ✓ 확인 | OSV, OpenCVE, cvemon | - |
| 6 | 19 | CWE-338, 암호학적으로 안전하지 않은 PRNG | ✓ 확인 | OSV, OpenCVE | - |
| 7 | 14 | **잭 핸리(Zach Hanley)** / Horizon3.ai / **수석 공격 엔지니어(Chief Attack Engineer)** | ✓ 확인 | theorg.com 조직도, Horizon3.ai 보도자료(2026-07-15)가 "Chief Attack Engineer"로 직접 표기. ※ The Register 본문은 "researcher"로만 적었으므로 **직함 출처는 The Register가 아니라 Horizon3.ai 1차 자료** | 팩트 카드의 출처 표기만 정정(본문 무관) |
| 8 | 14 | Horizon3.ai = 침투 테스트 회사 | ✓ 확인 | The Register "AI pen-testing company Horizon3" | - |
| 9 | 45 | **패트릭 개리티(Patrick Garrity)** / VulnCheck / 보안 연구원 | ✓ 확인 | The Register "VulnCheck security researcher Patrick Garrity" | - |
| 10 | 14 | 앤트로픽 모델 **Mythos** 사용 | ✓ 확인 | The Register, cvemon, Horizon3.ai 보도자료 | - |
| 11 | 14 | 프로젝트 글래스윙이 **제한된 파트너에게만** 열려 있음 | ✓ 확인 | Anthropic 2026-04 발표("select partners", Mythos Preview), 폐쇄 그룹 약 50개 조직, 일반 공개 보류 | - |
| 12 | 14 | 글래스윙 **시작 시점 미언급** | ✓ 금지선 준수 | 팩트 카드 ⚠ 2번 항목 | - |
| 13 | 39 | 릴리스 노트 크레딧 "Zach Hanley of Horizon3.ai, in collaboration with Claude and Anthropic Research" | ✓ 확인 | GitHub v3.2.1 실제 문구: **"Many thanks to Zach Hanley (@hacks_zach) of Horizon3.ai, in collaboration with Claude and Anthropic Research."** → 본문 인용은 **정확한 부분 인용** | - (완전 일치) |
| 14 | 12·45·49 | 공개=수요일 / 악용 탐지=목요일 저녁 / 금요일 추가 | ✓ 확인 | The Register 2026-10-03: "Wednesday's disclosure", "Thursday night activity", "As of Friday" | - |
| 15 | 45 | 중국 소재 **단일 IP**가 **미국과 일본**의 **실제 취약 호스트** 공격 | ✓ 확인 | The Register 원문: "The Thursday night activity originated from one IP address in China and targeted vulnerable servers in the US and Japan, Garrity told The Register." + 개리티 인용 "Our canaries detected an actor in China targeting real vulnerable hosts in the US." → '카나리아', '실제 취약 호스트', '미국·일본' 모두 근거 있음 | - |
| 16 | 45 | 금요일 **미국 IP 2개**(동일 서브넷)에서 **4건**, 프록시 경유 추정 | ✓ 확인 | The Register: 173.239.211[.]248 / .249, "appearing to route through proxies" | - |
| 17 | 43 | Mythos·글래스윙 누적 CVE **286건** | ✓ 확인 (단서 있음) | The Register: "**As of Friday**, Mythos and Project Glasswing have uncovered 286 CVEs, **according to Garrity's tracker**" | 귀속·시점 보강 권고(C-5) |
| 18 | 43 | 실제 악용 확인은 **이번이 두 번째** | ✓ 확인 | The Register: "up until Thursday **only one** of these bugs had been exploited in real-world attacks". 첫 번째 사례는 Ghost CMS **CVE-2026-26980** | - |
| 19 | 43 | "286건이 각각 어떤 소프트웨어의 어떤 등급이었는지도 **공개되지 않았고요**" | ✗ **오류** | 개리티의 Anthropic CVE 트래커는 **공개 목록**이다. The Register 09-21 기사와 2차 요약들이 트래커의 개별 내역(예: 225건 중 악용 1건 = Ghost CMS CVE-2026-26980)을 열거한다. "공개되지 않았다"는 사실과 다름 | **삭제 또는 재서술**(C-1) |
| 20 | 19 | `randomId(30)` = `Math.random().toString(36)` **3회** 이어 붙여 30자 | ✓ 확인 | dev.to 기술 분석: 3회 연결, `slice(2, 2+len)`, 호출당 약 10~11자 | - |
| 21 | 19 | 기동 시 1회 생성, **Koa 세션 쿠키 서명 키**로 서버 생애 내내 사용 | ✓ 확인 | dev.to, OSV 설명 | - |
| 22 | 21 | `loginSrp1`이 **인증 없이** 호출 가능, `Math.random()` 산 `sid`를 세션 쿠키로 반환 | ✓ 확인 | dev.to: "Callable by unauthenticated users… `const sid = Math.random()`"; OSV: "exposes generator outputs to unauthenticated clients during login attempts" | - |
| 23 | 21 | 서명 키와 sid가 **같은 PRNG 인스턴스** | ✓ 확인 | dev.to, OSV | - |
| 24 | 27 | 인증 없는 요청 **6회**로 **연속 출력 5개** 수집 → 상태 복원 | ✓ 확인 | dev.to: "Six unauthenticated loginSrp1 requests… Five consecutive observed values allow recovery" | - |
| 25 | 25·27 | V8 PRNG = **xorshift128+**, 내부 상태 **128비트** | ✓ 확인 | v8.dev/blog/math-random, The Register("the output of the xorshift128+ algorithm it used was fully reversible") | - (참고: Chromium 이슈 456384547이 "실제로는 xorshift128"이라는 지적을 제기했으나 V8 공식·업계 표기는 xorshift128+. 본문 표기 문제없음) |
| 26 | 25 | **Math.random()은 호출마다 정확히 52비트를 노출**(×2^52가 항상 정수) | ✓ **확인 — 저자 검증이 옳다** | V8 `ToDouble(state0)` = `(state0 >> 12) \| 0x3FF0000000000000` 후 −1.0. 64비트 중 **12비트를 버리고 52비트 가수**를 그대로 노출. 따라서 값은 k/2^52 꼴이고 ×2^52는 항상 정수. **2차 기술 분석(dev.to)의 "53비트 가수 / 11비트 폐기 / 2,048가지"는 틀렸고, 본문이 이를 따르지 않은 것이 맞다** | - |
| 27 | 25 | "나머지 버려지는 부분은 전수 탐색이 가능한 크기" (가짓수 미명시) | ✓ 금지선 준수 | 실제로는 12비트=4,096가지. 숫자를 쓰지 않아 팩트 카드 ⚠ 3번 준수 | - |
| 28 | 27 | 30자 base36 = 약 **155.1비트**처럼 보임 | ✓ 확인 | 30 × log2(36) = 155.0977… | - |
| 29 | 27 | 역산에 **마이크로소프트의 Z3 SMT 솔버** 사용 | ⚠ 귀속 부정확 | Z3가 쓰였다는 서술 자체는 The Register 근거 있음("Z3, a Microsoft-developed, publicly available Satisfiability Modulo Theories (SMT) solver, could be used to recover the PRNG seed" — **Mythos가 짚은 지점으로 보도됨**). 그러나 본문은 **직전 문장에서 "공개된 기술 분석에 따르면"으로 운을 떼고 Z3를 이어 붙였는데, 그 기술 분석(dev.to)은 Z3를 쓰지 않고 점화식 직접 역산을 설명한다** | 귀속 분리 권고(C-3) |
| 30 | 29 | 상태를 기동 시점까지 되감아 키 후보 산출 → 쿠키 HMAC로 후보 확정 | ✓ 확인 | dev.to(과거·미래 출력 모두 예측 가능), 팩트 카드 체인 4단계 | - |
| 31 | 29 | `{ username: "admin" }` 세션 위조 | ✓ 확인 | dev.to | - |
| 32 | 29 | `set_config` → `server_code`에 JS 주입 → 서버 프로세스 권한 실행 | ✓ 확인 | dev.to, OSV("remote code execution through the server_code configuration feature") | - |
| 33 | 29 | 3.2.1에서 `randomBytes(32)` / `randomUUID()`로 교체 | ✓ 확인 | dev.to: `randomBytes(32).toString('base64url')`, `randomUUID()` | - |
| 34 | 14 | HFS **3.x는 Node.js로 다시 쓰임** | ✓ 확인 | github.com/rejetto/hfs README — Node.js + TypeScript, Node 18~24. (2.x는 델파이 계열 네이티브 앱) | - |
| 35 | 14 | HFS = 폴더를 웹에 띄우는 작은 파일 서버 | ✓ 확인 | README "Turn your computer into a file-sharing server in seconds" | - |
| 36 | 35 | "Mythos가 … 두 소견을 함께 짚었다" | ✓ 확인 | The Register: Mythos가 PRNG 약점과 **출력을 흘리는 별도 코드 경로**를 함께 식별 | - |
| 37 | 35 | "그 **유출량이 상태 복원에 필요한 관측량과 정확히 맞아떨어진다**는 것까지 판단했다" | ⚠ 근거 약함 | 출처가 말하는 범위는 "Z3로 시드를 복원할 수 있음을 인지했다"까지. '유출량 = 필요 관측량'의 일치를 모델이 판단했다는 서술은 **출처에 없는 한 단계 확장** | 완화 권고(C-4) |
| 38 | 39 | "헤드라인은 대체로 '앤트로픽의 모델이 찾았다'로 적혔다" | ✓ 확인 | The Register 제목 "Anthropic's super bug-hunting model Mythos is…", aiweekly "Anthropic's Mythos finds Rejetto HFS flaw" | - |
| 39 | 45 | "익스플로잇 재구성 여부를 어느 출처도 밝히지 않았다" | ✓ 확인 | 확인한 5개 출처 모두 침묵 | - |
| 40 | 17 | 본문 이미지 = HFS 관리 화면, **2011년**, **2.x 시절** | ✓ 확인 | 파일 실물 확인: 타이틀바 "HFS ~ HTTP File Server **2.3 beta** Build 272", 로그 타임스탬프 **04.01.2011** | - |
| 41 | 17 | "**메인테이너가 직접 올린**" | ✗ **오류(경미)** | Commons `File:HTTPFileServer.png` — **Author: rejetto, Uploaded by: Moehre1992**, 2011-01-04, CC BY-SA 3.0 / GPL. 저작자는 메인테이너가 맞지만 **업로더는 제3자** | 문구 수정(C-2) |
| 42 | 53 | 커버 크레딧 "여러 가지 주사위 — Wikimedia Commons, Dietmar Rabich" | ✓ 확인 | `_workspace/image-credits-2026.md` 122행과 일치, 실물 파일(1200×630 주사위 사진) 확인 | - |
| 43 | 8 | `coverImage: ""` | ✓ 문제없음 | `build_posts_json.py` 87~89행이 `/images/covers/{slug}.jpg` 존재 시 자동 매칭. 해당 파일 **존재 확인함** → hero 폴백 아니므로 하단 크레딧 줄 유지가 맞음 | - |
| 44 | 12 | "지난주 수요일 이 사실이 **CVE-2026-61500으로 공개됐고**" | ⚠ 근거 약함 / 출처 충돌 | CVE 레코드 자체의 **published 일자는 2026-07-13**(OSV `2026-07-13T17:21:55Z`, OpenCVE, cvemon 3곳 일치)이고 HFS v3.2.1 릴리스도 7월 13일이다. 09-30 수요일에 일어난 일은 **핸리/Horizon3의 기술 상세 공개**. 본문은 7/13을 쓰지 않아 금지선은 지켰으나, "수요일에 CVE 번호로 공개됐다"는 서술은 NVD를 확인한 독자와 충돌할 수 있음 | 한 구절 수정 권고(C-6) |
| 45 | 7 | excerpt "**앤트로픽의 Mythos가 찾아낸** CVE-2026-61500" | ⚠ 본문과 충돌 | 본문 14행은 "찾아낸 사람은 … 잭 핸리", 39행은 "헤드라인은 '모델이 찾았다'로 적혔지만 … 신고한 쪽은 사람"이라며 **바로 그 표현을 비판한다**. excerpt가 글의 논지를 스스로 뒤집음 | 수정 권고(C-7) |

### 팩트 카드 "⚠ 쓰지 말 것" 금지선 준수 여부

| 금지 항목 | 초고 상태 | 판정 |
|----------|----------|------|
| CVE 공개일 "7월 13일" 표기 금지 | 절대 날짜 없음, 요일·상대 시점만 사용 | ✓ 준수 (단 C-6 문구 보강 권고) |
| Project Glasswing 시작 시점 단정 금지 | "제한된 파트너에게만 열려 있는"만 서술 | ✓ 준수 |
| 전수 탐색 가짓수(2,048) 단정 금지 | "전수 탐색이 가능한 크기"로만 서술, 숫자 없음 | ✓ 준수 |
| 노출 인스턴스 수치 금지 | 등장하지 않음 | ✓ 준수 |

**금지선 위반 0건.**

---

## C. 수정 권고 (우선순위 순)

**C-1. [치명적] 43행 — 사실과 다른 단정**
> 현재: "286건이 각각 어떤 소프트웨어의 어떤 등급이었는지도 공개되지 않았고요."

개리티의 Anthropic CVE 트래커는 공개 목록이며, 개별 CVE 내역(소프트웨어·악용 여부)이 외부에서 인용 가능한 상태다. 이 문장은 삭제하거나 다음처럼 바꿀 것.
> 대안: "286건의 내역을 기사가 하나씩 열거하지는 않습니다." 또는 문장 자체 삭제.

**C-2. [경미·사실오류] 17행 — 이미지 캡션 출처 서술**
> 현재: "메인테이너가 2011년에 직접 올린 2.x 시절 스크린샷입니다."

Commons 파일의 저작자는 rejetto(메인테이너)가 맞으나 **업로더는 Moehre1992**다. "직접 올린"은 부정확.
> 대안: "2011년 공개된 2.3 베타 시절 화면입니다. 2.x는 네이티브 앱이었고, 이번에 문제가 된 3.x는 Node.js로 다시 쓰인 뒤의 버전이고요."
> (출처 줄은 현행 `출처: Wikimedia Commons, rejetto` 유지 가능 — 저작자 표기로는 정확)

**C-3. [경미·귀속] 27행 — Z3의 출처 혼선**
> 현재: "공개된 기술 분석에 따르면 … 역산에는 마이크로소프트의 Z3 SMT 솔버가 쓰였고요."

Z3를 언급한 것은 The Register이고, 그것도 **Mythos가 "Z3를 쓰면 시드를 복원할 수 있다"는 점을 짚었다**는 맥락이다. 반면 같은 문장이 근거로 삼은 dev.to 기술 분석은 Z3 없이 점화식을 직접 역산한다.
> 대안: "…상태가 복원되고, 상태가 복원되면 과거와 미래의 모든 출력이 예측 가능해집니다. 보도에 따르면 Mythos는 여기에 마이크로소프트의 Z3 SMT 솔버를 쓰면 시드를 복원할 수 있다는 점까지 짚었습니다."
> (이렇게 고치면 35행의 '결합' 논지도 출처 안에서 더 강해집니다.)

**C-4. [경미·과잉] 35행 — 출처를 한 단계 넘는 서술**
> 현재: "…그 유출량이 상태 복원에 필요한 관측량과 정확히 맞아떨어진다는 것까지 판단했다는 것이죠."

출처가 확인해 주는 범위는 "두 소견을 함께 식별했고, Z3로 시드 복원이 가능함을 인지했다"까지다.
> 대안: "…그 출력으로 시드를 되돌릴 수 있다는 데까지 판단했다는 것이죠."

**C-5. [경미·귀속] 43행 — 286건의 시점과 출처**
> 현재: "The Register에 따르면 Mythos와 프로젝트 글래스윙이 지금까지 찾아낸 CVE는 286건이고"

원문은 "**금요일 기준**, **개리티의 트래커**에 따르면"이다.
> 대안: "금요일 기준으로 개리티가 운영하는 트래커에 올라 있는 Mythos·프로젝트 글래스윙 발(發) CVE는 286건이고"

**C-6. [경미·충돌 회피] 12행 — "CVE 번호로 공개됐다"는 표현**
> 현재: "현지시각으로 지난주 수요일 이 사실이 CVE-2026-61500으로 공개됐고"

CVE 레코드의 published 일자는 7월 13일로 집계처 3곳에 남아 있다. 수요일에 있었던 일은 상세 분석의 공개다. 요일 표기는 그대로 두되 주어를 바꾸는 편이 안전하다.
> 대안: "현지시각으로 지난주 수요일 이 사실이 공개됐고(CVE-2026-61500), 다음 날 저녁에 실제 공격이 들어왔습니다."
> 또는 "…지난주 수요일 상세 분석이 공개됐고"

**C-7. [경미·논지 충돌] 7행 — excerpt**
> 현재: "앤트로픽의 Mythos가 찾아낸 CVE-2026-61500은…"

본문 39행이 바로 이 표현("앤트로픽의 모델이 찾았다")을 비판 대상으로 삼는다. excerpt가 본문의 논지를 먼저 뒤집는다.
> 대안: "Horizon3.ai의 연구자가 앤트로픽 Mythos와 함께 찾아낸 CVE-2026-61500은 공개 다음 날 저녁 실제 공격에 쓰였는데요."

**C-8. [참고] 발행 후 처리**
- `_style/ai-timeline.md`에 본 사건 미등재. 발행 후 2026-09-30~10-02 항목으로 추가 권고(⚠ 메모: CVE published 7/13 vs 보도상 공개 9/30 충돌, 트래커 286건은 "금요일 기준·개리티 트래커", 2차 분석의 "11비트/2,048" 오류 주의).
- 첫 번째 악용 사례가 Ghost CMS **CVE-2026-26980**이라는 사실은 43행 "두 번째"의 설득력을 높이는 재료지만, 본문 추가는 선택 사항.

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — ✗ 2건(C-1, C-2) 중 발행 중단급은 없음
- [ ] 발행 보류

시점 규율 위반 없음, 팩트 카드 금지선 위반 없음. 핵심 수치(CVE 번호·영향/수정 버전·CVSS 9.8/9.3·CWE-338)와 인물(핸리 = Horizon3.ai 수석 공격 엔지니어, 개리티 = VulnCheck 보안 연구원), 릴리스 노트 인용, 공격 타임라인, 기술 체인 전 단계가 1차·준1차 출처로 확인됐다. 특히 본문의 중심축인 **"Math.random()은 호출마다 정확히 52비트를 노출한다"는 저자 검증이 V8 구현(`state0 >> 12`)과 정확히 일치하며, 널리 퍼진 2차 분석의 "53비트/11비트/2,048가지"가 오히려 틀렸다.** 이 점은 글의 강점이다.

**C-1만 고치면 발행에 지장 없다.** C-2~C-7은 같은 패스에서 함께 처리 권장.

---

### 치명적 오류 (발행 중단 사유)

**없음.** 단, 아래 1건은 **발행 전 반드시 수정**해야 한다.

1. **43행** — "286건이 각각 어떤 소프트웨어의 어떤 등급이었는지도 공개되지 않았고요"는 사실과 다르다. 개리티의 트래커는 공개 목록이다. → 삭제 또는 "기사가 내역을 열거하지는 않습니다"로 재서술.

### 경미한 지적

1. **17행** — 이미지 캡션 "메인테이너가 2011년에 직접 올린": 저작자는 rejetto, 업로더는 Moehre1992. "직접 올린" 삭제.
2. **27행** — Z3의 출처가 dev.to 기술 분석이 아니라 The Register이며, 보도상 Mythos가 짚은 지점이다. 귀속 분리.
3. **35행** — "유출량이 필요 관측량과 정확히 맞아떨어진다는 것까지 판단했다"는 출처 범위를 한 단계 넘는다. "시드를 되돌릴 수 있다는 데까지"로 완화.
4. **43행** — "The Register에 따르면 … 지금까지" → "금요일 기준, 개리티의 트래커에 따르면".
5. **12행** — "CVE-2026-61500으로 공개됐고"는 CVE 레코드 published(7/13)와 충돌 소지. "이 사실이 공개됐고(CVE-2026-61500)" 정도로 완충.
6. **7행 excerpt** — "앤트로픽의 Mythos가 찾아낸"이 본문 39행의 비판 대상 표현과 동일. 행위 주체를 사람으로 되돌릴 것.
7. **45행** — "탐지했다고 밝힌 것이 … 목요일 저녁": 출처가 확정하는 것은 **탐지 시점**이 목요일 밤이라는 사실이고, 개리티의 게시 시각은 확인되지 않았다. "탐지한 것이 바로 다음 날 목요일 저녁입니다"로.
8. **참고** — 소제목 `### ▸`가 3개다(스타일 관례는 보통 4개). 사실 검증 범위 밖이므로 판단은 ghostwriter에 맡김.
9. **참고** — `coverImage: ""`는 빌드 스크립트의 슬러그 매칭으로 `/images/covers/hfs-math-random-session-key-chain.jpg`(실물 확인함)가 잡히므로 하단 커버 크레딧 줄 유지가 규칙에 맞다. 문제없음.
