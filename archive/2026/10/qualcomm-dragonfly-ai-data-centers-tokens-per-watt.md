---
title: "Qualcomm Dragonfly Turns AI Data Centers Into a Tokens-per-Watt Race"
date: 2026-10-01
published_url: https://bitcoinversus.tech/2026/10/01/qualcomm-dragonfly-ai-data-centers-tokens-per-watt/
wordpress_post_id: 19819
featured_media_id: 19818
slug: qualcomm-dragonfly-ai-data-centers-tokens-per-watt
---

<!-- wp:paragraph -->
<p>Qualcomm is trying to change the scoreboard for AI data centers. Instead of asking only how many FLOPS a system can produce, the company is pushing a more operational question: how many useful AI tokens can a rack generate for every watt it consumes?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That was the center of Qualcomm's <a href="https://www.qualcomm.com/news/onq/2026/09/qualcomm-dragonfly-ai-infra-summit-2026">AI Infra Summit 2026 presentation</a>, where the company showed its Dragonfly rack-scale platform for agentic AI inference. Dragonfly combines CPUs, inference accelerators, custom silicon, memory architecture, networking, and software into a system designed around sustained inference efficiency rather than peak arithmetic throughput alone.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The shift matters because agentic AI can generate far more inference work than a simple chatbot exchange. Agents reason over longer contexts, call tools, maintain state, retry tasks, and stay active for longer periods. That makes memory movement and power consumption increasingly important to the economics of the rack.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A recent <a href="https://twitter.com/CounterPointTR/status/2105315362078384477">Counterpoint Research X post</a> framed the same problem as the "memory wall": compute is getting faster, but feeding that compute efficiently is becoming the bottleneck.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/CounterPointTR/status/2105315362078384477","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/CounterPointTR/status/2105315362078384477
</div><figcaption class="wp-element-caption"><em>Counterpoint Research highlights Qualcomm's High Bandwidth Compute strategy and the growing importance of memory efficiency in AI systems.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Dragonfly Treats Memory as Part of the Compute Engine</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Qualcomm's key architectural bet is High Bandwidth Compute, or HBC. Rather than moving every operation back and forth through conventional memory paths, HBC places compute much closer to memory so some data-intensive work can happen where the data already lives.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is especially relevant during LLM decode, when the processor repeatedly pulls model weights and context from memory to generate the next token. In that phase, raw compute units can sit underutilized if memory cannot feed them quickly enough.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://counterpointresearch.com/en/insights/the-trillion-dollars-bottleneck-inside-qualcomms-high-bandwidth-compute-bet-blog">Independent Counterpoint analysis</a> describes HBC as Qualcomm's attempt to attack that memory bottleneck by bringing memory and compute closer together while reducing the energy spent moving data.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The concept fits a broader trend BitcoinVersus.Tech has been tracking in <a href="https://bitcoinversus.tech/2026/09/27/positron-raises-875-million-to-scale-memory-first-ai-inference/">memory-first AI inference architectures</a>, where the limiting resource is increasingly the ability to move model data efficiently rather than simply adding more arithmetic units.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=FFPLdqxjouA","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=FFPLdqxjouA
</div><figcaption class="wp-element-caption"><em>Counterpoint Research discusses Qualcomm HBC and why memory bandwidth is becoming a defining constraint for modern AI infrastructure.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Qualcomm Says the Better Metric Is Tokens per Watt</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Qualcomm's published estimates claim Dragonfly can deliver up to eight times better tokens per second per watt than contemporary GPU-based systems on selected models. The company also claims HBC can provide up to six times higher memory bandwidth per watt than conventional HBM-based approaches and far greater memory capacity per watt than SRAM-based designs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those figures are Qualcomm estimates, not independent production benchmarks, so the important test will be how Dragonfly performs once customers deploy the hardware at scale. But the choice of metric itself is significant. Tokens per watt directly connects AI output to the data center's hardest physical constraint: available power.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/BrendanBurkeX/status/2100310852129960147","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/BrendanBurkeX/status/2100310852129960147
</div><figcaption class="wp-element-caption"><em>Industry analyst Brendan Burke highlights Qualcomm's HBC-versus-HBM positioning around the tokens-per-watt metric.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>The data center implication is straightforward. If two racks can deliver the same useful inference throughput but one draws materially less power, the more efficient system can fit more AI capacity behind the same utility connection, switchgear, transformers, UPS systems, and cooling plant.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">One Trillion Parameters on a Single AI200 Card</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>At the summit, Qualcomm demonstrated Kimi K2.5, a one-trillion-parameter model, running on a single Dragonfly AI200 accelerator card. Qualcomm presented the demo as evidence that large memory capacity can reduce how aggressively operators need to split models across many accelerators.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That matters because distributing a model across more devices creates another tax: networking. Every time accelerators have to exchange activations, model state, or intermediate results, the interconnect becomes part of inference latency and power consumption.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech recently covered Qualcomm's work with AWS on <a href="https://bitcoinversus.tech/2026/09/27/qualcomm-aws-custom-ai-silicon-1-6t-optics/">custom AI silicon and 1.6T optical connectivity</a>. Dragonfly shows why those pieces belong together. An inference rack is increasingly a coordinated system of compute, memory, networking, cooling, and power rather than a collection of independent chips.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=MQSW57UKf18","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=MQSW57UKf18
</div><figcaption class="wp-element-caption"><em>Qualcomm's Tony Pialis explains the company's tokens-per-watt approach to rack-scale infrastructure for agentic AI at AI Infra Summit 2026.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Networking Still Decides Whether the Rack Scales</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Memory efficiency can reduce unnecessary traffic, but it does not eliminate the network. Dragonfly includes high-speed connectivity for scale-up and scale-out, reflecting the reality that large inference systems still have to move enormous amounts of data between accelerators, storage, and adjacent racks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why the industry's move toward <a href="https://bitcoinversus.tech/2026/09/24/1-6t-ethernet-data-center-deployment/">1.6T Ethernet deployment</a> matters alongside new accelerator architectures. Faster optics and better memory efficiency attack different parts of the same bottleneck: keeping expensive compute fed without wasting power.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">AI Infrastructure Is Becoming an Efficiency Competition</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For years, AI hardware competition was easy to summarize with bigger training clusters and higher peak compute numbers. Inference changes the equation because useful output happens continuously and power is paid continuously.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes rack-level efficiency a business and engineering problem at the same time. Better memory utilization can reduce idle compute. Better networking can reduce communication delays. Better software can schedule work more efficiently. Better cooling can reclaim electrical capacity for processors instead of facility overhead.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Qualcomm is betting that this shift creates room for a different kind of accelerator platform. Dragonfly does not have to win a theoretical FLOPS contest if it can prove that a rack produces more useful inference within a fixed power envelope.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The hardware still has to prove those claims in large customer deployments. But the scoreboard is already changing. In the agentic AI era, the winning data center may not be the one with the most compute on paper. It may be the one that turns each megawatt into the most useful work.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong><em>BitcoinVersus.Tech</em></strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>Advertisement</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><strong><em>Editor's Note:</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->
