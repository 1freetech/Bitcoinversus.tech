---
post_id: 23256
title: "AI Server Imports Face a New Power-Delivery Patent Fight"
live_url: "https://bitcoinversus.tech/2026/10/10/ai-server-imports-vicor-vertical-power-delivery-itc/"
featured_media_id: 23255
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-vicor-vpd-itc-ai-server-investigation-1200x630-1.jpg"
status: publish
---

<!-- wp:paragraph -->
<p><strong>The U.S. International Trade Commission opened a new investigation on October 9 into the power-delivery hardware sitting underneath some of the world’s most advanced computing systems. At first glance, it looks like another patent fight. The public record points to something bigger: a battle over who gets paid for the “last inch” of electricity feeding AI processors — and whether the threat of an import exclusion order can become leverage in that negotiation.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The case, <a href="https://www.usitc.gov/press_room/news_release/2026/er1009_69342.htm">USITC Investigation No. 337-TA-1526</a>, was opened after Vicor Corporation filed a complaint alleging infringement involving certain vertical power delivery systems, their components and computing systems containing them. The named respondents stretch across the AI hardware supply chain: Delta Electronics, Infineon, Luxshare, Monolithic Power Systems, Flex, Celestica, Quanta, Foxconn and Ingrasys entities are among those identified by the Commission.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Vicor is asking for a limited exclusion order and cease-and-desist orders. That is important because a Section 337 remedy can reach imported products rather than merely produce a damages award years later. It is equally important not to jump ahead of the evidence: the ITC explicitly says that opening the investigation is <strong>not</strong> a decision on the merits.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The patent fight sits underneath the processor</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The district-court litigation filed alongside the ITC campaign identifies U.S. Patent No. 10,903,734, titled <a href="https://patents.justia.com/patent/10903734">“Delivering power to semiconductor loads.”</a> Its claims describe power-conversion circuitry, interconnections and capacitance arranged in a vertical stack under a semiconductor die.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The engineering problem is real regardless of how the patent dispute is ultimately decided. Modern AI processors operate at very low core voltages while demanding enormous current. Vicor’s own technical material describes individual clustered processors drawing roughly 600 to 1,000 amps, with peak requirements that can exceed 1,500 amps. Long copper paths at those current levels waste power as heat through I²R losses.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Traditional lateral power delivery places voltage regulation beside the processor and pushes current across the board. Vertical power delivery moves part of the power-conversion system directly beneath the processor so the high-current path becomes shorter. That is why the dispute is not about the giant power shelf visible at the back of an AI rack. It is about the final centimeters — and eventually millimeters — between the board-level power system and the silicon itself.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"custom"} -->
<figure class="wp-block-image size-large"><a href="https://www.vicorpower.com/resource-library/articles/high-performance-computing/powering-clustered-ai-processors"><img src="https://www.vicorpower.com/files/live/sites/vicor/files/images/resources-library/articles/Vicor-article-image-powering-clustered-processors-fig-2.png?t=767" alt="Vicor illustration showing a vertical power delivery current multiplier positioned beneath an AI processor." /></a><figcaption class="wp-element-caption"><em>Vicor’s technical illustration places the current multiplier directly beneath the processor, shortening the high-current path through the motherboard. Source: Vicor.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech previously broke down <a href="https://bitcoinversus.tech/2026/08/05/the-components-inside-the-nvidia-gb200-nvl72-ai-rack-kitchen-analogy/">the components inside NVIDIA’s GB200 NVL72 rack</a>, including the rack-level power shelves and roughly 50–51V DC distribution. The new Vicor dispute is farther downstream in the electrical chain. It concerns how that distributed power is converted and delivered at the point of load.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=Hs2yXBlEIWs","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=Hs2yXBlEIWs
</div><figcaption class="wp-element-caption"><em>A rack-scale Blackwell system provides useful context for where processor power delivery fits inside the much larger AI infrastructure stack.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Vicor has built a licensing business around this leverage</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The most revealing part of the story is not only the complaint. It is Vicor’s own description of its licensing strategy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On September 16, less than a week after filing the new VPD complaint, Vicor announced that an unnamed “leading AI OEM” had taken a <a href="https://www.vicorpower.com/press-room/2026/vicor-licenses-vpd-to-a-leading-ai-oem">non-exclusive VPD license</a>. The license allows that OEM to procure covered VPD modules from suppliers that themselves may not hold a Vicor license.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Vicor’s public <a href="https://www.vicorpower.com/ip-licensing">IP-licensing page</a> goes further. The company says its royalty structure favors early licensees and describes a “Royalty Escalator” that starts at 1× and approaches 7× by the time an exclusion order is enforced by U.S. Customs and Border Protection. Vicor also says licensed OEMs and hyperscalers can continue sourcing covered products from multiple suppliers without being affected by an exclusion order.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That framing matters because it reveals the economic mechanism behind the legal campaign. Import risk is not simply a courtroom remedy at the end of the process; Vicor openly presents the possibility of exclusion as an incentive to license earlier.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The strategy is already financially meaningful. In its <a href="https://www.sec.gov/Archives/edgar/data/751978/000119312526322462/vicr-20260630.htm">second-quarter 2026 SEC filing</a>, Vicor reported $30.426 million in royalty revenue out of $143.352 million in total net revenue for the quarter. Royalty revenue was $10.353 million in the same quarter a year earlier. The company said the increase in Advanced Products revenue was driven in part by higher royalty revenue from a new license agreement.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That does not prove Vicor’s new infringement allegations. It does show that licensing is no side project. Roughly one-fifth of Vicor’s Q2 net revenue came from royalties, making the intersection of patents, supply-chain design and import enforcement economically material to the company.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A previous Vicor exclusion order already pulled Blackwell into the argument</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The strongest evidence that downstream AI systems can become entangled in a power-component dispute comes from an earlier Vicor case.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In 2025, the ITC issued a limited exclusion order in Investigation No. 337-TA-1370 involving different Vicor power-converter patents. A subsequent <a href="https://rulings.cbp.gov/api/getdoc/hq/2025/H348257.pdf">Customs ruling, HQ H348257</a>, shows NVIDIA and Quanta asking whether NVIDIA Blackwell products manufactured or imported by Quanta were caught by that order. NVIDIA was not a respondent in the original investigation, but Quanta was.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Customs concluded that downstream products of a named respondent could fall within the exclusion order even when they incorporated upstream components from non-respondent third parties, provided the products remained within the investigation’s scope and infringed the asserted patents. The ruling held that the Blackwell products at issue were subject to exclusion unless and until another basis for admissibility was established.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That history is why the phrase “computing systems containing the same” in the new VPD investigation deserves attention. The legal question is not automatically confined to a tiny regulator module if the downstream server itself falls within an eventual remedial order.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is an equally important counterexample. In February 2026, CBP found that redesigned Delta and Cyntec power converters were <a href="https://rulings.cbp.gov/api/getdoc/hq/2026/H347983.pdf">not subject to the earlier exclusion order</a> after the respondents presented redesigned products and Vicor did not oppose the request. Import restrictions can create leverage, but they are not a permanent blanket ban on every future design.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why the power layer is becoming strategic</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AI infrastructure has spent years focused on GPU supply. The next constraint is increasingly everything required to make those GPUs usable: electricity, transformers, cooling, networking and the power electronics sitting centimeters from the silicon.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech recently covered <a href="https://bitcoinversus.tech/2026/10/08/infineon-27kw-three-phase-psu-ai-server-racks/">Infineon’s 27 kW three-phase AI server power supply</a> and <a href="https://bitcoinversus.tech/2026/10/05/data-centers-lambda-19-blackwell-nodes-16-node-power-budget/">Lambda fitting 19 Blackwell nodes into a 16-node power budget</a>. Those stories attack the power problem at different layers, but the direction is the same: useful AI compute is becoming a power-delivery engineering problem as much as a semiconductor problem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>NVIDIA has made the same constraint visible from the software side, describing ways to coordinate compute and facility power inside a fixed electrical envelope in <a href="https://twitter.com/NVIDIAAIInfra/status/2090837117710536832">its official AI Infrastructure post on X</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/NVIDIAAIInfra/status/2090837117710536832","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/NVIDIAAIInfra/status/2090837117710536832
</div><figcaption class="wp-element-caption"><em>NVIDIA’s fixed-power-budget work shows why every layer of AI power delivery — from the facility to the processor — is becoming a performance constraint.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What the new investigation does — and does not — prove</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The ITC has not found that Delta, Infineon, Luxshare, Monolithic Power Systems, Flex, Celestica, Quanta, Foxconn, Ingrasys or the other named entities infringed Vicor’s VPD patent claims. The Commission has only decided that the allegations warrant an investigation.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The next phase will matter more than the headline. The administrative law judge will set an evidentiary process, and the Commission says it will establish a target date for completing the investigation within 45 days of institution. Respondents will have the opportunity to contest infringement, validity, scope and other elements of Vicor’s case.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The questions BitcoinVersus.Tech will be watching are straightforward: which specific VPD implementations are accused, how the respondents map their designs against the asserted claims, whether more OEMs take licenses before a merits ruling, and whether an eventual remedy — if Vicor wins — reaches complete AI systems in the same way the earlier power-converter dispute reached downstream computing hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>For now, the most defensible conclusion is narrower than either side’s marketing language: the legal fight over AI infrastructure has moved underneath the GPU. Power delivery is becoming valuable enough that the hardware feeding the processor can now carry patent, licensing and import risk of its own.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">BitcoinVersus.Tech</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Advertisement</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>Follow BitcoinVersus.Tech for independent reporting on semiconductors, AI infrastructure, energy, data centers and Bitcoin mining.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><strong><em><sup>BitcoinVersus.Tech Editor's Note:</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em><sup>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->