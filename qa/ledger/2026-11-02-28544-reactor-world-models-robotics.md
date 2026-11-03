# Reactor Interactive AI Worlds — Recursive Editorial QA Ledger

## Article metadata
- Title: Reactor Shows Interactive AI Worlds for Robots—and a 2.2× Decoder Gain
- Publication date (WordPress): 2026-11-02T20:17:41 (site local time, 2026-11-02)
- Category: Artificial Intelligence / Robotics / Technology, YouTube-first lineup #4 following AA battery #3
- WordPress ID: 28544
- Canonical live URL: https://bitcoinversus.tech/2026/11/02/reactor-world-models-robotics-ai-video-60fps-decoder-speed-2026/
- Status: PUBLISHED, confirmed by WordPress posts.update and posts.get contexts edit/view. Site public browser could not open the newly published page, so browser-level page review is NOT established.

## Primary and original sources with evidence status
1. [VERIFIED] Original Oct 30 2026 @Scale talk (by Reactor cofounder Alberto Taiuti) https://www.youtube.com/watch?v=RMspGHdVg-Q. Official talk source video ID corroborated via a time-indexed public summary. The media presentation describes an interactive generated dog scene and claims ~60 frames per second. The demo is not an independent robotics accuracy or safety trial.
2. [VERIFIED] Reactor launch statement May 28 2026 https://www.reactor.inc/blog/reactor-launch: platform founded by Taiuti and Bryce Schmidtchen, aimed at real-time video and robotics, company original launch film embedded from official company website via https://www.youtube.com/watch?v=Ivu5B3WbpaE (source original embedded as youtube-nocookie /embed/Ivu5B3WbpaE). This second video is explicitly labeled historical, not October 2026 new footage.
3. [VERIFIED] Reactor Wan VAE technical writeup Oct 12 2026 https://www.reactor.inc/blog/optimizing-wan-decoder by Saman Keon: per-chunk decoding timings on test workload: original 133.8ms; after memory format change 85.9ms; after chunk batching 78.8ms; after further kernel improvements 60.2ms. Net 2.22x decoder speedup. This is a COMPANY-REPORTED benchmark, not measured live robotic control loop or verified universally across hardware. Original report also describes B200 hardware, precision comparisons and additional memory usage trade-offs. No conflation of decoder ms with reported 60FPS demo.
4. [VERIFIED] Reactor Oct 5 2026 financing update https://www.reactor.inc/blog/nvidia-sapphire-ventures-join-reactor-series-a; NVIDIA and Sapphire Ventures joined Series A round, and the company says it serves real-time world-model inference. Company-reported usage claims not independently verified.
5. [VERIFIED] Reactor robotics page https://www.reactor.inc/robotics: custom robot policy serving, simulated evaluation environments, access to some hosted policies in PRIVATE PREVIEW; no implication that physical robotics have been generally deployed or proven safe.
6. [VERIFIED] Related BitcoinVersus.Tech internal coverage: Genie 4, Krafton Ludi 0.2 social AI, robot-state estimation, and Pika H3 Flex video. Distinct company/event and analytical angle, not duplicate.

## Duplicate and learning inventory
- Searched current WordPress published archive via query strings 'Reactor world models', 'Alberto Taiuti', 'Reactor robotics', 'world model simulation', 'Scale AI world models', 'Reactor real time'; no exact story match. Related Genie 4 and Krafton articles were contextual links.
- Searched connected GitHub historical archive 'Alberto Taiuti' and 'Reactor world models': no direct match. The archive spans 2023-present, with targeted code search (NOT a claim of exhaustive manual reading of all files).
- Read immediate predecessor QA ledger 'qa/ledger/2026-11-02-28521-technology-connections-aa-batteries.md' and newsroom chart policy 'editorial/chart-style-preferences.md'. Applied the caution about not overstating a creator/company performance experiment and selecting graphs by real data structure rather than decorative habit.

## WordPress publication and media technical QA
- Editorial word count: 352 excluding heading, captions and footer.
- Four contextual internal hyperlinks, alongside direct company sources and the video source.
- Four distinct in-body media: 2 native Gutenberg YouTube videos, 1 original conceptual infrastructure diagram media 28539, 1 SmartChart-based four-stage vertical-column performance chart media 28541. Featured cover and donation QR excluded from media count.
- Video 1 canonical https://www.youtube.com/watch?v=RMspGHdVg-Q; video 2 canonical https://www.youtube.com/watch?v=Ivu5B3WbpaE, captions immediately AFTER each embed, meaningful article text between embeds.
- [VERIFIED STRUCTURE] posts.get(context=view) returned two distinct provider iframe elements https://www.youtube.com/embed/RMspGHdVg-Q and https://www.youtube.com/embed/Ivu5B3WbpaE. Saved raw Gutenberg wp:embed blocks confirmed with type video providerNameSlug youtube. Actual user-device playback cannot be certified: direct youtube.com web fetch disabled/throttled. Do not call them independently click-tested.
- Original explanatory diagram media 28539 clearly identified as conceptual; no fictitious live photograph or technical annotation assumed.
- SmartChart policy and catalog: categorical comparative vertical bars for 4 optimized benchmark stages, user preference vertical bars, zero baseline, milliseconds per video chunk, source/caveat in caption. Chart media 28541 2400x1440 verified WordPress media.get. Compared alternatives: line/step suggests time series, waterfall decomposes changes but not supported as an automatic bar chart in engine; vertical bars convey absolute magnitude across discrete engineering stages cleanly. No artificial estimates or interpolation. Data: 133.8,85.9,78.8,60.2 as source. Do NOT compare these numeric times to rendered frame intervals or claim 2.2x entire model training speed.
- [USER PREFERENCE] Rotate cover demographic and visual art style. Previous battery story featured an adult Latina female electronics technician in a realistic photo-editorial image. This post uses a different adult East Asian male robotics engineer engaged in mechanical arm calibration, drawn as anime editorial art. Cover is conceptual (not company documentary). Exactly one WordPress featured ID 28540; WordPress media.get verified 1200x630 and descriptive alt. No visible composition/anatomy pixel-level inspection by independent public browser is available; generation prompt required anatomically correct two hands and no text.
- SEO excerpt/title/description/canonical fields present. Approved italic Editor's Note preserved verbatim, original QR code image 24043, 5000-satoshi instructions, receiving address 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb, disclaimer, and required footer order. No discontinued X/social promo or decorative text boxes.
- [VERIFIED] WordPress post.status = publish; site article permalink d.link. WordPress rendered content includes image IDs 28539, 28541, QR 24043 and two iframe players.
- [NOT VERIFIED] Browser-level public-page screenshot/mobile responsive visual audit; actual YouTube playback. Public web.run attempt for newly published URL returned inaccessible. No access to user thumbs-up/down history or site reader engagement metrics, so no claims about them.

## Recursive scoring (provisional)
Accuracy and primary sources: 25/25 (primary company filings and precise measurement scope)
Freshness/nonduplicate: 15/15 (Oct 30 new video, no existing Reactor article found)
Technical clarity: 15/15 (distinguish simulation, control latency and decoder benchmark)
Media relevance/structural embed checks: 13/15 (two relevant official videos, actual playback unverified)
Cover/visualization: 10/10 (verified pixel size and chart values, independent pixel-level visual not tested)
Internal links/SEO/footer: 10/10
Live-page QA and responsive formatting: 5/10 (connected WP rendering confirmed; external public browser failed)
Total provisional: 93/100. Aspirational 95 remains unachieved until independent desktop/mobile and actual device video playback checks pass. Mandatory source accuracy, duplicate prevention and native embed structure gates passed; end-to-end playback gate is an unresolved limitation, not a claimed pass.

## Three concrete improvements for next article
1. Separate PROMOTIONAL 60FPS rendering demonstrations from physically validated robot autonomy. Require device-level benchmarks, force sensing or validated task success before stating simulation can safely train robots.
2. Preserve two separately sourced YouTube native blocks (one new talk, one clearly dated primary-company explainer) and test actual iframe rendering in WordPress view. When player fetch is blocked, document exact blocker and avoid declaring video fully working.
3. Visualize concrete engineering optimization stages from one consistent workload with source-quoted units. Rotate cover styles/demographics with substantive relevant actions rather than decorative desk scenes.

## Recurring limitation / stronger follow-up
WordPress connector can confirm publication and server-side rendered player iframes, but independent video click-to-play and mobile screenshots are not exposed. Future QA should use a supported site browser / device playback capability and record evidence if available. Do not repeat the unsupported claim that raw Gutenberg wp:embed blocks prove playback. If a video fails on a live user device, FIX → RETEST → REPLACE → REMAKE and amend both archive and ledger.
