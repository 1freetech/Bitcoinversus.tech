---
post_id: 24302
title: "Credo Gives AMD Versal Terabyte-Class Memory"
slug: credo-amd-versal-terabyte-memory
status: publish
published: 2026-10-13T10:54:34
modified: 2026-10-13T10:54:34
live_url: https://bitcoinversus.tech/2026/10/13/credo-amd-versal-terabyte-memory/
featured_media: 24299
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/credo-amd-omniconnect-memory-cover.jpg
qr_media_id: 24043
seo_title: "Credo Gives AMD Versal Terabyte-Class Memory"
seo_description: "Credo demonstrates OmniConnect memory expansion on AMD Versal hardware, exposing terabyte-class LPDDR capacity to programmable AI accelerators."
---

<!-- wp:paragraph -->
<p>Credo is using AMD Versal programmable hardware to demonstrate a new way to give AI accelerators much larger memory pools without waiting for a custom chip.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On October 13, 2026, <a href="https://investors.credosemi.com/news-events/news/news-details/2026/Credo-Breaks-the-Memory-Wall-Using-AMD-Programmable-Logic-Based-AI-Accelerators/default.aspx">Credo announced</a> that it is showing its OmniConnect Weaver memory fanout gearbox running on an AMD Versal AI Edge Series Gen 2 adaptive SoC evaluation board at the OCP Global Summit in San Jose. The company says the setup can expose terabyte-class LPDDR memory capacity to a programmable-logic XPU over VSR links.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The idea targets a basic AI infrastructure problem: accelerator compute has grown faster than the memory systems feeding it. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/09/27/sk-hynix-expands-ai-memory-beyond-hbm/">SK hynix expanding AI memory beyond HBM</a>, another sign that capacity, bandwidth and memory placement are becoming first-class design problems rather than background specifications.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Credo says OmniConnect separates memory from the accelerator package and connects larger LPDDR pools through its Weaver gearbox. In the demonstrated architecture, the expanded memory is transparent above the controller, meaning application software does not need to be rewritten simply to see the larger capacity. Credo also says the design uses standard organic packaging rather than a silicon interposer.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/credosemi/status/2086928586255245337","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/credosemi/status/2086928586255245337
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Credo has been positioning OmniConnect as part of a broader effort to standardize lightweight memory and chip-to-chip links for AI systems.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>AMD’s role is important because Versal is programmable after deployment. That gives system builders a platform for testing new memory architectures before committing to a fixed ASIC. BitcoinVersus.Tech has also followed <a href="https://bitcoinversus.tech/2026/10/01/amd-versal-rf-ucie-open-chiplet-architecture/">AMD’s use of UCIe links in Versal RF</a>, which reflects the same broader movement toward modular compute, memory and I/O.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=zwu8BpUcYxQ","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=zwu8BpUcYxQ
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>AMD’s official VEK385 overview shows the Versal AI Edge Series Gen 2 evaluation platform used for programmable system development.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The comparison with conventional accelerator memory is straightforward. HBM delivers extremely high bandwidth close to the compute die, but capacity is constrained by packaging, cost and physical integration. LPDDR can offer much larger pools at lower cost, although the architecture must solve the latency and bandwidth penalties created by moving memory farther away.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>AMD has already been experimenting with different memory arrangements. Its <a href="https://bitcoinversus.tech/2026/10/03/amd-versal-ai-core-15-year-space-missions/">Versal AI Core work for long-life systems</a> shows why programmable hardware can matter when designers need architectures that remain useful across long product cycles.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is still an important limitation: Credo’s announcement describes a working demonstration, not independently benchmarked production performance. The company has not published enough application-level data to show how much the larger memory pool improves real inference throughput, latency or power efficiency compared with HBM-based systems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Even so, the demonstration is notable because it turns memory expansion into something system designers can test on programmable hardware today. If the approach scales cleanly, AI accelerators may have more options between tightly integrated HBM and slower conventional host memory.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->