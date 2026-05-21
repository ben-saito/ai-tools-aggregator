# AI開発最新動向：KarpathyのAnthropic合流、エージェント記憶問題の深刻化、Cerebrasのインフラ変革

2026年5月22日時点の最新AI開発ニュースをお送りする。今週は著名研究者の移動、業界を揺るがす技術的課題、そして未曾有のインフラ革新が同時に進行している。

---

## Karpathy不起訴：AI業界人大移動の幕開け

著名AI研究者の**Andrej Karpathy**がAnthropicに参加することが明らかになった。KarpathyはStanford大学での「S微細な理解」講義、伊TeslaでのAutopilot開発、そしてOpenAIでの初期GPT-4構築など、言わずと知れたAI界のスーパースターだ。

彼の移動は単なる人事異動ではない。AI安全と実応用力の両面でAnthropicが他社との差を拡大している証拠でもある。

---

## エージェント記憶問題：パラメータの0.12%という壁

VentureBeatが報じた調査結果によると、**LLMエージェントの記憶容量はモデルパラメータのわずか0.12%** に過ぎないことがわかった。

この数値の意味すること:
- 700Bパラメータモデル → 記憶用に使えるのは約840MB
- 実際のエージェント用途では数十MB级别
- コンテキストウィンドウの有限性との二重の制約

この記憶容量の制約が冒頭の头条「Enterprise AI agents keep failing because they forget what they learned」の根本原因だ。 エージェントが長時間タスクで学習した内容を忘れてしまい、繰り返しの間違いを犯す。

---

## Cerebras、快挙宣言：GPUクラウドの7倍高速

**Cerebras**が、同社のchipを使用して1兆パラメータモデルを実行すると、GPU cloud相比で**最大7倍高速**になる場を明かした。

技術的詳細:
- 記憶大一体型設計（wafer-scale engine）
- GPU cluster比Bayesian bandwidth
- 電力効率も大幅改善

注目すべきは、Cerebras IPO計画が進行中であり此刻の収益化が急がれていることだ。AIインフラの選択肢としてGPU clusterвентиляционные dayに風穴を開けつつある。

---

## Cohere、Command A+でlossless量子化とnative citationsを実現

CohereがApache 2.0ライセンスのオープンモデル**Command A+**を発表した。このモデルは:**

1. **Lossless量子化**: 量子化による精度劣化がない
2. **Native Citations**: 回答時に参照元の具体的箇所を自動引用

企業用途において重要なのは、 quantized 模型でありながら精度が落ちないという点。 運用コストを大幅に抑えながら、より高速な推論が可能になる。

---

## 参考リンク

- [Andrej Karpathy joins Anthropic - VentureBeat](https://news.google.com/rss/articles/CBMiigFBVV95cUxONHpQYy1hbGl1MzFHNW5JbnlhOHVqR185WEV5R0NYVTdnR3ZTNUF6MGJXRkp1QVhrNWp2anlZM0NjTEs1MVlqZy1WT3djdlUxa3VmdXhRS21DQzVkUW95TXpOUnFpNlU4Z0pSajBlei1XYl9OY014bjhGcHJOazZkM0JlMzZILWVBckE?oc=5)
- [LLM agent memory at 0.12% - VentureBeat](https://news.google.com/rss/articles/CBMiqAFBVV95cUxPWlRFTjBxd0tWdEtLckpva2x3c2lFeUQyeHktbVp0R3ZIcVg0UHMxalFGSWhUYmRoRVJ5R3VRN01XWS1lYmFjeDZYSFVJbVJ1b2ZkQ1dvODdtTDlJVWMxYjVJbjlpRm0wSGRuTFZWd3NsQ01OX3pPWlRhN2pWZ0I0QWJXX3loQzZFWWtVUG4wRDdlSEM2R1dsQmRmRzNnNkRtLU1icWc4Zjg?oc=5)
- [Enterprise AI agents keep failing - VentureBeat](https://news.google.com/rss/articles/CBMirgFBVV95cUxPUXhOWVltUDZXVDVvZzU5ZF9FaEhMb0syOFc4LVRvQm81a1NzQ2ppZDBVbG5EbllCa05RT3ozQjJSaTBzZDlsU2F1R1F3dDRKYl9ZbXFoMjB3NmxueGo0OERTYUZrQ0RzdWFfTkJvNjhGcFgzODFfVkRLckNwV09wOEpWZUlSZjdWQzVQNGtURjhsUGdkOWVNR19ublNJUzZnQ0tiUGtRUF9jSGRMVGc?oc=5)
- [Cerebras trillion-parameter - VentureBeat](https://news.google.com/rss/articles/CBMiygFBVV95cUxOZF9NRjlBSTl4aklIZDlyQTI2dnM1bWEtb2VMbFR0em9ramJ6bnhCUnZGa3ZyTkNGTjhFOG5ZaUJpSjIzQVlpQjE5a3F6czNyTjRycFJsNWVXX3lsMHE0OWFGU2RMQkJFT01SeW9vZVoxNGwxa0V3aUN1eGtPdGQ5R1hrUVNNN1U0QUhZVlh1X1ZPZEszUThjazRUa2VvR2JoOFRnY2x3OUpzVWJ4Vk02WFpVSFJSUUFyZVVycTZ3cUozZnZwY3g1WGt3?oc=5)
- [Cohere Command A+ - VentureBeat](https://news.google.com/rss/articles/CBMi4gFBVV95cUxOQU93SjhUNVZqUzhSZFRrYVdLdjlZU3NlamdBQlRyNmpMcXV6dkh6ZldPa2R1dEVWakYxS002ZWtBRHJJQVcyRUx1bndqbi10cXJEVW40SnNjUlI0dmd0VGVadDgxUEU5MVl5QVl5eDlLTEtEajJsMmJPVnZoSHg1dENWOUJiNkZkZ0xkbG52Q0ZHSHQ3dm03VW9YanlGZURMRFJ1dmcxaFY5c2ZkWVJWVHdTcHJDZkVVeFhrS3UtcncwaVhpNDhpTVV1UWVGZXJUcENLWnRYcW1Ta2tOZEotd0FB?oc=5)

---

*（本文の情報は2026年5月22日時点のものです）*