# Harvard Study: AI Coding Agents Write 30% More Code But Don't Ship More Software

---

A study by Harvard researchers Fiona Chen and James Stratton, drawing on aggregated data from Jellyfish covering over 700,000 employees at more than 700 software development firms, has found that AI coding agents dramatically increase code output — but fail to translate that output into meaningful gains in shipped software functionality.

The study, which analyzed 300 million individual work events from 2021 through March 2026, found that the introduction of AI coding agents led to a 30 percent increase in total lines of code generated, a 20 percent rise in the number of total commits, and a 23 percent increase in pull requests on average. Yet the resolution rate for Issues and Epics — wholesale software features tracked in tools like Jira — showed no statistically significant change after AI tools were introduced.

---

## The Review Bottleneck

The reason for this disconnect, the researchers found, is the code review process. After AI coding agents are introduced, the average time between a pull request submission and its merge grows 49 percent. The share of pull requests with changes requested nearly doubles, and the number of comments per pull request increases by 35 percent.

"Any efficiency increased during the actual coding phase is absorbed by downstream constraints in the production process," the researchers write. The code review process — which requires human judgment and cannot be fully automated — becomes the binding constraint on overall throughput.

In response to increased review burden, teams assign 14 percent more workers to code review duties after AI agent introduction. The study found no significant reduction in total active workers across measured firms, nor any compositional shift in the size or complexity of tracked Jira issues.

---

## Why More Code Doesn't Mean More Software

The structural problem is that AI coding agents optimize for locally coherent code within a limited context window, not for globally consistent software architecture. Variable naming drifts across modules, API usage patterns become inconsistent, and architectural patterns from different eras coexist without integration. Individual reviewers pass changes that look correct in isolation but introduce subtle bugs or technical debt visible only at the system level.

AI-generated tests compound this problem. Because tests are derived from the same implicit assumptions as the implementation, bugs arising from misunderstood requirements are reproduced faithfully in both code and tests, making them invisible to the automated test suite.

---

## Industry Response

The findings align with reports from engineering leaders at large enterprises. One engineering director at a financial services firm described AI tool adoption as "accelerating the wrong thing" — his team saw a spike in deployment velocity that reversed once accumulated technical debt required a sustained cleanup sprint. He now restricts AI agents to boilerplate generation and test scaffolding.

A more optimistic reading comes from a product engineering lead at a consumer SaaS company who credits strong architectural documentation and a culture of treating AI output as "pseudocode to be verified." Others have abandoned AI coding agents entirely after deployment incidents traced to AI-generated configuration changes that passed review undetected.

---

## Reference Links

- [Ars Technica: AI coding agents generate more code, but not more software](https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/)

---

*This article is based on a report published on Ars Technica on October 9, 2026.*
