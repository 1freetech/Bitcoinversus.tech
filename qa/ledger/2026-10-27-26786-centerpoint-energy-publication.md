# Publication QA record — CenterPoint capital plan — October 27, 2026

- **WordPress article:** https://bitcoinversus.tech/2026/10/27/centerpoint-70-7-billion-grid-investment-houston-14gw-demand-2026/
- **Post:** 26786, published; direct authoring connection verified status and re-fetched Gutenberg content.
- **Source verification:** CenterPoint's 2026-10-27 Q3 press release and investor events page, supplemented by its 10-Q and Utility Dive. Separate projected 14 GW load demand by 2030 from confirmed energization. State that the $70.7B plan covers gas as well as electric assets, with $51.5B allocated to electric infrastructure.
- **Duplicate check:** live WordPress 'CenterPoint' search returned zero specific stories; repository search for company name returned zero.
- **Featured cover:** media ID 26785, exact 1200 x 630 px, unique detailed **Anime Editorial Artwork** rotating after the prior realistic cover; artwork is fictional editorial illustration, not an actual project photograph.
- **In-story media:** two distinct topical YouTube videos: i101 archive of 2026 Q2 CenterPoint earnings call (`M3eXecjw7iY`); KPRC grid resiliency report dated 2025-11-17 (`FGm7GEQNBPk`). Both captions label historical context and do not misstate them as video from the Oct 27 announcement.
- **WordPress rendered-HTML fetch-back:** two real YouTube embed iframes, not link fallbacks; QR image embedded; 3 direct primary-source links and 3 contextual internal BitcoinVersus links. Article preflight 363 words including captions, before editor note and QR, no prohibited words.
- **WordPress saved Gutenberg fetch-back:** archived unmodified final post HTML/blocks in [GitHub archive](../../archive/2026/10/26786-centerpoint-70-7-billion-grid-investment-houston-14gw-demand-2026.md); GitHub independent fetch-back successful.

## Blocker and regression testing

- **Fingerprint:** `BV-PUB-26786-LIVE-BROWSER-PROOF-UNAVAILABLE`
- **Observed error:** Container-side HTTP GET to the published WordPress URL failed with `NameResolutionError: Failed to resolve 'bitcoinversus.tech'`. Browser screenshot access to the live public page and YouTube actual click-to-play were therefore unavailable in this run.
- **Root cause:** network/DNS access restrictions in the local verification environment, not an observed media breakage.
- **Repair/mitigation performed:** Verified WordPress REST rendered view contains both real YouTube `<iframe>` players with exact video IDs and original Gutenberg media blocks; checked cover dimensions and archived the fetched final content. Avoided falsely labeling a markup pass as human playback or desktop/mobile visual QA.
- **Regression test still owed:** Through an authorized desktop/mobile browser, open the live URL at 1440px and 375px, capture cover and both iframe screenshots, click each video to test play, check controls and responsive overflow, then update this QA record. If one fails, repair/replace, re-fetch final Gutenberg and archive the exact final version.
- **Status:** Publication PASS; full-cover dimensions PASS; primary claims and contextual links PASS; media iframe DOM PASS; GitHub archive PASS; desktop screenshot UNTESTED; mobile screenshot UNTESTED; actual video playback UNTESTED.
