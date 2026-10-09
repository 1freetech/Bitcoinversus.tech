---
wp_id: 22625
title: "What Is DNA Sequencing?"
date: 2026-10-09T10:38:50
date_gmt: 2026-10-09T14:38:50
modified: 2026-10-09T10:38:50
url: https://bitcoinversus.tech/2026/10/09/what-is-dna-sequencing/
slug: what-is-dna-sequencing
status: publish
author: 233334105
featured_media: 22623
categories: [21464]
tags: []
excerpt: "DNA sequencing is the process of reading the order of the chemical bases in DNA. Modern sequencers turn molecules into digital data that scientists can compare, assemble and interpret."
---

<!-- wp:paragraph -->
<p><strong>DNA sequencing is the process of determining the order of the chemical bases in a DNA molecule.</strong> Those bases are usually written as four letters—A, C, G and T—and their order carries biological information. Sequencing turns that molecular order into data that computers can store, compare and analyze.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The easiest way to think about sequencing is as reading. DNA is not literally a sentence, and genes are not simple lines of English-like instructions, but the analogy is useful: before researchers can interpret a stretch of DNA, they first need to know which bases are present and in what order.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">DNA Sequencing Reads The Order Of A, C, G And T</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>DNA is built from nucleotides containing four bases: adenine, cytosine, guanine and thymine. In the familiar double helix, A pairs with T and C pairs with G. The <a href="https://www.genome.gov/genetics-glossary/DNA-Sequencing">National Human Genome Research Institute</a> defines DNA sequencing as the laboratory technique used to determine the exact sequence of those bases in a DNA molecule.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A short sequence might look like <code>ACGTTGCA</code>. A human genome is vastly larger—roughly three billion base pairs in one haploid set—so modern sequencing is not about a scientist manually reading letters one by one. Instruments measure physical or chemical signals, software converts those signals into base calls, and computers assemble or align enormous numbers of reads.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That separation between <em>reading</em> DNA and <em>understanding</em> DNA is important. A sequencing machine can tell researchers which bases are present. Determining what a particular variant means for a cell, organism or disease can require much more biology, statistics and clinical evidence.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">A Sequencer Turns Molecular Events Into Digital Signals</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Every sequencing technology needs some way to distinguish one base from another. Different systems solve that problem differently. Some detect fluorescent labels as new bases are added to a growing DNA strand. Others measure electrical changes as a DNA molecule passes through a nanoscale pore. Older methods separate DNA fragments by length and infer the sequence from where each fragment ends.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The instrument therefore sits at the boundary between biology and computing. Chemistry produces a measurable signal; sensors capture it; electronics digitize it; algorithms turn it into a sequence; and downstream software compares that sequence with reference genomes or other samples.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Sanger Sequencing Was The First Workhorse</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One of the foundational methods is Sanger sequencing, developed in the 1970s. It copies DNA while occasionally incorporating special chain-terminating nucleotides. That creates fragments ending at different positions. By separating those fragments and identifying the final base on each one, the original sequence can be reconstructed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sanger sequencing became central to early genomics and helped power the Human Genome Project. It remains useful today for targeted jobs where researchers need a relatively small amount of high-quality sequence, but it does not scale economically to the enormous data volumes modern genomics often demands.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Next-Generation Sequencing Made DNA Reading Massively Parallel</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The big shift came when sequencing stopped processing one DNA fragment at a time and began processing millions or billions of fragments in parallel. This family of methods is usually called next-generation sequencing, or NGS.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In a common sequencing-by-synthesis workflow, DNA is broken into fragments and adapters are added. Those fragments are attached to a flow cell and copied into many local clusters. The machine then adds labeled bases cycle by cycle, images the signals and records which base was incorporated at each position.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=EDVKxSNdSic","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
<div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=EDVKxSNdSic
</div>
</figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Illumina’s current sequencing-by-synthesis overview shows how DNA fragments are prepared, amplified on a flow cell and read base by base through repeated imaging cycles.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Why Short Reads Need To Be Reassembled</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Many high-throughput sequencers do not read an entire chromosome continuously. They read large numbers of shorter fragments. Software then aligns those fragments to a reference genome or assembles overlapping pieces into longer sequences.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A useful analogy is shredding several copies of the same book and then reconstructing the pages from overlapping scraps. The more overlapping pieces you have, the easier it is to gain confidence about what the original text said. In genomics, that repeated observation is related to <em>coverage</em> or <em>depth</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Coverage matters because biological samples and sequencing measurements are imperfect. Reading the same genomic region multiple times helps distinguish real variants from random errors.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Long-Read Sequencing Solves A Different Puzzle</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Short reads are efficient, but they can struggle with long repetitive regions and large structural changes. Long-read technologies try to capture much larger stretches of DNA in one continuous read, making some assemblies and structural-variant analyses easier.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Nanopore sequencing takes a particularly different approach. A DNA strand passes through an extremely small pore in a membrane, and the bases influence an electrical current flowing through that pore. Software decodes the changing current pattern into sequence information. <a href="https://www.genome.gov/genetics-glossary?id=56">NHGRI describes nanopore sequencing</a> as a method that can read long stretches of DNA while the molecule is moving through the pore.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/nanopore/status/1370361081735024640","type":"rich","providerNameSlug":"twitter","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/nanopore/status/1370361081735024640
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Oxford Nanopore highlighted a portable sequencing setup used in Antarctica—a striking example of how DNA sequencing has moved beyond giant centralized machines into field-capable instruments.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Sequencing Costs Collapsed As Throughput Exploded</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The economics of sequencing changed almost as dramatically as the technology. NHGRI has tracked production sequencing costs since the early 2000s. Its historical data show a particularly sharp drop after sequencing centers moved from Sanger-based instruments to second-generation platforms beginning around 2008.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22624,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/nhgri-cost-per-human-genome.jpg?w=1024" alt="NHGRI chart showing the dramatic decline in the cost of sequencing a human genome from 2001 through 2022, compared with Moore's Law." class="wp-image-22624" /><figcaption class="wp-element-caption"><em>NHGRI’s historical cost curve shows how next-generation sequencing drove the estimated production cost of a human-sized genome down by orders of magnitude. Source: <a href="https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data">National Human Genome Research Institute</a>.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>This cost decline changed the questions researchers could realistically ask. Instead of sequencing one gene or one organism, labs could compare thousands of genomes, study tumors at much greater depth, monitor pathogens and examine entire ecosystems through environmental DNA.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">What Scientists Actually Do With Sequence Data</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sequencing is a general-purpose measurement tool, so its uses span many fields. Researchers can compare genomes across species, identify genetic variants, study inherited disorders, characterize tumors, track infectious diseases, investigate evolution, identify microbes and measure changes in populations over time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech has already covered several downstream examples. Researchers studying <a href="https://bitcoinversus.tech/2026/10/07/science-jonathan-194-year-old-tortoise-genome-human-aging/">Jonathan the 194-year-old tortoise</a> use genomic information to investigate unusual longevity. Gene-editing projects such as <a href="https://bitcoinversus.tech/2026/09/21/aria-gene-edited-butterflies-tree-vaccines-wildlife-adaptation/">ARIA’s wildlife-adaptation work</a> depend on understanding genetic sequences before researchers can decide what to change.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same foundation sits beneath <a href="https://bitcoinversus.tech/2025/09/01/crispr-cas9-has-the-potential-to-maximize-human-longevity-2/">CRISPR-Cas9 genome editing</a>. Editing DNA and sequencing DNA are different operations—one changes a sequence, the other reads it—but modern biotechnology often uses both in the same research workflow.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Sequencing Can Also Help Discover New Biological Tools</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sequence databases let researchers search for patterns across enormous collections of organisms. That makes sequencing not only a measurement technique but also a discovery engine.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A recent example on BitcoinVersus.Tech involved <a href="https://bitcoinversus.tech/2026/10/02/biotechnology-claude-enzyme-system-crispr-like-repeats/">Claude identifying an enzyme system associated with CRISPR-like DNA repeats</a>. Work like that depends on having enough sequence data to compare biological patterns at scale.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">A Genome Sequence Is Not A Complete Explanation Of A Person</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sequencing can create a remarkably detailed record of DNA, but a genome is not a deterministic biography. Many traits and diseases are influenced by combinations of genetic variants, environment, age, development, behavior and chance.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Even when a sequence variant is real, scientists may not know whether it matters. Clinical interpretation therefore requires evidence beyond the raw sequence itself. That is why a consumer DNA file, a research genome and a physician-ordered clinical genetic test are not interchangeable simply because all involve DNA data.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">DNA Data Raises Unusual Privacy Questions</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A password can be changed. A genome cannot. Sequence data can also reveal information about biological relatives because families share DNA. That makes genomic privacy different from many ordinary forms of digital privacy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Anyone considering personal genetic testing should understand who stores the sample, who stores the digital data, how long each is retained, what research permissions apply, whether data can be shared with third parties and what deletion options actually cover. Sequencing technology is powerful precisely because the information can remain useful long after it is generated.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">The Practical Takeaway</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>DNA sequencing is best understood as a measurement pipeline:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>A biological sample provides DNA.</strong></li><li><strong>Laboratory preparation makes that DNA readable by a sequencing platform.</strong></li><li><strong>The instrument converts chemical, optical or electrical events into digital signals.</strong></li><li><strong>Software converts those signals into A, C, G and T base calls.</strong></li><li><strong>Computers align, assemble and compare those reads.</strong></li><li><strong>Researchers interpret what the sequence means.</strong></li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The machine’s job is to read. The difficult scientific job begins afterward: deciding which differences matter, how confident the measurement is, and what the sequence can actually tell us about biology.</p>
<!-- /wp:paragraph -->