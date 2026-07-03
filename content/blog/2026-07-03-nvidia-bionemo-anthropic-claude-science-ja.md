# NVIDIA BioNeMo × Anthropic Claude Science — 創薬研究のパラダイムシフト

2026年7月2日、AnthropicはNVIDIA BioNeMo Agent Toolkitとの正式統合を発表し、**Claude Science**のパブリックベータ版における生命科学研究ワークフローの大幅な高速化を実現した。18のトップ20製薬企業が本番環境にNVIDIA BioNeMoをデプロイしている状況で、Claude Scienceは自然言語で科学者の意图を解釈し、BioNeMoのGPU最適化された計算リソースを直接オーケストレーションする。

---

## BioNeMo Agent Toolkitとは

NVIDIA BioNeMoは、世界で最も包括的なGPUアクセラレーテッドコンピューティングスタック」と呼ばれる一身 Salto Saltoだ。物理ハードウェア、ソフトウェアフレームワーク、運用ライブラリ、科学モデル、マイクロサービス、ドメイン固有ツールを統合し、研究者がSophisticatedなワークフローを実行反復する速度を高める。

Agent Toolkitは、NVIDIAアクセラレーテッドモデルを**callable skills**としてパッケージ化する。特殊な科学 agentsは、ゲノム解析、タンパク質構造予測創薬設計に必要な各計算ツールの役割分担、数据入出力形式、引数を正確に理解する。

### 主要性能数値

- **RAPIDS-singlecell**：130万セル規模の 前処理・クラスタリングを52分から**25秒**に短縮
- **nvMolKit**：化合物類似性検索・コンフォーマー生成を最大**3000倍**高速化
- **NVIDIA Parabricks**：ゲノム解析を数時間から数分に

---

## Claude Scienceのアーキテクチャ

Claude Scienceは、**自然言語意図を運用的行動に変換する**AIワークベンチだ。科学者は予測モデルの手動設定、ネットワークエンドポイントの設定、複雑なソフトウェア環境の管理を避けるできる。

研究者が特定の研究タスクを平易なテキストで描述すると：

- ゲノム配列の解析
- 正確なタンパク質構造の予測
- 可能性のある分子架け橋の設計

Claude Scienceはドメイン特化 agentsと協調し、確立された実験・計算プロトコル（ゲノム科学、構造生物学 chemo情報学、臨床研究）に従って実行をorchestrateする。

### 利用可能なモデル群

| モデル | 能力 |
|--------|------|
| **Evo 2** | ゲノム配列解析 |
| **Boltz-2** | 分子動力学 |
| **OpenFold3** | タンパク質構造予測 |

---

## 創薬ワークフローへの実適用

がん標的の阻害剤設計を例にとる。科学者が既知のがん原因抗原突然変異を特定した後、数多くの潜在的な阻害剤設計するようClaudeに依頼する。Claude Science × BioNeMo Agent Toolkit × NVIDIA NIMマイクロサービスが、以下のパイプライン全体をアクセラレートする：

1. 高精度阻害剤予測
2. 候補分子の最適化
3. 后续の検証

GPU最適化されたNIMマイクロサービス（HBMコンテナ、提供済み）は安定なAPIエンドポイントを通じて起動され、企業の本番環境に最適化された推論を実現する。

---

## エージェントAIの計算ツール依存

ここでの重要な論点は、**AI agentsの実行速度がその基盤計算ツールの性能に制約される**ことだ。单一の包括的ワークフローでは、agentsは以下を実行する必要がある：

-  대규모化合物ライブラリのフィンガープリント
- 期待される分子hitsのクラスタリング
- トップ構造候補のコンフォーマー生成
- ゲノムコンテキスト解析
- 撹乱応答の比較
- 次の物理実験室の推奨

これらの各ステップが高速化されることで、agentは formerlyはオフラインバッチジョブだった単一セル解析をnearリアルタイムで意思決定ループに組み込めるようになる。

---

## 開発者向けリソース

NVIDIA BioNeMo Agent Toolkitは**open and harness-agnostic**な設計だ。異なるagentフレームワークや独立した企業研究プラットフォーム間で同一の科学skillsが一貫して機能することを保証する。

- NVIDIA Developer Resources: https://developer.nvidia.com/
- GitHubリポジトリ: BioNeMo Agent Toolkitレポジトリよりダウンロード可能
- パブリックベータ段階では、Anthropicが直接フィードバック征集を実施中

---

## 参考リンク

- [NVIDIA BioNeMo accelerates Anthropic Claude Science — AI News](https://www.artificialintelligence-news.com/news/nvidia-bionemo-accelerates-anthropic-claude-science/)
- [Anthropic Claude Science](https://www.anthropic.com/claude-science)
- [NVIDIA BioNeMo](https://www.nvidia.com/bionemo)
- [NVIDIA NIM microservices](https://www.nvidia.com/nim)

---

*本文の情報は2026年7月2日時点のものです。*
