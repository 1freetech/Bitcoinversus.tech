---
title: "Bitcoin Core Closes a Tor Privacy Leak in Its Code"
date: "2026-11-21"
wordpress_post_id: 34203
wordpress_status: publish
canonical_url: "https://bitcoinversus.tech/2026/11/21/bitcoin-core-tor-i2p-privacy-leak-addrme-fix-36757-2026/"
categories: [Bitcoin, Information Technology, Technology, Trending News]
cover_style: cinematic-anime
cover_image: "https://bitcoinversus.tech/wp-content/uploads/2026/11/bitcoin-core-tor-ip-privacy-fix-cover-1200x630-1.jpg"
chart_type: none
source_anchor: "bitcoin/bitcoin PR #36757, merged 2026-11-12; Bitcoin Optech #432, 2026-11-20"
---

Bitcoin Core developers have merged a privacy fix that prevents a malicious Tor or I2P peer from exploiting part of Bitcoin’s address-discovery process. [Pull request #36757](https://github.com/bitcoin/bitcoin/pull/36757), merged November 12, 2026, changes how nodes process a peer’s claimed view of their network address. [Bitcoin Optech highlighted the change November 20](https://bitcoinops.org/en/newsletters/2026/11/20/), explaining how the previous behavior could help correlate anonymous and public connections.

The issue affects network identity, not Bitcoin signatures, balances or blockchain consensus. A targeted operator could potentially discover that a Tor-connected Bitcoin node and a publicly reachable node belong to the same machine. The attack requires particular conditions, and the available documentation does not establish a widespread compromise.

**Embedded video:** https://www.youtube.com/watch?v=mMUdgIK7qmw

*Satashi21, “Bitcoin Peers | StartOS,” May 28, 2026. An independent walkthrough of outbound, inbound, clearnet, Tor and I2P connections; background footage, not a demonstration of the November patch.*

## A small detail in the handshake

When two Bitcoin nodes connect, their protocol `version` messages can include an address describing where each peer believes the other is reachable. Developers refer to the field as `addrMe`. The field is useful in ordinary public networking because nodes can learn whether peers see them at a routable address.

A malicious Tor or I2P peer, however, could insert an arbitrary public IP address into the message. Before the fix, the receiving Bitcoin Core node might later announce the supplied address back to the peer while retaining the node’s own public listening port. A sufficiently distinctive port could then act as a fingerprint when compared with a publicly observable node. The attacker would also need the victim to select the malicious privacy-network peer for an outbound connection.

**Embedded video:** https://www.youtube.com/watch?v=qYcErJc9N3o

*The Tor Project, “How to Use Tor Browser,” September 20, 2023. Official background on the anonymity network. Tor Browser is separate from Bitcoin Core’s peer-to-peer networking.*

Developer stratospher described the risk as a correlation opportunity involving multiple prerequisites, rather than automatic deanonymization. The correction ignores the address a privacy-network peer claims to observe. A valid address from an ordinary public-network context follows separate handling. No change to Bitcoin’s proof-of-work algorithm, transaction format or supply rules is involved.

## Why a port number matters

An internet address identifies a host or interface; a port identifies a network service on that host. Bitcoin’s conventional peer-to-peer port is **8333**, but operators can configure alternatives. The correlation technique becomes more useful when the same nonstandard port is visible in two contexts. A common port shared by many nodes is a weak fingerprint; a rare one can be more identifying.

Bitcoin Core supports connections over IPv4, IPv6, Tor onion services and I2P, with detailed instructions in its official [Tor](https://github.com/bitcoin/bitcoin/blob/master/doc/tor.md) and [I2P](https://github.com/bitcoin/bitcoin/blob/master/doc/i2p.md) documentation. Tor can hide the origin of a network connection, but software-level metadata may still enable correlation. Protecting a transport route and avoiding application-layer fingerprints are different engineering problems.

**Embedded video:** https://www.youtube.com/watch?v=3K3zsYu4eEo

*Stick Bitcoin, “How to set up a Bitcoin node from scratch,” January 23, 2026. Independent educational material on full-node operation and privacy; not evidence of exploitation.*

## A code fix is not a universal patch notice

The change has been **merged into Bitcoin Core’s master development branch**. A merged pull request does not alone prove that every packaged release or third-party node product includes the fix. Operators should compare their installed build against the project’s official release notes and security advisories before making deployment decisions.

The risk differs from a [separate node-stalling bug](https://bitcoinversus.tech/2026/11/21/bitcoin-core-cve-2026-117348-orphan-announcement-node-stall-patch/) recently reported by BitcoinVersus.Tech and from [weak wallet-key handling](https://bitcoinversus.tech/2026/11/21/bitcoin-wallet-bots-exposed-ecdsa-nonce-keys-2026-university-liege/). The new correction concentrates on peer metadata. It also matters to operators experimenting with [Tor-accessible mining infrastructure](https://bitcoinversus.tech/2026/11/19/arkpool-bitaxe-stratum-v2-tor-one-sat-ark-payouts-november-2026/) or evaluating [Lightning node reliability fixes](https://bitcoinversus.tech/2026/11/18/lnd-65536-counter-overflow-settled-lightning-payments-restart-2026/), where different layers of the Bitcoin software stack have different failure modes.

The wider lesson is that privacy depends on code paths far below the wallet interface. Anonymity networks can obscure routes, but a single echoed field in a routine handshake may still reveal an identifying pattern. Bitcoin Core’s latest networking fix removes one such pattern without changing how Bitcoin money works.

***Sources:** [Bitcoin Core PR #36757, merged November 12, 2026](https://github.com/bitcoin/bitcoin/pull/36757); [Bitcoin Optech Newsletter #432, November 20, 2026](https://bitcoinops.org/en/newsletters/2026/11/20/); [Bitcoin Core Tor documentation](https://github.com/bitcoin/bitcoin/blob/master/doc/tor.md); [Bitcoin Core I2P documentation](https://github.com/bitcoin/bitcoin/blob/master/doc/i2p.md). The fix is documented in the development code and is not represented here as proof of exploitation at scale.*

***Editor’s Note:** Reporting distinguishes a merged development change from confirmed inclusion in a particular stable release. The featured image is original, conceptual cinematic anime art rather than a photograph of a deployed Bitcoin node or a recorded attack. Videos are independently published educational background; no video claims to show the November 2026 fix.*

**We volunteer daily to ensure the credibility of the information on that platform is Verifiably True. If you would like to support to help further secure the integrity of our research initiatives, please scan the QR code below**

![Original BitcoinVersus.Tech QR code for an optional 5,000-satoshi donation](https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/bitcoinversus-donation-qr-5000-sats-original.png)

*Original 5,000-satoshi donation QR. Check recipient and amount in your wallet before transferring funds.*

***Disclaimer:** Security and configuration information is educational, not a substitute for release-specific review, threat modeling or professional network administration. Tor and I2P reduce certain forms of network exposure but do not guarantee anonymity. Bitcoin donations are optional and generally irreversible.*
