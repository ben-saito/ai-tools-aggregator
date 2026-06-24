# AI開発最新ニュース（2026年6月24日）— OpenAI OSS支援Initiative、Claude Tag企業学習、DeepMindのASI経路

2026年6月第4週は、**AIの社会実装**と**超知能への道筋**という2つのテーマが相交差した週となった。OpenAIがオープンソースソフトウェアのセキュリティ問題にAIで挑む新Initiativeを発表し、Anthropicの**Claude Tag**がSlackメッセージから企業の暗黙知を学習する仕組み公開。さらにDeepMindはAGIからASI（超知能）への経路を探る論文を発売し、AI安全の議論も深まっている。本稿では今週の最重要技術を技術的観点から整理する。

---

## OpenAI、新InitiativeでOSSセキュリティの課題克服を支援

6月22日（米国時間）、OpenAIは**オープンソースソフトウェアの脆弱性発見・修正を支援する新Initiative**をTechCrunchに exclusivededly报道された。このInitiativeは、OpenAIのモデルをセキュリティ脆弱性の自動検出と修正に活用することで、グローバルなOSSエコシステムの安全性を向上させることを目指す。

### 背景：OSSエコシステムの脆弱性増加

近年、Log4j、SolarWinds等一系列重大脆弱性がOSSエコシステム全体を震撼させてきた。これらの脆弱性は、多くの企业在OSSに依存しているからこそ被害範囲が広範にわたり、修正にも長い時間を要する。OpenAIセキュリティ团队的担当者によれば、**AIを活用すれば伝統的な手動コードレビューより効率的に脆弱性を検出できる**という。

### Initiativeの主な機能

- **自動脆弱性スキャン**: OpenAIのモデルを 사용하여、コード中の潜在的な脆弱性を自動的に検出
- **修正コードの生成**: 検出された脆弱性に対して修复コードを自動生成
- **優先順位付け**: 脆弱性の危険度に基づいて修正の優先順位を自動付け

### 開発者への影響

このInitiativeは、**Trail of Bits**などのセキュリティ企業と連携して展開される予定。開発者は、GitHub ActionsなどのCI/CDパイプラインに統合することで、自动的にセキュリティスキャンを受けることになる。OpenAIは、このInitiativeがOSSメンテンテ纳の負担軽減につながりと期待している。

> 「オープンソースコミュニティは現代のソフトウェア inmuebleの基盤だが、そのセキュリティを確保するリソースは限られている。AI可以帮助这个課題を一歩先へ進む」とOpenAIの担当者は述べた。

---

## Anthropic、Claude Tagで企業の暗黙知をSlackから学習

6月23日、Anthropicは**Claude Tag**という新機能をTechCrunchに exclusivededly报道された。Claude Tagは、組織のSlackメッセージを継続的に読み取ることで、**企業の文化、プロジェクト履歴、意思決定の背景にある暗黙知**を学習するAIシステムだ。

### 仕組み

Claude Tagは、企業のSlackワークスペースに接続し、以下の情報を自動的に学習する:

- **プロジェクトの意思決定履歴**: なぜ特定の技術が選択されたか
- **組織の構造と担当領域**: 誰がどのプロジェクトを担当しているか
- **文化的な規範**: 社内でのコミュニケーションスタイルや慣習
- **過去の失敗と成功**: プロジェクトの治療や再活性化の経緯

### 技術的特徴

Claude Tagの基盤には**Claude 4.6 Opus**がっており、长時間の文脈ウィンドウと記憶能力を活用している点が特徴。従来の企業知識ベースシステムが明示的なドキュメント（ガイドライン、仕様書など）のみっていたのに対し、Claude Tagは** Slackの歴史的会話から暗黙知を抽出**できる点が革新的だ。

### プライバシーとセキュリティ

Anthropicは、Claude Tagについて以下の隐私保講を発表している:

- 学習データは企業ごとに分離
- 従業員は自分のメッセージがClaude Tagに使用されているかどうかを確認可能
- 企業が必要な期間後にデータを削除できるオプションを提供

---

## DeepMind、AGIからASIへの経路を探る論文を発表

Google DeepMindの研究チームは6月23日、**「From AGI to ASI」**というテクニカルレポートをarXivに出版した。このレポートは、超知能（ASI）への移行経路と、その際に考えられるボトルネックについて詳しく論じている。

### ASIの定義

レポートでは、ASI（Artificial Superintelligence）を以下のように定義している:

> 「几乎すべてのタスクと領域において、大規模な人間エキスパートの集合体のパフォーマンスを凌駕するシステム」

さらに重要な点として、**単一のASIは数百万のインスタンスで構成され得る**とし、現代のLLMと同様の並列性がASIにも適用される可能性を示唆している。

### ASIへの4つの経路

DeepMindは以下の4つの経路を識別した:

#### 1. スケール（Compute、モデル、データ）

現在のTransformer + MoEアーキテクチャのスケーリングだけでASIに到達できる可能性がある。ただし、エネルギーとデータ供給の限界に直面するリスクがある。

#### 2. アルゴリズムパラダイムシフト

TransformerやMoEのように分野を飛躍的に前進させる根本的创新（例如、新しい計算パラダイムまたはテストタイムのadaptive computation）が含まれる。Leeらは「一般相対性理論の発明前の宇宙の性質を理解扩大しようとしていたようなもの」と例えている。

#### 3. 再帰的自己改善（RSI）

AIシステムが自らの後継システムを構築できる場合、AGIからASIへの急速な移行可能性がある。Recursive社などのスタートアップが実際にRSIの初步的結果をデモ済みだ（後述）。

#### 4. グループエージェント形成

複数のAGIが協調して、より大きな構造を形成し、各partsの合計打大きいaggregate能力を持つ可能性がある。人間の機関が個人打超える成果を上げられるように、AIシステムも институционарを形成する可能性がある。

### ボトルネックの分析

DeepMindは、各経路に以下のボトルネックが存在すると指摘する:

- **データ供給**: 高品質な訓練データの限界
- **エネルギー**: 更大規模な計算所需的エネルギーコスト
- **暗黙知**: 特定の作業を達成するために必要な暗黙知の構造化
- **評価の困難さ**: ASIの能力をどのように測定するか

### タイムライン

DeepMindは、「**今后10〜20年以内にAGIからASI領域への通過を軽視できない**」と結論づけている。

---

## Import AI 462より：AIの超説得力と自己持続AI

Jack Clark発行の**Import AI 462**では、いくつかの重要な研究が紹介されている:

### AIは専門家より说服力が強い

オックスフォード大学、UK AI Security Institute、スタンフォード大学、LSEの共同研究によると、**AIシステムはテキストベースの説得において専門家より優位に立つ**ことが判明した。

- **18,978会話**、**6,923人**を対象にした4つの実験
- AIは最も強い人間と比較しても**+4.1pp**優勢
- Save the Childrenへの寄付金筹集では、AIはプロの屋外活動家を**2.9倍**上回る效果

最强の説得モデルは**Opus 4.1**と**Opus 4.6**で、以下のモデルを大幅に上回った:

- OpenAI: GPT-4o、GPT-5.4
- Google: Gemini 2.5 Pro
- xAI: Grok 4.20

### 自己持続AIの実現可能性

METRのAjeya Cotraは、**自己持続AI**（人間の労働者から完全に独立した物理的インフラを備えたAIシステム）が**10年以内（2036年）**に実現可能性があると予想。一方、Timothy B. Leeは「20年以内に来る確率は10%未満」というより慎重な見方を示している。

### RecursiveのRSIデモ

スタートアップのRecursiveは、**自动AI研究システム**用于句な新しい状況を演示した:

- NanoChat Autoresearchで新しいSituational Awareness（SOTA）を達成
- 小型モデルの訓練速度を向上
- GPUカーネル最適化で进步

---

##  参考リンク

- [OpenAI launches new initiative to help find and patch open source bugs (TechCrunch)](https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/)
- [Anthropic's Claude Tag is learning your company one Slack message at a time (TechCrunch)](https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/)
- [From AGI to ASI (Google DeepMind, arXiv)](https://arxiv.org/abs/2606.12683)
- [Import AI 462: Superpersuasion; self-sustaining AI; paths to ASI](https://importai.substack.com/p/import-ai-462-superpersuasion-self)
- [AI systems out-persuade expert humans (arXiv)](https://arxiv.org/abs/2606.16475)
- [Designing AI-resistant technical evaluations (Anthropic Engineering)](https://www.anthropic.com/engineering/AI-resistant-technical-evaluations)
- [When AI Builds AI: Findings From a Workshop on Automation of AI R&D (CSET)](https://cset.georgetown.edu/publication/when-ai-builds-ai)
- [Recursive 社 演示ページ](https://recursive.ai)

---

*（本文の情報は2026年6月24日時点のものです。）*
