# Overlay Gradient Background

## Technique

Soft wipe + layered gradient drift + light turbulent warp.

## What it recreates

A full-screen gradient layer carries a wide feathered directional wipe, then duplicates into a phased stack so the background keeps drifting as overlapping color sheets instead of reading as one static blend.

## Why it is interesting

This recipe isolates three reusable motion ideas:

- soft directional alpha as a moving gradient window
- layer-index angle offsets for phase-shifted color motion
- lightweight distortion for organic edge breakup

It is also useful because it compares a single layer against a stacked version, which makes it easier to see when the motion starts reading like a real multi-layer background instead of a simple two-color field.

## Core primitives

- `renderGradientLayer`
- `distortPoint`
- single-layer vs stack comparison layout

## Parameters to tweak

- `layerCount`
- `wipeFeatherPx`
- `rotationSpeedDegPerSec`
- `angleStepDeg`
- `distortAmount`
- `distortSize`
- `layerPresence`

## What differs from the source inspiration

The public recipe focuses on inspectable layered motion logic rather than reproducing exact AE plugin output or full finishing nuance. It uses a lightweight raster warp and a comparison board so the moving gradient behavior can be reasoned about in code.

## Render command

```bash
bun run render:46
```

## Inspiration

- Creator attribution: AE tip study translated from private implementation notes
- Source URL: not published here as a frame-matching recreation; this page presents the result as a technique study of moving layered gradients
