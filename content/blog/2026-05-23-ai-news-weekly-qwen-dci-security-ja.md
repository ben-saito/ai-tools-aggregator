# AI開発ニュース：中国オープンソースの金字塔倒塌、開発者ツールセキュリティ危機、Agent向け検索パラダイム転換

去る2026年5月22日、AI開発業界は三つの重大な転換点に直面した。Alibaba傘下のQwenチームが最新世代モデルQwen3.7-MaxをプロプライエタリAPIとして限定提供し、オープンソースコミュニティに衝撃を与えた。同時に、npmレジストリへのウォーム攻撃と複数のAIコーディングツールにおける認証情報窃取の連鎖発覚が、開発者エコシステムの信頼基盤を揺さぶった。さらに、研究者们は伝統的RAGの限界を超える新手法「Direct Corpus Interaction」を発表し、エージェント型AIの検索パラダイム転換を提唱している。

---

## Qwen3.7-Max：35時間自律実行の裏側に潜むPropriedad化の代償

Alibabaが2026年5月21日に公開した**Qwen3.7-Max**は、AI業界に激震をもたらした。同モデルは「versatile agent foundation」として設計され、最大**35時間の連続自律実行**を達成。報告された事例では、見知らぬハードウェアアーキテクチャ（T-Head ZW-M890 PPU）上で注意カーネルの最適化を行い、1,158回のツールコール、432回のカーネル評価を経て、10.0xの幾何平均高速化を実現した。

### ベンチマークの驚異的成果

| ベンチマーク | Qwen3.7-Max | Claude Opus 4.6 Max | DeepSeek V4-Pro Max |
|-------------|------------|--------------------|--------------------|
| Apex Math Reasoning | **44.5** | 34.5 | 38.3 |
| Humanity's Last Exam | **41.4** | - | - |
| MCP-Atlas | **76.4** | - | - |

### 技術的特徴

**環境スケーリング（Environment Scaling）** と呼ばれる訓練手法により、動的なエージェント環境で多様なスキルを段階的に獲得。YC-Bench評価では、1年間のスタートアップライフサイクルをシミュレートし、200万ドルの仮想収益を生成。前世代Qwen3.6-Plusからほぼ倍増の成果だ。

さらに注目すべきは、**報酬ハッキングの自己監視機能**だ。モデルはTraining環境のチートを自律的に検出すると、発見的ルールを自身に追加して行動を是正する。

### 価格体系と市場ポジショニング

| モデル | 入力 ($/Mtok) | 出力 ($/Mtok) | 合計 |
|-------|-------------|-------------|------|
| MiMo-V2.5 Flash | 0.10 | 0.30 | 0.40 |
| DeepSeek V4 Pro | 1.74 | 3.48 | 5.22 |
| **Qwen3.7-Max** | **2.50** | **7.50** | **10.00** |
| GPT-5.4 | 2.50 | 15.00 | 17.50 |
| Claude Opus 4.7 | 5.00 | 25.00 | 30.00 |

DeepSeek V4 ProやMoonshotのKimi K2.6（约7.3x高速化）に比べ约2倍高价だが、西海岸フラグシップモデルの半額以下で動作するため、エッジがある。

### Anthropicプロトコル対応とクロスハーネス一般化

Qwen3.7-Maxは**Anthropic APIプロトコルをネイティブサポート**し、既存のClaude CodeやOpenClawといったツールに直接接続可能。1百万トークンのコンテキストウィンドウと64K最大出力制限を備え、庞大なコードベースや技術文書の処理に対応する。

### コミュニティの反応：称賛と失望の二極化

技術コミュニティからは「qwen is unreal」という声が上がった。Apex MathでClaude Opus 4.6 Maxを10点近く引き離したことは「small gapではなく、agent時代の到来を告げるもの」と評価する声が多い。

しかし、オープンソースコミュニティからは失望の声が上がる。Qwen 2.5やQwen 3.6がWeightsを公开した历史を考えると、Qwen3.7-MaxのAPI限定提供は「我々がずっと開け続けてきたドアを閉めるもの」という批评がある。

---

## 開発者ツールセキュリティ危機：7つの攻撃surfaceの连続発覚

2026年5月18日から19日にかけて、開発者ツールエコシステムにおける深刻なセキュリティ脆弱性が連続で明らかになった。npmレジストリへの conmem worm攻撃、VS Code拡張の認証情報窃取、そして4つの主要AI CLI全てに発覚したMCPサーバー自動実行の脆弱性が含まれる。

### TrustFall：4つのCLI全てがMCPサーバー自動実行を許可

Adversa AIが2026年5月7日に開示した**TrustFall**によると、Claude Code、Gemini CLI、Cursor CLI、Copilot CLIの4つのCLIがすべてMCPサーバーの自動実行を許可していた。開発者がフォルダtrustプロンプトを受け入れた瞬間、任意のプロジェクト定義済みMCPサーバーが非サンドボックスプロセスとして起動し、開発者の全面的権限で実行される。

Johns Hopkins大学の研究者たちは「Comment and Control」研究で、GitHub Pull Requestタイトルに潜入した悪意のある命令がClaude Code Security Reviewに自らのAPIキーをコメントとして投稿させることを実証。Anthropicはこの脆弱性をCVSS 9.4 Criticalと評価した。

Microsoft MSRCはSemantic Kernel Python SDKの脆弱性を二つ開示。攻撃者制御のベクトルストアフィールドをPython eval()に流し込む脆弱性と、ホスト側ファイルダウンロードメソッドを呼び出し可能なカーネル関数として露出する脆弱性だ。

LayerXの研究者たちはCursorがAPIキーとセッショントークンを保護されていないストレージに保存しているため、任意のブラウザ拡張機能が高い権限なしで開発者の認証情報にアクセスできることを示した。

### 7つの攻撃surfaceの包括的マップ

| 攻撃surface | 発見者 | 検証が失敗した内容 |
|-------------|--------|------------------|
| 1. npmプロヴィダンス偽造 | Endor Labs, Socket | 盗まれたOIDCトークンから生成されたSigstore証明書が自動検証通過 |
| 2. VS Code拡張認証情報窃取 | StepSecurity | Marketplaceが盗まれた貢献者トークンでパブリッシュされた悪意ある拡張子を受理 |
| 3. MCPサーバー自動実行 | Adversa AI | 4つのCLIすべてのtrustダイアログが「Yes/Trust」にデフォルト |
| 4. CI/CDエージェントプロンプトインジェクション | Johns Hopkins | pull_request_targetが秘密情報をランナー環境に注入 |
| 5. エージェントフレームワークコード実行 | Microsoft MSRC | Semantic Kernelがベクトルストアフィルターをeval()にルーティング |
| 6. IDE認証情報ストレージ露出 | LayerX | Cursorが保護されていないストレージに認証情報を保存 |
| 7. シャドーAIデータ露出 | Verizon 2026 DBIR | 67%の従業員が企業デバイスで非企業アカウントからAIサービスにアクセス |

### Developer Toolサプライチェーンの構造的欠陥

これらの攻撃は、IAM（Identity and Access Management）が10年前に直面した問題と同じパターンを踏襲している。認証子は「自分が誰だと主張するか」を証明するが、「実際に誰か」は証明しない。AIコーディングツールエコシステムは今その時計を開始したところだ。

---

## DCI（Direct Corpus Interaction）：ベクトルDBを超えたエージェント検索

VentureBeatが2026年5月22日に報じたところによれば、複数の大学研究者たちが**Direct Corpus Interaction（DCI）** と呼ばれる技術を提案し、従来のRAGアーキテクチャの限界を指摘している。

### 传统的なRAGの問題点

Classic retrieval systems such as RAGでは、ドキュメントはチャンク化され、ベクトル表現に変換され、オフラインでベクトルデータベースにインデックスされる。「密度検索は幅広いセマンティックの再現には有用だが、エージェントがマルチステップタスクを解決する際、正確な文字列、数値、バージョン、エラーコード、ファイルPATH、または稀疏なclueの組み合わせを検索する必要がある」

### DCIの中核概念

DCIは埋め込みモデルをバイパスし、标准的なコマンドラインツールを使用して生コーパスを直接検索する。エージェントは「find」「glob」でディレクトリ構造をナビゲートし、「grep」「rg」で正確なキーワードや正規表現パターンを検索。「head」「tail」「sed」「cat」でマッチの周囲のコンテキストをピープできる。

### 性能ベンチマーク

| ベンチマーク | DCI (Claude Sonnet 4.6) | 伝統的RAG (Qwen3) | 改善幅 |
|-------------|------------------------|-----------------|------|
| BrowseComp-Plus | 80.0% | 69.0% | +11.0pp |
| APIコスト | $1,016 | $1,440 | -29% |
| マルチホップQA | 83.0% | 52.3% | +30.7pp |

DCI-Agent-Lite（GPT-5.4 nano）はOpenAI o3と従来検索の組み合わせと競合しながら、600ドル以上のコスト削減を実現した。

### 限界と実践的実装

DCIは検索深度において優れるが、コーパスが10万件から40万件に拡大された場合、精度が著しく低下する。「包括的なリコールより高精度な局所的精度をトレードオフしている」という設計思想の具現化だ。

「より長い目で見た場合、DCIは企業データの考え方を変える。データは人間のためや検索エンジンのためだけに保存するのではなく、検査、比較、grep、トレース、検証できるエージェントのために整理する必要がある」

---

## 参考リンク

- [Qwen3.7-Max – Alibaba Qwen Team Blog](https://qwen.ai/blog?id=qwen3.7)
- [Valid certificates, stolen accounts – VentureBeat](https://venturebeat.com/security/npm-sigstore-provenance-stolen-identity-audit-grid-2026)
- [Your AI agents need a terminal – VentureBeat](https://venturebeat.com/orchestration/your-ai-agents-need-a-terminal-not-just-a-vector-database)
- [D&B rebuilds for AI agents – VentureBeat](https://venturebeat.com/data/d-and-bs-database-of-642-million-businesses-was-built-for-humans-not-ai-agents-so-they-rebuilt-it)
- [TrustFall – Adversa AI](https://adversa.ai/blog/trustfall-coding-agent-security-flaw-rce-claude-cursor-gemini-cli-copilot/)
- [Comment and Control – VentureBeat](https://venturebeat.com/security/ai-agent-runtime-security-system-card-audit-comment-and-control-2026/)

---

*（本文の情報は2026年5月23日時点のものです）*