# Defcon 2026: The Badge That Lets Hackers See Inside Its Own Security Chip

---

## A Hacker Badge With a Difference

Each year's Defcon badge aims to outdo previous designs, but Defcon 2026 takes a different approach. Instead of the badge design being the star, it is what is inside the hardware that truly stands out.

Defcon asked legendary hardware hacker Andrew "bunnie" Huang to create the badges — and they include an innovative open source chip that Huang designed, aiming to advance the state of security, transparency, and trustworthiness in computing.

---

## The Baochip-1x: Open Source Silicon You Can Verify

The chip — called the **Baochip-1x** — is a "mostly" open source microcontroller three years in the making. It fulfills Huang's years-long dream of a chip whose security is verifiable.

Huang has published the source code for the Baochip's operating system, firmware, processor core, cryptographic engines, and input-output system on GitHub, making these components available for inspection and use.

The chip's core module can be removed and used after the conference as a **hardware security token**, giving the badge a second life beyond Defcon.

---

## The Core Innovation: Transparent Packaging

Computer chips are traditionally black-box components with an opaque casing that obscures their circuitry. Even previous open source chips that made their specs and code available for users to examine were encased in impermeable plastic, creating a supply-chain problem: users had to trust that nothing changed during manufacturing.

Unlike conventional chips, the Baochip is packaged so that **infrared light can be shone through the back of the silicon**, allowing the chip's internal structures to be visually inspected. Researchers can compare what they see against the published design, rather than having to trust that the manufactured chip matches the design.

---

## Why This Matters for Hardware Security

The traditional chip supply chain requires trust at every step. A chip designer specifies a secure system, but the manufactured product that arrives in a developer's hands may differ from the design — either through error or deliberate modification. The Baochip's transparent packaging allows anyone to verify the silicon matches the specification, closing a critical gap in hardware security verification.

---

## Reference Links

- [Ars Technica: Defcon's new badge is a security key you can see inside](https://arstechnica.com/security/2026/08/defcons-new-badge-is-a-security-key-you-can-see-inside/)
- [Baochip on GitHub](https://github.com)

---

*This article is based on information from August 1, 2026.*
