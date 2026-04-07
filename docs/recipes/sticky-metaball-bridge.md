# Sticky Metaball Bridge

## Technique

WebGL metaball field + flattened editorial shading + neo-brutalist poster framing.

## What it recreates

This recipe translates the AE-style sticky-circle trick into a Remotion shot where two circles stay separate at distance, form a neck when they approach, stretch as one mass, and then peel apart cleanly.

## Why it is interesting

This recipe isolates four reusable ideas:

- distance-driven metaball control with `separation`, `smoothness`, and `bridge` as separate signals
- WebGL for the effect core instead of forcing the merge with 2D path overlap
- flattened 2.5D shading so the object still reads as an editorial print object, not a glossy 3D demo
- stage-first composition where the right panel is tuned to make the fluid read before the poster ornament

It is useful because sticky/liquid motion often fails in code when the effect and the appearance are solved in the same layer.

## Core primitives

- `sceneSdf`
- smooth-union metaball bridge control
- flattened editorial shading stack
- specimen-stage isolation inside the hero panel

## Parameters to tweak

- `farDistance`
- `tightDistance`
- `stretchDistance`
- `bridgeBreakDistance`
- `uSeparation`
- `uSmoothness`
- `uBridge`
- `outlineWidth`

## What differs from the source inspiration

The public recipe keeps the liquid neck read and the merge / peel timing, but reframes the result as an inspectable poster study. It chooses a flatter editorial appearance over full 3D volumetric rendering so the object grammar stays aligned with the design system.

## Render command

```bash
bun run render:55
```

## Inspiration

- Creator attribution: short-form AE tip about sticky circles / metaball-like bridge animation
- Source URL: https://www.youtube.com/shorts/J33SutcnpaU
