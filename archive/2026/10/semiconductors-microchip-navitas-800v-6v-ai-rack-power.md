---
title: "Semiconductors: Microchip and Navitas Push AI Rack Power From 800V DC Straight to 6V"
status: published
wordpress_post_id: 21188
published: "2026-10-06T00:12:49"
live_url: "https://bitcoinversus.tech/2026/10/06/semiconductors-microchip-navitas-800v-6v-ai-rack-power/"
featured_media_id: 21185
category: "Semiconductors"
youtube_1: "https://www.youtube.com/watch?v=2FvduDUtxxk"
x_footer: "https://twitter.com/1BitcoinVersus/status/1937006164555993338"
---

<!-- wp:group -->
<div class="wp-block-group">
<!-- wp:paragraph -->
<p>Microchip Technology and Navitas Semiconductor are taking a direct swing at one of AI infrastructure’s least glamorous but most important bottlenecks: getting very large amounts of electrical power from the data-center distribution system down to the low voltages used close to accelerators.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On October 5, 2026, the companies announced an <a href="https://www.microchip.com/en-us/about/news-releases/products/the-data-center-is-moving-to-800v-microchip-and-navitas-are-enabling-transition">800V DC-to-6V DC reference design for AI data-center rack power</a>. The platform combines Microchip digital power control and hardware security with Navitas GaN power devices, and it is intended to help engineers build power systems aligned with the industry’s move toward 800V DC distribution.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The important part is not just the voltage number. It is the attempt to collapse what can be multiple conversion stages into a more direct rack-level power path.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why AI racks are moving toward 800V DC</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Power and current are related by the basic equation P = V × I. For the same delivered power, a higher distribution voltage allows lower current. That matters because conductor losses scale approximately with I²R, so reducing current can reduce resistive losses and the amount of copper needed to move power through a high-density rack or row.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The <a href="https://www.opencompute.org/index.php/blog/powering-the-next-era-of-ai-how-google-microsoft-and-nvidia-are-standardizing-and-accelerating-the-industry-transition-to-lvdc">Open Compute Project says Google, Microsoft and NVIDIA are working with the broader OCP ecosystem around common 800V DC requirements</a>. OCP describes both near-term side-power-rack architectures that convert existing AC infrastructure to high-voltage DC near the compute racks and a longer-term path that converts medium-voltage AC directly to an 800V DC backbone.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That broader shift is already showing up around the rack. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/10/01/trane-3-5-mw-800v-dc-chiller-ai-data-centers/">Trane’s 3.5 MW 800V DC chiller work for AI data centers</a>, a sign that cooling, power conversion and compute are beginning to converge around a shared high-voltage DC architecture rather than being engineered as isolated systems.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Microchip adds the control loop and hardware trust</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Microchip’s contribution centers on its dsPIC33AK digital signal controllers and TA100 CryptoAuthentication security IC. The digital controller is intended to manage the high-frequency power-conversion loop, while the security device adds functions such as authentication, secure boot, protected firmware updates and key-management support.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That security layer is easy to overlook in a power story, but digitally controlled converters are increasingly software-defined pieces of infrastructure. If firmware can alter converter behavior, then validating the code that boots and protecting the update path become part of power-system reliability rather than a separate cybersecurity concern.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Navitas uses GaN to attack switching loss and power density</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Navitas supplies the GaN power devices used in the reference platform. Gallium nitride devices can switch quickly and are attractive in compact, high-frequency conversion stages where engineers are trying to reduce magnetic-component size while keeping efficiency high.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The companies say the direct architecture combines functions that would otherwise be handled by an 800V-to-50V stage followed by a 50V-to-6V stage. Eliminating an intermediate conversion step can reduce the number of places where energy is lost as heat and can simplify the physical path between the rack bus and the accelerator board.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes this announcement a natural follow-up to BitcoinVersus.Tech’s coverage of <a href="https://bitcoinversus.tech/2026/09/26/navitas-and-wise-integration-team-up-on-ai-data-center-power/">Navitas and Wise Integration targeting AI data-center power</a>. The story is becoming less about a single component and more about a new rack-power ecosystem built around wide-bandgap semiconductors, digital control and much higher distribution voltages.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">800V-to-6V is really a rack-architecture story</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A converter cannot be evaluated in isolation. Engineers still have to manage fault protection, busbars and connectors, grounding, transient response, thermal removal, redundancy, serviceability and the interaction between the converter and rapidly changing GPU loads.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The shift also changes what “power semiconductor” means inside a data center. Devices that were once discussed mainly in terms of discrete efficiency are now part of a system-level design problem that spans the utility feed, transformer and rectifier layers, battery storage, rack distribution and finally the low-voltage rails beside the compute package.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=2FvduDUtxxk","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=2FvduDUtxxk
</div><figcaption class="wp-element-caption"><em>Open Compute Project APAC Summit session: “800V DC Power Trends,” presented by Henrik Nilén of Vertiv.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech has also tracked <a href="https://bitcoinversus.tech/2026/10/03/renesas-650v-gan-megawatt-ai-data-center-power/">Renesas shrinking 650V GaN power hardware for megawatt AI data centers</a>. Together, these developments show why power electronics are becoming one of the key scaling technologies for AI infrastructure: compute density can only rise if the electrical path feeding that compute becomes denser, faster and easier to cool.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What happens next</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Microchip and Navitas say the reference design will be supported with a reference board, software and documentation and will be showcased at the 2026 OCP Global Summit in San Jose from October 12 through October 15.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The near-term question is how quickly designs like this move from reference hardware into qualified rack platforms. The longer-term question is bigger: whether AI data centers standardize around a genuinely DC-native power chain from facility distribution to the accelerator board. If they do, 800V will not be just another voltage rail. It will become part of the physical architecture of the AI factory.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">BitcoinVersus.Tech</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Advertisement</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech independently reviews technical claims against primary documentation and established industry sources before publication.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support our independent research and technical publishing: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. Content is provided for informational purposes.</p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->