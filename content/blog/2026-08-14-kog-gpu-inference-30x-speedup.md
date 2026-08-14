# French Startup Kog Claims 30x GPU Inference Speedup, Targets Software Engineering Use Cases

French startup Kog is developing software-level optimizations that squeeze significantly more inference performance out of enterprise GPUs that companies already own — targeting the long wait times that frustrate professional AI coding workflow users.

---

## The Problem: Enterprise AI Latency

When veteran Claude Code users submit complex tasks, they sometimes wait hours for results. The bottleneck is not model quality but inference speed and cost — a constraint that has pushed some enterprises toward purpose-built AI chips like Cerebras, which went public in May 2026.

Kog is taking a different approach: instead of replacing existing hardware, the company develops deep software optimization for standard datacenter GPUs that enterprises already deploy, such as AMD MI300X and NVIDIA H200.

---

## Technical Approach: Low-Level GPU Reverse Engineering

Kog's methodology involves reverse-engineering GPU architectures at the assembly level — a skill set the company's solo founder developed through a background in offensive cybersecurity and multiple DEF CON CTF tournament finals.

"For every new GPU, we'll dedicate several weeks or even months, to really dig into the details and conduct GPU engineering work," the founder said.

The company demonstrated 3,000 tokens per second on a purpose-built small model in its May 2026 tech preview, which reached the front page of Hacker News. The target market is enterprise customers who cannot afford the wait times that professional AI workflows currently impose.

---

## The Challenge: Scaling to LLMs

Kog has committed to delivering 30x faster LLM inference — a significant leap from its small-model demo. Skeptics question whether the same approach can work for large language models, where model size creates additional challenges for inference chips.

The company is confident the approach transfers. Kog's CEO stated "GPUs have a bright future" for AI inference, betting that software optimization can unlock capacity beyond what hardware specs alone suggest.

---

## Competitive Landscape

Kog is not alone in the GPU optimization space. ZML, another French company, released hardware-agnostic software that bypasses Nvidia's CUDA to support alternative chips. Both companies are betting that enterprises want options beyond purchasing new purpose-built silicon.

---

## Funding and Market Timing

The company expects that software engineering will be its first commercial use case. Early feedback from the Hacker News preview identified professional developers as the most immediate market — users who need AI-assisted coding but cannot tolerate current latency levels.

Kog plans to seek additional funding after demonstrating its approach works on a major LLM at 10x speed.

---

*（記事の情報は2026年8月14日時点のものです）*
