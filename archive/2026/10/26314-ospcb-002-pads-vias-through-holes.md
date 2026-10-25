---
title: "OSPCB.002: Pads, Vias, and Through-Holes"
date: 2026-10-24
wordpress_id: 26314
status: publish
url: https://bitcoinversus.tech/2026/10/24/ospcb-002-pads-vias-through-holes/
featured_media: 26313
---

<!-- wp:paragraph --><p><strong>OSPCB.002 — Open-Source Printed Circuit Board | Foundational Lesson</strong></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Pads and vias are among the smallest features on a printed circuit board, but they perform essential jobs. <strong>Pads</strong> provide conductive attachment points for components, while <strong>vias</strong> connect copper between board layers. This lesson explains how to identify each feature and why a hole in a PCB is not automatically an electrical connection.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2>Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>Distinguish a surface-mount pad from a plated through-hole pad.</li><li>Explain the purpose of through, blind and buried vias.</li><li>Recognize that mechanical mounting holes may be nonplated.</li><li>Identify how solder mask and copper annular rings affect visible board features.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2>Pads Attach Components</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <strong>surface-mount device (SMD) pad</strong> is an exposed copper land where a component terminal can be soldered to the board. A <strong>through-hole pad</strong> surrounds a hole into which a component lead is inserted; when plated, the hole barrel can connect to copper on other layers. A pad's dimensions, spacing and solder-mask opening must match the component and manufacturing process. The <a href="https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html">KiCad PCB Editor manual</a> explains pad types, footprints and their electrical net assignments.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=xEVntmYLARw]<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Phil’s Lab explains how copper tracks and pads are used in PCB layout. This is background instruction, not a demonstration of every via construction method.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2>Vias Connect Copper Layers</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <strong>through-via</strong> passes through the board and commonly connects outer and selected internal copper layers. A <strong>blind via</strong> connects an outer copper layer to one or more inner layers without passing through the entire board. A <strong>buried via</strong> joins internal layers and is not exposed on the finished board surfaces. These structures have different fabrication costs and constraints. The presence of a via does not mean it connects to every copper layer it passes: layer connections depend on the copper geometry and design.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>A visible ring of copper surrounding a plated hole is called an <strong>annular ring</strong>. Some vias are <strong>tented</strong> under solder mask; others are exposed, plugged or filled depending on manufacturing requirements. Beginners should not assume that a covered hole is absent or that a large mounting hole is plated.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2>Through-Holes Versus Mounting Holes</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A through-hole component pad is intended for electrical assembly. A mechanical mounting hole is primarily for a fastener or standoff and may be plated or nonplated according to the design. A plated mounting hole can be intentionally tied to chassis or ground, but that must be confirmed from the schematic, PCB layout or continuity measurements on safely isolated hardware. A visual inspection alone cannot prove the electrical connection.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For a broader visual explanation, see <a href="https://learn.sparkfun.com/tutorials/pcb-basics/all">SparkFun’s PCB Basics guide</a>. Our earlier lessons introduce <a href="https://bitcoinversus.tech/2026/10/24/ospcb-000-what-is-a-printed-circuit-board/">PCB construction in OSPCB.000</a> and <a href="https://bitcoinversus.tech/2026/10/24/ospcb-001-pcb-layers-copper-stackups/">copper stackups in OSPCB.001</a>. The <a href="https://bitcoinversus.tech/2026/10/24/kicad-10-schematics-to-pcb-1007-1008-october-2026/">KiCad schematic-to-board update</a> explains how design software carries electrical connections into a board layout.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[embed]https://www.reddit.com/r/PrintedCircuitBoard/comments/1tm1t55/from_v1_to_v2_implemented_the_communitys_pcb/[/embed]<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Related community design review shows how pads, copper routing and board features can change between revisions. Community posts are not formal manufacturing specifications.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2>Five-Minute Identification Exercise</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>Safety:</strong> use an unpowered, disconnected practice PCB. Avoid mains-powered devices, batteries and power supplies with charged capacitors. Do not solder or apply power during this exercise.</p><!-- /wp:paragraph -->

<!-- wp:list --><ul><li>Find one exposed rectangular SMD pad and note its position.</li><li>Find a hole surrounded by copper and determine whether it resembles a through-hole component pad or a via.</li><li>Locate a mechanical mounting hole, if present, and note whether a copper ring is visible.</li><li>Look for any solder-mask-covered vias. Record what you can see and what cannot be confirmed without documentation.</li><li>Sketch the difference between a through-via and a blind via in a four-layer board.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2>Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>What is the primary job of an SMD pad?</li><li>How does a blind via differ from a through-via?</li><li>Must every mounting hole carry an electrical signal?</li><li>What is an annular ring?</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> An SMD pad provides a conductive attachment for a surface-mounted terminal. A blind via reaches an outer layer and some inner layers without passing through the entire board; a through-via passes through the board. No, mounting holes may be electrically isolated. An annular ring is the copper surrounding a plated hole.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2>Conclusion</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Pads attach electronic parts; vias link selected copper layers; and mechanical holes support assembly. Understanding these distinctions prepares students to inspect footprints and read PCB layout files. The next lesson can explore component footprints and land patterns in more detail.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Original 5,000 sat donation QR code" class="wp-image-24043" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p><!-- /wp:paragraph -->