# Btrust Funds Stratum V2, Braidpool and Bitcoin Core Mining Infrastructure

Published: 2026-09-30

Live: https://bitcoinversus.tech/2026/09/30/btrust-stratum-v2-braidpool-bitcoin-core-mining-grants/

WordPress Post ID: 19628
Featured Media ID: 19627

<!-- wp:paragraph -->
<p><strong>Btrust is putting new long-term and starter-grant funding behind several layers of Bitcoin mining infrastructure, including Stratum V2, Braidpool and Bitcoin Core’s mining interfaces.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The organization’s <a href="https://x.com/btrustteam/status/2102691525884776753">September 23 grant announcement</a> names mining as one of the quarter’s core technical themes, with developers working on pool communication, decentralized coordination, template delivery and production reliability.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In its <a href="https://blog.btrust.tech/expanding-btrusts-long-term-developer-grants-across-the-global-majority/">long-term grant announcement</a>, Btrust says Brazilian developer plebhash will continue working full time on the Stratum V2 Reference Implementation, focusing on the specification, interoperability and infrastructure intended to reduce centralizing pressure in Bitcoin mining.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://x.com/btrustteam/status/2102691525884776753","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://x.com/btrustteam/status/2102691525884776753
</div><figcaption class="wp-element-caption"><em>Btrust’s Q3 2026 grant announcement places Stratum V2, Braidpool and Bitcoin Core mining interfaces inside the same open-source infrastructure push.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Stratum V2 moves from protocol design toward production reliability</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Stratum is the communication layer connecting miners, proxies and pools. Stratum V2 modernizes that path with encrypted connections, more efficient messaging and a job-declaration model that can give miners more control over the transaction sets used to construct candidate blocks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That technical shift is already reaching real mining software. BitcoinVersus.tech recently covered how <a href="https://bitcoinversus.tech/2026/09/27/bitaxe-pool-adds-encrypted-stratum-v2-mining-through-axeos/">Bitaxe Pool added encrypted Stratum V2 mining through AxeOS</a>, bringing the protocol into an open-source home-mining workflow rather than leaving it only at the specification level.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The new funding targets the less visible work required after a protocol exists: implementation hardening, interoperability, testing, deployment tooling and the maintenance needed for different pools, proxies and mining devices to communicate consistently.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=khkNCP_lzYo","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=khkNCP_lzYo
</div><figcaption class="wp-element-caption"><em>f2pool’s recent discussion with Stratum V2 contributor Pavlenex explains what changes for miners as encrypted communication and miner-side block construction move closer to normal operation.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Braidpool adds a second decentralization path</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Btrust is also funding continued work on Braidpool, a peer-to-peer mining-pool design intended to reduce dependence on a single pool operator for coordination, payouts and block-construction decisions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ansh Sharma’s long-term grant focuses on Braidpool performance, scalability and network resilience, while Sharon Nkatha’s starter-grant work targets Braidpool’s Stratum V1 reliability and protocol completeness so existing mining hardware can connect more dependably.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The broader concentration problem is visible above the software layer. BitcoinVersus.tech recently reported that <a href="https://bitcoinversus.tech/2026/09/26/public-bitcoin-miners-now-control-roughly-45-of-network-hashrate/">public mining companies now represent a large share of network hashrate</a>. Pool and protocol decentralization do not reverse corporate concentration by themselves, but they can limit how much transaction-selection power has to sit with a small number of coordinating entities.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://x.com/btrustteam/status/2100228573319606444","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://x.com/btrustteam/status/2100228573319606444
</div><figcaption class="wp-element-caption"><em>Btrust’s September 16 announcement introduced long-term support for plebhash on Stratum V2 and Ansh Sharma on Braidpool, extending grant funding into mining protocol infrastructure.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Bitcoin Core is part of the same mining interface</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The grant cohort also includes work on Bitcoin Core’s inter-process communication mining interface, libmultiprocess and the Stratum V2 template provider. Those components sit between Bitcoin Core’s block-building logic and external mining software.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That connection matters because decentralized block construction only works cleanly when mining software can retrieve candidate-block information from Bitcoin Core and pass it through the rest of the stack without reintroducing a central point of control.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Independent funding for Stratum V2 is not new. <a href="https://opensats.org/projects/stratumv2">OpenSats’ project record</a> shows continuing support for specification work, the reference implementation, testing, compatibility and deployment tools. Btrust’s new grants add sustained developer funding around the same production problem while also extending support to adjacent decentralized-pool and Core-interface work.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=p0Y6HzX7SzI","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=p0Y6HzX7SzI
</div><figcaption class="wp-element-caption"><em>HashrateUp’s discussion with Stratum V2 contributors Pavlenex and Gabriele Vernetti examines the protocol’s security, efficiency and implementation goals from the mining-operations side.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The target is less trust in pool operators</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Mining pools solve a real economic problem by smoothing payouts for miners that might otherwise wait years to find a block. The tradeoff is that a pool operator can become a powerful coordination point for block templates and transaction selection.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech has tracked the other side of that tradeoff through <a href="https://bitcoinversus.tech/2025/01/16/ocean-mining-pool-reaches-56-of-unique-bitcoin-miners/">OCEAN’s push to attract a broad base of individual miners</a>. Stratum V2 and Braidpool attack the problem differently: instead of only changing which operator miners trust, they try to reduce how much trust the architecture requires.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The significance of Btrust’s latest grants is therefore less about a single software release than about staffing the connective tissue of Bitcoin mining. Miners still need ASICs, power and pools, but decentralization increasingly depends on who controls the software paths between those pieces.</p>
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

<!-- wp:embed {"url":"https://x.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://x.com/1BitcoinVersus/status/1937006164555993338
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
