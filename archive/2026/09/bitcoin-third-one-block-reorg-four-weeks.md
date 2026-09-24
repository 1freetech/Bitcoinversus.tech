# Bitcoin Records Third One-Block Reorg in Four Weeks

Published: 2026-09-24T12:13:38

Live: https://bitcoinversus.tech/2026/09/24/bitcoin-third-one-block-reorg-four-weeks/


<p class="wp-block-paragraph">A blockchain is an ordered record of blocks linked together through cryptographic references. In Bitcoin, each new block points back to the previous block, giving every block a specific height and creating a chronological chain of transaction history. Miners around the world compete to produce the next valid proof-of-work block. Because information takes time to travel across a global network, two miners can occasionally discover different valid blocks built on the same parent at nearly the same time. Different nodes may temporarily see different chain tips until additional proof of work causes the network to converge on the valid branch with the greatest accumulated work.</p>



<p class="wp-block-paragraph">That normal chain-selection process appeared again on September 11 when SpiderPool and AntPool produced competing valid Bitcoin blocks at height 966,500. Reporting based on Galaxy Research&#8217;s node observations identified the event as Bitcoin&#8217;s third one-block reorganization in roughly four weeks.</p>



<h2 class="wp-block-heading">Two valid blocks competed at height 966,500</h2>



<p class="wp-block-paragraph">Galaxy Research&#8217;s node initially observed SpiderPool&#8217;s version of block 966,500 and treated it as the current chain tip. AntPool had independently produced another valid block at the same height from the same parent. Once later miners extended the AntPool branch, that branch accumulated more proof of work and became the chain followed by the network. SpiderPool&#8217;s competing block was left outside the final chain.</p>



<p class="wp-block-paragraph">The event is commonly called a one-block reorganization, or reorg. It does not mean Bitcoin&#8217;s blockchain was permanently split, nor does the event by itself indicate a successful attack. Short races can occur naturally when valid blocks are discovered close together and propagate across the network at different speeds.</p>



<h2 class="wp-block-heading">Bitcoin has seen three recent one-block reorgs</h2>



<p class="wp-block-paragraph">Galaxy Research counted similar one-block events at heights 962,722 on August 16 and 963,853 on August 24. The September 11 event at 966,500 therefore became the third observed one-block reorganization during the four-week period.</p>



<p class="wp-block-paragraph">The distinction between a shallow reorg and a deeper chain rewrite matters. A one-block race can result from ordinary mining and network propagation. A sustained reorganization covering many confirmed blocks would deserve substantially more scrutiny because reversing a deeper section of Bitcoin&#8217;s history requires competing against more accumulated proof of work.</p>



<h2 class="wp-block-heading">Mining pools and block propagation matter</h2>



<p class="wp-block-paragraph">The event also provides a practical example of why mining-pool architecture and block propagation remain important parts of Bitcoin infrastructure. Pools coordinate large amounts of hashrate, distribute mining work and communicate newly discovered blocks to the network. Faster propagation reduces the amount of time in which miners may unknowingly continue building on an older chain tip.</p>



<p class="wp-block-paragraph">BitcoinVersus.tech has previously examined mining-pool decentralization through <a href="https://bitcoinversus.tech/2025/01/16/ocean-mining-pool-reaches-56-of-unique-bitcoin-miners/">OCEAN&#8217;s growth among unique Bitcoin miners</a> and earlier coverage explaining <a href="https://bitcoinversus.tech/2024/01/01/ocean-unveiled-jack-dorseys-new-wave-in-bitcoin-mining/">OCEAN&#8217;s approach to Bitcoin mining</a>. BitcoinVersus.tech has also covered <a href="https://bitcoinversus.tech/2025/05/02/marathon-digital-holdings-operates-the-only-us-based-proprietary-bitcoin-mining-pool/">MARA&#8217;s proprietary mining pool</a>, illustrating the different ways miners organize block production.</p>



<h2 class="wp-block-heading">Video: Bitcoin mining decentralization and pool architecture</h2>



<p class="wp-block-paragraph">A recent BTC Sessions discussion with OCEAN chairman Bob Burnett and Nacho Pauls provides additional background on mining-pool decentralization, block-template control, DATUM and how hashrate moves between pools. The discussion is broader than the September 11 reorganization, but it provides useful context for understanding why pool architecture and miner control remain active technical subjects.</p>



<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
<span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/1-lvwj4DcJs?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=en&#038;autohide=2&#038;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span>
</div></figure>



<h2 class="wp-block-heading">Confirmations remain important</h2>



<p class="wp-block-paragraph">A transaction contained only in a block that loses a short chain race can temporarily lose its confirmation. In many cases the transaction itself can still be included in a later block if it remains valid. Each additional block built on top of a transaction increases the accumulated proof of work behind its history, which is why Bitcoin users and services often wait for multiple confirmations when settling higher-value transactions.</p>



<p class="wp-block-paragraph">The recent reorg therefore provides a visible example of Bitcoin&#8217;s consensus process operating under real network conditions. Two valid candidate blocks existed at the same height, nodes briefly had different views of the tip, and subsequent proof of work caused the network to converge on one history.</p>



<p class="wp-block-paragraph"><strong>Sources:</strong> Recent reporting based on Galaxy Research&#8217;s node observations of block 966,500 and the embedded BTC Sessions interview with OCEAN&#8217;s Bob Burnett and Nacho Pauls for broader mining-pool and decentralization context.</p>



<p class="wp-block-paragraph"><strong><em><a href="https://bitcoinversus.tech/">BitcoinVersus.Tech</a> Editor&#8217;s Note:</em></strong><br><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>

