# Thinking Machines Publishes Methodology for Safe Open Weight Model Release: Inkling Case Study

---

## The Challenge: Reconciling Open Weights with Safety

Amid ongoing policy debates about AI and the proliferation of potentially dangerous capabilities, a particularly tough problem has emerged: how to reconcile developing and releasing open weight models with maintaining a safe environment. AI startup Thinking Machines has tackled this challenge directly and recently published the full methodology behind the release of Inkling, a powerful open weight model.

---

## What Thinking Machines Did Before Releasing Inkling

Before releasing Inkling, Thinking Machines conducted a multi-layered evaluation process spanning internal assessments, external testing, and targeted fine-tuning studies.

**Internal evaluations** covered three key areas:

- **Dual-use domains**: CBRN (chemical, biological, radiological, nuclear) and offensive cybersecurity capabilities were assessed for misuse potential
- **Broad misuse set**: Direct requests for harmful content and behavior in agentic, tool-use settings
- **Multimodal content evaluation**: Testing models on harmful prompts paired with benign look-alikes across 17 languages and text, image, and audio inputs

**External testing** was conducted by four independent organizations:

- General misuse via Scale AI
- Vulnerable-user interaction via Handshake AI
- CBRN and cybersecurity via FAR.AI
- Loss-of-control behaviors via Apollo Research

**Fine-tuning study**: Researchers created "helpful-only variants" of Inkling and Inkling-Small optimized to comply with rather than refuse harmful requests, then ran them against dual-use evaluations. The results showed these compliance-optimized variants "did not provide new uplift on CBRN and cyber tasks, and remained comparable to existing open-weight models" — suggesting that safety measures do not necessarily compromise capability.

---

## Looking Ahead: Dangerous Capability Training and Iterative Deployment

Thinking Machines is exploring several forward-looking approaches:

**Selective filtering**: Investigating whether dangerous knowledge such as CBRN development guides can be filtered at pre-training time without damaging general intelligence — a technically challenging but potentially transformative safety intervention.

**Iterative deployment**: Releasing models in graduated stages — first as a proprietary API, then as a fine-tuning API backing onto the underlying model, and finally as the model weights themselves. This staged approach allows safety measures to be validated at each phase before full open release.

---

## Why This Matters: Liberty Versus Paternalism

The significance of this work extends beyond a single product release. "What the world does with open weight models will define the level of individual sovereignty and liberty available to all of us with regard to AI," Thinking Machines writes. "Our ability to 'choose our own destiny' will run through having access to the means of production for AI systems — which means open weight models."

However, the paper acknowledges a critical caveat: "This safe path to open models only works if the ecosystem's defenses improve as quickly as the models do." The company commits to doing its part: "deciding carefully what to release, and researching how to decouple intelligence from dangerous capability."

---

## Reference

- [A Safe Path to Open Weights (Thinking Machines)](https://thinking.machine)

---

*This article is based on reporting from Import AI newsletter issue 468 published August 15, 2026.*
