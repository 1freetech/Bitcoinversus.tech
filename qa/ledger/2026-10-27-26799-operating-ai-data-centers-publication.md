# BitcoinVersus.Tech publication QA — post 26799 — October 27, 2026

- **Article:** https://bitcoinversus.tech/2026/10/27/top-7-largest-ai-data-centers-operating-online-it-power-2026/
- **Published post:** 26799. WordPress owner connector `posts.get(context=view)` returned `publish`.
- **Content archive:** [exact final Gutenberg markup](../../archive/2026/10/26799-top-7-largest-ai-data-centers-operating-online-it-power-2026.md), fetched back from `posts.get(context=edit)` after publishing, committed as f0505171ef3898aaa095e5d5fa532e4c5febee10.
- **Cover:** WordPress featured media 26798, upload result reported exact 1200 × 630; unique detailed anime editorial cover.
- **In-story media:** 6 distinct YouTube native Gutenberg embeds and 1 operator-sourced DayOne Nusajaya photograph, one distinct media in each of seven ranked sections. Donation QR (media 24043) excluded. WordPress published HTML contains 6 video iframes and 2 `img` elements, including QR.
- **Links:** 9 contextual BitcoinVersus.Tech archive hyperlinks, primary source/official engineering links and Epoch AI site model links in article body. WordPress categories include Trending News 27318186 and general category 6.
- **Current-capacity inputs:** New Carlisle 1,037 MW; Colossus 2 946 MW; Fairwater Atlanta 636 MW; DayOne Nusajaya 473 MW; Meta Prometheus 471 MW; DayOne Kempas 422 MW; Stargate Abilene 421 MW. Source: Epoch AI, October 2026 online IT power estimates, not metered instantaneous electrical consumption.
- **Major limitation disclosed in article:** DayOne self-reports >478 MW operational across both Johor campuses while Epoch's site estimates sum to ~895 MW. Unreconciled difference; explicitly identified and attributed.
- **Verification evidence:** `posts.get(context=view)` confirmed each of seven sections includes a distinct media element, six `iframe` elements and the donation QR. `posts.get(context=edit)` fetched final Gutenberg content. Featured media/category IDs verified.
- **Outstanding:** No actual YouTube playback testing, desktop/mobile screenshot inspection, independent external image-load test, or live visual proof. Do not describe these as passed.

## Error and regression fingerprint

- **Fingerprint:** `QA-POST26799-SUM-001` — combined site power arithmetic mismatch during prepublish lint.
- **Root cause:** Draft subtotal accidentally stated 4,371 MW; individually ranked values add to 4,406 MW. Annual full-draw hypothetical would be 38.59656 TWh, not 38.3 TWh.
- **Fix:** Preflight rejected the first draft before publication; rewrote total to 4,406 MW and illustrative annual energy to 38.6 TWh. Second lint confirmed `sumMW===4406`, 6 embeds + 1 image, seven ranks and nine archive links before publishing.
- **Regression test:** On each ranked list, compute aggregate totals from the actual structured ranked rows and assert that each total/derived figure matches article prose to published rounding precision, before allowing WordPress `posts.create`. Repeat on WordPress fetch-back.
- **Future quality follow-up:** Validate all six YouTube players in an actual browser and render desktop/mobile screenshots; replace broken embeds if found. These tests were not performed here.
