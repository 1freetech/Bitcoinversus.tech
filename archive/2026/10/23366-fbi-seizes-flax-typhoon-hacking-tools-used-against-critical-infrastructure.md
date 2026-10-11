---
post_id: 23366
title: "FBI Seizes Flax Typhoon Hacking Tools Used Against Critical Infrastructure"
live_url: "https://bitcoinversus.tech/2026/10/10/fbi-seizes-flax-typhoon-hacking-tools-used-against-critical-infrastructure/"
featured_media_id: 23360
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-flax-typhoon-cover-2026-10-10.jpg"
status: publish
---

<!-- wp:paragraph -->
<p>The FBI and U.S. Justice Department have seized seven internet domains tied to two hacking tools used in a China-linked campaign against critical infrastructure, cutting off key infrastructure behind a threat operation the private sector tracks as Flax Typhoon.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>According to the <a href="https://www.justice.gov/opa/pr/justice-department-and-fbi-seize-vulnerability-scanning-and-spear-phishing-tools-operated">Justice Department</a>, the tools — <strong>Microscan</strong> and <strong>FishHub</strong> — were operated by people working for Beijing-based Integrity Technology Group, a cybersecurity company the U.S. says has contracts with the Chinese government. The seizure matters because the tools were not aimed at one narrow target. Authorities say they were used to scan, phish, and in some cases compromise power, aviation, education, and other networks in multiple countries.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What the FBI took offline</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Microscan was used for reconnaissance. Investigators say Integrity Tech combined the scanner with a botnet made from internet-connected devices infected with a Mirai variant, letting operators probe networks from infrastructure that could look unrelated to the real attacker.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Targets identified in court filings included a South Carolina power company, Japanese and Polish airports, Taiwanese natural-gas and electric-power companies, a multinational nonprofit organization, and two Taiwanese universities. The allegation is not that every scanned target was successfully breached; scanning and confirmed intrusion are separate facts. In an <a href="https://twitter.com/FBICyberDiv/status/2108256413084422599">October 8 post</a>, FBI Cyber Division said the seized infrastructure had been used to scan and, in some cases, infiltrate U.S. critical infrastructure.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/FBICyberDiv/status/2108256413084422599","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/FBICyberDiv/status/2108256413084422599
</div><figcaption class="wp-element-caption"><em>FBI Cyber Division describes the October 8 disruption of Flax Typhoon-linked hacking infrastructure.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>FishHub played a different role. Authorities say it supported spear-phishing activity and could deliver follow-on malware after an initial compromise. That malware could provide remote access, search victim systems for selected files, and send those files to attacker-controlled servers. The Justice Department says roughly 20 Taiwanese universities were confirmed FishHub victims.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why this is bigger than seven domains</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The important technical idea is dependency. A hacking platform can be sophisticated, but it still needs infrastructure for authentication, command-and-control, malware delivery, routing, or persistence. If law enforcement can identify those dependencies and obtain court authority to seize them, it can break a platform without first arresting every operator behind it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is the second public U.S. disruption of Integrity Tech infrastructure in two years. In 2024, federal authorities dismantled a botnet linked to the same company that included more than 200,000 consumer devices. The latest operation goes after the scanning and phishing systems that can turn reconnaissance into access.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=Oqv3aPBqXW4","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=Oqv3aPBqXW4
</div><figcaption class="wp-element-caption"><em>The 2024 Aspen Cyber Summit included the FBI’s earlier public disclosure of the Flax Typhoon botnet operation.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>The broader pattern is increasingly familiar: compromise routers, cameras, servers, or other internet-facing equipment; use those systems as a proxy layer; scan for more weaknesses; then move into higher-value targets. That is why basic network hygiene still matters. BitcoinVersus has previously covered how a <a href="https://bitcoinversus.tech/2026/10/08/fbi-missed-security-patch-shinyhunters-peoplesoft-breach/">missed security patch can become an entry point</a>, how <a href="https://bitcoinversus.tech/2026/09/29/packet-capture-explained-how-network-engineers-inspect-traffic-and-troubleshoot-networks/">packet capture helps engineers inspect suspicious traffic</a>, and how <a href="https://bitcoinversus.tech/2026/06/01/vlans-explain-how-modern-networks-stay-organized-and-secure/">VLAN segmentation can limit lateral movement</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What defenders should take from it</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li>Patch internet-facing systems quickly, especially known exploited vulnerabilities.</li><li>Reduce unnecessary exposed services, management interfaces, and remote-access paths.</li><li>Use multifactor authentication wherever possible, especially on administrative accounts.</li><li>Watch for unusual VPN software, remote-access tools, credential spraying, and outbound connections that do not match normal business traffic.</li><li>Assume a compromised edge device can become infrastructure for attacks against someone else, not just a problem confined to the device owner.</li></ul>
<!-- /wp:list -->

<!-- wp:embed {"url":"https://twitter.com/FBICyberDiv/status/2108295170982650033","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/FBICyberDiv/status/2108295170982650033
</div><figcaption class="wp-element-caption"><em>FBI Cyber Division points network defenders to the joint advisory on Integrity Tech and Flax Typhoon activity.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>The <a href="https://apnews.com/article/8948c5d83180675bcf21cd98426eabf7">Associated Press</a> reported that officials described the latest action as rendering the two tools inoperable while warning that authorities will keep watching for attempts to rebuild the infrastructure. That caveat matters. Domain seizures can remove capabilities quickly, but they do not erase the operators, the underlying tradecraft, or the demand for those services.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=cexm2GBJksQ","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=cexm2GBJksQ
</div><figcaption class="wp-element-caption"><em>An FBI video from August 2026 shows the same domain-seizure playbook being used against a separate China-linked hacking platform targeting U.S. critical infrastructure.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What comes next</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The immediate win is disruption: fewer working domains, fewer functioning tools, and more indicators for defenders to hunt. The longer-term question is whether Integrity Tech or related operators can replace the seized infrastructure fast enough to restore the same capability — or whether repeated takedowns make that business model slower, more expensive, and easier to detect.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Editor’s Note: This article distinguishes allegations in court filings from confirmed victim activity and will be updated if authorities publish additional technical findings.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Support independent technology reporting:</strong> Bitcoin donations help fund BitcoinVersus.Tech research and publishing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Disclaimer: BitcoinVersus.Tech provides technology news and analysis for informational purposes only.</em></p>
<!-- /wp:paragraph -->