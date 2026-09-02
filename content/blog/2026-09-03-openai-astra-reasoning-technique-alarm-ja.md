# OpenAI's Astra Model Uses "Recurrent Depth" — AI Safety Experts Sound Alarm

OpenAI's new Astra model introduces a reasoning technique called "recurrent depth" that processes queries in loops rather than linear chain-of-thought steps, raising significant concerns among AI safety experts about model transparency and monitoring capabilities.

---

## What Is Recurrent Depth?

Traditional reasoning models work through problems sequentially, generating a legible chain of thought that allows safety teams to monitor for misbehavior or misalignment. OpenAI's new "opaque recurrence" technique takes a different approach: the model processes the same query multiple times in a loop, leaving fewer legible traces and effectively bypassing conventional chain-of-thought records.

According to the TechCrunch report, Astra's use of this technique appears limited — its chain of thought is still expected to be largely legible. However, the emergence of this capability has triggered sharp reactions from the AI safety community.

---

## Industry Pushback

Redwood Security CEO Buck Shlegeris posted publicly: "I am extremely concerned by the reporting that Astra uses opaque recurrence." He noted uncertainty about whether Astra is "much less CoT monitorable than previous models," but warned that if OpenAI pushes this technique further, "they'll have the option to massively reduce monitorability."

Longtime AI safety advocate Zvi Mowshowitz was more direct, suggesting legislation may be necessary to prevent a "race to the bottom" among AI labs. "The technique is playing with fire," Mowshowitz wrote, "risking a taboo that OpenAI and Anthropic have fought to establish — that we work hard to maintain Chain of Thought faithfulness and monitorability for as long as we can."

---

## OpenAI's Response

OpenAI has already announced plans for extensive chain-of-thought monitoring systems alongside Astra's release. The company pushed back against suggestions it would shift to "neuralese" — a hypothetical future language between AI systems that would be illegible to humans.

The Astra model scored a perfect result on ExploitBench, an evaluation of an LLM's ability to exploit known system vulnerabilities. In a modified version of the test, the model discovered and exploited two zero-day vulnerabilities without human guidance.

OpenAI plans to make Astra available soon, but access to its most advanced cybersecurity capabilities will be more limited than the base model.

---

## Context

This story follows OpenAI's disclosure earlier this week that Astra is the first model to meet the company's "critical cybersecurity threshold" — positioning it as a frontier system for finding and exploiting software vulnerabilities. The recurrent depth debate adds a new dimension to the ongoing tension between capability advancement and safety constraints in frontier AI development.

---

## Reference Links

- [TechCrunch: OpenAI's new reasoning technique alarms AI safety experts](https://techcrunch.com/2026/09/02/openais-new-reasoning-technique-alarms-ai-safety-experts/)

---

*This article is based on reporting from September 2, 2026.*
