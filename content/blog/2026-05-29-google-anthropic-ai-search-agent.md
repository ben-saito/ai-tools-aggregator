# Google・Anthropicが描くAI検索の未来：検索ボックスの再設計とデスクトップAgentの衝撃

2026年5月、Googleは25年間ほぼ変更がなかった検索ボックスを全面的に再設計し、AI駆動のマルチモーダル検索体験への舵切りを鮮明にした。AI ModeとAI Overviewsの統合、Gemini 3.5 Flashによる高速推論、そして「情報を監視するAgent」の登場——検索のパラダイムがキーワードから会話へと移行しようとしている。同じくAnthropicは桌面Agent「Cowork」を発表し、開発者向けだったClaude Codeの技術を一般ユーザーにも開放した。本稿では本周回った主要ニュースの技術的内容を解説する。

---

## Google検索ボックス刷新：25年ぶりの大規模改良

Googleは2026年5月、I/O開発者Conferenceにおいて検索ボックスそのものを大規模に再設計したと発表した。Liz Reid Google Search VPは「our iconic search box since its debut over 25 years ago」と語るほどの本当に大規模な刷新だ。

### マルチモーダル入力とAI驅動クエリ提案

新しい検索ボックスはテキストだけでなく、画像・PDF・動画・Chromeタブのコンテンツを受け入れる。従来の狭い矩形ではなく、動的に拡大する設計になり、長い会話的なクエリも自然に入力できる。AI検索支援機能も刷新され、単なるオートコンプリートではなく、複雑なクエリの構成を指南する「クエリコーチング」機能が導入された。

AI ModeとAI Overviewsの歴史的な統合も重要だ。これまで別のインターフェースだったこれらを単一のシームレスなフローに統合。ユーザーは最初のクエリでAI Overviewを受け取り、そのまま続けてAI Modeの会話に進展できる。

### Gemini 3.5 Flash——高速推論で大規模検索を実現

新しい検索体験の土台にはGemini 3.5 Flashが走る。Google CEOのSundar Pichaiによると、このモデルは「top right quadrant of the Artificial Analysis index」即ち知能と速度の両面でフロントティアに位置し、前モデルのGemini 3.1 Proよりもほぼ全てのベンチマークで優れ、出力トークン每秒で比較可能モデル比4倍高速という。

検索規模での実装においてこの速度は死活的に重要だ。遅いAI検索体験はユーザーを離す。キーワード検索と同じレスポンシブさを保ちながら会話AIの能力を提供する——家がこのアーキテクチャの设计的狙いだ。

### リアルタイム生成UIと「情報Agent」

Googleが「generative UI」と呼ぶ新機能は、検索がリアルタイムにカスタムウィジェットやインタラクティブな可視化を動的生成するもの。例えば「ブラックホールが時空にどう影響するか」と問えば、瞬時にインタラクティブな視覚的な説明が生成される。これはGoogle DeepMindチームとの協力で開発されたリアルタイムコード生成システムの上で走る。

さらに注目すべきは「情報Agent」の導入だ。ユーザーは特定条件を設定し、Webを24時間体制で監視するAgentを作成できる。市場の変動を追跡したり、アパートを探したり、スニーカー販売情報を監視したり——単に答えを待つのではなく、AIが能動的に情報を収集しにいく。

この転換はSEOと出版社のあり方も根本から変える。キーワード密度戦略は自然言語意図の解析に置き換えられ、深く権威ある回答を生成するAIが直接ユーザーに提供从前、クリエイターへのトラフィック依存モデルは更なる試練に直面する。

---

## Anthropic Cowork：桌面Agentの民主化

AnthropicはmacOS向けデスクトップアプリケーションに「Cowork」を導入した。Claude Max 加入者向けの研究プレビューとして提供されるこの機能は、Claude Codeの技術的基盤を開発者以外に向けた製品だ。

### フォルダベースのAgentアーキテクチャ

Coworkの中核はシンプルだ。ユーザーはローカルマシンの特定フォルダへのアクセスをClaudeに許可し、その中でAI Agentがファイルを読み書き・作成・編集できる。散らかったダウンロードフォルダの整理、レシートスクリーンショットから経費報告書の生成、複数のメモからの下草案の作成——这些都是従来のチャットインターフェースでは難しかったタスクだ。

このアーキテクチャは「Agentic Loop」に基づく。AIは単にテキスト回答を生成するのではなく、計画を立案し、連続するステップを並列実行し、自分の作業をチェックし、困難な場面では澄清を求める。ユーザーは複数のタスクをキューに積んで並列処理でき、Anthropicは「back-and-forthよりもcoworkerにメッセージを残すような感じ」と表現する。

### 10日半で開発——AIがAIを作る意味

特に注目すべきは開発速度だ。AnthropicのFelix Rieseberg氏の確認によると、チームは約10日半でCoworkを構築した。さらに現場からは「Claude CodeがClaude Cowork本身多くを書いた」という言葉上がっており、再帰的改善ループの存在が示唆されている。AIツールが自分の改良のために使われるという事例は、产业の将来の開發方法を予見させる。

### リスクへの透明度

注目に値するのはAnthropicの透明性への取向だ。同社は積極的にCoworkの潜在的危険について広範囲に警告している。Claudeは指示すればローカルファイルを削除する可能性があり、プロンプトインジェクション攻撃のリスクも認めている。「我々はプロンプトインジェクションに対して洗練された防御を構築したが、Agent安全——即ちClaudeの現実世界での行動を保護するタスク——は産業全体でまだ開発中の領域である」と表述している。

この開放的なリスク評価は、新しいAgent技術がユーザーに信頼されるためには不可欠な姿勢だ。

---

## Anthropic $650億估值でIPO前最後の資金調達

TechCrunch》报道 따르면、Anthropicは$650億のシリーズHラウンドを完了し、$9650億のポストレスド評価手に到達した。これはAIスタートアップ歴史上最大規模の仕組み込みの一つであり、IPO前の最後の私募募資トレースと目されている。

この大型調達はClaudeシリーズの商用成功を反映している。Claude Codeの開発者コミュニティでの流行、Claude Maxの加入者基盤の拡張、そして企業向けのClaude向け製品群の拡張——すべてがAnthropicの収益基盤を強化してきた。

---

## NousCoder-14B：オープンソースの競争プログラミングモデル

Nous Researchは14Bパラメータの競争プログラミングモデル「NousCoder-14B」を公開した。AlibabaのQwen3-14Bをベースにしたこのモデルは、48個のNVIDIA B200 GPUで4日間訓練された結果、LiveCodeBench v6で67.87%の精度を達成——ベースモデルから7.08ポイントの改善だ。

このリリースの更重要的是「radical openness」という志向だ。Nous Researchはモデルウェイトだけでなく、完全な強化学習環境、ベンチマークスイート、訓練ハーネス——Atroposフレームワーク一式——を全てオープンソースとして公開した。

しかし、データ制約の課題も明らかになった。24,000の競争プログラミング問題という訓練データは、「すべての手に入る検証可能競争プログラミング問題の大部分」を涵盖している。Li Hongyi氏（Nous Research研究者）が書簡で述べたように「競争プログラミングドメイン内では、高品質データの限界に近づいている可能性がある」。この制約打開への道として「自己生成問題と自己プレイ」が将来の方向として挙げられた。

---

## 開発者にとっての意味

本周回ったニュースはAI分野における3つの重要トレンドを浮かび上がらせる。

**第一に、検索とAIの境界の溶消**。Googleの検索ボックス刷新は、情報を探す行動そのものがAI駆動になる未来を示している。開発者はこの変化がアプリケーションの検索機能や情報取得パターンに怎样的影響を及ぼすかを考慮する必要がある。

**第二に、Agent技術の民主化**。AnthropicのCoworkは、「AIがファイルを操作する」という概念を一般ユーザーに近づけた。デスクトップAgentのUI/UXパターンは、今後の消費者向AIアプリケーションの設計に影響するだろう。

**第三に、オープンソースとProprietaryの競争激化**。Nous Researchのようなプレイヤーがオープンソースで商用企業に挑む姿勢は、モデル選択においてエコシステムの多様性重要性を示唆している。

AIの進化のスピードは、どちらを選択するにせよ、開発コミュニティにとって新しいツールとパラダイムに追いつくための継続的な学習が必要であることを示している。

---

## 参考リンク

- [Google I/O 2026 Search Redesign](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [Anthropic Cowork](https://claude.com/blog/cowork-research-preview)
- [Anthropic raises $65 billion](https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/)
- [NousCoder-14B](https://venturebeat.com/technology/nous-researchs-nouscoder-14b-is-an-open-source-coding-model-landing-right-in)
- [Railway $100M Challenge to AWS](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)

---

*（本文の情報は2026年5月29日時点のものです）*