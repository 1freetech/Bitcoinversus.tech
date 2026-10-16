---
post_id: 25897
title: "GPT-6 Astra Leads New Robot Arm Test but Humans Are Still 100× Faster"
slug: gpt-6-astra-aa-robotics-robot-arm-benchmark
status: publish
published: 2026-10-15T22:55:08
modified: 2026-10-15T22:55:43
live_url: https://bitcoinversus.tech/2026/10/15/gpt-6-astra-aa-robotics-robot-arm-benchmark/
featured_media: 25896
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/aa-robotics-benchmark-cover-1200x630-1.jpg
qr_media_id: 24043
seo_title: "GPT-6 Astra Leads New Robot Arm Test but Humans Are Still 100× Faster"
seo_description: "Artificial Analysis says GPT-6 Astra led AA-Robotics v0.1, a new robot-arm benchmark, while frontier AI models remained about 100× slower than humans."
---

<!-- wp:paragraph -->
<p>Artificial Analysis has launched <a href="https://artificialanalysis.ai/articles/aa-robotics"><strong>AA-Robotics v0.1</strong></a>, a research-preview benchmark that gives frontier language models direct control of a real 6-axis robot arm. The early result is a useful reality check for physical AI: the models can now complete simple manipulation tasks, but they remain far slower and more expensive than a human doing the same work.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the first eight tabletop tasks, <strong>GPT-6 Astra scored 69.4 out of 100</strong>, followed by GPT-6.1 Sol at 64.6, Gemini 4 Argon at 55.3, Claude Opus 5.5 at 48.8 and Claude Fable 5.1 at 46.3. The tasks include pressing a button, placing a toy inside a marked area, pouring a drink, tidying blocks, matching shapes, writing “hello world,” building a tower and measuring a box.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/singularity/comments/1x6nlgt/welcome_to_the_era_of_embodied_ai_introducing/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/singularity/comments/1x6nlgt/welcome_to_the_era_of_embodied_ai_introducing/
</div><figcaption class="wp-element-caption"><em>A current robotics discussion links directly to the AA-Robotics launch and debates the large gap between model accuracy and real-world speed.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>The setup is deliberately simple but revealing. Each model sees the work area through four cameras and writes code against an HTTP API to move a Hiwonder NexArm. Attempts are zero-shot, and a human judge scores the final state of each task. <a href="https://mit-cdfg.github.io/Survey-AI-for-3D-modeling-Robotics/"><strong>MIT CSAIL’s survey of frontier models in robotics</strong></a> lists the benchmark as a real-arm evaluation and reports the same first-release scores and timing data.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The speed gap is the larger story. Artificial Analysis reports that a person averages about <strong>20 seconds per task</strong>, while four of the five tested models cluster around <strong>30 minutes</strong>. Gemini 4 Argon averages about 52 minutes. That puts today’s frontier models roughly two orders of magnitude behind the human baseline on elapsed time.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=evekIaRwsTU","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=evekIaRwsTU
</div><figcaption class="wp-element-caption"><em>Hiwonder demonstrates the NexArm hardware platform used for embodied-AI and robot-learning work.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>Cost also varies sharply. GPT-6.1 Sol averaged <strong>$1.93 per task</strong>, while GPT-6 Astra averaged <strong>$16.36</strong>. Artificial Analysis priced the human baseline at about $0.21 per task using average U.S. hourly earnings. The benchmark therefore shows a real capability milestone without implying that general-purpose language models are ready to replace dedicated industrial robot controllers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction matters as robotics software moves toward more general models. BitcoinVersus.Tech has recently covered <a href="https://bitcoinversus.tech/2026/10/15/standard-bots-adds-ai-skills-to-factory-robots/"><strong>Standard Bots adding AI skills to factory robots</strong></a>, <a href="https://bitcoinversus.tech/2026/10/15/dexforce-humanoid-robots-synthetic-data/"><strong>DexForce training humanoids with synthetic data</strong></a>, and <a href="https://bitcoinversus.tech/2026/10/15/intel-physical-ai-web-summit-2026/"><strong>Intel’s physical-AI push</strong></a>. AA-Robotics adds a measurement layer to that trend by testing how far general frontier models can get when they are placed directly in the control loop.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The main limitation is scope. Version 0.1 covers only five models, eight tasks and one robot arm, and the results come from Artificial Analysis rather than an independent replication. The benchmark is best treated as an early snapshot of embodied-AI progress, not a universal ranking of robotics capability.</p>
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