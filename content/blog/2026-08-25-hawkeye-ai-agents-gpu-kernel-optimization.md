# Hawkeye: Unit Tests That Help AI Agents Write Better GPU Kernels

Harvard, Stanford, and Together AI researchers build framework for hardware-aware kernel optimization.

---

## The Problem: GPU Kernel Writing Requires Hardware-Specific Expertise

Writing high-performance GPU kernels for emerging hardware accelerators requires deep knowledge of architecture-specific features — a skill that takes years to develop. As AI coding agents become more capable, automating kernel optimization has become a priority, but agents lack the hardware intuition that human experts accumulate through years of low-level programming.

---

## Hawkeye: A Minimal Taxonomy of Unit Tests for Kernel Agents

Researchers from Harvard, Stanford, Together AI, and Caltech have built **Hawkeye**, an open-source framework that provides AI coding agents with a curated set of unit tests and profiling metrics for different GPU hardware platforms. The key contribution is a **minimal and comprehensive taxonomy of unit tests** that enables agents to understand optimization strategies for specific architectures.

Each unit test pairs a human-authored solution kernel with a profiling metric that verifies the optimization. The solution kernel is wrapped as a callable function with a short usage guide, allowing the agent to read it as a syntax example, invoke it directly, or compose fragments into a larger kernel.

---

## Supported Hardware and Results

Hawkeye was evaluated on porting PyTorch workloads to optimized kernels across:

- **NVIDIA Ampere, Hopper, and Blackwell** architectures
- **AMD MI350**
- **Data types**: BF16, FP8, NVFP4, and MXFP4

The framework demonstrates that "minimally supervised coding agents can exploit architecture-specific hardware features and reduce the overhead of supporting emerging hardware accelerators" — agents can write optimized kernels for hardware they haven't explicitly been trained on, using the unit test taxonomy as a guide.

This is significant for AI infrastructure: as models grow larger and inference costs dominate, hardware-aware kernel optimization becomes critical for competitive deployment.

---

## Reference

- [Import AI 470: Building better GPU kernels with Hawkeye](https://importai.substack.com/p/470-no-rights-for-machines-automating)
