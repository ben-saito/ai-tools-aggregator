Anthropic published research warning that advances in small AI models could enable a new generation of self-replicating malware capable of spreading through IoT device networks faster than traditional computer worms.

The company's security research team described scenarios in which compact AI models — small enough to run on edge devices like smart cameras, sensors, and industrial controllers — could be weaponized to autonomously scan for vulnerabilities, replicate to adjacent devices, and execute payload actions without requiring a command-and-control server.

Anthropic calls these "small weight-based replicators." Unlike conventional malware that relies on explicit code injection, these systems could theoretically propagate by modifying model weights across devices, effectively "infecting" AI systems rather than traditional software.

The research, published on Anthropic's safety blog, outlines how the decreasing size of capable language models — some now running on microcontrollers with less than 100MB of memory — dramatically expands the attack surface for autonomous malware. An IoT botnet composed of AI-capable devices could theoretically adapt its behavior based on what it finds in each new environment.

Anthropic acknowledged that fully autonomous IoT-targeting AI malware does not yet exist in the wild, but argued that the component technologies are maturing rapidly. The company called for new defensive frameworks that treat AI models themselves as potential infection vectors, not just traditional software vulnerabilities.

The research follows a broader industry trend of treating AI systems as dual-use technologies that require security considerations beyond conventional software development practices.