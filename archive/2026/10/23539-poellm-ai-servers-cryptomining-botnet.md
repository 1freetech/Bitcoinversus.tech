---
post_id: 23539
title: "PoeLLM Turns AI Servers Into a Cryptomining Botnet"
live_url: "https://bitcoinversus.tech/2026/10/11/poellm-ai-servers-cryptomining-botnet/"
featured_media_id: 23536
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/poellm-cryptomining-malware-cover.jpg"
status: publish
---

<!-- wp:paragraph -->
<p><strong>A malware campaign called PoeLLM has compromised more than 3,400 servers by targeting exposed AI and open-source services, then turning those machines into cryptocurrency miners, vulnerability scanners, and launch points for new attacks. Its strangest trick is how infected systems find their command server: they read four changing words from a poem hosted on GitHub.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.lumen.com/blog/en-us/canto-incognito-tracking-the-poellm-malware">Lumen’s Black Lotus Labs</a> calls the campaign Canto Incognito and says it has been active since at least April 2026. Most observed victims were running vulnerable internet-facing services such as LiteLLM, Ollama, Gotenberg, and Gitea. The malware can deploy XMRig and Iron miners, connect compromised systems to mining infrastructure, and reuse infected hosts to scan for additional targets.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://assets.lumen.com/is/image/Lumen/img-blog-BLL-canto-incognito-4" alt="Black Lotus Labs overview of the Canto Incognito PoeLLM campaign" /><figcaption class="wp-element-caption"><em>Black Lotus Labs’ campaign overview shows compromised AI and open-source servers being used for cryptomining, scanning, and additional exploitation.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The command server is hidden inside a poem</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>PoeLLM does not simply store one fixed command-and-control address inside the malware. Instead, it retrieves a short poem from a GitHub repository and extracts four specific words or phrases from fixed positions in the verse. A hard-coded conversion table turns those words into four numbers, which become an IPv4 address.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When the operator wants infected machines to use a new command server, only those key words need to change. Black Lotus Labs observed 11 poem revisions after the first commit on April 13. The structure stayed mostly the same while the important words changed, allowing infected systems to calculate a new address without replacing the malware binary.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/technology/comments/1x0i313/poetry_is_the_new_ai_security_threat_as_poellm/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/technology/comments/1x0i313/poetry_is_the_new_ai_security_threat_as_poellm/
</div><figcaption class="wp-element-caption"><em>The PoeLLM disclosure sparked discussion over the difference between an AI-content attack and what actually happened here: vulnerable AI infrastructure was exploited, while the poem served as a changing C2 lookup mechanism.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why AI servers are attractive cryptomining targets</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Self-hosted AI infrastructure can combine three things attackers like: powerful CPUs or GPUs, internet-accessible services, and relatively new software stacks that administrators may not yet treat like mature production infrastructure. If a machine already has expensive compute installed, the attacker does not have to pay for the hardware or electricity needed to mine cryptocurrency.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes local-model infrastructure valuable even when the model itself is not the target. BitcoinVersus previously covered <a href="https://bitcoinversus.tech/2026/09/17/ai-rankings-2026-top-6-ai-platforms-for-privacy/">privacy-focused AI platforms including self-hosted tools such as Ollama</a>. PoeLLM shows the other side of self-hosting: keeping inference local can improve data control, but the server still needs the same exposure management, patching, and monitoring as any other internet-facing system.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=0nPkGvNS0n8","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=0nPkGvNS0n8
</div><figcaption class="wp-element-caption"><em>IBM Technology discusses the broader security problem around LiteLLM and AI-agent infrastructure, including why rapidly adopted AI gateways have become high-value targets.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Exposed ports turned convenience into attack surface</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Black Lotus Labs found large numbers of victims with services exposed directly to the public internet. The campaign scanned common service ports, identified vulnerable applications, and then reused already-compromised machines as additional scanning and exploitation workers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is where a basic networking concept becomes a security boundary. BitcoinVersus’ <a href="https://bitcoinversus.tech/2026/10/10/why-127-0-0-1-is-localhost-what-loopback-actually-does/">127.0.0.1 and localhost explainer</a> describes the difference between a service listening only on the local machine and one reachable through a network interface. A development service that is safe on loopback can become a completely different risk when it is bound publicly and left unfiltered.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The lesson is not that every LiteLLM or Ollama deployment is compromised. Exposure, vulnerable versions, and configuration all matter. The useful question for operators is whether a service that was intended for local or controlled access is now reachable from the public internet without a firewall, reverse proxy, authentication layer, or timely patching.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">PoeLLM steals compute, then uses the victim to find more victims</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Once installed, PoeLLM can run cryptocurrency miners and also turn the infected machine into part of the botnet’s expansion system. Researchers observed compromised hosts scanning other systems and forwarding exploit attempts, which reduces the attacker’s need to operate a large pool of infrastructure directly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The operation has also shown signs of testing distributed attacks against SSH and other login portals. That capability was described as immature in the Black Lotus Labs research, so it should not be overstated as a proven large-scale brute-force operation. It does, however, show that the botnet can be repurposed beyond mining.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For administrators, SSH exposure deserves the same inventory discipline as AI APIs. BitcoinVersus’ <a href="https://bitcoinversus.tech/2026/10/10/what-is-an-ssh-key-why-safer-than-password/">SSH key explainer</a> covers why key-based authentication is generally stronger than passwords, but authentication strength does not replace patching, rate limiting, network controls, or removing services that never needed to be public.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=PSVBujrwAcE","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=PSVBujrwAcE
</div><figcaption class="wp-element-caption"><em>Acronis explains a Linux cryptojacking campaign that used XMRig, useful background for understanding why attackers repeatedly target exposed Linux compute for illicit mining.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The 3,400 figure is servers, not companies</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Black Lotus Labs says PoeLLM has impacted more than 3,400 victim servers and exceeded 800 active infected servers per day at peak activity. Those numbers should not be translated into 3,400 companies or 3,400 unique organizations. One operator may run many servers, and infrastructure can change over time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.tomshardware.com/tech-industry/cyber-security/cryptomining-malware-used-poetry-to-infect-more-than-3-400-servers-researchers-say-four-words-in-the-poellm-verse-changed-11-times-point-the-botnet-to-new-servers">Tom’s Hardware’s October 11 report</a> highlights the same cumulative server count and the 11 poem changes, while noting that at least one likely LiteLLM entry path already had a fix available. The important operational point is that internet-facing software can remain exploitable long after a patch exists if deployments are never inventoried or upgraded.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What operators should check</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>External exposure:</strong> Inventory AI gateways, local-model APIs, developer services, document converters, dashboards, and management interfaces reachable from the internet.</li><li><strong>Patch level:</strong> Update exposed services and review vendor advisories for vulnerabilities affecting the exact versions in use.</li><li><strong>Network behavior:</strong> Investigate unexpected mining-pool traffic, unexplained high CPU or GPU utilization, unusual outbound scanning, and connections to published PoeLLM indicators.</li><li><strong>Access controls:</strong> Restrict services to required networks, use firewalls or authenticated reverse proxies, and avoid exposing development defaults directly to the internet.</li><li><strong>Compromise scope:</strong> If a server is infected, treat it as more than a stolen-compute problem. Check credentials, adjacent systems, persistence, and outbound activity before returning it to service.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The poem is clever, but exposure is the bigger story</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The poem makes PoeLLM memorable because it gives the operator a simple way to rotate command infrastructure through an ordinary public file. But the campaign did not compromise thousands of servers because poetry defeated AI models. It succeeded because vulnerable services were reachable, valuable compute was sitting behind them, and infected machines could be recycled into the next wave of scanning.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction matters. The unusual C2 technique is new; the defensive lesson is familiar. Know what is exposed, patch it quickly, restrict what does not need public access, and monitor the expensive compute that attackers have every financial incentive to steal.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>BitcoinVersus.Tech Editor’s Note:</strong> PoeLLM is the malware family; Canto Incognito is Black Lotus Labs’ name for the campaign. The reported 3,400 figure refers to victim servers observed over the campaign, not 3,400 confirmed organizations.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/bitcoinversus","type":"rich","providerNameSlug":"x","responsive":true,"className":"wp-block-embed-x"} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/bitcoinversus
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Follow BitcoinVersus.Tech on X for cybersecurity, AI infrastructure, Linux, networking, Bitcoin mining, and data-center reporting.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Support independent technology reporting:</strong> Bitcoin donations help fund BitcoinVersus.Tech research and publishing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Disclaimer: BitcoinVersus.Tech provides technology news and analysis for informational purposes only.</em></p>
<!-- /wp:paragraph -->