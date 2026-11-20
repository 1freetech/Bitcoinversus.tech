---
title: "Bitcoin Miners Debate Faster Relay of Losing Blocks"
date: 2026-11-20
status: published
wordpress_id: 34065
canonical_url: "https://bitcoinversus.tech/2026/11/20/bitcoin-bip332-stale-block-relay-miner-reward-edge-november-2026/"
categories: [Bitcoin, Bitcoin Mining, Technology, Trending News]
cover_media_id: 34064
cover_dimensions: 1200x630
cover_style: fine-art oil painting
in_story_youtube_ids: [VnxFJaMegYE, JHz7LM4ncLw]
editorial_word_count: 714
synced_footer_pattern: 33935
original_gutenberg_path: "archive/2026/11/34065-bip332-stale-block-relay-miner-incentives.gutenberg.html"
---

# Bitcoin Miners Debate Faster Relay of Losing Blocks

The [Gutenberg HTML source](./34065-bip332-stale-block-relay-miner-incentives.gutenberg.html) is an exact, byte-for-byte WordPress published-editor readback of post **#34065**.

## Source verification and engineering findings

- Bitcoin Optech **Newsletter #432**, November 20, 2026, summarized renewed discussion of BIP 332 stale tip relay and miner incentives: https://bitcoinops.org/en/newsletters/2026/11/20/
- Draft **BIP 332**, "Stale Tip Relay", authors Anthony Towns, w0xlt, Ram, assigned August 21, 2026; `Status: Draft`, `Requires: 434`, specification text inspected through the authenticated GitHub connector: https://github.com/bitcoin/bips/blob/master/bip-0332.md
- Original Bitcoin Development mailing-list July–November 2026 thread: https://groups.google.com/g/bitcoindev/c/AwOPNxF15mU/m/NF7UNdJoAQAJ
- BIP defines an optional `staletip` P2P announcement containing a `fork_point`, vector of **48-byte compressed headers**, and a boolean indicating availability of full block data. Suggested resource bounds: up to **20** compressed headers per announcement, stale tips no older than **1,000** blocks, and at most **10** previously known tips advertised at connection initialization. Feature advertisement is negotiated through BIP 434.
- A Bitcoin block becoming stale does **not** make it consensus-invalid. Competing valid blocks at the same height can arise naturally from propagation races. BIP 332 is a **draft** and no general mainnet rollout or approval should be inferred.
- Antoine Poinsot argued for header-only initial relay, preserving observability without necessarily accelerating a competing chain's subsequent adoption as much as full block download. Anthony Towns argued that a well-resourced miner can privately optimize block propagation already, and that access to stale block data can help distinguish benign reorgs from attacks or censorship.
- Towns modeled a **20%-hashrate pool** that momentarily keeps mining on its own competing block. Estimated annual expected incremental benefit of the strategic choice: **16.1 BTC** at one-block reorg relay delay around **five seconds**, vs **16.36 BTC** with a delay around **one second**. Difference = **0.26 BTC per year**, or 1.61% **of the modeled strategy's advantage**, not 1.61% of a pool's total block revenue, not a cash payout, and not verified observations. Model assumes miner work refreshed about every three seconds; outcomes vary with hashrate and pool payout model.
- Related technical reporting on site: September one-block reorganizations, OCEAN BIP-110 rented-hash analysis, Stratum miner-to-pool job protocol, November decentralized coinbase payout research. They are distinct from BIP 332 stale-relay debate.

## Media and editorial QA

- Original featured cover WordPress media **#34064**, exact **1200 × 630** RGB JPEG, fine-art oil painting showing contrasting blue/orange ASIC aisles and competing network paths, with the exact-case **BitcoinVersus.tech** wordmark at lower left in **#39FF14** on a small black text-highlight background. Technical visual metaphor; not a photograph of any actual mine. Cover not repeated in article body.
- Original-source historical YouTube research videos:
  - `VnxFJaMegYE`, a16z crypto research with Princeton scholar Matt Weinberg, **November 4, 2022**, formal selfish-mining incentives.
  - `JHz7LM4ncLw`, verified aantonop channel with Andreas M. Antonopoulos, **April 22, 2018**, mining-pool and consensus Q&A.
- Both media captions explicitly identify their older dates and clarify neither documents adoption of BIP 332. Published WordPress `context=view` HTML contains **two actual YouTube iframe elements** for the exact IDs, placed near beginning and middle.
- **Actual independent player playback not tested**. Correct iframes prove WordPress HTML rendering, not that YouTube plays on all devices.
- No original chart: reviewed (a) grouped vertical columns of modeled 16.1 vs 16.36 BTC, (b) line by propagation delay, and (c) two-point dot plot. Rejected because a single speculative two-scenario model is unsuitable as a standalone observational dataset and a zero-baseline chart would obscure the tiny delta. Clear prose with exact model assumptions gives more reliable interpretation.
- Four contextual internal article links were verified as existing published WordPress titles and routes, though external click-through in a browser was unavailable.
- **714-word original editorial body** excluding sources and standard footer; restricted words `this`, `unusual`, `unusually`, `strange` absent.
- SEO title, slug, meta description, excerpt, categories, tags and image alt text saved.
- Reusable editorial footer block **#33935** expanded to the exact approved volunteer statement, one original donation QR image **#24043**, 5,000-satoshi instructions and financial/investment/legal disclaimer.
- WordPress post editor readback and published HTML renderer returned **status publish**, official URL, correct featured cover, two iframes, four internal article links, one QR and disclaimer.
- Independent external public webpage fetch was blocked; **desktop/mobile rendered layout, image performance and actual YouTube playback remain unverified**. Do not report full end-to-end acceptance tests as passed.

## Duplicate check and improvements

- WordPress keyword/title searches for `BIP332`, `stale tip`, `stale block relay`, `16.36 BTC`, and `selfish mining` yielded no direct duplicate; an existing one-block reorg article and prior mining payout research are contextual topics only.
- One new article requested and published for Bitcoin mining category. Previous cover style colored pencil; current cover uses oil paint.
- Future improvement: test actual video playback and responsive layout through an independent browser when supported; preserve model provenance and baseline assumptions in protocol journalism; distinguish optional P2P service designs from consensus changes or mining profitability claims.
