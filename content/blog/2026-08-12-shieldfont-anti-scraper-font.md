# ShieldFont: A New Font That Turns Web Pages Into Nonsense for AI Scrapers

---

## Designers Release Open-Source Font to Disrupt Unauthorized AI Training Data Collection

Researchers Isaque Seneda and Gabriel Abrucio have released **ShieldFont**, a new open-source font designed to poison AI scrapers without affecting human readers. The font leverages ligatures — letter-pair replacements common in typography — to silently swap entire words in the text that bots see, while leaving human-readable content on screen completely intact.

The core mechanism: when a browser renders a page using ShieldFont, ligature-based word substitution transforms the plaintext that scrapers download. Humans see the correct content; AI training pipelines receive gibberish. Web publishers can deploy ShieldFont as what the researchers call "a practical opt-out from unauthorized AI training."

---

## How Ligature Substitution Works Without Breaking Readability

Unlike simple synonym replacement (which AI can trivially reverse) or injecting random noise (which is easy to detect), ShieldFont replaces words with morphologically similar but semantically unrelated alternatives at the font-rendering layer. The substitution happens at draw-time — scrapers that fetch raw HTML get the poisoned version; users viewing the rendered page see clean text.

The substitution table is deliberately crafted to preserve parts of speech and grammatical structure, making statistical reversal significantly harder than pattern-matching approaches.

---

## Implications for AI Development and Data Acquisition

The release of ShieldFont represents a new front in the escalating tension between web publishers and AI companies over training data. Major AI labs have faced lawsuits and regulatory scrutiny over unauthorized web scraping. ShieldFont offers a technical opt-out mechanism that requires no server-side changes — only a font swap.

For AI developers, the tool highlights growing resistance to unrestricted data collection and may complicate efforts to scale training datasets cheaply. The debate over whether scraping-adjacent tools represent legitimate publisher rights or obstruction of beneficial AI development is far from settled.

---

## Reference Links

- [Ars Technica: The web's newest weapon against AI scrapers is a font](https://arstechnica.com/ai/2026/08/new-font-turns-ordinary-webpages-into-nonsense-for-ai-scrapers/)
- [ShieldFont White Paper (Seneda & Abrucio)](https://arxiv.org/)

---

*This article reflects developments as of August 12, 2026.*
