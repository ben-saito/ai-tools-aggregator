# Amazon Web Services Releases Strands Decider 2B, a Jev-Like Decision Model for AI Agents

Amazon Web Services' Strand Labs has released Strands Decider 2B, a lightweight decision model designed to help AI agents make fast, cheap choices without the overhead of general-purpose language models. The model arrives as a wave of Jev-inspired decision systems flood the market, with TypeSafe AI's original Jev release earlier this month and OpenAI's Decisions API launched on September 30.

---

## Decision Models: The New AI Agent Infrastructure

Strands Decider 2B is a 2-billion-parameter model explicitly built for software agents. Like Jev and OpenAI's Luna-based Decisions API, it takes a predefined set of choices and returns a selected action, trading flexibility for speed and cost efficiency.

The model is optimized for scenarios where an agent needs to pick from known options: routing a request, selecting a tool, or committing to a next step in a multi-agent workflow. Strand Labs positions Decider 2B as infrastructure for agentic systems, not a consumer product.

---

## The Jev Clone Pattern

Strands Decider 2B joins a growing family of Jev-like decision models. TypeSafe AI released Jev in September, claiming its model achieves near-zero hallucination rates and operates at a fraction of the cost of general LLM agents. OpenAI's Decisions API followed, giving its Luna model a structured choice mechanism.

Amazon's entry signals that cloud providers are treating decision models as core AI infrastructure. AWS can now offer Decider 2B as a managed service, potentially integrating with its existing Bedrock platform for model serving and agent orchestration.

The competition among Jev variants is heating up: TypeSafe AI (independent), OpenAI (frontier lab), and now Amazon Web Services (cloud provider). Each brings different advantages in terms of ecosystem integration, pricing, and model specialization.

---

## Technical Profile

Strands Decider 2B is available through AWS, with API access for developers building agentic workflows. The model supports structured output, returning decisions in a format parsable by downstream agents without additional prompting.

*Information accurate as of October 1, 2026.*