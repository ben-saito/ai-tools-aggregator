# Google Managed Agents API / Cohere Command A+ / CerebrasがAI推論アーキテクチャを変える --- 2026年5月の重要動向

2026年5月、AI推論とエージェント管理の現場が大きく動いている。Googleは1度のAPIコールでエージェントをデプロイできる「Managed Agents API」を発表し、CohereはApache 2.0ライセンスでCommand A+を開放、Cerebrasは中国製1兆パラメータモデル「Kimi K2.6」を米エンタープライズに提供開始した。本稿ではこれらの技術的詳細と、アーキテクチャ上の意義を整理する。

---

## Google Managed Agents API：実行層の所有権をめぐる攻防

Google I/Oで明らかになったManaged Agents APIは、エージェントデプロイの工数を「数週間」から「単一APIコール」に圧縮する。だが、その代償は執行層（execution layer）の制御権をGoogleに渡すことにある。

### プラットフォームvsフレームワーク：2つの思想

従来、エージェントオーケストレーションはモデルの上位に構築され、ルーティングと実行の制御は独立したランタイムで担われてきた。だが今、この層をそのままプラットフォーム自体が吸収しつつある。

| プロバイダー | アプローチ | 制御の所在 |
|---|---|---|
| **Anthropic** (Claude Managed Agents) | モデル層にオーケストレーションを埋め込み、エンタープライズが実行を制御 | モデル層 |
| **AWS** (Bedrock AgentCore) | 管理されたハーネスで事前タスクを結合 | インフラ層 |
| **Google** | モデル、ハーネス、サンドボックスを最適化して一体化、Google管理環境で実行 | 垂直統合 |

GoogleのManaged Agentsは Antigravity CLI と連携し、Google AI Studioのカスタムテンプレート経由でプレビュー提供されている。RampのRené Sultan氏によれば「Gemini Managed Agentsの本質は、エージェントランタイムがプラットフォームに移動すること」で、開発者は「ドメイン固有の振る舞いの製品化」に集中できる。

### リスク要因

XYO創業者のArie Trouw氏の警告：「確定的なサービスを確率的サービスに交換するリスクがある。最悪の場合、データ破損につながる可能性がある。すべてが釘に見えてしまう——これは1990年代から繰り返されてきたパターンだ」

---

## Cohere Command A+：損失なし量子化とネイティブ引用を両立

Cohereが5月20日に公開した **Command A+** は、2180億パラメータのSparse Mixture-of-Experts Transformerだ。Apache 2.0ライセンスでHugging Faceから自由に入手できる——企業にとって「主権AI」（sovereign AI）を実装するための重要な選択肢となる。

### Sparse MoEアーキテクチャの実態

Command A+は全パラメータ2180億のうち、1生成ステップあたりわずか250億のみをアクティブにする。OpenAIのGPT-5.5やAnthropicのClaude Opus 4.7が推定数兆パラメータであることに比べると、計算リソース要件はずっと低い。

8人の「専門家」ネットワークへのクエリをルーティングし、残りは休眠状態させる——これにより、巨大モデルの知識保持と高速性を維持しながら、計算コストを大幅に削減できる。

### W4A4量子化：技術的ハイライト

Command A+は BF16 / FP8 / W4A4 の3つの量子化形式で提供される。W4A4（4ビット重み、4ビット活性化）は技術的中心的場所で、通常、圧縮率が高まると複雑な問題解決力が目に見えて低下する（「量子化税」）。

Cohereは以下の手法でこの問題を回避した：
- MoE experts のみ4ビット量子化
- 重要な注意機構パスは完全精度を維持
- **Quantization-Aware Distillation** を併用

これにより、NVIDIA Blackwell B200 **1枚** または H100 **2枚** で動作する。375 tokens per second（TOPS）、Time-to-First-Token（TTFT）113ミリ秒——前世代のCommand A Reasoning 比で速度63%向上、遅延17%減少。

### ネイティブ引用：正確性の担保

Command A+の目玉機能の一つが **native citations**。出力に特殊タグを埋め込み、事実のあらゆる主張を具体的なソース文書またはデータベース行に直接紐づける。これはRAGよりも正確で、文脈の妥当性を検証しながら生成できる。

48言語のネイティブサポートに加え、非欧州言語のトークン効率が大幅に改善：
- アラビア語：20%削減
- 日本語：18%削減
- 韓国語：16%削減

推論コストがトークン単位であることを踏まえると、グローバルな多言語展開の運用コスト削減に直結する。

### ベンチマークの飛躍

| ベンチマーク | 前世代 | Command A+ |
|---|---|---|
| τ²-Bench Telecom（複雑な推論） | 37% | 85% |
| Terminal-Bench Hard（エージェントコーディング） | 3% | 25% |
| AIME 25（複素数学） | 57% | 90% |

---

## Cerebras × Kimi K2.6：wafer-scaleチップで trillion-parameter 模型を7倍速で提供服务

5月20日、Cerebras Systemsは IPO後 最大の手牌としていた trillion-parameter モデル「**Kimi K2.6**」を企業向けに提供服务開始を発表。北京発のMoonshot AI開発のこのモデルは、Cerebrasのアプローチの違いを鮮明に浮き彫りにした。

### ベンチマーク結果：981 tokens/second

Artificial Analysisによる独立検証で、Cerebrasは **981 output tokens/second** を記録。下一个最快のGPUベースクラウドプロバイダー对比6.7倍速い。中央値对比では23倍速い。

標準的なエージェントコーディングリクエスト（10,000入力トークン + 500出力トークン）の場合：
- **Cerebras**：5.6秒
- **公式Kimiエンドポイント**：163.7秒
- **改善**：29倍

### なぜCerebrasはGPUより速いか

GPUクラスタでは、モデルのパラメータが多くの離散チップに分散され、データが高帯域幅のネットワーキングファブリック経由で常時移動する。万亿パラメータモデルではGPU間の相互接続帯域幅がボトルネックになる。

Cerebrasのwafer-scaleアーキテクチャーは晶子上に了整个のモデルを構築。パラメータ間の移動に必要なネットワーク就越えるため、trillion-parameter モデルでも单一 chip から提供服务できる。

### 中国モデルの採用：地政学的考慮

Kimi K2.6の選定には技術的理由と商業的理由の両方がある。SWE-Bench Proで58.6点を記録し、Claude Opus 4.6 outperformering、GPT-5.4と匹敵する。特工ベンチマーク（Humanity's Last Exam、DeepSearchQA）でも lider スコア。

ただし、金融サービス、医療、防衛分野のエンタープライズ買い手にとっては、中国発モデルの導入が compliance 要件に抵触する可能性がある。

---

## エンタープライズAIエージェントが「忘れる」問題：Decision Context Graph の提案

もう一つの重要話は、エンタープライズAIエージェントの pilot 以後の進展が停滞する問題についてだ。問題の核心は「モデル」ではなく「学習内容の保持」にある。

### RAGの限界

RAG（Retrieval-Augmented Generation）は意味的に相关新闻を検索擅长だが、そこで止まる。文書を検索しても、その文書が現在の decision に適用可能か否か、優先される競合ルール是否存在か——这些を判断する構造が欠缺している。

「全員はRAGから始める：相关新闻引いて、プロンプトに詰めて、モデルに判断させる」とNorthwest AI ConsultingのWyatt Mayham氏。「チャットボットにはそれで動くが、決定とアクションが必要なエージェントには즉座に破綻する」。

### Decision Context Graph のアーキテクチャ

Rippletide（Neo4jエコシステム）が提案した Decision Context Graph は、エージェントに構造化されたメモリと時間認識の推論能力を与える。

三つの基本原理：
1. **適用可能性**：ロジックを明示的に符号化し、エージェントが特定状況でどのルールを適用すべきかを認識
2. **時間認識メモリ**：各ルール、判断、例外に時間スコープを設ける。「当時何が真だったか、今は何か」を推論可能に
3. **判断パス**：判断の根拠を明示的に追跡——類似ケースへの適用可否を確認してから実行

「一度 satisfactory と評価されたら、グラフはそのアクション順序を freeze する」とRippletideの共同創業者Yann Bilien氏。「戒めることで、validated behaviors の安定した基盤から将来の探索を開始できる」。

---

## 参考リンク

- [Google's Managed Agents API promises one-call deployment at the cost of execution layer control](https://venturebeat.com/ai/googles-managed-agents-api-promises-one-call-deployment-at-the-cost-of-execution-layer-control)
- [Cohere cracks lossless quantization and native citations with first full Apache 2.0 licensed open model Command A+](https://venturebeat.com/ai/cohere-cracks-lossless-quantization-and-native-citations-with-first-full-apache-2-0-licensed-open-model-command-a)
- [Cerebras says its chips run a trillion-parameter AI model nearly 7 times faster than GPU clouds](https://venturebeat.com/ai/cerebras-says-its-chips-run-a-trillion-parameter-ai-model-nearly-7-times-faster-than-gpu-clouds)
- [Enterprise AI agents keep failing because they forget what they learned](https://venturebeat.com/ai/enterprise-ai-agents-keep-failing-because-they-forget-what-they-learned)

---

*（本文の情報は2026年5月21日時点のものです）*