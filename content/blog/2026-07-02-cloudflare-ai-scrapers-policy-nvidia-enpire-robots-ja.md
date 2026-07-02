# CloudflareがAIスクレイピング有料化、NVIDIA ENPIREが物理ロボットで自己改善 — 2026年7月第2週

2026年7月第2週、**Cloudflare**がAI企業向けスクレイピングポリシーを大幅に見直し、9月15日までに検索用クローラーとAI訓練用クローラーを分離するよう義務化した。この動きはWeb上のコンテンツ価値に対する新しいお金循環の始まりを示唆している。一方、NVIDIAは**ENPIRE**というフレームワークで、物理ロボットにAIエージェントと同じ自己改善ループを実現し、労働の自動化における新しいパラダイムを提示した。

---

## Cloudflare、AIクローラー有料化の期限を設定

TechCrunchの報道によると、Cloudflareは**2026年9月15日**を期限として、AI企業に対しWebクローラーを「検索用」と「AI訓練用」の2種類に分離することを義務化した。この期限までに分離が完了しないクローラーは、デフォルトで多くの出版社のサイトからのアクセスがブロックされる可能性がある。

### 背景：訓練データ問題の顕在化

Cloudflareのこの政策転換は、出版各社が高品質なWebコンテンツのAI訓練への無許諾使用に対して法的な対抗措置を取り始めた潮流と一致する。The Guardian、The New York Timesなど大手出版社はすでにAI企業との間に法的紛争を抱えており、コンテンツ価値の適切な対価を求める声が業界全体に広がっている。

### 開発者への影響

AI企業にとって、この変化は具体的に以下の影響を及ぼす：

- **クローラー設計の二重化**：検索用ボットのIP/ユーザーエージェントと訓練用ボットのそれらを明確に区別する運用が必要
- **ブロックリスクの増加**：期限後の未対応クローラーはパブリッシャーサイト全体から遮断される可能性
- **正規のデータ契約への誘導**：Content at scale、Numeric proof、Spinnerなどの正規データ提供商への移行が加速

### 技術的側面

Cloudflareはまた、`/.well-known/ai-bot-policy.txt`という新しいRFC対応規格を提案している。これはサイト所有者がAIクローラーに対する自家薬籠すべきPoliciesをJSON形式で宣言できる仕組みで、robots.txtの拡張版として機能する。

---

## NVIDIA ENPIRE：物理ロボットがAIエージェントのように自己改善する時代

NVIDIAの研究者であるENPIREチームは6月29日（Import AI #463で報告）、物理ロボットにAIコーディングエージェントと同じ自律的実験・実行ループを実現するソフトウェア**ENPIRE**を発表した。PodRatechの設立も視野に入れたこの研究は、超知能が物理世界に自身をインスタンス化しようとする試みの最初の段階を示すものとして注目されている。

### ENPIREのアーキテクチャ

ENPIREは4つのコアモジュールで構成されている：

- **Environment（EN）モジュール**：自動リセットと検証機能を提供
- **Policy Improvement（PI）モジュール**：ポリシーの改良を開始
- **Rollout（R）モジュール**：単数または複数の物理ロボットでポリシーを評価
- **Evolution（E）モジュール**：コーディングエージェントがログを分析し、失敗モードに対処するための訓練インフラとアルゴリズムコードを改良

「ENPIREはコーディングエージェントと同じ原理で動作する」とNVIDIAは説明する。足場（scaffold）が物理ロボットを監督し、ボックスにピンを整理する、zip tieを切る、GPUを マザーボードに挿入するなどのタスクを遂行させる。

### ハードウェア詳細

各実験ステーションは以下の構成：
- **YAM（Yet Another Manipulator）腕** × 2（I2RT社製、固定バイマニュアル構成）
- カメラセット
- **FastAPIサーバー、ポリシー推論、エージェント**を実行するワークステーション（NVIDIA RTX 5090搭載）

### 性能結果

NVIDIAの報告によると、ENPIREは以下の挑戦的な器用な操作タスクで99%の成功率を達成：
- PushT
- ピンオーガナイザー（ピンボックスに分類）
- ジップタイを切る

### AIシステム間の比較

複数のLLM/агент系统在ENPIRE環境での性能比較：

| システム | 性能 |
|---------|------|
| GPT-5.5（Codex内） | 最高クラス、Opus 4.7（Claude Code内）とトレードオフ |
| Opus 4.7（Claude Code内） | GPT-5.5とトレードオフで最高クラス |
| Kimi-2.6 | 劣る結果 |
| エージェント数8台 | 単一エージェントより早く高スコアに到達 |

結果は大規模агент数の導入が潜在的な利益を生むことを示しているが、「コーディングエージェントはログ読み取り、コード記述、デバッグ、语言モデルバックボーンの待機中はロボットリソースを完全には活用していない」（NVIDIA論文より）との課題も報告されている。

---

## Tencent ARGUS：1万台GPUクラスタの監視システム

Import AIが伝えたところによると、Tencentは10,000 GPU以上のクラスタで6ヶ月以上安定動作している内部監視システム**ARGUS**の詳細を公开した。ARGUSは「大規模訓練ワークロード向けの低オーバーヘッド、細粒度、常時オン追跡・リアルタイム分析システム」と定義されている。

### 対応事例

TencentはARGUSを使用して以下の問題を診断：
- 計算ストágler（遅延ノード）
- 通信リンクの劣化
- パイプラインバブル増幅
- JITコンパイルのブロッキング
- 通信症状にマスクされた計算ストágler

### 訓練ジョブ规模

TencentがARGUSを適用した訓練ジョブには以下が含まれる：
- 4,096 GPUビデオ言語モデル訓練（「HunyuanVideo」に対応）
- 512 GPU音声モデル訓練
- 12,960 GPU MoE訓練（「Hunyuan LLM」に対応）

---

## 参考リンク

- [Cloudflare's new policy pushes AI companies to pay for publishers' content (TechCrunch)](https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/)
- [ENPIRE: Agentic Robot Policy Self-Improvement in the Real World (NVIDIA research)](https://research.nvidia.com/labs/gear/enpire/)
- [ENPIRE arXiv](https://arxiv.org/abs/2606.19980)
- [ARGUS: Production-Scale Tracing and Performance Diagnosis for over 10,000-GPU Clusters (arXiv)](https://arxiv.org/abs/2606.20374)
- [Import AI 463: Self-improving robots; a 10k Chinese GPU cluster; and an elegiac essay for the human era](https://importai.substack.com/p/import-ai-463-self-improving-robots)

---

*本文の情報は2026年07月02日時点のものです。*
