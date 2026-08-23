# 팩트체크 리포트 — 2026-08-24

대상: `_posts/2026-08-24-linkedin-ai-slop-button-seems-not-is.md`
결과: **통과 (발행 가능)**. 치명적 오류 1건 발견 → 수정 후 재검증 통과.

---

## 검증 항목

| # | 본문 진술 | 판정 | 근거 |
|---|-----------|------|------|
| 1 | slop의 뜻 중 하나가 가축에게 주는 묽은 먹이 | ○ | Merriam-Webster `slop`: "food waste fed to animals; swill" |
| 2 | 메리엄웹스터 2025년 올해의 단어 = slop | ○ | 2025-12-15 발표. CNN·NBC·CBS·AP·Smithsonian 다수 확인 |
| 3 | 사전에 AI slop 항목 존재, 정의 = "인공지능으로 보통 대량으로 만들어진 저품질 디지털 콘텐츠" | ○ | merriam-webster.com/dictionary/ai slop 원문: "digital content of low quality that is produced usually in quantity by means of artificial intelligence" |
| 4 | 현지 8월 21일, CPO 하리 스리니바산이 수치 공개 | ○ | Engadget 2026-08-21 기사. 직함 Chief Product Officer 일치 |
| 5 | 버튼 출시일 7월 30일 | ○ | TechCrunch 2026-07-30, Fortune 2026-07-31 |
| 6 | **신고 100만 건 도달까지 걸린 기간** | **△ → 수정함** | 초고는 "2주 만에"라고 썼으나, 1차 출처(Engadget·TechSpot)는 "since it launched on July 30"까지만 밝히고 기간을 특정하지 않는다. "first two weeks"는 2차 요약에만 있고 원문 확인 불가. **7월 30일→8월 21일 = 22일**이므로 "3주 남짓 만에"로 교정(제목의 "2주에"도 삭제). |
| 7 | 링크드인이 AI 슬롭으로 분류하는 콘텐츠 조회수 40% 감소 | ○ | 스리니바산 직접 인용: "Members are now experiencing 40% less views on what we classify as AI slop from just a few weeks ago." 본문이 "링크드인이 …분류하는"이라고 한정한 것도 원문과 일치 |
| 8 | 스리니바산 "슬롭은 정의하기 어렵고 그 정의는 계속 바뀝니다" | ○ | Fortune 2026-07-31: "Slop is hard to define and the definition changes; this lets us tune our models and make better feeds." 본문의 뒷부분 요약(모델 조정·더 나은 피드)도 원문 범위 안 |
| 9 | 같은 발표에서 "enhance your post" AI 글쓰기 기능 폐지, 목소리 유지 교정 도구로 대체 | ○ | TechCrunch·Fortune 모두 명시. 대체 기능은 문법·명료성 교정 + 작성자 목소리 유지 |
| 10 | 팽그램(Pangram) 조사 7월 중순 공개 | ○ | 2026-07-14 다수 매체 보도(Fast Company, Gizmodo, TechTimes) |
| 11 | 브라우저 확장 4월 출시 | ○ | 2026-04-24 출시 |
| 12 | 링크드인·X·레딧·미디엄·서브스택 100만 건 이상 스캔 | ○ | Pangram "AI in Your Feed" 리포트 |
| 13 | 250단어 초과 링크드인 장문 게시물 41%가 전부 AI 생성 플래그 | ○ | 동일 리포트. (일부 매체는 40%로 반올림 인용 — 41% 채택) |
| 14 | 짧은 글 약 30% | ○ | Fortune 2026-07-31 |
| 15 | 스캔 대상의 약 1/3인데 플래그된 AI 콘텐츠의 약 2/3 | ○ | ppc.land: LinkedIn carries 62% of flagged AI content; "made up a third of scanned content" |
| 16 | 팽그램 자체 오탐률 1만분의 1 수준, 비원어민 시험 데이터 오탐 거의 없음 | ○ | Pangram 기술 보고서(arXiv 2402.14873) 및 ESL 블로그: TOEFL 0%, ELLIPSE 3,907편 0건, ICNALE 5,600편 0.09%. 본문이 "자체 기술 보고서에 밝혔지만"이라고 출처를 자사로 한정한 것 적절 |
| 17 | 정형적·격식 문체 불리하다는 지적 지속 | ○ | 다수 리뷰·arXiv 2304.02819(GPT detectors are biased against non-native English writers) |
| 18 | 서브스택 탐지기 도입 시 작가들 "마녀사냥" 반발 | ○ | AI Weekly 알림 "Substack Adds Pangram AI Detector, Writers Call It a Witch Hunt" |
| 19 | 링크드인이 개별 신고의 부당 표적화 방지 안전장치 언급 | ○ | Engadget 인용: "built safeguards to help prevent individual feedback from being used to unfairly target other members." |
| 20 | 신고당한 작성자에게 알리는 알림 신설 | ○ | Engadget 보도 |
| 21 | 한국 AI 기본법 2026-01-22 시행, 생성형 AI 산출물 표시 의무 | ○ | 「인공지능 발전과 신뢰 기반 조성 등에 관한 기본법」 시행일 일치 |
| 22 | 적용 시점 = 다운로드·공유로 서비스 밖 유통 시 | ○ | 시행령·해설 자료 일치 |
| 23 | 일반 생성물은 가시적 표시 또는 워터마크·메타데이터 중 택일 (딥페이크는 가시적 표시만) | ○ | 동일. 본문은 딥페이크 예외를 언급하지 않았으나 일반 생성물 서술만 했으므로 오류 아님 |
| 24 | 미이행 시 3천만 원 이하 과태료, 1년 이상 계도기간 유예 | ○ | 동일 |
| 25 | EU AI법 투명성 조항이 출처 표시를 요구 | ○ | 제50조, 2026-08-02 발효 (본 블로그 2026-08-03 편에서 이미 다룸) |

## 시점 규율

- 오늘(KST) 2026-08-24 기준. 최신 사건은 8월 21일(스리니바산 발표), TechSpot 후속 보도 8월 23일 — 24~48시간 범위 안.
- 미래 사건을 과거처럼 쓴 곳 없음. 계도기간은 진행 중("유예해 두었습니다")으로 정확히 표기.
- `_style/ai-timeline.md`와 충돌 없음.

## 수정 이력

1. 제목 `… 2주에 받은 신고 100만 건` → `… 링크드인이 받은 신고 100만 건`
2. excerpt `2주 만에` → `3주 남짓 만에`
3. 본문 `2주 만에 100만 번` → `3주 남짓 만에 100만 번`
4. (경미) `그 결과를 몇 년 관찰한 다음에` → `그 결과가 피드에 쌓이는 것을 지켜본 다음에` — "enhance your post" 최초 출시 시점을 1차 출처로 확정하지 못해 기간 단정을 제거.

재검증 결과 남은 치명적 오류 없음.

## 이미지 출처

| 위치 | 파일 | 피사체 | 출처 |
|------|------|--------|------|
| 커버 | `public/images/covers/linkedin-ai-slop-button-seems-not-is.jpg` | 링크드인 서니베일 본사 | Wikimedia Commons, LPS.1 (CC0) |
| 본문 | `public/images/covers/linkedin-ai-slop-button-seems-not-is-trough.jpg` | 여물통 앞의 돼지들 | Wikimedia Commons, Richard Humphrey (CC BY-SA 2.0) |

두 장 모두 웹 검색으로 찾은 실사 사진(커버 생성 1순위 경로)이며 1200×630 크롭만 했다. `_workspace/image-credits-2026.md`에 기록됨.
