---
name: "Цифровая фотография"
description: "Кремовая редакционная фотогалерея с выразительной типографикой и волновой графикой."
colors:
  purple: "#a64ac9"
  cyan: "#17e9e0"
  yellow: "#fccd04"
  peach: "#ffb48f"
  cream: "#f5e6cc"
  ink: "#190d24"
  focus-purple: "#75408c"
  ink-border: "#190d2433"
typography:
  display:
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(120px,14.7vw,220px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Oswald, sans-serif"
    fontSize: "54px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-.03em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(17px,1.65vw,23px)"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "18px"
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
rounded:
  pill: "30px"
  circle: "50%"
components:
  text-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0"
  text-button-hover:
    textColor: "{colors.focus-purple}"
  icon-button:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    width: "48px"
    height: "48px"
  icon-button-hover:
    backgroundColor: "{colors.peach}"
  work-card:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0"
    width: "100%"
---

# Design System: Цифровая фотография

## Overview

**Creative North Star: "Редакционная фотогалерея"**

The approved first mockup establishes a warm editorial setting for a Russian-language coursework exhibition. Large italic condensed type, open cream space, aligned photography and a purple/cyan ribbon create the visual character. Interface controls remain compact and captions stay close to the work.

This document records the implemented system in `src/style.css`; the gallery composition is described in `.impeccable/surfaces/gallery.md`. The 10 new photographs supplied in фото.zip are original files, preserved unchanged. Only the first four works still use provisional mockup crops; their originals remain outstanding.

**Key Characteristics:**

- Cream canvas and deep ink typography.
- Italic Oswald display paired with Manrope reading text.
- Centered photographs in equal-height frames, aligned number/category captions.
- Expressive motion with OS reduced-motion support; no visible pause button.

## Colors

Warm paper and dark ink frame brighter accents; the frontmatter preserves the implemented CSS values. Sidecar tonal ramps are synthesized swatch previews, not additional application tokens.

### Primary

- **Ribbon Purple:** wave identity, selected text and scrollbar accent.
- **Electric Cyan:** the cool counterpart in the wave graphic.

### Secondary

- **Sun Yellow:** retained palette accent in the implemented root tokens.
- **Soft Peach:** icon-button hover surface and retained palette accent.

### Neutral

- **Cream Paper:** page, dialog and control surfaces.
- **Deep Ink:** typography, fine rules and icon strokes.
- **Focus Purple:** link/button hover text and keyboard focus outlines.
- **Transparent Ink Border:** subtle outlines around motion and icon controls.

## Typography

**Display Font:** Oswald, sans-serif; italic throughout headings. **Body Font:** Manrope, sans-serif.

The frontmatter records desktop roles. The hero is uppercase and optically condensed with horizontal scaling (`scaleX(.77)`); this transform is separate from the font token. Gallery titles use a lighter desktop weight, while dialog headings retain the heavier headline role. Gallery body copy is constrained to (64ch).

At tablet widths, work titles become (34px); at mobile widths they become (38px). Mobile hero type uses (15.4vw), line height (1.12) and no horizontal transform. Gallery body copy becomes (12px) at tablet and (13px) at mobile. Metadata is Manrope semibold, with a desktop size of (19px).

## Layout

The gallery has a centered maximum width of (1320px), (5%) horizontal padding, two equal columns, a (48px) column gap and (72px) row gap. Every image area has the same height, `clamp(320px,42vw,580px)`, with (16px) padding. The full photograph is centered without changing its proportions. Number/category captions and short descriptions are centered; artistic work names have been removed by explicit user request. Articles remain in semantic sequence. No work-specific negative margins or shifted columns remain.

At (900px) and below, column/row gaps reduce to (28px)/(48px). At (580px) and below, the gallery becomes one column, with (6%) side padding, a (46px) row gap and (420px) image stages. Number/category labels use (18px); descriptions use (13px). Above (1600px), header and hero retain centered wide-screen positioning.

The viewer changes from image/copy columns to one column at the tablet breakpoint. Dialogs fit within the viewport; mobile dialogs retain a (12px) outer margin per side.

## Elevation & Depth

The system uses no box shadows. Depth comes from image overlap, the wave behind the hero, and a dark translucent dialog backdrop with a (12px) blur. Hovering a photograph slightly lifts and saturates it; dialog entrance uses a short upward movement and fade.

## Shapes

Photographs and dialogs have square corners. Thin ink rules and borders keep the editorial structure light. Only icon controls are rounded; they use the circle token.

## Components

### Buttons

Text buttons are unfilled with zero padding and purple hover text. Icon buttons have cream surfaces, thin translucent ink borders and peach hover states. The visible pause control has been removed by user request.

All buttons and links expose a purple keyboard outline (3px), offset by (7px). Keep visible labels or accessible names on icon controls.

### Navigation

Navigation uses plain Manrope text and generous desktop spacing. The works link has a thin underline; links and text buttons share the purple hover color. Mobile navigation remains visible with reduced gaps and type size.

### Photo Cards

Equal-height image stages and centered category captions form the photo buttons. Retain work numbers, categories and short descriptions; do not restore artistic titles. Multiple images in a work show a frame count. Full original photographs keep their proportions and are centered inside the stage. Hover lifts the image (5px) and shifts the arrow (5px).

### Viewer and Motion

The native modal dialog presents a cream image/copy layout, circular close and previous/next controls, and a tabular image count. Preserve keyboard operation, dismissal and focus return. Series have explicit frame selectors; AI retouch uses “До ретуши” / “После ретуши”. Left/right keys traverse frames then adjacent works. The hero ribbon reacts to pointer movement. Its animation pauses while a dialog is open, under the user's reduced-motion preference; reduced motion also disables CSS transitions and animations.

## Do's and Don'ts

### Do:

- **Do** keep italic condensed headings paired with readable Manrope captions.
- **Do** preserve the aligned equal-column desktop gallery and sequential mobile order.
- **Do** preserve visible keyboard focus, native dialog behavior and OS motion preferences.
- **Do** identify current mockup crops as provisional until original photographs arrive.

### Don't:

- **Don't** introduce shadows or rounded shells around photographs.
- **Don't** present provisional crops as original source photographs.
- **Don't** add invented coursework, production techniques or software claims.
