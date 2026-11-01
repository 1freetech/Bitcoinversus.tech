# BitcoinVersus.Tech newsroom chart selection and orientation

Date recorded: November 1, 2026
Status: user-directed editorial preference; retain existing mandatory chart/source laws.

## Source of chart-choice methodology

Use the actual [SmartChart repository](https://github.com/1freetech/SmartChart), especially `atlas/catalog.json` and `src/engine.mjs`, as the default chart-choice guide. Consult the *data structure*, analytical intent, chart taxonomy, best-use notes and cautions in the catalog. Its 40 imported atlas examples are **synthetic illustrations**, not citable measurements. User's real source data must drive the chart.

## Orientation preference (not a rigid mandate)

**Prefer vertical columns over horizontal bars when categorical-comparison data supports either equally well** and the number/length of category labels remains readable on mobile.

- Category comparisons with 2–7 concise labels: normally vertical columns, zero baseline, correct units and concise labels. Put a value label above the bars if it improves comprehension and remains legible.
- Many categories, ranked lists with long geographic or project names, or long axes: horizontal bars may remain preferable to keep labels readable. Show reasoning when deviating from vertical preference.
- Time series: use line, area or step charts based on whether changes are continuous, cumulative or discrete. Do not force vertical bars if a line is clearer.
- Two paired measures per group: grouped bar or dumbbell; total plus composition: stacked bar; proportions across groups: 100% stacked bar; numeric distributions: histogram; correlation: scatter; geographic comparison: map when available; hierarchy: treemap; other specialist data: use the corresponding supported SmartChart/atlas type. Do not simulate unsupported chart types as if supported by the engine.
- Rankings are still displayed #7 through #1 in **article narrative**. Charts may sort values by quantitative rank where that is more legible, with honest axis labels and category order.

## Quality controls

1. Verify raw data values, units, denominators, source date and publication status before chart production.
2. Avoid mixing forecast and measured values without visible differentiation. Show consistent baseline and valid scales; bars normally start at zero.
3. Identify normalized relative comparisons as such; say when the endpoint is an upper bound rather than average.
4. Inspect full/phone-size chart and WordPress stored + rendered image. If public rendering cannot be independently checked, disclose this limitation.
5. Put a source and technical caveat in the caption AFTER the image. Verify exact WordPress image attachment, link and alt text.
6. For revised published chart, preserve other Gutenberg blocks using `post-sections.replace`, and update both GitHub article archive and QA ledger.

## Applied case

ETH Zurich biohybrid robotics article https://bitcoinversus.tech/2026/11/01/eth-zurich-living-muscle-biohybrid-robots-jump-swim-grip-11x-2026/ switched from horizontal to vertical bars in its 1× versus upper-bound 11× normalized movement-range comparison on 2026-11-01. WordPress chart media: 28268; earlier horizontal media: 28245. Chart was selected using SmartChart's categorical-comparison `bars` classification, not by orientation alone.
