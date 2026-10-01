# Volantis Raises ₿1,053 ($88 Million) to Put Photonics Between AI Chips and Memory

Published: 2026-10-01

Live: https://bitcoinversus.tech/2026/10/01/volantis-88-million-photonic-memory-ai-inference/

WordPress Post ID: 19922
Featured Media ID: 19917

<!-- wp:paragraph -->
<p><strong>Volantis is attacking one of AI inference’s hardest physical constraints with light instead of more copper. The San Francisco semiconductor startup has raised approximately ₿1,053 ($88 million) to build an optical fabric that connects AI compute directly to a much larger pool of memory, targeting both higher capacity and higher bandwidth than conventional short-reach electrical links can provide.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The financing arrives as AI accelerators increasingly collide with a memory problem: the compute engines can process data faster than nearby memory systems can continuously feed very large models. Using an October 1 reference of 1 BTC (about $83,566), the new round equals roughly ₿1,053 ($88 million). In a <a href="https://twitter.com/semiDL/status/2105659000545059287">specific October 1 update</a>, Volantis cofounder and CEO Tapa Ghosh said the company is using optics to increase both memory bandwidth and capacity around an inference chip.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/semiDL/status/2105659000545059287","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/semiDL/status/2105659000545059287
</div><figcaption class="wp-element-caption"><em>Volantis CEO Tapa Ghosh describes the company’s photonic-memory strategy and its new ₿1,053 ($88 million) Series A.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The memory wall is becoming a packaging problem</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Modern AI processors do not operate alone. A large model must be stored in memory and repeatedly moved into the compute engines during inference. HBM solves part of that problem by placing extremely high-bandwidth memory close to GPUs and other accelerators, but the physical package has finite perimeter, routing space, power and thermal capacity.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.sunherald.com/news/business/article317454180.html">Reuters reports</a> that current high-end GPU architectures are constrained by the reach of the tiny electrical connections between compute and nearby memory. Volantis told Reuters that its optical approach could ultimately surround a GPU-class compute device with as many as 220 memory chips rather than the roughly eight HBM stacks used around leading current GPUs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction is important. Volantis is not simply proposing another optical link between racks. The company is trying to move photonics into the much shorter and denser compute-to-memory path, where the number of parallel connections, energy per bit and packaging density are all unusually demanding.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech recently examined a different attack on the same bottleneck when <a href="https://bitcoinversus.tech/2026/09/27/positron-raises-875-million-to-scale-memory-first-ai-inference/">Positron raised capital around memory-first AI inference</a>. Volantis is approaching the problem from the interconnect side: make the memory pool physically larger without accepting the electrical reach penalty that normally comes with moving memory farther from the compute die.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Micro-VCSELs replace external lasers</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>According to <a href="https://volantissemi.ai/news-insights/our-88m-series-a-demolishing-the-memory-wall-with-photonics-post">Volantis’ technical announcement</a>, its optical fabric eliminates external lasers and instead uses custom integrated micro-VCSELs. VCSELs, or vertical-cavity surface-emitting lasers, are already manufactured at enormous scale for sensing and consumer electronics, giving Volantis a supply-chain path that differs from photonic systems built around external indium-phosphide lasers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The company also says it has eliminated traditional optical fiber from this short-reach link. That is a clue to the engineering target: this is not a conventional data-center transceiver shrunk onto a package. Volantis is designing an optical connection specifically for the dense geometry between a compute package and a large number of nearby memory devices.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The architecture echoes the broader trend BitcoinVersus.tech covered when <a href="https://bitcoinversus.tech/2026/10/01/avicena-microled-optics-detachable-ai-racks/">Avicena made MicroLED optical links detachable for AI racks</a>. Both efforts replace distance-sensitive high-speed electrical paths with light, but they operate at different physical scales. Avicena targets rack-level connectivity; Volantis is pushing optical signaling toward the memory subsystem itself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A-1 targets giant models and extreme inference speed</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Volantis calls its first system A-1. The company says it is designing the architecture for models larger than 10 trillion parameters and targeting inference speeds as high as 10,000 tokens per second per user. Those figures are engineering targets from Volantis, not independently benchmarked production results, and the company has not yet delivered the integrated inference engine to customers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The claimed mechanism is straightforward even if the implementation is difficult: connect more memory devices through an optical fabric, aggregate their bandwidth as capacity grows, and let the accelerator access a much larger model without forcing all of that memory onto the immediate package perimeter.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Volantis says its optical platform can increase memory capacity and bandwidth by more than an order of magnitude and is targeting end-to-end links below one picojoule per bit. The company has also said its next photonic iteration is already taped out. Those claims will become much more meaningful once silicon measurements, system topology and customer workloads are disclosed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The memory-capacity side of the AI race is already moving rapidly. BitcoinVersus.tech recently covered <a href="https://bitcoinversus.tech/2026/09/27/micron-512gb-ddr5-rdimm-9200-server-memory/">Micron’s 512GB DDR5 server module demonstration</a>, which attacks capacity at the DIMM and server-memory layer. Volantis is attempting something more architectural: make optical connectivity part of how an accelerator reaches its memory pool.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why 220 memory chips would change system design</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If Volantis can make hundreds of memory devices usable around one inference engine, the result would affect more than model size. Memory placement determines package size, board topology, power delivery, cooling, scheduling and the economics of serving each token. A larger memory pool could also reduce the need to partition models across as many accelerator packages, depending on workload and compute requirements.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But optical memory is not automatically easier than HBM. Hundreds of devices still need controllers, protocol logic, synchronization, power, thermal management and manufacturable packaging. The optical links must also deliver their claimed energy and bandwidth advantages at production yield and cost, not only in isolated laboratory demonstrations.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The next proof point is integrated hardware</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Reuters says Volantis expects to deliver a chip next year, while the company says its financing will fund A-1 development, engineering expansion and commercialization. That makes 2027 the critical proof window: the architecture must move from optical-link results and taped-out components into an integrated inference system that can be measured against HBM-based accelerators.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The ₿1,053 ($88 million) round gives Volantis substantial resources to attempt that transition. It does not prove the company can reach its model-size, bandwidth or token-rate targets. What it does establish is that photonics is moving deeper into the AI system—from rack-to-rack and chip-to-chip links toward the compute-to-memory interface itself.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">BitcoinVersus.Tech</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Advertisement</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement: use promo code bitcoinversus for the offer described in the embedded post.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><strong><em><sup>BitcoinVersus.Tech Editor's Note:</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><strong><em><sup>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><em>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->
