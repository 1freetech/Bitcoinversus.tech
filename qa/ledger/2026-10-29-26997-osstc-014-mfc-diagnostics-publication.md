# BitcoinVersus.Tech OSSTC.014 — publication QA ledger

## Publication and content
- **Post:** https://bitcoinversus.tech/2026/10/29/osstc-014-mass-flow-controller-setpoint-tracking-zero-drift-response-time/
- **WordPress post ID:** 26997
- **Status:** published, verified through fresh WordPress owner posts.get calls in edit and view contexts.
- **Title:** OSSTC.014: Mass Flow Controller Diagnostics — Setpoint Tracking, Zero Drift and Response Time
- **Curriculum:** OSSTC.014, immediately after OSC++.035 in the continuing rotating certificate sequence. Focuses on MFC response, flow feedback, zero drift and pressure cross-talk rather than duplicating the OSSTC.004 gas-delivery introduction.
- **Duplicate screening:** WordPress recent lessons and searchable published content checked, plus GitHub archive search for mass flow controller and curriculum slots; no standalone OSSTC.014 found.
- **Cover:** WordPress featured media #26993, original wordless comic in current five-style visual rotation, native 1200 x 630 pixels as confirmed by media.get, with accessibility alt text.
- **Content style:** textbook-style reference with topical headings, linked definitions, illustrative 80 sccm/74 sccm signed deviation, troubleshooting symptom families, hazards, knowledge check, sources. Approx. 1,935 content words. Public curriculum ID retained because immediately preceding publishing practice uses explicit course identifiers.
- **Primary sources:** NIST https://www.nist.gov/laboratories/tools-instruments/gas-flow-standard-calibrating-and-modeling-meters-used-measure ; Brooks Instrument https://www.brooksinstrument.com/videos-library and https://www.brooksinstrument.com/mass-flow-controllers-alarms-diagnostics ; Bronkhorst https://www.bronkhorst.com/knowledge-base/flow-control-with-real-time-compensation/
- **Internal wiki network:** 16 contextual internal archive links to OSSTC.004/003/005/010/011/012/013 and OSSEC.012 where relevant; no raw URL-only source dump.
- **Donation footer:** original italicized volunteer disclaimer, 5,000-sat note and original donation QR media #24043 preserved.
- **Media count:** two distinct relevant in-story YouTube videos, not counting cover or donation QR; no original diagrams inside lesson.
- **Prohibited-word check:** clear. Publish call returned no _content_warnings.

## Embed quality: recurrence regression
- **YouTube 1:** Brooks Instrument SLA thermal MFC principle of operation, https://www.youtube.com/watch?v=XKpX3rrt1qc.
- **YouTube 2:** Brooks Instrument GP200 pressure-based MFC principle of operation, https://www.youtube.com/watch?v=ZWB03A_9fo8.
- Video IDs sourced by following video links from the **manufacturer's original video library**.
- Gutenberg canonical video blocks contain bare watch URLs on their own lines with surrounding newline characters, avoiding previously reproduced inline-wrapper URL bug.
- Fresh owner WordPress posts.get(context=view) returned **exactly two real iframe player elements** (src contains youtube.com/embed/XKpX3rrt1qc and youtube.com/embed/ZWB03A_9fo8). This verifies WordPress's server-rendered player markup.
- **Limit:** No actual browser play-button test or mobile/desktop screenshot proof. Do not claim playback was tested. Review iframes in authenticated browser when available.

## Exact final GitHub archive
- Path: [archive/2026/10/26997-osstc-014-mass-flow-controller-setpoint-tracking-zero-drift-response-time.gutenberg.html](../../archive/2026/10/26997-osstc-014-mass-flow-controller-setpoint-tracking-zero-drift-response-time.gutenberg.html)
- Archive commit: `a6ae621aefcd84e3da7fa12639bf0b97f032b4c1`
- Blob SHA: `288e1f809601a27b06fdc39209701ee78d202d4c`
- Fresh fetch of GitHub file compared with a fresh WordPress edit-context full Gutenberg body. **Exact string equality passed (21559 characters).**
- No later content edits were made in this workflow.

## Regression tests for future releases
- Fingerprint `GUTENBERG-EMBED-LINEBREAK-REQUIRED`: before publish put bare video URL on its own line inside wrapper; afterward count YouTube iframe sources in rendered HTML and compare exact IDs.
- Fingerprint `WEB-PLAYBACK-NOT-TESTED`: record server-rendered iframe proof separately from actual playback, browser rendering and mobile layout.
- If any video later fails, repair in place, refetch final WordPress body and update exact archive; record root cause, commit SHA and new regression evidence.
- **State:** PUBLISHED, COVER CONFIRMED, 2 RENDERED IFRAMES CONFIRMED, EXACT GITHUB ARCHIVE MATCH; BROWSER PLAYBACK AND VISUAL INSPECTION OPEN.
