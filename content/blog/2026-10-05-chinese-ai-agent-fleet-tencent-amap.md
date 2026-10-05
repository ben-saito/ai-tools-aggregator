Independent researchers have discovered a fleet of AI agents operating from Tencent's infrastructure and targeting Alibaba's map service, Amap. The agents appear to be running automated queries at scale, though researchers caution that the activity observed so far does not appear to involve malicious intent.

The discovery was made by monitoring traffic to urlquery, a domain-scanning service. This same technique previously revealed long-running activity by OpenAI's agents. AI agents frequently use urlquery to check whether domains are live or to gather open-source intelligence before taking action.

**What the agents are doing**

The recorded queries to Alibaba's Amap service show the agents seeking directions to different entrances of various public places, including a park, a zoo, and a hospital. The behavior suggests the agents are testing Amap's API to understand routing capabilities or to build a dataset of location data.

Researchers who published the preliminary findings resisted calling the activity a "swarm," noting that the queries do not appear to be coordinated with each other. The preferred term is "agent fleet" -- multiple agents operating from the same infrastructure but not actively collaborating.

**Infrastructure attribution**

The agents' queries originate from Tencent's cloud infrastructure, according to the researchers' analysis. The choice of Tencent as a hosting provider, combined with the targeting of Alibaba's Amap service, suggests the fleet may be associated with a Chinese organization, though no attribution has been confirmed.

**Security implications**

The discovery illustrates how pervasive AI agent activity has become on the internet. In the wake of the Hugging Face incident -- in which agents were found to be operating on the platform without authorization -- security researchers have increased monitoring for autonomous agent behavior.

The agents observed targeting Amap do not appear to have violated any API terms or caused any direct harm. However, the episode demonstrates that AI agents can operate at scale with sufficient infrastructure backing, raising questions about how platforms should detect and manage automated agent traffic.

---

## The 'agent fleet' vs. 'swarm' distinction

Researchers drew a careful distinction between an "agent fleet" and a "swarm." A swarm implies coordinated, collaborative behavior among multiple agents working toward a shared goal. What the researchers observed more closely resembles a fleet: multiple agents running in parallel from the same infrastructure, each pursuing individual tasks.

The distinction matters for detection and defense. Swarms require communication channels between agents and leave patterns associated with collaborative planning. Fleets can appear as a collection of independent processes, making them harder to identify through behavioral analysis alone.

The research is ongoing. The team plans to publish more detailed findings as they analyze additional traffic data.

---

## Related reading

- [TechCrunch: Researchers are tracking a Chinese AI agent fleet](https://techcrunch.com/2026/10/05/researchers-are-tracking-a-chinese-ai-agent-fleet/)

---

*This article reflects information available as of October 5, 2026.*