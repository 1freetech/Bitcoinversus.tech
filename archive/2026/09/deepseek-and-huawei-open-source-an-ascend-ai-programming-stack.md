# DeepSeek and Huawei Open-Source an Ascend AI Programming Stack

**Published:** September 30, 2026  
**Live URL:** https://bitcoinversus.tech/2026/09/30/deepseek-and-huawei-open-source-an-ascend-ai-programming-stack/  
**Featured image:** https://bitcoinversus.wordpress.com/wp-content/uploads/2026/09/a_cinematic_high_tech_data_center_lab_scene_wit.png

*Illustration: DeepSeek and Huawei are expanding the open-source programming stack around Ascend AI hardware with TileLang, optimized compute kernels and communication libraries. BitcoinVersus.tech.*

**DeepSeek and Huawei are pushing the software side of China's AI chip stack closer to the hardware, open-sourcing programming infrastructure for Huawei Ascend accelerators and expanding TileLang as a higher-level path for writing optimized AI kernels.**

[Reuters reported](https://www.reuters.com/world/asia-pacific/deepseek-partners-with-huawei-develop-chip-programming-tools-reducing-reliance-2026-09-30/) on September 30 that DeepSeek and Huawei worked together on programming tools for Ascend AI chips, including compute and communication libraries. The two companies also advanced a supernode configuration built around 128 Ascend 950 chips.

The move matters because AI accelerators compete through software as much as through silicon. NVIDIA's CUDA ecosystem has spent years accumulating optimized kernels, libraries, debugging tools and developer habits. A competitive accelerator therefore needs more than raw TOPS or FLOPS. It needs a usable programming model that can turn those transistors into real model performance.

## TileLang moves the abstraction above hand-written kernels

[The open-source TileLang-Ascend project](https://github.com/tile-ai/tilelang-ascend) describes itself as a specialized TileLang variant for Huawei Ascend NPUs. It uses a Pythonic programming model on top of TVM compiler infrastructure and supports two backend paths: Ascend C/PTO and Ascend NPU IR.

The goal is to let developers write kernels such as GEMM, vector operations and attention mechanisms at a higher level while still exposing enough hardware control to chase production-class performance. The project documents support for Ascend A2 and A3 devices and publishes examples for DeepSeek V4 operators.

[One technical analysis posted to X](https://x.com/poezhao0605/status/2105195692067020995) characterized the release as a one-to-one expansion of DeepSeek's existing GPU software work toward Huawei hardware, while also noting that software progress does not remove hardware supply constraints.

**X embed:** https://x.com/poezhao0605/status/2105195692067020995

*Poe Zhao breaks down the TileLang port, the new Ascend compute and communication libraries, and the remaining hardware-supply bottleneck.*

## DeepSeek is treating software portability as a strategic layer

The architecture makes clear why programming infrastructure can become a competitive moat. If model developers can express the same operators across multiple accelerators without rewriting everything from scratch, switching costs fall and hardware choice becomes less dependent on one vendor's proprietary software stack.

That does not mean TileLang is replacing CUDA globally. TileLang itself supports multiple backends, including NVIDIA CUDA, AMD ROCm, Apple Metal and Huawei Ascend. The significance is that a high-level kernel language can increasingly target more than one hardware ecosystem while preserving performance-oriented control.

BitcoinVersus.Tech recently covered [Huawei's Atlas 960E SuperPoD work](https://bitcoinversus.tech/2026/09/27/huawei-atlas-960e-550kw-ai-optics-superpod/), where scale-up system design and optical power became major parts of the compute equation. The new DeepSeek-Huawei software effort addresses the other half of that stack: how programmers actually drive the hardware efficiently.

The following Reuters video provides earlier context on DeepSeek adapting its models for Huawei chip technology and why the software-hardware relationship has become strategically important.

**YouTube:** https://www.youtube.com/watch?v=9g_9p9GORHQ

*Reuters explains DeepSeek's earlier move to adapt model software for Huawei hardware, setting context for the new open-source Ascend programming stack.*

## The 128-chip supernode puts communication software in focus

Large AI systems are not limited by individual accelerator speed. Once a workload spans dozens or hundreds of chips, communication overhead becomes a first-class performance problem. That is why the release includes both compute kernels and communication libraries.

DeepSeek and Huawei's reported 128-chip Ascend 950 supernode work is therefore important beyond the number of chips. A system that large needs optimized collective communication, memory movement and synchronization in addition to fast matrix math.

A second [same-day X discussion](https://x.com/tphuang/status/2105266337241330112) focused on the deeper DeepSeek-Huawei engineering relationship and the role of the 128-card supernode in moving more training work toward the Ascend ecosystem.

**X embed:** https://x.com/tphuang/status/2105266337241330112

*Industry analyst tphuang highlights the 128-chip supernode and the possibility of a larger share of DeepSeek training moving onto Huawei systems.*

## China's AI stack is becoming more vertically integrated

The broader pattern is visible across the region. [Alibaba's Zhenwu V900 and 20 GW data-center plan](https://bitcoinversus.tech/2026/09/27/alibaba-unveils-zhenwu-v900-ai-chip-and-20-gw-data-center-plan/) showed another Chinese company pairing custom silicon with large-scale infrastructure. DeepSeek and Huawei are attacking the same strategic dependency from the compiler, kernel and communications layer.

The software strategy also parallels what BitcoinVersus.Tech observed with [OpenAI's Jalapeño inference ASIC](https://bitcoinversus.tech/2026/09/29/openai-says-jalapeno-ai-chip-is-for-internal-use-first/). Custom silicon becomes much more useful when model architecture, compiler behavior, kernels and hardware are designed together instead of optimized independently.

The Reuters video below offers additional hardware context on Huawei's Ascend line and the effort to supply domestic AI accelerators into a market historically dominated by NVIDIA.

**YouTube:** https://www.youtube.com/watch?v=KHzAe7gkefE

*Reuters examines Huawei's Ascend AI-chip push, the hardware foundation underneath the software ecosystem DeepSeek is now helping expand.*

## CUDA's moat is larger than one programming language

The strongest caution is that a language alone does not reproduce the CUDA ecosystem. NVIDIA's advantage includes compilers, drivers, libraries, profilers, frameworks, documentation, developer expertise and years of production tuning.

TileLang can reduce one part of that gap by giving developers a higher-level route to performance-portable kernels. DeepSeek's contribution is important because a frontier AI lab is helping pressure-test that software against real model workloads instead of treating it as a purely academic compiler project.

What changed on September 30 is therefore not simply that Huawei gained another programming tool. DeepSeek is helping build an open software layer around Ascend that reaches from individual kernels to multi-chip communication and supernode-scale execution. If that stack continues to mature, competition in AI hardware will increasingly be measured by the completeness of the entire software-to-silicon system rather than by chip specifications alone.

---

### BitcoinVersus.Tech

**Advertisement:** Follow BitcoinVersus.Tech for independent coverage of Bitcoin mining, ASIC hardware, semiconductors, open-source computing, AI infrastructure, data centers and energy.

**X footer advertisement:** https://twitter.com/1BitcoinVersus/status/1937006164555993338

*BitcoinVersus.Tech follows the hardware, software, power and infrastructure behind modern computing.*

***BitcoinVersus.Tech Editor's Note:***

***We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb***

BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.
