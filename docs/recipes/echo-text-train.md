# Echo Text Train

## Technique

Composite-in-front text echo + curved 2.5D path + neo-brutalist editorial poster framing.

## What it recreates

This recipe turns a one-layer AE-style echo trick into a poster-like motion study. One headline word travels from depth toward the viewer, older sampled positions trail behind it, and the whole shot is staged as an editorial board instead of a plain kinetic-typography demo.

## Why it is interesting

This recipe isolates four reusable ideas:

- temporal echo as sampled history instead of hand-duplicated text copies
- curved 2.5D travel driven by depth, wobble, and local rotation
- front-most compositing order so the newest sample stays dominant
- design-block thinking where palette, texture, support objects, and layout are part of the technique

It is useful because the effect stops looking generic only when the motion primitive and the poster grammar are designed together.

## Core primitives

- `getTemporalEchoSamples`
- `getEchoTrainState`
- hero-stage safety padding
- editorial comparison layout

## Parameters to tweak

- `depthStart`
- `depthEnd`
- `waveAmplitude`
- `waveFrequency`
- `lateralWobble`
- `echoCount`
- `echoStepFrames`
- `echoDecay`
- `safePaddingRight`

## What differs from the source inspiration

The public recipe keeps the one-object echo logic and the curved depth read, but packages the result as an inspectable poster study. It emphasizes reusable sampling, layout safety, and design grammar instead of matching every finishing detail from the source workflow.

## Render command

```bash
bun run render:56
```

## Inspiration

- Creator attribution: short-form AE tip about text echo trailing behind a leading word
- Source URL: https://www.youtube.com/shorts/DqybqgGghUI
