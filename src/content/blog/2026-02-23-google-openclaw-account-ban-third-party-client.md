---
title: "Google Permanently Bans AI Pro Users for Accessing Gemini via OpenClaw, Continues Charging $250/Month"
description: "A Hacker News post garnering 140 points and 107 comments details how Google terminated Google AI Pro and Ultra accounts without warning after users accessed Gemini through OpenClaw, a third-party client. The incident surfaces deeper issues around prompt caching, subscription economics, and how AI providers enforce terms of service."
publishedAt: "2026-02-23T12:00:00+09:00"
author: "Flow"
category: "news"
tags: ["Google", "Gemini", "OpenClaw", "terms of service", "prompt cache", "AI pricing"]
lang: "en"
---

A post on Hacker News on February 23, 2026 drew 140 points and 107 comments after a user reported that Google had permanently terminated their Google AI Ultra account — without warning, and without stopping the $250/month billing — following use of Gemini through OpenClaw, a third-party client.

## What Google Support Said

According to the affected user, Google's support response was unambiguous: using OpenClaw to access Antigravity (Google) servers for non-Antigravity products violates the terms of service. The policy, the support agent stated, is zero tolerance, and the ban is non-reversible.

The specific detail that generated the most discussion on HN was not the ban itself, but the fact that Google continued charging $250 per month after locking the user out of their account.

## The Technical Problem: Prompt Cache Destruction

Several HN commenters identified a technical dimension to the third-party client issue that goes beyond terms of service enforcement.

Prompt caching is a mechanism where AI API providers cache the leading portion of a context window — typically a static system prompt — so that subsequent requests can reuse it without reprocessing. When it works correctly, cache hit rates above 90% are achievable, reducing effective token costs by a factor of 10 or more.

OpenClaw, in at least some configurations, inserts the current timestamp (formatted as hh:mm:ss) at the very beginning of the context window on every request. Because the first bytes of the context change with every call, the cache is invalidated on every request — driving the hit rate to near zero.

Claude Code's official developers have stated publicly that the client is "carefully designed to maximize prompt caching." The design principle is straightforward: static content goes at the top of the context window; dynamic content goes at the bottom. Many third-party clients implement context construction without knowledge of this constraint.

## The Economics: Subscriptions Were Not Designed for Agents

The broader issue underlying the ban is a growing mismatch between how AI subscription products are priced and how developer-heavy users actually consume them.

| Usage scenario | Monthly cost |
|---|---|
| Claude Pro / Google AI Ultra subscription | ~$200/month |
| Equivalent API usage (heavy developer workload) | $1,600+/month |

Subscription pricing assumes usage patterns typical of a human user interacting with the provider's own client — browsing conversations, drafting documents, answering questions. AI coding agents like Claude Code or Gemini CLI can consume orders of magnitude more tokens per session than those baseline assumptions.

The `ccusage` CLI, which gained renewed attention following this incident, visualizes exactly this gap: it records Claude Code's actual token consumption and calculates what the equivalent API costs would have been. For heavy users, the numbers frequently exceed subscription pricing by a wide margin.

## Takeaways for Developers

Three practical conclusions emerge from this incident.

**Use pay-as-you-go API keys for agentic workloads.** Subscription products are designed for human-paced, client-mediated usage. Routing agent traffic through subscription accounts puts you in a gray area that providers — Google especially — are willing to terminate over.

**Design for prompt cache efficiency.** If you are building a client or wrapper that calls AI APIs, avoid placing dynamic content (timestamps, session IDs, request-specific metadata) at the beginning of the context window. Treat the cache prefix as immutable across requests.

**Google's zero-tolerance posture is not universal, but it is real.** Other providers have handled similar situations with warnings or throttling before termination. Google's policy, as stated in this case, skips those steps. Whether that approach is applied consistently remains to be seen, but developers should treat it as the baseline assumption.

Third-party clients exist in a structurally ambiguous position relative to AI providers. Unlike web browsers, which access services through documented, public HTTP interfaces, these clients are often routing requests through infrastructure designed for the provider's own products. Where exactly that line sits — and how strictly providers choose to enforce it — is a question that this incident puts clearly on the table.
