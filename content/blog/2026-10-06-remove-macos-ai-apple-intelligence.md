# RemoveMacAI: Open-Source Tool Disables Apple Intelligence on macOS 27

A developer known as Om Lahore on GitHub has released RemoveMacAI, a command-line tool that allows users to fully disable Apple Intelligence on macOS 27 "Golden Gate," which unlike previous macOS versions offers no toggle to turn off AI features.

---

## Why Users Need a Third-Party Solution

macOS 27 Golden Gate does not include a user-accessible setting for disabling Apple Intelligence. The AI features — including Siri, Writing Tools, Genmoji, Image Playground, the ChatGPT extension, and all system summaries — are integrated into the operating system without a straightforward opt-out mechanism.

This marks a departure from previous macOS versions where users could toggle off Siri and related features through System Settings. The absence of that control has frustrated users who prefer not to have AI processing baked into their workflow.

---

## How RemoveMacAI Works

RemoveMacAI disables Apple Intelligence by using a configuration profile that users approve in System Settings, combined with Apple's own asset service. This approach keeps System Integrity Protection enabled and avoids directly modifying files in /System.

The tool performs the following:
- Turns off Siri, Writing Tools, Genmoji, Image Playground, the ChatGPT extension, and all summaries
- Deletes existing Apple Intelligence models from the system
- Stops macOS from downloading the models again in the future
- Leaves Dictation and other core OS features functional

The developer noted that users can selectively remove only the Apple Intelligence features they do not want while keeping others enabled.

---

## Community Response and Storage Impact

The tool has garnered significant attention on Reddit and GitHub, reaching 1,700 stars as of this writing. Users on Reddit have reported that the tool works as advertised, successfully removing Apple Intelligence features and freeing up over 12GB of storage that the models consume.

One Reddit comment captured the sentiment: "Reminds me of all the de-crufting you've always needed to do when you install Windows. Looks like we've gotten to the point on macOS too, where you need to run third-party scripts on a new OS install just to have a clean system."

---

## The De-Crufting Era of Modern Operating Systems

RemoveMacAI reflects a growing user expectation that operating systems should not force AI features onto users who do not want them. Despite Apple's increasing focus on AI-driven device and software upgrades, a segment of users actively resists having AI processing baked into their computing environment.

The tool is open source and available on GitHub, providing transparency for users who want to understand exactly what the tool modifies on their systems before running it.

---

## References

- [Ars Technica: Command-line tool quickly removes Apple Intelligence from macOS 27](https://arstechnica.com/apple/2026/10/command-line-tool-quickly-removes-apple-intelligence-from-maco)

---

*（本記事の情報は2026年10月5日時点のものです）*
