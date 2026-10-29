# BitcoinVersus.Tech publication QA ledger — OSEEC.024

**Date:** October 29, 2026 (WordPress site-local)  
**WordPress ID:** 26951  
**Curriculum ID:** OSEEC.024 (following Windows/IT OSITC.011 in rotation)  
**Title:** OSEEC.024: Control-Circuit Voltage Drop — Contactor Pickup and Transformer Regulation  
**Public URL:** https://bitcoinversus.tech/2026/10/29/oseec-024-control-circuit-voltage-drop-contactor-pickup-transformer-regulation/  
**Status:** WordPress `publish`, independently fetched back via owner content authoring tool.

## Article and editorial checks

- Context: follows OSEEC.023 control transformer sizing and connects OSEEC.020 motor control, OSEEC.022 ladder troubleshooting, OSEEC.017 motor starting, OSEEC.015 power quality, electrical fundamentals, transformer fundamentals, arc-flash safety, and LOTO.
- Subject checked against WordPress lesson index and GitHub archive; no previously published OSEEC.024 or exact same standalone topic was found.
- Technical primary sources include Schneider Electric control-transformer inrush FAQ https://www.se.com/us/en/faqs/FA99381/ ; control transformer overview https://productinfo.se.com/nadigest/5c51d645347bdf0001f1f280/Master/17714_MAIN%20%28bookmap%29_0000061044.xml/%24/Control-Transformers-Overview ; low coil voltage hazards https://www.se.com/ca/en/faqs/FA325555/ ; distant control FAQ https://www.se.com/us/en/faqs/FA411694/ ; Schneider TeSys remote-control technical catalog https://iportal2.schneider-electric.com/Contents/docs/A6%20-%20COORDINATION%20AND%20STANDARDS_EN_CATALOGUE.PDF ; Littelfuse chatter application note.
- Worked examples explicitly identified as fictional illustrative estimates, including assumed impedance, inrush VA and transient secondary voltage; AC inductive phasor limitations made explicit.
- In-story media: two distinct canonical Gutenberg YouTube blocks. The Engineering Mindset `https://www.youtube.com/watch?v=qRiMFmILd8k`, independently linked from https://theengineeringmindset.com/basic-transformer-calculations/ ; Ansys Innovation Space `https://www.youtube.com/watch?v=gRF8B3ZZ68M`, independently linked from https://innovationspace.ansys.com/courses/courses/understanding-transformers-efficiency-regulation-circuits/lessons/understanding-regulation-in-electrical-machines-lesson-9/ .
- Video relevance/source attribution independently verified from original publisher pages; actual in-page YouTube **playback not verified**.
- Unique 1200 × 630 featured cover WordPress media #26950; image size independently retrieved from WordPress media.get; alt text included.
- Donation QR WordPress media #24043 retained. The requested unchanged volunteer Editor's Note wording is present and italicized in Gutenberg source.
- No in-story original diagrams; no prohibited vocabulary; two canonical embedded media blocks; contextual inline internal hyperlinks and direct manufacturer source links.
- WordPress publication call returned `status=publish`, no `_content_warnings`. Subsequent fresh posts.get confirms post status, exact heading, cover ID, 2 YouTube embed blocks, and QR.
- Archive: [exact final WordPress Gutenberg content](../../archive/2026/10/26951-oseec-024-control-circuit-voltage-drop-contactor-pickup-transformer-regulation.gutenberg.html) (commit `f6a699ad0b3daa6034886d8a202526950cf7fba3`). Independently fetched current WordPress saved post source and the GitHub archive; **exact string equality passed**, 18473 characters. Archive blob SHA `95038cacff3e8d50b35a2080a09e2864dfc3152b`.

## Limitations and regression check

- `VISUAL-QA-UNAVAILABLE/LIVE-EMBED-PLAYBACK-NOT-TESTED`: No authenticated browser screenshot verification of desktop/mobile layouts or YouTube iframe playback. Direct public web fetch of permalink was inaccessible via browsing tool, while the owner WordPress connector confirms post publication.
- Next independent browser QA needs actual desktop/mobile screenshots, positive play-button initiation for both YouTube players, correct mobile media sizing, in-article spacing, hyperlinks and QR display.
- If failures surface, repair and retest up to three passes, verify final published source again, and re-archive the modified exact body.
- **Honest completion status:** Published and exact-content archived; saved media/metadata verified; visual/playback QA remains open.

## Embed regression repair — October 29, 2026 (follow-up)

- **User report:** Videos/embeds did not work in the live OSEEC.024 article; user requested direct repair or lesson remake.
- **Root cause confirmed in live WordPress rendered HTML:** the original Gutenberg `core/embed` wrappers had the YouTube URL inline with the wrapper `<div>` and `</div>`. WordPress public `posts.get(context=view)` returned an HTML `<a href="https://www.youtube.com/watch?...">` for each URL rather than an `<iframe>` — **zero YouTube players** in the rendered body even though two native block declarations were present.
- **Correction:** Retained both original-publisher-backed video URLs and original article ID. Changed each `wp-block-embed__wrapper` to contain the bare YouTube watch URL on its own line, separated from the opening and closing `div` by newline characters. This allows WordPress's YouTube auto-embed conversion to run.
- **Independent WordPress rendered-content regression:** After `posts.update`, fresh `posts.get(context=view)` returned **two iframe players**, with rendered iframe source URLs `https://www.youtube.com/embed/qRiMFmILd8k?...` and `https://www.youtube.com/embed/gRF8B3ZZ68M?...`. Featured cover #26950, original OSEEC.024 headline, 5,000-sat QR, references and article body were preserved. Gutenberg save returned no content warnings.
- **Verified publisher attribution:** The Engineering Mindset hosts the first YouTube embed on its own Basic Transformer Calculations tutorial page; Ansys Innovation Space links its second video from its course lesson on transformer regulation.
- **GitHub sync:** Corrected complete WordPress Gutenberg content written to the same canonical archive file at `archive/2026/10/26951-oseec-024-control-circuit-voltage-drop-contactor-pickup-transformer-regulation.gutenberg.html`, commit `01de641e97eaa9ae565316bd762894c3168a203d`.
- **Error fingerprint:** `YOUTUBE-URL-INLINE-IN-GUTENBERG-WRAPPER/AUTOEMBED-NOT-TRIGGERED`. **Prevention check:** Every canonical YouTube block must use bare video URL on its own line with a line break before and after; inspect `posts.get(context=view)` for an actual iframe `src=https://www.youtube.com/embed/...` corresponding to each media item. Count iframe players, not `<!-- wp:embed -->` declarations, before marking the render step passed.
- **Current QA boundary:** WordPress server-rendered player markup is now confirmed for **both** videos; actual interactive play-button initiation inside a browser and mobile/desktop screenshot review remain untested. Do not falsely state that playback was tested.
