# WordPress post 27024 — X Embed Repair, October 29, 2026

## Article
- https://bitcoinversus.tech/2026/10/29/steve-jobs-rejected-touchscreen-macs-apple-releases-one/
- Live WordPress status: publish. No duplicate story or new post created.
- Title preserved: Steve Jobs Rejected Touchscreen Macs. Apple Just Released One.
- Unique featured art WordPress media #27023, dimensions confirmed 1200x630. This cover **does not** appear as an in-story image.
- Editor's note and 5000-sats QR preserved. Original primary Apple announcement hyperlink and two internal archive links preserved.

## Root cause and distinct failed attempts
1. Previous `core/embed` blocks with `https://x.com/...` and `providerNameSlug: "x"` returned plain links instead of tweet content in the WordPress view context.
2. Pasting the X `blockquote` plus `https://platform.twitter.com/widgets.js` into `core/html` caused WordPress's sanitizer to convert the script into an ordinary visible link. The block contained invented paraphrases instead of original tweet text. Not accepted.
3. Native `core/shortcode` `[twitter https://twitter.com/theappledesign/status/2115502283853361308]` displayed literally as linked shortcode text. Not accepted.

## Verified repair
Used exactly the WordPress-native Gutenberg Twitter embed representation:

```html
<!-- wp:embed {"url":"https://twitter.com/ACCOUNT/status/ID","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/ACCOUNT/status/ID
</div></figure>
<!-- /wp:embed -->
```

Two target X posts:
- https://x.com/theappledesign/status/2115502283853361308
- https://x.com/polymarket/status/2115502141477687723

Both now use the clean `twitter.com` canonical path in `core/embed` with `providerNameSlug: "twitter"`. WordPress public-view renderer returned **two different** `<div class="embed-x"><blockquote class="twitter-tweet">` blocks with ORIGINAL tweet text, authors, media links, timestamps, and `<script async src="https://platform.x.com/widgets.js">`. The previous script-as-link defect is absent. In-story tweet contents match IDs. The original URLs remain linked contextually.

## QA details
- Post #27024, status publish.
- Featured media #27023, WordPress media dimensions 1200 x 630.
- Raw `core/embed` count 2; rendered X tweet count 2; both original content present, `platform.x.com/widgets.js` present as a script.
- No raw `core/html` embed hacks and no image duplicating the cover in the body.
- Footer donation QR ID 24043 and exact 'We volunteer daily...' note retained.
- Original Apple October 28, 2026 product news verified from https://www.apple.com/newsroom/2026/10/apple-unveils-groundbreaking-macbook-pro-with-proled-xdr-display/.
- Final published WordPress raw source stored at `archive/2026/10/27024-steve-jobs-touchscreen-macbook.gutenberg.html`; commit `784311d058de2f67e7946163fb532b4b7411174a`; GitHub fetch-back identical to live WordPress edit-context content (5,551 characters).

## Remaining limitation
- A server-side WordPress `posts.get(context="view")` confirms true X embed markup and scripts, rather than just raw URLs. This is a meaningful repair **but does not prove interactive X video playback**.
- A direct external browser/network test from the working runtime failed DNS resolution for bitcoinversus.tech; desktop/mobile layout, playback, interaction and third-party widget script loading were not confirmed. Manual logged-out browser QA still necessary.

## Regression rules
- For X URLs on this WordPress site, prefer `twitter.com/USER/status/ID` in a `core/embed` with `providerNameSlug: "twitter"`; no query parameters.
- Fetch the view context immediately and check actual `embed-x`, original tweet text, author, media link and script; fallback to source links or real authorized in-story images if no true content.
- Never count a blockquote plus a script URL converted into a link as a functional embed.
- Keep the featured cover out of the story body. Preserve at least one paragraph between embeds, maintain disclosure, then update and fetch back the exact GitHub archive.
