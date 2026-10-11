---
title: "What Is a Reverse Proxy?"
date: 2026-10-11
published: "2026-10-11T14:20:22"
modified: "2026-10-11T14:20:22"
wordpress_post_id: 23553
wordpress_status: publish
live_url: "https://bitcoinversus.tech/2026/10/11/what-is-a-reverse-proxy/"
category: "evergreen"
featured_media_id: 23552
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/what-is-a-reverse-proxy-featured-1200x630-1.jpg"
youtube: "https://www.youtube.com/watch?v=xo5V9g9joFs"
youtube_2: "https://www.youtube.com/watch?v=iInUBOVeBCc"
social_embed: "https://www.reddit.com/r/homelab/comments/1qstulu/why_is_it_good_practice_to_use_a_reverse_proxy/"
social_embed_2: "https://www.reddit.com/r/selfhosted/comments/1pbv485/please_help_me_understand_reverse_proxies_and_how/"
primary_source: "https://www.cloudflare.com/en-gb/learning/cdn/glossary/reverse-proxy/"
secondary_source: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy"
archive_format: "final Gutenberg source"
---

<!-- wp:paragraph -->
<p><strong>A reverse proxy is a server that sits in front of one or more backend servers and handles incoming requests on their behalf.</strong> Instead of a visitor connecting directly to the application server, the visitor connects to the reverse proxy. The proxy then decides where the request should go, receives the backend response, and sends that response back to the user.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This pattern is everywhere on the modern web. Reverse proxies can route multiple websites through one public address, terminate HTTPS, distribute traffic, cache content, apply security rules, and keep backend servers from being directly exposed to the Internet.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Basic Idea</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Without a reverse proxy, a browser can connect directly to a web server. With a reverse proxy, the path becomes <strong>browser → reverse proxy → backend server</strong>. The browser may never know which internal machine actually handled the request.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cloudflare’s <a href="https://www.cloudflare.com/en-gb/learning/cdn/glossary/reverse-proxy/">reverse-proxy explainer</a> describes the same model: the reverse proxy sits in front of origin servers, intercepts client requests, forwards them to the appropriate backend, and returns the response.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=xo5V9g9joFs","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">[youtube https://www.youtube.com/watch?v=xo5V9g9joFs]</div><figcaption class="wp-element-caption"><em>TechWorld with Nana compares forward proxies, reverse proxies, and load balancers with practical examples.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Reverse Proxy vs. Forward Proxy</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The words sound similar, but the direction matters. A <strong>forward proxy</strong> represents clients. A company might send employee web traffic through a forward proxy before it reaches the Internet. A <strong>reverse proxy</strong> represents servers. Internet users connect to it first, and it passes their requests to the protected backend systems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An easy memory trick is: <strong>forward proxy = in front of users; reverse proxy = in front of servers.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">One Public Address Can Serve Many Applications</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A reverse proxy can inspect the hostname or URL path and send traffic to different internal applications. For example, <code>photos.example.com</code> can go to one server while <code>status.example.com</code> goes to another, even if both services share one public IP address.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is especially useful in home labs, cloud deployments, and container environments where many services may be running on different internal ports. Instead of exposing every port directly, administrators can create one controlled entry point.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/homelab/comments/1qstulu/why_is_it_good_practice_to_use_a_reverse_proxy/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/homelab/comments/1qstulu/why_is_it_good_practice_to_use_a_reverse_proxy/
</div><figcaption class="wp-element-caption"><em>A homelab discussion highlights common practical reasons for a reverse proxy: one entry point, centralized TLS, routing, monitoring, authentication, and rate limiting.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Reverse Proxy Can Handle HTTPS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One of the most common jobs for a reverse proxy is <strong>TLS termination</strong>. The proxy receives the encrypted HTTPS connection from the browser, handles the certificate and encryption work, and then forwards the request to a backend server.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The connection from the proxy to the backend can also be encrypted. NGINX documents both ordinary reverse proxying and <a href="https://docs.nginx.com/nginx/admin-guide/security-controls/securing-http-traffic-upstream/">encrypted connections to upstream servers</a>. The important point is that putting HTTPS at the proxy does not automatically mean internal traffic must be unencrypted.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want the protocol background first, BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2025/05/01/https-vs-http/">HTTPS vs HTTP</a> explainer covers why HTTPS encrypts browser-to-server traffic.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Reverse Proxies Can Load Balance</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A busy application may run on several backend servers instead of one. The reverse proxy can distribute incoming requests across that pool. If one server becomes overloaded or unavailable, traffic can be directed to healthier servers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is why reverse proxies and load balancers often appear together. They are not exactly the same thing, but one product can perform both jobs. NGINX’s <a href="https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy">reverse-proxy documentation</a> explains that proxying can pass requests to a named group of servers, which allows requests to be distributed among backends.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=iInUBOVeBCc","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">[youtube https://www.youtube.com/watch?v=iInUBOVeBCc]</div><figcaption class="wp-element-caption"><em>TechWorld with Nana explains NGINX as a web server, reverse proxy, load balancer, cache, and TLS termination point.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Caching Can Reduce Backend Work</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A reverse proxy can sometimes save a copy of a response and reuse it for later visitors instead of asking the backend to rebuild the same content every time. That can reduce server load and improve response time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Caching is not appropriate for every response. Personalized pages, private account data, and rapidly changing information require careful cache rules. But for suitable public content, caching at the proxy can substantially reduce repeated work.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Reverse Proxy Can Add Security Controls</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Because traffic passes through the proxy first, administrators can enforce rules in one place. A reverse proxy can support rate limits, authentication, access-control rules, request-size limits, logging, bot filtering, or integration with a web application firewall.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It can also reduce direct exposure of backend servers. Cloudflare notes that a reverse proxy can prevent visitors from communicating directly with an origin server and can help conceal the origin’s public IP address.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That does <strong>not</strong> make the backend magically secure. A vulnerable application is still vulnerable if malicious requests are allowed through. The proxy itself also becomes important infrastructure that must be patched, monitored, and configured correctly.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/selfhosted/comments/1pbv485/please_help_me_understand_reverse_proxies_and_how/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/selfhosted/comments/1pbv485/please_help_me_understand_reverse_proxies_and_how/
</div><figcaption class="wp-element-caption"><em>A self-hosting discussion makes the important distinction between hiding backend services and actually securing the applications behind the proxy.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Reverse Proxies Also Affect Headers</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When a proxy sits between a client and a backend, the backend may otherwise see the proxy as the immediate source of the request. Reverse-proxy software therefore commonly forwards information such as the original hostname, protocol, or client address through trusted headers or proxy protocols.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those details matter for logging, redirects, security policies, and application behavior. Incorrect proxy-header configuration can cause confusing bugs—for example, an application may think every request came from the proxy’s internal IP or may generate the wrong HTTPS redirect.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How This Connects to DNS and CORS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>DNS normally points a public hostname toward the address users should contact. With a reverse proxy, that address may belong to the proxy rather than the final application server. BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-what-happens-when-you-type-a-website-into-your-browser/">browser-to-website walkthrough</a> explains the broader DNS, TCP, TLS, HTTP, and rendering sequence.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A reverse proxy can also participate in <a href="https://bitcoinversus.tech/2026/10/11/what-is-cors/">CORS</a> problems because it may add, remove, cache, or forward HTTP response headers. If an application’s cross-origin policy looks correct but the browser still rejects the response, the proxy layer is one place worth checking.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Common Reverse Proxy Software</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>NGINX:</strong> widely used as a web server, reverse proxy, cache, and load balancer.</li><li><strong>HAProxy:</strong> focused heavily on proxying and load balancing.</li><li><strong>Caddy:</strong> popular for simpler configuration and automatic HTTPS.</li><li><strong>Traefik:</strong> commonly used with containers and dynamic service discovery.</li><li><strong>Cloudflare and other CDNs:</strong> operate reverse-proxy infrastructure at global scale in front of origin servers.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">When Do You Need One?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You do not need a reverse proxy for every server. A single private application accessed only through a VPN may work perfectly without one. A reverse proxy becomes especially useful when you need to publish several services, centralize certificates, route multiple hostnames, add common security rules, cache content, or distribute traffic across multiple backends.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Easy Way to Remember It</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>A reverse proxy is the front desk for your servers.</strong> Users talk to the front desk first. The front desk decides which backend should handle the request, can enforce rules on the way in, and returns the backend’s response without requiring the user to know what is happening behind it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That simple position—between users and servers—is what makes reverse proxies useful for routing, HTTPS, load balancing, caching, observability, and security.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Editor’s Note</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>A reverse proxy is not a replacement for patching, authentication, authorization, network segmentation, or secure application design. Treat it as one layer in the architecture, not as a guarantee that the systems behind it are safe.</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to improve the credibility of the information on this platform. If you would like to support the research, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on technical and financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->
