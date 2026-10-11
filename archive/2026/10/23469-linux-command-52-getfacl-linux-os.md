---
post_id: 23469
title: "Linux Command #52 – getfacl (Linux OS)"
live_url: "https://bitcoinversus.tech/2026/10/10/linux-command-52-getfacl-linux-os/"
featured_media_id: 23468
status: publish
---

<!-- wp:paragraph -->
<p><strong><code>getfacl</code> displays the Access Control List attached to a Linux file or directory.</strong> It is the natural follow-up to <a href="https://bitcoinversus.tech/2026/10/10/linux-command-51-umask-linux-os/">Linux Command #51 – umask</a>, because default ACLs can change the permissions newly created files receive even when the shell's umask appears straightforward.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What getfacl shows</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Run <code>getfacl FILE</code> or <code>getfacl DIRECTORY</code>. The command prints the object's owner, group, and ACL entries. According to the Linux manual, it displays the access ACL for every file and also displays a directory's default ACL when one exists. Regular files cannot have default ACLs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A basic ACL can resemble the familiar owner, group, and other permissions. Extended ACLs can add named users, named groups, a mask entry, and—on directories—default entries that influence newly created objects.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large","linkDestination":"custom"} -->
<figure class="wp-block-image size-large"><a href="https://access.redhat.com/discussions/15007cef-dd45-47ce-a1cd-1ff61bc27023"><img src="https://access.redhat.com/sites/profiles/files/discussion/attachments/2022-06/acl_problem2.png" alt="Red Hat community ACL terminal example showing getfacl output for named users and an ACL mask." /></a><figcaption class="wp-element-caption"><em>A real Red Hat community troubleshooting example shows how <code>getfacl</code> exposes named-user entries, group permissions, and the ACL mask.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Read a simple ACL</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If <code>getfacl report.txt</code> prints <code>user::rw-</code>, <code>group::r--</code>, and <code>other::---</code>, those three entries correspond closely to the traditional permission bits you already learned with <a href="https://bitcoinversus.tech/2026/10/10/linux-command-50-chmod-linux-os/">Linux Command #50 – chmod</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the output also contains something like <code>user:alice:r--</code>, that is a named-user ACL entry granting Alice explicit permissions without changing the file's owner or primary group. If <code>ls -l</code> shows a trailing <code>+</code> after the permission string, that is a strong clue that an extended ACL is present.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=UH60yCzEOE8","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=UH60yCzEOE8
</div><figcaption class="wp-element-caption"><em>This hands-on Linux ACL walkthrough demonstrates <code>getfacl</code>, <code>setfacl</code>, named entries, masks, and default ACL behavior.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The ACL mask is a ceiling</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The <code>mask::</code> entry is one of the most important lines in extended ACL output. The Linux manual explains that the mask limits the effective rights of named users, the owning group, and named groups. The file owner and the <code>other</code> entry are not limited by that ACL mask.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That means an entry can appear to grant <code>rwx</code> while the effective permission is smaller. When this happens, <code>getfacl</code> can print an <code>#effective:</code> comment beside the affected entry. Do not troubleshoot only from the entry itself—read the mask too.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/Rajeshstwt/status/2071627636246474839","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/Rajeshstwt/status/2071627636246474839
</div><figcaption class="wp-element-caption"><em>A #100DaysOfDevOps ACL exercise shows Linux ACL management in practical automation work.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Inspect default ACLs</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Run <code>getfacl DIRECTORY</code> on a directory that uses inherited permissions. Entries beginning with <code>default:</code> describe the ACL template used when new files or subdirectories are created there. The Linux ACL manual distinguishes this default ACL from the directory's own access ACL.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is where <code>getfacl</code> connects back to <code>umask</code>. A default ACL can alter the resulting permissions of newly created objects, so if file permissions do not match what you predicted from the current mask, inspect the parent directory's default ACL before assuming the mask is wrong.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Useful read-only options</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li><code>getfacl FILE</code> — show the file's ACL.</li><li><code>getfacl DIRECTORY</code> — show the directory's access ACL and any default ACL.</li><li><code>getfacl -a FILE</code> — display only the access ACL.</li><li><code>getfacl -d DIRECTORY</code> — display the default ACL.</li><li><code>getfacl -c FILE</code> — omit the comment header.</li><li><code>getfacl -n FILE</code> — show numeric user and group IDs instead of names.</li><li><code>getfacl -R DIRECTORY</code> — inspect ACLs recursively. Use this carefully on large trees because the output can be extensive.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The command is primarily an inspection tool; it does not modify the ACL. The companion command that changes ACLs is <code>setfacl</code>, which will be covered separately.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Troubleshooting example</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Suppose a user says, “The file shows read permission for me, but access still fails.” Start with <code>ls -l FILE</code>, then run <code>getfacl FILE</code>. Check the named user or group entry, the <code>mask::</code> line, and every parent directory's execute/search permission. ACLs do not bypass the need to traverse the directory path.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Also remember that ownership still matters. <a href="https://bitcoinversus.tech/2026/10/09/linux-command-49-chown-linux-os/">Linux Command #49 – chown</a> changes ownership, while <code>getfacl</code> reads the more detailed access rules layered on top of the traditional model.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practice lab</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>Create a disposable file with <code>touch acl-lab.txt</code>.</li><li>Run <code>ls -l acl-lab.txt</code> and record the ordinary permission bits.</li><li>Run <code>getfacl acl-lab.txt</code> and identify the owner, group, and other entries.</li><li>Run <code>getfacl -c acl-lab.txt</code> and compare the shorter output.</li><li>Create a disposable directory and run <code>getfacl -d DIRECTORY</code>. Explain what it means if no default ACL entries appear.</li><li>Do not modify system ACLs during this exercise.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Knowledge check</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>What does <code>getfacl</code> display?</li><li>Can a regular file have a default ACL?</li><li>What does the ACL mask limit?</li><li>What does a trailing <code>+</code> in <code>ls -l</code> usually indicate?</li><li>Which companion command modifies ACL entries?</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Answer guide</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li>The access ACL of a file or directory, plus the default ACL when the target is a directory that has one.</li><li>No. Default ACLs belong to directories.</li><li>The effective permissions of named users, the owning group, and named groups.</li><li>That extended ACL information is associated with the object.</li><li><code>setfacl</code>.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key takeaway</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>When ordinary <code>chmod</code> permissions do not explain who can access a file, run <code>getfacl</code>.</strong> It exposes named users, named groups, ACL masks, and inherited default rules that are invisible in the basic owner/group/other model.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Advertisement</strong></p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/1BitcoinVersus/status/1937006164555993338","type":"rich","providerNameSlug":"x","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-x wp-block-embed-x"><div class="wp-block-embed__wrapper">
https://twitter.com/1BitcoinVersus/status/1937006164555993338
</div><figcaption class="wp-element-caption"><em>Follow BitcoinVersus.Tech for independent technology reporting and open-source technical education.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><strong><em><sup>BitcoinVersus.Tech Editor's Note:</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em><sup>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->