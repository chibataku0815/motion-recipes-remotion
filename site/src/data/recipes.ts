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
    slug: "bubble-pop-silhouette-burst",
    title: {
      en: "Bubble Pop Silhouette Burst",
      ja: "Bubble Pop Silhouette Burst",
    },
    tagline: {
      en: "Silhouette alpha punch-out + print-textured membrane breakup",
      ja: "silhouette alpha punch-out + print-textured membrane breakup",
    },
    technique: {
      en: "This recipe treats a bubble pop as mask-driven membrane removal rather than opacity fade. Expanding punch circles cut through the object, a short-lived turbulent displacement roughens the impact, and residual arcs and membrane shards hold the read after the main shell has already disappeared.",
      ja: "このレシピでは、bubble pop を opacity fade ではなく、mask 駆動の膜除去として扱います。拡大する punch circle が object を切り抜き、短時間の turbulent displacement が衝突感を荒らし、主殻が消えた後も residual arc と membrane shard が読みを支えます。",
    },
    summary: {
      en: "It combines silhouette alpha logic, impact-only distortion, residue design, and neo-brutalist editorial print texture so the pop reads like torn printed material instead of a clean vector vanish.",
      ja: "silhouette alpha ロジック、impact 専用 distortion、residue 設計、neo-brutalist editorial な print texture を組み合わせ、clean な vector vanish ではなく、刷り物が破れたような pop にしています。",
    },
    corePrimitives: [
      "expanding punch mask circles",
      "impact-only turbulent displacement",
      "residue arcs and membrane shard field",
      "editorial poster frame and sidebar system",
    ],
    parameters: [
      "punchDurationFrames",
      "dissolveDurationFrames",
      "distortionPeak",
      "roughDurationFrames",
      "ringEndRadius",
      "debrisDurationFrames",
      "halftoneDotSize",
      "halftoneOpacity",
      "printDirtOpacity",
    ],
    previewVideoPath: "media/bubble-pop-silhouette-burst/58-preview.mp4",
    stillPaths: [
      "media/bubble-pop-silhouette-burst/frame-048.png",
      "media/bubble-pop-silhouette-burst/frame-084.png",
      "media/bubble-pop-silhouette-burst/frame-128.png",
    ],
    githubCodeUrl: `${repoRoot}/tree/main/src/recipes/bubble-pop-silhouette-burst`,
    githubDocUrl: `${repoRoot}/blob/main/docs/recipes/bubble-pop-silhouette-burst.md`,
    inspiration: {
      label: {
        en: "AE-style short tip about a bubble popping through silhouette alpha and roughened distortion",
        ja: "silhouette alpha と roughened distortion で bubble を割る AE 系ショート tip",
      },
      url: "https://www.youtube.com/shorts/7PIU9DMQBYk",
      note: {
        en: "The public recipe keeps the punch-out logic and breakup timing, but reinterprets the object as a modular editorial poster study instead of a photoreal soap bubble.",
        ja: "公開版レシピは、punch-out logic と breakup timing を保ちつつ、写実的な soap bubble ではなく、modular editorial poster study として再解釈しています。",
      },
    },
    status: "Published",
  },
  {
    slug: "sticky-metaball-bridge",
    title: {
      en: "Sticky Metaball Bridge",
      ja: "Sticky Metaball Bridge",
    },
    tagline: {
      en: "WebGL metaball field + flattened editorial shading + neo-brutalist poster framing",
      ja: "WebGL metaball field + flattened editorial shading + neo-brutalist poster framing",
    },
    technique: {
      en: "Two circles are combined through a WebGL metaball field so a liquid neck appears only when they approach. The final shot keeps the effect core in shader space, but flattens the surface read into an editorial poster object instead of a glossy 3D demo.",
      ja: "2つの circle を WebGL の metaball field で結合し、接近したときだけ液体的な neck が現れるようにしています。effect core は shader 側で持ちつつ、最終の見えは glossy 3D demo ではなく editorial poster object に flatten しています。",
    },
    summary: {
      en: "This recipe separates fluid union, distance-driven bridge timing, flattened shading, and poster-stage composition so sticky motion can stay readable without turning into generic blob art.",
      ja: "このレシピでは、fluid union、距離駆動の bridge timing、flattened shading、poster-stage composition を分離し、sticky motion が generic blob art に崩れず読めるようにしています。",
    },
    corePrimitives: [
      "sceneSdf",
      "smooth-union metaball bridge control",
      "flattened editorial shading stack",
      "specimen-stage isolation",
    ],
    parameters: [
      "farDistance",
      "tightDistance",
      "stretchDistance",
      "bridgeBreakDistance",
      "uSeparation",
      "uSmoothness",
      "uBridge",
      "outlineWidth",
    ],
    previewVideoPath: "media/sticky-metaball-bridge/55-preview.mp4",
    stillPaths: [
      "media/sticky-metaball-bridge/frame-090.png",
      "media/sticky-metaball-bridge/frame-132.png",
      "media/sticky-metaball-bridge/frame-165.png",
    ],
    githubCodeUrl: `${repoRoot}/tree/main/src/recipes/sticky-metaball-bridge`,
    githubDocUrl: `${repoRoot}/blob/main/docs/recipes/sticky-metaball-bridge.md`,
    inspiration: {
      label: {
        en: "AE-style short tip about sticky circles and metaball-like bridge motion",
        ja: "sticky circles と metaball-like bridge motion を扱う AE 系ショート tip",
      },
      url: "https://www.youtube.com/shorts/J33SutcnpaU",
      note: {
        en: "The public recipe preserves the sticky neck read and merge / peel timing, but intentionally flattens the object appearance so the result stays aligned with the editorial poster system.",
        ja: "公開版レシピは、sticky neck の読みと merge / peel timing を維持しつつ、object の見えは意図的に flatten して editorial poster system に合わせています。",
      },
    },
    status: "Published",
  },
  {
    slug: "text-path-morphing",
    title: {
      en: "Text Path Morphing",
      ja: "Text Path Morphing",
    },
    tagline: {
      en: "Path-to-path word morph + support geometry fallback + print-poster texture",
      ja: "path-to-path word morph + support geometry fallback + print poster texture",
    },
    technique: {
      en: "This recipe treats word replacement as contour interpolation. Fixed slots morph from `BIG` to `MEDIUM` to `SMALL`, and slots with no matching next letter pass through support geometry so the motion still reads as reshaping outlines rather than disappearing characters.",
      ja: "このレシピでは、単語の切り替えを輪郭補間として扱います。固定 slot が `BIG` から `MEDIUM`、さらに `SMALL` へ変形し、対応先のない slot は support geometry を経由することで、文字が消えるのではなく輪郭が組み替わっているように読ませます。",
    },
    summary: {
      en: "It combines slot-based glyph interpolation, support-shape fallback, and neo-brutalist editorial texture so a text morph can stay typographic instead of becoming a blur dissolve or liquid goo.",
      ja: "slot ごとの glyph interpolation、support shape fallback、neo-brutalist editorial texture を組み合わせ、text morph が blur dissolve や liquid goo に落ちず、タイポグラフィとして保たれるようにしています。",
    },
    corePrimitives: [
      "getTimelineState",
      "getChannelMorphState",
      "slot-based support geometry fallback",
      "editorial poster texture stack",
    ],
    parameters: [
      "holdFrames",
      "morphFrames",
      "channelStaggerFrames",
      "channelCount",
      "letterSpacing",
      "ghostScale",
      "halftoneDotSize",
      "halftoneOpacity",
      "dustCount",
      "dirtCount",
    ],
    previewVideoPath: "media/text-path-morphing/57-preview.mp4",
    stillPaths: [
      "media/text-path-morphing/frame-036.png",
      "media/text-path-morphing/frame-060.png",
      "media/text-path-morphing/frame-090.png",
      "media/text-path-morphing/frame-144.png",
      "media/text-path-morphing/frame-162.png",
    ],
    githubCodeUrl: `${repoRoot}/tree/main/src/recipes/text-path-morphing`,
    githubDocUrl: `${repoRoot}/blob/main/docs/recipes/text-path-morphing.md`,
    inspiration: {
      label: {
        en: "Short-form AE tip about morphing one text word into another through shape paths",
        ja: "shape path で単語同士を変形させる AE 系ショート tip",
      },
      url: "https://www.youtube.com/shorts/uUW6akpwNJk",
      note: {
        en: "The public recipe preserves the contour-morph logic and easy-eased timing read, but packages it as a modular poster study with a compact display alphabet instead of source-matched font outlines.",
        ja: "公開版レシピは、輪郭 morph のロジックと easy ease 的な読みを維持しつつ、ソースの font outline 完全再現ではなく、簡略 display alphabet を使う modular poster study として再構成しています。",
      },
    },
    status: "Published",
  },
  {
    slug: "echo-text-train",
    title: {
      en: "Echo Text Train",
      ja: "Echo Text Train",
    },
    tagline: {
      en: "Composite-in-front text echo + curved 2.5D path + editorial poster framing",
      ja: "前面合成の text echo + 曲線 2.5D path + editorial poster 構成",
    },
    technique: {
      en: "A single headline word moves from depth toward the viewer while older sampled positions trail behind it. The shot packages that echo logic inside a neo-brutalist editorial poster layout so the technique reads as a designed motion object, not just a trail effect.",
      ja: "単一の headline word が奥から手前へ進み、その過去 sample が後続列として追従します。このページでは、その echo ロジックを neo-brutalist editorial poster layout の中に入れ、単なるトレイルではなく設計された motion object として読めるようにしています。",
    },
    summary: {
      en: "This recipe treats temporal duplication, curved 2.5D travel, front-most compositing, and design-block staging as one system instead of separate polish layers.",
      ja: "このレシピでは、時間方向の複製、曲線 2.5D 移動、前面 compositing、design block staging を別々の polish ではなく 1 つのシステムとして扱います。",
    },
    corePrimitives: [
      "getTemporalEchoSamples",
      "getEchoTrainState",
      "hero-stage safety padding",
      "editorial comparison layout",
    ],
    parameters: [
      "depthStart",
      "depthEnd",
      "waveAmplitude",
      "waveFrequency",
      "lateralWobble",
      "echoCount",
      "echoStepFrames",
      "echoDecay",
      "safePaddingRight",
    ],
    previewVideoPath: "media/echo-text-train/56-preview.mp4",
    stillPaths: [
      "media/echo-text-train/frame-018.png",
      "media/echo-text-train/frame-072.png",
      "media/echo-text-train/frame-126.png",
      "media/echo-text-train/frame-203.png",
    ],
    githubCodeUrl: `${repoRoot}/tree/main/src/recipes/echo-text-train`,
    githubDocUrl: `${repoRoot}/blob/main/docs/recipes/echo-text-train.md`,
    inspiration: {
      label: {
        en: "AE-style short tip about text echo trailing behind a leading word",
        ja: "先頭テキストの後ろに残像列が追従する AE 系ショート tip",
      },
      url: "https://www.youtube.com/shorts/DqybqgGghUI",
      note: {
        en: "The public recipe keeps the one-object echo logic and curved depth motion, but reframes the result as an inspectable poster study rather than a source-matched clone.",
        ja: "公開版レシピは、1 object の echo ロジックと曲線 depth motion を維持しつつ、ソース完全再現ではなく inspectable な poster study として再構成しています。",
      },
    },
    status: "Published",
  },
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
    slug: "overlay-ring-title-minimal",
    title: {
      en: "Overlay Ring Title Minimal",
      ja: "Overlay Ring Title Minimal",
    },
    tagline: {
      en: "Subdued gradient stage + expanding ring + late title payoff",
      ja: "抑えたグラデーション背景 + expanding ring + 遅れて入るタイトル",
    },
    technique: {
      en: "This combination recipe fixes the moving overlay gradient as a background role, then lets a centered ring stack expand and hand off to a short title reveal. The point is not maximal spectacle but proving that background depth and one hero event can already read as a production-like shot.",
      ja: "この組み合わせレシピでは、動く overlay gradient を背景役に固定し、中央の ring stack が拡張して短いタイトル reveal へ接続します。狙いは派手さの最大化ではなく、背景の奥行きと主役イベント 1 つだけで production-like なショットが成立するかを確かめることです。",
    },
    summary: {
      en: "It turns two previously isolated primitives into a minimal one-shot template and makes the role separation between background, hero, and title explicit.",
      ja: "個別に検証していた 2 つの primitive を最小 one-shot template に変換し、background / hero / title の役割分担を明示します。",
    },
    corePrimitives: [
      "renderGradientLayer",
      "getRingProgress",
      "late title reveal",
    ],
    parameters: [
      "backgroundLayerCount",
      "backgroundOpacity",
      "ringCount",
      "ringStaggerFrames",
      "ringEndDiameter",
      "titleDelayFrames",
      "titleText",
    ],
    previewVideoPath: "media/overlay-ring-title-minimal/48-preview.mp4",
    stillPaths: [
      "media/overlay-ring-title-minimal/frame-0012.png",
      "media/overlay-ring-title-minimal/frame-0030.png",
      "media/overlay-ring-title-minimal/frame-0042.png",
      "media/overlay-ring-title-minimal/frame-0066.png",
    ],
    githubCodeUrl: `${repoRoot}/tree/main/src/recipes/overlay-ring-title-minimal`,
    githubDocUrl: `${repoRoot}/blob/main/docs/recipes/overlay-ring-title-minimal.md`,
    inspiration: {
      label: {
        en: "Minimal composite shot derived from two AE-tip studies",
        ja: "2 つの AE-tip study から組んだ最小 composite shot",
      },
      note: {
        en: "The public page frames this as a primitive-connection test rather than a frame-matched recreation of a single source clip.",
        ja: "公開ページでは、特定ソースの厳密再現ではなく、primitive の接続テストとして扱っています。",
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
    slug: "overlay-ring-title-accent-burst",
    title: {
      en: "Overlay Ring Title Accent Burst",
      ja: "Overlay Ring Title Accent Burst",
    },
    tagline: {
      en: "High-contrast stage + delayed burst accent + title flash payoff",
      ja: "高コントラスト背景 + 遅れて入る burst accent + title flash payoff",
    },
    technique: {
      en: "This variant keeps the same background-to-hero structure as the minimal shot, but adds a delayed burst phase after the rings settle and before the title lands. The burst is attached to the outer ring instead of becoming a second hero, so the sequence still reads in three steps: ring, burst, title.",
      ja: "この variant は minimal shot と同じ background-to-hero 構造を維持しつつ、ring が落ち着いた後、title が入る前に delayed burst phase を追加します。burst は第二主役にならないよう outer ring に追従させ、ring, burst, title の 3 段階で読めるようにしています。",
    },
    summary: {
      en: "It shows how the radial-burst primitive can be promoted from a subtle edge reaction into a louder payoff layer without collapsing the shot hierarchy.",
      ja: "radial-burst primitive を、ショットの階層を壊さずに、弱い edge reaction からより強い payoff layer へ押し上げる例です。",
    },
    corePrimitives: [
      "renderGradientLayer",
      "getRingProgress",
      "getTrimWindow",
      "burst flash overlays",
    ],
    parameters: [
      "accentLineAnglesDeg",
      "accentLineStaggerFrames",
      "accentStrokeLength",
      "accentOpacity",
      "burstFlashRadius",
      "titleDelayFrames",
      "titleFontSize",
    ],
    previewVideoPath: "media/overlay-ring-title-accent-burst/50-preview.mp4",
    stillPaths: [
      "media/overlay-ring-title-accent-burst/frame-0034.png",
      "media/overlay-ring-title-accent-burst/frame-0062.png",
      "media/overlay-ring-title-accent-burst/frame-0076.png",
    ],
    githubCodeUrl: `${repoRoot}/tree/main/src/recipes/overlay-ring-title-accent-burst`,
    githubDocUrl: `${repoRoot}/blob/main/docs/recipes/overlay-ring-title-accent-burst.md`,
    inspiration: {
      label: {
        en: "Composite shot built from overlay gradient, expanding ring, and radial burst studies",
        ja: "overlay gradient, expanding ring, radial burst の複合 shot",
      },
      note: {
        en: "This public recipe documents the loud variant that came after validating the quieter minimal connection test.",
        ja: "この公開レシピは、静かな最小接続テストを検証した後に作った、より強い variant を記録しています。",
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
