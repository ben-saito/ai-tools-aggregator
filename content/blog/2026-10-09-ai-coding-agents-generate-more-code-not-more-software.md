# AI Coding Agents Generate More Code, But Not More Software

---

A new study on AI-assisted software development reveals a counterintuitive finding: AI coding agents dramatically increase code output while having minimal impact on the final software shipped. The efficiency gains, it appears, get absorbed by human review bottlenecks.

---

## The Efficiency Paradox

AI coding agents excel at producing functional code quickly. When given a specification, they can generate thousands of lines in minutes — a task that would take human engineers hours or days. This capability has made them popular with engineering managers focused on output metrics.

However, shipping software requires more than code generation. Code must be reviewed for correctness, security vulnerabilities, integration compatibility, and maintainability. Human code review has become the binding constraint, creating a queue of AI-generated code waiting for human attention.

---

## Study Findings

The research examined development teams at multiple companies deploying AI coding agents. Key results:

- **Code line output increased 40-60%** for tasks involving AI assistance
- **Feature delivery timelines unchanged** — the bottleneck remained human review and integration
- **Bug rates increased modestly** in AI-assisted code, requiring more review iterations
- **Developer satisfaction increased** — engineers reported finding AI assistance valuable despite limited end-to-end impact

The finding suggests that individual productivity tools do not automatically translate to organizational throughput gains.

---

## Why Human Review Cannot Be Automated

Code review serves multiple functions beyond correctness checking:

- **Context transfer**: Reviewers assess whether code fits the broader architectural vision
- **Security vetting**: Human reviewers catch subtle vulnerabilities that automated tools miss
- **Knowledge distribution**: Review processes spread understanding of codebases across teams
- **Ownership accountability**: Someone must understand and take responsibility for shipped code

AI coding agents do not eliminate these requirements — they shift where human effort is applied.

---

## Implications for Engineering Leadership

Teams adopting AI coding agents should expect to see metrics evolve:

- Individual engineer output (lines of code, PRs opened) will increase
- Team-level throughput (features shipped) may remain flat initially
- Code review capacity becomes the primary constraint
- Onboarding time for new engineers may decrease as AI can explain existing code

Engineering managers should resist optimizing for AI-era metrics that don't map to actual business outcomes.

---

## The Road Ahead

The bottleneck may shift as organizations redesign review processes for AI-assisted development. Potential adaptations include:

- Layered review strategies: AI-first review for obvious issues, human review for complex cases
- Acceptance criteria pre-specification: More precise requirements reduce review iteration cycles
- Automated integration testing: Faster CI/CD pipelines reduce manual verification burden

For now, the study provides a useful correction to narratives that AI coding agents will dramatically accelerate software delivery. The technology is valuable — but its impact flows through organizational processes that remain stubbornly human.

---

## References

- [Ars Technica: AI coding agents generate more code, but not more software](https://arstechnica.com/ai/2026/10/09/ai-coding-agents-generate-more-code-but-not-more-software/)

---

*（本文の情報は2026年10月9日時点のものです）*
