<!-- wp:paragraph -->
<p><strong>A Bitcoin miner’s advertised joules per terahash figure does not tell you how efficiently the entire mining site runs.</strong> A fresh ViaBTC efficiency guide makes the distinction explicit: manufacturer J/TH usually describes the ASIC at its wall-power boundary, while pumps, dry coolers, transformers, switchgear, networking, and other site loads sit outside that number. For operators comparing fleets, that measurement boundary can matter almost as much as the headline efficiency itself.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22226,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/jth-boundary-body-1200x700-1.jpg?w=1024" alt="Technical diagram comparing ASIC nameplate J per TH with whole-site J per TH including transformers, switchgear, cooling, networking, and monitoring" class="wp-image-22226" /><figcaption class="wp-element-caption"><em>ASIC J/TH measures the miner boundary; whole-site J/TH uses total facility watts divided by delivered fleet hashrate. Compare like-for-like measurement boundaries.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>What J/TH Actually Measures</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>At the machine level, the math is simple: <strong>J/TH = watts ÷ TH/s</strong>. A miner producing 200 TH/s while drawing 3,000 W is operating at 15 J/TH. Lower is better because less electrical energy is required for the same hashing work. BitcoinVersus has used this metric repeatedly when comparing <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-hardware-microbt-vs-canaan-air-hydro-immersion-asic-fleet/">MicroBT and Canaan fleets across air, hydro, and immersion cooling</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The problem starts when a device-level number gets treated as a facility-level number. <a href="https://www.viabtc.com/en/blog/Mining-asic-miner-electricity-efficiency-comparison-reading-j-th-correctly-923?category=0">ViaBTC’s October 5 efficiency comparison</a> stresses that ASIC specifications normally describe the miner itself under stated conditions. External cooling equipment and site electrical losses remain outside that measurement boundary.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=TDJ-hOQ0-dA","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">https://www.youtube.com/watch?v=TDJ-hOQ0-dA</div><figcaption class="wp-element-caption"><em>Hashpower Academy walks through mining efficiency from the J/TH and hashrate-per-kilowatt perspective.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Where the Extra Site Watts Go</strong></h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>Transformers:</strong> step voltage up or down but introduce electrical losses.</li><li><strong>Switchgear and PDUs:</strong> distribute power to rows, containers, racks, or miners and add their own losses.</li><li><strong>Cooling:</strong> air systems use fans and ventilation; hydro and immersion sites may use pumps, dry coolers, heat exchangers, controls, and fluid-management equipment.</li><li><strong>Networking and monitoring:</strong> switches, routers, Wi-Fi, controllers, management servers, and <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-snmp-bitcoin-mining-switch-pdu-monitoring/">SNMP-monitored infrastructure</a> all consume power.</li><li><strong>Auxiliary loads:</strong> lighting, security, environmental sensors, offices, maintenance equipment, and other site systems may also sit behind the same utility meter.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The miner’s onboard power supply is normally part of the machine’s wall-power figure, which is why <a href="https://bitcoinversus.tech/2025/04/30/power-supply-unit-overview-for-bitcoin-mining/">PSU efficiency</a> already influences the advertised number. But the transformer feeding the building, the pump moving coolant through a hydro loop, or the dry cooler rejecting heat outside the container generally does not.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=tMf67c_1ta0","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">https://www.youtube.com/watch?v=tMf67c_1ta0</div><figcaption class="wp-element-caption"><em>Bitcoin Magazine’s Bitcoin 2026 cooling panel covers air, hydro, immersion, heat exchangers, heat reuse, and the infrastructure surrounding dense compute.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:embed {"url":"https://twitter.com/charlesliang/status/1807935133166755991","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">https://twitter.com/charlesliang/status/1807935133166755991</div><figcaption class="wp-element-caption"><em>Supermicro CEO Charles Liang highlights liquid cooling as a major efficiency technology for dense data-center infrastructure.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>A 100 PH/s Example</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Imagine a fleet delivering <strong>100 PH/s</strong>, or 100,000 TH/s. If the miners themselves average <strong>10 J/TH</strong>, their combined wall power is about <strong>1 MW</strong>:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>100,000 TH/s × 10 J/TH = 1,000,000 W = 1.00 MW</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Now assume the site utility meter shows <strong>1.08 MW</strong> while the delivered fleet hashrate remains 100 PH/s. The illustrative whole-site efficiency is:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>1,080,000 W ÷ 100,000 TH/s = 10.8 J/TH</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>That extra 0.8 J/TH is not a defect in the ASIC specification. It represents the fact that a mining operation is an electrical-and-thermal system, not just a room full of hashboards. The exact gap will vary by cooling method, climate, voltage architecture, transformer loading, firmware, airflow or coolant temperatures, and site design. BitcoinVersus’ earlier <a href="https://bitcoinversus.tech/2025/11/30/the-bitcoin-mining-air-coolant-energy-operation-equation/">Air Coolant Energy Operation Equation</a> was built around the same idea: the machine is only one boundary inside the larger energy system.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Even an 8.9 J/TH Miner Still Lives Inside a Facility</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>BITMAIN’s current S23 XP Hyd listing shows <strong>600 TH/s, 5,340 W, and 8.9 J/TH</strong>. Its own product notes describe the hashrate and wall-power efficiency figures as typical values and specify operating tolerances. That is an exceptionally efficient miner, but the number still describes the machine boundary—not every pump, heat exchanger, transformer, switch, and control system needed to operate a large hydro deployment.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://shop.bitmain.com/product/detail?pid=00020260724175008406EtfiDarD06D9">BITMAIN’s S23 XP Hyd product page</a> therefore matters for two reasons: it shows how far modern ASIC efficiency has improved, and it shows why the words <strong>“power on wall”</strong> and the stated test conditions matter when comparing equipment.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Cooling Method Changes the Gap</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Air, hydro, and immersion move the overhead around. Air-cooled miners carry their own high-speed fans, so more of the cooling power can appear inside the miner’s wall-power measurement. Hydro removes those miner fans but shifts work into facility pumps, dry coolers, controls, and heat exchangers. Immersion can eliminate both miner fans and conventional airflow, but the site still needs fluid circulation and heat rejection.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why <a href="https://bitcoinversus.tech/2025/03/17/data-center-cooling-techniques-immersion-water-and-air-explained/">air, water, and immersion cooling</a> cannot be compared only by looking at the ASIC sticker. A hydro miner with a spectacular nameplate J/TH may still require more auxiliary infrastructure than an air-cooled box, while a well-designed liquid system can also reduce thermal throttling and support far higher power density. The correct comparison depends on the whole operating envelope.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>How an Operator Should Measure It</strong></h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li><strong>Define the boundary.</strong> Decide whether you are measuring one ASIC, one rack, one container, one building, or the whole site.</li><li><strong>Measure power at the same boundary.</strong> Do not compare an ASIC wall reading with a utility-meter reading from another fleet.</li><li><strong>Measure delivered hashrate over the same time window.</strong> Avoid mixing instantaneous local hashrate with a long pool-average period.</li><li><strong>Record operating mode.</strong> Firmware, voltage, frequency, temperature, and curtailment state can move both watts and TH/s.</li><li><strong>Track cooling separately.</strong> For hydro or immersion, record pump and heat-rejection loads instead of letting them disappear into “site overhead.”</li><li><strong>Repeat under real conditions.</strong> Summer heat, winter air, dust loading, coolant temperature, and transformer loading can all shift realized efficiency.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This same discipline improves <a href="https://bitcoinversus.tech/2026/09/25/the-art-of-rack-and-stack-servers-ai-systems-and-bitcoin-miners/">rack-and-stack planning</a>. Electrical density, cooling capacity, network management, service clearances, and maintainability determine how much useful compute a megawatt actually produces after the equipment leaves the manufacturer’s test bench.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Why It Matters More as ASICs Approach 10 J/TH</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When miners were 30, 50, or 100 J/TH, a few points of site overhead could hide behind enormous device inefficiency. That changes as machines approach single-digit and low-double-digit J/TH. The ASIC itself becomes so efficient that pumps, transformers, power distribution, environmental conditions, uptime, and firmware tuning represent a larger share of the remaining engineering opportunity.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is also why the long-run competition described in <a href="https://bitcoinversus.tech/2025/06/02/the-bitcoin-mining-singularity-the-future-of-bitcoin-mining-machine-hashrate-and-asic-chip-efficiency/">The Bitcoin Mining Singularity</a> is increasingly operational as well as semiconductor-driven. Better silicon still matters, but the fleet that converts each purchased megawatt into the most reliable delivered hashrate can outperform a better-looking nameplate fleet with poor cooling, weak power quality, low uptime, or excessive auxiliary load.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>And because <a href="https://bitcoinversus.tech/2026/10/06/bitcoin-mining-what-is-hashprice-revenue-per-phs/">hashprice</a> determines revenue per unit of hashrate, the difference between ASIC efficiency and realized site efficiency flows directly into operating margin. The best machine is not automatically the best mine.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>What Comes Next</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The next useful efficiency leaderboard will not stop at manufacturer J/TH. It will compare <strong>delivered PH/s per site MW</strong>, uptime, cooling load, electrical losses, repair burden, and capital cost under real operating conditions. As the ASIC efficiency frontier gets tighter, the facility around the ASIC becomes a bigger part of the competitive edge.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><em>BitcoinVersus.Tech</em></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>Editor’s Note:</em></strong> The 100 PH/s example is illustrative, not a claim about a specific mining site. Actual whole-site efficiency depends on equipment, climate, topology, operating mode, measurement boundary, and uptime.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to improve the credibility of the information on this platform. If you would like to support the research, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on technical and financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->