# AI開発・エンタープライズインフラ週報（2026年6月23〜29日）

2026年6月下旬のAI業界は、**エンタープライズ導入の加速**と**専用チップ・ASICの競争激化**、そして**Five Eyes同盟によるAIサイバー脅威の警告**など、開発者と企業ユーザーの双方にとって重要な一周間となった。本稿では、AI Newsの今週配信から 未掲載のテーマをまとめる。

---

## OpenAI、自家製推論チップ「Jalapeño」でインフラコストの構造を変える

OpenAIは6月25日（米国時間）、Broadcomと共同開発した推論専用ASIC **「Jalapeño」（ハラペーニョ）** を正式に明らかにした。Jalapeñoは「Inteligence Processor」と名付けられ、OpenAIの収益構造における**最も大きなコスト要因であるインフラ費用**の削減を狙った戦略的チップだ。

### 背景にある巨大なコスト構造

OpenAIの2025年実績によると、ChatGPT服务器的応答維持に**84億ドル**がかかった。2026年には900億ドルの用户提供に合わせ、**約140億ドル**に膨胀する見通しだ。8年後の2024年時点で、OpenAIはコンピューティング.powerに**1.4兆ドル**のコミットメントを出している的企业而言、これは巨大な资本的負担となる。

Nvidiaは高価格帯チップで推定**75%の利益率**を得る一方、OpenAIは巨大な運営費用扣除後に**総収益1ドルあたり約33セントの利益**しか確保できていない。

### Jalapeñoの技術的特徴

Jalapeñoは一般的なAIワークロード向けではなく、**大規模言語モデル（LLM）推論専用**に設計された。OpenAIがコアのアーキテクチャ設計を、自社のモデルロードマップと提供システムに基づいて手掛け、Broadcomがシリコンエンジニアリングと高性能ネットワーキングの統合を担当した。

**開発者にとって的意义:** OpenAIがNVIDIA依存から脱却する動きは、API価格の下落压力を高める可能性がある。Jalapeñoの性能とコスト効率次第では、OpenAIのAPI価格がさらに低下し、エージェントアプリケーションのプロダクション展開が経済的に更容易になる。

---

## Five Eyes同盟、「AIサイバー脅威が数ヶ月以内に現実化する」と警告

6月22日、米国・英国・カナダ・オーストラリア・ニュージーランドの**Five Eyes intel同盟**のサイバー 책임을들이 공동で出した緊急警告が話題だ。AIモデルがオフensiveハッキング能力を剧烈に強化しており、そのタイムラインは**「数ヶ月、数年ではなく数ヶ月」**という。

### 警告の核心

インテリジェンス簡報によると、OpenAIの「**GPT-5.5-Cyber**」やAnthropicの「**Mythos**」のような先進モデルが、デジタル犯罪の技術的ハードルを引き下げている。悪意の行為者は以下のことができるようになる:

- **複雑なソフトウェアエクスプロイト**を自動生成
- **24時間体制**でインターネット接続インフラをスキャンし、脆弱性を発見
- パッチを当てる前に攻撃を実行

### 企業への直接的影響

Five Eyesの警告は对企业幹部に向けたもので、ネットワーク防御の全面改革を求めている。一般ユーザーにとっても、犯罪組織が自動化ツールで大規模データベースに侵害を加えた場合、個人情報漏洩の风险が大幅に上昇する。

**開発者にとって的意义:** AIを活用した自動脆弱性スキャンの普及により、**セキュリティパッチの適用速度**が生存競争の軸になる。DevSecOpsの文脈では、SAST/DASTの自動化に加え、 AI駆動のペネトレーションテスト導入が急務となる。

---

## Samsung、3年ぶりにChatGPT Enterpriseを全社員に開放

Samsung Electronicsは6月24日、**ChatGPT EnterpriseとCodex**の全社員向け展開を正式に発表した。対象はSamsung Electronicsの韓国全員と、Device Experience（DX）部門 全球の従業員。DX部門にはスマートフォン・Consumer Electronics・ホームApplianceが含まれる。

### 3年前の制限からの転換

2023年、Samsungは генеративAIツールの従業員利用を制限した。敏感的内部情報が外部AIプラットフォームにアップロードされたことを受け、ChatGPT同様のツールの利用を禁止した過去がある。

新展開では**ChatGPT Enterprise版**が利用され、以下を提供する:
- **データ保護制御**: 企業データが外部に流出しない仕組み
- **ユーザーアクセス管理**: 役職・部門に応じた利用制御
- **セキュリティ管理**: SSOや監査ログ

### 実際の利用場面

Samsungは以下の業務機能でツールを活用する:
- ソフトウェア開発（Codex）
- マーケティング資料作成
- 製品開発
- 製造プロセス最適化
- その他業務

**開発者にとって的意义:** Samsungのような大企業がEnterprise版で社内AI展開を再開したことは、**企業内AIガバナンスのベストプラクティス**が成熟しつつある証拠。データ所在地とアクセス制御の整備が前提となる。

---

## HP、OpenAI Frontierをグローバル展開——週120万PR処理も

HPは6月29日、**OpenAI Frontier**のグローバル全社展開を拡大したと明かした。2026年2月からテストを開始し、ソフトウェアエンジニアリングとサイバーセキュリティ修復で運用改善を確認した。

### 注目すべき実績数値

- **1人のHPエンジニアが数週間で122件のPull Request**を処理（43の別プロジェクトにまたがる）
- **サイバーセキュリティ部門**が複数件のソフトウェアバグを1日で解決（通常は1ヶ月かかる工作量）

コードがテスト、指 Peer Review、セキュリティ監査、Sprint Planningの間で失われる時間をOpenAIツールが压缩。開発ライフサイクル全体の効率向上を実現する。

### Frontierの戦略的位置づけ

Frontierは「接続組織」として機能し、アクセスプロトコル、文脈データ、評価メトリクスを連携させる。AI推論能力を既存のEnterpriseオペレーションに統合するEnterprise向けプラットフォームだ。

**開発者にとって的意义:** AI支援コーディングの効果は「个人作業の高速化」から「チーム全体のスループット向上」へと進化している。ただし、コンプライアンスとコード所有権の明確化が必要。

---

## Anthropic、Claude TagをSlackに統合——Slackチャンネルに直接AIを配置

Anthropicは6月24日、**Claude Tag**のβ版をEnterprise・Teamプラン向けに提供開始した。最大の特徴は、AIモデルをSlackのオープンチャネルに直接配置する点だ。

### 仕組み

従来の方法是: 従業員がチームチャートと個別のブラウザインスタンスの間でデータを移動していた。Claude Tagでは、Slackチャンネル内で **@Claude** と入力するだけで、AIモデルがチャンネルに登場。チームメンバーがタスクを依頼し、モデルの出力を確認し、.previousから議論を再開できる。

### 市場的位置づけ

- **AnthropicのEnterprise導入率: 34.4%**（Ramp 2026年5月AI Index）
- OpenAIは32.3%
- US$650億のSeries H而成し、**評価額US$9.65B**（OpenAIのUS$8.52Bを上回る）

**開発者にとって的意义:** マルチプレイヤーのAI协働环境は、のエージェントモニタリングとチーム间的知識共有を変える。Claude Tagのオープンチャネル方式是、「AIの振る舞いが見える化」されることになり、ガバナンス上有意義。

---

## Scam.ai × Qualcomm、Computex 2026で「Halo」—— on-device深織検出

Scam.aiは6月29日、Qualcommとのパートナーシップと **Halo** の発表をComputex 2026（台北）で明らかにした。Haloはオンプレミスで動作する**深織（Deepfake）検出モデル**で、ビデオ通話中にリアルタイムで合成動画をフラグ立てる。

### 市場の背景

- ビデオ面接でのID不正が 文書化された問題として浮上
- HRリーダーの**31%のみ**が深織を検出する能力があると回答
- 「一度人間が侵害されれば、従来のセキュリティ対策は無力化する」

### 技術的特徴

- **デスクトップPCで動作**（クラウド不要）
- Qualcommのチップに最適化
- 任意のビデオ会議セッションの背後で動作

**開発者にとって的意义:** on-device AI推出の拡大は、**プライバシー保護とセキュリティの統合**が進む好例。API経由ではないローカル推論需要の高まりを示している。

---

## xFusion、エンタープライズAIをEdgeからデータセンターへ——4層構造を発表

xFusionは6月29日、ISC 2026（ハンブルク）で、Edgeデバイスからデータセンターへの**4層ハードウェアポートフォリオ**を展示した。

### 4層アーキテクチャ

| レイヤー | 構成 | 処理能力 |
|---------|------|---------|
| Personal Edge | FusionXtation X3 8000 Gen2 | 700億〜2000億パラメータ |
| Workgroup | クラスター構成 | スケールアウト |
| Corporate | オフィスAppliance | 中規模Enterprise |
| Facility | 超级コンピュータレベル | 大規模 |

### 性能データ

- **8K描画出力: 70%高速化**
- **AI処理パフォーマンス: 最大50%向上**
- Intel Core Ultra + デュアルプロフェッショナルGPU構成
- DDR5 ECC RAM最大256GB、内蔵ストレージ8TB

**開発者にとって的意义:** Edge推論の需要増加は、**レイテンシ制約の厳しいユースケース**（製造業、医療機関など）でのAI展開加速を示す。

---

## SAP、CommerceデータとAIpersonalisationのギャップを埋める

SAPは6月26日、Commerceデータ構造を整理し、**実行層でのAIpersonalisation**を可能にする「Advanced Success Plan」を発表した。

### よくある問題

- レコメンデーションエンジンが一般的な製品リストを表示（基礎データが孤立しているため）
- マーケティング部門が Rigidなカレンダースケジュールでメール送信
- ロイヤリティプログラムが財務取引のみを基準に報酬付与

### 3層アプローチ

SAPは**データ → ディシジョン → デリバリー**の3層アーキテクチャで、AIpersonalisationの実装困難を解決する。

**開発者にとって的意义:** 「AI有什么用か知っているが、実現できない」企业にとって、データ基盤の整備がAI活用の前提条件であることが再確認される。

---

## Omio、OpenAI Codexで旅行プロダクト開発を加速

Omio（欧洲の multimodel旅行プラットフォーム）は6月23日、OpenAI CodexをエンジニアリングOperationsに統合したと明かした。

### 展開の手法

OmioのCTO Tomas Vocetkaの原則: **「既存の业务流程にAIを足す」ことは禁止**。代わりに、各部署が業務執行のフレームワークをゼロから再設計し、AIを前提としたNativeなOperationsを構築する。

### Codexの活用範囲

- 初步調査・Architecture設計
- アクテブコーディング
- 自動化テスト
- コードレビュー
- システム維持

独自のInternal ConnectorでProprietaryデータ環境をCodexに接続。開発者は基本的な情報検索をスキップして、直接IDE内でアクティブタスクを実行できる。

---

## DevSecOpsの自动化——最新セキュリティテストツールの動向

Verizon 2025 Data Breach Investigations Reportによると、**脆弱性の悪用が侵害の開始点として20%**（前年比34%増）、**認証乱用が22%**を占める。コードの弱点とアクセスの弱点が同時に注目されている。

### 自动化セキュリティテストの重要ポイント

- **SAST（静的AppSecテスト）**: ソースコード実行前に弱い入力処理不安全関数・危险なパターンを検出
- **XBOW**: アプリケーションサーフェスと攻撃経路をマッピングし、本当のアクセスに繋るか検証

ルール調整が効果を左右: すべての些細な問題をフラグするスキャナーは信頼を失う。高リスクパターン・明確な修正を持つもの中心に焦点を当てるべき。

---

## 参考リンク

- [OpenAI Jalapeño chip - inference economics](https://www.artificialintelligence-news.com/news/openai-jalapeno-chip-inference-economics/)
- [Five Eyes warning AI cyber threats](https://www.artificialintelligence-news.com/news/five-eyes-warning-ai-cyber-threats/)
- [Samsung ChatGPT Enterprise Codex employee AI use](https://www.artificialintelligence-news.com/news/samsung-chatgpt-enterprise-codex-employee-ai-use/)
- [HP accelerates enterprise workflows OpenAI Frontier](https://www.artificialintelligence-news.com/news/hp-accelerates-enterprise-workflows-openai-frontier/)
- [Anthropic Slack workplace AI agents](https://www.artificialintelligence-news.com/news/anthropic-slack-workplace-ai-agents/)
- [Scam.ai Qualcomm Halo deepfake detection Computex 2026](https://www.artificialintelligence-news.com/news/scam-ai-announces-qualcomm-partnership-launches-halo-deepfake-detection-model-at-computex-2026/)
- [xFusion enterprise AI edge workstations data centres](https://www.artificialintelligence-news.com/news/xfusion-scales-enterprise-ai-from-edge-workstations-to-liquid-cooled-data-centres/)
- [SAP aligns commerce data AI personalisation](https://www.artificialintelligence-news.com/news/sap-aligns-commerce-data-for-ai-personalisation/)
- [Omio scales travel product development OpenAI models](https://www.artificialintelligence-news.com/news/omio-scales-travel-product-development-using-openai-models/)
- [Best automated security testing tools DevSecOps](https://www.artificialintelligence-news.com/news/best-automated-security-testing-tools-for-modern-devsecops/)

---

*本文の情報は2026年6月29日時点のものです。*
