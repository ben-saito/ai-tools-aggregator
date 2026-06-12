# AI開発ニュースWeekly（2026年6月中旬版）

2026年6月第2週は、**Microsoft SkillOpt**のオープンソース公開、**Xiaomi MiMo Code**の登場、**Google DiffusionGemma**のリリース、そしてUCLAによる新ベンチマーク**ALE**など、複数の重要なリリースが重なりえた週となった。コーディングエージェント市場の競争が熾烈化する中、各社の差別化が鮮明になっている。

---

## Microsoft **SkillOpt**：エージェントスキルの自動最適化フレームワーク

Microsoft Research Asiaが、エージェントスキルの`.md`ドキュメントを数学的に自動最適化するフレームワーク**SkillOpt**をMITライセンスで公開した（[GitHub](https://github.com/microsoft/SkillOpt)）。

エージェントスキルは企業ユースケースで重要な役割を担うが、従来の最適化は手作業に大きく依存していた。SkillOptは深層学習的な制御（学習率、検証ゲート、モメンタム）をテキスト最適化に導入し、`propose-and-test`ループでスキルを反復的に改善する。

### 技術的な仕組み

- **編集予算（edit budget）** を学習率として機能させ、一度に適用する変更数を制限
- 成功例と失敗例をミニバッチに分離し、体系的な誤りを特定
- 検証セットでのスコア改善がない場合、変更は却下され拒否バッファに保存
- エポック末にslow updateを実行し、長期的な手続き的知識を伝達

### ベンチマーク結果

GPT-5.5を用いた場合、スキルのないベースラインに対して**+23.5ポイント**の改善。SWE-bench Verifiedでは82%（Codexハーネス）が達成されている。

特に注目すべき点として、**スキルアーティファクトは最大2,000トークン（中央値約920トークン）**であり、既存のハーネス間での移動が可能。CodexでトレーニングしたスキルをそのままClaude Codeにデプロイし、**+59.7ポイント**の改善が記録された例がある。

---

## Xiaomi **MiMo Code**：200ステップ以上の長文脈タスクでClaude Codeを上回る

XiaomiのMiMo AIチームは、终端原生のAIコーディングアシスタント**MiMo Code V0.1.0**をMITライセンスで公開した。内部ベータテストおよび576人の開発者调查显示、SWE-bench Proで**62% vs 55%**（Claude Code対比）と大幅に上回ることが明らかになった。

### クロスイールド памятьシステム

MiMo Codeの核心は**4層 памятьアーキテクチャ**にある：

- **Project Memory**（永続的な`MEMORY.md`ファイル）
- **Session Checkpoints**
- **Scratch Notes**
- **Per-task Progress Logs**

primary agentと並行して動作する独立した**checkpoint-writer サブエージェント**が存在し、メインエージェントがコード生成に集中している間に意思決定とプロジェクト状態を記録する。このアーキテクチャにより、200ステップ以上の長文脈タスクでも文脈丢失防止している。

### /dream コマンドと蒸留機能

- **`/dream`コマンド**：約7日ごとに過去のセッションをレビュー・重複排除・長期memoryに圧縮
- **蒸留機能**：過去のセッションから反復的なワークフローをマイニングし自動化

### ベンチマーク比較

| ベンチマーク | MiMo Code + MiMo-V2.5-Pro | Claude Code + Sonnet 4.6 |
|---|---|---|
| SWE-bench Verified | **82%** | 79% |
| SWE-bench Pro | **62%** | 55% |
| Terminal Bench 2 | **73%** | 69% |

ハーネス朋友的にも約5ポイントの改善があり、モデルではなくシステムとしての貢献が大きい。

---

## Google **DiffusionGemma**：256トークンを並列生成し自己修正

GoogleはGemma 4バックボーン 기반の**DiffusionGemma**をApache 2.0ライセンスで公開した。vLLMとのネイティブ統合がサポートされ、**256トークンブロックを並列で生成**する。

### アーキテクチャの革新性

標準言語モデルがタイプライター式に1トークンずつ生成するのに対し、DiffusionGemmaは：

- ランダムなプレースホルダートークン256個から開始
- 全トークン位置を同時に評価・確度の高い位置からロック
- 不確かな位置は次のパスで再評価（**自己修正**）
- 双方向attentionにより、後続のトークンも考慮

### 速度ベンチマーク（vLLM、FP8）

- **H100（batch=1）**: 1,008 tokens/sec（標準Gemma 4比**~5倍**）
- **H200（batch=1）**: 1,288 tokens/sec（標準比**~6倍**）

### 制約と適用場面

Google自ら認める通り、出力品質は標準Gemma 4に及市场。Local inferenceや低并发応答などGPUが遊休になる場面で有效。低并发クラウド応答ではbatch処理によりGPUがすでに饱和状態のため、利点较少。

vLLMとの統合 위해、per-request attention切り替えがTritonおよびFlashAttention 4バックエンドに実装された。

---

## **Agents' Last Exam（ALE）**：GPT-5.5がClaude Fable 5を破り首位に

UCLAのCenter for Responsible, Decentralized Intelligence（RDI）を中心に300人以上の領域専門家が参加して開発された新ベンチマーク**ALE**が公开发表された。

### ベンチマークの特徴

- **1,490タスク**（55の非物理産業サブドメイン）を収録
- **GCUA（Generalist Computer-Use Agent）** フレームワークを採用
- 5つの機能層（Brain、Eyes、Body、Hands、Feet）に基づく評価
- LLM-as-a-judge形式の占比は**6.8%**のみ——大半部分の評価が决定的コード 기반으로実行
- ベンチマーク汚染を防ぐため、プライベートタスク（约1,340個）は定期的にパブリックに交换

### リーダー每一位

| 順位 | ハーネス | モデル | Pass Rate |
|---|---|---|---|
| 1 | Codex | **GPT-5.5** | **24.0%** |
| 2 | Ale Claw | GPT-5.5 | 23.0% |
| 3 | Claude Code | Claude Fable 5 | 22.0% |
| 4 | OpenClaw | GPT-5.5 | 21.1% |
| 5 | Cursor CLI | composer-2.5 | 20.4% |

最难阶级「Last-Exam tier」では大多数の構成が**0.0%**を記録。現在のAIエージェントが実際の業務ワークフローで経済的に価値を生み出すにはまだ大きく欠けていることが示された。

---

## Prometheus：120億ドルで「人工汎用エンジニア」を目指す

Jeff BezosとGoogle Life Sciencesの元共同創業者Vik Bajajが手がける**Prometheus**が、120億ドルの資金調達を完了した。評価額は410億ドルに達し、投資家にはBezos本人的に加えJPMorgan Chase、Goldman Sachs、BlackRockなどが名を連ねる。

Prometheusが掲げるのは「**Artificial General Engineer（人工汎用エンジニア）**」——航空エンジンから医薬品化合物まで、複雑な物理システムの設計・製造を自動化するという野心的な目標だ。Bezos自身が「労働力の稀缺（labor scarcity）」と呼ぶ世界を実現し、AIが人間以上の生産性をもたらす다고主張しているが、これは多くの研究者から批判も浴びている。

技術的な焦点は**物理AI**——シミュレーション、物理推論、リアルタイム制御を組み合わせたシステムとなる。従来CAE（Computer-Aided Engineering）の領域だった業務をAIで代替するビジョンは、航空・自動車・製薬各社との協業で具体化されつつある。

---

## Claude Cowork：開発者ツールの非開発業務への拡張

Anthropicは**Claude Code**の成功を踏まえ、macOSデスクトップアプリケーション向けに新機能**Cowork**を開始した。Claude Maxプラン（月額100〜200ドル）の限定リサーチプレビューとして提供される。

注目すべきは開発の背景だ。Claude Codeユーザーの利用パターンを分析したところ、コード生成以外のタスクに悪用するユーザーが急増っていた。旅行の研究、スライド作成、メール整理、サブスク解除、ハードディスクからの結婚写真の恢复——。「コードを書く道具」が「なんでもやる汎用エージェント」になりつつある现实を見つけたAnthropicが、これを正式な製品として組み込んだ。

Coworkはフォルダを開き、乱雑なレシート山から経費報告書を自動生成するようなタスクをこなすとされる。AnthropicのBoris Cherny氏によれば、「Claude Code以来、ユーザーが信じられないほど多様なタスクにツールを流用している」という。

---

## 参考リンク

- [Microsoft SkillOpt - GitHub](https://github.com/microsoft/SkillOpt)
- [Xiaomi MiMo Code - GitHub](https://github.com/XiaomiMiMo/MiMo-Code)
- [Google DiffusionGemma - 発表ブログ](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/)
- [Agents' Last Exam - 公式サイト](https://agents-last-exam.org/)
- [Prometheus raises $12B - TechCrunch](https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/)
- [Anthropic launches Cowork - VentureBeat](https://venturebeat.com/technology/anthropic-launches-cowork-a-claude-desktop-agent-that-works-in-your-files-no)

---

*（本文の情報は2026年6月12日時点のものです）*
