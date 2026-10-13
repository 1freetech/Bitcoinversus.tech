---
post_id: 24303
title: "Deno Is Joining Cloudflare"
slug: deno-is-joining-cloudflare
status: publish
published: 2026-10-13T10:54:50
modified: 2026-10-13T10:54:50
live_url: https://bitcoinversus.tech/2026/10/13/deno-is-joining-cloudflare/
featured_media: 24300
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/deno-cloudflare-cover-1200x630-1.jpg
qr_media_id: 24043
seo_title: "Deno Is Joining Cloudflare"
seo_description: "Deno’s team is joining Cloudflare as the companies combine work around Workers, Durable Objects, workerd and self-hosted distributed applications."
---

<!-- wp:paragraph -->
<p>Deno is joining Cloudflare, bringing the team behind the JavaScript and TypeScript runtime into the company that operates Workers and Durable Objects.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://deno.com/blog/cloudflare">Deno announced the move</a> on October 9, 2026. The company said the entire team is joining Cloudflare and that future development will focus on the combined platform rather than continuing Deno as a separate runtime and hosting business. Deno says the runtime will receive monthly bug fixes and security updates for another year, while Deno Deploy will remain online for six months before shutting down.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The practical goal is to make Cloudflare’s Workers programming model easier to run outside Cloudflare itself. Deno co-founder Ryan Dahl said the team will merge its celld work with workerd, Cloudflare’s open-source runtime. That matters because celld was designed to make Workers and Durable Objects easier to self-host across multiple machines.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/deno_land/status/2108543358197207048","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/deno_land/status/2108543358197207048
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Deno’s official account announced that the company’s team is joining Cloudflare.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech recently explained how Cloudflare is already building infrastructure for AI agents through <a href="https://bitcoinversus.tech/2026/10/04/cloudflare-clef-38-8ms-decision-models-ai-agents/">Clef, its decision-model platform</a>. The Deno move extends that same direction lower in the stack: compute, storage, WebSockets and persistent state are being treated as pieces of one distributed application model rather than separate services developers have to stitch together.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is also a major ecosystem change. Deno started as an alternative JavaScript runtime created by Dahl, who also created Node.js. BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/08/osjavascript-001-what-is-javascript-where-it-runs-what-it-does-first-console-log/">JavaScript primer</a> explains why the language now runs far beyond browsers, including servers and edge infrastructure. Under the new plan, Deno will remain open source after the team ends active runtime development, leaving the community free to continue it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://techcrunch.com/2026/10/10/cloudflare-acquires-deno-to-improve-its-workers-programming-model/">TechCrunch described the transaction as an acquisition</a> and noted that financial terms were not disclosed. Deno’s own announcement focused less on the deal structure and more on what happens to its products: JSR will continue operating, its infrastructure will move to Cloudflare, and the team will keep supporting <code>rusty_v8</code> while working toward integrating it into <code>workerd</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=k4UXEfZf3sc","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=k4UXEfZf3sc
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Cloudflare Developers demonstrates how Durable Objects combine persistent state, SQLite and real-time WebSockets.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The architectural angle is especially relevant to AI agents. Durable Objects give applications small, addressable units of compute with persistent state, SQLite, WebSockets and synchronous local storage. Cloudflare argues that these lightweight units can serve workloads that would otherwise be placed inside full virtual machines.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That does not mean every application should move to Workers. It does mean one of JavaScript’s best-known independent runtime teams is betting that distributed, stateful edge computing is a more important problem than maintaining another standalone runtime. BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/11/what-is-a-cdn/">CDN explainer</a> provides the networking background for why edge platforms place compute closer to users and traffic.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For developers already using Deno Deploy, the near-term issue is migration. For the wider ecosystem, the bigger question is whether combining Deno’s developer tooling with workerd and Durable Objects can make the Workers model portable enough to run across Cloudflare, private infrastructure and other environments.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->