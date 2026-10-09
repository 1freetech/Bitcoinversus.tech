---
title: "Windows Command #40 – sc description (Windows OS)"
status: published
wordpress_post_id: 22409
published: "2026-10-08T23:08:12"
live_url: "https://bitcoinversus.tech/2026/10/08/windows-command-40-sc-description-windows-os/"
series: "Windows Command"
subject: windows
lesson_number: "040"
featured_media_id: 22407
featured_image_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/windows-command-40-sc-description-cover.jpg"
body_media_id: 22408
youtube_1: "https://www.youtube.com/watch?v=ljUm1djUngI"
social_1: "https://www.reddit.com/r/windows/comments/yz5s0p/"
no_text_boxes: true
---

<!-- wp:paragraph -->
<p><strong><code>sc.exe description</code> sets or changes the description string stored for a Windows service.</strong> It is the write-side partner to <a href="https://bitcoinversus.tech/2026/10/08/windows-command-39-sc-qdescription-windows-os/"><strong>Windows Command #39 — <code>sc qdescription</code></strong></a>. The previous command reads the current description; this command changes it.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22408,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/windows-command-40-sc-description-body.jpg?w=1024" alt="Computer screen and keyboard in a programming workspace." class="wp-image-22408" /><figcaption class="wp-element-caption"><em>Windows service administration often combines command-line inspection with configuration changes. Photo: Unsplash.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Basic Syntax</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe description ServiceName "Description text"</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Microsoft’s current <a href="https://learn.microsoft.com/en-us/windows/win32/services/configuring-a-service-using-sc"><strong>Sc.exe configuration documentation</strong></a> still lists <code>description</code> as a supported Service Control Manager command. The command expects the internal service name rather than assuming the friendly display name is identical.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe description ExampleService "Background service used by the lab application."</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This changes service metadata. It does not start the service, stop it, alter its startup type, or replace its executable path. Those are separate operations handled by commands such as <a href="https://bitcoinversus.tech/2026/10/08/windows-command-37-sc-config-windows-os/"><code>sc config</code></a>, <a href="https://bitcoinversus.tech/2026/10/07/windows-command-35-sc-start/"><code>sc start</code></a>, and <a href="https://bitcoinversus.tech/2026/10/08/windows-command-36-sc-stop-windows-os/"><code>sc stop</code></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=ljUm1djUngI","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=ljUm1djUngI
</div><figcaption class="wp-element-caption"><em>A Windows services overview covering service management through graphical tools, Command Prompt, and PowerShell.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Read Before You Write</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A safe workflow is to inspect the existing description before changing it. Use <a href="https://bitcoinversus.tech/2026/10/08/windows-command-39-sc-qdescription-windows-os/"><code>sc.exe qdescription</code></a> first, record the current value, make the approved change, and then query it again.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe qdescription ExampleService
sc.exe description ExampleService "Background service used by the lab application."
sc.exe qdescription ExampleService</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This read-change-read pattern is useful because it gives you a baseline and immediate verification. It also makes documentation and rollback easier if the description needs to be restored later.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Service Name vs. Display Name</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Windows services can have an internal service name and a friendlier display name. <code>sc.exe</code> expects the service name for commands such as <code>description</code>. If you are uncertain which identifier to use, inspect the service first with <a href="https://bitcoinversus.tech/2026/10/06/windows-command-34-sc-query/"><code>sc query</code></a> or use the appropriate SC name-mapping command before making a configuration change.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Common Deployment Pattern</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Custom services are often created first and described second. A long-running Stack Overflow discussion on <a href="https://stackoverflow.com/questions/29702700/sc-exe-how-to-set-up-the-description-for-the-windows-service"><strong>setting a Windows service description with <code>sc.exe</code></strong></a> shows the same practical pattern: create the service, then run a separate <code>sc description</code> command to populate the description field.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe create ExampleService binPath= "C:\Services\ExampleService.exe"
sc.exe description ExampleService "Background service used by the lab application."
sc.exe qdescription ExampleService</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Do this only with a real service executable and only on systems you are authorized to administer. Creating a service is a separate administrative action from changing its description.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Remote Computer Syntax</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>SC can target a remote Windows computer by placing the UNC server name immediately after <code>sc.exe</code>. Permissions, firewall policy, and remote service-management access still determine whether the command succeeds.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe \\SERVER01 description ExampleService "Updated service description"
sc.exe \\SERVER01 qdescription ExampleService</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Remote configuration should be treated as a production change. Verify the target computer and service name before pressing Enter, especially when similar service names exist on multiple servers.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/windows/comments/yz5s0p/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/windows/comments/yz5s0p/
</div><figcaption class="wp-element-caption"><em>A Windows community overview of service configuration, dependencies, recovery settings, and the Service Control Manager.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Use sc.exe in PowerShell</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In Windows PowerShell, write <code>sc.exe</code> explicitly. The short name <code>sc</code> can resolve to the PowerShell <code>Set-Content</code> alias instead of the Windows Service Control executable. Using the full executable name makes the command unambiguous in both Command Prompt and PowerShell documentation.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What This Command Does Not Change</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>Running state:</strong> use <code>sc query</code>, <code>sc start</code>, or <code>sc stop</code>.</li><li><strong>Startup type:</strong> use <a href="https://bitcoinversus.tech/2026/10/08/windows-command-37-sc-config-windows-os/"><code>sc config</code></a>.</li><li><strong>Binary path and service account:</strong> inspect with <a href="https://bitcoinversus.tech/2026/10/08/windows-command-38-sc-qc-windows-os/"><code>sc qc</code></a> and change only through an approved configuration workflow.</li><li><strong>Description readback:</strong> use <a href="https://bitcoinversus.tech/2026/10/08/windows-command-39-sc-qdescription-windows-os/"><code>sc qdescription</code></a>.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Quick Lab</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>Use a Windows lab machine and a noncritical test service that you are authorized to modify.</li><li>Run <code>sc.exe qdescription ServiceName</code> and save the original description.</li><li>Run <code>sc.exe description ServiceName "Temporary lab description"</code>.</li><li>Run <code>sc.exe qdescription ServiceName</code> again.</li><li>Open <code>services.msc</code> and confirm the description field matches the change.</li><li>Restore the original description when the lab is complete.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Knowledge Check + Answers</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li><strong>What does <code>sc.exe description</code> change?</strong> The stored description string for a Windows service.</li><li><strong>Which command reads the description without changing it?</strong> <code>sc.exe qdescription</code>.</li><li><strong>Does changing the description restart the service?</strong> No.</li><li><strong>Which identifier should you normally use?</strong> The internal service name.</li><li><strong>Why use <code>sc.exe</code> rather than only <code>sc</code> in PowerShell?</strong> To avoid ambiguity with the <code>Set-Content</code> alias.</li><li><strong>What is the safest sequence?</strong> Query the old value, make the approved change, and query again to verify.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Previous Windows Commands</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><a href="https://bitcoinversus.tech/2026/10/06/windows-command-34-sc-query/"><strong>#34 — <code>sc query</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/07/windows-command-35-sc-start/"><strong>#35 — <code>sc start</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/08/windows-command-36-sc-stop-windows-os/"><strong>#36 — <code>sc stop</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/08/windows-command-37-sc-config-windows-os/"><strong>#37 — <code>sc config</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/08/windows-command-38-sc-qc-windows-os/"><strong>#38 — <code>sc qc</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/08/windows-command-39-sc-qdescription-windows-os/"><strong>#39 — <code>sc qdescription</code></strong></a></li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The featured image and body image are separate. This lesson uses standard responsive Gutenberg headings, paragraphs, lists, images, embeds, and code blocks only for actual commands. No ordinary prose is placed inside decorative text boxes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech is not a financial advisor. Content is provided for informational and educational purposes.</p>
<!-- /wp:paragraph -->