---
layout: post
title: "구글은 CUDA의 한계를 뛰어넘을 것인가?"
date: 2025-12-01 10:21:32 +0900
categories: [ai]
tags: [태그, AI, AMD, CUDA, nvidia, ROCm, vllm, xla, 구글, 엔비디아]
excerpt: "구글이 만든 TPU는 행렬 연산에 최적화된 ASIC(특수목적 칩)입니다. 일반적으로 그래픽 처리나, 범용적인 연산을 할 수 있는 엔비디아가 만든 GPU와 달리 신경망 학습 및 추론에 최적화되어 설계된 것이죠. 덕분에 TPU는 딥러닝 작업에서 높은 연산 효율을 보이고, 동급 GPU보다 1"
coverImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FJ5KRv%2FdJMcagYgY0x%2FAAAAAAAAAAAAAAAAAAAAAGJq_R0ydWIcQW3weqg9Hdk7I1jeFUovGZLRCU60hg9P%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1777561199%26allow_ip%3D%26allow_referer%3D%26signature%3D8p0jY2oeRIHloIrNTvi5ESRUh5c%253D"
category: "AI"
canonicalUrl: "https://namojo.tistory.com/117"
---
![](https://blog.kakaocdn.net/dna/J5KRv/dJMcagYgY0x/AAAAAAAAAAAAAAAAAAAAAGJq_R0ydWIcQW3weqg9Hdk7I1jeFUovGZLRCU60hg9P/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=8p0jY2oeRIHloIrNTvi5ESRUh5c%3D)

구글의 TPU만이 가지는 강점? 그보다 더 중요한 경쟁 무기를 곧 갖출지 모른다 < 사진 : ChatGPT >

구글이 만든 TPU는 행렬 연산에 최적화된 ASIC(특수목적 칩)입니다. 일반적으로 그래픽 처리나, 범용적인 연산을 할 수 있는 엔비디아가 만든 GPU와 달리 신경망 학습 및 추론에 최적화되어 설계된 것이죠. 덕분에 TPU는 딥러닝 작업에서 높은 연산 효율을 보이고, 동급 GPU보다 15~30배 빠른 처리 성능과 30~80배 우수한 전력 효율을 기록한다고 알려져 있습니다. 특히, 최신 TPU v7인 Ironwood 에서는 이전 세대보다 24배 성능이 향상되었다고 구글에서는 주장합니다.

**구글의 TPU는 어떤 장점이 있길래?**

그러다보니, 최근 구글이 TPU를 기반으로 엔비디아의 아성을 넘어, 독자적인 AI 생태계 구축까지 넘보지 않을까 하는 이야기도 나오고 있죠.

신경망 학습이나 대형 모델 추론 처럼 '행렬 연산 + 대규모 데이터 + 반복연산'이 많은 작업에서는 TPU 특화 설계와 GCP(구글 클라우드)에서의 효과적인 운용체계가 뛰어난 가성비를 보일 수 있습니다. 또한 TPU를 병렬로 구성 연결하면 멀티 테라에서 엑사스케일의 초거대 AI 서버시스템을 손쉽게 구축할 수 있어요.

TPU는 구글이 설계하고, 내부 프레임워크를 비롯해 클라우드 서비스와 통합되어 있습니다. 즉, 하드웨어와 소프트웨어 스택 전체를 구글이 제어할 수 있다는 뜻이죠. 이런 통합 덕분에 하드웨어 최적화, 메모리 대역폭, 통신 효율성, 확장성 등이 GPU보다 유리 할 수 있습니다. 특히 TPU v4 이후 세대는 임베딩 최적화, 전력 효율 개선 등의 아키텍처가 GPU 중심 설계로는 어려운 비효율성 제거를 이뤄냈다는 평가가 많죠.

![](https://blog.kakaocdn.net/dna/bhC1EG/dJMcac9mMiG/AAAAAAAAAAAAAAAAAAAAAIZ1AdU9YrBbobADEJKuKCeb9wn0z935ZzJpk-A_3H8_/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=GY8%2FOf1G7haHxcAY4hZ3ne0i%2BZ4%3D)

TPU의 성능 자체는 이미 2023년 TPU v4에서 다른 칩들을 넘어섰다는 자체 평가가 있다. < 사진 : Google Cloud >

그럼에도 불구하고, TPU의 한계도 분명합니다. 모든 연산이 AI와 딥러닝의 추론으로만 이뤄지는 것이 아니기 때문이죠. GPU는 고성능의 렌더링, 과학 연산, 그래픽 처리 등의 다양한 분야에서 강점을 가진 반면, TPU는 AI와 Tensor 연산에 특화되어 있어서 AI 이외의 작업에서는 효용성이 떨어집니다. 또한, TPU는 GCP 상에서만 제공되며, 기업이나 연구자가 직접 구매해서 On-Premise로 사용할 수 있는 방법이 없습니다.

여기에 가장 결정적으로 GPU+CUDA의 강력한 성이 수십년간 방대한 생태계를 구축하고 있다는 겁니다. 수많은 프레임워크와 라이브러리, 도구, 숙련된 CUDA 사용자들에게 TPU로 전환을 촉구하기에는 부족한 면이 많죠. 그래서, 단기간 내에 TPU가 GPU를 대체하고, 구글이 엔비디아와 경쟁에서 승리할 수도 있기는 어렵다고 평가합니다.

**vLLM의 확장이 CUDA를 약하게 만들 것인가**

CUDA는 엔비디아의 GPU 하드웨어를 프로그래밍 하기 위한 저수준의 API, 즉 함수들을 엔비디아가 독점하여 만들어 운용하는 기술적 방패이고, vLLM이란 것은 CUDA 위에서 동작하는 GPU의 메모리와 커널 실행을 효율화한 LLM 전용 추론 엔진입니다.

vLLM은 기존 GPU 추론 방식인 CUDA+PyTorch (전통적인 추론 방법) 대비 성능이 뛰어납니다.

보통의 LLM은 사람이 질문을 하면 그때그때 따로따로 연산이나 추론을 해서 답을 하지만, vLLM은 비슷한 계산은 한 번에 묶어서 처리하고, 이미 계산한 건 기억해 두었다가 재사용하자는 방식으로 GPU를 훨씬 알뜰하게 사용하기 때문이에요. PagedAttention은 KV캐시라는 메모리를 사용할 때, 일반적으로 주욱 한 줄로 메모리를 붙여써서 낭비하는 방식이 아닌, 메모리를 작은 블록으로 꼭 필요한 페이지들을 연결해서 효율성을 높이는 기술로 vLLM이 가지는 강점입니다. 여기에 '한 명씩 차례대로'가 아닌 실시간 요청을 모아서 계산하는 Continuous Batching 등까지 더해서 CUDA를 더욱 똑똑하게, 병렬 요청에도 최적화할 수 있는 것이 vLLM인 것이죠.

![](https://blog.kakaocdn.net/dna/dMFh8f/dJMcagYgY3l/AAAAAAAAAAAAAAAAAAAAAHhs1JLzDARV6aPp7uBjqDvjOJz00vse-_0CnsoPTR5-/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=vCcqlLbN7sptMufN17lrRdh2Qx0%3D)

vLLM 아키텍처, LLM을 위한 효율적 메모리 관리가 핵심이라고 본다 < 사진 : Hopsworks.ai >

그런데, vLLM 덕분에 CUDA의 지위가 위험할 수 있다는 경고가 나오고 있습니다.

전통적인 GPU 연산의 최적화는 PyTorch를 사용할 때 CUDA를 커스텀하는 방식을 사용하기 때문에 높은 수준의 CUDA 지식이 필요하고, 엔비디아의 생태계에 묶여 있을 수 밖에 없었죠. 그러나, vLLM은 자동으로 GPU 최적화를 해주기 때문에 개발자들이 내부를 알지 못해도 성능을 최고 수준으로 뽑아낼 수 있습니다. 즉, CUDA를 똑 몰라도 추상화 수준으로 손쉽게 개발이 가능하다는 것이죠.

그럼, vLLM이 좋아질 수록, CUDA의 지위가 더욱 강력해지는 것이 아닌가 하겠지만, vLLM이 GPU에서만 최적화 되는 것이 아니라 TPU와 CLA, AMD ROCm으로 확장이 가능한 것이 문제입니다. XLA는 구글이 만든 머신러닝 컴파일러로, LLM과 머신러닝에서 계산을 최적화하는 CUDA가 저수준의 커널 호출로 연산하는 것에 비해, 고수준의 그래프 연산을 통해 최적화되어 있어요. XLA는 엔비디아의 CUDA이외에도 TPU, 심지어 AMD의 ROC을 지원합니다. 즉, XLA는 CUDA에 종속되지 않는 추론과 학습에 사용될 수 있어요. 그렇지만, 현재로서는 XLA도 CUDA위에서 동작하는 역할 밖엔 하지 못하죠. 비유하자면 이렇습니다.

- CUDA = 자동차 엔진 + 부품
- XLA = 자동차를 더 효율적으로 움직이도록 설계하는 엔진 제어 소프트웨어(ECU)

그렇지만, PyTorch와 XLA, vLLM에서 XLA 백엔드를 지원하는 것이 가능해 지면 완전히 다른 얘기가 펼쳐집니다. 지금까지 TPU의 가장 큰 약점이었던 라이브러리나 CUDA 수준의 생태계가 빈약했던 문제가 순식간에 사라지는 것이죠. 메모리 구석구석 최적화가 필요했던 C++의 시대에서 추상화된 JAVA가 모든 플랫폼에서 사용되게 되는 것과 비슷하다고 할까요? 즉, TPU가 모든 대형 LLM의 추론 머신으로도 활용될 수 있고, GPU 시장을 잠식할 수 있는 기반이 확보되는 셈입니다.

참, vLLM 덕분에 TPU가 CUDA를 이긴다가 아닙니다? vLLM이 좋아지게 되니까, 굳이 CUDA에 대한 의존성이 없어진다는 의미로 보시면 되겠습니다.

**앞으로의 시장 변화, 엔비디아는 어떻게 움직일 것인가?**

지금까지 LLM 추론을 대규모로 운영하려면, 엔비디아의 GPU 보유량이 바로 스케일의 법칙에 따라 최고의 경쟁력이었습니다.

그렇지만 XLA 백엔드가 확장되면 GCP는 TPU + vLLM 구성으로 가장 저렴하고 가성비 높은 AI 클라우드로 부상할 겁니다. AWS는 Trainium + vLLM 구성으로 엔비디아로의 의존성을 크게 낮출 수 있죠. Azure는 AMD와 손잡고 엔비디아와 협상할 수 있는 저렴한 카드를 쥘 수 있습니다. 이 얘기는 사용자 중심으로 Meta와 Mistral 같은 모델 개발업체들에게도 큰 부담을 줄여 줄 전망입니다. 최근 TPU의 존재가 엔비디아의 GPU 가격 상승에 제동을 걸고, 30% 가량이 비용을 낮추도록 압력이 되고 있다는 소식도 있죠.

엔비디아의 가장 강력한 AI 독점의 실체는 GPU가 아니라 CUDA 생태계입니다. 이 생태계가 너무 방대하기 때문에 다른 하드웨어가 끼어들 틈이 없죠. 그래서, 잘하던 것을 더욱 잘하려고 노력할겁니다. vLLM이 아무리 좋아져도 엔비디아 GPU에서 Tensor 연산이 더욱 빠르고, 가성비 높게 동작할 수 있도록 경쟁 가속기보다 2~5배 이상 높은 성능으로 만드는데 투자하고 있어요.

또한, CUDA 생태계를 더욱 폐쇄적으로 만들 것으로 전문가들은 예상합니다. PyTorch와 더욱 친화적으로 지내면서 CUDA 전용 커널과 라이브러리를 더 복잡하게 만들어서 경쟁자들이 모방할 수 없도록 모든 프레임워크 최적화를 CUDA 중심으로 만드는데 투자하겠죠. 특히 구글과 AMD가 따라오지 못하게 비공개 API를 쑤욱 끼워넣을지 모릅니다.

![](https://blog.kakaocdn.net/dna/cavrvS/dJMcafdZQhg/AAAAAAAAAAAAAAAAAAAAAEgEgW23joc6rzy-Zu__rq1DUp_GzZXM8iJ0DSODUXGh/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&allow_ip=&allow_referer=&signature=9CaRw%2FEFyUdbuQsp0arlFv9aCA8%3D)

엔비디아는 블랙웰을 비롯해 자사 생태계를 더욱 폐쇄적이고 강한 응집력으로 강화해 왔다. < 사진 : wccftech >

여기에 최근 VeraRubin을 기획하면서 엔비디아는 GPU + 메모리 + 네트워크 스택 전체를 독점적이면서 폐쇄적으로 만드는 구조를 강화하면서, 클라우드 업체들과 장기 공급 계약을 더욱 확대하고 있어요. AWS와 Azure, GCP와 3~5년의 장기 공급계약을 한다거나 하는 것으로 안전장치를 마련하는 것이 의미가 있긴 할 겁니다.

그럼에도 불구하고, AMD의 GPU가 엔비디아와 경쟁하게 된다? TPU가 엔비디아의 70%의 영업이익률에 타격을 입힐 것인가? 여러 재미있는 관점에서 보자면, 모든 경쟁은 소비자에게 이롭습니다. 여기에 하나 다른 리스크가 있다면, LLM이 대량의 스케일링으로 추론하는 학습 방식이 뒤집어 진다면? 하는 가정입니다. 그건 그것대로 재미있겠죠.
