---
title: "Everspin Connects Persistent MRAM to CXL for AI Servers"
date: 2026-09-29
post_id: 19522
status: publish
live_url: https://bitcoinversus.tech/2026/09/29/everspin-cxl-mram-ai-servers-snia-2026/
featured_media: 19521
seo_title: "Everspin Connects Persistent MRAM to CXL for AI Servers"
seo_description: "Everspin demonstrates CXL-connected PERSYST MRAM for AI servers, targeting persistent checkpointing, KV cache and a new tier between DRAM and NAND."
---

<!-- wp:paragraph --><p>Everspin Technologies has demonstrated what it calls the first CXL-connected MRAM platform, placing persistent memory directly on the Compute Express Link fabric for AI and data-center workloads. In <a href="https://everspin.gcs-web.com/news-releases/news-release-details/everspin-demonstrates-worlds-first-cxl-connected-mram-snia">the company’s September 29 announcement</a>, the working system combines PERSYST MRAM with a CXL-enabled server to create a memory-semantic tier between volatile DRAM and NAND storage.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>The demonstration matters because AI infrastructure increasingly runs into a memory problem as well as a compute problem. Processors and accelerators can sit idle while data moves between memory and storage tiers. Everspin’s approach is designed to keep frequently written or restart-sensitive data closer to the processor while retaining it through power loss.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">A persistent tier between DRAM and NAND</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>MRAM, or magnetoresistive random-access memory, stores data using magnetic states rather than the charge-based storage used by conventional DRAM. The important operational difference is persistence: MRAM can retain data without power while still behaving much more like memory than a conventional SSD.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Everspin says its CXL demonstration provides cache-line-level, nanosecond-class access and writes up to 100 times faster than NAND-based solid-state storage. That 100× figure is a company performance claim from the demonstrated platform, not an independently reproduced BitcoinVersus.tech benchmark.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>The architecture complements the broader CXL transition BitcoinVersus.tech recently examined with <a href="https://bitcoinversus.tech/2026/09/27/astera-labs-leo-x-series-ai-memory-cxl-3-2/">Astera Labs’ Leo X-Series CXL 3.2 memory controllers</a>. CXL is increasingly being used to separate memory capacity from a single processor socket and make that capacity available as a pooled system resource.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">The demo used real server hardware</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>The test platform used a Supermicro AS-1116CS-TN server with a 32-core AMD EPYC 9355 processor, an AMD Alveo U250 FPGA carrying a Wolley CXL controller, and Everspin PERSYST 1GB DDR4 MRAM UDIMMs. Everspin and Wolley demonstrated reads and writes through the CXL interface under test conditions at SNIA Developer Conference 2026.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>The surrounding technical program supports the significance of the experiment. <a href="https://www.snia.org/sniadeveloper/agenda">The conference agenda</a> included dedicated sessions on MRAM, CXL fabric management, shared KV caches across GPUs and persistent KV caching, showing how memory fabrics and AI inference are converging as one systems problem.</p><!-- /wp:paragraph -->
<!-- wp:embed {"url":"https://www.youtube.com/watch?v=uGC6B_GKCs4","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} --><figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=uGC6B_GKCs4
</div></figure><!-- /wp:embed -->
<!-- wp:paragraph --><p><em>Everspin CEO Sanjeev Aggarwal explains MRAM’s persistence, performance characteristics and AI use cases in this English-language Future Tech Investor Conference interview hosted by RedChip.</em></p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">AI checkpointing and KV cache are the practical targets</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>Two AI workloads stand out. The first is checkpointing, where a running model periodically saves state so a failure does not force a long computation to restart from the beginning. Persistent memory can reduce the amount of state that must be flushed down to slower storage.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>The second is key-value cache for large-language-model inference. KV cache grows as conversations and context windows grow, making memory capacity and data movement important constraints on inference. BitcoinVersus.tech has separately tracked the expansion of <a href="https://bitcoinversus.tech/2026/09/27/sk-hynix-expands-ai-memory-beyond-hbm/">AI memory beyond HBM</a> as vendors attack different points in that hierarchy.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Unlike HBM attached directly to an accelerator, CXL-connected persistent memory would occupy a different performance and capacity tier. The engineering question is therefore not whether MRAM replaces every memory technology, but whether its combination of persistence, latency and endurance is valuable enough for specific data structures to justify its cost.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">What still needs to be proven</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>A conference demonstration is not a production deployment. Customer workload testing still needs to establish application-level latency, throughput, endurance, capacity economics, controller overhead and the software changes required to use the tier efficiently.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Capacity is another key issue. Modern AI systems operate at scales far beyond the 1GB modules used in the demonstration. The value of CXL-connected MRAM will therefore depend on how the technology scales in density and cost while preserving its latency and persistence advantages.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Those questions fit a broader trend visible in <a href="https://bitcoinversus.tech/2026/09/27/micron-512gb-ddr5-rdimm-9200-server-memory/">Micron’s 512GB DDR5 server-memory demonstration</a>: AI infrastructure is forcing designers to reconsider not just accelerator throughput but the entire path data takes through a server.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Everspin’s result is therefore best read as a systems milestone. CXL gives persistent MRAM a standards-based route into modern servers; the next step is proving that the additional tier delivers enough real workload benefit to become part of production AI infrastructure.</p><!-- /wp:paragraph -->
<!-- wp:separator --><hr class="wp-block-separator has-alpha-channel-opacity" /><!-- /wp:separator -->
<!-- wp:heading --><h2 class="wp-block-heading">BitcoinVersus.Tech</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p><strong>Advertisement:</strong></p><!-- /wp:paragraph -->
<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true,"className":"wp-block-embed-x"} --><figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div></figure><!-- /wp:embed -->
<!-- wp:paragraph --><p><em>Support BitcoinVersus.tech’s independent technology reporting and research.</em></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p><strong>BitcoinVersus.Tech Editor’s Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>If you would like to support to help further secure the integrity of our research initiatives, please donate here: <strong>3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</strong></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p><strong>Disclaimer:</strong> BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p><!-- /wp:paragraph -->
