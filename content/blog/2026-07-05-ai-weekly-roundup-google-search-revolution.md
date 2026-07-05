# AI開発ニュース Weekly Round-Up：2026年7月第1週

AI業界は本周、Googleの検索ボックス刷新という25年ぶりの大型アップデートを迎え、生成AIの社会実装が加速している。今週は主に6件の注目ニュースをお届けする。

---

## Google、25年ぶりに検索ボックスを刷新 生成AI統合で局面大变

Googleは7月4日（米国時間）、25年間ほぼ変更されてこなかった検索ボックスを刷新すると発表した。I/O 2026で発表されたこの刷新は、AI OverviewsとAI Modeを統一し、多モーダル入力（テキスト、画像、PDF、ビデオ）に対応させるものだ。

**ポイント：**
- 新検索ボックスは動的に拡張し、長い会話的クエリを入力可能に
- ファイルやChromeタブのドラッグ＆ドロップに対応
- **Gemini 3.5 Flash**を基盤に、毎秒4トークンの高速出力を実現
- 検索クエリ数は過去最高を更新中（AI Modeは1億ユーザー突破）

GoogleのSundar Pichai CEOは約1900億ドル（约28兆5000億円）の2026年設備投資を示唆し、「検索は世界上でもっとも利用されているAI製品」と語った。

**開発者視点：** 搜索 кисский最適化（SEO）のパラダイムシフトが訪れる。キーワード密度から自然言語意図の解析へ、コンテンツ戦略の根本的見直しが必要になりそうだ。

---

## Alibabaが社員禁令：Claude Codeを「高リスクソフトウェア」に分類

TechCrunchの報道によると、中国のEC大手Alibabaは社員によるClaude Codeの利用を禁止した。Claude CodeはAnthropic製のAIコーディングツールで、世界の開発者から大きな支持を得ている。

**背景：**
- AlibabaはClaude Code企业内部のセキュリティリスクとして評価
- 中国是国内でAI開発を促進する一方、海外製ツールへのアクセスを制限する動きを強めている
- 代わりにAlibabaの自社開発AIコーディングツールの利用を促進すると噂されている

**開発者視点：** 企業によるAIツールの規制強化趋势が鲜明になっている。ローカル環境でのClaude Code利用や、機密情報を含むプロジェクトでの利用に関するガバナンス整備が急務となりそうだ。

---

## Anthropic、Claude Science発表：科学家向けAIワークベンチ

Anthropicは7月3日、科学家向けの新製品「Claude Science」を発表した。碎片化されたツールとデータセットを统一環境に統合し、自动化的な図表生成も行う。

**主な機能：**
- Pharma.AI平台（Insilico Medicine）：創薬ターゲットの特定、分子設計、臨床試験予測
- 画像・表・図表の自动生成
- 既存のClaude Agent SDKベースのagentic workflow

**ビジネス面：** TakedaがInsilico Medicineと6億ドル（约900億円）のAI創薬提携を結ぶなど、Big PharmaのAI導入が加速している。Anthropicも自有ブランドでの創薬事業进出を表明した。

---

## Midjourney、好調なHollywoodスタジオにAI使用の詳細開示を要求

画像生成AIのMidjourneyは提訴したHollywoodスタジオ3社（Disney、Universal、Warner Bros）に対し、彼ら自身的AI使用の詳細を開示するよう法院に請求した。

**ポイント：**
- Midjourneyはこれらのスタジオが自身的を使用しながらMidjourneyの使用は止めるのは矛盾であると主張
- 同時に、Midjourney Medicalの超声波スキャナーのBehind The Scenes動画を公開
- スキャンは现在 spa市場で展開する予定

**開発者視点：** AI創作物への著作権問題はいまだ解決を見ていない。法的リスクを避けるため、企業はAI生成コンテンツの明確なポリシーを策定する必要がある。

---

## Meta、AI Agent開発が期待ほど速くないとZuckerberg氏

MetaのMark ZuckerbergCEOは社内会议で、AI Agentの開発が予定より缓慢であると述べた。TechCrunchが入手した情報によると、MetaのCEOは「AI Agentは我々が期待したほど速くない」と表述したという。

**一方で：**
- Metaは静かにAIゲーム生成アプリ「Pocket」をリリース
- 「vibe-coded」アプローチで、テキストプロンプトからインタラクティブなミニゲームを生成
- 开发者コミュニティではAI Agentへの期待は高いまま

**開発者視点：** AI Agentの实用化には 技术的課題（安全性、信頼性、总局的な知的処理能力）がまだ残る。現在の的主流は狭いタスク特化型Agentであり、汎用Agentの実現にはまだ時間を要する。

---

## Nous Research、NousCoder-14B开源：4日で48個のB200 GPUを使用

Nous Researchは7月7日（米国時間）、14ビットパラメータのコーディングモデル「NousCoder-14B」を开源发布了。わずか4日の训练で48個のNVIDIA B200 GPUを使用し、LiveCodeBench v6で67.87%の正答率を達成した。

**技术詳細：**
- 基盤モデル：Alibaba Qwen3-14B（改进幅度7.08ポイント）
- 训练問題数：24,000题（Codeforces 2100-2200级别相当）
- 训练時間：96時間（人間の場合は2年かかるレベル）
- 強化학습：DAPO（Dynamic Sampling Policy Optimization）を使用
- Apache 2.0ライセンスで公开

**注目ポイント：** 训练データに近づき限界が近い。24,000题は「 인터넷上のCompetitive Programmingの标准的データセットの相当な部分を占了める」と研究者らは指摘。合成数据生成やよりデータ効率的なアルゴリズムの研究が今後重要になる。

---

## Anthropic Cowork — フォルダベースのAI AgentがMacに登場

AnthropicはMacOS向けClaudeアプリに「Cowork」機能を導入した。フォルダへのアクセス権を付与することで、Claudeがファイルの作成・編集・フォルダ構成を自动的に行ってくれます。

**概要：**
- Research PreviewとしてClaude Max加入者限定提供服务
- 対応例：污いダウンロードフォルダの整理、 RECEIPT画像からの経費レポート生成
- Browser自动化と连携し、Web操作も可能
- Built-in VMによる分離でセキュリティを担保

**特筆：** Felix Rieseberg（Anthropic）はLive streamで「およそ10日半で构建された」と明かした。Claude Code自体がClaude Coworkの构建に寄与した可能性があり、「AIがAIを構築する」 recursive loopの実践例として注目される。

---

## まとめ

7月第1週のAIトレンドは **「基盤模型の検索への統合」** と **「AI Agentの实用化·企业導入」** が中心だった。Googleの検索刷新は一般ユーザーのAI体験を一変させる可能性があり、企業レベルでもClaude CodeなどのDeveloper Toolを取り巻くガバナンス課題が浮き彫りになっている。

来週はGemini 3.5 Flashの正式評価や、各社のAgent製品競争が值得注意。

---

## 参考リンク

- [Google Search redesign announcement](https://blog.google/products-and-platforms/products/search/search-io-2026/)
- [TechCrunch - Alibaba bans Claude Code](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/)
- [VentureBeat - Google Search box redesign](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [The Verge - Anthropic Claude Science](https://www.theverge.com/ai-artificial-intelligence/961311/anthropic-claude-science-ai-drug-development)
- [AI News - Takeda Insilico deal](https://www.artificialintelligence-news.com/news/takeda-insilico-ai-drug-discovery-deal/)
- [VentureBeat - NousCoder-14B](https://venturebeat.com/technology/nous-researchs-nouscoder-14b-is-an-open-source-coding-model-landing-right-in)
- [VentureBeat - Anthropic Cowork](https://venturebeat.com/ai/anthropics-claude-code-can-now-read-your-slack-messages-and-write-code-for)
- [TechCrunch - Midjourney Hollywood studios](https://techcrunch.com/2026/07/04/midjourney-wants-hollywood-studios-to-reveal-the-details-of-their-ai-usage/)

---

*（本文の情報は2026年7月5日時点のものです）*
