---
title: "OpenClaw v2026.2.15 Released - Discord Components v2, Nested Subagents, and Major Security Overhaul"
description: "OpenClaw v2026.2.15 introduces Discord Components v2 interactive UI, nested sub-agent capabilities, SHA-256 migration, and over 30 security fixes addressing injection attacks, secret leakage, and sandbox hardening."
publishedAt: "2026-02-17"
updatedAt: "2026-02-17"
category: release
tags:
  - openclaw
  - release-notes
  - coding-agent
  - security
featured: true
author: AI Tools Aggregator
lang: en
---

The OpenClaw project released version 2026.2.15 on February 17, featuring Discord Components v2 support, nested sub-agent capabilities, and over 30 security fixes addressing injection attacks, secret leakage, and sandbox hardening.

## Major New Features

### Discord Components v2 Support

Rich interactive agent prompts are now available for Discord through native support for:

- **Buttons**: Interactive button elements
- **Selects**: Dropdown selection menus
- **Modals**: Dialog forms for user input
- **Attachment-backed file blocks**: File handling through Discord attachments

This enhancement enables more intuitive agent interactions directly within Discord. Implementation by [@thewilloftheshadow](https://github.com/thewilloftheshadow).

### Nested Sub-Agents (Sub-Sub-Agents)

Sub-agents can now spawn their own child agents with configurable depth limits. Key parameters:

- `agents.defaults.subagents.maxSpawnDepth: 2` - Maximum nesting depth for sub-agents
- `maxChildrenPerAgent: 5` (default) - Limit per agent to prevent runaway spawning
- Depth-aware tool policy enforcement
- Proper announce chain routing across nested hierarchies

Implementation by [@tyler6204](https://github.com/tyler6204) ([#14447](https://github.com/openclaw/openclaw/pull/14447)).

### Plugin Hook Expansion

Plugin developers can now observe LLM interaction details through newly exposed hook payloads:

- `llm_input` - Access to prompt/input context before model invocation
- `llm_output` - Model output and usage statistics

This enables extensions to implement custom logging, usage tracking, and prompt engineering analysis ([#16724](https://github.com/openclaw/openclaw/pull/16724)). Implementation by [@SecondThread](https://github.com/SecondThread).

### Cron and Gateway Enhancements

- **Finished-run webhook delivery toggle** (`notify`) for selective webhook notifications
- **Dedicated webhook authentication token** support (`cron.webhookToken`) for outbound cron webhook posts

Implementation by [@advaitpaliwal](https://github.com/advaitpaliwal) ([#14535](https://github.com/openclaw/openclaw/pull/14535)).

## Security Overhaul (30+ Fixes)

This release implements a comprehensive security audit addressing multiple attack vectors.

### Cryptographic Hardening

**SHA-1 to SHA-256 Migration**: Deprecated SHA-1 sandbox configuration hashing replaced with SHA-256 for deterministic sandbox cache identity and recreation checks. Implementation by [@kexinoh](https://github.com/kexinoh).

### Secret Leakage Prevention

- **Telegram Bot Token Redaction**: Automatically redacted from error messages and uncaught stack traces
- **Gateway Session Details Redaction**: Sensitive session/path details removed from status responses for non-admin clients ([#8590](https://github.com/openclaw/openclaw/issues/8590))

Implementation by [@aether-ai-agent](https://github.com/aether-ai-agent) and [@fr33d3m0n](https://github.com/fr33d3m0n).

### Sandbox Hardening

Dangerous Docker sandbox configurations now blocked to prevent container escape via config injection:

- Bind mounts
- Host networking
- Unconfined seccomp/apparmor profiles

Implementation by [@aether-ai-agent](https://github.com/aether-ai-agent).

### Injection Attack Prevention

- **Skills Download Restrictions**: Installer `targetDir` restricted to per-skill tools directory, preventing arbitrary file writes ([@Adam55A-code](https://github.com/Adam55A-code))
- **Workspace Path Sanitization**: Unicode control/format characters stripped before embedding into LLM prompts, preventing instruction injection via malicious directory names ([@aether-ai-agent](https://github.com/aether-ai-agent))
- **Control UI XSS Prevention**: Stored XSS via assistant name/avatar prevented through inline script injection removal and `script-src 'self'` enforcement ([@Adam55A-code](https://github.com/Adam55A-code))
- **Gateway/Chat Input Hardening**: `chat.send` inbound message handling now rejects null bytes, strips unsafe control characters, and normalizes Unicode to NFC before dispatch ([#8593](https://github.com/openclaw/openclaw/issues/8593), [@fr33d3m0n](https://github.com/fr33d3m0n))

### Web Fetch Memory Protection

Downloaded response body size capped before HTML parsing to prevent memory exhaustion from oversized or deeply nested pages. Implementation by [@xuemian168](https://github.com/xuemian168).

### Git Security

Development tooling Git pre-commit hook hardened against option injection from malicious filenames (e.g., `--force`), preventing accidental staging of ignored files. Implementation by [@mrthankyou](https://github.com/mrthankyou).

## Platform-Specific Improvements

### Telegram

- **Voice Message Processing**: Successful preflight voice transcript replaces inbound placeholder in message body context ([#16789](https://github.com/openclaw/openclaw/pull/16789))
- **Media Fetch Retry Logic**: Inbound media `getFile` calls retried (3 attempts with backoff), gracefully falling back to placeholder-only processing on failure ([#16154](https://github.com/openclaw/openclaw/pull/16154))
- **Streaming Preview Deduplication**: Streaming preview replies finalized in place instead of sending duplicate final messages ([#17218](https://github.com/openclaw/openclaw/pull/17218))
- **DM Send Fix**: `message_thread_id` omitted for DM sends/draft previews, preventing 400 Bad Request errors ([#10942](https://github.com/openclaw/openclaw/pull/10942))

### Discord

- **Session Continuity Preservation**: Runtime payloads omitting `message.channelId` now fall back to event/raw `channel_id` values for routing ([#17622](https://github.com/openclaw/openclaw/pull/17622))
- **Slash Command Deduplication**: Native skill commands deduplicated by skill name in multi-agent setups, preventing duplicated slash commands with `_2` suffixes ([#17365](https://github.com/openclaw/openclaw/pull/17365))
- **Role Authorization**: Role allowlist matching uses raw role IDs for message routing authorization

### LINE

Webhook startup now fails closed when channel token or channel secret is missing, treating LINE accounts as configured only when both are present ([#17587](https://github.com/openclaw/openclaw/issues/17587), [@davidahmann](https://github.com/davidahmann)).

## Agent Functionality Improvements

### Context Window Management

- `lookupContextTokens()` derived from auth-available model metadata, keeping the smallest discovered context window for duplicate model IDs to prevent cross-provider cache collisions ([#17586](https://github.com/openclaw/openclaw/issues/17586))
- Configured model `contextWindow` overrides applied after provider discovery so `lookupContextTokens()` honors operator config values ([#17404](https://github.com/openclaw/openclaw/issues/17404))

### OpenAI Responses/Codex

Direct OpenAI Responses/Codex runs now force `store=true` to preserve multi-turn server-side conversation state, while leaving proxy/non-OpenAI endpoints unchanged ([#16803](https://github.com/openclaw/openclaw/issues/16803)).

### Memory and Timezone Handling

`memory/YYYY-MM-DD.md` placeholders resolved with timezone-aware runtime dates, with `Current time:` line appended to memory-flush turns. Prevents wrong-year memory filenames without making the system prompt time-variant ([#17603](https://github.com/openclaw/openclaw/issues/17603), [#17633](https://github.com/openclaw/openclaw/issues/17633)).

### Group Chat Context

Group chat context (name, participants, reply guidance) now injected into the system prompt on every turn, not just the first. Prevents the model from losing awareness of which group it's in and incorrectly using the message tool to send to the same group ([#14447](https://github.com/openclaw/openclaw/pull/14447)).

### Browser Tool Error Handling

When browser control service is unavailable, explicit non-retry guidance returned instead of "try again", preventing models from looping on repeated browser tool calls until timeout ([#17673](https://github.com/openclaw/openclaw/pull/17673)).

## TUI (Terminal UI) Improvements

### ANSI Code Handling

Searchable-select filtering and highlight rendering made ANSI-aware so queries ignore hidden escape codes and no longer corrupt ANSI styling sequences during match highlighting ([#4519](https://github.com/openclaw/openclaw/issues/4519)).

### Token Preservation

Copy-sensitive long tokens (URLs/paths/file-like identifiers) preserved during wrapping and overflow sanitization so wrapped output no longer inserts spaces that corrupt copy/paste values ([#17515](https://github.com/openclaw/openclaw/issues/17515), [#17466](https://github.com/openclaw/openclaw/issues/17466), [#17505](https://github.com/openclaw/openclaw/issues/17505)).

### Windows Git Bash Support

Rapid single-line submit bursts coalesced into one multiline message in Git Bash as a fallback when bracketed paste is unavailable, preventing pasted multiline text from being split into multiple sends ([#4986](https://github.com/openclaw/openclaw/issues/4986)).

## Additional Fixes

- **Memory/FTS**: `buildFtsQuery` made Unicode-aware so non-ASCII queries (including CJK) produce keyword tokens instead of falling back to vector-only search ([#17672](https://github.com/openclaw/openclaw/issues/17672))
- **Web UI/Agents**: BOOTSTRAP.md hidden in the Agents Files list after onboarding completion, avoiding confusing missing-file warnings ([#17491](https://github.com/openclaw/openclaw/pull/17491))
- **Subagents**: Child-run-based deterministic announce idempotency keys used across direct and queued delivery paths, preventing duplicate announce retries without collapsing distinct same-millisecond announces ([#17150](https://github.com/openclaw/openclaw/pull/17150))

## Contributors

Over 30 contributors participated in this release. Key contributors include:

- [@thewilloftheshadow](https://github.com/thewilloftheshadow) - Discord Components v2
- [@tyler6204](https://github.com/tyler6204) - Nested sub-agents
- [@SecondThread](https://github.com/SecondThread) - Plugin hooks
- [@aether-ai-agent](https://github.com/aether-ai-agent) - Multiple security fixes
- [@Adam55A-code](https://github.com/Adam55A-code) - XSS prevention and file write protection
- [@vignesh07](https://github.com/vignesh07) - Numerous agent functionality improvements

## Availability

OpenClaw v2026.2.15 is available from the GitHub releases page.

**Release Page**: https://github.com/openclaw/openclaw/releases/tag/v2026.2.15

---

**Source**: OpenClaw GitHub Repository  
**Release Date**: February 17, 2026  
**Audience**: All OpenClaw users
