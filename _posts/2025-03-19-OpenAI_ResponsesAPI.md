---
layout: post
title: OpenAI의 Responses API
date: 2025-03-19
description:
img: CoT_Art_16x9.png 
tags:
  - OpenAI
  - ResponsesAPI
  - Agent
  - CUA
comments: true
---
<br>

### **OpenAI의 새로운 Responses API: AI 에이전트 구축을 위한 혁신적 도구**

OpenAI가 최근 발표한 Responses API는 개발자들이 더 효율적이고 강력한 AI 에이전트를 구축할 수 있는 새로운 방향을 제시합니다. 이 혁신적인 API는 기존의 Chat Completions API와 Assistants API의 장점을 결합하여, 웹 검색, 파일 처리, 컴퓨터 제어 기능을 통합한 유연한 개발 환경을 제공합니다. 특히 OpenAI의 자체 에이전트인 Deep Research와 Operator의 기반 기술을 활용할 수 있게 되어, 개발자들은 이제 더 복잡한 작업을 자율적으로 수행할 수 있는 AI 시스템을 구축할 수 있게 되었습니다. 이 블로그에서는 Responses API의 주요 기능, 장점, 기존 API와의 차이점, 그리고 실제 활용 사례에 대해 자세히 살펴보겠습니다.

![](https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/qbf/image/-AWFMsSH_uft7GrALK7EB_ekqNE)

< 에이전트를 만들기 위한 새로운 도구 (OpenAI)>

### **Responses API의 주요 특징과 기능**

Responses API는 OpenAI가 개발자들을 위해 설계한 새로운 API 기본 요소로, 개발자들이 OpenAI의 내장 도구를 활용하여 에이전트를 쉽게 구축할 수 있도록 지원합니다. 이 API는 Chat Completions의 단순성과 Assistants API의 도구 사용 기능을 결합하여, 개발자들이 더 유연한 방식으로 에이전트 애플리케이션을 구축할 수 있는 기반을 제공합니다. 특히, 모델 기능이 계속 발전함에 따라 Responses API는 개발자들이 여러 도구와 모델 턴을 사용하여 점점 더 복잡한 작업을 해결할 수 있도록 지원합니다.

![](https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/qbf/image/bu-nu2hSgz8xft1C4QchZrR_myg.jpeg)

< gpt-4o와 mini를 사용한 웹검색 등을 손쉽게 구현이 가능해집니다. (OpenAI) >

Responses API의 가장 중요한 특징 중 하나는 '멀티턴' 대화 지원 기능입니다. 이를 통해 API는 컨텍스트와 대화 흐름을 이해하여 더 자연스러운 상호작용을 가능하게 합니다. 특히 이미지와 같은 멀티미디어를 혼합할 때도 효과적으로 작동하며, 곧 음성과 소리도 지원할 예정입니다. 개발자들은 이제 단일 코드 라인만으로 OpenAI가 호스팅하는 '도구'들을 이 프로세스에 연결할 수 있게 되었습니다. 이러한 도구에는 웹 검색(실시간 데이터를 기반으로 응답 제공), 코드 인터프리터(코드 작성 및 테스트), 파일 검색(파일 분석 및 요약) 등이 포함됩니다.

또한, Responses API는 OpenAI의 에이전틱 도구인 Operator와 연결될 수 있어, 화면을 분석하고 실제로 사용자를 대신하여 작업을 수행할 수 있습니다. 이 컴퓨터 제어 기능은 OpenAI의 "Operator" 에이전트와 동일한 기술을 기반으로 하지만, 복잡한 작업에서 38.1%의 성공률을 보이고 있어 현재로서는 인간의 감독이 여전히 필수적입니다. 이 기능은 입력 토큰 백만 개당 $3, 출력 토큰 백만 개당 $12의 비용이 들지만, 미리보기 단계에서는 Tier 3-5의 선별된 개발자들에게만 액세스가 제한되어 있습니다.

### **내장 도구의 성능과 가격**

Responses API에 통합된 웹 검색 도구는 GPT-4o와 GPT-4o-mini 모델을 사용하여 각각 SimpleQA 사실 쿼리 벤치마크에서 90%와 88%의 정확도를 달성합니다. ChatGPT와 마찬가지로, 이 도구는 뉴스 기사와 블로그 게시물에 대한 링크로 답변을 뒷받침하지만, 이것이 정확한 답변을 보장하는 것은 아닙니다. 개발자들은 천 개의 쿼리당 $30 또는 $25의 비용으로 이 기능에 액세스할 수 있습니다.

![](https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/qbf/image/PVBXMNMb97pfeX-3Nd6V7L7TmDc.jpeg)

< SimpleQA에서 높은 정확도를 기록, Agent의 신뢰성을 높일 수 있겠죠 (OpenAI) >

대규모 문서 컬렉션으로 작업하는 팀을 위한 새로운 파일 검색 도구는 특정 정보를 더 쉽게 찾을 수 있도록 설계되었습니다. 이 기능은 천 개의 검색당 $2.50, 그리고 일일 기가바이트당 $0.10의 저장 비용이 발생합니다. 개발자들은 OpenAI 플랫폼에 직접 데이터를 저장하여 추적 및 평가를 통해 에이전트 성능을 평가할 수 있으며, OpenAI는 비즈니스 및 사용자 데이터가 기본적으로 모델 훈련에 사용되지 않음을 강조합니다.

### **Agents SDK: 멀티에이전트 워크플로우 관리**

Responses API와 함께 OpenAI는 새로운 오픈소스 Agents SDK를 출시했습니다. 이 SDK는 다중 에이전트 워크플로우 관리를 단순화하며, 구성 가능한 언어 모델, 에이전트 핸드오프, 내장된 보안 제어 및 분석 도구를 제공합니다. 현재 Python에서 사용 가능하며 곧 Node.js 지원도 추가될 예정입니다. 이 SDK는 OpenAI의 API와 Chat Completions 표준을 따르는 다른 제공업체의 모델과 함께 작동합니다.

Agents SDK는 개발자들이 웹 도구와 프로세스에 에이전트를 연결하여 사용자나 비즈니스가 원하는 작업을 자율적으로 수행하는 "워크플로우"를 구축하는 데 도움을 줍니다. 이러한 도구들은 AI 에이전트 개발 과정을 간소화하여, 엔터프라이즈와 고객을 위한 프로덕션 수준의 애플리케이션을 더 쉽게 구축할 수 있게 합니다.

### **Responses API와 기존 API의 비교**

Responses API는 기존의 Chat Completions API 및 Assistants API와 몇 가지 중요한 차이점이 있습니다. 가장 중요한 특징 중 하나는 서버에서 대화 상태를 관리할 수 있다는 것입니다. Chat Completions API에서는 현재 대화의 기록을 직접 유지하고 각 새 프롬프트와 함께 전체 복사본을 다시 보내야 했습니다. 특히 이미지와 같은 첨부 파일이 포함된 경우 이러한 대화 기록이 길고 다루기 어려워질 수 있었습니다.

Responses API는 여전히 메시지 목록 형식을 지원하지만, 개발자들은 이제 "store": true 속성을 추가하고 이후 메시지에 "previous\_response\_id: response\_id" 키를 포함하여 그 대화를 계속할 수 있는 옵션을 갖게 되었습니다. 이는 Assistants API보다 더 자연스러운 방식으로, 스레드, 메시지, 실행 등의 개념으로 생각해야 했던 복잡성을 줄여줍니다.

또한 Responses API는 JSON 외에도 HTML 양식 인코딩을 지원하여 더 간편한 API 호출을 가능하게 합니다. OpenAI는 Chat Completions API를 계속 지원하고 업데이트할 계획이지만, 통합 도구가 필요한 개발자들에게는 확장된 기능을 위해 Responses API로의 전환을 권장하고 있습니다. 반면, 기존의 Assistants API는 기능 패리티가 달성되면 2026년 중반까지 Responses API로 대체될 예정입니다.

### **기존 RPA 시장을 개편할까? CUA (Computer-Using Agent) 모델**

![](https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/qbf/image/EzLTL-NOALrzQxVoR61xtz74AtA.jpeg)

< CUA를 통해서 브라우저 기반의 워크플로우 자동화도 가능해집니다. (OpenAI) >

지난 1월에 발표한 Operator를 활성화하는 동일한 CUA모델을 사용할 수도 있습니다. 내장된 컴퓨터에서 동작하는 브라우저, 마우스, 키보드 동작을 캡쳐한 다음, 이것을 실행가능한 명령으로 변환하여 자동화된 에이전트로 만들 수가 있죠. (동작하는 장면은 하단의 유튜브를 참고해주세요) 

이 CUA의 놀라운 점은 복잡한 워크 플로우에 대응하는 RPA를 만들거나 자동화를 하는데 어려움을 겪는 문제도 CUA를 이용하면 순식간에 만들 수 있다는 겁니다. 그렇지만, 아직까지 CUA에 대한 성능은 38.1% 수준으로 인간의 감독이 필요한 Human-in-the-loop에서 동작시켜야 할 듯 합니다. 

OpenAI의 새로운 Responses API와 Agents SDK는, 기업들이 AI 에이전트를 활용하여 고객 지원 간소화, 공급망 결정 최적화, 복잡한 금융 트렌드 예측 등 다양한 분야에서 혁신적인 솔루션을 구축할 수 있는 가능성을 제시합니다. 특히 OpenAI의 추론 모델(o1 및 o3 계열)의 발전은 이러한 에이전트 개발에 중요한 토대를 마련했습니다.

"추론 모델이 AI 에이전트를 가능하게 하는 데 얼마나 중요한지 과소평가하기 어렵습니다. 이전의 가장 큰 제한 중 하나는 계획과 같은 장기 작업을 처리하는 것이었습니다."라고 OpenAI의 플랫폼 제품 책임자인 올리비에 고드먼트(Olivier Godement)는 설명합니다. 이러한 추론 능력의 향상으로, 에이전트는 이제 더 복잡한 다단계 작업을 처리할 수 있게 되었습니다.

앞으로 AI 에이전트는, 보다 자연스러운 대화형 경험을 제공하는 음성 비서, 실시간 번역 도구, 가상 튜터, 대화형 고객 지원 시스템 등의 애플리케이션에서 중요한 역할을 할 것으로 예상됩니다. OpenAI의 WebRTC 통합과 같은 기술적 개선으로, 개발자들은 이제 몇 줄의 JavaScript 코드만으로 실시간 기능을 추가할 수 있게 되었습니다.

Azure OpenAI에서는 AI Foundry에 조만간 CUA 기능이 오픈될 것으로 예고되어 있습니다. 

(나오면 바로 해봐야겠어요)

\* 참고 : [https://openai.com/index/new-tools-for-building-agents/](https://openai.com/index/new-tools-for-building-agents/)

[![API 기반으로 에이전트를 만드는 새로운 도구](https://i.ytimg.com/vi/hciNKcLwSes/hqdefault.jpg)](https://youtu.be/hciNKcLwSes)

< API를 활용한 에이전트 생성을 위한 새로운 도구 ( OpenAI - YouTube) >
