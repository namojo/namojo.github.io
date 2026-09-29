# 팩트체크 리포트 — 2026-09-30

포스트: `_posts/2026-09-30-amd-world-labs-workload-roadmap.md`
제목: AMD가 82억 달러에 산 것은 하드웨어가 아닙니다 : 칩 회사가 모델 연구소를 사는 이유

## 1차 검증 (본문 주장 전수)

| # | 본문 주장 | 검증 결과 | 근거 |
|---|----------|----------|------|
| 1 | 2026-02 엔비디아·AMD가 월드랩스 같은 라운드에 참여, 규모 10억 달러 | ✅ 확인 | World Labs 공식 블로그 「funding-2026」(2026-02-18). 참여사에 "AMD, Autodesk, Emerson Collective, Fidelity, **NVIDIA**, Sea" 명시 |
| 2 | 발표일 2026-09-28 | ✅ 확인 | AMD IR 보도자료 detail/1299, GlobeNewswire 2026-09-28 |
| 3 | 82억 달러, **전액 주식(all-stock)** | ✅ 확인 | AMD 보도자료 원문: "all-stock transaction valued at approximately $8.2 billion" |
| 4 | 연말 종결 예정, 규제 승인 조건부 / 아직 미종결 | ✅ 확인 | AMD 보도자료: "expected to close by the end of 2026 pending regulatory approval" |
| 5 | 페이페이 리 = 총괄부사장 겸 수석과학자, 리사 수 직속 보고 | ✅ 확인 | AMD 보도자료: "executive vice president and chief scientist at AMD, reporting directly to CEO Dr. Lisa Su" |
| 6 | 월드랩스 설립 2024년 1월 | ✅ 확인 | Contrary Research 기업 프로필 |
| 7 | 공동창업자 4인: 페이페이 리(CEO), 저스틴 존슨, 벤 밀든홀, 크리스토프 라스너 | ✅ 확인 | Contrary Research, World Labs About |
| 8 | 밀든홀 = NeRF 공동 고안자 | ✅ 확인 | Contrary Research: "co-creator of NeRF (Neural Radiance Fields)" |
| 9 | 라스너 = 펄사(Pulsar) 개발, 가우시안 스플래팅의 바탕 | ✅ 확인 | Contrary Research: "Pulsar, an efficient sphere-based differentiable renderer that laid the groundwork for … Gaussian Splatting" |
| 10 | 제품 마블(Marble) — 텍스트·이미지·영상·파노라마에서 지속적 3D 월드 생성 | ✅ 확인 | World Labs 공식 블로그 |
| 11 | 아틀라스(Atlas) — 2D 이미지에서 새 카메라 시점 예측 | ✅ 확인 | TheNextWeb 2026-09-28~29 |
| 12 | AMD 보도자료 인용: "워크로드가 어떻게 진화하는지에 대한 더 깊은 통찰 … 향후 기술 로드맵을 형성" | ✅ 확인(원문 대조) | AMD IR 원문: "deeper insight into how workloads are evolving and help shape its future technology roadmaps" |
| 13 | 리사 수 인용: "다음 세대 AI를 위한 컴퓨트 플랫폼을 만들려면 모델이 어떻게 진화하고 있는지를 깊이 이해해야 합니다" | ✅ 확인(원문 대조) | AMD IR 원문: "Building the compute platforms for the next generation of AI requires a deep understanding of how models are evolving." |
| 14 | 페이페이 리 인용: "집중된 하드웨어 노력이 없으면 AI는 효율에서 발목이 잡힙니다. 그리고 규모에서도요." | ✅ 확인 | TheNextWeb 원문: "Without having a focused hardware effort, AI is hobbled in efficiency. And scale." |
| 15 | 페이페이 리 인용: "이걸 하려면 우리의 노력을 키우고, 도달 범위를 넓히고, 하드웨어에 더 가까이 가야 합니다." | ✅ 확인 | TechCrunch 원문: "To do this requires scaling our efforts, widening our reach, and getting closer to the hardware." |
| 16 | 페이페이 리 인용: "우주는 단어로 이루어져 있지 않습니다. 실제 사물로 이루어져 있지요." | ✅ 확인 | TheNextWeb 원문: "The universe isn't made up of words; it's made of real things." |
| 17 | 적용 영역 = 추론(reasoning)·로보틱스·시뮬레이션·피지컬 AI | ✅ 확인 | AMD 보도자료 원문: "reasoning, robotics, simulation and physical AI" |
| 18 | 가우시안 2,030만 개 / 정렬 3.5ms / 렌더 6.75ms | ✅ 확인 | 본문 삽입 이미지 자체의 HUD 판독: instances 20301810, sort 3.50, render 6.75 (Commons `3dgs viewer QIBWA66MsC.jpg`) |
| 19 | ATI = 2006년 그래픽 IP 인수 | ✅ 확인 | AMD 인수 이력(2006 발표·종결) |
| 20 | 자일링스 취득 대가 488억 달러, 2022-02-14 종결, AMD 최대 인수 | ✅ 확인 | AMD IR 「AMD Completes Acquisition of Xilinx」, AMD 10-K FY2024 (총 취득대가 $48.8B) |
| 21 | ZT 시스템스 약 49억 달러, 2025-03-31 종결, 랙 스케일 | ✅ 확인 | AMD 발표(2024-08-19) 약 $4.9B, 종결 2025-03-31 |
| 22 | 월드랩스 82억 달러 = AMD 역대 2위 인수 | ✅ 확인 | 자일링스 488억 > 월드랩스 82억 > ZT 49억. Bloomberg·Fortune도 "두 번째로 큰 인수"로 보도 |
| 23 | 2025년부터 AMD GPU 위에서 학습·추론 최적화 공동작업 | ✅ 확인 | TechCrunch, TheNextWeb("began a technical collaboration last year") |
| 24 | 페이페이 리가 2026년 초 AMD CES 발표에 등장 | ✅ 확인 | TechCrunch: "Li appeared at AMD's CES presentation earlier in 2026" |
| 25 | 리사 수가 월드랩스 초기 투자자 | ✅ 확인 | TheNextWeb — 리 본인 언급 |
| 26 | 2월 라운드 기업가치 약 50억 달러는 **보도 기반, 회사 미확인** | ✅ 확인 — 본문이 이 한계를 명시함 | World Labs 공식 발표는 밸류에이션 미공개. SiliconRepublic·valueaddvc 보도치 |

## 시점 일관성
- 발행일 2026-09-30(KST). 사건은 2026-09-28(현지) 발표 → 과거 시제 정확.
- 거래를 **완료로 쓰지 않았다.** 본문 3곳에서 "종결될 예정", "아직 끝난 거래가 아니에요", "종결도 되지 않았고"로 미종결임을 명시. `ai-timeline.md`보다 미래인 사건 없음.
- 직책은 "종결되면 … 합류해"로 조건부 서술 — 현재 직책으로 오기하지 않음.

## 인식론적 절제 점검 (스타일 가이드 2026-09-13 규율)
- ✅ 인과 단정 없음: "AMD의 로드맵이 이미 바뀌었다고 단정할 수는 없습니다" + "더 정확한 표현은, ~ 적어 냈다는 것까지입니다"
- ✅ 출처가 침묵한 지점 명시: 로드맵 변경 내역, 발행 주식 수·희석률, 월드랩스 매출·직원 수, 마블·아틀라스 제품 존속 여부, 밸류에이션 확인 불가
- ✅ 관통 비유 없음 / 저자가 명명하지 않은 조어 없음
- ✅ 억지 한국 접점 없음 (국내 제품명 나열 마무리 배제)
- ✅ 작은따옴표 대조 강조 제거 완료 (제목 YAML 인용부호만 잔존)

## 경미한 수정 사항 (반영 완료)
- "7개월이 지난" → "일곱 달 남짓 지난" (2/18→9/28은 7개월 10일)
- "칩 회사에게" → "칩 회사로서는" (조사 호응)
- 외자 성 "리" 단독 호칭 → "페이페이 리" / "그"
- "추론" → "추론(reasoning)" (한국어에서 reasoning/inference 동음 혼동 방지)
- excerpt가 본문 문단을 거의 그대로 반복하던 것 교체

## 판정
**치명적 오류 없음 — 발행 가능.** 핵심 수치·인용·직책은 모두 AMD IR 보도자료 원문과 World Labs 공식 블로그라는 1차 출처로 교차 확인했다. 보도에만 근거한 단 하나의 수치(50억 달러 밸류에이션)는 본문에서 그 한계를 직접 밝혔다.

## 이미지 출처
| 파일 | 용도 | 출처 |
|------|------|------|
| `amd-world-labs-workload-roadmap.jpg` | 커버 | Wikimedia Commons, ITU Pictures (CC BY 2.0) — 페이페이 리, 2017 ITU AI for Good |
| `amd-world-labs-workload-roadmap-su.jpg` | 본문 | Wikimedia Commons, Fuzheado (CC BY 4.0) — 리사 수, 2024 SXSW |
| `amd-world-labs-workload-roadmap-3dgs.jpg` | 본문 | Wikimedia Commons, Jurdein (CC BY-SA 4.0) — 가우시안 스플래팅 뷰어 스크린샷 |

## 2차 확인 (본문 보강 후 추가 검증)

| # | 본문 주장 | 검증 결과 | 근거 |
|---|----------|----------|------|
| 27 | AMD가 2026-08-06 탈라스(Taalas) 인수 계약, 모델 가중치를 실리콘에 각인하는 추론 칩 회사 | ✅ 확인 | AMD IR 보도자료 detail/1296, The Register 2026-08-06, CNBC 2026-08-06. 인수가는 **미공개**이므로 본문에서 금액을 적지 않았다 — "역대 2위" 순위 주장과 충돌하지 않음(자일링스 488억만 월드랩스 82억보다 크고, Bloomberg·Fortune도 2위로 보도) |
| 28 | 이 블로그가 탈라스 건을 이전에 다룬 적 있음 | ✅ 확인 | `_posts/2026-08-08-amd-taalas-model-etched-silicon.md` |

**최종 판정: 발행.** 추가된 문장도 1차 출처(AMD IR)로 확인했다.
