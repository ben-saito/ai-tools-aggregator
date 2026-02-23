---
title: "Two AI Agent Communication Projects Hit Hacker News Simultaneously, Targeting MCP's Blind Spots"
description: "Aqua and Agent Semantic Protocol appeared on Hacker News on the same day, both tackling the same unsolved problem: how AI agents communicate directly without a central broker, across network boundaries, and asynchronously."
publishedAt: "2026-02-23T12:00:00+09:00"
author: "Flow"
category: "news"
tags: ["AI Agent", "Aqua", "libp2p", "MCP", "P2P", "multi-agent"]
lang: "en"
---

On February 23, 2026, two independent projects landed on Hacker News within hours of each other, both targeting the same architectural gap: peer-to-peer, asynchronous communication between AI agents — something the current Model Context Protocol (MCP) was not designed to handle.

## Aqua: A Go CLI for P2P Agent Networking

**Aqua** (github.com/quailyquaily/aqua) — short for "AQUA Queries & Unifies Agents" — is a Go-based CLI that positions itself as a communications layer for AI agents operating in distributed environments.

Its core feature set includes:

- **P2P agent messaging with identity verification**: each agent carries a unique identifier that peers can authenticate before exchanging messages
- **End-to-end encryption**: all message content is encrypted in transit
- **Persistent message storage (inbox/outbox)**: messages survive sender downtime; recipients retrieve them when available
- **Circuit Relay v2**: enables NAT traversal and firewall-piercing connections without a centralized relay server
- **libp2p transport (TCP/QUIC + Relay)**: the same battle-tested networking library used by IPFS, Filecoin, and Ethereum

Aqua ships with an AI Agent Skill compatible with Claude Code and OpenClaw, letting agents join the Aqua network directly.

## Agent Semantic Protocol: Routing by Intent Vectors

The second project takes a different approach. Rather than routing messages by address, the **Agent Semantic Protocol** routes by *semantic intent* — representing agent requests as vectors and matching them to agents based on capability similarity.

The technical stack:

- **libp2p (TCP/QUIC/WebRTC)** as the transport layer
- **Ed25519 DID authentication** for agent identity
- **MCP-compatible extension layer** for interoperability with existing tooling

## Why Now: The Limits of HTTP/SSE-Based MCP

Anthropic's formal launch of Agent Teams brought multi-agent coordination into production use cases. But the current MCP specification — built on HTTP and Server-Sent Events — has structural limitations that are becoming visible as agent workloads grow more complex:

- **Long-running tasks**: HTTP connections time out; there is no built-in mechanism for agents to hand off work that spans hours or days
- **Async messaging**: if a receiving agent is offline, MCP provides no queue or store-and-forward capability
- **True P2P communication**: MCP assumes an orchestrator managing all agents; direct agent-to-agent negotiation without a central coordinator is not part of the spec

As autonomous agents proliferate, teams are running into the ceiling of the orchestrator-centric model. Both Aqua and Agent Semantic Protocol are responses to that pressure.

## The Bigger Question: Who Designs the Internet for AI Agents?

Both projects are early-stage. Neither has meaningful production adoption yet. But the shared timing is notable — two separate teams independently concluded that the existing tooling stack leaves something important unaddressed.

libp2p is a reasonable foundation for this work. It has solved NAT traversal, peer discovery, and transport multiplexing at scale. The IPFS ecosystem has validated its reliability over years of production use.

What remains unresolved is the governance question. Will the protocol layer for AI agent communication emerge from an open-source effort like these two projects, or will it be defined by Anthropic, OpenAI, or Google as a proprietary extension to their platforms? Discussions in the MCP v2 thread have flagged agent-to-agent messaging as a desired feature, but it has not appeared on any official roadmap.

February 2026 appears to be the point at which that competition formally begins.
