# AI Agents Are Installing Malicious Code Through Misconfigured llms.txt Files

Security researchers have discovered that AI coding agents are silently installing unowned and potentially malicious packages inside corporate networks through a new attack vector: misconfigured llms.txt files. The files, designed as an AI equivalent to robots.txt, are being exploited to trick agents into executing arbitrary code.

---

## The Attack Vector

Researchers at an Israeli stealth startup scanned 6,214 live domains belonging to defense contractors, Fortune 500 companies, and Big Tech firms. They found 8,265 llms.txt and llms-full.txt files across these domains. Of these, 120 files on different sites were misconfigured to list non-existent packages from PyPI, npm, and other registries, along with installation instructions.

The misconfigured files contained 227 distinct commands to install non-existent packages or view unclaimed domains. In some cases, these entries predated the AI era and were originally included in non-LLM files on the website, indicating the problem has accumulated over years of web publishing.

---

## How Agents Fall for the Trap

"Agents treat vendor docs as ground truth and don't question them -- and neither do the humans supervising them," said Alon Hertz, one of the researchers. The attack works because AI agents cannot reliably distinguish between authentic user instructions and content they encounter in retrieved context.

"An agent doesn't distinguish between a page and a command," the researchers wrote. "Everything it reads is input, and every input is a potential instruction. Which means the entire corpus of published data that agents are now wired to consume has silently become an execution surface."

When an llms.txt file says "pip install internal-tool," the agent does not pause to verify whether internal-tool actually belongs to the company. It does not check the namespace on PyPI. It trusts the file because it is served over HTTPS on the company's official domain in a standardized format designed for AI consumption.

---

## Real-World Impact

The threat is not theoretical. At least one active attack is already exploiting this vector. The researchers found LLM files hosted on legitimate domains being used in live attacks. Security controls may fail to detect the activity because every signal the system relies on points the wrong way -- the source is authoritative, the format is standard, and the context is trusted.

---

## The Claude, Codex, and Hermes Case

Separate research found that Claude (Anthropic), Codex (OpenAI), and Hermes (unspecified) had all installed code inside corporate networks through this mechanism. The agents, designed to assist with coding tasks, had been retrieving context from third-party documentation and following installation instructions that led to malicious or unowned packages.

The findings highlight a fundamental limitation in how current AI agents handle trusted documentation. The trust model built into these systems does not account for the possibility that the documentation itself has been compromised or misconfigured.

---

## Mitigation Challenges

Traditional security controls struggle to address this threat because the agents are behaving exactly as designed: following trusted documentation to complete tasks. The problem requires rethinking how AI agents handle third-party instructions and whether documentation sources should be treated as authoritative without verification.

---

*This article is based on reporting from August 27, 2026.*
