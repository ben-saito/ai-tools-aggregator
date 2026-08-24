# Alsenglow Browser Fingerprinting: Inaudible Sounds Used to Track Users

---

## The Technique: Using Inaudible Signals to Create Unique Browser Fingerprints

A research team has demonstrated that inaudible sound signals can be used to fingerprint web browsers, raising fresh privacy concerns about the tracking technologies deployed across the modern web. The technique exploits the way different browsers and devices process audio APIs, creating a unique acoustic signature for each user without their knowledge.

The research focuses on audio context fingerprinting, where a website instructs the browser to generate and process sound waves at frequencies above or below the range of human hearing. Each browser-hardware combination processes these signals slightly differently, producing measurable variations in timing, amplitude, and frequency response. These variations are unique enough to identify individual users across sessions and potentially across websites.

The technique was tested and found to catch AliExpress advertising trackers actively using the method, according to Ars Technica reporting. While the specific implementation discovered was crude and the approach is considered technically outdated, it demonstrates how the web's tracking ecosystem continues to evolve in ways that evade conventional privacy protections.

---

## Why Audio Fingerprinting Works

Browser fingerprinting has been a known technique for years, but audio fingerprinting adds a particularly difficult layer of evasion. Traditional fingerprinting methods collect attributes like screen resolution, installed fonts, canvas rendering characteristics, and WebGL capabilities. Audio fingerprinting goes further by probing the intersection of software audio processing and hardware audio components.

When a website triggers the Web Audio API to produce an inaudible signal, the browser's audio stack processes the waveform through several layers of software abstraction before reaching the hardware DAC (digital-to-analog converter). The way each implementation handles this pipeline leaves subtle but consistent traces. Browser engines like Blink (Chrome), WebKit (Safari), and Gecko (Firefox) each have distinct audio processing characteristics, and even different hardware configurations on the same browser produce measurable differences.

These audio signatures can be collected silently, without any user interaction or consent. A user visiting a page with an audio fingerprinting script will not hear anything, see any visible indication, or have any obvious sign that their device is being profiled.

---

## AliExpress Caught, Industry Implications

The researchers who developed and tested the technique found evidence that AliExpress, the e-commerce platform, was using this method in its advertising and tracking infrastructure. The discovery raises questions about the scope of audio-based tracking across the broader advertising ecosystem.

Audio fingerprinting is particularly difficult for privacy tools to block because it operates at a level that is not covered by common browser privacy protections. Cookie blockers, tracker blockers, and even some anti-fingerprinting extensions may not detect or prevent audio-based fingerprinting. The technique requires no storage on the user's device, leaving no obvious trace for users or security researchers to discover.

Security researchers noted that while the specific AliExpress implementation appeared technically primitive, the underlying capability represents a genuine privacy threat that the industry has yet to adequately address.

---

## The Cat and Mouse Game of Web Privacy

Audio fingerprinting is the latest front in an ongoing battle between privacy-conscious users and trackers. As browsers and privacy tools have improved at blocking traditional fingerprinting vectors, trackers have sought new methods that are harder to detect and mitigate.

The web's audio API was not designed with fingerprinting resistance as a primary concern, and the technical barriers to preventing audio fingerprinting are substantial. Disabling audio entirely would break many legitimate web features, from video calls to music streaming. More surgical interventions that add noise to audio fingerprinting would degrade legitimate audio quality.

The discovery of active use of audio fingerprinting by a major advertising platform underscores how privacy threats evolve. Users who believe they have protected themselves through browser settings and extensions may still be identifiable through techniques they have never heard of and have no practical way to detect.

---

## Reference Links

- [Ars Technica: Inaudible sounds used to fingerprint browsers catch AliExpress red-handed](https://arstechnica.com/ai/2026/08/24/inaudible-sounds-used-to-fingerprint-browsers-catch-aliexpress-red-handed/)

---

*（情報は2026年8月24日時点のものです）*
