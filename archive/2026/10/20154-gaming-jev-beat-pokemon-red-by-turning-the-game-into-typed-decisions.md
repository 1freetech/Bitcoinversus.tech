---
post_id: 20154
title: "Gaming: Jev Beat Pokémon Red by Turning the Game Into Typed Decisions"
live_url: "https://bitcoinversus.tech/2026/10/02/gaming-jev-beat-pokemon-red-by-turning-the-game-into-typed-decisions/"
featured_media_id: 20153
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/ai-decision-model-plays-retro-rpg.png"
status: publish
seo_title: "Gaming: Jev Beat Pokémon Red With Typed AI Decisions"
seo_description: "Jev completed Pokémon Red using typed decisions, a terminal harness and Claude-assisted debugging instead of free-form chatbot gameplay."
---

<!-- wp:paragraph -->
<p>A new AI experiment turned Pokémon Red into something closer to a software decision loop than a chatbot demo. Instead of asking a language model to narrate its way through the game, developer Andrew Boyd wired TypeSafe AI's Jev decision model into a harness that presented it with legal actions and probabilities, then let ordinary code execute the choice.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The <a href="https://jev-plays-pokemon.standardagents.ai" target="_blank" rel="noopener noreferrer nofollow">project page</a> says Jev defeated the Elite Four and Champion and entered the Hall of Fame on September 23, 2026. The run's final team included Lapras, Pidgeot, Gloom, Raticate, Graveler and Machoke.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Boyd announced the experiment in a <a href="https://twitter.com/0xBOYD/status/2100418365986578908" target="_blank" rel="noopener noreferrer">specific X post</a> that also exposed the project's developer-friendly terminal interface through <code>npx jev-plays-pokemon</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/0xBOYD/status/2100418365986578908","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/0xBOYD/status/2100418365986578908
</div><figcaption class="wp-element-caption"><em>Andrew Boyd launched Jev Plays Pokémon with both a browser stream and terminal UI.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">The coding idea is simple: state in, typed choice out</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Jev is not a conventional text-generating chatbot. The model is designed to make bounded decisions. Software gives it state plus a defined set of questions or choices; Jev returns structured outputs with probabilities. In a game harness, that means the model can be treated more like a callable decision function than a conversational agent.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The basic loop looks familiar to anyone who has written gameplay AI:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>while game_is_running:
    state = read_game_state()
    options = build_legal_actions(state)
    decision = jev.choose(state, options)
    execute(decision)
    log_result()</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The hard part is everything around that loop: deciding which game state matters, generating good legal options, detecting failure states, preventing loops and changing the harness when the model reaches a dead end.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Claude acted more like a programmer than the player</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/developer-says-jev-decision-model-beat-pokemon-red-in-under-a-week-non-llm-engine-succeeds-where-traditional-chatbots-stalled-for-months-but-claude-opus-5-coached-the-model-through-its-dead-ends" target="_blank" rel="noopener noreferrer nofollow">Tom's Hardware's reporting</a> makes an important distinction: Jev did the playing, but Claude Opus 5 monitored logs and helped modify the harness when Jev repeatedly failed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes the experiment interesting from a programming perspective. Claude was not simply choosing every move. It was helping reshape the interface between the game and the decision model—changing options, wording and timing so the smaller decision loop had a better representation of the problem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One reported failure had Jev walk into Lorelei's closed entrance 53 times. Another loop sent it across the same Rock Tunnel ladder 124 times in ten minutes. When behavior like that appeared, the developer and coaching model changed the harness instead of merely hoping the next model call would fix itself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">This is game AI as systems engineering</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The architecture resembles classic game AI more than open-ended chat. Traditional NPC systems often separate perception, world state, decision logic and action execution. Jev Plays Pokémon uses a similar boundary: the harness interprets the game, generates allowed actions, and lets the decision model rank or choose among them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That connects directly to our recent <a href="https://bitcoinversus.tech/2026/10/01/gaming-swe-game-tests-whether-coding-agents-can-build-playable-games/">SWE-Game story</a>, where executable runtime behavior mattered more than code that merely looked plausible. In both cases, success is measured by what happens inside the game.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It also parallels <a href="https://bitcoinversus.tech/2026/10/01/gaming-universal-modder-turns-ai-coding-agents-into-pc-game-modders/">universal-modder's agent workflow</a>: AI becomes more useful when it can inspect a real environment, change a tool or harness, run again and verify the result.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>And our <a href="https://bitcoinversus.tech/2026/10/02/gaming-unity-gives-codex-31-game-development-skills-for-c-physics-and-the-cli/">Unity Codex plugin story</a> showed the same trend from the engine side—coding agents get better when the software exposes structured tools and domain-specific operations instead of relying on raw text alone.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">The terminal interface is more important than it looks</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Boyd's decision to expose the run through an npm command is a small but telling design choice. A terminal UI makes the experiment reproducible and observable. Developers can watch state changes, decisions and chat without needing a custom graphical client.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is a useful lesson for game-tool developers: build the debugging surface at the same time as the AI. Logs, deterministic inputs, state inspection and clear action boundaries often matter more than flashy autonomy because they make failures understandable.</p>
<!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Why typed decisions fit games</h2><!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Games naturally contain bounded choices. Move north. Open a menu. Select an attack. Use an item. Switch a party member. Those are easier to represent as typed actions than as paragraphs of generated language.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That does not make the task easy. The difficult engineering moves upstream into state design: what does the model know, which actions are legal, how often should it decide, what context is retained and what software handles execution?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Jev's Pokémon run is therefore a useful coding example even if the specific model is not what game studios ultimately adopt. It demonstrates a broader pattern: combine narrow probabilistic decision systems with ordinary deterministic code, explicit tools and a second model when open-ended repair is needed.</p>
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