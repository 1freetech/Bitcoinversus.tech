---
post_id: 26153
series: Linux Command
lesson_number: 60
command: resolvectl
title: "Linux Command #60 – resolvectl (Linux OS)"
status: publish
live_url: "https://bitcoinversus.tech/2026/10/22/linux-command-60-resolvectl-linux-os/"
slug: "linux-command-60-resolvectl-linux-os"
featured_media_id: 26152
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux-command-60-resolvectl-cover-1200x630-1.jpg
categories: [34922710, 2509703]
qa: WordPress rendered two YouTube iframes and two Reddit blockquotes with widgets.js, external playback untested.
---

<!-- wp:paragraph --><p><strong>Linux Command #60</strong> introduces <code>resolvectl</code>, a command-line tool for querying and inspecting the <code>systemd-resolved</code> name-resolution service on supported Linux systems. When an IP address responds but a website name does not, <code>resolvectl</code> can help reveal which DNS servers are configured, how DNS is routed on each interface, and whether the resolver can answer a query.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>This nonduplicate command lesson follows <a href="https://bitcoinversus.tech/2026/10/18/linux-command-59-tcpdump-linux-os/">Linux Command #59 — tcpdump</a> (packet capture), <a href="https://bitcoinversus.tech/2026/10/14/linux-command-58-nstat-linux-os/">#58 — nstat</a> (kernel network counters), and <a href="https://bitcoinversus.tech/2026/10/14/linux-command-57-nmcli-linux-os/">#57 — nmcli</a> (NetworkManager configuration). These tools complement rather than replace each other.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Elementary Overview</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>DNS</strong>, or the Domain Name System, translates domain names such as <code>example.com</code> into IP addresses and supports other record lookups. Many distributions use <code>systemd-resolved</code> to provide local name-resolution services and choose upstream DNS servers. <code>resolvectl</code> asks that local service about its current state and can make test lookups through it. It does not work as expected on every Linux installation: the host needs a compatible, running <code>systemd-resolved</code> service.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Check whether <code>systemd-resolved</code> is available before troubleshooting.</li><li>Read global and per-interface resolver settings with <code>resolvectl status</code>.</li><li>Query a hostname and inspect DNS record types without changing configuration.</li><li>Understand the difference between the local stub address and an upstream DNS server.</li><li>Compare configured per-link domains and DNS servers when troubleshooting split-DNS or VPN behavior.</li><li>Recognize why clearing a cache is not a substitute for finding a root cause.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">1. Verify the Resolver Service</h2><!-- /wp:heading -->

<!-- wp:code --><pre class="wp-block-code"><code>systemctl status systemd-resolved
resolvectl --help</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The first command checks whether the service exists and is active. The second displays available <code>resolvectl</code> options. On some distributions, the service is absent or disabled and a different resolver is used; in that case, do not assume these commands control the host's actual DNS configuration. The <a href="https://www.freedesktop.org/software/systemd/man/latest/resolvconf.html">upstream systemd documentation</a> is the authoritative reference for the exact installed version.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=O4X04CWmyY4]
<!-- /wp:shortcode -->
<!-- wp:paragraph --><p><em>Adrien Linuxtricks (2024), a practical <code>systemd-resolved</code> walkthrough with <code>resolvectl status</code> at approximately 03:22 and lookup demonstrations at approximately 12:15. Commentary is in French; on-screen commands are useful across languages.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">2. Display Global and Per-Link DNS Settings</h2><!-- /wp:heading -->

<!-- wp:code --><pre class="wp-block-code"><code>resolvectl status</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The result separates <strong>Global</strong> resolver settings from <strong>Link</strong> sections for individual network interfaces. Look for the active DNS servers, DNS domains, current DNS scope, and whether the system reports a <code>stub</code> or another <code>resolv.conf</code> handling mode. An interface's DNS server may differ from the global fallback server, especially when NetworkManager, DHCP, VPN software, or multiple interfaces are in use.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>resolvectl dns
resolvectl domain</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p><code>resolvectl dns</code> lists DNS servers known to the resolver. <code>resolvectl domain</code> lists per-link and global domains, including possible routing-only domains prefixed with <code>~</code>. A route-only DNS domain such as <code>~corp.example</code> instructs <code>systemd-resolved</code> to prefer associated DNS servers for matching names; it does not create public DNS records.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">3. Query a Hostname</h2><!-- /wp:heading -->

<!-- wp:code --><pre class="wp-block-code"><code>resolvectl query example.com</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The command requests name resolution and prints the results available to <code>systemd-resolved</code>, which may include IPv4 and IPv6 addresses, status information, interface details, and resolution time. If it succeeds while an application fails, investigate the application's resolver path, proxy or VPN settings, and name-resolution stack rather than immediately changing DNS servers.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>resolvectl query --type=A example.com
resolvectl query --type=AAAA example.com
resolvectl query --type=MX example.com</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>These queries request specific DNS record types: IPv4 address, IPv6 address, and mail exchanger. A domain does not need to publish every record type. Returned values will vary over time, and a successful response to one type does not prove another type exists.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">4. What Does 127.0.0.53 Mean?</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>On systems configured for <code>systemd-resolved</code>'s traditional DNS stub listener, <code>/etc/resolv.conf</code> may list <code>127.0.0.53</code>. This loopback address identifies a <strong>local service on the host</strong>, not the upstream public resolver that ultimately answers a query. Do not misinterpret it as evidence that all DNS traffic stays on the machine.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>ls -l /etc/resolv.conf
cat /etc/resolv.conf
resolvectl status</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The first command reveals whether <code>/etc/resolv.conf</code> is a symbolic link; the second displays its contents. Managed hosts may use a symlink generated by <code>systemd-resolved</code>, NetworkManager, or another network manager. Manually overwriting the file is often temporary or actively harmful. Preserve configuration ownership and use the site's supported management method.</p><!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/DNS_Architecture.svg/1280px-DNS_Architecture.svg.png" alt="Technical diagram showing a local resolver, caching recursive resolver, and authoritative root, TLD and domain DNS servers" /><figcaption class="wp-element-caption">DNS resolution architecture by Aaron Filbert (<a href="https://commons.wikimedia.org/wiki/File:DNS_Architecture.svg">Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>). This is a conceptual diagram, not an exact drawing of a particular <code>systemd-resolved</code> deployment.</figcaption></figure><!-- /wp:image -->

<!-- wp:heading --><h2 class="wp-block-heading">5. A Troubleshooting Example</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>Scenario:</strong> a server can reach its default gateway but fails to resolve a private internal hostname after connecting to a VPN. First confirm that <code>systemd-resolved</code> is active, then inspect link-specific DNS servers and the routing domains assigned to the VPN. A public resolver can legitimately return no record for a private-only hostname; the correct private DNS server must be selected for that domain.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>resolvectl status
resolvectl dns
resolvectl domain
resolvectl query files.corp.example</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p><code>files.corp.example</code> is an illustrative hostname, not a real service. Record the resolver's reported routing domain and active DNS servers, compare them with the VPN's approved settings, and test whether the internal DNS service is reachable. Avoid replacing internal DNS settings with public resolvers merely to obtain an answer to a public name.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[embed]https://www.reddit.com/r/linuxquestions/comments/1ro3ya7/question_about_dns_servers_via_resolvedconf/[/embed]
<!-- /wp:shortcode -->
<!-- wp:paragraph --><p><em>A March 2026 Linux community discussion illustrates a common distinction: global DNS settings and link-specific DNS settings need not be identical. Community questions are troubleshooting examples, not technical specifications.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">6. Read Resolver Statistics</h2><!-- /wp:heading -->

<!-- wp:code --><pre class="wp-block-code"><code>resolvectl statistics</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>The <code>statistics</code> view reports resolver counters and DNSSEC-related information where supported. It can help characterize caching and validation behavior, but statistics are not a substitute for checking the specific response to a failed lookup or examining the underlying network. The <code>systemd-resolved</code> status and DNS configuration remain the first checks.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">7. Cache Clearing — A Controlled Last Step</h2><!-- /wp:heading -->

<!-- wp:code --><pre class="wp-block-code"><code>sudo resolvectl flush-caches</code></pre><!-- /wp:code -->

<!-- wp:paragraph --><p>This clears the locally maintained DNS resource-record caches within <code>systemd-resolved</code>. It may be useful after an approved DNS change when stale cached results are suspected, but it does <strong>not</strong> repair an incorrect upstream DNS server, unreachable VPN, malformed zone, or absent name. Avoid running it during an incident without noting the before-and-after state, because cache clearing destroys useful diagnostic evidence and may temporarily increase DNS traffic.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[embed]https://www.reddit.com/r/linuxquestions/comments/1eyw8yn/dhcp_dns_priority_issue_with_systemdresolved_on_pop_os/[/embed]
<!-- /wp:shortcode -->
<!-- wp:paragraph --><p><em>A second real-world example examines differing DNS servers received through DHCP and shown by <code>resolvectl status</code>. The discussion shows why per-link configuration should be reviewed before making changes.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Troubleshooting Checklist</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>Command not found:</strong> confirm the distribution installs the <code>resolvectl</code> tool and supports <code>systemd-resolved</code>.</li><li><strong>Service not running:</strong> inspect system services and the actual resolver configuration; do not blindly start competing resolver services.</li><li><strong>DNS server differs by link:</strong> inspect DHCP, NetworkManager, VPN settings, and routing-only DNS domains.</li><li><strong>Public names work, internal names fail:</strong> verify the internal DNS namespace and VPN domain routing.</li><li><strong>Some applications fail while <code>resolvectl query</code> succeeds:</strong> compare NSS, DNS stub, application DNS-over-HTTPS, and proxy paths.</li><li><strong>One query returns no records:</strong> check the record type and domain existence before assuming an outage.</li></ul><!-- /wp:list -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=TxHstPlsX2M]
<!-- /wp:shortcode -->
<!-- wp:paragraph --><p><em>Hey Insights (2025), an English-language overview of troubleshooting DNS with <code>systemd-resolved</code>, including status, test queries, and cache handling. Use the vendor manual for authoritative syntax.</em></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Practice Exercise</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>On an authorized Linux lab machine using <code>systemd-resolved</code>, run the read-only commands <code>resolvectl status</code>, <code>resolvectl dns</code>, <code>resolvectl domain</code>, and <code>resolvectl query example.com</code>. Write down the active DNS server for one interface, whether a split-DNS domain is configured, and the returned record type. Compare what <code>/etc/resolv.conf</code> reports with what <code>resolvectl status</code> reports. Do not change server configuration as part of this exercise.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>What does <code>resolvectl status</code> reveal that a simple ping test may not?</li><li>Why might <code>127.0.0.53</code> appear in <code>/etc/resolv.conf</code>?</li><li>What is the difference between a global fallback DNS server and a DNS server assigned to a network link?</li><li>Does <code>flush-caches</code> fix an incorrect VPN DNS routing configuration?</li><li>Which command would you run first to query <code>example.com</code> through the local resolver?</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> (1) Resolver state, per-link DNS servers, and DNS domains. (2) It can be the local <code>systemd-resolved</code> stub listener. (3) The link's DNS settings may be selected for traffic routed over that interface or domain, while global fallback serves a different role. (4) No. (5) <code>resolvectl query example.com</code>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Additional References</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><a href="https://www.freedesktop.org/software/systemd/man/latest/resolvconf.html">systemd — resolvectl manual (primary technical reference)</a>.</li><li><a href="https://www.freedesktop.org/software/systemd/man/latest/systemd-resolved.service.html">systemd-resolved service and /etc/resolv.conf behavior</a>.</li><li><a href="https://bitcoinversus.tech/2026/10/10/osntc-026-dns-troubleshooting-resolver-settings-nslookup-dig-nxdomain-servfail-packet-capture/">OSNTC.026 — DNS troubleshooting with nslookup, dig, and packet capture</a>.</li><li><a href="https://commons.wikimedia.org/wiki/File:DNS_Architecture.svg">Aaron Filbert — DNS Architecture (CC BY-SA 4.0)</a>.</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><em><strong>Safety note:</strong> DNS changes can disrupt software updates, authentication, monitoring, VPN access and service discovery. Perform write operations only under approved change control, with the current configuration recorded and rollback available.</em></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" class="wp-image-24043" alt="Original BitcoinVersus.Tech donation QR code for 5000 satoshis" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p><!-- /wp:paragraph -->
