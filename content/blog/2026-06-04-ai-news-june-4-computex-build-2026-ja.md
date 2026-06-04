# AI開発ニュース：2026年6月4日

2026年6月4日、Computex 2026とMicrosoft Build 2026の関連発表が続き、ローカルAI推論とEnterprise対応が加速している。Google Gemma 4のローカル実行、Microsoft MXCのサンドボックスセキュリティ、Perplexityのハイブリッド推論など、開発者にとって重要な動きが多い。

---

## Google Gemma 4 12B——16GBノートブックで動くオープンソースLLM

Googleがオープンソースモデル**Gemma 4 12B**を発表、このモデル最大の特長はオーディオ・動画の分析に対応したマルチモーダル構成でありながら、**標準的な16GB Enterpriseノートブックで全文本地実行**できる点だ。

コード生成ベンチマークでGPT-4o比**95%**の性能を記録しており、クラウド依存の運用コストを削減したい企業にとって有力な選択肢となる。「edge-first」設計思想を採用し、Google CloudへのAPI呼び出しコストを気にせず開発を進められる環境が整備されつつある。

---

## Microsoft MXC——AIエージェントの「暴走」を防止するOSレベルサンドボックス

MicrosoftはAIエージェントの安全運行を実現するため、**MXC（Microsoft eXtensible Controller）**をリリースした。OSレベルの分離環境を提供し、エージェントが誤ったファイル操作や不正なAPI呼び出しを行った場合でもホストシステムへの影響を防ぐ。

OpenAIとNvidiaがすでにパートナーとして名を連ね、Copilot+ PCシリーズへの標準搭載が予定されている。「エージェントが暴走したらどうなるか」というCISO（最高情報セキュリティ責任者）のNightmare問いに対する公式な回答となり、エージェントを本番環境に導入済みのEnterpriseにとっては待望のセキュリティレイヤーだ。

---

## Perplexity AI——Computexでローカル×クラウド自動振り分けのハイブリッド推論をデモ

Perplexity AIはComputex 2026で、Intel Core Ultra Series 3搭載ローカルモデルとクラウド間を自動振り分けする**ハイブリッド推論システム**をデモした。CEO Aravind Srinivas氏がolinelinalの confidential な取引資料を本地で処理する流れを実演。公開情報のみをクラウドに送信する設計により、機密性と推論性能の両立を実現する。

金融・法務分野への本格参入を視野に入れた構成であり、「プライバシー確保のためLocalで動くが賢い必要がある」という需要に真っ先に応えるかたちだ。

---

## Microsoft Surface RTX Spark Dev Box——クラウド不要のローカルLLM開発環境

MicrosoftはBuild 2026において**Surface RTX Spark Dev Box**を発表した。Nvidiaの新しいBlackwellアーキテクチャ**RTX Sparkプロセッサ**と**128GB統合メモリ**を小型筐体に詰め込み、Nvidiaの評価では1ペタフロップのAI演算性能を提供する。

120 billionパラメータ超のモデルをクラウドAPIに1回も送信せずにロード・実行・対話できる。開発者にとってAPIコストの心配がなく深夜〜オフライン環境でもLLM开发を回せる硬件面は、protoing/検証フェーズで特に有用だ。

---

## OpenAI Codex——Sitesとロール特化プラグインでEnterpriseワークスペース構築

OpenAIはCodex大型アップデートとして、**Sites**機能と業界別**ロール特化プラグイン**を追加した。SitesはEnterpriseチームがフロントエンド開発なしに协作ワークスペースを構築できる機能で、金融・法務・HRなどの業種別に必要データソースと权限が预设済み。

Codex Business Preview APIを通じて开发者がアクセス可能。SaaS統合の敷居が下がり、他社SaaSベンダーのCopilot對抗商品開発が加速しそうだ。

---

## 参考リンク

- [Google Gemma 4 12B (VentureBeat)](https://venturebeat.com)
- [Microsoft launches MXC (VentureBeat)](https://venturebeat.com)
- [Perplexity AI hybrid local-cloud (VentureBeat)](https://venturebeat.com)
- [Microsoft Surface RTX Spark Dev Box (VentureBeat)](https://venturebeat.com)
- [OpenAI Codex update (VentureBeat)](https://venturebeat.com)

---

*（本文の情報は2026年6月4日時点のものです）*