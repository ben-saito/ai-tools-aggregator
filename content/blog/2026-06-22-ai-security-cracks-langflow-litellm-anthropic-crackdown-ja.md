# AI開発セキュリティ最前線：LangGraph・LiteLLM・LangFlowの重大脆弱性とAdobe/AWSのAIエージェント展開

AIエージェントフレームワークの重大なセキュリティ脆弱性が立て続けにDisclosureされた。今週はLangGraph、LangFlow、LiteLLMの3つの популярныеフレームワークでRCE（リモートコード実行）に繋がる脆弱性が確認され、VentureBeatは「7,000のLangFlowサーバーが攻撃を受けている」と報じた。開発者にとって緊急の対応が必要なこの状況と並行して、AdobeはCreative Cloud全製品にエージェント型AIワークフローを組み込み、AWSはコンテキストレイヤー市場に参入を発表。AI開発の世界で何が起きているかを整理する。

---

## LangGraph・LangChain・LangFlow：3大フレームワーク同時破裂の全文

VentureBeatが6月19日に伝えた内容によると、3つの最も広く使われているAIエージェントフレームワークが同時に重大な脆弱性に直面している。Check Point ResearchはLangGraphのSQLインジェクションをRCEへ繋ぐチェーン（CVE-2025-67644 + CVE-2026-28277）を公開。LangFlowではCVE-2026-5027（CVSS 8.8）のパストラバーサルが既に actively exploited で、約7,000のインターネット接続サーバーが攻撃者に襲われている。LangChain-coreではプロンプトローダーのパストラバーサル（CVE-2026-34070、CVSS 7.5）から.envファイル内のOPENAI_API_KEYやANTHROPIC_API_KEYが読み出される可能性がある。

**何が起きているのか**：これらの脆弱性は「新種のAI問題」ではなく、古典的なAppSecの問題がAIフレームワークという新しいインフラに組み込まれたものだ。SQLインジェクション、パストラバーサル、unsafeデシリアライゼーション。どれも二十年前に見知ったバグクラスだが、AIエージェントのステートストア、ファイルアップロード、プロンプト設定という新しいповерхностで動作している。

**技術的詳細**：LangGraphのSQLインジェクションは、SQLiteチェックポインターのがWHERE句を構築する際、ユーザーデータを直接クエリに埋め込む。攻撃者はフィルターキーを通じて偽造された行をcheckpointテーブルに書き込み、msgpackデコーダーがそれを読み込む際に任意のPython関数を実行できる。LangFlowではファイルアップロードエンドポイント（POST /api/v2/files）がファイル名を無検証で受け入れ、攻撃者が`../`を使って任意の場所にファイルを書き込める。デフォルトでauto-loginが有効しているため、認証なしでRCEに到達できる。

**修正状況**：LangGraphはlanggraph 1.0.10、langgraph-checkpoint-sqlite 3.0.1、langgraph-checkpoint-redis 1.0.2で修正済み。LangFlowはv1.9.0（2026年4月15日リリース）で修正済みだが、攻撃は6月9日から確認されており、修正から攻撃開始まで約2ヶ月の空白がある。**ここが重要な教訓**：CISA KEVカタログに載る前に修正を適用する必要がある。

---

## LiteLLM：CISA KEVに登録されたAIゲートウェイの脆弱性

LiteLLMはOpenAI、Anthropic、Azure、BedrockのAPIキーを単一プロキシで管理するゲートウェイで、40,000以上のGitHubスターを持つ。VentureBeatの報道によると、6月8日にCVE-2026-42271（コマンドインジェクション、MCPテストエンドポイント）がCISA KEVに登録され、6月22日が修正期限だ。

Obsidianという研究チームは3つの脆弱性をチェーンさせてCVSS 9.9の完全征服を達成している。CVE-2026-47101（認証バイパス）で管理者以外がワイルドカードAPIキーを作成、CVE-2026-47102で管理者への自己昇格、CVE-2026-40217でexec()を通じたコードサンドボックス脱出。LiteLLMのコールバックメカニズムを通じて偽造されたツールコール応答を注入し、リバースシェルを確立した。

3月のPyPIサプライチェーン汚染では、LiteLLM v1.82.7とv1.82.8がバックドア入りになり、ゲートウェイ全体の認証情報が危険にさらされた。

---

## CrowdStrikeがAIセキュリティ市場に250%の成長

これらの脆弱性の深刻さを裏付ける市場データがある。CloudStrikeのQ1 FY27四半期（2026年6月3日開示） では、AIDR（AI Detection and Response）の年間繰り返し収益が前期比250%以上増加し、Q2のパイプラインは5,000ドルを超えた。会社全体のARRは55.1億ドルに達した。

6月17日、CrowdStrikeはFalcon AIDRをAWSに拡張し、Amazon Bedrock、Kiro、Strands Agentsのリアルタイム監視を開始した。Daniel Bernard CBOは「AI攻撃表面は開発、ランタイム、アイデンティティ、クラウドインフラにまたがり、チームがこれらを別々のドメインとして扱えば、その間のギャップが放置される」と語った。 Adam Meyers SVP of Intelligenceは「問題はゼロデイではない。パッチ適用だ。問題を10倍にすれば、チームは完全に水没する」と続けた。

---

## Adobe：Creative Cloud全製品にエージェント型AIを埋め込み

6月18日、AdobeはFireflyクリエイティブAIスタジオの大幅強化と、Creative Cloud全製品（Premiere Pro、Photoshop、Illustrator、InDesign、Frame.io）への「クリエイティブエージェント」組み込みを発表した。 パブリックベータとして公開。

**技術的アーキテクチャ**：Adobeが導入したのは「Elements」と「Projects」という2つのコアコンポーネント。Elementsはビジュアル変数ライブラリで、キャラクターや場所、オブジェクトをCampaign全体で一貫して保持する。Projectsはコンテキストメモリ層で、アセット、生成物、セッション履歴を一元管理し、ユーザーがプロンプトコンテキストを再構築なしに中断箇所から再開できる。

注目すべきは、AIがデスクトップアプリケーションの複雑なドキュメント構造内で直接動作できること。Adobeの担当者は「Adobe Creative Agentは数十年にわたる мощные功能和ワークフロー、APIを活用できる。これらは الآن toolingとして公開され、クリエイティブエージェントから呼び出すことができる」と説明している。

**製品別の機能**：
- **Premiere Pro**：プロジェクトセットアップ、メディア解析・ビン整理、クリップの一括リネーム、インタビュー質問の特定、ラフカット自動組立
- **Illustrator**：数式ベースの多段階タスク（スプレッドシートから50バージョンのファイルを生成）、印刷前チェック（カラーモードエラー検出）、ベクター形状のプログラム的複製（z深度と透明度に基く配置・サイズ変更）
- **Photoshop & InDesign**：一括背景削除、動的レイヤー整理、マルチページレイアウトへのブランド更新適用

AdobeはChatGPT、Claude、Microsoft 365 Copilotへの統合を発表しており、Google GeminiとSlack，不久対応予定。

**未知数の点**：エンタープライズ技術意思決定者にとって重要な疑問が残っている。API公開の計画、Model Context Protocol（MCP）サポートの有無、バックエンドアーキテクチャ（LoRAかビジュアルRAGか）、データ所在地と provenanceの保証。これらはすべて現在Adobeに確認中。

---

## AWS：コンテキストレイヤー市場に参入

AWSは6月17日、コンテキストインテリジェンススタックとして3つの製品を発表した。中央作品はAWS Contextで、企業のデータストアとAIエージェントの間のコンテキストレイヤーを自動構築するナレッジグラフサービスだ。

**差別化ポイント**：AWSの主張は「グラフは人間の再キュレーションではなく、エージェントの使用から自動的に学習する」というもの。Swami Sivasubramanian VP（Agentic AI）は「あなたのエージェントは、すべてを再構築することなく賢くなります。このサービスは既存のデータからナレッジグラフを自動構築し、データセット間、ビジネスルール、ドメイン知識間の関係を推測し、ランタイム時にエージェントと組織全员いが利用できるようにします」と語った。

**技術的詳細**：AWS Contextは以下の方法で関係を自動推測する：
- 既存のテーブル、列の意味、ソース間の関係、権威あるソースの特定
- セマンティック検索とグラフレベル推論の組み合わせ
- データセット間、ビジネスルール、ドメイン知識をまたぐ関係の推測

クエリはすべて呼び出しユーザーのIAMとLake Formation権限を継承し、エージェントのデータアクセスは企業既知のコントロールを通じて監査可能。すべてのメタデータはApache Iceberg形式でAmazon S3 Tablesに公開され、Athena、Redshift、Spark、またはIceberg互換エンジンからクエリ可能。

**競合状況**：AWSはSnowflake（Horizon Context、Cortex Sense）、Microsoft（Fabric IQ）、Redis（コンテキストプラットフォーム）、Pinecone（Nexus）からなる競合市場に参入する。Constellation ResearchのHolger Mueller VP・主席アナリストは「パフォーマンスが課題になる，尤其是トランザクションデータについて見てみないと分からない」と評価している。

---

## セキュリティチェックリスト：今夜実施すべき6項目

VentureBeatの記事に掲載された6つの信任境界チェックリストを紹介する：

| 信任境界 | 証明ポイント | 修正 |
|----------|--------------|------|
| **1. エージェントの状態ストアは毒注入可能か？** | LangGraph SQLi→RCEチェーン。CVE-2025-67644 + CVE-2026-28277 | langgraph-checkpoint-sqlite 3.0.1、langgraph 1.0.10へアップグレード |
| **2. 認証なしリクエストでエージェントサーバーにファイルを書き込めるか？** | LangFlow CVE-2026-5027（CVSS 8.8）。VulnCheck KEV登録。6月9日 активно exploited | LangFlow v1.9.0+へアップグレード。auto-login無効化。VPN背面へ移動 |
| **3. プロンプトローダーが触れるべきでないファイルを読み出せるか？** | LangChain-core CVE-2026-34070（CVSS 7.5）。.envのAPIキー読取可能 | langchain-core 1.2.22 / 0.3.86へアップグレード |
| **4. 脆弱なフレームワークが全認証情報を一度に露出させるか？** | ゲートウェイが全プロバイダーキーを保持。一度のRCEで全军敗北 | プロバイダーキーをエファンメラル型インジェクションへ移行 |
| **5. これらのフレームワークがセキュリティガバナンス外で動作しているか？** | CVE-2025-34291はイランMuddiWaterが武器として使用 | AIフレームワークのDiscoveryスィープ実施。文書化されたOwnerと承認記録を要求 |
| **6. スキャナーがフレームワーク内部を可視できるか？** | CrowdStrike AIDR ARR 250%成長。ランタイム検出がこの層を形成 | フレームワーク依存関係を脆弱性管理へ追加 |

---

## 開発者が今夜対応すべきこと

**LangGraph使用者**：`pip show langgraph`を実行し、3.0.1未満であれば即座にアップグレード。`get_state_history()`がネットワーク入力に公開されていないか確認。

**LangFlow使用者**：CensysまたはShodanで7860ポートのインターネット接続インスタンスを検索。auto-login設定を確認。v1.9.0以上へのアップグレードまたはVPN背面への移動を実行。

**LiteLLM使用者**：`pip show litellm`を実行。v1.83.14-stable未満であればアップグレード。全プロバイダーAPIキーのローテーションを検討。`/mcp-rest/test/*`をプロキシレベルでブロック。

**一般的な推奨**：.envファイル内のAPIキーを静的保持からシークレットマネージャーへ移行。任何脆弱なインスタンスが読み取った可能性のあるキーはローテーション対象とする。NIST CSF AIフレームワークとOWASP Top 10をベースラインとして使用。

---

## 参考リンク

- [VentureBeat: 7,000 Langflow servers under attack](https://venturebeat.com/security/7000-langflow-servers-under-attack-langgraph-langchain-same-holes)
- [VentureBeat: Fine-tuning forgets. RAG leaks context. Hypernetworks build the model your agent needs on demand](https://venturebeat.com/orchestration/fine-tuning-forgets-rag-leaks-context-hypernetworks-build-the-model-your-agent-needs-on-demand)
- [VentureBeat: Adobe embeds agentic AI workflows across Creative Cloud](https://venturebeat.com/orchestration/adobe-embeds-agentic-ai-workflows-across-creative-cloud-shifting-from-media-generation-to-production-orchestration)
- [VentureBeat: AWS enters the context layer race](https://venturebeat.com/data/aws-enters-the-context-layer-race-with-a-graph-that-learns-from-agents-not-manual-curation)
- [Check Point Research: LangGraph SQL injection to RCE](https://research.checkpoint.com/2026/from-sqli-to-rce-exploiting-langgraphs-checkpointer/)
- [CrowdStrike Q1 FY27 Earnings Transcript](https://www.fool.com/earnings/call-transcripts/2026/06/03/crowdstrike-crwd-q1-2027-earnings-transcript/)

---

*本文の情報は2026年6月22日時点のものです。脆弱性の修正状況については各プロジェクトのSecurity Advisoryを定期的に確認してください。*