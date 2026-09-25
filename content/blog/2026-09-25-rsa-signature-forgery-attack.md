# New RSA Signature Forgery Attack Drastically Reduces Key Security

A team of researchers has demonstrated a fundamentally new way to break RSA encryption that does not rely on factoring large integers — the approach cryptographers have assumed for decades was the only path to compromising RSA keys. The attack, developed by researchers including Laura Shea and Nadia Heninger from the University of California at San Diego, enables signature forgery at computational costs orders of magnitude below previous estimates.

---

## A Conceptual Breakthrough in Cryptanalysis

The practical risk to real-world systems remains limited in the near term. The attack specifically targets blind-signature implementations of RSA, a variant used in privacy-preserving authentication protocols. The most prominent example is Privacy Pass, deployed by Apple and Cloudflare to allow users to authenticate without revealing their identity.

The research describes a variant of the number field sieve algorithm — first invented in 2007 — combined with an oracle that allows attackers to gather enough information from cryptographic responses to forge signatures without ever computing the private key.

"RSA is as difficult to break as it is to factor large integers, at least so we thought," said Karsten Nohl, head of innovation at Allurity. "The researcher suggests that you can practically break RSA without cracking its key."

---

## Security Level Reductions: From Nations-Only to Commodity Hardware

The most alarming aspect of the research is the dramatic reduction in computational requirements. Previous estimates placed 1024-bit RSA factoring at resources only available to nation-states or large tech companies — on the order of tens of millions of dollars in computation time. The new forgery attack reduces this to approximately 1,380 CPU core-years, achievable on academic infrastructure.

The impact extends across all key sizes. The attack drops security levels from 2128 (the minimum standard set by NIST, NSA, and ENISA) down to:

- **1024-bit RSA:** 265 operations (previously 280 for factoring)
- **2048-bit RSA:** 290 operations (previously 2112 for factoring)
- **4096-bit RSA:** 2119 operations (previously 2144 for factoring)

For 1024-bit keys specifically, the researchers used a handful of months on an academic CPU cluster. While 2048- and 4096-bit keys remain computationally expensive to attack, the reduced security margins mean that organizations relying on longer RSA keys are no longer in a fundamentally different category of security than those using deprecated 1024-bit keys.

The researchers note that their implementation used no AI or GPUs. They expect that GPU acceleration and machine learning optimizations would reduce these numbers further — potentially making 2048-bit RSA attacks practical for well-resourced adversaries.

---

## Limited Immediate Risk, Significant Long-Term Implications

The overwhelming majority of RSA usage today relies on PKCS or PSS padding, which the attack does not break. These padding schemes add structured data to plaintext before encryption, preventing the blind-signature oracle that enables the forgery attack.

Privacy Pass implementations that rotate keys regularly further reduce attack success probability, though the researchers note that Cloudflare alone handles network traffic equivalent to the required 243 oracle queries in approximately a day.

The more pressing concern is the cryptographic community's assumption that RSA's security scaled predictably with key size. The new attack invalidates that assumption in a way that favors smaller keys less than previously believed.

"Cryptographers thought that the only way to compute valid RSA digital signatures was to first compute the private key by factoring," Heninger explained. "For 2048-bit RSA, it was thought to be totally out of reach. The forgery attack changes that calculus."

---

## Accelerating Post-Quantum Migration

The research arrives at a moment when the cryptographic community is already working urgently to transition away from RSA and other vulnerable algorithms toward post-quantum cryptography. NIST has been running a multi-year standardization process for post-quantum algorithms, with several candidates already finalized.

The new attack adds another pressure point. Even setting aside quantum computing — which would eventually break RSA entirely via Shor's algorithm — RSA's security margin against classical attacks is now significantly lower than previously understood.

The paper authors have published a more accessible explainer, and the work is expected to undergo peer review in the coming months.

---

## References

- [There's a new way to break RSA that's faster than anything we've seen before](https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before/) (Ars Technica)
- [Privacy Pass Protocol](https://github.com/privacy-pass/issuance) (GitHub)
- [NIST Post-Quantum Cryptography Standardization](https://csrc.nist.gov/projects/post-quantum-cryptography) (NIST)

---

*本文の情報は2026年9月25日時点のものです。*
