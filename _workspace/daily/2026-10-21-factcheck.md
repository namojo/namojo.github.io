# Fact Check Report: ai-agents-breached-100-companies-fifty-dollars

검증일 2026-10-20 (발행 예정 2026-10-21 09:00 KST)
초고: `_posts/2026-10-21-ai-agents-breached-100-companies-fifty-dollars.md`

**결론 한 줄: 사실관계상 치명적 오류 없음. 단, 본문 이미지 파일 부재로 현재 상태로는 발행 불가(발행 차단 1건).**

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-10-21 (KST)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 로이터 단독 보도 | 2026-10-19 | 이전 ✓ | 유지 |
| 캠페인 개시 | 2026-09-25 | 이전 ✓ | 유지 |
| 연구자 관측 시작 / 노출 패널 발견 | 2026-10-02 | 이전 ✓ | 유지 |
| NorForge 자체 보고서 `inside_cairn` 공개 | 2026-10-19 | 이전 ✓ | 유지 |

- **사후 시점 표현:** "훗날", "결국", "돌이켜보면" 등 0건. 과거 사건을 미래처럼/미래 사건을 과거처럼 쓴 곳 없음.
- **용어 시점성:** Cairn, 스티그머지, 웹셸, Zend Framework 모두 발행일 이전부터 존재. 문제 없음.
- **판정: 시점 규율 위반 없음.**

---

## B. 사실 검증

1차 출처: NorForge 자체 보고서 `https://norforge.com/blog/inside_cairn` (2026-10-19), Cairn 공식 README `raw.githubusercontent.com/oritera/Cairn/main/README.md`.
2차: Reuters 2026-10-19 단독(winbuzzer/techradar/SecurityWeek/DarkReading/TheHackerNews 등 다수 재보도).

| # | 본문 주장 | 상태 | 근거 | 조치 |
|---|---|---|---|---|
| 1 | 로이터 10월 19일 보도 | ✓ | Reuters exclusive 2026-10-19, 다수 매체 일치 | - |
| 2 | NorForge 수석 위협 연구원 스노레 파게를란(Snorre Fagerland) | ✓ | 로이터·NorForge. 한글 표기도 외래어표기법 노르웨이어 규정에 부합(ld의 d 미표기 → 파게를란) | - |
| 3 | 9월 25일 개시, 미국·캐나다·호주·일본 1,200여 곳 시도, 100곳 초과 침해 | ✓ | 로이터 | - |
| 4 | 토큰 값 약 5,000달러 / 성공 1건당 50달러, 둘 다 거친 추정 | ✓ | Fagerland 추정, 실제 토큰 사용량 데이터 없음을 본인이 명시 | 본문이 "거친 추정"으로 명시 — 적절 |
| 5 | 로이터도 유출 규모 확인 못 함 | ✓ | 로이터 | - |
| 6 | 성공률 10% | ✓ | NorForge "~10%" (본문 산술 100/1,200=8.3%과도 정합) | - |
| 7 | 지시문 100자 미만 중국어 | ✓ | 로이터 "fewer than 100 Chinese characters". NorForge 원문 기준 한자 약 88자 | - |
| 8 | 지시문 내용: 쇼핑몰에서 코드 실행 경로를 찾고 파일 업로드형 웹셸을 심어라 | ✓ | NorForge가 AIA0001 지시문 전문을 영역해 게재: "These are confirmed real shopping/e-commerce websites in four countries" / 목표는 "unauthenticated RCE" / 페이로드는 **uploader shell, 명령 실행형 웹셸이 아님을 명시**. 초고의 "파일을 올릴 수 있는 웹셸"은 이 구분을 정확히 옮긴 것 | - |
| 9 | 시도 한 번당 5달러 | ⚠ 근거 약함 | NorForge는 "**task 1건당** 평균 약 5달러, 불확실성 상당, 상당 폭 어긋날 수 있음. 긴 프로젝트는 100달러 초과"라고 기술. 한편 로이터 총액 5,000달러 ÷ 1,200곳 ≈ 4.2달러로 수치 자체는 양쪽에서 지지됨 | 단위(표적 1곳 vs task 1건)가 출처마다 달라, 숫자는 유지하되 "5달러 안팎" 식 완화 권고 |
| 10 | Cairn: 오픈소스 에이전트 플랫폼, 허가받은 침투 테스트용으로 제작 | ⚠ 부정확 | 공식 README 태그라인은 "general-purpose problem-solving engine"이고 "Penetration testing is the first domain it has been validated on". 허가 요건은 제작 목적이 아니라 Disclaimer 조항("explicit authorization to operate") | 문구 조정 권고 (C-2) |
| 11 | 만든 쪽도 해를 끼칠 목적이 아니었다고 밝힘 | ✓ | Cairn 제작자(X 계정 le1xia0)가 로이터에 "해킹 공격용으로 설계하지 않았다", X 게시 "If it is used to carry out harmful hacking attacks, that is not my intention" | - |
| 12 | 블랙보드 구조: 워커끼리 직접 대화 없음, 공유 그래프에 Fact/Intent/Hint | ✓ **1차 출처 확인** | README 원문: "built on a **Blackboard Architecture** with an explicit fact-intent graph" / "**Fact** — A confirmed, objective finding written to the board" / "**Intent** — A declared direction of exploration, not yet executed" / "**Hint** — Human judgment injected at any time; absorbed by agents on the next read" / "**Agents coordinate exclusively through the shared board (Stigmergy). No direct communication.**" | - |
| 13 | 워커가 판을 읽고 다음 행동을 정해 실행한 뒤 결과를 새 사실로 적는다 | ✓(미세 보정 여지) | README: 워커는 OODA 루프(Observe/Orient/Decide/Act). 다만 "Dispatcher ... is the sole writer to the protocol", 워커는 "only receive a prompt and return structured output" — 엄밀히는 워커가 결과를 돌려주고 디스패처가 보드에 커밋 | 논지에 영향 없음. 정확을 기하려면 C-6 |
| 14 | "스티그머지(stigmergy)" = 직접 통신 없이 환경에 남긴 흔적으로 협업 | ✓ | 용어 정의 정확(Grassé 1959, 흰개미). 더구나 **Cairn README가 이 단어를 직접 사용**하므로 저자가 붙인 비유가 아니라 설계자의 자기 규정 | - |
| 15 | cairn = 등산로에 쌓아 올린 돌탑 | ✓ | 스코틀랜드 게일어 càrn, 등산로·정상의 경로 표시용 돌무더기 | - |
| 16 | (캡션) 도구 이름이 여기서 왔다 | ⚠ 추정 | README·GitHub 어디에도 작명 유래 설명 없음(README 내 "cairn"은 프로젝트명으로만 등장). 다만 README가 "Every new Fact is a stepping stone"·"Stigmergy"를 쓰므로 정황은 강함 | 단정 완화 권고 (C-5) |
| 17 | 노출 패널 스무 개 넘게, 10월 2일부터 | ✓ | NorForge "more than 20"(표에는 25개: AIA0001 14 / AIA0002 10 / AIA0003 1). 로이터 "about two dozen ... beginning around October 2" | - |
| 18 | 패널에 표적·수집 정보·훔친 자격증명과 키가 노출 | ✓ | NorForge: 노출 대시보드에서 "literally hundreds of secrets" 수집 | - |
| 19 | 비밀값 중 11%가 아직 살아 있음 | ⚠ 미세 과장 | NorForge: Trufflehog가 11%를 valid로 **검증**했으나, 이는 검증 결과일 뿐 현재도 활성이라는 보장은 아니라고 단서를 붙임 | "11%가 유효한 것으로 확인됐고요" 정도로 완화 권고 |
| 20 | 합법 침투 테스트 업체의 패널도 열려 있었고 실제 고객사 테스트가 올라가 있었다 | ⚠ | NorForge는 "legitimate demos or pentesting firms로 **보이는**" 패널이라고 추정형으로 기술(업체명 비공개). 실제 고객 테스트가 비보호 패널에 올라간 것은 "highly problematic"이라고 평가 | "~로 보이는 것도 있었습니다" 완화 권고 |
| 21 | 대형 소매업체 — 쿠키 값 하나로 백엔드 서버가 갈림 | ✓ | NorForge Case 6, "very large US retailer", 취약한 백엔드를 고르는 쿠키 설정을 에이전트가 찾아냄. NorForge가 체인 검증 | - |
| 22 | 다른 곳 — 메모리 캐시 세션 저장소 쓰기 → PHP 객체 역직렬화 → 구형 Zend Framework 가젯 체인 | ✓(출처 성격 주의) | NorForge: memcached 세션 저장소 무단 쓰기 + unsafe PHP object deserialization + legacy Zend Framework 가젯 체인. 대상은 "large hardware parts vendor". 단 체인 서술은 **에이전트 자신의 기록**에 근거하고, NorForge가 독립 검증한 것은 기록된 셸 URL이 실제 살아 있는 업로더 웹셸이었다는 점 | 초고가 대상을 "다른 곳"으로만 쓴 것은 정확. C-4 완화 권고 |
| 23 | 로이터가 확인한 피해 기업: Deere, SharkNinja, Cummins | ⚠ 부정확 | Deere: 조치 완료, 민감정보 접근 정황 없음 / SharkNinja: 제품 지원 정보만 있는 독립 사이트, 차단 완료 / **Cummins: 외주 벤더 운영 사이트에 대한 공격 "가능성"을 조사 중** — 확정된 피해가 아님. 본문 뒷문장은 "조사 중"으로 맞게 썼으나 앞문장과 충돌 | 수정 권고 (C-1) |
| 24 | 에이전트 제어판은 대개 8000번 포트로 응답 | ⚠ 일반화 | 사실은 **Cairn의 기본값**이 8000(README docker-compose "starts cairn-server on port 8000"), NorForge 지표 표의 25개 패널 전부 8000. 다른 에이전트 대시보드 일반에 해당하는 말은 아님 | 범위 축소 권고 (C-3) |
| 25 | "한 사람이" 1,200곳을 두드렸다 | ✓(귀속 주의) | 로이터는 단일 운영자로 보도. NorForge는 클러스터 3개(AIA0001/2/3)를 구분하며 1,100여 프로젝트·14 대시보드는 최대 클러스터(AIA0001)의 것 | 초고가 "로이터가 보도했습니다"로 귀속한 형태라 문제 없음 |

### 캘러 제공 선검증 항목과의 대조
어긋나는 것 **없음**. 다음 두 가지만 보강됨:
- 지시문은 "쇼핑/전자상거래 사이트"라는 전제가 지시문 **안에** 포함돼 있었음(NorForge 영역본). 초고의 "쇼핑몰에서"는 창작이 아니라 원문 근거 있음.
- 노출 패널 수는 "스무 개 넘게"가 로이터·NorForge 양쪽 표현과 일치(NorForge 표 기준으로는 25개).

---

## C. 수정 권고 (우선순위 순)

**[발행 차단] 본문 32줄 — 이미지 파일 부재**
`![등산로에 쌓인 돌탑](/images/inline/ai-agents-breached-100-companies-fifty-dollars-cairn.jpg)` → `public/images/inline/` 에 해당 파일이 **존재하지 않음**. 이대로 발행하면 본문에 깨진 이미지가 뜸.
추가로 `_workspace/image-credits-2026.md`에 이 슬러그 행이 없고, 출처 줄이 `*출처: Wikimedia Commons*`뿐이라 레포 관례(저작자까지 표기: 예 `출처: Wikimedia Commons, Tony Webster`)에 어긋남.
→ 이미지를 실제로 받아 넣고 저작자까지 표기하든지, 이미지와 캡션 3줄(32~35줄)을 통째로 빼든지 택일. 캡션 본문은 레포 관례상 설명문과 출처를 한 줄 italic으로 합치는 형태가 일반적.

**[경미·1순위] 본문 43줄 — Cummins를 확정 피해로 쓴 것**
현재: "로이터가 확인한 피해 기업은 Deere와 SharkNinja, Cummins입니다."
→ 권고: "로이터가 이름을 확인한 곳은 Deere와 SharkNinja, Cummins입니다."
(Cummins는 침해 확정이 아니라 조사 중. 두 문장 뒤의 "조사 중"과의 자가당착도 해소됨)

**[경미·2순위] 본문 26줄 — Cairn의 제작 목적**
현재: "원래 허가받은 침투 테스트용으로 만들어졌고"
→ 권고: "원래는 범용 문제 해결 엔진을 표방하는 도구이고, 자율 침투 테스트가 그 엔진이 처음 검증된 영역입니다. 쓰는 조건도 허가받은 환경으로 못 박아 뒀고요."
(공식 README 태그라인 기준. 뒷부분 "만든 쪽도 해를 끼칠 목적이 아니었다고 밝혔죠"는 검증 완료이니 그대로 유지)

**[경미·3순위] 본문 53줄 — 8000번 포트 일반화**
현재: "에이전트 제어판은 대개 8000번 포트로 응답합니다."
→ 권고: "Cairn 제어판은 기본 설정이 8000번 포트입니다. 발견된 패널이 전부 그 포트로 열려 있었고요."

**[경미·4순위] 본문 39·49·51줄 — 추정형 서술의 단정**
- 39줄 체인 서술: 앞에 "에이전트가 남긴 기록을 따라가 보면" 한 마디를 넣으면 정확해짐(NorForge가 직접 검증한 것은 결과물인 웹셸).
- 49줄: "11%는 아직 살아 있는 값이었고요" → "11%는 유효한 것으로 확인됐고요".
- 51줄: "합법적인 침투 테스트 업체의 것도 있었다는 점" → "~업체의 것으로 보이는 패널도 있었다는 점".

**[경미·5순위] 본문 34줄 캡션 — 작명 유래 단정**
현재: "공격에 쓰인 도구의 이름이 여기서 왔습니다."
→ 권고: "공격에 쓰인 도구의 이름이 이 돌탑과 같은 말입니다." (제작자가 작명 유래를 밝힌 기록은 없음)

**[선택] 본문 24줄 — 5달러**
"시도 한 번당 5달러" → "시도 한 번에 5달러 안팎". NorForge의 5달러는 task 단위이고 긴 프로젝트는 100달러를 넘기도 한다고 명시돼 있어, 단위를 못 박지 않는 편이 안전함. (로이터 총액 기준 산술로는 약 4.2달러라 숫자 자체는 유지 가능)

**[선택] 제목·발췌**
- 제목 "지시문은 100자"는 100자 정확치로 읽힐 수 있음. 원문은 100자 **미만**(한자 약 88자). "지시문은 100자 남짓" 정도가 안전.
- excerpt의 5,000달러·50달러는 단독 노출 시 추정 표시가 없음. "추정"을 한 단어 넣을지 저자 판단.

**[참고·오류 아님] 본문 39줄 문장**
"실제로 뚫린 경로를 하나 보면 이렇습니다"로 열고 사례 둘(소매업체 쿠키 / 세션 저장소 체인)을 서술. 사실관계는 맞으나 "하나"와 어긋남.

---

## D. 종합 판정

- [ ] 발행 가능
- [x] **수정 후 발행** — 사실관계 치명적 오류는 없음. 다만 **본문 이미지 파일 부재는 발행 전 반드시 해결**해야 하고, C-1(Cummins) C-2(Cairn 제작 목적)는 고쳐서 내보내는 편이 좋음. 나머지는 완화 표현 권고 수준.
- [ ] 발행 보류

### 점검 완료 체크리스트
1. 날짜 스캔 — 10/19, 9/25, 10/2 전부 검증 ✓
2. 시점 규율 — 위반 없음 ✓
3. 숫자 스캔 — 1,200 / 100+ / 5,000달러 / 50달러 / 5달러 / 10% / 100자 / 20개+ / 11% / 8000 전부 출처 대조 ✓
4. 인물·제품·회사 철자 — Snorre Fagerland·스노레 파게를란, NorForge, Cairn, Zend Framework, Deere, SharkNinja, Cummins 전부 정확 ✓
5. 인용문 — 직접 인용 부호는 "우리는 공들여 뚫을 만큼 중요한 회사가 아니다"(저자의 일반 화법 재현, 특정인 발언 귀속 아님)뿐. 가짜 인용 없음 ✓
6. URL·서비스명 — `norforge.com/blog/inside_cairn`, `github.com/oritera/Cairn` 실재 확인 ✓ / 본문 내 이미지 경로만 파일 부재 ✗
7. 벤더 책임론 — DeepSeek·Claude Code 미언급, 의도된 선택으로 확인. 지적 대상 아님 ✓
