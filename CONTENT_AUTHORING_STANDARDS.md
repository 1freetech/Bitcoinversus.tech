# BitcoinVersus.Tech Content Authoring Standards

## Authoritative Lesson Presentation Standard — November 1, 2026 (Supersedes October 28 Title Rule)

**Every newly published Open CERT / TechCert educational lesson must display its unique curriculum ID at the beginning of the reader-facing WordPress post title.** Use the canonical course/lesson identifier followed by a colon and a descriptive topic, for example: `OSHRE.003: Diagnosing Missing ASIC Chips on a Hashboard`, `OSFTC.015: Brownout Reset Diagnostics in Embedded Firmware`, or `OSHistory.016: {topic}`. Keep the ID in the WordPress post title, SEO title, curriculum registry and GitHub archive metadata, and verify all match before declaring publication complete. Preserve existing track abbreviations, zero-padded numbering, progression and unique ID assignments; never recycle a lesson number or substitute decorative `Lesson 3` as the ID.

**The main lesson body must still use a textbook / wiki / encyclopedia / dictionary presentation.** Section headings should be conceptual and unnumbered, such as `Signal Path Basics`, `Electrical Characteristics`, `Failure Modes`, `Practical Examples` and `References`. Avoid `1. Signal Path Basics` or `Chapter 2` as decorative navigation. Include precise definitions, linked terminology, specifications, sourced examples, relevant verified media, knowledge checks and appropriate safety boundaries. Number items only where a real ordered procedure, ranking or technical standard requires it.

**This November 1 instruction explicitly reverses the October 28 rule that hid curriculum IDs from public lesson titles**, while retaining the October 28 prohibition on decorative numbering in section headings and body prose. Apply the title-ID requirement to all future main and specialty lessons, including OSHRE and OSPCB. For previously published lessons, correct the title when specifically requested; do not mass-rename historical posts or alter live URLs without the editor's direction. All existing media, cover, sourcing, internal linking, footer, QA and archival requirements remain in effect.

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

## Featured Cover Rotation: Fine-Art Painting Addition — October 29, 2026

The editor has added a **detailed professional fine-art painting family** to the established featured-cover rotation. Continue the existing realistic editorial photography, anime editorial artwork, wordless comic, photo/anime blend, and split-screen diptych styles, and now include an additional **professional oil-painting / Renaissance-inspired editorial art** turn, then repeat. For the new family, create sophisticated, richly detailed, nonminimalist compositions, with painterly textures, chiaroscuro, careful perspective, nuanced lighting, believable equipment, and the finish of a commissioned museum-quality professional painting. Renaissance-inspired visual language must remain historically informed as a *painting style*, while all depicted news subjects, technology and environments must accurately reflect the modern report. Rotate demographic representation across articles deliberately and naturally: vary apparent ages, genders, complexions and professional roles rather than repeatedly depicting the same kind of subject. Do not assume or present the depicted people as actual individuals unless the image is a sourced photo.

Maintain one unique 1200×630 featured image per article, attach as featured media, add specific descriptive alt text, ensure subject relevance, and confirm it renders. No text overlays or original diagrams as in-story media. Oil-painting covers are **editorial illustrations**, not documentary photographs; use source/official photos and videos for documentary in-story evidence. Continue source, in-story media, footer, SEO and QA rules unchanged.


## Strict Sequential Featured-Cover Rotation — October 30, 2026

The editor requires that future BitcoinVersus.Tech publication covers use **only an accepted featured art style, and advance exactly one style per publication in order**. Do not pick a style at random, skip a turn, reuse the last style as a shortcut, or invent an alternative look. Approved sequence:

1. Realistic editorial photo / photorealistic editorial illustration.
2. Anime editorial artwork.
3. Wordless comic artwork.
4. Photo/anime blended editorial illustration.
5. Visually explicit split-screen diptych: **two separate panels**, with a distinct clean division and complementary perspectives, not simply a single cinematic scene or vaguely symmetric composition.
6. Detailed professional oil painting / Renaissance-inspired fine-art editorial illustration.

Then repeat from realistic editorial. The sixth oil/Renaissance style is already approved by the October 29 style expansion above, not a newly invented style. The October 30 energy-source news run followed 1 Rooppur/nuclear (featured 27449), 2 Alliant/natural gas (27455), 3 Centralia/coal (27462), 4 Tianwan/solar (27471), and 5 Norway/floating wind (**corrected image 27512**, replacing 27494). For the **next item of this energy-source series (hydropower)** use approved style **6, fine-art oil/Renaissance**, then restart at 1.

For other story rotations, identify the last relevant approved cover style rather than assuming the beginning of a new cycle. Always confirm the next style before generation; rotate demographic representation only when people are naturally relevant, vary ages and roles, keep covers historically and technically responsible, use 1200×630, no text overlays, attach featured media and verify live featured_media and media dimensions. A style's label in media metadata is not sufficient: inspect the actual visual to confirm it visibly follows that style before publishing. When a correction is requested, replace the cover with the approved style for that turn, preserve the article body/media/SEO, and document old vs new WordPress media IDs in QA.
