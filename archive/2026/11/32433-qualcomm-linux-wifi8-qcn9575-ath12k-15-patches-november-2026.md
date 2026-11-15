---
wordpress_post_id: 32433
status: "publish"
published: "2026-11-14"
title: "Qualcomm Starts Linux Wi-Fi 8 Driver Work, but QCN9575 Cannot Connect Yet"
slug: "qualcomm-linux-wifi8-qcn9575-ath12k-15-patches-november-2026"
live_url: "https://bitcoinversus.tech/2026/11/14/qualcomm-linux-wifi8-qcn9575-ath12k-15-patches-november-2026/"
featured_media_id: 32427
primary_source: "https://lore-kernel.gnuweeb.org/linux-wireless/20261112-wifi8_qcn9575_bringup-v1-0-3f30fbc2bb69@oss.qualcomm.com/"
source_pci: "https://lore-kernel.gnuweeb.org/linux-wireless/20261112-wifi8_qcn9575_bringup-v1-15-3f30fbc2bb69@oss.qualcomm.com/"
youtube: "https://www.youtube.com/watch?v=dOGqzsRxVWs"
media: "Original 1200x630 colored-pencil cover; Qualcomm manufacturer illustration; original driver roadmap; verified Qualcomm YouTube video"
---

<!-- wp:paragraph -->
<p><strong>Qualcomm engineers have submitted a 15-patch Linux driver series for the QCN9575, a new Wi-Fi 8 radio chipset, but the code does not yet make the hardware operational.</strong> Posted to the Linux wireless mailing list on <strong>November 12, 2026</strong>, the proposal lays groundwork inside the open-source <code>ath12k</code> driver for a future 802.11bn device. The developer explicitly left out the PCI device identifier, preventing a physical QCN9575 adapter from matching the driver until additional work arrives.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=dOGqzsRxVWs]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><em>Qualcomm’s verified April 2026 demonstration of Wi-Fi 8 networking hardware at Mobile World Congress. The router and FastConnect 8800 featured in the video are not a demonstration of QCN9575 Linux driver functionality. Credit: Qualcomm / YouTube.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">What the new Linux code actually adds</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>According to <a href="https://lore-kernel.gnuweeb.org/linux-wireless/20261112-wifi8_qcn9575_bringup-v1-0-3f30fbc2bb69@oss.qualcomm.com/">Qualcomm engineer Madhavan Ganesan’s original patch cover letter</a>, QCN9575 supports the 2.4 GHz, 5 GHz and 6 GHz frequency bands across as many as two radios. It belongs to a new hardware family distinct from earlier Wi-Fi 7 targets, including QCN9274 and IPQ5424.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The proposed changes establish a dedicated <code>wifi8/</code> source directory, hardware parameter tables, PCI register mappings, a new firmware-download method and related messaging infrastructure. The QCN9575 needs additional copy-engine channels and firmware communications endpoints, so the driver must account for differences instead of assuming Wi-Fi 7 register layouts apply.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":32428,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full" style="max-width:1040px;margin:1.25rem auto"><img loading="lazy" src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/wifi8-qcn9575-linux-driver-roadmap.png" alt="Four-stage editorial flow diagram showing proposed QCN9575 hardware family support, extended firmware loading and PCI buffer configuration, followed by missing operational radio features." class="wp-image-32428" style="width:100%;height:auto" /><figcaption class="wp-element-caption"><em>Original technical diagram based on the 15-patch Linux wireless submission. Proposed code is not yet an operational device driver. Credit: BitcoinVersus.Tech.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The final <a href="https://lore-kernel.gnuweeb.org/linux-wireless/20261112-wifi8_qcn9575_bringup-v1-15-3f30fbc2bb69@oss.qualcomm.com/">patch 15/15</a> specifies PCI interrupt vectors—three for MHI, five for copy engines and eight for the datapath—and introduces a QCN9575 initialization entry point. Yet the submission says control-plane, data-plane and MAC support still require a follow-up series. Its PCI ID table deliberately excludes QCN9575, so the initial code cannot attach to a real card.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Why a driver proposal is not a working network adapter</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A device driver must recognize a chip, load compatible firmware, initialize the radio, exchange data with the operating system and support the relevant wireless protocols. A source-tree directory or PCI probe function is only one part of that sequence. Network technicians can review <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-what-is-a-device-driver-how-hardware-talks-to-the-operating-system/">how operating-system drivers communicate with hardware</a> and the role of <a href="https://bitcoinversus.tech/2026/10/11/what-is-firmware/">firmware</a> to understand why the missing components matter.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The patch submission also does not announce an accepted Linux kernel merge, retail Linux compatibility, shipping QCN9575 adapter or measured wireless throughput. Its author lists existing Wi-Fi 7 test hardware for regression checks, rather than a verified successful connection using the new Wi-Fi 8 device.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Wi-Fi 8 is still a draft standard</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>IEEE calls the next generation <strong>802.11bn Ultra High Reliability</strong>. Its working group reported that Draft 2.0 passed initial ballot during 2026, with thousands of technical comments still being resolved. Final standard approval is expected in 2028 rather than completed today. The emphasis is more consistent coverage, responsiveness and interference handling—not merely a larger theoretical headline speed.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":32429,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full" style="max-width:1010px;margin:1.25rem auto"><img loading="lazy" src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/qualcomm-dragonwing-wifi8-network-architecture-official.png" alt="Official Qualcomm Dragonwing networking portfolio diagram describing architecture for Wi-Fi 8 infrastructure and on-device network processing." class="wp-image-32429" style="width:100%;height:auto" /><figcaption class="wp-element-caption"><em>Manufacturer illustration of Qualcomm Dragonwing networking architecture, not a QCN9575 Linux block diagram or benchmark of the proposed driver. Credit: Qualcomm.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Qualcomm has separately shown commercial-oriented Wi-Fi 8 networking products, and BitcoinVersus.Tech has covered <a href="https://bitcoinversus.tech/2026/10/12/gfiber-wifi-8-router-ai-home/">gFiber’s planned AI-enabled Wi-Fi 8 gateway</a> and <a href="https://bitcoinversus.tech/2026/10/13/qualcomm-combines-5g-advanced-satellite-and-wi-fi-8-in-new-fwa-platform/">Qualcomm’s combined 5G and Wi-Fi 8 platform</a>. Those announcements concern different hardware products and do not establish working QCN9575 support in mainline Linux.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For IT administrators, buying Wi-Fi 8-branded equipment before finalized interoperability testing carries driver, firmware and compatibility uncertainty. Existing <a href="https://bitcoinversus.tech/2026/10/14/linux-command-57-nmcli-linux-os/">Linux network-management commands</a> cannot compensate for missing device initialization. A project’s patch submission is a meaningful engineering milestone, but production readiness requires accepted code, real-hardware testing and sustained maintenance.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Bottom line:</strong> Qualcomm’s November 12 submission makes Linux Wi-Fi 8 development more concrete. It is <strong>early driver infrastructure, not a functioning QCN9575 adapter</strong>. The next meaningful evidence will be follow-up datapath patches and a verified Linux connection on real hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>Primary sources:</strong> <a href="https://lore-kernel.gnuweeb.org/linux-wireless/20261112-wifi8_qcn9575_bringup-v1-0-3f30fbc2bb69@oss.qualcomm.com/">Qualcomm’s complete 15-patch submission, November 12, 2026</a>; <a href="https://lore-kernel.gnuweeb.org/linux-wireless/20261112-wifi8_qcn9575_bringup-v1-15-3f30fbc2bb69@oss.qualcomm.com/">PCI initialization patch and excluded device ID</a>; <a href="https://lore-kernel.gnuweeb.org/linux-wireless/20261112-wifi8_qcn9575_bringup-v1-11-3f30fbc2bb69@oss.qualcomm.com/">QCN9575 copy-engine and messaging support</a>; <a href="https://grouper.ieee.org/groups/802/11/">IEEE 802.11 working-group status</a>; <a href="https://www.qualcomm.com/wi-fi/wi-fi-8">Qualcomm Wi-Fi 8 technology overview</a>; <a href="https://www.youtube.com/watch?v=dOGqzsRxVWs">verified Qualcomm hardware video</a>. Product capabilities, standardization timelines and pending driver features are distinguished from measured deployments.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>Editor’s Note:</strong> The November 12 Qualcomm Linux submission is proposed source code, not confirmed merged kernel support. The PCI device ID was intentionally left out, preventing QCN9575 hardware from binding until later patches; 802.11bn protocol support and the control/data/MAC path remain incomplete. The original 1200 × 630 colored-pencil featured cover is conceptual rather than a photograph of a real QCN9575 board. The original flow diagram explains pending work; the Qualcomm portfolio image depicts different networking hardware. The YouTube video is an authentic earlier Qualcomm Wi-Fi 8 showcase but does not verify QCN9575 Linux operation. Rendered iframe, playback and mobile-layout results are separately identified in the publishing audit.</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full" style="max-width:260px;margin:1.25rem auto"><img loading="lazy" src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Original BitcoinVersus.Tech optional donation QR code for 5,000 satoshis." class="wp-image-24043" style="width:100%;height:auto" /><figcaption class="wp-element-caption"><em>Original BitcoinVersus.Tech optional 5,000-satoshi donation QR. Verify address and amount before sending.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech is volunteer-run and publishes independent educational technology reporting. An optional 5,000-satoshi donation supports ongoing research. Scan the original QR from a second screen with a compatible Bitcoin wallet; on mobile, use a wallet that supports scanning a saved image. Independently verify the recipient address 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb and the payment amount before sending. Bitcoin transfers are generally irreversible.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>We volunteer daily to ensure information on the BitcoinVersus.Tech platform is Verifiably True. Coverage is educational and informational and does not constitute financial or investment advice.</em></p>
<!-- /wp:paragraph -->