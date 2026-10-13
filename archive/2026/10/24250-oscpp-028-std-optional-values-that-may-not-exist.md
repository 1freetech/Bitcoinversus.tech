---
post_id: 24250
title: "OSC++.028: std::optional — Values That May Not Exist"
slug: oscpp-028-std-optional-values-that-may-not-exist
status: publish
published: 2026-10-13T05:05:13
modified: 2026-10-13T05:05:13
live_url: https://bitcoinversus.tech/2026/10/13/oscpp-028-std-optional-values-that-may-not-exist/
featured_media: 24249
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/oscpp-028-std-optional-cover.jpg
qr_media_id: 24135
seo_title: "OSC++.028: std::optional — Values That May Not Exist"
seo_description: "Learn std::optional in modern C++: engaged and empty states, nullopt, value(), value_or(), safe access, monadic operations and C++26 range support."
---

<!-- wp:paragraph -->
<p><strong>std::optional</strong> is a C++ standard-library type for representing a value that may or may not exist. Instead of inventing a magic sentinel such as <code>-1</code>, returning a raw pointer only to signal absence, or pairing a value with a separate Boolean flag, <code>std::optional&lt;T&gt;</code> makes the two states explicit: engaged with a <code>T</code>, or empty.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The type was added in C++17 through the <code>&lt;optional&gt;</code> header. A basic declaration looks like <code>std::optional&lt;int&gt; result;</code>. That object begins empty. Assigning <code>result = 42;</code> engages it, while <code>result = std::nullopt;</code> returns it to the empty state. The <a href="https://en.cppreference.com/w/cpp/utility/optional.html">cppreference std::optional documentation</a> provides the complete interface and version history.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=fTbTF0MUsPA","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=fTbTF0MUsPA
</div><figcaption class="wp-element-caption"><em>CppCon 2025: Steve Downey traces std::optional from its early Boost roots through modern C++ and the C++26 extensions.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Reading an Optional Safely</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can test an optional with <code>if (result)</code> or <code>result.has_value()</code>. Once you know it contains a value, <code>*result</code> accesses that value directly. <code>result.value()</code> also returns the stored value, but throws <code>std::bad_optional_access</code> if the optional is empty. <code>result.value_or(0)</code> returns the stored value when present and a fallback value otherwise.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This fits naturally with the value-semantics ideas developed earlier in <a href="https://bitcoinversus.tech/2026/10/06/oscpp-022-move-semantics-rvalue-references-std-move-move-constructors-move-assignment/">OSC++.022 on move semantics</a> and <a href="https://bitcoinversus.tech/2026/10/07/oscpp-024-rule-of-five-rule-of-zero-copy-move-lifecycle-ownership-safe-class-design/">OSC++.024 on the Rule of Five and Rule of Zero</a>. An optional owns its contained object rather than merely pointing somewhere else, so copying or moving the optional copies or moves that contained value when one exists.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/cpp/comments/1v7gp48/stdoptional_satisfies_view_does_not_model_view/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/cpp/comments/1v7gp48/stdoptional_satisfies_view_does_not_model_view/
</div><figcaption class="wp-element-caption"><em>The C++ community continues to examine std::optional's expanding role, including its new range behavior in C++26.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Returning “Maybe” From a Function</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A common use is a function that may fail to find a value without treating that absence as an exceptional condition. For example: <code>std::optional&lt;int&gt; find_port(std::string_view name)</code> can return a real port number when it finds one or <code>std::nullopt</code> when no match exists. The caller must then handle the missing state explicitly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Modern C++ also lets optionals participate in chained operations. C++23 added <code>and_then</code>, <code>transform</code>, and <code>or_else</code>, which can process a value only when it exists or provide recovery logic when it does not. C++26 extends <code>std::optional</code> further with range support, allowing an optional to behave like a range containing zero or one elements. The standardization history is documented in the <a href="https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3168r2.html">WG21 proposal for optional range support</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">When Not to Use It</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Use <code>std::optional</code> when “no value” is a normal state. If a function must explain <em>why</em> it failed, a richer result such as <code>std::expected</code> may be a better fit. If ownership itself is optional and dynamic allocation is required, a smart pointer may describe the design more accurately. The goal is not to replace every pointer or error mechanism; it is to make absence explicit when absence is part of the data model.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The previous lesson, <a href="https://bitcoinversus.tech/2026/10/12/oscpp-027-std-exchange-replace-value-return-old-one/">OSC++.027 on std::exchange</a>, focused on replacing one value while retrieving the previous value. <code>std::optional</code> solves a different problem: representing whether a value exists at all.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Exercise</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Write a function named <code>parse_temperature</code> that accepts a string and returns <code>std::optional&lt;double&gt;</code>. Return a parsed temperature for valid numeric input and <code>std::nullopt</code> for invalid input. In <code>main()</code>, call the function twice: once with valid input and once with invalid input. Print the value when present and a clear fallback message when it is absent.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Knowledge Check</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>1.</strong> What are the two states of a <code>std::optional</code>? <strong>2.</strong> What does <code>std::nullopt</code> represent? <strong>3.</strong> What happens when <code>.value()</code> is called on an empty optional? <strong>4.</strong> When is <code>std::optional</code> preferable to a magic sentinel value?</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Answers</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>1.</strong> Engaged with a stored value, or empty. <strong>2.</strong> An intentionally empty optional state. <strong>3.</strong> It throws <code>std::bad_optional_access</code>. <strong>4.</strong> When absence is a legitimate state and should be represented explicitly instead of encoded inside an ordinary value.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24135,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr.jpeg" alt="Bitcoin donation QR code requesting 5,000 satoshis for BitcoinVersus.Tech research initiatives." class="wp-image-24135" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->
