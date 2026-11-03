# Recursive Content Engineer v5.0 — OpenShot 4.1.1 Publication QA

- Date: 2026-11-02
- Post ID: 28557
- Status: **published; WordPress view read-back confirmed; external browser/mobile visual QA unavailable**
- Title: OpenShot 4.1.1 Fixes GPU Exports as Video Editing Gets an Experimental AI-Ready CLI
- Canonical: https://bitcoinversus.tech/2026/11/02/openshot-4-1-1-gpu-export-windows-save-fixes-ai-cli-video-editor-2026/
- Rotation: Linux / Windows / Software (following Networking / Fiber Optics post 28529)
- Content type: news; 349 original words excluding figures/captions/footer
- Internal contextual links: 4, destinations confirmed in WordPress archive
- Sources: 4+ primary pages, including GitHub v4.1.1 release (November 2), developer v4.1 feature blog (October 25), official files guide and export guide
- Primary release: https://github.com/OpenShot/openshot-qt/releases/tag/v4.1.1
- Release background: https://www.openshot.org/blog/2026/10/25/openshot-41-direct-text-editing-auto-optimize-command-line-editing/
- Product docs: https://openshot.org/files/user-guide/files.html ; https://openshot.org/files/user-guide/export.html
- Distinction: 4.1.1 maintenance fixes versus experimental 4.1.0 feature additions; no independent performance claims
- WordPress & GitHub searches "OpenShot", "OpenShot 4.1.1" found no duplicate before publication

## Media and cover
- In-story media = 3 official screenshots, WordPress IDs 28553, 28554 and 28555, with after-media italic captions; original donation QR ID 24593 excluded from quota
- No YouTube/X claimed as playable; none was embedded
- WordPress posts.get(view) contains four rendered figure elements, their captions and image attachment IDs
- Cover attachment ID 28556, dimensions 1200x630 verified by WordPress media-get; alt labels illustration rather than original source photograph
- Cover art style: anime editorial; adult Black woman working as video editor (rotated demographic versus previous East Asian male fiber technician)
- Exact authoritatively retrieved Editor's Note from published post 28529, original QR and approved 5,000 sat instructions, disclaimer retained in footer order
- No decorative text boxes or banned reader-facing vocabulary
- Chart: N/A — version IDs, preview resolutions and codec formats are categorical specifications, not a meaningful quantitative comparison or timeseries. Fabricating a chart was avoided.

## Deterministic tests, verification and rubric
- Local generated-Markdown/HTML check for word count 349, 4 internal links, 3 source images, footer markers and prohibited words: passed
- WordPress draft edit/view checks: passed all image IDs/captions, excerpt/SEO, categories and featured image
- WordPress published status and canonical URL: passed (after update)
- Published WordPress view read-back: passed source images [28553, 28554, 28555] and QR [24593], all four captions, footer, links and featured media 28556
- Independent public browser opening of canonical URL: failed (viewer error), so cannot certify mobile responsiveness, actual pixel anatomy or external live image delivery
- Provisional prepublication v5.0 score: 96/100, with no failed prepublication hard gate
- Conservative postpublication assessment: 94/100 due to unavailable public browser visual QA; do not describe as independently live-verified or meeting 95 after publication
- Source confidence recorded qualitatively as primary documentation; no invented numerical probabilities or engagement figures
- Reader feedback, thumbs and analytics: not available; no results invented

## Defects and fixes
1. BLOCKING cover dimension gate: WordPress media.generate produced 1344x768 despite aspect ratio. First images.weserv.nl crop request returned HTTP 403. Changed crop strategy to the WordPress.com-hosted source query ?w=1200&h=630&crop=1; media.create returned 1200x630 (ID 28556). Status: passed size regression, not externally visually inspected.
2. Known X/YouTube embed risk: avoided unverifiable players; used original provider screenshots for three distinct technical points. Status: WordPress rendered markup confirmed; external image delivery not independently tested.
3. No material comparative dataset: correctly did not add chart. Avoided fabricated statistics.

## Reusable improvements
- Prefer authenticated primary release tags to blog announcement dates; disclose maintenance patches versus earlier feature launch.
- If third-party crop proxy fails, try WordPress's native crop URL as a changed repair hypothesis and verify returned dimensions before release.
- Keep external visual checks as separate audit fields; a WordPress rendered view is not equivalent to a mobile browser screenshot.

## QA state
PUBLISHED_UNVERIFIED externally; WordPress published/readback confirmed. GitHub archive and this ledger entry were created after the WordPress result; full remote visual gate remains outstanding.
