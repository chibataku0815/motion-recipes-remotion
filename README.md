# Motion Recipes for Remotion

Short motion techniques translated into Remotion, inspired by AE-style tip workflows.

Published gallery site:

- [motion-recipes-remotion](https://chibataku0815.github.io/motion-recipes-remotion/)

This repository is the code and documentation source for that site. It focuses on how small motion ideas can be decomposed into reusable code primitives, parameterized timing, minimal renderable recipes, and small combination shots built from those primitives.

## What this repo is

- A compact Remotion app with standalone motion recipes
- A GitHub Pages gallery for browsing previews and technique summaries
- A public-facing subset extracted from a larger private R&D environment
- An educational exploration of technique translation, not template redistribution

## Why these experiments exist

I use short motion studies to translate visual ideas from timeline-based motion workflows into reusable code. The goal is not to mimic a source video frame-by-frame, but to identify the motion primitive that matters and make it inspectable, configurable, and renderable.

## Main entry points

- Gallery site: [motion-recipes-remotion](https://chibataku0815.github.io/motion-recipes-remotion/)
- Repository: [github.com/chibataku0815/motion-recipes-remotion](https://github.com/chibataku0815/motion-recipes-remotion)
- Technical docs: [`docs/recipes`](./docs/recipes)
- X post drafts: [`docs/x-posts`](./docs/x-posts)

## Quick Start

```bash
bun install
bun run dev
```

Run the gallery site locally:

```bash
bun run pages:dev
```

Render the included recipes:

```bash
bun run render:44
bun run render:45
bun run render:46
bun run render:48
bun run render:49
bun run render:50
bun run render:55
bun run render:56
bun run render:57
bun run render:58
```

## Recipes

| Recipe | Code | Doc |
|---|---|---|
| Text Path Morphing | [`src/recipes/text-path-morphing`](./src/recipes/text-path-morphing) | [`docs/recipes/text-path-morphing.md`](./docs/recipes/text-path-morphing.md) |
| Bubble Pop Silhouette Burst | [`src/recipes/bubble-pop-silhouette-burst`](./src/recipes/bubble-pop-silhouette-burst) | [`docs/recipes/bubble-pop-silhouette-burst.md`](./docs/recipes/bubble-pop-silhouette-burst.md) |
| Echo Dither Trail | [`src/recipes/echo-dither-trail`](./src/recipes/echo-dither-trail) | [`docs/recipes/echo-dither-trail.md`](./docs/recipes/echo-dither-trail.md) |
| Sticky Metaball Bridge | [`src/recipes/sticky-metaball-bridge`](./src/recipes/sticky-metaball-bridge) | [`docs/recipes/sticky-metaball-bridge.md`](./docs/recipes/sticky-metaball-bridge.md) |
| Echo Text Train | [`src/recipes/echo-text-train`](./src/recipes/echo-text-train) | [`docs/recipes/echo-text-train.md`](./docs/recipes/echo-text-train.md) |
| Overlay Gradient Background | [`src/recipes/overlay-gradient-background`](./src/recipes/overlay-gradient-background) | [`docs/recipes/overlay-gradient-background.md`](./docs/recipes/overlay-gradient-background.md) |
| Overlay Ring Title Minimal | [`src/recipes/overlay-ring-title-minimal`](./src/recipes/overlay-ring-title-minimal) | [`docs/recipes/overlay-ring-title-minimal.md`](./docs/recipes/overlay-ring-title-minimal.md) |
| Overlay Ring Title Accent Burst | [`src/recipes/overlay-ring-title-accent-burst`](./src/recipes/overlay-ring-title-accent-burst) | [`docs/recipes/overlay-ring-title-accent-burst.md`](./docs/recipes/overlay-ring-title-accent-burst.md) |
| Now Loading Progress Bar | [`src/recipes/now-loading-progress-bar`](./src/recipes/now-loading-progress-bar) | [`docs/recipes/now-loading-progress-bar.md`](./docs/recipes/now-loading-progress-bar.md) |
| Trim Paths Radial Burst | [`src/recipes/trim-paths-radial-burst`](./src/recipes/trim-paths-radial-burst) | [`docs/recipes/trim-paths-radial-burst.md`](./docs/recipes/trim-paths-radial-burst.md) |

## Attribution / Inspiration

These studies are inspired by short motion-tip workflows shared by motion designers and editors. Each recipe doc includes an `Inspiration` section with source attribution and link when that information is available in the project notes.

This repository intentionally shares:

- original code written for the translated technique
- parameterized configs
- rendered previews from the recreated implementation

This repository intentionally does **not** share:

- extracted source video frames
- original project files
- proprietary assets, logos, fonts, or audio from source tutorials
- commercial templates for resale

## What is intentionally not included

- The broader private `remotion-motion-lab` environment
- Other experiments unrelated to these published recipes
- Original source media used by other creators
- Side-by-side source-vs-recreation comparison boards

## Personal Profile / GitHub CTA

If this repo is useful, start with the code and recipe docs. The point of this project is technical clarity first: what changed, what was extracted, and why the motion reads the way it does.

- GitHub profile: [chibataku0815](https://github.com/chibataku0815)
- Published gallery site: [motion-recipes-remotion](https://chibataku0815.github.io/motion-recipes-remotion/)
