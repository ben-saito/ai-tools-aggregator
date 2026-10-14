# Researchers Expose Systematic Jailbreak Vulnerabilities in OpenAI and Google AI Models

---

Safety researchers have demonstrated that widely-used AI models from OpenAI and Google can be consistently tricked into generating nudity through relatively simple attack methods, exposing fundamental flaws in current content safety systems. The findings, presented at a security conference and reported by Ars Technica, highlight how models including GPT-4o and Google's Gemini series remain vulnerable to "off-the-shelf jailbreak machines" — automated tools that require no specialized knowledge to operate.

---

## How the Attack Works

The researchers employed a novel jailbreak technique that systematically probes model safety guardrails using a machine-generated approach. Unlike traditional manual jailbreaks that require creativity and specific phrasing, this method automates the discovery of prompts that bypass safety filters, making such attacks accessible to anyone with basic technical skills.

The attack exploits the fact that modern large language models (LLMs) must balance helpfulness with safety constraints. By iteratively refining prompts based on model responses, the attack system identifies pathways through safety filters that human attackers would be unlikely to discover through trial and error.

---

## Vulnerabilities Across Multiple Providers

The research tested models from OpenAI, Google, and several other major AI providers. Results showed consistent vulnerabilities across different architectures, suggesting that the underlying issue stems from fundamental design choices in how AI companies implement safety training rather than implementation-specific bugs.

The attack was particularly effective against image generation capabilities integrated into multimodal models. By chaining text and image generation capabilities, researchers could produce nudity that evaded filters designed to block explicit content in either modality alone.

---

## Industry Response and Safety Implications

OpenAI and Google both acknowledged the vulnerabilities. OpenAI stated that its usage policies prohibit the generation of explicit content and that the company continuously works to improve safety measures. Google similarly noted ongoing efforts to strengthen safety systems in Gemini.

The research comes as AI companies face increasing regulatory pressure to prevent abuse of their systems. The European Union's AI Act and emerging US regulations on AI safety both require providers to implement robust safeguards against known attack vectors.

---

## Technical Details of the Research

The research team demonstrated their attack method using a framework they call an "off-the-shelf jailbreak machine" — a system that combines automated prompt generation, response evaluation, and iterative refinement. The approach achieves high success rates across multiple model providers while requiring minimal customization for each target.

The findings suggest that current safety training techniques, which typically rely on human-labeled examples of prohibited outputs, struggle to anticipate all possible attack variations. The automated nature of the attack means that new jailbreaks can be generated faster than human review teams can identify and block them.

---

## The Arms Race in AI Safety

This research underscores the ongoing challenge of securing AI systems against adversarial inputs. As models become more capable, the attack surface expands — more powerful models can sometimes be more easily coaxed into harmful outputs through carefully constructed inputs.

The researchers recommend that AI companies invest in more robust safety architectures that can generalize to novel attack patterns rather than relying primarily on blocking specific known prompts. Until such improvements are deployed, the researchers advise caution when deploying AI systems in contexts where explicit content generation could cause harm.

---

## References

- [Ars Technica: OpenAI, Google AI models easily tricked into making nudes](https://arstechnica.com/tech-policy/2026/10/openai-google-pushing-new-ai-models-easily-tricked-into-making-nudes-researchers-say/)

---

*本文は2026年10月14日時点のものです*
