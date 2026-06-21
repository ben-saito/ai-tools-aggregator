# AIセキュリティ緊急情報：Langflow / LiteLLM / Anthropic禁止令まで、米欧で多発する脆弱性の Chain

2026年6月第3週、AI業界はセキュリティと規制の激動期に突入した。米政府在庫拒否（denial list）にAnthropicのFable 5とMythos 5が追加された一方で、Langflowの約7,000サーバーが活発な攻撃を受け、LiteLLMにはCVSS 9.9の認証バイパス脆弱性が存在する。さらにAWSがコンテキスト層に参入し、AdobeはCreative Cloud全体にエージェント型AIを埋め込んだ。開発者にとっての見解：これらの脆弱性は「AI特有の問題」ではなく、**AppSecの古典的なバグがAIインフラに移植されたもの**だ。

---

## Langflow / LangGraph / LangChain：3つのフレームワークに同一形状の脆弱性

VentureBeatが伝えたところによると、Langflow・LangGraph・LangChainの3大AIエージェントフレームワークが、わずか数ヶ月の間に同じクラスの脆弱性をついて侵入されている。

### Langflow：CVE-2026-5027 (CVSS 8.8) — 稼働中攻撃

Langflowのファイルアップロードエンドポイントに**パストラバーサル**があり、認証不要でRCE（リモートコード実行）に到達できる。Langflowはデフォルトでauto-loginが有効なため、露出インスタンスは**認証不要で攻撃可能**。Censysによると、北米に約7,000個の露出インスタンスが存在する。

**攻撃の流れ：**
```
1. POST /api/v2/files にパストラバーサルを仕込んだファイル名を送信
2. /etc/cron.d/ にファイルを書き込む
3. 次のcron実行でシェル入手
```

VulnCheckは6月9日にアクティブ exploitationを確認し、これは4月15日にパッチ（v1.9.0）が公開されてから**ほぼ2ヶ月後**だった。 Iranian state-sponsored group MuddyWaterも今年に入って同じLangflowの別脆弱性（CVE-2025-34291）を武器に使っており、CISAは5月にKnown Exploited Vulnerabilities catalogに追加している。

**確認コマンド：**
```bash
pip show langflow  # 1.9.0未満 = 脆弱
# または
curl -s https://<your-instance>:7860/api/v1/health  # 露出確認
```

### LangGraph：SQLインジェクション → msgpackデコード → RCE

LangGraphのSQLiteチェックポインターメモリストアにSQLインジェクション（CVE-2025-67644, CVSS 7.3）があり、攻撃者がフィルタキーにSQL断片を挿入してデータベースを操作できる。さらに、CVE-2026-28277（CVSS 6.8）では、その挿入された行がmsgpackデコーダでデコードされ、Pythonの`__import__('os').system()`相当のコードが実行される。

**修正バージョン：**
- `langgraph-checkpoint-sqlite` → 3.0.1以上
- `langgraph` → 1.0.10以上
- `langgraph-checkpoint-redis` → 1.0.2以上

### LangChain-core：プロンプトラーダーからの情報漏洩

LangChain-coreのレガシープロンプトラーディング APIにCVE-2026-34070（CVSS 7.5）のパストラバーサルがあり、`.env`ファイルから`OPENAI_API_KEY`や`ANTHROPIC_API_KEY`を奪われる脆弱性がある。Cyeraはこれとデシリアライゼーション脆弱性（CVE-2025-68664, CVSS 9.3）を組み合わせた攻撃チェーンを実証した。

**AppSecの盲点：** Merritt Baer（Enkrypt AI CSO、元AWS Deputy CISO）は「CISOsはMCPの不安全性を『AIリスク』として認識しない。伝統的なセキュリティプログラムが失敗するときのように見える」と指摘する。WAFはHTTPエッジを見て、EDRはエンドポイントを見るが、**インポートされたフレームワーク内部のmsgpackデコーダやプロンプトラーダには届かない**。

---

## LiteLLM：CVE-2026-47101/47102/40217 — CVSS 9.9の3段攻撃

LiteLLMはOpenAI・Anthropic・Azure・BedrockのAPIキーを一元管理するゲートウェイで、4万GitHubスターを持つ。米政府在6月8日にCVE-2026-42271（コマンドインジェクション）をCISA KEVに登録し、**6月22日期限**で修正する必要がある。

しかし、6月に Disclosureされた別のチェーンが存在する：

**3段攻撃チェーン：**
1. **CVE-2026-47101**：`/user/update`エンドポイントに認証バイパスがあり、非管理者がワイルドカードAPIキーを生成できる
2. **CVE-2026-47102**：同じエンドポイントからプロンプト昇格によりproxy adminに自己昇格
3. **CVE-2026-40217**：`exec()`サンドボックスエスケープでフルPython権限奪取

Obsidianが実証した攻撃シーケンス：**開発者がキーを1回入力する間に、攻撃者は LiteLLM を介して全プロバイダー認証情報一括窃取**できる。

**修正：v1.83.14-stable以上**

```bash
pip show litellm | grep Version  # 1.83.14-stable未満 = 脆弱
```

3月にPyPIでバージョン1.82.7と1.82.8がサプライチェーン攻撃で改ざんされていたことも確認されている。

---

## Anthropic禁止令：Fable 5 / Mythos 5米政府在庫拒否の内幕

Trump政権は6月、Anthropicの旗艦モデル2つを米国内でのリリース禁止とする異例の措置を取った。TechCrunchの報道によると、Amazonの研究者がFable 5の安全guardrailsをバイパスする方法を見つけたことが直接の引き金だという。

しかし、米国の動きには**矛盾**がある：AnthropicはAlphabetとJeff Bezosから数十億ドルを受け入れており、Google DeepMindからはJohn Jumper氏（ノーベル賞受賞者、AlphaFold開発者）がAnthropicに転じたばかりだ。

**セキュリティコミュニティの反応：** サイバーセキュリティ研究者たちは公開書簡に署名し、この禁止令は「危険」と主張。同書簡は、同じ jailbreak が他のモデルにも存在することを指摘している。Anthropic自身が声明で「他のモデルにも同じ脆弱性がある」と認めたことが、禁止令の根拠を揺るがしている。

**背景：** Anthropicは Mythos 5 というサイバーセキュリティ特化モデルも同時に公開停止となっている。Mythosは輸出管理上の懸念が浮上した。

---

## Adobe Creative Cloud：エージェント型AIが制作プロセス全程に浸透

Adobeは6月18日、Premiere Pro・Photoshop・Illustrator・InDesign・Frame.ioのすべてに「クリエイティブエージェント」を埋め込むと発表した。

**従来との差別化：** 従来のGenerative AIがflat mediaを生成するassist型不同的是、Adobeのエージェントは**オーケストレーションレイヤー**として動作する。自然言語で指示すると、Adobe製アプリの内部APIに直接アクセスして複雑なマルチステップワークフローを実行する。

**実装例：**
- **Premiere Pro**：メディアを解析してbinsに分類、クリップの一括リネーム、インタビュー質問の特定、粗引きスタートポイントの作成
- **Illustrator**：スプレッドシートから50個のバージョン付きファイルを生成、印刷前的カラーモードエラーをチェック
- **Photoshop / InDesign**：背景除去の一括処理、レイヤー構成の動的管理、マルチページレイアウトへのブランド更新適用

**技術アーキテクチャ：** FireflyクリエイティブAIスタジオには「Elements」（ビジュアル変数ライブラリ）と「Projects」（コンテキストメモリレイヤー）の2つのコンポーネントが導入された。Elementsはキャラクター・場所・オブジェクトを世代間で一貫して保つためのもので、Projectsはセッション履歴とアセットを统一的空間に保存する。

AdobeはOpenAI ChatGPT・Anthropic Claude・Microsoft 365 Copilotへの連携も発表しており、Google GeminiとSlackへの統合も予定している。

---

## AWS Context：知識グラフがエージェント利用から自動学習

AWSは6月17日、「AWS Context」という新しい知識グラフサービスを発表した。

**従来との差別化：** 既存のコンテキスト層製品は、手動でキュレーションされたデータマッピングに依存していた。AWS Contextの核心は、**グラフがエージェントの利用パターンから自動的に学習して改善される**点にある。

Swami Sivasubramanian（AWS Agentic AI担当VP）は「Your agents now get smarter without you having to rebuild anything from scratch」と語る。

**技術仕様：**
- S3・Glue・Lake Formationの既存のIDモデル（IAM・Lake Formation権限）を継承
- メタデータはApache Iceberg形式でS3 Tablesにパブリッシュ
- Athena・Redshift・Spark・任意のIceberg互換エンジンからクエリ可能
- Bedrock AgentCore・EKS・任意のMCP互換フレームワークからクエリ可能

**競争状況：** Snowflake（Horizon Context）、Microsoft（Fabric IQ）、Redis、Pineconeと、コンテキスト層は今年最も競争が激化している分野の一つ。

---

## AIセキュリティ監査チェックリスト（6月第3週版）

| 信頼境界 | 脆弱性 | CVSS | 状態 | 修正コマンド |
|----------|--------|------|------|-------------|
| LangGraphメモリストア | SQLi → RCE | 7.3+6.8 | PoC公開、In-the-wild未確認 | `pip install langgraph-checkpoint-sqlite>=3.0.1` |
| Langflowファイルアップ | Path Traversal → RCE | 8.8 | **Active exploitation** | `pip install langflow>=1.9.0` |
| LangChain-coreプロンプトラーダ | Path Traversal → Secrets | 7.5 | PoC公開 | `pip install langchain-core>=1.2.22` |
| LiteLLMゲートウェイ | Authバイパス → Admin昇格 → RCE | 9.9 | CISA KEV、**6月22日期限** | `pip install litellm>=1.83.14-stable` |

**ボードレポート用文：** 「我々のAI開発ツールはインターネットに露出しており、デフォルトでログインが無効。この全く同じ欠陥が今活発に攻撃されています。本日中にアクセス制御の背後に置きます」

---

## 参考リンク

- [VentureBeat: 7,000 Langflow servers under attack](https://venturebeat.com/security/7000-langflow-servers-under-attack-langgraph-langchain-same-holes)
- [TechCrunch: Trump administration cracks down on Anthropic](https://techcrunch.com/2026/06/21/when-the-trump-administration-cracks-down-on-anthropic-who-benefits/)
- [TechCrunch: Nobel laureate John Jumper leaving DeepMind for Anthropic](https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)
- [VentureBeat: Adobe Creative Cloud agentic AI](https://venturebeat.com/orchestration/adobe-embeds-agentic-ai-workflows-across-creative-cloud-shifting-from-media-generation-to-production-orchestration)
- [VentureBeat: AWS Context knowledge graph](https://venturebeat.com/data/aws-enters-the-context-layer-race-with-a-graph-that-learns-from-agents-not-manual-curation)
- [Sequent: Alignment startup](https://sequent.org/launch)
- [CISA KEV Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)

---

*本文の情報は2026年6月22日時点のものです。脆弱性情報は日々更新されるため、各ベンダーのアドバイザリを定期的に確認してください。*
