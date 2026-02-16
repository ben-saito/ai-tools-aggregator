---
title: "OpenClaw v2026.2.15 Released: Discord Components v2 and Nested Sub-Agents"
description: "OpenClaw releases v2026.2.15 one day after v2026.2.14, adding Discord interactive components, nested sub-agents with configurable depth, plugin hook enhancements, and continued security hardening."
publishedAt: "2026-02-16T21:00:00+09:00"
author: "AI Tools Hub"
category: "AI Development"
tags: ["OpenClaw", "Release", "Discord", "Sub-Agents", "Security"]
featured: true
lang: "en"
seo:
  keywords: "OpenClaw, release notes, Discord components, nested sub-agents, plugin hooks, security"
---

OpenClaw has released version 2026.2.15 just one day after v2026.2.14, demonstrating the project's rapid development pace. The release introduces Discord Components v2 for rich interactive prompts, nested sub-agent capabilities, plugin hook enhancements, and continues the security hardening effort from the previous release.

## Major New Features

**Discord Components v2: Rich Interactive UI**
Discord users can now interact with agents through native Discord UI components including buttons, selects, modals, and attachment-backed file blocks. This enables more sophisticated interaction patterns beyond plain text, with refined exec approval UX and embed passthrough support. Thanks to [@thewilloftheshadow](https://github.com/thewilloftheshadow) for implementing this extensive feature.

**Nested Sub-Agents (Sub-Sub-Agents)**
OpenClaw now supports sub-agents spawning their own children with configurable depth. Operators can set `agents.defaults.subagents.maxSpawnDepth: 2` to allow nested sub-agents. The implementation includes:
- `maxChildrenPerAgent` limit (default 5) to prevent runaway spawning
- Depth-aware tool policy
- Proper announce chain routing across multiple levels

This feature enables more complex hierarchical agent workflows. Thanks to [@tyler6204](https://github.com/tyler6204).

**Plugin Hook Enhancements**
Extensions can now observe prompt/input context and model output usage details through exposed `llm_input` and `llm_output` hook payloads. This provides deeper visibility into agent operations for monitoring and analytics purposes. Thanks to [@SecondThread](https://github.com/SecondThread).

**Per-Channel Ack Reaction Overrides**
Slack, Discord, and Telegram now support per-channel acknowledgment reaction overrides at account/channel level to accommodate platform-specific emoji formats. Thanks to [@zerone0x](https://github.com/zerone0x).

**Cron Webhook Enhancements**
New `notify` toggle for finished-run webhook delivery and dedicated webhook auth token support (`cron.webhookToken`) for outbound cron webhook posts. Thanks to [@advaitpaliwal](https://github.com/advaitpaliwal).

## Security Improvements

**Sandbox Configuration Hardening**
- Replaced deprecated SHA-1 with SHA-256 for sandbox configuration hashing, ensuring deterministic sandbox cache identity
- Blocked dangerous sandbox Docker configs (bind mounts, host networking, unconfined seccomp/apparmor) to prevent container escape via config injection
- Preserved array order in config hashing for correct container recreation triggers

**Logging and Secret Protection**
- Redacted Telegram bot tokens from error messages and stack traces to prevent accidental secret leakage
- Redacted sensitive session/path details from status responses for non-admin clients (full details remain available to `operator.admin`)

**Input Sanitization**
- Hardened chat.send inbound message handling by rejecting null bytes, stripping unsafe control characters, and normalizing Unicode to NFC
- Sanitized workspace paths before embedding into LLM prompts to prevent instruction injection via malicious directory names
- Prevented stored XSS via assistant name/avatar in Control UI

**Skills and Download Security**
- Restricted download installer targetDir to per-skill tools directory to prevent arbitrary file writes
- Capped downloaded response body size before HTML parsing to prevent memory exhaustion

## Group Chat and Context Improvements

**Persistent Group Chat Awareness**
The system now injects group chat context (name, participants, reply guidance) into the system prompt on every turn, not just the first. This prevents the model from losing awareness of which group it's in and incorrectly using the message tool to send to the same group. Thanks to [@tyler6204](https://github.com/tyler6204).

**Memory and Context Enhancements**
- Made `buildFtsQuery` Unicode-aware so non-ASCII queries (including CJK) produce keyword tokens instead of falling back to vector-only search
- Resolved `memory/YYYY-MM-DD.md` placeholders with timezone-aware runtime dates
- Applied configured model contextWindow overrides after provider discovery

## Channel-Specific Fixes

**Telegram:**
- Omitted `message_thread_id` for DM sends/draft previews to prevent "message thread not found" errors
- Replaced inbound placeholder with successful preflight voice transcript in message body context
- Implemented retry logic for inbound media getFile calls (3 attempts with backoff)
- Finalized streaming preview replies in place instead of sending duplicate final messages
- Disabled block streaming when `channels.telegram.streamMode` is off

**Discord:**
- Preserved channel session continuity when runtime payloads omit `message.channelId`
- Deduped native skill commands by skill name in multi-agent setups
- Ensured role allowlist matching uses raw role IDs

**LINE:**
- Failed closed on webhook startup when channel token or secret is missing
- Treated LINE accounts as configured only when both credentials are present

## Agent and Subagent Improvements

**Timeout Handling**
- Returns explicit timeout error reply when embedded runs timeout before producing payloads
- Prevents silent dropped turns during slow cache-refresh transitions

**Browser Control**
- When browser control service is unavailable, returns explicit non-retry guidance so models don't loop on repeated browser tool calls until timeout

**Subagent Stability**
- Used child-run-based deterministic announce idempotency keys to prevent duplicate announce retries
- Preserved `agents.defaults.model.fallbacks` when subagent sessions carry model overrides

**OpenAI Integration**
- Forced `store=true` for direct OpenAI Responses/Codex runs to preserve multi-turn server-side conversation state

## Web UI and TUI Improvements

**Web UI:**
- Hid BOOTSTRAP.md in Agents Files list after onboarding completion
- Fixed NO_REPLY placeholder display when messaging tool sends succeeded

**Memory/QMD:**
- Scoped managed collection names per agent to prevent cross-agent collection clobbering
- Precreated glob-backed collection directories before registration

## Community Contributions

This release includes contributions from over 30 community members, with notable contributions from:
- [@thewilloftheshadow](https://github.com/thewilloftheshadow) (Discord Components v2)
- [@tyler6204](https://github.com/tyler6204) (Nested sub-agents, group chat context)
- [@SecondThread](https://github.com/SecondThread) (Plugin hooks)
- [@aether-ai-agent](https://github.com/aether-ai-agent) (Multiple security improvements)
- [@fr33d3m0n](https://github.com/fr33d3m0n) (Security hardening)

## Rapid Release Cadence

The release of v2026.2.15 just one day after v2026.2.14 demonstrates OpenClaw's commitment to continuous improvement and responsiveness to community needs. The project maintains a balance between introducing new features (Discord Components v2, nested sub-agents) and ensuring platform stability through ongoing security hardening and bug fixes.

**Source**: [OpenClaw GitHub Releases](https://github.com/openclaw/openclaw/releases/tag/v2026.2.15)
