# BitcoinVersus.Tech publication QA — EIA U.S. natural gas record-production outlook — 2026-10-28

- **WordPress ID:** 26843. **Published article:** https://bitcoinversus.tech/2026/10/28/eia-record-natural-gas-production-2026-2027-lng-data-center-power/
- **Final WordPress Gutenberg archive:** [stored and fetched back from GitHub](../../archive/2026/10/26843-eia-record-natural-gas-production-2026-2027-lng-data-center-power.md); WordPress published status, title, featured media and final raw markup fetched back.
- **Primary evidence:** EIA October 6, 2026 STEO: https://www.eia.gov/outlooks/steo/marketreview/natgas.php ; dry gas production 107.64 Bcf/day (2025), 112.20 (2026 projected), 116.13 (2027 projected); LNG gross exports 17.6 (2026 projected), 18.6 (2027 projected); gas share of electricity about 40% and 39%.
- **Recent report:** Reuters October 27, 2026 https://www.reuters.com/legal/litigation/us-energy-firms-produce-record-natgas-2026-global-demand-soars-2026-10-27/
- **Analytical distinction:** Production measured in gas volume per day does not equal plant megawatts, available grid capacity, retail power prices, or realized production. The story explicitly labels all EIA 2026/27 estimates as forecasts.

## Media and archive QA

- **Cover:** media 26840, original 1200×630 Realistic Editorial Photography-style illustration; conceptual composite, not an authentic photograph of the named sites; continuation/reset of five-style rotation after split-screen diptych.
- **In-story media 1:** media 26841, Cheniere Sabine Pass LNG terminal photograph by Quintin Soloviev, 2025, https://commons.wikimedia.org/wiki/File:Cheniere_Sabine_Pass_LNG_Terminal.jpg ; CC BY 4.0, original 3930×2620.
- **In-story media 2:** media 26842, Chehalis natural-gas combined-cycle power plant photo by Steven Baltakatei Sandoval, 2020, https://commons.wikimedia.org/wiki/File:Chehalis_Power_Plant,_September_2020.jpg ; CC BY-SA 4.0 Wikimedia-resized preview 960×640.
- **Two-media quota:** passes with 2 distinct source-credited in-story images; the cover and donation QR 24043 are excluded. No in-story original diagrams. No unverified YouTube/social URLs counted.
- **Styling/content checks:** 337 words before footer including key takeaways and captions, 3 contextual BitcoinVersus archive links, EIA and Reuters inline primary/secondary links. WordPress rendered HTML contains both in-story image nodes, credits, and donation QR.
- **Verified:** Publishing PASS; source facts PASS; full cover dimensions PASS; media markup/credits PASS; archive fetched back PASS.

## Preflight duplicate fingerprint

- **Fingerprint:** `BV-PREFLIGHT-26843-GOOGLE-VOLTUS-EXACT-DUPLICATE-AVOIDED`.
- **Evidence:** First candidate was Google–Voltus Oct 22 PJM virtual power plant deal. WordPress search found prior published post 26225, https://bitcoinversus.tech/2026/10/23/google-voltus-1-gw-pjm-virtual-power-plant-flexible-capacity-2026/ ; GitHub also contained archive/2026/10/26225-google-voltus-1-gw-pjm-virtual-power-plant.md.
- **Root cause:** Earlier news-source lineup did not account for subsequent BitcoinVersus.Tech publication and would have produced a duplicate.
- **Fix:** Abandoned that candidate entirely; researched the next distinct Reuters/EIA energy lead, performed WordPress title/body search and GitHub evidence search for its numbers/subject; published only nonduplicative topic.
- **Regression test:** Every time a lineup is resumed, treat candidates as unverified; search live WordPress plus GitHub for company, headline nouns, unique figures, and primary source before image generation, drafting or posting.

## Verification limitation

- **Fingerprint:** `BV-26843-BROWSER-SCREENSHOT-UNAVAILABLE`.
- **Cause:** No suitable authenticated, visual browser/screenshot tool available in this execution. WordPress rendered HTML proves image elements exist but not that pixels load or layout is correct.
- **Next regression test:** Inspect public article desktop 1440px and mobile 375px, check actual cover, both images, captions, spacing, alt text and QR with screenshots, and rearchive final WordPress source after any adjustment.
- **Status:** Live visual/screenshots UNTESTED, no actual video playback claims (none embedded).
