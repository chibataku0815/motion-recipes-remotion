# Text Path Morphing

## Technique

Slot-based glyph contour interpolation + editorial poster staging + mandatory print texture stack.

## What it recreates

This recipe translates an AE-style text morph trick into a Remotion study where `BIG` turns into `MEDIUM`, then into `SMALL`, by continuously reshaping contour channels instead of fading one word out and fading another in.

## Why it is interesting

This recipe isolates four reusable ideas:

- path-to-path interpolation per slot instead of opacity-based word replacement
- support-geometry fallback for missing letters when word lengths differ
- editorial neo-brutalist design grammar as part of the technique, not post-polish
- visible `halftone + grain / dust / print dirt` texture layers so the result reads like a printed poster rather than clean flat vector art

It is useful because text morphs usually collapse into either generic goo or generic crossfades. This version stays hard-edged, typographic, and inspectable.

## Core primitives

- `getTimelineState`
- `getChannelMorphState`
- slot-based support geometry fallback
- editorial poster texture stack

## Parameters to tweak

- `holdFrames`
- `morphFrames`
- `channelStaggerFrames`
- `channelCount`
- `letterSpacing`
- `ghostScale`
- `halftoneDotSize`
- `halftoneOpacity`
- `dustCount`
- `dirtCount`

## What differs from the source inspiration

The public recipe keeps the contour-morph idea and the easy-eased timing read, but it reframes the result as a modular poster study. Instead of using exact font outlines from the source workflow, it uses a compact display alphabet and support shapes so the interpolation logic stays easy to inspect and reuse.

## Render command

```bash
bun run render:57
```

## Inspiration

- Creator attribution: short-form AE tip about morphing one text word into another through shape paths
- Source URL: https://www.youtube.com/shorts/uUW6akpwNJk
