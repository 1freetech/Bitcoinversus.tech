# Editing QA — BitcoinVersus.Tech Post 17651
Date: 2026-10-28
Original/live URL: https://bitcoinversus.tech/2026/10/28/elon-musk-reveals-new-terafab-ai-factory-as-tesla-and-spacex-expand-chip-ambitions/
Revised title: Tesla and SpaceX Detail $16.8 Billion Texas Terafab as Musk Targets 2028 Chip Production
Exact Gutenberg source archive: archive/2026/10/17651-elon-musk-reveals-new-terafab-ai-factory-as-tesla-and-spacex-expand-chip-ambitions.gutenberg.html
Archive commit: f88c26f531a592ead01e48d994e91b55c7278015

## Error fingerprint and root cause
- Fingerprint: Visible draft SEO scaffolding published as reader-facing post copy. The original WordPress Gutenberg body included sections headed 'SEO Title', 'SEO Meta Description', 'Alternative Meta Descriptions', 'Keyword Stack', and 'SEO/SMO Title Options' after the article prose.
- Root cause: content metadata / headline brainstorming text was inserted into the Gutenberg article content rather than separated from the publication and its native WordPress SEO metadata fields. This caused a non-news-story reading experience.
- Second defect: original featured cover attachment 17655 was 1536x1024, not the standing 1200x630 editorial cover dimensions.

## Repair and sources
- Replaced entire body with an ordinary lead-first, ~350-word article explaining the August 6 Grimes County announcement, >$16.8B estimated first-phase capital, 3,000 prospective jobs, proposed 100-million-square-foot campus, Tesla/SpaceX end-use cases, October 20 projected SRAM test by May/June 2027, and highly uncertain Q3/Q4 2028 volume production.
- Preserved existing slug and published URL; updated headline and excerpt.
- Factual source links: https://new.spacex.com/updates ; https://gov.texas.gov/news/post/governor-abbott-announces-spacex-expansion-in-grimes-county ; https://www.fool.com/earnings/call-transcripts/2026/10/20/spacex-spcx-q3-2026-earnings-call-transcript/ ; https://www.reuters.com/business/media-telecom/spacex-teslas-terafab-targets-2028-volume-chip-production-musk-says-2026-10-20/
- Claims distinguish planned capital and production targets from commissioned equipment; 1 TW ambition describes possible aggregate annual chip power capability, NOT facility electricity load or FLOPS. Potential TSMC discussions linked but not represented as a signed partnership.
- Added 3 naturally anchored contextual links to earlier BitcoinVersus.Tech Terafab stories (May, October 15, October 21).
- New featured cover attachment 26903 uses existing article cover artwork cropped to exactly 1200x630. This is the same post's cover adapted to required dimensions, not an unrelated template.

## Embed and publication verification
- 2 distinct on-topic in-story embeds: (1) Tesla official Terafab keynote YouTube https://www.youtube.com/watch?v=Txt3Wodav1o (recorded March 21 2026; published April), (2) @Tesla Aug 6 original Grimes County project X post https://x.com/Tesla/status/2085365278276284803 .
- Live WordPress posts.get(context:view) confirms status 'publish'; YouTube iframe with exact ID Txt3Wodav1o; native X blockquote with original Tesla status ID 2085365278276284803 and platform.x.com/widgets.js; 11 rendered links of which 3 target site archive; donation QR included; none of the original SEO draft headers remain.
- Featured cover media.get returned exact 1200x630 dimensions. No original diagrams inserted in body. Cover and donation QR excluded from 2–10 in-story media count.
- Final posts.get(context=edit) WordPress Gutenberg raw content fetched and compared byte-for-byte with GitHub archive: MATCH (6072 characters each).
- Visual browser testing on desktop and mobile was not available. Actual playback of YouTube and live X widget activation were not independently tested; HTML rendering verifies embed integration only.

## Regression checklist
1. Preflight reject any article body containing SEO Title, SEO Meta Description, Alternative Meta Descriptions, Keyword Stack or SEO/SMO headline options unless these are themselves the topic of the article.
2. Check title/date/lead consistency against publication timeline; do not imply a retrospective announcement happened today.
3. Before publish/update, check one authentic topical YouTube/X embed plus at least two distinct relevant items in total; fetch published context:view and verify actual YouTube iframe and X blockquote. Separately click player/test widget in browser when available.
4. Confirm featured media dimensions 1200x630 and a story-specific design, appropriate footer QR, responsive Gutenberg markup, substantial contextual links and direct original source URLs.
5. Inspect live desktop/mobile screenshots when browser support is available. After revisions, re-fetch final source and compare with GitHub exact archive; log outcome without claiming unperformed tests.
