---
post_id: 26618
lesson_id: OSREC.012
title: "OSREC.012: Control Barrier Functions — Safety Filters for Robot Motion"
url: "https://bitcoinversus.tech/2026/10/27/osrec-012-control-barrier-functions-safety-filters-robot-motion/"
published: "2026-10-27"
featured_media: 26615
cover_style: "Split-Screen Editorial Diptych"
cover_person: "Mature gray-haired woman robotics engineer"
media_count: 2
media: ["https://www.youtube.com/watch?v=-WUkzik1_VQ","https://www.youtube.com/watch?v=ek_cFzxyhE0"]
---

<!-- wp:paragraph -->
<p><strong>OSREC.012 — Control Barrier Functions for Robot Safety.</strong> A robot may have a useful motion command and still need to reject that command before it crosses a modeled safety boundary. Control barrier functions (CBFs) express a safe region mathematically; a quadratic-programming safety filter can then choose a nearby permissible command. This lesson builds directly on <a href="https://bitcoinversus.tech/2026/10/16/osrec-011-whole-body-control-hierarchical-quadratic-programming/">OSREC.011: Whole-Body Control and Hierarchical Quadratic Programming</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Learning objectives</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li>Define a mathematical safe set with a barrier function.</li>
<li>Explain the difference between a nominal motion command and a safety-filtered command.</li>
<li>Solve a one-dimensional CBF velocity-limit example and identify the limits of its guarantee.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>1. Specify the safe set</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Let <strong>x</strong> represent a robot's state. A function <strong>h(x)</strong> labels the permissible states: the safe set is <strong>C = {x : h(x) ≥ 0}</strong>. At <strong>h(x) = 0</strong>, the system is on the modeled boundary; at <strong>h(x) &lt; 0</strong>, it is outside the permitted region. The engineering problem is to select commands that keep a trajectory inside C, assuming it starts inside.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The key mathematical property is <strong>forward invariance</strong>: once a state is inside the safe set, a correctly enforced controller keeps future states there under the specified system model and assumptions. This framework is developed by <a href="https://authors.library.caltech.edu/records/jnhr0-1ww05">Ames, Xu, Grizzle and Tabuada in their control-barrier-function QP research</a> and explained in <a href="https://faculty.washington.edu/sburden/585/lec-19-control-barrier-functions.html">University of Washington's lecture notes on CBFs</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>2. Video — Multi-robot collision avoidance demonstration</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A research-linked demonstration accompanying Wang, Ames and Egerstedt's paper shows how barrier certificates can alter nominal multi-robot commands to respect collision-avoidance constraints. Their <a href="https://authors.library.caltech.edu/records/tshzw-g4v69">published research record</a> explains the associated quadratic-program formulation.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=-WUkzik1_VQ]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><em>Research demonstration from the Safety Barrier Certificates project.</em> <a href="https://www.youtube.com/watch?v=-WUkzik1_VQ">Open the video directly on YouTube</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>3. Apply the CBF condition</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For a control-affine model <strong>dx/dt = f(x) + g(x)u</strong>, a common zeroing-CBF constraint takes the form <strong>L<sub>f</sub>h(x) + L<sub>g</sub>h(x)u + α(h(x)) ≥ 0</strong>, where α is an appropriate increasing function with α(0) = 0. The Lie derivatives express how h changes through uncontrolled dynamics and through the commanded input.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A <strong>safety filter</strong> chooses a command <strong>u</strong> near the nominal command <strong>u<sub>nom</sub></strong>, for example by minimizing <strong>½‖u − u<sub>nom</sub>‖²</strong> subject to the CBF inequality and actuator bounds. The quadratic program does not plan an entire task; it edits a proposed command only as much as its constraints require. Feasibility is essential: no solution means the mathematical requirements cannot all be met by the available inputs at that instant.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>4. Worked example — robot approaching a boundary</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Consider an idealized one-dimensional robot position <strong>x</strong> measured in meters with directly commanded velocity <strong>dx/dt = u</strong>. Suppose the modeled permitted region is <strong>x ≥ 0.50 m</strong>. Define <strong>h(x) = x − 0.50 m</strong> and choose <strong>α(h) = κh</strong> with κ = 2 s<sup>−1</sup>.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><li>At x = 0.60 m, the clearance relative to this simplified boundary is h = 0.10 m.</li>
<li>The CBF constraint becomes <strong>u + 2(0.10) ≥ 0</strong>, or <strong>u ≥ −0.20 m/s</strong>.</li>
<li>Suppose the nominal controller asks for u<sub>nom</sub> = −0.50 m/s. Among feasible commands, the closest one is <strong>u = −0.20 m/s</strong>, assuming the actuator bounds permit it.</li>
<li>At the boundary x = 0.50 m, the same inequality requires <strong>u ≥ 0</strong>: the robot must not command velocity deeper into the forbidden region.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This arithmetic is an <strong>illustrative continuous-time model</strong>, not an industrial robot configuration. A real manipulator has inertia, acceleration and torque limits, sensor error, braking distance, latency, reachable volume, human presence and possible model mismatch. A position-only single-integrator barrier is not sufficient to certify an actual machine's collision safety.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>5. Video — Research lecture on safety-critical dynamic robots</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In a University of Washington ECE colloquium, control researcher Aaron Ames discusses optimization-based safety-critical control and its application to dynamic robotic platforms. The university provides the <a href="https://www.ece.uw.edu/colloquia/aaron-ames/">original presentation listing and video link</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=ek_cFzxyhE0]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><em>University of Washington ECE research colloquium, November 17, 2020.</em> <a href="https://www.youtube.com/watch?v=ek_cFzxyhE0">Open the lecture directly on YouTube</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>6. Engineering checks before deployment</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>State estimation:</strong> Identify sensor accuracy, update frequency and timing delays affecting the estimated state.</li>
<li><strong>Model validity:</strong> Check inertia, actuator limits, contact behavior and the relative motion of obstacles.</li>
<li><strong>Constraint feasibility:</strong> Test whether all required CBF and hardware limits can be satisfied together throughout the operating region.</li>
<li><strong>Controller timing:</strong> Verify solver execution time and what happens when the solver misses a cycle or returns no feasible command.</li>
<li><strong>Independent safeguarding:</strong> Follow applicable machinery risk assessments, interlocks, guarding and emergency-stop requirements. A modeled CBF is not a substitute for approved physical safeguards.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>For additional context, the IEEE Robotics &amp; Automation Magazine article <a href="https://ramagazine.ieee.org/2022/10/24/safety-and-efficiency-in-robotics-the-control-barrier-functions-approach/">Safety and Efficiency in Robotics: The Control Barrier Functions Approach</a> discusses CBFs in industrial human–robot collaboration. For practical safeguarding, consult <a href="https://www.osha.gov/robotics">OSHA's robotics guidance</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>7. How this connects to earlier lessons</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://bitcoinversus.tech/2026/10/13/osrec-010-operational-space-control-null-space-redundancy/">OSREC.010</a> introduced operational-space control and null-space behavior. <a href="https://bitcoinversus.tech/2026/10/16/osrec-011-whole-body-control-hierarchical-quadratic-programming/">OSREC.011</a> introduced task priorities and QP constraints. A CBF adds a principled way to construct some of those safety inequalities from a specified safe set. For hands-on gripper inspection rather than controller mathematics, see <a href="https://bitcoinversus.tech/2026/10/27/osrtc-014-industrial-robot-gripper-inspection-jaw-wear-pneumatics/">OSRTC.014</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Knowledge check</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li>What does h(x) ≥ 0 signify in a CBF design?</li>
<li>At x = 0.60 m in the worked example, why is a nominal velocity of −0.50 m/s modified?</li>
<li>Why does a feasible mathematical safety filter not eliminate the need for guarding and risk assessment?</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Answers:</strong> The state is inside the modeled permissible set; −0.50 m/s violates the example's bound u ≥ −0.20 m/s; real robots face model uncertainty, timing and actuator limitations, and must meet independent machine-safety requirements.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> If this independent robotics engineering lesson helped you, consider supporting future lessons with <strong>5,000 sats</strong>. Scan the Bitcoin donation QR below to contribute.</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech original 5,000-sat Bitcoin donation QR code" class="wp-image-24043"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>Display the QR code on another screen and scan it with a compatible Bitcoin wallet.</em></p>
<!-- /wp:paragraph -->
