# OSFTC.014 publication QA — 2026-10-29

- Curriculum: Open Source Firmware Technician Certification, OSFTC.014, immediately following OSFOEC.013 in rotation.
- Title: OSFTC.014: MCUboot Test Upgrades — Image Confirmation, Revert and Recovery Validation
- WP post ID: 27178
- URL: https://bitcoinversus.tech/2026/10/29/osftc-014-mcuboot-test-upgrades-image-confirmation-revert-recovery-validation/
- WP status: publish (verified by posts.get)
- Cover: WordPress media 27177; 1200×630 original anime editorial JPG; alt text present.
- In-story media: two native Gutenberg YouTube blocks, both identified by authoritative Nordic Developer Academy references:
  - David Brown MCUboot swap-scratch algorithm: https://www.youtube.com/watch?v=KFgK3TRDNR4
  - David Brown MCUboot swap-move algorithm: https://www.youtube.com/watch?v=TNvUHJ_NSo8
- Render verification: WordPress posts.get(context=view) returned two YouTube embed iframes, an X/Twitter embedded blockquote, and the original QR image (ID 24043).
- Footer: established X promo, italic Editor's Note, original donation QR, 5,000 sats instruction, destination address and mandatory disclaimer all saved.
- Internal links: nine relevant BitcoinVersus.Tech lessons.
- Sources: MCUboot main design documentation, Zephyr MCUboot API and image-management API, Nordic Developer Academy, Nordic serial recovery, Zephyr MCUmgr SMP server.
- Duplicate search: no OSFTC.014 WordPress result and no OSFTC.014 GitHub archive result before creation; prior OSFTC.013 already published.
- Exact content: 22,971 characters. Retrieved WP edit source equals all three archive copies byte-for-byte.
- GitHub blob sha: c68e2586bb4c1f1e736c17594a8dc4a8388a532f
- Mirrors:
  - 1freetech/Bitcoinversus.tech/archive/2026/10/27178-osftc-014-mcuboot-test-upgrades.gutenberg.html
  - 1freetech/techcert/archive/2026/10/27178-osftc-014-mcuboot-test-upgrades.gutenberg.html
  - 1freetech/opencert.tech/archive/2026/10/27178-osftc-014-mcuboot-test-upgrades.gutenberg.html

## Open verification limits
- Native embed HTML is present, but an actual logged-in browser playback test on both video embeds has not been performed.
- Full desktop/mobile visual screenshot inspection has not been performed.
- Footer X embed HTML was returned by WordPress; client-side script success was not directly observed.
- Image-media metadata confirms original cover 1200×630, but responsive frontend display was not visually inspected.

## Error fingerprint and regression action
- Key: `EMBED_MARKUP_PRESENT_PLAYBACK_UNPROVEN`.
- Cause: WordPress REST render inspection cannot directly observe playback, responsive layout, or client JavaScript.
- Mitigation: distinguish render proof from playback proof; never count raw URLs as videos; preserve two real native YouTube block sources, archive exact saved markup.
- Regression test: open live article at desktop and mobile widths, play each video, inspect X render, featured cover, QR and footer, and verify no damaged block markup.
