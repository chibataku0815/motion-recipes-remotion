import type { RecipeStatus } from "./data/recipes";
import type { LocalizedText, Locale } from "./i18n";

export const siteTitle = "Motion Recipes for Remotion";

export const statusLabels: Record<RecipeStatus, LocalizedText> = {
  Published: {
    en: "Published",
    ja: "公開中",
  },
  "In Progress": {
    en: "In Progress",
    ja: "制作中",
  },
};

export const shellCopy = {
  brandSubtitle: {
    en: "GitHub Pages gallery",
    ja: "GitHub Pagesギャラリー",
  },
  localeEn: {
    en: "EN",
    ja: "EN",
  },
  localeJa: {
    en: "JP",
    ja: "JP",
  },
  themeLight: {
    en: "Light",
    ja: "Light",
  },
  themeDark: {
    en: "Dark",
    ja: "Dark",
  },
  navLabel: {
    en: "Global",
    ja: "グローバル",
  },
  navGallery: {
    en: "Gallery",
    ja: "ギャラリー",
  },
  navDocs: {
    en: "Docs",
    ja: "ドキュメント",
  },
  navGitHub: {
    en: "GitHub",
    ja: "GitHub",
  },
  footerKicker: {
    en: "Motion Recipes for Remotion",
    ja: "Motion Recipes for Remotion",
  },
  footerCopy: {
    en: "Short motion techniques translated into inspectable code primitives.",
    ja: "短いモーション技法を、検証しやすいコードのプリミティブとして翻訳したサイトです。",
  },
  footerRepo: {
    en: "Open repository",
    ja: "リポジトリを開く",
  },
  footerDocs: {
    en: "Technical docs",
    ja: "技術ドキュメント",
  },
} satisfies Record<string, LocalizedText>;

export const landingCopy = {
  metadataTitle: {
    en: "Motion Recipes",
    ja: "モーションレシピ",
  },
  metadataDescription: {
    en: "Gallery-first motion technique studies translated into Remotion.",
    ja: "Remotion に翻訳したモーション技法を、ギャラリー中心で閲覧できる静的サイトです。",
  },
  eyebrow: {
    en: "GitHub Pages Gallery",
    ja: "GitHub Pagesギャラリー",
  },
  title: {
    en: "Motion recipes built to be scanned before they are studied.",
    ja: "まず見て把握し、そのあとで読み込めるモーションレシピ。",
  },
  summary: {
    en: "A still-first gallery for short motion techniques translated into Remotion. Start with the visual read, then move into code and technical notes only when the technique earns a deeper look.",
    ja: "短いモーション技法を Remotion に翻訳した、still-first のギャラリーです。まず視覚的に把握し、深掘りする価値があるときだけコードと技術メモに進めます。",
  },
  metaPublished: {
    en: "published studies",
    ja: "公開済みスタディ",
  },
  metaStillFirst: {
    en: "Still-first browsing",
    ja: "Still-first 閲覧",
  },
  metaStaticPages: {
    en: "Static Pages under /motion-recipes-remotion/",
    ja: "/motion-recipes-remotion/ 配下の静的 Pages",
  },
  actionRepo: {
    en: "Open repository",
    ja: "リポジトリを開く",
  },
  actionDocs: {
    en: "Read technical docs",
    ja: "技術ドキュメントを読む",
  },
  sectionGallery: {
    en: "Gallery",
    ja: "ギャラリー",
  },
  sectionBrowseTitle: {
    en: "Browse the current recipe set",
    ja: "現在のレシピ一覧を見る",
  },
  sectionBrowseLede: {
    en: "Each card leads with a still, then exposes the technique summary, status, and direct route into the video-first detail page.",
    ja: "各カードは still を先頭に置き、その技法の要約、公開状態、動画中心の詳細ページへの導線を続けて示します。",
  },
  cardOpen: {
    en: "Open recipe detail",
    ja: "詳細ページを開く",
  },
  sectionContext: {
    en: "Context",
    ja: "コンテキスト",
  },
  sectionContextTitle: {
    en: "What the gallery is optimized for",
    ja: "このギャラリーが最適化しているもの",
  },
  sectionContextLede: {
    en: "The site is meant to clarify what the recipe is doing before the viewer ever opens the source tree.",
    ja: "このサイトは、ソースツリーを開く前にそのレシピが何をしているかを明確にするために作られています。",
  },
} satisfies Record<string, LocalizedText>;

export const landingContextPanels = [
  {
    label: {
      en: "Why this exists",
      ja: "このサイトの役割",
    },
    title: {
      en: "Technique translation, not template dumping",
      ja: "テンプレ配布ではなく、技法の翻訳",
    },
    copy: {
      en: "Each study isolates one motion idea, one rendering choice, and one set of reusable parameters so the result stays inspectable.",
      ja: "各スタディは 1 つのモーション発想、1 つの描画上の判断、1 組の再利用可能なパラメータに絞り、結果を検証しやすく保っています。",
    },
  },
  {
    label: {
      en: "What stays in the repo",
      ja: "リポジトリに残すもの",
    },
    title: {
      en: "Code, docs, and rendered previews remain first-class",
      ja: "コード、技術文書、レンダリング結果を主役のまま残す",
    },
    copy: {
      en: "Full source, technical writeups, and GitHub entry points stay attached to every recipe so the gallery never becomes detached marketing chrome.",
      ja: "完全なソース、技術的な解説、GitHub への導線を各レシピに結びつけ、ギャラリーが表面的な装飾だけにならないようにしています。",
    },
  },
  {
    label: {
      en: "What stays out",
      ja: "ここに含めないもの",
    },
    title: {
      en: "No source-board clutter or proprietary redistribution",
      ja: "比較ボードの雑然さや、権利物の再配布はしない",
    },
    copy: {
      en: "The gallery omits original project files, comparison boards, and restricted source assets. It stays focused on the translated motion primitive.",
      ja: "このギャラリーには元プロジェクトファイル、比較ボード、再配布できない素材は載せません。翻訳されたモーションのプリミティブに集中させます。",
    },
  },
] satisfies Array<{
  label: LocalizedText;
  title: LocalizedText;
  copy: LocalizedText;
}>;

export const detailCopy = {
  eyebrow: {
    en: "Recipe Detail",
    ja: "レシピ詳細",
  },
  metaVideoFirst: {
    en: "Video-first detail",
    ja: "動画中心の詳細ページ",
  },
  actionCode: {
    en: "View code on GitHub",
    ja: "GitHub でコードを見る",
  },
  actionDoc: {
    en: "Read technical doc",
    ja: "技術ドキュメントを読む",
  },
  actionBack: {
    en: "Back to gallery",
    ja: "ギャラリーへ戻る",
  },
  primaryPreview: {
    en: "Primary preview",
    ja: "メインプレビュー",
  },
  renderedStudy: {
    en: "Rendered motion study",
    ja: "レンダリング済みモーションスタディ",
  },
  mp4FromMedia: {
    en: "MP4 from root media/",
    ja: "root media/ の MP4",
  },
  techniqueSummary: {
    en: "Technique summary",
    ja: "技法の要約",
  },
  parametersToTweak: {
    en: "Parameters to tweak",
    ja: "調整ポイント",
  },
  corePrimitives: {
    en: "Core primitives",
    ja: "主要プリミティブ",
  },
  reusablePieces: {
    en: "Reusable pieces behind the study",
    ja: "このスタディを支える再利用可能な要素",
  },
  differenceFromInspiration: {
    en: "Difference from inspiration",
    ja: "元ネタとの差分",
  },
  publicRecipeChanges: {
    en: "What the public recipe changes",
    ja: "公開版レシピで変えている点",
  },
  directLinks: {
    en: "Direct links",
    ja: "主要リンク",
  },
  jumpIntoRepo: {
    en: "Jump into the repo surface that matters",
    ja: "必要なリポジトリ面へそのまま移動する",
  },
  openRepo: {
    en: "Open repository",
    ja: "リポジトリを開く",
  },
  frames: {
    en: "Frames",
    ja: "フレーム",
  },
  stillGallery: {
    en: "Still gallery",
    ja: "Still ギャラリー",
  },
  stillGalleryLede: {
    en: "Supporting frames stay close to the primary video so the motion can be read as a sequence without flattening the page into another card wall.",
    ja: "補助フレームをメイン動画の近くに置くことで、ページを単なるカード列にせず、モーションを連続として読めるようにしています。",
  },
  inspiration: {
    en: "Inspiration",
    ja: "着想元",
  },
  referenceContext: {
    en: "Reference context",
    ja: "参照コンテキスト",
  },
  openReferencedSource: {
    en: "Open referenced source",
    ja: "参照元を開く",
  },
} satisfies Record<string, LocalizedText>;

export const getSiteTitle = (pageTitle: string) => `${pageTitle} | ${siteTitle}`;

export const getStatusLabel = (status: RecipeStatus, locale: Locale) =>
  statusLabels[status][locale];
