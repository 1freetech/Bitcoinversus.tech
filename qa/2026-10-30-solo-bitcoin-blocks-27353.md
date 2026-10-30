# BitcoinVersus.Tech publication QA — Solo Bitcoin blocks October 26–27, 2026

## Publication details
- WordPress ID **27353**. Status **publish** independently returned by `posts.get(context=edit)` and `posts.get(context=view)`.
- URL: https://bitcoinversus.tech/2026/10/30/two-solo-bitcoin-miners-blocks-futurebit-ckpool-october-2026/
- Headline: Two Solo Bitcoin Miners Find Blocks on Consecutive Days
- Categories: Bitcoin Mining (57414501) and Technology (6); tags Bitcoin, bitcoin mining, solo mining and Bitcoin Miner.
- Date: October 30, 2026. News event occurred October 26–27, 2026.
- Original editorial body: ~360 words excluding video captions/footers.
- SEO title, search description, excerpt and social excerpt saved, and SEO meta description independently read back.

## Source and numerical verification
- Manufacturer FutureBit, Oct 26 primary announcement: https://www.futurebit.io/blog/futurebit-solo-bitcoin-block-973262
- Public block 973262: https://mempool.space/block/973262 ; 17:06 UTC Oct 26; 3.15418892 BTC total = 3.125 BTC subsidy + 0.02918892 BTC fees, attributed to FutureBit Apollo Solo node/software.
- Public block 973413: https://www.blockchain.com/explorer/blocks/btc/973413 ; 15:11 UTC Oct 27; 3.13968422 BTC total = 3.125 BTC subsidy + 0.01468422 BTC fees, attributed to Solo CKPool.
- CKPool fee confirmed as 2% via https://solo.ckpool.org/ and independent on-chain payout inspection summarized at https://mempolitics.com/story/futurebit-apollo-solo-ckpool-blocks-973262-973413-payout-address-reused-four-earlier-payments-2026-10-28/
- Winner paid 3.07689054 BTC, CKPool destination 0.06279368 BTC. Critically, *do not* say the CKPool winner kept all 3.1397 BTC.
- Aggregate gross reward 6.29387314 BTC before service fee. Aggregate actual miner payout 6.23107946 BTC (first block no service share, second block net).
- Unknown winning hardware and unknown stable miner hashrates: do not portray FutureBit Apollo Solo software pool as proof that a particular compact Apollo mining ASIC found the block; do not infer CKPool hardware from a later pool snapshot. Article explicitly maintains this distinction.
- Duplicates: WordPress searches for 973413 and 973262 found none, and GitHub repo search on October 2026 block identifiers returned no matching article. Earlier standalone solo mining feature and mining-pool explainers included contextually as internal links.

## Cover and in-story media
- Cover **27351**, original realistic editorial illustration of an ASIC-style mining bench and laptop, cropped/uploaded as exactly 1200×630. Illustrative—not a photo of a known winning machine.
- In-story media (3):
  1. SerpentX Tech archive demonstration `iTtcSAdPJjc`, 2025 video on solo mining through FutureBit Apollo node.
  2. Philip D'Ath 2026 CKPool personal solo-mining tutorial `MbCZpps7Ijs`.
  3. Official FutureBit hardware photo **27352**, 1000×625, with accessibility alt and explicit caveat that product shown has not been confirmed as actual winning ASIC.
- Videos stored as supported Gutenberg `wp:shortcode` blocks with canonical YouTube watch URL. `posts.get(context=view)` rendered **two individual YouTube iframe player srcs** matching those exact video IDs; manufacturer image also renders as WordPress image element.
- Neither video claims to depict the Oct 26–27 winning moment: both are correctly labeled archival background.
- Actual playback inside a real browser and mobile viewport screenshots were **not independently tested**; iframe rendering is not confirmation of successful playback.
- In-story quota 3, excluding featured cover and original QR, no original in-story diagrams, video-first media selection observed.

## Footer and retention
- Correct fully italic volunteer Editor's Note, exact original Bitcoin donation QR **24043**, mobile wallet/5,000 sats scanning instructions and mandatory disclaimer are intact.
- No retired ad block, promotional X promo link, or extra branding.
- Final GitHub archive path `archive/2026/10/27353-two-solo-bitcoin-miners-futurebit-ckpool-oct-2026.gutenberg.html` is exact raw Gutenberg content after final WordPress read-back; GitHub fetched after commit to confirm byte-exact text equality.
- Final WordPress rendered view and edit source both confirmed published; responsive visual screenshots/playback not independently checked.

## Regression notes
- Direct YouTube links are not embed proof: inspect `posts.get(context=view)` for exact `youtube.com/embed/VIDEO_ID` iframes. Do not substitute unrelated video. Never conflate the miner's block reward with actual payout after a solo service fee.
- Never claim a known winning ASIC model from a coinbase tag that only identifies a mining server/software platform.
