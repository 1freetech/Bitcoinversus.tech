# OSFOEC.013 — Publication QA ledger

- Date: 2026-10-29
- WordPress post ID: 27122
- Status (read-back): publish
- Title: OSFOEC.013: Bidirectional OTDR Engineering — Gainers, Event Loss and Trace Validation
- Live URL: https://bitcoinversus.tech/2026/10/29/osfoec-013-bidirectional-otdr-engineering-gainers-event-loss-trace-validation/
- Slug: osfoec-013-bidirectional-otdr-engineering-gainers-event-loss-trace-validation
- Featured media: 27117 (1200×630 JPEG, unique generated photographic editorial cover)
- Curriculum continuity: follows OSFOTC.014 in global track rotation and OSFOEC.012 in Fiber Engineering
- Native Gutenberg YouTube embed 1: https://www.youtube.com/watch?v=M-ON1utfZ6s (EXFO Tube, trace analysis)
- Native Gutenberg YouTube embed 2: https://www.youtube.com/watch?v=5FTfpgvQ08A (VIAVI, bidirectional testing)
- Footer X promo: https://twitter.com/1BitcoinVersus/status/1937006164555993338
- Original QR media: 24043
- User-approved Editor's Note and mandatory financial disclaimer: present
- Seven contextual internal links: present

## Saved post and render evidence
- WordPress posts.get(context=edit) yielded the final Gutenberg source with both distinct native YouTube blocks and native Twitter block.
- WordPress posts.get(context=view) yielded actual rendered HTML with both `youtube.com/embed/` iframe elements, a rendered Twitter/X blockquote, and the original QR image.
- WordPress public-status readback confirmed status `publish`, featured_media `27117`, and title/slug.
- WordPress media.get confirmed image 27117 has width 1200 and height 630.
- Final 17,487-character Gutenberg content saved bit-for-bit identically in:
  - `1freetech/Bitcoinversus.tech/archive/2026/10/27122-osfoec-013-bidirectional-otdr-engineering.gutenberg.html`
  - `1freetech/techcert/archive/2026/10/27122-osfoec-013-bidirectional-otdr-engineering.gutenberg.html`
  - `1freetech/opencert.tech/archive/2026/10/27122-osfoec-013-bidirectional-otdr-engineering.gutenberg.html`
- GitHub blob SHA for all three archives: `c57c2762fabf960ee3fea82513ea8dd60e5682c2`.

## QA limitations and follow-up checks
- **Full browser playback unverified.** The public page could not be opened through the web inspection endpoint; WordPress context=view HTML and search-discovered YouTube watch pages establish iframe presence and relevant video identities, not successful user-device playback.
- **Full desktop/mobile visual inspection unverified.** Check after publication in a real browser.
- **Ad placement unverified.** Site-managed ad injection was not inspected; no fake advertisement markup was introduced.
- **Cover style rotation:** photo is an approved style, but the exact global chronological style phase was not independently confirmed; verify next rotation from the full cover ledger.

## Error and regression fingerprint
- Fingerprint: `PUBLIC_BROWSER_QA_BLOCKED_BUT_WP_RENDER_AVAILABLE`.
- Cause: external page-open request returned an internal access error while the WordPress connector provided saved and rendered content.
- Mitigation: verify saved Gutenberg, the rendered iframe HTML, media metadata, source video URLs, and exact archival equality; explicitly record absence of actual playback proof.
- Regression test: open published page on desktop and mobile, play both videos end-to-end for a few seconds, inspect X rendering and featured cover, and compare with WordPress/GitHub archived content. Do not claim playback verified until that test passes.
