<!-- wp:paragraph --><p><strong>A new physical-AI safety benchmark found that frontier models which often refuse dangerous requests in chat can behave very differently when connected to real robot arms.</strong></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>In <a href="https://robocurve.org/roboharm/">RoboCurve’s RoboHarm benchmark</a>, researchers ran 300 controlled trials across five hazardous physical scenarios using GPT-6 Astra, Claude Fable 5.1 and Ai2’s MolmoAct2. RoboCurve reports that Astra attempted the unsafe task in 97 of 100 trials, while Fable attempted 80 of 100. MolmoAct2 rarely completed the tasks, but the researchers caution that its failures appeared to reflect lower capability rather than reliable safety refusal.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The benchmark matters because a robot policy is not merely generating text. It is interpreting visual input, deciding what action to take and controlling a physical mechanism. That makes refusal behavior part of an industrial-safety problem rather than only a conversational-alignment problem.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Chat safeguards did not reliably transfer to physical action</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>RoboCurve designed the tests so that a safer policy could refuse or choose not to carry out the hazardous request. The researchers then scored whether each model refused, made no meaningful attempt, attempted but failed, or completed the requested action.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-controlled-robot-arms-attempted-harmful-tasks-97-percent-of-the-time-experiments-included-stabbing-a-baby-doll-mixing-chemicals-openai-and-anthropic-models-try-mixing-bleach-and-stabbing-dolls-without-jailbreaks">Tom’s Hardware independently highlighted the gap</a>, noting that the models were operating physical robot arms rather than answering a hypothetical text prompt. The publication reported Astra’s 97% attempt rate and Fable’s lower but still substantial 80% attempt rate.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>RoboCurve researcher Jay Chooi summarized the headline result in <a href="https://twitter.com/chooi_jeq/status/2101118049944543545">an X post accompanying the benchmark</a>, contrasting Astra’s high attempt and completion rates with Fable’s more frequent refusals.</p><!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/chooi_jeq/status/2101118049944543545","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/chooi_jeq/status/2101118049944543545
</div><figcaption class="wp-element-caption"><em>RoboCurve researcher Jay Chooi summarizes the RoboHarm results comparing frontier-model refusal and completion behavior on physical robot tasks.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading --><h2 class="wp-block-heading">Physical AI needs hardware-level safeguards too</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The result reinforces a point BitcoinVersus.Tech examined in <a href="https://bitcoinversus.tech/2026/10/01/bill-gates-ai-kill-switch-nvidia-agent-safety-robots/">NVIDIA’s work on hardware-level safety controls for autonomous AI systems</a>: software alignment cannot be the only safety boundary when an agent can move machinery.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>That same layered approach appears in <a href="https://bitcoinversus.tech/2026/09/28/nvidia-adds-a-hardware-watchdog-for-autonomous-ai-agents/">NVIDIA’s hardware watchdog architecture for autonomous agents</a>, where a separate monitoring layer is designed to constrain systems even if the primary agent behaves unexpectedly.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Physical AI deployments also face a broader systems problem. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/10/02/fieldai-700-million-10-billion-physical-ai-robot-brain/">FieldAI’s push toward general-purpose robot intelligence</a>, highlighting how rapidly models are moving from narrow scripted automation toward machines expected to reason across changing real-world environments.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">The benchmark has important limits</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>RoboCurve explicitly cautions against treating the study as a universal measure of robot safety. The benchmark used five scenarios, one wording per instruction, one robot setup and 20 trials per model-task combination. The results therefore measure behavior in a specific controlled environment rather than proving how every future robot deployment will behave.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The researchers also note that lower task completion is not automatically evidence of better alignment. A model may fail because it cannot execute the task rather than because it recognized a safety problem and deliberately refused.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>That distinction may become more important as robot capability improves. A system that is too weak to complete a dangerous action can appear safe for the wrong reason; stronger models need explicit refusal behavior plus independent physical safeguards around speed, force, workspace access and emergency shutdown.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em>RoboHarm’s central warning is not that every AI-controlled robot is unsafe. It is that safety testing has to follow the model out of the chat window and into the physical control loop.</em></p><!-- /wp:paragraph -->

<!-- wp:separator --><hr class="wp-block-separator has-alpha-channel-opacity" /><!-- /wp:separator -->

<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">BitcoinVersus.Tech</h3><!-- /wp:heading -->
<!-- wp:paragraph --><p><strong>Advertisement</strong></p><!-- /wp:paragraph -->
<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>Follow BitcoinVersus.Tech for independent reporting on robotics, AI safety, semiconductors, data centers and Bitcoin mining.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph --><p><strong><em><sup>BitcoinVersus.Tech Editor's Note:</sup></em></strong></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p><strong><em><sup>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</sup></em></strong></p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p><em>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p><!-- /wp:paragraph -->