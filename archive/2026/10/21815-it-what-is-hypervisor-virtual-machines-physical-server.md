---
post_id: 21815
title: "IT: What Is a Hypervisor? How Virtual Machines Share One Physical Server"
live_url: "https://bitcoinversus.tech/2026/10/08/it-what-is-hypervisor-virtual-machines-physical-server/"
featured_media_id: 21812
featured_media_url: "https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-hypervisor-virtual-machines-1200x630-1.jpg"
status: publish
---
<!-- wp:paragraph -->
<p>A <strong>hypervisor</strong> is the software layer that lets one physical computer behave like several separate computers. Instead of one <a href="https://bitcoinversus.tech/2026/10/06/ositc-001-it-systems-fundamentals-hardware-operating-systems-networks-troubleshooting/"><strong>operating system</strong></a> owning an entire server, a hypervisor divides the machine’s <a href="https://bitcoinversus.tech/2026/10/06/how-does-a-cpu-actually-run-a-program/"><strong>CPU</strong></a>, memory, <a href="https://bitcoinversus.tech/2026/10/06/ositc-002-storage-file-systems-hdds-ssds-partitions-volumes-ntfs-ext4-mounting-basic-diagnostics/"><strong>storage</strong></a>, and <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-nic-network-interface-card-servers-asic-miners/"><strong>networking</strong></a> resources among multiple <a href="https://bitcoinversus.tech/2025/05/19/overview-of-ubuntu-vm-setup-using-virtualbox/"><strong>virtual machines</strong></a>, or VMs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Each VM can run its own guest operating system and applications while behaving as if it has its own hardware. That basic idea underpins server consolidation, development labs, disaster recovery, private clouds, public clouds, virtual desktops, and much of modern data-center computing.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=UBVVq-xz5i0","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=UBVVq-xz5i0
</div><figcaption class="wp-element-caption"><em>PowerCert Animated Videos gives a practical overview of virtualization, virtual machines, and hypervisors.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What a Hypervisor Actually Does</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The hypervisor sits between physical hardware and one or more guest operating systems. Its job is to control access to the underlying machine and present each VM with a virtualized set of resources.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Microsoft describes <a href="https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/overview"><strong>Hyper-V</strong></a> as a Type 1 hypervisor that creates, manages, and runs VMs while isolating their workloads. Red Hat describes <a href="https://www.redhat.com/en/topics/virtualization/what-is-KVM"><strong>KVM</strong></a>, or Kernel-based Virtual Machine, as open-source virtualization technology that allows Linux to function as a hypervisor and run multiple isolated VMs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The physical machine is commonly called the <strong>host</strong>. The VMs running on it are the <strong>guests</strong>. A single host may run one guest or dozens, depending on workload size, hardware capacity, performance requirements, and licensing.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Virtual Machine Still Looks Like a Computer</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A VM usually has virtual versions of the same components found in a physical PC or server: one or more virtual CPUs, assigned RAM, virtual disks, a virtual network adapter, firmware, controllers, and other devices.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The guest operating system interacts with those virtual devices as though they were hardware. The hypervisor and its supporting software translate those requests into access to the host’s real processor, memory, disks, and network interfaces. This is closely related to the role of a <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-what-is-a-device-driver-how-hardware-talks-to-the-operating-system/"><strong>device driver</strong></a>, except the guest may be talking to a virtual device rather than directly to the physical component.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Virtual CPUs Share Physical CPU Time</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A virtual CPU, or vCPU, is not usually a permanently dedicated physical core. The hypervisor schedules virtual processors onto available physical processor resources. That is conceptually similar to how an operating system schedules <a href="https://bitcoinversus.tech/2026/10/06/easy-tech-read-process-vs-thread-how-your-cpu-runs-multiple-tasks/"><strong>processes and threads</strong></a> onto a CPU, but the hypervisor is managing entire guest environments rather than ordinary applications.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Modern virtualization also depends heavily on processor features such as Intel VT-x or AMD-V. Microsoft notes that Hyper-V requires hardware-assisted virtualization. Those CPU extensions help the hypervisor run guest operating systems efficiently while preserving isolation between them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Oversubscription is possible: a host can expose more total vCPUs across its VMs than it has physical cores. That can improve utilization when workloads are bursty, but aggressive oversubscription can also create contention when many VMs demand processor time simultaneously.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Virtual Memory Comes From Physical RAM</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Each VM is assigned memory from the host’s physical RAM. The guest sees its allocation as its own memory space, while the hypervisor tracks mappings and prevents one VM from freely reading or writing another VM’s memory.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Memory pressure can become a major virtualization bottleneck. A host with plenty of CPU capacity can still struggle if its VMs collectively demand more active memory than the platform can provide efficiently. That is one reason virtualization planning is about the entire system—not just processor core count.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Virtual Disks Are Files or Logical Devices</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A VM usually does not need a dedicated physical drive. Instead, its virtual disk may be stored as a file, logical volume, SAN-backed device, or another virtualized storage object. The guest treats that virtual disk like a normal drive and then formats it with a filesystem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That makes virtualization closely tied to <a href="https://bitcoinversus.tech/2026/10/06/ositc-002-storage-file-systems-hdds-ssds-partitions-volumes-ntfs-ext4-mounting-basic-diagnostics/"><strong>storage and filesystems</strong></a>. Underneath a VM, the host may itself be using HDDs, SSDs, NVMe storage, shared arrays, or <a href="https://bitcoinversus.tech/2026/10/06/storage-what-is-raid-0-1-5-6-10-striping-mirroring-parity-explained/"><strong>RAID</strong></a>. The guest sees a simpler virtual block device while the physical storage stack remains hidden below it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Virtual NICs Connect VMs to Virtual Switches</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A VM can also have one or more virtual network interface cards. The guest operating system treats a virtual NIC like a normal <a href="https://bitcoinversus.tech/2026/10/07/networking-what-is-nic-network-interface-card-servers-asic-miners/"><strong>network interface card</strong></a>, complete with an IP configuration and often its own MAC address.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Those virtual NICs typically connect to a <strong>virtual switch</strong>. The virtual switch can move traffic between VMs on the same host, toward the host itself, or out through a physical NIC into the rest of the network. From there, traffic may pass through the same physical switching infrastructure used by ordinary servers, including <a href="https://bitcoinversus.tech/2026/10/06/networking-what-is-top-of-rack-switch-data-center/"><strong>top-of-rack switches</strong></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Type 1 vs. Type 2 Hypervisors</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Hypervisors are commonly grouped into two broad categories. A <strong>Type 1 hypervisor</strong>, often called bare-metal virtualization, operates directly at the hardware virtualization layer and is commonly used for production server workloads. Microsoft classifies Hyper-V as Type 1.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A <strong>Type 2 hypervisor</strong> runs as an application on top of a conventional host operating system. This model is common on desktops, training labs, and developer machines because it is easy to install and remove.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.Tech’s earlier <a href="https://bitcoinversus.tech/2025/05/19/overview-of-ubuntu-vm-setup-using-virtualbox/"><strong>Ubuntu VirtualBox VM setup</strong></a> is a good example of desktop virtualization: the user runs virtualization software on a normal workstation, then creates an Ubuntu guest without replacing the host operating system.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Hyper-V Is Type 1 Even Though You Manage It From Windows</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This causes confusion because Hyper-V is managed through Windows tools. Under the hood, however, Microsoft’s architecture places the hypervisor beneath the root partition. Windows in that root partition manages devices and virtualization services, while guest VMs execute in separate child partitions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That is why Hyper-V on <a href="https://bitcoinversus.tech/2026/09/10/windows-server-guide-for-it-technicians-and-administrators/"><strong>Windows Server</strong></a> is still considered bare-metal virtualization rather than simply a desktop application running above Windows.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">KVM Turns Linux Into a Hypervisor</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>KVM takes a different architectural path. Red Hat explains that KVM is built into Linux and allows the Linux operating system to function as a hypervisor. It relies on Linux components such as process scheduling, memory management, device drivers, networking, and security while providing hardware virtualization for guest VMs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Because KVM is integrated into the <a href="https://bitcoinversus.tech/2026/10/05/linux-7-3-rc6-ai-normal-kernel-patch-volume/"><strong>Linux kernel</strong></a>, it has become a major foundation for open-source virtualization platforms and cloud infrastructure.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=rOUqK3f4KuU","type":"video","providerNameSlug":"youtube","responsive":true} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=rOUqK3f4KuU
</div><figcaption class="wp-element-caption"><em>Red Hat’s KVM virtualization session gives deeper technical context for the Linux-based hypervisor stack.</em></figcaption></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Companies Virtualize Servers</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One major reason is <strong>server consolidation</strong>. A physical server running one lightly used application can waste processor, memory, storage, power, and rack capacity. Virtualization lets several isolated workloads share the same host so more of that hardware is actually used.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Virtualization also makes provisioning faster. An administrator can create a new VM from a template instead of racking a new physical server every time a workload needs an operating system. VMs can be cloned, moved, backed up, replicated, and managed through software-driven workflows.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Snapshots Are Useful, but They Are Not Backups</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Many hypervisors support VM snapshots or checkpoints that preserve a point-in-time state. They are useful before software changes, patches, testing, or risky configuration work because the VM can often be rolled back quickly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But a snapshot is not automatically a complete backup strategy. If the underlying host or storage fails, snapshots stored on the same infrastructure may fail with it. Long-term protection still requires proper backup, replication, recovery testing, and storage planning.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Live Migration Can Move a Running VM</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Enterprise hypervisors can support <strong>live migration</strong>, where a running VM is transferred from one physical host to another with little or no visible downtime. Microsoft lists live migration and high availability among Hyper-V’s enterprise features.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This matters during maintenance and failures. Instead of shutting down every workload on a server before servicing it, administrators can move compatible VMs elsewhere in a cluster, work on the physical host, and then return workloads afterward.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Virtualization Does Not Eliminate Hardware Limits</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Virtualization can make hardware more flexible, but it cannot create unlimited physical resources. If ten VMs all demand heavy CPU, memory, storage I/O, or network bandwidth at once, they still compete for the same host hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The hypervisor can schedule, prioritize, reserve, and isolate resources, but capacity planning still matters. <strong>An overloaded host</strong> can create a wide failure domain because one physical machine may now support many separate services.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Virtual Machines vs. Containers</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>VMs and containers both isolate workloads, but they do it differently. A VM normally includes its own guest operating system and virtual hardware environment. Containers usually share the host operating system kernel while isolating applications and their dependencies.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That often makes containers lighter and faster to start, while VMs provide a stronger boundary between complete operating-system environments. Modern platforms frequently use both rather than treating them as mutually exclusive technologies.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Where Hypervisors Show Up in Real IT Work</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Hypervisors appear in data centers, enterprise server rooms, cloud platforms, cybersecurity labs, software-development environments, virtual desktop infrastructure, training labs, and home test systems. An IT technician may encounter them while troubleshooting networking, storage, guest boot failures, resource contention, snapshots, host maintenance, or VM migrations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Understanding the abstraction makes troubleshooting easier. If a guest loses network access, the problem might be inside the guest OS, in its virtual NIC, in the virtual switch, on the physical NIC, or farther out in the network. If storage slows down, the guest filesystem may be healthy while the host storage layer is overloaded.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Simple Way to Remember a Hypervisor</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>A hypervisor divides one physical computer into multiple isolated virtual computers and manages their access to CPU, memory, storage, and networking.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The physical server still matters. The hypervisor simply adds a software-controlled layer that makes those physical resources easier to share, move, automate, and isolate. That abstraction is one of the core technologies behind modern enterprise IT and cloud computing.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Editor’s Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Featured photograph: Derrick Coetzee via Wikimedia Commons/Flickr, released under CC0 1.0 and cropped to 1200×630. The photograph shows physical server racks; virtual machines and hypervisors are software abstractions running on hardware like this.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Support and donation options are available through BitcoinVersus.Tech.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinVersus.tech is not a financial advisor. Content is provided for informational purposes.</p>
<!-- /wp:paragraph -->