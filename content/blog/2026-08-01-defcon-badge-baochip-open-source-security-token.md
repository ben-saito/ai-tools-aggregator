# Defcon 2026 Badge Doubles as Open-Source Hardware Security Token

Defcon 2026 has unveiled its conference badge — a hardware security token containing an open-source chip designed by legendary hardware hacker Andrew "bunnie" Huang, allowing attendees to inspect the silicon itself after the conference ends.

---

## The Baochip-1x: Open-Source Silicon You Can Verify

Huang spent three years developing the Baochip-1x, a "mostly" open-source microcontroller whose source code for the operating system, firmware, processor core, cryptographic engines, and input-output system is published on GitHub for public inspection. Unlike conventional chips encased in opaque plastic, the Baochip is packaged so that infrared light can be shone through the back of the silicon, allowing the chip's internal structures to be visually inspected against the published design.

"The goal is to try to get a chip that we can trust down to the very core, down to the transistor," Huang told WIRED. "You can actually see the RAM arrays on the chip."

---

## Supply Chain Transparency Problem

Traditional computer chips are black-box components — users must trust that the manufactured chip matches its specification, with no way to verify the silicon itself. Even open-source chip designs that published their specs and code previously faced a supply-chain gap: the chips were manufactured and packaged in ways that made internal inspection impossible.

The Baochip solves this by using a transparent packaging process that allows infrared imaging of the silicon die. At Defcon, Huang plans to demonstrate the technique, letting attendees compare what they see under an infrared light against the published design.

---

## Manufacturing: A Three-Year Piggyback Strategy

Building a chip from scratch costs millions in fabrication. Huang got his break when Crossbar, a company seeking to create a new open-source secure chip, approached him. Huang agreed to help on one condition: he could piggyback his CPU design onto their chip wafer, sharing a single manufacturing run rather than funding a separate one.

"They look at it as, if they put me on the chip, they get two products for the price of one," Huang said.

The result is a Crossbar chip that includes both Crossbar's microprocessor and Huang's design. The Baochip is essentially the same chip but with the Crossbar microprocessor disabled, since Huang lacks distribution rights to that component.

---

## A Badge That Outlives the Conference

The badge's core module can be removed and used as a hardware security token after Defcon ends, giving the conference swag a practical second life. The badge represents what Huang calls a years-long "story arc" toward verifiable, trustworthy silicon — computing infrastructure whose security can be audited rather than assumed.

---

## References

- [Ars Technica: Defcon's new badge is a security key you can see inside](https://arstechnica.com/security/2026/08/defcons-new-badge-is-a-security-key-you-can-see-inside)

---

*This article is based on information from August 1, 2026.*
