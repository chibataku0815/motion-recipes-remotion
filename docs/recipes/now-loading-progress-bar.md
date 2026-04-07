# Now Loading Progress Bar

## Technique

Left-anchored fill + segmented timing + looped text blink.

## What it recreates

A game-style loader where the bar grows from the left edge, pauses briefly at intermediate percentages, and pairs with a blinking `Now Loading...` label that loops as long as the load is in progress.

## Why it is interesting

This recipe separates three different ideas that often get flattened into a single tween:

- anchor behavior for where the fill actually grows from
- segmented timing for holds and speed shifts
- looped label blinking for a repeating UI state

It is also useful because the page contrasts center-origin scaling against left-anchored fill before comparing linear timing with a more AE-like segmented pass.

## Core primitives

- `getSegmentedProgress`
- `getBlinkOpacity`
- center-origin vs left-anchor comparison layout

## Parameters to tweak

- `fillStops`
- `fillDurationFrames`
- `labelBlinkStepFrames`
- `labelBlinkPattern`
- `trackWidth`
- `trackHeight`
- `layoutOffsetY`

## What differs from the source inspiration

The public recipe turns the source workflow into inspectable timing primitives and a comparison board. It stays intentionally minimal, without extra glow, particles, or game-specific skinning.

## Render command

```bash
bun run render:49
```

## Inspiration

- Creator attribution: short AE tip about a game-style loading screen
- Source URL: https://www.youtube.com/watch?v=ncvjQvZip1I
