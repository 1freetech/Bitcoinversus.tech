---
post_id: 21771
title: "Data Centers: AirTrunk Puts $1B Into Tokyo Campus as Liquid Cooling Brings AI to Japan"
live_url: "https://bitcoinversus.tech/2026/10/07/data-centers-airtrunk-1-billion-tok1-japan-liquid-cooling-ai/"
featured_media_id: 21768
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-airtrunk-tok1-japan-ai-data-center-1200x630-1.png"
status: publish
---
<!-- wp:paragraph -->
<p><strong>Japan’s AI infrastructure race is moving from ordinary cloud capacity to high-density compute.</strong> <a href="https://www.reuters.com/world/asia-pacific/blackstone-backed-airtrunk-invest-1-billion-japan-data-centre-campus-2026-10-07/"><strong>Reuters reports</strong></a> that Blackstone-backed AirTrunk is investing an additional <strong>$1 billion</strong> in its TOK1 hyperscale campus in Inzai, east of Tokyo, with the money aimed at deploying <a href="https://bitcoinversus.tech/2026/10/05/osdcec-003-data-center-cooling-engineering-airflow-deltat-containment-psychrometrics-economization-liquid-cooling/"><strong>liquid-cooling infrastructure</strong></a> for large-scale artificial-intelligence workloads.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The story is bigger than another billion-dollar data-center build. TOK1 is already a <a href="https://bitcoinversus.tech/2026/10/04/osdcec-002-data-center-capacity-planning-it-load-pue-rack-density-growth-headroom/"><strong>300+ MW hyperscale campus</strong></a>. AirTrunk’s new spending is about changing what that capacity can do: moving from conventional cloud workloads toward the higher rack densities, heat loads, power delivery, and network traffic demanded by modern AI accelerators.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Liquid Cooling Changes the Campus</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Traditional air cooling can handle a wide range of servers, but dense GPU systems can push far more heat into a rack than older cloud hardware. <a href="https://bitcoinversus.tech/2026/09/29/ul-launches-certification-for-direct-to-chip-ai-cooling/"><strong>Direct-to-chip liquid cooling</strong></a> moves heat away from processors through coolant loops much closer to the silicon, reducing the amount of heat that must first be transferred into room air.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That changes the physical data hall. Operators need coolant distribution units, pumps, manifolds, piping, controls, leak detection, heat exchangers, and operating procedures layered onto the existing <a href="https://bitcoinversus.tech/2026/10/04/osdctc-001-data-center-floor-fundamentals-racks-power-cooling-networking-safety/"><strong>racks, power, cooling, networking, and safety systems</strong></a>. It also increases the importance of <a href="https://bitcoinversus.tech/2026/10/07/osdcec-005-data-center-monitoring-controls-bms-epms-dcim-snmp-modbus-alarms-trending/"><strong>BMS, EPMS, DCIM, alarms, and trending</strong></a> because cooling performance becomes tightly coupled to IT load.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">TOK1 Was Already Built at Hyperscale</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AirTrunk’s <a href="https://airtrunk.com/location/tok1-east-tokyo/"><strong>official TOK1 specifications</strong></a> describe a campus with more than 300 MW of capacity, about 13 hectares of land, roughly 80,000 square meters of data-hall area, 102 data halls, multiple carrier paths, and 66 kV high-voltage power feeds. The company lists a design <a href="https://bitcoinversus.tech/2026/10/04/osdcec-002-data-center-capacity-planning-it-load-pue-rack-density-growth-headroom/"><strong>PUE</strong></a> of 1.15.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those numbers explain why Inzai is a logical place to add AI capacity. A campus that already has large power blocks, utility access, multiple buildings, and fiber diversity can be upgraded for denser compute more easily than a small facility designed around modest enterprise racks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>AirTrunk has long emphasized the importance of high-voltage utility access at TOK1. That electrical backbone ultimately has to feed the same chain BitcoinVersus.Tech breaks down in its <a href="https://bitcoinversus.tech/2026/10/06/osdcec-004-data-center-electrical-power-path-utility-switchgear-ats-generators-ups-pdus-ab-feeds/"><strong>data-center electrical power path</strong></a>: utility service, substations, switchgear, transfer systems, generators, <a href="https://bitcoinversus.tech/2026/10/07/data-centers-what-is-ups-battery-backup-grid-generator/"><strong>UPS systems</strong></a>, PDUs, and finally the IT load.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The $1B Is Really a Density Bet</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A megawatt is a unit of power, but it does not tell you how that power is distributed. The AI shift is forcing operators to put much more electrical and thermal capacity into smaller physical footprints. That makes <a href="https://bitcoinversus.tech/2026/10/06/bitcoin-mining-hardware-bitmain-s23e-u2h-865-th-2u-rack-density/"><strong>rack density</strong></a> an infrastructure problem rather than just a server specification.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Higher-density racks can require heavier busway and PDU designs, larger branch circuits, more aggressive cooling, stronger monitoring, and carefully engineered failure domains. Those requirements are why <a href="https://bitcoinversus.tech/2026/10/04/osdcec-001-data-center-redundancy-failure-domains-n-n1-2n-concurrent-maintainability/"><strong>N, N+1, and 2N redundancy</strong></a> decisions become more expensive as each rack carries more compute value.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">AI Also Changes the Network</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AI clusters do not only consume more electricity. They also create intense east-west traffic between GPUs, storage, CPUs, and other accelerators. That puts more pressure on <a href="https://bitcoinversus.tech/2026/10/06/networking-ciena-6-4t-optics-200t-ai-interconnect-70-percent-lower-power/"><strong>high-speed optical interconnects</strong></a>, switching fabrics, transceivers, fiber paths, and network automation.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>TOK1 is carrier-neutral with multiple entry paths, according to AirTrunk. That matters because a large <a href="https://bitcoinversus.tech/2026/07/28/what-happens-inside-an-ai-data-center-when-you-ask-chatgpt-a-question/"><strong>AI data center</strong></a> is not useful if the compute island cannot move data quickly enough to users, storage systems, other campuses, and cloud regions.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Japan Is Becoming More Attractive for North Asian AI</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AirTrunk founder and CEO Robin Khuda told Reuters that the company is seeing more customers look toward Japan from a North Asian perspective for geopolitical reasons. He also argued that AI infrastructure is becoming harder to deploy in the United States and is already difficult in Europe, potentially making Asia a major beneficiary.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That argument lines up with a broader constraint BitcoinVersus.Tech has been following: <a href="https://bitcoinversus.tech/2026/10/07/data-centers-goldman-us-capacity-90gw-2027-local-opposition/"><strong>AI data-center capacity is increasingly limited by power, permitting, and local opposition</strong></a>, not simply by access to GPUs. Regions that can secure large utility feeds, land, cooling infrastructure, fiber, and approvals may gain strategic importance even if they were not previously the center of the AI industry.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Blackstone Is Making the Same Infrastructure Bet at Global Scale</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AirTrunk is backed by Blackstone, which has been building a broad position across the AI infrastructure stack. <a href="https://www.blackstone.com/investing-in-ai/"><strong>Blackstone says</strong></a> its investments span data centers, hardware, and electricity, with AirTrunk serving as one of its major Asia-Pacific platforms.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Blackstone has also said its global data-center platforms are on track for record leasing as AI demand expands. The key point is that AI infrastructure spending is no longer only about buying GPUs. It increasingly includes the <a href="https://bitcoinversus.tech/2026/10/06/energy-what-is-electrical-substation-grid-power/"><strong>substations</strong></a>, cooling plants, fiber systems, switchgear, backup power, real estate, construction labor, and operating software needed to keep those GPUs productive.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Financing Is Part of the Infrastructure Story</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Reuters says AirTrunk secured a <strong>$1 billion green loan</strong> led by Sumitomo Mitsui Banking Corp., MUFG Bank, United Overseas Bank, and other lenders. AirTrunk had already completed a separate <a href="https://airtrunk.com/zh-hans/airtrunk-secures-largest-financing-for-a-data-centre-in-japan-with-us1-2-billion-green-loan-for-its-flagship-tokyo-campus/"><strong>$1.24 billion green financing</strong></a> for TOK1 earlier in 2026.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Green financing does not make the electricity itself renewable. It is a financing structure tied to eligible projects or sustainability requirements. The operating side still depends on how electricity is sourced, how efficiently the facility converts utility power into useful IT work, and whether operators use tools such as <a href="https://bitcoinversus.tech/2026/10/07/energy-what-is-power-purchase-agreement-ppa-wind-solar/"><strong>power purchase agreements</strong></a> or other clean-energy arrangements.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">AirTrunk’s Japan Platform Is Getting Much Larger</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.datacenterdynamics.com/en/news/airtrunk-plans-additional-1bn-investment-in-data-center-campus-in-inzai-japan/"><strong>Data Center Dynamics</strong></a> reports that the new spending would bring AirTrunk’s cumulative Japan investment to about <strong>$9 billion</strong>, with the company targeting roughly <strong>$27 billion to $30 billion</strong> over the next five years and more than 1 GW of Japanese capacity over time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If that expansion materializes, AirTrunk would be building not one AI facility but a national-scale digital-infrastructure platform. The comparison is increasingly with projects such as <a href="https://bitcoinversus.tech/2026/10/03/tcs-hypervault-264-acres-1gw-hyderabad-ai-data-center-campus/"><strong>1 GW AI campuses</strong></a>, where power procurement, transmission capacity, cooling, networking, and construction become as strategically important as the servers themselves.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What to Watch Next</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The biggest unanswered question is how quickly TOK1’s liquid-cooled AI capacity comes online and which accelerator platforms or cloud customers ultimately occupy it. Reuters did not identify customers or a deployment timetable.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The engineering signal, however, is already clear: AirTrunk is spending <strong>$1 billion</strong> not simply to make TOK1 larger, but to make existing megawatts capable of supporting a different class of workload. In the AI era, the valuable data center is no longer just the one with power—it is the one that can deliver that power, remove the heat, move the data, and keep all of it reliable at extreme density.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The $1 billion TOK1 investment and new green-loan details are based on Reuters’ October 7, 2026 report. AirTrunk’s public TOK1 materials were used for campus specifications. No story-specific X or YouTube post was embedded because an exact relevant, verifiable URL was not found; BitcoinVersus.Tech does not use filler or promotional X embeds.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support and donation options are available through BitcoinVersus.Tech.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. Content is provided for informational purposes.</p>
<!-- /wp:paragraph -->