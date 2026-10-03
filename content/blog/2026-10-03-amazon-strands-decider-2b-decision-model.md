# Amazon Releases Strands Decider 2B — A Decision Model for AI Agents

Amazon Web Services has released Strands Decider 2B, a high-speed decision model designed to serve as the "decider" step in AI agent workflows — determining the next action based on the agent's current state. The release arrives amid a wave of similar "decision model" products, including TypeSafe's Jev, which pioneered the concept and inspired Amazon's implementation.

---

## Decision Models: The LLM That Just Chooses

Traditional language models generate text. Decision models instead take a state description and context, then output a calibrated choice from pre-defined options — along with a confidence score. The advantage is speed and cost: a 2-billion-parameter model like Strands Decider runs far cheaper than a full frontier LLM, making it viable as a routing layer in agentic systems.

Amazon distinguished engineer Marc Brooker created the project after experimenting with Jev, TypeSafe's original decision model. Brooker's homebrew implementation briefly reached the top of an open-source leaderboard, validating demand for the approach before Amazon officially released the product through its Strand Labs division.

The model is built on Qwen3.5-2B, a compact open-weight language model, adapted to output structured choices rather than prose. Strands Decider 2B joins a crowded field: at least a dozen similar models have launched since TypeSafe introduced Jev, suggesting the architecture has become a commodity layer in AI systems rather than a differentiated capability.

---

## The Agentic Workflow Context

Brooker described decision models as solving a specific pain point in production AI systems: "What is the next thing for me to do here, based on where I am?" Full LLMs are capable of making such decisions, but the cost and latency make them inefficient for high-frequency routing decisions in long-running agent loops.

The pattern is increasingly common in enterprise AI deployments, where agentic workflows orchestrate multiple tools and steps. A decision model at the front of each step can reduce the number of expensive LLM calls by routing only genuinely complex decisions to the full model.

---

## Reference

- [TechCrunch: Amazon releases its own Jev clone as decision models flood the web](https://techcrunch.com/2026/10/01/amazon-releases-its-own-jev-clone-as-decision-models-flood-the-web/)

---

*Information current as of October 1, 2026.*
