# Anthropic、Claude Coworkをモバイル・Webに展開　〜Usage Dataが示す「開発者以外」の現実

2026年7月はAI業界にとって重要な転換点となっている。AnthropicがClaude Coworkのモバイル・Web対応を発表し、同時に公開した利用データによれば、Coworkの用途で**最も大きいのはソフトウェア開発ではなく、业务プロセスイオペレーション（33.4%）**だという。Claude Codeが開発者の生産性ツールとして話題を集める一方現場では、スプレッドシートの整形、レポート作成、オンボーディングチェックリストの作成など「仕事の仕事（work around the work）」が主流になりつつある。

---

## Anthropic、Claude Coworkをモバイル・Webに展開　利用データの衝撃

Anthropicは7月7日（現地時間）、**Claude Coworkのモバイル・Web版ベータ**を開始した。Max加入者向けベータを経て段階的に展開する予定。デスクトップ版と異なり、モバイル/Web版はサーバー側でタスクを実行するため、ローカル仮想マシンという攻撃 surfaceが存在しない──これがArmadinからのサンドボックスエスケープ報告を受けた構造的な対応でもある。

### デバイス間同期とバックグラウンド実行

モバイル展開の核心は3つの機能強化にある:

- **セッションのデバイス間同期**: デスクトップで始めたタスクを途中で確認し、完了后在りを別のデバイスで取得できる
- **完全バックグラウンド実行**: デバイスがオフラインでも、指定時間にClaudeが自律的にタスクを実行。例如として「午前6時に 클라이언트プリメ报纸草稿を作成しておく」ことができる
- **人間確認のモバイル通知**: Claudeが判断を要する場合はユーザーの手机に通知が上がり"Nothing ships until you've reviewed and approved it"

Anthropicは8月5日まで利用制限を2倍に拡大し、普及を後押しする。

### 開発者以外的用途が主流──Usage Dataの分析

Anthropicが120万セッションデータ（2026年5月11日〜31日、60万組織以上）を分析した結果如下:

| 用途カテゴリ | 割合 |
|---|---|
| 業務プロセス・イпераций | 33.4% |
| コンテンツ作成・コピーライティング | 16.4% |
| ソフトウェア開発 | 8.7% |
| DevOps・インフラ | 7.0% |
| 研究・インテリジェンス | 6.4% |
| データ分析・BI | 5.8% |

**ソフトウェア開発はわずか8.7%**。Anthropicはこの活用パターンを「仕事の仕事」と呼び、律师が書類整理をCoworkに委任して判断は自身で行う例、採 менеджерが面接フィードバック集約に使う例などを挙げ、「AIが最も価値を生むのは専門家のコアタスクではなく、その周围の_CONNECTing_workにある」と主张する。

### Anthropicの2トラック戦略

Anthropicは現在3つのプロダクトで棲み分けを行う:

- **Claude Code**: ターミナルベースのコーディングエージェント（開発者向け）
- **Claude Cowork**: 个人タスク委任型AIエージェント
- **Claude Tag**: Slackネイティブなチーム共用AI──6月26日に発表され、Anthropic社内では65%のコードがClaude Tagで生成されている

CoworkとTagは「个人」と「チーム」という轴で互补的な位置づけになり、Anthropicの企业展開戦略の重要な二本柱となっている。

---

## 企业AIエージェントの現実──コスト・セキュリティ・組織的課題

VentureBeatのAI Impactイベントでは、Red HatのBrian Gracelyシニアディレクターが企业がAIエージェントをプロダクション展開する際の具体的な課題を描いた。

### コスト管理の紧迫性

Gracely氏によれば、企业のAIコストは「chatbot時代と比較して桁違いに高く」なってしており、AIへの依存が特定のモデル_providerへの依存を生んでいることが課題しているという。2〜3の主要_providerが「損失が出ている」と及市场に通告し、上場による損失補填 пытается говноключ к себе引いており、「いずれ非常に高いコスト水準でを買うか、独自の替代手段を確保するか」という選択を迫られている。

最も効果的なコスト削減手は**モデルサイズの適正化**だという。「保险金の 청구を処理するだけでWestern Civilizationの歴史もWorld Cupサッカー結果も知っている必要はない」という比喻通り、セマンティックルーティングでリクエストを分类し、适切なサイズのモデルに自动振り分けする。Cachingを組み合わせることでGPU計算への到致回数を減らせる。

### セキュリティ──AIツールが脆弱性を発見する速度が劇的に上昇

Gracely氏によれば、AIを活用した脆弱性の発见は、企业のパッチ管理の观念を変えている。「 대부분의企业は7〜14日のウィンドウで跟上しを続ける必要がある」。AIは单体の重大缺陷ではなく、複数の轻微な脆弱性を連結させたときに危险になる組み合わせを発見できるようになっており、これは守り手の視界を扩げる一方、攻撃者にも同じツールが使えるという侧面がある。

### 組織的スケールへの壁──主題専門家とコンプライアンス teams

技术的な導入とは別の障碍がある。エキスパートの知识をエージェントに编码하려면、现场のDomain Expertの持续的な协力が不可或缺であり、その信任取得が「前払い」として必要になる。「AIが自分の仕事を奪う」と感じる威胁感への手当てと、長期的な协力のincentive设计が、プロダクション展開の成败を分ける。

---

## Box調査──AI先进企業のROIが25%以上の理由

Boxが米国・英国・フランス・日本ンのIT意思決定者1640名を対象に实施した调查では、 AI成熟度の swingが剧烈に示された:

- **先进/先行的企業**: 8% → 64%（1年間で8倍）
- **早期段階/未착手の企业**: 53% → 9%

80%がAI投资回报率（ROI）改善を実感し、半分が6个月以内に定量的ビジネスインパクトを確認。

### 本当のボトルネックは「コンテンツ」にあり

Box COOのOlivia Nottebohm氏によれば企業のAI格差の本质は「モデルの性能」ではなく「コンテンツへのアクセスと信頼性」だという。96%がエージェントに企業固有のコンテンツへのアクセスが必要だと答える一方、実際に многие use caseで接続しているのは36%のみ。

先进企業と早期企業を分けるのは执行力──Nottebohm氏によれば「先行的企業の特色は、 agentを展開する適切なチーム、代理を統制する正式なガバナンス、そのエージェントが動作するコンテンツ層の一貫性」という。

### 68%が单一ベンダー依存を懸念

企业들은 이제 "トークンマキシング"时代は終わり、で最も安価で所需の品質を満たすモデルを選ぶ倾向になっている。68%が单一AIプロバイダーへの依存を懸念し、公式採用ツール数は平均3.3に増加。79%がヘッドレス──人间接口なしでシステムやAPIに直接接続する──agent運用を重要または不可欠と見なしている。

---

## 関連参考情報

- [Anthropic、Claude Coworkモバイル・Web展開発表（Anthropic Blog）](https://claude.com/blog/cowork-web-mobile/)
- [Anthropic、Claude Cowork利用データ分析（Anthropic Blog）](https://www.anthropic.com/research/cowork-usage-data)
- [The real cost, security, and culture problems behind enterprise AI agents（VentureBeat）](https://venturebeat.com/security/the-real-cost-security-and-culture-problems-behind-enterprise-ai-agents)
- [Box survey: Why enterprise AI leaders are outperforming their peers（VentureBeat）](https://venturebeat.com/orchestration/box-survey-why-enterprise-ai-leaders-are-outperforming-their-peers)
- [Anthropic launches Claude Tag（Anthropic News）](https://www.anthropic.com/news/introducing-claude-tag)
- [Armadin、Claude Coworkサンドボックスエスケープの詳細を公表（SiliconANGLE）](https://siliconangle.com/2026/07/01/armadin-details-full-sandbox-escape-claude-cowork-anthropic-disputes-risk/)

---

*本文の情報は2026年7月8日時点のものです。*
