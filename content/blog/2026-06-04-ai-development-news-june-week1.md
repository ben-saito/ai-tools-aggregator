# AI開発ニュースまとめ：2026年6月第1週

AI業界は週明けから熱い動きだ。Googleの新規制対応、MicrosoftのローカルAI開発環境、OpenAIのEnterprise向け拡張、そして複数の大型調達が飛び出した。本稿では2026年6月第1週（6月4日時点）の最重要ニュースを整理する。

---

## Alphabetが史上最大規模の850億ドル調達——GoogleのAI事業戦略

AlphabetがGoogleのAI事業支援のため、史上最大規模となる**850億ドル**の資金調達を完了した。 JPMorgan Chaseらが主幹事を務め、Google Cloudのインフラ拡大とGeminiシリーズの次期開発に充てられる。 Alphabetの幹部は「AIインフラへの投資は競争上の最優先事項」と述べており、Microsoft CopilotやOpenAIのEnterprise攻勢に対抗する布陣と見られる。 株価は調達発表後に6%上昇。 開発者にとって朗報なのは、Google CloudのGPU клаスター擴髪がAPI有料化の弾みになりそうだ。

**参考リンク**
- [Alphabet's record-breaking $85B raise for Google's AI business (TechCrunch)](https://techcrunch.com)

---

## Google、Generative AIユーザーに너지——AI Searchからオプトアウト可能に

GoogleはEUの**デジタル市場法（DMA）**に基づき、PublishersがAI Search機能からの撤退を可能にする新機能を導入した。 これでWebコンテンツ所有者は、自社の記事やデータがGoogleのAIによる要約・回答生成に使用されることを拒否できるようになる。 米国でも同等の規制議論が始まっており、Googleは「ユーザーの選択権を尊重する」と声明を出した。 開発者視点では、RAG（Retrieval-Augmented Generation）パイプラインの設計が変わる可能性がある——GoogleのAI Searchに依存した情報が今後減る可能性を分析する必要がある。

**参考リンク**
- [Publishers will be able to opt out of AI Search (TechCrunch)](https://techcrunch.com)

---

## Google Gemma 4 12B——ローカルで動くオープンソースの&quot;全部入り&quot;モデル

Googleはオープンソースモデル**Gemma 4 12B**を発表。オーディオ・動画分析対応のマルチモーダルモデルながら、**16GBのEnterpriseノートブックで動作**する。 コード生成ベンチマークではGPT-4o比95%の性能を達成しており、ローカル推理哪家研究の選択肢として急速に普及し始めている。 特に面白いのは「edge-first」設計思想——クラウド依赖の運用コストを削減したい企业には有力な替代手段となる。

**参考リンク**
- [Google's new open source Gemma 4 12B (VentureBeat)](https://venturebeat.com)

---

## Microsoft MXC——AIエージェント向けOSレベルサンドボックス

MicrosoftはAIエージェントの安全運行を実現する**MXC（Microsoft eXtensible Controller）**をリリースした。 OSレベルの分離環境を提供し、エージェントが误ったファイル操作や不正なAPI呼び出しを行った場合でも、ホストシステムへの影響を防ぐ。 OpenAIとNvidiaがすでにパートナーとして名を連ね、Copilot+ PCシリーズへの標準搭載が予定されている。 CISO（最高情報セキュリティ責任者）にとって「エージェントが暴走したら怎么办」という問題への回答になりそうだ。

**参考リンク**
- [Microsoft launches MXC (VentureBeat)](https://venturebeat.com)

---

## OpenAI Codex大型アップデート——Sitesとロール別プラグインでEnterprise対応

OpenAIはCodex（AIコード生成エンジン）に大幅機能追加。**Sites**機能は、Enterpriseチームがフロントエンド開発なしに协作ワークスペースを構築できる。 さらに、金融・法務・HRなど業種別の**ロール特化プラグイン**が追加され、それぞれ必要なデータソースと权限で動作する。 開発者は「Codex Business Preview」を通じてAPIアクセス可能。 SaaS統合の敷居が下がり、他社SaaSベンダーのCopilot対抗商品開発が加速しそうだ。

**参考リンク**
- [OpenAI's Codex update (VentureBeat)](https://venturebeat.com)

---

## Perplexity AI——Computexでローカル×クラウドのハイブリッド推論披露

Perplexity AIはComputex 2026で、Intel Core Ultra Series 3搭載ローカルモデルとクラウドを自動振り分けする**ハイブリッド推論システム**をデモした。 CEO Aravind Srinivas氏が表示された confidential な取引資料を本地で处理し、公开情资のみクラウドに送信する流れを実演。 機密性と性能の両立ニーズ狙击で、金融・法務分野への本格参入を視野に入れている。

**参考リンク**
- [Perplexity AI hybrid local-cloud (VentureBeat)](https://venturebeat.com)

---

## CoralogixがAIエージェント監視用途で2億ドル調達——&quot;AIの番人&quot;需要に対応

ログ分析のCoralogixが、**AIエージェントの动作監視**特化プロダクト的需要受け、2億ドル（約300億円）を調達した。 企業間のAIエージェント導入が加速する中、「，哪个エージェントが哪个データにアクセスしているか」「不正常な动作は起きていないか」を可視化する需要が急成長。 Coralogixは調達額 valuation を **80x ARR倍率** で設定しており、AIエージェント監視市場への期待的高が示された。

---

*（本文の情報は2026年6月4日時点のものです）*