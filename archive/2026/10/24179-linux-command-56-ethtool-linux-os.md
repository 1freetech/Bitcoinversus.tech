---
post_id: 24179
title: "Linux Command #56 – ethtool (Linux OS)"
slug: linux-command-56-ethtool-linux-os
status: publish
published: 2026-10-13T03:29:03
modified: 2026-10-13T03:32:19
live_url: https://bitcoinversus.tech/2026/10/13/linux-command-56-ethtool-linux-os/
featured_media: 24178
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux-ethtool-cover.jpg
qr_media_id: 24135
seo_title: "Linux Command #56 – ethtool (Linux OS)"
seo_description: "Learn the Linux ethtool command for checking Ethernet speed, duplex, auto-negotiation, driver information, NIC statistics and physical link status."
---

<!-- wp:paragraph -->
<p><strong>ethtool</strong> is a Linux command-line utility for inspecting and changing Ethernet interface settings at the driver and NIC level. It is especially useful when a server appears connected but negotiates the wrong speed, reports half-duplex, drops link, or shows hardware-level errors that higher-level tools do not explain.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The safest first use is read-only: run <code>sudo ethtool enp1s0</code> and replace <code>enp1s0</code> with the actual interface name. The output can show supported link modes, advertised modes, negotiated speed, duplex, auto-negotiation state, port type, and whether the physical link is detected. The Linux <a href="https://man7.org/linux/man-pages/man8/ethtool.8.html">ethtool manual</a> documents these controls, while the <a href="https://www.kali.org/tools/ethtool/">Kali Linux package reference</a> provides a current command summary.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=blPDZg3sw10","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=blPDZg3sw10
</div><figcaption class="wp-element-caption"><em>Texas Instruments demonstrates using Linux ethtool to inspect Ethernet link status during hardware bring-up and troubleshooting.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Read the Link Before Changing It</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A healthy wired server link will commonly report a valid speed such as <code>1000Mb/s</code>, <code>10000Mb/s</code>, or higher, <code>Duplex: Full</code>, and <code>Link detected: yes</code>. If a 1 Gb/s server unexpectedly negotiates at 100 Mb/s, investigate the cable, switch port, transceiver, driver, and advertised link modes before forcing a value. This complements the earlier BitcoinVersus.Tech lesson on <a href="https://bitcoinversus.tech/2026/10/07/osntc-018-ethernet-link-negotiation-speed-duplex-auto-negotiation-link-leds-interface-errors/">Ethernet link negotiation</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Useful read-only commands include <code>ethtool INTERFACE</code> for link settings, <code>ethtool -S INTERFACE</code> for driver statistics, <code>ethtool -i INTERFACE</code> for driver and firmware information, and <code>ethtool -k INTERFACE</code> for offload features. Pair those results with <a href="https://bitcoinversus.tech/2026/09/24/command-26-ss-linux-os/">ss</a> when you need socket visibility and with the site’s <a href="https://bitcoinversus.tech/2026/10/11/osdctc-008-server-network-configuration-validation/">server network validation workflow</a> when troubleshooting an entire host.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/joedevon/status/2049142808762835189","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/joedevon/status/2049142808762835189
</div><figcaption class="wp-element-caption"><em>A practical example of ethtool being used to adjust NIC offload behavior on a Raspberry Pi networking setup.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Changing Settings Requires Caution</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>sudo ethtool -s INTERFACE speed 1000 duplex full autoneg on</code> asks the NIC to use specific link settings. Do not use that command casually on a remote production server: a mismatch with the switch can degrade throughput or drop the connection entirely. Modern Ethernet normally works best with compatible auto-negotiation enabled on both ends.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ethtool can also change offload features with <code>-K</code>, ring parameters with <code>-G</code>, pause settings with <code>-A</code>, and other hardware-specific options. These are powerful troubleshooting tools, but changes may be temporary and can interact with NetworkManager, systemd-networkd, distribution configuration, virtualization, or driver defaults after a reboot.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Exercise</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>On a Linux system you control, identify the active wired interface with <code>ip -br link</code>. Run <code>sudo ethtool INTERFACE</code>, then record the negotiated speed, duplex mode, auto-negotiation state, and link-detected value. Next run <code>sudo ethtool -i INTERFACE</code> and identify the driver and firmware version. Do not change any settings during the exercise.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Knowledge Check</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>1.</strong> What does <code>Link detected: yes</code> confirm? <strong>2.</strong> Why should you investigate before forcing speed and duplex? <strong>3.</strong> Which option displays NIC driver statistics?</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Answers</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>1.</strong> The NIC currently detects a physical Ethernet link. <strong>2.</strong> Forced settings can create a mismatch with the switch and cause poor performance or loss of connectivity. <strong>3.</strong> <code>ethtool -S INTERFACE</code>.</p>
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