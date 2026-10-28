# BitcoinVersus.Tech publication QA ledger — 2026-10-27 / post 26774

- **Article:** [Vantage reserves 1 GW+ of Heron solid-state transformer capacity](https://bitcoinversus.tech/2026/10/27/vantage-heron-1gw-solid-state-transformers-800vdc-ai-data-centers/)
- **Post status:** Published (verified WordPress owner connector, post ID 26774).
- **Final-content GitHub archive:** [archived Gutenberg markup](../../archive/2026/10/26774-vantage-heron-1gw-solid-state-transformers-800vdc-ai-data-centers.md)
- **Primary claim:** Vantage reserved **over 1 GW of Heron Link manufacturing capacity**, not delivered/deployed 1 GW. Source: Vantage and Heron releases dated October 21, 2026.

## Verified machine-readable assertions

- Cover media 26772 is a unique 1200 × 630 AI editorial illustration; metadata explicitly notes this is **not** a photograph of a Vantage facility.
- In-story media: official Heron Link product rendering (media 26773), and a canonical Weights & Biases interview YouTube video (`e_eEcPysMlQ`); donation QR (media 24043) is excluded from quota.
- WordPress post-publication `posts.get(context=view)` returned an actual `youtube.com/embed/e_eEcPysMlQ` iframe, not merely a watch URL/link fallback.
- The same rendered HTML contains the Heron product image and donation QR.
- Internal contextual links count: 4; direct Vantage/Heron source links count: 3.
- Headline and technical content verified against original Vantage/Heron announcements; article distinguishes company efficiency targets from field measurements.
- Final Gutenberg raw content was fetched back after publishing and preserved in GitHub.

## QA exception and evidence-backed fingerprint

- **Fingerprint:** `BV-PUB-26774-LIVE-BROWSER-PROOF-UNAVAILABLE`.
- **Observed blocker:** Public desktop/mobile screenshot capture and actual click-to-play YouTube testing could not be executed in this run; the working sandbox could not resolve the public WordPress or YouTube hosts, and no authenticated visual browser was available.
- **Root cause:** Visual/browser verification access limitation, **not** proven embed failure.
- **Fix/next validation:** Use an authorized desktop/mobile browser to open the published post, capture screenshots with the Heron image and YouTube player visible, click Play to confirm video starts, and inspect the QR/cover placement. If the video fails, replace with a relevant verified-working source and re-fetch final Gutenberg archive.
- **Regression test:** Confirm two distinct in-story media objects; at least one functioning YouTube player, legible figure captions, substantive paragraph spacing, responsive 375 px/768 px/1440 px layouts, and full cover plus donation QR. Recheck the WordPress REST rendered HTML after every embed replacement.
- **Verification status:** Server-side rendering: **PASS**. Live browser screenshots: **NOT TESTED**. Human-click playback: **NOT TESTED**. Do not call those final two passes successful.

