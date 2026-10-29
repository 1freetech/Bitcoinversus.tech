# Publication QA — Strive Buys 6,182 Bitcoin for $511 Million

## Published article
- WordPress post: **26999**, status **publish** verified via update response and two subsequent `posts.get` readbacks (`edit` and `view` contexts).
- Canonical permalink: https://bitcoinversus.tech/2026/10/29/strive-buys-6182-bitcoin-511-million-october-2026/
- Title: **Strive Buys 6,182 Bitcoin for $511 Million** (direct factual headline).
- Publish date according to WordPress: 2026-10-29 02:13:30 site time.
- Editor: https://bitcoinversus.tech/wp-admin/post.php?post=26999&action=edit
- Cover: original photo/anime blend, WordPress media ID **26995**, server-confirmed 1200 × 630 px.
- Draft: `drafts/2026-10-28-26999-strive-6182-bitcoin-511-million.gutenberg.html` commit `bff6702ae8663988361633da8cbe4c4168f90299`.
- Final published Gutenberg source: `archive/2026/10/26999-strive-buys-6182-bitcoin-511-million.gutenberg.html`, corrected archive commit **795974630e021a0df0a915b28987947d2f258688**.
- Source archive fetched back from GitHub and compared to final WordPress edit-context raw string: **exact match (5294 characters)**.

## Research and duplicate validation
- Strive reported purchase of 6,182 BTC during Oct. 17–23 at average ~$82,732, total $511.4m and 43,000 BTC holdings at Oct. 23.
- Primary Strive SEC 8-K: https://www.sec.gov/Archives/edgar/data/1920406/000162828026067141/asst-20261026.htm
- Separate $1 billion SATS ATM offering SEC 8-K: https://www.sec.gov/Archives/edgar/data/1920406/000095010326016138/dp255514_8k.htm. Correctly described as possible issuance capacity, not cash already raised or invested.
- The live WordPress `posts.list` search for `Strive`, `6182`, `6,182`, `43,000` and `SATS` and GitHub `search` found no previously published piece about this purchase. Older Strive articles on Oct. 13 and 22 are linked contextually, not duplicated.
- Approx. 311-word initial news body, plus a concise source-attribution paragraph added during X fallback repair. 3 natural contextual internal archive links, 2 direct SEC links.
- Prohibited filler words excluded; original long-standing Editor's Note and 5,000-satoshi donation QR ID 24043 retained.

## Media QA and repair
- The initial WordPress draft had 3 media blocks: two YouTube embeds and one X embed.
- WordPress **view-context readback** showed the X embed rendered as a plain linked URL rather than native embedded X post. This was recognized as a live fallback defect, not counted as a functioning social embed.
- Replaced that X block with a paragraph containing Matt Cole's original source post link: https://x.com/ColeMacro/status/2114689129979994154 . Used optimistic concurrency and exact target block hash via `post-sections.replace`.
- Two distinct in-story media remain: genuine WordPress `core/embed` blocks for prior Strive interviews:
  - https://www.youtube.com/watch?v=8r21Ttd-DLY (Treasury Orange discussion, prior to Oct. 26 purchase)
  - https://www.youtube.com/watch?v=kFNho9-es3I (Bitcoin Magazine Matt Cole interview, prior to Oct. 26 purchase)
- Captions accurately identify both as earlier background interviews, not recordings of new purchase.
- WordPress `posts.get(context="view")` returned **two distinct rendered `<iframe class="youtube-player">` elements** with `youtube.com/embed/8r21Ttd-DLY` and `youtube.com/embed/kFNho9-es3I`. No `is-provider-x` fallback remains.
- Note: rendered HTML having iframe elements is **stronger verification than merely saving video URLs, but not proof of click-to-play success**. Actual video loading/playback and sound inside an authenticated desktop/mobile browser remain untested due to browser/network restrictions. Do not mark this QA gate as passed.
- All quoted facts originate from primary documents; no fabricated future trade forecasts.

## Final QA and remaining check
- Result: **PUBLISHED** with two saved and HTML-rendered YouTube iframe players; WordPress public status/URL confirmed.
- Open live article on desktop >=1200 px and mobile <=430 px; verify both video players actually load/play, cover visible, layout responsive, natural anchor links, QR scan and caption integrity.
- If any player fails, replace with another relevant verified original company photograph or authentic video and re-run visual verification, then archive final live content again.
- Error fingerprint: `STRIVE_26999_X_OEMBED_LINK_FALLBACK_20261029`.
- Root cause: X embed provider rendered as a plain URL in WordPress view-context.
- Fix/regression: after saving every X block, immediately call WordPress `posts.get(context="view")`, check for native embedded content rather than URL fallback, replace failed embed prior to completing publish and preserve source as contextual hyperlink. For YouTube, check rendered iframe count and then manual playback. Fetch-back the final WordPress Gutenberg source and compare to GitHub published archive exactly.
