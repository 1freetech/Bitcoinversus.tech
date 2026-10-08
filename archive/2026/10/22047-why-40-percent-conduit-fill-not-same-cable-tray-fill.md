---
post_id: 22047
title: "Why 40% Conduit Fill Is Not the Same as a 40% Full Cable Tray"
live_url: "https://bitcoinversus.tech/2026/10/08/why-40-percent-conduit-fill-not-same-cable-tray-fill/"
featured_media_id: 22045
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/conduit-tray-fill-cover-1200x630-1.jpg"
status: publish
---
<!-- wp:paragraph -->
<p>The number <strong>40%</strong> gets thrown around constantly in cabling work, but it does not mean the same thing everywhere.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For an electrical raceway, 40% can be a code maximum for three or more conductors. For a telecommunications pathway, 40% may be a design target, a manufacturer recommendation, or simply too full once future growth, <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-it-what-is-poe-power-over-ethernet-asic-miners/"><strong>Power over Ethernet</strong></a>, cable weight, and serviceability are considered. And a cable tray can look “half full” long before half of its physical volume is actually occupied.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This follows our recent stories on <a href="https://bitcoinversus.tech/2026/10/08/why-fiber-ethernet-power-cables-different-bend-radius-rules/"><strong>bend radius</strong></a> and <a href="https://bitcoinversus.tech/2026/10/08/cable-pulling-tension-sidewall-pressure-fiber-ethernet-power/"><strong>pulling tension and sidewall pressure</strong></a>. The next step is understanding how much cable belongs in the pathway in the first place.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=GKMIVUbmIbI","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=GKMIVUbmIbI
</div><figcaption class="wp-element-caption"><em>Electrician U walks through NEC conduit-fill calculations using Chapter 9 tables and practical examples.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Famous 53%, 31%, and 40% Rules</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>NEC Chapter 9 Table 1 uses three ordinary raceway-fill limits: <strong>53% for one conductor, 31% for two conductors, and 40% for more than two</strong>. A qualifying conduit or tubing nipple not over 24 inches can use the separate 60% provision. Those percentages refer to occupied <strong>cross-sectional area</strong>, not cable diameter and not the visible empty space you think you see looking into the pipe.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The two-conductor value surprises people because 31% is lower than 40%. The reason is pullability. Two round conductors can wedge together and jam more easily in a round conduit than a larger bundle that distributes itself differently. A 2024 r/electricians discussion even highlighted the strange-looking result where adding small conductors could move a calculation from the two-conductor 31% case into the three-or-more 40% case.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/electricians/comments/1hdoql2/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/electricians/comments/1hdoql2/
</div><figcaption class="wp-element-caption"><em>An electrician’s conduit-fill example shows why the one-, two-, and three-plus conductor percentages are about installation behavior, not a simple “more wire = lower percentage” rule.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Fill Is Area, Not Diameter</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The basic calculation is:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Fill % = total cable or conductor cross-sectional area ÷ pathway internal area × 100</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That matters because cable outside diameter grows area by the square. A <a href="https://bitcoinversus.tech/2025/04/09/cat5e-vs-cat6-ethernet-cables/"><strong>Cat6A</strong></a> cable that is only modestly thicker than Cat6 can consume significantly more tray or conduit area. Shielding, isolation wraps, outdoor jackets, armor, and higher-count fiber constructions all change the number again.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22046,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/conduit-tray-fill-body.jpg?w=1024" alt="Technician testing fiber cabling and reviewing pass results beside organized cable pathways in a data center." class="wp-image-22046" /><figcaption class="wp-element-caption"><em>Pathway capacity is only part of the job. Cabling still has to be installed, supported, and tested without crushing, overheating, or performance loss.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Telecom Pathways Are Planned Differently</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For communications infrastructure, the published pathways standard is currently <a href="https://tiaonline.org/standard/tia-569/"><strong>ANSI/TIA-569-E</strong></a>. TIA placed the next revision, TIA-569-F, into public review on September 28, 2026, but that draft is not yet the published replacement.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Telecom designers usually care about something the electrical raceway maximum does not solve by itself: <strong>future capacity</strong>. A Leviton Cat6A pathway guide built around TIA guidance recommends sizing tray around 25% initial fill so unplanned additions can grow toward roughly 50%, while using 40% as a conduit-fill planning value for telecommunications cable. The exact project specification still controls.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes sense operationally. A new <a href="https://bitcoinversus.tech/2026/10/05/osdctc-003-structured-cabling-patch-panels-copper-fiber-t568b-labeling-bend-radius-verification/"><strong>structured cabling</strong></a> system that is already at its maximum allowed fill on opening day has no room for moves, adds, changes, redundant links, new cameras, new access points, or the next rack deployment.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>A Cable Tray Is Not Just a Giant Conduit</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Open ladder and wire-basket trays behave differently from enclosed raceways. Cables can be laid in, moved, separated, and cooled by surrounding air. But tray design adds its own constraints: allowable fill, cable weight, support span, cable depth, bend radius at turns and dropouts, power/data separation, bonding, and room for future work.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=pYxWaZrI80k","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=pYxWaZrI80k
</div><figcaption class="wp-element-caption"><em>Eaton demonstrates Flextray wire-basket installation, including horizontal and vertical bends used for fiber, data, control cable, and conductors.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>In a <a href="https://bitcoinversus.tech/2026/10/04/osdctc-001-data-center-floor-fundamentals-racks-power-cooling-networking-safety/"><strong>data center</strong></a>, an overfilled tray creates more than an inspection problem. It becomes difficult to trace cables, add circuits, preserve bend radius, remove abandoned cable, or reach the bottom layer without disturbing live connections.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Why a Tray Can Look Full Before It Is “100% Full”</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Round cables leave air gaps between them. A tray loaded to a calculated 50% cross-sectional fill can therefore look almost completely packed from above. That visual mismatch is one reason experienced technicians do not estimate pathway capacity by eye.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Use the cable’s actual jacket outside diameter from its cut sheet, calculate its cross-sectional area, multiply by the number of runs, then compare that total with the usable pathway area and the governing design or code requirement.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>PoE Makes Copper Bundle Density More Important</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Traditional Ethernet links carry tiny signal currents. <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-it-what-is-poe-power-over-ethernet-asic-miners/"><strong>PoE</strong></a> adds meaningful DC power to those same twisted pairs. Large energized cable bundles can retain heat, which raises conductor resistance and can reduce electrical margin.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That means a pathway can satisfy a physical fill calculation and still deserve a lower practical bundle density because of remote-power loading, ambient temperature, cable construction, or manufacturer guidance. <strong>Passing the fill check does not automatically pass the thermal check.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Conduit Fill and Ampacity Are Separate Checks</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This distinction matters on electrical work too. Conduit fill asks whether the conductors physically fit within the permitted raceway area. Ampacity adjustment asks whether the current-carrying conductors can safely carry their electrical load when grouped together. A raceway can pass fill and still fail the applicable ampacity or temperature rules.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same mindset applies around <a href="https://bitcoinversus.tech/2026/10/03/oseec-009-electrical-power-distribution-switchgear-switchboards-panelboards-pdus/"><strong>switchgear, panelboards, and PDUs</strong></a>: geometry and electrical loading are connected, but they are not the same calculation.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Legal Fill Can Still Be Miserable to Pull</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A conduit can satisfy the arithmetic and still be a terrible installation choice. Long distance, multiple bends, high friction, an awkward pull direction, or large stiff conductors can turn a technically permitted fill into a high-risk pull.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One r/electricians poster described pulling four #6 conductors through 3/4-inch EMT. The fill calculation appeared acceptable, but the conductors became difficult through the bends and the insulation was scraped badly enough to short the run. That is a perfect example of why <a href="https://bitcoinversus.tech/2026/10/08/cable-pulling-tension-sidewall-pressure-fiber-ethernet-power/"><strong>pulling tension and sidewall pressure</strong></a> still matter after conduit fill passes.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/electricians/comments/16js7c0/pulling_6_in_34_emt/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/electricians/comments/16js7c0/pulling_6_in_34_emt/
</div><figcaption class="wp-element-caption"><em>A field example where a fill calculation appeared acceptable but the real pull through bends damaged conductor insulation.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Low-Voltage Techs Still Have to Think About Fill</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A July 2026 r/lowvoltage discussion asked whether technicians actually follow conduit-fill guidance or simply keep adding cable until no more fits. The responses were almost universally in favor of planning fill—and several commenters emphasized leaving capacity for the next technician rather than forcing a later re-pull.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/lowvoltage/comments/1uzkung/conduit_fill/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/lowvoltage/comments/1uzkung/conduit_fill/
</div><figcaption class="wp-element-caption"><em>Low-voltage installers discuss why pathway capacity should be planned before a conduit becomes physically impossible to service.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Six Things to Check Before Adding Another Cable</strong></h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item --><li><strong>What pathway is it?</strong> EMT, PVC, ladder tray, basket tray, J-hooks, innerduct, and raceway systems do not share one universal fill rule.</li><!-- /wp:list-item --><!-- wp:list-item --><li><strong>What cable is it?</strong> Use the actual outside diameter and construction, not a generic Cat6 or fiber assumption.</li><!-- /wp:list-item --><!-- wp:list-item --><li><strong>What governs the project?</strong> Check the adopted electrical code, published TIA guidance, project specification, manufacturer limits, and the authority having jurisdiction where applicable.</li><!-- /wp:list-item --><!-- wp:list-item --><li><strong>Can it still be pulled safely?</strong> Account for distance, bend count, bend radius, jamming, pulling tension, and sidewall pressure.</li><!-- /wp:list-item --><!-- wp:list-item --><li><strong>Will it run hot?</strong> Evaluate current-carrying-conductor adjustment and PoE bundle heating separately from physical fill.</li><!-- /wp:list-item --><!-- wp:list-item --><li><strong>What happens next year?</strong> Preserve enough pathway capacity for maintenance and expansion instead of treating the maximum fill as a target.</li><!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Best Fill Percentage Is Often Lower Than the Maximum</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The maximum allowed number answers one question: <strong>how much can fit under the governing rule?</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A good technician asks a better question: <strong>how full should this pathway be if someone still has to pull, cool, trace, repair, and expand these cables later?</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why the best <a href="https://bitcoinversus.tech/2026/09/25/the-art-of-rack-and-stack-servers-ai-systems-and-bitcoin-miners/"><strong>rack-and-stack</strong></a> and cable-management work often looks intentionally underfilled. Empty space is not wasted space. In infrastructure, it is operating margin.</p>
<!-- /wp:paragraph -->