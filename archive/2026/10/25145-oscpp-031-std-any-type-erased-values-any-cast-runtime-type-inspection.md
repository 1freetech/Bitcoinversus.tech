# OSC++.031: std::any — Type-Erased Values, any_cast, and Runtime Type Inspection

- WordPress post ID: 25145
- Published: 2026-10-14T19:40:38
- Canonical URL: https://bitcoinversus.tech/2026/10/14/oscpp-031-std-any-type-erased-values-any-cast-runtime-type-inspection/
- Slug: oscpp-031-std-any-type-erased-values-any-cast-runtime-type-inspection
- Status: publish
- Featured media ID: 25130
- Featured image dimensions: 1200x630
- Categories: C++ (44329), Open CERT (2509703)
- YouTube embed 1: https://www.youtube.com/watch?v=vLhr_y4YOIY
- YouTube embed 2: https://www.youtube.com/watch?v=5zkDeiyF5Rc
- YouTube embed 3: https://www.youtube.com/watch?v=xpomlTd41hg
- Social embed: https://www.reddit.com/r/cpp/comments/1rptj4n/deriving_type_erasure/
- Live verification: all three YouTube blocks rendered as iframe players; Reddit rendered natively; featured image attached; no fixed-width code blocks; original donation QR ID 24043 rendered intact at footer.

## Final Gutenberg Source

<!-- wp:paragraph -->
<p><strong><code>std::any</code> is a C++17 standard-library type that can own one value of almost any copy-constructible type while hiding that concrete type behind a uniform wrapper.</strong> It is useful when the producer and consumer agree that a value may vary at runtime but the exact set of possible types is not practical to encode into a fixed compile-time list.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This lesson follows <a href="https://bitcoinversus.tech/2026/10/14/oscpp-030-std-variant-type-safe-alternatives/"><strong>OSC++.030: std::variant</strong></a> and <a href="https://bitcoinversus.tech/2026/10/13/oscpp-029-std-optional-values-that-may-not-exist/"><strong>OSC++.029: std::optional</strong></a>. Those two vocabulary types deliberately communicate more structure to the compiler: <code>optional&lt;T&gt;</code> means one known type may or may not exist, while <code>variant&lt;A, B, C&gt;</code> means exactly one type from a known set is active. <code>std::any</code> moves farther toward runtime flexibility by erasing the stored type from the wrapper's static interface.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=vLhr_y4YOIY","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=vLhr_y4YOIY
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>C++ Weekly with Jason Turner introduces <code>std::any</code> and shows the core C++17 usage model.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What You’ll Learn</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Explain what type erasure means in practical C++.</li><li>Create empty and populated <code>std::any</code> objects.</li><li>Check whether an <code>any</code> contains a value.</li><li>Inspect the stored runtime type.</li><li>Recover the value safely with <code>std::any_cast</code>.</li><li>Understand the difference between throwing and pointer forms of <code>any_cast</code>.</li><li>Replace, reset, emplace, copy, move, and swap stored values.</li><li>Understand the CopyConstructible requirement.</li><li>Recognize small-object optimization as an implementation detail rather than a guarantee.</li><li>Choose between <code>std::any</code>, <code>std::variant</code>, <code>std::optional</code>, templates, and polymorphic interfaces.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Type Erasure Means</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Type erasure means that a concrete type is hidden behind a stable wrapper interface. The wrapper retains enough internal information to manage the value correctly, but normal users of the wrapper do not need the exact concrete type in the wrapper's own static type. A variable declared as <code>std::any value;</code> can later contain an <code>int</code>, <code>double</code>, <code>std::string</code>, or another eligible type without changing the declaration of <code>value</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The standard-library reference defines <code>std::any</code> in the <code>&lt;any&gt;</code> header and describes it as a type-safe container for single values of any copy-constructible type. The word <em>type-safe</em> is important. The wrapper does not perform arbitrary conversion when you request a value. If the object contains a <code>double</code>, asking for an <code>int</code> is a type mismatch rather than an implicit conversion.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Creating an Empty std::any</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A default-constructed <code>std::any</code> is empty. For example, <code>std::any value;</code> creates an object with no contained value. Call <code>value.has_value()</code> to determine whether a value is present. An empty <code>any</code> returns <code>false</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can later assign a value with syntax such as <code>value = 42;</code>, <code>value = 3.14;</code>, or <code>value = std::string{"ready"};</code>. Each assignment can replace the previous contained object with a value of a different eligible type.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Inspecting the Runtime Type</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The member function <code>type()</code> returns a <code>std::type_info</code> reference describing the currently stored type. A check such as <code>value.type() == typeid(std::string)</code> can therefore determine whether a string is stored before attempting to recover it. When the <code>any</code> is empty, <code>type()</code> reports <code>typeid(void)</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Runtime type inspection is useful for diagnostics, generic property systems, plugin metadata, scripting bridges, and APIs that intentionally allow callers to attach opaque user data. It should not automatically become the default way to design every interface. If the set of alternatives is known at compile time, <code>std::variant</code> normally communicates that design more clearly and gives the compiler more information.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=5zkDeiyF5Rc","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=5zkDeiyF5Rc
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>CppCon 2024 speaker Sebastian Theophil compares several C++ approaches to reusable data structures, including <code>std::variant</code>, virtual interfaces, templates, and <code>std::any</code>.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Recovering a Value with any_cast</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>std::any_cast</code> is the standard operation used to recover the stored object. If <code>value</code> contains an integer, <code>std::any_cast&lt;int&gt;(value)</code> returns that integer. If it contains a string, <code>std::any_cast&lt;std::string&gt;(value)</code> returns the string value.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The value- and reference-returning forms of <code>any_cast</code> throw <code>std::bad_any_cast</code> when the requested type does not match the stored type. That behavior connects directly to <a href="https://bitcoinversus.tech/2026/10/02/oscpp-015-exception-handling-basics/"><strong>OSC++.015: Exception Handling Basics</strong></a>. If exception-free probing is preferable, the pointer form is usually the better fit.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Pointer Form Is a Safe Probe</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When you call <code>std::any_cast&lt;T&gt;(&amp;value)</code>, the result is a pointer to the stored <code>T</code> when the type matches and <code>nullptr</code> when it does not. A compact pattern is: <code>if (auto* p = std::any_cast&lt;int&gt;(&amp;value))</code>, followed by use of <code>*p</code> inside the successful branch.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This form is especially useful when an interface genuinely allows several unrelated runtime types and the caller wants to test for one specific type without using exceptions as ordinary control flow.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Changing or Clearing the Stored Value</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Call <code>reset()</code> to destroy the contained object and return the wrapper to the empty state. Call <code>emplace&lt;T&gt;(...)</code> to construct a new value of type <code>T</code> directly inside the <code>any</code>. The helper <code>std::make_any&lt;T&gt;(...)</code> creates an <code>any</code> containing a directly constructed <code>T</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>swap()</code> exchanges the states of two <code>std::any</code> objects. Copying an <code>any</code> copies its contained value when one exists. Moving transfers the state into the destination and leaves the source valid but otherwise unspecified, as with many moved-from standard-library objects.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Move-Only Types Are a Limitation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The contained type must satisfy the relevant copy-construction requirements. That means <code>std::any</code> is not a direct container for a purely move-only object such as a typical <code>std::unique_ptr&lt;T&gt;</code>. This is one of the most important practical limitations to remember when comparing <code>std::any</code> with custom type-erasure wrappers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If an interface must hold arbitrary move-only types, the design may need a different wrapper, dynamic polymorphism, a variant over known alternatives, a shared ownership model, or a purpose-built type-erasure abstraction.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=xpomlTd41hg","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=xpomlTd41hg
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>CppCon 2023 explores non-virtual polymorphism and several type-erasure techniques, including <code>std::any</code> and <code>std::variant</code>.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Small-Object Optimization</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An implementation can store sufficiently small values directly inside the <code>std::any</code> object instead of allocating separate dynamic storage. The standard encourages implementations to avoid dynamic allocation for small objects when appropriate, but the exact buffer size and threshold are implementation details. Code should not depend on a particular compiler or standard library using the same internal size.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This means performance-sensitive software should measure the actual target implementation. A value that fits in one library's internal buffer may allocate in another. The public semantics remain the same even when the storage strategy differs.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/cpp/comments/1rptj4n/deriving_type_erasure/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/cpp/comments/1rptj4n/deriving_type_erasure/
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>A 2026 r/cpp discussion walks through how type erasure can be derived and includes community discussion of real <code>std::any</code> use cases, implementation strategies, and small-buffer optimization tradeoffs.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">std::any vs. std::variant</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><strong>Use <code>std::variant</code></strong> when the set of legal types is known and closed.</li><li><strong>Use <code>std::any</code></strong> when the wrapper must accept values from an open or externally defined set of copyable types.</li><li><strong>Variant</strong> makes alternatives visible in the type system and enables exhaustive visitation.</li><li><strong>Any</strong> hides alternatives and requires runtime agreement about what type is stored.</li><li><strong>Variant</strong> is usually easier to reason about when all alternatives are under your control.</li><li><strong>Any</strong> is useful for extension points and opaque metadata where the library should carry data without understanding it.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">std::any vs. std::optional</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>std::optional&lt;T&gt;</code> answers one question: is a <code>T</code> present? <code>std::any</code> answers a broader question: is some copyable value present, and what runtime type is it? If the program only needs an integer that may be missing, <code>std::optional&lt;int&gt;</code> is clearer than <code>std::any</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">When std::any Is a Good Fit</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Attaching arbitrary user metadata to nodes or objects owned by a library.</li><li>Property bags where different keys may carry unrelated runtime types.</li><li>Plugin systems where extensions need to transport opaque values through framework code.</li><li>Interoperability layers that must preserve a value whose concrete type is understood only at the boundary.</li><li>Callback context or user data when ownership and type checking are useful.</li><li>Diagnostic or scripting systems where the exact type is intentionally discovered at runtime.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">When std::any Is Usually the Wrong Tool</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>When all valid alternatives are already known: prefer <code>std::variant</code>.</li><li>When one known type may be absent: prefer <code>std::optional</code>.</li><li>When every stored object must expose the same behavior: consider an interface, concept-driven design, or a purpose-built type-erasure wrapper.</li><li>When compile-time genericity is sufficient: use templates rather than discarding type information.</li><li>When maximum predictability and minimal runtime overhead are required: benchmark carefully before choosing an open-ended runtime container.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Small Mental Model</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Think of <code>std::any</code> as an owned box with a hidden label. The box can be empty or contain one eligible object. The wrapper knows how to destroy and copy that object. You can ask whether the box has something inside, inspect the hidden type label, and request the value back with the exact expected type. Ask for the wrong type and the safe access mechanism refuses the mismatch.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Hands-On Exercise</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ol><li>Create an empty <code>std::any</code> named <code>data</code>.</li><li>Verify that <code>has_value()</code> is initially false.</li><li>Assign the integer <code>42</code>.</li><li>Use the pointer form of <code>any_cast</code> to test for <code>int</code> and print the value.</li><li>Replace the integer with a <code>std::string</code>.</li><li>Inspect the runtime type with <code>type()</code>.</li><li>Use a throwing <code>any_cast</code> inside a <code>try</code>/<code>catch</code> block and intentionally request the wrong type.</li><li>Catch <code>std::bad_any_cast</code> and report the mismatch.</li><li>Call <code>reset()</code> and confirm that the object is empty.</li><li>Use <code>emplace&lt;std::string&gt;</code> to construct a new string directly.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Knowledge Check</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ol><li>What problem does <code>std::any</code> solve?</li><li>Which header defines it?</li><li>Which C++ standard introduced it?</li><li>What does <code>has_value()</code> report?</li><li>What does <code>type()</code> return for an empty <code>any</code>?</li><li>What happens when value-returning <code>any_cast</code> requests the wrong type?</li><li>What does pointer-form <code>any_cast</code> return on a mismatch?</li><li>Why can a typical move-only <code>unique_ptr</code> not be stored directly?</li><li>When is <code>std::variant</code> generally clearer?</li><li>Is small-object optimization guaranteed to have the same size across implementations?</li></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Answers</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ol><li>It provides a type-safe owning wrapper that can hold one value from an open set of eligible runtime types.</li><li><code>&lt;any&gt;</code>.</li><li>C++17.</li><li>Whether a contained value is present.</li><li><code>typeid(void)</code>.</li><li>It throws <code>std::bad_any_cast</code>.</li><li><code>nullptr</code>.</li><li>The contained type must satisfy the copy-construction requirements expected by <code>std::any</code>.</li><li>When the legal alternatives are known at compile time.</li><li>No. The optimization and internal buffer size are implementation details.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Primary technical references: <a href="https://en.cppreference.com/cpp/utility/any">cppreference — std::any</a> and <a href="https://en.cppreference.com/cpp/header/any">cppreference — standard library header &lt;any&gt;</a>. C++17 added <code>std::any</code>, <code>std::optional</code>, and <code>std::variant</code> as standard-library vocabulary types.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key Takeaway</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><code>std::any</code> is runtime flexibility with type-checked recovery.</strong> It is strongest when a library needs to transport an owned value without knowing every concrete type in advance. It is weaker when the program already knows its alternatives and would benefit from having those alternatives visible in the static type system.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Rotation next:</strong> Semiconductor Technician.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"width":"1170px","height":"1038px","sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" style="width:1170px;height:1038px" width="1170" height="1038" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->