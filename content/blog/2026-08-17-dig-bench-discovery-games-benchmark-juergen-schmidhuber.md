# Frontier Models Struggle on New "Discovery in Games" Benchmark Led by Juergen Schmidhuber

A new benchmark called diG-bench (Discovery in Games) is testing AI systems on their ability to discover hidden rules in novel game environments — and the results show frontier models still have significant room for improvement.

---

## What Is diG-bench?

diG-bench is a benchmark of 70 handcrafted games designed to measure how well AI systems can infer unwritten rules through exploration and interaction. Each game is a self-contained miniature world with its own laws, where both the rules and objectives are hidden from the player and must be uncovered through experimentation.

The benchmark was created by researchers from Thinking About Thinking, University of Oxford, Princeton University, King Abdullah University of Science and Technology, Swiss AI Lab, Inria, and MIT. One notable author is Juergen Schmidhuber, the veteran AI researcher known for foundational work on LSTM neural networks.

The games range from tier 1 (easiest) to tier 7 (hardest). 21 games are publicly released with the rest held back to prevent AI training contamination. Most games fit entirely within the context window of current frontier models.

---

## How Do Current Models Perform?

The benchmark results reveal a clear hierarchy among frontier models:

- **Opus 5 and Fable 5** (Claude Code) are the best overall performers
- Only Opus 5 and Fable 5 achieved any wins (0.2) on Tier 7 tasks
- GPT-5.5 performed strongly in Tier 6 when given access to a coding harness like Claude Code
- GLM-5.2 and Gemini 3.1 Pro managed wins in Tier 4
- Overall, current frontier models remain well below human performance levels

Every game has been beaten by at least one human, though players reported finding many games difficult. A 20% success rate on Tier 7 represents a significant gap compared to individual humans achieving 100%.

---

## Why This Matters for AI Development

diG-bench is designed as a proxy for creativity and autonomous discovery — the ability to find useful information in novel situations without being explicitly told what to look for. This skill is considered a prerequisite for creative reasoning and, ultimately, for AI systems that can recursively improve themselves.

The researchers note that current frontier models show "early signs of scientific research taste" but still struggle compared to humans on the hardest discovery tasks. One prediction: human-level performance on diG-bench may be reached by mid-2027, at which point recursive self-improvement could seriously accelerate.

An optional "experimentation mode" lets players take actions without strict step limits, encouraging exploration over optimization.

---

## The Connection to AI Safety and Benchmark Design

The benchmark's design deliberately avoids common pitfalls in AI evaluation. Games are handcrafted by human experts rather than procedurally generated, kept private where possible to prevent data contamination, and require varied strategies across different challenge types.

The benchmark is available at digbench.ai, where researchers and enthusiasts can play the games and view the leaderboard.

---

## Reference Links

- [diG-bench Official Site](https://digbench.ai)
- [diG-bench GitHub](https://github.com)
- [diG-bench Paper (PDF)](https://arxiv.org)

---

*This article is based on information available as of August 17, 2026.*
