# AI開発ニュース（2026年7月第4週後半）—— Kimi K3の蒸留疑惑、AMDがAnthropicに50億ドル投資、Nvidiaが医療ロボティクスにPhysical AI框架

2026年7月第3週末から第4週前半にかけて、AI開発領域で技術的・政策的な重要展開が重なった。Moonshot AIのKimi K3リリース（7月16日）をめぐるAnthropic Fable蒸留疑惑が米政府を巻き込んで加熱する一方、AMDがAnthropicに最大50億ドルを投資し、AIインフラの多極化が一段と進んだ。またNvidiaは医療ロボティクス向けのPhysical AIシミュレーション框架を発表し、ロボットの訓練方法に変革をもたらそうとしている。

---

## Moonshot AI、Kimi K3の蒸留疑惑に直面—— 専門家の反応は懐疑的

米White HouseのMichael Kratsios科学顧問がMoonshot AIがAnthropicのFableモデルを蒸留（distillation）してKimi K3を開発したと主張し、注目が集まった。財務省のScott Bessent長官も多くの中国モデルに米大手LLMの透かしが見つかったと陈述し、制裁の可能性に言及した。

Kimi K3は7月16日にリリースされたオープンウェイトモデルで、**2.8兆パラメータ**——これは史上最大のオープンウェイトモデルだ。米国の輸出規制対象チップを绕过するため、Moonshotは演算能力の代わりにメモリに依存する設計を採用している。具体的には：

- **Mixture-of-Experts（MoE）**: 2.8兆パラメータを896の専門セクションに分割し、一度にそのうち16（約1.8%）のみをアクティブにする。計算量が大幅に削減される
- **4ビット量子化**: 全パラメータを4ビット精度で訓練（通常の16ビットの1/4）。モデルサイズは**約1.4TB**に（フル精度なら5.6TB）
- **Kimi Delta Attention**: 百万トークンコンテキストでのデコード高速化技術。vLLMプロジェクトにキャッシュコードを寄贈

Moonshotは創業者の一人がCMU PhD出身者とされ、中国チームの技術的専門性は高いと指摘される。米国の輸出規制チップ（H200、Grace Blackwell 300）への不正アクセス疑惑も浮上しているが、確証は明示されていない。

**開発者にとって的意义:** オープンウェイトモデルの商用展開において、蒸留と自前訓練の境界線が曖昧になりつつある。法域ごとの輸出規制と技術移転の議論は、2026年下半期のAI政策における最重要論点の一つとなるだろう。

---

## AMD、Anthropicに最大50億ドル—— 2ギガワット規模のAIインフラ整備

AMDは7月23日、Anthropicとの間で最大**50億ドル**（約7,700億円）規模のインフラ投資合意を締結した。AnthropicはAMDのInstinct MI450シリーズ（MI455X GPUを含む）を採用し、最大2ギガワット分の容量を展開する。第一ギガワットは2027年前半にデプロイ開始予定。

取引構造の特徴：
- AMDはAnthropicへの**戦略的株式投資家**としても別途参加
- AnthropicはAMD Heliosシステム（MI455X GPU + EPYC Venice CPU + Pensandoネットワーキング + ROCmソフトウェア）を採用
- NVIDIAとの競合が鮮明に——NVIDIAもOpenAIに最大300億ドルの投資を検討中と報道

AMDにとってAnthropicはOpenAI（最大6ギガワット規模、 warrant発行）に次ぐ大型顧客。Meta向けにも6ギガワット規模の供給合意を持つ。

**開発者にとって的意义:** AMD ROCmエコシステムの重要性が増している。AnthropicのClaudeがAMD GPU上で動作することになれば、LLMデプロイ先の選択肢が大きく広がる。H100/H200に加えてMI450シリーズへの対応状況を把握しておくべきだ。

---

## Nvidia、医療ロボティクス向けMedical Physics Simulation框架を発表

Nvidiaは7月23日、医療ロボティクス向けのPhysical AIシミュレーション框架Medical Physics Simulationを発表した。Isaac for Healthcareプラットフォームへのオープンソース追加として提供される。

**Physical AIとは:** 言語モデルがテキストから学習するのに対し、Physical AIシステムは接触、力、結果を通じて世界の振る舞いを学習する。手術ロボットにとってのカニューレが血管壁に引っかかる感触や、ロボットアームが軟部組織に過大な力をかける状況は、本物に触れるか、詳細なシミュレーションなしには得られない。

**框架の構成:**
1. **古典物理シミュレーション**: カニューレの屈曲、血管壁の抵抗、接触力の変化など既知の力学規則を計算
2. **Cosmos-H Dreams（生成AI）**: 手続きデータから学習した視覚的シーン動態を生成。軟部組織の変動をシミュレート

**性能:** 8,192の並列環境を実行する場合、訓練時間が**5時間以上から2分未満**に短縮。ただしこれは処理スループットの数値であり、臨床的な信頼性を示すものではない。

**早期採用組織:**
- **CMR Surgical**: 自社Versius Surgical Robotic Systemの匿名化臨床データ500時間以上をOpen-H Embodimentデータセットに提供。軟部組織相互作用のモデリングに使用
- **Johnson & Johnson MedTech**: Cosmos基盤モデルを使い、MONARCHプラットフォームのデジタルツインを構築。泌尿器領域の結石シナリオに焦点

**技術的に注目すべき点:** シミュレーション上の故障モードが実際の外科手術室での故障モードと一致するかどうかは別の問題だ。言語モデルがエッジケースで失敗すれば悪い回答を返すだけだが、物理AIが失敗すれば患者体内での事故になり得る。

**開発者にとって的意义:** 医療ロボティクスの開発者にとって、シミュレーション基盤の開発は規制上・倫理上のリスクを低減しながらエッジケースを生成できる有力な手段となる。Isaac for Healthcareのオープンソース化は、学术機関や中小ベンチャーの参入障壁を下げるだろう。

---

## 参考リンク

- [Moonshot AI Kimi K3 — Memory-Centric Design Analysis](https://www.artificialintelligence-news.com/news/kimi-k3-open-weight-model-memory-compute-china/)
- [Experts React to Fable Distillation Allegations](https://techcrunch.com/2026/07/23/experts-say-exploiting-anthropics-fable-isnt-how-kimi-k3-got-so-good/)
- [AMD to invest up to $5 billion in Anthropic](https://www.artificialintelligence-news.com/news/amd-anthropic-ai-infrastructure-deal/)
- [Nvidia Physical AI for Healthcare Robotics](https://www.artificialintelligence-news.com/news/nvidia-bets-physical-ai-solve-healthcare-robotics-data-problem/)

---

*（本文の情報は2026年7月25日時点のものです）*
