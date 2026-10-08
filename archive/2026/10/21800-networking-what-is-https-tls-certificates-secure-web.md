---
post_id: 21800
title: "Networking: What Is HTTPS? How TLS Certificates Secure the Web"
live_url: "https://bitcoinversus.tech/2026/10/08/networking-what-is-https-tls-certificates-secure-web/"
featured_media_id: 21797
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-https-tls-locked-laptop-1200x630-1.jpg"
status: publish
---
<!-- wp:paragraph -->
<p>When a website begins with <strong>https://</strong>, the browser is using <strong>HTTP over Transport Layer Security</strong>. TLS protects the connection so data can travel between a client and server with confidentiality, integrity, and authentication rather than moving across the network as readable, easily modified plaintext.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That secure connection sits on top of the same networking stack BitcoinVersus.Tech has already broken down through <a href="https://bitcoinversus.tech/2026/10/01/osntc-006-dns-basics/"><strong>DNS</strong></a>, <a href="https://bitcoinversus.tech/2026/10/04/osntc-014-tcp-udp-transport-basics/"><strong>TCP</strong></a>, <a href="https://bitcoinversus.tech/2026/10/03/osntc-013-router-basics/"><strong>routers</strong></a>, and <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-nic-network-interface-card-servers-asic-miners/"><strong>network interface cards</strong></a>. HTTPS is not a separate Internet—it is a protected application-layer conversation carried across that infrastructure.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=0TLDTodL7Lc","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=0TLDTodL7Lc
</div><figcaption class="wp-element-caption"><em>Computerphile explains Transport Layer Security and how it evolved from SSL into the protocol used across the modern web.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">HTTP vs. HTTPS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>HTTP</strong> defines how browsers and web servers request and return web content. <strong>HTTPS</strong> uses HTTP inside a TLS-protected connection. The web request is still HTTP, but TLS encrypts the traffic before it crosses the network.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This matters because plain HTTP can expose content to systems along the network path and can allow traffic to be modified in transit. <a href="https://letsencrypt.org/docs/why-all-https/"><strong>Let’s Encrypt</strong></a> recommends HTTPS for all websites because encryption protects privacy while integrity checks help prevent third parties from silently changing traffic between the user and server.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">TLS Replaced SSL</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You will still hear people say “SSL certificate,” but modern secure web connections use <strong>TLS</strong>. SSL was the older family of protocols. TLS succeeded it and continued evolving as cryptographic design, browser security, and network performance improved.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://developer.mozilla.org/en-US/docs/Glossary/TLS"><strong>Mozilla’s MDN documentation</strong></a> describes TLS as the protocol applications use to communicate securely across a network and notes that modern browsers expect servers to present valid digital certificates when establishing secure connections.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What a TLS Certificate Actually Does</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A TLS certificate is a digitally signed document that binds a public key to an identity such as a domain name. When your browser connects to a website, the certificate helps the browser verify that the public key it received belongs to the site it intended to reach.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is where <strong>certificate authorities</strong> become important. A browser or <a href="https://bitcoinversus.tech/2026/10/06/ositc-001-it-systems-fundamentals-hardware-operating-systems-networks-troubleshooting/"><strong>operating system</strong></a> carries a trust store containing root certificates for recognized CAs. A website certificate can be trusted when the browser can build a valid chain from that certificate through intermediate certificates to a trusted root and when the certificate is valid for the hostname and time period involved.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That trust system is why changes to the public CA ecosystem matter. BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/10/03/cloudflare-public-ca-post-quantum-merkle-tree-certificates/"><strong>Cloudflare’s work on a public certificate authority and post-quantum certificate designs</strong></a>, which targets the same web-of-trust infrastructure that browsers depend on today.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Browser Still Needs DNS First</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Before a browser can establish TLS with a website, it generally needs an <a href="https://bitcoinversus.tech/2026/09/27/open-source-networking-lesson-1-ip-address/"><strong>IP address</strong></a> for the hostname. That makes <a href="https://bitcoinversus.tech/2026/10/01/osntc-006-dns-basics/"><strong>DNS resolution</strong></a> one of the first steps in the chain.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The broader sequence is covered in BitcoinVersus.Tech’s explainer on <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-what-happens-when-you-type-a-website-into-your-browser/"><strong>what happens when you type a website into a browser</strong></a>: resolve the name, establish network connectivity, negotiate the secure session, send the web request, receive content, and render the page.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Then TCP Usually Establishes the Transport Connection</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Traditional HTTPS commonly runs over TCP, usually using destination port 443. TCP provides an ordered, reliable byte stream underneath TLS. The <a href="https://bitcoinversus.tech/2026/10/04/osntc-014-tcp-udp-transport-basics/"><strong>TCP transport layer</strong></a> handles sequence numbers, acknowledgments, retransmission, and delivery ordering while TLS handles cryptographic security above it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Routers, <a href="https://bitcoinversus.tech/2026/10/05/osntc-015-nat-pat-basics-private-addresses-port-translation-state-tables-troubleshooting/"><strong>NAT/PAT devices</strong></a>, firewalls, and <a href="https://bitcoinversus.tech/2026/10/06/networking-what-is-top-of-rack-switch-data-center/"><strong>switches</strong></a> still forward the encrypted packets normally. They may be able to observe metadata such as source and destination addresses, timing, and traffic volume, but properly encrypted application data is not readable simply because a device forwards the packets.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Happens During the TLS Handshake?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The <strong>TLS handshake</strong> is the setup phase in which the client and server agree on cryptographic parameters, authenticate the server, and establish shared secret material that can be used to protect the rest of the session.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=86cQJ0MMses","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=86cQJ0MMses
</div><figcaption class="wp-element-caption"><em>Computerphile walks through the TLS handshake and how a client and server establish a protected session.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>In simplified form, the client announces supported protocol options, the server selects compatible parameters and presents its certificate, the client validates that certificate, both sides derive session keys, and the handshake is cryptographically confirmed. After that setup, bulk application traffic is protected with efficient symmetric encryption.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Public-Key Cryptography Does Not Encrypt Every Web Packet</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A common misunderstanding is that the server’s public/private key pair directly encrypts every byte transferred during the session. Modern TLS instead uses asymmetric cryptography mainly for authentication and key establishment, then uses symmetric session keys for high-speed data protection.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That division makes practical sense. Public-key operations are powerful for establishing identity and secrets between systems that have never communicated before, while symmetric cryptography is far more efficient for protecting large streams of application traffic.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">TLS Protects Three Big Things</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Confidentiality</strong> means an observer should not be able to read protected application data. <strong>Integrity</strong> means tampering should be detectable. <strong>Authentication</strong> means the client can verify that it is communicating with the holder of the private key associated with the certificate for the intended hostname.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those protections work together. Encryption without authentication could still leave a user talking securely to the wrong machine. Authentication without integrity would not stop undetected modification. TLS combines the pieces into one secure channel.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What the Padlock Does Not Mean</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A valid HTTPS connection does <strong>not</strong> prove that a website is honest, safe, or free of malware. It means the browser established a cryptographically protected connection to a site presenting a certificate valid for that identity under the browser’s trust rules.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A phishing site can obtain its own valid certificate. TLS can securely connect you to a malicious site just as effectively as it can connect you to a legitimate one. Users still need to inspect the domain, application behavior, and security warnings.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Certificate Errors Matter</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Browsers warn when certificates are expired, issued for the wrong hostname, signed by an untrusted authority, revoked under supported checking mechanisms, or otherwise invalid. Those errors matter because the browser can no longer establish the expected chain of trust.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ignoring certificate warnings can defeat the authentication layer that makes HTTPS useful. In enterprise environments, administrators sometimes deploy their own trusted certificates for inspection or internal services, but those systems must be managed deliberately because adding a trusted root changes what the endpoint is willing to trust.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">TLS 1.3 Simplified and Hardened the Protocol</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.rfc-editor.org/rfc/rfc8446"><strong>RFC 8446</strong></a> defines TLS 1.3. The version removed obsolete cryptographic options, simplified negotiation, and reduced handshake overhead compared with older generations of TLS.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That matters for both security and performance. A secure protocol is easier to operate when weak legacy choices are removed, and reducing setup work can lower connection latency—an issue that connects directly to <a href="https://bitcoinversus.tech/2026/10/06/networking-bandwidth-vs-throughput-vs-latency-whats-the-difference/"><strong>network latency</strong></a> and user-perceived application responsiveness.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Can Packet Capture Still See HTTPS?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Yes. A <a href="https://bitcoinversus.tech/2026/09/29/packet-capture-explained-how-network-engineers-inspect-traffic-and-troubleshoot-networks/"><strong>packet capture</strong></a> can still record encrypted HTTPS traffic. The technician can inspect packet timing, IP addresses, transport behavior, handshake metadata, retransmissions, and many protocol-level details.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What the capture normally cannot do is simply display protected application payloads in readable form without access to the appropriate session secrets or a controlled inspection architecture. Encryption changes what troubleshooting tools can see, but it does not make the network invisible.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Firewalls Still Matter With HTTPS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>TLS does not replace a <a href="https://bitcoinversus.tech/2026/10/01/fortinet-asic-hardware-inside-the-security-processors-powering-fortigate-firewalls/"><strong>firewall</strong></a>. A firewall controls which traffic is permitted between systems or networks; TLS protects the contents and identity of a connection. Those are different jobs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction is visible in systems such as <a href="https://bitcoinversus.tech/2026/10/01/fortinet-asic-hardware-inside-the-security-processors-powering-fortigate-firewalls/"><strong>FortiGate firewalls</strong></a>, where specialized hardware can accelerate inspection, policy enforcement, and cryptographic workloads while endpoints and servers still participate in their own TLS sessions.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Simple Way to Remember HTTPS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>HTTPS is HTTP carried through a TLS-protected connection.</strong> DNS helps find the server, the network stack carries the packets, the certificate helps authenticate the site, the handshake establishes shared secrets, and symmetric encryption protects the application data that follows.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why HTTPS is one of the most important pieces of everyday Internet infrastructure. It does not make a website trustworthy by itself, but it gives browsers and servers a standard way to communicate privately, detect tampering, and authenticate secure connections at global scale.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Featured photograph: Yuri Samoilov via Wikimedia Commons/Flickr, licensed CC BY 2.0; cropped to 1200×630. The image is used as a visual metaphor for secure computing and does not depict the TLS protocol itself.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support and donation options are available through BitcoinVersus.Tech.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. Content is provided for informational purposes.</p>
<!-- /wp:paragraph -->