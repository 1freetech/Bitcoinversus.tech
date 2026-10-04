---
post_id: 20335
title: "Meta’s Petal Targets 1 Pbps Across the Atlantic With Two-Core Fiber"
live_url: "https://bitcoinversus.tech/2026/10/03/meta-petal-petabit-transatlantic-multicore-fiber/"
featured_media_id: 20334
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/meta-petal-multicore-subsea-fiber-cover.png"
status: publish
---

<!-- wp:paragraph -->
<p>Meta is preparing to move multicore optical fiber from specialist deployments into one of the hardest environments in communications engineering: a roughly 7,000-kilometer transatlantic subsea cable.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In its <a href="https://engineering.fb.com/2026/09/21/connectivity/petal-petabit-transoceanic-subsea-cable/">September 21 engineering announcement</a>, Meta described Petal as a planned U.S.–France system designed for 1 petabit per second of aggregate capacity—1,000 terabits per second—and as the first transoceanic cable intended to deploy multicore fiber at scale. Service is targeted for 2029.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Engineering at Meta also introduced the project in <a href="https://twitter.com/Meta_Engineers/status/2102117645986431134">its Petal announcement on X</a>, highlighting the combination of petabit-class capacity and two-core fiber over an ocean-spanning route.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/Meta_Engineers/status/2102117645986431134","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/Meta_Engineers/status/2102117645986431134
</div><figcaption class="wp-element-caption"><em>Engineering at Meta’s September 21 announcement introduces Petal as a planned petabit-class transoceanic cable using multicore fiber at scale.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Two optical cores inside one standard-diameter strand</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Traditional single-core fiber carries light through one optical core. Petal’s design uses two cores inside the same 125-micrometer glass diameter, allowing two independent spatial channels to travel through one strand. Meta says the system will retain a 24-fiber-pair cable architecture while using the extra core to approximately double the capacity available from each fiber.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is the same broader density problem behind <a href="https://bitcoinversus.tech/2026/10/02/corning-four-core-fiber-contour-form-ai-networks/">Corning’s four-core fiber work for denser AI networks</a>: once conventional single-core links approach practical limits, engineers can increase spatial capacity by putting more independent optical paths inside the glass rather than only pushing each wavelength harder.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The repeaters are where the system gets harder</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A transatlantic cable cannot simply launch light on one coast and receive it thousands of kilometers away. Optical repeaters distributed along the route must periodically amplify the signals. With two cores per fiber, Petal needs to separate those cores into individual optical paths, amplify them, and recombine them while preserving low loss and low crosstalk.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Meta says each repeater will contain 96 optical amplifiers in a single body. The company’s goal is to keep the design inside existing subsea power-feeding limits rather than require a proportional increase in electrical power simply because optical capacity doubles.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The underlying challenge is familiar to terrestrial networks too. BitcoinVersus.Tech recently covered how <a href="https://bitcoinversus.tech/2026/10/02/oif-448g-1600zr-ai-networking-optics/">OIF is pushing 448G electrical lanes and 1.6T coherent optics</a>, another attempt to increase network throughput without letting power, density and signal integrity become the limiting factors.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Petal is planned capacity, not deployed capacity</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The distinction matters. Petal is not carrying live traffic today. Meta’s 1 Pbps figure is a design target for a system expected to enter service in 2029, and the real engineering test will come after thousands of kilometers of two-core fiber, repeaters, branching hardware, power-feeding equipment and landing infrastructure are installed and commissioned together.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://techblog.comsoc.org/2026/09/28/metas-petal-subsea-cable-to-bring-petabit-class-optics-to-the-atlantic/">IEEE Communications Society’s Technology Blog</a> independently notes that the record claim remains contingent on the planned system being delivered as announced. That caution is appropriate: subsea systems are judged by commissioned capacity, optical margin, reliability and long-term operation—not only by the specifications published before marine deployment.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why multicore fiber matters to outside-plant technicians</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For fiber and outside-plant workers, the significance goes beyond a headline bandwidth number. More spatial channels inside the same fiber diameter affect splicing, fan-in/fan-out components, test strategy, fault isolation, connectorization and repeater design. Every added optical path increases the importance of keeping attenuation, crosstalk and physical handling inside tighter tolerances.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes Petal a useful bridge between long-haul subsea engineering and the cabling-density pressure already visible inside data centers. Even when the physical environments differ, the engineering objective is similar: move more bits through constrained space and power budgets without making reliability worse.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Atlantic is becoming a capacity laboratory</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Petal will not be the only new private transatlantic route. BitcoinVersus.Tech previously covered <a href="https://bitcoinversus.tech/2025/11/18/amazon-unveils-fastnet-transatlantic-subsea-cable/">Amazon’s Fastnet transatlantic fiber cable</a>, another example of hyperscalers investing directly in the physical infrastructure between continents rather than depending entirely on capacity purchased from traditional carriers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For Petal, the milestones to watch are physical: cable manufacturing, marine installation, landing completion, repeater performance and the eventual commissioning tests. If the system reaches 1 Pbps across the planned route while remaining inside practical subsea power limits, multicore fiber will have moved from a promising optical technique to a new tool for building the global internet backbone.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong><em>BitcoinVersus.Tech</em></strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>Advertisement</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>BitcoinVersus.Tech advertisement.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><strong><em>Editor’s Note</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This report treats Petal’s 1 Pbps figure and 2029 service date as announced design targets, not completed operating results. The featured cover is an original editorial illustration and is not duplicated in the article body.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->