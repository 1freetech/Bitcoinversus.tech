---
post_id: 24256
title: "Why Ethernet Links Keep Going Up and Down"
slug: why-ethernet-links-keep-going-up-and-down
status: publish
published: 2026-10-13T05:11:40
modified: 2026-10-13T05:11:40
live_url: https://bitcoinversus.tech/2026/10/13/why-ethernet-links-keep-going-up-and-down/
featured_media: 24254
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/ethernet-link-flapping-cover.jpg
qr_media_id: 24135
seo_title: "Why Ethernet Links Keep Going Up and Down"
seo_description: "Why Ethernet links repeatedly flap up and down, including bad cables, optics, switch ports, negotiation problems, drivers and physical-layer faults."
---

<!-- wp:paragraph -->
<p>An Ethernet link that repeatedly changes from <strong>up</strong> to <strong>down</strong> is called a link flap or port flap. The symptom can look like random packet loss, short disconnects, dropped calls, unstable remote sessions, or a device that disappears for a few seconds and then comes back.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The first place to look is usually Layer 1. Cisco's <a href="https://www.cisco.com/c/en/us/support/docs/switches/catalyst-9500-series-switches/218397-troubleshoot-port-flaps-on-catalyst-9000.html">Catalyst port-flap troubleshooting guide</a> lists bad or loose cabling, faulty or unsupported transceivers, bad switch ports, negotiation problems, and endpoint behavior among the common causes. A switch log that shows repeated interface-up and interface-down events is one of the clearest signs that the physical link itself is unstable.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=-3YpDFHGyGc","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=-3YpDFHGyGc
</div><figcaption class="wp-element-caption"><em>Cisco Tech Talk walks through how to identify and troubleshoot link-flapping symptoms on managed switches.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Start With the Physical Path</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Reseat both ends of the cable, then replace the patch cable with a known-good one. If the path crosses a wall jack or patch panel, bypass intermediate connections when practical. For fiber, reseat or replace the optic and patch cord, verify the transceiver is supported, and inspect optical power levels when the hardware exposes digital optical monitoring.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is closely related to the troubleshooting workflow in <a href="https://bitcoinversus.tech/2026/10/13/why-gigabit-ethernet-falls-back-to-100-mbps/">Why Gigabit Ethernet Falls Back to 100 Mbps</a>. A marginal copper pair can sometimes keep a link alive at a lower speed before the fault becomes severe enough to make the link flap entirely.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/Network/comments/1tqkm7b/link_flapping_intermittently/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/Network/comments/1tqkm7b/link_flapping_intermittently/
</div><figcaption class="wp-element-caption"><em>A May 2026 troubleshooting discussion shows how intermittent link flapping can persist even when a cable appears to pass traffic normally for long periods.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Check What the NIC and Switch See</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>On Linux, <a href="https://bitcoinversus.tech/2026/10/13/linux-command-56-ethtool-linux-os/">ethtool</a> can show negotiated speed, duplex, link state, driver information, and hardware counters. On managed switches, check the interface log and counters for frequent state transitions, CRC errors, symbol errors, drops, or transceiver alarms. The earlier <a href="https://bitcoinversus.tech/2026/10/07/osntc-018-ethernet-link-negotiation-speed-duplex-auto-negotiation-link-leds-interface-errors/">Ethernet link-negotiation guide</a> explains how speed, duplex, auto-negotiation, LEDs, and interface errors fit together.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A cable tester can shorten the search dramatically. Fluke Networks' <a href="https://www.flukenetworks.com/enterprise-network/network-testing/linkiq-cable-and-network-tester">LinkIQ documentation</a> describes tests for wire map, opens, shorts, split pairs, distance to fault, cable bandwidth, advertised switch speed, duplex, and port information. Those measurements help distinguish a physical cabling problem from a configuration or endpoint problem.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Do Not Confuse Link Flapping With MAC Flapping</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>They sound similar but describe different failures. <strong>Link flapping</strong> means the physical interface itself is repeatedly losing and regaining carrier. <strong>MAC flapping</strong> means a switch keeps learning the same MAC address on different ports, which can point to loops, topology changes, virtualization behavior, or another Layer 2 problem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The practical troubleshooting order is simple: confirm the up/down events in logs, replace or reseat the physical components, test the cable or optics, inspect counters, then investigate negotiation, drivers, power-saving behavior, LACP, or other protocol-level causes. Changing settings before ruling out the physical path often makes an intermittent fault harder to isolate.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24135,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr.jpeg" alt="Bitcoin donation QR code requesting 5,000 satoshis for BitcoinVersus.Tech research initiatives." class="wp-image-24135" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->