---
title: "OSPCB.001: PCB Layers and Copper Stackups"
date: 2026-10-24
wordpress_id: 26307
status: publish
url: https://bitcoinversus.tech/2026/10/24/ospcb-001-pcb-layers-copper-stackups/
featured_media: 26306
---

<!-- wp:paragraph --><p><strong>OSPCB.001 — Open-Source Printed Circuit Board | Foundational Lesson</strong></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>A printed circuit board can carry electrical connections on one face, two faces, or several internal layers. This lesson explains <strong>PCB layers and copper stackups</strong>: the arrangement of conductive copper and insulating material that gives a board its electrical pathways and mechanical structure.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2>Elementary Overview</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <strong>copper layer</strong> is a patterned conductive sheet within or on a PCB. A <strong>dielectric</strong> separates conductive layers. The complete ordered arrangement—including copper thickness, insulating materials, and layer spacing—is called the <strong>stackup</strong>. Do not confuse copper layers with solder mask or silkscreen: those are surface coatings and markings, not extra signal-routing copper layers.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2>Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>Distinguish single-sided, double-sided and multilayer PCBs.</li><li>Explain why insulating dielectric separates copper layers.</li><li>Identify top copper, bottom copper, inner signal layers and power or ground planes.</li><li>Recognize how plated vias connect copper layers and why stackup choices affect fabrication.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2>One, Two, and Four Copper Layers</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>Single-sided:</strong> one patterned copper layer, usually on one face of an insulating board. <strong>Double-sided:</strong> copper on both faces; plated through-holes can connect them. <strong>Four-layer:</strong> two outer copper layers and two internal layers separated by dielectric. Inner layers may be assigned to ground, power or signal routing; their functions are design decisions, not fixed rules.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>A simple four-layer example is <strong>top signal / ground plane / power or signal / bottom signal</strong>. A plane is a broad copper area that can provide a return path or distribute power. It is not automatically a safe or effective ground merely because it is large. For controlled-impedance traces, dielectric thickness, copper geometry and reference planes matter.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=xEVntmYLARw]<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Phil’s Lab discusses PCB copper traces. This earlier tutorial is background on conductive paths; it is not a complete multilayer stackup specification.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2>What Connects the Layers?</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <strong>via</strong> is a conductive plated hole linking selected copper layers. A through-via generally passes from the top to the bottom of the board; blind and buried vias connect different subsets of layers and require more specialized fabrication. A hole used only for mechanical mounting may be unplated. Never infer a connection solely from the appearance of a hole.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>PCB design tools such as <a href="https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html">KiCad PCB Editor</a> allow designers to define copper layers and route nets across them. Manufacturer capabilities govern available materials, minimum trace dimensions, hole sizes, layer counts and stackup tolerances. The <a href="https://learn.sparkfun.com/tutorials/pcb-basics/all">SparkFun PCB Basics guide</a> offers a visual introduction to board construction.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2>Why Stackups Matter</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Copper layers conduct signals and power; dielectric prevents unintended shorts between layers. Stackup geometry affects signal integrity, electromagnetic behavior, thermal performance, fabrication cost and board thickness. For high-speed signals, the relationship between a trace and its reference plane is especially important. Beginners should understand these relationships before attempting to calculate controlled impedance.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[embed]https://www.reddit.com/r/PrintedCircuitBoard/comments/1tm1t55/from_v1_to_v2_implemented_the_communitys_pcb/[/embed]<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>PCB design-review discussion illustrating how layout choices are revised with feedback. Community discussion is not a substitute for a manufacturer’s stackup specification.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2>Practice Exercise</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>On paper, draw a cross-section of a two-layer PCB and label copper, dielectric and solder mask.</li><li>Draw a four-layer example with four separate copper sheets and three insulating gaps.</li><li>Sketch one through-via linking the top and bottom copper; indicate which layers it contacts.</li><li>Explain in one sentence why a silkscreen label is not a copper routing layer.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2>Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>Does a four-layer PCB have four copper layers or four total materials?</li><li>Can a double-sided board connect its two copper faces?</li><li>What material prevents neighboring copper layers from touching?</li><li>Why might a high-speed trace need a nearby continuous reference plane?</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> Four copper layers; yes, commonly with plated vias or through-holes; dielectric; to provide a defined electromagnetic return path and support predictable signal behavior.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2>Further Reading and Next Lesson</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Begin with <a href="https://bitcoinversus.tech/2026/10/24/ospcb-000-what-is-a-printed-circuit-board/">OSPCB.000: What Is a Printed Circuit Board?</a>, then compare the physical stackup to our <a href="https://bitcoinversus.tech/2026/10/24/kicad-10-schematics-to-pcb-1007-1008-october-2026/">KiCad schematic-to-PCB follow-up</a> and <a href="https://bitcoinversus.tech/2024/11/21/nerdqaxe-achieves-4-8th-s-with-6-layer-pcb-upgrade/">NerdQAxe six-layer PCB report</a>. Next: <strong>OSPCB.002 — Pads, Vias, and Through-Holes</strong>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Original 5,000 sat donation QR code" class="wp-image-24043" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p><!-- /wp:paragraph -->