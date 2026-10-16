---
post_id: 25933
title: "Arm AGI CPU Scales to 336 CPUs in Open Rack Designs"
live_url: "https://bitcoinversus.tech/2026/10/15/arm-agi-cpu-336-cpus-open-rack-designs/"
slug: "arm-agi-cpu-336-cpus-open-rack-designs"
featured_media_id: 25932
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/arm-agi-cpu-open-rack-cover-1200x630-1.jpg"
status: publish
content_hash: "fa6f6d6ff7d9531c1f8d5fa150010e7400ecf8b8"
---

<!-- wp:paragraph -->
<p><strong>Arm is pushing its AGI CPU from a standalone processor story into rack-scale infrastructure.</strong> At the 2026 Open Compute Project Global Summit, Arm said Supermicro highlighted open-rack designs built around the chip, including a 21-inch liquid-cooled configuration supporting 128 Arm AGI CPUs and a wider design scaling to 336 CPUs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is a different development from the earlier <a href="https://bitcoinversus.tech/2026/10/13/arm-agi-cpu-reaches-1-99x-modeled-rack-performance-vs-amd-epyc/"><strong>Arm AGI CPU benchmark story</strong></a>. The new focus is deployment: how many processors, accelerators, memory devices, network interfaces and management components can be assembled into repeatable open systems for continuous AI-agent workloads.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/Arm/status/2109809623113109629","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/Arm/status/2109809623113109629
</div><figcaption class="wp-element-caption"><em>Arm highlighted independent Signal65 rack-level modeling for AGI CPU during OCP 2026.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">From CPU to Open Rack</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Arm describes its Open Agentic Infrastructure Platform as an OCP-aligned architecture that can combine general-purpose compute, AI accelerators, memory, networking, I/O and system management without locking every deployment into one fixed hardware recipe. That approach extends the direction already visible in <a href="https://bitcoinversus.tech/2026/10/04/semiconductors-arm-neoverse-css-n4-128-cores-agentic-ai-silicon/"><strong>Arm’s recent Neoverse-based AI infrastructure work</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In <a href="https://newsroom.arm.com/blog/key-takeaways-from-ocp-global-summit-2026"><strong>Arm’s OCP 2026 technical recap</strong></a>, the company says Supermicro’s 21-inch liquid-cooled design supports 128 AGI CPUs, while a wider configuration scales to 336. Arm also points to its own AGI CPU reference-server work and Meta’s Yosemite YV5 rack-scale design as part of a reusable infrastructure base around the processor.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=lMA3f4YKnME","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=lMA3f4YKnME
</div><figcaption class="wp-element-caption"><em>Arm’s OCP Global Summit keynote explains why agentic workloads are changing CPU and rack requirements.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Agentic AI Needs So Much CPU</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AI agents do more than send prompts to a model. They maintain state, retrieve context, execute code, call tools, interact with databases and keep services running between model requests. That leaves CPUs responsible for orchestration, sandbox creation, storage access, network work and application logic even when GPUs or other accelerators handle model inference.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The rack therefore becomes a useful engineering unit. A processor that uses less power per server can sometimes fit into more nodes inside the same rack-level power envelope. That is also why open rack standards are becoming more important across the industry, including the <a href="https://bitcoinversus.tech/2026/10/12/nvidia-opens-vera-rubin-rack-designs-ocp/"><strong>Vera Rubin rack designs NVIDIA contributed to OCP</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The 1.99× Number Still Needs Context</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://signal65.com/research/ai/arm-agi-cpu-performance-rack-scale/"><strong>Signal65’s analysis</strong></a> reports an average 1.99× modeled performance per rack for Arm AGI CPU versus AMD EPYC 9755 across seven agentic-AI workloads. The study says 21 to 23 AGI CPU servers fit into a modeled 24 kW rack versus 13 EPYC 9755 servers, giving the Arm configuration 5,712 to 5,888 physical cores against 3,328.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That comparison should not be read as a direct full-rack benchmark. Signal65 says the rack results are modeled from measured server-level performance and rated server power, and it also discloses that the research was commissioned by Arm. The result is still useful evidence about density, but production deployments will ultimately determine real power, cooling and application-level performance.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=eklwW8vQ1ZQ","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=eklwW8vQ1ZQ
</div><figcaption class="wp-element-caption"><em>Arm and Meta discuss moving AI infrastructure from individual silicon toward reusable open rack designs.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Comes Next</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The larger story is that CPU architecture, rack geometry, cooling and workload scheduling are being designed together. If Arm AGI CPU systems move from reference designs into broad production, buyers will be able to compare not only single-socket performance but agents completed per rack, per kilowatt and per dollar.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For now, the 336-CPU design shows how aggressively vendors are preparing for that shift. The processor is only one layer; the engineering challenge is turning thousands of cores, memory channels, network links and cooling loops into a serviceable rack that can stay busy around the clock.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong><br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->