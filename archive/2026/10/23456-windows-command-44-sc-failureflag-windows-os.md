---
post_id: 23456
title: "Windows Command #44 – sc failureflag (Windows OS)"
live_url: "https://bitcoinversus.tech/2026/10/10/windows-command-44-sc-failureflag-windows-os/"
featured_media_id: 23453
status: publish
---

<!-- wp:paragraph -->
<p><strong><code>sc.exe failureflag</code> controls whether a Windows service's configured recovery actions also run for non-crash failures.</strong> It follows directly from <a href="https://bitcoinversus.tech/2026/10/10/windows-command-43-sc-failure-windows-os/">Windows Command #43 – sc failure</a>, which defines the recovery actions themselves.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What failureflag changes</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Windows stores this setting as the service's failure-actions flag. Microsoft documents that when the flag is enabled and failure actions are already configured, those actions can be queued not only when the service process terminates without reporting <code>SERVICE_STOPPED</code>, but also when the service reports <code>SERVICE_STOPPED</code> with a nonzero Win32 exit code. If the flag is disabled, configured recovery actions are limited to the crash-style case where the service terminates without reporting <code>SERVICE_STOPPED</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The flag is ignored unless the service already has recovery actions configured. That is why <code>sc failureflag</code> belongs immediately after the previous lesson on <code>sc failure</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Read the current value first</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Use <code>sc.exe qfailureflag SERVICE_NAME</code> from an elevated Command Prompt to inspect the current setting before making any changes. Replace <code>SERVICE_NAME</code> with the actual service name, not the display name.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, on a disposable test service named <code>DemoService</code>, run <code>sc.exe qfailureflag DemoService</code>. Record the original value so you can restore it after testing.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=aZPTIBbLjXA","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=aZPTIBbLjXA
</div><figcaption class="wp-element-caption"><em>This overview explains the Windows Service Control Manager, the subsystem that <code>sc.exe</code> queries and modifies.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Enable recovery actions for non-crash failures</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For a test service you administer, the command is <code>sc.exe failureflag DemoService flag= 1</code>. The space after the equals sign is significant in <code>sc.exe</code> option syntax. A value of <code>1</code> enables failure actions on qualifying non-crash failures.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To disable that behavior, use <code>sc.exe failureflag DemoService flag= 0</code>. Then verify the result with <code>sc.exe qfailureflag DemoService</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What counts as a non-crash failure?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A service can stop in an orderly way yet still report an error. When the failure-actions flag is enabled, a transition to <code>SERVICE_STOPPED</code> with a <code>dwWin32ExitCode</code> other than <code>ERROR_SUCCESS</code> can trigger the configured recovery actions. Microsoft also notes that the setting takes effect the next time the system starts.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction matters because a service can fail without an abrupt process crash. A controlled shutdown path might detect an unrecoverable condition, report an error status, and stop. With the flag enabled, Windows can still treat that event as eligible for the restart, command, or reboot actions configured in the previous lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Do not enable it blindly</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li>Confirm the service already has sensible failure actions with <code>sc.exe qfailure SERVICE_NAME</code>.</li><li>Use a disposable or noncritical test service when learning the command.</li><li>A repeated automatic restart can hide a persistent application fault and create a restart loop.</li><li>Review Event Viewer and application logs instead of treating recovery settings as root-cause repair.</li><li>Record the original value before changing it.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practice lab</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>Choose a noncritical test service that you are authorized to administer.</li><li>Run <code>sc.exe qfailure SERVICE_NAME</code> and confirm that recovery actions exist.</li><li>Run <code>sc.exe qfailureflag SERVICE_NAME</code> and record the original flag.</li><li>Enable the flag with <code>sc.exe failureflag SERVICE_NAME flag= 1</code>.</li><li>Verify the setting with <code>sc.exe qfailureflag SERVICE_NAME</code>.</li><li>Restore the original flag after the exercise.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Knowledge check</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>What does <code>sc.exe failureflag</code> control?</li><li>Which command reads the current flag?</li><li>What does <code>flag= 1</code> enable?</li><li>Does the flag create recovery actions by itself?</li><li>Why should you inspect the existing recovery policy before enabling it?</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Answer guide</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>It controls whether configured service failure actions can also run for qualifying non-crash failures.</li><li><code>sc.exe qfailureflag SERVICE_NAME</code>.</li><li>It enables failure actions when the service reports a stopped state with a non-success Win32 exit code, in addition to crash-style termination.</li><li>No. Recovery actions must already be configured separately, such as with <code>sc.exe failure</code>.</li><li>Because enabling the flag can cause additional restart, command, or reboot actions to run when the service fails.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Further reading</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Microsoft's <a href="https://learn.microsoft.com/en-us/windows/win32/services/configuring-a-service-using-sc">Configuring a Service Using SC</a> lists <code>failureflag</code> and <code>qfailureflag</code> among the supported Service Control configuration commands. The <a href="https://learn.microsoft.com/en-us/windows/win32/api/winsvc/ns-winsvc-service_failure_actions_flag">SERVICE_FAILURE_ACTIONS_FLAG documentation</a> explains the exact conditions under which the flag changes recovery behavior.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Advertisement</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>Follow BitcoinVersus.Tech for independent technology reporting and open-source technical education.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><strong><em><sup>BitcoinVersus.Tech Editor's Note:</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em><sup>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->