# Microsoft Build 2026 最新AI機能まとめ：Agent対応WindowsからローカルLLMまで

2026年6月2日〜3日（米国時間）に掛けて行われたMicrosoft Build 2026では、AIエージェントのビジネス本格活用に向けた重要な基盤整備が次々と発表された。本稿では開発者視点からの注目ポイントをお届けする。

---

## Agent実行環境がOSレベルに：Microsoft Agent Runtimeintro（MXC）

最も大きな発表は**Microsoft Agent Runtimeintro（MXC）**だろう。Windowsが標準でAIエージェントの隔離・制御を行う新 layerを追加する。OpenClaw、AppleのExtension、Manus、NVIDIA Holodeck、Hermes Agentなど、主要なAgent Framework全てがMXC上で動作する。

**アーキテクチャの革新的ポイント：**
- Windowsカーネルに直接組み込まれたAgent Containment
- ファイルアクセス・ネットワーク・画面キャプチャ・位置情報などをOSレベルで制御
- Intune/Defender/Entra/Purviewと統合しEnterprise対応
- OpenAI Codex、NVIDIA OpenShell、Manus、Hermes等多种Agent Framework対応

Appleが“安全のための制限”（walled garden）で対抗する中、Microsoftは「すべてのAgentを走らせつつOSがガバナンスする」という設計选择的差異化している。Windows既存ユーザーがSoftware UpdateだけでAgent Readyになる点は大きな地利だ。

---

## Surface RTX Spark Dev Box：ローカルで100BパラメータLLMが動く

Microsoftは**Surface RTX Spark Dev Box**も発表。Nvidia Blackwell世代RTX Spark SoC + **128GB Unified Memory**搭載の小型デスクトップで、クラウド依靠せずローカルで120Bパラメータ級LLMを動作させる。

**技術的特徴：**
- 1 PFLOPS AI演算性能（Nvidia測定）
- 128GB Unified Memory（CPU/GPU共有、アドレス空間統合）
- Windows OSレベルでのメモリ管理最適化（ページサイズ制御、スケジューラ最適化）
- 金属3Dプリンティングによる放熱設計（100W持続動作対応）
- 開発者需要的プリインストール構成（WSL2+GPU Passthrough、VSCode、GitHub Copilot、Python、Node.js）

128GB Unified Memoryは100Bパラメータモデルのコンテキストキャッシュ（約40〜50GB）すら容纳できる点が革命的。開発者は「本当に必要な場面だけクラウドAPI呼ぶ」という経済合理性を選択できる。

---

## OpenAI Codex大型アップデート：非エンジニアも20%、成長率3倍

OpenAIは**Codex**（AI Agentプラットフォーム）を大規模更新。新機能は以下の3点：

### 1. Annotations：スプレッドシート一部だけAI編集

従来のAI編集はファイル全体を再生成するため書式崩れが频発していた。Annotationsは文書のデータスキーマをマップし、ユーザーが選択したセル範囲内でのみAIを実行する。财务报表の特定部分だけを更新し、他のセル依存関係・書式・数为のまま維持する。

### 2. Six Role-Specific Plugins：62アプリ × 110スキルがバンドル済み

| Plugin | 主な連携SaaS |
|--------|------------|
| Data Analytics | Snowflake, Databricks, Hex, Tableau |
| Creative Production | Figma, Canva, Shutterstock, Fal |
| Sales | Salesforce, HubSpot, Slack, Outreach |
| Product Design | Figma, Canva（プロトタイプ生成） |
| Public Equity & Investment Banking | Moody's, FactSet, LSEG, PitchBook, Hebbia |

### 3. Sites：静的データをインタラクティブな内部Webアプリに変換

表計算やテキストから 안전한 ワークスペースURLを生成し、チーム内で直接編集できる。例えば：財務データが貼り込まれたシートをインタラクティブなシナリオプランナーに変換。

---

## Perplexity AI：ハイブリッドローカル/クラウド推論を披露

Perplexity AIはComputex 2026で**ハイブリッドLocal-Cloud推論オーケストレーター**を披露した。Intel CEOとのKeynoteでDemonstrationされたこの技術は以下が革新的だ：

- **自律的ルーティング**：ユーザーが事前に選択する必要はなく、Agentがリアルタイムでタスク性質に基づいてLocal/Cloudを自動振り分け
- **Local判断**：Intel Core Ultra Series 3上で動作するLocalモデルが、機密情報を含む場合はクラウド送信禁止を自律判断
- **Privacy + Cost + Intelligenceのバランス**：財務記録や健康情報など機微データはLocal、それ以外でfrontier-level reasoningが必要な場合はCloudへ

「Do it on your machine or in the cloud — the system decides autonomously」（システムが決める）がCore innovation。今までのLocal AI解決策が「事前に選択させる」ものだったのに対し、Perplexityは「実行時に判断させる」点で雰囲が違う。

---

## AI Economy成長率：名目2,600%/年の影でGDP統計が過小評価

Jack Clark氏提供のImport AIで注目的是**University of Virginia + Anthropic + Bank of Canada共著論文**だ。AI經濟の成長が従来のGDP統計に見えない問題点が指摘されている：

| 測定方法 | 2023→2024→2025 |
|--------|---------------|
| 名目compute支出 | $37B → $90B → $219B |
| AI computing容量（年率） | 200%以上成長 |
| 品質調整済みAI生産性 | 2,290%（2024）、2,271%（2025） |

従来のGDP統計では「AI产品价格下落 = 同じ服务质量でもコストDOWN」と測定されるが実際は「より高质量なAI服務が同じコストで提供されている」という逆の状況が起きている。结果として、政策立案者が労働市場へのインパクトを過小評価するリスクがある。

著者らは**「AI衛星口座」**（AI satellite accounts）の創設を提言。統計機関が国富会計にAI生産性を含む仕組みが必要と主張している。

---

## Uber：従業員AI利用コストが4ヶ月で予算超過

Uberは従業員へのAI推奨利用方針を徹底した結果、4ヶ月で年間AI予算を使い切った。Anthropic Claude Codeなどの導入が加速し、API callコストが予想外のペース增长了。企业向けのAIコスト管理体制構築が急務だと痛感した事例だ。

---

## Biohub：ESMFold2でAlphaFold3に対抗

Priscilla Chan & Mark Zuckerberg foundedのBiohubが**ESMFold2**を発表。ESMC（蛋白质言語モデル）+ ESMFold2（3D構造予測）+ ESM Atlas（68億配列 × 11億予測構造）からなる套組で、AlphaFold3 outperformするBenchmarksもある。創薬への応用としてEGFR、PD-L1、CTLA-4、CD45などの癌细胞標的へのタンパク質設計と確認が報告されている。

---

## GPICデータセット：1億枚の許可画像

Stanford + Salesforce Researchなどが**GPIC**（Giant Permissive Image Corpus）を公开发表した。1億枚の画像Caption済みで、ライセンスは「research + commercial利用可」（CC BY、CC0、Public Domain、No-Known-Restrictions）。Hugging Faceで公开されている。

---

*本稿の情報は2026年6月3日時点のものです。*