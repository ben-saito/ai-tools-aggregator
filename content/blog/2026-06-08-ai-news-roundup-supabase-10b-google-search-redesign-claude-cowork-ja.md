# AI開発ニュースまとめ：Supabaseが$10B評価額に、Google検索刷新、Claude Cowork登場

2026年6月上旬、AI業界は複数の大型ニュースが同時に発生した。オープンソースデータベースのSupabaseが評価額10億ドルに到達し、Googleは25年ぶりに検索ボックスの大刷新を発表、さらにAnthropicはデスクトップAIエージェント「Claude Cowork」を発売開始した。本稿では各ニュースの技術的詳細と開発者への影響を読み解く。

---

## Supabase、$500M調達で評価額$10Bに到達——AIコードツール活用で急成長

Supabaseは2026年6月5日、$5億のSeries Fラウンドを完了し、プレmoney評価額$100億（調達後$105億）に到達した。GICが主導し、既存投資家のStripeを筆頭にGeorgianやSalesforce Venturesが参加した。この成長は「vibe-coding」トレンドと密接に関連している。

### データベース成長600%の裏側

Copplestone CEOのブログ投稿 따르면、Supabase上のデータベース_launch数が前年比600%以上増加。そのうち60%以上が「なんらかのAIツールによって」launchされているという。Claude CodeやCodexなどのAIコーディングアシスタントが、Supabaseを選好する理由としてPaul Copplestoneは「AIモデルが『構築できる人の裾野を広げる』」と説明している。

### Multigres：Postgres向けOSレイヤー

今週Supabaseがlaunchした**Multigres**は、Postgres運用の複雑さを抽象化するOSレイヤーとして設計されている。read replica、failover、connection limits、バックアップなどの運用タスクを 中央管理できることが特徴。vibe-coding環境では運用負荷が開発者のボトルネックになりやすいため、このツールの意図は明確だ。

### 企業向け大型契約をあえて拒否した戦略

CopplestoneはPodcastで「企業からの大型契約（数百万ドル規模）でプロダクト要求を飲むという『屑ツール化』は行わなかった」と明かしている。自らのプロダクトビジョンを維持する代わりに、個人開発者やvibe-coding者にフォーカスする逆張り戦略が、急成長に結びついたと見られる。

---

## Google、25年ぶりに検索ボックスを刷新——I/O 2026でのAI戦略転換

GoogleはI/O 2026開発者カンファレンスで、1999年の登場以来最大規模となる検索ボックスの刷新を正式発表した。Liz Reid Vice President of Search率いるチームは、検索ボックスの根本的な役割を再定義する複数技術を同時に公開した。

### AI ModeとAI Overviewsの統合

最大の変化は**AI Mode**（会話型検索）と**AI Overviews**（AI生成サマリー）の統合だ。以前はユーザーが別のインターフェースに移動する必要があったが、新設計では单一の検索ボックスからシームレスに両機能を横断できる。Reid VPは「ほとんどのユーザーにとって、従来のページとAI転送検索体験の中選択は意味がない」と語り、ユーザーの認知負荷軽減を優先した理由を説明した。

### マルチモーダル入力対応

新しい検索ボックスは動的に拡張し、長い会話型クエリをそのまま受け入れる。画像、PDF、ファイル、ビデオのアップロードに対応し、Chromeタブからのコンテンツドラッグインも可能。Gemini 3.5 Flash駆動の下で、リアルタイムウィジェットの生成やミニアプリの動的構築が可能になる「Generative UI」も今夏無料公開予定だ。

### 1Bユーザー突破のAI Mode——クエリ数は四半期ごとに倍増

AI Modeは米国向けlaunchから1年で月間アクティブユーザー1億を突破。クエリ数は四半期ごとに倍増しており、Sundar Pichai CEOは「AI-poweredな検索機能を使うと、ユーザーはより多くを検索する」とデータを示している。2026年のキャピタルエクスペンディチャーは$180-190B規模と予測される。

---

## Anthropic、Claude Coworkを発表——フォルダベースAIエージェントがMacに登場

AnthropicはmacOS向けClaudeアプリケーションに新機能**Claude Cowork**を追加した。Claude Max subscribers（$100-200/月）向けのリサーチプレビューとして登場たこの機能は、AIにローカルフォルダへのアクセス権限を付与し、ファイルの読み書き・編集を自律的に実行する。

### 開発者ツールから一般ユーザーへ

Coworkの起源はClaude Codeの「シャドウユーズ」にあった。2024年末にlaunchされたClaude Codeは元来開発者向けの端末ツールだったが、Anthropicはユーザーがコード閉じずに多样的タスクに活用していることに気づいた。vacation研究、スライド作成、メール整理、サブスクリプション解除、硬碟からの結婚写真回復——これらの“非コード”タスクがCowork誕生の動機となった。

### フォルダベースアーキテクチャとAgentic Loop

ユーザーは特定のフォルダをClaudeに開放する。Claude Agentはそのfolder内の既存ファイルを読み、編集、あるいは新規作成できる。内部的には「agentic loop」——タスクプランナー生成、並行実行、自己検査、道中でのclarificationリクエスト——が実装されている。Anthropicは「Claude Codeと同じunderlying architecture」で動作すると説明している。

### 10日間で建設——Claude CodeがClaude Coworkを建設

特筆すべきは開発速度だ。AnthropicのFelix Rieseberg社はlivestreamで「約10日間で建設された」と明かした。Simon Smith EVP of Generative AI at Klick Health社は「Claude Code wrote all of Claude Cowork」と投稿、AIがAI自身を建設する再帰的改善ループの存在を示唆した。

### セキュリティ上の注意とPrompt Injection対策

ファイルを編集・削除できる能力を持つAIエージェントの導入には自然とリスクが伴う。Anthropicはlaunch博客で「潜在的に破壊的なアクション（ローカルファイルの削除など）を実行可能性」について警告し、ユーザーへの「明確なガイダンス」提供を求めている。Prompt injection攻撃への防备として「洗練された防御」を構築したと主張するも、「agent safetyは業界でまだ活発な開発領域」であることを認めている。

---

## 参考リンク

- [Supabase Series F Announcement](https://supabase.com/blog/supabase-series-f)
- [TechCrunch: Supabase doubles valuation to $10B](https://techcrunch.com/2026/06/05/supabase-doubles-valuation-to-10b-in-8-months/)
- [VentureBeat: Google redesigns search box](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [VentureBeat: Claude Cowork](https://venturebeat.com/ai/anthropic-launches-claude-cowork-a-folder-based-ai-agent-for-non-technical-tasks-on-macos/)
- [Google Blog: Search redesign at I/O 2026](https://blog.google/products-and-platforms/products/search/search-io-2026/)
- [Claude Cowork Research Preview](https://claude.com/blog/cowork-research-preview)

---

*本文の情報は2026年6月8日時点のものです。*
