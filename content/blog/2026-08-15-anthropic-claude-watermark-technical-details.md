# Anthropic Shares Details on Claude Watermark System: Editing Detection and Code Impact

On August 15, 2026, Anthropic published detailed information about how its Claude watermark system works, including specific technical details about code generation impact, editing detection, and the SynthID-Text foundation.

---

## How the Watermark Works: Low-Stakes Choices and Indistinguishable Text

According to Anthropic's published information, the watermark operates as "low-stakes choices" - for example, choosing between "overcast" and "grey" for semantic equivalents, embedding a portion of the algorithm's selection as a watermark. The watermarked text is indistinguishable from non-watermarked text to readers.

"Watermarking does not impact the quality of Claude's output," the company stated. "To a reader, a watermarked response is indistinguishable from an unwatermarked one."

---

## Editing Detection: Light Editing Does Not Remove Watermark

Can the watermark be hidden by editing? Anthropic stated: "Light editing probably won't remove the watermark completely," while "a complete rewrite where every word is changed" will remove it. "In the latter case, of course, it's arguable whether the text can any longer be described as AI-generated."

For code specifically, the watermark will be less present because Claude must create working code - there is no freedom to choose between multiple equivalent options. However, in areas where there is an arbitrary choice between particular words or terms within code - such as comments - the watermark can be applied.

---

## SynthID-Text Foundation and Industry API

Anthropic confirmed it will use the SynthID-Text approach that the Google DeepMind team outlined in 2024, and plans to release a watermark detection API. Additionally, "other major model developers have signed the same Code of Practice and will be implementing their own watermarks."

---

## User Backlash: "Conspiracy Against Innocent Users"

On Reddit, users characterized the watermark as "a conspiracy against innocent Claude users," while others argued "The only reason you wouldn't want this is to lie to people." In professional contexts such as legal work, the watermark's detection capability could effectively function as a monitoring tool.

---

## Reference

- [TechCrunch: Anthropic shares more details about how Claude's new watermarks will work](https://techcrunch.com/2026/08/15/anthropic-shares-more-details-about-how-claudes-new-watermarks-will-work/)

---

*This information is as of August 15, 2026.*