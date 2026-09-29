# Canaan Avalon A16XP Pushes Air-Cooled Mining to 300 TH/s

Published: 2026-09-28
Live: https://bitcoinversus.tech/2026/09/28/canaan-avalon-a16xp-300-ths-air-cooled-mining/
Featured media: 19353 — generated BitcoinVersus.Tech illustration

Canaan's newest air-cooled Avalon generation has crossed the 300 TH/s line without pushing a single miner far beyond the roughly four-kilowatt electrical envelope familiar to industrial mining sites. The company's current catalog lists the Avalon A16-282T at 282 TH/s and 3,900 W, while the A16XP-300T reaches 300 TH/s at 3,850 W.

That puts the two machines at 13.8 J/TH and 12.8 J/TH respectively. [The company's current hardware catalog](https://shop.canaan.io/collections/mining-machine) marks both models as futures products, with the A16XP positioned as the faster and more efficient air-cooled option.

## 300 TH/s Without Leaving Air Cooling

The A16XP matters because high-end Bitcoin mining performance has increasingly been associated with hydro-cooled hardware. BitcoinVersus.tech recently covered [a 600 TH/s hydro-cooled Auradine system](https://bitcoinversus.tech/2026/09/27/auradine-ah3880-600-ths-air-cooled-9-8-j-th/), but liquid cooling changes the facility around the ASIC: pumps, coolant distribution, heat exchangers and water-side controls become part of the deployment.

An air-cooled 300 TH/s machine offers a different upgrade path. Existing hot-aisle/cold-aisle facilities can potentially add significantly more hashrate per rack position without first rebuilding the entire cooling loop. That does not make the thermal problem disappear. At 3.85 kW, every A16XP still turns essentially all consumed electrical power into heat that has to leave the building.

## The Efficiency Gain Changes Rack Math

Canaan's A15XP-209T is listed at 209 TH/s, 3,720 W and 17.8 J/TH. Moving from that model to the 300 TH/s A16XP adds roughly 44% more nominal hashrate while increasing nameplate power by only about 3.5%. The comparison is especially important for sites constrained by energized rack positions, branch-circuit capacity or available airflow rather than floor space.

BitcoinVersus.tech has seen the same principle in fleet refreshes: [PowerCompute described gaining nearly 39% more hashrate per replaced machine](https://bitcoinversus.tech/2026/09/25/powercompute-gets-39-more-hashrate-per-miner-swap/) by moving older S19-class hardware toward S19 XP units. A16-class efficiency pushes the same infrastructure logic another generation forward.

## Four Kilowatts Still Requires Serious Electrical Design

A fleet operator cannot treat 12.8 J/TH as an isolated chip statistic. One hundred A16XP units represent about 30 PH/s of nameplate hashrate and roughly 385 kW of continuous ASIC load before accounting for facility overhead. One thousand units approach 3.85 MW at the miners alone.

That makes transformers, switchgear, PDUs, conductors, breakers, airflow and network layout part of the performance equation. The newest hardware can increase compute density faster than an older site can increase electrical or thermal capacity. BitcoinVersus.tech's recent look at [BitSink's mining and data-center infrastructure](https://bitcoinversus.tech/2026/09/28/bitsink-220-mw-mining-cooling-ai-data-centers/) showed how power distribution and heat rejection become products in their own right as rack density rises.

## Firmware Is Part of the A16 Platform

Canaan is also actively maintaining the software side of the generation. Its official support page lists an August 12 firmware package for the A16XP/A16 family. The release adds a pool-status word and raises ASIC initial frequency from 260 to 280, a reminder that production behavior is determined by firmware as well as silicon and cooling.

That operational layer is increasingly important across mining hardware. [Braiins recently patched a temperature-sensor fault that could pause S19 and S21 mining](https://bitcoinversus.tech/2026/09/27/braiins-os-26-09-1-fixes-t5-sensor-mining-pauses/), while [K1Pool's latest firmware can downclock individual hot ASIC chips](https://bitcoinversus.tech/2026/09/27/k1pool-firmware-1-30-downclocks-individual-hot-asic-chips/). Modern fleet performance is a combined result of hardware, firmware and site conditions.

## Canaan Is Still Optimizing the A16 Series

Canaan's September financial update says product development remains focused on the A16 family, including cost-effective air-cooled models and high-temperature water-cooled variants. That makes the 282T and 300T products part of a broader platform rather than isolated SKUs. [The company's SEC-filed quarterly release](https://www.sec.gov/Archives/edgar/data/1780652/000110465926105660/tm2624951d1_ex99-1.htm) also says Canaan is expanding beyond mining equipment toward compute-plus-energy infrastructure.

The practical takeaway for operators is straightforward: the next generation of mining density does not automatically require liquid cooling, but it does demand closer attention to every supporting system. A 300 TH/s air-cooled miner may fit into a familiar chassis and facility architecture; hundreds of them still change the electrical, thermal and network math of the site.

---

### BitcoinVersus.Tech Editor's Note

Support independent technology reporting: BTC donations may be sent to **3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb**.

Follow BitcoinVersus.tech on X/Twitter for Bitcoin mining, ASIC hardware, AI infrastructure, semiconductor and data-center reporting.

X footer embed: https://twitter.com/BitcoinVersus/status/1948430228124586438

*BitcoinVersus.Tech follows the hardware, firmware, power and cooling systems behind modern Bitcoin mining.*

*Disclaimer: BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.*

Verification note: no YouTube block was published because no directly relevant candidate was verified as a playable WordPress iframe during this run.
