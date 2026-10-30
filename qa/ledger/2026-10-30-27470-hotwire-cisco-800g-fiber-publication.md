# BitcoinVersus.Tech publication QA — Hotwire Cisco 800G live production fiber field test
Date: October 30, 2026; original company announcement: October 19, 2026.
WordPress post ID: 27470.
Published URL: https://bitcoinversus.tech/2026/10/30/hotwire-cisco-800g-live-south-florida-fiber-test-2026/

## Sources and accuracy
- Original operator's announcement: https://hotwirecommunications.com/in-the-news/hotwire-communications-validates-51-2tbps-cisco-8223-and-800g-zr-coherent-optics-over-live-production-fiber
- Cisco first-party 8223 router launch/product video: https://video.cisco.com/detail/videos/networking/video/6382306244112
- Cisco first-party 800G ZR/ZR+ coherent optics technical specifications, updated July 13 2026: https://www.cisco.com/c/en/us/products/collateral/interfaces-modules/transceiver-modules/qsfp-dd-osfp-800g-zr-zr-plus-coherent-optics.html
- Cisco primary coherent optics explanation and official product photo: https://blogs.cisco.com/sp/unlock-the-power-of-scale-across-with-cisco-converged-silicon-systems-and-optics
- Reporting explicitly distinguishes **the real 800GE two-site production-fiber field test** from the **51.2 Tbps aggregate maximum router capacity**; does NOT claim 51.2 Tbps on one fiber, nor claim Hotwire's actual route exceeded 1000 km (that is Cisco's family capability on suitable amplified optical systems).
- Qualifies that announced test ≠ commercial 800G service availability; the operator did not disclose path distance, BER margins, detailed economics, or network-wide power savings. No fabricated metrics or quotations.
- Live WordPress duplicate checks for Hotwire Communications, Hotwire 800G, Cisco 8223 800G, 800G ZR+ found no same-event article; final duplicate search Hotwire returned empty. GitHub archive scoped search "Hotwire 8223 ZR+" empty. Related KT 800G, subsea coherent pluggables, Cisco/NVIDIA optics are context links, not the same event.
- Original concise 353-word body excluding media captions and immutable footer; headline dates correctly separate publication (Oct 30) and field-test announcement (Oct 19). Three verified contextual internal links.

## Cover and in-story media
- Original richly detailed anime editorial illustration (conceptual South Florida network operations center), cropped to **exactly 1200×630**, WP featured media **27469**. Link: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/hotwire-cisco-800g-south-florida-fiber-editorial-cover-1200x630.jpg.png . Parent generated illustration media 27466 at 1729×910 not used in story.
- Distinct in-story media #1: official Cisco 8223 promotional video still/product image, WP media **27467**, **1280×720**, original image URL https://cf-images.us-east-1.prod.boltdns.net/v1/static/1384193102001/7e91c023-5819-442c-a0bd-dd8d5d31877f/be54a28c-d103-4146-85f7-495da876c475/1280x720/match/image.jpg . Linked to Cisco video portal. Caption clearly says product image, not on-site field-test photograph.
- Distinct in-story media #2: official Cisco QSFP-DD 800G ZR/ZR+ coherent pluggable optical module photo, WP media **27468**, **1024×395**, original https://blogs.cisco.com/gcs/ciscoblogs/1/2026/05/QSFP_DD_800G_ZR_ZR_Plus_DSC08038_High-Angle-Right_600-1024x395.png . Linked to Cisco's official technical blog. Caption distinguishes product photo from Hotwire installation.
- WordPress media.create returned both manufacturer image IDs, file sizes and dimensions. Public `posts.get(context=view)` returned 3 `img` tags: the two distinct manufacturer images and the original Bitcoin donation QR; both source filenames present in rendered HTML.
- No YouTube/X embed block added: videos weren't necessary to meet 2–10 quota, and no unverified player is present. This avoids the prior raw-link/non-rendering defect.
- Featured image ID 27469, 2 distinct images in body (cover and QR excluded), italic captions credit manufacturer source and describe only substantiated imagery. No invented diagrams in article.
- Required **EXACT** fully italicized Editor's Note text present and original QR image ID 24043 immediately after; no added disclaimers/promotional X at footer. WordPress final saved and rendered content checks passed.

## Archive and open QA
- WP posts.create returned `publish`, final post fetch-back confirmed published status and featured 27469.
- Exact WordPress Gutenberg article archived at `archive/2026/10/27470-hotwire-cisco-800g-live-south-florida-fiber-test-2026.gutenberg.html` (commit `20d461c9b45805ce01b7382a281bc5b633bcb0dc`).
- Post-publication fetchback WordPress `context=edit` content versus GitHub main archive **exact byte-for-byte match true**.
- Live desktop and mobile browser screenshot rendering and direct image HTTP fetches were not independently performed. WordPress's public render API confirms both image tags, not end-to-end delivery in every browser.
- Regression rule: verify duplicate searches and source link, confirm photo source from manufacturer, distinguish router backplane throughput from per-link transport, ensure actual 1200x630 cover, check both saved Gutenberg and public rendered HTML, preserve exact footer, archive final content.
