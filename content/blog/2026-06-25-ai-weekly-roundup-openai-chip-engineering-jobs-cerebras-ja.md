# AI週次レポート：OpenAI独自チップ「Jalapeño」発表、エンジニア転職はAI時代に最も回復力あり、Cerebras決算で株価急落

2026年6月第4週のAI業界は、OpenAIによる独自ASICチップ「Jalapeño」の発表を筆頭に、AIの雇用への影響、AIチップ企業の決算と、複数の重要なトピックが同時多発的に展開した。本稿ではこれらのニュースを整理し、開発者・技術者が注目すべきポイントを解説する。

---

## OpenAI、独自ASIC「Jalapeño」チップを発表 —— Broadcomとの垂直統合戦略

OpenAIは6月25日、Broadcomと共同開発した独自ASICチップ「Jalapeño」を正式に披露した。NVIDIAのGPUに依存しない、AI推論特化型の「Intelligent Processor」で、Appleが自社製SiliconでIntelから完全離脱したのと同じアプローチを、AIインフラ領域で再現する試みだ。

### 背景：年間140億ドルのインフラコストという現実

OpenAIの財務構造を考える上で、数字が語る事実は明確である。2025年のChatGPT運用コストは**84億ドル**に達し、現在週9000万人が利用する同プラットフォームの今年度のコストは**約140億ドル**に膨張する見込みだ。さらに、向こう8年間でOpenAIは**1.4兆ドル**の計算資源への投資を約束しており、同社の年間収益は250億ドルであることから、この投資規模の大きさがわかる。

NVIDIAは現在、高性能プロセッサで**約75%の利益率**を記録しているが、OpenAIの利益率は1ドルあたり約**33セント**程度に留まる。Third-party Hardwareへの多大な資本支出が、同社の収益性を圧迫していることは明白だ。

### アーキテクチャの特徴：推論特化、データ移動の最小化

Jalapeñoチップの中核的な設計思想は、**データ移動の最小化**にある。Richard Ho氏（OpenAIハードウェアプログラム責任者）は、このアーキテクチャについて「汎用アクセラレーターとは異なり、インタラクティブLLMサービングに固有のデータ移動ボトルネックを解決するために、演算、メモリ、ネットワークの各リソースを具体的にはバランスさせている」と説明する。

BroadcomのTomahawkネットワークチップがチップ設計に直接統合され、大規模クラスターデータセンター環境でのプロセッサ間通信を実現する。TSMCが台湾で製造を手掛け、Celesticaがボードおよびラックシステムの構築を担当する。

### フライホイール戦略：垂直統合からの収益化

OpenAIはソフトウェアレイヤーから**垂直統合型インフラ企業**へと変貌しようとしている。チップアーキテクチャ、ソフトウェアカーネル、メモリシステム、ネットワークスケジューリング、アプリケーションレイヤーというパイプライン全体を内製化することで、AppleがiPhoneで実現したのと同じ緻密な最適化が可能になる。

この統合により、トレーニングと推論の両方のコストが低下し、より手頃な推論コストがプロダクトの品質と応答性を向上させ、ユーザー数と収益の増加next-generationのカスタムインフラへの再投資という**オペレーションフライホイール**が回る仕組みだ。

早期のラボサンプルは、GPT-5.3-Codex-Sparkモデル（未リリース）をターゲット生産周波数と消費電力で動作させることに成功している。

---

## SignalFireデータで見る：AIはエンジニアの雇用を破壊していない

「AIがエンジニアの職を奪う」という2023年〜2024年の不安論とは裏腹に、SignalFireの新規採用データによると、**エンジニアはむしろAI時代において最も回復力の高い職種**であることが明らかになった。

### 事実：エンジニアは採用シェアを拡大

AIが話題になるたびに「レイオフ」というNarrativeが先行するが、実際のデータではエンジニアが採用全体に占めるシェアは**増加**続けている。SignalFireの分析によれば、ソフトウェアエンジニアのデータサイエンティスト、機械学習エンジニアの需要は底堅く、特に以下分野で採用が伸びている：

- **AI/MLアプリケーション開発**：LLMを自社製品に組み込む需要
- **MLOps/インフラ**：モデルサービング、量化、推論最適化
- **AIセキュリティ**：プロンプトインジェクション対策、モデル解釈性

### 開発者への影響

このトレンドは明確に示す。AIはコードを「書く」能力を民主化したが、その結果として**「AIを活用したソフトウェアを構築・維持する」エンジニア**の必要性はむしろ高まっている。基礎的コーディングの自動化はJunior Engineerのタスクを圧縮する一方、アーキテクチャ設計、システム統合、MLOps等の高位タスクの需要は拡大している。

「AIに職を奪われる」のではなく「AIを使いこなすエンジニアとの競争が始まる」という構図が、より正確だろう。

---

## Cerebras、決算発表後に株価急落 —— CEOは「利益率見通しの誤解」を釈明

AIチップ企業の決算も今週の重要なトピックだ。Cerebrasは6月24日、NASDAQでの初となる決算を発表し、**売上見通しの失望**から株価が急落した。

### 決算の主要内容

Cerebrasの最初の四半期決算では、**売上高、市場シェア共にアナリスト予想を下回った**。CEOは電話で「利益率見通りが誤解された」と説明したが、投資家の信頼回復には至らなかった。

### AI Chip企業間の競争激化

この株価急落は、OpenAIのJalapeño参入、NVIDIAの市場支配、AMDのMI300X拡大など、**AIチップ企業間の競争激化**を反映している。Cerebrasはwafer-scaleエンジニアリングという独自技術で差別化を図るが、大規模データセンター市場でのシェア獲得には苦戦している。

### 技術的特徴

Cerebrasの核心技術は**Wafer-Scale Engine（WSE）**——1枚の300mmウェハをそのまま1つのチップとして使用する設計だ。従来のGPUクラスタ相比、通信帯域とメモリ帯域の点で大きな優位性を持つが、製造複雑さとコストが課題となる。

---

## AIインフラの構造変化：なぜ垂直統合がトレンドになっているのか

本周の3つのニュース——OpenAI Jalapeño、SignalFire雇用データ、Cerebras決算——は、**AIインフラの構造変化**という1つのテーマで繋がっている。

| 変化の軸 | 従来 | 現在 |
|---------|------|------|
| チップ戦略 | NVIDIA GPUへの依存 | カスタムASIC（Google TPU、OpenAI Jalapeño、Meta MTIA） |
| 開発者需要 | 基礎コーディング能力 | MLOps、インフラ、架構設計 |
| 企業戦略 | ソフトウェアレイヤー | ソフトウェア×ハードウェア垂直統合 |

NVIDIAのCUDAエコシステムこそが護城河だと思われていたが、Google（TPU）、Meta（MTIA）、Microsoft、OpenAIと主要AIプレイヤーが次々とカスタムチップの開発に乗り出している。これはNVIDIAに対するLeverageであると同時に、**AIコンピュートのコスト構造を書き換える戦い**の始まりを示している。

---

## 参考リンク

- [The math behind the OpenAI Jalapeño chip](https://www.artificialintelligence-news.com/news/openai-jalapeno-chip-inference-economics/)
- [AI was supposed to kill engineering jobs, but new data suggests they're the most resilient](https://techcrunch.com/2026/06/24/ai-was-supposed-to-kill-engineering-jobs-but-new-data-suggests-theyre-the-most-resilient/)
- [Cerebras stock plunges after earnings as CEO says margin outlook was misunderstood](https://techcrunch.com/2026/06/24/cerebras-stock-plunges-after-earnings-as-ceo-says-margin-outlook-was-misunderstood/)
- [OpenAI Jalapeño Chip Official Announcement](https://openai.com/index/openai-launches-first-intelligence-processor)
- [SignalFire AI Hiring Report](https://signalfire.com)

---

*本記事の情報は2026年6月25日時点のものです。AI業界の急速な変化に伴い、状況が異なる場合があります。*