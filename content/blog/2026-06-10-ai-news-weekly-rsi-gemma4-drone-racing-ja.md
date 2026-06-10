# AI開発ニュース週次まとめ：RSIの証拠、Gemma 4Мультимодальность強化、ドローンレーシングAI

2026年6月第2週、AI開発の世界では**再帰的自己改善（RSI）**の初期兆候、ドローンレーシングにおける強化学習の応用、国家管理メディアがLLMに与える影響など、複数の重要なトピックが浮上した。本稿では эти события与技术の詳細を分析する。

---

## Anthropic InstituteがRSI（再帰的自己改善）の初期兆候を公式に文書化

AI安全性に関する最重要的論点之一的**RSI**について、Anthropic Instituteが初めて公式な分析を公开发表した。Jack ClarkがImport AI 460で报告した内容によると、**2024年 대비2026年のコードマージ量が8倍增加**という数据が示された。

この分析の重要なポイント：

- **2025年から加速**: RSIの倾向は2025年に始まり、2026年に显著に加速
- ** 模型活用度向上**: より高性能なモデルほど、社内のエンジニアや研究者のタスクを実行愈加得意に
- **未解決の問い**: AIシステムが「パラダイムシフトを起こすような独創的なアイデア」を生み出せるかどうかは未解決

> 「RSIの可能的無限大版本では、AIシステムが自律的に后継者を设计できるほどスマートになる。 максималист的版本とより日常的な版本的RSIの両方の含意は甚大である」とClarkは书いている。

**なぜ重要か**: この документは、主要AI研究所がRSIの可能性を公に认めた最初期の事例之一。AIの継続的な自己改善が人类に与える影响について、より透明な議論が必要とされている。

---

## RL強化学習で訓練されたドローンがチャンピオン人類パイロットを性能で上回る

Google DeepMindとUniversity of Zurichの共同研究が、**強化学習ベースのドローンレーシングAI**が、技能を持つ人間のパイロットを性能で上回ることを実証した。

### 研究の主要内容

- **使用したアルゴリズム**: PPO（Proximal Policy Optimization）+ Perceiverエンコーダ（他エージェントの建模用）
- **訓練資源**: 5,500反復、2億環境相互作用、NVIDIA RTX 4090 GPUで27時間
- **性能結果**: 
  - 最高速度22 m/sで動作
  - 衝突率をベースライン比50%削減
  - 1対1のレースでAIは100%完走、人間は53.33%

### なぜこれが重要か

この研究は、「**実世界でのRSIの具体的証拠**」として注目に値する。AIシステムが、物理的な環境で最適な戦略を自己学習し、人間の専門家を凌ぐパフォーマンスを達成するという事実、そしてそれが「電子戦環境下でも動作可能か」という問いかけられている。

> 「AIシステムの多様な知能が出現すると、私たちのデジタル空間での体験不再是单一のテキスト対話，而是現実世界での具体的な成果として現れる」

---

## 国家管理メディアがLLMの回答に与える影響：Nature研究

University of Oregon、Purdue University、UC San Diego、Princeton、NYUの研究者による**Nature**論文が、国家管理メディアがLLMの政治的回答に与える影響を体系的に分析了。

### 主要発見

- **中国事例**: 中国の国営管理メディアデータセット（CulturaXの中国語部分で1.64%）がCommon Crawlに存在
- **LLaMa 2 13Bでの実証**: 6,400例だけで80%の頻度で親政府的な回答が増加
- **37カ国での検証**: 国家管理メディアの制御度が高いほど、その国の言語でのLLMの回答がより親政府的になる

### 技術的意味

この研究は、**訓練データの出所在AIの行動に与える影響**を実証的に示した。AIの開発者にとって、訓練データの出所管理与多样性の確保が至关重要であることを示唆している。

---

## Google DeepMind: Gemma 4 12B — エンコーダーフリーのマルチモーダルモデル

Google DeepMindが**Gemma 4 12B**を発表した。このモデルは以下特征を持つ：

- **エンコーダー不要**: テキスト、画像、音声を一つのアーキテクチャで処理
- **マルチモーダル統合**: 異なるモダリティ間の相互作用をネイティブにサポート
- **開発者向け設計**: ローカル実行とクラウドAPIの両方に対応

また、**Gemini 3.5 Live Translate**も発表され、リアルタイム音声翻訳がGoogle AI Studio、Google Translate、Google Meetで利用可能になった。

---

## AIサブスクリプション価格戦争：Googleが警告射撃

TechCrunchが報じたところによると、GoogleはAIサブスクリプション価格戦争において**警告射撃**を行った。低価格 tier AIサブスクリプションの大幅な値下げを実施。これは、OpenAI、Anthropic、Microsoftとの競争激化を反映している。

---

## Supabase、8ヶ月で評価額倍増（$10Bへ）

TechCrunchの報道によると、**Supabase**（オープンソースプロジェクトの代表例）が、AIツール（Claude、Codexなど）を活用して急成長し、8ヶ月間で評価額が倍増した。これは、**vibe-coding**潮流の台頭を示している。

---

## 参考リンク

- [When AI builds itself (The Anthropic Institute)](https://www.anthropic.com/institute/recursive-self-improvement)
- [Large Language Models Hack Rewards, and Society (arXiv)](https://arxiv.org/abs/2606.04075)
- [Superhuman Safe and Agile Racing through Multi-Agent Reinforcement Learning (arXiv)](https://arxiv.org/abs/2605.22748)
- [How Adaptable Are American Workers to AI-Induced Job Displacement? (NBER)](https://www.nber.org/papers/w34705)
- [State-controlled media influences LLM responses (Nature)](https://www.nature.com/)
- [Gemini 3.5 Live Translate (Google DeepMind)](https://deepmind.google/blog/fluid-natural-voice-translation-with-gemini-35-live-translate/)
- [Introducing Gemma 4 12B (Google DeepMind)](https://deepmind.google/blog/introducing-gemma-4-12b-a-unified-encoder-free-multimodal-model/)

---

*（本文の情報は2026年6月10日時点のものです）*