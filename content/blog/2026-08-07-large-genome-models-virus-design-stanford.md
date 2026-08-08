# Large Genome Models Used to Design New Viruses: Stanford Researchers Generate Bacteriophages with Evo

*AI drug discovery research: Stanford team uses large genome models to design bacteriophages, raising dual questions about therapeutic potential and governance*

---

## Overview

A research team at Stanford University has published a study in Science demonstrating that large genome models—deep learning systems trained to predict DNA sequences—can be used to design functional viruses. Using models called Evo 1 and Evo 2, the researchers generated viable variants of the bacteriophage ΦX174, which infects E. coli bacteria. The work highlights both the promise of AI-assisted phage therapy for drug-resistant bacterial infections and the urgent need for governance frameworks around AI-driven biological design.

---

## What Are Large Genome Models

Large genome models operate on the same principle as large language models: predict the next token in a sequence. For DNA, the alphabet is just four letters—A, T, C, and G—but the biological context matters enormously. Some genomic regions are highly sensitive to changes in specific bases, while others tolerate variation freely.

Evo 1 and Evo 2 were trained on hundreds of thousands of microbial genomes. The models learned to recognize that genes with related functions cluster together in genomes, allowing them to predict functional protein sequences from partial input prompts.

---

## Experiment: Designing ΦX174

The researchers chose ΦX174, one of the most well-studied bacteriophages, as their design target. A useful feature: the end of the ΦX174 genome always contains the same short sequence of bases, providing a reliable prompt point.

The team fine-tuned Evo on over 2 million additional bases of bacteriophage DNA. When prompted with known sequences, the models output proposed genomes ranging from near-copies of the natural virus to sequences with only vague viral characteristics.

Of 302 AI-proposed sequences, 16 produced viable viruses after chemical synthesis. Analysis revealed that the most effective AI-designed viruses closely resembled the original ΦX174, but individual variants displayed notable differences: one lost a key viral protein entirely and compensated through changes elsewhere; another gained an entirely novel viral protein.

The researchers note that any single amino acid change has roughly a 20% chance of inactivating a virus. By that metric, the AI-generated viruses were far more likely to preserve viability than random mutation would produce—suggesting the models have learned to make evolutionarily intelligent changes.

---

## Therapeutic Implications

Bacteriophage therapy has long been explored as a treatment for drug-resistant bacterial infections, but has never reached widespread clinical adoption. AI-generated phages could accelerate this field by enabling rapid design of optimized phage cocktails.

The team compared a natural 12-phage cocktail against a cocktail of the 16 AI-designed viable viruses. Results were mixed and inconclusive as a near-term therapy, but the work establishes a new paradigm for AI-assisted drug design.

---

## Governance Warning

The researchers deliberately excluded sequences from viruses that infect complex (vertebrate) cells during training, recognizing that current large genome models could likely be applied to design such viruses. The paper ends with a call for stronger governance of AI biology and custom DNA synthesis.

"Perhaps now is the time to begin preparing for the possibility that someone could develop a related AI that can design a virus that targets vertebrates," they write.

---

## Developer Perspective

Large genome models represent a paradigm shift in biological design. Where previously predicting protein-DNA interactions required specialized expertise and complex lab work, AI models can now generate design candidates rapidly.

This democratization of biological design carries dual-use risk. As DNA synthesis costs decline and access expands, balancing innovation with biosecurity becomes critical. Developers working at the intersection of AI and biology carry new responsibility for the downstream implications of these tools.

---

## Reference

- [Large genome models used to design new viruses (Ars Technica)](https://arstechnica.com/science/2026/08/large-genome-models-used-to-design-new-viruses/)

---

*This article is based on information from August 6, 2026.*
