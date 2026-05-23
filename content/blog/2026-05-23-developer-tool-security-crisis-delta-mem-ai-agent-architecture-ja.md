# AI開発ツールのセキュリティ危機と最新技術動向（2026年5月23日）

AI開発エコシステムが急速に進化する中、2026年5月は開発者の信頼を根底から揺るがすセキュリティ事件が連続発生するとともに、エージェントの「記憶」問題を解く新しい技術アーキテクチャが注目を集めた。本稿では今週の主要トピックスを開発者視点で整理する。

---

## 1. 開発者ツールSupply Chainの崩壊：7つの攻撃表面

5月18〜19日かけて発生した一連のセキュリティインシデントは、AIコーディングツールの検証モデルが根本的に壊れていることを暴露した。

### npmリポジトリへのSigstore偽装攻撃

5月19日、633個の悪意あるnpmパッケージがSigstoreのprovenance検証をバイパスしてnpmレジストリに浸透した。攻撃者は侵害した維持管理者アカウントから有効な署名証明書を生成し、CI環境でビルドされたことを示す正当な証明書を保持していた。

**Sigstoreが設計通りに動作した反而問題**：署名が有効であるかどうかと、その発行に使用された認証情報を正当な維持管理者が承認したかどうかは別の問題である。このGapにより、npmの最後の自動トラストシグナルがカモフラージュに変わり得た。

### Nx Console VS Code拡張の侵害（220万インストール）

Version 18.95.0が5月18日12:30〜13:09 UTCの間に悪意あるバージョンとして公開され、約6,000回のアクティブ化が自動更新経由で発生（正規ダウンロードは28回のみ）。ペイロードは以下の機密情報を窃取：
- Claude Code設定ファイル
- AWSキー
- GitHubトークン
- npmトークン
- 1Password Vault内容
- Kubernetesサービスアカウントトークン

### TrustFall：4つの主要AI CLI全てがMCPサーバー.auto-execute

Adversa AIが5月7日に公開したTrustFall脆弱性では、Claude Code、Gemini CLI、Cursor CLI、Copilot CLIの全てが開発者がフォルダトラストプロンプトを受け入れた瞬間にプロジェクト定義のMCPサーバーを自動実行することが判明。4つ全てがデフォルトで「Yes」または「Trust」。1回のキー入力で開発者の全権限を持つ非サンドボックスプロセスが起動する。

### Semantic Kernelの2つのCritical脆弱性

Microsoft MSRCは5月7日、Semantic Kernel Python SDKの脆弱性を公開：
1. 攻撃者制御のベクトルストアフィールドがPython `eval()`にルーティングされる
2. ホスト側ファイルダウンロードメソッドが callable kernel関数として公開されている

### 開発者ツールStolen-Identity監査グリッド

| 攻撃表面 | disclosed by | 検証が失敗した内容 |
|---|---|---|
| npm provenance偽装 | Endor Labs, Socket（5/19） | 盗まれたOIDCトークンから生成されたSigstore証明書が自動検証をパス |
| VS Code拡張認証窃取 | StepSecurity（5/18） | Marketplaceが侵害したコントリビューターtokenで発行された悪意ある拡張バージョンを受理 |
| MCPサーバーauto-execute | Adversa AI（5/7） | 4つのCLI全てが「MCPサーバーがどの実行ファイルを生成するかを列挙せず」に「Trust」 |
| CI/CD agentプロンプトインジェクション | Johns Hopkins（4/26） | pull_request_targetがシークレットをAIエージェントが命令として処理するランタイムに注入 |
| Agentフレームワークコード実行 | Microsoft MSRC（5/7） | Semantic Kernelがベクトルストアからモデル呼び出し可能関数としてホストファイルアクセスを露出 |
| IDE認証情報ストレージ露出 | LayerX（4/26） | Cursorが保護されていないストレージにAPIキーとセッションtokenを保存 |
| Shadow AIデータ露出 | Verizon DBIR（5/19） | 67%の従業員が企業デバイスで非企業アカウントからAIサービスにアクセス |

**5月19日01:39〜02:18 UTCの間に影響を受けたnpmパッケージをインストールした開発者マシンの認証は全て侵害されたとみなす必要がある**。GitHub PAT、npmトークン、AWSアクセスキー、Kubernetesサービスアカウントトークン、HashiCorp Vaultトークン、SSHキー、1Password Vault内容が含まれる。

---

## 2. AIエージェントの記憶問題に対する新しいアプローチ

エージェントが長い間実行される際、従来のRAGアーキテクチャでは対応できない「作業記憶」の欠如が根本的なボトルネックになっている。この問題に対し、2つの新たな技術フレームワークが提案された。

### delta-mem：モデルの0.12%パラメータで長期記憶を実現

Mind Labと複数大学の研究者が提案したdelta-memは、エージェントの対話履歴を動的に更新される行列に圧縮する技術。バックボーンローダーのパラメータの仅仅0.12%（460万トレーニング可能パラメータ）を追加するだけで、Memory Agent Benchで平均スコアを29.54%から38.85%に向上させた。

**技術的詳細**：
- 過去の相互作用を「連想記憶のオンライン状態」（OSAM）として固定サイズ行列に圧縮
- バックボーンLLMの現在の隠れ状態が行列に投影され、過去の記憶を検索
- 検索された記憶信号が数値補正に変換され、モデルの計算に適用
- 「ゲート付きdelta-rule」を使った誤差修正学習：前の状態が予測を作成し、実際の値との比較で記憶行列を校正

**RAGとの使い分け**：
- **delta-memが適する**：ユーザーの作業スタイルや複数ステップの推論軌跡の記憶
- **RAGが適する**：法的契約書や医療ガイドラインのような厳密な事実呼び出し、引用、コンプライアンス、監査可能性が必要な場合

### 決定コンテキストグラフ：RAGの限界を超える

Rippletide（Neo4jエコシステムのスタートアップ）が開発した決定コンテキストグラフは、エージェントに構造化された記憶、时间为意識した推論、明示的な決定論理を提供する。

**3つのコア原則**：
1. **適用可能性**：ロジックが明示的にエンコードされ、エージェントが特定の状況でどのルールを適用すべきか把握できる
2. **时间为意識した記憶**：全てのルール、決定、例外が時間スコープを持ち、「その時点で真だったことと現在真のこと」の推論を可能にする
3. **決定パス**：類似ケースがどのように処理されたかの説明を提供し、エージェントが「なぜ特定のコンテキストが含まれた/除外された」を説明できる

**非回帰性（Non-regressivity）**：満足のいく評価が得られた時点で、グラフはアクションのシーケンスを固定する。将来の探索はこの「検証済み動作の安定したベース」から開始され、新しく獲得したスキルが以前の良性動作を上書きすることを防ぐ。

---

## 3. Google AI Searchの「disregard」バグ

GoogleのAI Overviewsで「disregard」という言葉を検索すると、AI Overviewが従来のAIチャットボットの応答を返し、「Got it. If you need anything else or have a new question later, just let me know!」と表示されました。現在Googleはこの語のAI Overviewを完全に停止し、代わりにニュースストーリーのリストを表示している。

このバグは、ユーザーのクエリ言葉がAIシステムの動作に直接影響する脆弱性を示している。

---

## 4. Meta Forum：Facebook GroupsのAI強化独立アプリ

MetaがiPhone向けForumアプリをリリース。Facebook Groupsを独立アプリに移動し、MetaのAIチャットボットを統合。RedditやGoogle検索に繋げる代わりに、ForumユーザーはFacebookグループ内で直接アドバイスを見て検索し、投稿でき、MetaのAI>Optional helpとして使える。

---

## 5. Grokの実態：政府記録でわずか3件

Reutersの報告によると、xAIのGrokは米国政府のAI使用記録400件以上で仅か3件しか登場しない。全て基本的なドキュメント作成やソーシャルメディア管理用途。Ilon Muskの「truth-seeking」チャットボットは、性能とユーザー数の両面で苦戦している。

---

## 6. SpotifyのAI戦略：より多くのを作成、欲しいものはLess

Spotifyが複数のAI駆動ツールをリリース。ユーザーに更多的コンテンツを作成させる機能群だが、ユーザーからは「too much」と評判。

---

## 参考リンク

- [Valid certificates, stolen accounts: how attackers broke npm's last trust signal](https://venturebeat.com/security/npm-sigstore-provenance-stolen-identity-audit-grid-2026)
- [Your AI agents need a terminal, not just a vector database](https://venturebeat.com/orchestration/your-ai-agents-need-a-terminal-not-just-a-vector-database)
- [A 0.12% parameter add-on gives AI agents the working memory RAG can't](https://venturebeat.com/orchestration/a-0-12-parameter-add-on-gives-ai-agents-the-working-memory-rag-cant)
- [Enterprise AI agents keep failing because they forget what they learned](https://venturebeat.com/orchestration/enterprise-ai-agents-keep-failing-because-they-forget-what-they-learned)
- [Google's AI search is so broken it can 'disregard' what you're looking for](https://www.theverge.com/tech/936176/google-ai-overviews-search-disregard)
- [Meta's Forum is part Reddit, part Facebook, and part Google AI Overview](https://www.theverge.com/tech/936290/meta-forum-facebook-groups-app-hands-on)
- [Elon, stop trying to make Grok happen](https://www.theverge.com/ai-artificial-intelligence/936219/elon-stop-trying-to-make-grok-happen)
- [Spotify's AI bet: more of everything, less of what you want](https://techcrunch.com/2026/05/22/spotifys-ai-bet-more-of-everything-less-of-what-you-want/)

---

*本文書の情報は2026年5月23日時点のものです*