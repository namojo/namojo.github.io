---
layout: post
title: "Amazon, 경쟁사 말고 자체 AI 코딩도구만 사용해!"
date: 2025-11-26 09:08:02 +0900
categories: [ai]
tags: [태그, AI, amazon, AWS, IDE, kiro]
excerpt: "로이터의 보도에 따르면 Amazon 내부에서 \"현재 사용중인 기존 개발 Tool은 계속 지원하지만, 추가적인 타사 AI 개발 Tool은 지원할 계획이 없다\"는 메모가 게시되었다고 합니다. 메모에는 \"Builder Community의 일원으로 여러분 모두 이런 제품을 만드는데 중요한 역할"
coverImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FOohu5%2FdJMcahbMnkh%2FAAAAAAAAAAAAAAAAAAAAADKNJNXLyUO4rhAzJlJMNRtEYUYTAVYgNV8T56yXtZQ-%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DqoMPSNka3gpwcml3Co6M7niBeUc%253D"
category: "AI"
canonicalUrl: "https://namojo.tistory.com/114"
---
![](https://blog.kakaocdn.net/dna/Oohu5/dJMcahbMnkh/AAAAAAAAAAAAAAAAAAAAADKNJNXLyUO4rhAzJlJMNRtEYUYTAVYgNV8T56yXtZQ-/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=qoMPSNka3gpwcml3Co6M7niBeUc%3D)

영국 맨체스터에 있는 Amazon 창고, Amazon의 행보가 시장을 읽기 제일 좋은 듯 해요. < 사진 : Reuter >

로이터의 보도에 따르면 Amazon 내부에서 "현재 사용중인 기존 개발 Tool은 계속 지원하지만, 추가적인 타사 AI 개발 Tool은 지원할 계획이 없다"는 메모가 게시되었다고 합니다. 메모에는 "Builder Community의 일원으로 여러분 모두 이런 제품을 만드는데 중요한 역할을 하며, 우리는 여러분의 피드백을 활용하여 제품을 적극적으로 개선합니다."라고도 적혀있었다고 해요.

이 지침에 따르자고 하면, Amazon의 개발자들은 OpenAI의 Codex, Anthropic의 Claude Code, Cursor 등의 AI IDE와 같은 타사의 개발 Tool을 전면 사용하는 것이 금지될 것으로 보입니다.

이 얘기는 아마존이 자체 개발한 Kiro라는 AI IDE를 사용하는 것이 강제된다는 뜻도 되는 것이죠. 일종의 개밥먹기로 자사 제품을 사용해 보고, 그것을 피드백 하는 활동이 자율적인 것이 아니라 강제화 되는 겁니다. 심지어 Kiro는 Claude Code의 상당 부분을 활용해서 기능이 동작하는데도요.

![](https://blog.kakaocdn.net/dna/bsJ1BT/dJMcadmRtSF/AAAAAAAAAAAAAAAAAAAAACBiP9L7ORexDSZvupazwPwj45wouqNj2JX9V11uPwG_/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=9ZaQjhJweTTQvzqciTZOpPG%2Fz1A%3D)

Kiro는 스펙 기반의 Agentic IDE를 표방하지만 꽤 느리다는 평가가 많습니다. < 사진 : aws >

이것은 Gemini 3 Pro가 등장한 이후에 일어나고 있는 아주 자그마한 신호지만, 커다란 AI 지형의 변화에 따른 여파일 수 있습니다. Amazon은 Anthropic에 80억 달러를 투자하고, OpenAI와는 380억 달러 규모의 클라우드 컴퓨팅 서비스 판매 계약을 했지만 파트너사의 서비스를 차단한다는건 이상하죠.

국내에서도 네이버, 삼성, 카카오 등에서 AI 기반 코딩 어시스턴트를 개발해서 내부에서 활용하는 방안을 상당기간 추진해 온 것으로 알고 있지만, 아직까지 뚜렷한 성과라거나 외부에 제대로 알려진 바는 없죠. 보통은 Cline이나 VS Code 기반의 확장 플러그인을 통해 개발하기도 하고, Cursor를 도입하는 경우가 많습니다. 국내에서는 실제로 보면 MS Azure나 AWS에서 코딩 어시스턴트를 활용하는 경우가 제일 많기는 합니다. In-House AI IDE를 사용하는게 맞냐 아니냐를 얘기하기 위해서 글을 쓴 건 아닙니다. AWS가 왜 이런 지침을 내리게 되었을까 하는 거죠.

아마존의 자체 Titan 모델은 임베딩 성능도 낮고, RAG에서는 Cohere 모델보다도 낮은 성능을 보일 때도 많지만, AWS 생태계 안에 너무 깊이 넣어놓았기 때문에 빼버릴 수도 없습니다. 그래도 다행스럽게 GPT-4o 수준으로 엔터프라이즈 서비스에 최적화된 평균 정도의 퍼포먼스를 보이고 있죠. 그렇다고는 해도 Google의 광폭 행보와 Claude가 개발자와 점점 친해지고 있는 걸 막을 방법이 없으니, 개밥먹기를 강화할 수 밖에 없다는 분석입니다.

AI 개발 경쟁 마라톤에서 초반의 앞서거니 뒤서거니 하던 1차 접전이 마무리 되면서, 상위권 그룹과 중위, 하위권 그룹이 나워지게 되는 Phase에 접어들기 시작한 겁니다. 마라톤에서는 한 번 이렇게 그룹이 나눠지게 되면, 하위권은 다시는 상위권 그룹으로 다가가는 것이 어렵습니다. 그러니, 더 뒤쳐지기 전에 스퍼트를 내고 있는 것이 바로 AWS의 Kiro이고 Titan이 될 것 같아요.

![](https://blog.kakaocdn.net/dna/boVoQF/dJMcagRtp0k/AAAAAAAAAAAAAAAAAAAAAAmBBD2S8n_Lx5i9NB_U4ArrNQBs2xj_LyQAsHRSgUXf/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=SozVuJ9t8lZoLLtaP943cWoeN8A%3D)

아마존의 수익 상당 부분을 AWS가 차지하고, 전년 대비 20.2%나 성장했어요. < 사진 : @SergeyCYW >

주목할 점은 Google이건 AWS건, 무한 체력으로 현금 흐름도 좋고 자본도 남아돈다는 거죠. AWS는 지난 분기에만 330억 달러의 매출과 114억 달러의 순이익을 내면서, 2022년 이후 가장 빠른 성장을 기록 중입니다. 누군가 패배 선언 하고 뒤로 물러나기 전에는 AI 치킨게임은 상당 기간 계속 될 듯 합니다.
