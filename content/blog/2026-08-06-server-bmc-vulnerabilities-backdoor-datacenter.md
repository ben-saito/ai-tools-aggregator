# Thousands of Servers Can Be Backdoored Through Vulnerable Motherboard Controllers

Security researcher HD Moore has uncovered more than a dozen new vulnerabilities in Baseboard Management Controllers (BMCs) — miniature computers embedded in enterprise server motherboards — sold by Hewlett-Packard Enterprise, Supermicro, Avocent, and other major manufacturers. The research, presented at the Black Hat security conference in Las Vegas, shows that BMCs remain a pervasive and under-monitored attack surface more than a decade after early warnings about the risks.

---

## What Are BMCs?

BMCs are specialized microcontrollers that run their own firmware, network stack, and maintain a dedicated IP address independent of the main server. Administrators rely on them to monitor hardware health, reboot machines remotely, and perform low-level management tasks — often without the main operating system's knowledge. The IPMI (Intelligent Platform Management Interface) protocol allows BMCs to operate independently and perform administrative tasks even when the server is powered down.

---

## The Attack Surface

Moore's large-scale scans revealed over 86,000 Internet-exposed BMC management services. More concerning is the internal corporate network scan, which found BMCs inside enterprise environments that are poorly monitored and rarely patched. Attackers who compromise a BMC gain deep, persistent access to the datacenter — effectively a "golden key" that survives operating system reinstalls and hardware upgrades.

"The end result is a pervasive, under-monitored, under-patched parallel attack surface that is both Internet-exposed and widespread inside corporate networks," Moore wrote.

---

## Why This Matters for AI Infrastructure

Modern AI training and inference deployments run on large server clusters in datacenters. These servers all rely on BMCs for out-of-band management. A BMC vulnerability could allow attackers to espionage AI models, corrupt training runs, or establish persistent access to high-value compute infrastructure. The fact that BMCs operate below the level of the main OS means traditional security tools miss them entirely.

---

## Disclosure Timeline

Moore is coordinating with BMC manufacturers before full vulnerability details are disclosed, giving them time to develop and deploy patches. Enterprise operators are advised to audit their BMC exposure, restrict management interfaces to dedicated out-of-band networks, and monitor for anomalous BMC activity.

---

## Reference

- [Ars Technica: Thousands of servers can be backdoored by exploiting buggy motherboard controllers](https://arstechnica.com/ai/2026/08/05/thousands-of-servers-can-be-backdoored-by-exploiting-buggy-motherboard-controllers/)

---

*This article is based on information from August 5, 2026.*
