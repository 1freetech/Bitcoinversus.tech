---
title: "OSRust.003: Scalar and Compound Data Types — Integers, Floats, bool, char, Tuples, Arrays, and Type Annotations"
status: published
wordpress_post_id: 23130
live_url: "https://bitcoinversus.tech/2026/10/10/osrust-003-scalar-and-compound-data-types-integers-floats-bool-char-tuples-arrays-and-type-annotations/"
published: "2026-10-10T08:35:11"
modified: "2026-10-10T08:35:11"
featured_media_id: 23126
body_media_id: 23127
youtube:
  - "https://www.youtube.com/watch?v=t047Hseyj_k"
  - "https://www.youtube.com/watch?v=NyqJp5M3hRE"
  - "https://www.youtube.com/watch?v=h7ozfjDBQks"
social:
  - "https://www.reddit.com/r/rust/comments/j27by8/"
seo_title: "OSRust.003: Rust Scalar and Compound Data Types | Open-Source Rust Certification"
seo_description: "Learn Rust scalar and compound data types: integers, floats, bool, char, tuples, arrays, type annotations, inference, literals, and overflow basics."
seo_schema_type: "article"
excerpt: "Learn Rust’s scalar and compound data types, including signed and unsigned integers, floating-point numbers, bool, char, tuples, arrays, type annotations, inference, literals, and basic overflow behavior."
no_text_boxes: true
top_section_heading: "Core Concepts"
top_bullet_count: 3
art_style: "mechatronic anime"
programming_video_minimum: 3
programming_video_language: "English-speaking"
---

<!-- wp:heading --><h2 class="wp-block-heading">Core Concepts</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>Rust is statically typed: every value has a type known at compile time, even when the compiler infers that type for you.</strong></li><li><strong>Rust’s primitive data types divide naturally into scalar types such as integers, floating-point numbers, booleans, and characters, plus compound types such as tuples and arrays.</strong></li><li><strong>Choosing a type is about range, sign, precision, memory layout, and intended use—not just picking whichever syntax looks shortest.</strong></li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Rust’s type system is one of the first places where the language begins protecting you before your program ever runs.</strong> The compiler must know what kind of value each expression produces so it can reject invalid operations, choose the correct machine representation, and enforce later rules around ownership, borrowing, and APIs.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This lesson follows <a href="https://bitcoinversus.tech/2026/10/09/osrust-002-variables-let-mut-constants-shadowing-scope-type-inference/"><strong>OSRust.002: Variables</strong></a>. That lesson introduced <code>let</code>, <code>mut</code>, constants, shadowing, scope, and type inference. OSRust.003 focuses on the next question: <strong>what types can those variables actually hold?</strong></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The official <a href="https://doc.rust-lang.org/book/ch03-02-data-types.html"><strong>Rust Programming Language book</strong></a> groups the basic built-in types into scalar and compound categories. Scalar values represent one value; compound values group multiple values together.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=t047Hseyj_k","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=t047Hseyj_k
</div><figcaption class="wp-element-caption"><em>Tech With Tim introduces Rust’s primitive scalar and compound data types, including integers, floating-point values, booleans, characters, tuples, and arrays.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Rust Is Statically Typed</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Static typing means the compiler knows the type of every value at compile time. You do not always need to write the type yourself because Rust can infer many types from context:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>fn main() {
    let miners = 128;
    let efficiency = 17.5;
    let online = true;
    let grade = 'A';
}</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Here Rust can infer useful defaults from the literals. But inference is not magic: when several types are possible or an API requires a particular type, you may need an explicit annotation.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For example, parsing text can produce many possible numeric types, so the compiler needs additional information:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let count: u32 = "128".parse().expect("Not a number");</code></pre><!-- /wp:code -->

<!-- wp:embed {"url":"https://www.reddit.com/r/rust/comments/j27by8/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/rust/comments/j27by8/
</div><figcaption class="wp-element-caption"><em>A Rust community discussion for beginners centers on the same early challenge: learning the built-in data types and understanding when Rust infers a type versus when the programmer should be explicit.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Scalar Types Represent One Value</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Rust’s main scalar families are <strong>integers</strong>, <strong>floating-point numbers</strong>, <strong>booleans</strong>, and <strong>characters</strong>. A scalar is one logical value, even if the value occupies several bytes in memory.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This distinction becomes important later because collections and user-defined types are built from these smaller pieces. Understanding the primitive layer makes function signatures, structs, enums, indexing, arithmetic, and memory reasoning much easier.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":23127,"sizeSlug":"large","linkDestination":"none"} --><figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osrust-003-rust-logo-body.png" alt="Rust programming language logo and Ferris mascot artwork" class="wp-image-23127" /><figcaption class="wp-element-caption"><em>Rust programming language artwork from Wikimedia Commons. Credit: Looobay, CC BY-SA 4.0.</em></figcaption></figure><!-- /wp:image -->

<!-- wp:heading --><h2 class="wp-block-heading">Integer Types: Signed, Unsigned, and Sized</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Rust provides signed and unsigned integers at several widths. Signed integers can represent negative values; unsigned integers start at zero and use their full range for nonnegative values.</p><!-- /wp:paragraph -->

<!-- wp:list --><ul class="wp-block-list"><li><code>i8</code> / <code>u8</code></li><li><code>i16</code> / <code>u16</code></li><li><code>i32</code> / <code>u32</code></li><li><code>i64</code> / <code>u64</code></li><li><code>i128</code> / <code>u128</code></li><li><code>isize</code> / <code>usize</code></li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p>The number indicates the bit width. For example, <code>u8</code> is an 8-bit unsigned integer and <code>i64</code> is a 64-bit signed integer. <code>isize</code> and <code>usize</code> match the pointer width of the target architecture and are especially common for indexing and sizes.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let temperature: i32 = -5;
let fan_rpm: u16 = 5400;
let rack_index: usize = 7;
let huge_value: u128 = 1_000_000_000_000_000_000;</code></pre><!-- /wp:code -->

<!-- wp:heading --><h2 class="wp-block-heading">Integer Literals Can Be Written Several Ways</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Rust supports decimal, hexadecimal, octal, binary, and byte literals. Underscores may be used as visual separators without changing the value.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let decimal = 98_222;
let hex = 0xff;
let octal = 0o77;
let binary = 0b1111_0000;
let byte = b'A';</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>You can also attach a type suffix directly to a numeric literal:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let ports = 65_535u32;
let offset = -12i16;</code></pre><!-- /wp:code -->

<!-- wp:heading --><h2 class="wp-block-heading">Integer Overflow Is a Real Constraint</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Every fixed-width integer has a finite range. A <code>u8</code>, for example, can represent values from 0 through 255. What happens when arithmetic exceeds the range depends on build mode and the operation used. Debug builds normally panic on overflow; optimized release builds can wrap using two’s-complement behavior when overflow checks are not enabled.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Rust also provides explicit methods such as <code>checked_add</code>, <code>wrapping_add</code>, <code>saturating_add</code>, and <code>overflowing_add</code> so the programmer can state the intended behavior clearly.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let x: u8 = 250;
let safe = x.checked_add(10);      // None
let wrapped = x.wrapping_add(10); // 4
let capped = x.saturating_add(10); // 255</code></pre><!-- /wp:code -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=NyqJp5M3hRE","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=NyqJp5M3hRE
</div><figcaption class="wp-element-caption"><em>Francesco Ciulla walks through Rust data types with practical examples for integers, floating point, booleans, characters, tuples, arrays, and custom types.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Floating-Point Types</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Rust’s primitive floating-point types are <code>f32</code> and <code>f64</code>. The default is <code>f64</code> because modern processors usually handle double-precision floating-point arithmetic efficiently and it provides greater precision.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let efficiency = 17.5;       // inferred f64
let voltage: f32 = 12.25;
let precise: f64 = 0.000001;</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Floating-point values are approximations of real numbers. Many decimal fractions cannot be represented exactly in binary floating point, so equality checks and accumulated arithmetic need care in scientific, financial, and measurement-heavy software.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Boolean Values</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The Boolean type is <code>bool</code> and has exactly two possible values: <code>true</code> and <code>false</code>.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let online: bool = true;
let has_alarm = false;</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Booleans are central to conditions, loop control, validation, state flags, and comparisons. Later control-flow lessons will use them constantly.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Rust char Is a Unicode Scalar Value</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Rust’s <code>char</code> type is more capable than the one-byte character type many programmers first meet in C. A Rust <code>char</code> represents a Unicode scalar value and occupies four bytes.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let letter: char = 'R';
let lambda = 'λ';
let crab = '🦀';</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Single quotes create a <code>char</code>. Double quotes create string data, which is a different topic with different ownership and UTF-8 behavior.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Compound Types Group Multiple Values</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Rust’s two fundamental compound types are <strong>tuples</strong> and <strong>arrays</strong>. Both group multiple values, but they solve different problems.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Tuples Can Mix Types</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A tuple groups a fixed number of values that may have different types:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let miner = ("S21", 200u32, 17.5f64, true);</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The tuple’s type here is <code>(&amp;str, u32, f64, bool)</code>. You can access values by destructuring:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let (model, hashrate, efficiency, online) = miner;</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Or by numeric field position:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>println!("{}", miner.0);
println!("{}", miner.2);</code></pre><!-- /wp:code -->

<!-- wp:heading --><h2 class="wp-block-heading">Arrays Store One Type at a Fixed Length</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>An array stores a fixed number of elements, all of the same type. Its length is part of its type.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let temperatures: [i32; 4] = [21, 22, 24, 23];</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The type <code>[i32; 4]</code> means “an array of four <code>i32</code> values.” You can also initialize an array by repeating the same value:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let zeros = [0u8; 16];</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Arrays are useful when the number of elements is known at compile time. If you need a growable collection, Rust’s <code>Vec&lt;T&gt;</code> type is usually more appropriate and will be covered later.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=h7ozfjDBQks","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=h7ozfjDBQks
</div><figcaption class="wp-element-caption"><em>Rustfully gives a compact review of scalar and compound Rust types, making it useful after the integer, tuple, and array sections.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Arrays and Tuples Are Different Types</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>An array is homogeneous: every element has the same type. A tuple may be heterogeneous: each position can have its own type. That makes the two structures useful for different jobs even when they contain the same number of values.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let point_array: [f64; 2] = [10.0, 20.0];
let point_tuple: (f64, f64) = (10.0, 20.0);</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>These are not interchangeable types. Libraries may choose one or the other based on semantics, trait implementations, indexing, or API design.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Type Annotations Clarify Intent</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Rust often infers the type correctly, but explicit annotations can improve correctness and readability when the range, API, protocol, or memory representation matters.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>let packet_length: u16 = 1500;
let error_count: u64 = 0;
let temperature_c: f32 = 24.75;
let enabled: bool = true;</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Do not add type annotations everywhere just because you can. Use them where inference is ambiguous or where the type communicates something important about the problem domain.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Common Beginner Mistakes</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>Assuming every integer is the same:</strong> signedness and width affect range and allowed conversions.</li><li><strong>Using an unsigned type simply because a value “should never be negative”:</strong> arithmetic and subtraction can become less intuitive if the domain can temporarily cross zero.</li><li><strong>Assuming floating-point values are exact:</strong> many decimal values are approximate in binary.</li><li><strong>Confusing <code>char</code> with a one-byte ASCII value:</strong> Rust <code>char</code> stores a Unicode scalar value.</li><li><strong>Confusing arrays with vectors:</strong> arrays have fixed compile-time length; vectors can grow.</li><li><strong>Assuming tuples and arrays are interchangeable:</strong> they have different types and different semantics.</li><li><strong>Forcing type annotations unnecessarily:</strong> let inference work when the intent is already clear.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Practical Exercise</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>Create a new project with <code>cargo new rust_types_lab</code>.</li><li>Declare one signed integer, one unsigned integer, one <code>f32</code>, one <code>f64</code>, one <code>bool</code>, and one <code>char</code>.</li><li>Create a tuple that stores a device name, wattage, efficiency value, and online/offline state.</li><li>Destructure the tuple into separate variables.</li><li>Create an array of five temperature readings.</li><li>Print the first and last array elements.</li><li>Try changing an explicit integer annotation from <code>u8</code> to <code>u16</code> and observe which larger values become legal.</li><li>Use <code>checked_add</code> and <code>wrapping_add</code> on a near-maximum <code>u8</code> value.</li><li>Run <code>cargo check</code>, then <code>cargo run</code>.</li></ol><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Knowledge Check + Answers</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li><strong>What does statically typed mean?</strong> The type of every value is known to the compiler at compile time.</li><li><strong>What are Rust’s four main scalar families?</strong> Integers, floating-point numbers, booleans, and characters.</li><li><strong>What is the default integer type when context does not force another type?</strong> <code>i32</code>.</li><li><strong>What is the default floating-point type?</strong> <code>f64</code>.</li><li><strong>What do <code>usize</code> and <code>isize</code> depend on?</strong> The pointer width of the target architecture.</li><li><strong>What is special about Rust <code>char</code>?</strong> It stores one Unicode scalar value and occupies four bytes.</li><li><strong>Can a tuple contain different types?</strong> Yes.</li><li><strong>Can a Rust array contain elements of different types?</strong> No; all elements have the same type.</li><li><strong>Is array length part of the array type?</strong> Yes.</li><li><strong>Why use an explicit type annotation?</strong> To resolve ambiguity or communicate required range, precision, representation, or API intent.</li></ol><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Primary References</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><a href="https://doc.rust-lang.org/book/ch03-02-data-types.html"><strong>The Rust Programming Language — Data Types</strong></a></li><li><a href="https://doc.rust-lang.org/rust-by-example/primitives.html"><strong>Rust By Example — Primitives</strong></a></li><li><a href="https://doc.rust-lang.org/reference/types.html"><strong>The Rust Reference — Types</strong></a></li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Elementary Review</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>Rust needs to know what every value is.</strong> Integers represent whole numbers, floating-point types represent approximate fractional values, <code>bool</code> stores true or false, <code>char</code> stores a Unicode scalar value, tuples combine fixed values that may have different types, and arrays store a fixed number of values of one type. Type inference keeps the code concise; explicit annotations make the type clear when the compiler or the reader needs more information.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":4} --><h4 class="wp-block-heading">Editor’s Note</h4><!-- /wp:heading -->

<!-- wp:paragraph --><p>This lesson uses a unique generated 1200×630 mechatronic-anime featured image and a separate internet-sourced Rust body image. Its three distinct YouTube videos are distributed across the lesson rather than stacked together. Standard responsive Gutenberg headings, paragraphs, lists, code, image, and embed blocks are used throughout; no normal lesson text appears in bordered, shaded, card-style, callout, panel, or fixed-width text boxes.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>BitcoinVersus.Tech content is provided for informational and educational purposes.</p><!-- /wp:paragraph -->