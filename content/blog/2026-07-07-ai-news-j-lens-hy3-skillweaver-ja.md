# AI開発最新ニュース：Anthropicの「J-lens」がClaudeの内部構造を明かす / TencentがApacheライセンスでHy3を公開

2026年7月上旬、AI業界は複数の重要な発表が重なった。AnthropicはClaudeの内部に「グローバルワークスペース」に似た構造が存在することを明らかにし、TencentはApache 2.0ライセンスのHy3を公開してオープンソースコミュニティを揺るがせた。また、Alibabaはエージェントのトークン使用量を99%削減するフレームワークを発表し、Z.aiはGLM-5.2公式の開発環境「ZCode」をローンチした。

---

## Anthropic、「J-lens」でClaudeの内部に「グローバルワークスペース」構造を発見

Anthropicは7月6日、16人の研究者による論文「Verbalizable Representations Form a Global Workspace in Language Models」を公開し、**J-lens（Jacobian lens）** と呼ぶ新しい解釈可能性ツールを使用してClaudeの内部構造を解析した結果を披露した。

### J-space：意識の理論と一致する内部領域

研究チームが発見したのは「**J-space**」と呼ばれる領域である。これはモデルのニューラルネットワーク内に自然に発生していた構造で、少数の概念のみがアクセス可能な「報告可能」な空間として機能していた。残りの大部分は自動処理として暗黙的に動作しており、モデル自体はこれらの概念を言葉にできない。

この発見の重要な点は、**この構造が意図的に設計されたものではなく、トレーニング 과정에서自然にEmergentしたもの**であることだ。Anthropicのリサーチチームはこれが神経科学の「グローバルワークスペース理論」（Bernard Baarsが提唱）と機能的に類似していると指摘する。人間の大脳では、数十の専門プロセッサが並列に動作する中、ごく少量の情報だけが「スポットライト」として全体送去され、意識的思考的产生に関わっている。

### 5つの機能的検証

研究チームはJ-spaceが以下の5つの特性を持つことを実証した：

- **言語報告（Verbal Report）**：モデルに「何を考えているか」と問うと、J-space内の概念のみを答えた
- ** directed変調（Directed Modulation）**：「シトラスフルーツに集中しろ」と指示すると、モデルのJ-spaceに「オレンジ」「レモン」が現れた
- **内部推論（Internal Reasoning）**：2ホップ質問（「クモのようにウェブを張る動物の脚の数は？」）で、J-spaceは「クモ」を内部で解決し、最終回答の「8」より先に中間概念を生成した
- **柔軟な般化（Flexible Generalization）**：多言語プロンプトで、Chineseで回答しながらもJ-spaceには英語の中間概念が現れ、それを入れ替えるとChineseの出力も変化した

### 安全監視への適用

Anthropicはこの発見をすでにAI安全性のモニタリングに活用している。J-spaceを使用すれば、モデルが内部で保持しているが開口していない概念を検出できるようになるため、潜在的なリスクのある思考パターンを早期に発見できる可能性がある。

---

## Tencent、Hy3をApache 2.0ライセンスで公開：GLM-5.2より小さく、より広範な用途に対応

Tencentは7月6日、2950億パラメータのMixture-of-Experts（MoE）モデル**Hy3**の完全版をApache 2.0ライセンスで公開した。4月のプレビューリリースからの主な変更点は以下の通り：

- **Apache 2.0ライセンス**： 英国、EU、韓国などへの展開を制限していた以前のライセンスから転換
- **パラメータ**： 全2950億パラメータ、アクティブは210億（トップ8ルーティング、192 Expert）
- **コンテキストウィンドウ**： 256Kトークン
- **幻覚率**： 12.5%から5.4%に半減
- **Commonsenseエラー率**： 25.4%から12.7%に削減

### GLM-5.2との比較

Tencentが270人の専門家対象に実施した盲目テストでは、Hy3がGLM-5.1より高分だが、GLM-5.2との直接比較ではコーディングベンチマークで劣っている：

| ベンチマーク | Hy3 | GLM-5.2 |
|------------|-----|---------|
| SWE-bench Verified | 78.0 | 84.2 |
| Terminal-Bench 2.1 | 71.7 | 81.0 |
| DeepSWE | 28.0 | 46.2 |

一方、Hy3は以下の分野でオープンソーストップの成績：

- **BrowseComp**: 84.2
- **DeepSearchQA**: 91.0
- **MCP-Atlas（ツールオーケストレーション）**: 79.1

TencentはHy3を「検索・ツール重用エージェントワークロードに最適なオープンウェイトモデル」と位置付けている。

---

## Alibaba、SkillWeaverフレームワークでエージェントのトークン使用量を99%削減

Alibabaの研究者は7月2日、複雑なマルチツールタスクにおける新しいルーティングフレームワーク**SkillWeaver**を発表した。このフレームワークは以下の3段階で構成される：

1. **Decompose**：LLMが複雑なユーザークエリを単一スキルで完了可能なサブタスクに分解
2. **Retrieve**：埋め込みモデルでサブタスクとスキルライブラリ照合し候補を短列表に
3. **Compose**：プランナーが出力整合性を評価し、DAG（Directed Acyclic Graph）として実行計画を生成

### SAD（Skill-Aware Decomposition）

SkillWeaverの革新的点は**反復的なスキル対応分解（SAD）**にある。LLMが最初は一般的なステップ説明を生成しても、最初検索でみつかったスキルをフィードバックとして再度LLMに入力することで、分解の粒度和きめ細かさが実際のツール仕様と一致するようになる。

### 2,209のスキルで評価

研究チームはMCPエコシステムから収集した2,209の実際のスキルを使用し、300のクエリで構成されるCompSkillBenchで評価。结果として、既存手法と比較して**トークン消費量を99%以上削減**的同时に精度も向上した。

---

## Z.ai、GLM-5.2公式開発環境「ZCode」を正式公開

Z.ai（旧Zhipu AI）は7月2日、Windows、macOS、Linux対応のデスクトップアプリケーション**ZCode**を正式公開した。GLM-5.2首款に設計された「Agentic Development Environment」であり、以下の特徴を持つ：

- **GLM-5.2首款**：7440億パラメータMoE、アクティブ400億、100万トークンコンテキスト
- **月額$16.20からの料金体系**：Claude CodeやCursorより大幅に安い
- **BYOK対応**：サードパーティモデルも使用可能
- **Feishu/WeChat/ Telegramからのリモート操作**：モバイルからコーディングエージェントを制御可能

### 中国chipsのみでトレーニング

注目すべきは、GLM-5.2が**Huawei siliconだけでトレーニング**された点である。Stability AI創業者のEmad Mostaqueはトレーニングコストを約2500万美元と見積もり、その80%がポストトレーニングに充てられたと述べている。

---

## 企業向けAIの教訓：Claude Fable 5輸出規制とモデル多元化

6月12日、米国の輸出規制命令によりClaude Fable 5がすべての外国人ユーザーに提供停止となった。VentureBeat Pulse Researchの調查（145社対象）によると：

- **3分の2がモデル多元化済み**：51%がクローズドとオープンウェイトをブレンド、16%がコアワークフローを完全にオープンAPIに移行
- **自動監視を導入済みは1割のみ**：AIモデルがDriftingや誤動作を起こしても検出できない企業が多い
- **79%が既に自律エージェントの問題を経験**：特にシャドウAI（社内の勝手に使用されたAI）の被害が深刻

Liberty IT（Liberty Mutual傘下）のBrian CraigCIOはこう語った：「今は1つのベンダーやフレームワークにロックインする時代ではない。6个月先を見据えて、異なるモデルやベンダーに切り替えられる柔軟性が不可欠だ」

---

## 参考リンク

- [Anthropic's new "J-lens" reveals a silent workspace inside Claude | VentureBeat](https://venturebeat.com/ai/anthropics-new-j-lens-reveals-a-silent-workspace-inside-claude-that-mirrors-a-leading-theory-of-consciousness)
- [Verbalizable Representations Form a Global Workspace in Language Models | Anthropic](https://www.anthropic.com/research/global-workspace-language-models)
- [Tencent's Apache-licensed Hy3 takes on GLM-5.2 | VentureBeat](https://venturebeat.com/ai/tencents-apache-licensed-hy3-takes-on-glm-5-2-at-half-the-size-and-wins-everywhere-except-coding)
- [New Alibaba AI framework skips loading every tool | VentureBeat](https://venturebeat.com/ai/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99)
- [Z.ai launches ZCode | VentureBeat](https://venturebeat.com/ai/z-ai-launches-zcode-to-challenge-cursor-claude-code-and-github-copilot-in-ai-coding)
- [Enterprises lost Claude Fable 5 for a few weeks | VentureBeat](https://venturebeat.com/ai/enterprises-lost-claude-fable-5-for-a-few-weeks-new-data-shows-two-thirds-had-already-built-their-hedge)

---

*本文の情報は2026年7月7日時点のものです。*
