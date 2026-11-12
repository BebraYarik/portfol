# Visual and functional QA

**final result: blocked**

The implementation works. All 10 new image files supplied in `фото.zip` are now installed unchanged and verified. The remaining asset limitation applies **only to the first four works** (grapes, pop-art helmets and two double exposures), which still use provisional mockup crops because those originals were not included. The historical sections below record earlier checks; the latest archive section supersedes their missing-portrait status. Do not describe the first four previews as originals.

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

## Original archive integration — latest validation

- Copied all 10 files from `фото.zip` into `src/photos/`, renaming only. SHA-256 equality with each source was verified. `src/photos/sources.json` preserves the filename mapping and hashes.
- Latest archive filenames determine light setup: `контровой (2).png`, `контровой.png` and `крупныйПЛАНконтровой.png` form the three-frame backlight series; `посяной2софт.jpg` is the separate two-softbox portrait. The processed profile is `РЕТУШЬ.png`; `РЕТУШЬ (2).png` is the unretouched source.
- Added the extra board portrait as work 11, «Свободный портрет». All 11 works render; 14 frames including the existing four provisional previews. No source photo was cropped, resized or regenerated.
- Descriptions use simple user-provided details: a white wall, one lamp for the backlight series, two softboxes, window light and reference repetition. No remembered prompt, camera settings or unsupported software is invented.
- Real-source browser checks passed: opening all 11 works, source load for each new work, retouch switches to the distinct processed file, backlight has all three original frames and the close-up selector opens the correct source.
- Mobile 390px and 320px: no horizontal overflow; visible work order matches DOM order. Reset leftover work-specific CSS order to keep new additions in sequence.
- Screenshots: `.impeccable/review/originals-desktop.png`, `originals-mobile.png`, `originals-retouch.png`, `originals-references.png`. Original source images were directly inspected; the source comparison board was additionally checked in the browser viewer.
- JavaScript/network errors: none. Production build passed.

New archive work is ready. Global photographic QA stays **blocked only for the four earlier original files**, not the portraits, references or selfie now supplied.

## Centered ending refinement

User requested centered final work and hero exploration link, with no prominent footer caption. Centered the last odd gallery item while preserving normal column width; single-column mobile stays full width. Removed footer caption/rule and centered a 44px back-to-top target. Browser geometry and navigation checks passed on the production build at 1440px, 768px and 390px: centered work/CTA, matching card width, no overflow, no footer text, working back-to-top. Visually inspected `.impeccable/review/centered-bottom-1440.png` and `centered-hero.png`; mobile capture is `centered-bottom-390.png`. No change to the outstanding first-four-originals limitation.
