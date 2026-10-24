# Open Source Tech Cert Electrical/Networking Audit — 2026-10-23

## Verified live inventory

WordPress owner-side post listing and post content were checked on 2026-10-23. Published electrical sequence OSETC.001–037 exists, but 033–036 are protocol-heavy industrial networking topics rather than electrical technician fundamentals. The existing networking series reaches OSNTC.030, with no current OSNTC.031–034 titles found. OSETC.037 is a genuine electrical safety/instrument-testing lesson and should remain electrical.

| Post ID | Current title | Appropriate corrected title (completed in WordPress, October 23, 2026) | Live permalink |
| --- | --- | --- | --- |
| 23605 | OSETC.033: Modbus TCP over Ethernet | **OSNTC.031:** Modbus TCP over Ethernet | https://bitcoinversus.tech/2026/10/11/osetc-033-modbus-tcp-ethernet-port-502-mbap-unit-id-registers-troubleshooting/ |
| 24017 | OSETC.034: EtherNet/IP Basics | **OSNTC.032:** EtherNet/IP Basics | https://bitcoinversus.tech/2026/10/12/osetc-034-ethernet-ip-basics-cip-explicit-implicit-rpi-ports-troubleshooting/ |
| 24223 | OSETC.035: PROFINET Basics | **OSNTC.033:** PROFINET Basics | https://bitcoinversus.tech/2026/10/13/osetc-035-profinet-basics-device-names-dcp-gsdml-real-time-io-troubleshooting/ |
| 25078 | OSETC.036: EtherCAT Basics | **OSNTC.034:** EtherCAT Basics | https://bitcoinversus.tech/2026/10/14/osetc-036-ethercat-basics-frame-processing-topology-distributed-clocks-working-counters-troubleshooting/ |

**Preserve:** OSETC.037 / WordPress post 26150, *Insulation Resistance Testing Basics — Megohmmeters and Motor Winding Safety*, https://bitcoinversus.tech/2026/10/22/osetc-037-insulation-resistance-testing-megohmmeters-motor-windings/.

### Implemented changes and safeguards

- **Completed:** Renamed all four live WordPress post titles as OSNTC.031–034 and corrected the internal lesson-number labels within the affected posts. Preserved existing permalinks to protect inbound links.
- Their current WordPress categories already include CompTIA Network+ (346871), Information Technology (5812), and Tech Docs (2509703); no electrical OSETC term is assigned. Do not add OSETC category.
- **Read-back checked:** WordPress returned all four revised titles, unchanged featured image IDs, unchanged body lengths, expected networking taxonomy IDs, and no remaining OSETC.033–036 labels in those four posts. The saved YouTube URLs remain; visual playback and embed rendering have **not** been independently tested.
- Review OSETC.032 Modbus RTU over RS-485 for possible protocol drift separately. RS-485 wiring and electrical measurements are on-track; registers, CRC, and application-layer communication should not dominate the electrical curriculum. Do not relabel 032 without targeted review.
- Do not change the electrical OSETC.037 lesson or erase historic posts.

## Next three foundational OSETC electrical lessons

1. **OSETC.033 — Transformer Fundamentals:** primary/secondary windings, isolation, step-up/down ratios, nameplate ratings, transformer safety. This foundational power-distribution subject is currently missing from the 001–037 lesson sequence.
2. **OSETC.034 — Conductors, Cable Sizing and Ampacity:** conductor material, AWG/cross-section, insulation ratings, current-carrying capacity, heat, installation constraints, and code-jurisdiction caveats. Avoid presenting examples as universally code-compliant.
3. **OSETC.035 — Three-Phase Motor Fundamentals and Nameplates:** induction-motor purpose, line voltage, rated current, motor thermal protection, three-phase connections, and safe preliminary troubleshooting. This precedes deeper VFD and motor control topics.

**Reserve OSETC.036:** phase sequence/rotation and safe three-phase verification (after the above foundations). Keep the currently published .037 megohmmeter/insulation testing lesson stable.

## Completion state at audit

**Completed:** live post ID/title/category and numbering review; four live networking-post title migrations, targeted in-body cross-reference corrections, preserved historic slugs and cover IDs; three foundational electrical gaps prioritized.

**GitHub archive sync completed:** Updated the four corresponding archive records to match the current published Gutenberg bodies and OSNTC titles, plus the EtherNet/IP metadata record. The historical file paths were preserved just as the live WordPress URLs were.

**Pending:** independent human live-page/embed rendering review and actual publication of new OSETC.033–035 electrical lessons. The four live WordPress title/body changes are already saved. No new electrical lesson was published by this audit.
