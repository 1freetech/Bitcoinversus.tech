---
title: "ASML and TSMC Want Bigger Photomasks to Fix High-NA EUV's Half-Field Problem"
date: 2026-10-01
published_url: https://bitcoinversus.tech/2026/10/01/asml-tsmc-12-inch-photomasks-high-na-euv-half-field/
wordpress_post_id: 19894
featured_media_id: 19891
slug: asml-tsmc-12-inch-photomasks-high-na-euv-half-field
---

<!-- wp:paragraph -->
<p>High-NA EUV can print smaller features than today’s mainstream EUV systems, but it introduces an awkward manufacturing tradeoff: its anamorphic optics shrink the exposure field in one direction.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why ASML and TSMC are now pushing a new photomask format. In a <a href="https://www.asml.com/en/news/press-releases/2026/tsmc-and-asml-announce-industry-transition-to-large-format-photomasks-for-high-na-euv">September 8 joint announcement</a>, the companies said they are building an industry initiative around larger 6×12-inch photomasks for High-NA EUV lithography, with a pilot line targeted for 2031 and broader system readiness for advanced-node production around 2033.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The important point is that High-NA itself does not wait until 2033. TSMC plans to begin using High-NA in production earlier with today’s 6×6-inch masks. The larger reticle format is a later step meant to remove one of High-NA’s most inconvenient physical limits.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A detailed <a href="https://twitter.com/SVTrivo/status/2097250434885018072">September 8 X post</a> laid out the sequencing clearly: first deploy High-NA with conventional masks, then move toward the larger reticle once the surrounding tool, mask, handling, and fab ecosystem is ready.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/SVTrivo/status/2097250434885018072","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/SVTrivo/status/2097250434885018072
</div><figcaption class="wp-element-caption"><em>The 12-inch photomask roadmap is about removing High-NA EUV’s half-field stitching constraint, not replacing today’s reticle format overnight.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why High-NA Shrinks the Exposure Field</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Conventional EUV systems use 4× reduction optics in both directions, allowing a standard 6×6-inch photomask to expose a full field of roughly 26×33 mm on the wafer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>High-NA EUV changes that optical geometry. Its 4×/8× anamorphic optics increase numerical aperture and improve resolution, but they also cut the exposure field in half along one axis when the scanner uses the same 6×6-inch mask.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The result is a field closer to 26×16.5 mm. That is fine for smaller designs, but large processors and AI accelerators can exceed that half-field.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/09/26/asml-high-na-euv-chip-production/">High-NA EUV moving into real chip production</a>. The 12-inch-mask initiative is the next systems problem behind that transition: once the optics can resolve finer features, the industry still has to make large dies fit efficiently into the exposure field.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Stitching Works, but It Adds Complexity</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When a chip is larger than the half-field, the scanner can expose the design in multiple sections and stitch those sections together on the wafer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That approach is technically viable, but it introduces additional overlay requirements, design constraints, process complexity, and potential throughput penalties. The scanner has to align adjacent exposure regions with extreme precision so the final structure behaves like one continuous die.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.tomshardware.com/tech-industry/semiconductors/tsmc-samsung-and-intel-shore-up-support-with-asml-to-deploy-larger-high-na-euv-photomasks-6-12-inch-photomask-transition-may-take-years-despite-unified-effort">Independent coverage from Tom’s Hardware</a> notes that the industry’s proposed 6×12-inch reticle would effectively restore the traditional full 26×33 mm exposure field for High-NA systems and allow larger chips to be patterned without that stitch.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The issue is especially relevant as advanced AI hardware keeps pushing against physical reticle limits. BitcoinVersus.Tech has also covered <a href="https://bitcoinversus.tech/2026/09/29/cowos-l-pushes-ai-chip-packaging-beyond-reticle-limits/">CoWoS-L packaging pushing AI systems beyond conventional reticle boundaries</a>, showing how often modern accelerator design is now shaped by lithography field size and packaging geometry.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Bigger Mask Means Rebuilding More Than the Mask</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The photomask itself is only one piece of the transition. Semiconductor fabs have spent decades building equipment and process flows around the 6×6-inch reticle standard.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A 6×12-inch format changes mask writers, inspection systems, cleaning tools, storage, transport, handling robots, scanner stages, clamping systems, metrology, and process qualification. Even electronic design automation workflows may need updates because design teams have to understand a different exposure geometry.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why ASML and TSMC are framing the project as an industry initiative rather than a private tool modification. Mask makers, chipmakers, equipment suppliers, metrology companies, and design-tool vendors all have to move together.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same manufacturing-chain problem appears elsewhere in advanced semiconductors. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/09/24/globalfoundries-marvell-ai-optical-networking-chip-capacity/">GlobalFoundries and Marvell expanding U.S. chip capacity for AI networking</a>, another example of how advanced hardware depends on coordinated changes across process technology, tooling, packaging, and manufacturing infrastructure.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why TSMC Can Use High-NA Before the Bigger Reticle Exists</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The roadmap can look contradictory at first: if large masks solve such an important High-NA problem, why deploy High-NA before the larger reticle arrives?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Because not every layer and not every chip requires a full reticle-sized field. Smaller designs, selected critical layers, and floorplans that fit the half-field can benefit from High-NA’s higher resolution without waiting for the entire 12-inch-mask ecosystem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That gives fabs a way to introduce High-NA gradually, qualify the new scanners, learn the process, and reserve stitching for cases where the die genuinely exceeds the available field.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Real Change Is Architectural</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The 12-inch photomask project is easy to dismiss as a larger piece of glass, but the change reaches into chip architecture itself.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Reticle dimensions influence maximum die size, floorplanning, chiplet strategy, packaging decisions, redundancy, yield, and how designers split functions across silicon. A larger High-NA exposure field gives architects another option before they are forced to divide a design into separate dies or accept stitched exposures.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That does not mean monolithic giant chips suddenly become the universal answer. Chiplets still offer advantages in yield, reuse, process-node mixing, and modularity. But removing a lithography field constraint gives architects more freedom to choose the partitioning strategy because it is best for the product, not because the reticle forced it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">High-NA Is Becoming an Ecosystem Transition</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The next generation of lithography is therefore much bigger than the scanner itself. ASML can build higher-resolution optics, but chipmakers still need masks, design rules, software, metrology, pellicles, materials, and fab equipment that can exploit them efficiently.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The 6×12-inch reticle initiative makes that visible. High-NA starts as an optical upgrade, but full-field production at advanced nodes eventually becomes a mask-format, equipment, software, and manufacturing-system upgrade too.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For AI chips in particular, that matters because the industry keeps asking lithography and packaging to support larger, denser, more power-hungry compute structures. The mask may look like a small part of that stack, but its dimensions can decide how much of a future processor can be printed in one shot.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong><em>BitcoinVersus.Tech</em></strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>Advertisement</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><strong><em>Editor's Note:</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->
