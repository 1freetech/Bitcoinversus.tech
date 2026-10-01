---
title: "Intel Diamond Rapids Rebuilds Xeon Around 16 Chiplets and UCIe-S"
date: 2026-10-01
published_url: https://bitcoinversus.tech/2026/10/01/intel-diamond-rapids-16-chiplets-ucie-s/
wordpress_post_id: 19932
featured_media_id: 19931
slug: intel-diamond-rapids-16-chiplets-ucie-s
---

<!-- wp:paragraph -->
<p>Intel's next Xeon is not just a bigger server CPU. Diamond Rapids is a package-level redesign that turns the processor into a network of chiplets, cache tiles, and centralized fabric hubs connected through UCIe.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Intel used Hot Chips 2026 to detail the architecture of its next-generation Xeon 7 platform. The company's <a href="https://www.intel.com/content/www/us/en/content-details/926846/diamond-rapids-intel-s-next-generation-xeon-cpu.html">official Hot Chips presentation</a> describes Diamond Rapids as its next major Xeon design for 2027, built around a highly disaggregated package rather than one large monolithic compute die.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Tom's Hardware summarized the architecture in an <a href="https://twitter.com/tomshardware/status/2091997321416552907">August 24 X post</a>: up to 256 P-cores, as much as 1.28 GB of last-level cache, AVX 10.2, and UCIe-S replacing EMIB for critical package-level communication.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/tomshardware/status/2091997321416552907","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/tomshardware/status/2091997321416552907
</div><figcaption class="wp-element-caption"><em>Tom's Hardware highlights the central Diamond Rapids changes: 256 P-cores, 1.28 GB of LLC, AVX 10.2, and a package fabric built around UCIe-S.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Sixteen Core Chiplets Feed Four Compute Building Blocks</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Diamond Rapids divides its compute resources into what Intel calls Compute Building Blocks, or CBBs. Each CBB can hold four core chiplets, and each chiplet can contain up to 16 P-cores.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Scale that across four CBBs and the full package reaches 16 core chiplets and up to 256 cores. The core chiplets are built on Intel's 18A-P process, while the base tiles beneath them use Intel 3-T.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes Diamond Rapids another example of the server CPU becoming a collection of specialized dies rather than a single piece of silicon. BitcoinVersus.Tech just covered <a href="https://bitcoinversus.tech/2026/10/01/fujitsu-monaka-separate-5nm-cache-dies/">Fujitsu MONAKA moving its last-level cache onto separate 5 nm SRAM dies</a>, and Intel is making a related decision here: put different functions on different pieces of silicon, then connect them tightly enough that software still sees one processor.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Base Tile Holds the Shared Cache</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Inside each CBB, the core chiplets sit above a base tile connected with Intel's Foveros Direct 3D technology. The core chiplets contain private L2 cache, while the shared L3 cache is located on the base tile underneath.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This arrangement separates hot, high-performance core logic from the larger shared-cache structures while keeping the two physically close. That is increasingly important because SRAM scaling has become one of the hardest parts of advanced CPU design.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Across the full processor, Intel is targeting up to 1.28 GB of last-level cache. At that scale, cache placement is no longer a minor floorplanning choice. It affects die area, power, latency, thermal density, and how efficiently hundreds of cores can share data.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Intel Put the Memory and I/O in the Middle</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Diamond Rapids also reverses the spatial logic of some earlier Xeon designs. The four compute blocks sit around the outside of the package, while two centralized Fabric Hub Tiles sit in the middle.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those fabric hubs aggregate the memory and I/O subsystems. Intel says the design supports 16 DDR5 memory channels, up to 8,000 MT/s with conventional DDR5 and up to 12,800 MT/s with MRDIMMs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The I/O subsystem also scales to 128 lanes that can be used for PCIe 6.0, CXL 3.0, UPI, or combinations of those interfaces. That is a major amount of external connectivity for one socket and reflects how much more work the CPU has to coordinate in an AI-era server.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same pressure is visible in BitcoinVersus.Tech's recent coverage of <a href="https://bitcoinversus.tech/2026/10/01/ibm-dual-isa-arm-zarchitecture-same-core/">IBM's dual-ISA Arm and z/Architecture processor</a>. Modern server CPUs are being redesigned around data movement and system integration as much as around raw integer execution.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Intel Chose UCIe-S Instead of EMIB</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One of the more interesting packaging decisions is what Intel did not use. Diamond Rapids does not rely on Intel's familiar EMIB bridge to connect the compute regions to the central fabric hubs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Instead, Intel uses UCIe-S through copper wiring in the package substrate. <a href="https://www.tomshardware.com/pc-components/cpus/intel-xeon-7-diamond-rapids-comes-with-up-to-256-p-cores-1-28-gb-of-last-level-cache-next-gen-18a-p-cpu-also-brings-avx-10-2-and-uses-ucie-s-instead-of-emib">Independent Hot Chips coverage</a> reports that Intel chose UCIe-S because it provided a more uniform low-latency connection across the package distance between each CBB and both fabric hubs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction matters. Advanced package links are not automatically better just because they are denser or more exotic. The physical distance, signaling requirements, latency target, power budget, routing flexibility, and manufacturing cost all shape which interconnect makes sense.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Diamond Rapids therefore turns UCIe into something more than a generic chiplet standard. It becomes part of the CPU's internal topology.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Package Starts to Look Like a Tiny Network</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>With 16 core chiplets, four base tiles, and two fabric hubs, Diamond Rapids is easier to understand if the package is treated like a small network.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Each compute block has to reach both central hubs. The hubs maintain access to memory and external I/O. Cache coherency has to work across the whole socket. Traffic needs to avoid pathological bottlenecks as hundreds of cores generate memory, I/O, and coherence requests at the same time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes routing and topology first-class CPU-design problems. Once the package becomes this disaggregated, performance depends on how well the fabric moves data between dies, not just how fast the individual cores execute instructions.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Moving the Hot Cores Outward May Help Cooling</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The physical layout has a thermal benefit too. By pushing the core-heavy compute blocks toward the perimeter and putting the more centralized memory and I/O fabric in the middle, Intel reduces the concentration of the hottest logic at the center of the package.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That can make cold-plate design and heat spreading easier, especially in high-power server configurations. At this scale, package topology is thermal architecture.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Fujitsu's MONAKA story makes the same broader point from another direction: once CPUs are assembled from multiple dies and layers, thermal paths become part of the architecture itself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Diamond Rapids Also Modernizes the x86 ISA</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The package gets most of the attention, but Diamond Rapids also brings major instruction-set changes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Intel is moving Xeon to AVX 10.2 and Advanced Performance Extensions, or APX. APX expands the number of general-purpose registers from 16 to 32, giving compilers more room to keep values close to the execution units and reduce unnecessary loads and stores.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes Diamond Rapids interesting from both sides of processor design. The physical package is becoming more distributed, while the software-visible x86 architecture is gaining more registers and newer vector capabilities.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That contrast also connects with BitcoinVersus.Tech's recent look at <a href="https://bitcoinversus.tech/2026/10/01/nuvacore-warpcore-core-first-cpu-isa/">NUVACORE's Core First architecture</a>. NUVACORE is trying to postpone the ISA choice. Intel is doing the opposite: preserving x86 compatibility while rebuilding nearly everything around how the cores communicate inside the package.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Server CPU Is Becoming a System in a Package</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Diamond Rapids shows how far server CPUs have moved beyond the old image of one die surrounded by memory controllers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The processor now contains leading-edge core chiplets, separate base tiles, giant shared caches, centralized fabric hubs, 3D die stacking, substrate-level UCIe links, 16 memory channels, and 128 lanes of external high-speed I/O.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is closer to a miniature data center fabric than a traditional single-die CPU.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The core architecture still matters, but Diamond Rapids makes another point just as clearly: in a modern Xeon, the package is becoming part of the microarchitecture.</p>
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
