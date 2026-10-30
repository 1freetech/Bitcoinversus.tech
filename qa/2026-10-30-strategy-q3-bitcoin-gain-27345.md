# BitcoinVersus.Tech publication QA — Strategy Q3 2026 (WordPress 27345)

## Status and publication
- Post ID **27345**, status **publish**, verified through WordPress posts.get both context edit and view.
- Live URL: https://bitcoinversus.tech/2026/10/30/strategy-q3-2026-bitcoin-20-9-billion-gain-holdings-848517/
- Headline: Strategy Books $20.9 Billion Bitcoin Gain as Holdings Top 848,500 BTC.
- Category: **Bitcoin** (new dedicated category ID 36507086) and **Finance** (4269); tags Bitcoin, Strategy, Michael Saylor, MSTR.
- Approximately 369 editorial words excluding video captions/footer.
- SEO title, SEO description, excerpt and social share metadata saved and fetched back.
- Preliminary duplicate check: WordPress search for "20.91", "Strategy earnings", "Strategy 2026 financial results" and "Strategy 847,666" found related, nonduplicate reports on Andrew Kang's CFO departure (Oct 29), daily preferred-stock dividends (Oct 28), Michael Saylor interview (Oct 23), and treasury rankings. No standalone October 29 Strategy Q3 results article returned; GitHub search found no exact report.

## Sources and claims
- Primary issuer October 29, 2026 press release: https://www.strategy.com/press/strategy-announces-third-quarter-2026-financial-results_10-29-2026
- Nasdaq hosted full primary release: https://www.nasdaq.com/press-release/strategy-announces-third-quarter-financial-results-operating-income-21-billion-and
- October 29 Q3 earnings transcript: https://stockanalysis.com/stocks/mstr/transcripts/662581-q3-2026/
- Secondary contextual skepticism: Barron's coverage Oct 30, 2026.
- Results: Q3 $20.91B gain on digital assets and operating income, GAAP net income $19.53B, diluted EPS $44.75, total software revenue $125.4M (-3% year/year).
- Treasury as of **October 25**, not September 30: **848,517 BTC**; $64.02B aggregate cost; $68.90B market valuation at an October 23 BTC reference price of $81,200.
- Year-to-date BTC Yield **negative 3.7%**, defined on an assumed fully diluted Bitcoin-per-share basis; not a realized shareholder total return.
- $431.8M of BTC sold **year to date 2026**, stated as company sale-to-fund dividends/buybacks; $2.04B STRC preferred-share repurchases year to date; $5.07B USD assets and 3.4 years estimated dividend/interest coverage (management method).
- STRC daily dividend record dates starting Nov 1, and other series beginning Jan 1, 2027: approved, pending implementation as described.
- Fair value accounting gain explicitly distinguished from realized cash proceeds. Risks of common-share dilution and preferred dividend obligations acknowledged.
- Natural internal links to daily dividend amendment, earlier Saylor interview and CFO succession; story not a rewrite of related coverage.

## Media checks
- Original featured editorial illustration, **split-screen diptych** of conceptual Bitcoin vault and market analysis room, uploaded as WordPress media **27344**, confirmed 1200 × 630. The illustration is not literal Bitcoin custody photography and has alt text.
- **Two distinct in-story YouTube videos**, neither generic or unrelated:
  - `BHU5QJ3hcoA`, original Strategy Oct 29 Q3 earnings livestream, shared via company official social channel: https://www.youtube.com/watch?v=BHU5QJ3hcoA
  - `_Y8HAqAYMhE`, original Bitcoin Magazine April 2026 Michael Saylor keynote explaining the STRC digital-credit product, clearly captioned as earlier context: https://www.youtube.com/watch?v=_Y8HAqAYMhE
- Saved Gutenberg contained two `<!-- wp:shortcode -->[youtube ...]` media blocks. WordPress **posts.get context view returned exactly two `<iframe>` elements and both expected `youtube.com/embed/VIDEO_ID` sources**, so source URLs did not degrade into raw links.
- **Actual playback, browser visual inspection, and mobile screenshot were not independently conducted**. Do not conflate rendered player with confirmed playable stream.
- Featured cover and donation QR excluded from in-story media count; 2 relevant media items satisfy site media quota.

## Footer and archival QA
- Correct italicized Editor's Note and original QR image **24043**, 5000-satoshi request, scanning guidance and exact mandatory financial disclaimer retained.
- No retired ad section, branded promo or X status 1937006164555993338.
- No WordPress content warning observed on create.
- Final Gutenberg content archived at `archive/2026/10/27345-strategy-q3-bitcoin-20-9-billion-gain-848517-btc.gutenberg.html`, then fetched back from GitHub and compared byte-for-byte/character-for-character with WordPress edit content.

## Prevention
- Never call a fair-value gain cash earnings or imply BTC Yield measures realized investment returns.
- Date Bitcoin treasury holdings and USD valuation consistently with company's specified data dates.
- Verify actual WordPress video player iframe output on view, not merely shortcode existence.
- Preserve the approved no-ad, no-promotional-X footer format and permitted editorial cover rotation.
