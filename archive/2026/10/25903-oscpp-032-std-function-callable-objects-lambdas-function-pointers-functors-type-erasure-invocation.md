# OSC++.032: std::function and Callable Objects — Lambdas, Function Pointers, Functors, Type Erasure, and Invocation

- WordPress post ID: 25903
- Published: 2026-10-15T23:04:29
- Canonical URL: https://bitcoinversus.tech/2026/10/15/oscpp-032-std-function-callable-objects-lambdas-function-pointers-functors-type-erasure-invocation/
- Slug: oscpp-032-std-function-callable-objects-lambdas-function-pointers-functors-type-erasure-invocation
- Status: publish
- Featured media ID: 25901
- Featured image dimensions: 1200x630
- Categories: computer programming (44329), Tech Docs (2509703)
- YouTube embed 1: https://www.youtube.com/watch?v=xJSKk_q25oQ
- YouTube embed 2: https://www.youtube.com/watch?v=tbUCHifyT24
- YouTube embed 3: https://www.youtube.com/watch?v=SToaMS3jNH0
- Live verification: all three YouTube blocks rendered as iframe players; anchored lesson navigation survived; native details blocks rendered; featured image attached; original donation QR ID 24043 rendered intact at footer.

## Final Gutenberg Source

<!-- wp:paragraph -->
<p><strong><code>std::function</code> gives C++ one stable, copyable wrapper for many different callable types.</strong> A free function, function pointer, lambda expression, functor, bind expression, or compatible member-function target can all be presented through the same signature such as <code>std::function&lt;int(int, int)&gt;</code>. This lesson follows <a href="https://bitcoinversus.tech/2026/10/14/oscpp-031-std-any-type-erased-values-any-cast-runtime-type-inspection/"><strong>OSC++.031: std::any</strong></a>, <a href="https://bitcoinversus.tech/2026/10/14/oscpp-030-std-variant-type-safe-alternatives/"><strong>OSC++.030: std::variant</strong></a>, and <a href="https://bitcoinversus.tech/2026/10/13/oscpp-029-std-optional-values-that-may-not-exist/"><strong>OSC++.029: std::optional</strong></a>. The common theme is interface design: when should type information stay visible at compile time, and when is runtime type erasure the better engineering trade?</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=xJSKk_q25oQ","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=xJSKk_q25oQ
</div><figcaption class="wp-element-caption"><em>C++ Weekly with Jason Turner builds a simplified <code>std::function</code> implementation and exposes the mechanics behind the abstraction.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"anchor":"lesson-navigation"} -->
<h2 class="wp-block-heading" id="lesson-navigation">Lesson Navigation</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><a href="#learning-objectives">Learning objectives</a></li><li><a href="#callable-model">The C++ callable model</a></li><li><a href="#first-wrapper">Your first std::function</a></li><li><a href="#lambda-storage">Storing lambdas and functors</a></li><li><a href="#type-erasure">How type erasure works</a></li><li><a href="#empty-state">Empty wrappers and bad_function_call</a></li><li><a href="#target-inspection">Inspecting the stored target</a></li><li><a href="#performance">Performance and allocation</a></li><li><a href="#modern-alternatives">Modern alternatives</a></li><li><a href="#decision-table">Decision table</a></li><li><a href="#exercises">Hands-on exercises</a></li><li><a href="#knowledge-check">Knowledge check</a></li></ul>
<!-- /wp:list -->

<!-- wp:heading {"anchor":"learning-objectives"} -->
<h2 class="wp-block-heading" id="learning-objectives">Learning Objectives</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Define what a callable object is in modern C++.</li><li>Declare <code>std::function&lt;R(Args...)&gt;</code> with the correct call signature.</li><li>Store free functions, function pointers, lambdas, and function objects.</li><li>Use <code>operator bool</code> to test whether a wrapper has a target.</li><li>Explain why invoking an empty wrapper throws <code>std::bad_function_call</code>.</li><li>Inspect stored targets with <code>target_type()</code> and <code>target&lt;T&gt;()</code>.</li><li>Explain type erasure without confusing it with type conversion.</li><li>Recognize the copyability requirement imposed on stored targets.</li><li>Understand why type erasure can add indirection and sometimes allocation.</li><li>Choose among templates, raw function pointers, <code>std::function</code>, <code>std::move_only_function</code>, and <code>std::function_ref</code>.</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"anchor":"callable-model"} -->
<h2 class="wp-block-heading" id="callable-model">The C++ Callable Model</h2>
<!-- /wp:heading -->

<!-- wp:table -->
<figure class="wp-block-table"><table><thead><tr><th>Callable form</th><th>Example</th><th>Own state?</th><th>Can std::function wrap it?</th></tr></thead><tbody><tr><td>Free function</td><td><code>int add(int, int)</code></td><td>No</td><td>Yes</td></tr><tr><td>Function pointer</td><td><code>int (*p)(int, int)</code></td><td>No</td><td>Yes</td></tr><tr><td>Captureless lambda</td><td><code>[](int x){ return x * 2; }</code></td><td>No captured state</td><td>Yes</td></tr><tr><td>Capturing lambda</td><td><code>[factor](int x){ return x * factor; }</code></td><td>Yes</td><td>Yes, if copy-constructible</td></tr><tr><td>Functor</td><td><code>Multiplier{3}</code></td><td>Usually</td><td>Yes, if copy-constructible</td></tr><tr><td>Member-function target</td><td><code>&amp;Widget::run</code></td><td>Object supplied at invocation</td><td>Yes</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading {"anchor":"first-wrapper"} -->
<h2 class="wp-block-heading" id="first-wrapper">Your First std::function</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#include &lt;functional&gt;
#include &lt;iostream&gt;

int add(int a, int b)
{
    return a + b;
}

int main()
{
    std::function&lt;int(int, int)&gt; operation = add;
    std::cout &lt;&lt; operation(7, 5) &lt;&lt; '\n';
}</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul><li><code>std::function</code> is declared in <code>&lt;functional&gt;</code>.</li><li>The template argument describes the <strong>call signature</strong>, not the concrete stored type.</li><li><code>int(int, int)</code> means “callable with two <code>int</code> arguments and producing an <code>int</code> result.”</li><li>The wrapper is invoked with normal function-call syntax: <code>operation(7, 5)</code>.</li></ul>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code>g++ -std=c++20 -Wall -Wextra -pedantic main.cpp -o callable_demo
./callable_demo</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"anchor":"lambda-storage"} -->
<h2 class="wp-block-heading" id="lambda-storage">Storing Lambdas and Functors</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#include &lt;functional&gt;
#include &lt;iostream&gt;

struct Multiplier
{
    int factor;

    int operator()(int value) const
    {
        return value * factor;
    }
};

int main()
{
    int offset = 10;

    std::function&lt;int(int)&gt; transform =
        [offset](int value)
        {
            return value + offset;
        };

    std::cout &lt;&lt; transform(5) &lt;&lt; '\n';

    transform = Multiplier{4};
    std::cout &lt;&lt; transform(5) &lt;&lt; '\n';
}</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul><li>The first target is a capturing lambda containing its own copy of <code>offset</code>.</li><li>The second target is a function object whose <code>operator()</code> implements multiplication.</li><li>The concrete target type changes while the visible wrapper type remains <code>std::function&lt;int(int)&gt;</code>.</li><li>This ability is the practical value of type erasure: callers depend on the signature rather than the concrete callable class.</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"anchor":"type-erasure"} -->
<h2 class="wp-block-heading" id="type-erasure">How Type Erasure Works</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>std::function</code> performs <strong>type erasure</strong>: it preserves the behavior needed to copy, destroy, and invoke a target while hiding that target’s concrete C++ type behind one runtime wrapper. The wrapper does not convert every callable into a literal function pointer. Instead, it stores enough implementation machinery to dispatch a call through the declared signature. This lets unrelated callable types share one container or API boundary while retaining type-safe argument and return-value checking.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=tbUCHifyT24","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=tbUCHifyT24
</div><figcaption class="wp-element-caption"><em>CppCon’s “Back to Basics: Type Erasure” demonstrates how wrappers such as <code>std::function</code> can be built from simpler mechanisms and then optimized.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"anchor":"empty-state"} -->
<h2 class="wp-block-heading" id="empty-state">Empty Wrappers and std::bad_function_call</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#include &lt;functional&gt;
#include &lt;iostream&gt;

int main()
{
    std::function&lt;void()&gt; task;

    if (!task)
    {
        std::cout &lt;&lt; "No target installed\n";
    }

    try
    {
        task();
    }
    catch (const std::bad_function_call&amp; e)
    {
        std::cout &lt;&lt; e.what() &lt;&lt; '\n';
    }
}</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul><li>A default-constructed <code>std::function</code> has no target.</li><li><code>if (task)</code> checks whether a target is installed.</li><li>Invoking an empty <code>std::function</code> throws <code>std::bad_function_call</code>.</li><li>For normal callback APIs, checking the wrapper before invocation is usually clearer than intentionally relying on the exception.</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"anchor":"target-inspection"} -->
<h2 class="wp-block-heading" id="target-inspection">Inspecting the Stored Target</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#include &lt;functional&gt;
#include &lt;iostream&gt;
#include &lt;typeinfo&gt;

int square(int x)
{
    return x * x;
}

int main()
{
    std::function&lt;int(int)&gt; f = square;

    std::cout &lt;&lt; f.target_type().name() &lt;&lt; '\n';

    if (auto p = f.target&lt;int(*)(int)&gt;())
    {
        std::cout &lt;&lt; (*p)(9) &lt;&lt; '\n';
    }
}</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul><li><code>target_type()</code> reports the stored target’s runtime type.</li><li><code>target&lt;T&gt;()</code> returns a pointer when the requested type exactly matches the stored target type.</li><li>A mismatch returns <code>nullptr</code>.</li><li>Target inspection is useful for diagnostics and specialized adapters, but ordinary code should usually invoke through the wrapper’s public signature.</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"anchor":"performance"} -->
<h2 class="wp-block-heading" id="performance">Performance, Allocation, and Copyability</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The flexibility of <code>std::function</code> is not free. Type erasure normally adds an indirect dispatch step, and a sufficiently large target may require dynamic storage; implementations commonly use a small-object optimization for some compact callables, but programs should not assume one universal inline-buffer size. The stored target must also satisfy the wrapper’s copyability requirements, which means a lambda that owns a move-only object cannot generally be placed into <code>std::function</code>. Performance-sensitive paths should benchmark the actual implementation rather than assigning one fixed cost to every call.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=SToaMS3jNH0","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=SToaMS3jNH0
</div><figcaption class="wp-element-caption"><em>CppCon’s discussion of <code>folly::Function</code> explains why move-only callables expose an important limitation of classic <code>std::function</code>.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"anchor":"modern-alternatives"} -->
<h2 class="wp-block-heading" id="modern-alternatives">Modern Alternatives</h2>
<!-- /wp:heading -->

<!-- wp:table -->
<figure class="wp-block-table"><table><thead><tr><th>Tool</th><th>Standard</th><th>Ownership</th><th>Copyable?</th><th>Best fit</th></tr></thead><tbody><tr><td><code>std::function</code></td><td>C++11</td><td>Owning</td><td>Yes</td><td>General reusable callbacks with copyable targets</td></tr><tr><td><code>std::move_only_function</code></td><td>C++23</td><td>Owning</td><td>No</td><td>Callbacks that may capture move-only state</td></tr><tr><td><code>std::copyable_function</code></td><td>C++26</td><td>Owning</td><td>Yes</td><td>Newer copyable wrapper with richer qualifiers</td></tr><tr><td><code>std::function_ref</code></td><td>C++26</td><td>Non-owning</td><td>Lightweight reference semantics</td><td>Temporary callable views when lifetime is guaranteed externally</td></tr><tr><td>Template parameter</td><td>Language feature</td><td>Depends on caller</td><td>Depends on type</td><td>Compile-time generic code and maximum optimization opportunity</td></tr><tr><td>Raw function pointer</td><td>Language feature</td><td>Non-owning</td><td>Trivial</td><td>Simple stateless free-function callbacks</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading {"anchor":"decision-table"} -->
<h2 class="wp-block-heading" id="decision-table">Decision Table</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><strong>Need one runtime callback slot that can hold different copyable callables?</strong> Use <code>std::function</code>.</li><li><strong>Need to capture a <code>std::unique_ptr</code> or another move-only resource?</strong> Consider <code>std::move_only_function</code> in C++23.</li><li><strong>Need no ownership and the caller guarantees lifetime?</strong> Consider <code>std::function_ref</code> when C++26 is available, or a carefully designed alternative.</li><li><strong>Know the callable type at compile time and want maximum inlining opportunity?</strong> Prefer a template parameter.</li><li><strong>Only free functions with one exact signature are allowed?</strong> A raw function pointer may be sufficient.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Callback Registry Example</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#include &lt;functional&gt;
#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;unordered_map&gt;

using Handler = std::function&lt;void(const std::string&amp;)&gt;;

int main()
{
    std::unordered_map&lt;std::string, Handler&gt; handlers;

    handlers["log"] = [](const std::string&amp; msg)
    {
        std::cout &lt;&lt; "LOG: " &lt;&lt; msg &lt;&lt; '\n';
    };

    int warnings = 0;
    handlers["warn"] = [&amp;warnings](const std::string&amp; msg)
    {
        ++warnings;
        std::cout &lt;&lt; "WARN: " &lt;&lt; msg &lt;&lt; '\n';
    };

    handlers.at("log")("System ready");
    handlers.at("warn")("Temperature high");

    std::cout &lt;&lt; "Warnings: " &lt;&lt; warnings &lt;&lt; '\n';
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"anchor":"exercises"} -->
<h2 class="wp-block-heading" id="exercises">Hands-On Exercises</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ol><li>Create <code>std::function&lt;double(double, double)&gt;</code> and assign a normal function that multiplies two values.</li><li>Replace the target with a lambda that divides the first argument by the second.</li><li>Create a functor named <code>Power</code> that stores an exponent and invokes <code>std::pow</code>.</li><li>Store <code>Power{2}</code> in <code>std::function&lt;double(double)&gt;</code>.</li><li>Default-construct an empty callback and verify it with <code>operator bool</code>.</li><li>Intentionally invoke the empty callback inside <code>try</code>/<code>catch</code> and identify <code>std::bad_function_call</code>.</li><li>Create a capturing lambda that owns a <code>std::unique_ptr&lt;int&gt;</code>. Attempt to place it in <code>std::function</code>, observe the compile-time failure, then repeat with <code>std::move_only_function</code> under C++23.</li><li>Build a small event registry using <code>std::unordered_map&lt;std::string, std::function&lt;void()&gt;&gt;</code>.</li></ol>
<!-- /wp:list -->

<!-- wp:details -->
<details class="wp-block-details"><summary>Checkpoint: Why does std::function need a signature?</summary><!-- wp:paragraph -->
<p>The signature defines the stable public calling contract: return type, argument count, and argument types. Concrete callable types can differ internally as long as they are compatible with that contract.</p>
<!-- /wp:paragraph --></details>
<!-- /wp:details -->

<!-- wp:details -->
<details class="wp-block-details"><summary>Checkpoint: Why can a move-only lambda fail?</summary><!-- wp:paragraph -->
<p>Classic <code>std::function</code> is copyable and requires the stored target to satisfy its copy-construction requirements. A lambda that directly owns a move-only resource may therefore be incompatible. C++23 <code>std::move_only_function</code> was designed for this class of use case.</p>
<!-- /wp:paragraph --></details>
<!-- /wp:details -->

<!-- wp:heading {"anchor":"knowledge-check"} -->
<h2 class="wp-block-heading" id="knowledge-check">Knowledge Check</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ol><li>Which header defines <code>std::function</code>?</li><li>Which C++ standard introduced it?</li><li>What does the type <code>std::function&lt;bool(int)&gt;</code> describe?</li><li>Name four categories of callable target that it can wrap.</li><li>What happens when an empty <code>std::function</code> is invoked?</li><li>How can code test whether a wrapper currently has a target?</li><li>What does <code>target&lt;T&gt;()</code> return when <code>T</code> does not match?</li><li>Why can a move-only capture be a problem?</li><li>Which C++23 wrapper is designed for move-only callables?</li><li>When can a template parameter be preferable to <code>std::function</code>?</li></ol>
<!-- /wp:list -->

<!-- wp:details -->
<details class="wp-block-details"><summary>Show knowledge-check answers</summary><!-- wp:list -->
<ol><li><code>&lt;functional&gt;</code>.</li><li>C++11.</li><li>A callable interface that returns <code>bool</code> and accepts one <code>int</code>.</li><li>Examples: free functions, function pointers, lambdas, functors, bind expressions, and compatible member targets.</li><li>It throws <code>std::bad_function_call</code>.</li><li>Use its contextual boolean conversion, such as <code>if (callback)</code>.</li><li><code>nullptr</code>.</li><li>The stored target for classic <code>std::function</code> must satisfy copyability requirements.</li><li><code>std::move_only_function</code>.</li><li>When the callable type is known at compile time and static dispatch, inlining opportunity, or zero-overhead genericity matters.</li></ol>
<!-- /wp:list --></details>
<!-- /wp:details -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><a href="https://en.cppreference.com/w/cpp/utility/functional/function/">cppreference: std::function</a></li><li><a href="https://en.cppreference.com/cpp/utility/functional/bad_function_call">cppreference: std::bad_function_call</a></li><li><a href="https://en.cppreference.com/cpp/utility/functional/move_only_function">cppreference: std::move_only_function</a></li><li><a href="https://en.cppreference.com/cpp/utility/functional/copyable_function">cppreference: std::copyable_function</a></li><li><a href="https://en.cppreference.com/cpp/utility/functional/function_ref">cppreference: std::function_ref</a></li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key Takeaway</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><code>std::function</code> is an owning, copyable, type-erased callable wrapper.</li><li>Its template argument specifies the call signature rather than the concrete target type.</li><li>It is excellent for callback registries, event systems, task interfaces, and APIs that need one stable runtime callable type.</li><li>Templates remain stronger when the concrete callable can stay visible at compile time.</li><li>C++23 and C++26 add more specialized wrappers for move-only, richer copyable, and non-owning callable use cases.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Rotation next:</strong> Semiconductor Technician.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong><br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->