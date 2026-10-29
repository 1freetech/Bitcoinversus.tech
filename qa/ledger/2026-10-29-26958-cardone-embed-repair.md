# Grant Cardone $1m Bitcoin Wager — Live Embed Repair QA

- WordPress post ID **26958**, publicly published.
- Canonical post: https://bitcoinversus.tech/2026/10/29/grant-cardone-one-million-bitcoin-bet-jason-calacanis-2028/
- Date of repair: 2026-10-29 (WordPress site time).
- Request: "Fix embed or remake story"; in-place repair chosen to preserve existing permalink, article and SEO.
- Initial state: two X native Gutenberg blocks (Cointelegraph's 2115549260183703872, Jason's 2114956980674605075), with their rendering unverified in earlier QA.
- Remediation: use `post-sections.replace` with optimistic edit tokens and per-block hash assertions to replace only the two X media blocks. No broad article rewrite.
- New media (2 distinct in-story items, QR excluded):
  1. `core/embed` YouTube video `https://www.youtube.com/watch?v=L2vxPhywUsw`, June 20, 2026 The Wolf Of All Streets (verified publisher/channel and interview description); Cardone discusses Bitcoin and real estate, not purportedly the October wager.
  2. `core/image` WordPress media #26967, 3916 × 2634 JPEG photo of Jason Calacanis by Joi taken May 31, 2007; licensed CC BY 2.0 at https://commons.wikimedia.org/wiki/File:Jason_Calacanis_(1).jpg and https://creativecommons.org/licenses/by/2.0/; archival date and attribution displayed in image caption.
- X source attribution retained as direct hyperlinks in opening story paragraph and Calacanis paragraph: `https://x.com/Cointelegraph/status/2115549260183703872` and `https://x.com/Jason/status/2114956980674605075`.
- Featured cover media #26953 (1200×630) unchanged; category finance, internal contextual links, headline and SEO retained.
- Verbatim Editor's Note and donation QR #24043 retained.
- WordPress `post-sections.list` readback after repair: 14 sections; block 2 is `core/embed` YouTube, block 6 is `core/image`, block 13 is donation QR.
- WordPress `posts.get` edit-context readback: **published** status, 2 distinct in-story media, zero X embed blocks, 3 internal links, QR and full editorial note present, final content length 5,562 characters.
- GitHub final published Gutenberg source updated in place: `archive/2026/10/26958-grant-cardone-bitcoin-million-dollar-bet.gutenberg.html`. Commit `ac88ce627ee4412aa47bfd6c98fe56d292ee40c2`; fetch-back matched WordPress content character-for-character.
- Error fingerprint: `CARDONE_26958_X_EMBED_UNRELIABLE_REPAIR_20261029`.
- Root cause: X embeds could not be reliably verified for native rendering; X external access restrictions blocked earlier tests. Video and image chosen as safer media alternatives.
- Residual QA limitation: live authenticated graphical desktop/mobile screenshots and actual YouTube video playback not tested, because the available container browser had no DNS/network access (attempt returned NameResolutionError). YouTube metadata and WordPress native embed markup exist, but actual playback is not asserted.
- Regression check: view article on desktop and mobile; inspect YouTube video loading/playback and image display/caption/license, check editorial footer, links and absence of blank X slots. Should any fail, replace with another verified relevant media item, update live post, then re-archive and compare exact readback.
