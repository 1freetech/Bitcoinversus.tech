---
title: "Windows Command #41 – sc create (Windows OS)"
status: published
wordpress_post_id: 22420
published: "2026-10-08T23:25:41"
live_url: "https://bitcoinversus.tech/2026/10/08/windows-command-41-sc-create-windows-os/"
series: "Windows Command"
subject: windows
lesson_number: "041"
featured_media_id: 22417
featured_image_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/windows-command-41-sc-create-cover.jpg"
body_media_id: 22418
youtube_1: "https://www.youtube.com/watch?v=8HXoXo-8qUE"
social_1: "https://www.reddit.com/r/sysadmin/comments/vudv0g/"
no_text_boxes: true
---

<!-- wp:paragraph -->
<p><strong><code>sc.exe create</code> registers a new Windows service with the Service Control Manager.</strong> It creates the service entry and stores configuration such as the service name, executable path, startup mode, account, dependencies, and display name. It follows <a href="https://bitcoinversus.tech/2026/10/08/windows-command-40-sc-description-windows-os/"><strong>Windows Command #40 — <code>sc description</code></strong></a>, which changes the descriptive text of an already registered service.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22418,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/windows-command-41-sc-create-body.jpg?w=1024" alt="Computer screen showing programming code in a developer workspace." class="wp-image-22418" /><figcaption class="wp-element-caption"><em>Creating a Windows service is a systems-administration task that connects an executable to the Service Control Manager. Photo: Unsplash.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Basic Syntax</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe create ServiceName binPath= "C:\Path\To\Service.exe"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Microsoft documents <a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/sc-create"><strong><code>sc.exe create</code></strong></a> as creating a service subkey and entries in both the registry and the Service Control Manager database. The <code>binPath=</code> parameter is required because Windows needs to know which service binary should be launched.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Space After the Equal Sign Matters</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The SC command-line syntax is unusual: the option name includes the equal sign, and Microsoft specifically requires a space between the option and its value. In other words, write <code>binPath= "C:\Services\Example.exe"</code>, not <code>binPath="C:\Services\Example.exe"</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe create ExampleService binPath= "C:\Services\ExampleService.exe"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>A successful registration normally returns <code>[SC] CreateService SUCCESS</code>. That message means Windows created the service entry; it does not prove the executable will successfully run as a service.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=8HXoXo-8qUE","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=8HXoXo-8qUE
</div><figcaption class="wp-element-caption"><em>A direct walkthrough of using <code>sc.exe</code> to register an executable as a Windows service and then verify and manage the new service.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Not Every EXE Is a Windows Service</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is the most important limitation in the lesson. <code>sc.exe create</code> can register a binary path, but an ordinary desktop application does not automatically become a proper Windows service. The executable must be designed to communicate with the Service Control Manager and respond to service-control requests. Microsoft’s <a href="https://learn.microsoft.com/en-us/dotnet/core/extensions/windows-service"><strong>.NET Windows Service guidance</strong></a> shows this explicitly by building a worker application that supports the Windows service model before registering it with <code>sc.exe</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If a normal application is registered as a service without implementing the required service behavior, creation can succeed while startup later fails. A common symptom is Error 1053, where Windows reports that the service did not respond to the start or control request in time.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/sysadmin/comments/vudv0g/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/sysadmin/comments/vudv0g/
</div><figcaption class="wp-element-caption"><em>A directly relevant sysadmin discussion explains that <code>sc.exe create</code> can register a service, but the executable still has to be capable of operating as a Windows service.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Choose the Startup Type</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The <code>start=</code> option controls how Windows is configured to start the service. Microsoft documents values including <code>auto</code>, <code>demand</code>, <code>disabled</code>, and <code>delayed-auto</code>. If you omit the setting, the documented default for ordinary services is manual or demand start.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe create ExampleService binPath= "C:\Services\ExampleService.exe" start= auto</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Do not choose automatic startup simply because it is available. A service that starts at boot becomes part of the operating system’s startup workload. Use the mode required by the application and operational design.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Set a Friendly Display Name</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe create ExampleService binPath= "C:\Services\ExampleService.exe" displayName= "Example Background Service"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The internal service name is what administrators and scripts use with SC commands. The display name is the friendlier label shown in interfaces such as <code>services.msc</code>. Keeping the two concepts separate makes service troubleshooting much easier.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Verify Immediately After Creation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>After creating a service, inspect its stored configuration before attempting to start it. <a href="https://bitcoinversus.tech/2026/10/08/windows-command-38-sc-qc-windows-os/"><code>sc.exe qc</code></a> is the natural verification command because it displays the saved binary path, startup type, service account, dependencies, and other configuration.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe create ExampleService binPath= "C:\Services\ExampleService.exe" start= demand
sc.exe qc ExampleService
sc.exe qdescription ExampleService
sc.exe query ExampleService</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The sequence checks configuration, description, and current state separately. A newly created demand-start service will normally exist without already being in the running state.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Start Only After the Configuration Looks Correct</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe start ExampleService
sc.exe query ExampleService</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a href="https://bitcoinversus.tech/2026/10/07/windows-command-35-sc-start/"><code>sc start</code></a> asks the Service Control Manager to start the service. If startup fails, inspect the service configuration, application logs, and Windows Event Viewer before repeatedly retrying. A correct <code>sc create</code> command cannot compensate for a service binary that is missing, misconfigured, or not designed to run as a service.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Add a Description Separately</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>After the service exists, use <a href="https://bitcoinversus.tech/2026/10/08/windows-command-40-sc-description-windows-os/"><code>sc.exe description</code></a> to document its purpose. Keeping creation and description as separate commands also makes deployment scripts easier to read and troubleshoot.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe create ExampleService binPath= "C:\Services\ExampleService.exe" start= demand
sc.exe description ExampleService "Background service used by the lab application."
sc.exe qdescription ExampleService</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Remote Service Creation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>SC supports a remote server name in UNC form. Remote service creation is an administrative change and requires the necessary permissions and network access to the remote Service Control Manager.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe \\SERVER01 create ExampleService binPath= "C:\Services\ExampleService.exe"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Remember that the binary path is interpreted on the target computer. A path that exists on your workstation is not automatically present on <code>SERVER01</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Use sc.exe in PowerShell</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In Windows PowerShell, use <code>sc.exe</code> explicitly rather than only <code>sc</code>. The short name can resolve to the PowerShell <code>Set-Content</code> alias. Writing the executable name removes that ambiguity.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Quick Lab</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>Use a Windows lab VM and a genuine test service executable designed for the Windows service model.</li><li>Open an elevated Command Prompt or PowerShell window.</li><li>Run <code>sc.exe create LabService binPath= "C:\Lab\LabService.exe" start= demand</code>.</li><li>Run <code>sc.exe qc LabService</code> and verify the binary path and startup type.</li><li>Use <code>sc.exe description LabService "Temporary service used for command practice."</code>.</li><li>Run <code>sc.exe qdescription LabService</code>.</li><li>Start the service only if the executable is known to be a valid service and the lab calls for it.</li><li>Remove the lab service afterward using the appropriate deletion procedure rather than leaving unused service entries behind.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Knowledge Check + Answers</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li><strong>What does <code>sc.exe create</code> do?</strong> It registers a new Windows service with the Service Control Manager and stores its configuration.</li><li><strong>Which parameter is required?</strong> <code>binPath=</code>, because Windows needs the service binary path.</li><li><strong>Why is the spacing unusual?</strong> SC requires the equal sign as part of the option name and a space before the value.</li><li><strong>Can any EXE be turned into a proper service just by registering it?</strong> No. The executable must support the Windows service model or use an appropriate service-hosting approach.</li><li><strong>Which command should verify the new service configuration?</strong> <code>sc.exe qc</code>.</li><li><strong>Does CreateService success mean the service will definitely start?</strong> No. It only confirms registration succeeded.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Previous Windows Commands</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><a href="https://bitcoinversus.tech/2026/10/06/windows-command-34-sc-query/"><strong>#34 — <code>sc query</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/07/windows-command-35-sc-start/"><strong>#35 — <code>sc start</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/08/windows-command-36-sc-stop-windows-os/"><strong>#36 — <code>sc stop</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/08/windows-command-37-sc-config-windows-os/"><strong>#37 — <code>sc config</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/08/windows-command-38-sc-qc-windows-os/"><strong>#38 — <code>sc qc</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/08/windows-command-39-sc-qdescription-windows-os/"><strong>#39 — <code>sc qdescription</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/08/windows-command-40-sc-description-windows-os/"><strong>#40 — <code>sc description</code></strong></a></li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The featured image and body image are separate. The lesson uses only normal responsive Gutenberg headings, paragraphs, lists, images, embeds, and code blocks for real commands. There are no decorative text boxes, cards, callouts, shaded panels, or fixed-width prose containers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech is not a financial advisor. Content is provided for informational and educational purposes.</p>
<!-- /wp:paragraph -->