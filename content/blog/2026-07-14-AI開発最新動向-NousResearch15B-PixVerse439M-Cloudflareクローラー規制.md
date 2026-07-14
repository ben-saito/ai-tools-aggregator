# AI開発最新動向：Nous Researchが15億美金評価で資金調達昂進、PixVerseが439M調達、CloudflareがAIクローラー規制を発表

2026年7月上旬、AIエージェント・資金調達・ラージスケールモデルの各分野で急速な動きが続いている。Hermesエージェント開発のNous Researchが高評価で資金調達を検討している一方で、映像生成スタートアップのPixVerseが巨額の資金調達を完了し、CloudflareはAIクローラーの新しいカテゴリ分類とデフォルトブロックを発表。本稿ではこれらの動きをまとめて解説する。

---

## Nous Research：15億美金評価で7500万美金調達なるか

AIエージェントフレームワーク「Hermes」で知られる**Nous Research**が、Robot Ventures主導で少なくとも7500万美金の資金調達を検討していることが明らかになった。USV（Union Square Ventures）をはじめとする有力投資家も参画意向を示しているとされる。

**評価額15億美金**という数字は、同社の直近の評価額から大幅に上昇したものである。Nous Researchは、Hermesプロジェクトを通じてオープンソースのエージェントフレームワークを提供しており、Claude CodeやOpenAI Codexなどの municípal開発者と競合しながらコミュニティ主導の開発を進めている。

Hermesエージェントは、推論能力とブラウザ自動化に強みを持ち、特に**反復的なタスク実行**と**人間のフィードバックを活用した継続的改善**に特徴がある。本次の資金調達が成功すれば、エージェント技術の商用展開と基盤モデルの開発が加速することが予想される。

---

## PixVerse：439M美金調達で評価額20億美金超え

テキストから動画生成を行うAIスタートアップ**PixVerse**が、シリーズラウンドで**4億3900万美金**を調達し、評価額が**20億美金**を突破した。同社は調達した資金を世界のワールドモデル展開と顧客基盤の拡大に使用する意向だ。

PixVerseは、テキストプロンプトから高忠実度動画を生成するモデルを開発しており、競合であるRunway、Pika Labs、Sora（OpenAI）と市場で競合している。評価額が20億美金を超える水準に達した背景には、**ワールドモデル（世界を理解し予測するAI基盤）**への期待がある。

動画生成市場は2025年後半から急速に成長しており、 advertising、コンテンツ制作、教育分野での需要が増加している。PixVerseの今回の調達は、同社の技術的優位性と市場機会の両方を投資家が評価した結果と言える。

---

## Satya Nadella、AI利用企業への警告

Microsoft CEOの**Satya Nadella**氏は、AI Labsがプロプライエタリモデルを提供する動きが「**トローインホース**」のような役割を果たす可能性があるとして、企業ユーザーへ警告を発した。

Nadella氏によれば、AI Labsの提供するプロプライエタリモデルは、顧客企业在インフラやデータの上でロックインを生む可能性があり、企業がAI導入後悔いるリスクが含まれているという。MicrosoftはAzure AIを通じてオープンエコシステムの育成を推進する方針だが、主要AI Labsの多くは独自のエコシステムを構築している。

この警告は、特に**シャドウAI**や**エンドポイントでのAI利用**が問題視される中、企业在AIガバナンスとベンダーマネジメントを再検討する必要があることを示唆している。

---

## Cloudflare、AIクローラーの新分類とデフォルトブロック政策

Cloudflareは2026年7月1日、AIクローラーの分類体系を全面的に刷新し、9月15日から**広告表示ページでのAIクローラー・トレーニングクローラーをデフォルトでブロック**すると発表した。

### 新分類の3カテゴリ

Cloudflareは従来の单一の「ブロック」スイッチを以下の3カテゴリに分割した：

- **Search（検索）**: 検索結果ため後にインデックスを作成するクローラー（従来の検索ボット）
- **Agent（エージェント）**: リアルタイムでユーザー代わりに動作する自動化システム（ChatGPTのfetch bot、ブラウザ駆動型エージェントを含む）
- **Training（トレーニング）**: モデルの重みに取り込むためにコンテンツをスクレイピングするクローラー

### 9月15日からのデフォルト変更

- **広告表示ページ**: Training・Agentがデフォルトブロック
- **Search**: 従来通り許可
- **適用範囲**: 新規Cloudflare導入ドメイン、既存顧客の新規サイト、全Free Tier顧客

この変更はAIエージェントの「オープンウェブ」という前提覆すものであり、企業agentの很多依拠する情報が取得できなくなる可能性がある。Cloudflareの狙いは**混合利用クローラー（GooglebotのようにSearchとTrainingを同時に行う）に分離を促すこと**にあると解读される。

### 開発者への影響

AIエージェントを開発するチームは、以下の対応が必要となる：

- Cloudflareを導入しているサイトでのAgent分類に该当するかの確認
- 交渉によるアクセス許可の取得（User-Agentの偽装ではない）
- 取得できない場合の影響範囲の評価

 특히、Webページをリアルタイムで読み取る**リサーチエージェント**や** моніторингツール**は本次のブロック直接影响を受ける。

---

## まとめ：AIエコシステムの構造変化

本周のトピックは、以下の3つの構造変化を示している：

1. **エージェント技術への投資継続**: Nous Researchの資金調達表明は、Hermesのようなオープンソースエージェントフレームワークへの投資熱がまだ高いことを示す
2. **動画生成・ワールドモデルの主流化**: PixVerseの439M調達は、テキスト→動画→ワールドモデルの進化パスが投資家に接受されている証拠
3. **WebインフラレベルでのAI規制**: Cloudflareのデフォルトブロック政策は、「オープンネット」の前提えていたAI開発モデルへの根本的な挑战

 эти изменения происходят параллельно с усилением конкуренции между Altman's OpenAI, Nadella's Microsoft, и другими крупными игроками. Developers and enterprises need to pay close attention to these infrastructure-level changes, as they will have far-reaching implications for how AI agents operate and access information in the future.

---

## 参考リンク

- [Hermes agent maker Nous Research in talks for new funding at $1.5B valuation](https://techcrunch.com/2026/07/13/hermes-agent-maker-nous-research-in-talks-for-new-funding-at-1-5b-valuation/)
- [Video-generation startup PixVerse raises $439M, valuation soars past $2B](https://techcrunch.com/2026/07/13/video-generation-startup-pixverse-raises-439m-valuation-soars-past-2b/)
- [Satya Nadella has issued a shocking warning to companies using AI](https://techcrunch.com/2026/07/13/satya-nadella-has-issued-a-shocking-warning-to-companies-using-ai/)
- [AI agent crawlers now need permission. Here's how to get it](https://www.artificialintelligence-news.com/news/ai-agent-crawlers-cloudflare-rules/)

---

*（本文の情報は2026年7月14日時点のものです）*
