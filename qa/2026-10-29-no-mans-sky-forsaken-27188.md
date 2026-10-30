# WordPress publication QA — No Man's Sky: Forsaken (27188)

## Published article
- WordPress ID: **27188**; status `publish`, verified by both `posts.get(context=edit)` and `posts.get(context=view)`.
- Link: https://bitcoinversus.tech/2026/10/29/no-mans-sky-forsaken-update-star-warping-iphone-ipad-2026/
- Category: **Gaming** (1256); tags Gaming (1256), iPhone (106595), space (174), video games (1914).
- Headline: No Man’s Sky Forsaken Adds Seamless Star Warping and Launches on iPhone.
- Original report length: approximately 442 words excluding footer/video captions.
- SEO title, meta description, excerpt and social share text populated and read back.
- Deduplication check: WordPress search "No Man's Sky" found Oct 23 ranking of space exploration games; search "Forsaken" returned none. GitHub code search for Forsaken returned no match.

## Sources and accuracy
- Primary release announcement, **Oct 28, 2026**: https://www.nomanssky.com/2026/10/no-mans-sky-forsaken/
- Detailed official 7.10 patch notes: https://www.nomanssky.com/forsaken-update/
- Official iOS technical announcement, **Oct 12, 2026**: https://www.nomanssky.com/2026/10/no-mans-sky-ios/
- 7.11 PC hotfix, **Oct 29, 2026**: https://www.nomanssky.com/2026/10/forsaken-7-11/
- Article distinguishes direct target-star **warping** from unrestricted sublight travel; notes iOS multiplayer absent, settlements restricted to iPhone 15 Pro+, support starts iPhone 11 / 3rd-generation iPad Air; trial with one-time unlock. Calls 7.11 live on Steam while other platform rollouts pending.
- Internal links to site's space-exploration games ranking and game-file-size history, avoiding forced tangents.

## Featured image
- Original generated anime-style editorial cover depicting an imagined space explorer and biomechanical wreck; not an in-game screenshot.
- Cropped to **1200 × 630** with Pillow; resulting JPEG in WordPress media **27180**. WordPress returned 1200×630 and `featured_media=27180`.
- Filename nms_forsaken_editorial_cover_1200x630.jpg; accessibility alt text populated.

## In-story media: five distinct relevant entries
- **Official Hello Games Forsaken trailer:** `Kv2FxK2msCc`, Gutenberg shortcode `[youtube https://www.youtube.com/watch?v=Kv2FxK2msCc]`.
- **Official Hello Games iOS deep-dive video:** `4IZ-uYvtH58`, Gutenberg shortcode with canonical watch URL.
- **Official Hello Games Forsaken trader screenshot:** WordPress media **27181**.
- **Official Hello Games starship screenshot:** WordPress media **27182**.
- **Official Hello Games iPhone/iPad image:** WordPress media **27183**.
- Screenshot originals copied via media.create from the Oct 28 publisher website, with descriptions/attribution and image alt text.
- WordPress edit raw markup contains **two** shortcode blocks and three image blocks. **WordPress view rendered HTML contains two distinct `youtube.com/embed/` iframes**, and three image elements with expected media IDs. Five in-story media; featured cover/QR excluded.
- **Actual playback of each YouTube embed has not been manually verified in a browser.** Rendered iframe is not a guarantee that YouTube permits playback. No browser-based mobile screenshot/test was performed.
- Media are interleaved with editorial paragraphs.

## Footer and QA
- Retired ad label, promotional X/Twitter link, decorative branding block: all omitted.
- Fully italicized approved volunteer Editor's Note present.
- Original Bitcoin donation QR media **24043**, scan instructions and 5,000-sat donation language preserved.
- Mandatory disclaimer preserved verbatim.
- No `_content_warnings` returned on publish.
- Web browser open of the new URL returned "not accessible"; authenticated WordPress `posts.get(context=view)` did return rendered current public HTML. Therefore **browser visual inspection not independently completed**.
- Final exact Gutenberg archive at `archive/2026/10/27188-no-mans-sky-forsaken-star-warping-iphone-2026.gutenberg.html`; fetch back checked for exact match.

## Prevention checks
- Never assume `wp:embed` creates a playable YouTube player; test rendered `iframe` by exact ID, use supported `wp:shortcode` if needed, and distinguish markup rendering from actual playback.
- Do not count original featured artwork or donation QR as in-story media.
- Source original images from the developer, distinguish genuine screenshots from illustrative featured art.
- Respect newer October 29 footer standard; no ad block or automatic X promo.
