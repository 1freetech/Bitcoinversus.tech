# Post 33212: ElMerFold embed publishing QA

**Date:** November 18, 2026
**Live article:** https://bitcoinversus.tech/2026/11/18/el-capitan-elmerfold-10700-protein-structures-per-second-2026/
**Published headline:** El Capitan Runs 10,700 Protein Predictions a Second With ElMerFold

## Prepublication checks
- Checked current WordPress published posts and draft/future stories, and searched GitHub archive for ElMerFold; no matching story found.
- Original journalism based on November 17, 2026 Lawrence Livermore National Laboratory primary announcement and SC26 presentation.
- Editorial article: 680 words by prepublication Markdown/content count. Prohibited vocabulary absent and decorative em/en dashes absent.
- Four contextually relevant internal article links independently checked as status=publish (IDs 26763, 26804, 33111, 33139).
- Cover media ID 33205, original 1200x630 photorealism, bottom-left identical green-on-black label copied from established previous approved cover. Photo ID 33206 from LLNL official visualization.
- Categories: AI, Biotech, Technology, Trending News. SEO title and advanced meta description stored.

## Video repair prevention and evidence
- Official LLNL YouTube sources individually identified: cFHm_KiqQBs (El Capitan NNSA first exascale video) and Q8wtuk3XPWM (El Capitan national security and science video). Both captioned explicitly as archival background, not November 2026 ElMerFold footage.
- Native WordPress YouTube Gutenberg embeds on the same WordPress.com Simple site were previously observed rendering only as plain links in NICER post 33161. The documented and previously retested site-specific repair is the supported core/shortcode block: `[youtube https://www.youtube.com/watch?v=VIDEO_ID]`.
- Proactively used one core/shortcode Gutenberg block for each real source. Draft `posts.get(context=view)` returned 2 real YouTube iframe elements, sources include `/embed/cFHm_KiqQBs` and `/embed/Q8wtuk3XPWM`, with zero bare link-fallback wrappers. Saved Gutenberg was not accepted as evidence by itself.
- Published **existing draft ID 33212** and re-fetched public view context. Both distinct iframes remain present, no broken native wrapper. No duplicate post created. Featured image ID and body media preserved.
- `rendered_page_get`: HTTP 200, canonical, SEO title/description, OpenGraph cover, Article structured data, and no images missing alt attributes.
- WordPress screenshot service returned URLs with status `ready` for desktop and 390px mobile. Screenshot pixels were not independently inspected.
- **Playback verification: NOT TESTED.** Browser play-control interaction, third-party YouTube blocking and mobile visual overflow have not been independently verified. Do not claim them as passed.

## Standing regression rule
For every future BitcoinVersus.Tech story: verify canonical media IDs and sources, save a draft with a provider-appropriate real embed, inspect WordPress rendered view context for per-item actual player/widget, repair with supported shortcode or permitted fallback when needed, retest, publish same post ID, then re-fetch the live output. Distinguish saved markup, server-rendered player, visitor-visible presentation and playback-tested results. Never count a video-only link as functional multimedia. FIX → RETEST → REPLACE → RETEST → REMAKE.
