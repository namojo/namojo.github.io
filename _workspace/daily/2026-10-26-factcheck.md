# Fact Check Report: google-personal-intelligence-ads-inference

- **대상 초고:** `_posts/2026-10-26-google-personal-intelligence-ads-inference.md`
- **팩트 카드:** `_workspace/daily/2026-10-26-brief.md`
- **검증일:** 2026-10-25
- **종합 판정:** **수정 후 발행** (치명적 2건 포함. 둘 다 본문 구조와 직결되므로 문장 교체가 아니라 **도입부·결론부 재집필**이 필요)

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-10-26

| 인용된 사건 | 본문 표기 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|---|
| 구글 개인정보처리방침 개정 | "10월 16일 자" | 2026-10-16 (Effective October 16, 2026) | 이전 ✓ | 유지 |
| Personal Intelligence → 검색 AI 모드 확장 | "1월에" | 2026-01-22 | 이전 ✓ | 유지(단, B-3 참조) |
| 글로벌 베타 확대 | "4월에" | 2026-04-14 (**Gemini 앱**) | 이전 ✓ | **주체 오기 — B-3 참조** |

- **사후 시점 표현:** "훗날", "결국", "돌이켜보면" 등 **없음** ✓
- **용어 시점성:** "Personal Intelligence" 2026-01 등장 ✓ / "AI 모드" ✓ — 발행일에 모두 존재
- **미래형 표기:** "내일 Personal Intelligence에서 지메일 연결을 끊으면"(34줄), "앞으로 연결 가능한 앱을 더 늘리겠다"(38줄) — 모두 발행 시점 기준 정상 ✓
- **시점 규율 위반 없음.** A절은 통과입니다.

> ⚠ **`_style/ai-timeline.md`에 Personal Intelligence 항목이 한 줄도 없습니다**(grep 0건). 2026-01-22 / 03-17 / 04-14 / 05-19 / 10-16 다섯 건을 발행과 함께 추가하시기 바랍니다.

---

## B. 사실 검증

| # | 주장 (본문 줄) | 상태 | 증거 | 조치 |
|---|---|---|---|---|
| 1 | 개정 방침 발효일 2026-10-16 (12줄) | ✓ **확인** | policies.google.com/privacy 상단 "Effective October 16, 2026" (직접 확인) + 아카이브 목록상 직전 버전이 2026-10-01 | 유지 |
| 2 | 인용① "Search may process some of the data… including ads." (12줄) | ✓ **확인** | 원문 그대로 존재. 한국어 번역도 정확 | 유지 |
| 3 | 인용② "…Drive, Gmail, or Google Photos" (14줄) + "그대로 남아 있습니다" | ✗ **오류(치명적)** | 원문은 쉼표 뒤 `unless you choose to make data from these services available to other Google services that support personalized ads.`가 **붙어 있고**, 이 단서절은 **이번 개정에서 새로 추가된 것** | **C-1** |
| 4 | "두 문장이 한 방침 안에 나란히 있습니다" (16줄) — 위치 | ✓ **확인** | 둘 다 "Why Google collects data" → "We use data to build better services" → **"Provide personalized services, including content and ads"** 같은 소절 | 위치 서술 자체는 정확. 다만 C-1의 전제가 무너짐 |
| 5 | 검색 AI 모드 확장 = 2026-01 (18줄) | ✓ **확인** | blog.google 2026-01-22. Labs 실험, 미국·영어, AI Pro/Ultra | 유지(배경 보강 권고, C-3) |
| 6 | "4월에 글로벌 베타로 넓어졌는데" (18줄) | ⚠ **부정확(중요)** | 2026-04-14 글로벌 확대는 **Gemini 앱**. **검색 AI 모드**의 글로벌 확대는 2026-05-19 I/O(약 200개국·98개 언어·구독 불요). 중간에 2026-03-17 미국 무료 티어 개방도 있음 | **C-3** |
| 7 | 제외 지역 = EEA·스위스·영국·나이지리아 (18줄) | ✓ **확인** | gemini.google/overview/personal-intelligence: "except for the European Economic Area, Switzerland, the United Kingdom, and Nigeria" | 유지 (단 C-3의 주체 구분 필요) |
| 8 | "한국은 빠진 쪽이 아니고요" (18줄) | ⚠ **간접 확인** | 구글이 한국을 명시한 문서는 없음. 제외 목록 부재 + I/O의 "nearly 200 countries, 98 languages"로 **추론** | 표현 완화 권고 (C-6) |
| 9 | Workspace 기업·교육 계정 제외, 개인 계정 전용 (18줄) | ✓ **확인** | gemini.google: "available for personal Google accounts and not for Workspace business, enterprise or education users" + blog.google 1월 발표 동일 문구. 만 18세 이상 조건도 있음 | 유지 |
| 10 | 연결 가능 앱 = "지메일이나 구글 포토" (18줄) | ⚠ **불완전(경미)** | 현행 Gemini 앱: **Gmail·Photos·Search·YouTube**. 검색 AI 모드: Gmail·Photos(+Calendar "soon", I/O). 해제 UI 표기는 "Google Workspace"·"Google Photos". 본문이 14줄에서 **Drive까지 포함된 문장을 인용**해 놓고 18줄에서 Drive를 빠뜨림 | **C-5** |
| 11 | `google.com/search-personalization` 실재 (40줄) | ✓ **확인** | 구글 공식 도움말 "Manage Personalized Recommendations in Search services"(support.google.com/websearch/answer/17026260)가 관리 URL로 명시 | 유지 |
| 12 | "앞은 개인화를 통째로 내리는 쪽" (40줄) | ✗ **오류(중요)** | 이 설정의 적용 범위는 **Search·Maps·Shopping·Flights·Hotels·Translate·News로 한정**. 같은 도움말이 "다른 구글 서비스의 개인화는 끄지 않는다"고 적고, **광고는 언급조차 하지 않음**. 광고 개인화 스위치는 **My Ad Center**(별도) | **C-4** |
| 13 | Personal Intelligence 설정에서 앱 개별 해제 가능 (40줄) | ✓ **확인** | gemini.google.com/personalization-settings, 또는 Google 계정 → 데이터 및 개인정보 보호 → 개인 설정 → Search Services recommendations → **Connected Content Apps**에서 해제 | 유지 |
| 14 | "구글도 앞으로 연결 가능한 앱을 더 늘리겠다고 적어 뒀거든요" (38줄) | ✓ **확인** | gemini.google: "In the coming months, and with your permission" 더 많은 구글 앱·서비스에서 맥락을 가져옴. I/O 2026에서 Google Calendar를 명시적으로 예고 | 유지 (강력한 근거) |
| 15 | **"이미 만들어져 있는 칸이 어떻게 되는지는 구글의 공개 문서가 말하지 않습니다"** (34줄) | ✗ **오류(치명적)** | 구글 공식 도움말이 **정면으로 답하고 있음**: "Disconnecting an app or deleting data in a connected app **doesn't delete any data from Gemini Apps Activity**… That data can still be used for product improvement, including training generative AI models." 더 결정적으로 같은 페이지가 **"inferences"(파생 신호)를 명시**: "we train our generative AI models off of these summaries, excerpts, generated media, and **inferences**", "your Google Photos data is used to **infer your interests**" | **C-2** |
| 16 | 광고 동작 — 사용자 단위 세그먼트로 입찰을 거름 (24줄) | ✓ **확인** | 방침: "When showing you personalized ads, we use **topics** that we think might be of interest to you based on your activity." Google Ads 세그먼트 분류가 본문 4개 범주와 정확히 대응 — affinity(관심사) / in-market(구매 의향) / life events(생애 이벤트) / detailed demographics(연령대 등) | 유지. **본문에서 가장 탄탄한 대목** |
| 17 | "광고주는 누구의 어떤 메일인지 받지 않는다" (26줄) | ✓ **확인** | 방침: "We only provide **aggregated reports** to advertisers that don't reveal information about individual people." + 이름·이메일 등 식별 정보는 사용자 요청 없이는 광고주에 비공개 | 유지 |
| 18 | 제외 지역이 목적별 동의를 법으로 요구하는 관할과 겹친다 (38줄) | ⚠ **가정으로 적절히 표시됨** | EEA·스위스·영국 = GDPR / 스위스 revFADP / UK GDPR 관할. 겹치는 것은 사실. 나이지리아(NDPA 2023)도 동의 기반 | 선 긋기 **충분**. C-7 참조 |

---

## C. 수정 권고 (우선순위 순)

### C-1. [치명적] 14줄·16줄·20줄 — 인용문에서 단서절을 잘라냈고, 그래서 글의 뼈대가 되는 "역설"이 사실이 아님

본문 14줄:
> 그런데 같은 문서에는 이 문장도 **그대로 남아 있습니다**. "우리는 드라이브, 지메일, 구글 포토의 콘텐츠를 근거로 개인화 광고를 보여주지 않습니다."

**1차 출처 대조 결과(아카이브 직접 확인):**

| 버전 | 문장 |
|---|---|
| 2026-10-01 (직전) | "We don't show you personalized ads based on your content from Drive, Gmail, or **Photos**." |
| 2026-10-16 (현행) | "We don't show you personalized ads based on your content from Drive, Gmail, or **Google Photos**, **unless you choose to make data from these services available to other Google services that support personalized ads**." |

즉 **이번 개정에서 바뀐 것은 두 가지**입니다. (a) 새 문장이 들어왔고, (b) **기존 문장에 예외절이 붙었습니다.** 초고는 (b)를 보지 못했고, 그 결과 세 군데가 동시에 무너집니다.

- 14줄 "**그대로 남아 있습니다**" → 사실과 다름. 문장은 수정됐습니다.
- 7줄 excerpt "메일 내용으로 광고를 보여주지 않는다는 기존 문장도 **그대로 남아 있고요**" → 같은 오류. **excerpt도 함께 고쳐야 합니다.**
- 20~22줄 "그럼 앞의 두 문장은 어떻게 같이 참일 수 있을까요? / 광고를 고르는 쪽이 메일을 읽지 않기 때문입니다." → **구글이 같은 문장 안에서 이미 답을 적어 둔 것을, 그 답을 지운 뒤 저자가 다시 푸는 구조**가 됩니다. 독자가 원문을 열어 보면 글의 도입이 통째로 흔들립니다.

**권고:** 인용을 단서절까지 복원하고, 프레임을 "두 문장이 모순처럼 보인다"에서 **"한 문장이 조용히 반쪽이 됐다"**로 바꾸는 것이 사실에도 맞고 논지도 더 셉니다. 예시(문장은 저자 어투로 다시 쓰실 것):

> 같은 문서의 다른 문장도 같이 바뀌었습니다. 원래는 "우리는 드라이브, 지메일, 구글 포토의 콘텐츠를 근거로 개인화 광고를 보여주지 않습니다"에서 끝나던 문장인데요. 이번 개정으로 뒤에 한 마디가 붙었습니다. "여러분이 이 서비스들의 데이터를 개인화 광고를 지원하는 다른 구글 서비스에 쓸 수 있게 선택한 경우가 아니라면."
> 두 번째 문장이 첫 번째 문장을 받아 주는 구조입니다.

그리고 20~22줄의 질문은 "어떻게 같이 참일 수 있나"가 아니라 **"그러면 광고 쪽으로 실제로 넘어가는 것은 무엇인가"**로 바꾸면, 24~26줄의 메커니즘 설명(검증 결과 가장 정확한 대목)이 그대로 살아납니다.

- 출처: https://policies.google.com/privacy · https://policies.google.com/privacy/archive/20261001 · https://policies.google.com/privacy/archive

---

### C-2. [치명적] 34줄 — "출처의 침묵"이 사실이 아닙니다. 구글은 말했고, 답은 "남는다"입니다

본문 34줄:
> 이미 만들어져 있는 칸이 어떻게 되는지는 **구글의 공개 문서가 말하지 않습니다.**

구글 Gemini 앱 공식 도움말 "About personalization with Connected Apps"(support.google.com/gemini/answer/16836988)에 이렇게 적혀 있습니다.

> "**Disconnecting an app or deleting data in a connected app doesn't delete any data from Gemini Apps Activity.**"
> "That data can still be used for product improvement, including training generative AI models."
> "we train our generative AI models off of these summaries, excerpts, generated media, and **inferences**"
> "your Google Photos data is used to **infer your interests**"

초고가 "칸"이라고 부른 것이 구글 문서에서는 `inferences`·`insights`라는 이름으로 **그대로 등장**하고, 연결 해제 시 어떻게 되는지도 명시돼 있습니다. 안드로이드 어소리티·디지털트렌즈도 같은 취지로 "연결을 끊어도 Search Services History에 남을 수 있다"를 전했습니다.

**다만 이것은 저자의 논지를 깨는 것이 아니라 더 강하게 만듭니다.** "모르겠다"가 아니라 "구글이 남는다고 적어 뒀다"가 되니까요. 권고 방향:

> 그래서 내일 Personal Intelligence에서 지메일 연결을 끊으면, 그다음부터는 새 칸이 만들어지지 않습니다. 이미 만들어진 칸은 그대로 있고요. 구글 도움말에 그렇게 적혀 있습니다. 연결을 끊거나 연결된 앱에서 데이터를 지워도 Gemini 앱 활동에 저장된 데이터는 지워지지 않는다고요.

다만 **정확히 말하면 구글이 밝힌 것은 "활동 기록과 추론이 남는다"까지**이고, **그 추론이 광고 입찰 쪽 세그먼트로 넘어간 뒤 어떻게 되는지**는 여전히 공개 문서에 없습니다. 침묵을 지적하시려면 여기로 범위를 좁히셔야 안전합니다.

- 출처: https://support.google.com/gemini/answer/16836988 · https://support.google.com/gemini/answer/13594961 · https://www.androidauthority.com/google-personal-intelligence-privacy-3727111/

---

### C-3. [중요] 18줄 — 두 제품의 타임라인이 한 문장에 섞였습니다

본문 18줄은 주어를 "검색의 AI 모드"로 세워 놓고, 바로 다음 절에서 **Gemini 앱**의 2026-04 글로벌 확대와 그 제외 지역을 이어 붙였습니다. 실제 경과는 넷입니다.

| 일자 | 제품 | 내용 |
|---|---|---|
| 2026-01-22 | 검색 AI 모드 | Labs 실험, 미국·영어, AI Pro/Ultra 구독자, "strictly opt-in" |
| 2026-03-17 | 검색 AI 모드 | 미국 무료 사용자까지 개방 |
| 2026-04-14 | **Gemini 앱** | 글로벌 확대. 제외: EEA·스위스·영국(나이지리아는 현행 안내 페이지 기준) |
| 2026-05-19 (I/O) | **검색 AI 모드** | 약 200개국·98개 언어, 구독 불요. Gmail·Photos 연결, Calendar 예고 |

이 글의 핵심 인용문은 **"Search may process…"** 즉 검색 쪽입니다. 그러니 "한국도 대상"이라는 결론을 떠받치는 근거는 4월(Gemini 앱)이 아니라 **5월 I/O(검색 AI 모드 글로벌)**여야 논리가 맞습니다.

**권고:** "4월에 글로벌 베타로 넓어졌는데"를 **"1월에 미국에서 시작해 5월에 200개 가까운 나라로 넓어졌는데"**로 바꾸고, 제외 지역은 현행 안내 페이지 기준임을 전제로 그대로 쓰십시오. (4월 Gemini 앱 건은 생략해도 논지에 손실이 없습니다 — 스타일 가이드 2-C절 7의 "논지를 떠받칠 때만 본문에"에 부합.)

- 출처: https://blog.google/products-and-platforms/products/search/personal-intelligence-ai-mode-search/ · https://blog.google/products-and-platforms/products/search/search-io-2026/ · https://techcrunch.com/2026/03/17/googles-personal-intelligence-feature-is-expanding-to-all-us-users/ · https://9to5google.com/2026/04/14/gemini-personal-intelligence-global/ · https://gemini.google/overview/personal-intelligence/

---

### C-4. [중요] 40줄 — 제시한 두 경로 중 어느 쪽도 광고 개인화를 끄지 않습니다

본문 40줄:
> google.com/search-personalization 에서 **개인화 추천 자체를 끄거나** … 둘은 범위가 다릅니다. **앞은 개인화를 통째로 내리는 쪽**이고…

구글 공식 도움말(support.google.com/websearch/answer/17026260) 확인 결과:

- 적용 범위는 **Search·Maps·Shopping·Flights·Hotels·Translate·News**뿐입니다. "통째로"가 아닙니다.
- 같은 페이지가 **"다른 구글 서비스의 개인화는 끄지 않는다"**고 명시하고, 개인 설정 페이지로 따로 안내합니다.
- **광고는 단 한 번도 언급되지 않습니다.** 끄더라도 Search Services History나 계정 활동은 삭제되지 않는다고도 적혀 있습니다.
- 광고 개인화의 실제 스위치는 **My Ad Center**입니다. 개정된 방침도 문제의 Drive/Gmail/Photos 문장 **바로 앞 항목에서 My Ad Center를 가리킵니다.**

글의 제목이 "광고도 개인화"인데 독자에게 주는 두 경로에 **광고 스위치가 빠져 있는** 상태입니다. "그래서 무엇을 하면 되는가" 문단의 실효성 문제라 중요도를 높게 잡았습니다.

**권고:** 두 군데를 세 군데로 늘리거나, 두 경로의 성격을 다시 적으십시오.
- `google.com/search-personalization` → 검색 계열 서비스의 개인화 추천을 끄는 쪽(광고와 별개)
- Personal Intelligence 설정(또는 같은 페이지의 Connected Content Apps) → **데이터가 넘어가는 통로 자체를 막는 쪽. 이 글의 맥락에서는 이쪽이 핵심**
- My Ad Center → 광고 개인화 자체를 끄는 쪽

- 출처: https://support.google.com/websearch/answer/17026260 · https://support.google.com/My-Ad-Center-Help/answer/12155451 · https://policies.google.com/privacy

---

### C-5. [경미] 18줄 — 연결 가능한 앱 목록

"지메일이나 구글 포토"는 예시 어법("~이나")이라 틀린 서술은 아닙니다. 다만 **바로 네 줄 위에서 Drive가 포함된 문장을 인용**해 놓고 여기서 Drive가 사라져, 독자가 "드라이브는 왜 빠졌지?" 하게 됩니다. 현행 기준은 Gemini 앱이 Gmail·Photos·Search·YouTube, 검색 AI 모드가 Gmail·Photos(+Calendar 예고)이고, 해제 UI는 "Google Workspace"(지메일·드라이브 포괄)·"Google Photos"로 묶여 있습니다.

**권고:** "지메일이나 구글 포토 같은 앱을 연결해 두면" 정도로 열어 두거나, "해제 화면에는 Workspace와 포토 두 덩어리로 묶여 있습니다" 한 마디를 40줄 쪽에 보태면 깔끔합니다.

- 출처: https://gemini.google/overview/personal-intelligence/ · https://www.androidauthority.com/google-personal-intelligence-privacy-3727111/

---

### C-6. [경미] 18줄 — "한국은 빠진 쪽이 아니고요"

구글이 한국을 명시한 문서는 없습니다. **제외 목록에 없다 + 약 200개국 포함**에서 나온 추론입니다. 사실로 단정해도 무리는 아니지만, 저자가 최근 글에서 쓰시는 사정거리 표기와 맞추려면 "제외 목록에 한국은 없습니다" 같은 **사실 진술형**이 더 정확합니다. (지금 문장은 "구글이 한국을 대상이라고 밝혔다"로 읽힐 여지가 조금 있습니다.)

---

### C-7. [확인 — 수정 불필요] 38줄 선 긋기 평가

요청하신 "제외 지역 = 목적별 동의 법제" 가정의 선 긋기는 **충분합니다.** 근거:

1. 사실과 가정의 경계를 **36줄에서 한 줄 단락으로 명시적으로 그었습니다**("확인된 사실은 여기까지입니다. 아래는 제 가정이고요"). 독자가 놓칠 수 없는 위치입니다.
2. 괄호로 **"(구글이 법 때문이라고 밝힌 것은 아닙니다.)"**를 달아 귀인을 차단했습니다.
3. 문단 끝에서 **"반드시 그렇게 흘러간다는 예측은 아닙니다"**로 한 번 더 닫았습니다.
4. 사실관계도 맞습니다 — EEA(GDPR)·영국(UK GDPR)·스위스(revFADP) 모두 목적 변경 시 별도 법적 근거를 요구하는 관할입니다.

다만 **나이지리아를 근거 목록에서 뺀 선택은 그대로 두시길** 권합니다. 본문은 18줄에서 네 곳을 다 적고 38줄에서 셋만 근거로 쓰는데, 이것이 오히려 "겹친다"는 주장을 과장하지 않는 정직한 처리입니다. (나이지리아 NDPA 2023도 동의 기반이지만, 넷을 다 묶으면 가정이 더 세 보이는 쪽으로 기울 수 있습니다.)

---

### C-8. [참고] 팩트 카드의 사정거리 항목 하나는 보강이 필요합니다

팩트 카드 33줄 "구글은 지메일 받은편지함이나 포토 라이브러리로 **모델을 직접 학습시키지는 않는다**"는 맞습니다("Gemini does not train generative AI models directly on your Gmail inbox, Drive, Contacts, Calendar or other Workspace apps"). **그런데 같은 페이지가 바로 이어서 "we train our generative AI models off of these summaries, excerpts, generated media, and inferences"라고 적습니다.** 즉 원문으로는 안 하지만 **거기서 뽑은 요약·발췌·추론으로는 합니다.**

본문은 학습 이야기를 꺼내지 않으므로 **초고의 오류는 아닙니다.** 다만 이 대조(원문 아님 / 파생물 맞음)는 초고 30~32줄의 논지와 정확히 같은 구조라, 쓰시려면 근거가 이미 확보돼 있다는 뜻으로 적어 둡니다.

- 출처: https://support.google.com/gemini/answer/16836988

---

## D. 종합 판정

- [ ] 발행 가능
- [x] **수정 후 발행** — 치명적 2건(C-1, C-2) + 중요 2건(C-3, C-4) 반영 후
- [ ] 발행 보류

**시점 규율 위반은 없습니다.** 메커니즘 설명부(24~32줄)와 광고주 관련 서술(26줄)은 1차 출처와 정확히 일치하며, 이 글에서 가장 단단한 부분입니다. 가정의 선 긋기(38줄)도 요청하신 기준에서 충분합니다.

문제는 **글의 앞머리와 꼬리**입니다. 도입(C-1)은 구글이 같은 문장 안에서 이미 답한 것을 못 본 채 역설로 세웠고, 결론 직전(C-2)은 구글이 명시적으로 답해 둔 것을 침묵이라고 적었습니다. **두 건 모두 고치면 논지가 약해지는 게 아니라 세집니다** — "모순처럼 보이는 두 문장"보다 "조용히 예외절이 붙은 한 문장"이 더 날카롭고, "말하지 않는다"보다 "남는다고 적어 두었다"가 더 무겁습니다.

수정 후 `scripts/lint-post.mjs` 재실행이 필요합니다(본문 변경 분량이 큼).

---

## 확인한 출처 전체

**1차(구글 공식)**
- https://policies.google.com/privacy — 현행, Effective October 16, 2026
- https://policies.google.com/privacy/archive/20261001 — 직전 버전(단서절 없음 확인)
- https://policies.google.com/privacy/archive — 버전 목록
- https://gemini.google/overview/personal-intelligence/ — 제외 지역·연결 앱·계정 조건·"coming months"
- https://blog.google/products-and-platforms/products/search/personal-intelligence-ai-mode-search/ — 2026-01-22
- https://blog.google/products-and-platforms/products/search/search-io-2026/ — 2026-05-19
- https://support.google.com/gemini/answer/16836988 — Connected Apps 개인화(연결 해제 시 처리·inferences)
- https://support.google.com/gemini/answer/13594961 — Gemini Apps Privacy Hub
- https://support.google.com/websearch/answer/17026260 — Personalized Recommendations in Search services
- https://support.google.com/My-Ad-Center-Help/answer/12155451 — 광고 맞춤설정
- https://support.google.com/google-ads/answer/2497941 — 오디언스 세그먼트 분류

**2차(언론)**
- https://thehackernews.com/2026/10/google-says-gmail-and-photos-data.html (2026-10-24)
- https://www.androidauthority.com/google-personal-intelligence-privacy-3727111/ (최초 보도)
- https://www.digitaltrends.com/computing/google-changes-its-workspace-privacy-promise-on-ads-and-opting-out-limits-personal-intelligence/
- https://9to5google.com/2026/04/14/gemini-personal-intelligence-global/
- https://techcrunch.com/2026/03/17/googles-personal-intelligence-feature-is-expanding-to-all-us-users/
- https://cyberinsider.com/google-adds-gmail-photos-drive-ad-targeting-exception-to-privacy-policy/
