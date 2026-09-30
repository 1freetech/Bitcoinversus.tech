# MIPS and Xcelsa Use AI to Optimize RISC-V Custom Silicon

**Published:** September 29, 2026  
**Live URL:** https://bitcoinversus.tech/2026/09/29/mips-and-xcelsa-use-ai-to-optimize-risc-v-custom-silicon/  
**Featured image:** https://bitcoinversus.wordpress.com/wp-content/uploads/2026/09/a_wide_ultra_detailed_tech_lab_desktop_and_chip_p.png

*Illustration: MIPS and Xcelsa Labs are connecting workload-focused RISC-V processor design with AI-assisted optimization and formal equivalence checking for custom silicon. BitcoinVersus.tech.*

**MIPS and Xcelsa Labs are applying artificial intelligence to a difficult semiconductor problem: optimizing production-scale processor logic quickly while proving that the rewritten design remains functionally equivalent to the reference.**

## AI moves into custom-silicon optimization

The companies announced a strategic, non-exclusive partnership on September 29 combining MIPS' workload-focused RISC-V platforms with Xcelsa's Apex design-optimization system. [The technical announcement](https://www.edge-ai-vision.com/2026/09/mips-and-xcelsa-collaborate-to-accelerate-verified-workload-optimized-custom-silicon/) says Apex uses verified and physical-intelligence stacks to explore design alternatives while targeting improvements in power, performance and area.

The companies disclosed one production-scale example. Apex closed a timing-violating critical path in a MIPS load-store unit in under three hours and reduced that path's delay by 33%. The rewritten block was formally proven equivalent to the reference design. MIPS estimates that a comparable manual workflow would have required roughly one engineer-month. That time comparison is a company estimate, not an independent benchmark.

[A related X post](https://twitter.com/shomikghosh21/status/2104988032902504745) from Xcelsa investor Shomik Ghosh highlighted the customer announcement and Xcelsa's work with GlobalFoundries.

**X embed:** https://twitter.com/shomikghosh21/status/2104988032902504745

*Xcelsa investor Shomik Ghosh highlights the production-oriented partnership involving Xcelsa, MIPS and GlobalFoundries.*

## Formal equivalence is the guardrail

Faster optimization matters only if the resulting logic remains correct. Formal equivalence checking mathematically compares the optimized implementation with its reference. Xcelsa's pitch is therefore not simply that AI can rewrite a design quickly, but that the workflow can optimize it while preserving intended functionality.

That matters as custom AI silicon expands. BitcoinVersus.Tech recently covered [OpenAI's internal custom AI silicon effort](https://bitcoinversus.tech/2026/09/29/openai-says-jalapeno-ai-chip-is-for-internal-use-first/) and [SEMIFIVE's $52 million U.S. AI accelerator contract](https://bitcoinversus.tech/2026/09/29/semifive-52-million-us-ai-accelerator-contract/), two examples of workloads pushing hardware toward greater specialization.

## MIPS builds around RISC-V and Physical AI

MIPS now operates as MIPS by GF under GlobalFoundries and bases its current processor portfolio on the open RISC-V instruction-set architecture. [RISC-V International's recent discussion](https://riscv.org/blog/automotive-mips/) with MIPS CEO Sameer Wasson explains how an open ISA can give designers a standards-based software foundation while allowing workload-specific hardware customization.

The following English-language EE Times interview with MIPS CEO Sameer Wasson and CTO Yankin Tanurhan explains the company's software-to-silicon strategy and its focus on Physical AI.

**YouTube:** https://www.youtube.com/watch?v=Ll0aFwZrup0

*EE Times interviews MIPS leadership about RISC-V, software-to-silicon development and the architecture requirements emerging around Physical AI.*

## Software starts influencing silicon earlier

Workload-focused silicon reverses the old assumption that hardware must be finalized before software optimization begins. Engineers can profile workloads, explore processor resources around those requirements and validate architecture choices before committing to silicon.

MIPS' Computex presentation provides a second English-language view of that software-first approach.

**YouTube:** https://www.youtube.com/watch?v=fKy14ozJom8

*MIPS explains its software-first Physical AI strategy at Computex 2026 and the role of open RISC-V technology in workload-specific systems.*

BitcoinVersus.Tech's coverage of [Axelera's 629-TOPS, 45-watt Europa accelerator](https://bitcoinversus.tech/2026/09/27/axelera-europa-629-tops-45w-enterprise-ai/) illustrates why specialization matters at the edge, where latency, power and form-factor constraints can make workload-specific optimization valuable.

## The milestone is production-scale iteration

The disclosed 33% critical-path improvement is promising but narrow. MIPS and Xcelsa have not published a broad independent benchmark showing equivalent gains across complete chips or multiple customer designs. The notable development is that AI-assisted optimization is being applied to production-scale processor logic with formal equivalence built into the workflow.

If that approach scales, the semiconductor industry's use of AI could move beyond coding assistance toward faster hardware-software co-design, with engineers using automated optimization to explore more implementations before a design is committed to manufacturing.

---

### BitcoinVersus.Tech

**Advertisement:** Follow BitcoinVersus.Tech for independent coverage of semiconductors, artificial intelligence, open-source computing, robotics, data centers, Bitcoin mining and energy infrastructure.

**X footer:** https://twitter.com/1BitcoinVersus/status/1937006164555993338

*BitcoinVersus.Tech follows the silicon, infrastructure and open technologies shaping modern computing.*

***BitcoinVersus.Tech Editor's Note:***

***We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb***

BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.
