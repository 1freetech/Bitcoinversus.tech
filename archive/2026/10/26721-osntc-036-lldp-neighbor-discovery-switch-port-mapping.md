---
lesson_id: OSNTC.036
post_id: 26721
title: "OSNTC.036: LLDP Neighbor Discovery — Mapping Switch Ports and Network Links"
url: "https://bitcoinversus.tech/2026/10/27/osntc-036-lldp-neighbor-discovery-switch-port-mapping/"
featured_media: 26720
in_story_media_count: 2
style: textbook-wiki
---

<!-- wp:paragraph --><p><strong>Link Layer Discovery Protocol (LLDP)</strong> is a vendor-neutral method that allows directly connected network devices to advertise selected information about themselves. A <a href="https://bitcoinversus.tech/2026/10/03/osntc-012-network-switch-basics/">managed switch</a> can use LLDP to identify a neighboring switch, access point, IP phone or server adapter on a particular physical interface. For technicians, the information helps confirm <a href="https://bitcoinversus.tech/2026/10/09/osntc-021-troubleshooting-switch-ports-link-status-errors-vlans/">switch-port connections</a>, trace patching mistakes and maintain accurate topology records. This is <strong>OSNTC.036</strong>, continuing the Networking Technician curriculum after <a href="https://bitcoinversus.tech/2026/10/25/osntc-035-switch-port-mirroring-span-packet-capture/">OSNTC.035 on switch port mirroring and packet capture</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>What LLDP communicates</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>LLDP operates at the data-link layer and is standardized in IEEE 802.1AB. Devices periodically transmit LLDP data units (LLDPDUs) on eligible interfaces. A receiving device can maintain a local table of discovered neighbors. Typical advertised fields include the chassis identifier, port identifier, time-to-live and optional descriptive information such as a system name, port description or system capabilities. LLDP is not an IP routing protocol, a cable-certification test or a guarantee that the reported name is accurate.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Unlike <a href="https://bitcoinversus.tech/2026/10/05/osntc-016-ipv6-addressing-neighbor-discovery-prefixes-slaac-ndp-routing-transition/">IPv6 Neighbor Discovery</a>, which handles IPv6 address and neighbor functions, LLDP reports device identity and adjacency information on the local link. LLDP frames are not intended to be forwarded across ordinary bridges, so an entry generally describes a directly connected advertising neighbor, not every device reachable through the network.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>A neighbor table and its meaning</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Suppose a technician queries a switch and sees the following illustrative LLDP entry: <code>Local port: Gi1/0/24; Neighbor: CORE-SW2; Remote port: Te1/1/1; TTL: 120 s</code>. This suggests the local interface Gi1/0/24 is connected to a device advertising the name CORE-SW2 and remote port Te1/1/1. The TTL indicates how long the information remains valid if advertisements stop; it is not the cable's latency or a physical distance.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The next previously published photograph shows the kind of managed Ethernet switch hardware and patch cabling a technician may inspect when reconciling LLDP information with a physical rack.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":22793,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osntc-021-network-port-troubleshooting-body.png" alt="Network technician tracing Ethernet switch ports and patch cabling" class="wp-image-22793"/></figure><!-- /wp:image -->

<!-- wp:heading --><h2>How LLDP information is collected</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>On many Cisco IOS-family switches, <code>show lldp neighbors</code> summarizes discovered neighbors and <code>show lldp neighbors detail</code> provides additional advertised fields. Other platforms use different commands or web interfaces; some systems require LLDP to be enabled first. On a Linux host, tools such as <code>lldpcli show neighbors</code> may be available when an LLDP daemon is installed and configured. These are examples, not universal commands for every vendor.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The technician should record the local interface, neighbor identity, advertised remote port, age or TTL, and any management address. Compare those values with the <a href="https://bitcoinversus.tech/2026/10/06/osntc-017-copper-ethernet-cabling-rj45-t568b-cat5e-cat6-cat6a-100m-poe-cable-testing/">cabling records</a> and the approved <a href="https://bitcoinversus.tech/2026/10/09/osntc-022-vlan-trunking-802-1q-tagged-frames-native-vlans-allowed-vlans-verification/">VLAN trunk</a> or access-port design. An LLDP entry can help identify a connection, but a correct neighbor identity does not prove that VLANs, <a href="https://bitcoinversus.tech/2026/10/08/osntc-020-link-aggregation-lacp-etherchannel-port-channels-member-links-load-balancing-failure-recovery/">LACP</a> or routing are configured correctly.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Using LLDP to find a patching error</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Imagine that a switch inventory expects an uplink from access switch A port Gi1/0/48 to core switch B port Te1/1/2. LLDP instead reports core switch C port Te1/1/4. The mismatch suggests a patching or documentation problem, but it is not conclusive evidence of a wrong cable. A technician should verify the switch's actual identity, inspect patch-panel labels and compare the observed <a href="https://bitcoinversus.tech/2026/10/09/osntc-021-troubleshooting-switch-ports-link-status-errors-vlans/">interface status</a> with the intended topology before making a change.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>A safe troubleshooting sequence is to gather read-only neighbor tables from both ends, record interface counters and descriptions, confirm the physical patch path, and follow change control if repatching is required. This prevents an avoidable outage caused by acting on an incomplete topology assumption.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>LLDP and packet capture</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>LLDP advertisements can be examined with a packet analyzer when traffic capture is authorized and supported by the interface. The relevant EtherType is <strong>0x88CC</strong>. A capture filter or display filter can isolate LLDP traffic; in Wireshark, the display filter <code>lldp</code> is commonly used. The preceding <a href="https://bitcoinversus.tech/2026/10/25/osntc-035-switch-port-mirroring-span-packet-capture/">SPAN and packet-capture lesson</a> explains how mirrored traffic can support troubleshooting, although a mirror configuration and hardware behavior may affect which link-local control frames are visible.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The next existing photograph illustrates physical switch links and Ethernet cabling. It provides context for the interfaces on which link-local discovery frames are exchanged.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":21978,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osntc-019-network-switch-cables.jpg" alt="Managed network switches and connected Ethernet patch cables" class="wp-image-21978"/></figure><!-- /wp:image -->

<!-- wp:heading --><h2>Security and operational limitations</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>LLDP advertisements may reveal device names, port identities, software descriptions and network-management details to anyone who can observe the local segment. Organizations should follow their security policies on where LLDP is enabled, what optional information is advertised and which endpoints are trusted. A malicious or misconfigured device can also advertise misleading information, so LLDP is a discovery aid rather than an authentication mechanism.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>LLDP entries may be missing because a device does not support LLDP, it is disabled, the interface is down, the advertisement interval or TTL has elapsed, or an intermediate device changes what is visible. Do not assume that an absent entry proves there is no physical connection. Confirm <a href="https://bitcoinversus.tech/2026/10/07/osntc-018-ethernet-link-negotiation-speed-duplex-auto-negotiation-link-leds-interface-errors/">link negotiation</a>, cabling and interface configuration separately.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Knowledge check</h2><!-- /wp:heading -->

<!-- wp:list --><ul><li>Does an LLDP neighbor entry prove that the physical connection is correctly documented and securely authenticated?</li><li>What does the LLDP time-to-live field control?</li><li>Which EtherType identifies an LLDP Ethernet frame, and what Wireshark display filter commonly isolates it?</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> No; it is advertised discovery information that requires corroboration. TTL determines how long the neighbor entry may be retained without fresh advertisements. The EtherType is 0x88CC and the display filter is <code>lldp</code>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>References and related lessons</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The primary standard is <a href="https://standards.ieee.org/ieee/802.1AB/10147/">IEEE 802.1AB — Station and Media Access Control Connectivity Discovery</a>. For practical configuration, consult the exact switch vendor's LLDP command reference. Related curriculum pages include <a href="https://bitcoinversus.tech/2026/10/03/osntc-012-network-switch-basics/">network switch basics</a>, <a href="https://bitcoinversus.tech/2026/10/09/osntc-021-troubleshooting-switch-ports-link-status-errors-vlans/">switch-port troubleshooting</a>, <a href="https://bitcoinversus.tech/2026/10/09/osntc-022-vlan-trunking-802-1q-tagged-frames-native-vlans-allowed-vlans-verification/">802.1Q trunking</a>, <a href="https://bitcoinversus.tech/2026/10/08/osntc-020-link-aggregation-lacp-etherchannel-port-channels-member-links-load-balancing-failure-recovery/">link aggregation</a> and <a href="https://bitcoinversus.tech/2026/10/25/osntc-035-switch-port-mirroring-span-packet-capture/">packet capture</a>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> Support independent networking education with a contribution of <strong>5,000 sats</strong>. Scan the donation QR code below using a compatible Bitcoin wallet to help fund future lessons.</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech donation QR code" class="wp-image-24043"/></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>Display the QR code on another screen and scan it using your Bitcoin wallet.</em></p><!-- /wp:paragraph -->