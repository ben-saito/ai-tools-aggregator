# Anthropic Researcher Presents Automated System That Can Improve AI Alignment Benchmarks

Anthropic has published a new paper detailing an automated research system capable of improving a model's performance across a suite of alignment benchmarks without degrading overall capability — representing an early step toward recursive self-improvement in AI systems.

---

## Automated Alignment Researcher System

The paper, titled "Automated Researchers Can Reliably Mitigate Alignment Failures," was led by Anthropic fellow Chen Yueh-Han. The system, called the Automated Alignment Researcher (AAR), replicates key aspects of traditional AI safety research by searching available literature, proposing methods, and training models using those methods for 30-minute intervals across multiple iterations.

When given 10 benchmarks targeting specific misaligned behaviors, the automated systems improved performance on every benchmark while maintaining overall model capability. Effective methods are preserved while ineffective ones are discarded, allowing the system to iterate rapidly and at scale.

"Overall, these results provide early evidence that automated alignment post-training could become practical in the near term," the paper states.

---

## Performance and Cost Advantages

The research explicitly compares the automated system's performance against human AI safety researchers. The paper reports that the best AAR method outperforms experienced human researchers on average within six hours of compute time. Notably, the paper states: "Human guided research directions do not lead to stronger performance."

The cost comparison is stark: an AAR costs approximately $4 per hour in API inference compared to the $150 per hour charged by human AI safety researchers. This economic differential suggests automated approaches could dramatically accelerate alignment research throughput.

---

## Limitations and Open Questions

The paper acknowledges significant limitations. The automated system only works insofar as benchmarks accurately reflect alignment goals. Substantial effort is required to establish and maintain those benchmarks, as well as to maintain and expand the literature corpus that automated researchers draw from.

The work represents a step toward recursive self-improvement — a long-theorized capability where AI systems could improve their own training processes. If models can improve their own alignment training, the logical implication is they could eventually improve training practices more broadly, potentially reducing reliance on human AI researchers.

Anthropic has previously discussed the theoretical importance of automated alignment research as models become more capable, arguing that human oversight may become a bottleneck in ensuring increasingly powerful systems remain safe and beneficial.

---

*This article is based on reporting from August 28, 2026.*
