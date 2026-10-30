---
lesson_id: Linux Command #66
post_id: 27377
title: "Linux Command #66 – coredumpctl (Linux OS)"
url: "https://bitcoinversus.tech/2026/10/30/linux-command-66-coredumpctl-linux-os/"
featured_media: 27374
in_story_media_count: 2
style: textbook-wiki
---

<!-- wp:paragraph --><p><strong>coredumpctl</strong> is a command-line tool for inspecting application crash records collected by <a href="https://bitcoinversus.tech/2026/10/08/what-is-systemd-how-linux-starts-stops-and-watches-background-services/">systemd</a> on compatible <a href="https://bitcoinversus.tech/2026/10/11/how-linux-boots-uefi-grub-initramfs-kernel-systemd/">Linux systems</a>. When a process terminates after a fatal signal, the operating system may generate a <strong>core dump</strong>: a snapshot of the process's memory and execution state that a developer can analyze to understand the failure. The <code>coredumpctl</code> utility searches stored crash metadata, displays details and can open a debugger when the required tools and core data are available. This chapter continues the Linux command series after <a href="https://bitcoinversus.tech/2026/10/28/linux-command-65-systemd-analyze-linux-os/">Linux Command #65 — systemd-analyze</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>What a core dump contains</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A core dump can include the process's memory mappings, thread states, register contents and portions of memory at the time of failure. This makes it useful for diagnosing segmentation faults, aborts and other crashes. It can also contain passwords, private data and cryptographic material that happened to be present in process memory. Treat core files as sensitive forensic artifacts, restrict access and follow retention policy.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>On systems using <code>systemd-coredump</code>, crash metadata may be stored in the <a href="https://bitcoinversus.tech/2026/09/26/linux-command-28-troubleshoot-system-logs-with-journalctl/">systemd journal</a>, while core images may be stored externally or not retained, depending on configuration. A record visible in <code>coredumpctl list</code> does not guarantee that a full core image is still available.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Listing crash records</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Start with the read-only command below. The output varies by system, privileges, retention settings and crash history.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>coredumpctl list</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>A typical listing may include the crash time, process ID, user ID, signal, executable and a storage-status column. If the command returns no entries, it may mean that no qualifying crashes were retained, the collection service is disabled, or the current account lacks permission to inspect records. It does not prove that no process has ever crashed.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The following previously published terminal photograph shows a Linux shell environment, where an administrator can run diagnostic commands and compare results with service logs.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":23290,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bash-gnome-terminal-wikimedia.png" alt="Bash shell running inside a GNOME Terminal window" class="wp-image-23290"/></figure><!-- /wp:image -->

<!-- wp:heading --><h2>Inspecting one crash</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Use <code>info</code> to inspect a matching record. When several crashes exist, select a specific process ID, executable path or other supported match so the investigation remains reproducible.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>coredumpctl info
coredumpctl info /usr/bin/example-app</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The details may include the signal number, command line, executable, process identifiers, timestamp and available backtrace. A backtrace shows the sequence of function calls associated with the failure, but missing symbols or optimized binaries can limit its usefulness. A crash location is not necessarily the original cause: memory corruption may occur earlier than the instruction that finally fails.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Opening a debugger</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>If the required debugger and core data are available, <code>coredumpctl debug</code> can launch an interactive debugging session, commonly with GDB. Running a debugger is different from restarting the crashed service: it analyzes preserved state and does not automatically repair the application.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>coredumpctl debug /usr/bin/example-app</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>Inside GDB, common investigative commands include <code>bt</code> for a stack backtrace, <code>info threads</code> for thread enumeration and <code>thread apply all bt</code> for backtraces across threads. Meaningful source-level analysis often requires matching debug symbols and the exact executable build. On production systems, obtain approval before exporting or sharing core images because they can expose sensitive process memory.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Exporting a core image</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>For authorized offline analysis, <code>dump</code> can write a retained core image to a chosen file. Use a protected directory and restrictive permissions; confirm that the target filesystem has enough space.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>umask 077
coredumpctl dump /usr/bin/example-app --output=./example-app.core</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>A core dump can be large, and the command will fail if the selected record has no accessible core image. Avoid writing it to a shared directory, public repository or unencrypted diagnostic upload. When exporting from a server, use an approved secure transfer method and delete temporary copies according to policy.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Connecting a crash to system logs</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A core record is only one piece of evidence. Compare its timestamp with <a href="https://bitcoinversus.tech/2026/09/26/linux-command-28-troubleshoot-system-logs-with-journalctl/">journalctl</a> messages, <a href="https://bitcoinversus.tech/2026/10/28/linux-command-65-systemd-analyze-linux-os/">systemd-analyze</a> findings and <a href="https://bitcoinversus.tech/2026/10/08/what-is-systemd-how-linux-starts-stops-and-watches-background-services/">service unit</a> status. For a service called <code>example.service</code>, an administrator might first review the service's recent messages.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>systemctl status example.service
journalctl -u example.service --since '1 hour ago'</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The commands above inspect service state and journal entries; they do not change configuration. If the service is repeatedly crashing, investigate its inputs, resource limits, dependencies, recent deployments and exact exit signal before attempting a restart. Related <a href="https://bitcoinversus.tech/2026/10/08/what-are-fork-and-exec-how-linux-creates-and-launches-a-new-program/">process creation</a> concepts explain how Linux launches executables and manages process lifecycles.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The next existing editorial image shows a Linux terminal and system configuration environment, providing context for service investigation and controlled administrative work.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":23525,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux-command-53-terminal-root.png" alt="Linux terminal session showing administrative command-line work" class="wp-image-23525"/></figure><!-- /wp:image -->

<!-- wp:heading --><h2>Storage and configuration</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Crash collection is governed by the system's <code>systemd-coredump</code> configuration, resource limits and security policy. Administrators can consult the installed <code>coredump.conf(5)</code> manual to understand settings such as storage policy and size limits. System behavior also depends on the distribution, systemd version, kernel settings and whether the relevant components are installed.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Do not enable unrestricted core collection on a production server merely to collect more evidence. Large dumps can exhaust storage, while persistent core images can create confidentiality risks. Prefer a narrowly scoped diagnostic plan with documented retention and access controls.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Practical troubleshooting example</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Suppose a service exits after receiving <code>SIGSEGV</code>, commonly associated with invalid memory access. First inspect <code>systemctl status</code> and the journal for the failure time. Next use <code>coredumpctl list</code> to find a matching executable and timestamp, then <code>coredumpctl info</code> to identify the signal and available backtrace. If the core image is retained and analysis is authorized, open it with <code>coredumpctl debug</code> and matching symbols. Finally, document the evidence and reproduce the defect in a controlled environment before changing production code.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Knowledge check</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>What is the difference between a core dump and a journal entry?</strong> A core dump preserves selected process execution state and memory, while a journal entry records logged event data. <strong>Does a listed crash guarantee that a core file exists?</strong> No; retention and access policies determine availability. <strong>Why are core dumps sensitive?</strong> They may contain credentials and other private process data.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>References and further reading</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Primary documentation: <a href="https://www.freedesktop.org/software/systemd/man/latest/coredumpctl.html">coredumpctl(1)</a>, <a href="https://www.freedesktop.org/software/systemd/man/latest/systemd-coredump.html">systemd-coredump(8)</a> and <a href="https://www.freedesktop.org/software/systemd/man/latest/coredump.conf.html">coredump.conf(5)</a>. Continue with <a href="https://bitcoinversus.tech/2026/10/28/linux-command-65-systemd-analyze-linux-os/">systemd-analyze</a>, <a href="https://bitcoinversus.tech/2026/09/26/linux-command-28-troubleshoot-system-logs-with-journalctl/">journalctl</a> and the <a href="https://bitcoinversus.tech/2026/10/11/how-linux-boots-uefi-grub-initramfs-kernel-systemd/">Linux boot process</a>.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our work and help further secure the integrity of our research initiatives, scan the QR code below to donate <strong>5,000 sats</strong> (best results on a laptop or larger screen).</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" alt="BitcoinVersus.Tech Bitcoin donation QR code" class="wp-image-24043"/></figure><!-- /wp:image -->

<!-- wp:paragraph --><p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p><!-- /wp:paragraph -->