---
lesson_id: OSHRE.002
post_id: 26845
title: "OSHRE.002: Hashboard Signal Chains — CLK, CO, RI, BO and RST"
url: "https://bitcoinversus.tech/2026/10/28/oshre-002-hashboard-signal-chains-clk-co-ri-bo-rst/"
featured_media: 26839
featured_image_dimensions: "1200x630"
featured_cover_style: "Wordless Comic (rotation #3)"
in_story_media_count: 3
in_story_photo_ids: [21674]
in_story_youtube_video_ids: [UtOblbWtqXQ, 5WH7g61d90w]
footer_donation_qr_id: 24043
category_ids: [57414501, 792778074, 284207, 2509703]
qa_status: "published — live visual/playback QA pending"
qa_note: "WordPress post read-back verifies publish status, correct featured-media ID, original Gutenberg source and two rendered youtube.com/embed iframe players. Independent browser screenshots and actual playback are not available; generic public-page web fetch returned an error."
---

<!-- wp:paragraph --><p><strong>OSHRE.002 — Open-Source Hashboard Repair Engineering / Super-Fundamentals.</strong> A Bitcoin mining ASIC cannot work in isolation from its neighbors: it must receive timing and commands, recognize reset and status conditions, and return calculated results. On the classic Antminer S9, five labeled signal families organize that communication: <strong>CLK, CO, RI, BO and RST</strong>. A repair engineer must understand both the <em>meaning</em> of each signal and the <em>direction</em> it travels before interpreting missing-chip symptoms. This lesson builds on <a href="https://bitcoinversus.tech/2026/10/27/oshre-000-bitcoin-mining-anatomy-of-the-hashboard/">OSHRE.000, The Anatomy of the Hashboard</a>, and <a href="https://bitcoinversus.tech/2026/10/27/oshre-001-hashboard-voltage-domains-power-distribution/">OSHRE.001, Hashboard Voltage Domains and Power Distribution</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Learning objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>Identify the purpose of CLK, command in/out, result return, busy/status and reset in an ASIC chain.</li><li>Trace the forward and reverse paths in a documented 63-chip BM1387 Antminer S9 board.</li><li>Explain why a 25 MHz oscillator and chip-internal hashing clocks are not interchangeable performance specifications.</li><li>Interpret incomplete chip enumeration as diagnostic evidence, not automatic proof that all missing ASICs are defective.</li><li>Build a de-energized intake worksheet and distinguish safe observation from energized electrical diagnosis.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2>1. What is an ASIC signal chain?</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <strong>signal chain</strong> is the organized succession of electrical communication links among mining chips and the board’s controller-facing circuitry. It is related to—but separate from—the electrical <a href="https://bitcoinversus.tech/2026/10/27/oshre-001-hashboard-voltage-domains-power-distribution/">voltage domains</a> that supply energy to those chips. The command stream travels toward the later ASICs in the chain, while responses can travel in the opposite direction. Reset, clock and status paths supply additional coordination. The precise interface is a property of the <strong>chip family and PCB revision</strong>, not a universal protocol shared by all Bitcoin miners.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>In the reference S9, <a href="https://www.zeusbtc.com/articles/information/171-antminer-s9-and-s9i-manual-download">ZEUS MINING’s S9/S9i board documentation</a> identifies <strong>63 BM1387 chips</strong>, numbered from 00 to 62 in one service-guide convention (or U1 through U63 on other diagrams). It distinguishes four signals that propagate forward and one response path that returns in reverse. That directional distinction is the heart of this lesson.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>2. The five signal families at a glance</h2><!-- /wp:heading -->

<!-- wp:table --><figure class="wp-block-table"><table><thead><tr><th scope="col">Label</th><th scope="col">Common interpretation</th><th scope="col">Documented S9 direction</th><th scope="col">Why it matters</th></tr></thead><tbody><tr><td>CLK</td><td>Clock / timing reference</td><td>Oscillator through early ASICs toward chip 62</td><td>A missing or malformed clock can prevent valid synchronous chip operations.</td></tr><tr><td>CI / CO (TX)</td><td>Command input / output</td><td>Controller side → chip 00 → chip 62</td><td>Moves work/control information forward along the chip chain.</td></tr><tr><td>RI / RO (RX)</td><td>Response input / output</td><td>Chip 62 → chip 00 → controller side</td><td>Returns computed results and responses toward the host.</td></tr><tr><td>BI / BO</td><td>Busy/status path</td><td>Chip 00 → chip 62 in S9 service description</td><td>Supports chip status/flow signaling; purpose and levels vary by implementation.</td></tr><tr><td>RST / NRST</td><td>Reset signaling</td><td>Controller side → chip 00 → chip 62</td><td>Places the chain in a defined reset/startup state when properly asserted.</td></tr></tbody></table></figure><!-- /wp:table -->

<!-- wp:paragraph --><p>In chip documentation, the suffix <strong>I</strong> generally denotes an input and <strong>O</strong> an output. Thus a chip can accept a command at CI and forward it through CO, or receive a return response from the next device at RI and pass it back through RO. The familiar uppercase labels are convenient, but pin-number assignments, active-low conventions, pad locations and electrical interfaces must always be checked against the actual silicon package and board revision.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>3. The physical ASIC package and the surrounding board</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Signals travel through copper traces, solder joints, capacitors, resistors and, at some voltage boundaries, translation or coupling circuitry. They do not jump wirelessly from one package to the next. The original photograph below shows a real BM1387B package and its PCB environment. The photography documents physical hardware; it is <em>not</em> a synthetic drawing of chip pins or an authorized live-probing map.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":21674,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/antminer-bm1387b-asic-board-source.jpg" alt="Real close-up photograph of Antminer BM1387B ASIC chip and its green PCB with nearby components" class="wp-image-21674" /><figcaption class="wp-element-caption"><em>Antminer BM1387B package and board. Photograph: John McMaster, <a href="https://commons.wikimedia.org/wiki/File:Pcb1_-_Antminer_BM1387B_-_John_McMaster.jpg">Wikimedia Commons</a>, CC BY 4.0.</em></figcaption></figure><!-- /wp:image -->

<!-- wp:paragraph --><p>A chip can have intact power but fail to communicate because an upstream signal is missing. Conversely, a healthy signal path does not prove that every chip has adequate core supply or thermal contact. In repair records, keep <strong>power-domain observations</strong>, <strong>signal-chain observations</strong> and <strong>measured hashing performance</strong> distinct; this prevents a symptom in one subsystem from being prematurely assigned to another.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>4. Clock signal — CLK</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>According to the <a href="https://www.zeusbtc.com/manuals/Antminer-S9-Hash-Board-Repair-Guide.asp">S9 hashboard repair guide</a>, the reference design uses a <strong>25 MHz oscillator at Y1</strong>. The external clock path propagates through the ASIC chain; inter-device connections can include capacitive coupling. A clock is a timing reference, not a direct count of completed SHA-256 hashes. Chip-internal circuits can use other clocking and timing structures, so <strong>25 MHz must not be multiplied by chip count to infer the miner’s TH/s</strong>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>An oscilloscope waveform viewed in a training video should be interpreted in terms of its own measurement reference, frequency, amplitude, duty cycle and probe loading. A handheld DC meter does not display the full switching waveform; an averaged reading is not equivalent to a validated clock signal. To review clock concepts outside mining, see <a href="https://bitcoinversus.tech/2026/10/09/what-is-a-clock-signal-how-computers-keep-billions-of-operations-in-step/">What Is a Clock Signal?</a></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>5. Command and return paths — CO and RI</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>For the reference S9, command traffic is passed <strong>forward</strong> from the host connection toward successive ASICs. Return traffic follows the <strong>opposite direction</strong> toward the host. The repair guide identifies this as TX/CI–CO versus RX/RI–RO. That does not make the chip chain an Ethernet cable, and these labels are not interchangeable with general network-layer transmit/receive ports. The <a href="https://bitcoinversus.tech/2026/10/13/what-an-asic-miner-control-board-does/">control board</a> and firmware manage work distribution, while ASIC-level signaling takes place across the board’s specialized electrical interface.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>When one link is open, shorted, improperly powered or unable to relay data, the controller can lose communication with additional devices that are physically present and potentially healthy. This is why an observed “ASIC count” is an enumeration result rather than a headcount of chips that must be replaced. It is essential to record the indexing convention—0-based or 1-based—before mapping a reported number to a physical package.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>6. Reset and busy/status paths — RST and BO</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>RST</strong> is the reset-related path. On a device using active-low reset conventions, assertion and release correspond to defined logic states; the exact levels and timing depend on the chip and test state. <strong>BO</strong>, commonly described as the B or busy-pulse signal in S9 service literature, is another forward-propagating chain signal. A low DC value at a designated point is not independently proof of failure: it can reflect standby operation, a pulsed signal averaged by the instrument, or a model-specific state.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><a href="https://www.zeusbtc.com/articles/information/166-fix-description-of-antminer-hashboard-test-points">ZEUS MINING’s test-point explanation</a> explicitly lists the S9’s four forward paths as CLK, CO, BO and RST, with RI returning in reverse. Older repair guides publish illustrative operating voltages, but those values should never be treated as universal instructions for newer devices, different control fixtures or unknown PCB revisions.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>7. Video study — locating the fault range using an S9 test fixture</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The following original ZEUS MINING recording focuses on the relationship between test-fixture observations and the region of a suspected ASIC fault. While watching, note when a displayed chip count narrows the search versus when the technician needs additional evidence. A test fixture detects a communication symptom; it does not automatically reveal the root cause.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=UtOblbWtqXQ","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=UtOblbWtqXQ
</div><figcaption class="wp-element-caption"><em>ZEUS MINING, “How to use the test fixture to locate fault chip range (S9),” October 5, 2018. Original specialist repair demonstration; observation only.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph --><p>For example, consider an illustrative board with 63 expected chips and a fixture that enumerates 42. There are 21 chips not confirmed by that scan, but the figure alone does not prove that 21 chips have failed. Possible explanations include a damaged interface near the transition, a broken return line, inadequate domain power, incorrect fixture or firmware compatibility, or multiple simultaneous defects. The first diagnostic task is to validate the model and fixture, then compare observations with the correct documented signal directions.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>8. Tracing a symptom without assuming a diagnosis</h2><!-- /wp:heading -->

<!-- wp:table --><figure class="wp-block-table"><table><thead><tr><th scope="col">Observed condition</th><th scope="col">Plausible systems to investigate</th><th scope="col">What the observation does not establish</th></tr></thead><tbody><tr><td>Controller sees zero chips</td><td>Power delivery, ribbon connector, fixture, reset, clock, controller interface, chain links</td><td>That every ASIC package is destroyed.</td></tr><tr><td>Partial chip count</td><td>Signal relay near the reported boundary, return path, domain power, clock, solder connection</td><td>That the first unreported chip is definitely faulty.</td></tr><tr><td>Fluctuating count</td><td>Temperature, unstable supply, connector integrity, clock quality, intermittent joint</td><td>That a reflow operation is necessarily the correct repair.</td></tr><tr><td>All chips enumerate but hashrate is low</td><td>Work configuration, core supply, thermal limits, share/error behavior, clocks</td><td>That chain continuity alone guarantees hashing performance.</td></tr></tbody></table></figure><!-- /wp:table -->

<!-- wp:paragraph --><p>The <a href="https://blog.zeusmining.co/2022/04/Antminer-S9-hash-board-test-shows-lack-of-asic-chips-or-asic-0.html">S9 missing-ASIC case guide</a> describes using the reported chip number to choose the neighborhood for further testing, while also distinguishing “ASIC=0” cases that could involve cables or controller hardware. This is a process of narrowing hypotheses through evidence—not proof that a single error message uniquely identifies one defective solder joint.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>9. Video study — full S9 board diagnosis</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>ZEUS MINING’s second original repair video demonstrates broader S9 board-level fault diagnosis. Focus on how the technician relates the physical board, test equipment and diagnostic outcome. The procedure shown is professional electronics service and must not be reproduced on an energized unit by an untrained learner.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=5WH7g61d90w","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=5WH7g61d90w
</div><figcaption class="wp-element-caption"><em>ZEUS MINING, “Antminer S9 hash board repair and fault diagnosis video tutorial,” September 10, 2018. A broader board-level demonstration complementing the test-fixture video above.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph --><p>When reviewing both recordings, answer: Which measurements concern chip power and which concern communication? Does a test identify the first missing response, or does it demonstrate the exact failed component? Does the video document the same board revision as the one you are studying? Separating these questions prevents the most common category error in chain troubleshooting.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>10. Model differences and board revisions</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Not every chip chain has 63 devices, the same connector, or the same physical test-point order. In <a href="https://www.zeusbtc.com/articles/information/170-antminer-s17-manual-download">ZEUS MINING’s Antminer S17 guide</a>, the documented BM1397AD board carries <strong>48 ASICs in 12 voltage domains</strong>, and the same broad signal labels are used. Another product may change chip population, timing design, level-shifting approach or board layout. For why identical-looking modules should not be assumed compatible, review <a href="https://bitcoinversus.tech/2026/09/27/bitcoin-mining-hashboard-consolidation-compatibility/">hashboard interchange limitations</a>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The S9’s five familiar signals are a useful educational vocabulary, not a license to use an S9 fixture, cable or test-point reference on an S17, S19, S21, WhatsMiner or Avalon design. Always begin with the exact PCB silkscreen, revision, chip part number and supported manufacturer service procedure.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>11. Safety boundary and unpowered training exercise</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>Electrical warning:</strong> An ASIC miner combines mains-derived power, high-current DC conductors, stored energy, hot heatsinks and domain-dependent measurement references. Bridging two test points with a probe or contacting a conductive heatsink can cause equipment damage or injury. This introductory lesson contains <strong>no authorization for energized probing, power injection, chip rework or oscilloscope ground connection</strong>. Such operations require training, authorization, isolation plans, correctly rated instruments and model-specific procedures.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For a classroom assignment, use the real photographs in this article or a board that a qualified person has isolated, discharged and verified safe. Record only visible markings and the documented signal names. Then complete a paper-only logic exercise:</p><!-- /wp:paragraph -->

<!-- wp:list --><ul><li>Write the documented S9 forward path as controller → chip 00 → chip 62 for CLK, CO, BO and RST.</li><li>Write the response path in the reverse direction as chip 62 → chip 00 → controller for RI/RO.</li><li>Explain why a reported count of 42 of 63 chips leaves 21 unconfirmed devices but does not identify the actual failed component.</li><li>Make a list of observations that require model-specific evidence: PCB revision, cable pinout, test-point positions, logic voltage and expected reset behavior.</li><li>Summarize which details you can determine from physical inspection alone and which require protected test procedures or verified measurements.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2>12. Knowledge check and answer key</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>Which of the five classic S9 signal families returns from the end of the chain toward the control board?</li><li>What is the external oscillator frequency identified in the S9 repair documentation?</li><li>Why is that oscillator frequency not equal to the Bitcoin miner’s total hashing rate?</li><li>If a 63-chip board enumerates only 42 devices, how many are unconfirmed by the test? Does that prove all 21 are defective?</li><li>Name two plausible causes of incomplete ASIC detection other than a failed mining chip.</li><li>What must be verified before applying any test-point reference from a repair video?</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> (1) RI/RO, the response path. (2) 25 MHz for the documented S9 reference. (3) The oscillator synchronizes circuitry; hashing throughput depends on internal chip architecture and operating conditions, not simple multiplication of the external clock. (4) 21 are not confirmed, and no, their failure is not proven. (5) Examples include a cable fault, missing clock, unstable domain power, reset problem or faulty controller interface. (6) Exact model, PCB revision, schematic, proper reference, isolation and trained safe-test conditions.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>13. References and continued study</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Primary technical references are the <a href="https://www.zeusbtc.com/manuals/Antminer-S9-Hash-Board-Repair-Guide.asp">S9 hashboard repair guide</a>, <a href="https://www.zeusbtc.com/articles/information/166-fix-description-of-antminer-hashboard-test-points">five-signal test-point documentation</a>, <a href="https://www.zeusbtc.com/articles/information/171-antminer-s9-and-s9i-manual-download">S9/S9i model overview</a> and <a href="https://support.bitmain.com/hc/en-us/articles/115004448673-S9-series-ANTMINERs-low-hash-rate">BITMAIN’s low-hashrate support material</a>. These sources describe a specific generation and should not be transplanted to an unverified board. The next OSHRE foundation lesson can focus separately on unpowered PCB identifiers and test-point literacy, rather than jumping directly into energized fault repair.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><strong>BitcoinVersus.Tech</strong> — Independent open technical education.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor’s Note:</strong> This lesson teaches conceptual hashboard signal flow and evidence-based fault classification, not energized repair. If it supports your learning, consider a contribution of <strong>5,000 sats</strong>. Scan the original donation QR code below with a compatible Bitcoin wallet, or verify the Bitcoin receiving address <strong>3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</strong> before sending.</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech original Bitcoin donation QR code" class="wp-image-24043" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>Open the QR image on another screen and scan it with a Bitcoin wallet. BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p><!-- /wp:paragraph -->