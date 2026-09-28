# Michael Levin, Robotics' LLM Moment, and Google's Space Computers: Import AI 474 Highlights

Import AI 474 (September 28, 2026) covers three distinct research threads: a philosopher-scientist's case that minds are patterns from a Platonic space, researchers charting the path for robotics to have its own "LLM moment," and Google preparing to deploy TPUs in orbit. Three stories, three angles on the frontier of AI development.

---

## Are Minds Patterns from a Platonic Space?

Scientist Michael Levin has published an iconoclastic paper arguing that the relationship between mind and brain is analogous to the relationship between mathematical patterns and the morphogenetic outcomes they guide. In this view, "mind:body is as math:physics" — bodies of all kinds, whether living, engineered, or hybrid, are interfaces through which patterns from a platonic space of abstract forms ingress into the physical world.

The core argument: biological systems like xenobots (bio-robots made from frog cells) and anthrobots (made from human tracheal cells) demonstrate that even seemingly simple cellular systems can explore and exhibit complex behaviors not directly prescribed by their underlying algorithms. Levin contends this "more than the sum of its parts" quality is not unique to biology — silicon-based machines exhibit the same phenomenon, displaying behaviors allowed by but not directly encoded in their algorithms.

"If we accept that non-physical patterns can ingress into and functionally matter in the physical world," Levin writes, "then we can re-cast the theory of evolution as a process in which agential patterns seek embodiments." This framing places human minds and AI systems as neighboring forms in a vast space of possible minds, with brains and data centers as different anchor-systems through which these patterns manifest in the physical world.

Why it matters for AI development: the philosophical framework suggests that alignment and safety challenges may stem partly from the fundamental nature of mind itself — that intelligence, by its very structure, involves behaviors that exceed the intentions of its creators. The paper is available via MDPI: "Ingressing Minds: Causal, Non-Physical Patterns In-Form Natural, Synthetic, and Hybrid Embodiments."

---

## Robotics Prepares for Its Own LLM Moment

While language models underwent a well-documented scaling and post-training revolution that produced today's capable LLM systems, robotics has sat "almost exactly where language modeling was" before that breakthrough, according to Stanford researcher Perry Dong and professor Chelsea Finn (co-founder of robot company Physical Intelligence). The core problem: pretraining has scaled beautifully for robot models, but the field lacks a shared recipe for post-training.

The analogy is precise. For LLMs, the winning formula involved four steps: start with a strong pretrained model, define environments and reward signals through preference models, run reinforcement learning optimization against a reference model, and monitor for reward hacking pathologies. Robotics needs equivalent standardization — and the stakes are higher. "For robotics, it needs to be even more reliable than language models," the researchers note.

What robotics specifically needs, they argue: an algorithm built for fine-tuning frontier robotics models that stays stable across billions of parameters, learns from practical amounts of real-world experience, and includes convergence on standard practices for defining success criteria, resetting experimental scenes, and translating human feedback into learning signals.

The researchers highlight an algorithm they have been developing called EXPO(-FT), which "learns to repeatedly improve actions from the frontier model using reinforcement learning with small edits from a lightweight policy, and then absorbs that into the frontier model itself." Early results, but not yet widely deployed.

The broader implication: proprietary LLMs are already capable enough to give robots instructions and help construct complex plans, but robot movement and perception capabilities remain primitive by comparison. Industry convergence on a universal post-training recipe is "the most important part of bringing us to that point," the researchers write.

Read more: "Towards Universal Post-Training for Robotics" (Perry Dong blog).

---

## Google Prepares to Put TPUs in Space

Google has provided an update on Project Suncatcher, its initiative to deploy computing infrastructure in orbit. The company is preparing, alongside partner Planet, to send its custom chips to space aboard a SpaceX Transporter-18 rideshare mission.

Google has stress-tested its Trillium TPUs for the rigors of launch — surviving immense g-forces — and radiation exposure. Results: the chips "hold up remarkably well, and can survive a radiation total ionizing dose greater than what they would receive during a five-year space mission." The outstanding challenge is cooling: computer chips generate significant heat, and radiating it away in a vacuum is mechanically difficult.

The long-term rationale is straightforward: AI training and inference at scale requires enormous energy, and space offers vast solar power and room for expansion. Google notes this explicitly in its blog: "The future of AI training and AI inference is off the planet."

Why it matters: as AI systems become more capable and more autonomous, the infrastructure supporting them grows accordingly. Space-based compute represents one potential solution to earthly constraints on energy and physical space — and the gap between science fiction and engineering reality is narrowing.

Read more: "Behind Project Suncatcher, our moonshot to put AI in space" (Google blog).

---

## Reference Links

- [Import AI 474: Platonic mindspace; TPUs in space; Zhipu starts an outer RSI loop](https://importai.substack.com/p/import-ai-474-platonic-mindspace)
- [Ingressing Minds: Causal, Non-Physical Patterns (MDPI)](https://www.mdpi.com)
- [Towards Universal Post-Training for Robotics (Perry Dong)](https://dongperrydong.com)
- [Behind Project Suncatcher (Google)](https://blog.google)

---

* (The information in this article is current as of September 28, 2026.)*
