---
post_id: 24144
title: "Keysight Tests 1.6T Ethernet Link Recovery"
slug: keysight-1-6t-ethernet-link-layer-retry-ocp-2026
status: publish
published: 2026-10-12T22:00:54
modified: 2026-10-12T22:00:54
live_url: https://bitcoinversus.tech/2026/10/12/keysight-1-6t-ethernet-link-layer-retry-ocp-2026/
featured_media: 24143
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/keysight-llr-1-6t-ethernet-cover-1200x630-1.jpg
qr_media_id: 24026
seo_title: "Keysight Tests 1.6T Ethernet Link Recovery"
seo_description: "Keysight is testing 1.6T Link Layer Retry interoperability with Broadcom and Alibaba Cloud for next-generation AI Ethernet fabrics at OCP 2026."
---

<!-- wp:paragraph -->
<p>Keysight is using the 2026 Open Compute Project Global Summit to test whether emerging AI Ethernet links can recover transmission errors at 1.6 terabits per second without depending on a single vendor’s stack.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In an <a href="https://www.keysight.com/us/en/about/newsroom/catalog/news-release.2026.1012_pr26-119_keysight-showcases-link-layer-retry-interoperability-with-alibaba-cloud-at-2026-ocp-global-summit.html" target="_blank" rel="noopener noreferrer">October 12 announcement</a>, Keysight said it will demonstrate Link Layer Retry, or LLR, with Broadcom and Alibaba Cloud. The Broadcom test connects a Keysight INPT-1600GE system to a Tomahawk 6 switch over 200G SerDes lanes at 1.6T. A separate Alibaba Cloud demonstration runs LLR and Credit-Based Flow Control, or CBFC, over 100G SerDes at 400GE using a switch based on Broadcom Tomahawk Ultra.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>LLR adds local frame recovery at the Ethernet link layer. When a frame is corrupted, the link can retransmit it close to where the error occurred instead of waiting for a higher-layer protocol to recover later. CBFC complements that approach by controlling transmission with credits, helping reduce loss when traffic becomes congested.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That matters as AI clusters push more traffic between accelerators. BitcoinVersus.Tech has already covered <a href="https://bitcoinversus.tech/2026/10/09/broadcom-ocp-2026-tomahawk6-102-4t-800g-nic-cpo-ai-networking/">Broadcom’s 102.4 Tb/s Tomahawk 6 roadmap</a>, <a href="https://bitcoinversus.tech/2026/10/12/cisco-silicon-one-g302-51-2tbps-ai-racks/">Cisco’s new 51.2 Tb/s G302 silicon</a>, and <a href="https://bitcoinversus.tech/2026/10/10/lumentum-says-ai-optics-are-sold-out-through-early-2029/">rising demand for high-speed AI optics</a>. Faster physical links are useful only if the surrounding fabric remains reliable under real workloads.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/Broadcom/status/2087647596936298650","type":"rich","providerNameSlug":"twitter","responsive":true,"className":"wp-block-embed-twitter"} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/Broadcom/status/2087647596936298650
</div><figcaption class="wp-element-caption"><em>Broadcom’s post on open AI Ethernet transport provides related context on the company’s push toward resilient, interoperable accelerator networking.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>Keysight’s OCP demonstration is an interoperability test, not a production benchmark. The company says the goal is to show that LLR can work across multiple switch ASICs, SerDes rates and vendor implementations. An <a href="https://www.electronicsbrief.com/articles/keysight-eight-port-1-6t-ethernet-testing-ocp-2026" target="_blank" rel="noopener noreferrer">independent summary from The Electronics Brief</a> notes that Keysight is also showing eight-port 1.6T test hardware and workload emulation at OCP.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=FqmAjnDmrXw","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=FqmAjnDmrXw
</div><figcaption class="wp-element-caption"><em>Keysight product planner Hadrien Louchet discusses 1.6T and 3.2T Ethernet performance, power and reliability trade-offs for AI networking.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>The broader industry is moving in the same direction: open Ethernet mechanisms are being developed so AI systems can increase bandwidth without making reliability dependent on one proprietary interconnect. The demonstration does not prove how LLR will perform across every production cluster, but it gives operators another public data point as 1.6T Ethernet moves from lab validation toward deployment.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong><br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24026,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/img_06542.jpeg" alt="BitcoinVersus.Tech 5,000-sat donation QR code." class="wp-image-24026" /></figure>
<!-- /wp:image -->