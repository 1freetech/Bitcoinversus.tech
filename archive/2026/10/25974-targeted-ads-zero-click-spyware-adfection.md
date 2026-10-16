---
post_id: 25974
title: "Targeted Ads Can Deliver Zero-Click Spyware"
live_url: "https://bitcoinversus.tech/2026/10/16/targeted-ads-zero-click-spyware-adfection/"
featured_media_id: 25972
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/adfection-zero-click-spyware-cover-1200x630-1.jpg"
status: publish
---

<!-- wp:paragraph -->
<p>Researchers at the University of Toronto’s Citizen Lab say they have documented the first public technical confirmation of <strong>zero-click mercenary spyware delivered through targeted online advertising</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The technique, which the researchers call <strong>AdFection</strong>, can compromise a selected device when an advertisement is rendered. The target does not have to click the ad, open a suspicious attachment or install an application. Citizen Lab says it linked the system with high confidence to at least 45 devices at Al Jazeera that were infected in 2024 and 2025 with spyware attributed to Candiru, which now operates under the Integrity Labs name. <a href="https://citizenlab.ca/research/how-discover-tech-turned-targeted-ads-into-a-pipeline-for-spyware/">Citizen Lab published the full technical investigation on October 15</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://bsky.app/profile/citizenlab.ca/post/3mxw7mrqk7c2u","type":"rich","providerNameSlug":"bluesky","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-bluesky wp-block-embed-bluesky"><div class="wp-block-embed__wrapper">
https://bsky.app/profile/citizenlab.ca/post/3mxw7mrqk7c2u
</div><figcaption class="wp-element-caption"><em>Citizen Lab announced its AdFection findings and linked to the full investigation.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How an ordinary ad became an attack path</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Modern online advertising often relies on real-time bidding. When a website or app opens an ad slot, advertising companies compete in milliseconds for the chance to display something to that device. The same system can expose identifiers and technical information that help advertisers decide who should receive an ad.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Citizen Lab says Israeli ad-tech company Discover-Tech used that infrastructure through a platform called Controlium. Ads could contain a small script that contacted a Discover-Tech server with information such as an advertising identifier or IP address. If the device was not a selected target, the server could return nothing. If it matched a target, the server could return JavaScript that started an exploit chain.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That selective response is important because it makes conventional ad inspection much harder. An automated scanner can examine the same advertisement and receive an empty response, while only a particular target receives the attack code. It is a security problem built around identity, targeting and execution rather than a visibly malicious banner.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Nearly four billion ad bids exposed the scale</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The researchers analyzed almost four billion Discover-Tech bidding records covering March through June 2026. Citizen Lab says ads containing its attack-related script appeared across roughly 200,000 unique websites and mobile applications in dozens of countries.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That figure describes the reach of the advertising infrastructure, not the number of confirmed infections. Citizen Lab found impressions on networks associated with governments, international organizations and critical infrastructure, but an ad impression by itself does <strong>not</strong> prove that a device was targeted or compromised. The confirmed infection evidence in the report centers on the Al Jazeera devices.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.reuters.com/legal/litigation/israeli-firm-used-online-ads-run-vast-spy-operation-researchers-say-2026-10-15/">Reuters independently reported</a> that major advertising services moved to cut Discover-Tech off after the findings, while Discover-Tech and the spyware vendor did not provide responses to the news organization’s requests for comment.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why zero-click changes the defensive model</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Traditional security advice often centers on not clicking unknown links. AdFection shows why that is no longer enough for high-risk targets. The browser or app can receive executable content as part of normal advertising behavior, which means a victim may do nothing beyond visiting an ordinary page.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The discovery fits a broader pattern in which legitimate infrastructure becomes the delivery path for malicious code. BitcoinVersus.Tech recently covered a <a href="https://bitcoinversus.tech/2026/10/13/fake-web3-accelerator-malware/">fake Web3 accelerator spreading malware</a>, while our guide to <a href="https://bitcoinversus.tech/2025/05/07/the-7-layers-of-cybersecurity/">the seven layers of cybersecurity</a> explains why endpoint, network and application defenses have to overlap rather than depend on one control.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same defense-in-depth principle applies to connected industrial systems. Our report on <a href="https://bitcoinversus.tech/2026/10/13/why-industrial-devices-should-stay-off-public-internet/">why industrial devices should stay off the public internet</a> shows how reducing unnecessary exposure can shrink the attack surface before a vulnerability is exploited.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What users and organizations can do</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Citizen Lab recommends stronger ad blocking for people at elevated risk, including blocking at the network gateway where practical. Users can also disable or reset advertising identifiers and keep operating systems, browsers and applications updated. Organizations managing high-risk devices can enforce those settings centrally through mobile-device management and network policy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The report does not identify the exact vulnerability chain used in every infection, and it does not name the government or other customer behind the confirmed Al Jazeera attacks. Those limits matter. What the researchers say they have established is narrower and technically significant: targeted advertising infrastructure was used as a delivery system for mercenary spyware that could infect selected devices without a click.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong><br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->