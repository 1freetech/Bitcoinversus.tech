---
title: "Decentralized Bitcoin Mining Has a Small-Miner Payout Problem"
date: 2026-11-20
status: published
wordpress_id: 34054
canonical_url: "https://bitcoinversus.tech/2026/11/20/decentralized-bitcoin-mining-small-miner-coinbase-payout-attack-dcpp-2026/"
categories: [Bitcoin, bitcoin mining, technology, Trending News]
featured_media_id: 34049
featured_media_dimensions: 1200x630
cover_style: cinematic anime
research_chart_media_id: 34050
research_chart_dimensions: 1275x646
chart_type: primary-source histogram
editorial_word_count: 680
synced_footer_pattern_id: 33935
original_gutenberg_path: "archive/2026/11/34054-decentralized-coinbase-payouts-small-miners.gutenberg.html"
---

# Decentralized Bitcoin Mining Has a Small-Miner Payout Problem

The [companion Gutenberg source](./34054-decentralized-coinbase-payouts-small-miners.gutenberg.html) was saved byte-for-byte from WordPress article **#34054** after publication. The story is about emerging **research and discussion**, not a shipped Bitcoin protocol change, successful exploit, or verified attack against a named pool.

## Primary research and dates

- Bitcoin Optech Newsletter **#432**, published **November 20, 2026**: https://bitcoinops.org/en/newsletters/2026/11/20/
- Original Delving Bitcoin technical discussion by developer **7d5x9**, **November 11, 2026**: https://delvingbitcoin.org/t/decentralized-coinbase-payout-protocols-dcpp-a-framework-for-discussion/3060
- LearnBitcoin.com historical P2Pool original operator analysis, **November 11, 2026**: https://delvingbitcoin.org/t/decentralized-coinbase-payout-protocols-dcpp-a-framework-for-discussion/3060/2
- P2Poolv2 developer **jungly**, sampled Ocean coinbase outputs and histogram, **November 12, 2026**: https://delvingbitcoin.org/t/decentralized-coinbase-payout-protocols-dcpp-a-framework-for-discussion/3060/5
- The 7d5x9 proposal identifies a conceptual **rich-list attack** against payout slot ranking. A large contributor may split hashrate across identities, potentially crowding out small miners when outputs are limited. **No real exploit was confirmed**.
- Historical P2Pool analysis reviewed **2,545 coinbase transactions**. Typical recipients ~200 (2012), ~390 (2014), record **553** in block **236,962** on **May 19, 2013**, roughly 19 kB, with only **42** payouts of >=500 outputs in the examined set. These are the operator’s cited analysis and not a newly reproduced audit of the underlying CSV.
- The 0.001 BTC historical small-miner threshold was associated with share difficulty and dust effects. Samples identify paid participants, **not a complete population of miners who stopped participating**.
- P2Poolv2, Braidpool, Spark-like and Ark-like structures are **proposals or implementation approaches** with different security, settlement and liquidity assumptions. Stratum V2 and Job Declaration address miner-to-pool communication and template autonomy, not all payout-claim security.
- Some design sketches discuss future covenant/rebindable signature changes; **no Bitcoin soft fork has been approved or deployed by the paper**.

## Multimedia evidence and QA

- Original **cinematic anime** cover **#34049**, 1200 × 630, visually depicts a small miner and industrial racks contributing to a glowing Bitcoin block. The exact **BitcoinVersus.tech** wordmark appears once in neon green **#39FF14**, on a tight black lower-left highlight. Illustrative, not an authentic photograph or diagram.
- In-story official-source research histogram **#34050**, **1275 × 646**, reproduced from jungly’s posted **Ocean coinbase** data, sample median **20** outputs and mean **31.9**. These sampled Ocean outputs must **not** be mislabeled as original 2012–2014 P2Pool data or as universal firmware limits. Attribution and original image URL are retained in a WordPress image caption.
- Original-source historical video **#1**: Stephan Livera interviewing P2Poolv2 developer jungly, **September 6, 2025**, YouTube ID `0lRXzaaYrZs`, https://www.youtube.com/watch?v=0lRXzaaYrZs .
- Original-speaker historical video **#2**: Bitcoin Magazine conference clip of Braidpool developer Kulpreet Singh, **August 14, 2024**, YouTube ID `c_zaVsZph3A`, https://www.youtube.com/watch?v=c_zaVsZph3A .
- WordPress published rendered HTML returned **two distinct YouTube iframe players** containing the exact IDs above. This verifies saved iframe rendering, **not actual player playback or mobile functionality**.
- In-story multimedia total: **three**, two dated original-source videos and one authentic developer-produced histogram. The featured cover and donation QR are excluded from the in-story count.
- Chart choice: used **authentic primary-source histogram** to illustrate real payout-output capacity and distribution. No fabricated SmartChart dataset, synthetic numeric outputs, or simplistic diagram was introduced.
- Five contextual internal WordPress links: Bitcoin coinbase transactions, P2Poolv2 Lightning payouts, Stratum protocol, MARA’s Stratum V2 block, and centralized-vs-decentralized-vs-solo pool comparison.
- **680 editorial words**, excluding sources and synced footer. No restricted editorial words (`this`, `unusual`, `unusually`, `strange`) in original prose.
- SEO description, original article title, slug, excerpt, categories, tags, alt text and proper Gutenberg blocks saved.
- The synced reusable editorial footer **#33935** was saved as the final top-level Gutenberg block, and WordPress-rendered HTML contained the full exact approved volunteer message, **one** original Bitcoin donation QR **#24043**, 5,000-satoshi instructions and the disclaimer.
- Published WordPress editor readback and published rendered HTML passed; cover was not duplicated inside article body.
- **Independent public URL fetch failed**, so external browser page loading, responsive desktop/mobile visual QA and **actual video playback remain unverified**. Do not claim complete acceptance gates.

## Duplicate check and lessons learned

- WordPress targeted searches for DCPP, rich-list attack and decentralized coinbase payout yielded **no direct same-story publications**.
- A general **October 11, 2026** explainer about centralized vs decentralized vs solo mining pools was returned by a broad search. Reviewed it as contextual background, **not a duplicate** of November’s newly researched payout-attack design.
- Always distinguish old P2Pool data from contemporary Ocean output data, and researcher proposals from deployed production behavior.
- Prioritize original developers and dated research over recent aggregator articles that recycle older events; a search result published Nov 20 reproduced a separate working-group announcement originally dated **May 7**, so that candidate was discarded.
