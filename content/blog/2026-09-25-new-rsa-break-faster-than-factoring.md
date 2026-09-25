# New RSA Break Discovered — First Faster-Than-Factoring Attack in Decades

A team of researchers has demonstrated a new method for breaking RSA encryption that is faster than classical integer factorization, the approach that has underpinned RSA security for over four decades. The findings, published in a preprint and reported by Ars Technica on September 24, 2026, represent the most significant advance in RSA cryptanalysis since the algorithm was first described in 1977.

## Background

RSA (Rivest–Shamir–Adleman) secures a vast portion of internet communications, from HTTPS certificates to encrypted email and VPN tunnels. The algorithm's security relies on the computational difficulty of factoring large composite numbers into their prime factors. For decades, cryptographers believed factoring was the only practical path to breaking RSA.

## The New Attack

The researchers found a novel mathematical approach that exploits structural properties in how RSA keys are generated. Unlike previous attacks that required factoring large integers, this method works by analyzing the public key itself, significantly reducing the computational steps needed to recover plaintext. The attack remains expensive for very large key sizes but represents a qualitative improvement over prior methods.

The researchers responsibly disclosed their findings to major standards bodies before publication, giving organizations time to assess their exposure and plan migration to larger key sizes or alternative algorithms such as elliptic-curve cryptography (ECC).

## Implications

The cryptographic community is still evaluating the full scope of the vulnerability. Current RSA-2048 and RSA-4096 keys are not immediately broken, but the result changes the risk calculus for long-lived keys. Security researchers are urging organizations to accelerate plans to adopt post-quantum cryptographic standards, which are resistant to both classical and quantum attacks.

"This is not an emergency, but it is a wake-up call," one cryptographer noted. "We have known for years that RSA's security margin is eroding. This result confirms we need to move faster."

## Post-Quantum Transition

The U.S. National Institute of Standards and Technology (NIST) finalized several post-quantum cryptographic standards in 2024, including ML-KEM (formerly CRYSTALS-Kyber) and ML-DSA (formerly CRYSTALS-Dilithium). The new RSA result strengthens the economic argument for organizations that have delayed their migration to these standards.

---

*This article is based on reporting from Ars Technica published on September 24, 2026.*
