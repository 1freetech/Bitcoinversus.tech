---
post_id: 23787
title: "DNS Root Is Now Using KSK-2024"
live_url: "https://bitcoinversus.tech/2026/10/11/dns-root-ksk-2024/"
slug: "dns-root-ksk-2024"
published_at: "2026-10-11T21:50:00"
modified_at: "2026-10-11T21:53:34"
featured_media_id: 23784
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/dns-root-ksk-2024-rollover-1200x630.jpg"
status: published
categories: [2509703]
tags: []
seo_title: "DNS Root Is Now Using KSK-2024 | BitcoinVersus.Tech"
seo_description: "IANA says the DNS root zone began using KSK-2024 on October 11, 2026. DNSSEC-validating resolvers must trust key tag 38696 to avoid failures."
primary_source: "https://www.iana.org/news/2026/root-zone-begins-using-new-ksk-2026"
secondary_source: "https://blog.cloudflare.com/root-ksk-2024-rollover/"
---

<!-- wp:paragraph --><p>The Domain Name System’s root zone began using a new Key Signing Key on October 11, 2026. <a href="https://www.iana.org/news/2026/root-zone-begins-using-new-ksk-2026"><strong>IANA confirmed today</strong></a> that KSK-2024, identified by key tag <strong>38696</strong>, is now the active key used at the top of the DNSSEC trust chain.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Key Takeaways</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>KSK-2024, key tag <strong>38696</strong>, is now signing the DNS root zone.</li><li>KSK-2017, key tag <strong>20326</strong>, is no longer the active signing key.</li><li>Most Internet users are not expected to notice any change.</li><li>DNSSEC-validating resolvers that failed to learn or install KSK-2024 can experience validation failures.</li><li>IANA plans to revoke KSK-2017 on January 11, 2027, and remove it from the root zone on March 22, 2027.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">What Changed Today</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>DNSSEC uses cryptographic signatures to help resolvers verify that DNS data is authentic and has not been altered. The root Key Signing Key is the trust anchor at the top of that system. A validating resolver starts with a root key it already trusts and then follows the DNSSEC chain of trust down through top-level domains and individual signed domains.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/01/osntc-006-dns-basics/"><strong>DNS Basics lesson</strong></a> explains the ordinary name-resolution path. DNSSEC adds cryptographic validation to that process. The root KSK does not encrypt normal DNS traffic; it helps establish whether signed DNS data can be trusted.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>KSK-2024 has not appeared suddenly. Its public key was placed in the root zone well before today so correctly configured resolvers could learn it through the RFC 5011 automated trust-anchor process. Today is the operational rollover point: the new key is now doing the signing work.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=lH6eJvK0cr0","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=lH6eJvK0cr0
</div></figure>
<!-- /wp:embed -->
<!-- wp:paragraph --><p><em>ICANN — why the 2026 root KSK rollover matters for DNS resolver operators.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Why Most People Should Notice Nothing</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>IANA says most users are not expected to experience disruption. Modern validating resolvers normally update their trust anchors automatically, and KSK-2024 has been available long enough for that process to complete.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The risk is concentrated in systems that did not update correctly: manually maintained trust anchors, stale virtual-machine images, old resolver software, restored backups, read-only key stores, or systems that were offline during the learning period. <a href="https://blog.cloudflare.com/root-ksk-2024-rollover/"><strong>Cloudflare noted before the rollover</strong></a> that resolvers can lose learned trust during software upgrades or machine moves even when the new key was published well in advance.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For users behind an affected validating resolver, the symptom may look like an ordinary Internet outage: domain lookups fail even though the destination website and network are healthy. BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/10/osntc-026-dns-troubleshooting-resolver-settings-nslookup-dig-nxdomain-servfail-packet-capture/"><strong>DNS troubleshooting lesson</strong></a> covers tools such as <code>dig</code>, <code>nslookup</code>, SERVFAIL responses and packet capture that help distinguish resolver problems from application or server failures.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/SecOpsDaily/comments/1x0wftk/the_october_2026_root_ksk_rollover_is_your_dns/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/SecOpsDaily/comments/1x0wftk/the_october_2026_root_ksk_rollover_is_your_dns/
</div></figure>
<!-- /wp:embed -->
<!-- wp:paragraph --><p><em>Reddit’s r/SecOpsDaily — community discussion of the operational risk around stale DNSSEC trust anchors. The rollover facts in this article come from IANA and ICANN.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">What Resolver Operators Should Verify</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The important identifier is <strong>key tag 38696</strong>. ICANN’s guidance tells operators not to assume automatic trust-anchor updates succeeded. DNSSEC-validating resolver operators should confirm that KSK-2024 is actually present and trusted by the running resolver, not merely present in a package or old configuration file.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This is especially important on infrastructure that has been restored, cloned, isolated, manually hardened or left running for years. The difference between ordinary DNS and DNSSEC validation is covered in BitcoinVersus.Tech’s earlier <a href="https://bitcoinversus.tech/2025/04/26/domain-name-system-overview/"><strong>Domain Name System overview</strong></a>, which provides broader context for how recursive and authoritative DNS components fit together.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=Hq-qnAZAURY","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=Hq-qnAZAURY
</div></figure>
<!-- /wp:embed -->
<!-- wp:paragraph --><p><em>ICANN — what resolver operators and DNS software vendors should check for the 2026 rollover.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">The Old Key Is Not Gone Yet</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Today’s change is one stage in a longer rollover. KSK-2017 remains a valid trust anchor for now even though it is no longer signing the root DNSKEY set. IANA’s published schedule calls for the old key to be marked revoked on January 11, 2027, and removed from the root zone on March 22, 2027.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>That staged process gives automated resolver software time to move cleanly from the old trust anchor to the new one instead of treating the change as an instantaneous deletion.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Bottom Line</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The confirmed news is simple: the DNS root is now using KSK-2024, key tag 38696. This is a planned security-maintenance event, not evidence that the Internet itself has been rebuilt or that ordinary users need to change browser settings.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The operational concern is narrower and more concrete. Organizations that run DNSSEC-validating resolvers need to know whether those systems actually trust the new root key. Properly updated resolvers should continue working normally; stale trust-anchor configurations are the systems most likely to expose problems now that the rollover is live.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Editor’s Note</h3><!-- /wp:heading -->
<!-- wp:paragraph --><p><em>This article distinguishes IANA’s confirmed October 11 rollover from earlier guidance about the planned event. The rollover is live; later revocation and removal steps for KSK-2017 are still scheduled for 2027.</em></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><strong><em>We volunteer daily to help keep BitcoinVersus.Tech verifiably accurate. Support our independent research through the support options available on the site.</em></strong></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>BitcoinVersus.Tech is not a financial advisor. Content is provided for informational purposes.</p><!-- /wp:paragraph -->