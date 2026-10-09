---
post_id: 22424
title: "File System Directory #12: /proc (Linux OS)"
slug: file-system-directory-12-proc-linux-os
status: publish
published: 2026-10-08T23:27:21
live_url: https://bitcoinversus.tech/2026/10/08/file-system-directory-12-proc-linux-os/
featured_media: 22422
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux_proc_photorealistic_cover_1200x630.jpg
seo_title: "File System Directory #12: /proc (Linux OS)"
seo_description: "Learn what the /proc directory does in Linux, how its virtual files expose live process and kernel information, and why it matters for Linux troubleshooting."
---

<!-- wp:paragraph -->
<p>The <code>/proc</code> directory in Linux is a virtual filesystem that exposes live information about running processes, memory, CPUs, kernel settings, mounts, and other parts of the operating system.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Unlike directories such as <a href="https://bitcoinversus.tech/2026/10/08/file-system-directory-11-tmp-linux-os/"><code>/tmp</code></a> or <a href="https://bitcoinversus.tech/2025/06/20/file-system-directory-13-var-linux-os/"><code>/var</code></a>, most entries under <code>/proc</code> are not ordinary files stored on a disk. The kernel creates them dynamically so programs and administrators can read current system information through familiar file-like interfaces.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=P0QZnAnsQ4c","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=P0QZnAnsQ4c
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>Each running process usually has a numbered directory under <code>/proc</code> that matches its process ID, or PID. For example, information for PID 1234 can appear under <code>/proc/1234</code>. These process directories expose details such as command-line arguments, memory maps, open <a href="https://bitcoinversus.tech/2026/10/08/what-is-file-descriptor-linux-fd-files-sockets-pipes-devices/">file descriptors</a>, and the process working directory.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Other files provide system-wide information. <code>/proc/cpuinfo</code> reports CPU details, <code>/proc/meminfo</code> reports memory statistics, <code>/proc/uptime</code> shows how long the system has been running, and <code>/proc/mounts</code> lists mounted filesystems.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22423,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux_proc_terminal_example_1200x720.jpg?w=1024" alt="Linux terminal example showing the contents of /proc plus /proc/uptime and /proc/meminfo." class="wp-image-22423" /><figcaption class="wp-element-caption"><em>A simple terminal example showing how <code>/proc</code> exposes live process and kernel information through file-like interfaces.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In the screenshot, the user lists part of <code>/proc</code>, reads <code>/proc/uptime</code>, and checks the first lines of <code>/proc/meminfo</code>. The values are generated from the running kernel, so they can change from one moment to the next without being edited like normal text files.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For Linux+ certification, understanding <code>/proc</code> is useful because many monitoring and troubleshooting tools ultimately read information exposed by this virtual filesystem. It also reinforces an important Linux idea: not every object that looks like a file is stored as normal data on disk.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/linuxquestions/comments/1r4b1g1/why_is_proc_showing_128tb/","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/linuxquestions/comments/1r4b1g1/why_is_proc_showing_128tb/
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>A common beginner surprise is seeing tools report strange apparent sizes for files under <code>/proc</code>. Because <code>/proc</code> is a virtual filesystem, those reported values do not mean the directory is consuming that amount of physical disk space.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://bitcoinversus.tech/"><strong><em><sup>BitcoinVersus.Tech</sup></em></strong></a><strong><em><sup> Editor's Note:</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech publishes practical Linux, IT, engineering, and infrastructure education for informational purposes.</p>
<!-- /wp:paragraph -->