# BitcoinVersus.Tech — Ferveret–MIT HPC cooling — publication quality ledger — 2026-10-28

- **WordPress post:** 26874, published and fetched back in edit and rendered-view modes: https://bitcoinversus.tech/2026/10/28/mit-ferveret-rack-immersion-cooling-35-percent-compute-capacity-2026/
- **Final exact Gutenberg archive:** [GitHub archive](../../archive/2026/10/26874-mit-ferveret-rack-immersion-cooling-35-percent-compute-capacity-2026.md) fetched independently after WordPress publication. Archive retains SEO, category IDs, cover ID, body, media blocks and footer.
- **Headline:** "MIT Researchers Deploy Ferveret Cooling as Company Targets 35% More Compute".
- **Factual verification:** DCD 2026-10-27 https://www.datacenterdynamics.com/en/news/ferverets-in-rack-immersion-cooling-deployed-on-hpc-infrastructure-at-mit/ reports use by MIT researchers on AI/nuclear-materials work. MIT's original June 2026 primary technical explanation is https://news.mit.edu/2026/nuclear-inspired-cooling-system-ferveret-could-make-data-centers-more-sustainable-0610 ; corporate equipment specifications appear at https://www.ferveret.com/data-center .
- **35% distinction:** Company/vendor performance scenario for combined cooling and intelligent power controls at a fixed power envelope; **not** an independently verified campus-wide benchmark or 35% more physical GPUs. MIT's older 15% server-level power-efficiency improvement is separately attributed and is not conflated with facility-wide results.
- **Archive deduplication:** Live WordPress search terms "Ferveret", "Adaptive Phase Cooling", "Reza Azizian" and "Ericmoore Jossou" each returned zero dedicated stories; 2023–present repository search likewise no Ferveret article. Context links to Power Efficiency Theory, cooling technologies, and mining hardware were verified live.
- **Words and editorial lint:** 374 words including key takeaways and image captions excluding Editor's Note/footer; 4 contextual internal links; original MIT, Ferveret and DCD sources in exact noun-linked anchors; prohibited term lint clear.

## Cover and in-story media

- **Featured cover ID:** 26868; created from original generative anime editorial scene, resized and verified 1200 × 630 pixels. This is fifth-style sequence reset to **Anime Editorial Artwork** after the immediately preceding natural-gas Realistic Editorial Photography cover (style 1). The cover is illustrated, not a photograph and is never counted as body media.
- **Official in-story media ID 26869:** Ferveret Lambert 4U modular equipment from its company website, labeled as company product photography, not an independently verified MIT installation.
- **Official in-story media ID 26870:** Ferveret Lambert rack product view from corporate website, attributed and labeled promotional material, not proof of where MIT installed it.
- **Source URLs:** https://www.ferveret.com/data-center ; imported as distinct WordPress media assets with source metadata and embedded using Gutenberg native `wp:image` blocks.
- **Two-media quota:** 2 relevant in-body media objects. Cover and original 5,000-sat QR (ID 24043) explicitly excluded; no generated diagrams embedded. No YouTube or social link counted without verifying a relevant specific piece of playable/visible original media.
- **WordPress prepublication & postpublication rendered HTML:** both media class IDs present, alt and caption text present, 5,000-sat QR present, no empty image source tags, caption provenance and original primary source links intact.

## QA fingerprints, blockers and regression tests

- **Fingerprint:** `BV-26874-UNVERIFIED-35PCT-ATTRIBUTION-RISK`
  - **Potential failure:** Treating an up-to-35% vendor estimate as a measured MIT production or data-center-wide efficiency gain.
  - **Root cause:** Headline number blends company discussion of server-level thermal improvements and software/plant-level opportunities; results vary with baseline/workload/facility.
  - **Preventive fix:** Headline explicitly says "Company Targets"; lead specifies "company claim"; article differentiates 15% prior test and full-site uncertainty, while requesting sustained measurement before inclusion in capacity forecasts.
  - **Regression:** Every future percent-gain story must label who measured what at which layer (GPU, server, rack, facility), comparison baseline, published test conditions, and whether the result is measured or hypothetical.
- **Fingerprint:** `BV-26874-MISSING-LIVE-VISUAL-PROOF`
  - **Observed blocker:** Accessible tools included WordPress REST rendered HTML, but no interactive desktop/mobile browser screenshots or actual image pixel-loading verification from the published public website.
  - **Root cause:** Browser/screenshot capability unavailable for the authenticated WordPress public page.
  - **Mitigation:** Ran draft and published WordPress fetch-back validations, verified cover dimensions from WordPress media.get, and independently fetched final GitHub archive. **Do not claim** that returned HTML or image source alone proves a visible image.
  - **Regression:** Use browser at 1440px / 375px, capture screenshots showing all media and footer, inspect layout and actual image rendering. After any media repair, update published Gutenberg content and GitHub archive.
- **Overall:** Publication PASS; cover pixel size PASS; media DOM and attribution PASS; internal/external links present PASS; accurate claim classification PASS; GitHub archive fetch-back PASS. Desktop screenshot UNTESTED; mobile screenshot UNTESTED; actual media loading UNTESTED. No video playback test applicable.
