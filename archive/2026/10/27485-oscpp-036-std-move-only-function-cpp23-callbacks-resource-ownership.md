---
lesson_id: OSC++.036
post_id: 27485
title: "OSC++.036: std::move_only_function — Move-Only Callbacks and Resource Ownership in C++23"
url: "https://bitcoinversus.tech/2026/10/30/oscpp-036-std-move-only-function-cpp23-callbacks-resource-ownership/"
featured_media: 27482
---

<!-- wp:paragraph --><p><strong>std::move_only_function</strong> is a C++23 type-erased callable wrapper designed for objects that can be moved but do not need to be copied. It extends the ideas behind <a href="https://bitcoinversus.tech/2026/10/15/oscpp-032-std-function-callable-objects-functions-lambdas-functors-type-erasure-invocation/">std::function</a> to callbacks that own unique resources, including lambdas capturing <code>std::unique_ptr</code> by move. This chapter, <strong>OSC++.036</strong>, follows <a href="https://bitcoinversus.tech/2026/10/29/oscpp-035-std-bind-back-binding-trailing-arguments-cpp23/">OSC++.035 on std::bind_back</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Why copyability matters for callbacks</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <code>std::function&lt;void()&gt;</code> wrapper requires a copy-constructible target. A lambda that captures a <code>std::unique_ptr</code> by value through move is not copyable, because its captured unique pointer cannot be copied. This is a common issue when callbacks own sockets, file handles, task state or other exclusive resources. <code>std::move_only_function&lt;void()&gt;</code> can hold such a lambda and transfer ownership of the wrapper to another scope.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>#include &lt;functional&gt;
#include &lt;memory&gt;
#include &lt;iostream&gt;
#include &lt;utility&gt;

int main() {
    auto resource = std::make_unique&lt;int&gt;(42);
    std::move_only_function&lt;void()&gt; task =
        [value = std::move(resource)]() {
            std::cout &lt;&lt; *value &lt;&lt; '\n';
        };
    task();
}</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Compile with a compiler and standard library implementing C++23 <code>std::move_only_function</code>, such as a sufficiently recent GCC or MSVC toolchain. Check the library feature-test macro <code>__cpp_lib_move_only_function</code> (value 202110L) rather than assuming all C++23 modes include the feature.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>How move-only ownership differs from std::function</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <code>std::function</code> object can be copied and therefore requires a copyable stored target. A <code>std::move_only_function</code> object can be moved but not copied. Both erase the concrete callable type behind a specified function signature. Neither is automatically thread-safe; moving a callback between threads does not synchronize access to resources referenced or owned by the callback.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The following CppCon presentation surveys practical C++23 library additions, including move-only function wrappers. It gives broader context for the language and library evolution.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=b0NkuoUkv0M]<!-- /wp:shortcode -->

<!-- wp:heading --><h2>Function signatures and qualifiers</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Unlike <code>std::function</code>, <code>std::move_only_function</code> supports function-type signatures qualified with <code>const</code>, ref-qualifiers and <code>noexcept</code>. These qualifiers can constrain how the stored callable may be invoked. For example, <code>std::move_only_function&lt;int() const&gt;</code> represents a wrapper callable on a const object, while an unqualified <code>int()</code> signature does not impose that same const-invocation requirement.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>#include &lt;functional&gt;

int main() {
    std::move_only_function&lt;int() const&gt; answer = [] { return 42; };
    const auto&amp; view = answer;
    return view() == 42 ? 0 : 1;
}</code></pre><!-- /wp:code -->

<!-- wp:heading --><h2>Transferring a callback into a task queue</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Move-only callbacks are particularly useful when a task queue takes ownership of work. A queue can store <code>std::move_only_function&lt;void()&gt;</code> objects and move them out for execution. The queue still needs suitable synchronization for concurrent producers and consumers, and the callback must not be invoked when empty. Unlike <code>std::function</code>, invoking an empty <code>std::move_only_function</code> has undefined behavior; check its boolean state before calling.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>#include &lt;functional&gt;
#include &lt;memory&gt;
#include &lt;utility&gt;
#include &lt;vector&gt;

int main() {
    std::vector&lt;std::move_only_function&lt;void()&gt;&gt; tasks;
    auto state = std::make_unique&lt;int&gt;(7);
    tasks.emplace_back([s = std::move(state)] { ++*s; });
    for (auto&amp; task : tasks) {
        if (task) task();
    }
}</code></pre><!-- /wp:code -->

<!-- wp:heading --><h2>Move semantics and the lifetime of captured resources</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A move operation transfers the wrapper's callable state without requiring that state to be copyable. After moving from a wrapper, the source remains valid but its state is unspecified; do not rely on it being empty. A moved-to wrapper can be tested with <code>operator bool</code> before invocation. Captured pointers or references still require their own lifetime discipline. Capturing a raw pointer to a local variable does not extend that variable's lifetime.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For a deeper explanation of value categories, moving objects and resource ownership, the following university lecture discusses copy elision, implicit moves and exception behavior. Its focus is broader than the C++23 wrapper but supplies the underlying model.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->[youtube https://www.youtube.com/watch?v=yoA7fFfBRII]<!-- /wp:shortcode -->

<!-- wp:heading --><h2>Selecting the right callable abstraction</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Use a template parameter when the caller can supply a concrete callable type and generic code is appropriate. Use <code>std::function</code> when copyable type-erased callbacks are required. Use <code>std::move_only_function</code> when the owning wrapper must support noncopyable targets. Use a function pointer when a plain function address suffices, and consider non-owning callable references only when their lifetime can be guaranteed. The preceding chapters on <a href="https://bitcoinversus.tech/2026/10/24/oscpp-033-std-invoke-functions-lambdas-member-pointers/">std::invoke</a>, <a href="https://bitcoinversus.tech/2026/10/27/oscpp-034-std-bind-front-leading-arguments-cpp20/">std::bind_front</a> and <a href="https://bitcoinversus.tech/2026/10/29/oscpp-035-std-bind-back-binding-trailing-arguments-cpp23/">std::bind_back</a> explain complementary callable tools.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Common mistakes and diagnostics</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>If a compiler reports that <code>std::move_only_function</code> is not a member of <code>std</code>, check the selected language standard, library version and header <code>&lt;functional&gt;</code>. If copying a wrapper fails, move it instead when ownership transfer is intended. If a callback references a destroyed object, redesign the capture or ownership strategy. If a callback is empty, do not invoke it. The wrapper's presence does not guarantee the underlying operation will succeed.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Knowledge check</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>Why can a move-only lambda be stored here but not in std::function?</strong> Because this wrapper does not require its stored target to be copyable. <strong>Does std::move_only_function make callback execution thread-safe?</strong> No. <strong>What happens when an empty move-only function is invoked?</strong> The behavior is undefined; test the wrapper before invocation.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Further reading</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Read the <a href="https://en.cppreference.com/w/cpp/utility/functional/move_only_function.html">cppreference reference for std::move_only_function</a>, the <a href="https://wg21.link/p0288r9">WG21 P0288R9 proposal</a>, and <a href="https://en.cppreference.com/w/cpp/utility/functional/function.html">std::function documentation</a>. Continue with related <a href="https://bitcoinversus.tech/2026/10/15/oscpp-032-std-function-callable-objects-functions-lambdas-functors-type-erasure-invocation/">OSC++.032</a> and <a href="https://bitcoinversus.tech/2026/10/24/oscpp-033-std-invoke-functions-lambdas-member-pointers/">OSC++.033</a>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our work and help further secure the integrity of our research initiatives, please scan the QR code below to donate <strong>5,000 sats</strong> (best results on a laptop or larger screen).</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech Bitcoin donation QR" class="wp-image-24043"/></figure><!-- /wp:image -->

<!-- wp:paragraph --><p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p><!-- /wp:paragraph -->