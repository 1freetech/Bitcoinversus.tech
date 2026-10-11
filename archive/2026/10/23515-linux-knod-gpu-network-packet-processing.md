---
post_id: 23515
title: "Linux KNOD Uses GPUs to Process Network Packets"
live_url: "https://bitcoinversus.tech/2026/10/11/linux-knod-gpu-network-packet-processing/"
featured_media_id: 23512
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/knod-linux-gpu-packet-processing-cover.jpg"
status: publish
---

<!-- wp:paragraph -->
<p><strong>Linux developers are testing a new way to use ordinary GPUs as network packet processors. The open-source project, called KNOD, moves XDP and receive-side IPsec work onto a GPU from inside the Linux kernel—without CUDA, ROCm, or a userspace GPU runtime in the data path.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>At Linux Plumbers Conference 2026, developers Hoyeon Lee and Taehee Yoo reported that KNOD reached <strong>up to 70 million packets per second</strong> on a Katran-derived XDP workload and <strong>80 Gbit/s</strong> on receive-side IPsec. The <a href="https://lpc.events/event/20/contributions/2462/">conference session</a> describes a design where the kernel JIT-compiles an XDP program into GPU machine code, the NIC places packets directly into GPU-accessible memory, and the GPU returns the usual XDP verdicts.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://hwbusters.com/wp-content/uploads/2026/10/knod-gpu-packet-offload-hero.jpg" alt="KNOD GPU packet processing graphic showing XDP and IPsec throughput figures" /><figcaption class="wp-element-caption"><em>KNOD’s reported LPC 2026 results include up to 70 Mpps for a Katran-derived XDP workload and 80 Gbit/s for receive-side IPsec. Hardware Busters graphic based on developer-reported figures.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why put packet processing on a GPU?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Fast networking can consume a surprising amount of CPU time. An XDP program may need to inspect headers, run load-balancing logic, drop unwanted traffic, redirect packets, or apply other per-packet decisions millions of times every second. As link speeds climb, dedicating more CPU cores to that work becomes expensive.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A GPU has the opposite shape of a CPU. Instead of a smaller number of general-purpose cores optimized for low-latency serial work, it has many parallel execution lanes designed to run similar operations across large groups of data. That maps naturally onto workloads where the same small packet-processing program is applied repeatedly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That hardware split is easier to understand alongside BitcoinVersus’ <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-cpu-vs-gpu-vs-npu-whats-the-difference/">CPU vs. GPU vs. NPU explainer</a>. KNOD is unusual because it is not using the GPU for graphics or AI inference. It is treating the GPU as a kernel-managed networking accelerator.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=9DmHIUe9XJ0","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=9DmHIUe9XJ0
</div><figcaption class="wp-element-caption"><em>The Linux Foundation’s Open Source Summit Korea recording features Taehee Yoo and Hoyeon Lee explaining KNOD’s in-kernel GPU packet-processing architecture.</em></figcaption></figure>
<!-- /wp:embed -->



<!-- wp:heading -->
<h2 class="wp-block-heading">The NIC can write straight into GPU memory</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The most important part of KNOD is not simply that a GPU runs networking code. It is the path the packet takes. The network card can DMA incoming packets directly into memory the GPU can access instead of forcing the CPU to copy every packet through a userspace application first.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That idea is closely related to the direct-memory principles behind <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-dma-direct-memory-access-cpu-ram-pcie/">DMA</a> and <a href="https://bitcoinversus.tech/2026/08/19/rdma-programming-how-direct-memory-access-powers-ai-and-high-speed-computing/">RDMA</a>: the fastest path is often the one that avoids unnecessary CPU-mediated copies. KNOD extends that thinking by making accelerator memory part of the packet receive path.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The kernel then JIT-compiles the packet program into AMD GPU machine code and dispatches it. The GPU processes many packets in parallel and returns decisions such as pass, drop, transmit, or redirect. That allows existing Linux networking concepts to remain visible while the heavy per-packet compute shifts onto another device.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=_MAu98Yam3c","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=_MAu98Yam3c
</div><figcaption class="wp-element-caption"><em>This eBPF/XDP deep dive explains the verifier, JIT compilation, maps, and XDP execution model that KNOD is extending onto GPU hardware.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The 70 Mpps result is not just an empty packet loop</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The reported 70 Mpps figure came from an XDP workload derived from Katran, Meta’s open-source L4 load balancer. That matters because a packet counter that barely touches packet contents can produce impressive throughput without proving much about useful network processing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The developers also reported 32 Mpps on an RX 6600 in earlier RDNA2 testing, showing that the idea is not limited to one high-end accelerator. Their broader goal is a generic kernel offload framework rather than a single benchmark-specific trick.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/linux/comments/1v1mleq/linux_patches_introduce_knod_for_inkernel_network/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/linux/comments/1v1mleq/linux_patches_introduce_knod_for_inkernel_network/
</div><figcaption class="wp-element-caption"><em>The Linux community has been debating where GPU packet offload could fit compared with CPUs, SmartNICs, DPUs, and other acceleration approaches.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">IPsec makes KNOD more than an XDP experiment</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>KNOD now includes receive-side IPsec as a second proof of concept. The GPU can decrypt ESP packets after the NIC places them in accelerator-accessible memory, with the developers reporting up to 80 Gbit/s in their current tests.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That result should be read carefully. The <a href="https://lists.openwall.net/linux-kernel/2026/07/19/528">kernel RFC</a> explicitly describes the IPsec implementation as a proof of concept, receive-only, and not production-ready. The important point is architectural: the same offload framework can support more than one packet-processing feature.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">KNOD is still an RFC, not a mainline Linux feature</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>None of this means Linux servers can enable KNOD with a normal configuration switch today. The code is still under RFC review, and the design crosses several complicated kernel boundaries including networking, BPF, DRM, GPU drivers, memory providers, queue affinity, and control-plane tooling.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The developers are also exploring broader hardware support. AMD GPUs are the main target so far, but Intel Arc graphics and AMD integrated GPUs are on the roadmap, while the networking side is being designed around multiple NIC families rather than a single vendor.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why this could matter in data centers</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If the model survives upstream review and real production testing, KNOD could give operators another option between CPU-only packet processing and dedicated SmartNIC or DPU hardware. A consumer-class GPU or integrated GPU that already exists in a system could potentially absorb work that otherwise consumes valuable CPU cores.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The harder questions are latency, batching behavior, driver complexity, fault isolation, power efficiency across different workloads, and whether the economics remain attractive once a complete production system is built. Those questions matter more than one headline throughput number.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>KNOD is interesting because it changes the role of the GPU. Instead of being a separate compute island reached through a userspace runtime, the GPU becomes another accelerator the Linux kernel can schedule directly into the networking path. If that abstraction proves clean enough for upstream Linux, it could open the door to a much broader class of kernel-managed accelerator workloads.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>BitcoinVersus.Tech Editor’s Note:</strong> KNOD remains experimental and under RFC review. Throughput figures cited here are developer-reported results from the project’s conference material and RFC work, not independent production benchmarks.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/bitcoinversus","type":"rich","providerNameSlug":"x","responsive":true,"className":"wp-block-embed-x"} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/bitcoinversus
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Follow BitcoinVersus.Tech on X for Bitcoin mining, AI hardware, semiconductors, Linux, networking, and data-center reporting.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Support independent technology reporting:</strong> Bitcoin donations help fund BitcoinVersus.Tech research and publishing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Disclaimer: BitcoinVersus.Tech provides technology news and analysis for informational purposes only.</em></p>
<!-- /wp:paragraph -->