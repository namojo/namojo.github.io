---
layout: post
title: "일리야 수츠케버, 스케일링의 시대는 끝났다."
date: 2025-11-27 08:53:52 +0900
categories: [ai]
tags: [태그, AI, iliya, SSI, 일리야슈츠케버, 초지능]
excerpt: "최근 AI 업계에서 가장 주목받는 인물 중 한 명인 일리야 수츠케버(Ilya Sutskever)가 침묵을 깨고, 긴 인터뷰를 가졌습니다. 그는 OpenAI의 공동 창립자이자 수석 개발자로서 GPT 시리즈의 탄생을 이끌었고, 현재는 SSI(Safe Superintelligence)라는 새"
coverImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FXGRaY%2FdJMcabWWjAM%2FAAAAAAAAAAAAAAAAAAAAAJywkDIULdUm7-vb3y3I5llUFF6_TQadd54ybccnasbf%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DBlkaC5BHwMPVvVf00LU9Kod3XjQ%253D"
category: "AI"
canonicalUrl: "https://namojo.tistory.com/115"
---
![](https://blog.kakaocdn.net/dna/XGRaY/dJMcabWWjAM/AAAAAAAAAAAAAAAAAAAAAJywkDIULdUm7-vb3y3I5llUFF6_TQadd54ybccnasbf/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=BlkaC5BHwMPVvVf00LU9Kod3XjQ%3D)

일리야의 스승인 제프리 힌튼은 AI의 위험을 경고하지만, 일리야는 AI와의 공존 방법을 모색해 왔습니다. < 사진 : YouTube >

최근 AI 업계에서 가장 주목받는 인물 중 한 명인 일리야 수츠케버(Ilya Sutskever)가 침묵을 깨고, 긴 인터뷰를 가졌습니다. 그는 OpenAI의 공동 창립자이자 수석 개발자로서 GPT 시리즈의 탄생을 이끌었고, 현재는 SSI(Safe Superintelligence)라는 새로운 회사를 설립해 독자적인 길을 가고 있죠.

이번 드와르케시 파텔과의 심층 인터뷰에서 일리야는 AI 개발의 근본적인 변화에 대해서 설명하고, 패러다임 변화에 대해 심도있는 통찰을 던졌습니다. 단순히 데이터와 컴퓨팅 파워를 늘리면 된다는 ChatGPT와 함께 등장한 믿음에 균열을 일으키면서, 새로운 연구의 시대(Age of Research)가 도래할 것이라고 밝혔어요. (구글은 From Research to Reality 라고 순다 피차이 CEO가 말했는데 말이죠)

**스케일링(Scaling)의 시대에서 연구(Research)의 시대로**

![](https://blog.kakaocdn.net/dna/4pqfR/dJMcaa4NBWf/AAAAAAAAAAAAAAAAAAAAAHWTqcL8MvccuxeChE3rF2hqxaqnZ4x0UP6Mq2fAnXBK/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=Yey4NyULoiA%2FdvyAwkBsM%2BDlNcI%3D)

nVIDIA가 주장하는 스케일링의 법칙은 CoT 기반의 추론을 기본으로 하지만, 앞으로는 이 방법은 비효율적일 수 있죠. < 사진: nVIDIA >

2012년 Alexnet부터 2020년까지는 딥 러닝의 가능성을 탐구하던 시기였지만, 2020년부터는 인프라에 엄청난 자원을 쏟아부으면 성능이 좋아진다는 스케일링의 법칙이 지배하기 시작했죠. 사전 학습과 데이터는 유한하고, 그것은 분명 한계에 부딪힐 것이라는 것이 일리야의 주장입니다. 근본적으로 새로운 학습 방법론을 찾지 못하면, AI는 그저 벤치마크에서는 초인적인 점수를 기록하면서도 현실에서는 제대로 성능을 못내는 경제적 괴리가 발생한다고 하죠. (이것을 실제 성능의 불균일함, Jaggedness라고 표현하고 있습니다.)

일리야가 내놓은 흥미로운 비유적 설명이 재밌습니다.

"1만 시간 코딩 문제 풀이에 몰두한 학생(AI)과 100시간만 공부했지만 전체적인 센스가 뛰어난 학생(인간) 중 누가 훌륭한 엔지니어가 될까?"하는 문제입니다.

실제로 10대 청소년은 10~20시간의 운전 연습만으로도 능숙하게 운전을 하지만, 자율주행 AI는 수백만 시간의 데이터가 필요합니다. 이는 수억년의 진화를 통해 인류가 이미 사전 지식과 신체 감각들이 이에 맞춰 최적화 되어있기 때문이기도 하겠죠. 그렇지만, 여기서 우리가 생각해 볼 지점은 '인간은 왜 적은 데이터로도 빨리 배우는가?'하는 점입니다. 인간에게는 아직 신경망 이론이나 강화학습 정도로는 따라잡을 수 없는 근본적인 머신 러닝의 원칙이나, 가치 함수가 존재할 테니 그것을 위한 Recipe를 찾아야 한다는 것이 일리야의 주장인 것이죠.

**SSI (Safe Superintelligence)의 철학, 안전한 초지능으로의 직행**

일리야가 설립한 SSI는 다른 AI 회사들과는 다른 독특한 접근법으로 유명한데요.

당장 시장에 제품을 내놓고 치킨 게임을 하기 보다는, 안전한 초지능(Super Intelligence)을 완성할 때까지 연구에만 몰두하겠다는 전략을 가지고 있습니다. 30억 달러의 투자를 유치한 이 회사는 단기적인 제품 출시 계획이 없고, 대형 기술 기업처럼 추론 모델의 상업화에 모든 인프라 투자를 하지 않는 은둔의 삶을 즐기는 과학자들을 위한 기업처럼 보입니다.

AI의 성능이 높아지면서, 기업들이 가장 주목하는 것은 안전이고, 보안입니다. AI가 무엇을 지킨다는 것은 불안하고, AI가 무엇을 공격하는 것은 또 뛰어날 것이라는 막연한 위기감에서 안전(Safety)을 우선 순위로 여기기 시작했는데요. 그렇지만, 일리야가 이야기하는 AI의 안전이라는 개념은 AI를 통제하는 것이 아닌 '지각있는 생명체(Sentient life)'로 아끼고 사랑할 수 있는 AI를 만드는 것이 중요하다고 밝혔죠. 즉, SSI는 AI에 대한 기대감과 방향성이 다른 기업들과는 완전히 다른 방향을 추구 하고 있습니다.

일리야는 새로운 머신러닝의 원리라거나 새로운 학습방법에 대해 묻는 질문에 대해서는 입을 열지 않았습니다.

"안타깝게도 우리는 모든 머신 러닝의 아이디어가 자유롭게 논의되는 세상에 살고 있지는 않습니다."

AI가 등장하면 모든 것을 즉시 수행할 단계의 학습을 완료하고 있어야 한다는 업계의 인식이 있죠. 그와 다르게 일리야는 무엇이든 빨리 배우고, 매우 재능있는 15세의 초지능 학생을 만드는 것이 목표라고 밝힌데서 어떤 학습방법과 모델을 만들려하는지 힌트를 얻을 뿐이죠. 일종의 Human-like learner로서 배포된 모델이 지속적인 학습을 통해 성장하는 것을 초지능이라고 생각하는지도 모르겠습니다.
