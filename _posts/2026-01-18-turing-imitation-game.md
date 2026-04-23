---
layout: post
title: "앨런 튜링과 이미테이션 게임 — 기계도 생각할 수 있을까?"
date: 2026-01-18 18:00:00 +0900
categories: [ai-essay]
tags: [AI, 앨런튜링, 튜링테스트]
excerpt: "빅토리아 시대의 한 파티 게임이 현대 AI의 시작점이 되었습니다. 앨런 튜링이 '이미테이션 게임'으로 던진 질문은 지금도 유효합니다."
coverImage: "https://blog.kakaocdn.net/dna/se0Ja/dJMcacIDT7Q/AAAAAAAAAAAAAAAAAAAAAAaJ6PGFwmjEbNiXY-6L5HNUGkIfVRD-B9SMEDUy7nFe/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=cHeYAA7DCI9l1IgHhcIaY4Ctrms%3D"
category: "AI"
canonicalUrl: "https://namojo.tistory.com/128"
---

AI와 대화를 나누다보면, 우리는 AI가 나를 너무나 잘 이해해주는 친구와 같다는 생각을 하기도 하고, AI에 실제 영혼이 있지는 않을까라는 상상을 해보기도 합니다. 이미, AI의 선구자인 앨런 튜링(Alan Turing)은 이런 고민을 했었다고 해요.

19세기 영국의 빅토리아 시대에는 '파티 게임의 황금기'라고 불릴 정도로 거실에서 즐기는 실내 게임이 매우 발달했습니다. 당시에는 TV나 라디오도 없었기에 중상류층 가정을 중심으로 손님을 접대하거나 가족끼리 시간을 보내기 위해 다양한 논리, 단어, 신체 게임을 즐겼죠.

이 게임 중에 '성별 맞히기 게임'이라는 사교 게임이 있었습니다. 게임 방식은 한 명의 질문자가 복도에 있고, 서로 다른 두 개의 방에는 두 명의 남자와 여자가 숨었습니다. 복도에 있는 질문자는 쪽지로 질문을 건네 어느 쪽 방에 남자와 여자가 있는지 맞히는거죠. 이 때 남자는 자기가 여자라고 질문자를 속이려는 노력(Imitation)을 해야하고, 여자는 질문자가 정답을 맞히도록 돕는 역할을 합니다.

![성별맞히기 게임](https://blog.kakaocdn.net/dna/se0Ja/dJMcacIDT7Q/AAAAAAAAAAAAAAAAAAAAAAaJ6PGFwmjEbNiXY-6L5HNUGkIfVRD-B9SMEDUy7nFe/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=cHeYAA7DCI9l1IgHhcIaY4Ctrms%3D)

## 이미테이션(Imitation) 게임 - 기계가 사람을 흉내내다

1950년, 영국의 수학자인 앨런 튜링(Alan Turing)은 그의 논문 '계산 기계와 지능(Computing Machinery and Intelligence)'에서 '기계는 생각할 수 있는가?'라는 질문을 증명하기 위해 이 게임을 이용했습니다. 이 게임을 통해 그가 주목한 것은 기계가 '진짜로 생각을 하느냐'라는 본질보다, '인간의 행동을 완벽하게 흉내낼 수 있느냐'를 중요하게 보았어요.

앨런은 이 게임에서 한 쪽 참가자를 남성이나 여성이 아닌 '기계(컴퓨터)'로 바꿨어요. 그리고, 남자가 여자인 척 질문자를 속이려고 하는 흉내(Imitation)을 기계가 대신하도록 했습니다.

실제, 우리나라 방송사에서는 작곡, 주식투자, 모창 분야에서 AI와 인간이 대결을 펼쳤는데요. 각 분야의 전문가 판정단은 결과물만 보고서 어느 것이 AI가 만든 것인지 구별해내는데 실패했습니다. 그래서, 이런 이미테이션 게임과 같은 AI의 완성도를 테스트하는 방법을 앨런 튜링의 이름을 따서 '튜링 테스트'라고 부르고 있죠.

앨런 튜링은 당시에 이 뿐만 아니라, 현대의 AI를 예견하는 여러 주장을 펼쳤는데요.

첫째는 영혼이 있는 인간만이 생각할 수 있다는 주장에 대해서, 신이 원한다면 기계에게도 영혼을 줄 수 있다는 신학적 반론을 했다는 얘기도 있고요. 둘째는 기계는 시키는 일만 할 뿐 독창적인 것을 만들 수 없다는 주장에 대해, 기계도 학습을 통해 인간을 놀라게 하는 결과물을 낼 수 있다는 '머신러닝'을 주장했습니다. 셋째는 기계는 감정을 느끼지 못한다는 비판에는 타인의 의식을 확인할 수 없는 건 인간 사이에서도 마찬가지라는 이야기도 했어요.

그 중에서 가장 주목받았던 주장은 '학습하는 기계(Learning Machines)'였습니다. 앨런은 성인의 지능을 처음부터 프로그래밍하는 대신, 아이의 지능(Child Machine)을 가진 기계를 만든 뒤 교육을 통해 지식을 습득하게 하는 방식이 더 효율적이라고 제안했어요.

![앨런 튜링의 논문](https://blog.kakaocdn.net/dna/bgdrOS/dJMcaia0Vda/AAAAAAAAAAAAAAAAAAAAAON7twLTZUphhaWl3iaqIz7pk937ZgRY98roqFzB-YBl/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=vAa0KnCuU7GVGYYU0RnypTHqf%2BM%3D)

앨런 튜링은 그의 논문에서 "나는 약 50년후(20세기 말)에는 기계가 생각한다고 말하는 것에 대해 어느 누구도 반대하거나 어색하게 여기지 않고 자연스럽게 받아들이게 될 것이라고 믿는다."라고 적었습니다. 또한, 기계가 보여주는 지적인 결과물 때문에 인류의 '언어 사용 관습' 자체가 바뀔 것이라고도 봤죠. 실제 우리의 일하는 방식은 AI 때문에 크게 변화하고 있는 중입니다.

그는 이런 주장의 전제로 10억 비트 이상의 저장 용량을 가진 컴퓨터라야, 이미테이션 게임에서 질문자를 속일 확률이 70% 정도 될 것이라고 예측했습니다. 즉, 인공지능을 완성하기 위해서는 고성능 고용량의 컴퓨터가 필요할 것이라는 것도 거의 정확하게 예측했던거죠. 그런 그의 업적을 기려 IT업계에서는 최고의 업적을 달성한 전문가들에게 '튜링상'을 매년 수여하고 있습니다.
