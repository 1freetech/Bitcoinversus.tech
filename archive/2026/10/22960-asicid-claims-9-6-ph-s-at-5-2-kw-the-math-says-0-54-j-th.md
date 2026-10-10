---
title: "ASICID Claims 9.6 PH/s at 5.2 kW. The Math Says 0.54 J/TH"
date: 2026-10-10
published: "2026-10-10T06:56:06"
modified: "2026-10-10T06:56:06"
wordpress_post_id: 22960
wordpress_status: publish
live_url: "https://bitcoinversus.tech/2026/10/10/asicid-claims-9-6-ph-s-at-5-2-kw-the-math-says-0-54-j-th/"
category: "bitcoin mining"
featured_media_id: 22958
body_media_id: 22959
youtube: "https://www.youtube.com/watch?v=dogBmxzW-Eg"
social_embed: "https://www.reddit.com/r/BitcoinMining/comments/1joql15/how_to_avoid_being_scammed_when_purchasing_miners/"
primary_source: "https://asicid.com/zh/product/idminer-homerack"
secondary_source: "https://service.bitmain.com/support/selfService"
archive_format: "final Gutenberg source"
---

<!-- wp:paragraph -->
<p>A new Bitcoin mining hardware claim deserves much more scrutiny than the press-release headlines have given it. ASICID says its IDMINER HomeRack can produce <strong>9,600 TH/s</strong>—or 9.6 PH/s—of Bitcoin SHA-256 hashrate while drawing only <strong>5,200 watts</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The company repeated those specifications in an October 6, 2026 press release and on its own current product pages. BitcoinVersus is not calling the product fraudulent. But the published numbers imply an efficiency leap so large that miners should require independent, reproducible evidence before treating the specifications as established fact.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">The Published Numbers Work Out to About 0.54 J/TH</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The efficiency calculation is straightforward: watts divided by terahashes per second. Using <a href="https://asicid.com/zh/product/idminer-homerack">ASICID’s own HomeRack specifications</a>, 5,200 W ÷ 9,600 TH/s equals approximately <strong>0.542 J/TH</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same pattern appears elsewhere in the lineup. The IDMINER 2 is listed at 2,400 TH/s and 1,300 W, also about <strong>0.542 J/TH</strong>. The IDMINER 1 is listed at 1,150 TH/s and 700 W, or about <strong>0.609 J/TH</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those are not incremental efficiency improvements. They would represent a generational jump far beyond the machines Bitcoin miners are actually deploying today. BitcoinVersus recently explained why <a href="https://bitcoinversus.tech/2026/10/08/asic-jth-not-site-jth-bitcoin-mining-efficiency/">ASIC J/TH must be separated from site-level J/TH</a>, but even before cooling, pumps, fans, transformers and PUE are considered, the IDMINER claim is extraordinary at the machine level.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">BITMAIN’s Current 8.9 J/TH Flagship Shows the Size of the Gap</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For comparison, <a href="https://service.bitmain.com/support/selfService">BITMAIN currently lists the Antminer S23 XP Hyd.</a> at 600 TH/s, 5,340 W and <strong>8.9 J/TH</strong>. BitcoinVersus has also covered the <a href="https://bitcoinversus.tech/2026/09/21/bitmain-antminer-s23-xp-hyd-8-9-j-th-bitcoin-mining/">S23 XP Hyd. breaking the 9 J/TH barrier</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Compared with 8.9 J/TH, ASICID’s implied 0.542 J/TH would use about <strong>94% less energy per terahash</strong> and would be roughly <strong>16.4 times more efficient</strong>. A leap of that magnitude would reshape mining economics, datacenter density, cooling design and the global network almost immediately if it were independently demonstrated at scale.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=dogBmxzW-Eg","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=dogBmxzW-Eg
</div><figcaption class="wp-element-caption"><em>CryptoView’s WDMS 2026 footage shows BITMAIN’s S23 XP Hyd. launch at 600 TH/s and 8.9 J/TH, providing a useful current-market reference for how aggressively leading ASIC efficiency is moving.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">The Electrical and Thermal Numbers Are Also Unusual</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ASICID lists the HomeRack at 53 kg, air cooling, 25 dB noise and a 110–240 V input range. A 5.2 kW continuous load still becomes roughly <strong>17,700 BTU per hour of heat</strong>. At 240 V, 5.2 kW corresponds to about 21.7 amps before considering losses or circuit-design margin; at 120 V it is about 43.3 amps.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>None of that makes a 5.2 kW rack impossible. Industrial and enthusiast miners routinely operate loads in this range. The unusual part is pairing that modest electrical input with 9.6 PH/s of claimed SHA-256 output, plus extremely low advertised noise and air cooling.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22959,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/asicid-claim-verification-body-1200x675-1.jpg" alt="Bitcoin mining equipment, cooling infrastructure and technicians at a large facility, illustrating the engineering evidence needed to verify miner hashrate and power claims." class="wp-image-22959" /><figcaption class="wp-element-caption"><em>Real ASIC verification requires reproducible wall-power measurements, pool-side hashrate evidence and hardware documentation. BitcoinVersus.Tech original editorial image.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">What Evidence Would Verify a 0.54 J/TH Miner?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>BitcoinVersus could not locate an independent lab benchmark, third-party pool-side hashrate record, teardown, chip identification, measured wall-power test or reproducible engineering report for the IDMINER series in the public material reviewed for this story. That absence does not prove the machines cannot exist. It means the published performance claim is not independently established by the evidence we found.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><li>A continuous pool-side worker log showing sustained SHA-256 hashrate over many hours, not only a local dashboard screenshot.</li><li>A calibrated wall-power measurement taken at the same time as the hashrate measurement.</li><li>Clear photographs or teardown documentation showing hashboards, ASIC packages, controller, power supplies and cooling path.</li><li>Chip-level documentation identifying the silicon process, die count and architecture responsible for the claimed efficiency.</li><li>An independent test performed by a recognized mining lab, operator, pool, firmware company or engineering publication.</li></ul>
<!-- /wp:list -->

<!-- wp:embed {"url":"https://www.reddit.com/r/BitcoinMining/comments/1joql15/how_to_avoid_being_scammed_when_purchasing_miners/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/BitcoinMining/comments/1joql15/how_to_avoid_being_scammed_when_purchasing_miners/
</div><figcaption class="wp-element-caption"><em>The BitcoinMining community regularly warns buyers to verify unusually attractive ASIC offers with independent evidence. This discussion is general purchasing guidance and is not evidence about ASICID specifically.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">A Unit Error Is One Possible Explanation—but the Company Repeats the Same Units</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A simple unit typo would be one possible explanation for specifications this far outside the current ASIC curve. But ASICID repeatedly publishes TH/s for Bitcoin hashrate across the HomeRack, IDMINER 2 and IDMINER 1, and its October press release repeats the same units. The company also markets the products as ready to ship.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That leaves the burden of proof where it belongs: on the extraordinary hardware claim. The mining industry already knows how to verify a machine. Plug it into a calibrated power meter, point it at an independent pool, run it long enough to smooth short-term share luck, and publish the raw data.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If an air-cooled 9.6 PH/s, 5.2 kW system can repeat those numbers under independent testing, it would be one of the most important Bitcoin mining hardware breakthroughs ever demonstrated. Until then, miners should treat <strong>0.54 J/TH as an unverified manufacturer claim</strong>, not a new industry benchmark.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor’s Note:</em> This article evaluates published specifications and does not allege fraud or wrongdoing. BitcoinVersus has not independently tested an ASICID miner.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support independent BitcoinVersus.Tech reporting with Bitcoin: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech is not a financial advisor. This article is for informational and educational purposes.</p>
<!-- /wp:paragraph -->