# OSFOTC.014 — Publication QA ledger

- **Date:** 2026-10-29
- **WordPress post:** 27082
- **Status (fetch-back):** publish
- **Live URL:** https://bitcoinversus.tech/2026/10/29/osfotc-014-live-fiber-identification-signal-detection-optical-tones-non-disruptive-tracing/
- **Public title:** OSFOTC.014: Live-Fiber Identification — Signal Detection, Optical Tones, and Non-Disruptive Tracing
- **Curriculum rotation:** Fiber Technician, following OSDCEC.014 and prior OSFOTC.013.
- **Featured cover:** media 27081, `https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osfotc014-wordless-comic-cover-1200x630-1.png`.
- **Featured dimensions:** confirmed via WordPress media.get as **1200×630 pixels**.
- **Cover style:** Wordless Comic illustration, following Anime Editorial Artwork.
- **Published embed 1:** VIAVI Solutions, *FI-60 Power Meter to Live Fiber Identifier* (YouTube: https://www.youtube.com/watch?v=lneI5q52xBs). Web result confirmed title, uploader and description. WordPress `context=view` returned an iframe with this exact video ID.
- **Published embed 2:** Fiber Instrument Sales, *Viavi Fiber Identifier | Product Highlight* (YouTube: https://www.youtube.com/watch?v=ynaU40VpRkI). Web result confirmed title, uploader and description. WordPress `context=view` returned an iframe with this exact video ID.
- **Embed spacing:** Confirmed paragraph content between media blocks in exact Gutenberg source.
- **Distinct in-story media:** two unique YouTube videos. Cover and QR excluded.
- **Editorial sources:** VIAVI FI-60 official product page, EXFO LFD-200 specifications and product overview, FOA optical glossary; site internal links to existing Fiber Technician and Fiber Engineering lessons.
- **Post media:** Original 5,000-sat BitcoinVersus.Tech QR image was present in published `context=view` HTML.
- **SEO:** WordPress SEO title, summary, and excerpt saved.
- **Duplicate checks:** WordPress search found OSFOTC.013 as most recent preceding Fiber Technician lesson and no OSFOTC.014; GitHub repository code search for OSFOTC.014 returned no matches prior to publication.
- **Archive:** `archive/2026/10/27082-osfotc-014-live-fiber-identification.gutenberg.html`; exact byte-for-byte UTF-8 string match against final WordPress edit-context Gutenberg markup confirmed after publishing.

## Limitations / independently unverified checks

- YouTube video existence, uploader, and topic relevance corroborated by indexed YouTube metadata. WordPress iframe HTML rendering was verified, but **interactive click-to-play and playback permissions were not independently tested in a browser**.
- No real-browser desktop/mobile visual or responsive inspection completed; only Gutenberg markup and WordPress-rendered HTML were checked.
- Image identification is illustrative fictional editorial art, not a documentary photograph of a specific field installation.
- The source and media QA checks do not substitute for a human technical review of a live service procedure.

## Publishing defect prevention

**Fingerprint:** Previous lessons sometimes published with unverified video links or image-only replacements, and featured images not matching the required dimensions.

**Control:** Before publication, (1) resolve two real topic-specific videos against uploader/title/description, (2) embed native `wp:embed` blocks separated by explanatory paragraphs, (3) fetch rendered WordPress HTML to verify both unique iframe video IDs, (4) confirm the uploaded featured image is exactly 1200×630, (5) compare the final GitHub archive with edit-context WordPress markup.

**Result:** Controls (1)–(5) passed for this article, except that video playback remains outside the reach of HTML inspection and must not be described as tested.
