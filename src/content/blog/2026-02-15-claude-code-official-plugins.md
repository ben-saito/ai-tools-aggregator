---
title: "Claude Code's 28 Official Plugins Revealed - Undocumented Feature Extensions"
description: "Reddit user discovers 28 official Claude Code plugins, most undocumented. Includes TypeScript LSP, security scanning, context7 documentation search, and Playwright automation."
publishedAt: "2026-02-15T23:45:00+09:00"
author: "AI Tools Hub"
category: "AI Development"
tags: ["Claude Code", "Plugins", "Development Tools", "TypeScript", "Security"]
featured: true
lang: "en"
seo:
  keywords: "Claude Code, plugins, TypeScript LSP, security scanning, Playwright, developer tools, AI coding"
---

A Reddit ClaudeAI community member has revealed that Claude Code contains 28 official plugins, many of which are poorly documented. The user verified all plugins and published a practical evaluation of their utility.

## Plugin Location

Official plugins are located in the following directory:
```
~/.claude/plugins/marketplaces/claude-plugins-official/plugins/
```

Each plugin exists as a folder with its own configuration file and can be installed by referencing this directory directly.

## High-Impact Technical Plugins

The verifier particularly recommends the following plugins:

**typescript-lsp**
Adds TypeScript language server integration. Enables Claude to perform actual type checking, jump to definitions, and error diagnostics instead of guessing. Considered the highest-impact plugin for TypeScript developers.

**security-guidance**
Scans for common vulnerabilities. Detects hardcoded secrets, authentication bypass patterns, and injection risks. Operates passively while Claude writes code.

**context7**
Documentation search functionality. Enables Claude to retrieve latest library documentation instead of relying on training data. Useful when working with rapidly evolving frameworks.

**playwright**
Browser automation and testing. Enables Claude to launch browsers, navigate pages, take screenshots, fill forms, and run end-to-end tests.

## Workflow Improvement Plugins

Non-technical but useful plugins include:

**claude-md-management**
Automatic project file maintenance. Maintains structure, updates sections, and prevents chaos over time.

**explanatory-output-style**
Changes Claude's output style to be educational. Explains "why" in addition to "what." Useful for learning and documentation.

**code-review**
Structured code review with quality scoring. Provides Claude with a framework beyond "looks good."

## Actual Impact

The verifier estimates "Claude Code operates at about 60% of its capability in default configuration." These plugins are not mere decoration but substantial feature extensions:

- typescript-lsp provides actual type awareness
- security-guidance passively detects vulnerabilities
- context7 operates with current documentation (not training data)

The verifier reports a case where security-guidance detected an authentication bypass bug written by Claude.

## Community Response

Many users agreed with the verifier's comment: "I use Claude Code daily and didn't know about these plugins until I stumbled upon them." The insufficient documentation of official plugins has become a topic of discussion in the community.

Other technical plugins include pr-review-toolkit (PR workflow specific), commit-commands (commit message standardization), and code-simplifier (cyclomatic complexity measurement and simplification suggestions).

The complete list and details can be verified in the local plugin directory.

**Source**: Reddit r/ClaudeAI <https://www.reddit.com/r/ClaudeAI/comments/1r4tk3u/>
