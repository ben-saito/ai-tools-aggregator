# OpenAI、初めての独自チップ「Jalapeño」をBroadcomと共同開発——Nvidia依存からの脱却なるか

2026年6月24日、OpenAIは待望已久的自社製AIチップ**「Jalapeño」**の詳細をTechCrunchに認めた。Broadcomとの共同開発によるこのチップは、TSMC 3nmプロセスで製造され、Nvidia H100 GPU比で推論コストを**40%削減**を実現を目標とする。AppleがIntelからApple Siliconへ移行した时的制御と性能最適化を、AI推論の領域で再現しようという野心的な試みだ。

---

## なぜ独自チップなのか——Nvidia依存のリスク

OpenAIがカスタム siliconに舵を切った背景には、GPU調達の構造的問題がある。2023年以降、Hopper H100需要は爆発的に増加し、クラウドプロバイダーは 물론のこと、Microsoft Azureocchiのような主要顧客でさえもGPU不足に悩まされてきた。Sam AltmanCEOは2024年時点で「GPU不足はAI業界最大のボトルネック」と発言しており、これは単なる一時的現象ではなかった。

カスタムチップの戦略的意義は以下3点に集約される：

- **推論コストの削減**: Nvidia H100一枚当たりの価格が$25,000〜$40,000に達する中、自社チップれば大幅にコストを引き下げ可能
- **サプライチェーンの自律性**: Nvidiaのロードマップ待機ではなく、自社のスケジュールでチップ迭代できる
- **タスク特化型の最適化**: 言語理解・生成に特化させたアーキテクチャ設計により、通用GPUよりも 효율的な推論が可能

---

## Broadcomとの協業——Foxconnモデルに近い

Jalapeñoの開発では、半導体/IP大手のBroadcomと协働している点が注目に値する。AppleがFoxconnに製造を委託し設計は自社掌握するのと同様に、OpenAIは設計意図を握りつつ製造をBroadcomのサプライチェーンに依存する形態だ。

Broadcomは以前、GoogleのTPU、MetaのMTIA、Nvidia以外のカスタムチップ市場で存在感を示してきた。同社の強みは**TSMCとの太い取引関係**と**先端プロセスでの製造実績**であり、OpenAIが协働先にBroadcomを選んだのはこの製造基础设施へのアクセスが大きいであろう。

---

## 業界全体でのカスタムChip潮流

OpenAIのChip開発は孤立した事例ではない。2026年時点で各社がカスタム siliconに投資している：

| 企業 | チップ名 | プロセス | 性能目標 |
|------|----------|----------|----------|
| **OpenAI** | Jalapeño | TSMC 3nm | H100比推論コスト40%減 |
| **Google** | TPU v6 (Trillium) | TSMC 4nm | H100比1.8倍高速・消費電力35%減 |
| **Meta** | MTIA v2 | TSMC 5nm | 社内推論ワークロード专用 |
| **Microsoft** | Maia 100 (Cobalt) | TSMC 5nm | Azure専用AI推論 |

この潮流の根底にあるのは、**汎用GPUではスケールアウトが経済的に限界**に直面していることだ。AIモデルの訓練はともかく、推論仕事は千tx/k tokensのコスト竞争中 где margins are thin。Apple SiliconがMacで 보여준成果（消費電力当りの性能向上）は、AI推論领域でも再現可能という期待を生み出している。

---

## Groqの复苏——別の角度からの参入

同月の話題として、**Groqの$650M資金調達**も見逃せない。GroqはNvidiaから人材を奪われた后に設立された企業で、LPU（Language Processing Unit）と呼ぶ新型アーキテクチャで推論速度の大幅な改善を狙っている。2025年後半は思うような成果が出せず苦しい时期もあったが、2026年にかけてDemoDaysで印象的な成果披露し、カムバックを果たしたとされる。

---

## 开发者への影響——推論コストの向下是关键

OpenAIを含むAI企業のコスト構造が変われば、API pricingにも直接影响する。现状、GPT-4oの推論コストは$2.5/1M tokens的程度だが、Jalapeñoの成果次第では2027年にも大幅に低下する可能性がある。开发者にとってはモデル性能と成本效益の两者を用いた選択の時代到来が近い。

特に重要なのは、**推論最適化の進歩がローカルLLM движенияにも追い風**になることだ。Llama 4、Qwen 3などの开源モデルが同じコストでより高性能になることで星期五、边缘端末でのAI実行が現実味を帯びる。AppleのNeural Engine、QualcommのHexagon NPUなど专用AIアクセラレーターの普及加速も合わせ、AI推論の民主化が次のステージに入る可能性が高い。

---

## 参考リンク

- [OpenAI unveils its first custom chip, built by Broadcom](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/) (TechCrunch)
- [Maximizing LLM serving throughput for GPUs on GKE](https://cloud.google.com/blog/products/ai-machine-learning/selecting-gpus-for-llm-serving-on-gke/) (Google Cloud Blog)
- [Hex-LLM: High-efficiency LLM serving on TPUs](https://cloud.google.com/blog/products/ai-machine-learning/hex-llm-on-tpus-in-vertex-ai-model-garden/) (Google Cloud Blog)

---

*（本文の情報は2026年6月29日時点のものです）*