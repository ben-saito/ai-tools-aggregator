# AI開発ニュース weekly：Google I/O 2026で検索革命、NousCoder-14B、Mistral大型調達

2026年6月第2週は、AI業界にとって静かな週ではなかった。Googleが25年ぶりに検索ボックスの大改革を発表し、Anthropicがファイル操作可能なClaude Desktopエージェント「Cowork」を緊急リリース、Nous Researchが4日で訓練したオープンソースcodingモデル「NousCoder-14B」を公開——今週の動きを整理する。

---

## Google I/O 2026：検索ボックス刷新でSearchの大変革へ

Googleは6月10日（米国時間）、年次開発者会議I/O 2026において、**25年ぶりとなる検索ボックスの全面刷新**を発表した。変更の本質は単なるUI刷新にとどまらない——テキスト入力中心のキーワード検索から、**マルチモーダルAI会話型検索**へのパラダイムシフトだ。

### 何が変わったか

**新しい検索ボックス**は以下を満たすよう設計されている：

- **動的に.expandする入力フィールド**：長文・複雑なクエリを入力可能に
- **マルチモーダル入力対応**：テキスト、画像、PDF、ビデオ、Chromeタブのドラッグ＆ドロップに対応
- **AIクエリサジェスション機能**：「次の単語予測」ではなく「複雑なクエリの構成」を支援
- **即座ロールアウト**：AI Mode提供済みの全言語・国で順次公開

### AI Overviews + AI Mode = 新検索体験

より重要なのはバックエンドのアーキテクチャ変更だ。Googleは**AI Overviews**（AI生成サマリーパネル）と**AI Mode**（会話型検索）を統一的な体験に統合する。ユーザーは検索ボックスで質問を入力すると、AI Overviewと従来の結果が同時に表示され、続けてAI Modeの会話を開始できる——別のインターフェースに移動する必要がない。

Liz Reid（Google Search担当VP）は「Power userの一部だけがAI Modeを活用していた。ほとんどのユーザーは『従来のページがいいか、AI_forwardな体験がいいか』を考えたくないはずだ」と語り、この統合の狙いを説明した。

### Gemini 3.5 Flashが検索の速度問題を解決

新しい検索体験の基盤には、I/Oで発表されたばかりの**Gemini 3.5 Flash**が置かれる。Googleによれば、Gemini 3.5 Flashは従来のフロントラインモデルGemini 3.1 Proを超えるベンチマーク性能を持ちながら、**出力tokens/秒で4倍高速**という。Sundar Pichai CEOは「[Artificial Analysis指数](https://artificialanalysis.ai/)の右上領域（知性・速度の両方でトップクラス）に位置する」と表現した。

### 生成UIと情報エージェントが検索の未来を描く

Googleが「生成UI」と呼ぶ新機能は、検索がリアルタイムに**カスタムウィジェットやインタラクティブなビジュアル、その場限りのミニアプリ**を動的生成する機能だ。例えば「ブラックホールが時空にどう影響するか」と質問すると、インタラクティブな視覚効果がAI Overviewに表示される。これはGemini 3.5 Flashの上で動く「リアルタイムコード生成システム」によって実現される。

さらに「**情報エージェント**」機能は、ユーザーが指定した条件をWeb上で24時間監視し、条件に合致した時に合成された更新通知を届ける。金融データのモニタリング、アパート探し、スニーカーDrop監視など——「夏のうちにGoogle AI Pro / Ultraユーザーに提供予定」（Google）。

### publishersと広告主への影響

この刷新は、検索エコシステム全体に疑問を投げかける。キーワード中心のSEOが成立していた世界では、詳細な自然言語クエリを解析するAIが答える世界にどう対応するか。AI OverviewsがすでにWeb出典からのトラフィック減少懸念を招いているが、シームレスなAI Mode統合はその傾向を深める可能性がある。

Googleは「AI機能がトラフィックを増化している」と主張するが、これは長期的に検証が必要である。

---

## Anthropic Cowork：フォルダ内でClaudeが動く桌面エージェント

Anthropicは6月8日、**Claude Desktop agent「Cowork」**をリリースした。開発者向けツールだったClaude Codeの技術を、非技術ユーザー向けに再パッケージしたこの製品は、macOS Claude App内のみで動作する研究プレビュー版として提供されている。

### 「10日で構築された」製品

Felix Rieseberg（Anthropic）はDan ShipperのLivestreamで、**Coworkチームが約1週間半（10日程度）でこの機能を構築した**ことを明かした。さらに注目すべきは、その構築作業の大部分を**Claude Code自体が担った可能性**が高いことだ。Simon Smith（Klick Health EVP）は「Claude Code wrote all of Claude Cowork」と投稿し、これは業界における「AIがAIを構築する」再帰的ループの可視化された事例として話題になった。

### フォルダベースのアーキテクチャ

Coworkは、ユーザーが指定した**ローカルフォルダ内**でClaude agentが動作するアーキテクチャを採用する。Agentは以下を実行できる：

- ファイルの読み込み / 書き込み / ファイル作成
- フォルダの再構成とIntelligent Renaming
- レシート画像群からの経費スプレッドシート生成
- 複数のメモから下書きレポート生成

この「agentic loop」——計画立案→並列実行→自己検証→不明点はユーザーへの確認——は、Claude Codeと同じ**Claude Agent SDK**上に構築されている。

### リスクへの透明な警告

Anthropicは珍しいほど坦率に製品リスクについて警告している：

- **ファイル削除の可能性**：「非常に明確なガイダンス」を提供しない限り、Claudeがファイルを削除するリスクがある
- **プロンプトインジェクション攻撃**：悪意のあるコンテンツに埋め込まれた指示で、安全規定をバイパスされる可能性
- 「これらのリスクはCoworkで新規のものではないが、より高度なツールを初めて使う方は注意が必要」

社内で「shadow usage（期待されない使用方法）」が発見されたことも投入の動機になった。Boris Cherny（Anthropic）は「vacation research、スライドデッキ作成、メール整理、サブスク解除、結婚写真をハードディスクから復元、植物成長監視、オーブンの制御」など、ユーザーがClaude Codeを「開発以外」で使っていた事例を列举し、「Cowork」を構築するに至った経緯を説明した。

---

## NousCoder-14B：4日・48個のB200で訓練されたオープンソースcodingモデル

Nous Researchは6月9日、**NousCoder-14B**をHugging Faceで公開した。14Bパラメータのこのモデルは、**LiveCodeBench v6で67.87%精度**を達成し、訓練元のQwen3-14Bから7.08ポイントの改善を見せている。

### 訓練の詳細

- **訓練時間**：4日間
- **使用GPU**：Nvidia DGX B200 x 48台
- **訓練問題数**：24,000問（各数百のテストケース）
- **Reward方式**：binary（正答/不正答）の「検証可能報酬」
- **アルゴリズム**：DAPO（Dynamic Sampling Policy Optimization）
- **コンテキスト**：32K→40K→80Kトークン（訓練時→評価時最高）

研究者Joe Liのtechnical reportには興味深い対比が记载されている：Codeforcesの1600-1750レベルから2100-2200レベルへの上昇は、彼自身の場合は14〜16歳の2年間かかっている。NousCoder-14Bは同じ進捗を**96時間**で達成した。ただし人間は1,000問、モデルは約24,000問必要がある——サンプル効率では 여전히人間優位だ。

### データ制約という先の課題

NousCoder-14Bの訓練に使われた24,000問は、「Internet上の readily availableな検証可能competitive programming問題の大部分」をカバーしている。Liは「competitive programmingドメイン内では、高品質データの限界に近づいている可能性がある」と指摘し、**合成データ生成とデータ効率的アルゴリズム**が今後の重要研究分野になると結論づけた。

### オープンソースの完整性

このリリースの特徴はモデル重量のみならずである。Nous Researchは以下の全套品を公開した：

- 完全なモデル重量（Hugging Face、Apache 2.0）
- 訓練環境とベンチマークスイート（Atroposフレームワーク）
- 再現可能なOlympiadレベル推論研究のためのインフラ

$65M調達（Paradigm主導）を果たし、Hermes 4、DeepHermes-3と着実にモデルを出し続けている同社の姿勢は、オープンソースAI陣営における重要な存在感を維持している。

---

## その他の注目トピック

### Mistral、3B euro調達で20B euro評価額

TechCrunchが入手した情報によると、**Mistral**は3B euro（約3.5Bドル）の資金調達を検討しており、20B euro（約23.15Bドル）の企業評価額が示唆されている。これはSeries C評価額11.7B euroのほぼ倍であり、欧州のAI企業として群を抜く評価だ。調達の使途や時期は未定。

### Anthropic、安全警告の逆効果で米政府が止めたAI

Anthropicは最近、ある商用モデルの安全性評価について政府と対立している。「狭い jailbreak 可能性が見つかったという理由で、何億もの人々に展開されている商用モデルを回収すべき」というのが政府側の見解だ。Anthropicは「狭いjailbreak の可能性発見を理由に商業モデルを振り返るのは筋が通らない」と公式ブログに反論した。件のモデル名は明かされていない。

### Meta AI Unit、6,500人のエンジニアが「地獄」と訴える

MetaのAI部門に関する報道が気になる内容だ。6,500人が所属するこの部門は「地獄のようなICU」のように動作しており、エンジニアたちの不満が頂点に達している可能性が指摘されている。

---

## 参考リンク

- [Google Search I/O 2026](https://blog.google/products-and-platforms/products/search/search-io-2026/)
- [Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
- [Anthropic Cowork](https://claude.com/blog/cowork-research-preview)
- [NousCoder-14B - Hugging Face](https://huggingface.co/NousResearch/NousCoder-14B)
- [Nous Research Technical Report](https://nousresearch.com/nouscoder-14b-a-competitive-olympiad-programming-model/)
- [VentureBeat - Google Search Redesign](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [VentureBeat - Anthropic Cowork](https://venturebeat.com/technology/anthropic-launches-cowork-a-claude-desktop-agent-that-works-in-your-files-no)
- [VentureBeat - NousCoder-14B](https://venturebeat.com/technology/nous-researchs-nouscoder-14b-is-an-open-source-coding-model-landing-right-in)
- [TechCrunch - Mistral Funding](https://techcrunch.com/2026/06/12/mistral-is-rumored-to-be-raising-e3b-at-e20-valuation/)

---

*（本文の情報は2026年6月13日時点のものです）*
