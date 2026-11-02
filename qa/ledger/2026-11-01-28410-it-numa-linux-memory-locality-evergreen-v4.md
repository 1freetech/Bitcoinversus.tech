# BitcoinVersus.Tech — Recursive Editorial Learning Ledger v4.0
## 2026-11-01 — NUMA memory locality, evergreen IT post #28410

### Identity, publication and editorial purpose
- **Published headline:** What Is NUMA? Why Linux Servers Run Slower When Memory Is on the Wrong Node
- **Date/category:** November 1, 2026; Information Technology (WordPress term ID 5812).
- **Published post ID and URL:** 28410; https://bitcoinversus.tech/2026/11/01/what-is-numa-linux-server-memory-locality-cpu-node-numactl-explained/
- **Verified WordPress checks:** posts.create as draft; posts.get edit and view; posts.update status publish; posts.get published view; posts.list with published slug. Each returned correct ID, saved blocks and published status, with full expected HTML content.
- **Independent public page:** external web open returned inaccessible. No claim of verified browser appearance, real YouTube playback or mobile layout.

### Duplicate review and journalistic sources
- **WordPress search:** queried NUMA, non-uniform memory, PCIe bifurcation, IOMMU, DMA remapping, MTU and server memory terms. No dedicated NUMA explainer was found. An already-published BMC/Redfish lesson #21820 ruled out an overlapping initial candidate; the dedicated NUMA topic was then chosen.
- **GitHub search:** "NUMA memory locality" returned passing references in prior Intel inference and server FRU articles, but no dedicated standalone NUMA explainer. GitHub archive search is not a guarantee of exhaustive content coverage back to 2023.
- **Primary Linux kernel docs:** https://docs.kernel.org/admin-guide/mm/numa_memory_policy.html — memory placement policies, strict bind, preferred fallback, interleaving; do not equate cpusets with NUMA memory policies.
- **Primary Ubuntu server guidance:** https://ubuntu.com/server/docs/explanation/performance/perf-tune-affinity-numa/ — `lscpu -e=CPU,NODE,SOCKET,CORE`, `numactl --hardware`, and NUMA node vs physical socket distinction.
- **Red Hat RHEL 10 documentation:** https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/monitoring_and_managing_system_status_and_performance/configuring-an-operating-system-to-optimize-cpu-utilization — relative costs and placement cautions.
- **Red Hat training video #1:** Official Red Hat Developer intro to NUMA programming: https://developers.redhat.com/videos/numa-programming-red-hat-enterprise-linux-6-pt-1-introduction-numa ; canonical video https://www.youtube.com/watch?v=YXYw8I8ZVYw; dated historical RHEL 6 education, not current live NUMA benchmark.
- **Red Hat training video #2:** Red Hat engineers Don Zickus and Joe Mario performance-placement presentation: https://developers.redhat.com/blog/2013/08/27/numa-hurt-app-perf ; video https://www.youtube.com/watch?v=I89_3Cq7oiY; historical performance debugging talk.
- **Cautions:** NUMA affinity may help a latency-sensitive workload only where measured node locality is the bottleneck; strict mem bind may fail when the specified node lacks memory; don't present automatic placement or pinning as guaranteed speedup. Node-to-socket ratio varies.

### Media and cover QA
- **Reporting length:** 327 words excluding the two video captions, schematic caption and required footer.
- **Four contextual internal links:** CPU cache, Linux virtual memory, Linux page cache, PCIe direct memory access. Primary kernel/Ubuntu/Red Hat sources linked separately.
- **In-body media count: 3 (cover/QR excluded).**
  1. Public-domain NUMA architecture diagram by Moop2000 on Wikimedia Commons, WordPress media #28398 (1280×794). Original source: https://commons.wikimedia.org/wiki/File:NUMA.svg ; public-domain license verified from Commons description page. Caption credits author and warns not all sockets correspond to one NUMA node.
  2. Red Hat Developer intro video, YouTube `YXYw8I8ZVYw`, saved as native Gutenberg oEmbed and confirmed as actual `youtube.com/embed/` iframe in published WordPress rendered HTML.
  3. Red Hat placement-troubleshooting video `I89_3Cq7oiY`, same native embed proof. Both have accurate after-video italicized captions and an intervening prose paragraph.
- **Exactly one featured cover #28399**, source-generated editorial image cropped by WordPress to exact 1200×630. Physical server dual CPU sockets and DIMMs in focus, no text overlay and no people. Descriptive alt confirms conceptual artwork, not documentary photography.
- **Footer verified:** The exact approved Editor's Note, original donation QR image #24043, 5,000 sats wallet address and instructions, financial disclaimer, correct ordering, no discontinued X promotional footer. Saved and published HTML checks passed.
- **Metadata:** Informational headline, excerpt, custom SEO title and description, Information Technology category. WordPress live slug lookup confirmed permalink.
- **Unverified:** actual video playback through browser UI, desktop/mobile screenshots, direct HTTP checks of each internal link, independent image visibility; no audience/thumbs data.

### Chart selection methodology — all 40 evaluated, none warranted
- **Question:** explain topological location (CPU group, memory bank, cross-node link) and a safe troubleshooting workflow, **not** a dataset with measured latency differences.
- **Source protocol:** https://github.com/1freetech/SmartChart/blob/main/docs/chart-selection-protocol-v2.md (full 40-style historically grounded catalog).
- **Reviewed all forty style families and exemplars**, including lines/steps, bar/stacked/percent/grouped columns, dumbbell/slope/bullet/waterfall, histograms/boxplots/violins/densities, scatter/bubble/hexbin/heatmaps, pie/donut/treemap/waffle/sunburst, Sankey/funnel, control/gauge, Gantt/calendar, radar, choropleth/symbol maps. No real observational time series, samples/distribution, comparable groups, flows, performance measurements, ratios, dated process phases, or numeric map fields exist in this article's sourced facts.
- **Top 3 considered:** (1) **architectural schematic — selected** (not a statistical chart), because topology/relationship is the actual evidence; (2) vertical bars of measured local/remote latency — rejected, since no common measured benchmark or reproducible latency samples supplied; (3) Sankey of hypothetical cross-node traffic — rejected, since no traffic volume, count, or pathway measurements supplied.
- **Rule applied:** Do not fabricate performance data to justify a chart. Correct conceptual diagram plus source-backed official videos satisfy embed/media requirements and reader understanding.

### Scoring — internal editorial judgment, not engagement
- Accuracy/source verification: 25/25 (kernel/Ubuntu/Red Hat plus sober command safety).
- Originality/newsworthiness: 14/15 (evergreen topic, no duplicate standalone article found).
- Technical clarity: 15/15 (NUMA node vs socket, placement, policy, failures).
- Media relevance/function: 13/15 (public-domain schematic plus 2 Red Hat native iframes; playback not independently tested).
- Cover/visual method: 9/10 (exact cover size, diagram licensed and topic specific).
- Internal links/SEO: 9/10 (4 relevant internal links; destination HTTP status not checked).
- Published HTML/formatting QA: 7/10 (WordPress readback yes, independent browser no).
- **Total 92/100, below 95 target.** Do not inflate score to compensate for missing video playback and responsive visual QA.

### Three next-cycle improvements
1. Continue pre- and post-publication WordPress iframe verification for each official video; supplement with actual device playback if an accessible browser becomes available.
2. For evergreen IT topics with no numeric observational data, pick a sourced **topology diagram** rather than hypothetical bars, with 40-chart audit logged.
3. Treat operational commands as testable and potentially disruptive: distinguish diagnostic read-only commands from resource-constraining changes, and add first-party caveats.

**Evidence classification:** WordPress stored/rendered records, public-domain Commons license, technical documentation and documented commands are verifiable. The benefit of specific NUMA pinning is workload-dependent and not measured here. User style/editorial rules are preferences, not observed outcomes. No engagement data accessed.
