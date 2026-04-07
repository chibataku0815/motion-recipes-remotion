import type { LocalizedText } from "../i18n";

export type RecipeStatus = "Published" | "In Progress";

export type RecipeInspiration = {
  label: LocalizedText;
  url?: string;
  note: LocalizedText;
};

export type RecipePageData = {
  slug: string;
  title: LocalizedText;
  tagline: LocalizedText;
  technique: LocalizedText;
  summary: LocalizedText;
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
    title: {
      en: "Echo Dither Trail",
      ja: "Echo Dither Trail",
    },
    tagline: {
      en: "Temporal duplication + rough alpha texture",
      ja: "時間方向の複製 + 粗いアルファテクスチャ",
    },
    technique: {
      en: "A moving square leaves a sampled echo trail. The left side stays smooth, while the right side pushes the same alpha accumulation through ordered dither.",
      ja: "移動する四角形がサンプル化された残像トレイルを残します。左側は滑らかなまま、右側は同じアルファ蓄積を ordered dither に通して粗い質感に変えています。",
    },
    summary: {
      en: "This study separates trail creation from trail compositing so the motion smear and the roughened texture can be reasoned about independently.",
      ja: "このスタディでは、トレイル生成とトレイル合成を分離し、モーションの残像感と粗いテクスチャを別々に考えられるようにしています。",
    },
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
      label: {
        en: "Short-form motion tip from private implementation notes",
        ja: "私的な実装メモに残っていたショート形式のモーション tip",
      },
      note: {
        en: "The exact source URL was not retained, so this page frames the work as a technique study instead of a source-specific recreation.",
        ja: "正確な参照元 URL が残っていないため、このページでは特定ソースの再現ではなく、技法スタディとして位置づけています。",
      },
    },
    status: "Published",
  },
  {
    slug: "overlay-gradient-background",
    title: {
      en: "Overlay Gradient Background",
      ja: "Overlay Gradient Background",
    },
    tagline: {
      en: "Soft wipe + layered gradient drift + light turbulent warp",
      ja: "ソフトワイプ + 多層グラデーションの漂い + 軽い歪み",
    },
    technique: {
      en: "A full-screen gradient sheet rotates through a wide feathered wipe, then duplicates into a phased stack so the color field keeps drifting instead of sitting as a static background.",
      ja: "全画面のグラデーションシートが広いフェザー付きワイプとして回転し、それを位相ずれの stack に複製することで、静止背景ではなく流動する色面として読めるようにしています。",
    },
    summary: {
      en: "This recipe separates soft directional alpha, layer-index angle offsets, and lightweight distortion so AE-like moving gradient depth can be inspected as code.",
      ja: "このレシピでは、ソフトな方向性アルファ、レイヤー index ごとの角度差、軽量な distortion を分離し、AE ライクな動くグラデーションの奥行きをコードとして点検できるようにしています。",
    },
    corePrimitives: [
      "renderGradientLayer",
      "distortPoint",
      "single-layer vs stack comparison layout",
    ],
    parameters: [
      "layerCount",
      "wipeFeatherPx",
      "rotationSpeedDegPerSec",
      "angleStepDeg",
      "distortAmount",
      "distortSize",
    ],
    previewVideoPath: "media/overlay-gradient-background/46-preview.mp4",
    stillPaths: [
      "media/overlay-gradient-background/frame-018.png",
      "media/overlay-gradient-background/frame-060.png",
      "media/overlay-gradient-background/frame-108.png",
      "media/overlay-gradient-background/frame-162.png",
    ],
    githubCodeUrl: `${repoRoot}/tree/main/src/recipes/overlay-gradient-background`,
    githubDocUrl: `${repoRoot}/blob/main/docs/recipes/overlay-gradient-background.md`,
    inspiration: {
      label: {
        en: "AE tip study translated from private implementation notes",
        ja: "私的な実装メモから翻訳した AE tip スタディ",
      },
      url: "https://www.youtube.com/watch?v=iyoNKImbmTw",
      note: {
        en: "The public recipe focuses on moving layered gradient logic instead of source-matched finishing details such as exact plugin output or color grading.",
        ja: "公開版レシピは、厳密なプラグイン出力やカラーグレーディングではなく、動く多層グラデーションのロジックそのものに焦点を当てています。",
      },
    },
    status: "Published",
  },
  {
    slug: "now-loading-progress-bar",
    title: {
      en: "Now Loading Progress Bar",
      ja: "Now Loading Progress Bar",
    },
    tagline: {
      en: "Left-anchored fill + segmented timing + looped text blink",
      ja: "左端起点の fill + segmented timing + ループする点滅",
    },
    technique: {
      en: "A loader bar fills from the left edge instead of scaling from center, while stepped holds and a looped opacity pattern make the UI feel more like a game loading pass than a sterile linear tween.",
      ja: "ローダーバーを中央拡大ではなく左端から埋め、途中の hold とループする opacity 点滅を組み合わせることで、単調な linear tween ではなくゲームらしい loading UI の読みを作っています。",
    },
    summary: {
      en: "This recipe isolates anchor behavior, segmented progress timing, and label blinking so the loading read can be tuned without decorative effects.",
      ja: "このレシピでは、アンカー挙動、segmented な進行タイミング、ラベルの点滅を分離し、装飾に頼らず loading 感そのものを調整できるようにしています。",
    },
    corePrimitives: [
      "getSegmentedProgress",
      "getBlinkOpacity",
      "center-origin vs left-anchor comparison layout",
    ],
    parameters: [
      "fillStops",
      "fillDurationFrames",
      "labelBlinkStepFrames",
      "labelBlinkPattern",
      "trackWidth",
      "trackHeight",
      "layoutOffsetY",
    ],
    previewVideoPath: "media/now-loading-progress-bar/49-preview.mp4",
    stillPaths: [
      "media/now-loading-progress-bar/frame-000.png",
      "media/now-loading-progress-bar/frame-024.png",
      "media/now-loading-progress-bar/frame-046.png",
      "media/now-loading-progress-bar/frame-090.png",
    ],
    githubCodeUrl: `${repoRoot}/tree/main/src/recipes/now-loading-progress-bar`,
    githubDocUrl: `${repoRoot}/blob/main/docs/recipes/now-loading-progress-bar.md`,
    inspiration: {
      label: {
        en: "AE tip video about a game-style loading screen",
        ja: "ゲーム風ロード画面を扱う AE tip 動画",
      },
      url: "https://www.youtube.com/watch?v=ncvjQvZip1I",
      note: {
        en: "The public recipe turns the source workflow into inspectable timing primitives and a comparison board instead of aiming for an exact frame clone.",
        ja: "公開版レシピでは、元ワークフローを厳密再現するのではなく、点検可能な timing primitive と comparison board に変換しています。",
      },
    },
    status: "Published",
  },
  {
    slug: "trim-paths-radial-burst",
    title: {
      en: "Trim Paths Radial Burst",
      ja: "Trim Paths Radial Burst",
    },
    tagline: {
      en: "Traveling segment + radial symmetry + eased mid-speed",
      ja: "移動するセグメント + 放射対称 + 中速域のイージング",
    },
    technique: {
      en: "A line is drawn, erased with delay, and duplicated into a six-spoke burst. The page contrasts linear timing with an AE-like eased variant before showing the final arrangement.",
      ja: "一本の線を描き、遅れて消し、その挙動を6本スポークの放射バーストへ複製します。このページでは、最終配置を見る前に、線形タイミングと AE らしいイージング版を対比しています。",
    },
    summary: {
      en: "This recipe isolates draw-on, delayed erase-on, and equal-angle radial layout so the burst reads as a moving segment rather than a scale trick.",
      ja: "このレシピでは、描画開始、遅延付きの消去、等角度の放射レイアウトを分離し、単なるスケール変化ではなく移動するセグメントとして読めるようにしています。",
    },
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
      label: {
        en: "Short-form motion tip referenced in private notes",
        ja: "私的メモで参照していたショート形式のモーション tip",
      },
      url: "https://youtube.com/shorts/wLknsvLI2b8?si=o-87fQKMb_OtasXS",
      note: {
        en: "The public recipe uses an AE-like timing approximation and a cleaner SVG rendering than the source workflow.",
        ja: "公開版レシピでは、元ワークフローよりも AE ライクなタイミング近似と、より整理された SVG レンダリングを使っています。",
      },
    },
    status: "Published",
  },
];

export const recipeBySlug = Object.fromEntries(
  recipes.map((recipe) => [recipe.slug, recipe]),
) as Record<string, RecipePageData>;
