# AI開発ニュースまとめ（2026年7月第3週）：OpenAIがGPT-5.6でAnthropic追击、Apple傘下でOpenAI提訴、副社長フィジ・シモ氏が退任

OpenAIが7月9日、GPT-5.6ファミリー（Sol / Terra / Luna）の投入と「ChatGPT Work」の発表を行い、AnthropicのFableに対する正面突破を選んだ週となった。価格表も明らかになり、Solは$5入力/$30出力と高性能・高コスト路線に。またAppleがOpenAIを提訴するという予想外の展開も。同じく7月9日、OpenAIのNo.2エグゼクティブであるフィジ・シモ副社長が退任を発表し、公司の経営体制にも変化の波紋が広がっている。

---

## GPT-5.6ファミリー詳解：Sol / Terra / Lunaの三層戦略と価格体系

OpenAIは7月9日、GPT-5.6ファミリー正式発表を行った。CEOサム・アルトマン氏が「 Orders of magnitude more efficient and cost-effective」と表現した新モデルは3つのバリアントで構成される。

### 三層モデルの位置づけ

| モデル | 定位 | 入力 ($/Mtok) | 出力 ($/Mtok) | 主なターゲット |
|--------|------|---------------|--------------|----------------|
| **Sol** | ワークホース（最高性能） | $5 | $30 | エンタープライズ、コーディング |
| **Terra** | ミッドレンジ | $2.50 | $15 | 汎用タスク |
| **Luna** | バジェット | $1 | $6 | コスト重視のアプリケーション |

### コーディング能力でAnthropic Fableを猛追

OpenAIはArtificial Analysis Coding Agent Indexを引用し、Solが「**80点を記録、Fable 5を2.8ポイント上回り、出力トークン数は半分以下、実行時間は半分以下、コストは約3分の1**」だと主張している。

具体的には：

- **Sol**: コーディングエージェント指数80点（新規 state-of-the-art）
- **Terra**: Fable 5稍稍上回る性能
- **Luna**: Opus 4.8をパフォーマンスで上回る

GPT-5.6は**ChatGPT、Codex、OpenAI API**の全経路で利用可能。アルトマンCEOはCNBCに対し、SolはAIコーディングタスクで**54%トークン効率が向上**했다고述べている。

### サイバーセキュリティ：最も強力なモデル

GPT-5.6は「**strongest cybersecurity model yet**」とされ、 seguinte capabilitiesを提供：

- 脅威モデリング（Threat Modeling）
- コードレビューとパッチ適用
- ブルーチーミング（自陣への攻撃シミュレーションにより脆弱性を事前に発見）

トランプ政権がこのモデルの展開を制限しようとしていたことは、彼のサイバー能力を巡る緊張を物語っている。

### ChatGPT Work：企業向けの新規エージェント製品

OpenAIはGPT-5.6と同時に「ChatGPT Work」も発表。デスクトップ、ウェブ、モバイルで動作する企業向けエージェントで、以下のようなオフィスタスクを自動実行：

- 文書下書き作成
- スプレッドシート生成
- プレゼンテーション作成

これはAnthropicの企業向け戦略への直接的なカウンターとなっている。

---

## フィジ・シモ副社長退任：OpenAIのNo.2が医療長期離脱から常勤撤退

7月9日、OpenAIのNo.2エグゼクティブである**フィジ・シモ（Fidji Simo）副社長**が常勤役職から退くことがWall Street Journalの報道で明らかになった。彼女はスタッフ宛のメモで「、医療離脱が予想より長く HARD であった」として、**パートタイムのアドバイザー役への移行**を発表した。

### シモ氏のOpenAI在任期間

- **2024年**: OpenAIのBoard of Directorsに着任
- **2025年5月**: CEO of Applications（新規創設役職）として入社、サム・アルトマンに直接報告
- **担当領域**: ビジネス・プロダクト両方の運営を統合
- **2026年4月**: 神経免疫疾患の再発を発表、医療離脱を開始
- **2026年7月**: 常勤退任 → パートタイムアドバイザーに

彼女の在任中、COOのBrad Lightcapは「 special projects」役へ異動、CMOのKate Rouchは離脱、CPOのKevin Weil氏も退社しており、経営幹部の流動性が高い状態が続く。

### アルトマンCEOの反応

```
「i am really sad about this and very grateful for all fidji has done for openai,
and even grateful for her friendship and who she is as a person.
we all wish her the best for a speedy recovery. this sucks.」
```

### OpenAIの現在地

ChatGPTの成長が**| late last yearに踊り、収益目標未達**となり、コーディングツールへの傾斜が強まる中、シモ氏は主にコンシューマービジネスの拡大を担当していた。IPO検討中のOpenAIにおいて、後継者問題は現実の経営課題となっている。

---

## TechCrunch注目トピック：Apple vs OpenAI、MetaのInstagram AI機能撤回

### AppleがOpenAIを提訴（7月10日）

AppleがOpenAIに対する**| alleged trade secret theft（営業秘密盗用）|**で提訴したことがTechCrunch 의해伝えられた。詳細なデザイン・エlement技術は明らかされていないがApple IntelligenceとChatGPTの統合が絡む可能性が指摘されている。

### MetaがInstagramのAI機能を撤回（7月10日）

MetaはInstagram上の**| controversial AI feature（物議を醸したAI機能）|**をユーザーからの反発を受けて撤回。これはAI-generated content（AI生成コンテンツ）に対する法的・倫理的議論が継続していることを示している。

### Hugging Face CEO：企業はいまや「AIを所有する」時代

Hugging Faceのクレマン・ドラングルCEOはポッドキャスト而出、「| renting their AI（AIをレンタルする時代）|**は終わった」と主張。同社はオープンソースAIの 가치를強調し、企業が自有のAIインフラを持つ重要性を訴えている。

---

## 創薬AI：新薬開発のパラダイムシフト

### Insilico Medicine：IPF治療薬がPhase III trialsに進出

Insilico MedicineのAI設計した**| idiopathic pulmonary fibrosis（特発性肺線維症、IPF）|**治療薬がFDAのPhase III trialsに進んだ。AI驅使の創薬パイプラインが主要な規制承認段階に達した始めての事例の一つとなる。

### 武田薬 `$600M` のAI創薬パートナーシップ

武田약품工業はInsilico Medicineとの間で**| $600M（約900億円）のAI創薬|-----
に合意했다。AI驅使の分子設計・標的発見プラットフォームを活用し、複数候補化合物の創出を目指す。

### NVIDIA BioNeMo × Anthropic Claude Science

NVIDIAの**| BioNeMo |**がAnthropicのClaude Scienceプラットフォーム向け提供服务を開始。創薬研究のデジタル化を促進するクラウドAIインフラの競争が激化している。

---

## 金融×AI：Bank of Englandがagentic AIの規制枠組みを検討

Bank of England（イングランド銀行）は**| agentic AI（自律型AI）|**の金融分野への適用に関する規制・ルールの再検討を開始。AIシステムが自律的に取引・リスク管理を行う時代を迎え、**| guardrails（安全装置）|**の必要性が高まっている。

---

## 日本：2040年に1,000万台ロボット向け国家AIモデル開発へ

日本政府と民間が協調し、**| 2040年に向けて1,000万台のロボットを動かす国家AIモデル|**の開発を進めている。労働力不足深刻化する中、AIとロボティクスの融合による解決策注目されている。

---

## 参考リンク

- [OpenAI launches its new family of models with GPT-5.6](https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/)
- [Fidji Simo steps down from OpenAI's No. 2 role](https://techcrunch.com/2026/07/09/fidji-simo-steps-down-from-openais-no-2-role/)
- [Apple sues OpenAI over alleged trade secret theft](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-th/)
- [Meta removes controversial AI feature on Instagram after backlash](https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-insta/)
- [SK Hynix raises $26.5B in the biggest foreign IPO in US history](https://techcrunch.com/2026/07/10/sk-hynix-raises-26-5b-in-the-biggest-foreign-i/)
- [Insilico Medicine advances AI drug for IPF to Phase III trials](https://www.artificialintelligence-news.com/news/insilico-medicine-advances-ai-drug-for-ipf-to-phase-iii-trials/)
- [Takeda signs $600M AI drug discovery deal with Insilico](https://www.artificialintelligence-news.com/news/takeda-insilico-ai-drug-discovery-deal/)
- [Japan's answer to its worker shortage: An AI model for 10 million robots](https://www.artificialintelligence-news.com/news/japan-ai-robots-2040-national-ai-model/)
- [Bank of England reviews AI rules for agentic AI in finance](https://www.artificialintelligence-news.com/news/bank-of-england-agentic-ai-finance-rules/)
- [Anthropic deploys Claude Sonnet 5, Fable and Mythos restored](https://www.artificialintelligence-news.com/news/anthropic-deploys-claude-sonnet-5-fable-and-mythos-restored/)

---

*（本文の情報は2026年7月13日時点のものです）*
