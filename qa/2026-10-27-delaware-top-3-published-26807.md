# Delaware Top 3 Data Centers — publication QA result
Date: 2026-10-27 (WordPress local date)

## Confirmed publishing evidence
- WordPress post ID: 26807.
- Status: publish, confirmed on posts.update and independently on posts.get (edit context).
- Public permalink returned by WordPress: https://bitcoinversus.tech/2026/10/27/top-3-largest-delaware-data-center-projects-2026-full-report/
- Title: Top 3 Largest Documented Data Center Projects in Delaware (2026): Power, Permits and What Is Actually Operating.
- Featured cover ID: 26802. WordPress media reports original dimensions exactly 1200×630.
- Gutenberg content 13,170 characters.
- In-story image blocks (three, excludes cover and footer QR): 26803, 26805, 26806.
- Separate donation QR image block ID 24043.
- Links: 18 HTML anchor elements, including four BitcoinVersus.Tech contextual internal hyperlinks.
- WordPress posts.update reported no _content_warnings.
- Exact final content archived to GitHub: archive/2026/10/26807-top-3-largest-delaware-data-center-projects-2026-full-report.gutenberg.html; commit c158bdc651af0b204aa719f78f3f272ff88e262f.
- GitHub raw fetch-back compared byte-for-byte (string equality) with fresh published WordPress posts.get content: PASS (13,170 characters).

## Outstanding quality verification
- The website's public page was inaccessible from available web fetch (tool returned inaccessible), and container network DNS resolution of bitcoinversus.tech failed.
- No actual desktop/mobile browser screenshots of the live page could be captured or inspected.
- Real rendered image loading, captions, layout and live link clickthrough were NOT independently verified.
- Source-based factual checks and saved Gutenberg QA were done previously; this audit cannot claim end-user rendering verified.
- No YouTube or X embeds in this article; in-story media are three credited external images (plus required cover and separate QR).

## Error fingerprint / regression
- Fingerprint: DELAWARE_26807_PUBLISHED_LIVE_RENDER_NOT_VERIFIED_20261027
- Root cause: Browser/public-site network access unavailable, despite WordPress REST read/write and GitHub API success.
- Fix: Use a browser-accessible public view or authenticated WordPress preview to capture and inspect actual desktop and mobile screenshots of the live URL, then check every image and footer QR; repair any blank/broken item.
- Regression: On next publication, ensure browser-rendering QA is available before publishing, inspect at desktop and mobile widths, check inline links, verify media count and credits, then perform final WordPress fetch-back and exact GitHub archive comparison.
- Publication did occur due to the user's explicit direct instruction to post now; pre-existing preview limitation was disclosed to the user.
