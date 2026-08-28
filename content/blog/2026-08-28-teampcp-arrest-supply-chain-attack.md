# Authorities Arrest Two Alleged Members of Prolific Hacking Group TeamPCP

Australian Federal Police have arrested two men in Western Australia suspected of being members of TeamPCP, a hacking group that compromised more than 1,000 organizations worldwide through a sophisticated supply-chain attack campaign.

---

## The Supply-Chain Attack Methodology

TeamPCP emerged in December and is best known for a sustained series of supply-chain attacks that injected malware into open source software packages. The malicious code, dubbed Shai-Hulud, self-propagated from one compromised package to another.

The attack targeted organizations' CI/CD pipelines used for software development, update, and deployment. Once a package was compromised, Shai-Hulud attached itself to future package updates. When developers downloaded the compromised packages and ran them through their CI/CD platforms, their software was also infected.

In one notable case, the group infected the Trivy vulnerability scanner, which then spread to downstream packages including KICS, the Telnyx Python SDK, and LiteLLM. The initial Trivy compromise resulted in the theft of terabytes of credentials and other private data.

---

## LLM-Assisted Attack Development

A key component collected credentials from the memory of infected hardware, which TeamPCP members then used to infect additional packages.

Security researchers noted that TeamPCP members appeared to lack the operational discipline typically seen in hacking groups of their caliber. According to Charlie Eriksen, a researcher at Aikido Security, "traditionally, hackers at that level have had to spend considerable time researching various techniques, tailoring and troubleshooting code, and building the infrastructure to successfully carry out such campaigns." He added: "LLMs have compressed that gap significantly."

---

## Infrastructure and Attribution

Shai-Hulud used an unconventional mechanism to protect its command-and-control infrastructure: an Internet Computer Protocol-based canister, a form of smart contract. This allowed the worm to find control servers using URLs that could be rapidly changed at any time. Infected machines reported to the canister once every 50 minutes.

---

## Legal Consequences

The two arrested men face 14 offenses each. If convicted, one faces more than 20 years in prison and the other faces more than 10.

---

## Reference Links

- [Ars Technica: Authorities arrest 2 alleged members of prolific hacking group TeamPCP](https://arstechnica.com/tech-policy/2026/08/authorities-arrest-2-alleged-members-of-prolific-hacking-group-teampcp/)

---

*This article reflects information available as of August 28, 2026.*
