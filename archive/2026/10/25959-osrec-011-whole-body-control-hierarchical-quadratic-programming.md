---
post_id: 25959
title: "OSREC.011: Whole-Body Control and Hierarchical Quadratic Programming"
live_url: "https://bitcoinversus.tech/2026/10/16/osrec-011-whole-body-control-hierarchical-quadratic-programming/"
slug: "osrec-011-whole-body-control-hierarchical-quadratic-programming"
featured_media_id: 25953
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osrec-011-whole-body-control-hqp-cover.jpg"
status: publish
---

<!-- wp:paragraph -->
<p><strong>Whole-body control coordinates an entire robot as one coupled dynamical system, while hierarchical quadratic programming gives that controller a disciplined way to satisfy hard constraints and preserve task priorities when multiple objectives compete.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This lesson follows <a href="https://bitcoinversus.tech/2026/10/13/osrec-010-operational-space-control-null-space-redundancy/"><strong>OSREC.010: Operational Space Control and Null-Space Redundancy</strong></a>. That lesson introduced task-space control, redundancy, null-space motion, and task priority. OSREC.011 extends those ideas to floating-base and highly articulated robots that must coordinate balance, contacts, manipulation, posture, joint limits, torque limits, and collision constraints at the same time.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=z4POaLPRRhE&amp;w=900&amp;h=506]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><em>Tokyo Robotics demonstrates whole-body motion on a humanoid platform, showing why balance, locomotion, posture, and upper-body tasks cannot be treated as unrelated control problems.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What You’ll Learn</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li>Define whole-body control and explain why it matters for humanoids and mobile manipulators.</li><li>Identify common whole-body-control decision variables.</li><li>Distinguish hard constraints from soft objectives.</li><li>Explain the role of equality and inequality constraints.</li><li>Understand the basic structure of a quadratic program.</li><li>Explain how hierarchical quadratic programming preserves strict task priorities.</li><li>Describe contact, friction, balance, joint, torque, and collision constraints.</li><li>Understand why floating-base robots are underactuated.</li><li>Recognize infeasibility, numerical-conditioning, model-error, and priority-design failures.</li><li>Build a practical troubleshooting sequence for whole-body controllers.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Whole-Body Control Exists</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A fixed-base industrial arm can often be controlled by focusing on its joints and end effector. A humanoid is different. Moving one arm shifts the robot’s center of mass. Changing posture alters ground reaction forces. A foot contact constrains motion. A hand contact introduces additional forces. A knee torque limit can restrict what the torso or arm is able to do. The body is mechanically coupled, so the controller must reason about that coupling.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Stanford’s <a href="https://khatib.stanford.edu/teaching/cs327a/index.html"><strong>CS327A Advanced Robotic Manipulation</strong></a> treats whole-body control as a unified problem involving motion coordination, environmental contacts, internal and external constraints, underactuation, and balance. The classic Stanford whole-body framework by Luis Sentis and Oussama Khatib similarly combines constraints, operational tasks, and posture objectives rather than controlling each limb as an isolated machine.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Whole-Body Dynamics Equation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A common starting point is the rigid-body dynamics equation <code>M(q)q̈ + h(q,q̇) = Sᵀτ + Jcᵀλ</code>. Here <code>M</code> is the mass matrix, <code>h</code> groups gravity and velocity-dependent effects, <code>τ</code> contains actuator torques, <code>S</code> selects the actuated coordinates, <code>Jc</code> is a contact Jacobian, and <code>λ</code> represents contact forces or wrenches.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For a floating-base humanoid, the base itself is not directly actuated. The robot cannot command a motor that simply applies an arbitrary force to its torso in free space. It must create body acceleration indirectly through joint torques and contact forces at the feet, hands, knees, or other contact points. That underactuation is one reason whole-body control is fundamentally more constrained than ordinary fixed-base arm control.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What the Optimizer Solves For</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A whole-body controller may solve for joint accelerations, actuator torques, contact forces, or a stacked vector containing several of these quantities. A common conceptual decision vector is <code>z = [q̈, τ, λ]</code>. Once that vector is defined, the controller can write robot physics and safety requirements as mathematical constraints on <code>z</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The optimizer is not inventing arbitrary robot motion. It is searching only inside the set of commands that satisfy the dynamic model and whatever constraints the designer has imposed. The quality of the result therefore depends on both the optimizer and the correctness of the model, limits, contact state, reference frames, and priorities given to it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Equality Constraints</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An equality constraint requires a relationship to hold at the solution. Robot dynamics are often imposed as an equality. A rigid stationary foot contact can also impose a relationship requiring zero contact acceleration in selected directions. A task may request a specific Cartesian acceleration, orientation behavior, or momentum rate.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Conceptually, equalities can be written as <code>Aeq z = beq</code>. Some equalities are physical laws that should not be violated. Others are task equations that may need to become soft when the robot cannot satisfy everything simultaneously. That distinction matters because incorrectly treating every desire as a hard equality is a fast route to infeasibility.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Inequality Constraints</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Inequality constraints describe allowable regions rather than exact values. Joint positions must remain inside limits. Joint velocities and accelerations have bounds. Motors have torque limits. Contact forces must stay inside friction limits. Collision distances must stay above safety margins. Center-of-pressure or support constraints may restrict how forces are distributed through a foot.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>These constraints are commonly expressed as <code>Aineq z ≤ bineq</code>. Inequalities are one major reason optimization-based controllers are powerful: they let the controller reason directly about ranges and limits instead of relying only on after-the-fact clipping of an already computed command.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=839JGUNZTSw&amp;w=900&amp;h=506]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><em>A whole-body humanoid demonstration provides a practical view of the many simultaneous motion and stability requirements that an optimization-based controller may need to coordinate.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Quadratic Programming</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A quadratic program, or QP, minimizes a quadratic objective while satisfying linear equality and inequality constraints. One common form is <code>min ½zᵀHz + fᵀz</code> subject to the controller’s equality and inequality constraints. In robotics, the quadratic cost can penalize tracking error, excessive torque, large acceleration, posture deviation, or another quantity that can be expressed in a suitable least-squares form.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A weighted QP can combine multiple objectives by assigning each one a numerical weight. That approach is useful but has an important limitation: weights express relative importance, not necessarily strict priority. If two objectives conflict strongly enough, a supposedly secondary objective can still alter a more important one unless the formulation is carefully designed.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Hierarchical Quadratic Programming Is Different</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Hierarchical quadratic programming, or HQP, organizes objectives into priority levels. The controller solves the highest-priority level first, then allows lower-priority optimization only within the remaining freedom that does not degrade the protected result above it. This is the optimization counterpart of the task-priority and null-space concepts introduced in OSREC.010.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The influential work by Adrien Escande, Nicolas Mansard, and Pierre-Brice Wieber showed how strict hierarchies containing both equalities and inequalities can be solved fast enough for whole-body humanoid problems. Their formulation was designed specifically for cases where multiple robot objectives are incompatible and must be respected in an ordered hierarchy rather than merely blended together.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A simple hierarchy might place physical consistency and contact constraints at the top, collision avoidance and joint limits next, balance and center-of-mass control after that, a hand-tracking task below those requirements, and posture or effort minimization at the bottom. The exact order depends on the machine and application, but the engineering principle is stable: lower-priority behavior must not silently destroy a higher-priority requirement.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Contact Constraints and Friction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A robot standing on the ground cannot assume that any ground-reaction force is available. Contact forces are constrained by friction and contact geometry. A common model restricts tangential force relative to normal force through a friction cone, often approximated by a friction pyramid so that the condition can be represented with linear inequalities inside a QP.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the optimizer asks for a force outside that feasible region, the real foot may slip even though the mathematical motion target looks reasonable. This is why contact-force constraints belong inside the control problem rather than being treated as an unrelated low-level detail.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Balance Is a Whole-Body Constraint</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Balance is not controlled only by the ankles. Arm motion, torso lean, knee flexion, step location, contact timing, center-of-mass acceleration, and ground-reaction forces all affect whether the robot remains supportable. A whole-body controller can coordinate these quantities so that reaching or manipulation does not unintentionally consume the stability margin required for standing or walking.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The modern view is therefore to treat locomotion and manipulation as coupled whenever they share the same body and contacts. Stanford’s whole-body work explicitly addresses multiple distributed tasks and postures together with multiple contacts and constraints rather than decomposing balance into a separate subsystem that is unaware of manipulation.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Hard Constraints Versus Soft Objectives</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A hard constraint defines a region the optimizer is not allowed to leave. A soft objective defines behavior the controller should pursue when feasible. Confusing these categories can make a controller brittle. For example, a desired hand pose may need to relax slightly when strict joint, torque, collision, friction, or balance limits would otherwise be violated.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Slack variables are one tool for controlled relaxation. Instead of declaring the entire optimization infeasible when a soft requirement cannot be met exactly, the controller can permit a quantified violation and penalize that violation strongly. The penalty makes relaxation expensive without pretending that the physical system can always satisfy every desired task exactly.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Infeasibility Matters</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An optimization problem is infeasible when no candidate command satisfies all of its active hard constraints. In robotics, this can happen when a requested task lies outside the reachable set, contact assumptions are wrong, torque bounds are too restrictive, joint limits conflict with the task, or multiple high-priority constraints contradict each other.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A production controller must detect infeasibility explicitly. It should not assume that a solver will always return a meaningful motion command. Safe responses can include holding position, reducing task demands, changing contact strategy, replanning, activating a fallback controller, or entering a defined safe state.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=NaMcOWfTqj8&amp;w=900&amp;h=506]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p><em>This humanoid demonstration shows coordinated full-body motion on a platform whose control must respect actuation, balance, contact, and posture limits together.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Numerical Conditioning</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Even a theoretically feasible problem can become numerically difficult. Poorly scaled variables, nearly dependent constraints, singular or near-singular Jacobians, extreme task weights, inaccurate contact geometry, and insufficient regularization can make the optimization unstable or sensitive to small changes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Engineers should monitor solver status, residuals, active constraints, iteration count, condition indicators, command discontinuities, and the magnitude of slack variables. Solver success is not merely a Boolean result; the surrounding diagnostic information is part of the controller’s observability.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Model Error Still Exists</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Optimization cannot compensate perfectly for a bad physical model. Incorrect payload mass, wrong inertia, poor joint calibration, time delay, friction, structural flex, contact compliance, sensor bias, or an incorrect contact state can cause the real robot to violate the behavior predicted by the optimizer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is why simulation, hardware-in-the-loop validation, conservative limits, telemetry, and staged deployment matter. Stanford’s control-and-simulation work emphasizes physically realistic simulation as a way to evaluate control methods before expensive or unsafe physical experiments.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Practical Troubleshooting Workflow</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li><strong>Confirm the contact state.</strong> Verify which feet, hands, wheels, or other bodies are actually constrained by the environment.</li><li><strong>Verify coordinate frames.</strong> Check world, base, contact, tool, center-of-mass, and sensor frames.</li><li><strong>Check the dynamics model.</strong> Validate mass, inertia, gravity, payload, and actuator mapping.</li><li><strong>Inspect task priorities.</strong> Confirm that safety and physical constraints are above preference-level objectives.</li><li><strong>Disable low-priority tasks.</strong> Reduce the controller to the smallest feasible hierarchy.</li><li><strong>Inspect inequalities.</strong> Determine which joint, torque, friction, or collision bounds are active.</li><li><strong>Check solver status and residuals.</strong> Do not rely only on whether a command was returned.</li><li><strong>Check conditioning and scaling.</strong> Normalize variables and inspect near-dependent constraints.</li><li><strong>Add tasks one at a time.</strong> Identify which task introduces infeasibility, oscillation, or command discontinuity.</li><li><strong>Compare predicted and measured forces.</strong> Large disagreement often points to model or contact-state error.</li><li><strong>Test transitions.</strong> Pay special attention when a foot lifts, a hand makes contact, a joint limit activates, or a priority level changes.</li><li><strong>Verify fallback behavior.</strong> Intentionally create an infeasible request in simulation and confirm the system enters the expected safe state.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Engineering Exercise</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>Model a floating-base humanoid standing with two feet in contact with the ground.</li><li>Choose a conceptual decision vector containing joint accelerations, actuator torques, and contact forces.</li><li>Identify which part of the rigid-body dynamics should be imposed as an equality constraint.</li><li>Define inequality constraints for joint torque limits and foot friction.</li><li>Create a three-level task hierarchy: balance, hand tracking, and posture.</li><li>Explain what should happen when the requested hand target would require violating the friction constraint.</li><li>Add a slack variable to the hand task and explain why the balance and friction constraints should remain protected.</li><li>Describe one situation that makes the QP infeasible.</li><li>Describe one situation that is feasible mathematically but fails on hardware because the model is wrong.</li><li>List the telemetry you would log before allowing the controller to run on a physical humanoid.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Knowledge Check</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>What is whole-body control?</li><li>Why is a floating-base humanoid underactuated?</li><li>Name three common decision variables in optimization-based whole-body control.</li><li>What is the difference between an equality and an inequality constraint?</li><li>Why are friction constraints important?</li><li>What does a quadratic program minimize?</li><li>What is the key difference between a weighted QP and a strict hierarchical QP?</li><li>Why can a hard hand-position requirement make a controller infeasible?</li><li>What is a slack variable used for?</li><li>Why can a mathematically correct whole-body controller still fail on real hardware?</li></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Answers</h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>A control approach that coordinates the robot’s coupled body dynamics, tasks, contacts, and constraints as one system.</li><li>Its free-floating base has no direct actuators; body motion must be produced through joints and environmental contacts.</li><li>Joint accelerations, actuator torques, and contact forces or wrenches.</li><li>An equality specifies an exact relationship; an inequality specifies an allowable range or boundary.</li><li>They keep requested contact forces inside physically supportable regions and help prevent slip.</li><li>A quadratic objective function subject to its constraints.</li><li>Weights trade objectives numerically, while HQP protects higher-priority results before optimizing lower-priority tasks.</li><li>The requested pose may conflict with reachability, torque, collision, balance, or contact limits.</li><li>To allow controlled relaxation of a requirement while penalizing the amount of violation.</li><li>Real hardware contains model error, delay, friction, compliance, calibration error, noise, and imperfect contact assumptions.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key Takeaway</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Whole-body control turns a complex robot into one coordinated dynamical system; hierarchical quadratic programming gives that system a rigorous way to decide what must never be violated, what should be achieved first, and what can be relaxed when the machine runs out of physical freedom.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Primary technical references: <a href="https://khatib.stanford.edu/teaching/cs327a/index.html"><strong>Stanford CS327A — Advanced Robotic Manipulation</strong></a>; <a href="https://khatib.stanford.edu/projects/controlandsimulation.html"><strong>Stanford Robotics — Control and Simulation</strong></a>; <a href="https://ai.stanford.edu/manips/publications/pdfs/Sentis_2006_ICRA.pdf"><strong>Sentis and Khatib — A Whole-Body Control Framework for Humanoids Operating in Human Environments</strong></a>; <a href="https://journals.sagepub.com/doi/10.1177/0278364914521306"><strong>Escande, Mansard, and Wieber — Hierarchical Quadratic Programming: Fast Online Humanoid-Robot Motion Generation</strong></a>; and <a href="https://link.springer.com/rwe/10.1007/978-94-007-7194-9_51-2"><strong>Moro and Sentis — Whole-Body Control of Humanoid Robots</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Next:</strong> OSREC.012 will move from whole-body optimization into multi-contact planning and contact-transition control.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Safety: whole-body controllers can generate large, fast, and unintuitive multi-joint motions when tasks conflict or contact assumptions change. Validate in simulation first, enforce approved joint/velocity/torque/contact limits, use qualified safeguarding and emergency-stop procedures, and test physical hardware only under controlled engineering conditions.</em></p>
<!-- /wp:paragraph -->