# OpenAI's Jalapeño Chip Shows Strong Inference Performance on SemiAnalysis Benchmarks

OpenAI's custom inference chip, codenamed "Jalapeño," has posted impressive numbers on SemiAnalysis's InferenceX benchmark, demonstrating that the company's efforts to develop proprietary hardware are yielding results. The chip shows higher tokens-per-second-per-user and better throughput-per-kilowatt than currently available state-of-the-art alternatives, according to benchmark data published by SemiAnalysis.

---

## Why Custom Silicon Matters for AI Labs

Running large language models in production is extraordinarily expensive. Every query sent to ChatGPT or the OpenAI API consumes compute resources, and at scale, those costs add up quickly. Leading AI labs have responded by investing in custom silicon — chips purpose-built for AI inference workloads that can run more efficiently than general-purpose GPUs.

OpenAI's Jalapeño project represents the company's push to bring more of its infrastructure in-house. By controlling its own hardware, OpenAI can optimize the entire stack — from chip architecture to model design to serving infrastructure — for maximum efficiency.

The benchmark results suggest OpenAI is making meaningful progress. Jalapeño outperformed comparable chips on both latency (tokens per user) and throughput (tokens per kilowatt-hour), two metrics that directly impact the cost and environmental footprint of AI inference.

---

## The InferenceX Benchmark

SemiAnalysis's InferenceX benchmark has become a widely cited standard for evaluating AI inference chips. Unlike training benchmarks, which measure how quickly a chip can train a model, InferenceX focuses on real-world serving performance — how fast and efficiently a chip can generate responses for end users.

The benchmark tests chips under conditions meant to simulate production traffic: high concurrency, varied prompt lengths, and realistic generation lengths. Jalapeño's strong performance across these conditions suggests it's ready for deployment at scale.

---

## Competitive Landscape

OpenAI isn't alone in pursuing custom AI silicon. Google's TPUs have been serving the company's AI workloads for years. Amazon has its Trainium and Inferentia chips. Anthropic has partnered with various silicon providers. And startups like Cerebras and Groq are pursuing dedicated AI inference chips with different architectural approaches.

What makes OpenAI's effort notable is the scale of the company's inference demand. As one of the largest AI inference providers in the world, OpenAI has both the motivation and the resources to push the frontier of inference efficiency.

---

## Energy and Environmental Implications

One of the most significant findings from the benchmark data is Jalapeño's throughput-per-kilowatt performance. Data centers devoted to AI inference consume enormous amounts of electricity, and improving efficiency has both economic and environmental benefits.

If OpenAI can serve the same number of queries with less energy, it reduces both costs and carbon footprint. For a company that has committed to sustainability goals, better silicon is part of the path to meeting those commitments.

---

*This article is based on reporting from TechCrunch as of 2026-08-26.*
