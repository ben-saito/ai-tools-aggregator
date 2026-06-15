# AI開発ニュース 2026年6月15日版：SalesforceがFinを3.6億ドルで買収、Googleの拡散モデルがトークン生成を4倍高速化

AIプロトコルの標準化から、米政府のAIモデル規制対応まで——今週はAIエコシステムの根幹に触れる話題が続けている。本稿では、SalesforceのFin買収、GoogleのDiffusionGemma、MCP/A2Aプロトコルの運輸層問題、NanoClaw×JFrogのセキュリティ連携、PixelRAGのビジョン基底RAG、そしてGoogleの「Faithful Uncertainty」をまとめる。

---

## Salesforce、AIカスタマーサービスプラットフォームのFinを36億ドルで買収——Agentic AI戦略を加速

米CNBCが伝えたところによると、SalesforceはAIエージェントベースのカスタマーサービスプラットフォームFinを**36億ドル**で買収することに合意した。FinはかつてIntercom傘下で、AIによる自動客户服务を実現していた企業で、Salesforceは今回の買収によりAgentic AIオファリングの強化を図る。

SalesforceのCEO Marc Benioff氏は、「顧客サービスにおけるAIエージェントは、もはや実験段階ではなくなった」と語り、Finの自律型AI技術がSalesforceのService Cloudに統合されることで、カスタマージャーニー全体を自動化し、人のエージェント是高次の判断に集中できるようになるとの展望を示した。

業界的には、Finの買収はMicrosoftがInflectionを買収したパタンと似ており крупные IT企业对AIスタートアップを取り込んで自社AIポートフォリオを补完する動きが加速している。

---

## Google DiffusionGemma——ブロック内で256トークンを並列生成し的自己修正する拡散言語モデル

Googleは6月11日、DiffusionGemmaという新しい実験的オープンソースモデルを公開した。VentureBeatが伝えたところによると、DiffusionGemmaは**テキスト生成に拡散プロセスを適用**したもので、Gemma 4バックボーン基础上、Apache 2.0ライセンスで公开されている。

従来の言語模型がタイプライター式に左から右へ1トークンずつ生成するのに対し、DiffusionGemmaはまず256個のランダムプレースホルダートークン（空白のキャンバス相当）を配置し、全体ブロックに対して複数回の求精パスを並列に実行する。各パスでモデルは各ポジションを評価し、確信度の高いポジション부터ロックしていく。不确定なポジションはランダム化され、次のパスで再評価される。

このアーキテクチャから2つの重要な特性导かれる：

- **自己修正能力**: 誤ったトークンをコミットしてしまった場合、Autoregressiveモデル不同的是、DiffusionGemmaは低確信度のポジションを识别して次のパスで再評価できる
- **双方向コンテキスト**: ブロック内の全ポジションが他の全ポジションに同時 attend し、シーケンスの後ろに登場するトークンも_conditioning_に含まれる

vLLMとの統合により、Nvidia H100（FP8量子化）で**1,008トークン/秒**、H200では約6倍の高速化（標準Autoregressive比）を達成，消费電力当りの處理量も大幅に改善した。

欠点として、Google自身が認めるところによると、DiffusionGemmaの出力品質は標準的なGemma 4に及市场 скорость追いついていない。「最高品質を必要とするアプリケーションには、標準のGemma 4の導入を推奨する」と公式投稿で述べた。

---

## AIエージェントプロトコル動向：MCPがツール呼び出しを解決、A2Aが協調を解決——残るは「運輸層」

分散計算の歴史は、プロトコルの乱立とその後の統合というサイクルで進んでおり、AIエージェントの世界も同じ道を辿り始めている。VentureBeatは6月14日、関連する4つの主要なプロトコル——**MCP**（Anthropic）、**A2A**（Google）、**ACP**（IBM Research）、**ANP**（独立作業グループ）——の現状を整理した記事をpublishedした。

MCPはツール呼び出しのインターフェースとしてすでに勝利近い。Linux Foundationが確認したところでは、2026年4月時点で**1万個以上の公開MCPサーバ**が稼働しており、Python SDKは月間1億6400万ダウンロードに達している。ツール呼び出し層の標準化は事実上完了した。

A2Aはタスク協調のインターフェースで、エージェント間のタスク委譲、Agent Cards（機能広告）、と同期/ストリーミング/非同期の3つのインタラクションモード定義する。Googleは2025年6月にLinux Foundationに寄贈しており、企業AIチームに広く採用されている。

残る問題は** транспорт層（セッション層、OSIレイヤー5）** である。現在すべてのプロトコルがHTTP上で動作するが、HTTPは「到达可能なサーバ」を前提としており、网络地址変換（NAT）の向こう側——全ネットワークデバイスの88%がNATの内側にある——では、リレーなしに直接接続できない。

この運輸問題を解決する技術はすでに存在する。STUNによるNATトラバーサル（网络トポロジの約70%をカバー）、X25519 Diffie-HellmanとAES-256-GCMによる認証付き暗号化、QUICやUDP上の滑动窓プロトコル——これらはWireGuardのVPNトンネルやWebRTCのブラウザ間メディアストリームと同じプリミティブだ。

必要なのは、能力ベースのルーティングである。エ場間AIが「リアルタイム通貨データを持つピアはどれか？」这样的クエリを投げ、現在アクティブな specialist エージェントのリストを受け取ることは、DNSよりもサービスレジストリに近いものであり、ANPの設計思想を运输層に拡張したものが求められる。

---

## NanoClaw × JFrog——AIエージェントが悪意のあるコードをダウンロードするのを阻断する「免疫システム」

NanoClaw（OpenClawのEnterprise対応开源バリアント）のクリエイターと、ソフトウェアサプライチェーン管理のリーダーであるJFrogが提携し、**NanoClaw自律型エージェントを悪意のあるコードインジェクションから守る**統合防御をリリースした。

問題の本質は位置の高さにある。NanoClawような自律型エージェントは、人的オペレーターの知らないうちにバックグラウンドでパッケージをインストールし、能力を広げようとする。例えばエージェントが音声メモを処理しようとして、「音声メモを理解できないからパッケージをダウンロードしてインストールする必要がある」と判断し、恶意のあるライブラリを引き当てる可能性がある。

NanoCo AIのCEO Gavriel Cohen氏によると、「オペレーターは 개발자 ではないかもしれず、セキュリティの意味を何も理解していない」という。

NanoClaw agentsは此次の統合により、软件パッケージ・CLIツール・MCPサーバへのリクエストをJFrogレジストリ exclusively through ルーティングするようになった。万一危険なパッケージ（脆弱なバージョンのAxiosなど）を検出すると、インストールを阻断し、代わりにセキュリティポリシーエラーを返하면서、承认済みで安全 версия を自動的に探しに行く动态補正ループを形成する。

企業向には、既存の商用JFrog环境へのシームレスな統合が提供され、オープンソースコミュニティ向けにはJFrogが無償で安全扫瞄済みアーティファクトへのアクセスを提供する。

---

## PixelRAG——ビジョン言語モデルを使ったテキスト파싱回避のRAGシステム

UC Berkeley、Princeton、EPFL、Databricksの共同研究チームが6月12日、PixelRAGという新しいRAGシステムを発表した。SimpleQAベンチマーク（1000個の事実的Wikipedia質問）の分析によると、テキストベースRAGの失敗の主要原因3つが見つかった：

- **パーサー损失**（失敗の36.6%）：HTMLからテキストへの変換が構造的コンテンツを破壊し、解答を含むテキストチャンクがコーパス中存在しなくなる
- **ランク损失**（失敗の55.2%）：解答はコーパスに存在するが、情報ボックスのようなキーワード密な infobox が1位を占め、解答を含む段落が20位以下に押しやられる
- **リーダー损失**（失敗の8.2%）：正しいコンテンツはリーダーに到达するが、平坦化された構造导致の誤归属が発生

PixelRAGは这个问题を根本から解决的：网页をテキストにパースせず代わりにスクリーンショットとして保存し、ビジョン言語モデルに直接読み込ませる。 Wikipediaの700万記事から生成した約3000万のスクリーンショットタイルでテストした結果、テキストベースRAGに対して最大**18.1%の精度向上**を達成し、Agentのトークンコストを10分の1に削減した。

レンダリングにはPlaywrightを使用し、875ピクセルビューポートで1024ピクセル長のタイルにスライス。インデックスにはQwen3-VL-Embedding-2Bで生成した2048次元ベクトルを使い、FAISS近似最近傍インデックスに保存する。

---

## Google研究者が「Faithful Uncertainty」を提案——LLMに「確信度に応じた」曖昧さ表現をさせる

Googleの研究者はLLMの幻覚問題を新たな角度から取り組む论文をpublishedした。「Faithful Uncertainty」は、モデルの linguistic uncertainty（不确定性を表現する言葉）と intrinsic uncertainty（実際の内部的統計的確信度）を整合させるメタ認知技術である。

現在の幻覚軽減アプローチの最大の問題は「ユーティリティ税（utility tax）」である。事実的错误率25%を5%目标に削减しようとすると、正解の52%まで丢弃する必要がある。言い換えると、「幻觉零点」を目标にすると、モデルが実は知っている解答すら拒否することになる。

Faithful Uncertaintyでは、幻觉が「信頼できる误り」ではなく「自信滿点で登場する误り」と再定義される。モデルが适当的な不确定さ的表达（例：「完全に確かではないが、私の最良の推定は...」）を使用するなら、それは幻觉ではなく假设に過ぎない。

この「メタ認知」能力により、エージェント型AIは自身の内部知識では不十分だと判断した時点で、外部ツールや検索APIを動的にトリガーすることができるようになる。医師の诊断と同じ逻辑で、「この骨折だ」と確信ある说的是のではなく、「捻挫かもしれないが、检查をしよう」と適切にhevgesする医生を信頼するのと同じである。

---

## 参考リンク

- [MCP solved tool calling. A2A solved coordination. What solves transport? - VentureBeat](https://venturebeat.com/technology/mcp-solved-tool-calling-a2a-solved-coordination-what-solves-transport)
- [Google's DiffusionGemma generates 256 tokens in parallel and self-corrects as it goes - VentureBeat](https://venturebeat.com/technology/googles-diffusiongemma-generates-256-tokens-in-parallel-and-self-corrects-as-it-goes)
- [Salesforce to buy AI customer service platform Fin for $3.6 billion - CNBC](https://www.cnbc.com/2026/06/15/salesforce-buys-ai-customer-service-platform-fin.html)
- [NanoClaw and JFrog launch 'immune system' to block AI agents from downloading malicious code - VentureBeat](https://venturebeat.com/technology/nanoclaw-and-jfrog-launch-immune-system-to-block-ai-agents-from-downloading-malicious-code)
- [PixelRAG beats text parsers on accuracy and cuts AI agent token costs 10x - VentureBeat](https://venturebeat.com/technology/pixelrag-beats-text-parsers-on-accuracy-and-cuts-ai-agent-token-costs-10x)
- [Google researchers introduce 'faithful uncertainty,' allowing LLMs to offer best guesses instead of hallucinations - VentureBeat](https://venturebeat.com/technology/google-researchers-introduce-faithful-uncertainty-allowing-llms-to-offer-best-guesses-instead-of-hallucinations)

---

*（本文の情報は2026年6月15日時点のものです）*
