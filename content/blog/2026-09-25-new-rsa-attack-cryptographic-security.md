# New RSA Attack Redefines Cryptographic Security Benchmarks

A team of researchers from the University of California, San Diego, the University of Texas at Austin, and the University of Illinois has published a paper demonstrating a new attack on RSA encryption that bypasses the long-held assumption that factoring large integers is the only practical way to break RSA keys. The attack, which implements a variant of the number field sieve algorithm against RSA blind-signature implementations, allows attackers to forge valid RSA signatures without factoring the corresponding private key — a first in cryptographic research.

The finding, published on September 24, 2026, has sent shockwaves through the cryptography community. Karsten Nohl, head of innovation at security firm Allurity, called it a "conceptual break-through" if it holds up under peer review.

---

## The Attack: How It Works

RSA is one of the most widely deployed public-key cryptosystems, underpinning secure communications across the internet. For decades, cryptographers believed the only way to forge RSA signatures was to first factor the private key — an operation considered computationally infeasible for key sizes of 2048 bits and above.

The new attack breaks this assumption by exploiting a weakness in RSA blind-signature implementations. Blind signatures are used in privacy-preserving protocols where a signer must produce a signature without seeing the content they are signing — a design used by anonymity networks like Tor, as well as privacy-focused systems from Cloudflare (Privacy Pass), Apple (Private Access Tokens), and others.

The attack works by leveraging an "oracle" — a weakness in certain RSA implementations that returns yes-or-no answers to specific queries. By performing a massive number of operations through this oracle, the attacker can compute valid RSA signatures without ever obtaining the private key.

"The only way to compute valid RSA digital signatures was to first compute the private key by factoring," explained Nadia Heninger, a University of California at San Diego professor and one of the paper's lead authors. "For 1024-bit RSA, this was thought to be very expensive, albeit probably doable if you have the computational resources."

Applying the attack against deprecated 1024-bit keys took a handful of months on an academic CPU cluster — significantly less than estimates for 1024-bit factoring, which would require resources only available to nations or large companies.

---

## Security Implications: Immediate Threat Is Low, Long-Term Concern Is Real

The researchers are careful to note that the attack poses little to no practical threat in the immediate term. Even against deprecated 1024-bit keys, the computation required is beyond the reach of all but the most well-resourced attackers.

However, the attack drastically reduces the estimated security of RSA in a way that no one knew was possible before. The security level reductions include:

- 1024-bit RSA: drops from 2^80 operations to 2^65
- 2048-bit RSA: drops to 2^90 (from 2^112)
- 4096-bit RSA: drops to 2^119 (from 2^146)

These numbers are expected to drop further. The research team cautions that while 2048-bit and 4096-bit keys remain secure for now, the method represents a fundamentally new attack vector that was not previously anticipated.

The National Security Agency, National Institute of Standards and Technology, and European Union Agency for Cybersecurity are all said to be evaluating the findings.

---

## What This Means for Practice

For most organizations, the immediate action is to accelerate migration from 1024-bit RSA keys, which should have already been deprecated. The more significant concern is the conceptual precedent: cryptographers now have proof that RSA signatures can be forged without factoring, which may inspire further research into faster methods.

Blind signature implementations used by major internet infrastructure companies — including Cloudflare's Privacy Pass, Apple's Private Access Tokens, and Tor's anonymity network — may require protocol updates to mitigate oracle-based attacks.

---

## Reference Links

- [Ars Technica: There's a new way to break RSA](https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before/)
- [Research Paper: New Signature Forgery Attack on RSA](https://)

---

*This article was generated from Ars Technica reporting published September 24, 2026.*
