# AIR Raises $50M to Vet AI Agent Skills and Add-Ons

As enterprises deploy AI agents across increasingly critical workflows, a new security category has emerged: AI agent supply chain management. AIR, a startup emerging from stealth with $50 million in Sequoia-seeded funding, is positioning itself as the guardrail for this emerging attack surface.

---

## The Agent Supply Chain Problem

Unlike traditional software with fixed dependencies, AI agents interact dynamically with skills, plug-ins, MCP servers, and third-party add-ons that extend their capabilities. Each extension represents a potential entry point for malicious code, data exfiltration, or unintended system access.

AIR's platform addresses this by discovering agents running within an organization, continuously auditing the skills and add-ons they invoke, and blocking behavior that violates security policies. The company argues that as agents gain access to email, databases, code repositories, and customer systems, the need for runtime visibility and control becomes existential.

---

## How AIR Works

According to TechCrunch, AIR operates as a continuous monitoring layer rather than a point-in-time scanner. When an agent attempts to invoke a skill or access an external service, AIR intercepts and evaluates the action against defined policies.

Key capabilities include:

- **Agent discovery**: Automatically identifying AI agents deployed across an organization's infrastructure, including those running on third-party platforms
- **Skill auditing**: Cataloging every skill, plug-in, and MCP server each agent uses, building a software bill of materials for AI workflows
- **Behavioral blocking**: Preventing agents from invoking unapproved or newly flagged add-ons in real time
- **Compliance reporting**: Generating audit trails for regulated industries that require visibility into AI decision-making

---

## Why This Matters Now

The timing reflects a broader shift in how enterprises are deploying AI. Early deployments were largely informational — agents that queried data and summarized results. The next wave involves agents that take actions: sending emails, approving transactions, modifying records, and accessing multiple systems in sequence.

Each action chain multiplies risk. A single compromised skill in a multi-step workflow could cascade across systems that the agent has been granted access to. AIR's thesis is that without dedicated tooling, security teams have no way to see what agents are doing inside their infrastructure.

---

## Funding and Market Context

The $50 million seed round from Sequoia places AIR among the best-funded security seed startups this year. The investment signals confidence that AI agent security will become a standalone category as autonomous agents proliferate in enterprise environments.

Competitors include established security vendors adding agent-specific modules, as well as early-stage startups focused on specific angles such as MCP server validation and skill provenance tracking. AIR's approach — platform-level discovery and continuous policy enforcement — positions it against the broader category rather than individual attack vectors.

---

*AI agent security represents a fast-moving target as autonomous systems take on more operational responsibilities in enterprise environments.*
