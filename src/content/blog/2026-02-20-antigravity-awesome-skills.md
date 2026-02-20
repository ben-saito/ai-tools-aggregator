---
title: "868 Agentic Skills, One Command: Antigravity Awesome Skills Becomes the Cross-Tool Skill Standard"
description: "Antigravity Awesome Skills (v5.4.0) delivers 868+ battle-tested skills for Claude Code, Gemini CLI, Codex CLI, Cursor, GitHub Copilot, and five other AI coding assistants via a single npx command. With official skills from Anthropic, Vercel, OpenAI, Supabase, and Microsoft consolidated under one MIT-licensed repository, it's emerging as the portable skill layer for the fragmented AI coding agent landscape."
publishedAt: "2026-02-20T10:00:00+09:00"
author: "AI Tools Hub"
category: "tool"
lang: "en"
tags: ["Antigravity Awesome Skills", "Claude Code", "AI Agents", "Skills", "Gemini CLI", "Cursor", "OSS", "SKILL.md"]
featured: true
---

As the AI coding assistant landscape fragments across Claude Code, Gemini CLI, Codex CLI, Cursor, and GitHub Copilot, one open-source repository is emerging as a shared skill layer for all of them. **Antigravity Awesome Skills** (v5.4.0, "Workflows Edition") bundles 868+ curated agentic skills into a single MIT-licensed repository, consolidating official skills from Anthropic, Vercel Labs, OpenAI, Supabase, Microsoft, and Google DeepMind alongside a large community contribution base.

## The Problem It Solves

AI coding agents are powerful general-purpose systems, but they lack context-specific knowledge: your company's deployment protocol, the exact syntax for AWS CloudFormation, or how your team writes commit messages. Skills—small markdown files that teach agents how to do specific tasks—fill this gap.

The challenge is that skills created for Claude Code don't automatically work in Cursor, and Gemini CLI has its own conventions. Antigravity Awesome Skills addresses this with a universal `SKILL.md` format that works across eight tools:

```bash
# Install once—covers all tools
npx antigravity-awesome-skills

# Use naturally in any supported tool
"Use @brainstorming to plan a SaaS MVP."
"Run @sql-injection-testing on this endpoint."
```

## Cross-Tool Compatibility

The v5.4.0 release supports eight AI coding assistants:

| Tool | Type | Invocation |
|------|------|-----------|
| Claude Code | CLI | `>> /skill-name` |
| Gemini CLI | CLI | `Use skill-name...` |
| Codex CLI | CLI | `Use skill-name...` |
| Antigravity IDE | IDE | Agent Mode: `Use skill...` |
| Cursor | IDE | `@skill-name` in Chat |
| GitHub Copilot | Extension | Paste content manually |
| OpenCode | CLI | `opencode run @skill-name` |
| AdaL CLI | CLI | Auto (on-demand load) |

The recommended universal installation path is `~/.agent/skills/`, with tool-specific paths available through installer flags:

```bash
npx antigravity-awesome-skills --claude   # → .claude/skills/
npx antigravity-awesome-skills --gemini   # → .gemini/skills/
npx antigravity-awesome-skills --cursor   # → .cursor/skills/
npx antigravity-awesome-skills --codex    # → .codex/skills/
```

## Official Skills from Major Vendors

What distinguishes this from a typical community curations is the inclusion of official skills from the companies building the tools themselves:

- **[anthropics/skills](https://github.com/anthropics/skills)** — Document manipulation (DOCX, PDF, PPTX, XLSX), Brand Guidelines, Internal Communications
- **[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)** — React Best Practices, Web Design Guidelines
- **[openai/skills](https://github.com/openai/skills)** — Agent skills, Skill Creator, Concise Planning
- **[supabase/agent-skills](https://github.com/supabase/agent-skills)** — Postgres Best Practices
- **[microsoft/skills](https://github.com/microsoft/skills)** — Azure cloud services, Bot Framework, Cognitive Services, enterprise patterns across .NET, Python, TypeScript, Go, Rust, and Java
- **[google-gemini/gemini-skills](https://github.com/google-gemini/gemini-skills)** — Gemini API and SDK interactions
- **[remotion-dev/skills](https://github.com/remotion-dev/skills)** — Video creation in React, 28 modular rules

Having these official vendor skills consolidated in a single installable package means a developer can access Anthropic's official document manipulation skills and Microsoft's Azure patterns through the same `npx` command as community security testing skills.

## 868 Skills Across Nine Domains

| Category | Focus | Example Skills |
|----------|-------|---------------|
| Architecture | System design, ADRs, C4, scalable patterns | `architecture`, `c4-context`, `senior-architect` |
| Business | Growth, CRO, SEO, go-to-market | `copywriting`, `pricing-strategy`, `seo-audit` |
| Data & AI | LLM apps, RAG, agents, observability | `rag-engineer`, `prompt-engineer`, `langgraph` |
| Development | Language mastery, framework patterns | `typescript-expert`, `python-patterns`, `react-patterns` |
| General | Planning, docs, product ops, writing | `brainstorming`, `doc-coauthoring`, `writing-plans` |
| Infrastructure | DevOps, cloud, serverless, CI/CD | `docker-expert`, `aws-serverless`, `vercel-deployment` |
| Security | AppSec, pentesting, vulnerability analysis | `api-security-best-practices`, `sql-injection-testing`, `vulnerability-scanner` |
| Testing | TDD, test design, QA workflows | `test-driven-development`, `testing-patterns`, `test-fixing` |
| Workflow | Automation, orchestration, agents | `workflow-automation`, `inngest`, `trigger-dev` |

## v5.4.0: Bundles vs. Workflows

The "Workflows Edition" designation in v5.4.0 reflects a distinction between two organizational layers:

**Bundles** are curated skill lists organized by developer role—Web Wizard, Security Engineer, OSS Maintainer, and so on. They help narrow down which skills to use from a catalog of 868+.

**Workflows** are step-by-step execution sequences for concrete goals. Current workflows include:
- Ship a SaaS MVP
- Security Audit for a Web App
- Build an AI Agent System
- QA and Browser Automation (with optional `@go-playwright` for Go stacks)

The distinction matters for agents: bundles answer "which skills should I have?" while workflows answer "in what order should I execute them?"

## The SKILL.md Standard

All skills follow a universal `SKILL.md` format with required frontmatter (`name` and `description`). The repository ships a validation script (`python3 scripts/validate_skills.py`) that contributors must run before submitting PRs.

This standardization is what enables cross-tool portability. The same markdown file that Claude Code reads from `.claude/skills/` can be placed in `.gemini/skills/` for Gemini CLI or `.cursor/skills/` for Cursor without modification. The format abstraction decouples skill content from tool-specific invocation conventions.

## Community Scale

With 40+ named contributors and skills sourced from over 20 community repositories, this is well past the single-maintainer stage:

- **rmyndharis/antigravity-skills**: 300+ enterprise skills and the catalog generation logic that structures the entire repository
- **zebbern/claude-code-guide**: ~60 security-focused skills
- **VoltAgent/awesome-agent-skills**: 61 high-quality skills including official team contributions from Sentry, Trail of Bits, Expo, and Hugging Face
- **affaan-m/everything-claude-code**: Skills from an Anthropic hackathon winner

## Relevance to Today's Gemini CLI Announcement

This repository's name is directly connected to Google DeepMind's **Antigravity IDE**, announced yesterday alongside Gemini CLI. The repository explicitly supports `Antigravity IDE` as one of its eight target platforms, placing Google's new agent development environment on equal footing with Claude Code.

This matters structurally: if a developer builds a skill library in Antigravity Awesome Skills, that library works whether they're using Claude Code, Gemini CLI, or Antigravity IDE. In a market where Anthropic's OAuth ban is pushing some users toward OpenAI's Codex (as reported yesterday), having a portable skill layer that isn't tool-locked has direct practical value.

---

**Quick start:**
```bash
# Install for all tools (universal path)
npx antigravity-awesome-skills

# Tool-specific installation
npx antigravity-awesome-skills --claude
npx antigravity-awesome-skills --gemini
npx antigravity-awesome-skills --cursor

# Update existing installation
git -C ~/.agent/skills pull
```

**GitHub**: <https://github.com/sickn33/antigravity-awesome-skills> (MIT License)
