# Anthropic's Claude Opus 4.7 Completes Robot Tasks 20X Faster Than Human Record

Anthropic has demonstrated that increasingly powerful general-purpose models can meaningfully improve real-world robot capabilities as a natural dividend of increased intelligence. The company's internal Project Fetch shows a dramatic improvement between August 2025 and May 2026: Claude Opus 4.1 was completely unable to complete quadruped robot tasks in August 2025, while Opus 4.7 operating autonomously completed the same task set in 9 minutes and 35 seconds — roughly 20 times faster than the human record of 181 minutes.

---

## From Complete Failure to 20X Speed Advantage

The Project Fetch experiment tested how well Anthropic's AI systems could accelerate human performance on a quadruped robot task suite. In August 2025, the model (Claude Opus 4.1) was entirely unable to complete the tasks. Humans working with the model were roughly twice as effective as those without access — but completing the full task set required 181 minutes of human effort.

By May 2026, Claude Opus 4.7 acting autonomously completed all tasks except one (re-positioning a ball to its starting position, a task humans also struggled with) in 9 minutes and 35 seconds. The improvement emerged from scaling the general-purpose Opus line of models, not from robotics-specific modifications.

"With more time and additional scaffolding, we think it is very likely that current generations of Claude could do the same," Anthropic noted.

---

## The Bitter Lesson Extends to Robotics

The result represents a direct application of the "bitter lesson" insight — that general-purpose model scaling produces capabilities that emerge spontaneously, including in domains like robotics where targeted effort had previously stalled. Anthropic emphasized: "These improvements, like so many others in the history of LLM development, have emerged from much more general scaling."

This contrasts with the traditional robotics approach of building task-specific systems. The Project Fetch results suggest that as frontier models continue to improve, flow-through benefits to robotics should be expected as a matter of course rather than as the result of dedicated robotics research programs.

---

## Sunday Robotics: Generalization Recipe for Household Robots

A separate but related development comes from AI robot startup Sunday, which has published results from its ACT-2 model. Sunday's approach demonstrates that the key to robot generalization is pairing a larger pre-trained model with small amounts of high-quality in-house data for tuning.

"We found a general recipe for Solves: scale pretraining, then hill-climb with minimal in-house data," Sunday writes. "As the pretrained model becomes stronger, gains learned from a small amount of in-house data become increasingly transferable rather than remaining tied to the environments where that data was collected."

Sunday's robots achieved a 99.1% success rate performing 778 successful folds across 9 garment types. Simple garments like shorts and t-shirts are easiest, while blouses remain harder (though still above 90% success). The company plans to deploy Memo to families through a Beta Program in Fall 2026.

Sunday's findings align with Anthropic's: as base models improve, the gap to deployment-level reliability in novel environments narrows rapidly, and the same generalization capacity that allows single-demonstration learning also enables efficient recovery from failures.

---

## Reference

* (The information in this article is current as of August 5, 2026)
