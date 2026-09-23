# Microsoft Disrupts EvilTokens AI-Assisted Hacking Platform, 12,000 Accounts Compromised

Microsoft has dismantled an AI-assisted hacking platform called EvilTokens that managed to compromise 12,000 customer accounts across 10,000 organizations worldwide, the company announced on September 22, 2026. The platform operated as a subscription service, charging an initial $1,500 fee plus $500 monthly, and was built around an AI-style chatbot that could analyze victims' inboxes and identify trusted relationships for follow-on attacks.

---

## How EvilTokens Worked

EvilTokens launched on a Telegram channel in February 2026 and quickly attracted cybercriminals seeking to automate large-scale account compromises. The service leveraged OAuth's device code authentication — a flow designed for TVs and input-constrained devices — to trick victims into unknowingly granting access to their accounts. Users were directed to a webpage running a legitimate Microsoft device login portal, where they were prompted to enter a device code displayed on the attacker's site.

Once access was obtained, the platform's Node.js backend automated the analysis of approximately 5,000 compromised inboxes. The AI component helped attackers identify high-value targets and craft personalized lures based on the organizations their victims worked for.

---

## Scale of the Attack

The platform's customers compromised accounts belonging to 10,000 organizations across multiple countries, with the highest concentration in the United States. EvilTokens also provided automation for large-scale spam distribution and allowed users to customize phishing campaigns through a dashboard interface.

Microsoft seized 50 websites and 150 domains used to operate the service. The UK's Metropolitan Police Service arrested two men on suspicion of offering the platform.

---

## OAuth Device Code Authentication Under Scrutiny

The attack exploited OAuth device code authentication, a flow intended for devices like smart TVs that cannot display full web pages. This authentication method has been an increasing target for attackers because it requires minimal user interaction — victims simply enter a short numeric code rather than providing credentials directly.

Microsoft's disruption of EvilTokens highlights the growing use of AI tools in cybercrime, where automation allows even less-sophisticated actors to conduct large-scale account compromises that previously required significant technical expertise.

---

## Reference Links

- [Microsoft Disrupts AI-Assisted Platform (Ars Technica)](https://arstechnica.com/security/2026/09/microsoft-disrupts-ai-assisted-platform-that-compromised-12000/)

---

*Information is current as of September 23, 2026.*
