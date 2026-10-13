---
post_id: 24440
title: "OCP Launches Secure Control Plane for AI Data Centers"
slug: ocp-secure-control-plane-ai-data-centers
status: publish
published: 2026-10-13T16:48:42
modified: 2026-10-13T16:48:42
live_url: https://bitcoinversus.tech/2026/10/13/ocp-secure-control-plane-ai-data-centers/
featured_media: 24439
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/scmp-open-control-plane-cover-1200x630-1.jpg
qr_media_id: 24043
seo_title: "OCP Launches Secure Control Plane for AI Data Centers"
seo_description: "OCP has launched SCMP, a new vendor-neutral workstream for secure boot, control and management of AI infrastructure from silicon through rack and pod."
---

<!-- wp:paragraph -->
<p>The Open Compute Project is launching a new effort to standardize how AI data centers establish trust, boot hardware and manage infrastructure from individual chips up through racks and pods.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The project is called <a href="https://latticesemi.gcs-web.com/news-releases/news-release-details/industry-leaders-formally-launch-scmp-ocp-workstream-open-secure">Secure Control and Management Plane, or SCMP</a>. Lattice Semiconductor and AMI announced the workstream on October 13 during the 2026 OCP Global Summit in San Jose. The design is intended to be open and vendor-neutral rather than tied to one server, switch or management stack.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>SCMP is starting with AMD, AMI, Arm, ASPEED, Intel, Jabil, Lattice, Microsoft and NXP as founding contributors. OCP has invited Lattice and AMI to lead development, with the formal workstream scheduled to begin in the fourth quarter of 2026.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/latticesemi","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/latticesemi
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Lattice Semiconductor’s public X channel covers the company’s open-control, FPGA and data-center security work.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The problem SCMP is trying to solve is fragmentation. Today, boot procedures above the device level can vary by platform, control and telemetry interfaces can differ between ODMs, and hardware attestation often stops at the individual component. Lattice says SCMP will define how a control authority establishes a verifiable chain of trust across a larger system.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=MKaxJa-k76o","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=MKaxJa-k76o
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Lattice, AMI and ASPEED explain why AI data centers increasingly need a coordinated control plane spanning real-time hardware control, management controllers and orchestration.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The proposed architecture builds on technologies already used in data-center security, including Caliptra, DMTF SPDM and OCP S.A.F.E. SCMP is meant to connect those pieces at rack scale so identity, attestation, firmware delivery and recovery can be handled through common interfaces instead of vendor-specific procedures.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That direction fits a larger shift already visible across OCP. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/10/13/marvell-microsoft-oracle-data-center-security-standard/">a separate OCP hardware-security standard effort</a> involving Marvell, Microsoft and Oracle, as well as <a href="https://bitcoinversus.tech/2026/10/13/meta-microsoft-alibaba-ospa-open-switch-standard/">OSPA, the new open switch-platform architecture backed by Meta, Microsoft and Alibaba</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/AMI_PR","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/AMI_PR
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>AMI’s public X channel tracks its firmware, BMC and infrastructure-management work for servers and AI systems.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>SCMP also reaches beyond secure boot. The proposal includes common procedures for recovery after failed trusted boot, ownership transfer and credential revocation. Those are important operational details because modern AI racks increasingly combine accelerators, CPUs, switches, power systems and cooling hardware from multiple vendors.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=oraP72TPAI4","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=oraP72TPAI4
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Lattice demonstrates a platform root of trust working with multiple Caliptra-attested devices, illustrating the hardware trust concepts SCMP is trying to extend across larger infrastructure.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The workstream arrives as open infrastructure spending is expected to grow rapidly. BitcoinVersus.Tech recently reported that <a href="https://bitcoinversus.tech/2026/10/13/ocp-infrastructure-spending-892-billion-2030/">IDC projects OCP-recognized infrastructure spending could reach $892 billion by 2030</a>. As those systems become larger and more heterogeneous, standardizing how they establish and recover trust could become just as important as standardizing racks, power and networking.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>SCMP is still early. The workstream has not yet produced a finished specification, and implementation details will depend on the OCP community. The important development today is that several of the industry’s largest silicon, firmware and cloud companies are now trying to define a common security and management boundary that extends beyond a single device.</p>
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