---
post_id: 35188
title: "Google’s Gemini 4 Agents Find Quantum Algorithms Up to 290× More Efficient"
slug: google-gemini-4-quantum-algorithms-arcsin-290x-lean-formal-verification-2026
status: publish
published: 2026-11-24T03:40:03
live_url: https://bitcoinversus.tech/2026/11/24/google-gemini-4-quantum-algorithms-arcsin-290x-lean-formal-verification-2026/
featured_media_id: 35181
featured_media_url: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/google-gemini4-quantum-algorithms-290x-colored-pencil-1200x630-1.png
primary_paper: https://arxiv.org/abs/2611.09822
---
<!-- wp:paragraph -->
<p><strong>Google DeepMind and Google Quantum AI say teams of Gemini 4 AI agents discovered more efficient quantum algorithms, including a 290-fold reduction in the estimated resource cost of one arcsin arithmetic routine.</strong> Announced November 23, 2026, the research also reports improvements for selected fusion, photochemistry, drug-metabolism and search calculations. The 290× figure applies to a particular mathematical building block, not to every quantum program or the electricity bill of a quantum computer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The team published a <a href="https://arxiv.org/abs/2611.09822">preprint, <em>Discovering formally verified quantum programs with AI</em></a>, initially submitted November 6 and revised November 16. Crucially, the proposed programs were verified with the <strong>Lean theorem prover</strong>, which checks mathematical statements about correctness and computational-resource bounds. Researchers did not run the largest circuits on actual fault-tolerant quantum hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":35182,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/google-deepmind-gemini4-quantum-algorithms-original-illustration-2026.jpg?w=1024" alt="Google DeepMind's official blue quantum-state illustration for its Gemini 4 quantum-algorithm research." class="wp-image-35182" style="max-width:100%;height:auto" /><figcaption class="wp-element-caption"><em>Official Google DeepMind artwork accompanying its November 23, 2026 quantum-algorithm report; illustration, not a hardware benchmark.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What the agents improved</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The strongest headline number concerns <strong>arcsin</strong>, the inverse-sine function used in quantum arithmetic and state preparation. Compared with a prior published approach, the discovered implementation lowered the study’s resource-cost metric by approximately <strong>290×</strong>. The paper notes that the overall improvement combined classical search with later formal search, so attributing all 290× exclusively to AI proof search would exaggerate the result.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The applied-science gains were smaller but potentially more consequential. For modeling an aspect of inertial-confinement fusion, Google reported an <strong>11.8× reduction</strong> in estimated computing cost and a decrease from <strong>5,650 to 4,338 logical qubits</strong>, around 23% fewer. A photochemical simulation improved by roughly <strong>8×</strong>, while a calculation involving the drug-metabolizing enzyme cytochrome P450 improved by about <strong>2.5×</strong>, with the estimated logical-qubit requirement falling from 481 to 333. A particular parallel Grover-search variant improved by up to 2.57×.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How Gemini 4 Carbon worked with Lean</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Researchers first wrote a formal specification describing a problem, the required behavior and an acceptable cost. Multiple agent teams explored alternative circuits, received Lean verification feedback and shared promising solutions in a common wiki. Google says teams convened in virtual conferences every four hours to compare ideas. The latest paper identifies <strong>Gemini 4 Carbon</strong> as the model used in its large-scale autonomous discovery experiments.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Independent verification matters because an AI could otherwise appear to optimize a program by quietly changing the task or weakening the specification. The system checked submitted proofs against a frozen specification and rejected unsupported conclusions. Google has <a href="https://github.com/google-deepmind/formal-quantum-computation">released the Lean quantum-computation library and discovery material</a> so researchers can inspect its formal framework.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=Jh6mgf9M06M","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=Jh6mgf9M06M
</div><figcaption class="wp-element-caption"><em>Official Google DeepMind discussion of Gemini 4 Argon, released before the November quantum-algorithm announcement. Model background only; not footage of the experiments.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why resource cost is not a dollar saving</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For fault-tolerant circuits, the paper emphasizes a logical spacetime metric: <strong>Q × T</strong>, the number of logical qubits multiplied by costly T gates. Fewer logical operations or qubits may eventually reduce hardware requirements, but 290× does not establish 290× less energy, 290× cheaper cloud access, or a working 290× faster quantum processor. Error correction, physical-qubit overhead, control hardware and runtime still determine deployment economics.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Prior BitcoinVersus.Tech coverage of <a href="https://bitcoinversus.tech/2026/11/11/harvard-anthropic-quera-ai-quantum-circuits-39x-resource-reduction-2026/">Harvard, Anthropic and QuEra’s reported 39× circuit-resource improvement</a> provides another algorithm-level comparison. Our <a href="https://bitcoinversus.tech/2026/11/23/purdue-single-photon-switch-ai-decoherence-quantum-photonic-chip-2026/">Purdue photonics report</a> covers a hardware pathway, while <a href="https://bitcoinversus.tech/2026/11/19/quantum-computing-complete-guide-qubits-algorithms-bitcoin/">the quantum-computing guide</a> explains the distinction between physical and logical qubits. <a href="https://bitcoinversus.tech/2026/11/08/deepmind-ai-agents-rsa-1024-modular-root-compute-72-percent-2026/">Earlier DeepMind agent research on modular arithmetic</a> offers additional context, but its benchmark uses a different cost model.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What remains unproven</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The researchers acknowledge that important scientific simulations still exceed the resources expected on early error-corrected quantum computers. Their reported improvements are mathematical resource estimates for specified algorithms, not proof of practical commercial advantage or an imminent quantum attack on Bitcoin. The lasting development may be a repeatable research workflow: specialists define the target, AI proposes better algorithms, and a theorem prover rejects incorrect solutions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Primary sources:</strong> <a href="https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/">Google DeepMind announcement, November 23, 2026</a>; <a href="https://arxiv.org/abs/2611.09822">Shirobokov and colleagues, arXiv:2611.09822v3</a>; <a href="https://github.com/google-deepmind/formal-quantum-computation">Google’s Lean implementation</a>. <strong>Independent coverage:</strong> <a href="https://thenextweb.com/news/google-deepmind-gemini-agents-quantum-algorithms-lean">The Next Web, November 23, 2026</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiative, please scan the QR code below.</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24593,"sizeSlug":"medium","linkDestination":"none"} -->
<figure class="wp-block-image size-medium"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr.png?w=300" alt="Bitcoin donation QR code supporting independent BitcoinVersus.Tech research." class="wp-image-24593" style="max-width:100%;height:auto" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->