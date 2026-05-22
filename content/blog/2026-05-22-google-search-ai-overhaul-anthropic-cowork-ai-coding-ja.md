# Google検索UI刷新、AnthropicがClaude Cowork発表 - AI開発トレンドまとめ（2026年5月22日）

本周火曜日（5月19日）、Googleは25年ぶりに検索ボックスの大幅刷新を正式発表した。AI ModeとAI Overviewsの統合、マルチモーダル入力対応、Gemini 3.5 Flashによる高速化、そして「情報を監視するAIエージェント」機能の導入など、検索体験の根本的転換が進行している。同時にAnthropicは桌面アプリケーション向けの新機能「**Claude Cowork**」を発表。フォルダベースの自律型AIエージェントとして、コードをを書かないユーザーにもAIコーディングツール同様の体験を提供する。本稿では本周見た主要AI開発ニュースをまとめる。

---

## Google検索ボックス刷新：25年ぶりのパラダイムシフト

Googleは5月19日、同社にとって年間推定750億ドル以上の収益を生む検索事業の根幹をなすUI刷新を発表した。2000年の登場以来、一貫して「白い細いボックスにキーワードを入力し、青いリンクのリストを得る」という paradigm を維持してきた検索ボックスが、AI駆動の対話型インターフェースへと生まれ変わる。

### 統合AI検索エクスペリエンス

最大の変化は **AI Mode と AI Overviews の統合** である。これらはこれまで別々のエントリーポイントとして存在していた。ユーザーは従来の青いリンク結果を求めるか、AIによる詳細回答を求めるかを選ぶ必要があった。新しい設計では一つのクエリで両方を同時に表示し、ユーザーが望めばそのままAI Modeの会話を続けることも可能。Google Vice President of Search の Liz Reid は「ほとんどのユーザーはどちらを選ぶかを意識したくない」と述べ、摩擦の排除を設計思想として強調した。

### マルチモーダル入力対応

新しい検索ボックスはテキスト 뿐ではなく、**画像・PDF・動画・Chromeタブの直接入力** をサポートする。ファイルをドラッグ＆ドロップし、ビジュアルなクエリを投げることが可能になる。

さらに「クエリ coaching」機能を導入。単純な-autocomplete（次の単語予測）とは異なり、複雑なニュアンスのある質問の構築を支援する。GoogleはAI Modeの月間アクティブユーザーが**10億人**を超え、クエリ数は四半期ごとに倍増していると報告。AI Overview は25億人の月間ユーザーにリーチしている。

### Gemini 3.5 Flash / Gemini Spark / 情報エージェント

検索体験の基盤には新世代の **Gemini 3.5 Flash** が使われている。Google は3.5 Flashが **Gemini 3.1 Pro を全ベンチマークで上回り、出力トークン速度は frontier モデルの4倍** と主張する。Pichai CEO はこのモデルを「知性・速度の両方で並ぶもののない存在」と表現した。

また **Gemini Spark**（24時間体制の個人向けAIエージェント）、**Agent Payments Protocol**（AIエージェント間 安全決済）、**Antigravity 開発プラットフォーム** の拡張も同時に発表された。

今回の刷新で特に注目すべきが「情報エージェント」機能である。ユーザーは検索内でAIエージェントを設定し、特定の条件を常に監視させることができる。例として、金融市場の特定セクターの変動を監視し、条件満足時に通知を受け取るといった使い方ができる。この機能は **Google AI Pro および Ultra 購読者** 向けて今夏提供開始。

年間資本支出が **1800億〜1900億ドル**（4年前の6倍）に達する中で、Googleは「検索は世界上っとも使われたAI製品」と位置づける。3.2 quadrillion トークン/月を処理しており、この数字は1年前から7倍増加している。

---

## Anthropic、Claude Coworkを発表：フォルダベースの桌面AIエージェント

Anthropicは5月20日、macOS桌面アプリケーション向けの新機能 **Claude Cowork** をResearch Previewとして公開した。Claude Code（開発者向けコーディングツール）の基盤技術を一般消費者向けに'adapter した製品で、ユーザーが指定したフォルダ内で自律的にファイルを読み書きするAIエージェントである。

### 开发者からの「おがる利用率」がヒントに

Cowork 生みの子は Claude Code の使われ方にあった。2024年末にClaude Codeがターミナルベースの开发者向けツールとして 출시されると、Anthropicは予想外のトレンドに気づいた。ユーザーが開発者ツールをコード記述以外の用途に使っていたのだ。

AnthropicのBoris Cherny は X で明らかにした:

> 「Claude Code を起動して以来、ユーザーがそれがコード以外の作業に使っているのを見てきました。バカンスの研究、スライドデッキの作成、メールの整理、サブスクリプションのキャンセル、式典からの結婚写真の回復、植栽の成長監視、オーブンの制御など、多岐にわたる用途に使われていました。」

この「shadow usage」を受け、Anthropicはコマンドラインの複雑さを排除した消費者向けインターフェースとして Cowork を開発した。

### フォルダベースの自律アーキテクチャ

Cowork の核心は **フォルダ単位のサンドボックス** である。ユーザーが特定のフォルダへのアクセスを許可すると、Claudeはその中で「読み取り・編集・新規作成」ができる。例として:

- ごちゃごちゃした downloads フォルダを整理・ inteligently 名を変更して分類
- レシートのスクリーンショット群から経費報告書スプレッドシートを生成
- 複数の文書に散らばったメモからレポートの下草案を作成

内部的には **agentic loop**（自律ループ）が動く。タスクを与えると、Claudeは単にテキスト回答を生成するのではなく、計画を立案→並列実行→自己検証→不明点は確認という流れで動作する。複数のタスクをキューに追加して並列処理させることも可能で、「バックアンドフォークのやり取りというより、同僚にメッセージを残す这种感觉」と表現される。

### 構築速度が話題に

特筆すべきは開発速度である。AnthropicのFelix Rieseberg氏が生放送で明かしたところによると、チームは **約10日間でCoworkを構築** したという。この短さが注目された理由は、Claude Code自体がCowork構築に大きく寄与している可能性が指摘されたため。Simon Smith(Klick Health EVP of Generative AI)は X で「Claude Code wrote all of Claude Cowork。我々は少なくともある程度の再帰的改善ループの中にいることに同意できるだろうか？」と投稿した。

### リスクへの透明な警告

ファイルを操作できるAIの導入には显而易见的なリスクが伴う。Anthropicは製品発表文書のかなりの部分をリスク説明に割いた。社名は「Claudeは潜在的に破壊的なアクション（ローカルのファイル削除など）を実行できる」と明示し、特に明確な指示を出す重要性を強調。また、prompt injection 攻撃への防禦態勢を構築しているが、「agent safetyは業界全体でまだ開発中の領域」であることを認めている。

###克劳ディ娅 Max限定・Windows展開予定

現時点では、Cowork は **克劳ディ娅 Max 購読者（$100〜$200/月）** の macOS 桌面アプリケーション限定。将来の跨デバイス同期とWindows対応が予定されている。他プランのユーザーはwaitlistに参加可能。

---

## Nous Research、NousCoder-14Bを発表：48個のB200で4日間の訓練

 Nous Researchは5月7日、** NousCoder-14B** をリリースした。14Bパラメータの开源コーディングモデルで、48個の NVIDIA B200 GPU を使い4日間で訓練された。LiveCodeBench v6（2024年8月〜2025年5月の競技プログラミング問題で評価）で **67.87%** の精度を記録。これは7.08ポイントの向上となる。

训练 数据는 24,000 の競技プログラミング問題。Joseph Li 研究者（Nous Research、在籍）は自身がCodeforcesで14〜16歳の間に2年かけて達成した向上（1600-1750 → 2100-2200相当）とモデルの向上を比較した。しかし人が約1,000問で到達できたのに対し、モデルには24,000問が必要だった。「今のところ人間はサンプル効率においてまだ遥かに勝っている」とLiは報告した。

同時に、訓練に使われた24,000問が「标准化された形式での入手可能な競技プログラミング問題の相当部分をカバーしている」ことを明らかにし、データ不足の危機を指摘。「競合プログラミングドメイン内では、高品質データの限界に近づいている可能性がある」とし、「合成データ生成とデータ効率の良いアルゴリズムとアーキテクチャの研究が重要になる」と結論づけた。将来的な解決策として「自己プレイ」（モデルに問題生成と解決を同時に行わせる）の方向性を示唆した。

NousCoder-14BはHugging FaceでApache 2.0ライセンス，供に公開。Atropos訓練スタックも完全开源かれている。

---

## VentureBeat インフラ関連ニュース

### Railway、1億ドル調達でAWS挑む

Railway（サンフランシスコ拠点のクラウドプラットフォーム）が1億ドルのシリーズBを調達。TQ Venturesが主導し、FPV Ventures、Redpoint、Unusual Venturesが参加。28歳のCEO Jake Cooperは「AIモデルがコードを書き上手になるにつれ、アプリケーションを実行する場所をどうするかという古くて新しい вопрос に戻っている。旧世代のクラウドプリミティブは遅く時代遅れで、AIがすべてを加速する中、チームは跟上できない」と語る。

### Meta、8000人解雇でAI投資を穴埋め

Metaが人员进行を约8,000人（全体の约10%）削減。AIへの大型投資のコストを構造的に吸収する動き。Alphabetの2026年Q1決算でも情報量的な設備投資負担が示されていた。

---

## その他主要動静

- **SpaceX IPO filing**：Elon Muskの SpaceX がIPO書類を提出。Anthropicとの年間150億ドルのデータセンター契約が明らかに。契約は双方90日以内の解除条項付き。
- **Samsung**： chip作業員に平均34万ドルのボーナス（AI profits 至高）。台湾TSMC、サムスン両社がAIチップ需要で好決算。
- **Google antigravity bait and switch**：Googleが Antigravity 開発プラットフォームで「bait and switch」を行った指摘がHacker Newsで上位に。

---

## 参考リンク

- [Google I/O 2026 - Search redesign announcement](https://blog.google/products-and-platforms/products/search/search-io-2026/)
- [Gemini 3.5 Flash - Google DeepMind](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
- [Claude Cowork - Anthropic Research Preview](https://claude.com/blog/cowork-research-preview)
- [NousCoder-14B - Nous Research](https://nousresearch.com/nouscoder-14b-a-competitive-olympiad-programming-model/)
- [Railway raises $100M - VentureBeat](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)
- [VentureBeat AI Feed](https://venturebeat.com/category/ai/feed/)

---

*（本文の情報は2026年5月22日時点のものです）*
