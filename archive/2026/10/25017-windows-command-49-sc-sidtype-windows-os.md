---
post_id: 25017
title: "Windows Command #49 – sc sidtype (Windows OS)"
live_url: "https://bitcoinversus.tech/2026/10/14/windows-command-49-sc-sidtype-windows-os/"
slug: "windows-command-49-sc-sidtype-windows-os"
featured_media_id: 25008
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/windows-command-49-sc-sidtype-cover-1200x630-1.jpg"
status: publish
---

<!-- wp:paragraph -->
<p><strong><code>sc.exe sidtype</code> changes the Service SID type assigned to a Windows service.</strong> It is the write-side companion to <a href="https://bitcoinversus.tech/2026/10/13/windows-command-48-sc-qsidtype-windows-os/"><strong>Windows Command #48 – sc qsidtype</strong></a>. Where <code>qsidtype</code> inspects a service, <code>sidtype</code> changes how Windows places that service-specific identity into the service process token.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is a security-sensitive command. A Service SID can let administrators grant access to one specific Windows service instead of broadly granting access to a shared service account such as LocalSystem. But changing a SID type without understanding the service’s ACLs, hosting model, and resource dependencies can break the service. Treat <code>sc.exe sidtype</code> as a configuration command, not a casual troubleshooting toggle.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=9wQm6jeWWgg","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=9wQm6jeWWgg
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Attack Detect Defend explains why Windows services and the Service Control Manager are security-sensitive components and why service configuration must be handled carefully.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What You’ll Learn</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Explain what <code>sc.exe sidtype</code> changes.</li><li>Configure <code>NONE</code>, <code>UNRESTRICTED</code>, and <code>RESTRICTED</code> Service SID types.</li><li>Understand why <code>UNRESTRICTED</code> can support service-specific ACLs.</li><li>Understand why <code>RESTRICTED</code> changes the token more aggressively.</li><li>Recognize the shared-process restriction rule.</li><li>Verify changes with <code>qsidtype</code> and <code>showsid</code>.</li><li>Use a safe test-and-rollback workflow before changing production services.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Start With the Service Control Manager</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Windows services are managed by the Service Control Manager, or SCM. Microsoft documents <code>Sc.exe</code> as a command-line interface that can query or modify the SCM database. That is why commands such as <code>query</code>, <code>config</code>, <code>privs</code>, <code>qsidtype</code>, <code>showsid</code>, and <code>sidtype</code> all belong to the same family.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you need a broader foundation first, review <a href="https://bitcoinversus.tech/2026/10/10/ositc-005-windows-services-fundamentals-service-control-manager-startup-types-dependencies-services-msc-and-verification/"><strong>OSITC.005: Windows Services Fundamentals</strong></a>. The important idea for this lesson is that the SCM stores service configuration and controls how Windows starts and manages service processes.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Basic Syntax</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The practical form is:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe sidtype SERVICE_NAME none
sc.exe sidtype SERVICE_NAME unrestricted
sc.exe sidtype SERVICE_NAME restricted</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Use the service’s short service name, not merely the friendly display name shown in the Services console. Microsoft’s SC documentation supports both local and remote service configuration, with a remote computer specified before the command in UNC form.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In PowerShell, write <code>sc.exe</code> explicitly. That avoids confusion with shells or profiles where <code>sc</code> may resolve to something other than the Windows Service Control executable.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">NONE: Do Not Add the Service SID</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>NONE</code> configures the service so its per-service SID is not added through the Service SID mechanism. Microsoft defines this as <code>SERVICE_SID_TYPE_NONE</code>, value <code>0x00000000</code>. The service still runs under its configured account and still has a normal process token. <code>NONE</code> does not mean the service has no security identity at all.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe sidtype ExampleService none</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Removing a Service SID can break permissions if files, registry keys, databases, named objects, or firewall rules were deliberately scoped to <code>NT SERVICE\ExampleService</code>. Before setting <code>NONE</code>, inventory every resource that depends on the service-specific identity.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=wHa_eh96UHg","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=wHa_eh96UHg
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>ITFreeTraining reviews Windows service accounts and the principle of least privilege, useful context for understanding why service-specific identities reduce the blast radius of overly broad permissions.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">UNRESTRICTED: Add a Per-Service SID</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>UNRESTRICTED</code> tells Windows to add the service SID to the process token when the applicable service process is created. Microsoft identifies this as <code>SERVICE_SID_TYPE_UNRESTRICTED</code>, value <code>0x00000001</code>. The Service SID can then be used in normal Windows access-control decisions.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe sidtype ExampleService unrestricted</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The security advantage is granularity. Instead of granting a resource to every service running under a broad built-in account, an ACL can grant access to a single service identity such as <code>NT SERVICE\ExampleService</code>. Microsoft’s Windows Service Hardening guidance describes per-service SIDs specifically as a way to apply ACLs to resources that are private to one service.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Microsoft also documents real products that use this pattern. System Center guidance, for example, instructs administrators to run <code>sc sidtype HealthService unrestricted</code> before granting database rights to the resulting <code>NT SERVICE\HealthService</code> identity.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">RESTRICTED: Add the SID to the Restricted Token</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>RESTRICTED</code> is the stronger option. Microsoft defines <code>SERVICE_SID_TYPE_RESTRICTED</code> as including the unrestricted behavior while also adding the Service SID to the restricted SID list in the process token. Windows adds additional restricted identities including the World SID, the service logon SID, and the write-restricted SID.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe sidtype ExampleService restricted</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The practical effect is tighter write access. Resources that the service must write to need permissions compatible with the restricted-token model. If those ACLs are not prepared correctly, the service can lose access to files, registry keys, or other objects it requires to function.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is why <code>RESTRICTED</code> should not be treated as “UNRESTRICTED but safer.” It changes the authorization path. Security hardening is useful only when the application has been designed and tested for the harder boundary.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=j26zUKjOm8g","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=j26zUKjOm8g
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>ManageEngine reviews Windows service-account security and least-privilege practices, providing additional context for why service identities should receive only the access they require.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Shared-Process Rule</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is one of the most important rules in the lesson. Microsoft’s <code>SERVICE_SID_INFO</code> documentation states that if multiple services are hosted in the same process and one service uses <code>RESTRICTED</code>, all services hosted in that process must use <code>RESTRICTED</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That means you should inspect how a service is hosted before changing it. A service running in its own process gives you a different risk profile than a service sharing a host process with several other services. Use <code>sc.exe qc SERVICE_NAME</code>, Task Manager, Process Explorer, and service documentation to understand the process model before hardening.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Real Firewall Example</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Service SIDs are not theoretical. They can affect service-scoped Windows Firewall behavior. A documented Windows Server RADIUS troubleshooting case used <code>sc sidtype IAS unrestricted</code> to enable the service-specific identity needed for a service-aware firewall configuration.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/PFSENSE/comments/dbyff5/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/PFSENSE/comments/dbyff5/
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>A pfSense community troubleshooting thread documents the exact <code>sc sidtype IAS unrestricted</code> command in a Windows Server RADIUS and firewall scenario. Treat community reports as examples, then verify against Microsoft documentation and your own environment.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Verify Before and After</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Never make the write-side change blind. First inspect the current setting:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe qsidtype ExampleService</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Then record the current result. If you proceed with a change, query again afterward. To display the actual Service SID rather than only its configuration type, use:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe showsid ExampleService</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Do not assume that changing the SCM database means the active process token changed immediately. Microsoft’s current <code>SERVICE_SID_INFO</code> documentation says the change takes effect the next time the system is started. Product-specific Microsoft guidance may also prescribe restarting an affected service as part of a supported procedure. Follow the documentation for the exact service, then verify the running state and permissions instead of relying on the success message alone.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Remote Syntax</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>SC supports remote service configuration. The server name appears before the command:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sc.exe \\SERVER01 sidtype ExampleService unrestricted</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Remote modification requires connectivity to the remote Service Control Manager and sufficient rights to change that service’s configuration. Microsoft documents <code>SERVICE_CHANGE_CONFIG</code> as the access right required by the underlying service-configuration API. A remote failure may therefore be a permissions or RPC/connectivity problem rather than a problem with <code>sidtype</code> itself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Safe Change Workflow</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ol><li>Identify the exact short service name.</li><li>Read the application or Windows documentation for that service.</li><li>Run <code>sc.exe qc SERVICE_NAME</code> to understand its configuration and hosting type.</li><li>Run <code>sc.exe qsidtype SERVICE_NAME</code> and record the current value.</li><li>Inspect the service’s required files, registry keys, network access, database permissions, and firewall rules.</li><li>Test the intended change on a disposable VM or nonproduction host.</li><li>Run <code>sc.exe sidtype SERVICE_NAME VALUE</code>.</li><li>Follow the documented restart or reboot requirement for that service.</li><li>Verify with <code>qsidtype</code>, <code>showsid</code>, service status, Event Viewer, and application-level tests.</li><li>If functionality breaks, restore the previous SID type and retest rather than adding broad permissions as a shortcut.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Common Mistakes</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li><strong>Changing a production service without recording the old value:</strong> always establish a rollback point first.</li><li><strong>Confusing the service account with the Service SID:</strong> they are related to the service’s security context but are not the same identity.</li><li><strong>Assuming UNRESTRICTED means unlimited privileges:</strong> the word describes how the Service SID is placed in the token, not whether the entire process has unlimited access.</li><li><strong>Assuming RESTRICTED is automatically safe:</strong> it can deny writes the application legitimately needs.</li><li><strong>Ignoring shared-process services:</strong> Microsoft requires all services in a shared process to use RESTRICTED if one of them does.</li><li><strong>Granting LocalSystem broad ACL access after a failure:</strong> this can defeat the point of service isolation.</li><li><strong>Skipping verification:</strong> a successful SC command does not prove the application still works.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Hands-On Exercise</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Use a disposable Windows VM. Do not use a production machine for this exercise.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ol><li>Open an elevated Command Prompt or PowerShell window.</li><li>Choose a noncritical test service whose behavior you understand.</li><li>Run <code>sc.exe qc SERVICE_NAME</code>.</li><li>Run <code>sc.exe qsidtype SERVICE_NAME</code> and save the result.</li><li>Run <code>sc.exe showsid SERVICE_NAME</code> and record the service SID.</li><li>If the service is suitable for the lab, configure <code>UNRESTRICTED</code>.</li><li>Follow the documented restart/reboot requirement for the test environment.</li><li>Run <code>qsidtype</code> again.</li><li>Create a disposable folder and experiment with granting access to <code>NT SERVICE\ServiceName</code>.</li><li>Verify the service still starts and performs its intended function.</li><li>Restore the original SID type when the lab is complete.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Knowledge Check</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ol><li>What does <code>sc.exe sidtype</code> change?</li><li>What is the difference between <code>sidtype</code> and <code>qsidtype</code>?</li><li>What are the three supported Service SID types?</li><li>Does <code>NONE</code> mean the service has no security identity?</li><li>What does <code>UNRESTRICTED</code> add to the service process token?</li><li>What additional behavior does <code>RESTRICTED</code> introduce?</li><li>Why is the shared-process rule important?</li><li>Which command displays the actual Service SID?</li><li>Why should ACL dependencies be checked before changing SID type?</li><li>Why should the running service be tested after the change?</li></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Answers</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ol><li>The configured Service SID type for a Windows service.</li><li><code>sidtype</code> changes the setting; <code>qsidtype</code> only queries it.</li><li><code>NONE</code>, <code>UNRESTRICTED</code>, and <code>RESTRICTED</code>.</li><li>No. The service still runs under its configured account and has a process token.</li><li>The service-specific SID is added to the process token.</li><li>The Service SID is also added to the restricted SID list along with additional restricted identities, creating a tighter authorization boundary.</li><li>If one service in a shared process is restricted, Microsoft requires all services in that process to be restricted.</li><li><code>sc.exe showsid SERVICE_NAME</code>.</li><li>Existing permissions may depend on the current service identity and can break after the change.</li><li>A successful configuration write does not prove that startup, file access, registry access, networking, or application behavior still works.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key Takeaway</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><code>sc.exe sidtype</code> is the configuration command for Windows per-service identities.</strong> Use <code>UNRESTRICTED</code> when a supported service needs a distinct SID that can be granted narrowly scoped access. Use <code>RESTRICTED</code> only when the service and every required resource have been designed and tested for the restricted-token model. Use <code>NONE</code> only when you understand what permissions will disappear with the Service SID.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This lesson also connects directly to <a href="https://bitcoinversus.tech/2026/10/12/windows-command-47-sc-privs-windows-os/"><strong>Windows Command #47 – sc privs</strong></a>: privileges define what powerful system operations a service may request, while Service SID configuration helps define which securable resources can identify and authorize that specific service. Together they are part of Windows Service Hardening.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Primary references:</strong> <a href="https://learn.microsoft.com/en-us/windows/win32/services/configuring-a-service-using-sc">Microsoft Learn — Configuring a Service Using SC</a>, <a href="https://learn.microsoft.com/en-us/windows/win32/api/winsvc/ns-winsvc-service_sid_info">Microsoft Learn — SERVICE_SID_INFO</a>, <a href="https://techcommunity.microsoft.com/blog/askperf/ws2008-windows-service-hardening/372702">Microsoft — Windows Service Hardening</a>, and <a href="https://learn.microsoft.com/en-us/system-center/scom/sql-server-management-pack-service-sid?view=sc-om-2025">Microsoft System Center — Service SID</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Next:</strong> Windows Command #50 will cover <code>sc showsid</code>, the command that displays the actual <code>S-1-5-80-...</code> Service SID generated from a service name.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech provides technical education and analysis for informational purposes only. Test service-security changes in a disposable environment before applying them to production systems.</em></p>
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