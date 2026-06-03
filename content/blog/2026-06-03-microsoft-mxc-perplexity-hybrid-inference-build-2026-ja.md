# Microsoft Build 2026：AIエージェントのセキュリティ基盤とローカル推論の時代到来

2026年6月初頭、Microsoft BuildとComputex 2026が同時に開催され、AIエージェントの運用体制をめぐる重要な発表が連続した。AIエージェントの自律性とセキュリティリスクのバランスをどう取るかという問いに対し、MicrosoftはOSレベルでの隔離機構を、Perplexityはローカルとクラウドのハイブリッド推論Orchestratorを、それぞれ異なるアプローチで提示した。

---

## Microsoft MXC：AIエージェントのためのOSレベルサンドボックス

MicrosoftはBuild 2026で**Microsoft Execution Containers（MXC）**を発表しました。WindowsおよびWindows Subsystem for Linuxに組み込まれたポリシー駆動型の実行レイヤーであり、開発者とIT管理者がAIエージェントのアクセス可能なリソースを宣言し、OSカーネルレベルでそれを実行時に強制する仕組みです。

MXCは「コンポーザブルサンドボックススペクトラム」と呼ばれる設計思想を採用しており、軽量なプロセス隔離からマイクロ仮想マシン、Linuxコンテナ、Windows 365のフルクラウドインスタンスまで、ワークロードに応じた隔離レベルを選択できます。既にGitHub CopilotのCLIは軽量なプロセス隔離を採用していますが、MXCはこれを拡張し、任意のコードを実行するエージェントにはフルマイクロVMを割り当てるといった柔軟な運用を可能にします。

**セッション隔離**も重要な機能です。MXCはエージェントの実行環境をユーザーのデスクトップ、クリップボード、UI、入力デバイスから切り離します。これにより、UIスプーフィング（エージェントがユーザーに見えない形で操作を確認させる）、入力インジェクション（他のアプリケーションへのキー入力やマウスクリックの偽装）、クロスセッションのデータ漏洩といった攻撃パターンを直接軽減できます。

Enterpriseセキュリティの観点では、各エージェントにローカルIDまたはMicrosoft Entraによるクラウドプロビジョニングのアイデンティティをバインドし、エージェントのすべてのアクションが帰属・監査・ガバナンス可能であることが保証されます。

**OpenAIとNvidiaがすでにパートナーとして名を連ねている**ことも注目に値します。OpenAIはChatGPTのエージェント機能拡張において、Microsoftのセキュリティインフラを活用する方向性を示しています。

---

## Perplexity AI：ハイブリッドローカルーサーバー推論Orchestrator

Computex 2026のIntel基調講演で、Perplexity AIのCEO Aravind Srinivas氏が新たなハイブリッド推論システムをデモしました。Perplexityの「Personal Computer」エージェントがIntel Core Ultra Series 3上で動作し、機密性の高いdeal資料を処理する場面では、ローカルモデルがどの情報をデバイスに残し、どの情報をクラウドに送信するかをリアルタイムで自動判定しました。

このシステムの核心は、**タスクごとに推論の実行場所を動的に決める**ことです。従来のローカルAI製品は、ユーザーが事前にモデルの使い分けを設定する必要がありましたが、PerplexityのOrchestratorはシステム自体が判断を下します。財務記録や健康情報などの機微データはローカルに留保し、重い推論タスクはクラウドのフロンティアモデルに送信します。

Perplexityは2026年2月にComputer（19のAIモデルをOrchestrationするクラウドベースのマルチモデルエージェント）を、3月にAsk 2026でPersonal Computer（Mac向けのハイブリッドローカルーサーバーAIエージェント）をそれぞれ発表しており、今回のハイブリッド推論Orchestratorはこの製品群の拡張です。

**Nvidia RTX Sparkの役割**も大きいです。RTX Spark Superchipは最大20コアのArm CPU、6,144コアのBlackwell GPU、128GBのLPDDR5X RAM、300 GB/sのメモリ帯域幅を持ち、120 billionパラメータモデルを100万トークンのコンテキスト長で動作させることを可能にします。チップが高性能であるほど、より多くの推論がローカルで実行可能になり、クラウドコストとレイテンシの両面で優位性が生まれます。

---

## Microsoft Surface RTX Spark Dev Box：120Bパラメータをクラウドなしで

MicrosoftはBuild 2026で**Surface RTX Spark Dev Box**も発表しました。NvidiaのRTX Sparkプロセッサと128GB統合メモリを小型フォームファクターに収めた開発者向けデスクトップで、1 PFLOPSのAI演算性能を実現します。120 billionパラメータを超えるモデルをクラウドAPIに一本も送信せずに動作させることを目標としており、開発者はフロンティアの問題에만クラウドを呼び、残りはローカルで処理するといった運用が可能になります。

技術的には、従来のWindows PCではCPU、GPU、専用GPUメモリ、システムRAMがそれぞれ独立していましたが、RTX Sparkはこれを一つのチップと単一の統合メモリプールに統合します。100,000トークンのコンテキストではKVキャッシュだけで40〜50GBのメモリを消費する可能性があり、128GBの統合メモリアーキテクチャはこの問題を解決する設計となっています。

MicrosoftはWindowsレベルでのメモリ管理も最適化し、GPUがアドレスできるシステムメモリの天井を上げ、共有メモリ領域のより賢いページサイズ割り当てを実現しています。

価格と提供開始日はまだ発表されていませんが、2026年秋にMicrosoft.comを通じて米国のみで発売される予定です。

---

## OpenAI Codex： Sitesとロール別プラグインによるエンタープライズワークスペース構築

OpenAIはCodexの大型アップデートを発表し、BusinessおよびEnterpriseティアラ向けに「**Sites**」機能をプレビューとして展開します。Sitesは、フロントエンド開発なしにクロスファンクショナルチームがインタラクティブなエンタープライズワークスペースを構築できる機能で、エージェントがSitesを作成してチームと共有できます。

Codexのエージェントは、複雑なワークフローを構築する際に、ロール固有のプラグインを活用できます。これにより、財務、法務、エンジニアリングなどの異なる部門に対応した権限とアクセス制御をエージェントに組み込むことが可能になります。

これはMicrosoftのMXCと対照的なアプローチと言います。MXCが「エージェントが誤動作した場合の被害を小さくする」ことに主眼を置くのに対し、OpenAIのSitesは「エージェントが有用な仕事を遂行する能力を拡張する」ことに主眼を置いています。セキュリティと生産性のバランスをめぐる業界的な議論が、AIエージェント設計の二大潮流を生み出しています。

---

## AI Chip Race：Computexを巡る攻防

Computex 2026全体を通じて、**オンデバイスAI**が一貫したテーマでした。NvidiaはRTX Sparkを発表し、Windows AI PCの新しい基盤として位置づけています。IntelはXeon 6+（18Aテクノロジー、288コアのデータセンター向け）とCore Ultra Series 3（クライアント silicon）を披露し、ハイブリッド推論のクライアント側を実現しています。AlibabaのQwen3.7-Plusはテキスト、ビデオ、画像入力対応のマルチモーダルモデルで、1Mトークンあたり$0.4/$1.6という低コストをアピールしています。

AI Chipベンダー各社が、エッジでの推論能力向上とクラウド間の最適な振り分け机制的开发竞争中しています。

---

## 参考リンク

- [Microsoft launches MXC, an OS-level sandbox for AI agents (VentureBeat)](https://venturebeat.com/ai/microsoft-launches-mxc-an-os-level-sandbox-for-ai-agents-with-openai-and-nvidia-already-on-board/)
- [Perplexity AI unveils hybrid local-cloud inference system at Computex 2026 (VentureBeat)](https://venturebeat.com/ai/perplexity-ai-unveils-hybrid-local-cloud-inference-system-at-computex-2026/)
- [Microsoft debuts Surface RTX Spark Dev Box (VentureBeat)](https://venturebeat.com/ai/microsoft-debuts-surface-rtx-spark-dev-box-to-run-large-ai-models-without-cloud-costs/)

---

*本文の情報は2026年6月3日時点のものです。*
