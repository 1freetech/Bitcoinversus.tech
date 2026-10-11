---
title: "What Is a Load Balancer?"
date: 2026-10-11
published: "2026-10-11T15:05:36"
modified: "2026-10-11T15:05:36"
wordpress_post_id: 23607
wordpress_status: publish
live_url: "https://bitcoinversus.tech/2026/10/11/what-is-a-load-balancer/"
category: "technology"
featured_media_id: 23604
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/what-is-a-load-balancer-featured-1200x630-1.jpg"
youtube: "https://www.youtube.com/watch?v=sCR3SAVdyCc"
youtube_2: "https://www.youtube.com/watch?v=xo5V9g9joFs"
social_embed: "https://www.reddit.com/r/homelab/comments/mzwrng/"
social_embed_2: "https://www.reddit.com/r/sysadmin/comments/o4fhrr/"
primary_source: "https://developers.cloudflare.com/learning-paths/load-balancing/concepts/load-balancing/"
secondary_source: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/"
archive_format: "final Gutenberg source"
---

<!-- wp:paragraph -->
<p><strong>A load balancer distributes incoming traffic across multiple servers instead of sending every request to one machine.</strong> Its basic job is simple: accept traffic, decide which healthy backend should handle it, and forward the request there.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That one function helps websites and applications scale beyond a single server. It can also improve availability because traffic can be redirected when one backend becomes unhealthy.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Load Balancers Exist</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Imagine an application running on one web server. As traffic grows, that server eventually has to process more connections, requests, memory use, and application work. One solution is vertical scaling: make that server larger. Another is horizontal scaling: run the application on several servers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once several servers can answer the same application request, something has to decide which server receives each new request. That is where the load balancer sits.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cloudflare’s <a href="https://developers.cloudflare.com/learning-paths/load-balancing/concepts/load-balancing/">load-balancing documentation</a> describes the core idea as spreading traffic across multiple servers so no single server carries all of the work.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=sCR3SAVdyCc","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">[youtube https://www.youtube.com/watch?v=sCR3SAVdyCc]</div><figcaption class="wp-element-caption"><em>IBM Technology explains how load balancers distribute requests and why they improve application performance and availability.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Basic Traffic Path</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The simplest path looks like this: <strong>client → load balancer → backend server</strong>. A user connects to the public application address. The load balancer receives the request and chooses one server from a group of available backends.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To the user, the application can still look like one service even though several servers are working behind it. This is closely related to the role of a <a href="https://bitcoinversus.tech/2026/10/11/what-is-a-reverse-proxy/">reverse proxy</a>, and some products can perform both jobs.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/homelab/comments/mzwrng/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/homelab/comments/mzwrng/
</div><figcaption class="wp-element-caption"><em>A homelab discussion gives a practical explanation of adding more web servers and using a load balancer to distribute requests between them.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How Does It Choose a Server?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Load balancers can use several traffic-distribution methods. The exact names vary by product, but common approaches include round robin, least connections, weighted distribution, hashing, geographic steering, and performance-based routing.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>Round robin:</strong> requests rotate across available servers.</li><li><strong>Least connections:</strong> traffic goes toward the server handling fewer active connections.</li><li><strong>Weighted:</strong> larger or faster servers can intentionally receive more traffic.</li><li><strong>Hash-based:</strong> information from the connection can help consistently choose a backend.</li><li><strong>Location or performance:</strong> distributed systems can steer users toward nearby or faster infrastructure.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Health Checks Matter</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Distributing traffic only works if the chosen servers are actually healthy. Load balancers therefore commonly perform health checks against their backends. A check may verify that a TCP port accepts connections, that an HTTP endpoint returns the expected status, or that a more application-specific test succeeds.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If a server fails its health checks, the load balancer can temporarily remove it from normal traffic. When the server becomes healthy again, it can be added back.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>NGINX documents this model in its <a href="https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/">HTTP load-balancing guide</a>, including upstream server groups, balancing methods, weights, and server availability.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=xo5V9g9joFs","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">[youtube https://www.youtube.com/watch?v=xo5V9g9joFs]</div><figcaption class="wp-element-caption"><em>TechWorld with Nana compares forward proxies, reverse proxies, and load balancers and shows where each fits in an application path.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Load Balancing Can Improve Availability</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A load balancer does not prevent servers from failing. What it can do is reduce how much a single server failure affects users. If five servers run the same application and one becomes unavailable, the load balancer can continue sending new traffic toward the remaining healthy servers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is one reason load balancing is common in data centers and cloud environments. It becomes part of a larger high-availability design rather than a guarantee of availability by itself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Is Session Affinity?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Some applications work best when the same user keeps reaching the same backend for a period of time. That behavior is commonly called <strong>session affinity</strong> or a <strong>sticky session</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sticky sessions can simplify some application designs, but they also reduce how freely traffic can move between servers. Modern applications often try to keep session state in shared systems so any healthy backend can serve the next request.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/sysadmin/comments/o4fhrr/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/sysadmin/comments/o4fhrr/
</div><figcaption class="wp-element-caption"><em>A sysadmin discussion shows how real load-balancer deployments often combine traffic distribution with HTTPS offload, caching, and other application-delivery functions.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Load Balancer vs. Reverse Proxy</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The two roles overlap, but the emphasis is different. A reverse proxy represents backend servers and accepts requests for them. A load balancer specifically distributes traffic across multiple destinations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One product can do both. NGINX, HAProxy, cloud application load balancers, and other platforms can receive requests as a reverse proxy while also selecting among multiple upstream servers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A <a href="https://bitcoinversus.tech/2026/10/11/what-is-a-proxy-server/">forward proxy</a> is different: it acts for clients rather than for the servers receiving the application traffic.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Layer 4 vs. Layer 7 Load Balancing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A Layer 4 load balancer makes decisions using transport-level information such as IP addresses and TCP or UDP ports. A Layer 7 load balancer understands application-layer protocols such as HTTP and can make routing decisions using hostnames, paths, headers, cookies, or other request details.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction affects performance, flexibility, observability, and how much application information the load balancer needs to understand.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">DNS Can Also Distribute Traffic</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Traffic distribution does not always happen through an inline appliance or software proxy. DNS can return different addresses for the same service, and global systems can steer users between regions or data centers before a connection is established.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is different from an inline load balancer because DNS answers can be cached and the traffic may then flow directly to the selected address. BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-what-happens-when-you-type-a-website-into-your-browser/">browser-to-website walkthrough</a> explains where DNS fits into the connection process.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Common Places You See Load Balancing</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li>Public websites running on several web servers.</li><li>APIs distributed across application instances.</li><li>Cloud services operating across availability zones or regions.</li><li>Kubernetes and container environments.</li><li>Database read replicas and some clustered database systems.</li><li>Enterprise applications where one frontend address represents several backend systems.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Easy Way to Remember It</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>A load balancer is the traffic coordinator in front of a group of servers.</strong> It receives work, checks which backends are available, and sends each request toward an appropriate destination.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The point is not simply to make every server equally busy. The larger goal is to keep an application responsive, scalable, and available while traffic and server health change.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Editor’s Note</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>A load balancer is one component of a resilient architecture. High availability also depends on healthy backend servers, redundant networking, working DNS, application design, monitoring, and enough spare capacity to survive failures.</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to improve the credibility of the information on this platform. If you would like to support the research, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on technical and financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->