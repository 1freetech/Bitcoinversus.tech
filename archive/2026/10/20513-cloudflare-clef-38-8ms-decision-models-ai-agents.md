<!-- wp:paragraph -->
<p>Cloudflare is pushing a different kind of AI model into the agent stack: one designed to make bounded decisions instead of writing paragraphs. On October 1, the company launched Clef and Clef-flash on Workers AI, with open weights under Apache 2.0 and a structured API meant for routing, classification, guardrails and other high-speed agent decisions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In <a href="https://blog.cloudflare.com/clef-decision-models/">Cloudflare’s launch announcement</a>, the company reports a 38.8 ms median decision latency for Clef-flash and 209.3 ms for the larger Clef across its benchmark runs. <a href="https://www.theregister.com/ai-and-ml/2026/10/01/cloudflare-tries-to-outplay-jev-with-open-weight-clef-models/5300649">The Register’s independent coverage</a> adds an important caveat: the benchmark results are self-reported and had not yet been independently reproduced when it published.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Cloudflare Clef is built to decide, not chat</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A normal large language model is optimized to generate open-ended text. Clef takes a different path. Give it a state plus a schema of allowed questions and answers, and it returns probabilities for the permitted choices. An application can then route a support ticket, flag a risky request, choose a tool or escalate to a human without parsing a free-form response.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes decision models a potential control layer for increasingly autonomous software. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/09/29/openai-launches-dots-always-on-ai-agents-that-work-across-apps/">OpenAI’s always-on Dots agents</a>, where the value of an agent depends not only on what it can generate but on whether it can reliably choose what to do next.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cloudflare summarized the idea in <a href="https://twitter.com/Cloudflare/status/2105747536510099540">its official Clef launch post on X</a>, describing Clef and Clef-flash as open-source decision models for high-speed classification and agentic workflows.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/Cloudflare/status/2105747536510099540","type":"rich","providerNameSlug":"x","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio wp-block-embed-x"} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://twitter.com/Cloudflare/status/2105747536510099540
</div><figcaption class="wp-element-caption"><em>Cloudflare introduces Clef and Clef-flash as decision models for fast classification and agentic workflows.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Clef-flash targets the hot path inside AI agents</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Cloudflare’s larger Clef model uses a 27-billion-parameter Qwen backbone, while Clef-flash uses a 9-billion-parameter backbone. Both support a long context window and multimodal inputs, allowing the same decision interface to classify text, structured data and visual content instead of forcing every workflow through a general-purpose chatbot.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The speed claim is the headline, but the architecture is the bigger idea. Cloudflare says Clef-flash reached a 38.8 ms median in its tests because the model scores allowed choices rather than autoregressively generating an answer token by token. The company also says the Clef family is Jev-API compatible, making it easier for developers already experimenting with decision-model workflows to swap implementations.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=LJIm1EL4X6Y","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio wp-block-embed-youtube"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=LJIm1EL4X6Y
</div><figcaption class="wp-element-caption"><em>Fahd Mirza tests the 27B Clef model locally across text, image and video decision tasks.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Decision models could become an agent control plane</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The practical value appears when one agent hands work to another system. A team bot, coding agent or support agent may need to decide whether to call a tool, ask for approval, route work to a specialist or stop. Those steps are closer to classification than creative generation.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why Clef fits the same broader shift visible in <a href="https://bitcoinversus.tech/2026/10/03/xai-team-bots-shared-ai-coworker-whole-teams/">xAI’s Team Bots</a>: as agents become shared infrastructure, orchestration decisions become part of the product rather than invisible glue code.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Reliability matters just as much as speed. BitcoinVersus.Tech has also covered <a href="https://bitcoinversus.tech/2026/09/28/nvidia-adds-a-hardware-watchdog-for-autonomous-ai-agents/">NVIDIA’s hardware watchdog for autonomous AI agents</a>, another example of the industry building explicit control layers around systems that can act without waiting for a human at every step.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Open weights make Clef more than a hosted API</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Cloudflare is publishing the Clef weights under Apache 2.0 while also serving the models through Workers AI. That gives developers a choice between running the models on Cloudflare’s infrastructure or experimenting with the weights locally on sufficiently large GPUs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is still an important openness boundary. The Register reports that Cloudflare’s training datasets are not public, so “open weights” is the more precise description than assuming every part of the training pipeline can be independently audited.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Cloudflare is also turning Clef into an RL platform</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The model launch is only one half of Cloudflare’s move. The company is also introducing reinforcement-learning fine-tuning for Clef, beginning with hands-on support from its forward-deployed engineering team and eventually moving toward a self-service workflow.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If decision models become common, the agent stack could split into specialized layers: large models for reasoning and generation, smaller decision models for fast structured choices, and explicit safety systems that can stop or escalate actions. Clef is Cloudflare’s bet that not every AI decision needs another paragraph of generated text.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">BitcoinVersus.Tech</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Advertisement</h3>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio wp-block-embed-x"} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>Advertisement from BitcoinVersus.Tech.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Editor’s Note</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you value independent technology reporting, consider supporting BitcoinVersus.Tech with a Bitcoin donation: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->