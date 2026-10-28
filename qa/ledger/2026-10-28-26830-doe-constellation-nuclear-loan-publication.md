# BitcoinVersus.Tech publication QA — DOE Constellation nuclear uprates — 2026-10-28

- **WordPress post:** 26830; [live article](https://bitcoinversus.tech/2026/10/28/doe-5-billion-constellation-nuclear-uprates-illinois-maryland-pennsylvania-2026/).
- **Final verified archive:** [exact Gutenberg post](../../archive/2026/10/26830-doe-5-billion-constellation-nuclear-uprates-illinois-maryland-pennsylvania-2026.md); GitHub fetched back independently after WordPress publication.
- **Primary source:** [DOE October 27, 2026 announcement](https://www.energy.gov/articles/energy-department-announces-5-billion-loan-boost-nuclear-power-and-help-lower-costs).
- **Corporate corroboration:** [Constellation October 27, 2026 announcement](https://investors.constellationenergy.com/news-releases/news-release-details/constellation-secures-conditional-doe-loan-commitment-5-billion).
- **Factual distinctions:** conditional loan commitment **up to** $5B, not closed or funded; nearly 1.1 GW potential uprates at up to eight specified facilities; 930,000 homes and 10,000 jobs DOE estimates. DOE cost reductions are projected, not demonstrated. Google and Amazon-backed megawatts overlap with planned uprates and were not double-counted.
- **Duplicate check:** live WordPress search for Constellation returned 20 contextual items, none a standalone article on the new loan; GitHub search for Constellation $5 billion loan returned none.

## Media proof and provenance

- Cover attachment **26826**; original 1200×630 richly detailed editorial **Split-Screen Diptych**, generated conceptual art, not an actual photograph.
- In-story image **26827**: Byron nuclear station, Illinois; original 2005 image by Bill Tracey, CC BY 2.0. [Wikimedia Commons source](https://commons.wikimedia.org/wiki/File:Byron_Nuclear_Generating_Station.jpg). Complete credit and license link included inline.
- In-story image **26828**: Limerick Generating Station, Pennsylvania; October 12, 2026 photo by Red0ctober22, CC0. [Wikimedia Commons source](https://commons.wikimedia.org/wiki/File:Limerick_Generating_Station_2026.jpg). Complete credit included.
- In-story quota: exactly 2 distinct licensed site photographs; no original in-story diagrams. Cover and donation QR separately required, not counted.
- 357-word news brief before footer; four contextual internal links, direct original DOE/Constellation links, original QR 24043.
- WordPress post-publication `posts.get(context=view)` confirms two in-story image nodes, captions, donation QR and primary sources in the rendered HTML.

## Error fingerprint, repair and outstanding QA

- **Fingerprint:** `BV-26830-CORPORATE-MEDIA-REMOTE-403`
- **Observed issue:** Constellation's corporate image host responded HTTP 403 to WordPress's remote-media import for Calvert Cliffs and Limerick; no corporate image was saved.
- **Root cause:** Corporate media server denied automated remote fetch, rather than missing image URLs.
- **Fix:** Replaced with independently verified and credited Wikimedia Commons images of Byron and Limerick. Both WordPress media imports succeeded (IDs 26827/26828). Re-checked rendered WordPress content includes images and credits.
- **Regression test:** Test each media URL with the actual WordPress import, not just image search. For 403 failures, replace with distinct relevant public-domain/Creative Commons factual photographs, verify source licenses, captions, responsive image markup, and final post content. Never use screenshots of the original diagrams as replacements.

- **Fingerprint:** `BV-26830-BROWSER-LIVE-VISUAL-QA-UNAVAILABLE`
- **Outstanding:** No desktop/mobile screenshot capture or interactive playback/browser testing possible with the available tools in this run. WordPress's returned HTML contains image markup, but visual load and mobile layout remain unverified; no video used, therefore no playback claim.
- **Future test:** Open [live article](https://bitcoinversus.tech/2026/10/28/doe-5-billion-constellation-nuclear-uprates-illinois-maryland-pennsylvania-2026/) at 1440px and 375px; visually inspect cover, images, captions, spacing, responsive layout and QR rendering; save screenshots. After edits, fetch final content from WordPress again and update GitHub archive.
- **Status:** WordPress publication PASS; source/duplicate check PASS; saved/rendered media markup PASS; cover dimensions PASS; donation QR PASS; final archive PASS; desktop/mobile screenshots NOT TESTED.

## October 28, 2026 — post-publication headline refinement

- **Editorial feedback / fingerprint:** `BV-26830-HEADLINE-UPRATES-JARGON`: technically correct phrase "Nuclear Uprates" is specialist industry vocabulary and was less readable as a general energy-news headline. This is a clarity issue, not an error in the reporting.
- **Former headline:** "DOE Offers Up to $5 Billion for Constellation Nuclear Uprates Across Three States."
- **New headline:** "DOE Offers Up to $5 Billion to Increase Output at Eight Nuclear Plants."
- **SEO title:** "DOE Offers $5B to Increase Output at Eight Nuclear Plants | BitcoinVersus.Tech."
- **SEO description:** "DOE offers up to $5 billion in conditional financing to help increase output at eight existing Constellation nuclear plants across three states."
- **Fix:** Updated original published WordPress post 26830 in place; preserved canonical slug/permalink and unchanged factual article content, featured image, inline original source links, two licensed plant photographs, and 5,000-sat QR footer.
- **Regression test:** For public-facing energy headlines, prefer plain descriptions of the action over specialized terms such as "uprates" when meaning can be preserved; technical words can remain and be defined in the article body. Check published title and SEO via WordPress fetch-back, then update the *existing* GitHub archive using the exact final Gutenberg content; do not create a second article or change the permalink unnecessarily.
- **Verification:** Published WordPress title and archived title/SEO match. Full browser screenshot verification remains pending as documented above.
