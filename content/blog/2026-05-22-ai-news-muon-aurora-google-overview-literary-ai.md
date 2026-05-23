# 2026年5月AI開発ニュース振り返り：Muon/Aurora、Google AI Overview、文学賞AI問題

2026年5月22日時点、AI業界はオプティマイザの根本的な課題から、AI生成文学の受賞騒動、そしてAIによるAI研究の自動化まで、多面的な進展を見せている。本稿では今週の注目トピックをエンジニア視点で整理する。

---

## Muonオプティマイザのneurons death問題 — Auroraという解決策

機械学習界の長年の一大事は、**AdamWを超えるオプティマイザ**の構築にある。 수많은挑戦者がいるが、決定打缺席が続いている。そんな中、Tilde ResearchによるMuonオプティマイザの解析結果が静かな波紋を広げている。

### 問題の詳細

Muonオプティマイザには重大な欠陥がある。背の高い行列（tall matrices）において **row-norm anisotropy** を継承し、MLPレイヤーのneuronsの一部が永続的に死亡する可能性がある。

研究者が発見したのは以下の事実：
- Muon下では、neuronsは初期に一様に高いLeverage scoreを持つが、学習率ウォームアップ中に大きな部分（约25%以上）が死亡し、回復しない
- ステップ500時点で4分の1以上のneuronsが事実上死亡状態に陥る
- neuronsは二峰性のLeverage分布を示し、一群はNear-zero更新、もう一群は不相応に大きな更新を受ける

### Auroraオプティマイザの提案

Tilde Researchはこの問題に対処するため、**Aurora**（rectangular matrices用のleverage-aware optimizer）を開発・公開した。実験結果：

- 1.1Bパラメータtransformerを约100Bトークンで学習
- PE-8設定でAuroraはMuonやNorMuonを抑え、最終loss **2.26**（Muon: 2.31、NorMuon: 2.33）を達成
- **MMLUでMuon比+10点**の改善
- MLPsは主にメモリオ承担责任するため、MMLUのようなメモリオ集中的ベンチマークでの改善が顕著

Independent validationも Pleias の Alexander Doria により确认済み。600MパラメータモデルでAuroraがMuonとAdamWを上回った。

### 開発者への影響

オプティマイザの選択は学习の質を直接左右する。特にMLP-heavyなモデルアーキテクチャではMuonのリスクに注意が必要。Auroraはまだsmall scaleでの検証に留まるが、rectangular matrix operationsが多いVision Transformer系モデルでの活跃が期待される。

---

## Google AI Overviewが「disregard」語で奇妙な挙動

The Vergeが报じた興味深い现象がある。GoogleのAI Overviewsが特定の語で検索結果に异常をきたすことだ。

### 发生了什么

「disregard」という語で検索すると、AI Overviewセクションが従来のサマリーではなく、典型的なChatbot的な応答（「Got it. If you need anything else or have a new question later, just let me know!」など）を返していた。

これはAI Overviewのシステムプロンプトが検索結果に影響を与えている可能性を示唆している。语句自体がAIに「無視して」と 命令しているように解釈され、意図しない応答を引き起こす。

### 技術的示唆

この现象は以下のポイントを工程师として考えるべきを示している：

- **プロンプト干渉**：ユーザー入力がシステムプロンプトに影響を与える可能性
- **検索結果と生成AIの境界**：検索インデックスがLLMの出力に影響を与える仕組みの危うさ
- **Safety filterのバイパス**：特定の语がコンテンツフィルタを回避する可能性

周五午后時点でGoogleは「disregard」語のAI Overview提供を完全に停止し、代わりにニュースストーリー一覧を表示する対処取了済み。

---

## 文学賞を揺るがすAI生成問題：GrantaとCommonwealth Story Prize

文芸誌Grantaが選ぶCommonwealth Short Story Prizeの受賞作「The Serpent in the Grove」（Jamir Nazir）がAI生成の可能性浓厚と指摘され、文学界に波紋を広げている。

### 検出された特徴

AI生成と疑われる特征は以下の通り：
- **混合 Metaphor**：不自然な比喩の连鎖
- **Anaphora（首语繰り返し）**：繰り返しによる修辞効果
- **Lists of threes**：3つ组のリスト構造

これらの特徴は現在のLLM生成テキストに特徴的ものだ。

### 開発者としての视角

LLM生成テキストの検出は依然として難しい。より本质적인 문제는：

- **AI生成 detection の限界**：現在の検出方法は単純な統計的特徴に依存し、高品質モデルでは无效化しやすい
- **创作過程の真正性**：文学賞の評価基準が「人間による创作」から「品質」だけに矮小化される可能性
- **監査と透明性**：AI利用の有無を明記する文化の欠如

AI検出ツールの開発はいたちごっこ状態であり人间评委の判断力が改めて问われている。

---

## AIによるAI研究の改善：Prime Intellect の autonomous research

Prime Intellectが新しい研究成果を発表している。現代のLLM（Codex/GPT 5.5、Claude Code/Opus 4.7）がAI研究タスクを自律的に改善できる程度を検討したもので、以下の设定で実験が行われた：

### 実験方法

nanoGPT speedrun optimizer trackを使用。124MパラメータのGPT-styleモデル学习の最適化が课题。目标 は「optimizer、schedules、initialization、hyperparametersのみを変更し、目標validation lossに到达するステップ数を最小化すること」。

### 結果

- 约10,000回実行、H200约14,000時間使用
- 両エージェントが人間のベンチマークを超え、全セッションで新記録树立
- しかし、以下の制约が明らかになった：
  - **Optimizer searchとhyperparameter sweepは得意**：既存の方法を組み合わせる倒是高手
  - **新規アイデアの生成は苦手**：人間の先行研究が必要
  - **追加倾向**：コンポーネントを追加するだけで、pruningや削除は很少
  - **相互作用のmental model不十分**：コンポーネント間の相互作用を理解していない

### 示唆

この研究が示すのは、**現在のLLMは最適化問題の「工学的山登り」は得意だが、独創的な発見は不得手**ということ。しかし、これは现在进行中の研究であり、もっと promisingな结果がsoon发布될 예정이다。

---

## arXiv論文レビュー：新世代AIエージェント

本周のarXivからは有力な論文がいくつか发布されている：

### SOLAR: Self-Optimizing Lifelong Autonomous Reasoner

Nitin Vetcha、Dianbo Liuによる生涯学習と継続的適応のための自律エージェント。動的で現実的な设置でのLLM展开における课题を対象とする。

**主な课题：**
- Concept drift（データ分布の変化）
- Gradient-based adaptationのコスト

**SOLARの解决方案：**
- Parameter-level meta-learningを使用
- Model weightsを探索環境として扱う
- Multi-level RLにより適応戦略を自律的に発見
- 進化的知識ベースでplasticityとstabilityのバランスを維持

### AgentCo-op: Multi-Agent Workflowの检索ベース合成

複数の科学的エージェントを連携させて genomics 研究を行うフレームワーク。Spatial transcriptomicsやsingle-cell multiomeデータの解析で獨立开发された科學代理を自動調整して統合する。

**特徴：**
- Typed artifact handoffsによるworkflow構成
- Bounded self-guided local repairで失败時の自己修復
- 6つのcoding、math、question-answeringベンチマークで4つで最高成绩

### OSCToM: 高階Theory of Mind

LLMのToM（心の理論）推論能力向上のためのアプローチ。FANToMベンチマークの情報非対称ケースで **76%精度**を達成し、ExploreToM報告の0.2%を大幅上回る。

---

## まとめと今後の注目点

本周のAI開発ニュースをまとめると：

| トピック | 重要度 | 開発者への影響 |
|----------|--------|----------------|
| Muon/Aurora | ★★★★☆ | オプティマイザ選擇の注意喚起 |
| Google AI Overview | ★★★☆☆ | プロンプト干渉の危险性認識 |
| AI生成文学賞 | ★★★★☆ | 検出・真正性管理の课题 |
| Autonomous AI Research | ★★★★★ | LLMの研究自動化現状と制约 |
| arXiv新論文 | ★★★★☆ | SOLAR、AgentCo-opなどの新技术 |

来週は、Auroraの実用規模での検証、Prime Intellectの次の実験結果、そしてAI Overviewの系統的問題対応に注目したい。

---

## 参考リンク

- [Aurora: A Leverage-Aware Optimizer for Rectangular Matrices (Tilde Research)](https://blog.tilderesearch.com/blog/aurora)
- [Aurora GitHub](https://github.com/tilde-research/aurora-release)
- [Autonomous AI research for nanogpt speedrun (Prime Intellect)](https://www.primeintellect.ai/auto-nanogpt)
- [Autonomous Speedrunning Experiment (GitHub)](https://github.com/PrimeIntellect-ai/experiments-autonomous-speedrunning)
- [Google's AI search is so broken it can 'disregard' what you're looking for (The Verge)](https://www.theverge.com/tech/936176/google-ai-overviews-search-disregard)
- [The literary world isn't prepared for AI (The Verge)](https://www.theverge.com/tech/936073/ai-writing-granta-commonwealth-prize)
- [SOLAR: Self-Optimizing Lifelong Autonomous Reasoner (arXiv)](https://arxiv.org/abs/2605.20189)
- [AgentCo-op (arXiv)](https://arxiv.org/abs/2605.20425)
- [OSCToM (arXiv)](https://arxiv.org/abs/2605.20423)

---

*（本文の情報は2026年5月22日時点のものです）*
