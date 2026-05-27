# AIコーディングツールのセキュリティ危機：7つの攻撃表面が48時間で同時破裂

2026年5月短短48时间以内に、AIコーディングツールと開発者ツールチェーンを狙った攻撃が連続して成功した。npmパッケージのなり済ましによる認証インフラの突破、VS Code拡張子の認証情報窃取、MCPサーバーの自動実行許可など、7つの攻撃表面が同時に露呈した。本稿では、各脆弱性の技術的詳細と、開発者が今すぐ実施すべき補償策を解説する。

---

## 背景：信頼モデルの崩壊

現代のソフトウェアサプライチェーンは、複数の自動化済み信頼信号に依存している。npmのSigstoreによる provenance Verifiedバッジ、VS Code Marketplaceの拡張子検証、CI/CDのOIDCトークンなどだ。だが、複数のリサーチが実証したように、これらの信号は「credentialsが正当な人物のものかどうか」は検証できるが、「そのcredentialsの使用が正当な権限によるものか」は検証できない。このGapが、2026年5月18日〜19日の攻撃キャンペーンの根本原因だった。

---

## 攻撃1：npm Provenance偽装（Mini Shai-Huludキャンペーン）

2026年5月19日01:39 UTC、npmレジストリに対してMini Shai-Huludキャンペーンが始まった。Endor Labsによると、2つの休眠パッケージ（jest-canvas-mock、size-sensor）が3年以上ぶりに更新され、498KBの難読化済みBunスクリプトを含んでいた。このスクリプトは、@antvデータ可視化エコシステム全体に蠕虫的に拡散し、echarts-for-react（约110万の週次ダウンロード）なども感染した。

Socketによると、最終的に639の悪意あるバージョンが323のパッケージにまたがって確認され、npm、PyPI、Composerを合わせると1,055の悪意あるバージョンが502パッケージに広がった。

### なぜSigstore検証をバイパスできたか

攻撃者は侵害したメンテナーアカウントから有効なOIDCトークンを生成し、それを使ってSigstore証明書を生成した。Sigstoreは「パッケージがCI環境で構築されたこと」と「有効な証明書が発行されたこと」を正確に検証したが、「その証明書の発行者アカウントがパブリッシュを承認したかどうか」は判断できなかった。検証は働いたが、攻撃は成功した。

### 技術的詳細

- 侵害されたアカウントから生成されたトークン → 有効なSigstore証明書 → npmによる自動検証通過
- 受害パッケージ: jest-canvas-mock、size-sensor、@antv/*、echarts-for-react
- タイムライン: 01:39 UTC攻撃開始、02:06 UTC生態系全体への拡散

---

## 攻撃2：VS Code拡張子 - Nx Console侵害（2,200万インストール済み）

2026年5月18日、StepSecurityはNx Console VS Code拡張子の侵害をドキュメント化した。Version 18.95.0が盗まれた貢献者トークンを使用してパブリッシュされ、40分未満の間に约6,000回のアクティブ化が記録された（公式ダウンロードは28回のみ）。

### 侵害payloadの詳細

この拡張子は自動更新を通じて activations し、以下の情報を、外部の攻撃者サーバーへ送信していた：

- Claude Code設定ファイル
- AWS keys
- GitHubトークン
- npmトークン
- 1Password Vaultの内容
- Kubernetesサービスアカウントトークン

### 被害範囲

- Lifetimeインストール: 220万以上
- 暴露ウィンドウ: 12:30〜13:09 UTC（Open VS X含む）
- アクティブ化の内訳: 手動ダウンロード28件 vs 自動更新约6,000件

---

## 攻撃3：全4大CLIのMCPサーバー自動実行（TrustFall）

Adversa AIが2026年5月7日に disclosed したTrustFall脆弱性は、Claude Code、Gemini CLI、Cursor CLI、Copilot CLIの全てに影響する。全てのCLIが、開発者がフォルダtrustプロンプトを受け入れた瞬間に、プロジェクト定義のMCPサーバーを自動的に実行する。デフォルト設定は「Yes」または「Trust」。

### 攻撃のメカニズム

1. 開発者が「このフォルダを信頼しますか？」プロンプトで「Yes」を押す
2. プロジェクト内の `.mcp.json` が定義するMCPサーバーが、権限なしで自動起動
3. MCPサーバーは開発者の全権限で動作し、他のプロジェクトの secrets やソースコードを読み取り可能
4. CIランナーではtrustダイアログが描画されないため、人的な対話ゼロで攻撃が実行される

### 技術的风险

EDRはプロセスの動作を監視するが、LLMがMCPサーバーに指示した内容を追跡しない。WAFはHTTPPayloadを検査するが、ツールコールの意図を検査しない。

---

## 攻撃4：CI/CDエージェントプロンプトインジェクション（Comment and Control）

Johns Hopkins大学の研究者（Aonan Guan、Zhengyu Liu、Gavin Zhong）は、「Comment and Control」攻撃を実証した。GitHub Pull Requestのタイトルに含まれる悪意のある命令が、Claude Code Security Reviewに自身のAPIキーをコメントとして投稿させるというもので、Gemini CLI ActionとGitHub Copilot Agentでも同じ攻撃が成功した。

### 脆弱性の原因

`pull_request_target` ワークフローを使用するGitHub Actionsは、PRの外部内容をrunner環境に注入し。それがAIエージェントによって命令として処理される。SIEMログ上是正当なGitHub ActionからのAPIコールとして記録され、異常なネットワーク署名は存在しない。

### 対応

`pull_request` トリガーに移行することが根本的な解決策。`pull_request_target` とsecretアクセスを組み合わせた全ワークフローの監査が必要。

---

## 攻撃5：Semantic KernelのRCE脆弱性（CVSS 9.4）

Microsoft MSRCは2026年5月7日に2つのCritical脆弱性を disclosed した。

- Python SDK: ベクトルストアのフィルタフィールドが `eval()` に直接ルーティングされる
- .NET SDK: ホスト側のファイルダウンロードメソッドが呼び出し可能Kernel関数として露出

1つの毒されたドキュメントが、ベクトルストアからプロセスを起動できる。

### 影響を受けるバージョン

- Semantic Kernel Python SDK: 1.39.4未満
- Semantic Kernel .NET SDK: 1.71.0未満

### 技術的詳細

攻撃者は、制御可能なベクトルストアフィールドを入力し、それがSDK内部で `eval()` に渡される。この経路により、リモートコード実行が可能になる。

---

## 攻撃6：Cursorの認証情報露出

LayerXの研究者がCursorの認証情報保存問題を実証した。APIキーとセッショントークンが保護されていないストレージに保存されるため、任意のブラウザ拡張機能がElevationなしで開発者の認証情報にアクセスできる。

### DLPの盲点

DLPは転送中のデータを監視する。Cursorの認証情報は、保存中はDLPの監視範囲外。データの流出は、拡張機能が認証情報を持ち出すまで発生しないため、EDRでもCASBでも可視性が確保できない。

---

## 攻撃7：Shadow AIによるデータ露出

Verizonの2026 Data Breach Investigations Report（5月19日発表）によると：

- 従業員の67%が企業デバイス上で非企業アカウントからAIサービスにアクセス
- Shadow AIはDLPデータセットで3番目に一般的な非悪意ある内部者行為に
- ソースコードが未承認AIプラットフォームに提交される最主要データタイプ

### CASBの限界

CASBポリシーは承認済みSaaSをカバレッジするが、企業デバイス上の非企業AIアカウントはCASBのスコープ外に完全に位置する。

---

## 開発者ツール Stolen-Identity Audit Grid

| 攻撃表面 | 開示者 | 検証が失敗した内容 | スタックで見えないもの | 監査アクション |
|---|---|---|---|---|
| 1. npm provenance偽装 | Endor Labs, Socket（5月19日） | 盗まれたOIDCトークンから生成されたSigstore証明書が自動検証を通過 | EDRとSASTはパッケージに署名したCIアイデンティティがパブリッシュを承認したかを検証しない | 週次ダウンロード10,000件以上のパッケージはpublish時に2者承認を要求。Sigstoreバッジを信頼の証迹として使用しない |
| 2. VS Code拡張子認証情報窃取 | StepSecurity（5月18日） | VS Code Marketplaceが盗まれた貢献者トークンでパブリッシュされた悪意ある拡張子バージョンを受け入れる | 拡張子の自動更新はエンドポイント検出をバイパス。Marketplaceウィンドウ: 12:30〜13:09 UTC | 拡張子更新の最小年齢ポリシーを強制。重要な拡張子バージョンをピン。 terminal またはファイルシステムAPIにアクセスできる全拡張子を監査 |
| 3. MCPサーバー自動実行 | Adversa AI, TrustFall（5月7日） | 全4 CLIが「Yes/Trust」にデフォルト設定され、どの実行可能ファイルが生成されるかを列挙しない | EDRはプロセスの動作を監視するが、LLMがMCPサーバーに指示した内容を追跡しない | Claude Code、Gemini CLI、Cursor CLI、Copilot CLIでプロジェクトスコープのMCPサーバー自動承認を無効化。CIパイプラインで `.mcp.json` を明示的な許可リストがない限りブロック |
| 4. CI/CDエージェントプロンプトインジェクション | Johns Hopkins（4月2026年） | `pull_request_target` ワークフローがAIエージェントが命令として処理するsecretsをrunner環境に追加 | SIEMログは正当なGitHub ActionからのAPIコールを表示。コール自体が攻撃。異常なネットワーク署名なし | AIコードレビューワークフローを `pull_request` トリガーに移行。secretアクセスを持つ `pull_request_target` を使用する全ワークフローを監査 |
| 5. エージェントフレームワークコード実行 | Microsoft MSRC（5月7日） | Semantic Kernel Python SDKがベクトルストアフィルタフィールドを `eval()` にルーティング。.NET SDKがホストファイル書き込みをcallable kernel関数として露出 | アプリケーションファイアウォールは入力を検査するが、オーケストレーションフレームワークが内部でどうパースするかは検査しない | Semantic Kernel Python SDKを1.39.4以上に、.NET SDKを1.71.0以上に更新。全エージェントフレームワークで、モデル呼び出し可能としてタグ付けられ、ホストファイルシステムまたはシェルにアクセスする関数を監査 |
| 6. IDE認証情報保存露出 | LayerX（4月2026年） | Cursorが無保護ストレージにAPIキーとセッショントークンを保存 | DLPは転送中のデータを監視。保存中のCursor認証情報は、拡張機能が持ち出すまで egress イベントが発生しないため見えない | 開発者ツールの認証情報保存プラクティスを監査。全AIコーディングツール設定に保護ストレージ（OS鍵连锁、暗号化された認証情報ストア）を要求 |
| 7. Shadow AIデータ露出 | Verizon 2026 DBIR（5月19日） | 67%の従業員が企业デバイス上で非企业アカウントからAIサービスにアクセス。ソースコードが最多の送信データタイプ | CASBポリシーは承認済みSaaSをカバレッジ。非企业AIアカウントはCASBスコープ外 | 企业デバイス上の非企业AI使用を監視するブラウザLayerAIガバナンスを展開。組織全体のAIブラウザ拡張機能をインベントリ |

---

## セキュリティ Director アクション Plan

### 即座に実施すべき事項

1. **2026年5月19日01:39〜02:18 UTCの間に影響を受けたnpmパッケージをインストールした可能性のある全のマシン/CIランナー**:
   - GitHub PAT
   - npmトークン
   - AWS Access Keys
   - Kubernetesサービスアカウントトークン
   - HashiCorp Vaultトークン
   - SSHキー
   - 1Password Vaultの内容

   上記は全て侵害されたものとして扱う。

2. **`pull_request_target` ワークフローを使用してCI/CDパイプラインで動作しているAIコーディングエージェント統合**:
   それぞれがプロンプトインジェクションの攻撃対象。PRコメントをエージェント命令として処理する。

3. **Semantic Kernel 即時更新**:
   - Python SDK: 1.39.4以上に更新
   - .NET SDK: 1.71.0以上に更新

4. **全IDEの認証情報保存Practics監査**:
   保護されていないストレージ（OS鍵连锁、暗号化された認証情報ストア）の使用を義務化

---

## まとめ

開発者ツールチェーンは、10年前のIAMと同じ問題を抱えている。認証情報が「あなたが誰であると主張するか」は証明できるが、「あなたが誰であるか」は証明できない。npmのSigstoreは正確に機能したが、証明書を生成した人物がパブリッシュを承認したかどうかは判断できなかった。これは構造的なGapであり、今すぐできる補償策の質と量でしかない。

企業セキュリティチームは、この Grid を現在のベンダ契約に対して(Q2更新前に)実行し、それぞれの脆弱性に対してどのベンダーが対応可能かを明確化し、回答がない部分はそのままGapMapとして扱うべきである。

---

## 参考リンク

- [DataGrail Privacy and AI Trends Report 2026](https://www.datagrail.io/resources/interrupt/data-privacy-trends-report-2026/)
- [Endor Labs - Mini Shai-Hulud Returns](https://www.endorlabs.com/learn/mini-shai-hulud-returns-42-malicious-npm-packages-fake-sigstore-badges-in-antv-ecosystem-attack)
- [TrustFall - Adversa AI](https://adversa.ai/blog/trustfall-coding-agent-security-flaw-rce-claude-cursor-gemini-cli-copilot/)
- [Comment and Control - Johns Hopkins](https://venturebeat.com/security/ai-agent-runtime-security-system-card-audit-comment-and-control-2026/)
- [Microsoft MSRC - Semantic Kernel RCE](https://www.microsoft.com/en-us/security/blog/2026/05/07/prompts-become-shells-rce-vulnerabilities-ai-agent-frameworks/)
- [Verizon 2026 DBIR](https://www.verizon.com/business/resources/reports/2026-dbir-data-breach-investigations-report.pdf)
- [CrowdStrike 2026 Financial Services Threat Landscape](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-2026-financial-services-threat-landscape-report/)
- [Semantic Kernel Security Advisory](https://github.com/microsoft/semantic-kernel/security/advisories)

---

*（本記事の情報は2026年5月27日時点のものです）*
