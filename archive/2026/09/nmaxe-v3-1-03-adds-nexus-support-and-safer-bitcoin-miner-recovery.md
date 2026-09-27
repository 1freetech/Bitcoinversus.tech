# NMAxe v3.1.03 Adds Nexus Support and Safer Bitcoin Miner Recovery

Published September 27, 2026.
Live: https://bitcoinversus.tech/2026/09/27/nmaxe-v3-1-03-adds-nexus-support-and-safer-bitcoin-miner-recovery/

NMAxe's open-source Bitcoin mining firmware documents v3.1.03 dated September 22, adding NMQAxe++ Nexus support with BM1373, automatic board-revision detection, HCN recovery and ECO/Normal/Turbo presets.

The firmware can detect QAxe++ board revisions through GPIO46 and display a wrong-firmware warning rather than silently proceeding. Recovery logic can power-cycle Vcore after channel imbalance, missing channels or lack of progress, with at least 15 minutes between attempts.

The update also corrects the NMQAxe++ Vcore temperature source to the VRM internal sensor, so readings may appear 10–20°C higher after upgrading.

One caveat: the upstream README documents v3.1.03, while the separately indexed GitHub Releases page still showed v3.1.02 as the latest packaged release during verification. Users should confirm an exact model-specific asset before flashing.

## Related BitcoinVersus.tech coverage
- https://bitcoinversus.tech/2026/09/23/bitaxe-esp-miner-2-15-3-firmware-warnings/
- https://bitcoinversus.tech/2026/09/27/bitaxe-pool-adds-encrypted-stratum-v2-mining-through-axeos/
- https://bitcoinversus.tech/2026/08/24/bitcoin-asic-architecture-bitmain-canaan-microbt-bitdeer/

## Sources
- https://github.com/NMminer1024/ESP-Miner-NMAxe/blob/master/readme.md
- https://asic.tools/en/news/nmaxe-firmware-3-1-03-nexus-board-safety/

## Embedded video
- https://www.youtube.com/watch?v=8W3jIrnLCBg

## Cover
https://bitcoinversus.wordpress.com/wp-content/uploads/2026/09/a_detailed_cinematic_tech_workspace_scene_close.png

*Illustration: NMAxe v3.1.03 documents Nexus BM1373 support, board auto-detection, recovery safeguards and new tuning presets. BitcoinVersus.tech.*

BitcoinVersus.Tech Editor's Note: NMAxe's upstream README documents v3.1.03, while the separately indexed GitHub Releases page still showed v3.1.02 as latest during verification. Confirm the exact model-specific image before flashing.

BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.
