---
title: "MiniMax-M2.5 Released: Open-Source Model Matching Opus 4.6 at 10% of the Cost"
description: "MiniMax releases M2.5, an open-source 229B parameter model achieving 80.2% on SWE-Bench Verified with 10-20x cost reduction compared to Opus 4.6, Gemini 3 Pro, and GPT-5."
publishedAt: "2026-02-15T09:30:00+09:00"
author: "AI Tools Hub"
category: "AI Models"
tags: ["MiniMax", "Open Source", "Coding AI", "Cost Efficiency", "Agent Models"]
featured: true
lang: "en"
seo:
  keywords: "MiniMax, M2.5, Open Source AI, Opus 4.6, SWE-Bench, Coding AI, Cost Efficiency"
---

MiniMax released MiniMax-M2.5 on February 14, 2026, an open-source large language model designed for coding, agentic workflows, and office tasks. The 229-billion-parameter model achieves performance comparable to Claude Opus 4.6 while costing one-tenth to one-twentieth as much, according to the company's official announcement on Hugging Face.

## Performance Benchmarks

MiniMax-M2.5 demonstrates state-of-the-art performance across multiple benchmarks:

**Coding:**
- SWE-Bench Verified: 80.2%
- Multi-SWE-Bench: 51.3%
- SWE-Bench evaluation on Droid scaffolding: 79.7% (vs. 78.9% for Opus 4.6)
- SWE-Bench evaluation on OpenCode scaffolding: 76.1% (vs. 75.9% for Opus 4.6)

**Search and Tool Calling:**
- BrowseComp (with context management): 76.3%
- Achieves results with approximately 20% fewer search rounds compared to M2.1

**Other Benchmarks:**
- AIME25: 86.3%
- GPQA-D: 85.2%
- SciCode: 44.4%
- IFBench: 70.0%

The model was trained on over 10 programming languages (including Go, C, C++, TypeScript, Rust, Kotlin, Python, Java, JavaScript, PHP, Lua, Dart, and Ruby) across more than 200,000 real-world environments.

## Speed Improvements

MiniMax-M2.5 completes SWE-Bench Verified evaluations 37% faster than M2.1, matching the speed of Claude Opus 4.6. The end-to-end runtime decreased from an average of 31.3 minutes (M2.1) to 22.8 minutes (M2.5), on par with Opus 4.6's 22.9 minutes.

The model is served at two throughput levels:
- **M2.5-Lightning**: 100 tokens per second (2x faster than other frontier models)
- **M2.5**: 50 tokens per second

## Cost Efficiency

MiniMax positions M2.5 as "intelligence too cheap to meter." Pricing is as follows:

**M2.5-Lightning (100 TPS):**
- Input: $0.30 per million tokens
- Output: $2.40 per million tokens

**M2.5 (50 TPS):**
- Input: $0.15 per million tokens
- Output: $1.20 per million tokens

According to MiniMax's calculations, running M2.5-Lightning continuously for one hour at 100 tokens per second costs $1. At 50 tokens per second, the cost drops to $0.30 per hour. The company states that four M2.5 instances can run continuously for an entire year for $10,000.

Based on output pricing, M2.5 costs one-tenth to one-twentieth that of Claude Opus, Google Gemini 3 Pro, and OpenAI GPT-5.

## Real-World Deployment at MiniMax

MiniMax reports that M2.5 autonomously completes 30% of the company's daily tasks across functions including R&D, product, sales, HR, and finance. In coding scenarios specifically, M2.5-generated code accounts for 80% of newly committed code.

The company has deployed M2.5 in its MiniMax Agent platform, where users have built over 10,000 "Experts" (reusable task templates) combining domain expertise with standardized "Office Skills" for Word, PowerPoint, and Excel tasks.

## Open-Source Availability

Model weights are available on Hugging Face: https://huggingface.co/MiniMaxAI/MiniMax-M2.5

GitHub repository: https://github.com/MiniMax-AI

Recommended inference frameworks (listed alphabetically):
- SGLang
- vLLM
- Transformers
- KTransformers
- ModelScope (for users in China)

**Inference parameters:**
- Temperature: 1.0
- Top-p: 0.95
- Top-k: 40

**Default system prompt:**
> "You are a helpful assistant. Your name is MiniMax-M2.5 and is built by MiniMax."

## Technical Background: Reinforcement Learning Scaling

MiniMax attributes M2.5's improvements to large-scale reinforcement learning. The model was trained across hundreds of thousands of real-world environments derived from tasks performed at the company.

**Forge Framework:**
The company developed an in-house agent-native RL framework called "Forge," which decouples the training-inference engine from the agent layer, enabling optimization across multiple agent scaffolds. A tree-structured merging strategy for training samples achieved approximately 40x training speedup.

**Algorithm:**
MiniMax continued using the CISPO algorithm introduced in early 2025 to ensure stability of MoE (Mixture of Experts) models during large-scale training. A process reward mechanism was introduced to address credit assignment challenges in long-context agent rollouts.

## Model Progression

Over three and a half months from late October 2025 to February 2026, MiniMax released three models:
- **M2** (December 23, 2025)
- **M2.1** (updated February 13, 2026)
- **M2.5** (February 14, 2026)

According to MiniMax, the rate of progress on SWE-Bench Verified has been significantly faster than Claude, GPT, and Gemini model families over the same period.

## Commercial Availability

In addition to open-source deployment, MiniMax offers M2.5 through:
- MiniMax Agent: https://agent.minimax.io/
- MiniMax API Platform: https://platform.minimax.io/
- MiniMax Coding Plan: https://platform.minimax.io/subscribe/coding-plan

## Security and Trust Assessment

A security review of the MiniMax-AI GitHub organization and repositories was conducted on February 15, 2026.

**Organization Verification:**
- Organization ID: 194880281 (created January 14, 2025)
- Official website: https://www.minimax.io
- Official contact: model@minimax.io
- Twitter: @MiniMax_AI
- GitHub followers: 4,358

**Repository Trust Indicators:**
- MiniMax-M2.5: 6.09k stars, 519 forks (updated 21 hours ago)
- MiniMax-M2.1: 86.7k stars, 1.27k forks
- MiniMax-M2: 450k stars, 1.48k forks
- Mini-Agent: 1.6k stars, 232 forks

High community engagement levels indicate active maintenance and peer review.

**License:**
Modified MIT License requiring commercial users to display "MiniMax M2.5" on product interfaces. Standard open-source license with minimal additional restrictions.

**Code Safety Review:**
- MiniMax-M2.5 repository contains documentation and deployment guides only; no executable code
- Model weights hosted on Hugging Face (external platform)
- Mini-Agent repository reviewed: standard dependencies (pydantic, openai, anthropic, httpx)
- No malicious code patterns detected (eval, exec, __import__ abuse)
- bash_tool.py implements shell command execution (standard for AI agent tools)

**Recommendations for Safe Usage:**
1. Avoid executing shell commands with untrusted inputs
2. Use firewall/sandbox environment for initial local deployment
3. Manage API keys via environment variables (not hardcoded)
4. Review code before deployment in production environments

Based on this assessment, the MiniMax-AI organization and repositories appear legitimate with no evidence of malicious code or backdoors.

## References

- Hugging Face Model Repository: https://huggingface.co/MiniMaxAI/MiniMax-M2.5
- GitHub Organization: https://github.com/MiniMax-AI
- X Announcement by Akshay (@akshay_pachaar): https://x.com/akshay_pachaar/status/2022574708051583120

---

**Disclaimer:** Information in this article is based on publicly available data as of February 15, 2026. Model performance, pricing, and availability are subject to change. Please refer to official sources for the latest information.
