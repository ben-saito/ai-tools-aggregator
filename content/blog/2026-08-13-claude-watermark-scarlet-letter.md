# Claude’s New Watermark Marks Everything Claude Processes

Anthropic has introduced an invisible watermark system for Claude that flags any content the model processes—regardless of whether the content was AI-generated or merely edited by a human. The system, described as a “Scarlet Letter” approach internally, embeds watermarks into text outputs and attaches digitally signed provenance metadata to generated files.

The watermark deploys globally, going beyond EU AI Act requirements. Under the regulation, content where AI performs “an assistive function for standard editing”—such as grammar correction—is exempt from marking requirements. However, Anthropic’s model-level watermark cannot distinguish between wholesale AI generation and a simple comma fix, meaning Claude may flag content the law was designed to leave untouched.

“We are deploying this from day one for all new models offered globally,” Anthropic stated. The company plans to release a detection tool that will allow external testing of how thoroughly the watermarking actually works.

The move has already drawn criticism from Claude users who argue the system will catch them using the AI for legitimate editing work. Social media reactions have called the policy a “travesty,” particularly given the broad scope of what Claude now considers “processed” content warranting a watermark.

---

## Technical Details

The watermark operates at the model level rather than the application layer, meaning it activates for any text Claude processes—from drafting assistance to editing human-written work. This approach differs from content-level watermarking that would only mark genuinely AI-generated passages.

Anthropic confirmed the system uses embedded watermarks in text output and signed metadata for file generation. The company has not disclosed the specific technical implementation, promising transparency only when the detection tool is released.

---

## EU AI Act Complications

The EU AI Act’s Article 50 on transparency requires watermarking only for content substantially transformed by AI. The regulation explicitly excludes “assistive functions” like grammar correction from marking requirements. Anthropic’s blanket approach therefore exceeds the legal minimum in EU jurisdictions while also applying the same standards worldwide.

Legal experts note that the model cannot determine the degree of AI transformation in any given output, making targeted exemption technically impractical without major architectural changes.

---

## Implications for AI Detection

The effectiveness of the watermark remains untested until Anthropic releases its detection tool. Without external verification, the claim that all processed content is marked cannot be independently confirmed. Privacy researchers have questioned whether the watermark could be stripped by adversaries, and whether it could create false positives for human-written content edited through Claude.

The broader industry trend toward watermarking reflects pressure from regulators worldwide. Anthropic’s approach signals a willingness to exceed compliance minimums, potentially setting a standard other labs may follow.

---

## Reference

- [Ars Technica: Claude’s new Scarlet Letter watermark is invisible — for now](https://arstechnica.com/ai/2026/08/13/claudes-new-scarlet-letter-watermark-is-invisible-for-now/)

---

*(本文は2026年8月13日の情報に基づいています…)*
