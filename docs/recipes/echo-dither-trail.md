# Echo Dither Trail

## Technique

Temporal duplication + rough alpha texture.

## What it recreates

A moving square leaves a sampled echo trail. The left side keeps a smooth alpha fade, while the right side runs the same accumulated alpha through an ordered dither pass so the residual trail becomes rough and grain-like.

## Why it is interesting

This recipe separates two different ideas that often get blurred together:

- how a trail is created over time
- how that trail is composited into a visible texture

That makes it useful as a study for motion smears, time-offset duplication, and deliberately degraded alpha.

## Core primitives

- `getTemporalEchoSamples`
- `applyOrderedDither`
- side-by-side comparison layout for the same motion source

## Parameters to tweak

- `echoCount`
- `echoStepFrames`
- `decay`
- `threshold`
- `ditherPixelSize`
- `rotationSpeed`

## What differs from the source inspiration

This is not trying to reproduce a full editor-specific render pipeline. It uses a clean 2D accumulation pass and a 4x4 Bayer ordered dither approximation, so the result is intentionally a technique study rather than a source-matched clone.

## Render command

```bash
bun run render:44
```

## Inspiration

- Creator attribution: source short-form motion tip referenced from private implementation notes
- Source URL: unavailable in the retained notes, so this recipe is published as a technique study rather than a source-specific recreation
