---
post_id: 21883
title: "Networking: Upscale Token Fabric Wants One Open Network for NVIDIA, AMD, and Rival AI Chips"
live_url: "https://bitcoinversus.tech/2026/10/08/networking-upscale-token-fabric-open-ai-network-nvidia-amd-rival-chips/"
featured_media_id: 21876
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-upscale-token-fabric-network-switch-1200x630-1.jpg"
status: publish
---
<!-- wp:paragraph -->
<p><strong>AI data centers are turning into giant distributed computers, and the network between accelerators is becoming almost as important as the accelerators themselves.</strong> NVIDIA-backed Upscale launched <strong>Token Fabric</strong> on October 8, 2026, an open networking platform designed to connect GPUs and other AI chips from multiple suppliers through one scale-up, scale-out, and software stack.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.reuters.com/business/nvidia-backed-upscale-ai-launches-platform-connect-chips-rival-suppliers-2026-10-08/"><strong>Reuters reports</strong></a> that the $2 billion startup is targeting neoclouds and major cloud providers that want to mix AI processors from different vendors without building separate networking systems around each chip family. Upscale says the goal is simple: keep expensive accelerators computing instead of waiting for data.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":21877,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-upscale-token-fabric-ai-server-rack.jpg?w=681" alt="Servers and networking equipment installed in a data center rack, representing the compute systems connected by an AI network fabric." class="wp-image-21877" /><figcaption class="wp-element-caption"><em>Servers and network equipment in a rack. Photo by Abigor via Wikimedia Commons, CC BY-SA 3.0.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Token Fabric Combines Scale-Up and Scale-Out</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AI networking has two major jobs. <strong>Scale-up</strong> links accelerators inside a tightly coupled compute domain, often within a rack or pod. <strong>Scale-out</strong> connects those domains across racks and across the wider <a href="https://bitcoinversus.tech/2026/07/28/what-happens-inside-an-ai-data-center-when-you-ask-chatgpt-a-question/"><strong>AI data center</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Token Fabric tries to bring both layers under one architecture. Upscale’s <a href="https://www.businesswire.com/news/home/20261008869540/en/"><strong>official launch announcement</strong></a> says its own <strong>SkyFabriX</strong> silicon and switch trays handle scale-up, while Upscale-engineered scale-out systems use <strong>NVIDIA Spectrum-X</strong> Ethernet silicon. <strong>SkyOS</strong> and <strong>SkyCMD</strong> provide a common software and operations layer across the network.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=N_T0YyFiRBE","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=N_T0YyFiRBE
</div><figcaption class="wp-element-caption"><em>Tech Field Day’s Upscale presentation explains the company’s purpose-built scale-up and scale-out networking strategy for heterogeneous AI infrastructure.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Why AI Chips Spend So Much Time Talking to Each Other</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A modern AI model usually cannot fit inside one processor. Training and inference are distributed across many <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-cpu-vs-gpu-vs-npu-whats-the-difference/"><strong>GPUs and other accelerators</strong></a>, which constantly exchange tensors, gradients, KV-cache data, synchronization messages, and intermediate results.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes the network part of the computer. If one accelerator finishes its work but cannot receive the next piece of data, the chip can sit idle even though the data center is still consuming power. This is the same bottleneck behind technologies such as <a href="https://bitcoinversus.tech/2026/08/19/rdma-programming-how-direct-memory-access-powers-ai-and-high-speed-computing/"><strong>RDMA</strong></a>, which moves data directly between memory regions with less CPU involvement.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://bsky.app/profile/datacenter.bsky.social/post/3mtjos4tqrk2i","type":"rich","providerNameSlug":"bluesky","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-bluesky wp-block-embed-bluesky"><div class="wp-block-embed__wrapper">
https://bsky.app/profile/datacenter.bsky.social/post/3mtjos4tqrk2i
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Data Center Knowledge highlights the same industry shift: network silicon is becoming a bottleneck as AI clusters scale and 102.4T switching architectures chase lower latency and congestion.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>SkyFabriX Is Upscale’s Scale-Up Bet</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Upscale says <strong>SkyFabriX</strong> is purpose-built scale-up switch silicon based on its SkyHammer architecture. The company says it supports ESUN, UALoE, SUE-T, standard Ethernet/IP, and evolving standards including <a href="https://bitcoinversus.tech/2026/10/02/cadence-tsmc-a14-ualink-wafer-scale-ai-chiplets/"><strong>UALink</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The strategy matters because today’s biggest AI systems often use vendor-specific links. NVIDIA has <strong>NVLink</strong> and NVSwitch. AMD and partners are pushing open rack-scale systems around UALink and Ethernet. BitcoinVersus.Tech has already tracked this shift through <a href="https://bitcoinversus.tech/2026/09/30/hpe-lands-1-2-billion-vultr-order-for-amd-helios-ai-racks/"><strong>AMD Helios AI racks</strong></a> and the broader <a href="https://bitcoinversus.tech/2026/07/27/nvidia-vs-amd-battle-for-ai-infrastructure-leadership/"><strong>NVIDIA-versus-AMD AI infrastructure battle</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Scale-Out Side Uses NVIDIA Spectrum-X</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For scale-out, Upscale is not trying to replace every piece of NVIDIA networking silicon. Its systems use <strong>NVIDIA Spectrum-X</strong> Ethernet chips, with the company describing 400G and 800G systems moving toward 1.6T generations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That puts Token Fabric directly into the same bandwidth race as <a href="https://bitcoinversus.tech/2026/10/06/networking-ciena-6-4t-optics-200t-ai-interconnect-70-percent-lower-power/"><strong>6.4T optical interconnects</strong></a>, <a href="https://bitcoinversus.tech/2026/10/03/coherent-photonlink-6-4t-npo-ai-data-center-optics/"><strong>near-package optics</strong></a>, and the <a href="https://bitcoinversus.tech/2026/10/06/networking-what-is-top-of-rack-switch-data-center/"><strong>top-of-rack switches</strong></a> that aggregate server and accelerator traffic inside modern data centers.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":21879,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-upscale-token-fabric-de-cix-switch-rack.jpg?w=1024" alt="High-density network switch rack representing the scale-out Ethernet fabric used to connect AI infrastructure across a data center." class="wp-image-21879" /><figcaption class="wp-element-caption"><em>High-density switch rack. Photo by Stefan Funke via Wikimedia Commons/Flickr, CC BY-SA 2.0.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Open Ethernet Is the Strategic Part</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Upscale’s pitch is not simply “another fast switch.” It is trying to create an open network that can connect heterogeneous compute. In practice, that means GPUs, XPUs, custom ASICs, memory, and storage from different suppliers should be able to participate in one operational model instead of forcing operators into separate proprietary islands.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That openness is especially important as operators experiment with different accelerator architectures. One data center may combine NVIDIA GPUs, AMD GPUs, custom inference chips, CPUs, and storage systems. Every one of those devices still depends on <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-nic-network-interface-card-servers-asic-miners/"><strong>NICs</strong></a>, switches, cables, optics, routing, congestion control, and network software to move data.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://bsky.app/profile/theregister.com/post/3mcxvisyhxk2k","type":"rich","providerNameSlug":"bluesky","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-bluesky wp-block-embed-bluesky"><div class="wp-block-embed__wrapper">
https://bsky.app/profile/theregister.com/post/3mcxvisyhxk2k
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>The Register previously highlighted Upscale’s effort to challenge closed AI interconnects such as NVSwitch, providing context for why the company has kept pushing open scale-up networking.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>SkyOS and SkyCMD Try to Make the Hardware Operate as One System</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The hardware is only half the problem. Token Fabric also includes <strong>SkyOS</strong>, Upscale’s AI-focused network operating system, and <strong>SkyCMD</strong>, an orchestration and observability layer designed to manage thousands of network elements as one system.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Reuters says the software can identify bottlenecks and flag equipment that may need replacement. That matters because a large AI cluster can fail to deliver useful performance even when every individual component appears healthy. A congested link, bad optic, overloaded switch, or misconfigured path can reduce accelerator utilization across an entire job.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those problems connect directly to basic networking metrics such as <a href="https://bitcoinversus.tech/2026/10/06/networking-bandwidth-vs-throughput-vs-latency-whats-the-difference/"><strong>bandwidth, throughput, and latency</strong></a>, plus <a href="https://bitcoinversus.tech/2026/10/06/networking-what-are-packet-loss-jitter-fast-connections-slow/"><strong>packet loss and jitter</strong></a>. In synchronized AI jobs, small delays can multiply because thousands of accelerators may be waiting at the same collective operation.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=HP5oFnEtDQA","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=HP5oFnEtDQA
</div><figcaption class="wp-element-caption"><em>Leo Cui’s AI networking overview explains scale-up, scale-out, NVLink, UALink, InfiniBand, Ethernet, Spectrum-X, NICs, optics, and why the network increasingly behaves like part of the AI computer itself.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Keeping GPUs Busy Is the Real Economic Goal</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The most important number in an AI network is not necessarily the theoretical port speed. It is how much useful accelerator work the network enables. If a GPU cluster spends too much time waiting for collective operations, the owner is paying for power, cooling, racks, and expensive silicon without receiving the expected amount of useful compute.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why Upscale talks about <strong>tokens per dollar</strong> and <strong>tokens per watt</strong>. The same principle appears in other AI infrastructure stories, including BitcoinVersus.Tech’s look at a <a href="https://bitcoinversus.tech/2026/09/27/whitefiber-continuum-136tbps-distributed-gpu-supercluster/"><strong>136 Tbps distributed GPU supercluster</strong></a> and <a href="https://bitcoinversus.tech/2026/09/27/delos-data-raises-100-million-to-attack-ais-interconnect-bottleneck/"><strong>interconnect startups attacking AI’s data-movement bottleneck</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Upscale Is Betting Customers Want to Avoid Vendor Lock-In</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Token Fabric is designed for hyperscalers, accelerator makers, neoclouds, and enterprises. Upscale says customers can buy the full stack, integrated systems, or pieces such as silicon, switch trays, and software depending on how much control they want.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That flexibility is the competitive thesis. A hyperscaler with its own network engineering team may want the silicon and SDK but keep its own software. A smaller neocloud may prefer an integrated system. An accelerator vendor may want validated networking without building an entire network stack from scratch.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Company Has $500 Million in Funding Behind the Bet</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Upscale is not approaching this market as a tiny bootstrapped switch startup. Reuters says the company raised a <strong>$190 million</strong> extension in June 2026, bringing total funding to about <strong>$500 million</strong> and valuing the company at <strong>$2 billion</strong>. Investors include NVIDIA, Salesforce Ventures, Temasek, and Premji Invest.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>CEO Barun Kar told Reuters he expects Token Fabric revenue next year in the <strong>tens of millions of dollars</strong>, with the possibility of reaching the <strong>low hundreds of millions of dollars</strong>. Those are company expectations, not guaranteed results, but they show how quickly Upscale expects AI networking demand to develop.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Market Is Moving Toward Faster Switches and More Optics</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AI cluster growth is forcing changes throughout the physical network. Faster switch ASICs require denser front panels, higher-speed transceivers, better thermal design, more fiber, and eventually more advanced optical packaging. BitcoinVersus.Tech has followed that progression through <a href="https://bitcoinversus.tech/2026/09/26/micas-ai-network-switch-production-cpo/"><strong>AI network switches</strong></a>, <a href="https://bitcoinversus.tech/2026/09/27/ciena-pushes-ai-networks-from-1-6t-coherent-optics-to-6-4t-cpo/"><strong>co-packaged optics</strong></a>, and higher-density fiber systems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Upscale’s launch announcement cites outside forecasts projecting nearly <strong>$1 trillion</strong> in AI back-end switch spending through 2030 and more than <strong>$200 billion</strong> in AI networking by 2030. Those forecasts come from Dell’Oro and 650 Group and should be treated as industry projections rather than guaranteed market outcomes.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>General Availability Is Planned for Early 2027</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Upscale says early-access and joint-validation programs are already underway, with general availability planned for early 2027. Reuters reports the first portion of Token Fabric is expected in the fourth quarter of 2026, with the full platform arriving in stages through 2027.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That rollout matters because the hardest part will be proving interoperability in production. Connecting different accelerators on paper is one thing. Delivering deterministic latency, lossless behavior, congestion control, observability, upgrades, and fault recovery across a mixed-vendor cluster is much harder.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>What to Watch Next</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The biggest questions are whether hyperscalers and neoclouds actually adopt SkyFabriX for scale-up, how well the open standards interoperate with rival accelerators, whether SkyOS and SkyCMD reduce operational complexity, and whether Token Fabric can match the tightly integrated performance that vendors such as NVIDIA already deliver inside systems such as the <a href="https://bitcoinversus.tech/2026/08/05/the-components-inside-the-nvidia-gb200-nvl72-ai-rack-kitchen-analogy/"><strong>GB200 NVL72 AI rack</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The larger trend is already clear: AI infrastructure is becoming less about a single chip and more about the entire system around it. Accelerators, memory, NICs, switches, copper, fiber, optics, network operating systems, telemetry, and orchestration all determine how much useful work the data center can produce. Token Fabric is Upscale’s attempt to make that whole network open enough that operators can change the compute underneath it without rebuilding everything else.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><strong>Editor’s Note</strong></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Upscale announced Token Fabric on October 8, 2026. Product specifications, roadmap targets, availability dates, and market forecasts are based on Upscale’s launch materials and should be treated as vendor claims or forward-looking expectations until independently validated in production. Featured photograph: Dsimic via Wikimedia Commons. Body photographs: Abigor, CC BY-SA 3.0; Stefan Funke, CC BY-SA 2.0.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support and donation options are available through BitcoinVersus.Tech.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. Content is provided for informational purposes.</p>
<!-- /wp:paragraph -->