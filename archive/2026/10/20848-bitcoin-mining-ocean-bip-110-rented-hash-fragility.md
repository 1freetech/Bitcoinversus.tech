<!-- wp:paragraph --><p><strong>OCEAN Mining’s post-BIP-110 review points to a distinction that matters for Bitcoin mining decentralization: not all hashrate behaves the same under stress. During the chain split, OCEAN says roughly 15 EH/s of rented hash left quickly while a larger share of owned mining capacity stayed with the pool.</strong></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>In a <a href="https://podscripts.co/podcasts/btc-sessions/they-bet-everything-on-an-existential-crisis-bob-burnett-nacho-pauls">September 10 BTC Sessions interview with OCEAN chairman Bob Burnett and Nacho Pauls</a>, the pair said the pool had been near 40 EH/s before the split and fell to roughly 23 EH/s afterward. Burnett said about 15 EH/s of the earlier peak had come from rented hashrate rather than miners with long-lived physical capacity committed to the pool.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>That matters because rented hashrate can move almost instantly when economics, signaling preferences or perceived risk change. Owned mining infrastructure is different: the machines, power contracts, transformers, cooling systems and site operations remain physically anchored even when the operator changes pools.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">The split tested whether pool choice was real</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The BIP-110 dispute also became a practical test of who actually controls block construction inside a mining pool. <a href="https://www.coindesk.com/markets/2026/08/10/bitcoin-miner-rejects-bip-110-despite-mining-through-a-pool-that-supported-it">CoinDesk documented Simple Mining using OCEAN’s DATUM protocol to mine a non-signaling block</a> even while OCEAN had previously made BIP-110 signaling the default for some Stratum users. DATUM let the individual miner build its own block template instead of delegating that decision entirely to the pool.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>That is the structural issue BitcoinVersus.Tech recently examined in <a href="https://bitcoinversus.tech/2026/09/30/btrust-stratum-v2-braidpool-bitcoin-core-mining-grants/">Btrust’s funding for Stratum V2 and Braidpool</a>: decentralization is not only about how many mining companies exist. It also depends on how much control individual miners retain over block templates, transaction selection and pool infrastructure.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>OCEAN later said the immediate split-related payout disruption had been resolved. In <a href="https://twitter.com/ocean_mining/status/2095945453108076612">its September 4 X update</a>, the pool announced that Lightning payouts had resumed and described the chain-split incompatibility as resolved.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/ocean_mining/status/2095945453108076612","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/ocean_mining/status/2095945453108076612
</div><figcaption class="wp-element-caption"><em>OCEAN says Lightning payouts resumed after the chain-split incompatibility was resolved, marking a return toward normal pool operations.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Rented hash can make a pool look larger than its durable base</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A pool reporting 40 EH/s and then falling to 23 EH/s can look like it lost nearly half of its underlying mining base. OCEAN’s account suggests a more complicated picture: a substantial portion of the peak was temporary rental capacity that could disappear as soon as the event driving it ended.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For mining analysis, that means raw pool hashrate can obscure the difference between durable physical infrastructure and short-lived rented capacity. The distinction is similar to the hardware-side problem BitcoinVersus.Tech discussed in <a href="https://bitcoinversus.tech/2026/09/29/bitcoin-mining-256-foundation-open-source-mining-stack/">256 Foundation’s push for a fully open mining stack</a>: the deeper question is who owns and controls the layers beneath the headline metric.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Rented hashrate is not inherently illegitimate. It can improve liquidity, let miners hedge or temporarily direct computing power toward a pool, and provide a fast way to express preference. But it can also make short-term pool concentration look more durable than it really is.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Mining decentralization is becoming a control-plane question</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The post-split lesson is therefore bigger than BIP-110. A decentralized mining network requires more than geographically distributed ASICs. It also requires miners to retain meaningful control over block construction, enough pool competition to switch providers, and software that does not force every participant into the same policy choice.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>That point also connects with <a href="https://bitcoinversus.tech/2026/09/24/bitcoin-third-one-block-reorg-four-weeks/">Bitcoin’s recent sequence of short one-block reorganizations</a>, where the network again demonstrated that hashrate distribution, propagation and block selection matter at the protocol edge rather than only in aggregate charts.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em>OCEAN’s BIP-110 experience showed that hashrate can be both massive and temporary. The more durable decentralization question is who controls the machines, who constructs the blocks and how easily miners can move without surrendering those decisions.</em></p><!-- /wp:paragraph -->

<!-- wp:separator --><hr class="wp-block-separator has-alpha-channel-opacity" /><!-- /wp:separator -->

<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">BitcoinVersus.Tech</h3><!-- /wp:heading -->
<!-- wp:paragraph --><p><strong>Advertisement</strong></p><!-- /wp:paragraph -->
<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>Follow BitcoinVersus.Tech for independent reporting on Bitcoin mining, ASIC hardware, energy, data centers and open-source infrastructure.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph --><p><strong><em><sup>BitcoinVersus.Tech Editor's Note:</sup></em></strong></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p><strong><em><sup>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</sup></em></strong></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p><em>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p><!-- /wp:paragraph -->