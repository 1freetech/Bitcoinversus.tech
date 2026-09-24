# How to Embed YouTube, X, Instagram and Other Links in WordPress

Published: 2026-09-24T12:18:45

Live: https://bitcoinversus.tech/2026/09/24/how-to-embed-youtube-x-instagram-links-wordpress/


<p class="wp-block-paragraph">Modern news reporting increasingly begins outside a traditional article. A hardware manufacturer may announce a new ASIC on X, an engineer may demonstrate it on YouTube, and a mining company may publish photographs or a Reel from a new facility on Instagram. WordPress can bring much of that original material directly into an article so readers can see the source without leaving the reporting context.</p>



<p class="wp-block-paragraph">The basic method is surprisingly simple. WordPress.com supports an <a href="https://wordpress.com/support/wordpress-editor/blocks/embed-block/">Embed block</a> that recognizes links from many popular services. In many cases, pasting the URL for an individual public post or video onto an empty line automatically converts the link into the appropriate embedded block.</p>



<h2 class="wp-block-heading">The fastest way to embed a link</h2>



<ol class="wp-block-list"><li>Open the individual video, post, photo or other piece of content you want to use.</li><li>Copy its public URL.</li><li>Open the WordPress post or page in the Block Editor.</li><li>Place the cursor on a new empty line.</li><li>Paste the URL by itself.</li><li>If WordPress supports the service and content type, the editor converts it into an embed automatically.</li></ol>



<p class="wp-block-paragraph">You can also select the <strong>+</strong> block inserter, search for <strong>Embed</strong>, add the block and paste the URL into it. Typing <strong>/embed</strong> on a new line is another quick method.</p>



<h2 class="wp-block-heading">How to embed a YouTube video</h2>



<p class="wp-block-paragraph">YouTube is one of the easiest services to use. Copy the URL of the individual video and paste it onto an empty line. WordPress automatically creates a YouTube player when embedding is permitted by the video&#8217;s owner. A dedicated <a href="https://wordpress.com/support/wordpress-editor/blocks/youtube-block/">YouTube block</a> is also available.</p>



<p class="wp-block-paragraph">For news reporting, the embedded video should add information. A Bitcoin mining story might use a manufacturer walkthrough, ASIC test, mining podcast, engineering presentation or facility tour. The article should still independently verify important factual claims rather than treating a video as proof of every statement.</p>



<h2 class="wp-block-heading">How to embed an X post</h2>



<p class="wp-block-paragraph">WordPress.com supports individual public posts from X, formerly Twitter. Open the specific post, copy its URL and paste that URL on an empty line. WordPress converts it to the Twitter/X block. The embedded post can display its text, images, links and interactive elements.</p>



<p class="wp-block-paragraph">WordPress specifically recommends using the post URL rather than copying X&#8217;s generated embed code. A profile or entire feed is different from an individual post and may not work through the same method. BitcoinVersus.tech previously examined <a href="https://bitcoinversus.tech/2024/11/21/technical-beef-wordpress-developers-face-persistent-twitter-embed-challenges/">technical problems surrounding Twitter embeds</a>, making the native URL method particularly useful.</p>



<h2 class="wp-block-heading">How to embed an Instagram post or Reel</h2>



<p class="wp-block-paragraph">For Instagram, open the individual public photo, video or Reel and choose <strong>Copy Link</strong>. Paste the link onto an empty line in WordPress. According to <a href="https://wordpress.com/support/instagram/">WordPress.com&#8217;s Instagram documentation</a>, individual posts can embed as long as the account is public and allows embedding.</p>



<p class="wp-block-paragraph">This can be particularly useful for visual reporting. A data-center operator may post construction progress, a robotics company may demonstrate a machine, or a mining company may show new containers, cooling equipment or electrical infrastructure before detailed photographs appear in a press release.</p>



<h2 class="wp-block-heading">WordPress supports much more than three platforms</h2>



<p class="wp-block-paragraph">The same Embed block can handle many other supported services. WordPress.com&#8217;s current documentation lists video and social sources including TikTok, Vimeo, Facebook, Bluesky, Reddit, Pinterest, Tumblr, Flickr, SoundCloud, Spotify, CodePen and others. That makes the block useful for technology reporting because the original source material may appear on very different platforms.</p>



<p class="wp-block-paragraph">The important distinction is between a link and an embed. A normal hyperlink sends the reader to another page. An embed asks WordPress to render supported external content directly inside the article. Both are useful. Source documents and technical specifications often work best as contextual hyperlinks, while a demonstration video or original social announcement can be much more useful as an embed.</p>



<h2 class="wp-block-heading">Use the individual content URL</h2>



<p class="wp-block-paragraph">A common reason an embed fails is that the URL points to a profile, page or group rather than an individual piece of content. WordPress recommends using the specific post, video or photo URL. Private or restricted content cannot normally be embedded, and creators on some platforms can disable embedding.</p>



<p class="wp-block-paragraph">Clean URLs can also help. Mobile-domain variants and tracking parameters sometimes interfere with recognition. If a supported link does not render, try the standard public URL without unnecessary parameters. If the source has been deleted, made private or had embedding disabled, WordPress may display a plain link instead.</p>



<h2 class="wp-block-heading">When to use Custom HTML</h2>



<p class="wp-block-paragraph">Native Embed blocks should generally be the first choice. Some services instead provide an iframe or script. WordPress.com allows advanced custom code in a Custom HTML block only when the site&#8217;s hosting and plan support it. Native embeds are simpler, remain editable in the Block Editor and avoid unnecessary third-party scripts.</p>



<h2 class="wp-block-heading">A better workflow for news sites</h2>



<p class="wp-block-paragraph">For a publication such as BitcoinVersus.tech, embeds can become part of the reporting workflow rather than decoration. A story can begin with an original announcement on X, verify the announcement through company documentation, add a YouTube engineering discussion for visual context, include an Instagram demonstration when relevant, and link internally to earlier reporting.</p>



<p class="wp-block-paragraph">The resulting article gives readers several levels of evidence: original reporting, primary-source hyperlinks, previous coverage and the source material itself. BitcoinVersus.tech&#8217;s existing <a href="https://bitcoinversus.tech/2024/11/29/bitcoinversus-tech-wordpress-sop/">WordPress SOP</a> provides the broader publishing framework around that process.</p>



<h2 class="wp-block-heading">Quick rule for embeds</h2>



<p class="wp-block-paragraph"><strong>Use the clean URL for the individual public item, paste it into an empty WordPress block, confirm that it renders, and keep a normal source link available when an embed is unsupported.</strong></p>



<p class="wp-block-paragraph">That simple approach works for a large portion of the multimedia material a modern technology publication encounters and allows reporting to combine written explanation with the original video, social post, photograph or discussion that helped establish the story.</p>



<p class="wp-block-paragraph"><strong>Sources:</strong> <a href="https://wordpress.com/support/wordpress-editor/blocks/embed-block/">WordPress.com Embed Block documentation</a>, <a href="https://wordpress.com/support/wordpress-editor/blocks/youtube-block/">YouTube Block documentation</a>, <a href="https://wordpress.com/support/wordpress-editor/blocks/twitter-block/">X/Twitter Block documentation</a>, <a href="https://wordpress.com/support/instagram/">Instagram embedding documentation</a>, and <a href="https://wordpress.com/support/troubleshooting-embed-links-and-shortcodes/">WordPress embed troubleshooting</a>.</p>



<p class="wp-block-paragraph"><strong><em><a href="https://bitcoinversus.tech/">BitcoinVersus.Tech</a> Editor&#8217;s Note:</em></strong><br><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>

