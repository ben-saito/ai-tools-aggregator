---
title: "OpenClaw v2026.2.17: Claude Sonnet 4.6 Support, 1M Context, Slack/Telegram Enhancements"
description: "OpenClaw releases major update with Claude Sonnet 4.6 and 1M context window support, Slack native streaming, Telegram inline button styles, iOS Share Extension, and critical security fixes (OC-09) among 100+ changes."
publishedAt: "2026-02-18T12:00:00+09:00"
author: "AI Tools Hub"
category: "release"
lang: "en"
tags: ["OpenClaw", "Clawdbot", "Claude", "Sonnet-4-6", "Slack", "Telegram", "iOS", "Security"]
featured: true
---

OpenClaw released version 2026.2.17 on February 17, implementing over 100 changes including Claude Sonnet 4.6 support, 1M token context window beta, major Slack/Telegram improvements, iOS feature enhancements, and critical security fixes.

## Claude Sonnet 4.6 and 1M Context Support

### Sonnet 4.6 Integration

The release adds support for Claude Sonnet 4.6 via the `anthropic/claude-sonnet-4-6` alias, with forward-compatible fallback when upstream catalogs still only expose Sonnet 4.5.

### 1M Token Context Window (Beta)

Opus/Sonnet models now support opt-in 1M token context window. Setting `params.context1m: true` in model parameters maps to the `anthropic-beta: context-1m-2025-08-07` header.

This enables processing entire codebases, lengthy contracts, and dozens of research papers in a single request, significantly improving long-context reasoning performance.

## Messaging Platform Enhancements

### Slack Native Streaming

Implemented native single-message text streaming for Slack using `chat.startStream`/`appendStream`/`stopStream`. Reply threading aligns with `replyToMode` configuration, streaming is enabled by default, and falls back to normal delivery on failure.

### Telegram Inline Button Styles

Added inline button style support (`primary`/`success`/`danger`) across message tool schema, Telegram action parsing, send pipeline, and runtime prompt guidance.

User message reactions are now surfaced as system events, with notification scope configurable via `channels.telegram.reactionNotifications`.

## Subagent Functionality Expansion

### /subagents spawn Command

Added `/subagents spawn` for deterministic subagent activation from chat commands, improving control over subagent initialization.

### Enhanced Context Management

Subagents now preemptively guard accumulated tool-result context before model calls by truncating oversized outputs and compacting oldest tool-result messages to prevent context-window overflow crashes.

Explicit recovery guidance was added for `[compacted: tool output removed to free context]` and `[truncated: output exceeded context limit]` markers, instructing re-reading with smaller chunks instead of full-file `cat`.

## Comprehensive iOS Improvements

### Share Extension

Added iOS share extension that forwards shared URL/text/image content directly to `gateway agent.request`, with delivery-route fallback and optional receipt acknowledgements.

### Talk Mode Enhancements

- **Background Listening**: Toggle keeps Talk Mode active while backgrounded (off by default for battery safety)
- **Voice Directive Hint**: Toggle for Talk Mode prompts to disable ElevenLabs voice-switching instructions, saving tokens when not needed
- **Hardened Barge-in**: Disables interrupt-on-speech when output route is built-in speaker/receiver, reducing false interruptions from local TTS bleed-through

### Onboarding Improvements

Added QR-first onboarding wizard with setup-code deep link support, pairing/auth issue guidance, and device-pair QR generation improvements for Telegram/Web/TUI fallback flows.

## Cron/Automation Feature Expansion

### Webhook-Based Delivery

Separated per-job webhook delivery (`delivery.mode = "webhook"`) from announce delivery. Enforces valid HTTP(S) webhook URLs with temporary legacy `notify` + `cron.webhook` fallback for stored jobs.

### Schedule Stagger Control

Added deterministic default stagger for recurring top-of-hour cron schedules (including 6-field seconds cron). Auto-migrates existing jobs to persisted `schedule.staggerMs` and adds `openclaw cron add/edit --stagger` plus `--exact` overrides for per-job timing control.

### Usage Telemetry

Logs per-run model/provider usage telemetry in cron run logs/webhooks, with a local usage report script for aggregating token usage by job.

## Security Fixes

### OC-09 Credential Theft Path

Fixed OC-09 credential-theft path via environment-variable injection.

### Config $include Confinement

Confined `$include` resolution to the top-level config directory, hardened traversal/symlink checks with cross-platform-safe path containment, and added doctor hints for invalid escaped include paths.

### Session Transcript File Permissions

New session transcript JSONL files are created with user-only (`0o600`) permissions. Extended `openclaw security audit --fix` to remediate existing transcript file permissions.

## Tool Functionality Improvements

### read Tool Auto-Paging

The `read` tool now auto-pages across chunks when no explicit `limit` is provided, scaling per-call output budget from model `contextWindow` so larger contexts can read more before context guards activate.

### Web Search/Fetch URL Allowlists

Added URL allowlists for `web_search` and `web_fetch` to address security and compliance requirements.

### Browser Launch Customization

Added `extraArgs` config for custom Chrome launch arguments, enabling advanced browser control including headless mode and sandbox disabling.

## Discord/Mattermost/Feishu Improvements

### Discord

- Exposed native `/exec` command options (`host`/`security`/`ask`/`node`) for autocomplete and structured inputs
- Added support for reusable interactive components with `components.reusable=true`
- Implemented per-button `allowedUsers` allowlist to restrict button clicks

### Mattermost

Added emoji reaction actions plus reaction event notifications, including explicit boolean `remove` flag to avoid accidental removals.

### Feishu

Added Bitable `create-app`/`create-field` tools for automation workflows.

## Memory Search Enhancement

Added FTS (full-text search) fallback plus query expansion for memory search, improving semantic search accuracy and providing alternative search paths for low-relevance hits.

## Provider Support Expansion

### Z.AI

Enabled `tool_stream` by default for real-time tool call streaming, with opt-out via `params.tool_stream: false`.

### OpenAI Codex CLI

Added OpenAI Codex CLI auth provider integration.

### Ollama/Qwen

Handles Qwen 3 reasoning field format in Ollama responses.

## Docker/Infrastructure Improvements

Added optional `OPENCLAW_INSTALL_BROWSER` build arg to preinstall Chromium + Xvfb in the Docker image, avoiding runtime Playwright installs.

## Key Bug Fixes (Selected)

### Reply Threading Consistency

Maintains reply context sticky across streamed/split chunks and preserves `replyToId` on all chunk sends across shared and channel-specific delivery paths (including iMessage, BlueBubbles, Telegram, Discord, and Matrix), ensuring follow-up bubbles stay attached to the same referenced message.

### Telegram Streaming Stability

- Keeps draft-stream preview replies attached to the user message for `replyToMode: "all"` in groups and DMs
- Prevents streaming final replies from being overwritten by later final/error payloads
- Debounces first draft-stream preview update with 30-char threshold

### Cron Job Loop Fix

Prevents spin loops when cron jobs complete within the scheduled second by advancing the next run and enforcing a minimum refire gap.

### Gateway Auto-Update Improvements

Prevents restart crash loops after failed self-updates by restarting only on successful updates, stopping early on failed install/build steps, and running `openclaw doctor --fix` during updates to sanitize config.

## Migration and Compatibility

This release contains no breaking changes, but note the following:

1. **Session Transcript Files**: New files are created with `0o600` permissions
2. **Cron Schedules**: Existing jobs are automatically migrated to stagger settings
3. **Discord Commands**: Numeric IDs are converted to string IDs (doctor auto-repairs)

## Contributors

This release includes 100+ PRs from 60+ contributors. Key contributors:

- [@tyler6204](https://github.com/tyler6204) - Subagent, BlueBubbles, Reply Threading improvements
- [@mbelinky](https://github.com/mbelinky) - iOS (Share Extension, Talk Mode, Onboarding)
- [@obviyus](https://github.com/obviyus) - Telegram (streaming, button styles, threading)
- [@thewilloftheshadow](https://github.com/thewilloftheshadow) - Discord improvements
- [@natedenh](https://github.com/natedenh) - Slack streaming
- [@aether-ai-agent](https://github.com/aether-ai-agent) - Security fixes (OC-09, Config $include)

## Availability

OpenClaw v2026.2.17 is available from the official GitHub releases page:

- **GitHub**: https://github.com/openclaw/openclaw/releases/tag/v2026.2.17
- **Update Command**: `openclaw update`

**Recommendations for Existing Users:**
1. Back up configuration before updating
2. Run `openclaw doctor --fix` to validate configuration
3. Update promptly due to included security fixes (OC-09)

## Assessment

This release demonstrates OpenClaw's maturity with a comprehensive update. Claude Sonnet 4.6 support and 1M context window directly improve long-context reasoning performance. Slack/Telegram enhancements facilitate enterprise adoption, while iOS improvements significantly enhance mobile user experience.

The inclusion of security fixes (OC-09) is particularly important, warranting prompt updates for existing users. Despite containing 100+ changes, the release avoids breaking changes, demonstrating careful attention to backward compatibility.

**Source**: [OpenClaw GitHub Releases](https://github.com/openclaw/openclaw/releases/tag/v2026.2.17)
