# Massachusetts state power rankings — each-ranked-project media repair

## Publication
- Canonical: https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-massachusetts-2026/
- WordPress post ID 27035, status publish, featured cover ID 27034 retained.
- User request: one relevant in-story media embed for **each** individually ranked project; fix embeds or remake.

## Exact fixes and mappings
- **#3 MGHPCC, Holyoke**: uploaded real project exterior photo media 27040 (2500×1667), original location 100 Bigelow St. Source/caption https://www.buildingamericacde.com/massachusetts-green-high-performance-computing-center . Inserted `core/image` inside this ranking's section. WordPress `posts.get(context=view)` confirms rendered `wp-image-27040`.
- **#2 Chestnut River, Holyoke**: uploaded actual property photo media 27041 (1292×808), former Hampden Paper complex 100 Water St, source https://www.crexi.com/properties/1509929/massachusetts-326664-sf-holyoke-industrial-complex . Inserted `core/image` inside this ranking's section. Caption separately links local news **project-specific VIDEO** https://www.westernmassnews.com/video/2026/06/03/concerns-with-proposed-data-center-holyoke/ . That external Western Mass News video **was not embedded as a verified player**; it is linked. WordPress `posts.get(context=view)` confirms rendered `wp-image-27041`. Do not claim this project has an embedded YouTube/social video.
- **#1 Servistar Westfield**: retained previously verified WWLP-22News YouTube shortcode video https://www.youtube.com/watch?v=-O26-gKlSQM . WordPress rendered HTML verifies real `youtube.com/embed/-O26-gKlSQM` iframe. Removed separate duplicate body image 27033, because the featured cover media 27034 is a 1200×630 crop of the same original video thumbnail.
- Exactly **3 counted media items** (two distinct project-specific images + one verified YouTube iframe); cover and original donation QR excluded. All media are placed between each ranking heading and next heading, no wrong-project video reused in another section.
- The two project-specific photographs are real source photography, with captions identifying the actual site or building rather than implying a proposed data center was constructed. Source image license/permission **not independently verified** and needs a rights audit.
- Preserved title, original QR 24043, editor's note and 5,000 sats address, original financial disclaimer, categories including Trending News, exact cover media 27034, and external/internal hyperlink context.
- Post-update WordPress `posts.get(context=edit)` full body 11,491 chars; `posts.get(context=view)` includes both numbered-image classes and actual WWLP iframe, post status publish, no banned words. Does not constitute independent video playback or full graphical/mobile inspection.

## Failure fingerprint
- MEDIA_PER_RANK_GAP: Previous Massachusetts version had a Westfield embedded video and in-body duplicate cover thumbnail, but no media within either Holyoke ranking section. This violates the user's media-per-ranking preference despite overall minimum 2–10 media law.
- Root cause: article-level media quota passed when only one ranked section had media; validation did not inspect bounded heading sections. Duplicate-cover-origin detection also missing.
- Prevention: For every ranked article, split final Gutenberg into contiguous sections delimited by each rank heading. Assert **at least one actual distinct relevant core/image, rendered media, or verified native playable iframe for every rank**; confirm credited/actual source. For video, verify that public `posts.get(context=view)` contains the exact rendered provider iframe; a normal plain URL and valid shortcode alone do not count as playable. Detect cover reuse by underlying image source as well as media ID, and remove duplicate body image when appropriate.
- Need to distinguish: linked news video in #2 is **NOT an embed**, though relevant project photo is an actual in-body image.
- Image copyright audit pending: availability on a public webpage does not establish licensed redistribution. Replace with rights-cleared originals/CC images or obtain permission before claiming publication rights QA passed.

## Archive
- Exact final Gutenberg GitHub path `archive/2026/10/27035-state-power-rankings-top-3-largest-data-center-projects-massachusetts-2026.gutenberg.html`
- Archive update commit `b5e5c565bbc3c0d94034c09befa7dcb80471dfe0`
- Blob SHA `e7cfead5409f523bc6201ab09e934c2bcc6c0aa4`
- Fetch-back exact WordPress–GitHub equality verified: 11,491 / 11,491 characters.
- Status: **PUBLISHED — PROJECT MEDIA COVERAGE VERIFIED IN WORDPRESS HTML; ACTUAL YOUTUBE PLAYBACK, FULL GUI AND IMAGE RIGHTS QA PENDING**.
