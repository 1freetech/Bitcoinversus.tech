# BitcoinVersus.Tech OSETC.039 publication QA ledger
**Date:** 2026-10-29 (WordPress site-local).  
**Curriculum:** OSETC.039 — next in rotation following OSEEC.024.  
**Live post:** https://bitcoinversus.tech/2026/10/29/osetc-039-three-phase-motor-current-imbalance-clamp-meter-single-phasing/  
**WordPress ID:** 26968; published (owner posts.get verified, independent readback).
**Title:** OSETC.039: Three-Phase Motor Current Imbalance — Clamp-Meter Diagnostics and Single-Phasing
**Featured media:** WordPress #26966, `osetc039_motor_current_imbalance_cover_1200x630.jpg`, WordPress media.get confirmed 1200 × 630 and descriptive alt text.

## Sources and duplicate gate
- Compared current WordPress OSETC listings and searched site for existing three-phase current imbalance coverage; no duplicate dedicated OSETC.039 lesson found.
- Consulted `audits/2026-10-23-osetc-osntc-course-realignment.md`: preserved reserved topic of phase-sequence/rotation for OSETC.036, instead selecting field current imbalance after OSETC.038.
- Technical sources: Fluke current/voltage imbalance articles and motor testing recommendations; Nidec/U.S. Motors unbalanced voltage motor-effects note; OSHA energized-work/LOTO guidance.
- The examples use explicitly fictional current and voltage values; 13.7% illustrated current unbalance and 0.49% voltage unbalance.

## Video proof / repaired-embed prevention
- YouTube 1: Tim Wilborne/TW Controls, original publisher lesson `https://twcontrols.com/industrial-control-wiring-course/ac-motor-troubleshooting-resistance-amps-and-megger-tests-explained` with YouTube `https://www.youtube.com/watch?v=M1Mwd3sr3KA`.
- YouTube 2: Electrical Engineering, YouTube `https://www.youtube.com/watch?v=d6Z2Rstkw4I`. Content expressly cautions not to repeat lead-rewiring exercises.
- Exactly **two native Gutenberg core/embed blocks** with bare watch URL on its own line, preceded and followed by newline characters inside `wp-block-embed__wrapper`. This addresses the previously reproduced OSEEC.024 URL-inline-in-wrapper autoembed failure.
- A fresh WordPress `posts.get(context=view)` returned **two distinct YouTube player iframes** for M1Mwd3sr3KA and d6Z2Rstkw4I, not only links.
- Important: server-rendered iframes have been verified but **actual user-interaction playback and mobile/desktop browser screenshot review have not been performed**. No stronger playback claim is authorized.

## Other post checks
- 1200 × 630 story-specific cover, no original in-story diagrams, 17 context-linked internal archive terms, primary external source URLs.
- Featured cover and donation QR not included in the two-media count; original 5,000 sat donation QR #24043 preserved.
- No prohibited vocabulary; no WordPress `_content_warnings` returned; WordPress status `publish` verified by readback.
- No unrelated article was updated.

## Archive proof
- Exact published source: [GitHub Gutenberg archive](../../archive/2026/10/26968-osetc-039-three-phase-motor-current-imbalance-clamp-meter-single-phasing.gutenberg.html)
- First archive commit: `7af60c4de083a65fe7aa3f0194ae1e34e5739dc0`.
- Independent WordPress editor context readback and GitHub fetch_file readback **matched exactly** (19564 characters), blob SHA `d1c47ff50d9b759b419273d15c08b2fbcbf7bc6a`.

## Regression / follow-up
- **Fingerprint:** `EMBED-LINE-BREAK-FIX-VERIFIED/INTERACTIVE-PLAYBACK-UNTESTED`.
- Use authenticated desktop/mobile browsers to verify iframe load, click play for both videos, inspect margins, cover and QR, and confirm contextual links. If actual playback fails, repair and re-check, fetch final WordPress body, update archive, and record SHA.
- **Status:** PUBLISHED + SOURCE-ARCHIVED + SERVER-RENDERED-IFRAMES-VERIFIED. INTERACTIVE PLAYBACK AND SCREENSHOTS OPEN.
