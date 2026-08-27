# Claude, Codex, and Hermes Installed Unowned Code Inside Corporate Networks

A new investigation has found that AI coding assistants including Anthropic's Claude, OpenAI's Codex, and Microsoft's Hermes have been installing code inside corporate networks that nobody owns or maintains. The discovery raises serious security concerns about the proliferation of AI-generated code in enterprise environments.

The potentially dangerous content was found in llms.txt and llms-full.txt files, an emerging web convention that provides machine-readable summaries for AI systems. Researchers discovered 227 install commands in corporate documentation pointing at code that has no owner, no maintenance track, and no security review.

The files represent a growing problem as more companies adopt AI coding tools: unsigned, unverified code appearing in enterprise systems with no clear accountability chain. When an AI assistant generates and installs code from these files, it creates potential attack surfaces that security teams cannot track or audit.

---

## The llms.txt Security Gap

The llms.txt convention was designed to help AI systems understand website content, but researchers found it is being used to distribute executable code that gets installed without proper vetting. In corporate environments, this means AI assistants can silently introduce unvetted binaries and scripts into infrastructure.

The issue is compounded by the fact that AI coding assistants often have permission to execute code and install packages. When combined with unverified llms.txt sources, this creates a pathway for potentially malicious code to enter enterprise systems.

Security teams are now urged to audit their AI assistant configurations and block automatic code installation from unverified sources.

---

## 参考リンク

- [Ars Technica: Claude, Codex, and Hermes installed unowned code inside corporate networks](https://arstechnica.com/security/2026/08/claude-codex-and-hermes-installed-unown)

---

*（本文の情報は2026年8月27日時点のものです。）*
