---
title: "COLDCARD Lets Bitcoin Owners Split Backups Without Moving Coins"
date: "2026-11-21"
wordpress_post_id: 34244
status: publish
canonical_url: "https://bitcoinversus.tech/2026/11/21/coldcard-codex32-shamir-bitcoin-wallet-backups-firmware-2026/"
category: Bitcoin
source_release_date: "2026-09-30"
source_announcement_date: "2026-10-01"
optech_roundup_date: "2026-11-20"
cover_style: "fine-art oil painting"
cover_media_id: 34239
cover_dimensions: "1200x630"
chart: none
---

**Bitcoin owners can now divide an existing COLDCARD wallet backup across multiple locations without generating a new wallet or moving the coins.** Coinkite’s firmware 5.6.3 for Mk4/Mk5 and 1.5.3Q for Q adds [Codex32 and Shamir secret-sharing support](https://coldcard.com/docs/codex32/). The releases arrived September 30, 2026, were described by Coinkite in October, and appeared in [Bitcoin Optech’s November 20 roundup](https://bitcoinops.org/en/newsletters/2026/11/20/). The timing matters: the capability is established firmware, not a newly announced November release.

Under Shamir secret sharing, a single wallet secret becomes several different recovery shares. A **2-of-3** arrangement produces three shares, any two of which can reconstruct the original secret. One share alone cannot recover the wallet. COLDCARD allows **two to nine shares** and a configurable threshold of at least two. The wallet’s existing addresses and balances remain unchanged.

**Video (source):** https://www.youtube.com/watch?v=W54g3T4WyIg

*Trezor, August 30, 2022: official explanation of threshold-based Shamir backups. Trezor’s implementation and recovery format differ from COLDCARD Codex32; the demonstration is mathematical background, not COLDCARD firmware footage.*

## Why dividing a seed can be useful

A conventional seed-phrase backup may be sufficient for an attacker who finds it. With a threshold scheme, holders can distribute shares between physically separate secure locations while retaining recovery after losing one or more shares. For a 2-of-3 setup, two shares are necessary to unlock the secret and any single stored share is insufficient. The arrangement reduces one form of backup exposure but adds organizational complexity and opportunities for transcription mistakes.

Codex32 is specified in [BIP-93](https://github.com/bitcoin/bips/blob/master/bip-0093.mediawiki). Its strings include checksums for detecting some recording errors. COLDCARD supports `MS1` for BIP-32 master-seed material, plus vendor-specific `CW1` and `CX1` formats for BIP-39 entropy and passphrase-wallet material. Other recovery software must explicitly support the extensions. Mixing shares generated during separate split sessions will not work.

![Official manufacturer photograph of COLDCARD Q and Mk5 Bitcoin hardware wallets, showing their different keyboards](https://bitcoinversus.wordpress.com/wp-content/uploads/2026/11/coinkite-coldcard-q-mk5-official.png?w=1024)

COLDCARD Q and Mk5 hardware wallets. Official [Coinkite product photograph](https://store.coinkite.com/store/bundle-mk5-q1); not an illustration of a recovery secret.

## The security catch: an old weak seed stays weak

Coinkite’s [security status advisory](https://coldcard.com/security/status) documents a separate July 2026 seed-generation flaw affecting older firmware. Updating a device fixes future generation behavior, but **does not repair a previously weakened seed**. Dividing such a secret into shares does not make the underlying key strong. Affected holders need to review the manufacturer’s migration instructions, including its narrowly defined independent-dice exception, rather than treat new Shamir shares as a substitute.

BitcoinVersus.Tech previously reported on [the COLDCARD security incident](https://bitcoinversus.tech/2026/08/27/coldcard-wallet-hack-drains-88-million-bitcoin-network-remains-secure/), [a separate phishing incident](https://bitcoinversus.tech/2026/10/11/coldcard-x-account-phishing-post-october-11-2026/), and [automated attacks on exposed wallet secrets](https://bitcoinversus.tech/2026/11/21/bitcoin-wallet-bots-exposed-ecdsa-nonce-keys-2026-university-liege/). A separate [Trezor supply-chain security story](https://bitcoinversus.tech/2026/10/13/trezor-cuts-resellers-wallet-security/) illustrates the broader trust problem. Physical custody, software integrity, secret quality and recovery planning require different safeguards.

**Video (source):** https://www.youtube.com/watch?v=eh8T3yHpLYQ

*Coinkite, July 29, 2026: an official BIP-85 child-seed derivation tutorial using COLDCARD and SeedSigner. BIP-85 makes reproducible child seeds; it is a separate technique from Shamir shares and cannot replace Codex32 recovery instructions.*

## Recovery matters more than the share count

The vendor advises recording every share accurately before leaving the split screen: COLDCARD does not retain a generated share set. QR, NFC and text-file exports reveal shares in plaintext, so an exposed export counts as an exposed share. Recovery should be rehearsed with the intended stored copies, confirming a known receive address rather than relying only on a short wallet fingerprint.

The firmware also strengthens [PSBTv2](https://github.com/bitcoin/bips/blob/master/bip-0370.mediawiki) handling, including individual-input locktime requirements and stricter parsing. Those changes concern transaction signing and are distinct from backup redundancy. Owners should obtain firmware through [official downloads](https://coldcard.com/downloads), verify the published signature and hash, and confirm the installed version. Bitcoin’s monetary protocol does not change when a wallet improves its storage practices.

***Primary sources:** [Coinkite firmware announcement, October 1, 2026](https://blog.coinkite.com/coldcard-firmware-563-153q/); [COLDCARD Codex32 and Shamir guide](https://coldcard.com/docs/codex32/); [Coinkite security advisory](https://coldcard.com/security/status); [Bitcoin Optech Newsletter #432, November 20, 2026](https://bitcoinops.org/en/newsletters/2026/11/20/); [manufacturer firmware changelog](https://github.com/Coldcard/firmware/blob/master/releases/ChangeLog.md).*

***Editor’s Note:** Version dates distinguish the September firmware release from November editorial coverage. The featured artwork is conceptual oil painting, not a real recovery procedure. The manufacturer photo is authentic; both videos predate Codex32 support and are clearly labeled as demonstrations of related, different wallet techniques.*

**We volunteer daily to ensure the credibility of the information on this platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please scan the QR code below**

![Original BitcoinVersus.Tech QR code for an optional 5,000-satoshi donation](https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png)

Original 5,000-satoshi donation QR. Check recipient and amount in your wallet before transferring funds.

***Disclaimer:** Wallet security reporting is informational, not individualized custody advice. Shamir backup schemes require careful planning, secret handling and verified recovery. No wallet configuration guarantees protection against theft or loss. Bitcoin donations are voluntary and generally irreversible.*
