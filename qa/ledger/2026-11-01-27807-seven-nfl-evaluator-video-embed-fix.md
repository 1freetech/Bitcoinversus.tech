# Seven actual analyst video embeds — correction and QA

Date: 2026-11-01
WordPress post: 27807
Article: https://bitcoinversus.tech/2026/11/01/ranking-the-rankers-top-7-nfl-draft-evaluators-chris-simms-mel-kiper/
Requested change: user specifically asked for actual working-format video embeds for EACH of the seven NFL Draft analysts rather than illustration-only article.
Prior cover correction: qa/ledger/2026-11-01-27807-nfl-evaluator-featured-field-cover-fix.md (football field cover 28151 preserved).

## Change
Replaced seven in-story editorial illustrations (IDs 27799, 27800, 27801, 27802, 27803, 27804, 27805) with native Gutenberg YouTube video blocks and dedicated italic captions, one under each analyst's ranking heading.
- #7 Bucky Brooks — NFL official 2026 top-five prospect rankings: https://www.youtube.com/watch?v=PPq1HhFEky4 (published 2026-03-20)
- #6 Dane Brugler — The Beast draft guide explanation: https://www.youtube.com/watch?v=ODKrDS_LhhI (published 2026-04-28)
- #5 Todd McShay — 2026 Senior Bowl preview and draft scouting: https://www.youtube.com/watch?v=MFCC8VLKCb4 (published 2026-01-22)
- #4 Daniel Jeremiah — NFL official non-negotiable positional traits, Move the Sticks: https://www.youtube.com/watch?v=NBHipQTavBs (published 2026-03-30)
- #3 Mike Mayock — scouting and the 2026 draft with Steve Smith Sr.: https://www.youtube.com/watch?v=ZrUhgEh6KOc (published 2026-04-17)
- #2 Mel Kiper Jr. — 2026 top-10 draft prospects ESPN segment: https://www.youtube.com/watch?v=x48C1BRc_ZU (published 2026-02-24)
- #1 Chris Simms — Dan Patrick Show retrospective on his 2018 quarterback evaluations, including Lamar Jackson: https://www.youtube.com/watch?v=hz_vtwPOy5I (published 2019-11-11). The original March 2018 primary video remains a separate contextual link within article.

## Verification
All seven video URLs correspond to indexed YouTube pages with publisher/title evidence. Saved Gutenberg content has exact seven video blocks and exact seven italic captions immediately following. WordPress posts.get context=view after publication returned SEVEN actual YouTube iframe embeds with video IDs matching the seven links, rather than plain text URLs. All seven ranking headings and the analyst discussion order preserved.
Original post remains publish; original slug/link, current football-field cover ID 28151, Editor's Note, QR attachment ID 24043, 5000-sat address and required disclaimer unchanged. Article intro corrected to say embedded videos, not seven illustrations.
External web browser access to public permalink failed (DisabledError), so user-device playback, geographic YouTube playback, and final mobile layout are NOT independently verified; native iframe markup verification is distinct from real-playback verification.
In-body media count=7 videos (original illustrations removed). Featured image and QR do not count.

## Recursion lessons
1. In analyst rankings prioritize direct video of the person demonstrating the claimed expertise, not AI illustrations masquerading as sufficient context.
2. Never claim a link in a paragraph is an embedded player; use canonical YouTube Gutenberg blocks and verify post.get(context=view) contains unique player iframes.
3. When adding 7 videos, replace the 7 prior artworks rather than stacking 14 media items and violating the 2-10 item limit. Caption every video after its block; preserve the previous story, cover and footer.

Correction status: COMPLETE on WordPress saved and rendered HTML; browser playback verification still OPEN.
