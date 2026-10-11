---
post_id: 23578
title: "AI Agents Now Use 7× More Tokens Than Humans on OpenRouter"
live_url: "https://bitcoinversus.tech/2026/10/11/ai-agents-7x-more-tokens-openrouter-cache/"
featured_media_id: 23574
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/openrouter-agents-cache-cover.jpg"
status: publish
---

<!-- wp:paragraph -->
<p><strong>AI agents have become the dominant source of token traffic on OpenRouter. In the last week of September, OpenRouter says agentic API keys used about seven times as many tokens as human-classified API keys—and nearly nine out of every ten agentic tokens were cached prompt reads.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The important part is not simply that “AI is using more AI.” The new <a href="https://openrouter.ai/data/newsletter/cache-is-crucial">OpenRouter telemetry published October 8</a> shows how differently autonomous agents use models: they repeatedly resend system prompts, tool definitions, files, conversation history, and prior tool results while taking many small steps toward a goal.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://openrouter.ai/images/data/inferred/308_01.jpg" alt="OpenRouter chart comparing weekly agentic, human, and mixed token traffic through September 2026" /><figcaption class="wp-element-caption"><em>OpenRouter says agentic API keys first passed human-classified keys on February 6. By the final week of September, agent traffic had widened to roughly seven times human token volume.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Agents keep rereading the same context</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A normal chat often looks like one human question followed by one model answer. An agent behaves more like a loop. It reads the goal, checks tools, takes an action, reads the result, updates its state, and calls the model again. Each new model call can carry most of the previous context with it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why raw token volume can be misleading. OpenRouter says cached prompt tokens were just under <strong>90%</strong> of all agentic tokens in September. Novel prompt tokens made up most of the remainder, while output plus reasoning represented only about <strong>1%</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://openrouter.ai/images/data/inferred/308_02.jpg" alt="OpenRouter chart showing cached prompts dominate agentic token usage while human traffic contains more novel prompts and outputs" /><figcaption class="wp-element-caption"><em>The contrast is stark: agents mostly reuse cached context, while human traffic contains a much larger share of new prompts, reasoning, and output.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=p1IrHmclXMs","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=p1IrHmclXMs
</div><figcaption class="wp-element-caption"><em>This agent-memory walkthrough explains why an agent repeatedly rebuilds working context and why KV cache is a runtime optimization rather than long-term memory.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Seven times the tokens does not mean seven times the bill</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Cached tokens are much cheaper than fresh input or generated output because the provider can reuse prior computation instead of processing the same prompt prefix from scratch. OpenRouter’s example using current Claude Sonnet 5 pricing puts one million agentic tokens with an 87% cache share at about $0.51, versus roughly $2.08 if none of that context were cached.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So the headline token count is not a spending chart. It is better understood as a picture of workload shape. Agents are creating enormous volumes of repeated context, and the economics increasingly depend on whether providers can recognize and reuse that context efficiently.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction matters alongside BitcoinVersus’ earlier look at <a href="https://bitcoinversus.tech/2026/08/10/model-routing/">model routing</a>. Choosing a model is only part of the cost equation; routing a long-running agent between providers can also affect cache reuse, latency, and effective price.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/openrouter/comments/1wrfqks/token_cache_rate/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/openrouter/comments/1wrfqks/token_cache_rate/
</div><figcaption class="wp-element-caption"><em>OpenRouter users have been comparing cache-hit rates across providers because the same model can produce very different effective costs when repeated agent context misses the cache.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The hardware story is memory, not only compute</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>KV cache stores the attention keys and values produced while a model processes previous tokens. Keeping that state available allows the model to continue generating without recomputing the entire sequence. The tradeoff is memory capacity and bandwidth: longer contexts, more simultaneous agents, and more active sessions all increase the amount of state that inference infrastructure has to manage.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=hgddOXfQiW0","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=hgddOXfQiW0
</div><figcaption class="wp-element-caption"><em>This technical walkthrough builds a KV cache from scratch and shows why LLM decode performance becomes tightly connected to memory bandwidth and VRAM capacity.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>That makes the trend relevant to the memory supply chain. BitcoinVersus recently covered <a href="https://bitcoinversus.tech/2026/09/30/micron-54-billion-quarter-ai-memory-demand/">Micron’s surge in AI-memory demand</a>. Agentic workloads add another reason HBM capacity and memory bandwidth can matter just as much as raw accelerator FLOPS.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Cache performance has improved fast</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>OpenRouter’s September data also shows how aggressively inference providers have optimized for repeated context. Models launched in Q3 2026 averaged an <strong>88.2% agentic cache rate</strong>, compared with <strong>54.8%</strong> for models launched in Q2 2025.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Across providers, the median agentic cache rate rose from 44% in January to 85% in September. Eleven of 54 providers were above 90% in September, with some near 96%. Those numbers help explain why agent use can grow so quickly without token spending rising at exactly the same rate.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/hermesagent/comments/1w5oq32/huge_expenses_on_simple_tasks/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/hermesagent/comments/1w5oq32/huge_expenses_on_simple_tasks/
</div><figcaption class="wp-element-caption"><em>One agent user described seeing large prompts repeatedly re-sent during simple scheduled tasks—an everyday example of why context size and cache behavior now matter to agent economics.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Agent activity is not the same thing as human adoption</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There is an important limitation in the data. OpenRouter is one routing platform, not the entire AI market. It classifies API keys as agentic, human, or mixed using behavioral signals such as tool-call rate, turn count, and timing. The figures therefore describe traffic on OpenRouter, not a census of every AI request worldwide.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/futurum-ceo-says-agents-use-ai-5x-more-than-humans-number-will-eventually-hit-10x-but-agents-are-mostly-rereading-what-theyve-already-seen">Tom’s Hardware’s earlier analysis</a> used August data showing roughly 7.3 trillion agentic tokens versus 1.4 trillion human tokens and correctly noted that token volume should not be confused with spending. OpenRouter’s newer September update strengthens the direction of the trend while also making the caching explanation clearer.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why this matters for software teams</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The useful metric for an agent may be shifting from “how much does this model cost per million tokens?” toward a bundle of measurements: cache-hit rate, tokens per completed task, number of model turns, latency, tool-call success, and cost per useful outcome.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That also helps explain why more generated work does not automatically equal more finished work. BitcoinVersus recently reported that <a href="https://bitcoinversus.tech/2026/10/10/ai-coding-agents-more-code-human-review-bottleneck-software-output/">AI coding agents can produce more code while human review becomes the bottleneck</a>. Agent infrastructure has a similar lesson: enormous token throughput is only valuable when it turns into completed, correct work.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The next AI bottleneck may be remembering efficiently</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The newest OpenRouter data suggests the agent era is changing the shape of inference. Human chat emphasizes fresh questions and readable answers. Agents emphasize loops, tool calls, persistent context, and repeated reads.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes caching less of a background optimization and more of a core systems feature. If autonomous agents continue taking a larger share of model traffic, the winners may not simply be the systems with the most compute. They may be the ones that can keep enormous amounts of context close to the model, reuse it reliably, and turn repeated memory access into useful work at the lowest cost.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>BitcoinVersus.Tech Editor’s Note:</strong> The 7× figure applies to OpenRouter’s classified weekly token traffic in the final week of September 2026. It does not mean agents globally use seven times more AI than humans, nor does seven times the token volume imply seven times the cost. Cached prompts account for nearly 90% of OpenRouter’s agentic traffic.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/bitcoinversus","type":"rich","providerNameSlug":"x","responsive":true,"className":"wp-block-embed-x"} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/bitcoinversus
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Follow BitcoinVersus.Tech on X for AI infrastructure, semiconductors, memory, networking, Bitcoin mining, and data-center reporting.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Support independent technology reporting:</strong> Bitcoin donations help fund BitcoinVersus.Tech research and publishing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Disclaimer: BitcoinVersus.Tech provides technology news and analysis for informational purposes only.</em></p>
<!-- /wp:paragraph -->