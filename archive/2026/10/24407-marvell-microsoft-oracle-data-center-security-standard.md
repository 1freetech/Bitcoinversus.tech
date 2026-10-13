---
post_id: 24407
title: "Marvell, Microsoft and Oracle Plan a Data Center Security Standard"
slug: marvell-microsoft-oracle-data-center-security-standard
status: publish
published: 2026-10-13T14:46:37
modified: 2026-10-13T14:46:37
live_url: https://bitcoinversus.tech/2026/10/13/marvell-microsoft-oracle-data-center-security-standard/
featured_media: 24406
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/data-center-hardware-security-cover-1200x630-1.jpg
qr_media_id: 24043
seo_title: "Marvell, Microsoft and Oracle Plan a Data Center Security Standard"
seo_description: "Marvell, Microsoft and Oracle are forming an OCP working group to standardize a FIPS 140-3 Level 3 integrated HSM for cloud and hyperscale data centers."
---

<!-- wp:paragraph -->
<p>Marvell, Microsoft and Oracle are forming a new Open Compute Project working group to standardize server-level hardware security for cloud and hyperscale data centers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.marvell.com/company/newsroom/marvell-microsoft-oracle-ocp-data-center-hardware-security.html">Marvell announced the effort on October 13</a>. The group is targeting a silicon-based, attested hardware security module, or HSM, designed around NIST FIPS 140-3 Level 3 requirements. The companies say an initial draft specification is being released through OCP so other vendors and operators can participate.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The core idea is to move more cryptographic trust directly into the server. HSMs protect sensitive keys and perform cryptographic operations inside dedicated hardware rather than exposing those keys to ordinary host software. <a href="https://csrc.nist.gov/pubs/fips/140-3/final">NIST’s FIPS 140-3 standard</a> defines four increasing security levels for cryptographic modules and covers physical security, authentication, sensitive parameter management, self-tests and life-cycle assurance.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/MarvellTech","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/MarvellTech
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Marvell’s public engineering feed covers the company’s current data-center silicon and open-infrastructure work.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>According to Marvell, the proposed design is intended to handle secure key caching, attestation and cryptographic key life-cycle management at the server level. The company argues that bringing those functions closer to compute can reduce latency and improve scalability compared with sending every cryptographic operation to a separate appliance.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=K0sLLaso5BU","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=K0sLLaso5BU
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Thales explains how hardware security modules protect cryptographic keys and act as trust anchors for cloud and enterprise systems.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is not simply another security chip announcement. The important part is the attempt to define a common hardware interface through OCP. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/10/13/meta-microsoft-alibaba-ospa-open-switch-standard/">OSPA’s effort to standardize switch-platform management</a>. The new HSM working group applies a similar open-specification approach to trust and key management inside servers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The move also fits a broader shift toward hardware-enforced infrastructure controls. BitcoinVersus.Tech has examined <a href="https://bitcoinversus.tech/2026/10/01/fortinet-asic-hardware-inside-the-security-processors-powering-fortigate-firewalls/">specialized security processors inside Fortinet hardware</a> and <a href="https://bitcoinversus.tech/2026/09/29/lattice-brings-an-open-control-plane-to-ai-data-center-racks/">Lattice’s open control-plane approach for AI racks</a>. In each case, more management and security logic is moving into dedicated silicon close to the hardware it protects.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The new OCP group still has to turn the proposal into a specification vendors will actually implement. FIPS 140-3 validation is also a formal testing process, so an open specification does not automatically make a product compliant. But a shared server-level HSM design could reduce duplicated engineering across cloud platforms and make hardware trust easier to integrate consistently across large fleets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For data-center operators, the practical question is whether a common standard can make key protection, attestation and server identity more portable without weakening the isolation that gives HSMs their value. That is the problem Marvell, Microsoft and Oracle are now trying to solve through OCP.</p>
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