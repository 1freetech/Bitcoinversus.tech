# BitcoinVersus.Tech — Technology Connections AA Battery Investigation — Recursive Editorial QA

Date: 2026-11-02
Article: https://bitcoinversus.tech/2026/11/02/technology-connections-alkaline-aa-battery-tests-carbon-zinc-leaks-2026/
Post ID: 28521
Status: Published and confirmed via WordPress update and edit/view readbacks.
Selection: YouTube-first news lineup #3, after the COSI telescope #2.

## Research and fact checks
1. Technology Connections, October 30, 2026, original ~30 minute video: https://www.youtube.com/watch?v=I1rlK3BKmyA — one creator's battery discharge experiments, not an independently replicated multi-lab product performance study.
2. The video reports four-AA battery-pack runtimes at a **constant 1-watt total load**: Great Value nearly 6.5 hours (approximate), Rayovac High Energy 6h45m, Energizer MAX 8h25m, Duracell approx 9h34m. Plot uses 6.5, 6.75, 8.4167 and 9.5667 hours as derived from minute values, not per-cell current or average life expectancy.
3. Under gentle discharge, creator reports about 3 Wh per cell for Duracell and tested Menards budget alkaline at roughly 97% of it. This is NOT all budget cells or all devices.
4. Panasonic carbon-zinc set only ~1h22m under the 1W condition. Carbon zinc cells can operate in low drain but have lower total usable energy and steep high-drain losses.
5. Manufacturer context Energizer carbon zinc application manual https://data.energizer.com/pdfs/carbonzinc_appman.pdf identifies low-current use as a relative strength, with greater alkaline advantage at higher drains.
6. Energizer FAQ https://data.energizer.com/pdfs/non-rechargeable_faq.pdf confirms discharge rate, temperature, cutoff voltage and duty cycle affect battery service life.
7. Battery University https://www.batteryuniversity.com/article/bu-106a-choices-of-primary-batteries notes differences in primary battery chemistry and cautions both chemistries may leak. Creator's old remotes do not establish comparative population leakage rates.
8. RSC overview https://pubs.rsc.org/vi/content/articlehtml/2025/cp/d4cp04614e notes zinc-carbon suits low-drain devices, and alkaline high load degrades usable energy; no unmeasured general performance claim.

## Duplicate scan
- WordPress targeted published searches on November 2 2026: alkaline batteries, carbon-zinc, battery leakage, Technology Connections, AA batteries, zinc carbon; no previous coverage of this exact 2026 Technology Connections battery investigation.
- Connected GitHub 1freetech/Bitcoinversus.tech searches 'alkaline battery' and 'Technology Connections': no direct duplicate; related educational technology / electrical engineering content only.
- Four relevant contextual existing internal links verified from site:
  battery fundamentals https://bitcoinversus.tech/2025/11/26/electrical-engineering-what-is-a-battery/
  charging primer https://bitcoinversus.tech/2026/10/08/what-is-a-phone-charger/
  UPS battery engineering https://bitcoinversus.tech/2026/10/13/osdcec-011-data-center-ups-battery-engineering/
  industrial robot backup batteries https://bitcoinversus.tech/2026/10/13/osrtc-010-robot-encoder-backup-battery-service/

## Article production and checks
- 369 editorial words excluding headings, captions and footer, four internal links.
- 3 distinct in-story media: original creator's official YouTube https://www.youtube.com/watch?v=I1rlK3BKmyA; WordPress vertical bar graph media ID 28517; original conceptual remote control battery leakage illustration media ID 28515. Featured cover and donation QR are excluded.
- After WordPress create, posts.get(context=view) returned real provider iframe https://www.youtube.com/embed/I1rlK3BKmyA, and after publication view readback again confirmed iframe. Source caption immediately after the video.
- SmartChart taxonomy based on categorical bar comparison, vertical orientation preferred by user's saved chart policy. Four labels, zero-origin axis, y unit hours, single consistent 1W total-load four-cell pack context. Other styles evaluated: line charts imply continuous time-series, histograms imply statistical distributions, and grouped bars require paired observations, so vertical categorical columns are superior. Media ID 28517 is 2400x1440. This chart is from ONE creator's experiment, not general battery performance.
- Featured image WordPress media ID 28516, exactly 1200×630 verified via media.get. Realistic editorial science image, adult technician and AA tests, clearly identified as conceptual rather than real creator footage, text-free and descriptive alt.
- Conceptual corrosion visual ID 28515 clearly identified as not a specific-brand failure, caption after image.
- SEO title/description and excerpt saved. Required approved Editor's Note, original donation QR ID 24043, 5000 sats, address 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb, and financial disclaimer verified. No decorative layout text boxes.
- WordPress post status 'publish' confirmed. The post URL and media presence verified through connected WordPress edit and rendered view.
- Limitations: actual public-page desktop/mobile visual appearance and YouTube click-to-play on a real user device NOT independently checked. Presence of a WordPress iframe is a structural check only. No engagement analytics or measured audience response available.

## Provisional scores
Accuracy and sources 24/25; originality 15/15; technical clarity 15/15; in-story media relevance 13/15; cover/SmartChart 10/10; SEO/internal links/footer 10/10; live page/browser QA 5/10 = 92/100 provisional. Below 95 because no browser-level playback and layout verification.

## Recursive improvement
1. Don't turn a YouTuber's provocative video title into an unsupported categorical newsroom headline; name the actual testing conditions, confounders and cautious conclusion.
2. Chart standardized within one experiment: 1W load on a four-AA pack, runtime hours; value precision reflects source data and approximate labels. Distinguish high-drain runtime from shelf life.
3. Treat technical leakage mechanisms separately from comparative failure-rate claims; observational anecdotes of old working remotes do not establish safety superiority.
4. Use source-linked creator video and generated technical visuals with clear conceptual-caption distinction.
