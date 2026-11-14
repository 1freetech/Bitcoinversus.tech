---
wordpress_post_id: 32347
status: "publish"
published: "2026-11-14"
title: "Litecoin Mining Pool Cuts Off Old Nodes as New Payout Rules Take Effect"
slug: "litecoin-c2pool-share-3601-merged-mining-payout-dash-fixes-november-2026"
live_url: "https://bitcoinversus.tech/2026/11/14/litecoin-c2pool-share-3601-merged-mining-payout-dash-fixes-november-2026/"
featured_media_id: 32343
source_1: "https://github.com/frstrtr/c2pool/releases/tag/v0.2.12.1"
source_2: "https://github.com/frstrtr/c2pool/releases/tag/v0.2.12.6"
media_status: "Three original technical graphics, no verified YouTube embed"
---

<!-- wp:paragraph -->
<p>Litecoin’s decentralized c2pool mining network activated <strong>share version 3601 at 00:00 UTC on November 13, 2026</strong>, changing how Litecoin-linked merged-mining payouts are derived and disconnecting incompatible pool nodes. The independent C++ mining-pool project also published follow-up releases and, on November 14, tagged <strong>v0.2.12.6</strong> after correcting how competing Litecoin and Dash shares are ranked. The changes affect c2pool’s internal sharechain, <strong>not Litecoin or Dogecoin consensus rules</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The official <a href="https://github.com/frstrtr/c2pool/releases/tag/v0.2.12.1">November 10 release notes</a> established the cutoff, while the project’s <a href="https://github.com/frstrtr/c2pool/releases/tag/v0.2.12.6">November 14 release tag</a> and source commits document subsequent maintenance. Operators running a different mining pool have no automatic 3601 migration deadline.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":32345,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full" style="max-width:1020px;margin:1.25rem auto"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/c2pool-release-activation-timeline.png" alt="Original timeline of c2pool November 10, 12 and 13 releases and share version 3601 activation." class="wp-image-32345" style="width:100%;height:auto" /><figcaption class="wp-element-caption"><em>Original release timeline from the maintainer’s GitHub tags and notes. Later November 14 revisions are discussed below, not shown in the timeline. Credit: BitcoinVersus.Tech.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Why a sharechain upgrade matters</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A pool share records acceptable hashing work even when it is not a successful Litecoin block. Unlike a centralized accounting database, c2pool nodes maintain a shared history of work used to calculate proportional mining payouts. The system uses Litecoin’s Scrypt proof of work and can merge-mine auxiliary chains such as Dogecoin. One accepted mining computation can satisfy requirements on more than one chain; it does not create free energy or guarantee an auxiliary block.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Before 3601, a share lacking an explicit Dogecoin payout address could inherit an address from an earlier share associated with the same Litecoin parent script. According to project maintainers, the fallback depended on the order in which a node first observed shares and could redirect an address-less share’s merged payout. New 3601 shares use their <strong>own auxiliary address if supplied, otherwise their own Litecoin parent key</strong>. Existing V36 shares retain their previous payout rules inside the historical reward window.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":32344,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full" style="max-width:1020px;margin:1.25rem auto"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/c2pool-share-payout-v36-versus-3601.png" alt="Flowchart comparing the former V36 merged-mining payout fallback with new version 3601 own-share payout derivation." class="wp-image-32344" style="width:100%;height:auto" /><figcaption class="wp-element-caption"><em>Original explanatory diagram derived from c2pool v0.2.12.1 notes. The fallback behavior concerns auxiliary rewards, not Litecoin block consensus. Credit: BitcoinVersus.Tech.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>A fixed activation timestamp replaced a miner-vote trigger for the 3601 share type. From the cutoff, Python p2pool and c2pool versions older than 0.2.12.1 cannot join the updated Litecoin sharechain. The software disconnects incompatible peers without banning them. Miners should verify their <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-it-what-is-stratum-asic-miners-pools/">Stratum endpoint and accepted-share statistics</a> before assuming an ASIC hardware failure.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">November 14 fixes address share selection</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Subsequent fixes target a different problem: when competing shares are produced nearly simultaneously, the share solving a parent-chain block should receive extra weight in branch selection. The project’s <a href="https://github.com/frstrtr/c2pool/commit/83f54caf50fc09690f9458f347efca7b56a775c0">Litecoin patch</a> and <a href="https://github.com/frstrtr/c2pool/commit/a0eaa517111e99035c039635c80410025ceae26d">Dash patch</a>, committed November 14, restore the intended priority with checks against the real network target. On Litecoin, a Dogecoin-only solution does not qualify for the Litecoin parent-block bonus.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The issue could leave a valid block-solving share outside the winning pool-share branch and alter its share-weight accounting; it does <strong>not</strong> imply that Litecoin or Dash blocks disappeared from their blockchains. The developer describes the v0.2.12.6 update as a share-selection correction. No independent reproduction of the fault or production rollout was performed for the article.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">One mining job, two reported blocks</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The project also reports a notable <strong>November 12 Litecoin–Dogecoin twin block</strong> using one proof of work: Litecoin block 3,211,872 and Dogecoin block 6,454,700, with reported rewards of 6.256 LTC and 10,001 DOGE. The maintainer says a public node produced the pair before the 3601 cutoff. The figures are project-supplied, rather than independently reconstructed from the two chains for the article.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":32346,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full" style="max-width:1020px;margin:1.25rem auto"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/c2pool-first-litecoin-dogecoin-twin-block.png" alt="Data graphic of the project-reported November 12 2026 Litecoin and Dogecoin blocks found using one Scrypt proof of work." class="wp-image-32346" style="width:100%;height:auto" /><figcaption class="wp-element-caption"><em>Original visualization of the c2pool maintainer’s documented LTC/DOGE block pair; amounts are reported block rewards, not a guaranteed miner payout. Credit: BitcoinVersus.Tech / frstrtr/c2pool.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech previously examined <a href="https://bitcoinversus.tech/2026/10/12/bitcoin-miners-lightning-payouts-p2poolv2/">decentralized P2Poolv2 payouts</a>, <a href="https://bitcoinversus.tech/2026/10/13/how-pps-mining-pools-work/">pay-per-share pool accounting</a> and <a href="https://bitcoinversus.tech/2026/10/11/stratum-v1-vs-stratum-v2/">Stratum protocols</a>. Those systems address different aspects of mining coordination. Our <a href="https://bitcoinversus.tech/2026/08/31/bitcoin-vs-litecoin-power-efficiency-analysis/">Bitcoin–Litecoin efficiency comparison</a> covers the hardware distinction between SHA-256 and Scrypt.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Operators should review the project’s current release notes, verify downloadable checksums and confirm all configured auxiliary addresses. The practical lesson is that <strong>ASIC hashrate, accepted pool shares and correct payout attribution are separate operating checks</strong>. A working machine alone cannot prove the pool software is accounting for its work correctly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>Primary sources:</strong> <a href="https://github.com/frstrtr/c2pool">c2pool maintainer repository and documented first LTC/DOGE twin block</a>; <a href="https://github.com/frstrtr/c2pool/releases/tag/v0.2.12.1">v0.2.12.1 release, November 10</a>; <a href="https://github.com/frstrtr/c2pool/releases/tag/v0.2.12.2">v0.2.12.2 release, November 12</a>; <a href="https://github.com/frstrtr/c2pool/releases/tag/v0.2.12.3">v0.2.12.3 release, November 13</a>; <a href="https://github.com/frstrtr/c2pool/releases/tag/v0.2.12.6">v0.2.12.6 tag, November 14</a>; <a href="https://github.com/frstrtr/c2pool/commit/83f54caf50fc09690f9458f347efca7b56a775c0">Litecoin branch selection commit</a>; <a href="https://github.com/frstrtr/c2pool/commit/a0eaa517111e99035c039635c80410025ceae26d">Dash branch selection commit</a>. Release dates, activation time, observed behavior and claimed block-pair figures are attributed to project maintainers.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>Editor’s Note:</strong> c2pool’s share version 3601 modifies decentralized pool accounting and peer compatibility, not Litecoin or Dogecoin on-chain consensus. The v0.2.12.6 tag and November 14 source changes were confirmed, but release-binary checks, pool-node operations, real payouts and block-pair reconstruction were not independently tested. The original 1200 × 630 colored-pencil cover is conceptual and does not depict a verified facility. All three in-story graphics are original technical illustrations based on the linked maintainer documentation. No relevant, verified official YouTube or individual social post with an embeddable ID was established, so no player is presented as verified. Actual mobile layout and video playback are untested.</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full" style="max-width:260px;margin:1.25rem auto"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Original BitcoinVersus.Tech donation QR code requesting an optional donation of 5,000 satoshis." class="wp-image-24043" style="width:100%;height:auto" /><figcaption class="wp-element-caption"><em>Original BitcoinVersus.Tech 5,000-satoshi donation QR. Independently verify the receiving address and amount.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech is volunteer-run and publishes independent educational technology reporting. An optional 5,000-satoshi donation supports ongoing research. Scan the original QR from a second screen with a compatible Bitcoin wallet; on mobile, use a wallet that supports scanning a saved image. Independently verify the recipient address 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb and the payment amount before sending. Bitcoin transfers are generally irreversible.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>We volunteer daily to ensure information on the BitcoinVersus.Tech platform is Verifiably True. Coverage is educational and informational and does not constitute financial or investment advice.</em></p>
<!-- /wp:paragraph -->