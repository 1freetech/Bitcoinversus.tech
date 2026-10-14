---
post_id: 24987
title: "The 7 Most Energy-Efficient AI Models"
live_url: "https://bitcoinversus.tech/2026/10/14/the-7-most-energy-efficient-ai-models/"
featured_media_id: 24985
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/top-7-ai-models-energy-efficiency-1200x630-1.jpg"
status: publish
---

<!-- wp:paragraph -->
<p>Which AI model produces the most output for each watt of GPU power? The strongest apples-to-apples public dataset we found is the <a href="https://ml.energy/leaderboard/">ML.ENERGY Leaderboard v3.0</a>, updated September 23, 2026.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For this investigation, BitcoinVersus.Tech ranked the seven best energy-optimal configurations on ML.ENERGY’s <strong>Problem Solving with Reasoning</strong> workload under its 300 ms median inter-token-latency constraint. The metric is throughput divided by power: <strong>tokens/second/watt</strong>, which is dimensionally equivalent to <strong>tokens per joule</strong>. Higher is better.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24986,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/top-7-ai-tokens-per-watt-chart.jpg" alt="Horizontal bar chart ranking seven AI models from number seven to number one by measured tokens per second per watt, led by GPT OSS 20B at 35.15." class="wp-image-24986" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>Comparison of the seven highest measured reasoning-inference efficiency results in the qualifying ML.ENERGY v3.0 configurations.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">#7 — Qwen 3 14B</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>5.48 tokens/s/W</strong> at 0.1826 J/token on one NVIDIA B200 using BF16. It is the least efficient model in this top-seven group, but still substantially ahead of larger dense models lower on the full leaderboard.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">#6 — Qwen 3 8B</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>5.77 tokens/s/W</strong> at 0.1732 J/token on one B200 using BF16. The result is a reminder that a smaller parameter count does not automatically guarantee the best energy efficiency.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">#5 — NVIDIA Nemotron Nano 12B V2</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>7.98 tokens/s/W</strong> at 0.1254 J/token on one H100 using BF16.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">#4 — NVIDIA Nemotron Nano 9B V2</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>9.18 tokens/s/W</strong> at 0.1089 J/token on one H100 using BF16. The result also shows why our earlier look at the <a href="https://bitcoinversus.tech/2026/10/01/qualcomm-dragonfly-ai-data-centers-tokens-per-watt/">tokens-per-watt race</a> matters more than raw accelerator wattage alone.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[tweet https://twitter.com/nvidia/status/2049524206673805734]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><em>NVIDIA has argued that AI infrastructure should increasingly be evaluated by delivered token economics rather than GPU-hour cost alone.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">#3 — Qwen 3 30B A3B Thinking</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>11.41 tokens/s/W</strong> at 0.0876 J/token on one B200 using BF16. Its 30 billion total parameters contrast with only 3 billion active parameters in the benchmark, an important clue to its efficiency.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">#2 — GPT OSS 120B</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>25.21 tokens/s/W</strong> at 0.0397 J/token on one B200 using MXFP4. Despite 117 billion total parameters, the leaderboard lists only about 5 billion active parameters.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=veM3x9Lhw2A]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><em>ML.ENERGY researcher Jae-Won Chung explains the measurement and optimization problem behind energy-efficient deep learning.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">#1 — GPT OSS 20B</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>35.15 tokens/s/W</strong> at just <strong>0.0284 J/token</strong> on one B200 using MXFP4. That is roughly 39% more efficient than GPT OSS 120B and more than six times the measured efficiency of Qwen 3 14B in these qualifying configurations.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">What the ranking actually measures</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is not a pure model-architecture contest. Each result reflects a <strong>model + numerical precision + GPU + serving configuration + workload</strong>. GPT OSS uses MXFP4 here, while several Qwen and Nemotron entries use BF16, and five of the seven winning configurations run on B200 rather than H100.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ML.ENERGY’s own <a href="https://ml.energy/blog/measurement/energy/diagnosing-inference-energy-consumption-with-the-mlenergy-leaderboard-v30/">analysis of the benchmark</a> shows that active parameter count, batching, GPU generation and multi-GPU scaling can all materially change energy per token. That fits the broader trend BitcoinVersus.Tech has tracked around <a href="https://bitcoinversus.tech/2026/10/04/ai-hardware-mixture-of-kittens-nvl72-512-gpu-training-1-41x-faster/">software-driven AI efficiency gains</a> and the possibility that <a href="https://bitcoinversus.tech/2026/10/04/artificial-intelligence-cheaper-ai-could-drive-data-center-power-demand-even-higher/">cheaper AI can still increase total power demand</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Bottom line:</strong> GPT OSS 20B holds the strongest verified result in this dataset at 35.15 tokens per joule. But data-center operators should track tokens/J, J/token, energy per completed response and model quality together. A model that generates efficiently can still use more total electricity if it needs a much longer reasoning trace to finish the same job.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong><br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->