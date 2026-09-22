# Clonezilla Live 3.3.3-37 Adds HTTP Boot, LUKS2 Support and Linux Kernel 7.1

**Published:** 2026-09-20
**Live article:** https://bitcoinversus.tech/2026/09/20/clonezilla-live-3-3-3-37-http-boot-luks2-linux-kernel-7-1/

<!-- wp:image {"id":18256,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/09/linux-disk-imaging-and-network-boot-illustration.png?w=1024" alt="Illustration of Linux disk imaging, encrypted storage and network booting between a workstation and server." class="wp-image-18256" /><figcaption class="wp-element-caption">Illustration: Linux disk imaging, encrypted storage and network deployment.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Clonezilla Live 3.3.3-37 is now available as the project's latest Debian-based testing release, bringing a newer Linux kernel and several changes aimed directly at administrators who image, recover and deploy machines across modern networks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>According to the <a href="https://clonezilla.org/downloads/stable/release-notes.php">official Clonezilla release notes</a>, version 3.3.3-37 is based on Debian Sid packages as of September 13, 2026 and updates the Linux kernel to 7.1.13-1. Partclone, the partition-imaging utility used by Clonezilla, moves to version 0.3.50 with a fix for a Btrfs issue.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">HTTP Boot Joins PXE</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One of the most useful additions for infrastructure technicians is HTTP Boot support in Clonezilla Lite Server. The project says Lite Server now supports both traditional PXE Boot and HTTP Boot clients, including Secure Boot when using the HTTP Boot mechanism.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Network booting allows an administrator to start a deployment or recovery environment without manually preparing removable media for every machine. That becomes particularly useful in labs, repair environments and data centers where technicians may need to image multiple systems from a centrally maintained environment. Clonezilla has long documented PXE deployment methods, and the new release expands the available network-boot path.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">LUKS2 and Modern Linux Networking</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Clonezilla 3.3.3-37 also implements LUKS2 repository support. LUKS is widely used on Linux systems to manage encrypted block devices, so the change expands the ways administrators can work with encrypted storage while using Clonezilla.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The release also removes more legacy Linux networking dependencies. Deprecated <code>net-tools</code> commands are replaced with <code>iproute2</code> alternatives, while older <code>dhclient</code>-related code is dropped in favor of <code>dhcpcd</code>. The project also configured dhcpcd to use a client identifier for stable IP reservations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those changes reflect the networking tools administrators increasingly encounter on current Linux systems. For technicians moving between operating systems, BitcoinVersus.tech's <a href="https://bitcoinversus.tech/2026/09/10/windows-server-guide-for-it-technicians-and-administrators/">Windows Server guide for IT technicians and administrators</a> covers the server side of a different infrastructure stack, while the <a href="https://bitcoinversus.tech/2026/09/11/kerberos-network-authenticator/">Kerberos network authenticator overview</a> explains another important part of enterprise authentication infrastructure.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Better HiDPI Boot Menus and Faster Restores</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The update addresses a surprisingly practical problem on newer displays: tiny or distorted boot menus. GRUB now prefers 1920×1080, 1024×768 or automatic resolution selection and falls back to 1024×768. Clonezilla says the configuration is intended to improve behavior on 4K and other HiDPI screens.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Restore behavior has also been optimized. When restoring an image to the same disk or partition layout, Clonezilla can avoid an unnecessary partition-image conversion step. Other fixes include an LVM <code>system.devices</code> locking problem affecting RHEL 10 and AlmaLinux 10 or newer, detection problems involving bare disks containing filesystems, and improvements to direct device-to-device cloning.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://clonezilla.org/downloads.php","type":"rich","responsive":true} -->
<figure class="wp-block-embed is-type-rich"><div class="wp-block-embed__wrapper">
https://clonezilla.org/downloads.php
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>There is one important distinction for users considering an upgrade: Clonezilla's official download page currently labels 3.3.3-37 as the Debian-based <strong>testing</strong> release, while 3.3.3-15 remains listed as the Debian-based stable release. Production environments should therefore evaluate the newer build appropriately before making it part of a standard recovery or deployment workflow.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em><a href="https://bitcoinversus.tech/">BitcoinVersus.Tech</a></em> <em>Editor's Note:</em></strong><br><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em><a href="https://x.com/1BitcoinVersus/status/1937006164555993338">https://x.com/1BitcoinVersus/status/1937006164555993338</a></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->
