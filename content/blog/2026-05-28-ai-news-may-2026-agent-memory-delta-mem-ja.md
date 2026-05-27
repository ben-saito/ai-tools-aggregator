# AI開発ニュース 2026年5月総まとめ：エージェント記憶問題、Cognitionの10億ドル調達、GoogleのAI Search再設計

2026年5月は、AIエージェントの「記憶」と「信頼性」を巡る技術的突破口と、EVビジネスモデルの転換が同時に進行した月はだった。本稿では、VentureBeat、TechCrunch、AI Newsなどの主要ソースから、開発者に直接役立つ技術的話題を彙める。

---

## エージェントの記憶問題を解決する：新手法が次々と登場

AIエージェントが長時間タスクを実行する際にコンテキストを保持できない問題は、エンタープライズ導入の最大障壁の一つだった。2026年5月、この問題に対処する複数のアプローチが同時に発表された。

### delta-mem：パラメータの0.12%で動作する作業記憶モジュール

Mind Labと提携大学のリサーチャーが公開した**delta-mem**は、エージェントの歴史的対話を動的に更新される行列に圧縮する軽量メモリモジュールだ。注目の点は、バックボーンlargerd modelのパラメータの仅か0.12%を追加するだけで動作する点だ（競合解決策は76.40%の追加を要求）。システムは「gated delta-rule learning」により誤り更正を通じて記憶を更新し、制御された忘卻（controlled forgetting）を実装している。これにより、エージェントはコストのかかるコンテキストウィンドウ拡張やRAGなし长时间相互作用全体でコンテキストを維持できる。

### Decision Context Graphs：Neo4jエコシステムが提案する企業向けsolution

Rippletide（Neo4jエコシステムのスタートアップ）は**decision context graphs**を導入した。RAGがドキュメントを検索するなのに対して、このフレームワークは構造化された記憶、 時間awareな推論、明示的な意思決定論理をエンコードする。关键是「non-regressive」——バリデートされたシーケンスをフリーズし、prior discoveriesに叠加できる。システムはneuro-symbolic AIを使用して形式的論理をエンコードし、エージェントが「那时候trueだったものvs. now」をreason aboutすることを可能にする。

### DCI（Direct Corpus Interaction）：grepで動くエージェント

複数の大学のリサーチャーが提唱する**DCI**は、AIエージェントがEmbeddingモデルをバイパスしgrep、find、globなどのコマンドラインツールを使って生テキストを直接検索する手法だ。DCIはRAGのlong-tail詳細（正確な文字列、バージョン番号、エラーコード）に対する brittlenessに対処する。2つのバージョンがある：

- **DCI-Agent-Lite**：GPT-5.4 nano + bashコマンド
- **DCI-Agent-CC**：Claude Sonnet 4.6 via Claude Code

両方ともEmbedding-based retrievalより複雑なマルチステップタスクで優れる的性能を示した。

---

## 企業が生見る「エージェントの plumbing が先」：MerckとMastercardの実践知

MerckとMastercardがagentic AIで実際の成果を出すに至るまで、**基础设施の構築が先**という教訓を語っている。

Merckは药物発見サイクルを33%短縮（1年分の節約）し、準拠Marketing материалを80%高速で出荷できるようになった。Mastercardは詐欺紛争解決をエージェントで再構築中。両社とも、agentic AIが機能するのは適切なインフラ（デジタルプラットフォーム、データパイプライン、MCP/A2Aプロトコル）を構築した後だと強調する。Merckは3つのHyperscaler全体で2,500のAWSアカウント、47のEdgeロケーション、数百のデータベースを運用している。

---

## DeepSWE：新世代AIコーディングベンチマークが示すGPT-5.5の支配力

Startup Datacurveがリリースした**DeepSWE**は、91のオープンソースリポジトリにまたがる113タスクで構成される新しいベンチマークだ。GPT-5.5が70%を記録し、2番手の競合を16ポイントの差で引き離した。注目すべき副次効果として、SWE-Bench Proの自動検証子がTrialsの約32%を不正確に評価していることが判明した——正しい解決策を24%の確率で拒否しながら、误った実装を8.5%の確率で受入れ。DeepSWEタスクは平均668行のコードを7ファイルに分散（含めており、SWE-Bench Proの120行/5ファイルより実際の開発者ワークフローをより適切に反映）。

---

## AIコーディングスタートアップ：Cognitionが10億ドル調達

AIコーディングアシスタントのDevinで知られる**Cognition**が、250億ドルプレマネーバリュエーションで10億ドルを調達した。年次化運行率で4億9200万ドルの収益に達し、8个月間で估值が2倍以上になった。AIコーディングツール間の競争激化が継続している。

---

## OpenRouter：マルチAIモデル集約プラットフォームが估值13億ドルに

OpenRouterがCapitalG主宰のシリーズBで1億1300万Dollarを調達、估值が1年足らずで3億ドルから13億ドルへと4倍以上に跳ね上がった。6个月間で_usageが5倍成長し、マルチAIモデル集約プラットフォームの需要の高さを示している。

---

## Google I/O 2026：AI Searchの全面的再設計

GoogleはI/O 2026でSearchをAIエージェントを中心に全面的に再設計した。主な機能：

- **Gemini 3.5 Flash**がAI Modeの新しいデフォルトモデルに
- **Background Information Agents**：バックグラウンドで情報を監視するエージェント
- **Expanded Agentic Booking**：外部サービス预订の拡張
- **Generative UI**：動的に生成されるインターフェース
- **Custom Task-based Mini Apps**：タスクベースのカスタム微型アプリ

この再設計はSearchを「リンクを見つける」から「質問に答える、情報を監視する、インターフェースを生成する、タスクを完了する」へと移す。

---

## Anthropic Claude：Managed Agentsに「Dreaming」機能追加

AnthropicはClaudeのManaged Agentsに**「dreaming」** capabilitiesを追加した。これはより長時間で複雑なAI agentワークフローにおける信頼性とtrustの問題に対処するためのものだ。睡着了間に経験を要約・統合することで、実任務でのパフォーマンスを向上させるアプローチ取的睡着研究の活用事例として注目される。

---

## Muon Optimizerの発見：25%以上のニューロンが死滅

機械学習コミュニティで注目すべき発見があった。**Muon optimizer**がMLP레이어で「neuron death」（ニューロン死滅）を引起こし、Step 500時点で25%以上のニューロンが効果的にDeadになることが明らかになった。 optimizer設計における予期せぬ副作用として、颂唱前の 안전한 neural network 훈련への関心が高まっている。

---

## 参考リンク

- [DeepSWE Blows Up AI Coding Leaderboard](https://venturebeat.com/ai/deepswe-blows-up-the-ai-coding-leaderboard-crowns-gpt-5-5-and-finds-claude-opus-exploiting-a-benchmark-loophole/)
- [Merck and Mastercard Agentic AI Results](https://venturebeat.com/ai/merck-and-mastercard-are-seeing-real-agentic-ai-results-both-say-the-plumbing-came-first/)
- [AI Agents Need a Terminal](https://venturebeat.com/ai/your-ai-agents-need-a-terminal-not-just-a-vector-database/)
- [delta-mem: 0.12% Parameter Add-on](https://venturebeat.com/ai/a-0-12-parameter-add-on-gives-ai-agents-the-working-memory-rag-cant/)
- [Decision Context Graphs](https://venturebeat.com/ai/enterprise-ai-agents-keep-failing-because-they-forget-what-they-learned/)
- [Cognition Raises $1B](https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/)
- [OpenRouter $1.3B Valuation](https://techcrunch.com/2026/05/26/openrouter-more-than-doubles-valuation-to-1-3b-in-a-year/)
- [Google AI Search Redesign](https://www.ainews.com/p/google-redesigns-search-around-ai-agents-for-web-discovery)
- [Claude Dreaming](https://www.ainews.com/p/claude-managed-agents-add-dreaming-to-improve-ai-agent-reliability)

---

*（本文の情報は2026年5月28日時点のものです）*