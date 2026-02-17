---
title: "Claude Sonnet 4.6 Released with Opus-Level Performance at Sonnet Pricing"
description: "Anthropic launches Claude Sonnet 4.6, delivering human-level computer use capabilities and 1M token context window in beta. 70% of users prefer it over the previous version, and 59% rate it higher than Opus 4.5."
publishedAt: "2026-02-18T07:00:00+09:00"
author: "AI Tools Hub"
category: "release"
lang: "en"
tags: ["claude", "anthropic", "coding-agent", "ai-model", "computer-use"]
featured: true
---

On February 17, 2026, Anthropic released **Claude Sonnet 4.6**, a model that delivers advanced performance previously only achievable with Opus-class models—at Sonnet pricing. The new model shows significant improvements across coding, computer use, long-context reasoning, agent planning, knowledge work, and design.

## Opus-Level Performance at Sonnet Pricing

In early testing with developers, Claude Sonnet 4.6 achieved a **70% preference rate** compared to its predecessor, Sonnet 4.5. Even more remarkably, when compared against Claude Opus 4.5 (the frontier model from November 2025), **59% of users preferred Sonnet 4.6**.

This means tasks that previously required Opus-class models—especially real-world, economically valuable [office tasks](https://artificialanalysis.ai/evaluations/gdpval-aa)—can now be handled by Sonnet 4.6. Pricing remains unchanged at **$3/$15 per million tokens**.

## Human-Level Computer Use Capabilities

Anthropic first introduced general-purpose computer-using models in October 2024. While initially described as "experimental—at times cumbersome and error-prone," the Sonnet models have made remarkable progress over 16 months, as measured on the [OSWorld](https://os-world.github.io/) benchmark.

OSWorld tests AI models on hundreds of real-world tasks across actual software (Chrome, LibreOffice, VS Code, and more) running in a simulated environment. There are no special APIs or custom connectors—the model interacts with the computer using only virtual mouse clicks and keyboard input, just like a human would.

Early Sonnet 4.6 users report **human-level capability** in tasks like navigating complex spreadsheets or completing multi-step web forms across multiple browser tabs.

**Prompt injection resistance has also improved significantly**. [Safety evaluations](https://anthropic.com/claude-sonnet-4-6-system-card) show Sonnet 4.6 is a major improvement over Sonnet 4.5 and performs similarly to Opus 4.6.

## 1M Token Context Window (Beta)

Sonnet 4.6 offers a **1M token context window** in beta—enough to hold entire codebases, lengthy contracts, or dozens of research papers in a single request.

More importantly, Sonnet 4.6 reasons effectively across this entire context. This is particularly evident in the [Vending-Bench Arena](https://andonlabs.com/evals/vending-bench-arena) evaluation, which tests how well a model can run a simulated business over time.

Sonnet 4.6 developed a unique strategy: **it invested heavily in capacity for the first ten simulated months, spending significantly more than competitors, then pivoted sharply to focus on profitability in the final stretch**. This timing helped it finish well ahead of the competition.

## Major Coding Improvements

In Claude Code early testing, users preferred Sonnet 4.6 over Sonnet 4.5 **70% of the time**. They reported that it "more effectively reads context before modifying code" and "consolidates shared logic rather than duplicating it," making it less frustrating during long sessions.

Compared to Opus 4.5, **59% of users preferred Sonnet 4.6**. They rated it as "significantly less prone to overengineering and laziness," with "meaningfully better instruction following," "fewer false claims of success," "fewer hallucinations," and "more consistent follow-through on multi-step tasks."

Customers highlighted improvements in frontend code and financial analysis. Visual outputs from Sonnet 4.6 were described as "notably more polished, with better layouts, animations, and design sensibility." Fewer iterations were needed to reach production-quality results.

## Benchmark Results

- **OfficeQA**: Matches Opus 4.6 performance. Significant upgrade for document comprehension workloads
- **SWE-bench and others**: Strong resolution rates on complex code fixes, especially when searching across large codebases
- **Bug detection**: Meaningfully closed the gap with Opus
- **Vending-Bench Arena**: Developed unique strategy and finished well ahead of competition
- **Insurance benchmark**: 94% score, highest-performing model tested for computer use

## Product Updates

On the Claude Developer Platform, Sonnet 4.6 supports:

- [Adaptive Thinking](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking) and extended thinking
- [Context Compaction](https://platform.claude.com/docs/en/build-with-claude/compaction) (beta): Automatically summarizes older context as conversations approach limits
- [Web search](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool) and [fetch](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool) tools: Automatically write and execute code to filter and process search results
- [Code execution](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool), [memory](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool), [programmatic tool calling](https://platform.claude.com/docs/en/agents-and-tool/tool-use/programmatic-tool-calling), and [tool search](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool) are now generally available

For Claude in Excel users, the add-in now supports MCP connectors, letting Claude work with tools like S&P Global, LSEG, Daloopa, PitchBook, Moody's, and FactSet directly within Excel.

## Availability

Claude Sonnet 4.6 is **available now** on:

- All Claude plans (Free/Pro/Max/Team/Enterprise)
- Claude Cowork
- Claude Code
- Claude API (model name: `claude-sonnet-4-6`)
- All major cloud platforms

The **free tier** has been upgraded to Sonnet 4.6 by default, now including file creation, connectors, skills, and compaction.

## Safety Evaluation

Anthropic conducted [extensive safety evaluations](https://anthropic.com/claude-sonnet-4-6-system-card) of Sonnet 4.6. Safety researchers concluded that the model has "a broadly warm, honest, prosocial, and at times funny character, very strong safety behaviors, and no signs of major concerns around high-stakes forms of misalignment."

## Related Links

- [Official Announcement (Anthropic)](https://www.anthropic.com/news/claude-sonnet-4-6)
- [System Card (Safety Evaluation)](https://anthropic.com/claude-sonnet-4-6-system-card)
- [Claude API Documentation](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Claude Pricing](https://claude.com/pricing)
