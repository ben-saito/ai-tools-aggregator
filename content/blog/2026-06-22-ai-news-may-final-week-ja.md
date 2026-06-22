# AIニュース 2026年5月下旬版：KarpathyのAnthropic加入、Gemini Omni、Cohere Command A+、Cerebrasの高速推論

2026年5月中旬〜下旬にかけて、AI業界において研究者の人事異動から新モデルの登場、ハードウェアの性能刷新まで、様々な動きがありました。本稿では、Week 3〜4の最重要ニュースをエンジニアの観点から整理します。

---

## Karpathy、Anthropic加入を正式発表

**Andrej Karpathy**が2026年5月19日、Anthropicへの加入を発表しました。KarpathyはTeslaのAutopilot開発を主導し、OpenAIでは深層学習教育の第一人者として知られていました。OpenAI創業メンバーの一人으로도知られ、LLMと自律型システムの研究で知られるAnthropicにおいて、今後のリサーチの方向性に注目が集まっています。

---

## Google、Gemini Omniを発表 — Any-to-Anyモダリティ対応

Googleは同日、**Gemini Omni**を発表しました。テキスト、画像、オーディオ、ビデオ間の変換をネイティブにサポートする「any-to-any」アーキテクチャを採用しています。企業向けにも最適化されており、従来のマルチモーダルモデルと比較して大幅な性能向上とコスト削減を実現。GoogleのEnterprise AI戦略における中核製品としての位置づけが明確になりました。

---

## Cohere、Command A+でApache 2.0完全対応かつLossless Quantizationを実現

Cohereは2026年5月20日、**Command A+**をリリースしました。特徴は3つです：

- **完全なApache 2.0ライセンス**：商用利用における制約ゼロ
- **Lossless Quantization（無損失量子化）**：量子化による精度低下を克服
- **Native Citations**：回答に出典を直接付与

パラメータサイズ당性能을 유지하면서企業導入に最適化した設計で、特にRAG（Retrieval-Augmented Generation）インフラを持つ企業にとって有力な選択肢となります。

---

## Cerebras、1兆パラメータモデルをGPUクラウド比7倍高速で実行

AIハードウェア企業のCerebrasは2026年5月20日、同社のウェイファースケールチップ用于运行1兆パラメータ规模的LLMにおいて、GPUクラウド 대비**約7倍高速**な推論速度を達成したと 발표されました。单个芯片に广泛な计算资源を統合する架构により、大规模モデルの训练と推論の両面で革新的研究成果となっています。

---

## Enterprise AI Agentの「忘れる」問題：Memory管理の最前線

企业环境에서의 AI Agent가 학습한 내용을 forgetting忘记する问题が深刻化しています。2026年5月21日のVentureBeat報道によると：

- **Agent의 장기 메모리 불안정성**：Enterprise AI agents가 학습한 내용을 잊어버려業務流程에서 지속적으로失敗
- **LLM Agent Memory現状**：モデルパラメータのわずか**0.12%**しか活用されていない可能性
- **Context Window管理の課題**：长上下文窗口の効率的な活用が依然として技術的課題

この問題は、RAGから「Context Architecture」への移行検討など、知識管理のアーキテクチャ変革を迫っています。

---

## 参考リンク

- [Andrej Karpathy joins Anthropic - VentureBeat](https://news.google.com/rss/articles/CBMiigFBVV95cUxONHpQYy1hbGl1MzFHNW5JbnlhOHVqR185WEV5R0NYVTdnR3ZTNUF6MGJXRkp1QVhrNWp2anlZM0NjTEs1MVlqZy1WT3djdlUxa3VmdXhRS21DQzVkUW95TXpOUnFpNlU4Z0pSajBlei1XYl9OY014bjhGcHJOazZkM0JlMzZILWVBckE?oc=5)
- [Google Gemini Omni - VentureBeat](https://news.google.com/rss/articles/CBMirwFBVV95cUxPS3Z6bnlpeTFUbzNjYmIzUGVvRk5WTC1qd2dDRFZ6UWZfRkpvVkFicTBkbkl4bWFkUnhsWkVKbWE1RzNCXzlxbWpvcHZqNGJLMGd2eFBWV0hIeWNLZHR1Y0pDU2NZX0pRREticmFKSzlZbjBrWFlwZE04Z1lBa2JxZXBYMjZoZjVWVF9mbkRSNkhvZ3QtME9EOTZnR25fdzJNSWFkZVhQTC0zZXZsVkNv?oc=5)
- [Cohere Command A+ - VentureBeat](https://news.google.com/rss/articles/CBMi4gFBVV95cUxOQU93SjhUNVZqUzhSZFRrYVdLdjlZU3NlamdBQlRyNmpMcXV6dkh6ZldPa2R1dEVWakYxS002ZWtBRHJJQVcyRUx1bndqbi10cXJEVW40SnNjUlI0dmd0VGVadDgxUEU5MVl5QVl5eDlLTEtEajJsMmJPVnZoSHg1dENWOUJiNkZkZ0xkbG52Q0ZHSHQ3dm03VW9YanlGZURMRFJ1dmcxaFY5c2ZkWVJWVHdTcHJDZkVVeFhrS3UtcncwaVhpNDhpTVV1UWVGZXJUcENLWnRYcW1Ta2tOZEotd0FB?oc=5)
- [Cerebras 7x faster - VentureBeat](https://news.google.com/rss/articles/CBMiygFBVV95cUxOZF9NRjlBSTl4aklIZDlyQTI2dnM1bWEtb2VMbFR0em9ramJ6bnhCUnZGa3ZyTkNGTjhFOG5ZaUJpSjIzQVlpQjE5a3F6czNyTjRycFJsNWVXX3lsMHE0OWFGU2RMQkJFT01SeW9vZVoxNGwxa0V3aUN1eGtPdGQ5R1hrUVNNN1U0QUhZVlh1X1ZPZEszUThjazRUa2VvR2JoOFRnY2x3OUpzVWJ4Vk02WFpVSFJSUUFyZVVycTZ3cUozZnZwY3g1WGt3?oc=5)
- [Enterprise AI agents failing - VentureBeat](https://news.google.com/rss/articles/CBMirgFBVV95cUxPUXhOWVltUDZXVDVvZzU5ZF9FaEhMb0syOFc4LVRvQm81a1NzQ2ppZDBVbG5EbllCa05RT3ozQjJSaTBzZDlsU2F1R1F3dDRKYl9ZbXFoMjB3NmxueGo0OERTYUZrQ0RzdWFfTkJvNjhGcFgzODFfVkRLckNwV09wOEpWZUlSZjdWQzVQNGtURjhsUGdkOWVNR19ublNJUzZnQ0tiUGtRUF9jSGRMVGc?oc=5)

---

*（本文の情報は2026年5月21日時点のものです）*
