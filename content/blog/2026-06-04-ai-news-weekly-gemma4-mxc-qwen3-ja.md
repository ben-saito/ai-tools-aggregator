# AI開発最新トレンド：Gemma 4ローカル実行からMicrosoft MXCまで——2026年6月第1週まとめ

2026年6月上旬、AI開発コミュニティはローカル実行とエンタープライズガバナンスという2つの軸で急速に進化している。本稿では、Googleのオープンソース Gemma 4 12B、MicrosoftのOSレベルサンドボックスMXC、AlibabaのQwen3.7-Plusという3つの主要テーマを技術的観点から整理する。

---

## Google Gemma 4 12B：16GBノートPCで動くオープンソースLLM

Googleは6月3日、**Gemma 4 12B** を公开发信した。Apache 2.0ライセンスの11.95 billionパラメータモデルで、標準的な16GB VRAM/unified memory搭載の enterprise laptop でローカル実行できる点が最大の特徴だ。

### Encoder-Freeアーキテクチャの革新

従来のマルチモーダルシステムは、音声波形と視覚データをLLMコアが処理可能な表現に変換する别々のエンコーダーを使用する。Gemma 4 12Bはこのパイプラインを根本から改变的する。

**視覚エンコーダー** は3,500万パラメータの单一行列乗算モジュールに置き換えられ、**音声エンコーダーは完全撤廃**。視覚パッチと音声波形が、轻量线性層を通じて直接LLMEmbedding空間に投射される。

この结果是：
- マルチモーダルタスクの推論遅延が低減
- VRAM要件が16GBまで低下（ノートPCレベル）
- 単一の一貫したパスでマルチモーダルシステムの微調整が可能

### 256Kトークンコンテキストとエージェント機能

Gemma 4 12Bは256Kトークンコンテキスト窗口をサポート。企業にとっては、長尺財務レポート、广泛なコードリポジトリ、一时间分の会議トランスクリプト処理能力が実用的になる。

追加機能として：
- **Thinkingモード**：段階的推論の出力を生成前に明示的にマッピング
- **Native function calling**：外部ツール呼び出しのネイティブサポート
- **System prompts対応**：自律型エージェント构建に 필수の前提条件

### ベンチマークと可用性

12BモデルはGoogleの26B Mixture-of-Expertsモデルに近いベンチマークを達成。Hugging Face、Kaggle、Google AI Edge Galleryから즉时ダウンロード可能で、vLLM、SGLang、MLX、llama.cppなどの業界標準デプロイメントフレームワークとシームレスに統合される。

---

## Microsoft MXC：AIエージェントのためのOSレベルサンドボックス

MicrosoftはBuild 2026で**Microsoft Execution Containers (MXC)** を発表した。Windows OS自体に組み込まれたポリシ驱动型実行レイヤーで、開発者とIT管理者がAIエージェントがアクセスできる範囲を宣言し、OSカーネルレベルでそれを强制できる。

### なぜ今セキュリティなのか

自律型AIエージェントは、本質的に予測不可能な動作を行う。従来のアプリケーションがファイル読み書きや网页取得といった明確な境界内で動作するのに対し、AIエージェントは自然言語で目标を受け取り、推理し、ファイルをを開き、コードを执行し、APIを呼び出す。各操作がセキュリティプロフェッショナルが呼ぶ「攻击対象領域」を作る。

Microsoft自身は以下の様に表述している：「エージェントがもっと有能で自律的になるにつれ、实物生産性の向上がもたらされている。しかし、新たなリスクも導入されており、问题是エージェント自体ではなく、エージェントが运作する整个システムにある」

### 構成可能なサンドボックススペクトラム

MXCの核心原则は简单：エージェントが実行する前にアクセス可能な範囲を宣言し、OSがその宣言を実行時に强制する。

注目すべきは隔离オプションの幅広さ。单一SDKとポリシーモデルが、ワークロードに応じた適切な隔离构造にマッピングされる：

- **轻量プロセス隔离**：単純なコーディングアシスタント向け（GitHub Copilot CLIですで采用）
- **Linuxコンテナ**：中程度の隔离要件
- **マイクロVM**：任意のコードを実行する自律型エージェント向け
- **フルクラウドインスタンス**：Windows 365経由

### セッショ隔离と攻撃緩解

MXCはエージェントの実行をユーザーのデスクトップ、クリップボード、UI、入力デバイスから分離する。これにより：

- **UIスプーフィング**：エージェントがユーザーに承認させます高原化的行为를防止
- **入力注入**：エージェントが他のアプリケーションにキーストロークやマウスクリックを送信するのを防止
- **クロスセッション情報漏洩**：あるユーザーのセッションから別への情報雰囲いを防止

### エンタープライズ統合：Agent 365

7月にプレビューを開始する**Agent 365**は、MXCをMicrosoftの既存エンタープライズセキュリティスタックと統合する：

- **Microsoft Defender**：ランタイム脅威保護
- **Microsoft Entra**：ID・アクセス管理
- **Intune**：デバイスレベルポリシー强制
- **Microsoft Purview**：データガバナンス・コンプライアンス

これにより、企業は従業員がAIエージェントを corporate machines で実行できる一方、IT部門が従来のアプリケーションと同じ可視性と管理を維持できる。

### パートナーエコシステム

OpenAI、Nvidia、Manus、Nous Research、OpenClawがすでにMXC上に構築を進めている。OpenAIについては、Codex（コード生成エージェント）がMXCの実行環境をデフォルトに採用する可能性が示された。

---

## Microsoft IQ + Rayfin：エンタープライズAIのエージェント対応データ基盤

MicrosoftはBuild 2026で**Microsoft IQ**（旧Fabric IQを拡張）と**Rayfin**（オープンソースSDK + CLI）も发表了。企業のAIエージェントがデータサイロを作らずにビジネスデータを活用するための基盤だ。

### Microsoft IQ：4つのコンテキストソースの統合

Microsoft IQは以下の4つのコンテキストソースを统一する：

| ソース | 機能 |
|--------|------|
| **Work IQ** | 組織の日常運営（メール、文書、会议、スケジュール）から人物、チーム、ワークフローへの理解を生成 |
| **Foundry IQ** | 機関知識を管理。ナレッジベースをキュレーション・インデックスし、組織内の作業規則、手順を理解させる |
| **Fabric IQ** | ビジネスリアルタイム運営状態をモデル化。Fabric Real-Time IntelligenceからのリアルタイムシグナルからEntities、関係を定義 |
| **Web IQ** | Webからのリアルタイムグローバルコンテキストを追加。社内データと共に組織外の現在の世界をエージェントに提供 |

### Rayfin：エージェント構築アプリケーションのガバナンス

エージェント構築アプリケーションはそれぞれバックエンドが必要だが、ガバナンスされたデプロイ路径がない場合、それぞれがコンテキストレイヤー外の新しいデータサイロを作る。

**Rayfin**はエンタープライズグレードのバックエンドを提供し、エージェント構築アプリケーションを直接Fabricにデプロイ。アプリケーションデータがデフォルトでMicrosoft OneLakeに着地し、Microsoft IQコンテキストレイヤーにフィードバックされる。

競合との差別化として、RayfinはSupabaseやNeon（Postgres互換バックエンドでエージェントツールがデフォルトになる傾向）に対して、ガバナンス大街を提起する。RayfinはFabricの统一的データ・コンプライアンスレイヤー全体にアプリケーションチームをルーティングし、隔离されたサイロを作るのではなく、未来のエージェントのためのOntologyを enriquishes する。

---

## Alibaba Qwen3.7-Plus：Proprietary multimodal APIの低コスト展開

Alibabaは6月2日、**Qwen3.7-Plus** を发表了。テキスト、ビデオ、画像入力に対応するマルチモーダルモデルで、1Mトークンあたり$0.40（入力）/ $1.60（出力）という低価格が特徴。

### 価格 비교

現在の фрон트엔드AIモデルAPIpricingの比較：

| モデル | 入力コスト | 出力コスト | 合計 |
|--------|-----------|-----------|------|
| MiMo-V2.5 Flash | $0.10 | $0.30 | $0.40 |
| deepseek-v4-flash | $0.14 | $0.28 | $0.42 |
| Qwen3.7-Plus | **$0.40** | **$1.60** | **$2.00** |
| Gemini 3.1 Flash-Lite | $0.25 | $1.50 | $1.75 |

### 戦略的転換：オープンソースからProprietaryへ

注目すべきは、Qwen3.7-Plusが「閉鎖型」 comercial licenseでのみ利用可能という点。Alibabaはこれまで強力なオープンソースモデル（如Airbnbが使用するQwen）をリリースすることで知られていたが、最新のリリースでは封闭路线选择了。

これは、Qwenブランドの世界的な信頼性に依存する企業（米国企業のAirbnbなど）にとって失望となる一方、AlibabaにとってはプロプライエタリAPIからの収益化戦略明显化を示している。

---

## Lovable × Google Cloud × Anthropic： Claude 利用5倍擴大

TechCrunchが6月3일에 보도한 内容에 따르면、Google Cloud와 Lovable이 다년 계약을 체결하여 Lovable의 Google Cloud 利用을 5배 확장하고 Anthropic Claude에 대한 확장 액세스를 부여했다고 합니다.

---

## Alphabet $85B 増資：AI事業への投資家的信頼

Alphabet은 6월 3일에 850억 달러의 주식 발행으로、Google의 AI 사업에 대한 투자 수요를 보여줌다고 TechCrunch가 보도했습니다.

---

## 参考リンク

- [Google's new open source Gemma 4 12B analyzes audio, video — and runs entirely locally](https://venturebeat.com/technology/googles-new-open-source-gemma-4-12b-analyzes-audio-video-and-runs-entirely-locally-on-a-typical-16gb-enterprise-laptop)
- [Microsoft launches MXC, an OS-level sandbox for AI agents](https://venturebeat.com/security/microsoft-launches-mxc-an-os-level-sandbox-for-ai-agents-with-openai-and-nvidia-already-on-board)
- [Enterprise AI agents keep creating data silos. Microsoft's Build answer is Microsoft IQ and Rayfin](https://venturebeat.com/data/enterprise-ai-agents-keep-creating-data-silos-microsofts-build-answer-is-microsoft-iq-and-rayfin)
- [Alibaba's Qwen3.7-Plus supports text, video and imagery inputs](https://venturebeat.com/technology/alibabas-qwen3-7-plus-supports-text-video-and-imagery-inputs-at-low-cost-of-0-4-1-6-per-1m-token-but-its-proprietary)
- [Lovable signs multiyear deal with Google Cloud](https://techcrunch.com/2026/06/03/lovable-signs-multi-year-deal-with-google-cloud-to-up-usage-5x-source-says/)

---

*（本文の情報は2026年6月4日時点のものです）*