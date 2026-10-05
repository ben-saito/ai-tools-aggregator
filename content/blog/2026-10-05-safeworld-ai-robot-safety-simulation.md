# Safeworld Raises $12M to Build Safety Simulations for AI-Powered Robots

A new startup called Safeworld has emerged from stealth with $12 million in seed funding to tackle one of robotics' most pressing challenges: ensuring that AI-powered robots don't harm the humans around them. The round was led by Shine Capital and a16z Speedrun, with participation from Box Group, Carnegie Mellon University Endowment, Innovation Endeavors, and SV Angel.

---

## The Problem: Probabilistic AI Control Systems

As generative AI models become the backbone of robotic control systems, a fundamental challenge emerges: traditional algorithms are predictable, but AI-driven systems are not. How can engineers guarantee that a robot powered by a large language model will behave safely in an uncontrolled environment?

Dr. Ding Zhao, who directs the Safe AI lab at Carnegie Mellon University, has spent nearly his entire career working on this problem. Now, along with veteran startup executive Kyle Wong and machine learning engineer Simo Rachidi, he has founded Safeworld to solve it commercially.

"The safety challenge that we're talking about is a combination of, one, really advanced generative AI probabilistic evals -- how do you underwrite the risk of a probabilistic system?" Zhao explains. "The second part that's really hard is the trust part, and you need both to deploy a robot."

---

## How Safeworld Works: Digital Humans in Simulation

Safeworld's approach centers on running robotic control systems through thousands of simulations populated with realistic digital human models. The platform builds virtual facsimiles of specific factory corners, warehouse layouts, or construction sites -- complete with the blind spots and human variables present in the real world -- and then evaluates how the robot performs.

The process works like this: Safeworld takes a model of a physical space (using frameworks like Genesis or MuJoCo), inserts a simulation of the robot driven by its actual software, and runs scenario after scenario where human models encounter the robot. The goal is to catch edge cases that would be impractical -- or dangerous -- to test in the real world.

"One of the most common areas is if there is a blind corner in this particular factory," Wong explains. "What is the speed or what is the stopping distance that you need to make sure that this robot will not collide with a particular human? If a human is carrying boxes, for example, will the robot detect the human or not?"

Tripping and falling is another key scenario the team tests extensively in simulation. "Otherwise, you would have to go and trip and fall for the robot, which is like a hard thing to be doing all the time," Wong notes.

---

## The Competitive Landscape and Need for Third-Party Validation

The approach shares similarities with tools being developed internally by major robot manufacturers. But the founders argue that even well-resourced in-house teams benefit from independent third-party validation -- and that sharing safety data between competitors could raise industry standards overall.

"The time to build an industry safety standard is now while robots are being designed and deployed," says a16z Speedrun partner Jonathan Lai. "By the time you have robots in households colliding with kids and causing safety incidents, that's way too late."

Vishal Dugar, CTO of Gritt Robotics -- which develops AI brains for robots that install photovoltaic panels at industrial solar farms -- is already partnering with Safeworld. "The difficulty with most of our systems is it's very hard to formally prove it by doing some math, writing some equations, and saying yeah, the system is verified to be safe," Dugar explains. "It necessarily has to be done empirically."

His robots work alongside human workers, making collision avoidance a top priority. "Humans have many kinds of appearances," Dugar points out. "Their bodies can be in different configurations. They could be kneeling, standing. They could be tripping and falling potentially. They could be crouching. They could be running. You have to respond to all these behaviors that humans could potentially exhibit."

---

## Early Days for AI Robotics Safety

Safeworld is still determining its optimal business model -- whether to offer a platform for external users or pursue a services-based approach. The team is also still figuring out how to price and package the technology.

But the founders are confident they are addressing the right problem at the right time. "A lot of people are underestimating one how hard some of these edge cases are going to be to solve," Zhao says. "It is not the robot in the vacuum, in the demo, that we are worried about. It is the robot that is deployed at scale, with people who potentially never operated a robot before."

As AI-powered robots move from controlled factory floors into homes, hospitals, and public spaces, the question of how to verify their safety in the real world becomes increasingly urgent. Safeworld is betting that rigorous simulation-driven validation will become as essential to robotics as crash testing is to the automotive industry.

---

## Reference Links

- [TechCrunch: Can Safeworld convince people that gen AI robots won't hurt them?](https://techcrunch.com/2026/10/05/can-safeworld-convince-people-that-gen-ai-robots-wont-hurt-them/)

---

*This article is based on reporting from TechCrunch published on October 5, 2026.*
