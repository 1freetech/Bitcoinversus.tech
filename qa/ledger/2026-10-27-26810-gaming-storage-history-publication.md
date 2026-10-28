# Publication QA ledger — 2026-10-27 — post 26810

## Item and source provenance

- **Live URL:** https://bitcoinversus.tech/2026/10/27/gaming-size-evolution-4kb-to-210gb-gta6-storage-power-efficiency-theory/
- **Headline:** From 4 KB to 210 GB: How Video Games Grew 52 Million Times Larger
- **Final WordPress Gutenberg source:** [GitHub archive](../../archive/2026/10/26810-gaming-size-evolution-4kb-to-210gb-gta6-storage-power-efficiency-theory.md); final archive fetched back from published WordPress and independently re-read from GitHub.
- **Original user source:** https://x.com/niktek/status/2115200020916142425 — NikTek's Oct. 27, 2026 post, confirmed in rendered WordPress oEmbed to say "Every Grand Theft Auto Game size comparison (1997–2026)." The post is an editorial inspiration, **not** evidence of a Rockstar-certified download size.
- **GTA VI status:** 210 GB is a report attributed to PlayStation Game Size and Insider Gaming; Rockstar's official support documentation states preloading, platforms and edition availability but does not publish the final size.
- **Historic comparison:** IEEE Spectrum confirms early Atari cartridges carried 2 KB; Atari 2600 Space Invaders could fit in 4 KB. Calculation assumes decimal units: 210,000,000,000 bytes / 4,000 bytes = 52,500,000. Not presented as GTA 1's exact size.
- **Physical distinctions:** Storage capacity is not system RAM, compute speed or electricity use; substantive body links naturally to BitcoinVersus.Tech's Power Efficiency Theory and memory/SSD explainers.

## Media proof and rotation

- **Featured cover** ID 26808: generated unique 1200×630 Realistic Photo/Anime Blend (fourth style), no original diagram in story.
- **Item 1:** CC BY 2.0 historical Atari cartridge image ID 26809 credited to Kevin Savetz, Wikimedia Commons and linked license.
- **Item 2:** Canonical NikTek social X post via WordPress `core/shortcode` `[embed]https://twitter.com/niktek/status/2115200020916142425[/embed]`. WordPress rendered-HTML read returned `blockquote.twitter-tweet` with canonical post URL and `platform.x.com/widgets.js` script.
- **Item 3:** Rockstar Games official GTA VI Trailer 2 at `https://www.youtube.com/watch?v=VQRLujxTm3c`. WordPress rendered-HTML contains a `youtube.com/embed/VQRLujxTm3c` player iframe.
- **QR** item 24043 and featured cover excluded from 2–10 in-story media quota; all media separated by substantive paragraphs.
- **Source links:** primary and historically grounded source anchors, four contextual internal archive links including Power Efficiency Theory, and donation QR footer.
- **Post-publication server-side QA:** PASS (published state, images in DOM, X widget structure/script, actual YouTube iframe in DOM, sources, SEO, donation QR and 1200×630 featured cover).

## Error fingerprint and root cause

- **Fingerprint:** `BV-PUB-26810-X-BLOCK-LINK-FALLBACK`
- **Observed error:** Initial native Gutenberg `wp:embed` for the user-supplied X URL returned an ordinary `<a href="...">` link in WordPress rendered HTML, not a social widget.
- **Root cause:** Native WordPress X embed rendering did not resolve the provider's widget on this post.
- **Fix:** Replaced with documented WordPress `core/shortcode` `[embed]https://twitter.com/niktek/status/2115200020916142425[/embed]`, then fetched rendered draft and confirmed genuine X blockquote and required provider widgets.js script. Rechecked after publication.
- **Regression test:** Never count raw `wp:embed` as media proof. Check `posts.get(context=view)` for `blockquote.twitter-tweet` + provider script, and independently check YouTube `iframe` structure; if only link fallback appears, repair via tested shortcode or replace with relevant verified licensed media. Preserve final markup in GitHub, not initial draft.

## Outstanding visual/functional QA

- **Fingerprint:** `BV-PUB-26810-BROWSER-PROOF-UNAVAILABLE`
- **Status:** No authenticated interactive desktop/mobile browser or click-to-play facility was available in this run. No desktop/mobile screenshots captured and **no actual X video or YouTube playback test** performed. Rendered-HTML evidence is partial, not visual proof.
- **Recommended check:** Open published URL with 1440px and 375px viewports; confirm images, social post/video widget and embedded YouTube player are visible and playable, no overflow or blank boxes, paragraphs separating media and visible footer. If broken, repair in WordPress, reread published source and refresh GitHub archive.
