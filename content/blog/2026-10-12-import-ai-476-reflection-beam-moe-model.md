# Reflection Releases Beam: A Token-Efficient MoE LLM Behind Chinese Frontier Models

---

Reflection, an AI startup, has revealed Beam, a 501 billion parameter Mixture of Experts (MoE) language model with 23 billion active parameters. Beam is promoted on the basis of its token efficiency — thinking intelligently while using far fewer tokens than competing models. However, benchmark scores show it trails frontier capabilities from Chinese companies including Zhipu (GLM) and Moonshot (Kimi).

## The Beam Architecture

Beam was pre-trained on 6,144 GB300 NVL72 GPUs for four weeks, followed by an RL training run using approximately 10,500 of the same GPUs for another four weeks. The training data comprised 23.8 trillion diverse, curated, high-quality tokens from the web and proprietary licensed datasets, with a focus on source code, technical explanations, and mathematical and scientific knowledge.

## Benchmark Performance

Beam's scores trail Chinese frontier models on key tasks:

| Benchmark | Beam | GLM-5.3 |
|-----------|------|---------|
| DeepSWE 1.1 | 44.4 | 61 |
| GPQA Diamond | 90.5 | 91.7 |
| MCP Atlas | 78.7 | 84.2 |

## Token Efficiency as Selling Point

Despite lower absolute capability, Beam claims to achieve comparable scores to GLM-5.2 while using 3–4x less inference compute. This trade-off may appeal to applications where inference cost is the primary constraint.

## Open Weight Release Planned

Reflection plans to release weights, technical report, model card, and developer artifacts later in October 2026.

---

## 参考リンク

- [Import AI 476: Reflection Beam](https://importai.substack.com/p/import-ai-476-creativity-and-rsi)

---

*（本文の情報は2026年10月12日時点のものです）*
