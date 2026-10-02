---
post_id: 20136
title: "Gaming: Godot Fixed an 8 kHz Mouse Bug That Could Crush Games Below 1 FPS"
live_url: "https://bitcoinversus.tech/2026/10/02/gaming-godot-fixed-an-8-khz-mouse-bug-that-could-crush-games-below-1-fps/"
featured_media_id: 20135
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/high-polling-rate-mouse-input-pipeline.png"
status: publish
seo_title: "Gaming: How Godot Fixed the 8 kHz Mouse FPS Bug"
seo_description: "Godot 4.7.2 fixes a Windows input bottleneck where 8 kHz gaming mice could crush frame rates, using buffered raw input and smarter event dispatch."
---

<!-- wp:paragraph -->
<p>A gaming mouse can now report its position thousands of times per second. That sounds like an easy path to lower latency—until the operating system and game engine spend so much time processing mouse events that the game itself nearly stops rendering.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That was a real Windows performance cliff in Godot. In a detailed August 24 engineering report, <a href="https://godotengine.org/article/fixing-high-polling-rate-mice-on-windows/" target="_blank" rel="noopener noreferrer nofollow">Godot explained the fix</a> that shipped with Godot 4.7.2: buffer raw mouse input, keep it from flooding the normal Windows message path, and limit legacy mouse-motion dispatch to at most once per frame.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The project's <a href="https://twitter.com/godotengine/status/2091906123704025295" target="_blank" rel="noopener noreferrer">official announcement</a> described the change as a long-awaited fix for high-polling-rate mice on Windows.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/godotengine/status/2091906123704025295","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/godotengine/status/2091906123704025295
</div><figcaption class="wp-element-caption"><em>Godot announced that the high-polling-rate Windows mouse fix shipped with Godot 4.7.2.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">An 8 kHz mouse can become an 8,000-calls-per-second coding problem</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Polling rate is the frequency at which a mouse can report updates. A traditional 125 Hz device reports roughly every 8 milliseconds. Modern gaming mice can run at 2 kHz, 4 kHz or even 8 kHz, reducing the age of the latest available input sample and making updates more consistent on very high-refresh displays.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But software has to consume those events. Godot notes that if input accumulation is disabled, mouse-motion callbacks can potentially execute on every update—up to 8,000 calls per second with an 8 kHz mouse. Even with accumulation enabled, a game running on a 480 Hz display may execute the relevant input path hundreds of times every second.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes this a useful game-programming lesson: an input callback should be treated like a hot loop. Expensive work inside <code>_input()</code> or <code>_unhandled_input()</code> can multiply rapidly when event frequency rises.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Why Windows was getting buried in mouse messages</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Windows exposes both legacy mouse motion through <code>WM_MOUSEMOVE</code> and raw input through <code>WM_INPUT</code>. Raw input is valuable to games because it avoids operating-system mouse acceleration, but requesting it does not automatically stop legacy mouse messages from arriving.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>At very high polling rates, that combination can congest the event-processing path. Godot measured extreme cases where moving an 8 kHz mouse could push captured-mouse performance from thousands of frames per second to below 1 FPS before the fix.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A <a href="https://gamedev.net/news/5258-fixing-high-polling-rate-mice-on-windows-in-godot/" target="_blank" rel="noopener noreferrer nofollow">GameDev.net technical briefing</a> summarizes the same architecture: buffered raw reads, delayed <code>WM_INPUT</code> dispatch, and legacy motion constrained so it cannot overwhelm the frame loop.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">The fix is an event-queue lesson</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Godot now performs buffered reads in <code>DisplayServerWindows::process_raw_input()</code>. In <code>DisplayServerWindows::process_events()</code>, the engine uses the Windows API <code>PeekMessageW()</code> so raw input can remain queued for the next buffered read instead of being dispatched immediately through the expensive path. Legacy <code>WM_MOUSEMOVE</code> and <code>WM_NCMOUSEMOVE</code> events are handled separately and dispatched at most once per frame.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The design is a clean example of batching: when thousands of nearly identical events arrive faster than the rest of the application needs to react to them individually, process them in a way that preserves useful information without forcing the whole engine to pay the full per-event cost.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">The numbers show why low-level code matters</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In Godot's uncapped captured-mouse test, an 8 kHz mouse went from below 1 FPS before the fix to roughly 1,703 FPS afterward. In another 480 FPS V-Sync test, the engine moved from below 1 FPS to about 477 FPS. Godot reported a 45.8× increase in the 1% low FPS figure in one comparison.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those results make the story more than a peripheral tweak. A few changes to how the engine reads and dispatches operating-system events can determine whether a game feels broken or essentially locked to its target frame rate.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">It connects directly to the coding lessons</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The same fundamentals behind our <a href="https://bitcoinversus.tech/2026/10/02/ospython-016-abstraction-abstract-base-classes-basics/">lesson on abstraction</a> show up here at a lower level. The game sees an input-event abstraction; underneath it, platform-specific code has to translate Windows messages into engine events efficiently.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Our <a href="https://bitcoinversus.tech/2026/10/02/gaming-unity-gives-codex-31-game-development-skills-for-c-physics-and-the-cli/">Unity coding-agent story</a> focused on engine-aware development and verification. This Godot fix shows why that engine awareness matters: code that is logically correct can still be catastrophically slow if it ignores the frequency and cost of the platform events underneath it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>And the recently published <a href="https://bitcoinversus.tech/2026/09/30/gaming-godot-4-8-dev-7-adds-safer-refactoring-and-faster-c-calls/">Godot 4.8 Dev 7 coding story</a> shows the other side of the same open-source development cycle—language tooling and engine APIs improving while maintainers continue attacking low-level runtime bottlenecks.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">A simple rule for game code: count how often it runs</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A function that costs almost nothing once can become expensive when called 8,000 times per second. That principle applies to mouse input, physics callbacks, network packets, render loops and AI updates.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Godot's mouse fix is a compact example of performance engineering students can carry into their own projects: profile the hot path, understand the event source, batch work where semantics allow it, and verify the result with frame-time measurements rather than assuming faster hardware will hide inefficient code.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">BitcoinVersus.Tech</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p><strong>Advertisement</strong></p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Editor's Note</h3><!-- /wp:heading -->
<!-- wp:paragraph --><p>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p><!-- /wp:paragraph -->