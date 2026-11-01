# BitcoinVersus.Tech — America's Data Center Power Map (2026)

An interactive exploratory U.S. map assembled from the **50 published state data-center project rankings**, including **Texas Top 7** and **Virginia Top 5**, plus **America's Top 10 Largest Data Center Energy Projects** as of October 31, 2026.

## Files
- `index.html`: Leaflet map with point hovercards, project profiles, state and ranking filters, a status filter, text-search, and source-article links.
- `data/chunk-0.json` through `data/chunk-5.json`: article-derived entries (166 ranking entries: 156 state-ranked entries plus 10 national entries). A project can appear in both a state ranking and the national Top 10; these are separate references, not 166 unique facilities.

## Data and methodology
Each entry preserves the ranking headline, reported capacity expression, automatically parsed MW number, opening project paragraph, source URL, and source date. The map derives a provisional status category from heading language, which is **not** a substitute for the nuanced status analysis in each article.

**Location is deliberately provisional.** State-ranking markers are offset around each state's centroid so that the rankings can be browsed without inventing precise coordinates. National Top 10 markers use approximate locality positions where identifiable; not exact property boundaries. The next data quality pass should add source-backed `latitude`, `longitude`, `coordinate_source`, and `coordinate_precision` fields for every project.

**Electrical metrics are not additive:** planned site capacity, utility demand, actual IT power, generation plans, battery discharge ratings and measured consumption are different quantities. The page does not sum them as actual US production. Its energy source filter is based only on text mentions in extracts and does not assert the site's verified fuel mix.

## Open / embed
Open `index.html` through a static web host such as GitHub Pages, Netlify, or a same-origin WordPress site asset location. The page loads the JSON data from the **public** `1freetech/Bitcoinversus.tech` repo and uses Leaflet/OpenStreetMap tiles; it requires internet connectivity.

WordPress publication, embedded testing, site-level map placement, exact geolocation and mobile-browser QA are **not yet completed**. These are deliberately separated from the source-code commit.

## Future improvements
1. Verify site parcel or town coordinates from primary sources and capture confidence/source per marker.
2. Extract dedicated source-type, operating MW, production MWh/GWh, owner, project stage and observation date fields without conflating development ambitions with measured outputs.
3. Deduplicate national/state references into project records while retaining all ranking memberships.
4. Deploy a canonical WordPress page, test desktop/mobile hover/tap, and link it from every state ranking.
