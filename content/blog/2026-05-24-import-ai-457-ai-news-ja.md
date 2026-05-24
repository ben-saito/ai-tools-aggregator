# AI開発ニュースまとめ（2026年5月24日版）：Import AI 457から見る最新潮流

AI研究の最前線を追う newsletter「Import AI」の最新号を中心に、2026年5月中旬のAI開発トレンドをまとめる。精密計算ソフトウェアを標的とした20年前のウイルス解析から、最適化器の未解決問題、LLMによるLLM訓練の自動化まで——開発者として注目すべき話題を厳選して解説する。

---

## 1. AI Stuxnet：20年前の「fast16.sys」が示すAI非拡散のリアル

SentinelOneの研究者であるJoakim Kennedy氏らのチームは、2000年代初頭に発見された古いコンピュータウイルス **fast16.sys** の解析結果を公開した。このウイルスは、後にStuxnetとして知られるようになった攻撃手法を **5年以上先取り** していたとして大きな話題を呼んでいる。

### 標的は「精密計算ソフトウェア」

fast16.sysの興味深い点は、単なるコード流れのハイジャックではなく、**高精度な数学的計算や専門的なシミュレーションソフト** を標的としている点だ。具体的にはLS-DYNA 970（衝突試験・構造解析）、PKPM（エンジニアリング）、MOHID（水理モデリング）の3つのスイートが対象となり、これらのソフトウェアは核兵器開発に関する研究にも利用されていた。

研究者たちは「by introducing small but systematic errors into physical-world calculations」と述べており、これは物理世界の計算に小さく体系的な誤りを混入させることで、科学研究プログラムを漸進的に不能にするという、極めて潜伏性の高い攻撃手法だ。

### なぜこれが重要か：超知能の「AI非拡散」戦略

Jack Clark氏（Import AI編集者）は、この発見の意義を **「超知能が他の超知能の誕生を阻止する方法」** という観点から論じている。AI安全性研究者の間では、核拡散防止に似た概念として「AI非拡散」が議論されているが、この20年前のウイルスは、その初期的な実装例として機能している可能性がある。

---

## 2. Muon最適化器の隠れた欠陥とAuroraの提案

Tilde Researchチームは、かねてより注目されていた **Muon最適化器** の根本的な問題を指摘する論文を公開した。MuonはAdamWを超える次世代最適化器として期待されていたが、詳細な解析の結果、**MLP層におけるニューロンの大量死**が発生することが判明した。

### 問題は「row-norm anisotropy」

Muonの更新則は「tall matrices」（縦長行列）において **row-norm anisotropy** を継承するため、学習率ウォームアップの段階で相当数のニューロンが永続的に死亡する。ステップ500時点では、**4分の1以上のニューロンが事実上死滅** し、レバレッジスコアの分布は明確な二峰性を示す——一部のニューロンはほぼゼロの更新しか受けず、他方は過度に大きな更新を受ける。

### 解決策：Aurora最適化器

同チームは、この問題に対処する新最適化器 **Aurora** を提案した。Auroraは「a leverage-aware optimizer for rectangular matrices」をコンセプトに、行列の構造を考慮した更新則を実装している。

**性能比較（1.1Bパラメータtransformer、~100Bトークン）：**

- **Aurora**: smoothed loss 2.26（ステップ24k時点）
- **Muon**: 2.31
- **NorMuon**: 2.33

MMLUスコアではMuon 대비 **10ポイント以上の改善** が確認され、特に **MLPが負責する暗記集約的なベンチマーク** での向上が顕著だった。Auroraは既にAlexander Doria氏（Pleias）によっても独立検証されており、600MパラメータモデルでAdamWを超える性能が確認されている。

### なぜこれが重要か：AdamW打ち破りの難しさ

AI最適化器の история は、AdamWの性能を打ち破ろうとする試みで満ちているが、決定的な成功はまだまれていない。AuroraがAdamWを最終的 に上回るかどうかはまだ不明だが、この研究が示すのは、**最新の「SOTA」最適化器でさえ潜伏的な欠陥を抱えうる** という現実だ。

---

## 3. LLMsがLLM訓練を自動最適化：Prime Intellectのアプローチ

Prime Intellectは、 **AI研究タスクにおけるLLMの自律的改善能力** を検証する実験結果を公開した。主力モデル（Codex / GPT 5.5、および Claude Code / Opus 4.7）に **nanoGPT speedrun optimizer track** を実行させたところ、人間の.baselineを上回り、すべてのセッションで新記録を樹立した。

### 実験の概要

nanoGPT speedrunは、124MパラメータのGPTスタイルモデルを訓練し、目標のvalidation lossに到達するまでのステップ数を最小化する課題だ。最適化器、スケジュール、初期化、ハイパーパラメータのみを変更できる。

- **消費リソース**: 約14,000 H200時間
- **実行回数**: 約10,000ラン
- **結果**: エージェントは人間のBASELINEを打倒

### 何が得意かと何が不得意か

Prime Intellectの分析によると、**得意分野**は：

- オプティマイザー検索
- ハイパーパラメータスイープ
- 手法の積み上げ（stacking）

**不得意分野**は：

- 新概念の自発的な発想
- 既往の研究から離れた根本的な革新
- コンポーネントの削除や修剪

また、エージェントはコンポーネントを追加する傾向があり、**削除や簡略化を避ける**傾向が強く、コンポーネント間の相互作用に関するmental modelが貧しいことも指摘されている。

### なぜこれが重要か：研究の本質は工学か

Clark氏の見解では、AI研究の多くは「基本的な工学作業」であり、今のシステム 이미 충분히得意としている可能性がある。この実験はその仮説を裏付けるものであり、**創造性や独创的なアイデアなしにも相当な進展が可能** であることを示している。

---

## 4. 「Positive Alignment」論文：安全性を超えるAIのあり方

Oxford大学、Google DeepMind、OpenAI、Anthropic、Stanford大学などの共同研究として、「Positive Alignment：Artificial Intelligence for Human Flourishing」と題するposition paperがarXivに公开发表された。

### 論文の主張

Positive Alignmentは「AI系统在确保安全可靠的同时積極的に人間の繁栄を支援する」という理念を提唱する。従来の安全性研究が「失敗モードの減少」に集中してきたのに対し、「肯定的な姿勢」は、より広範囲で移植可能な解決策を提供する可能性があるという。

### 従来の安全性研究の限界

同論文は従来の安全性アプローチに以下のような批评を展開している：

- **Floor without ceiling**: 安全制約をすべて満たしても、時代遅れで使えない、あるいは壊滅的な結果を避けるだけのシステムになりうる
- **Preference-wellbeing divergence**: ユーザーが見窄かしや素早い回答を好み、真の理解や成長を追求しない場合がある
- **Scalability**: 肯定的な定位は、新しい状況に対してより適切に般化する可能性がある

### なぜこれが重要か：成功の本質

この種の議論は、技術的安全性の成功に正面から向き合うものだ。「安全で信頼できるAIシステムを作れるようになったら将它如何应用到社会中，个人や社会が良い人生を送るのを助けるか」という問いは、**AIの次の十年を決定づける重要な論点** だ。

---

## 参考リンク

- [fast16 Mystery - SentinelOne LABS](https://www.sentinelone.com/labs/fast16-mystery-shadowbrokers-reference-reveals-high-precision-software-sabotage-5-years-before-stuxnet/)
- [Aurora - Tilde Research](https://blog.tilderesearch.com/blog/aurora)
- [Aurora GitHub](https://github.com/tilde-research/aurora-release)
- [Autonomous AI research for nanogpt speedrun - Prime Intellect](https://www.primeintellect.ai/auto-nanogpt)
- [Positive Alignment - arXiv](https://arxiv.org/abs/2605.10310)
- [Import AI 457](https://importai.substack.com/p/import-ai-457-ai-stuxnet-cursed-muon)

---

*（本文の情報は2026年5月24日時点のものです）*