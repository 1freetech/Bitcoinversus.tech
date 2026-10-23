---
post_id: 26150
series: "Open-Source Electrical Technician Certification"
lesson_number: 37
title: "OSETC.037: Insulation Resistance Testing Basics — Megohmmeters and Motor Winding Safety"
status: "publish"
slug: "osetc-037-insulation-resistance-testing-megohmmeters-motor-windings"
live_url: "https://bitcoinversus.tech/2026/10/22/osetc-037-insulation-resistance-testing-megohmmeters-motor-windings/"
featured_media_id: 26155
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osetc037-insulation-resistance-cover-1200x630-1.jpg"
categories: [547916683, 2509703]
publication_date: "2026-10-22"
qa_note: "WordPress view HTML rendered 2 YouTube iframe players and a Reddit embed blockquote with the official Reddit widget script; independent interactive playback not measured."
supersedes: "archive/2026/10/26150-osetc-037-opc-ua-client-server-endpoints-nodes-browsing.md"
---

<!-- wp:paragraph --><p><strong>Open-Source Electrical Technician Certification | OSETC.037 | Electrical Testing | Topic: insulation resistance in motors and cables.</strong></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Elementary Overview</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A conductor is designed to carry electric current; its insulation is designed to keep that current out of other conductors, equipment frames, and people. <strong>Insulation resistance testing</strong> checks how strongly the insulation opposes a small leakage current. An insulation resistance tester—often called a <strong>megohmmeter</strong> or “megger”—applies a controlled DC test voltage to isolated, de-energized equipment and reports resistance in <strong>megohms (MΩ)</strong> or <strong>gigohms (GΩ)</strong>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This is an electrical testing lesson, not a networking lesson. It follows <a href="https://bitcoinversus.tech/2026/09/30/osetc-008-voltage-drop-loose-connections/">OSETC.008: Voltage Drop and Loose Connections</a>, <a href="https://bitcoinversus.tech/2026/09/30/osetc-011-lockout-tagout-energy-isolation/">OSETC.011: Energy Isolation</a>, and <a href="https://bitcoinversus.tech/2026/10/01/osetc-016-motor-starters-overload-relays-basics/">OSETC.016: Motor Starters</a>. Unlike voltage drop under load, an insulation resistance test looks for leakage through or across insulation while the circuit is isolated.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Define insulation resistance and explain what a megohmmeter measures.</li><li>Distinguish an insulation resistance test from a continuity test and a winding-resistance measurement.</li><li>Explain why circuits, electronic drives, and control devices must be isolated and why stored charge must be discharged.</li><li>Recognize phase-to-frame versus phase-to-phase measurements on different motor winding configurations.</li><li>Record, compare, and interpret readings without inventing a universal pass/fail number.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">What the Meter Actually Measures</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The tester applies a specified DC voltage and measures the tiny resulting current. It calculates resistance using Ohm’s law: <strong>R = V ÷ I</strong>. For illustration, a hypothetical 500 V test producing 1 µA of measured current corresponds to 500 MΩ. This example explains the math; <strong>it does not prescribe a safe test voltage or a passing value</strong> for any equipment.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Real readings may change with time because insulation has capacitive charging and dielectric absorption effects. Moisture, contamination, temperature, motor size, cable length, and test duration affect results. A single reading without context is far less useful than a properly documented trend.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=4rJLUhR0KMY]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Video: Fluke Corporation demonstrates an insulation resistance tester. Viewing the demonstration is not a substitute for site qualification, lockout/tagout, equipment-specific procedures, or manufacturer instructions.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">What Is Being Tested?</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>Winding-to-frame:</strong> checks whether a motor winding’s insulation effectively separates live conductors from the grounded motor frame.</li><li><strong>Conductor-to-ground:</strong> checks cable or equipment insulation with the circuit isolated and all connected loads accounted for.</li><li><strong>Phase-to-phase:</strong> can be informative only when separate winding groups or conductors are actually isolated; internally connected three-phase windings may naturally show continuity between motor leads.</li><li><strong>Winding resistance:</strong> a separate, low-resistance measurement used to compare winding paths; it is not an insulation resistance test.</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p>A three-lead motor may have its winding groups joined internally in star or delta configuration. Applying an insulation resistance test between two leads that are electrically connected through the winding does <strong>not</strong> isolate insulation between independent windings. Technicians must identify the motor’s winding diagram before interpreting a phase-to-phase result.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[embed]https://www.reddit.com/r/electricians/comments/1ke5w0t[/embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Social discussion: practicing electricians compare phase-to-frame and phase-to-phase motor test interpretations. This discussion is a field-perspective illustration, not a governing standard.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Safety and Preparation</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>Important:</strong> insulation testers generate potentially dangerous DC voltages even when the equipment is disconnected from its normal supply. Only qualified personnel following a written site and manufacturer procedure should perform physical testing. The following is a conceptual checklist, not an authorization to test live or unfamiliar equipment.</p><!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>Review the equipment nameplate, wiring diagram, instrument manual, and site-approved test plan; determine what is being tested and what must be disconnected.</li><li>Identify every normal and alternate energy source, perform approved isolation/lockout/tagout, and have a qualified person verify absence of voltage with an appropriately rated instrument.</li><li>Isolate the motor windings or cable from connected electronics, including VFDs, PLC cards, sensors, surge protectors, and instruments, as required by their manufacturers; do not apply a megohmmeter across a connected drive.</li><li>Confirm the test method and voltage from the equipment documentation and applicable standard rather than assuming that one setting fits every motor.</li><li>Control the work area and do not touch conductors or leads while a test is active; follow the tester’s manufacturer instructions for connections and operation.</li><li>Allow stored capacitive charge to discharge using the approved method, verify it is safe, restore any disconnected wiring per the procedure, and document all results before returning the equipment to service.</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p>The <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.333">OSHA electrical work-practice rule, 29 CFR 1910.333</a>, addresses de-energization, lockout/tagout, and verification of the de-energized condition. Fluke’s <a href="https://media.fluke.com/c34d63d2-ca47-4635-8a9f-b10600665ad3_original%20file.pdf">Insulation Resistance Testing application note</a> explains isolation, temperature effects, and discharge precautions.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">How to Read a Test Report</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A technician should write down the <strong>equipment ID, insulation path, test voltage, duration, reading, temperature, humidity if relevant, test instrument, date, and applicable acceptance criterion</strong>. Record whether the test was on new, repaired, or in-service equipment. Correct for temperature or compare like-for-like conditions only according to the applicable procedure.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>A high reading alone does not prove a motor is fully healthy; insulation testing may not reveal turn-to-turn shorts or mechanical failures. Likewise, one lower reading does not automatically prove a motor should be condemned: compare the result with the equipment manufacturer's limits, appropriate standard, previous readings, temperature and moisture conditions. A declining trend can justify further investigation.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=mNdPt3EsFIA]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Video: motor insulation testing demonstration using an insulation multimeter. All demonstrations are informational; use the instructions and safety controls for the actual equipment in front of you.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Hands-On Learning Without High-Voltage Testing</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>Draw a three-phase motor terminal box, the grounded frame, and the isolation boundary.</li><li>Mark which elements must be disconnected before a winding-to-frame insulation test.</li><li>Given a fictional reading of 500 MΩ at 500 V, compute the approximate leakage current using I = V ÷ R (answer: 1 µA).</li><li>Create a blank test report with fields for circuit identification, conditions, measured result and approval.</li><li>Explain why a three-lead motor may show continuity across line terminals even with good insulation to its frame.</li></ol><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>What does a megohmmeter measure?</li><li>Why must a VFD and sensitive controls be protected from the applied test voltage?</li><li>Does a single high insulation resistance reading prove the motor has no winding fault?</li><li>What additional information must accompany an MΩ reading?</li><li>Why is phase-to-phase megohmmeter testing not always informative on three-lead motors?</li></ol><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Answers</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>Insulation resistance—the opposition to leakage current through or over insulation.</li><li>The higher-than-normal applied DC voltage can damage connected electronics.</li><li>No. It is one diagnostic of insulation condition, not a complete motor health test.</li><li>At minimum, equipment and test points, applied voltage, time, environmental conditions, procedure, and comparison criterion.</li><li>Because windings may be electrically joined internally, the terminals are not necessarily isolated from each other.</li></ol><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Key Takeaways</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Insulation resistance testing is fundamentally about <strong>electrical isolation integrity</strong>, not networking or software protocols.</li><li>A normal continuity check and a megohmmeter measurement answer different questions.</li><li>De-energize, lock out, verify isolation, protect electronics, and discharge stored energy; use qualified staff.</li><li>Interpret trends against equipment-specific criteria rather than an invented universal MΩ threshold.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">References and Further Reading</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.333">OSHA — 29 CFR 1910.333 Electrical Work Practices</a>.</li><li><a href="https://media.fluke.com/c34d63d2-ca47-4635-8a9f-b10600665ad3_original%20file.pdf">Fluke — Insulation Resistance Testing (application note)</a>.</li><li><a href="https://www.youtube.com/watch?v=4rJLUhR0KMY">Fluke official video — How to Measure Insulation Resistance</a>.</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" class="wp-image-24043" alt="Original BitcoinVersus.Tech donation QR code for 5,000 sats" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p><!-- /wp:paragraph -->