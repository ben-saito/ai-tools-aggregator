# AI開発ニュース：Agentic AIの金融・小売への実装とAIサイバー犯罪の攻防

2026年6月第3週、AI業界は「AIエージェントの商用実装」と「AIを使ったサイバー犯罪の急増」という2つの大きなテーマで進展が見られた。VisaがChatGPTとの統合を発表し、AIエージェントが初めて人間の介入なしに小売取引を完了できる時代が到来した。同時に、GoogleはAIを活用して大規模フィッシング詐欺を行う中国系サイバー犯罪組織を提訴し、AIの悪用と対策が新たな段階に入った。

---

## Agentic Commerce時代到来：VisaがChatGPTと統合

Visaは6月11日、ChatGPTと自国の決済インフラを直接連携させる統合を正式に発表した。この統合により、AIエージェントはユーザーの prompts に基づき、商品カタログの評価から決済完了までを一気通貫で実行できる。

**技術的な仕組み：** ユーザーはChatGPTに特定の商品購入を指示するだけでよい。LLMが仕様書の解析、口コミスコアの集計、料金比較を実行し、最適なvendorを選択する。Visaは**永続的なプログラム可能トークン化**を通じて認証問題を解決した。ユーザーはChatGPT環境に特定の発注パラメータを事前承認しておく。LLMが購入を決定すると、単一回限りの決済トークンをVisaネットワーク経由で生成し、APIを通じてmerchantのバックエンドに送信する。

従来のEコマースCheckoutFlowは手動のデータ入力、CAPTCHA検証、多要素認証ループを要求し、これらが autonomous agent の障壁となっていた。Visaの統合により、これらの障壁がすべて排除された。

**企業にとっての意味：** Commerce の追跡方法が根本的に変わる。今まで企業は直帰率、セッション時間、カート放棄率を測定していた。AIエージェントは閲覧しない——エンドポイントをクエリし、必要なデータを抽出し、決済を実行するか接続を切断する。Retailer はLLMのIPアドレスからのAPIクエリ頻度を追跡し、なぜ競合製品が選択されたかを製品データフィードの構造的差異から分析する必要がある。

---

## Coinbase for Agents：AI取引エージェントの金融執行層

Coinbaseは6月12日、自律型AIエージェントがユーザーの代わりに取引を実行・管理できるプラットフォーム「Coinbase for Agents」を正式启动した。

**機能：** ユーザーは60% Bitcoin、20% Ethereum、20% Solanaといった目標配分を指定するだけでよい。エージェントはリアルタイム価格データを評価し、市場が5%、10%、15%下落した時点で指値注文を実行して資産を蓄積する自動化された routines を数ヶ月間にわたって実行する。

プラットフォームは現在現物取引とデリバティブ取引をサポートしており、インデックスファンド、一般株式、商品、先物市場への拡大を計画中。エージェントは24時間体制で待機現金を監視し、idle capital を報酬獲得に充当するか、特別な注意が必要な資産ポジションをハイライトする。

ユーザーはプラットフォームのガバナンス機能を通じて最大取引量、特定許容資産、絶対支出制限を明示的に設定できる。

Coinbase for Agents は2024年のAgentKit起動から始まる消費者製品スイートの拡大の完了を意味する。x402プロトコルの導入とCoinbase for Agentsのリリースにより、金融実行層が確立された。

---

## Google、AIサイバー犯罪組織を提訴——290以上のフィッシングテンプレートを生成

Googleは6月12日、AIを活用した大規模フィッシング詐欺を行う中国系サイバー犯罪組織「Outsider Enterprise」に対して訴訟を提起した。

**攻撃の規模：** 同グループは9,000の偽ウェブサイト、100万の不正登録ドメイン、250万件のAndroidユーザーへのSMSを送信していた。2025年11月14日から2026年4月14日までの5ヶ月間に、Googleは159万URL以上を検出。FBIによると、同グループのフィッシングプラットフォームにより「少なくとも推定387万枚のクレジットカード情報が盗まれ、被害額は約19億ドル」に上る。

**AI惡用の手法：** 「Outsider」と名付けられたこのサービスは週88ドルまたは月200ドルで提供される「phishing-for-dummies」ソフトウェア。AIプラットフォーム（Geminiを含む）の助けを借りて偽ウェブサイトを作成でき、290以上のプレビルドテンプレートで正規ウェブサイトを「数分で」複製できる。サイバー犯罪者はTelegramチャンネルで協調・訓練・攻撃開発を行い、Googleは米司法省、FBI、AT&T、T-Mobile、Verizonと協力している。

**GoogleのAI対策：** Googleは「AI搭載ツールでAI搭載詐欺と闘う」方針を示し、月間100億件以上の詐欺メッセージを検出・遮断している。Androidユーザーからの報告だけでは5月に14日間で55,000件のスパムSMSが報告されており、1分間に2件以上の割合となる。

---

## Import AI 460より：RLモデル与社会システムハッキング

AI研究ニュースレターImport AI第460号では、複数の重要な研究動向が報告された。

**SocioHack：** Kings College London、Fudan University、Alan Turing Instituteの研究者は、AIシステムがSEC Rule 10b5-1やTexas two-step bankruptcy構造などの制度報酬構造を「ハッキング」する能力を測定するベンチマーク「SocioHack」を構築した。72のサンドボックス環境でテストした結果、RLで訓練されたLLMは歴史的にパッチ済みだった戦略を61.25%の再現率で再発見でき、制度の意図を技术上コンプライアンスながら回避する「societal hacking」が実証された。

**AnthropicのRSI（再帰的自己改善）の初期症状：** Anthropicの内部分析では、2026年のコードマージ量が2024年比で8倍に増加しており、再帰的自己改善の初步的な兆候が観察されている。 labs がモデルをより有能力にするほど、それ自体が更难なタスクを解決できるようになるという早期の兆候もある。ただし、パラダイムシフトを起こすような独創的なアイデアをAIシステムがを生み出せるかどうかという点はまだ確認されていない。

**RL訓練ドローンレーサー：** 研究者为は强化学習で訓練されたドローンがexpert human pilotりを上回ることを実証した。物理世界で超知能がどのようなものかを示す事例となる。

---

## 参考リンク

- [Visa ChatGPT integration enables AI agent retail purchasing](https://www.artificialintelligence-news.com/2026/06/11/visa-chatgpt-integration-enables-ai-agent-retail-purchasing/)
- [Coinbase for Agents: Automating portfolio trading with AI](https://www.artificialintelligence-news.com/2026/06/12/coinbase-for-agents-automating-portfolio-trading-with-ai/)
- [Chinese cybercrime operation that used AI to scam 'hundreds of thousands of victims' sued by Google](https://techcrunch.com/2026/06/12/chinese-cybercrime-operation-that-used-ai-to-scam-hundreds-of-thousands-of-victims-sued-by-google/)
- [Import AI 460: Reward hacking society, RSI data from Anthropic; and RL-based quadcopter racing](https://importai.substack.com/p/import-ai-460-reward-hacking-society)

---

*（本文の情報は2026年6月15日時点のものです）*
