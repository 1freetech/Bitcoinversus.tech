---
post_id: 20374
title: "Python 3.15 Slips a Week After Lazy Imports Force Surprise RC3"
live_url: "https://bitcoinversus.tech/2026/10/03/python-3-15-rc3-lazy-imports-delay/"
featured_media_id: 20373
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/python-3.15-rc3-lazy-imports-cover.png"
status: publish
---

<!-- wp:paragraph -->
<p>Python 3.15 was supposed to go final this week. Instead, a last-minute problem in one of the release’s headline features—explicit lazy imports—forced the core team to issue an unexpected third release candidate and move the final release to October 9.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>According to the <a href="https://www.python.org/downloads/release/python-3150rc3/">official Python 3.15.0rc3 release</a>, the new candidate arrived October 2 after release-blocking issues were found in the lazy-import implementation. RC3 contains roughly 156 bug fixes, build improvements and documentation changes from 82 contributors since RC2.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Lazy imports are useful because startup cost becomes optional</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Python normally executes an import when the interpreter reaches it. With explicit lazy imports in Python 3.15, developers can defer that work until the imported module or object is actually needed. That makes the new behavior an extension of the basic <a href="https://bitcoinversus.tech/2026/09/30/ospython-008-modules-imports/">modules and imports</a> model rather than a replacement for it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The attraction is straightforward: command-line tools, large applications and dependency-heavy programs can avoid loading code that a particular run never uses. The cost of importing does not disappear; it moves closer to the moment the dependency becomes necessary.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=2vECbywTFa0","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=2vECbywTFa0
</div><figcaption class="wp-element-caption"><em>This Python 3.15 explainer demonstrates explicit lazy imports and why deferring module loading can reduce application startup work.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A release blocker this late matters more than an ordinary bug</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Release candidates exist to expose exactly this kind of problem before a final interpreter ships. At RC stage, the feature set is effectively frozen and only reviewed fixes should land. Finding a blocker in a new language feature days before release is therefore different from finding a minor documentation issue: the team has to decide whether the fix is safe enough for millions of downstream users.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The core team chose more testing time. Python 3.15.0 final is now scheduled for October 9, and maintainers are being asked to test RC3 before that date.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.linuxcompatible.org/story/python-3150rc3-release-candidate-announced-stable-release-set-for-october-9-2026/">LinuxCompatible’s independent RC3 report</a> confirms the one-week delay and highlights the same lazy-import fixes, while also noting that the release team says no ABI changes are expected from this point forward.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">No ABI change is important for Python packages</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For developers who maintain compiled Python extensions, ABI stability this late in the cycle is critical. The Python team says binary wheels built against the 3.15 release candidates will remain compatible with future Python 3.15 releases. That gives package maintainers a realistic chance to finish testing and publish compatible artifacts before the final release.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For everyday developers, that connects directly to <a href="https://bitcoinversus.tech/2026/10/01/ospython-010-pip-package-installation/">pip package installation</a>. A new Python version is only practically useful when the libraries an application depends on can install cleanly, including projects that distribute platform-specific wheels.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Python 3.15 is bigger than lazy imports</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The RC3 release notes list several other major changes: a built-in <code>frozendict</code>, a built-in <code>sentinel</code> type, UTF-8 as the default encoding, unpacking in comprehensions, a dedicated profiling package, the Tachyon statistical profiler and a significantly upgraded experimental JIT compiler.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The official macOS installers also include free-threading support by default, while the Windows 64-bit binaries use the tail-calling interpreter. Those changes make 3.15 a broader runtime release even though lazy imports are the feature that triggered the schedule slip.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Test RC3 outside production</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Python team still labels RC3 a preview and does not recommend it for production systems. A safer workflow is to test applications in isolated <a href="https://bitcoinversus.tech/2026/10/01/ospython-009-virtual-environments/">virtual environments</a>, run the project’s test suite and verify dependency installation without replacing the interpreter that currently serves production workloads.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That testing window is the point of the surprise RC3. If lazy imports or another 3.15 feature breaks a real package today, maintainers still have a short opportunity to report it before October 9. After the final release, the ecosystem shifts from pre-release validation to supporting users who expect the new interpreter to work.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The delay is only one week, but it is a useful reminder of how mature software release engineering works: shipping on the original date matters less than discovering a language-level regression before the final build becomes the default target for the ecosystem.</p>
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
<p>This report treats Python 3.15.0rc3 as a pre-release build and the October 9 date as the current upstream release schedule. The featured cover is an original editorial illustration and is not duplicated in the article body.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->