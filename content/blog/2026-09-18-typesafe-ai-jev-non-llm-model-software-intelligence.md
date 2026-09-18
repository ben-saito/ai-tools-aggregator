# TypeSafe AI Releases Jev: A Non-LLM Model That Promises Cheaper and Faster Software Intelligence

A former OpenAI researcher who helped build ChatGPT and later invented reinforcement learning from human feedback (RLHF) has released a new kind of AI model that sidesteps large language models entirely. TypeSafe AI, founded by Rodrigo Santos Almeida two years ago, published a transformer-based model called Jev this week that is generating significant interest among developers for its speed, cost efficiency, and zero hallucination rate.

---

## The Problem with Language Models

Almeida spent his time at OpenAI building the chatbot and then inventing RLHF, the training technique that made modern AI assistants behave in ways humans find useful. But he grew frustrated with a fundamental limitation: language-based models are inherently slow, expensive, and prone to hallucination.

"We have lightning in a bottle, and yet it is not useful," Almeida told TechCrunch. "I've been battling that problem since then. It took me a while to come to the conclusion: The problem is we are optimizing for the wrong abstraction."

Language models must learn the entire structure of human communication to solve specific software tasks. This generality comes at a steep cost in compute and latency.

---

## Jev: Software Intelligence Without Language

Jev takes a fundamentally different approach. Instead of predicting the next word in a sequence, Jev operates directly on structured software representations. Users define the output format in advance, and the model produces outputs in that exact format. Because the output space is constrained, hallucination becomes structurally impossible.

The practical implications are significant: input and output tokens cost a fraction of what comparable language model APIs charge, and inference runs orders of magnitude faster.

Developers are responding enthusiastically. The company briefly lost the ability to serve users from its API because demand exceeded capacity shortly after launch.

---

## Early Benchmark Results

Jev appears most useful for software automation tasks. Pranit Sharma, a software engineer at Vercel, said his team used OpenAI's ChatGPT Luna 5.6 to run a classifier to review commands for safety. The team switched to Jev and found it faster and cheaper while maintaining acceptable accuracy.

Nikhil Mudholkar, CTO of Bryo AI, tested Jev against Gemini for classifying business emails. In his evaluation, Gemini was slightly more accurate, but Jev was 10 to 20 times less expensive. More interestingly, Jev's structured output format made it easier to integrate into existing software pipelines without additional parsing logic.

The model is not without tradeoffs. Its accuracy on open-ended language tasks lags behind frontier language models, making it unsuitable for applications requiring general language understanding. But for well-defined software tasks with constrained output spaces, the cost-performance ratio is compelling.

---

## Competitive Implications

TypeSafe AI is not alone in exploring non-LLM approaches to AI. Several startups and research groups have proposed alternative architectures that sacrifice language generality for task-specific efficiency. What distinguishes Jev is the pedigree of its founder and the rapid developer adoption it has already achieved.

If Jev can sustain developer interest and expand its capabilities, it represents a credible challenge to the assumption that language models are the optimal architecture for every AI application. The broader trend toward specialized, efficient models may accelerate as the cost pressures of running massive frontier models push developers toward narrower but more practical solutions.

---

## Reference Links

- [TechCrunch: A new kind of AI model from a ChatGPT inventor is thrilling developers](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/)
- [TypeSafe AI](https://typesafe.ai/)

---

*This article is based on reporting from TechCrunch as of September 18, 2026.*
