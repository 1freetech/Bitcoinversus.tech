---
title: "Bitaxe Naja Duo Wall Tests Put Stock Efficiency Near 13 J/TH"
status: published
wordpress_post_id: 19606
published: "2026-09-30T14:41:00"
live_url: "https://bitcoinversus.tech/2026/09/30/bitaxe-naja-duo-wall-tests-stock-efficiency-13-j-th/"
slug: "bitaxe-naja-duo-wall-tests-stock-efficiency-13-j-th"
featured_media_id: 19605
featured_image: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/09/bitaxe-naja-duo-wall-power-2026-09-30.jpg"
category: "Bitcoin Mining / ASIC Hardware"
---

# Bitaxe Naja Duo Wall Tests Put Stock Efficiency Near 13 J/TH

## Published WordPress Gutenberg source

<!-- wp:paragraph -->
<p>The Bitaxe Naja Duo arrived with one of the strongest efficiency claims yet for an open-source desktop Bitcoin miner: 4.4 TH/s at about 42 watts, or 9.5 J/TH. New wall-meter testing suggests operators should attach an important qualifier to that number: power measured at the board or reported by firmware is not necessarily the same as electricity drawn from the AC outlet.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.solosatoshi.com/bitaxe-naja-duo-breaks-the-single-digit-efficiency-barrier-with-two-bm1373-asic-chips/">Solo Satoshi’s published specifications</a> rate the two-chip BM1373 miner at roughly 4.4 TH/s, 42 W and 9.5 J/TH at its default 327 MHz, 1,000 mV profile. The company also publishes a tested 8 TH/s overclock at about 92 W and 11.5 J/TH, while noting that hardware results can vary with the silicon lottery.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/SoloSatoshi/status/2093401983243702650","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/SoloSatoshi/status/2093401983243702650
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Solo Satoshi’s August 28 launch post lists 4.4 TH/s at 9.5 J/TH and an 8 TH/s profile at 11.5 J/TH for the Naja Duo.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The newer discussion centers on measurement boundaries. A wattage figure inside a miner can represent ASIC, board or estimated DC power, while a wall meter sees the full system after power-supply losses and auxiliary loads such as fans, display electronics and the controller. That difference matters whenever joules per terahash is calculated from the number an owner actually pays for on the electric bill.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=ClyUSJamWLo","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=ClyUSJamWLo
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Fully Electric measures Naja Duo power at the AC outlet, separating wall draw from the miner’s onboard power figure.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Fully Electric’s September 15 test reports a tuned operating point of about 7.3 TH/s at 92 W from the wall, or roughly 12.6 J/TH. The same testing sequence also provides the stock wall-power evidence later used in comparisons of the Naja Duo against other BM1373 desktop miners.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A subsequent <a href="https://altairtech.io/bitaxe-naja-duo-vs-hammer-thor-p2/">wall-power comparison</a> compiled the independent Naja measurements at about 4.6 TH/s and 60 W in a stock configuration. That works out to approximately 13.0 J/TH at the outlet. Its higher-power example lists about 8.2 TH/s at 131 W, or 15.98 J/TH.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Altair Technology sells the competing Hammer Thor P2, so its product-ranking conclusions carry an obvious commercial interest. BitcoinVersus is not adopting the retailer’s “winner” framing. The useful part of the comparison is the measurement question itself, because Altair identifies the independent Naja wall tests behind the numbers and distinguishes those readings from the published device specifications.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Altair’s <a href="https://twitter.com/altair_tech/status/2100958881006444669">September 18 comparison on X</a> condensed that difference into a claim that the Naja Duo drew about 43% more power at the wall than the advertised stock wattage.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/altair_tech/status/2100958881006444669","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/altair_tech/status/2100958881006444669
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Altair Technology’s September 18 post highlights the gap between the Naja Duo’s published wattage and cited AC wall-meter measurements.</em></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=rr1W5QHMhBc","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=rr1W5QHMhBc
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>HarloLabs independently tests the two-BM1373 Naja Duo and examines how its efficiency changes when system power is measured from the wall.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Board efficiency and wall efficiency answer different questions</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The distinction is useful beyond one home miner. BitcoinVersus previously reviewed how <a href="https://bitcoinversus.tech/2026/08/24/bitcoin-asic-architecture-bitmain-canaan-microbt-bitdeer/">ASIC architecture</a> pushes efficiency lower at the silicon level, but the electricity meter sees every conversion stage around that silicon. A miner can therefore have highly efficient ASICs while posting a somewhat higher whole-system J/TH figure at the outlet.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Naja Duo also sits inside a rapidly changing open-source firmware stack. The recent <a href="https://bitcoinversus.tech/2026/09/23/bitaxe-esp-miner-2-15-3-firmware-warnings/">ESP-Miner 2.15.3 update</a> changed warning logic around device presets, while the preceding release added BM1372 and BM1373 driver support. Accurate power reporting is a separate issue from those warning changes, but both reinforce why operators should record firmware version, voltage, frequency, accepted work and wall power together when comparing configurations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That same measurement discipline was visible in an earlier BitcoinVersus test of a heavily tuned <a href="https://bitcoinversus.tech/2025/04/22/open-source-bitaxe-achieves-10-8-th-s-at-157-watts/">open-source Bitaxe configuration</a>. Hashrate alone does not describe an operating point; the useful comparison is hashrate, stability, temperature and measured input power under the same test boundary.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For Naja Duo owners, the practical takeaway is straightforward: the published 42 W figure remains useful for understanding the board’s intended stock operating profile, while an AC wall meter is the better number for budgeting electricity and calculating whole-system efficiency. Around 4.6 TH/s at 60 W, the real outlet-level figure is about 13 J/TH, still efficient for a compact open-source miner even though it is materially above 9.5 J/TH.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That does not require assuming either number is fabricated. It requires stating what is being measured. As desktop miners become powerful enough for single-digit board-level efficiency claims, measurement boundary is becoming part of the specification.</p>
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
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech advertisement on X.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em><sup>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->

## Verification metadata

- Duplicate gate: distinct wall-power follow-up to the existing ESP-Miner firmware article
- Internal BitcoinVersus.tech links: 3
- External credibility sources: 2
- Story X embeds: 2
- YouTube embeds: 2
- Footer BitcoinVersus.Tech advertisement X embed: 1
- X compatibility form: twitter.com status URLs with providerNameSlug "x" and wp-block-embed-x
- Featured image: unique 1200 × 630 JPEG, media ID 19605
- Featured image duplicated in body: no
- Embed captions italicized: yes
- Mandatory disclaimer preserved: yes
