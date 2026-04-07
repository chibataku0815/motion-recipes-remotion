export type RecipeStatus = "Published" | "In Progress";

export type RecipeInspiration = {
  label: string;
  url?: string;
  note: string;
};

export type RecipePageData = {
  slug: string;
  title: string;
  tagline: string;
  technique: string;
  summary: string;
  corePrimitives: string[];
  parameters: string[];
  previewVideoPath: string;
  stillPaths: string[];
  githubCodeUrl: string;
  githubDocUrl: string;
  inspiration: RecipeInspiration;
  status: RecipeStatus;
};

const repoRoot = "https://github.com/chibataku0815/motion-recipes-remotion";

export const recipes: RecipePageData[] = [
  {
    slug: "echo-dither-trail",
    title: "Echo Dither Trail",
    tagline: "Temporal duplication + rough alpha texture",
    technique:
      "A moving square leaves a sampled echo trail. The left side stays smooth, while the right side pushes the same alpha accumulation through ordered dither.",
    summary:
      "This study separates trail creation from trail compositing so the motion smear and the roughened texture can be reasoned about independently.",
    corePrimitives: [
      "getTemporalEchoSamples",
      "applyOrderedDither",
      "side-by-side comparison layout",
    ],
    parameters: [
      "echoCount",
      "echoStepFrames",
      "decay",
      "threshold",
      "ditherPixelSize",
      "rotationSpeed",
    ],
    previewVideoPath: "media/echo-dither-trail/44-preview.mp4",
    stillPaths: [
      "media/echo-dither-trail/frame-018.png",
      "media/echo-dither-trail/frame-054.png",
      "media/echo-dither-trail/frame-096.png",
      "media/echo-dither-trail/frame-138.png",
    ],
    githubCodeUrl: `${repoRoot}/tree/main/src/recipes/echo-dither-trail`,
    githubDocUrl: `${repoRoot}/blob/main/docs/recipes/echo-dither-trail.md`,
    inspiration: {
      label: "Short-form motion tip from private implementation notes",
      note:
        "The exact source URL was not retained, so this page frames the work as a technique study instead of a source-specific recreation.",
    },
    status: "Published",
  },
  {
    slug: "trim-paths-radial-burst",
    title: "Trim Paths Radial Burst",
    tagline: "Traveling segment + radial symmetry + eased mid-speed",
    technique:
      "A line is drawn, erased with delay, and duplicated into a six-spoke burst. The page contrasts linear timing with an AE-like eased variant before showing the final arrangement.",
    summary:
      "This recipe isolates draw-on, delayed erase-on, and equal-angle radial layout so the burst reads as a moving segment rather than a scale trick.",
    corePrimitives: [
      "getTrimWindow",
      "getSpokeAngles",
      "timing study layout",
    ],
    parameters: [
      "drawDurationFrames",
      "eraseDelayFrames",
      "eraseDurationFrames",
      "spokeCount",
      "strokeLength",
      "strokeWidth",
      "rotationOffsetDeg",
    ],
    previewVideoPath: "media/trim-paths-radial-burst/45-preview.mp4",
    stillPaths: [
      "media/trim-paths-radial-burst/frame-026.png",
      "media/trim-paths-radial-burst/frame-031.png",
      "media/trim-paths-radial-burst/frame-034.png",
      "media/trim-paths-radial-burst/frame-038.png",
    ],
    githubCodeUrl: `${repoRoot}/tree/main/src/recipes/trim-paths-radial-burst`,
    githubDocUrl: `${repoRoot}/blob/main/docs/recipes/trim-paths-radial-burst.md`,
    inspiration: {
      label: "Short-form motion tip referenced in private notes",
      url: "https://youtube.com/shorts/wLknsvLI2b8?si=o-87fQKMb_OtasXS",
      note:
        "The public recipe uses an AE-like timing approximation and a cleaner SVG rendering than the source workflow.",
    },
    status: "Published",
  },
];

export const recipeBySlug = Object.fromEntries(
  recipes.map((recipe) => [recipe.slug, recipe]),
) as Record<string, RecipePageData>;
