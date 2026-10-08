---
post_id: 22040
title: "Cable Pulling Tension Can Ruin a Perfect-Looking Installation"
live_url: "https://bitcoinversus.tech/2026/10/08/cable-pulling-tension-sidewall-pressure-fiber-ethernet-power/"
featured_media_id: 22037
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/cable-pulling-tension-sidewall-pressure-cover-1200x630-1.jpg"
status: publish
---
<!-- wp:paragraph -->
<p>A cable can leave the reel looking perfect, arrive at the rack looking perfect, and still have been damaged somewhere in between.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is the problem <strong>pulling tension</strong> creates. When technicians install <a href="https://bitcoinversus.tech/2025/04/10/fiber-optic-cabling-overview/"><strong>fiber optic cable</strong></a>, <a href="https://bitcoinversus.tech/2026/10/06/osntc-017-copper-ethernet-cabling-rj45-t568b-cat5e-cat6-cat6a-100m-poe-cable-testing/"><strong>Ethernet cable</strong></a>, control cable, or heavy power cable through conduit and trays, the cable is not only bending. It is also being stretched, pressed against bends, dragged across surfaces, twisted, squeezed by grips, and forced through changes in direction.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Our previous story explained <a href="https://bitcoinversus.tech/2026/10/08/why-fiber-ethernet-power-cables-different-bend-radius-rules/"><strong>why fiber, Ethernet, and power cable use different bend-radius rules</strong></a>. Pulling tension is the next part of the same physical-layer problem: <strong>a legal bend radius does not automatically make a cable pull safe.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=K1m8I7VzLF0","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=K1m8I7VzLF0
</div><figcaption class="wp-element-caption"><em>The Fiber Optic Association’s installation lecture covers the mechanical handling rules that keep fiber from being damaged during placement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Pulling Tension Is the Force Along the Cable</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Pulling tension is the longitudinal force used to move a cable through its pathway. If the pull becomes harder because of distance, friction, bends, crowded conduit, poor roller placement, or an obstruction, the installer naturally wants to pull harder. Every cable has a point where “pull harder” becomes “damage the cable.”</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For fiber, the <a href="https://foa.org/tech/ref/install/installcbl.html"><strong>Fiber Optic Association</strong></a> says the cable manufacturer’s maximum pulling-tension rating must not be exceeded and that pulling force should normally be transferred through the cable’s strength members rather than directly into the fibers. FOA also recommends approved pulling grips, swivel pulling eyes, tension control on longer pulls, compatible lubricant where appropriate, and figure-eight handling for intermediate fiber pulls.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction is important. The glass fibers carry the data. Aramid yarn, fiberglass rods, messenger wire, or other strength members are there to carry mechanical load. Pulling the wrong part of the cable can send force into components that were never designed to take it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Ethernet Has a Surprisingly Low Pulling Limit</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For standard four-pair balanced twisted-pair cabling, ANSI/TIA-568 guidance limits installation pulling tension to <strong>110 newtons, or 25 pounds-force</strong>. That is not much force. A technician can exceed it quickly by yanking on a snagged cable bundle.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The reason is geometry. <a href="https://bitcoinversus.tech/2025/04/09/cat5e-vs-cat6-ethernet-cables/"><strong>Cat5e and Cat6</strong></a> depend on tightly controlled conductor twists and spacing. Excessive tension can stretch conductors, deform the jacket, disturb pair geometry, or reduce the electrical margin that protects the link from insertion loss and crosstalk problems. The cable may still negotiate a link and still no longer be a healthy certified channel.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=xeRWUQ1wb4U","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=xeRWUQ1wb4U
</div><figcaption class="wp-element-caption"><em>FOA’s premises-cabling lecture reviews proper UTP installation practices before termination and testing.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>This is why proper <a href="https://bitcoinversus.tech/2026/10/05/osdctc-003-structured-cabling-patch-panels-copper-fiber-t568b-labeling-bend-radius-verification/"><strong>structured cabling</strong></a> treats the pull as part of link performance, not merely the transportation step before <a href="https://bitcoinversus.tech/2025/05/07/rj45-connector-the-backbone-of-ethernet-networking/"><strong>RJ45 termination</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Sidewall Pressure Is What Happens at the Bend</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Heavy power cable introduces another term technicians should know: <strong>sidewall pressure</strong>, sometimes called sidewall bearing pressure. Pulling tension acts along the cable. When that tensioned cable rounds a bend, the cable presses sideways against the conduit, roller, or sheave.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For a single cable or a multiconductor cable under one common jacket, the basic relationship is:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Sidewall pressure = pulling tension ÷ bend radius</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So if the tension coming out of a bend is 900 pounds and the bend radius is 3 feet, the sidewall pressure is 300 pounds per foot. Increase the radius to 6 feet and the same 900-pound pull produces only 150 pounds per foot. This is why a larger sheave can make a difficult pull mechanically safer even if both sheaves satisfy the cable’s static minimum bend radius.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.southwire.com/medias/Power-Cable-Installation-Guide-Southwire.pdf?context=bWFzdGVyfGluc3RhbGxhdGlvbi1tYW51YWxzfDUyNjUxMjd8YXBwbGljYXRpb24vcGRmfGluc3RhbGxhdGlvbi1tYW51YWxzL2hjNS9oY2QvODg4NzY3NjA3NjA2Mi5wZGZ8ZWQ4NzVkYjliNjZmZmQ5MDM5ODkxNzRiOGQ2MzE0NTA0ODk2ZDEwZGI3YzAxYTU4MzE1MmI2NWI1ZWIzOGQyMQ"><strong>Southwire’s power-cable installation guide</strong></a> describes excessive sidewall pressure as one of the most restrictive factors in many cable pulls. Its examples also show why the final bend can be especially demanding: pulling tension accumulates through the route, so a later bend can see more tension than the earlier ones.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/FiberOptics/comments/1was160/hand_pulling_288/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/FiberOptics/comments/1was160/hand_pulling_288/
</div><figcaption class="wp-element-caption"><em>A September 2026 r/FiberOptics thread shows a 288-count cable after a 3,300-foot pull. The poster described the cable as visibly squashed after passing through an assist wheel, prompting immediate questions about whether the manufacturer’s tension limits and strength members had been respected.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Friction Turns Length Into Force</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A straight 30-foot pull and a 1,000-foot pull through multiple bends are completely different mechanical jobs. Every foot of contact adds friction. Every bend changes direction and can multiply tension. A crowded pathway can make neighboring cables another friction surface. Dirt, water, conduit condition, and the jacket material can all change the coefficient of friction.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is why cable lubricant is not just about making the installer’s life easier. On approved cable and conduit combinations, compatible lubricant can reduce the force needed to move the cable and therefore reduce both pulling tension and sidewall pressure. The lubricant still has to be compatible with the jacket material and the project specification.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Pull Direction Can Change the Entire Calculation</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The same pathway can be an easy pull in one direction and a bad pull in the other. If the most severe bend is near the beginning of the route, the cable reaches that bend before much tension has accumulated. Reverse the pull and that same bend may now be near the end, where it sees nearly the full accumulated pulling force.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why large industrial cable pulls are planned rather than improvised. Reel location, pull direction, conduit fill, bend sequence, elevation change, roller spacing, sheave size, lubrication, pulling-eye method, and winch location can all affect the final stress on the cable.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22038,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/cable-pulling-rack-dressing-body.jpg?w=1024" alt="Technician securing blue and yellow network cables with hook-and-loop straps inside a server rack." class="wp-image-22038" /><figcaption class="wp-element-caption"><em>Pulling is only one mechanical stress. Cable dressing, support, bend control, and avoiding crush after the pull matter too.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Fiber Needs the Right Grip, Not Just More Muscle</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Fiber cable can contain aramid yarn, central strength members, fiberglass rods, armor, or messenger elements depending on the design. The correct pulling attachment depends on that construction. A pulling grip that works well on one cable can crush or slip on another.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>FOA guidance emphasizes using the cable’s intended strength members and a swivel pulling eye where appropriate. The swivel matters because a pull rope can twist under load. Without a swivel, that torsion can be transferred into the cable and stress the fibers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Preterminated fiber adds another layer because the <a href="https://bitcoinversus.tech/2026/10/06/osfotc-004-fiber-connector-types-polarity-lc-sc-upc-apc-mpo-mtp-tx-rx-vfl-verification/"><strong>LC, SC, MPO, or MTP connectors</strong></a> themselves must be protected inside a pulling assembly while the mechanical load is transferred into the cable’s strength system rather than the connector bodies.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/FiberOptics/comments/1wj2g21/long_fiber_pull_help/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/FiberOptics/comments/1wj2g21/long_fiber_pull_help/
</div><figcaption class="wp-element-caption"><em>A September 2026 r/FiberOptics discussion about a 1,140-foot preterminated run highlights the same planning issues: pulling eyes, long sections, figure-eight handling, and deciding how to split a difficult route.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>A Dynamometer Is Better Than “Feels About Right”</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>On larger pulls, human judgment is a poor tension meter. Powered capstans and winches can generate far more force than a person realizes, especially when the cable starts to bind. A dynamometer, calibrated tension monitor, controlled puller, or engineered breakaway device gives the crew an actual limit instead of a guess.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>FOA specifically recommends monitoring tension on longer outside-plant pulls and treating a breakaway swivel as a fail-safe rather than the primary measurement tool. If a cable is valuable enough to require <a href="https://bitcoinversus.tech/2026/07/13/fiber-optic-training-otdr-operation-2/"><strong>OTDR testing</strong></a> and careful splicing afterward, it is valuable enough to protect while it is being installed.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Seven Signs the Pull Should Stop</strong></h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item --><li><strong>The required force suddenly rises.</strong> A hard stop often means a snag, jam, bad roller, conduit obstruction, or cable crossing.</li><!-- /wp:list-item --><!-- wp:list-item --><li><strong>The cable starts flattening or changing shape.</strong> Visible deformation is not normal workmanship.</li><!-- /wp:list-item --><!-- wp:list-item --><li><strong>The reel is feeding poorly.</strong> Cable should come off the reel in the intended direction without adding uncontrolled twist.</li><!-- /wp:list-item --><!-- wp:list-item --><li><strong>A roller stops turning.</strong> The cable is now sliding across a surface instead of rolling over it.</li><!-- /wp:list-item --><!-- wp:list-item --><li><strong>The pulling grip slips or walks.</strong> Stop before concentrated pressure damages the jacket or strength members.</li><!-- /wp:list-item --><!-- wp:list-item --><li><strong>The monitored tension approaches the manufacturer limit.</strong> The limit is a ceiling, not a production target.</li><!-- /wp:list-item --><!-- wp:list-item --><li><strong>The crew has to start yanking.</strong> Repeated shock loading is a sign to diagnose the route instead of adding more force.</li><!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Cable Still Needs Protection After the Pull</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Mechanical damage does not end when the pulling rope comes off. Tight cable ties, unsupported vertical runs, undersized service loops, sharp rack edges, crushed bundles, and poor strain relief can continue applying stress for years.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Use hook-and-loop where appropriate, support long vertical runs, preserve the correct <a href="https://bitcoinversus.tech/2026/08/24/cable-bend-radius-explained-data-center-cabling-best-practices/"><strong>bend radius</strong></a>, protect connector exits, and leave service loops large enough to satisfy the cable specification. Good <a href="https://bitcoinversus.tech/2026/09/25/the-art-of-rack-and-stack-servers-ai-systems-and-bitcoin-miners/"><strong>rack-and-stack workmanship</strong></a> is not just visual organization. It is mechanical protection for the physical layer.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Rule Is Simple Even When the Math Is Not</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Before a serious cable pull, know four numbers: <strong>maximum pulling tension, minimum bend radius under tension, maximum allowable sidewall pressure when applicable, and the pathway geometry.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Then build the pull around those limits instead of discovering them after the cable is installed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A network can recover from a bad switch configuration. A damaged cable buried behind walls, under a slab, or inside a crowded conduit is much harder to forgive.</p>
<!-- /wp:paragraph -->