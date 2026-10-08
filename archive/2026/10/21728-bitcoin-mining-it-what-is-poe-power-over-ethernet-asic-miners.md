---
post_id: 21728
title: "Bitcoin Mining IT: What Is PoE? Why Cameras and Wi-Fi Use Ethernet Power but ASIC Miners Don’t"
live_url: "https://bitcoinversus.tech/2026/10/07/bitcoin-mining-it-what-is-poe-power-over-ethernet-asic-miners/"
featured_media_id: 21724
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-poe-bitcoin-mining-it-1200x630-1.jpg"
status: publish
---
<!-- wp:paragraph -->
<p><strong>Power over Ethernet</strong>, or <strong>PoE</strong>, lets one Ethernet cable carry both network data and electrical power to a compatible device. In a Bitcoin mining operation, that is extremely useful for <strong>security cameras</strong>, <strong>wireless access points</strong>, <strong>environmental sensors</strong>, <strong>VoIP phones</strong>, and some management devices.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But PoE is not how the <a href="https://bitcoinversus.tech/2026/08/24/bitcoin-asic-architecture-bitmain-canaan-microbt-bitdeer/"><strong>ASIC miners</strong></a> themselves are powered. A modern mining machine operates in the <strong>kilowatt</strong> range, while standardized PoE delivers power in the <strong>tens of watts</strong>. The network cable can carry the miner’s data, but the miner’s PSU still needs a dedicated high-power electrical circuit.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=AOVCPaShkmM","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=AOVCPaShkmM
</div><figcaption class="wp-element-caption"><em>Cisco Tech Talk explains Power over Ethernet, including how PoE switches power devices such as access points, IP phones, and security cameras over the network cable.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">PoE Combines Two Jobs Into One Cable</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A normal Ethernet connection carries network traffic between a device and a <a href="https://bitcoinversus.tech/2026/10/03/osntc-012-network-switch-basics/"><strong>network switch</strong></a>. PoE adds DC power to that same twisted-pair cable so the endpoint does not need a separate wall adapter or local electrical outlet.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/infra/poe/poe-configuration-guide/g-poe/c-poe.html"><strong>Cisco</strong></a> describes PoE as a family of IEEE Ethernet power standards in which compatible network equipment supplies power over the same copper cabling used for data.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":21725,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/poe-injector-body.jpg?w=1024" alt="A Power over Ethernet injector with Ethernet ports, used to add power to an Ethernet cable for a compatible device." class="wp-image-21725" /><figcaption class="wp-element-caption"><em>A real PoE injector. One side receives Ethernet and power; the output sends both toward a compatible powered device. Photo: deavmi / Wikimedia Commons, CC BY-SA.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Power Source Is Called the PSE</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The device supplying power is called <strong>Power Sourcing Equipment</strong>, or <strong>PSE</strong>. A PoE-capable Ethernet switch is the most common example. It provides normal switching functions while also supplying DC power to selected ports.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A separate <strong>PoE injector</strong> can perform the same power-insertion job when the existing switch does not support PoE. The injector sits between the switch and endpoint, adding power to the Ethernet cable without replacing the upstream network switch.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Camera or Access Point Is the Powered Device</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The endpoint receiving PoE is called the <strong>Powered Device</strong>, or <strong>PD</strong>. Common PDs include IP cameras, Wi-Fi access points, phones, badge readers, sensors, small computers, and building-control hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That architecture fits a Bitcoin mining site well because many support devices are mounted far from convenient outlets. A camera may be high on a container wall. An access point may be above the mining floor. An environmental sensor may sit near an intake or exhaust path. One <a href="https://bitcoinversus.tech/2026/10/06/osntc-017-copper-ethernet-cabling-rj45-t568b-cat5e-cat6-cat6a-100m-poe-cable-testing/"><strong>copper Ethernet cable</strong></a> can provide both connectivity and power.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">PoE Has Multiple Power Levels</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>PoE has evolved through several IEEE standards. Cisco lists the major categories as <strong>IEEE 802.3af</strong> Type 1 at up to <strong>15.4 W</strong> from the PSE, <strong>802.3at</strong> Type 2 at up to <strong>30 W</strong>, and <strong>802.3bt</strong> Type 3 and Type 4 at up to <strong>60 W</strong> and <strong>90 W</strong> respectively.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The <a href="https://ethernetalliance.org/blog/2020/06/15/11762/"><strong>Ethernet Alliance</strong></a> notes that cable losses mean the maximum power available at the powered device is lower than the amount launched by the switch. Type 4 can provide up to about <strong>71.3 W at the PD</strong> even though the PSE can supply as much as 90 W.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why an ASIC Miner Cannot Run on PoE</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is where the scale difference becomes obvious. Even high-power standardized PoE is measured in tens of watts. A production <strong>Bitcoin ASIC miner</strong> usually requires thousands of watts.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The miner’s <a href="https://bitcoinversus.tech/2026/04/23/bitcoin-mining-how-to-replace-a-psu-on-an-s19-kpro-server-120th-hardware-review/"><strong>power supply unit</strong></a> converts high-power facility electricity into the low-voltage, high-current power used by the <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-hardware-what-is-hashboard-asic-board/"><strong>hashboards and ASIC chips</strong></a>. That electrical load is orders of magnitude above what an RJ45 PoE port was designed to deliver.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So the ASIC’s Ethernet port carries <strong>data only</strong>. The heavy electrical power arrives through separate PSU cables and facility distribution equipment.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Miner Still Uses Ordinary Ethernet</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An ASIC miner still needs Ethernet networking even though it does not need Ethernet power. Its <a href="https://bitcoinversus.tech/2024/09/03/how-to-replace-a-bitmain-control-board-control-board-overview/"><strong>control board</strong></a> contains the network interface that connects to the switch, obtains an IP address, reaches DNS and the gateway, and establishes a <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-it-what-is-stratum-asic-miners-pools/"><strong>Stratum</strong></a> session with the configured mining pool.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-nic-network-interface-card-servers-asic-miners/"><strong>NIC explainer</strong></a> covers that endpoint networking role. On an ASIC miner, the Ethernet interface is integrated into the controller rather than installed as a large PCIe network card.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">PoE Is Perfect for Security Cameras Around a Mine</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Large mining facilities need physical-security coverage across gates, yards, containers, substations, warehouses, repair areas, and control rooms. IP cameras are one of the most obvious PoE use cases because they need both a network path and continuous low-voltage power.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With PoE, a camera can be mounted where it has the best field of view instead of where an AC outlet happens to exist. The switch can also make it easier to reboot a camera remotely by cycling power on the Ethernet port.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/troyhunt/status/1630681663285121024","type":"rich","providerNameSlug":"x","responsive":true,"className":"is-provider-x wp-block-embed-x"} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/troyhunt/status/1630681663285121024
</div><figcaption class="wp-element-caption"><em>Troy Hunt shows a real-world Ubiquiti security-camera deployment—the kind of networked physical-security environment where PoE is commonly used to simplify camera installation.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Wireless Access Points Are Another Natural PoE Device</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Wi-Fi access points</strong> are commonly ceiling- or pole-mounted where electrical outlets are inconvenient. Cisco’s current access-point power guidance describes PoE as a way to deliver both data and power through one twisted-pair Ethernet cable.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>At a Bitcoin mine, Wi-Fi may support technician tablets, phones, scanners, laptops, test equipment, cameras, and maintenance workflows. The miners themselves should still use reliable wired Ethernet where possible, but technicians often need wireless connectivity around the site.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">PoE Can Power Environmental Monitoring</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Mining operations care deeply about <strong>temperature</strong>, airflow, humidity, leak detection, and other environmental conditions. Small networked sensors can often run comfortably within PoE power budgets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those sensors can feed the same monitoring stack used for <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-snmp-bitcoin-mining-switch-pdu-monitoring/"><strong>SNMP</strong></a>, miner APIs, intelligent PDUs, and switch telemetry. The result is a more complete view of the relationship between environmental conditions and <a href="https://bitcoinversus.tech/2026/10/06/bitcoin-mining-hardware-nameplate-wall-facility-joules-per-terahash/"><strong>facility-level J/TH</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The PoE Switch Has a Total Power Budget</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A PoE switch cannot necessarily provide the maximum possible wattage on every port simultaneously. The switch has a <strong>PoE power budget</strong> that represents how much total DC power it can distribute across all attached powered devices.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, a switch may have 24 PoE-capable ports but only enough internal power capacity to run a smaller number of high-power access points at full draw. Network design therefore has to consider both port count and available wattage.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">PoE Classification Helps Avoid Overpowering Devices</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Standard PoE is not simply “48 volts blindly applied to an Ethernet cable.” The PSE detects and classifies a compatible powered device before allocating power. IEEE power classes help the switch understand how much power the endpoint may require.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This negotiation is one reason standardized PoE is preferable to improvised passive-power arrangements. It improves interoperability and reduces the risk of applying power to equipment that is not designed to receive it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Passive PoE Is Not the Same Thing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Passive PoE</strong> systems can place voltage on Ethernet conductors without the full IEEE detection and classification process. Some legacy wireless and embedded equipment has used this approach.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That can create compatibility problems. A technician should never assume that every device labeled “PoE” follows the same voltage, pinout, power class, or negotiation method. The device and power source specifications still need to match.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Cable Quality Matters More When the Cable Carries Power</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A copper Ethernet cable carrying both data and current has to deal with electrical resistance and heat. Poor terminations, damaged conductors, undersized conductors, excessive bundle heat, or low-quality cable can create voltage drop and reliability problems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why good <a href="https://bitcoinversus.tech/2026/10/06/osntc-017-copper-ethernet-cabling-rj45-t568b-cat5e-cat6-cat6a-100m-poe-cable-testing/"><strong>T568B termination and cable testing</strong></a> matter even more on PoE links. The same cable has to maintain signal integrity while carrying DC power.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">PoE Still Follows Ethernet Distance Limits</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Standard twisted-pair Ethernet channels are generally designed around a maximum channel distance of about <strong>100 meters</strong>. PoE has to operate within that same cabling environment while accounting for voltage loss along the conductors.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If a camera or access point is farther away, designers may use fiber for the network path and provide local power at the remote location, or use properly engineered Ethernet extension hardware instead of simply exceeding the cable specification.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">VLANs Can Separate Cameras From Mining Management</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Just because cameras and miners share physical switching infrastructure does not mean they should share the same logical network. <a href="https://bitcoinversus.tech/2026/09/30/osntc-004-vlan-basics/"><strong>VLANs</strong></a> can separate security cameras, access points, ASIC management, office devices, and other infrastructure into different broadcast domains and security zones.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That improves troubleshooting and limits unnecessary lateral access. A camera compromise should not automatically place an attacker on the same unrestricted management network as thousands of miners.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">SNMP Can Monitor the PoE Ports Themselves</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Managed PoE switches can expose port state, device status, and power metrics through monitoring systems. BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-snmp-bitcoin-mining-switch-pdu-monitoring/"><strong>SNMP guide for Bitcoin mines</strong></a> shows how network and facility data can be pulled into one operations view.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That means a dashboard can potentially show that a camera went offline because its switch port lost power rather than because the camera itself failed. The same mindset applies to ASIC operations: observe the shared infrastructure before replacing endpoint hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">PoE Power Is Tiny Compared With Mining Power Distribution</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A PoE camera drawing 10 or 20 watts and a Bitcoin miner drawing several thousand watts live in completely different electrical worlds. The camera can be powered through the network switch. The miner needs a dedicated <a href="https://bitcoinversus.tech/2026/10/03/oseec-009-electrical-power-distribution-switchgear-switchboards-panelboards-pdus/"><strong>power-distribution path</strong></a> through switchgear, panels, PDUs, cables, and a PSU.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is also why the Ethernet port remains energized even when the main hashing load is managed separately. The network and the high-power compute system intersect at the control board, but they are not powered the same way.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Simple Way to Remember It</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>PoE is for low-power network devices. The ASIC’s Ethernet cable carries data; the miner’s PSU carries the real power.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Use PoE for cameras, access points, sensors, phones, badge readers, and other small networked devices around a mining site. Use dedicated electrical distribution for the <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-hardware-what-is-hashboard-asic-board/"><strong>hashboards</strong></a>, PSUs, cooling systems, and other kilowatt-class mining loads.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes Power over Ethernet a perfect example of the IT systems living beside Bitcoin mining hardware: it does not power the hashing itself, but it can power much of the infrastructure that keeps the site secure, connected, observable, and manageable.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>PoE power classes, available switch budget, powered-device consumption, cable category, conductor size, distance, and environmental temperature all affect real deployments. Verify the exact IEEE PoE type and manufacturer specifications before connecting equipment.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Featured image: Allied Telesis AT-GS950-8POE switch, via Wikimedia Commons, CC BY-SA 4.0; cropped to 1200×630 for BitcoinVersus.Tech. In-body PoE injector image: deavmi / Wikimedia Commons, CC BY-SA.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support and donation options are available through BitcoinVersus.Tech.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. Content is provided for informational purposes.</p>
<!-- /wp:paragraph -->