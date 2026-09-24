# LuxOS Update Adds S21++ Support and Signed Firmware Updates

Published: 2026-09-24T11:45:38

Live: https://bitcoinversus.tech/2026/09/24/luxos-s21-plus-plus-signed-firmware-updates/


<p class="wp-block-paragraph">Bitcoin mining firmware has evolved from a relatively simple interface for setting pools and frequencies into a major part of ASIC fleet management. Modern firmware can control voltage and frequency, establish power targets, monitor individual chips, respond to temperature conditions, recover unstable hashboards and coordinate curtailment. Those capabilities matter more as mining fleets become larger and newer ASICs push more hashrate through increasingly power-dense hardware.</p>



<p class="wp-block-paragraph"><a href="https://luxor.tech/">Luxor Technology</a> has released a September update to <a href="https://docs.luxor.tech/firmware/changelog">LuxOS</a> that expands support for newer Bitmain hardware while adding security and operational improvements. The September 21 changelog adds support for Antminer S21++ A3HB70705 hashboards and S19 XP Hydro HHB56611 hashboards.</p>



<h2 class="wp-block-heading">S21++ support expands the LuxOS hardware range</h2>



<p class="wp-block-paragraph">The addition extends LuxOS further into Bitmain&#8217;s current S21 generation. BitcoinVersus.tech has followed the progression of the family through earlier coverage of <a href="https://bitcoinversus.tech/2025/02/18/antminer-s21-pro-leads-bitcoin-mining-efficiency-rankings/">Antminer S21 efficiency</a> and more recent real-world testing of <a href="https://bitcoinversus.tech/2026/09/23/olenox-s21-bitcoin-miners-texas-heat/">S21 miners operating in Texas heat</a>.</p>



<p class="wp-block-paragraph">The release also adds installer support for Bitmain AML miners using Winbond W29N01HV NAND chips and for 1 GiB NAND control boards on the S19 XP. Luxor adjusted several temperature limits to match stock behavior, including higher default board limits on the S21+ and updated chip limits for the S19 XP Hydro.</p>



<h2 class="wp-block-heading">Firmware updates gain cryptographic verification</h2>



<p class="wp-block-paragraph">One of the more important changes is the addition of Ed25519 signing and verification for the over-the-air update index. Cryptographic verification gives firmware an additional mechanism for determining whether update metadata is authentic before trusting it. LuxOS also removed incremental binary-difference updates, so future updates download a complete package.</p>



<p class="wp-block-paragraph">The change highlights how ASIC firmware increasingly resembles the software-management layer found elsewhere in data-center infrastructure. Firmware integrity matters because the control software has direct access to mining hardware, operating parameters and network-connected management systems.</p>



<h2 class="wp-block-heading">Power targeting and chip diagnostics improve</h2>



<p class="wp-block-paragraph">The September release fixes a power-target ramp condition that could bounce indefinitely at the minimum frequency step. LuxOS now reduces the frequency step after a direction reversal and waits for fresh hashboard data before continuing the ramp. Applying an unchanged power target also no longer unnecessarily restarts tuning.</p>



<p class="wp-block-paragraph">Another fix corrects the attribution of duplicate and bad nonces. Luxor says those events could previously be assigned to chip 0 instead of the chip that actually reported them, potentially making chip 0 appear unhealthy in per-chip statistics. Correct attribution should make troubleshooting more useful when technicians are trying to isolate a weak ASIC or hashboard.</p>



<p class="wp-block-paragraph">Those changes build on LuxOS improvements introduced earlier in the summer, including configurable ramp speeds, temperature-aware power targeting, enhanced hashboard recovery and always-on diagnostics. BitcoinVersus.tech previously covered <a href="https://bitcoinversus.tech/2024/07/19/luxor-releases-details-on-latest-os-update/">earlier LuxOS development</a>, showing how third-party mining firmware has continued moving toward deeper fleet-level control.</p>



<h2 class="wp-block-heading">Video: S21+ Hydro firmware tuning in practice</h2>



<p class="wp-block-paragraph">The video below is not a demonstration of the September LuxOS release itself. It provides closely related visual context by showing an Antminer S21+ Hydro running alternative firmware profiles, including hashrate, power and efficiency tuning. That makes the hardware-level effects of firmware configuration easier to see alongside the LuxOS software changes discussed above.</p>



<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper">
<span class="embed-youtube" style="text-align:center; display: block;"><iframe loading="lazy" class="youtube-player" width="640" height="360" src="https://www.youtube.com/embed/U9trb2MMiTA?version=3&#038;rel=1&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;fs=1&#038;hl=en&#038;autohide=2&#038;wmode=transparent" allowfullscreen="true" style="border:0;" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"></iframe></span>
</div></figure>



<h2 class="wp-block-heading">Firmware is becoming part of mining infrastructure</h2>



<p class="wp-block-paragraph">ASIC performance is not determined by silicon alone. Power delivery, cooling, board health, firmware tuning and fleet-management software all influence how effectively a miner operates in the field. As mining facilities become more automated, firmware also becomes an interface between individual machines and higher-level systems responsible for monitoring, curtailment and energy optimization.</p>



<p class="wp-block-paragraph">The September LuxOS release is therefore more than a compatibility update. Support for newer S21 hardware keeps the platform current, while signed update metadata, more accurate chip diagnostics and better power-control behavior address the operational layer that determines whether thousands of ASICs can be managed reliably.</p>



<p class="wp-block-paragraph"><strong>Sources:</strong> <a href="https://docs.luxor.tech/firmware/changelog">LuxOS Firmware Changelog</a> and the embedded S21+ Hydro firmware-tuning video for visual hardware context.</p>



<p class="wp-block-paragraph"><strong><em><a href="https://bitcoinversus.tech/">BitcoinVersus.Tech</a> Editor&#8217;s Note:</em></strong><br><strong><em>We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please donate here: 3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb</em></strong></p>

