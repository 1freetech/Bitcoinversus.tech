---
post_id: 22055
title: "Infineon Launches a 27 kW Three-Phase PSU for Next-Generation AI Racks"
live_url: "https://bitcoinversus.tech/2026/10/08/infineon-27kw-three-phase-psu-ai-server-racks/"
featured_media_id: 22053
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/infineon-27kw-ai-psu-cover-1200x630-1.jpg"
status: publish
---
<!-- wp:paragraph -->
<p><strong>Infineon Technologies has launched a 27 kW three-phase power supply unit reference design aimed directly at the next generation of high-density AI server racks.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The design, announced October 8, is built for server OEMs and ODMs working around the transition from conventional rack power toward <a href="https://bitcoinversus.tech/2026/09/20/800-vdc-data-center-working-hardware-power-architecture/"><strong>800 VDC data center architectures</strong></a> and ±400 VDC power systems. Infineon says the platform meets Open Compute Project Open Rack V3 requirements while improving power density, efficiency, thermal performance, and response to the violent load swings created by modern GPU systems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The headline numbers are unusually aggressive for a rack PSU: <strong>more than 98% peak efficiency at 480 VAC and 50% load, 116 W/in³ power density, a 20 ms integrated hold-up buffer, and a power factor above 0.99 across most of the operating range.</strong> Infineon’s own <a href="https://www.infineon.com/technology-news/2026/inftn202610-005"><strong>technology announcement</strong></a> also confirms a three-phase input range from 311 to 528 VAC and operation from -5°C to 45°C. <a href="https://www.semiconductor-today.com/news_items/2026/oct/infineon-081026.shtml"><strong>Semiconductor Today</strong></a> independently reported the same specifications after the launch.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22054,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/infineon-27kw-ai-server-power-press-photo.jpg?w=1024" alt="Infineon press image illustrating AI data center server power infrastructure." class="wp-image-22054" /><figcaption class="wp-element-caption"><em>Infineon says rising GPU power and rack density are pushing server power architectures toward higher-voltage three-phase designs. Image: Infineon Technologies.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=Y3rOj2Xpu8o","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=Y3rOj2Xpu8o
</div><figcaption class="wp-element-caption"><em>Infineon’s We Power AI series explains why higher-voltage DC distribution and new power architectures are becoming central to scaling AI infrastructure.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The PSU Is Becoming a Major AI Component</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For years, the power supply sat in the background of server discussions. CPUs, GPUs, memory, storage, and networking got the attention while the PSU was treated mostly as a box that converted AC into DC.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>AI racks are breaking that model. A rack that pushes toward hundreds of kilowatts—and eventually megawatt-class power—cannot rely on the same basic power architecture used for a conventional enterprise server. The <a href="https://bitcoinversus.tech/2026/10/04/osdcec-002-data-center-capacity-planning-it-load-pue-rack-density-growth-headroom/"><strong>rack-density problem</strong></a> now reaches all the way upstream into conversion topology, bus voltage, backup energy, thermal design, and utility interface.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why Infineon is moving from single-phase server PSUs into increasingly powerful three-phase systems. Three-phase input can distribute power more efficiently at higher load levels, reduce current for a given power level, and better match the electrical infrastructure already used throughout larger data centers.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Five-Level ANPC PFC Meets a Three-Level LLC Converter</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The new 27 kW design uses a <strong>five-level active neutral-point-clamped power-factor-correction stage</strong> followed by a <strong>three-level LLC converter</strong>. In simpler terms, the front end shapes incoming AC power and regulates the DC bus, while the LLC stage performs the high-efficiency DC conversion required downstream.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The component stack includes Infineon 650 V CoolSiC silicon-carbide MOSFETs, CoolMOS devices, EiceDRIVER gate drivers, XENSIV current sensors, and PSOC microcontrollers. This is the same broader semiconductor transition BitcoinVersus has been following in <a href="https://bitcoinversus.tech/2026/09/29/infineon-and-eaton-push-silicon-carbide-into-800-vdc-ai-power/"><strong>800 VDC silicon-carbide infrastructure</strong></a> and in other <a href="https://bitcoinversus.tech/2026/09/27/wise-navitas-gan-sic-ai-data-center-power/"><strong>SiC and GaN AI power systems</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The result is a stated 116 W/in³ power density. Infineon says Open Rack V3 calls for at least 94 W/in³, so the reference design clears that mark while still keeping peak efficiency above 98%.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The 20 Millisecond Buffer May Be the Most Interesting Part</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AI servers do not behave like steady industrial loads. GPU clusters can jump sharply as workloads start, stop, checkpoint, synchronize, or move between phases of training and inference. Those load transients can propagate back through the rack and into the upstream power system.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Infineon’s design integrates an energy buffer that provides <strong>20 milliseconds of hold-up time</strong> during short grid disturbances while also helping absorb rapid GPU load changes. According to the company, that can remove the need for a separate capacitor bank unit in the rack power architecture.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is more important than it sounds. Every separate buffer enclosure consumes rack or sidecar space, adds interconnects, introduces another thermal load, and creates another component that has to be monitored and serviced. Folding some of that function directly into the PSU can simplify the physical architecture if the design performs as advertised under real AI workloads.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Power Factor Above 0.99 Matters at Scale</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Infineon says the PSU maintains a <strong>power factor above 0.99</strong> across most of its operating range while keeping input-current harmonic distortion low. That connects directly to the electrical-engineering side of the AI buildout: apparent power, reactive power, harmonics, transformers, generators, UPS systems, and utility capacity all care about more than just the number of watts delivered to GPUs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus recently covered <a href="https://bitcoinversus.tech/2026/10/08/oseec-016-power-factor-correction-capacitor-banks-kvar-harmonic-detuning/"><strong>power-factor correction engineering</strong></a> and why a high power factor reduces the difference between useful real power and the apparent power infrastructure must carry. At AI scale, fractions of a percentage point in conversion efficiency and power quality stop being academic.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/datacenter/comments/1tuv676/how_are_we_classifying_the_new_800vdc_sidecars/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/datacenter/comments/1tuv676/how_are_we_classifying_the_new_800vdc_sidecars/
</div><figcaption class="wp-element-caption"><em>Data-center operators are already debating how 800 VDC sidecars, PSU shelves, and battery-buffer functions should be classified as power architecture moves closer to the IT rack.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Why Three-Phase Is Moving Closer to the Rack</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Traditional racks often distribute single-phase AC to individual PSUs. That architecture works well when server loads stay within familiar ranges. But once a rack climbs into hundreds of kilowatts, conductor size, breaker count, connector density, conversion losses, and copper volume all become harder to ignore.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Three-phase power lets designers move larger amounts of power with better utilization of conductors and infrastructure. The industry is also experimenting with moving conversion into dedicated sidecars and distributing higher-voltage DC deeper into the rack. BitcoinVersus has already covered <a href="https://bitcoinversus.tech/2026/10/06/semiconductors-microchip-navitas-800v-6v-ai-rack-20kw-converter/"><strong>20 kW 800 V-to-6 V conversion</strong></a> and <a href="https://bitcoinversus.tech/2026/09/27/abb-infinitus-800-vdc-ai-data-center-power/"><strong>800 VDC data-center distribution</strong></a> as different pieces of that same transition.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=GTQU1W8hFhc","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=GTQU1W8hFhc
</div><figcaption class="wp-element-caption"><em>Infineon explains how AI server power delivery is evolving from legacy rack architectures toward higher-current and higher-voltage designs.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>This Is a Reference Design, Not a Finished Server PSU</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One distinction matters: Infineon is launching a <strong>reference design</strong>, not announcing that every AI rack will suddenly contain an Infineon-branded 27 kW PSU. Reference hardware gives server manufacturers and power-system designers a validated electrical architecture, component selection, control strategy, and performance target that they can adapt into commercial products.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes the launch a technology signal more than a retail product release. It tells OEMs that the power-semiconductor ecosystem is preparing for server PSUs far beyond the familiar 3 kW to 8 kW class and that three-phase power is moving closer to the IT load.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Roadmap Was Visible Before Today</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Infineon had already shown a roadmap spanning 3 kW, 8 kW, 12 kW, 18 kW, 27 kW, and 30 kW power platforms. Earlier this year it detailed an 18 kW three-phase PSU and a 30 kW three-phase PFC evaluation board. Today’s 27 kW system fills the gap with a more complete high-power PSU reference design.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The company says the new design will be shown at the Open Compute Project Global Summit in San Jose from October 12 through October 15 and again at Infineon’s OktoberTech Silicon Valley event on October 22.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>AI’s Next Bottleneck Is Not Just Compute</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The most important takeaway is bigger than one PSU. AI infrastructure is forcing power electronics to evolve almost as quickly as the processors themselves.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>More GPU performance means more rack power. More rack power means higher voltage, more sophisticated conversion, better thermal management, faster transient response, and tighter integration between semiconductors and facility electrical design. The <a href="https://bitcoinversus.tech/2026/09/29/infineon-and-eaton-push-silicon-carbide-into-800-vdc-ai-power/"><strong>800 VDC transition</strong></a> is therefore not just a wiring change. It is a redesign of the complete power path from the utility connection to the processor board.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Infineon’s 27 kW three-phase PSU is one more sign that the industry is no longer waiting for megawatt-class AI racks to arrive before rebuilding the power architecture underneath them.</p>
<!-- /wp:paragraph -->