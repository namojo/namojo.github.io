---
layout: post
title: Claude Code의 무료 대안, Gemini CLI
date: 2025-07-04
description:
img: photo-1629654297299-c8506221ca97.jpeg
tags:
  - Claude Code
  - Gemini CLI
  - MCP
comments: true
---

![photo-1629654297299-c8506221ca97.jpeg](/assets/img/posts/photo-1629654297299-c8506221ca97.jpeg)

최근 AI 코딩 도구의 발전으로 개발자들의 생산성이 급격히 향상되고 있습니다. 특히 Claude Code는 터미널에서 직접 AI와 대화하며 코딩할 수 있는 혁신적인 도구로 주목받고 있죠. 하지만 유료 서비스라는 점이 진입 장벽이 되고 있습니다.

이런 상황에서 Google의 Gemini CLI가 무료 대안으로 떠오르고 있습니다. 더욱이 MCP(Model Context Protocol) 서버를 함께 활용하면 Claude Code 못지않은 강력한 개발 환경을 구축할 수 있습니다.
이 글에서는 Gemini CLI에 Context7과 Sequential Thinking MCP 서버를 설치하고 활용하는 방법을 상세히 알아보겠습니다.


### Gemini CLI란?

Gemini CLI는 Google이 제공하는 오픈소스 AI 에이전트로, 터미널에서 직접 Gemini AI에 접근할 수 있게 해줍니다. 주요 특징은 다음과 같습니다:

- 무료 사용: Claude Code와 달리 완전 무료
- ReAct 루프: 추론과 행동을 반복하며 복잡한 작업 수행
- MCP 서버 지원: 다양한 도구와 통합 가능
- 로컬 및 원격 실행: 유연한 실행 환경

Claude Code와 같은 AI 에이전트로, 터미널에서 직접 AI를 사용할 수 있지만, Claude와 같은 경우는 Token 사용량이 많죠. 단순 작업일지라도 순식간에 Claude Max 구독 일일 사용량을 넘어서는 경우가 많습니다. 반면에 Gemini CLI는 하루에 1,000건의 Request 처리가 가능하기 때문에 사실상 무료로 사용할 수 있는 장점이 있습니다. 

여기에 더해 Gemini CLI는 npm 설치를 통해서 MCP 서버 설치와 사용도 손쉽게 가능해요. 그리고, 로컬 파일 Access 권한도 자동으로 가지고 있는데다, 코드 작성을 위한 여러 Baseline이나 Rule 설정도 GEMINI.md 등에 저장되므로 AI기반 코딩을 경험하는 시작으로 충분히 좋습니다.



### 왜 Context7 + Sequential Thinking인가?

제대로 된 MCP 사용을 위해서 2개의 MCP 서버를 설치하는데, Context 7과 Sequential Thinking 입니다.


#### Context7

최신 문서 제공: 프레임워크와 라이브러리의 최신 문서를 AI에게 실시간으로 제공
버전별 코드 예제: 특정 버전에 맞는 정확한 코드 예제 제공
Hallucination 방지: 존재하지 않는 API나 오래된 코드 생성 방지


#### Sequential Thinking

체계적 문제 해결: 복잡한 문제를 단계별로 분해
논리적 구조화: 개발 프로세스를 논리적으로 구성
반복적 개선: 이전 단계를 수정하고 개선 가능
대안 탐색: 여러 해결 방안을 병렬로 탐색


이 두 MCP 서버의 조합은 강력한 시너지를 만들어냅니다:


Context7이 정확한 정보를 제공하고
Sequential Thinking이 이를 체계적으로 활용하여 문제를 해결합니다


📦 설치 가이드
- 1단계: Gemini CLI 설치
먼저 Node.js가 설치되어 있는지 확인합니다 (v18.0.0 이상 필요):
bashnode --version
Gemini CLI를 전역으로 설치합니다:
bashnpm install -g @google/gemini-cli
설치 확인:
bashgemini --version

- 2단계: Gemini CLI 초기 설정
Gemini CLI를 처음 실행하면 인증이 필요합니다:
bashgemini init
브라우저가 열리며 Google 계정으로 로그인하라는 메시지가 표시됩니다.

- 3단계: MCP 서버 설정
Gemini CLI 설정 파일을 엽니다:
bash# macOS/Linux
nano ~/.gemini/settings.json

