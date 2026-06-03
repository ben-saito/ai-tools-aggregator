# Googleが25年ぶりに検索ボックスを刷新 — AI-first、検索の未来を変える

25年間ほとんど変わらなかったGoogleの検索ボックスが、AIによって本格的な変革を遂げようとしている。2026年6月3日（米国時間）、Googleは年次開発者会議I/O 2026で、検索ボックスを「動的、AI駆動の会話を始めるためのインターフェース」に生まれ変わらせることを発表した。テキスト、画像、PDF、動画、Chromeタブのオープンを入力として受け入れる新しい検索ボックスは、従来のキーワード入力の概念を根本から覆すものだ。

---

## 検索ボックスの刷新 — 25年ぶりのパラダイムシフト

Googleの検索ボックスは quarter century、周知のインターフェースだった。薄い白い長方形、点滅するカーソル、数語のキーワード、青いリンクのリスト。しかし米国時間6月2日、Googleは этот paradigm を正式に retirement することを発表した。

Liz Reid Google VP（Search責任者）は press briefing で、「検索ボックスのデビューから25年以上を振り返ると、これは最も Iconic な検索ボックスにとって最大規模のアップグレード」と表現した。

**新しい検索ボックスの主な変更点：**

- **動的な拡張**: 長い会話的なクエリに対応するため、検索ボックス自体が dynamically 拡大
- **マルチモーダル入力**: 画像、PDF、ファイル、ビデオのアップロードを直接サポート
- **AIによるクエリ提案**: 「Autocomplete超出」とGoogleが呼ぶ新システム — ユーザーが複雑なクエリを作成できるよう coaching

---

## AI OverviewsとAI Modeの統合 — シームレスな体験へ

ボックス自体以上に重要なのが、背後にあるアーキテクチャの変更だ。Googleは **AI Overviews**（検索結果の上に表示されるAI生成サマリーパネル）と **AI Mode**（去年のI/Oでローンチされた会話型検索体験）を統合する。

6月3日から、このマージされた体験がモバイルとデスクトップで世界中に対応開始。ユーザーは質問を入力し、AI Overview と従来の結果を同時に受け取り、直接 back-and-forth のAI Mode会話に продолжить できる — 別のインターフェースに移動する必要がない。

Reid VPは「Lightning Power User はAI Modeを意識的に探していたが、大多数のユーザーにとっては、従来のページとAI-forward検索体験のどちらを選ぶか考える必要がない」と説明した。Goal：「ユーザーは慣れた検索ボックスに行くだけで、その後 лучший 体験を受けている的感觉可以得到」。

---

## 1 billionユーザー、倍増するクエリ — 検索行動の急速な変化

Googleが_FOUNDational インターフェースを redesignする背景には、ユーザー行動の急速な変化がある。同社は briefing で usage statistics を共有した：

- **AI Mode** は米国でのローンチから1年で月間アクティブユーザーが1 billionを突破
- AI Modeクエリはローンチ以来毎四半期 倍増
- AI Overviews は月間2.5 billion以上のユーザーにリーチ
- （四半期全体の）検索クエリ量は過去最高を記録

Sundar Pichai Google CEOは「ユーザーが検索でAI機能を使用すると、より多くの検索を使用する」と表述し、「検索が individual query から less about somethingになり、ongoing conversationに近づいている感じる」と 加えた。

---

## Gemini 3.5 Flash — AI検索に必要な速度

新しい検索体験の 내부 は **Gemini 3.5 Flash** — GoogleがI/Oで発表しました新しいAIモデル。Googleは、AI Modeの underlying model を3.5 Flashに upgrade して、Reid VPが「さらに powerfulなAI検索体験」と呼ぶものを実現した。

Googleによると、Gemini 3.5 Flashは以前の frontier modelであるGemini 3.1 Proよりほぼすべてのベンチマークで優れていますが、compar frontier model より4倍高速（出力トークン/秒）。Pichai CEOは、人工分析指数（知的対速度をプロット）の「右上象限にいる」と表現した。

この速度は search にとって非常重要。 conversational AI検索体験が緩慢に感じられた場合、毎日 billions of queries を処理する製品としては即座に失敗する。

---

## Generative UI — 検索がリアルタイムでカスタムウィジェットを構築

刷新された検索ボックスは、検索をテキストベースの回答るかに超えた新機能の gateway でもある。Googleは「**生成UI**」と呼ぶ機能を発表 — 検索がユーザーの特定の質問に応じて、カスタムウィジェット、interactive visualizations、ミニアプリケーションをリアルタイムで動的に構築できる機能。

Reid VPは briefing で具体的な例を提供した：ユーザーが「ブラックホールが時空にどのような影響を与えるか」と質問すると、回答のAI Overview で概念を живописно に表示するインタラクティブな visual を受け取る。フォローアップの質問は、システムがリアルタイムで entirely 新しい visual を生成.trigger。

これは「Google DeepMindチームと提携して構築した novel リアルタイムコード生成システム」によって可能になっている。生成UI機能は今夏、全員に無料、提供開始。

ユーザーは 또한 継続的なタスク（結婚式の計画、引越しの準備、フィットネルの進捗追跡など）のために、検索内でカスタマイズ可能な stateful 体験を構築できる。これらはコーディング專業不要。ユーザーは自然な言語で的希望を描述し、検索がそれを build。 эти experiences は今後数ヶ月で提供開始、最初は gemini.google/subscriptions/ の **Google AI Pro** および **Ultra** 加入者（米国）。

---

## 情報エージェント — 24時間Webを監視するAI

刷新はまた、「**情報エージェント**」と呼ぶ機能の道を開く — ユーザーが検索内で直接構成でき、特別な conditions に従ってWebを24時間监视し、conditions が滿たされたときに同化された更新を配信するAIエージェント。

例えば、ユーザーは特定のparameters を持つセククターの市場動きを追踪するエージェントを設定できる。を作成monitoring plan、エージェントはリアルタイム finance data にアクセスし、conditions が滿たされたときにリンクとcontextを含むプロactive な通知をユーザーに送信。情報は今夏、**Google AI Pro** および **Ultra** 加入者向けに first ローンチ。

---

## Anthropic Claude Cowork — フォルダベースのデスクトップAIエージェント

一方、Anthropicは6月（米国時間6月2日）**Claude Cowork** を公开发表した — macOSデスクトップアプリケーション向けの folder ベースのAIエージェント。Claude Max 加入者向けの Research Preview として登場し、ユーザーが指定したローカルマシンのフォルダ内でClaudeが reading、editing、creating files できる機能。

**Coworkの主な特徴：**

- **フォルダベースのアクセス**: ユーザーはClaudeがアクセスできるフォルダを明確に指定。サンドボックス内でAIエージェントは既存のファイルを読み取り、編集、作成可能
- **Agentic Loop**: タスクをassignすると、AIは単にテキスト応答を生成するのではなく、plan を立て、steps を並行実行し自己的工作を確認し、道路にぶつかったら clarification を求める
- **Browser Automation対応**: Claude in Chrome extension と組み合わせ、Webアクセスが必要なタスクも実行可能
- **Connectors対応**: Asana、Notion、PayPalなど既存のClaude接続と統合

**導入の背景**：Anthropicはdeveloperツール **Claude Code** のsuccess後に注意到了有趣的trend：ユーザーがコーディングツールをバケーション研究、スライドデッキ作成、メール整理、 subscription cancellation、ウェディング写真の回復、工場成長の監視、オーブンの制御など実に多様なタスクに使用していた。

「 개발자들이『コードを書き、他のすべてを実行する』使用了ため」を認識し、Anthropicはコマンドラインの复杂さを取り除いて consumer-friendly なインターフェースを作成することで **Cowork** を構築。Anthropicはこれが「開發者ではなくとも、Claudeで同様に 작업できる simpler な方法」だと表述。

---

## 10日間で構築 — AIがAIを構築するRecursive Loop

特筆すべきは、Coworkの開発速度。Anthropic社員 Felix Rieseberg はDan ShipperとのLivestreamで、チームが「およそ1週間半」でCoworkを構築했다고 confirmed。Alex Volkov（AI開発者）が「Holy shit Anthropic built 'Cowork' in the last... week and a half?!」と驚愕したのこと。

この高速開発はAIツールがAIツールの改善に使用されていることを示す最近の例。Simon Smith（Klick Health、EVP of Generative AI）は「Claude Code wrote all of Claude Cowork. Can we all agree that we’re in at least somewhat of a recursive improvement loop here?」と表述した。

---

## ファイル削除のリスクとPrompt Injectionへの警告

Agentがファイルを編集できるようになったということは、理论上ファイルを削除也可能。Anthropicは产品発表で considerable space を割いてCoworkの潜在的な危险についてユーザーに警告するという異例の approach を取った。

製品は「Claudeが（ローカルのファイルを削除するような）潜在的に破坏的なactionを取ることができる」ことを明確に acknowledging。指示を誤解する可能性があるので、機密操作には「非常に明確な guidance」を提供することを推奨。

さらに、Prompt Injection攻撃のリスクも認識：「「オンラインコンテンツに隠された指示をClaudeが偶然検出し、safeguards をバイパス하거나 harmful action を取る可能性」を指摘し、「Sophisticated defenses を構築したが、agent safety — Claudeの реальных action をsecuredにするtask — は依然として業界で進行中のdevelopment分野」だと表达。

---

## AI経済の成長率为2,600% — 新しい測定の挑战

Jack ClarkのImport AI 459では、米国のAI経済が年間約2,600%という前所未有の速度で成長している一方、従来のGDP統計ではその成長が 「大きく invisible」の狀態にあることが注目されている。

University of VirginiaとAnthropic、Economic学家およびBank of Canadaが共同書いた論文によれば：

- 名目AI GDPは2025年に約2,500億ドルと推定
- 品質adjusted実値で年間約2,600%成長
- US compute spend は2023年の370億ドルから2025年の2,190億ドルに増加

この測定の課題は、AIが労働の **代替** となる可能性がある最初の大型技術である点。従来の技術（半導体、인터넷）は aggregate level で人間の労働の **補完** であったが、AIは differently。

論文の著者らは、政策立案者がこの課題に対応するために3つの提案をしている：

1. **AI satellite accounts** の開発：統計機関がAIセクターの新たな測定基準を開発
2. **Better data生成**：統計機関、企业、学术界のパートナーシップで訓練と推論間のallocationなどの主要な一次データを生成
3. **Projectionsへの組み込み**：政策立案者がAI生産能力測定を中期経済予測に組み込む

---

## BioHub ESMFold2 — AlphaFoldへの挑战

生命科学研究の分野では、BioHub（Priscilla ChanとMark Zuckerbergが創設）がDeepMindのAlphaFoldに対する競争モデル **ESMFold2** を公开发表。ESMC（言語モデル）、ESMFold2（設計エンジン）、ESM Atlas（6.8億のタンパク質配列と11億の予測構造にアクセス可能）から構成される。

ベンチマークでは、ESMFold2がAlphaFold 3より優れた性能を達成（一部领域では引き分け）。癌研究では、EGFR、PDGFRβ、PD-L1、CTLA-4、CD45の5つのターゲットに対する設計が成功し、hit rate は36〜88%（コンパクトミニバインダー）と15〜29%（抗体由来源フォーマット）で、確認済み。

BioHubは「ESMFold2は初期治療バインダー発見の精度と速度を変え、经验的筛选から、数時間から数日で完了する計算による設計への変換を実現」と表述。

---

## 参考リンク

- [Google I/O 2026 - Search redesign](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [Google Blog - Search AI overview](https://blog.google/products-and-platforms/products/search/search-io-2026/)
- [Gemini 3.5 Flash models](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
- [Anthropic Cowork announcement](https://claude.com/blog/cowork-research-preview)
- [Anthropic Cowork on X](https://x.com/claudeai/status/2010805682434666759)
- [Import AI 459](https://importai.substack.com/p/import-ai-459-ai-oversight-is-difficult)
- [BioHub ESMC/ESMFold2](https://biohub.org/news/world-model-of-protein-biology/)
- [Where is AI in GDP statistics? (PIIE)](https://www.piie.com/publications/policy-briefs/2026/where-ai-gdp-statistics)

---

*（本文の情報は2026年6月3日時点のものです）*