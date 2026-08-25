# OpenAI Jalapeño Chip: Broadcom Partnership Delivers Inference Performance Beyond Nvidia Blackwell

On August 25, 2026 (US time), OpenAI released benchmark results for its custom AI inference chip "Jalapeño." Tested on SemiAnalysis' InferenceX benchmark, Jalapeño outperformed Nvidia Blackwell systems in both tokens per user and throughput per kilowatt.

---

## "A Very Significant Performance Advance" -- Richard Ho

"The bottom line is that the results show a very, very significant performance advance over state of the art," said Richard Ho, OpenAI's head of hardware, in a press call. "Jalapeño can serve more AI work per unit of power, while also returning responses more quickly. It's very efficient to serve a lot of customers, but it can also be very low latency."

Notably, the comparison targets Nvidia Blackwell systems -- but by the time Jalapeño reaches full deployment, the competition may have advanced significantly. Ho estimated Jalapeño would deploy at the end of 2026 "in very small volumes," with more significant deployment coming in 2027.

---

## Collaboration with Broadcom -- Full-Stack Approach

First announced last October, Jalapeño was developed by OpenAI in close collaboration with Broadcom, with OpenAI's own models assisting in the design process. OpenAI plans to make Jalapeño a multigenerational platform, allowing AI products, models, chips, and memory all developed in concert.

Because of that full-stack approach, OpenAI was able to address specific phases in the inference process that often cause friction. In particular, Jalapeño is designed to minimize delays during the prefill and communication phases of processing, which OpenAI says often act as bottlenecks.

---

## KV Cache Local Placement Minimizes Data Movement

"We designed Jalapeño to minimize data movement and communication delays," the company said in a blog post presenting the results. "This means that model state, including the KV cache used while generating a response, can be explicitly placed and kept local while the system activates the right combination of compute, memory, and networking for each inference phase."

---

## Competition in AI Inference Chip Market

Jalapeño's emergence reflects an industry trend toward reducing dependence on Nvidia for AI inference chips. OpenAI is not alone -- Google (TPU), Amazon (Trainium/Inferentia), and Microsoft are all developing custom chips. How well Jalapeño's benchmark performance translates to actual deployment remains to be seen when the chip reaches production in late 2026.

---

## Reference Links

- [TechCrunch: OpenAI's Jalapeño chip is built for fast inference at scale, benchmarks show](https://techcrunch.com/2026/08/25/openais-jalapeno-chip-is-built-for-fast-inference-at-scale-benchmarks-show/)
- [OpenAI Blog](https://openai.com/)

---

*This article is based on information available as of August 26, 2026.*
