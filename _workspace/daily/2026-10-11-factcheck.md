# Fact Check Report: cloudflare-deno-node-compat-gravity-well

- **대상 초고:** `_posts/2026-10-11-cloudflare-deno-node-compat-gravity-well.md`
- **팩트 카드:** `_workspace/daily/2026-10-11-brief.md`
- **검증 일시:** 2026-10-10 (KST), 1차 출처 재확인 완료
- **결론:** **발행 가능** (치명적 오류 없음. 아래 [경미] 4건은 선택적 보정)

---

## A. 시점 일관성

- **발행일:** 2026-10-11 09:00 +0900
- 본문에 등장하는 모든 사건이 발행일 이전이다. 발행일 이후 사건·미래 모델 언급 없음. 사후 시점 표현("훗날 드러나듯" 등) 없음.

| 본문 언급 | 실제 일자 | 발행일 대비 | 판정 |
|---|---|---|---|
| Node.js 공개 2009 | 2009 (JSConf EU) | 이전 | 유지 |
| JSConf EU 강연 「10 Things I Regret About Node.js」 2018 | 2018-06 | 이전 | 유지 |
| Deno 1.0 "2020년 5월" | 2020-05-13 | 이전 | 유지 |
| Deno 2.0 "2024년 10월" | 2024-10-09 | 이전 | 유지 |
| celld "올해 8월" | 2026-08-05 (v0.1.0) | 이전 | 유지 |
| 클라우드플레어-Deno 발표 "현지시각 10월 9일" | 2026-10-09 (양사 블로그 datePublished) | 이전 | 유지 |
| 달의 해커뉴스 댓글 "발표 당일" | 2026-10-09T16:51:12Z | 이전 | 유지 |

- 미국 현지 10/9 = KST 10/10. 발행일(10/11)과 "현지시각 10월 9일" 표기는 서로 모순되지 않는다. **시점 문제 없음.**

---

## B. 사실 검증

| # | 본문 주장 | 상태 | 근거 |
|---|---|---|---|
| 1 | 발표 주체가 클라우드플레어·Deno 양사, 현지시각 10월 9일 | ✓ 확인 | blog.cloudflare.com/deno-joins-cloudflare/ (JSON-LD datePublished 2026-10-09, 라이언 달·켄턴 바르다 공동 서명) / deno.com/blog/cloudflare (2026-10-09, 라이언 달) |
| 2 | "Deno 팀 **전원**이 클라우드플레어에 합류" | ✓ 확인 | Deno 블로그: "Today we're announcing that **the entire Deno team** is joining Cloudflare to take that work further." (클라우드플레어 글은 "The Deno team is joining Cloudflare"로 '전원' 없음 → 전원 표현은 Deno 글이 근거) |
| 3 | 1년간 버그 수정·보안 업데이트 월간 릴리스, 그 뒤 공식 개발 종료 | ✓ 확인 | Deno 블로그: "We will support the Deno runtime for another year with monthly releases containing bug fixes and security updates." / "After that year we will end our development of the Deno runtime." |
| 4 | "라이선스는 MIT 그대로고 코드도 열린 채 남습니다" | ✓ 확인(출처 주체 유의) | 두 **블로그 본문에는 MIT 문구가 없다**. Deno 블로그는 "Deno will remain open source, and we welcome others who want to continue its development."까지. **MIT 명시는 달의 해커뉴스 댓글** "Deno stays MIT-licensed"가 근거(HN 50023277). 사실로 틀린 곳은 없음 |
| 5 | Deno Deploy 6개월 뒤 종료, 유료 고객 Workers 이전 지원 | ✓ 확인 | Deno 블로그: "Deno Deploy will continue operating for six months before shutting down." / "We will provide migration support for paying customers moving to Cloudflare Workers." |
| 6 | JSR 계속 운영, 인프라만 클라우드플레어로 | ✓ 확인 | Deno 블로그: "JSR will continue operating, with its infrastructure moving to Cloudflare." (달의 HN 댓글 50022?: "JSR keeps running - the infrastructure is moving to CF"와도 일치) |
| 7 | "거래 조건은 공개되지 않았어요" | ✓ 확인 | 양사 글 모두 금액·조건 미공개. 팩트 카드의 2,600만 달러 누적 투자금(2차 출처)은 본문 미사용 — 올바른 판단 |
| 8 | 블록인용(달의 해커뉴스 댓글) 한국어 번역 | ✓ 확인 | HN 댓글 objectID 50023277, author `rough-sea`, 2026-10-09T16:51:12Z, 스레드 50019911("Cloudflare acquires Deno", 1,331 포인트·686 코멘트). 축자 원문 7개 구간 전부 일치 확인. 상세는 아래 C-1 |
| 9 | 2018년 JSConf EU 강연 제목 「10 Things I Regret About Node.js」 | ✓ 확인 | 제목 표기 정확(JSConf EU 2018, 2018-06). 본문은 "10가지"라고 항목 수를 **단정하지 않고** 제목으로만 인용하고, 목록도 "~같은 것들이었어요"로 열거를 열어 두었다 → 팩트 카드의 주의사항 준수 |
| 10 | 후회 목록에 보안 모델(패키지의 파일시스템·네트워크 전면 접근), node_modules, package.json, GYP | ✓ 확인 | 강연 요약 다수 교차(changelog.com/news/Lk6n, dev.to/nickytonline/10-things-i-regret-about-nodejs, tildes.net/~comp/1v8). 4개 항목 모두 실제 강연 항목 |
| 11 | Deno 1.0의 성격(권한 기본 차단, URL 모듈, 타입스크립트 실행), 2020년 5월 | ✓ 확인 | Deno 1.0 2020-05-13 |
| 12 | Deno 2.0(2024년 10월): package.json·node_modules 수용, `npm:` 지정자, **200만 개가 넘는** npm 모듈, npm 워크스페이스 | ✓ 확인 | deno.com/blog/v2.0 (2024-10-09): "Native support for package.json and node_modules", "`npm:` specifiers", "you can access **over 2 million npm modules** in Deno", "also understands npm workspaces" |
| 13 | celld — 올해 8월 공개, Rust 단일 바이너리 | ✓ 확인 | 클라우드플레어 블로그 내 달의 문장: "one binary, written in Rust, with object storage as its only external service dependency". 공개 시점 2026-08-05(v0.1.0) — 2차 출처(flaviocopes.com/celld/ 2026-08-07, xenospectrum) 교차. 본문은 "올해 8월"로만 적어 안전 |
| 14 | celld가 Durable Objects를 자체 인프라에서 돌리는 구현 | ✓ 확인 | 클라우드플레어 블로그(워커스·Durable Objects를 자체 호스팅·확장성 전제로 구현), github.com/denoland/celld README |
| 15 | Durable Object마다 자체 SQLite + S3 호환 버킷 복제 | ✓ 확인(범위 유의) | README: 셀마다 SQLite, LTX 복제 포맷, 장기 상태는 **S3 호환·GCS·Azure Blob** 버킷. "S3 호환"만 적은 것은 좁은 표기이나 오류는 아님 |
| 16 | 노드 간 조정은 버킷의 compare-and-swap 연산으로만 | ⚠ 용어만 근거 약함 | README는 "conditional bucket write gives a node the ownership of a cell"·"bucket leases"·GCS의 generation precondition으로 서술. **개념은 동일하나 1차 출처는 'compare-and-swap'이라는 용어를 쓰지 않는다.** 달의 HN 댓글 "depending only on object storage for coordination and persistence"가 '버킷만으로 조정'은 뒷받침 |
| 17 | 컨트롤 플레인도, 합의 프로토콜도, 멤버십 서비스도 없다 | ✓ 확인 | README: "no serving control plane or consensus service", 플릿에 "membership protocol, failure detector, or consensus service" 불필요 |
| 18 | 달이 celld를 "파일시스템이나 네트워크를 다루는 조금 다른 API가 아니라 서버 개발의 완전히 새로운 모델"이라고 설명 | ✓ 확인 | HN 댓글 축자: "It is not just a slightly different API to interact with the file system or network - it's an entirely new model for server development." (※ 이 문장은 블로그가 아니라 HN 댓글 출처 — 본문이 출처를 블로그로 특정하지 않아 문제 없음) |
| 19 | 바르다: 달과 버트 벨더가 celld의 코드·아이디어를 workerd로 되가져와 workerd 자체 호스팅을 정식 지원 경로로 만드는 일을 이끈다 | ✓ 확인 | 클라우드플레어 블로그: "Ryan and Bert will be leading a new effort to make workerd self-hosting a first-class supported way…", "merging code and ideas from celld back into workerd" |
| 20 | 바르다: 오픈소스로 탈출구를 주는 것이 좋은 사업 | ✓ 확인 | "It turns out, being open source and giving people an escape hatch is *good business*." |
| 21 | 바르다: 쇼피파이 같은 고객은 오픈소스가 아니었다면 애초에 계약하지 않았을 것 | ✓ 확인 | "Those customers would never have signed with us in the first place if we hadn't been open source." + 2022년 Workers for Platforms 제안 맥락에서 쇼피파이 실명 등장 |
| 22 | "두 발표문 어디에도 Fresh와 Deno Subhosting의 거취는 적혀 있지 않습니다" (부재 주장) | ✓ 확인 | 양사 글 본문 모두 두 제품 미언급. deno.com 쪽은 사이트 내비게이션·푸터 링크에만 등장(본문 아님) → 부재 주장 성립 |
| 23 | "Node.js가 나온 뒤 17년" | ✓ 확인 | 2009 → 2026 = 17년 |
| 24 | "달이 공동의 결정이고 자신도 동의한다고 먼저 밝혔다" / "누군가 이어서 끌고 가 준다면 좋겠다" | ✓ 확인 | HN 축자: "It's a joint decision and I agree with it." / "If people want to carry it forward, I'd like that." |
| 25 | 커버 크레딧 "라이언 달, YUIConf 2010(캘리포니아 서니베일) — Wikimedia Commons, David Calhoun" | ✓ 확인 | Commons File:Ryan Dahl.jpg — 촬영 David Calhoun, 설명 "Ryan Dahl speaking at YUIConf 2010 in Sunnyvale (California, United States)", 2010-11-08, CC BY 2.0 |
| 26 | 본문 중간 이미지 캡션 "클라우드플레어 사무실 입구, 샌프란시스코 101 타운센드 스트리트 … 출처: Wikimedia Commons, HaeB" | ✓ 확인 | Commons File:Cloudflare office entrance area.jpg — HaeB 자작, "Entrance area of the Cloudflare offices at 101 Townsend Street in San Francisco", 2021-12-17, CC BY-SA 4.0 |
| 27 | 커버 파일 렌더 가능 여부 | ✓ 확인 | 프런트매터 `coverImage`는 비었지만 `public/images/covers/cloudflare-deno-node-compat-gravity-well.jpg` 존재 → `build_posts_json.py` 3순위(슬러그 파일명 매칭)로 해결. 하단 커버 크레딧 한 줄도 규칙(2026-09-04)에 부합 |

### C-1. 인용문 축자 대조 (HN 50023277)

원문(확인 완료, 7개 구간 전부 일치):
> "It's a joint decision and I agree with it. I'm most invested in its success and have put the most work into it - and I no longer think it's where I can do the most important work. There are some good ideas in Deno and it's well engineered - but it ultimately is not solving big problems. It has been sucked into the gravity well of node compatibility, which forces it to behave exactly as Node does. Why reimplement Node? It works. Marginal performance or UX or security benefits are not enough. …"

본문 번역과의 대조:

| 원문 | 본문 번역 | 판정 |
|---|---|---|
| It's a joint decision and I agree with it. | 공동의 결정이고 저도 동의합니다. | 일치 |
| I'm most invested in its success and have put the most work into it | 제가 Deno의 성공에 가장 깊이 관여했고 가장 많은 일을 했습니다. | 일치(주어 보충은 허용 범위) |
| and I no longer think it's where I can do the most important work | 그런데 이제 그곳이 제가 가장 중요한 일을 할 수 있는 자리라고 생각하지 않습니다. | 일치 |
| There are some good ideas in Deno and it's well engineered - but it ultimately is not solving big problems. | Deno에는 좋은 아이디어들이 있고 잘 만들어졌습니다. 그렇지만 결국 큰 문제를 풀고 있지는 않습니다. | 일치 |
| It has been sucked into the gravity well of node compatibility, which forces it to behave exactly as Node does. | Node 호환성의 중력 우물에 빨려 들어갔고, 그래서 Node와 똑같이 행동하도록 강제됩니다. | 일치 |
| Why reimplement Node? It works. | 왜 Node를 다시 구현하죠? 그건 이미 잘 돌아갑니다. | 사실상 일치("이미"는 첨가지만 뜻 변화 없음) |
| Marginal performance or UX or security benefits are not enough. | 조금 나은 성능이나 사용성, 보안상의 이점만으로는 충분하지 않습니다. | 일치 |

- **과장·의역으로 뜻이 달라진 곳 없음.**
- 다만 인용은 원 댓글의 **앞부분 연속 구간**이고 뒤쪽(celld, 월간 릴리스, MIT, 계승 환영)은 잘렸다. 연속 구간이라 말줄임표 없이도 왜곡은 아니지만, 뒤 내용이 본문 다른 문단에서 사용되므로 끝에 "…" 한 글자를 넣으면 더 정확하다. [경미]

---

## C. 수정 권고 (우선순위 순)

1. **[경미] 16줄 이미지 캡션** — "Deno 팀 전원이 이곳으로 옮겨 갑니다."
   사진은 샌프란시스코 101 타운센드 스트리트 사무실(2021년 촬영)이고, 양사 발표문 어디에도 Deno 팀의 **근무지 이전**은 적혀 있지 않다. 문자 그대로 읽으면 출처가 뒷받침하지 않는 서술이 된다.
   → 권고: "Deno 팀 전원이 합류하는 회사입니다. 패키지 저장소 JSR의 인프라도 함께 넘어갑니다." 정도로.
2. **[경미] 35줄** — "노드끼리의 조정은 그 버킷의 compare-and-swap 연산으로만 합니다."
   celld README의 표현은 "conditional bucket write"(조건부 쓰기)·"bucket leases"다. 개념은 같지만 1차 출처가 쓰지 않는 용어다.
   → 권고: "조건부 쓰기(conditional write)로만 합니다" 또는 "compare-and-swap에 해당하는 조건부 쓰기로만 합니다".
3. **[경미] 35줄** — "S3 호환 버킷으로 복제하며"
   README는 S3 호환·GCS·Azure Blob을 모두 지원한다고 적는다. 좁게 적힌 것이지 오류는 아니므로 그대로 두어도 무방하다. 굳이 고치면 "객체 스토리지 버킷(S3 호환 등)".
4. **[경미] 21줄 인용 말미** — 연속 구간 발췌이므로 끝에 말줄임표(…)를 붙이면 원 댓글이 더 이어진다는 사실이 드러난다.

### 확인했으나 수정 불요

- "라이선스는 MIT 그대로"(14줄): 두 블로그 본문에는 MIT 문구가 없고 달의 HN 댓글이 근거다. 사실은 맞으므로 유지해도 되고, 엄밀히 하려면 "달 본인의 설명에 따르면 MIT 그대로"로 바꿀 수 있다.
- "Deno 팀이 마지막으로 내놓은 의미 있는 엔지니어링"(37줄): 평가적 표현이지만 연표상 모순 없음(Deno Sandbox 2026-02, Claw Patrol 2026-05, celld 2026-08 순). 단정으로 읽히는 수준은 아님.
- 프런트매터 `categories: [ai-news]` / `category: "AI"`: 개발자 도구 뉴스지만 이 레포의 기존 관례와 동일. 사실 문제 아님.

---

## D. 종합 판정

- [x] **발행 가능** — 치명적 오류 0건. 날짜·수치·인명·직함·인용·제품명·라이선스 전부 1차 출처와 일치.
- 위 [경미] 1~4는 선택적 보정(특히 1번 캡션 권고).

### 사용한 1차 출처

- https://blog.cloudflare.com/deno-joins-cloudflare/
- https://deno.com/blog/cloudflare
- https://news.ycombinator.com/item?id=50019911 / https://hn.algolia.com/api/v1/items/50023277
- https://deno.com/blog/v2.0
- https://github.com/denoland/celld
- https://commons.wikimedia.org/wiki/File:Ryan_Dahl.jpg
- https://commons.wikimedia.org/wiki/File:Cloudflare_office_entrance_area.jpg
- 보조: https://flaviocopes.com/celld/ , https://changelog.com/news/Lk6n , https://dev.to/nickytonline/10-things-i-regret-about-nodejs
