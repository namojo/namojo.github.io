---
layout: post
title: "독일 법원, AI 저작권 분쟁에서 OpenAI 패배 판결"
date: 2025-11-13 09:30:19 +0900
categories: [ai]
tags: [태그, AI, gettyimages, GMEA, openai, stability]
excerpt: "2023년 런던 고등법원에서는 게티이미지(Getty Images)와 스태빌리티 AI(Statbility AI) 사이에 있었던 저작권 침해 소송에서 AI업체의 손을 들어주었습니다. Stable Diffusion을 개발한 스태빌러티를 상대로 게티이미지는 허가 없이 수백만장의 이미지를 무단 "
coverImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FojbSM%2FdJMcahbG1b3%2FAAAAAAAAAAAAAAAAAAAAAJKQiEvYsC3XuqU5J1CDsQkFPRxCiNziNJuQWTIELq45%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3DClTkn9QaiXaDQW8V%252BGPWyabV6os%253D"
category: "AI"
canonicalUrl: "https://namojo.tistory.com/111"
---
![](https://blog.kakaocdn.net/dna/ojbSM/dJMcahbG1b3/AAAAAAAAAAAAAAAAAAAAAJKQiEvYsC3XuqU5J1CDsQkFPRxCiNziNJuQWTIELq45/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=ClTkn9QaiXaDQW8V%2BGPWyabV6os%3D)

뮌헨 지방법원에서는 AI업체의 모델 학습에서 저작권 침해가 위법하다고 판결했어요 < 사진 : 한국저작권위훤회 >

2023년 런던 고등법원에서는 게티이미지(Getty Images)와 스태빌리티 AI(Statbility AI) 사이에 있었던 저작권 침해 소송에서 AI업체의 손을 들어주었습니다. Stable Diffusion을 개발한 스태빌러티를 상대로 게티이미지는 허가 없이 수백만장의 이미지를 무단 사용했다는 주장을 펼쳤는데요. 

2025년 6월 해당 소송에서 게티이미지는 대부분의 주장을 철회하면서, 실제 생성된 이미지와 학습 대상이 되었다는 이미지에서의 충분한 연관성을 깁증하지 못한 것이 이유가 된 것으로 알려졌습니다. 출력된 모델이 재생산한 이미지가 원본 이미지의 실질적인 부분을 반영하는 것을 입증하지 못했다는 거죠. 

물론 그렇다고 완전히 포기한 것은 아니어서 미국에서도 17억 달러의 소송을 별도로 진행중이긴 하지만, 유사한 도서 저작권 위반에 대한 Anthropic과의 분쟁에 대해서 미국 법원도 AI 업체의 손을 들어주었죠. 이걸 보면 미국와 영국은 AI에 대한 향후 성장 가능성, 즉 공공의 이익에 얼마나 활용성이 높을지와 AI가 생산한 출력물은 저작권이 없다는 입장을 계속 유지할 것으로 보입니다.

특히, 영국 법원은 판결 이외에도 정부 차원에서 AI 학습용 저작물에 대해서 '옵트아웃' (권리자가 반대의사를 표명하지 않으면 허용) 모델 도입을 적극 검토중이죠. 이는 AI 개발 기업들이 저작권자 동의없이도 학습 데이터 활용이 가능한 환경을 조성하려는 움직임입니다. 

![](https://blog.kakaocdn.net/dna/baW4yf/dJMcagw5sgw/AAAAAAAAAAAAAAAAAAAAACrq1oAQftTOZQxW9unkPNIPolmtDS8VjImNaUx5xErE/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=5bT8ntvOUaYehxWDsNYTbctuvxY%3D)

Meta에서는 페이스북과 인스타그램의 Optout 거부 방법을 안내하기도 했죠. < 사진 : Meta >

여기에 더해 학습 모델이 저작권이 있는 데이터로 학습되었다 하더라도, 인간이 입력한 프롬프트가 변수로 작용하면서 실제 출력물이 원본에서의 데이터를 얼마나 활용해서 생산된 것인지에 대한 데이터 마이닝 측면에서 논란의 여지가 있다는 주장도 받아들여지고 있는 분위기에요. 

이 와중에 독일 뮌헨 지방법원에서는 최근 정반대의 판결이 있었습니다. GEMA(독일 음악 저작권 관리협회)와 OpenAI의 분쟁은 OpenAI가 유명 노래 가사를 동의 없이 학습 데이터로 사용했고, ChatGPT가 해당 가사를 거의 원문에 가깝게 재현함으로써 저작권을 침해했다는 것에 대해 법원이 그걸 인정해주었어요. 쟁점은 모델 내 복제, 출력의 공중 접근, TDM(Text and Data mining) 예외 배제 등인데요. 결국 핵심은 TDM입니다.

AI는 방대한 양의 데이터를 필요로 하는 LLM의 학습 과정에서 TDM 기술은 필수적으로, 웹 스크래핑 등을 통해 온라인에서 수많은 데이터를 수집하고 분석합니다. 이 과정에서 저작권이 있는 콘텐츠를 별도로 분류하기가 쉽지 않고, 저작권 논쟁에서 자유로울 수 없죠. 그래서 유럽과 일본 등의 여러 국가에서는 TDM 예외, 즉, 저작권 면책 조항인 옵트아웃 모델을 적극 활용하거나 도입 논의 중에 있는 것이죠. 

상반된 법원의 결론이 유럽에서 나오면서, 국가별로 AI 규제가 다르거나 법적 판단의 복잡성 때문에 다양한 침해 사고에 대응하기도 어려울 수 있겠어요. UN이나 다른 국제 규범으로 AI 관련 가이드와 규제가 조속히 확정되어야 오남용 뿐만 아니라 AI 발전에도 도움이 될 듯 합니다. (너무 AI가 쓴 것같은 답을.. ㅎㅎㅎ)
