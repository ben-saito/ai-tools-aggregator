# OpenAI「GPT-Live」炸裂 —— 双方向音声AIが商用時代へ突入

2026年7月、AI業界は急速な転換点を迎えている。OpenAIが待望のフル duplex（双方向同時通信）音声モデル「GPT-Live」を正式リリースし、ChatGPTの音声インターフェースが従来の「トランジスタ型」の一问一答から、人間と同じような自然な会話へと進化を遂げた。

---

## GPT-Live：なぜ「フル duplex」なのか

GPT-Liveの核心技術は**フル duplexアーキテクチャ**にある。従来のAdvanced Voice Modeが「沈黙ベースのターンベイク」（silence-based turn-taking）——つまり相手の発話が完全に終わるまで待ってから応答していた——に対し、GPT-Liveは**入力音声と出力音声を同時に処理**できる。

OpenAIのリサーチブログによれば：

> 「GPT-Liveは別々のメッセージのシーケンスを処理するのではなく、入力を継続的に処理しながら出力を同時生成します。モデルは今秒間に数回のインタラクション的决定を行えます——話すか、継続的に聴くか、一旦止めるか、干渉するか、ツールを呼び出すか」

この設計により、「mhmm」「yeah」「got it」といった相槌をユーザーが話し続けている最中にも挿入でき、カフェのBGMで誤反応することも、考え中の沈黙を遮断して先に呼ばれることもなくなる。

### 音声レイヤーと推論レイヤーの分離

GPT-Liveの企業向け意義として更重要になるのは、**音声インタラクション層と推論層の分離**だ。単純な質問はGPT-Live自体が直接処理し、Web検索や複雑なエージェントタスクが必要になれば、バックグラウンドでGPT-5.5に委任しながら会話を継続できる。

これは言い換えれば、**モジュラー設計**だ。OpenAIは音声モデルを再学習なしにアップグレードできる。企業が構築する音声エージェントは、顧客と自然会話を維持しながらDBクエリやWeb検索を実行できる——従来の古いpipelineでは数秒の無声が発生していた。

### 3世代の音声技術

| 世代 | 年 | アーキテクチャ | 問題点 |
|------|------|---------------|--------|
| 第1世代 | 2023年 | Whisper + GPT-4 + TTS（カスケード） | 各handoffで遅延・情報損失 |
| 第2世代 | 2024年9月 | 単一モデル（Advanced Voice Mode）| 沈黙ベースのターンベイク、背景音に弱い |
| 第3世代 | 2026年7月 | フル duplex + delegation | —— |

---

## Slack × Salesforce：MCPで繋がる企業AIエコシステム

7月8日、Slackは**SlackbotをSalesforceプラットフォーム全体に接続する統合**を発表した。Salesforceが277億ドル（Slackの買収額）を投じてから5年、両製品はようやく単一システムとして動き出している。

### MCPサーバーがもたらすSaaS融合

今回の技術バックボーンは**Model Context Protocol（MCP）**だ。MCPはAnthropicが開発したオープン標準で、AIモデルが外部ツールを発見・呼び出す方法を定めている。SalesforceはCRMデータ、Tableau解析、Data 360顧客プロファイル、AgentforceエージェントをMCPサーバーとして公開。SlackbotはMCPクライアントとして機能し、単一会話プロンプトで以下が可能になる：

- 顧客取引履歴の参照
- パイプライン傾向のTableauビジュアライゼーション生成
- CRMレコード更新
- DocuSign承認トリガー

SlackのITチームはすでにこのアーキテクチャで1,500人以上のエンジニア年間数千時間のカスタムコーディングを節約たいという。

### 「マルチプレイヤーAI」という赌け

Slack CMO Ryan GavinはVentureBeat独家インタビューで、この動きを「マルチプレイヤーAI」というコンセプトで説明した：

> 「これほどまでのツールが登场しているのに、ほとんどは-single-player用途です。個々の生産性を上げるタスク完了やコード作成に留まっています。しかしSlack創設当時から知っている通り、ワークはチームスポーツです。AIが企業で真想に定着するには、マルチプレイヤーでなければありません」

背景にはMicrosoft Teams（3.2億MAU）とGoogle Gemini（Workspace深度統合）との競争、そしてAnthropic ClaudeでSalesforce CRMを取代する企業も出てきているという報告がある。

---

## Anthropic「J-lens」：Claudeの内部に「意識のワークスペース」

Anthropicは7月6日、16人の著者が参加した研究論文**「Verbalizable Representations Form a Global Workspace in Language Models」**を公開した。これはClaudeのニューラルネットワーク内に新しい数学的技法で「J-space」（ジェイスペース）と呼ばれる領域を発見したもの。

J-spaceは、モデルが報告・推論・意志方向に指示できる概念を保持する「小さな特権エリア」で、その周囲にはアクセスも言語化もできない自動処理の“海”が広がっている。この構造は**グローバルワークスペース理論**（意識研究の有力仮説）と構造的に類似しており、Anthropicはこれを「J-lens」と呼ぶ新技法で可視化した。

開発者にとっての意味：LLMの「脆い理解」の正体が、アクセス不能な大面积の自動処理と、報告可能な小面积特権エリア間の差距にある可能性がある。もしかするとこれが将来のAI安全研究重要线索になる。

---

## Tencent Hy3：Apacheライセンスの有力オープンLLM

Tencentは7月6日、**Hy3**——ApacheライセンスのオープンLLM——をリリースした。GLM-5.2と坟較し、モデルは半分のサイズでありながらAGG評価で「どこでも勝利、ただcodingでは劣る」という结果。

注目点はライセンス形態：MetaやGLM系列がProprietary条項で导出制限がある中、Hy3はApache 2.0で**輸出規制準拠GPUで動作可能**なサイズ。这意味着中国企业にとっての実用性、そして輸出規制环境下での有用性が向上している。

---

## 参考リンク

- [OpenAI launches GPT-Live, a full-duplex voice upgrade that lets ChatGPT talk more like a person](https://venturebeat.com/ai/openai-launches-gpt-live-a-full-duplex-voice-upgrade-that-lets-chatgpt-talk-more-like-a-person)
- [Slack's Slackbot can now pull your CRM data, generate charts, and send DocuSigns — all from a chat message](https://venturebeat.com/ai/slacks-slackbot-can-now-pull-your-crm-data-generate-charts-and-send-docusigns-all-from-a-chat-message)
- [Anthropic's new "J-lens" reveals a silent workspace inside Claude](https://venturebeat.com/ai/anthropics-new-j-lens-reveals-a-silent-workspace-inside-claude/)
- [Tencent's Apache-licensed Hy3 takes on GLM-5.2 at half the size](https://venturebeat.com/ai/tencents-apache-licensed-hy3-takes-on-glm-5-2-at-half-the-size-and-wins-everywhere-except-coding/)
- [Anthropic brings Claude Cowork to mobile and web](https://venturebeat.com/ai/anthropic-brings-claude-cowork-to-mobile-and-web/)

---

*（本記事の情報は2026年7月9日時点のものです）*
