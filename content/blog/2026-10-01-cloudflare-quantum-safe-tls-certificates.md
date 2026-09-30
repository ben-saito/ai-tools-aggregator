# Cloudflare to Issue Quantum-Safe TLS Certificates

Cloudflare announced plans to issue quantum-proof TLS certificates, becoming one of the first major certificate authorities to offer post-quantum cryptography to all users.

---

## The Quantum Threat to Current Encryption

Current TLS encryption relies on algorithms like RSA and ECC, which would be vulnerable to attacks from sufficiently powerful quantum computers. While large-scale quantum computers capable of breaking current encryption do not yet exist, the threat of "harvest now, decrypt later" attacks — where adversaries collect encrypted data today to decrypt when quantum capability arrives — has driven urgency for migration.

---

## Cloudflare's Approach

Cloudflare plans to use an open source platform that issues both classic TLS certificates and post-quantum equivalents known as Merkle Tree Certificates. The hybrid certificates will be free to both paying and non-paying users.

To establish trust across the TLS ecosystem, Cloudflare is acquiring a trusted certificate root from CA GlobalSign. This acquisition allows Cloudflare to issue certificates immediately recognizable by browsers and operating systems that already trust GlobalSign's root.

The company says the implementation will allow millions of websites to enable post-quantum cryptography "at the flip of a switch" without requiring significant technical changes.

---

## Timeline and Availability

Cloudflare has not announced a specific launch date, but the initiative represents a significant acceleration in post-quantum cryptography deployment. The company is working with browser vendors and operating system developers to ensure broad compatibility.

---

## Reference Links

- [Ars Technica: Cloudflare plans to issue quantum-safe TLS certificates](https://arstechnica.com/security/2026/09/cloudflare-plans-to-issue-quantum-safe-tls-certificates/)

---

*This article is based on information available as of September 30, 2026.*
