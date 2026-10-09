---
post_id: 22412
title: "File System Directory #11: /tmp (Linux OS)"
slug: file-system-directory-11-tmp-linux-os
status: publish
published: 2026-10-08T23:17:52
live_url: https://bitcoinversus.tech/2026/10/08/file-system-directory-11-tmp-linux-os/
featured_media: 22410
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux_fs_directory_11_tmp_color_pencil_1200x630.jpg
seo_title: "File System Directory #11: /tmp (Linux OS)"
seo_description: "Learn what the /tmp directory does in Linux, why it is temporary, how its sticky-bit permissions work, and how it differs from /var/tmp."
---

<!-- wp:paragraph -->
<p>The <code>/tmp</code> directory in Linux is used for temporary files created by applications, services, scripts, and users while the system is running.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Files stored in <code>/tmp</code> are not meant to be permanent. Many Linux systems clean this directory during boot or through scheduled cleanup policies, so important data should never be stored there with the expectation that it will remain indefinitely.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=WdInegtTTCE","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=WdInegtTTCE
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>A common difference between <code>/tmp</code> and <a href="https://bitcoinversus.tech/2025/06/20/file-system-directory-13-var-linux-os/"><code>/var/tmp</code></a> is persistence. <code>/tmp</code> is intended for short-lived scratch data, while <code>/var/tmp</code> is generally used for temporary files that may need to survive a reboot.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The <code>/tmp</code> directory is normally writable by all users, but it is protected by the sticky bit. Running <code>ls -ld /tmp</code> often shows permissions similar to <code>drwxrwxrwt</code>. The final <code>t</code> means users can create their own files in the shared directory without normally being able to delete files owned by other users.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22411,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/linux_tmp_directory_terminal_example_1200x700.jpg?w=1024" alt="Linux terminal example showing ls -ld /tmp, creating a temporary file, listing it, and removing it." class="wp-image-22411"/><figcaption class="wp-element-caption"><em>A simple terminal example showing the <code>/tmp</code> directory, its sticky-bit permissions, and a temporary test file.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In the screenshot, the user first checks the permissions on <code>/tmp</code> with <code>ls -ld /tmp</code>. They then create a test file with <code>touch /tmp/linux-directory-11-test</code>, confirm that it exists with <code>ls -l</code>, and remove it with <code>rm</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For Linux+ certification, understanding <code>/tmp</code> helps explain where Linux applications place short-term working files, why temporary data should not be treated as permanent storage, and how shared-directory permissions protect a multi-user system.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/linuxquestions/comments/tzi91z/question_about_tmp_directory/","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/linuxquestions/comments/tzi91z/question_about_tmp_directory/
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>The earlier directory entries in this series include <a href="https://bitcoinversus.tech/2025/06/15/file-system-directory-10-usr-linux-os/"><code>/usr</code></a>, <a href="https://bitcoinversus.tech/2025/06/05/file-system-directory-10-opt-linux-os/"><code>/opt</code></a>, and <a href="https://bitcoinversus.tech/2025/06/04/file-system-directory-8-mnt-linux-os/"><code>/mnt</code></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://bitcoinversus.tech/"><strong><em><sup>BitcoinVersus.Tech</sup></em></strong></a><strong><em><sup> Editor's Note:</sup></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech publishes practical Linux, IT, engineering, and infrastructure education for informational purposes.</p>
<!-- /wp:paragraph -->