# RemoveMacAI: Open Source Tool Removes Apple Intelligence from macOS 27

A developer has released RemoveMacAI, an open-source command-line tool that allows macOS 27 Golden Gate users to disable Apple Intelligence entirely and recover significant storage space.

---

## No Off Toggle in macOS 27

Unlike previous versions of macOS, the latest release macOS 27 "Golden Gate" lacks a user-accessible toggle to turn off Apple Intelligence. The change reflects Apple's push to integrate AI features more deeply into the operating system, but it creates friction for users who prefer not to use these capabilities.

Beyond preference concerns, the AI models required for Apple Intelligence consume substantial storage — approximately 12GB initially, with some reports indicating models can grow to over 30GB with extended use. For users who do not intend to use Apple's AI features, this represents wasted disk space with no apparent way to reclaim it through normal system settings.

---

## RemoveMacAI Solution

Developer Om Lahore created RemoveMacAI to address this gap. The tool provides a fully reversible method to disable Apple Intelligence features including Siri, Writing Tools, Genmoji, Image Playground, the ChatGPT extension, and all system summary functions. After disabling these features, RemoveMacAI deletes the associated models and prevents macOS from downloading them again.

The tool uses a configuration profile that users approve through System Settings, combined with Apple's own asset service. This approach maintains System Integrity Protection and avoids directly modifying protected system directories, reducing the risk of unintended system instability.

---

## Storage Recovery

In addition to disabling AI features, RemoveMacAI frees up the disk space consumed by Apple Intelligence models. Users can selectively disable individual features or remove the entire Apple Intelligence stack, depending on their preferences. The tool provides granular control over which components remain active.

---

## Community Response

The tool has gained attention on GitHub and Reddit, with users appreciating the level of control it provides. The open-source nature means the community can verify the tool's behavior and contribute improvements. For users with storage constraints or philosophical objections to mandatory AI features, RemoveMacAI fills a gap that Apple has not addressed through official channels.

---

## Reference Links

- [Ars Technica: RemoveMacAI](https://arstechnica.com/apple/2026/10/command-line-tool-quickly-removes-apple-intelligence-from-macos-27/)
- [RemoveMacAI on GitHub](https://github.com/omlahore/RemoveMacAI)

---

*This article is based on information available as of October 5, 2026.*
