# 팩트체크 리포트 — 2026-10-09

포스트: `_posts/2026-10-09-openai-math-sign-error-formalization-coverage.md`
판정: **통과 (발행 가능)**. 치명적 오류 0건. 초안 단계에서 2건을 1차 출처로 보강·교정함.

## 1차 출처로 직접 확인한 항목

| 본문 서술 | 확인 방법 | 결과 |
|---|---|---|
| 722편 → 719편, 372 family | `README.md`(719/372) + 복수 보도(최초 722) | ✓ |
| Apache 2.0 | GitHub 저장소 라이선스, `lean/formalization.yaml` project.license | ✓ |
| "기존 수학 평가 포화 → 미해결 연구 문제로 확장" | README 원문 "We expanded these evaluations after performance on our existing mathematical evaluations saturated." | ✓ |
| 부호 오류 상세(+1 vs −1, 두 갈래의 반대 방향, 0이어야 하는 값, 엘리아시베르크–머피 상쇄 정리의 가정 미충족) | **철회 안내문 원문** `preprints/Algebraicity-of-Weil-classes-on-split-abelian-eightfolds-September-18-2026/README.md` | ✓ (초안은 2차 보도 기반이었음 → 1차 원문으로 교체) |
| 의존 2편 동반 철회, 총 3편 | `history.md` "the construction used by two dependent papers" | ✓ |
| 변경 이력 날짜 10월 7일, 14편 보수·13편 참조 갱신 | `history.md` | ✓ |
| "이 철회는 증명에 관한 것이지 명제가 거짓이라는 주장은 아니다" | 철회 안내문 원문 "This withdrawal concerns the proof; it does not assert that the mathematical statement is false." | ✓ |
| 형식화 비율 300/719 ≈ 42% | `history.md` "300 / 719 = ~42%" | ✓ |
| README 경고문 | "Some of the unformalized results could have issues." | ✓ |
| **철회 3편이 형식화 목록에 없음** | **공개 당시 첫 커밋 `adc7f12`의 `lean/formalization.yaml`을 직접 받아 확인 — 항목 162건, weil/kuga/satake/hodge/eightfold/K3 매칭 0건.** 철회 후 빠진 것이 아니라 처음부터 없었음 | ✓ (초안은 현재 파일만 봤음 → 철회로 제거됐을 가능성을 배제하기 위해 최초 커밋으로 재확인) |
| 현재 목록 173편 | 현재 `formalization.yaml` sources 항목 수 직접 카운트(162 + history.md가 밝힌 추가 11건 = 173, 일치) | ✓ |
| 평균 3시간 ChatGPT Pro 연산 / 추론 요약 10건 / 약 4,000개 문제 | README | ✓ (요약 표 행 수 직접 카운트 = 10) |
| Issues 탭 없음, "Only collaborators can create PRs" | GitHub 저장소 페이지 | ✓ |
| AGMAI 9월 29일 권고문, 설문 600+건, 9인 무보수, 가워스·위튼 포함, IAS 소속 | https://agmai.org/general-sep29/ 원문 + agmai.org 멤버 목록 | ✓ |
| "이 관행을 지지하지 않으며 … 멈춰 달라" | 권고문 서두 원문 | ✓ |
| 권고 3(모델명·프롬프트·사고과정·시간·비용), 권고 5(실패 개수·선정 방식 별도 문서), 권고 2(연구소가 통제하지 않는 저장소·수정 이력·댓글) | 권고문 §2.B Step I 1~5 원문 | ✓ |
| AHM 10월 7일 성명, "학문의 시연이 아니라 힘의 시연", 협업 중단 촉구, 타오 블로그 게스트 포스트, 서명 주체 Communications Working Group | terrytao.wordpress.com 2026-10-07 게시물 | ✓ |
| 타오 10월 6일 Math 1.0 / Math 2.0 | Mathstodon 4편 스레드(보도 교차 확인) | ✓ |
| 대니얼 릿(토론토대) "수학에 좋은 일" / 우려는 과장 | Fortune 2026-10-07 | ✓ |
| 앤드루 서덜랜드(MIT) 미검증·"영수증을 요구해야" | Decrypt 2026-10-07 | ✓ |
| 커버/본문 이미지 출처·저작자 | Commons 파일 페이지 2건 | ✓ |

## 초안에서 고친 것
1. **부호 오류 서술** — 2차 보도("+1 for a geometric operation where its own conventions required −1")에 의존하던 문장을 철회 안내문 원문 기준으로 다시 씀.
2. **"철회 3편은 형식화 목록에 없다"** — 현재 파일만 보면 "철회되면서 목록에서 빠졌다"는 반론이 가능. 최초 커밋 `adc7f12`를 직접 받아 처음부터 없었음을 확인하고 본문에 그 사실을 명시.

## 사정거리를 직접 그은 지점 (출처가 침묵하는 곳)
- 42%(300/719)와 형식화 카탈로그 등재 논문 173편의 **단위 차이는 저장소가 설명하지 않는다.** 본문은 어느 쪽이 틀렸다고 단정하지 않고, 밖에서 맞춰 볼 방법이 없다는 사실만 적었다.
- 철회 안내문은 "Withdrawn on October 6, 2026"이라 적혀 있으나 `history.md` 변경 이력 표제는 10월 7일, 커밋은 10월 8일. 본문은 저장소 변경 이력 기준(10월 7일)만 날짜로 명시하고 안내문 날짜와의 불일치는 논지에 영향이 없어 다루지 않았다.
- 4,000개 문제 중 실패 내역은 OpenAI가 공개하지 않았다 — 본문에 그대로 적었다.

## 시점 규율
발행일 2026-10-09(KST) 기준. 언급된 모든 사건(9/21 자문그룹 결성, 9/29 권고문, 10/5~10/8 공개·철회·반응)이 발행일 이전. 미래 시점 표현 없음.
