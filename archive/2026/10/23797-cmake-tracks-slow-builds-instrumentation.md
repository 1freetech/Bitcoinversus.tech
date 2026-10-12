---
post_id: 23797
title: "CMake Tracks Slow Builds With Instrumentation"
live_url: "https://bitcoinversus.tech/2026/10/11/cmake-tracks-slow-builds-instrumentation/"
slug: "cmake-tracks-slow-builds-instrumentation"
published_at: "2026-10-11T22:09:50"
modified_at: "2026-10-11T22:09:50"
featured_media_id: 23796
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/cmake-instrumentation-1200x630-1.jpg"
status: published
categories: [2509703]
tags: []
seo_title: "CMake Tracks Slow Builds With Instrumentation | BitcoinVersus.Tech"
seo_description: "Kitware shows how CMake instrumentation can trace slow builds, tests and install steps and feed performance data into automated callbacks."
primary_source: "https://www.kitware.com/why-are-my-builds-slow/"
secondary_source: "https://cmake.org/cmake/help/latest/manual/cmake-instrumentation.7.html"
---

<!-- wp:paragraph --><p>Kitware published new guidance on October 11 showing how CMake’s Instrumentation API can expose where software builds and tests are actually spending time.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The <a href="https://www.kitware.com/why-are-my-builds-slow/"><strong>Kitware walkthrough</strong></a> says instrumentation can collect timing and system data across configure, generate, build, test and install steps. Developers can then use callbacks to summarize slow commands, memory-heavy compilation jobs or test bottlenecks automatically.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The official <a href="https://cmake.org/cmake/help/latest/manual/cmake-instrumentation.7.html"><strong>CMake documentation</strong></a> describes the same API as a way to collect timing, target and diagnostic information throughout a project workflow.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=Fh71k6tb3mY","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=Fh71k6tb3mY
</div></figure>
<!-- /wp:embed -->
<!-- wp:paragraph --><p><em>Martin Duffy of Kitware explains CMake instrumentation for build and test performance.</em></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This extends the same build workflow BitcoinVersus.Tech covered in <a href="https://bitcoinversus.tech/2026/10/03/cmake-tools-1-24-cpp-vscode-test-build-loop/"><strong>CMake Tools 1.24</strong></a>. It also fits a broader shift toward measurable CI performance seen in <a href="https://bitcoinversus.tech/2026/10/03/rust-1-99-c-variadic-functions-cargo-ci-llvm-23/"><strong>Rust 1.99’s Cargo changes</strong></a> and the infrastructure scaling behind <a href="https://bitcoinversus.tech/2026/10/09/github-rebuilding-git-infrastructure-ai-agents-7-38-billion-commits/"><strong>GitHub’s recent rebuild</strong></a>.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://bsky.app/profile/cristianadam.eu/post/3lg5xklpeuk2d","type":"rich","providerNameSlug":"bluesky-social","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-bluesky-social wp-block-embed-bluesky-social"><div class="wp-block-embed__wrapper">
https://bsky.app/profile/cristianadam.eu/post/3lg5xklpeuk2d
</div></figure>
<!-- /wp:embed -->
<!-- wp:paragraph --><p><em>CMake developer Cristian Adam highlighted the project’s move to the 4.x generation, where the instrumentation work has continued maturing.</em></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><strong>Bottom line:</strong> CMake can now turn “the build feels slow” into measurable traces that show which commands, tests or machines are responsible.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Editor’s Note</h3><!-- /wp:heading -->
<!-- wp:paragraph --><p><em>This story describes Kitware’s published instrumentation capabilities; actual performance gains depend on what developers find and change after profiling.</em></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><strong><em>Follow <a href="https://www.linkedin.com/company/bitcoin-versus">BitcoinVersus.Tech on LinkedIn</a>. Support independent research: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb.</em></strong></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>BitcoinVersus.Tech is not a financial advisor. Content is provided for informational purposes.</p><!-- /wp:paragraph -->