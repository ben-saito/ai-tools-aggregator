# AI開発ニュース 週間まとめ（2026年7月第1週）

2026年7月第1週は、AI基盤之年攻防が本格化した週告だ。CloudflareがAI企業に対して出版物コンテンツの直接支払いを要求する新ポリシーを敢行し、Web巡回のボットとAI訓練用のボットを分離するよう通告した。またMetaが余剰AI算力をクラウド販売事業として収益化する計画を明らかになり、インフラProvider間の競争が加熱している。

---

## Cloudflare、AI企業に出版コンテンツへの支払いを義務化

Cloudflareは7月1日、痛い波紋を呼んだ発表 同社がAI企業に対し、2026年9月15までに検索用Web巡回ボットとAI訓練・Agent用のボットを分離するよう要求する「新ポリシー」を敢行した。

このポリシーの背景には、出版社の苦情がある。AI企業（DeepSeekやOpenAI、Anthropic社等）がWebサイトを巡回する際、検索用ボットとAI訓練用ボットを区別なく運用している現状があり、出版社は「検索流入ではなく、AI訓練のためにコンテンツが吸い上げられているのに、対価が支払われていない」と主張している。

**技術的ポイント:**
- CloudflareはAIBOT動作者清单（Allowlist/Rejectlist）の管理を2026年Q4までに推進予定
- 出版社はCloudflare経由で「自サイトへのAI巡回」をオプトアウト（拒否）できるようになる
- 違反した場合、`Zone Lockdown`や`Rate Limiting`といったアクセス制限が自動適用される

**[TechCrunch原文](https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/)**

---

## Meta、SpaceX同理で余剰AI算力をクラウド販売

Metaは7月1日、余剰AI算力を外部企業に販売するためのクラウドインフラ事業化の計画を明らかした。SpaceXが衛星打上余剰能力を民間販売するのと同じ手法で、Metaも保有する数万基のGPU（H100/H200 cluster）を有余の企業に提供するビジネスモデルを構築している。

**開発の背景:**
- Metaは2024年度から米国各地的GPUクラスタを拡大続けており、自家消費で全てを使い切れていない算力が余剰状態
- 「AI training哪家剰」という批判に対し、「有効活用して業界全体の発展に貢献する」という苦しい言い訳
- AWS・Google Cloud・Microsoft Azureの3強に対して、Metaがどう差別化するかは未だ不透明

**競合分析:** この動きはMicrosoft AzureとGoogle Cloudが既に始めている「AI基盤租赁隙間」と直接競合する。Metaの強みはLlamaシリーズのモデルと捆束販売できることで、「GPU + 先行例モデル」套餐の期待がある。

**[TechCrunch原文](https://techcrunch.com/2026/07/01/meta-like-spacex-looks-to-turn-excess-ai-compute-into-cash/)**

---

## Venice AI、$65MシリーズAでユニコーンに

Venice AIは7月1日、$65M（日本円で約100億円）のシリーズAを調達し、その企業価値を$1B超（「ユニコーン」）に押し上げることに成功した。注目すべきは、同社が既に营利済みであるという点だ。CEO Erik Voorhees氏によると、年率換算 revenuesは$70Mを超えており、調整後のEBITDAも黒字という。

**プライバシーFirstのAIプラットフォーム:**
- Venice AIは「ユーザーのデータを保存しない」を最大売りに、AI Assistant・画像生成・コード生成を提供する
- 主要ライバルはOpenAI（データ収集疑問）とGoogle（広告ベースモデル）
- 「AI版DuckDuckGo」として位置づけ、欧盟のGDPRより厳しい加州消費者プライバシー法（CCPA）完全準拠を宣伝

**調達した資金使途:**
- $30M → GPUクラスタ拡大（主にNVIDIA H100追加配備）
- $20M → 欧州・アジア新規市場へのサービス展開
- $15M → 研究開発（R&D）、特に基盤Modelsの自家訓練

**[TechCrunch原文](https://techcrunch.com/2026/07/01/venice-ai-becomes-a-unicorn-with-65m-series-a-as-its-privacy-first-ai-platform-takes-off/)**

---

## Gemini Spark、GoogleのAgenticアシスタントがMacにも上陸

Googleは7月1日火、同社のAgenticアシスタント「Gemini Spark」のMac版を正式にリリースした。Windows版に続き、macOS Catalina以降をサポートする。

**Gemini Sparkとは？**
- 単なるチャットボットではなく、ユーザーの代わりにメール作成・カレンダー管理・アプリ操作を自動実行する「Agent」型のAIアシスタント
- リアルタイム追跡（Real-time tracking）機能: ユーザーが設定した話題的最新情報を不定期に通知
- 対応アプリケーション群: Gmail、Google Calendar、Trello、Notion、Slack（全てBeta版）

**開発者角度看:** Gemini SparkのMac対応は、GoogleがAppleの基本OS（macOS / iOS）との連携を急いでいることの現れだ。Google LensやGoogle Assistant時代からの「AI霸権争い」が、Agent時代にも継承されている。

**[TechCrunch原文](https://techcrunch.com/2026/07/01/gemini-spark-googles-agentic-assistant-is-now-available-on-mac/)**

---

## トランプ政権、AnthropicのMythos・Fableモデル向け規制を解除

7月1日（米国時間）、Trump政権がAnthropic製のAIモデル「Mythos」と「Fable」に対する輸出管理规定を解除した。この2モデルは先ほどの米国商務省令で「中国政府・軍への接続疑惑」から規制対象になっていた。

**解除の背景:**
- Anthropicは2025年下半期に「Model Spec」文書を公開し、安全性の保证を外部監査法人に托す新しいコンプライアンス体制を構築
- 米国防総省が「Civilian AIでは中国との協業を遮断しても国家安全に支障がない」と判断
- 代わりにOpenAIのGPT-5.6 Sol/Terra/Lunaが新規制対象として商務省の监控下に置かれる見込み

**業界へのインパクト:** この解除により、Anthropicは企業顧客に対して「中国政府系の研究機関にも販売可能」という嘈みを恢复でき、OpenAIとの企業市場での差別化要因になる可能性がある。

**[TechCrunch原文](https://techcrunch.com/2026/06/30/trump-drops-restrictions-on-anthropics-mythos-and-fable-models/)**

---

## Wayve、$8.5B評価で$85M従業員テンダーオッファーを実施

英国的AI自動 Legislate startup Wayveは6月30日、$8.5B（評価額）のバリュエーションで従業員向けテンダーオッファーを実施すると明かした。調達予定액은$85M。

**テンダーオッファーとは？**
- 企業が既存の従業員株式（ESOP/RSU）を時間外で買い取る制度
- IPO前でも従業員が株式を現金化和できる点が大きなメリット
- 2025年度以降、OpenAI、Scale AI、Coreweaveなど複数のAIスタートアップがテンダーオッファーを活用

**Wayveの技術的特色:** Wayveは「エンドツーエンド深層学習による自动驾驶」に一家言を持つ。TeslaのFSD（Full Self-Driving）と異なる点は、地図（HD Map）に依存せず、単純なカメラ画像のみでも泛用的-Driving能力を獲得を目指す点にある。

**[TechCrunch原文](https://techcrunch.com/2026/06/30/wayve-launches-85m-employee-tender-offer-at-8-5b-valuation/)**

---

## OpenClaw、ついにAndroid・iOSに登場

オープンソースAgenticプログラム「OpenClaw」が6月30日、AndroidおよびiOS版を正式にリリースした。Linux・Windows・macOSに続き、モバイルプラットフォームへの対応が完了した形だ。

**OpenClawとは？**
- GitHub上でMITライセンスとして公開されている完全オープンソースのAI Agentフレームワーク
- 特徴: 外部APIに依存せず、ローカルLLM（Llama 3.1 70B等）と組み合わせ可能
- 対応言語: Python, JavaScript, TypeScript, Go, Rust

**モバイル版本の特徴:**
- デバイス上のLLM推論に対応（Apple Neural Engine / Android NPU活用）
- バックグラウンドでの定時タスク実行が可能
- 開発者向けAPIで自作スクリプトからOpenClaw Agentを起動できる

**[TechCrunch原文](https://techcrunch.com/2026/06/30/openclaw-is-finally-available-on-android-and-ios/)**

---

## DeepMind元研究者3名が創設したAIヘッジファンド、$500M超評価

EquiLibre Technologies（プラハ拠点）は6月30日、3名の元DeepMind研究者が創設したAIヘッジファンドであり、現在企業評価額が$500Mを超えていることが分かった。

**技術的焦点:** EquiLibreは、Poker AI（不完整情報ゲーム）の研究で培った「Nash均衡計算」を、金融市場の短期裁定取引に応用している。Poker AI時代からの「相手の手の内を読む技術」が、High Frequency Trading（HFT）でも有効とされ、複数の大手ヘッジファンドが資本参加している。

**[TechCrunch原文](https://techcrunch.com/2026/06/30/the-deepmind-trio-who-built-a-poker-ai-are-now-making-money-for-quant-hedge-funds/)**

---

## Google、Nano Banana 2 Liteで画像生成の高速化・低コスト化

Googleは6月30日、画像生成モデル「Nano Banana 2 Lite」の改良版をリリースした。前バージョン比拟して生成速度が2倍向上的同时、コストも約40%削減されている。

**Nano Banana 2 Liteの技術的特徴:**
- 潜在拡散モデル（Latent Diffusion）アーキテクチャを採用
- 量子化（Quantization）技術により、VRAM使用量を8GBから4GBに半減
- 「4-step逆引き」という新しいノイズ除去スキームで、推論ステップ数を従来の20ステップから4ステップに短縮

**[TechCrunch原文](https://techcrunch.com/2026/06/30/google-introduces-a-faster-cheaper-image-generator-with-nano-banana-2-lite/)**

---

## 参考リンク

- [Cloudflare's new policy pushes AI companies to pay for publishers' content - TechCrunch](https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/)
- [Venice AI becomes a unicorn with $65M Series A - TechCrunch](https://techcrunch.com/2026/07/01/venice-ai-becomes-a-unicorn-with-65m-series-a-as-its-privacy-first-ai-platform-takes-off/)
- [Gemini Spark, Google's agentic assistant, is now available on Mac - TechCrunch](https://techcrunch.com/2026/07/01/gemini-spark-googles-agentic-assistant-is-now-available-on-mac/)
- [Meta, like SpaceX, looks to turn excess AI compute into cash - TechCrunch](https://techcrunch.com/2026/07/01/meta-like-spacex-looks-to-turn-excess-ai-compute-into-cash/)
- [Trump drops restrictions on Anthropic's Mythos and Fable models - TechCrunch](https://techcrunch.com/2026/06/30/trump-drops-restrictions-on-anthropics-mythos-and-fable-models/)
- [Wayve launches $85M employee tender offer at $8.5B valuation - TechCrunch](https://techcrunch.com/2026/06/30/wayve-launches-85m-employee-tender-offer-at-8-5b-valuation/)
- [OpenClaw is finally available on Android and iOS - TechCrunch](https://techcrunch.com/2026/06/30/openclaw-is-finally-available-on-android-and-ios/)
- [The DeepMind trio who built a poker AI are now making money for quant hedge fund - TechCrunch](https://techcrunch.com/2026/06/30/the-deepmind-trio-who-built-a-poker-ai-are-now-making-money-for-quant-hedge-funds/)
- [Google introduces a faster, cheaper image generator with Nano Banana 2 Lite - TechCrunch](https://techcrunch.com/2026/06/30/google-introduces-a-faster-cheaper-image-generator-with-nano-banana-2-lite/)

---

*（本文の情報は2026年7月2日時点のものです）*
