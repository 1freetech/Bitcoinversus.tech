# Penguin Plans 16TB of Shared Memory for AI GPUs

- Publication date: November 20, 2026
- Canonical URL: https://bitcoinversus.tech/2026/11/20/penguin-marvell-16tb-photonic-shared-memory-gpu-sc26-2026/
- WordPress post ID: 34085
- WordPress publish readback: publish
- Category rotation: Data Centers, Networking, Information Technology; user asked next distinct story after AtlasKV AI follow-up
- Topic: Penguin Solutions and Marvell MemoryAI photonic shared-memory appliance unveiled at SC26, announced November 16, 2026
- Dedupe search: WordPress published/draft title/content searches MemoryAI, photonics-based HBM, 16TB photonic, Penguin Solutions and Marvell. Earlier CXL 1TB news was distinct; no 16TB appliance story found.
- Core editorial words: 594, excluding media captions, source notes and footer
- Original primary sources: https://ir.penguinsolutions.com/news/news-details/2026/Penguin-Solutions-Unveils-Industrys-First-Photonics-Based-HBM-Class-Memory-Appliance-to-Break-the-GPU-Memory-Wall-for-Agentic-AI/default.aspx ; https://ir.penguinsolutions.com/news/news-details/2026/Marvell-and-Penguin-Solutions-Collaborate-to-Address-Data-Center-AI-Memory-and-Accelerate-Inference-at-Scale/default.aspx ; https://investor.marvell.com/news-events/press-releases/detail/1043/marvell-scales-connectivity-to-address-ai-infrastructures-next-bottleneck-at-supercomputing-2026
- Hardware references: https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/components.html ; https://www.amd.com/en/products/accelerators/instinct/mi400/mi455x.html
- Independent contextual interview: https://siliconangle.com/2026/11/18/memory-bottlenecks-ai-how-photonics-shared-pools-help-sc26/
- Source dates: November 13 and November 16 Marvell/Penguin announcements, November 18 theCUBE SC26 interview; video technical background August 2026
- Reported target specifications: 576GB HBM3E plus 16TB DDR5 RDIMM per future appliance, 57.6Tbps aggregate target, 3 memory access modes and CXL 3.0 access to CPU systems
- Status caveat: select customer sampling planned second half 2027; no 2026 commercial availability or independent performance reproduction claimed
- Editorial calculations: 576/288=2x HBM capacity versus single B300 local HBM, 16000/288=55.56x DDR5 capacity; 57.6Tbps /8 = 7.2TB/s ideal aggregate line-rate equivalent; 16e12/768 ≈20.83 billion illustrative 384D FP16 embeddings, excluding all overhead; these comparisons are NOT equivalent memory tiers or measured effective throughput.
- Featured media ID: 34080
- Cover style: original cinematic anime, no people; 1200x630, exact BitcoinVersus.tech in #39FF14 on tight black highlight at bottom-left, no cover duplication in article body
- Featured cover: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/penguin-marvell-photonic-memory-ai-anime-cover-1200x630-1.jpg
- Chart type evaluation: vertical bars chosen over slope and lollipop; zero baseline and direct units preserve straightforward capacity comparison
- Chart 1 ID 34081, B300 local HBM 288GB versus planned Penguin shared HBM 576GB, vertical zero baseline
- Chart 2 ID 34082, B300 local HBM 0.288TB versus planned Penguin DDR5 pool 16TB, vertical zero baseline
- Chart 1 URL: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/penguin-memoryai-hbm-capacity-vs-b300-2026.png
- Chart 2 URL: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/penguin-memoryai-ddr5-pool-vs-b300-2026.png
- Video 1: https://www.youtube.com/watch?v=n2fIyCplw0Q (August 2026 technical demo by Marvell engineer, background)
- Video 2: https://www.youtube.com/watch?v=g0TFbXUCiBY (November 18, 2026 SC26 theCUBE interview with Penguin and Marvell; sponsored interview disclosed)
- Embed rendering: saved WordPress shortcodes transformed into two embedded YouTube iframe elements, confirmed before publication and on live view. Actual playback not independently tested due external browser limits.
- 5 verified contextual internal links: AtlasKV paper, GPU facts memory follow-up, Penguin DDR4 CXL card, CXL memory pooling guide, Lambda optical-switch story
- Source accuracy caveats: "HBM-class" and 57.6Tbps are vendor targets; 2027 sampling schedule not shipment evidence; shared remote memory not interchangeable with local HBM; figures and comparisons separated facts from forecasts
- Permanent exact Editor's Note, original donation QR #24043, disclaimer present and confirmed in live view
- Live audit: page HTTP 200, correct canonical, SEO title/description, OpenGraph cover, zero images missing alt, zero empty links, 2 published video iframes, 2 published chart figures
- Responsive QA: screenshot requests at mobile 390px and desktop 1200px both returned "ready", but underlying pixels were not visually inspected in a real browser
- Unresolved: videos not played in a real end-user browser; no 2027 performance benchmarks or independent hardware verification available
- Note: The original 20GB AtlasKV story and GPU fact comparison were published earlier, rather than repeated as duplicates.

## Original WordPress Gutenberg markup

<!-- wp:paragraph --><p>Penguin Solutions and Marvell want to move a major part of AI memory away from individual GPU packages. Their <strong>MemoryAI Photonic Appliance</strong>, announced November 16 at Supercomputing 2026 in Chicago, is designed to share up to <strong>16TB of DDR5 and 576GB of HBM3E</strong> across servers linked by light. The proposed hardware targets <strong>57.6 terabits per second</strong> of aggregate appliance bandwidth, according to <a href="https://ir.penguinsolutions.com/news/news-details/2026/Penguin-Solutions-Unveils-Industrys-First-Photonics-Based-HBM-Class-Memory-Appliance-to-Break-the-GPU-Memory-Wall-for-Agentic-AI/default.aspx">Penguin's original announcement</a>. Those specifications are design goals, not independently verified shipping-system benchmarks.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The timing is important: Penguin plans to begin <strong>sampling to selected customers in the second half of 2027</strong>. A physical demonstration at SC26 does not mean customers can install a production appliance today. Marvell's <a href="https://investor.marvell.com/news-events/press-releases/detail/1043/marvell-scales-connectivity-to-address-ai-infrastructures-next-bottleneck-at-supercomputing-2026">November 13 conference announcement</a> also outlined Photonic Fabric, CXL expansion cards and optical interconnect demonstrations.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=n2fIyCplw0Q]<!-- /wp:shortcode --><!-- wp:paragraph --><p><em>In an August 2026 technical demonstration, Marvell's Uday Poosarla explains the company's optical memory fabric; the video predates the SC26 appliance announcement.</em> <a href="https://www.youtube.com/watch?v=n2fIyCplw0Q" target="_blank" rel="noopener noreferrer">Original video</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Why AI needs another memory tier</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A GPU has exceptionally fast but finite high-bandwidth memory (HBM). As large language models handle more simultaneous users and longer conversations, their key-value (KV) caches compete with model weights and intermediate tensors for that limited space. Our <a href="https://bitcoinversus.tech/2026/11/20/how-many-facts-fit-in-gpu-memory-atlaskv-20gb-vram-comparison-2026/">GPU fact-capacity comparison</a> demonstrates why a billion 384-dimensional FP16 vectors need 768GB before indexing, while <a href="https://bitcoinversus.tech/2026/11/20/atlaskv-1-billion-knowledge-graph-triples-20gb-gpu-rag-2026/">AtlasKV</a> illustrates a different strategy: leave large knowledge structures outside active GPU memory.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The new appliance builds a shared memory tier. Its proposed 576GB HBM3E pool is <strong>twice</strong> the 288GB physically attached to one NVIDIA B300. Even AMD's 432GB MI455X has less nominal HBM capacity than the planned shared HBM pool, although onboard and remote memory do not have equivalent latency or throughput.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":34081,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/penguin-memoryai-hbm-capacity-vs-b300-2026.png" alt="Zero-baseline vertical bar chart of 288 GB B300 HBM vs 576 GB planned MemoryAI shared HBM3E" class="wp-image-34081" /><figcaption><strong>SmartChart, vertical bar comparison.</strong> <a href="https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/components.html">NVIDIA B300: 288GB local HBM</a>; <a href="https://ir.penguinsolutions.com/news/news-details/2026/Penguin-Solutions-Unveils-Industrys-First-Photonics-Based-HBM-Class-Memory-Appliance-to-Break-the-GPU-Memory-Wall-for-Agentic-AI/default.aspx">Penguin's 2027 planned appliance: 576GB shared HBM3E</a>. Capacity alone does not establish equivalent memory speed.</figcaption></figure><!-- /wp:image -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">16TB can hold far more data, but speed matters</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The larger tier is planned <strong>16TB DDR5 RDIMM capacity</strong>, roughly 55.6 times the B300's 288GB of HBM by nominal byte count. Using a theoretical 768-byte embedding, 16TB could store approximately <strong>20.8 billion vectors</strong> before overhead. It would not allow a model to attend to 20.8 billion facts instantaneously, and it does not reproduce AtlasKV's evaluated grounding accuracy.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":34082,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/penguin-memoryai-ddr5-pool-vs-b300-2026.png" alt="Zero-baseline vertical bar chart contrasting 0.288 TB B300 local HBM and planned 16 TB MemoryAI shared DDR5" class="wp-image-34082" /><figcaption><strong>SmartChart, vertical bar comparison.</strong> Nominal decimal TB only, contrasting two different memory tiers. Planned DDR5 capacity is not interchangeable with directly attached HBM latency or bandwidth.</figcaption></figure><!-- /wp:image -->

<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=g0TFbXUCiBY]<!-- /wp:shortcode --><!-- wp:paragraph --><p><em>At SC26, Marvell's Preet Virk and Penguin's Andy Mills discuss photonic pooling in a theCUBE interview published November 18, 2026. SiliconANGLE discloses sponsorship by Penguin Solutions.</em> <a href="https://www.youtube.com/watch?v=g0TFbXUCiBY" target="_blank" rel="noopener noreferrer">Original video</a>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Memory would be accessible through Marvell's optical network interfaces, with CXL 3.0 support for CPU access. Penguin lists direct HBM, DDR5 direct and HBM-cached DDR5 modes. A 57.6Tbps headline converts to <strong>7.2TB/s of target aggregate link bandwidth</strong> before protocol overhead. It is not a demonstrated per-GPU memory-transfer rate, and end-to-end performance will depend on access patterns, congestion and software.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Where the architecture could matter</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Shared memory could reduce duplicated KV caches across inference servers and allow operators to allocate resources to workloads as needed. Penguin's existing <a href="https://bitcoinversus.tech/2026/11/14/penguin-solutions-ddr4-cxl-memory-card-1tb-ai-servers-2026/">DDR4-reuse CXL expansion card</a> addresses a related but more immediate capacity problem. Our <a href="https://bitcoinversus.tech/2026/11/01/what-is-cxl-4-0-ai-data-centers-memory-pooling-128-gts/">CXL memory-pooling guide</a> explains the protocol, while <a href="https://bitcoinversus.tech/2026/11/19/lambda-nvidia-cpo-optical-switches-10000-blackwell-gpus-2026/">Lambda's optical-switch deployment</a> highlights networking infrastructure around large GPU clusters.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The strongest claim has yet to be proven: whether pooled memory improves actual token throughput, energy use and dollar-per-token economics at scale. Penguin has not published independent production comparisons against equivalent local-HBM systems. Until customer sampling and repeatable benchmarks arrive, the appliance is a substantial engineering proposal rather than a delivered solution to the GPU memory wall.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Sources and verification</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Primary sources: <a href="https://ir.penguinsolutions.com/news/news-details/2026/Penguin-Solutions-Unveils-Industrys-First-Photonics-Based-HBM-Class-Memory-Appliance-to-Break-the-GPU-Memory-Wall-for-Agentic-AI/default.aspx">Penguin Solutions, November 16, 2026</a>; <a href="https://ir.penguinsolutions.com/news/news-details/2026/Marvell-and-Penguin-Solutions-Collaborate-to-Address-Data-Center-AI-Memory-and-Accelerate-Inference-at-Scale/default.aspx">Marvell/Penguin collaboration</a>; <a href="https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/components.html">NVIDIA HGX specifications</a>; <a href="https://www.amd.com/en/products/accelerators/instinct/mi400/mi455x.html">AMD MI455X product specifications</a>; and <a href="https://siliconangle.com/2026/11/18/memory-bottlenecks-ai-how-photonics-shared-pools-help-sc26/">SiliconANGLE's SC26 interview report</a>. Capacity and unit-conversion arithmetic are editorial calculations; no prototype was independently tested.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>Visual note:</strong> The featured anime illustration is fictional and represents rack-scale optical memory sharing, not a photograph of Penguin's product. Both charts compare nominal capacities, not tested performance.</em></p><!-- /wp:paragraph -->

<!-- wp:separator --><hr class="wp-block-separator has-alpha-channel-opacity" /><!-- /wp:separator -->

<!-- wp:paragraph --><p><em><strong>Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please scan the QR code below</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech original 5,000-satoshi donation QR code" class="wp-image-24043" /><figcaption>Scan with a compatible Bitcoin wallet; verify its displayed receiving address before sending.</figcaption></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>BitcoinVersus.tech provides technical and financial journalism for informational purposes only and does not provide investment, financial, legal or cybersecurity assurances.</em></p><!-- /wp:paragraph -->
