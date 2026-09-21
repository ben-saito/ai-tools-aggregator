# Google Undercover Analyst Infiltrated TeamPCP Supply-Chain Hacking Group — Ars Technica

---

## A Mole Inside the Hacker Circle

TeamPCP — the notorious supply-chain hacking group responsible for compromises including the Trivy security scanner and LiteLLM AI API tool — operated for months believing their communications were private. They were wrong. Google Threat Intelligence Group had a researcher inside their inner circle.

Ars Technica reported on September 20, 2026, that Google Threat Intelligence Group researcher Austin Larsen presented details at SentinelOne's LABScon research conference, revealing how Google operated an undercover analyst inside TeamPCP for months during the group's most active period.

---

## Building Trust Over Months

"One of our personas had been working for many months to build trust with one of the actors that was invited to join TeamPCP, and so was added to the group," Larsen told WIRED ahead of the presentation. The infiltration took sustained effort — a far cry from passive intelligence gathering.

Starting in spring 2026, TeamPCP began a frenzied supply-chain attack campaign, compromising the open-source security scanner Trivy, the AI application programming interface tool LiteLLM, and infrastructure belonging to web application security firms. The group amassed a significant credential trove: usernames, passwords, and access tokens from numerous victim organizations.

---

## Monitoring the Biggest Supply-Chain Hack in Modern History

Google's undercover analyst gained access to the server where TeamPCP was storing its stolen credentials — a position that allowed Google to monitor the full extent of the compromise in near-real time. "You guys should understand that we pulled off the biggest supplychain maybe ever recorded in modern history," one TeamPCP member wrote in leaked chats.

The case illustrates how threat intelligence firms use human intelligence (HUMINT) methods alongside technical collection to track sophisticated threat actors — a reminder that attribution and monitoring in the AI era still relies heavily on traditional espionage tradecraft.

---

## Supply-Chain Security in the AI Stack

The TeamPCP campaign is particularly significant for AI infrastructure operators because it targeted LiteLLM — a tool widely used to route requests across multiple LLM providers. Compromising such tooling gives attackers access to API keys, conversation logs, and potentially the content of prompts and responses across multiple customer deployments.

The incident underscores the expanding attack surface of AI systems: not just the models themselves, but the infrastructure, tooling, and data pipelines that surround them.

---

## Reference Links

- [Ars Technica: An undercover Google analyst infiltrated a notorious supply-chain hacking gang](https://arstechnica.com/ai/2026/09/20/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang/)

---

*本文の情報は2026年9月21日時点のものです*
