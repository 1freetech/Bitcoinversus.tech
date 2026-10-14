# Top 7 AI Accelerators Ranked by Tokens per Second and Joules per Token

- WordPress post ID: 24993
- Published: 2026-10-14T18:15:15
- Corrected countdown order: 2026-10-14T18:24:15
- Canonical URL: https://bitcoinversus.tech/2026/10/14/top-7-ai-accelerators-tokens-per-second-joules-per-token/
- Slug: top-7-ai-accelerators-tokens-per-second-joules-per-token
- Status: publish
- Featured media ID: 24989
- Featured image dimensions: 1200x630
- Chart media ID: 24991
- Categories: Information Technology (5812), technology (6)
- Benchmark workload: gpt-oss-120B, 8K input / 1K output, FP4
- Benchmark source: SemiAnalysis InferenceX measured real-hardware throughput
- Power methodology reference: MLCommons MLPerf Power
- Important methodology note: J/token is derived from measured throughput plus InferenceX standardized all-in system-power allocation; it is not claimed as a directly wall-metered MLPerf Power result.
- Ranking presentation: countdown from #7 to #1
- YouTube embed — B200: https://www.youtube.com/watch?v=N5AJJ0tAoxc
- YouTube embed — GB200 NVL72: https://www.youtube.com/watch?v=iUvCpxad0Vs
- YouTube embed — MI355X: https://www.youtube.com/watch?v=ewWD6Rv8bSY
- YouTube embed — H200: https://www.youtube.com/watch?v=lNumJwHpXIA
- YouTube embed — H100: https://www.youtube.com/watch?v=a_tXcmEeGxo
- YouTube embed — MI300X: https://www.youtube.com/watch?v=uVdNpk8tvBI
- YouTube embed — MI325X: https://www.youtube.com/watch?v=vJ8aEO6ggOs
- Live render verification: seven YouTube blocks rendered as iframe players; benchmark table rendered; chart media rendered; featured image attached; original donation QR ID 24043 rendered intact at footer.

## Final Gutenberg Source

<!-- wp:paragraph -->
<p>Bitcoin mining hardware has an unusually clean way to describe performance: terahashes per second tells you how much work a machine can do, while joules per terahash tells you how much energy it needs to do that work. AI hardware needs the same kind of language. For large-language-model inference, the closest practical equivalents are <strong>tokens per second</strong> for productive throughput and <strong>joules per token</strong> for energy efficiency.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This report <strong>counts down from #7 to #1</strong> across seven leading AI accelerator platforms using real inference benchmark data rather than advertised TOPS or theoretical FLOPS. The common workload is OpenAI gpt-oss-120B in FP4 on an 8,000-token input and 1,000-token output single-turn chat workload. For six accelerators, throughput is read at the same 50 output tokens per second per user service level. The seventh, NVIDIA GB200 NVL72, is included as a rack-scale reference because real benchmark data exists but a 50-tok/s/user result is not currently published.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The throughput measurements come from <a href="https://inferencex.semianalysis.com/inference/gptoss-120b">SemiAnalysis InferenceX</a>, which runs workloads on real hardware and publishes reproducible benchmark runs. Energy per token is derived from those measured throughput results and InferenceX's standardized all-in system power allocation. That power boundary includes more than the accelerator's nameplate board rating, making it closer to the way a mining operator thinks about the machine as an operating system rather than a theoretical chip.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The countdown</h2>
<!-- /wp:heading -->

<!-- wp:table -->
<figure class="wp-block-table"><table><thead><tr><th>Rank</th><th>Accelerator</th><th>Throughput</th><th>Power boundary</th><th>J/token</th><th>Benchmark target</th></tr></thead><tbody><tr><td>7</td><td>AMD MI325X</td><td>4,782 tok/s</td><td>≈1.69 kW</td><td><strong>0.3534</strong></td><td>50 tok/s/user</td></tr><tr><td>6</td><td>AMD MI300X</td><td>8,067 tok/s</td><td>≈1.39 kW</td><td><strong>0.1723</strong></td><td>50 tok/s/user</td></tr><tr><td>5</td><td>NVIDIA H100</td><td>8,973 tok/s</td><td>≈1.37 kW</td><td><strong>0.1527</strong></td><td>50 tok/s/user</td></tr><tr><td>4</td><td>NVIDIA H200</td><td>9,319 tok/s</td><td>≈1.37 kW</td><td><strong>0.1470</strong></td><td>50 tok/s/user</td></tr><tr><td>3</td><td>AMD MI355X</td><td>38,497 tok/s</td><td>≈2.09 kW</td><td><strong>0.0543</strong></td><td>50 tok/s/user</td></tr><tr><td>2*</td><td>NVIDIA GB200 NVL72</td><td>42,816 tok/s/GPU-equivalent</td><td>≈1.87 kW</td><td><strong>0.0437</strong></td><td>113 tok/s/user*</td></tr><tr><td>1</td><td>NVIDIA B200</td><td>44,489 tok/s</td><td>≈1.71 kW</td><td><strong>0.0384</strong></td><td>50 tok/s/user</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p><em>*GB200 NVL72 is not a strict iso-interactivity ranking point. Its published benchmark comparison is shown at 113 tok/s/user because InferenceX does not currently publish a 50-tok/s/user ladder point for this rack-scale configuration. It is included because the user asked for seven leading accelerators, but the asterisk matters.</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24991,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/ai-accelerator-tokens-vs-joules-2026.jpg" alt="Scatter chart comparing AI accelerator tokens per second against joules per token, with lower energy use and higher throughput preferred." class="wp-image-24991" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>The mining-style view: move right for more tokens per second and toward lower J/token for greater energy efficiency. GB200 NVL72 is separately flagged because its published operating point is more demanding.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why J/token is the AI equivalent of J/TH</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A bitcoin miner rated at 200 TH/s and 20 J/TH tells an operator two things immediately: the productive rate and the energy cost of each unit of work. The equivalent inference notation is just as simple. Tokens per second answers “how much model output can the hardware serve?” Joules per token answers “how much energy does each unit of that output consume?”</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The dimensional math is direct. One watt equals one joule per second. Therefore:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>J/token = watts ÷ tokens/second.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Its inverse is tokens per joule. Lower J/token is better, exactly like lower J/TH is better in Bitcoin mining. This is more useful for deployment economics than comparing advertised TOPS, because TOPS describes theoretical arithmetic capability at a specified datatype. It does not tell you how quickly a real model serves users, how much of the chip is actually utilized, or how much infrastructure power accompanies the accelerator.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Readers who want the software foundation behind the NVIDIA results can start with BitcoinVersus.Tech's <a href="https://bitcoinversus.tech/2026/10/11/what-is-cuda-how-does-it-work/">CUDA explainer</a>. Our <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-cpu-vs-gpu-vs-npu-whats-the-difference/">CPU vs. GPU vs. NPU guide</a> explains why parallel accelerators dominate this kind of inference, while our report on <a href="https://bitcoinversus.tech/2026/10/14/lseg-nvidia-gpu-tick-history-market-data/">GPU-accelerated financial data processing</a> shows that the same architecture is moving beyond model inference into large-scale data workloads.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A critical power-measurement warning</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>These J/token figures are not being presented as MLPerf wall-meter power submissions. That distinction is important. The official <a href="https://docs.mlcommons.org/inference/power/">MLCommons MLPerf power methodology</a> requires a certified power analyzer and SPEC PTDaemon, with electrical power to the system under test passing through the analyzer. That is the gold-standard path for directly metered energy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The current public LLM benchmark ecosystem does not yet give us seven recent accelerator families with directly metered, apples-to-apples MLPerf power results on the same modern language model. So this report does not substitute vendor TDP and pretend that it is wall power. Instead, it combines measured InferenceX throughput with InferenceX's disclosed all-in system power allocation. The resulting J/token is therefore a <strong>derived system-efficiency metric</strong>, not a certified wall-meter measurement.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes this report useful for relative infrastructure comparison today while also defining the standard we should demand tomorrow: same model, same precision, same prompt/output lengths, same per-user service level, same serving class, and direct power instrumentation.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">7. AMD Instinct MI325X — 4,782 tok/s, 0.3534 J/token</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>MI325X ranks last in this specific 8K/1K FP4 gpt-oss-120B comparison. At the common 50-tok/s/user service level it produces 4,782 tok/s. With an all-in allocation near 1.69 kW, the derived efficiency is approximately 0.3534 J/token, or only about 2.83 tokens per joule.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That does not mean MI325X is universally a poor accelerator. It means this model, engine, precision and service level are unfavorable relative to the other platforms tested here. The same caution applies to every ranking in this article. A different model architecture, longer context, larger batch, different kernel implementation or different serving engine can change the order.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=vJ8aEO6ggOs","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=vJ8aEO6ggOs
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>AMD's verified Advancing AI 2024 keynote introduces MI325X and places it in the Instinct accelerator roadmap.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">6. AMD Instinct MI300X — 8,067 tok/s, 0.1723 J/token</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>MI300X posts 8,067 tok/s at the matched service level, with a standardized all-in allocation near 1.39 kW. That gives about 0.1723 J/token, or 5.8 tokens per joule. The throughput is below both Hopper entries in this particular model and software configuration, but the result is still close enough to show why real model benchmarking matters more than comparing theoretical arithmetic rates.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>MI300X also provides the baseline that makes MI355X's leap so visible. If AI hardware efficiency is going to be discussed the way miner efficiency is discussed, generational comparisons should use the same model and service-level rules rather than cherry-picking a different model for each new accelerator.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=uVdNpk8tvBI","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=uVdNpk8tvBI
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>AMD's official introduction to the Instinct MI300 series explains the architecture and deployment role of MI300X.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">5. NVIDIA H100 — 8,973 tok/s, 0.1527 J/token</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>H100 remains remarkably competitive. The measured 8,973 tok/s at the common 50-tok/s/user point places it only modestly behind H200. At the same approximately 1.37 kW standardized all-in power boundary, it comes to about 0.1527 J/token, or 6.55 tokens per joule.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This illustrates an important difference between AI and Bitcoin mining hardware. Miner workloads are deliberately fixed: SHA-256 is SHA-256. AI software stacks evolve rapidly. Runtime, kernel, quantization and batching improvements can materially change the effective throughput of hardware that has already been deployed. Any J/token leaderboard therefore needs a timestamp and software configuration.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=a_tXcmEeGxo","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=a_tXcmEeGxo
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>NVIDIA's official DGX H100 tour shows the H100-based system architecture used to build large AI infrastructure.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">4. NVIDIA H200 — 9,319 tok/s, 0.1470 J/token</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>H200 is the most efficient of the Hopper-class entries in this test. It produces 9,319 tok/s at the matched 50-tok/s/user target. With about 1.37 kW of standardized all-in allocation, that converts to approximately 0.1470 J/token, or 6.8 tokens per joule.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The result also shows why memory upgrades can matter even when the basic compute generation remains related. H200 improves on H100's throughput and J/token on this large model rather than simply increasing capacity for models that do not fit comfortably into smaller memory footprints.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=lNumJwHpXIA","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=lNumJwHpXIA
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Linus Tech Tips examines a real H200 NVL accelerator, including its HBM memory system and hands-on benchmark testing.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">3. AMD Instinct MI355X — 38,497 tok/s, 0.0543 J/token</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AMD's MI355X is the strongest direct challenger in this matched workload. It reaches 38,497 tok/s at 50 tok/s/user with vLLM FP4. The standardized system allocation is higher than B200 at about 2.09 kW, so the efficiency lands at approximately 0.0543 J/token, or about 18.4 tokens per joule.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The important part is not that MI355X loses this specific ranking. It is how far AMD has moved the curve. MI355X produces more than four times the matched throughput of MI300X in this benchmark while its derived J/token is roughly one-third as high. That is the kind of generational change that resembles a major ASIC-miner efficiency jump rather than a small refresh.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=ewWD6Rv8bSY","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=ewWD6Rv8bSY
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>AMD's official overview of the Instinct MI350 family covers the CDNA 4 generation that includes MI355X.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">2. NVIDIA GB200 NVL72 — rack-scale reference at 0.0437 J/token</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>GB200 NVL72 deserves separate treatment because it is not simply a standalone GPU card. It is a liquid-cooled rack-scale system built around Grace CPUs, Blackwell GPUs and a large NVLink domain. InferenceX has real gpt-oss-120B measurements, but its public run page does not currently expose the same 50-tok/s/user ladder point available for the six accelerator results above.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>At a published 113-tok/s/user comparison point, GB200 delivers about 42,816 tokens per second per GPU-equivalent. The normalized all-in allocation is about 1.87 kW per accelerator equivalent, yielding roughly 0.0437 J/token. That is extraordinary efficiency at a substantially faster individual-user service level. But because the latency target differs, it should not be read as proof that GB200 is exactly second at the common 50-tok/s/user point.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=iUvCpxad0Vs","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=iUvCpxad0Vs
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>ServeTheHome examines the power and cooling demands of modern rack-scale AI hardware, including the roughly 120 kW GB200 NVL72 class of system.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">1. NVIDIA B200 — 44,489 tok/s, 0.0384 J/token</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The B200 is the clear single-accelerator leader in this test. InferenceX measured 44,489 total tokens per second at the 50-tok/s/user target with gpt-oss-120B, 8K input, 1K output and FP4 under vLLM. Using the standardized all-in power allocation of about 1.71 kW, the result is approximately 0.0384 joule per token, or about 26 tokens per joule.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That combination is what makes the B200 mining-like: it is not simply the fastest of the six strictly matched GPUs; it is also the most energy-efficient at that operating point. A faster chip that consumed proportionally more system power would not necessarily win J/token. Here, B200 wins both axes.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=N5AJJ0tAoxc","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=N5AJJ0tAoxc
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>ServeTheHome tours a production NVIDIA B200 cluster and shows the servers, networking, cooling and power infrastructure behind the accelerator.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What this ranking says</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The most important result is not NVIDIA versus AMD. It is that AI inference can be described with a miner-style pair of metrics that normal operators can understand. The B200 result is effectively the AI equivalent of a miner combining extremely high TH/s with a low J/TH figure: 44,489 measured tokens per second at the target service level and a derived 0.0384 J/token system efficiency.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>MI355X is close enough to establish a genuine second high-performance class. The Hopper and CDNA 3 accelerators sit much farther back on this particular workload. At the same time, GB200 shows that rack-scale architectures introduce another dimension. Its NVLink fabric, CPU integration, networking and liquid cooling make “per GPU” accounting less clean than it is for a single accelerator module.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The metric BitcoinVersus.Tech should track</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For future AI-hardware reports, the cleanest notation is:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Power: total tokens per second (tok/s)</strong></li><li><strong>Efficiency: joules per output token (J/token)</strong></li><li><strong>Service quality: output tokens per second per user</strong></li><li><strong>Latency guardrail: time to first token</strong></li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Every ranking should also lock model, quantization, input/output lengths and serving software. Without those controls, J/token can be gamed just as badly as a mining comparison would be if one manufacturer measured SHA-256 and another measured a completely different algorithm.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The next step for the industry is straightforward: combine the reproducibility and real-hardware throughput discipline of systems such as InferenceX with MLPerf-style certified wall-power measurement. When that dataset exists across modern accelerators, AI buyers will finally be able to compare machines the way Bitcoin miners have compared ASICs for years: productive rate on one line, joules per unit of work on the next.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"width":"1170px","height":"1038px","sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" style="width:1170px;height:1038px" width="1170" height="1038" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->