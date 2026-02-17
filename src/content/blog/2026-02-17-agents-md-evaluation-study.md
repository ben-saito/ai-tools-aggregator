---
title: "AGENTS.md Files Reduce Coding Agent Performance, arXiv Study Reveals"
description: "SWE-bench experiments show that repository context files like AGENTS.md decrease task success rates and increase inference costs by over 20%, challenging widely recommended practices by agent developers."
publishedAt: "2026-02-17T18:00:00+09:00"
category: "AI Development"
tags: ["AGENTS.md", "coding agents", "SWE-bench", "arXiv", "research", "performance optimization"]
featured: true
author: "AI Tools Aggregator"
lang: "en"
image: ""
seo:
  keywords: "AGENTS.md, coding agents, SWE-bench, arXiv, repository context, AI performance"
---

A groundbreaking arXiv paper published on February 12, 2026, titled "Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?" reveals that AGENTS.md and similar repository context files—widely recommended by coding agent developers—may actually harm agent performance.

## Research Background

Many coding agent developers (Claude Code, Cursor, GitHub Copilot, etc.) strongly encourage placing AGENTS.md files in repositories. These files are intended to provide context information to help agents understand repositories and execute appropriate coding tasks.

However, no rigorous investigation has previously examined whether this practice is actually effective for real-world tasks.

## Key Findings

Researchers evaluated AGENTS.md effectiveness across multiple coding agents and LLMs in two complementary settings:

1. **SWE-bench Tasks**: Established tasks from popular repositories with LLM-generated context files following agent-developer recommendations
2. **Real Repositories**: A novel collection of issues from repositories containing developer-committed context files

### 1. Reduced Task Success Rates

Context files like AGENTS.md **tend to reduce task success rates compared to providing no repository context at all**. This finding directly contradicts the conventional assumption that context files are beneficial.

### 2. Significant Inference Cost Increase

Using context files **increases inference costs by over 20%**, driven by increased token usage.

### 3. Behavioral Analysis

The presence of context files changes agent behavior:

- **LLM-generated context files**: Encourage more thorough testing and file traversal
- **Developer-provided context files**: Similarly promote broader exploration
- **Instruction compliance**: Agents strongly tend to respect context file instructions

### 4. Root Cause Identification

The research team concluded:

**Unnecessary requirements from context files make tasks harder.**

## Practical Recommendations

Based on the findings, the paper offers clear guidance:

**Human-written context files should describe only minimal requirements.**

Specifically:

- **Avoid**:
  - Overly detailed guidelines
  - Comprehensive instructions attempting to cover all possible scenarios
  - General development principles not directly related to the task
  
- **Include**:
  - Minimal information directly necessary for the task
  - Repository-specific critical constraints
  - Important context that agents cannot discover independently

## Industry Impact

These findings have significant implications for development teams rapidly adopting coding agents.

### Impact on Agent Developers

Teams behind Claude Code, Cursor, GitHub Copilot, and similar tools may need to revise their AGENTS.md recommendations. The conventional wisdom that "more detail is better" should be reconsidered.

### Impact on Developers

Developers who have already implemented AGENTS.md should consider:

1. Reviewing existing AGENTS.md files and removing unnecessary requirements
2. Focusing only on truly essential minimal information
3. Measuring performance metrics before and after changes

### Cost Reduction Potential

The potential to reduce inference costs by over 20% represents significant economic impact for organizations using agents at scale. With API pricing rising, this optimization cannot be ignored.

## Research Limitations and Future Directions

The paper identifies several areas for future research:

- Validation on larger-scale repositories
- Effect measurement across different task types
- Determining optimal context file structure
- Comparing optimal context provision methods per agent

## Conclusion

Well-intentioned AGENTS.md files may actually reduce agent performance and increase costs. This research demonstrates the importance of empirically validating practices considered "best practices."

Coding agent users can potentially achieve both performance improvements and cost reductions by revisiting their AGENTS.md files in light of these findings.

**Paper Link**: [arXiv:2602.11988](https://arxiv.org/abs/2602.11988)  
**Authors**: Thibaud Gloaguen et al.  
**Publication Date**: February 12, 2026  
**Evaluation Environment**: SWE-bench, multiple coding agents and LLMs
