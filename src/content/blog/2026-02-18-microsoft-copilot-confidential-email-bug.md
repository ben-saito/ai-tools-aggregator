---
title: "Microsoft Copilot Bug Bypasses DLP Policies, Summarizes Confidential Emails Since January"
description: "A serious security bug in Microsoft 365 Copilot has been silently summarizing emails with confidentiality labels in Sent Items and Drafts folders, bypassing DLP policies since January 21, 2026. Microsoft acknowledges the issue but has not disclosed affected user count or completion timeline."
publishedAt: "2026-02-18T20:00:00+09:00"
author: "AI Tools Hub"
category: "security"
lang: "en"
tags: ["Microsoft", "Copilot", "security", "DLP", "enterprise-AI", "data-protection"]
featured: false
---

Microsoft has acknowledged a serious security bug in Microsoft 365 Copilot. According to a service notification published to BleepingComputer, Copilot's "work tab" chat feature has been summarizing emails with confidentiality labels in violation of configured DLP (Data Loss Prevention) policies since January 21, 2026.

## The Bug

**Scope:**
- Affected folders: Outlook's Sent Items and Drafts
- Core issue: Copilot processes and summarizes emails with confidentiality labels despite DLP policies instructing otherwise
- Bug ID: CW1226324
- Affected service: Microsoft 365 Copilot Chat (deployed across Word, Excel, PowerPoint, Outlook, OneNote)

Microsoft stated: "Due to a code issue, items in the Sent Items and Drafts folders with sensitivity labels are being processed by Copilot despite the labels." A fix has been rolling out in stages since early February, but Microsoft has not disclosed when the rollout will complete or how many users and organizations were affected.

## Enterprise Security Implications

This bug exposes a fundamental challenge in deploying AI assistants in enterprise environments: even when organizations configure proper DLP and IRM (Information Rights Management) policies, AI systems can inadvertently cross those boundaries.

Several factors make this particularly serious:
- DLP policies are a critical security layer for preventing unauthorized access and data exfiltration
- Confidentiality labels are typically applied to high-sensitivity information in finance, legal, and HR contexts
- Copilot-generated summaries could surface sensitive content to users who lack direct access permissions

## Industry-Wide Pattern

The same week saw Anthropic's Claude Sonnet 4.6 system card disclose an 8% prompt injection attack success rate on a single attempt (rising to 50% with unlimited attempts) for Computer Use. With both Anthropic and Microsoft surface security issues in their AI products simultaneously, a pattern emerges: enterprise AI deployments are introducing new security risk surfaces that existing governance frameworks weren't designed to address.

Organizations evaluating AI assistant deployments need to verify not just feature capabilities but detailed compatibility with existing security policies.

**Recommended Actions (Administrators):**
- Check CW1226324 fix application status in the Microsoft 365 Admin Center
- For environments with confidentiality label policies, consider restricting Copilot access to sensitive mail until fix rollout completes
- Conduct Copilot usage log audits to assess exposure scope

**Source:** BleepingComputer / Microsoft 365 Service Notification
