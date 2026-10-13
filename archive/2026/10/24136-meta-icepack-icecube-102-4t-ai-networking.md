---
post_id: 24136
title: "Meta Unveils 102.4T Liquid-Cooled AI Network Rack"
slug: meta-icepack-icecube-102-4t-ai-networking
status: publish
published: 2026-10-12T21:45:55
modified: 2026-10-12T21:47:35
live_url: https://bitcoinversus.tech/2026/10/12/meta-icepack-icecube-102-4t-ai-networking/
featured_media: 24134
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/amd-helion-agentic-ai-rack-cover.jpg
qr_media_id: 24135
seo_title: "Meta Unveils 102.4T Liquid-Cooled AI Network Rack"
seo_description: "Meta unveiled IcePack, a liquid-cooled AI networking rack with 102.4 Tb/s IceCube switches, Flattened Planar Fabric and MetaRoCE at OCP 2026."
---

<!-- wp:paragraph -->
<p>Meta has unveiled a new generation of open AI-networking hardware at the 2026 Open Compute Project Global Summit, including its first liquid-cooled network rack, a 102.4-terabit-per-second switch platform and a flatter way to connect large GPU clusters.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In its <a href="https://engineering.fb.com/2026/10/12/open-source/ocp-summit-2026-powering-ai-with-open-innovations-in-scale-up-scale-out-and-scale-across-networks/">October 12 engineering announcement</a>, Meta said the IcePack rack is based on OCP's ORV3-HPRv1 standard and holds IceCube switch blades capable of 102.4 Tb/s of switching capacity. Each IceCube provides 128×800G non-blocking ports, according to Meta, doubling the bandwidth of its previous 51.2T generation.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Two Switch Chips, One Software Stack</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Meta is building IceCube in two variants: one around Broadcom's Tomahawk 6C silicon and another around NVIDIA Spectrum-6. Both run Meta's open-source FBOSS network operating system through the OCP Switch Abstraction Interface. Independent coverage from <a href="https://www.sdxcentral.com/news/meta-builds-custom-n-icecube-ai-network-switch-using-nvidias-spectrum-6-asics/">SDxCentral</a> describes the Spectrum-6 version as N-IceCube, designed to slot into the same liquid-cooled IcePack environment.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The announcement lands as 102.4T networking becomes a major theme across AI infrastructure. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/10/09/broadcom-ocp-2026-tomahawk6-102-4t-800g-nic-cpo-ai-networking/">Broadcom's 102.4T Ethernet and optical roadmap</a>, <a href="https://bitcoinversus.tech/2026/10/12/cisco-silicon-one-g302-51-2tbps-ai-racks/">Cisco's new 51.2 Tb/s G302 silicon</a>, and the push toward <a href="https://bitcoinversus.tech/2026/10/08/networking-upscale-token-fabric-open-ai-network-nvidia-amd-rival-chips/">open AI fabrics that can connect different accelerator families</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=v3yrxWO0orI","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=v3yrxWO0orI
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Open Compute Project video: Meta explains the broader scale-up and scale-out networking direction behind its AI infrastructure.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Meta Flattens the GPU Network</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Meta also introduced Flattened Planar Fabric, or FPF. Instead of sending each GPU through a conventional single-plane path, FPF gives each GPU eight independent 100G links to eight separate switches. Meta says this lets it reduce a traditional three-tier Clos design to two tiers, cutting network hops while allowing the NIC to spread packets across multiple planes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The company is pairing that architecture with MetaRoCE, its open RDMA transport for AI-scale Ethernet. Meta designed the protocol to tolerate packet loss and out-of-order delivery rather than requiring the fabric to behave as a perfectly lossless network. That shifts more path selection, congestion response and recovery work toward the NIC.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/nvidia/status/2094440470814609812","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/nvidia/status/2094440470814609812
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>NVIDIA describes its own rack-scale AI interconnect approach with NVLink Fusion, useful context for the same multi-vendor infrastructure problem Meta is addressing with open Ethernet.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Meta is also helping launch the Open Switch Platform Architecture initiative inside OCP, alongside other industry participants, with version 1.0 of the specification submitted for review. The broader strategy is clear: make switching hardware, transport protocols and rack designs more modular so operators are not forced to treat one vendor's network stack as an inseparable unit.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>These are engineering disclosures and vendor performance claims, not independent production benchmarks. The important development is the architecture itself: liquid cooling is moving deeper into the network rack, 102.4T switching is becoming practical infrastructure, and the software layer is being designed to span multiple switch-silicon suppliers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24135,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr.jpeg" alt="Bitcoin donation QR code requesting 5,000 satoshis for BitcoinVersus.Tech research initiatives." class="wp-image-24135" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->