# Inherent's Faraday: A 27B Supervisory Model Teaching AI Systems to Develop "Research Taste"

AI research startup Inherent has published a paper on Faraday, a 27-billion parameter model designed to supervise frontier AI systems and help them develop what the researchers call "research taste" — the intuitive sense of what makes a scientific question interesting and answerable.

---

## The Problem: Scalable Oversight

Modern frontier AI models are powerful but lack the nuanced judgment that experienced researchers develop over years of practice. They can execute tasks but struggle to identify which tasks are worth pursuing in the first place.

Inherent's approach tackles what the paper calls the "scalable oversight problem" — how to supervise AI systems effectively as they become more capable than their human overseers.

---

## What Faraday Does

Faraday is a 27B parameter model post-trained on top of Qwen-3.6-27B. It uses OpenAI's Codex as a coding agent and sits between the user and larger proprietary frontier models, controlling them in ways designed to improve scientific effectiveness.

The system works through a hierarchical setup:

1. **Supervisory harness**: Faraday coordinates large proprietary models
2. **GRPO training**: A modified version of GRPO (Group Relative Policy Optimization) continuously improves the supervisor
3. **Research-specific guidance**: The model learns to recognize what makes a scientific result meaningful versus trivial

---

## Replica: The Training Dataset

To train and evaluate Faraday, Inherent assembled Replica — a dataset of 100 ML and AI-for-science papers published between 1990 and 2026. These papers were converted into 310 "replication tasks" by systematically removing key graphs or results.

For each task, Claude Opus 4.7 generates a grading rubric, and a Codex-based Judge model provides feedback. This creates a continuous loop where Faraday learns to supervise increasingly effective experiments.

The key insight: researchers describe Faraday as developing an intuitive sense of "taste" in research — understanding not just how to run experiments but which experiments are worth running.

---

## Results and Implications

According to the paper, Faraday using Codex was able to beat standard Opus 4.8 and GPT-based systems on scientific research tasks. The model demonstrates that smaller, specialized supervisory models can improve the output of larger frontier systems.

The work represents a capabilities-focused approach to the scalable oversight problem — rather than constraining AI behavior, Inherent's method actively trains a smaller model to guide larger ones toward better scientific outcomes.

---

## Reference Links

- [Inherent AI Website](https://inherent.ai)
- [Faraday Paper](https://arxiv.org)

---

*This article is based on information available as of August 17, 2026.*
