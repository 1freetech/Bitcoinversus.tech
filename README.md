# BitcoinVersus.tech

[![Build](https://github.com/1freetech/Bitcoinversus.tech/actions/workflows/build.yml/badge.svg)](https://github.com/1freetech/Bitcoinversus.tech/actions/workflows/build.yml)
[![Astro](https://img.shields.io/badge/Astro-7.3-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![License](https://img.shields.io/badge/license-open--source-65ff4b)](#license)

BitcoinVersus.tech is an independent technical publication covering Bitcoin mining, power efficiency, artificial intelligence, energy, infrastructure, and practical engineering documentation.

The website is being rebuilt as a fast, maintainable, open-source publication using Astro. Published WordPress articles are imported into a committed local snapshot so production builds remain reliable even when the WordPress API is unavailable.

## Project status

The Astro production build and automated route checks are passing. The current launch snapshot contains migrated BitcoinVersus.tech articles, category archives, pagination, dated article routes, RSS, sitemap, About, and 404 pages.

Netlify deployment and the final production-domain transition are separate launch steps. The existing WordPress site remains the live publication until that transition is deliberately completed.

## Technology

- **Astro 7** for static site generation
- **Node.js 22** for builds and content tooling
- **GitHub Actions** for continuous integration
- **Netlify** configuration for hosting
- **WordPress REST API** for article migration
- **Committed JSON snapshot** for offline-safe production builds

## Local development

### Requirements

- Node.js 22
- npm
- Git

### Setup

```bash
git clone https://github.com/1freetech/Bitcoinversus.tech.git
cd Bitcoinversus.tech
npm install
npm run dev
```

Astro will print the local development address in the terminal, normally `http://localhost:4321`.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local Astro development server |
| `npm run build` | Generate the production site in `dist/` |
| `npm run qa` | Validate generated routes, required files, and internal links |
| `npm run build:verify` | Build the site and run the full release QA |
| `npm run refresh:content` | Refresh the WordPress content snapshot |
| `npm run preview` | Preview the generated production build locally |

## Content snapshot

The migration script retrieves published articles and categories from the BitcoinVersus.tech WordPress API.

```bash
npm run refresh:content
```

The default refresh imports the latest 100 articles. To request additional WordPress pages during a deliberate archive refresh:

```bash
WP_MAX_PAGES=2 npm run refresh:content
```

The resulting `src/data/wp-snapshot.json` file is committed to the repository. Normal builds read from that snapshot and do not depend on a live WordPress request.

## Quality checks

Every push and pull request targeting `main` runs the GitHub Actions build workflow. The release check verifies:

- Astro builds successfully
- Required homepage, About, 404, RSS, and sitemap files exist
- Category and dated article routes are generated
- Internal links resolve inside the production output
- Generated links and assets do not contain `undefined` or `null` values

Run the same checks locally before committing:

```bash
npm run build:verify
```

## Repository structure

```text
.github/workflows/   Continuous-integration workflow
public/              Static assets
scripts/             WordPress import and release-QA tools
src/components/      Reusable interface components
src/data/            Committed WordPress content snapshot
src/layouts/         Shared page layouts
src/pages/           Astro routes
netlify.toml         Netlify build and security settings
```

## Deployment

Netlify uses the repository configuration below:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | `22` |
| Production branch | `main` |

A production-domain change should occur only after a successful Netlify preview and route, mobile, accessibility, and content review.

## Contributing

1. Create a focused branch.
2. Make one clearly scoped change.
3. Run `npm run build:verify`.
4. Commit with a specific description.
5. Open a pull request against `main`.

Do not commit credentials, private keys, access tokens, generated `dist/` output, or local Netlify state.

## Editorial scope

Primary coverage includes:

- Trending technology news
- Bitcoin mining and proof-of-work infrastructure
- Power Efficiency Theory and PEI analysis
- Artificial intelligence
- Energy and data-center systems
- Technical documentation and training
- Engineering culture

## License

The software repository is intended to be open source. Article text, original research, trademarks, and editorial media may carry separate rights. Add the repository's final license file before treating all content as freely reusable.
