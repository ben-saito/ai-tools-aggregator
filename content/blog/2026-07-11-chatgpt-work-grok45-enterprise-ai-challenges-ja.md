# AI開発ニュース週間まとめ（2026年7月11日）── ChatGPT Work提供開始、Grok 4.5のCoding特化型モデル登場、Enterprise AIの評価ギャップ

2026年7月上旬から中旬にかけて、AI業界は「IPO前夜のOpenAI」が大型製品投入を加速する一方で、Enterprise領域でAIエージェントの実導入と評価手法の乖離が鮮明になり始めた週だった。**ChatGPT Work**の正式提供開始、**SpaceX製Grok 4.5**のCoding・自律エージェント特化型モデルとしての登場、そしてEnterpriseにおける**AI評価ギャップ**の深刻化が أبرزトピックだ。

---

## OpenAI、ChatGPT Work正式提供開始 ── クラウド永続VMで「ビーチ에서도ウェブサイト作成」

OpenAIは7月10日（米国時間）、待望の**ChatGPT Work**の正式提供を開始した。VentureBeatが入手した情報によると、同製品は**GPT-5.6**を基盤とするクラウドベースのAIエージェントで、Gmail、Google Calendar、Slack、GitHubなどの外部サービスに**MCP（Model Context Protocol）ベースのプラグイン**で接続しユーザーの代わりにタスクを実行する。

### 技術的アーキテクチャ

最大の特徴は**クラウド上の永続的な仮想マシン**として動作する点だ。競合产品在者がローカルマシンの電源オンと接続状態を要求するのに対し、ChatGPT Workはサーバー側で常に利用可能。どのデバイスからアクセスしても状態が維持される。

> 「ビーチでウェブサイトを作成して友達と共有できる——これが新機能です」── OpenAI製品マネージャー Ty Geri

提供 tiers は**Pro / Enterprise / Edu**から段階的にRolloutし、近日中に**Plus / Business**にも拡大される。Plusユーザーが月額$20でアクセスできる点は「OpenAIのミッション契合」とGerI氏。是Mate、AIエージェントの民主化が大きく前進したと言える。

### 対応サービス（MCPプラグイン）

- **Gmail**: メールの一覧・作成・送信
- **Google Calendar**: イベントの確認・作成・変更
- **Slack**: チャンネル確認・メッセージ投稿
- **GitHub**: リポジトリ操作・コード确认

---

## SpaceX、Grok 4.5正式発表 ── Cursor $600億買収の第一个成果

SpaceXは7月9日、**Grok 4.5**を正式にリリースした。Grok 4.5はSpaceXがAIコーディングスタートアップ**Cursor**を$600億で買収して以来の最初の成果物であり、同社が**Codingと自律エージェント用途に特化して訓練した首个のモデル**となる。

### 価格 경쟁力

競合先がCodingモデルで1Tokenあたり$3〜$5を請求する中、Grok 4.5は**Half the price（価格帯は競合の半分）**に設定された。この価格戦略がAnthropic（Claude for Code）やOpenAI（Codex/o1系）にどのような影響を与えるか、Fork注目される。

| 企業 | モデル | 主な用途 | 概算価格帯 |
|------|--------|---------|-----------|
| OpenAI | Codex / o1系 | Coding + Reasoning | 高め |
| Anthropic | Claude for Code | Coding | 高め |
| SpaceX | Grok 4.5 | Coding + Agent | **半額** |
| Meta | Muse Spark 1.1 | Coding + ワークフロー | 中価格帯 |

---

## Enterprise AI、代价比離が深刻化 ── 内部評価と顧客評価の2層問題

VentureBeat Researchが573人のEnterpriseリーダーを対象に実施した調査で、**AIエージェントの実導入と評価の乖離**が深刻化している事実が浮かび上がった。

### 调查结果の核心

- **86%** のEnterprise GPUが**容量の半分以下**で動作
- **半数**の企業が「内部評価通過 → 顧客導入後失敗」のパターンを経験
- にもかかわらず企業の**过半**がエージェントに**更なる自律性を付与**发展方向

GPU利用率の低さは、AIワークロードの特性（バッチ処理≠常時負荷）に関連するが、もう一つの本质的な問題は**評価方法论**にある。従来のLLM評価（Perplexity、BLEU、HumanEval等）は単一モデルの性能測定には有用だが、**複数モデル組合せ・外部ツール連携・長周期タスク**を_agentic workflow_で評価するには不十分だ。

### 多モデル構成の罠

同日发表的别调查では、**複数AIモデルを組み合わせているEnterpriseが失敗率を過小評価している可能性（2.25倍）**が指摘された。「互いの盲点を補完する」という仮説に反し、モデル组合せは失敗率を相乗的に高める場合があることが明らかになりつつある。

---

## Google、TabFM発表 ── テーブルデータ特化のOne-APIモデル

Googleは7月11日、**TabFM**を発表じた。TabFMは、表形式データに対する予測モデルを単一API呼び出しで実行できる新種の大規模テーブルAIだ。

### 従来のボトルネック

従来の機械学習パイプラインでは以下が必要だった：
- データ科学家が数週間かけ各Datasetごとにハイパーパラメータ 튜닝
- パイプラインの再構築
- モデル選択と训练

TabFMはこれらの 工程をスキップし、未知のテーブルでもAPI调用一回で予測を実行できる。「周三ののデータ科学者がapidifyする世界を愿景」として、VentureBeatは評価している。

---

## その他の注目トピック

- **Meta独自AI ASIC**: 2026年9月にTSMC + Broadcom + Samsungで生产開始。SamsungがRAM、Broadcomが設計、TSMCが製造を担当
- **Lyzrの自律資金調達**: AIエージェント「SivaClaw」を使って$100MのSeries Bを自律完走
- **Fidji Simo（OpenAIアプリ責任者）退任**: .application責任者が退任、「サイドクエスト削減」の一環
- **The New York Times vs OpenAI**: 訴訟がさらに激化、训练データからの版权コンテンツ排除が虚偽である可能性浮上

---

## 参考リンク

- [OpenAI introduces ChatGPT Work](https://venturebeat.com/ai/openai-introduces-chatgpt-work-a-cloud-based-ai-agent-that-manages-tasks-across-email-slack-and-calendars)
- [SpaceX's Grok 4.5 launches at half the price of rivals](https://venturebeat.com/ai/spacexs-grok-4-5-launches-at-half-the-price-of-rivals-heres-why-that-could-rattle-anthropic-and-openai)
- [Enterprise AI is entering an evaluation gap](https://venturebeat.com/ai/enterprise-ai-is-entering-an-evaluation-gap-agents-are-gaining-autonomy-faster-than-companies-can-verify-them)
- [Wall Street is debating the AI buildout. Enterprises just answered](https://venturebeat.com/ai/wall-street-is-debating-the-ai-buildout-enterprises-just-answered-86-say-their-gpus-run-at-half-capacity-or-less)
- [Google's TabFM skips per-dataset training](https://venturebeat.com/ai/googles-tabfm-skips-per-dataset-training-and-still-predicts-on-tables-its-never-seen)
- [Enterprises using multiple AI models are underestimating failure rates by 2.25x](https://venturebeat.com/ai/enterprises-using-multiple-ai-models-are-underestimating-failure-rates-by-2-25x)

---

*本記事の情報は2026年7月11日時点のものです。*
