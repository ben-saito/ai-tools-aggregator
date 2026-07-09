# AI開発最新ニュース（2026年7月10日）—— Meta独自チップ量産開始、Ollamaが$65M調達、Nvidiaのジレンマ

2026年7月はAIインフラ整備が加速する週となった。Metaが独自AIチップの量産を9月に開始すると発表し、オープンソースLLM実行ツールのOllamaが$65MのシリーズBを調達。またNvidiaについては、 compute市場の支配者でありながら自らの作った市場に翻弄される構図が浮き彫りになった。本稿ではこれらの最新動向を技術的観点から整理する。

---

## Meta、独自AIチップ「MTIA」の量産を9月に開始——Broadcomと協業

Metaは7月9日、**Meta Training and Inference Accelerator（MTIA）**プログラムの下で開発した最新世代AIチップの量産を2026年9月に開始するとReutersが伝えた。GPU不足の中、NvidiaやAMDへの依存軽減を目指すものだ。

### 技術的詳細

- **設計**: Broadcomと協業し、芯片デザインはMetaが担当
- **製造**: 台湾TSMCが担当
- **メモリ**: SamsungからRAMを調達
- **ストレージ**: Sandiskから調達
- **光ファイバ**: Sumitomo Electricから調達

Metaは2026年4月時点で、2026年の年間資本支出を**1250億〜1450億米ドル**と発表しており、その多くがAIインフラに向かっている。Reutersの内部メモによれば、Metaは2026年に**7ギガワット**の計算力を展開予定であり、2027年にはこれを倍増させる計画だ。

### モジュール式アーキテクチャ

MetaはMTIAチップに**モジュール式Chiplet設計**を採用している。これはAIの急速な進化に対応するためで、チップの必要に応じて世代ごとに最新のAIワークロードの知見とハードウェアテクノロジーを取り込む設計思想だ。

> 「各MTIA世代はモジュラーChipletを使用し、最新のAIワークロードの知見とハードウェアテクノロジーを組み込み、より短いサイクルで展開する」——Meta公式声明

### 業界動向との関連

MetaはNVIDIAへの依存軽減を目指す企業の一つにすぎない。OpenAIも先月、**Broadcomと協業した推論プロセッサ**の開発を発表しており、AmazonやGoogleも自社製AIチップを抱えている。AnthropicもSamsungとの独自チップ開発を検討していると伝えられる。

---

## Ollama、$65MシリーズBを調達——利用者900万突破、GitHub星176,000

オープンソースLLM実行ツールの**Ollama**が、Theory Venturesが主導するシリーズBで**6500万米ドル**を調達したとTechCrunchが伝えた。既にBenchmarkのPeter Fentonが主導した1500万米ドルのシリーズA済みで、累計調達額は8800万米ドルとなった。

### 開発者にとって的意义

Ollamaは2023年に登場し、PC上でオープンウェイトAIモデルを数分で起動できるツールとして注目された。創業者のJeff Morgan氏（前Docker Desktop開発者）とMichael Chiang氏は、Dockerがクラウドアプリのハードウェア構成問題を抽象化したように、**AIモデル実行を抽象化**した。

### 現在の規模

- **月間アクティブ開発者**: 890万人
- **GitHubスター数**: 176,000
- **フォーク数**: 17,000
- **Fortune 500導入率**: 85%
- **従業員数**: わずか14名

Ollamaはローカルモデルの実行に加え、自社のNeoCloud上で大規模モデルのホスティングも提供しており、Freeから$100/月までの段階的なサブスクリプション体系を構築している。GPU時間ベースの課線で、トークン制限ではないのも特徴的だ。

> 「2023年にオープンモデルが登場しましたが、それらは本当に使いにくいものでした。研究者を対象としていたため、プログラマーには難しかった」——Jeff Morgan（Ollama CEO）

---

## Nvidia、「自らの作ったcompute市場の犠牲者」に——GPU不足緩和、DRAM価格急騰

TechCrunchのRussell Brandom記者は7月9日、Nvidiaが**自らの作ったcompute市場の犠牲者**となっている状況を分析了。

### 現在の市場状況

Nvidiaの株価は2026年5月のピークから**15%下落**しており、予想収益に基づくPERはS&P平均を下回っている。一方で、同じ期間にMicron（世界最大のDRAMメーカー）の株価は**約3倍**に急騰した。

| 指標 | トレンド |
|------|----------|
| Nvidia H100 GPU 時間あたりコスト | 2026年5月のピーク（$3.20/時）から下落中 |
| DRAM スポット価格 | 2025年夏から急騰（10倍増） |

### 根本原因

GPU不足は若干緩和したものの、データセンターは-memory需要が供給增长速度跟不上。Micronなどのメモリ企業は20年間少しずつ改善してきた高帯域幅メモリチップが、AI数据中心で突然非常に価値が高まった形だ。

NvidiaのSOC（System-on-Chip）は人類が作った最も複雑なデバイス，但仍随着GPU需要在変化している。需要增长速度放缓意味着Nvidiaの収益も影響を受ける構図になっている。

---

## Anthropic、Claudeに新機能「Reflect」——AI利用可視化でユーザーは本当に使いたいか？

Anthropicは7月9日、Claudeに新機能**「Reflect」**を導入した。、AI利用状況を可視化するダッシュボードで、表面上は生産性分析ツールだが、その真の狙いは別の場所にあるとTechCrunchは指摘する。

### 機能の詳細

Reflectは以下を提供する：

- **利用パターンの可視化**: ユーザーがClaudeで何を議論しているか分類・表示
- **AI依存度の認識**: どの程度の日常業務がClaudeに依存しているかの把握
- **注意喚起**: 「Claude更快にできますが、それでも自分でやりたいことはありますか？」といった問いかけ
- **休憩ツール**: 静かな時間の設定やAIから離れる注意喚起のスケジュール

### 批判的視点

この機能は、Gmail Meter（2012年）のように、アプリの中心性を数字とグラフで見せることでユーザーの Google'serviceへの依存を加深させる戦略に似ているとの指摘がある。

---

## AI IPOの嵐——Anthropic、OpenAI、SpaceXが過去25年のVC.exitを上回る価値

TechCrunchの分析によれば、**Anthropic、OpenAI、SpaceXの3つのAI IPO**が、2000年以降の全米VC支援exitの合計価値を上回ると予測されている。AI産業の規模と急成長を象徴する数字だ。

---

## 参考リンク

- [Meta's new AI chips will begin production in September](https://techcrunch.com/2026/07/09/metas-new-ai-chips-will-begin-production-in-september/)（TechCrunch）
- [Popular open source AI developer tool Ollama raises $65M, grows to nearly 9M users](https://techcrunch.com/2026/07/09/popular-open-source-ai-developer-tool-ollama-raises-65m-grows-to-nearly-9m-users/)（TechCrunch）
- [Nvidia is a victim of the compute marketplace it created](https://techcrunch.com/2026/07/09/nvidia-is-a-victim-of-the-compute-marketplace-it-created/)（TechCrunch）
- [Anthropic's new Claude feature is quietly selling you on AI](https://techcrunch.com/2026/07/09/anthropics-new-claude-feature-is-quietly-selling-you-on-ai/)（TechCrunch）
- [Anthropic, OpenAI, and SpaceX are bigger than the last 25 years of tech exits](https://techcrunch.com/2026/07/09/anthropic-openai-and-spacex-are-bigger-than-the-last-25-years-of-tech-exits/)（TechCrunch）

---

*本文の情報は2026年7月10日時点のものです。*
