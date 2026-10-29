# BitcoinVersus.Tech OSSEC.013 — Publication & Embed QA Ledger

**WordPress site-local date:** October 29, 2026  
**Post ID:** 27008  
**Title:** OSSEC.013: Statistical Process Control — Control Charts, Cp/Cpk and Semiconductor Process Drift  
**Live permalink:** https://bitcoinversus.tech/2026/10/29/ossec-013-statistical-process-control-control-charts-cp-cpk-semiconductor-drift/  
**Track/rotation:** OSSEC.013, Semiconductor Engineering, after OSSTC.014 and OSSEC.012.  
**Status:** PUBLISHED via owner connector, verified on fresh `posts.get` requests in both `edit` and `view` contexts.

## Research, topical scope, and integrity checks
- Checked live WordPress OSSEC sequence and 2023-present GitHub archive. OSSEC.012 treats yield, defect density and wafer maps, and the earlier general `Control Charts Help Manufacturers Find Problems Earlier` introduces SPC. The new OSSEC.013 provides a distinct advanced semiconductor-specific application: variables control charts, process stability, Cp/Cpk, a critical-dimension example and response planning.
- Main authoritative sources: NIST/SEMATECH Handbook on monitoring and control `https://www.nist.gov/publications/nistsematech-engineering-statistics-handbook-chapter-6-process-or-product-monitoring`, NIST variables chart details `https://itl.nist.gov/div898/handbook/pmc/section3/pmc32.htm`, NIST Xbar/R/S charts `https://itl.nist.gov/div898/handbook/pmc/section3/pmc321.htm`, NIST capability formula `https://www.itl.nist.gov/div898/handbook/pmc/section1/pmc16.htm`, NIST CHIPS Metrology Program, NIST virtual metrology research.
- Numerical examples clearly labeled fictional/illustrative; 10.0 ± 3(0.10) gives UCL 10.30 nm and LCL 9.70 nm, and capability example 9.6-10.4 nm specifications, mean 10.1 nm, sigma 0.10 nm gives Cp 1.333 and Cpk 1.000.
- Inline context linking includes OSSEC.012, earlier control-chart article, OSSTC.008/010/011/012/013/014, OSSEC.008/009. No in-story original diagrams; 2 relevant in-story media.
- Original italicized donation Editor's Note and WordPress QR media #24043 persisted. Forbidden-phrase lint passed.
- WordPress publish response returned `status=publish` with no content warnings.

## Cover and approved media
- Unique rich photo/anime blend cover following style rotation. Media ID 27002, actual original WordPress dimensions 1200 × 630 confirmed by media.get, with descriptive alt text.
- Video 1: Operations & Supply Chain Management University, "Statistical Process Control (SPC) Explained | Control Charts in Quality Management" (2023-09-18), `https://www.youtube.com/watch?v=aey2c0VsZNc`.
- Video 2: CQE Academy, "Process Capability: Explaining Cp, Cpk, Pp, Ppk..." (2021-02-24), `https://www.youtube.com/watch?v=H6St9mCKWuA`.
- Both YouTube video IDs discovered through search with dated creator metadata, rather than invented. Gutenberg `core/embed` URLs have newline separators around bare watch URLs to avoid the earlier inline-wrapper autoconversion failure.
- Fresh WordPress `posts.get(context=view)` returned **exactly two player iframe elements**, with `youtube.com/embed/aey2c0VsZNc` and `youtube.com/embed/H6St9mCKWuA` in their respective `src` attributes. This proves WordPress server-rendered a player for each video, not that the browser could play them.
- No independent browser click-to-play test or responsive desktop/mobile screenshot inspection was possible in this flow. Do not conflate iframe presence with playback.

## GitHub exact-content archival verification
- Exact source path: [archive/2026/10/27008-ossec-013-statistical-process-control-control-charts-cp-cpk-semiconductor-drift.gutenberg.html](../../archive/2026/10/27008-ossec-013-statistical-process-control-control-charts-cp-cpk-semiconductor-drift.gutenberg.html)
- Archive commit `40c43b55e783cd14fd722b51eb536036bee2f874`
- Retrieved the GitHub archive again and WordPress's current published editor-context source independently; **exact equality confirmed** for 25273 bytes/characters, Github blob `7e21d9e77f285260a7a8e7a1902f92fbc68cd4ac`.

## QA fingerprint and recurrence prevention
- `GUTENBERG-YOUTUBE-BARE-URL-NEWLINES/IFRAME-RENDER-SUCCESS` — Require line breaks around the raw watch URL, source readback and `context=view` rendered HTML iframe count and video ID match for all new lessons.
- `BROWSER-PLAYBACK-NOT-VERIFIED` — Manual browser play initiation and desktop/mobile visual checks remain open. If either fails, update the existing WordPress post, revalidate `context=view`, and replace final archive with exact new saved markup.
- **Final documented state:** PUBLISHED; COVER 1200x630 VERIFIED; TWO RENDERED VIDEO IFRAMES VERIFIED; EXACT SOURCE ARCHIVE VERIFIED; INTERACTIVE PLAYBACK/SCREENSHOTS OPEN.
