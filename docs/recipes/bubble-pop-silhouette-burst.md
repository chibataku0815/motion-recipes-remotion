# Bubble Pop Silhouette Burst

## Technique

Silhouette alpha punch-out + turbulent displacement + rough-edge residue inside a print-like editorial poster system.

## What it recreates

This recipe reconstructs the read of a soap-bubble-like membrane getting punched open by expanding circular masks. Instead of fading out a shape, it removes the membrane through `silhouette alpha` logic, hits the breakup with turbulent distortion, and leaves torn fragments that read as printed matter rather than clean vector disappearance.

## Why it is interesting

This recipe isolates five reusable ideas:

- mask-driven membrane removal instead of opacity fade
- burst timing with an aggressive front-loaded speed curve
- displacement as a short-lived impact event, not a constant wobble
- rough residual membrane shards that survive the punch-out moment
- neo-brutalist editorial texture where halftone and print dirt are part of the effect, not afterthought polish

It is useful because the pop only reads convincingly when timing, compositing, debris, and texture are designed as one system.

## Core primitives

- expanding punch mask circles
- SVG `feTurbulence` + `feDisplacementMap` impact distortion
- residue arcs and membrane shard field
- editorial poster frame + sidebar information block

## Parameters to tweak

- `punchDurationFrames`
- `dissolveDurationFrames`
- `distortionPeak`
- `roughDurationFrames`
- `ringEndRadius`
- `debrisDurationFrames`
- `halftoneDotSize`
- `halftoneOpacity`
- `printDirtOpacity`

## What differs from the source inspiration

The public recipe keeps the punch-out logic and breakup timing, but reinterprets the object as a modular editorial poster study. The bubble is not treated as photoreal soap glass. It is rebuilt from segmented geometry, limited palette, halftone fields, grain, dust, and visible print dirt so the technique becomes inspectable and reusable.

## Render command

```bash
bun run render:58
```

## Inspiration

- Creator attribution: short-form AE tip about a bubble popping through silhouette alpha and roughened distortion
- Source URL: https://www.youtube.com/shorts/7PIU9DMQBYk
