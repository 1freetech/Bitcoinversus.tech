---
post_id: 20345
title: "Cloudflare Is Building a Public CA for the Post-Quantum Web"
live_url: "https://bitcoinversus.tech/2026/10/03/cloudflare-public-ca-post-quantum-merkle-tree-certificates/"
featured_media_id: 20344
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/cloudflare-post-quantum-certificate-authority-cover.png"
status: publish
---

<!-- wp:paragraph -->
<p>Cloudflare is trying to redesign one of the Internet’s most invisible trust systems before quantum computing turns today’s website-authentication signatures into a scaling problem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On September 29, Cloudflare said it is building a public Certificate Authority that will support both conventional web certificates and post-quantum Merkle Tree Certificates. In its <a href="https://blog.cloudflare.com/pq-ca-with-mtcs/">technical explanation of the new post-quantum CA</a>, the company argues that simply swapping much larger post-quantum signatures into today’s Web PKI would make TLS handshakes and certificate-transparency infrastructure substantially heavier.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cloudflare summarized that problem in <a href="https://twitter.com/Cloudflare/status/2104926696562414050">its September 29 announcement on X</a>: Merkle Tree Certificates are intended to keep authentication compact and auditable while allowing the new CA to issue post-quantum credentials at Internet scale.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/Cloudflare/status/2104926696562414050","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/Cloudflare/status/2104926696562414050
</div><figcaption class="wp-element-caption"><em>Cloudflare’s September 29 announcement describes Merkle Tree Certificates as a way to keep post-quantum web authentication compact and auditable at scale.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The problem is authentication, not just encryption</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When a browser opens an HTTPS site, cryptography does more than encrypt traffic. The browser also needs evidence that the server actually controls the domain it claims to represent. Certificate Authorities, certificate chains and browser root stores form the trust system that makes that authentication possible.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is a different job from protecting bulk data with symmetric cryptography. Techniques such as <a href="https://bitcoinversus.tech/2026/03/29/computer-security-stream-cipher/">stream ciphers</a> encrypt data efficiently once communicating systems already share the necessary secret material. Website authentication instead depends heavily on public-key signatures—and those are among the primitives that must migrate before cryptographically relevant quantum computers become practical.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cloudflare estimates that post-quantum signatures are roughly 40 times larger than the classical signatures used in today’s certificate ecosystem. It also estimates that simply carrying those larger signatures into existing certificate-transparency architecture could increase stored CT data by about 40 times.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Merkle Tree Certificates change what gets signed</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The proposed answer is not to put a giant post-quantum signature on every certificate and keep everything else unchanged. Instead, Merkle Tree Certificates batch certificate entries into an append-only Merkle tree. The Certificate Authority signs a checkpoint representing the tree state, while an individual website receives a compact inclusion proof showing that its certificate data appears inside that authenticated structure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That shifts the trust model toward “issue by logging.” A browser can validate the inclusion proof against a trusted tree state instead of receiving a separate heavyweight post-quantum signature for every individual certificate. Independent cosigners and mirrors are intended to make equivocation—showing different issuance histories to different observers—harder to hide.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For security teams, that architecture reinforces why a current <a href="https://bitcoinversus.tech/2026/09/21/post-quantum-migration-cryptographic-inventory-qshield-2/">cryptographic inventory</a> matters. Organizations cannot migrate what they have not identified: TLS endpoints, certificate lifecycles, signing systems, key stores and software dependencies all become part of the post-quantum transition.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Cloudflare already tested MTCs with Chrome</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Cloudflare says it ran a 2026 experiment with Chrome Beta 146 using a bootstrap Certificate Authority and served billions of Merkle Tree Certificates during the trial. In the common landmark-relative case, the browser received one public key, one signature and an inclusion proof smaller than 1 KB.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The company reports that landmark-relative MTC handshakes were 9% faster at the median than the classical certificate-chain path used in its experiment, while cautioning that much of that improvement came from eliminating the intermediate certificate. The experiment also used classical signatures rather than the larger post-quantum signatures the architecture is ultimately intended to handle.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://arstechnica.com/security/2026/09/cloudflare-plans-to-issue-quantum-safe-tls-certificates/">Ars Technica’s independent report</a> similarly frames the project as a major change to website authentication rather than an already-finished replacement for conventional TLS certificates. Cloudflare still has to pass browser and root-program approval processes before its new CA can become broadly trusted.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A public CA is a high-trust infrastructure role</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Operating a Certificate Authority is not equivalent to launching an ordinary cloud product. A publicly trusted CA can bind domain identities to public keys accepted by browsers, which makes operational security, auditing, signing-key protection and policy enforcement central to the system.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same principle appears in local computing through <a href="https://bitcoinversus.tech/2025/09/10/trusted-platform-module-tpm-2/">hardware roots of trust</a>: a security architecture becomes useful only when the root that anchors later verification is protected strongly enough to deserve that trust. Web PKI applies that problem globally, across browsers, CAs, domains and transparency monitors.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The transition is designed to be gradual</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Cloudflare is not proposing an overnight retirement of ordinary certificates. The planned CA is intended to support conventional certificates and Merkle Tree Certificates in parallel so websites and clients can migrate at different speeds.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That matters because post-quantum authentication has a different deployment problem from post-quantum key exchange. Every browser, CA, transparency system, server stack and monitoring tool must agree on how the new trust path works, while older clients still need a usable fallback.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The next milestones are therefore institutional as much as cryptographic: root-program approval, independent cosigners, production-scale monitoring and real certificate issuance. Cloudflare says its Chrome experiment proved the design can function at very large scale; the harder test is whether the wider Web PKI ecosystem can operate it reliably without concentrating too much trust or breaking compatibility.</p>
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
<p>This report distinguishes Cloudflare’s announced Certificate Authority plans and experimental MTC results from a fully approved, broadly trusted production CA. The featured cover is an original editorial illustration and is not duplicated in the article body.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->