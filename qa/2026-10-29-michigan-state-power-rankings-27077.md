# Michigan 2026 State Power Rankings — source, embed, publication and error ledger

## Published article
- Title: State Power Rankings: Top 3 Largest Data Center Projects in Michigan (2026)
- WordPress post ID 27077, publish status verified after draft->publish transition and with a new posts.get(context=edit).
- URL: https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-michigan-2026/
- Duplicate guard: searched live WordPress Michigan posts (including drafts) and GitHub archive; no preexisting Michigan state ranking. Other related internal archive stories are linked contextually in article.
- Category IDs: Data Center News 5177360, Energy 1212, Technology 6, Trending News 27318186. Meta description and excerpt set.
- WordPress exact title without added subtitles, forbidden terms checked, user-approved footer and original QR ID 24043 preserved.

## Rank-specific primary evidence
- #1 Stargate "The Barn", Saline Township: **1,383 MW DTE contract service** approved under conditions, per MPSC https://www.michigan.gov/mpsc/commission/news-releases/2026/03/27/mpsc-goes-big-on-batteries . OpenAI describes a 1GW campus https://openai.com/index/stargate-michigan-data-center/ , Oracle June construction confirmation https://www.oracle.com/news/announcement/related-digital-oracle-openai-walbridge-and-governor-whitmer-celebrate-construction-of-stargate-campus-in-saline-township-2026-06-01/ and September construction milestone https://www.oracle.com/news/announcement/blog/one-million-union-craft-hours-building-michigans-future-2026-09-28/ . 1,383 contracted MW is not measured operating load, and storage is not an additional compute demand. Timeline sourced https://www.thesalinebarn.com/ .
- #2 Google Project Cannoli, Van Buren Township: **1,000 MW planned site demand**, Oct 14 2026 Planning Commission final site plan approved 5–1, site 282.2 acres. Developer https://www.panattoni.com/vanburen/ ; planning documents https://cms9files.revize.com/vanburentwp/Document_Center/Agendas%20%26%20Minutes/Planning%20Commission/2024/Packets/P%20C%20Packet%202%2011%2026%20.pdf ; local October 21 https://bellevilleareaindependent.com/project-cannoli-data-center-gets-the-go-ahead-during-oct-14-planning-meeting/ ; March clarification https://bellevilleareaindependent.com/vbt-posts-clarification-on-project-cannoli/ . 2.7 GW often cited includes separate 1.7 GW clean-energy commitments, NOT 2.7 GW of data-center load. County incentives and township site approval are distinct decisions; county official https://www.waynecountymi.gov/News/Commission/Wayne-County-Commission-Van-Buren-%E2%80%9CProject-Cannoli%E2%80%9D-Data-Center-Statement .
- #3 Hyperscale Data Dowagiac: **340 MW hypothetical full-site expansion**, 20 MW initial contracted critical AI capacity, additional option to 52 MW. Sept 17 issuer release https://www.prnewswire.com/news-releases/hyperscale-data-provides-update-on-progress-of-michigan-ai-data-center-more-than-70-million-invested-in-alliance-cloud-services-and-the-michigan-facility-302881334.html ; SEC disclosure https://www.sec.gov/Archives/edgar/data/896493/000121465926007704/ex99_1.htm explicitly cautions expansion is conditional. Sep 1 cessation of BTC mining from issuer, Oct 6 city notice of temporary restart for sound testing https://nextdoor.com/agency-post/mi/dowagiac/city-of-dowagiac/on-the-evening-of-tuesday-october-6-mayor-bakeman-and-members-of-516251707/ . Lawsuit claims attributed to parties, no factual assumption of liability.
- Comparator: Switch Pyramid approximately 320 MW announced; cannot represent all statewide existing critical IT MW without comparable records https://signaldata.org/mi/data-centers/ . Figures in different readiness classes; methodology labeled up front and in conclusion.

## Image QA
- Unique uploaded featured cover ID **27063**, exactly **1200×630** verified via media.create, cropped from Related Digital developer Saline Township campus rendering. Subject fits state rank #1, rich, not generic. The prior Massachusetts cover was sourced photo, but Michigan cover's exact locked five-style rotation position was **NOT** verified and may not align. Not an actual completed campus photograph.
- Distinct, project-specific in-story documentary images:
  - Dowagiac ID **27065**, 1280×744 actual Hyperscale facility photo from WXYZ/FOX17 July; https://www.fox17online.com/news/local-news/michigan/neighbors-say-noise-from-dowagiac-data-center-is-24-7-and-upending-their-lives .
  - The Barn ID **27064**, 2048×1362 photo of physical construction entry sign from Civic Media https://civicmedia.us/news/2026/08/24/residents-and-officials-feeling-powerless-in-michigan-data-center-fights .
- Three verified YouTube clips from direct publisher/source pages, one inside each rank:
  - Dowagiac #3: **WXYZ-TV Detroit | Channel 7**, July 23 2026 "Neighbors say noise from Michigan data center is 24/7 and upending their lives": https://www.youtube.com/watch?v=9wDr2dec474 .
  - Project Cannoli #2: **Click On Detroit / WDIV Local 4**, October 15 2026 "Final site plan approved for Van Buren Township data center project": https://www.youtube.com/watch?v=x3JQRYs57cg . Source-index linked in https://midcreport.com/media/ .
  - Stargate #1: November 2025 **Saline Township Board public-comment video**, sourced directly via the contemporaneous Saline Post https://thesalinepost.com/g/saline-mi/n/349208/embattled-saline-township-board-data-center-we-hate-it-too linking https://www.youtube.com/watch?v=6uZC165YvLs . Historical date clearly labeled; speakers' allegations not treated as established fact.
- In-story count: **five distinct media** (3 source-identified embedded video players, 2 project-specific actual site photographs), plus cover and footer QR excluded.
- One or more media in each bounded ranked section, with separate paragraph between media items. Caption says what image/video actually shows; video dates and publisher identified.
- **No X posts embedded**, although Oracle's March 30 update identified; WordPress Twitter rendering not verified, so not used as filler.
- IMPORTANT: Image media URLs originate from public news/developer pages. Actual reprint/use rights and required photo-credit terms have NOT been established; publication rights audit remains pending. Site licensing concerns should be resolved with original, licensed, or authorized substitute photos where appropriate.

## Embed QA and archive integrity
- All 3 videos authored as WordPress-com official `core/shortcode` blocks of form `[youtube https://www.youtube.com/watch?v=ID]`, not `core/embed` prone to the Maine link-only fallback.
- **Draft WordPress posts.get(context=view)** verified exactly 3 actual iframe elements with URLs containing youtube.com/embed/9wDr2dec474, /x3JQRYs57cg and /6uZC165YvLs, plus two rendered images. Preflight included per-rank source-block assertions, correct categories, cover dimensions, QR and footer.
- **Fresh post-publication WordPress posts.get(context=view)** again confirmed all 3 iframe elements for exact IDs (no plain-link fallback); publish status and images intact.
- Video iframe production by server independently verified; browser Play button click, real-stream playback and desktop/mobile screenshot not available and **NOT** claimed.
- Final exact Gutenberg source after publish: **18,862 characters**.
- GitHub archive: `archive/2026/10/27077-state-power-rankings-top-3-largest-data-center-projects-michigan-2026.gutenberg.html`
- Commit SHA `c2e7b3a78230a826a460ed1fde20a2eda32ae04f`, blob `c69acc6fe09613852299bc94bfd5117a8558a3d6`.
- GitHub file was fetched back and EXACT string equality to final published WordPress Gutenberg confirmed **18,862 / 18,862**.

## Regression fingerprint
- `MICHIGAN_MEDIA_PER_PROJECT_QA`: Prior Massachusetts rank lacked images/video under two rank headings; Michigan preflight parsed all three rank-bounded sections and verified project-specific relevant video/images in each. **PASS**.
- `MICHIGAN_YOUTUBE_RENDER_CHECK`: Site's core/embed may fall back to linked video URL; authored WP shortcodes directly and tested fresh edit and rendered view before AND after publish. **PASS server-rendered iframe**.
- `MICHIGAN_POWER_TYPE_LINT`: Utility contract (1383) vs proposed campus (1000) vs full potential (340) differ fundamentally; all type-labeled near each number and recapped in closing. **PASS**.
- `MICHIGAN_RIGHTS_AND_COVER_STYLE_PENDING`: photo licensing/reuse and exact 5-style art rotation not substantiated; do not claim full compliance before actual rights/rotation checks and replacement if necessary. **PENDING**.
- `MICHIGAN_VISUAL_PLAYBACK_PENDING`: browser screenshot and playback click have not been carried out. **PENDING**.
- Status **PUBLISHED — THREE PER-RANK YOUTUBE IFRAME PLAYERS VERIFIED; ARCHIVE EXACT; VISUAL PLAYBACK, IMAGE RIGHTS AND COVER STYLE QA PENDING**.
