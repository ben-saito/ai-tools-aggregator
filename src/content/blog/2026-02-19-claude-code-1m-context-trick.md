---
title: "Unlock Claude Code's 1M Token Context Window: Two Lines in settings.json Eliminate Auto-Compaction"
description: "Set ANTHROPIC_DEFAULT_HAIKU_MODEL and ANTHROPIC_DEFAULT_SONNET_MODEL to claude-sonnet-4-6-1m in .claude/settings.json to run all Claude Code tasks on the 1M token context window. Build an entire SaaS in one session without auto-compaction interrupting your flow."
publishedAt: "2026-02-19T01:00:00+09:00"
author: "AI Tools Hub"
category: "guide"
lang: "en"
tags: ["Claude Code", "Anthropic", "1M context", "Claude Sonnet 4.6", "configuration"]
featured: true
---

A two-line addition to `.claude/settings.json` expands Claude Code's context window from 200K to 1M tokens, eliminating auto-compaction during long coding sessions.

## The Configuration

Add the following to `.claude/settings.json` (create if it doesn't exist):

```json
{
  "env": {
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-6-1m",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-6-1m"
  }
}
```

After adding this, restart Claude Code and switch to the Sonnet model for the settings to take effect.

## What Changes

Claude Code internally routes tasks across multiple models. Haiku handles sub-tasks and lightweight processing; Sonnet handles the primary reasoning work. These environment variables override those defaults with `claude-sonnet-4-6-1m`, which means **all tasks run on the 1M token context window**.

In standard operation, Claude Code runs auto-compaction as codebases grow—summarizing and truncating older conversation history and code references. With 1M context enabled, this compaction threshold moves dramatically further out, allowing you to maintain the full development context across long sessions.

**Practical effects:**
- Reference codebases with thousands of files simultaneously
- Retain all change history and decision context throughout a session
- Build entire SaaS projects in a single session without context loss
- Eliminate the "memory loss" problem from mid-session compaction

## Technical Background

According to Anthropic's official documentation, Claude Opus 4.6 and Sonnet 4.6 support 1M token context windows via the `context-1m-2025-08-07` beta header. The `claude-sonnet-4-6-1m` model ID is a dedicated endpoint that automatically applies this beta header.

1M token context translates to approximately:
- 750,000 words (English)
- 3.4 million Unicode characters

## Cost Implications

**An important caveat:** Anthropic applies long context pricing to requests exceeding 200K tokens. Extended sessions will cost more than standard usage.

Cost-effectiveness considerations:
- Short tasks and simple queries: 200K context is sufficient, no additional cost
- Large codebase long-form development sessions: 1M context provides clear value
- Cost-conscious users: Combining with the multi-model optimization strategy covered yesterday—applying 1M context only where it's genuinely needed—is the rational approach

## Setting File Location

`.claude/settings.json` can be placed in the project root (per-repository settings) or home directory `~/.claude/settings.json` (system-wide default).

**If the settings file doesn't exist:**
```bash
mkdir -p ~/.claude && cat > ~/.claude/settings.json << 'EOF'
{
  "env": {
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-6-1m",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-6-1m"
  }
}
EOF
```

## Summary

This is a practical technique made viable by the 1M context support in Claude Sonnet 4.6. By overriding Claude Code's internal model assignments, it significantly reduces one of the biggest obstacles to agentic coding—context loss from mid-session compaction.

For developers working on large-scale projects, particularly those who need sustained coherence across long development sessions, this configuration is worth testing. The long context pricing is the primary tradeoff to evaluate against your use case.

**Related articles:**
- [Claude Sonnet 4.6 Release: Opus-Level Intelligence at Sonnet Price](/blog/2026-02-18-claude-sonnet-4-6-release)
- [Cut OpenClaw API Costs by Up to 90%](/blog/2026-02-18-openclaw-api-cost-reduction)

**Source:**
- Anthropic official model documentation
- Claude Code settings reference
