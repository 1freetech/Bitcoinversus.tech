# Interactive calculator publishing protocol

Owner-directed 2026-11-26: add interactive calculators to suitable engineering, energy, mining, finance and technology stories when useful.

1. Define formula, units, bounds, assumptions, limitations and independent reference calculations. Use educational warnings where appropriate.
2. Preserve standalone dependency-free HTML/CSS/JS under tools/calculators/. Test numerical outputs, keyboard/range control, errors and mobile/desktop viewport overflow in a real local browser. Local browser verification does not establish live site functionality.
3. Use Gutenberg Custom HTML on plugin-enabled hosting or an isolated hosted calculator iframe on an approved origin. Prefer a reusable registered block/shortcode for long-term maintenance. Never publish raw sanitized JavaScript or bypass hosting restrictions.
4. Save draft and retrieve edit and view content to verify required elements survive. Test public browser interaction, not merely returned HTML. Keep source link and static fallback table.
5. Known blocker: site 217076149 platform simple; plugin list returned hosting_activation_required, with current plan already entitled. WordPress removed script and input tags in draft post 35623. Owner must authorize hosting activation/migration before proceeding: https://wordpress.com/hosting-features/217076149. Published article has static table and source link only, not inline interactive calculator.
6. First calculator: tools/calculators/seawall-pressure-calculator.html. Static seawater pressure, horizontal force and base moment, dry landward side. No production structural design use.
