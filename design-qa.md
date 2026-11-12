# Visual and functional QA

**final result: blocked**

The implementation works and the finish review's one material implementation finding was resolved. Final photographic fidelity is blocked by unavailable original image files. The current site deliberately uses temporary crops of the selected generated mockup, not the original artworks. The user has been informed. Do not publish it as a finished photographic portfolio before replacing these.

## Evidence

- Source: `/workspace/generated_images/exec-7cf2a2ce-9d40-4318-a719-cd162f7616f9.png` (946 × 1663).
- Desktop: `.impeccable/review/desktop.png` (1440 × 2599), CSS viewport 1440 × 1100, deviceScaleFactor 1.
- Mobile: `.impeccable/review/mobile.png` (390 × 2833), CSS viewport 390 × 844, deviceScaleFactor 1.
- Side-by-side full comparison: `.impeccable/review/comparison.png`. Source shown at 946px; implementation normalized to 946px width, intrinsic proportions preserved. Different total page heights are recorded, not stretched to match.
- Focused interaction evidence: `.impeccable/review/viewer.png`, `.impeccable/review/viewer-mobile.png`.
- State: photographs loaded, fonts ready, motion paused, page captured from top; native dialog open for viewer captures.
- Chromium with system executable and SwiftShader for WebGL. The Sites preview relay was unavailable; direct local Vite was browser-tested. A shared cloud browser tab/public URL was not opened.

## Required fidelity surfaces

- Typography: locally served Cyrillic Oswald italic display and Manrope body; condensed display and clear hierarchy match the direction. Exact generated letterforms are not a real source font; Oswald is the implementation approximation. Enlarged desktop captions after first comparison for presentation readability.
- Layout: cream page, asymmetrical two-column staggered gallery and large two-line title retained. Mobile intentionally becomes a sequential single column. Corrected column ratio to 1.32:1. Neither tested desktop nor mobile has horizontal overflow.
- Colors: supplied cream/purple/cyan/peach/yellow tokens retained. Animated wave uses purple/cyan shader colors. Ink text has strong contrast on cream. Source's extra yellow corner wisps were not reproduced; this is an ornamental difference.
- Images: selected compositions recognizable and crops aligned. **P1 external blocker:** original images not mounted; generated mockup crops are provisional and visibly lower resolution when enlarged. Fix by supplying original files and assigning `src` in `src/works.js`, then recapture and re-review image fidelity. Never claim these are originals.
- Copy: Russian language, anonymous presentation, four confirmed subjects. No invented software, remembered prompts, client claims or absent coursework. Descriptions limited to visible content and confirmed phone/AI origin. Flowers excluded.

## Comparison history

1. Functional capture initially found the staggered pop-art image intercepted the pause control. Moved hero controls clear of the gallery; rerun passed.
2. Full-view comparison found desktop type scale and column proportions too small/even. Adjusted title weight and horizontal scale, desktop caption sizes and 1.32:1 columns. Recaptured in the same viewport. Direction retained; original-asset blocker remains.
3. Independent Impeccable finish review found visual/semantic order differed on mobile (01→03→02→04). Replaced column wrappers with a single 01→02→03→04 DOM sequence and CSS grid placement. Recaptured same screenshots. Reviewer verdict pass: **ship, scoped to resolution of the one order finding**, not original-asset readiness. Browser Tab test independently confirmed 01→02→03→04.

## Functional checks

- `npm ci` and `npm run build`: passed.
- Four images load; WebGL state ready.
- Photo open, next/previous arrows, Escape close, native focus containment/return: passed.
- About open and link to gallery: passed.
- Mobile 390px and short 320 × 568 viewer: no horizontal overflow; close control remains visible.
- Reduced-motion preference pauses shader on load. Visible pause control was subsequently removed by explicit user request.
- Browser page errors: none.
- Detector reported flat hierarchy against HTML alone. External CSS and rendered screenshots demonstrate display/body hierarchy; finding classified as false positive, not suppressed in code.

## Remaining action

Supply original photo files as downloadable attachments/an archive, replace temporary crops, and verify full-size photo rendering. New originals for the added portrait, reference and selfie works are also outstanding as local files, although visible in conversation. Filenames and confirmed lighting assignments are recorded in `src/photos/README.md`. Vercel build instructions are in README.md; no deployment has been performed.

## Latest user refinement

The user explicitly superseded the staggered gallery composition: remove pause control and artistic titles, center/align photographs and text, retain numbers and topic labels. Added metadata for AI retouch, backlight softbox series, two-softbox waist portrait, window portrait, reference repetition and selfie. User confirmed the first two studio portraits belong to backlight; the third belongs to two softboxes. Backlight close-up will arrive later.

- New visual evidence: `.impeccable/review/revision-desktop.png` and `revision-mobile.png`, 1440px/390px widths, DPR 1, OS reduced-motion, fonts loaded. Compared with requested refinements; hero identity retained, gallery intentional changes accepted.
- Browser geometry checks confirmed equal photo-stage, label and description tops within both desktop rows. No horizontal overflow on mobile.
- No pause button or artistic work-title elements remain. Viewer headings use category labels.
- Standard navigation, Escape dismissal and category labels passed.
- Retouch before/after and series navigation passed with browser-only synthetic fixtures. Fixtures use existing mockup crops for interaction testing only, never saved as user portrait files. This verifies behavior, **not** the missing original photographs.
- New works with missing assets remain hidden. No broken image requests or invented portraits are introduced. Existing four previews remain explicitly provisional.
- JavaScript errors: none. Build passed.

Final result remains **blocked** solely for original-asset delivery and final photographic verification. Layout changes can be reviewed and pushed independently.
