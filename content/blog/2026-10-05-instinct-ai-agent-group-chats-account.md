Instinct, an AI startup, has launched a group chat feature that allows friends to use its AI agent together for tasks like planning trips, organizing carpools, and coordinating events -- even if some friends have not signed up for the service.

The key innovation is accessibility. Unlike traditional AI assistants that require each user to maintain an individual account, Instinct's group chats work with what the company calls "permission-based agent sharing." A user can invite their friends to a group chat and grant the Instinct agent access to specific information -- such as trip details or event preferences -- without requiring friends to create their own accounts.

**How it works**

When a user creates a group chat in Instinct, they can configure what information the agent can access and what actions it can take on behalf of each participant. The agent can read messages in the group, retrieve relevant context from shared documents or calendars, and perform tasks like booking reservations or sending invitations -- but only within the scope of permissions granted by each user.

Friends who have not installed Instinct receive a link to join the group chat via a web interface. They can participate in the conversation and benefit from the agent's assistance without creating an account or downloading an app.

**Competitive context**

Instinct is positioning this launch as a differentiation from Meta's Muse, which remains focused on individual use cases. Muse does not currently support group interactions. The company argues that real-world tasks often involve multiple people and that AI agents should reflect that social dimension.

**Privacy and permissions**

The company says personal accounts remain strictly separate. The agent cannot share information between users without explicit permission, and each user retains control over what data they expose to the group. Users can revoke permissions at any time.

The group chat feature is available starting October 5, 2026.

---

## Technical implications for AI agent design

The launch highlights an emerging challenge in AI assistant architecture: how to build agents that operate effectively in multi-user, permission-scoped environments.

Traditional AI assistants assume a single-user context. They have full access to one user's data and optimize for that user's preferences. Group chat scenarios break this assumption. An agent in a group chat must track whose permissions apply to which data, distinguish between requests from different participants, and ensure that actions taken on behalf of one user do not violate another user's data boundaries.

Instinct's approach -- permission-based scoping at the message level -- is one solution. The agent maintains a permission model for each participant and checks that model before accessing shared resources or taking group-level actions.

This permission-scoped architecture may become increasingly relevant as AI agents move from personal productivity tools into collaborative and social contexts. The ability to share agent capabilities without sharing accounts could influence how enterprise AI platforms handle team-based workflows.

---

## Related reading

- [TechCrunch: Instinct brings its AI agent to group chats, even for friends without an account](https://techcrunch.com/2026/10/05/instinct-brings-its-ai-agent-to-group-chats-even-for-friends-without-an-account/)

---

*This article reflects information available as of October 5, 2026.*