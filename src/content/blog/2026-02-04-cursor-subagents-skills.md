---
title: "Cursor Adds Subagents, Skills, and Image Generation - Major Agent Enhancements"
description: "Cursor implements subagents, agent skills, and image generation. Parallel execution, improved context management, and dynamic skill application enable handling of more complex, long-running tasks."
publishedAt: "2026-02-04T10:00:00+09:00"
author: "AI Tools Hub"
category: "AI Development"
tags: ["Cursor", "AI Agents", "Development Tools", "Image Generation", "Coding"]
featured: true
lang: "en"
seo:
  keywords: "Cursor, subagents, skills, image generation, AI coding, development tools"
---

On February 4th, Cursor announced significant enhancements to its agent capabilities. The addition of subagents, skills, and image generation improves the system's ability to handle increasingly complex, long-running tasks across codebases.

## Subagents

Subagents are independent agents specialized to handle discrete parts of a parent agent's task. They run in parallel, use their own context, and can be configured with custom prompts, tool access, and models.

This architecture results in faster overall execution, more focused context in the main conversation, and specialized expertise for each subtask. Cursor includes default subagents for researching codebases, running terminal commands, and executing parallel work streams, automatically improving conversation quality in both the editor and [Cursor CLI](https://cursor.com/docs/cli/overview).

Custom subagents can be defined as well. Learn more in the [official documentation](https://cursor.com/docs/context/subagents).

## Skills

Cursor now supports [Agent Skills](https://cursor.com/docs/context/skills) in the editor and [CLI](https://cursor.com/docs/cli/overview). Agents can discover and apply skills when domain-specific knowledge and workflows are relevant. Skills can also be invoked using the slash command menu.

Skills are defined in SKILL.md files, which can include custom commands, scripts, and instructions for specializing the agent's capabilities based on the task at hand.

Compared to always-on, declarative [rules](https://cursor.com/docs/context/rules), skills are better suited for [dynamic context discovery](https://cursor.com/blog/dynamic-context-discovery) and procedural "how-to" instructions. This gives agents more flexibility while keeping context focused.

## Image Generation

Users can now generate images directly from Cursor's agent. Describe the image in text or upload a reference to guide the underlying image generation model (Google Nano Banana Pro).

Images are returned as an inline preview and saved to the project's assets/ folder by default. This is useful for creating UI mockups, product assets, and visualizing architecture diagrams.

## Cursor Blame

On the Enterprise plan, [Cursor Blame](https://cursor.com/docs/integrations/cursor-blame) extends traditional git blame with AI attribution, showing exactly what was AI-generated versus human-written.

When reviewing code, each line links to a summary of the conversation that produced it, providing context and reasoning behind the change. Cursor Blame distinguishes between code from Tab completions, agent runs (broken down by model), and human edits, and tracks AI usage patterns across a team's codebase.

## Clarification Questions from Agents

The interactive Q&A tool used by agents in Plan and Debug mode now allows agents to ask clarifying questions in any conversation.

While waiting for a response, the agent can continue reading files, making edits, or running commands, then incorporate the answer as soon as it arrives. Custom subagents and skills can also use this tool by being instructed to "use the ask question tool."

## References

- [Cursor Changelog](https://cursor.com/changelog/2-4)
- [Subagents Official Documentation](https://cursor.com/docs/context/subagents)
- [Skills Official Documentation](https://cursor.com/docs/context/skills)
