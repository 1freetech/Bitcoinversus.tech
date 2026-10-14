---
post_id: 25084
title: "OSC++.030: std::variant — Type-Safe Alternatives and std::visit"
slug: oscpp-030-std-variant-type-safe-alternatives-std-visit
status: publish
published: 2026-10-14T19:19:32
canonical_url: https://bitcoinversus.tech/2026/10/14/oscpp-030-std-variant-type-safe-alternatives-std-visit/
archive_format: final Gutenberg source
---

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Elementary Overview</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>std::variant</code> is a C++17 standard-library type that stores exactly one value from a fixed list of possible types. A declaration such as <code>std::variant&lt;int, double, std::string&gt; value;</code> says that <code>value</code> may contain an <code>int</code>, a <code>double</code>, or a <code>std::string</code>, but only one of them is active at a time. This makes <code>std::variant</code> a type-safe alternative to a traditional C-style union when the program needs several possible representations for one logical value.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The type lives in the <code>&lt;variant&gt;</code> header. Its central design idea is a <em>closed set of alternatives</em>: the compiler knows every permitted type in advance. That differs from runtime polymorphism through virtual functions, where new derived classes may be added later. The complete library interface is documented in the <a href="https://en.cppreference.com/w/cpp/utility/variant.html">cppreference reference for std::variant</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=VZT2E8LAxCw","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=VZT2E8LAxCw
</div><figcaption class="wp-element-caption"><em>Mike Shah explains std::variant as a type-safe tagged union in modern C++.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Creating and Assigning Alternatives</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If the first alternative is default-constructible, a default-constructed variant starts by holding that first type. For example, <code>std::variant&lt;int, std::string&gt; data;</code> begins with an <code>int</code> initialized to zero. Assigning <code>data = std::string{"ready"};</code> changes the active alternative to <code>std::string</code>. Assigning <code>data = 42;</code> changes it back to <code>int</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;variant&gt;

int main() {
    std::variant&lt;int, double, std::string&gt; data = 42;

    data = 3.14;
    data = std::string{"online"};

    std::cout &lt;&lt; "Active index: " &lt;&lt; data.index() &lt;&lt; '\n';
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The <code>index()</code> member reports which alternative is active. Index zero refers to the first declared type, index one to the second, and so on. Code usually should not depend heavily on raw numeric indexes because type-based access is clearer, but the index is useful for diagnostics, serialization, and low-level state inspection.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/cpp/comments/1ewrifh/using_stdvariant_and_stdvisit_instead_of_enums/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/cpp/comments/1ewrifh/using_stdvariant_and_stdvisit_instead_of_enums/
</div><figcaption class="wp-element-caption"><em>C++ community discussion comparing std::variant-based state modeling with ordinary enums and runtime polymorphism.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Reading the Active Value</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>std::get&lt;T&gt;(variant)</code> retrieves the active value when the variant currently holds type <code>T</code>. If the requested type is not active, <code>std::get</code> throws <code>std::bad_variant_access</code>. A safer inspection pattern is to call <code>std::holds_alternative&lt;T&gt;</code> first or use <code>std::get_if&lt;T&gt;</code>, which returns a pointer to the active value when the type matches and <code>nullptr</code> otherwise.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>std::variant&lt;int, std::string&gt; state = std::string{"running"};

if (std::holds_alternative&lt;std::string&gt;(state)) {
    std::cout &lt;&lt; std::get&lt;std::string&gt;(state) &lt;&lt; '\n';
}

if (const auto* text = std::get_if&lt;std::string&gt;(&amp;state)) {
    std::cout &lt;&lt; "Length: " &lt;&lt; text-&gt;size() &lt;&lt; '\n';
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This explicit checking is closely related to the absence-handling model introduced in <a href="https://bitcoinversus.tech/2026/10/13/oscpp-029-std-optional-values-that-may-not-exist/">OSC++.029 on std::optional</a>. The difference is that <code>std::optional&lt;T&gt;</code> represents either one <code>T</code> or no value, while <code>std::variant&lt;A, B, C&gt;</code> represents exactly one value selected from several different types.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">std::visit and Type-Safe Dispatch</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>std::visit</code> applies a callable to the currently active alternative. The compiler checks whether the visitor can handle the possible variant alternatives. A generic lambda can handle every type through one function body, while an overloaded visitor can give each type its own behavior. This turns the variant into a compact form of compile-time-checked runtime dispatch.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=NhhvJkBGUlk","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=NhhvJkBGUlk
</div><figcaption class="wp-element-caption"><em>Mike Shah demonstrates the visitor pattern using std::variant and std::visit.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:code -->
<pre class="wp-block-code"><code>std::variant&lt;int, double, std::string&gt; value = 12.5;

std::visit([](const auto&amp; item) {
    std::cout &lt;&lt; item &lt;&lt; '\n';
}, value);</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>For different behavior per type, a common helper combines several lambdas into one overload set:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>template&lt;class... Ts&gt;
struct overloaded : Ts... {
    using Ts::operator()...;
};

template&lt;class... Ts&gt;
overloaded(Ts...) -&gt; overloaded&lt;Ts...&gt;;

std::variant&lt;int, double, std::string&gt; value = std::string{"rack-07"};

std::visit(overloaded{
    [](int n) { std::cout &lt;&lt; "int: " &lt;&lt; n &lt;&lt; '\n'; },
    [](double x) { std::cout &lt;&lt; "double: " &lt;&lt; x &lt;&lt; '\n'; },
    [](const std::string&amp; s) { std::cout &lt;&lt; "string: " &lt;&lt; s &lt;&lt; '\n'; }
}, value);</code></pre>
<!-- /wp:code -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=4v-pPkVaFA4","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=4v-pPkVaFA4
</div><figcaption class="wp-element-caption"><em>Pacific++ demonstrates how std::variant can model type-safe state machines and move certain errors from runtime to compile time.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">std::monostate and Default Construction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A variant normally needs its first alternative to be default-constructible if the variant itself is default-constructed. <code>std::monostate</code> is an empty placeholder type that can be placed first when an explicit neutral state is useful. For example, <code>std::variant&lt;std::monostate, Connected, Failed&gt;</code> can begin in a known “not yet initialized” state before transitioning to a real application state.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is different from ownership tools such as the smart pointers introduced in <a href="https://bitcoinversus.tech/2026/10/05/oscpp-021-smart-pointers-unique-ptr-shared-ptr-weak-ptr-ownership/">OSC++.021</a>. A variant chooses among value types. A smart pointer primarily describes ownership and lifetime of dynamically managed objects. Both can participate in polymorphic designs, but they solve different problems.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">The valueless_by_exception State</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A variant is designed to hold one active alternative, but a rare exceptional case exists. During certain type-changing operations, construction of the replacement value can throw after the previous value has already been destroyed. The variant can then become <code>valueless_by_exception()</code>. In that state, <code>index()</code> returns <code>std::variant_npos</code>. Good type design, non-throwing moves, and careful exception guarantees reduce the chance of reaching this state.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The connection to <a href="https://bitcoinversus.tech/2026/10/13/oscpp-028-std-move-if-noexcept-exception-safe-moving-noexcept-vector-reallocation/">OSC++.028 on std::move_if_noexcept</a> is important. Both topics show how move operations and exception guarantees affect whether library containers can preserve strong invariants while changing stored objects.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">When std::variant Fits</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>std::variant</code> fits best when the set of legal alternatives is known and intentionally closed: parser tokens, protocol messages, configuration values, state-machine states, syntax-tree nodes, or a result that can take several specific forms. It is less attractive when new runtime types must be added independently without modifying the original type list. In that case, inheritance, type erasure, or another extensibility mechanism may be more appropriate.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A variant should not be selected solely because it can replace virtual dispatch. Performance depends on the alternatives, visitation patterns, memory layout, branch behavior, and compiler optimization. The design benefit is primarily that the allowed types are explicit and checked by the compiler. Profiling determines whether any particular dispatch strategy is faster.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Exercise</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Create <code>using SensorReading = std::variant&lt;int, double, std::string&gt;;</code>. Store an integer RPM reading, a floating-point temperature reading, and a string status message in three separate variables. Write one visitor that prints each value. Then write an overloaded visitor that labels each value as <code>RPM</code>, <code>Temperature</code>, or <code>Status</code>. Finally, call <code>index()</code>, <code>holds_alternative</code>, and <code>get_if</code> on at least one variant.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Knowledge Check</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>1.</strong> How many alternatives can a <code>std::variant</code> hold at one time? <strong>2.</strong> What does <code>std::get_if</code> return when the requested type is not active? <strong>3.</strong> What is the main purpose of <code>std::visit</code>? <strong>4.</strong> Why might <code>std::monostate</code> be placed first in a variant? <strong>5.</strong> What does <code>valueless_by_exception()</code> mean?</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Answers</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>1.</strong> Exactly one active alternative at a time. <strong>2.</strong> A null pointer. <strong>3.</strong> It dispatches a callable to the variant’s currently active alternative with compile-time type checking. <strong>4.</strong> It provides a simple default-constructible neutral state. <strong>5.</strong> An exceptional operation left the variant with no active alternative.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Elementary Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>std::variant</code> provides a disciplined way to represent “one of several known types.” <code>std::get</code>, <code>std::get_if</code>, and <code>std::holds_alternative</code> inspect the active value, while <code>std::visit</code> turns the variant into a type-safe dispatch mechanism. The essential design question is simple: when a value may legally take one of several fixed forms, a variant makes those forms part of the type system instead of hiding them behind unchecked tags, casts, or magic conventions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full" style="text-align:center"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" style="width:72vw;max-width:1170px;height:auto;display:block;margin-left:auto;margin-right:auto" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->