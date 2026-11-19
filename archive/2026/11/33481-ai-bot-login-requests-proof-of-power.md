---
title: "AI Bots Hit Login Pages 8.4 Times More Often: Can a Proof-of-Power Wall Help?"
date: 2026-11-19
status: published
wordpress_id: 33481
canonical_url: "https://bitcoinversus.tech/2026/11/19/ai-bot-login-requests-8x-lowery-proof-of-power-wall-cybersecurity-2026/"
categories: [AI, Cybersecurity, Technology]
featured_media: 33477
chart_media: 33478
---

# AI Bots Hit Login Pages 8.4 Times More Often: Can a Proof-of-Power Wall Help?

Archived editorial source: [Gutenberg HTML](./33481-ai-bot-login-requests-proof-of-power.gutenberg.html).

AI agents sent **99.7 million requests to login pages in June 2026** across sites monitored by cybersecurity provider DataDome, up from **11.9 million in January**. The rounded figures imply roughly **8.4 times as many monthly login-page requests** within five months. As automated software moves from retrieving webpages to interacting with accounts, an old idea from Bitcoin security is acquiring new relevance: making selected digital requests costly to send.

The numbers come from DataDome's [2026 AI traffic analysis](https://datadome.co/resources/bot-and-agent-security-report/ai-traffic-trends/), published with its September 22 State of Bot & Agent Security Report. A login-page request is not necessarily a login attempt, an intrusion or even a malicious action. Legitimate AI assistants may access account workflows with permission; abusive clients can exploit the same pathways.

[youtube https://www.youtube.com/watch?v=XNozI7UCcAc]
*Official DataDome video published July 27, 2026, describing bot and agent traffic screening. Marketing claims in the video are not independent efficacy measurements.*

## The numbers behind a changing attack surface

Across the first half of 2026, DataDome classified **605.6 million** AI-related requests to sensitive website endpoints, including forms, account registration, shopping carts, payment flows and login pages. Login pages accounted for **51.7%**, or approximately **313 million** requests. The full annual analysis examined traffic from more than **75,000 customer websites**. Neither dataset is a census of worldwide internet activity.

Original BitcoinVersus.Tech vertical bar chart, using DataDome's rounded January and June 2026 counts. Both bars start at zero. Requests are not automatically malicious; the figures represent DataDome's customer network, not the entire internet.

DataDome also tested **21,491 popular websites** against ten categories of bots and spoofed AI agents. It classified **65.3%** as completely unprotected in its testing and **2.4%** as fully protected. Those labels describe the vendor's chosen tests, not comprehensive certification of every possible website defense. The study counted an **82.3%** rise in identified AI traffic and a **124%** rise in bad bot traffic over the July 2025 to June 2026 comparison window; the two classifications must not be added together.

## What Jason P. Lowery's Proof-of-Power Wall proposes

Jason P. Lowery's 2023 MIT thesis, [*Softwar*](https://dspace.mit.edu/entities/publication/8ac6037b-efd6-4ecd-a57f-2b75c965c889), proposes studying proof of work as a way to impose physical costs on digital competition. BitcoinVersus.Tech explained the associated [Proof-of-Power Wall design in March 2025](https://bitcoinversus.tech/2025/03/17/proof-of-power-wall-secures-infrastructure-with-computer-power/) and revisited [the limits of the broader Softwar thesis](https://bitcoinversus.tech/2026/11/18/jason-lowery-softwar-bitcoin-proof-of-work-cybersecurity-revisited/) in November 2026.

A possible web implementation would issue a fresh, short-lived cryptographic puzzle to a suspicious client before accepting an expensive unauthenticated request. Validating a solution can be inexpensive for a server, while generating many solutions consumes attacker computation. Raising puzzle difficulty as traffic pressure increases could change the economics of mass automation. A solved puzzle proves computational effort, however, **not identity, permission or harmless intent**. Lowery's national-security argument remains a research proposal, not proof of a deployed next-generation firewall.

[tweet 2121834933920354309]
*Anthony Scaramucci, November 15, 2026, argues that proof of work could be an AI-era firewall. His X post is commentary, not evidence of measured protection or a deployment.*

## Where computational gates already exist

The idea has real, narrower precedents. [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) documents proof-of-work challenges among several browser and behavioral signals, while [BitcoinVersus.Tech's comparison of Cloudflare and Tor](https://bitcoinversus.tech/2026/11/18/tor-cloudflare-proof-of-work-bot-defense-firewall-malware-2026/) explains how Tor prioritizes onion-service requests using computational effort during congestion. Neither service depends on proof of work alone to decide which commands are authorized.

[youtube https://www.youtube.com/watch?v=QKFiN_cyeMc]
*Official Cloudflare Developers tutorial, June 26, 2025, demonstrating Turnstile integration and server-side validation of challenge tokens.*

## What an AI-era trial would need to prove

An effective evaluation would measure fraudulent requests blocked, legitimate-agent completion rates, latency on mobile devices, compute and electricity consumed, and the outcome when an attacker uses a botnet or stolen account. [Earlier testing guidance](https://bitcoinversus.tech/2026/11/18/ositc-015-proof-of-work-firewalls-malware-costs-limits-testing/) explains why computational admission must remain distinct from malware protection. Rate limits, verified agent identity, account permissions, multifactor authentication, API quotas and behavior analysis still carry independent responsibilities.

The [separate Google LLMJacking investigation](https://bitcoinversus.tech/2026/11/19/google-llmjacking-millions-ai-api-calls-24-hours-proof-of-power-wall-2026/) also illustrates a case a public-facing puzzle cannot automatically solve: an attacker using valid stolen cloud credentials. Lowery's lasting technical question is narrower and testable. Can imposing a small physical cost on high-risk requests reduce abusive automation enough to justify the cost to legitimate users? DataDome's traffic measurements establish why the experiment matters, but do not answer whether a proof-of-power wall would succeed.

## Primary sources

- [DataDome, 2026 AI agent traffic by endpoint and month](https://datadome.co/resources/bot-and-agent-security-report/ai-traffic-trends/)
- [DataDome, State of Bot & Agent Security methodology, September 22, 2026](https://datadome.co/threat-research/state-of-bot-and-agent-security-report-2026-key-takeaways/)
- [MIT, Lowery's Softwar thesis, 2023](https://dspace.mit.edu/entities/publication/8ac6037b-efd6-4ecd-a57f-2b75c965c889)
- [Cloudflare, Turnstile challenge documentation](https://developers.cloudflare.com/turnstile/)
- [Tor Project, proof-of-work protocol specification](https://spec.torproject.org/hspow-spec/common-protocol.html)

***Editor's Note:** We volunteer daily to ensure the credibility of information on our platform is Verifiably True. Support our research by scanning the QR code below to donate 5,000 sats.*

*For mobile scanning, open the article on another display and scan the QR code with a Bitcoin wallet. Verify receiving address **3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb** before sending.*

*BitcoinVersus.tech provides technical and financial journalism for informational purposes only and does not provide investment, legal or cybersecurity assurance.*
