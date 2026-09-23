# Bitaxe Firmware Update Improves Miner Warnings

Published: 2026-09-23
URL: https://bitcoinversus.tech/2026/09/23/bitaxe-esp-miner-2-15-3-firmware-warnings/

Bitaxe developers released [ESP-Miner v2.15.3](https://github.com/bitaxeorg/ESP-Miner/releases) on September 20 as a prerelease for the open source Bitcoin mining platform. The release changes how AxeOS determines low frequency warnings, using each device preset rather than a common threshold. The official release notes list one functional change and identify the update as a prerelease rather than a stable production release.

Preset aware warnings matter because Bitaxe boards can operate with different ASIC models, frequencies, voltages and power profiles. A single warning threshold can report a low power configuration as abnormal even when the miner is operating within its selected profile. [OpenSourceForU](https://www.opensourceforu.com/2026/09/esp-miner-2-15-3-fixes-frequency-warnings/) reported on September 22 that the new logic is designed to make diagnostics better match the expected operating range of each supported configuration.

The update does not claim to increase hashrate or improve power efficiency. The published change concerns diagnostic warning logic. Operators evaluating the prerelease should compare measured frequency, temperature, accepted shares and stability before treating a cleared warning as evidence of healthy hardware. [ASIC.tools](https://asic.tools/en/news/esp-miner-2-15-3-low-frequency-warning-presets-prerelease/) provides additional operator-focused analysis.

Version 2.15.3 follows ESP-Miner v2.15.2, released September 18. Version 2.15.2 added BM1372 and BM1373 ASIC driver support, addressed reconnect storms from slow clients and added display support for Bitaxe Color Naja Duo and Gamma Hex configurations. The rapid sequence shows active development around newer open source mining hardware.

ESP-Miner remains open source firmware for Bitaxe devices built around ESP32 controllers. The [project documentation](https://github.com/bitaxeorg/ESP-Miner) provides firmware images, a command line flashing tool, recovery procedures and configuration guidance. The documentation also warns that manual frequency and core voltage changes can overheat or damage hardware without adequate cooling.

## What operators should watch

A staged test on one noncritical miner offers a practical way to evaluate a prerelease. Record the existing firmware, device preset, target frequency, voltage, board temperature and pool side accepted work before updating. Keeping power and cooling unchanged makes any diagnostic difference easier to isolate. The prerelease status also gives operators a clear reason to preserve a known good firmware image for rollback.

Related video: https://www.youtube.com/watch?v=F5Qa7ZSALGs

**BitcoinVersus.Tech Editor's Note:**  
We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb

https://x.com/1BitcoinVersus/status/1937006164555993338

BitcoinVersus.tech is not a financial advisor. This media platform reports on financial subjects purely for informational purposes.
