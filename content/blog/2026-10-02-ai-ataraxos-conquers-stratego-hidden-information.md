# AI Beats the World's Best Stratego Player: Ataraxos Solves the Hidden Information Problem

For decades, Stratego -- a board game where most pieces are hidden from both players -- resisted AI conquest. Now, a team from Carnegie Mellon, MIT, New York University, and Stanford has built an AI called **Ataraxos** that does what no previous system could: reason reliably under massive hidden information.

---

## Why Stratego Is Harder Than Chess

In chess, both players see everything. In Texas Hold'em poker, each player hides only two cards. In Stratego, each player controls 40 pieces -- marshals, colonels, generals, spies, bombs, and a flag -- arranged in starting positions unknown to the opponent. A game can last 2,000 moves.

"The challenge isn't just the number of possible positions," said Gabriele Farina of MIT. "It's that you have to reason about what your opponent knows and doesn't know, while they are doing the same about you."

Previous AI systems struggled because they could not model the opponent's beliefs about hidden pieces. DeepMind's DeepNash mastered the game of Stratego in 2022, but it still could not think ahead about what the opponent might know.

---

## The Breakthrough: Two Neural Networks Working Together

Ataraxos learned entirely through self-play -- 163 million games against itself. Moves that led to wins were reinforced; moves that led to losses were discarded. This is the same approach AlphaGo used to master Go.

The key innovation was a second neural network: a **belief model** that estimates what the opponent's hidden pieces are, based on observed game history. This is what previous systems lacked -- the ability to reason about the opponent's knowledge state before each move.

"This is one of the things that we did figure out how to do," Farina said. The belief model allows Ataraxos to simulate how its actions would appear to the opponent, and adjust strategy accordingly.

The name Ataraxos comes from ancient Greek for a state of calm. "It means somebody that's calm and unbothered," Farina explained.

---

## What Ataraxos Learned

Unlike humans, Ataraxos has no emotional investment in keeping secrets. When the AI estimates that its opponent has no reason to suspect a weak position, it plays to exploit that weakness without telegraphing distress.

"For humans, it's very hard when you know a secret to make decisions ignoring the fact that you know that secret," Farina said. "For machines, it's easier."

The AI also developed unconventional strategies that human experts did not anticipate -- moves that appear suboptimal on the surface but are in fact precisely calibrated to manipulate the opponent's beliefs.

---

## Implications for Real-World Hidden Information Problems

The techniques behind Ataraxos apply beyond board games. Problems like cybersecurity negotiations, diplomatic negotiations, and financial trading all involve parties with private information making sequential decisions. A system that can model opponent beliefs under uncertainty could be valuable in any domain where information is asymmetric.

The research team will present their findings at the NeurIPS 2026 conference.

---

## Reference Links

- [Ars Technica: AI finally beat the best Stratego player in history and did it on a budget](https://arstechnica.com/science/2026/10/ai-finally-beat-the-best-stratego-player-in-history-and-did-it-on-a-budget/)
- [Ataraxos research paper (CMU/MIT/NYU/Stanford)](https://)

---

*（本文の情報は2026年10月1日時点のものです）*
