# Publishing QA — What Is RAG? (WordPress 27337)

## Publication and editorial classification
- WordPress ID **27337**, status `publish`, live URL: https://bitcoinversus.tech/2026/10/29/what-is-rag-retrieval-augmented-generation-how-ai-searches-documents/
- Headline: What Is RAG? How AI Searches Documents Before Answering.
- Next long news category **Evergreen / Explainers**, following Culture / Technology. Assigned categories **Artificial Intelligence (12374)** and **Technology (6)**; site has no dedicated evergreen category.
- Approximate editorial body length: **575 words**, appropriate for a full evergreen explainer rather than a short news brief.
- Exact SEO title, description, excerpt and natural social writing saved and verified on read-back.
- Duplicate checks: WordPress title/content searches of "vector database", "vector embeddings", "retrieval augmented generation", "semantic search", and "hybrid retrieval" returned related news/lessons but no standalone RAG explainer. Relevant Dnotitia vector-search ASIC and model-routing articles linked in context. GitHub code search did not find an exact duplicate.
- No numbered textbook-style boxes, no decorative boxes, no original in-story diagrams.

## Authoritative technical references
- IBM, "What is retrieval augmented generation" (updated October 2, 2026): https://www.ibm.com/think/topics/retrieval-augmented-generation
- IBM, "Vector databases for RAG": https://www.ibm.com/think/topics/rag-vector-database
- IBM, "What is vector search?": https://www.ibm.com/think/topics/vector-search
- IBM, "What is embedding?": https://www.ibm.com/think/topics/embedding
- Cloudflare, "What is RAG?": https://www.cloudflare.com/learning/ai/retrieval-augmented-generation-rag/
- Article distinguishes RAG (retrieved external context; weights unchanged) from fine-tuning; states vector indexes useful but not mandatory; acknowledges exact-match keyword search, BM25 and hybrid retrieval; cautions about outdated sources, access controls, hallucinations and prompt injection.

## Cover / in-story media
- Original editorial illustration WordPress media ID **27335**, exactly **1200 × 630**, depicts a female IT researcher in a fictional futuristic research library; clearly illustrative rather than a screenshot of a product. Alt description stored in media library.
- **Three in-story native WordPress-rendered YouTube players** (no original diagrams):
  1. `T-D1OfcDW1M` — IBM Technology / IBM researcher Marina Danilevsky, "What is Retrieval-Augmented Generation (RAG)?" Original IBM publication Aug 23, 2023.
  2. `gl1r1XV0SLw` — IBM Technology, "What is a Vector Database? Powering Semantic Search & AI Applications", Mar 24, 2025.
  3. `iVUMuC7OzUI` — IBM Technology, "What is AI Search? The Evolution from Keywords to Vector Search & RAG", Jun 16, 2025.
- Saved Gutenberg content uses three `wp:shortcode` blocks, each with canonical `[youtube https://www.youtube.com/watch?v=...]`; WordPress `posts.get(context=view)` returned **3 actual `youtube.com/embed/<id>` iframe elements**, matching all listed IDs. Media spaced with relevant body paragraphs and accurate captions. Cover and footer QR are not counted in 3.
- **Actual YouTube playback not independently verified**; iframe presence alone cannot prove playback. Desktop/mobile visual screenshot not independently tested.

## Footer and final integrity
- Fully italicized volunteer Editor's Note, original Bitcoin QR ID **24043**, scanning instructions with known donation address and exact mandatory disclaimer confirmed in both WordPress edit source and rendered output.
- Retired advertisement section and branded X/Twitter promo **absent**.
- WordPress posts.create returned no content warnings.
- Final raw Gutenberg HTML archived in GitHub at `archive/2026/10/27337-what-is-rag-how-ai-searches-documents.gutenberg.html`. GitHub fetch back verified exact character-by-character equality against the final WordPress edit content. QA file also fetched back and matched.
- Future checks: keep video-first selection, fail closed on rendered embeds as URL-only links; preserve source attribution and distinguish video player render from playback.
