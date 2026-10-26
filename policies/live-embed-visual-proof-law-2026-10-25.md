# BitcoinVersus.Tech — Live Embed Visual Proof Law (2026-10-25)

**Applies to:** All news, articles, rankings, and Open CERT / TechCert lessons. Supplements Master Laws v10 and the prior check → fix → recheck rule.

1. **A saved Gutenberg `wp:embed` block is not proof of an embed.** Before calling media valid, inspect the WordPress *rendered public HTML*, not just editor/source markup. A `figure.wp-block-embed` holding an ordinary `<a>` without a player/widget is a link fallback and fails embed QA.
2. **Render proof:** YouTube must resolve to a player iframe/video; Reddit and other social posts must resolve to the provider's actual embed structure and required script or iframe. Where site's Gutenberg block silently falls back to links, use a documented, site-supported shortcode (WordPress.com `[youtube https://www.youtube.com/watch?v=ID]` or `[embed]CANONICAL_SOCIAL_URL[/embed]`) **only after testing its rendered output in a draft**. Do not inject stripped/unsupported scripts or iframe HTML.
3. **Actual browser evidence:** When browser access exists, open the *public live post* on desktop and mobile, capture clear screenshots showing each embedded player/social item **as actually displayed to visitors**, and verify that a human can click/play the video. Preserve proof or link it to the release/archive record. Screenshots of code, editor blocks, mocks, thumbnails, cached previews or server-side HTML are **not** proof that a live player rendered or played.
4. **If browser screenshots or playback verification are unavailable**, explicitly report that blocker and do not claim screenshot/live playback success. Server-side proof of iframe/social markup is useful but only *partial* QA.
5. **Unverified or defective media:** Check → repair/replace with genuine relevant media → rerender → visually recheck. If no working relevant media can be verified, remove broken/unrelated media, use official/licensed image fallback, and note the exception. Separate every two embeds by substantive prose.
6. **Archive consistency:** GitHub must contain the **final** WordPress Gutenberg content/metadata after fixes. Record what was verified (saved markup, rendered HTML, browser screenshot, playback, mobile) and what could not be verified.

## October 25, 2026 incident and proven remedy

OSFTC.012 (WordPress post 26411) originally had two `wp:embed` YouTube blocks and two Reddit blocks, but WordPress's public-rendered-content response resolved all four to **plain links**, with **zero iframes**. The QA draft showed `wp:shortcode` forms rendered **two actual YouTube iframe elements plus two Reddit blockquotes with provider widget scripts**. The live lesson was repaired and the finalized Gutenberg archived. **Human-viewed playback and screenshots remained unverified** because the agent's public browser was blocked; never overclaim.

Related WordPress documentation:
- https://wordpress.com/support/wordpress-editor/blocks/shortcode-block/
- https://wordpress.com/support/troubleshooting-embed-links-and-shortcodes/
- https://wordpress.org/documentation/article/youtube-embed/
- https://wordpress.org/documentation/article/reddit-embed/
