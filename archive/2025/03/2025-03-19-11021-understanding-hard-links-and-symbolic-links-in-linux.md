---
title: "Understanding Hard Links and Symbolic Links in Linux"
slug: "understanding-hard-links-and-symbolic-links-in-linux"
date: "2025-03-19T16:20:00"
modified: "2025-03-30T00:13:37"
status: "publish"
post_id: 11021
link: "https://bitcoinversus.tech/2025/03/19/understanding-hard-links-and-symbolic-links-in-linux/"
author_id: 233334105
categories: [34922710, 2509703, 27318186]
tags: [3143923, 610, 142799, 4535465, 105255, 2702604, 885853, 199276, 2509703, 778961815]
featured_media: 11038
---

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">Links in Linux are essential for managing files efficiently, offering flexibility in how files are referenced and accessed. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">Two primary types exist: hard links and symbolic links (also called soft links). While both serve as references to files, they function differently in how they store and manage data.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">A hard link is a direct reference to an inode, which stores the file's metadata, including permissions, ownership, and data blocks. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">A hard link is still a link, but it does not show up with an <code>l</code> at the beginning like a symbolic link (<code>lrwxrwxrwx</code>). Instead, it appears just like a regular file with <code>-rw-rw-r--</code>, because a hard link is essentially another name for the same file on disk.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">Hard links do not point to a different file path. Instead, they point directly to the same inode (file metadata structure) as the original file. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">Since both share the same inode, they are indistinguishable in <code>ls -l</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11033,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2025/03/image-16.png?w=810" alt="" class="wp-image-11033" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none"><em><code>hardlink1.txt</code> and <code>hardlink.txt</code></em> are hard links if they share the same inode number. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">You can confirm this by running </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none"><em><code>ls -li hardlink1.txt hardlink.txt</code></em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">if both files display the same inode, they reference the same data on disk. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">The second column in <code>ls -l</code> shows the link count, which should be greater than one, indicating multiple hard links exist. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">Unlike a traditional shortcut, a hard link is indistinguishable from the original file, meaning deleting the original does not affect the linked file. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">Hard links are beneficial when multiple references to a file are required while maintaining data integrity. They can be created using the <code>ln</code> command without additional flags, as shown below:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none"><em>ln original_file hard_link</em><br><br>This command creates a new file entry pointing to the same inode as the original, meaning any changes to one are reflected in the other.<br><br>A symbolic link, also known as a soft link, differs in that it is merely a pointer to the original file’s path rather than directly linking to its inode.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none"> If the original file is deleted, the symbolic link becomes a broken reference. </p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11027,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2025/03/image-15.png?w=794" alt="" class="wp-image-11027" /></figure>
<!-- /wp:image -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">Symbolic links are useful for organizing files across different directories and maintaining logical structures without duplicating data. They are created using the ln -s command:<br><br><em>ln -s original_file symbolic_link</em><br><br>Unlike hard links, symbolic links can span across different filesystems, making them more flexible but also more susceptible to breaking if the target file is moved or deleted.<br><br>The primary difference between the two lies in their dependence on the original file. Hard links remain functional as long as at least one instance of the file exists, while symbolic links rely on a valid file path. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"textTransform":"none"}},"fontFamily":"roboto"} -->
<p class="has-roboto-font-family" style="text-transform:none">Choosing between them depends on the need for persistence versus flexibility in file referencing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><strong><em><sup><br></sup></em></strong><a href="https://bitcoinversus.tech/"><strong><em><sup>BitcoinVersus.Tech</sup></em></strong></a><strong><em><sup> Editor's Note:</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size"><strong><em><sup>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please </sup></em></strong><a href="https://www.gofundme.com/f/support-bitcoin-mining-data-centers-for-everyone"><strong><em><sup>donate here</sup></em></strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</p>
<!-- /wp:paragraph -->