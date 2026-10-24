---
post_id: 26240
title: "OSETC.033: Transformer Fundamentals — Windings, Turns Ratio, and Nameplate Ratings"
status: publish
published: "2026-10-23T23:15:35"
modified: "2026-10-23T23:16:52"
live_url: "https://bitcoinversus.tech/2026/10/23/osetc-033-transformer-fundamentals-windings-turns-ratio-nameplate-ratings/"
slug: "osetc-033-transformer-fundamentals-windings-turns-ratio-nameplate-ratings"
series: "Open-Source Electrical Technician Certification"
lesson_number: 33
categories: [547916683, 2509703]
featured_media_id: 26238
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osetc-033-transformer-fundamentals-1200x630-1.png"
featured_image_size: "1200x630"
featured_image_style: "realistic editorial photography"
featured_image_people_rotation: "technician with a different presentation from preceding Black woman technician cover"
body_illustration_id: 26239
body_illustration_license: "Wikimedia Commons public domain — Michael Lenz"
youtube_embeds: ["https://www.youtube.com/watch?v=jcY4QN7awEc", "https://www.youtube.com/watch?v=Nfja9F8OdPM"]
social_embed: "https://www.reddit.com/r/electricians/comments/1mv1vrs/grounding_in_transformers/"
seo_description: "Learn how electrical transformers work, calculate basic AC turns ratios, interpret kVA nameplates, and recognize essential technician safety practices."
qa:
  wordpress_post_readback: true
  wordpress_published: true
  wordpress_cover_attached: true
  cover_exact_1200x630: true
  wordpress_rendered_youtube_iframes: 2
  wordpress_rendered_reddit_embed: true
  human_browser_playback_verified: false
  mobile_qa_verified: false
---

<!-- wp:paragraph --><p><strong>Open-Source Electrical Technician Certification | OSETC.033 | Electrical Power | Transformer Fundamentals.</strong></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Elementary Overview</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>An electrical transformer transfers alternating-current energy between circuits through a changing magnetic field. It can <strong>increase voltage (step up), decrease voltage (step down), or provide electrical isolation</strong>, depending on its design and connections. Transformers are essential in electrical distribution, industrial facilities, and data centers because equipment rarely operates at the same voltage used by the upstream power system.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This lesson fills a foundational electrical gap. Start with <a href="https://bitcoinversus.tech/2026/09/29/osetc-005-ohms-law-field-calculations/">OSETC.005 on Ohm’s law</a> and <a href="https://bitcoinversus.tech/2026/09/28/osetc-001-real-reactive-and-apparent-power/">OSETC.001 on power and apparent power</a> if voltage, current, and kVA are unfamiliar.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Identify the primary winding, secondary winding, and magnetic core of a two-winding transformer.</li><li>Explain why an alternating magnetic field induces secondary voltage.</li><li>Calculate an <em>ideal</em> turns ratio and interpret what happens to current.</li><li>Read common transformer nameplate information, especially volts, kVA, frequency, and impedance.</li><li>Describe safety boundaries for inspection without attempting energized transformer work.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">How a Transformer Works</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>In a conventional two-winding transformer, AC applied to the <strong>primary winding</strong> creates changing magnetic flux in a shared core. That changing flux induces a voltage in the <strong>secondary winding</strong>. The two coils are not normally connected to each other electrically: energy moves through magnetic coupling. This is why a correctly designed isolating transformer can separate circuits galvanically while still transferring power.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The core is usually made from thin laminated magnetic steel or another suitable magnetic material; lamination helps limit eddy-current losses. Copper or aluminum windings carry current. The insulation system separates windings from each other and the core. Heat, vibration, moisture, and loading all matter to transformer service life.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=jcY4QN7awEc","type":"video","providerNameSlug":"youtube","responsive":true} --><figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">[youtube https://www.youtube.com/watch?v=jcY4QN7awEc]</div><figcaption class="wp-element-caption">The Engineering Mindset explains transformer magnetic coupling and voltage conversion. Verified video source; playback depends on the viewing platform.</figcaption></figure><!-- /wp:embed -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Step-Up and Step-Down Transformers</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <strong>step-down transformer</strong> has fewer secondary turns than primary turns and reduces voltage. A <strong>step-up transformer</strong> has more secondary turns and raises voltage. For the idealized AC relationship, <strong>V<sub>p</sub> / V<sub>s</sub> = N<sub>p</sub> / N<sub>s</sub></strong>, where V represents voltage and N represents winding turns.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Example: a transformer with 400 primary turns and 200 secondary turns has a 2:1 turns ratio. With an ideal 480 V AC input, its secondary voltage is <strong>240 V AC</strong>. It is a voltage conversion, <strong>not</strong> free extra electrical power.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":26239,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osetc-033-transformer-voltage-current-example-public-domain.png" alt="Transformer diagram illustrating voltage and inverse current transformation" class="wp-image-26239" /><figcaption class="wp-element-caption"><em>Idealized voltage and current relationships. Michael Lenz, via <a href="https://commons.wikimedia.org/wiki/File:Example1_Transformer.png">Wikimedia Commons</a>; public domain. Real transformers have losses and impedance.</em></figcaption></figure><!-- /wp:image -->

<!-- wp:paragraph --><p>In the ideal approximation, the current ratio goes in the opposite direction: <strong>I<sub>p</sub> / I<sub>s</sub> = N<sub>s</sub> / N<sub>p</sub></strong>. A step-down transformer can support a larger secondary current at lower voltage for approximately the same apparent power; actual current depends on the connected load, rated capacity, and losses. Do not use turns-ratio math to select field wiring or overcurrent protection.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">kVA and Nameplate Ratings</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Electrical technicians often encounter transformer nameplates marked in <strong>kilovolt-amperes (kVA)</strong>, not just kilowatts (kW). kVA is <em>apparent power</em>, combining the voltage and current capacity without assuming a particular load power factor. A transformer marked 15 kVA is not automatically a 15 kW source under every load condition.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Consider a <strong>hypothetical, single-phase</strong> nameplate: 15 kVA, 480 V primary, 240 V secondary, 60 Hz. For the rated ideal apparent-power calculation, primary full-load current would be 15,000 VA ÷ 480 V = <strong>31.25 A</strong>; secondary full-load current would be 15,000 VA ÷ 240 V = <strong>62.5 A</strong>. These figures illustrate the relationship, not a field-installation specification. Three-phase current calculations use a different formula.</p><!-- /wp:paragraph -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>Primary and secondary voltage:</strong> the winding ratings and allowed connection arrangement.</li><li><strong>kVA:</strong> the transformer’s rated apparent-power capacity under specified conditions.</li><li><strong>Frequency (Hz):</strong> the design operating frequency; a conventional transformer changes voltage, not frequency.</li><li><strong>Impedance (%Z):</strong> a characteristic affecting voltage regulation and available short-circuit current; it is not the same as a winding-resistance reading.</li><li><strong>Cooling, temperature rise, and insulation class:</strong> information about heat removal and material limits.</li><li><strong>Tap information:</strong> manufacturer-provided voltage adjustment options; tap changes are not a casual adjustment and require appropriate qualified procedures.</li></ul><!-- /wp:list -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=Nfja9F8OdPM","type":"video","providerNameSlug":"youtube","responsive":true} --><figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">[youtube https://www.youtube.com/watch?v=Nfja9F8OdPM]</div><figcaption class="wp-element-caption">The Engineering Mindset’s second transformer primer reinforces coils, voltage ratio, and core behavior.</figcaption></figure><!-- /wp:embed -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">What Technicians Look For During an Approved Inspection</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Before any inspection involving exposure to conductors, the technician must follow the applicable site procedures and qualification requirements. <a href="https://bitcoinversus.tech/2026/09/30/osetc-011-lockout-tagout-energy-isolation/">OSETC.011 explains lockout/tagout and energy isolation</a>. A transformer can have <strong>more than one possible source</strong>, and backfeed, stored energy, induced voltage, and adjacent energized equipment create hazards even when one disconnect is open. Do not remove covers, change taps, probe terminals, or open winding connections without authorization and a verified safe work condition.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For a suitably authorized visual inspection, the work order and manufacturer’s instructions may direct attention to identification, warning labels, unusual odors, evidence of overheating, blocked cooling openings, leakage on liquid-filled equipment, corrosion, damaged insulation, abnormal noise, and environmental conditions. Observations are documented and escalated; they do not justify touching exposed parts.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Grounding and bonding require particular care. A transformer secondary may be a separately derived system depending on the installation. The appropriate grounding-electrode, system-bonding, and equipment-bonding arrangements must be determined from the actual configuration and applicable code, not guessed from a transformer’s voltage ratio. Review <a href="https://bitcoinversus.tech/2026/10/01/osetc-012-grounding-bonding-basics/">OSETC.012: Grounding and Bonding</a> for the introductory concepts.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[embed]https://www.reddit.com/r/electricians/comments/1mv1vrs/grounding_in_transformers/[/embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Social discussion: practicing electricians discuss transformer grounding. The discussion is a field-perspective illustration, not a governing code or permission to work energized.</em></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The linked electrician discussion illustrates the types of practical questions that arise around step-up transformers and bonding. It is an authentic field discussion, <strong>not an authoritative wiring diagram or approval to work on energized equipment</strong>. For electrical-work practices, refer to OSHA and the applicable installation standards.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Transformer Testing Is a Separate Procedure</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A basic turns-ratio explanation is not permission to energize a transformer for testing. Commissioning tests, polarity checks, winding resistance, insulation resistance, and dissolved-gas analysis (where applicable) answer different questions and use different qualified procedures. <a href="https://bitcoinversus.tech/2026/10/22/osetc-037-insulation-resistance-testing-megohmmeters-motor-windings/">OSETC.037 covers insulation-resistance testing fundamentals</a>, including the need to protect electronics and safely discharge stored energy.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>Question 1:</strong> What connects two separate transformer windings magnetically? <em>Answer:</em> changing magnetic flux in the common magnetic path.</li><li><strong>Question 2:</strong> If an ideal 480 V primary has twice as many turns as the secondary, what is the secondary voltage? <em>Answer:</em> 240 V.</li><li><strong>Question 3:</strong> Why does the nameplate use kVA? <em>Answer:</em> because transformer capacity is rated in apparent power, rather than assuming a fixed load power factor.</li><li><strong>Question 4:</strong> Does disconnecting the primary alone prove that every transformer terminal is safe to touch? <em>Answer:</em> no; backfeed and other hazards must be considered through verified isolation procedures.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Key Takeaways</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Primary and secondary windings transfer AC energy through changing magnetic flux.</li><li>The turns ratio determines the <em>ideal</em> voltage ratio; current changes inversely for equal apparent power.</li><li>kVA, rated voltage, frequency, impedance, and thermal information all matter on a nameplate.</li><li>Transformer inspection and testing require equipment-specific instructions, verified electrical safety, and qualified personnel.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">References and Further Reading</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><a href="https://www.eia.gov/energyexplained/electricity/batteries-circuits-and-transformers.php">U.S. Energy Information Administration — Batteries, Circuits, and Transformers</a>.</li><li><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.333">OSHA — 29 CFR 1910.333, Electrical Work Practices</a>.</li><li><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.305">OSHA — 29 CFR 1910.305, Transformer Installation Requirements</a>.</li><li><a href="https://commons.wikimedia.org/wiki/File:Example1_Transformer.png">Wikimedia Commons — Transformer Voltage and Current Example (Public Domain)</a>.</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Original BitcoinVersus.Tech Bitcoin donation QR code for 5,000 sats" class="wp-image-24043" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p><!-- /wp:paragraph -->