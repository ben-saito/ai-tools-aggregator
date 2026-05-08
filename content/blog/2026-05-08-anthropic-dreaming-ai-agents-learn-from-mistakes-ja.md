# Anthropic、「dreaming」機能発表：AIエージェントが自らのミスから学習する新时代

Anthropicが5月7日（米国時間）、サンフランシスコで開催された「Code with Claude」開発者カンファレンスで、AIエージェントが自らの過去セッションから学習し継続的に改善する新機能「**dreaming**」を発表した。AIエージェントに「自己改善能力」を付与するこのアプローチは、エンタープライズが本番環境にエージェントをデプロイする上で要求してきた「自己修正・自己改善型AIシステム」への大きな一跳となる。

---

## dreamingとは：従来のメモリシステムとの違い

Anthropicは今年前半にエージェントメモリ機能をローンチ済みだが、dreamingはより高次元な抽象レベルで動作する。メモリが単一セッション内のコンテキスト保持を担うのに対し、dreamingは**スケジュール化されたプロセス**として機能する。

具体的には以下の流れで動作する：

- エージェントの過去セッションとメモリストアを横断的にレビュー
- セッション間に渡るパターン（反復的なミス、複数エージェントが独立に収束するワークフロー、チーム間での共有設定など）を抽出
- 抽出したパターンを整理し、将来のセッションが参照できる「プレイブック」として保存

重要な点として、dreamingは**モデルウェイトを変更しない**。Alex Albert氏（Anthropic リサーチプロダクトマネジメント責任者）はカンファレンスのインタビューで、「dreamingを通じてモデル自体を変えているわけではない。ウェイトの更新などは行っていない」と説明。エージェントは学習内容をプレーンテキストのメモと構造化された「プレイブック」として書き出し、人間が検査・監査できる形で保存する。

---

## 実験的機能の一般公開：outcomesとmulti-agent orchestration

Anthropicは同時に、2つの実験的機能「**outcomes**」と「**multi-agent orchestration**」をリサーチプレビューからパブリックベータに移行させた。

| 機能 | 概要 | 早期導入企業の実績 |
|------|------|-------------------|
| **dreaming** | エージェントが過去のセッションから学習・改善 | Harvey：タスク完了率が約6倍向上 |
| **outcomes** | タスク成功の尺度を定義・測定 | Wisedocs：ドキュメントレビュー時間が50%短縮 |
| **multi-agent orchestration** | 複数エージェントの協調制御 | Netflix：数百のビルドログを同時に処理 |

この3つの機能は、Anthropicが「AIエージェントをスケールさせる上で最も困難な問題」と位置づける以下に対処するものだ：

1. **正確性の維持** → outcomesで測定
2. **継続的な学習** → dreamingで実現
3. **複雑なマルチステップタスクでのボトルネック防止** → multi-agent orchestrationで解決

---

## ライブデモ：眠りの間に自律改善する月球面ドローン着陸システム

基調講演では、航空宇宙スタートアップ「Lumara」を題材としたライブデモが実施された。月の資源採掘のためにドローンを自律着陸させるシステムで、3つの専門エージェント（コマンダー、ディテクター、ナビゲーター）を構成し、ソフト着陸・地面のクリアランス・地球帰還用の燃料残量を成功基準として定義した。

初期シミュレーション（6つの候補着陸地点）は良好だが完全ではない結果だった。プレゼンターはClaude Developer Consoleから直接dreamingセッションをトリガーし、夜間での自律改善を実施。翌朝の再実行では、エージェントが過去の失敗パターンと成功パターンを統合し、着陸精度と燃料効率が向上していた。

---

## Anthropicの驚異的成長：80x ARRという現実

CEO Dario Amodei氏によると、Anthropicの成長は社内のおいてすら主动的な予測さえ上回ったという。2026年Q1の年間経常収益（ARR）成長率は**80倍**を達成。会社が計画していた「年間10倍成長」の8倍に相当する。APIプラットフォーム上のトラフィックは前年比で約70倍増加し、開発者向けツール「Claude Code」を平均で週20時間使用するユーザーが増加している。

Amodei氏：「我々は年間10倍成長する世界に向けて入念な計画を立てていた。それでも80倍の成長が見られた。これがコンピュート不足の根本原因だ」

---

## Sakana AI：「RL Conductor」でGPT-5・Claude Sonnet 4・Gemini 2.5 Proを協調させる

同日、VentureBeatが報じた另一つの注目技術は、Sakana AIが開発した「**RL Conductor**」。わずか70億パラメータのQwen2.5-7Bをが強化学習（RL）で訓練し、GPT-5・Claude Sonnet 4・Gemini 2.5 Proを含む7つのワーカーLLMを自律的に協調させる。

### 手動フレームワークの限界

LangChainやMixture-of-Agentsに代表される手動設計のエージェントフレームワークは、クエリの分布が変化した時点で破綻する。Sakana AIのYujin Tang氏（論文共著者）は「実際のヘテロジニアスなアプリケーションで真の一般化を実現するには、人間がハードコードした設計を超越する必要がある」と指摘する。

### RL Conductorの動作原理

Conductorは、固定のコードや静的なルーティングに頼らず、各ステップで自然言語の指示を生成し、特定のエージェントにタスクを割り当て、「アクセスリスト」（他のエージェントからの過去のサブタスクとレスポンスを哪个エージェントのコンテキストに含めるかを定義）を動的に構成することで、カスタマイズされたワークフローを構築する。

訓練時にはタスク、ワーカープール、正解・出力形式の正否に基づく報酬シグナルが与えられる。単純な試錯誤算法を通じて、Conductorはどの指示と通信構造の組み合わせが高い報酬を得るかを自律的に発見し、対象を絞ったプロンプトエンジニアリング、反復的な改善、メタプロンプト最適化といった高度なオーケストレーション戦略を人的介入なしで獲得する。

### ベンチマーク結果

| ベンチマーク | スコア |
|-------------|--------|
| AIME25（数学） | 93.3% |
| GPQA-Diamond | 87.5% |
| LiveCodeBench | 83.93% |
| **全タスク平均** | **77.27%** |

興味深いのは効率性で、MoA（Mixture-of-Agents）が1質問あたり11,203トークンを消費するのに対し、Conductorは平均わずか**1,820トークン**（平均3ステップ）で同等以上の性能を達成している。

---

## ZAYA1-8B：AMD MI300 GPUで訓練된 8Bパラメータの超効率的推論モデル

Palo AltoのスタートアップZyphraが5月7日にリリースした「**ZAYA1-8B**」も話題を呼んだ。80億パラメータ（実動は7.6億）のMixture-of-Experts（MoE）モデルで、GPT-5-HighやDeepSeek-V3.2と競合する性能を持ちながら、Apache 2.0ライセンスでHugging Faceから無料でダウンロード可能。

### アーキテクチャの革新：MoE++

Zyphraの proprietary MoE++アーキテクチャは、3つの根本的な改变を採用している：

1. **Compressed Convolutional Attention（CCA）**：標準的なアテンション機構がコンテキスト窓の拡大に伴いメモリ問題があるいが、CCAは圧縮潜在空間でシーケンス混合を実行。KVキャッシュサイズを8分の1に削減し、長いコンテキストの推論を効率化する。

2. **ZAYA1 MLP Router**：従来のMoEモデルが線形ルータを使用するのに対し、ZAYA1は表現力更强的多层MLPベースのデザインを採用。PIDコントローラーにヒントを得たバイアス均衡スキームで訓練安定性を維持する。

3. **Learned Residual Scaling**：40層深層のデータフローに対する「residual norm」の成長を制御し、勾配消失・爆発を防止。

### Markovian RSA：テストタイムコンピュートの再定義

ZAYA1-8Bの最も重要な性能躍進は「**Markovian RSA**」という新たなテストタイムコンピュート（TTC）手法によるもの。 традиционно モデルは「より長く考える」ためにチェーン・オブ・ソート（思考連鎖）を長く生成するが、これらは「コンテキストブロート」に陥りやすい。

Markovian RSAは以下のステップで動作する：

- モデルが複数の並列推論トレース（候補）を生成
- 再帰的な査読プロセス：各候補を独立した「査読者」が評価し、不十分な部分を特定
- 当初の問題から独立した「クリーンなコンテキスト」で再評価

この手法により、**思考の「深さ」と「コンテキストサイズ」の分離**に成功。AMD Instinct MI300 GPU上で同等以上の结果を達成し、AMD GPUのAI訓練プラットフォームとしての実用性を実証した点で重要。

---

## まとめ：AIエージェントの「生涯学習」と「効率性」の二軸で進展

今週のAI開発ニュースは、3つの主要テーマをめぐって進展している：

- **Anthropicのdreaming** → AIエージェントが人間の手間を最小化しながら自律的に学習・改善する机制の具体化
- **Sakana AIのRL Conductor** → 複数の Frontierモデルを活用したマルチエージェント協調の自动化と効率化
- **ZyphraのZAYA1-8B** → AMD GPU 기반での高性能・小規模・开源推論モデルの実現

AI開発の潮流は、モデルの増大競争と同時に、「いかに少ないリソースでより贤い推論を実現するか」という効率性への注力が明確になってきている。エンタープライズ開発者にとって、エージェントの自己改善能力と異種モデル協調の自动化は、production AI導入の障壁を大幅に下げる可能性を持っている。

---

## 参考リンク

- [Anthropic introduces "dreaming" | VentureBeat](https://venturebeat.com/ai/anthropic-introduces-dreaming-a-system-that-lets-ai-agents-learn-from-their-own-mistakes/)
- [How Sakana trained a 7B model to orchestrate GPT-5, Claude Sonnet 4 and Gemini 2.5 Pro | VentureBeat](https://venturebeat.com/ai/how-sakana-trained-a-7b-model-to-orchestrate-gpt-5-claude-sonnet-4-and-gemini-2-5-pro/)
- [Meet ZAYA1-8B, a super efficient, open reasoning model trained on AMD Instinct MI300 GPUs | VentureBeat](https://venturebeat.com/ai/meet-zaya1-8b-a-super-efficient-open-reasoning-model-trained-on-amd-instinct-mi300-gpus/)
- [Code with Claude | Anthropic](https://www.anthropic.com/codewithclaude)
- [ZAYA1-8B on Hugging Face](https://huggingface.co/)
- [RL Conductor | Sakana AI](https://sakana.ai/)

---

*（本文の情報は2026年5月8日時点のものです）*
