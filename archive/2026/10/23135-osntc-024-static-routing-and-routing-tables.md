---
title: "OSNTC.024: Static Routing and Routing Tables — Next Hops, Default Routes, Longest-Prefix Match, and Verification"
date: 2026-10-10
published: "2026-10-10T08:38:18"
modified: "2026-10-10T08:38:18"
wordpress_post_id: 23135
wordpress_status: publish
live_url: "https://bitcoinversus.tech/2026/10/10/osntc-024-static-routing-and-routing-tables-next-hops-default-routes-longest-prefix-match-and-verification/"
series: "Open Source Networking"
subject: networking
lesson_number: "024"
featured_media_id: 23131
featured_image_dimensions: "1200x630"
featured_art_style: "realistic photo"
youtube_1: "https://www.youtube.com/watch?v=CGmTvukObOw"
youtube_2: "https://www.youtube.com/watch?v=23a6_qexTvs"
youtube_3: "https://www.youtube.com/watch?v=YCv4-_sMvYE"
social_1: "https://www.reddit.com/r/ccna/comments/1x0plki/question_about_dynamic_routing_selection/"
body_image_source: "https://tutorials.ptnetacad.net/help/default/images/config_routers_3.jpg"
primary_sources: "PowerCert Animated Videos; Professor Messer; Cisco IOS XE documentation; RFC 1812"
archive_format: "final Gutenberg source"
---

<!-- wp:heading -->
<h2 class="wp-block-heading">Elementary Overview</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A router needs a set of instructions for deciding where an IP packet goes next. Those instructions are stored in a <strong>routing table</strong>. A route normally identifies a destination network or prefix and tells the router which next hop or outgoing interface can move traffic closer to that destination.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This lesson follows <a href="https://bitcoinversus.tech/2026/10/09/osntc-023-inter-vlan-routing-router-on-a-stick-layer-3-switches-svis-default-gateways-verification/"><strong>OSNTC.023: Inter-VLAN Routing</strong></a>. Inter-VLAN routing showed why a Layer 3 device is required when traffic crosses IP networks. Static routing now explains how that Layer 3 device learns where <em>remote</em> networks are located when they are not directly attached.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What You Should Learn</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li>What a routing table represents.</li><li>The difference between connected, local, static, and default routes.</li><li>What a next-hop IP address means.</li><li>How <code>ip route</code> creates a static route on Cisco IOS.</li><li>Why return routes are required for two-way communication.</li><li>How longest-prefix matching determines which installed route forwards a packet.</li><li>Why administrative distance and longest-prefix match solve different problems.</li><li>How to verify routes with <code>show ip route</code>, <code>ping</code>, and <code>traceroute</code>.</li><li>How to troubleshoot a static route that appears correct but still does not pass traffic.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Routing Table Is a Set of Forwarding Instructions</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Routers do not normally forward a packet by remembering every individual destination host on the internet. They work primarily with <strong>network prefixes</strong>. RFC 1812 describes the route database—also called the routing table or forwarding table—as the information a router uses to choose an appropriate next hop. When overlapping prefixes match the same destination, IPv4 routers use the most specific matching prefix.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=CGmTvukObOw","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=CGmTvukObOw
</div><figcaption class="wp-element-caption"><em>PowerCert Animated Videos — “Routing Tables | CCNA - Explained.” A visual introduction to directly connected, static, and dynamic routes and how routing tables guide packet forwarding.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>On Cisco IOS, a basic routing table can be displayed with:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>show ip route</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>A simplified table might contain entries such as:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>C 192.168.1.0/24 is directly connected, GigabitEthernet0/0
L 192.168.1.1/32 is directly connected, GigabitEthernet0/0
S 10.20.0.0/16 [1/0] via 192.168.1.2
S* 0.0.0.0/0 [1/0] via 203.0.113.1</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The letters are route-source codes. <strong>C</strong> means connected, <strong>L</strong> means local, and <strong>S</strong> means static. The asterisk beside <strong>S*</strong> marks a candidate default route in common Cisco output.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Connected and Local Routes Appear Automatically</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When a router interface is configured with an address such as <code>192.168.1.1/24</code> and the interface is operational, the router knows two important facts. First, the <code>192.168.1.0/24</code> network is directly attached. Second, <code>192.168.1.1</code> is the router’s own interface address. Cisco IOS commonly represents these as connected and local routes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This connects to <a href="https://bitcoinversus.tech/2026/10/03/osntc-013-router-basics/"><strong>Router Basics</strong></a> and <a href="https://bitcoinversus.tech/2026/09/30/open-source-networking-lesson-2-subnet-mask/"><strong>Subnet Masks</strong></a>. A router can identify directly attached networks because the interface address and prefix length tell it which addresses belong to that local subnet.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Static Route Teaches the Router About a Remote Network</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Suppose Router R1 is attached to LAN <code>10.10.0.0/16</code>. R1 connects to Router R2 across <code>192.168.1.0/24</code>, and R2 is attached to LAN <code>10.20.0.0/16</code>. R1 knows its directly connected networks automatically, but it does not automatically know that <code>10.20.0.0/16</code> exists behind R2.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A static route can provide that instruction:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>R1(config)# ip route 10.20.0.0 255.255.0.0 192.168.1.2</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The command means: <strong>to reach 10.20.0.0/16, forward toward next-hop 192.168.1.2</strong>. Cisco’s current IOS XE routing documentation describes static routes as user-defined paths and identifies <code>ip route</code> as the global configuration command used to create them.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"custom"} -->
<figure class="wp-block-image size-large"><a href="https://tutorials.ptnetacad.net/help/default/config_routers.htm"><img src="https://tutorials.ptnetacad.net/help/default/images/config_routers_3.jpg" alt="Cisco Packet Tracer router configuration screen showing a static route for 192.168.1.0/24 through next hop 192.168.1.2 and the equivalent ip route command." /></a><figcaption class="wp-element-caption"><em>Cisco Packet Tracer’s router configuration view shows the destination network, mask, next hop, and equivalent <code>ip route</code> command for a static route.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Next Hop Is the Next Router, Not the Final Host</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A next-hop address normally identifies another Layer 3 device that can move the packet farther toward the destination. R1 does not need to know every Ethernet segment inside the remote site if an appropriate route points it toward R2. At each routed hop, the IP packet continues toward the destination while the Layer 2 frame is rebuilt for the next local link.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is why routing is different from switching. A switch forwards a local Ethernet frame using MAC-address information. A router examines the destination IP network and selects a route toward the next Layer 3 hop.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=23a6_qexTvs","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=23a6_qexTvs
</div><figcaption class="wp-element-caption"><em>Professor Messer — “Static Routing - CompTIA Network+ N10-009.” Covers routing tables, manually configured routes, next hops, and the purpose of static routing.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Return Route Is Just as Important</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One of the most common beginner mistakes is configuring only the forward path. If R1 knows how to reach <code>10.20.0.0/16</code> but R2 has no route back to <code>10.10.0.0/16</code>, an ICMP echo request might arrive successfully while the echo reply has no valid return path.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>R2 therefore needs a route such as:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>R2(config)# ip route 10.10.0.0 255.255.0.0 192.168.1.1</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Routing must work in both directions for normal request-and-response traffic. A correct forward route does not automatically create a return route on another router.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Default Routes Handle “Everything Else”</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A <strong>default route</strong> matches destinations for which no more-specific route exists. In IPv4 it is written as <code>0.0.0.0/0</code>. A branch router might use a default route toward an upstream firewall or ISP instead of maintaining explicit routes to every public internet network.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>R1(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This route does not override more-specific routes. It is the least-specific possible IPv4 prefix, so it is used only when no longer matching prefix wins. Cisco documentation describes static routes as useful for defining a gateway of last resort.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Longest-Prefix Match Comes First During Forwarding</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Consider a packet addressed to <code>10.20.30.40</code> and a routing table containing:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>10.0.0.0/8       via 192.0.2.1
10.20.0.0/16     via 192.0.2.2
10.20.30.0/24    via 192.0.2.3
0.0.0.0/0        via 192.0.2.254</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>All four prefixes mathematically match the destination, but <code>10.20.30.0/24</code> is the most specific. RFC 1812 requires routers to use the most specific matching route—the <strong>longest matching network prefix</strong>—for forwarding. Cisco’s current administrative-distance documentation makes the same distinction: longest-prefix match is applied during packet forwarding after candidate routes have already been installed.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/ccna/comments/1x0plki/question_about_dynamic_routing_selection/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/ccna/comments/1x0plki/question_about_dynamic_routing_selection/
</div><figcaption class="wp-element-caption"><em>A current CCNA discussion illustrates a frequent routing-table question: a longer matching prefix is used for forwarding even when another route source has a lower administrative distance.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Administrative Distance Is Not the Same as Longest-Prefix Match</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Administrative distance</strong> helps a router decide which route source to trust when multiple route sources offer the same destination prefix. <strong>Longest-prefix match</strong> is used later when forwarding a packet among installed routes that overlap. Mixing these two decisions is a common certification-exam mistake.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, a router can have a default route <code>0.0.0.0/0</code> with a low administrative distance and an OSPF route for <code>10.20.30.0/24</code> with a higher administrative distance. Traffic to <code>10.20.30.40</code> still follows the <code>/24</code> because it is the longer matching prefix. Administrative distance does not make a default route override a more-specific installed route.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Three Common Static-Route Forms</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>On Cisco IOS, a route can identify a next-hop address, an outgoing interface, or both. The most intuitive beginner form usually specifies the next hop:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>ip route 10.20.0.0 255.255.0.0 192.168.1.2</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>An interface-only form can look like:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>ip route 10.20.0.0 255.255.0.0 GigabitEthernet0/1</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>A fully specified route can include both:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>ip route 10.20.0.0 255.255.0.0 GigabitEthernet0/1 192.168.1.2</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The best form depends on the link type and platform behavior. Cisco documentation allows the static route to point to a next-hop IP address, an outgoing interface, or both. For beginner Ethernet labs, using the reachable next-hop IP makes the intended Layer 3 path easy to read.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=YCv4-_sMvYE","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=YCv4-_sMvYE
</div><figcaption class="wp-element-caption"><em>Jeremy’s IT Lab — Static Routing. A detailed CCNA walkthrough of connected and local routes, next-hop static routes, exit-interface forms, default routes, and verification.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Verification: Never Stop at “The Command Was Accepted”</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A configuration line appearing in the running configuration is not proof that end-to-end routing works. Verify the routing table first:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>show ip route
show ip route static
show ip route 10.20.0.0</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Then test reachability with <a href="https://bitcoinversus.tech/2026/10/02/osntc-010-icmp-ping-basics/"><strong>ping</strong></a>:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>ping 10.20.1.10</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Use traceroute when the destination is remote and the path matters:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>traceroute 10.20.1.10</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Also check interface state and addressing:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>show ip interface brief
show running-config | include ^ip route</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Practical Troubleshooting Order</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>Verify the host IP address, subnet mask, and default gateway.</li><li>Verify the router interfaces are up/up and use the expected IP addresses.</li><li>Confirm the destination prefix and subnet mask in the static route.</li><li>Confirm the next-hop address is reachable through a connected network.</li><li>Check that the route actually appears in <code>show ip route</code>.</li><li>Check the remote router for a valid return route.</li><li>Ping hop by hop instead of testing only the final destination.</li><li>Use traceroute to identify where forwarding stops.</li><li>Check ACL, firewall, NAT, or policy rules only after the basic Layer 3 path is understood.</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>A frequent error is entering the wrong destination mask. Another is pointing the route at a next-hop address that the local router cannot itself reach. A third is configuring only one direction. Static routing is simple because nothing is hidden—but that also means the administrator must explicitly build the necessary path.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Hands-On Exercise</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Build this simple topology in Packet Tracer, GNS3, EVE-NG, a virtual lab, or physical routers:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>PC-A --- R1 -------- R2 --- PC-B
       LAN-A       LAN-B

LAN-A: 10.10.0.0/16
R1-R2: 192.168.1.0/24
LAN-B: 10.20.0.0/16</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Configure R1 as <code>192.168.1.1</code> on the transit network and R2 as <code>192.168.1.2</code>. Add one static route on each router so LAN-A and LAN-B can communicate.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Expected routing commands:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>R1(config)# ip route 10.20.0.0 255.255.0.0 192.168.1.2
R2(config)# ip route 10.10.0.0 255.255.0.0 192.168.1.1</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>After the routes are installed, verify with <code>show ip route</code>, then ping from a host in LAN-A to a host in LAN-B. Finally run traceroute and identify the router hops.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Knowledge Check</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>What information does a routing table provide?</li><li>What does the next-hop IP address represent?</li><li>What Cisco IOS command creates a basic IPv4 static route?</li><li>Why does a network often need a return route?</li><li>What IPv4 prefix represents the default route?</li><li>If <code>10.0.0.0/8</code>, <code>10.20.0.0/16</code>, and <code>10.20.30.0/24</code> all match <code>10.20.30.40</code>, which one forwards the packet?</li><li>Does a lower administrative distance on a default route make it override a longer matching prefix?</li><li>Which command displays the IPv4 routing table on Cisco IOS?</li><li>What two basic tools can test reachability and reveal the path through routers?</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Answers</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>Destination prefixes and the forwarding information used to reach them, such as next hop or outgoing interface.</li><li>The next Layer 3 device that should receive the packet on its way toward the destination.</li><li><code>ip route</code> in global configuration mode.</li><li>Because replies need a valid route back toward the original source network.</li><li><code>0.0.0.0/0</code>.</li><li><code>10.20.30.0/24</code>, because it is the longest and most-specific matching prefix.</li><li>No. Administrative distance influences route-source selection for the same destination prefix; forwarding among installed overlapping routes uses longest-prefix match.</li><li><code>show ip route</code>.</li><li><code>ping</code> and <code>traceroute</code>.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key Sources</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><a href="https://www.youtube.com/watch?v=CGmTvukObOw">PowerCert Animated Videos — Routing Tables | CCNA - Explained</a></li><li><a href="https://www.youtube.com/watch?v=23a6_qexTvs">Professor Messer — Static Routing, CompTIA Network+ N10-009</a></li><li><a href="https://www.cisco.com/c/en/us/td/docs/routers/ios/config/17-x/ip-routing/b-ip-routing/m_iri-ip-prot-indep-0.html">Cisco IOS XE 17.x — IP Routing Protocol-Independent Features</a></li><li><a href="https://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/15986-admin-distance.html">Cisco — Administrative Distance and Longest-Prefix Match</a></li><li><a href="https://www.rfc-editor.org/rfc/rfc1812">RFC 1812 — Requirements for IPv4 Routers</a></li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor’s Note:</em> Vendor command syntax varies. The Cisco IOS examples in this lesson teach general routing concepts through one widely used CLI.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support independent BitcoinVersus.Tech technical education with Bitcoin: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech is not a financial advisor. This lesson is for informational and educational purposes.</p>
<!-- /wp:paragraph -->