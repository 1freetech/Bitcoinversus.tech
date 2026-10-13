---
post_id: 24457
title: "Bitcoin Core Adds Silent Payments Building Blocks"
live_url: "https://bitcoinversus.tech/2026/10/13/bitcoin-core-silent-payments-building-blocks/"
featured_media_id: 24453
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoin-core-silent-payments-cover.jpg"
status: publish
---

<!-- wp:paragraph -->
<p>Bitcoin Core has taken a significant step toward native Silent Payments support by merging the core BIP 352 logic needed to encode addresses, derive payment outputs and scan transactions for private payments.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The <a href="https://github.com/bitcoin/bitcoin/pull/35301">Bitcoin Core pull request</a> was merged on September 23, 2026 and was highlighted in <a href="https://bitcoinops.org/en/newsletters/2026/10/09/">Bitcoin Optech Newsletter #426</a>. The code adds the BIP 352 building blocks directly to Bitcoin Core, including Silent Payment address parsing, output creation and transaction-scanning logic.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Silent Payments are designed to solve a familiar Bitcoin privacy problem. A receiver can publish one reusable payment identifier, while each payer still creates a unique Taproot output on-chain. That avoids exposing a single reused address that anyone can follow through the public ledger.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/ColeTU/status/2057433967196823807","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/ColeTU/status/2057433967196823807
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Sparrow Wallet added full send-and-receive Silent Payments support earlier in 2026, showing how BIP 352 is already moving from specification work into real wallet software.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The important limitation is that this merge does <strong>not</strong> mean the released Bitcoin Core wallet can already send and receive Silent Payments. The pull request deliberately separates the BIP 352 cryptography from wallet integration, and some features—including receiver labels—were deferred for later work.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=7NvGZ6VtyWA","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=7NvGZ6VtyWA
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>BTC Sessions explains how Silent Payments can let one public payment identity generate different on-chain destinations for different payments.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The privacy gain comes with a computational tradeoff: receiving wallets need to scan eligible transactions to determine whether an output belongs to them. That makes implementation more complex than conventional address matching, especially for light wallets and mobile devices.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The work fits a broader push to improve Bitcoin privacy without changing the consensus rules. BitcoinVersus.Tech recently examined <a href="https://bitcoinversus.tech/2026/10/03/shielded-bitcoin-zcash-style-privacy-no-consensus-change/">another privacy proposal that avoids a consensus change</a>, explained <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-what-is-utxo-unspent-transaction-output-wallet-balance/">how Bitcoin UTXOs work</a>, and covered <a href="https://bitcoinversus.tech/2026/10/08/bitcoin-it-what-is-bitcoin-core-rpc-bitcoin-cli-json-rpc/">Bitcoin Core RPC</a> for developers and node operators.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The confirmed milestone is narrower but important: Bitcoin Core now contains the foundational BIP 352 implementation. Full wallet support still requires additional integration and testing before Silent Payments become a normal Bitcoin Core user feature.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor’s Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->