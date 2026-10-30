# OSFEC.013 — Publication QA ledger

Date: 2026-10-29 (WordPress site local date)

## Publication
- Site: BitcoinVersus.Tech.
- Post ID: 27189.
- Title: OSFEC.013: Hardware-in-the-Loop Firmware Testing — Test Rigs, Fault Injection and CI.
- URL: https://bitcoinversus.tech/2026/10/29/osfec-013-hardware-in-the-loop-firmware-testing-test-rigs-fault-injection-ci/
- Post status: `publish`, confirmed by WordPress posts.get.
- Featured cover media ID: 27179; original 1200 x 630 wordless comic JPEG, with accessible alt text. Media dimensions verified via WordPress media.get.
- Categories: 2509703 (existing TechCert category).
- Existing relevant tags applied: firmware (25552), embedded systems (30181), software testing (11153), electronics testing (35022456).
- Metadata: populated SEO title, description, excerpt and contextual social copy.

## Curriculum and duplicate review
- Next scheduled certification track: Firmware Engineering after OSFTC.014.
- Verified prior Firmware Engineer lessons OSFEC.001–OSFEC.012 by WordPress listing and consulted the TechCert authoring standards.
- Immediately preceding subject lesson: OSFEC.012 — Firmware Observability; new content focuses on repeatable physical validation, test harnesses, CI gates and deliberate failure injection.
- WordPress post searches for OSFEC.013 and hardware-in-the-loop returned no earlier matching lesson; GitHub code search also found no OSFEC.013 in the three archive repositories before creation.
- Global next track after Firmware Engineer: History of Money, Technology and Bitcoin.

## Media
- Three distinct relevant native Gutenberg YouTube blocks:
  1. The Zephyr Project, Hardware-in-the-loop Testing with Zephyr RTOS, https://www.youtube.com/watch?v=940O1CUgh4Q
  2. Open Source Summit Europe 2025, Test Strategy for Zephyr, https://www.youtube.com/watch?v=CA-tTs9poy4
  3. Open Source Summit Europe 2025, Testing Zephyr Bluetooth Devices at Scale, https://www.youtube.com/watch?v=7CosvBpLebE
- Source identities corroborated through Zephyr Project's YouTube result and documented Open Source Summit presentations. WordPress posts.get(context=view) produced three separate rendered `youtube.com/embed/` iframe elements containing those identifiers.
- Footer includes native X promotional embed (rendered Twitter blockquote): https://twitter.com/1BitcoinVersus/status/1937006164555993338.
- Original BitcoinVersus.Tech donation QR uses WordPress media 24043; Editor's Note and mandatory financial disclaimer retained.

## Source, structure and archive checks
- 12 contextual internal links to prior curriculum content.
- Elementary Overview and Elementary Conclusion sections, unnumbered textbook-style sections, a worked engineering acceptance example, a knowledge check and answers.
- Official sources linked: Zephyr Twister, pytest harness, Ztest and test status documentation.
- Exact final WordPress Gutenberg content is 25,487 characters.
- Archive path on all three repos: `archive/2026/10/27189-osfec-013-hardware-in-the-loop-firmware-testing.gutenberg.html`
- Read-back comparison: identical to live WordPress edit-source in `1freetech/Bitcoinversus.tech`, `1freetech/techcert`, and `1freetech/opencert.tech`.
- All three GitHub blobs have SHA `3a96824d911a4d9a15f4e576eef257e6d109f063`.

## Verification limits and regression checks
- External web page opening of the live WordPress URL failed in this environment. WordPress posts.get(context=view) returned rendered public HTML, establishing that embeds resolved to iframe elements and that the QR/Twitter HTML was present.
- Actual YouTube playback and X's client-side execution were not tested. Do not claim fully functional playback solely from iframe markup.
- Pixel-level desktop/mobile screenshots and final ad placement were not available for independent inspection.
- Error fingerprint: `EMBED_RENDERED_NOT_PLAYBACK_PROVEN`. Root cause: the available connector exposes stored source and server-rendered HTML, but not an interactive logged-in page browser.
- Regression: open live article at desktop and mobile breakpoints, play all three distinct videos, inspect native X rendering and the original QR, and verify featured-cover display and responsive layout before declaring these checks complete.
