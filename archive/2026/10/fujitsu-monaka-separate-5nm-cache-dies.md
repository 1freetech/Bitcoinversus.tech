---
title: "Fujitsu MONAKA Moves Its Entire Last-Level Cache Onto Separate 5nm Dies"
date: 2026-10-01
published_url: https://bitcoinversus.tech/2026/10/01/fujitsu-monaka-separate-5nm-cache-dies/
wordpress_post_id: 19915
featured_media_id: 19914
slug: fujitsu-monaka-separate-5nm-cache-dies
---

<!-- wp:paragraph -->
<p>Fujitsu's next server CPU is taking a very different approach to advanced-node silicon: put the expensive 2 nm process where it matters most, then move the entire last-level cache off the compute die.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>FUJITSU-MONAKA is a 144-core Arm server processor scheduled for 2027. Fujitsu's <a href="https://www.fujitsu.com/global/imagesgig5/FUJITSU-MONAKA.pdf">official architecture material</a> shows a 3D chiplet design with 2 nm core dies stacked over separate 5 nm SRAM dies, plus a 5 nm I/O die, 12 DDR5 memory channels, PCI Express 6.0, and CXL 3.0 support.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The most unusual part is the cache hierarchy. Fujitsu says the entire last-level cache sits on the separate SRAM dies beneath the compute dies rather than consuming valuable area on the 2 nm core silicon.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Tom's Hardware highlighted that architecture in an <a href="https://twitter.com/tomshardware/status/2092606982213767364">August 26 X post</a> from Hot Chips 2026, where Fujitsu also disclosed that MONAKA uses 256-bit SVE2 vector execution and is targeting 350 W and 500 W server configurations.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/tomshardware/status/2092606982213767364","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/tomshardware/status/2092606982213767364
</div><figcaption class="wp-element-caption"><em>Tom's Hardware highlights MONAKA's separate 5 nm cache die, 256-bit SVE2 design, and 2027 server targets from Hot Chips 2026.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Waste 2 nm Silicon on SRAM?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Leading-edge logic nodes are valuable because they can pack high-performance transistors more densely and improve performance per watt. But SRAM does not scale as cleanly as logic from one node to the next, and large caches can consume a huge fraction of a modern CPU die.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Fujitsu's answer is to separate those jobs physically. The processor cores use 2 nm technology, while the last-level cache is built on 5 nm SRAM dies. Fujitsu says the 2 nm portion accounts for less than 30% of the total die area in the package.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That means the most expensive process node is concentrated on the logic that benefits most from it instead of being used to manufacture large blocks of cache that can remain efficient on a more mature node.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is a different partitioning philosophy from BitcoinVersus.Tech's recent look at <a href="https://bitcoinversus.tech/2026/10/01/nuvacore-warpcore-core-first-cpu-isa/">NUVACORE's Core First processor strategy</a>. NUVACORE is trying to delay the ISA decision while keeping the microarchitecture reusable. Fujitsu is using physical partitioning to decide which parts of the CPU deserve the newest manufacturing node.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Cache Is Separate, but It Still Has to Feel Local</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Moving the cache off the compute die only works if the connection between the two remains fast enough that cores do not constantly pay a large latency penalty.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Fujitsu uses a tightly coupled 3D structure with through-silicon vias between the 2 nm core dies and the 5 nm SRAM dies underneath. The goal is to make the off-die cache behave much more like a nearby extension of the core than a conventional external memory device.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.tomshardware.com/pc-components/cpus/fujitsus-monaka-cpu-stacks-its-entire-cache-on-a-separate-5nm-die-and-narrows-to-256-bit-sve2">Tom's Hardware's Hot Chips analysis</a> describes four compute-die and SRAM-die pairs around a central I/O die, all tied together through the package and silicon interposer.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">MONAKA Uses 144 Arm Cores Without SMT</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>MONAKA is designed around 144 Armv9.3-A cores per socket and up to two sockets per node, giving a 288-core server configuration.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The design is aimed at cloud, AI, and HPC workloads where throughput, power efficiency, memory bandwidth, and predictable server behavior matter more than simply chasing desktop-style peak frequency.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That puts MONAKA in a different class of Arm infrastructure than the processors that first made Arm popular. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/09/27/sipearl-rhea1-cpus-enter-jupiter-supercomputer/">SiPearl's Rhea1 entering the JUPITER supercomputer</a>, another example of Arm moving deep into HPC and data-center systems once dominated by x86 and specialized architectures.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Fujitsu Narrowed the Vector Width</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>MONAKA also makes an interesting vector-design tradeoff. Fujitsu's earlier A64FX processor used 512-bit SVE vectors. MONAKA moves to SVE2 with 256-bit execution units.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A narrower vector path does not automatically mean a slower processor. Wider vectors consume die area and power, and they only help when software can keep those lanes busy. A server CPU aimed at cloud, AI orchestration, general HPC, and mixed workloads may benefit more from a balanced design with more cores, more efficient execution, and strong memory throughput.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes MONAKA's 256-bit SVE2 decision a useful reminder that architecture is not a checklist where every larger number is automatically better. The right width depends on workload mix, power budget, compiler behavior, and how much silicon the design can justify dedicating to vector hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Twelve DDR5 Channels Keep the Cores Fed</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A 144-core server processor creates enormous pressure on the memory subsystem. Fujitsu pairs MONAKA with 12 DDR5 channels, which is critical because adding cores without enough memory bandwidth simply creates more processors waiting for data.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The central 5 nm I/O die handles the external interfaces while the compute and cache stacks remain focused on execution and local data access. That separation again reflects the same architectural philosophy: build each function on the process node and physical structure best suited to it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>IBM is approaching the CPU problem from a completely different direction with its new <a href="https://bitcoinversus.tech/2026/10/01/ibm-dual-isa-arm-zarchitecture-same-core/">dual-ISA Arm and z/Architecture core</a>. Together, the two designs show how diverse server CPU architecture has become: one vendor is rethinking the ISA boundary, while another is rethinking where the cache physically lives.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Chiplets Are Becoming About Economics as Much as Performance</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Chiplets are often discussed as a way to increase core counts or build processors larger than a single monolithic die. MONAKA shows another reason to split a CPU: different parts of the processor have different manufacturing economics.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The cores benefit from the densest, most power-efficient logic process. SRAM may not. I/O transistors have their own voltage, analog, and reliability requirements. Separating those blocks lets Fujitsu avoid paying leading-edge-node costs for every square millimeter of the package.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The tradeoff is packaging complexity. More dies mean more bonding, more interfaces, more thermal interactions, more validation, and more ways for manufacturing yield to become a systems problem rather than a single-die problem.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The CPU Package Is Becoming the Architecture</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>MONAKA is a good example of how modern processor design is moving beyond the old idea that the CPU is one piece of silicon.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The compute dies, SRAM dies, I/O die, interposer, DDR5 interfaces, PCIe/CXL links, cooling system, and software-visible Arm architecture all have to work together as one processor.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes packaging decisions architectural decisions. Cache latency depends on die stacking. Cost depends on node allocation. Memory performance depends on the I/O die. Thermals depend on how heat moves through vertically integrated silicon.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Fujitsu is betting that the right server CPU is not simply the one with the newest node everywhere. It is the one that uses the newest node only where it produces the most value.</p>
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
