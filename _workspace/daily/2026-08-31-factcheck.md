# Fact Check Report: 2026-08-31-openai-cursor-cutoff-five-percent

- 검증 대상: `_posts/2026-08-31-openai-cursor-cutoff-five-percent.md`
- 팩트 카드: `_workspace/daily/2026-08-31-brief.md`
- 검증 기준 시점: **KST 2026-08-31** (본문 `date: 2026-08-31 09:00:00 +0900`)
- 검증 방식: 팩트 카드 URL + 독립 웹 검색 교차. openai.com·cnbc.com은 이 환경에서 직접 페치 불가 → 검색 스니펫 + Engadget·the-decoder·explainx·cellcog·xenospectrum·Reuters 전재본으로 대체 확인.

---

## A. 시점 일관성 (최우선 검사)

| 본문 표현 | 실제 일자 | 발행일(8/31) 대비 | 판정 |
|---|---|---|---|
| "지난 6월 16일 SpaceX가 … 인수한다고 발표" | 2026-06-16 발표 | 과거 ✓ | 유지 |
| "나스닥 상장 직후" | SpaceX 나스닥 IPO는 발표 4일 전(≈6/12), 티커 SPCX | 과거 ✓ | 유지 |
| "8월 14일 인수가 종결됐고" | 2026-08-14 종결 | 과거 ✓ | 유지 |
| "그로부터 14일 뒤인 8월 28일" | 8/14 → 8/28 = **정확히 14일** | 과거 ✓ | 유지 |
| "OpenAI가 … 입장문을 공개했습니다"(8/28) | 현지 금요일 8/28 늦은 밤 게시 | 과거 ✓ | 유지 |
| "통보가 나온 그날 밤 … 톰 브라운" | 트루엘·브라운 X 게시 모두 미 동부 8/28 금요일 밤(OpenAI 게시 2시간 이내) | 과거 ✓ | 유지 |
| "실제로 공급이 끊기는 날은 11월 12일" | 2026-11-12 (OpenAI가 **제시/제안한** 차단일) | 미래 — 미래형으로 서술됨 ✓ | 표현만 조정 권고(C-5) |
| "올해 초 머스크가 선서한 상태에서 …" | 실제 인정은 **2026-04-30 Musk v. Altman 공판 반대신문**(평결 5/18) | 과거 ✓, 다만 "올해 초"는 부정확 | C-4 |
| "올해 초부터 … Composer가 가장 많이 선택되는 모델" | 트루엘 본인 발표는 **2026-05-18~19(Composer 2.5)** | **날짜 오류** ✗ | **C-2 수정 필수** |
| "Anthropic은 실제로 Claude 사용 한도를 올렸습니다" | 8/29 발표분은 **9/14부터** 시행, 현행 대비 실질 −17% | **아직 일어나지 않음 = 시점 붕괴** ✗ | **C-1 수정 필수** |
| "11월 12일까지는 아직 두 달 반이 남아" | 8/31 → 11/12 = **73일(약 2개월 12일)** | 근사치로 과대(3일) | C-3 |
| "약 3개월의 통지 기간" | 8/28 → 11/12 = **76일(약 2.5개월)**, OpenAI 원문은 "계약이 허용하는 최대 통지"이지 "3개월"이 아님 | 내부 불일치 | **C-3 수정 권고** |

- **사후 시점 표현 검사:** "훗날", "결국 …로 드러났듯", "돌이켜보면" 류 없음 ✓
- **용어·약어 시점성:** Cursor, Composer 2.5, Grok 4.5/4.6, Background Agents, Automations, BYOK, SpaceXAI — 모두 2026-08 시점에 존재 ✓
- **미래 사건 선취 검사:** Composer 3(1.5T, Compile 2026에서 사전학습 발표)은 미출시 상태이며 본문에 언급 없음 ✓

---

## B. 사실 검증

| # | 주장(본문) | 상태 | 근거 | 조치 |
|---|---|---|---|---|
| 1 | OpenAI 모델이 Cursor 사용자 트래픽의 **약 5%** (마이클 트루엘, X) | ✓ 확인 | 트루엘 원문 "OpenAI models serve about 5% of Cursor user traffic" (x.com/mntruell/status/2093532254006063557), CNBC/Reuters/the-decoder 교차 | 그대로 |
| 2 | 트루엘 직함 = **Cursor CEO**(공동창업자 겸) | ✓ 확인 | Anysphere 2022년 MIT 동창 4인 창업, 트루엘 CEO (en.wikipedia.org/wiki/Anysphere, 8/29 보도 전반) | 그대로 |
| 3 | "세 달 뒤 차단 … 유감 … OpenAI 팀과 이야기 중" | ✓ 확인 | 트루엘 원문 그대로("in three months … we're speaking with the OpenAI team to resolve this") | 그대로 |
| 4 | 2026-06-16 SpaceX가 Anysphere를 **600억 달러 전량 주식**으로 인수 발표, 스타트업 매각 사상 최대 | ✓ 확인 | qz.com/spacex-buying-cursor-anysphere-60-billion-deal-061626, explainx(8-K 해설). 역삼각합병(X67 Inc.), 교환비율은 종결 직전 7거래일 VWAP | 그대로 |
| 5 | 나스닥 상장 **직후** | ✓ 확인 | IPO 4일 뒤 발표, SpaceX 티커 NASDAQ:SPCX (Benzinga) | 그대로 |
| 6 | 규제 절차 완료 후 **8/14 종결**, 신설 **SpaceXAI** 부문 산하 완전자회사 | ✓ 확인 | satnews 8/13, aiweekly "SpaceX closes $60B Cursor deal, folds it into SpaceXAI unit" | 그대로 |
| 7 | **8/28** OpenAI가 SpaceX에 계약 종료 통보 + 동일 내용 입장문 공개 | ✓ 확인 | Reuters(8/28 wtvbam 전재) "OpenAI said on Friday", xenospectrum(8/28 통보), OpenAI "Our decision on Cursor following its acquisition by SpaceX" | 그대로 |
| 8 | 차단 예정일 **11/12** | ✓ 확인 | Benzinga·Engadget·CNBC 등 다수 | 표현 조정(C-5) |
| 9 | OpenAI 사유: "SpaceX가 이용약관 범위 안에서 쓸 것이라 확신할 수 없다 … 머스크 회사들의 계약 위반 경험" | ✓ 확인 | 인용문 다수 매체 동일 재현 | 그대로 |
| 10 | 근거① 트위터 인수 뒤 OpenAI 계약 조건 위반 | ✓ 확인(OpenAI 주장으로서) | the-decoder(2022-12 데이터 계약 건), officechai | "OpenAI가 주장한" 프레임 유지 |
| 11 | 근거② **선서 하에** xAI의 이용약관 위반 인정 | ✓ 확인(사실관계), ⚠ 시점 표현 | Forbes 2026-04-30 "Musk Admits xAI Used OpenAI Technology To Train Its Own Models", MIT Tech Review 공판 보도. **공판 반대신문(4월 말)** — "올해 초"보다 "지난 4월 재판에서"가 정확 | C-4 |
| 12 | 트위터·xAI 모두 현재 **SpaceX 산하** | ✓ 확인 | SpaceX가 xAI 인수(2026-02, x.ai/news/xai-joins-spacex, TechCrunch 2/2), X는 xAI 산하 → 체인상 SpaceX 산하 | 그대로 |
| 13 | OpenAI가 "계약상 줄 수 있는 최대치"의 통지 기간 부여 | ✓ 확인 | Benzinga·explainx "the maximum notice our contract allows" | 그대로 |
| 13b | 그 기간을 "**약 3개월**"로 서술 | ⚠ 근거 약함 | 실제 8/28→11/12 = 76일(≈2.5개월). "3개월"은 트루엘의 반올림 표현이지 OpenAI 문구 아님. Engadget은 "approximately 2.5 months"로 계산 | **C-3** |
| 14 | OpenAI 입장문의 협업 기간 표현 "**거의 4년**" | ✓ 확인 | 다수 매체 "nearly four years" | 그대로 |
| 15 | Cursor(Anysphere) **2022년** 창업 | ✓ 확인 | Wikipedia·TFN·Taskade 교차 | 그대로 |
| 16 | ARR: 2025-11 10억 → 2026-02 20억 → 2026-06 초 40억 달러 | ✓ 확인 | devgraphiq·aibusinessweekly·thegtmnewsletter 사다리 일치($100M 25-01 → $500M 25-06 → $1B 25-11 → $2B 26-02 → ≈$4B 26-06). $60B ≈ 매출 15배 배수와도 정합 | 그대로 |
| 17 | Composer가 **"올해 초부터"** Cursor 내 최다 선택 모델 | ✗ 오류(날짜) | 트루엘 X 게시 "Composer 2.5 is now the most-chosen model in Cursor"는 **2026-05-18~19**(Composer 2.5 출시 5/18). Medium/Handy AI 모두 5월. 2~3월 시점에 그 지위였다는 근거 없음 | **C-2** |
| 18 | 차단 후에도 Claude·Google·Grok 4.5/4.6·Composer 2.5 유지 | ✓ 확인 | xenospectrum("Grok 4.6, Grok 4.5, Composer 2.5"를 네이티브로 묶음, Claude·Gemini 유지), Engadget | 그대로 |
| 19 | Composer 2.5가 현행 버전 | ✓ 확인 | 5/18 출시, Composer 3(1.5T, Colossus 사전학습)은 미출시 | 그대로 |
| 20 | 톰 브라운 = **Anthropic 공동창업자** | ✓ 확인 | 공동창업자 겸 최고컴퓨트책임자(일부 매체는 COO로 표기) — "공동창업자"는 안전한 표기 | 그대로 |
| 21 | 브라운 발언: Cursor 내 Claude 지원 컴퓨트 증설 + "Sonnet 3.5 이후로 Anthropic의 신뢰할 수 있는 파트너" | ✓ 확인 | 원문 "Cursor has been a trusted partner of Anthropic since Sonnet 3.5. We'll continue to increase compute to support Claude models in Cursor…" (x.com/NotTomBrown/status/2093541294027280657). 번역 충실 ✓ | 그대로 |
| 22 | "Anthropic은 **실제로 Claude 사용 한도를 올렸습니다**" | ✗ 오류(시점·방향) | 8/29 발표는 **9/14부터** Claude **Code** 주간 한도 25% "영구" 상향 → 현행 한시적 50% 상향분 종료로 **지금 수준 대비 17% 감소**(Techmeme 260829/p13, digitalapplied). 8/31 기준 아직 시행 전이며 Cursor 사용자 대상 조치도 아님 | **C-1** |
| 23 | "컴퓨트가 방금 확보됐다"는 커뮤니티 농담 | ⚠ 부분 확인 | Digital Trends는 "5시간 한도" 농담과 **"방금 풀린(freed up) 컴퓨트"** 농담을 언급. '확보'보다 '남아돌게 됐다/여유가 생겼다'가 원의에 가까움 | C-6(경미) |
| 24 | BYOK: OpenAI가 이번 건 예외를 공표한 적 없고, 개인 키 트래픽도 Cursor 통합 지점을 지나감 | ⚠ 부분 확인(단일 계열 출처) | explainx가 명시적으로 동일 주장("even carrying your own key — still flows through Cursor's integration surface, which is precisely what OpenAI is severing", "has not published BYOK carve-out terms"). 반면 cellcog는 BYOK로 로컬 Chat/Agent 유지가 가능하다고 안내 — 본문이 이미 "이어질 수도 있지만"으로 완충함 | 유지 가능, C-7 완화 권고 |
| 25 | Automations·Background Agents·CLI는 문서화된 우회 없음 | ✓ 확인 | xenospectrum·cellcog 모두 BYOK 적용 범위에서 Tab/Auto/클라우드·Background Agents/Automations/CLI/SDK 제외 명시 | 그대로 |
| 26 | 유료 API 계정이면 로컬 Chat/Agent 가능, ChatGPT 구독으로는 불가 | ✓ 확인 | cellcog "OpenAI API is billed separately from Cursor or ChatGPT subscriptions", 로컬 Chat·Agent 한정 | 그대로 |
| 27 | 원화 환산: 600억 달러=약 84조 원, 40억 달러=약 5조 6,000억 원 | ⚠ 근거 약함(환율) | 두 값 모두 **1,400원/달러**로 일관 ✓. 그러나 2026-08-28 서울 종가 **1,372.5원**(13개월 최저) 기준으로는 각각 약 82.4조 원·약 5.5조 원 | C-8(경미) |
| 28 | "세계 최대의 AI 코딩 도구", "최대 모델 공급사", "4년을 함께한 **최대** 고객사" | ⚠ 근거 약함 | Cursor를 선도 AI 코딩 도구로 보는 서술은 통용되나, **OpenAI가 Cursor의 최대 공급사**라는 서술은 본문의 5% 논지와 상충하고, **Cursor가 OpenAI의 최대 고객사**라는 순위 근거는 어떤 매체에서도 확인되지 않음 | **C-9 수정 권고** |
| 29 | 국내 개발 조직의 Cursor 팀 표준 채택 | ⚠ 검증 불가하나 일반적 서술 | 수치 없이 "적지 않습니다"로만 서술 — 허용 범위 | 그대로 |

---

## C. 수정 권고 (우선순위 순)

**C-1 [치명적] 28줄:** "Anthropic은 실제로 Claude 사용 한도를 올렸습니다."
→ 사실과 시점이 모두 어긋난다. 8/29 발표는 **9월 14일부터** Claude Code 주간 한도를 25% 올리겠다는 예고이고, 현재 적용 중인 한시적 50% 상향분이 그때 종료되므로 **지금 수준과 비교하면 오히려 17% 줄어든다**. 또 Cursor 사용자 대상 조치가 아니라 Claude Code 구독 플랜 정책이다.
- 권고 A(안전): 문장 삭제하고 앞뒤를 이어 붙인다. → "…라고 표현했고요. 커뮤니티에서는 …"
- 권고 B(살릴 경우): "Anthropic은 Cursor 안의 Claude를 뒷받침할 컴퓨트를 늘리겠다고 했을 뿐, 이날 함께 나온 사용 한도 공지는 9월 14일부터 적용되는 별개의 정책입니다."

**C-2 [치명적] 26줄:** "Cursor에서는 **올해 초부터** 자체 모델인 Composer가 도구 안에서 가장 많이 선택되는 모델이 됐습니다."
→ 트루엘이 "Composer 2.5가 Cursor에서 가장 많이 선택되는 모델이 됐다"고 밝힌 것은 **2026년 5월 18~19일**이다(Composer 2.5 출시 5/18). 올해 초에 그 지위였다는 근거는 없다.
- 권고: "Cursor에서는 **지난 5월 자체 모델 Composer 2.5가 나온 뒤로 이 모델이** 도구 안에서 가장 많이 선택되는 모델이 됐습니다(회사 대표가 직접 밝힌 수치입니다)."
- 이 수정 시 같은 문단 뒤쪽 "Composer 2.5도 그대로입니다"와 중복되므로, 뒤 문장은 "이 선택지들은 그대로 남습니다." 정도로 정리한다.

**C-3 [중요] 20줄·46줄 — 통지 기간 서술의 내부 불일치**
- 20줄 "계약상 줄 수 있는 최대치인 **약 3개월의** 통지 기간을 부여했다고 밝혔습니다" → OpenAI 원문은 "계약이 허용하는 최대 통지"일 뿐 '3개월'이라는 표현이 아니고, 실제 간격은 76일(약 두 달 반)이다. 권고: "**계약상 줄 수 있는 최대치의 통지 기간**을 부여했다고 밝혔습니다."
- 46줄 "11월 12일까지는 아직 **두 달 반이 남아 있습니다**" → 8/31 기준 73일. 권고: "**두 달 반이 채 남지 않았습니다**" 또는 "두 달 남짓 남아 있습니다".
- (12줄의 "세 달 뒤"는 트루엘 본인의 표현이므로 그대로 두어도 무방하다.)

**C-4 [경미] 20줄:** "**올해 초** 머스크가 선서한 상태에서" → 실제 인정은 2026년 4월 말 Musk v. Altman 공판 반대신문(평결 5/18). OpenAI 입장문의 "earlier this year"를 옮긴 것이지만 한국어 '올해 초'는 1~3월로 읽힌다. 권고: "**올해 4월 재판에서** 머스크가 선서한 상태에서".

**C-5 [경미] 16줄:** "실제로 공급이 끊기는 날은 11월 12일입니다." → 로이터는 OpenAI가 그 날짜를 "제안(proposed)"했다고 보도했고 협의가 진행 중이다. 권고: "**OpenAI가 제시한 차단일은** 11월 12일입니다."

**C-6 [경미] 28줄:** "컴퓨트가 방금 확보됐다는 농담" → 원 농담은 OpenAI가 빠지면서 컴퓨트가 "풀렸다(freed up)"는 쪽이다. 권고: "컴퓨트가 방금 남아돌게 됐다는 농담".

**C-7 [경미] 36줄:** "OpenAI가 끊겠다고 한 대상이 바로 그 지점이죠." → 이 기술적 단정의 1차 근거는 explainx 한 곳이고, 다른 안내(cellcog)는 BYOK로 로컬 Chat/Agent가 유지된다고 본다. 권고: "…Cursor의 통합 지점을 지나가는데, **OpenAI가 끊겠다고 한 대상도 결국 그 지점이라는 지적이 나옵니다.**"

**C-8 [경미] 16줄·24줄 — 환율:** 1,400원/달러로 일관돼 내부 모순은 없으나, 8월 28일 서울 종가는 1,372.5원이다. 그대로 두어도 "약"으로 방어되지만, 정확히 가려면 "약 82조 원"·"약 5조 5,000억 원".

**C-9 [경미] 14줄·26줄 — 최상급 표현:**
- 14줄 "세계 최대의 AI 코딩 도구가 **최대 모델 공급사**에게서 잘렸다" → OpenAI가 Cursor의 최대 공급사가 아니라는 것이 바로 이 글의 논지다. 권고: "**대표적인 모델 공급사**에게서 잘렸다".
- 26줄 "4년을 함께한 **최대 고객사**" → Cursor가 OpenAI의 최대 고객사라는 순위는 어떤 보도로도 확인되지 않는다. 권고: "4년을 함께한 **대형 고객사**".

**C-10 [참고 · 본문 수정 아님]** `_style/ai-timeline.md`에 이번 사건군이 없다. 발행과 별개로 다음 항목 추가 권고:
`2026-02-02 SpaceX, xAI 인수(X 포함) / 2026-06-12 SpaceX 나스닥 상장 / 2026-06-16 SpaceX, Anysphere 600억 달러 전량 주식 인수 발표 / 2026-08-14 인수 종결·SpaceXAI 부문 편입 / 2026-08-28 OpenAI, Cursor 모델 공급 종료 통보(차단 예정 11-12) / 2026-05-18 Cursor Composer 2.5 공개·최다 선택 모델 등극`

---

## D. 종합 판정

- [ ] 발행 가능 (모든 항목 ✓)
- [x] **수정 후 발행** — 치명적 2건(C-1, C-2) + 내부 불일치 1건(C-3)을 고치면 나머지는 발행에 지장 없음
- [ ] 발행 보류 (시점 규율 위반 또는 치명적 오류 다수)

**치명적 오류 목록:** ① 28줄 "Anthropic은 실제로 Claude 사용 한도를 올렸습니다" — 해당 상향은 **9월 14일 시행 예정**이고 현행 수준 대비로는 오히려 17% 감소이며 Cursor 대상 조치도 아님(시점 붕괴 + 사실 왜곡). ② 26줄 "올해 초부터 Composer가 가장 많이 선택되는 모델" — 실제는 **2026년 5월 18~19일**(Composer 2.5) 시점의 사실(약 4개월 날짜 오류). 그 외 잘못된 날짜·존재하지 않는 발언·인물 오기·자릿수 오류는 **없음**.

**최종 판정: 발행 보류** — C-1·C-2 수정 후 즉시 발행 가능(C-3도 함께 반영 권장).

---

## 근거 URL 모음

- 트루엘 원문 5%: https://x.com/mntruell/status/2093532254006063557
- 톰 브라운 원문: https://x.com/NotTomBrown/status/2093541294027280657
- 트루엘 Composer 2.5 최다 선택(5월): https://x.com/mntruell/status/2056780569380626686
- OpenAI 입장문: https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/
- CNBC 8/29: https://www.cnbc.com/2026/08/29/openai-cursor-spacex-model-access.html
- Reuters 전재(8/28): https://wtvbam.com/2026/08/28/openai-to-end-partnership-with-spacexs-cursor/
- Engadget: https://www.engadget.com/2246969/openai-pull-its-models-from-cursor-due-to-spacexai-acquisition/
- the-decoder: https://the-decoder.com/openai-cuts-off-cursor-after-spacex-acquisition-citing-musks-history-of-breaking-contracts/
- Benzinga(11/12·최대 통지): https://www.benzinga.com/markets/tech/26/08/61510492/openai-ends-cursor-model-access-november-12
- explainx(마이그레이션·BYOK·통합 지점): https://www.explainx.ai/blog/openai-ends-cursor-partnership-spacex-acquisition-august-2026
- cellcog(BYOK 범위): https://cellcog.ai/blog/openai-pulls-models-from-cursor/
- xenospectrum(BYOK 한계·Grok 4.5/4.6·Composer 2.5): https://xenospectrum.com/en/openai-cursor-model-access/
- 인수 발표(6/16): https://qz.com/spacex-buying-cursor-anysphere-60-billion-deal-061626
- 인수 종결(8/13~14): https://satnews.com/2026/08/13/spacex-finalizes-regulatory-procedures-to-close-60-billion-acquisition-of-ai-platform-cursor/
- SpaceXAI 편입: https://aiweekly.co/alerts/spacex-closes-60b-cursor-deal-folds-it-into-spacexai-unit
- SpaceX–xAI 인수(2026-02): https://techcrunch.com/2026/02/02/elon-musk-spacex-acquires-xai-data-centers-space-merger/ , https://x.ai/news/xai-joins-spacex
- 머스크 증언(4/30): https://www.forbes.com/sites/antoniopequenoiv/2026/04/30/elon-musk-admits-xai-distilled-openai-data-to-train-models-heres-what-that-means/ , https://www.technologyreview.com/2026/05/01/1136800/musk-v-altman-week-1-musk-says-he-was-duped-warns-ai-could-kill-us-all-and-admits-that-xai-distills-openais-models/
- Anthropic 한도 변경(9/14 시행): https://www.techmeme.com/260829/p13 , https://www.digitalapplied.com/blog/claude-code-weekly-limit-reduction-september-14
- Anthropic 대응·커뮤니티 농담: https://www.digitaltrends.com/computing/stung-by-openai-pulling-gpt-models-from-cursor-anthropic-offers-a-timely-lifeline-with-higher-claude-limits/
- Composer 2.5(5/18 출시·성능): https://www.datacamp.com/blog/composer-2-5 , https://artificialanalysis.ai/articles/cursor-composer-2-5-coding-agent-index
- Anysphere 창업 2022·트루엘 CEO: https://en.wikipedia.org/wiki/Anysphere
- ARR 사다리: https://devgraphiq.com/cursor-statistics/ , https://thegtmnewsletter.substack.com/p/deconstructing-cursor-growth-playbook-4m-to-2b-arr
- 원/달러 환율(8/28 종가 1,372.5원): https://ko.tradingeconomics.com/south-korea/currency
