---
post_id: 24683
title: "GitHub Makes Secret Scanning Faster"
live_url: "https://bitcoinversus.tech/2026/10/14/github-makes-secret-scanning-faster/"
status: publish
published_at: "2026-10-14T05:31:59"
featured_media_id: 24680
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/github-modernbert-secret-scanning-cover.jpg"
source_primary: "https://github.blog/ai-and-ml/githubs-model-for-secret-detection-finding-more-secrets-with-less-noise/"
source_secondary: "https://news.lavx.hu/article/github-ships-compact-modernbert-classifier-to-cut-secret-scanning-noise-by-11-5"
---

<!-- wp:paragraph -->
<p>GitHub says a new AI-based secret detector is making it faster and cheaper to identify passwords and other credentials accidentally committed to code. In an <a href="https://github.blog/ai-and-ml/githubs-model-for-secret-detection-finding-more-secrets-with-less-noise/">October 13 engineering report</a>, the company described a compact ModernBERT classifier that examines suspicious strings alongside their surrounding code.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The company reports an <strong>11.5% improvement in repository owner-weighted alert acceptance</strong>, an <strong>86% reduction in median post-push scanning time</strong>, and <strong>more than 98% lower serving costs</strong> compared with its previous LLM-based pipeline. These are GitHub's internal measurements, not independent benchmarks.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=UfOY9RXHFiw","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=UfOY9RXHFiw
</div><figcaption class="wp-element-caption"><em>GitHub's official explanation of secret protection and how push protection works.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>The system combines conventional pattern matching with machine learning. First, regular expressions flag strings that resemble credentials. ModernBERT then considers nearby variable names, file paths and code to help distinguish real secrets from placeholders or test data. That distinction matters because false alarms can slow down security reviews.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>GitHub is also testing this approach in <em>push protection</em>, which can stop sensitive credentials before they enter repository history. That is different from discovering a leak afterward. A Reddit discussion among security practitioners illustrates why teams also need credential rotation and central secret management.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/cybersecurity/comments/1taw34o/hardcoded_secrets_in_git/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/cybersecurity/comments/1taw34o/hardcoded_secrets_in_git/
</div><figcaption class="wp-element-caption"><em>Security practitioners discuss hardcoded credentials and practical prevention measures.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>The change builds on the site's earlier coverage of <a href="https://bitcoinversus.tech/2026/10/13/github-blocks-anthropic-api-keys-before-push/">GitHub blocking newly supported API keys</a>. Readers unfamiliar with the underlying tools can review <a href="https://bitcoinversus.tech/2026/10/08/what-is-git-github-version-control-commits-branches/">Git and GitHub</a> and <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-an-api-application-programming-interface/">how APIs work</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>GitHub says the new model is already being used for certain post-push alerts, while AI-based push protection remains in preview. An <a href="https://news.lavx.hu/article/github-ships-compact-modernbert-classifier-to-cut-secret-scanning-noise-by-11-5">independent technical summary</a> also describes the two-stage design. The practical question is whether improved detection can reduce credential exposure without overwhelming developers with false positives.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong><br />We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Original BitcoinVersus.Tech donation QR code for 5,000 sats" class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->