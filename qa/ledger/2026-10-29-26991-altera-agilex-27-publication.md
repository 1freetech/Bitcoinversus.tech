# Publication QA — Altera Agilex 27 FPGA (post 26991)
Publication date: 2026-10-29 (WordPress site local date); source story dated 2026-10-28.
Live link: https://bitcoinversus.tech/2026/10/29/altera-agilex-27-fpga-1-8x-performance-watt-1-6tb-ethernet-2026/
Post ID: 26991
Publication status verified: published via WordPress posts.create and fetched again via posts.get.
Exact Gutenberg archive: archive/2026/10/26991-altera-agilex-27-fpga-1-8x-performance-watt-1-6tb-ethernet-2026.gutenberg.html
Archive commit: 7c1b26de7acd1fba24f74d04e931162d290e38f6
Post-publication archive fetchback: MATCH (6105 characters).

## Original and duplicate verification
- Official October 28, 2026 Altera release: https://www.altera.com/newsroom/agilex-2x
- Official Agilex 27 specs and caveats: https://www.altera.com/products/fpga/agilex-2x-portfolio/agilex-27
- Independent product interpretation: https://www.servethehome.com/altera-agilex-27-800gbe-1-6tbe-hyperflow/
- Scoped WordPress archive search for "Agilex 2X" yielded no published stories; broader Altera query found no Agilex 2X coverage. Scoped 2023-present GitHub code search for "Agilex 2X" yielded none before publish.
- Precise claim: 1.8x Altera-reported performance/watt over prior generation. Not an independent measurement and NOT a claim of 80% less energy.
- Timeline fact: QuartusIQ already available (Quartus Prime 26.3); early Agilex 27 software mid-November 2026; engineering samples anticipated 2H 2027.

## Content and media verification
- 354-word body (excluding captions and fixed footer).
- Cover: featured media 26987, original story-specific 1200×630 JPEG in the wordless-comic style; promotional illustration (not product photo).
- In-story media: 3 items, excluding cover and donation QR:
  1. Media 26988 — official Altera Agilex 2X product visual.
  2. Altera YouTube video: https://www.youtube.com/watch?v=oKJZRgcxg9A — Agilex 5 video posted March 2026, explicitly framed as older technical background, not Agilex 27 footage.
  3. Media 26989 — official Altera holographic chip image from Agilex 2X product page.
- All official images were uploaded through WordPress media.create; exact IDs and links present in saved Gutenberg content. Original media credit included in captions.
- Three contextual internal links and original Altera primary citations in body.
- Trending News, Semiconductors, Technology and Power Efficiency categories assigned, SEO description and schema Article.
- Exact fixed Editor's Note text verified in WordPress posts.get; original donation QR image 24043 immediately follows. No extra disclaimer text.

## Validation limitations
- Public-facing WordPress article URL returned inaccessible via web fetch tool. This alone does not establish a site outage; authenticated WordPress shows published.
- Actual click-to-play YouTube test NOT possible from this environment; URL is valid indexed YouTube source but embedded playback is NOT independently verified.
- Desktop and mobile screenshot inspection NOT performed; do not claim passed.
- Actual in-browser images rendering not independently observed; WordPress media upload and saved markup verified.

## QA error fingerprint and regression
- PUBLISHED-BUT-LIVE-WEB-FETCH-INACCESSIBLE: Web fetch failed for published URL, potentially access-tool restriction, no confirmed root cause. Regression: open live URL in an unrestricted browser, screenshot desktop and mobile, inspect media and footer.
- EMBED-PLAYBACK-NOT-VERIFIED: Canonical Gutenberg block exists, but no video playback test; play video, replace or remove only with another approved verified media item if blocked, preserve in-story quota 2–10.
- On any content repair, fetch WordPress posts.get, update canonical GitHub archived Gutenberg HTML, then record new blob SHA and screenshot/video evidence.


## Follow-up YouTube correction — 2026-10-28/29
- User requested repair of the existing YouTube embed or remaking the story.
- Previous embedded video `oKJZRgcxg9A` was not independently corroborated as a valid Agilex-related video. Removed from WordPress post.
- Replaced in existing published post with a native responsive Gutenberg core/embed pointing to `https://www.youtube.com/watch?v=0-4SscmHrCg`.
- Documentary basis: SiliconANGLE's October 28 Agilex 2X story includes an embedded video of Altera CEO Raghib Hussain, titled `Raghib Hussain, Altera | theCUBE + NYSE Wired: AI Factories`; the source link resolves to YouTube's embed route for this exact ID. Source: https://siliconangle.com/2026/10/28/altera-unveils-agilex-2x-betting-on-ai-developers-to-expand-programmable-computing/
- The video is transparently labeled as a **June 2026** executive interview about AI factories / FPGA infrastructure, **not** Agilex 27 launch footage.
- Added direct YouTube fallback link and linked SiliconANGLE source inside video caption.
- WordPress post-sections.replace reported zero warnings and WordPress posts.get confirmed the old ID was removed, the new ID appears, the two existing official in-story images remain, the featured image remains ID 26987, and the exact Editor's Note and QR text remain unchanged.
- GitHub archive updated at commit 71141210f0fccfdeba6a6f783c5166f55f03fb7e; post-publication fetched WordPress Gutenberg matches GitHub archive: true.
- Outstanding: direct click-to-play validation on live desktop and mobile is unavailable in current tools; YouTube watch/embed requests were throttled, therefore **playback cannot be certified**. WordPress rendered embed UI was not independently inspected. If the video fails for readers, the direct link and two official in-story images provide alternative access/coverage; perform browser QA when possible.
- Regression: do not insert unverified clip IDs from inferred video descriptions; require an original trustworthy page embedding the exact ID (prefer media publisher), then verify actual playback separately. A successful WordPress core/embed save is not proof of playback.
