# Malicious Google Ads Hit 619 Organizations in Tech Support Scam Campaign

A sophisticated malicious advertising campaign operated through Google Ads exposed hundreds of organizations to tech support scams that displayed fake browser lock screens masquerading as virus warnings, according to security firm Netskope. The campaign, which ran from August 31 to September 14, 2026, targeted users across 284 legitimate publisher websites including high-traffic maps, weather, real-estate, and sports sites.

---

## How the Scam Works

The malicious ads redirected users to a fake tech support page that displayed a full-screen warning claiming the user's computer was infected. The warning disabled the browser address bar, hid the cursor, blocked exit keys, and degraded browser performance with sound effects and lag to manufacture urgency. Users were instructed to call a call center number, at which point scammers would pressure them to pay hefty fees, grant remote device access, or divulge personal information.

A distinctive feature of the campaign was its triggering mechanism: the fake warnings appeared only after the user made a mouse movement. The delivery software was also encrypted and only decrypted in browser memory, conditions that allowed it to evade many endpoint security tools and possibly Google's own ad filters. The scam specifically targeted Windows and macOS users differently, with tailored warnings for each operating system.

---

## Scope and Impact

Netskope observed 619 customer organizations whose employees clicked on the malicious ads during the two-week period. None were successfully scammed because Netskope blocked the content. However, the firm noted its visibility covers only a tiny sliver of overall Internet activity, meaning the actual number of exposed users including victims is likely substantially higher. Approximately 62 percent of affected organizations were based in the United States, with Japan and Australia ranking second and third.

The campaign involved more than 250 distinct Google Ads campaign IDs distributed across at least 284 publisher sites, indicating a coordinated effort to weaponize Google's ad platform at scale.

---

## Google Responds

Google stated it has "zero tolerance for scams" and said it was actively investigating the campaigns while taking action against violating accounts. The company noted it blocked over 99 percent of violating ads before serving in the past year but did not explain how this particular campaign slipped through its filters.

Security researchers advise that no legitimate company will ever instruct users to call a phone number when their device is infected, and that closing the browser via task manager is the appropriate response to such warnings.

---

## Related Links

- [Ars Technica: Your uncle's frozen Mac says it's infected after viewing a Google ad](https://arstechnica.com/security/2026/09/google-ads-caught-delivering-convincing)
- [Netskope Threat Research](https://www.netskope.com)

---

*This article reflects information available as of September 25, 2026.*
