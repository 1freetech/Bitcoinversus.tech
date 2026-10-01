# Hammer Miner Thor P2 Reaches 10 TH/s as ThorOS 1.0.3 Adds Multi-Pool Switching

Published: 2026-09-30

Live: https://bitcoinversus.tech/2026/09/30/hammer-miner-thor-p2-10-ths-thoros-1-0-3-multi-pool/

WordPress Post ID: 19664
Featured Media ID: 19662

<!-- wp:paragraph -->
<p><strong>Hammer Miner’s Thor P2 is pushing desktop Bitcoin mining toward the 10 TH/s range while an upcoming ThorOS 1.0.3 beta adds multi-pool switching, custom display images and configuration changes that no longer require routine restarts.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A <a href="https://twitter.com/altair_tech/status/2104956376132780048">September 29 hardware update</a> from Altair Technology reports 10 TH/s at 155W measured at the wall, or about 15.5 J/TH, from the dual-BM1373 Thor P2. The compact miner also uses a large tower heatsink, copper heatpipes, a 120mm fan, Wi-Fi and Ethernet.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.hammerminer.com/">Hammer Miner’s current specifications</a> list the Thor P2 at 10 TH/s with two BM1373 ASICs and a lower 120W product-level power figure. That difference makes measurement point important: wall-plug power includes the full system rather than only the ASIC or internal miner load.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/altair_tech/status/2104956376132780048","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/altair_tech/status/2104956376132780048
</div><figcaption class="wp-element-caption"><em>Altair Technology’s September 29 measurements put the Thor P2 at 10 TH/s and 155W at the wall, while highlighting its oversized cooling system.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Wall power matters more than a dashboard number</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Thor P2 is part of a broader move toward multi-chip desktop miners that deliver materially more hashrate than the earliest Bitaxe-class devices without requiring an industrial circuit. The engineering tradeoff is that a complete system has more than ASIC chips drawing power: the controller, display, fan, lighting and conversion losses all contribute at the outlet.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A detailed <a href="https://www.cryptocloaks.com/2026/08/hammer-miner-thor-p2-review/">independent research review</a> separates those measurement points and cites roughly 50 to 60W in low-power operation, about 88W in normal mode and approximately 157 to 162W near the 10 TH/s setting. It also lists Ethernet, Wi-Fi, a 120mm ARGB fan, eight copper heatpipes and a 240W external power supply.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction is the same reason BitcoinVersus.tech recently examined <a href="https://bitcoinversus.tech/2026/09/30/bitaxe-naja-duo-wall-tests-stock-efficiency-13-j-th/">wall-plug efficiency on the Bitaxe Naja Duo</a>. Comparing two miners fairly requires measuring energy at the same point, over a similar operating period and at a stable hashrate.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=8Rm8tv0xu1o","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=8Rm8tv0xu1o
</div><figcaption class="wp-element-caption"><em>The Hobbyist Miner walks through the Thor P2 hardware, setup and live operation, including wall-power behavior near the 10 TH/s profile.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">ThorOS 1.0.3 targets less downtime</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The hardware update is arriving alongside a software change. Hammer Miner says ThorOS 1.0.3 beta will allow frequency, voltage, network and pool changes with almost no routine restarts. The release also adds multi-pool support so an operator can switch pools without rebooting the miner.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/hammerminer/status/2104553798576607597","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/hammerminer/status/2104553798576607597
</div><figcaption class="wp-element-caption"><em>Hammer Miner says ThorOS 1.0.3 beta will add multi-pool switching, custom screen images and configuration changes that generally avoid a restart.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>For home miners, that is more important than it sounds. A restart interrupts hashing, resets short-term telemetry and can complicate tuning when the operator is changing one variable at a time. BitcoinVersus.tech’s <a href="https://bitcoinversus.tech/2026/09/29/axeos-fundamentals-bitaxe-telemetry-tuning-guide/">AxeOS telemetry guide</a> makes the same operational point: stable measurements matter when frequency, voltage, temperature and accepted shares are being compared.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Multi-pool support also gives a desktop miner a cleaner failover path. Instead of treating pool configuration as a one-time setup field, firmware can make it part of normal operations, which is useful for testing latency, changing payout models or moving between solo and pooled mining.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Two BM1373 chips change the desktop-miner class</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Thor P2’s two BM1373 chips are the core reason it can reach a 10 TH/s operating range in a small chassis. Newer single-board miners are increasingly using the same generation of silicon, but chip count, voltage, cooling, firmware and power delivery determine how efficiently that silicon works in a finished product.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech recently saw why source-level and wall-level validation both matter when an <a href="https://bitcoinversus.tech/2026/09/29/open-source-audit-exposes-400-gh-s-bitfortun-bs-1-hashrate-offset/">open-source audit found a hashrate offset in the Bitfortun BS-1</a>. The lesson carries over to every new home miner: verify pool-side work, wall power and sustained hashrate instead of relying on one dashboard metric.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=VOc2qtE2po4","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=VOc2qtE2po4
</div><figcaption class="wp-element-caption"><em>Red Fox Crypto compares the newer BM1373 generation with earlier home-mining silicon and includes the Thor P2 in the efficiency discussion.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The useful number is sustained hashrate per wall watt</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Thor P2 is notable because it compresses two current trends into one desktop device: newer BM1373 silicon and firmware that increasingly behaves like small-scale mining infrastructure rather than a fixed appliance.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The 10 TH/s headline is only part of the story. For an operator deciding whether the machine fits a desk, office or home lab, the more useful questions are whether 10 TH/s can be sustained, what the outlet actually supplies, how much heat and noise the cooling system creates and whether the firmware can change pools or tuning parameters without repeatedly taking the miner offline.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ThorOS 1.0.3 beta directly targets that last problem. If the release performs as announced, the Thor P2 will become not only a higher-hashrate home miner but a more flexible platform for testing pool behavior, tuning profiles and next-generation BM1373 operation.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">BitcoinVersus.Tech</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Advertisement</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement: use promo code bitcoinversus for the offer described in the embedded post.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><strong><em><sup>BitcoinVersus.Tech Editor's Note:</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><strong><em><sup>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><em>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->
