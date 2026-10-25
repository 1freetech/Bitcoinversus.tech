---
title: "OSPCB.003 Component Footprints and Land Patterns"
date: 2026-10-24
wordpress_id: 26344
status: publish
url: https://bitcoinversus.tech/2026/10/24/ospcb-003-component-footprints-land-patterns/
featured_media: 26341
cover_style: anime_editorial_artwork
next_cover_style: wordless_comic
excerpt: "Learn how PCB footprints connect real components to copper pads, and practice checking package dimensions, pin spacing and pin numbering before ordering a board."
categories: [792709720, 284207, 2509703]
body_media_count: 3
media_law: flexible_images_social_video_combinations_2026_10_24
mobile_qa: unverified
---

<!-- wp:paragraph -->
<p><strong>OSPCB.003 — Open-Source Printed Circuit Board | Foundational Lesson</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Match the Part to the Board</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A <strong>component footprint</strong> describes how a physical part mounts on a <a href="https://bitcoinversus.tech/2026/10/24/ospcb-000-what-is-a-printed-circuit-board/">printed circuit board</a>. Its <strong>land pattern</strong> defines the conductive pads and their arrangement; a CAD footprint also includes assembly information such as the body outline and courtyard. After identifying <a href="https://bitcoinversus.tech/2026/10/24/ospcb-002-pads-vias-through-holes/">pads, vias and through-holes</a>, the next step is choosing a pattern that fits the exact component package. <a href="https://docs.kicad.org/10.0/en/getting_started_in_kicad/getting_started_in_kicad.html">KiCad’s getting-started guide</a> explains how symbols acquire their physical footprints.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key Takeaways</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>A schematic symbol describes electrical function; a footprint describes the physical board attachment.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Match the exact package, lead spacing, pad dimensions and pin numbering to the manufacturer’s documentation.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>A plausible 3D appearance is useful evidence, but dimensions and electrical mapping still need checking.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Check Geometry and Pin Numbers</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Two eight-pin packages can require different footprints. Check body width, lead span and <strong>pitch</strong>—the distance between adjacent pin centers—plus any exposed thermal pad. Through-hole parts also require the correct hole diameter. In KiCad, a pad receives the net of the same-numbered schematic pin, as the <a href="https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html">PCB Editor manual</a> specifies. Confirm pin 1 and whether the datasheet drawing shows a top or bottom view; confusing those views can reverse the apparent pin arrangement.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":26346,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/kicad-10-official-numbered-component-footprint.png" alt="Official KiCad footprint example with fourteen numbered pads, a component outline and a surrounding courtyard." class="wp-image-26346" /><figcaption class="wp-element-caption"><em>Official KiCad footprint example showing numbered copper pads and component outlines. Source: <a href="https://docs.kicad.org/10.0/en/getting_started_in_kicad/getting_started_in_kicad.html">KiCad Documentation Contributors</a>, <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Image unaltered.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Verify Before Ordering</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Compare the selected footprint with the exact manufacturer part number and package drawing, then inspect its pads, polarity marks and component courtyard. A courtyard reserves space around the component for assembly. The <a href="https://klc.kicad.org/footprint/f5/f5.1/">KiCad silkscreen conventions</a> explain visible body and orientation markings. Use the 3D viewer and design-rule checks as supporting checks: neither independently establishes that a library footprint matches the part you will purchase. This physical review complements the <a href="https://bitcoinversus.tech/2026/10/24/kicad-10-schematics-to-pcb-1007-1008-october-2026/">schematic-to-board workflow</a> and the <a href="https://bitcoinversus.tech/2026/10/24/ospcb-001-pcb-layers-copper-stackups/">board’s copper-layer construction</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":26342,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/tsop-land-patterns-liam-mcsherry-cc-by-sa-4.jpg" alt="Photograph showing a soldered TSOP integrated circuit behind an empty matching land pattern with two rows of exposed copper pads." class="wp-image-26342" /><figcaption class="wp-element-caption"><em>Populated and unpopulated TSOP land patterns. Photo: <a href="https://commons.wikimedia.org/wiki/File:TSOP_LandPatterns_Pop%2BUnpop.JPG">Liam McSherry / Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. Image unaltered.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Community Example</h2>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://www.reddit.com/r/KiCad/comments/1gr7f4f/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/KiCad/comments/1gr7f4f/
</div><figcaption class="wp-element-caption"><em>A KiCad community question about pin assignment illustrates why the datasheet, symbol and footprint must agree. Use manufacturer documentation to resolve the actual pinout.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Five-Minute Practice</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Choose one loose, unpowered component and its exact manufacturer datasheet.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Record its package name, pin count, pitch and pin-1 identifier.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Open a candidate footprint and compare its dimensions and pad numbers.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>For a through-hole part, distinguish lead spacing from hole diameter; they are different measurements.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>Record any mismatch before routing copper or ordering boards.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Knowledge Check</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Does matching pin count prove a footprint fits?</strong> No. Package dimensions, spacing and other physical requirements must also match.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><strong>What connects schematic pin 1 to footprint pad 1 in KiCad?</strong> Their matching numbers.</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li><strong>What is the main lesson?</strong> Verify the physical package and the electrical pin mapping together.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong><br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Original donation QR code for 5,000 sats, or 0.00005 BTC" class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->

# Publication QA

- Published: https://bitcoinversus.tech/2026/10/24/ospcb-003-component-footprints-land-patterns/
- WordPress ID: 26344
- Date: October 24, 2026 (America/Los_Angeles).
- Live desktop page inspected after publication; title and original featured cover visible.
- Cover: 26341, anime editorial artwork, source dimensions 1200 × 630. Follows realistic editorial cover media 26337; next style is wordless comic.
- Current media-law update applied: flexible combinations, with three relevant body media items. No fixed YouTube/social ratio.
- Body media: official KiCad numbered footprint image (26346, CC BY 3.0); Liam McSherry TSOP photograph (26342, CC BY-SA 4.0); authentic Reddit post 1gr7f4f rendered with title, author, image, Read more and comments controls.
- Each image displayed successfully after scrolling into view; original 5,000-sat donation QR media 24043 displayed.
- Captions include source and license links; body images imported unaltered.
- Four internal links opened live to the intended pages: OSPCB.000, OSPCB.001, OSPCB.002 and KiCad schematic-to-PCB follow-up.
- Primary technical sources: KiCad 10 PCB Editor manual, getting-started guide and library silkscreen conventions. Their links are included in the article.
- Duplicate check: no OSPCB.003 publication or draft existed before this task; archive filenames and WordPress search reviewed.
- Friendly educational excerpt and SEO description saved.
- No decorative text panels or cover duplication in body.
- YouTube attempts 4YSZwcUSgJo and ZHH4G_EWhm0 stalled at zero in this browser. Their players were removed before publication. No claim of playable video verification is made. The three-media image/social combination follows the user's latest October 24 law update.
- Mobile-device/viewport QA was not performed; it remains unverified.

## Sources and image rights

- https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html
- https://docs.kicad.org/10.0/en/getting_started_in_kicad/getting_started_in_kicad.html
- https://klc.kicad.org/footprint/f5/f5.1/
- https://commons.wikimedia.org/wiki/File:TSOP_LandPatterns_Pop%2BUnpop.JPG
- https://creativecommons.org/licenses/by-sa/4.0/
- https://creativecommons.org/licenses/by/3.0/
- https://www.reddit.com/r/KiCad/comments/1gr7f4f/
