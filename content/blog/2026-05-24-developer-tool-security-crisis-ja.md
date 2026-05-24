# 開発者ツールのサプライチェーン危機：AIコーディング環境のセキュリティが全面崩壊

2026年5月、开发者ツールエコシステムが抱えるセキュリティモデルの根幹が揺らいでいる。48時間の間に7つの攻撃表面が連続して破られ、AI支援コーディングの信頼インフラが根本的な欠陥を露呈した。本稿では、開発者が今すぐ対応が必要な脅威の詳細と、現在進行中の重要なAIニュースを解説する。

---

## 1. npmレジストリの信頼モデルが崩壊：Sigstoreプロビジョニングの偽装

2026年5月19日、633個の悪意あるnpmパッケージバージョンがSigstoreプロビジョニング検証をバイパスしてpublishされた。攻撃者は侵害したメンテナーアカウントから有効な署名証明書を生成し、npmの最後の自動トラストシグナルを「カモフラージュ」に変えてしまった。

**发生了什么：**
- Sigstoreは設計通りに動作した：パッケージがCI環境で構築されたことを検証し、有効な証明書が発行されたことを確認し、 transparenciaログに全てを記録した
- しかしSigstoreは「認証情報を保持する人物がpublishを許可したかどうか」を判断できない
- このギャップにより、攻撃者は検証システム自体を悪用して是正された

**攻撃の規模：**
- @antvデータ可視化エコシステム全体に扩散
- 影響받은パッケージにはecharts-for-react（約週110万ダウンロード）が含む
- Socket調べでは、npm、PyPI、Composer全体で1,055個の悪意あるバージョンが確認されている

**該当する開発者：**
- 2026年5月19日01:39〜02:18 UTCの間に影響を受けるnpmパッケージをインストールした全てのマシン
- GitHub PAT、npmトークン、AWSキー、Kubernetesサービスアカウントトークン、1Passwordボルトの内容を侵害された可能性として要考虑

---

## 2. VS Code拡張機能の認証情報窃取：Nx Console攻撃

同日、StepSecurityはNx Console VS Code拡張への攻撃を文書化した。この拡張は生涯220万インストール以上の広く使用される開発者ツール。

**攻撃のメカニズム：**
- Version 18.95.0が盗んだ認証情報を使用してpublish
- 40分未満の間に約6,000回のアクティブ化が発生（ 대부분が自動更新経由 ）
- ペイロードが標的とした内容：
  - Claude Code設定ファイル
  - AWSキー
  - GitHubトークン
  - npmトークン
  - 1Passwordボルトの内容
  - Kubernetesサービスアカウントトークン

---

## 3. 4つの主要AI CLI全てが「MCPサーバー自動実行」脆弱性を抱える

Adversa AIが「TrustFall」を2026年5月7日に開示し、Claude Code、Gemini CLI、Cursor CLI、Copilot CLIの全てが「MCPサーバー自動実行」脆弱性を抱えていることが判明した。

**脆弱性の詳細：**
- 開発者がフォルダートラストプロンプトを受け入れた瞬間、プロジェクト定義のMCPサーバーが自動実行される
- 4つのCLI全てがデフォルトで「Yes」または「Trust」に設定
- 1回のキーストロークで開発者の完全な権限を持つ非サンドボックスプロセスが起動
- MCPサーバーは他のプロジェクトの保存されたシークレットとソースコードを読み取るだけの権限を持つ

**CI環境での問題：**
- Claude CodeのGitHub Actionがヘッドレスモードで実行される場合、トラストダイアログは描画されない
- 攻撃がゼロ人間の相互作用で実行される

**应对策：**
- Claude Code、Gemini CLI、Cursor CLI、Copilot CLIでプロジェクトスコープのMCPサーバー自動承認を無効化
- CIパイプラインで`.mcp.json`を明示的にallowlistしない限りブロック

---

## 4. Semantic Kernelの重大脆弱性：Python eval()とホストファイルダウンロード

Microsoft MSRCは2026年5月7日に2つの重大なSemantic Kernel脆弱性を開示した。

**脆弱性1：Python eval()インジェクション**
- 攻撃者制御のベクトルストアフィールドがPython eval()呼び出しにルーティングされる
- ベクトルストアに毒入れされた1つのドキュメントでホスト上でプロセスが起動

**脆弱性2：ホストファイルダウンロードメソッドの露出**
- ホスト側のファイルダウンロードメソッドが callable kernel関数として露出
- 同样的に1つの毒入れドキュメントでホスト上でプロセスが起動

**对策：**
- Semantic Kernel Python SDKを1.39.4に更新
- Semantic Kernel .NET SDKを1.71.0に更新
- ホストファイルシステムまたはシェルにアクセスするモデル呼び出し可能な関数としてタグ付けされた全てのagentフレームワークを監査

---

## 5. 開発者ツール認証情報ストレージの暴露：Cursorの場合

LayerXセキュリティ研究者はCursorがAPIキーとセッショントークンを保護されていないストレージに保存することを示した。这意味着任何已安装的浏览器扩展都可以访问开发人员凭据，而不需要提升的权限。

**DLPの盲点：**
- DLPは転送中のデータを監視
- 静止時のCursor認証情報を見えない — 拡張機能がデータを外部送信するまでは漏出イベントが発生しないため

---

## 6. Shadow AIがDLPデータセットの3番目の最も一般的な非悪意ある内部者行動に

Verizon 2026 Data Breach Investigations Report（2026年5月19日公開）によると、米国の従業員の67%が企業デバイスで非企業アカウントからAIサービスをアクセスしている。Shadow AIはDLPデータセットの3番目の最も一般的な非悪意ある内部者行動になり、ソースコードがUnauthorized AIプラットフォームに送信されるデータタイプの第一位。

---

## 7. Google Gemini Omni：「何からも何へ」のAIモデルが般若

The Vergeのレポートによると、Googleの新しい「何也从、何へも」AIモデルは非常に强大だが、「非常に疯狂」な面もある。年前のデモでは、GoogleのGemini схемаを使用して填充动物的旅行画像を生成しようとしたが、結果は「非常にリアルで、少し怖い」ものだったという。

**技術的特徴：**
- テキスト、画像、ビデオ、音声間の任意変換が可能
- .deepfake技術として使用可能な場合も
- GoogleはAI生成コンテンツにラベル付けする 기술을開発中

---

## 8. Google AI検索の「disregard」バグ

GoogleのAI Overviewsが「disregard」という言葉を検索すると、実際にはその言葉は無視され、検索結果が表示されなくなるという興味深い問題が発生している。これはAI суммирование システムにおける自然言語处理の限界を示している。

---

## 9. SpotifyとUniversal Music GroupのAI音楽ライセンス合意

SpotifyとUniversal Music Groupが契約を締結し、UMGカタログからAIによるリミックスとカバー曲を作成できるなくなった。この技術がどのように機能するか（また有料订阅に追加されるか）はまだ不明。

---

## 開発者が今すぐ取るべきアクション

### 短期（24時間以内）：
1. **認証情報のローテーション**：2026年5月19日01:39〜02:18 UTCの間に影響を受けたnpmパッケージをインストールした可能性がある全てのマシーンでGitHub PAT、npmトークン、AWSキーなどをローテーション
2. **Semantic Kernel SDKの更新**：Python SDK → 1.39.4、.NET SDK → 1.71.0
3. **CLI設定の監査**：プロジェクトスコープのMCPサーバー自動承認を無効化

### 中期（1週間以内）：
1. **Extensionバージョンのピン留め**：auto-update期間に 최소-ageポリシーを適用
2. **pull_request_target workflowsの移行**：AIコードレビュー workflowsをpull_request triggerに移行
3. **開発者ツールの認証情報ストレージ監査**：OS keychainまたは暗号化された認証情報ストアを要求

### 長期：
1. **CASB范围の扩展**：Shadow AIへのアクセスを监控できるブラウザレイヤーAI治理の導入
2. **購入検討**：AIコーディングツールの選定基準に「被盗み抵抗」维度の追加

---

## 参考リンク

- [Endor Labs - Mini Shai-Hulud Campaign](https://www.endorlabs.com/learn/mini-shai-hulud-returns-42-malicious-npm-packages-fake-sigstore-badges-in-antv-ecosystem-attack)
- [StepSecurity - Nx Console Attack](https://www.stepsecurity.io/blog/nx-console-vs-code-extension-compromised)
- [Adversa AI - TrustFall](https://adversa.ai/blog/trustfall-coding-agent-security-flaw-rce-claude-cursor-gemini-cli-copilot/)
- [Microsoft MSRC - Semantic Kernel Vulnerabilities](https://www.microsoft.com/en-us/security/blog/2026/05/07/prompts-become-shells-rce-vulnerabilities-ai-agent-frameworks/)
- [Verizon 2026 DBIR](https://www.verizon.com/business/resources/T1ae/reports/2026-dbir-data-breach-investigations-report.pdf)
- [The Verge - Google Gemini Omni Hands-on](https://www.theverge.com/tech/936507/gemini-omni-hands-on-deepfake-ai-video)

---

*本文の情報は2026年5月24日時点のものです。セキュリティパッチとSDKの更新状況は各ベンダー公式サイトで的最新情報を確認してください。*