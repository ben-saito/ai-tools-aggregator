# AI開発ニュース Weekly — 2026年6月第2週

AnthropicのClaude Fable 5が米国政府的命令により緊急停止、Googleは「faithful uncertainty」で幻覚問題への新アプローチを発表、拡散モデルによるテキスト生成的高速化も話題に。AI業界はコンプライアンスと性能向上の両立を迫られている。

---

## Anthropic、Claude Fable 5 / Mythos 5の公開アクセスを全面停止 — 米国政府命令受け

米国政府は6月12日（現地時間）、Anthropicに対し**Claude Fable 5およびClaude Mythos 5**への外国籍ユーザーのアクセスを差し止めるよう命じた。Anthropicはこれを受け、両モデルへの全公開アクセスを即時停止した。企業顧客や社内ユーザーも含めた全面的な遮断である。

発端とされるのは、著名ジャイルブローカー「**Pliny the Liberator**」が6月10日に公開したFable 5のジャイルブレイク。安全護策をバイパスし、爆発物・麻薬合成の指導書を抽出ことに成功したと主張した。Anthropicは政府からの証拠が「口頭のみ」で具体性に欠けると指摘し、「理解不足だ」としている。

**企業への影響は甚大だ**。現在のFable 5/Mythos 5セッションはエラーで終了し、新しいクエリはOpus 4.8などの旧モデルに自動ルーティングされる。Anthropicは声明で「他のAnthropicモデルへの影響はない」としているが、3月に米国防総省がAnthropicを「サプライチェーンリスク」に指定した事例もあり、**単一プロバイダーへの依存がもたらす運用リスク**が改めて浮き彫りになった。

**開発者にとっての本当の教訓**は、cloud-based frontier modelは政府介入に対して無防備だという事実。 enterprisesはprovider多元化とオンデバイス推論の導入を緊急に見直す必要がある。

---

## Google、研究者が「Faithful Uncertainty」を提案 — 幻覚削減の「新範疇」

Googleの研究チームは6月12日、**「faithful uncertainty」**と呼ぶ新しいメタ認知アプローチを論文として公開した。LLMが「知っていること」と「知らないこと」の境界を認識し、不確実性を適切に表現できるようにする手法だ。

従来、幻覚削減努力は「知識境界の拡大」に集中してきた。しかしモデルの容量は有限であり、知識の長尾は無限に近い。25%のエラー率を5%に削減しようとすると、**正しい回答の52%までが捨てられる**という（「utility tax：効用税」）。この代償太大了，以至于 enterprisesはゼロ・幻覚目標を放棄し、自信過剰な幻覚を生成する状態を受け入れざるを得なかった。

Faithful uncertaintyの核心は**言語的不確実性（言葉による疑義表現）**と**内的不確実性（実際の統計的信頼度）**を一致させること。これにより、モデルが「My best guess is...」のように不確実性を適切に表現でき、幻覚ではなく「不確実な仮説」として情報を提供できる。

**agentic AIへの直接的影響**がある。自律型システムが自身の知識不足を正確に判断できれば、外部ツールや検索APIの呼び出しを適切にトリガーできる。言い換えれば、「知らないことを知らない」状態からの脱却が、agentic workflowの信頼性を大きく向上させる。

---

## Xiaomi、MiMo Code V0.1.0をオープンソース化 — 200ステップ以上の長距離タスクでClaude Codeを上回る

Xiaomiは6月10日、**MiMo Code V0.1.0**をMITライセンスで公開した。Xiaomiによると、200ステップ以上の長距離・マルチステップタスクでAnthropicのClaude Codeを上回る性能を達成したという。

最大の特徴は**4層構造の永続メモリシステム**だ：

- `MEMORY.md`（プロジェクトメモリ）
- セッションチェックポイント
- スクラッチノート
- タスクごとの進捗ログ

メインのコーディングagentが работыを進める間、独立した「checkpoint-writer」サブagentがリアルタイムでメモを更新する。アーキテクトがブループリントを更新し続けるような構図だ。コンテキストウィンドウが限界に近づくと、サブagentが過去の决策・Conventionを检索して狀態を復元する。

**ベンチマーク結果**（Xiaomi社内、ベンダー調査、576開発者）：

| ベンチマーク | MiMo Code + MiMo-V2.5-Pro | Claude Code + Sonnet 4.6 |
|---|---|---|
| SWE-bench Verified | 82% | 79% |
| SWE-bench Pro | 62% | 55% |
| Terminal Bench 2 | 73% | 69% |

注目すべきは、ハーネス本身的約5ポイントの差がモデル外の性能向上に寄与していること。インストールは`curl -fsSL https://mimo.xiaomi.com/install | bash`または`npm install -g @mimo-ai/cli`で可能だ。

---

## Google、DiffusionGemmaをオープンソース化 — 256トークンを並列生成し自己訂正

Googleは6月11日、**DiffusionGemma**をApache 2.0ライセンスで公開した。拡散モデル（画像生成でおなじみの手法）をテキスト生成に適用した実験的モデルで、**256トークンのブロックを並列生成**する。

標準言語モデルがタイプライターのように1トークンずつ逐次生成するのに対し、DiffusionGemmaはまず256個のランダムプレースホルダートークンから出発し、反復的にブロック全体を精錬する。各パスで自信度の高い位置を固定し、不確実な位置は次のパスで再評価する。

**性能特性**：

- **生成速度**：H100（FP8）で標準 Gemma 4 比約5倍、H200で約6倍
- **自己訂正機能**：誤ったトークンを確定後も再評価可能
- **双方向コンテキスト**：ブロック内の全位置が相互に attend
- **VRAM要件**：量子化状態で18GB（RTX 4090/5090でも動作）

欠点として、Google自身が認めるように**出力品質は標準 Gemma 4 に及ばない**。高品質が必要な用途では標準 Gemma 4 の利用が推奨される。高スループットクラウドサービングよりも、**単一ユーザー・低同時実行量のローカル推論**で真価を発揮する。

vLLMへの統合が行われ、拡散言語モデルの OSS サービングが初めて実用的になった。

---

## 調査報告：1,500ドルで基盤モデルをゼロから訓練可能

6月10日の報告によると、研究者チームは**約1,500ドル**で1Bパラメータ推論モデルをゼロから訓練し、より大規模なのLLMに匹敵するベンチマーク結果を達成した。

インターネットスケールのデータも必要としない这一結果嘔，当前のAI開発における計算資源とデータの壁が崩れつつある可能性を示唆している。コスト障壁の低下が、小規模チームや獨立開発者による基盤モデル開発の敷居を大幅に下げることになる。

---

## 参考リンク

- [Anthropic blocks all public access to Claude Fable 5, Mythos 5 (VentureBeat)](https://venturebeat.com/ai/anthropic-blocks-all-public-access-to-claude-fable-5-mythos-5-following-us-government-order-what-enterprises-should-do)
- [Google researchers introduce 'faithful uncertainty' (VentureBeat)](https://venturebeat.com/ai/google-researchers-introduce-faithful-uncertainty-allowing-llms-to-offer-best-guesses-instead-of-hallucinations)
- [Xiaomi MiMo Code V0.1.0 (GitHub)](https://github.com/Xiaomi/mimo)
- [Google DiffusionGemma (Google DeepMind)](https://deepmind.google/blog/)
- [DiffusionGemma on vLLM (vLLM Blog)](https://vllm.github.io/)

---

*（本文の情報は2026年6月14日時点のものです...）*
