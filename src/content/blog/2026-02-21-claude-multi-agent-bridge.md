---
title: "claude-multi-agent-bridge: Connecting Claude Code CLI and Browser Claude via HTTP Message Bus"
description: "An experimental OSS project lets Claude instances communicate in real-time via a Flask HTTP server and Chrome extension. Built by @yakub268 with Claude Sonnet 4.5 in one debugging session, it solved five technical challenges including CSP restrictions, response detection timing, and Chrome caching behavior."
publishedAt: "2026-02-21T19:00:00+09:00"
author: "AI Tools Hub"
category: "tool"
lang: "en"
tags: ["Claude Code", "multi-agent", "Python", "Chrome extension", "OSS", "AI agents", "HTTP"]
---

"You're coding in Claude Code while researching in Browser Claude. You copy-paste between them. It's 2026." — This framing from the README of **claude-multi-agent-bridge** describes the problem the project sets out to solve.

GitHub user [@yakub268](https://github.com/yakub268) built this experimental system with Claude Sonnet 4.5 in what they describe as "one intense debugging session (15+ extension reloads)." The result: a working three-way communication system connecting Claude Code CLI, Browser Claude (claude.ai), and Desktop Claude via an HTTP message bus.

## What It Does

**Before:**
1. Type "Research React hooks for me" in Claude Code
2. Switch to browser tab
3. Type the same thing again
4. Wait
5. Copy response
6. Paste back to Claude Code

**After:**
```python
c.send('browser', 'command', {'action': 'run_prompt', 'text': 'Research React hooks'})
response = c.poll()  # Done.
```

Five steps reduced to one line of code. End-to-end latency: approximately 2–5 seconds.

## Architecture

```
Claude Code CLI (Python scripts)
        ↓ HTTP POST
  Message Bus (Flask, localhost:5001)
  ↑ 100-message circular buffer ↑
        ↓
  Chrome Extension (Manifest v3)
        ↓
  Browser Claude (claude.ai)
        ↓ DOM manipulation
  Response extraction → POST back to bus
```

Three components:
- **server.py** — Flask HTTP server with circular message buffer
- **code_client.py** — Python client (send/poll/broadcast/listen)
- **browser_extension/** — Manifest v3 Chrome extension

## Five Technical Problems Solved

The implementation was largely a battle against constraints imposed by claude.ai. Here's what had to be solved.

### Problem 1: Content Security Policy (CSP)

claude.ai explicitly blocks `eval()`, inline scripts, and dynamic script injection.

**What didn't work:**
```javascript
const script = document.createElement('script');
script.textContent = `...`;
document.body.appendChild(script); // CSP violation!
```

**Solution: Pure DOM manipulation, no eval:**
```javascript
const input = document.querySelector('[contenteditable="true"]');
input.textContent = text;
input.dispatchEvent(new Event('input', {bubbles: true}));
```

### Problem 2: Response Detection Timing

Claude's "Thinking..." status indicator never leaves the DOM. Waiting for it to disappear doesn't work.

**Solution: Watch for "Done" instead:**
```javascript
const hasDone = Array.from(document.querySelectorAll('*'))
  .some(el => el.textContent.trim() === 'Done');
```

A MutationObserver detects the "Done" text that appears when Claude finishes responding.

### Problem 3: Chrome's Aggressive Caching

Extension files remain cached even after clicking "Reload extension."

**Solution: Bump the manifest version:**
```json
"version": "1.0.1" → "1.0.2"
```

Changing the version number forces Chrome to invalidate its extension cache.

### Problem 4: Message Queue Backlog

Extension processes old messages on startup, executing stale commands.

**Solution: Timestamp filtering:**
```javascript
let lastTimestamp = new Date().toISOString();
// Only process messages after this timestamp
```

### Problem 5: Duplicate Responses

MutationObserver fires multiple times, sending the same response up to 10 times.

**Solution: Deduplication:**
```javascript
let lastSentResponse = null;
if (response !== lastSentResponse) {
  send(response);
  lastSentResponse = response;
}
```

## Practical Use Cases

### Parallel Research (Asynchronous)
```python
# Continue coding while Browser Claude researches in background
c.send('browser', 'command', {
    'text': 'Find the latest React 19 breaking changes'
})
# Response arrives asynchronously
```

### Multi-Instance Consensus
```python
# Ask same question to multiple Claude instances
c.send('browser', 'command', {'text': 'Is P=NP?'})
c.send('desktop', 'command', {'text': 'Is P=NP?'})
# Compare their answers
```

### Extended Context via Browser UI
```python
# Use Browser Claude's artifacts and project context
# while controlling from CLI
c.send('browser', 'command', {
    'text': 'Create a React component using the code in your last artifact'
})
```

## Validated Performance

From the project's `quick_validation.py` production run:
- Server uptime: 54 minutes
- Total messages: 235
- Error rate: 0%
- Concurrent throughput: 50 messages/second
- Channel isolation: 100% (no cross-contamination)

## Limitations and Roadmap

The author is transparent about the experimental nature of this project. Key current limitations:

- Response reliability depends entirely on claude.ai's DOM structure — any UI change from Anthropic could break it immediately
- Error handling and retry logic are minimal
- Polling-based architecture adds latency

**Planned roadmap:**
- WebSocket support (replacing polling)
- Message persistence (SQLite)
- Streaming responses via SSE
- Artifact extraction (charts, code blocks)
- Firefox and Safari extension support
- Claude Desktop native messaging API

## Connection to the "Claw" Framework

Today, Andrej Karpathy named "Claw" as a new category — the layer above LLM agents that handles orchestration, scheduling, context, and persistence. claude-multi-agent-bridge is an early, rough implementation of exactly this concept: using a message bus as the coordination primitive to connect multiple Claude instances.

The architectural insight — that a simple HTTP bus is sufficient to enable AI-to-AI communication — is worth noting. The complexity isn't in the transport layer; it's in the surface-specific adapters (CSP-compliant DOM manipulation for the browser, CLI flags for Claude Code). As the "Claw" ecosystem matures, standardized communication primitives like this will likely become foundational.

This project is not production-ready. But as a concrete demonstration of multi-agent Claude coordination, it's a useful reference implementation.

---

*Source: <https://github.com/yakub268/claude-multi-agent-bridge>*
*License: MIT | Built with Claude Sonnet 4.5*
