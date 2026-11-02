# COSI Gamma-Ray Telescope — Recursive Learning Editorial QA

Publication date: 2026-11-01
WordPress post: 28475
Canonical: https://bitcoinversus.tech/2026/11/01/uc-berkeley-cosi-gamma-ray-telescope-cleanroom-video-antimatter-2026/
Status: PUBLISHED, confirmed by posts.update and posts.get contexts edit/view.
Category: Space / Science, YouTube-first #2 selection.

## Duplicate prevention / inventory
- Targeted connected WordPress searches: COSI, Compton Spectrometer, Berkeley gamma ray, Compton gamma telescope, germanium detectors, John Tomsick, space telescope and related subjects. No duplicate on NASA COSI found.
- Connected GitHub source archive searches: Compton Spectrometer and COSI telescope. No prior coverage found. Prior space articles are linked in context rather than duplicated.
- Confirmed related internal articles about spaceflight chips, semiconductors, NASA PRIMA infrared telescope and Webb astronomy.

## Fact-check basis
- UC Berkeley original fresh article + film published October 29, 2026: https://news.berkeley.edu/2026/10/29/watch-built-at-berkeley-bound-for-space-to-measure-exploded-stars/ — campus cleanroom segment, spacecraft engineering, leader John Tomsick, galactic positrons, radioactive element formation.
- NASA mission page https://science.nasa.gov/mission/cosi/ — future telescope, 2027 target, range 0.2 to 5 MeV, supernovae, antimatter, black holes, polarization and science objectives.
- COSI mission primary instrumentation guide https://cosi.ssl.berkeley.edu/instrument/ — 16 3D germanium detectors; Compton scattering from sequential interaction position and deposited energies, not conventional optical focusing.
- NASA HEASARC mission catalog https://heasarc.gsfc.nasa.gov/docs/heasarc/missions/cosi.html — 2016 superpressure balloon flew 12 detector modules, planned spacecraft has 16 detector modules; this comparison is hardware module count, NOT detector performance, scientific sensitivity or observation data. NASA also lists two-year planned baseline mission.
- NASA Scientific Visualization Studio original cleanroom engineering photograph, Aug. 31 2026 release of July 15 image: https://svs.gsfc.nasa.gov/15088/ ; credit UC Berkeley / Alan Toth.
- COSI collaboration official media https://cosi.ssl.berkeley.edu/media/ includes mission-relevant YouTube video embed Poo7AT40bRg, plus UC Berkeley current news video SD9F3BYlip0 embedded on the Berkeley article.
- NASA GAO 2026 assessment suggests cryostat is an engineering risk, but NOT asserted as delaying launch. 2027 remains planned; no claim of satellite launch or new observations.

## Article and media validation
- Editorial body: 376 words excluding headings, media captions, Editor's Note and footer.
- In-body media: TWO mission-related native YouTube Gutenberg blocks, one actual UC Berkeley/NASA cleanroom photograph, one original SmartChart vertical-bar graphic = four. Featured cover and QR excluded.
- YouTube videos: https://www.youtube.com/watch?v=SD9F3BYlip0 and https://www.youtube.com/watch?v=Poo7AT40bRg . Saved Gutenberg embeds and WordPress context=view produced two separate actual iframe players: https://www.youtube.com/embed/SD9F3BYlip0 and https://www.youtube.com/embed/Poo7AT40bRg. Video captions placed immediately after each. An iframe is a provider player, but user-device click-to-play and geographic video permissions were not tested.
- NASA photo ID 28473 with explicit photographer credit and alt; SmartChart chart ID 28472 with text source link and caption after block.
- Chart selection: SmartChart taxonomy `bars` is categorical comparisons, vertical orientation user preference, two labels, proper zero baseline and consistent discrete detector-count unit. Other atlas alternatives evaluated: dumbbell for paired within-person endpoints less fitting, slope graph implies temporal change in one instrument, line graph falsely implies time-series continuity; vertical bars best for distinct experimental platform designs. Historical counts 12 versus 16 are not production rates, mission measured performance, or scientific output.
- Exactly one 1200×630 WordPress featured cover media ID 28470 verified via media_details, original text-free editorial split-screen diptych (lab and spacecraft), alt identifies conceptual illustration, different from previous photo-anime cover.
- Four contextual internal links: https://bitcoinversus.tech/2026/10/11/what-chips-have-already-flown-in-space/ ; https://bitcoinversus.tech/2026/04/03/periodic-table-of-semiconductors/ ; https://bitcoinversus.tech/2026/10/02/nasa-prima-far-infrared-probe-explorer-beyond-webb/ ; https://bitcoinversus.tech/2026/10/09/webb-finds-most-distant-fast-radio-burst/ .
- SEO title, description, excerpt and categories included. WordPress view confirms Editor's Note, original donation QR ID 24043, 5000 sats receiving address 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb and financial disclaimer. No outdated X promo. No decorative WordPress quote/group layout boxes.
- Independently opening new public URL via web.run fails URL inaccessible; could not visually inspect actual public desktop/mobile page, featured cover display in page chrome, or play videos. This is NOT a verified end-to-end playback pass.

## Provisional editorial score
Accuracy and primary-source fact-check: 25/25
Originality, topic freshness and no duplicate: 15/15
Explanatory and technical clarity: 15/15
Official in-story media relevance and Gutenberg structure: 13/15 (actual device playback unverified)
Cover, SmartChart selection and precise graph: 10/10
Contextual links, metadata and footer: 10/10
Browser-level QA: 5/10 (WP render confirmed, external public browser inaccessible)
Total: 93/100 provisional; below 95 target because browser verification blocked, NOT because the article is a draft.

## Recursive lessons
1. For scientific space missions, do not mistake instrument assembly for launch or observational discovery; a planned 2027 mission has no orbital data as of Nov 1 2026.
2. Use official researcher video embedded through native WordPress/Gutenberg, plus an actual instrument photo, and verify provider iframe serialization in `posts.get(context=view)`. Separate markup check from real click-to-play.
3. If numerical comparisons are available, choose chart via SmartChart data type and alternatives. Vertical bars with zero baseline are best for two categorical detector module counts; cite NASA and label the upcoming spacecraft planned.
4. Physically appropriate cover depicting real research context can be conceptual, but must be labeled and never replace a credited actual research photo without disclosure.

Outstanding: public desktop and mobile page rendering and actual device playback tests when a reliable browser is available; continue fix/retest/replace for any confirmed broken media.
