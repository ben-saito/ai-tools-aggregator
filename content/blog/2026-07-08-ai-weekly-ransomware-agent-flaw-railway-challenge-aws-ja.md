# AI週間ニュース（2026年7月第2週）：初「AI実行型ランサムウェア」の限界、RailwayがAWS挑む、Google検索ボックスの25年ぶり刷新

2026年7月第2週は、「AIエージェントの実力」と「AI駆動型インフラ」の2つの側面が鮮明に出た週となった。「初」とうたわれたAIランサムウェア攻撃の詳細が判明し、エージェントの限界が具体的に示された。一方で、RailwayがAWSに挑むAIネイティブクラウドで1億ドル調達、Googleは検索ボックスを25年ぶりに刷新しAIファーストへの舵切りを明確化した。

---

## 「初」のAIランサムウェア攻撃——実行はAI、戦略は人間

TechCrunchが7月6日に報じた内容によると、「初」とされるAI駆動型ランサムウェア攻撃の詳細が明らかになった。AIエージェントが技術的な実行を担ったことは事実だが、**被害者の選定、インフラの設置、認証情報の提供**はすべて人間が行っていた。完全自律型のサイバー犯罪という当初の主張とは裏腹に、攻撃成立には依然として人間の判断が不可欠だったことが判明した。

この事例は、AIエージェントの実際の能力と期待される能力の乖離を示すものとしてセキュリティ業界で注目されています。AIエージェントが得意するのは**反復的な技術的タスク**の自動化であり、攻撃対象的战略的な判断は依然として人間の专門家が担っている。

**開発者にとって的意义:** AIセキュリティツールの導入を検討している場合、「AIが人間に近い判断できるか？」という問いよりも、「AIが担える反復タスクの範囲はどこまでか？」という問いの方が現実的。エンドポイント保護や脅威検知の自動化において、AIは既に一定の効果を上げているが、戦略的意思決定の自动化は 아직道半ば。

---

## Railway、1億ドル調達——AIネイティブクラウドでAWS挑む

7月第2週に、RailwayがSeries Bで1億ドルを調達し、AIネイティブクラウドプラットフォームとしてAWSへの挑戦を明言した。TQ Venturesが主導し、Redpoint、Unusual Venturesなどが参加。調達額としては Series A の20万米ドルから大幅に増加し、企業価値も急上昇している。

**Railwayの差別化ポイント:**

- **月間1,000万デプロイ、1日1兆リクエスト**を処理するスケール
- 開発者2万人が利用——マーケティング費用は一切不使用
- 「古第三代クラウド（AWS/GCP/Azure）はAIアプリケーションには遅すぎる」という批评

RailwayのFounder Jake Cooper氏（28歳）はTechCrunchの取材に対し、「AIモデルがコードを書く能力が向上するにつれ、『どこで、どうやってアプリを動かすか』という問いが再燃している。前世代のクラウドプリミティブは遅く、古くさい。AIがすべてを加速化する今、チームたちは追いつけない」と語っている。

**開発者にとって的意义:** デプロイメントパイプラインにAIを統合する場合、従来のIaaS/PaaSではなく、AIワークロードに最適化されたプラットフォームの選択肢が登場している。コストとレイテンシの両面で比較考量する時期に来ている。

---

## Google、検索ボックスを25年ぶりに刷新——キーワードから会話へ

Googleは7月第2週、同社の基幹製品である検索ボックスの大幅刷新を正式発表した。1999年の登場以来、**25年ぶり**のメジャーデザイン変更。細い白い長方形という基本形態を保ちながら、機能と役割を根本から变えている。

**主な変更点:**

- **動的に拡張する入力フィールド**: 短文のキーワード入力ではなく的长文·自然な詢ねかけを受け入れる設計に
- **マルチモーダル入力対応**: 画像、PDF、ファイル、ChromeタブのURLを直接ドラッグ＆ドロップ可能
- **AI OverviewsとAI Modeの統合**: 従来の青色リンク一覧とAIによる要約·対話を1つのシームレスなフローに統合
- **Gemini 3.5 Flashによる裏付け**: 新検索体験はGemini 3.5 Flashで動作し、ベンチマークでFrontierモデルに匹敵する quality を4倍速い速度で実現

**注目すべき戦略的变化:** Googleは「検索は最も利用されているAI製品」という立场を明確化し、 Capital Expenditure（設備投資）を2026年に**1,800億〜1,900億ドル**に拡大する計画を改めて示した。従来の「キーワード广告モデル」から「AI会話モデル」への转变が、Android凤凰这台紙一迅というよりも、着実に进行している。

**開発者にとって的意义:** SEOの今後を考える上で重要。キーワード-density最適化ではなく、**深くニュアンスのある質問への回答**をコンテンツとして用意する戦略重要性が増す。AI Overviewsがソースへのトラフィックを本当に呼ぶのかという議論も継続しており、コンテンツ戦略の再評価が必要。

---

## Anthropic Cowork——Claudeがフォルダを読んでレポートを生成

Anthropicは7月第2週、Claude Max加入者向けの新機能「**Cowork**」の公開βを開始した。開発者向けツールClaude Codeで好评を得られたエージェントアーキテクチャを、**非技術ユーザーにも利用可能にする**产品。

Coworkのアーキテクチャは独特的だ。ユーザーはローカルマシンの特定のフォルダへのアクセス権をClaudeに付与し、Claudeはその中で**ファイルの読み取り、編集、作成**を行う。具体的な利用例としては以下のようなものがある:

- ごちゃごちゃのDownloadフォルダを整理·自動命名
- 領収书のスクリーンショット群から経費レポートのスプレッドシートを生成
- 複数のドキュメントに散らばったメモから下書きレポートを作成

特筆すべきは开发速度だ。Anthropicのエンジニア·Felix Rieseberg氏によれば、**Cowork本身の开发にかったのは约10日間**。さらに、「Claude Code自体がCowork大部分を構築した可能性がある」という指摘が业界から上がっており、AIツールがAIツール自身を开发するという**再帰的改善ループ**の実態が浮かび上がった。

安全性面では、Anthropic自身が「ファイル削除リスク」「プロンプトインジェクション攻撃への脆弱性」を公開文書で認めており、「より高度なツールを初めて使う」というユーザーに警告を発している点は、企业ユーザーが情報を的確に評価する必要があることを示している。

**開発者にとって的意义:** AIエージェントのアプリケーション層での活用が、codingからnon-codingタスクへと裾野扩大正在进行。Llama守れる範囲の 확장として位置づけられ、Agent SDKのアーキテクチャがariousな仕事に适用できることが分かってきた。

---

## NousCoder-14B——4日間で構築されたオープンソース竞プロモデル

 Nous Researchは7月7日、オープンソースコーディングモデル「**NousCoder-14B**」を公開した。48個のNVIDIA B200 GPUで**4日間**の訓練を経て構築されたこのモデルは、67.87%のLiveCodeBench精度を達成。競合の多くがCustom Licenseである中、**Apache 2.0ライセンス**で公开されたことが企业採用で有利に働く可能性がある。

特徴としては以下が挙げられる:

- **強化학습による訓練**: 2万4,000個の竞赛编程問題を解き、-binary reward（正答/不正答）で学習
- **DAPO采用**: 動的な Sampling Policy Optimization により学習効率を向上
- **データ庨の限界**: 研究者は「竞プロ领域で気軽に利用できる高质量データはほぼ限界に達した」と指摘し、合成データ生成の重要性を強調

**開発者にとって的意义:** オープンソースLLMのLicense形態は実務導入において重要。Apache 2.0はGPL系と異なり、出力物のLicense感染が起きない。社内でカスタムモデルを構築する際のベースモデルとして有力な選択肢となる。

---

## TechCrunch 其他の注目トピック（7月第2週）

- **SK Hynix、AIバブルで米国IPOへ**: メモリチップメーカーのSK Hynixが7月期optscale IPOを7月10日に実施。AI需要でHBMメモリ需要が急増する中での上場
- **Alibaba従業員、Claude Code使用禁止**: TechCrunchが複数報道によると、Alibabaは自社従業員に対しClaude Codeの使用を禁止。競合他社製のAIコーディングツールに対する自制動き
- **Reddit、LLMでLLMが生み出したスパム問題を解決**: Redditは1日あたり2,300万スパムビューをブロック、2.5万件の新規スパム投稿·コメントを毎日検出。20%の効果改善
- **Microsoft、5,000人解雇**: Xbox·商業販売部門で大型レイオフ。AI投資との并存で人员整理進める

---

## 参考リンク

- [The 'first' AI-run ransomware attack still needed a human — TechCrunch](https://techcrunch.com/2026/07/06/the-first-ai-run-ransomware-attack-still-needed-a-human/)
- [Railway secures $100 million to challenge AWS with AI-native cloud — VentureBeat](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)
- [Google just redesigned the search box for the first time in 25 years — VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [Anthropic's Cowork brings Claude agentic capabilities to non-technical tasks — VentureBeat](https://venturebeat.com/ai/anthropics-claude-cowork-puts-file-management-and-research-capabilities-in-reach-of-anyone)
- [NousCoder-14B competitive programming model — Nous Research](https://nousresearch.com/nouscoder-14b-a-competitive-olympiad-programming-model/)
- [SK Hynix US IPO — TechCrunch](https://techcrunch.com/2026/07/06/us-investors-will-soon-get-access-to-sk-hynix-another-memory-maker-riding-the-ai-boom/)
- [Alibaba bans employees from using Claude Code — TechCrunch](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/)
- [Reddit using LLMs to solve a problem LLMs largely created — TechCrunch](https://techcrunch.com/2026/07/06/reddit-is-using-llms-to-solve-a-problem-llms-largely-created/)

---

*（本文の情報は2026年7月8日時点のものです）*
