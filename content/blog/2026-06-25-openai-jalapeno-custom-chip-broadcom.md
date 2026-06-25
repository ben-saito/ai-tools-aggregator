# OpenAI、初の大規模Custom Chip「Jalapeño」をBroadcomと共同開発 —— 推論特化型LSIでAI経済性の革新へ

OpenAIは2026年6月24日、同社初となるカスタムChip「**Jalapeño**」をBroadcomと共同開発したことを発表した。このChipは推論（Inference）ワークロードに特化しており、Nvidia等の汎用GPU比で**消費電力あたりのパフォーマンス大幅向上**を実現している。

---

## なぜ今、カスタムChipなのか

AIモデルの訓練と推論では、必要なハードウェアの特性が大きく異なる。訓練（Pre-training）は大量行列演算の反復処理にGPUの並列性が活きる一方、推論はユーザー要求に応じてリアルタイムにモデルを実行する場面で、**低レイテンシと低コスト運用**が求められる。

OpenAIのGreg Brockman氏 は発表の中でこう語った：

> 「我々はワークロードを深く理解している。現行の解決策では十分に対応されていない特定のワークロードを見つけ、『怎样才能加速可能な領域を実現できるか』を真面目に検討してきた」

Jalapeñoはリアルタイムcodingモデル等重点的に低コスト運用を実現することで、API利用料の下落傾向の中でもOpenAIの収益性を維持する戦略的役割を持つ。

---

## スタック全体を見渡す垂直統合の戦略

OpenAIの発表で注目すべきは、同社が**Chipのアーキテクチャ、カーネル、メモリシステム、ネットワーク、スケジューリング、Deploymentシステム、プロダクト体験**までを一貫して設計するという方針だ。

従来の垂直統合不同的是、GoogleがTPUで実現したように、最下層のHardwareから最上位のApplicationまで同一組織が最適化することで、各Layer間のTransfer最適化による大幅な性能向上とコスト削減が可能になる。

これは言い換えると、**「AIモデルはSaaSではなく、Hardware-Software統合サービス」として競争力が決まる時代**が到来していることを意味する。

---

## Nvidia依存からの脱却は進むか

現時点でJalapeñoは**推論特化**の位置づけであり、モデルの事前訓練には引き続きNvidia Hardwareが主力使われると見られる。しかし推論コストの削減は、AI企業の経済軌道を変える重要要素だ。

NvidiaのGPUは万能性が高い 半面、AI企業の特殊ワークロードに対してはOver-Specificationになりがち。Custom Chip専用化により、Nvidiaへの代金支払い額を抑制し、利益率の改善が見込める。

業界全体としても、Google（TPU）、Amazon（Trainium/Inferentia）、Meta（MTIA）と各社が専用Chip 开发に投資する潮流が確認されており、**AI Chipの多元化**が加速している。

---

## 開発者への影響

Jalapeñoの登場は、即座に開発者の書くコード変わるわけではないが、いくつか重要な示唆がある：

- **API価格の更なる下落**：推論コストが低下すれば、LLM APIの料金も 更なる下落が予想される
- **リアルタイムAI应用の普及**：低コスト・低レイテンシ推論が可能になることで、Code AutocompleteやAutonomous Agentなどリアルタイム用途が広がる
- **Chip設計スキルの価値上昇**：Hardware closeな最適化ができる人才の需要が高まる

---

## まとめ

OpenAIのJalapeñoは、同社が「モデルを提供するだけでなく、その下のインフラから設計する」という戦略を明確にした出来事だ。AI経済性が最重要課題となる今、推論コストの最適化は全てのAI企業にとって避けて通れない課題であり、Custom Chip潮流はさらに加速しそうだ。

---

## 参考リンク

- [OpenAI unveils its first custom chip, built by Broadcom — TechCrunch](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/)

---

*（本文の情報は2026年6月25日時点のものです）*