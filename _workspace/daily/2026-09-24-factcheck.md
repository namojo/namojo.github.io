# 2026-09-24 팩트체크 리포트

**대상:** `_posts/2026-09-24-intrinsic-core-apache-control-layer.md`
**결과:** **통과** (치명적 오류 0건, 재작성 0회)

## 검증 항목

| # | 본문 진술 | 검증 | 출처 | 판정 |
|---|-----------|------|------|------|
| 1 | 9월 22일, 캐나다 토론토 ROSCon 2026에서 공개 | 공식 블로그·Unite.AI·SiliconANGLE·The Robot Report 전부 동일 | 1,2,3,6 | ✅ |
| 2 | 라이선스 Apache 2.0, 저장소 `github.com/intrinsic-ai/intrinsic-core` | 공식 블로그가 "permissive Apache 2.0 license", SiliconANGLE·Unite.AI가 저장소 경로 명기 | 1,3,6 | ✅ |
| 3 | 2021년 알파벳 문샷(X) 조직에서 독립 | CNBC·Yahoo: X 내부 5년 개발 후 2021년 독립 알파벳 자회사로 "졸업" | 7,8 | ✅ |
| 4 | 올해 2월 구글 조직으로 편입 | 2026-02-25 발표 (CNBC 2/25, Dataconomy 2/26, Google 공식 블로그) | 7,9 | ✅ 월 단위 표기라 안전 |
| 5 | 공개 구성요소 7종 (Intrinsic Control / 자세 추정 / 모션 플래닝 / 그래스프 플래닝 / Gazebo 시뮬레이션 / 카메라 캘리브레이션 / Intrinsic-ROS 드라이버) | 공식 블로그 "Here's what's included" 목록과 1:1 대조 완료 | 1 | ✅ |
| 6 | 자세 추정은 NVIDIA FoundationPose 기반 6-DoF | 원문 "leverages NVIDIA FoundationPose®, designed to provide a highly accurate 6-DoF ... pose estimation" | 1 | ✅ |
| 7 | 인용 "매일 실제 제조 배포에 쓰는 바로 그 기능과 서비스" | 원문 "the same capabilities and services that Intrinsic uses day to day for real manufacturing deployments" | 1 | ✅ 번역 정확 |
| 8 | 클라우드 불필요·로컬 하드웨어 구동, 용례로 "사내 온프레미스 생산 라인" | 원문 "pre-configured software environment that runs seamlessly on local hardware" / "a private on-premises production line" | 1 | ✅ |
| 9 | 비공개 영역: 고급 AI 모델·Flowstate·산업용 클라우드 서비스 | 원문 "enterprise services which include advanced AI models, Intrinsic Flowstate, and industrial-grade cloud services" | 1,6 | ✅ |
| 10 | 인용 "리팩터링이나 코드 재작성 없이" 유료 서비스와 연결 | 원문 "No refactoring or code rewrites needed." | 1,6 | ✅ |
| 11 | 브라이언 저키 인용 및 직함(인트린식 CTO 겸 Open Robotics 공동창업자) | The Robot Report 원문 인용 및 "CTO at Intrinsic and co-founder/board chair of Open Robotics" | 2 | ✅ |
| 12 | 제프리 빅스(OSRF CTO) 평가 | The Robot Report "Intrinsic Core is a demonstration of where robotics development is going to go." — 본문은 의역이며 단정 없음 | 2 | ✅ |
| 13 | 2022년 12월 Open Robotics 영리 부문(OSRC) 인수, ROS·Gazebo IP는 OSRF 잔류 | Open Robotics 공식 공지·TechCrunch·Hackster 일치 | 4,5 | ✅ |
| 14 | "알파벳 밑에서 ROS가 안전하겠느냐"는 물음이 커뮤니티에 돌았다 | TechCrunch 2023-09 "Is Open Robotics' ROS safe with Alphabet?" 등 | 5 | ✅ 본문은 "물음이 돌았다"로만 서술, 결론 단정 없음 |
| 15 | OMTS는 CNC 머신 텐딩 레퍼런스 설계, FANUC·Universal Robots 지원 | 원문 "hardware from FANUC® and Universal Robots®", "industrial-grade, AI-enabled CNC machine tending" | 1,6 | ✅ |
| 16 | "미국과 유럽에만 부품 가공 사업체 수만 곳, 자동화 갖춘 곳은 극히 일부" | 원문 "In the U.S. and Europe alone, there are tens of thousands of businesses that fabricate parts, and only a small fraction have some form of automation." | 1 | ✅ |
| 17 | AI for Industry Challenge — 115개국 5,000명 이상, 올해 처음 | 원문 "the first AI for Industry Challenge ... 5,000+ developers and roboticists across 115 countries" | 1,6 | ✅ |
| 18 | ROS 생태계에 ros2_control·MoveIt이 오래 있었다 | ROS 2 공식 생태계의 표준 패키지. 널리 확립된 사실 | — | ✅ |

## 기각·수정한 항목

- **"8%"** — SiliconANGLE은 미국·유럽 기계 가공소 중 자동화 도입 비율을 8%로 보도했으나, **Intrinsic 원문에는 수치가 없고 "only a small fraction"으로만 적혀 있다.** 2차 출처 단독 수치이므로 본문에서 제외하고 원문 표현("극히 일부")만 사용했다.
- **레이오프 수치** — 검색 결과가 "2023년 1월 20%"와 "40명"으로 엇갈려 어느 쪽도 교차 확인되지 않았다. 논지에 불필요하므로 본문에서 전면 제외.
- **"제어는 범용재가 됐다"는 해석** — Intrinsic은 그렇게 말한 적이 없다. 본문은 "단정할 수는 없습니다 / 더 정확한 표현은, ~ 판단했다는 쪽이겠죠"로 사정거리를 직접 그었다 (스타일 가이드 2절 2026-09-13 항목 4).
- **거버넌스 결론** — "코드로 답한 셈"에서 멈추고 "그렇다고 거버넌스 문제가 정리됐다고 보기는 어렵습니다"로 완화. IP 소재와 구글 편입 사실을 함께 제시.

## 시점 규율

- 오늘(KST) 2026-09-24 기준 작성. 사건은 9월 22일로 이틀 전 — "이번 주"류 표현은 저키 인용문 안("이번 주에 공유하는 것은") 외에는 쓰지 않았다.
- `_style/ai-timeline.md`보다 미래의 사건 없음. 발표 "예정"과 "완료"의 혼동 없음 — Intrinsic Core·OMTS 모두 공개 완료 상태.

## 이미지

| 파일 | 내용 | 출처 | 경로 |
|------|------|------|------|
| 커버 | 오픈 머신 텐딩 솔루션 시연 — UR 로봇 암이 궤적 오버레이와 함께 부품을 집는 실사 장면 | Intrinsic 공식 블로그 | `public/images/covers/intrinsic-core-apache-control-layer.jpg` |
| 본문 | 체커보드로 카메라·로봇 좌표계를 맞추는 캘리브레이션 표현 이미지 | Intrinsic 공식 블로그 | `public/images/covers/intrinsic-core-apache-control-layer-calibration.jpg` |

- 커버 경로: **1순위(검색된 실제 이미지)** 달성. 사건 당사자인 Intrinsic이 발표와 함께 공개한 이미지를 사용.
- 출처 표기: 본문 중간 이미지는 캡션 아래 인라인(`*출처: Intrinsic*`), 커버는 본문 맨 끝 크레딧 한 줄. `_workspace/image-credits-2026.md`에도 두 행 기록.

## 출처 URL

1. https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core
2. https://www.therobotreport.com/intrinsic-open-sources-key-parts-platform-easier-development/
3. https://siliconangle.com/2026/09/22/googles-robotics-unit-intrinsic-open-sources-its-foundational-infrastructure-for-intelligent-robots/
4. https://www.openrobotics.org/blog/2022/12/15/intrinsic-acquires-osrc-and-osrc-sg
5. https://techcrunch.com/2022/12/15/alphabets-intrinsic-acquires-darpa-backed-firm-behind-open-source-robotics-software/
6. https://www.unite.ai/intrinsic-open-sources-core-robotics-capabilities-at-roscon-2026/
7. https://www.cnbc.com/2026/02/25/alphabet-robotics-software-intrinsic-google-ai.html
8. https://finance.yahoo.com/news/alphabet-owned-robotics-software-company-200000833.html
9. https://blog.google/alphabet/intrinsic-joins-google/
