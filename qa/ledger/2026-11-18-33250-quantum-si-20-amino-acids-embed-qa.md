# Quantum-Si Proteus 20-amino-acid story publication and embed QA

**Date:** November 18, 2026
**Post ID:** 33250
**Published:** https://bitcoinversus.tech/2026/11/18/quantum-si-proteus-detects-20-amino-acids-development-november-2026/

## Research and editorial checks
- Company announcement dated November 18, 2026: Quantum-Si reported single-molecule recognition/detection of all 20 standard amino acids in Proteus *development*, with plans to integrate capability into an instrument kit. SEC 8-K filed the same date confirms announcement, not independent accuracy validation.
- Prior 18-amino-acid integrated kit and 19-amino-acid recognizer development distinguished. November 5 Q3 release retains anticipated Q2 2027 commercial launch, not currently deployed full sequencing.
- Checked WordPress published, draft and future story lists plus GitHub editorial archive keyword search for Quantum-Si and Proteus; no duplicate matching story.
- 659 editorial words (prepublication Gutenberg text count including captions/source block). Prohibited words absent; no decorative em/en dash punctuation. Includes risks/limits and technical context.
- Four internal links independently checked as published: post IDs 33212 (ElMerFold), 25352 (Illumina BioInsight), 33139 (Salk CRISPR study), 30474 (wet-lab AI tasks).
- Categories Biotechnology, Technology, Trending News. SEO title, meta description, slug, excerpt, category and tags stored.

## Imagery
- Original colored-pencil cover: attachment 33242, **1200 x 630** exact; approved neon green-on-black existing watermark was pixel-extracted from prior cover and placed at bottom left; conceptual scene is labeled as original artwork rather than real Proteus product image.
- Official in-story graphics: attachment 33245 is the company's November 18 20-amino-acid chart; attachment 33243 is an archival **Platinum Pro** product photograph, explicitly not the Proteus instrument. Both have captions and alt text, cover is not repeated.

## Gutenberg video render checks
- First historical source: official Quantum-Si YouTube video `qRv2QyvKx48` (2024), introducing Platinum technology, clearly captioned as archival.
- Second historical source: Labroots webinar by Quantum-Si scientist Ben Moree `Fpq0X1Pg-fM` (2024), clearly captioned as archival and not footage of the November 2026 event.
- Followed site-specific tested method: `<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=VIDEO_ID]<!-- /wp:shortcode -->` (no assumption that a core/embed token guarantees a player).
- **Draft context=view:** two actual `<iframe class="youtube-player"` elements with correct `/embed/VIDEO_ID` URLs; zero bare-link-only Gutenberg wrappers; both images present.
- Fixed an accidental duplicated closing paragraph tag in the source before publishing, re-saved, and reverified both players and paragraph structure.
- **Final published context=view:** again two distinct YouTube iframe players, both source image IDs, four internal links, no link-only wrappers and no malformed paragraph tag. Status=publish.
- **Public page SEO audit:** HTTP 200, title/description/canonical, Open Graph cover, schema Article, and zero missing image alt fields.
- WordPress produced screenshot URLs with `ready` status for desktop 1200 px and mobile 390 px, but pixels were NOT inspected. Direct screenshot fetch and real browser playback were not possible in available tools. Explicitly unverified: player click-to-play, video provider external blocking, and mobile visual overflow.

## Permanent prevention
Continue FIX → RETEST → REPLACE → RETEST → REMAKE. Inspect per-item **rendered WordPress HTML** both before and after publishing, never count links as embeds or conflate server-rendered iframe with browser-tested playback. Preserve existing post ID when repairing and archive exact final Gutenberg source.
