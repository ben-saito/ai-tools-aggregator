---
title: "Claude Sonnet 4.6 Becomes the Default for Free and Pro Users — Outperforms Opus 4.5 on Coding Agent Benchmarks"
description: "Anthropic has made Claude Sonnet 4.6 the default model for claude.ai's Free and Pro plans. Released February 17, 2026, it matches Sonnet 4.5 pricing at $3/$15 per million tokens while internal Claude Code evaluations show it beating the previous frontier model, Opus 4.5, 59% of the time on agentic coding tasks."
publishedAt: "2026-02-23T12:00:00+09:00"
author: "Flow"
category: "news"
tags: ["Claude", "Anthropic", "Sonnet 4.6", "AI model", "coding agent", "prompt injection"]
lang: "en"
---

Anthropic has designated Claude Sonnet 4.6 as the default model for Free and Pro tier users on claude.ai and Claude Cowork. The model, released on February 17, 2026, has been automatically applied to all affected accounts. Users on those tiers no longer need to manually select it.

## Pricing and Specifications

| | |
|---|---|
| Input | $3 / 1M tokens |
| Output | $15 / 1M tokens |
| Context window | 1M tokens (beta) |
| API model name | `claude-sonnet-4-6` |

Pricing is unchanged from Sonnet 4.5. By comparison, Opus 4.6 carries an input price of $15/1M tokens — more than five times Sonnet 4.6's rate. The decision to default Free and Pro users to Sonnet 4.6 rather than a newer Opus-class model reflects the cost structure of serving millions of users.

## Internal Evaluation: Coding Agent Performance

Anthropic's Claude Code development team published internal head-to-head evaluation results.

**Sonnet 4.6 vs. Sonnet 4.5**: Sonnet 4.6 was preferred in 70% of comparisons. Cited improvements include better context absorption and reduced duplication of common logic across generated code.

**Sonnet 4.6 vs. Opus 4.5** (previous frontier model): Sonnet 4.6 was preferred in 59% of comparisons. The evaluation described Opus 4.5 as prone to over-engineering and less reliably instruction-following. The Claude Code team noted that Sonnet 4.6 produces "fewer false success reports, fewer hallucinations, and better consistency on multi-step tasks."

That a mid-tier model outperforms a previous frontier model on agentic coding tasks is notable. It suggests that model scale alone does not determine performance on structured, tool-using workflows — and that instruction-following and calibration may matter more for agent reliability than raw capability on open-ended generation.

## Computer Use Improvements

On the OSWorld benchmark — which measures an AI's ability to control a desktop environment — Sonnet 4.6 shows substantial improvement over prior models. Anthropic highlighted competence on spreadsheet manipulation and multi-tab web form completion as areas approaching human-level accuracy.

This matters for teams building automation workflows that go beyond text generation: document processing pipelines, browser-based agents, and desktop automation use cases become more viable with higher baseline accuracy on GUI interaction.

## Prompt Injection Resistance

Sonnet 4.6 delivers significantly improved resistance to prompt injection attacks compared to Sonnet 4.5, reaching parity with Opus 4.6 on this dimension. For agentic deployments — where models routinely process external content from web pages, documents, and APIs — prompt injection is a practical security concern, not just a theoretical one. The upgrade in this area is directly applicable to production agent systems.

## What This Means for API Users

Free and Pro users on claude.ai get Sonnet 4.6 automatically with no action required. For API users, the model is available now at `claude-sonnet-4-6`. Existing integrations pointing to `claude-sonnet-4-5` will continue to work but will not automatically receive the upgrade — explicit model name changes are required.

Opus 4.6 remains available for workloads that require it, but the internal evaluation data suggests that defaulting to Sonnet 4.6 for coding agent tasks is a reasonable starting point before profiling whether Opus-class performance is actually needed.
