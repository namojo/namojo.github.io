# Fact Check Report: 2026-11-16-apache-http2-assign-headers-race

- 검증 수행: 2026-11-15~16 (KST)
- 초고: `_posts/2026-11-16-apache-http2-assign-headers-race.md`
- 팩트 카드: `_workspace/daily/2026-11-16-brief.md`
- 종합: **수정 후 발행** (치명적 1건 — 51줄. 고치면 발행 가능)

---

## 0. 치명적 오류 (발행 전 반드시 수정)

### ✗ C-1. 51줄 — "공개된 공격 코드도 ... 아직은 없습니다" (사실과 다름)

> 본문 51줄: `공개된 공격 코드도, 실제 악용 보고도 아직은 없습니다.`

팩트 카드는 **2026-11-12 기준**으로 "공개 PoC 없음"을 적어 뒀고 초고가 그대로 받았는데, **그 직후 상황이 바뀌었다.**

- **2026-11-12**, 깃허브에 PoC가 공개됐다 — `googlesky/CVE-2026-119618`. 컨테이너 랩 + 표준 라이브러리만 쓰는 Python HTTP/2 PoC(`poc/poc.py`, `poc/h2.py`), ASan·TSan 증거, 2.4.71 차분, workaround 시험을 포함한다. 저장소가 주장하는 임팩트는 "Heap corruption in an httpd child process; **potential** remote code execution" — 힙 손상·SEGV는 재현하되 **코드 실행은 시연하지 않는다.**
  - https://github.com/googlesky/CVE-2026-119618
- **2026-11-13**, Sysdig가 이를 보도 — "A proof-of-concept was posted on GitHub on November 12, 2026, showing heap corruption. **No PoC for the RCE** had been released as of publication."
  - https://webflow.sysdig.com/blog/httpd-cve-2026-119618-detecting-heap-corruption-and-rce-in-apache-http-server-mod-http2
- 더 강한 서술이 **레드햇 1차 페이지에** 있다: `access.redhat.com/security/cve/CVE-2026-119618` 본문에 **"public research has demonstrated a reliable exploit against a default-configured server with the mod_http2 module enabled."**
  ※ 팩트 카드는 이것을 "2차 전언이라 1차 확인 안 됨 → 쓰지 않는다"로 처리했는데, **레드햇 보안 CVE 페이지는 벤더 1차 출처다.** 카드의 판단이 틀렸다.
- 반면 **야생 악용·KEV는 여전히 없다.** CISA KEV 카탈로그를 직접 조회해 CVE-2026-119618 **미등재** 확인(카탈로그에 표시된 최신 Date Added 2026-11-13). 특정 공격 캠페인·위협 행위자와 연결된 보도도 찾지 못했다.

**→ 조치:** 한 문장에 묶인 두 사실이 서로 다른 상태다. 분리해야 한다. 예:

> 공개된 공격 코드는 이미 나와 있습니다. 11월 12일 깃허브에 올라온 것인데 힙이 깨지는 데까지만 보여 주고 코드 실행을 시연하진 않습니다. 실제 악용 보고는 아직 없고, CISA의 악용 목록에도 올라 있지 않습니다.

**이 수정은 글의 논지를 오히려 강화한다** — 본문 47·53줄이 "위험 구간이 발견 이후 패치 설치까지로 옮겨 갔다"고 주장하는데, 패치 하루 뒤 PoC가 공개됐다는 사실이 그 주장의 가장 좋은 증거다. 지금처럼 "공격 코드 없음"으로 적으면 **마지막 문단의 걱정과 본문이 서로 어긋난다.**

---

## A. 시점 일관성

- **발행일:** 2026-11-16 (KST)

| 본문에 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| httpd 2.4.71 릴리스 ("11월 11일") | 2026-11-11 | 이전 ✓ | 유지 |
| CVE-2026-119618 권고 공개 | 2026-11-11 | 이전 ✓ | 유지 |
| 커밋 824beab | 2026-11-09 브랜치 커밋 / 권고의 "Fixed in 2.4.x" 2026-11-11 | 이전 ✓ | 유지 (본문은 커밋 날짜를 쓰지 않음) |
| 앤트로픽 OSS 스캐너 보고 ("10월 26일") | 2026-10-26 | 이전 ✓ | 유지 |
| 구글 클라우드 보고 ("11월 3일") | 2026-11-03 | 이전 ✓ | 유지 |
| 2.4.55 릴리스 ("2023년 1월") | 2023-01-17 | 이전 ✓ | 유지 |
| 앤트로픽 대시보드 집계 | 2026-11-02 기준 | 이전 ✓ | 유지 |
| mod_h2 미수정 ("11월 12일 기준으로는") | 2026-11-16 현재도 동일 | 이전 ✓ | 유지하되 기준일 갱신 권고 (B-8) |
| **공개 PoC 등장** | **2026-11-12** | **이전 ✓ (그런데 본문이 없다고 씀)** | **C-1 참조** |

- **사후 시점 표현:** "훗날", "결국", "돌이켜보면" 류 없음. ✓
- **용어 시점성:** `H2MaxSessionStreams`, `Protocols`, APR 풀 — 모두 발행일 이전부터 존재. ✓
- **시점 규율 위반 없음.** 유일한 시점 문제는 "최신 상태를 반영하지 못한 것"(C-1)이지 미래 사건 인용이 아니다.

---

## B. 사실 검증

| # | 주장 (본문 줄) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 등급 critical, 영향 2.4.55~2.4.70, 수정 2.4.71, 릴리스 2026-11-11 (12줄) | ✓ 확인 | httpd 보안 권고: "CVE-2026-119618 (critical): mod_http2: heap corruption and RCE in assign_headers" / "from 2.4.55 through 2.4.70" / Update 2.4.71 released 2026-11-11 | - |
| 1b | "HTTP/2를 켜 둔 서버만 해당, HTTP/1.1 전용은 무관" (12줄) | ✓ 확인 (출처는 아파치가 아님) | 레드햇: "affects servers with h2 or h2c enabled through the Protocols directive" / NCSC-NL 동일. **아파치 권고문 자체에는 이 조건 문장이 없다.** 본문이 이 조건을 권고문 출처로 돌리고 있지는 않으므로 서술상 문제는 없음 | - |
| 1c | "아파치가 매긴 등급은 critical, 가장 높은 단계" (12줄) | ✓ 확인 | 아파치 등급 체계 low/moderate/important/critical 중 최상위 | - |
| 2 | "권고문에 임시 완화책은 없습니다. 항목 자체가 비어 있어요." (12줄) | ✓ 확인 | 권고 페이지에 이 CVE용 mitigation/workaround 절 없음. Censys도 "Apache publishes no workaround, the fix is to upgrade to 2.4.71" | - |
| 3 | 경쟁 상태 / `assign_headers()` / 힙 손상→RCE (14줄) | ✓ 확인 | 권고 원문 "Concurrent Execution using Shared Resource with Improper Synchronization vulnerability in Apache HTTP Server's mod_http2 in assign_headers() can lead to RCE"(= CWE-362 명칭). CVE 레코드 CWE-362. ※ 레드햇만 CWE-20으로 분류 — 본문은 CWE 번호를 쓰지 않아 영향 없음 | - |
| 4 | 커밋 824beab가 `req->headers`→`r->headers_in` 한 줄, 락·뮤텍스 없음 (18~25줄) | ✓ 확인 | 커밋 824beab: 변경 파일 1개(`modules/http2/h2_request.c`), **+1/−1**. `@@ -350,7 +350,7 @@ static void assign_headers`. 본문 코드 블록의 두 줄이 diff와 **문자 단위로 일치**. 락·뮤텍스·원자연산 추가 없음. 커밋 메시지 "mod_http2: assign_headers update table (#975) (#977)", 5ed3928 체리픽 | - |
| 4b | 주변 주석 "본문이 더 올 게 없으니 길이를 0으로 명시" (43줄) | ✓ 확인 | diff 컨텍스트 주석: "If we have a content-type, but already seen eos, no more data will come. Signal a zero content length explicitly." | - |
| 5 | 2.4.55가 2023년 1월 → "4년 가까이" (41줄) | ⚠ 본문 OK / **제목 과장** | 2.4.55 릴리스 2023-01-17(아파치 발표, Buildroot 패치 동일자, Apache Lounge 빌드 01-18). 2023-01-17 → 2026-11-11 = **3년 10개월**. 본문 "4년 가까이"는 맞음 | **제목 "4년이나"는 수정 권고 → C-2** |
| 6 | 10-26 / 11-03 독립 보고 → "8일 간격" (45줄) | ✓ 확인 | 권고 Acknowledgements: finder "Anthropic's OSS Scanner, as vulnerability ANT-2026-MAPKT6MZ" 보고 2026-10-26 / finder "Anthony Weems and Simon Scannell of the Google Cloud Vulnerability Research" 보고 2026-11-03. 10/26→11/3 = 8일 | - |
| 7 | mod_http2 문서 인용 번역 (33줄) | ✓ 확인 | 원문 "HTTP/2 gives all requests that it receives to its own Worker threads for processing, collects the results and streams them out to the client." 본문 번역 "받은 모든 요청을 자신의 워커 스레드에 넘겨 처리하고, 결과를 모아 클라이언트로 흘려보낸다" — **의미 누락·추가 없음** | - |
| 7b | H2Worker가 MPM 워커와 별도 스레드 풀 (33줄) | ✓ 확인 | 문서: "these workers use a separate thread pool from the MPM workers that you might be familiar with ... not counted against directives such as ThreadsPerChild" | - |
| 7c | 동시 스트림 기본값 100 (33줄) | ✓ 확인 | 문서 Default: `H2MaxSessionStreams 100` | - |
| 8 | 단독 mod_h2 2.0.8~2.0.42, 수정 릴리스 미기재 (49줄) | ✓ 확인 (단 불완전) | 권고: "Affected releases of mod_h2 from GitHub: from 2.0.8 through 2.0.42", 수정 버전 기재 없음. 2026-11-16 현재도 동일. **추가 확인: icing/mod_h2 저장소는 2026-06-09 아카이브(읽기 전용), 마지막 릴리스 v2.0.42(2026-05-29)** | **C-5 보완 권고** |
| 9 | "공개된 공격 코드도, 실제 악용 보고도 없다" (51줄) | ✗ **절반 오류** | PoC 2026-11-12 공개 / 야생 악용·KEV는 없음 | **C-1 — 치명적** |
| 10a | 앤트로픽 자체 집계, 보고 대비 상류 패치 "10% 안팎" (47줄) | ⚠ 수치 약간 낮게 잡음 | red.anthropic.com/2026/cvd (2026-11-02 19:30 UTC 기준): 후보 37,966 / 외부검증 6,376 / 유효 6,009(94.2%) / 메인테이너 보고 **5,087** / 상류 패치 **629**. 629÷5,087 = **12.4%** | **C-4 — "10%대 초반" 권고(경미)** |
| 10b | "세는 기준에 따라 엇갈리는 수치" (47줄) | ✓ 확인 | VulnCheck는 같은 공개 원장에서 fixed **217건**으로 셈(원장 공개분 7,349건 기준). 앞선 비교에서도 대시보드 421 vs 원장 202로 엇갈림. 두 수가 같은 것을 세지 않는다는 지적도 2차 분석에 있음 | - |
| 10c | 대시보드가 "패치됨 = 릴리스됐다는 뜻이지 널리 설치됐다는 뜻 아님"이라 적어 뒀다 (47줄) | ✓ 확인 | 대시보드 원문: 메인테이너가 "have since created and released fixes" / "this does not guarantee that those patches have been widely installed" | - |
| 11 | APR 풀·`apr_table_t` 스레드 비안전, 항목 추가 시 내부 배열 재할당 (37줄) | ✓ 확인 | `apr_pools.h`: 풀 연산 대부분이 스레드 안전하지 않으며 한 풀은 한 번에 한 스레드만 접근해야 함. `apr_tables.c`: `apr_table_setn`은 키가 없으면 `add_new_elt` → `table_push(t)`(= `apr_array_push_noclear`)로 들어가고, `nelts == nalloc`이면 `new_size = nalloc*2; new_data = apr_palloc(arr->pool, ...); memcpy(...)` — **그 테이블이 속한 풀에서 두 배 크기로 재할당 후 복사**. 본문의 "될 수 있거든요"라는 조건부 표현도 정확(가득 찼을 때만 성장) | - |
| 12 | 배포판은 백포트하므로 `httpd -v`로 판단하면 안 됨 (49줄) | ✓ 확인 | 레드햇/데비안 백포트 관행. 레드햇은 RHEL 9·10 영향(등급 Important), RHEL 8 이하 미영향으로 트래킹 | - |
| 13 | 패키지만 올리고 재시작 안 하면 옛 모듈이 메모리에 남음 (49줄) | ✓ 확인 | 공유 라이브러리 교체 후 실행 중 프로세스에 미반영 — 일반 사실, 복수 권고가 재시작을 지시 | - |
| 14 | 커버 크레딧 "CERN 데이터센터 서버 랙 — Wikimedia Commons, Hugovanmeijeren" (57줄) | ✓ 확인 (라이선스는 미확인) | Commons `File:Cern datacenter.jpg` 저작자 Hugovanmeijeren, own work, 2010-03-12. 사진 내용도 CERN 서버실로 일치(랙에 "WORLD WIDE WEB SERVERS" 표지). 라이선스 CC BY-SA 3.0은 `_workspace/image-credits-2026.md` 기록에만 있고 이번 검증에서 Commons 라이선스 절을 직접 열지는 못함 — **레포 정책상 라이선스는 선정 기준이 아니고 출처 표기가 요건이므로 발행 차단 사유 아님** | - |
| 15 | 커버 파일 존재·연결 | ✓ 확인 | `public/images/covers/apache-http2-assign-headers-race.jpg` 존재(1200×630 CERN 사진). 프런트매터 `coverImage: ""`는 `build_posts_json.py`의 3순위 규칙(`/images/covers/{slug}.jpg` 파일 존재 시 자동 연결)에 따라 정상 동작 | - |

### 본문에서 쓰지 않았으나 확인된 참고 사실

- **CVSS 불일치:** 레드햇 9.8(AV:N/AC:L) vs cve.org 8.1(AC:H), NVD 미부여. **본문이 CVSS 점수를 쓰지 않은 것은 잘한 판단** — 썼으면 출처 간 충돌을 해명해야 했다.
- **레드햇의 완화 요인:** RHEL 9·10은 스트림마다 별도 얼로케이터를 쓰기 때문에 "substantially increases the complexity of exploiting the flaw"라고 적어 두고 등급을 Critical이 아닌 Important로 낮췄다. 본문 49줄이 배포판 독자를 향하고 있으므로 한 구절 넣을 여지가 있다(선택).
- **노출 규모(Censys):** 영향 버전대를 보고하는 호스트 약 150만, 수정 버전은 하루 약 2,000대꼴로만 늘어남. HTTP/2 협상 여부 필드가 없어 과대 집계. **본문이 150만을 쓰지 않은 것도 잘한 선택**(측정 한계가 커서 각주가 길어진다). 다만 "하루 2,000대"는 53줄의 "지금은 그쪽이 한참 느립니다"를 떠받칠 수 있는 유일한 정량 근거라 선택적으로 쓸 만하다.

---

## C. 수정 권고 (우선순위 순)

### C-1. [치명적] 51줄 — 공개 PoC 존재

위 0절 참조. **이 한 줄만 고치면 나머지는 발행을 막지 않는다.**

### C-2. [중간] 3줄(제목) — "4년이나"

> 현재: `아파치 HTTP/2 결함, 왜 4년이나 안 보였나?`

실제는 3년 10개월(2023-01-17 → 2026-11-11). 본문 41줄은 "4년 가까이"로 정확하게 썼는데 **제목만 "4년이나"로 올려 잡았다.** "~이나"는 4년을 넘겼다는 인상을 준다.

→ 권고: `아파치 HTTP/2 결함, 왜 4년 가까이 안 보였나?` 또는 `아파치 HTTP/2 한 줄 결함이 4년을 버틴 이유`
※ 제목 규칙(2-A절) 관점에서도 현재 제목은 콜론 없음·질문형이라 적합하므로 숫자만 고치면 된다.

### C-3. [중간] 37줄 — 경쟁의 위치를 '테이블'에서 '풀(얼로케이터)'로

> 현재: `두 스레드가 같은 테이블을 동시에 건드리는 순간 힙이 깨집니다.`

이 문장 자체는 APR 일반론으로는 **틀리지 않다**(동일 테이블 동시 `setn`은 당연히 깨진다). 다만 이번 CVE의 실제 경쟁 지점은 레드햇 서술 기준으로 **공유 풀/얼로케이터**다 — "a worker thread writes into memory owned by the connection thread through **a shared, lock-free allocator**", 그리고 "exploitation depends on HTTP/2 stream workers **sharing an allocator with the connection**" (그래서 얼로케이터를 분리한 RHEL 9·10은 난도가 올라간다). 공개 PoC 저장소도 "races on **the connection allocator**"라고 적는다.

→ 권고: `두 스레드가 같은 풀에서 동시에 할당받는 순간 힙이 깨집니다.` 정도로. 바로 앞 문장이 이미 "내부 배열이 그 풀에서 다시 할당될 수 있거든요"라 논리가 더 매끄럽게 이어지고, 저자 추론의 정확도도 올라간다.

### C-4. [경미] 47줄 — "10% 안팎"

629/5,087 = 12.4%. 뒤에 "자릿수 정도로만 읽는 게 안전하겠지만요"라는 완화가 붙어 있어 오류로 보지는 않지만, **"10%대 초반"** 또는 **"10%를 조금 넘는 수준"**이 더 정확하다. (앤트로픽 대시보드 2026-11-02 기준)

### C-5. [경미] 49줄 — mod_h2는 "아직 안 고쳐진" 게 아니라 "고쳐질 곳이 없다"

> 현재: `...11월 12일 기준으로는 권고문에 수정 릴리스가 적혀 있지 않았습니다.`

사실이지만 독자의 행동을 바꾸지 못한다. 확인된 것: **icing/mod_h2 저장소는 2026-06-09에 아카이브되어 읽기 전용이고, 마지막 릴리스가 바로 영향 범위 끝인 v2.0.42(2026-05-29)다.** 즉 그쪽에서 수정판이 나올 가능성이 사실상 없고, 선택지는 httpd 내장 mod_http2(2.4.71)로 옮기거나 h2를 끄는 것뿐이다. 아울러 기준일도 발행일(11월 16일)로 갱신하는 편이 자연스럽다.

### C-6. [경미] 커버 이미지 중복

`_workspace/image-credits-2026.md` 66줄에 **같은 Commons 사진(`Cern datacenter.jpg`)이 `covers/mckinsey-build-vs-buy-run-cost.jpg`로 이미 사용**된 기록이 있다. 발행을 막을 문제는 아니지만 커버가 겹친다(2026-07-18에 "글마다 커버가 중복됨"을 문제로 지적한 전례 있음). 교체 가능하면 다른 사진 권고.

### C-7. [선택] 39줄 단서 문구 — 현재 상태로 충분함 (수정 불필요)

> `(아파치가 메커니즘을 따로 설명하진 않았습니다. 위 내용은 권고문의 결함 분류와 커밋, 공식 문서의 스레드 모델을 제가 이어 붙여 읽은 것이고요.)`

**단서는 충분하다.** 주체를 "아파치"로 한정했고, 근거 세 가지를 밝혔고, 본문 어디에서도 "아파치가 밝혔다"는 식으로 단정하지 않는다. 29·39줄의 단정형 문장("애초에 남의 물건에 쓰고 있었기 때문입니다", "옆자리 테이블에 손을 대는 일이었던 셈이죠")도 이 괄호 단서의 사정거리 안에 있다.

그리고 **추론 자체가 외부 출처로 사후 확증됐다** — 레드햇이 "worker thread writes into memory owned by the connection thread"라고 같은 그림을 공개했다. 기술적으로 틀린 추론이 아니다(치명적 오류 아님). 원한다면 괄호를 "아파치는 메커니즘을 따로 설명하지 않았고, 레드햇은 워커 스레드가 커넥션 쪽이 소유한 메모리에 쓴다고 적었습니다" 정도로 보강할 수 있으나 **필수는 아니다.** C-3만 반영해도 정확도는 충분하다.

---

## D. 종합 판정

- [ ] 발행 가능
- [x] **수정 후 발행** — C-1(치명적) 반영 필수. C-2·C-3 반영 권고. C-4~C-6은 선택.
- [ ] 발행 보류

**발행 전 체크:**
1. C-1 수정 (51줄 문장 분리) — **필수**
2. C-2 제목 숫자 교정, C-3 한 단어 교체 — 권고
3. 본문 수정 후 `node scripts/lint-post.mjs _posts/2026-11-16-apache-http2-assign-headers-race.md` 재실행 (이번 검증 세션에서는 셸을 쓸 수 없어 린트를 돌리지 못함 — 호출자가 실행할 것)

---

## 참고 — 검증에 사용한 출처

1. https://httpd.apache.org/security/vulnerabilities_24.html (1차: 등급·영향 범위·타임라인·크레딧·mod_h2 범위·workaround 부재)
2. https://github.com/apache/httpd/commit/824beab (1차: +1/−1 diff, 락 없음)
3. https://httpd.apache.org/docs/2.4/mod/mod_http2.html (1차: 워커 인용문 원문, 별도 스레드 풀, H2MaxSessionStreams 100)
4. https://raw.githubusercontent.com/apache/apr/trunk/tables/apr_tables.c + `apr_pools.h` (1차: 풀 비(非)스레드안전, 배열 두 배 재할당)
5. https://access.redhat.com/security/cve/CVE-2026-119618 (벤더 1차: 메커니즘 서술, 공유 얼로케이터, 공개 익스플로잇 시연 언급, RHEL 등급)
6. https://github.com/googlesky/CVE-2026-119618 (1차: 공개 PoC 실체·주장 범위)
7. https://webflow.sysdig.com/blog/httpd-cve-2026-119618-detecting-heap-corruption-and-rce-in-apache-http-server-mod-http2 (2026-11-13: PoC 공개일 11-12 확인)
8. https://censys.com/advisory/cve-2026-119618/ (노출 규모, workaround 부재, mod_h2 미수정)
9. https://www.cisa.gov/known-exploited-vulnerabilities-catalog (KEV 미등재 직접 확인)
10. https://red.anthropic.com/2026/cvd/ (대시보드 수치·"널리 설치" 경고 문구)
11. https://www.vulncheck.com/blog/anthropic-glasswing-november-update (fixed 217건, 집계 불일치)
12. https://github.com/icing/mod_h2/releases (v2.0.42가 최종, 저장소 2026-06-09 아카이브)
13. 2.4.55 릴리스일: https://endoflife.date/apache-http-server , https://lore.kernel.org/all/20230117214221.3098939-1-bernd.kuhls@t-online.de/ , https://www.linuxcompatible.org/story/apache-http-server-2455-released
