# Alibabaがツール読み込みを99%削減するSkillWeaverを発表、中国発AIコーディング環境ZCodeがCursor/CTO/Copilotに真っ向勝負

Alibabaの研究チームが、LLMエージェントが数百ものツールを扱う際の「道具ルーティング」問題を劇的に改善するフレームワーク**SkillWeaver**を発表した。同じく中国発のAIラボZ.ai（旧Zhipu AI）は、GLM-5.2搭載のコーディングツール**ZCode**を正式リリースし、米国の競合3社に真っ向から挑む姿勢を見せている。

---

## ツール過多問題が企業AIの足を引っ張る

エンタープライズAIシステムが複雑なワークフローを処理する規模が拡大する中、現場の技術者は**サブタスクを正しいツールにルーティングする**という課題に突き当たる。エージェントが数百のツールやスキルを持つ場合、各ワークフローのステップでどのツールを使うべきかに混乱を生じる。

スキルとは、モジュール式再利用可能なツール仕様で、構造化自然言語ドキュメント形式を指す。社内の巨大ツールエコシステムに統合されるにつれ、LLMが正しいスキルを正確にルーティングすることは困難になる。LLMにツールライブラリ全体を一度に見せて適切なツールを探させるのは極めて非効率で、コンテキスト上限をすぐに突破し、数十万トークンを消費する。

現在のツール使用フレームワークの多くはAPI検索、ドキュメントマッチング、階層構造を通じてこれを解決しようとする。しかし、現実のビジネスクエリは本質的に**組成的（compositional）**であり、1つのツールでは完結しない。「データセットをダウンロードして変換し、ビジュアルレポートを作成する」といった標準的なビジネスリクエストは、APIクライアント、データプロセッサ、可視化ツールを連携させた多段階実行計画を必要とする。

---

## SkillWeaver：Decompose - Retrieve - Compose の3段階構造

Alibaba研究チームは、この問題を**「構成的スキルルーティング（compositional skill routing）」**として定式化し、それに対応するフレームワーク**SkillWeaver**を開発した。

SkillWeaverは3つの明確な段階で構成される：

### 1. Decompose（分解）ステージ

LLMがタスクリゾルバとして機能し、ユーザーの複雑なクエリを「1つのスキルで完結するサブタスクのシーケンス」に分解する。

### 2. Retrieve（検索）ステージ

サブタスクが定義されたら、エンベディングモデルを使用して各サブタスクをスキルライブラリと比較し、各ステップの候補ツールTOPリストを取得する。

### 3. Compose（構成）ステージ

プランナーが検出した候補同士を相互に評価し、1つのツールの出力が次のツールの入力に自然に流れるかを**スキル間互換性**を確認。その後、最終実行計画を**有向非巡回グラフ（DAG）**として作成し、依存関係をマッピングして、独立したタスクは並列実行可能にする。

### SAD（Skill-Aware Decomposition）フィードバックループ

LLMが生成する一般的なステップ説明では、スキルライブラリの実際的な技術語彙と一致しない場合がある。この問題に対処するため、SkillWeaverは**反復スキル対応分解（SAD）**を導入した。

SADは、LLMが初期プランを作成し、予備検索で緩やかに一致するスキルを見つけ、検出されたスキルをヒントとしてLLMにフィードバックすることで、分解を書き直し、粒度和語彙を実際のツールに完璧に合わせる反復ループを形成する。

### トークン消費99%削減

実験結果によると、ツールライブラリ全体をLLMに露出させるナイーブな手法と比較して、SkillWeaverのretrieve-and-routeアプローチは**トークン消費を99%以上削減**するとともに精度を大幅に向上させた。

企業AI構築者への主な takeaway は、**タスクリゾルバの詳細度が正確なツール検索のボトルネック**であるという点。タスク分解の粒度が成否を分ける。

評価には、24の機能カテゴリ（クラウドインフラ、金融、データベースなど）にまたがる2,209の実用的スキルを含むMCPエコシステムのスキルライブラリを使用して、300の多段階クエリ组成的カスタムベンチマーク**CompSkillBench**を作成した。

---

## ZCode：中国完全自主開発チップで動くGLM-5.2搭載AIコーディングツール

北京ベースのAIラボZ.ai（旧Zhipu AI）は7月2日、GLM-5.2大型言語モデル専用の「Agentic Development Environment」**ZCode**を正式リリースした。macOS、Windows、Linux対応の無料デスクトップアプリケーションで、Cursor、Claude Code、GitHub Copilotと直接競合する。

### GLM-5.2の性能

GLM-5.2は**7440億パラメータのMixture-of-Expertsアーキテクチャ**（活動パラメータ400億）、本体的な**100万トークンコンテキストウィンドウ**（前身比5倍）、28.5兆トークントレーニングデータ。Code ArenaでAnthropic Claude Fable 5に次ぐ世界2位の評価を受け、multi-hour自律エンジニアリングプロジェクトを測定するFrontierSWEではClaude Opus 4.8と1ポイント差、より深くOpenAI GPT-5.5より良い性能を示している。

### コスト構造

月額16.20ドルから144ドルまで。Anthropic Claude CodeやCursorの同等プランより大幅に低い価格で、注目すべきは、**Huawei siliconのみで完全に訓練**され、Emad Mostaque試算で訓練コスト約2500万米ドル（80%がポストトレーニング）という驚異的コスト効率を達成した。

### 独自の差別化

ZCode AgentはWeChat、Feishu、Telegramからモバイルで実行中のコーディングエージェントを操作できる遥控機能を実現。中国の開発者市場で主要なMessagingプラットフォームと連携し、どのデバイスでも進捗を確認し、指示を追加しながら長時間の作業を継続できる。

7月31日までGLM Coding Plan加入者向けの1.5倍クォータボーナスと、オフピークトークン消費0.67倍係数も提供中。

---

## 重要ポイント

- **SkillWeaver**は、MCPなどのマルチツールエコシステムでDAGベースの実行計画を立て、ツール選択精度を向上させると同時にトークン消費を99%削減する
- **ZCode + GLM-5.2**は、Huaweiチップのみで訓練された中国製LLMが、米国のAIコーディング市場に参入する試金石
- **LLM単一チップ訓練**がFrontier Modelのコスト構造を根本から変更する可能性がある

---

## 参考リンク

- [New Alibaba AI framework skips loading every tool, cutting agent token use 99% | VentureBeat](https://venturebeat.com/orchestration/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99)
- [Z.ai launches ZCode to challenge Cursor, Claude Code and GitHub Copilot in AI coding | VentureBeat](https://venturebeat.com/technology/z-ai-launches-zcode-to-challenge-cursor-claude-code-and-github-copilot-in-ai-coding)
- [Station F ramps up as a launchpad for Europe's hottest AI startups | TechCrunch](https://techcrunch.com/2026/07/06/station-f-ramps-up-as-a-launchpad-for-europes-hottest-ai-startups/)

---

*（本文の情報は2026年7月6日時点のものです）*
