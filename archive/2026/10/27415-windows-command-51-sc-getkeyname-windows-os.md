---
lesson_id: Windows Command #51
post_id: 27415
title: "Windows Command #51 – sc getkeyname (Windows OS)"
url: "https://bitcoinversus.tech/2026/10/30/windows-command-51-sc-getkeyname-windows-os/"
featured_media: 27414
in_story_media_count: 2
style: textbook-wiki
---

<!-- wp:paragraph --><p><strong>sc.exe getkeyname</strong> is a Windows command that looks up the internal service name associated with a service's human-readable display name. Windows services are managed by the <a href="https://bitcoinversus.tech/2026/10/10/ositc-005-windows-services-fundamentals-service-control-manager-startup-types-dependencies-services-msc-and-verification/">Service Control Manager (SCM)</a>, which distinguishes between a service's stable internal name and the label shown in administrative interfaces. This is <strong>Windows Command #51</strong>, following <a href="https://bitcoinversus.tech/2026/10/18/windows-command-50-sc-showsid-windows-os/">Command #50 — sc showsid</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Internal names and display names</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A service's <strong>service name</strong> is the identifier used by many management commands, scripts and configuration records. Its <strong>display name</strong> is a descriptive label intended for people using tools such as <code>services.msc</code>. For example, the Windows Print Spooler commonly uses the internal name <code>Spooler</code> and the display name <code>Print Spooler</code>. These are related but not interchangeable strings.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The distinction matters when a technician receives a service name from an event message or graphical interface and needs to run <a href="https://bitcoinversus.tech/2026/10/06/windows-command-34-sc-query/">sc query</a>, <a href="https://bitcoinversus.tech/2026/10/08/windows-command-38-sc-qc-windows-os/">sc qc</a> or other commands that identify services by internal name. The lookup operation is read-only and does not start, stop or reconfigure the service.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Command syntax</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Open Command Prompt or a compatible Windows shell and enter the command with the service's display name in quotation marks when it contains spaces.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>sc.exe getkeyname "Print Spooler"</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>On a system with the expected service installed, the response reports the internal service name, typically <code>Spooler</code>. The precise text and formatting can vary by Windows version and localization. If the display name is not found, verify its spelling and confirm the service exists on that computer. A remote computer can be specified with the supported <code>\\ComputerName</code> target syntax when permissions, connectivity and remote service management are configured.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>sc.exe \\SERVER01 getkeyname "Print Spooler"</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Remote queries may fail because of firewall rules, service-control access permissions, host availability or name resolution. An unsuccessful remote lookup is not proof that the target service is absent.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Using Services to confirm the result</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The Services management console displays service labels and lets administrators inspect properties. The following previously published image illustrates a Windows service administration environment. It is editorial context, not a captured result of this particular command.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":22330,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/windows-command-38-sc-qc-body.jpg" alt="Windows administrator inspecting service configuration in a management environment" class="wp-image-22330"/></figure><!-- /wp:image -->

<!-- wp:paragraph --><p>A technician can compare the display name in the graphical console with the internal service name returned by <code>sc.exe getkeyname</code>. The <a href="https://bitcoinversus.tech/2026/10/08/windows-command-39-sc-qdescription-windows-os/">sc qdescription</a> command reports a different property: the service's description, which is not necessarily the same as its display name.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>The reverse lookup</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Windows also provides <code>sc.exe getdisplayname</code>, which takes an internal service name and returns its display name. These two commands answer opposite questions.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>sc.exe getkeyname "Print Spooler"
sc.exe getdisplayname Spooler</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The first resolves a user-facing label to the internal key; the second resolves the key to its user-facing label. For automation, internal service names are generally more stable than localized display names, although scripts should still verify that the expected service exists. When working in PowerShell, specify <code>sc.exe</code> rather than relying on the bare <code>sc</code> command, which can be an alias for a different command in some PowerShell environments.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Combining service discovery with diagnostics</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Once the internal name is known, an administrator can inspect its current state and configuration without changing it.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>sc.exe query Spooler
sc.exe qc Spooler</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The <a href="https://bitcoinversus.tech/2026/10/06/windows-command-34-sc-query/">query command</a> reports service status, while <a href="https://bitcoinversus.tech/2026/10/08/windows-command-38-sc-qc-windows-os/">qc</a> provides configuration details such as start type and binary path. Other commands in this curriculum cover <a href="https://bitcoinversus.tech/2026/10/07/windows-command-35-sc-start/">starting</a>, <a href="https://bitcoinversus.tech/2026/10/08/windows-command-36-sc-stop-windows-os/">stopping</a>, <a href="https://bitcoinversus.tech/2026/10/08/windows-command-37-sc-config-windows-os/">configuring</a> and <a href="https://bitcoinversus.tech/2026/10/09/windows-command-42-sc-delete-windows-os/">deleting</a> services. Those operations have different permissions and operational risks; <code>getkeyname</code> itself is a lookup.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This existing image of Windows service management equipment illustrates the operational setting in which technicians may compare a service's identity with its configuration.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":22493,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/windows-command-42-sc-delete-body.jpg" alt="Windows service management workstation with administrative command-line tools" class="wp-image-22493"/></figure><!-- /wp:image -->

<!-- wp:heading --><h2>Troubleshooting common lookup failures</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A failed lookup can result from an incorrect display name, a service that is not installed, localization differences, an inaccessible remote computer or insufficient privileges for remote inspection. First list the relevant services using an approved local interface and confirm the exact display name. Next verify the computer target and administrative permissions. Avoid guessing a service name and immediately issuing a state-changing command; identify the service first.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>When investigating why a service fails to start, correlate its verified internal name with the Windows Event Viewer logs, its dependencies and its configured executable. See <a href="https://bitcoinversus.tech/2026/10/10/ositc-005-windows-services-fundamentals-service-control-manager-startup-types-dependencies-services-msc-and-verification/">Windows Services Fundamentals</a> for broader service troubleshooting. Related service security topics include <a href="https://bitcoinversus.tech/2026/10/14/windows-command-49-sc-sidtype-windows-os/">service SID types</a> and <a href="https://bitcoinversus.tech/2026/10/18/windows-command-50-sc-showsid-windows-os/">service SIDs</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Knowledge check</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>What does <code>getkeyname</code> return?</strong> The internal service name associated with a display name. <strong>How is <code>getdisplayname</code> different?</strong> It performs the reverse lookup. <strong>Does either command restart a service?</strong> No; both are informational queries.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>References and further reading</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Consult <a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/sc-getkeyname">Microsoft Learn: sc getkeyname</a>, <a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/sc-getdisplayname">Microsoft Learn: sc getdisplayname</a> and <a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/sc-query">Microsoft Learn: sc query</a>. Review the linked BitcoinVersus.Tech Windows command lessons for service inspection and management.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our work and help further secure the integrity of our research initiatives, please scan the QR code below to donate <strong>5,000 sats</strong> (best results on a laptop or larger screen).</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech Bitcoin donation QR code" class="wp-image-24043"/></figure><!-- /wp:image -->

<!-- wp:paragraph --><p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p><!-- /wp:paragraph -->