---
post_id: 21720
title: "Bitcoin Mining IT: What Is Stratum? How ASIC Miners Talk to Mining Pools"
live_url: "https://bitcoinversus.tech/2026/10/07/bitcoin-mining-it-what-is-stratum-asic-miners-pools/"
featured_media_id: 21715
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-stratum-asic-mining-pool-1200x630-1.jpg"
status: publish
---
<!-- wp:paragraph -->
<p><strong>Stratum</strong> is the communication protocol that connects a Bitcoin miner to a mining pool. The <a href="https://bitcoinversus.tech/2026/08/24/bitcoin-asic-architecture-bitmain-canaan-microbt-bitdeer/"><strong>ASIC miner</strong></a> does the SHA-256 hashing, but Stratum is how the machine receives work from the pool and sends completed work back.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>From an IT perspective, Stratum is one of the most important invisible systems in a mining facility. A miner can have healthy <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-hardware-what-is-hashboard-asic-board/"><strong>hashboards</strong></a>, a working PSU, good temperatures, and a live Ethernet link—but if its Stratum session to the pool is broken, that machine is not doing useful pooled mining work.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=sp6QEFzkAyI","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=sp6QEFzkAyI
</div><figcaption class="wp-element-caption"><em>Braiins explains Stratum V2 with Matt Corallo, including pool communication, efficiency, security, and miner transaction selection.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Stratum Sits Between the ASIC and the Mining Pool</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The physical mining chain is straightforward. The <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-nic-network-interface-card-servers-asic-miners/"><strong>network interface</strong></a> on the control board connects the miner to Ethernet. The switch forwards that traffic upstream. The router or firewall provides the path out of the site. Then Stratum carries mining-specific messages between the miner and the pool.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The official <a href="https://stratumprotocol.org/specification/03-protocol-overview/"><strong>Stratum V2 specification</strong></a> describes the Mining Protocol as the direct communication layer between mining devices, proxies, and pool servers. Its job is to distribute mining work and accept proof-of-work submissions.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":21716,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/new-bitcoin-miners-stratum-body.jpg?w=1024" alt="A group of Bitcoin mining machines, representing ASIC hardware configured to connect to a mining pool." class="wp-image-21716" /><figcaption class="wp-element-caption"><em>Real Bitcoin mining hardware. The ASICs perform the hashing; Stratum is the protocol used to exchange mining work with the pool. Photo: Steve Rainwater / Wikimedia Commons, CC0.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Pool Sends Jobs to the Miner</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A mining pool has to tell connected miners what to hash. That assignment is commonly called a <strong>mining job</strong>. It contains the information needed for the miner to search a valid portion of the Bitcoin proof-of-work space.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Under Stratum V2, the <a href="https://stratumprotocol.org/specification/05-mining-protocol/"><strong>Mining Protocol specification</strong></a> defines standard and extended jobs, channels, targets, previous-block hashes, job IDs, and the search space assigned to mining devices. The pool or proxy has to make sure miners are not wasting energy by repeatedly searching the same work.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The ASIC Searches the Job at Massive Speed</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Once the control board receives a job, it prepares work for the hashing hardware. The <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-hardware-what-is-hashboard-asic-board/"><strong>ASIC chips on the hashboards</strong></a> then test enormous numbers of candidate hashes by changing values such as the nonce and other permitted fields.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The mining pool does not need every hash the ASIC computes. That would create an impossible amount of network traffic. Instead, the miner only submits results that meet a lower pool-defined target called a <strong>share</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Shares Prove the Miner Is Doing Work</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A <strong>pool share</strong> is proof that the miner performed a statistically meaningful amount of hashing. Most shares are not valid Bitcoin blocks, but they let the pool estimate how much work each miner contributed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech’s guide to <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-pool-shares-accepted-rejected-stale-vardiff/"><strong>accepted, rejected, and stale shares</strong></a> explains the accounting side. Stratum is the transport path that carries those share submissions from the miner back to the pool.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Vardiff Changes How Hard a Share Must Be</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Variable difficulty</strong>, or <strong>vardiff</strong>, lets the pool assign a share target appropriate for the miner’s hashrate. A very fast ASIC needs a harder share target so it does not overwhelm the pool with submissions. A slower miner can use an easier target and still send enough samples for the pool to estimate performance.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That target is separate from Bitcoin’s full network difficulty. The pool share difficulty is an accounting and communication tool; only an exceptionally rare hash that also satisfies the Bitcoin network target becomes a valid block.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Worker Names Tell the Pool Which Miner Gets Credit</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Mining-pool configuration usually includes a pool address plus a <strong>worker identity</strong>. A farm might use names such as <code>siteA-row12-miner04</code> so operators can identify where hashrate is coming from.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Stratum V2 specification includes a <strong>user_identity</strong> field for identifying or authorizing a mining channel. BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/09/29/axeos-fundamentals-pool-settings-worker-names-failover/"><strong>pool settings, worker names, and failover guide</strong></a> shows the operational side of the same concept on AxeOS.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Pool URLs Are More Than Just Web Addresses</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A mining configuration often contains a hostname, port, worker identity, and protocol scheme. Depending on the pool and firmware, an operator may see forms such as <code>stratum+tcp://</code>, encrypted variants, or Stratum V2-specific connection strings.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The hostname still depends on normal IT services. The miner may need <strong>DNS</strong> to resolve the pool name, an IP route to reach the server, and a firewall policy that allows the connection. That is why mining-pool connectivity can fail even when the ASIC hardware itself is healthy.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">TCP Keeps the Mining Session Ordered</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Stratum mining traffic is commonly carried over a connection-oriented transport such as <strong>TCP</strong>. The Stratum V2 specification requires ordered delivery of protocol messages and describes TCP as a normal transport choice.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is where ordinary networking becomes mining economics. If a site has unstable uplinks, bad cabling, packet loss, or repeated reconnects, the pool connection can suffer even though the hashing silicon is running perfectly.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Packet Loss and Latency Can Turn Into Stale Work</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When Bitcoin finds a new block, pools need to move miners onto new work quickly. A miner that keeps hashing an old job for too long may submit a <strong>stale share</strong> after the pool has already moved on.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why <a href="https://bitcoinversus.tech/2026/10/06/networking-what-are-packet-loss-jitter-fast-connections-slow/"><strong>packet loss and jitter</strong></a> matter in a mining operation. Bitcoin mining traffic is tiny compared with AI or storage traffic, but timing and reliability still matter because stale work earns less or nothing depending on the pool’s rules.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Pool Proxy Can Aggregate Many Miners</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Large farms do not always need every ASIC to maintain a completely independent upstream relationship with the pool. A <strong>mining proxy</strong> can sit between a group of miners and the pool, aggregate connections, distribute work locally, and reduce repeated upstream traffic.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Stratum V2 protocol explicitly defines the <strong>Mining Proxy</strong> role. A proxy can relay or aggregate channels from many downstream mining devices, which is useful when a site has hundreds or thousands of ASICs behind the same infrastructure.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Stratum V1 Became the Industry Workhorse</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Stratum V1 emerged as Bitcoin mining outgrew earlier <strong>getwork</strong>-style communication. Braiins’ history of mining protocols describes V1 as the protocol that became the de facto standard for pooled Bitcoin mining as network hashrate expanded from tiny early deployments into industrial ASIC fleets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Its longevity is impressive, but V1 was never designed as a precise modern industry standard. Different implementations evolved, security was limited, and pool operators retained most of the control over block-template construction.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Stratum V2 Is the Modern Upgrade</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Stratum V2</strong> is the next-generation protocol designed to improve efficiency, security, scalability, and miner autonomy. Its specification separates the system into a Mining Protocol, Job Declaration Protocol, and Template Distribution Protocol.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The open <a href="https://stratumprotocol.org/specification/00-abstract/"><strong>Stratum V2 specification</strong></a> describes the redesign as an effort to improve mining-job distribution and result submission while adding stronger security and support for miner-selected transaction sets.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/BraiinsMining/status/1194696675190870016","type":"rich","providerNameSlug":"x","responsive":true,"className":"is-provider-x wp-block-embed-x"} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/BraiinsMining/status/1194696675190870016
</div><figcaption class="wp-element-caption"><em>Braiins’ original Stratum V2 specification announcement described the protocol as a more decentralized, secure, and efficient upgrade for Bitcoin mining.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Stratum V2 Encrypts Remote Mining Communication</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One of Stratum V2’s major IT improvements is authenticated encryption. The <a href="https://stratumprotocol.org/specification/04-protocol-security/"><strong>protocol security specification</strong></a> uses authenticated encryption with associated data and supports a Noise Protocol Framework handshake for secured communication.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That matters because mining traffic contains information about work assignments, share submissions, user identities, and hashrate. Protecting that connection reduces the risk of an attacker reading or manipulating the traffic between a miner and its upstream pool infrastructure.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Stratum V2 Can Let Miners Choose Transactions</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Stratum V2 also includes <strong>Job Declaration</strong>. Instead of requiring the pool to choose every transaction in the candidate block, a mining operation can construct a custom block template and declare that work to a compatible pool.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The <a href="https://stratumprotocol.org/specification/06-job-declaration-protocol/"><strong>Job Declaration Protocol</strong></a> was designed specifically so pools do not have to unilaterally impose the transaction set. BitcoinVersus.Tech has followed that decentralization effort through <a href="https://bitcoinversus.tech/2026/09/30/btrust-stratum-v2-braidpool-bitcoin-core-mining-grants/"><strong>Stratum V2 and open-source mining infrastructure development</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Miner Still Needs Ordinary IT Before Stratum Can Work</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Stratum sits high enough in the stack that several lower-level systems must already be healthy. The miner needs a working <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-nic-network-interface-card-servers-asic-miners/"><strong>Ethernet interface</strong></a>, cable, switch port, IP address, subnet, gateway, and usually DNS.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A failed pool connection can therefore be caused by the miner, switch, router, firewall, DNS resolver, upstream internet provider, pool endpoint, or Stratum configuration. This is why a good mining technician troubleshoots from the physical layer upward instead of immediately replacing hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">SNMP Can Show the Infrastructure Around the Stratum Session</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The ASIC itself may expose mining-specific telemetry, while the surrounding network can be monitored separately. BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-snmp-bitcoin-mining-switch-pdu-monitoring/"><strong>SNMP mining-infrastructure guide</strong></a> shows how switches, PDUs, UPS systems, and sensors can be monitored alongside miner APIs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That combination is powerful. Miner telemetry can say “pool disconnected,” while SNMP counters can reveal that an uplink started dropping packets at the same moment.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Failover Pools Keep a Miner From Sitting Idle</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Most mining firmware allows operators to configure more than one pool endpoint. If the primary pool becomes unreachable, the miner can attempt a secondary or tertiary destination.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is simple network resiliency applied to mining economics. An ASIC that loses its preferred endpoint should not sit powered on and hashing useless work if another valid pool is available. Pool failover belongs in the same operational category as redundant uplinks, spare switches, and monitored power systems.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Stratum Errors Often Look Like Hardware Problems at First</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A technician may see low pool hashrate, rejected shares, repeated reconnects, stale work, or a miner that appears “offline” in the pool dashboard. None of those symptoms automatically prove the <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-hardware-what-is-hashboard-asic-board/"><strong>hashboard</strong></a> is bad.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The right workflow is to check local hashrate, logs, network reachability, switch state, pool configuration, worker credentials, DNS, routing, latency, and error counters before opening the machine. BitcoinVersus.Tech’s coverage of <a href="https://bitcoinversus.tech/2026/09/27/braiins-os-26-09-asic-power-startup-diagnostics/"><strong>Braiins OS startup diagnostics</strong></a> shows why firmware telemetry belongs beside physical troubleshooting.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Simple Way to Remember It</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>The pool creates or coordinates work. Stratum delivers the job. The control board feeds the job to the ASICs. The hashboards search it. Stratum sends qualifying shares back to the pool.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes Stratum the bridge between Bitcoin-mining hardware and ordinary IT networking. It depends on Ethernet, TCP, DNS, routing, switches, worker identities, and reliable internet connectivity—but the data moving across that infrastructure is specialized for proof-of-work mining.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Stratum V1 made industrial pool mining practical. Stratum V2 is the modern effort to make that connection more efficient, more secure, and more decentralized.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Pool URLs, port numbers, authentication formats, encryption support, proxy behavior, and Stratum V2 feature support vary by mining pool and firmware. Always use the current connection information provided by the specific pool and miner software.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Featured image: Canaan AvalonMiner A10 Bitcoin Mining Machines, Canaan / Wikimedia Commons, CC BY-SA 4.0; cropped to 1200×630 for BitcoinVersus.Tech. In-body mining-hardware image: Steve Rainwater / Wikimedia Commons, CC0.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support and donation options are available through BitcoinVersus.Tech.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. Content is provided for informational purposes.</p>
<!-- /wp:paragraph -->