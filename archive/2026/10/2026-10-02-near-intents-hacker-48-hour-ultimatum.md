---
title: "NEAR Intents Tells ₿43.8 Hacker: Return the Funds in 48 Hours"
date: "2026-10-02"
wordpress_post_id: 19982
featured_media_id: 19980
live_url: "https://bitcoinversus.tech/2026/10/02/near-intents-hacker-48-hour-ultimatum/"
status: publish
---

<!-- wp:paragraph --><p>NEAR Intents says it knows who drained roughly <strong>₿43.8 ($3.8 million)</strong> from its cross-chain infrastructure—and it just put the alleged attacker on a 48-hour clock.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>The figure is approximately ₿43.8 using a Bitcoin price near $86,700 and will move with BTC. The underlying exploit hit NEAR Intents’ Omni deposit-and-withdrawal infrastructure on October 1, forcing the service to pause operations while its team patched the contract-side vulnerability.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Then the story took a more unusual turn. NEAR Intents general manager Alex Shevchenko posted a direct <a href="https://twitter.com/AlexAuroraDev/status/2105814573152661894">message to the alleged attacker</a>: “We have identified you, sir.” He supplied Bitcoin, BNB/Ethereum and Solana return addresses and said the responsible-disclosure window closes after 48 hours.</p><!-- /wp:paragraph -->
<!-- wp:embed {"url":"https://twitter.com/AlexAuroraDev/status/2105814573152661894","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/AlexAuroraDev/status/2105814573152661894
</div><figcaption class="wp-element-caption"><em>Alex Shevchenko gives the alleged NEAR Intents exploiter 48 hours to return the stolen assets.</em></figcaption></figure>
<!-- /wp:embed -->
<!-- wp:heading --><h2 class="wp-block-heading">What was actually hacked?</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>NEAR Intents is designed to let users specify the outcome they want—such as exchanging one asset on one network for another asset elsewhere—while competing solvers handle the route. That abstraction makes cross-chain movement easier for users, but it also creates infrastructure that must safely coordinate deposits, withdrawals and smart-contract state across multiple networks.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>According to <a href="https://www.theblock.co/news/ecosystems/2026-10-01-near-intents-halts-services-after-3-8-million-exploit-promises-full-compensation-417404">reporting on the initial incident</a>, NEAR Intents attributed the loss to a bug in the interaction between its Omni deposit/withdrawal infrastructure and the NEAR Intents smart contract. The team said the contract-side flaw was patched and promised affected users full compensation.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>The exploit follows an already brutal stretch for crypto security. BitcoinVersus recently tracked how <a href="https://bitcoinversus.tech/2026/09/30/bitget-hack-funds-move-into-zcash-shielded-pool/">funds from the Bitget hack moved into Zcash’s shielded pool</a>, demonstrating how quickly stolen assets can jump between exchanges, chains and privacy systems once an attacker begins laundering them.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">The stolen funds moved toward Bitcoin</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>Blockchain investigator ZachXBT said funds from the NEAR Intents incident moved through KuCoin and were bridged into Bitcoin. That does not imply any compromise of Bitcoin itself; it means the attacker allegedly converted proceeds into BTC after exploiting infrastructure elsewhere.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>That distinction matters. A bridge, hot wallet or application contract can fail without the underlying destination blockchain being hacked. The same separation was important in BitcoinVersus’ earlier coverage of the <a href="https://bitcoinversus.tech/2025/05/13/elderly-american-loses-330m-in-bitcoin-through-sophisticated-hack/">₿-denominated theft of a large Bitcoin fortune</a>: possession-layer failures and protocol-layer failures are not the same event.</p><!-- /wp:paragraph -->
<!-- wp:embed {"url":"https://www.youtube.com/watch?v=RQEAJY65QoE","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=RQEAJY65QoE
</div><figcaption class="wp-element-caption"><em>Market Mates discusses the NEAR Intents exploit alongside the day’s Bitcoin and altcoin market action.</em></figcaption></figure>
<!-- /wp:embed -->
<!-- wp:heading --><h2 class="wp-block-heading">“We have identified you, sir”</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>Shevchenko’s ultimatum is the most interesting part of the developing story because it implies the team believes the exploit is no longer anonymous. But the public post does not name the person or disclose the evidence behind that identification.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p><a href="https://cointelegraph.com/news/near-intents-says-its-identified-the-hacker-gives-48-hour-ultimatum">Reporting on the ultimatum</a> confirms that the October 2 post provides three return destinations and frames the deadline as the final opportunity to use responsible disclosure. Until NEAR Intents publishes its promised post-mortem—or funds visibly return—the identification claim remains Shevchenko’s claim rather than independently demonstrated attribution.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">Why 48 hours can matter onchain</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>Crypto theft creates a strange inversion of conventional crime. The public may be able to watch the money move in real time even when nobody knows who controls the keys. Exchanges, stablecoin issuers, analytics companies and bridges can sometimes freeze or flag assets, while conversion into permissionless assets changes the recovery problem again.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>That makes the next two days measurable. Investigators can watch whether the listed return addresses receive funds, whether the stolen assets move again and whether exchanges identify accounts connected to the flow.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>It also reinforces why operational security matters beyond the consensus layer. Our <a href="https://bitcoinversus.tech/2026/09/29/axeos-fundamentals-pool-settings-worker-names-failover/">AxeOS failover guide</a> deals with a different part of crypto infrastructure, but the same engineering principle applies: resilient systems assume components will fail and design explicit recovery paths before they do.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">The deadline is now part of the blockchain record</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>The attacker now has public return addresses and a public deadline. NEAR Intents has promised compensation. The contract-side bug has been patched. What has not yet been demonstrated is whether the team’s attribution will produce recovery.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>That makes this less a story about a finished hack than a live recovery attempt. The exploit already happened. The next event is visible onchain: either some of the approximately ₿43.8 ($3.8 million) comes back, or the 48-hour clock runs out.</p><!-- /wp:paragraph -->
<!-- wp:heading --><h2 class="wp-block-heading">BitcoinVersus.Tech</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p><strong>Advertisement</strong></p><!-- /wp:paragraph -->
<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->
<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Editor’s Note</h3><!-- /wp:heading -->
<!-- wp:paragraph --><p>The Bitcoin equivalent in this story is approximate because BTC’s market price changes continuously. Shevchenko’s claim that the attacker has been identified is attributed to him; the alleged attacker has not been publicly named and the identification evidence has not yet been released.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Support independent BitcoinVersus.Tech reporting with Bitcoin donations at: <strong>3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</strong></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p><!-- /wp:paragraph -->