# Uncensored AI Models: 10a Labs Maps the Hidden Ecosystem of Modified LLMs

The landscape of uncensored AI models has grown into a sprawling ecosystem of redistributors and modified weights, with Chinese-origin models dominating new production. Startup 10a Labs analyzed 3,471 uncensored model repositories on HuggingFace, revealing a market where safety guardrails are systematically stripped and redistributed.

---

## Key Findings: Scale and Structure

10a Labs found that each original uncensored model is repackaged an average of 2.4 times, creating a fragmented distribution network. The top five modified model families are Qwen, Llama, Gemma, MistralMixtral, and Phi. The most common types of uncensored deployments are: chatbots, cybersecurity tools, and document processing tools.

A striking finding is the low overlap between producers and redistributors. The team counted 1,055 producers and 1,011 redistributors, with only 24% of producers also redistributing their work. This specialization suggests a mature secondary market for model redistribution.

Deployment has accelerated dramatically. GitHub application creation for model serving rose from 30 per month in mid-2024 to 140-188 per month by late 2025, coinciding with the maturation of the Ollama distribution layer.

---

## Geographic Concentration and Ownership

The ecosystem shows clear concentration patterns. Ten actors account for 45% of all non-dataset HuggingFace repositories. Chinese-origin models represent 38% of all identified uncensored repositories, and their share of new uncensored production rose from 1% in Q1 2024 to 55% in Q2 2025.

"Uncensoring refers to techniques that intentionally strip the safety guardrails typically present when open-weight models are released to the public," the researchers note, citing activation-space abliteration, malicious fine-tuning, and model merging as primary techniques.

---

## Why This Matters for AI Safety

The research offers clues about how future autonomous AI systems might modify models. "People take a technology and modify it for porny or scammy purposes," the paper notes. "But it is worth studying the dynamics of how open-weight models get converted into off-distribution models because this offers clues for how autonomous AI systems might modify models in the future."

The findings also highlight the difficulty of controlling non-rival goods. Unlike compute or researcher time, model weights and training algorithms "can all be copied and shared at low cost," making traditional intervention mechanisms ineffective.

---

## Reference

- [Uncensored Open-weight Models: Redistribution as the Persistence Layer (arXiv)](https://arxiv.org/)

---

*This article is based on research published on September 21, 2026.*
