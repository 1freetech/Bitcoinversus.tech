# Publication QA — Foxconn Hon Hai Tech Day 2026 AI Factory
Date: October 30, 2026. WordPress post 27443.
Published: https://bitcoinversus.tech/2026/10/30/foxconn-hhtd26-nvidia-vera-rubin-ai-factory-321-exhibits-2026/

## Originality and reporting
- Fresh company announcement, 30 Oct 2026: https://www.prnewswire.com/news-releases/foxconn-ecosystem-enabling-token-factory-for-ai-in-spotlight-at-hon-hai-tech-day-2026-302924468.html
- Official event evidence with date, photos, speakers and claims: https://hhtd.honhai.com/en-us/highlight
- Explicit WordPress searches for "Hon Hai Tech Day", "HHTD26", "Foxconn token factory", "Foxconn Vera Rubin", "Foxconn 321 exhibits", and final HHTD26 search showed **no event duplicate**. GitHub scoped 2023–2026 archive search "HHTD26 token factory" returned no match. Previously published NVIDIA DSX POD, 800 VDC and Vera Rubin reports linked as context, not recycled.
- The headline accurately gives manufacturer's record 321 exhibits. Body reports NVIDIA Vera Rubin rack integration, DSX POD display, 20 m component wall, 800 VDC design, co-packaged optics, and industrial robots. Supplier estimates for future deployments are qualified as claims, not independently tested achievements. 325 words in original news body, exclusive of captions/footer; 3 contextual internal news links, both primary official event and company-release links.

## Cover and in-story media
- Cover: unique originally generated, detailed editorial artwork inspired by Taipei HHTD AI server and robotics showcase, WordPress media **27441**, EXACT **1200×630** checked from media.create response. https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/foxconn-hhtd26-ai-racks-robotics-oct30-cover-1200x630-1.png . The prior 1729×910 original media 27435 was resized and cropped before setting featured image.
- Three **distinct actual 2026-10-30 Foxconn event photographs**, each imported to WordPress at **4240×2832**, captioned and credited to Foxconn:
  1. Chairman Young Liu opening HHTD26, ID **27436**, https://hhtd.honhai.com/images/highlight/opening-day/01.jpg
  2. NVIDIA Dion Harris speaking at HHTD26, ID **27437**, https://hhtd.honhai.com/images/highlight/opening-day/04.jpg
  3. Schneider Electric's AI data center power and networking presentation, ID **27438**, https://hhtd.honhai.com/images/highlight/opening-day/06.jpg
- WordPress posts.get(context=edit) confirmed three unique `wp-image-NNN` blocks and adjacent original donation QR ID 24043. Public posts.get(context=view) confirmed all 3 actual in-story photographs plus original QR appear as distinct HTML img tags with correct image URLs. Cover excluded from the three in-story media quota.
- No YouTube/X players included because no same-event video ID was independently verified. Avoids a non-playing generic clip.
- Exact italic Editor's Note and original donation QR text/ID 24043 preserved; no additional promo footer or disclaimer. Featured cover verified ID 27441.

## QA incident & repair
- During pre-archive primary-source link improvement, a scoped Gutenberg paragraph replacement accidentally used the truncated block preview, cutting the lead. Detected immediately on an authenticated post fetch-back because the original text "Its showcase puts electrical power, cooling, optical networking and industrial robotics" was missing. Replaced the first paragraph again using the **complete original lead**, with the verified company-issued press-release link, via scoped post-sections.replace. A subsequent authenticated fetch-back verified full lead text restored. **No truncated version was archived or left published at completion.**
- Root cause: post-sections.list `inner_html_preview` is a preview and can truncate paragraph text; do NOT use it as authoritative complete content in edits. Prevention: derive the replacement from full posts.get(context=edit) source; validate exact-length paragraph after save. Fix → re-fetch → revalidate completed.

## Archive verification and limitations
- WordPress posts.create returned `publish`, and final posts.get(context=edit) and context=view confirmed published with expected featured image, 3 event images, full lead and fixed footer.
- GitHub archive path `archive/2026/10/27443-foxconn-hhtd26-nvidia-vera-rubin-ai-factory-321-exhibits-2026.gutenberg.html`, commit `c622fab2e36a945c05929add856303321cc644ab`. Fetched final WordPress edit content and GitHub main content; **exact byte-for-byte match: true**.
- Browser-only visual inspection at mobile/desktop sizes and image load after navigating public URL not independently carried out. WordPress render API proves each image tag is present and media import succeeded; it does not prove every reader's browser loads the file.
- Regression: source uniqueness checks, source photo chronology, exact 1200x630 cover, three distinct in-story primary-source images, captions, exact original footer, and saved-versus-rendered API inspection.
