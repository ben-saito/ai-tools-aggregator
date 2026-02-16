---
title: "OpenClaw v2026.2.14 Released: Major Security Hardening and 100+ Bug Fixes"
description: "OpenClaw releases v2026.2.14 with extensive security improvements, TUI stability enhancements, memory system optimizations, and 100+ bug fixes across channels, agents, and tools."
publishedAt: "2026-02-16T11:30:00+09:00"
author: "AI Tools Hub"
category: "AI Development"
tags: ["OpenClaw", "Release", "Security", "Open Source", "AI Agents"]
featured: true
lang: "en"
seo:
  keywords: "OpenClaw, release notes, security, AI agents, bug fixes, open source"
---

OpenClaw has released version 2026.2.14 with a major focus on security hardening, terminal UI (TUI) stability, and memory system performance. The release includes over 100 bug fixes and addresses multiple security vulnerabilities across the platform.

## Major Security Improvements

The release includes extensive security hardening across multiple components:

**Memory and Data Protection:**
- LanceDB memory system now treats recalled memories as untrusted context, escaping injected memory text and adding explicit non-instruction framing to reduce memory-poisoning risk
- Auto-capture feature now requires explicit `autoCapture: true` opt-in (default disabled) to prevent automatic PII capture
- QMD security improvements include rawKeyPrefix support for scope rules and legacy keyPrefix matching preservation

**SSRF and Path Traversal Protection:**
- Hardened media URL fetching against SSRF across multiple channels (Discord voice messages, Feishu, Tlon)
- Archive extraction now enforces entry/size limits to prevent resource exhaustion
- Apply_patch tool enforces workspace-root path bounds to block traversal and symlink escape writes
- Browser control file upload/download helpers now prevent path traversal and local file disclosure

**Webhook and Authentication:**
- Telegram webhooks now require non-empty `webhookSecret` to prevent unauthenticated request forgery
- Voice call services (Telnyx, Twilio) now enforce webhook signature verification
- BlueBubbles webhook auth hardened behind reverse proxies, requiring passwords for proxied requests
- Multiple channels now reject ambiguous shared-path webhook routing

**Command Injection Prevention:**
- Windows: Avoids shell invocation when spawning child processes to prevent cmd.exe metacharacter injection
- macOS: Prevents shell injection when writing Claude CLI keychain credentials
- Scripts: Validates GitHub logins and avoids shell injection in update-clawtributors.ts

## TUI Stability and Performance

The terminal user interface received significant stability improvements:

**Rendering Enhancements:**
- Sanitizes ANSI/control-heavy history text and redacts binary-like lines to prevent startup crashes on binary attachment history
- Renders assistant body text in terminal default foreground for better contrast on light themes (Solarized Light)
- Preserves in-flight streaming replies when concurrent runs finalize
- Keeps pre-tool streamed text visible when tool-boundary deltas omit earlier text blocks

**Session Management:**
- Honors explicit `--session` flag even when `session.scope` is global
- Uses available terminal width for session name display in searchable select lists
- Fixes lazy core command registration for maintenance commands (doctor, dashboard, reset, uninstall)

## Memory System Optimizations

QMD (Query Memory Database) and builtin memory backends received multiple performance and correctness improvements:

**QMD Performance:**
- Caps command output buffering to prevent memory exhaustion
- Parses QMD scope keys once per request
- Queries QMD index using exact docid matches before prefix lookup
- Passes result limits to search/vsearch commands for earlier result capping
- Skips rewriting unchanged session export markdown files to reduce disk churn
- Avoids reading full markdown files when from/lines window is requested

**Multi-Collection Query Fix:**
- Runs one `qmd query -c` per managed collection and merges by best score to avoid ranking corruption
- Detects null-byte ENOTDIR update failures, rebuilds collections once, and retries to self-heal corrupted metadata

**Memory Leak Prevention:**
- Bounds diagnostic session state, agentRunSeq tracking, ABORT_MEMORY, thread-starter cache, directory cache, and remote-skills cache growth
- Implements TTL + max-size pruning across multiple long-running gateway components

## Channel and Plugin Improvements

**New Features:**
- Telegram: Poll sending support via `openclaw message poll` with duration, silent delivery, and anonymity controls
- Discord: Exec approval prompts can now target channels or both DM+channel via `channels.discord.execApprovals.target`
- Slack/Discord: New `dmPolicy` and `allowFrom` config aliases for DM access control

**Fixes:**
- CLI/Plugins: Ensures `openclaw message send` exits after successful delivery and runs registered `gateway_stop` hooks before exit
- WhatsApp: Honors per-account dmPolicy overrides
- LINE: Returns 200 OK for Developers Console "Verify" requests without X-Line-Signature
- Cron: Delivers text-only output directly when delivery.to is set; preserves agent identity in Slack outbound messages

## Agent and Tool Enhancements

**Workspace and Bootstrap:**
- Persists bootstrap onboarding state for partially initialized workspaces
- Creates BOOTSTRAP.md when core workspace files are seeded
- Hardened transcript path resolution for mismatched agent context

**Tool Improvements:**
- Media tool accepts MEDIA:-prefixed paths with lenient whitespace
- Image tool allows workspace-local image paths by including active workspace in allowlists
- Sandbox file tools are now bind-mount aware with read-only bind semantics enforcement

**Provider Resilience:**
- Treats empty-stream provider failures as timeout-class failover signals
- Classifies external timeout aborts during compaction same as internal timeouts
- Adds safety timeout around embedded session.compact() to prevent stalled compaction blocking

## Cron System Fixes

- Prevents cron list/status from silently skipping past-due recurring jobs
- Repairs missing/corrupt nextRunAtMs without globally recomputing unrelated jobs
- Skips missed-job replay on startup for jobs interrupted mid-run, preventing restart loops

## Breaking Changes and Deprecations

**Security-Related:**
- Telegram allowlist authorization now requires numeric sender IDs (rejects @username principals)
- Google Chat users/ allowlists deprecated (treat users/... as immutable user id only)
- Hooks transformsDir must now be within ~/.openclaw/hooks/transforms

**Configuration:**
- Auto-capture for LanceDB memory now defaults to disabled (requires explicit opt-in)

## Community Contributions

This release includes contributions from over 80 community members, with special thanks to:
- [@robbyczgw-cla](https://github.com/robbyczgw-cla) (multiple improvements)
- [@vincentkoc](https://github.com/vincentkoc) (extensive security hardening)
- [@p80n-sec](https://github.com/p80n-sec) (security improvements)
- [@christos-eth](https://github.com/christos-eth) (security fixes)
- [@coygeek](https://github.com/coygeek) and [@vignesh07](https://github.com/vignesh07) (memory leak fixes)

## Upgrade Recommendations

Users are strongly encouraged to upgrade to v2026.2.14 due to the extensive security improvements, particularly:
- Webhook authentication hardening
- SSRF and path traversal protections
- Memory poisoning risk reduction
- Command injection prevention

**Source**: [OpenClaw GitHub Releases](https://github.com/openclaw/openclaw/releases/tag/v2026.2.14)
