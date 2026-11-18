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

## November 18, 2026 permanent regression prevention: WordPress.com YouTube fallback

- **Mandatory before every publication:** inspect every video and social block in `posts.get(context="view")`. The edit-context block alone is insufficient. Record media IDs, provider, and the distinct server-rendered evidence per item. Repeat the view-context check after any repair and after publishing the same post ID.
- **Known WordPress.com Simple failure:** a valid `wp:embed` YouTube block can render only as a link inside a `wp-block-embed__wrapper`. When a real `/embed/VIDEO_ID` iframe is absent, replace the block in place with `<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=VIDEO_ID]<!-- /wp:shortcode -->` and re-fetch the rendered view. Do not publish a link fallback as a player.
- **Case study:** NICER article post **33161** at https://bitcoinversus.tech/2026/11/18/nasa-nicer-xray-telescope-science-operations-end-2026/ uses verified NASA Goddard IDs `kk0ry3_R2pE` and `Ha_xMhoKprU`. Native YouTube blocks rendered as plain hyperlinks; the shortcode repair resulted in **two distinct rendered `<iframe class="youtube-player" ... src="https://www.youtube.com/embed/..."></iframe>` elements** in WordPress view-context HTML. Recheck these forms instead of reverting to a native block blindly.
- **Verification honesty:** `saved Gutenberg`, `server-rendered iframe`, `visitor-visible player`, and `playback tested` are four separate statuses. The NICER case establishes the first two only. Site screenshot service returning `ready` is not itself inspected screenshot evidence. A real desktop/mobile screenshot and click-to-play test remain outstanding until directly viewed or controlled.
- **Future failures:** FIX → RETEST → REPLACE → RETEST → REMAKE, always on the **existing** post ID. Preserve sources, captions, content, featured cover, SEO and existing footer. Never count links, blocked iframes, or failed widgets as working embedded media. For X, first try the previously verified `twitter.com/ACCOUNT/status/ID` plus `providerNameSlug="twitter"` method and inspect actual rich tweet output.
- **Publication report:** include per-provider counts and the exact achieved verification level; explicitly disclose untested playback. Every new story inherits the regression check, even when media markup saves without API errors.
