# Perry Dong and Chelsea Finn: Robotics Needs Its Own "Post-Training Recipe"

Stanford researchers Perry Dong and Chelsea Finn (co-founder of Physical Intelligence) argue that robotics is approaching its own "LLM-moment," but is missing a critical component: a universal post-training algorithm that lets robots learn from experience the way language models learned from RLHF.

---

## The LLM Parallel

The revolution in large language models came not just from scale, but from convergence on a shared post-training recipe: a strong pretrained model, defined environments and reward signals, RL optimization against a reference model, and vigilance for reward hacking pathologies.

Robotics, Dong and Finn argue, sits "almost exactly where language modeling was"—pretraining has scaled beautifully, but the other half is missing: the model learning from its own experience.

---

## What Robotics Needs

The researchers identify three gaps blocking robotics from its inflection point:

1. **A stable fine-tuning algorithm**: One that works reliably when applied to billion-parameter models and learns from practical amounts of real-hardware data
2. **Standard reset practices**: Default ways to reset scenes between attempts so robots can retry
3. **Feedback interfaces**: Standard ways for humans to provide feedback and have it translate into learning

---

## EXPO(-FT): An Early Solution

Dong and Finn have been developing EXPO(-FT), an algorithm designed specifically for fine-tuning frontier robotics models. It uses reinforcement learning with small edits from a frontier model to repeatedly improve actions. Early results are promising, though the algorithm is still in development and not yet widely deployed.

The core challenge is reliability—robotics post-training needs to work even more robustly than language model RLHF, because physical failures have immediate real-world consequences.

---

## Why It Matters

If the field converges on a post-training recipe for robotics similar to what happened for LLMs, the conditions for rapid progress in physical AI would be in place. The question is not whether robots can learn, but whether the community can standardize the way they learn from experience.

---

*This article is based on Import AI 474 (September 28, 2026).*
