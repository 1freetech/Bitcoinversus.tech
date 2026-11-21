---
title: "Bitcoin Wallet Bots Pounce on Exposed Keys in Seconds"
date: 2026-11-21
status: published
wordpress_id: 34152
canonical_url: "https://bitcoinversus.tech/2026/11/21/bitcoin-wallet-bots-exposed-ecdsa-nonce-keys-2026-university-liege/"
categories: [Bitcoin, Information Technology, Technology, Trending News]
featured_media: 34147
featured_media_dimensions: "1200x630"
cover_style: cinematic anime
cover_person_rotation: fictional Latino man
chart: original zero-baseline vertical bars, ECDSA recoverable keys by chain, research data through 2024-06-30
original_gutenberg_path: "archive/2026/11/34152-bitcoin-wallet-bots-ecdsa-nonce-reuse.gutenberg.html"
---

# Bitcoin Wallet Bots Pounce on Exposed Keys in Seconds

Final published article's Gutenberg source is archived in [the companion file](./34152-bitcoin-wallet-bots-ecdsa-nonce-reuse.gutenberg.html). Original artwork and chart binaries remain in WordPress media.

## Research facts and chronology

- Vincent Jacquot and Benoît Donnet, University of Liège, published their peer-reviewed research paper at Financial Cryptography and Data Security in March 2026 (university repository record since January 2026).
- CoinDesk independently interviewed Jacquot and reported the findings on November 20, 2026. The paper is not a November 2026 paper.
- ECDSA nonce reuse can expose private keys through cryptographic signing mistakes. This is not a Bitcoin consensus failure or proof that correctly generated signatures can routinely be broken.
- Onchain dataset: Bitcoin, Ethereum, Dogecoin, Litecoin, Bitcoin Cash and Dash, through June 30, 2024.
- Table 1 Bitcoin within-chain recovered keys 3,278, Dogecoin 195, Ethereum 119, Litecoin 9, Bitcoin Cash 6, Dash 1.
- The per-chain counts sum 3,608 with three cross-chain duplicates; separate-chain analysis finds 3,605 distinct keys; 15 additional found by combined-chain search makes 3,620 total keys.
- Honeypots were funded April 28, 2025. Bitcoin mempool observers issued competing spends in the same second bait became vulnerable; later remaining BTC bait was also taken.
- Approx. 101 million euros or $106 million means sum of historical peak values of vulnerable addresses, using Nov. 25, 2024 crypto prices, across six blockchains. This is not the amount of verified theft, not simultaneous holdings, not Bitcoin-specific aggregate theft.
- The authors do not distinguish all historical vulnerable-wallet exits from genuine theft. ECDSA nonce bugs are an implementation/key-handling failure; high-quality reviewed software and RFC6979 deterministic nonces mitigate reuse.

## Primary and secondary evidence

- University primary academic record: https://orbi.uliege.be/handle/2268/339407
- University PDF scanned and visually inspected pages 5 and 6, with Table 1 and key-recovery counts: https://orbi.uliege.be/bitstream/2268/339407/1/paper.pdf
- CoinDesk follow-up Nov. 20, 2026: https://www.coindesk.com/tech/2026/11/20/bitcoin-bots-pounced-within-seconds-when-researchers-exposed-their-keys
- Blockstream signing precautions: https://blockstream.zendesk.com/hc/en-us/articles/9641573399961-What-is-Anti-Exfil-and-how-does-it-work

## Visuals, embeds and publication verification

- One original cinematic-anime conceptual image with fictional Latino male programmer and neon green BitcoinVersus.tech lower-left watermark; WordPress featured media ID 34147, exact 1200 × 630.
- Original SmartChart-style vertical bar: WordPress media ID 34146, 2400x1400 source, scaled responsively in Gutenberg. Data [3278,195,119,16], grouped final label includes LTC, BCH, Dash; zero baseline.
- Verified-authentic video #1: Andreas M. Antonopoulos (verified aantonop YouTube channel), 'Bitcoin Q&A: Cryptographic Primitives', published May 4, 2018: https://www.youtube.com/watch?v=RIckQ6RBt5E
- Verified-authentic video #2: Blockstream, 'Bitcoin Wallet Best Practices', published August 16, 2022: https://www.youtube.com/watch?v=CYMbacBBVDA
- Both videos are archival context. Neither is a recording of the 2025 bait experiment or March 2026 study.
- WordPress stored and rendered both videos as iframes. External reader-device video playback was not independently verified.
- Four contextual BitcoinVersus.Tech internal source links included; exact established research-support footer and donation QR image #24593 present.
- Article word count: 699 including sources/footer, with none of the editorial prohibited words outside the standing exact footer.
- WordPress post published #34152, public page HTTP 200, correct permalink and canonical, SEO description and OG cover image verified.
- WordPress reported zero missing image alt texts and zero empty links.
- WordPress mobile 390px and desktop 1200px screenshot service returned ready; capture images not independently visually inspected.
- WordPress searches for ECDSA nonce/reuse and GitHub archive search found no prior dedicated identical article.

## Remaining limitations

- Research authors' historical key recovery was not independently reproduced; raw blockchain chain-by-chain scan not run.
- Actual stolen fund totals cannot be determined from the study; headline does not claim them.
- No direct end-device YouTube playback testing; iframe markup does render.
- Screenshot URL returned capture-ready status; independent pixel-level visual inspection remains incomplete.
- Original media binaries are hosted on WordPress rather than in GitHub.

## Canonical URL

https://bitcoinversus.tech/2026/11/21/bitcoin-wallet-bots-exposed-ecdsa-nonce-keys-2026-university-liege/
