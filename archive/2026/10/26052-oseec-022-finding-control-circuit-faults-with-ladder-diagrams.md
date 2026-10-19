---
post_id: 26052
series: "Open-Source Electrical Engineering Certificate"
lesson_number: 22
title: "OSEEC.022: Finding Control Circuit Faults With Ladder Diagrams"
live_url: "https://bitcoinversus.tech/2026/10/18/oseec-022-finding-control-circuit-faults-with-ladder-diagrams/"
slug: "oseec-022-finding-control-circuit-faults-with-ladder-diagrams"
featured_media_id: 26051
status: publish
categories: [233999, 2509703]
media_verification: "WordPress rendered 2 YouTube iframes and 2 Reddit embeds; live client-side playback not independently tested"
---

<!-- wp:paragraph --><p><strong>A control circuit that will not start does not always have a bad motor, contactor, or PLC.</strong> It may have an open Stop contact, a tripped overload, a missing permissive, a failed wire, or a missing control-power supply. In this lesson, we learn to trace the expected circuit path on a ladder diagram and form one testable explanation at a time.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This is <strong>OSEEC.022</strong>, following <a href="https://bitcoinversus.tech/2026/10/14/oseec-021-electrical-drawings-ladder-diagrams/">OSEEC.021: Electrical Drawings and Ladder Diagrams</a>. For equipment context, see <a href="https://bitcoinversus.tech/2026/10/13/oseec-020-motor-control-engineering-contactors-seal-in-circuits-interlocks-reversing-starters-control-power/">OSEEC.020: Motor Control Engineering</a> and <a href="https://bitcoinversus.tech/2026/10/12/oseec-019-motor-protection-engineering-overloads-short-circuits-relays-breakers-coordination/">OSEEC.019: Motor Protection Engineering</a>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><strong>Safety first:</strong> the examples below are for paper diagrams and de-energized or simulated trainers. Industrial cabinets may contain hazardous voltage and stored energy even when a control indicator is off. Only authorized, qualified personnel should perform field testing under the site's electrical-safety program, appropriate isolation/lockout procedures, and approved test methods. Never jumper or defeat a protective stop, overload, or interlock to make a machine run.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>Locate the source, return, contacts, branches, and output coil on a control rung.</li><li>Describe the state each contact must have for the coil to operate.</li><li>Distinguish a logical open path from a defective output device.</li><li>Use wire numbers and device tags to connect the drawing with a fault hypothesis.</li><li>Explain why a drawing alone is not proof that equipment is electrically safe.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Start With One Expected Outcome</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Imagine a conveyor that fails to start when the operator presses Start. Before replacing anything, state the intended outcome: the motor starter coil should be permitted to energize when control power is healthy, Stop and overload contacts are closed, and the Start command is present. A working seal-in branch then maintains the commanded state as designed. This describes the logic; it does not establish the actual condition of the machine.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=0p8pAZMXIzo]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Video: RealPars, “Industrial Electrical Troubleshooting Made Simple” (August 24, 2026). It covers open circuits, voltage-drop reasoning, fault isolation, and checking a hypothesis before replacing a part.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Trace the Rung From Source to Coil</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>On a conventional hardwired ladder schematic, follow the path from the control-power rail through every required series contact to the output coil and return. For a basic motor starter, the path may include a normally closed Stop pushbutton, a normally closed overload auxiliary contact, and a normally open Start pushbutton. A normally open contactor auxiliary contact may form a parallel seal-in path around Start. The device tags, actual drawing revision, and site design determine which contacts are present.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>An <strong>open series contact prevents the coil from being energized through that path</strong>. A parallel branch can provide an alternative path only if its own conditions are satisfied. One important distinction: 'normally closed' describes the contact's defined unactuated state, not a guarantee it is currently closed.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">A Paper-Only Fault Example</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Suppose a simulated 24 V DC control rung contains <strong>Stop (NC) → Overload (NC) → Start (NO) → M1 coil</strong>, with an M1 seal-in contact across Start. The Start command is pressed, but the simulated overload contact is open. Trace the path on the diagram: the path is interrupted before Start, so M1 cannot energize, even if Start is functioning. In the model, restoring the normal state of that protective contact would permit the path only if all other conditions were satisfied; in real equipment, the cause of an overload trip must be investigated, not simply reset or bypassed.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This kind of diagram-based reasoning produces a narrow hypothesis: the missing permissive is upstream of the coil. It does <strong>not</strong> prove the overload is faulty. It may be correctly responding to a real problem, and some systems have additional PLC logic or protective functions not depicted in the simplified rung.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Separate Logical State From Physical Evidence</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A schematic answers what should happen. Device feedback, event records, approved measurements, and inspection can establish what did happen. If software shows an output command active, that still does not confirm a contactor coil receives its rated supply or that its mechanical contacts closed. Likewise, an indicator that is off does not prove a cabinet is de-energized.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=zujMiXcBOX4]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Video: Industrial Control Academy, “Control Circuit Troubleshooting | How to Read Electrical &amp; PLC Control Drawings” (November 3, 2025). The walkthrough connects schematic symbols and wire tracing to real control-panel fault finding.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">A Repeatable Diagnostic Method</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol><li><strong>Record the symptom:</strong> what stopped, when, and after which operation or alarm?</li><li><strong>Verify the correct drawing:</strong> sheet, revision, equipment tag, and expected control voltage.</li><li><strong>Locate the affected output:</strong> coil, solenoid, relay, or PLC output.</li><li><strong>Trace backward conceptually:</strong> identify series contacts, permissives, and parallel branches between the output and source.</li><li><strong>Write the expected states:</strong> which contacts must be closed or true for the requested operation?</li><li><strong>Compare with authorized evidence:</strong> logs, indicators, drawings, and any measurements obtained using approved site procedures.</li><li><strong>Test one hypothesis at a time:</strong> do not replace multiple components or change program logic without identifying the cause.</li><li><strong>Verify restoration and document:</strong> confirm the intended operation and update the fault record or drawing discrepancy.</li></ol><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">What Field Technicians Discuss</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Technicians frequently recommend beginning with the print and checking expected signal states rather than guessing that the PLC or controller failed. These community discussions are practical perspectives, not replacements for manufacturer instructions or a site-specific safety plan.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[embed]https://www.reddit.com/r/PLC/comments/sdxj3l/whats_your_tips_and_tricks_for_troubleshooting/[/embed]<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Community discussion: troubleshooting electrical issues, confirming the correct voltage range, and understanding instrument limitations.</em></p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[embed]https://www.reddit.com/r/PLC/comments/1184yts/physical_troubleshooting_of_plcautomation_systems/[/embed]<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Community discussion: comparing field wiring and sensor states with PLC inputs and outputs before assuming a programming fault.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol><li>If Stop is open in a simple series control rung, can a downstream Start command energize the coil through that rung?</li><li>Why does an M1 seal-in contact not override an upstream overload contact?</li><li>Does an illuminated PLC output indicator prove a motor is receiving power?</li><li>Why must you verify the drawing revision before using it to diagnose a fault?</li><li>What is safer for a classroom exercise: analyzing an isolated simulated circuit or probing an unfamiliar live industrial cabinet?</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> (1) No. (2) Its parallel path bypasses only Start, not upstream series conditions. (3) No, an output indication does not prove the complete power or mechanical path. (4) Field wiring and settings may have changed. (5) An isolated simulation, with instructor-approved procedures.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Further Reading</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li><a href="https://www.rockwellautomation.com/en-us/support/workforce-development-training/instructor-led/industrial-electrical-controls-fundamentals-mfg213.html">Rockwell Automation: Industrial Electrical Controls Fundamentals</a> — formal topics spanning ladder diagrams, multimeters, control circuits, and troubleshooting.</li><li><a href="https://www.realpars.com/blog/electrical-troubleshooting-principles">RealPars: 8 Electrical Troubleshooting Principles for Finding Faults</a> — explains symptom definition, fault hypotheses, and verification.</li><li><a href="https://www.fluke.com/en-us/learn/blog/electrical/what-is-a-digital-multimeter">Fluke: What Is a Digital Multimeter?</a> — instrument fundamentals for interpreting measurements.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Conclusion</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A ladder diagram becomes a troubleshooting tool when you use it to predict which conditions must be true before an output can operate. Begin with the symptom, trace the intended path, compare expected states with safely obtained evidence, and investigate the cause instead of bypassing protection or swapping parts at random. <strong>The goal is not to guess faster; it is to narrow the fault logically and verify the conclusion.</strong></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em>BitcoinVersus.Tech Editor's Note: We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided.</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"medium","linkDestination":"none"} --><figure class="wp-block-image size-medium"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png?w=300" alt="Original BitcoinVersus.Tech donation QR code for 5,000 satoshis (0.00005 BTC)" class="wp-image-24043" style="max-width:100%;height:auto" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p><!-- /wp:paragraph -->
