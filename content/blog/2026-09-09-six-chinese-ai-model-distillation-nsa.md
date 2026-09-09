# Six Chinese AI Firms Accused of Mass Model Distillation from US Frontier Systems

US intelligence agencies have formally accused six Chinese AI companies of conducting industrial-scale distillation attacks against American AI frontier models — allegedly extracting capabilities worth billions of dollars in development costs through a combination of prompt injection, fake account networks, and API abuse.

---

## NSA, CISA, and FBI Joint Alert Names Six Firms

In a joint advisory released Tuesday, the NSA, Cybersecurity and Infrastructure Security Agency (CISA), and FBI alleged that **DeepSeek**, **Moonshot AI**, **Alibaba**, **MiniMax**, **StepFun**, and **Z.AI** have been systematically attacking US AI models since at least late 2024. The agencies said the firms "likely" acted with "Chinese government awareness" when extracting capabilities from US models including variants of Claude, GPT, Gemini, and Grok.

"China-based AI companies that conduct industrial-scale distillation against US AI models see significantly shorter AI development timelines and reduced financial expenditures in training a frontier model," the agencies said in their joint release.

---

## How the Distillation Attacks Work

The advisory detailed two primary attack vectors used by the accused firms.

**Exploiting AI model inference APIs** — The firms allegedly purchased fake accounts in bulk, creating "swarms of fraudulent accounts" that execute "highly coordinated" queries at scale. These accounts exploit the fact that model outputs during inference can reveal hidden reasoning traces and behavioral patterns.

**Prompt injection and jailbreaking** — The accused firms also used prompt injection techniques to jailbreak models, including "crafting prompts forcing models to reveal their hidden chain-of-thought reasoning." This extracted reasoning traces were then used to train competing models at a fraction of the original cost.

The agencies noted that Chinese firms "employ aggressive, adaptive discovery to systematically identify valuable extractable data," which is then collected to generate synthetic training data for rival models.

---

## Recommended Countermeasures: Don't Tell Users They Were Downgraded

The advisory included an unusual recommendation: US AI firms should "subtly alter responses" — such as presenting correct information with different reasoning — when suspected distillation attacks are detected, effectively switching Chinese users to less capable model variants.

Critically, the agencies recommended that firms **avoid informing China-based AI company users suspected of distillation campaigns of the switch to a downgraded model**. "The goal is to avoid alerting the adversarial user that they have been identified," the advisory stated.

The agencies acknowledged that this approach carries risks: legitimate users caught up in the detection sweep could be silently downgraded without notification, and the technical means of identifying distillation campaigns may produce false positives.

---

## A New Front in the US-China AI Race

The advisory represents a significant escalation in US government action against alleged Chinese AI intellectual property theft. All six companies named are among the most prominent AI developers in China, with DeepSeek and Alibaba's Qwen series among the most capable open-weight models globally.

To encourage industry cooperation, the agencies recommended that AI firms improve detection of sophisticated campaigns spanning "days to months with query volumes in the thousands to millions per domain" — volumes that "far exceed legitimate research operations."

The advisory stops short of announcing concrete regulatory or legal actions against the named firms, instead framing the guidance as voluntary best practices for US AI companies.

---

## Reference Links

- [Ars Technica: Six Chinese AI firms accused of aggressively copying US frontier models](https://arstechnica.com/ai/2026/09/08/six-chinese-ai-firms-accused-of-aggressively-copying-us-frontier-models)
- [NSA/CISA/FBI Joint Advisory (via CISA.gov)](https://www.cisa.gov)

---

*（本文の情報は2026年9月9日時点のものです）*
