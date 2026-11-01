# BITCOINVERSUS.TECH — CHART SELECTION LAW v2.0
Date: November 1, 2026
Status: Standing newsroom editorial guidance for all new articles, rankings, lesson graphics, and revisions.

## Prime directive
**SOURCE → AUDIT ALL 40 → COMPARE ALTERNATIVES → SELECT → RENDER → VERIFY.**
Do not choose horizontal bar charts as a reflex. Do not choose a chart for convenience, aesthetics, media quotas, or because a particular rendering API is already available.

## Source every chart style before choosing
The research inventory is **all forty** chart types and their historical mathematical data relationships, textbook sources, modern interpretation and documented hazards in:
- https://github.com/1freetech/SmartChart/blob/main/atlas/catalog.json
- https://github.com/1freetech/SmartChart/blob/main/docs/chart-selection-protocol-v2.md

Each style already has two scholarly/methodology references in the chart atlas. The `evaluateChartCandidates` function assesses all forty rather than scoring only renderable types. If the relevant chart is not supported by the current browser renderer, use another verified renderer or a table. Never substitute horizontal bars merely for ease. Data *values* and labels must ALSO be independently sourced to primary materials; chart-type references do not establish dataset truth.

## Required per-article chart choice QA
1. State the news question, dataset columns, role of each variable, units, source and exact source date. Distinguish actual, proposed, contractual, estimated, modeled, and forecast quantities.
2. Review the **entire forty-type catalog**, not just bars, lines, and the limited renderable options. Eliminate semantically incompatible forms (e.g., flow charts without flow edges).
3. Record **three candidate styles and why one best answers the reader's question**, or document that fewer than three are valid. Include a no-chart/table alternative.
4. Consider alternative marks by analytical relationship: vertical columns for comparable short independent categories; lines for chronological measurements; step charts for discontinuous regimes; scatter for two measured numeric quantities; distributions for population spread; dumbbells/slope for matched before/after; waterfall for signed component changes; heatmaps for two-dimensional matrices; Sankey for measured flow; Gantt for project timelines; maps for validated geography; stacked/treemap ONLY for provably additive components.
5. **Vertical bars preferred over horizontal when bars are actually the best format.** Use horizontal bars primarily when labels are long or categories cannot be read on the x axis. Do not cycle through chart types without a sound analytical reason.
6. Explicitly reject displays that merge unlike units or statuses. Examples: former mining-site MW, contracted AI IT MW and utility-service MW cannot be added or ranked as equivalent operating power; 25 MW times two planned halls is not a time trend.
7. For every chart write source note, math/aggregation rule, unit/denominator, observed-vs-modeled status, date coverage, scale and zero baseline if bar or area. Verify against the primary dataset and current filings.
8. Review responsive mobile and desktop output and live Gutenberg render; ensure relevant explanatory caption, accessible alt, correct orientation, and no cropped labels. Broken charts trigger Fix → Retest → Replace → Remake.

## Critical examples / corrections
- Nov. 1 AIB/Nebius article: 40 MW retired mine, 50 MW contracted future critical IT load and 65 MW utility agreement are **not the same quantity**. Better: status-labeled table or system diagram; do not generalize to a simple ranking bar chart of those three.
- Nov. 1 EU electricity price article: comparable country €/kWh values can use **vertical** columns; price over multiple years should use an ordered **line chart**; all cost models must show assumptions.
- J/TH actuals + projections: use a historically dated observed efficiency line, distinguish scenario curves and separate unverified chip claims from operating miner measurements.

## Mandatory editorial ledger fields
`chartDecisionQuestion`, `sourceDatasetAndDate`, `measurementUnits`, `datasetStatus`, `all40Reviewed`, `top3ChartCandidates`, `reasonsForRejection`, `chosenChartAndWhy`, `historicalMathReferenceURLs`, `chartDataValidation`, `orientation`, `liveImageEmbedTest`, `knownLimits`.

A failure to source data, audit chart suitability, or validate the selected presentation blocks chart publication. The article itself may still be published with an accurate sourced table when an appropriate chart cannot be verified. Do not invent numeric points or substitute a less accurate chart simply to meet the media quota.

Maintain all v3.1/v4.0 publishing, cover rotation, embed, hyperlink, chart and footer laws unless the user explicitly supersedes a rule. This instruction strengthens chart selection; it does not override unrelated laws.
