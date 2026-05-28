# AI開発最新ニュース（2026年5月第4週）：Anthropicが650億ドル調達でIPO間近、Stack AIがAsanaに買収

2026年5月第4週は、AI業界において大型資金調達と企業買収が続き、生成AIプロダクトの商用展開がいっそう加速した1週間となった。Anthropicの650億ドル（約9.7兆円）調達はAIスタートアップ史上最大規模級となり、IPO計画が現実味を帯びている。

---

## Anthropic、650億ドルのシリーズH調達で評価額9650億ドル — IPO間近

TechCrunchの報道によると、Anthropicは本日（5月28日）、650億ドルのシリーズHラウンドを完了し、post-money評価額**9650億ドル（約145兆円）**に達した。これは有可能成为AIスタートアップとしては最終私営資金調達になるとみられ、高く支持されているIPO前の投資家ラウンドとなる。

### 技術的背景

Anthropicの主力製品である**Claude**シリーズ（Claude 4 Sonnet / Opus）は、2025年後半からEnterprise市場での採用が急拡大している。Claude Code（CLIコーディングエージェント）は月額最大200ドルの有料プランを提供するが、一方でAnthropicは**Computer Use**機能（Claudeが直接ユーザーのデスクトップ環境を操作し、ブラウザやファイルシステムを自律的に扱う）も提供開始。VS CodeやJetBrains製のIDE拡張とも連携強化が進んでいる。

### 開発者にとっての意味

評価額9650億ドルという数字は、OpenAIの推定評価額（約3000億ドル）を大きく上回りつつあり、**LLM提供商としてのAnthropicの市場地位が確立**されつつあることを示す。IPO後は一般投資家もClaude APIを活用したビジネスを展開しやすくなり、Claude生態系の第三方ツール市场规模も拡大が予想される。

---

## Asana、Stack AIを買収 — ノコードAIエージェントビルダーの垂直統合

同日にAsanaが**Stack AI**（ノコードAIエージェントビルダー）の買収を完了した。Stack AIは、非技術者がビジュアルインターフェースでLLMワークフロー（例：RAGチェーン、LangGraph代替のグラフ型エージェント）を構築できるプラットフォームで、2024年にYC W24毕业出している。

### 技術的ポイント

- Stack AIは**LangChain / LangGraph**ベースの Retrieval-Augmented Generation (RAG) パイプラインをビジュアルブロックで構築可能
- 主要LLMプロバイダー（OpenAI / Anthropic / Google / Azure OpenAI）との接続を標準サポート
- Asanaのプロジェクト管理機能と組み合わせることで、**AIエージェント工作任务振り舞い**をプロジェクトレベルで構成できる点が差別化

### 市場動向

この買収は、Notion（Notion AIアシスタント）、ClickUp（ClickUp Brain）、Slack（Slackbot AI agent）に続く、**ワークプレイスツール × AIエージェントの垂直統合**の流れを象徴する。既存のPMツールユーザーにAIワークフロー構築能力を提供することは、B2B SaaSにおける標準的なDXアプローチになりつつある。

---

## AIトークンの先物取引来了 — 商品先物交易所がAIトークン派生商品开发へ

TechCrunch另一报道指出、**大手商品先物交易所がAIトークン（Compute tokens / AI utility tokens）を対象とした先物・派生商品开发を進めている**。AIトークンはこれまで「ETH」のような cryptocurrency と同じアセットクラスで扱われることが多かったが теперь они переосмысливаются как **電力量や帯域幅のような「原料」** — AIの実行に必要な計算資源の抽象化として、商品先物市場での取引が検討されている。

### 開発者・事業者への影響

この潮流は以下に影響を与える：
- **AI APIのコストヘッジ**：企業のAI支出がトークン先物としてリスク管理可能に
- **AI-as-a-Commodity**：LLMprovider間の性能差が縮小する中で、APIの先が市場が価格安定性を提供
- **新しい金融商品**：AI演算量ベースのETF・先物ETF 등이 등장の可能性

---

## Nous Research、NousCoder-14Bをリリース — Claude Code моментに投入されたオープンソースコーディングモデル

VentureBeatが報じたものとして、Nous Researchが**NousCoder-14B**をリリースした。This is a 14 billion parameter open-source coding model optimized for IDE integration, positioned as an alternative to Claude Code and GitHub Copilot for teams seeking on-premises or cost-effective solutions.

### 技術的特徴

- **14Bパラメータ**でCoding評価尺度（HumanEval+ / MBPP）でClaude 3.5 Sonnet相当の性能を達成
- **Ollama / LM Studio** 向けの量化バージョン（Q4_K_Mなど）が即日利用可能
- ライセンスは**Apache 2.0**（商用利用可）
- 主な用途：コード補完、自動デバッグ、Pull Request作成

### 競合との比較

| モデル | パラメータ | 商用利用可能 | コスト |
|--------|-----------|------------|--------|
| NousCoder-14B | 14B | Apache 2.0 | 自己ホスティング |
| Claude Code | N/A (API) | 不可 (Anthropic API) | $200/月 |
| GitHub Copilot | N/A (API) | 企業向け有償 | $19/月 |

---

## VentureBeatその他の注目トピック

### Railway、1億ドル調達でAWS挑战

AI Native Cloud providerの**Railway**が1億ドルを調達し、**AWS・GCP・Azureに代わるAIワークロード特化型のクラウドインフラ**として宣戦布告した。特徴は：

- **秒単位のスケーリング**（ホットコールドなく、需要に応じたオンデマンドなCompute供給）
- GPUインスタンスコスト効率（NVIDIA H100 / B200）を企業ユーザーに直接提供
- 2025年後半に提唱された**AI Native**とうたわれるサービス形態（モデルサービング、Fine-tuningパイプライン含む）

### Goose対Claude Code：無料代替の台頭

AnthropicのClaude Codeが月額最大200ドルの有料CLIツールであるのに対し、Google孵化した**Goose**が同等の機能を無料提供するとして話題になった。Gooseはオープンソースで、自己ホスティング可能なCoding Agentであり、Enterprise向けの支出削減ツールとして期待されている。

---

## まとめ

2026年5月第4週は、**Anthropicの巨大調達 + IPO計画**と**B2B SaaSのAIエージェントへの垂直統合**という2つの大きなテーマが中心となった。NousCoder-14Bのようなオープンソースコーディングモデルの躍進も、Claude Code等の有料ツールとの競争を激しくし、開発者にとってテクStackの選択肢が広がる一周となった。

---

## 参考リンク

- [Anthropic raises $65 Billion, nears $1T valuation (TechCrunch)](https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/)
- [Asana acquires Stack AI (TechCrunch)](https://techcrunch.com/2026/05/28/asana-acquires-no-code-agent-builder-stack-ai/)
- [AI token futures trading (TechCrunch)](https://techcrunch.com/2026/05/28/just-like-gold-and-oil-well-soon-be-able-to-trade-ai-token-futures/)
- [Paris AI city outside Silicon Valley (TechCrunch)](https://techcrunch.com/2026/05/28/why-paris-may-be-the-most-important-ai-city-outside-silicon-valley/)
- [Railway secures $100M (VentureBeat)](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)
- [Claude Code vs Goose (VentureBeat)](https://venturebeat.com/infrastructure/claude-code-costs-up-to-usd200-a-month-goose-does-the-same-thing-for-free)
- [NousCoder-14B (VentureBeat)](https://venturebeat.com/technology/nous-researchs-nouscoder-14b-is-an-open-source-coding-model-landing-right-in)

---

*（本文の情報は2026年5月29日時点のものです）*
