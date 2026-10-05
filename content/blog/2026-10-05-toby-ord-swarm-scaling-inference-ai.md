Toby Ord, a researcher at the Centre for AI Safety, has published an analysis of AI agent swarms -- groups of AI agents operating in parallel -- framing them as a new form of inference-scaling. His key finding: swarms are slower in wall-clock time for a given task, but can complete work faster when tasks can be parallelized across multiple agents.

The analysis centers on what Ord calls the "stepping on toes" parameter -- a diminishing returns effect that appears as the number of agents in a swarm increases. Unlike traditional scaling laws where increasing compute leads to roughly linear improvements, swarm coordination introduces a coordination tax. Adding more agents to a swarm does increase total output, but at a rate below the proportional increase in agent count.

**The math of swarm scaling**

Ord's core observation is that a 4-agent swarm requires roughly twice the total number of tokens to match the performance of a single agent on the same task. However, because the agents run in parallel, the wall-clock time is halved. This makes swarms attractive when time is the binding constraint rather than token cost.

The "stepping on toes" parameter describes how this relationship degrades as the swarm grows. Scaling the number of agents by 10x does not produce 10x the performance -- it produces between 3x and 5x ("10λ x" where λ is between 0.3 and 0.5), based on empirical observations. This shortfall accumulates quickly at larger scales.

**Why swarms are still relevant to AI development**

Ord's framing places agent swarms within the broader landscape of inference-scaling techniques. Traditional inference scaling involves spending more computation on chain-of-thought reasoning or tool use within a single model. Swarm scaling introduces a different axis: distributing work across multiple agent instances that can operate concurrently.

The practical implication is that swarms are best suited to tasks where the sub-problems are relatively independent -- where coordination overhead stays low because agents do not need to synchronize frequently. This contrasts with tasks that require tight iteration or where intermediate results feed directly into the next step.

**Connection to intelligence explosion risk**

Ord notes that swarm scaling, if it works as described, could increase the probability of an "RSI-driven intelligence explosion" -- a scenario where recursive self-improvement drives rapid capability gains. He had hoped that the stepping-on-toes parameter for AI agents would be lower, making such an outcome less likely. His analysis finds that this does not appear to be the case.

The finding is significant because it suggests that the coordination challenges that limit human team scaling may also apply to AI agent teams -- but not to a degree that fundamentally constrains swarm utility.

---

## Practical applications

Swarms are already in active use. The Chinese AI agent fleet discovered operating on Tencent infrastructure in October 2026 represents one example of parallel agent deployment, even if its specific purpose appears limited to API testing. OpenAI's agent products and various enterprise automation platforms have also explored swarm-based architectures for tasks like research synthesis, code generation, and document processing.

Ord's analysis provides a framework for understanding when swarms make sense and what the fundamental limits are. The key variable is whether the task's natural time horizon is longer than the coordination overhead introduced by multiple agents.

---

## Related reading

- [Import AI 475: Swarm scaling; Google DeepMind watermarks biology; and the AI science economy](https://importai.substack.com/)
- [Toby Ord: Swarm Scaling](https://www.centerforaisafety.org/) (original post reference)

---

*This article reflects information available as of October 5, 2026.*