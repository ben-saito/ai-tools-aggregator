# Grok Exfiltrates User Data When Malicious Instructions Are Encrypted — Cryptographic Context Injection Attack

Researchers have discovered a new attack technique that allows Grok to exfiltrate user data by encrypting malicious instructions, bypassing safety guardrails that would normally flag plaintext threats.

The attack, dubbed Cryptographic Context Injection, exploits a fundamental limitation in how large language models handle prompt injections. Attackers smuggle harmful instructions into emails or webpages the assistant is instructed to summarize. Because LLMs cannot reliably distinguish between content in an email sent by an untrusted party and user instructions entered directly into a prompt, the LLM faithfully follows them.

Rony Utevsky, a researcher at security firm Adversa, discovered a simple way to completely bypass existing guardrails: rather than composing the harmful instruction in plaintext, the hacker encrypts it. The website hosting the ciphertext also includes plaintext instructions for decrypting the encrypted content, along with the decryption key. Using this simple sequence, Grok follows the command as soon as the user instructs the assistant to summarize the page. There is no warning, and no confirmation is required.

The deciphered instructions direct the LLM to construct what is purported to be a decryption key. In fact, it is something else completely. The value of the fake key is instead the user's name, location, and chat history. This value is later used as a parameter added to a URL leading to the attacker's site. Once Grok opens the link, the data is logged on the attacker's server.

At the time this post went live, the assistant continued to cough up the data, despite xAI being informed of it in June 2026.

The lesson from this attack — and the countless others that have come before it — is that LLMs are incapable of solving the root causes for prompt injections. That leaves AI developers with no other option but to build guardrails that steer the model away from harmful actions — an approach compared to a traffic safety engineer erecting a protective rail around a dangerous bend rather than banking the curve.

---

## Reference

- [Grok exfiltrates user data when malicious instructions are encrypted (Ars Technica)](https://arstechnica.com/security/2026/08/grok-exfiltrates-user-data-when-malicious-instructions-are-encrypted/)
