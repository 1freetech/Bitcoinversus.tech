# Rendezvous Robotics video embed rendering repair — v2

- Date: 2026-11-01
- Post ID: 28456
- Published article: https://bitcoinversus.tech/2026/11/01/rendezvous-robotics-20-million-seed-seven-tile-spacecraft-2028/
- Problem: three core/embed Gutenberg blocks were preserved in WordPress editor markup but WordPress REST rendered-view returned plain clickable video URLs rather than iframe players.
- Root cause observable: server-side oEmbed rendering fell back to anchor markup; the individual video IDs were not absent from their actual publisher pages.
- Official WordPress.com guidance: https://wordpress.com/support/troubleshooting-embed-links-and-shortcodes/ and https://wordpress.com/support/wordpress-editor/blocks/shortcode-block/ document shortcode form `[youtube https://www.youtube.com/watch?v=ID]`.
- Independent primary-source validation:
  - MIT Media Lab https://www.media.mit.edu/posts/building-tomorrow-s-space-habitats-one-tile-at-a-time/ embeds `4MuyVuQHW_g`.
  - Aurelia Institute https://www.aureliainstitute.org/posts/tesserae-pavilion-video links to `rgGmn3tarbY`.
  - Space Startup News video `GHbZxi_a_7c` is titled "Rendezvous Robotics: Building Large Scale Self-Assembling Structures in Space", published September 16, 2025. Verified source identity through public YouTube metadata.
- Repair method: FIX → RETEST → REPLACE → REMAKE. FIX was sufficient.
- Changed precisely three blocks using post-sections.replace rather than full-post rewrite. Used content hash, modified token and block hash for conflict-safe updates at positions 3, 8 and 13.
- Original core/embed URL-wrapper blocks replaced with native WordPress.com core/shortcode blocks:
  1. `[youtube https://www.youtube.com/watch?v=4MuyVuQHW_g]`
  2. `[youtube https://www.youtube.com/watch?v=rgGmn3tarbY]`
  3. `[youtube https://www.youtube.com/watch?v=GHbZxi_a_7c]`
- Post-save WordPress REST editor readback: exactly 3 youtube shortcodes; no remaining core/embed blocks for those videos.
- Post-save WordPress REST rendered view readback: exactly 3 actual `iframe.youtube-player` elements with `www.youtube.com/embed/{id}` source URLs; all three prior anchor-only fallback versions absent.
- Captions follow corresponding video blocks; 3 original captions retained. No extra decorative text boxes.
- WordPress status remains publish; featured cover media ID 28453; canonical QR media ID 24043; Editor's Note appears once and disclaimer remains intact.
- Quality gate status: SOURCE CHECKED, BLOCK REPLACED, SAVED MARKUP VERIFIED, WORDPRESS RENDERED HTML VERIFIED. External independent mobile/desktop browser playback remains UNVERIFIED. Do not mistake iframe DOM presence for actual successful video playback.
- No need to replace video material or remake the story; server-rendering defect was repaired.
- Regression test: inspect WordPress posts.get(context=view) for actual `iframe` on each embed, rather than merely relying on posts.get(context=edit); if a video renders as a link, try shortcode fallback supported by site and re-test. Actual video playback still requires browser media play tests before fully verified status.
- Next improvement: test player click-to-play on real public desktop and mobile clients and record embed availability separately for each video.
