---
post_id: 23487
title: "Atomic Machines’ PrimeSwitch Targets 800V AI Racks"
live_url: "https://bitcoinversus.tech/2026/10/11/atomic-machines-primeswitch-targets-800v-ai-racks/"
featured_media_id: 23486
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/atomic-primeswitch-800v-cover-2026-10-10.jpg"
status: publish
---

<!-- wp:paragraph -->
<p><strong>Atomic Machines’ first product is much more specific than its futuristic Matter Compiler pitch: PrimeSwitch PS-150 is a tiny electromechanical relay built for one of the hardest problems inside next-generation AI data centers—protecting 800-volt DC power without wasting large amounts of energy as heat.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The company says PrimeSwitch carries <strong>150 amps continuously</strong>, has <strong>200 micro-ohms of on-resistance</strong>, opens to <strong>1,500 volts of galvanic isolation in 50 microseconds</strong>, and consumes zero holding power because it is bistable. Those specifications make the device interesting not as a stand-alone breaker, but as the mechanical half of a hybrid DC protection system.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is the concrete engineering follow-up to BitcoinVersus’ earlier story on <a href="https://bitcoinversus.tech/2026/10/10/atomic-machines-turns-code-into-micro-machines/">Atomic Machines turning digital code into working micro-machines</a>. PrimeSwitch is the first real product meant to prove that the manufacturing platform can create something useful at scale.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why 800V DC changes the protection problem</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AI racks are getting so power-dense that the industry is moving toward higher-voltage DC distribution. At the same power level, higher voltage means lower current, which reduces copper requirements and conduction losses. That is why companies across the data-center power chain are designing around 800V DC.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus recently covered how <a href="https://bitcoinversus.tech/2026/10/06/semiconductors-microchip-navitas-800v-6v-ai-rack-power/">Microchip and Navitas are collapsing 800V rack power directly toward low-voltage GPU rails</a>. PrimeSwitch attacks a different part of the same architecture: fault protection and isolation before all of that power reaches expensive compute hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=E96F7J9BDUQ","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=E96F7J9BDUQ
</div><figcaption class="wp-element-caption"><em>Schneider Electric explains why high-density AI infrastructure is shifting toward 800V DC distribution and what changes inside the power path.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:embed {"url":"https://twitter.com/dnystedt/status/1978270031466406171","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/dnystedt/status/1978270031466406171
</div><figcaption class="wp-element-caption"><em>Technology reporter Dan Nystedt highlighted NVIDIA’s move toward 800V DC as AI rack power requirements climbed.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Mechanical relays are efficient but traditionally too slow</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A mechanical contact is attractive because metal-to-metal conduction can have extremely low resistance and provides true physical separation when open. The weakness is speed. Traditional contactors can take milliseconds to separate, which is slow when a high-current DC fault is rising rapidly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Solid-state switches solve the speed problem. Semiconductor devices can react in microseconds and avoid the mechanical arc-management problem during interruption. But they conduct through silicon, silicon carbide, or gallium nitride, which means they dissipate power continuously while current is flowing. They also do not inherently provide the same physical galvanic isolation as a fully open mechanical contact.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Atomic Machines is trying to combine the two approaches. Its <a href="https://www.atomicmachines.com/blog/atomic-machines-origin-story">origin story describes PrimeSwitch</a> as the fast mechanical contact inside a hybrid breaker: the relay normally carries current with very low resistance, while a parallel semiconductor temporarily takes the fault current during the tens of microseconds required for the contact to open.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/jeffholden/status/2108283819560472987","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/jeffholden/status/2108283819560472987
</div><figcaption class="wp-element-caption"><em>Atomic Machines CEO Jeffrey Holden introduced PrimeSwitch as the first working micro-machine produced by the Matter Compiler platform.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">At 150 amps, 200 micro-ohms works out to about 4.5 watts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The resistance figure is one of the most important specifications. Using the company’s stated 200 micro-ohms and 150-amp rating, the voltage drop is about <strong>30 millivolts</strong>. Resistive loss works out to roughly <strong>4.5 watts</strong> at full current using P = I²R.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why this class of device could be valuable. A switch carrying hundreds of amps lives inside a system where every additional milliohm turns into heat, cooling load, and lost electrical efficiency. The smaller the resistance, the less energy the facility spends simply moving power through protection hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For comparison, BitcoinVersus has also covered <a href="https://bitcoinversus.tech/2026/10/08/infineon-27kw-three-phase-psu-ai-server-racks/">Infineon’s 27 kW power supply for next-generation AI racks</a>. PrimeSwitch sits farther upstream, but both products exist because rack-level power is climbing fast enough that components once treated as supporting hardware now directly affect compute density.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=vevG2UQQIEc","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=vevG2UQQIEc
</div><figcaption class="wp-element-caption"><em>In the Bloomberg interview, Holden explains why Atomic Machines chose power switching as the first commercial application for its micro-machine platform.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">PrimeSwitch does not interrupt the fault by itself</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This distinction is important. PrimeSwitch is not being presented as a complete circuit breaker in one package. A practical hybrid breaker still needs fault detection, a control circuit, the parallel semiconductor path, an energy absorber or snubber, and system-level isolation components.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.wevolver.com/article/primeswitch-ps-150-relay-hybrid-dc-breakers">Wevolver’s technical breakdown</a> points out another important engineering detail: Atomic Machines has not publicly specified several values designers would normally need before committing the device to production, including actuation-drive requirements, temperature derating, and endurance under repeated fault-opening events.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The 50-microsecond number is impressive, but endurance may matter more</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A breaker can look excellent on a single fast-opening test and still be a poor production device if contact resistance drifts, the mechanism wears out, thermal expansion changes the gap, or thousands of switching cycles degrade the package.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>Opening speed:</strong> Can the device repeatedly reach isolation in about 50 microseconds?</li><li><strong>Contact resistance:</strong> Does the 200 micro-ohm figure remain stable at full load and elevated temperature?</li><li><strong>Endurance:</strong> How many normal and fault-opening cycles can it survive?</li><li><strong>Drive requirements:</strong> What voltage, current, and pulse energy are required to actuate it?</li><li><strong>Packaging:</strong> How does the surface-mount package behave under vibration, thermal cycling, and busbar mechanical stress?</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why the follow-up matters for Atomic Machines</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Matter Compiler story is ambitious because Atomic Machines says one programmable manufacturing stack can eventually make many different micro-machines. PrimeSwitch gives investors and engineers something much easier to judge: does the first device meet its electrical specifications, survive real data-center conditions, and outperform existing relay-plus-semiconductor combinations on size, efficiency, speed, or cost?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If early-access customers validate those numbers, PrimeSwitch becomes more than a demonstration piece. It becomes evidence that Atomic Machines can use its manufacturing system to attack a genuine infrastructure bottleneck. If reliability or integration requirements erase the advantages, then the bigger Matter Compiler vision will need stronger proof from the next device.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Editor’s Note: PrimeSwitch performance values are Atomic Machines specifications unless otherwise stated. The 4.5 W conduction-loss figure is a direct calculation from the company’s published 150 A and 200 µΩ ratings. Broad independent reliability and endurance data have not yet been published.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Support independent technology reporting:</strong> Bitcoin donations help fund BitcoinVersus.Tech research and publishing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Disclaimer: BitcoinVersus.Tech provides technology news and analysis for informational purposes only.</em></p>
<!-- /wp:paragraph -->