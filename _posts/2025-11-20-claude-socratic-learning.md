---
layout: post
title: "Claude의 소크라테스식 AI 학습모드"
date: 2025-11-20 08:49:32 +0900
categories: [ai]
tags: [태그, AI, Anthropic, Claude, learning, 학습모드]
excerpt: "최근 VentureBeat 기사에 소개된 Anthropic Claude의 새로운 '학습모드'는 OpenAI나 Google에서 제공하는 Study Mode, Guided Learning 등과는 다른 모습을 보입니다. Claude는 학습모드에 돌입한 사용자에게 답을 바로 주지 않고, 소크라"
coverImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbDHcQg%2FdJMcacuJUfu%2FAAAAAAAAAAAAAAAAAAAAAIs3vDaQW8P6Suyz4JnBQqMuOVQ-7CJBYMlNqONDAvAW%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3D7Mf9OEp6Mu4Qj5nDKyDn17X17vQ%253D"
category: "AI"
canonicalUrl: "https://namojo.tistory.com/113"
---
![](https://blog.kakaocdn.net/dna/bDHcQg/dJMcacuJUfu/AAAAAAAAAAAAAAAAAAAAAIs3vDaQW8P6Suyz4JnBQqMuOVQ-7CJBYMlNqONDAvAW/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=7Mf9OEp6Mu4Qj5nDKyDn17X17vQ%3D)

Anthropic Claude의 학습모드는 모든 사용자에게 개방되어 있지만, 실제 활용하는 사례는 아직 많지 않다 <사진: Anthropic >

최근 VentureBeat 기사에 소개된 Anthropic Claude의 새로운 '학습모드'는 OpenAI나 Google에서 제공하는 Study Mode, Guided Learning 등과는 다른 모습을 보입니다. Claude는 학습모드에 돌입한 사용자에게 답을 바로 주지 않고, 소크라테스식 질의 응답을 통해 사용자에게 탐구를 유도하는 방식을 사용합니다.   
  
학습모드(Learning Mode)로 Claude에 프롬프트를 입력하는 방법은 Claude 채팅 창에서 스타일 사용을 선택하고 거기에서 Learning을 활성화하면 됩니다. 실제 프롬프트를 입력하면, 바로 정답을 알려주는 대신 '그것에 대해 들어보신 적이 있나요? 알고 계신 내용을 먼저 들어보면, 거기서 시작해서 더 깊이 이해할 수 있도록 도와드릴 수 있어요.'라는 답변을 합니다.   
  
예를 들면, '인체 내부에서 알코올 분해에 필요한 영양분에 대해 알고 싶다'고 하면, 기초지식을 뭘 알고 있는지 물어봅니다. '포도당이나 당분이 필요하다고 들었어'라고 답변하면, 거기서부터 '간이 포도당을 필요로 하는데 이유를 아느냐?'면서 힌트를 주고, 최종 정답인 글리코겐과 간의 해독 작용에 대해 설명하는 정답에 도달합니다. 물론, 더욱 심층적인 학습을 유도하는 힌트도 계속 주죠. (한 번 해보시면 꽤나 재밌습니다.)

![](https://blog.kakaocdn.net/dna/7zuN8/dJMcaiobC0w/AAAAAAAAAAAAAAAAAAAAAE0iaJYdeZXQt0X0PwtwZsdWX0kUTRZILnuUj10VCQ1M/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=OPYoqbhgDs%2BS7Dpg6Bniq%2BNVLp4%3D)

학습 모드(Learning Mode)에서는 묻고 답하고를 통해 점점 깊은 학습을 유도합니다. < 사진 : Claude 앱 >

이 학습모드는 과제효율, 즉 정답만 빨리 찾고 싶어하는 학생에게는 비효율적이겠지만, 진정한 자기주도 학습을 통해 사고가 확장되고, 기억이 오래 유지되는 장점이 있습니다. OpenAI와 Google의 학습모드는 빠른 피드백과 정확성, 혹은 멀티모달 활용이 강점인데 비해, Claude의 학습모드는 매우 느린 진도를 가지고 있어요.   
  
미국과 유럽의 주요 대학을 비롯해 초중고등학교에서는 학문적 정직성과 자기 주도학습 확산이라는 관점에서 AI 도입을 신중하게 검토하고 있다고 알려졌습니다. 많은 교육자들은 'AI가 질문을 던지고 학습을 도와주는 역할'로 사용될 때 제한적인 신뢰를 보내고 있거든요. (하긴, AI가 모든 학습을 대체한다면 교육자들의 입지도 점점 줄어들테니 말입니다.) 물론, 여기에는 학생이 AI의 가이드를 우회해서 언제든 정답을 바로 받기를 원하는 경우, 도입 목적이 훼손된다는 문제가 있습니다.

![](https://blog.kakaocdn.net/dna/NYEPg/dJMcaaDGGN2/AAAAAAAAAAAAAAAAAAAAAMqVY76xX9uhXrWYBb-GUHBHAT-982Z9QD3ClSt6tJZy/img.webp?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=3WBtHuMIrYEzi0X8%2FRRgzRtZDTQ%3D)

ChatGPT Edu 등은 이미 미국의 여러 대학에 도입되어 학생과 교직원들이 활용중이다. <사진: ChatGPT>

미국의 캘리포니아 주립대학의 23개 캠퍼스에서 ChatGPT 기반 맞춤형 교육 서비스가 50만명의 학생과 교직원을 대상으로 제공되고 있고, 와튼과 옥스포드의 여러 경영대학원에서는 ChatGPT Enterprise를 도입해서 사용하고 있는 것으로 알려졌습니다. 구글 역시 AI 교육프로그램 확대를 위해서 1억 2천만 달러의 투자기금을 조성해 중고등학교에 Gemini를 배포할 계획을 발표했었죠.

많은 교육계에서는 AI 윤리의 가이드라인을 철저히 세워서 AI가 작성한 에세이를 제출하는 것들에 대해 엄격한 규제를 해야한다는 주장을 하고 있지만, ChatGPT 등을 이용해 수업에 대한 복습이나 에세이와 리포트를 더욱 심층적이고, 연구과제의 결과를 더욱 신속하게 정리할 수 있도록 활용을 장려하는 측의 주장도 있는 것이 사실입니다. 와튼스쿨과 MIT, 컬럼비아 대학 등은 이런 면에서 꽤 개방적으로 접근하는 것으로 알려졌죠. 그런 면에서 아직 AI를 교육에 어떻게 적용하는 것이 정답인지 정해진 것 아닌 것 같습니다.  
  
교육 분야에서 'AI + 인간 튜터'의 하이브리드 방식이 도입되는 것이 현재로서는 최선의 방법임에는 틀림없어 보이지만, 구체적인 방법에서는 한계가 있는 것이 사실이죠. 이 주제에 대해서 고민해 보는 것은 교육 뿐만 아니라 법률, 금융, 제조와 물류까지 AI가 우리의 업무와 일상에 도입될 때 '연착률'하는 방법을 제대로 찾아내는 고민이 필요하기 때문입니다.   
  
AI가 나의 일을 빼앗아 가기 전에, 내가 AI가 나의 일을 돕도록 하는 방식을 빨리 찾아내는 것이 새로운 생존법인건 다 아시죠?  
  
#Claude #LearningMode #소크라테스싫어합니다  
#바로알려주지스무고개하고그러면싫어요

> 관련 링크 : <https://venturebeat.com/ai/anthropic-takes-on-openai-and-google-with-new-claude-ai-features-designed-for-students-and-developers>
