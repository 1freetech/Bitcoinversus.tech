---
post_id: 23522
title: "Ransomware Gangs Are Exploiting a Palo Alto VPN Flaw"
live_url: "https://bitcoinversus.tech/2026/10/11/ransomware-palo-alto-globalprotect-vpn-flaw/"
featured_media_id: 23521
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/palo-alto-globalprotect-ransomware-cover.jpg"
status: publish
---

<!-- wp:paragraph -->
<p><strong>Ransomware operators are abusing a Palo Alto Networks GlobalProtect authentication-bypass flaw to enter corporate networks through the VPN itself. The vulnerability, CVE-2026-0257, can let an unauthenticated attacker establish a VPN session on affected PAN-OS and Prisma Access deployments when a specific authentication-override configuration is present.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes this more dangerous than a normal failed-login problem. The attacker can arrive through a trusted remote-access path and initially look more like a legitimate remote user than an obvious internet scan. New reporting on October 11 says ransomware activity tied to the flaw is continuing, while earlier incident-response work independently documented intrusions that progressed all the way to Qilin ransomware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://security.paloaltonetworks.com/CVE-2026-0257">Palo Alto Networks’ advisory</a> now rates CVE-2026-0257 High at 7.8, marks it as attacked in the wild, and gives it the vendor’s highest response urgency. The flaw affects GlobalProtect portal and gateway deployments under specific configuration conditions; Panorama and Cloud NGFW are not affected.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://www.it-connect.fr/wp-content-itc/uploads/2026/06/Palo-Alto-Networks-Patch-CVE-2026-0257.jpg.webp" alt="Table showing affected and unaffected PAN-OS versions for CVE-2026-0257" /><figcaption class="wp-element-caption"><em>A version snapshot published by IT-Connect summarizes affected and fixed PAN-OS branches for CVE-2026-0257. Administrators should still use Palo Alto Networks’ live advisory as the source of truth before upgrading.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The VPN can become the attacker’s front door</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>GlobalProtect is designed to put remote users onto private networks after authentication. That basic architecture is explained in BitcoinVersus’ <a href="https://bitcoinversus.tech/2026/10/10/what-is-a-vpn/">What Is a VPN?</a> guide. CVE-2026-0257 matters because the vulnerable configuration can let an attacker get past that gate without presenting valid credentials in the normal way.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The issue involves GlobalProtect authentication-override cookies. Those cookies are meant to let a previously authenticated user reconnect without repeating the full login process every time. In vulnerable deployments, weaknesses in how those cookies are validated can allow a forged cookie to be accepted as proof of authentication.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=TFstISND5PE","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=TFstISND5PE
</div><figcaption class="wp-element-caption"><em>Palo Alto Networks LIVEcommunity demonstrates GlobalProtect certificate authentication, useful background for understanding where certificates sit in the remote-access authentication path.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why MFA does not replace the patch</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Multi-factor authentication is still one of the most important defenses against stolen passwords. BitcoinVersus recently broke down <a href="https://bitcoinversus.tech/2026/10/10/what-is-mfa/">how MFA adds a second proof of identity</a>. But an authentication-bypass vulnerability changes the problem: if the vulnerable gateway accepts forged authentication state, adding another login factor does not repair the faulty validation path.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is why the remediation starts with the affected GlobalProtect configuration and software version, not with telling users to choose stronger passwords. Palo Alto recommends upgrading to a fixed release, disabling authentication-override cookies when they are unnecessary, or using a new certificate dedicated exclusively to authentication override where the feature remains required.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/sysadmin/comments/1tuuz3w/top_enterprise_cves_from_last_week_may_24th_may/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/sysadmin/comments/1tuuz3w/top_enterprise_cves_from_last_week_may_24th_may/
</div><figcaption class="wp-element-caption"><em>System administrators flagged CVE-2026-0257 early as a case where the real-world risk looked worse than its original score suggested because the vulnerable service sits directly on the network edge.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Qilin attacks show what can happen after VPN access</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The biggest change since the flaw was first disclosed is the evidence around what happens after a successful VPN connection. Arctic Wolf later documented multiple June intrusions where CVE-2026-0257 was the initial access vector before credential theft, lateral movement, Active Directory compromise, and Qilin ransomware deployment.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cypro.co.uk/insights/cyber-bulletins/globalprotect-flaw-used-for-stealthy-vpn-access/">A new October 11 review from CyPro</a> separates what is strongly corroborated from newer attribution claims. Qilin’s use of the flaw is backed by multiple investigated incidents. The newer claim that Settra is also exploiting CVE-2026-0257 comes from current ReliaQuest reporting and should be treated as reported attribution rather than independently established fact.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The post-entry behavior matters because a successful VPN session is only the first step. Once inside, attackers can begin credential discovery, Active Directory reconnaissance, administrative-share movement, remote tool deployment, data theft, or ransomware staging. Security teams therefore have to investigate suspicious successful VPN sessions, not just failed logins.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Authentication cookies deserve the same respect as passwords</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An authentication cookie is effectively a short-lived bearer credential: possession can be enough to convince a service that the user has already authenticated. That is why the same security principle behind BitcoinVersus’ guide on <a href="https://bitcoinversus.tech/2026/09/22/protect-sso-api-tokens-from-theft/">protecting SSO and API tokens from theft</a> also applies here. Identity is not only a username and password; session state can be just as valuable to an attacker.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=cbDFCHLxpSM","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=cbDFCHLxpSM
</div><figcaption class="wp-element-caption"><em>This GlobalProtect configuration walkthrough shows the portal, gateway, authentication profile, and client flow that sit behind a remote-access deployment.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What administrators should verify now</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>Software:</strong> Compare every internet-facing GlobalProtect portal and gateway against Palo Alto Networks’ current fixed-version table.</li><li><strong>Configuration:</strong> Determine whether authentication-override cookies are enabled and whether the certificate setup matches the vulnerable condition.</li><li><strong>Sessions:</strong> After remediation, terminate active sessions so previously established access does not simply remain alive.</li><li><strong>Logs:</strong> Review successful cookie-based VPN connections, unexpected hostnames, unusual source infrastructure, and follow-on internal activity.</li><li><strong>Endpoints and identity:</strong> Check for credential theft, reconnaissance, remote administration tools, lateral movement, and ransomware staging after suspicious VPN access.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The important operational lesson is that patching the firewall and investigating the network are separate jobs. An upgrade closes the vulnerable path going forward; it does not prove that an attacker did not already establish a session or steal credentials before the fix.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A VPN vulnerability is really an identity-boundary failure</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>CVE-2026-0257 is a useful example of why edge security cannot be reduced to a CVSS number. The technical bug is an authentication bypass. The business impact is much larger: the device that decides who is allowed inside the private network can be tricked into admitting someone who never completed the intended authentication process.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why the right response is layered: patch the vulnerable software, correct the authentication-override configuration, invalidate existing sessions, and then hunt for evidence of what happened after any suspicious connection. With ransomware operators already demonstrating the full attack chain, this is no longer a theoretical VPN bug.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>BitcoinVersus.Tech Editor’s Note:</strong> CVE-2026-0257 is configuration-dependent; not every GlobalProtect deployment is vulnerable. Qilin exploitation is independently documented. Newer Settra attribution is currently based on ReliaQuest reporting and is presented here with that limitation.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/bitcoinversus","type":"rich","providerNameSlug":"x","responsive":true,"className":"wp-block-embed-x"} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/bitcoinversus
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Follow BitcoinVersus.Tech on X for cybersecurity, networking, Linux, Bitcoin mining, semiconductor, and data-center reporting.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Support independent technology reporting:</strong> Bitcoin donations help fund BitcoinVersus.Tech research and publishing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Disclaimer: BitcoinVersus.Tech provides technology news and analysis for informational purposes only.</em></p>
<!-- /wp:paragraph -->