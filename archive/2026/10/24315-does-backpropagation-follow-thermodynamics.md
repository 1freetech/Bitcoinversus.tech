---
post_id: 24315
title: "Does Backpropagation Follow Thermodynamics?"
slug: does-backpropagation-follow-thermodynamics
status: publish
published: 2026-10-13T11:10:11
modified: 2026-10-13T11:45:10
live_url: https://bitcoinversus.tech/2026/10/13/does-backpropagation-follow-thermodynamics/
featured_media: 24311
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/backpropagation-thermodynamics-cover-1200x630-1.jpg
qr_media_id: 24043
seo_title: "Does Backpropagation Follow Thermodynamics?"
seo_description: "A viral post says backpropagation is a special case of the second law of thermodynamics. The physics connection is real, but the claimed proof and AI energy-floor numbers are not verified."
---

<!-- wp:paragraph -->
<p>A viral X post claims a physicist at ETH Zurich has finally proved that backpropagation is a special case of the second law of thermodynamics. The idea is intriguing. The evidence does not support the claim as stated.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/_yusufknl/status/2109689152895902038","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/_yusufknl/status/2109689152895902038
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>The viral post argues that backpropagation is literally a thermodynamic process and assigns theoretical energy floors to frontier AI models.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech could not locate the described 41-page ETH Zurich paper in ETH’s 2026 research listings or recent arXiv results, and the post does not name the author or paper. That does not prove no such manuscript exists, but it means the strongest part of the claim is currently unverifiable.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is also a technical mix-up. Backpropagation and gradient descent are not the same thing. Backpropagation efficiently computes derivatives of a network’s loss with respect to its weights using the chain rule. Gradient descent then uses those derivatives to update the weights. <a href="https://www.teach.cs.toronto.edu/~csc311notes/neural_networks/backpropagation.html">University of Toronto course notes derive backpropagation directly from the chain rule</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=BMYvfVk8Ar0","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=BMYvfVk8Ar0
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>freeCodeCamp.org’s open learning course traces Geoffrey Hinton’s deep-learning work from Boltzmann machines through backpropagation and later neural-network ideas.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For continuous-time gradient flow, the loss does satisfy a simple identity. If the parameters follow dθ/dt = −∇L, then dL/dt = −||∇L||² ≤ 0. That explains why loss falls under idealized gradient flow. It does not by itself make backpropagation a thermodynamic law. Real training uses finite learning rates, minibatches, momentum and other optimizers, so loss can rise from one step to the next. BitcoinVersus.Tech previously linked to a <a href="https://bitcoinversus.tech/2026/05/24/stanford-releases-free-lecture-explaining-how-llms-like-chatgpt-and-claude-are-built/">Stanford lecture on how modern LLMs are built</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Thermodynamics is still genuinely useful in machine learning. Researchers have used Fokker–Planck equations, entropy production and fluctuation theorems to study stochastic gradient descent. A <a href="https://arxiv.org/abs/2306.03521">2023 paper on machine learning in and out of equilibrium</a> describes “close parallels” between SGD and physical processes and analyzes entropy production in parameter space. That is a real connection, but it is not the same as proving that backpropagation is the second law.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=tIeHLnjs5U8","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=tIeHLnjs5U8
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>3Blue1Brown walks through the calculus of backpropagation and shows how the chain rule propagates gradients backward through a neural network.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The viral post also says Chinchilla-style scaling laws look thermodynamic. The original scaling-law work instead reports <a href="https://openai.com/index/scaling-laws-for-neural-language-models/">empirical power-law relationships between loss, model size, data and compute</a>. BitcoinVersus.Tech has also explained <a href="https://bitcoinversus.tech/2026/07/28/what-happens-inside-an-ai-data-center-when-you-ask-chatgpt-a-question/">what happens inside an AI data center</a>. Those systems absolutely face physical energy limits, but a power law in compute is not automatically a thermodynamic equation.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The biggest unsupported leap is the claimed energy floor: E_min = kT × N × ln(1/ε), followed by claims that GPT-4, Claude 3.5 and Gemini Ultra trained at 17×, 12× and 23× their theoretical minimums. The established Landauer principle concerns the minimum heat associated with logically irreversible information erasure: kT ln 2 per erased bit. BitcoinVersus.Tech could not find a primary source deriving the viral formula as a capability-level training-energy floor for frontier models, or validating those three ratios. The broader power problem is real: <a href="https://bitcoinversus.tech/2026/10/06/energy-us-power-demand-record-highs-2026-2027-ai-crypto-data-centers/">AI data centers are already pushing electricity demand higher</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Geoffrey Hinton did leave Google in 2023 so he could speak more freely about AI risks. But that history should not be rewritten into a claim that he left because nobody understood why backpropagation works. <a href="https://www.cs.toronto.edu/~hinton/backprop.html">Hinton’s own publication record on backpropagation</a> goes back to the 1980s, and the mathematics of how the algorithm computes gradients is well established.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The interesting story is not that “the network doesn’t learn, it cools.” It is that optimization, statistical mechanics and information thermodynamics increasingly overlap. That connection is real. The viral post pushes it far beyond what the cited evidence currently supports.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->