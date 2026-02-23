---
title: "Tool Configuration Beats Model Upgrades for AI Coding Agent Cost Reduction — Sonnet vs. Opus Experiment"
description: "A team ran a controlled experiment on their @qa-tester agent comparing the impact of adding a bash tool versus upgrading from Sonnet to Opus. Adding the bash tool increased test coverage by 120% and cut costs by 32%. Upgrading to Opus delivered zero coverage gain at 65% higher cost."
publishedAt: "2026-02-22T12:00:00+09:00"
author: "Flow"
category: "news"
tags: ["Claude", "Sonnet", "Opus", "AI agent", "cost optimization", "QA automation"]
lang: "en"
---

A team published experiment results on February 22, 2026, comparing two variables in their AI coding agent setup: adding a tool versus upgrading the underlying model. The results are direct and quantified, offering a practical benchmark for teams weighing similar decisions.

## The Experiment

The subject was `@qa-tester`, an AI agent responsible for automated test coverage measurement and quality checks. The team ran the experiment in two sequential steps:

1. **Baseline**: Sonnet model, no bash tool
2. **Step 1**: Add bash tool to Sonnet, keep everything else constant
3. **Step 2**: Upgrade model from Sonnet to Opus, keep bash tool

## Results

```
Step 1 — Add bash tool to Sonnet:
  Test coverage:      +120%
  Processing time:    -45%
  Cost per check:     -32%

Step 2 — Upgrade Sonnet → Opus (bash tool retained):
  Test coverage:      +0%
  Processing time:    +8%
  Cost per check:     +65%
```

Adding the bash tool doubled test coverage and simultaneously reduced both latency and cost per operation. Upgrading to Opus after that change produced no measurable coverage improvement, added 8% to processing time, and increased cost by 65%.

## The Conclusion

The team's decision: keep `@qa-tester` on Sonnet. Their stated rationale was unambiguous — same coverage, 1.7x cheaper than Opus, no justification for the additional spend.

## How @qa-tester Was Designed

The experiment's clean results are partly a function of how the agent was architected before the test began.

**Plan-driven execution**: The agent generates an explicit execution plan before acting. This eliminates speculative tool calls that produce no measurable output and inflate token consumption.

**ARIA-based targeting**: UI element targeting uses ARIA attributes rather than CSS selectors or visual coordinates. This makes the agent's test targets stable across DOM changes that would otherwise break brittle selectors.

**Graceful degradation**: On failure, the agent returns partial results rather than halting entirely. In unreliable environments — flaky CI, slow network responses, intermittent test infrastructure — this ensures the agent produces actionable output even when full execution isn't possible.

**Scoped tool set**: The agent was given only the tools it needed. A narrow tool set forces the model to complete the task with available means rather than exploring alternative paths. The addition of the bash tool was deliberate and targeted: it gave the agent the ability to actually run tests, which it previously lacked.

## Why Didn't Opus Benefit from the Bash Tool?

One interpretation offered by the team: higher-capability models may have a lower threshold for abandoning a task under constraints. When given the bash tool, Sonnet used it to drive test execution to completion. Opus, presented with the same tool set, may have assessed certain sub-tasks as infeasible earlier in the execution path and returned incomplete results more often.

This is a plausible but not universal finding. Task type, agent design, and prompt structure all influence where this dynamic appears. What it does challenge is the assumption that a more capable model will always produce better outcomes in structured, tool-using workflows. Instruction-following under constraints is a different capability than general reasoning, and the two don't scale together uniformly across model versions.

## Takeaways for Agent Developers

The experiment illustrates a sequencing principle for agent optimization: fix the tool configuration before varying the model.

In this case, the right tool alone produced a 120% coverage improvement. No model upgrade would have been necessary to achieve that gain — and the model upgrade that followed it added cost without adding value.

For teams running similar agent workflows, the implication is that model selection should be evaluated *after* the agent has been given an appropriate tool set and tested with the baseline model. Upgrading the model before that point introduces a cost variable without a reliable performance baseline to measure it against.

Sonnet at appropriate tooling outperformed Opus without it. That ordering matters.
