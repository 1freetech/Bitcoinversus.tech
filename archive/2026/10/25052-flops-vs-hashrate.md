---
post_id: 25052
title: "FLOPS vs Hashrate"
live_url: "https://bitcoinversus.tech/2026/10/14/flops-vs-hashrate/"
featured_media_id: 25051
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/flops-vs-hashrate-1200x630-1.jpg"
status: publish
---

<!-- wp:paragraph -->
<p><strong>FLOPS and hashrate both measure work per second, but they do not measure the same kind of work.</strong> FLOPS measures floating-point math. Hashrate measures cryptographic hash attempts. That is why an exaflop cannot be converted directly into an exahash.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The distinction matters because modern <a href="https://bitcoinversus.tech/2026/10/14/7-fastest-supercomputers-world-2026-2/">supercomputers</a> and Bitcoin miners can both use the prefix <strong>exa</strong> while describing completely different machines and workloads.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">FLOPS measures floating-point math</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>FLOPS means <strong>floating-point operations per second</strong>. The <a href="https://www.top500.org/project/linpack/">TOP500 Linpack benchmark</a> measures how quickly a computer performs 64-bit floating-point calculations while solving dense linear equations. That makes FLOPS useful for scientific simulation, AI, engineering and high-performance computing.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=etVzy1z_Ptg]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><em>Oak Ridge National Laboratory’s Frontier is an example of a machine designed around enormous floating-point throughput.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Hashrate measures hash attempts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Bitcoin mining uses a different job. Mining hardware repeatedly hashes candidate block headers and looks for an output below the network target. The <a href="https://developer.bitcoin.org/devguide/mining.html">Bitcoin developer guide</a> describes ASIC hardware iterating through nonce values and generating the corresponding hashes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A miner rated at 200 TH/s attempts roughly 200 trillion hashes each second. The evolution from CPUs to purpose-built ASICs is covered in our <a href="https://bitcoinversus.tech/2026/10/13/how-bitcoin-mining-moved-from-cpus-to-asics/">Bitcoin mining hardware history</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=PqwbXPoQY0k]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><em>Luxor explains how Bitcoin hashrate becomes measurable mining capacity and an economic resource.</em></p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[tweet https://twitter.com/jgarzik/status/296709252351926273]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><em>Jeff Garzik’s 2013 Avalon post documents the point when specialized ASIC hardware began replacing general-purpose compute in Bitcoin mining.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Why there is no conversion</h2>
<!-- /wp:heading -->

<!-- wp:table -->
<figure class="wp-block-table"><table><thead><tr><th></th><th>FLOPS</th><th>Hashrate</th></tr></thead><tbody><tr><td>Counts</td><td>Floating-point operations</td><td>Hash attempts</td></tr><tr><td>Common units</td><td>TFLOPS, PFLOPS, EFLOPS</td><td>TH/s, PH/s, EH/s</td></tr><tr><td>Typical hardware</td><td>CPU, GPU, accelerator</td><td>SHA-256 ASIC</td></tr><tr><td>Main use</td><td>Science, AI, simulation</td><td>Bitcoin proof of work</td></tr><tr><td>Efficiency</td><td>FLOPS/W</td><td>J/TH</td></tr><tr><td>Direct conversion?</td><td colspan="2"><strong>No</strong></td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>The prefixes can fool people. <strong>1 EFLOP/s</strong> means 10<sup>18</sup> floating-point operations per second. <strong>1 EH/s</strong> means 10<sup>18</sup> hashes per second. The number is the same scale, but the work unit is different.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A SHA-256 hash itself contains many integer, bitwise and memory operations, not one floating-point operation. Hardware architecture also changes how those steps are executed. There is therefore no universal formula that turns FLOPS into H/s.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The easiest way to remember it: <strong>FLOPS asks how fast a machine can do numerical math. Hashrate asks how fast a miner can search the Bitcoin proof-of-work space.</strong> For the economic side of that mining speed, see <a href="https://bitcoinversus.tech/2026/10/11/hashrate-vs-hashprice/">Hashrate vs. Hashprice</a>.</p>
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