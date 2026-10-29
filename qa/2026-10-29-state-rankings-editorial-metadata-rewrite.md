# State Power Rankings: Metadata and Social Copy Editorial Correction

Date: October 29, 2026. Trigger: editor identifies templated, unnatural excerpts and social descriptions, particularly Maine #26992: “Three sourced YouTube video embeds and verified project status.”

## Root cause

Previous generation treated publication metadata as a technical inventory and editorial compliance checklist (“documented historic projects,” “sources,” “verified project status,” “embed counts,” “power methodology”), rather than distilling the news into an engaging, clear sentence. Repeating the headline and mechanically enumerating three MW figures created an obviously automated voice.

## External editorial comparisons

- Maine Public, “Developer halts plans for data center at former Jay paper mill” (June 12, 2026), https://www.mainepublic.org/climate/2026-06-12/developer-halts-plans-for-data-center-at-former-jay-paper-mill — headline leads with meaningful change, first paragraph explains who exited and what is on hold.
- Data Center Dynamics, “Sentinel DC backs off paper mill data center project in Maine” (June 12, 2026), https://www.datacenterdynamics.com/en/news/sentinel-dc-backs-off-paper-mill-data-center-project-in-maine/ — concise actor/action/impact structure.
- Maine Public, “Why New England doesn't have large AI data centers, and what the region is doing to prepare for them” (October 23, 2026), https://www.mainepublic.org/science-and-technology/2026-10-23/why-new-england-doesnt-have-large-ai-data-centers-and-what-the-region-is-doing-to-prepare-for-them — thematic explanatory headline and human context, no publication-process description.
- Existing BitcoinVersus.Tech story “Google’s Michigan Data Center Gets 20-Year Power Deal With Ratepayer Guardrails” (post 20319) also uses a meaningful direct subject/verb/why-it-matters lead rather than stating source types.

## Fixed in live WordPress

Each post had its **excerpt.raw**, **meta.advanced_seo_description**, and **meta.jetpack_publicize_message** replaced. Fresh independent **posts.get(context=edit)** confirmed all three exact new fields while each post remained published. Original title, body content, featured media, categories, and article URL were preserved.

| State | WordPress post ID | Article link |
| --- | ---: | --- |
| Iowa | 26940 | https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-iowa-2026/ |
| Kansas | 26947 | https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-kansas-2026/ |
| Kentucky | 26959 | https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-kentucky-2026/ |
| Louisiana | 26979 | https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-louisiana-2026/ |
| Maine | 26992 | https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-maine-2026/ |
| Maryland | 27015 | https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-maryland-2026/ |
| Massachusetts | 27035 | https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-massachusetts-2026/ |
| Michigan | 27077 | https://bitcoinversus.tech/2026/10/29/state-power-rankings-top-3-largest-data-center-projects-michigan-2026/ |

## Mandatory future editorial preflight

- **Lead with what happened**: who, what changed, where, significance, current status; for rankings, convey the larger pattern or tension connecting the projects, not just a list of ranked metrics.
- Use the title for clear identification and the excerpt for an engaging news summary. Do **not** open every excerpt with a mechanical paraphrase of the series title.
- Make SEO descriptions readable English, topical, specific to actual people/companies/places, approximately 110–160 characters, never keyword-stuffing or self-certifying language.
- Social copy is natural, clear and independently engaging; ideally 1–2 short sentences, enough context to make sense without article headline, no generic “Read our ranking” listicle template unless meaningful.
- Technical terms such as MW are acceptable when genuinely explanatory, but no need to list every site and its entire set of source data in meta descriptions. Distinguish “proposed,” “permitted,” “under construction,” and “operating.”
- **Never advertise the writing/publishing process in promotional copy**: no “verified media embeds,” “source-backed,” “project status and videos,” “2–10 media items,” “power methodology,” “SEO,” “we researched,” or claims of verification.
- Read 2–3 relevant stories from independent credible news publishers before finalizing metadata. Compare actual titles and subheadings for meaningful nouns, accurate verbs and rhythm, but do not copy their wording.
- Preserve mandated exact series titles where required. Make individual story section headings and social copy reflect the actual story, not compliance notes.
- Quality gate: show the draft excerpt, SEO description and social message to an independent editorial read; if it reads like a QA checklist or a repeated title, rewrite before publishing.
- Existing syndicated social posts on external services do NOT retroactively change if WordPress sharing metadata changes. This change updates stored metadata and future manual reuse, not an external published post.

## Status and scope

**COMPLETE**: eight posts' current WordPress excerpts, SEO descriptions and Jetpack publicize messages corrected and independently read back. WordPress article source content is unchanged, so existing exact Gutenberg GitHub archives remain valid without rewriting source files. External previously distributed social posts remain unchanged. No automatic external social re-publication was performed.
