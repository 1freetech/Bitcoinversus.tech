---
post_id: 26452
series: "Open-Source Networking Technician Certification"
lesson_id: "OSNTC.035"
title: "OSNTC.035: Switch Port Mirroring (SPAN) and Packet Capture"
slug: "osntc-035-switch-port-mirroring-span-packet-capture"
status: "publish"
live_url: "https://bitcoinversus.tech/2026/10/25/osntc-035-switch-port-mirroring-span-packet-capture/"
published_site_time: "2026-10-25T23:10:19"
featured_media_id: 26449
featured_image: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osntc-035-span-port-mirroring-wordless-comic-1200x630-1.jpg"
featured_image_dimensions: "1200x630"
cover_style: "wordless_comic"
categories: [44329, 5812, 2509703]
seo_description: "OSNTC.035 explains switch SPAN port mirroring, Wireshark packet captures, source and destination ports, capture safety and oversubscription limits."
primary_sources:
  - https://www.cisco.com/c/en/us/td/docs/switches/campus-lan-switches-access/Catalyst-1200-and-1300-Switches/cli/C1200-cli/span-and-rspan-commands.html
  - https://wiki.wireshark.org/CaptureSetup/Ethernet
embedded_media:
  youtube:
    - https://www.youtube.com/watch?v=PSGHvFvw_UU
    - https://www.youtube.com/watch?v=QTsbwdHkS7g
  social:
    - https://www.reddit.com/r/networking/comments/1877cdm/
    - https://www.reddit.com/r/networking/comments/1p1h5ae/ondemand_packet_sniffing/
qa: "WordPress published readback confirmed. Rendered WordPress content has two YouTube player iframe elements and two Reddit embed blockquotes with two widget scripts; no bare-link fallbacks. Unique original 1200x630 wordless comic attached; internal/external source links, exact Gutenberg markup, original QR and italic footer saved. Third-party playback, external public-page browser screenshot and desktop/mobile visual inspection were not independently verifiable."
---

<!-- wp:paragraph --><p><strong>OSNTC.035 — Switch Port Mirroring (SPAN) and Packet Capture.</strong> A managed Ethernet switch normally forwards unicast traffic only toward its intended destination. That means a technician's laptop on another switch port cannot automatically see every frame exchanged by a troubled server. <strong>Port mirroring</strong>, often called <strong>SPAN</strong> (Switched Port Analyzer), makes a copy of selected switch traffic for an authorized packet capture. This focused lesson follows <a href="https://bitcoinversus.tech/2026/10/14/osetc-036-ethercat-basics-frame-processing-topology-distributed-clocks-working-counters-troubleshooting/">OSNTC.034 on EtherCAT</a> and builds on <a href="https://bitcoinversus.tech/2026/10/09/osntc-021-troubleshooting-switch-ports-link-status-errors-vlans/">OSNTC.021 on troubleshooting switch ports</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Identify the source port, mirror destination port, and capture computer.</li><li>Explain ingress, egress, and bidirectional mirroring.</li><li>Perform an authorized capture and understand why a SPAN capture can miss packets.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">What Is SPAN?</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Suppose a mining controller or server is plugged into switch <strong>port 5</strong>. The technician wants to inspect its DHCP exchange without disconnecting it. A network administrator configures port 5 as the <strong>SPAN source</strong> and another unused port, such as port 8, as the <strong>destination</strong>. The capture laptop receives copies of selected frames on port 8 while ordinary production traffic follows its original path. Cisco's <a href="https://www.cisco.com/c/en/us/td/docs/switches/campus-lan-switches-access/Catalyst-1200-and-1300-Switches/cli/C1200-cli/span-and-rspan-commands.html">Catalyst 1200 SPAN command guide</a> documents this source/destination behavior; the <a href="https://wiki.wireshark.org/CaptureSetup/Ethernet">Wireshark Ethernet capture guide</a> explains how to analyze mirrored frames.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><strong>Receive (Rx)</strong> means frames entering a selected source interface; <strong>transmit (Tx)</strong> means frames exiting it. Mirroring <strong>both</strong> directions can show the request and reply, but also increases the amount of copied traffic. On many platforms, the destination port is reserved for monitoring rather than ordinary switching. Do not move an active production uplink into a mirror-destination role.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=PSGHvFvw_UU]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Cisco's official video, “How to Configure Switch Port Mirroring on Cisco Devices,” explains the core switch-port mirroring concept. Commands and menus differ by platform; confirm the exact switch model before making changes.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">An Authorized Capture Workflow</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li><strong>Define the question.</strong> Example: Did a server send a DHCP Discover, and did it receive a response? See <a href="https://bitcoinversus.tech/2026/10/10/osntc-025-dhcp-troubleshooting-dora-apipa-relay-agents-ip-helper-address-and-packet-capture/">OSNTC.025 on DHCP troubleshooting</a> for the four-message exchange.</li><li><strong>Get approval.</strong> Confirm the correct switch, interface names, maintenance window, access authorization, capture duration, and data-retention policy.</li><li><strong>Choose the source and destination.</strong> Select only the port or VLAN necessary to answer the question. Connect an appropriately rated capture NIC to the authorized monitor port.</li><li><strong>Review the proposed mirror.</strong> Check whether it copies Rx, Tx, or both; whether VLAN tags are retained; whether the mirror port can receive ordinary traffic; and whether the destination bandwidth is sufficient.</li><li><strong>Verify configuration.</strong> On a supported Cisco Catalyst switch, <code>show monitor session</code> displays the configured source and destination. Do not assume the syntax is identical on MikroTik or other switch families.</li><li><strong>Capture and observe.</strong> Select the capture NIC in Wireshark, start a short, time-stamped capture, and use a display filter relevant to the issue, such as <code>bootp</code> for DHCP/BOOTP traffic. A filter narrows what is displayed; it does not manufacture packets that were not captured.</li><li><strong>Stop and restore.</strong> End the capture, have the authorized operator remove temporary mirroring, confirm the original switch configuration, and securely retain or delete the packet file according to policy.</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p>In a <a href="https://www.reddit.com/r/networking/comments/1877cdm/">networking discussion about SPAN and Wireshark</a>, engineers explain that a monitor port supplies copied traffic while Wireshark or another analyzer records the frames. They also distinguish local SPAN from methods intended to carry mirrored data between network devices.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[embed]https://www.reddit.com/r/networking/comments/1877cdm/[/embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Practitioner discussion: when a SPAN destination is needed and how a capture laptop receives switch-traffic copies. This is supplementary operational context, not a replacement for the manufacturer's manual.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">What SPAN Does Not Guarantee</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A mirrored capture is <strong>not automatically a lossless record</strong>. If two directions or multiple source ports together carry more traffic than the destination link can transmit, mirrored packets may be dropped. The switch can also replicate only the traffic visible at the selected source, and some platforms alter timestamps, omit error frames, or handle VLAN tags differently. A captured TCP retransmission may be meaningful, but a packet absent from an overloaded SPAN capture is not proof it never crossed the production network. Wireshark documents <a href="https://wiki.wireshark.org/CaptureSetup/Ethernet">switch mirroring limitations</a>; use a suitable network TAP when a higher-fidelity physical capture is required.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For a practical demonstration using a real switch and a capture laptop, the following video walks through traffic duplication and analysis. The purpose here is observing packet behavior, not making unsupervised changes to a production network.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=QTsbwdHkS7g]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Star Master Afghan Academy, “SPAN (Port Mirroring) with Wireshark on Real Switch” (August 2026). This hands-on demonstration shows source/destination selection and live traffic collection.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">A Safe Data-Center Example</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A server appears reachable by IP but cannot resolve a hostname. Before altering network or DNS settings, the technician coordinates a mirror of the server-facing port and inspects DNS requests and responses in Wireshark. <a href="https://bitcoinversus.tech/2026/10/10/osntc-026-dns-troubleshooting-resolver-settings-nslookup-dig-nxdomain-servfail-packet-capture/">OSNTC.026 on DNS troubleshooting</a> explains how to interpret NXDOMAIN, SERVFAIL, and resolver behavior. The capture can help locate the failure, but sensitive payloads and other users' traffic may be present; keep filters, access, retention, and sharing tightly scoped.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Engineers comparing local SPAN, RSPAN and ERSPAN in another <a href="https://www.reddit.com/r/networking/comments/1p1h5ae/ondemand_packet_sniffing/">on-demand packet-capture discussion</a> describe why permanent sensors and remote capture systems are sometimes preferable to moving a laptop from rack to rack. Remote designs add configuration and bandwidth considerations; this introductory lesson is limited to local port mirroring.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[embed]https://www.reddit.com/r/networking/comments/1p1h5ae/ondemand_packet_sniffing/[/embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Network engineers discuss on-demand capture stations, local SPAN, RSPAN and ERSPAN. Their examples reinforce the need to select a capture method appropriate to the switch and traffic volume.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Safety, Privacy and Conclusion</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Packet captures can contain credentials, internal addresses, session identifiers and business data. Capture only traffic you are authorized to inspect. Do not enable promiscuous monitoring across a production VLAN without explicit approval. Verify that temporary mirror settings were removed afterward. The fundamental idea is simple: <strong>SPAN copies selected traffic for observation; it does not diagnose the packets for you or guarantee none were lost.</strong></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>What is the difference between a SPAN source and destination?</li><li>What do Rx and Tx mean when mirroring a source port?</li><li>Why might the capture miss packets even though the production link is healthy?</li><li>What should happen to a temporary SPAN session when troubleshooting is finished?</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> 1. The source is monitored; the destination receives copies for the analyzer. 2. Frames entering versus leaving the source interface. 3. Mirror-port oversubscription, hardware limitations or the wrong source selection. 4. The authorized operator removes it and confirms restoration of the original configuration.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" class="wp-image-24043" alt="Original BitcoinVersus.Tech 5,000-sat donation QR screenshot" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p><!-- /wp:paragraph -->
