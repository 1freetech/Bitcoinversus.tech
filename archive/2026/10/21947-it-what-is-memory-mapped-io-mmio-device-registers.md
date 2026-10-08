---
post_id: 21947
title: "IT: What Is Memory-Mapped I/O? How CPUs and Drivers Control Hardware Through Device Registers"
live_url: "https://bitcoinversus.tech/2026/10/08/it-what-is-memory-mapped-io-mmio-device-registers/"
featured_media_id: 21945
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/mmio-memory-mapped-io-device-registers-1200x630-1.jpg"
status: publish
---
<!-- wp:paragraph -->
<p><strong>Memory-mapped I/O</strong>, usually shortened to <strong>MMIO</strong>, is a way for a CPU to control hardware devices by giving their registers addresses inside the processor’s memory address space.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The simple version is: <strong>software reads or writes a special address, and that access goes to hardware instead of ordinary RAM.</strong> A <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-what-is-a-device-driver-how-hardware-talks-to-the-operating-system/"><strong>device driver</strong></a> can use those addresses to read device status, configure settings, acknowledge events, start work, or tell a controller where data should go.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=6GX3bsujWyE","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=6GX3bsujWyE
</div><figcaption class="wp-element-caption"><em>Troonics gives a beginner-friendly explanation of memory-mapped I/O, peripheral registers, and how CPUs use ordinary addresses to control hardware.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Start With the Address Space</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A <a href="https://bitcoinversus.tech/2026/10/06/how-does-a-cpu-actually-run-a-program/"><strong>CPU</strong></a> works with addresses. Some addresses ultimately refer to normal system <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-virtual-memory-ram-pagefile-swap-page-faults/"><strong>memory</strong></a>. With MMIO, other address ranges are reserved for hardware devices and their control registers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That means an address does not automatically mean “RAM.” The platform’s memory map determines what lives at each physical address range. Depending on the system, a region may point to RAM, firmware, a PCIe device, a graphics frame buffer, a microcontroller peripheral, or another hardware block.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":21946,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/mmio-pcie-motherboard-device-registers.jpg?w=1024" alt="Motherboard and PCIe hardware representing memory-mapped device registers controlled by software." class="wp-image-21946" /><figcaption class="wp-element-caption"><em>MMIO gives software an address-based way to control physical devices attached to a motherboard or system bus. Photo via Unsplash.</em></figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Device Registers Are Tiny Hardware Control Points</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A hardware <strong>register</strong> is a small storage location inside a device or controller. Different registers may hold configuration bits, command values, error flags, queue pointers, interrupt status, device IDs, or measurements.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When a device is memory-mapped, the driver can access those registers through specific addresses. Reading one address might return a status word. Writing another could enable the device, clear an error, start a transfer, or acknowledge an <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-interrupt-irq-isr-cpu-operating-system/"><strong>interrupt</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>MMIO Is Not Ordinary RAM</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>MMIO addresses may look like memory addresses, but the hardware behind them behaves differently from DRAM. Reading a device register can have side effects. Writing a control register can immediately change hardware behavior. Some locations may be read-only, write-only, or meaningful only when accessed at a particular width.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is why low-level software cannot treat MMIO like an ordinary array in RAM. The operating system, compiler, CPU, and driver must preserve the ordering and access rules expected by the device.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Drivers Map Device Registers Before Using Them</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The <a href="https://bitcoinversus.tech/2026/03/30/the-kernel/"><strong>kernel</strong></a> normally controls which physical device regions a driver is allowed to access. A driver maps the device’s MMIO range into an address it can safely use, then performs reads and writes through operating-system helper functions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Linux kernel’s <a href="https://docs.kernel.org/driver-api/device-io.html"><strong>device I/O documentation</strong></a> describes this model directly: drivers commonly map I/O memory with functions such as <code>ioremap()</code> and access registers with helpers such as <code>readl()</code> and <code>writel()</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>PCIe Devices Commonly Expose MMIO Regions</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Modern <a href="https://bitcoinversus.tech/2025/01/06/peripheral-component-interconnect-express/"><strong>PCI Express</strong></a> devices commonly expose memory regions that the operating system maps into the system address space. Network adapters, NVMe controllers, GPUs, accelerators, and other expansion hardware can all use MMIO for configuration and control.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>PCIe configuration space includes <strong>Base Address Registers</strong>, or <strong>BARs</strong>, that describe the address-space resources a device needs. The operating system assigns usable address ranges, then a driver maps the appropriate region before touching the device’s registers.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>BAR Does Not Mean the Whole Device Is Stored in RAM</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A common beginner mistake is to imagine that mapping a PCIe BAR somehow copies the device into memory. It does not. The address range is a window through which CPU reads and writes reach hardware resources on the device.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, a NIC may expose control registers through one MMIO region while packet data is moved separately through <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-dma-direct-memory-access-cpu-ram-pcie/"><strong>DMA</strong></a>. MMIO controls the device; DMA is often used for the bulk data movement.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=u5kBwDZjfr4","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=u5kBwDZjfr4
</div><figcaption class="wp-element-caption"><em>Embedded System Creations compares memory-mapped I/O with isolated or port-mapped I/O and shows why MMIO uses normal memory-style addressing.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>MMIO and DMA Usually Work Together</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The previous DMA article makes more sense once MMIO is added. A driver may first write MMIO registers to tell a device where a DMA buffer is located, how large the transfer should be, and which command to execute.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The device then performs the <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-dma-direct-memory-access-cpu-ram-pcie/"><strong>Direct Memory Access</strong></a> operation. When the work completes, it may raise an interrupt. The driver reads MMIO status registers to determine what happened. That gives a simple hardware chain: <strong>MMIO setup → DMA transfer → interrupt → MMIO status/acknowledgment.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>MMIO Is Common in Embedded Systems Too</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>On a microcontroller, MMIO is often even more visible. GPIO blocks, UARTs, timers, ADCs, SPI controllers, PWM units, and other peripherals are assigned fixed address ranges. Firmware reads and writes their registers to control physical pins and internal hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech’s <a href="https://bitcoinversus.tech/2026/10/04/osfec-001-microcontroller-architecture-memory-maps-registers-interrupts/"><strong>Microcontroller Architecture</strong></a> lesson covers memory maps, registers, and interrupts in that embedded context, while the <a href="https://bitcoinversus.tech/2026/10/02/armv8-m-architecture-explained/"><strong>Armv8-M architecture</strong></a> explainer shows how this model fits modern embedded processors.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>MMIO Is Different From Port-Mapped I/O</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Port-mapped I/O</strong>, also called isolated I/O, keeps device ports in a separate I/O address space. Classic x86 processors support special instructions such as <code>IN</code> and <code>OUT</code> for that purpose.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>MMIO instead places device registers inside the normal memory-address model, so ordinary load/store-style operations can reach them. Modern systems can use both techniques, but MMIO is extremely common across PCIe hardware and embedded architectures.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://bsky.app/profile/alex.zenla.io/post/3lbcgpqrfdc26","type":"rich","providerNameSlug":"bluesky","responsive":true} -->
<figure class="wp-block-embed is-type-rich is-provider-bluesky wp-block-embed-bluesky"><div class="wp-block-embed__wrapper">
https://bsky.app/profile/alex.zenla.io/post/3lbcgpqrfdc26
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><em>Kernel engineer Alex Zenla described a Windows kernel driver that mapped PCIe device memory into userspace while bridging IRQs, a real-world example of MMIO, device drivers, PCIe, and interrupts meeting in one system.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Memory Ordering Matters</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>CPUs and compilers are designed to optimize ordinary memory operations aggressively. Device control is different. If the order of two register writes matters to the hardware, software cannot allow them to be freely reordered as though they were ordinary RAM accesses.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Operating systems therefore provide MMIO accessors and memory-barrier rules. Those mechanisms help guarantee that commands, buffer addresses, status reads, and acknowledgments reach hardware in an order that matches the device specification.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Volatile Alone Is Not the Whole Solution</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Embedded C examples often use the <code>volatile</code> keyword around hardware registers so the compiler does not optimize away accesses that appear redundant. That is useful, but operating-system drivers need stronger architecture-aware rules than <code>volatile</code> alone.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Linux, Windows, and other operating systems expose dedicated primitives for device I/O because CPU ordering, caching, bus semantics, access width, and architecture differences all matter. Using the platform’s MMIO APIs is safer than inventing raw pointer logic inside a driver.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Caching MMIO Incorrectly Can Break Hardware</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Ordinary memory benefits enormously from <a href="https://bitcoinversus.tech/2026/03/31/cache-memory-in-modern-computing/"><strong>CPU cache</strong></a>. Device registers usually cannot be treated like normal cacheable RAM, because software may need every read or write to reach the actual hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The operating system therefore assigns appropriate memory attributes when it maps device regions. If a status register were incorrectly served from stale cache, software might never notice that the physical device changed state.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>MMIO Connects Directly to System Calls</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Normal applications usually do not receive unrestricted MMIO access. Instead, an application makes a <a href="https://bitcoinversus.tech/2026/10/08/it-what-is-system-call-syscall-user-mode-kernel-mode/"><strong>system call</strong></a> or uses a software API. The kernel and driver decide what hardware operations are allowed, then the driver performs the MMIO access in privileged context.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That separation protects the machine. If every user-space program could write arbitrary device registers, a bug could disable hardware, corrupt transfers, overwrite protected memory through misconfigured DMA, or crash the entire operating system.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>A NIC Gives a Good Full-System Example</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Consider a <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-nic-network-interface-card-servers-asic-miners/"><strong>network interface card</strong></a>. The driver can use MMIO registers to configure receive queues, transmit queues, interrupt settings, and device state. DMA moves packet data between the NIC and RAM. Interrupts or polling tell the CPU that packets or completions are ready.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That one example ties together the last several fundamentals: <strong>system call → kernel → driver → MMIO registers → DMA → interrupt → driver completion → application.</strong> The hardware and software are not separate topics; they form one I/O path.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>The Simple Way to Remember MMIO</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Memory-mapped I/O makes hardware registers look like addresses in the CPU’s memory space.</strong> Reading or writing those special addresses communicates with a device instead of ordinary RAM.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The chain is: <strong>driver maps device region → CPU reads/writes MMIO register → device changes state or reports status → DMA and interrupts handle the larger I/O flow.</strong> Once that is clear, PCIe BARs, device registers, DMA, interrupts, and low-level drivers become much easier to connect.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><strong>Editor’s Note</strong></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Featured image: realistic circuit-board photograph via Unsplash, cropped to exactly 1200×630. Body image: separate realistic motherboard/PCIe photograph via Unsplash. The Troonics and Embedded System Creations videos are distinct and directly relevant to MMIO. The Bluesky post is directly relevant to PCIe device-memory mapping and IRQ handling.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support and donation options are available through BitcoinVersus.Tech.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech is not a financial advisor. Content is provided for informational and educational purposes.</p>
<!-- /wp:paragraph -->