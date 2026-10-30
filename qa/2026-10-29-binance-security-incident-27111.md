# UPDATE — Successful X embed repair (October 29, 2026)

**This update supersedes the earlier temporary conclusion that the supplied X posts could only be linked.** All four exact status IDs provided by the editor are now included as functioning WordPress oEmbed shortcodes.

- Cointelegraph: 2115919718011851188
- CZ: 2115915423174853077
- Watcher.Guru: 2115922259739349132
- Cointelegraph follow-up: 2115925539735433264

**Successful fix:** Place a clean Twitter status URL in the native WordPress Shortcode block, using an enclosing `[embed]` and `[/embed]` pair. Unlike the earlier attempted `[twitter url=...]` syntax, this resolved to complete post markup.

**Evidence:** The authenticated WordPress edit response contains four shortcode blocks. The view/render response contains four distinct `twitter-tweet` blockquotes and four `platform.x.com/widgets.js` script references. Each original status ID and attributed author were present. The old two generic in-story images were removed; original 1200×630 cover and donation QR remain. Browser-side widget execution was not independently tested.

**Archive:** Updated the Gutenberg archive and fetched it back, confirming a byte-for-byte exact match with the final WordPress edit content.

**Prevention:** Supplied social-post links must be prioritized as story media and not downgraded to contextual links or generic images until the native shortcode repair route has been tested. Use two or three strong external reporting sources for routine news briefs; typically stop discovery after about five relevant sites unless unresolved factual issues warrant more.

---

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
