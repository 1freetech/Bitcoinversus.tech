# OSC.008 Publication and Media QA

- Post ID: 33327
- Title: OSC.008: C Pointer Parameters and Nonce Buffers in a Proof-of-Work Lab
- URL: https://bitcoinversus.tech/2026/11/18/osc-008-c-pointer-parameters-nonce-buffers-proof-of-work-sha256/
- Published: 2026-11-18, WordPress.
- Previous OSC.007 was published concurrently as post 33325, so the existing OSC.007 draft post 33327 was corrected **before** publication to OSC.008, including the title, lead, curriculum link, excerpt, SEO, slug and cover metadata.
- Unique ID after revision: OSC.008, WordPress search returned no other publish/draft/future match.
- Editorial narrative: 602 words, excluding source code and footer.
- Categories: computer programming, Information Technology, Technology.
- Tags: C programming, Cybersecurity, proof of work.
- Original Proof-of-Power Wall image **reused unchanged**: WordPress media ID 11149, original March 2025 image URL, descriptive alt text in new article.
- Featured cover: original editorial oil painting, WordPress media ID 33330, dimensions 1200x630. Re-uploaded same cover from media 33326 to correct an obsolete OSC.007 filename, leaving post ID unchanged. Exact pixel-level reference-logo match not verified.
- YouTube video: freeCodeCamp.org official channel, `MIL2BK02X8A`, server-rendered as **one iframe** on WordPress view readback, no bare YouTube link.
- X embed: Anthony Scaramucci post `2121834933920354309`, server-rendered as a recognizable tweet blockquote; no invalid-tweet-ID error.
- In-story media: 1 original image + 1 YouTube iframe + 1 populated X post. Featured cover and recurring donation QR excluded.
- C11 demo compiled with `cc -std=c11 -O2 -Wall -Wextra -Werror ... -lcrypto` and ran successfully. Expected deterministic result: `nonce=67571 first_digest_bytes=0000`.
- Source code: `examples/c/osc-008-proof-of-work-nonce.c`.
- Internal links: 7 distinct contextual WordPress article URLs, including OSC.007, OSC.006, OSC.005, OSITC.015, the original 2025 Proof-of-Power Wall, Cloudflare API validation, and Softwar follow-up.
- Educational limitations: fixed challenge, low difficulty and no expiry, replay database or authentication. Not a deployable firewall or a malware prevention benchmark. No claim that PoW prevents most/all malware.
- SEO title, description, canonical URL and Open Graph featured image verified on public WordPress page.
- Public article HTTP 200, visibility public, no images missing alt, no empty links; code block retained.
- Browser-level video playback, post-script X interaction, mobile viewport test and exact logo comparison not performed.
- Footer: original editor note, 5000-sat QR media ID 24043 and financial-information disclaimer preserved.
- Exact final Gutenberg source: `archive/2026/11/33327-osc-008-c-pointer-parameters-nonce-buffers-pow.gutenberg.html`.

## QA lesson
A fresh post search just before publication caught concurrently published OSC.007. A numbering correction prevented a duplicate lesson ID. Future writes should check newly published posts again immediately before publish. Keep server-rendered iframe checks separate from verified browser playback. Reuse original media IDs when requested without presenting conceptual diagrams as deployed systems.
