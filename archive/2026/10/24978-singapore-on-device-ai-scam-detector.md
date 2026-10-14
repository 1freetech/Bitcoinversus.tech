# Singapore Builds On-Device AI Scam Detector

- WordPress post ID: 24978
- Published: 2026-10-14T17:42:33
- Canonical URL: https://bitcoinversus.tech/2026/10/14/singapore-on-device-ai-scam-detector/
- Slug: singapore-on-device-ai-scam-detector
- Status: publish
- Featured media ID: 24973
- Featured image dimensions: 1200x630
- Category IDs: 5812, 6
- Primary source: https://deepmind.google/blog/on-device-ai-scam-detection-mddi/
- Secondary source: https://www.mddi.gov.sg/newsroom/opening-address-by-minister-josephine-teo-at-the-singapore-international-cyber-week--day-2-/
- Social embed: https://www.linkedin.com/posts/govtech-singapore_techforpublicgood-govtechsg-cybersecurity-activity-7334096243444326402-0_nV
- YouTube embed 1: https://www.youtube.com/watch?v=eJFJRyXEHZ0
- YouTube embed 2: https://www.youtube.com/watch?v=boy-UjB8hpA
- YouTube embed 3: https://www.youtube.com/watch?v=O6499i4TFYA
- Archive format: final Gutenberg source
- Live render verification: all three YouTube blocks rendered as iframe players; GovTech LinkedIn block was preserved as an official social link; featured image ID 24973 attached; original donation QR ID 24043 rendered intact at the footer.

## Final Gutenberg Source

<!-- wp:paragraph -->
<p>Singapore is testing a new way to fight conversational scams without sending private chats to a cloud server. On October 14, 2026, Google DeepMind and Singapore’s Government Technology Agency announced an on-device scam detection model built to recognize manipulative patterns inside multi-turn conversations while keeping message analysis on the user’s phone.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The project targets a difficult part of modern fraud: scams that do not look obviously malicious in a single message. Instead, an attacker may spend minutes or days building trust, impersonating a bank, government agency, executive or public figure before asking for credentials or money. <a href="https://deepmind.google/blog/on-device-ai-scam-detection-mddi/">Google DeepMind says</a> these social-engineering conversations now account for up to 80% of scam losses in Singapore, while scams overall have caused more than S$4 billion in losses since 2019.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The technical design is a two-stage pipeline. The first stage is a lightweight classifier that screens inbound messages using relatively little power. Conversations that appear benign can stop there. Suspicious activity is passed to a second stage: a fine-tuned Gemma model that examines a broader window of the conversation to decide whether manipulation is occurring. If the model identifies a likely scam, it can trigger an immediate warning telling the user to pause before sending money or sensitive information.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=eJFJRyXEHZ0","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=eJFJRyXEHZ0
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Google for Developers demonstrates Gemma 3n, a mobile-first model family designed for efficient multimodal AI running directly on everyday devices.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why On-Device Detection Matters</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The most important architectural choice is where that second-stage analysis happens. Google DeepMind says the conversation snapshot is processed on-device rather than uploaded to a remote server. That matters because many messaging services use end-to-end encryption. Server-side scanning can conflict with the privacy model of those services, while local inference can analyze content after it reaches the authorized user’s device without requiring the service provider to read the messages in the cloud.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This does not mean privacy questions disappear. An on-device model still needs permissions, memory, compute and a secure application boundary, and developers need clear rules about what conversation context is retained. But keeping inference local can reduce the amount of sensitive data transmitted to external infrastructure. BitcoinVersus.Tech recently <a href="https://bitcoinversus.tech/2026/10/12/8-ai-assistants-ranked-for-privacy-2026/">ranked AI assistants for privacy</a>, and the same principle appears here: where computation occurs can be just as important as what the model can do.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Google DeepMind says the model was fine-tuned on localized scam conversations covering impersonations of public institutions, banks and local figures as well as regional scam patterns. The goal is important because a generic fraud classifier trained primarily on another country’s language, institutions and scam habits may miss the cues Singapore users actually see. Local fine-tuning is one way to make a smaller model more useful without making it universally large.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That approach also fits the larger move toward edge AI. BitcoinVersus.Tech previously covered <a href="https://bitcoinversus.tech/2026/10/06/semiconductors-singapore-helix-edge-ai-fd-soi-phase-change-memory/">Singapore’s HELIX Lab and its push toward edge AI hardware</a> using 18nm FD-SOI and phase-change memory. The scam-detection project tackles a different layer of the stack, but the direction is similar: move useful intelligence closer to the device so latency, privacy and connectivity constraints become easier to manage.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=boy-UjB8hpA","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=boy-UjB8hpA
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Google for Developers explains the broader Google AI Edge stack for running AI locally with lower latency, offline capability and greater control over private data.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Singapore Confirms the Project</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Singapore’s Ministry of Digital Development and Information independently confirmed the collaboration during Singapore International Cyber Week. <a href="https://www.mddi.gov.sg/newsroom/opening-address-by-minister-josephine-teo-at-the-singapore-international-cyber-week--day-2-/">Minister Josephine Teo said</a> GovTech is working with Google DeepMind to develop real-time AI detection of scams on devices so signs of manipulation can be recognized early while personal messages remain on the device. The project was presented at SICW 2026.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The government context helps explain why Singapore is investing heavily here. GovTech says scams represented more than half of reported crimes, and the agency’s current anti-scam stack already combines mobile tools, automated website analysis and law-enforcement workflows. ScamShield, for example, can check suspicious calls, links and messages, while GovTech says the suite has blocked or blacklisted more than 120,000 scam entities since 2022 and has been downloaded more than 900,000 times.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.linkedin.com/posts/govtech-singapore_techforpublicgood-govtechsg-cybersecurity-activity-7334096243444326402-0_nV","type":"rich","providerNameSlug":"linkedin","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-linkedin wp-block-embed-linkedin"><div class="wp-block-embed__wrapper">
https://www.linkedin.com/posts/govtech-singapore_techforpublicgood-govtechsg-cybersecurity-activity-7334096243444326402-0_nV
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>GovTech Singapore has publicly documented its broader AI-driven anti-scam work, including systems designed to detect malicious websites and other scam infrastructure.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A second system, SATIS, operates farther upstream. GovTech says SATIS and its recursive Machine-Learning Site Evaluator continuously review more than 400,000 websites per day, with over 90% accuracy and less than 0.1% false positives after human-machine verification. The agency says the system disrupts more than 15,000 malicious websites in an average month. Those figures are government-reported performance measures, but they show that Singapore is not starting from zero: the new DeepMind model would join an existing multi-layer anti-scam system rather than replace it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Gap Website Scanners Cannot See</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The conversational model addresses a gap website scanning cannot solve. A scammer can use a legitimate messaging platform, a normal-looking account and no malicious link at all. The fraud may depend entirely on persuasion: “I am your boss,” “I am from the police,” “your account is at risk,” or “move the money now.” A URL classifier cannot reliably detect that kind of social pressure because the dangerous signal may be spread across several ordinary-looking sentences.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why multi-turn context matters. A single request to “confirm your name” can be harmless. A later request to install an app, disclose a one-time password or transfer funds can change the meaning of the earlier exchange. An on-device language model can potentially evaluate that sequence as a pattern instead of treating every message independently.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=O6499i4TFYA","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=O6499i4TFYA
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Google for Developers shows how newer Gemma models run inside the AI Edge Gallery, illustrating how increasingly capable language models are moving onto local hardware.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Is Not Proven Yet</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There are still limitations. Google DeepMind has not published a full public benchmark showing detection rates across every scam category, device class and language used in Singapore. The announcement also does not mean every WhatsApp, Telegram, iMessage or SMS conversation in Singapore is now automatically protected by this model. DeepMind explicitly says messaging platforms and operating-system vendors can integrate lightweight models like this. Deployment therefore depends on product integration, permissions, user experience and platform policy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>False positives will matter too. A security model that warns too often can train users to ignore it. A model that is too cautious can miss sophisticated fraud. Localized models must also keep up with scam tactics that change quickly. Scammers can alter vocabulary, pacing, impersonated institutions and requested actions once they understand how detection systems behave.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The training process was designed with governance controls. DeepMind says fine-tuning occurred inside GovTech’s managed Google Cloud environment, with training data isolated in what it describes as a sovereign sandbox. It says private citizen data and personally identifiable information were excluded, with training instead based on anonymized material derived from scam reports and intelligence feeds. The system was also stress-tested with synthetic dialogues and local corpora.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That governance model is notable because anti-fraud AI can create a temptation to collect more private information in the name of safety. The Singapore project is trying to take the opposite route: use local inference and controlled training data to reduce how much personal conversation data leaves the device. It is not proof that every privacy risk has been solved, but it is a concrete engineering choice rather than a policy slogan.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Scam technology has already shown why this tradeoff matters. BitcoinVersus.Tech previously reported how <a href="https://bitcoinversus.tech/2026/10/04/computer-security-trezor-phishing-email-real-domain/">a phishing email targeting Trezor users came from its real domain</a>, demonstrating that familiar trust signals can be compromised. As attackers gain access to better generative AI, voice synthesis and deepfake tools, users will increasingly face messages that look polished, personalized and context-aware. Detection systems will need to judge behavior, not just spelling mistakes or suspicious URLs.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why This Could Matter Beyond Singapore</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Singapore’s latest approach is therefore worth watching beyond Singapore. If a relatively small model can run efficiently on mainstream phones, detect manipulation across several messages and keep the content local, the same architecture could be adapted to banking apps, messaging platforms, enterprise chat systems or telecom anti-fraud tools in other countries.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The larger lesson is that some of the most practical AI deployments may not require a giant cloud model answering open-ended questions. A smaller model trained for one high-value task, running privately on hardware people already own, can be more useful. In this case, the task is simple to describe but difficult to execute: recognize when a conversation is turning into a scam before the user sends the money.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"width":"1170px","height":"1038px","sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="Bitcoin donation QR code for 5,000 sats." class="wp-image-24043" style="width:1170px;height:1038px" width="1170" height="1038" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->