---
post_id: 26526
series: "Linux Command Series"
lesson_id: "Linux Command #64"
command: "localectl"
title: "Linux Command #64 – localectl (Linux OS)"
slug: "linux-command-64-localectl-linux-os"
status: "publish"
published: "2026-10-27"
url: "https://bitcoinversus.tech/2026/10/27/linux-command-64-localectl-linux-os/"
featured_media: 26520
video_url: "https://www.youtube.com/watch?v=Kuubo-OIvsg"
video_playback_verified: false
---

<!-- wp:paragraph --><p><strong>Linux Command #64 — localectl (Linux OS).</strong> When a Linux server displays the wrong language, an unexpected keyboard layout, or an unfamiliar character encoding, the first step is to inspect its system-level locale configuration. The <code>localectl</code> command is a systemd utility that reports the system's language and keyboard mapping settings and, with appropriate permissions, can change them. This focused lesson follows <a href="https://bitcoinversus.tech/2026/10/23/linux-command-63-timedatectl-linux-os/">Linux Command #63 — timedatectl</a>, which inspects time and date configuration.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Identify what a <strong>system locale</strong> and a <strong>keyboard layout</strong> control.</li><li>Inspect both settings using read-only <code>localectl</code> commands.</li><li>Know when a system-wide change is appropriate and why remote administrators should proceed cautiously.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">What Does localectl Do?</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A <strong>locale</strong> influences the language and formatting defaults used by programs, such as messages, numbers, and dates. A <strong>keyboard map</strong> influences which characters certain keys produce on a text console or graphical login screen. These are related settings, but they are not the same. A system may use an English locale with a German keyboard layout, for example. The <a href="https://www.freedesktop.org/software/systemd/man/latest/localectl.html">official systemd localectl manual</a> documents these separate controls.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>On systemd-based Linux installations with a working <code>systemd-localed</code> service, <code>localectl</code> can display system defaults, list available choices, and perform authorized changes. Minimal containers, embedded appliances, or distributions without that service may not support the command in the same way.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Three Safe Commands to Run First</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>1. <code>localectl status</code></strong> — Display the current system locale and configured keyboard layouts. Plain <code>localectl</code> also defaults to status.</li><li><strong>2. <code>localectl list-locales</code></strong> — List locale identifiers supported or available through this installation, such as <code>en_US.UTF-8</code> where installed.</li><li><strong>3. <code>localectl list-keymaps</code></strong> — List console keymaps recognized by the system. On systems without console keyboard packages or relevant support, the list may be unavailable.</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p>These three commands are read-only and ordinarily do not require <code>sudo</code>. Run them before editing configuration; record the original settings if you plan a change.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":26524,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux-command-64-localectl-quick-reference.png" alt="Quick-reference diagram listing localectl status, localectl list-locales, and localectl list-keymaps" class="wp-image-26524" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>Original quick-reference visual: the first three checks inspect settings only. They do not alter the machine.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Video Demonstration</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The following hands-on Linux demonstration illustrates keyboard layout configuration using <code>localectl</code>. Commands and behavior may differ between older Red Hat systems and current distributions. Watch the workflow, then compare it against the current systemd manual.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=Kuubo-OIvsg]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Video: Geeks Linux Video Tutorials, “10.changing the keyboard layout using localectl” (2016).</em> If the embedded player is unavailable, <a href="https://www.youtube.com/watch?v=Kuubo-OIvsg">open the same tutorial directly on YouTube</a>. The direct link is provided as a fallback and is not a second embed.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Read an Example Status Output</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A workstation might report a system locale such as <code>LANG=en_US.UTF-8</code> and a keymap such as <code>us</code>. <code>LANG</code> establishes a general locale default, while <code>UTF-8</code> refers to the Unicode text encoding. The keyboard map controls how input keys are interpreted; it does not tell you what language a particular application is displaying in every circumstance.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>To examine the locale inherited by your <em>current shell</em>, run <code>locale</code>. This output can differ from system defaults because user sessions and application environments can override locale variables. That distinction matters when a terminal is in one language while the login screen uses another.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Making Changes — Administrator-Only</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>After validating the required locale is available, an authorized administrator may use <code>sudo localectl set-locale LANG=en_US.UTF-8</code> to set the system default locale. A virtual-console keyboard layout may be changed with <code>sudo localectl set-keymap us</code> when supported. These commands change system configuration; they are <strong>not</strong> part of the read-only practice exercise. The <a href="https://manpages.ubuntu.com/manpages/focal/man1/localectl.1.html">Ubuntu localectl reference</a> and <a href="https://www.freedesktop.org/software/systemd/man/latest/localectl.html">upstream manual</a> describe syntax and constraints.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Do not switch a keyboard mapping during an unplanned remote maintenance session. An incorrect keymap or locale can complicate local recovery and troubleshooting; some changes also require a new login session or additional system-specific steps before they are reflected in all processes. Confirm your access method, fallback path, and approved maintenance procedure first.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Practical Example from Infrastructure Operations</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Suppose a newly deployed data-center host reports a German keyboard configuration even though local support staff use U.S. keyboards. A technician can check <code>localectl status</code>, compare it with the intended baseline, and record the result in the change ticket. If the system locale and login keyboard are inconsistent, the team can plan a controlled adjustment without guessing. For related systemd administration, revisit <a href="https://bitcoinversus.tech/2026/10/22/linux-command-61-hostnamectl-linux-os/">Linux Command #61 — hostnamectl</a> and <a href="https://bitcoinversus.tech/2026/10/22/linux-command-62-loginctl-linux-os/">Linux Command #62 — loginctl</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>Which command reports both system locale and keyboard mapping?</li><li>Which command lists installed or available locale identifiers?</li><li>Does changing a system locale always instantly change the language of an already running shell?</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> 1. <code>localectl status</code>. 2. <code>localectl list-locales</code>. 3. No. Existing sessions or applications can retain their current environment and may need a new session or additional configuration.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Summary and Primary Sources</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Remember: <strong><code>localectl</code> manages system locale and keyboard mapping defaults; <code>locale</code> inspects locale variables in the current process environment.</strong> Always inspect before changing anything. Sources: <a href="https://www.freedesktop.org/software/systemd/man/latest/localectl.html">systemd's official localectl documentation</a> and the <a href="https://manpages.ubuntu.com/manpages/focal/man1/localectl.1.html">Ubuntu localectl manpage</a>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer to make technical education practical, accurate, and accessible. To support independent instructional work, please consider contributing <strong>5,000 sats</strong> with the donation QR code below.</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech original 5,000-sat donation QR code" class="wp-image-24043" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>To scan the QR code, open this article on a larger screen and use your mobile Bitcoin wallet's QR scanner. Thank you for supporting verifiable technical education.</em></p><!-- /wp:paragraph -->
