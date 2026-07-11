# AI創薬 × GraphRAGの最前線 —— AWS・Anthropic・NVIDIAの3社が示す、医療AIの現在地

2026年7月、創薬および医療AIの領域で複数の大きな動きがあった。AWSのGraphRAG導入によるドラッグディスカバリー時間の87%短縮、Insilico MedicineのAI設計薬がPhase III試験に進展、NVIDIA BioNeMoとAnthropic Claude Scienceの緊密な統合——これらのニュースは、「AIが創薬のどの段階まで実用了か」を具体的に示すものだ。本稿では、各発表の技術的詳細を掘り下げる。

---

## AWS GraphRAG × Amazon Neptune Analytics：ナレッジグラフで検索する創薬ワークフロー

### 課題：データサイロが創薬を阻んでいた

従来の創薬プロセスでは、臨床データ・工学ノート・文献などがストレージ環境に散在していた。データサイエンティストが潜在的な相関関係を発見できないばかりか、担当者が退職するとプロジェクトの文脈ごと失われるという問題もあった。

AWSはここに **GraphRAG（Graph Retrieval-Augmented Generation）** の枠組みで挑んだ。核となる技術は **Amazon Neptune Analytics** と **Amazon Bedrock** の組み合わせだ。

### GraphRAGアーキテクチャの詳細

構成要素を整理すると以下のようになる：

| コンポーネント | 役割 |
|---|---|
| **Amazon Neptune Analytics** | ナレッジグラフのストレージ兼クエリエンジン |
| **Amazon Bedrock** | LLM（Claude等）による自然言語クエリ応答生成 |
| **Knowledge Graph Linker** | ユーザークエリからグラフノードへのエンティティ紐付け |
| **EntityLinker** | ファジーストリングマッピングによる不正確なクエリ対応 |
| **BedrockGenerator** | LLMコールの制御層 |
| **AWS Lambda / S3** | データ取り込みパイプライン |

### 技術的ポイント

**ノード設計** では、ドメイン固有のクラス・著者・ジャーナル・チャンクテキストをノードとして構造化。エッジは階層分類とエンティティ間の関係を定義する。「TNIK」という生物学的ターゲットを例にとれば、そのノードはWnt経路、TGF-β経路、Hippo/YAP-TAZ経路など複数のシグナルチャネルと接続する。

**チャンキング戦略** も重要だ。Amazon Bedrock Knowledge Baseのチャンキングにより、長い文書も消化可能なサイズに分割され、分類ノードが非構造化テキストを標準化された診断メトリクスに固定する。

### 性能指標

- **ドラッグリサーチサイクル：87%短縮**（6ヶ月 → 3週間）
- データ検索速度：**85%改善**
- 研究レビューの所要時間：**70%短縮**

特に注目すべきは **因果追跡可能性** だ。システム答案是すべて検証可能な引用を伴い、グラフトラバーサルの過程を可視化する。規制当局への申請に必要な科学的完全性の証明が必要な場面に応える設計になっている。

---

## Insilico Medicine × Pharma.AI：AI設計のIPF治療薬がPhase III入り

### 疾患とターゲット選定

特発性肺線維症（IPF）は、重度の肺組織線維化により呼吸能力を失わせる致死的な疾患。患者の診断後生存期間の中央値は2〜4年だ。

Insilico Medicineは **Pharma.AI** パイプラインを用いて、治療標的として **TNIK（TRAF2- and NCK-interacting kinase）** を特定した。既存の抗線維化薬が標的とする受容体チロシンキナーゼ経路とは異なり、TNIKは線維化と炎症を複数の経路（Wnt, TGF-β, Hippo/YAP-TAZ, JNK, NF-κB）で調整する中心ノードとして同定された。

### PandaOmics × Chemistry42

**PandaOmics** が生物学的ターゲットの探索を担い、**Chemistry42** が分子的設計を行う。Chemistry42は既存化合物ライブラリのスクリーニングに頼らず、**Generative Tensorial Reinforcement Learning** を用いて標的ポケットに物理的に適合する分子を生成する。

### Phase IIb試験の結果

71名（中国22施設）の患者を対象とした無作為化プラセボ対照試験の結果、60mg1日1回投与群は強制肺活量（FVC）が **+98.4mL** の改善を示し、プラセボ群は **-20.3mL** の低下だった。安全性プロファイルも管理可能であり、FDAから2023年2月にオーファンドラッグ指定を受けている。

---

## NVIDIA BioNeMo × Anthropic Claude Science：自然言語で科学計算を実行する

### Claude Scienceとは

Anthropicがパブリックベータとして公開した **Claude Science** は、科学研究者向けのAIワークベンチだ。自然言語でデジタルエージェントに指示し、エンドツーエンドの研究ワークフローを自律的に実行できる。

### BioNeMo Agent Toolkitによる統合

NVIDIA BioNeMo Agent Toolkitとのネイティブ連携が最大の特徴だ。18のトップ20製薬会社が既にBioNeMoを本番環境に採用しており、以下の加速モデル・ライブラリがClaude Scienceから直接呼び出せる：

- **Evo 2**（ゲノム解析）
- **Boltz-2**（蛋白質構造予測）
- **OpenFold3**（蛋白質折りたたみ）
- NVIDIA NIMマイクロサービス群

### ワークフローの流れ

```
研究者の自然言語指示
    ↓
Claude Scienceがクエリを解釈
    ↓
BioNeMo Agent Toolkitが適切なNVIDIA compute資源を選択
    ↓
データ入力をフォーマット → 実行 → 結果返回
    ↓
研究者が結果を検証 → 次の指示
```

例としてがん抗原変異に対する阻害剤設計を考えると、研究者が変異を特定し「阻害剤を設計して」と指示すれば、Claude Science + BioNeMoが高精度阻害剤予測、最適化、検証のパイプラインを自律的に実行する。

---

## まとめ：創薬AIはどこまで来たか

3つの発表に共通するのは **「統合」と「追跡可能性」** の2要素だ。GraphRAGが複数のデータソースをグラフとして統合し、Insilicoが化学と生物学のAIを直結し、NVIDIA-Anthropic連携が実験室の知識と計算資源をseamlessにつないでいる。どのケースも、FDA規制対応や科学的完全性の証明といった、実用化に必要な要件を満たしている。

AI創薬は研究段階から **「製造業に近い再現性と検証性」** が求められる段階に移行しつつある。

---

## 参考リンク

- [AWS GraphRAG deployment cuts drug research cycles by 87%](https://www.artificialintelligence-news.com/news/aws-graphrag-deployment-cuts-drug-research-cycles-by-87/)
- [Insilico Medicine advances AI drug for IPF to Phase III trials](https://www.artificialintelligence-news.com/news/insilico-medicine-advances-ai-drug-for-ipf-to-phase-iii-trials/)
- [NVIDIA BioNeMo accelerates Anthropic Claude Science](https://www.artificialintelligence-news.com/news/nvidia-bionemo-accelerates-anthropic-claude-science/)

---

*（本文の情報は2026年7月11日時点のものです）*
