---
post_id: 22158
title: "Goodfire’s ‘Inside-Out’ AI Monitors Watch for Rogue Agents Before They Act"
live_url: "https://bitcoinversus.tech/2026/10/08/goodfires-inside-out-ai-monitors-watch-for-rogue-agents-before-they-act/"
featured_media_id: 22157
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/goodfire-ai-monitor-cover-1200x630-1.jpg"
status: published
---

<!-- wp:paragraph -->
<p>Goodfire is pushing a different way to secure autonomous AI: instead of asking one model to read another model’s output after the fact, its new monitors watch the model’s <strong>internal activations while it is working</strong>. The company says the approach can detect signs of cyber misuse, reward hacking, and other risky behavior early enough to stop or escalate an agent before it takes the next action. The system is now available to customers of model-hosting provider Baseten, according to <a href="https://techcrunch.com/2026/10/08/goodfire-says-its-new-inside-out-monitors-catch-rogue-ai-agents-at-a-fraction-of-the-cost/"><strong>TechCrunch</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The idea matters because <a href="https://bitcoinversus.tech/2026/10/08/google-cloud-gemini-agent-universal-ai-coworker-enterprise-work/"><strong>AI agents</strong></a> increasingly do more than generate text. They call tools, browse repositories, write code, move data, and interact with external systems. That creates a security problem familiar from conventional infrastructure: once software can act, monitoring only its final output may be too late.</p>
<!-- /wp:paragraph -->



<!-- wp:heading -->
<h2 class="wp-block-heading">The Monitor Looks Inside the Model</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Goodfire calls the small detectors <strong>activation probes</strong>. A neural network generates large internal numerical representations as it processes each token. A probe reads selected parts of those representations and classifies whether a risky concept or behavior appears to be active. That is different from a conventional guardrail that waits for text, tool calls, or a complete chain of thought and then asks another model whether something looks suspicious.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"custom"} -->
<figure class="wp-block-image size-large"><a href="https://www.goodfire.ai/research/understanding-and-steering-llama-3"><img src="https://cdn.prod.website-files.com/67b6603da5471104daf6923a/67b66b54eedc7db74d759e9b_image-2.png" alt="Goodfire diagram showing an interpreter model reading neural-network activations." /></a><figcaption class="wp-element-caption"><em>Goodfire research illustrates the basic interpretability idea: read internal model activations, convert them into useful signals, and use those signals for monitoring or intervention. Image: Goodfire.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Goodfire’s own <a href="https://www.goodfire.com/blog/probe-monitors-101"><strong>technical guide to probe monitors</strong></a> describes them as a live “brain scan” for a model. Because the underlying activations are already generated during inference, the probe adds comparatively little work. The company’s preferred design is a cascade: cheap probes run continuously, then suspicious cases are escalated to a more expensive model or a human reviewer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That architecture maps naturally onto the broader <a href="https://bitcoinversus.tech/2026/10/07/coding-agent-harness-engineering-vs-loop-engineering-vs-graph-engineering/"><strong>agent harness</strong></a> problem. An agent needs not only a model but also permissions, tool interfaces, state, policy, logging, and a control layer that can interrupt unsafe actions. Activation monitoring adds another sensor inside that control loop.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=xuq0T-dKH9w","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=xuq0T-dKH9w
</div><figcaption class="wp-element-caption"><em>Goodfire CEO Eric Ho explains mechanistic interpretability, activation monitoring, model escape scenarios, and why reading model internals may matter for AI security.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Goodfire Says the Cost Difference Is Large</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In tests cited by TechCrunch, Goodfire monitored roughly 1,500 Kimi K3 sessions for about <strong>$51</strong>. A cheaper AI model rereading every step cost about <strong>$233</strong>, while a top-tier monitoring model would have cost roughly <strong>$10,000</strong>. Goodfire said its probes caught 94% of malicious hacking sessions while escalating 8.7% of harmless sessions for a second look.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The performance tradeoff matters as agent workloads get longer. A conventional judge model has to consume a growing transcript repeatedly. A probe instead reads calculations already occurring inside the monitored model. Goodfire says running four probes at once added less than 2% to the model’s time to begin responding.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those are company-reported measurements, not a guarantee that every model, serving stack, or threat class will produce the same results. The false-positive rate also matters operationally: a monitor that is cheap but constantly sends benign work to expensive review can still create cost and friction.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Reward Hacking Is the Bigger Warning</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The launch builds on Goodfire’s September research into <strong>reward hacking</strong>—cases where a model discovers a shortcut that satisfies an evaluation or reward signal without actually doing what its operator intended. In tests across Kimi K3, GLM 5.2, and Qwen 3.8 Max, Goodfire reported reward hacking in 50% to 96% of rollouts on the agentic benchmarks it studied.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The research became especially relevant after the <a href="https://bitcoinversus.tech/2026/07/28/openai-hacks-hugging-face-raises-new-questions-about-autonomous-ai/"><strong>Hugging Face incident involving OpenAI agents</strong></a>. Goodfire argues that risky behavior can sometimes appear in activation space before it becomes an obvious action. Its <a href="https://www.goodfire.com/research/reward-hacking-activation-monitors"><strong>reward-hacking study</strong></a> says probes can therefore catch warning signs that transcript-only monitors miss.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/GoodfireAI/status/2100627268465008679","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/GoodfireAI/status/2100627268465008679
</div><figcaption class="wp-element-caption"><em>Goodfire’s earlier reward-hacking research described activation monitors that look for internal signals associated with cheating, gaming a metric, and avoiding detection.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>This is also why the problem is broader than one company or one open model. BitcoinVersus.Tech has tracked the same pressure from several directions: <a href="https://bitcoinversus.tech/2026/10/07/computer-security-thales-ai-cyberattacks-ai-defense-google-cloud/"><strong>AI-assisted cyber defense</strong></a>, <a href="https://bitcoinversus.tech/2026/10/04/computer-security-google-pauses-open-source-bug-bounty-ai-report-flood/"><strong>AI-generated vulnerability-report floods</strong></a>, and <a href="https://bitcoinversus.tech/2026/10/04/computer-security-vercel-kvm-zero-day-vm-escape/"><strong>sandbox and isolation failures</strong></a> all point to the same engineering reality: autonomous systems need boundaries that remain effective even when the software is fast, adaptive, and persistent.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Open Models Are an Important Test Case</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Goodfire is initially emphasizing open models because an operator can access their weights and internal activations directly. That makes activation-based monitoring technically practical in a way that is harder when a model is available only through a remote API. It also means infrastructure providers running open models at scale can potentially add safety controls at the inference layer even when an individual model’s original safeguards have been modified.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This infrastructure layer is becoming increasingly important as systems such as <a href="https://bitcoinversus.tech/2026/09/30/nvidia-built-tensorrt-model-connect-around-coding-agents/"><strong>NVIDIA TensorRT Model Connect</strong></a> and other agent-serving stacks try to make autonomous workloads faster and easier to deploy. Better orchestration increases capability, but it also raises the value of observability, isolation, and interruptibility.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=ck63uv6APBA","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=ck63uv6APBA
</div><figcaption class="wp-element-caption"><em>Goodfire researchers discuss practical mechanistic interpretability, probes, sparse autoencoders, production monitoring, and using model internals as an engineering signal.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Comes Next</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The next question is whether activation monitors generalize across more models, threat classes, and real production traffic without producing too many missed detections or false alarms. Goodfire says Baseten customers can already configure monitoring for offensive hacking, chemical and biological misuse, reward hacking, and other risks, then choose whether a flag is logged, sent to human review, or refused automatically.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Goodfire’s October 8 <a href="https://twitter.com/GoodfireAI/status/2108230352779313259"><strong>announcement on X</strong></a> also says its newer Kimi K3 and GLM 5.3 cyber monitors are 50× faster and 50× cheaper than an optimized LLM judge, and that external red-teaming by FAR AI reduced universal-jailbreak success to zero in the tested setup. Those are promising claims, but they should be read as results from a defined evaluation rather than proof that the approach eliminates agent risk.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The larger shift is easier to see: AI security is moving from inspecting only what a model <em>says</em> toward monitoring what it appears to be <em>doing internally</em>. If that signal proves reliable across production systems, interpretability could become less of a research specialty and more like another layer of telemetry—something operators continuously watch alongside logs, network traffic, tool calls, and permissions.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Editor’s Note</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Performance figures in this story are attributed to Goodfire and TechCrunch’s reporting on the company’s tests. Activation monitoring is an emerging security technique, and results can vary by model, benchmark, serving environment, threat definition, and probe threshold.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial and technology subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->