---
post_id: 24316
title: "What Is a Network Loop?"
live_url: "https://bitcoinversus.tech/2026/10/13/what-is-a-network-loop/"
slug: "what-is-a-network-loop"
featured_media_id: 24312
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/what-is-a-network-loop-cover.jpg"
status: publish
---

<!-- wp:paragraph -->
<p><strong>A network loop happens when Ethernet frames have more than one active Layer 2 path and keep circulating through switches.</strong> One accidental cable can turn a healthy network into a broadcast storm, fill links with duplicate traffic, and make switches learn the same MAC address on different ports.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=YxE1q9jGh2k","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=YxE1q9jGh2k
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Cisco explains how Spanning Tree Protocol prevents Layer 2 loops while preserving redundant links.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How a Loop Starts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The simplest example is two switches connected by two Ethernet cables while both links are forwarding. A broadcast frame can leave Switch A on one cable, enter Switch B, get flooded back across the second cable, then return to Switch A and repeat.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Because normal Ethernet frames do not carry a hop limit like IP packets do, the traffic can keep circulating. Cisco notes that Layer 2 loops can create duplicate messages and unstable MAC-address learning. Juniper similarly warns that Ethernet loops can cause broadcast storms and network outages.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What a Network Loop Looks Like</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li>Switch port LEDs blink almost continuously.</li><li>Broadcast and unknown-unicast traffic rises sharply.</li><li>MAC addresses appear to move between ports.</li><li>Switch CPU or control-plane load may spike.</li><li>Pings become slow, intermittent, or fail completely.</li><li>Other VLANs can feel the impact if the switch itself becomes overloaded.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Some of these symptoms can resemble a bad cable or unstable port. Our guides on <a href="https://bitcoinversus.tech/2026/10/13/why-ethernet-links-keep-going-up-and-down/"><strong>Ethernet links going up and down</strong></a> and <a href="https://bitcoinversus.tech/2026/10/13/why-gigabit-ethernet-falls-back-to-100-mbps/"><strong>Gigabit Ethernet falling back to 100 Mbps</strong></a> cover problems that can look similar at first.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Spanning Tree Stops the Loop</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.cisco.com/c/en/us/tech/lan-switching/spanning-tree-protocol/index.html"><strong>Spanning Tree Protocol</strong></a> lets switches keep redundant physical links without forwarding traffic over every path at the same time. Switches exchange Bridge Protocol Data Units, or BPDUs, elect a root bridge, calculate loop-free paths, and place redundant ports into a non-forwarding state until they are needed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.juniper.net/documentation/us/en/software/junos/stp-l2/topics/topic-map/spanning-tree-overview.html"><strong>Juniper's STP documentation</strong></a> describes the same goal: maintain redundancy while forcing extra Layer 2 paths into standby so broadcast traffic cannot circulate forever.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/HomeNetworking/comments/1wcschf/ethernet_switch_question/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/HomeNetworking/comments/1wcschf/ethernet_switch_question/
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>A recent home-networking discussion shows how even a small unmanaged switch can create a loop when ports are accidentally connected back into the same Layer 2 network.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Troubleshoot One</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>Check for newly connected switches, patch cables, or redundant uplinks.</li><li>Look at switch logs for spanning-tree changes, MAC flapping, or storm-control events.</li><li>Check which ports show unusually high broadcast or unknown-unicast traffic.</li><li>Trace the affected VLAN and disconnect the suspected loop path using approved change procedures.</li><li>Confirm STP, RSTP, BPDU Guard, loop guard, and storm-control settings are appropriate for the network design.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Do not intentionally create a loop on a production network to test it. A real broadcast storm can spread across an entire broadcast domain and overload shared switching hardware. If you want to study loop prevention, use a lab with isolated switches.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For technicians, the important idea is simple: <strong>redundant cables are useful only when the network has a protocol controlling which Layer 2 path is allowed to forward.</strong> If multiple paths forward blindly, the redundancy can become the outage.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Related reading: <a href="https://bitcoinversus.tech/2026/10/08/networking-what-is-lldp-link-layer-discovery-protocol-neighbor-discovery/"><strong>What Is LLDP?</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong><br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech provides technical education and analysis for informational purposes only.</em></p>
<!-- /wp:paragraph -->