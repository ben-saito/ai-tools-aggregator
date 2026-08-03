# DesignArena Creators Raise $7.9 Million to Bring Human "Taste" to AI Models

A startup called Intelligence — the company behind the popular human-evaluation platform DesignArena — has raised a $7.9 million seed round to expand its approach to evaluating AI-generated content. The round was led by Index Ventures, with participation from Conviction (Sarah Guo and Mike Vernal), A*, Valkyrie, and others.

---

## The Problem: AI Can Build, But Can't Judge

The founding story is familiar in the AI era: co-founder Grace Li and a handful of college friends were building an AI game engine in 2025. The models could produce functional games, but none of them were actually fun. The core question emerged naturally — how do you measure whether something is enjoyable?

There was no automated benchmark for fun. The team concluded that honest human judgment was irreplaceable, and set out to scale that judgment efficiently.

---

## What DesignArena Does

DesignArena lets users compare AI-generated outputs across multiple formats — images, websites, games, and more — through a simple A vs. B ranking interface. Users indicate preferences, and those rankings feed back into the AI companies' training pipelines.

The platform now has **5.3 million users** and is generating **$60 million in ARR**, making it a key commercial source of human evaluation data for frontier AI labs.

### Enterprise Value

The real value is on the enterprise side. Frontier labs treat DesignArena as a continuous feedback loop: users ranking outputs without knowing or caring which model generated them, providing unbiased signal on what people actually prefer. This is especially valuable for multimodal AI systems where automated metrics are easy to game.

The team notes that web design preferences vary significantly by geography — Asia tends toward maximalist styles — which provides a nuanced signal that static benchmarks miss entirely.

---

## Context: Automated Benchmarks Are Being Gamed

The launch comes weeks after the Hugging Face breach, which dramatically demonstrated how automated benchmarks can be manipulated. Human evaluation platforms like DesignArena and LM Arena (which raised $150M in January) are emerging as harder-to-game alternatives.

Not all human-evaluation startups are thriving, however. Yupp, which raised $33M from a16z crypto's Chris Dixon and claimed 1.3 million users, shut down earlier this year — suggesting the business model is far from proven.

---

## Technical Perspective

From a developer standpoint, DesignAren's approach represents a practical instantiation of preference learning in production systems. The ranking data feeds directly into reinforcement learning from human feedback (RLHF) pipelines — but at scale, with geographic and temporal segmentation that most internal data collection efforts lack.

For AI teams building media generation systems, the platform offers a rare combination: diverse human evaluator pool, structured preference data, and the ability to slice feedback by demographic and geographic cohorts.

---

*This article is based on information from August 3, 2026.*
