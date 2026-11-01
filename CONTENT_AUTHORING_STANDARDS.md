# BitcoinVersus.Tech Content Authoring Standards

## Authoritative Lesson Presentation Standard — November 1, 2026 (Supersedes October 28 Title Rule)

**Every newly published Open CERT / TechCert educational lesson must display its unique curriculum ID at the beginning of the reader-facing WordPress post title.** Use the canonical course/lesson identifier followed by a colon and a descriptive topic, for example: `OSHRE.003: Diagnosing Missing ASIC Chips on a Hashboard`, `OSFTC.015: Brownout Reset Diagnostics in Embedded Firmware`, or `OSHistory.016: {topic}`. Keep the ID in the WordPress post title, SEO title, curriculum registry and GitHub archive metadata, and verify all match before declaring publication complete. Preserve existing track abbreviations, zero-padded numbering, progression and unique ID assignments; never recycle a lesson number or substitute decorative `Lesson 3` as the ID.

**The main lesson body must still use a textbook / wiki / encyclopedia / dictionary presentation.** Section headings should be conceptual and unnumbered, such as `Signal Path Basics`, `Electrical Characteristics`, `Failure Modes`, `Practical Examples` and `References`. Avoid `1. Signal Path Basics` or `Chapter 2` as decorative navigation. Include precise definitions, linked terminology, specifications, sourced examples, relevant verified media, knowledge checks and appropriate safety boundaries. Number items only where a real ordered procedure, ranking or technical standard requires it.

**This November 1 instruction explicitly reverses the October 28 rule that hid curriculum IDs from public lesson titles**, while retaining the October 28 prohibition on decorative numbering in section headings and body prose. Apply the title-ID requirement to all future main and specialty lessons, including OSHRE and OSPCB. For previously published lessons, correct the title when specifically requested; do not mass-rename historical posts or alter live URLs without the editor's direction. All existing media, cover, sourcing, internal linking, footer, QA and archival requirements remain in effect.

## Hashboard Repair Photo Rotation — November 1, 2026

**Every new OSHRE / Hashboard Repair Engineering lesson must use different, genuine hashboard photographs from every prior OSHRE lesson.** Find at least two distinct, newly sourced photographs of actual Bitcoin mining boards when verifiable relevant images are available. Prefer real hardware photographs that support the technical concept being taught—actual PCB, ASIC packages, connector interfaces, heat sinks, test equipment, and manufacturer board markings—over generic miner stock imagery. A newly generated featured cover never counts as a real in-story hardware photograph, and no synthetic diagram may be substituted for genuine source photography.

**Before publication, check the entire prior Hashboard Repair series and the curriculum photo ledger** for duplicate WordPress media IDs, duplicate original source URLs, identical underlying images reuploaded under different names, and near-duplicate crops of the same photograph. Images that appeared in an earlier OSHRE lesson are not eligible to be reused as a new in-story photograph, even if re-uploaded, resized or cropped. Select images from genuinely different source photographs, ideally across board models and component viewpoints. For older-generation equipment, label the real model and date clearly and never present the photograph as an S19/S21 when it is not.

**Attribute every real photograph** in a caption after the image with creator/source and the applicable license or image permission. Confirm that the source and asset are actually relevant and the media renders on the saved and published WordPress page. Store source URL, WordPress media ID, real hardware identity and lesson assignment in the course registry and GitHub archive. A direct link to a product image or video does not count as a working in-story media embed. Keep approved video media and cover rules, reader-facing curriculum IDs, the Editor's Note, original QR code, and disclaimer unchanged.

This rule applies prospectively starting with OSHRE.005. Older OSHRE.000–.004 lessons contained repeated photographs; preserve the historical files, but do not repeat those photos again in OSHRE.006 or later. If two licensed, genuinely distinct and relevant new photographs cannot be confirmed, explain the limitation and use other allowed functional media instead of recycling old hashboard photos.

## Internal Wiki Linking

Treat BitcoinVersus.Tech as an internal knowledge network similar to a wiki. Across news stories, evergreen guides, technical lessons, sports/gaming/culture coverage, coding articles, explainers, and other published content, naturally hyperlink important recurring terms to the most specific relevant existing BitcoinVersus.Tech article whenever one exists.

Link important technical and subject terms including components, hardware, software, protocols, standards, companies, systems, scientific concepts, technologies, people, categories, and recurring keywords. Examples include `PN junction`, `diode`, `p-type semiconductor`, `n-type semiconductor`, `charge carrier`, `forward bias`, `reverse bias`, `Shockley equation`, `ideality factor`, `resistance`, `capacitance`, `ASIC`, `GPU`, `Bitcoin mining`, `IPv4`, `RJ45`, `fiber`, `Linux`, `Python`, and similar concepts relevant to the article.

Prefer the most specific matching BitcoinVersus.Tech article over a generic category page. Prefer a prior explanatory article or lesson over a self-link to the page currently being written. Avoid irrelevant or forced links. When a useful internal article exists, link a key term on its first meaningful occurrence and repeat the link later only when it materially improves navigation or comprehension.

The goal is for BitcoinVersus.Tech to behave like its own internal Wikipedia: readers should be able to move naturally from one concept to related BitcoinVersus.Tech reporting, lessons, guides, and reference articles without leaving the site.

This rule applies site-wide and should be checked during editing, live-page inspection, and archive verification before publication is considered complete.


## Publication Footer Standard — October 29, 2026 (Supersedes Earlier Footer Rotation)

For **all new BitcoinVersus.Tech stories, rankings, editorials, and technical lessons**, do **not** include an advertisement label or section, a promotional X/Twitter post or link, or a decorative site-branding block in the article footer. The prior automatically embedded branded X promotion (status `1937006164555993338`) and the prior advertisement section have been retired and must not be automatically reinserted.

End each article with the approved, fully italicized volunteer Editor's Note, the **original** Bitcoin donation QR code (WordPress media ID `24043`), brief compatible-wallet scanning instructions including the established 5,000-satoshi request, and the existing mandatory financial-information disclaimer. Preserve the approved Editor's Note wording:

> *Editor's Note: We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our work and help further secure the integrity of our research initiatives, please scan the QR code below to donate 5,000 sats.*

This rule is forward-looking. On specifically requested article corrections, remove the retired promo, ad label, and extra footer branding without changing body content or breaking third-party media embeds; then verify the live WordPress read-back and rearchive the exact final Gutenberg content in GitHub. The required factual disclaimer remains in place.


## Newsroom Media Selection — October 29, 2026 (Video First, Images Fully Acceptable)

For all BitcoinVersus.Tech news reports, ranking stories, features, opinion editorials and Open TechCert lessons, **prioritize credible, directly relevant, functioning video embeds over still images whenever both are available**. Prefer videos from the original source (official organization, first-hand interview, primary video footage) and the established Yahoo Finance, Bloomberg and CNBC Squawk Box interview sources when they directly cover the story. Other credible first-party/independent videos remain eligible. When practical, position a video naturally in the story close to the paragraph about its subject.

**Official or appropriately credited editorial photographs, source-provided screenshots, observation images, and credible data visuals fully satisfy the in-story media quota on their own.** There is no required minimum video count when a source has no appropriate playable video. Maintain the established **2–10 distinct, directly relevant in-story media items** across all allowed types; a cover image and the Bitcoin QR code never count. A suitable source image is better than a loosely related generic video; never add unrelated video for the sake of reaching a video target. No original diagrams as in-story media. Reuse no generic video across unrelated stories.

For video use supported native Gutenberg player/shortcode/video blocks and verify the saved rendered post actually contains a functioning media player rather than a raw link. Verify actual playback wherever a browser/player test is available; distinguish visible player markup from proven playback. Use accurate attribution, relevant captions and appropriate spacing, and ensure each visual truthfully represents its date and subject. If video rendering/playback cannot be confirmed, try repair and replace with verified official/editorial images rather than falsely claiming a working embed. Images similarly must load in rendered output. Never include media verification counts or workflow wording in the article headline, prose, metadata or social excerpt.

## Supplied Social Embeds and Focused News Research — October 29, 2026

User-supplied X, YouTube and social post links are essential story media. Do not ignore or replace them with generic images. When the editor provides at least two directly relevant posts, embed at least two distinct supplied posts as functioning in-story media and verify their rendered output before saying the article is finished. Preserve original post IDs and attribution; do not treat a bare link as a functioning embed. If an embed fails, repair it or report the specific blocker rather than silently substituting media.

On the site's WordPress.com hosting, the native Shortcode block with [embed]https://twitter.com/USERNAME/status/POST_ID[/embed] rendered four original X posts successfully in Binance story 27111. The prior standard Twitter provider block and the [twitter url=...] shortcode did not work in that case. Verify each returned tweet blockquote and post ID; browser interaction remains a separate check.

For ordinary short news briefs, two or three credible, relevant external reporting sources plus direct primary material are generally sufficient. Move to writing after around five meaningful external pages unless facts conflict or material verification is missing. Accuracy always takes priority over arbitrary source counts.

## Approved Featured Cover Rotation — Revised November 1, 2026 (Subject-Only)

**Explicit editorial replacement of October 29–30 style and demographic policies.** The previously accepted sixth "Renaissance-inspired / oil-painting" category is removed from the approved rotation. Do not generate Renaissance photographs, Renaissance-inspired oil paintings, or visual variants marketed as that removed category. Historical references to the old policy survive only in Git history or prior audit records, not as active instructions.

All featured covers must **show the actual subject matter, work, material, mechanism, device, data, or event**. **No people**: exclude faces, bodies, silhouettes, hands, portraits, human figures, characters and anthropomorphic stand-ins. Do not place a person at a desk as generic shorthand for an IT or programming concept. Previous 12-slot alternating-gender/demographic roster is retired for new cover generation; there is no people-rotation rule anymore.

The only five accepted styles, in sequence, are:

1. **Realistic technical/editorial image:** technically grounded photos or photorealistic illustrations of the relevant equipment, materials, hardware or site; no people.
2. **Anime technical editorial artwork:** meaningful machinery, code execution concepts, materials or technology drawn in a polished anime style; no people.
3. **Wordless comic technical artwork:** panels illustrating an actual mechanism, sequence, or device operation with clear visual flow; no people.
4. **Photo/anime technical blend:** a realistic technical subject blended with an anime depiction of the same work or underlying mechanism; no people.
5. **Split-screen diptych:** two clearly divided complementary views of the subject, such as a device and its working principles or a measured condition and a corresponding technical workflow; no people.

After style 5, repeat from style 1. Do not re-add a Renaissance/oil-painting sixth style without a new explicit user instruction. Attractive painterly rendering within the current five styles may be used only when it clearly serves the depicted technical subject and is not a disguised Renaissance-style category.

For every news or lesson cover, first identify the precise article thesis, equipment or software behavior, and choose a composition that depicts it rather than a generic industry or workspace scene. Preserve one **1200×630** cover, accurate source/method labeling where needed, descriptive alt text, no readable decorative typography, and verified WordPress featured-media attachment. Prefer a genuine sourced photograph where exact documentary accuracy is necessary; generative art must never be misrepresented as an actual product or site photograph. In-body lesson media favors real relevant YouTube videos and sourced photographs rather than invented concept illustrations, consistent with the newest user instruction.

QA must verify the subject is visibly recognizable and that the image contains no human representation. Do not infer pixel-level success from an image title alone; inspect visually where possible. Publish status and media dimensions are checkable through WordPress, while unavailable public-browser playback or responsive screenshots remain explicitly unverified. Preserve the exact Editor's Note, donation QR, disclaimer, functional embeds and internal-link requirements.

**Cover corrections dated November 1, 2026:** OSGo.004 WordPress post 28259 switched from a person-centered Renaissance/oil style (media 28305) to subject-only wordless comic (media 28378). OSJavaScript.004 WordPress post 28365 switched from person-centered anime (media 28361) to subject-only anime technical illustration (media 28379). No existing lesson content or videos were intentionally removed in these featured-cover-only changes.


## Recursive Learning News Writer v4.0 — November 1, 2026

The editor has explicitly adopted **BITCOINVERSUS.TECH — RECURSIVE LEARNING NEWS WRITER v4.0** as an **additional research, publishing QA, scoring and continuous-improvement workflow** for subsequent news posts. It does **not** repeal, relax or silently amend any earlier substantive editorial law, publication/footer requirement, cover rule, embed rule, chart rule, or lesson-specific instruction contained in this document.

- **Operating specification:** [`editorial/RECURSIVE_LEARNING_NEWS_WRITER_V4.0.md`](editorial/RECURSIVE_LEARNING_NEWS_WRITER_V4.0.md).
- **Persistent versioned evidence ledger:** [`qa/learning-ledger-v1.json`](qa/learning-ledger-v1.json). Append the final article's sourced metadata, relevant prior corrections, verification scope, score and three prioritized improvements after each published news story.
- **Execution:** Recall → Research → Reason → Write → Verify → Publish → Evaluate → Learn → Repeat.
- **Target:** 95/100 quality score; accuracy, anti-duplication and functional-media rules remain mandatory gates. **Never call iframe presence an independent playback test** or claim desktop/mobile screenshots, positive ratings, analytics or traffic data when unavailable.
- **Regression protection:** Check the exact approved italic Editor's Note, original QR media **24043**, 5,000-sat instructions and disclaimer; do not substitute a different prior QR even when it looks similar. Keep photo/source licensing and chart-status caveats explicit.
- **Activation detail:** v4.0 arrived after the publication of WordPress post 27966. The story was audited and logged retrospectively. Only subsequent stories should be described as receiving the v4.0 prepublication workflow.


## November 1, 2026 — No Decorative Text Boxes; Directly Relevant Featured Covers

The editor requested removal or repair of decorative text boxes and cover images that do not communicate the actual story or lesson. This clarifies presentation and cover QA; it does not waive any substantive media, sourcing, curriculum, chart, or footer law.

- **Avoid boxed prose and decorative callouts.** Use normal Gutenberg paragraphs, headings, lists, tables and captioned media. Do not create colored, shaded, bordered or shadowed text panels solely for decoration. Inspect saved blocks and rendered HTML, including `core/group`, `core/cover`, `core/quote`, custom HTML, and paragraph inline styles, for hidden box treatments.
- **Preserve instructional code, without visual boxes.** Do not delete educational source code or console output merely to remove a boxed appearance. Render examples as semantic `pre/code` with transparent background, no border/shadow, readable monospace, sensible line wrapping and accessible labels. Apply consistent unboxed styling to inline code as well. Verify output text, backslashes, video blocks, figures, links and footer survive a layout change.
- **Cover relevance is an acceptance criterion.** Beyond matching a broad category, depict the central technology, event, hardware or specific concept of that particular article/lesson. For example, ownership/borrowing covers must communicate move/reference relationships, and control-flow covers should show branching/iteration rather than a generic person typing. Avoid repetitive generic desks or invented documentary-looking product imagery. Keep the updated five-style, no-human subject-only cover rotation, text-free 1200×630 dimensions, accurate alt text, and exactly one attached featured image.
- **Verification and traceability.** Re-read the published WordPress post, media ID and image dimensions after edits; check the absence of box blocks and the presence of all functional embeds. Visually inspect the actual cover and desktop/mobile layout when accessible; do not claim these checks passed from metadata alone. Preserve exact footer. Sync edited Gutenberg content and old/new featured media IDs to relevant GitHub archives. Record inaccessible visual checks as outstanding.

Remediated initial posts on November 1, 2026: OSRust.006 (WordPress 28228, cover 28222→28304, 10 code examples unboxed), OSGo.004 (28259, cover 28254/28281→28305, already borderless code), OSC.005 (28202, eight code examples unboxed), and OSITC.012 (28161, one code example unboxed). Audit of the latest 15 posts found no separate decorative text-box blocks; remaining core code wrappers in these identified lessons were converted.


## November 1, 2026 — Conceptual In-Body Images Replaced By Relevant Video

At the editor's request, do not fill Open CERT/TechCert lesson bodies with original generated conceptual pictures. Replace such in-body filler with topical, authentic, public YouTube demonstrations wherever relevant videos can be verified. Preserve one highly relevant accepted featured cover per lesson, including its 1200×630 size, art-style rotation and accurate alt text. This clarification does not require removing the original Bitcoin donation QR, genuine licensed documentary photos or indispensable source-backed diagrams when no responsible video substitute exists.

- **Video acceptance:** Confirm the actual YouTube video's subject, educational relevance and language; choose distinct videos rather than replaying a single video. Use native Gutenberg YouTube embed or verified rendered iframe markup, not a bare watch URL. Captions must immediately follow each video. Keep reasonable paragraph spacing between different media.
- **Fix → Retest → Replace → Remake:** After saving each replacement, retrieve WordPress rendered content and confirm real `<iframe>` elements contain the intended video IDs. Verify that removed conceptual image IDs no longer appear, original approved footer/QR remains and code/examples are unchanged. If an embed renders only a URL or fails, repair the embed, change source or remake the media section before declaring it complete.
- **Historical repair record:** November 1, 2026: OSRust.006 (28228) now four unique video players, OSGo.004 (28259) five, OSC.005 (28202) four, and OSITC.012 (28161) four. Two original conceptual images removed from each; all eight were replaced with directly relevant source-verified YouTube video embeds and saved WordPress rendered-iframe checks passed. The main JavaScript rotation lesson OSJavaScript.004 (canonical post 28367) uses three relevant YouTube embeds and no original concept images inside the story.
- **Limitations:** Rendering a YouTube iframe in WordPress is not proof of actual playback on a reader's device. Continue to distinguish verified markup from live-device playback and desktop/mobile visual tests. Synchronize corrections to all available editorial source archives.
