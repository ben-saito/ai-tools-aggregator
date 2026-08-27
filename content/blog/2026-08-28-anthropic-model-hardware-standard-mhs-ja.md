# Anthropic's New Hardware Standard Lets AI Agents Control the Physical World

Anthropic has announced a new hardware standard called Model Hardware Standard (MHS) that enables AI agents to interact with and control physical devices in the real world. The standardized interface aims to solve one of the biggest challenges in AI development: connecting AI models to physical hardware like lasers, microscopes, robotic arms, and sensors.

---

## A Common Language for Physical AI

MHS provides a standardized driver interface that allows different hardware devices to communicate with AI models. Currently, integrating AI systems with physical instruments requires custom software for each device, a time-consuming process that slows scientific research and industrial automation.

Anthropic says the MHS effort was inspired by observing neuroscientist Arco Bast work through a memory formation experiment at the HHMI Janelia Research Campus. The process of getting disparate lab equipment to work together required extensive custom integration work.

MHS devices can be controlled directly in real time via command-line prompts and API code files. But integrating an MHS system with an AI model through the Model Context Protocol (MCP) enables more sophisticated agentic behaviors where the model can observe results, reason about next steps, and iterate automatically.

---

## How It Works: Claude Calibrating a Laser

Anthropic gave the example of a model like Claude adjusting a laser, checking the results via a separate camera, then repeating the process to automatically calibrate the whole system. MHS could also allow an AI model to focus a microscope, analyze the results, decide what part needs more observation, and adjust accordingly.

In a demonstration video, Anthropic showed Claude reasoning how to get a robotic arm to pick up an aluminum can even though it had not been specifically trained on the required steps. Rather than reasoning through each step each time, MHS-enabled models can sequence steps across instruments automatically.

MHS also includes a standardized tagging system to describe hardware's real-world constraints for models that may have been trained more in the virtual world. This includes encoded information about physical characteristics like the weight and range of a robot arm.

---

## Early Partners and Availability

Anthropic is working with a first group of scientific research labs and advanced manufacturers during the MHS preview period, including Amazon Web Services (Strands Robots), Hugging Face (LeRobot), Raspberry Pi, Automata, and Universal Robots.

In early testing with scientific partners over the last year, Anthropic says MHS reduced the time it took to integrate devices, making it possible to iterate faster in experimental settings.

"If you can test hypotheses faster, you could create general technologies faster," said Anthropic Technical Staffer Alek Kemeny in a promo video. "This is how a century of progress can condense into a decade."

The research preview is being sold mainly as a way to help scientists streamline the process of creating custom software integrations needed to get disparate components of an experiment working in concert.

---

*This article is based on reporting from Ars Technica as of August 27, 2026.*
