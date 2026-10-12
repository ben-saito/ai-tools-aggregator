# US Department of Energy Trains AI Across National Lab Supercomputers

---

The U.S. government has conducted two AI training projects that utilize multiple supercomputers across national laboratories, demonstrating how agencies may pool computing resources for non-trivial AI work.

## Tri-Laboratory Training on NNSA Systems

Sandia National Laboratories, Lawrence Livermore National Laboratory (LLNL), and Los Alamos National Laboratory (LANL) trained a LLaMA-based model across LLNL El Capitan (AMD MI300A) and machines at SNL and LANL with NVIDIA H100s. The project had to ensure that access-restricted data relating to nuclear weapons did not leave its originating site. The authors used backend training via torchtitan and evaluated federated training frameworks including NVFlare, Flower, and APPFL.

## Cross-Facility Training on ASCR Systems

A second project involved fine-tuning LLaMA-2 7B on SMolInstruct, a chemistry instruction-tuning dataset, using approximately 1,700 GPUs from Intel, NVIDIA, and AMD across Argonne (Aurora and Polaris), Oak Ridge (Frontier), and Berkeley (Perlmutter).

## Federated Learning for Government AI

Both projects demonstrate federated learning approaches that allow training across institutions without centralizing sensitive data. This infrastructure could support future government AI initiatives requiring strict data isolation.

---

## 参考リンク

- [Import AI 476: DOE Government AI](https://importai.substack.com/p/import-ai-476-creativity-and-rsi)

---

*（本文の情報は2026年10月12日時点のものです）*
