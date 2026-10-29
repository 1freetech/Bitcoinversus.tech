# Maryland 2026 State Power Rankings — Publication QA and Embed Regression Ledger

## Publication identity
- Title: State Power Rankings: Top 3 Largest Data Center Projects in Maryland (2026)
- WordPress post 27015, status publish, dated October 29, 2026 in WordPress site timezone.
- Public permalink https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-maryland-2026/
- Linked site: BitcoinVersus.Tech. Prior alphabetical article: Maine #26992.
- Live WordPress posts.list search for Maryland including drafts/pending/future, and GitHub repository search, returned no prior Maryland state ranking.
- Categories verified: Data Center News 5177360, energy 1212, technology 6, Trending News 27318186.

## Ranked projects — evidence type and status
1. **Quantum Frederick / Frederick Digital Campus, Adamstown: 2,400 MW of power under development**, Catellus developer-reported park-wide electrical program, 2,100 acres, 17.4m sq ft entitled. Source: https://www.catellus.com/hyperscale-data-center-campus ; Frederick County official https://www.frederickcountymd.gov/9310/Data-Centers . County executive rejected Catellus DRRA Sept 14 2026 and extended new-applications pause to July 1, 2027; county explicitly exempts earlier-approved parcels and work already under construction. Rowan Bauxite and Aligned parcels are within the park and NOT counted again as distinct ranked megaprojects. 2.4 GW is not metered 2026 usage.
2. **TeraWulf Chesapeake Data & Energy, Morgantown/Newburg: up to 1,000 MW planned data-center load**, separate from up to 1 GW proposed on-site generation and 500 MW proposed battery discharge power (no additive double-counting). Original TeraWulf investor presentation filed with SEC https://www.sec.gov/Archives/edgar/data/1083301/000108330126000162/terawulfq22026investorpr.htm ; Aug 5 company release https://investors.terawulf.com/news-events/press-releases/detail/144/terawulf-reports-second-quarter-2026-results . Separate critical IT target roughly 800 MW. Existing generating capacity reported at about 210 MW is not existing data-center load. FERC approved pending asset acquisition July 29, with other closing conditions and local reviews outstanding; operations contemplated around 2030. County confirms site reuse https://www.meetcharlescounty.com/projects-industries/new-major-projects/morgantown .
3. **Brightseat Tech Park, Landover former mall: up to 820 MW developer-reported overall campus site power**, five planned buildings, ~86.62 acres, 4,132,500 sq ft. Primary municipal 2024 briefing https://cms7files1.revize.com/glenarden/2024%20Documents/Brightseat%20Tech%20Park%20Documents/M-DataCenter-ForFeb13-Feb20-Councilmtg.pdf ; official subdivision docket https://www.mncppcapps.org/planning/damsweb/Case_Detail.cfm?CaseNumber=4-23024 ; developer number confirmed by reporting and project tracker https://signaldata.org/md/data-centers/projects/brightseat-tech-park/ . Preliminary approval 2024 but 2025/2026 Prince George's County moratorium leaves scope/timing ambiguous; not commissioned IT. Avoid asserting the moratorium necessarily rescinded prior subdivision approvals.

## Featured and in-story media
- Featured WordPress media ID **27010**, newly cropped developer Rowan Quantum Frederick project-specific 1200x630 image; exact dimensions confirmed via media.get. Concept rendering is not an actual photograph of fully operational 2.4GW campus. Source https://rowan.digital/portfolio/frederick/ . Its precise five-style rotation position remains unverified, and permission to redistribute the developer image has not been independently confirmed. A public source is not itself an explicit reuse license.
- Three distinct Gutenberg in-body images with verified upload IDs / alt text / captions:
  - 27012 Brightseat developer concept image (Lerner image via Washington Business Journal); not actual constructed campus;
  - 27013 actual Morgantown legacy power-plant image credited to Hoodline; not a finished data center;
  - 27011 Quantum Frederick master aerial concept from developer https://www.frederickdigitalcampus.com/ ; not actual full campus.
- First media.create of Charles County Morgantown image source returned HTTP 403 and NO media ID. Replaced with another sourced project-specific actual power-plant image; subsequent upload ID 27013 confirmed. Never count failed media URLs as included.
- Original donation QR media 24043 in article footer, excluded from 2–10 in-story media count. Featured cover 27010 also excluded. In-story quota = 3 images + 3 YouTube players = 6 candidate relevant source media items.
- Image distribution rights not independently confirmed for developer/reprinted news media. Rights review and replacement with appropriately licensed or owned alternatives required before claim of full license QA.

## Three videos — root cause prevention and rendered-HTML test
- Following Maine #26992's discovered core/embed fallback-to-link bug, created all three Markdown-independent WP `core/shortcode` blocks using WordPress.com supported `[youtube https://www.youtube.com/watch?v=<ID>]` format from the start.
- Video 1: `nCBpl7YTIjA`, verified official WUSA9 YouTube listing, “Prince George's County halts Landover Mall data center plans amid environmental concerns,” September 16 2025: https://www.youtube.com/watch?v=nCBpl7YTIjA
- Video 2: `KXjr_Q4RKeE`, Frederick County Government official “Special Announcement: DRRA for the Frederick Digital Campus,” linked directly from county official website: https://www.youtube.com/watch?v=KXjr_Q4RKeE
- Video 3: `IgnnMvXkmLU`, Frederick County official July 2025 data-center overlay announcement, linked from county government page: https://www.youtube.com/watch?v=IgnnMvXkmLU
- **Before publishing:** fresh WordPress `posts.get(context=view)` showed **3 `<iframe` elements** with exact `youtube.com/embed/<ID>` URLs matching each shortlisted source, not plain linked video URLs; WordPress `posts.get(context=edit)` showed exactly 3 `wp:shortcode` blocks.
- **After publishing:** independent fresh WordPress rendered HTML read-back again confirmed status publish and **3 iframe elements with ALL EXACT video IDs**. Thus the known Maine defect did not recur; no repair/remake necessary.
- Important limit: WordPress server-generated actual iframe markup is verified. No browser-controlled Play click, front-end screenshot, mobile layout/playback or browser YouTube player network response was tested; do not report these as verified. Video content authenticity grounded in search and official publishers; functionality claim limited to produced iframe HTML.

## Preflight and exact archive
- Article title exact per user. Primary / secondary linked sources, internal article links, no prohibited editorial terms “unusual / unusually / strange”, original editor's note, donation QR original, 5,000 sats and wallet `3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb`, exact financial disclaimer all checked. Assigned Trending News with energy and Data Center News.
- Fixed a broken invented municipal URL in Brightseat paragraph BEFORE publication. Corrected to the live original https://cms7files1.revize.com/glenarden/2024%20Documents/Brightseat%20Tech%20Park%20Documents/M-DataCenter-ForFeb13-Feb20-Councilmtg.pdf via optimistic post-sections.replace, then ran entire video and metadata gate again. Regression check: derive official linked source URL exactly from web result rather than constructing a probable municipal domain path.
- Post WordPress published via posts.update, returned publish status, then independently confirmed by posts.get(context=edit) and posts.get(context=view).
- Final published raw Gutenberg content length **16,426 characters**.
- GitHub archive path: `archive/2026/10/27015-state-power-rankings-top-3-largest-data-center-projects-maryland-2026.gutenberg.html`
- Archive commit: `9fc12f36ed98e67caaaeb8a0a7f10634e86ac43b`
- GitHub blob SHA: `5f981dde283e5aef44c4e372fc7cc89d631be2f5`
- Final GitHub archive fetched back and **matched the final WordPress raw Gutenberg string exactly, 16,426 / 16,426 characters**.

## Remaining QA and next-publication rules
- LIVE_QA_PENDING: user-visible site graphical desktop/mobile screenshot and real Play interaction were NOT independently available, though WordPress emitted all 3 actual iframe players. Must not infer successful user playback merely from iframe markup.
- LICENSE_QA_PENDING: editorial rights for images must be checked individually. Precise recurring locked 5-style cover rotation position was not verified and may require a replacement to be compliant.
- Future regression gate: video identity and publisher -> WP shortcode create -> draft WordPress rendered view checks exact per-ID `<iframe src=".../embed/...">` -> publish -> **fresh post-publish rendered view same iframe checks** -> archive exact final source -> ledger. Repair any raw URL-only oEmbed to provider-supported shortcode and retest. Preserve separate paragraphs between embeds and correct captions.
- Final status: **PUBLISHED — THREE WORDPRESS RENDERED YOUTUBE IFRAME PLAYERS CONFIRMED; EXACT GITHUB ARCHIVE VERIFIED; GRAPHICAL PLAYBACK AND RIGHTS/STYLE QA PENDING.**
