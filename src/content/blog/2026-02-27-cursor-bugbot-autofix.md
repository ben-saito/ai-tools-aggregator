---
title: "Cursor Adds Bugbot Autofix — Automatically Fixing PR Issues"
description: "Cursor's Bugbot now includes Autofix, using cloud agents to automatically fix issues detected in pull requests. Over 35% of Autofix changes are merged into base PRs."
publishedAt: "2026-02-27T03:00:00+09:00"
author: "AI Tools Hub"
category: "AI Development"
tags: ["Cursor", "Bugbot", "Code Review", "Developer Tools", "Autofix"]
featured: true
lang: "en"
seo:
  keywords: "Cursor, Bugbot, Autofix, pull request, automatic fix, code review, AI agent"
---

Cursor announced on February 26 the addition of Autofix to Bugbot, its AI-powered code review tool. The feature uses cloud agents running in isolated VMs to automatically generate fixes for issues detected in pull requests.

## How Autofix Works

When Bugbot identifies problems in a pull request, Autofix spins up cloud agents on dedicated machines to test changes and propose fixes directly on the PR. According to Cursor, over 35% of Bugbot Autofix changes are currently being merged into base PRs — a notable adoption rate that suggests the fixes are genuinely useful rather than noise.

Bugbot posts a comment on the original PR with a preview of the proposed changes. Developers can merge the fix using a provided `@cursor` command. For teams that want a more hands-off workflow, Autofix can be configured to push changes directly to the branch without requiring manual approval.

## Getting Started

Autofix is available now through the [Bugbot dashboard](https://cursor.com/dashboard?tab=bugbot). More details are available in Cursor's [official announcement](https://cursor.com/blog/bugbot-autofix).

## The Bigger Picture

This release continues Cursor's push toward end-to-end AI automation of the development workflow. Bugbot already handled detection; now it handles remediation too. Combined with the recently launched cloud agents with computer use and CLI improvements, Cursor is steadily building out an ecosystem where AI agents don't just flag problems — they solve them.
