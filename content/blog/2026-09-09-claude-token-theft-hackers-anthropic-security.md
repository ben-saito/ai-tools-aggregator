# Hackers Stealing Claude Tokens: A New Attack Vector for AI Subscriptions

When Grant De Swardt, an independent AI consultant in East Sussex, U.K., checked his Claude Max 20x account on August 4, 2026, he expected to see his normal usage. Instead, his token consumption was climbing even though he had not been working. He disabled everything attached to Claude. He paused scheduled Cowork tasks. He turned off Dispatch and cloud execution. He confirmed there was no active local Claude Code task running. Token consumption still increased — from 45% to 55% — while he performed zero work.

That controlled interval became the clearest evidence that something was wrong with his account.

---

## How the Attack Worked

De Swardt contacted Anthropic and asked for an itemized breakdown of what was consuming his tokens. Anthropic did not provide one, but the company agreed something was anomalous. It suspended his paid account, invalidated all sessions and server-side Claude Code tokens, and issued a partial refund of GBP 44.49 for the remaining time on his USD 200-per-month subscription.

The suspension caused immediate business disruption. De Swardt's job is setting up AI agents for small and mid-size businesses — tasks like automatically loading purchase-order data from emails into accounting software. He relies on agents throughout his own business operations as well: daily admin tasks, website design, and coding. "Like everything is just running through AI these days," he told TechCrunch.

After investigating, Anthropic identified the mechanism: a compromised Claude session key had been used to mint unauthorized Claude Code OAuth tokens. The company told De Swardt the account "appeared to have been used by an unauthorized-looking third-party service to handle activity for other people." Anthropic could not determine exactly how the attacker obtained access. The evidence, the company said, was consistent with either credentials or session data being taken without De Swardt's knowledge, or with the account having been connected to an outside service.

The core vulnerability: Anthropic's account support tracks total token usage but does not provide itemized breakdowns. A user cannot see which sessions, tools, or authorized applications consumed which tokens. This made the theft difficult to detect — and potentially undetectable for months.

---

## It Was Not an Isolated Incident

De Swardt posted his experience on Reddit. After 80 comments, he discovered he was not alone. Other Claude users reported similar experiences:

- One user said their account was "auto-upgraded without my consent, my credit card got charged, and the usage shot from 0% to 100% automatically without me even touching it"
- Another saw usage jump from 0 to 49% in 12 minutes, despite only using Claude for a couple of prompts and a web search
- A third reported their account burned through its maximum tokens every day for three consecutive days without any personal use

Two affected users posted emails from Anthropic acknowledging the theft. The company's warning message read: "We have recently become aware of a bad actor that is using common infostealer malware to steal Claude login sessions from people's computers, then using those login sessions to access Claude accounts and consume their usage."

Infostealer malware is a well-established category of malicious software that steals saved passwords, session data, and login credentials from a victim's machine. Anthropic told users the malware did not originate from using Claude itself — such malware can be picked up from downloading infected software or clicking on infected advertisements across the broader web.

When Anthropic detected suspicious activity on an account, it signed the user out, invalidated existing authorizations, issued refunds where appropriate, and warned users that they may have malware on their computers.

---

## Why This Matters for AI-First Businesses

De Swardt's Claude account was reinstated after approximately two weeks. However, the experience revealed structural gaps in how AI platforms handle security and transparency for high-volume professional users.

The most immediate problem is the lack of itemized usage visibility. Professional AI users — consultants, developers, agencies — often manage multiple projects and clients through a single account. Without granular visibility into which sessions or authorized applications are consuming tokens, detecting unauthorized use depends entirely on noticing unusual total-usage spikes. This is unreliable and slow.

The second problem is session token security. Unlike API keys, which users can rotate after suspecting compromise, OAuth session tokens for web-based AI products may persist longer and offer fewer revocation controls. An attacker who obtains a session token through infostealer malware can continue using the account until the platform detects the anomaly or the user manually reviews and invalidates all sessions.

De Swardt's conclusion was blunt. He cancelled his Claude subscription and switched to Cursor, which offers the ability to use multiple models including more affordable open-source options. "It's not that much different or better," he said of alternatives to Claude. But without better security tooling and usage transparency from Anthropic, he saw no reason to return.

Anthropic declined to comment on specific security controls or plans for itemized usage tracking when asked by TechCrunch.

---

## The Broader Pattern: AI Credentials as Targets

The Claude token theft fits a broader trend in which AI platform credentials have become targets for attackers. Unlike traditional software licenses, AI subscriptions represent compute budget — tokens that can be consumed or resold. A compromised high-tier account can be valuable to an attacker in multiple ways:

- Direct consumption: using someone else's token budget for own tasks
- Token reselling: reselling access to compromised accounts at discounted rates
- Credential stacking: combining stolen credentials from multiple AI platforms to power unauthorized AI services

The economics make AI accounts attractive targets. A USD 200-per-month Claude Max account with 20x usage multiplier represents significant compute value. An attacker with access to multiple such accounts can operate substantial AI-powered services at someone else's expense.

For professional AI users, this incident underscores the importance of regular session auditing, prompt password rotation, and careful monitoring of usage dashboards — even when platforms provide limited itemized data.

---

## Reference Links

- [Hackers are stealing Claude tokens from subscribers (TechCrunch)](https://techcrunch.com/2026/09/08/hackers-are-stealing-claude-tokens-from-subscribers/)
- [Claude Max Subscription](https://www.anthropic.com/claude-max)

---

*This article is based on reporting from TechCrunch (September 8, 2026). The information reflects events as of the publication date.*
