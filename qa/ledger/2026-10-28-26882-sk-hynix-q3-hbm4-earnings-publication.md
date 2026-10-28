# BitcoinVersus.Tech publication QA ledger — post 26882

- Date: October 28, 2026 (publication)
- Title: SK hynix Reports ₩104.6 Trillion Quarter as HBM4 Drives AI Memory Boom
- Live URL: https://bitcoinversus.tech/2026/10/28/sk-hynix-q3-2026-104-trillion-won-hbm4-ai-memory-profit/
- Exact canonical Gutenberg archive: archive/2026/10/26882-sk-hynix-q3-2026-104-trillion-won-hbm4-ai-memory-profit.gutenberg.html
- Initial archive commit: ad07168065f87d3ec5b91a5c225909e8c982d40a

## Primary-source factual preflight
- Primary earnings release (dated October 28, 2026): https://news.skhynix.com/en/q3-2026-business-results/
- Separate English-language reporting cross-check: https://en.yna.co.kr/view/AEN20261028001652320
- Earnings release explicitly describes financial results as preliminary and subject to independent review.
- Reported numbers verified against issuer: ₩104.6155T revenue, ₩83.3338T operating profit (80% margin), ₩39.7756T net earnings; revenue +32% QoQ/+328% YoY; operating profit +38% QoQ/+632% YoY; net profit -58% QoQ.
- Company forecasts kept distinct from facts: HBM4 becoming mainstream in Q4 2026, 14 customer LTAs covering >50% of planned 2027–28 production, AI memory supply shortfall expectation through 2030, M15X/Yongin expansion, proposed 2026 shareholder returns around ₩100T.
- Live WordPress search for 'SK hynix', 'HBM4', '104.6 trillion', '83.3 trillion' and 'M15X' yielded no published duplicate of this Q3 release. GitHub archive search for 'SK hynix Q3 2026 104.6155' and HBM4 83.3338 yielded zero duplicates.
- Editorial body preflight: 398 words excluding media captions and Editor's Note, 8 inline hyperlinks of which 3 link to the older BitcoinVersus.Tech archive. Prohibited terms not present.

## Media and publish verification
- Featured cover: WordPress media 26879, 1200x630 exact; original richly detailed, subject-specific conceptual editorial image (not a real SK hynix photo). No original diagrams inserted in-story.
- In-story approved distinct relevant media count 3: (1) official SK hynix HBM4 package photo (WordPress 26880), originally https://news.skhynix.com/en/sk-hynix-completes-worlds-first-hbm4-development-and-readies-mass-production/ ; (2) official SK hynix Q3 2026 earnings YouTube video https://www.youtube.com/watch?v=D5rt1DBFLIM embedded from the official earnings release page; (3) official SK hynix Q3 2026 financial-results infographic (WordPress 26881) from original company earnings report. The original cover and 5,000 sats QR footer are not counted.
- Live WordPress posts.get(context:view) returned status 'publish'; both images matched expected wp-image-26880 / wp-image-26881 and the native YouTube iframe source matched youtube.com/embed/D5rt1DBFLIM. Counts: 1 iframe; 3 in-body img tags including QR; 8 hyperlinks; original 5000 sats QR. Media separated by prose paragraphs. No decorative fixed-width containers.
- The fact that WordPress creates the iframe verifies embed rendering in returned HTML, NOT that the video plays correctly. Actual browser playback, desktop screenshot QA, and mobile responsive screenshot QA were not performed in this tool environment. The company-issued infographic is an externally sourced official financial graphic; it is not an original diagram created for the story.
- Final WordPress posts.get(context=edit) source content fetched back and stored verbatim on GitHub. Verify exact source comparison after any later edits.

## Error fingerprint, cause, repair and regression test
- Observed failure fingerprint: none for factual preflight, WordPress posts.create, source attribution, iframe HTML verification, or GitHub archive operation.
- Root cause: N/A.
- Fix: N/A.
- Regression test / unverified QA: open published post in actual desktop and mobile browsers; inspect the cover, infographic legibility and HBM4 photograph, activate the official YouTube player to confirm actual playback, check linked primary press sources and responsive alignment, then re-fetch the exact Gutenberg content and compare with archive. Never claim screenshot/playback verification until performed.
