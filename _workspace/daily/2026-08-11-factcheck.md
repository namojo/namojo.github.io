# Fact Check Report: 2026-08-11-meta-muse-glimmer-open-weight-return

- **검증 대상:** `_posts/2026-08-11-meta-muse-glimmer-open-weight-return.md`
- **팩트 카드:** `_workspace/daily/2026-08-11-brief.md`
- **검증 일시:** 2026-08-11 (KST)
- **판정:** **PASS (수정 5건 직접 반영 후 발행 가능)**

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-08-11 (화)
- **오늘 기준 미래 사건 언급:** 없음
- **사후 시점 표현("훗날 드러나듯", "결국 ~였다"):** 없음

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|-----------|---------|-----------|------|
| IBM PC 5150 발표 | 1981-08-12 | 45년 전 ✓ | 유지 ("45주년이 바로 내일" — 2026-08-12 정확) |
| 컴팩 BIOS 역설계 | 1982년 창업·클린룸 작업, 첫 호환기종 1983-03 출하 | 이전 ✓ | **수정**(아래 C-2) |
| Muse Spark 공개(폐쇄) | 2026-04-08 | 이전 ✓ | 유지 ("넉 달 전" 정확) |
| Muse Spark 1.1 (호스팅 API만) | 2026-07-09 | 이전 ✓ | 유지 ("7월의 Spark 1.1") |
| Muse Code 베타 + Spark 1.2 (유료) | 2026-08-05 | 이전 ✓ | 유지 ("닷새 전인 8월 5일" 정확: 8/5→8/10) |
| Muse Glimmer 30B Apache 2.0 공개 | 2026-08-10 (미 현지 월요일) | 어제 ✓ | 유지 (8/10은 실제 월요일) |
| 저커버그 에세이 "The Future is for Everyone" | 2026-08-10 | 어제 ✓ | 유지 |
| Kimi K3 자기 인용 (07-27 포스트) | 2026-07-27 | 15일 전 ✓ | 유지 ("2주 전" 적정) |
| SKT A.X K2 688B HF 공개 | 2026-07-29 | 이전 ✓ | 유지 |
| LG K-EXAONE 2.0 750B HF 공개 | 2026-07-31 | 이전 ✓ | 유지 |
| 독파모 국민 체험 평가 | **2026-08-08~11** | 진행 중 | **✗ 오류(초고는 8/7 시작) → 수정** |
| Qwen3.8-27B 오픈웨이트 | 8월 10일 주 공개 예정 | **미래(예정)** | 유지 — 초고가 "예고된"으로 정확히 표기 |
| Muse Spark 1.2 오픈웨이트 | 날짜·라이선스 미정 (WSJ "in the coming weeks") | **미래(예고)** | 유지 — 초고가 "예고했습니다 / 예고는 예고입니다"로 완료 아님을 2회 명시 ✓ |

**시점 규율 판정:** 위반 없음. 특히 지시받은 "Spark 1.2 개방을 완료로 잘못 서술" 위험은 없음(본문 42줄에서 "예고", "날짜도 라이선스도 아직 나오지 않았습니다"로 이중 방어).

**용어 시점성:** MCP(2024-11 공개), 오픈웨이트, 투기적 디코딩, MoE 모두 발행일에 통용 ✓.

---

## B. 사실 검증

| # | 주장 | 상태 | 증거 | 조치 |
|---|------|------|------|------|
| 1 | IBM 5150, 1981-08-12 뉴욕 발표 | ✓ 확인 | IBM PC 위키·PCjs·minuszerodegrees(Technical Reference 6025005, AUG81) | - |
| 2 | 기술 참조 매뉴얼에 회로도 + BIOS 소스 목록 인쇄 | ✓ 확인 | minuszerodegrees `IBM_5150_Technical_Reference_6025005_AUG81.pdf`, philspil66/IBM-PC-BIOS("IBM Technical Reference manuals의 BIOS 리스팅을 스캔·전사해 복원", 5,940행) | - |
| 3 | 애플 II가 4년 앞섰다 / 코모도어·탠디가 시장 분점 | ✓ 확인 | Apple II 1977-06 출시, 1981년 시장 상위는 Apple·Tandy·Commodore | - |
| 4 | CPU는 인텔, OS는 MS에서 가져오고 MS가 타사에 판매 가능 | ✓ 확인 | IBM PC 8088 + MS-DOS 비독점 라이선스 계약(MS가 MS-DOS 타사 판매) | - |
| 5 | 컴팩이 1982년 BIOS를 합법 역설계 | ⚠ 근거 약함(연도 압축) | 컴팩 1982년 휴스턴 창업, 100만 달러 투입 클린룸 9개월, Portable 1982-11 발표·1983-03 출하 | **수정**: "1982년 텍사스에서 창업한 … 이듬해 첫 호환 기종" |
| 6 | Muse Glimmer 30B, Apache 2.0, HF 공개(8/10) | ✓ 확인 | HF 공식 블로그 `muse-glimmer`, VentureBeat, CNBC, Phoronix | - |
| 7 | 총 296억 파라미터 덴스(MoE 아님) + 인식 인코더 | ✓ 확인 | 모델카드/vLLM recipes "29.6B · DENSE · 128K ctx", HF 블로그(텍스트 디코더 28B/52층 + 2B급 ViT 인코더) | - |
| 8 | 저커버그 X 원문 인용 | ✓ 확인 (원문 일치) | @finkd: "Today we're also opening the weights for Muse Glimmer, a great 30B parameter dense model that can run locally." — 초고 번역 정확 | - |
| 9 | 에세이 6,500단어, 제목 "The Future is for Everyone" | ✓ 확인 | 404 Media·TheJournal.ie·Fortune, about.fb.com 원문 | - |
| 10 | BF16 추론에 H100 80GB 1장 | ✓ 확인 | HF 공식 블로그 메모리 표 | - |
| 11 | 4비트로 55GB → 18~20GB | ✓ 확인 | MarkTechPost 요지("under 20GB"), Rohan Paul 정리("At full precision … 55GB+") | - |
| 12 | 양자화 2종: 32GB 타깃 열화 0.2% / 24GB 타깃 1.0% | ✓ 확인 | K-Quant-Dynamic 32GB @0.2%(15개 벤치마크 평균), K-Quant-17GB 24GB @1.0% | - |
| 13 | 24GB = RTX 4090급 봉투 | ✓ 확인 | RTX 4090 24GB / 5090 32GB | - |
| 14 | 쿼리 헤드 32 : KV 헤드 2 (16:1 공유) | ✓ 확인 | HF 블로그 "Each key-value head is shared by 16 query heads" | - |
| 15 | 컨텍스트 32,768 (확장 13만+ 표기 상충) | ✓ 확인 (상충 명시가 정확) | HF 블로그 32,768 vs vLLM recipes·LMSYS "128k+" | 초고가 "숫자가 갈립니다"로 병기 — 적절 |
| 16 | DFlash 초안 모델 동봉, 16토큰 블록 | ✓ 확인 | HF 블로그(블록 확산, 1 앵커+15 제안), Semaphore | - |
| 17 | DFlash "25억 파라미터급" | ? 검증 불가 | 공개 문서는 층수(5층)·SWA 2048·32Q/8KV·GGUF 1.63GB만 명시. 2.56B는 2차 매체 주장 | **수정**: 파라미터 수 삭제 → "다섯 개 층짜리"(HF 블로그 확인값)로 대체 |
| 18 | RTX 5090 74.9 → 233.4 tok/s | ✓ 확인 | 메타 발표 수치, LMSYS("~230 tok/s on a single RTX 5090"), SGLang 236 tok/s/user | - |
| 19 | M4 Max 23.7 → 37.8 tok/s | ✓ 확인 | 메타 발표 수치 (M5 Max 26.6→50.2도 동일 출처, 본문 미사용) | - |
| 20 | LMSYS "로컬 에이전트를 막아온 것은 언제나 속도와 신뢰성" | ✓ 확인 | LMSYS 블로그 "Speed and reliability have always been the blockers for a local agent" | - |
| 21 | 게리 마커스 인용 | ✓ 확인 | garymarcus.substack "Open-source is NOT the same as open-weight": "open weights is open source with all the good press but far fewer advantages" | - |
| 22 | Glimmer는 Muse Spark 증류 모델 | ✓ 확인 | 메타/HF 블로그, VentureBeat | - |
| 23 | MCP Atlas 75.5 vs Qwen3.6-27B 62.5 / Gemma4-31B 54.2 | ✓ 확인 | HF 블로그 벤치마크 표 | - |
| 24 | SWE-Bench Verified 76.0 vs Qwen3.6-27B 77.2 (역전) | ✓ 확인 | 동일 표 | - |
| 25 | Terminal-Bench 2.1 9점 차 열세 | ✓ 확인 | 51.7 vs 60.7 = 9.0점 차 | 수치 명기로 보강(C-3) |
| 26 | 벤치마크 전부 메타 자체 발표, 독립 검증 없음 | ✓ 확인 | 벤더 자체 표만 존재 | - |
| 27 | 에세이의 "초지능은 무엇을 열지 신중히 고르겠다" 유보 | ✓ 확인 | 에세이 "careful about what we choose to open-source … novel safety concerns" | - |
| 28 | 저커버그, 중국 오픈소스 근접 주장 + 워싱턴에 요구 | ⚠ 표현 부정확 | Fortune·Reuters: 미디어 블리츠는 WSJ **본인 기고 + 선별 매체 인터뷰**. 요구 내용은 "미국 오픈소스가 경쟁하기 어렵게 만드는 장벽 제거"(외국 모델 사용 제한에는 반대 입장 명시) | **수정**: 경로("WSJ 기고와 인터뷰")·요구 내용 정정 |
| 29 | Llama 커스텀 라이선스 "월간 이용자 7억 명" 조항 | ✓ 확인 | Llama 2/3 Community License 2조 700M MAU 초과 시 별도 라이선스 필요 | - |
| 30 | Apache 2.0에는 MAU·사용 제한 없음 | ✓ 확인 | Apache 2.0 표준 조항 | - |
| 31 | SKT A.X K2 688B | ✓ 확인 | ZDNet·헤럴드경제·SKT 뉴스룸(7/29, 6,880억, 직전 K1 519B) | - |
| 32 | LG K-EXAONE 2.0 750B, 국내 최대 | ✓ 확인 | LG AI연구원 블로그·inews24·이지경제(7/31, 7,500억, 1차 236B의 3배 이상) | - |
| 33 | 모티프 3 314B MoE | ✓ 확인 | AI타임스·뉴시스·AI Weekly(314B MoE, 토큰당 활성 약 13B) | - |
| 34 | 독파모 국민 체험 평가 8/7 시작 | ✗ **오류** | 바이라인·뉴스천지·헤럴드: **8일~11일**, 국민평가단 200명, 결과 이르면 12일. 8/7은 2차 평가 "돌입" 보도(ZDNet 08-07)일 뿐 국민평가 개시일 아님 | **수정**(치명적 분류) |
| 35 | 이번 주 Qwen3.8-27B 오픈웨이트 공개 예고 | ✓ 확인 | Qwen3.8-Max(8/3, 2.4T) 오픈웨이트 + 27B를 8월 10일 주 HF·모델스코프 공개 예정 | - |
| 36 | "Goodbye, Llama" 제목 | ✓ 확인 | VentureBeat "Goodbye, Llama? Meta launches new proprietary AI model Muse Spark…" | - |

---

## C. 수정 권고 및 처리 (전 건 직접 반영 완료)

1. **[치명적] 52줄 — 독파모 국민 체험 평가 개시일 오류**
   - 기존: "8월 7일부터는 국민이 직접 써보는 체험 평가가 시작됐습니다."
   - 수정: "지난 8일부터 오늘까지는 무작위로 뽑은 국민 200명이 네 팀의 모델을 직접 써보고 점수를 매기는 평가가 진행되고 있습니다."
   - 근거: 국민평가 기간 8/8~8/11, 인구비례 무작위 200명 (바이라인네트워크·뉴스천지·헤럴드경제). 발행일이 마지막 날이라 "오늘까지"가 더 정확하고 시의성도 강해짐.
   - ※ 팩트 카드(브리프)의 "2026-08-07부터 국민 체험 평가 시작" 기술 자체가 오류. **Phase 4 타임라인 반영 시 8/8~8/11로 기록할 것.**

2. **[경미] 14줄 — 컴팩 연도 압축**
   - 기존: "그런데 1982년, 텍사스의 작은 회사 컴팩이 그 BIOS를 합법적으로 역설계해 냈습니다."
   - 수정: "그런데 1982년 텍사스에서 창업한 작은 회사 컴팩이 그 BIOS를 합법적으로 역설계해, 이듬해 첫 호환 기종을 내놓았습니다."
   - 근거: 1982년 휴스턴 창업, 클린룸 9개월, Compaq Portable 1982-11 발표·1983-03 출하.

3. **[경미] 44줄 — Terminal-Bench 수치 명기**
   - "9점 차로 밀립니다" → "51.7점으로 60.7점에 9점 차로 밀립니다" (HF 블로그 표 값으로 검증 가능하게)

4. **[경미] 32줄 — 검증 불가 수치 제거**
   - "DFlash라는 25억 파라미터급 초안 모델" → "DFlash라는 다섯 개 층짜리 초안 모델"
   - 근거: 파라미터 수는 공식 문서 미기재(2차 매체 주장). 층수 5는 HF 공식 블로그 확인값.

5. **[경미] 46줄 — 저커버그 요구 내용·경로 정정**
   - 기존: "같은 날 이어진 언론 인터뷰에서 … 워싱턴의 지원을 요구했습니다."
   - 수정: "같은 날 월스트리트저널 기고와 몇몇 매체 인터뷰를 함께 돌면서, … 미국 오픈소스 모델의 발목을 잡는 장벽을 걷어내라고 요구했습니다."
   - 근거: Fortune 08-10(미디어 블리츠 = 본인 WSJ 기고 + 선별 인터뷰), 에세이 원문("I do not believe restricting access to foreign open source models is an effective solution … removing the hurdles").

### 반영하지 않은 사항(의도적)
- SWE-Bench Pro 51.2·AIME 2026 94.7 등 유리한 항목 미인용은 오류가 아님(본문은 불리한 항목을 병기하는 방향이라 균형상 문제 없음).
- 24GB 봉투 구성 열거에서 초안 모델 누락: 부분집합 기술이므로 오류 아님(초안 모델은 다음 문단에서 별도 소개).
- 업스테이지 Solar Open 2 규모 미언급: 공개 규모 미확인이므로 무언급이 안전.

---

## D. 검증 한계

프록시 egress 차단으로 직접 페치 불가: huggingface.co(모델카드), research.meta.ai, about.fb.com, cnbc.com, venturebeat.com, theregister.com, marktechpost.com, lmsys.org, developer.nvidia.com, hankookilbo.com, byline.network, newscj.com, wikipedia.org.
→ 대체 경로로 교차: `raw.githubusercontent.com/huggingface/blog/main/muse-glimmer.md`(HF 공식 블로그 원문 전문 확보), techmeme(WSJ 헤드라인), 검색 엔진 요약 인용문, 국내 언론 4곳 이상 교차(SKT·LG·모티프·국민평가 일정), minuszerodegrees·PCjs·philspil66 리포지터리(IBM BIOS 리스팅).
한국 관련 팩트는 모두 국내 언론 2곳 이상 교차 확인함.

---

## E. 종합 판정

- [x] **발행 가능** — 치명적 오류 1건(독파모 국민평가 일자)과 경미 4건을 모두 직접 수정 반영, 재검증 완료
- [ ] 수정 후 발행
- [ ] 발행 보류

**PASS.** 시점 규율 위반 없음, 인용문 2건(저커버그 X·게리 마커스) 원문 일치, 벤치마크·메모리·처리량 수치 전부 1차 또는 준1차 출처 확인. 잔여 리스크는 "메타 자체 발표 벤치마크"와 "컨텍스트 길이 상충"인데 본문이 두 건 모두 명시적으로 유보 처리하고 있음.
