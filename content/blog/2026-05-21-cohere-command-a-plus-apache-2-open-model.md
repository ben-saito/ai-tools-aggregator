# CohereがApache 2.0ライセンスのオープンモデル「Command A+」を発表——損失なし量子化とネイティブ引用を実現

2026年5月、AI業界においてCohereのCommand A+リリース为代表する多个的重大発表があった。加拿大的AI研究室Cohereは、2180億パラメータのSparse Mixture-of-Expertsモデル「Command A+」をApache 2.0ライセンスで公開した。本モデルは無損失量子化技術により、単一のNVIDIA Blackwell B200 GPUまたは2つのH100 GPUで動作可能であり、375 tokens/秒という高速推論を実現する。

---

## Sparse MoEアーキテクチャと4ビット量子化の革新的技術

Command A+はデコーダーのみのSparse Mixture-of-Experts（MoE）Transformerアーキテクチャを採用している。全パラメータ数は2180億だが、各生成ステップで実際にアクティブなのは250億のみ。この稀疏性により、OpenAIのGPT-5.5やAnthropicのClaude Opus 4.7（推定数兆パラメータ）と比較して大幅に少ない計算リソースで動作する。

Cohereが開発したW4A4量子化方式是、技術的ハイライトだ。通常のreasoningモデルでは量子化により複雑な問題解決能力が低下する「量子化税」が发生する。CohereはMoE expertsのみを4ビットに量子化し、重要なattention pathwayは全精度を維持，加上Quantization-Aware Distillation技術を組み合わせることで、事実上无损な圧縮を実現した。

推論性能の数値如下：
- **375 tokens/秒（TOPS）**、Time-to-First-Token（TTFT）レイテンシ113ミリ秒
- 前世代比で**出力速度63%高速化**、レイテンシ17%軽減

---

## ネイティブ引用と48言語対応

Command A+の另一个大きな特徴は無损失量子化と并行するネイティブ引用機能だ。モデルは出力にspecial tagsを埋め込み、各事実的主張を特定の問題ソースドキュメントまたはデータベース行に直接リンクする。この機能は、RAG（Retrieval-Augmented Generation）世代の開発者にとって、回答の信頼性向上とコスト削減两个方面で重要な进步となる。

新しいtokenizerは48言語をネイティブサポートし、非ヨーロッパ言語のトークン効率も大幅に改善：
- **アラビア語：20%軽減**
- **日本語：18%軽減**
- **韓国語：16%軽減**

---

## ベンチマーク跳躍：Telecomで37%→85%、数学で57%→90%

Command A+はagenticタスク特化のベンチマークで剧的な改善を示した：

| ベンチマーク | 旧Command A | Command A+ |
|-------------|-------------|------------|
| τ²-Bench Telecom（复杂推理） | 37% | **85%** |
| Terminal-Bench Hard（agentic coding） | 3% | **25%** |
| AIME 25（数学） | 57% | **90%** |

これらの数値は、モデルが自律的なマルチステップワークフロー、外部ツールの使用、データベース クエリに対して大幅に強化されたことを示している。

---

## AI業界全体を震撼させた其他の注目発表

### Anthropic、初四半期黒字へ——Revenue $10.9Bに倍増

Anthropicは投資家に向け、2026年第2四半期にRevenueが約**109億ドル**に倍増し、初の黒字四半期を迎えると報告した。Claudeシリーズのプロ棋学的高端企業需要が急拡大している。

### OpenAI、80年老後の数学問題を解決

OpenAIはreasoningモデルにより、1946年以来未解決的几何学予想を反証したと主张。数学者们も前回のような误りを指摘しておらず、今回は初めて検証合格的と見られている。

### xAI、Anthropicへ$1.25B/月で.compute提供

Elon MuskのxAIは、Anthropicに月12.5億ドルのcompute提供契約を结结。SpaceXのIPO申請资料显示、xAIは2025年に**64億ドル**を消费しており、xAIのGrohk展開費用の大きさが明らかになった。

### Nvidia、記録的四半期を更新——AI agents向けCPUで新市場

Nvidiaは另記録的四半期を発表。Jensen Huang CEOは、AI agents向けCPU市場で**2000億ドル**の新規市場を特定했다고表述した。同社は 또한 AI startupsへの投資持高が**430億ドル**に達したことを開示した。

---

## 参考リンク

- [Cohere cracks lossless quantization and native citations with first full Apache 2.0 licensed open model Command A+ | VentureBeat](https://venturebeat.com/ai/cohere-cracks-lossless-quantization-and-native-citations-with-first-full-apache-2-0-licensed-open-model-command-a/)
- [Anthropic says it's about to have its first profitable quarter | TechCrunch](https://techcrunch.com/2026/05/20/anthropic-says-its-about-to-have-its-first-profitable-quarter/)
- [OpenAI claims it solved an 80-year-old math problem | TechCrunch](https://techcrunch.com/2026/05/20/openai-claims-it-solved-an-80-year-old-math-problem-for-real-this-time/)
- [xAI burned $6.4B last year | TechCrunch](https://techcrunch.com/2026/05/20/xai-burned-6-4b-last-year-spacexs-ipo-filing-shows-why-the-spending-is-far-from-over/)
- [Anthropic will pay xAI $1.25B per month for compute | TechCrunch](https://techcrunch.com/2026/05/20/anthropic-will-pay-xai-1-25-billion-per-month-for-compute/)
- [Nvidia posts another record quarter | TechCrunch](https://techcrunch.com/2026/05/20/nvidia-posts-another-record-quarter-reveals-43-billion-of-holdings-in-startups/)

---

*本記事の情報は2026年5月21日時点のものです。*