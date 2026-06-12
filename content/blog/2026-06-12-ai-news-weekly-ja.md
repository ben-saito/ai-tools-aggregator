# AI開発ニュースWeekly（2026年6月12日）

今週のAI開発者は Microsoft's **SkillOpt**、Xiaomi の **MiMo Code**、Google の **DiffusionGemma** など複数の重要なリリース迎来了。また UCLA の新ベンチマーク **ALE** では GPT-5.5 が Claude Fable 5 を僅差でかわす結果となった。

---

## Microsoft が **SkillOpt** をオープンソース公開 —— エージェントスキルの自動最適化が可能に

Microsoft Research Asia が、エージェントスキルの `.md` ドキュメントを数学的に最適化できるフレームワーク **SkillOpt** を MIT ライセンスで公開した（[GitHub](https://github.com/microsoft/SkillOpt)）。

エージェントスキルは企業ユースケースで重要な役割を担うが、従来の最適化は手作業に大きく依存していた。SkillOpt は 深層学習的な制御（学習率、検証ゲート、モメンタム）をテキスト最適化に導入し、`propose-and-test` ループでスキルを反復的に改善する。

### 技術的な仕組み

- **編集予算（edit budget）** を学習率として機能させ、一度に適用する変更数を制限
- 成功例と失敗例をミニバッチに分離し、体系的な誤りを特定
- 検証セットでのスコア改善がない場合、変更は却下され拒否バッファに保存
- エポック末に slow update を実行し、長期的な手続き的知識を伝達

### ベンチマーク結果

GPT-5.5 を用いた場合、スキルのないベースラインに対して **+23.5ポイント** の改善。SWE-bench Verified では 82%（Codex ハーネス）が達成されている。

特に注目すべき点として、**スキルアーティファクトは最大 2,000トークン（中央値約 920トークン）** であり、既存のハーネス間での移動が可能。Codex でトレーニングしたスキルをそのまま Claude Code にデプロイし、**+59.7ポイント** の改善が記録された例がある。

---

## Xiaomi が **MiMo Code** を公開 —— 200ステップ以上の長文脈タスクで Claude Code を上回る

Xiaomi の MiMo AI チームは、终端原生の AI コーディングアシスタント **MiMo Code V0.1.0** を MIT ライセンスで公開した。内部ベータテストおよび 576 人の開発者调查显示、SWE-bench Pro で **62% vs 55%**（Claude Code 対比）と大幅に上回ることが明らかになった。

### クロスイールド памятьシステム

MiMo Code の核心は **4層 памятьアーキテクチャ** にある：

- **Project Memory**（永続的な `MEMORY.md` ファイル）
- **Session Checkpoints**
- **Scratch Notes**
- **Per-task Progress Logs**

-primary agent と並行して動作する独立した **checkpoint-writer サブエージェント** が存在し、メインエージェントがコード生成に集中している間に意思決定とプロジェクト状態を記録する。このアーキテクチャにより、200 ステップ以上の長文脈タスクでも 文脈丢失防止している。

### /dream コマンドと蒸留機能

- **`/dream` コマンド**：約7日ごとに過去のセッションをレビュー・重複排除・長期 memory に圧縮
- **蒸留機能**：過去のセッションから反復的なワークフローをマイニングし自動化

### ベンチマーク比較

| ベンチマーク | MiMo Code + MiMo-V2.5-Pro | Claude Code + Sonnet 4.6 |
|---|---|---|
| SWE-bench Verified | **82%** | 79% |
| SWE-bench Pro | **62%** | 55% |
| Terminal Bench 2 | **73%** | 69% |

ハーネス朋友的にも約5ポイントの改善があり、モデルではなくシステムとしての貢献が大きい。

---

## Google が **DiffusionGemma** をリリース —— 256トークンを並列生成し自己修正

Google は Gemma 4 バックボーン 기반の **DiffusionGemma** を Apache 2.0 ライセンスで公開した。vLLM とのネイティブ統合がサポートされ、**256トークンブロックを並列で生成** する。

### アーキテクチャの革新的性

標準言語モデルがタイプライター式に1トークンずつ生成するのに対し、DiffusionGemma は：

- ランダムなプレースホルダートークン256個から開始
- 全トークン位置を同時に評価・確度の高い位置からロック
- 不確かな位置は次のパスで再評価（**自己修正**）
- 双方向 attention により、後続のトークンも考慮

### 速度ベンチマーク（vLLM、FP8）

- **H100（batch=1）**: 1,008 tokens/sec（標準 Gemma 4 比 **~5倍**）
- **H200（batch=1）**: 1,288 tokens/sec（標準比 **~6倍**）

### 制約と適用場面

Google 自ら認める通り、出力品質は標準 Gemma 4 に及市场。Local inference や低并发応答など GPU が遊休になる場面で有效。低并发クラウド応答では batch 处理により GPU がすでに饱和状態のため、利点较少。

vLLM との統合 위해、per-request attention 切り替えが Triton および FlashAttention 4 バックエンドに実装された。

---

## **Agents' Last Exam（ALE）** —— GPT-5.5 が Claude Fable 5 を破り首位に

UCLA の Center for Responsible, Decentralized Intelligence（RDI）を中心に300人以上の領域専門家が参加して開発された新ベンチマーク **ALE** が公开发表された。

### ベンチマークの特徴

- **1,490タスク**（55の非物理産業サブドメイン）を収録
- **GCUA（Generalist Computer-Use Agent）** フレームワークを採用
- 5つの機能層（Brain、Eyes、Body、Hands、Feet）に基づく評価
- LLM-as-a-judge 形式の占比は **6.8%** のみ ——  大部分の評価が决定的コード 기반으로実行
- ベンチマーク汚染を防ぐため、プライベートタスク（约1,340個）は定期的にパブリックに交换

### リーダー每一位

| 順位 | ハーネス | モデル | Pass Rate |
|---|---|---|---|
| 1 | Codex | **GPT-5.5** | **24.0%** |
| 2 | Ale Claw | GPT-5.5 | 23.0% |
| 3 | Claude Code | Claude Fable 5 | 22.0% |
| 4 | OpenClaw | GPT-5.5 | 21.1% |
| 5 | Cursor CLI | composer-2.5 | 20.4% |

最难阶级「Last-Exam tier」では大多数の構成が **0.0%** を記録。現在の AI エージェントが実際の業務ワークフローで経済的に価値を生み出すにはまだ大きく欠けていることが示された。

---

## 他の注目ニュース

### Prometheus —— Jeff Bezos が $12B を調達し「物理世界的 AGI」目指す

Bezos 支援のスタートアップ Prometheus が $12B を調達し、$41B の評価itada達成。heavy engineering や drug design の自動化を目指す「artificial general engineer」構築が目標。

### Theker —— $85M を調達し特化しない工場ロボット開発

Dropout 形式の工場ロボット開発を目指す Theker が $85M を調達。固定形状に依存しない再構成可能なマシン设计が特徴。

### Deezer —— AI 生成音楽を検出するツールを公开发表

Spotify、アップ、Apple Music などのプレイリストから AI 生成音楽を特定するツールを Deezer が公开发表。

### DoorDash —— プロンプトと写真で注文できる AI チャットボット

「Ask DoorDash」と名付けられた新チャットボットでは、餐厅をスクロールする代わりに自然な言葉で商品を検索できる。

---

## 参考リンク

- [Microsoft SkillOpt - GitHub](https://github.com/microsoft/SkillOpt)
- [Xiaomi MiMo Code - GitHub](https://github.com/XiaomiMiMo/MiMo-Code)
- [Google DiffusionGemma - 発表ブログ](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/)
- [Agents' Last Exam - 公式サイト](https://agents-last-exam.org/)
- [TechCrunch AI Feed](https://techcrunch.com/category/artificial-intelligence/feed/)
- [VentureBeat](https://venturebeat.com/feed/)

---

*本文の情報は2026年6月12日時点のものです。*
