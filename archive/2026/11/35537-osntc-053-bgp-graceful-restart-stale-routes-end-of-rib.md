---
title: "OSNTC.053: How BGP Graceful Restart Preserves Routes and When It Fails"
status: published
wordpress_post_id: 35537
published: "2026-11-26"
live_url: "https://bitcoinversus.tech/2026/11/26/osntc-053-bgp-graceful-restart-stale-routes-end-of-rib/"
series: "Open-Source Networking Technician Certification"
featured_media: 35538
---

<!-- wp:paragraph --><p>A BGP session can disappear while a router continues forwarding packets. Graceful Restart (GR) allows a participating neighbor to temporarily retain routing information while the restarting speaker reconstructs its control-plane state. GR reduces routing churn but cannot guarantee uninterrupted service. Continue from <a href="https://bitcoinversus.tech/2026/11/22/osntc-052-bgp-roles-otc-route-leak-prevention-rfc-9234/">OSNTC.052: BGP route-leak prevention</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Prerequisites</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Understand IP prefixes, BGP neighbors, next hops and route selection. Review <a href="https://bitcoinversus.tech/2026/11/21/osntc-050-bfd-fast-network-failure-detection-timers-troubleshooting/">OSNTC.050 on BFD</a> and <a href="https://bitcoinversus.tech/2026/11/21/osntc-051-rpki-bgp-route-origin-validation-roa-vrp-troubleshooting/">OSNTC.051 on RPKI</a>. Estimated study time: 35–50 minutes.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Learning objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><!-- wp:list-item --><li>Distinguish a control-plane restart from loss of data-plane forwarding.</li><!-- /wp:list-item --><!-- wp:list-item --><li>Explain the restarting and receiving speakers, GR capability, Restart State and Forwarding State flags, and End-of-RIB marker.</li><!-- /wp:list-item --><!-- wp:list-item --><li>Predict stale-route retention and removal from a hypothetical timeline.</li><!-- /wp:list-item --><!-- wp:list-item --><li>Recognize blackhole risks, timer boundaries and the relationship to BFD.</li><!-- /wp:list-item --><!-- wp:list-item --><li>Perform a read-only verification workflow and identify authorization, rollback and escalation requirements.</li><!-- /wp:list-item --></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">1. Control plane versus data plane</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The control plane learns paths, selects routes and programs forwarding entries. The routing information base (RIB) contains routing information used for path selection; the forwarding information base (FIB) directs packets toward next hops. A BGP process restart can interrupt a TCP session while hardware forwarding entries remain installed. A power failure, disconnected link or failed forwarding ASIC is different: retaining an old route cannot make an unavailable path carry traffic.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Without GR, losing a session normally triggers removal of routes learned from the affected peer and alternative route selection. Re-establishment causes further updates. GR trades immediate removal for a bounded recovery opportunity, useful when forwarding continuity is credible.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">2. Negotiation and architecture</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>RFC 4724 specifies Graceful Restart Capability code 64 in the BGP OPEN exchange. The restarting speaker recovers its BGP process; the receiving speaker, often called a helper, retains eligible paths learned from that peer. The capability includes a 12-bit Restart Time in seconds, restart flags and address-family entries with their own flags. IPv4 and IPv6 unicast are separate address families; negotiation for one does not imply coverage for another.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The Restart State (R) bit indicates that a speaker has restarted. The Forwarding State (F) bit is family-specific and signals preservation of forwarding state, subject to the configuration exception in RFC 4724. It is not a measurement of packet delivery. A helper initially retains routes based on earlier capability information and can subsequently remove them when the renewed session fails to confirm the required state.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">3. Recovery and stale routes</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><!-- wp:list-item --><li>Before interruption: peers exchange capabilities and establish BGP.</li><!-- /wp:list-item --><!-- wp:list-item --><li>At session interruption: under base RFC 4724 procedures, the helper marks eligible paths stale and temporarily retains them; paths already stale from an earlier restart are removed.</li><!-- /wp:list-item --><!-- wp:list-item --><li>At reconnection: the restarting speaker signals restart. If the appropriate address family or forwarding-state indication is absent, corresponding stale paths are removed.</li><!-- /wp:list-item --><!-- wp:list-item --><li>During resynchronization: fresh UPDATE messages replace retained stale paths. For IPv4 unicast, End-of-RIB (EoR) is an empty UPDATE. Multiprotocol families use MP_UNREACH_NLRI identifying the family without withdrawn destinations.</li><!-- /wp:list-item --><!-- wp:list-item --><li>At completion: EoR triggers removal of paths still stale in the relevant family. The restarting speaker also defers route selection while waiting for its peers, bounded by a separate selection-deferral timer.</li><!-- /wp:list-item --></ul><!-- /wp:list -->

<!-- wp:paragraph --><p>If the session does not return within the previously advertised Restart Time, the helper removes the stale paths. An implementation may impose a separate upper bound on stale-route retention. Restart Time is not a guarantee of forwarding. RFC 8538 extends GR to certain NOTIFICATION events when support is negotiated; Hard Reset is excluded. RFC 9494 specifies a separate Long-Lived Graceful Restart extension.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">4. Worked example: two prefixes, one missing</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Assume a fictional neighbor advertises a 90-second Restart Time and two documentation prefixes, 192.0.2.0/24 and 198.51.100.0/24. At t=0 its BGP session terminates while forwarding is assumed viable. At t=25 seconds the session returns with appropriate GR and forwarding-state signaling. At t=30 the helper receives an advertisement for 192.0.2.0/24. At t=35 it receives EoR without a refreshed advertisement for 198.51.100.0/24.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The first route is refreshed at 30 seconds; the second is removed at 35 seconds, not 90. EoR indicates that the initial refresh has finished. If the session never reconnects, the 90-second Restart Time bounds the wait for re-establishment. An alternative route, if eligible and available, can be selected. All values are illustrative rather than measured results.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">5. Blackholes, BFD and security</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A blackhole occurs when traffic follows an installed route but cannot reach its destination. A helper may remove stale routes early if independent evidence establishes that the neighbor's forwarding state is no longer viable. BFD offers rapid path-failure evidence, but its interaction with GR and control-plane independence depends on implementation and configuration. Consult platform documentation rather than assuming that every BFD event has identical consequences. Compare <a href="https://bitcoinversus.tech/2026/11/22/osnec-011-ospf-fast-reroute-loop-free-alternates-rfc5286/">OSNEC.011 on OSPF fast reroute</a>, which addresses alternate paths instead of stale BGP state.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>GR is not routing authentication. It does not establish prefix-origin authority or validate an AS path's propagation policy. Continue to apply RPKI, route filtering and leak prevention.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">6. Read-only verification workflow</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Use a paper worksheet or authorized isolated FRRouting lab. The following FRR 10.6 operational command is documented for displaying GR neighbor information. Replace the documentation address only with an authorized lab peer. The command syntax was checked against the documentation, not executed on a router.</p><!-- /wp:paragraph -->

<!-- wp:code --><pre class="wp-block-code"><code>show bgp ipv4 neighbors 192.0.2.1 graceful-restart</code></pre><!-- /wp:code -->

<!-- wp:list --><ul class="wp-block-list"><!-- wp:list-item --><li>Record peer address, address family, local and remote capabilities, restart time and current session state.</li><!-- /wp:list-item --><!-- wp:list-item --><li>Compare timestamps in authorized neighbor logs, routing snapshots, forwarding telemetry and any available EoR indication.</li><!-- /wp:list-item --><!-- wp:list-item --><li>Distinguish control-plane recovery from confirmed data-plane reachability. Record missing evidence rather than declaring a route healthy based on a flag.</li><!-- /wp:list-item --><!-- wp:list-item --><li>Escalate inconsistent forwarding, persistent stale routes or unexpected withdrawals to the routing owner with affected prefixes, family, timeline and change ticket.</li><!-- /wp:list-item --></ul><!-- /wp:list -->

<!-- wp:paragraph --><p>Never restart a production routing process, change GR timers, disable BFD or modify route policy without owner authorization, impact analysis, change control, a rollback plan and post-change reachability verification. A rollback restores the previously approved configuration through the organization's procedure. No production access or live failure injection is required.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Glossary</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><!-- wp:list-item --><li>RIB: routing information base used for path selection.</li><!-- /wp:list-item --><!-- wp:list-item --><li>FIB: forwarding information base used to direct packets.</li><!-- /wp:list-item --><!-- wp:list-item --><li>Stale route: retained routing information awaiting refresh or removal.</li><!-- /wp:list-item --><!-- wp:list-item --><li>EoR: End-of-RIB marker indicating completion of the initial update for an address family.</li><!-- /wp:list-item --><!-- wp:list-item --><li>Blackhole: failure to deliver traffic along a selected path.</li><!-- /wp:list-item --></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Practice exercises</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><!-- wp:list-item --><li>A. A BGP process restarts but its forwarding ASIC remains operational. Explain why GR may reduce loss but cannot guarantee zero loss.</li><!-- /wp:list-item --><!-- wp:list-item --><li>B. In the worked example, calculate when the unrefreshed route is removed. Repeat if the session never reconnects.</li><!-- /wp:list-item --><!-- wp:list-item --><li>C. The session returns with the F flag clear for IPv6 unicast. What happens to IPv6 stale paths under the base mechanism?</li><!-- /wp:list-item --><!-- wp:list-item --><li>D. Build a worksheet with four columns: timestamp, control-plane evidence, data-plane evidence and action. Add a case where forwarding evidence is missing.</li><!-- /wp:list-item --></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Knowledge check</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><!-- wp:list-item --><li>What distinguishes a RIB from a FIB?</li><!-- /wp:list-item --><!-- wp:list-item --><li>How do the R and F flags differ?</li><!-- /wp:list-item --><!-- wp:list-item --><li>Why can EoR trigger removal before a timer expires?</li><!-- /wp:list-item --><!-- wp:list-item --><li>Does GR replace BFD or RPKI?</li><!-- /wp:list-item --><!-- wp:list-item --><li>Which operations require change control and rollback planning?</li><!-- /wp:list-item --></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Answer key</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A: Retained paths can keep packets moving while forwarding remains valid; hardware or next-hop failures can still interrupt delivery. B: 35 seconds at EoR; 90 seconds if the session never returns. C: Remove stale routes for the affected family promptly. D: Mark forwarding unverified and escalate when service risk or inconsistent state warrants investigation.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Knowledge check: 1. RIB supports route selection; FIB directs packets. 2. R indicates restart; F indicates family-specific forwarding-state preservation. 3. EoR marks completion of the initial refresh, allowing remaining stale routes to be removed. 4. No; BFD supplies failure-detection evidence and RPKI validates origin authorization. 5. Production process restarts, timer changes, BFD changes and routing policy changes require authorization and rollback planning.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Primary references</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><!-- wp:list-item --><li><a href="https://www.rfc-editor.org/rfc/rfc4724.html">RFC 4724: Graceful Restart Mechanism for BGP</a>.</li><!-- /wp:list-item --><!-- wp:list-item --><li><a href="https://www.rfc-editor.org/rfc/rfc8538.html">RFC 8538: Notification Message Support for BGP Graceful Restart</a>.</li><!-- /wp:list-item --><!-- wp:list-item --><li><a href="https://www.rfc-editor.org/rfc/rfc9494.html">RFC 9494: Long-Lived Graceful Restart for BGP</a>.</li><!-- /wp:list-item --><!-- wp:list-item --><li><a href="https://docs.frrouting.org/en/stable-10.6/bgp.html">FRRouting 10.6 BGP documentation</a>.</li><!-- /wp:list-item --></ul><!-- /wp:list -->

<!-- wp:paragraph --><p>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiative, please scan the QR code below.</p><!-- /wp:paragraph -->

<!-- wp:image {"id":24026,"sizeSlug":"medium","linkDestination":"none"} --><figure class="wp-block-image size-medium"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/img_06542.jpeg?w=300" alt="BitcoinVersus.Tech research support QR code" class="wp-image-24026" /></figure><!-- /wp:image -->
