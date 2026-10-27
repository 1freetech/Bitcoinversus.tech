---
post_id: 26573
series: "Open-Source Electrical Technician Certification"
lesson_id: "OSETC.038"
title: "OSETC.038: Motor Winding Resistance — Phase Balance and Safe Low-Ohm Testing"
slug: "osetc-038-motor-winding-resistance-phase-balance-low-ohm-testing"
status: "publish"
published: "2026-10-27"
url: "https://bitcoinversus.tech/2026/10/27/osetc-038-motor-winding-resistance-phase-balance-low-ohm-testing/"
featured_media: 26571
cover_style: "Split-Screen Editorial Diptych"
media_in_story: 2
media_types: ["native YouTube video", "native YouTube video"]
original_diagrams: 0
video_urls:
  - "https://www.youtube.com/watch?v=mANu4f-yqd4"
  - "https://www.youtube.com/watch?v=GGg1ULtKhUc"
video_iframe_render_verified: true
actual_video_playback_verified: false
live_desktop_mobile_screenshot_verified: false
---

<!-- wp:paragraph --><p><strong>OSETC.038 — Motor Winding Resistance: Measuring Phase Balance Safely.</strong> A three-phase motor may trip, overheat, or fail to start because of an open winding, a faulty terminal connection, or a damaged electrical path. An electrical technician can gather one useful clue by comparing <strong>low-ohm winding resistance</strong> readings across the motor's phases. This lesson continues <a href="https://bitcoinversus.tech/2026/10/22/osetc-037-insulation-resistance-testing-megohmmeters-motor-windings/">OSETC.037 on insulation-resistance testing</a>, but teaches a <em>different</em> measurement: resistance through the copper windings rather than insulation leakage to ground.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Identify winding resistance in <strong>ohms (Ω)</strong> versus insulation resistance in <strong>megohms (MΩ)</strong>.</li><li>Understand why a six-terminal motor can permit separate coil comparisons, while a three-lead motor may require a different interpretation.</li><li>Follow a safe, documented measurement workflow and recognize when a reading calls for further testing.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Why Motor Winding Resistance Matters</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Copper winding conductors and their terminations oppose the flow of current. Each comparable phase of a healthy, similarly constructed three-phase motor should generally have similar resistance when tested in equivalent conditions. A disconnected conductor may show an open circuit. A significantly different value may point to a damaged or corroded connection, a winding defect, incorrect lead identification, or a measurement problem. <a href="https://www.fluke.com/en-ca/learn/blog/insulation-testers/reduce-motor-downtime-with-sequential-insulation-resistance-tests">Fluke's troubleshooting guidance</a> recommends comparing low-resistance values across three stator phases rather than treating any one measurement as a complete motor-health assessment.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The distinction matters: a motor can have balanced DC winding readings and still have insulation damage, a turn-to-turn defect, or another problem. <strong>A balanced result is evidence, not a certificate that a motor is safe to energize.</strong></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Safety First: Isolate Before Measuring</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>This is an <strong>observational training lesson</strong>, not permission to work inside an energized motor-control center. Motor circuits can retain hazardous energy from variable-frequency drives, capacitors, and mechanical systems. Electrical testing must be performed only by authorized, qualified personnel under site procedures. OSHA's <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147">control-of-hazardous-energy requirements</a> call for proper shutdown, isolation, lockout/tagout, control of stored energy, and verification of deenergization before servicing.</p><!-- /wp:paragraph -->

<!-- wp:list --><ul class="wp-block-list"><li>Identify the motor, its nameplate, and winding terminal diagram before starting.</li><li>Follow the approved energy-control procedure, including lockout/tagout and verification of absence of voltage with an appropriately rated instrument.</li><li>Protect or disconnect attached electronics, drives and other equipment in accordance with the manufacturer and work order.</li><li>Never place a resistance meter across a live circuit. Never use a megohmmeter as a substitute for a low-ohms test.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Video 1 — Six-Terminal Motor Winding Checks</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>This demonstration focuses on a three-phase motor with identifiable winding ends. The presenter shows how each winding path can be compared with an ordinary digital multimeter after the motor is properly isolated. The six-terminal example is useful for understanding why temporary jumpers or links may need to be accounted for by trained personnel.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=mANu4f-yqd4]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Video: The DIY Guy, “How to Test a 3-Phase Electric Motor Like a Pro with a Multimeter!” (August 2026).</em> <a href="https://www.youtube.com/watch?v=mANu4f-yqd4">Open the original tutorial on YouTube</a> if the player is unavailable. Follow your facility's approved electrical safety practices rather than treating a public demonstration as an operating procedure.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Understanding Three-Lead Versus Six-Lead Readings</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A motor with <strong>six accessible and correctly identified winding ends</strong> may permit separate measurements across matching coils, for example <code>U1–U2</code>, <code>V1–V2</code>, and <code>W1–W2</code>, but only when the connections are appropriate for that motor's diagram and the work is authorized. This isolates the intended paths for a meaningful comparison.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>A motor with <strong>three external leads</strong> may have its windings joined internally in star (wye) or delta form. Measurements between <code>L1–L2</code>, <code>L2–L3</code>, and <code>L3–L1</code> then reflect the connected network—not necessarily a single individual coil. Interpreting resistance without understanding that topology can lead to a false conclusion. For underlying three-phase relationships, see <a href="https://bitcoinversus.tech/2026/10/02/oseec-008-three-phase-power-fundamentals/">OSEEC.008 on three-phase power</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">A Safe Measurement and Documentation Workflow</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li><strong>Prepare the record.</strong> Write down the motor identifier, model, connection type, operating history, ambient and winding temperature when available.</li><li><strong>Verify isolation.</strong> Only qualified personnel may complete the site's established LOTO and absence-of-voltage steps and isolate the correct test paths.</li><li><strong>Validate the instrument.</strong> Confirm the meter is suitable for the expected low-resistance range; record meter accuracy and check test-lead effects. A dedicated four-wire/Kelvin low-resistance instrument separates current and voltage sensing for greater precision.</li><li><strong>Compare equivalent paths.</strong> Measure the intended comparable winding terminals, maintaining clean, stable connections and the same testing conditions.</li><li><strong>Document and escalate.</strong> Record each measurement with units and temperature, compare with the OEM specification and historical results, and investigate any unexplained imbalance before service is restored.</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p>Motor-copper resistance changes with temperature. Readings taken just after shutdown should not be compared uncritically with cold factory readings. Also, a general-purpose meter may not resolve very small differences accurately; test-lead resistance and contact quality can obscure low-ohm measurements.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Worked Example — Three Fictional Readings</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Suppose a properly isolated training motor has three <em>individually accessible</em>, equivalent coil paths. A technician records <strong>1.20 Ω</strong>, <strong>1.21 Ω</strong>, and <strong>1.19 Ω</strong> at similar temperatures. The mean is <strong>1.20 Ω</strong>; the full spread is <strong>0.02 Ω</strong>, or approximately <strong>1.67% of the mean</strong>. This is a descriptive comparison, <strong>not a universal motor acceptance limit</strong>. The motor manufacturer's specifications and the precision of the test setup govern the evaluation.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>If instead one equivalent path reads <strong>open circuit</strong>, the next steps are to verify lead identification, contact quality, jumper placement, and wiring before determining whether the winding is actually open. A value near zero may also arise from test-lead limitations or an unintended parallel path; it does not automatically prove shorted turns.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Video 2 — Comparing Resistance and Continuity</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>This second demonstration covers continuity, winding resistance comparison, and the distinction between conductor-path checks and body/ground checks with a multimeter. Use it to reinforce the diagnostic questions rather than to copy live-work techniques.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=GGg1ULtKhUc]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Video: SN TECHNICAL, “3 Phase Motor Testing With Multimeter! How to Check 3 Phase Motor!” (May 2023).</em> <a href="https://www.youtube.com/watch?v=GGg1ULtKhUc">Watch directly on YouTube</a> as a fallback. Continuity beeps alone are not precise phase-balance measurements.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">How This Differs From the Previous Lesson</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><a href="https://bitcoinversus.tech/2026/10/22/osetc-037-insulation-resistance-testing-megohmmeters-motor-windings/">OSETC.037</a> introduced a megohmmeter and a high-resistance insulation path, including safe discharge after testing. This lesson instead focuses on low-resistance copper paths using an appropriately selected ohmmeter. Both tests may contribute to an authorized motor investigation. Fluke's <a href="https://www.fluke.com/en-ie/learn/blog/insulation-testers/troubleshoot-failed-motors-with-insulation-resistance-testing">motor-troubleshooting article</a> describes why multiple checks are needed and why a single passing measurement does not establish motor health.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>Why should a technician compare equivalent winding paths rather than just one resistance reading?</li><li>Why are three-lead line-to-line measurements not always readings of single motor coils?</li><li>Does a balanced low-ohm test prove that winding insulation is healthy?</li><li>What safety steps must happen before resistance testing?</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> 1. Differences may reveal suspect paths or connection problems. 2. Star/delta internal connections create combined current paths. 3. No; insulation health requires separate appropriate tests. 4. Authorized isolation, lockout/tagout, control of stored energy, and absence-of-voltage verification, following the site's procedure.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Sources and Conclusion</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The central lesson is simple: <strong>compare equivalent low-ohm winding paths, account for connection topology and temperature, and never confuse winding resistance with insulation resistance.</strong> Further reading: <a href="https://www.fluke.com/en-ca/learn/blog/insulation-testers/reduce-motor-downtime-with-sequential-insulation-resistance-tests">Fluke on sequential motor testing</a>, <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147">OSHA on hazardous-energy control</a>, and <a href="https://bitcoinversus.tech/2026/10/23/osetc-033-transformer-fundamentals-windings-turns-ratio-nameplate-ratings/">OSETC.033 on transformer winding fundamentals</a> for adjacent electrical concepts.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor’s Note:</strong> We volunteer daily to keep technical information useful, educational, and verifiably true. To help sustain independent research and open training, please consider a donation of <strong>5,000 sats</strong> using the QR code below.</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Original BitcoinVersus.Tech 5,000 sat donation QR code" class="wp-image-24043" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>To scan the QR code, open this lesson on a desktop or larger screen and scan it with your mobile Bitcoin wallet. Thank you for supporting independent technical education.</em></p><!-- /wp:paragraph -->
