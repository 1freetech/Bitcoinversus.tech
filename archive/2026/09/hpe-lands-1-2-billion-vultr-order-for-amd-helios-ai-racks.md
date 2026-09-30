# HPE Lands $1.2 Billion Vultr Order for AMD Helios AI Racks

**Published:** September 30, 2026  
**Live URL:** https://bitcoinversus.tech/2026/09/30/hpe-lands-1-2-billion-vultr-order-for-amd-helios-ai-racks/  
**Featured image:** https://bitcoinversus.wordpress.com/wp-content/uploads/2026/09/a_wide_cinematic_high_detail_data_center_scene.png

*Illustration: Vultr’s $1.2 billion HPE order centers on AMD Helios AI racks combining Instinct MI455X accelerators, EPYC CPUs, scale-up Ethernet networking and liquid cooling for U.S. AI data centers. BitcoinVersus.tech.*

**Hewlett Packard Enterprise has landed a $1.2 billion order from Vultr for AMD Helios AI Rack systems, giving HPE its first customer order for the new rack-scale AMD platform and putting another large U.S. cloud deployment behind open Ethernet-based AI infrastructure.**

[The company announcement](https://www.stocktitan.net/news/HPE/hpe-secures-its-first-amd-helios-order-in-1-2-billion-deal-with-awoco485lxcg.html) says Vultr will deploy the systems across its U.S. cloud data centers for AI model training and inference. HPE is supplying not only the compute racks but also scale-up networking, deployment support and liquid-cooling expertise.

[Reuters reported](https://www.reuters.com/business/hpe-boosts-networking-growth-outlook-gets-12-billion-ai-order-cloud-firm-vultr-2026-09-30/) the order alongside HPE's September 30 Networking Investor Day, where the company also raised its longer-term growth outlook for the networking business as AI data-center demand expands.

## Each Helios rack connects 72 AMD MI455X GPUs

The AMD Helios AI Rack by HPE is built around 72 AMD Instinct MI455X GPUs. The rack also combines AMD EPYC “Venice” CPUs, AMD Pensando Vulcano AI network interface hardware and the ROCm software stack.

The system is designed as a rack-scale computer rather than a collection of independent servers. Six HPE Juniper Networking QFX5252 scale-up Ethernet switch trays connect the 72 accelerators through a high-bandwidth, low-latency fabric. HPE says the design supports open rack-scale fabrics including UALink over Ethernet.

That distinction matters because scale-up networking handles communication among accelerators inside a tightly coupled AI system, while scale-out networking connects larger groups of racks and clusters. Both become critical when training or serving models that cannot fit comfortably inside one accelerator or one server.

[HPE's own launch post](https://x.com/HPE/status/2105266413476684242) described the Vultr contract as its first AMD Helios order and highlighted the purpose-built HPE Networking scale-up switching inside the deployment.

**X embed:** https://x.com/HPE/status/2105266413476684242

*HPE confirms its first AMD Helios order is a $1.2 billion Vultr deployment across U.S. AI data centers.*

The following official AMD presentation explains the Helios rack-scale architecture and why AI infrastructure increasingly treats the entire rack as the unit of compute.

**YouTube:** https://www.youtube.com/watch?v=9Ksm7owbi5E

*AMD explains how Helios combines scale-up and scale-out infrastructure for large AI training, inference and agentic workloads.*

## Vultr is buying an integrated rack, not just GPUs

The $1.2 billion order is notable because it bundles compute, networking, thermal engineering and services into one deployment. Vultr has worked with Juniper Networks for nearly three years, and that relationship now sits inside HPE following HPE's acquisition of Juniper.

Vultr says demand for high-performance AI capacity continues to outpace available supply. The Helios deployment gives the cloud provider another platform for customers running large training and inference jobs while retaining an AMD software and hardware path alongside other accelerator ecosystems.

The relationship is not starting from zero. AMD's own video below shows Vultr already building cloud AI services around AMD EPYC server CPUs and AMD Instinct accelerators.

**YouTube:** https://www.youtube.com/watch?v=FRVHcXmOUSk

*AMD and Vultr describe how EPYC CPUs and Instinct accelerators are used to deliver AI infrastructure as a cloud service.*

## Open Ethernet is part of the competitive pitch

AI rack design is becoming a competition between complete systems. GPU count alone does not determine useful performance. Memory capacity, fabric bandwidth, latency, switch architecture, software and cooling all affect how efficiently a cluster turns electrical power into completed AI work.

BitcoinVersus.Tech recently examined [rack-scale interconnect through NVIDIA NVLink Fusion](https://bitcoinversus.tech/2026/09/27/d-matrix-raptor-nvidia-nvlink-fusion-rack-scale-ai/). Helios approaches the same broad problem from an open Ethernet direction, with HPE emphasizing standards-based scale-up networking rather than treating the network as an afterthought.

The CPU side is also significant. Our earlier look at [AMD EPYC Venice server testing](https://bitcoinversus.tech/2026/09/27/amd-epyc-venice-nvidia-vera-server-tests/) covered the processor generation that now appears inside the Helios rack alongside MI455X accelerators.

## Liquid cooling is built into the deployment problem

Seventy-two high-end accelerators in one rack create a thermal problem as much as a compute problem. HPE explicitly includes liquid-cooling deployment expertise in the Vultr project, reflecting how thermal infrastructure is becoming part of the rack architecture itself.

That trend is also visible in [UL's new certification program for direct-to-chip AI cooling](https://bitcoinversus.tech/2026/09/29/ul-launches-certification-for-direct-to-chip-ai-cooling/), which focuses on components such as cold plates, manifolds and quick disconnects. As rack density rises, reliable coolant delivery becomes part of system availability rather than a separate facilities concern.

## The order is a test of AMD's rack-scale strategy

HPE's first Helios order gives AMD's rack-scale strategy a large commercial deployment with a cloud operator rather than only a reference architecture. The technical question now shifts from whether the components can be assembled into a rack to how efficiently large Helios clusters perform under sustained customer workloads.

For HPE, the contract also demonstrates why Juniper networking matters to its AI infrastructure strategy. The company can now sell the accelerator rack, scale-up switches, broader data-center networking, liquid-cooling deployment and services as a coordinated stack.

For Vultr, the result is another high-density GPU platform intended to expand U.S. AI capacity. For the broader market, the $1.2 billion order is evidence that competition in AI hardware is moving beyond individual chips and toward complete rack-scale systems.

---

### BitcoinVersus.Tech

**Advertisement:** Follow BitcoinVersus.Tech for independent coverage of Bitcoin mining, ASIC hardware, semiconductors, AI infrastructure, data centers, networking, cooling and energy.

**X footer advertisement:** https://twitter.com/1BitcoinVersus/status/1937006164555993338

*BitcoinVersus.Tech follows the hardware, silicon, power and infrastructure behind modern computing.*

***BitcoinVersus.Tech Editor's Note:***

***We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb***

BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.
