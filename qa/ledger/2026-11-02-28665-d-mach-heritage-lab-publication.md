# Publication audit — D-MACH heritage lab — November 2, 2026

## Identity and status
- WordPress post **#28665**, status: `published_unverified`.
- Article: https://bitcoinversus.tech/2026/11/02/manchester-met-d-mach-micro-ct-cultural-heritage-lab-opens-2026/
- Category: Culture/Technology following confirmed Canon Sports/Technology story #28627. WordPress category IDs [1098, 6, 27318186].
- Gutenberg archive: `archive/2026/11/28665-manchester-met-d-mach-micro-ct-cultural-heritage-lab-opens-2026.gutenberg.html`.
- Standing authorization from user "Post next story now"; publication response confirmed id, status and URL; separate WP edit and view readbacks confirmed status and block content.

## Claim ledger
| Claim type | Claim | Source | Date | Limitation |
|---|---|---|---|---|
| verified_fact | RICHeS announced D-MACH now open for access at Manchester Met PrintCity; Oct 14 was formal launch celebration | https://www.riches.ukri.org/news-and-events/celebrating-the-launch-of-the-centre-for-digital-modelling-and-analysis-for-cultural-heritage-riches-investment/ | Nov 2 2026 | Public launch and opened access do not guarantee unlimited or free use |
| source_claim | AHRC through RICHeS contributed nearly £1 million infrastructure investment | https://museumsandheritage.com/advisor/posts/manchester-met-launches-1m-centre-for-digital-analysis-of-heritage-objects/ ; https://dmach.mmu.ac.uk/2024/10/18/d-mach-is-funded-through-the-ukri-riches-scheme/ | Oct 27 2026 and Oct 18 2024 | Award not cost per scan; event listing separately described a £1.6m broader facility, so no arithmetic combining these |
| verified_fact | Micro CT relies on multiple X-ray projections and attenuation-dependent 3D reconstruction; university equipment source is 160 kV and 75 W | https://dmach.mmu.ac.uk/2026/07/06/mmus-new-ct-scanner-the-neoscan-nxl/ | July 6 2026 | Different specifications: kV electrical potential, W power; do not compare as like units |
| source_claim | UKRI case study: CT of pottery reveals pores and bubble in handle | https://www.riches.ukri.org/news-and-events/celebrating-the-launch-of-the-centre-for-digital-modelling-and-analysis-for-cultural-heritage-riches-investment/ | Nov 2 2026 | Demonstration image, not evidence that every artifact can be scanned |
| source_claim | Portland Basin Museum objects scanned and reproduced as 3D-print replicas; Braille embedding is under test | same UKRI November 2 announcement | Nov 2 2026 | Testing is not a validated accessibility impact study |

## Duplicate prevention
- WordPress exact-content searches: "D-MACH heritage", "Neoscan NXL", "Portland Basin micro CT": **0 matching posts** immediately before publication.
- GitHub archive search in `1freetech/Bitcoinversus.tech`: "D-MACH Manchester" and "Neoscan micro CT": **0 matching files** before publication.
- Other site coverage of museums, artifacts and digitisation is linked context but separate events.
- Idempotency identity: `manchester-met-d-mach-micro-ct-cultural-heritage-lab-opens-2026`; avoid duplicate if a later retry is attempted.

## Editorial prepublication and media checks
- Reporting body: **361 words** excluding captions, headings, metadata and footer. Pass.
- Relevant contextual internal links: **4**. Pass via WordPress HTML and readback; destinations identified by targeted WordPress search.
- Two distinct sourced in-story images: IDs **28661** (800 × 600 lab photo) and **28663** (1024 × 714 CT ceramic composite), each credited to Manchester Metropolitan University / UKRI RICHeS with immediately following italic caption. Pass source import, media metadata, Gutenberg block save, and WordPress view-context HTML rendering. No video element in this story; playback **not applicable**.
- Third university scanner source image failed import with HTTP 403; excluded and **not counted**. The error is a source restriction, not evidence that image is broken on the university site.
- Featured cover: **28664**, original site photograph imported via a resizing proxy with exact **1200 × 630** JPEG metadata, descriptive alt text, credited Manchester Met/UKRI. WordPress featured_media set to 28664 and verified by separate post readback. This image was prepared from the official lab image, not claimed as a newly photographed asset.
- Footer: fully italic Editor's Note using previously recovered canonical approved wording; original QR asset **24043**, 5,000 sats and exact reference Bitcoin address, approved disclaimer; order preserved. Readback passed. Original QR *scan and destination decoding not independently tested*.
- Prohibited words check: passed.
- Saved Gutenberg: passed. WordPress `context=view` returned server-rendered markup with both in-body images, four internal links and footer: passed HTML check.
- Public screenshot service: returned `status=ready`, `capture_shows=site`, visibility `public`. Screenshot pixels and actual mobile/browser image load were not independently inspected.
- Outstanding QA: inspect actual public desktop/mobile page, cover crop, images/captions and overflow; scan donation QR with a wallet/decoder. No playback check required.
- Publication evidence sufficient for `published_unverified`, not `published_verified`; no 95+ score claimed.

## SmartChart all-40 review
- Machine-readable catalog reviewed: `1freetech/SmartChart/atlas/catalog.json` version 2.0.0 contains 40 chart types.
- Observations: nearly £1 million AHRC investment, 160 kV voltage, 75 W source rating, event dates. These are isolated values with **different units and roles**. There is no defensible comparative, time-series, distribution, relational or flow dataset.
- The most helpful visual is the officially sourced ceramic X-ray / reconstruction image, because it shows the image-processing result without pretending isolated numbers are a comparable statistical distribution.
- Three most plausible forms **considered and rejected**: single-category bar (no comparison or proper denominator); historical timeline (dates establish milestones but not a quantified trend); Sankey flow (physical workflow exists but has no measured flow magnitudes). Thus zero eligible statistical chart candidates and no forced top-three numerical plot ranking.
- Dataset provenance from cited UKRI and MMU sources; methodological constraints from SmartChart catalog and its source profiles, not from invented data.

1. Line chart (`line`): rejected — requires a repeated temporal series; release dates are not comparable measurements.
2. Area chart (`area`): rejected — requires a repeated temporal series; release dates are not comparable measurements.
3. Stacked area (`stackedArea`): rejected — requires a repeated temporal series; release dates are not comparable measurements.
4. Step chart (`step`): rejected — requires a repeated temporal series; release dates are not comparable measurements.
5. Candlestick (`candlestick`): rejected — requires a repeated temporal series; release dates are not comparable measurements.
6. Sparkline (`spark`): rejected — requires a repeated temporal series; release dates are not comparable measurements.
7. Slopegraph (`slope`): rejected — requires a repeated temporal series; release dates are not comparable measurements.
8. Bump chart (`bump`): rejected — requires a repeated temporal series; release dates are not comparable measurements.
9. Horizontal / vertical bar (`bars`): rejected — requires common-unit quantities across comparable categories; funding, voltage and wattage use different dimensions.
10. Grouped bars (`groupedBars`): rejected — requires common-unit quantities across comparable categories; funding, voltage and wattage use different dimensions.
11. Stacked bars (`stackedBars`): rejected — requires common-unit quantities across comparable categories; funding, voltage and wattage use different dimensions.
12. 100% stacked bars (`percentBars`): rejected — requires common-unit quantities across comparable categories; funding, voltage and wattage use different dimensions.
13. Lollipop (`lollipop`): rejected — requires common-unit quantities across comparable categories; funding, voltage and wattage use different dimensions.
14. Dumbbell (`dumbbell`): rejected — requires common-unit quantities across comparable categories; funding, voltage and wattage use different dimensions.
15. Bullet (`bullet`): rejected — requires common-unit quantities across comparable categories; funding, voltage and wattage use different dimensions.
16. Waterfall (`waterfall`): rejected — requires common-unit quantities across comparable categories; funding, voltage and wattage use different dimensions.
17. Pareto (`pareto`): rejected — requires common-unit quantities across comparable categories; funding, voltage and wattage use different dimensions.
18. Tornado (`tornado`): rejected — requires common-unit quantities across comparable categories; funding, voltage and wattage use different dimensions.
19. Histogram (`histogram`): rejected — requires a sample of individual observations.
20. Box-and-whisker (`boxplot`): rejected — requires a sample of individual observations.
21. Violin (`violin`): rejected — requires a sample of individual observations.
22. Dot / beeswarm (`dot`): rejected — requires a sample of individual observations.
23. Density curve (`density`): rejected — requires a sample of individual observations.
24. Scatter plot (`scatter`): rejected — requires paired quantitative records.
25. Bubble chart (`bubble`): rejected — requires paired quantitative records.
26. Heatmap (`heatmap`): rejected — requires paired quantitative records.
27. Hexbin plot (`hexbin`): rejected — requires paired quantitative records.
28. Pie / donut (`donut`): rejected — requires measured subparts of one defined total.
29. Treemap (`treemap`): rejected — requires measured subparts of one defined total.
30. Waffle (`waffle`): rejected — requires measured subparts of one defined total.
31. Sunburst (`sunburst`): rejected — requires measured subparts of one defined total.
32. Sankey (`sankey`): rejected — requires origin-destination flow magnitudes.
33. Funnel (`funnel`): rejected — requires origin-destination flow magnitudes.
34. Gantt / timeline (`gantt`): rejected — requires valid task, process or monitored performance observations.
35. Calendar heatmap (`calendar`): rejected — requires valid task, process or monitored performance observations.
36. Control chart (`control`): rejected — requires valid task, process or monitored performance observations.
37. Gauge (`gauge`): rejected — requires valid task, process or monitored performance observations.
38. Radar / spider (`radar`): rejected — requires valid task, process or monitored performance observations.
39. Choropleth map (`choropleth`): rejected — requires geographically comparable metric values.
40. Proportional-symbol map (`symbolMap`): rejected — requires geographically comparable metric values.

## Recursive learning events, ranked
1. **Verified:** An official university image URL returned HTTP 403 to WordPress remote importer; UKRI's two official images imported, retained source identity, and rendered in WordPress HTML. **Prevention:** batch image-import checks before publication; count only successfully attached assets, choose alternative official source if blocked, verify saved media IDs.
2. **Verified:** The image-proxy-cropped source lab photograph imported as exact **1200 × 630**, solving the native aspect-ratio mismatch without misrepresenting source resolution. **Prevention:** verify both native dimensions and featured-media ID on independent readback; confirm crop on desktop/mobile visual inspection whenever accessible.
3. **Proposed hypothesis:** Distinguishing funding award, electric field rating and source power avoids misleading cross-unit numerical graphics. **Experiment:** review next ten culture/technology stories for heterogeneous numbers and track chart-data eligibility decisions. Baseline: this article has no defensible comparative data; metric: factual chart suitability and editorial corrections needed, not mere chart presence.

All checks not explicitly supported by evidence remain `unavailable` or `pending`.
