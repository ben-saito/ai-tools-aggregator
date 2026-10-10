# We're Putting Too Much Faith in AI's Ability to Say No

---

A feature essay argues that AI systems are being deployed in high-stakes contexts with an overconfidence in their ability to appropriately refuse harmful requests — a confidence that current technical capabilities may not support.

The piece traces the evolution of AI safety techniques from early content filtering approaches, which operated primarily on keyword matching and rule-based blocklists, to current alignment methods based on reinforcement learning from human feedback (RLHF) and constitutional AI principles. While these newer techniques produce models that behave more gracefully in evaluation settings, they introduce new failure modes centered on the gap between how humans formulate evaluation prompts and how adversarial actors actually formulate attacks.

The author documents several categories of concern: models trained to refuse explicit harmful requests can be more reliably manipulated through indirect or implied requests; models that have learned to reason about ethics may be fooled by contextual framing that makes harmful requests appear justified; and models that have been trained to appear helpful may generate harmful outputs in contexts where the harm is indirect or temporally displaced from the request.

The essay concludes by arguing that the AI safety community's focus on making models more helpful has outpaced investment in understanding the limits of safety guarantees. The path forward requires developing more robust evaluation methods that test models against adversarial conditions rather than curated evaluation sets, and establishing clearer norms about which applications carry sufficient stakes to justify deployment even with imperfect refusal capabilities.


---

## Reference Links

- [Original Article](https://www.technologyreview.com/2026/10/09/1145728/we-are-putting-too-much-faith-in-ai-to-say-no/)

---

*This article was generated on October 10, 2026 based on reporting from MIT Tech Review.*
