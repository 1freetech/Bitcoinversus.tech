<!-- wp:paragraph -->
<p>A new preprint shows how much performance can still be hiding inside AI hardware that has already been installed. Researchers behind Mixture-of-Kittens, or MoK, report a 1.41× improvement in end-to-end training throughput across 512 GPUs spanning multiple NVIDIA GB300 NVL72 racks—not by changing the GPUs, but by redesigning how mixture-of-experts workloads communicate and synchronize.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://arxiv.org/abs/2609.36070">The September 28 Mixture-of-Kittens preprint</a> describes a training megakernel built specifically for rack-scale NVL72 systems. The team says MoK reaches up to 2.37× the throughput of the strongest public baseline on standalone MoE-layer benchmarks and improves end-to-end production training throughput by 1.41× on 512 GPUs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cursor.com/blog/mixture-of-kittens">Cursor’s technical write-up</a> explains the practical motivation: as its Composer model scaled, the mixture-of-experts layer could consume more than half of total training time. The team responded by fusing communication and computation into one deterministic kernel instead of treating each part as a separate operation coordinated through the CPU.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The bottleneck was not just compute</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Mixture-of-experts models activate only a subset of their parameters for each token, which can reduce the amount of computation needed compared with activating an entire dense model. But that efficiency creates another problem: tokens must be routed to the right experts, data must move between GPUs, and the system has to synchronize those operations without leaving expensive accelerators idle.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That challenge becomes different inside a rack-scale system. BitcoinVersus.Tech previously broke down <a href="https://bitcoinversus.tech/2026/08/05/the-components-inside-the-nvidia-gb200-nvl72-ai-rack-kitchen-analogy/">the components inside NVIDIA’s GB200 NVL72 rack</a>, where dozens of GPUs are tied together through a high-bandwidth scale-up fabric. Software designed around older scale-out assumptions can leave that architecture underused even when the hardware itself is extremely fast.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">MoK turns the MoE layer into one megakernel</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The researchers highlight three design choices. First, MoK chooses between push-based and pull-based communication depending on the operator. Second, it restructures how computation overlaps with communication. Third, it removes CPU-GPU synchronization from the critical path.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The result is a single deterministic megakernel that fuses token dispatch, shared-expert computation, routed-expert computation and token combine. Instead of the CPU repeatedly coordinating pieces of the workload, the GPUs can stay inside a more continuous execution path while networking is overlapped with useful work.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=Bq0nEyOXcRA","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio wp-block-embed-youtube"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=Bq0nEyOXcRA
</div><figcaption class="wp-element-caption"><em>NVIDIA Developer explains why mixture-of-experts models create both compute-efficiency opportunities and difficult communication challenges at scale.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A 1.41× gain matters at rack scale</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A 41% end-to-end throughput increase can be strategically important when it applies across hundreds of already-purchased GPUs. Faster training can shorten model-development cycles, increase the amount of work completed by the same cluster, or delay the point at which more hardware has to be added.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is especially relevant as operators deploy full rack-scale systems rather than isolated accelerators. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/09/27/giga-computing-700kw-gaifa-ai-factory-gb300-nvl72/">Giga Computing’s 700 kW AI factory built around GB300 NVL72 racks</a>, where software-level utilization determines how much useful AI work can be extracted from an unusually power-dense facility.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">This does not prove lower energy consumption</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The performance result should not be converted automatically into an energy-efficiency claim. The paper reports throughput improvements, not a controlled measurement showing lower electrical consumption or lower joules per trained token.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the same 512-GPU system completes a fixed workload substantially faster while drawing roughly similar power, energy per completed training job could improve. But that requires power telemetry and workload-normalized measurements. Higher throughput can also encourage operators to run more training, so total site energy use can still rise even when the software stack becomes more efficient.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Rack-scale hardware is becoming a software problem</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>NVL72-class systems are designed to make many GPUs behave more like one giant accelerator domain, but that architecture only pays off when the software understands the communication topology. MoK is evidence that kernels, scheduling and synchronization can determine whether expensive rack-scale hardware behaves like a tightly integrated machine or a collection of accelerators waiting on each other.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same infrastructure shift is visible outside individual kernels. BitcoinVersus.Tech recently examined how <a href="https://bitcoinversus.tech/2026/10/04/networking-cisco-adds-supermicro-rack-scale-systems-to-nvidia-ai-factory/">Cisco is adding Supermicro rack-scale systems to its NVIDIA AI Factory stack</a>. As racks become the new unit of AI compute, software that coordinates the rack can create gains that previously would have required a hardware refresh.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The important result is the hardware left on the table</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Mixture-of-Kittens is not evidence that GPUs are becoming less important. It is evidence that the value of those GPUs increasingly depends on the software between them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>At the standalone layer level, MoK’s best result reaches 2.37× the throughput of the strongest public baseline. At production scale, the more important number is 1.41× across 512 GPUs. That is a reminder that AI infrastructure performance is no longer just a contest over transistor counts, memory bandwidth or rack power. Communication strategy and synchronization can unlock substantial additional output from hardware that is already in the data center.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">BitcoinVersus.Tech</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Advertisement</h3>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio wp-block-embed-x"} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>Advertisement from BitcoinVersus.Tech.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Editor’s Note</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you value independent technology reporting, consider supporting BitcoinVersus.Tech with a Bitcoin donation: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->