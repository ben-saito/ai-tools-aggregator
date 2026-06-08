# AI開発ニュースまとめ（2026年6月8日号）

AIサーバ市場が2035年にかけて年平均成長率25.42%で拡大の見込みや、KAISTが少数の動画からPhysical AI学習技術を開発、Cambridge大学がAI設計コロナウイルス疫苗の試験を開始など今週もAI分野での注目動向が発表された。LLMデプロイメントの簡素化やデータ品質の課題など、開発者にとって重要な最新情報をまとめてお届けする。

---

## AIサーバ市場が2035年にかけてCAGR 25.42%で成長予測

Global Growth Insights社のレポートによると、AIサーバ市場は2025年から2035年にかけて**年平均成長率（CAGR）25.42%**で拡大すると予測されている。 この成長の背景には、大規模言語モデル（LLM）の訓練需要の高まり、生成AIアプリケーションの企業導入加速、およびデータセンターにおけるGPUクラスタの拡充がある。市場拡大に伴い、**NVIDIA H100/H200シリーズ**のようなAI特化チップの需要も引き続き高水準で推移すると考えられる。開発者にとっては、クラウドGPUリソースのコスト最適化や、モデル提供サービスのスケーラビリティ設計が重要な課題となるだろう。

---

## KAIST、少数の動画からPhysical AI学習技術を開発

韓国科学技術院（KAIST）は、ごく少数の動画のみから物理的な操作タスクを学習する「Physical AI」技術を開発したと報じた（조선일보、6月7日）。 この技術は、ロボティクスにおける従来の手法と異なり、大量のdemonstrationデータなしで、Few-shot学習により複雑な物理的操作を獲得できる可能性がある。 **Sim-to-Real転移**や**ビデオベースの模倣学習**の進歩を示す事例として、産業界からの注目も高い。開発者にとって、ロボティクスAIやEmbodied AI分野での学習データ効率化の解決策として活用できるだろう。

---

## Cambridge大学、AI設計のコロナウイルス疫苗を世界初いで試験

Cambridge大学は、AIによって設計されたコロナウイルス疫苗の世界初試験を開始したとcryptobriefingが伝えた（6月7日）。 AI技術を用いて病毒の変異パターンを予測し、効果的な抗原を設計するこのアプローチは、**逆vaccine設計（reverse vaccinology）**の進化形として注目される。 従来法の数年かかる疫苗設計プロセスを、AI支援により短縮できる可能性がある。医療・創薬AI分野での**Transformerベースの抗原設計**や**AlphaFold等の構造予測AI**の活用事例として、バイオテク企業にとって重要な先行事例となるだろう。

---

## RunPod、LLMエンドポイントデプロイメントを簡素化

RunPodは、LLMモデルのエンドポイントデプロイメントを簡素化する新機能をリリースした（StartupHub.ai、6月7日）。 **Serverless GPUインフラ**を活用したこのサービスは、モデルのホスティング、スケーリング、推論エンドポイントの構築を容易にする。開発者は複雑なインフラ設定なしで、API経由でLLM推論可以利用できるようになる。 類似のサービスとして**Anthropic API**や**OpenAI API**があるが、RunPodは**カスタムモデルのServerlessデプロイ**に特化しているのが特徴だ。費用対効果の高いLLM推論環境を探している開発者にとって有力な選択肢となるだろう。

---

## 「問題はAIではなくデータ」——データ品質がAI成功の鍵

Substackの記事（6月7日）では、AIプロジェクトの失敗主要原因として**データ品質の問題**が改めて指摘された。 モデルの精度向上に狂奔するあまり、訓練データの綺麗さや多様性、代表性的が軽視される傾向がある。 **Garbage in, garbage out**の原則通り、優れたモデルでも高品質なデータなしで具有良好的パフォーマンスを達成することはできない。 開発者にとって、データパイプラインの整備やデータ漢toolsの整備は、モデル開発と同じくらい重要な工程であることの再認識が促される。

---

## MIT、化学原理を理解するAIモデルの構築进行研究

MIT Newsは、化学原理を理解しgeneralizeできるAIモデルの構築に関する研究を報じた（5月20日）。 单一のタスク特化ではなく、**科学的な一般化能力**を持つモデルの開発目指すこの研究はelk интерес好奇心を引く。 **Foundation Models for Science**分野での進歩具体例として、創薬や材料科学への応用が期待される。 開発者にとってScience AI分野でのTransferableなタスク対応能力の重要性が増していくことになるだろう。

---

## 参考リンク

- [AI Servers Market Growth Driven by 25.42% CAGR by 2035 - Global Growth Insights](https://www.globalgrowthinsights.com)
- [KAIST Develops Physical AI Learning Tech From Few Videos - 조선일보](https://www.chosun.com)
- [University of Cambridge tests world-first AI-designed vaccine - Crypto Briefing](https://cryptobriefing.com)
- [RunPod Simplifies LLM Endpoint Deployment - StartupHub.ai](https://www.startuphub.ai)
- [The Problem Isn't AI. It's Data. - Substack](https://agrifoodanalyticslab.substack.com)
- [Building AI models that understand chemical principles - MIT News](https://news.mit.edu)

---

*（本文の情報は2026年6月8日時点のものです）*