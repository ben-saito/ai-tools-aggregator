# Google Undercover Analyst Infiltrated TeamPCP Supply-Chain Hacking Gang

Google's threat intelligence group ran an undercover informant inside TeamPCP, the notorious hacker collective responsible for one of the largest software supply-chain attacks in history—breaching over a thousand companies by tainted open-source libraries, a Dune-themed self-spreading worm, and AI-generated zero-day exploits.

---

## Inside the Largest Supply-Chain Hack in History

Before two of its alleged members were arrested in Australia last month, TeamPCP carried out an unprecedented hacking campaign. It compromised hundreds of open-source programs, hijacked developer accounts, and released a worm called Mini Shai-Hulud—named after the sandworms in Dune—to automate the spread of its malware. The group ultimately breached GitHub, data firm Mercor, employee devices at OpenAI, the European Commission, and many others.

During the peak of TeamPCP's campaign, Google's own undercover analyst was invited into the group's inner circle. According to Google Threat Intelligence Group researcher Austin Larsen, speaking at SentinelOne's LABScon research conference, one of Google's personas had been building trust for months before being added to the group.

"So essentially, almost day one, Mandiant was watching everything behind the scenes," Larsen told WIRED.

The Google analyst gained access to TeamPCP's server storing over half a million stolen user credentials, including usernames, passwords, and access tokens the group planned to use for extortion. Rather than alerting individual victims—a process too slow given the scale—Google reached out directly to cloud providers like Amazon Web Services and Microsoft to revoke credentials, preventing hackers from exploiting them.

---

## AI-Generated Zero-Day Exploit

Perhaps most significantly, Google's inside visibility revealed that a TeamPCP member was using an AI tool to develop a zero-day exploit targeting a widely-used login platform's two-factor authentication. Google obtained a copy of the AI-generated exploit code, verified it worked with minor tweaks, and warned the developer—who patched the vulnerability before it could be exploited. This represents a rare documented case of an in-the-wild AI-created hacking technique.

TeamPCP also partnered with ShinyHunters, another major cybercriminal group, which later betrayed them—sharing TeamPCP's internal chat logs with Larsen without realizing he already had access through Google's mole.

---

## Tracking the Hackers

Through traditional detective work and the operational security mistakes of one accused member, Google traced TeamPCP's activities to Ruben Ian Thomson, an Australian in his early 20s. Thomson allegedly used the handle sheepstealing and registered accounts with his real email. When Thomson moved stolen data to a new server backed up to his personal Google Drive, Google passed the tip to the FBI. Thomson was arrested by Australian police shortly after.

Google's investigation coincided with the launch of its Cyber Disruption Unit, a more aggressive approach to combating cybercrime.

"We have put an emphasis on disruption," Larsen said. "Writing reports can only be so useful. Taking action to protect users and customers—that is the next step."

---

## Reference Links

- [Ars Technica: An undercover Google analyst infiltrated a notorious supply-chain hacking gang](https://arstechnica.com/security/2026/09/20/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang)
- [Google Threat Intelligence Case Study (May 2026)](https://cloud.google.com/blog/topics/threat-intelligence)

---

*（本文の情報は2026年9月20日時点のものです）*
