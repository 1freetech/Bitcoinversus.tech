<!-- wp:group -->
<div class="wp-block-group">
<!-- wp:paragraph -->
<p>AI rack power is moving beyond a voltage-standard discussion and into real converter hardware. Microchip Technology and Navitas Semiconductor have introduced a 20 kW reference design that converts an 800 VDC rack bus directly to a fixed 6 VDC server rail, combining high-voltage distribution, GaN switching, digital control and hardware security in one compact platform.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The companies’ <a href="https://www.microchip.com/en-us/tools-resources/reference-designs/800v-to-6v-hvdc-for-ai-data-center-racks-reference-design">official reference-design documentation</a> says the system uses two parallel 10 kW modules in an input-series/output-parallel arrangement and targets 96% efficiency at roughly 1 MHz switching. That is important because 800V DC only solves the rack-distribution problem if engineers can efficiently step that voltage down to the low-voltage, extremely high-current rails that modern accelerators actually consume.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The interesting part is the direct 800V-to-6V conversion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Microchip says the platform combines what would otherwise be an 800V-to-50V stage and a 50V-to-6V stage into a single converter. The design uses a 128:1 full-bridge LLC topology, Navitas NV6034 650V GaN devices on the primary side and planar transformers to push power density higher while keeping the conversion board thin enough to integrate close to the compute hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The target numbers are aggressive: up to 96% peak efficiency at full load, approximately 1 MHz switching and 2,100 W/in³ power density. <a href="https://www.semiconductor-today.com/news_items/2026/oct/navitas-microchip-051026.shtml">Semiconductor Today’s coverage</a> confirms the design is intended as an OCP-aligned development platform rather than merely a device announcement, with reference hardware, software and documentation aimed at shortening implementation cycles.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes this materially different from the earlier wave of 800V announcements. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/10/01/trane-3-5-mw-800v-dc-chiller-ai-data-centers/">Trane testing a 3.5 MW 800V DC chiller architecture</a>, showing that the voltage transition is spreading beyond compute racks into the mechanical systems surrounding them.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=E96F7J9BDUQ","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=E96F7J9BDUQ
</div><figcaption class="wp-element-caption"><em>Schneider Electric explains why high-density AI racks are pushing data centers toward 800V DC distribution.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why 800V changes the copper problem</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For a fixed amount of power, raising distribution voltage reduces current. Because conductor losses scale with current squared, lowering current can sharply reduce resistive losses and the amount of copper required to move the same power through a rack. That becomes increasingly important as AI systems climb from tens of kilowatts toward hundreds of kilowatts and megawatt-class rack designs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The semiconductor layer is what makes that architectural change usable. BitcoinVersus.Tech’s earlier look at <a href="https://bitcoinversus.tech/2026/10/03/renesas-650v-gan-megawatt-ai-data-center-power/">Renesas shrinking 650V GaN power stages for megawatt AI data centers</a> showed the same underlying trend: wide-bandgap switching devices are being asked to move more power at higher frequency without letting conversion losses or thermal density erase the gains.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Digital control and security are now part of the power supply</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Microchip side of the design is not just a controller wrapped around Navitas power devices. A dsPIC33AK256MPS306 digital signal controller manages resonant control, telemetry, thermal protection, PMBus and SPDM communications, and live firmware updates. Microchip also integrates its TA100 security device to provide a hardware root of trust, secure boot, authenticated firmware updates and secure-debug capabilities.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is an important shift in how rack power should be viewed. At AI scale, a power-conversion module is increasingly a networked, firmware-updatable control system. Protecting the firmware and the identity of that device therefore becomes part of infrastructure security, not a separate software concern.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Navitas is moving from components toward a complete AI power stack</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This collaboration also advances Navitas beyond selling discrete high-speed power switches. The reference design packages its GaNFast devices into a validated conversion architecture with control, security, models and implementation guidance. That complements the company’s broader push into rack-level AI power systems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech previously covered <a href="https://bitcoinversus.tech/2026/09/26/navitas-and-wise-integration-team-up-on-ai-data-center-power/">Navitas and Wise Integration teaming up on AI data-center power</a>. The Microchip project is another step toward a more complete grid-to-accelerator ecosystem in which the power semiconductor is sold as part of an engineered system rather than as an isolated component.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The 800V race is becoming an implementation race</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The larger significance is that 800V DC is moving from roadmap slides into reference hardware that engineers can evaluate. The winning vendors may not simply be the companies with the best GaN or SiC transistor. They may be the suppliers that can make the entire conversion path easier to validate, secure, cool, control and deploy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Microchip and Navitas plan to showcase the design at the 2026 OCP Global Summit in San Jose from October 12 through October 15. If the architecture performs as targeted under real rack conditions, it offers a concrete example of how next-generation AI power delivery can collapse conversion stages while pushing more intelligence into the power system itself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">BitcoinVersus.Tech</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Advertisement</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our research and publishing work, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. Content is provided for informational purposes.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->