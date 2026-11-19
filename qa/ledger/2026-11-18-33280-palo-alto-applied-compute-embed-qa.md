# Palo Alto Networks / Applied Compute $4.5B deal: publication and embed QA

**Date:** 2026-11-18
**WordPress article ID:** 33280
**Live URL:** https://bitcoinversus.tech/2026/11/18/palo-alto-networks-applied-compute-45-billion-open-weight-ai-security-2026/

## Research and deduplication
- Announcement date: November 18, 2026. Primary source: https://www.sec.gov/Archives/edgar/data/1327567/000132756726000030/ex992pressrelease_november.htm and agreement in https://www.sec.gov/Archives/edgar/data/1327567/000132756726000030/panw-20261117.htm. Definitive agreement for $4.5 billion all-stock transaction, subject to adjustments, regulatory clearance and other conditions; expected Palo Alto Networks fiscal Q3 2027 close, **not completed acquisition**.
- Q1 FY2027 revenue $3.44 billion (+39% YoY), Next-Generation Security ARR $9.73 billion (+66%) per November 18 company financial release. ARR correctly separated from recognized revenue.
- Searched WordPress latest published, drafts, future, specific company terms Applied Compute and Palo Alto Networks; GitHub archive search no matching Applied Compute acquisition story. No duplicate detected.
- Four WordPress-published internal contextual link targets confirmed: #27895, #18354, #20945, #23522.
- 702 editorial words by preflight estimate, none of the banned original-prose words or decorative em/en dashes. SEO title, meta description, canonical slug, excerpt, categories/tags saved.

## Cover and authentic media
- Featured original 1200x630 photorealistic editorial artwork, media #33276. The fixed approved neon-green on tight black background logo watermark was pasted from the established reference crop at bottom-left. No duplicate inside the article.
- In-story product image #33278 is a screenshot of official Palo Alto Networks Prisma AIRS *illustrative marketing interface*, not claimed as operational results, not Applied Compute tool screenshot. Correct descriptive alt and italic attribution in paragraph/image caption.
- Two sourced official Palo Alto Networks YouTube videos, deliberately archival (March 2026): #1 `1xhTs25oFAA` about Prisma AIRS adversarial AI threats; #2 `MsjCrGDOJNc` about AI enterprise security and agent workflows. Both captions say archival, not November 18 acquisition footage.
- No original-source social posts with verified supported rich embeds were included; **0** social embeds, media total **3**.

## Verified and unverified stages
- Native `wp:embed` had been observed on preceding stories to degrade to plain anchor. Used proven Gutenberg `wp:shortcode` block for each YouTube watch URL, following site-specific workaround.
- Draft **edit context** returned both saved `[youtube https://www.youtube.com/watch?v=VIDEO_ID]` shortcodes. Draft **view context** returned **2 actual YouTube `<iframe class="youtube-player"` players** with distinct `/embed/VIDEO_ID` sources. Zero bare `wp-block-embed__wrapper` link-only fallbacks.
- Published original post ID 33280, then retrieved again in **view context**: **2 correct iframe players**, both source IDs, 1 in-story company image, 4 internal links, correct featured media, no malformed closing paragraphs. No duplicate created.
- Public signed-out page audit: HTTP 200, valid canonical, SEO title/description, OpenGraph featured cover, JSON-LD Article schema, 0 missing image alt attributes.
- The WordPress screenshot service returned `ready` URLs for desktop (1200px) and mobile (390px), but image pixels were not independently inspected. **Browser click-to-play, cross-browser, and visual mobile layout tests remain unverified.** A rendered iframe does not prove the provider permits playback for any particular visitor.

## Permanent regression rule
For all future articles: verify source/video identity; save supported Gutenberg; inspect server-rendered player IDs in the view API before publication; repair bad embeds with supported shortcode or permitted HTML and retest; publish only once; confirm published status, featured cover, links and exact per-item render after publication; label playback truthfully. FIX → RETEST → REPLACE → RETEST → REMAKE.
