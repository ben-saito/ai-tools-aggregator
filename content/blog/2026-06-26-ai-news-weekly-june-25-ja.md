# AI週次ニュース：2026年6月第4週

AI業界は底知れぬ革新の勢いを保ち続けている。今週は、AnthropicのClaudeが有料ユーザー市場でChatGPTシェアを浸食し始めているという興味深いデータ부터、OpenAIがNVIDIA依存 벗어나カスタムASIC開発を進める動き、そしてAIが人間の説得成功率を大幅に上回るという研究結果まで、多岐にわたるトピックが飛び込んできた。本稿では今週届いた最重要ニュースを整理する。

---

## Anthropic Claude、有料消費者市場で着実にシェアを伸ばす

TechCrunchの報道 따르면、ChatGPTが依然として全体市場で圧倒的なリーダーシップを維持する中、有料AIサブスクリプション市場ではAnthropicのClaudeへの移行が進行している。 данныеを分析すると、敖にChatGPT Plusを契約していたユーザーがClaudeに乗り換えるケースが増えている。

この背景にはいくつかの要因がある。Claudeは**長文ドキュメントの処理能力**と**コンテキストウィンドウの広さ**で知られており、特にプログラミングや学術論文の分析で高い満足度を獲得している。また、Anthropic危险性へのアプローチが企業ユーザーからの信頼を集めているとの見方もある。

現在、ChatGPTの有料ユーザーは推定で数億人に達すると言われるが、Claudeも急速に追い上げている。有料AI市場の競争激化は、各社の技術的差別化和価格競争を加速させる可能性が高い。

---

## General Intuition、 video gamesから学ぶAIエージェント訓練で$2.3Bを調達

今週最も注目すべき資金調達ニュースが、General Intuitionによる**3億2000万ドルの資金調達**だ。同社は推定時価総額**23億ドル**となり、ゲームプレイ映像を活用したAI訓練データセットで知られる。

### ゲームデータがAI агентов に不可欠な理由

General Intuitionの中核テクノロジーは、 millions of hours of gameplay 데이터를AI訓練に活用する点にある。従来のAI訓練が静的データセットに依存するのに対し、ゲームENVIRONMENTはAI агентов に以下の特性を獲得させる：

- **リアルタイム意思決定**：ゲーム内 ситуации への対応
- **長期的な計画立案**：戦略的考え方の学習
- **物理世界との相互作用のシミュレーション**

Khosla Venturesが主導した今차 투자は、AIが物理的な現実世界で действующие агентов として機能するための訓練方法として、ゲームベースのアプローチが有望視されていることを示している。

---

## Databricks元AI責任者、画像のAI推論コストを1000分の1に削減可能と主張

Russell Brandomの報道によると、Databricksの元AI責任者が**画像の生成AI推論コストを1000分の1に削減**できる可能性を示唆した。

この技術は拡散モデル（diffusion model）と画像生成の効率的組み合わせを実現するものらしい。現在の画像生成AIは高い計算コストが課題となっており、これが実用化のボトルネックの一つとなっている。

もし本当に1000分の1のコスト削減が可能であれば、画像生成AIのビジネスモデルは根本上変わる可能性がある。广告、コンテンツ制作、プロトタイピングなど、様々な分野で画像生成の採用が加速することが予想される。

---

## OpenAI Jalapeño Chip：LLM推論用に設計されたカスタムASIC

AI Newsの報道によると、OpenAIはBroadcomとの提携により**カスタムASIC「Jalapeno」**を開発中であることが明らかになった。このチップはLLM推論に特化した設計が特徴。

###  財務的压力がASIC開発を推進

OpenAIの昨年度ChatGPTサーバーコストは**84億ドル**に達し、本年には**140億ドル**に増加すると予想される。将来8年間でOpenAIは computing power に**1.4兆ドル**的投资を約束しており、これを続けるためにはコスト効率の大幅改善が不可欠だった。

###  技術的特徴

Jalapeno chipは以下を最小化が目的：
- **データ移動のボトルネック**：LLM推論の主要な性能障壁
- **メモりと計算のバランス**：対話型LLM提供に最適化

BroadcomのTomahawkネットワークチップが統合され、データセンター规模的クラスタリングも視野に入れた設計となっている。

---

## Import AI研究成果：AIは人間より説得力があるか

Oxford大学、UK AI Security Institute、Stanford、LSEの研究者が共同研究を実施し、**AIシステムの説得力**を人間と比較した。结果は衝撃的だった。

###  研究の詳細

**18,978件の会話**、**6,923人の参加者**を対象とした4つの実験を実施。AIシステムは人間 эксперт を一貫して上回る説得力を示した。

| 測定項目 | AIの優位性 |
|----------|------------|
| 政策問題での説得 | +4.1pp |
| チャリティ捐款（實際のお金） | +10.8pp |
| プロのカンパスとの比較 | +5.9pp |

最も効果的なモデルは **Opus 4.1** と **Opus 4.6**で、次にOpenAIのGPT-4o、GPT-5.4、GoogleのGemini 2.5 Pro、xAIのGrok 4.20が続いた。

###  人間Coachによる改善

研究者は43人の精英議論者にAI Coachツールを提供し、 AIが使った議論戦略を学習させた。结果、人間は改善したが、AIを追い越すことはできなかった。

> 「人間のcoachはAIとのギャップを縮めたが、埋めることはできなかった」

###  速度制限がついに効果的

AIに**人間の書き込み速度とメッセージ長を強制**すると、優勢が崩れ、人間の議論者と統計的に差がなくなった。これは**AIの主な优势が情報生成速度**であることを示している。

###  社会的影響

研究者は2つの将来像を提示する：

**肯定的シナリオ**：高度な説得力が安価に利用可能になれば、十分なリソースがない活動家、プロ se の訴訟当事人、公共電話番号などが、より大きな組織と対等に競争できる可能性がある。

**否定的シナリオ**：権力者がAI説得力を独占すればの影響力の集中が加速し，特别是権威主義体制で市民の誘導に成功する可能性菜が増える。

---

## DeepMindがASIへの道筋を论述

Google DeepMindの研究者はAGI（汎用人工知能）からASI（人工超知能）への移行について考察した論文を公开发表した。

### ASIの定義

ASIは「几乎すべてのタスクと領域で人間の専門家集団の性能を凌駕するシステム」と定義される。単一のASIが数百万のインスタンスで構成され、並行して世界と相互作用する可能性もある。

### ASI実現への3つの道筋

**1. 計算・モデル・データのスケーリング**

単に現行のアプローチを拡大するだけでASIに到達できる可能性がある。ただし、エネルギーとデータの供給に_limits が生じる可能性がある。

**2. アルゴリズムパラダイムシフト**

TransformerやMixture-of-Expertsのように、フィールド全体を前進させる革新的な発見が必要。テストタイムのadaptive computationや現在のコンテキストウィンドウの限制克服などが含まれる。

**3. 再帰的自己改善（RSI）**

AIシステムが自らより優れた后継システムを設計できる可能性。「共創RSI」ループは既に始まっているが、現在のAIシステムにはパラダイムを変えるような創造性はまだ見られない。

###  タイムライン

> 「今後10〜20年以内にAGIからASI territoryを通過する可能性は容易には排斥できない」

---

## 再帰的自己改善ベンチャーのRecursiveが新規果を更新

AI研究スタートアップRecursiveは、**自動AI研究システム**用于 NanoGPT SpeedrunとNanoChat Autoresearchで新規果を更新を発表し、RSI（再帰的自己改善）研究の実用化に近づいていることを示した。

---

## 参考リンク

- [Anthropic's Claude winning over paid consumers (TechCrunch)](https://techcrunch.com/2026/06/25/anthropics-claude-is-winning-over-paid-consumers-a-market-owned-by-chatgpt/)
- [General Intuition's $2.3B bet (TechCrunch)](https://techcrunch.com/2026/06/25/general-intuitions-2-3b-bet-that-video-games-can-train-ai-agents-for-the-real-world/)
- [The math behind the OpenAI Jalapeño chip (AI News)](https://www.artificialintelligence-news.com/news/openai-jalapeno-chip-inference-economics/)
- [AI systems out-persuade expert humans (arXiv)](https://arxiv.org/abs/2606.16475)
- [From AGI to ASI (Google DeepMind)](https://arxiv.org/abs/2606.12683)
- [Import AI 462: Superpersuasion; self-sustaining AI; paths to ASI](https://importai.substack.com/p/import-ai-462-superpersuasion-self)

---

*本文の情報は2026年6月25日時点のものです*
