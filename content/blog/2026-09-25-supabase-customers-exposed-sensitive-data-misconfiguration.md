# Supabase Customers Exposing Sensitive Data Through Misconfiguration

Security research firm UpGuard discovered that approximately 16,000 databases hosted by Supabase were exposing some degree of personal data to the public web. The exposure stems from customer misconfigurations of access controls on the database platform, with the boom in AI-generated "vibe-coded" applications exacerbating the problem.

---

## Scale of the Exposure

UpGuard's research found that the exposed databases contained names, addresses, phone numbers, and in some cases user passwords and authentication tokens. The data was accessible without authentication due to improper configuration by Supabase customers using the platform to store application data.

Supabase allows developers to store and run databases for web and mobile applications. The platform reached a $10 billion valuation earlier this year, driven partly by developers using AI coding tools to rapidly build and deploy applications. Many of these AI-generated applications lack the security configuration expertise that traditional developers bring to deployment.

---

## Vibe Coding and Security Gaps

The rise of "vibe coding"—building applications through conversational AI interactions rather than traditional programming—has created a new category of security misconfiguration. AI-generated code often lacks proper access control defaults, leaving databases exposed when developers accept default configurations without understanding the security implications.

The pattern mirrors previous waves of simplified development tools that lowered the barrier to deployment. Each time development becomes easier, a new population of developers with limited security expertise deploys applications at scale, creating mass exposure events when common configuration mistakes are repeated across thousands of deployments.

---

## Broader Context of Database Exposure

Supabase is not the first database platform to face widespread customer misconfiguration issues. Similar exposures have occurred with Amazon S3 buckets, Firebase instances, and other backend-as-a-service platforms. The common thread is that simplified interfaces encourage rapid adoption while security configuration remains the user's responsibility.

The Supabase incident highlights the ongoing challenge in platform security: balancing developer convenience with secure defaults. Platforms that make it easy to deploy may inadvertently make it equally easy to expose data if users do not understand the security model.

---

## Reference Links

- [TechCrunch: Some Supabase customers are publicly exposing reams of people's data to the web](https://techcrunch.com/2026/09/25/some-supabase-customers-are-publicly-exposing-reams-of-peoples-data-to-the-web/)

---

*This article reflects information available as of September 25, 2026.*
