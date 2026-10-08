---
post_id: 21937
title: "IT: What Is an Interrupt? How IRQs and ISRs Let Hardware Get the CPU’s Attention"
live_url: "https://bitcoinversus.tech/2026/10/08/it-what-is-interrupt-irq-isr-cpu-operating-system/"
featured_media_id: 21934
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/interrupts-irq-isr-cpu-motherboard-1200x630-1.jpg"
status: publish
---
<!-- wp:paragraph -->
<p>An <strong>interrupt</strong> is a signal that tells the <a href="https://bitcoinversus.tech/2026/10/06/how-does-a-cpu-actually-run-a-program/"><strong>CPU</strong></a> that something needs attention. Instead of forcing the processor to constantly ask every device, “Do you need me yet?”, hardware can raise an interrupt when an event actually happens.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The beginner version is simple: <strong>device raises an interrupt → CPU pauses normal work → the <a href="https://bitcoinversus.tech/2026/03/30/the-kernel/"><strong>kernel</strong></a> runs the correct interrupt handler → the system returns to what it was doing.</strong> That basic mechanism is how keyboards, storage devices, network adapters, timers, and many embedded systems get fast attention without wasting CPU time on constant polling.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=VjPgYcQqqN0","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=VjPgYcQqqN0
</div><figcaption class="wp-element-caption"><em>Neso Academy introduces the basic computer-system model, including CPUs, device controllers, interrupts, and system calls.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Why Interrupts Exist</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Imagine a computer with no interrupts. The processor might have to repeatedly check the keyboard, mouse, <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-nic-network-interface-card-servers-asic-miners/"><strong>network interface card</strong></a>, storage controller, USB devices, and timers just to see whether anything changed. That approach is called <strong>polling</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Polling is sometimes useful, but doing it constantly can waste CPU cycles. Interrupts let hardware announce events only when necessary. A device essentially says, “I have something ready,” and the processor temporarily redirects execution to code that knows how to service that event.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":21935,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/interrupt-controller-circuit-board.jpg?w=1024" alt="Macro photograph of computer circuit-board components representing hardware devices and interrupt signaling." class="wp-image-21935" /><figcaption class="wp-element-caption"><em>Hardware devices can signal the processor instead of waiting for the CPU to poll them continuously. Photo by Umberto on Unsplash.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>IRQ Means Interrupt Request</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>IRQ</strong> stands for <strong>interrupt request</strong>. Historically, devices used dedicated interrupt lines routed through the <a href="https://bitcoinversus.tech/2025/03/30/motherboard-overview/"><strong>motherboard</strong></a> and interrupt-controller hardware. Modern systems also use message-signaled interrupts, where a device writes a special value that causes the interrupt controller and CPU to recognize the event.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Microsoft’s <a href="https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-interrupt-service-routines"><strong>interrupt-service-routine documentation</strong></a> notes that Windows drivers can handle both traditional line-based interrupts and message-signaled interrupts. The implementation changes, but the purpose is the same: a device needs a controlled path to get processor attention.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>An Interrupt Controller Routes the Request</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A modern computer can have many interrupt sources, so the processor needs help deciding what happened and which handler should run. Interrupt-controller hardware receives requests, prioritizes them, and routes them toward one or more CPU cores.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On x86 systems, modern interrupt routing is commonly associated with the APIC family of controllers. Other processor architectures have their own designs. The <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-motherboard-chipsets-explained/"><strong>motherboard chipset</strong></a>, CPU architecture, firmware, and operating system all participate in building the final interrupt path.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The ISR Is the First Handler</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An <strong>interrupt service routine</strong>, or <strong>ISR</strong>, is the code that runs when the operating system accepts a particular interrupt. A physical-device <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-what-is-a-device-driver-how-hardware-talks-to-the-operating-system/"><strong>device driver</strong></a> commonly registers the handler that should respond to its hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ISRs are normally designed to do only the time-critical work first. Microsoft recommends quickly capturing volatile device information in the ISR and deferring slower work until later. That keeps the processor from spending too long in a high-priority interrupt context.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=xRaApI85Zqo","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=xRaApI85Zqo
</div><figcaption class="wp-element-caption"><em>This NPTEL operating-systems lecture focuses specifically on interrupts, interrupt controllers, descriptors, traps, exceptions, and interrupt-service routines.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Interrupt Handlers Should Be Fast</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When the CPU is handling an interrupt, normal work may be delayed. That is why interrupt handlers should usually do the minimum urgent work and then schedule the rest for a lower-priority context.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Windows commonly separates the fast ISR from later work such as a deferred procedure call. Linux has its own mechanisms for splitting urgent interrupt work from deferred processing. The exact names differ, but the performance principle is similar: <strong>acknowledge the hardware quickly, preserve critical state, then get out of the highest-priority path.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Hardware Interrupts Come From Devices</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A <strong>hardware interrupt</strong> begins with a physical event outside the currently executing software flow. A packet can arrive at a NIC, a storage controller can finish an I/O operation, a timer can expire, or a USB controller can report a completed transfer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes interrupts fundamental to <a href="https://bitcoinversus.tech/category/information-technology/"><strong>IT</strong></a> troubleshooting. A driver problem, bad hardware, incorrect firmware, or an interrupt storm can create high CPU use, latency, dropped data, or a device that appears frozen even when the rest of the system is healthy.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Software Can Trigger Exceptions and Traps Too</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Not every event that redirects CPU execution comes directly from external hardware. Processors also generate <strong>exceptions</strong> when software causes conditions such as invalid instructions, divide errors, or page faults. Software can also deliberately enter protected operating-system code through mechanisms used by <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-system-call-syscall-user-mode-kernel-mode/"><strong>system calls</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The words interrupt, exception, trap, and fault are sometimes used differently across architectures and operating systems. The important beginner distinction is that hardware interrupts are generally asynchronous external events, while exceptions are usually tied to the instruction stream currently executing.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Page Faults Are a Familiar Exception</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-virtual-memory-ram-pagefile-swap-page-faults/"><strong>virtual-memory</strong></a> system provides a good example. If a program touches a virtual-memory page that is not currently mapped the way the CPU expects, the processor raises a page fault. The kernel inspects the condition, updates mappings or loads data if appropriate, and then allows the program to continue when the fault is recoverable.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That shows the broader pattern: the CPU detects an event, stops the normal instruction flow, transfers control to privileged code, and resumes later if the operating system can handle the condition safely.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Interrupts Matter in Networking</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A busy network adapter can generate a huge number of events. The driver and kernel therefore have to balance responsiveness against overhead. If the operating system interrupted the CPU separately for every tiny packet event at extreme data rates, the interrupt overhead itself could become expensive.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Modern NICs and drivers use techniques such as interrupt moderation, batching, queue steering, and polling hybrids to reduce this cost. That ties interrupts directly to the broader topics of <a href="https://bitcoinversus.tech/2026/10/04/osntc-014-tcp-udp-transport-basics/"><strong>TCP and UDP</strong></a>, packet processing, CPUs, and high-speed networking.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Storage Devices Use Interrupts After I/O Completes</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Storage is another classic example. A program requests file data through the operating system. The kernel and <a href="https://bitcoinversus.tech/2026/10/06/ositc-002-storage-file-systems-hdds-ssds-partitions-volumes-ntfs-ext4-mounting-basic-diagnostics/"><strong>file system</strong></a> arrange the I/O. The storage hardware works independently, and then the device can signal completion so the CPU knows the requested operation has progressed or finished.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This event-driven model lets the processor work on other <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-process-vs-thread-how-your-cpu-runs-multiple-tasks/"><strong>processes and threads</strong></a> instead of waiting in a tight loop for every storage transaction.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Embedded Systems Depend Heavily on Interrupts</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Interrupts are also central to <a href="https://bitcoinversus.tech/2026/10/05/osfec-002-real-time-firmware-scheduling-superloops-rtos-tasks-priorities-preemption-timing/"><strong>real-time firmware</strong></a>. A microcontroller may need to react to a timer edge, sensor transition, serial byte, motor-control event, or emergency input within a predictable amount of time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Embedded startup code often contains an interrupt-vector table that tells the processor which handler belongs to each interrupt or exception. BitcoinVersus.Tech covered that relationship in the <a href="https://bitcoinversus.tech/2026/10/06/osfec-004-linker-scripts-startup-code-memory-sections-vector-tables-stack-heap-map-files/"><strong>vector-table and startup-code lesson</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://bsky.app/profile/alex.zenla.io/post/3lbcgbqfhk226","type":"rich","providerNameSlug":"bluesky","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-bluesky wp-block-embed-bluesky"><div class="wp-block-embed__wrapper">
https://bsky.app/profile/alex.zenla.io/post/3lbcgbqfhk226
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>This Linux-kernel debugging post gives a real-world example of engineers working on virtual IRQ race conditions—the kind of edge case that appears when interrupt delivery, devices, and kernel timing interact.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Edge-Triggered and Level-Triggered Interrupts</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Interrupts can be delivered using different signaling models. An <strong>edge-triggered</strong> interrupt represents a transition, such as a signal changing state. A <strong>level-triggered</strong> interrupt remains asserted while a condition is active and generally must be cleared correctly before the system considers the event finished.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Linux kernel’s <a href="https://www.kernel.org/doc/html/latest/core-api/genericirq.html"><strong>generic IRQ documentation</strong></a> describes separate handling paths for edge, level, per-CPU, and other interrupt types. Device drivers can request and manage interrupts without having to implement every low-level interrupt-controller detail themselves.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Interrupt Latency Measures Response Time</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Interrupt latency</strong> is the delay between an interrupt becoming pending and the processor beginning the relevant handling work. On an ordinary desktop, tiny variations may not matter. In robotics, industrial control, audio, networking, or real-time systems, latency and jitter can become critical engineering limits.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is one reason high-priority handlers should stay short. Long interrupt-disabled sections or overloaded interrupt paths can delay other time-sensitive work and make the whole system less predictable.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Too Many Interrupts Can Become an Interrupt Storm</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An <strong>interrupt storm</strong> happens when a device or software path generates interrupts so aggressively that the processor spends excessive time servicing them. Possible causes include faulty hardware, driver bugs, incorrectly cleared interrupt status, misconfiguration, or an unusually heavy workload.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On Linux, <code>/proc/interrupts</code> can help show how interrupts are distributed across CPU cores and devices. The kernel community continues to refine that interface for modern high-frequency workloads, which shows that interrupt accounting remains an active systems-engineering concern in 2026.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Simple Way to Remember Interrupts</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>An interrupt is a request for immediate CPU attention. An IRQ identifies or carries the request. An ISR is the first handler that responds.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The basic chain is: <strong>device or CPU event → IRQ or exception → interrupt controller / processor entry logic → kernel → ISR or handler → deferred work → return to normal execution.</strong> Keep that chain in order and the connection between CPUs, <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-what-is-a-device-driver-how-hardware-talks-to-the-operating-system/"><strong>drivers</strong></a>, hardware, firmware, and the <a href="https://bitcoinversus.tech/2026/03/30/the-kernel/"><strong>kernel</strong></a> becomes much easier to understand.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><strong>Editor’s Note</strong></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Featured image: realistic computer-hardware photograph via Unsplash, cropped to exactly 1200×630. Body circuit-board photograph: Umberto via Unsplash. The Neso Academy and NPTEL videos are distinct and directly relevant to interrupts, IRQs, interrupt controllers, and ISRs. The Bluesky post is directly relevant to Linux virtual-IRQ debugging.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support and donation options are available through BitcoinVersus.Tech.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech is not a financial advisor. Content is provided for informational and educational purposes.</p>
<!-- /wp:paragraph -->