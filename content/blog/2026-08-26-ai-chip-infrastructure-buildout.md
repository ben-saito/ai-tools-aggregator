# AI Chip Race Heats Up: OpenAI Jalapeño, Apple M6, and the Infrastructure Buildout

The AI industry is in the midst of a massive infrastructure buildout. Three stories from August 25, 2026 illustrate different facets of this trend: OpenAI's custom inference chip benchmarking impressively, Apple launching its first 2nm chip purpose-built for local AI development, and a new startup Keenable raising $26M to build a web search index specifically for AI agents.

---

## OpenAI's Jalapeño Chip: Benchmark Results Impress

OpenAI's Jalapeño chip — the company's custom silicon for inference — has cleared its first public benchmark. Tested on SemiAnalysis' InferenceX benchmark, Jalapeño registered both more tokens per user and more throughput per kilowatt than the currently available state-of-the-art alternatives.

The result represents a significant validation of OpenAI's vertical integration strategy. By controlling its own silicon, OpenAI can optimize the entire stack from model architecture to chip-level execution. The efficiency gains are particularly notable: higher throughput per kilowatt matters enormously at the scale OpenAI operates, where power costs are a major component of serving costs.

Jalapeño signals that OpenAI is serious about reducing its dependence on NVIDIA for inference compute. While the company will continue using NVIDIA GPUs for training, having custom silicon for inference gives it pricing power and supply chain control that a pure-play API vendor lacks.

---

## Apple M6 and Mac Studio: Local AI Development Gets a Purpose-Built Machine

Apple announced new iterations of the Mac Studio and Mac mini, along with two new chips: the M6 — the first 2nm chip in Apple's M-series lineup — and the M5 Ultra.

The timing is deliberate. Apple notes that developers have been daisy-chaining Macs for AI inference and software development, taking advantage of the unified memory architecture and the fast CPUs and GPUs on Apple's systems-on-a-chip. The new Mac Studio refresh is explicitly designed to keep that use case in mind.

For AI developers, the appeal is clear: Apple Silicon offers high memory bandwidth and a unified memory architecture that makes running large models locally practical. The M6's 2nm process node should deliver meaningful efficiency improvements over the M5 series, making local model serving more viable for development workflows.

This positions the Mac Studio as a credible local development alternative to cloud-based inference for prototyping and testing. It's not a replacement for hyperscaler-scale serving, but for the iterate-and-debug cycle of AI development, it offers real advantages in latency and cost.

---

## Keenable: Building a Search Index for AI Agents

A new startup called Keenable has emerged from stealth with $26 million in seed funding, backed by Accel. The company's premise: existing web search infrastructure was built for humans clicking links; AI agents need something different.

Keenable is building a vast web search index optimized for AI agent consumption. The core insight is that AI agents don't browse pages the way humans do — they need structured, machine-readable data with clear provenance. Traditional search rankings based on click-through rates and SEO signals are less relevant when an agent is programmatically retrieving information.

This represents a new category of infrastructure play in the AI stack. As more AI systems move from responding to queries to taking actions on behalf of users, having a search index designed for agentic workflows becomes critical. Keenable is betting that the next generation of AI applications will need search infrastructure built from the ground up for machine consumption rather than human consumption.

---

## Stability AI: $76M Fresh Funding Despite Turbulent History

Stability AI, the company behind the Stable Diffusion image generator, raised $76 million in new funding, bringing its total fundraising to $232 million. The company has had a turbulent history — leadership turnover, litigation over training data, and questions about its business model — but continues to push forward with its open-source image generation models.

The funding comes at an interesting moment in the image generation market. Midjourney, DALL-E, and Stable Diffusion have each staked out different positions on the open-source-to-proprietary spectrum. Stability AI's bet is that open-source model availability drives adoption, and that enterprise services built on top of those models represent the revenue opportunity.

---

## AI Won't Replace Radiologists — But It Will Change How They Work

A feature article in Ars Technica examined the actual impact of AI on radiology, correcting for the breathless predictions of years past. The number of radiologists is actually growing steadily, with practitioners expected to expand by 26% or more over the next three decades.

The key insight: AI has not replaced radiologists, but it has changed the job fundamentally. Radiology is now medicine's clearest example of human-AI collaboration at scale, with AI systems matching or exceeding human performance on specific detection tasks. The lesson for other fields is that automation doesn't always mean workforce reduction — it often means workforce transformation.

---

*This article reflects developments reported on August 25, 2026.*
