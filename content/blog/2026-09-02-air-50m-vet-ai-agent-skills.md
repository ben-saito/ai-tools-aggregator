# AIR Raises $50M to Help Companies Vet AI Agent Skills and Add-ons

A startup called AIR has raised $50 million in Series A funding to tackle one of the emerging risks in enterprise AI adoption: the tools and extensions that AI agents use. AIR's platform discovers agents running within an organization, continuously audits the skills and add-ons they rely on, and blocks any behavior deemed risky or non-compliant.

---

## The Agent Ecosystem Problem

Enterprise AI agents are rapidly moving from pilot programs to production deployments. Unlike standalone language models, agents interact with external tools — calling APIs, reading and writing files, executing code, accessing databases, and invoking third-party services. Each of these capabilities is typically implemented as a "skill" or "add-on" that extends the agent's base capabilities.

This extensibility is also a risk surface. Third-party skills may have broad permissions that were not fully vetted by the organization's security team. A single compromised or poorly designed skill can become a pivot point for data exfiltration or unauthorized actions.

Security researchers have already demonstrated attacks where malicious skills harvest sensitive data from agent memory, exfiltrate API credentials, or manipulate agent behavior through prompt injection in skill descriptions.

---

## AIR's Approach: Continuous Agent Discovery and Vetting

AIR's platform operates as an internal security layer between agents and the skills they invoke. When an agent attempts to use a skill for the first time, AIR intercepts the call and evaluates the skill against the organization's security policies.

The vetting process checks multiple dimensions: the skill's requested permissions, its source and update history, network behavior patterns, and data access scope. Skills that request excessive permissions or exhibit anomalous behavior are flagged or blocked.

Beyond static vetting, AIR also monitors agent-skill interactions in real time. This behavioral analysis can detect scenarios where a previously-approved skill begins exhibiting suspicious patterns — such as accessing files it has never touched before, or communicating with unexpected external endpoints.

The platform integrates with major agent frameworks including LangChain, AutoGPT, and vendor-specific enterprise agent platforms. It supports organizations running multiple agents across different departments, providing centralized visibility and policy enforcement.

---

## Funding and Team

The $50 million Series A was led by Andreessen Horowitz, with participation from existing investors. The round values AIR at approximately $450 million post-money.

The company's founding team includes engineers with backgrounds in security research and cloud infrastructure. The CEO previously led threat detection teams at a major cloud provider.

---

## Enterprise Implications

As agents proliferate in enterprise environments, the attack surface expands significantly. Traditional endpoint and network security tools were not designed to monitor the specific trust relationships between agents and their dynamic tool invocations.

AIR's emergence reflects a broader pattern in enterprise security: as AI capabilities become more deeply integrated into business workflows, security controls must evolve to cover the new interaction patterns that AI agents introduce. The skill and add-on ecosystem for agents is analogous to the app ecosystem for mobile devices — with similar security and privacy implications.

---

## Reference Links

- [TechCrunch: AIR raises $50M to help companies vet AI agent skills and add-ons](https://techcrunch.com/2026/09/01/air-raises-50m-to-help-companies-vet-the-skills-and-add-ons-ai-agents-use/)

---

*This article reflects information available as of September 1, 2026.*
