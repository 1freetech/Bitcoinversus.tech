---
post_id: 22549
title: "LuxOS Adds Z15 Pro and WhatsMiner VH Support, Fixes Fan-Control Bugs"
slug: luxos-z15-pro-whatsminer-vh-bt1968-fan-control-fixes
status: publish
published: "2026-10-09T08:53:43"
modified: "2026-10-09T08:53:43"
live_url: "https://bitcoinversus.tech/2026/10/09/luxos-z15-pro-whatsminer-vh-bt1968-fan-control-fixes/"
categories:
  - name: "bitcoin mining"
    id: 57414501
  - name: "Trending News"
    id: 27318186
featured_media: 22545
featured_image: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/luxos-firmware-update-cover-1200x630-1.jpg"
featured_image_width: 1200
featured_image_height: 630
body_image_media: 22546
body_image: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/luxos-mining-fleet-firmware-body.png"
youtube: "https://www.youtube.com/watch?v=B6Gvydg002Q"
social_embed: "https://www.reddit.com/r/EtherMining/comments/1wykzv4/zcash_miners_brand_new_z15_pro_available_now_ask/"
excerpt: "LuxOS now supports the Antminer Z15 Pro and WhatsMiner VH M50S/M60 miners with BT1968 hashboards, while fixing fan-control, temperature-sensor and pool-failover bugs."
seo_title: "LuxOS Adds Z15 Pro, WhatsMiner VH Support and Fan-Control Fixes"
seo_description: "LuxOS adds Antminer Z15 Pro and WhatsMiner VH M50S/M60 support, improves the WhatsMiner tuner, and fixes fan, sensor and pool-failover bugs."
---

<!-- wp:paragraph -->
<p>Luxor Technology has expanded <strong>LuxOS</strong> to another slice of the mining-hardware market, adding support for Bitmain’s <strong>Antminer Z15 Pro</strong> and <strong>WhatsMiner VH variants of the M50S and M60 that use BT1968 hashboards</strong>. The September 30 firmware release also changes WhatsMiner tuning and Bitmain installation behavior and fixes four operational bugs involving pool failover, temperature readings and fan protection.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The update matters because it is not simply another model-name addition. Firmware lives between an ASIC’s electronics and the operator’s fleet controls, so a bad sensor state, a premature fan-panic reset or an unexpected backup-pool selection can become a site-level uptime problem when multiplied across rows of machines. Luxor’s <a href="https://docs.luxor.tech/firmware/changelog" target="_blank" rel="noopener noreferrer">official LuxOS changelog</a> lists all four fixes alongside the new hardware support.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22546,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/luxos-mining-fleet-firmware-body.png?w=1024" alt="Rows of ASIC miners with cooling and power infrastructure at an industrial mining site" class="wp-image-22546" /><figcaption class="wp-element-caption"><em>Bitcoin mining firmware sits between the ASIC hardware and fleet operations: tuning, pool configuration, thermal behavior and recovery logic all meet at the machine level. BitcoinVersus.Tech illustration.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The new support is specific, not universal</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>On the MicroBT side, this release does <strong>not</strong> mean that LuxOS only now learned how to run on the M50 family. Luxor added support in May for several M50, M50S, M50S+ and M50S++ variants. The new September release extends that work specifically to <strong>VH M50S and M60 machines fitted with BT1968 hashboards</strong>. That board-level distinction is important in an industry where two miners sold under similar model names can carry different control boards, hashboards or firmware constraints. BitcoinVersus previously explained <a href="https://bitcoinversus.tech/2026/09/27/bitcoin-mining-hashboard-consolidation-compatibility/">why hashboards cannot always be swapped between ASIC models</a> and examined how <a href="https://bitcoinversus.tech/2026/10/05/bitcoin-mining-techinsights-samsung-3nm-gaa-whatsminer-m56s-plus-plus/">MicroBT’s WhatsMiner architecture can change materially between generations</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Luxor’s current <a href="https://docs.luxor.tech/firmware/compatibility" target="_blank" rel="noopener noreferrer">compatibility table</a> lists the Z15 Pro with a Xilinx control board and BEZ36501 hashboards, while its WhatsMiner list spans M50, M50S, M50S+, M50S++, M60 and M60S variants. The practical lesson for operators is familiar: verify the exact board revision before rolling firmware across a fleet.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The fan-control fixes may matter more than the headline</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The release fixes a case on S19a and S19a Pro machines where a powered-off hashboard could retain frozen temperature-sensor values and keep influencing fan speed. LuxOS now allows only boards that are still running to set the fan speed. A separate fix removes boards without a usable temperature reading from the fan calculation, while another prevents a latched fan-panic state from clearing before the fans are actually observed rotating again.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those are small software changes with physical consequences. Fans are part of the machine’s thermal-protection loop, and temperature telemetry is only useful if the firmware knows whether a reading is current, stale or invalid. BitcoinVersus has covered the same hardware-software boundary from the repair side in <a href="https://bitcoinversus.tech/2026/09/30/gomining-chip-level-asic-repair-south-carolina-bitcoin-mine/">GoMining’s chip-level ASIC repair workflow</a> and from the firmware side in <a href="https://bitcoinversus.tech/2026/09/27/braiins-os-26-09-asic-power-startup-diagnostics/">Braiins OS 26.09 power and startup diagnostics</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Z15 Pro brings LuxOS beyond SHA-256 fleets</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Antminer Z15 Pro is an <strong>Equihash</strong> machine used for Zcash mining, not a Bitcoin SHA-256 ASIC. Luxor’s platform changelog says Commander now supports Z15 Pro installs and includes an algorithm selector for SHA-256 or Equihash views. That gives Luxor a path to reuse fleet-management ideas developed for Bitcoin miners on a different mining algorithm.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Luxor has promoted overclocking results on early Z15 Pro deployments, but the company’s documentation includes an important limitation: <strong>AutoTuner support for Antminer Equihash miners is still listed as coming soon</strong>. Z15 Pro operators can use preset profiles and monitoring now, but the automatic tuning behavior available on supported Bitcoin ASICs should not be assumed to work identically on the Z15 Pro.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/EtherMining/comments/1wykzv4/zcash_miners_brand_new_z15_pro_available_now_ask/","type":"rich","providerNameSlug":"reddit","responsive":true,"className":"wp-block-embed-reddit"} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/EtherMining/comments/1wykzv4/zcash_miners_brand_new_z15_pro_available_now_ask/
</div><figcaption class="wp-element-caption"><em>Community context: a recent discussion about the Z15 Pro hardware. Vendor and profitability claims in the thread are not used as sources for this article.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">LuxOS has been widening its hardware footprint</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>LuxOS began as third-party firmware for Bitmain Antminers. BitcoinVersus covered an earlier <a href="https://bitcoinversus.tech/2024/07/19/luxor-releases-details-on-latest-os-update/">LuxOS release in 2024</a>, and the competitive backdrop has changed quickly since then. In 2025, BitcoinVersus examined <a href="https://bitcoinversus.tech/2025/01/28/bitmains-asic-dominance-faces-new-competition/">Bitmain’s ASIC dominance and rising competition</a>. This year Luxor expanded LuxOS to MicroBT hardware, then continued adding specific board revisions rather than treating a miner family as one homogeneous target.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That MicroBT expansion also carries a business relationship. In April, Luxor announced that MicroBT’s investment manager had signed a term sheet for a strategic investment and that Luxor committed to a <strong>$100 million</strong> purchase of WhatsMiner hardware. Luxor said at the time that more than 300,000 Bitcoin mining machines were already running LuxOS globally. Those figures come from <a href="https://luxor.tech/news/corporate-news/article/luxor-expands-luxos-to-microbt-whatsminer-and-microbt-intends-for-a-strategic-investment" target="_blank" rel="noopener noreferrer">Luxor’s corporate announcement</a>, not an independent fleet audit.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=B6Gvydg002Q","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=B6Gvydg002Q
</div><figcaption class="wp-element-caption"><em>Luxor Technology’s firmware tutorial shows the LuxOS update workflow and automatic-update controls on an ASIC miner.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why firmware consistency matters at mining scale</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>At one machine, firmware can look like a tuning utility. At fleet scale, it becomes part of operations. Pool priority, temperature control, fan recovery, startup behavior, logging, network access and update handling all affect whether a technician can diagnose a fault quickly or whether a problem propagates across a row. That is why the backup-pool fix in this release matters alongside the new hardware support. BitcoinVersus recently explained <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-it-what-is-stratum-asic-miners-pools/">how Stratum connects ASIC miners to pools</a> and <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-snmp-bitcoin-mining-switch-pdu-monitoring/">how monitoring protocols fit into mine operations</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The safest deployment pattern remains staged rather than fleet-wide on day one: confirm the exact control-board and hashboard combination, test a small group of machines, compare temperatures, power, hashrate, rejected shares and recovery behavior, then expand only after the new firmware behaves correctly under the site’s real ambient and power conditions. Recent <a href="https://bitcoinversus.tech/2026/09/24/luxos-s21-plus-plus-signed-firmware-updates/">LuxOS S21++ support and signed-update work</a> and <a href="https://bitcoinversus.tech/2026/09/29/luxor-commander-adds-luxos-support-for-bitmain-hbh1500-hashboards/">Commander’s added hashboard support</a> show the same pattern: board-level compatibility is becoming as important as the model name printed on the chassis.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What comes next</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The next technical milestone to watch is Equihash AutoTuner support for the Z15 Pro and whatever additional MicroBT board variants Luxor validates. The September 30 release makes the firmware footprint broader, but its more consequential work may be less visible: correcting the thermal, fan and pool-state edge cases that determine whether custom firmware is dependable enough for continuous industrial use.</p>
<!-- /wp:paragraph -->