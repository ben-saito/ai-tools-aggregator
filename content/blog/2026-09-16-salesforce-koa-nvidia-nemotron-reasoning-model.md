# Salesforce Koa: Nvidia-powered reasoning model threatens frontier AI labs

Salesforce has unveiled Koa, its first reasoning model built on Nvidia's open-weight Nemotron architecture, at Dreamforce 2026. The model is specifically trained for sales, marketing, and customer-support tasks — a direct challenge to the general-purpose approach of Anthropic, OpenAI, and Google DeepMind.

---

## Why Koa Matters for Enterprise AI

Until now, Salesforce relied on frontier model providers like Anthropic and OpenAI to handle complex reasoning tasks routed through its Agentforce platform. When an agent needed to reason through a multi-step customer service issue or a sales strategy, those prompts went to Claude or ChatGPT via Agentforce's AI gateway.

"One of the reasons we hadn't done this before — train our own enterprise-grade frontier model — is the challenge of finding a pre-trained base model to start with," said Jayesh Govindarajan, EVP of Salesforce AI. "Until Nemotron came along, there was no sovereign American pre-trained model that was available, state-of-the-art, and had clear data provenance."

The reference to data provenance is pointed. Govindarajan specifically cited concerns about Qwen, Alibaba's popular open-weight model: "We have no idea what Qwen trains on."

---

## Synthetic Data and Training Approach

Salesforce and Nvidia did not use actual customer data. Instead, they crafted synthetic data mimicking customer service and sales patterns. According to Govindarajan: "We actually simulated a customer service environment with a persona customer service professional, including irate customers that call into the customer service center, all the way to a sales professional who's trying to close a deal."

The goal is a model that burns fewer tokens — and therefore costs less — while outperforming general-purpose frontier models on enterprise-specific tasks.

Kari Ann Briski, Nvidia's VP of Generative AI Software for Enterprise, described the technical advantage: "With Nemotron, we have a unique architecture for inference to be token efficient. It's the trifecta: sovereign AI, time to first token, and efficient reasoning for the tokenomics."

---

## Koa vs. the Frontier Labs

The divergence between enterprise needs and frontier lab offerings is now structural. Frontier labs prefer enterprises upload files, code, prompts, and feedback directly into their models — at significant cost. Salesforce is positioning Koa as a purpose-built alternative within its Agentforce platform.

Critically, Salesforce is not abandoning Anthropic entirely. The company announced a partnership with Anthropic called Claudeforce, allowing companies to use Claude as their AI interface while keeping data within Salesforce's system of records.

---

## Implications for the AI Industry

Koa represents a growing trend: large enterprises training specialized models on open-weight foundations rather than paying premium prices for general-purpose frontier models. If Salesforce's approach delivers comparable quality at lower cost, other enterprise AI buyers may follow.

The move also signals that Nvidia's open-weight strategy is working. By providing a competitive base model, Nvidia has enabled a major enterprise customer to build in-house capabilities that could reduce spending on proprietary frontier models.

---

## Reference Links

- [Salesforce and Nvidia's new reasoning model is everything the AI labs should fear (TechCrunch)](https://techcrunch.com/2026/09/15/salesforce-and-nvidias-new-reasoning-model-is-everything-the-ai-labs-should-fear/)
- [Nvidia Nemotron Model](https://www.nvidia.com/)

---

*（本文の情報は2026年9月15日時点のものです）*
