# Overlay Ring Title Minimal

## Technique

Subdued gradient stage + expanding ring + late title payoff.

## What it recreates

This recipe combines the moving overlay gradient background with the expanding ring reveal to prove that one background primitive and one hero primitive are already enough to produce a compact, production-like one-shot.

## Why it is interesting

This recipe isolates three reusable shot-assembly ideas:

- keep the gradient stack in a strict background role
- let the ring stack own the only major motion event
- delay the title until the shot can close with a single payoff

It is useful because it turns two separate technique studies into a reusable minimal shot template instead of leaving them as isolated boards.

## Core primitives

- `renderGradientLayer`
- `getRingProgress`
- delayed title reveal

## Parameters to tweak

- `backgroundLayerCount`
- `backgroundOpacity`
- `ringCount`
- `ringStaggerFrames`
- `ringEndDiameter`
- `titleDelayFrames`
- `titleText`

## What differs from the source inspiration

This public recipe is not framed as a single-source recreation. It documents a primitive-connection test: how a moving background and a single hero event can be connected cleanly before adding more accents.

## Render command

```bash
bun run render:48
```

## Inspiration

- Creator attribution: minimal composite shot derived from private AE-tip studies
- Source URL: not published as a one-to-one recreation; this page presents the result as a primitive connection recipe
