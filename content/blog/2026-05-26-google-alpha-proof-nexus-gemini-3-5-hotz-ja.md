# Google、AI数学証明AI「AlphaProof Nexus」を発表 другие решения — 数理科學の新たな時代

2026年5月、Google DeepMindが新しいAIフレームワーク「**AlphaProof Nexus**」を発表し、数学界に激震が走っている。このシステムは、Leo III问题的未解決問題を含む9つの未解決問題を自律的に解決し、その推論コストは問題あたりわずか数百ドルだという。

---

## AlphaProof Nexus：形式検証とLLMの融合

AlphaProof Nexusは、LLMによる証明生成と機械検証を組み合わせたフレームワークだ。OpenAIの自然言語アプローチ不同的是、**Leanコンパイラ**を使用して各証明ステップを自動的に検証する。エラー情報は直接的に次の試行にフィードバックされ、LLMは記号的なフィードバックによって論理的な弱点を補完する。

### 主な成果

- **9つの未解決問題**（353題 시도）を解決，其中2題は56年間未解決
- OEISの未解決予想から44題を証明
- 代数幾何学の15年間未解決問題を解決
- 凸最適化の改善実績

問題は1题あたり数百ドルの推論コストで解決でき、人間は最終結果のチェック에만介在する。システムには4つのエージェントバリアント（複雑度の異なる）が含まれ、最も単純なAgent (A) はGemini 3.1 Pro 기반으로独立したサブエージェントをループで実行する。

成功率はまだ**2.5%**と低いが、コスト効率は従来の方法论を大幅に上回る。

---

## ジョージ・ホット：AIコーディングエージェントは「業界にとって最もコストのかかる失敗」

有名プログラマのジョージ・ホット（tinygrad創業者）は自身のブログ「The Eternal Sloptember」で、AIコーディングエージェントについて痛烈な警告を発した。

ホットは6ヶ月間、さまざまなモデルとツールをテストした結果、**LLMは高速なプロトタイプ生成はできるが、細部で崩壊する**という結論に達した。特に大規模な組織では、 разработчиковがAIの欠陥ある出力を検出できず、バグが累積していく風險が高い。

> 「今日の言語モデルは決して本当にコーディングできるようにはなりません。『世界モデル』が必要です。LLMは『プログラミングの分布を模倣するように設計された高度な統計モデル』であり、出力は『ますます検出難しくなっている』」

ホットは、かつてはLLM楽観主義者だったが（「o1-previewは初めてプログラミング可能なモデルだ」）、今は**LeCun/Marcus camp**（Yann LeCun、Gary Marcus）と同一視している。

---

## AIは正しい答えを出すが、ソースは間違う — CiteVQA研究

北京大学と上海AIラボの研究チームは、新しいベンチマーク「**CiteVQA**」を構築し、AIの「帰属幻觉（attribution hallucination）」の問題を解明した。

現在のDocVQAやMMLongBench-Docなどの標準的なドキュメント分析テストは、最終答案のみを評価し、モデルがドキュメントから情報を取得したのか、それとも既存の知識から推測したのかを判別できない。法律、財務監査、医療の分野では、トレーサビリティがAI出力の実用性を決める。

CiteVQAでは、モデルに各ステートメントをドキュメント内の正確な位置にバックアップすることを要求する。段落、表、图、数字へのページ番号だけの参照是不够で、厳密な帰属正確度（Strict Attributed Accuracy）がメインメトリクスとなる。

7つの主題分野から1,897の質問かけら、711のPDF（平均40.6ページ）をCoverしており、英语451题与中国語260题が含まれる。

---

## Google I/O 2026：マルチモーダルAIから「エージェントURI Gemini」时代へ

GoogleはI/O 2026で「**エージェントURI Gemini**」时代を発表し、Gemini 3.5とGemini Omniを含む一系列の新技術を展示了。Gemini 3.5は「知性边疆と行動」を組み合わせ、推論能力と実用性を融合した最新モデルとして位置づけられている。

Googleによると、Gemini appは「よりエージェント化」し、積極的、24時間体制で支援を提供するようになった。Google Marketing Live 2026では、AI駆動の広告ソリューションも発表され、検索と広告の境界線がますます曖昧になっている。

---

## 教皇庁とAIの邂逅：Anthropic共同創業者が基調講演

教皇レオ14世の回勅「**Magnifica humanitas**」の発表において、Anthropic共同創業者のChris Olahが基調演讲に立ち、AIモデルが内省と感情のような状態の証拠を示していると主張した。

教皇の回勅は異なるニュアンスで、「これらのシステムは人間の知能の特定機能を単に模倣する」と述べており、Olhの主張と公式立场の間に明显な温度差がある。Anthropicはまた、81,000人のClaude.aiユーザーにAIに関する調査を実施し、「AIが何を恐れ、何を夢見ているか」というデータを公开发信した。

---

## Anthropic、快進撃 — 企業提携と製品展開

Anthropicは最近、複数の大型企業提携を明らかにしている：

- **KPMG**：276,000人以上のコアビジネスと workforce にClaudeを統合する戦略的同盟
- **PwC**：技術構築、M&A執行、企业機能再編にClaudeを配置
- **Gates Foundation**：2億ドルパートナーシップ
- **SpaceX**：使用制限扩大とコンピュート取引
- **Stainless社**：買収

また、**Project Glasswing**も进展しており、Amazon、Apple、Broadcom、Cisco、Google、JPMorganChase、Microsoft、NVIDIAなど主要な科技企業が参道するソフトウェアセキュリティイニシアティブだ。

---

## 参考リンク

- [Google DeepMind Blog](https://deepmind.google)
- [The Decoder: AlphaProof Nexus](https://the-decoder.com/google-deepminds-alphaproof-nexus-solves-decades-old-math-problems-for-a-few-hundred-dollars/)
- [The Decoder: George Hotz](https://the-decoder.com/george-hotz-says-coding-agents-will-be-one-of-the-most-costly-mistakes-in-software-development/)
- [The Decoder: CiteVQA](https://the-decoder.com/ai-models-often-give-the-right-answers-but-point-to-the-wrong-sources/)
- [blog.google](https://blog.google)
- [Anthropic Newsroom](https://www.anthropic.com/news)

---

*（本文の情報は2026年5月26日時点のものです）*