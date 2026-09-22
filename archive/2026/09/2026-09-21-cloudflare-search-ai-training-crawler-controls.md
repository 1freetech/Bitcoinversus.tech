# Cloudflare Separates Search Crawling From AI Training With New Website Controls

**Published:** 2026-09-21
**Live article:** https://bitcoinversus.tech/2026/09/21/cloudflare-search-ai-training-crawler-controls/

<!-- wp:image {"id":18267,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/09/search-and-ai-crawler-control-illustration.png?w=1024" alt="Illustration of website infrastructure separating search crawlers, AI training crawlers, and AI agents with network policy controls." class="wp-image-18267" /><figcaption class="wp-element-caption">Illustration: Modern web infrastructure can apply different policies to search, AI training and agent traffic.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Cloudflare is changing one of the basic assumptions behind web crawling: allowing an automated crawler onto a website no longer has to mean granting every use of the information it collects.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On September 15, 2026, <a href="https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/">Cloudflare announced</a> a new <strong>Disallow AI Training</strong> setting alongside separate controls for Search, Training and Agent traffic. The goal is to let website operators remain discoverable through traditional search while separately refusing the use of their content for AI model training.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Search and AI Training Are Different Uses</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A publisher may want a search engine to index its pages because search results can send readers back to the original website. The same publisher may not want those pages collected to train or fine-tune an AI model. Cloudflare says fewer than 1% of sites on its network block Search bots, while 17% enable some mechanism to block Training.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The difficult case is a mixed-use crawler that performs both functions. Cloudflare says its new setting publishes the applicable no-training preference while allowing qualifying mixed-use crawlers to continue accessing the site for search. Training-only crawlers can be handled independently without automatically eliminating search visibility.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Robots.txt Is a Preference, Not a Firewall</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For administrators, the technical distinction is important. A <code>robots.txt</code> directive can state what a site owner wants a crawler to do, but the file cannot identify a crawler's real purpose or physically stop software that ignores the instruction. Network enforcement can add that missing layer by identifying traffic, classifying its behavior and blocking crawlers that violate policy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cloudflare is also replacing its older Managed Robots.txt approach with <a href="https://blog.cloudflare.com/bot-preference-sync/">Bot Preference Sync</a>. The system keeps a site's published <code>robots.txt</code> preferences aligned with the Search, Agent and Training policies configured at the network edge.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This makes crawler administration increasingly similar to ordinary IT access-control policy. Administrators define what a class of automated clients is permitted to do and then try to keep the public declaration and technical enforcement consistent. BitcoinVersus.tech has previously covered related infrastructure controls in its <a href="https://bitcoinversus.tech/2026/09/09/fortigate-firewall-setup-guide-for-computer-internet-access/">FortiGate Firewall Setup Guide</a> and identity management in <a href="https://bitcoinversus.tech/2026/09/11/kerberos-network-authenticator/">Kerberos: Network Authenticator</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/","type":"rich","responsive":true} -->
<figure class="wp-block-embed is-type-rich"><div class="wp-block-embed__wrapper">
https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/
</div></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Mixed-Use Crawlers Get New Rules</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Cloudflare introduced an <strong>Accountable</strong> designation for crawler operators that meet or make time-bound commitments to transparency requirements. These include a mechanism for opting out of AI training, a mechanism for opting out of AI summaries, URL-level visibility into content made available for training, and assurance that declining AI training will not reduce traditional search results. Cloudflare says Apple, Google and Microsoft meet or have committed to the qualifications.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cloudflare also says relevant crawlers from Amazon, Anthropic, Meta and OpenAI separate their Search and Training functions, allowing the Training crawler to be blocked without necessarily removing search access.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For IT teams, the broader change is straightforward: crawler management is no longer only an SEO setting. It now intersects with network security, content governance, intellectual-property policy and AI infrastructure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The administrative question is becoming more precise than <strong>“Can this bot access the website?”</strong> It is increasingly <strong>“What is this bot allowed to do with the information after it accesses the website?”</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em><a href="https://bitcoinversus.tech/">BitcoinVersus.Tech</a></em> <em>Editor's Note:</em></strong><br><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em><a href="https://x.com/1BitcoinVersus/status/1937006164555993338">https://x.com/1BitcoinVersus/status/1937006164555993338</a></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->
