# AI開発ニュース 週間まとめ（2026年6月24日〜7月1日）

2026年7月第1週は、**AIのエージェント統合**と**専用チップ競争**が大きく動いた週となった。AnthropicがClaude Sonnet 5で低成本エージェント市場に参入、XがMCP Serverを提供開始、専用AIチップのEtchedが55億ドルの評価額に達するなど下周回で技術が成熟しつつある。

---

## Anthropic、Claude Sonnet 5を発表 — エージェント用途に特化した中核モデル

Anthropicは6月30日、**Claude Sonnet 5**を正式にリリースした。最大の特徴は、**OpusやGPT-5.5、Gemini Proと比較して大幅なコスト削減**を実現しながら、エージェント的なタスク実行能力を強化している点だ。

TechCrunchの報道によれば、Sonnet 5は「強いエージェント機能、より低い価格、改善された安全性」を兼ね備え、複雑なマルチステップタスクの自動化に適している。VentureBeatは「IPO目前のAnthropicにとってSonnet 5は主力製品としての位置づけ」と指摘する。

開発者にとって重要な点は、**APIコストの削減**により、エージェントアプリケーションの本格的な商用展開が現実味を帯びることだ。従来の Sonnet 4比で推論コストが大幅に下がり、長時間実行されるエージェントタスクの経済性が改善された。

### 関連動き：加州政府との独占契約

Anthropicは6月29日、California州のNewsom知事と協力協定を締結。**州政府機関がClaudeを半額**で利用できる枠組みを作った。全米で初めてとなる大規模言語モデルの政府利用契約として、官公庁へのAI導入モデルとしても注目される。

---

## Nvidia競合のEtched、55億ドル評価額と10億ドルの売上契約を獲得

AI推論専用のチップ開発企業**Etched**が、6月30日にSeries Bニュースを明らかにした。評価額が**55億ドル（約770億円）**に達し、既に**10億ドルの売上契約を確定**させている。

Etchedは「変換器（Transformer）に特化したASIC」を開発しており、NvidiaのGPUteza比して、特定のAI推論ワークロードで大幅な電力効率と処理速度の向上を実現している。TechCrunchの評価では「Nvidiaにとって本物の競争相手」という言葉が使われている。

### 専用AIチップの競争激化

2026年現在、Google（TPU）、Amazon（Trainium/Inferentia）、Microsoft、Metaがすべて自社チップの開発・導入を加速させている。Etchedのようなスタートアップが専用LSIで成功したことで、**生成AIインフラの低コスト化と専門化**が新たな潮流として定着しつつある。

---

## X（Twitter）、MCP Serverを提供開始

X（原Twitter）は6月30日、プラットフォーム向け**MCP（Model Context Protocol）Server**の提供を開始した。これにより、AI開発者やツールベンダーがXのデータを容易に活用できるようになった。

MCPは、AIモデルと外部データソース・ツールを接続するための標準プロトコルとして、Anthropic主導で開発されている。XがMCP Serverを提供開始したことで、**SNSデータを活用したAIアプリケーションの開発が容易**になり、エージェント型AIの外部情報源としてのSNS活用が加速する可能性が高い。

---

## Google、Gemini 3.1 Flash-Lite（Nano Banana 2 Lite）をAPI公開

Googleは6月29日、低コスト・高速度の画像生成モデル**Gemini 3.1 Flash-Lite**（内部コードネーム：Nano Banana 2 Lite）のAPI提供を開始した。

4秒以内に画像生成を完了する高速性と、**企業向け画像制作ワークフローへの最適化**が最大の特徴。VentureBeatの報道では「企業向け動画制作を対話として変換する」と表現されており、マルチモーダル生成AIの商用化が大きく進んでいる。

また、Googleの「**Gemini Omni Flash**」もAPIに追加され、映像入力を含む統合的なマルチモーダルAI処理が可能になった。プロンプトで動画の内容分析や編集指示を行う新しいワークスタイルが期待される。

---

## Meituan、LongCat-2.0をオープンソース化 — 中国製チップで動作する1.6Tパラメーターモデル

中国の美団（Meituan）は6月30日、**LongCat-2.0**をオープンソースとして公開した。パラメータースケールは**1.6兆（1.6T）**に達し、OpenRouterランキングで上位を維持するエージェントコーディングモデルとして注目されている。

特筆すべきは、**中国のAIチップ（華為Ascendなど）のみでトレーニングされた**点だ。米国の輸出規制下でも中国系企業がAIモデルの自律開発を続けている実証であり、**AIチップの地域分断**が進行している現状が浮かび上がる。

VentureBeatの分析では「中国企業がグローバルなAIモデル開発の半分を追求する姿が鮮明になった」と指摘する。

---

## DeepSeek、DSpark推論フレームワークをオープンソース化 — LLM推論を最大85%高速化

DeepSeekは6月29日、推論高速化フレームワーク**DSpark**をオープンソースとして公開した。LLMの推論処理を最大**85%高速化**できるとして、開発者コミュニティで大きな関心を集めている。

DSparkは、KVキャッシュの最適化と動的マージンを活用した新しい推論アーキテクチャを採用している。Hugging Face上の人気ランキングでもDeepSeekシリーズは高い関心を集めており、オープンソースLLMの推論最適化の選択肢として注目される。

---

## セキュリティ課題：Claude Codeへの攻撃が発覚 — Sentryを突破口に

VentureBeatは6月29日、**Claude Codeが侵害された攻撃**の詳細を報じた。犯人の方針は**Sentry（エラー監視サービス）**を経由したサプライチェーン攻撃。Datadog、PagerDuty、Jiraなど同種のサービスにも同じ脆弱性が存在する可能性が指摘されている。

AIコーディングエージェントが外部サービスと連携する越多、**攻撃面の拡大**が課題として浮き彫りになった。開発者はエージェント利用時のアクセス権限管理与とサードパーティ依存のセキュリティ監査が不可欠になっている。

---

## Cursor、AIコーディングエージェントのモバイルアプリを開始

AI支援コーディングツールの**Cursor**は6月29日、モバイルアプリを提供開始した。外出先からAIエージェントの作業状況を監視・操作できる機能で、開発者体験（DX）の向上を目的とした。

通勤中や会議中の素早いコード確認、现场での簡易的な修正指示など、モバイルからのAIエージェント制御ニーズの高まりを反映している。

---

## 参考リンク

- [Anthropic launches Claude Sonnet 5 (TechCrunch)](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/)
- [Nvidia competitor Etched hits $5B valuation (TechCrunch)](https://techcrunch.com/2026/06/30/nvidia-competitor-etched-hits-5b-valuation-1b-in-sales-for-ai-chip/)
- [X now offers an MCP server (TechCrunch)](https://techcrunch.com/2026/06/30/x-now-offers-an-mcp-server-to-make-its-platform-easier-for-ai-tools-to-use/)
- [Google Nano Banana 2 Lite (VentureBeat)](https://venturebeat.com/technology/google-unveils-nano-banana-2-lite-aka-gemini-3-1-flash-lite-for-low-cost-4-second-fast-enterprise-image-generations)
- [Meituan LongCat-2.0 (VentureBeat)](https://venturebeat.com/technology/meituan-open-sources-longcat-2-0-the-1-6t-near-frontier-agentic-coding-model-thats-been-leading-openrouter-trained-entirely-on-chinese-chips)
- [DeepSeek DSpark (VentureBeat)](https://venturebeat.com/orchestration/deepseek-open-sources-dspark-a-new-framework-to-speed-up-llm-inference-by-up-to-85)
- [Claude Code hijack attack (VentureBeat)](https://venturebeat.com/security/the-attack-that-hijacked-claude-code-came-through-sentry-datadog-pagerduty-and-jira-have-the-same-exposure)
- [Anthropic California deal (TechCrunch)](https://techcrunch.com/2026/06/29/anthropic-and-gov-newsom-forge-deal-allowing-california-government-to-use-claude-at-half-price/)

---

*（本文の情報は2026年6月30日〜7月1日時点のものです）*
