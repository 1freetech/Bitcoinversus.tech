---
post_id: 22398
title: "Google’s Tensor G5 Is Moving Into Mainline Linux 7.4"
slug: google-tensor-g5-pixel-10-mainline-linux-7-4
status: publish
published: 2026-10-08T22:55:44
live_url: https://bitcoinversus.tech/2026/10/08/google-tensor-g5-pixel-10-mainline-linux-7-4/
featured_media: 22393
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/tensor_g5_mainline_linux_color_pencil_1200x630.jpg
seo_title: "Google Tensor G5 Moves Into Mainline Linux 7.4"
seo_description: "Google Tensor G5 and initial Pixel 10 device-tree support are moving into mainline Linux 7.4 under a new ARCH_GOOGLE platform. Here is what that actually enables."
---

<!-- wp:paragraph -->
<p>Google’s <strong>Tensor G5</strong> is taking an important step toward becoming a first-class citizen in the upstream Linux kernel. Initial support for the SoC family and three Pixel 10 boards has been accepted into the SoC tree for the upcoming <strong>Linux 7.4</strong> development cycle.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The change is deeper than adding another phone model to a compatibility list. Tensor G5 is getting a new <code>ARCH_GOOGLE</code> architecture entry in the kernel, reflecting the fact that Google’s fifth-generation mobile SoC is no longer treated as a derivative of Samsung’s Exynos platform. Earlier Tensor generations grew out of that Samsung lineage; G5 moves onto Google’s own architectural branch.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The upstream work covers the <strong>Laguna</strong> Tensor G5 SoC family plus initial device-tree support for the Pixel 10 codenames <strong>Frankel</strong>, <strong>Blazer</strong> and <strong>Mustang</strong> — corresponding to the Pixel 10, Pixel 10 Pro and Pixel 10 Pro XL. The relevant patch series was accepted after several revisions, according to the <a href="https://lists.openwall.net/linux-kernel/2026/09/29/1177">Linux kernel mailing-list record</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":22394,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/tensor_g5_mainline_linux_body_diagram_1200x720.jpg?w=1024" alt="Technical diagram explaining the stages from Tensor G5 device-tree support to mainline Linux boot and later Android integration." class="wp-image-22394" /><figcaption class="wp-element-caption"><em>Mainline kernel support is only the beginning: device trees and early boot land first, while subsystem drivers and Android integration continue separately.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What has actually landed</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The upstream patch set introduces the architecture definition, Google-specific device-tree directory, initial board descriptions and kernel configuration needed to recognize the Tensor G5 family. The September v3 submission described the current target plainly: the early device trees are sufficient to boot the phones into an <strong>initramfs BusyBox shell</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That matters because a <a href="https://bitcoinversus.tech/2025/05/05/the-linux-kernel/">Linux kernel</a> cannot properly initialize unfamiliar hardware simply because its CPU instruction set is already supported. The kernel also needs a structured description of the board: which devices exist, where their registers live, how interrupts are wired, which clocks and regulators feed them, and how the pieces relate to one another.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On ARM systems, much of that information arrives through the <strong>Device Tree</strong>. Upstreaming those descriptions gives mainline Linux enough knowledge to begin booting the hardware without depending entirely on a vendor-maintained kernel fork.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=5M8k6pOsCmQ","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=5M8k6pOsCmQ
</div><figcaption class="wp-element-caption"><em>Earlier coverage examined the kernel-upgrade work surrounding Pixel 10; the upstream Linux 7.4 changes now provide the concrete mainline architecture and device-tree foundation.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Mainline support is not the same as a production Pixel kernel</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This distinction is easy to lose in headlines. Pixel 10 owners should not expect an ordinary Android update to replace Google’s production kernel with Linux 7.4 overnight. Android devices use Google’s <strong>Generic Kernel Image</strong> model plus vendor modules, hardware-specific drivers, firmware interfaces and a substantial validation process.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The first upstream Tensor G5 support is foundational. Major subsystems such as graphics, cameras, cellular modems, media accelerators and other platform-specific hardware can require separate drivers and additional upstream work before a mainline kernel can operate the complete phone like production Android does.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why “boots mainline Linux” and “fully supports the device” are very different milestones. The current achievement is that the kernel now has a clean upstream place for Google-designed silicon and an accepted representation of the Pixel 10 boards on top of it.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.reddit.com/r/google/comments/1wzsdrp/google_tensor_g5_pixel_10_devices_support_linux_74/","providerNameSlug":"reddit","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-reddit wp-block-embed-reddit"><div class="wp-block-embed__wrapper">
https://www.reddit.com/r/google/comments/1wzsdrp/google_tensor_g5_pixel_10_devices_support_linux_74/
</div><figcaption class="wp-element-caption"><em>Linux and Pixel users are already discussing what the mainline work means — and, importantly, what it does not immediately change on production Android devices.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Tensor G5 needs its own Linux architecture entry</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Google says Tensor G5 is fabricated on a 3 nm process and uses a CPU complex built around Arm Cortex-X4, Cortex-A725 and Cortex-A520 cores, alongside Google’s fourth-generation TPU. The <a href="https://blog.google/products-and-platforms/devices/pixel/tensor-g5-pixel-10/">company’s original Tensor G5 overview</a> focused on AI, imaging and efficiency, but the upstream kernel work reveals another architectural change: the platform has diverged far enough from older Exynos-derived Tensor chips to justify its own kernel family.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That separation matters to maintainers. Instead of carrying Google-specific assumptions inside Samsung platform code indefinitely, Linux can model the hardware according to its actual ancestry. The result is cleaner platform organization and a better base for future Google silicon.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why upstreaming matters</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Mainline hardware support reduces the amount of permanently out-of-tree code needed to keep a platform alive. It also exposes code to the broader Linux review process, makes changes easier to test against future kernels and can improve long-term maintainability after the original product generation is no longer new.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The same principle is one reason projects across the Linux ecosystem continually work to move vendor code upstream instead of freezing hardware support into a single shipping kernel. BitcoinVersus recently covered the continuing <a href="https://bitcoinversus.tech/2026/10/05/linux-7-3-rc6-ai-normal-kernel-patch-volume/">Linux 7.3 development cycle</a> and the broader relationship between applications and the kernel through <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-system-call-syscall-user-mode-kernel-mode/">system calls</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For Tensor G5, upstreaming is still early, but the direction is clear. Google’s newest mobile silicon is no longer just hardware supported inside Android’s production tree; it now has an architectural foothold in mainline Linux itself.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For the detailed kernel-side status, see Michael Larabel’s <a href="https://www.phoronix.com/news/Linux-7.4-Google-Tensor-G5">Phoronix report</a> and the accepted upstream patch discussion linked above.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity" />
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Editor's Note:</strong> BitcoinVersus.Tech covers computing, semiconductors, infrastructure and open-source engineering from an independent technical perspective.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Disclaimer: This article is for informational and educational purposes and does not constitute financial, investment or purchasing advice.</em></p>
<!-- /wp:paragraph -->