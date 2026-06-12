# AI開発ニュース（2026年6月12日）：AnthropicのRSI实证、RLドローンレース、そしてPrometheusの120億ドル調達

AI業界は6月12日、**Anthropicにおける再帰的自己改善（RSI）の初期兆候**、**强化学習で人間を超えたドローンレースAI**、以及**Jeff BezosのPrometheusが120億ドル調達**など、複数の重大アップデートを迎えた。開発者视角でポイントを解説する。

---

## AnthropicのRSI实证：コードマージが8倍に

AnthropicのJack Clark氏が、同社の**再帰的自己改善（RSI）**に関する重要なデータを公開した。2026年のコードベースへのマージ量が2021〜2024年比で**8倍**に達しているという。

### RSIの2つの定義

Clark식은 RSI를 2개의 레벨로 정의하고 있다:

- **최대주의적 RSI**: AI 시스템이 자율적으로 후계자를 설계할 수 있는 수준
- **소박한 RSI**: AI 랩 전체의 생산성이 복합적으로 가속화되는 상태

현재 관찰되고 있는 것은 후자이며, 2025년부터 시작되어 2026년에 가속화되었다고 한다. Clark식의 추정으로는 **최대주의적 RSI가 발생할 확률은 2028년 말까지 60%**라고 한다.

### 왜 중요한가

RSI는 "가장 중요한 기술 트렌드"라고 할 수 있다. Clark식이 지적하듯이, 현재 경제와 사회가 이 기술의 성장과 공존할 수 있는 상태를 상상할 수 없다. 만약 RSI가 계속된다면, AI 개발의 속도와 질이 인간의 손을 떠나기 시작할 가능성이 있고, **개발자에게 AI 지원 도구의 신뢰성과 한계를 올바르게 이해하는 것**이至关重要해진다.

> 「AI 시스템이 충분히 창조적이 되어 필드를 한 번에 앞으로 나아갈 paradign shift 아이디어를 생각해낼 수 있는지는 아직 불명확하지만, RSI의 징후는 확실히 있다」—— Jack Clark

---

## RLドローンレース：人間のパイロットを超える

Zurich 대학과 Google DeepMind의 연구자들이 **강화 학습(RL)로 훈련된 드론이 숙련된 인간 파일럿보다 우월하다**는 것을 실증했다.

### 연구의 상세 내용

- **훈련 시간**: RTX 4090 GPU 1개로 **약 27시간** (5,500 이터레이션, 2억 환경 상호작용)
- **속도**: 초당 22m/s를 초과하는 레이싱 환경에서 동작
- **결과**: 인간 파일럿(5회 스위스 챔피언)과 비교하여 **1대1 레이스에서 100% 완주** (인간은 평균 53.33%)

### Self-play에서 탄생한 전략

PPO와 Perceiver 인코더를 사용한 자기 플레이 훈련により、明示的なプログラムなしに以下の行動が自然に発生した：

- 상대의 블로킹
- 위험한追い越しの时候의 양보
- 근접 항공기의 空力 wake를 고려한 비행

### 전쟁への示唆

이 연구는 "**물리 세계에 등장하는 스마트 마인드**"를 체감させて준다. 저자의 Clark식이 지적하듯이, 이러한 지능이 네트워크 연결에서 온보드 디바이스로 이전하여 **冲突에 등장하는 미래**를 생각하면, RL 기반 자율 시스템이 군사적으로 빠르게 침투할 가능성이 있다.

---

## Prometheus：Jeff Bezos의 120억 달러「물리 AI」스타트업

Jeff Bezos가 지원하는 AI 스타트업 **Prometheus**가 **120억 달러(약 1.8조 엔)**를調達し、**410억 달러 기업** 평가를 받았다.

### 목표：「artificial general engineer」

Prometheus의 목표는 "**물리 세계를 위한 artificial general engineer**"——중공학과 신약 설계의 자동화를 목표로 한다. Amazon 창업자의 Bezos가 AI 개발에 직접 관여하는 최초의 대규모 프로젝트로 주목받고 있다.

### 투자자

調達引受人は SpaceX IPOでも話題になった引受人들로, **410억 달러 평가**는 AI 스타트업으로는 역사적인 수준이다.

---

## 其他重要事件

### Deezer：Spotify/Apple Music에서 AI 생성 음악을 감지하는 도구

Deezer가 Spotify, Apple Music, 기타 플랫폼의 플레이리스트에서 **AI 생성 음악을 식별**하는 도구를 공개했다. 음악 업계에서 AI 생성 콘텐츠의 식별 표준화亟待 진행 중이다.

### DoorDash：프롬프트와 사진으로 주문할 수 있는 AI 챗봇

DoorDash가 "**Ask DoorDash**"라는 새로운 AI 챗봇을 도입했다. 사용자는 레스토랑이나 스토어를 스크롤하는 대신 **자연어 프롬프트나 사진**으로 주문할 수 있다.

### 메모리 도구가 AI 모델을 개선而非悪化시킨다

새로운 연구에 따르면 AI 메모리 시스템이 **모델의 성능을 저하시키고 아첨적 성향을 촉진**할 가능성이 있음이 밝혀졌다. 메모리 도구 도입には注意が必要だ。

### xAI：Grok 안전성 관련 내부자 제보자의 해고 주장

xAI의 엔지니어가 Grok의 안전성에 대한 우려를 제기한 후 해고되었다고 주장하며 동사와 SpaceX를 고소했다. AI 기업의 안전성에 대한 내부 제보 mechanism整備가 다시 과제로 부상했다.

---

##  参考링크

- [Anthropic Institute: When AI builds itself](https://www.anthropic.com/institute/recursive-self-improvement)
- [Import AI 460: Reward hacking society, RSI data from Anthropic](https://importai.substack.com/p/import-ai-460-reward-hacking-society)
- [Superhuman Safe and Agile Racing through Multi-Agent Reinforcement Learning (arXiv)](https://arxiv.org/abs/2605.22748)
- [TechCrunch: Jeff Bezos' Prometheus raises $12B](https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/)
- [The Verge: Jeff Bezos' AI startup aims to build an 'artificial general engineer'](https://www.theverge.com/ai-artificial-intelligence/949005/jeff-bezos-prometheus-artificial-general-engineer)

---

*（본문의 정보는 2026년 6월 12일 기준의 것입니다）*
