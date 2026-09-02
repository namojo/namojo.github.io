# Fact Check Report: eu-dsa-chatgpt-vlose-search-engine

- 대상: `_posts/2026-09-03-eu-dsa-chatgpt-vlose-search-engine.md`
- 팩트 카드: `_workspace/daily/2026-09-03-brief.md`
- 검증 시각: 2026-09-03 (KST) / 재실행 (이전 세션 컨테이너 재시작으로 유실)

## 판정 한 줄

**치명적 오류 0건.** 발행 가능. 단 [중요] 1건(본문 두 번째 이미지 캡션의 OpenAI 본사 표기)과 경미 6건을 반영하면 더 안전하다.

---

## [치명적] 요약

**없음.**

오케스트레이터가 B군에서 특히 의심한 세 지점(광고 저장소의 VLOSE 적용 여부, 제24조 2항 조문 번호, VLOSE 3사 주장)은 **모두 초고가 맞다**. 조문 원문과 집행위 지정 목록으로 직접 확인했다.

---

## [중요] 수정 권장 1건 — 사실 부정확 (치명적은 아니나 갈아 끼우는 편이 안전)

### 본문 44줄 — 이미지 캡션의 "OpenAI 본사"

- 초고: `![샌프란시스코 미션베이의 1515 서드스트리트. 촬영 시점 기준 OpenAI 본사가 있던 건물입니다.]`
- 사실: OpenAI는 2023년 10월 우버로부터 **1455 서드스트리트와 1515 서드스트리트 두 동(총 486,600 sq ft)**을 전대(sublease)했다. 통상 표기되는 **본사 주소는 1455 Third Street**이고, 1515는 그와 연결된 미션베이 사옥 가운데 한 동이다. 언론이 두 동을 묶어 "OpenAI의 새 본사"로 부른 사례가 있어 완전한 오류는 아니지만, "본사가 있던 건물"이라고 단정하면 정확하지 않다.
- **대체 문장(그대로 갈아 끼울 수 있음):**
  > `![샌프란시스코 미션베이의 1515 서드스트리트. OpenAI가 우버로부터 전대해 쓰는 미션베이 사옥 가운데 한 동입니다.](/images/covers/eu-dsa-chatgpt-vlose-search-engine-openai.jpg)`
- 출처: SF Chronicle / SF Standard / CoStar (2023-10 리스 보도), macro.markets 본사 주소 정리.

---

## A. 시점 일관성

- **발행일:** 2026-09-03 (KST)

| 본문 언급 | 실제 | 발행일 대비 | 판정 |
|---|---|---|---|
| "현지 시각 8월 31일 월요일" 지정 | 2026-08-31, 실제로 **월요일** (요일 계산 확인) | 이전 ✓ | 유지 |
| Reddit·Roblox 동일자 지정 | 2026-08-31 | 이전 ✓ | 유지 |
| "2026년 3월 31일로 끝나는 6개월" | 신고 기준 기간 | 이전 ✓ | 유지 |
| "올해 1월 22일" AI 기본법 시행 | 2026-01-22 | 이전 ✓ | 유지 |
| "기한은 통지로부터 4개월" | 집행위 표현 "four months, i.e. by January 2027" | 미래를 미래로 서술 ✓ | 유지 |
| 구글 검색·빙 VLOSE 지정 | 2023-04-25 | 이전 ✓ | 유지 |

- **사후 시점 표현:** "훗날", "돌이켜보면", "결국" 등 **없음** ✓
- **미래 사건을 과거처럼 쓴 곳:** **없음** ✓. 준수 기한을 특정 날짜(11월 말/12월 말/1월)로 단정하지 않고 "통지로부터 4개월"로만 처리 — 보도 간 상충을 정확히 회피했다 ✓
- **용어 시점성:** VLOSE·VLOP·DSA·AI Act·AI 기본법 모두 발행일 시점에 존재 ✓

---

## B. 사실 검증 (B군 10항목 + A군 대조)

| # | 초고의 주장 | 상태 | 근거 |
|---|---|---|---|
| B1 | DSA 정의 = "키워드·음성·문장 입력 → **원칙적으로 웹 전체** 검색 → 요청 내용 관련 정보를 찾을 수 있는 결과를 **어떤 형식으로든** 반환" | ✓ 확인 | DSA 제3조(j) 원문: *"an intermediary service that allows users to input queries in order to perform searches of, **in principle, all websites**, or all websites in a particular language, on the basis of a query on any subject in the form of a keyword, voice request, phrase or other input, and **returns results in any format** in which information related to the requested content can be found"*. 초고에 조문에 없는 요소를 넣은 곳 없음 |
| B2 | "이 규모의 지정을 받은 검색엔진은 구글 검색·마이크로소프트 빙·ChatGPT **셋**" | ✓ 확인 | 집행위 지정 목록: VLOSE는 **Google Search(2023-04-25, 3억 6,400만)**, **Bing(2023-04-25, 1억 1,900만)**, **ChatGPT(2026-08-31, 1억 5,910만)** — 정확히 셋. (VLOP은 27개, Reddit 5,720만·Roblox 4,660만 포함) |
| B3 | "디지털서비스법 **제24조 2항**이 6개월마다 EU 월평균 이용자 수 공표를 의무화" | ✓ 확인 | Art 24(2): *"By 17 February 2023 and at least once every six months thereafter, providers shall publish for each online platform **or online search engine**, in a publicly available section…"*. Art 24(3)은 조정관·집행위에 대한 **요청 시 통보** 조항이므로 24(2)가 맞다. 조문 번호 오류 없음 |
| B4a | 의무 목록의 "**광고 저장소**"가 VLOSE에도 적용 | ✓ 확인 | Art 39(1) 원문 첫 구절: *"Providers of very large online platforms **or of very large online search engines** that present advertisements on their online interfaces…"* — **VLOP 전용이 아니다. 초고에서 뺄 필요 없음** |
| B4b | 의무 목록의 "**미성년자 보호**"가 VLOSE에도 적용 | ✓ 확인(경로 주의) | Art 28(미성년자 보호)은 '온라인 플랫폼' 대상이라 VLOSE에 직접 걸리지 않지만, Art 34(1)(d)가 시스템적 위험 항목으로 **미성년자에 대한 부정적 영향**을 VLOP·VLOSE 공통으로 명시하고 Art 35가 완화 조치를 요구한다. 집행위 지정 페이지도 의무를 세 서비스에 공통으로 서술하며 *"negative effects on minors"*를 포함 — 초고 문장 유지 가능 |
| B5 | "부가통신사업자", "정보통신서비스 제공자"가 실재하는 법적 분류 | ✓ 확인 | 전기통신사업법상 전기통신사업자는 기간·별정·부가통신사업자로 구분(부가통신사업 신고 제도 존재). 정보통신망법 제2조 제1항 제3호: *"정보통신서비스 제공자란 전기통신사업법 제2조제8호에 따른 전기통신사업자와 영리를 목적으로 전기통신사업자의 전기통신역무를 이용하여 정보를 제공하거나 정보의 제공을 매개하는 자"* |
| B6 | "문턱의 **3.5배가 넘죠**" | ✓ 확인 | 159,100,000 ÷ 45,000,000 = **3.536** → "3.5배가 넘는다" 참 |
| B7 | "인공지능법은 기술을 기준으로 삼습니다. 어떤 모델인지, 어떤 용도로 분류되는지, 어느 위험 등급에 해당하는지를 따집니다" | ⚠ 근거 약함(단일 출처 프레이밍) | heise 보도의 *"this regulates based on the technology, not based on the actual use"* 를 옮긴 것. AI법의 실제 구조는 **용도 기반 위험 4등급(금지/고위험/제한적(투명성)/최소) + GPAI 별도 층**이라 "기술을 기준으로 삼는다"만 떼어 놓으면 부정확해질 수 있다. 다만 초고가 바로 다음 문장에서 "**어떤 용도로 분류되는지**"를 함께 적어 왜곡은 아니다. 아래 C-1의 완화 문장 권고 |
| B8 | 시점 규율 | ✓ 확인 | A절 참조 |
| B9a | 지정 범위(서비스 전체 vs 검색 기능)가 "아직 공식 문서로 정리되지 않았습니다" | ✓ 확인 | 집행위는 "hybrid service that qualifies as an online search engine", OpenAI는 "ChatGPT **search** operates as a search service" — 표현 차이는 확인되고 범위 확정 문서는 없음. 초고가 단정하지 않음 |
| B9b | 1억 5,910만의 산정 방식 미공개 | ✓ 확인 | 세부 카운팅 기준 공개 자료 없음 |
| B9c | "불복 움직임도 지금까지는 확인되지 않았고요" | ✓ 확인 | 2026-09-03 시점까지 OpenAI의 EU 일반법원 취소소송·이의제기 보도 없음(웹검색 결과 전무). 대변인 발언은 준수 준비 쪽 |
| A-1 | 지정일 2026-08-31, ChatGPT는 VLOSE 단독, Reddit·Roblox는 VLOP | ✓ 일치 | 초고 16줄과 모순 없음 |
| A-2 | 분류 근거 "웹을 검색하기도 하므로 온라인 검색엔진에 해당하는 하이브리드 서비스" | ✓ 일치 | 초고 18줄이 집행위 표현을 정확히 옮김 |
| A-3 | 비르쿠넨 직함·발언 | ✓ 일치 | 기술주권·안보·민주주의 담당 집행부위원장. "higher standard of scrutiny and accountability … in line with their large impact on our citizens and society" → 초고 24줄의 번역 정확 |
| A-4 | OpenAI 대변인 발언 | ✓ 일치 | 초고 50줄이 "검색 서비스로 기능한다 + 추가 준수 요건 준비"로 요약 — 원문과 부합 |
| A-5 | 숫자에 붙은 3개 단서(통상 MAU 아님 / 검색 기능 한정 / DSA 준수 목적 전용) | ✓ 확인 | OpenAI Help Center 원문은 403으로 직접 열리지 않았으나, 그 페이지를 인용한 복수 보도로 세 단서 모두 확인: *"should not be read as a conventional monthly active user figure"*, *"applies specifically to ChatGPT's online search features, rather than every use of ChatGPT"*, *"calculated solely for DSA compliance and should not be used for other purposes"*. **글의 제목과 중심축이 되는 주장이므로 이 항목이 성립함을 확인한 것이 이번 검증의 핵심** |
| A-6 | 문턱 4,500만 / 과징금 상한 연매출 6% / 기한 4개월 | ✓ 일치 | 집행위 지정 페이지 "at least 45 million average monthly users in the EU", "four months, i.e. by January 2027", DSA 제74조 전 세계 연매출 6% |
| A-7 | 한국 AI 기본법(2026-01-22 시행, 고영향/생성형, 사전 고지, 계도기간 최소 1년) | ✓ 일치 | 초고 54줄 서술 정확. 법 정식 명칭 "인공지능 발전과 신뢰 기반 조성 등에 관한 기본법"도 정확 |

### 부수 확인

- 본문 이미지 경로 `/images/covers/{slug}-*.jpg` 와 `*출처: Wikimedia Commons*` 한 줄 표기는 09-02·08-31·08-14 발행분과 동일한 관례 ✓
- `eu-dsa-chatgpt-vlose-search-engine-virkkunen.jpg` 실제 파일 존재 및 피사체(비르쿠넨) 일치 확인 ✓. 나머지 2장은 `_workspace/image-credits-2026.md`에 크레딧 행이 등록돼 있음(58~60줄) — 발행 전 3장 모두 존재 여부만 확인 권고
- 제목의 " : " 띄어쓰기는 기존 발행분 다수와 동일한 관례 ✓ (수정 불필요)
- 참고: OpenAI Help Center를 인용한 일부 요약은 공표 근거를 "DSA Article 11"로 적는다. 실제 월평균 활성 수신자 공표 의무 조항은 Art 24(2)이며 **초고 서술이 법적으로 맞다**. 조문 번호를 바꿀 필요 없음

---

## C. 경미한 지적 (문장 단위)

1. **32줄 — AI법 서술 완화 권고** (B7)
   - 현재: "인공지능법은 기술을 기준으로 삼습니다. 어떤 모델인지, 어떤 용도로 분류되는지, 어느 위험 등급에 해당하는지를 따집니다."
   - 권고: "인공지능법은 그 인공지능이 무엇이고 어디에 쓰이는지를 기준으로 삼습니다. 어떤 모델인지, 어떤 용도에 놓이는지, 그래서 어느 위험 등급에 들어가는지를 따집니다."
   - 이유: "기술을 기준으로"라는 단정은 heise 한 곳의 프레이밍이고, AI법의 고위험 분류는 실제로 '의도된 용도' 기반이다. 뒤에 오는 DSA와의 대비는 이 표현으로도 그대로 성립한다.

2. **24줄 — "구조적 위험" → "시스템적 위험"**
   - DSA 제34~35조의 용어는 systemic risk이고 국내 정책 문헌의 정착 번역은 '시스템적 위험'이다. 팩트 카드도 "시스템적 위험 평가·완화"로 적었다. 사실 오류는 아니나 용어 정확도가 떨어진다.

3. **7·16·20·24줄 — "유럽위원회" → "유럽연합 집행위원회"/"EU 집행위"**
   - 이 블로그의 기존 EU 규제 3편(05-09, 07-21, 08-03)은 모두 "유럽연합 집행위원회 / EU 집행위원회 / 집행위"로 썼다. "유럽위원회"는 유럽평의회(Council of Europe)와 혼동될 수 있는 표기다. 첫 등장(16줄)만 "유럽연합 집행위원회"로 고치고 이후는 현재처럼 "집행위"로 두면 충분하다. excerpt(7줄)도 함께.

4. **18줄 — "남의 정보"**
   - 구어적 표현. 스타일 가이드의 순화 기준에 걸린다. → "제3자의 정보" 또는 "다른 사이트의 정보".

5. **48줄 — 조사 호응**
   - 현재: "무엇을 검색 이용 한 번으로 셀 것인지, 그 세부 기준은 공개되지 않았습니다."
   - 권고: "무엇을 검색 이용 한 번으로 셀 것인지, 그 세부 기준이 공개되지 않았습니다." 또는 "무엇을 검색 이용 한 번으로 셀 것인지에 대한 세부 기준은 공개되지 않았습니다."

6. **16줄 — 약어 병기 일관성**
   - VLOSE는 영문 풀네임을 병기했는데 VLOP은 약어만 나온다. → "초대형 온라인 플랫폼(VLOP, Very Large Online Platform)"으로 맞추거나, 반대로 VLOSE 쪽 풀네임을 덜어내 대칭을 맞춘다.

7. **54줄 — 법 이름 가독성(선택)**
   - "인공지능 발전과 신뢰 기반 조성 등에 관한 기본법"을 문장 안에 그대로 넣으면 호흡이 길다. 이 블로그 관례상 문제는 없으나 "「인공지능 발전과 신뢰 기반 조성 등에 관한 기본법」(AI 기본법)"으로 두면 이후 지칭이 편해진다.

### 오탈자 스캔 결과

전 문장 대조 결과 **오탈자·어미 오기·자모 중복 없음**. 숫자 표기(4,500만 / 1억 5,910만 / 6% / 4개월), 고유명사 철자(ChatGPT, Reddit, Roblox, OpenAI, VLOSE, VLOP, 헨나 비르쿠넨, 마이크로소프트 빙)도 모두 정확하다. 나열형 문장의 어미("~해야 하고" 반복 후 "~해야 합니다"로 마감)는 호응이 통일돼 있다.

---

## D. 종합 판정

- [x] **수정 후 발행** — 치명적 오류 0건. [중요] 1건(44줄 캡션)만 반드시 반영하고, 경미 7건은 저자 판단에 맡긴다.
- [ ] 발행 가능 (모든 항목 ✓)
- [ ] 발행 보류

## 주요 검증 출처

- DSA 제3조(j) / 제24조 / 제39조 원문 — https://www.eu-digital-services-act.com/Digital_Services_Act_Article_3.html , .../Article_24.html , .../Article_39.html
- 집행위 VLOP·VLOSE 지정 목록(2026-08-31 갱신) — https://digital-strategy.ec.europa.eu/en/policies/list-designated-vlops-and-vloses
- 집행위 지정 뉴스 — https://digital-strategy.ec.europa.eu/en/news/commission-designates-chatgpt-reddit-roblox-under-digital-services-act
- OpenAI 신고 수치의 단서(Help Center 인용 보도) — https://searchenginewatch.com/eu-chatgpt-search-engine/ , https://www.searchenginejournal.com/chatgpt-is-now-a-very-large-online-search-engine-in-the-eu/587801/
- 불복 여부 — 2026-09-03 시점 취소소송 보도 없음(PYMNTS, TechPolicy.Press, Euronews 등 확인)
- OpenAI 미션베이 사옥 — https://sfstandard.com/2023/10/27/openai-uber-headquarters-mission-bay/ , https://www.costar.com/article/1226862331/
- 정보통신서비스 제공자 정의 — 정보통신망법 제2조 제1항 제3호 (국가법령정보센터)

---

## E. 반영 결과 (오케스트레이터, 발행 직전)

**[중요] 1건 반영 완료:**
- 44줄 이미지 캡션 → "OpenAI가 우버로부터 전대해 쓰는 미션베이 사옥 가운데 한 동입니다."로 교체.

**경미 지적 반영:**
- C-1 AI법 서술 완화 → "그 인공지능이 무엇이고 어디에 쓰이는지를 기준으로 삼습니다. 어떤 모델인지, 어떤 용도에 놓이는지, 그래서 어느 위험 등급에 들어가는지를 따집니다." ✔
- C-2 "구조적 위험" → "시스템적 위험" ✔
- C-3 "유럽위원회" → 첫 등장 "유럽연합 집행위원회", 이후 "EU 집행위원회"/"집행위". excerpt와 비르쿠넨 이미지 캡션까지 일괄 교체 ✔
- C-4 "남의 정보" → "제3자의 정보" ✔
- C-5 조사 호응 → "…어디까지를 검색으로 셌는지, 그 적용 기준이 공개되지 않았습니다." ✔
- C-6 VLOP 풀네임 병기 대칭 → **미반영(의도적).** VLOSE는 이 글의 중심 개념이라 영문 풀네임이 값을 하지만, VLOP은 주변 용어여서 "초대형 온라인 플랫폼(VLOP)"만으로 충분하다. 스타일 가이드 6절 "불필요하면 병기하지 않는다"를 따랐다.
- C-7 법 이름 「」 표기 → **미반영(선택 사항).** 본문에서 한 번만 정식 명칭을 쓰고 이후 "이 법"으로 지칭하므로 약칭 도입이 불필요하다.

**오케스트레이터가 팩트체크 실행 전에 자체 확인해 이미 반영해 둔 항목(리포트 B4·B3와 독립적으로 교차 검증됨):**
- 제39조가 "광고를 게재하는" VLOP·VLOSE 대상 조건부 의무임을 확인해 "광고를 싣는다면 광고 저장소를 공개해야 하고"로 한정.
- 제24조 2항 및 집행위 지침상 검색엔진 활성 수신자 산정 기준(질의 입력 + 제시된 내용 노출)이 법에 존재함을 확인해, 공개되지 않은 것은 "그 틀을 ChatGPT에 적용한 기준"이라는 쪽으로 정정.
- VLOSE 명단이 2023년 4월 이후 둘뿐이었고 ChatGPT가 세 번째임을 확인해 보강.

**이미지 3장 존재 확인:** 커버·virkkunen·openai 모두 `public/images/covers/`에 존재하고 커밋됨.

**최종 판정: 발행.** 치명적 오류 0건, [중요] 1건 반영 완료.
