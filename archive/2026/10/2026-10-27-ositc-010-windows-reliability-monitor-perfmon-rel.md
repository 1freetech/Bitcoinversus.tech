---
post_id: 26540
series: "Open-Source Information Technology Certification"
lesson_id: "OSITC.010"
title: "OSITC.010: Windows Reliability Monitor — Diagnose Crashes With perfmon /rel"
status: "publish"
published: "2026-10-27"
url: "https://bitcoinversus.tech/2026/10/27/ositc-010-windows-reliability-monitor-crash-history-perfmon-rel/"
featured_media: 26532
video_urls:
  - "https://www.youtube.com/watch?v=GstKO7nFquI"
  - "https://www.youtube.com/watch?v=eHpksTsVYQM"
embed_render_verified: true
actual_video_playback_verified: false
---

<!-- wp:paragraph --><p><strong>OSITC.010 — Windows Reliability Monitor.</strong> A Windows computer can freeze, restart, or crash without immediately explaining why. Windows Reliability Monitor provides a dated summary of significant failures, warnings, and software changes so technicians can find where to investigate first. In this lesson, you will use its built-in <code>perfmon /rel</code> command to compare a system failure with recent changes. This follows <a href="https://bitcoinversus.tech/2026/10/25/ositc-009-diagnosing-windows-update-failures-history-event-logs/">OSITC.009 on Windows Update failures</a> and complements <a href="https://bitcoinversus.tech/2026/10/09/ositc-004-windows-event-viewer-fundamentals-logs-levels-event-ids-sources-filtering-troubleshooting/">OSITC.004 on Event Viewer</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Open Reliability Monitor without installing any third-party software.</li><li>Interpret the reliability timeline and recognize critical events.</li><li>Investigate a dated crash without automatically blaming the most recent update.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">1. Open Reliability Monitor</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>On a Windows 10 or Windows 11 computer, press <strong>Windows + R</strong>.</li><li>Type <code>perfmon /rel</code> and press <strong>Enter</strong>.</li><li>Allow Windows a moment to assemble the stability history. Alternatively, search Start for <strong>View reliability history</strong>.</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p>The tool is provided with supported desktop Windows versions. In corporate or locked-down environments, management policy can restrict access or reporting. <a href="https://www.dell.com/support/kbdoc/en-us/000178177/how-to-use-windows-reliability-monitor-to-identify-software-issues">Dell's support guide</a> independently documents this launch method.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Watch the Command in Action</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The first tutorial demonstrates the <code>perfmon /rel</code> command and explains why the Windows Reliability Monitor is useful. It is embedded as a native WordPress YouTube player, with a direct link underneath in case a viewer's browser blocks third-party embeds.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=GstKO7nFquI]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Video tutorial: Guide e Tutorial, “Learn about Windows Reliability Monitoring — The perfmon /rel command” (September 2025).</em> <a href="https://www.youtube.com/watch?v=GstKO7nFquI">Watch the source video directly on YouTube</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">2. Interpret the Timeline</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Reliability Monitor plots a <strong>system stability index</strong> over time and associates days with specific problem reports, warnings, and informational events. A downward movement is a clue about the timing of failures, not a diagnosis or proof that the device is physically defective. Select a day or week to inspect the events listed beneath the graph. This is especially helpful when several people report intermittent crashes at different times.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":26533,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/ositc-010-reliability-monitor-illustrative-timeline.png" alt="Conceptual reliability history chart shows an example critical event and follow-up investigation steps" class="wp-image-26533" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>Original instructional illustration. The example stability readings are fictional and do not represent a specific Windows installation.</em></p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">3. Open a Critical Event</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>Select a day showing a <strong>red X</strong> or another relevant failure indicator.</li><li>Find the affected application or Windows component in the event list.</li><li>Choose <strong>View technical details</strong> when available, and record the application name, failure time, error information, and other useful identifiers.</li><li>Compare the time with application installs, driver changes, Windows updates, and earlier incidents.</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p>A red X could represent an app that stopped working, for example, while an information entry may record a successful installation. Do not assume adjacent events have a causal relationship. Microsoft's <a href="https://techcommunity.microsoft.com/blog/askperf/using-reliability-monitor-for-troubleshooting/372962">Reliability Monitor troubleshooting guidance</a> explicitly cautions that apparent post-update failures can sometimes involve the reboot or earlier software changes rather than the update itself.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">A Second Video — Finding Reliability History in Windows 11</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>This short companion video shows a separate Windows 11 launch workflow. Keeping both demonstrations gives learners another way to find the tool when menus differ across versions.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=eHpksTsVYQM]
<!-- /wp:shortcode -->

<!-- wp:paragraph --><p><em>Video tutorial: Компьютерные Ошибки, “How to open Reliability Monitor in Windows 11” (September 2024).</em> <a href="https://www.youtube.com/watch?v=eHpksTsVYQM">Open the second tutorial directly on YouTube</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">4. A Data-Center Troubleshooting Scenario</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Consider a Windows workstation used by a datacenter technician to manage a hardware monitoring console. The console begins closing unexpectedly after a planned patch window. First, open <code>perfmon /rel</code> and locate the first reported application crash. Then review its technical details and compare the dates of the application, driver, and Windows changes. Confirm relevant details using Event Viewer rather than reinstalling software immediately. If failures correlate with specific processes, <a href="https://bitcoinversus.tech/2026/10/08/ositc-003-windows-process-troubleshooting-task-manager-pid-process-explorer/">OSITC.003 on process troubleshooting</a> helps investigate them further.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>If the timeline shows a recurring failure, note exactly when the error began and whether it affects one application or the whole machine. If you must export a reliability report, follow organizational data-handling rules; diagnostics may reveal application names, installed software, and information about the system.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Safety and Common Mistakes</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>Do not treat the index as a benchmark.</strong> A low number signals recent reliability events; it does not independently measure CPU or storage performance.</li><li><strong>Do not confuse timing with cause.</strong> Verify an event with technical details, broader logs, and controlled troubleshooting.</li><li><strong>Do not disable security tools or uninstall patches without authorization.</strong> Investigate the evidence first.</li><li><strong>Do not expect full history on a new installation.</strong> The view depends on data Windows has collected and retained.</li></ul><!-- /wp:list -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>What Run command opens Reliability Monitor?</li><li>Why is a red X useful but not enough to identify root cause?</li><li>Where should you look for more detailed Windows diagnostic events?</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> 1. <code>perfmon /rel</code>. 2. It points to a failure on a particular date but does not establish the cause. 3. View technical details within Reliability Monitor, then consult Event Viewer and relevant application or system logs.</p><!-- /wp:paragraph -->

<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Conclusion and Verified Sources</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Reliability Monitor turns scattered failure reports into a <strong>dated investigation timeline</strong>. Start with <code>perfmon /rel</code>, inspect the specific incident, compare nearby changes, then corroborate before acting. Source references: <a href="https://techcommunity.microsoft.com/blog/askperf/using-reliability-monitor-for-troubleshooting/372962">Microsoft's Reliability Monitor troubleshooting article</a>, <a href="https://www.dell.com/support/kbdoc/en-us/000178177/how-to-use-windows-reliability-monitor-to-identify-software-issues">Dell's step-by-step guide</a>, and <a href="https://support.microsoft.com/en-us/windows/security/windows-security/device-performance-and-health-in-the-windows-security-app">Microsoft's separate Windows Security device-health overview</a>. The last tool is complementary, not a replacement for Reliability Monitor.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer to provide practical, accurate, accessible technology education. If you'd like to support our research and lesson development, consider a <strong>5,000-sat</strong> donation using the QR code below.</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech 5,000-satoshi donation QR code" class="wp-image-24043" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For easy scanning, open this lesson on a larger screen and scan the QR code with your Bitcoin wallet on a mobile device. Thank you for supporting independent technology education.</em></p><!-- /wp:paragraph -->
