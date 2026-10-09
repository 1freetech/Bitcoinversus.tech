---
title: "IT: What Is an Inode? How Linux Keeps Track of Files"
status: published
wordpress_post_id: 22720
published: "2026-10-09T12:59:05"
modified: "2026-10-09T12:59:05"
live_url: "https://bitcoinversus.tech/2026/10/09/it-what-is-inode-linux-file-metadata/"
category: "IT"
featured_media_id: 22714
featured_image_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/it-inode-cover-1200x630-1.jpg"
featured_image_dimensions: "1200x630"
body_media_id: 22715
body_image_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/it-inode-body-1200x675-1.jpg"
body_image_dimensions: "1200x675"
youtube_1: "https://www.youtube.com/watch?v=6KjMlm8hhFA"
social_1: "https://www.reddit.com/r/linuxupskillchallenge/comments/1wujhle/day_19_inodes_symlinks_and_other_shortcuts/"
seo_title: "IT: What Is an Inode? Linux File Metadata Explained"
seo_description: "Learn what an inode is in Linux, what metadata it stores, how filenames map to inode numbers, how hard links work, and how to inspect inode usage."
no_text_boxes: true
diagram_artwork: false
---

<!-- wp:paragraph -->
<p>On Linux, the filename you see is not the whole file. Behind that name is a filesystem record called an <strong>inode</strong>. The inode helps Linux keep track of the file’s identity, permissions, owner, size, timestamps, link count, and the information needed to find the file’s data.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The simplest mental model is this: <strong>a directory connects a filename to an inode number, and the inode describes the underlying file object.</strong> That separation explains several Linux behaviors that can otherwise seem strange, including hard links, renamed files, deleted-but-still-open log files, and systems that run out of inodes even when disk space remains.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Filename Is Not Stored In The Inode</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A common beginner assumption is that an inode contains the full pathname of a file. Normally it does not. A directory entry stores a name and associates that name with an inode number. The inode then stores metadata about the file itself.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is why Linux can rename a file without creating a completely new file object. The directory entry can change while the inode remains the same. The Linux <a href="https://man7.org/linux/man-pages/man7/inode.7.html"><strong>inode(7) manual page</strong></a> describes the inode number, file type and mode, hard-link count, owner IDs, timestamps, size, and related metadata associated with a file.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22715,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/it-inode-body-1200x675-1.jpg?w=1024" alt="An IT technician working on a laptop beside server racks and storage hardware in a modern data center." class="wp-image-22715" /><figcaption class="wp-element-caption"><em>Linux files have a name people see and an inode the filesystem uses to track metadata and the underlying file object.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What An Inode Stores</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The exact on-disk structure depends on the filesystem, but an inode commonly represents information such as the file type, permissions, owner and group IDs, file size, timestamps, hard-link count, and filesystem-specific information used to locate the file’s data.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><li><strong>File type:</strong> regular file, directory, symbolic link, device, socket, and other types.</li><li><strong>Permissions:</strong> the read, write, and execute mode bits.</li><li><strong>Ownership:</strong> numeric user and group IDs.</li><li><strong>Size:</strong> the logical size of the file.</li><li><strong>Timestamps:</strong> metadata such as modification and status-change times.</li><li><strong>Link count:</strong> how many directory entries hard-link to the same file object.</li><li><strong>Data-location information:</strong> filesystem-specific structures used to reach the file’s stored data.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The inode is therefore closely related to several ideas already covered on BitcoinVersus.Tech. A program may reach an open file through a <a href="https://bitcoinversus.tech/2026/10/08/what-is-file-descriptor-linux-fd-files-sockets-pipes-devices/"><strong>file descriptor</strong></a>, while a <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-system-call-syscall-user-mode-kernel-mode/"><strong>system call</strong></a> such as <code>open()</code> or <code>stat()</code> asks the kernel to work with that file information.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=6KjMlm8hhFA","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=6KjMlm8hhFA
</div><figcaption class="wp-element-caption"><em>tutoriaLinux demonstrates inode numbers, directories, metadata, inspection commands, and practical inode troubleshooting on Linux.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Inode Numbers Are Only Unique Inside One Filesystem</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Every file in a filesystem has an inode number, but the number is not a universal ID across the whole computer. Inode numbers are unique within a particular filesystem. Another filesystem can reuse the same number for a completely different file.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That matters when you work with multiple disks, partitions, containers, or mounted filesystems. An inode number only makes sense together with the filesystem that owns it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How To See An Inode Number</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The quickest command is <code>ls -i</code>:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>ls -i notes.txt</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You can also use <code>stat</code> for a much fuller view:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>stat notes.txt</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The output includes the inode number along with size, permissions, ownership, link count, and timestamps. This is often more useful than simply listing a directory because it lets you inspect the actual metadata attached to the file object.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Hard Links Make Inodes Easier To Understand</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A <strong>hard link</strong> is another directory entry that points to the same inode. That means two different filenames can refer to the same underlying file object. Neither name is inherently the “real” one; both names resolve to the same inode.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>echo "hello" &gt; original.txt
ln original.txt second-name.txt
ls -li original.txt second-name.txt</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If both names are on the same filesystem, <code>ls -li</code> will show the same inode number for both. This is the core idea behind <a href="https://bitcoinversus.tech/2025/03/19/understanding-hard-links-and-symbolic-links-in-linux/"><strong>hard links and symbolic links</strong></a>: hard links share the underlying inode, while a symbolic link is a separate file that refers to another path.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/linuxupskillchallenge/comments/1wujhle/day_19_inodes_symlinks_and_other_shortcuts/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/linuxupskillchallenge/comments/1wujhle/day_19_inodes_symlinks_and_other_shortcuts/
</div><figcaption class="wp-element-caption"><em>The Linux Upskill Challenge uses inodes, hard links, and symbolic links together to show how filenames and filesystem identity differ.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Deleting A Filename Does Not Always Delete The Data Immediately</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When you remove one hard link, Linux removes that directory entry and reduces the inode’s link count. The underlying file storage is normally reclaimed only when no directory entries remain and no running process still has the file open.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This explains the classic “deleted log file still using disk space” problem. A service can keep an open file descriptor to a file after its pathname has been removed. The filename is gone from the directory, but the running process still has access to the file object until it closes that descriptor or exits. Linux exposes process information through places such as <a href="https://bitcoinversus.tech/2026/10/08/file-system-directory-12-proc-linux-os/"><strong>/proc</strong></a>, which can help you investigate cases like this.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">You Can Run Out Of Inodes Before You Run Out Of Bytes</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Disk capacity and inode availability are not the same thing. A filesystem containing enormous numbers of tiny files can exhaust its available inode resources even while storage blocks remain free. The symptom may still look like a space problem because new files can no longer be created.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>df -h
df -i</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><code>df -h</code> shows normal filesystem space usage. <code>df -i</code> shows inode usage instead. The <a href="https://www.gnu.org/software/coreutils/manual/html_node/df-invocation.html"><strong>GNU Coreutils documentation</strong></a> describes <code>--inodes</code> as reporting inode usage rather than block usage.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Useful Troubleshooting Sequence</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>Use <code>df -h</code> to check normal disk-space usage.</li><li>Use <code>df -i</code> to check inode usage.</li><li>Use <code>ls -li</code> when you suspect two names may point to the same inode.</li><li>Use <code>stat filename</code> to inspect metadata and link count.</li><li>Use <code>find</code> with an inode number when you need to locate another directory entry referring to the same inode on that filesystem.</li><li>If a deleted file still consumes space, check whether a running process still has it open.</li></ol>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code>find /path/to/filesystem -inum 123456</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Short Version</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A Linux filename is a directory entry. The inode is the filesystem record behind the file. It stores metadata and identifies the underlying file object inside that filesystem. Multiple hard-link names can share one inode, inode numbers are only unique within a filesystem, and inode exhaustion can prevent new file creation even when byte capacity remains.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you remember one sentence, remember this: <strong>the pathname tells Linux how to find the file; the inode tells the filesystem what file it found.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Editor’s Note</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><em>Inode implementation details vary by filesystem. Commands and concepts in this explainer describe the Linux/Unix filesystem model at a practical systems-administration level rather than the exact on-disk layout of every filesystem.</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>BitcoinVersus.Tech is independently maintained. Support options on the site help fund additional technical research, verification, and open educational publishing.</em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. Content is provided for informational purposes.</p>
<!-- /wp:paragraph -->