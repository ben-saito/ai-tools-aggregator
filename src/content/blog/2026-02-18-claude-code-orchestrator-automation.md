---
title: "From Pair Programming to Full Automation: Claude Code Orchestrator Pattern Dramatically Boosts Development Speed"
description: "Henry Inc. engineer implements advanced Claude Code Skills usage. Orchestrator-pattern Skills with SubAgents and Review Agents fully automate info gathering → design → implementation → PR creation. Real-world case study of freeing time for domain knowledge learning."
publishedAt: "2026-02-18"
updatedAt: "2026-02-18"
category: case-study
tags:
  - claude-code
  - automation
  - skills
  - orchestrator
  - case-study
featured: true
author: AI Tools Aggregator
lang: en
---

Most engineers using AI coding assistants remain in "pair programming" mode: humans stay beside the AI, reviewing generated code and continuously providing next instructions.

However, software engineer warabi at Henry Inc. achieved a shift to **full automation** using Claude Code's Skills feature. This case study reveals next-generation AI coding tool usage patterns.

## Why Move Beyond Pair Programming?

Henry Inc. develops products for the healthcare industry. warabi's team needs to understand complex domain-specific medical knowledge, but implementation work also demands time. Time allocation was the challenge.

**Problems with traditional Claude Code usage (pair programming mode)**:
- Must review AI code changes in real-time
- Must read generated code each time to continue conversation
- **Humans can't step away from the AI**

To solve this, warabi sought to reduce implementation time and increase domain knowledge learning time.

## Breaking Down Development Flow and Identifying Automatable Areas

warabi first decomposed the typical workflow into **3 phases, 7 steps**.

The analysis revealed that beyond the "planning" and "implementation" steps previously done via pair programming, **4 total steps were fully automatable**, including "information gathering" and "PR creation."

**Automation target steps**:
1. Information gathering (related code, documentation)
2. Design (architecture, implementation strategy)
3. Implementation (code generation)
4. PR creation (pull request creation)

## Strategic Skills Usage - Why CLAUDE.md Isn't Enough

Claude Code has CLAUDE.md (project configuration file), but writing the entire workflow there **compresses the context window**.

CLAUDE.md loads at every conversation start, so longer procedures increase the probability of incorrect instruction execution.

**Skills feature advantages**:
- Define workflows like procedure manuals
- **Load only when needed** (context savings)
- Explicitly specify what to reference, what decisions to make, and what output to expect at each step

**Division of roles between CLAUDE.md and Skills**:
- **CLAUDE.md**: Project prerequisites (always loaded)
- **Skills**: Work procedures (loaded only when needed)

This separation is key to transitioning from pair programming to automation.

## Orchestrator-Pattern Skill Design - Independent Step Execution via SubAgents

Cramming all steps into one Skill causes context bloat again. warabi adopted the **Orchestrator pattern**.

**Architecture**:
- **Parent Skill (Orchestrator)**: Manages call sequence for each step
- **Child Skills (SubAgents)**: Execute each step in independent context

**Importance of SubAgent feature**:
Mechanism to run child agents in context independent from parent agent. Each step executes as a SubAgent, so **context resets per step**.

**Benefits**:
1. Each Skill can execute its assigned step's procedures in small context
2. Easy to modify or replace individual steps
3. Avoids context compression

**Context management technique**:
Info-gathering and design agents **save results as files** and simply tell the Orchestrator "processing complete." The Orchestrator doesn't need to load entire investigation results, preventing context bloat.

## Review Agent Feedback Loop - Quality Assurance Mechanism

warabi further added a **Review Agent** to raise quality.

**Mechanism**:
1. Work agent generates output
2. Review Agent reviews output
3. If issues exist, reports to Orchestrator
4. Orchestrator requests fixes from work agent
5. Loop within limit count

This replicates the human development process of "implement → code review → fix" between agents.

**Effect**:
warabi reports "quite a few PRs can be merged without fixes."

## Final Workflow

**dev Skill (Orchestrator) execution flow**:

1. User specifies task ID
2. Orchestrator confirms task content
3. **Final human confirmation** (only human intervention here)
4. Fully automated thereafter:
   - Info gathering Agent → Review Agent
   - Design Agent → Review Agent
   - Implementation Agent → Review Agent
   - PR creation Agent → Review Agent
5. Loop until passing review at each step

**Human role**:
- Final task content confirmation (at start)
- PR review (after completion)

During implementation, **VS Code can be backgrounded while spending time on other task research**.

## Pair Programming vs Full Automation - Comparison Results

warabi's own comparison:

| Aspect | Before (Pair Programming) | After (Full Auto) | Assessment |
|--------|--------------------------|-------------------|------------|
| **Time freed** | ☓ | ◎ | Can background after final confirmation. Many PRs merge without fixes |
| **Development speed** | ◯ | ◎ | Work + Review Agent combo maintains quality |
| **Implementation understanding** | ◎ | ◯ | Pair programming allowed detailed questions. But PR review compensates for understanding |

**Overall evaluation**:
- Successfully secured domain knowledge learning time
- Development speed also improved
- Implementation understanding slightly decreased but compensable through PR review

## Evolution Stages of AI Coding Tool Usage

This case reveals **3 stages** of AI coding tool usage.

### Stage 1: Completion-based
- Code completion, partial generation
- Humans maintain full control

### Stage 2: Pair Programming
- Conversational development with AI
- Real-time feedback
- Humans must stay beside AI

### Stage 3: Automation
- Fully automatic after task specification
- Orchestrator + SubAgent + Review Agent combination
- Human intervention only at start and completion

**Current mainstream**: Stage 2 (pair programming)
**This case study**: Achievement of Stage 3 (automation)

## Highly Versatile Approach - Applicable Beyond Implementation

warabi notes "Skills usage isn't limited to implementation work; it can apply to various daily tasks."

**Applicable domains**:
- Document generation (research → structure → writing → review)
- Data analysis (data retrieval → analysis → visualization → reporting)
- Test automation (test case design → implementation → execution → reporting)

**Key concepts**:
1. Break workflow into clear steps
2. Define each step as independent Skill
3. Integrate with Orchestrator
4. Ensure quality via Review Agent

## Synergy With Claude Sonnet 4.6

Claude Sonnet 4.6, released February 17, 2026, achieved these improvements:

- "Reduced over-engineering"
- "Improved instruction following"
- "Better consistency in multi-step tasks"

These improvements demonstrate power precisely in Orchestrator-pattern Skill step execution. The combination of model performance gains and strategic Skills usage enables true automation.

## Summary - Next-Generation AI Coding Tool Usage

warabi's case demonstrates that **AI coding tool value can increase 10x or 100x depending on how you use them**.

**Success factors**:
1. Clear workflow decomposition
2. Strategic Skills usage
3. Context management via SubAgents
4. Quality assurance via Review Agents
5. Integration through Orchestrator

**Future implications**:
As Spotify's top engineers stated they "haven't written a line of code since December," engineer roles are shifting from "writing code" to "designing AI."

warabi's practice anticipates this future.

---

**References**:
- Original article: [Fully Automating Development with Claude Code - Orchestrator-Type Skill Design and Practice](https://dev.henry.jp/entry/claude-code-orchestrator)
- Claude Code Official: https://code.claude.com/
- Skills Documentation: https://code.claude.com/docs/en/skills

**Related Articles**:
- Claude Sonnet 4.6 Released - Opus-Grade Performance at Sonnet Pricing
- 29 Real-World OpenClaw Use Cases - Community-Selected Examples
- Spotify AI Fatigue Issue - Reality of Top Developers No Longer Writing Code
