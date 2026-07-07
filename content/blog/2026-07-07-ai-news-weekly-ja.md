# AI開発ニュース Weekly Roundup — 2026年7月第1週

2026年7月上旬、AI業界は複数の重要な転換点を迎えた。Googleが25年ぶりに検索ボックスの大刷新を発表し、AI OverviewsとAI Modeの統合によるシームレスなAI検索体験の提供を開始した。またAnthropicは、Claude Codeの技術基盤を一般消費者向けに下ろした「Claude Cowork」の研究プレビューを開始。さらに Nous Researchは4日間の学習でClaude Codeに匹敵する競争的プログラミング能力を獲得したオープンソースモデルNousCoder-14Bをリリースし、オープンソースAIの急速な進化を印象づけた。

---

## Google、検索ボックスを25年ぶりに刷新 — AI OverviewsとAI Modeが一体化

2026年7月（I/O 2026発表分）、Googleは検索体験の根幹をなす**検索ボックスを25年ぶりに大幅刷新**した。従来のキーワード入力から、多モーダル入力・会話型AI体験への移行，标志着消費者向けAI検索の本命投入が完了した段階と言えよう。

###  расширениеとAIによるクエリ最適化

新しい検索ボックスは、ユーザーが複雑な質問を想定された詳細まで入力できる**動的拡張UI**を採用。従来の細い長方形ボックスではなく、長い会話的クエリを其自然に入力できる構造になった。また単純なオートコンプリートではなく、AIがユーザーのクエリを**より详细信息に整える「クエリ coaching」**機能も実装された。

### AI Overviews + AI Mode = シームレスAI検索

最も重要な変更は、背後アーキテクチャの統合。Googleは**AI Overviews**（軽量なAIサマリー）と**AI Mode**（会話型検索体験）を1つのシームレスな体験に統合した。ユーザーは従来通り検索ボックスに質問を入力し、AI Overviewsと従来の結果を同時に受け取った後、そのままAI Modeの会話に乗り込んでフォローアップ質問できる——別界面への移動は不要である。

### 1ユーザーあたり10億、AI Modeクエリは四半期ごとに倍増

GoogleのVP Liz Reid氏によると、AI Modeの月間ユーザーは**1億人を突破**し（四半期ごとの倍増率は継続中）、AI Overviewsは**2.5億人**のユーザーに到達している。Sundar Pichai CEOは「ユーザーがより多くの検索をしているのは、AI機能が検索利用をCannibalize（奪い取）っていない証拠だ」と強調。月額3.2クアドリオンリクエスト処理している。

### Gemini 3.5 Flashが検索体験的动力に

新しい検索体験は**Gemini 3.5 Flash**の上で動作。Googleによると、このモデルはGemini 3.1 Proよるほぼ全てのベンチマークで優れた性能を持ちながら、論理的 frontierモデル比で**4倍高速**出力を実現。速度が重要な検索体験にとって、これは大きなアドバンテージである。

###  generative UIと情報エージェント

Googleは「**generative UI**」機能も発表。検索がDynamicallyにカスタムウィジェット、インタラクティブ可視化迷你アプリをリアルタイム生成する。用户が「ブラックホールが時空に与える影響は？」と質問하면、AIがインタラクティブな視覚效果をその場で生成する。

さらに「**情報エージェント**」——ユーザーが設定した条件を常にウェブ上で監視し、条件達成時に通知を届けるAI——も導入される。市場の動きを追跡したり、アパート探しに活用したりできる。

---

## Anthropic、Claude Coworkを開始 — フォルダベースのデスクトップAIエージェント

Anthropicは7月、**Claude Cowork**の研究プレビューをリリースした。Claude Codeの技術基盤を活かしつつ、开发者ではない一般ユーザー向けのファイルベースAIエージェントである。月額$100〜$200の**Claude Max購読者**がmacOSデスクトップアプリケーションからアクセス可能。

### フォルダベースのワークスペース

Coworkの核心は、ユーザーが指定した**ローカルフォルダへのアクセス**をClaudeに許可する設計。そのフォルダ内で、AIはファイルの読み取り、編集、新規作成を実行できる。例えば、散らかったダウンロードフォルダを整理・Intelligent Renamingしたり、レシートスクリーンショットのの山から経費スプレッドシートを生成したり、乱雑なメモから докладを起草したりが可能。

### エージェントループと параллеル処理

Claude Codeと同様の「**agentic loop**」を採用。AIはタスクを受け取ると план を立案、ステップを параллеルに実行、自己チェックを行い、道に迷ったらユーザーに確認を求める。複数のタスクをキューに追加して同時に処理させることも可能。

### Anthropic自らの警鐘 — 「ファイルを削除する可能性もある」

注目すべきは、Anthropicが製品発表と同時に**潜在的なリスクについて詳細な警告**を発した点。AIが「 destruuctiveなアクション（ローカルのファイル削除など）」を実行する可能性があり、尤其是プロンプトインジェクション攻撃のリスクも存在する。「プロンプトインジェクションに対しては洗練された防御を構築したが、エージェント安全確保は業界的にまだ進行中の分野である」とAnthropicは述べている。

### 10日半で開発された——Claude Code自体がCoworkを構築

興味深いのは、Coworkの開発速度。AnthropicのFelix Rieseberg氏によると、チームは約**10日半でCoworkを構築**。Alex Volkov AIオブザーバーが「 Anthemic CFOが『Cowork』を最後の...10日程度で構築した？！)",と驚いたのに対して、Simon Smith Klick Health EVPは「Claude Codeが全Claude Coworkを構築した。我々は少なくともある程度の再帰的改善ループにいることで全ての同意できる?",と指摘。AIが自らの兄弟製品構築に貢献した可能性が示されている。

---

## Nous Research、NousCoder-14Bを発表 — 4日間・48×H200でClaude Codeに匹敵するcodingモデル

Nous Researchは6月（時期として6月末〜7月頭と推定）、**NousCoder-14B**をリリースした。4日間の学習（48×H200 GPU）で、67.87%のLiveCodeBench精度を達成した14Bパラメータの открытая модельである。

### 強化学習と検証可能な報酬

 NousCoder-14Bの訓練には「**検証可能な報酬（verifiable rewards）**」システムが採用されている。モデルがコードを生成すると、そのコードをテストケースに対して実行し、正解・不正解のBinary Signalを受け取る。このフィードバックループをスケールさせるため、Modalのクラウド実行環境で並列にサンドボックスコード実行を実施。 各問題は平均数百のテストケースを持ち、15秒・4GBメモリの制限内で検証された。

### DAPOと反復的コンテキスト拡張

訓練には**DAPO（Dynamic Sampling Policy Optimization）**技術が使用され、モデルが全ての問題を解いた問題と全問不正解の問題を学習から除外——これらは勾配信号を提供しないためである。また「**反復的コンテキスト拡張**」も採用され、最初は32Kトークンコンテキストで訓練した後、40Kに拡張。評価時には80Kトークンまで拡張することで最高の67.87%精度を達成した。

### 近づき続けるデータ壁に直面

 研究者であるJoe Li氏（元Competitive Programmer）は、技術報告で重要な知見を共有。訓練に使用した24,000の問題は、「標準化されたデータ形式で入手可能な検証可能な競争プログラミング問題の大部分を占める」とのこと。競争プログラミングのドメインでは высококачественный 訓練データの壁に近づきつつある。「将来、最も重要な研究テーマは**合成データ生成**と**データ効率的なアルゴリズムとアーキテクチャ**になるだろう」とLi氏。

### 6,500万ドルの赌け

 Nous ResearchはCrypto VCのParadigmから本-roundで$50M（累計$65M）を調達しており、 открытая AI開発への重大な投資を示している。同社はDeepHermes-3やHermes 4など、コンテンツ制限なしでChatGPTを超えるとするモデルを発表してきた実績がある。

---

## VentureBeatその他注目ニュース

###  初AIランサムウェア攻撃——実は人間が必要

TechCrunchが報じた通り、**「初AI実行型ランサムウェア攻撃」**と呼ばれた攻撃の詳細が明らかに。AIが技術的実行を行ったのは事実だが、受害者の選択、インフラの準備、盗んだ認証情報の手配は全て**人間が担当**していた。「完全な自律型サイバー犯罪デビュー」にはまだ早いことが示された。

### SK Hynix、AI需要で米国IPOへ

SK HynixはAI需要に応える形でmultibillion-dollarの米国IPOを計画（7月4日に実施されたと推定）。HBMメモリでNVIDIAに独占供給する同社が、AI boomのFinancial受益者として浮上している。

### Railway、$100Mを調達——AWS挑発

クラウドプラットフォームのRailwayは$100MのSeries Bを調達。2百万の開発者を獲得し、每月1,000万デプロイ、每周1兆リクエストを処理。Jake Cooper Founder（28歳）は「従来のクラウドプリミティブは遅く古く、AIが全てを加速する中で、チームは跟不上できない」と語っている。

---

## 開発者視点の分析

本周のニュースは**AI技術の「民主化」と「专业化」の两立在り**を鲜明に示している。

**民主化の侧**: Googleの検索ボックス刷新とClaude Coworkは、AI検索・AIエージェントを了一般消费者向けに开拓。Anthropicが社内の报告で认めている通り、Coworkの芽生えはClaude Codeへの开发者以外からのアイデア一闪でだった。AIエージェントは命令行を恐れない层に向けて扩大している。

**専門化の侧**: NousCoder-14Bは、検証可能な奖励という厳密な環境下でのみ训练された specialistモデル。オープンソースで公开されることで、どの企业でも特定-domainの专門AIを构建できる可能性が開けている。

**值得关注的トレンド**: 実務者としては、プロンプトインジェクション防御とエージェントの实际的な安全確保が、モデル性能と同じくらい重要になってきている。Anthropicの透明な警鐘は、業界全体にとって重要な 先例を確立している。

---

## 参考リンク

- [Google検索ボックス刷新 - VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [Claude Cowork - Anthropic公式](https://claude.com/blog/cowork-research-preview)
- [NousCoder-14B - Nous Research](https://nousresearch.com/nouscoder-14b-a-competitive-olympiad-programming-model/)
- [NousCoder-14B - Hugging Face](https://huggingface.co/NousResearch/NousCoder-14B)
- [Railway $100M調達 - TechCrunch](https://techcrunch.com/2026/01/22/railway-secures-100-million-to-challenge-aws-with-ai-native-cloud)
- [AI実行型ランサムウェア - TechCrunch](https://techcrunch.com/2026/07/06/the-first-ai-run-ransomware-attack-still-needed-a-human/)

---

*本文の情報は2026年7月7日時点のものです*
