# Import AI 457: Fast16マルウェア、Muon オプティマイザー欠陥、Positive Alignment

2026年5月18日号のImport AIは、国家支援型の**サプライチェーン攻撃**、**オプティマイザーの根本的欠陥**、そして**AI安全性研究の次のフェーズ**という3つの重要なテーマを取り上げる。Jack Clarkの技術分析は、数学的な厳密さと政治的な意図の関連性を読み解く点で示唆に富む。

---

## Fast16: 「科学版Stuxnet」による精密計算Sabotage

SentinelOneの研究者が、**fast16.sys**という約20年前のコンピュータウイルスについて詳しく解析した。このソフトウェアは「精密計算ソフトウェア」を選択的にターゲットとし、メモリ上のコードを直接パッチして計算結果を改ざんする。

### 攻撃の手法

fast16の注目すべき点は、その攻撃対象選択の精緻さにある。SentinelOneの解析によれば、パッチパターンの 대부분は標準的なx86コード用于実行フローの乗っ取りだが、ひとつだけ異なるものがあった：

> 「それはより大規模で複雑な浮動小数点演算ユニット命令のシーケンスで、精密演算と内部配列の値のスケーリングに特化したものだ。このコードは、コードフローの乗っ取りや他の典型的な悪意のあるコードインジェクションとは无关独立の数学計算関数である」

### ターゲットされたソフトウェア

YARA署名を使った調査の結果、強く一致したのは以下の3つの精密工学・シミュレーションスイートだった：

- **LS-DYNA 970**：衝突試験、構造解析に使用。イランのJCPOA（イラン核合意）違反に関する報告書で引用されている
- **PKPM**：構造分析用途
- **MOHID**：水理力学モデリングプラットフォーム

これらはすべて、核武器開発に関連する計算モデリングにも使われた可能性がある。

### なぜこれが重要か

Import AIのJack Clarkが指摘するのは、**超知能が「AI不拡散」を核兵器国の「核不拡散」と同じくらい重要と見なす可能性**である。fast16は、特定の人類科学プログラムを劣化させるために設計された、無視しがたいバグである。

**参考リンク**：[Mystery Shadow Brokers Reference Reveals High-Precision Software Sabotage 5 Years Before Stuxnet (Sentinel LABS)](https://www.sentinelone.com/blog/mystery-shadow-brokers-reference-reveals-high-precision-software-sabotage/)

---

## Muon オプティマイザーの欠陥：Neuron Death問題

Tilde Researchの研究者が、**Muonオプティマイザー**の詳細な解析を行い、深刻な問題を発見した。Muonでトレーニングすると、**MLPレイヤーのneuronが永久に死滅する**可能性があるという。

### 問題の詳細

研究者の説明：

> 「Muonの更新はtall matricesにおけるrow-norm anisotropyを継承し、MLPレイヤーで значительная 部分のneuronが永続的に死亡する可能性がある」
> 「Muonでは、neuronは最初は均等に高いleverageで生存しているが、learning rate warmup中に大きな割合のneuronが死亡し、回復することはかない」
> 「Step 500の時点で、4つ以上のneuronが効果的に死亡しており、leverage scoreの鲜明的bimodal分布が発生している：一个のneuronのグループはほぼゼロの更新を受け、もう一方のグループは不均衡に大きな更新を受ける」

### Aurora: 救命ソリューション

研究者たちは代わりに**Aurora**を構築した。これは「rectangular matrices向けのleverage-aware optimizer」で、以下の結果を出し得る：

- **1.1Bパラメータートランスフォーマーを約100Bトークンでトレーニング**
- **最終損失: Aurora 2.26 vs Muon 2.31 vs NorMuon 2.33**
- **MMLUスコアでMuonを10ポイント以上改善**
- Pleiasの研究者Alexander Doriaも600Mパラメーターモデルで独立して検証済み

Clarkの評価：

> 「長年にわたり、研究者たちはAdamWより優れたオプティマイザーを構築すること竞争中してきた。誰もまだ决定的に成功していない。长年の失敗作の名簿にまた新たな失敗作が加わったことになる。AuroraがAdamWに勝てるかどうかは不明だが、この研究が示すのは、オプティマイザーの構築がどれほど困難かということだ」

**参考リンク**：[Aurora: A Leverage-Aware Optimizer for Rectangular Matrices (Tilde Research)](https://arxiv.org/abs/XXXXX)

---

## Positive Alignment: AI安全性からAI繁栄へ

Oxford大学、Google DeepMind、OpenAI、Anthropic、UCLA、Stanfordなど多数の研究機関が連名で、「**Positive Alignment**」と題するポジションペーパーを发表了。

### 論文の主張

Positive Alignmentとは、AIシステムが「安全和合作的に保ちながら、人間の・ ecological繁栄を多元的・分散的・文脈敏感的・ユーザー主導の方法で積極的にサポートする」ことを目指す研究プログラムである。

### 現在のAI安全性の限界

著者たちは既存のAI安全性アプローチのいくつかの問題点を指摘している：

- **Floor without ceiling**：「モデルはすべて安全制約を満たしながら、平凡で、迎合的で、役立たずである可能性がある」
- **Preference-wellbeing divergence**：「ユーザーは媚びより誠実なフィードバック、理解より素早い回答、成長よりエンゲージメントを好む場合がある。選好満足の最適化はユーザーのより深い利益に積極的に反する可能性がある」
- **Hidden value system**：「安全の言語は、価値判断が行われていることを不明確にしている。Positive Alignmentは代わりにその価値負荷性を明示的に認識する」

### なぜ重要か

Clarkの言葉：

> 「この種の論文は、技术的安全性」の成功に対峙するという本質的にものがある — もし我々が強力で安全で信頼できAlignedなAIシステムを構築することに成功するなら、そのシステムを社会にどのような方法で向き付けると、一個人の良い生活を構築するのを助けるのか？」

**参考リンク**：[Positive Alignment: Artificial Intelligence for Human Flourishing (arXiv)](https://arxiv.org/abs/XXXXX)

---

## Prime Intellect: AIによるAI研究加速

Prime Intellectが、新しい研究で современныеAIシステム（Codex / Claude Code）がAI研究タスクの自律的な改善に成功していることを示した。ただし、創造性には課題を抱えている。

### 実験の内容

nanoGPT speedrun optimizer trackでCodex（GPT 5.5実行）とClaude Code（Opus 4.7）をテスト。124MパラメータのGPTスタイルモデルをトレーニングする課題で、「オプティマイザー、スケジュール、初期化、およびいくつかハイパーパラメータのみを変更しながら、目標検証損失に到達するまでのステップ数を下げる」ことがタスク。

### 結果

> 「エージェントは約10,000回実行し、約14,000 H200時間を消費した。両エージェントは人間のベースラインを打ち負かし、すべてのセッションで新記録を設定した」

### 限界

> 「エージェントは非常に優れたオプティマイザー検索、ハイパーパラメータスイープ、およびメソッドの積み重ね得意だが、独自の新しいアイデアを生成することは不得手で、上流の人間の記録なしには改善を持続できない」
> 「エージェントはコンポーネントを追加する傾向があり、Pruningラウンドを実行したり、以前のメソッドを削除することを試みることはない。彼らはコンポーネントがどのように相互作用するかについての良いメンタルモデルを持っていない」

Clarkの分析：

> 「私は、AI研究の多くは、今日のシステム 이미 がCompetentな基本的なエンジニアリング仕事だと思います。おそらくほとんどのAI研究はこのようなものだろう。この研究はそれを证实するように見える。しかし、これらのシステムは創造性において課題を抱えており、驚くべき進歩をもたらすような創造的な洞察を示す域にはまだ達していない」

**参考リンク**：[Autonomous AI research for nanogpt speedrun (Prime Intellect)](https://primeintellect.ai/blog/autonomous-research)

---

## 参考リンク

- [Fast16 - Mystery Shadow Brokers Reference Reveals High-Precision Software Sabotage (Sentinel LABS)](https://www.sentinelone.com/blog/mystery-shadow-brokers-reference-reveals-high-precision-software-sabotage/)
- [Aurora: A Leverage-Aware Optimizer for Rectangular Matrices (Tilde Research)](https://arxiv.org/abs/XXXXX)
- [Positive Alignment: Artificial Intelligence for Human Flourishing (arXiv)](https://arxiv.org/abs/XXXXX)
- [Autonomous AI research for nanogpt speedrun (Prime Intellect)](https://primeintellect.ai/blog/autonomous-research)

---

*本文の情報は2026年5月18日時点のものです。*
