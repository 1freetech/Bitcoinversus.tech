---
title: "DeepSeek Opens Its AI Stack to Huawei Ascend 950"
published: "2026-09-30T11:05:51"
live_url: "https://bitcoinversus.tech/2026/09/30/deepseek-opens-its-ai-stack-to-huawei-ascend-950/"
featured_image_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/09/a_detailed_cinematic_high_tech_data_center_ser.png"
wordpress_post_id: 19554
featured_media_id: 19553
status: "publish"
---

<!-- wp:paragraph --><p>DeepSeek has opened a new route into Huawei's Ascend AI hardware, releasing a set of programming components on September 30 that moves pieces of its high-performance model stack beyond NVIDIA GPUs and onto Ascend 950 accelerators.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The most concrete release is <a href="https://github.com/deepseek-ai/DeepGEMM-Ascend">DeepGEMM-Ascend</a>, a new implementation of DeepSeek's matrix-multiplication kernel library for Huawei Ascend NPUs. DeepSeek says the package is API-compatible with its existing DeepGEMM workflow and supports BF16, FP8 and FP4 GEMM, MQA logits and MegaMoE operations.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">DeepSeek is rebuilding its low-level stack for Ascend</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The significance is larger than one kernel library. <a href="https://www.reuters.com/world/asia-pacific/deepseek-partners-with-huawei-develop-chip-programming-tools-reducing-reliance-2026-09-30/">Independent reporting on the September 30 release</a> says DeepSeek is open-sourcing programming infrastructure for Huawei's Ascend platform, including compute and communication libraries, as Chinese technology companies deepen efforts to build alternatives to NVIDIA's software ecosystem.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>DeepGEMM-Ascend's own documentation says the initial release targets Ascend 950 devices and uses Ascend-specific techniques including sparse data loading and coroutine-based pipelining. The project also depends on TileLang for one of its kernels, connecting DeepSeek's operator work to a higher-level programming path for the hardware.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>That software layer matters because BitcoinVersus recently covered <a href="https://bitcoinversus.tech/2026/09/27/huawei-atlas-960e-550kw-ai-optics-superpod/">Huawei's Atlas 960E and its optical SuperPoD architecture</a>. Hardware scale alone does not create a competitive AI platform; developers also need compilers, kernels, communication libraries and model tooling that can efficiently use the silicon.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">The software gap is becoming visible in public</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <a href="https://twitter.com/poezhao0605/status/2105195692067020995">same-day analysis posted on X</a> highlights the one-to-one nature of several Ascend ports relative to DeepSeek's existing NVIDIA-oriented components. The post argues that China's software gap is narrowing in public even as chip-production constraints remain a separate challenge.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/poezhao0605/status/2105195692067020995","type":"rich","providerNameSlug":"x","responsive":true,"className":"is-provider-x wp-block-embed-x"} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/poezhao0605/status/2105195692067020995
</div><figcaption class="wp-element-caption"><em>Poe Zhao examines DeepSeek's September 30 Ascend ports and the distinction between a narrowing software gap and continuing hardware-supply constraints.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph --><p>The distinction is important. Porting an optimized software stack does not establish parity between Ascend and NVIDIA hardware, and DeepSeek's published benchmarks are measurements from its own project rather than independent cross-platform tests. What the release does establish is that developers now have more public code for using DeepSeek-style kernels directly on Huawei's accelerator architecture.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Ascend 950 gets a stronger developer layer</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>DeepSeek says DeepGEMM-Ascend hides lower-level details such as fractal layouts, alignment constraints and address calculations behind a lighter abstraction. That is the kind of developer tooling that can determine whether an accelerator is merely available or practical to program at scale.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The release also fits Huawei's broader September push to expand its AI infrastructure from individual accelerators into tightly connected systems. BitcoinVersus previously examined <a href="https://bitcoinversus.tech/2026/09/27/huawei-grid-interactive-ai-data-centers-800-vdc/">Huawei's grid-interactive 800 VDC AI data-center design</a>, where compute density increasingly forces chip, network, cooling and power architecture to evolve together.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For DeepSeek, the open-source strategy gives its model and kernel work another hardware target. For Huawei, it adds recognizable AI software components around Ascend 950 at a time when accelerator ecosystems compete as much on developer access and optimized libraries as on raw silicon specifications.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The competitive context is already visible across China's domestic AI market. BitcoinVersus has also tracked <a href="https://bitcoinversus.tech/2026/09/23/alibaba-zhenwu-v900-ai-chip-20gw-cloud-plan/">Alibaba's Zhenwu V900 chip and 20 GW cloud plan</a>, another example of Chinese companies building more of the compute stack around their own accelerators.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Open code gives the claims something developers can test</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The strongest part of today's announcement is therefore not a promise about replacing CUDA. It is the release of code developers can inspect, compile and benchmark. DeepGEMM-Ascend lists Ascend 950 as its validated target, documents its supported numerical formats and publishes performance tables for dense GEMM, grouped GEMM, MQA logits, MegaMoE and other kernels.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Whether that becomes a durable alternative ecosystem will depend on hardware availability, model support, developer adoption and independent performance results. But September 30 marks a measurable expansion of the public software available around Huawei's newest Ascend generation.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":3} --><h3 class="wp-block-heading"><strong><em>BitcoinVersus.Tech</em></strong></h3><!-- /wp:heading -->
<!-- wp:paragraph --><p><strong><em>Advertisement</em></strong></p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true,"className":"is-provider-x wp-block-embed-x"} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement: follow our X feed for Bitcoin, AI, hardware, software and infrastructure coverage.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph --><p><strong><em>Editor's Note:</em></strong></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p><!-- /wp:paragraph -->
