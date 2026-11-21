---
title: "Core Lightning Tests 832-Commit Bitcoin Payments Upgrade"
date: 2026-11-21
status: published
wordpress_id: 34201
canonical_url: "https://bitcoinversus.tech/2026/11/21/core-lightning-v26-12-release-candidate-832-commits-payment-routing-2026/"
categories: [Bitcoin, Information Technology, Technology, Trending News]
featured_media: 34199
featured_media_dimensions: "1200x630"
cover_style: detailed colored-pencil illustration
cover_person_rotation: fictional White man
chart_type: vertical bar, zero baseline, unique contributors
gutenberg_source_path: "archive/2026/11/34201-core-lightning-v2612rc1-routing-recovery.gutenberg.html"
---

# Core Lightning Tests 832-Commit Bitcoin Payments Upgrade

The complete post-publication Gutenberg source is in [the companion HTML file](./34201-core-lightning-v2612rc1-routing-recovery.gutenberg.html). Original cover, chart and donation QR remain in the WordPress media library.

## Verified reporting chronology and claims

- GitHub ElementsProject/lightning v26.12rc1 pre-release published November 18, 2026, at 15:26 UTC.
- Official notes: 832 commits over 169 days by 41 contributors, including 19 first-time contributors and 22 returning contributors.
- The 2026 September v26.09 cycle was skipped because developers prioritized vulnerability reports and shipped fixes through v26.06.x point releases. The candidate contains approximately two release cycles of development.
- New askrene routing impressions remember successful channel use and account for fees in probability costs. xpay avoids repeatedly retrying across channels at a node returning unknown_next_peer.
- listforwards and forward_event provide improved local forward failure reasons for liquidity and HTLC-limit diagnostics.
- lightning-hsmtool gains tooling to recover HTLC outputs after channel-state loss; not a guarantee of restoring all lost funds.
- Splicing corrections address crashes on unannounced channels and a redundant channel_ready retransmission after reconnection.
- pay planned for replacement with xpay in future v27.03; this is a planned change, not an already completed removal.
- gRPC released wire fields/types are now frozen; cln-rpc types and notification schemas changed, so plugin operators need compatibility tests.
- bwatch wallet transaction/UTXO tracking and simple_close are experimental. The v26.12rc1 package is a release candidate, not a final production release.
- Project GitHub v26.12 milestone lists planned December 7, 2026 release; schedule is not a guaranteed deliverable.

## Sources

- Primary official release candidate: https://github.com/ElementsProject/lightning/releases/tag/v26.12rc1
- Primary tagged changelog: https://github.com/ElementsProject/lightning/blob/v26.12rc1/CHANGELOG.md
- Primary milestone: https://github.com/ElementsProject/lightning/milestone/53
- Official compatibility documentation: https://docs.corelightning.org/docs/deprecated-features

## Multimedia and editorial choices

- Exactly one original colored-pencil cover featuring a fictional White male developer in a Lightning node workspace, neon-green BitcoinVersus.tech wordmark on black at lower-left. WordPress media #34199, exact 1200 x 630 pixels.
- Original zero-baseline vertical contributor-count chart media #34198, 2400x1320 original PNG; 22 returning and 19 first-time contributors. Author count is distinct from code commits.
- First official Blockstream educational video: XPAY payment routing, published March 11, 2025: https://www.youtube.com/watch?v=8usnAaM9e2s.
- Second official Blockstream educational video: dual funding and splicing: https://www.youtube.com/watch?v=N59D89jy4BU.
- Both videos are historical background recorded prior to v26.12rc1 and neither demonstrates the release candidate.
- WordPress stored video shortcodes and rendered two youtube.com/embed iframe players, independently verified at article HTML level.
- Neither end-user YouTube playback nor final mobile/desktop screenshot pixels could be independently inspected.
- Four related BitcoinVersus.Tech editorial links to prior Core Lightning, LND, pi402, and f2pool Lightning coverage.
- Article original prose 730 words with no prohibited editorial words outside exact standing footer.
- Established Editor's Note, donation QR media #24593, and disclaimer included.

## Public audit after publication

- WordPress post #34201 is published and publicly visible at its exact canonical URL.
- HTTP 200; custom SEO description and Open Graph featured image present.
- Zero images missing alt text, zero empty links; chart and QR visible in rendered HTML.
- WordPress screenshot service reports ready for mobile 390px and desktop 1200px. Screenshot URL could not be fetched for independent visual inspection.
- WordPress and site GitHub archive searches yielded no duplicate v26.12rc1 story. Related articles concern older v26.06.x security updates.

## Unresolved limitations

- No regression test, live Lightning payment, wallet backup restore or splicing transaction executed on v26.12rc1 by the editor.
- YouTube iframes appeared in WordPress HTML, but device playback could not be directly checked.
- Actual captured screenshot contents were unavailable for pixel-level layout review.
- Original image and video binaries are not stored inside the GitHub editorial archive.

## Published story

https://bitcoinversus.tech/2026/11/21/core-lightning-v26-12-release-candidate-832-commits-payment-routing-2026/
