---
post_id: 24362
title: "ZEUS 13.2.3 Adds Lightning Security Fixes"
live_url: "https://bitcoinversus.tech/2026/10/13/zeus-13-2-3-lightning-security-fixes/"
featured_media_id: 24361
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/zeus-13-2-3-lightning-security-cover.jpg"
status: publish
---

<!-- wp:paragraph -->
<p>ZEUS has released version 13.2.3 of its Bitcoin and Lightning wallet, bringing newer Lightning node software and security fixes into the mobile app. The stable release was published on October 12, 2026.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The <a href="https://github.com/ZeusLN/zeus/releases/tag/v13.2.3">official ZEUS release</a> bundles embedded LND 0.21.4 and LDK Node 0.7.0-zeus-rl-0.2.7. ZEUS specifically notes that the LDK build includes rust-lightning 0.2.7 security fixes, alongside further security hardening, bug fixes and UI improvements.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The rust-lightning fixes are the most important part of the update. Its <a href="https://github.com/lightningdevkit/rust-lightning/blob/main/CHANGELOG.md">0.2.7 changelog</a> says the release fixes two funds-theft vulnerabilities and a denial-of-service vulnerability, in addition to several channel-state and HTLC handling bugs. Those issues matter because LDK provides the Lightning state machine and channel logic used by applications built on top of it.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/ZeusLN/status/2086229987598684378","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/ZeusLN/status/2086229987598684378
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>ZEUS has been publishing security updates throughout 2026; this earlier project post provides context for the wallet’s continuing hardening work.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For users running ZEUS with its embedded node, the practical change is straightforward: the wallet now carries the newer Lightning implementations instead of leaving those fixes only at the upstream library level. Users connected to their own remote LND or Core Lightning node should still maintain that server software separately.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=bDzbKH5dwys","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=bDzbKH5dwys
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>This ZEUS walkthrough shows how the wallet’s embedded self-custodial Lightning node works on mobile.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The release arrives as Lightning is appearing in more user-facing infrastructure. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/10/10/core-lightning-26-06-9-security-update-payment-delays/">Core Lightning’s latest security update</a>, <a href="https://bitcoinversus.tech/2026/10/09/whitebit-bitcoin-lightning-deposits-withdrawals-voltage-10-million-users/">WhiteBIT adding Lightning deposits and withdrawals</a>, and <a href="https://bitcoinversus.tech/2026/10/12/f2pool-bitcoin-miners-lightning-withdrawals/">f2pool adding Lightning withdrawals for small mining balances</a>. As more applications depend on Lightning, wallet and node-library patching becomes part of the payment infrastructure itself.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The confirmed development here is the software update, not a newly disclosed ZEUS exploit. ZEUS says 13.2.3 contains upstream rust-lightning security fixes and additional hardening. Users should rely on the project’s signed release artifacts and normal app-store update channels rather than unofficial packages.</p>
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