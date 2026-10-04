---
post_id: 20388
title: "CMake Tools 1.24 Tightens the C++ Test-and-Build Loop Inside VS Code"
live_url: "https://bitcoinversus.tech/2026/10/03/cmake-tools-1-24-cpp-vscode-test-build-loop/"
featured_media_id: 20384
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/cmake-tools-1.24-c-workflow-cover.png"
status: publish
---

<!-- wp:paragraph -->
<p>Microsoft’s latest CMake Tools update is aimed at a problem C++ developers know well: too many small context switches between source code, build configuration, tests, cache settings and the terminal.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the <a href="https://devblogs.microsoft.com/cppblog/visual-studio-code-cmake-tools-1-24/">September 25 CMake Tools 1.24 release overview</a>, Microsoft says the VS Code extension can now run and debug discovered CTest tests directly from source, preserve local cache edits as user-preset overrides, and help keep supported <code>CMakeLists.txt</code> source lists synchronized when files are created or deleted.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">CTest moves closer to the line of code you are editing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Discovered CTest tests with resolved source locations can now expose Run and Debug CodeLens actions inside the editor. Selecting Run builds the executable target associated with that test and its dependencies, then executes the selected test without forcing the developer into a separate testing view.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction matters in larger projects. If one test belongs to a small executable target, CMake Tools can build that target instead of rebuilding an unrelated default target. The result is a tighter edit-build-test cycle, especially in projects split across many translation units following normal <a href="https://bitcoinversus.tech/2025/05/28/c-lesson-2-file-extensions-and-source-code-conventions-in-c/">C++ source-code conventions</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Debug path behaves differently: Microsoft notes that the executable should already be built and an appropriate C++ debugger/debug adapter must be available. Debugging from the Project Outline or Testing view does not require a separate <code>launch.json</code> for the test.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=_BWU5mWqVA4","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=_BWU5mWqVA4
</div><figcaption class="wp-element-caption"><em>Visual Studio Code’s CMake walkthrough shows the underlying CMake Tools workflow—creating CMake configuration, using presets and building C++ targets inside VS Code.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Local cache changes no longer have to fight shared presets</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A common CMake problem appears when a developer manually changes a cache value that is also defined by a shared configure preset. The next configure can overwrite the local change because the preset remains the authoritative source.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>CMake Tools 1.24 changes that workflow for preset-backed entries. When a developer edits one of those values through the cache UI and saves it, the extension can write a user-preset override into <code>CMakeUserPresets.json</code>. The shared <code>CMakePresets.json</code> stays unchanged, while the local override inherits from it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That separation is useful when testing low-level behavior such as <a href="https://bitcoinversus.tech/2026/09/26/c-lesson-7-pointers-and-memory-addresses/">pointers and memory addresses</a> under different compiler flags or build options. A developer can change a local configuration without turning a personal experiment into a team-wide preset modification.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The extension can maintain supported source lists</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When developers create or delete source files in VS Code Explorer, CMake Tools can now update their entries in supported <code>CMakeLists.txt</code> arrangements. The behavior is controlled by the <code>cmake.modifyLists.*</code> settings and follows the user’s confirmation configuration.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Microsoft is careful not to describe this as a general-purpose CMake script rewriter. Generated build scripts, complex variable logic and unusual target structures still need human review. But for conventional targets, reducing the chance that a new <code>.cpp</code> file exists on disk but never enters the build graph removes a common source of confusion.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That becomes particularly useful as projects add practical features such as <a href="https://bitcoinversus.tech/2026/10/02/oscpp-014-file-input-output-basics/">file input and output</a>, where new implementation files, test fixtures and helper targets can quickly expand the source tree.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The 1.24 branch also expands the build-system surface</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The project’s <a href="https://github.com/microsoft/vscode-cmake-tools/blob/main/CHANGELOG.md">official CMake Tools changelog</a> lists additional 1.24 work across the extension, including FASTBuild generator support with newer CMake versions, a pre-configure task hook, multi-root exclusion improvements, and API events that allow dependent extensions to react after configure attempts.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Taken together, these changes show where C++ tooling is heading: the editor is becoming less of a text window wrapped around external build tools and more of an orchestration layer that understands tests, targets, presets, configuration state and source-file relationships.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What developers should still verify</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Automation around build metadata can save time, but it also increases the importance of reviewing generated changes. Teams should still inspect modifications to <code>CMakeLists.txt</code>, confirm which target a test builds, and keep shared project presets distinct from machine-specific user presets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For C++ developers, CMake Tools 1.24 is not a new compiler or language standard. Its value is smaller and more operational: fewer unnecessary rebuilds, fewer preset conflicts, less manual source-list maintenance and a shorter path from editing a test to running it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong><em>BitcoinVersus.Tech</em></strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>Advertisement</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><strong><em>Editor’s Note</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This report focuses on the CMake Tools 1.24 developer-workflow changes rather than treating the extension as a replacement for reviewing CMake configuration and generated build behavior. The featured cover is an original editorial illustration and is not duplicated in the article body.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->