---
post_id: 24690
title: "GigaDevice Adds Eight Chip Families to LVGL"
live_url: "https://bitcoinversus.tech/2026/10/14/gigadevice-adds-eight-chip-families-to-lvgl/"
status: publish
published_at: "2026-10-14T05:34:36"
featured_media_id: 24689
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/gigadevice-lvgl-gd32-cover-1200x630-1.jpg"
source_primary: "https://www.gigadevice.com/about/news-and-event/news/gigadevice-deepens-collaboration-with-lvgl-to-advance-global-open-source-gui-ecosystem-for-gd32"
source_secondary: "https://github.com/lvgl/lv_gigadevice"
---

<!-- wp:paragraph -->
<p><strong>GigaDevice has added eight GD32 microcontroller families to the official LVGL embedded-graphics ecosystem</strong>, giving developers ready-made starting points for screens in industrial controllers, smart-home equipment and other electronics.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The company <a href="https://www.gigadevice.com/about/news-and-event/news/gigadevice-deepens-collaboration-with-lvgl-to-advance-global-open-source-gui-ecosystem-for-gd32">announced the expanded support on October 12, 2026</a>. LVGL is an open-source graphics library that draws buttons, gauges, animations and other interfaces on resource-constrained devices. Unlike a desktop computer, a microcontroller may have only kilobytes of RAM.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=IHrzSM_L59k","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=IHrzSM_L59k
</div><figcaption class="wp-element-caption"><em>Somco Software explains how LVGL works on embedded devices and where it fits against other GUI frameworks.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>The supported boards range from the 48 MHz Arm Cortex-M23 GD32C231 to the 600 MHz Cortex-M7 GD32H759, and include the RISC-V-based GD32VW553. That range matters: an inexpensive display panel and a complex industrial touchscreen do not need the same processor, memory or graphics interface.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is an important compatibility detail. The <a href="https://github.com/lvgl/lv_gigadevice">official LVGL board repository</a> says its example projects still use <strong>LVGL 8.3.11</strong> and have not yet migrated to version 9. Developers should check the exact software version and display interface before building a product around a reference design.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/embedded/comments/1vn3lem/modern_graphical_interface/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/embedded/comments/1vn3lem/modern_graphical_interface/
</div><figcaption class="wp-element-caption"><em>Embedded developers discuss practical LVGL use and the trade-offs involved in building modern touchscreen interfaces.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>The work connects to basic <a href="https://bitcoinversus.tech/2026/10/04/osfec-001-microcontroller-architecture-memory-maps-registers-interrupts/">microcontroller architecture</a>, <a href="https://bitcoinversus.tech/2026/10/11/osftc-008-spi-bus-troubleshooting/">SPI display connections</a> and <a href="https://bitcoinversus.tech/2026/10/13/armv8-m-architecture-explained-how-c-code-becomes-cortex-m-machine-instructions/">Arm Cortex-M programming</a>. GigaDevice also plans closer integration between graphical design tools and its development environment, but those workflow improvements remain future work.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong><br />We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Original 5,000-sat Bitcoin donation QR code" class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->