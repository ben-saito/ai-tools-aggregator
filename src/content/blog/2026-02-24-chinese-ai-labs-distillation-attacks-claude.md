---
title: "Three Chinese AI Labs Ran Industrial-Scale Distillation Attacks on Claude, Extracting 16 Million+ Exchanges"
description: "Anthropic reveals that DeepSeek, Moonshot AI, and MiniMax used approximately 24,000 fraudulent accounts to conduct over 16 million exchanges with Claude, systematically extracting agentic reasoning, tool use, and coding capabilities for their own model training."
publishedAt: "2026-02-24T12:00:00+09:00"
author: "Flow"
category: "news"
tags: ["Anthropic", "DeepSeek", "MiniMax", "Moonshot AI", "distillation", "security"]
lang: "en"
---

Anthropic disclosed on February 23 that three Chinese AI companies — DeepSeek, Moonshot AI, and MiniMax — conducted industrial-scale distillation campaigns against Claude. Using approximately 24,000 fraudulent accounts, the three firms collectively executed more than 16 million exchanges designed to extract Claude's agentic reasoning, tool use, and coding capabilities for use in training their own models.

## The Scale of Each Operation

**MiniMax** ran the largest campaign by far, accounting for over 13 million exchanges. The operation focused on extracting agentic coding and tool use capabilities, and was detected ahead of a new MiniMax model release. Anthropic observed a telling behavioral pattern: whenever a new Claude model was released, MiniMax redirected roughly half its traffic to the new model within 24 hours — a clear indicator of systematic capability harvesting.

**Moonshot AI**, the company behind the Kimi model series, conducted more than 3.4 million exchanges. Its operation targeted a broader range of capabilities: agentic reasoning, coding, computer-use agent development, and computer vision. In a particularly notable finding, Anthropic's analysis of request metadata matched profiles of senior Moonshot AI staff, directly linking the company's employees to the distillation infrastructure.

**DeepSeek** ran the smallest operation at over 150,000 exchanges, but its approach was methodologically distinct. Rather than simply extracting outputs, DeepSeek focused on reasoning capabilities and rubric-based scoring. It prompted Claude to "verbalize the internal reasoning of completed answers step by step" — effectively generating chain-of-thought training data at scale. DeepSeek also used Claude to generate censorship-safe alternative responses to politically sensitive queries.

## How They Did It

All three companies used fraudulent accounts combined with commercial proxy services to access Claude at scale. Anthropic's investigation found that a single proxy network was managing more than 20,000 fraudulent accounts simultaneously — suggesting a well-resourced, professionally operated infrastructure behind the distillation campaigns.

## How Anthropic Caught Them

Detection relied on a combination of IP address correlation, request metadata analysis, infrastructure indicators, and intelligence from industry partners. The multi-signal approach allowed Anthropic to not only identify the distillation activity but also attribute it to specific organizations.

In response, Anthropic has deployed classifier systems and behavioral fingerprinting tools designed to detect and block distillation attempts in real time. The company indicated these systems are now running in production.

## OpenAI Reports Similar Attacks

Anthropic isn't alone. OpenAI has claimed that DeepSeek employed similar distillation techniques against ChatGPT, suggesting this is not an isolated incident but a systematic industry practice.

Model distillation — harvesting a model's outputs at scale to train a competing model — is emerging as one of the most significant intellectual property challenges in the AI industry. Traditional software IP protections don't map cleanly onto the problem: the "theft" happens through legitimate API calls, making detection and enforcement fundamentally different from conventional code piracy.

For AI providers, the implications are clear. Distillation defense is no longer optional — it's a core infrastructure requirement. And as models become more capable, the incentive for competitors to extract that capability through distillation only grows.

Official announcement: [https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks)
