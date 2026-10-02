---
post_id: 20174
title: "AI Is Starting to Write the CUDA Kernels GPU Engineers Used to Hand-Tune"
live_url: "https://bitcoinversus.tech/2026/10/02/ai-is-starting-to-write-the-cuda-kernels-gpu-engineers-used-to-hand-tune/"
featured_media_id: 20171
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/ai-agents-optimize-cuda-kernels.png"
status: publish
seo_title: "AI Is Starting to Write the CUDA Kernels Engineers Hand-Tuned"
seo_description: "AI coding agents are beginning to automate CUDA kernel optimization, shifting expert GPU engineers toward benchmarking, verification and supervision."
---

<!-- wp:paragraph -->
<p>Some of the most specialized programming work in AI infrastructure is starting to shift from hand-tuned CUDA code toward AI-supervised optimization loops.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A new <a href="https://www.businessinsider.com/cuda-engineers-adapt-ai-reshapes-nvidia-chip-expertise-2026-10" target="_blank" rel="noopener noreferrer nofollow">Business Insider report</a> says engineers who specialize in CUDA—the programming model used to extract performance from NVIDIA GPUs—are increasingly spending less time manually tuning every low-level kernel and more time supervising coding agents that search the optimization space for them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The shift does not make CUDA expertise irrelevant. It changes where that expertise is applied: defining constraints, reading profiler output, validating numerical correctness, recognizing bad optimizations and deciding whether an apparently faster kernel is actually safe to ship.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One public example comes from Ravi Theja, who described an <a href="https://twitter.com/ravithejads/status/2086678012037394526" target="_blank" rel="noopener noreferrer">AutoResearch experiment</a> in which coding agents iterated on a GPU Mode kernel challenge. He said he entered with little CUDA background, built a loop around agents, verification, experiment memory and compute, and finished fifth overall after more than 500 official submissions.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/ravithejads/status/2086678012037394526","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/ravithejads/status/2086678012037394526
</div><figcaption class="wp-element-caption"><em>Ravi Theja describes using coding agents, verification and experiment memory to optimize a B200 GPU kernel competition entry.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">CUDA optimization is a search problem</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>High-performance GPU kernels are full of tradeoffs. Developers choose thread-block shapes, memory layouts, tiling strategies, shared-memory use, vector widths and synchronization patterns while trying to keep the GPU occupied and data moving efficiently.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The difficulty is that a locally sensible change can make the whole kernel slower. A different tile size may reduce memory traffic but increase register pressure. More parallelism can improve occupancy while creating extra synchronization. A kernel can benchmark well on one tensor shape and regress on another.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes the job unusually compatible with an agent loop: generate a candidate, compile it, benchmark it on real hardware, compare the result, keep useful changes and discard regressions.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">NVIDIA has already demonstrated the model at scale</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>NVIDIA's <a href="https://developer.nvidia.com/blog/nvidia-avo-reaches-100-on-arc-agi-3-demonstrating-a-frontier-level-general-purpose-architecture-for-long-horizon-autonomous-agents/" target="_blank" rel="noopener noreferrer nofollow">AVO research</a> provides a primary-source example. In a seven-day attention-kernel optimization run on DGX B200 systems, NVIDIA says AVO explored more than 500 optimization directions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The resulting multihead-attention kernels reportedly outperformed cuDNN by up to 3.5% and FlashAttention-4 by up to 10.5% across the evaluated cases. The important part is not only the final number. The system sustained a long search, kept memory of prior attempts and used verification to avoid repeatedly making the same bad changes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is the engineering pattern Business Insider is describing: the scarce human skill moves upward from manually trying every optimization to designing and supervising the optimization process.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=7JoqmM5EPXo","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=7JoqmM5EPXo
</div><figcaption class="wp-element-caption"><em>YC Root Access looks at a company building AI systems that use agents to optimize GPU software, including custom kernels.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">The engineer becomes the verifier</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Kernel generation is only useful if the output is correct. A faster result that silently changes precision, produces unstable values or only works for one narrow input shape is not an optimization—it is a bug with a good benchmark.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why CUDA knowledge remains valuable even when an agent writes more of the code. Experienced engineers know which measurements matter, how to read Nsight-style profiling traces, where memory stalls hide and when a benchmark result is suspicious.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In other words, the AI can expand the number of experiments. The engineer still defines what counts as success.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">This is part of a larger agentic coding shift</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech recently covered how <a href="https://bitcoinversus.tech/2026/09/30/nvidia-built-tensorrt-model-connect-around-coding-agents/">NVIDIA built TensorRT Model Connect around coding agents</a>, giving software agents a structured route into model conversion and deployment workflows.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We also mapped <a href="https://bitcoinversus.tech/2026/09/30/10-github-repositories-agentic-ai-production-stack/">10 GitHub repositories forming an agentic AI production stack</a>, where the recurring pattern is the same: an agent is most useful when it can call real tools, inspect real outputs and loop against objective tests.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>And NVIDIA's <a href="https://bitcoinversus.tech/2026/09/27/nvidia-isaac-ros-5-0-brings-ai-agents-into-robot-development/">Isaac ROS 5.0 agent tooling</a> shows the same architecture moving into robotics, where code generation has to meet physical-system constraints rather than just pass a text-based review.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">What changes for CUDA programmers</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The near-term job is likely to look less like manually writing every kernel from scratch and more like running a high-performance laboratory. Engineers define the benchmark, establish correctness tests, expose profiler data, let agents search aggressively and then inspect the winners.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That does not eliminate low-level programming. It makes understanding the hardware more important at the review layer, because somebody still has to know why a generated kernel is fast, where it might fail and whether the improvement is worth maintaining.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The bigger shift is that elite GPU optimization is becoming partially automatable. The engineer's advantage increasingly comes from knowing how to build the search loop, how to verify it and how to recognize when the machine found something genuinely better.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">BitcoinVersus.Tech</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p><strong>Advertisement</strong></p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Editor's Note</h3><!-- /wp:heading -->
<!-- wp:paragraph --><p>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p><!-- /wp:paragraph -->