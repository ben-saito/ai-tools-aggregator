# AI週間ニュース：DeepMindからAnthropicへ人才移動、Fable 5禁止、高速推異モデル競争

2026年6月第3週は、AI業界にとって大きな転機となった一週間だった。DeepMindのノーゴル受賞研究者であるJohn JumperがAnthropicに移籍を発表。米政府によるAnthropic Fable 5・Mythos 5の禁止措置。Cognitionによる新しいコーディング評価基準「FrontierCode」の発表。中国Xiaomiによる1000 tokens/sの高速推異モデル公開。これらのイベントが同時に発生し、AI業界のパラダイムシフトが加速していることを示している。

---

## DeepMindのJohn JumperがAnthropicに移籍

**John Jumper** — AlphaFold開発で知られるGoogle DeepMindの主任研究者で、2024年に、化学の分野に貢献しAIの科学応用を切り拓いたとして**<strong>ノーゴル化学賞</strong>受賞者** — が、DeepMindを離れて競合である**Anthropic**に移籍することが明らかになった。

Jumperだけではない。DeepMindからは複数の主任研究者がAnthropicを含む他社に流出しており、Google DeepMindからの**<strong>人才流出トレンド</strong>**が加速している。

この移動は、Anthropicが科学研究分野でのAI応用に対して非常に強い関心を持っていることと、無関係ではない。Jumperの持つ**<strong>タンパク質構造予測</strong>**の知見は、創薬や材料科学への応用においてAnthropicの能力を大きく強化する可能性が高い。

### 技術的影響

Jumperの移動先がAnthropicであることは、同社の**<strong>科学特化型AI</strong>**へのコミットメントを示している。AlphaFold级别的精度で生体分子の構造を予測できる能力は、創薬開発において革命的な価値を持つ。Anthropicが科学研究分野での竞争优势を確立하려는姿勢が見える。

---

## 米国政府、Anthropic Fable 5・Mythos 5禁止

米国政府は、Anthropicの最新モデル**<strong>Fable 5</strong>**と**<strong>Mythos 5</strong>**のリリースを停止させた。国家安全保障上の理由を挙げており、Amazonの研究者がFable 5のガードレールをバイパスする方法を開発したことが契機とされる。

### 禁止の経緯

- **Amazon研究者**がFable 5の安全性対策をバイパス
- 米政府在安全保障上の威胁と判断、モデルの公開停止を命令
- Anthropicは他のモデルにも同じ jailbreak が存在することを指摘

### セキュリティ業界の反応

**<strong>サイバーセキュリティ研究者</strong>**たちは、この措置に懸念を表明する公開状に署名した。「この禁止措置は危険だ」という立場から、政府の判断が**<strong>サイバーセキュリティ研究の発展を阻害</strong>**する可能性が指摘されている。

これは、AIモデル規制の**<strong>両刃剣</strong>**の性質を浮き彫りにしている。安全性への懸念は正当だが、同時に研究者コミュニティとの協力関係を損なうリスクもある。

### 技術的詳細：Mythos 5

Mythos 5は、Anthropicが開発した**<strong>サイバーセキュリティ特化モデル</strong>**。政府介入により公開が停止となったが、輸出規制の枠組みの中で、この种別のモデルがどのように扱われるかは、AI規制の**<strong>重要な判例</strong>**となる可能性がある。

---

## Xiaomi、1000 tokens/sの高速推異モデル MiMo を発表

中国の**<strong>Xiaomi</strong>**が、**<strong>MiMo-V2.5-Pro-UltraSpeed</strong>**という新しいLLMを発表。このモデルは**<strong>1000 tokens/秒</strong>**という驚異的な生成速度を達成している。

### 技術的アプローチ

Xiaomiが高速推異を実現したのは、以下の要素の**<strong>コードサイン設計</strong>**によるとされている：

- **FP4量子化**：4ビット浮動小数点形式的精度向下でメモリと計算量を削減
- **DFlash**：ブロックレベルのマスク並列予測を使った**<strong>投機的デコーディング手法</strong>**
- **TileRT**：Tile AI開発の推異最適化ソフトウェア

注目すべきは、これが**<strong>8-GPUの commodity node</strong>**（特殊ハードウェアではなく）で動作するという점。 Cerebrasのような специализированные рішенняではなく、一般的なハードウェアで高速推異を実現したことは、**<strong>推異最適化の民主化</strong>**を示す興味深い成果である。

### 速度がもたらす新しい可能性

"<strong>More is different</strong>" — 生成速度が速くなることで、これまでは考えられなかった**<strong>新しいユースケース</strong>**が開ける：

- リアルタイムでのソフトウェア自動リファクタリング
- 対話型デバッグ
- 流れるような音声対話

中国企業がこうして高速な推異能力を実現した背景には、**<strong>輸出規制</strong>**による高性能ハードウェアへのアクセスの制限がある可能性がある。ハードウェアの制約の中で**<strong>ソフトウェアの最適化</strong>**做到极限することは、他のAI開発者にも参考にする可能性がある。

---

## Cognition、新評価基準「FrontierCode」を発表

AIコーディングエージェント企業の**<strong>Cognition</strong>**（Devinの開発元）が、新しい**<strong>FrontierCode</strong>**という評価基準を発表した。

### 評価基準の構成

FrontierCodeは**<strong>150タスク</strong>**から構成され、3つの難易度レイヤーに分かれている：

| レイヤー | タスク数 | 特徴 |
|---------|---------|------|
| **Diamond** | 50 | 最も困難 |
| **Main** | 100 | Diamondを含む |
| **Extended** | 150 | 全タスク |

### 現在の評価結果

| モデル | Diamond | Main | Extended |
|-------|--------|------|----------|
| **Claude Opus 4.8** | 13.4% | 34.3% | 51.8% |
| GPT-5.5 | 6.3% | 25.5% | 44.8% |
| Claude Opus 4.7 | 5.2% | 23% | 43.2% |

**<strong>Claude Opus 4.8</strong>**が現時点で最难タスクで最高性能だが、13.4%という数字は**<strong>この評価基準の難しさ</strong>**を示している。

### 評価基準の特徴

- **20名のオープンソース開発者**が40時間以上かけて各タスクを作成
- コードの**<strong>マージ可能性</strong>**（正しさ、テスト品質、スコープ規律、スタイル、コードベース標準への準拠）を評価
- 敵対的テスト、キャリブレーション、マルチステージレビューによる**<strong>QCパイプライン</strong>**

**<strong>SWE-Bench</strong>**が2023年10月に登場して以来、約2年半で飽和状態になったことを考えると、FrontierCodeが**<strong>来年一杯は有効な評価基準</strong>**として機能する可能性は低いことが示唆される。

---

## SAP × Google Cloud、エージェント型コマースアーキテクチャ

**<strong>SAP</strong>**と**<strong>Google Cloud</strong>**が**<strong>Universal Commerce Protocol</strong>**を使った**<strong>エージェント型コマースアーキテクチャ</strong>**の展開を発表。

### アーキテクチャの핵심

- **SAP Commerce Cloud** + **Google Gemini**
- **BigQuery** ↔ **SAP Business Data Cloud** 間の**<strong>双方向ゼロコピーデータリンク</strong>**
- AIエージェントが消费者の意図を処理し、 commerceプラットフォームと直接やりとり

**<strong>Nano Banana 2</strong>**というGeminiファミリーの专用**<strong>エージェントスキル</strong>**が广告クリエイティブの動的生成を担当。**<strong>Rich Communication Services</strong>**を通じてインタラクティブな广告を展開する。

### 企業向けAIの實際

この展開は、2026年の**<strong>企業AI</strong>**の姿を象徴している：

- 単なるチャットボットではなく、**<strong>自律型エージェント</strong>**がバックエンドシステムと直接統合
- マーケティング、カスタマーサポート、在庫管理の**<strong>自動化</strong>**
- BigQueryに入れた**<strong>気象、位置情報、广告クリエイティブデータ</strong>**をリアルタイムで活用

**<strong>78%</strong>**の企業が2026年の顧客維持にAIが不可欠と考えていますが、データを顧客体験（37%）やCRM（39%）プラットフォーム間で共有できている企業は**<strong>2割未満</strong>**という现状打破を目指す。

---

## 参考リンク

- [Signal's Meredith Whittaker wants you to remember that AI chatbots 'are not your friends' - TechCrunch](https://techcrunch.com/2026/06/20/signals-meredith-whittaker-wants-you-to-remember-that-ai-chatbots-are-not-your-friends/)
- [Nobel laureate John Jumper is leaving DeepMind for rival Anthropic - TechCrunch](https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)
- [SAP and Google Cloud deploy agentic commerce architecture - AI News](https://www.artificialintelligence-news.com/news/sap-and-google-cloud-deploy-agentic-commerce-architecture/)
- [FrontierCode - Cognition](https://cognition.ai/blog/frontier-code)
- [MiMo-V2.5-Pro-UltraSpeed: Pushing 1T-Parameter Model Generation Speed to 1000 TPS - Xiaomi](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)
- [Sequent: Scale and Automation for Higher Confidence in Alignment](https://www.sequent.org/launch)
- [Import AI 461: "Alignment is not on track"; FrontierCode; and synthetic research interns](https://importai.substack.com/p/import-ai-461-alignment-is-not-on)

---

*（本文の情報は2026年6月21日時点のものです）*
