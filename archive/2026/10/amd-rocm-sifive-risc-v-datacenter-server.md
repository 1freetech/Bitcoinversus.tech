# AMD ROCm Runs AI on SiFive RISC-V Datacenter Server

Published: 2026-10-01

Live: https://bitcoinversus.tech/2026/10/01/amd-rocm-sifive-risc-v-datacenter-server/

WordPress Post ID: 19889
Featured Media ID: 19887

<!-- wp:paragraph -->
<p><strong>AMD’s ROCm software stack has now been demonstrated with a RISC-V server acting as the host for GPU-accelerated AI inference. SiFive and AMD showed ROCm 10.0 running on SiFive’s BigSky SF-2U870 datacenter development platform, where 32 SiFive P870-D CPU cores controlled an AMD Radeon AI PRO R9700 GPU running a Gemma4-E2B language model.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The September 15 demonstration matters because the host processor was not x86 or Arm. It was RISC-V. A <a href="https://twitter.com/DanielNenni/status/2105324728399585666">SemiWiki technical post</a> published September 30 highlighted the same division of labor: the P870-D CPUs operated the server while the Radeon accelerator handled inference through ROCm.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>According to <a href="https://www.sifive.com/press/sifive-amd-rocm-riscv-datacenter-servers">SiFive’s announcement</a>, the system is explicitly a demonstration platform rather than a claim that ROCm on RISC-V is already a broadly supported production configuration. The companies said they will continue evaluating optimization of ROCm on RISC-V servers, with the goal of supporting faster processing, additional acceleration use cases and larger models.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/DanielNenni/status/2105324728399585666","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/DanielNenni/status/2105324728399585666
</div><figcaption class="wp-element-caption"><em>SemiWiki summarizes the SiFive and AMD demonstration: ROCm 10.0 ran with P870-D RISC-V CPUs hosting Radeon AI PRO R9700 GPU inference.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">RISC-V becomes the host, not the accelerator</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The architectural distinction is important. The SiFive CPU is not replacing the GPU’s matrix engines. Instead, RISC-V is taking the role normally occupied by a server-class x86 or Arm host: booting the system, running the operating environment, coordinating software and feeding work to a discrete accelerator over PCIe.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the demonstrated configuration, AMD’s Radeon AI PRO R9700 performs the inference offload while the P870-D complex operates as the head node. That separates the instruction-set question from the accelerator question. A datacenter can theoretically choose a RISC-V host architecture while retaining a GPU programming stack built around ROCm.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is one reason open instruction sets are becoming relevant above the embedded tier. BitcoinVersus.tech’s <a href="https://bitcoinversus.tech/2026/02/19/instruction-set-architectures-isas/">instruction-set architecture guide</a> explains that the ISA defines the software-visible interface between programs and the processor. Moving RISC-V into a server host role therefore depends as much on software enablement as on raw CPU core performance.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">BigSky is built as a software-porting machine</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>SiFive’s BigSky SF-2U870 is designed for software porting, workload tuning and validation rather than as a conventional volume server product. The machine uses 32 P870-D cores running at 2.0 GHz, 256 GB of DDR5-5600 memory, four PCIe Gen5 x16 interfaces providing 64 Gen5 lanes, two 7.68 TB U.2 NVMe SSDs and a 10/25 Gb OCP 3.0 network interface.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those PCIe lanes are especially important for accelerator work. A RISC-V server cannot become a useful AI host simply by executing Linux; it also needs enough I/O bandwidth and a mature software path to attach GPUs, storage and networking devices expected in modern datacenter systems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://embeddedcomputing.com/application/hpc-datacenters/amds-rocm-runs-on-on-sifives-bigsky-datacenter-development-platform">Embedded Computing Design independently reported</a> the same Gemma4-E2B setup and BigSky hardware configuration, describing the collaboration as an effort to combine AMD’s open-source GPU software ecosystem with the RISC-V architecture for datacenter AI.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">ROCm is the bridge to the GPU</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ROCm is AMD’s open-source software platform for GPU computing. In this demonstration, its significance is less about introducing a new accelerator and more about proving that the software path can cross an ISA boundary at the host.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes this a software-ecosystem milestone rather than a benchmark victory. SiFive and AMD did not publish evidence that the RISC-V host outperforms an equivalent x86 or Arm host, and the demonstration should not be interpreted that way. What it establishes is that the stack can run an AI model with a RISC-V CPU complex coordinating an AMD GPU.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The distinction also separates this work from BitcoinVersus.tech’s recent coverage of <a href="https://bitcoinversus.tech/2026/09/30/deepseek-and-huawei-open-source-an-ascend-ai-programming-stack/">DeepSeek and Huawei opening an Ascend AI programming stack</a>. Both developments concern software access to accelerators, but the SiFive/AMD work focuses on changing the host ISA beneath an existing GPU ecosystem.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">RISC-V is climbing into larger systems</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>RISC-V’s historical strength has been configurability across microcontrollers, embedded systems and specialized silicon. Datacenter adoption raises a different set of requirements: server-class memory, PCIe, storage, networking, virtualization, operating systems, compilers, libraries and accelerator support all have to arrive together.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That ecosystem challenge is why a development server can matter even before broad commercial deployment. Software vendors need physical systems on which to port code, expose assumptions tied to x86 or Arm, validate drivers and tune workloads. BigSky gives that work a rack-mount target rather than limiting RISC-V datacenter development to simulation or smaller boards.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech recently covered <a href="https://bitcoinversus.tech/2026/09/29/mips-and-xcelsa-use-ai-to-optimize-risc-v-custom-silicon/">MIPS and Xcelsa using AI to optimize RISC-V custom silicon</a>, another example of the architecture expanding beyond a single fixed processor design. SiFive’s BigSky demonstration attacks the problem from the software side: make a high-performance RISC-V host usable with an established accelerator stack.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Open CPU ISA meets open GPU software</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The combination is notable because the two layers are open in different ways. RISC-V provides an open-standard instruction-set architecture from which vendors can build processor implementations. ROCm provides an open-source software environment for programming AMD accelerators. Neither eliminates proprietary hardware, but together they reduce the requirement that an AI server’s host and accelerator software be tied to one traditional CPU ecosystem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is still substantial work between a conference demonstration and production datacenter deployment. Driver maturity, performance tuning, enterprise Linux support, virtualization, management tooling and long-term platform validation all matter. SiFive and AMD themselves describe this as an early step.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But the architecture is now concrete enough to run a modern language model: RISC-V CPU cores at the head node, PCIe connecting the system, AMD GPU silicon executing inference, and ROCm supplying the accelerator software layer. That is a much more consequential test for server RISC-V than merely booting Linux.</p>
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
