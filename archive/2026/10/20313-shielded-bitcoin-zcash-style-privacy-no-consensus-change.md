---
post_id: 20313
title: "Shielded Bitcoin Proposes Zcash-Style Privacy Without Changing Bitcoin Consensus"
live_url: "https://bitcoinversus.tech/2026/10/03/shielded-bitcoin-zcash-style-privacy-no-consensus-change/"
featured_media_id: 20309
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/shielded-bitcoin-privacy-protocol-cover.png"
status: publish
---

<!-- wp:paragraph -->
<p>A new Bitcoin privacy proposal is trying to do something that usually sounds contradictory: hide the sender, receiver and amount of a transfer while leaving Bitcoin’s consensus rules unchanged. Researchers Clara Shikhelman, Mikhail Komarov and Aleksei Moskvin published Shielded Bitcoin on September 24, and <a href="https://twitter.com/allocinitxyz/status/2103124026214568209">[alloc] init announced the work on X</a> the same day.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The team’s <a href="https://delvingbitcoin.org/t/shielded-bitcoin-private-transfers-on-the-bitcoin-l1/2912">plain-language protocol description on Delving Bitcoin</a> calls Shielded Bitcoin a metaprotocol: Bitcoin stores and orders the data, while separate software applies the privacy system’s rules. That distinction is central. Bitcoin itself does not suddenly learn how to validate a zero-knowledge shielded pool.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/allocinitxyz/status/2103124026214568209","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/allocinitxyz/status/2103124026214568209
</div><figcaption class="wp-element-caption"><em>[alloc] init’s September 24 announcement links the Shielded Bitcoin research and frames the goal as private transfers on Bitcoin L1.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Encrypted notes, nullifiers and proofs</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Inside the proposed system, value is represented by encrypted notes. When a user spends a note, the transfer includes encrypted outputs, public nullifiers and a zero-knowledge proof. The proof is meant to show that the spender is authorized and that value balances without publicly revealing which notes were spent or how much they contain.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Indexers then read Shielded Bitcoin data in Bitcoin’s canonical order, verify the proofs and reject reused nullifiers. Because anyone can replay those checks, an indexer does not receive authority to spend a user’s notes. A dishonest indexer could still omit or delay data for a wallet that depends on it, so the proposal reduces one kind of trust without eliminating every operational dependency.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is a different use of cryptography from <a href="https://bitcoinversus.tech/2025/04/24/can-fully-homomorphic-encryption-enhance-bitcoin-security/">fully homomorphic encryption research BitcoinVersus previously examined</a>, but both illustrate the same larger trend: cryptographic computation can change what applications reveal without necessarily changing the underlying asset’s monetary rules.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What becomes private—and what stays visible</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The proposal aims to keep transfer amounts, the shielded sender, the shielded receiver and the link to previously spent notes from the public. It does not make activity invisible. Observers can still see that a shielded transfer occurred, when it happened, its fee, the Bitcoin transaction carrying the data, the number of notes involved and the size of the published data.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That nuance matters because privacy is not binary. BitcoinVersus recently followed <a href="https://bitcoinversus.tech/2026/09/30/bitget-hack-funds-move-into-zcash-shielded-pool/">stolen funds moving into Zcash’s shielded pool</a>, a reminder that shielded systems can protect transaction details while still existing inside a broader world of exchange records, timing analysis and entry or exit points.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">No soft fork does not mean no tradeoffs</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://decrypt.co/379280/researchers-publish-zcash-style-design-for-private-bitcoin-transfers">Decrypt’s independent report</a> notes that the current design uses Groth16 proofs, which require a trusted setup ceremony, and that a two-input, two-output transfer in the paper’s reference profile occupies 625 virtual bytes. The researchers also say shielded transfers have a larger on-chain footprint than ordinary Bitcoin transactions, so fees rise with the publication method and transfer shape.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The biggest unfinished piece is the boundary between ordinary bitcoin and shielded bitcoin. The September paper specifies private transfers inside the metaprotocol, while peg-in and peg-out mechanics are being handled in companion work built around Bitcoin PIPEs. Until that entry-and-exit design is fully specified and tested, Shielded Bitcoin is research—not a finished wallet feature.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=jPTa3gZLLr8","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=jPTa3gZLLr8
</div><figcaption class="wp-element-caption"><em>Bitcoin Magazine’s Bitcoin 2026 talk with Misha Komarov explains PIPEs v2, witness encryption and how cryptographic conditions can be built around Bitcoin without a consensus change.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why the metaprotocol idea matters</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Bitcoin already supports experiments that place application logic around the base chain rather than inside consensus. BitcoinVersus recently covered <a href="https://bitcoinversus.tech/2026/10/02/usdt-coming-home-bitcoin-utexo-rgb-lightning/">USDT’s planned route through RGB and Lightning</a>, another example of developers trying to add richer behavior while preserving Bitcoin as the settlement anchor.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Shielded Bitcoin pushes that philosophy toward privacy. If the cryptography survives review and the entry/exit design proves workable, users could gain a stronger privacy option without asking every Bitcoin node to adopt new consensus rules. But the proposal still has to prove more than mathematical validity: wallet recovery, indexer reliability, fee behavior, anonymity-set quality, setup assumptions and peg mechanics all matter in real use.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes the next milestone straightforward to watch. The research team needs to publish and defend the PIPEs-based entry-and-exit design, then move from paper specifications toward implementations that independent developers can attack, reproduce and measure.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong><em>BitcoinVersus.Tech</em></strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>Advertisement</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><strong><em>Editor’s Note</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This report treats Shielded Bitcoin as a research proposal, not a deployed privacy feature. The featured cover is an original editorial illustration and is not duplicated in the article body.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->