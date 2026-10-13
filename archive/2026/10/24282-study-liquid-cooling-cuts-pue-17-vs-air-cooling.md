---
post_id: 24282
title: "Study: Liquid Cooling Cuts PUE 17% vs Air Cooling"
slug: study-liquid-cooling-cuts-pue-17-vs-air-cooling
status: publish
published: 2026-10-13T06:27:00
modified: 2026-10-13T06:27:00
live_url: https://bitcoinversus.tech/2026/10/13/study-liquid-cooling-cuts-pue-17-vs-air-cooling/
featured_media: 24281
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/doe-nrel-liquid-cooled-data-center-rack-1200x630-1.jpg
qr_media_id: 24026
seo_title: "Study: Liquid Cooling Cuts PUE 17% vs Air Cooling"
seo_description: "A new open-access SoftwareX study compared 12 data-center cooling topologies in a full-year Miami simulation. The best liquid-cooled case reached PUE 1.12 versus 1.35 for its air-cooled counterpart, but wet cooling increased water use."
---

<!-- wp:paragraph -->
<p>A new open-access <em>SoftwareX</em> study comparing 12 data-center cooling topologies found that a direct-to-chip liquid-cooled design reached a <strong>PUE of 1.12</strong> in a full-year Miami simulation, versus <strong>1.35</strong> for its comparable air-cooled configuration—a <strong>17% reduction in PUE</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Liquid cooling won on energy and carbon</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The <a href="https://doi.org/10.1016/j.softx.2026.103073" target="_blank" rel="noopener noreferrer">DCOPTEST study</a> used a physics-based Modelica testbed to run 8,760 hourly steps for each of 12 cooling systems under Miami’s very hot-humid climate. Liquid-cooled Types 7–12 consistently outperformed legacy air-cooled Types 1–6 on energy and carbon metrics.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The best-performing liquid topology, Type 7, reached PUE 1.12 and carbon usage effectiveness of 0.45 kgCO₂e/kWh. Its air-cooled counterpart, Type 2, reached PUE 1.35 and CUE 0.54 kgCO₂e/kWh. Air-cooled dry systems climbed as high as PUE 1.43 in the same modeled climate.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/GoogleCloud_IN/status/2048975596936372253","type":"rich","providerNameSlug":"twitter","responsive":true,"className":"wp-block-embed-twitter"} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/GoogleCloud_IN/status/2048975596936372253
</div><figcaption class="wp-element-caption"><em>Google Cloud India’s Visakhapatnam project is a real-world example of a large AI facility choosing air cooling where local water pressure matters. It is context, not evidence for the DCOPTEST simulation.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Water changes the winner</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The energy advantage did not make liquid cooling universally superior. Wet cooling-tower configurations consumed about <strong>2.12–2.57 L/kWh</strong> of make-up water. Closed-loop dry-cooler designs eliminated evaporative water use entirely at <strong>0 L/kWh</strong>, but required more fan power.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The liquid systems also benefited from higher return-fluid temperatures. In the Miami model, Type 7 could remain in free-cooling mode for 100% of the year, while one dry liquid topology reached about 95%. Several air-cooled systems needed full mechanical cooling for 79%–100% of annual hours.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=_v52Pv0HyVc","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=_v52Pv0HyVc
</div><figcaption class="wp-element-caption"><em>Open Compute Project’s technical session on modular direct-to-chip cooling shows how liquid systems are being engineered for dense AI racks.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">This was a simulation, not a field trial</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The result comes from a standardized virtual testbed, not side-by-side operation of 12 physical data centers. The authors validated modeled PUE and WUE against published reference ranges, but regional climate, grid carbon intensity, controls, rack density and equipment selection can change the outcome. The project’s <a href="https://github.com/ViswanathanGanesh01/DCOPTEST/releases/tag/v1.2" target="_blank" rel="noopener noreferrer">DCOPTEST v1.2 code</a> is public so other researchers can reproduce or extend the comparison.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech has also covered <a href="https://bitcoinversus.tech/2026/10/11/google-india-ai-hub-air-cooling-water-visakhapatnam/">Google choosing air cooling in water-stressed Visakhapatnam</a>, <a href="https://bitcoinversus.tech/2026/10/12/accelsius-austin-multi-megawatt-ai-cooling-lab/">Accelsius expanding two-phase liquid-cooling tests</a>, and <a href="https://bitcoinversus.tech/2026/10/05/osdcec-003-data-center-cooling-engineering-airflow-deltat-containment-psychrometrics-economization-liquid-cooling/">the engineering fundamentals behind air and liquid cooling</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24026,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/img_06542.jpeg" alt="BitcoinVersus.Tech 5,000-sat donation QR code." class="wp-image-24026" /></figure>
<!-- /wp:image -->