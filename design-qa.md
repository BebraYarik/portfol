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
- Reduced-motion preference pauses shader on load; user can toggle motion.
- Browser page errors: none.
- Detector reported flat hierarchy against HTML alone. External CSS and rendered screenshots demonstrate display/body hierarchy; finding classified as false positive, not suppressed in code.

## Remaining action

Supply four original photo files (an archive is suitable), replace temporary crops, and verify full-size photo rendering. Remaining required coursework images will be added when supplied. Vercel build instructions are in README.md; no deployment has been performed.
