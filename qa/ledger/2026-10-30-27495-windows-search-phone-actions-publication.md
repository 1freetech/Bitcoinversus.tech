# Publication QA — Windows 11 Search Inline Controls and Phone Actions
Date: October 30, 2026. WordPress Post 27495.
Published: https://bitcoinversus.tech/2026/10/30/microsoft-windows-11-search-phone-actions-inline-sliders-october-2026/

## Primary source, chronology, duplicates
- Primary October 30 2026 Microsoft Windows Insider announcement: https://blogs.windows.com/windows-insider/2026/10/30/announcing-new-builds-for-30-october-2026/
- Microsoft Experimental build 26340.9843 notes: https://learn.microsoft.com/en-us/windows-insider/release-notes/experimental/preview-build-26340-9843
- Microsoft October 7 2026 baseline WinUI3 Search announcement: https://blogs.windows.com/windows-insider/2026/10/07/from-searching-to-doing-building-a-faster-more-streamlined-windows-search/
- Windows Search started testing October 7; October 30 release expands inline sliders, connected Android Phone Link actions, file metadata/preview, result filters and user feedback. Some features only in Experimental and Experimental (26H1) builds, controlled rollout, not general Windows 11 availability. iPhone support projected early 2027. Intune tenant-private Feedback Hub setting preserves Microsoft and tenant visibility. No promise all systems already have it.
- Live WordPress duplicate preflight terms "Windows Search inline actions", "Windows Insider October 30", "private Feedback Hub", "Windows Search phone actions", "26220.9836", "26340.9843", and "WinRE cloud rebuild"; final exact search "Windows Search Phone Link sliders" returned no exact story. GitHub archive scoped search "Windows Search phone actions October 30" returned no result. A separately published same-day Microsoft Cloud Rebuild article (ID 27493) was identified and linked contextually rather than duplicated.
- Brief 364 words excluding captions and footer, plain SEO title/description, sources linked in intro and body, no prohibited language.

## Media
- Original creative 1200×630 cover ID 27490, source https://bitcoinversus.wordpress.com/wp-content/uploads/2026/10/microsoft-windows-insider-search-phone-actions-2026-featured-cover-1200x630.jpg.png . Imported from original generated 1729×910 ID 27483 and WP Jetpack resize/crop; media.create confirmed exact dimensions. It is labeled original conceptual illustration, not an actual Windows release screenshot.
- In-story official image #1: Microsoft July 13, 2026 Windows Search before/after results graphic, source https://winblogs.thesourcemediaassets.com/sites/44/2026/07/3-scaled.png and Microsoft July Search blog https://blogs.windows.com/windows-insider/2026/07/13/improving-windows-search-box-with-less-clutter-and-more-control/ . WordPress ID 27484 2560×1539, original caption accurately says earlier Search interface, not October 30 visuals.
- In-story official image #2: Microsoft earlier Windows 11 Phone Link Start-menu screenshot, source https://learn.microsoft.com/en-us/windows-insider/release-notes/images/phonelink.png associated with Microsoft Insider preview 26300.9032, loaded through WordPress i0.wp.com image proxy and imported at 1200×750 as media ID 27492. Caption clearly says prior Phone Link interface, not October 30 Search phone actions. Both are distinct official images. Official media credits/alt included.
- Public WordPress rendered-content API posts.get(context=view) verified both image URLs as img tags and original Bitcoin donation QR as a third img. No unverified video or social embeds were used. 2 distinct approved relevant image items meet required in-story media quota (featured cover/QR excluded).
- Fully italicized exact immutable Editor's Note text present and unchanged, immediately followed by original QR media 24043. No extra footer disclaimer/promo.

## QA and archive
- WordPress posts.create returned `status: publish` and post 27495, featured ID 27490, categories [5812,6,27318186].
- Authenticated posts.get(context=edit) confirmed 2 media IDs, exact note, original QR and source links. posts.get(context=view) confirmed image tags for both official photos and QR, no raw/unrendered video embeds.
- GitHub exact final Gutenberg archive `archive/2026/10/27495-microsoft-windows-11-search-phone-actions-inline-sliders-october-2026.gutenberg.html`, commit `32ea45f5473f7e397e4ff15f7713aa0ece1a8a98`. Post-publication fetch-back WordPress vs GitHub archive exact byte-for-byte match: **true**.
- Open QA: public browser mobile/desktop responsive layout and direct HTTP image load not independently tested. WordPress render API confirms correct image tags and stored media, not final user's network rendering.
- Regression: distinguish new functionality from October 7 initial rollout; never mark an Insider experiment generally released; preserve old screenshot date in caption; 1200×630 cover; two distinct sourced body media; exact note; rendered HTML and source archive match.
