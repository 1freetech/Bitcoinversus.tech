# Publication QA — OpenAI Reportedly Plans to Buy Google's AI Chips as TPU Market Expands

- Published: 2026-10-29; WordPress post ID 27119; status `publish` confirmed by posts.get context edit and view.
- Canonical article: https://bitcoinversus.tech/2026/10/29/openai-reportedly-buy-google-tpus-oracle-ai-chips-2026/
- Rotation: AI / AI Hardware after STMicroelectronics semiconductor story.
- Original headline, human-facing excerpt, SEO title/description and social message written without publishing-process jargon.
- Fact boundary: OpenAI Google-TPU purchase was a report by The Information and Bloomberg, not a company-confirmed contract; Oracle/Google October 27 TPU OCI deal is confirmed announcement, targeted for 2027, not currently generally available.
- Source citations: The Information, Bloomberg, Oracle and Google official blog, Google Cloud's eighth-generation TPU architecture document, plus four contextual BitcoinVersus.Tech internal references.

## Media and footer

- Unique photo-derived featured cover WordPress media **27113** measured **1200 x 630**; photograph sourced from Google Cloud April 22 TPU technical article. WordPress AI image generator was at quota, so a source-photo crop was used instead of AI artwork; no text on cover.
- YouTube players, rendered as iframes in WordPress posts.get(context=view): `L0eg0q-zE3o`, `3Qw_CZkiQQg`, `wOVtSeP4aAM`, `Ocf7EYHmmzo`. Four distinct players in the final HTML.
- Official Google Cloud diagrams, in article as two native image blocks: WordPress media **27123** (TPU 8t ASIC) and **27124** (TPU 8i ASIC). Source and image captions supplied; both render in posts.get view response.
- Six in-story media items in rendered HTML (4 video iframes + 2 official figures); featured photo and QR not counted.
- Original donation QR WordPress media **24043**, specified Editor’s Note and financial disclaimer confirmed saved and rendered. Branded X promo preserved, but independent native X rendering not confirmed.
- WordPress `featured_media` points to **27113**. SEO fields persisted.

## Root-cause and regression entry

- **Fingerprint:** `WORDPRESS_OEMBED_VIDEO_LINK_ONLY`
- **Observed failure:** Standard native Gutenberg `wp:embed` YouTube blocks persisted, but WordPress view HTML exposed only raw URL anchors, not playable iframes. Merely checking a block's existence is insufficient to claim functional media.
- **Unsuccessful correction:** Direct YouTube iframe in `wp:html` was stripped by WordPress sanitization; update returned `_content_warnings.elements_removed=["<iframe>"]`. It was replaced, not left broken.
- **Successful correction:** WordPress-supported `[youtube https://www.youtube.com/watch?v=VIDEO_ID]` shortcodes in Gutenberg `wp:shortcode` blocks. Fresh posts.get(context=view) returned four distinct `youtube.com/embed/VIDEO_ID` iframe src values.
- **Regression gate:** On WordPress.com Simple, after inserting YouTube media, read the rendered WordPress view HTML and require at least one iframe src matching each intended video ID. If native Gutenberg embeds fail, try supported shortcode blocks and retest. Never count fallback raw links.
- **Residual limitations:** A rendered YouTube iframe is evidence of an embedded player, not proof of completed video playback in a browser; direct playback and mobile visual inspection were not possible in this session. The live page could not be fetched by the web browsing tool immediately after publication. These tests remain unverified, not claimed as passed.

## Archive

- Exact final Gutenberg block content: `archive/2026/10/27119-openai-reportedly-buy-google-tpus-oracle-ai-chips-2026.gutenberg.html`
- Post-publication WordPress raw content read-back matched GitHub `fetch_file` content byte-for-byte (8,407 JavaScript string characters at time of check).
- WordPress and GitHub publication/archive are complete; browser playback QA is explicitly outstanding.
