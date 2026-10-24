---
title: "OSPCB.000: What Is a Printed Circuit Board?"
track: "OSPCB — Open-Source Printed Circuit Board"
course_level: 000
date: 2026-10-24
status: publish
wordpress_id: 26286
url: https://bitcoinversus.tech/2026/10/24/ospcb-000-what-is-a-printed-circuit-board/
featured_media: 26284
body_diagram_media: 26285
categories:
  - OSPCB — Open-Source Printed Circuit Board
  - semiconductors
  - Tech Docs
sources:
  - https://docs.kicad.org/10.0/en/getting_started_in_kicad/getting_started_in_kicad.html
  - https://learn.sparkfun.com/tutorials/pcb-basics/all
embedded_youtube:
  - https://www.youtube.com/watch?v=xEVntmYLARw
  - https://www.youtube.com/watch?v=f1jH4roZfgE
embedded_social:
  - https://www.reddit.com/r/PrintedCircuitBoard/comments/1tm1t55/from_v1_to_v2_implemented_the_communitys_pcb/
---

<!-- Final published Gutenberg source after rendered player, social, and image verification. -->

<!-- wp:paragraph --><p><strong>OSPCB.000 — Open-Source Printed Circuit Board | Foundational Lesson</strong></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><strong>What is a printed circuit board?</strong> A <strong>PCB</strong> is an insulating structure carrying patterned conductive metal—usually copper—that mechanically supports electronic parts and connects them electrically. You can find printed circuit boards inside Bitcoin miners, server motherboards, network switches, power supplies, robots and ordinary appliances. In this first lesson, the goal is simply to recognize the physical parts of a <em>bare board</em>, before soldering components or learning design software.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Elementary Overview</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <strong>schematic</strong> explains which electronic components connect; the PCB implements those connections in physical copper and insulating material. A bare PCB has no installed components, while a <strong>PCBA</strong> (printed circuit board assembly) has parts mounted and soldered to it. <a href="https://docs.kicad.org/10.0/en/getting_started_in_kicad/getting_started_in_kicad.html">KiCad’s official beginner manual</a> explains how component footprints, copper tracks and board manufacturing turn a schematic into real hardware.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Define PCB and distinguish a bare PCB from an assembled PCBA.</li><li>Identify substrate, copper track, pad, via, solder mask and silkscreen on a simple board.</li><li>Explain which features conduct electricity and which are primarily insulating or informational.</li><li>Inspect a disconnected board safely and describe what you see without applying power.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">The Five Things to Recognize on a PCB</h2><!-- /wp:heading -->

<!-- wp:image {"id":26285,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/ospcb-000-anatomy-of-a-basic-pcb.png" alt="Instructional overview of a bare green PCB showing copper tracks, solder pads, vias, solder mask, and silkscreen; exposed tracks are conceptual." class="wp-image-26285" /><figcaption class="wp-element-caption">OSPCB.000 visual guide. Original educational illustration; copper tracks are shown exposed to explain their routing, but on most finished boards solder mask covers them.</figcaption></figure><!-- /wp:image -->

<!-- wp:paragraph --><p>The <strong>substrate</strong>, frequently FR-4 glass-fiber-reinforced epoxy in rigid boards, supports the copper. Copper is etched into <strong>tracks or traces</strong> that carry electrical signals and current. <strong>Pads</strong> provide attachment points for component leads or terminals, usually through solder. <strong>Vias</strong> are typically plated holes used to link copper between board layers; ordinary mounting holes do not necessarily make electrical connections. A protective <strong>solder mask</strong> covers much of the copper, and the <strong>silkscreen</strong> prints designators such as R1, U1 and connector labels. The green color comes from the mask, not from the copper or fiberglass. Other colors are common. See <a href="https://learn.sparkfun.com/tutorials/pcb-basics/all">SparkFun’s PCB Basics guide</a> for photographs and additional examples.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=xEVntmYLARw]<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Phil’s Lab explains what copper tracks physically do. This video progresses beyond the vocabulary expected in OSPCB.000; focus first on the definition of a track and its purpose.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Insulators, Conductors, and Layers</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Copper features are conductors. The substrate and solder mask are primarily insulators. A basic double-sided PCB has copper on both faces and dielectric material between them; multilayer boards contain additional internal copper layers. More layers do not automatically make a board better—the stackup must suit its electrical and manufacturing requirements. A copper track hidden beneath solder mask can still carry current even though it is not visibly metallic.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=f1jH4roZfgE]<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Phil’s Lab demonstrates the difference between solder mask and silkscreen, the two finished-board surfaces beginners frequently confuse.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Five-Minute Board Identification Exercise</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>Equipment:</strong> one disconnected low-voltage practice board or discarded electronics PCB, good lighting and a magnifier if available. Never disassemble energized equipment, and do not use a power supply, mains appliance, battery pack, or equipment with potentially charged high-voltage capacitors for this exercise. Use an ESD-safe surface when handling sensitive electronics.</p><!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>Locate the largest flat insulating board area; identify the substrate and its color.</li><li>Find a metallic solder pad and trace any visible copper route. Remember that some tracks may be masked or buried.</li><li>Find a small hole. Decide whether it <em>appears</em> to be a plated via or a mechanical mounting hole; visual appearance alone cannot prove connectivity.</li><li>Identify a silkscreen designator such as R1, C1, D1 or U1, and record where it is placed.</li><li>Write one sentence explaining how the substrate supports the electrical conductors without becoming a copper pathway itself.</li></ol><!-- /wp:list -->

<!-- wp:shortcode -->[embed]https://www.reddit.com/r/PrintedCircuitBoard/comments/1tm1t55/from_v1_to_v2_implemented_the_communitys_pcb/[/embed]<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>A genuine r/PrintedCircuitBoard design-review thread shows a learner progressing from a first to a second PCB after reviewing copper traces, pads, grounding and silkscreen. The discussion illustrates iterative learning, not a formal safety or manufacturing standard.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>1.</strong> What physically carries a signal between two component pads?</li><li><strong>2.</strong> Which layer is generally responsible for the board’s green appearance?</li><li><strong>3.</strong> Does every visible hole electrically connect two layers?</li><li><strong>4.</strong> What is the difference between a PCB and a PCBA?</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answer Guide:</strong> 1. A copper track or connected conductive copper feature. 2. The solder mask. 3. No—plated vias and some through-hole pads can connect layers, but mounting holes may be nonplated. 4. A PCB is the fabricated board; a PCBA has components assembled onto it.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Where This Track Goes Next</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>OSPCB.000 is the starting point, not a repeat of the full design workflow. Next lessons can teach board-layer identification, reading footprints, and translating schematics into the PCB editor. For context, read BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/08/29/electrical-schematics-the-language-of-electronic-circuits/">electrical schematics introduction</a>, the <a href="https://bitcoinversus.tech/2026/10/24/kicad-10-schematics-to-pcb-1007-1008-october-2026/">KiCad 10 schematics-to-board follow-up</a>, and our <a href="https://bitcoinversus.tech/2025/02/05/command-4-kicad-linux-os/">earlier KiCad software guide</a>. Each covers a different stage of the process.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech original 5,000-sat donation QR code" class="wp-image-24043" style="width:220px;max-width:100%;height:auto" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p><!-- /wp:paragraph -->