---
title: "Claude Code Remote Control: Access Your Local Coding Sessions from Any Device"
description: "Anthropic has opened up the 'Remote Control' feature in Claude Code v2.1.51, allowing developers to connect to local terminal sessions from claude.ai/code or mobile apps — without moving code to the cloud."
publishedAt: "2026-02-25T12:00:00+09:00"
author: "Flow"
category: "AI Development Tools"
tags: ["Claude Code", "Anthropic", "Remote Control", "CLI", "Mobile Development"]
featured: false
lang: "en"
seo:
  keywords: "Claude Code, Remote Control, Anthropic, remote access, claude.ai/code, mobile development"
---

# Claude Code Remote Control: Access Your Local Coding Sessions from Any Device

Anthropic has rolled out `claude remote-control` as a generally available subcommand in Claude Code v2.1.51, released on February 24, 2026. The feature lets developers connect to a running Claude Code terminal session from claude.ai/code or the Claude iOS/Android apps. It is currently available as a research preview for Pro and Max plan subscribers; Team and Enterprise plans are not yet supported.

The release note reads: "Added claude remote-control subcommand for external builds, enabling local environment serving for all users."

## How It Works: Local Execution, Remote Interface

The key architectural decision behind Remote Control is that Claude Code continues to run on the local machine. There is no migration of the session to cloud infrastructure.

Here is what that means in practice:

- The local file system, MCP servers, tools, and project configuration remain fully accessible
- Conversations sync in real time across all connected devices
- If the laptop sleeps or the network drops, the session automatically reconnects upon recovery
- Communication flows exclusively as outbound HTTPS connections from the local Claude Code session to the Anthropic API — no inbound ports are opened
- All traffic is encrypted with TLS using short-lived credentials

## Getting Started

**Start a new remote-enabled session:**

```bash
claude remote-control
```

This prints a session URL and QR code to the terminal.

**Enable remote access on an existing session:**

Run `/remote-control` (or `/rc`) within a Claude Code session.

**Connect from another device:**

Use the session URL, scan the QR code, or select the session from the claude.ai/code session list.

**Enable by default for all sessions:**

In `/config`, set "Enable Remote Control for all sessions" to true.

**Options:**

- `--verbose`: Enable detailed logging
- `--sandbox` / `--no-sandbox`: Toggle file system and network isolation

## Remote Control vs. Claude Code on the Web

Anthropic offers both Remote Control and "Claude Code on the web," but the two features differ architecturally:

- **Remote Control** runs on the local machine. Local MCP servers, tools, and project settings are available.
- **Claude Code on the web** runs on Anthropic's cloud infrastructure. No local setup is required.

## Current Limitations

- Only one remote connection per session
- Closing the terminal ends the session
- Requires a Pro or Max plan (API key authentication is not supported)

## Bug Fix in v2.1.53

The v2.1.53 release on February 25 addressed an issue where stale sessions persisted after a graceful shutdown. The fix parallelizes teardown network calls, improving the reliability of session cleanup.

## Release Timeline

- **v2.1.50 (Feb 20)**: Added WorktreeCreate/WorktreeRemove hook events and `isolation: worktree` support
- **v2.1.51 (Feb 24)**: Added `claude remote-control` subcommand for all users
- **v2.1.53 (Feb 25)**: Fixed graceful shutdown for Remote Control sessions

## A Different Philosophy from Cursor's Cloud Agents

The timing is notable. On the same day Claude Code v2.1.51 shipped, Cursor announced "Cloud Agents with Computer Use" — a feature that runs coding agents autonomously on cloud VMs.

The two approaches represent divergent design philosophies. Cursor pushes execution to the cloud, where agents operate independently on virtual machines. Claude Code keeps execution local and provides remote access to that environment.

From a security standpoint, the local-execution model means source code never leaves the developer's machine. For long-running agent tasks, the ability to monitor and interact from a mobile device adds practical value without introducing cloud-side data exposure.

## References

- [Claude Code Remote Control Documentation](https://code.claude.com/docs/en/remote-control)
- [Claude Code Changelog](https://code.claude.com/docs/en/changelog)

---

*Information in this article is current as of February 25, 2026. Please refer to the official documentation for the latest updates.*
