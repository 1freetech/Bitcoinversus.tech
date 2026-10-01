# AMD Gives Versal RF Six UCIe Links for Open Chiplet Architecture

Published: 2026-10-01

Live: https://bitcoinversus.tech/2026/10/01/amd-versal-rf-ucie-open-chiplet-architecture/

WordPress Post ID: 19876
Featured Media ID: 19874

<!-- wp:paragraph -->
<p><strong>AMD is turning select Versal RF adaptive SoCs into open chiplet platforms by adding native UCIe 1.1 connectivity, giving system designers a standardized way to place specialized RF, AI, CPU, GPU, security, communications and optical silicon beside the adaptive-compute die inside one package.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The architecture was highlighted in an <a href="https://twitter.com/AMDembedded/status/2092269089003557056">August 25 AMD Embedded post</a>, which described the goal as combining the silicon functionality a system needs within a single package rather than pushing every specialized function across a circuit board.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>According to <a href="https://newsroom.amd.com/news/amd-brings-ucie-connectivity-versal-adaptive-socs/">AMD’s technical announcement</a>, Versal RF will be the first family of AMD adaptive SoCs to support UCIe 1.1, with up to four independent UCIe-SP standard-package interfaces and two UCIe-AP advanced-package interfaces.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/AMDembedded/status/2092269089003557056","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/AMDembedded/status/2092269089003557056
</div><figcaption class="wp-element-caption"><em>AMD Embedded says native UCIe 1.1 connectivity is coming to select Versal RF adaptive SoCs, allowing more specialized silicon functions to live inside one package.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">UCIe moves the system boundary inside the package</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Traditional system design often connects processors, accelerators, RF devices and other specialized chips over board-level serial links. That works, but every trip across the board adds physical routing, transceivers, power consumption and latency.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Universal Chiplet Interconnect Express changes the location of that boundary. Instead of treating every function as a separate packaged chip, designers can connect multiple dies inside one package through a standardized die-to-die interface.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.storagereview.com/news/amd-versal-rf-gets-native-ucie-1-1-six-chiplet-links-per-package-production-parts-in-q4-2027">StorageReview’s independent analysis</a> notes that the Versal RF implementation can expose six UCIe links per package and replace some board-level high-speed connections with lower-distance in-package communication.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=tsufaTU5S8s","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=tsufaTU5S8s
</div><figcaption class="wp-element-caption"><em>Semiconductor Engineering explains how UCIe evolved from a basic die-to-die connection into a broader specification for moving data among heterogeneous chiplets inside advanced packages.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Four standard-package links and two advanced-package links</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The split between UCIe-SP and UCIe-AP matters because not every package needs the same density or physical construction.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>UCIe-SP is designed for standard packaging approaches with more relaxed bump pitches, while UCIe-AP targets advanced packages where dies can be placed much closer together through denser interconnect technology. AMD’s plan gives Versal RF access to both classes in the same broader architecture.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>AMD says the interfaces together can provide multi-terabit-per-second aggregate in-package bandwidth. That creates enough internal bandwidth for designers to treat the adaptive SoC as a hub surrounded by workload-specific silicon rather than as a closed monolithic endpoint.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Versal RF already combines several compute architectures</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Versal RF is already heterogeneous before any external chiplet is attached. The devices combine high-resolution RF data converters, hard DSP intellectual property, AI Engines and programmable logic, with AMD citing up to 80 TOPS of heterogeneous DSP compute.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>UCIe extends that mix beyond the base die. AMD lists possible companion chiplets including third-party RF analog front ends, AI accelerators, CPUs, specialized GPU compute, security engines, communications processors and application-specific ASICs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That modular approach parallels the packaging pressure BitcoinVersus.tech examined in <a href="https://bitcoinversus.tech/2026/09/29/cowos-l-pushes-ai-chip-packaging-beyond-reticle-limits/">CoWoS-L’s move beyond conventional reticle limits</a>: when one monolithic die becomes inefficient or impractical, packaging and interconnect architecture become part of the computer itself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Open chiplet links can shorten redesign cycles</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A monolithic SoC forces many functions onto one design and one manufacturing plan. If a customer needs a different accelerator, interface or security block, the redesign can become expensive and slow.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With standardized chiplet connectivity, a system architect can potentially reuse a proven Versal RF die and change the companion silicon around it. That separates the lifecycle of the central adaptive-compute device from the lifecycle of every specialized function.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=XrGGxc-CIzI","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=XrGGxc-CIzI
</div><figcaption class="wp-element-caption"><em>The UCIe Consortium discusses how an open chiplet ecosystem can let designers combine specialized dies from different technology providers inside a common package.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Packaging is becoming architecture</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Chiplets only work if the package can physically place, power, cool and connect the dies at useful bandwidth. That is why the rise of UCIe is happening alongside massive investment in advanced packaging.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech recently covered <a href="https://bitcoinversus.tech/2026/10/01/amkor-arizona-advanced-packaging-12-billion/">Amkor’s Arizona advanced-packaging expansion</a>, where the packaging layer itself is becoming strategic semiconductor infrastructure. UCIe provides a logical and physical interconnect standard that can make that manufacturing capacity more useful for modular systems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same architectural pressure appears at larger scales. <a href="https://bitcoinversus.tech/2026/10/01/mediatek-nvidia-nvlink-fusion-custom-ai-racks/">MediaTek’s adoption of NVIDIA NVLink Fusion for custom AI racks</a> reflects a similar principle outside the package: specialized compute becomes more valuable when high-bandwidth interconnects let different processing elements operate as one system.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">UCIe could make Versal RF a reusable system anchor</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The architectural shift is larger than adding six new interfaces. AMD is positioning the adaptive SoC as a reusable anchor around which customers can assemble application-specific packages.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An RF system could attach a specialized analog front end. An AI design could add an accelerator. A networking platform could combine communications silicon and co-packaged optics. A security-sensitive design could place a custom security engine next to the adaptive logic without rebuilding every other function.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>AMD expects production chiplets with UCIe connectivity on select Versal RF Series devices in the fourth quarter of 2027. Until then, the announcement is an architecture roadmap rather than a shipping product, but it shows where adaptive computing is headed: away from one giant fixed die and toward packages assembled from interoperable pieces.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If UCIe adoption continues across vendors, the long-term change could resemble what standardized board-level buses did for earlier computers—except the modularity is moving down into the package itself.</p>
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
