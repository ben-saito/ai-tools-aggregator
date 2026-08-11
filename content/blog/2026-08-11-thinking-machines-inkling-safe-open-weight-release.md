# Thinking Machines Releases Inkling: A Safe Path to Open-Weight AI Models

A new AI startup called Thinking Machines has released Inkling, an open-weight model, along with a detailed methodology for how to safely release powerful AI systems into the world. The release addresses one of the most difficult questions in AI governance: how to give people access to powerful AI models while preventing misuse.

---

## The Challenge of Open-Weight Models

Open-weight models give anyone the ability to run, modify, and build on top of AI systems. This represents a form of technological sovereignty — people can choose their own AI destiny without relying on proprietary APIs. But powerful open-weight models also bring meaningful dual-use risks, including potential misuse in areas like cybersecurity and weapons development.

---

## Thinking Machines' Release Methodology

Before releasing Inkling, Thinking Machines conducted a multi-layered evaluation process:

**Internal Evaluations:**
- Dual-use domains including CBRN (chemical, biological, radiological, nuclear) and offensive cybersecurity
- Broad misuse testing covering harmful requests in agentic and tool-use settings
- Multimodal content evaluation testing models on harmful prompts paired with benign look-alikes across 17 languages

**External Testing by Four Organizations:**
- Scale AI for general misuse
- Handshake AI for vulnerable-user interaction
- FAR.AI for CBRN and cybersecurity
- Apollo Research for loss-of-control behaviors

**Fine-Tuning Study:**
The team created fine-tuned variants of Inkling optimized to comply with — or refuse — harmful requests, then tested them against dual-use evaluations. The result: "the helpful-only variants did not provide new uplift on CBRN and cyber tasks, and remained comparable to existing open-weight models."

---

## Looking Ahead: Iterative Deployment

Thinking Machines proposes two future directions:

**Selective Capability Filtering:** The possibility of filtering out dangerous knowledge — like CBRN development guides — at the pre-training stage, without damaging general intelligence.

**Iterative Deployment:** Releasing models in stages — first as a proprietary API, then as a fine-tuning API, and finally as the model weights themselves.

---

## Why This Matters

The paper notes a fundamental tension: "What the world does with open-weight models will define the level of individual sovereignty and liberty available to all of us with regard to AI." Open-weight models are the "means of production" for AI systems.

But this safe path only works, the authors write, "if the ecosystem's defenses improve as quickly as the models do." The release of Inkling with a public methodology represents the most concrete attempt yet to operationalize that balance.

---

## Reference Links

- [A Safe Path to Open Weights (Thinking Machines blog)](https://thinking-machines.com)
- [Import AI 468](https://importai.substack.com)

---

*This article is based on reporting from Import AI 468, published August 10, 2026.*
