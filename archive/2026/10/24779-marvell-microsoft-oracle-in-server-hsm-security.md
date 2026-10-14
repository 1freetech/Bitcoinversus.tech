# Marvell, Microsoft and Oracle Standardize In-Server Security

- WordPress post ID: 24779
- Published: 2026-10-14T12:25:10
- Canonical URL: https://bitcoinversus.tech/2026/10/14/marvell-microsoft-oracle-in-server-hsm-security/
- Slug: marvell-microsoft-oracle-in-server-hsm-security
- Status: publish
- Featured media ID: 24777
- Featured image dimensions: 1200x630
- Category IDs: 5812, 6
- Tag IDs: none
- Excerpt: Marvell, Microsoft and Oracle are building an Open Compute Project standard for attested, silicon-based hardware security modules inside cloud servers.
- Primary source: https://www.marvell.com/company/newsroom/marvell-microsoft-oracle-ocp-data-center-hardware-security.html
- Standards source: https://csrc.nist.gov/pubs/fips/140-3/final
- Social embed 1: https://www.reddit.com/r/rust/comments/1cbuxl8
- Social embed 2: https://www.reddit.com/r/hardware/comments/y7ce0g
- YouTube embed 1: https://www.youtube.com/watch?v=K0sLLaso5BU
- YouTube embed 2: https://www.youtube.com/watch?v=nzkUoH8ymfs
- Archive format: final Gutenberg source
- Server render verification: both Reddit blocks rendered as reddit-embed-bq with widgets.js; both YouTube blocks rendered as iframe players; original 1170x1038 donation QR rendered intact at the footer.

## Final Gutenberg Source

<!-- wp:paragraph -->
<p>Marvell, Microsoft and Oracle are working through the Open Compute Project to standardize a new class of hardware security module built directly into cloud and hyperscale servers. The companies <a href="https://www.marvell.com/company/newsroom/marvell-microsoft-oracle-ocp-data-center-hardware-security.html">announced the working group on October 13</a>, saying the goal is a silicon-based, attested integrated HSM that can protect cryptographic keys and manage their lifecycle closer to the server hardware using them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This matters because cryptographic keys sit underneath many of the things cloud infrastructure needs to prove: that firmware is authentic, that a machine booted into an expected state, that an encrypted workload is talking to trusted hardware, and that keys used for storage or network encryption have not been exposed to ordinary software.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/rust/comments/1cbuxl8","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/rust/comments/1cbuxl8
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Community discussion around Caliptra, the open hardware root-of-trust project that forms part of the broader push toward verifiable server security.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">What the new HSM standard is trying to do</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The proposal centers on an integrated hardware security module that supports secure key caching, attestation and cryptographic-key lifecycle management at the server level. Instead of forcing every sensitive operation to travel to a distant HSM appliance or service, a server could keep protected key material and trusted cryptographic functions much closer to the workload while still maintaining a hardened security boundary.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The companies are targeting <a href="https://csrc.nist.gov/pubs/fips/140-3/final">FIPS 140-3 Level 3</a>, a security standard used to validate cryptographic modules. Level 3 adds stronger requirements around physical security, identity-based authentication and protection of sensitive security parameters. The important point is not that every server automatically becomes secure; it is that cloud operators would have a common, testable hardware target for protecting keys and proving the state of the security module.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=K0sLLaso5BU","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=K0sLLaso5BU
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Thales explains how hardware security modules protect cryptographic keys and perform sensitive crypto operations inside hardened hardware.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Attestation is just as important as key storage</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An HSM stores and uses keys, but attestation answers another question: can another system verify that the server and its security hardware are in an approved state? That becomes increasingly important in multi-tenant cloud systems, confidential computing and AI infrastructure where accelerators, CPUs, memory devices and network interfaces may all participate in the same workload.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=nzkUoH8ymfs","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=nzkUoH8ymfs
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Marvell engineers discuss Caliptra as a server security hub for distributing protected encryption keys across a system-on-chip.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The idea is related to technologies such as the <a href="https://bitcoinversus.tech/2025/09/10/trusted-platform-module-tpm-2/">Trusted Platform Module</a>, but it is not simply a TPM replacement. TPMs are commonly used for measured boot, device identity and platform attestation. An integrated HSM is aimed more directly at high-volume cryptographic operations and protected key management inside server infrastructure.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/hardware/comments/y7ce0g","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/hardware/comments/y7ce0g
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Earlier hardware-community discussion of Caliptra shows why open roots of trust and remote attestation have become important parts of server-security design.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Why cloud operators want security inside the server</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Moving trusted key functions closer to the workload can reduce latency and make security infrastructure easier to scale across huge fleets. It also gives operators another hardware boundary below the operating system. That matters because an attacker who compromises software should not automatically gain access to the keys protecting storage, network traffic or workload identity.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same chain of trust begins before an operating system starts. Our earlier guides to <a href="https://bitcoinversus.tech/2025/05/27/bios-versus-uefi/">BIOS versus UEFI</a> and <a href="https://bitcoinversus.tech/2026/10/12/osdctc-009-server-decommissioning-media-sanitization/">secure server decommissioning</a> show the two ends of that lifecycle: proving what a machine is allowed to boot, then making sure secrets and media are handled correctly when the hardware leaves service.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Marvell, Microsoft and Oracle say an initial technical specification is planned around the 2026 OCP Global Summit, with a version 1.0 specification to follow. The important development is not a finished product shipping everywhere today. It is that three major infrastructure companies are trying to turn in-server HSM security into an open hardware standard that multiple cloud platforms and silicon vendors can implement.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"width":"1170px","height":"1038px","sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" style="width:1170px;height:1038px" width="1170" height="1038" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->