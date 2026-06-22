# AI動画生成の最前線：AlibabaのHappyHorseが世界2位へ、Self-Harnessでエージェントが自ら改善

AI動画生成市場と自律型エージェントの両面で激動の一週間となった。OpenAIがSora的生产終了を余儀なくされ、ByteDanceがSeedance 2.0の国際展開を無期延期としたまさにそのタイミングで、AlibabaがHappyHorse 1.1を正式リリースし、グローバルランキングで2位に躍り出た。同時に、上海人工知能研究所がAIエージェントが自らのルールを書き換える「Self-Harness」フレームワークを発表、Sakana AIは複数のLLMをオーケストレーションする「Fugu」を提供開始した。

---

## Alibaba HappyHorse 1.1：Sora・Seedance脱落後の空白を埋める

6月22日（米国時間）、Alibaba CloudはAI動画生成モデル**HappyHorse 1.1**を正式リリースした。月額52.7億ドル規模のグローバルインフラ構築を背景に、APIファーストの商用展開を宣言。企業向け価格优惠政策（発売後2週間は全商品40%オフ）も合わせて発表された。

### ランキングと性能

HappyHorseは4月初頭に**Artificial Analysis Video Arena**に匿名で登場し、text-to-videoおよびimage-to-videoの両ランキングで即座に1位を獲得。Alibabaの正体が明かされた後、ATH（Alibaba Token Hub）AI Innovation Unitが開発を担当していたことが判明した。

現行ランキング（Arena.ai基準）：
- **テキスト→ビデオ**: 1,444ポイント（Google Veo-3.1 比 +69ポイント）
- **画像→ビデオ**: 1,444ポイント（xAI Grok-Imagine-Video 比 +23ポイント）

15兆パラメータのunified self-attention Transformerアーキテクチャを採用。テキスト、画像、ビデオ、オーディオトークンを単一のシーケンスで処理する統一生成方式により、従来のマルチモデルパイプライン必需的だった動画→音声の外部</minimax:tool_call>Lapdubbingやポストプロダクションが不要となった。

### 1.1アップデートの内容

| 機能 | 詳細 |
|------|------|
| **R2V（Reference-to-Video）** | 複数枚のキャラクター参照画像を入力可能。商用広告やシリアライズドマーケティングコンテンツで重要な「人物IDの一貫性」を維持 |
| **Motion Modeling強化** | 速度と流動性における過去バージョンの制約を改良 |
| **テクスチャ改善** | 「顔の油腻感」「オーバーシャープニング」「不自然テクスチャ」を解消 |

APIは**Alibaba Cloud Model Studio**経由で企业提供されており、エンタープライズ顧客と開発者の両方が即座にアクセス可能。US-China間の技術規制が厳しくなる中、西側市場での採用がどれほど進むかが次の焦点となる。

---

## Self-Harness：上海AI研が提示したAIエージェント自己改善の新パラダイム

上海人工智能研究所（Shanghai Artificial Intelligence Laboratory）は6月22日、AIエージェントが自らの操作ルール（harness）を体系的に改善するフレームワーク**「Self-Harness」**を論文として発表した。

### なぜHarnessエンジニアリングは困難か

LLMベースのエージェントの性能は、基盤モデルだけでなくその周囲を巻く**harness**——システムプロンプト、ツール構造化、メモリ管理、検証ルール、ランタイムポリシー、オーケストレーションロジック——に大きく依存する。SWE-agent、Claude Code、Codex、OpenHandsなどが代表的なharnessとして挙げられる。

従来、このharnessのチューニングは**手動かつアドホック**的行われており、直感に頼る部分が大きく、急速に変化するLLM環境についていけないのが実情だった。stronger modelに依存した改善アプローチも、拉致障害、成本高、前線のモデルへの不整合などの課題があった。

### 3段階反復ループ

Self-Harnessの中核は、実行トレースから行動証拠を抽出しharness更新に変換する3段階反復構造である：

1. **Weakness Mining**: 初期harnessからエージェントが一連のタスクを実行し、検証可能な結果を持つトレースを生成。失敗トレースを分類し、モデル固有の失敗パターンを検出する
2. **Harness Proposal**: 失敗パターンに基づき、「proposer」役として複数の多様かつ最小のharness修正を生成。各修正は特定失敗メカニズムに紐付けられ、過剰な一般化を避ける
3. **Proposal Validation**: 回帰テストで候補修正を評価。held-outタスクでの性能劣化なしに成功改善を示した修正のみが採用され、複数の候補がパスした場合はマージされて次のイテレーションの起点となる

### 性能結果

研究チームは**Terminal-Bench-2.0**で評価を実施し、MiniMax M2.5、Qwen3.5-35B-A3B、GLM-5適用時に最大**60%的性能向上**を確認した。

開発者にとってこの手法が興味深い理由は、エージェントの「漠然とした故障」を「olvable problem」に変換できる点にある。例えば、社内外のドキュメント形式が更新されたとしましょう。従来は「エージェントが壊れただけ」に見えた問題が、Self-Harnessでは「どの箇所でどの形式を誤解釈しているか」→「対象的なharness修正案」→「回帰テストによる効果検証」という体系的なプロセスで改善できる。

---

## Sakana AI「Fugu」：単一モデル依存への構造的解答

6月22日、Sakana AIはマルチモデルオーケストレーションシステム**Fugu**の提供を開始した。Anthropicが6月12日の輸出規制命令を受けてClaude Mythos 5およびClaude Fable 5へのパブリックアクセスを取りやめた直後のリリースであり、单一モデル依存への代替策として強く意識されている。

### アーキテクチャ

Fuguは、自律型「master general contractor」として動作する。複雑なリクエストに対し、単独で全ステップを実行するのではなく、問題を分解し、専門基盤モデルのプールにサブタスクを делегиテーション、作業を検証、最終出力を統合する。

内部ではFugu自体がLLMとして訓練されており、「 различных LLMを呼び出す能力的」を持つ。TRINITYとConductorという2本の2026年論文基础上、hand-designed workflowではなく**learned coordination strategies**でモデル選択と検証を自律管理する。

### 2つのティア

| ティア | ターゲットケース | 価格 |
|--------|------------------|------|
| **Fugu** | インタラクティブチャット、Coding環境（Codex統合） | 動的（使用モデルに応じる） |
| **Fugu Ultra** | AI研究、セキュリティ分析、特許調査など高難度タスク | $5/M入力トークン、$30/M出力トークン |

### ベンチマーク結果

Sakana提供の数値：
- **LiveCodeBench**: Fugu Ultra 93.2、Fugu 92.9、Claude Fable 5 89.8
- **GPQA Diamond**: Fugu Ultra 95.5、Fugu 95.5、Claude Mythos Preview 94.6

注目すべきは、Fugu UltraがAnthropic Claude Fable 5をLiveCodeBenchで+3.4ポイント上回っている点である。

### ビジネス的意味

Fuguのコアバリューは**ネイティブ冗長性**にある。一社のAPIに依存しないことで、障害時は自動的に別のモデルにルーティングされ、規制リスクによる突然のアクセス停止にも動的に対応できる。David Ha（Sakana CEO）は「Collective intelligence is the practical hedge against this concentration of power」と語っている。

---

## 開発者への影響

本周の3つのニュースは、LLM活用の構造変化をitarian的に示している：

- **動画生成**: Soraの撤退とSeedanceの延期により、商用動画AIの選択肢がAlibabaに集中するリスクと、一方で統一自己注意型アーキテクチャの有効性が実証された
- **エージェント開発**: Self-Harnessは、手動harnessエンジニアリングの行き詰まりを打開する実証的フィードバックループを提案しており、モデル更新頻度が高まる中で特に重要
- **マルチモデルorchestration**: Fuguは、单一モデルへの依存が戦略的リスクとなり得ることを商業的に証明した

動画生成からエージェント、自己改善まで——生成AIの各レイヤーで「依存先の分散」と「自律的改善」がキーワードとなりつつある本周であった。

---

## 参考リンク

- [Alibaba's AI video model rises to No. 2 in global rankings (VentureBeat)](https://venturebeat.com/ai/alibabas-ai-video-model-rises-to-no-2-in-global-rankings-as-openais-sora-and-bytedances-seedance-fall-away)
- [Researchers introduce Self-Harness (VentureBeat)](https://venturebeat.com/ai/researchers-introduce-self-harness-a-framework-that-lets-ai-agents-rewrite-their-own-rules-boosting-performance-up-to-60)
- [Sakana Fugu multi-model system (VentureBeat)](https://venturebeat.com/ai/no-claude-fable-5-no-problem-sakana-achieves-frontier-performance-with-new-fugu-multi-model-auto-synthesis-system)
- [HappyHorse on Alibaba Cloud Model Studio](https://www.alibabacloud.com/product/model-studio)

---

*本文の情報は2026年6月23日時点のものです。ベンチマーク数値は各企业提供資料に基づきます。*