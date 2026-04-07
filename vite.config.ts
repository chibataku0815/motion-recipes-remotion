import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const mediaRoot = path.resolve(__dirname, "media");

const getContentType = (filePath: string) => {
  if (filePath.endsWith(".mp4")) {
    return "video/mp4";
  }

  if (filePath.endsWith(".png")) {
    return "image/png";
  }

  return "application/octet-stream";
};

const mediaDirectoryPlugin = (): Plugin => {
  let base = "/";

  return {
    name: "media-directory-plugin",
    configResolved(resolvedConfig) {
      base = resolvedConfig.base;
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = req.url?.split("?")[0] ?? "";
        const basePrefix = `${base}media/`;
        const fallbackPrefix = "/media/";
        const prefix = pathname.startsWith(basePrefix)
          ? basePrefix
          : pathname.startsWith(fallbackPrefix)
            ? fallbackPrefix
            : null;

        if (!prefix) {
          next();
          return;
        }

        const relativePath = decodeURIComponent(pathname.slice(prefix.length));
        const filePath = path.resolve(mediaRoot, relativePath);

        if (
          !filePath.startsWith(mediaRoot) ||
          !fs.existsSync(filePath) ||
          fs.statSync(filePath).isDirectory()
        ) {
          next();
          return;
        }

        res.setHeader("Content-Type", getContentType(filePath));
        fs.createReadStream(filePath).pipe(res);
      });
    },
    closeBundle() {
      const outputDir = path.resolve(__dirname, "dist/media");

      fs.rmSync(outputDir, { recursive: true, force: true });
      fs.cpSync(mediaRoot, outputDir, { recursive: true });
    },
  };
};

export default defineConfig({
  root: path.resolve(__dirname, "site"),
  base: "/motion-recipes-remotion/",
  publicDir: false,
  plugins: [react(), mediaDirectoryPlugin()],
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        landing: path.resolve(__dirname, "site/index.html"),
        echo: path.resolve(__dirname, "site/recipes/echo-dither-trail/index.html"),
        echoTextTrain: path.resolve(
          __dirname,
          "site/recipes/echo-text-train/index.html",
        ),
        overlayGradient: path.resolve(
          __dirname,
          "site/recipes/overlay-gradient-background/index.html",
        ),
        overlayRingTitleMinimal: path.resolve(
          __dirname,
          "site/recipes/overlay-ring-title-minimal/index.html",
        ),
        overlayRingTitleAccentBurst: path.resolve(
          __dirname,
          "site/recipes/overlay-ring-title-accent-burst/index.html",
        ),
        nowLoading: path.resolve(
          __dirname,
          "site/recipes/now-loading-progress-bar/index.html",
        ),
        stickyMetaballBridge: path.resolve(
          __dirname,
          "site/recipes/sticky-metaball-bridge/index.html",
        ),
        trim: path.resolve(
          __dirname,
          "site/recipes/trim-paths-radial-burst/index.html",
        ),
        textPathMorphing: path.resolve(
          __dirname,
          "site/recipes/text-path-morphing/index.html",
        ),
        bubblePopSilhouetteBurst: path.resolve(
          __dirname,
          "site/recipes/bubble-pop-silhouette-burst/index.html",
        ),
      },
    },
  },
});
