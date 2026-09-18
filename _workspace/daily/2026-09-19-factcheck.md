# Fact Check Report: spain-aepd-first-ai-agent-breach-notification

- **검증일:** 2026-09-18 (발행 예정 2026-09-19 09:00 KST)
- **초고:** `_posts/2026-09-19-spain-aepd-first-ai-agent-breach-notification.md`
- **팩트 카드:** `_workspace/daily/2026-09-19-brief.md`
- **1차 출처 전문 확보:** AEPD 블로그 원문(스페인어) 전문을 WebFetch로 회수해 문장 단위 대조함.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-09-19 (KST)

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| AEPD 블로그 게시 ("9월 14일") | 2026-09-14 | 이전 ✓ | 유지 |
| SecurityWeek 사이먼 필립스 코멘트 | 2026-09-16 | 이전 ✓ | 유지 |
| BleepingComputer 보도 | 2026-09-16 | 이전 ✓ | 유지 |
| Help Net Security 보도 | 2026-09-17 | 이전 ✓ | 유지 |
| CCN-CERT BP/36 공개 ("6월에 낸") | 2026-06-23 | 이전 ✓ | 유지 |
| AEPD 연구소(laboratorio.aepd.es) BP/36 소개 글 | 2026-06-25 | 이전 ✓ | 유지 |

- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" 등 **없음** ✓
- **"예정 vs 완료" 혼동:** 없음. AEPD 조사는 미완료 상태(`deberá ser objeto del correspondiente análisis`)로 정확히 미래형 처리됨 ✓
- **용어 시점성:** "AI 에이전트", "API 키", "토큰", "공격형 AI(IA ofensiva)" 모두 2026-09 시점에 통용 ✓
- **미래 사건 소급 서술:** 없음 ✓

**참고(비차단):** `_style/ai-timeline.md`에는 이 사건 항목이 아직 없음(최종 행이 `2026-09-18 | 오늘`). 발행 후 타임라인·`topics-written.md`에 추가 필요. 중복 토픽 없음 확인 ✓

---

## B. 사실 검증

AEPD 원문(2026-09-14) 확보 전문을 기준으로 대조.

| # | 초고의 주장 | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | AEPD 블로그 게시일 = 9월 14일 | ✓ 확인 | AEPD 페이지 표기 "14 de Septiembre de 2026" | - |
| 2 | 글쓴이 = Francisco Pérez Bes | ✓ 확인 | AEPD 블로그 저자 표기 | - |
| 3 | 직함 "AEPD 부청장" | ✓ 확인(허용) | AEPD 공식 영문 보도자료: "appointed, respectively, president and deputy, of the AEPD" / 스페인 언론(Infobae 등) "director adjunto de la Agencia" | 아래 상세 주석 참조 |
| 4 | "AI 에이전트를 통해 실행된 개인정보 침해를 처음으로 신고받았다" | ✓ 확인 | 원문: "ha recibido la primera notificación de una brecha... habría sido ejecutado mediante un agente de inteligencia artificial" | 초고가 "신고서에 따르면"으로 조건법(habría) 보존 ✓ |
| 5 | "알려진 대규모 언어 모델" | ✓ 확인 | "que utilizó un conocido modelo de lenguaje" | - |
| 6 | "제3자가 ... 도구로 삼아 공격의 여러 단계를 이어 붙였다" | ✓ 확인 | "un tercero habría utilizado un agente de IA como instrumento para encadenar exitosamente distintas fases del ataque" | - |
| 7 | 공격 4단계 (①일반 파일 취약점 탐색 → ②로그인 성공 → ③앱 취약점 자율 탐색 → ④개인정보 수정 + 청구서 열람) | ✓ 확인 | "El agente atacante inició una búsqueda de vulnerabilidades en archivos genéricos, y realizó un login correcto. Una vez accedió al sistema, comenzó a buscar, de forma autónoma, vulnerabilidades en la aplicación, lo que, una vez conseguido, le permitió modificar datos personales y acceder a facturas." | 순서·내용 완전 일치 |
| 8 | **"로그인 경위(계정 종류·자격증명 출처·인증 우회 여부)를 AEPD가 쓰지 않았다"** | ✓ **확인 — 오류 아님** | AEPD 원문 전문에 자격증명 획득 경위 서술 **전무**. "realizó un login correcto" 한 문장이 전부. BleepingComputer(9/16)도 "The AEPD did not explain how the initial login succeeded"로 동일 확인 | **유지. 치명적 오류 없음** |
| 9 | 인용문 "계정이나 API 키, 또는 과도한 권한을 가진 토큰을 손에 넣은 에이전트는 기계의 속도로 움직일 수 있습니다." | ✓ 확인(번역 정확) | "Un agente que obtiene una cuenta, una clave API o un token con permisos excesivos puede operar a la velocidad de una máquina **y acceder a diferentes servicios antes de que la organización detecte un comportamiento anómalo**" | 번역 정확. 단 **후반부 절단**(C-3 참조) |
| 10 | 에이전트의 질적 차이 서술(목표 수령→중간작업 계획→도구 사용→코드 실행→자료 조회→결과 해석→행동 수정, 단계별 지시 불필요) | ✓ 확인 | "Un agente puede recibir un objetivo, planificar tareas intermedias, utilizar herramientas, ejecutar código, consultar fuentes, interpretar resultados y modificar su actuación, de forma autónoma, en función de lo que encuentra." | - |
| 11 | AEPD가 CCN-CERT BP/36을 **이 글에서 직접 언급**한다 | ✓ 확인 | "Esta es también una de las conclusiones de la guía CCN-CERT BP/36: Buenas prácticas frente al modelo de IA ofensiva, publicada por el Centro Criptológico Nacional." | - |
| 12 | BP/36 = 국가암호센터(CCN) 산하 CCN-CERT 발간물 | ✓ 확인 | 문서 헤더 "CCN-CERT GUÍA DE SEGURIDAD JUNIO 2026", ccn-cert.cni.es 공식 배포. AEPD는 "publicada por el Centro Criptológico Nacional"로 기술 | - |
| 13 | BP/36 "6월에" 공개 | ✓ 확인 | 2026-06-23 공개. 문서 표지 "JUNIO 2026" | - |
| 14 | BP/36 진단 = "이미 알려진 공격을 자동화·가속·대규모 확장하는 능력, 대응 시간 축소" | ✓ 확인(이중 근거) | (a) AEPD 블로그 자체: "la IA no crea nuevas amenazas. Pero sí aumenta la velocidad, escala y capacidad de adaptación de técnicas maliciosas ya conocidas, reduciendo el tiempo disponible para detectarlas y contenerlas. Esta es también una de las conclusiones de la guía CCN-CERT BP/36" (b) laboratorio.aepd.es(2026-06-25): "la capacidad de automatizar, acelerar y **ampliar** a gran escala ataques ya conocidos, reduciendo significativamente los tiempos de reacción" | 유지 ✓ (팩트 카드의 `expandir`는 오기, 실제는 `ampliar` — 한국어 "확장"은 양쪽 모두 부합) |
| 15 | 페레스 베스가 "공격 속도는 빨라지겠지만 기본은 여전히 결정적"이라고 정리 | ✓ 확인 | "deben prepararse para un escenario en el que la velocidad del ataque será cada vez mayor, pero en el que continuarán siendo decisivos los mismos fundamentos" | 대상 호칭 번역은 C-5 참조 |
| 16 | "AEPD가 조사해 확인한 사실이 아니다 / 정보는 피해 조직 신고서에서 나왔고 분석을 거쳐야 한다" | ✓ 확인 | "la información disponible procede de la notificación presentada por la organización afectada y deberá ser objeto del correspondiente análisis" | - |
| 17 | "이 첫 신고 한 건으로 통계적 추세를 말할 수 없다" | ✓ 확인 | "Esta primera notificación no permite afirmar una tendencia estadística" | C-6 참조(생략된 후속절) |
| 18 | "특정 AI 모델이 쓰였다고 해서 그 모델·제공사 인프라가 침해된 것은 아니다" | ✓ 확인 | "la utilización de un concreto modelo de IA tampoco implica que el modelo o la infraestructura de su proveedor hayan sido comprometidos ni que la herramienta haya sido diseñada para desarrollar actividades maliciosas" | - |
| 19 | "쓰인 모델도, 피해 조직 이름도, 기술적 증거도 미공개" | ✓ 확인 | AEPD 원문에 모델명·조직명·IOC 일절 없음 | - |
| 20 | 사이먼 필립스 = 사이버버스(CyberVerse) CTO | ✓ 확인 | SecurityWeek(2026-09-16): "Simon Phillips, CTO at CyberVerse" | - |
| 21 | 필립스 인용 "무슨 일이 있었는지, 그 모델이 어떻게 이 침해를 수행했는지 이해하기에는 정보가 충분하지 않다" | ✓ 확인(번역 정확) | 원문: "We don't have enough information to understand what happened or how the model carried out this breach." | - |
| 22 | AEPD 권고 ①위험분석에 AI 공격 명시적 포함 | ✓ 확인 | "confirma la necesidad de incorporar expresamente los ataques asistidos o ejecutados mediante IA a los análisis de riesgos de los tratamientos" | C-7 참조(malware만 축약) |
| 23 | AEPD 권고 ②수동 전제 대응 절차 개정 | ✓ 확인 | "obliga a revisar los tiempos de respuesta. Los procedimientos diseñados para ataques ejecutados manualmente pueden resultar insuficientes..." | - |
| 24 | AEPD 권고 ③계정·API 키·토큰 권한 축소 | ✓ 확인 | "aumenta la importancia de las identidades digitales y de las credenciales" + 위 #9 문장 | - |
| 25 | AEPD 권고 ④탐지·격리가 기계 속도로 | ⚠ 근거 약함 | 원문: "mecanismos de detección, **contención y respuesta** capaces de operar con la **rapidez suficiente**". "기계 속도"는 원문 표현 아님(다른 문단의 표현 전용) | C-8 참조 |
| 26 | 기본 항목 6개(처리 현황 파악·데이터 최소화·접근 제한·취약점 수정·공급업체 관리·대응 준비) | ✓ 확인 | "conocer los tratamientos, minimizar los datos, limitar los accesos, corregir vulnerabilidades, controlar a los proveedores y estar preparados para responder" | 6개 전부 일치, 순서까지 동일 |
| 27 | **"그 작업이 로그인 세션 하나 안에서 끝났습니다"** (소제목 "며칠짜리 정찰이 세션 하나로 접혔습니다") | ✗ **출처 미기재 사항** | AEPD 원문에 공격 **소요 시간·세션 수·지속 기간에 대한 언급이 전혀 없음**. "Una vez accedió al sistema, comenzó a buscar..."는 순서만 기술 | **C-1 (치명적) — 수정 필요** |
| 28 | **"이번 사건에서 피해의 크기를 결정한 변수는 모델의 성능이 아니라 그 계정에 매달려 있던 권한의 넓이입니다"** | ✗ **인과 단정** | AEPD는 이번 사건에서 침해된 계정의 권한 범위를 **밝히지 않음**. 권한 문제는 일반 권고(3번째 항목)이지 이 사건의 규명된 원인이 아님 | **C-2 (치명적) — 수정 필요** |
| 29 | 커버 이미지 크레딧 "AEPD 청사 입구, 마드리드 — Wikimedia Commons, Zarateman" | ⚠ 불일치 | 파일(`covers/spain-aepd-first-ai-agent-breach-notification.jpg`)·크레딧 대장 모두 존재하나 **프런트매터 `coverImage: ""`로 비어 있음** → hero 폴백 렌더 | **C-4 — 수정 필요** |
| 30 | 본문 이미지 출처 "*출처: Wikimedia Commons*" | ⚠ 근거 약함 | `_workspace/image-credits-2026.md`: Carl Lender, **CC BY 2.0**(저작자 표시 필수) | C-9 참조 |

---

## C. 수정 권고 (우선순위 순)

### [치명적]

**C-1. 24행 / 20행 소제목 — "세션 하나"는 출처에 없는 시간 서술**
- 현재: 소제목 "며칠짜리 정찰이 세션 하나로 접혔습니다" / 본문 "이번 신고서의 서술대로라면 그 작업이 로그인 세션 하나 안에서 끝났습니다."
- 문제: AEPD 원문은 **시간·세션 수를 일절 언급하지 않는다**. "이번 신고서의 서술대로라면"이라는 완화어가 붙어 있지만, 뒤 문장은 신고서에 없는 사실("세션 하나 안에서 끝났다")을 신고서 근거로 제시하는 형태다. 초고 스스로 42~44행에서 "AEPD는 확인한 사실을 발표한 게 아니다"라고 못 박은 것과 정면으로 충돌한다.
- 권고: 시간 단정을 제거하고 **AEPD가 실제로 쓴 것(순서·자율성)** 으로 되돌릴 것. 예) 본문 → "이번 신고서의 서술에는 그 사이에 사람이 개입한 대목이 없습니다. AEPD가 걸린 시간을 적어 두지는 않았지만, 단계와 단계를 이어 붙인 주체는 사람이 아니라 에이전트였습니다." / 소제목 → "며칠짜리 정찰에서 사람이 빠졌습니다" 또는 "정찰과 침투 사이의 대기 시간이 문제입니다".

**C-2. 36행 — 이번 사건의 인과를 단정**
- 현재: "그러니까 이번 사건에서 피해의 크기를 결정한 변수는 모델의 성능이 아니라 그 계정에 매달려 있던 권한의 넓이입니다."
- 문제: AEPD는 **이번 사건에서 침해된 계정의 권한 범위를 밝히지 않았다**. "과도한 권한을 가진 토큰" 문장은 일반 권고(¿Por qué es relevante? 3번째 항목)이지 이 사건의 규명된 원인이 아니다. 이대로 두면 "AEPD가 원인을 권한 문제로 규명했다"는 오독을 부른다.
- 권고: 사건 단정 → 기관의 강조점 서술로 전환. 예) "그러니까 AEPD가 네 가지 함의 중 가장 구체적으로 쓴 것은 모델의 성능이 아니라 계정에 매달려 있던 권한의 넓이였습니다. 이번 피해 계정의 권한이 실제로 얼마나 넓었는지는 기관이 적지 않았고요."
- 참고: 같은 문단의 "계정 하나가 열리는 순간 그 계정이 닿을 수 있는 범위 전체가 곧바로 탐색 대상이 됩니다" 이하는 일반론이므로 그대로 두어도 무방.

### [중간]

**C-3. 34행 — 인용문 절단**
- 원문은 "...puede operar a la velocidad de una máquina **y acceder a diferentes servicios antes de que la organización detecte un comportamiento anómalo**"로 이어진다. 잘린 뒷부분("조직이 이상 행동을 탐지하기 전에 여러 서비스에 접근할 수 있다")이 오히려 초고의 논지를 직접 뒷받침한다.
- 권고: 뒷절까지 인용하거나, 최소한 말줄임표(…)로 절단 표시.

**C-4. 8행 / 54행 — 커버 이미지 프런트매터 누락과 하단 크레딧 불일치**
- `coverImage: ""`인데 하단에 "커버 이미지: AEPD 청사 입구 — Wikimedia Commons, Zarateman" 크레딧이 붙어 있다. 현재 상태로 발행하면 **hero-home.jpg 폴백이 렌더되면서 존재하지 않는 커버의 출처만 표시**된다.
- 파일은 실재 확인됨: `public/images/covers/spain-aepd-first-ai-agent-breach-notification.jpg` (AEPD 현판 사진, 1200×630). 크레딧 대장에도 등재(CC0, Zarateman).
- 권고: `coverImage: "/images/covers/spain-aepd-first-ai-agent-breach-notification.jpg"`로 채울 것. (커버를 쓰지 않을 거라면 54행 크레딧 줄을 삭제 — CLAUDE.md 2026-09-04 규칙)

### [경미]

**C-5. 38행 — 권고 대상 호칭 축약**
- "개인정보 보호 책임자들" ← 원문은 "Responsables, encargados y delegados de protección de datos"(컨트롤러·프로세서·DPO 세 주체). 권고: "개인정보 처리자와 수탁자, 보호책임자" 정도로.

**C-6. 44행 — AEPD가 동시에 붙인 단서 누락**
- AEPD는 "통계적 추세를 말할 수 없다"에 이어 "**sí constituye una señal significativa**"(다만 의미 있는 신호이기는 하다 — AI 지원 공격이 이론적 위험을 넘어 실제 처리에 영향을 주기 시작했다는)라고 썼다. 초고는 부정절만 인용해 AEPD보다 한 톤 더 유보적으로 읽힌다. 46행("서술의 종류가 하나 늘어난 것")이 사실상 같은 취지를 담고 있어 오류는 아니지만, 한 어절 추가 권고.

**C-7. 48행 — 권고 ①의 예시 축약**
- "일반 악성코드 항목에 뭉뚱그리지 말고" ← 원문은 "malware, phishing o acceso no autorizado" 세 가지. 정확성만 따지면 "악성코드나 피싱, 무단 접근 항목에" 정도.

**C-8. 48행 — "기계 속도"의 출처 전용**
- AEPD 4번째 항목의 원문은 "detección, **contención y respuesta** capaces de operar con la **rapidez suficiente**"이고, 앞선 "supervisión humana continúa siendo imprescindible"(사람의 감독은 여전히 필수)이라는 단서가 붙는다. "기계 속도"는 다른 문단(권한 문장)의 표현이다. 의미 왜곡은 아니나 인용 위치가 섞였다. 권고: "탐지와 격리, 대응이 사람 손을 기다리지 않고 충분히 빠르게 돌아가게 만들 것" 정도.

**C-9. 28행 — CC BY 2.0 저작자 표시 누락**
- 본문 이미지(서버 랙)는 Carl Lender, CC BY 2.0. 라이선스가 저작자 표시를 요구한다. 권고: "*출처: Wikimedia Commons, Carl Lender*".

**C-10. [직함 판정 — 지적 아님, 확인 결과]**
- "AEPD 부청장"은 **과장·오류가 아니다.** AEPD 공식 영문 보도자료가 이 직위를 그대로 "deputy of the AEPD"로 표기하고, 스페인 언론도 "director adjunto de la Agencia"로 쓴다. AEPD 수장의 직함이 presidente(청장)이므로 "부청장"은 합당한 대응어다. 다만 엄밀히는 대통령제 기관의 "청장 보좌관(adjunto a la presidencia)"으로, 조직도상 차석이라는 점을 감안하면 현 표기가 독자에게 가장 정확히 전달된다. **수정 불필요.**
- 참고: 팩트 카드의 "2025-03-03 취임"은 AEPD 공식 보도자료 기준 **2025-02-26 임명**이다(본문 미사용이라 영향 없음).

**C-11. [검증 결과 — 지적 아님]**
- 초고 18행의 "로그인 경위를 AEPD가 쓰지 않았다"는 **정확하다.** AEPD 원문 전문 대조 결과 자격증명 획득 경위·계정 종류·인증 우회 여부에 대한 서술이 단 한 글자도 없으며, BleepingComputer(9/16)도 동일하게 확인했다. 치명적 오류 아님.
- 또한 초고는 1단계(일반 파일 취약점 탐색)와 2단계(로그인 성공) 사이에 **인과를 만들지 않았다**. 원문의 "y"가 연결사일 뿐 인과가 아님을 정확히 반영한 처리다. 유지 권장.

---

## D. 종합 판정

### 치명적 오류 (발행 전 반드시 수정)
1. **C-1** — "며칠짜리 정찰이 세션 하나로 접혔습니다" / "로그인 세션 하나 안에서 끝났습니다": AEPD 원문에 시간·세션 서술이 전혀 없음. 출처에 없는 사실을 출처 근거로 제시.
2. **C-2** — "이번 사건에서 피해의 크기를 결정한 변수는 ... 권한의 넓이입니다": AEPD가 규명하지 않은 이번 사건의 인과를 단정. 초고 자신의 "미검증" 단락과 충돌.

### 중간 (발행 전 처리 권장)
3. **C-3** — 핵심 인용문 후반부 무표시 절단.
4. **C-4** — `coverImage` 빈 값 + 하단 커버 크레딧 불일치(실제 파일은 존재하므로 경로만 채우면 해결).

### 경미 (선택)
5. C-5 권고 대상 호칭 축약 / 6. C-6 "señal significativa" 단서 누락 / 7. C-7 권고① 예시 축약 / 8. C-8 "기계 속도" 인용 위치 혼선 / 9. C-9 CC BY 2.0 저작자 표시 누락.

### 검증 통과 항목
- 게시일(9/14), 저자·직함, 4단계 공격 순서, 로그인 경위 미기재 단정, 핵심 인용문 번역, CCN-CERT BP/36 실재·발간 주체·6월 공개·진단 내용·AEPD의 직접 언급, 필립스 발언·소속·직함, AEPD의 두 가지 유보(추세 아님·모델 제공사 무관), 권고 목록 9개 항목 전부. **시점 규율 위반 0건, 미래 사건 소급 0건.**

### 판정

- [ ] 발행 가능
- [x] **수정 후 발행** (치명적 오류 2건은 모두 문장 단위 교정으로 해소 가능. 사실 오인·시점 위반은 없고, 출처가 침묵한 지점을 저자가 메워 버린 유형의 과잉 서술이 문제임)
- [ ] 발행 보류
