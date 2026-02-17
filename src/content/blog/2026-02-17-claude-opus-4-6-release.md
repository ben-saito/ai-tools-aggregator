---
title: 'Claude Opus 4.6 Release: Industry-Leading Coding Agent Capabilities'
description: 'Anthropic releases Claude Opus 4.6, achieving top scores on Terminal-Bench 2.0 with 1M token context window, Agent Teams, Context Compaction, and enhanced safety measures.'
publishedAt: '2026-02-17T11:00:00+09:00'
author: 'AI Tools Hub'
category: 'AI Development'
tags: ['Claude', 'Anthropic', 'AI Coding', 'Agents', 'LLM']
featured: true
lang: 'en'
seo:
  keywords: 'Claude Opus 4.6, Anthropic, Terminal-Bench, coding agents, 1M token context, Agent Teams'
---

Anthropic released Claude Opus 4.6 on February 5, delivering industry-leading performance in coding agent capabilities and introducing multiple developer-focused features.

## Top Score on Terminal-Bench 2.0

Claude Opus 4.6 achieved the highest score on Terminal-Bench 2.0, an agentic coding evaluation benchmark. This benchmark measures an AI model's ability to autonomously complete tasks within codebases, representing a critical indicator of real-world development utility.

The model also excels across other major benchmarks:

- **Humanity's Last Exam**: Leads all frontier models on this complex multidisciplinary reasoning test
- **GDPval-AA**: Outperforms OpenAI GPT-5.2 by approximately 144 Elo points on economically valuable knowledge work tasks (finance, legal, etc.)
- **BrowseComp**: Best-in-class performance on locating hard-to-find information online
- **SWE-bench Verified**: Achieved 81.42% with prompt modification across 25 trials

## 1M Token Context Window

Claude Opus 4.6 is the first Opus-class model to offer a 1 million token context window in beta. This enables the model to maintain more information while working with large codebases or conducting extended conversations.

On the 8-needle 1M variant of MRCR v2—a needle-in-a-haystack benchmark testing retrieval of information "hidden" in vast amounts of text—Opus 4.6 scored 76%, while Sonnet 4.5 scored only 18.5%. This represents a qualitative shift in addressing "context rot," the performance degradation that typically occurs as conversations exceed certain token counts.

## New Developer Features

The Claude Developer Platform introduces several new capabilities:

### Adaptive Thinking

Previously, developers faced a binary choice of enabling or disabling extended thinking. Adaptive Thinking allows Claude to automatically use extended thinking when helpful. Developers can adjust across four effort levels (low, medium, high, max).

### Context Compaction (Beta)

To address context window limits during long-running conversations and agentic tasks, Context Compaction automatically summarizes and replaces older context. This enables Claude to perform longer tasks without hitting limits.

### 128k Output Tokens

Support for outputs up to 128,000 tokens allows Claude to complete larger-output tasks without breaking them into multiple requests.

### US-only Inference

For workloads requiring execution within the United States, US-only Inference is available at 1.1× token pricing.

## Agent Teams in Claude Code

Claude Code introduces Agent Teams as a research preview. Developers can now spin up multiple agents that work in parallel and coordinate autonomously—ideal for tasks that split into independent, read-heavy work like codebase reviews.

Users can take over any subagent directly using Shift+Up/Down or tmux.

## Enhanced Office Tool Integration

Claude in Excel now handles long-running and harder tasks with improved performance, including planning before acting, ingesting unstructured data and inferring the right structure without guidance, and handling multi-step changes in one pass.

Claude in PowerPoint launches in research preview, reading layouts, fonts, and slide masters to stay on brand. It supports building from templates or generating full decks from descriptions. Available for Max, Team, and Enterprise plans.

## Continued Safety Focus

Intelligence gains do not come at the cost of safety. On automated behavioral audits, Opus 4.6 showed low rates of misaligned behaviors such as deception, sycophancy, encouragement of user delusions, and cooperation with misuse. Overall alignment matches Opus 4.5, previously Anthropic's most-aligned frontier model.

Opus 4.6 also shows the lowest rate of over-refusals—failing to answer benign queries—of any recent Claude model.

Anthropic conducted its most comprehensive safety evaluation set for any model, including new evaluations for user wellbeing, more complex tests of refusal capabilities for potentially dangerous requests, and updated evaluations of surreptitious harmful actions. Given enhanced cybersecurity capabilities, six new cybersecurity probes were developed to detect different forms of potential misuse.

## Pricing

Claude Opus 4.6 pricing remains at $5/$25 per million tokens (input/output). Premium pricing applies for prompts exceeding 200k tokens ($10/$37.50 per million input/output tokens), available only on the Claude Developer Platform.

The model is available today on claude.ai, the Claude API, and major cloud platforms. Developers can use `claude-opus-4-6` via the API.

For detailed evaluation results and safety assessments, refer to the official [System Card](https://www.anthropic.com/claude-opus-4-6-system-card).
