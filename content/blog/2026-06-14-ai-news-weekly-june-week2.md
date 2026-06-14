# AI開発ニュースまとめ（2026年6月第2週）

2026年6月第2週のAI開発ニュースをまとめる。GPT-5.5とClaude Fable 5のベンチマーク対決、Googleの拡散モデルによるテキスト生成高速化、Microsoftのオープンソースエージェントスキル最適化フレームワークなど、エンタープライズAIと開発者にとって重要な話題が多い。

---

## GPT-5.5がClaude Fable 5を下回る：新しいエージェントベンチマーク「ALE」の衝撃

UC BerkeleyのCenter for Responsible, Decentralized Intelligence（RDI）は2026年6月10日、**Agents' Last Exam（ALE）**という新しいベンチマークを発表した。このベンチマークは、AIが経済的に価値のある長 horizonteのプロフェッショナルワークフローを実行できるかを測定するために設計された。

**GPT-5.5（Codexハーネス使用）が24.0%の合格率で1位**となり、AnthropicのClaude Fable 5（22.0%）を初めて下回った。Claude Code + Claude Fable 5の組み合わせは3位となった。

### ALEの革新的アプローチ

従来のベンチマークが静的问答や狭いテキストベース環境でモデルを評価していたのに対し、ALEは**Generalist Computer-Use Agent（GCUA）フレームワーク**を採用している。エージェントは以下5つの機能レイヤーを行き来する必要がある：

- **Brain（推論）**
- **Eyes（視覚知覚）**
- **Body（オーケストレーション）**
- **Hands（ツール起動）**
- **Feet（ランタイムサブストレート）**

さらに、ALEは**LLM-as-a-judge評価をわずか6.8%**のみ使用し，其余はコードベースの決定論的評価を採用。SEC書類の解析や3Dメッシュ生成など、本物の専門家のグランド-truth参照とuratfactを比較する。

### ベンチマーク結果

| ランク | エージェントハーネス | モデル | 合格率 |
|--------|---------------------|--------|--------|
| 1 | Codex | GPT-5.5 | 24.0% |
| 2 | Ale Claw | GPT-5.5 | 23.0% |
| 3 | Claude Code | Claude Fable 5 | 22.0% |
| 4 | OpenClaw | GPT-5.5 | 21.1% |
| 5 | Cursor CLI | composer-2.5 | 20.4% |

1,490タスクインスタンスで_launchし、5,000タスクへのスケールを目指している。55の非物理産業サブドメインをカバーしている。

---

## GoogleのDiffusionGemma：256トークンを並列生成し自己修正するテキスト生成モデル

Googleは2026年6月11日、**DiffusionGemma**をオープンソースで公開した。Gemma 4バックボーン基础上构建され、Apache 2.0ライセンスで提供される。このモデルは画像生成でおなじみの**拡散 principleをテキスト生成に適用**した最初の本格的な製品モデルである。

### 技術的革新

標準言語模型がタイプライターのように1トークンずつ生成するのに対し、DiffusionGemmaは**256トークンブロックを並列で生成**する。各トークン位置が他のすべての位置 attendし、モデルが最も自信のある位置から順に確定していく。不確かな位置は次のパスでランダム化され、再評価される。

このアーキテクチャにより2つの能力が導かれる：

- **自己修正**：誤ったトークンを確定した autoregressiveモデルと異なり、DiffusionGemmaは低信頼度位置を特定して次のパスで再評価できる
- **双方向コンテキスト**：ブロック内の全位置が同時に attendするため、制約付き生成タスクに構造的に適している

### ベンチマーク結果

vLLMベンチマークによると、FP8量化されたDiffusionGemmaは以下を達成：

- **H100（batch size 1）**: 1,008 tokens/秒（標準autoregressive比5倍）
- **H200**: 1,288 tokens/秒（同6倍）

微調整されたSudokuソルバーでは、baseモデルが0%解読から80%成功率に向上し、収束ステップ数も48から12に減少した。

### 制約と用途

速度優位性は展開環境に依存する：

- **優位**：ローカル推論、単一ユーザーアプリケーション、低同時実行サービス
- **不利**：数百の同時リクエストを処理する高吞吐量クラウドサービス

Googleは品質に関する正直な注記を提供：「最大品質が必要なアプリケーションでは、標準Gemma 4のデプロイをお勧めします」

---

## MicrosoftのSkillOpt：モデル重みを変更せずにAIエージェントスキルを自動アップグレード

Microsoftは2026年6月11日、**SkillOpt**をMITライセンスでオープンソース公開した。AIエージェントスキル（.mdファイルとして保存される命令セット）を数学的に検証された方法で自動最適化するフレームワークである。

### エージェントスキルの課題

エージェントスキルは'entrepriseユースケースにモデル適応するための重要メカニズムだが、最適化は手動の「あてずっぽうゲーム」になりがちだった。スキル文档はunderlyingモデルのパラメータと異なり、訓練不可能だったためである。

Microsoft Research AsiaのYifan Yang氏によると、「破綻点はチームがスキルを変更できるかどうかではなく、変更が改善であることを保証できないことです。3つの失敗モードがあります：ステップサイズ制御がない（スキルがdrift）、検証がない（修正が静かにパフォーマンスをregressさせる）、否定的メモリがない（同じ失敗した編集が繰り返し現れる）」

### SkillOptのアプローチ

SkillOptは**深層学習スタイルの最適化 disciplineをテキストにインポート**する。、反復的なpropose-and-testループで動作する：

1. 凍結されたターゲットモデルがバッチタスクを実行し、実行軌跡を生成
2. オフラインオプティマイザモデルが軌跡を分析し、成功と失敗を分離
3. 構造的な追加/削除/置換編集を提案
4. 重複や矛盾をフィルタリングし、期待効用でランキング
5. 学習率、検証ゲート、モメンタムを適用して編集を適用

重要なのは、**underlyingモデルの重みを変更せずにスキル文档のみを更新**することである。

### ベンチマーク結果

様々な業界ベンチマークで、SkillOptは既存ベースラインを outperformingし、GPT-5.5やQwenなどのモデルで精度を大幅に向上させた。例えば、ungated書き換えがGPT-5.5 on SpreadsheetBenchを41.8から41.1に低下させた例が示されている——数学的検証なしでの編集がいかに那么容易くパフォーマンスを損なうかを示している。

---

## XiaomiのMiMo Code：200+ステップの長タスクでClaude Code outperforming

Xiaomiは2026年6月10日、**MiMo Code V0.1.0**をMITライセンスでオープンソース公開した。OpenCodeをforkし、SQLite FTS5フルテキスト検索による4層メモリシステムを実装したterminal-native AIコーディングアシスタントである。

### メモリアーキテクチャ

MiMo Codeの核心は**cross-session memoryシステム**である：

- **Project Memory（`MEMORY.md`）**：永続的なプロジェクト情報
- **Session Checkpoints**：セッショ checkpoints
- **Scratch Notes**：スクラッチノート
- **Per-task Progress Logs**：タスクごとの進捗ログ

primaryコーディングエージェントが работуに集中している間、独立した「checkpoint-writer」サブエージェントがリアルタイムで blueprintsを更新する。これは construction請負業者と專門建築家の比喻で説明される：主エージェントが物理構造の構築に集中している間、サブエージェントがリアルタイムで意思決定、課題、地形を記録する。

### ベンチマーク結果

MiMo Code + MiMo-V2.5-Proは、Claude Code + Claude Sonnet 4.6と比較して以下を達成：

- **SWE-bench Verified**: 82% vs 79%
- **SWE-bench Pro**: 62% vs 55%
- **Terminal Bench 2**: 73% vs 69%

ハーネス自体は純粋にエージェントシステム起因でそれぞれ約5ポイント gain贡献している（モデル自体は同じ）。

### インストール

```bash
# macOS/Linux
curl -fsSL https://mimo.xiaomi.com/install | bash

# Windows (npm)
npm install -g @mimo-ai/cli
```

---

## Googleの「Faithful Uncertainty」：ハルシネーションの代わりに「最良の推測」を提供

Google研究者は2026年6月12日、**「faithful uncertainty」**のコンセプトを発表した。モデルの言語的不確実性（言葉での疑いの表現）を本質的不確実性（実際の内部信頼度）と整合させるメタ認知的テクニックである。

### ハルシネーション軽減の「utility tax」

現在のハルシネーション軽減戦略は**重大なトレードオフ**に直面している。エラーメラー率を25%から5%に削減しようとすると、有効な回答の52%を捨てなければならなくなる（「utility tax」）。

GoogleのGal Yona研究科学者は「モデル容量は有限であり、知識の長尾は事実上無限です。モデルが知らないことを知らないことを認識できるようにすることが、我々が到達すべき場所です。しかし、これは本質的にLLMにとって困難です，绝大多数の実用的なハルシネーション削減介入は実際にデプロイに至りません。ハルシネーションは減りますが、モデルが実際に知っている質問にも答えることを拒否ようになるため、実用性が損なわれます」と説明した。

### 解決策

研究者は**「confident errors」としてハルシネーションを再定義**した：適切な修飾子なしで権威的に配信された誤情報である。この再定義により、厳密な「答えるか黙るか」の二分法が溶解し、モデルが適切にヘッジした仮説（例：「最良の推測は、」など）を提供できるようになる。

「faithful uncertainty」は、モデルが内部状態が実際に矛盾した情報や低確率情報を反映しているときにのみヘッジすることを要求する。これにより、ユーザーは信頼性と有用性の両方を得ることができる。

### エンタープライズAIへの示唆

このアプローチはreal-world agentic AIアプリケーションで essential control layerとして機能する。 autonomousシステムが内部知識が十分かどうか正確に判断し、不足している場合に動的に外部ツールやsearch APIを起動することを可能にする。

---

## Kimi K2.7-Code：思考トークンを30%削減するも、実用性には課題

Kimiは2026年6月12日、**K2.7-Code**をリリースした。思考トークンを30%削減声称しているが、パフォーマンスに課題がある。

### 技術的アプローチ

K2.7-Codeは直接ライブラリをwrapせずにコードを生成するため、「より正直」とされている。しかし、2つのカーネルが失敗し、MoE結果がK2.6からregressしたとの報告がある。

从业者たちは**ベンチマークの信頼性**に疑問を呈している：公式ベンチマークの数字と実際の実務パフォーマンスの間に乖離があるとしている。

---

## $1,500で基盤モデルを訓練：研究者の革新的アプローチ

研究者は2026年6月10日、約**$1,500で基盤モデルをゼロから訓練**できたと報告した。1B reasoningモデルがはるかに大規模なLLMと主要ベンチマークで競合できたという。

### 革新的ポイント

- **インターネットスケールのデータが不要**
- **計算コスト大幅に削減**
- **小規模でも実用的なパフォーマンス**

この成果は、AI開発の大衆化加速の可能性を示している。

---

## 参考リンク

- [Surprise upset: GPT-5.5 beats Claude Fable 5 on brutal new Agents' Last Exam benchmark](https://venturebeat.com/ai/surprise-upset-gpt-5-5-beats-claude-fable-5-on-brutal-new-agents-last-exam-benchmark/)
- [Google's DiffusionGemma generates 256 tokens in parallel and self-corrects as it goes](https://venturebeat.com/ai/googles-diffusiongemma-generates-256-tokens-in-parallel-and-self-corrects-as-it-goes/)
- [Microsoft's open-source SkillOpt automatically upgrades AI agent skills without touching model weights](https://venturebeat.com/ai/microsofts-open-source-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights/)
- [Xiaomi's new open source, agentic AI coding harness MiMo Code beats Claude Code at ultra-long, 200+ step tasks](https://venturebeat.com/ai/xiaomis-new-open-source-agentic-ai-coding-harness-mimo-code-beats-claude-code-at-ultra-long-200-step-tasks/)
- [Google researchers introduce 'faithful uncertainty,' allowing LLMs to offer best guesses instead of hallucinations](https://venturebeat.com/ai/google-researchers-introduce-faithful-uncertainty-allowing-llms-to-offer-best-guesses-instead-of-hallucinations/)
- [Kimi K2.7-Code cuts thinking tokens 30% — but practitioners say the benchmarks don't check out](https://venturebeat.com/ai/kimi-k2-7-code-cuts-thinking-tokens-30-percent-but-practitioners-say-the-benchmarks-dont-check-out/)
- [Researchers say they trained a foundation model from scratch for about $1,500](https://venturebeat.com/ai/researchers-say-they-trained-a-foundation-model-from-scratch-for-about-1500/)

---

*本文の情報は2026年6月14日時点のものです。最新情報は各ソースをご確認ください。*