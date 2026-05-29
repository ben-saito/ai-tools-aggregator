# AI開発ニュース・ウェイ克林：Anthropicが650億ドル調達、Google検索の大改革、Claudeがフォルダを操る時代

AI業界は依然として止まらない。650億ドルの大型調達から検索インターフェースのパラダイムシフト、そしてAIエージェントのデスクワーク自動化まで、今週もAI開発の世界是多忙だった。本稿では2026年5月29日時点の最新情報をまとめてお届けする。

---

## Anthropic、650億ドル調達で9650億ドル估值に到達 —— IPO前夜の最終ラージド

AI安全保障と解釈可能性の研究で知られる**Anthropic**が、Series Hで**650億ドル（約6.5兆 루멘）**もの巨額資金を調達した。記事投下後のpost-money評価先は**9650億ドル**に達し、1兆ドル（＝100兆원）台突破が視野に入ってきた。

**TechCrunch**の報道 따르면、このラウンドはAIスタートアップ历史上、最大規模の非公開資金調達の一つとなる。AnthropicはClaudeシリーズ（Claude 3.5 Opus、Claude 3.7 Sonnetなど）で知られ、最近月は収益成長率も显著に改善しており、IPOに向けた準備が加速しているとされる。

Anthropicの直近の収益は年間10億ドルを突破しており、利益率も改善傾向がある。OpenAI、GoogleDeepMindと共に「AI安保三大手」と称される同社が、いよいよNASDAQ上場の噂再到っている。

### なぜ注目すべきか

- **Claudeデスクトップエージェント**（後述）の布石とされる
- AIセーフティ研究のmercializaiton（商業化）が本格段階
- IPO前夜の意義：AI業界の「GAFA」誕生近づく

---

## Google I/O 2026：検索ボックスを25年ぶりに大改革

**Google**は5月に開かれたI/O開発者カンファレンスで、1998年のサービス開始以来となる**検索ボックスの根本的再設計**を発表した。

### 主な变更点

- **新しい検索ボックス**：シンプルなキーワード入力から、**マルチモーダル会話型UI**へと進化。画像、PDF、ビデオ、Chromeタブの直接アップロードが可能に
- **AI OverviewsとAI Modeの統合**：これまて別れていたAI要約と会話型検索がシームレスに融合
- **Gemini 3.5 Flash**：新しいフラグシップモデルが处理速度4倍向上ながらベンチマーク性能は維持
- **情報エージェント（Information Agents）**：ユーザーが指定した条件を満たうと自動的に 웹을 모니터링するAIエージェントを検索内で提供
- **ジェネレーティブUI**：検索がリアルタイムでカスタムウィジェットやインタラクティブなビジュアル、数理アニメーションを動的に生成

### 開発者にとっての意味

GoogleのI/O情報は2026年のAIアプリケーション開発において**最も重要な指向策の一つ**である。約1900億ドル（約19兆원）の2026年設備投資계획と結びつき、GoogleはAI-firstの未来を文字通りインフラの側から構築している。

検索→AI Modeへの自然な遷移は、SEOやコンテンツ公開のビジネスモデルにも 큰衝撃を与えることは避けられない。

---

## Anthropic、Claude Coworkを発表 —— フォルダを読んで経費報告書を自動生成

Anthropicは**Claude Cowork**を発表した。macOS向けClaudeアプリケーションの新機能として、ユーザーが指定したフォルダにアクセスし、**ファイルを読んで·編集·作成**できるAIエージェントだ。

### できること

- Downloadsフォルダ内の領収書画像を批量で読み取り、経費報告スプレッドシートを自動生成
- 散らかったファイル群をを整顿·インテリジェントにリネーム
- 複数のメモ帳やドキュメントから報告書の下書きを作成

### 技術的背景

- **Claude Agent SDK** 기반으로構築（Claude Codeと同程度）
- **隔離されたVM（仮想マシン）** 上で動作し、プロンプトインジェクション攻撃を防止
- ブラウザー自動化（Chrome拡張）と連携し、Selenium的なウェブ操作が可能
- Notion、Asana、PayPalなどとのconnector対応

### 注目ポイント

Anthropicの説明によれば、Coworkは**約10日間で 开发された**，さらに注目すべきは、**Claude Code itselfが開発に寄与した**可能性が示唆されている点。AIがAIツールを自己増強的に 开发する——Recursive AI Developmentの現実味がましている。

---

## Railway、1億ドルの調達でAWS挑む —— AIネイティブクラウドの激突

**Railway**はSeries Bで**1億ドル（約100億円）**を調達し、「AIネイティブ」クラウドプラットフォームとしてAWS·Google Cloud·Azureへの挑戦態勢を明確にした。

**VentureBeat**によれば、Railwayは二年前に年間10万开发者突破、月間1000万以上のデプロイメント进行处理しており、资金使途はAIワークロードに特化したインフラの拡張が主目的。

AIモデルの training/inference workloadは従来のWebアプリと本质的に異なるリソース特性（GPU、高頻度バースト、リアルタイム推論）を持つ。Railwayはここに商機を見出し、「AIのためのHeroku」としてのポジション確立を急いでいる。

---

## Groq、6.5億ドルを追加調達 —— AI推論チップの熾烈な競争

Nvidiaの200億ドル規模「準買収」後、**Groq**は**6.5億ドル**の内部調達を进的ている。Axios報道によれば、Groqはハードウェア」から「AI推論サービス」へのピボットを加速中で、社名も「Groq」自体は維持しつつ、AI推論SaaSの開発を重点的に進める方針。

NvidiaのGPU在高需要·供給不足の中、推論特化型のAIチップへの注目が再燃している。GroqのLPU（Linguistic Processing Unit）は推論 workloadsに向いたアーキテクチャとされ、生成速度の点で竞争力を持つとされる。

---

## AI Chip Startup XCENA、1.35億ドル調達—— 「AIの本当のボトルネックはメモリだ」

韓国のスタートアップ**XCENA**は、**1.35億ドル**（評価額5億7000万美元）を調達した。同社のテーゼ：「AIの本当のボトルネックは**compute（計算能力）ではなくメモリ**だ」。

HBM（High Bandwidth Memory）技術の進化と、AIモデルの大規模化によるメモリ需要急増を背景に、メモリ帯域幅特化型のAIアクセラレーター開発を進める。Nvidia·AMDがcompute特化型チップを выпуска하는中、メモリ領域のイノベーションを狙う滑り込み的なポジショニング。

---

## データ獲患上り新時代 —— ホーム清掃×ロボット訓練データの意外すぎるビジネス

AI訓練データ獲患上しのユニークな事例が浮上した。**Shift**というスタートアップはニューヨーカーに免费でホーム清掃サービスを提供する。その代わり、清掃スタッフが家中を動き回る姿を**動画撮影**し、ロボット工学の訓練データとして使用する。

家庭の家事労働（皿洗い、表具磨き、掃除機、床モップ拭き）は、ロボット工学最难のタスクの一つ。家事労働の「OS」を使えば家庭内RPA（Robotic Process Automation）実現に近づけるという算段だ。

倫理的懸念も大きい：家政婦の影像を本人の同意なく訓練データに轉用することは、現行法の下でもグレーゾーンが拡大している。

---

## 開発者ツールの進化：Cognition × Devin、Nous Research × NousCoder

- **Cognition**（Devin開発）のScott Wu CEOは、AIコーディングエージェントは「人間取って替えではなく」、人間の生产力向上工具と強調。開発者の替代ではなく「コパイロット」としての位置付けが社是
- **Nous Research**はNousCoder-14Bをリリース。48個のNvidia B200 GPUで4日間 trainingした競合プログラミング特化モデルで、LiveCodeBench v6において67.87%正解率を達成

---

## AI-Tokフューチャーズ：AIトークンを商品先物として取引する時代

主要取引所がAIトークンを対象とした派生商品（AI token futures）の開発を進めている。「電力や带宽と同じくらい、AIトークンは原材料投下」（TechCrunch原文）として位置づける動き。

AI토큰（生成AIのAPI呼び出し、回線の計算資源、消費量に基づく）は、近い将来、商品先物市場に登場する予定。トレーダーにとっては、AI産業の「お temperature」指標としても利用可能になりそう。

---

## まとめ：AI開発の次の局面

| テーマ | 動向 |
|--------|------|
| **AI企業の的大型資金調達** | Anthropic 650億、Groq 6.5億、Xcena 1.35億——AI金詰時代到来 |
| **検索×AI融合** | Google I/O 2026で検索インターフェースがパラダイムシフト |
| **AIエージェント咆哮** | Claude Cowork、Devin、Information Agents——「Machinesが Machines化する」 |
| **AIインフラ競争** | RailwayがAWS挑む。メモリ Optimize型の新星も誕生 |
| **データ収集の创新** | ホーム清掃→訓練データという意外過ぎるモデル |

来週もさらに激動のAI開発業界からお届けする。

---

## 参考リンク

- [Anthropic raises $65 billion, nears $1T valuation (TechCrunch)](https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/)
- [Google just redesigned the search box (VentureBeat)](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [Cognition's Scott Wu says AI coding agents shouldn't replace humans (TechCrunch)](https://techcrunch.com/2026/05/29/cognitions-scott-wu-says-ai-coding-agents-shouldnt-replace-humans/)
- [Railway secures $100 million (VentureBeat)](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)
- [Groq reportedly raising $650M (TechCrunch)](https://techcrunch.com/2026/05/29/after-nvidias-20b-not-aqui-hire-ai-chip-startup-groq-reportedly-raising-650m/)
- [XCENA secures $135M betting on memory as AI's real bottleneck (TechCrunch)](https://techcrunch.com/2026/05/29/xcena-secures-135m-at-570m-valuation-betting-on-memory-as-ais-real-bottleneck/)
- [Shift free cleaning for robot training data (The Verge)](https://www.theverge.com/ai-artificial-intelligence/939765/ai-training-data-startup-shift-free-cleaning)
- [Claude Cowork (Anthropic Blog)](https://claude.com/blog/cowork-research-preview)

---

*（本文の情報は2026年5月29〜30日時点のものです）*
