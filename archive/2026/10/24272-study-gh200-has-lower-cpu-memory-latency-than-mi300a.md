---
post_id: 24272
title: "Study: GH200 Has Lower CPU Memory Latency Than MI300A"
slug: study-gh200-has-lower-cpu-memory-latency-than-mi300a
status: publish
published: 2026-10-13T06:20:53
modified: 2026-10-13T06:20:53
live_url: https://bitcoinversus.tech/2026/10/13/study-gh200-has-lower-cpu-memory-latency-than-mi300a/
featured_media: 24270
featured_image: https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/nvidia-gh200-grace-hopper-official-1200x630-1.jpg
qr_media_id: 24026
seo_title: "Study: GH200 Has Lower CPU Memory Latency Than MI300A"
seo_description: "A new open-access study compares CPU-initiated memory access on NVIDIA GH200 and AMD MI300A. GH200 CPU-local memory showed lower random-read latency, while MI300A's unified HBM3 architecture carries different tradeoffs."
---

<!-- wp:paragraph -->
<p>A new open-access study published October 9, 2026, directly compared CPU-initiated memory access on NVIDIA’s GH200 Grace Hopper and AMD’s MI300A. The researchers found that <strong>MI300A mean random-read latency was 40–430 ns higher than GH200 CPU-local memory</strong> across the tested region sizes.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">The architectures behave differently</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The <a href="https://link.springer.com/article/10.1007/s13222-026-00563-7" target="_blank" rel="noopener noreferrer">Datenbank-Spektrum study</a> used CXL-Bench on systems in the Hasso Plattner Institute Scientific Compute Cluster. GH200 combines a 72-core Grace CPU with Hopper GPU memory over NVLink-C2C, while MI300A places 24 Zen 4 CPU cores and CDNA 3 GPU compute around a shared 128 GiB HBM3 memory space.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://twitter.com/HPC_Guru/status/1728054243582423454","type":"rich","providerNameSlug":"twitter","responsive":true,"className":"wp-block-embed-twitter"} -->
<figure class="wp-block-embed is-type-rich is-provider-twitter wp-block-embed-twitter"><div class="wp-block-embed__wrapper">
https://twitter.com/HPC_Guru/status/1728054243582423454
</div><figcaption class="wp-element-caption"><em>HPC Guru highlighted AMD’s MI300A unified-memory design when the architecture was introduced. The post is background context, not evidence for the new benchmark.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>GH200’s lower CPU-local latency comes with a tradeoff. When its CPU accesses Hopper’s HBM3 instead, the study measured roughly <strong>2×–3× higher latency</strong> than GH200 CPU memory, with mean latency reaching about 593 ns. MI300A exposes its HBM3 as unified memory rather than maintaining separate CPU and GPU memory pools.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Large memory regions exposed another difference</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>On MI300A, increasing the tested memory region from 8 GiB to 90 GiB pushed random-read latency up by more than 2×. The authors attribute that behavior to where data lands among the chip’s HBM3 modules and the extra inter-I/O-die traversal required for farther memory.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Throughput also became more sensitive to region and access size on MI300A. At the largest 90 GiB region and smallest 8-byte read size, measured throughput fell to <strong>27 GiB/s—14% of the 186 GiB/s maximum</strong>. By comparison, GH200 throughput changed relatively little as region size increased in the tested workloads.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=pVl25BbczLI","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=pVl25BbczLI
</div><figcaption class="wp-element-caption"><em>AMD’s official Advancing AI presentation includes the MI300A architecture and its unified CPU-GPU HBM3 design. It provides product context, not independent validation of the study.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">No universal winner</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The paper is a memory-access study, not a full application, AI-training or GPU-performance benchmark. GH200 showed an advantage for latency-sensitive CPU-local access and more stable throughput across region sizes, while MI300A offers a unified 128 GiB HBM3 address space with different placement tradeoffs. The test systems also used different CPU core counts and page sizes, so the results should not be generalized to every workload.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech has also covered <a href="https://bitcoinversus.tech/2026/09/27/amd-epyc-venice-nvidia-vera-server-tests/">AMD’s EPYC Venice versus NVIDIA Vera server claims</a>, <a href="https://bitcoinversus.tech/2026/10/07/computing-what-is-vram-gpu-dedicated-memory/">how dedicated GPU memory works</a>, and <a href="https://bitcoinversus.tech/2026/09/29/cowos-l-pushes-ai-chip-packaging-beyond-reticle-limits/">advanced packaging for large AI chips</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>BitcoinVersus.Tech Editor's Note:<br>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate using the QR code provided</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>For best QR-code scanning results, please scan this donation code from a desktop or larger screen. Mobile screens may prevent camera recognition.</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":24026,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/img_06542.jpeg" alt="BitcoinVersus.Tech 5,000-sat donation QR code." class="wp-image-24026" /></figure>
<!-- /wp:image -->