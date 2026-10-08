<!-- wp:paragraph -->
<p><strong>An experimental project called <code>ts-rust</code> has ported Microsoft’s TypeScript 7 compiler, checker, and language-server core from Go to Rust—and the project says all 181,711 ported upstream tests now pass.</strong> The repository is explicitly experimental, but it is already interesting for two reasons: it reports roughly half the type-checking time of Microsoft’s Go implementation across a 60-project benchmark, and the author says most of the port was produced through long-running AI coding-agent loops rather than a conventional hand rewrite.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is not an official Microsoft TypeScript release. It is a third-party compatibility project pinned to a TypeScript 7.1 development revision. The right way to read the result is not “Rust replaced TypeScript.” It is that modern coding agents are now being tested against infrastructure-scale software where compatibility is measurable against an enormous existing test suite.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=OytpXXeNmTQ","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=OytpXXeNmTQ
</div><figcaption class="wp-element-caption"><em>Microsoft Developer — Anders Hejlsberg explains TypeScript 7’s official native Go compiler, the implementation that <code>ts-rust</code> is attempting to match.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>What ts-rust Actually Is</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The project’s <a href="https://github.com/pingdotgg/ts-rust"><strong>GitHub repository</strong></a> describes <code>ts-rust</code>, also published as <code>tsc-rs</code>, as a direct Rust port of Microsoft’s native TypeScript compiler. It preserves the Go implementation’s algorithms and behavior while exposing the familiar <code>tsc</code>-style command line, compiler API, and language-server behavior.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>npm install -D tsc-rs
npx tsc-rs -p tsconfig.json</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The project is currently pinned to Microsoft TypeScript revision <code>673a5f17d713</code>, corresponding to a September 29, 2026 TypeScript 7.1 development build. That matters because compatibility has to be compared against that exact upstream revision rather than a different TypeScript release.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Test Count Is the Most Important Claim</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The strongest evidence in the repository is not a synthetic benchmark. It is the compatibility suite. The author says <strong>all 181,711 ported Go tests pass</strong>, and that real projects such as TanStack Query core and Hono produce diagnostics identical to the pinned Go compiler.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The language-server and API outputs are also compared against oracle test sets. That does not prove the Rust port is production-ready, but it is much stronger evidence than simply compiling itself or passing a small demo project.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This test-driven approach is especially interesting in light of BitcoinVersus.Tech’s earlier report on <a href="https://bitcoinversus.tech/2026/10/02/coding-github-copilot-typescript-runtime-rust-ai-agents/"><strong>GitHub rewriting a 430,000-line TypeScript runtime in Rust with AI agents</strong></a>. In both cases, the software-development question is becoming less about whether an agent can emit Rust and more about whether the resulting system can satisfy a large machine-verifiable specification.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/theprimeagen/comments/1x046sl/another_bro_rewrote_tsc_go_in_rust_in_2_weeks_and/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/theprimeagen/comments/1x046sl/another_bro_rewrote_tsc_go_in_rust_in_2_weeks_and/
</div><figcaption class="wp-element-caption"><em>A current developer discussion on the project captures both sides of the reaction: excitement about the port and skepticism about maintainability when so much code is machine-generated.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Project Claims About Half the Go Type-Checking Time</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>According to the repository’s own benchmark results, <code>ts-rust</code> type-checks a set of 60 open-source projects in roughly <strong>half the time</strong> of the corresponding Go implementation on a geometric-mean basis. That is a project-reported result, not an independent benchmark, and the release packages are not yet fully optimized with techniques such as profile-guided optimization and BOLT.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Microsoft’s official <a href="https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/"><strong>TypeScript 7 release</strong></a> already represented a massive performance jump over the older JavaScript/TypeScript compiler. Microsoft says the native Go implementation typically improves full-build performance by roughly 8× to 12× versus TypeScript 6. <code>ts-rust</code> is therefore attempting to optimize an implementation that is already much faster than the original compiler.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=jD91DUxCLEg","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=jD91DUxCLEg
</div><figcaption class="wp-element-caption"><em>Thapa Technical — A detailed explanation of TypeScript 7’s native compiler, including why Microsoft chose Go instead of Rust and how the new compiler architecture improves build performance.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The AI-Agent Part Is Almost as Interesting as the Compiler</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The repository’s author says earlier attempts using OpenAI coding models generated more than 1.3 million lines of Rust across multiple months but stalled at roughly 84% compatibility. The author then says a fresh attempt using Anthropic’s Opus 5.5 produced a working first version in about 10 hours and continued improving over roughly two weeks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The author reports about <strong>$24,047</strong> in API-priced spend for the final successful run. That number is useful mainly as a reminder that “AI wrote it” does not mean “software appeared for free.” Large autonomous coding experiments can consume significant compute, repeated tests, tool calls, repository operations, and human supervision even when the human is not manually writing every function.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>This Is Still an Early Release</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The repository itself is unusually blunt about its limitations. The author warns that the project is early, says the code has not been manually reviewed line-by-line by the project creator, and notes that several editor-facing language-service features are still missing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Quick fixes, refactors, hover information, and completions are among the features not yet ported. Current published platform support is also narrower than a mature compiler toolchain: Linux x64 and macOS arm64 are available, while Windows and Linux arm64 were not yet supported in the project’s current release documentation.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction matters because compiler correctness is not only about whether valid code passes. A production toolchain has to preserve diagnostics, editor behavior, project references, module resolution, build modes, incremental behavior, plugins, language-server semantics, operating-system support, and years of edge cases.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Why Rust?</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Rust offers native-code performance, memory safety without garbage collection, strong concurrency primitives, and a large ecosystem for systems tooling. Those characteristics make it attractive for compilers and developer infrastructure, especially where predictable latency and memory behavior matter.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But language choice alone does not guarantee speed. The architecture, algorithms, memory layout, parallelism strategy, string representation, allocator behavior, and build profile matter just as much. In fact, developers examining <code>ts-rust</code> have already pointed out that preserving Go-like semantics inside Rust can introduce its own overhead.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/10/03/rust-1-99-c-variadic-functions-cargo-ci-llvm-23/"><strong>Rust 1.99</strong></a>, including compiler and Cargo changes aimed at making Rust more useful in systems and CI-heavy environments. A TypeScript compiler port is another example of Rust increasingly showing up behind tools that developers use rather than only inside end-user applications.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Bigger Question Is Maintainability</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Passing 181,711 tests is impressive. Maintaining compatibility as upstream TypeScript changes every week is a different problem. A compiler is not a one-time artifact; it is a living codebase that needs debugging, security review, performance work, portability, release engineering, and developers who understand why the implementation behaves the way it does.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is where the project becomes a useful experiment even if <code>tsc-rs</code> never becomes the dominant compiler. If AI agents can repeatedly port large systems and satisfy giant compatibility suites, software teams may start treating tests and executable specifications as even more important assets than the implementation language itself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>What Developers Should Watch Next</strong></h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>Upstream tracking:</strong> how quickly <code>ts-rust</code> can follow new TypeScript revisions.</li><li><strong>Windows support:</strong> whether the project can become portable enough for normal enterprise TypeScript workflows.</li><li><strong>Language-service parity:</strong> whether missing editor features reach compatibility with Microsoft’s implementation.</li><li><strong>Independent benchmarks:</strong> whether other developers reproduce the project’s reported speed advantage over Go.</li><li><strong>Code review:</strong> whether maintainers can understand, simplify, and safely evolve the agent-generated Rust.</li><li><strong>Upstream ideas:</strong> whether any implementation techniques eventually influence Microsoft’s official compiler.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Compiler Story Is Becoming an AI Software-Engineering Story</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Microsoft’s TypeScript team spent years moving a huge compiler from TypeScript to Go for native performance and parallelism. Now an independent experiment has used coding agents to port that new native implementation again—this time to Rust—and claims broad behavioral parity against a six-figure test corpus.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The interesting part is not that Rust “beat” Go or that AI “replaced” compiler engineers. Neither conclusion follows from one experimental repository. The important signal is that <strong>large software ports are becoming testable agent workloads</strong>. The test suite is increasingly becoming the contract, while humans decide whether the generated implementation is trustworthy enough to maintain.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><strong>Editor’s Note</strong></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The 1200×630 featured image is the actual GitHub repository preview for <code>pingdotgg/ts-rust</code>, formatted without unrelated stock artwork. The two YouTube videos directly explain TypeScript 7’s native compiler architecture and the Go-versus-Rust design context. The Reddit embed is a current developer discussion specifically about this <code>ts-rust</code> project. Performance, compatibility, cost, and development-history claims attributed to the project are identified as self-reported where appropriate.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support and donation options are available through BitcoinVersus.Tech.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech is not a financial advisor. Content is provided for informational and educational purposes.</p>
<!-- /wp:paragraph -->