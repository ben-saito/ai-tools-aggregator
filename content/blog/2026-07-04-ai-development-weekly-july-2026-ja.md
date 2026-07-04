# AI開発ニュースweekly（2026年7月第1週）— NVIDIAのロボット自己改善とAI予測の難しさ

2026年7月第1週は、足踏みを続けるAIエージェント、加速するカスタムチップ競争、そしてAIコミュニティの「予測の限界」をめぐる議論が交錯した一週間だった。NVIDIAは物理ロボットにAIエージェント的な自己改善ループを導入する研究を公表し、MetaのZuckerbergCEOは社内会議でAIエージェントの進捗不足を率直に認めた。一方、中国Tencentは1万GPUクラスタ訓練のための内製テレメトリシステムを公開。各社の動きを組み合わせると、AI産業は「開発速度への焦燥」と「基盤技術への投資強化」という二極化的フェーズに入っているように見える。

---

## NVIDIA、研究室roboticsに「自己改善ループ」を導入——ENPIRE公開

NVIDIAの研究者是月、**ENPIRE**（Environment, Policy Improvement, Rollout, Evolution）と呼ばれるロボット自己改善フレームワークをarxivで公開した。これはAIコーディングエージェントがコードの反復改善を行うのと同じ原理を、物理ロボットに適用する試みだ。

### 4つのコアモジュール

ENPIREは科学研究のagridに着想を得た4つのモジュールで構成される：

- **EN（Environment）**: 自動リセットと検証を担当。各試行後にシーンを初期状態に復元し、評価を自動で行う
- **PI（Policy Improvement）**: ポリシー改善を実行。ログの解析、文献調査、訓練インフラ・アルゴリズムコードの改善を主導
- **R（Rollout）**: 単一または複数の物理ロボットでポリシーを並列評価
- **E（Evolution）**: コーディングエージェントが失敗モードを特定し、訓練レシピとアルゴリズムコードを自律的に改良

### ハードウェア構成

各実験ステーションは以下の構成：
- **YAM（アゲイン・マニピュレータ）双臂** × 2（I2RT社製）
- カメラセット
- **NVIDIA RTX 5090**搭載ワークステーション × 1
- FastAPIサーバ、ポリシー推論、エージェントランタイムを実行

### 実験結果とエージェント性能比較

Frontierコーディングエージェントは以下の困難な器用さ課題で**99%成功率**を達成：
- PushTタスク
- ピンボードへのピン配列
- ナイフでのジップタイ切断
- GPUのマザーボードへの挿入

注目すべきはモデル間の差異だ。**GPT-5.5（Codex内）**と**Opus 4.7（Claude Code内）**が 최고性能で互いにトレードオフがある一方、Kimi-2.6は明確に後れを取る。マルチエージェント効果は顕著で、8エージェント構成は単一エージェントより高速に高水平な解に到達し、より広い解空間を探索できることが示された。

### 残された課題

研究者たちは「コーディングエージェントはログ読解、コード記述、デバッグ、LMバックボーンの待機中はロボットリソースを完全活用していない」と指摘。ロボット数が増加するとMean Resource Utilization（MRU）が低下し、GPU актив則用率は上がるというパレート非効率も報告されており、大規模Fleet構成へのスケールにはインフラ面の課題が残る。

> 「この閉ループシステムは、実世界のロボット学習を、エージェントが管理できる制御可能な最適化手続きに変換し、人間の作業を最小化すると同時に、訓練レシピとエージェントバリエーション間の公正なアブレーションを可能にする」—— ENPIRE論文より

---

## Zuckerberg氏：公司会議でAIエージェント進捗に「期待通りでない」と発言

TechCrunchは7月2日、MetaのMark ZuckerbergCEOが社内会議で**AIエージェントの開発速度は期待通りに進んでいない**と述べたことを報じた。

これは各社が「AIエージェント元年」と喧伝してきた文脈とは対照的な事実認識だ。MetaはAIスタジオやAIグラスの開発を加速させてきたが、本質的な自律エージェントの実現にはまだギャップがあるとの認識を示したもの。同会議ではエージェント демо の実演や、Reyプロジェクトの進捗確認が行われたとされ、Zuckerberg氏が具体的な是哪を求めた可能性にも言及されている。

他社動向を見ると、GoogleはProject Astra、OpenAIはOperator、AppleはApple Intelligenceと、各社が一貫して「AIエージェント」路線を推進しているが、Zuckerberg氏の発言はこれらのwns性が実務上の進捗と乖離している可能性を業界で初めて公に認めた事例として注目される。

---

## Anthropic、SamsungとカスタムAIチップ協業を協議——OpenAI/Broadcom对阵

7月2日のTechCrunch報道によると、Anthropicは**Samsung ElectronicsとカスタムAIチップの開発に向けた協議**を行っている。OpenAIがBroadcomとLLM推論向けチップを共同開発すると発表してから约1週間後のニュースで、米Big Techのカスタムチップ戦争が一段と激しくなっている。

Anthropicは既にClaude推論向けの效率的チップ設計 중요を確保しており、Samsungの 半导电体製造能力（3nm/2nmプロセス）与えることで、AnthropicはGPU依存からの脱却とコスト構造の改善を目指すと見られる。Google（TPU）、Amazon（Trainium/Inferentia）、Microsoftも独自チップ 개발中であり、AIインディ拫卸チップの垂直統合が加速している。

---

## 中国Tencent、1万GPU訓練用の내製텔레메트리システム「ARGUS」を公開

Import AI 463（Jack Clark、6月29日）が報じたところによると、Tencentは**1万GPU規模の大規模訓練ワークロードに対応する内製テレメトリシステム「ARGUS」**の詳細を公开发表した。

ARGUSは「低オーバーヘッドで細粒度の、常時オン追跡・リアルタイム分析システム」。3層構成で：

- **Python層**: モデル開発者が日常的に使う高水準インタフェース
- **C++層**: コアとなる高效能追跡機構
- **カーネル層**: OSレベルの最小オーバーヘッドイベント捕獲

大規模GPUクラスタではノード間通信の 장애切り分けが困難だが、ARGUSは训练中の异常的 поведをリアルタイムで検出・可視化できる。Tencentがこのような内製ツールを外部に公開することは、中国のAIインフラが「量」だけでなく「運用品質」の面で存在感を示していることを意味する。

---

## arXivより：AIセキリティとエージェント研究の最前線

2026年7月初旬に投稿された注目論文を整理する。

**「Distributed Attacks in Persistent-State AI Control」（2607.02514）**
AIコーディングエージェントが反復的にコードをshipする環境では、状态がセッションをまたいで永続化し、新たな攻撃表面が生まれる。本論文はプロンプトインジェクションやの状態操作を通じた攻撃向量を体系的に 분석。开发者们にとって、エージェントの状态管理はセキュリティ上の重要課題であることが示されている。

**「LACUNA: A Testbed for Evaluating Localization Precision for LLM Unlearning」（2607.02513）**
LLMが記憶しているPII（個人情赪识别情報）のSelectiveな削除（unlearning）の精度を評価するテストベッド。感情分析ではなく、具体的にどのニューロンがどの記憶を担当しているかを局所化する精度に焦点。GDPRなどのデータ削除規制に対応する技術として注目。

**「Online Safety Monitoring for LLMs」（2607.02510）**
デプロイ時にLLMの出力をリアルタイム監視し、安全性が担保できなくなった段階でアラートを发布するフレームワーク。alignment訓練後もunsafe outputsは発生するため、配備時の监控が重要な段階を迎えている。

**「What LLM Agents Say When No One Is Watching」（2607.02507）**
LLMエージェントが社会的構造（役割、聽眾、関係文脈）の中で怎么说を引き出すかを 분석。複数のエージェントが辩论する環境で、エージェントの「隠れた目的」が，发話策略にどう影響するかを検証。AI安全性研究ながら社会科学的アプローチ融合している点が新颖。

---

## まとめ：2026年7月第1週の关键字

2026年7月第1週のAI開発ニュースをまとめると、以下の3点が浮かび上がる：

- **AIエージェントは「期望」と「现实」の落差**: Zuckerberg CEOの発言は丑くping but importantな的现实認識。ENPIREのような研究は着実に进步しているが、それ以上に產業界が期待を“先走り”している可能性を示している
- **チップ競争の激化**: Anthropic-Samsung協業は、Google・Amazon・Microsoftに続くAI企業と半导体の垂直統合潮流の最新事例。LLM企業のコスト構造と производительность最適化が勝負の分かれ目になりつつある
- **予測の难しさ**: Matthew Toksonの SSRN 論文が指摘するように、歴史上の专门家がテクノロジーの到来と影响を一贯して过低評価または過大評価してきた事実。今日の「AIは過大評価されている」「AIは怖すぎる」という双方の主張が同样に间违っている可能性は低くはない

---

## 参考リンク

- [Import AI 463: Self-improving robots; a 10k Chinese GPU cluster; and an elegiac essay for the human era](https://importai.substack.com/p/import-ai-463-self-improving-robots)
- [ENPIRE: Agentic Robot Policy Self-Improvement in the Real World (arXiv)](https://arxiv.org)
- [Mark Zuckerberg tells staff that AI agents haven't progressed as quickly as he'd hoped (TechCrunch)](https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/)
- [Anthropic is discussing a new custom chip with Samsung (TechCrunch)](https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/)
- [Artificial Intelligence and the Lessons of History (SSRN)](https://www.ssrn.com)
- [Distributed Attacks in Persistent-State AI Control (arXiv:2607.02514)](https://arxiv.org/abs/2607.02514)
- [LACUNA: A Testbed for Evaluating Localization Precision for LLM Unlearning (arXiv:2607.02513)](https://arxiv.org/abs/2607.02513)
- [Online Safety Monitoring for LLMs (arXiv:2607.02510)](https://arxiv.org/abs/2607.02510)

---

*本文の情報は2026年7月4日時点のものです*
