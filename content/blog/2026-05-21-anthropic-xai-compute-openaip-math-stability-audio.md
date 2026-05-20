# AnthropicがxAIに月間12.5億ドルを支払ってcomputeを確保、AI業界のパラダイムシフト

AI開発業界において、2026年5月はcomputeの権力構造が大きく変わらないている可能性がある。AnthropicがxAIのGPUクラスタ（月額推定12.5億ドル）を租用するという報道は、AI企業間の競争において**インフラの掌控**がいかに重要かを示している。同時に、OpenAIが数学の未解決問題を変換解決したという発表、Stability AIが6分間の曲生成可能な新オーディオモデルを発表するなど、複数の重要ニュースが同日発生した。本稿ではこれらのニュースを整理し、開発者視点からの技術的影響を考察する。

---

## xAI → computeProviderへ転換：Anthropic月間12.5億ドルの算出租用

TechCrunchが独占報じたところによれば、AnthropicはxAIの算出リソースを月額**12.5億ドル**で租用することが確定した。これはAI業界において極めて異例な取引である。

**なぜ異例か**：xAIはAnthropicの競合——Claudeに対するxAIのGrokモデルを提供している企業だ。それが競合に対して、自社の算出リソースを月額大規模に開放するということは、xAIが**AIモデル開発企業から算出providerへと戦略的に転換した**ことを示唆する。

### 取引の背景：GPUクラスタの過剩設備

xAIはMemphisに「Colossus」という大規模GPUクラスタを構築した。10万台のH100 GPUで構成され、世界最大級とされる。このクラスタはxAIのGrokモデル訓練に使われるはずだったが、想定よりも訓練所需的算出が少なかった可能性がある。

こうして生じた**過剩設備**をAnthropicにレンタルすることで、xAIは訓練コストを大幅に軽減しつつ、Microsoftとの既存の提携関係にも変更を加えないできた。

### 開発者への影響

この取引が意味するのは：

- **Anthropicにとって**：自社モデル訓練の算出コストが増加するが、Grokの訓練済みパラメータへのアクセスが向上する可能性がある
- **xAIにとって**：競合向他企业提供算出アクセスするというinverse incentiveな構造が、Grokエコシステムの開発者にどのような印象を与えるかは不透明
- **業界全体として**：大型AI企業間の算出貸与契約が一般化する可能性がある。特にMicrosoftがOpenAIに算出を提供している既存の関係と同じ構図

算出階層が明示化されたことで、**中小規模のAI開発者は算出更难になる**可能性がある。大型企业在互いに算出を融通し合う一方で、新規参入は算出不足に面面することになる。

---

## OpenAI、80年越しの数学予想を変換解決：正确性の検証も完了

OpenAIは、同社のreasoningモデルが離散幾何の中央予想（1946年未解決）を反証したと主張した。2025年に別の数学者が同じ手法で誤った証明を行い批判された这一次、OpenAIは**同じ数学者が検証を完了**したと強調している。

### 技術的背景

この問題は「単位距離問題（unit distance problem）」と呼ばれるもので、平面上に配置された点の間に存在する最小単位距離の総数を評価するもの。OpenAIのモデルは、与えられた点の中で特定の配置が矛盾することを示す反例を構築した。

重要な点は：**人間の数学者が検証に参加**していること。OpenAIは過去の誤りを繰り返さないため、学術パートナーと並行検証を行うプロセスを实施了。这一点は、AIが生成した数学的証明の信頼性向上における重要な的前例となる。

### 開発者への示唆

AIを用いた数学的研究は、以下の領域で実用的影響を持つ：

- **formal verification**：AIが生成した証明が自動検証されることで、LSI設計やセキュアプロトコルの検証自動化に近づく
- **research assistant**：開発者が日常的に数学的な探索道具としてLLMを活用する事例が増加する
- **code reliability**：数学的な正確性の概念が、程序的証明自動生成にも応用できる

---

## Stability AI、6分間の曲生成可能なオーディオモデルをリリース

Stability AIは**Stability Audio 3.0**をリリースした。小型モデルでありながら、6分間の高质量な音楽を生成できる。既存のテキストtoオーディオモデルが30秒〜2分程度の出力が主流だったことを考えると、大幅な延長である。

### 技術的特徴

- **デバイス上での実行**：小型モデルであるため、エッジデバイス上での動作が可能
- **6分の連続トラック**：長いフォーマットの音楽生成に対応
- **MITライセンス**：商用利用が可能

### 開発者としての視点

デバイス上で動作する高品質オーディオ生成モデルがMITライセンスで公開されたことは、**オンラングな音楽生成アプリケーション**にとって大きな追い風となる。例えば：

- ゲーム内の動的BGM生成
- ポッドキャストの音効果生成
- ユーザーの好みに合わせた個別化オーディオ助理

既存のAPI基地のテキストtoオーディオサービスと異なり導入门槛が大幅に降低されるため、小規模開発者でも高精度なオーディオ生成機能を提供できるようになる。

---

## 参考リンク

- [Anthropic will pay xAI $1.25 billion per month for compute — TechCrunch](https://techcrunch.com/2026/05/20/anthropic-will-pay-xai-1-25-billion-per-month-for-compute/)
- [OpenAI claims it solved an 80-year-old math problem — for real this time — TechCrunch](https://techcrunch.com/2026/05/20/openai-claims-it-solved-an-80-year-old-math-problem-for-real-this-time/)
- [An OpenAI model has disproved a central conjecture in discrete geometry — OpenAI](https://openai.com/index/model-disproves-discrete-geometry-conjecture)
- [Stability AI releases a new audio model that can create 6-minute songs — TechCrunch](https://techcrunch.com/2026/05/20/stability-ai-release-a-new-audio-model-that-can-create-six-minute-songs/)

---

*（本文の情報は2026年5月21日時点のものです）*