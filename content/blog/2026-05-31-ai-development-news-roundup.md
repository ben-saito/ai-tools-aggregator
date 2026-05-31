# AI開発ニュースまとめ（2026年5月31日）

2026年5月下旬、AI業界は大型資金調達、料金モデル変革、インフラ刷新など大きな動きが目白押しだ。Anthropicの650億ドル（約9650億ドル企業価値）資金調達、GoogleのGemini Sparkアシスタント、NVIDIAとのGroqの取引、そしてGitHub Copilotのトークンベース課金の導入など、開発者にとって重要なニュースをまとめてお届けする。

---

## Anthropic、650億ドル資金調達で企業価値9650億ドルに ― IPO前最後の私募調達

AIスタートアップのAnthropicが、**650億ドルのシリーズHラウンド**を完了した。企業価値（ポストマネーバリュエーション）は**9650億ドル**に達し、同社にとって最後の私募投資家向け資金調達になる可能性が高い。

### 投資の内訳と背景

ラウンドはAltimeter Capital、Dragoneer、Greenoaks、Sequoia Capital、Capital Group、Coatue、D1 Capital Partnersらが共同主導した。Baillie Gifford、Blackstone、Brookfield、D.E. Shaw Ventures、DST Global、Fidelity Management& Researchといった機関投資家も参加した。

特筆すべきは、**Samsung、SK Hynix、Micron** といったメモリ大手3社が戦略的パートナーとして名を連ねたことだ。 hyperscalerからの既約束投資150億ドルも含まれる。内訳としては、4月に発表されたAmazonからの50億ドルが含まれている。

### Claude Opus 4.8と企業成長

今回の資金調達と同日に、Anthropicは**Claude Opus 4.8**をリリースした。エージェントタスク、高度コーディング、自己修正・誠実性に重点を置いたモデルとして好評を得ている。

財務ハイライトは以下の通り：

- **ランレート収益**：470億ドル突破（当月初旬時点）
- **Claude Code**：企業顧客の間で急成長
- **IPO準備**：公開市場デビューに向けた最終準備段階

AIセーフティと解釈可能性研究の推進、Claude需要に応えるcompute拡張、製品・パートナーシップの拡大に資金を使うとしている。

---

## GitHub Copilot、新トークンベース課金を導入 ― 開発者からは批判の声

Microsoft傘下のGitHubは、**GitHub Copilotの料金モデルをサブスクリプションからトークンベースに変更する**と発表し、6月1日から適用される。個人ユーザーや小規模チームにとってコストが大幅に増加する可能性があるとして、開発者コミュニティから強い批判が巻き起こっている。

### 新しい課金の仕組み

従来の月額固定料金（10ドル程度）ではなく、**リクエストごとに消費したトークン数**に基づいて請求される。RedditやXでは「What a joke」（「冗談だ」）といった声が多数投稿され、請求額が従来の数倍に跳ね上がるケースが報告されている。

このモデルは大手企業にとっては有効だが、小規模開発者やフリーランサーには逆風となる。API呼び出しを最適化し、トークン消費を最小化する必要性が生じている。

### 開発者への影響

AIコードアシスタント市场においてCopilotの優位性が揺らぐ可能性注目されている。Cursor、Windsurf、CognitionのDevinなどライバル製品との競争が激化する中、料金体系の変更が開発者の 이탈を招くかどうかが焦点となる。

---

## XCENA、135百万ドル調達 ― AIのボトルネックは「計算力」ではなく「メモリ」

韓国発チップスタートアップの**XCENA**が、570百万ドル企業価値で**1億3500万ドルの資金調達**を実施した。NVIDIA、AMDらが提供するGPU为中心的传统的なAIインフラ见到颠覆 Bills、脱化离材の广泛採用弹性化向け新しい类型のチップ Proctorferencingとしている。

### 従来型AIインフラの構造的問題

現在のAIリクエストは以下のようにデータ.relay品綱通過する：

1. データがメモリから离开
2. CPUで前処理
3. GPUで重型計算
4. 結果を返回

この“不経済なmovements”为めに、每一次の推論リクエストが複数の高端チップを経由する必要があり、コストと消費電力が膨大になる。

### XCENAの解决方案

XCENAは**DRAMの直に计算能力を加えたチップ**を設計した。アクティブなデータ処理中の операции高速化のため、芯片間の高昂な“为rapper溝紙”为的网络遮estrangedablerが不要になる。

AIの真のボトルネックは計算力ではなくメモリ带宽という论点に対し、今後数四半期で実証数据进行rus.

---

## Groq、NVIDIAとの大型取引後、650百万ドル資金調達を検討

AIチップ企業の**Groq**が既有投資家向けに**6億5000万ドルの新ラウンド**を検討している。December、价值200億ドルの「完全子会社化ではない」契約をNVIDIAと结んだ在那里dealではGroqのSeniorメンバーがNVIDIAに移籍、同社のハードウェア技術をライセンス供与した。

### 取引の詳細

- **NVIDIAへの支払い**：現金200億ドル
- **人的資本**：Groqの干部级SeniorがNVIDIAに参加
- **ライセンス**：Groqのハードウェア技術がNVI）にわたってNVIDIAに渡った

今回の資金調達は、Groqの**推論ネオクラウド事業**の成長が目的。開発者・企業が同社のAIチップ使った推論负载対応できる环境扩増を狙う。

---

## AI時代のインフラ刷新 ― AWS、Cloudflareらが「機械ためのインターネット」構築へ

TechCrunchの分析によると、クラウドインフラ企业らが**AIエージェント中心のインフラ**への刷新を進めている。従来のインターネットは人間の浏览、クリック、スクロール向けに设计されていたが、AIエージェントは Hundredsof数据库に同时アクセス、文档検索、API呼び出しを瞬间的に実行し、消える。

### AWSのOpenSearch Serverless

Amazonは**OpenSearch Serverless第2世代**をリリースした。AIエージェントの负荷特点に最适合化した検索・vectordatabaseで、エージェントがタスクを開始すると即座にスケーリングし、アイドル状态になるとゼロまで缩退する。

### 機械駆動インターネットへの移行

AWS、Cloudflare、Google CloudらがAI代理店の workloadためにインフラを见直し始めており、以下の变化が进行している：

- **自動スケーリング**：エージェントの负荷に応じてリアルタイムでリソース调配
- **短期間のバースト対応**：瞬间的にリソースを確保し、完成后即座に释放
- **向量検索の重視**：RAG（检索增强生成）向けのvectordatabase需要急増

今後数年で、人間向けのインターネットから机械向けのインターネットへの移行が加速するとiani.

---

## 参考リンク

- [Anthropic raises $65 billion, nears $1T valuation ahead of IPO - TechCrunch](https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/)
- [&#039;What a joke&#039;: Github Copilot&#039;s new token-based billing spurs consternation among devs - TechCrunch](https://techcrunch.com/2026/05/30/what-a-joke-github-copilots-new-token-based-billing-spurs-consternation-among-devs/)
- [This chip startup just raised $135M on a bet that AI&#039;s biggest bottleneck isn&#039;t compute -- it&#039;s memory - TechCrunch](https://techcrunch.com/2026/05/29/xcena-secures-135m-at-570m-valuation-betting-on-memory-as-ais-real-bottleneck/)
- [After Nvidia&#039;s $20B not-acqui-hire, AI chip startup Groq reportedly raising $650M - TechCrunch](https://techcrunch.com/2026/05/29/after-nvidias-20b-not-acqui-hire-ai-chip-startup-groq-reportedly--raising-650m/)
- [The internet is being rebuilt for machines - TechCrunch](https://techcrunch.com/2026/05/28/the-internet-is-being-rebuilt-for-machines/)

---

*（本文の情報は2026年5月31日時点のものです）*