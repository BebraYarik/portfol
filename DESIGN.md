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
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(38px,4.4vw,65px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-.035em"
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
  motion-toggle:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 14px"
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

The approved first mockup establishes a warm editorial setting for a Russian-language coursework exhibition. Large italic condensed type, open cream space, asymmetric photography and a purple/cyan ribbon create the visual character. Interface controls remain compact and captions stay close to the work.

This document records the implemented system in `src/style.css`; the gallery composition is described in `.impeccable/surfaces/gallery.md`. Current image crops are provisional extracts from the approved mockup, not source photographs. Original files remain outstanding.

**Key Characteristics:**

- Cream canvas and deep ink typography.
- Italic Oswald display paired with Manrope reading text.
- Flat, rectangular photography with staggered desktop placement.
- Expressive motion with a pause control and reduced-motion support.

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

The gallery has a centered maximum width of (1440px), horizontal padding of (4%) and two desktop columns in a (1.32fr / 1fr) ratio with a (70px) row gap. Articles remain in semantic order (01–04); explicit grid placement and negative top margins create the stagger. The upper-right work is lifted by (70px), the lower-right by (95px); selected images intentionally vary in width. Header and hero text use their own optical alignment rather than a rigid shared grid.

At (900px) and below, the gallery uses (5%) side padding, smaller type and a reduced stagger. At (580px) and below, it becomes one sequential column with (6%) side padding and a (45px) gap; desktop image offsets are removed. Above (1600px), header and hero controls receive centered wide-screen positioning.

The viewer changes from image/copy columns to one column at the tablet breakpoint. Dialogs fit within the viewport; mobile dialogs retain a (12px) outer margin per side.

## Elevation & Depth

The system uses no box shadows. Depth comes from image overlap, the wave behind the hero, and a dark translucent dialog backdrop with a (12px) blur. Hovering a photograph slightly lifts and saturates it; dialog entrance uses a short upward movement and fade.

## Shapes

Photographs and dialogs have square corners. Thin ink rules and borders keep the editorial structure light. Only compact controls are rounded: the motion control uses the pill token and icon controls use the circle token.

## Components

### Buttons

Text buttons are unfilled with zero padding and purple hover text. Icon buttons have cream surfaces, thin translucent ink borders and peach hover states. Motion controls combine a small icon and label inside a bordered pill; their mobile padding reduces to (9px 11px).

All buttons and links expose a purple keyboard outline (3px), offset by (7px). Keep visible labels or accessible names on icon controls.

### Navigation

Navigation uses plain Manrope text and generous desktop spacing. The works link has a thin underline; links and text buttons share the purple hover color. Mobile navigation remains visible with reduced gaps and type size.

### Photo Cards

The photograph, metadata, italic title, arrow and description form one unfilled, left-aligned button. Images are cropped inside rectangular containers. Hover moves the image upward (5px), increases saturation and shifts the arrow right (7px). No extra card shell or shadow is present.

### Viewer and Motion

The native modal dialog presents a cream image/copy layout, circular close and previous/next controls, and a tabular image count. Preserve keyboard operation, dismissal and focus return. The hero ribbon reacts to pointer movement. Its animation pauses while a dialog is open, when the pause control is active, and under the user's reduced-motion preference; reduced motion also disables CSS transitions and animations.

## Do's and Don'ts

### Do:

- **Do** keep italic condensed headings paired with readable Manrope captions.
- **Do** preserve the staggered desktop gallery and sequential mobile order.
- **Do** preserve visible keyboard focus, native dialog behavior and motion controls.
- **Do** identify current mockup crops as provisional until original photographs arrive.

### Don't:

- **Don't** introduce shadows or rounded shells around photographs.
- **Don't** present provisional crops as original source photographs.
- **Don't** add invented coursework, production techniques or software claims.
