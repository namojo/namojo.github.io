# Fact Check Report: microsoft-maia-300-tokens-per-megawatt

- **검증 대상:** `_posts/2026-10-13-microsoft-maia-300-tokens-per-megawatt.md`
- **팩트 카드:** `_workspace/daily/2026-10-13-brief.md`
- **검증 일시:** 2026-10-12 (세션 기준) / 발행 예정일 2026-10-13 09:00 KST
- **1차 출처 확보:** 마이크로소프트 공식 블로그 원문 확인 — https://blogs.microsoft.com/blog/2026/10/12/microsoft-to-expand-azure-maia-system-to-multi-gigawatt-deployments/

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-10-13 09:00 +0900 (= 현지시각 2026-10-12 17:00 PDT)
- **본문 날짜·이벤트 스캔**

| 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| Maia 300 공개, OCP Global Summit | 2026-10-12 (현지시각, 서밋 10/12~15 산호세 개막일) | 이전 ✓ | 유지 |
| Maia 200 발표 ("올해 1월에 발표돼") | 2026-01-26 | 이전 ✓ | 유지 |
| Maia 200 양산·가동 ("지금 돌아가고 있는") | 공식 블로그: "Maia 200 is now serving Microsoft production workloads, including Microsoft Copilot" | 현재형 ✓ | 유지 |
| SK하이닉스 HBM3E 단독 공급 보도 ("올해 1월에 있었고요") | 2026-01-27 (Korea Times·UPI·TrendForce·Aju Press 동일 날짜) | 이전 ✓ | 유지 |
| Maia 300 양산·배포 "2027년부터" | 공식 블로그: "will begin production deployments in 2027" | 미래 ✓ | 유지 |
| "11월 Ignite에서 상세를 더 공개하겠다" | 공식 블로그 "Next month at Microsoft Ignite 2026 in San Francisco and online" / Ignite 2026 = 11/17~20, 모스콘센터 | 미래 ✓ | 유지 |

- **발행일 이후 사건 언급: 없음.** 시점 규율 위반 0건.
- **사후 시점 표현 검사:** "훗날", "돌이켜보면", "결국 ~로 드러났듯" 등 없음. 마지막 문단의 "결국"은 '궁극적으로'의 뜻이라 사후 시점 표현이 아님.
- **용어·약어 시점성:** HBM4·N2P·MXFP4·POPS·KV 캐시·OCP — 모두 발행일 이전에 통용. 문제 없음.
- **"예정 vs 완료" 혼동 검사 (요청 항목):**
  - ✗ **1건 발견.** 본문 26줄의 40% 주장. 마이크로소프트 원문은 **"we expect Maia 300 to deliver 40% more tokens per megawatt compared to leading GPU-based systems"** — 2027년에 나올 칩에 대한 **기대치(expect)** 다. 초고는 "메가와트당 토큰을 약 40% 더 뽑는다"고 **현재 확정 사실처럼** 인용했다. 이 문장이 글의 논지가 걸린 자리라 반드시 완화 필요. (C-1 참조)
  - ⚠ 본문 14줄의 사양 서술이 전부 현재형("…들어가는데", "…입니다")이다. 아직 양산 전 제품의 설계치라는 점이 드러나지 않는다. 사양 서술의 현재형은 업계 관행이라 오류는 아니나, 12줄에서 "양산과 배포는 2027년부터"를 먼저 밝혔으므로 독자 오인 위험은 낮다. 수정은 선택.
  - ✓ 31줄 "제3자가 측정한 결과도 아직 없습니다" — UPI가 "발표 시점까지 제3자 기업의 테스트는 없었다"고 명시. 정확.

---

## B. 사실 검증

| # | 주장 (본문 줄) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 현지시각 10/12 OCP Global Summit에서 3세대 자체 가속기 Azure Maia 300 공개 (12줄) | ✓ 확인 | MS 공식 블로그 2026-10-12 / OCP Global Summit 2026 = 10/12~15 산호세, 10/12이 개막일 (opencompute.org) | - |
| 2 | 양산·배포 2027년부터, 멀티 기가와트 규모 (12·37줄) | ✓ 확인 | MS 블로그 "Maia 300 will begin production deployments in 2027" / 스콧 거스리 EVP "We will scale our Azure Maia family to multi-gigawatt deployments starting in 2027" | - |
| 3 | "자사 제품과 서비스의 주된 추론 시스템이 되는 것을 목표" (12줄) | ✓ 확인 (범위 주의) | 거스리 발언 "making Maia the **primary inference system for Microsoft products and services**" | 원문은 **Maia 제품군 전체**에 대한 목표. 초고는 Maia 300 한 제품의 목표처럼 읽힐 여지 — 경미 (C-5) |
| 4 | HBM4 8스택, 288GB, 18TB/s, SoC 950W (14줄) | ✓ 확인 | MS 블로그 "Eight HBM4 stacks provide 18.0 TB/s of peak memory bandwidth within a 950-watt TDP" (용량 288GB=8×36GB는 StorageReview·Notebookcheck·Techzine 교차) | - |
| 5 | 연산 칩렛 TSMC N2P (14줄) | ✓ 확인 | StorageReview·Notebookcheck·SiliconANGLE·Techzine 교차 | - |
| 6 | **"I/O 다이 두 개와 메모리 다이 네 개"** (14줄) | ⚠ **근거 약함 / 출처 간 충돌** | StorageReview만 "one main compute die, two I/O dies, four memory dies"로 기술. SiliconANGLE은 "컴퓨트 칩렛 4개 + 디바이스 제어 칩렛 1개 + 보조 칩렛 2개"로 **다르게** 기술. Notebookcheck는 개수 미기재. **MS 공식 블로그는 칩렛 개수를 공개하지 않음** | 개수 삭제 권고 (C-2) |
| 7 | 랙당 가속기 96개, 167kW, HBM 27.6TB, 집계 약 1.7PB/s (14줄) | ✓ 확인 | MS 블로그 "96 accelerators within a 167-kilowatt power envelope", 27.6TB HBM, 1.7PB/s aggregate. 자체 검산도 일치: 96×288GB=27.6TB, 96×18TB/s=1,728TB/s≈1.73PB/s | - |
| 8 | Maia 200 = TSMC 3nm, HBM3E 216GB, 7TB/s, 750W (18줄) | ✓ 확인 | Techzine·Notebookcheck·StorageReview 교차. 정밀하게는 N3P·7.1TB/s이나 "3nm·7TB/s"는 다수 매체가 쓰는 반올림 표기로 허용 범위 | - |
| 9 | 파생 계산 — 대역폭 2.5배, 용량 +33%, 전력 +27% (18줄) | ✓ 확인 | 18/7.1=2.54, 288/216=1.333, 950/750=1.267. 게다가 **2.5배·33%는 마이크로소프트가 직접 제시한 비교치**(UPI) | - |
| 10 | Maia 200이 Copilot을 구동 중 (18·33줄 함의) | ✓ 확인 | MS 블로그 "Maia 200 is now serving Microsoft production workloads, including Microsoft Copilot". GitHub Copilot·Microsoft Foundry는 연말 이전 이관 예정 | - |
| 11 | 인용 — "대규모 추론 시스템에서 병목은 점차 연산 능력이 아니라 데이터를 효율적으로 옮기는 것" (22줄) | ✓ 확인 (1차 출처) | MS 공식 블로그 원문 **"Moving data efficiently, rather than raw compute power, is increasingly the bottleneck in large inference systems."** 번역 정확 | 귀속만 정밀화 권고 (C-6) |
| 12 | 온다이 네트워크 컨트롤러 + 400Gb/s 이더넷 32포트 + 양방향 3.2TB/s (22줄) | ✓ 확인 | StorageReview "32 ports of 400Gb/s Ethernet via an on-die AI network controller, 3.2TB/s bidirectional". 3.2TB/s는 Notebookcheck도 확인. 검산 일치(32×400Gb=12.8Tb/s=1.6TB/s 편방향 → 양방향 3.2TB/s) | - |
| 13 | 온다이 SRAM = 소프트웨어가 직접 관리하는 스크래치패드 (22줄) | ✓ 확인 | Converge Digest가 "software-managed SRAM"을 데이터 이동 저감 요소로 명시. SiliconANGLE도 "HBM 대신 내부 SRAM에 데이터 유지" 기술 | - |
| 14 | 강화된 MXFP4 지원 (22줄) | ✓ 확인 | MS 블로그 "enhanced MXFP4" | - |
| 15 | "선도적인 GPU 기반 시스템 대비 메가와트당 토큰 약 40%" (26줄) | ⚠ **수치·비교군은 정확하나 시제가 다름** | MS 블로그 "**we expect** Maia 300 to deliver 40% more tokens per megawatt compared to leading GPU-based systems" | **"기대한다"로 수정 — 치명적** (C-1) |
| 16 | 비교 대상 GPU·모델·서빙 구성 모두 비공개, 제3자 측정 없음 (31줄) | ✓ 확인 | Converge Digest "회사 주장이며 벤치마크 구성 미공개" / StorageReview "GPU·모델·서빙 구성 미기재" / Windows Forum "MS가 40% 주장의 비교 시스템을 지목하지 않았다" / UPI "발표 시점까지 제3자 테스트 없음" | - |
| 17 | 가속기당 FP4 13.8 POPS, FP8 6.9 POPS (26줄) | ✓ 확인 (단위 표기 주의) | StorageReview "13.8 POPS FP4, 6.9 POPS FP8" / Notebookcheck·TechPowerUp 등은 같은 수치를 **PFLOPS**로 표기. 수치 자체는 다수 매체 일치 | 단위 표기 경미 (C-4) |
| 18 | **FP16/BF16 수치는 공개하지 않았다** (26줄) — 글의 논지 | ✓ 확인 | StorageReview가 "FP16/BF16 are not disclosed"라고 **명시**. MS 공식 블로그는 연산 성능 수치를 아예 싣지 않았고, 확인한 2차 보도 7곳(Techzine·Notebookcheck·SiliconANGLE·Converge·Neowin·UPI·HPCwire) 어디에도 FP16/BF16 수치 없음 | - |
| 19 | 학습에서는 엔비디아가 여전히 핵심 파트너 (26줄) | ✓ 확인 | StorageReview "NVIDIA and AMD GPUs remain in Microsoft's training fleet" / UPI "엔비디아를 완전히 버리는 것은 아니며 AMD와도 협력" | AMD가 빠졌으나 오류 아님 |
| 20 | **Maia는 Azure에서 빌릴 수 있는 인스턴스로 제공되지 않는다** (31줄) — 글의 핵심 논지 | ✓ 확인 (단, 단서 1건) | StorageReview "Maia runs only inside Microsoft. It is not offered as a rentable Azure instance type." / Moor Insights "MS는 Azure 고객이 빌릴 수 있는 Maia 인스턴스를 발표한 적 없다" / 로이터·FN News(2026-05) "Maia 200은 아직 Azure 고객에게 제공되지 않았다" / Maia 100도 대여 제공된 적 없음 | **단서:** CNBC 2026-05-21 — 앤트로픽이 Maia 200 서버 대여를 놓고 **초기 협상** 중(미체결). 완료형 부정은 지금도 참이나 "지금까지는" 한정 권고 (C-3) |
| 21 | Maia 300의 HBM4 공급사는 이번 발표에 없음 (37줄) | ✓ 확인 | 발표 당일 보도 전수 검색에서 Maia 300 HBM4 공급사 언급 0건. (HBM4 업계 보도는 전부 엔비디아 루빈 건) | - |
| 22 | Maia 200 HBM3E = SK하이닉스 단독 공급 보도가 올해 1월 (37줄) | ✓ 확인 | Korea Times 2026-01-27 "SK hynix becomes sole supplier of HBM for Microsoft AI chips: sources" (팩트 카드 URL 실재 확인) + UPI 2026-01-27 + TrendForce 2026-01-27 + Aju Press 2026-01-27. 최초 보도는 매일경제, **업계 소식통 인용**이며 MS·SK하이닉스 공식 확인은 없음. 해당 HBM은 HBM3E, 대상 칩은 Maia 200(12단 6스택 216GB) ✓ | 초고가 이미 "보도가 있었고요"로 귀속 — 적절 |
| 23 | 커버·본문 이미지 실재 및 캡션 정합 | ✓ 확인 | `public/images/covers/microsoft-maia-300-tokens-per-megawatt.jpg` 실재 — 데이터센터 외부 냉각 설비 사진으로 하단 크레딧("마이크로소프트 데이터센터(네덜란드 미던메이르) — Wikimedia Commons, Hay Kranen")과 `_workspace/image-credits-2026.md` 137행 일치. `public/images/inline/maia-300-rack-power.jpg` 실재 — ORNL Frontier 캐비닛 상단에 전원 차단기함과 굵은 케이블이 천장에서 내려오는 장면으로 캡션과 일치, 크레딧 138행 일치. Frontier는 오크리지 국립연구소 소재 ✓. `coverImage: ""` 빈 값은 슬러그-파일명 매칭 관례(2026-07-18 이력)에 부합 | - |

**고유명사 철자 스캔:** Azure Maia 300 / OCP Global Summit / TSMC N2P / HBM4 / HBM3E / MXFP4 / KV 캐시 / Copilot / Teams / Ignite / SK하이닉스 — 전부 정확. 인명·직함은 본문에 등장하지 않아 위험 없음.

---

## C. 수정 권고 (우선순위 순)

### C-1. [치명적] 26줄 — 40% 주장의 시제
현재: `마이크로소프트는 Maia 300이 "선도적인 GPU 기반 시스템 대비 메가와트당 토큰을 약 40% 더 뽑는다"고 했습니다.`
문제: 원문은 `we expect ... to deliver`. 2027년 양산 전 제품에 대한 **기대치**를 확정 측정치처럼 인용했다. 이 글이 "비교 대상이 적혀 있지 않다"고 지적하는 바로 그 숫자이므로, 저자 쪽 인용이 부정확하면 지적의 무게가 사라진다.
권고(택1):
- `마이크로소프트는 Maia 300이 "선도적인 GPU 기반 시스템 대비 메가와트당 토큰을 약 40% 더 뽑을 것으로 기대한다"고 했습니다.`
- 또는 `… 40% 더 뽑을 것으로 기대한다고 밝혔습니다.`
부수 효과: 31줄의 "제3자가 측정한 결과도 아직 없습니다"와 맞물려 "기대치인데 검증할 사람이 없다"는 논지가 오히려 선명해진다.

### C-2. [중요] 14줄 — 칩렛 개수
현재: `여기에 I/O 다이 두 개와 메모리 다이 네 개를 붙인 칩렛 구성이에요.`
문제: 단일 2차 출처(StorageReview)에만 있는 수치이고, SiliconANGLE은 "컴퓨트 칩렛 4개 + 제어 칩렛 1개 + 보조 칩렛 2개"로 다르게 적었다. 공식 블로그는 침묵. 글의 논지와 무관한 디테일인데 반박 위험만 떠안는다.
권고: `연산 칩렛은 TSMC의 N2P 공정으로 만들고, 여기에 I/O와 메모리를 담당하는 다이를 따로 붙인 멀티 칩렛 구성이에요.` (개수 삭제)

### C-3. [중요] 31줄 — "제공되지 않습니다"의 한정
현재: `Maia는 Azure에서 빌릴 수 있는 인스턴스로 제공되지 않습니다. 마이크로소프트 내부에서만 도는 칩이에요.`
문제: 현재 사실로는 맞다(Maia 100·200 모두 대여 인스턴스로 제공된 적 없음). 다만 2026-05-21 CNBC가 앤트로픽의 Maia 200 서버 대여 **초기 협상**(미체결)을 보도한 바 있어, 단정형이 뒤늦게 깨질 수 있다.
권고: `Maia는 지금까지 Azure에서 빌릴 수 있는 인스턴스로 제공된 적이 없습니다. 마이크로소프트 내부에서 도는 칩이에요.` — "지금까지"만 넣으면 충분. (앤트로픽 협상 건은 본문 논지와 결이 달라 굳이 끌어오지 않아도 됨. 넣는다면 35줄 "외부 고객이 아직 없다" 뒤에 한 문장.)

### C-4. [경미] 26줄 — POPS / PFLOPS 표기
수치(13.8·6.9)는 다수 출처 일치. 단위는 StorageReview가 POPS, Notebookcheck·TechPowerUp 등이 PFLOPS로 적는다. FP4·FP8은 부동소수점 포맷이라 PFLOPS 표기가 더 일반적이다.
권고: `FP4에서 13.8 PFLOPS, FP8에서 6.9 PFLOPS` 로 바꾸거나, 현 표기를 유지해도 오류는 아님. 저자 판단.

### C-5. [경미] 12줄 — "주된 추론 시스템" 주어
거스리의 원 발언은 "making **Maia**(제품군) the primary inference system for Microsoft products and services"다. 초고는 Maia 300 한 제품의 목표로 읽힌다.
권고: `… 자사 제품과 서비스의 주된 추론(inference) 시스템을 Maia 제품군으로 만드는 것이 목표라고 밝혔어요.`

### C-6. [경미] 22줄 — 인용 귀속
현재 `발표 자료는 "…"라고 적어 두었어요.` → 실제 출처는 **마이크로소프트 공식 블로그 글**(blogs.microsoft.com, 10/12).
권고: `마이크로소프트 블로그는 "…"라고 적었어요.`

### C-7. [선택] 14줄 — 미출시 제품의 현재형 사양 서술
12줄에서 2027년 양산을 먼저 밝혔으므로 오인 위험은 낮다. 그래도 엄밀히 하려면 14줄 첫 문장에 "설계상" 한 단어를 넣는 선택지가 있다.

### C-8. [프로세스] `_style/ai-timeline.md` 미갱신
타임라인 마지막 줄이 `2026-10-12 | **오늘**`이고 Maia 300 항목이 없다. 하네스 규칙(새 이벤트를 타임라인에 먼저 등재)상 발행 전/후 등재 필요. 권장 등재 내용: 발표일·OCP·HBM4 288GB/18TB/s/950W·랙 96/167kW·FP4 13.8·FP8 6.9·**FP16/BF16 미공개**·40%는 **기대치**이고 비교군 비공개·**Azure 대여 인스턴스 아님**·2027 양산·Maia 200(2026-01-26, HBM3E 216GB/7TB/s/750W, Copilot 구동, SK하이닉스 단독 공급 보도 2026-01-27 업계 소식통).

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — C-1(치명적) 1건, C-2·C-3(중요) 2건 반영 후 발행
- [ ] 발행 보류

**치명적 오류 목록**
1. **26줄, 40% 인용의 시제.** 마이크로소프트 원문은 "we expect ... to deliver 40% more tokens per megawatt" — 2027년 제품에 대한 **기대치**인데 초고는 확정 사실처럼 인용했다. 글의 논지가 걸린 문장이므로 반드시 "기대한다"로 고칠 것. (그 외 치명적 오류 없음)

**요청하신 10개 검증 항목 결과 요약**
1. 사양 전반 — ✓ 확인(공식 블로그 1차). 단 **칩렛 개수(I/O 2 · 메모리 4)만 ⚠ 단일 출처·타 매체와 충돌** → 삭제 권고.
2. FP4 13.8 / FP8 6.9 및 **FP16·BF16 미공개** — ✓ 확인. "공개하지 않았다"는 진술은 사실(StorageReview 명시 + 공식 블로그 및 확인한 2차 보도 7곳 전부 미기재). 단위만 POPS/PFLOPS 혼용.
3. 메가와트당 토큰 40%, 비교군·모델·서빙 구성 비공개, 제3자 벤치마크 부재 — ✓ 확인. **단, 원문은 "기대한다"** (치명적 수정 1건).
4. **Azure 대여 인스턴스로 제공되지 않음** — ✓ 확인(StorageReview·Moor Insights·로이터 계열 교차). 발행 중단 사유 아님. 앤트로픽 협상(2026-05, 미체결) 단서로 "지금까지는" 한정 권고.
5. Maia 200(2026-01 발표·양산 중·3nm·HBM3E 216GB·7TB/s·750W·Copilot 구동) — ✓ 전부 확인.
6. 데이터 이동 병목 인용 — ✓ **공식 블로그 원문과 1:1 대조 완료**, 번역 정확.
7. 11월 Ignite 상세 공개 — ✓ 확인(블로그 "Next month" + Ignite 2026 = 11/17~20 샌프란시스코).
8. SK하이닉스 HBM3E 단독 공급 보도 — ✓ 확인(Korea Times 외 3곳, 2026-01-27, HBM3E·Maia 200 대상, 업계 소식통 인용).
9. 2027 양산·멀티 기가와트 — ✓ 확인(거스리 EVP 직접 발언).
10. 파생 계산(2.5배·+33%·+27%) — ✓ 확인. 앞의 둘은 마이크로소프트가 직접 제시한 비교치와도 일치.

**시점 규율:** 위반 0건. 발행일 이후 사건 언급 없음, 사후 시점 표현 없음. "예정/완료" 혼동은 C-1 한 곳(40% 기대치)에서만 발견.
