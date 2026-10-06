# Toby Ord's Swarm Scaling Analysis: Speed at the Cost of Efficiency

---

Toby Ord, a philosopher and AI researcher at Oxford's Future of Humanity Institute, has published a concise analysis framing **AI swarms as a new form of inference-scaling**. Rather than training larger models, swarms distribute work across multiple agents running in parallel — and Ord's key insight is that this trades off efficiency for wall-clock speed.

## The Core Trade-off

A 4-agent swarm, Ord found, requires roughly **twice the total token count** to match the performance of a single-agent approach at the same task. But because agents run in parallel, the swarm achieves that result in half the wall-clock time. The per-agent token cost is actually lower — half what a single agent would need — but the aggregate computational cost rises.

**The "Stepping on Toes" parameter:** As swarm size increases, returns diminish in a pattern economists recognize from human organizations. Scaling the number of agents by 10x yields only **10λx performance** rather than a full 10x — where λ (lambda) represents the coordination tax, estimated at 0.3 to 0.5. This means a 10x larger swarm delivers only 3x to 5x the performance of a single agent. The shortfall compounds at larger scales.

## Implications for RSI-Driven Intelligence Explosions

Ord's analysis carries an unexpected conclusion about recursive self-improvement (RSI): swarm scaling's efficiency penalties don't reduce the probability of an intelligence explosion — they may increase it. "I'd hoped that the value of λ for AI agents would be lower, making an intelligence explosion less likely, but that appears to not be the case," Ord writes.

The reasoning: because swarms enable faster iteration cycles even at lower per-agent efficiency, they could accelerate the pace at which capable AI systems are developed and combined. Speed of development, not raw per-unit efficiency, may be the decisive factor in whether an RSI-driven intelligence explosion occurs.

## A New Scaling Axis

Beyond compute, data, and inference-time compute (chain-of-thought, tool use), **agent coordination** emerges as a new parameter in the AI capabilities landscape. Ord notes that as researchers learn to get agents to coordinate productively — producing greater-than-sum-of-parts outcomes — the returns to swarm scaling could improve substantially. The HuggingFace agentic hack, where multiple agents collaborated to exceed their individual capabilities, hints at this potential.

Tracking swarm scaling dynamics may become essential for understanding the overall trajectory of AI advancement.

---

## References

- [Toby Ord — Swarm Scaling](https://www.nickbostrom.com/)
- [Import AI 475](https://importai.substack.com/p/import-ai-475-swarm-scaling-google)

---

*This article reflects information available as of October 7, 2026.*
