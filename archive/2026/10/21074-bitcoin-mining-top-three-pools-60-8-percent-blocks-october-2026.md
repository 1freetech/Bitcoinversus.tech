<!-- wp:group -->
<div class="wp-block-group">
<!-- wp:paragraph -->
<p>Bitcoin’s mining layer entered October with a familiar decentralization question: how much block production is being coordinated through a small number of pools?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A live <a href="https://pro.startmining.io/en/pools">StartMining pool-economics snapshot</a> on October 5, 2026, counted 176 blocks over the prior 24 hours. Foundry USA produced 47 of them, or 26.7%, while the three largest pools together accounted for 60.8%. On that window, the pool-level Nakamoto coefficient was three—the minimum number of pools whose combined observed block share exceeded 50%.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That does not mean three companies own 60.8% of Bitcoin mining machines. Pools coordinate work for many independent miners, and a one-day window is also exposed to ordinary mining luck. But the concentration is still operationally important because pools can influence block construction, payout mechanics, connectivity, and the way miners route hashrate.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The one-day snapshot is not an isolated reading</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The longer view points in the same direction. <a href="https://maketo.com/bitcoin/mining-pools">Maketo’s block-by-block count since the 2024 halving</a>, updated October 5, attributes 29.5% of blocks to Foundry USA, 19.8% to AntPool and 11.9% to ViaBTC. Together, those three names account for 61.2% of the 129,848 blocks in that post-halving dataset. Maketo also reports that just three named pools are enough to pass half of all blocks in the current halving era.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The agreement between the short and long windows is the more meaningful signal. A 24-hour pool table can swing when one operator gets lucky or unlucky. A concentration pattern that remains near the same level across more than 129,000 blocks is harder to dismiss as noise.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus has been tracking the other side of this story as well. <a href="https://bitcoinversus.tech/2026/09/30/btrust-stratum-v2-braidpool-bitcoin-core-mining-grants/">Btrust’s funding for Stratum V2 and Braidpool</a> is aimed at giving miners more control over block construction, while the recent <a href="https://bitcoinversus.tech/2026/10/05/bitcoin-mining-ocean-bip-110-rented-hash-fragility/">OCEAN BIP-110 split analysis</a> showed why pool behavior and rented hashrate can matter during contentious network events.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Stratum V2 changes what pool concentration means</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Pool concentration and miner control are related, but they are not identical. Under the traditional pooled-mining model, a pool server generally constructs the candidate block and participating miners work on the job they are given. Stratum V2’s Job Declaration design can separate those roles by allowing a miner to construct its own block template while still using a pool for share accounting and payouts.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction moved from theory to production this year. In June, DMND CEO Alejandro de la Torre <a href="https://twitter.com/bitentrepreneur/status/2070131040992035235">reported the first known mainnet Bitcoin block mined through Stratum V2 Job Declaration</a>, with the miner constructing its own block template rather than accepting transaction selection from the pool.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/bitentrepreneur/status/2070131040992035235","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/bitentrepreneur/status/2070131040992035235
</div><figcaption class="wp-element-caption"><em>Alejandro de la Torre describes the first known mainnet Bitcoin block mined through Stratum V2 Job Declaration.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>If miner-selected templates become common, a large pool’s share of block rewards would no longer automatically imply the same share of transaction-selection control. That would not eliminate every centralization concern—payout custody, network connectivity, software concentration and pool policy still matter—but it would narrow one of the most important control points.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=_CkS8WyXIQ8","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=_CkS8WyXIQ8
</div><figcaption class="wp-element-caption"><em>Adopting Bitcoin Cape Town explains how Stratum V2 can move transaction selection from pool operators back toward individual miners.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why pool failover still matters for operators</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For an individual mining operation, decentralization is not only a protocol debate. It is also a configuration choice. Operators decide which pool receives their primary hashrate, which endpoints sit in failover positions, and how quickly machines can be redirected when performance, policy or connectivity changes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why practical pool configuration deserves the same attention as industry-level concentration statistics. The BitcoinVersus <a href="https://bitcoinversus.tech/2026/09/29/axeos-fundamentals-pool-settings-worker-names-failover/">AxeOS guide to pool settings, worker names and failover</a> covers the operational layer miners can control directly.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The metric to watch next</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The 60.8% figure should not be treated as a permanent market share. Pools gain and lose hashrate, block luck changes, and miners can repoint machines quickly. The more durable question is whether the number of pools needed to exceed half of observed blocks rises over time—and whether miners inside the largest pools increasingly construct their own templates.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If those two trends move in opposite directions, Bitcoin could remain concentrated at the payout-pool layer while becoming less concentrated at the block-construction layer. That would be a meaningful structural improvement even before the headline pool percentages change.</p>
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
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->