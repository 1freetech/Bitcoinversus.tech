---
post_id: 22435
title: "File System Directory #14: /sys (Linux OS)"
slug: file-system-directory-14-sys-linux-os
status: publish
published: 2026-10-08T23:31:30
live_url: https://bitcoinversus.tech/2026/10/08/file-system-directory-14-sys-linux-os/
featured_media: 22430
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux_sys_photorealistic_cover_1200x630.jpg
seo_title: "File System Directory #14: /sys (Linux OS)"
seo_description: "Learn what the /sys directory does in Linux, how sysfs exposes kernel, hardware, driver, device, and network information through a virtual filesystem."
---

<!-- wp:paragraph -->
<p>The <code>/sys</code> directory in Linux is a virtual filesystem that exposes information about hardware devices, drivers, buses, kernel subsystems, power management, and other parts of the running system.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Unlike a normal storage directory, the files under <code>/sys</code> are created dynamically by the Linux kernel through <strong>sysfs</strong>. They act as a readable — and in some cases writable — interface between userspace programs and kernel objects.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=7yUgEmsSv84","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=7yUgEmsSv84
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>Important locations include <code>/sys/devices</code> for the kernel's device hierarchy, <code>/sys/class</code> for device classes, <code>/sys/bus</code> for hardware buses and drivers, <code>/sys/block</code> for block devices, and <code>/sys/module</code> for loaded kernel modules. The <a href="https://docs.kernel.org/filesystems/sysfs.html">Linux kernel documentation</a> describes sysfs as the filesystem used to export kernel objects and their attributes to userspace.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, <code>/sys/class/net</code> contains network interfaces. Reading a file such as <code>/sys/class/net/eth0/operstate</code> can show whether an Ethernet interface is up or down, while <code>/sys/class/net/eth0/speed</code> may report the negotiated link speed when the driver supports it.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22431,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux_sys_terminal_example_1200x720.jpg?w=1024" alt="Linux terminal showing /sys, network state, link speed, and block device information." class="wp-image-22431" /><figcaption class="wp-element-caption"><em>A simple terminal example showing how <code>/sys</code> exposes live kernel and hardware information through files and directories.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In the screenshot, the user lists the top-level <code>/sys</code> directories, checks available network interfaces, reads the Ethernet interface state and speed, and views block devices. These values come from the running kernel rather than ordinary files stored on disk.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>/sys</code> is closely related to <a href="https://bitcoinversus.tech/2026/10/08/file-system-directory-12-proc-linux-os/"><code>/proc</code></a>, but the two are organized differently. <code>/proc</code> is heavily associated with processes and general kernel state, while <code>/sys</code> is especially important for devices, drivers, buses, and kernel object relationships.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For Linux+ certification and practical administration, understanding <code>/sys</code> helps explain how commands and services discover hardware, inspect device properties, interact with drivers, and obtain live system information without reading raw kernel memory.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/linux4noobs/comments/1kv6fw3/help_in_understanding_the_sys_directory/","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/linux4noobs/comments/1kv6fw3/help_in_understanding_the_sys_directory/
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>The previous entries in this series are <a href="https://bitcoinversus.tech/2026/10/08/file-system-directory-12-proc-linux-os/">#12 <code>/proc</code></a> and <a href="https://bitcoinversus.tech/2025/06/20/file-system-directory-13-var-linux-os/">#13 <code>/var</code></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://bitcoinversus.tech/"><strong><em><sup>BitcoinVersus.Tech</sup></em></strong></a><strong><em><sup> Editor's Note:</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech publishes practical Linux, IT, engineering, and infrastructure education for informational purposes.</p>
<!-- /wp:paragraph -->