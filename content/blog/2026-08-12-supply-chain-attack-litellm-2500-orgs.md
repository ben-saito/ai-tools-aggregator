# Massive Supply Chain Attack Exposes Credentials of 2,500+ Organizations via LiteLLM Compromise

---

## TeamPCP Gang Linked to 40-Minute LiteLLM Infection Window That Dumped Cloud Keys, SSH Tokens, AI Provider Credentials

Security researchers at **CloudSEK** and **Hudson Rock** have disclosed a sweeping supply chain attack that exposed credentials belonging to more than **2,500 organizations** during a 40-minute window in March 2026. The attack targeted compromised versions of **LiteLLM** — a widely used open-source library for standardizing LLM API calls — distributed through the official Python Package Index (PyPI).

The stolen data includes cloud keys, repository tokens, SSH keys, Kubernetes secrets, package publishing credentials, environment variables, and AI provider keys. Researchers said the attacker-compromised code scraped memory from infected machines and exfiltrated the data through an attacker-controlled channel.

---

## LiteLLM Supply Chain Linked to Prior Trivy Infection

The LiteLLM compromise is the second major supply chain incident traced to the same campaign that previously infected the vulnerability scanner **Trivy**. Additional infected packages include **KICS** and the **Telnyx Python SDK**. The **TeamPCP** threat actor — described as a loose group largely composed of teenagers — took credit for the attack, and researchers have largely corroborated the attribution.

Independent researcher Kevin Beaumont confirmed the data's legitimacy: "It contains a significant volume of sensitive content at orgs. It's a massive supply chain breach due to poor AI security — not because AI is the threat, but teens can run circles around orgs obsessed with rushing out AI and poor DevOps security."

---

## Security Implications for AI Infrastructure

The attack highlights a growing class of supply chain risks as AI infrastructure becomes central to enterprise DevOps. Organizations using LiteLLM in production pipelines face potential exposure of AI provider credentials, internal API keys, and cloud infrastructure access.

The 40-minute infection window and targeted exfiltration suggest a highly operationalized attack methodology. Security teams using AI-assisted development tools are advised to audit dependency chains, verify package integrity, and rotate any credentials that may have been present in build environments during the March window.

---

## Reference Links

- [Ars Technica: Terabytes of credentials leaked in massive supply-chain attack](https://arstechnica.com/ai/2026/08/12/terabytes-of-credentials-leaked-in-massive-supply-chain-attack/)

---

*This article reflects developments as of August 12, 2026.*
