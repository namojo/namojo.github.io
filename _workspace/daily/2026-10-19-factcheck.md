# Fact Check Report: 2026-10-19-celestica-ds6005-cpo-copper-dsp

검증일: 2026-10-18 (KST 기준 발행 예정일 2026-10-19)
대상: `/home/user/namojo.github.io/_posts/2026-10-19-celestica-ds6005-cpo-copper-dsp.md`
팩트 카드: `/home/user/namojo.github.io/_workspace/daily/2026-10-19-brief.md`

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-10-19 09:00 +0900

| 본문에 인용된 사건 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| 셀레스티카 DS6005 발표 "10월 12일 OCP 글로벌 서밋" | 2026-10-12 08:00 EDT (TORONTO, GLOBE NEWSWIRE) | 7일 전 ✓ | 유지 |
| OCP Global Summit 2026 (산호세 컨벤션센터) | 2026-10-12 ~ 10-15 | 종료됨 ✓ | 유지 |
| 브로드컴 TH6-Davisson (본문은 "칩을 씁니다"로만 언급, 날짜 없음) | 발표 2025-10-08 | 1년 전 ✓ | 유지 |
| 브로드컴이 내세운 메타 CPO 신뢰성 사례 | 2025-10-01 발표 | 이전 ✓ | 유지 |

- **사후 시점 표현 검사:** "훗날", "결국", "돌이켜보면" 등 미래 시점 누설 표현 **없음**. 마지막 문단의 "1년치 데이터가 나오기 전까지는 판단을 미뤄 두려고 합니다"는 발행 시점에서 앞을 보는 서술이므로 정상.
- **용어 시점성:** CPO, ELSFP, Tomahawk 6-Davisson, ORv3, MMC-16, SONiC 모두 2026-10 시점에 존재. 본문에 미래 제품·미래 표준 언급 없음.
- **판정: 시점 규율 위반 없음.**

---

## B. 사실 검증

| # | 본문 주장 | 상태 | 근거 | 조치 |
|---|---|---|---|---|
| 1 | "10월 12일 OCP 글로벌 서밋에서 DS6005를 내놨다" | ✓ 확인 | 보도자료 dateline "TORONTO, Oct. 12, 2026"(StockTitan 08:00 EDT), Converge Digest 10/12자 기사. OCP Global Summit 2026은 10/12~15 산호세 | - |
| 2 | "102.4Tbps 논블로킹" | ✓ 확인 | Celestica 제품 페이지·보도자료, StorageReview("102.4 Tbps, non-blocking") | - |
| 3 | "1.6TbE 광포트 64개" | ✓ 확인 | Celestica 제품 페이지: 64 x 1.6TbE (16 x 4x MMC-16) | - |
| 4 | "1.5OU 높이" | ✓ 확인 | Celestica 제품 페이지: 1.5 OU, ORv3-HPR | - |
| 5 | "브로드컴 Tomahawk 6-Davisson 칩" | ✓ 확인 | Celestica 제품 페이지에 "Broadcom TH6-Davisson" 명기. 품번 BCM78919 | - |
| 6 | "꽂았다 뺐다 하던 광모듈이 하나도 없다" | ✓ 확인 | 데이터 전송용 전면 플러거블 트랜시버 없음(MMC-16 광커넥터 + ELSFP). 단 100GbE QSFP28 **관리 포트 1개**는 존재 | 아래 C-5 참조 |
| 7 | "공랭 옵션도 없습니다. 수랭만 됩니다" | ✓ 확인 | Celestica "fully liquid cooled", StorageReview "liquid cooling as the only cooling option" | - |
| 8 | "1.6T 포트는 레인 하나에 200G" | ✓ 확인 | TH6 SerDes 212.5Gb/s PAM4 × 8레인 = 1.6T | - |
| 9 | "초당 1천억 번 넘게 파형을 바꾸는 속도" | ✓ 확인 | 212.5Gb/s PAM4 = 약 106.25 GBd ≈ 1.06×10^11 symbol/s. "1천억 번 넘게"는 자릿수 정확 | - |
| 10 | "25cm 전기 구간 손실 30dB 안팎" | ✓ 확인(어림) | IEEE 802.3 B400G 자료(lyubomirsky, 2021): 200G/레인 전기 채널 IL ~30dB @53GHz, 시뮬레이션 19~33dB. 본문이 "업계에서 도는 어림"으로 유보 | - |
| 11 | "1센티미터면 4dB 수준" | ⚠ 근거 약함 + **내부 정합성 문제** | 출처는 MapYourTech 추정(유료 구간이라 원문 수치 재확인 불가). 25cm=30dB(=1.2dB/cm)와 1cm=4dB는 cm당 비율이 3배 이상 어긋남 — 두 수치는 '트레이스 cm당 손실'이 아니라 '아키텍처별 채널 전체 손실'(커넥터·비아·패키지 포함)로 읽어야 성립 | C-2: 어느 쪽 의미인지 드러나게 재서술 권고 |
| 12 | "30dB면 천 분의 일" | ✓ 확인 | 전력비 10^(30/10)=1000. 삽입손실은 전력 기준이므로 맞음(진폭 기준이면 약 1/31.6) | - |
| 13 | "800G 모듈 하나가 15W쯤, 그중 DSP 6~7W" | ✓ 확인(3자 출처) | MapYourTech: 플러거블 800G 모듈 15~16W, DSP 단독 6~7W. APNIC도 플러거블 약 15W | - |
| 14 | "1.6T로 가면 12~14W" | ⚠ 근거 약함(단일 추정) | DSP 단독 12~14W를 명시한 1차 출처 확인 못함. 다만 Lumentum 1.6T 2xDR4 OSFP 모듈 전체 typical 22W, TRO(수신 DSP 제거) 16W → DSP 몫 10W 이상은 정합적. 본문이 "수치가 돌아요"로 유보 | 유보 유지 시 허용 |
| 15 | "스위치 다이 옆에 6.4Tbps 광엔진 16개" | ✓ 확인 | ServeTheHome: "sixteen of Broadcom's 6.4Tbps Davisson DR optical engines", 브로드컴 보도자료. 16×6.4T=102.4T 산술 일치 | - |
| 16 | "브로드컴 수치로 800G 포트 15W → 5.5W" | ⚠ **세대 불일치** | 5.5W는 브로드컴 **1세대 CPO(TH5-Bailly, 100G/레인)** 기준 수치(APNIC, The Next Platform — TNP는 "8×100G 레인 기준, 직전 Humboldt 대비 14.1% 절감"이라고 명시). DS6005가 쓰는 TH6-Davisson(200G/레인)에 대한 브로드컴 공식 주장은 "광 인터커넥트 전력 약 70% 절감"이고, TNP는 신세대 800G 환산 약 3.5W를 보도. 숫자 자체는 실재하지만 **이 제품의 수치가 아님** | C-1: "이전 세대 CPO에서" 한정 추가 (필수) |
| 17 | "레이저는 전면 패널에 따로, 현장 교체형 외장 레이저 모듈 16개" | ✓ 확인 | Celestica 제품 페이지 "16 ELSFP interfaces", StorageReview "16 external ELSFP laser modules, field-replaceable" | - |
| 18 | "레이저는 온도가 오르면 발진 파장이 길어진다" | ✓ 확인 | III-V 반도체 밴드갭의 온도 감소 → 적색편이. DFB 기준 약 0.08~0.1nm/°C, 실리콘 포토닉스 필터 레이저 약 0.07nm/°C(특허 수치). 업계 공통 물리 | - |
| 19 | "레이저는 이 조립체에서 가장 잘 고장 나는 부품" | ⚠ 업계 통설(출처 다수, 상당수가 이해관계자) | Lumentum 백서·CPO 특허(US11924593: "a failure rate which is significantly higher than the failure rate of other components of the switch")·Lightwave 등이 동일 서술. 다만 공개된 계량 비교 데이터는 없음 | 본문이 단정형. C-4 참조(경미) |
| 20 | "수백 와트를 뿜는 스위치 칩" | ⚠ 수치 미공개 | 브로드컴은 TH6 소비전력을 공개하지 않음. 102.4T급 ASIC이 수백 W라는 것은 업계 통념 범위이며 자릿수 오류는 아님 | 유지 가능(C-4에서 완화 옵션 제시) |
| 21 | "셀레스티카는 전력도 지연 수치도 내놓지 않았다" | ✓ 확인 | 보도자료·제품 페이지 모두 정성적 표현만("reduce link power consumption", "ultra-low latency"). StorageReview·Converge Digest·HostingJournalist가 공통 지적 | - |
| 22 | "자사 블로그에도 효율 이득은 구현 방식과 비교 대상에 달렸다고 적어 뒀고요" | ⚠ **출처 귀속 과잉** | 이 문장은 Converge Digest가 "동반 기술 블로그의 입장"을 **의역**한 것이며, 셀레스티카 블로그 원문을 직접 확인하지 못함. 제품 페이지에는 그런 유보가 없고, 유일한 비교 기준 명시는 지연에 붙은 "over retimed optics"뿐 | C-3: "블로그에 적어 뒀다"는 직접 인용 어감을 완화 (권고) |
| 23 | "브로드컴이 신뢰성 사례로 내세운 메타의 무장애 기록이 이전 세대인 400G 포트 수치" | ✓ 확인(단, 조건 누락) | 브로드컴 2025-10-01 발표 + Converge Digest: "누적 100만 **400G 환산 포트 디바이스-시간**, 링크 플랩 0건". 400G 세대라는 지적은 정확. 다만 이는 **메타의 고온 실험실 시험**이지 운영 환경 기록이 아님 | C-2: "실험실" 조건 추가 권고 |
| 24 | "플러거블은 광모듈 하나 죽으면 30초짜리 핫스왑" | ? 수사적 어림 | 핫스왑이 초 단위인 것은 사실이나 "30초"에 출처는 없음 | 수사로 허용. 신경 쓰이면 "몇십 초짜리" | 
| 25 | "CPO에서는 교체 단위가 102.4T 스위치 한 대" | ⚠ 저자 가정(명시됨) | 본문이 "예측이라기보다 가정에 가까운데요"로 선행 유보. 광엔진이 패키지에 집적되어 현장 교체 불가인 것은 사실 | - |

### 이미지·크레딧

| 항목 | 상태 | 비고 |
|---|---|---|
| 본문 중간 이미지 `/images/inline/pluggable-optical-transceivers.jpg` | ✓ 파일 존재 | 1200×630. Commons "X2 vs SFP+ optical transceiver.jpg", 저작자 Martijn Boer, Public Domain — `_workspace/image-credits-2026.md` 148행과 일치 |
| 캡션의 방향 설명("오른쪽 끝 금색 단자=전기, 왼쪽 검은 쪽=광섬유") | ✓ 확인 | 이미지 실물 확인 결과 아래쪽 X2 모듈은 우측에 금색 엣지 커넥터, 좌측에 광 포트. 위쪽 SFP+도 좌측에 청색 LC. 설명 정확 |
| 캡션 세대 | ⚠ 경미 | 사진 속 모듈은 라벨상 10G급(SFP+ "6.25G 1310nm", X2 "10G 850nm"). 본문은 800G/1.6T DSP를 논하므로 독자가 동일 세대로 오해할 여지 |
| 커버 `coverImage: ""` | ✓ 정상 | 2026-10월 발행분 20편 모두 동일. 빌드가 슬러그 파일명(`covers/celestica-ds6005-cpo-copper-dsp.jpg`)으로 매칭하는 레포 관례 |
| 하단 커버 크레딧 줄 | ✓ 확인 | "Wikimedia Commons, Scottkipp"가 image-credits 147행(Commons "Fibre Channel Director.jpg", Scottkipp, CC BY-SA 4.0)과 일치. 커버 실물도 광섬유가 꽂힌 데이터센터 스위치 섀시로 캡션과 부합 |

---

## C. 수정 권고 (우선순위 순)

**1. [중대 — 발행 전 수정 권장] 25줄: 5.5W의 세대 귀속**

> 현재: "브로드컴이 내놓은 수치로는 800G 포트 하나에 15W 쓰던 것이 5.5W 선으로 내려갑니다."

5.5W는 TH5-Bailly(100G/레인) 1세대 CPO 수치다. DS6005의 TH6-Davisson에 대한 브로드컴 공식 수치는 "광 인터커넥트 전력 약 70% 절감"이며, 업계 보도는 신세대 800G 환산 약 3.5W까지 내려간다고 본다. 29줄의 "칩 공급사가 밝힌 숫자지 이 제품을 재서 나온 값이 아닙니다"가 일부 방어를 하지만, **세대가 다르다는 사실까지는 가리지 못한다.**

제안 A(수치 유지 + 한정):
> "브로드컴이 **이전 세대 CPO에서** 내놓은 수치로는 800G 포트 하나에 15W 쓰던 것이 5.5W 선으로 내려갑니다."

제안 B(이번 세대 공식 수치로 교체):
> "브로드컴이 내놓은 수치로는 광 인터커넥트가 쓰는 전력이 플러거블 대비 70%쯤 줄어듭니다. 이전 세대 기준으로는 800G 포트 하나에 15W 쓰던 것이 5.5W 선이었고요."

**2. [중] 31줄: 메타 기록의 조건 누락**

> 현재: "브로드컴이 신뢰성 사례로 내세운 메타의 무장애 기록이 이전 세대인 400G 포트 수치라는 점 정도고요."

"무장애 기록"은 운영 환경 실적처럼 읽히지만, 실제로는 메타의 **고온 실험실 시험**에서 누적 100만 400G 환산 포트-시간 동안 링크 플랩 0건이다. 저자가 세우려는 논지(근거가 약하다)를 오히려 강화하는 사실이므로 넣는 편이 이득이다.

제안:
> "브로드컴이 신뢰성 사례로 내세운 메타의 무플랩 기록이 **고온 실험실에서 돌린 이전 세대 400G 포트 수치**라는 점 정도고요."

**3. [중] 29줄: 셀레스티카 블로그 인용의 귀속**

> 현재: "자사 블로그에도 효율 이득은 구현 방식과 비교 대상에 달렸다고 적어 뒀고요."

이 문장은 Converge Digest가 셀레스티카 기술 블로그의 입장을 요약한 **의역**이고, 블로그 원문을 직접 확인하지 못했다. 공개된 제품 페이지에는 그런 유보가 없다(유일한 비교 기준은 지연에 붙은 "retimed optics 대비"). "적어 뒀다"는 직접 인용 어감을 낮추는 편이 안전하다.

제안 A:
> "셀레스티카 쪽 설명도 효율과 지연 이득이 구현 방식과 비교 기준에 달려 있다는 선에 머뭅니다."

제안 B(가장 안전, 공식 문구만 사용):
> "제품 설명에서 지연이 줄어든다고 할 때의 비교 대상도 '리타임드 광모듈'이라고만 적혀 있고요."

**4. [경미] 18줄: 손실 수치의 단위 혼동**

> 현재: "25센티미터쯤 되는 전기 구간의 손실이 30dB 안팎, 1센티미터면 4dB 수준입니다."

25cm=30dB는 cm당 1.2dB인데 바로 뒤에 1cm=4dB가 와서, 비율로 읽으면 어긋난다(둘은 '아키텍처별 채널 전체 손실'이라 cm당 비율로 환산할 수 없다). 한 어절만 넣으면 해소된다.

제안:
> "...전기 구간의 손실이 30dB 안팎입니다. 커넥터와 비아까지 합친 값이고요. **구간이 1센티미터 수준으로 짧아지면 같은 기준으로 4dB 안팎까지 내려갑니다.**"

**5. [경미] 27줄: 공랭 삭제 원인의 단정**

> 현재: "패키지가 뜨거워진 만큼 열을 빼낼 여유도 없어졌고요. 공랭 옵션이 아예 사라진 게 그래서입니다."

수랭 전용인 것은 사실이고 인과도 합리적이지만, 셀레스티카가 그 이유를 밝힌 적은 없다(제품 페이지는 "온도 안정성과 신뢰성 개선, 랙 밀도 증가"로만 설명). "그래서일 겁니다" 정도로 한 글자만 낮추면 충분하다.

**6. [경미] 12줄: "광모듈이 하나도 없어요"의 예외**

데이터 전송용 플러거블은 실제로 0개지만 전면에 100GbE QSFP28 **관리 포트**가 하나 있다. 본문 맥락상 데이터 포트 이야기임이 분명하므로 수정 없이 넘어가도 되나, 엄밀히 쓰려면 "데이터가 지나는 자리에는 꽂았다 뺐다 하는 광모듈이 하나도 없어요"로 한 어절 보강 가능.

**7. [경미] 23줄: 사진 세대 표시**

캡션의 모듈은 10G급 SFP+·X2다. 본문은 800G/1.6T DSP를 논하므로, 캡션에 "지금 쓰이는 800G·1.6T 모듈도 구조는 같습니다" 같은 한 문장을 덧대면 오해를 막을 수 있다. 사실 오류는 아니다.

**8. [참고] 20줄의 "1.6T DSP 12~14W"**

1차 출처를 찾지 못했다. 다만 본문이 "수치가 돌아요"로 유보하고 있고, 1.6T 모듈 전체 typical 22W(Lumentum)와 정합적이어서 **유보 표현을 유지하는 조건으로 허용**한다. 유보를 걷어내지 말 것.

---

## D. 종합 판정

- [x] **수정 후 발행** — 치명적 오류 없음

**치명적 오류(날짜 오기·존재하지 않는 제품/발언·자릿수 오류·시점 붕괴): 없음.**

- 날짜(2026-10-12), 장소(OCP Global Summit 2026), 제품명(DS6005), 칩명(Tomahawk 6-Davisson/BCM78919), 핵심 스펙(102.4Tbps, 64×1.6TbE, 1.5OU, 수랭 전용, ELSFP 16개, 6.4T 광엔진 16개) 전부 1차·2차 출처로 확인.
- 자릿수 검증 통과: 16×6.4T=102.4T, 106GBd≈"1천억 번 넘게", 30dB=1/1000.
- 시점 규율 위반 없음.
- 반드시 손봐야 할 것은 **C-1(5.5W의 세대 귀속)** 하나다. C-2·C-3은 저자의 논지를 오히려 강화하므로 함께 반영을 권한다.

## 출처

- https://www.stocktitan.net/news/CLS/celestica-introduces-the-ds6005-data-center-switch-with-co-packaged-xus2xy0x0iuy.html (보도자료 dateline)
- https://cls.celestica.com/hardware-platforms/ds6005/ (제품 스펙 1차)
- https://www.storagereview.com/news/celestica-ds6005-102-4tbps-co-packaged-optics-1-5ou-liquid-cooled-orv3-switch
- https://convergedigest.com/celestica-ds6005-1024t-co-packaged-optics-switch/
- https://www.opencompute.org/events/ocp-summit/2026-ocp-global-summit/ (행사 일정)
- https://www.servethehome.com/broadcom-tomahawk-6-davisson-102-4t-switch-with-co-packaged-optics-shipping/ (6.4T 엔진 16개)
- https://convergedigest.com/broadcom-validates-1m-flap-free-cpo-port-hours-in-meta-testing/ (메타 400G 100만 시간)
- https://www.nextplatform.com/2025/10/17/the-third-time-will-be-the-charm-for-broadcom-switch-co-packaged-optics/ (5.5W의 세대 귀속)
- https://blog.apnic.net/2025/05/07/co-packaged-optics-a-deep-dive/ (5.5W vs 15W)
- https://grouper.ieee.org/groups/802/3/B400G/public/21_03/lyubomirsky_b400g_01_210329.pdf (200G/레인 채널 IL ~30dB @53GHz)
- https://www.lumentum.com/en/blog/reliability-becomes-new-currency-how-cpo-rewriting-laser-performance (레이저 고장률·외장 레이저)
- https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11924593 (레이저 고장률 서술)
- https://commons.wikimedia.org/wiki/File:X2_vs_SFP%2B_optical_transceiver.jpg (본문 이미지 저작자·라이선스)
