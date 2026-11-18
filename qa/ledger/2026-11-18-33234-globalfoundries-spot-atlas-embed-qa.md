# Embed and Publication QA: GlobalFoundries Spot and Atlas, Post 33234

**Date:** 2026-11-18
**Article:** https://bitcoinversus.tech/2026/11/18/globalfoundries-boston-dynamics-spot-90000-inspections-atlas-2027/
**Word count:** 725 by Gutenberg prose, headings, caption and source text count before publication.

## Editorial checks
- Verified primary November 17 announcements from Boston Dynamics and GlobalFoundries, including expanded Spot plan in Malta NY, Burlington VT, Dresden Germany, Singapore; Singapore two robots, >90,000 inspections, ~900 km and stated 99% mission success rate; early 2027 Atlas skills and testing planned, not yet a production deployment.
- Searched WordPress publish/draft/future titles and GitHub for a matching announcement, with no duplicate found. Existing Boston Dynamics and GlobalFoundries coverage treats different earlier subjects.
- Confirmed four internal links as published post IDs: 20644, 32834, 25556, 33123.
- Cover: #33229, original cinematic anime 1200x630; neon green black-highlight watermark copied exactly from prior approved watermark image. Official in-story press photograph #33231, credited to Boston Dynamics with 2026 source and alt text. No cover duplication.
- Categories: Robotics, Semiconductors, Technology, Trending News. SEO description and title saved. Editorial ban words absent, unnecessary em/en dashes absent.

## Media verification and repair prevention
- Two authenticated official Boston Dynamics YouTube sources: `Fmj5r8ws2Mw` (2022 GlobalFoundries Spot case study) and `wL0-Pu_8F0U` (March 2026 Atlas design talk). Both are explicitly marked as archival background, not November 2026 field footage.
- Based on recurring WordPress.com Simple failure where native `wp:embed` renders as plain hyperlinks, used the tested core/shortcode fallback `[youtube https://www.youtube.com/watch?v=VIDEO_ID]` from the start.
- Draft `posts.get(context=view)` returned **two separate real iframe players**, one for each ID, with zero `wp-block-embed__wrapper` link-only fallbacks. Edit context still shows the shortcode blocks. The source was not accepted as render proof.
- Published **same post ID #33234**, then re-fetched view context: both `/embed/VIDEO_ID` iframe players remain present; official in-story image ID #33231 remains present.
- Public page SEO reader returned **HTTP 200**, canonical, Jetpack SEO title and meta description, OpenGraph featured cover, Article JSON-LD and no missing image alt attributes. Cover media getter reports exact 1200x630 dimensions.
- WordPress screenshot service returned `ready` screenshot links for desktop width 1200 and mobile width 390, but pixels were not independently inspected. The container environment cannot resolve the public website/YouTube domains for a browser-based test.
- **NOT verified:** actual video playback, click controls, cross-browser mobile layout, loaded external YouTube assets, screenshot visual inspection. Do not call these verified or count social media posts that were not embedded.

## Ongoing rules
- Verify video identities, save in supported Gutenberg block, inspect WordPress rendered view HTML per item; repair plain-link fallbacks with native supported shortcodes, then permitted custom embed or authentic substitute; retest before and after publishing. FIX → RETEST → REPLACE → RETEST → REMAKE.
- Preserve same post ID, editorial content, verified metadata, original cover and footer. Maintain independent distinctions among saved markup, rendered player, visible player and tested playback.
