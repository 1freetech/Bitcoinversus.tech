---
title: "Linux Command #48 – chgrp (Linux OS)"
status: published
wordpress_post_id: 22395
published: "2026-10-08T22:55:11"
live_url: "https://bitcoinversus.tech/2026/10/08/linux-command-48-chgrp-linux-os/"
series: "Linux Command"
subject: linux
lesson_number: "048"
featured_media_id: 22390
featured_image_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux-command-48-chgrp-cover.jpg"
body_media_id: 22391
youtube_1: "https://www.youtube.com/watch?v=z-wyA6FZRcs"
youtube_2: "https://www.youtube.com/watch?v=P3DHLMEU5lo"
social_1: "https://www.reddit.com/r/linuxquestions/comments/urxvhq/"
no_text_boxes: true
---

<!-- wp:paragraph -->
<p><strong><code>chgrp</code> changes the group ownership of files and directories.</strong> It is a natural follow-up to <a href="https://bitcoinversus.tech/2026/10/08/linux-command-47-newgrp-linux-os/"><strong>Linux Command #47 — <code>newgrp</code></strong></a>. <code>newgrp</code> changes the active group context of a shell session; <code>chgrp</code> changes the group recorded on a filesystem object.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22391,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux-command-48-chgrp-body.jpg?w=1024" alt="Computer screen displaying terminal prompts in a technical workspace." class="wp-image-22391" /><figcaption class="wp-element-caption"><em>Terminal-based ownership and permissions work is a routine part of Linux administration. Photo: Bernd Dittrich / Unsplash.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Basic Syntax</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>chgrp GROUP FILE</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The GNU Coreutils manual defines <code>chgrp</code> as changing the group ownership of each specified file. The group can normally be written as a group name or numeric group ID. The current Linux manual documents the general form as <code>chgrp [OPTION]... GROUP FILE...</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>chgrp developers report.txt</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This changes only the group ownership of <code>report.txt</code> to <code>developers</code>. It does not change the file’s user owner and it does not automatically change the file’s permission bits.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=z-wyA6FZRcs","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=z-wyA6FZRcs
</div><figcaption class="wp-element-caption"><em>A focused demonstration of <code>chgrp</code>, including single-file changes, verification with <code>ls -l</code>, and recursive directory use.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Group Ownership Is Not the Same as Permission</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A Linux file has an owning user, an owning group, and permission bits. <code>chgrp</code> changes the owning group. Whether members of that group can read, write, or execute the file still depends on the group permission bits. That is why <code>chgrp</code> is often used alongside <code>chmod</code>, but the two commands perform different jobs.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>ls -l report.txt
chgrp developers report.txt
ls -l report.txt</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Always verify the result instead of assuming the change worked. <code>ls -l</code> is the quick check; <code>stat report.txt</code> gives a more detailed view of ownership and metadata.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Changing a Directory Group</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>chgrp developers /srv/project</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This changes the group on the directory itself. It does not automatically walk through every file already inside the directory. For an existing tree, GNU <code>chgrp</code> provides the recursive <code>-R</code> option.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>chgrp -R developers /srv/project</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Recursive ownership changes deserve care. Before using <code>-R</code>, confirm the starting path with commands such as <code>pwd</code>, <code>ls -ld</code>, or <code>find</code>. A typo in a privileged recursive command can affect a much larger part of the filesystem than intended.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Use --reference to Copy Group Ownership</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>GNU <code>chgrp</code> can copy the group ownership from another file instead of requiring you to type the group name manually. This is useful when matching an existing file or directory that already has the desired group.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>chgrp --reference=known-good.txt new-file.txt</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Afterward, verify both objects with <code>ls -l</code> or <code>stat</code>. The <code>--reference</code> form reduces guessing when you want one object to follow another object’s group ownership.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Verbose and Changes-Only Output</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><code>-v</code> or <code>--verbose</code> — report every file processed.</li><li><code>-c</code> or <code>--changes</code> — report only when a change is actually made.</li><li><code>-f</code> or <code>--silent</code>/<code>--quiet</code> — suppress most error messages.</li></ul>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code>chgrp -v developers report.txt
chgrp -c developers *.log</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>For administration work, <code>-v</code> and <code>-c</code> can make a change easier to audit. They do not replace verification, but they give immediate feedback about what the command processed.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=P3DHLMEU5lo","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=P3DHLMEU5lo
</div><figcaption class="wp-element-caption"><em>Eli the Computer Guy — Linux ownership, groups, <code>chown</code>, and <code>chmod</code>, providing the broader ownership-and-permissions context for <code>chgrp</code>.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">chgrp vs. chown</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>chgrp</code> is dedicated to changing the group owner. GNU <code>chown</code> can change the user owner, the group owner, or both. For example, <code>chown :developers report.txt</code> changes only the group and therefore overlaps with what <code>chgrp developers report.txt</code> does. Using <code>chgrp</code> can make your intent clearer when group ownership is the only attribute you want to change.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Symlinks and Recursive Traversal</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Recursive ownership commands interact with symbolic links, so GNU <code>chgrp</code> provides traversal controls such as <code>-H</code>, <code>-L</code>, and <code>-P</code>. The current GNU manual documents <code>-P</code> as the default recursive behavior. Treat <code>-L</code> with special caution because following every symbolic link encountered can cause a recursive operation to reach locations outside the directory tree you thought you were changing.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/linuxquestions/comments/urxvhq/","type":"rich","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/linuxquestions/comments/urxvhq/
</div><figcaption class="wp-element-caption"><em>A directly relevant LinuxQuestions discussion shows the practical relationship between changing a file’s group ownership with <code>chgrp</code> and then assigning the appropriate group permission bits.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Shared-Directory Example</h2>
<!-- /wp:heading -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo chgrp developers /srv/project
sudo chmod 2770 /srv/project
ls -ld /srv/project</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Here, <code>chgrp</code> assigns the directory to the <code>developers</code> group. The <code>chmod 2770</code> example is a separate permission change: it gives owner and group full directory access, blocks access for others, and sets the set-group-ID bit on the directory so newly created entries can inherit the directory’s group. Use values appropriate to the actual system rather than copying permission modes blindly.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Quick Lab</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>Create a harmless test file: <code>touch chgrp-test.txt</code>.</li><li>Inspect it with <code>ls -l chgrp-test.txt</code>.</li><li>Choose a group your account is allowed to assign.</li><li>Run <code>chgrp groupname chgrp-test.txt</code>.</li><li>Run <code>ls -l chgrp-test.txt</code> again and identify the changed group field.</li><li>Run <code>stat chgrp-test.txt</code> for a more detailed ownership check.</li><li>Delete the test file when finished.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Knowledge Check + Answers</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li><strong>What does <code>chgrp</code> change?</strong> The group ownership of a file or directory.</li><li><strong>Does <code>chgrp</code> automatically give the group read or write access?</strong> No. Permission bits are controlled separately.</li><li><strong>Which option changes a directory tree recursively?</strong> <code>-R</code> or <code>--recursive</code>.</li><li><strong>How can you copy group ownership from another file?</strong> Use <code>--reference=RFILE</code>.</li><li><strong>Which command can also change group ownership while optionally changing user ownership?</strong> <code>chown</code>.</li><li><strong>What should you do after changing ownership?</strong> Verify the result with tools such as <code>ls -l</code> or <code>stat</code>.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Prior Linux Command Lessons</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><a href="https://bitcoinversus.tech/2026/10/02/linux-command-34-id/"><strong>#34 — <code>id</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/02/linux-command-35-groups/"><strong>#35 — <code>groups</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/03/linux-command-40-groupadd/"><strong>#40 — <code>groupadd</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/05/linux-command-42-groupmod/"><strong>#42 — <code>groupmod</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/07/linux-command-46-gpasswd/"><strong>#46 — <code>gpasswd</code></strong></a></li><li><a href="https://bitcoinversus.tech/2026/10/08/linux-command-47-newgrp-linux-os/"><strong>#47 — <code>newgrp</code></strong></a></li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Primary References</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><a href="https://www.gnu.org/software/coreutils/manual/html_node/chgrp-invocation.html"><strong>GNU Coreutils — chgrp invocation</strong></a></li><li><a href="https://man7.org/linux/man-pages/man1/chgrp.1.html"><strong>Linux man-pages — chgrp(1)</strong></a></li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The featured image and body image are separate. The lesson uses normal responsive Gutenberg headings, paragraphs, lists, images, embeds, and code blocks for actual commands. No ordinary lesson prose is placed inside decorative text boxes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech is not a financial advisor. Content is provided for informational and educational purposes.</p>
<!-- /wp:paragraph -->