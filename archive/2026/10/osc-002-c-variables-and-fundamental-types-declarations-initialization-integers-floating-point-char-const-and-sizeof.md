---
title: "OSC.002: C Variables and Fundamental Types — Declarations, Initialization, Integers, Floating Point, char, const, and sizeof"
status: published
wordpress_post_id: 23105
live_url: "https://bitcoinversus.tech/2026/10/10/osc-002-c-variables-and-fundamental-types-declarations-initialization-integers-floating-point-char-const-and-sizeof/"
published: "2026-10-10T08:23:11"
modified: "2026-10-10T08:23:11"
featured_media_id: 23112
body_media_id: 23101
youtube:
  - "https://www.youtube.com/watch?v=fO4FwJOShdc"
social:
  - "https://www.reddit.com/r/learnprogramming/comments/yd550e/c_why_again/"
seo_title: "OSC.002: C Variables and Fundamental Types | Open-Source C Certification"
seo_description: "Learn C variables and fundamental types: declarations, initialization, integers, floating point, char, const, sizeof, type limits, and portable choices."
seo_schema_type: "article"
excerpt: "Learn how C variables and fundamental types work, including declarations, initialization, integer and floating-point types, char, const, sizeof, limits, and portable type choices."
no_text_boxes: true
top_section_heading: "What You Need to Know"
top_bullet_count: 3
art_style: "realistic photo"
---

<!-- wp:heading --><h2 class="wp-block-heading">What You Need to Know</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>Every object in C has a type, and the type tells the compiler how the stored bits should be interpreted, how much storage is required, and which operations are valid.</strong></li><li><strong>Declaring a variable and initializing it are different actions: a declaration introduces the object and its type, while initialization gives it an initial value.</strong></li><li><strong>Portable C code does not assume that <code>int</code>, <code>long</code>, or other fundamental types have one universal byte size; use <code>sizeof</code> and the standard limits headers when exact properties matter.</strong></li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>C is a statically typed language, which means the compiler needs to know what kind of data each variable represents before the program runs.</strong> If a variable is an integer, the compiler treats its bits as an integer. If it is a floating-point value, character, pointer, array, or structure, different rules apply.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This lesson builds directly on <a href="https://bitcoinversus.tech/2026/10/09/osc-001-c-compiler-toolchain-gcc-preprocessing-compilation-assembly-linking-first-build/"><strong>OSC.001: C Compiler and Toolchain</strong></a>. That lesson showed how source code becomes an executable. OSC.002 focuses on one of the first things the compiler must understand inside that source code: <strong>what data exists, what type it has, and what value it starts with.</strong></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>A variable is best thought of as a named object that occupies storage. The name lets your source code refer to the object; the type tells the compiler how to interpret and operate on that storage.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=fO4FwJOShdc","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=fO4FwJOShdc
</div><figcaption class="wp-element-caption"><em>Neso Academy introduces C variables, including declaration, definition, initialization, and assignment.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Declaration, Initialization, and Assignment</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A basic declaration places the type first and the variable name after it:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>int miners;</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>This introduces an object named <code>miners</code> whose type is <code>int</code>. If it is a local automatic variable and you do not initialize it before reading it, its value is indeterminate. A safer beginner habit is to initialize variables when you create them whenever a meaningful starting value is available:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>int miners = 120;
double efficiency = 17.5;
char grade = 'A';</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Later assignment changes the stored value without redeclaring the variable:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>miners = 128;</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The distinction matters because declaration, initialization, and assignment happen under different language rules even though they can appear visually similar.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/learnprogramming/comments/yd550e/c_why_again/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/learnprogramming/comments/yd550e/c_why_again/
</div><figcaption class="wp-element-caption"><em>A beginner C discussion asks why variables must be defined before use—the core reason is that C needs a declared object and type so the compiler can interpret later expressions correctly.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Why C Needs Types</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A type does several jobs at once. It tells the compiler how much storage an object needs, how values are represented, what arithmetic or conversions are permitted, and how expressions involving that object should be compiled.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>For example, the bit pattern stored for the integer value <code>42</code> is interpreted differently from a floating-point encoding. The compiler cannot safely perform operations unless it knows which interpretation applies.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":23101,"sizeSlug":"large","linkDestination":"none"} --><figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osc-002-c-programming-language-book-cover.png" alt="First-edition cover of The C Programming Language by Brian Kernighan and Dennis Ritchie" class="wp-image-23101" /><figcaption class="wp-element-caption"><em>The first edition of The C Programming Language by Brian Kernighan and Dennis Ritchie. The book helped standardize how generations of programmers learned C’s declaration and type model. Public-domain text-based cover via Wikimedia Commons.</em></figcaption></figure><!-- /wp:image -->

<!-- wp:heading --><h2 class="wp-block-heading">The Basic Integer Family</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>C provides several related integer types rather than one universal integer size. Common forms include:</p><!-- /wp:paragraph -->

<!-- wp:list --><ul class="wp-block-list"><li><code>char</code></li><li><code>short</code> or <code>short int</code></li><li><code>int</code></li><li><code>long</code> or <code>long int</code></li><li><code>long long</code> or <code>long long int</code></li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p>Most of these also have signed and unsigned forms. <code>signed int</code> is normally written simply as <code>int</code>. An unsigned integer cannot represent negative values, so its available range is used for zero and positive values instead.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>int temperature = -5;
unsigned int fan_rpm = 5400;
long long total_hashes = 9000000000LL;</code></pre><!-- /wp:code -->

<!-- wp:heading --><h2 class="wp-block-heading">Do Not Assume int Is Always Four Bytes</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>On many modern systems, <code>int</code> is four bytes, but portable C code should not depend on that assumption unless the target platform guarantees it. The C language specifies ordering and minimum capabilities for the integer families rather than one fixed byte count for every implementation.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Use <code>sizeof</code> to ask the implementation how much storage a type or object occupies:</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>#include &lt;stdio.h&gt;

int main(void)
{
    printf("char: %zu byte(s)\n", sizeof(char));
    printf("int: %zu byte(s)\n", sizeof(int));
    printf("long: %zu byte(s)\n", sizeof(long));
    printf("double: %zu byte(s)\n", sizeof(double));
    return 0;
}</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The result of <code>sizeof</code> has type <code>size_t</code>, which is why the portable <code>printf</code> conversion for these examples is <code>%zu</code>. The GNU C manual notes that <code>sizeof</code> reports the size of a type or expression in bytes; for ordinary fixed-size types this is normally determined at compile time.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">char Is an Integer Type</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><code>char</code> is often introduced as the type used for characters, but in C it is also an integer type. A character literal such as <code>'A'</code> corresponds to an integer character code in the execution character set.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>char letter = 'A';
printf("%c\n", letter);
printf("%d\n", letter);</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The first line prints the character representation; the second prints its integer value after the usual integer promotions. Also remember that <code>sizeof(char)</code> is defined as exactly 1 byte. A C byte contains <code>CHAR_BIT</code> bits, available from <code>&lt;limits.h&gt;</code>, and the language does not require every implementation to use eight-bit bytes.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Floating-Point Types</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>C’s fundamental floating-point types are:</p><!-- /wp:paragraph -->

<!-- wp:list --><ul class="wp-block-list"><li><code>float</code></li><li><code>double</code></li><li><code>long double</code></li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p>They represent values with fractional components and a much larger dynamic range than ordinary integers, but floating-point representation is approximate. Many decimal fractions cannot be represented exactly in binary floating point.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>float voltage = 12.5f;
double efficiency = 17.25;
long double measurement = 0.000001L;</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The suffix matters. An unsuffixed decimal floating constant such as <code>17.25</code> has type <code>double</code>; <code>17.25f</code> is <code>float</code>; <code>17.25L</code> is <code>long double</code>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Use the Standard Limits Headers</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Instead of hard-coding assumptions about maximum values, use the standard headers that describe the current implementation. <code>&lt;limits.h&gt;</code> provides integer limits such as <code>INT_MIN</code>, <code>INT_MAX</code>, and <code>CHAR_BIT</code>. <code>&lt;float.h&gt;</code> provides floating-point properties.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>#include &lt;limits.h&gt;
#include &lt;stdio.h&gt;

int main(void)
{
    printf("INT_MIN = %d\n", INT_MIN);
    printf("INT_MAX = %d\n", INT_MAX);
    printf("CHAR_BIT = %d\n", CHAR_BIT);
    return 0;
}</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>If your problem requires an integer width with a precise meaning, <code>&lt;stdint.h&gt;</code> provides types such as <code>int32_t</code> when the implementation supports that exact-width type. That is often better than assuming a plain <code>int</code> has a specific width.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">const Means You Should Not Modify Through That Name</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The <code>const</code> qualifier tells the compiler that an object should not be modified through that qualified access path after initialization.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>const double nominal_voltage = 12.0;</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>This is useful for values your program should treat as fixed after they are established. It also communicates intent to the reader. <code>const</code> does not mean the same thing as a preprocessor macro, and later lessons will cover the deeper pointer-related rules around const qualification.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Identifier Rules</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Variable names are identifiers. A beginner-friendly naming rule is to use letters, digits, and underscores, never begin with a digit, and avoid reserved keywords such as <code>int</code>, <code>return</code>, or <code>while</code>.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>int rack_count = 8;
double inlet_temperature = 22.4;
unsigned long error_count = 0;</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Choose names that describe the meaning of the value, not merely its current contents. <code>rack_count</code> communicates more than <code>x</code>, and that becomes increasingly important as programs grow.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Common Beginner Mistakes</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>Reading an uninitialized local variable:</strong> initialize before use.</li><li><strong>Assuming every integer type has the same width on every machine:</strong> query or use standard limits.</li><li><strong>Using <code>float</code> or <code>double</code> as if decimal arithmetic were exact:</strong> binary floating point introduces rounding.</li><li><strong>Mixing signed and unsigned values casually:</strong> conversions can produce surprising results.</li><li><strong>Using <code>sizeof</code> with <code>%d</code>:</strong> use <code>%zu</code> because <code>sizeof</code> produces <code>size_t</code>.</li><li><strong>Confusing a character literal with a string:</strong> <code>'A'</code> is a character constant; <code>"A"</code> is a string literal.</li><li><strong>Choosing a type before understanding the data:</strong> select the type based on range, precision, sign, and interface requirements.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Practical Exercise</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>Create a file named <code>types.c</code>.</li><li>Declare one <code>char</code>, one signed integer, one unsigned integer, one <code>float</code>, and one <code>double</code>.</li><li>Initialize every variable at declaration.</li><li>Print each value with an appropriate <code>printf</code> conversion.</li><li>Print <code>sizeof</code> for each object using <code>%zu</code>.</li><li>Include <code>&lt;limits.h&gt;</code> and print <code>INT_MIN</code>, <code>INT_MAX</code>, and <code>CHAR_BIT</code>.</li><li>Compile with <code>gcc -Wall -Wextra -Wpedantic types.c -o types</code>.</li><li>Run the program and compare your machine’s results with your assumptions.</li></ol><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Knowledge Check + Answers</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li><strong>What does a C variable’s type tell the compiler?</strong> How the object’s stored data should be represented, interpreted, and operated on.</li><li><strong>What is initialization?</strong> Giving an object its initial value when it is created.</li><li><strong>Is <code>int</code> guaranteed to be four bytes?</strong> No.</li><li><strong>What operator reports a type or object’s storage size?</strong> <code>sizeof</code>.</li><li><strong>What type does <code>sizeof</code> produce?</strong> <code>size_t</code>.</li><li><strong>What does <code>sizeof(char)</code> equal?</strong> Exactly 1 byte.</li><li><strong>Where do you find <code>INT_MAX</code> and <code>CHAR_BIT</code>?</strong> <code>&lt;limits.h&gt;</code>.</li><li><strong>What are C’s three common fundamental floating types?</strong> <code>float</code>, <code>double</code>, and <code>long double</code>.</li><li><strong>What is the difference between <code>'A'</code> and <code>"A"</code>?</strong> The first is a character constant; the second is a string literal.</li><li><strong>Why initialize local variables before reading them?</strong> An uninitialized automatic local object can have an indeterminate value.</li></ol><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Primary References</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><a href="https://www.gnu.org/software/c-intro-and-ref/manual/c-intro-and-ref.html"><strong>GNU C Language Manual</strong></a></li><li><a href="https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Type-Size.html"><strong>GNU C Language Manual — Type Size</strong></a></li><li><a href="https://en.cppreference.com/w/c/language/arithmetic_types"><strong>cppreference — C Arithmetic Types</strong></a></li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Elementary Review</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>A variable is a named object, and its type tells C what that object means.</strong> Start by declaring the correct type, initialize the variable before reading it, avoid assuming exact byte sizes, use <code>sizeof</code> and the limits headers to inspect your implementation, and choose signed, unsigned, integer, or floating-point types based on the data you actually need to represent.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":4} --><h4 class="wp-block-heading">Editor’s Note</h4><!-- /wp:heading -->

<!-- wp:paragraph --><p>The final featured image for this lesson is generated specifically for OSC.002 and is not reused in the body. The body image is a separate internet-sourced historical C reference image from Wikimedia Commons. The YouTube and Reddit embeds are separated by substantive lesson content, and ordinary lesson prose uses standard responsive Gutenberg blocks only—no bordered, shaded, card-style, callout, panel, or fixed-width text boxes.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>BitcoinVersus.Tech content is provided for informational and educational purposes.</p><!-- /wp:paragraph -->