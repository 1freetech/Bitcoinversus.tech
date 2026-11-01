# BitcoinVersus.Tech — Recursive Learning News Writer v4.0
## 2026-11-01 | Published WordPress #28318 | Solar–wind monthly EIA crossover

### Publication record
- **Article:** U.S. Solar Outgenerated Wind for Four Straight Months, but Wind Still Leads 2026
- **Date:** 2026-11-01; category Energy (#1212).
- **Public URL:** https://bitcoinversus.tech/2026/11/01/solar-generated-more-electricity-than-wind-four-months-august-2026-eia/
- **Verified WordPress publication:** posts.update(status=publish), posts.get(view), and posts.list(published slug) returned status publish and the same permalink. WordPress HTML contains both distinct sourced chart images, all three captions including QR, the featured-media attachment and correct footer order.
- **External visual limitation:** independent public-browser request failed to access the permalink; no independent screenshot or live chart image inspection is claimed.

### Fresh news peg, original dataset, method
- **Primary source:** U.S. Energy Information Administration, Electric Power Monthly, October 23, 2026, Table 1.1.A, all-sector renewable generation: https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_1_01_a
- **Data release:** October 23, 2026; latest observed month August 2026. These are actual reported monthly generation totals, not the EIA's 2027 capacity forecasts. No future-month values are invented.
- **Original numeric data in billion kilowatthours (BkWh), January through August:**

  | Month 2026 | Solar total, utility + estimated small-scale PV | Wind utility-scale | Solar minus wind |
  |---|---:|---:|---:|
  | January | 24.419 | 44.442 | -20.023 |
  | February | 28.099 | 39.567 | -11.468 |
  | March | 38.416 | 52.359 | -13.943 |
  | April | 40.743 | 49.034 | -8.291 |
  | May | 47.039 | 41.052 | +5.987 |
  | June | 49.241 | 41.707 | +7.534 |
  | July | 51.956 | 31.889 | +20.067 |
  | August | 49.206 | 33.317 | +15.889 |
- **Verified arithmetic:** January–August solar totals 329.119 BkWh; wind totals 333.367 BkWh; wind retains 4.248 BkWh year-to-date lead. Four consecutive months May–August have solar exceeding wind. Solar also overtook wind during some earlier summer periods, so do not call it the first crossover ever.
- **Important measurement asymmetry:** EIA's total solar includes estimated small-scale photovoltaic output; EIA wind is utility-scale. Distinguish capacity GW from electricity actually generated BkWh. These values are not carbon emissions or utility tariffs.

### Archive/duplication checks
- WordPress published searches: 'four months solar wind', 'solar generation wind August 2026', 'solar exceeds wind 2026', 'solar wind July August', and 'EIA renewable generation August'. No dedicated article using the October 23 EIA Jan–Aug monthly 2026 solar/wind crossover was found.
- GitHub 2023–present search: 'solar wind August 2026 generation' returned other solar project content, but no exact new article. Prior story #21450 had discussed the **October 6 EIA capacity forecast** (solar 182/223 GW), which is a different metric from new measured monthly output; the new article does not recycle that story.
- No claim of exhaustive entire GitHub history; text-search coverage is limited to returned results.

### Full 40-chart selection audit
- **Research sources:** All chart styles reviewed in [SmartChart catalog](https://github.com/1freetech/SmartChart/blob/main/atlas/catalog.json), each with documented historic/mathematical precedent and two methodology references, and [Chart Selection Law v2](https://github.com/1freetech/SmartChart/blob/main/docs/chart-selection-protocol-v2.md).
- **All forty considered:** line; area; stackedArea; step; candlestick; spark; slope; bump; bars; groupedBars; stackedBars; percentBars; lollipop; dumbbell; bullet; waterfall; pareto; tornado; histogram; boxplot; violin; dot; density; scatter; bubble; heatmap; hexbin; donut; treemap; waffle; sunburst; sankey; funnel; gantt; calendar; control; gauge; radar; choropleth; symbolMap. The dataset provides a dated temporal variable and two separately measured non-additive quantitative generation series. No OHLC fields, source-to-target flows, geographic locations, distribution of underlying samples, dated milestones, percentage-composition total, or many measured pairs beyond time ordering.
- **Primary editorial question:** In which months did solar generation overtake wind, and did it also win January–August overall?
- **Primary-chart alternatives with source-backed historical justification:**
  1. **Line chart — SELECTED.** Historically used since William Playfair for ordered economic observations; month-ordered EIA quantities and a crossover are most legible as two lines with a shared BkWh axis. Source guidance: [Claus Wilke, Time-series visualization](https://clauswilke.com/dataviz/time-series.html), [Financial Times Visual Vocabulary](https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary). No interpolation beyond straight segments between observed monthly points and no artificial forecasts.
  2. **Grouped vertical columns — REJECTED as primary.** Two monthly measures are commensurable but 16 clustered bars make the exact crossover harder to see; columns may be preferable for only a few disjoint periods.
  3. **Area chart — REJECTED.** Non-additive overlapping filled regions can cover the lower series and encourage magnitude comparisons rather than the month-by-month crossing.
- **Secondary question:** How much did solar lead/lag each month?
- **Secondary-chart alternatives:** (1) **Zero-centered diverging vertical columns — SELECTED**; signed gap has meaningful zero and independent months, so a vertical difference column immediately shows positive and negative months; aligns with comparative-bar historical mathematical use in the Atlas and [Wilke, Visualizing amounts](https://clauswilke.com/dataviz/visualizing-amounts.html). (2) zero-line delta chart — defensible but duplicates the main time trend; rejected. (3) waterfall — invalid here because monthly signed differences are *not* additive intermediate steps in an annual reconciliation; rejected.
- **No horizontal bar chart:** short month labels fit vertically; no long categorical labels.
- **Data provenance and chart verification:** Values transcribed from EIA Table 1.1.A and separately summed; sign of monthly difference and eight-month totals calculated. Both charts label BkWh, observed period, source, and interpretation. Vertical difference chart uses a visible zero line. Color is not the only signal: each bar's sign/position defines whether solar leads.
- **No renderer convenience bonus:** Chart choice followed 40-type research and data roles; two different chart types are used for two different editorial questions, not stylistic rotation.

### Media, cover and content QA
- **Reporting length:** 327 words, excluding captions/footer.
- **Internal links:** Four contextual links to prior reporting on EIA energy demand, the Chart Atlas, DTE's Fish Creek solar facility and Boralex wind activity.
- **In-story media items:** 2 distinct original sourced plots, excluding cover/QR:
  1. WordPress #28313, time-series line: 2026 Jan–Aug observed solar and wind generation; image uploaded 2400×1260 and rendered as WordPress image block with citation caption.
  2. WordPress #28315, zero-centered diverging *vertical* difference columns: solar minus wind BkWh by month; 2400×1260, signed zero baseline and explanatory caption.
- **Cover:** exactly one featured image #28316, 1200×630, original photo/anime-blend editorial art with adult South Asian male engineer working by an inverter, solar panels, and wind turbines. Descriptive alt; no text overlay. Conceptual artwork, not a specific EIA field photograph. New style follows preceding #28266 wordless-comic cover.
- **Footer:** approved italicized Editor's Note, original WordPress QR image #24043, Bitcoin address and 5,000 sat instructions, disclaimer in correct order, no discontinued X promo. WordPress rendered HTML verified.
- **Search/SEO:** accurate title, excerpt, canonical slug, custom SEO description/title, Energy category, article includes directly linked primary EIA table.
- **Video:** No verified directly relevant playable video was used; two actual data visualizations satisfy the 2–10 media requirement without generic visual padding. Do not count cover or donation QR.
- **Validation:** WordPress initial draft save, draft/edit readback, rendered view readback, media.get for dimensions/alt, published WordPress get, published slug lookup all passed. Independent browser blocked; actual image loading at multiple viewport sizes and responsive visual inspection remain unverified.

### Internal quality score — evidence-based editorial assessment
- Accuracy/data verification: **25/25** (primary observed source, signed differences and totals cross-checked).
- Originality/newsworthiness: **15/15** (new observed monthly series, distinct from capacity forecasts).
- Technical clarity: **15/15** (generation vs capacity, two measures' coverage, YTD nuance).
- Media relevance/function: **13/15** (two sourced native image blocks in WP; independent browser unverified).
- Cover/chart quality: **10/10** (exact cover dimensions, researched appropriate line and diverging columns).
- Internal links/SEO: **9/10** (four relevant links, saved metadata; each destination not independently HTTP tested).
- Live formatting QA: **7/10** (WP published rendered view and slug checked; external browser/mobile inaccessible).
- **Total: 94/100, below 95 target**. Independent device/render checks remain open; not a measured audience score.

### Three strongest lessons
1. **Verified improvement:** A temporal crossover should use a time-series line, not the habitual horizontal bar. Source the chart style historically and mathematically from the full forty-style catalog.
2. **Verified improvement:** Secondary visualization should answer a genuinely separate reader question (signed monthly *gap*) rather than repeat the same raw values in a different arrangement. Label the zero line and status.
3. **Open QA:** obtain actual public desktop/mobile screenshots and check image legibility, crop, captions, and primary-link HTTP behavior. Do not claim the external browser test passed until accessible.

### Evidence classifications
- Verified: EIA dated monthly table, calculations, WordPress status/media dimensions and generated markup.
- User preference: 40-chart research, vertical bars when fitting, original covers, media quota and footer/links.
- Hypothesis/uncertainty: weather and capacity utilization explanations are plausible contextual factors, not demonstrated unique causation by this dataset.
- Measured engagement: unavailable; no thumbs-up/down or site analytics accessed.
