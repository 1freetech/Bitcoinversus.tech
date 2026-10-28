---
lesson_id: OSHRE.001
post_id: 26788
title: "OSHRE.001: Hashboard Voltage Domains and Power Distribution"
url: "https://bitcoinversus.tech/2026/10/27/oshre-001-hashboard-voltage-domains-power-distribution/"
featured_media: 26784
featured_image_dimensions: "1200x630"
featured_cover_style: "Anime Editorial Artwork (rotation #2)"
in_story_media_count: 3
in_story_photo_ids: [23660]
in_story_youtube_video_ids: [PBLX667gAEM, 1xpz9Aa6wF0]
footer_donation_qr_id: 24043
category_ids: [57414501, 233999, 792778074, 2509703]
internal_links_count: 7
qa_status: "published — live visual/playback QA pending"
qa_evidence: "WordPress post read-back confirms status published, cover ID 26784; media.get confirms 1200x630; saved content has 2 native Gutenberg YouTube blocks; rendered WordPress content has 2 actual youtube.com/embed iframes; linked real S9 photograph present; footer QR preserved; live independent browser screenshots and playback tests not available."
---

<!-- wp:paragraph --><p><strong>OSHRE.001 — Open-Source Hashboard Repair Engineering / Super-Fundamentals.</strong> A mining hashboard needs more than an external power connector: its ASIC cores, supporting logic and supervisory circuits must receive carefully controlled electrical power. A <strong>voltage domain</strong> is a portion of the board whose components operate across a defined electrical potential difference. Understanding the distinction between a domain’s <em>local voltage</em> and its <em>voltage relative to another point on the board</em> is foundational to safe fault analysis. This lesson builds on <a href="https://bitcoinversus.tech/2026/10/27/oshre-000-bitcoin-mining-anatomy-of-the-hashboard/">OSHRE.000, The Anatomy of the Hashboard</a>, and concentrates on one teachable concept: <strong>how electrical power is organized into voltage domains</strong>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Learning objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>Define voltage, electrical potential, current, local reference and voltage domain in practical terms.</li><li>Explain the documented Antminer S9 arrangement of 63 BM1387 ASICs in 21 power domains.</li><li>Distinguish core power from separate low-voltage logic rails and the board’s input power.</li><li>Work through basic domain-voltage arithmetic without assuming that every board has the S9 design.</li><li>Identify why model, revision and safety documentation are prerequisites to diagnostic measurements.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2>1. Voltage is a difference between two points</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>An electrical voltage is not a property of a single isolated point. It is the <strong>difference in electric potential between two points</strong>. If a meter shows 0.4 V between the low side and high side of an ASIC power domain, that reading describes the potential difference across the domain. It does not mean either point sits at 0.4 V relative to chassis ground. The measurement reference matters as much as the number.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This distinction is particularly important on boards with <strong>series-connected power domains</strong>. Suppose several neighboring domains each sustain roughly 0.4 V across their local supply terminals. Each may have a similar local operating voltage, yet their absolute potentials relative to one common reference step progressively upward along the series chain. Touching two locations separated by multiple domains can therefore bridge a greater potential difference than the voltage inside either local domain.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>2. What makes a voltage domain?</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A domain is an electrically defined group that shares an operating supply/reference arrangement. Depending on the board generation, ASICs may share a local domain in parallel while neighboring groups form a series-connected stack. Other ASIC products employ different converters, voltage regulators, voltage sensing and level-shifting schemes. A technician must never transfer a domain count or a test-point interpretation from one model to another.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>A voltage domain is also different from a <em>signal chain</em>. A clock or command signal may pass from chip to chip and cross domain boundaries; its required signaling levels and reference relationships are separate design questions. <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-hardware-what-is-hashboard-asic-board/">The hashboard explainer</a> describes the board’s broad role, while <a href="https://bitcoinversus.tech/2026/10/24/ospcb-001-pcb-layers-copper-stackups/">OSPCB.001 on copper layers and stackups</a> introduces the physical copper structures that carry currents and signals.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>3. The classic Antminer S9 worked example</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The <a href="https://www.zeusbtc.com/manuals/Antminer-S9-Hash-Board-Repair-Guide.asp">Antminer S9 hashboard repair reference</a> documents <strong>63 BM1387 mining ASICs</strong> arranged in <strong>21 series-connected voltage domains</strong>, each with <strong>three chips</strong>. The chip population is therefore 21 × 3 = 63. It is essential to read this correctly: the three ASICs share a domain’s local core-power arrangement; they are <strong>not</strong> three independent 0.4 V drops that should be added together. The approximately 0.4 V core figure is a board- and operating-condition-specific example, not a safe universal test target.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":23660,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/antminer-s9-sha256-asic.jpg" alt="Real Bitmain Antminer S9 mining hardware with exposed board-level components" class="wp-image-23660" /><figcaption class="wp-element-caption"><em>Real Antminer S9 mining hardware showing the industrial housing and exposed board-level construction. Photograph: Steve Rainwater / <a href="https://commons.wikimedia.org/wiki/File:Antminer_ASIC_Miner.jpeg">Wikimedia Commons</a>, CC BY-SA 2.0.</em></figcaption></figure><!-- /wp:image -->

<!-- wp:paragraph --><p>The S9 example is useful because its older service literature makes the series-domain concept explicit. <a href="https://www.zeusbtc.com/articles/information/171-antminer-s9-and-s9i-manual-download">Zeus Mining’s S9/S9i reference</a> identifies 21 domains and the five familiar diagnostic signal families: CLK, CO, RI, RST and BO. Those signals are addressed only briefly here; their direction and timing warrant a separate future lesson.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>4. Calculating a domain and the full stack</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>For a simplified, illustrative S9 model, assume each of the 21 power domains has a local core voltage of 0.40 V. The total voltage across the series stack is then <strong>21 × 0.40 V = 8.40 V</strong>. This is an example of voltage addition across series-connected domains. It does <strong>not</strong> mean that the 12 V PSU directly delivers 0.40 V to each chip, that every chip draws an identical current, or that a real board must always measure exactly 8.40 V under every operating condition. Regulation and voltage/frequency settings affect actual values.</p><!-- /wp:paragraph -->

<!-- wp:table --><figure class="wp-block-table"><table><thead><tr><th scope="col">Quantity</th><th scope="col">Illustrative S9 value</th><th scope="col">Meaning</th></tr></thead><tbody><tr><td>BM1387 ASICs on one hashboard</td><td>63</td><td>Population documented for the reference board.</td></tr><tr><td>Chips within one voltage domain</td><td>3</td><td>Group sharing its local domain supply.</td></tr><tr><td>Series-connected voltage domains</td><td>21</td><td>Number of local domain drops added across the stack.</td></tr><tr><td>Assumed local domain difference</td><td>0.40 V</td><td>A teaching example based on the older S9 core-voltage reference.</td></tr><tr><td>Calculated total stack difference</td><td>8.40 V</td><td>21 × 0.40 V; not an independent field measurement.</td></tr></tbody></table></figure><!-- /wp:table -->

<!-- wp:paragraph --><p><strong>Worked exercise:</strong> If a training worksheet specifies 20 equal series domains with 0.42 V across each domain, the idealized stack difference is <strong>20 × 0.42 V = 8.40 V</strong>. Conversely, an 8.4 V stack divided into 21 equal model domains gives an average 0.4 V. Neither calculation locates a defective component; actual faults produce nonuniform changes and require proper reference points, schematics and safe test procedures.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>5. Input power, step-down conversion and auxiliary rails</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A hashboard does not operate all its circuitry at the same voltage. External DC input feeds the board’s power-conditioning network. A <strong>DC–DC stage</strong> can reduce and regulate the voltage applied to the ASIC core-domain stack. Separate <strong>low-dropout regulators (LDOs)</strong> and supporting circuits establish logic and clock-related supplies. On historical S9 boards, the repair documentation describes an adjustable DC–DC circuit and a <strong>14 V boost</strong> section serving auxiliary supply arrangements. The exact distribution differs by board revision, including changes between external and integrated LDO implementation.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Capacitors stabilize supply rails by absorbing rapid current fluctuations; inductors and switching transistors are central to many switch-mode converters; feedback allows a regulator to maintain its target output despite changes in load. For a broader discussion of how miner power problems manifest, see <a href="https://bitcoinversus.tech/2026/10/13/why-bitcoin-miner-power-supplies-fail/">why ASIC power supplies fail</a> and <a href="https://bitcoinversus.tech/2026/10/13/what-an-asic-miner-control-board-does/">what the miner’s control board does</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>6. Video lesson — observing domain-voltage checks</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The following original repair demonstration by <a href="https://www.youtube.com/watch?v=PBLX667gAEM">ZEUS MINING</a> focuses specifically on measuring domain voltages on an Antminer S9 board with a multimeter. Watch to identify how the presenter distinguishes a series-domain reading from a single-chip assumption. The video shows professional service procedures and is included for observation only; students must not reproduce energized probing without proper training and authorization.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=PBLX667gAEM","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=PBLX667gAEM
</div><figcaption class="wp-element-caption"><em>ZEUS MINING, “Repair Antminer S9 Hash Board — How to Test the Domain Voltage,” published December 5, 2022. Demonstration included for observation; not a live-test instruction.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph --><p>When interpreting the demonstration, ask which two points define the measurement, what the reference board is, and whether the reported value is a local core difference, the total regulated stack, or an auxiliary rail. A label like “VDD” alone is insufficient without the schematic and measuring reference.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>7. Why a defective domain can affect many chips</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A damaged ASIC, local short, failed solder connection, power-regulation issue or damaged signal interface can disturb a domain or the wider chain. A missing-chip count in a fixture is only an <strong>observed symptom</strong>. It may not identify the actual failed chip or prove the entire voltage domain has lost power. The S9 service reference explicitly treats voltage imbalance, missing chips and broken signal chains as related but distinct fault categories.</p><!-- /wp:paragraph -->

<!-- wp:table --><figure class="wp-block-table"><table><thead><tr><th scope="col">Observation</th><th scope="col">Competing explanations</th><th scope="col">Reason for caution</th></tr></thead><tbody><tr><td>Partial ASIC count</td><td>Signal-path interruption, clock/reset problem, missing local power, faulty chip</td><td>The first undetected ASIC is not automatically the failed part.</td></tr><tr><td>No board hashrate</td><td>Input or PSU failure, board power stage, firmware/control issue, cooling protection</td><td>A zero-rate symptom may originate outside the hashboard.</td></tr><tr><td>Intermittent detection</td><td>Connector damage, supply instability, thermal fault, marginal soldering</td><td>A repeatable pattern is needed before component replacement.</td></tr><tr><td>Apparent domain imbalance</td><td>Real local power difference, wrong meter reference, adjacent domain fault</td><td>Improper reference selection can mislead and can be hazardous.</td></tr></tbody></table></figure><!-- /wp:table -->

<!-- wp:paragraph --><p><a href="https://support.bitmain.com/hc/en-us/articles/115004448673-S9-series-ANTMINERs-low-hash-rate">BITMAIN’s S9 low-hashrate troubleshooting guidance</a> also identifies PSU, controller and loose-heatsink problems as alternative causes. An engineering diagnosis uses system evidence, not a single meter value or one kernel-log message.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>8. Video lesson — domain faults and missing ASIC counts</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A second recorded demonstration from <a href="https://www.youtube.com/watch?v=1xpz9Aa6wF0">Salman Tech&amp;Repair</a> discusses domain-voltage and missing-ASIC symptoms across older hashboard families, particularly the S9. Compare the presenter’s observations with the <a href="https://www.zeusbtc.com/Support_d.asp?d1=1902&amp;d2=troubleshooting-of-s9-hash-board-chip">S9 service discussion</a>, remembering that real revisions can depart from examples in videos.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=1xpz9Aa6wF0","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=1xpz9Aa6wF0
</div><figcaption class="wp-element-caption"><em>Salman Tech&amp;Repair, “DOMAIN VOLTAGE Hashboard,” published April 19, 2021. Discusses domain behavior and partial chip detection; model-specific details require independent verification.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph --><p>For beginners, the most important lesson is not to copy probe locations or repair actions from a different board. Instead, observe how a technician documents a symptom, compares it with a reference and tries to isolate the responsible system. This discipline carries forward into more advanced OSHRE courses.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>9. Safety and revision identification</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>Electrical-safety boundary:</strong> ASIC miner equipment may expose mains voltage within a PSU, stored capacitor energy, very high DC currents, hot hardware and series-domain potentials that are dangerous to bridge. Only appropriately trained and authorized personnel should perform energized diagnosis, using the current manufacturer procedure, a compatible fixture, correctly rated instruments and the facility’s electrical-safety rules. This introductory course authorizes <strong>no live probing, soldering or power injection</strong>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For an initial, de-energized intake, disconnect and isolate the unit according to the site procedure, allow the manufacturer-prescribed discharge time and have a qualified technician verify that it is safe to handle. Then record the miner model and exact PCB revision, ASIC markings, power-connector condition, visible damage and all documented test-point labels. The matching schematic and service guide must be obtained <em>before</em> interpreting measurements. Consider <a href="https://bitcoinversus.tech/2026/09/27/bitcoin-mining-hashboard-consolidation-compatibility/">model-specific hashboard compatibility</a> when choosing reference assemblies and fixtures.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>10. Unpowered laboratory assignment</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>Using a labeled, removed and verified safe board—or the historical photo above—identify the input power contacts, clusters of ASIC heatsinks, large capacitors, inductor(s), small regulators and signal connector.</li><li>Look up the exact board-revision service document. Record the number of ASICs, known domain count and all relevant warnings. If revision details are unavailable, mark them unverified.</li><li>Complete a paper worksheet for a fictional 21-domain series stack at 0.38 V per domain. Calculate the ideal total potential difference: 21 × 0.38 = <strong>7.98 V</strong>.</li><li>Create a two-column comparison of observed hardware features versus hypotheses about power design. Do not infer hidden copper routing from top-side appearance alone.</li><li>Explain in three sentences why a 0.4 V local difference and an 8.4 V board-stack difference can both be valid without contradiction.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2>11. Knowledge check</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>Is voltage measured at one isolated point, or between two points?</li><li>How many BM1387 ASICs and voltage domains are documented on the standard S9 board used in this lesson?</li><li>Does 21 × 0.40 V = 8.40 V mean each of the 63 chips independently receives 8.40 V?</li><li>What is the conceptual difference between a core supply domain and an auxiliary 1.8 V logic rail?</li><li>Name two non-chip causes that may produce zero hashrate or missing board detection.</li><li>Why is copying a multimeter probe location from another hashboard model unsafe?</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answer key:</strong> (1) Between two points. (2) 63 ASICs arranged in 21 domains of three. (3) No; it models the sum of local domain potential differences in a series stack. (4) Core domains supply mining circuitry while auxiliary rails power other functional blocks or interfaces. (5) Examples: faulty PSU, loose power connection, control-board issue, signal interruption or thermal shutdown. (6) References, layouts, domains and hazards may differ; bridging adjacent potentials can damage hardware or injure personnel.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>12. Primary references and continued learning</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The foundational reference is the <a href="https://www.zeusbtc.com/manuals/Antminer-S9-Hash-Board-Repair-Guide.asp">Antminer S9 hashboard maintenance documentation</a>, supported by <a href="https://www.zeusbtc.com/articles/information/171-antminer-s9-and-s9i-manual-download">Zeus Mining’s S9/S9i board overview</a> and <a href="https://support.bitmain.com/hc/en-us/articles/115004448673-S9-series-ANTMINERs-low-hash-rate">BITMAIN’s manufacturer troubleshooting guidance</a>. For PCB fundamentals, continue through <a href="https://bitcoinversus.tech/2026/10/24/ospcb-002-pads-vias-through-holes/">OSPCB.002 on pads, vias and through-holes</a>. OSHRE.002 will isolate one neighboring concept, such as chip-chain signals and clock distribution, rather than combining every repair procedure into this foundation lesson.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><strong>BitcoinVersus.Tech</strong> — Independent, open technical education.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor’s Note:</strong> This lesson is intended for introductory engineering education, not as authorization for energized repair. Support independent technical learning with a contribution of <strong>5,000 sats</strong>. Scan the original donation QR code below with a compatible Bitcoin wallet, and confirm that the receiving address is <strong>3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</strong> before sending.</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech original 5000-satoshi donation QR code" class="wp-image-24043" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>Open the QR code on another screen and scan it with your Bitcoin wallet. BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p><!-- /wp:paragraph -->