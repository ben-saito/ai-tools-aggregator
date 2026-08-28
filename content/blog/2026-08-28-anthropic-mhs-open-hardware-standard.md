# Anthropic Releases Open Hardware Standard for AI Agents to Control Physical Devices

Anthropic has announced an open hardware standard called Model Hardware Specification (MHS) that lets AI agents control physical devices through a standardized interface. The system aims to replace bespoke integrations with a common language that any AI model can use to interact with laboratory equipment, robots, and sensors.

---

## From Custom Integrations to Universal Hardware Control

MHS provides a common interface and common format for data sharing between devices, allowing them to communicate across a network "without needing a bespoke 'translator' program in between." According to Anthropic, the standardized system could reduce weeks or months of experimental setup down to "hours or minutes."

The MHS effort was inspired by observing neuroscientist Arco Bast work through a memory formation experiment at the HHMI Janelia Research Campus. Bast had created an interface to coordinate rotating laser beams, microscopes, cameras, and other components. Anthropic Technical Staffer Alek Kemeny recalled thinking: "This idea could be used to have AI run any science experiment in the world."

---

## Natural Language Control of Laboratory Equipment

While MHS devices can be controlled directly via command-line prompts and API code files, integrating MHS with an AI model through the Model Context Protocol enables scientists to interact with devices using natural language. AI models can "reason through each step in an experiment, update parameters in real time, and, in some cases, recover from hardware errors without intervention."

Anthropic gave the example of Claude adjusting a laser, checking results via a separate camera, then repeating the process to automatically calibrate the system. MHS could also allow a model to focus a microscope, analyze results, decide what needs more observation, then automatically reposition to continue the experiment.

In a demonstration, Claude reasoned how to get a robotic arm to pick up an aluminum can even without specific training on those steps. MHS-enabled models can also sequence steps across instruments by writing API scripts and adjusting them as conditions require.

---

## Standardized Device Tags for Zero-Shot Physical Reasoning

MHS includes a standardized tagging system describing hardware's real-world constraints for models trained primarily in virtual environments. Tags encode physical characteristics (weight and range of a robot arm), adjustable parameters, measurement options, and enforced safety limits. This information can be provided to an AI model with no prior training on that specific device.

---

## Open Source and Agent-Agnostic

Anthropic is working with a first group of partners during the MHS preview period, including Amazon Web Services (Strands Robots), Hugging Face (LeRobot), Raspberry Pi, Automata, and Universal Robots. These partners will help Anthropic "build safety evaluations and develop best practices for AI systems operating physical equipment."

The plan is for MHS to eventually become an open source and "agent agnostic" standard. Over the last year of testing with scientific partners, Anthropic reports that MHS "reduced the time it took to integrate devices, making it possible to iterate faster in a variety of experimental settings."

As Kemeny noted: "If you can test hypotheses faster, you could create general technologies faster. This is how a century of progress can condense into a decade."

---

## Reference Links

- [Ars Technica: Anthropic's new hardware standard lets AI agents control the physical world](https://arstechnica.com/ai/2026/08/anthropics-new-hardware-standard-lets-ai-agents-control-the-physical-world/)

---

*This article is based on information available as of August 28, 2026.*
