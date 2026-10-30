# Publication QA — Enphase IQ SST 13.8 kV → 800 VDC Laboratory Test
Date: October 29, 2026. Post 27207.
Published URL: https://bitcoinversus.tech/2026/10/29/enphase-iq-solid-state-transformer-13-8kv-ac-800vdc-lab-test-2026/

## Primary reporting and duplicates
- Primary source: Enphase Energy October 27 2026 lab demonstration announcement, https://investor.enphase.com/news-releases/news-release-details/enphase-energy-successfully-demonstrates-iq-solid-state
- Supporting primary source for earlier manufacturing footage: https://newsroom.enphase.com/news-releases/news-release-details/enphase-advances-iq-solid-state-transformer-development-ai-data
- Confirmed test: 13.8 kV AC → 800 V DC, 132 coordinated modules, three phases with 44 in series per phase, step changes simulating AI demand, Austin lab. Each reported 5.5 kW module and 34.5 kV / full-scale future milestones attributed to manufacturer. No independently audited efficiencies or actual data center energy savings claimed.
- Live WordPress checked terms "Enphase solid-state transformer", "Enphase Infineon 900", "13.8 kV 800", and final "Enphase 13.8". Found pre-existing Enphase September manufacturing update and October 26 Infineon component story, but no October 27 integrated lab test story. GitHub search checked "Enphase solid-state transformer"; prior archive contained related background, no exact event story.
- Written as separate system-level validation news, without relabeling previously reported chip-component development as new.

## Cover, media and editorial structure
- Featured media 27206: unique original realistic editorial laboratory illustration, exactly **1200×630** verified on WordPress media.create. Source is a generated illustration, not a photo from the Enphase lab. Source URL: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/enphase-iq-sst-oct2026-editorial-cover-1200x630-attempt-1.png
- Initial generated 1730×909 upload 27203 was re-imported via Jetpack image resizing to produce the 1200×630 featured file; featured ID is **27206**. Unused initial media item is not attached.
- 3 separate in-story items:
  - Manufacturer IQ SST rack promotional image media **27204**, 1080×1080, sourced from Enphase's official X image at https://pbs.twimg.com/media/HKZVI4KW0AAnNxV.jpg ; described as a manufacturer render rather than the actual lab setup; published WordPress https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/enphase-iq-solid-state-transformer-1-25mw-official-rack-promo.jpg
  - Official Enphase YouTube video `https://www.youtube.com/watch?v=7oa1PwAwqDg`, "Enphase IQ SST: Power Modules Now Being Built in Texas", published September 8, 2026 by Enphase Energy, verified through source video metadata; native responsive Gutenberg YouTube embed with direct watch fallback. Caption states this is earlier Arlington, Texas manufacturing footage and **not** the October 27 Austin lab test.
  - Manufacturer compact power-module product illustration media **27205**, 1080×1080, from official Enphase social image at https://pbs.twimg.com/media/HHgUiW7XQAE88ps.jpg ; correct manufacturer illustration caption. WordPress https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/enphase-iq-sst-small-power-module-official-render.jpg
- 317-word news brief excluding captions and fixed footer, 4 contextual internal article links, direct Enphase primary source, accurate milestone distinction.
- Original exact italic Editor's Note unchanged and original Bitcoin donation QR media 24043 immediately after. No appended disclaimer.
- WordPress posts.get fetch-back confirmed status `publish`, featured cover media ID 27206, correct 2 official image blocks, canonical video, fallback link, footer and QR. 3 in-story media items.
- Original saved WordPress Gutenberg code archived exactly at `archive/2026/10/27207-enphase-iq-solid-state-transformer-13-8kv-ac-800vdc-lab-test-2026.gutenberg.html`, commit `fa865e52790c1abcbbb8dc48c4b3925df125a1a9`. Fetched both; exact match: **true**.

## Outstanding testing and error prevention
- Native WordPress block with canonical video ID and source metadata has been confirmed, but actual YouTube **click-to-play inside live article not independently verified**. Do not treat a Gutenberg embed as proof of functional playback.
- Live desktop/mobile browser screenshot review and exact visual image rendering not independently performed. Media library records establish successful import and file dimensions, but not necessarily client render.
- Future regression: validate cover **actual uploaded dimensions**, use at least 2 distinct legitimate in-story media even when video may not play, identify source video channel and publication date, distinguish previously produced footage from the new claim, confirm mobile/video in a browser where available, and archive exact final content after edits.


## Repair — YouTube embed rendering (October 29, 2026)
- **User request:** fix the embedded Enphase video or remake story; retained and repaired original published post 27207.
- **Confirmed root cause:** `posts.get(context=view)` returned a bare clickable YouTube watch URL inside `wp-block-embed__wrapper`, with **no `<iframe>` player**. This distinguished a saved `core/embed` from an actual rendered playable video element.
- **Genuine source verified:** Enphase Energy official YouTube channel, *Enphase IQ SST: Power Modules Now Being Built in Texas*, published 2026-09-08, video ID `7oa1PwAwqDg`, https://www.youtube.com/watch?v=7oa1PwAwqDg. Company press release of 2026-09-08 links to its manufacturing video: https://newsroom.enphase.com/news-releases/news-release-details/enphase-advances-iq-solid-state-transformer-development-ai-data . This video predates and is background for the Oct 27 Austin 13.8kV lab test.
- **Repair:** in-place block-level replacement at section index 6. Submitted a responsive YouTube iframe in a `core/html` block; WordPress explicitly sanitized the iframe and **automatically replaced it with its own `[youtube https://www.youtube.com/watch?v=7oa1PwAwqDg&w=560&h=315]` shortcode**. That is the final saved source of truth, not the submitted raw iframe.
- **Independent rendered HTML check:** a fresh WordPress `posts.get(context=view)` returned an actual `<iframe class=\"youtube-player\" ... src=\"https://www.youtube.com/embed/7oa1PwAwqDg?...\">\</iframe>` plus a functional direct-watch fallback and an accurate caption. The original rendered bare-link defect is therefore **fixed**. This confirms rendered player markup **but not successful click-to-play playback**, which could not be independently tested.
- **Non-media content preserved:** two official Enphase product images (IDs 27204 and 27205), exact 1200×630 featured cover ID 27206, factual text/links, exact immutable italic Editor's Note and original Bitcoin donation QR ID 24043. No new or duplicate story created.
- **Archive:** the original GitHub Gutenberg archive was updated to match the actual WordPress-sanitized shortcode, commit `be3f9e8c8c0033be7d684d57de7b2b14ff4cd560`. Post-repair WordPress edit content versus GitHub archive exact byte match: **true**.
- **Remaining manual checks:** verify play/pause and video error states in a real browser and inspect mobile/desktop layout. The WordPress view API output proves the iframe is rendered, not that a user's player loads and plays media.
- **Regression control:** for every YouTube story, check both editor save (`context=edit`) and **final rendered WordPress HTML (`context=view`)** for an actual iframe; if the native core/embed resolves to a URL-only fallback, use the site's supported YouTube shortcode and recheck. Do not confuse an HTML save warning with final rendered behavior: inspect what WordPress actually retained.
