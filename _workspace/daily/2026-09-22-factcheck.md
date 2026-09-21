# 팩트체크 리포트 — 2026-09-22

대상: `_posts/2026-09-22-us-military-ai-intel-report-second-call.md`
판정: **통과 (발행 가능)** — 치명적 오류 0건, 초고 단계에서 교정 5건 반영.

## 검증 항목

| # | 본문 진술 | 판정 | 근거 |
|---|-----------|------|------|
| 1 | CNN이 9월 18일 단독 보도 | ✅ | CNN Politics 2026-09-18 "Exclusive: US military had close call…". CP24·CTV·Engadget·Rolling Stone·JPost·TechTimes 전재·후속 |
| 2 | 올봄, 중동 | ✅ | CP24(CNN 전재) "Spring 2026, during U.S. war with Iran". 정확한 날짜는 비공개 — 본문도 그렇게 씀 |
| 3 | 하와이 소재 태평양특수작전사령부(SOCPAC)에서 나온 보고 | ✅ | "reporting … originated with US Special Operations Command Pacific, based in Hawaii" |
| 4 | 챗봇이 OSINT와 기밀 SIGINT를 결합, 화물을 핵무기 부품으로 오식별 | ✅ | CNN 전재 다수 일치 |
| 5 | **분석관이 AI를 두 번 사용 — 2차로 표준 정보 보고서 서식으로 포장해 배포** (본문 핵심 논지) | ✅ | "The analyst then used AI again to package the findings into a standard intelligence report — the kind that is trusted by military officials — and disseminated it." TechTimes도 2단계 워크플로로 독립 서술 |
| 6 | 무장 병력 승선 준비, 군용기 공중 대기 | ✅ | CNN 전재 |
| 7 | 작전 직전 "보고서를 더 깊이 들여다보다가" 발각, 자산 철수, 승선 없음 | ✅ | "officials dug deeper into the report" / "The military assets stood down and no one boarded the boat." |
| 8 | 인용 "완전히 허위(entirely false)" · "전쟁을 일으킬 뻔했다" | ✅ | 동일 소스에 귀속됨. 본문도 "소스 한 명"으로 단수 귀속 |
| 9 | CNN 소스 4명, 익명 | ✅ | TechTimes "citing four sources". 본문은 익명임을 명시 |
| 10 | 국방부·SOCPAC 논평 요청 무응답 | ✅ | CNN·Engadget·TechTimes 모두 일치. ⚠ 검색 스니펫에 떠돌던 "Department of War" 명의 성명은 **1차 확인 실패 → 본문에서 사용하지 않음** |
| 11 | 챗봇 정체·실제 화물·정확한 날짜 비공개 | ✅ | 세 건 모두 출처가 명시적으로 침묵. 본문 2문단에 그대로 밝힘 |
| 12 | 9월 19일(토) 상원의원 3인 서한 | ✅ | CNN 2026-09-19. `date -d 2026-09-19` = Saturday, 보도의 "sent on Saturday"와 일치 |
| 13 | 마크 워너 = 상원 정보위 부위원장 / 잭 리드 = 군사위 간사 / 크리스 쿤스 | ✅ | 워너 2025-01-03~ SSCI Vice Chair, 리드 2025-01-03~ SASC Ranking Member |
| 14 | 수신 = 피트 헤그세스 국방장관, 제이 클레이턴 국가정보국장 | ✅ | CNN. CNN 표기가 "Defense Secretary"이므로 본문도 국방장관으로 통일 |
| 15 | 서한 인용 3건(즉각적인 조사 / 공개 투명성 / 제한 없는 접근) 및 "효과적 거버넌스보다 도입·'실험' 가속 우선" | ✅ | CNN 전재본 원문과 대조 |
| 16 | 2월 이란 미나브 학교 오폭, 어린이 포함 약 200명 사망, AI 기반 DB 경고 무시 | ✅ | 서한이 든 두 번째 사례. CNN 전재 "killed nearly 200 children and adults" / "bypassed warnings in critical databases, including one powered by AI" |
| 17 | 올해 1월 국방부 「AI 가속화 전략」, 4대 목표 + 선도 프로젝트 7개 | ✅ | fedweek·Nextgov·Washington Times·Forecast International 교차. 문서 공개 1월 9일·발표 1월 12일로 출처가 갈려 본문은 **"올해 1월"까지만** 씀 |
| 18 | 헤그세스 인용 | ✅ | 원문 "We will unleash experimentation, eliminate bureaucratic barriers, focus our investments and demonstrate the execution approach needed to ensure we lead in military AI." 초고가 뒷부분을 빠뜨려 **전문 번역으로 교정함** |
| 19 | "내부 도구는 상용 제품에 립스틱을 바른 복사본" (전직 고위 관계자) / "AI는 나쁜 아이디어에 더 빨리 도달하게 해 준다" | ✅ | CP24(CNN 전재) 인용 목록과 일치, 화자 구분도 일치 |

## 시점 규율
- 오늘(KST 2026-09-22) 기준 서술. 사건(올봄)·보도(9/18)·서한(9/19)·전략 문서(1월) 모두 과거. 미래 사건을 과거로 쓴 대목 없음.
- 9월 24일 예정 트럼프–시진핑 AI 거버넌스 정상회담은 **아직 미래**라 본문에서 언급하지 않음.
- `_style/ai-timeline.md`의 2026-02-27 국방부–앤트로픽 지정, 2026-08-27 위법 판결과 충돌 없음.

## 초고에서 교정한 사항
1. 헤그세스 인용문 뒷부분 누락 → 전문 번역으로 교체 (항목 18).
2. 검색 스니펫의 미확인 "Department of War" 성명 → 미사용 결정 (항목 10).
3. 커버 사진을 본문 중간에도 중복 배치했던 것 → 제거, 본문 이미지는 펜타곤 1장만.
4. "미 특수작전사령부 태평양사령부" → "미군 태평양특수작전사령부(SOCPAC)", 하와이 소재 명시.
5. 표현 교정 — "지휘부가 그것을 넘기고"→"그 경고를 지나친", 인용 아닌 어구의 큰따옴표 제거, 미나브 첫 등장 병기.

## 인식론적 절제 점검 (스타일 가이드 2026-09-13 항목)
- 기사의 사정거리를 2문단에서 먼저 선언(익명 4인·무응답·3건 비공개).
- "AI가 전쟁을 일으킬 뻔했다" 요약을 본문이 직접 반박하고 행위 주체를 사람에게 귀속.
- 두 사건을 한 범주로 묶는 것도 스스로 완화("더 정확한 표현은, …").
- 관통 비유 없음. 억지 한국 접점 없음(국내 제품명 0건).

## 이미지
- 커버 `public/images/covers/us-military-ai-intel-report-second-call.jpg` — 북아라비아만 미 해군 VBSS팀 화물 확인(2004), Wikimedia Commons / U.S. Navy, Chadwick Vann, Public domain. 본문 하단 크레딧 1줄 표기.
- 본문 `…-pentagon.jpg` — 미 국방부 청사, Wikimedia Commons / David B. Gleason, CC BY-SA 2.0. 캡션 아래 인라인 출처 표기.
- ⚠ 캡션에 2004년 자료사진임을 밝혀 이번 사건의 현장 사진으로 오인되지 않게 함.
- 수집 경로: 공유 egress IP가 Wikimedia로부터 간헐적 429를 받아 `fetch-cover.mjs`의 기본 재시도로는 실패 → 백오프를 늘린 임시 스크립트로 내려받은 뒤 `--local`로 크롭·크레딧 기록.
