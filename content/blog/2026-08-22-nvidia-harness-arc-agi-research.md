# NVIDIA Research Shows AI Agent Performance Depends More on Harness Than Model

---

## The Harness: AI Agent's External Brain

NVIDIA published research on August 21, 2026 demonstrating that the performance of AI agents is determined not by the underlying model, but by the "harness" -- the software wrapper that surrounds it. A harness is the collection of tools, memory management, and decision-making rules that transform a raw AI model into an autonomous agent capable of acting on its own.

The traditional assumption in AI development has been that a more powerful model leads to a more capable agent system. NVIDIA's new research challenges this assumption, potentially reshaping how the industry thinks about agent design.

---

## ARC-AGI-3 Benchmark: 100% with Harness, 30% Without

NVIDIA's research team conducted experiments using the ARC-AGI-3 cognitive benchmark -- a set of 2D games where AI models must autonomously understand and develop strategies without instructions, similar to how humans learn.

Results:
- **Without harness (raw model)**: Claude Opus 5 scores 30% -- the top result among all models tested
- **With custom harness**: Claude Opus 5 achieves **100%**

The dramatic improvement comes from two key innovations in the harness design. First, improved memory management -- enabling efficient retention and reuse of context information during long-horizon tasks. Second, introduction of a "supervisor" component that monitors the overall task and corrects the agent when it strays from the correct direction.

This 30-to-100% jump was achieved not by replacing the model, but by improving the harness alone. NVIDIA described it as "equivalent to upgrading the steering and suspension rather than replacing the car itself."

---

## Implications for AI Developers

The research carries an important message for developers and procurement teams: when building in-house agent systems, investing in harness improvements for existing models may offer better cost-effectiveness than upgrading to the latest foundation model.

One NVIDIA researcher stated: "This is a lesson any AI user can apply. Before choosing a smarter model, consider building a smarter system first."

As Agentic AI moves toward practical deployment, the data suggests that optimizing system architecture may become a more important parameter than simply upgrading to the latest model.

---

## References

- [TechCrunch: NVIDIA Harness Research](https://techcrunch.com/2026/08/21/nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero/)
- [ARC-AGI Benchmark Official](https://arcprize.org/arc-agi)

---

*（本文の情報は2026年8月22日時点のものです）*
