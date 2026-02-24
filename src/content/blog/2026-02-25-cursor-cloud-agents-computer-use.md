---
title: "Cursor's Cloud Agents Can Now Control Their Own Computers"
description: "Cursor's cloud agents gain the ability to interact with browsers and desktop applications inside isolated VMs, enabling autonomous testing, demos, and merge-ready pull requests."
publishedAt: "2026-02-25T09:00:00+09:00"
author: "AI Tools Hub"
category: "AI Development"
tags: ["Cursor", "AI Agents", "Computer Use", "Cloud Agents", "Development Tools"]
featured: true
lang: "en"
seo:
  keywords: "Cursor, cloud agents, computer use, VM, autonomous development, code generation, pull request automation"
---

Cursor announced on February 24, 2026 that its cloud agents can now operate their own virtual machines — complete with browsers, desktop applications, and full development environments. The result: agents that don't just write code, but build it, test it, and record video proof of their work before handing you a merge-ready pull request.

## Beyond Code Generation

The core limitation of coding agents has always been the gap between generating code and verifying that it actually works. Cursor's cloud agents close that gap by running inside isolated VMs where they can spin up dev servers, navigate web pages, interact with UI elements, and capture screenshots and videos as artifacts.

According to Cursor, more than 30% of merged PRs at the company are now produced by agents operating autonomously in cloud sandboxes — a figure that suggests this is no longer a proof-of-concept.

## Available Everywhere

Cloud agents can be triggered from the Cursor web app, desktop client, mobile, Slack, and GitHub. Each agent onboards itself onto your codebase automatically and runs in its own isolated environment, meaning you can launch multiple agents in parallel without them competing for local resources.

Developers can also connect to an agent's remote desktop to interact with the modified software directly, or make edits without checking out the branch locally.

## How Cursor Uses It Internally

Cursor shared several internal use cases that illustrate the capability:

**Feature development**: The team used cloud agents to build parts of the recently launched Cursor Marketplace plugin system. An agent implemented GitHub source links for plugin components, then verified the links by navigating to the Prisma plugin page and clicking through each component. It handled feature flag management, rebasing onto main, resolving merge conflicts, and squashing commits autonomously.

**Vulnerability reproduction**: A cloud agent was launched from Slack to triage a clipboard exfiltration vulnerability. The agent built an HTML exploit page, hosted it on a local server, loaded it in Cursor's in-app browser, and recorded the complete attack flow on video.

## Getting Started

To try cloud agents with computer use, visit [cursor.com/onboard](https://cursor.com/onboard). The agent will configure itself against your codebase and record a demo of its capabilities.

The addition of computer use to cloud agents represents a shift from "write code and hope it works" to "write code, verify it works, and prove it." For teams already using Cursor's agent features, the upgrade path is straightforward — and for everyone else, the 30% PR stat might be reason enough to pay attention.
