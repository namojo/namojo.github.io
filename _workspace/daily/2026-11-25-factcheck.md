# Fact Check Report: java4shell-base64-intrinsic-cpu

- 검증일: 2026-11-25 (KST)
- 대상: `_posts/2026-11-25-java4shell-base64-intrinsic-cpu.md`
- 팩트 카드: `_workspace/daily/2026-11-25-brief.md`
- 종합: **수정 후 발행** — 사실관계·수치·메커니즘은 전량 확인됐으나 **귀속(attribution) 오류 3건이 치명적**이다. 세 건 모두 칼리프가 하지 않은 말을 칼리프에게 돌렸다. 문장 셋만 고치면 발행 가능.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-25 (KST)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|-----------|---------|-----------|------|
| 칼리프, CVE-2026-114938 공개 | 2026-11-17 | 이전 ✓ | 유지 |
| 오라클 11월 Critical Security Patch Update(수정 빌드 배포) | 2026-11-17 | 이전 ✓ | 유지 |
| OpenJDK 권고 | 2026-11-17 | 이전 ✓ | 유지 |
| CISA 즉시 패치 권고 알림 | 2026-11-17 | 이전 ✓ | 유지 |
| Log4Shell | 2021-12 | 이전 ✓ | 유지 ("2021년" 정확) |
| 17.0.21 출시 | 2026-10-20 | 이전 ✓ | 유지 ("10월에 나온 17.0.21" 정확) |

- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" 류 **없음** ✓. 모든 서술이 공개 후 일주일 시점과 일치.
- **용어·약어 시점성:** AVX-512 VBMI, 인트린식, `UseBASE64Intrinsics`, Java4Shell 모두 발행일 이전부터 통용 ✓.
- **"내일 확인할 것은 두 가지입니다"(본문 38줄):** ⚠ 경미. 공개 **8일 차**, CISA가 '즉시 패치'를 권고한 사안이라 '내일'은 긴급성과 어긋나게 읽힌다. 사실 오류는 아니고 시점 붕괴도 아니지만, 일주일 지난 글이라는 전제를 살리려면 `아직 안 했다면 지금 확인할 것은 두 가지입니다` 쪽이 자연스럽다.
- **패치 진행 상황:** 11/23 기준 AWS 보안 공지는 서비스별 패치 '진행 중'으로 갱신됐고, 아틀라시안·소나큐브·일부 레드햇 제품은 수정본 미배포로 보도됐다(Tenable·watchTowr). 본문은 "패치하라는 얘기는 이미 모든 곳에 나와 있습니다" 한 줄로만 처리하는데, **글의 각도가 '버전이 아니라 CPU'이므로 충돌하지 않는다.** 보강은 선택 사항.

→ **시점 규율 위반 없음.**

---

## B. 사실 검증

### B-1. 날짜·주체·버전

| # | 주장(본문) | 상태 | 증거 | 조치 |
|---|------|------|------|------|
| 1 | 11월 17일 칼리프(Calif)가 공개 | ✓ 확인 | calif.io/java4shell, Tenable FAQ, Sophos SA-20261118 | - |
| 2 | 발견·보고 주체가 Calif | ✓ 확인 | calif.io 자체 공개, Datadog "It was reported by Calif.io" | - |
| 3 | 오라클이 같은 날 11월 정기 패치로 수정본 배포 | ✓ 확인 | Tenable: "November 2026 Critical Security Patch Update(CSPU), 11/17". 사전 예고 advisory가 있던 정기 회차이므로 '정기 패치' 표현 타당 | - (※ 일부 보도는 오라클 사전 예고문에 이 CVE가 적시되지 않았다고 지적하나 본문 표현에는 영향 없음) |
| 4 | CISA도 당일 권고 | ✓ 확인 | CISA 알림 2026-11-17, THN 11-18 보도 | - |
| 5 | Log4Shell을 따서 Java4Shell | ✓ 확인 | 전 매체 공통 | - |
| 6 | 영향 하한 17.0.6 이상 | ✓ 확인 | Calif 원문 "OpenJDK 17.0.6 or newer", Endor Labs, Datadog(17.0.6 ~ before 17.0.21.1) | - |
| 7 | 21·25·27 라인 대상 | ✓ 확인 | OpenJDK 권고, Datadog(21.0.13.1 / 25.0.5.1 / 27.0.1.1 미만) | - |
| 8 | 11월 17일 빌드로 올려야 함 | ✓ 확인 | 수정 빌드 17.0.21.1+4 / 21.0.13.1+4 / 25.0.5.1+4 / 27.0.1.1+4 (11/17) | - |
| 9 | **"10월에 나온 17.0.21은 수정본이 아닙니다"** | ✓ 확인 | 오라클 17.0.21 릴리스 노트 **2026-10-20**(빌드 17.0.21+9). 11월 CSPU가 17.0.21.0.3 → **17.0.21.1**로 교체. 즉 `.1`이 더 붙는 쪽이 수정본 | - (지적 사항의 핵심 포인트, 정확) |

### B-2. CPU 조건

| # | 주장 | 상태 | 증거 | 조치 |
|---|------|------|------|------|
| 10 | 인텔 Ice Lake 이후 제온 | ⚠ 대체로 맞으나 일반화 | Calif 원문 목록은 **Ice Lake / Sapphire Rapids / Emerald Rapids / Granite Rapids**. 단 Xeon 6 E-core(시에라 포레스트) 계열은 Ice Lake 이후지만 AVX-512 자체가 없어 미해당 | 바로 다음 문장("AVX-512가 있다고 전부 해당하는 것도 아니라서")이 완화하므로 **유지 가능**. 더 정확히 하려면 "Ice Lake 계열 이후의 제온"처럼 계열로 표현 |
| 11 | AMD Zen 4 이후 | ✓ 확인 | Calif: AMD EPYC·Ryzen Zen 4 이상 | - |
| 12 | ARM 서버 영향 없음 | ✓ 확인 | Calif·Datadog 명시(네이티브 ARM64 JVM은 x86 AVX-512 경로 자체가 없음) | - |
| 13 | AVX-512가 있어도 해당하지 않는 경우가 있다 | ✓ 확인 | Security Boulevard(Eclypsium 랩): **Xeon Platinum 8168(Skylake)** 은 avx512f·avx512bw·bmi2는 보고하나 **avx512vbmi 없음** → 미해당. 네 기능(bmi2 EBX b8 / avx512f EBX b16 / avx512bw EBX b30 / avx512vbmi ECX b1)을 모두 보고해야 함 | - |

### B-3. 메커니즘 (이 글의 중심축 — 전수 검증)

| # | 주장 | 상태 | 증거 | 조치 |
|---|------|------|------|------|
| 14 | JVM이 **기동 시** CPU 기능을 읽는다 | ✓ 확인 | Security Boulevard: "The JVM reads these bits through CPUID at startup" | - |
| 15 | JIT(C2)가 뜨거운 경로를 컴파일하며 자바 메서드 본문을 손으로 쓴 어셈블리 스텁으로 치환 = 인트린식 | ✓ 확인 | Datadog·Semgrep: 인트린식은 C2가 `decode` 경로를 컴파일한 뒤에야 작동(워밍업 필요). HotSpot 인트린식의 정의와 일치 | - (워밍업 조건을 본문이 생략했으나 오류 아님) |
| 16 | `A` 128개 + `=` 하나 → 출력 버퍼 **98바이트** | ✓ 확인 | Datadog: PoC `b"A"*128 + b"="`, 할당 98바이트. JDK `outLength` 산식으로도 `3*((129+3)/4) - 1 = 98` 일치 | - |
| 17 | 앞 128자가 **96바이트**로 디코드 | ✓ 확인 | Datadog 명시. 입력 64바이트 → 출력 48바이트 단위 × 2 | - |
| 18 | 꼬리 `=` 하나 → `(길이/4)*3 = 0`, 패딩 몫 1을 빼서 **-1**, 음수 검사 없음 | ✓ 확인 | Datadog: "the padding branch decrements it to -1. Nothing checks for negative values" | - |
| 19 | -1이 "몇 바이트 기록할지" 자리에 들어가 "전부 써라"로 읽힘 | ✓ 확인 | Datadog: -1의 하위 1바이트를 255로 읽어 **BZHI가 64비트를 전부 남김** → 전폭 마스크드 스토어. 본문은 용어 한도(3개) 때문에 이름 없이 동작만 서술 — 정확 | - |
| 20 | **64바이트 통째 기록, 98바이트 배열 뒤로 62바이트 초과 기록** | ✓ 확인 | Datadog 도표 캡션 "62 bytes past the 98-byte array". 산술도 일치(96+64=160, 160−98=62). Calif의 65자 변형(50바이트 할당, offset 48에서 64바이트 → 62바이트 초과)도 같은 62 | - |
| 21 | `IllegalArgumentException`이 **쓰기 이후에** 던져지고, 잡아도 훼손이 남는다 | ✓ 확인 | Datadog: "only after the out-of-bounds write has already happened, so catching it doesn't undo the damage". Calif도 동일 취지 | - |
| 22 | **"칼리프의 실험에서 옆 배열 헤더가 망가지고 JVM이 나중에 GC 중 죽었다"** | ✗ **오류(귀속)** | 이 실험은 **Datadog Security Labs 자체 시험**이다 — 원문 축자: "In a standalone test, the extra write corrupted a neighboring array's header and **the JVM later crashed during garbage collection**." Datadog은 Calif에게 '취약점 보고'만 귀속한다. Calif 원문에는 GC 중 크래시 서술이 **없고**, "Incorrect placement could cause the JVM to crash, but in many instances, we can simply try again"까지만 있다(이웃 배열의 **length 덮어쓰기**는 익스플로잇 체인 설명으로 등장) | **치명적 — 주체 교체 필요** |
| 23 | **"칼리프도 안정적인 코드 실행보다 서비스를 떨어뜨리는 쪽이 더 쉽다고 적었다"** | ✗ **오류(귀속)** | 이 평가도 **Datadog**의 것 — 축자: "Denial of service is the more readily achievable impact…" / "denial of service is more readily achievable than reliable code execution." Datadog은 Calif에게 귀속하지 않는다. 유사 비교는 **VulnCheck의 케이틀린 콘던**(Help Net Security)이 했다. **칼리프 본인은 오히려 반대 방향으로 강하게 썼다** — "With careful exploitation, the corruption can reveal sensitive memory, as Heartbleed did, or lead to remote code execution." 칼리프가 실제로 한 절제 발언은 "The exploit is not a universal point-and-shoot" / "Every target needs a bespoke profile" | **치명적 — 주체 교체 또는 칼리프의 실제 문장으로 교체** |
| 24 | 인트린식이 걸린 다른 메서드: CRC32, AES, 해시, 배열 비교, 문자열 비교 | ✓ 확인 | HotSpot 실제 플래그·인트린식: `UseCRC32Intrinsics`·`UseCRC32CIntrinsics`, `UseAESIntrinsics`·`UseAESCTRIntrinsics`, `UseSHA1/256/512Intrinsics`(+최근 `vectorizedHashCode`), `UseVectorizedMismatchIntrinsic`(`Arrays.equals`/`mismatch`), `String.compareTo`·`equals`·`indexOf` 인트린식(`vmIntrinsics.hpp`) | - |
| 25 | "저기도 비슷한 구멍이 있다는 뜻은 아닙니다"(과장 차단) | ✓ 적절 | 사실 주장 아님. 과장 방지 문장으로 유지 권장 | - |

### B-4. 영향 제품·완화책·확인 명령

| # | 주장 | 상태 | 증거 | 조치 |
|---|------|------|------|------|
| 26 | Jenkins, Jira, Confluence, Keycloak이 기본 설치로도 영향받는다고 **보고됨** | ✓ 확인 | Calif 원문 미인증(pre-auth) RCE 목록: **Keycloak, Atlassian Jira, Atlassian Confluence, JFrog Artifactory, Jenkins, PingFederate**(초기 테스트, 비망라). 본문은 그중 4종만 들었고 "보고된"으로 완화 — **과장 아님** | - (※ 칼리프가 PoC를 공개한 것은 Jenkins·Keycloak 두 건, 나머지는 자체 테스트 결과) |
| 27 | `-XX:-UseBASE64Intrinsics`로 그 조각만 끌 수 있다 | ✓ 확인 (철자 포함) | Calif·Datadog·Qualys 모두 동일 철자(`BASE64` 대문자). HotSpot 실제 플래그명과 일치. "좁은 선택지"라는 본문의 뉘앙스도 출처(AWS: 즉시 업데이트 불가 시에만)와 일치 | - |
| 28 | `java -XX:+PrintFlagsFinal -version`으로 JVM이 무엇을 골랐는지 확인 | ✓ 확인 | Security Boulevard: 운영과 **같은 바이너리·같은 옵션**으로 실행해 `UseAVX`·`UseBASE64Intrinsics` 확인 권고 — 본문 서술과 일치 | - (출처는 "`UseBASE64Intrinsics=true` 만으로는 노출 확정 아님"을 경고. 본문은 "무엇을 골랐는지 읽는 편이 낫습니다" 수준이라 과신 유도 아님) |
| 29 | 로그인 전에 Base64를 푸는 자리: **JWT, Basic 인증 헤더, 쿠키, 멀티파트 경계** | ⚠ 1개 부정확 | 출처들이 공통으로 드는 미인증 경로는 **HTTP Basic 인증 헤더, JWT, SAML, 파일 업로드**(Palo Alto·Sysdig·Coralogix, Kevin Breen은 Tomcat Basic 인증·java-jwt 지목). **`멀티파트 경계(boundary)`는 Base64 디코드 대상이 아니다** — 경계는 구분자 문자열일 뿐이고, Base64가 풀리는 것은 `Content-Transfer-Encoding: base64`가 붙은 **본문 파트**다. 세션 쿠키는 출처에 명시되진 않으나 실무상 Base64 인코딩이 흔해 타당 | **경미(기술적 부정확) — "멀티파트 경계" → "파일 업로드" 또는 "멀티파트 본문" 으로 교체 권고** |
| 30 | **"오토스케일링 혼합 / VM 마이그레이션·인스턴스 타입 변경 — 뒤의 두 가지는 칼리프가 직접 짚은 시나리오"** | ✗ **오류(귀속)** | VM 마이그레이션·인스턴스 타입 변경 서술의 출처는 **Security Boulevard 기고(Eclypsium, 필자 Chris Garland)** 다 — "a workload's processor can change underneath it when a VM migrates to a newer host" / 인스턴스 타입 변경도 같은 효과 / "not vulnerable today can be vulnerable next week." **칼리프 원문에는 마이그레이션·인스턴스 타입 언급이 전혀 없다**(Help Net Security·Datadog에도 없음). 오토스케일링 혼합 패밀리는 그 기고에도 없는 저자 추론인데, 본문이 "뒤의 두 가지"로 한정해 귀속 범위는 맞게 잡았으나 **귀속 대상이 틀렸다** | **치명적 — 주체 교체 또는 귀속 문장 삭제** |

### B-5. 커버 이미지 크레딧

| # | 주장 | 상태 | 증거 | 조치 |
|---|------|------|------|------|
| 31 | "서버 메인보드에 장착된 EPYC 프로세서 — Wikimedia Commons, Smial" | ✓ 확인 | `_workspace/image-credits-2026.md` 201행: `Amd epyc 7302 supermicro H11SSL-NC IMGP3532 smial wp.jpg` — Smial, FAL. 커먼스에 같은 촬영 세트(Supermicro H11SSL-NC + EPYC 7302, Smial, 2020-03)가 실재 | - (피사체 서술이 사진과 일치) |
| 32 | 프런트매터 `coverImage: ""` | ? 확인 불가(도구 제약) | 이 레포 관례상 비워 두고 슬러그 파일명으로 매칭(`public/images/covers/java4shell-base64-intrinsic-cpu.jpg`). ripgrep이 바이너리를 건너뛰어 파일 존재를 확인하지 못함 | **발행 전 파일 존재 여부만 눈으로 확인** (없으면 하단 크레딧 줄도 함께 제거해야 함 — 텍스트 카드·hero 폴백에는 크레딧 줄을 넣지 않는 것이 규칙) |

### B-6. 의도적으로 뺀 것 — 오도 여부 판단

| 항목 | 판단 |
|------|------|
| **CVSS 점수 미기재** | **적절한 생략.** 칼리프 CVSS 4.0 **9.2(Critical)** vs 오라클 CVSS 3.1 **8.1(High, 공격 복잡도 높음)** vs Amazon Linux **8.8/Important** — 버전이 달라 직접 비교가 불가능하다. 본문은 점수 없이 'CISA 권고 + 기본 설치 영향 제품'으로만 긴급성을 설명하므로 오도가 없다. 쓰려면 "누가 매긴 점수인지"를 붙여야 하는데, 이 글의 논지(버전이 아니라 CPU)에 점수는 기여하지 않는다. |
| **KEV 등재 여부 미기재** | **오도 아님.** 2026-11-22 기준 **KEV 미등재**이고 본문은 KEV를 암시하지 않는다. "CISA도 당일 즉시 패치하라는 권고를 올렸습니다"는 알림(alert)의 성격을 정확히 서술한 것이고, 구속력 있는 운영지침(BOD)으로 과장하지 않았다. |
| **악용 현황 미기재** | **기정사실화 없음 ✓.** 본문에 '악용되고 있다'는 취지의 문장은 단 한 줄도 없다. 긴급성의 근거를 CISA 권고와 제품 노출 범위에만 걸었고, 마지막 문단은 오히려 "간헐적으로 죽는 노드가 공격인지 불량인지 가려내기 어렵다"는 **가정형**이다. <br>참고(쓰지 않아도 무방): 11/18~11/21 사이 **스캐닝·시도**는 보고됐다 — watchTowr 허니팟(`java4shell-recon` UA), GreyNoise 7개 IP·261건(Confluence·Jenkins·Spring Boot 엔드포인트), Cloudflare(ARTEX와 동일 IP), Previdian 5개 센서 9건. **성공한 침해 확인 사례는 없고** Cisco Talos·캐나다 사이버센터는 '악용 관측 없음'이라고 밝혔다. 넣는다면 "스캐닝은 시작됐지만 성공 사례는 확인되지 않았습니다" 한 절 이상은 불필요. |

---

## C. 수정 권고 (우선순위 순)

### [치명적] 1. 본문 36줄 — 칼리프에게 돌린 두 문장 (B-22, B-23)

현재:
> 칼리프의 실험에서는 옆에 있던 배열의 헤더가 망가졌고, JVM은 한참 뒤 가비지 컬렉션을 돌다 죽었습니다. 덮어쓰는 값을 공격자가 마음대로 고를 수는 없어서, 칼리프도 안정적인 코드 실행보다 서비스를 떨어뜨리는 쪽이 더 쉽다고 적었습니다.

교체안(귀속만 바로잡고 어투 유지):
> 데이터독이 따로 돌려 본 시험에서는 옆에 있던 배열의 헤더가 망가졌고, JVM은 한참 뒤 가비지 컬렉션을 돌다 죽었습니다. 덮어쓰는 값을 공격자가 마음대로 고를 수는 없어서, 데이터독은 안정적인 코드 실행보다 서비스를 떨어뜨리는 쪽이 더 쉽다고 봤고요. 칼리프도 "타깃마다 맞춤 프로파일이 필요하다"며 범용 익스플로잇은 아니라고 적었습니다.

※ 마지막 절은 선택. 다만 **칼리프 본인은 "하트블리드처럼 민감한 메모리를 드러내거나 원격 코드 실행으로 이어질 수 있다"고 더 세게 썼으므로**, 절제 평가를 칼리프 이름으로 내보내면 원문과 반대가 된다.
※ '데이터독'이 처음 등장하는 고유명사이므로 병기 규칙에 따라 첫 등장만 `데이터독(Datadog)` 처리 검토.

### [치명적] 2. 본문 40줄 — 마이그레이션 시나리오의 귀속 (B-30)

현재:
> 뒤의 두 가지는 칼리프가 직접 짚은 시나리오예요.

문제: 칼리프 공개문에 해당 서술이 없다. 출처는 Security Boulevard에 실린 Eclypsium 분석이다.

선택지 두 가지 — 어느 쪽이든 무방하다.
- (a) 귀속 교체: `뒤의 두 가지는 이번 건을 분석한 보안업체 이클립시움이 짚은 시나리오예요.`
- (b) 귀속 삭제: 문장을 통째로 지운다(앞 문장만으로 논지가 성립하고, 분량도 줄어든다). **권장.**

### [경미] 3. 본문 38줄 — "멀티파트 경계" (B-29)

> JWT, Basic 인증 헤더, 쿠키, 멀티파트 경계.
→ `JWT, Basic 인증 헤더, 쿠키, 파일 업로드.`
(경계 문자열은 Base64로 풀리지 않는다. 풀리는 것은 전송 인코딩이 붙은 본문 파트다.)

### [경미] 4. 본문 32줄 — "정확히"

> 자바 쪽은 출력 버퍼를 98바이트로 정확히 잡습니다.
→ `자바 쪽은 출력 버퍼를 규칙대로 98바이트로 잡습니다.`
(입력 자체가 잘못된 문자열이라 98이 '정확한' 크기라고 할 근거가 없다. 할당이 버그가 아니라는 뜻은 뒤 문장 "여기까지는 멀쩡합니다"가 이미 전달한다.)

### [경미] 5. 본문 26줄 — "AVX-512라는 비교적 최근의 벡터 명령"

AVX-512 자체는 2016년부터 있었고, 이번 조건은 2019년 아이스레이크에서 들어온 VBMI다. `비교적 최근의`를 빼거나 `서버용 벡터 명령`으로 바꾸면 뒤의 "AVX-512가 있다고 전부 해당하는 것도 아니라서"와도 어긋나지 않는다.

### [경미] 6. 본문 38줄 — "내일 확인할 것은"

공개 8일 차 글이므로 `아직 안 했다면 지금 확인할 것은 두 가지입니다` 쪽이 긴급성과 맞는다. (저자 취향 영역, 사실 오류 아님.)

### [확인 요망] 7. 커버 파일 존재 (B-32)

`public/images/covers/java4shell-base64-intrinsic-cpu.jpg`가 실제로 있는지 발행 전 확인. 없으면 48줄 크레딧 줄도 함께 제거.

### [하네스 메모] 8. 팩트 카드 오염원 수정

이번 세 건의 치명적 오류는 전부 팩트 카드에서 내려온 것이다. 같은 오류가 재발하지 않도록 `_workspace/daily/2026-11-25-brief.md`를 고쳐 둘 것:
- 60행 `**VM이 신형 호스트로 … 들어올 수 있다.** (Calif)` → **(Eclypsium / Security Boulevard)**
- 87행 `Calif 실험에서는 이웃 배열의 헤더가 망가졌고 JVM이 나중에 GC 중에 죽었다.` → **Datadog 자체 시험**
- 88행 `… 범용 익스플로잇은 없다(Calif).` → DoS 비교는 **Datadog**(및 VulnCheck), '범용 익스플로잇 아님'만 **Calif**
- 59행 `패스스루 구성에서는 네 기능이 모두 보였다(Calif 실험실)` → 해당 랩 관측도 **Eclypsium**

### [참고] 9. 타임라인 갱신

`_style/ai-timeline.md`에 이 사건 항목이 아직 없고, '오늘' 행이 2026-11-23에 멈춰 있다. 발행 후 11-17 Java4Shell 행 추가 + 기준일 갱신 권고. (참고로 11-16 Apache httpd, 11-20 PyPI 공급망, 11-22 카나리아 토큰에 이어 보안 토픽이 연속된다 — 쿼터 판단은 news-curator 몫.)

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — 치명적 3건(모두 귀속 오류, C-1·C-2)을 고치면 발행 가능. 경미 4건은 권고.
- [ ] 발행 보류

**요약:** 날짜(11/17 공개·오라클 수정·CISA 권고), 버전(17.0.6 하한, 21·25·27, 10월 17.0.21은 미수정·수정본은 `.1`), CPU 조건(아이스레이크 이후 제온·Zen 4 이후·ARM 미영향·VBMI 없는 스카이레이크 제온 예외), 제품 목록, 플래그 철자, 그리고 **이 글의 중심축인 메커니즘 수치 전량(98바이트 할당 / 96바이트 디코드 / -1 / 64바이트 전폭 기록 / 62바이트 초과 / 예외는 쓰기 이후)** 이 1차·권위 출처와 일치한다. 악용을 기정사실로 읽히게 쓴 대목도 없고, CVSS·KEV 생략은 오히려 정확한 판단이다. 남은 문제는 **칼리프가 하지 않은 말 세 개**뿐이다.

---

## 출처

- https://calif.io/java4shell (1차, 발견 주체 공개문 — 직접 열람)
- https://securitylabs.datadoghq.com/articles/java4shell-remote-code-execution-in-openjdk-cve-2026-114938/ (메커니즘 수치·GC 크래시 시험·DoS 평가의 실제 출처 — 직접 열람)
- https://securityboulevard.com/2026/11/java4shell-patch-java-but-check-the-processor-first/ (Eclypsium, CPUID 기능 비트·스카이레이크 예외·VM 마이그레이션 시나리오의 실제 출처 — 직접 열람)
- https://www.tenable.com/blog/java4shell-cve-2026-114938-frequently-asked-questions-about-openjdk-rce-vulnerability (오라클 CSPU·KEV 미등재·악용 현황 — 직접 열람)
- https://thehackernews.com/2026/11/cisa-urges-immediate-patching-of.html (CISA 권고일·스캐닝 보고 — 직접 열람)
- https://www.helpnetsecurity.com/2026/11/18/java4shell-openjdk-vulnerability-cve-2026-114938/ (칼리프 축자 인용·VulnCheck 콘던의 난이도 비교 — 직접 열람)
- https://www.oracle.com/java/technologies/javase/17-0-21-relnotes.html (17.0.21 = 2026-10-20)
- https://www.sophos.com/en-us/security-advisories/sophos-sa-20261118-java4shell
- https://www.endorlabs.com/learn/java4shell-unauthenticated-rce-reported-in-openjdk-17-cve-2026-114938
- https://blog.qualys.com/vulnerabilities-threat-research/2026/11/17/how-to-find-mitigate-and-patch-the-critical-java4shell-flaw-cve-2026-114938-now
- https://watchtowr.com/intelligence/java4shell-cve-2026-114938-faq/
- https://www.paloaltonetworks.com/blog/cloud-security/java4shell-cve-2026-114938-risks-mitigations.md/ · https://www.sysdig.com/blog/java4shell-cve-2026-114938-pre-auth-rce-in-openjdk (미인증 Base64 경로 목록)
- https://aws.amazon.com/security/security-bulletins/2026-189-aws/
