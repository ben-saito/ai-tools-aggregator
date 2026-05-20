# GitHub秘密鍵流出VS Code拡張機能事件とNVIDIA Vera CPUのReality

2026年5月20日、GitHubに対するサプライチェーン攻撃が確認された。社員が一つの悪意あるVS Code拡張機能をインストールしたことで、約3,800個の内製リポジトリが外部流出した可能性がある。同日、NVIDIAは自家製CPU「Vera」の第一批をAnthropic、OpenAI、SpaceXAI、Oracle Cloudに手渡し納入した。二つの出来事は対照的だ：AI開発現場への信頼を揺るがすセキュリティ事件と、AIワークロード专用Hardwareの現実投入が同日に发生了。

---

## GitHub VS Code拡張機能によるサプライチェーン攻撃

### 事件の概要

GitHubは5月20日（米国時間）、社員端末への侵入を確認し、3,800個の内製リポジトリが流出した可能性があると公式に认めた。発端は社員が一つの悪意あるVS Code拡張機能をVS Code Marketplaceからインストールしたこと。GitHubは「悪意ある拡張功能版を削除し、端末を隔離-incident response即座開始」と说明了している。

攻撃を主张したのは**TeamPCP**というハッカーグループだ。同グループはBreachedサイバー犯罪フォーラムで「約4,000個のリポジトリのプライベートコード」にアクセスできたと主张し、5万美元以上的売却を要求。身代金ではないと强调し、「buyerが見つかればデータを削除、見つかれば無料泄漏する」と通告している。

### TeamPCPの过去の攻撃パターン

TeamPCPはGitHub、PyPI、NPM、Dockerなどをターゲットにしたサプライチェーン攻撃の常連だ。最近ではOpenAI社員2名にも影响した「Mini Shai-Hulud」キャンペーンにも関与。这一家が「AIベースのコーディング助手」を装了した悪意ある拡張機能で150万安装以上を达成しており、データを中国境内のサーバーに窃送していたことがわかっている。

### VS Code拡張機能のセキュリティ問題

VS Code Marketplaceでは过去にも何度も悪意ある拡張機能が问题になっている。2025年には900万安装の拡張機能がセキュリティリスクで削除され、10個以上の暗号通貨泥棒拡張機能が正当な開発ツールを装了して漫延した年末もあった。さらに、基本的なランサムウェア機能を備えた拡張機能がMarketplaceに浸入した事例もある。

GitHubは現在4百万組織以上（Fortune 100の90%を含む）、1.8亿以上の開発者が利用するプラットフォームだ。流出したリポジトリには、同社の基幹コードが含まれている可能性がある。

### 技術的評価

GitHubによると現時点では「顧客データへの影響は确认されていない」としているが、Anthropicを含むAI企業各社の proprietary code が流出した可能性は排除できない。VS Code拡張機能はエディタの内部に深く acceso できるため、API键や环境変数、ソースコードの全额読み取りが可能になる。開発者社区にとって、この事件は「公式マーケットプレイスの扩展機能は安全」という前提を见直きりかけている。

---

## NVIDIA Vera CPU：AI labへの第一批納入

### エージェントAIのための新しいCPU

NVIDIAは5月18日、同社初となるカスタムCPU**Vera**の第一批を客户手に渡した。VeraはGTC 2026でJensen Huang CEOが发表した「エージェント時代のCPU」で、88個のNVIDIA設計Olympusコア、1.2TB/sのメモリ带宽、コア当たり50%高速なパフォーマンスを特点とする。

HPC担当VPのIan Buckが直接客户先を回り、第一批をSan FranciscoのAnthropic、Mission BayのOpenAI、Palo AltoのSpaceXAI、最后にOracle Cloud InfrastructureのSanta Clara支社に届けた。SpaceXではMusk自身がコア数、メモリレイアウト、冷却方式について質問する场面があったという。

### エージェントAI为何にCPUが换えて

従来のGPU中心のAI计算に対し、エージェントAIは复数のツール呼び出し、オーケストレーション層、長いコンテキスト检索といったCPU集约的な仕事を同時に実行する。これらは従来のコア密度最适化型設計では想定していなかった负荷だ。Jensen Huang氏いわく「AI factoryにおける新しいCPUモーメント」——モデルは「答える」から「動く」への移行期にあり、Veraはその変化にpurpose-builtされた。

Anthropicの计算担当Head of Compute、James Bradbury씨는「 computeのスケーリングはモデルの成长にとって重要な加速因子。エージェントワークロード問題解決に向けてVeraが生态系统の有望な一部となることを嬉しく思う」と述怀した。

### 用途：SpaceXはRL、OpenAIは一般计算负荷

SpaceXAIはVeraを强化学習ワークロードと、エージェントベースのシミュレーションパイプライン（トレーニングスタック驱动部）への适用を評価中。OpenAIは具体的なワークロードタイプは明かされていないが Sachin Katti氏（计算インフラ负责人）が受け取りに立ち合い、服务器の概要説明を受けた。

NVIDIAによると「Agently AI puts more demand than ever on the infrastructure — from building slides to compiling and testing software, analyzing data, searching files or even running simulations」という。Veraはその全场隈で「10倍高速に」という需求応えるHardwareとして位置づけられている。

---

## セキュリティとHardwareの両面からのAI基础设施强化

同日の二つの出来事は、AI開発现场が直面する二律背反を浮かび上がらせる。GitHub事件はAI企业内部の开发环境守る第三方服务依赖のリスクリスクを浮き彫りにした。VS Code拡張功能マーケットプレースはillions of developersが毎日依赖する分脉だ。信頼区间の大きい第三方扩展商店依赖は、開発者にとって新たなセキュリティ前线である。

他方、NVIDIA Vera CPUの纳入はAI计算専用Hardwareの实用化进程中を示す。GPUを超える专用CPUの诞生は、AIが「一つのモデルが全てを解く」時代から「複数の-specialized agentsが协调する」時代に移行していることと符合する。CPU/GPU/NICが协调するAI factoryのインフラストラクチャが、竞争力の源泉になりつつある。

---

## 参考リンク

- [GitHub confirms breach of 3,800 repos via malicious VS Code extension - BleepingComputer](https://www.bleepingcomputer.com/news/security/github-confirms-breach-of-3-800-repos-via-malicious-vscode-extension/)
- [GitHub says internal repositories were impacted in poisoned VS Code extension attack - CyberScoop](https://news.google.com/rss/articles/CBMigwFBVV95cUxPaHpGUVYyNHRueXBya2ZQMkxtN2RWSlZMamRfb0NLSUp4dS1rN0xVUjczQm9nc09YM1JPa28tWXFWcS1sU0VlZkdPbXZ2R2RpcGUyS3N6R3Bld2lYQUNBUzc4YzJqTHdhOHptWWRsRDJ3UzFtU1M0bnFfZVlySWgxTGFyYw)
- [Vera Arrives: NVIDIA's First CPU Built for Agents Lands at Top AI Labs - NVIDIA Blog](https://blogs.nvidia.com/blog/vera-cpu-delivery/)
- [TeamPCP previously linked to supply chain attacks - BleepingComputer](https://www.bleepingcomputer.com/news/security/github-breach-teampcp-vscode/)

---

*本文の情報は2026年5月21日時点のものです。*
