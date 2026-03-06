---
title: "OpenAI Symphony — From Supervising Agents to Managing Work"
description: "OpenAI releases Symphony, an open-source automation tool that automatically executes agents from GitHub Issues (Linear) and creates PRs."
publishedAt: "2026-03-06T12:00:00+09:00"
author: "AI Tools Hub"
category: "ai-coding"
tags: ["OpenAI", "Symphony", "AI coding", "automation", "linear", "agent orchestration"]
lang: "en"
featured: false
---

# OpenAI Symphony — From Supervising Agents to Managing Work

OpenAI has released a new open-source project called **Symphony** that automates the entire workflow from GitHub Issues (Linear) to autonomous agent execution and PR creation. It represents a paradigm shift from "supervising coding agents" to "managing work."

## What is Symphony?

Symphony is a long-running automation service that continuously monitors an issue tracker (Linear in this version), creates isolated workspaces for each issue, and runs a coding agent session inside each workspace.

**Traditional approach:**
- Developer gives instructions to an agent
- Developer supervises the agent's work
- Developer reviews the output

**With Symphony:**
- Monitors Linear board for new issues
- Automatically creates isolated workspace
- Runs agent to complete the task
- Generates PR with proof of work
- Developer only manages "work flow"

## Key Features

1. **Issue Tracker Integration**: Monitors Linear for new work items automatically
2. **Isolated Workspaces**: Creates separate working environment for each issue
3. **Autonomous Execution**: Launches Codex in app-server mode within the workspace
4. **Proof of Work**: Generates CI status, PR review feedback, complexity analysis, walkthrough videos
5. **Safe Merging**: PRs are safely merged after human approval

## Technical Specifications

- **Implementation**: Elixir/OTP (prototype)
- **Workflow Definition**: Uses `WORKFLOW.md` in repository for version-controlled prompts
- **Concurrency**: Up to 10 parallel agents (configurable)
- **Auto-cleanup**: Automatically cleans up when issues move to terminal states (Done, Closed)
- **Security**: Default safe sandbox policy (workspace-write)

## Relation to "Harness Engineering"

Symphony builds on OpenAI's "Harness Engineering" approach announced the same day. For agents to work effectively, human-readable tests, specifications, and validations are prerequisites. Symphony is the next step—automating the flow of work itself.

## Future Plans

OpenAI positions Symphony as a "low-key engineering preview" for testing in trusted environments. They encourage implementations in any programming language based on SPEC.md.

**Upcoming:**
- Multiple issue tracker support
- More flexible workflow definitions
- Enterprise-grade security enhancements

## Getting Started

```bash
git clone https://github.com/openai/symphony
cd symphony/elixir
mise install
mix setup
mix build
./bin/symphony ./WORKFLOW.md
```

## Conclusion

Symphony represents a new paradigm where AI agents are not "tools" to be used but "workers" to be managed. Developers may shift from supervising individual coding agents to managing entire work flows.

- **Repository**: https://github.com/openai/symphony
- **Specification**: https://github.com/openai/symphony/blob/main/SPEC.md
