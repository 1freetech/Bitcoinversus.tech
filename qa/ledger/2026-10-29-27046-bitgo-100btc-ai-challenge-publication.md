# WordPress publishing QA ledger — 27046

- Publication date: 2026-10-29T03:05:36
- Title: BitGo’s 100-Bitcoin AI Wallet Challenge Remains Unclaimed Months After Anthropic Dare
- Live URL: https://bitcoinversus.tech/2026/10/29/bitgo-100-bitcoin-ai-wallet-challenge-anthropic-untouched-october-2026/
- Post ID: 27046
- Publishing standards: BitcoinVersus.Tech Perfect Writer v2.0 (October 27, 2026)
- Status: PUBLISHED; native X tweet HTML verified; browser-level visual check pending.

## Confirmed content QA
- Live WordPress publish state confirmed via posts.create, posts.get(edit) and posts.get(view).
- Unique original editorial cover media ID 27042: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitgo-100-btc-anthropic-wallet-challenge-cover-1200x630-1.png; media.get confirms 1200x630.
- Rizzo supplied X URL retained as linked post and converted to canonical twitter.com source inside Gutenberg embed for provider resolution.
- Belshe original August 1 X post embedded separately, with narrative paragraph between blocks.
- WordPress view HTML contains 2 twitter-tweet blockquotes and 2 X widget loader references.
- Donor QR wp-image-24043, 5000 sats editor statement, internal contextual articles, Anthropic primary releases and blockchain explorer all present.
- No verified direct Anthropic attempt on BitGo's wallet; article explicitly avoids claiming it failed.

## Failure fingerprint and root cause
- **WP-AI-IMAGE-QUOTA-EXHAUSTED:** WordPress media.generate rejected new cover with 'This site has reached its AI image limit for the current period.' Cause: quota exhaustion. Fix: generate a unique detailed 1200x630 original PNG cover programmatically and upload through media.create; media.get verified size and featured_media association. Regression: check exact image dimension and featured image ID on every published post; use approved original local fallback if site credits run out.
- **X-OEMBED-NOT-RESOLVED-XCOM:** Initial canonical x.com Gutenberg wp:embed blocks were saved, but WordPress view HTML yielded only clickable links with no tweet widget. Root cause: WordPress's oEmbed resolution did not recognize x.com source in this environment. Fix: switch only Gutenberg embed URLs/wrappers to twitter.com equivalents for the same status IDs, keep user-provided x.com links in body. Regression: test WordPress posts.get context=view and require twitter-tweet markup plus platform.x.com/widgets.js; never count a simple link as an embedded item.
- **EXTERNAL-FRONTEND-NOT-READABLE:** Independent page requests via web and container could not fetch the new URL. WordPress renders native X embed HTML but browser execution and final visual appearance cannot be verified using available tools. Regression: perform an actual front-end viewport and playback/visibility check in a browser before labelling the embed visually verified.

## Follow-up QA
- Verify both X widgets visibly render on desktop and mobile, not just their widget HTML.
- Confirm the cover's crop and QR scanning in a real browser.
- If a tweet fails, replace with another verified original primary social/video item and recheck the live page, then rearchive exact revised body.
