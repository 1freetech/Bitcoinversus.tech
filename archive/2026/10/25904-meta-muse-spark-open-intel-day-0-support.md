---
post_id: 25904
title: "Meta Opens Muse Spark as Intel Adds Day-0 Support"
slug: meta-muse-spark-open-intel-day-0-support
status: publish
published: 2026-10-15T23:04:53
modified: 2026-10-15T23:04:53
live_url: https://bitcoinversus.tech/2026/10/15/meta-muse-spark-open-intel-day-0-support/
featured_media: 25902
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/meta-muse-spark-open-intel-cover-1200x630-1.jpg
seo_title: "Meta Opens Muse Spark as Intel Adds Day-0 Support"
seo_description: "Meta released Muse Spark Open with 816B total parameters and a 1M-token context window as Intel added day-0 support across Xeon and upcoming D-series GPUs."
---

<!-- wp:paragraph -->
<p>Meta released the weights for Muse Spark Open on October 15, 2026, moving one of its largest agentic AI models into downloadable, self-hostable form. At the same time, Intel announced day-0 support across Xeon processors and its upcoming D-series data-center GPUs, giving the release a server-side deployment path in addition to Meta’s desktop work with Apple.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>According to <a href="https://research.meta.ai/blog/muse-spark-open">Meta AI Research</a>, Muse Spark Open is a sparse mixture-of-experts model with 816 billion total parameters, about 42 billion active per token and a one-million-token context window. It accepts text, images, audio and video as input and produces text. Meta trained it around coding and agentic workflows such as reading large codebases, calling tools, recovering from failed steps and coordinating longer tasks.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/AIatMeta/status/2110779756828557356","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/AIatMeta/status/2110779756828557356
</div><figcaption class="wp-element-caption"><em>Meta announced Muse Spark Open as an open-weight release focused on coding, multimodal reasoning and long-horizon agentic work.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Intel is targeting both CPUs and GPUs</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.intel.com/content/www/us/en/newsroom/news/artificial-intelligence/intel-offers-day-0-support-for-meta-muse-spark-open.html">Intel’s launch note</a> says Muse Spark Open has already been tested on its upcoming D-series data-center GPU. Intel lists 160 GB of memory per D-series card and says a four-card configuration can host the model in a conventional air-cooled rack. On Xeon, Intel is using INT4 weight-only quantization with AMX acceleration to reduce the model’s memory footprint for offline inference.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The architecture matters because only a fraction of the model’s experts are active for each token, but serving still requires the complete checkpoint to be available in memory. That makes memory capacity, interconnect bandwidth and low-precision execution central to practical deployment. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/10/14/intel-one-command-llm-inference-xeon/">Intel’s one-command LLM inference work on Xeon</a>, which fits the same push toward making large models easier to deploy on existing infrastructure.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=b-P5ZQ1NxxE","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=b-P5ZQ1NxxE
</div><figcaption class="wp-element-caption"><em>This freeCodeCamp course walks through Meta’s Muse models and Muse Code, including agent workflows, structured outputs and developer integrations.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Open weights widen the hardware race</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Muse Spark Open is not just another hosted model launch. Developers can download the weights, tune the model and run it through multiple inference stacks. That creates a direct contest among hardware vendors to make the same model fit more efficiently across CPUs, GPUs and local systems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The release also lands as agentic AI moves across the hardware stack. BitcoinVersus.Tech has tracked <a href="https://bitcoinversus.tech/2026/10/14/nvidia-releases-nemotron-3-5-lightning-for-fast-local-agentic-ai/">NVIDIA’s Nemotron 3.5 Lightning work on local agentic AI</a> and <a href="https://bitcoinversus.tech/2026/10/15/syntiant-always-on-ai-stepx-neo/">Syntiant’s push to move always-on AI into edge devices</a>. Muse Spark Open extends that trend upward: a frontier-scale model whose deployment story now spans desktop systems, enterprise CPUs and data-center accelerators.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The important distinction is that Meta’s performance claims remain vendor-reported, while Intel’s deployment claims describe its own optimized paths. The broader, verifiable development is simpler: the weights are available, the model is multimodal and sparse, and several hardware ecosystems are already competing to run it efficiently.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong><br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->