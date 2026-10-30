---
lesson_id: OSETC.040
post_id: 27439
title: "OSETC.040: Three-Phase Motor Voltage Imbalance — Line-to-Line Measurements and Troubleshooting"
url: "https://bitcoinversus.tech/2026/10/30/osetc-040-three-phase-motor-voltage-imbalance-line-to-line-troubleshooting/"
featured_media: 27434
in_story_media_count: 2
style: textbook-wiki
---

<!-- wp:paragraph --><p><strong>Three-phase voltage imbalance</strong> occurs when the three line-to-line voltages supplied to a motor are not equal. Even a relatively small voltage imbalance can cause a larger imbalance in the motor's phase currents, increasing heating and reducing the motor's operating margin. Electrical technicians diagnose the condition by comparing measured supply voltages, calculating the percentage imbalance and identifying faults in connections, protective devices or the upstream distribution system. This is <strong>OSETC.040</strong>, continuing after <a href="https://bitcoinversus.tech/2026/10/29/osetc-039-three-phase-motor-current-imbalance-clamp-meter-single-phasing/">OSETC.039 on three-phase motor current imbalance</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Understanding balanced three-phase power</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A balanced three-phase system has three sinusoidal phase voltages of equal magnitude, separated by 120 electrical degrees. In a common three-wire motor supply, technicians normally compare the line-to-line voltages L1–L2, L2–L3 and L3–L1. The relevant nominal voltage depends on the motor nameplate and electrical installation. See <a href="https://bitcoinversus.tech/2026/10/02/oseec-008-three-phase-power-fundamentals/">Three-Phase Power Fundamentals</a> for the underlying relationships.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>A motor's magnetic field depends on the three-phase supply. Unequal voltages produce a negative-sequence component that creates a field rotating opposite to the normal positive-sequence field. This can increase motor losses and heating even when the average voltage appears close to nominal. Voltage imbalance and current imbalance are related but are not the same measurement.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Calculating percentage voltage imbalance</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A commonly used NEMA-style calculation expresses the maximum absolute deviation of the three line-to-line voltage readings from their average, divided by the average and multiplied by 100%. The formula is <strong>Voltage imbalance (%) = 100 × maximum |measured voltage − average voltage| ÷ average voltage</strong>. It is important to state which method is used: the NEMA percentage deviation method differs from the IEC voltage-unbalance-factor method based on symmetrical components.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Suppose a technician records 480 V between L1–L2, 474 V between L2–L3 and 486 V between L3–L1. The average is (480 + 474 + 486) ÷ 3 = <strong>480 V</strong>. The deviations are 0 V, −6 V and +6 V. The largest absolute deviation is 6 V, so the imbalance is 100 × 6 ÷ 480 = <strong>1.25%</strong>. These are illustrative readings, not measurements from a particular installation.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The 1.25% result is not automatically a pass or fail for every motor. Compare it with the motor manufacturer's instructions, applicable standards, supply tolerances and site operating requirements. NEMA MG 1 guidance discusses motor performance and derating under unbalanced supply conditions.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Why small voltage differences matter</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A three-phase induction motor can draw substantially unequal currents when its supply voltages are unbalanced. The additional negative-sequence current increases winding and rotor heating. Prolonged operation can reduce insulation life and trigger overload protection. <a href="https://bitcoinversus.tech/2026/10/27/osetc-038-motor-winding-resistance-phase-balance-low-ohm-testing/">Winding resistance measurements</a> and <a href="https://bitcoinversus.tech/2026/10/22/osetc-037-insulation-resistance-testing-megohmmeters-motor-windings/">insulation resistance testing</a> help investigate motor condition, but neither substitutes for checking the energized supply under operating load.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The following existing image illustrates a motor-starting and electrical-control environment. It provides general visual context and is not a record of the example voltages.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":22566,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/oseec-017-motor-starting-cover.jpg" alt="Electrical motor starting equipment and industrial control hardware" class="wp-image-22566"/></figure><!-- /wp:image -->

<!-- wp:heading --><h2>Where technicians take measurements</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>For a meaningful diagnosis, the technician needs the motor's nameplate, a current single-line diagram, the operating load and readings at an appropriate measurement point. Measurements at the motor terminals under load can reveal conditions that differ from measurements at the distribution panel. A voltage drop across a degraded contact, fuse holder or terminal connection may become more apparent when current flows. <a href="https://bitcoinversus.tech/2026/10/29/oseec-024-control-circuit-voltage-drop-contactor-pickup-transformer-regulation/">Control-circuit voltage drop</a> addresses a related principle at lower control-circuit voltages.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Energized three-phase measurements can expose workers to electric shock and arc-flash hazards. Only qualified personnel using an approved energized-work procedure and correctly rated instruments should perform them. When feasible, establish an electrically safe work condition before inspection or repair, follow <a href="https://bitcoinversus.tech/2026/10/08/electrical-safety-what-is-lockout-tagout-loto-hazardous-energy/">lockout/tagout procedures</a> and verify absence of voltage with an appropriately rated tester. Never remove guards or reach into live cabinets solely to complete a training exercise.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Tracing the source of an imbalance</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The first diagnostic distinction is whether the imbalance originates upstream of the motor or develops along the feeder and control path. Compare authorized measurements at successive accessible points, document the load conditions and inspect de-energized equipment for loose terminals, damaged conductors, deteriorated contactor contacts, unequal single-phase loads and protective-device defects. A loose or high-resistance connection may produce localized heating and voltage drop.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>If the supply is balanced but motor currents are not, investigate winding faults, motor connections, mechanical loading and measurement accuracy. If the supply itself is imbalanced, work upstream with the facility electrical team or utility as appropriate. A missing phase, sometimes called single-phasing, is a more severe fault and requires prompt protective action; see <a href="https://bitcoinversus.tech/2026/10/29/osetc-039-three-phase-motor-current-imbalance-clamp-meter-single-phasing/">OSETC.039</a>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This existing motor-protection illustration gives visual context for the breakers, contactors and overload devices that may be involved in fault isolation.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":23994,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/oseec-019-motor-protection-1200x630-1.jpg" alt="Industrial motor protection switchgear and control equipment" class="wp-image-23994"/></figure><!-- /wp:image -->

<!-- wp:heading --><h2>Voltage imbalance versus voltage drop</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Voltage imbalance compares the three phase-to-phase magnitudes with one another. Voltage drop compares voltage at two points along an energized circuit or between no-load and loaded conditions. A circuit can have balanced but excessively low voltage, or nominal average voltage with unacceptable imbalance. Both conditions can affect motor performance. <a href="https://bitcoinversus.tech/2026/10/09/oseec-017-motor-starting-engineering-inrush-voltage-dip-dol-soft-starters-vfds-starter-selection/">Motor Starting Engineering</a> discusses transient voltage dip and inrush current during starting.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Documenting and verifying a repair</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A useful maintenance record includes the equipment identifier, date, operating load, meter model and calibration status, line-to-line voltages, calculated percentage imbalance, phase currents, observed temperature or alarms and the condition found. After an authorized repair, repeat measurements under comparable load conditions and confirm that motor protection settings and operating temperatures remain within approved limits. Avoid treating one snapshot as a complete trend.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Knowledge check</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>How is NEMA-style percentage voltage imbalance calculated?</strong> Divide the largest absolute deviation from the average of the three line-to-line voltages by that average, then multiply by 100. <strong>Why can small voltage imbalance cause significant heating?</strong> Negative-sequence effects increase motor losses and unequal phase currents. <strong>Can balanced current readings prove the supply is balanced?</strong> No; verify the voltage readings directly with appropriate test methods.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>References and further reading</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Primary references include <a href="https://www.nema.org/standards/view/motors-and-generators">NEMA MG 1 — Motors and Generators</a>, <a href="https://www.fluke.com/en-us/learn/blog/motors-drives-pumps-compressors/voltage-unbalance">Fluke's technical guidance on voltage unbalance</a>, and applicable motor manufacturer manuals. Continue with <a href="https://bitcoinversus.tech/2026/10/29/osetc-039-three-phase-motor-current-imbalance-clamp-meter-single-phasing/">motor current imbalance</a>, <a href="https://bitcoinversus.tech/2026/10/27/osetc-038-motor-winding-resistance-phase-balance-low-ohm-testing/">winding resistance testing</a> and <a href="https://bitcoinversus.tech/2026/10/12/oseec-019-motor-protection-engineering-overloads-short-circuits-relays-breakers-coordination/">motor protection engineering</a>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our work and help further secure the integrity of our research initiatives, please scan the QR code below to donate <strong>5,000 sats</strong> (best results on a laptop or larger screen).</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech Bitcoin donation QR code" class="wp-image-24043"/></figure><!-- /wp:image -->

<!-- wp:paragraph --><p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p><!-- /wp:paragraph -->