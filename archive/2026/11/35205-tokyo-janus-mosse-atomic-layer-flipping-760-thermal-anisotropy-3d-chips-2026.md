---
post_id: 35205
title: "Scientists Flip Atomic Layers to Steer Chip Heat 760× More Easily Sideways"
slug: tokyo-janus-mosse-atomic-layer-flipping-760-thermal-anisotropy-3d-chips-2026
status: publish
published: 2026-11-24T04:03:26
live_url: https://bitcoinversus.tech/2026/11/24/tokyo-janus-mosse-atomic-layer-flipping-760-thermal-anisotropy-3d-chips-2026/
featured_media_id: 35201
featured_media_url: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/tokyo-janus-mosse-flip-heat-760-oil-painting-1200x630-1.png
source_doi: 10.1021/acsnano.6c07922
---
<!-- wp:paragraph -->
<p>Engineers at the University of Tokyo have used machine learning to identify an atom-thin material stack that conducts heat approximately <strong>760 times more readily sideways than vertically</strong>. The design consists of 14 sheets of a two-faced material called Janus MoSSe, arranged in a carefully chosen sequence. The university announced the work on November 12, 2026, after the study appeared online in <em>ACS Nano</em> on October 17.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>The result comes from computer simulations, not a manufactured cooling device.</strong> The 760× figure compares heat conductivity in two directions within the same optimized structure. It does not mean a computer chip would run 760 times cooler or that an existing heat spreader was improved 760-fold.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":35202,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/tokyo-janus-mosse-flipping-engineering-official-visual-abstract-2026.jpg?w=1024" alt="Official University of Tokyo visual abstract showing Janus MoSSe layer orientation, machine-learning optimization and prospective chip heat spreading." class="wp-image-35202" style="max-width:100%;height:auto" /><figcaption class="wp-element-caption"><em>University of Tokyo’s original research visual abstract, November 12, 2026. A proposed materials-design method, not an assembled chip.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why a material needs two thermal personalities</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Modern three-dimensional integrated circuits stack different semiconductor dies to shorten connections between logic and memory. Vertical stacking increases packaging density, but heat leaving a high-power processor can warm nearby memory. Ideally, a thermal interface would spread heat toward an external sink while limiting unwanted transfer into temperature-sensitive layers. Such direction-dependent conductivity is called <strong>thermal anisotropy</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The researchers selected molybdenum sulfoselenide, MoSSe, a Janus material with sulfur on one face and selenium on the other. Turning an atomic sheet upside down changes which atoms meet at the interface above and below. A stack can therefore have many internal arrangements without changing its chemical composition or requiring every layer to be twisted.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">An AI search through 8,192 possible stacks</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For 14 layers, the team held the bottom layer’s orientation fixed and considered <strong>8,192</strong> possible up-or-down sequences. Rather than simulate every configuration, it trained a machine-learned interatomic potential using quantum-mechanical calculations, then combined molecular-dynamics estimates with Bayesian optimization to select promising arrangements. The search evaluated only about <strong>3%</strong> of the candidate sequences.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>At 300 kelvin, roughly room temperature, the chosen stack had an estimated <strong>in-plane conductivity of 62.25 ± 0.16 W/(m·K)</strong> and an <strong>effective cross-plane conductivity of 0.082 ± 0.002 W/(m·K)</strong>. Their ratio, about <strong>760 ± 18</strong>, was around <strong>35% higher</strong> than for an orderly crystalline reference of the same thickness and calculated boundary conditions.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":35203,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/tokyo-mosse-760-thermal-anisotropy-study-official-figure-2026.jpg" alt="University of Tokyo original research plot comparing direction-dependent thermal conductivity of flipped MoSSe layers with an ordered crystalline reference." class="wp-image-35203" style="max-width:100%;height:auto" /><figcaption class="wp-element-caption"><em>Official University of Tokyo study figure comparing modeled thermal anisotropy across materials. Units and reference conditions are specified in the underlying ACS Nano paper.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What changed inside the crystal?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The improvement did not come from dramatically increasing sideways heat transfer. Instead, irregular layer orientations disturbed phonons, the collective atomic vibrations that carry thermal energy, particularly in the <strong>2–8 THz</strong> range. Some vibration modes became localized to individual layers, weakening the channels that ordinarily conduct heat between sheets. Lower-frequency vibrations still carried heat within the layers nearly as effectively as before.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The team compared the optimized structure against a regular stack under matching simulation conditions. Even so, effective conductivity in an ultrathin 14-layer model should not be interpreted as the bulk conductivity of a thick manufactured crystal.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Where chip designers could use the idea</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A directional thermal layer could become useful in advanced 3D packaging, where compact wiring and temperature-sensitive dies compete for space. BitcoinVersus.Tech has examined <a href="https://bitcoinversus.tech/2026/11/23/mit-slic-4b-ai-analog-chip-optimization-87-percent-2026/">AI-assisted chip design</a>, <a href="https://bitcoinversus.tech/2026/11/23/kaist-3d-rram-10nm-conductive-filament-electrode-bumps-memory-2026/">nanoscale memory structures</a>, and <a href="https://bitcoinversus.tech/2026/11/23/kit-tsukuba-heat-driven-elastocaloric-cooling-metal-films-2026/">alternative heat-transfer materials</a>. At the data-center scale, <a href="https://bitcoinversus.tech/2026/11/21/osdctc-021-coolant-flow-balancing-rack-branch-pressure-drop/">liquid-cooling flow balancing</a> addresses a different part of the same thermal-management problem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The practical challenge is substantial: scientists must synthesize high-quality Janus layers, transfer them in the specified orientation, preserve the interfaces, measure thermal transport directly and integrate the material with real semiconductor packages. No production cooling claim follows from the numerical model alone.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":35204,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/tokyo-xin-wu-janus-mosse-heat-steering-researcher-2026.jpg" alt="Official university portrait of Xin Wu, lead author of the Janus MoSSe computational research." class="wp-image-35204" style="max-width:150px;height:auto" /><figcaption class="wp-element-caption"><em>Lead author Xin Wu, from the University of Tokyo’s November 2026 original press release.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong>Primary sources:</strong> <a href="https://www.iis.u-tokyo.ac.jp/en/news/5195/">University of Tokyo announcement, November 12, 2026</a>; <a href="https://www.iis.u-tokyo.ac.jp/ja/news/5195/">full Japanese technical release with calculated reference values and figures</a>; <a href="https://doi.org/10.1021/acsnano.6c07922">Wu and colleagues, <em>ACS Nano</em>, DOI 10.1021/acsnano.6c07922</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiative, please scan the QR code below.</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24593,"sizeSlug":"medium","linkDestination":"none"} -->
<figure class="wp-block-image size-medium"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr.png?w=300" alt="BitcoinVersus.Tech research support donation QR code" class="wp-image-24593" style="max-width:100%;height:auto" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->