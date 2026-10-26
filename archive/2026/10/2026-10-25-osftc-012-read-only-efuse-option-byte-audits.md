---
post_id: 26411
title: "OSFTC.012: Read-Only eFuse and Option-Byte Audits"
slug: "osftc-012-read-only-efuse-option-byte-audits"
status: "publish"
published_site_time: "2026-10-25T20:21:56"
live_url: "https://bitcoinversus.tech/2026/10/25/osftc-012-read-only-efuse-option-byte-audits/"
featured_media_id: 26410
featured_image: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osftc-012-efuse-option-bytes-diptych-1200x630-1.jpg"
featured_dimensions: "1200x630"
cover_style: "split_screen_editorial_diptych"
categories: [44329, 5812, 2509703]
seo_description: "Firmware technician lesson OSFTC.012 explains safe read-only ESP32 eFuse and STM32 option-byte checks, audit records, and why protected settings must not be changed."
primary_sources:
  - https://docs.espressif.com/projects/esptool/en/latest/esp32/espefuse/summary-cmd.html
  - https://www.st.com/content/st_com/en/stm32cubeprogrammer.html
media:
  youtube:
    - https://www.youtube.com/watch?v=q0vbKRoLETs
    - https://www.youtube.com/watch?v=-5aeb22V7dM
  social:
    - https://www.reddit.com/r/microcontrollers/comments/1u4h7pu/dont_forget_about_the_option_bytes/
    - https://www.reddit.com/r/esp32/comments/1cupuya/
qa_notes: "WordPress API readback confirms publish status, featured media 1200x630, Gutenberg markup with 2 YouTube/2 Reddit embeds and paragraph separation, 4 internal and 6 external hyperlinks, SEO description and original QR. Public website could not be accessed by web reader, and actual YouTube playback, Reddit live rendering, external-link HTTP status and mobile layout were not independently checked. Video identity sourced from YouTube search descriptions, not live playback."
---

<!-- wp:paragraph --><p><strong>OSFTC.012 — Read-Only eFuse and Option-Byte Audits.</strong> A controller that will not accept a firmware update may not have a damaged flash chip or a bad firmware file. Its hardware configuration may intentionally restrict downloads, debugging or memory access. This technician lesson teaches <strong>how to read and document those settings without changing them</strong>, following <a href="https://bitcoinversus.tech/2026/10/14/osftc-011-firmware-update-security/">OSFTC.011 on signed-update security</a> and <a href="https://bitcoinversus.tech/2026/10/08/osftc-006-hardware-firmware-compatibility-board-revisions-device-ids-bootloaders-peripherals-field-validation/">OSFTC.006 on hardware and firmware compatibility</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Explain why microcontrollers store boot and security configuration outside ordinary application firmware.</li><li>Collect a read-only eFuse or option-byte snapshot using vendor tools.</li><li>Separate genuine protection settings from inaccessible or misread configuration fields.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Why Hardware Settings Matter</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Espressif ESP32 devices use <strong>one-time-programmable eFuses</strong> for identity, calibration, security and boot-related choices. Once burned, a bit cannot simply be cleared. Some fields are also read-protected, so their underlying secrets cannot be displayed. <a href="https://docs.espressif.com/projects/esptool/en/latest/esp32/espefuse/">Espressif's official tool documentation</a> warns that inappropriate writes may permanently disable useful interfaces or leave hardware unbootable.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>STM32 microcontrollers use device-specific <strong>option bytes</strong> for readout protection, boot choices, watchdog behavior and other configuration. ST's <a href="https://www.st.com/content/st_com/en/stm32cubeprogrammer.html">STM32CubeProgrammer reference</a> documents viewing them. The available fields and irreversible protection behaviors differ by STM32 series; always consult that device's reference manual.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=q0vbKRoLETs","type":"video","providerNameSlug":"youtube","responsive":true} --><figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">https://www.youtube.com/watch?v=q0vbKRoLETs</div><figcaption class="wp-element-caption">STMicroelectronics demonstrates STM32CubeProgrammer option-byte inspection in Part 3 of its official tutorial. Viewing is the focus of this lesson; do not follow unrelated write operations on a production device.</figcaption></figure><!-- /wp:embed -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Read-Only Audit Procedure</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li><strong>Authorize.</strong> Record device identity, board revision, asset or ticket number, firmware version and approved maintenance window. Connecting to a chip may reset or interrupt its service.</li><li><strong>Identify the exact chip.</strong> Confirm the part number and vendor documentation before connecting a suitable interface or adapter. Do not guess pinout or voltage.</li><li><strong>Read Espressif eFuses.</strong> With the current supported <code>espefuse</code> utility on an authorized ESP32 service port, use <code>espefuse -p PORT summary</code>. This is a read command, <a href="https://docs.espressif.com/projects/esptool/en/latest/esp32/espefuse/summary-cmd.html">documented by Espressif</a>. Replace PORT with the correct device port.</li><li><strong>Read STM32 option bytes.</strong> In STM32CubeProgrammer, connect with the approved ST-LINK/SWD path, open the Option Bytes view and use the read/display function. The CLI's <code>-ob displ</code> is the display variant; never append a field assignment.</li><li><strong>Review.</strong> Note boot mode, flash readout protection, write protection, debug availability and secure-boot status where exposed. Compare against the approved provisioning record and exact chip's expected configuration.</li><li><strong>Record without exposing secrets.</strong> Save a ticket attachment with tool versions, timestamps and relevant field names. Redact MAC addresses, device identifiers, key-related data and protected values before sharing outside authorized service systems.</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>How to read the output:</strong> Espressif's <a href="https://docs.espressif.com/projects/esptool/en/latest/esp32/espefuse/summary-cmd.html">summary reference</a> defines <code>R/W</code> as readable/writable, <code>R/-</code> as write-protected and <code>-/W</code> as read-protected. A read-protected field can show question marks; an inaccessible value is <strong>not proof that the underlying key is zero</strong>. Do not attempt to defeat protection to obtain a field reading.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=-5aeb22V7dM","type":"video","providerNameSlug":"youtube","responsive":true} --><figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">https://www.youtube.com/watch?v=-5aeb22V7dM</div><figcaption class="wp-element-caption">Stelios Sideris illustrates ESP32 eFuse summaries and virtual-fuse testing. This lesson uses only the inspection concepts, not the video's provisioning or burning steps.</figcaption></figure><!-- /wp:embed -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Field Discussion and Safety</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <a href="https://www.reddit.com/r/microcontrollers/comments/1u4h7pu/dont_forget_about_the_option_bytes/">microcontroller developer's June 2026 discussion</a> highlights an important diagnostic point: watchdog timing behaved differently because of option-byte settings rather than application code alone. This is a field example, not a universal timing rule.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/microcontrollers/comments/1u4h7pu/dont_forget_about_the_option_bytes/","type":"rich","providerNameSlug":"reddit","responsive":true} --><figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">https://www.reddit.com/r/microcontrollers/comments/1u4h7pu/dont_forget_about_the_option_bytes/</div><figcaption class="wp-element-caption">Developer discussion of how STM32 option-byte configuration affected watchdog behavior.</figcaption></figure><!-- /wp:embed -->

<!-- wp:paragraph --><p>Similarly, technicians discussing a <a href="https://www.reddit.com/r/esp32/comments/1cupuya/">secure-boot-related ESP32 fault</a> recommended checking eFuse state before deciding what caused the boot error. The correct response is to preserve evidence and escalate a protection mismatch, not to try to bypass security. For safe existing update and recovery procedures, see <a href="https://bitcoinversus.tech/2026/10/05/osftc-003-firmware-backup-recovery-checksums-golden-images-rollback-validation/">OSFTC.003 on firmware backup and recovery</a> and <a href="https://bitcoinversus.tech/2026/10/06/osftc-004-firmware-flashing-interfaces-usb-dfu-swd-jtag-spi-programmers-bootloader-modes-write-verification/">OSFTC.004 on flashing interfaces</a>.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/esp32/comments/1cupuya/","type":"rich","providerNameSlug":"reddit","responsive":true} --><figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">https://www.reddit.com/r/esp32/comments/1cupuya/</div><figcaption class="wp-element-caption">ESP32 community troubleshooting discussion about a secure-boot error and checking the eFuse summary.</figcaption></figure><!-- /wp:embed -->

<!-- wp:paragraph --><p><strong>Stop at read-only.</strong> Never select Apply, Burn, Erase, Mass Erase, Read Unprotect or security-provisioning commands for a diagnostic audit. On many devices, changing protection is permanent or triggers destructive effects. A device that cannot be read should be reported as inaccessible, not modified simply to force a successful read.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>What does one-time programmable mean for an eFuse bit?</li><li>Which Espressif command shows a non-destructive eFuse summary?</li><li>Does an unreadable, protected key field mean the stored key is zero?</li><li>Should a technician use an unprotect command to finish a read-only audit?</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> 1. Once programmed, the bit cannot simply be cleared. 2. <code>espefuse -p PORT summary</code>. 3. No; read protection hides its value. 4. No; stop and escalate the access limitation. <strong>Conclusion:</strong> a documented configuration snapshot can distinguish intended security restrictions from suspected firmware faults without placing hardware at unnecessary risk.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" class="wp-image-24043" alt="Original Bitcoin donation QR code for 5,000 sats" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p><!-- /wp:paragraph -->
