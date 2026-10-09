# 팩트체크 리포트 — 2026-10-10

대상: `_posts/2026-10-10-crowdstrike-artex-korean-banks-agent-artifacts.md`
결과: **통과** (치명적 오류 0건, 초안 단계에서 수정 4건)

## 검증 항목

| 본문 주장 | 검증 | 출처 |
|---|---|---|
| 크라우드스트라이크 보고서 「Unknown Threat Actor Uses AI-Driven ARTEX to Target South Korean Finance」, 현지 2026-10-07 공개 | ✅ | CrowdStrike 블로그 원문, The Hacker News(10-08) |
| 활동 시기 2026년 9월 말~10월 초 | ✅ | CrowdStrike 원문 |
| ARTEX = 중국 개발 오픈소스 LLM 멀티에이전트 자율 침투시험 도구, GitHub 핸들 Autumn-27 | ✅ | CrowdStrike, The Hacker News |
| ARTEX 주 백엔드 = DeepSeek v4.1-flash, 보조 GLM-5.3·Grok 4.6 | ✅ | CrowdStrike, The Hacker News (두 곳 일치) |
| 공격자가 LLM API 리셀러를 거쳐 DeepSeek 접근(추정) | ✅ 추정으로 표기 | CrowdStrike(`xcai[.]pro`, "likely") — 본문에서는 IP·도메인 미기재 |
| 보고서는 Claude Code가 은행 침투를 수행했다고 적지 않음 | ✅ | CrowdStrike·THN 모두 ARTEX를 공격 도구로 기술, Claude Code는 노출된 세션 기록으로만 등장 |
| Claude Code 세션에서 한국 유출 데이터 거래처·텔레그램 판매 그룹 질의, 이력서 작성, NFT 기프트 마켓플레이스 취약점 조사 | ✅ | CrowdStrike, The Hacker News, The Register |
| 귀속: 알려진 조직 미귀속, 중국어 사용자·금전 동기 **중간 수준 확신** | ✅ | CrowdStrike 원문("moderate confidence") |
| 신상 정보는 "공격자의 것일 가능성이 높다"고만 하고 확정 안 함, 나이·생년월일 불일치 | ✅ | CrowdStrike, The Register(26세 vs 2007-09 생) |
| 영향받은 조직 수 미확인 명시 | ✅ | CrowdStrike 원문 |
| 발각 경위: 노출된 open directory → 중국어 지시 파일 → 홍콩 서버의 Claude Code 세션 기록·메모리 파일·ARTEX 설정 파일 | ✅ | CrowdStrike, The Register, The Hacker News |
| 설정 파일에 테스트 행동을 지시하는 중국어 펜테스트 프롬프트 | ✅ | CrowdStrike 원문 |
| 신한은행 대출모집인용 조회 서비스, 약 2만 5천 명 | ✅ | 헤럴드경제, 서울신문, The Register |
| KB국민은행 직원용 모바일 업무지원시스템 119명 / 하나은행 영업지원시스템 89명 | ✅ | 헤럴드경제(시스템·인원 모두), The Register(인원) |
| BNK부산은행 외주 개발자 11명 | ✅ | 헤럴드경제 — **초안의 "명단에 올랐다"는 모호 서술을 수치로 교정** |
| 예가람저축은행 9월 30일 침입 정황 확인, 약 4만 명 추정 | ✅ | 서울신문(10-03) |
| 우리은행·NH농협은행도 공격받았으나 고객 정보 유출 미확인 | ✅ | 헤럴드경제 — **초안에 없던 사실을 추가(피해 범위의 사정거리)** |
| 정무위 10-08 의결 → 10-19 금감원 국정감사 5대 은행장 증인 소환, 2022년 이후 4년 만 | ✅ | 한국일보(10-08 18:00) — 헤럴드경제 기사는 "논의 중" 단계였고 한국일보가 **확정 의결**을 보도. 본문은 확정형으로 기재 |
| 금융위·금감원, 유출 정보를 이용한 피싱·대출 사기 주의 당부 | ✅ | The Hacker News |
| ARTEX 개발자 10-08 업데이트 중단·클로즈드소스 전환, "학습과 인가된 보안 테스트" 목적 | ✅ | The Hacker News, 로이터(Investing.com 전재) |
| 경찰, 은행별 사건의 연결 여부 미확인 | ✅ | 로이터 보도 종합 |

## 본문에 일부러 넣지 않은 것
- 공격자 신상(이름·대학·지역·나이)과 텔레그램 계정 아이디 — 크라우드스트라이크가 확정하지 못한 미확인 개인정보라 본문에서 특정하지 않고 "확정하지 않는다"는 사실만 기술.
- 프록시 IP 목록·호스팅 IP — 평론에 불필요.
- 보도별로 7~9곳·약 6만 8천 명으로 엇갈리는 총계 — 단일 수치로 확정할 수 없어 은행별 확인 수치만 기재.
- ARTEX 개발자의 실명으로 보도된 이름 — 단일 매체만 보도, 교차 확인 실패.

## 시점 규율
- 오늘(KST 2026-10-10) 시점. 10-19 국정감사는 **예정**으로 기술됨 ✅
- `_style/ai-timeline.md` 이후 시점의 사건을 과거형으로 쓴 곳 없음 ✅
