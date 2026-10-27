---
post_id: 26553
series: "Open-Source Electrical Engineering Certification"
lesson_id: "OSEEC.023"
title: "OSEEC.023: Control Transformer Sizing — Sealed VA, Inrush VA, and Voltage Regulation"
slug: "oseec-023-control-transformer-sizing-sealed-inrush-va"
status: "publish"
published: "2026-10-27"
url: "https://bitcoinversus.tech/2026/10/27/oseec-023-control-transformer-sizing-sealed-inrush-va/"
featured_media: 26550
video_url: "https://www.youtube.com/watch?v=GQLh28Rp1iw"
video_iframe_render_verified: true
actual_video_playback_verified: false
live_screenshot_verified: false
---

<!-- wp:paragraph --><p><strong>OSEEC.023 — Control Transformer Sizing: Sealed VA, Inrush VA, and Secondary Voltage.</strong> A motor-control panel may contain a small transformer that supplies control circuits even when the motor runs at a much higher voltage. Choosing that transformer is an engineering task: it must power devices continuously <em>and</em> supply the momentary demand of contactors and relays starting together. This lesson follows <a href="https://bitcoinversus.tech/2026/10/18/oseec-022-finding-control-circuit-faults-with-ladder-diagrams/">OSEEC.022 on finding control-circuit faults</a> and <a href="https://bitcoinversus.tech/2026/10/13/oseec-020-motor-control-engineering-contactors-seal-in-circuits-interlocks-reversing-starters-control-power/">OSEEC.020 on motor controls</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Define <strong>sealed VA</strong> and <strong>inrush VA</strong> for industrial controls.</li><li>Explain why continuous transformer nameplate VA and short-duration inrush capacity are different checks.</li><li>Work through a fictional sizing example using an actual manufacturer regulation table.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">What Is a Control Transformer?</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>An industrial control transformer is commonly an isolation transformer designed for stable secondary voltage during brief electromagnetic inrush. Its primary receives a compatible supply voltage; its secondary delivers the specified control voltage for coils, timers and indicating devices. Unlike a generic load calculation, selecting the transformer requires knowing which control devices can energize simultaneously. See Hammond Power Solutions' <a href="https://americas.hammondpowersolutions.com/products/control-automation/control-transformers">manufacturer overview of control transformers</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Two VA Numbers That Matter</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>Sealed VA</strong> is the apparent power needed while devices remain energized in their steady operating states. Add the sealed VA for the maximum set of simultaneously operating devices, using component datasheets.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><strong>Inrush VA</strong> represents the higher short-duration demand of electromagnetic devices as they pull in. Calculate the combination expected to start together and include steady loads that are already operating. An apparently adequate transformer can allow a contactor to chatter or fail to pick up if secondary voltage droops too far at inrush.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Hammond's <a href="https://documents.hammondpowersolutions.com/documents/Documents/Literature/Catalog_and_HPS_Info/HPS-Standard-Product-Catalog-Control-Transformers-(Section-1-of-HTP-16).pdf">industrial control transformer catalog (PDF, section 1, page 33)</a> explains the sealed VA and inrush VA selection process, including the use of a manufacturer-specific secondary voltage regulation table. Use the catalog for the exact product series, not a generic rule applied to every transformer.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Watch the Engineering Walkthrough</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The following tutorial was linked by its electrical-engineer instructor and covers control-transformer selection, inrush and sizing calculations. The lesson uses WordPress's native YouTube embed, and a direct video link is provided immediately afterward as a fallback.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=GQLh28Rp1iw]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Video source: electrical engineer Aaqil Khan, ControlX Automation, control transformer sizing tutorial.</em> <a href="https://www.youtube.com/watch?v=GQLh28Rp1iw">Open the original video directly on YouTube</a>. The instructor also <a href="https://www.linkedin.com/posts/aaqilkhan_industrialautomation-controlsystems-electricalengineering-activity-7476814397114458112-pv0z">linked its release on LinkedIn</a>. Video playback availability depends on YouTube and the reader's browser.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Worked Example: Select by Both Conditions</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Suppose a training panel is planned with a <strong>120 V AC control secondary</strong>. From a hypothetical component schedule, engineers determine <strong>140 VA maximum continuous sealed load</strong> and <strong>410 VA of inrush demand</strong> from devices selected to pull in together. These invented figures teach the method, not a certified real-world design.</p><!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li><strong>Confirm voltage and frequency.</strong> Match the incoming primary voltage, required 120 V secondary and supply frequency to a permitted transformer model.</li><li><strong>Check the continuous VA.</strong> The transformer nameplate must support at least 140 VA continuously under the applicable conditions.</li><li><strong>Estimate conservative combined inrush.</strong> Using Hammond's additive method B for this simplified training case, 140 + 410 = <strong>550 VA</strong>. This can conservatively count a component's sealed and inrush contributions together; other accepted calculation approaches and sequence assumptions depend on the manufacturer.</li><li><strong>Read the correct regulation column.</strong> In the published <em>HPS Imperator</em> table at 40% inrush power factor, a 100 VA unit is listed at 467 VA inrush for the 90% secondary-voltage column, while a 150 VA unit is listed at 699 VA. The 100 VA unit fails both checks here; the <strong>150 VA rating clears the two illustrative thresholds</strong>.</li><li><strong>Verify the exact product.</strong> Confirm the correct voltage combination, operating frequency, environmental rating, protection, and equipment-specific conditions before making any selection.</li></ol><!-- /wp:list -->

<!-- wp:image {"id":26551,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/oseec-023-transformer-continuous-vs-inrush-va.png" alt="Illustrative transformer sizing diagram showing 140 VA sealed, 410 VA inrush and comparison of 100 VA and 150 VA HPS Imperator ratings" class="wp-image-26551" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>Original calculation diagram based on manufacturer-published Imperator inrush ratings. All panel loads in the example are fictional; this is not a wiring diagram or a specification for field installation.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Why 90% Secondary Voltage Matters</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Inrush ratings depend on how much temporary secondary voltage reduction the system can tolerate. Hammond publishes different allowable inrush figures at 85%, 90%, and 95% of rated secondary voltage, and explains when those columns are appropriate. Choosing a column is an engineering judgment based on supply variation and component requirements; it is not a guarantee that every connected device will work at any reduced voltage.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Field Safety and Verification</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Use the selected device's actual manufacturer ratings and governing electrical requirements; a VA calculation alone does not design overcurrent protection, bonding, insulation, or wiring.</li><li>Do not open or measure energized industrial panels for a tutorial. Authorized electrical personnel must apply site procedures, lockout/tagout and absence-of-voltage verification where required.</li><li>Investigate coil chatter, fuse interruptions or low secondary voltage using approved maintenance workflows; do not bypass protection or increase fusing to conceal a sizing problem.</li><li>Review <a href="https://bitcoinversus.tech/2026/10/02/oseec-007-transformers-turns-ratio-step-up-step-down-isolation/">OSEEC.007 on transformer fundamentals</a> and <a href="https://bitcoinversus.tech/2026/10/14/oseec-021-electrical-drawings-ladder-diagrams/">OSEEC.021 on ladder diagrams</a> for related concepts.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>What does sealed VA describe?</li><li>Why can a transformer with enough sealed VA still fail when contactor coils first energize?</li><li>For our illustrative Imperator example, which continuous rating passes both the 140 VA sealed and 550 VA conservative inrush thresholds at the stated catalog conditions?</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> 1. Continuous apparent-power demand of equipment already operating. 2. Short-term inrush can cause unacceptable secondary-voltage sag. 3. The shown 150 VA option, subject to verifying an actual compatible model and manufacturer conditions.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Primary References and Conclusion</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The design principle is <strong>pass both checks: continuous sealed VA and manufacturer-rated inrush VA at acceptable secondary voltage</strong>. Sources include <a href="https://americas.hammondpowersolutions.com/products/control-automation/control-transformers">Hammond Power Solutions control transformers</a>, the <a href="https://documents.hammondpowersolutions.com/documents/Documents/Literature/Catalog_and_HPS_Info/HPS-Standard-Product-Catalog-Control-Transformers-(Section-1-of-HTP-16).pdf">Hammond sizing and regulation tables</a>, and a second <a href="https://cdn.automationdirect.com/static/specs/controlxformerselection.pdf">control transformer selection reference distributed by AutomationDirect</a>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer to make engineering education accessible, practical, and verifiably sourced. If this lesson helped, consider supporting independent research with a donation of <strong>5,000 sats</strong> using the QR code below.</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Original BitcoinVersus.Tech 5,000 sat donation QR code" class="wp-image-24043" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For convenient scanning, display this page on a desktop or another larger screen and scan the QR using your mobile Bitcoin wallet. Thank you for supporting technical education.</em></p><!-- /wp:paragraph -->
