# AI開発ニュース 2026年5月21日 — GitHub供給チェーン攻撃、Cerebras万亿パラメータ推論、NVIDIA Vera CPU納入、Muon オプティマイザの欠陥

2026年5月21日、AI開発コミュニティは複数の重要なイベントで沸き返った。GitHubの内部リポジトリ3,800件が毒入りVS Code拡張を通じて窃盗された供給チェーン攻撃、NVIDIAが独自CPU「Vera」をAnthrothropic・OpenAI・SpaceXに納入、Cerebrasが中国のMoonshot AI製万亿パラメータモデル「Kimi K2.6」をGPUクラウドの6.7倍高速で提供開始、そしてAIオプティマイザの次代を示す「Muon欠陥」と「Aurora」救助報告が届いた。

---

## GitHub、内部リポジトリ3,800件が窃盗 — VS Code拡張を通じた供給チェーン蠕虫攻撃

GitHubは5月20日、同社の従業員デバイスにインストールされた毒入りVS Code拡張を通じて、約3,800の内部リポジトリが攻撃者にアクセスされたことを **[確認した](https://venturebeat.com/security/github-confirms-3800-repos-stolen-poisoned-vs-code-extension-supply-chain-worm-microsoft-python-sdk/)**。攻撃の犯行声明したのはTeamPCP（Google脅威インテリジェンス상은UNC6780と追跡）で、盗んだリポジトリを5万美元から販売開始している。

この攻撃は独立した出来事ではなかった。同日、npmパッケージ639個の悪意あるバージョンがMini Shai-Hulud供給チェーン蠕虫の最新波で Fulcio/Rekor にruntimeに攻撃用のSigstore署名証明書が生成され**本身の不正なprovenaceが埋め込まれる**という手法が観測された。Endor LabsのPeyton Kennedyシニアセキュリティ研究者は「TanStackはOID信頼済み公開、署名済みprovenance、全メンテナーアカウントの2FAと正しい設定していたが攻撃は普通に成功了」とVentureBeatに語った。

**[Trend Microが追跡した](https://venturebeat.com/security/github-confirms-3800-repos-stolen-poisoned-vs-code-extension-supply-chain-worm-microsoft-python-sdk/)**ところ、TeamPCPはTrivy（2026年3月）、Checkmarx KICS、LiteLLM、elementary-data、Bitwarden CLI、TanStack（5月11日）、Mistral AI（5月12日）と少なくとも7回の確認された波を展開している。Binance共同創業者のCZさんは「プレーンテキスト секретовや機密ドキュメント・構成を持つプライベートリポジトリがあれば、直ちにシークレットをローテートしろ」と投稿した。

GitHubは「最もインパクトの大きい認証情報から優先して一夜で重要シークレットをローテートした」と表明。内部リポジトリにはインフラ設定、ステージング認証情報、デプロイメントスクリプト、内部APIスキーマが含まれており、これはデータ漏えいではなく**インフラインテリジェンスの漏出**に該当する。

**開発者への影響**: この攻撃は、AIツールを使う非法人アカウントから67%の従業員が仕事用アプリにアクセスしている（Verizon 2026 DBIR）と同日報告された事実と合わせ、**AI-Agent供应链の全面的な脆さ**を浮き彫りにした。Azureの honeypot ネットワークでは既知の脆弱性が90秒以内に悪用される你已经確認されている。

---

## NVIDIA、独自CPU「Vera」をAnthrothropic・OpenAI・SpaceXに納入 — エージェントAI時代の新クラス

NVIDIAは5月18日（米国時間）、初めてのパーソナルCPU「**Vera**」をAnthrothropic（サンフランシスコ）、OpenAI（ミッションベイ）、SpaceX AI（パロアルト）に **[手渡し納入した](https://blogs.nvidia.com/blog/vera-cpu-delivery/)**。NVIDIA副总裁のIan Buck씨가 AnthrothropicのJames Bradbury最高計算責任者に直接届けた。Oracle Cloud Infrastructure（火曜日）も受け取った。

Veraは2026年3月のGTCサンノゼでJensen HuangCEOが「次の数十億ドル事業」と介紹した新しいクラスのCPUで、**エージェントAI専用に設計**された。従来のコア密度重視設計では対応できない、同時実行リアルタイムタスク требования に応える：

- **88コアのNVIDIA設計Olympusコア**
- **1.2TB/秒のメモリ帯域幅**
- **コアあたりの50%高速なパフォーマンス**

AIエージェントはGPUだけで動くわけではない——すべてのエージェントサンドボックス、ツールコール、オーケストレーションレイヤー、長期コンテキスト検索操作はCPUの workload。Veraはこれらの同時実行リクエストを処理する新しいアプローチで、「モデルが答えることから動くことに转移するにつれて、Veraはその作業を大規模に動き続けるためにpurpose-builtされた」とBuck副总裁は述べた。

NVIDIAは「Vera-poweredシステムの道のりはまだ始まったばかり」と投稿。AIファクトリーの効率を最大化するこのCPUの展開は、**エージェントAIのインフラストラクチャ選択分歧点**を示した——専用CPUでエージェントワークロードをオフロードする方向性である。

---

## Cerebras、Kimi K2.6をGPUクラウドの6.7倍高速で提供 — 981 tokens/秒で万亿パラメータ推論

Cerebras Systemsは5月19日、2026年最大テクノロジーIPOを完了した週明けから **[大胆な布石を打った](https://venturebeat.com/technology/cerebras-says-its-chips-run-a-trillion-parameter-ai-model-nearly-7-times-faster-than-gpu-clouds/)**。北京Moonshot AI開発の万亿パラメータ открытое-weightモデル「**Kimi K2.6**」を企業向けに每秒981トークンで提供開始。独立的ベンチマーク企業Artificial Analysisが検証し、**次の速いGPUベースクラウドより6.7倍高速、 中央値より23倍高速**を確認した。

典型的な10,000入力トークンのエージェントコーディングリクエスト（500出力トークン込み）で、Cerebrasは **5.6秒** で全応答を完了。公式Kimiエンドポイントでは163.7秒かかり、**最終回答までの時間で29倍の改善**となる。

Kimi K2.6は2026年4月20日にMoonshot AI（Tsinghua University出身者が2023年に設立、中国の「AI Tiger」企業の一社）から発売されたMoE（Mixture-of-Experts）モデルで、1兆パラメータ总数のうち每秒8人の専門家を選択（1共有を含む）。アクティブ化パラメータは320億、256,000トークンのコンテキストウィンドウで動作する。

SWE-Bench Proで **58.6** を記録しClaude Opus 4.6を超え、GPT-5.4に匹敵。特工性能ベンチマークでもleadしている。Cerebras製品マーケティングディレクターのJames Wang氏：「Anthrothropicのモデルは素晴らしいが、とても高価で容量が常に不足している。企業はこの代替案を強く求めている」

**なぜwafer-scaleはGPUより速いか**: 従来のNVIDIA GPUクラスタ（NVL72構成など）ではモデルのパラメータが複数のDiscreteチップに分散され、チップ間の高帯域幅相互接続がボトルネックになる。Cerebrasのwafer-scaleアーキテクチャはこの制約を本質的に排除する設計だ。

地政学的注意点は、中国開発モデルが米国企業に提供されることで、金融サービス・ヘルスケア・防衛などの厳格なコンプライアンス要件を持つ購入者は評価が必要となる。

---

## 企業AIエージェントが「忘れる」問題 — Decision Context Graphで非回帰性を確保

企業AIエージェントがPilotフェーズを離れるれない最大の原因が明らかになった。RAGアーキテクチャは语义的に関連するドキュメントを検索するには優れるが、そこでおしまい——という Gap が存在する。 **[Rippletide](https://venturebeat.com/orchestration/enterprise-ai-agents-keep-failing-because-they-forget-what-they-learned/)**（Neo4jエコシステムのスタートアップ）は **Decision Context Graph** と呼ばれるフレームワークを構築した。核心的機能：**非回帰的なエージェント**、検証済みアクションの順序をfreezeし、時間経過とともにcompoundできる。

RIPpletide共同創業者のYann Bilien最高科学責任者は「最も重要な点は非回帰性：エージェントが新しいものを生成する際に、以前的発見にcompoundできる状態をどう確保するか」とVentureBeatに語った。

なぜRAGでは不十分か :

- 検索されたドキュメントが現在の決定にRelevantでない可能性がある（幻觉の原因）
- エージェントが正しいデータを取り出しても、判断の根拠を示すガイダンスが欠けていることが多い
- 文書は「まだ適用可能か」「 superseded されたか」「優先される競合ルールがあるか」をエージェントに伝えない

Northwest AI ConsultingのWyatt Mayham氏：「誰もがRAGから始める：関連ドキュメントを引き出し、プロンプトに詰め込み、モデルに分からせる。でもチャットボットにはそれでいいが、判断して行動するエージェントには『即壊れる』」

**Decision Context Graphの3原則**:

- **適用可能性（Applicability）**: ロジックが明示的に符号化され、エージェントが現在の状況でどのルールを覚えて適用すべきかを知る
- **時間対応メモリ（Time-aware memory）**: 各ルール・決定・例外は時間スコープを持ち、「その時と今何が真か」をエージェントがreasonできる
- **決定パス（Decision paths）**: システムはどこからAに到達したか、なぜ特定のだいたいかを説明できる

Bilien氏：「Neuro-symbolicは2つの部分をもたらす：エージェントに大きな自律性を与えるneuronal部分と、 필요한データ量を減らして制御をもたらすsymbolic部分」

**Non-regression（非回帰）のメカニズム**: 解決策が「満足できる」と評価されると、グラフはそのアクションの順序をfreezeする。将来の探索は「この検証済み動作の安定したベース」から開始され、新しく獲得したスキルが以前学習した良い動作を上書きするのを防ぐ。

---

## NanoClaw → NanoCo AI、$12M seedで「企業の第2の頭脳」 comercializeへ

NanoClaw（OpenClawからフォークしたMITライセンスの安全的オープンソースAIエージェントツール）的作成者が **[NanoCo AI](https://venturebeat.com/orchestration/nanoclaws-creators-are-turning-the-secure-open-source-ai-agent-harness-into-an-enterprise-second-brain/)** を設立し、Valley Capital Partnersが主導する **$12M（ oversubscribed）シードラウンド** を確保した。Strategic investorsにはDocker、Vercel、monday.com、Factorial Capital、そしてHugging Face CEOのClem Delangueが名を連ねる。

NanoCo AIのCEO、Gavriel Cohen氏（元Wixエンジニア）：「殺しのユースケースは1対1のプロフェッショナルアシスタントだ。人を2倍、3倍高效にできるなら、より多くの人を求めたくなるだろう」

NanoClawの中核ロジックは意図的に **約500行のTypeScript** に最小化された（OpenClawは40万行）。セキュリティチームがその全文を約8分で監査できる規模。这意味着企業向けの監査可能性がある。

NanoCo AIのアプローチ :

- **MicroVMベースのDocker Sandboxes**（Dockerとの戦略的パートナーシップ）で各NanoClawエージェントを厳格に分離
- 生API認証情報はエージェント自体に送到されない。アウトバウンドリクエストはOneCLI Rust Gateway経由で会社定義ポリシーを適用
- 敏感な「write」アクション（クラウド環境の変更やメール削除など）はRich Interactive Cardで人間のユーザーに承認要求を送信

Cohen氏：「NanoClawでは、潜在的なプロンプトインジェクションの『爆破半径』がコンテナとその特定の通信チャネルに厳格に制限される」

NanoCoはNanoClawをMITライセンス开源으로維持しつつ специализированные企業向けのマネージャーサービスを販売。Andrej Karpathyの「LLM Knowledge Base」コンセプト类似した動的ナレッジグラフを各ユーザーに構築する。

---

## Import AI 457号より：Fast16ウイルス、Muon オプティマイザの欠陥、Auroraの救助

Jack Clark氏発行の **[Import AI 457号](https://importai.substack.com/api/v1/posts/import-ai-457-ai-stuxnet-cursed-muon)** では3つの重要なテーマが展開された。

### Fast16 — 武器プログラム向け高空精度ソフトウェアSabotage

SentinelOneの研究者たちが **fast16.sys** と呼ばれる約20年前のコンピュータ病毒的调查结果を公开した。このウイルスは以下の特徴を持つ：

- **高性能計算ソフトウェアのメモリ内コードにパッチを当てて結果を改ざん**
- 対象：LS-DYNA 970、PKPM、MOHID 水理モデルリングプラットフォーム（衝突テスト、構造解析、核兵器開発関連シミュレーションに使用）
- イランのJCPOA第T条违反疑惑に関連する報告でもLS-DYNAが言及されている

SentinelOne所述：「最も強い重なりは、2000年代中期の3つの高空精度エンジニアリング・シミュレーションスイートに向けられている。LS-DYNAは特にイランの核兵器開発に関連する報告で引用されている」

 Superintelligence が 「AI non-proliferation」を核保有国の「nuclear non-proliferation」と同样に重要な目标と見なす 경우、この種の微妙で обнаружение が困難なバグは未来の状態を示している可能性がある。

### Muon オプティマイザがニューロンを殺す — Auroraが救助

Tilde Researchの研究者が **Muon オプティマイザの分解** を行い、訓練品質を損なう可能性のある奇妙な欠陥を発見した：

- **Muonの更新は tall マトリックスでrow-norm anisotropyを継承**
- **MLP層のニューロンの大きな割合が恒久的に死ぬ**可能性（「Muon can result in neuron death in MLP layers」）
- ステップ500時点で4分の1以上のニューロンが事実上死亡し、leverage scoresの二峰性分布を生む

研究者はこの問題を解決する **Aurora**（「rectangular matrices用のleverage-aware optimizer」）を構築。1.1Bパラメータトランズフォーマー（~100Bトークン）で評価した場合、AuroraはMuon（2.31）およびNorMuon（2.33）を開け、Smoothed loss **2.26** を達成した。

---

## 参考リンク

- [GitHub供給チェーン攻撃（VB）](https://venturebeat.com/security/github-confirms-3800-repos-stolen-poisoned-vs-code-extension-supply-chain-worm-microsoft-python-sdk/)
- [NVIDIA Vera CPU納入](https://blogs.nvidia.com/blog/vera-cpu-delivery/)
- [Cerebras Kimi K2.6推論（VB）](https://venturebeat.com/technology/cerebras-says-its-chips-run-a-trillion-parameter-ai-model-nearly-7-times-faster-than-gpu-clouds/)
- [企業AIエージェントの記憶問題（VB）](https://venturebeat.com/orchestration/enterprise-ai-agents-keep-failing-because-they-learned/)
- [NanoClaw NanoCo AI（VB）](https://venturebeat.com/orchestration/nanoclaws-creators-are-turning-the-secure-open-source-ai-agent-harness-into-an-enterprise-second-brain/)
- [Import AI 457号](https://importai.substack.com/p/import-ai-457-ai-stuxnet-cursed)
- [Google Managed Agents API（VB）](https://venturebeat.com/orchestration/googles-managed-agents-api-promises-one-call-deployment-at-the-cost-of-execution-layer-control/)
- [NVIDIA Google Cloud AI Builders](https://blogs.nvidia.com/blog/google-cloud-developer-community-ai-builders/)

---

*本文の情報は2026年5月21日時点のものです。*