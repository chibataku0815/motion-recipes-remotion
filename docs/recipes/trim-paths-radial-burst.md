# Trim Paths Radial Burst

## Technique

Traveling segment + radial symmetry + eased mid-speed.

## What it recreates

A single line is drawn from the center outward, then erased with a slight delay so only a moving segment remains. That segment is duplicated radially into a 6-way burst using equal-angle rotation.

## Why it is interesting

This recipe isolates three reusable motion ideas:

- draw-on as a visible window, not a scale cheat
- delayed erase-on for the laser-segment read
- repeater-style radial layout as pure geometry

It is also useful because it compares linear timing against an AE-like ease approximation before showing the final burst.

## Core primitives

- `getTrimWindow`
- `getSpokeAngles`
- timing study layout for linear vs eased motion

## Parameters to tweak

- `drawDurationFrames`
- `eraseDelayFrames`
- `eraseDurationFrames`
- `spokeCount`
- `strokeLength`
- `strokeWidth`
- `rotationOffsetDeg`

## What differs from the source inspiration

The timing curve is an AE-like approximation, not a captured graph-editor curve. The rendering is SVG-based and intentionally clean, without the additional glow, blur, or stack-specific nuances that might exist in the original workflow.

## Render command

```bash
bun run render:45
```

## Inspiration

- Creator attribution: source short-form motion tip referenced from private implementation notes
- Source URL: https://youtube.com/shorts/wLknsvLI2b8?si=o-87fQKMb_OtasXS
