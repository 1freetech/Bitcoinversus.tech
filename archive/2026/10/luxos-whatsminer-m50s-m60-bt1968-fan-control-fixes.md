---
title: "LuxOS Adds WhatsMiner M50S/M60 BT1968 Support and Tightens Fan Control"
date: 2026-10-09
published: "2026-10-09T08:57:35"
modified: "2026-10-09T09:00:06"
wordpress_post_id: 22563
wordpress_status: publish
live_url: "https://bitcoinversus.tech/2026/10/09/luxos-whatsminer-m50s-m60-bt1968-fan-control-fixes/"
category: "bitcoin mining"
featured_media_id: 22558
body_media_id: 22559
youtube: "https://www.youtube.com/watch?v=KzEOxCJehVE"
social_embed: "https://www.reddit.com/r/BitcoinMining/comments/18tmnz9/"
primary_source: "https://docs.luxor.tech/firmware/changelog"
archive_format: "final Gutenberg source"
---

<!-- wp:paragraph -->
<p>Luxor has expanded <a href="https://bitcoinversus.tech/2026/09/24/luxos-s21-plus-plus-signed-firmware-updates/">LuxOS</a> again, adding support for WhatsMiner M50S and M60 “VH” variants built around BT1968 hashboards while also tightening several pieces of day-to-day miner control logic. The <a href="https://docs.luxor.tech/firmware/changelog">September 30, 2026 firmware release</a>, which Luxor highlighted again on October 9, improves the WhatsMiner tuner, speeds up Bitmain no-SSH installation, initializes control-board LEDs even when no hashboards are detected, and fixes four operational edge cases involving pool selection, temperature data and fan safety.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The update is more consequential than a simple compatibility-list change. For large <a href="https://bitcoinversus.tech/2026/08/24/bitcoin-asic-architecture-bitmain-canaan-microbt-bitdeer/">ASIC</a> fleets, firmware is the layer that decides how the machine reacts to heat, bad sensor data, power targets, curtailment and failed components. Small control mistakes can therefore become site-wide operating problems when they are repeated across hundreds or thousands of miners.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22559,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/luxos-whatsminer-firmware-body-1200x675-1.jpg" alt="Technicians monitoring air-cooled Bitcoin mining ASICs during a firmware and cooling-system check." class="wp-image-22559" /><figcaption class="wp-element-caption"><em>Firmware changes reach the physical machine through tuning, temperature control, fan logic and fleet-management behavior. BitcoinVersus.Tech original editorial image.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">LuxOS Adds BT1968 WhatsMiner Support</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The headline Bitcoin-mining change is support for WhatsMiner M50S and M60 VH models using <strong>BT1968 hashboards</strong>. That hardware-revision qualifier matters. An M50S or M60 product name alone does not guarantee that every internal board revision is identical, so operators should verify the actual hashboard and control-board combination before deploying third-party firmware across a fleet.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Luxor’s <a href="https://docs.luxor.tech/firmware/compatibility">compatibility documentation</a> now spans selected MicroBT M50-, M50S-, M50S+-, M50S++-, M60- and M60S-family hardware. That builds on the company’s phased WhatsMiner rollout that started with M50-series support earlier in 2026. BitcoinVersus.Tech recently compared <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-hardware-microbt-vs-canaan-air-hydro-immersion-asic-fleet/">MicroBT and Canaan fleet options</a>; firmware support is becoming another variable operators have to weigh alongside efficiency, cooling, price and repairability.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">The Fan-Control Fixes Matter More Than They Look</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Three of the four fixes are directly connected to temperature and fan behavior. On S19a and S19a Pro miners, LuxOS fixed a case where a powered-off board could leave behind frozen sensor readings that still influenced fan speed. The new behavior uses only boards that remain running to set fan speed. Luxor also removed boards without a usable temperature reading from the fan calculation and fixed a latched fan panic that could clear before the firmware had actually seen the fans rotating again.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is important because the cooling loop is only as good as the data feeding it. LuxOS normally reads temperature sensors and continuously adjusts fan speed toward an operator-defined target; its <a href="https://docs.luxor.tech/firmware/features/tempsandfans">temperature-and-fan documentation</a> also describes fail-safe behavior when valid temperature data disappears. Treating stale or invalid sensor values as real can push the control loop in the wrong direction. The same principle appears in hardware troubleshooting: BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2024/09/03/how-to-replace-a-bitmain-control-board-control-board-overview/">control-board overview</a> explains why the controller is central to coordinating the rest of the miner.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The fourth fix addresses pool behavior. LuxOS says user pool groups could sometimes start on the configured backup pool instead of the primary pool. That may sound minor, but at fleet scale an unexpected pool choice can complicate hashrate accounting, monitoring and failover assumptions.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">The WhatsMiner Rollout Is Moving Beyond Its M50 Starting Point</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Luxor and MicroBT announced the WhatsMiner expansion in April. Luxor said at the time that more than 300,000 Bitcoin mining machines were already running LuxOS globally, while the MicroBT rollout would bring features such as Power Targeting, Advanced Thermal Management, faster hashrate ramp-up and rapid curtailment to supported WhatsMiner fleets. The announcement also included a planned strategic investment from MicroBT’s investment manager and a <strong>$100 million WhatsMiner hardware purchase commitment</strong> by Luxor.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/BitcoinMining/comments/18tmnz9/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/BitcoinMining/comments/18tmnz9/
</div><figcaption class="wp-element-caption"><em>Field discussion from r/BitcoinMining comparing WhatsMiner M60-series and Bitmain hardware, including reliability, serviceability and firmware considerations.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>September’s platform changelog had already added Commander-based LuxOS installation for WhatsMiner M50/M60 models. The new firmware release makes the hardware support more explicit at the hashboard level. That progression—from partnership, to installer workflow, to additional board support—is a more useful signal for operators than a broad statement that a model family is “supported.”</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">WhatsMiner Tuning Is Becoming Part of the Same Fleet-Control Stack</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The release also says the WhatsMiner tuner has been improved. LuxOS’s <a href="https://docs.luxor.tech/firmware/features/autotuner">AutoTuner</a> adjusts operating parameters to find stable efficiency and performance settings, while supported power-targeting machines can move to a new wattage without a restart. That pushes firmware beyond a static configuration image and toward an active control system for the electrical and thermal behavior of the miner.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is the same competitive direction visible in other mining firmware. <a href="https://bitcoinversus.tech/2026/09/27/braiins-os-26-09-asic-power-startup-diagnostics/">Braiins OS 26.09</a> recently improved power and startup diagnostics, while <a href="https://bitcoinversus.tech/2026/09/27/k1pool-firmware-1-30-downclocks-individual-hot-asic-chips/">K1Pool Firmware 1.30</a> added per-chip thermal downclocking. The firmware race is increasingly about how precisely software can control imperfect physical hardware under changing site conditions.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Watch LuxOS on WhatsMiner M50 and M60 Hardware</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Luxor published a dedicated demonstration of LuxOS support for the WhatsMiner M50 and M60 series in September. The video below is embedded as the native responsive YouTube player rather than a thumbnail or text link.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=KzEOxCJehVE","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=KzEOxCJehVE
</div><figcaption class="wp-element-caption"><em>Luxor Technology: LuxOS WhatsMiner M50 &amp; M60 Series Support.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Operators Should Verify Revisions Before a Fleet-Wide Rollout</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The practical takeaway is not “flash every M60 immediately.” It is to treat firmware deployment like any other production change. Luxor’s own getting-started guidance recommends upgrading in batches so only a limited number of miners reboot at once. Operators should record the exact hashboard revision, preserve the existing configuration, confirm pool order, test fan and temperature behavior under load, and verify that monitoring systems still see the machine correctly after the upgrade.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><li>Confirm the miner model, control board and hashboard revision before installation.</li><li>Stage the update on a small sample instead of the entire fleet.</li><li>Verify primary and backup pool order after reboot.</li><li>Check fan RPM, temperature sensors and thermal alarms under real load.</li><li>Compare hashrate, wall power and stability before changing tuning targets.</li><li>Review manufacturer warranty terms before using third-party firmware or overclocked parameters.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>That last point matters for MicroBT hardware. The company’s current <a href="https://shop.whatsminer.com/products/details/65?skuId=166">M60 warranty language</a> excludes certain damage associated with unofficial supporting software or independently modified operating parameters such as overclocking. That does not mean every third-party firmware installation automatically produces the same warranty outcome, but operators should understand the applicable terms before changing production machines.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Why This Release Matters</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Bitcoin mining hardware is becoming less useful to think about as a sealed appliance. The ASIC chips do the hashing, but the firmware increasingly determines how efficiently and safely a fleet can respond to temperature, power constraints, curtailment signals, failing boards and changing pool conditions. LuxOS adding another specific WhatsMiner board family while fixing fan-control edge cases is therefore both a compatibility story and an operations story.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The next thing to watch is how quickly Luxor expands support across additional MicroBT revisions and whether WhatsMiner tuning reaches the same maturity operators already expect from the established Antminer firmware ecosystem. The hardware competition between Bitmain, MicroBT, Canaan and newer ASIC vendors is increasingly accompanied by a second competition: who gives miners the best software control over every joule, chip and fan in the fleet.</p>
<!-- /wp:paragraph -->