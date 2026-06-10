# Cohere、Apple、Microsoft――AI開発者を取り巻く3つの大きな動き

2026年6月上旬、AI開発者にとって興味深いニュースが次々と舞い込んでいる。オンプレミスで動作するオープンソースのコーディングエージェント、デバイス上で20Bパラメータを動かすAppleの新しいアーキテクチャ、そしてOpenAIとの契約から「解放」されたMicrosoftの独自AIへの舵切り。今日はこれらのニュースを整理し、開発者視点で見た意味を考えてみたい。

---

## Cohereが30Bパラメータのコーディングエージェントをオープンソース化――1枚のH100で動作

Cohereは6月9日、**North Mini Code**という30Bパラメータの混合物-of-experts（MoE）モデルを公開した。Apache 2.0ライセンスでHugging Faceから入手可能。注目すべきは、推論時にアクティブなのは30Bのうち約3Bのパラメータのみで、1枚のNVIDIA H100で動作する点だ。

CohereはNorth Mini Codeを「agentic software engineering」に特化して訓練した。汎用コードモデルから転用したものではなく、**sub-agent orchestration**、**architecture mapping**、**code review**、**terminal work**向けに設計されている。256,000トークンのコンテキストウィンドウをサポートし、大規模なコードベースを単一パスで処理できる。

訓練データは2段階の教師あり微調整の後、強化学習で70,000以上の検証可能タスクを通じて構築された。SWE-Benchで重複排除された約5,000のリポジトリを使用。3つの異なるエージェントスキャフールド（SWE-Agent、Mini-SWE-Agent、OpenCode）で訓練し、OpenCode評価で10ポイントの向上を実現的同时にSWE-Agentのパフォーマンスも維持している。

### 出力速度と冗長性のトレードオフ

Terminal-Bench v2でテストされ、実際のターミナル環境で評価されたことも特徴的だ。Artificial Analysisの独立評価では、127のオープンモデル中**出力速度第8位**（210トークン/秒）、インテリジェンス indexでは**第18位**という結果。ただし、75百万トークンを生成してインデックスを完了しており（中央値25百万トークン）、高ボリュームのプロダクション環境では**冗長性のコストが累積する**というトレードオフがある。

CohereのNick Frosst共同創業者はMac StudioでMLXを通じて動作するデモを行い、「突然、人々は『モデルからのトークンで十分な経済的価値を得ているのか』と考えるようになっている。ローカルデプロイは、人々をエンパワーし、AIを本当に人々にとって役立つものにする方法だ」と語っている。

---

## AppleがSiriを「エンタープライズアプリレイヤー」へと進化させる

AppleはWWDC26で、Siriを単なる音声アシスタントから**システム全体のAIインターフェース**へと转变させた。Enterprise developersにとって、これは単なる消費者向け機能強化ではない。Appleのプラットフォームでアプリを展開する企業にとって、Siriを通じたコンテンツ発見、アクション実行、ワークフロー管理の新しい方法が開示された。

### App Entities/App Intents/View Annotations

開発者は**App Entities**を通じてアプリコンテンツを露出させ、AppleのSpotlightセマンティックインデックスに追加できる。**App Intents**と**App Schemas**で自然言語によるアクション定義が可能になり、**View Annotations API**で画面上のUI要素をアプリオブジェクトにマッピングできる。

たとえば、「この顧客スレッドを要約する」「この請求書を経費に追加する」「このタスクに明日フォローアップする」といったコマンドを、Siriが理解しApps間で横断的に実行できる。従来の音声アシスタント統合が狭いコマンド構造と明示的な起動フレーズを求めていたのに対し、Appleは開発者にデータとcapabilitiesの描述方法を提供し、Siri・Spotlight・Shortcutsがそれをシステムが利用できるようにしている。

### テスト基盤とモデル選択肢の拡張

Appleは**AppIntentsTesting**フレームワークも導入した。Siri、Shortcuts、Spotlightが使用するのと同じインフラを通じてApp Intentsを検証でき、UI自動化なしでテストパイプラインに組み込める。

さらに**Foundation Models framework**が更新され、Swift開発者はAppleのオンデバイスモデル、AppleのPrivate Cloud Compute、サードパーティモデルプロバイダーにアクセスできる。**Core AI**も導入され、開発者独自のモデルをApple silicon上で実行できる。

---

## Appleの新しいオンデバイスAIアーキテクチャ：DRAMの制約をFlashで回避

Apple third generationの基礎モデル（AFM 3）は、20BパラメータのモデルをDRAMではなく**NANDフラッシュに保存**するという新しいアプローチを採用した。DRAM容量の制約によりオンデバイスAIモデルが小さく留まっていた問題を、フラッシュメモリの活用によって打破しようとしている。

### 動作の仕組み

標準的なMoEモデルでは、NANDからDRAMへの帯域幅がトークンごとの重み交換に追いつけない。AFM 3 Core Advancedは**クエリごとに1回だけルーティングを決定**し、選択したエキスパートセットをDRAMにロード、以後同じ設定から全トークンを生成する。Activeパラメータ数はタスク複雑度に応じて1B〜4Bに調整される。

Appleの研究チームは「ETH NANDをDRAMとして使用する」と説明している。Anthropicの研究者で元Apple研究科学者のAwni HannunはXに投稿し、「20BパラメータをRAMに入れることはできない。今日の標準ではかなり珍しいアーキテクチャを使っている。小さなモデルがクエリからどのエキスパートをNANDからRAMにロードするかを予測する」と指摘した。

### 開発者にとっての課題

ただし、Energy、メモリ帯域幅、熱に関する指標がまだ公開されていない。Appleは夏頃に完全な技術レポートとベンチマークを公開するとしている。コンプライアンス要件で推論の実行場所を文書化する必要がある企業にとっては、現時点で明確な回答がないのが問題だ。

---

## Microsoft、AI chiefがOpenAIとの契約からの「解放」を表明

Microsoft AIのCEO Mustafa Suleymanは、Microsoft Build 2026のインタビューで約6ヶ月前にOpenAIとの契約が改正され、Microsoftが独自の**超知能（superintelligence）**を追求する正式な権限を取得したと明かした。

### MAIモデルのfamily

この策略変更と同じ日に、Microsoftは**MAIファミリー**として7つの新規AIモデルを発表した。これはMicrosoftのAI Superintelligence Teamが内製開発したもので、OpenAIモデルの蒸留やライセンスされていないデータに依存しない「ゼロからの訓練」を強調している。

注目すべきは以下のモデルたちだ：

- **MAI-Thinking-1**：35Bアクティブパラメータの推論モデル。ソフトウェアエンジニアリングベンチマークで同クラスLeadingモデルと遜色ない性能
- **MAI-Code-1-Flash**：GitHub CopilotとVS Code向けに構築された軽量コーディングモデル
- **MAI-Image-2.5**：テキストから画像生成と画像編集をサポート
- **MAI-Transcribe-1.5**：43言語対応のtranscriptionモデル
- **MAI-Voice-2**：多言語音声生成システム

これらはすべてMicrosoft Foundryを通じて提供され、初めてOpenRouter、Fireworks、Basetenなどのサードパーティプラットフォームを通じて開発者がモデルの重みを微調整できる。

### 契約改正の背景

Microsoftが2019年にOpenAIに投資した際、契約には特定の取り決めの下的制約があった。OpenAIがフロンティアモデルを構築し、MicrosoftがそのExclusiveクラウドプロバイダーとなるというarrangementだったが、Microsoftは独自のAGI研究を追求することが明示的に禁止され、一定Computing閾値（FLOPSで測定）を超えるシステムの構築も制限されていた。

Novemberに修正された合意ではこれらの制限が解除され、SuleymanがMAI Superintelligence Teamを立ち上げて「humanist superintelligence追求のためのbest-of-both環境」が実現した。「2030年以降も見たとき、third-partyからモデルを購入するだけでなく、世界で最も優れたモデルを構築する能力を持つことを確実にするのが私たちの仕事だ」とSuleymanは語っている。

---

## 参考リンク

- [Cohere open-sources a coding agent that runs on a single H100 - VentureBeat](https://venturebeat.com/ai/cohere-open-sources-a-coding-agent-that-runs-on-a-single-h100/)
- [Apple's new Siri AI is more than just a smarter assistant - it's a new enterprise app layer - VentureBeat](https://venturebeat.com/ai/apples-new-siri-ai-is-more-than-just-a-smarter-assistant-its-a-new-enterprise-app-layer/)
- [On-device AI agents hit a hard memory limit. Apple's new architecture routes around it. - VentureBeat](https://venturebeat.com/ai/on-device-ai-agents-hit-a-hard-memory-limit-apples-new-architecture-routes-around-it/)
- [Microsoft AI chief says company was "set free" from OpenAI to pursue superintelligence - VentureBeat](https://venturebeat.com/ai/microsoft-ai-chief-says-company-was-set-free-from-openai-to-pursue-superintelligence/)
- [North Mini Code on Hugging Face](https://huggingface.co/cohere)
- [Apple Machine Learning Research - AFM 3](https://machinelearning.apple.com/)

---

*（本文の情報は2026年6月10日時点のものです。）*
