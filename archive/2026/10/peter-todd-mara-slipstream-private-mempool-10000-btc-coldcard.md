<!-- wp:paragraph -->
<p><strong>Bitcoin mining infrastructure just picked up one of Bitcoin’s best-known transaction-relay developers.</strong> MARA Foundation says longtime Bitcoin Core contributor Peter Todd has joined as lead maintainer of Slipstream, its private transaction-submission service that sends eligible Bitcoin transactions directly to MARA Pool instead of broadcasting them through the public peer-to-peer network first.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The timing is notable because Slipstream recently demonstrated a practical security use beyond unusual transaction formats. MARA Foundation says the service helped users move <strong>more than 10,000 BTC</strong> out of affected Coldcard multisig wallets during the July 2026 firmware-vulnerability response.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Peter Todd Is Now Leading Slipstream</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In its <a href="https://foundation.mara.com/articles/peter-todd-joins-mara-foundation-slipstream">October announcement</a>, MARA Foundation named Todd lead maintainer of Slipstream. Todd is a longtime Bitcoin Core contributor, co-author of BIP 125 for opt-in replace-by-fee, creator of OpenTimestamps, and developer of Libre Relay.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those credentials fit the job because Slipstream sits directly at the boundary between Bitcoin’s public transaction-relay system and miner block construction. Todd has spent years studying the rules nodes use to decide which unconfirmed transactions they relay before those transactions ever reach a block.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22313,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/mara-slipstream-private-mempool-body.jpg?w=1024" alt="Editorial infographic showing a Bitcoin wallet routing a private transaction directly to a mining pool while bypassing the public mempool" class="wp-image-22313" /><figcaption class="wp-element-caption"><em>Slipstream sends eligible Bitcoin transactions directly to MARA Pool instead of exposing them to the public mempool first.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>What Slipstream Actually Does</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Normally, a Bitcoin wallet broadcasts a transaction into the public peer-to-peer network. Nodes validate it against their local relay policy, place accepted transactions into their mempools, and forward them to other peers. Miners then select transactions from the set they can see when constructing candidate blocks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Slipstream adds another route. A user can submit an eligible transaction directly to MARA Pool. That means the transaction does not need to circulate through the public mempool before MARA has an opportunity to include it in a block.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That distinction is easier to understand alongside BitcoinVersus’ explainers on <a href="https://bitcoinversus.tech/2026/10/08/how-bitcoin-nodes-use-port-8333/">Bitcoin node networking over port 8333</a>, <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-what-is-utxo-unspent-transaction-output-wallet-balance/">UTXOs</a>, and <a href="https://bitcoinversus.tech/2026/10/08/bitcoin-what-is-coinbase-transaction-block-subsidy-fees-miners/">how miners claim block rewards and transaction fees</a>. Slipstream does not change Bitcoin consensus. It changes how a valid transaction reaches a miner.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=L_NZ-iqyUpY","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">https://www.youtube.com/watch?v=L_NZ-iqyUpY</div><figcaption class="wp-element-caption"><em>MARA Foundation and Unchained explain how Slipstream was used during the Coldcard emergency response and why public-mempool exposure mattered for affected multisig users.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Coldcard Response Turned a Mining Tool Into a Security Tool</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The clearest recent example came during the July 2026 Coldcard incident. For affected multisig users, broadcasting a recovery transaction publicly could reveal information before the transaction confirmed. A private submission path reduced that exposure window by keeping the transaction away from the public mempool until MARA could mine it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>MARA Foundation says Slipstream ultimately helped move more than 10,000 BTC out of affected Coldcard multisig wallets. Earlier in the response, MARA and Unchained publicly described thousands of BTC moving through the service as wallet providers integrated direct submission into recovery workflows.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That gives Bitcoin mining pools a role that is easy to miss when mining is discussed only in terms of hashrate and electricity. A pool also sits at a critical transaction-routing point between users and block inclusion. BitcoinVersus recently covered <a href="https://bitcoinversus.tech/2026/09/27/viabtc-and-mempool-expand-bitcoin-transaction-acceleration/">ViaBTC and Mempool’s transaction-acceleration integration</a>, another example of mining infrastructure becoming more directly visible to wallet users.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/marafoundation_/status/2052738482573922608","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">https://twitter.com/marafoundation_/status/2052738482573922608</div><figcaption class="wp-element-caption"><em>MARA Foundation previously used its social channel to update users on Slipstream availability and access while the service was undergoing protocol work.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Slipstream Also Gives Developers a Place to Test Unusual Transactions</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Slipstream originally gained attention because standard node relay policies can reject transactions that are still valid under Bitcoin consensus rules. Direct miner submission creates a path for large or non-standard transactions that public nodes may choose not to relay.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>MARA Foundation says recent research uses include Quantum Safe Bitcoin and Binohash. That makes Slipstream more than a fee-routing product. It can function as a proving ground where developers test transaction structures against a real miner without first requiring broad public-relay acceptance.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This connects directly to the debate BitcoinVersus discussed in <a href="https://bitcoinversus.tech/2026/08/09/opinion-bitcoin-should-validate-transactions-not-decide-what-they-mean/">“Bitcoin Should Validate Transactions, Not Decide What They Mean”</a>: consensus rules determine whether a transaction is valid for Bitcoin, while individual node and miner policies influence whether that transaction is relayed or selected.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Why Todd Is an Interesting Choice</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Todd’s background is unusually aligned with this problem. Replace-by-fee deals with how unconfirmed transactions compete. Libre Relay experiments with more permissive relay rules. OpenTimestamps uses Bitcoin’s blockchain as a time-ordering anchor. All three sit close to the transaction lifecycle that Slipstream is designed to explore.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In <a href="https://bitcoinmagazine.com/news/peter-todd-joins-mara-to-lead-slipstream">Bitcoin Magazine’s October 1 report</a>, Todd described Slipstream as a natural complement to his work on mempool policy and as a place to test protocol ideas against actual economic demand.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Private Mempools Have Tradeoffs Too</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The positive security and research use cases do not remove the tradeoffs. Public mempools distribute transaction visibility across many independent nodes and miners. A private submission channel instead depends on the policies, availability, and hashrate of the operator receiving the transaction.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes private mempools useful tools rather than automatic replacements for public relay. They can reduce pre-confirmation exposure, support transactions that standard policy will not relay, and create new miner services, while also concentrating routing decisions inside individual pools.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The mining side still matters operationally too. A private transaction is only useful if the receiving pool can actually mine a block. That is where <a href="https://bitcoinversus.tech/2026/10/07/bitcoin-mining-it-what-is-stratum-asic-miners-pools/">Stratum</a>, pool hashrate, block construction, and reliable miner connectivity all meet the transaction layer.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Why This Is Good News for Bitcoin Mining</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The strongest part of this story is that mining infrastructure is being used for something broader than simply pointing ASICs at a pool and collecting rewards.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A miner-operated service helped users protect funds during a wallet-security emergency. The same service is being used for protocol research. And now a veteran Bitcoin developer is taking responsibility for its continued development.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is exactly the kind of mining story that deserves more attention: <strong>hashrate becoming useful infrastructure for Bitcoin users and developers, not just an industrial number on a dashboard.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>What Comes Next</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Todd says he wants to use Slipstream as a proving ground for further Bitcoin experimentation. The important things to watch will be which wallet integrations adopt private submission, what new transaction formats researchers test, how MARA’s mempool policy evolves, and whether other mining pools build comparable direct-submission systems.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Bitcoin miners already secure the chain by producing blocks. Slipstream shows that the infrastructure around those blocks can become a product—and sometimes a public-good tool—in its own right.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><em>BitcoinVersus.Tech</em></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>Editor’s Note:</em></strong> Slipstream is operated by MARA and remains subject to MARA’s policies, terms, availability, fee requirements, and applicable law. Private transaction submission changes pre-confirmation routing; it does not bypass Bitcoin consensus rules or guarantee inclusion in a block.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to improve the credibility of the information on this platform. If you would like to support the research, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on technical and financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->