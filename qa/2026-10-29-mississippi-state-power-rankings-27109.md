# Mississippi State Power Rankings (2026): Source, Media and Publication QA

## Publication and integrity

- Article title: **State Power Rankings: Top 3 Largest Data Center Projects in Mississippi (2026)**
- Post ID **27109**, WordPress status `publish` verified by fresh `posts.get(context=edit)` and `posts.get(context=view)`.
- Live link: https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-mississippi-2026/
- Chronological state series next after Minnesota; prior state-rankings WordPress title search and GitHub search revealed no Mississippi ranking. Existing xAI standalone article is relevant but nonduplicate and linked.
- Categories: Data Center News 5177360, Energy 1212, Technology 6, Trending News 27318186. Natural excerpt, SEO description and Jetpack publicize message saved; none mention media count, source process, "verified embeds", or production status. Appropriate editorial disclaimer, original 5,000-sat QR ID 24043, exact donor wallet and exact Editor's Note retained.

## Ranking definitions and credible record

Method: Individual **Mississippi-sited projects with publicly attributable *maximum published project-associated site power figures***, not operating-load ranking. Disclose metric type, timeline, discrepancies and confidence. This deliberately includes projected supply capacity and a tracker-only figure, so ordinal positions remain provisional; never present as a like-for-like critical IT or metered-load comparison.

**#1 AVAIO Digital Taurus, Brandon**
- Developer primary https://www.avaiodigital.com/developments/brandon-mississippi states **1,036 MW long-term baseload supply concept**, split into **536 MW proposed grid supply and 500 MW proposed behind-the-meter baseload generation**, at 329-acre site. Do not confuse the two power supply sources with *additional* server demand, or assume permits for BTM plant.
- First phase separately specified as **116 MW**, developer September 10 2025 company release https://www.avaiodigital.com/updates/avaio-digital-breaks-ground-on-6-billion-brandon-data-center-campus-leading-mississippi-contractor-begins-site-work . August 2025 special Entergy service agreement for initial phase reported by developer; precise signed MW terms not accessible. Developer targets first occupancy **August 2027**, while original report projected H1 2027; not a guaranteed operating date.
- Independent Clarion Ledger report published October 11 2026, via accessible syndication https://www.aol.com/articles/whats-progress-6-billion-brandon-095525000.html : reporter visited site September 24, saw clearing and machinery but no completed buildings or visible construction materials. AVAIO did not respond to request for comment at time. Do not infer project canceled or no underground work.
- State MDA https://mississippi.org/news/avaio-digital-to-locate-6-billion-data-center-campus-in-rankin-county/ gives $6 billion *announced investment* / 60 direct jobs, not dollars already spent or existing occupied facility.

**#2 Compass Meridian**
- Mississippi government January 2025 and Mississippi Today reporting: proposed 8 halls, $10 billion capital including tenants' IT, approx **500 MW original Mississippi Power supply plan**, https://mississippitoday.org/2025/01/09/meridian-data-center-mississippi-compass-tate-reeves/ .
- **Developer current portfolio** explicitly reports **320 MW**: https://www.compassdatacenters.com/data-center-markets/ . 500 is an **earlier maximum supply plan**; 320 is the latest company marketed campus figure. Neither is commissioned 2026 site draw, and they MUST NOT be added or double-counted as two campuses. This is the most material rank caveat: if user wants rankings by latest marketed designed MW only, AWS Canton may overtake Compass.
- Mississippi PSC February 7 2025 special service contract press release https://www.psc.ms.gov/sites/default/files/2025-02/PressReleaseFeb2025.pdf .
- Mississippi Development Authority April 22 2026 Corderill announced **$100M tenant-equipment investment**, at least 20 direct jobs, not evidence that entire 320/500 MW online https://mississippi.org/news/technology-company-corderill-investing-at-least-100-million-in-meridian/ . MSU project kickoff https://www.msstate.edu/newsroom/article/2025/01/msu-other-state-leaders-welcome-high-tech-powerhouse-compass-datacenters .

**#3 AWS Canton**
- Mississippi Today reported Amazon directly confirmed **five buildings operating** in June 2026, with another five or more planned at Canton; Amazon facilities Ridgeland, Vicksburg, Clinton are geographically separate and not aggregated. https://mississippitoday.org/2026/06/09/amazon-data-centers-mississippi/ .
- Secondary tracker datacenter.fyi site https://www.datacenter.fyi/public-record/amazon-madison-mega-site-4fb34373 lists **341 MW power capacity**, but no primary published Canton utility MW or metered/IT MW. Its state-level index https://www.datacenter.fyi/state/ms also references **476.991 MW** under an Amazon application. These potentially conflict and are not resolved by an audited contract. #3 uses the identified 341 MW **as provisional secondary-source reported capacity only**; do not call it 341 MW currently operating or precise confirmed maximum.
- Entergy SEC six-month filing https://www.sec.gov/Archives/edgar/data/1427437/000006598426000283/etr-20260630.htm reports separate large-customer contracts, precise electricity terms unavailable publicly. Mississippi Today tax valuation dispute https://mississippitoday.org/2026/08/26/data-centers-amazon-madison-taxes/ .

**Important exclusion: xAI Southaven**
- $20B MACROHARDRR investment MDA Jan 8 2026 https://mississippi.org/news/tech-leader-xai-investing-more-than-20-billion-in-southaven/ . Quoted ~2GW **combined regional Colossus compute** including Memphis TN and Southaven MS, NOT a validated 2GW facility load in Mississippi. Official regional https://www.spacex.com/Mid-South confirms campuses collectively >2GW. Site record https://signaldata.org/ms/data-centers/projects/xai-southaven-macrohardrr/ says standalone Mississippi grid MW unestablished. Nearby Southaven gas turbine yard is separate **power generation**, not same as computing load. Previous internal article https://bitcoinversus.tech/2026/09/24/xai-builds-toward-2-gw-of-ai-compute-in-mississippi/ is linked and contextualized with geographic caveat.
- **False geography confound flagged**: Some secondary listing accidentally presents Corscale's Midwest Digital Gateway 312MW as Canton, Mississippi. Official https://www.mdgcanton.com/ says **Canton, Stark County, OHIO**; must never count toward Mississippi. No false Echelon / Compass conflations in this article.

## Featured cover

- Created an **original cinematic anime editorial** of a hypothetical new data center campus, high-voltage switchyard and forest at sunset, not an existing Mississippi campus photo. Generated file converted with PIL to **exact 1200×630** JPEG with cropping; securely attached via WordPress `media.create(file=...)` to the user's own site.
- WordPress media ID **27105**, `media.get` returned **1200×630**; verified in draft and final post `featured_media:27105`.
- As a newly generated original cover, there is no third-party photo licensing issue. Cover not repeated inside article body. Correct labeled as anime editorial image and hypothetical site, no text overlay. Minnesota previous cover was documentary landscape photo, suggesting next anime style in rotation; the entire authoritative last-five cover rotation sequence wasn't externally audited.
- Source generated image file /mnt/data/mississippi_state_power_rankings_2026_cover_1200x630.jpg stays in working container; WordPress uploaded attachment has the final bytes. No font files shared.

## Media distribution and video authenticity

Each rank contains *its own* relevant real published-video source in a native Gutenberg `wp:shortcode` using `[youtube https://www.youtube.com/watch?v=...]`, preventing the Maine `core/embed` fallback-to-link defect. **All three YouTube IDs originated from publishers or project owners' actual project-specific pages**, not invented queries.

- **#3 AWS Canton**: `8ORZUXIVyKw` — Madison County Economic Development Authority project-site **Construction Milestone** video identified by source site https://madisonmegasite.com/ . MCEDA site presents actual YouTube thumbnail and categorizes this video under AWS site-development content. Embedded in AWS ranking section. The actual video player does not prove a particular MW or hall commissioning date.
- **#2 Compass Meridian**: `UJpAwmVSRYk` — official **Compass Datacenters** film “From Railroad Hub to Digital Corridor: Meridian's Next Chapter,” directly linked from the developer's Meridian listing https://www.compassdatacenters.com/data-center-markets/ . Additional source image ID **27107** of actual Jan 2025 welcoming event from Mississippi State University / Sarah Kirk, credited in article. Original image copyright status was not established from source; editorial reproduction rights pending.
- **#1 AVAIO Taurus**: `il9NhMmp21g` — independent **LandGate**, “This Week in Data Center News,” September 15 2025; source https://www.landgate.com/news/this-week-in-data-center-news-9-15-25 explicitly includes a segment on AVAIO's Taurus groundbreaking. This is a multi-story roundup, NOT a video produced by AVAIO; article labels it correctly. Additional official AVAIO developer building rendering ID **27106**, directly sourced from https://www.avaiodigital.com/developments/brandon-mississippi and captioned *concept rendering, not completed construction*. Designer/news permissions not independently established; review fair-use/permission/replace if needed.
- In-story media count: **3 actual rendered YouTube iframe players plus 2 actual project-associated images** = **5**, excluding featured cover and original donation QR. Each source distinct, relevant, ranked in correct corresponding heading section with intervening text and meaningful captions. No original diagrams added.

## Prepublication / postpublication regression checks

- WordPress created draft post **27109**, checked raw Gutenberg `posts.get(context=edit)` and public-style server HTML `posts.get(context=view)`.
- At draft stage WordPress rendered exactly **3** `<iframe class="youtube-player">` tags with exact `https://www.youtube.com/embed/8ORZUXIVyKw`, `/UJpAwmVSRYk`, and `/il9NhMmp21g`, rather than plain raw links. Two in-story image classes `wp-image-27106` and `wp-image-27107` also rendered. Per-ranked-section source-video check passed.
- Post status updated draft -> publish after QA gate. **Fresh, independent WordPress `posts.get(context=edit)` and `posts.get(context=view)`** again verified status publish, same exact 3 rendered player iframe URLs, both images, featured image and footer. Thus no WordPress server-rendering embed bug occurred.
- **Limitation: actual Play-button interaction / YouTube stream playback / responsive desktop-mobile GUI screenshots not available**; preserved iframe HTML only proves WordPress generates player elements, not successful third-party playback inside browser. Do not claim verified real playback.
- Editor's Note exact initial text “We volunteer daily to ensure the credibility of the information on this platform is Verifiably True.” and 5,000 sats address `3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb`, original QR 24043, exact financial disclaimer preserved. Banned words `unusual`, `unusually`, `strange` absent. 27 inline source/internal noun-linked anchors.
- SEO description, natural teaser and Jetpack publicize message are reader-facing prose and intentionally omit technical publishing checklist terms.
- GitHub final Gutenberg archive path `archive/2026/10/27109-state-power-rankings-top-3-largest-data-center-projects-mississippi-2026.gutenberg.html`, commit **8cbfded9059e6dfb0ddc6d15d87b46988a060b85**, blob **d9d76fbf7be812368550a0d4a361477f62e41e58**.
- GitHub archive fetched back and compared character-by-character to *final published WordPress edit source*: **20,942 / 20,942 exact equality TRUE**.

## Error fingerprints / learning rules

- `MS_27109_XAI_CROSS_STATE_GW`: statewide data-center rankings misattribute combined Memphis TN + Southaven MS ~2GW to one Mississippi facility. Must check site-specific utility service rather than quote regional compute cluster.
- `MS_27109_AVAIO_STACK_VS_IT`: AVAIO 1,036 MW = future grid 536 + speculative behind-the-meter 500 supply, not deployed 1,036 MW of computing; phase 1 just 116, status cleared land 2026. Always type-tag power and stage.
- `MS_27109_COMPASS_REVISION`: state Jan 2025 500 MW supply figure differs from company's current 320 MW campus design; print both with chronology and do not hide current lower number in ranking.
- `MS_27109_AWS_SECONDARY_CONFLICT`: 341 and 476.991 reported by same third-party records, without independently accessible official electric-service document; explicit uncertainty and ranking provisional. Future source-based replacement if audited figure public.
- `MS_27109_CANTON_STATE_CONFLATION`: Corscale Midwest Digital Gateway is Canton **Ohio**, not Mississippi, verified against developer domain. Never infer state from city name alone.
- `MS_27109_EMBED_FALLBACK`: native WP supported YouTube shortcode; inspect rendered HTML both before/after publish, must contain real <iframe> and exact ID per ranked entry. A source URL is not an embed.
- `MS_27109_COVER_ANIME`: original cover created at precise 1200×630 and uploaded as WordPress media, satisfying anime style if previous state was photo. Global rotation audit not fully confirmed.
- `MS_27109_IMAGE_RIGHTS`: Original cover rights clear; Mississippi State photo and AVAIO concept image copyright reuse permissions pending. Attribute sources and consider permission/CC substitutes; no blanket claim of rights-cleared status.
- `MS_27109_PUBLISHER_META_STYLE`: Excerpt, SEO and social copy lead with project updates, don't summarize media count or editorial steps. PASS.

Final status: **PUBLISHED — THREE PER-RANK WORDPRESS HTML VIDEO PLAYERS AND EXACT GITHUB ARCHIVE VERIFIED. ACTUAL BROWSER PLAYBACK, GUI MOBILE/DESKTOP AND THIRD-PARTY IMAGE REUSE RIGHTS REMAIN PENDING.**
