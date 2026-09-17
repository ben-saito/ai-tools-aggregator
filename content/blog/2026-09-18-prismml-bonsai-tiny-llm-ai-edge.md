# PrismML Releases Bonsai 2: A Tiny LLM That Could Reshape How We Use AI

A new AI lab called PrismML is making a bet that the most capable AI models do not have to be massive — and the industry is starting to listen.

On September 17, 2026, PrismML released Bonsai 2 27B, a compressed version of Alibaba's Qwen3.8 27B that shrinks the model down to just 5.9 GB. That is a 9x to 10x reduction in memory footprint compared to the original, small enough to run on a PC and potentially even a high-end smartphone.

---

## Why Size Has Been the Default

The prevailing assumption in AI development has been that larger models perform better. GPT-4, Claude, Gemini — all are measured in hundreds of billions of parameters, requiring data center-scale compute to run. The reasoning is straightforward: more parameters mean more capacity to learn patterns, reason, and generalize.

But that assumption comes with costs. Massive models are expensive to train, expensive to run, and essentially require cloud infrastructure to deploy. For developers on the edge — mobile apps, local workstations, offline tools — that centralization is a constraint.

PrismML was founded by Caltech researchers and is led by CEO Babak Hassibi, a Caltech professor and compression expert. The startup is backed by Khosla Ventures, Cerberus Capital, and Caltech itself, with Ion Stoica (co-founder of Databricks and director of Berkeley's Sky Computing Lab) as an advisor.

---

## Bonsai 2: Matching 98% of Benchmarks at 1/10th the Size

The key claim from PrismML is that Bonsai 2 matches 98% of Qwen's aggregate benchmark scores despite being compressed by an order of magnitude. That is up from the first Bonsai release earlier in 2026, which achieved 95% of original performance.

The practical implications are significant. A 5.9 GB model that performs near the level of a 60+ GB model opens up deployment scenarios that were previously impractical:

- **Mobile and edge devices**: Running capable AI without cloud dependency
- **Privacy-sensitive workloads**: Data never leaves the device
- **Cost reduction**: Inference on local hardware instead of paid APIs
- **Offline tools**: AI-powered development environments without internet access

The first Bonsai model has already been downloaded over 11 million times, with PrismML's smaller variants adding another 2.6 million downloads — a signal that开发者 community has real interest in compressed, deploy-anywhere models.

---

## The Competitive Landscape

PrismML is not alone in pursuing model compression. Multiverse Computing, founded by a professor from Spain's Donostia International Physics Center, is another player in the space and has raised significant funding.

What makes PrismML's approach potentially different, according to Hassibi, is the compression technique itself — which he claims preserves near-optimal performance while achieving dramatic size reduction. The startup's focus on reasoning models specifically, rather than general-purpose models, may also give it an edge in targeted deployment scenarios.

There are also rumors — which Hassibi declined to confirm — that PrismML is in talks with Apple about potential integration. If accurate, that would represent a significant endorsement from a major consumer hardware company looking to bring on-device AI capabilities to its products.

---

## What This Means for Developers

The trajectory from Bonsai 1 (95% performance, ~10x compression) to Bonsai 2 (98% performance, ~10x compression) in a matter of months suggests the compression technology is improving rapidly. If that improvement continues, the gap between compressed models and full-size models will effectively close for many practical applications.

For developers building AI-powered products today, this has immediate implications for architecture decisions. Relying exclusively on large, cloud-hosted models creates dependency on API pricing, latency, and connectivity. Small, capable models that run locally offer an alternative that may be more suitable for certain product categories — particularly those with privacy requirements, offline use cases, or cost-sensitive margins.

---

## Reference Links

- [TechCrunch: PrismML hopes its tiny LLM will change how we all use AI](https://techcrunch.com/2026/09/17/prismml-hopes-its-tiny-llm-could-change-how-we-all-use-ai/)
- [PrismML Website](https://prismml.ai)

---

*This article is based on reporting from September 17, 2026.*
