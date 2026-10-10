# Study: AI Coding Agents Generate 30% More Code — But Don't Ship More Software

A new study from Harvard researchers examines the real-world impact of AI coding tools across hundreds of firms, finding a stark disconnect between code generation volume and actual software output. The findings challenge the prevailing narrative that AI coding agents dramatically boost engineering productivity.

---

## The Study: Scale and Methodology

Researchers Fiona Chen and James Stratstone analyzed 300 million individual work events — commits, pull requests, and issue management data — across over 700,000 employees at more than 700 software development firms from 2021 through March 2026. Data provided by analytics firm Jellyfish offers a comprehensive view of engineering team performance before and after AI tool adoption.

The researchers used a "difference of differences" regression approach, measuring changes in key engineering metrics at firms that introduced AI coding assistants (which auto-complete human-authored code) versus AI coding agents (which autonomously write and submit code).

---

## Key Findings: Volume vs. Outcome

**Code volume increases substantially:**
- 30% increase in total lines of code generated
- 20% rise in number of total commits
- 23% increase in pull requests

**But software output doesn't change:**
- Jira-tracked Issue and Epic resolution rates show no statistically significant change
- No compositional shift in size or complexity of tracked features

The reason: human code review becomes the bottleneck. After AI coding agents are introduced, the average time between pull request submission and merge grows by 49%. Pull requests require more revisions and receive more reviewer comments.

---

## The Human Review Bottleneck

AI coding agents improve individual developer throughput but hit a hard ceiling at code review. Human reviewers cannot scale at the same rate as AI-generated code production. This mirrors a broader pattern: AI tools that accelerate creation are still bottlenecked by human evaluation and approval steps.

Firms show "little evidence that they increase software output or reduce employment" despite significant AI adoption in engineering workflows.

---

## Implications for Engineering Leadership

The study offers a cautionary note: measuring lines of code or commit counts as productivity proxies may dramatically overstate actual value delivered. The bottleneck has shifted from code generation to code review — addressing it may require rethinking review processes, not just development tools.

This also raises questions about how AI tool ROI should be measured. Traditional velocity metrics may capture AI's output boost without accounting for downstream costs in review time, bug rates, or architectural drift.

---

## Reference

- [Ars Technica: AI coding agents generate more code, but not more software](https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/)

---

*This article is based on information available as of October 9, 2026.*
