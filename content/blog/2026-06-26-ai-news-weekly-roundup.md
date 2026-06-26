# AI news weekly summary (2026 June Week 4) - Small model activity, Mistral OCR 4, Alibaba world model

2026年6月第4週のAIニュースを振り返る。今週はエッジ・小型モデルの躍進と、ドキュメントAIのエンタープライズ展開加速が二本柱。Alibabaが環境予測というアプローチでエージェント訓練のあり方を変える発表もあった。

---

## Liquid AI ultra-small model LFM2.5-230M released - 230M parameters beat models 4x size in data extraction

MIT researchers founded Liquid AI released its smallest foundation model LFM2.5-230M on June 25. Despite being only 230 million parameters, it outperforms 800M Alibaba Qwen3.5-0.8B and 1B Google Gemma 3 1B on data extraction benchmarks.

### Architecture: LFM2 hybrid design

LFM2.5-230M diverges from standard transformer architectures using gated short-range convolutions combined with grouped-query attention. Supports 32K context window without quadratic memory costs of pure attention.

### Performance numbers

- Samsung Galaxy S25 Ultra (Snapdragon Gen4): 213 tokens/sec
- Raspberry Pi 5: 42 tokens/sec
- Memory footprint: under 400MB

### AI ETL economics

Traditional ETL scripts break on schema updates. LFM2.5-230M enables lightweight data extraction running locally without cloud API calls. Free for companies under $10M annual revenue.

---

## Mistral OCR 4 - From document extraction to structured representation

Mistral AI released Mistral OCR 4 on June 24. The 4th generation OCR model shifts from page-to-text conversion to returning structured document representations with bounding boxes, block type classification, and per-word confidence scores.

### Key features

- Bounding Boxes: Returns page coordinates for each block, enabling source tracing in RAG pipelines
- Block type classification: title/table/equation/signature routing to downstream pipelines
- Confidence scores: Human-in-the-loop verification built-in

### Specifications

- Languages: 170 languages across 10 language groups
- Formats: PDF, DOC, PPT, OpenDocument
- Deployment: Single container on-premises for regulated industries

### Pricing

$4 per 1000 pages, $2 per 1000 pages via batch API. Available on Amazon SageMaker and Microsoft Foundry. Snowflake support coming soon.

---

## Alibaba Qwen-AgentWorld - Environment prediction exceeds agent training limits

Alibaba Qwen team released Qwen-AgentWorld on June 24. Two models (35B/397B) across 7 domains (MCP, Search, Terminal, Software Engineering, Android, Web, OS) reverse the traditional agent training paradigm.

### Reversed paradigm: predict environment, not actions

Instead of 'given environment state, what should agent do next' (standard), AgentWorld is trained on 'given agent action, what will environment return next'. 3-stage training: environment behavior learning, predictive reasoning, reinforcement learning.

### Transfer learning results

Agents trained in simulation outperformed real-environment agents:
- WideSearch F1: 34.02 to 50.31
- BFCL v4: 62.29 to 71.25
- Claw-Eval: 53.60 to 64.88
35B weights and AgentWorldBench available under Apache 2.0.

---

## Other notable topics

- Xiaomi HarnessX: Framework rewrites agent scaffolding mid-task. Smaller models benefit most.
- Shopify AI Stack: Proxy/distillation/circuit breaker strategy insensitive to model survival.
- Amazon AI Agents Framework: Trustworthy AI agent engineering framework at VB Transform 2026.

---

## Reference links

- [Liquid AI LFM2.5-230M (VentureBeat)](https://venturebeat.com/ai/liquid-ais-smallest-model-yet-lfm2-5-230m-beats-models-4x-its-size-at-data-extraction-can-run-anywhere/)
- [Mistral OCR 4 (VentureBeat)](https://venturebeat.com/ai/mistral-launches-ocr-4-turning-document-extraction-into-a-full-enterprise-ai-play/)
- [Alibaba Qwen-AgentWorld (VentureBeat)](https://venturebeat.com/ai/alibabas-model-never-trained-as-an-agent-and-improved-agent-performance-across-seven-benchmarks/)
- [Liquid AI](https://liquid.ai/)
- [Mistral AI](https://mistral.ai/)
- [Qwen AgentWorld (arXiv)](https://arxiv.org/pdf/2606.24597)

---

*本文の情報は2026年06月26日時点のものです*