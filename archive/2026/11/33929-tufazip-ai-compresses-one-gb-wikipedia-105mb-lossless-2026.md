---
title: "AI Shrinks 1 GB of Wikipedia to 105 MB, but at a Cost"
publication_date: 2026-11-20
wordpress_post_id: 33929
canonical_url: "https://bitcoinversus.tech/2026/11/20/tufazip-ai-compresses-one-gb-wikipedia-105mb-lossless-2026/"
status: published
categories:
  - Artificial Intelligence
  - Technology
  - Trending News
featured_media_id: 33923
cover_style: "Original detailed colored-pencil illustration"
cover_dimensions: "1200x630"
person_rotation_position: 2
person_rotation_depiction: "Fictional White woman researcher"
cover_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/tufazip-wikipedia-neural-lossless-compression-colored-pencil-1200x630-1.jpg"
chart_type: none
comparison_format: "Gutenberg table for tufazip v1, v2 and historical gzip enwik9 archive sizes"
social_source: "https://x.com/williedotdev/status/2123513702163091757"
video_sources:
  - "https://www.youtube.com/watch?v=Qnc5MGnsN-M"
  - "https://www.youtube.com/watch?v=U9yyErqDOD8"
verification:
  live_public_http: 200
  published_post_status: true
  x_social_rich_embed: true
  youtube_native_blocks_failed_initially: true
  youtube_shortcode_repair: successful
  rendered_youtube_iframes: 2
  rendered_video_ids_matched: true
  contextual_internal_links: 4
  canonical_volunteer_footer_verbatim: true
  original_donation_qr: true
  missing_image_alt_text: 0
  empty_links: 0
  full_benchmark_reproduction: not_performed
  actual_youtube_playback: unverified
  responsive_mobile_layout: unverified
  exact_reference_watermark_match: unverified
source_figures:
  enwik9_bytes: 1000000000
  tufazip_v2_total_bytes: 105388353
  compressed_payload_bytes: 100958324
  decoder_files_bytes: 4430029
  compression_seconds: 631548
  decompression_seconds: 645748
sources:
  - https://tufalabs.ai/research/tufazip/
  - https://mattmahoney.net/dc/text.html
  - https://github.com/Tufalabs/tufazip
---

# AI Shrinks 1 GB of Wikipedia to 105 MB, but at a Cost

*Verbatim published Gutenberg body, including repaired video shortcodes, rich social embed and canonical volunteer footer.*

<!-- wp:paragraph --><p>A viral X post declares lossless compression solved. The underlying research is impressive, but more specific. Tufa Labs researcher <a href="https://tufalabs.ai/research/tufazip/">Tommy He developed tufazip</a>, an experimental compressor that reduced a <strong>one-billion-byte Wikipedia text file to 105,388,353 bytes</strong>. The total includes compressed text, decoder software and the model initialization needed to recover every original byte.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The result appears on <a href="https://mattmahoney.net/dc/text.html">Matt Mahoney's Large Text Compression Benchmark</a>. Its first version ranked second when submitted September 7, 2026. Version two improved the result September 30, followed by an October 14 technical write-up. The claim resurfaced on social media November 19. Tufazip is the strongest listed entry using a neural network as its sole predictor, although higher-ranked methods combine neural and hand-crafted models.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[tweet 2123513702163091757]<!-- /wp:shortcode --><!-- wp:paragraph --><p><em>Willie's November 19 X reaction to the Tufa Labs benchmark.</em> <a href="https://x.com/williedotdev/status/2123513702163091757">Original post</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">How much did Wikipedia shrink?</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The benchmark input, <em>enwik9</em>, holds exactly 1,000,000,000 bytes of Wikipedia content. The final scored archive is <strong>105.39 decimal MB</strong>, yielding a <strong>9.49-to-1 compression ratio</strong> and an <strong>89.46% reduction</strong>. Lossless recovery differs from generative AI reconstructing plausible text: the decoded result must match the original byte for byte.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The public <a href="https://github.com/Tufalabs/tufazip">tufazip repository</a> lists 100,958,324 encoded-data bytes plus 4,430,029 bytes of supporting decoder files. It also publishes file hashes. Including the software prevents an enormous model kept elsewhere from disguising the real storage requirements.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=Qnc5MGnsN-M]<!-- /wp:shortcode --><!-- wp:paragraph --><p><em>Educational tutorial on neural compression and arithmetic coding, published before the tufazip research. It is not a benchmark demonstration.</em> <a href="https://www.youtube.com/watch?v=Qnc5MGnsN-M" target="_blank" rel="noopener noreferrer">Original video</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">A Transformer that learns while decoding</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Tufazip employs a <strong>12-layer, 163-million-parameter Transformer</strong>. The model predicts upcoming tokens, then arithmetic coding assigns fewer bits to probable symbols and more to surprising ones. Encoder and decoder repeat the same deterministic learning updates using previously processed text, so the full newly learned weights never need transferring.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The winning version also begins with a compact offline-trained model. The additional predictor knowledge improves compressed size enough to justify the bytes required to transfer it. Older statistical models and neural compression research supplied many of the underlying ideas.</p><!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":true} --><figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>enwik9 compressor</th><th>Scored archive</th></tr></thead><tbody><tr><td>tufazip v2</td><td>105.388 MB</td></tr><tr><td>tufazip 0.1.0</td><td>105.979 MB</td></tr><tr><td>gzip 1.3.5, -9</td><td>322.626 MB</td></tr></tbody></table><figcaption>Source: <a href="https://mattmahoney.net/dc/text.html">Large Text Compression Benchmark</a>. Decimal MB, required decoder files included. Different computers and runtimes prevent a direct speed comparison.</figcaption></figure><!-- /wp:table -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">The hidden cost: more than seven days</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The benchmark records about <strong>631,548 seconds for compression</strong> and <strong>645,748 seconds for decompression</strong>, respectively 7.31 and 7.47 days. The documented test used <strong>two NVIDIA B200 GPUs</strong>, and the compression time excluded earlier offline training. Gzip achieved far less compression on the same input but had a much shorter recorded runtime on different hardware.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>A record for smallest archive is not a recommendation for everyday backups. Our <a href="https://bitcoinversus.tech/2026/11/08/lz4-1-11-7550-mbs-16-worker-compression-library-benchmarks-2026/">LZ4 coverage</a> explains why production systems often value speed. Our <a href="https://bitcoinversus.tech/2026/11/19/luxor-gpu-b200-rental-option-five-million-bitcoin-mining-hedges-2026/">B200 rental article</a> documents compute-market economics, while the new <a href="https://bitcoinversus.tech/2026/11/20/electricity-cost-per-kwh-bitcoin-mining-calculator-guide/">electricity cost per kWh guide</a> explains how measured power and tariffs translate to a bill.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=U9yyErqDOD8]<!-- /wp:shortcode --><!-- wp:paragraph --><p><em>February 2026 arithmetic-coding tutorial from NextGen Learners. Background about entropy coding, not a tufazip product test.</em> <a href="https://www.youtube.com/watch?v=U9yyErqDOD8" target="_blank" rel="noopener noreferrer">Original video</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Why lossless compression has not been solved</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>No lossless compressor can reliably reduce every possible file. Random bytes, encrypted material and already compressed data may resist compression or expand after overhead is added. Wikipedia contains textual structure that a trained model can predict; other datasets behave differently.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Broader use will require faster encoding, practical decoding, tests on varied file types and affordable infrastructure. Our <a href="https://bitcoinversus.tech/2026/11/08/rust-compiler-benchmark-time-2-85-percent-five-weeks-2026/">benchmark reporting on software optimization</a> shows why researchers must disclose workload and runtime. Tufazip advances learned text compression, not a universal law-defying compressor.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Sources and methods</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Primary evidence: <a href="https://tufalabs.ai/research/tufazip/">Tufa Labs research report</a>, <a href="https://github.com/Tufalabs/tufazip">public code and checksums</a>, and <a href="https://mattmahoney.net/dc/text.html">the benchmark record</a>. The editorial calculations use the exact published byte totals. A full independent compression and decompression reproduction was not performed.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>Reporting Note:</strong> The colored-pencil cover shows a fictional White woman software researcher. Neither educational video depicts the tufazip research team or an actual September benchmark run.</em></p><!-- /wp:paragraph -->

<!-- wp:separator --><hr class="wp-block-separator has-alpha-channel-opacity" /><!-- /wp:separator -->
<!-- wp:paragraph --><p><em><strong>Editor's Note:</strong> We volunteer daily to ensure the credibility of information on our platform is Verifiably True. Support our research by scanning the QR code below to donate 5,000 sats.</em></p><!-- /wp:paragraph -->
<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech donation QR code for 5,000 satoshis" class="wp-image-24043" /></figure><!-- /wp:image -->
<!-- wp:paragraph --><p><em>For mobile scanning, open the article on another display and scan the QR code with a Bitcoin wallet. Verify receiving address <strong>3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</strong> before sending.</em></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p><em>BitcoinVersus.tech provides technical and financial journalism for informational purposes only and does not provide investment, legal or cybersecurity assurance.</em></p><!-- /wp:paragraph -->