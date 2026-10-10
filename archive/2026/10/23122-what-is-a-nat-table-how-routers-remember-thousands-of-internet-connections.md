---
title: "What Is a NAT Table? How Routers Remember Thousands of Internet Connections"
date: 2026-10-10
published: "2026-10-10T08:31:39"
modified: "2026-10-10T08:31:39"
wordpress_post_id: 23122
wordpress_status: publish
live_url: "https://bitcoinversus.tech/2026/10/10/what-is-a-nat-table-how-routers-remember-thousands-of-internet-connections/"
category: "evergreen"
featured_media_id: 23121
featured_image_dimensions: "1200x630"
featured_art_style: "realistic color-pencil"
youtube_1: "https://www.youtube.com/watch?v=057e8J-48nY"
youtube_2: "https://www.youtube.com/watch?v=Aoy0GngpC0g"
social_embed: "https://www.reddit.com/r/networking/comments/15r2knt/help_me_understand_portforwarding_pat/"
body_image_source: "https://commons.wikimedia.org/wiki/File:NAT_Concept-en.svg"
archive_format: "final Gutenberg source"
---

<!-- wp:paragraph -->
<p>Most home and small-office networks have several devices using private IPv4 addresses such as <code>192.168.1.10</code>, <code>192.168.1.11</code>, and <code>192.168.1.12</code>, yet the entire network may reach the internet through a single public IPv4 address. The router keeps those conversations separate with <strong>Network Address Translation</strong> and, more commonly for many-to-one sharing, <strong>Network Address and Port Translation</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The important hidden mechanism is a <strong>NAT translation table</strong>. It records which internal address and transport-layer port correspond to which translated public address and port. When reply traffic arrives, the router consults that state and sends each packet back to the correct device instead of guessing.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">One Public IP, Many Private Connections</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Imagine a laptop at <code>192.168.1.10</code> opens an HTTPS connection from source port <code>51514</code>. A phone at <code>192.168.1.11</code> opens another connection from port <code>49822</code>. Both devices are behind a router whose public address is <code>203.0.113.5</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The router can translate those connections into different public-side ports, for example:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>192.168.1.10:51514  →  203.0.113.5:62001
192.168.1.11:49822  →  203.0.113.5:62002
192.168.1.12:60233  →  203.0.113.5:62003</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>That many-to-one technique is commonly called <strong>PAT</strong>, <strong>NAPT</strong>, or NAT overload. <a href="https://www.rfc-editor.org/rfc/rfc3022.html">RFC 3022</a> describes NAPT as translating both the network address and the TCP or UDP transport identifier so many private addresses can share a globally unique address.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=057e8J-48nY","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=057e8J-48nY
</div><figcaption class="wp-element-caption"><em>Rahul Wagh walks through NAT, PAT, private-to-public translation, and the address-translation table used to distinguish simultaneous connections.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Why the Router Needs a Table</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When an outbound packet crosses the router, the router changes selected address or port fields and records enough state to reverse that translation later. If a web server sends a reply to <code>203.0.113.5:62001</code>, the router can map that traffic back to <code>192.168.1.10:51514</code>. A reply to public port <code>62002</code> can be returned to the phone instead.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The exact implementation varies. Some systems speak of a NAT table, some expose a connection table, and Linux commonly ties translation behavior to <strong>connection tracking</strong>. The core idea is the same: translation is stateful enough for the device performing NAT to associate return traffic with an existing mapping.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"custom"} -->
<figure class="wp-block-image size-large"><a href="https://commons.wikimedia.org/wiki/File:NAT_Concept-en.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/NAT_Concept-en.svg/1280px-NAT_Concept-en.svg.png" alt="Network Address Translation diagram showing a private network, NAT router and internet with source and destination IP address translation." /></a><figcaption class="wp-element-caption"><em>NAT rewrites packet addressing as traffic crosses the boundary between private and public address realms. Image: Michel Bakni/Wikimedia Commons, CC BY-SA 4.0.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Private IPv4 Addresses Are Reusable</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Private IPv4 ranges such as <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, and <code>192.168.0.0/16</code> are reserved for private internets by <a href="https://www.rfc-editor.org/rfc/rfc1918.html">RFC 1918</a>. They are not globally unique, so two unrelated homes can both have a device named <code>192.168.1.10</code> without conflict.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The public internet cannot route those private addresses directly. The border router therefore substitutes its public-side address before sending traffic outward. This connects directly to <a href="https://bitcoinversus.tech/2026/10/03/osntc-013-router-basics/">router fundamentals</a>: the router is not merely forwarding packets between interfaces; when NAT is enabled, it may also rewrite packet headers while maintaining translation state.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Ports Make Many-to-One Sharing Practical</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An IPv4 address alone would not be enough to distinguish thousands of simultaneous flows sharing one public address. TCP and UDP ports provide another identifier. The combination of protocol, addresses, ports, destination and connection state gives a NAT/PAT implementation enough information to keep flows separate.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is why understanding <a href="https://bitcoinversus.tech/2026/10/04/osntc-014-tcp-udp-transport-basics/">TCP and UDP ports</a> matters. A browser may create many short-lived connections. Phones, consoles, streaming devices, smart TVs and servers can all communicate at once. The router can assign different translated source ports even though the traffic shares the same public IPv4 address.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It is also why the common statement that a NAT device can support “only 65,535 connections” is too simplistic. Port numbers are finite, but real implementations can reuse ports across different destination tuples, protocols and public addresses, and they reclaim entries as sessions expire. Practical limits depend on the router’s software, memory, timeout policy and available public address space.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=Aoy0GngpC0g","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=Aoy0GngpC0g
</div><figcaption class="wp-element-caption"><em>Tech Savvy Productions explains NAT and PAT, including how router software tables keep internal and external traffic mappings organized.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Dynamic Entries Eventually Expire</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A translation created for ordinary outbound traffic does not normally remain forever. Routers age out idle state according to protocol-specific timers and implementation policy. TCP state can often be tracked more precisely because TCP has connection establishment and teardown. UDP has no equivalent connection handshake, so NAT devices usually rely more heavily on inactivity timers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the translation disappears before delayed return traffic arrives, the router may no longer know which private host should receive that packet. This is one reason long-idle applications, VPNs and real-time services sometimes use keepalives or NAT-traversal techniques.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Port Forwarding Is the Reverse Direction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Ordinary home NAT usually creates mappings because an internal device starts an outbound session. <strong>Port forwarding</strong> creates a deliberate inbound mapping. A rule might say that traffic arriving at the router’s public TCP port <code>8333</code> should be translated and sent to a particular internal machine.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That concept appears in Bitcoin networking as well. <a href="https://bitcoinversus.tech/2026/10/08/bitcoin-it-what-is-port-8333-peer-to-peer-nodes-dns-seeds-port-forwarding/">Bitcoin port 8333</a> is used for peer-to-peer node traffic, and a node behind NAT may require an inbound forwarding rule if unsolicited inbound peers need to reach it through an IPv4 NAT boundary.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/networking/comments/15r2knt/help_me_understand_portforwarding_pat/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/networking/comments/15r2knt/help_me_understand_portforwarding_pat/
</div><figcaption class="wp-element-caption"><em>A networking discussion works through a common confusion: outbound PAT mappings and deliberately configured inbound port-forwarding rules solve different problems.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">NAT Is Not the Same Thing as a Firewall</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>NAT changes addresses and, with PAT, ports. A firewall applies a security policy that permits or denies traffic. Consumer routers commonly perform both jobs in the same device, which makes them easy to confuse.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An unsolicited inbound packet may fail because there is no matching translation, because a firewall policy rejects it, or both. Treating NAT itself as a complete security control hides the distinction between address translation and traffic filtering.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">How to Inspect NAT State</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Home routers often expose only a simplified connection-status page, while enterprise firewalls and routers usually provide richer session or translation tables. On Linux systems that perform NAT, the connection-tracking subsystem can expose live state with tools such as <code>conntrack</code>:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo conntrack -L</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Rules and live state are different. Commands such as <code>nft list ruleset</code> show configured nftables policy, while connection-tracking output shows active flows known to the kernel. The exact troubleshooting command depends on the operating system and network platform.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This also connects to the role of a <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-nic-network-interface-card-servers-asic-miners/">network interface card</a>: the endpoint generates packets with its own local addresses and ports, while the NAT-capable router modifies selected fields as those packets cross the network boundary.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">The Simple Mental Model</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A NAT/PAT table can be thought of as the router’s temporary return-address ledger. Internal devices start conversations using private IP addresses and ports. The router translates those identifiers, remembers the mapping, and reverses the translation when matching replies come back.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That small piece of state is one of the reasons an entire house, office or lab can share a single public IPv4 address while dozens or hundreds of simultaneous connections continue to reach the correct device.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor’s Note:</em> NAT behavior varies by implementation. Translation tables, firewall state tables and connection-tracking tables can overlap in function without being identical concepts.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support independent BitcoinVersus.Tech reporting with Bitcoin: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech is not a financial advisor. This article is for informational and educational purposes.</p>
<!-- /wp:paragraph -->