# From Assembly to Kotlin: How Programming Languages Changed Computing

Published: 2026-09-30

Live: https://bitcoinversus.tech/2026/09/30/assembly-to-kotlin-programming-languages-changed-computing/

WordPress Post ID: 19690
Featured Media ID: 19689

<!-- wp:paragraph -->
<p><strong>A new programming-history video from decode_leox traces a surprisingly consistent pattern across eight decades of software: every major language shift has tried to move human intent farther away from raw machine instructions without giving up access to the hardware underneath.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The video, <em>Every Programming Language Explained</em>, moves from assembly and Fortran through COBOL, BASIC, Pascal, SQL, Perl, Lua, Ruby, Swift and Kotlin. The languages solve different problems, but the timeline reveals one recurring goal: make computers easier to command without requiring every programmer to think like a processor.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=RFuZjvNp6Q0","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=RFuZjvNp6Q0
</div><figcaption class="wp-element-caption"><em>decode_leox’s “Every Programming Language Explained” walks through the evolution from assembly and early high-level languages to modern platform languages such as Swift and Kotlin.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Assembly made machine instructions readable</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Early programmers worked extremely close to machine code. Processors ultimately execute numeric instructions, but humans are bad at remembering long tables of operation codes and raw addresses. Assembly introduced symbolic mnemonics so programmers could write instructions such as moves, loads, stores and arithmetic operations in a form that an assembler could translate into machine code.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://perspectives.blogs.bbk.ac.uk/2020/08/25/a-short-history-of-computer-science-at-birkbeck/">Birkbeck’s history of its computer-science department</a> credits Kathleen Booth with developing a very early assembly language for the computers she and Andrew Booth built in London. The important leap was not that assembly hid the machine. It gave humans a more manageable notation for controlling the machine directly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That low-level model still matters. BitcoinVersus.tech’s <a href="https://bitcoinversus.tech/2026/09/26/c-lesson-7-pointers-and-memory-addresses/">C++ lesson on pointers and memory addresses</a> teaches a modern version of the same idea: software eventually has to know where data lives and how instructions affect memory.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Fortran moved the burden into the compiler</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Assembly made machine code easier to write, but programmers still had to describe operations at a very fine level. Fortran changed the relationship. Scientists could express formulas and loops at a higher level, then let a compiler translate the program into efficient machine instructions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.ibm.com/history/fortran">IBM’s history of Fortran</a> records the language’s 1957 debut and describes how John Backus and his team turned automatic code generation into a practical tool for scientific computing. The compiler became an abstraction engine: programmers described the calculation while software handled much of the translation work.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That idea now feels ordinary because nearly every modern developer depends on it. A programmer can write Python, C++, Swift or Kotlin without manually deciding which binary opcode the processor should execute next.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">BASIC widened access to programming</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The next major step was not only technical. It was social. BASIC was designed so students who were not professional computer scientists could interact with a computer quickly. Readable commands and time-sharing systems turned programming from a specialist activity into something a much larger group could learn.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=WYPNjSoDrqw","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=WYPNjSoDrqw
</div><figcaption class="wp-element-caption"><em>Dartmouth’s “Birth of BASIC” documentary explains how John Kemeny, Thomas Kurtz and students built a language around the idea that ordinary students should be able to use a computer.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>That democratization continues in modern teaching languages. BitcoinVersus.tech’s <a href="https://bitcoinversus.tech/2026/09/30/ospython-008-modules-imports/">Python lesson on modules and imports</a> reflects how far abstraction has moved: a beginner can reuse a mathematical function from a library without knowing the implementation details or memory layout behind it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">SQL changed the question from how to what</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>SQL represents another kind of abstraction. A general-purpose language tells a computer how to perform many classes of work. SQL is specialized around structured data. A programmer describes the result wanted from a database, and the database engine decides how to search indexes, scan rows, join tables and return the answer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That declarative style pushed software farther from step-by-step machine thinking. The programmer can say what data should be selected without spelling out every internal storage operation. Modern applications still rely on that model because databases remain one of computing’s most persistent abstractions.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Perl, Lua and Ruby optimized for human productivity</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The 1980s and 1990s brought languages that treated programmer time as a first-class engineering problem. Perl became famous for text processing and systems glue. Lua was designed to be embedded inside larger programs. Ruby emphasized readable code and programmer happiness, later becoming closely associated with rapid web development through Ruby on Rails.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Lua is especially revealing because it does not try to replace the lower-level engine around it. It lives inside software written in languages such as C or C++, handling behavior while the host program manages heavier systems work. BitcoinVersus.tech recently covered <a href="https://bitcoinversus.tech/2026/09/29/gaming-crown-engine-0-65-expands-open-source-game-programming-tools/">Crown Engine’s use of Lua for runtime game logic</a>, a direct example of the embedded-scripting model still working decades after Lua’s creation.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Swift and Kotlin modernized existing ecosystems</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Swift and Kotlin show a newer strategy. Neither language arrived in an empty world. Apple already had enormous Objective-C codebases, while Android developers had years of Java software. The new languages had to improve safety, readability and developer productivity without forcing entire platforms to start over.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Interoperability became part of the language design. Swift could live beside Objective-C. Kotlin could live beside Java. The abstraction layer improved while the installed software base remained usable.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Higher-level code never eliminated the lower levels</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The most important lesson in the video is that programming history is not a sequence where each new language kills the previous one. Assembly still matters in firmware and architecture-specific code. Fortran remains active in scientific computing. COBOL still appears in large institutional systems. SQL remains foundational to databases. Lua remains embedded in software and games.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>New languages usually move the human interface upward while leaving lower layers intact. Python modules ultimately rely on compiled code. Ruby applications eventually execute processor instructions. A Swift app still becomes machine code. An Android application written in Kotlin still runs on hardware governed by instruction sets and memory systems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why programming languages keep multiplying instead of converging into one universal syntax. Different layers have different priorities: precise hardware control, scientific performance, business records, database queries, embedded scripting, web productivity, mobile safety or beginner accessibility.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The real trend is abstraction with escape hatches</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>From assembly to Kotlin, the long-term direction is clear. Developers keep asking computers to understand expressions that look more like human intent and less like processor instructions. Compilers, interpreters, runtimes and databases absorb increasing amounts of mechanical work.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The lower levels never disappear. They become layers that most programmers can ignore until performance, debugging, firmware, security or hardware behavior makes them important again. Modern programming is powerful precisely because developers can move up and down that stack when needed.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">BitcoinVersus.Tech</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Advertisement</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement: use promo code bitcoinversus for the offer described in the embedded post.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><strong><em><sup>BitcoinVersus.Tech Editor's Note:</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><strong><em><sup>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><em>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->
