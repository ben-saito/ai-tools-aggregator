# AI開発ニュース：RAGの終焉とコンテキストアーキテクチャの台頭、KarpathyのAnthropic加入

AI分野の技術的潮流は、エンタープライズ導入の段階へ入るにつれ、根本的なパラダイムシフトを迎えようとしている。本稿では、最近のAI開発者コミュニティで最も議論された技術的テーマをまとめる。

---

## RAGの限界：コンテキストアーキテクチャへの移行

VentureBeatの報道によると、エージェント型AIがエンタープライズの検索要件限界に押し寄せている今、**RAG（Retrieval-Augmented Generation）**に代わる新しい知識層として「**コンテキストアーキテクチャ**」が注目を集めている。

従来のRAGは、ベクトル検索ベースの retrieving-then-generating パターンを採用していたが、エージェントが複雑なマルチステップタスクを実行する環境では、以下の課題が顕在化した：

- **文脈の断片化**: 分割されたチャンクの関連性喪失
- **検索と生成の分離**: リアルタイムの知識統合が困難
- **レイテンシ**: 検索フェーズがパイプライン全体を低速化

コンテキストアーキテクチャは、コンパイル段階で知識グラフをモデル内部に統合することで、これらの課題を解決するアプローチを取っている。

---

## Andrej Karpathy、Anthropic加入を発表

AI研究者として世界的に知られる**Andrej Karpathy**氏が、OpenAIを経てAnthropicに参加することが明らかになった。Karpathy氏はTeslaでのAutopilot開発や、OpenAI創業期の中心人物の一人として知られ、今回の加入はAnthropicの技術力強化における重大な一歩である。

Karpathy氏の専門性（特に視覚言語モデルと自己教師あり学習）は、Claudeシリーズのエージェント能力強化に直接貢献すると予想される。

---

## LLMエージェントのメモリ問題：パラメータの0.12%

「Enterprise AI agents keep failing because they forget what they learned」というVentureBeatの記事が提起した課題がある。

研究によれば、エージェントのメモリ容量はモデルパラメータの**わずか0.12%**に過ぎないという。この極限的なメモリ制約は、以下のような問題を引き起こす：

- **長期タスクの文脈喪失**: ステップ数の増加に伴い最初の指示を忘れる
- **セッション間の知識非保持**: 新しいセッションでゼロから学習
- **重要な情報のエビクション**: 関連性が高い情報すら失われる

この課題の解決策として、**外部メモリシステム**や**知識蒸留**による効率的な内部表現の構築が研究されている。

---

## Cohere、Apache 2.0ライセンスのCommand A+を発表

Cohereは、**lossless量子化**と**native citations**を実現した最初の完全Apache 2.0ライセンスオープンモデル「Command A+」をリリースした。

このモデルの特徴：

- **Lossless量子化**: 精度損失なしのモデル圧縮
- **Native Citations**: 出力の各主張に対して直接参照を付与
- **Apache 2.0ライセンス**: 商用利用における法的制約の排除

オープンモデルながらエンタープライズグレードの機能を実装したことで、Proprietaryモデルとの差距が縮まる気配を示している。

---

## Cerebras、GPUクラウドより7倍高速な trillion-parameter モデル実行

AIチップ企業Cerebrasは、同社のチップ上で trillion-parameter モデルを実行した場合、GPUクラウドと比較して**約7倍高速**であると主張した。

従来のGPU集群 比して：

- **メモリ帯域幅**: Wafer-scale-engineによる超広帯域幅
- **オンチップメモリ**: 外部DDRアクセスを排除
- **電力効率**: 集群全体の消費電力大幅削減

ただし、この主張はまだ独立した検証を経ておらず、业内からは**再現性の確認が必要**とする声が上がっている。

---

## 開発者向け技術的インプリケーション

本周の技術トレンドから、開発者が注視すべきポイントを以下にまとめる：

| 技術領域 | 重要度 | 対応優先度 |
|---------|--------|-----------|
| コンテキストアーキテクチャ | ★★★ | 高 |
| エージェントメモリ最適化 | ★★★ | 高 |
| RAGからの移行戦略 | ★★☆ | 中 |
| オンチップ推論最適化 | ★★☆ | 中 |

---

## 参考リンク

- [Context architecture is replacing RAG as agentic AI pushes enterprise retrieval to its limits - VentureBeat](https://news.google.com/rss/articles/CBMivwFBVV95cUxOdmo2ZWpySDdwV0I0ZnJLMlU0MllvYjdVZG5qRHJDbV8xYkVvdXpLVGZ2VUlsYzNlRlQ2UGxMYXNER29YV0dwNlQ0b3VqVGt2Z0Vra0lfVGpFWEZYVU9pOWt4XzNzQTJqeWJobEpMY2FIUTBXU0JFRlJDVVkyb21mUk5aN0RiS0lEU2ZOMm5FYzNLaTAzak8ycExxcFdKTk0ybGljbFdRQ21VNmk0LWNpNTVjemkzYklEeS1acWFRVQ)
- [Influential AI researcher Andrej Karpathy announces he's joining Anthropic - VentureBeat](https://news.google.com/rss/articles/CBMiigFBVV95cUxONHpQYy1hbGl1MzFHNW5JbnlhOHVqR185WEV5R0NYVTdnR3ZTNUF6MGJXRkp1QVhrNWp2anlZM0NjTEs1MVlqZy1WT3djdlUxa3VmdXhRS21DQzVkUW95TXpOUnFpNlU4Z0pSajBlei1XYl9OY014bjhGcHJOazZkM0JlMzZILWVBckE)
- [Enterprise AI agents keep failing because they forget what they learned - VentureBeat](https://news.google.com/rss/articles/CBMirgFBVV95cUxPUXhOWVltUDZXVDVvZzU5ZF9FaEhMb0syOFc4LVRvQm81a1NzQ2ppZDBVbG5EbllCa05RT3ozQjJSaTBzZDlsU2F1R1F3dDRKYl9ZbXFoMjB3NmxueGo0OERTYUZrQ0RzdWFfTkJvNjhGcFgzODFfVkRLckNwV09wOEpWZUlSZjdWQzVQNGtURjhsUGdkOWVNR19ublNJUzZnQ0tiUGtRUF9jSGRMVGc)
- [Cohere cracks lossless quantization and native citations with first full Apache 2.0 licensed open model Command A+ - VentureBeat](https://news.google.com/rss/articles/CBMi4gFBVV95cUxOQU93SjhUNVZqUzhSZFRrYVdLdjlZU3NlamdBQlRyNmpMcXV6dkh6ZldPa2R1dEVWakYxS002ZWtBRHJJQVcyRUx1bndqbi10cXJEVW40SnNjUlI0dmd0VGVadDgxUEU5MVl5QVl5eDlLTEtEajJsMmJPVnZoSHg1dENWOUJiNkZkZ0xkbG52Q0ZHSHQ3dm03VW9YanlGZURMRFJ1dmcxaFY5c2ZkWVJWVHdTcHJDZkVVeFhrS3UtcncwaVhpNDhpTVV1UWVGZXJUcENLWnRYcW1Ta2tOZEotd0FB)
- [Cerebras says its chips run a trillion-parameter AI model nearly 7 times faster than GPU clouds - VentureBeat](https://news.google.com/rss/articles/CBMiygFBVV95cUxOZF9NRjlBSTl4aklIZDlyQTI2dnM1bWEtb2VMbFR0em9ramJ6bnhCUnZGa3ZyTkNGTjhFOG5ZaUJpSjIzQVlpQjE5a3F6czNyTjRycFJsNWVXX3lsMHE0OWFGU2RMQkJFT01SeW9vZVoxNGwxa0V3aUN1eGtPdGQ5R1hrUVNNN1U0QUhZVlh1X1ZPZEszUThjazRUa2VvR2JoOFRnY2x3OUpzVWJ4Vk02WFpVSFJSUUFyZVVycTZ3cUozZnZwY3g1WGt3)

---

*（本文の情報は2026年7月7日時点のものです）*