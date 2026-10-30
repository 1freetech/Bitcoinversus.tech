# BitcoinVersus.Tech Publication QA — Binance Security Incident (27111)

- **Article:** Binance Investigates Suspected Hack as $2.54 Billion in Assets Frozen
- **Published:** 2026-10-29 (WordPress status confirmed `publish`)
- **URL:** https://bitcoinversus.tech/2026/10/29/binance-investigates-suspected-hack-wallet-outflows-october-2026/
- **WordPress post:** 27111; featured image **27108**, verified 1200×630
- **Archive:** `archive/2026/10/27111-binance-investigates-suspected-hack-wallet-outflows-october-2026.gutenberg.html` — exact text fetch-back matched WordPress edit/raw body.

## Reporting and distinctions

Source updates compared against Reuters, AP, The Block, Etherscan and original X statements on October 29. The article gives the **$2.54 billion confirmed frozen total**, attributed to Binance, while explicitly separating the **$3.3 billion–$5.8 billion suspicious outflow estimates** from proven permanent losses. The company had not announced a confirmed attacker identity or root cause. Withdrawals were paused during security checks. EIP-7702 authorization is identified as an analyst hypothesis, not a confirmed attack mechanism.

## Saved and rendered media

- Featured image: WordPress **27108**, 1200×630, separate from in-story media.
- In-story image **8974**: archival Changpeng Zhao portrait, present in WordPress public-context rendered HTML and media library.
- In-story image **23702**: Wikimedia Commons BNB emblem, present in WordPress public-context rendered HTML and media library.
- Footer QR **24043**: original user-supplied donation QR, present, not counted as in-story media.
- Four user-supplied X posts are linked contextually, but **are not represented as working native embeds**.
- Both in-story images persisted after publish and were independently read back via authenticated WordPress rendering. No functional video embeds were claimed.

## Failure fingerprint and fix

- **Fingerprint:** `X_EMBED_FALLBACK_ONLY_WORDPRESS_SIMPLE_SITE`
- **Observed:** native `core/embed` with X/Twitter URLs saved but rendered as bare links (no tweet HTML); `core/html` Twitter widget script was sanitized; iframe and shortcode strategies also failed to render functional tweets.
- **Root cause (observed behavior):** this WordPress.com site's editor/rendering path does not preserve functional third-party X widget markup through the connector. The exact platform-level cause was not independently established.
- **Repair:** removed ineffective X embed blocks; retained each primary X URL as contextual attribution; inserted two distinct site-media images. Verified both rendered image elements, image IDs and source URLs through WordPress view context.
- **Regression check:** on future X-driven stories, do not equate saved native embed markup with a functional tweet; try supported embeds, then use authentic credited existing images or other supported media, with image read-back. Do not claim X playback without a real browser test.
- **Additional rule update:** removed retired automatic site-branding and promotional-X footer elements in compliance with `CONTENT_AUTHORING_STANDARDS.md` October 29 footer rule. Original approved Editor's Note, QR, and disclaimer verified.

## Final checks and limitations

- Status `publish` confirmed from authenticated WordPress after edit; permalink and title returned.
- Read-back confirms two in-story image elements, the original QR, the four X source links, and the mandatory disclaimer. No WordPress content warnings.
- GitHub archive fetch-back **exactly matched** final WordPress raw Gutenberg content.
- Public-web fetch of the new URL was unavailable in the browser tool. Hence no independent desktop/mobile visual screenshots or live X interaction check were completed; do not claim otherwise.
