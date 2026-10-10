---
title: "GlobalFoundries’ FDX Fusion Targets Physical AI With 7nm-Class Digital Performance"
status: published
wordpress_post_id: 22878
live_url: "https://bitcoinversus.tech/2026/10/09/globalfoundries-fdx-fusion-targets-physical-ai-with-7nm-class-digital-performance/"
published: "2026-10-09T22:55:53"
modified: "2026-10-09T22:55:53"
featured_media_id: 22876
body_media_id: 22877
youtube:
  - "https://www.youtube.com/watch?v=jasfRUwlfS8"
social:
  - "https://www.reddit.com/r/chipdesign/comments/1sc66fb/22nm_fdsoi_body_biasing_limits_and_well/"
seo_title: "GlobalFoundries FDX Fusion Targets Physical AI With 7nm-Class Performance | BitcoinVersus.Tech"
seo_description: "GlobalFoundries unveils FDX Fusion, a next-generation FD-SOI platform for Physical AI targeting 7nm-like digital performance, analog, RF, embedded memory and efficient edge control."
seo_schema_type: "article"
excerpt: "GlobalFoundries says its next-generation FDX Fusion FD-SOI platform will target Physical AI with 7nm-like digital performance plus analog, RF, embedded memory and real-time control, with Dresden development and manufacturing planned toward 2028."
no_text_boxes: true
---

<!-- wp:paragraph --><p><strong>GlobalFoundries is developing a new FD-SOI chip platform called FDX Fusion for robots, autonomous machines, industrial systems and other Physical AI hardware that has to sense, compute, control and communicate in real time without burning data-center levels of power.</strong></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><a href="https://gf.com/news-and-events/news/globalfoundries-marks-dresden-expansion-milestone-announces-next-generation-platform-for-physical-ai/"><strong>GlobalFoundries announced FDX Fusion on October 9</strong></a> alongside a €1.1 billion expansion of its Dresden, Germany manufacturing site. The company says the platform is intended to combine <strong>7nm-like digital performance</strong> with analog, mixed-signal, embedded-memory and high-performance RF capabilities on a next-generation fully depleted silicon-on-insulator process.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The wording is important: GlobalFoundries is describing a <strong>performance target</strong>, not saying FDX Fusion is a conventional 7nm FinFET process. The point of the platform is to integrate several functions that Physical AI machines need onto an energy-efficient technology rather than chase logic density alone.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=jasfRUwlfS8","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=jasfRUwlfS8
</div><figcaption class="wp-element-caption"><em>Semiconductor Engineering interviews GlobalFoundries’ Jamie Schaeffer on FD-SOI versus FinFET, including the tradeoffs that make FD-SOI useful for low-power and highly integrated designs.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:embed {"url":"https://www.reddit.com/r/chipdesign/comments/1sc66fb/22nm_fdsoi_body_biasing_limits_and_well/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/chipdesign/comments/1sc66fb/22nm_fdsoi_body_biasing_limits_and_well/
</div><figcaption class="wp-element-caption"><em>A 2026 r/chipdesign discussion gets into a practical FD-SOI advantage: back-gate/body-bias control and how engineers actually handle it in 22FDX-class designs.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:image {"id":22877,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/globalfoundries-fdx-fusion-physical-ai-body.png" alt="Physical AI semiconductor platform connecting edge computing hardware to robotics and autonomous machines" class="wp-image-22877" /><figcaption class="wp-element-caption"><em>Physical AI systems combine sensing, local compute, real-time control and connectivity close to the machine.</em></figcaption></figure><!-- /wp:image -->

<!-- wp:heading --><h2 class="wp-block-heading">Physical AI Needs More Than a Fast CPU</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A robot, drone, autonomous vehicle or industrial controller does not simply run an AI model. It has to read cameras and sensors, process signals, make decisions under tight latency limits, drive motors or actuators, communicate securely and keep doing all of that within a limited power and thermal envelope.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>That is why the Physical AI semiconductor stack is broader than the GPU. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/09/27/ambarella-x7-physical-ai-2-5-watts/"><strong>Ambarella’s X7 Physical AI chip</strong></a>, which shows the same pressure from another direction: putting useful perception and AI inference into machines operating at only a few watts.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">FD-SOI Gives Designers a Different Set of Knobs</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>FD-SOI places an extremely thin silicon layer over an insulating layer. That structure reduces several parasitic effects found in conventional bulk CMOS and makes <strong>body biasing</strong> especially useful. Designers can adjust transistor behavior after manufacturing to trade performance against leakage and power.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>GlobalFoundries already uses that approach in its 22FDX family. Its <a href="https://gf.com/technologies/cmos/fdx-fd-soi/"><strong>FDX technology roadmap</strong></a> emphasizes adaptive body bias, RF integration, embedded memory and low-energy operation. FDX Fusion is the proposed next step, with GlobalFoundries targeting more than twice the density of its first-generation FDX technology while adding higher performance for edge intelligence.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>BitcoinVersus.Tech recently looked at a related path in <a href="https://bitcoinversus.tech/2026/10/06/semiconductors-singapore-helix-edge-ai-fd-soi-phase-change-memory/"><strong>Singapore’s HELIX edge-AI research program</strong></a>, which combines 18nm FD-SOI with phase-change memory. The common idea is that edge AI benefits from technologies optimized around power, memory, sensing and mixed-signal integration rather than logic scaling alone.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">“7nm-Like” Does Not Mean a 7nm Node</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Process-node names are no longer simple measurements of one transistor dimension, and cross-company comparisons are especially messy. GlobalFoundries says FDX Fusion <strong>targets 7nm-like digital performance</strong>. That should be read as a performance-class goal for the digital portion of the platform, not as a claim that Dresden is suddenly converting to a conventional 7nm FinFET production line.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The more interesting claim is integration. GlobalFoundries wants one technology to handle digital compute, analog interfaces, embedded memory, RF communications and real-time control. That mix maps directly onto robotics and autonomous-machine requirements.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Robots Need Deterministic Control Beside AI</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Large neural networks can recognize objects or plan behavior, but motors still need predictable control loops. Encoders need sampling. Safety systems need fast responses. Wireless links and sensor interfaces need analog and RF circuitry. The best Physical AI processor is therefore often a heterogeneous system rather than one giant AI accelerator.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>BitcoinVersus.Tech covered the same architectural idea in <a href="https://bitcoinversus.tech/2026/09/27/qbits-qb88xx-puts-a-robot-cerebellum-on-one-chip/"><strong>QBit’s QB88XX robot-control SoC</strong></a>, where high-level intelligence and deterministic low-level motor control are treated as separate but tightly connected workloads.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Dresden Is Also Getting More Capacity</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>FDX Fusion is arriving alongside GlobalFoundries’ SPRINT expansion in Dresden. The company says it is investing €1.1 billion to push annual capacity above <strong>one million 300mm wafers by the end of 2028</strong>. GlobalFoundries says the site currently employs about 3,000 people and has roughly 60,000 square meters of cleanroom and laboratory space.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The expansion is aimed at automotive, industrial IoT, aerospace, defense and other markets where long product lifetimes and secure regional supply can matter as much as absolute transistor density. FDX Fusion development is planned for Dresden, although GlobalFoundries notes that the start of development work is contingent on German federal approval under the IPCEI Advanced Semiconductor Technologies program.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Physical AI Is Becoming a Semiconductor Category</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The phrase “Physical AI” is becoming a broad industry label for machines that perceive the physical world, reason about it and act back on it. Underneath the marketing language is a real hardware problem: those systems need compute, sensors, connectivity and control close to the machine, often with strict limits on power and latency.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>GlobalFoundries is betting that FD-SOI can occupy that middle ground between very advanced digital-only logic and older mixed-signal processes. The company also owns MIPS, giving it a processor-IP path alongside manufacturing. BitcoinVersus.Tech has separately covered <a href="https://bitcoinversus.tech/2026/09/29/mips-and-xcelsa-use-ai-to-optimize-risc-v-custom-silicon/"><strong>MIPS and Xcelsa using AI to optimize custom RISC-V silicon</strong></a>, another piece of the growing edge-compute ecosystem around autonomous machines.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">What to Watch</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>2028 manufacturing:</strong> GlobalFoundries is planning FDX Fusion development and manufacturing in Dresden toward the expanded site’s 2028 capacity target.</li><li><strong>Density:</strong> the company is targeting more than twice the density of first-generation FDX technology.</li><li><strong>Performance:</strong> the key benchmark will be what “7nm-like” digital performance means in real customer silicon.</li><li><strong>Body bias:</strong> dynamic power/performance tuning remains one of FD-SOI’s most interesting engineering advantages.</li><li><strong>Integration:</strong> analog, RF, memory and digital logic on one platform may matter more for robots than a narrow CPU benchmark.</li><li><strong>Customers:</strong> the next major signal will be named design wins in robotics, industrial autonomy, automotive or defense.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Bottom Line</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>FDX Fusion is GlobalFoundries’ argument that the next important semiconductor race is not only about smaller transistors. Physical AI machines need a mix of efficient compute, sensing, control, memory and connectivity. If GlobalFoundries can deliver its promised density and 7nm-class digital performance while preserving FD-SOI’s power and mixed-signal advantages, FDX Fusion could become a distinctive platform for the chips that sit inside robots and autonomous machines rather than inside hyperscale GPU clusters.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><strong><em>Editor’s Note:</em></strong> FDX Fusion is a roadmap technology. Commercial specifications, customer designs and manufacturing schedules may change before production. GlobalFoundries’ “7nm-like” wording describes a targeted digital-performance class, not a conventional 7nm process-node designation.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>BitcoinVersus.Tech is not a financial advisor. This media platform reports on technology and financial subjects for informational purposes.</p><!-- /wp:paragraph -->