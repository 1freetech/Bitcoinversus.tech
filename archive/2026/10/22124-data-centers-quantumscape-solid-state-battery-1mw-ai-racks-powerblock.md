---
post_id: 22124
title: "Data Centers: QuantumScape Pushes Solid-State Batteries Into 1 MW AI Racks"
live_url: "https://bitcoinversus.tech/2026/10/08/data-centers-quantumscape-solid-state-battery-1mw-ai-racks-powerblock/"
featured_media_id: 22117
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/quantumscape-powerblock-cover-1200x630-1.jpg"
status: publish
seo_title: "QuantumScape Pushes Solid-State Batteries Into 1 MW AI Racks"
seo_description: "QuantumScape launches QS PowerBlock, a solid-state lithium-metal battery reference design for 800 VDC AI data centers claiming 4× power density, 5× runtime and support for 1 MW racks."
archived_from: WordPress Gutenberg
---

<!-- wp:paragraph -->
<p><strong>QuantumScape is taking its solid-state lithium-metal battery technology out of the EV conversation and putting it directly beside the AI rack.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The company announced <strong>QS PowerBlock</strong> on October 8, a modular in-rack energy-storage reference design aimed at next-generation <a href="https://bitcoinversus.tech/2026/09/20/800-vdc-data-center-working-hardware-power-architecture/"><strong>800 VDC data centers</strong></a>. QuantumScape says the system can deliver <strong>four times the power density and five times the runtime</strong> of the Open Rack V3 benchmark configurations it used for comparison, while supporting the path toward <strong>1 MW AI racks</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The company’s own <a href="https://www.quantumscape.com/quantumscape-announces-qs-powerblock-for-in-rack-energy-storage-in-ai-data-centers/"><strong>launch announcement</strong></a> also says its cells have demonstrated thermal stability above 300°C in third-party and customer safety testing, versus roughly 180°C as the point where conventional lithium-ion cells can enter catastrophic thermal runaway. That is a major claim for any battery designed to sit inches away from expensive AI compute hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=NrPC28BmYnk","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=NrPC28BmYnk
</div><figcaption class="wp-element-caption"><em>QuantumScape CTO Tim Holme and data-center GM Shahar Noy explain why AI racks are turning battery storage from emergency backup into part of the normal power-delivery architecture.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Battery Is Moving Into the Rack</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Traditional <a href="https://bitcoinversus.tech/2026/10/07/data-centers-what-is-ups-battery-backup-grid-generator/"><strong>UPS systems</strong></a> are designed around a familiar job: keep the load alive when utility power disappears long enough for generators, redundant feeds or another source to take over.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>AI changes that job because the load itself is changing much faster. Large GPU clusters can move together between compute-heavy and waiting states, causing rapid power swings that upstream electrical infrastructure may not want to follow directly. In that architecture, a rack-level battery can become a <strong>buffer</strong> between the relatively steady grid and the highly dynamic compute load.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That connects directly to the <a href="https://bitcoinversus.tech/2026/10/07/oseec-015-power-quality-engineering-harmonics-thd-voltage-sags-swells-transients-measurement/"><strong>power-quality problem</strong></a>: voltage sags, transients, fast load steps and recovery behavior matter more when a single rack can approach the power draw of a small industrial facility.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Why 800 VDC Changes the Battery Equation</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The move toward <a href="https://bitcoinversus.tech/2026/09/29/infineon-and-eaton-push-silicon-carbide-into-800-vdc-ai-power/"><strong>800 VDC AI power</strong></a> is partly about current. For the same amount of power, raising voltage reduces current. Lower current can reduce conductor size, resistive losses and the amount of copper required to move enormous amounts of energy through a dense rack.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>QuantumScape is designing PowerBlock around that higher-voltage architecture rather than trying to bolt a conventional low-voltage battery cabinet onto the side. The reference design can be adapted into module, shelf and rack formats and paired with the power electronics already being developed around 800 VDC.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That puts it in the same architectural transition BitcoinVersus has been tracking through <a href="https://bitcoinversus.tech/2026/09/27/abb-infinitus-800-vdc-ai-data-center-power/"><strong>ABB’s 800 VDC system</strong></a>, <a href="https://bitcoinversus.tech/2026/10/06/semiconductors-microchip-navitas-800v-6v-ai-rack-20kw-converter/"><strong>800 V-to-6 V conversion</strong></a> and today’s <a href="https://bitcoinversus.tech/2026/10/08/infineon-27kw-three-phase-psu-ai-server-racks/"><strong>27 kW three-phase PSU</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/QUANTUMSCAPE_Stock/comments/1x0pra3/quantumscape_announces_qs_powerblock_for_inrack/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/QUANTUMSCAPE_Stock/comments/1x0pra3/quantumscape_announces_qs_powerblock_for_inrack/
</div><figcaption class="wp-element-caption"><em>QuantumScape investors immediately focused on the 4× power-density, 5× runtime and &gt;300°C thermal-stability claims—and on the fact that the design will be shown at the Open Compute Project Global Summit.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Four Times the Power Density Means More Compute per Square Foot</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Power density matters because batteries consume the same scarce rack volume that could otherwise hold compute, networking or conversion hardware. If the storage system gets physically larger every time the GPU rack gets more powerful, the battery eventually becomes its own density bottleneck.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>QuantumScape says PowerBlock produced four times the power density of its Open Rack V3 comparison configuration in a demonstration using an expected AI-training workload. The company’s argument is simple: if a smaller battery system can absorb the same power swings, more of the surrounding physical footprint can be devoted to compute.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That fits the broader <a href="https://bitcoinversus.tech/2026/10/04/osdcec-002-data-center-capacity-planning-it-load-pue-rack-density-growth-headroom/"><strong>rack-density</strong></a> race. AI builders are no longer optimizing only chips per server. They are optimizing useful compute per square foot, per megawatt and per cooling loop.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Five Times the Runtime Gives the Grid More Breathing Room</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The second headline number is runtime. QuantumScape says PowerBlock delivered five times the runtime of the benchmark configuration it compared against.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Longer runtime can serve several different jobs depending on the final architecture: ride through a short disturbance, smooth a bursty GPU load, bridge a temporary power shortfall, reduce a peak demand event or buy more time for another source to respond.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is where a battery starts to overlap with the ideas behind <a href="https://bitcoinversus.tech/2026/09/27/huawei-grid-interactive-ai-data-centers-800-vdc/"><strong>grid-interactive AI data centers</strong></a>. The same energy-storage hardware that protects the rack can potentially help the larger facility behave like a more controllable grid load.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=TkUsu-6tdD0","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=TkUsu-6tdD0
</div><figcaption class="wp-element-caption"><em>QuantumScape’s Shahar Noy describes the AI-rack battery as changing from a “spare tire” used only during failure into a “shock absorber” that works continuously against GPU power swings.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Safety Claim May Matter as Much as the Energy Density</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Putting more battery energy inside a rack creates an obvious contradiction: the battery must get closer to the GPUs at exactly the moment the compute hardware becomes more expensive and the power density becomes more extreme.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Conventional lithium-ion systems manage that risk with chemistry choices, cell spacing, enclosures, monitoring, suppression, thermal controls and installation rules. QuantumScape’s pitch is that its solid-state lithium-metal architecture can materially raise the temperature margin before catastrophic failure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.axios.com/2026/10/08/quantumscape-batteries-data-centers"><strong>Axios</strong></a> reports that QuantumScape sees that safety profile as more than an engineering benefit. CEO Siva Sivaram argues that safer batteries could make data centers easier to insure and permit, potentially shortening project timelines where battery-fire risk complicates approvals.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>But This Is Still a Reference Design, Not a Proven Fleet</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The biggest caveat is easy to miss in the headline numbers: <strong>QS PowerBlock is a reference design.</strong> QuantumScape says the results come from prototype testing and modeled system configurations under controlled conditions, with comparisons benchmarked against Open Rack V3.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is meaningful engineering work, but it is not the same thing as thousands of battery shelves operating for years across production AI campuses. Final performance will depend on the product design, system configuration, manufacturing consistency, integration hardware, cooling, control software and real-world duty cycle.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>QuantumScape has also spent years trying to scale its solid-state technology from laboratory cells into manufacturable products. The data-center market may give the company another route to commercialization, but the familiar battery-industry question remains: <strong>can the performance be produced repeatedly, safely and economically at scale?</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/QUANTUMSCAPE_Stock/comments/1x0pt25/qs_powerblock_solidstate_energy_storage_for_ai/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/QUANTUMSCAPE_Stock/comments/1x0pt25/qs_powerblock_solidstate_energy_storage_for_ai/
</div><figcaption class="wp-element-caption"><em>The second major community reaction is more revealing: excitement about the hardware is immediately followed by questions about manufacturing scale and whether the rack design can move from demonstration to volume deployment.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Why AI May Be a Better Early Market Than a Car</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An EV battery has to survive vibration, crash loads, weather, fast charging, years of road cycling and enormous automotive qualification programs while remaining cheap enough for mass-market vehicles.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A data-center battery faces a different set of constraints. It can live in a controlled indoor environment, be serviced by trained technicians, use standardized rack hardware and justify a higher cost if it protects extremely valuable GPUs or lets the facility install more compute in the same building.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That does not make commercialization easy, but it changes the economics. A technology that is still too expensive for millions of vehicles may still make sense when it sits beside a megawatt-class rack generating high-value AI workloads.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The OCP Summit Is the Next Public Test</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>QuantumScape says the PowerBlock design will be shown at the 2026 Open Compute Project Global Summit in San Jose from October 12 through October 15. The booth is being hosted by Megmeet, a power-system component provider in the NVIDIA MGX ecosystem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That venue matters because the future AI rack is becoming a complete system problem. <a href="https://bitcoinversus.tech/2026/09/25/ul-launches-800-vdc-ai-data-center-power-certification/"><strong>800 VDC certification</strong></a>, power conversion, busbars, battery storage, liquid cooling, protection, network fabric and compute all have to work together. A battery with excellent cell-level numbers still has to fit into that larger electrical machine.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>AI Is Turning the Battery Into Compute Infrastructure</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The most important part of the announcement is not whether every PowerBlock claim survives commercialization exactly as stated. It is that rack-level energy storage is becoming a first-class part of AI infrastructure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The old model treated batteries as insurance against losing electricity. The emerging model treats them as active equipment for shaping electricity before the GPU sees it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If AI racks really move toward 1 MW, that distinction becomes enormous. The battery is no longer sitting somewhere else in the building waiting for the lights to go out. It is becoming part of the machine that keeps the compute running at full speed.</p>
<!-- /wp:paragraph -->