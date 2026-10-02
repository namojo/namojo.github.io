# 팩트체크 리포트 — 2026-10-03

대상: `_posts/2026-10-03-si-accord-audit-layers-without-disclosure.md`
검증 방식: 백악관 1차 자료(팩트시트) + 법률사무소 분석(Freshfields, Alston & Bird) + 보도(Al Jazeera, Infosecurity, Fortune, The Hill) + 연방법전 원문(uscode.house.gov) 교차 확인.

## 통과 항목

| 본문 서술 | 검증 결과 | 근거 |
|---|---|---|
| 15 U.S.C. § 9401(3) AI 정의 인용문 | ✅ 일치. "machine-based system that can, for a given set of human-defined objectives, make predictions, recommendations or decisions influencing real or virtual environments" + 하위 (A)(B)(C) | uscode.house.gov, Cornell LII |
| 2020년 국가 인공지능 이니셔티브법 소속 | ✅ National Artificial Intelligence Initiative Act of 2020 | 동일 |
| 정의에 능력 수준 조건이 없다 | ✅ 조문 전문에 능력·지능 등급 관련 요건 없음 (본문의 해석이지만 조문으로 확인 가능) | 동일 |
| 행정명령 제목 「Inaugurating The Era of Super Intelligence」 | ✅ | 백악관 팩트시트, Freshfields |
| 서명일 2026-09-29 | ✅ | 백악관 팩트시트, Freshfields |
| AI→SI 용어 교체 범위(공식 서신·대외 커뮤니케이션·웹사이트·정책 문서) | ✅ | 백악관 팩트시트 원문 인용, Freshfields |
| 제외 대상(기존 규정·대통령 행위·계약·보조금·역사 문서) | ✅ | Freshfields |
| "오늘 개발되고 있는 기술의 진짜 능력을 전달한다" 근거 인용 | ✅ "Super Intelligence conveys the true capabilities of the technologies being developed today" | 백악관 팩트시트 |
| 크라치오스 = 대통령 과학기술보좌관(APST), 11/28(60일) 입법안 문구 제출 | ✅ Michael J. Kratsios, by November 28, 2026 | Freshfields |
| 9401조 3항을 수정·확장·대체할지 평가 지시 | ✅ "assess whether to modify, expand, or supersede the existing AI definition under 15 U.S.C. § 9401(3)" | Freshfields |
| 합의문 명칭 | ✅ 보도 간 표기 혼용(Superintelligence / Super Intelligence). 본문은 행정명령 표기(두 단어)에 맞춰 적고 부제는 보도 표기 그대로 | ABC, Fortune, Al Jazeera, Infosecurity |
| 서명자 6인 + 대통령, 직함 | ✅ 피차이(Google CEO)·아모데이(Anthropic CEO)·저커버그(Meta CEO)·브록먼(OpenAI President)·머스크(xAI)·황(NVIDIA CEO)·트럼프 | Infosecurity |
| 회동일 2026-09-29(화), 백악관이 이튿날 공개 | ✅ Al Jazeera "Tuesday, September 29"; Forbes·The Week 09-30 공개 보도. 09-29는 실제로 화요일(10-03이 토요일) | Al Jazeera, Forbes |
| 한 장짜리 문서 | ✅ "one-page voluntary commitment" | The Week |
| 4개 층 내용 | ✅ 3개 출처가 층 구성·문구 일치 | Infosecurity(직접 인용), Al Jazeera, Alston & Bird |
| 사이버보안·생물보안·화학 위협 명시, "기술 시스템을 의도치 않은 방식으로 해킹하거나 접근하지 않도록" | ✅ "do not hack or access technical systems in unintended ways" | Infosecurity |
| "도덕적으로 구속력이 있다", "거의 헌법 같은 것" | ✅ "morally binding" / "almost like a constitution" | Al Jazeera, Alston & Bird, ABC |
| 법적 구속력 없음·권고형("should")·집행 장치·제재·이행 기한 없음 | ✅ | Alston & Bird, Al Jazeera |
| 감사인 신원·결과 공개 의무 없음 | ✅ | Alston & Bird, Al Jazeera, 2차 분석 |
| 합의문 "시간이 지나면 법과 규정으로 성문화하는 것이 타당할 수 있다" | ✅ "it may make sense to codify these steps into laws and regulations" | Alston & Bird |
| 능력 문턱(threshold) 정부 정의 없음·신규 인허가·사전심사·의무 공시 창설 없음 | ✅ | Nextgov, Fortune, Freshfields |
| 크리스 르헤인 = OpenAI 최고글로벌정책책임자, 업계 주도 표준은 연방 안전장치를 "보완하는 것이지 대체하는 것이 아니다" | ✅ 직함 확인(Chief Global Affairs Officer). 발언은 Al Jazeera 인용 + CNN 10/01 동일 취지 보도 | Al Jazeera, CNN, Bruegel 프로필 |
| 아모데이 9월 제안의 핵심 = 외부 평가자에게 편집권 없는 공표권 | ✅ 블로그 09-15 발행분에서 이미 검증된 사실(「We Must Pace the Frontier」, 2026-09-12) | _style/topics-written.md 2026-09-15 항목 |

## 수정한 치명적 오류 (초고 → 최종)

1. **감사인 선정 주체 단정 오류.** 초고는 "그 감사인은 감사를 받는 회사가 직접 고릅니다"라고 단정했으나, 재검증에서 **합의문이 선정 주체·절차를 아예 정하지 않았다**는 것이 확인됐다(조문은 "partner with an independent external auditor or evaluator"까지). 회사가 고른다는 해석은 2차 분석 블로그의 추론이었고 문서 근거가 없다. → "누가 독립 평가자에 해당하는지, 그 평가자를 어떤 절차로 고르는지도 정해 두지 않았습니다"로 교체.
2. **행정명령 번호 오기 위험 차단.** 1차 검색에서 이 행정명령이 "Executive Order 14355"로 연결됐으나, 해당 번호를 확인하니 **2025-09-30 서명된 소아암 관련 행정명령**이었다. 이번 행정명령의 번호는 확인된 1차 출처가 없어 **본문에 번호를 적지 않았다.**
3. **공개일과 서명일 혼동 교정.** 초고는 합의문을 "같은 날 나왔다"고만 썼다. 서명은 09-29, 백악관의 전문 공개는 09-30이므로 "같은 자리에서 서명됐고 이튿날 전문을 공개했다"로 분리했다.

## 완화·절제 처리한 항목

- **FTC 집행 가능성:** 전직 FTC 수석기술책임자(닐 칠슨)가 X에 남긴 견해가 2차 집계 매체를 거쳐 전해진 것이라, **이름과 직접 인용 없이** "전직 FTC 수석기술책임자가 내놓은 견해"로만 적고 취지(공적 서약 불이행이 FTC법상 기만행위로 다뤄질 수 있다)를 서술했다.
- **아모데이 제안과의 비교:** "합의문이 그 제안을 약화시켰다"는 단정을 피하고 "두 문서의 성격이 다르니 … 할 수는 없습니다만"으로 사정거리를 그었다.
- **연방 기관 시스템 예시:** 특정 기관의 특정 시스템(보훈부 문서 분류기 등)을 실명으로 들지 않고 "연방 기관이 쓰는 문서 분류기나 이상거래 탐지 스크립트"로 일반화했다 — 확인되지 않은 구체 사례를 사실처럼 쓰지 않기 위함.
- **합의문 철자 오류(서명란의 "Unites States") 보도는 논지와 무관하므로 미기재.**
- **제너시스 미션 50억 달러**는 사실 확인됐으나(백악관 팩트시트) 논지에 불필요한 취재 디테일이라 최종본에서 삭제.

## 시점 규율

- 오늘(KST 2026-10-03) 시점에서 과거 사건으로 서술. "11월 28일에 제출될 예정"으로 미래 시점을 예정으로 명시했고 완료로 쓰지 않았다.
- `_style/ai-timeline.md`와 충돌 없음. 09-15·09-25 발행분과 사건이 겹치지 않고 후속 사건으로 연결된다.

## 판정

**발행 가능.** 치명적 오류 3건은 모두 초고 단계에서 교정 완료, 재검증에서 추가 오류 없음.
