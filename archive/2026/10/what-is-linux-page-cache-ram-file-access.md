---
title: "What Is the Linux Page Cache? How RAM Makes File Access Faster"
status: published
wordpress_post_id: 22755
published: "2026-10-09T17:41:18"
modified: "2026-10-09T17:41:18"
live_url: "https://bitcoinversus.tech/2026/10/09/what-is-linux-page-cache-ram-file-access/"
category: "IT"
featured_media_id: 22753
featured_image_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/page-cache-cover-1200x630-1.jpg"
featured_image_dimensions: "1200x630"
body_media_id: 22754
body_image_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/page-cache-body-1200x675-1.jpg"
body_image_dimensions: "1200x675"
youtube_1: "https://www.youtube.com/watch?v=pc1TyGYRQrM"
social_1: "https://www.reddit.com/r/linuxquestions/comments/qq3726/linux_wasting_a_lot_of_ram/"
seo_title: "What Is the Linux Page Cache? RAM and File Caching Explained"
seo_description: "Learn how the Linux page cache uses RAM for file data, why repeated reads are faster, how dirty pages and writeback work, and why cached memory is often reclaimable."
no_text_boxes: true
diagram_artwork: false
---

<!-- wp:paragraph -->
<p>Linux does not like leaving useful RAM idle. When programs read ordinary files, the kernel can keep recently used file data in memory so the next read may be served from RAM instead of going back to slower storage. That memory-backed layer is called the <strong>page cache</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The simplest way to think about it is: <strong>storage holds the durable copy, while the page cache keeps useful file-backed data close to the CPU.</strong> This is why a large file can take noticeable time to read once and then appear dramatically faster on a second read.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22754,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/page-cache-body-1200x675-1.jpg?w=1024" alt="A diverse group of systems technicians inspecting server hardware and storage components in a data center." class="wp-image-22754" /><figcaption class="wp-element-caption"><em>The Linux page cache keeps recently used file data in RAM so repeated access can avoid slower storage reads when possible.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Page Cache Sits Between Programs And Storage</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For normal buffered file I/O, Linux commonly moves file contents through the page cache. The official <a href="https://kernel.org/doc/html/next/mm/page_cache.html"><strong>Linux kernel page-cache documentation</strong></a> describes the page cache as the primary way users and the kernel interact with filesystems for ordinary reads, writes, and memory mappings.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A program can open a file through a <a href="https://bitcoinversus.tech/2026/10/08/what-is-file-descriptor-linux-fd-files-sockets-pipes-devices/"><strong>file descriptor</strong></a> and request data with a <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-system-call-syscall-user-mode-kernel-mode/"><strong>system call</strong></a>. If the needed file data is already cached in RAM, the kernel can often satisfy that request without waiting for another storage read.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why The Second Read Can Be Much Faster</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Imagine a program reads a 2 GB file from an SSD. During the first read, the kernel must fetch blocks from storage and place the corresponding file data into memory. If enough of those pages remain cached, a second read of the same file can reuse them directly from RAM.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>RAM latency and bandwidth are very different from SSD or hard-drive access, so a cache hit can remove much of the storage wait from a repeated workload. The speedup is not magic and it is not guaranteed: the data must still be present in memory, and the workload must actually reuse it.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=pc1TyGYRQrM","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=pc1TyGYRQrM
</div><figcaption class="wp-element-caption"><em>Professor Linux demonstrates why a repeated Linux file read can become much faster once the relevant data is already in the page cache.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Reads Bring File Data Into RAM</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When a normal read misses the page cache, Linux has to obtain the requested file data from the backing filesystem and storage device. Once that data arrives, the kernel can retain it in RAM so nearby or repeated accesses may reuse it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This behavior also connects to <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-virtual-memory-ram-pagefile-swap-page-faults/"><strong>virtual memory</strong></a>. File-backed memory and anonymous process memory both live in physical RAM, but Linux can treat them differently when memory pressure rises because clean file-backed cache can often be discarded and re-read from storage later.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Writes Can Become Dirty Pages</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The page cache is not only for reads. Normal buffered writes can first modify file-backed memory in RAM. Once the cached copy differs from the durable copy on storage, Linux marks that memory as <strong>dirty</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Dirty pages cannot simply be discarded, because they contain changes that storage does not yet have. The kernel eventually performs <strong>writeback</strong>, sending those modifications to the backing device. The Linux <a href="https://docs.kernel.org/filesystems/vfs.html"><strong>Virtual File System documentation</strong></a> describes how file-backed address spaces track dirty and writeback state.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Page Cache Is Not The Same As A CPU Cache</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The word “cache” appears in several parts of a computer, but the layers are different. <a href="https://bitcoinversus.tech/2026/10/07/computing-what-is-cpu-cache-l1-l2-l3-memory/"><strong>CPU cache</strong></a> such as L1, L2, and L3 keeps frequently needed memory close to processor cores. The Linux page cache is managed by the operating system and keeps file-backed data in system RAM.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>CPU cache:</strong> tiny and extremely fast hardware-managed memory near the processor.</li><li><strong>Page cache:</strong> operating-system-managed RAM containing file-backed data.</li><li><strong>Storage device cache:</strong> memory inside or near a storage controller or device.</li><li><strong>Application cache:</strong> data a program intentionally keeps for reuse.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Linux Can Show Very Little Free RAM</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Linux often uses otherwise-idle memory for cache because unused RAM does not make the machine faster. This can make a system appear to have very little completely free memory even when it still has plenty of memory that can be reclaimed for applications.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>free -h</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>On modern Linux systems, the <code>available</code> figure is usually more useful than staring only at <code>free</code>. Cached file data can often be discarded when programs need RAM, provided those cached pages are clean or their dirty contents have first been written back.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/linuxquestions/comments/qq3726/linux_wasting_a_lot_of_ram/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/linuxquestions/comments/qq3726/linux_wasting_a_lot_of_ram/
</div><figcaption class="wp-element-caption"><em>A Linux community discussion illustrates a common misunderstanding: RAM used for file caching is not automatically the same thing as memory permanently unavailable to applications.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Memory Pressure Can Reclaim Clean Cache</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Linux continuously balances RAM among process memory, kernel needs, file-backed cache, and other uses. When applications demand more memory, clean cached file pages are attractive reclamation targets because the durable data already exists on storage.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If Linux later needs that file data again, it can read it back from the filesystem. This tradeoff is central to cache design: keep data nearby while RAM is available, then give that RAM back when something more important needs it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Memory-Mapped Files Also Use The Page Cache</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A program does not always have to call <code>read()</code> repeatedly to access file data. With <code>mmap()</code>, the kernel can map file-backed pages into a process's virtual address space. When the program touches those addresses, the relevant file-backed pages can be faulted into memory and represented through the page cache.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is another place where the <a href="https://bitcoinversus.tech/2026/10/09/it-what-is-inode-linux-file-metadata/"><strong>inode</strong></a>, virtual memory, file-backed address space, and page cache meet. The filesystem describes the file, while the virtual-memory system lets the process access cached file contents through memory mappings.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Page Cache And Filesystem Journaling Solve Different Problems</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The page cache improves normal file access by retaining file-backed data in RAM. <a href="https://bitcoinversus.tech/2026/10/09/what-is-filesystem-journaling-linux-crash-recovery/"><strong>filesystem journaling</strong></a> focuses on recovering filesystem consistency after interrupted metadata updates. They can interact during writes, but they are not the same mechanism.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A page can be dirty because an application changed file data in memory, while the filesystem may also maintain journal transactions for metadata consistency. Storage durability depends on the full stack: application behavior, system calls, cache state, filesystem ordering, journaling, controller behavior, and the physical device.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Direct I/O Can Bypass Normal Page Cache Behavior</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Linux also supports specialized I/O paths that can bypass the normal page cache, including forms of direct I/O such as <code>O_DIRECT</code>. Databases and high-performance storage applications may use such mechanisms when they want tighter control over caching or I/O behavior.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That does not make buffered I/O inferior. The page cache is extremely useful for general-purpose workloads because it automatically turns unused RAM into a performance resource without requiring each application to build its own file cache.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Useful Commands For Seeing Memory Cache</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>free -h
cat /proc/meminfo | grep -E 'Cached|Buffers|Dirty|Writeback'
vmstat 1</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>These commands provide different views of system memory. <code>free -h</code> gives a compact overview, <code>/proc/meminfo</code> exposes more detailed counters, and <code>vmstat</code> helps show changing memory and I/O activity over time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Do not treat “drop the caches” commands as ordinary optimization. Forcing useful cache out of RAM can make a machine slower and can distort benchmarks. Cache-clearing controls are mainly diagnostic and testing tools when used deliberately.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Short Version</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Linux page cache uses RAM to hold file-backed data. A cache hit can satisfy a repeated file access from memory instead of storage. Writes can create dirty cached pages that later need writeback. Clean cache can often be reclaimed when applications need memory, which is why low “free” RAM alone does not mean a Linux system is out of memory.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The sentence to remember is: <strong>Linux uses spare RAM to avoid unnecessary storage I/O, then reclaims that RAM when more important work needs it.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Editor’s Note</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>Linux memory-management behavior changes over time, and exact counters or kernel internals can differ by kernel version and workload. This evergreen explains the practical page-cache model rather than prescribing memory-tuning settings for a production system.</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>BitcoinVersus.Tech is independently maintained. Support options on the site help fund additional technical research, verification, and open educational publishing.</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. Content is provided for informational purposes.</p>
<!-- /wp:paragraph -->