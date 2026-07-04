# AI開発ニュース 2026年7月4日版：武田・Insilico大型提携、自律ロボティクス最前線、中国GPUクラスター

AI創薬分野での大型DX取引から、NVIDIAによる自己進化型ロボティクスフレームワーク、そして中国Tencentの1万GPU超訓練基盤まで——2026年7月第1週のAI開発ニュースをまとめる。

---

## 武田製薬、Insilicoと600億円のAI創薬提携—— Pharma.AIプラットフォームで初期段階から 협력

日本の武田製薬は7月3日、香港拠点の**Insilico Medicine**との戦略的コラボレーション合意を発表した。契約総額は最大**6億ドル（約600億円）**規模で、武田はInsilicoのPharma.AIプラットフォームへのアクセ得る。

### 取引の詳細

契約には**約6000万ドルのプロジェクト起始料りと近了払い、マイルストーン**が含まれ、の前臨床、臨床、商業化、销售マイルストーン達成時に最大6億ドルに達する可能性がある。武田は提携 통해選定された候補分子の全世界での開発、制造、商業化権利を取得する。

InsilicoのPharma.AIスイートは以下で構成される：

- **PandaOmics**: 標的発見
- **Chemistry42**: 新規低分子設計
- **InClinico**: 臨床試験移行確率予測

Insilicoは既に自社開発したAI創合物「レensosチバク」（ISM001-055）を異型性肺線維症に対する第2相臨床試験で評価しており、創薬から臨床への橋渡しの実績を持つ。

武田のChris Arendt最高科学責任者（研究HEAD）は「協約により、武田の疾患生物学研究与InsilicoのAI対応発見 capabilitiesの組み合わせを実現する。武田は発見身体に自動化、ロボティクス、生成AI統合を進めている」と説明した。

### 開発者視点での分析

AI創薬契約の規模別では6億ドルは大型の部類に入るが、**前期発見段階の提携**としては珍しくはない。重要な点は、Insilicoが「独自のAI生成候補者を臨床段階に進めた実績」をどのように武田の管线に引き込むか。Pharma.AIプラットフォームの予測精度と、実際の化学的実現可能性の乖離が、今後の注目点である。

---

## NVIDIA、自己進化型ロボティクスフレームワーク「ENPIRE」を公开发表——実世界での自律実験ループ

NVIDIAの研究チームは7月2日、ロボティクス向けの自律改善フレームワーク**ENPIRE**（Agentic Robot Policy Self-Improvement in the Real World）を公开发表した。

### ENPIREのアーキテクチャ

ENPIREは4つのコアモジュールで構成される：

1. **Environmentモジュール（EN）**: 自動リセットと検証
2. **Policy Improvementモジュール（PI）**: ポリシーリファインメント起動
3. **Rolloutモジュール（R）**: 単一または複数の物理ロボットでポリシー評価
4. **Evolutionモジュール（E）**: エージェントがログ分析、文献 consultation、訓練インフラ改善を実行

従来のAIエージェント研究ではコード領域での自律的実験・実行ループが実現されていたが、ENPIREはこれを**物理世界のロボットに適用**する点が革新的。

### ハードウェア構成

各stationsは以下の構成：

- **YAM（Yet Another Manipulator）アーム** × 2（I2RT社製、固定バイマニュアル構成）
- カメラセット
- **NVIDIA RTX 5090**搭載ワークステーション（FastAPIサーバー、ポリシー推論、エージェント実行）

### 実験結果

Frontier AIエージェント（GPT-5.5 within Codex、Opus 4.7 within Claude Codeなど）は、**PushT`、`ピン立て`、`ジップタイ切断`**などの器用な操作タスクで99%成功率を達成した。さらに「GPUをマザーボードに挿入する」タスクでも評価が行われた。

AIシステムの比較では：

- GPT-5.5（Codex内）とOpus 4.7（Claude Code内）が最高性能で入れ替わり
- Kimi-2.6は両者にlagる
- **8体のエージェント使用**が単一エージェントより高い絶対スコアを記録——潜在解空間をより多く探索するため

### 残存する課題

NVIDIA themselves note bottlenecks:

- エージェントがログ読み取り、コード記述、デバッグ時はGPUリソースを十分に活用していない
- ロボット数增加時にMRUが減少倾向
- より複雑なタスクでは評価とリセットの自動化が困難

### 開発者視点での分析

ENPIREの意義は「**コーディングエージェントと同じ自己改善サイクルを、物理ロボットに適用できる可能性**」を示唆した点にある。ただし現時点では単純なタスク限定であり、現実世界の多様な状況への適用にはまだ距離がある。「自動評価システム」と「自動リセットシステム」の精度向上が次の課題である。

---

## Tencent、1万GPU超訓練クラスターの監視・最適化システム「ARGUS」を論文発表

Tencentは6月、1万GPU以上の訓練ワークロードに対応する監視・診断システム**ARGUS**の技術詳細をarXivで発表した。

### ARGUSの概要

ARGUSは「大規模訓練ワークロード向けの低オーバーヘッド、細粒度、常時オン追跡・リアルタイム分析システム」。3層構成：

- **Python層**: スケジューリングとデータ準備
- **フレームワーク層**: フェーズオーケストレーション
- **GPU実行層**: カーネル実行

### 實際的な運用実績

6ヶ月以上の実運用での実績：

- **4096 GPU**: ビデオ言語モデル訓練（ HunyuanVideo相關と推測）
- **512 GPU**: 音声モデル訓練
- **12,960 GPU**: MoE訓練（Hunyuan LLM相關と推測）

ARGUSにより発見・解決された実問題：

1. 計算ストラグラー
2. 通信リンク劣化
3. パイプラインバブル増幅
4. JITコンパイル阻塞
5. 通信症そうでMASKされた計算ストラグラー

### 開発者視点での分析

ARGUSの本当の価値は「**1万台GPU規模の訓練基盤を6ヶ月以上安定稼働させた実績**」にある。大規模AI開発において、訓練インフラの可視化と異常検出は модельそのものの性能と同じくらい重要。Tencentがこの規模で安定した訓練を続けられているということは底前のインフラ成熟度を示している。

---

## другие注目ニュース

### Meta、生成AIスタジオ「Llama Factory」構想——企業向けカスタマイズ強化

Metaは企业内部で生成AI的企业向けカスタマイズプラットフォーム「**Llama Factory**」構想を進めていると7月2日に伝わった。Mark Zuckerberg CEOは社内會議で「AIエージェントの進捗は期待ほど速くなかった」としつつも、Llamaシリーズの改善続けた強調した。

### TechCrunch、AI用語集を公開——「ハルシネーション」から「確率的ainanaling」まで

TechCrunchは7月3日、AI責任者のための包括的用語集を公開した。最新版では確率的ainanaling（確率的ainanaling）、孟ハルシネーションバリアント、エージェント型システムなど50音以上の用語を解説。初心から開発者まで幅広い層を想定している。

---

## まとめ

本周は**創薬×AI**と**ロボティクス×AI**の2つの軸で大きな動きがあった。

武田・Insilico提携は、AI創薬の商業化が前期発見段階でも大規模契約になることを確認した。他方、NVIDIAのENPIREは、AIエージェントの自己改善アプローチを物理世界に拡張する试探的な成果。実用化にはまだ多くの技術的課題が残されている。

TencentのARGUSは、大規模訓練基盤の運用知見が中国企業間で共有されつつあることを示唆しており、基盤モデル開発kapasitasの分散化傾向が続いている。

---

## 参考リンク

- [Takeda signs US$600M AI drug discovery deal with Insilico](https://www.artificialintelligence-news.com/news/takeda-insilico-ai-drug-discovery-deal/)
- [Mark Zuckerberg tells staff that AI agents haven't progressed as quickly as he'd hoped](https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/)
- [ENPIRE: Agentic Robot Policy Self-Improvement in the Real World](https://research.nvidia.com/labs/gear/enpire/)
- [ARGUS: Production-Scale Tracing and Performance Diagnosis for over 10,000-GPU Clusters (arXiv)](https://arxiv.org/abs/2606.20374)
- [Import AI 463](https://importai.substack.com/p/import-ai-463-self-improving-robots)

---

*（本文の情報は2026年7月4日時点のものです）*
