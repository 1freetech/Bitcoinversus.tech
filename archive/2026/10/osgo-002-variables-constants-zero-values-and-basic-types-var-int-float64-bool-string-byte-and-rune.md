---
title: "OSGo.002: Variables, Constants, Zero Values, and Basic Types — var, :=, int, float64, bool, string, byte, and rune"
status: published
wordpress_post_id: 23142
live_url: "https://bitcoinversus.tech/2026/10/10/osgo-002-variables-constants-zero-values-and-basic-types-var-int-float64-bool-string-byte-and-rune/"
published: "2026-10-10T08:52:38"
modified: "2026-10-10T08:52:38"
featured_media_id: 23140
body_media_id: 23141
youtube:
  - "https://www.youtube.com/watch?v=VuwTMJKt4Ew"
  - "https://www.youtube.com/watch?v=qpIVH1y5FEo"
  - "https://www.youtube.com/watch?v=YKdAD8_FkZQ"
social:
  - "https://www.reddit.com/r/golang/comments/1fbghkw/"
seo_title: "OSGo.002: Go Variables, Constants, Zero Values, and Basic Types"
seo_description: "Learn Go variables, constants, zero values, var vs :=, type inference, int, float64, bool, string, byte, rune, and typed vs untyped constants."
seo_schema_type: "article"
excerpt: "Learn Go variables, constants, zero values, type inference, short declarations, numeric types, booleans, strings, byte, rune, and the difference between typed and untyped constants."
no_text_boxes: true
top_section_heading: "What Matters"
top_bullet_count: 3
art_style: "anime"
programming_video_minimum: 3
programming_video_language: "English-speaking"
---

<!-- wp:heading --><h2 class="wp-block-heading">What Matters</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>Every Go variable always has a value: if you do not initialize it explicitly, Go gives it the zero value for its type.</strong></li><li><strong><code>var</code> and <code>:=</code> both create variables, but <code>:=</code> is limited to function bodies while <code>var</code> works at package scope and can declare a variable without an explicit initializer.</strong></li><li><strong>Go’s basic types are intentionally explicit: integers, floating-point values, booleans, strings, bytes, and runes have different meanings, and Go generally does not perform silent numeric conversions for you.</strong></li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Go tries to make basic program state predictable.</strong> Variables have known types, every declared variable starts with a defined value, and the language avoids many implicit conversions that can hide mistakes.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This lesson follows <a href="https://bitcoinversus.tech/2026/10/08/osgo-001-what-is-go-packages-toolchain-go-run-go-build-first-program/"><strong>OSGo.001: What Is Go?</strong></a>, which introduced packages, the toolchain, <code>go run</code>, <code>go build</code>, and a first program. OSGo.002 moves inside the program itself: how to declare data, how Go chooses types, and what happens when you do not provide an initial value.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The official <a href="https://go.dev/ref/spec"><strong>Go language specification</strong></a> defines variables as storage locations containing values of a particular type. That type determines which operations are valid and what zero value is used when initialization is omitted.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=VuwTMJKt4Ew","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=VuwTMJKt4Ew
</div><figcaption class="wp-element-caption"><em>Telusko demonstrates Go variables and constants, providing a practical starting point for declaration syntax and fixed values.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Declaring Variables With var</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The most explicit form places <code>var</code>, the variable name, and the type together:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>var miners int</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>No initializer appears here, but <code>miners</code> is still usable. Because its type is <code>int</code>, Go initializes it to that type’s zero value, which is <code>0</code>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>You can declare and initialize in one statement:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>var miners int = 128
var model string = "S21"
var online bool = true</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>When the initializer makes the type obvious, Go can infer the variable type:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>var miners = 128
var model = "S21"
var online = true</code></pre><!-- /wp:code -->

<!-- wp:heading --><h2 class="wp-block-heading">Short Variable Declarations With :=</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Inside a function, Go provides the short declaration operator:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>miners := 128
model := "S21"
efficiency := 17.5</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p><code>:=</code> both declares the variable and initializes it. The compiler infers the type from the expression on the right side.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The short form cannot be used at package scope. Package-level variables use <code>var</code>. Inside a function, <code>:=</code> is common when the type is obvious from the initializer.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/golang/comments/1fbghkw/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/golang/comments/1fbghkw/
</div><figcaption class="wp-element-caption"><em>A Go community discussion on <code>var</code> versus <code>:=</code> highlights an important beginner distinction: explicit zero-value declarations communicate different intent from short initialized declarations.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Every Variable Has a Zero Value</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Go does not leave ordinary variables with an undefined garbage value. If you declare a variable without an initializer, the language initializes it to the zero value for its type.</p><!-- /wp:paragraph -->

<!-- wp:list --><ul class="wp-block-list"><li>numeric types → <code>0</code></li><li><code>bool</code> → <code>false</code></li><li><code>string</code> → <code>""</code></li><li>pointers, slices, maps, channels, functions, and interfaces → <code>nil</code></li></ul><!-- /wp:list -->

<!-- wp:code --><pre class="wp-block-code"><code>package main

import "fmt"

func main() {
    var count int
    var temperature float64
    var online bool
    var model string

    fmt.Println(count)       // 0
    fmt.Println(temperature) // 0
    fmt.Println(online)      // false
    fmt.Println(model)       // empty string
}</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>This design is one reason Go APIs often try to make a useful zero value possible. Later lessons on structs, slices, maps, mutexes, and interfaces will show where zero values are especially useful—and where <code>nil</code> needs more careful handling.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":23141,"sizeSlug":"medium","linkDestination":"none"} --><figure class="wp-block-image size-medium"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osgo-002-go-gopher-body.png" alt="The official Go gopher mascot designed by Renee French" class="wp-image-23141" /><figcaption class="wp-element-caption"><em>The Go gopher was designed by Renee French and is licensed under Creative Commons Attribution 4.0. Source: The Go Blog.</em></figcaption></figure><!-- /wp:image -->

<!-- wp:heading --><h2 class="wp-block-heading">Go Has Several Integer Types</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Go provides signed and unsigned integer types at defined widths:</p><!-- /wp:paragraph -->

<!-- wp:list --><ul class="wp-block-list"><li><code>int8</code>, <code>int16</code>, <code>int32</code>, <code>int64</code></li><li><code>uint8</code>, <code>uint16</code>, <code>uint32</code>, <code>uint64</code></li><li><code>int</code> and <code>uint</code>, whose size is implementation dependent but is either 32 or 64 bits</li><li><code>uintptr</code>, an unsigned integer type large enough to store the uninterpreted bits of a pointer value</li></ul><!-- /wp:list -->

<!-- wp:code --><pre class="wp-block-code"><code>var temperature int32 = -5
var fanRPM uint16 = 5400
var total uint64 = 10_000_000_000</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Use plain <code>int</code> for ordinary integer arithmetic unless the problem, protocol, file format, API, or memory layout requires a particular width.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">byte and rune Are Integer Aliases</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Two Go names deserve special attention:</p><!-- /wp:paragraph -->

<!-- wp:list --><ul class="wp-block-list"><li><code>byte</code> is an alias for <code>uint8</code>.</li><li><code>rune</code> is an alias for <code>int32</code> and is conventionally used for Unicode code points.</li></ul><!-- /wp:list -->

<!-- wp:code --><pre class="wp-block-code"><code>var packet byte = 0xff
var symbol rune = 'λ'
var gopher rune = '🐹'</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The type aliases do not create brand-new underlying integer representations. Their names communicate intent: <code>byte</code> says “raw byte-sized data,” while <code>rune</code> says “Unicode code point.”</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=qpIVH1y5FEo","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=qpIVH1y5FEo
</div><figcaption class="wp-element-caption"><em>Yash Poonia’s Go course covers data types, variables, constants, strings, zero values, numeric types, runes, and the difference between <code>var</code> and <code>:=</code>.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Floating-Point and Complex Types</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Go’s two floating-point types are <code>float32</code> and <code>float64</code>. When an untyped floating literal needs a default type, Go normally chooses <code>float64</code>.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>var efficiency float64 = 17.5
voltage := 12.25 // inferred floating type in this context</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Go also includes <code>complex64</code> and <code>complex128</code> for complex-number arithmetic. These are less common in everyday backend programming but useful in scientific and signal-processing work.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Booleans Are Explicit</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <code>bool</code> can be <code>true</code> or <code>false</code>. Go does not generally treat integers or strings as automatically “truthy” or “falsy.” Conditions expect Boolean expressions.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>online := true
hasAlarm := false

if online {
    println("running")
}</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>This keeps control flow explicit. Instead of asking whether an integer happens to be nonzero, write the comparison you mean.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Strings Are Immutable Byte Sequences</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A Go <code>string</code> is an immutable sequence of bytes. Source-code string literals commonly contain UTF-8 text, but indexing a string returns a byte, not necessarily a complete Unicode character.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>model := "S21"
message := "hello"

fmt.Println(message[0]) // byte value for 'h'</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Later string lessons will cover UTF-8, byte slices, rune iteration, slicing, and why <code>len</code> reports bytes rather than a count of user-perceived characters.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Go Does Not Silently Mix Numeric Types</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Even when two numeric types can represent similar values, Go generally requires an explicit conversion before combining them.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>var racks int32 = 8
var spare int64 = 2

// total := racks + spare // compile error

total := int64(racks) + spare</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>This can feel strict at first, especially if you come from languages that perform extensive implicit promotion. The benefit is that the conversion is visible in the source code.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Constants Are Not Ordinary Variables</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Constants are declared with <code>const</code> and represent values that can be determined at compile time.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>const MaxRacks = 128
const DefaultVoltage = 12.0
const Banner = "Go Systems Lab"</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Constants may be typed or untyped. Untyped constants are unusually flexible because Go can give them a concrete type when the surrounding context requires one, as long as the value is representable.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>const Limit = 100

var a int = Limit
var b int64 = Limit
var c float64 = Limit</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The constant <code>Limit</code> is not repeatedly converted from an existing runtime <code>int</code> variable. It is an untyped constant whose value can be represented in each target type.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=YKdAD8_FkZQ","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=YKdAD8_FkZQ
</div><figcaption class="wp-element-caption"><em>Vikesh Yadav reviews the major Go declaration forms, constants, primitive data types, and type inference with practical examples.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Multiple Assignment and Declaration</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Go can declare or assign several variables in one statement:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>var model, site string
var rackCount, spareCount int

model, site = "S21", "Tacoma"
rackCount, spareCount = 8, 2</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Short declarations can also create several variables at once:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>model, watts := "S21", 3500</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Inside the same scope, a short declaration can reuse existing variables only when at least one non-blank variable on the left side is new. This rule appears frequently when functions return multiple values.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Inspect Types While Learning</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The <code>fmt</code> package can show both values and types while you experiment:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>package main

import "fmt"

func main() {
    count := 128
    efficiency := 17.5
    online := true
    model := "S21"

    fmt.Printf("%v -&gt; %T\n", count, count)
    fmt.Printf("%v -&gt; %T\n", efficiency, efficiency)
    fmt.Printf("%v -&gt; %T\n", online, online)
    fmt.Printf("%v -&gt; %T\n", model, model)
}</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p><code>%v</code> prints the value in a default format, while <code>%T</code> prints the Go type. This is a useful learning and debugging technique when studying inference.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Common Beginner Mistakes</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>Using <code>:=</code> at package scope:</strong> short declarations belong inside functions.</li><li><strong>Assuming an uninitialized variable is undefined:</strong> Go gives it the type’s zero value.</li><li><strong>Expecting automatic numeric promotion:</strong> explicit conversions are commonly required.</li><li><strong>Confusing <code>byte</code> with a Unicode character:</strong> <code>byte</code> is <code>uint8</code>; <code>rune</code> is <code>int32</code> used for Unicode code points.</li><li><strong>Assuming string indexing returns a character:</strong> indexing returns one byte.</li><li><strong>Treating constants exactly like variables:</strong> untyped constants have compile-time behavior that ordinary variables do not.</li><li><strong>Adding explicit types everywhere:</strong> use inference when it keeps the code clear, and annotations where they communicate an important requirement.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Practical Exercise</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>Create a new Go file named <code>types.go</code>.</li><li>Declare four variables with <code>var</code> but no initializer: one <code>int</code>, one <code>float64</code>, one <code>bool</code>, and one <code>string</code>.</li><li>Print their zero values.</li><li>Create four more variables with <code>:=</code> and inspect their inferred types using <code>%T</code>.</li><li>Declare one <code>byte</code> and one <code>rune</code>, then print both their values and types.</li><li>Create an <code>int32</code> and an <code>int64</code>, attempt to add them directly, observe the compiler error, then fix it with an explicit conversion.</li><li>Create an untyped constant and assign it to an <code>int</code>, <code>int64</code>, and <code>float64</code>.</li><li>Run <code>go fmt types.go</code>, <code>go vet types.go</code>, and <code>go run types.go</code>.</li></ol><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Knowledge Check + Answers</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li><strong>What happens if a Go variable has no explicit initializer?</strong> It receives the zero value for its type.</li><li><strong>Can <code>:=</code> be used at package scope?</strong> No.</li><li><strong>What is the zero value of <code>bool</code>?</strong> <code>false</code>.</li><li><strong>What is the zero value of <code>string</code>?</strong> The empty string.</li><li><strong>What is <code>byte</code> an alias for?</strong> <code>uint8</code>.</li><li><strong>What is <code>rune</code> an alias for?</strong> <code>int32</code>.</li><li><strong>Does Go automatically add an <code>int32</code> to an <code>int64</code>?</strong> No; an explicit conversion is required.</li><li><strong>What does <code>%T</code> print with <code>fmt.Printf</code>?</strong> The value’s Go type.</li><li><strong>What is the difference between a typed and untyped constant?</strong> A typed constant already has a specific type; an untyped constant can receive a concrete type from context when representable.</li><li><strong>When is <code>var</code> especially useful?</strong> At package scope, when an explicit type matters, or when you intentionally want the zero value without an initializer.</li></ol><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Primary References</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><a href="https://go.dev/ref/spec"><strong>The Go Programming Language Specification</strong></a></li><li><a href="https://go.dev/tour/basics/8"><strong>A Tour of Go — Variables</strong></a></li><li><a href="https://go.dev/tour/basics/11"><strong>A Tour of Go — Basic Types</strong></a></li><li><a href="https://go.dev/tour/basics/12"><strong>A Tour of Go — Zero Values</strong></a></li><li><a href="https://go.dev/tour/basics/15"><strong>A Tour of Go — Constants</strong></a></li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Elementary Review</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>Go variables are never “empty” in the undefined sense.</strong> Declare them with <code>var</code> or, inside functions, with <code>:=</code>. If you omit the initializer, Go supplies the type’s zero value. Use integer and floating types deliberately, remember that <code>byte</code> and <code>rune</code> are integer aliases with useful semantic meaning, and treat constants as compile-time values rather than ordinary mutable storage.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":4} --><h4 class="wp-block-heading">Editor’s Note</h4><!-- /wp:heading -->

<!-- wp:paragraph --><p>This lesson uses a unique generated 1200×630 anime featured image and a separate official Go gopher body image. Three distinct programming videos are distributed across the lesson rather than stacked together. Standard responsive Gutenberg headings, paragraphs, lists, code, image, and embed blocks are used throughout; ordinary lesson prose is not placed inside bordered, shaded, card-style, callout, panel, or fixed-width text boxes.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>BitcoinVersus.Tech content is provided for informational and educational purposes.</p><!-- /wp:paragraph -->