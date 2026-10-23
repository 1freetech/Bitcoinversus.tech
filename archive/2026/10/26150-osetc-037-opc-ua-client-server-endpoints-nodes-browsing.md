---
post_id: 26150
series: "Open-Source Electrical Technician Certification"
lesson_number: 37
title: "OSETC.037: OPC UA Client/Server Basics — Endpoints, Nodes, Browsing, and Read-Only Diagnostics"
status: "publish"
slug: "osetc-037-opc-ua-client-server-endpoints-nodes-browsing-read-only-diagnostics"
live_url: "https://bitcoinversus.tech/2026/10/22/osetc-037-opc-ua-client-server-endpoints-nodes-browsing-read-only-diagnostics/"
featured_media_id: 26149
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/osetc-037-opc-ua-client-server-split-diptych.jpg"
categories: [547916683, 2509703]
publication_date: "2026-10-22"
qa_note: "WordPress rendered 2 YouTube iframe embeds, 2 authentic topical OPC Foundation X blockquotes with widget scripts. Independent interactive video playback not tested."
---

<!-- wp:paragraph --><p><strong>Open-Source Electrical Technician Certification | OSETC.037 | Industrial Communications | Focus: finding and reading industrial data through an OPC UA client/server connection.</strong></p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Elementary Overview</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p><strong>OPC UA</strong> means <strong>Open Platform Communications Unified Architecture</strong>. Think of a machine controller that knows a motor's speed, operating mode, and fault status. An OPC UA <strong>server</strong> exposes selected information in an organized directory called an <strong>address space</strong>; an OPC UA <strong>client</strong>, such as a supervisory application or diagnostic program, connects and reads the information it is allowed to access. The point is to share meaningful industrial data among systems without requiring every client to understand the PLC's internal memory map.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>The <a href="https://opcfoundation.org/about/what-is-opc/">OPC Foundation</a> maintains the standards. OPC UA is not the same thing as EtherCAT, PROFINET, Modbus TCP, or EtherNet/IP. Those earlier lessons focus on specific device and network exchanges; this lesson focuses on finding and interpreting information exposed by industrial software. OPC UA can run on many operating systems and can use protected channels and authenticated identities.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Continue the electrical-technician networking sequence from <a href="https://bitcoinversus.tech/2026/10/14/osetc-036-ethercat-basics-frame-processing-topology-distributed-clocks-working-counters-troubleshooting/">OSETC.036 EtherCAT</a>, <a href="https://bitcoinversus.tech/2026/10/13/osetc-035-profinet-basics-device-names-dcp-gsdml-real-time-io-troubleshooting/">OSETC.035 PROFINET</a>, and <a href="https://bitcoinversus.tech/2026/10/11/osetc-033-modbus-tcp-ethernet-port-502-mbap-unit-id-registers-troubleshooting/">OSETC.033 Modbus TCP</a>. A technician may encounter all these technologies in one plant.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=_rQHcKwvRJw]
<!-- /wp:shortcode -->

<!-- wp:heading --><h2 class="wp-block-heading">Learning Objectives</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li>Identify what the OPC UA client and server do.</li><li>Recognize an OPC UA endpoint URL and why its host, port, and security settings must match the actual server.</li><li>Explain the difference between an address space, an Object, a Variable, and a NodeId.</li><li>Browse a read-only simulation safely, recording the value, type, status, and timestamp when available.</li><li>Separate communication failures from permissions, certificate trust, and unknown-node problems.</li></ul><!-- /wp:list -->

<!-- wp:heading --><h2 class="wp-block-heading">Clients and Servers Are Software Roles</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>A server exposes information through standardized services. A client discovers that information, sends requests, and receives responses. A modern PLC or edge computer may host a server while a SCADA package, historian, desktop diagnostic browser, or engineering application acts as a client. One server can serve multiple clients subject to configuration limits; one client can access multiple servers. A product can perform both roles.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>An OPC UA client/server <strong>Read</strong> request is not the same as an EtherCAT cyclic exchange. Do not assume an OPC UA connection is a certified real-time motion-control path merely because both technologies use Ethernet. The OPC Foundation also defines an OPC UA <em>PubSub</em> model, but Publisher/Subscriber transport is a separate topic and is not the focus of this lesson.</p><!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/OPC-UA-Server-Client.jpg" alt="Diagram showing multiple OPC UA client requests and multiple OPC UA server responses" /><figcaption class="wp-element-caption">Conceptual OPC UA client/server request-and-response diagram by <a href="https://commons.wikimedia.org/wiki/File:OPC-UA-Server-Client.jpg">Monkhiker</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. This illustrates software roles, not dedicated wiring or deterministic control timing.</figcaption></figure><!-- /wp:image -->

<!-- wp:heading --><h2 class="wp-block-heading">What Is an Endpoint?</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>An <strong>endpoint</strong> tells a client how to reach a server and which protocol and security configuration to use. A familiar illustrative OPC UA TCP endpoint is <code>opc.tcp://192.0.2.10:4840</code>. Here <code>opc.tcp</code> indicates the protocol mapping, <code>192.0.2.10</code> is an example-only documentation IP address, and <code>4840</code> is a commonly used port—not a universal requirement. Actual devices may advertise a hostname, another port, or a different endpoint path.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Technicians should record the endpoint <strong>from the configured server</strong>, not guess from an internet example. A reachable IP address does not prove the application will accept a session. The client must select a compatible endpoint and security mode, establish a secure channel where required, authenticate as configured, and create a session. Trusting a random certificate or disabling encryption to make a connection succeed is not an appropriate production shortcut.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">How the Address Space Works</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>The server publishes an <strong>address space</strong>: Objects and Variables are represented as <strong>Nodes</strong> joined by typed references. Objects can stand for machines, motors, pumps, or sensors; Variables can carry their reported properties and values. Other NodeClasses exist, but Objects and Variables are enough for an introductory read-only exercise. The server may make different branches available depending on roles and configuration.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>Every Node has a <strong>NodeId</strong> within its server. A fictional pump-speed variable might use <code>ns=2;s=Plant.Line1.Pump1.SpeedRPM</code>. The <code>ns</code> portion identifies a namespace index in that server's namespace table; the <code>s</code> indicates a string identifier. An integer-style identifier uses <code>i</code> instead. The fictional identifier is not a standard vendor tag, and namespace indexes can vary between servers. Always browse the real server to capture the correct NodeId.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p>A Variable can expose a <strong>Value</strong>, <strong>DataType</strong>, and other Attributes. The returned DataValue may include status and timestamps. A display name such as “Pump Speed” is intended for readability; it should not be treated as the same thing as the globally stable identifier of the variable. Unit metadata, if provided by the information model, should be checked rather than assumed from the name.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[embed]https://twitter.com/OPCFoundation/status/1600509662125867008[/embed]
<!-- /wp:shortcode -->

<!-- wp:heading --><h2 class="wp-block-heading">Practice: Browse and Read a Test Server</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>Use an authorized lab or simulator with a documented sample endpoint. A browser such as UaExpert can display endpoint choices and an address-space tree. Keep this introductory task <strong>read-only</strong>; it does not require changing production controller tags or enabling write access.</p><!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>Start a test OPC UA server in a lab, or obtain a training endpoint from the instructor. Note the actual endpoint hostname, port, and allowed security configuration.</li><li>Open the approved OPC UA client. Select the server's advertised endpoint, apply the prescribed identity and certificate-trust workflow, and confirm the session is established.</li><li>Browse the <strong>Objects</strong> branch. OPC UA's standard Objects folder is identified by <code>ns=0;i=85</code>; find the lab's application-specific device object beneath it.</li><li>Select one read-only Variable, such as a simulated process temperature. Record its full NodeId, display name, data type, and reported current value.</li><li>Where provided, record the <strong>StatusCode</strong> and source/server timestamps. A number without its quality indication may not represent a valid current process reading.</li><li>Disconnect gracefully. Save a brief lab record with server identity, endpoint, node path, NodeId, data type, value, quality, and time, omitting credentials or secret keys.</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p>Example observation in a <em>fictional</em> simulator: <code>ns=2;s=Demo.Tank1.Level</code> returns <code>63.2</code>, a floating-point numeric type, and a <code>Good</code> status code. This is a sample training result, not a live measurement or a value expected from any particular vendor.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[youtube https://www.youtube.com/watch?v=bz-bpN9ZZvQ]
<!-- /wp:shortcode -->

<!-- wp:heading --><h2 class="wp-block-heading">Read-Only Troubleshooting</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><strong>No network route or connection refused:</strong> confirm permitted reachability, endpoint hostname, firewall rule, listening port, and server state through approved controls.</li><li><strong>Endpoint appears but session fails:</strong> compare the advertised security policy, application certificates, user permissions, time synchronization, and trust stores. Preserve strong security.</li><li><strong>NodeId not found:</strong> browse from Objects again, check namespace mapping, device project changes, and spelling. Do not hard-code a namespace index copied from another site.</li><li><strong>Value displayed but status is Bad or Uncertain:</strong> look for upstream sensor/controller problems, stale or disconnected sources, and server diagnostics before using the value in a report.</li><li><strong>A browser reads but a historian cannot:</strong> compare each application's endpoint, security identity, roles, supported services, and requested node attributes.</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p>A failure to read a variable does not prove the network cable is defective. Check from layer to layer: physical and network transport, application endpoint, certificate/identity, session, node browsing, then data-quality status. Record each verified observation before replacing hardware or changing configuration.</p><!-- /wp:paragraph -->

<!-- wp:shortcode -->
[embed]https://twitter.com/OPCFoundation/status/1359929066875457539[/embed]
<!-- /wp:shortcode -->

<!-- wp:heading --><h2 class="wp-block-heading">What OPC UA Does Not Guarantee</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>OPC UA supplies standard mechanisms for industrial information exchange, information modeling, and security, but <strong>implementation quality, device configuration, permissions, reliability, and suitable use cases still matter</strong>. It does not automatically validate a sensor, secure a misconfigured network, eliminate stale values, or replace dedicated protective controls. Safety-rated interlocks and emergency stops require their own approved engineering and standards.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Knowledge Check</h2><!-- /wp:heading -->

<!-- wp:list {"ordered":true} --><ol class="wp-block-list"><li>What role does an OPC UA <strong>server</strong> play in a basic client/server exchange?</li><li>Why should a technician browse for the <strong>NodeId</strong> instead of assuming a display name is the identifier?</li><li>Which two attributes or metadata fields help you decide whether a returned numeric value can be trusted?</li><li>Does OPC UA client/server data browsing alone guarantee deterministic servo synchronization?</li><li>What should you investigate before blaming cabling when an endpoint is reachable but a session cannot open?</li></ol><!-- /wp:list -->

<!-- wp:paragraph --><p><strong>Answers:</strong> (1) It exposes modeled information and responds to client services. (2) NodeIds identify nodes within the server and namespace indexes or configuration may vary. (3) The StatusCode and timestamps are key, alongside the value and data type. (4) No. (5) Matching endpoint security, certificates, identity, roles, and session configuration.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Conclusion and Next Lesson</h2><!-- /wp:heading -->

<!-- wp:paragraph --><p>An OPC UA technician starts by understanding the endpoint, then the address space, then the exact node and its quality indicators. This provides a structured path from a network connection to interpretable industrial data. Future lessons can separately introduce subscriptions, certificates and trust management, and PubSub; none should be confused with the simple read-only workflow taught here.</p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><strong>Next OSETC lesson:</strong> OSETC.038 — OPC UA Subscriptions and Monitored Items.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2 class="wp-block-heading">Sources and Further Reading</h2><!-- /wp:heading -->

<!-- wp:list --><ul class="wp-block-list"><li><a href="https://reference.opcfoundation.org/specs/OPC-10000-1/full">OPC Foundation, OPC UA Part 1: Overview and Concepts (v1.05.06)</a>.</li><li><a href="https://reference.opcfoundation.org/specs/OPC-10000-4/full">OPC Foundation, OPC UA Part 4: Services</a>.</li><li><a href="https://opcfoundation.org/about/opc-technologies/opc-ua/">OPC Foundation, Unified Architecture overview</a>.</li><li><a href="https://commons.wikimedia.org/wiki/File:OPC-UA-Server-Client.jpg">Wikimedia Commons image and license details</a>.</li></ul><!-- /wp:list -->

<!-- wp:paragraph --><p><em><strong>Safety:</strong> industrial communications can carry information about operating machinery. Perform these exercises on approved training systems. Do not override PLC safeguards, alter operating setpoints, disable certificate checks, or connect unauthorized laptops to production control networks.</em></p><!-- /wp:paragraph -->

<!-- wp:paragraph --><p><em><strong>BitcoinVersus.Tech Editor's Note:</strong> We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p><!-- /wp:paragraph -->

<!-- wp:image {"id":24043,"sizeSlug":"full","linkDestination":"none"} --><figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png" class="wp-image-24043" alt="Original BitcoinVersus.Tech donation QR code for 5000 sats" /></figure><!-- /wp:image -->

<!-- wp:paragraph --><p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p><!-- /wp:paragraph -->
