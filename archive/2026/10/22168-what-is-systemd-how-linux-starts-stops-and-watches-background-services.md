---
post_id: 22168
title: "What Is systemd? How Linux Starts, Stops, and Watches Background Services"
live_url: "https://bitcoinversus.tech/2026/10/08/what-is-systemd-how-linux-starts-stops-and-watches-background-services/"
featured_media_id: 22164
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/systemd-evergreen-cover-1200x630-1.jpg"
status: published
---

<!-- wp:paragraph -->
<p>On many modern <a href="https://bitcoinversus.tech/2024/11/14/top-linux-distributions-and-their-key-features/"><strong>Linux distributions</strong></a>, one program starts before almost everything else in userspace and then spends the rest of the boot managing what runs: <strong>systemd</strong>. In its system-manager role, systemd normally runs as <strong>PID 1</strong>, starts services, tracks processes, orders dependencies, activates sockets and timers, records service state, and helps administrators stop or restart software cleanly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The easiest mental model is this: the <a href="https://bitcoinversus.tech/2026/03/30/the-kernel/"><strong>Linux kernel</strong></a> starts the first userspace process; on a systemd-based machine that process is systemd. From there, systemd reads configuration called <strong>units</strong> and turns the machine from “kernel is running” into a usable server, desktop, appliance, or embedded system. The systemd project describes itself as a system and service manager that runs as PID 1 and starts the rest of the system.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=Kzpm-rGAXos","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=Kzpm-rGAXos
</div><figcaption class="wp-element-caption"><em>Learn Linux TV walks through systemd, units, service files, start/stop/restart behavior, enabling services at boot, and daemon-reload.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">systemd, a Service, and a Daemon Are Not the Same Thing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A <strong>daemon</strong> is simply a long-running background process. SSH servers, web servers, database servers, logging processes, and network managers are common examples. A <strong>service</strong> is the managed job or workload that a service manager controls. systemd is the <strong>manager</strong> that knows how a service should start, stop, restart, log, depend on other services, and behave when it fails.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction becomes clearer if you already understand <a href="https://bitcoinversus.tech/2026/10/08/what-is-context-switch-cpu-process-thread-scheduler/"><strong>processes and threads</strong></a>. A process is an executing program with its own process ID and resources. systemd does not replace the process model; it supervises groups of processes and gives them declared operating rules. Tools such as <a href="https://bitcoinversus.tech/2025/05/06/command-14-top-linux-os/"><strong>top</strong></a> show the processes consuming CPU and memory, while systemctl shows the higher-level service state systemd is managing.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"custom"} -->
<figure class="wp-block-image size-large"><a href="https://unix.stackexchange.com/questions/114476/what-sets-systemd-apart-from-other-init-systems"><img src="https://i.sstatic.net/yz400.png" alt="Systemd architecture diagram showing utilities, targets, daemons, core units, libraries, and Linux kernel components." /></a><figcaption class="wp-element-caption"><em>A systemd architecture overview shows why systemd is more than one daemon: it includes service control, logging, targets, sockets, timers, libraries, and kernel-facing resource management. Source: Unix &amp; Linux Stack Exchange discussion.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why PID 1 Matters</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Every Linux process has a process ID. PID 1 is special because it is the first userspace process started during boot and becomes the ancestor or supervisor context for the rest of userspace. On a typical systemd machine, running <code>ps -p 1 -o comm=</code> returns <code>systemd</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>ps -p 1 -o pid,comm,args=

# Typical output:
#   PID COMMAND  COMMAND
#     1 systemd  /sbin/init</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The location of <code>/sbin/init</code> also connects systemd to the Linux filesystem hierarchy. BitcoinVersus.Tech has covered <a href="https://bitcoinversus.tech/2025/09/11/file-system-directory-3-sbin-linux-os/"><strong>/sbin</strong></a>, <a href="https://bitcoinversus.tech/2025/06/15/file-system-directory-10-usr-linux-os/"><strong>/usr</strong></a>, and <a href="https://bitcoinversus.tech/2025/05/26/file-system-directory-4-etc-linux-os/"><strong>/etc</strong></a>; systemd touches all three because binaries, vendor unit files, and local administrator configuration are intentionally separated.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Units Are systemd’s Building Blocks</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>systemd manages objects called <strong>units</strong>. The most familiar type is a <code>.service</code> unit, but systemd also understands <code>.socket</code>, <code>.timer</code>, <code>.target</code>, <code>.mount</code>, <code>.automount</code>, <code>.path</code>, <code>.slice</code>, <code>.scope</code>, and other unit types. The official systemd documentation describes service units as the objects that start and control daemons and the processes that belong to them.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>.service</strong> — starts and supervises a service or daemon.</li><li><strong>.socket</strong> — represents an IPC or network socket and can activate a service when traffic arrives.</li><li><strong>.timer</strong> — schedules activation by time, similar in purpose to cron; see BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/07/linux-systemd-timers-safer-inspectable-alternative-cron/"><strong>systemd timers explainer</strong></a>.</li><li><strong>.target</strong> — groups units into a desired system state such as multi-user or graphical operation.</li><li><strong>.mount</strong> — represents a filesystem mount, connecting directly to Linux concepts covered in the <a href="https://bitcoinversus.tech/2025/05/13/command-18-mount-linux-os/"><strong>mount command</strong></a>.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>A unit file is plain-text configuration. Vendor-provided units commonly live under locations such as <code>/usr/lib/systemd/system/</code>, while local administrator units and overrides commonly live under <code>/etc/systemd/system/</code>. The exact vendor directory can vary by distribution.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>[Unit]
Description=Example Service
After=network-online.target

[Service]
ExecStart=/usr/local/bin/example-app
Restart=on-failure

[Install]
WantedBy=multi-user.target</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">systemctl Is the Control Panel</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>systemctl</strong> is the command-line interface most administrators use to talk to systemd. It can inspect units, start and stop services, restart them, enable or disable boot-time activation, reload unit definitions, and report failures. Commands that only inspect state often work as a normal user; changing system-wide services usually requires privileges, commonly through <a href="https://bitcoinversus.tech/2024/11/19/command-1-sudo-linux-os/"><strong>sudo</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>systemctl status sshd
sudo systemctl start sshd
sudo systemctl stop sshd
sudo systemctl restart sshd
sudo systemctl enable sshd
sudo systemctl disable sshd
systemctl is-active sshd
systemctl is-enabled sshd</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>One of the most important beginner distinctions is <strong>start versus enable</strong>. <code>start</code> changes what is running <em>now</em>. <code>enable</code> changes whether a unit is wired into the boot dependency graph so it can start automatically later. A service can therefore be running but disabled, or enabled but currently stopped.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=fzOceeJB5vw","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=fzOceeJB5vw
</div><figcaption class="wp-element-caption"><em>tutoriaLinux demonstrates the practical systemctl commands administrators use for unit state, enable/disable behavior, status, reload, and process control.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">daemon-reload Does Not Restart Your Service</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>After changing or adding a unit file, administrators commonly run <code>sudo systemctl daemon-reload</code>. Despite the name, this does <strong>not</strong> mean “restart all daemons.” It tells the systemd manager to reload its unit-file configuration. If the actual service also needs to restart to pick up application changes, that is a separate operation.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo systemctl daemon-reload
sudo systemctl restart example.service</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This separation is useful because systemd configuration and application runtime state are different things. An administrator can safely update a unit definition, reload systemd’s view of it, inspect the resulting configuration, and decide when the workload itself should restart.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">journalctl Answers “Why Did It Fail?”</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>systemd is closely integrated with the system journal. When a service fails, <code>systemctl status</code> provides a quick summary and recent log lines, while <a href="https://bitcoinversus.tech/2026/09/26/linux-command-28-troubleshoot-system-logs-with-journalctl/"><strong>journalctl</strong></a> provides deeper history. This is one reason service management and troubleshooting feel tightly connected on a systemd machine.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>systemctl status nginx.service
journalctl -u nginx.service
journalctl -u nginx.service -f
journalctl -u nginx.service --since today</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The <code>-u</code> option filters by unit, and <code>-f</code> follows new log messages live. That workflow is especially useful on servers where a failed web server, SSH daemon, database, network service, or monitoring agent may need immediate diagnosis.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Dependencies Tell systemd What Must Happen First</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Services rarely live alone. A web application may need networking, storage, a database, secrets, or another socket before it can function. systemd unit directives such as <code>Requires=</code>, <code>Wants=</code>, <code>After=</code>, and <code>Before=</code> let administrators describe those relationships instead of relying on one giant sequential boot script.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is also why systemd can start independent work in parallel. If two services do not depend on each other, they do not necessarily need to wait in line. The result is a dependency graph rather than a single list of shell commands.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Sockets, Ports, and On-Demand Activation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>systemd can own a socket before the final service process starts. When traffic arrives, the corresponding service can be activated on demand. That connects directly to the networking idea of a <a href="https://bitcoinversus.tech/2026/10/08/what-is-network-socket-ip-address-port-tcp-udp/"><strong>network socket</strong></a>: an endpoint identified through an address, protocol, and port can be managed independently from the application process that eventually handles the connection.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Socket activation is not required for every service, but it demonstrates why systemd is broader than “the thing that starts programs during boot.” It can coordinate when programs appear based on events, sockets, files, devices, timers, and dependencies.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://bsky.app/profile/jeffgeerling.com/post/3lnv3xohq7c2b","type":"rich","providerNameSlug":"bluesky","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-bluesky wp-block-embed-bluesky"><div class="wp-block-embed__wrapper">
https://bsky.app/profile/jeffgeerling.com/post/3lnv3xohq7c2b
</div><figcaption class="wp-element-caption"><em>Jeff Geerling points to systemd-analyze as a practical Linux tool for understanding boot performance, another example of systemd’s broader administration toolkit.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">systemd Can Also Limit and Isolate Services</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>systemd tracks service processes using Linux control groups, commonly called <strong>cgroups</strong>. That lets the service manager keep related processes together and apply resource or isolation rules. A unit can constrain CPU, memory, filesystems, privileges, namespaces, devices, and other execution properties depending on the system and configuration.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This matters in production because “start this binary” is only the beginning of service management. Operators also want restart policies, timeouts, resource limits, least privilege, logging, dependencies, health visibility, and a reliable way to stop every process that belongs to the service.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Practical Five-Command Troubleshooting Loop</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When a Linux service is not behaving, a simple sequence solves a surprising number of problems:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>systemctl status example.service
systemctl cat example.service
systemctl show example.service
journalctl -u example.service -b
systemctl list-dependencies example.service</code></pre>
<!-- /wp:code -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li><strong>Status:</strong> Is it active, inactive, failed, or still starting?</li><li><strong>Cat:</strong> What unit configuration is systemd actually loading?</li><li><strong>Show:</strong> What resolved properties and runtime state does systemd see?</li><li><strong>Journal:</strong> What happened during this boot?</li><li><strong>Dependencies:</strong> What else must be available?</li></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>If the service uses networking, the next checks may involve <a href="https://bitcoinversus.tech/2024/12/02/how-to-operate-snmp-protocol-on-a-switch-linux-os-edition/"><strong>network monitoring</strong></a>, sockets, DNS, or clock synchronization. BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/08/networking-what-is-ntp-network-time-protocol-clock-synchronization/"><strong>NTP explainer</strong></a> is a good example of another background infrastructure function that often runs under a service manager.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Bottom Line</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>systemd is easiest to understand as the control plane for Linux userspace services. The kernel gets the machine running; systemd, commonly as PID 1, organizes how userspace comes alive and stays manageable. Units describe the work, systemctl controls it, journalctl helps explain it, targets group desired states, timers schedule it, sockets can activate it, dependencies order it, and cgroups help systemd keep track of the processes involved.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For beginners, the next rabbit hole is <strong>what exactly happens between typing <code>systemctl start nginx</code> and the kernel creating the nginx process?</strong> That path leads naturally into <code>fork</code>/<code>exec</code>, environment variables, permissions, signals, cgroups, namespaces, and the <a href="https://bitcoinversus.tech/2026/10/08/what-is-file-descriptor-linux-fd-files-sockets-pipes-devices/"><strong>file descriptors</strong></a> a service inherits or opens after it starts.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Primary technical references: the <a href="https://systemd.io/"><strong>systemd project documentation</strong></a> and the official <a href="https://www.freedesktop.org/software/systemd/man/latest/systemctl.html"><strong>systemctl manual</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Editor’s Note</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Linux does not require every distribution or environment to use systemd. Other init and service-management systems exist, and containers may use different supervisors. Commands and unit-file locations can also vary by distribution. This explainer describes the common systemd-based Linux model.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial and technology subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->