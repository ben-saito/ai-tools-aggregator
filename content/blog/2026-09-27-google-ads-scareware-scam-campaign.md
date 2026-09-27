# Google Ads Found Distributing Sophisticated Scareware to Millions of Users

A sophisticated tech support scam campaign leveraged Google Ads to display fake security warnings across high-traffic websites, convincing users their computers were frozen and infected, Netskope researchers reported on September 25, 2026.

---

## How the Scam Works

The malicious ads appeared on maps, weather, real-estate, document-hosting, and sports sites. When users visited these pages, the ads triggered a fake browser lock screen that appeared to seize up on a fabricated security warning. The warning filled the entire screen, hid the cursor, and prevented any interaction with the browser.

Victims who called the phone number displayed on the fake warning were then urged to pay hefty fees and grant remote access to their computers. Approximately 62 percent of the organizations running these scam operations were based in the US, with Japan and Australia accounting for the second and third most common origins.

The software kit delivering these fake warnings was designed to be highly stealthy. It closely mimicked the signs of a real computer infection, and the browser address bar no longer appeared during the attack. The warnings only displayed after a user made a mouse movement, and the malicious code was encrypted, only decrypted and displayed in browser memory. Both conditions prevented many endpoint security tools from detecting the threat.

---

## Google Responds

Google stated it has "zero tolerance for scams" and said it is actively investigating the campaigns, promising to take action against accounts that violate its policies. The company did not specify what caused its automated scanners to miss the campaign or confirm whether the ads have been fully removed from its platform.

Netskope researchers noted that the sophisticated tradecraft behind the campaign turned an ordinary ad click into what appeared to be a seizing browser with a convincing security warning, making it difficult for average users to distinguish the scam from a genuine alert.

---

## Prevention Guidance

Security experts emphasize that no legitimate company will advise users to call a phone number when their device appears infected. Users who encounter tech support scams should not call the displayed number, should not grant remote access to unsolicited callers, and should close the browser or restart their computer to dismiss the fake warning.

---

## Technical Details

The campaign represents a significant escalation in tech support scam sophistication. By leveraging Google's ad platform for initial distribution, the operators gained access to millions of potential victims across legitimate websites. The use of encrypted payloads, memory-only decryption, and behavioral triggers for displaying warnings demonstrates the increasing technical complexity of consumer-facing cybercrime.

The fact that these ads passed Google's automated review systems raises questions about the effectiveness of current ad verification processes, particularly for ads containing JavaScript-based interactive content that behaves differently at runtime than at submission time.

---

*Scareware is a type of malicious software that uses fear tactics to trick users into paying for fake or unnecessary security products or services. The findings were published by Netskope on September 25, 2026.*
