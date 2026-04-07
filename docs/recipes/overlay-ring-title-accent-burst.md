# Overlay Ring Title Accent Burst

## Technique

High-contrast stage + delayed burst accent + title flash payoff.

## What it recreates

This recipe takes the minimal overlay-ring-title shot and pushes it into a louder graphic variant. The rings arrive first, the burst takes over as a second phase, and the title lands last with its own flash, so the motion still reads sequentially instead of collapsing into one simultaneous event.

## Why it is interesting

This recipe isolates four reusable shot-assembly ideas:

- promote the background into a higher-contrast stage without stealing hero priority
- attach burst accents to the outer ring instead of spawning a detached second object
- separate ring, burst, and title into clear timing phases
- use flash overlays as payoff tools rather than constant decoration

It is useful because it shows how far the radial-burst primitive can be pushed inside a composite shot before hierarchy starts to break.

## Core primitives

- `renderGradientLayer`
- `getRingProgress`
- `getTrimWindow`
- burst and title flash overlays

## Parameters to tweak

- `accentLineAnglesDeg`
- `accentLineStaggerFrames`
- `accentStrokeLength`
- `accentOpacity`
- `burstFlashRadius`
- `titleDelayFrames`
- `titleFontSize`

## What differs from the source inspiration

The public recipe packages the result as an inspectable composite shot. It emphasizes role separation and parameterized payoff timing instead of reproducing any specific tutorial frame or finish stack exactly.

## Render command

```bash
bun run render:50
```

## Inspiration

- Creator attribution: composite shot built from overlay gradient, expanding ring, and radial burst studies
- Source URL: not published here as a single-source recreation; this page documents the public-facing burst variant of that internal combination test
