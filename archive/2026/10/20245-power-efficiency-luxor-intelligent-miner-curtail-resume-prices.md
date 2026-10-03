---
post_id: 20245
title: "Power Efficiency: Luxor Adds Separate Curtail and Resume Prices to Intelligent Miner"
live_url: "https://bitcoinversus.tech/2026/10/03/power-efficiency-luxor-intelligent-miner-curtail-resume-prices/"
featured_media_id: 20244
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/power-efficiency-luxor-intelligent-miner-cover.png"
status: publish
---

<!-- wp:paragraph --><p>Bitcoin mining efficiency is increasingly becoming a software problem as well as a hardware problem.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>On September 14, Luxor updated its Commander platform so Intelligent Miner can use separate curtail and resume price thresholds. The change gives operators a more granular way to decide when a fleet should step down and when it should come back up instead of treating power control as a single on/off decision.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>According to <a href="https://docs.luxor.tech/platform/changelog">Luxor’s September product changelog</a>, the Curtailment Strike Price control now supports distinct curtail and resume prices, works in both Intelligent and Binary Mining modes, saves alongside maximum-capacity settings, and no longer carries its previous upper cap.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Efficiency is no longer just the number on the ASIC spec sheet</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>Joules per terahash still defines the physical efficiency of a mining machine, but it does not tell an operator what power setting is economically best at every moment. A miner that is profitable at one electricity price can become marginal when power spikes, while the same machine may justify overclocking when energy becomes cheap and hashprice improves.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>That distinction matters as the rate of hardware improvement itself begins to tighten. BitcoinVersus.Tech recently examined whether <a href="https://bitcoinversus.tech/2026/09/22/bitcoin-mining-efficiency-starting-to-slow-down/">Bitcoin mining efficiency gains are starting to slow</a>, which makes extracting more value from each installed machine increasingly important.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>The network side is squeezing operators at the same time. Our report on <a href="https://bitcoinversus.tech/2026/09/25/bitcoin-difficulty-hits-132-76t-as-asic-efficiency-matters-more/">rising Bitcoin difficulty and ASIC efficiency</a> showed why every watt becomes more consequential as more hashrate competes for the same block subsidy.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Commander is trying to turn power settings into a market decision</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>When Commander originally launched, <a href="https://bitcoinmagazine.com/news/luxor-launches-commander-fleet-software">Bitcoin Magazine reported</a> that Intelligent Miner evaluates hashrate pricing and electricity costs every five minutes and changes miner power settings according to fleet composition and market conditions. Luxor’s own internal benchmark, cited in that coverage, claimed an 8–14% profitability improvement over simple binary curtailment; that figure is a company benchmark rather than an independently reproduced result.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Luxor summarized the broader approach in <a href="https://twitter.com/luxor/status/2039342079420338351">its Commander post on X</a>: fleet monitoring, remote commands and Intelligent Miner are tied to live hashprice and energy markets rather than managed as separate systems.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/luxor/status/2039342079420338351","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/luxor/status/2039342079420338351
</div><figcaption class="wp-element-caption"><em>Luxor’s Commander post describes Intelligent Miner as automated profitability optimization connected to live hashprice and energy markets.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph --><p>The September strike-price update makes that idea more explicit. Instead of asking only whether a machine should be on or off, the control system can distinguish between the market condition that justifies curtailing and the condition that justifies resuming.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">New ASICs still matter — software decides how they are used</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>None of this replaces better silicon. BitcoinVersus.Tech recently covered the <a href="https://bitcoinversus.tech/2026/09/27/bitmains-8-9-j-th-s23-xp-hydro-nears-november-shipments/">8.9 J/TH S23 XP Hydro</a>, an example of how much physical efficiency still separates new-generation equipment from older fleets.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>But a fixed efficiency rating describes a machine at a defined operating point. Modern firmware can expose multiple power profiles, so the best operating point can change as electricity prices, hashprice, site limits and grid conditions move.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>That turns power efficiency into two related questions: how efficiently can the ASIC convert electricity into hashes, and how intelligently can the site decide which efficiency profile to run right now?</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">The next efficiency race may happen in the control loop</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>The industry has spent years comparing miners by TH/s and J/TH. Those metrics remain fundamental, but fleet-control software is adding another layer: continuously choosing when to overclock, underclock, curtail or resume based on the economics surrounding the machine.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Luxor’s September update is a small interface change with a larger implication. As ASIC efficiency gains become harder to extract, operators may find that an increasing share of their advantage comes from controlling existing hardware more precisely rather than simply replacing it faster.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">BitcoinVersus.Tech</h2><!-- /wp:heading -->
<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Advertisement</h3><!-- /wp:heading -->
<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->
<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Editor’s Note</h3><!-- /wp:heading -->
<!-- wp:paragraph --><p><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p><!-- /wp:paragraph -->