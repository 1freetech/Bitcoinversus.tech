---
post_id: 26105
title: "PHP Releases Emergency Patches for Two Critical PHP2Shell Vulnerabilities"
date: "2026-10-21"
status: published
wordpress_url: "https://bitcoinversus.tech/2026/10/21/php2shell-critical-php-security-patches-wordpress-protection-october-2026/"
slug: "php2shell-critical-php-security-patches-wordpress-protection-october-2026"
article_type: "Bite-Size News"
word_count: 374
featured_media_id: 26103
featured_image_dimensions: "1200x630"
featured_image_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/php2shell-security-patches-2026-cover-1200x630-1.jpg"
featured_image_note: "Original editorial illustration, not an actual PHP exploit screenshot."
categories: [Trending News, technology, Information Technology, computer programming]
primary_sources:
  - "https://www.php.net/archive/2026.php#2026-10-21-5"
  - "https://wordpress.com/blog/2026/10/21/php2shell-vulnerabilities/"
youtube_embeds:
  - "https://www.youtube.com/watch?v=Fq8FhvxET2k"
  - "https://www.youtube.com/watch?v=a7_WFUlFS94"
reddit_embeds:
  - "https://www.reddit.com/r/PHP/comments/1xbno6r/php_8512_8427_8336_and_8235_fix_two_critical/"
  - "https://www.reddit.com/r/Wordpress/comments/1xbmw05/php_cve_notice/"
original_qr_media_id: 24043
qa: "WordPress publishes the post with featured media and verified article content; rendered view contains two YouTube iframe sources, two Reddit embed widgets, all four fixed version numbers and original QR asset. Interactive playback and site-specific PHP binary inspection were not independently possible."
---

<!-- wp:paragraph -->
<p><strong>October 21, 2026 — The PHP development team has released emergency updates</strong> addressing two critical vulnerabilities that could let an unauthenticated attacker execute code on vulnerable web servers. Identified as <strong>CVE-2026-109618</strong> and <strong>CVE-2026-109619</strong>, the flaws each carry a <strong>9.2 CVSS v4.0</strong> severity score. PHP powers WordPress and numerous other websites, but these are vulnerabilities in the <em>PHP runtime</em>, not bugs in WordPress core.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">What The Emergency Patches Fix</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>According to the <a href="https://www.php.net/archive/2026.php#2026-10-21-5">official PHP security advisory</a>, the fixed versions are <strong>PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35</strong>. The issues involve memory handling: one can corrupt internal data during out-of-memory processing, while the other can leave stale request state accessible to a later request. Apache mod_php is considered especially exposed, although PHP-FPM, php-cgi and other web-serving configurations are also affected.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Key Takeaways</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>Critical CVEs:</strong> 2026-109618 and 2026-109619.</li><li><strong>Patched branches:</strong> 8.5.12, 8.4.27, 8.3.36 and 8.2.35.</li><li><strong>WordPress.com:</strong> Says hosted sites are already protected.</li><li><strong>Self-hosted:</strong> Update PHP itself; temporary mitigations are incomplete.</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Are WordPress Sites Protected?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The response differs by hosting model. In an <a href="https://wordpress.com/blog/2026/10/21/php2shell-vulnerabilities/">October 21 statement</a>, WordPress.com says its managed sites are already protected through infrastructure-level work with the PHP Security Team. That claim covers its hosted platform; it is <strong>not a publicly available checksum or build attestation</strong> for every site's PHP binary.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=Fq8FhvxET2k","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=Fq8FhvxET2k
</div><figcaption class="wp-element-caption"><em>A security discussion recorded before the emergency patches were released; for current fixed versions, use PHP's October 21 advisory.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>For self-hosted installations, site owners and administrators must ensure the actual web-serving PHP runtime receives its security update, including container images and hosting-provider packages. Restart affected web and PHP workers as required and verify the patched runtime, rather than relying only on an application's update notification. PHP 8.1 and earlier have no current upstream releases; distribution or long-term-support backports may be available.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>PHP explicitly warns that configuration changes and web-application firewalls can reduce some exposure but <strong>do not fully replace patching</strong>. Administrators should coordinate with hosting providers and review relevant logs for signs of suspicious activity.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/PHP/comments/1xbno6r/php_8512_8427_8336_and_8235_fix_two_critical/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/PHP/comments/1xbno6r/php_8512_8427_8336_and_8235_fix_two_critical/
</div><figcaption class="wp-element-caption"><em>Same-day PHP community discussion of the official fixed versions, with links to the upstream advisory.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">What Website Operators Should Do</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For background, BitcoinVersus.Tech's <a href="https://bitcoinversus.tech/2026/10/09/osphp-001-php-runtime-cli-php-v-running-scripts-built-in-development-server/">introductory PHP runtime lesson</a> explains the interpreter and version commands, while its <a href="https://bitcoinversus.tech/2026/10/18/ospython-041-logging-secrets-safely-redaction-filters-and-credential-protection/">secure logging lesson</a> covers protecting sensitive information during investigations. Neither tutorial substitutes for installing this PHP security update.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=a7_WFUlFS94","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=a7_WFUlFS94
</div><figcaption class="wp-element-caption"><em>Fireship's introductory PHP overview explains the runtime; it predates and does not describe these 2026 vulnerabilities.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:embed {"url":"https://www.reddit.com/r/Wordpress/comments/1xbmw05/php_cve_notice/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/Wordpress/comments/1xbmw05/php_cve_notice/
</div><figcaption class="wp-element-caption"><em>WordPress community discussion of the emergency PHP patch, distinct from WordPress.com's managed-hosting confirmation.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><strong>Bottom line:</strong> Managed WordPress.com customers have a public assurance of protection from their host. Operators responsible for their own PHP environments should treat the updated releases as urgent and verify that the web-facing runtime—not just WordPress or a security plugin—has been patched.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Original BitcoinVersus.Tech 5,000-sat bitcoin donation QR" class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->