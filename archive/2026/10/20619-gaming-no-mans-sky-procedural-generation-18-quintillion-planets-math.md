---
post_id: 20619
title: "Gaming: How No Man’s Sky Generates 18 Quintillion Planets With Math"
live_url: "https://bitcoinversus.tech/2026/10/04/gaming-no-mans-sky-procedural-generation-18-quintillion-planets-math/"
featured_media_id: 20618
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/no-mans-sky-procedural-universe-cover.png"
status: publish
---

<!-- wp:paragraph -->
<p><strong>No Man’s Sky does not contain 18 quintillion hand-built planets.</strong> It contains a set of mathematical rules capable of generating them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction is the secret behind one of gaming’s most famous technical achievements. Hello Games built a universe so large that, at a rate of one discovered planet every second, exploring every possible world would take roughly 585 billion years.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=ueBCC1PCf84","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=ueBCC1PCf84
</div><figcaption class="wp-element-caption"><em>Sean Murray explains how procedural generation lets Hello Games create planet-scale worlds, ecosystems and creatures from mathematical inputs instead of building each location by hand.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The universe is generated, not stored</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The core idea is procedural generation. Instead of shipping a separate handcrafted asset package for every mountain, valley, animal, tree and planet, the game uses algorithms to produce variations from rules and numerical inputs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In Hello Games founder Sean Murray’s <a href="https://www.gdcvault.com/play/1024514/Building-Worlds-Using">GDC 2017 session</a>, he described the challenge as building realistic and alien terrain through mathematics while giving a very small development team the ability to create and test an environment of extraordinary scale.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The result is not literally an infinite universe. Hello Games chose a 64-bit system capable of addressing 2<sup>64</sup> possibilities: 18,446,744,073,709,551,616 potential planets. An <a href="https://blog.playstation.com/2014/08/26/no-mans-sky-a-whole-universe-to-explore/">official PlayStation technical explainer</a> from Murray put the number into perspective: even discovering one planet every second would take about 585 billion years.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A seed becomes a world</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Procedural generation works because a relatively compact numerical input can be passed through the same deterministic rules again and again. The rules decide what terrain forms, how features are distributed and how visual components are combined. A different input produces a different result without an artist manually sculpting every square kilometer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why procedural systems can create apparent scale far beyond the amount of data a traditional handcrafted game would need to store. The software describes how to build the world instead of storing every possible world in advance.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The difficult part is not randomness — it is believable variation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Pure randomness would be easy and mostly useless. A believable game universe needs constraints. Mountains should read as mountains. Creatures need coherent skeletons and animation. Plants need forms that look intentional. Colors, climate and terrain still need to feel as though they belong together.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Hello Games therefore had to design systems that could produce surprises while staying inside a visual and gameplay language. The algorithm is not replacing design. The algorithm is executing a design space created by programmers and artists.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=C9RyEiEzMiU","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=C9RyEiEzMiU
</div><figcaption class="wp-element-caption"><em>Murray’s GDC talk breaks down the mathematics and production challenges behind building procedural planets that can look both realistic and alien.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">No Man’s Sky is also a lesson in game-engine architecture</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is why No Man’s Sky remains relevant to modern game development. Its universe is a demonstration of what happens when the engine itself becomes a content-generation system rather than only a renderer for assets created elsewhere.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That idea is resurfacing in a different form as studios add automation and AI tooling to engines. <a href="https://bitcoinversus.tech/2026/10/03/gaming-capcom-rex-re-engine-ai-assisted-game-development/">Capcom is rebuilding RE Engine around AI-assisted development workflows</a>, showing how proprietary engines can evolve into broader production systems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Unity is moving in a similar direction through agent-accessible tooling. BitcoinVersus.Tech recently covered how <a href="https://bitcoinversus.tech/2026/10/02/gaming-unity-gives-codex-31-game-development-skills-for-c-physics-and-the-cli/">Unity exposed 31 game-development skills to Codex</a> for tasks involving C#, physics and command-line workflows.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The broader question is no longer only whether software can render a large world. It is whether code can help generate, test and continuously reason about that world. That is the same frontier being measured by projects such as <a href="https://bitcoinversus.tech/2026/10/01/gaming-swe-game-tests-whether-coding-agents-can-build-playable-games/">SWE-Game, which tests whether coding agents can build playable games</a> rather than simply output source code.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Procedural generation turns storage into possibility</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>No Man’s Sky demonstrates a powerful programming principle: a small set of rules can describe a space vastly larger than the code and assets used to define it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The game does not need developers to visit every planet first. It needs rules capable of producing a planet when one is required, along with enough constraints to make that result feel like part of the same universe.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why its scale still feels almost absurd a decade later. The breakthrough was never simply “make more planets.” It was learning how to turn mathematics into a universe.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">BitcoinVersus.Tech</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Advertisement</h3>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Editor’s Note</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->