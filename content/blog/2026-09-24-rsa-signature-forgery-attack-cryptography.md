# RSA Encryption Broken by New Signature Forgery Attack — What You Need to Know

A team of researchers from the University of California, San Diego, the University of Texas at Austin, and the University of Illinois has published a paper demonstrating a new attack on RSA encryption that bypasses the long-held assumption that factoring large integers is the only practical way to break RSA keys. The attack, which implements a variant of the number field sieve algorithm against RSA blind-signature implementations, allows attackers to forge valid RSA signatures without factoring the corresponding private key — a first in cryptographic research.

The finding was published on September 24, 2026, and has sent shockwaves through the cryptography community. Karsten Nohl, head of innovation at security firm Allurity, called it a "conceptual break-through" if it holds up under peer review.

---

## The Attack: How It Works

RSA is one of the most widely deployed public-key cryptosystems, underpinning secure communications across the internet. For decades, cryptographers believed the only way to forge RSA signatures was to first factor the private key — an operation considered computationally infeasible for key sizes of 2048 bits and above.

The new attack breaks this assumption by exploiting a weakness in RSA blind-signature implementations. Blind signatures are used in privacy-preserving protocols where a signer must produce a signature without seeing the content they are signing — a design used by anonymity networks like Tor, as well as privacy-focused systems from Cloudflare (Privacy Pass), Apple (Private Access Tokens), and others.

The attack works by leveraging an "oracle" — a weakness in certain RSA implementations that returns yes-or-no answers to specific queries. By performing a massive number of operations through this oracle, the attacker can compute valid RSA signatures without ever obtaining the private key.

"The only way to compute valid RSA digital signatures was to first compute the private key by factoring," explained Nadia Heninger, a University of California, San Diego professor and one of the paper's lead authors. "For 1024-bit RSA, this was thought to be very expensive, albeit probably doable if you have the computational resources."

---

## Security Implications: Immediate Threat Is Low, Long-Term Concern Is Real

The researchers are careful to note that the attack poses little to no practical threat in the immediate term. Even against deprecated 1024-bit keys, the computation required is beyond the reach of all but the most well-resourced attackers — nation-states or companies with massive compute budgets.

However, the attack drastically reduces the estimated security of RSA in a way that no one knew was possible before:

- 1024-bit RSA: security drops from 2^80 operations to 2^65
- 2048-bit RSA: drops to 2^90 (from 2^112)
- 4096-bit RSA: drops to 2^119 (from 2^146)

These numbers are expected to drop further. The research team coded all attacks by hand and used no GPUs or AI acceleration. The researchers state these tools will "almost certainly" further reduce the complexity.

The attack also highlights that RSA with PKCS or PSS padding — the standard format used in the overwhelming majority of today's RSA deployments — is not vulnerable to this attack. Only raw "textbook RSA" or specific blind-signature implementations are affected.

---

## Impact on Privacy Infrastructure

One concrete attack scenario targets Privacy Pass, a system used by Cloudflare and others to allow users to bypass CAPTCHAs without revealing their identity. An attacker would need to compromise a Cloudflare server and generate 2^43 signatures — a number Heninger notes is "on the same order of magnitude of the network traffic that Cloudflare has said publicizes per second."

The NSA and other intelligence agencies will likely use this research to accelerate the already-ongoing transition to post-quantum cryptography standards, which are resistant to both quantum computing attacks and this new signature forgery technique.

---

## The Cryptography Community Reacts

The research has generated significant discussion among cryptographers. Nohl noted that RSA was thought to be "as difficult to break as it is to factor large integers, at least so we thought."

The paper's authors stress the attack is theoretical and poses minimal immediate risk. However, it fundamentally changes the understanding of RSA's security properties and will accelerate the migration to post-quantum cryptographic standards already underway.

The research serves as a stark reminder that even well-studied cryptographic primitives can harbor unexpected vulnerabilities. As computing power increases and new algorithmic techniques emerge, the foundation of internet security requires constant vigilance and proactive migration planning.

---

## Reference Links

- [Ars Technica: There's a new way to break RSA that's faster than anything we've seen before](https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-fas)
- [Paper (researcher-hosted explainer)](https://)

---

*This article reflects developments as of September 24, 2026.*
