import React from "react";
import { Composition } from "remotion";
import { EchoDitherTrail } from "./recipes/echo-dither-trail/Composition";
import { config as echoDitherTrailConfig } from "./recipes/echo-dither-trail/config";
import { AETipOverlayGradientBackground } from "./recipes/overlay-gradient-background/Composition";
import { config as overlayGradientBackgroundConfig } from "./recipes/overlay-gradient-background/config";
import { AETipNowLoadingProgressBar } from "./recipes/now-loading-progress-bar/Composition";
import { config as nowLoadingProgressBarConfig } from "./recipes/now-loading-progress-bar/config";
import { OverlayRingTitleMinimal } from "./recipes/overlay-ring-title-minimal/Composition";
import { config as overlayRingTitleMinimalConfig } from "./recipes/overlay-ring-title-minimal/config";
import { OverlayRingTitleAccentBurst } from "./recipes/overlay-ring-title-accent-burst/Composition";
import { config as overlayRingTitleAccentBurstConfig } from "./recipes/overlay-ring-title-accent-burst/config";
import { AETipEchoTextTrain } from "./recipes/echo-text-train/Composition";
import { config as echoTextTrainConfig } from "./recipes/echo-text-train/config";
import { AETipTextPathMorphing } from "./recipes/text-path-morphing/Composition";
import { config as textPathMorphingConfig } from "./recipes/text-path-morphing/config";
import { TrimPathsRadialBurst } from "./recipes/trim-paths-radial-burst/Composition";
import { config as trimPathsRadialBurstConfig } from "./recipes/trim-paths-radial-burst/config";
import { AETipBubblePopSilhouetteBurst } from "./recipes/bubble-pop-silhouette-burst/Composition";
import { config as bubblePopSilhouetteBurstConfig } from "./recipes/bubble-pop-silhouette-burst/config";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="EchoDitherTrail"
        component={EchoDitherTrail}
        durationInFrames={echoDitherTrailConfig.totalFrames}
        fps={echoDitherTrailConfig.fps}
        width={echoDitherTrailConfig.width}
        height={echoDitherTrailConfig.height}
      />
      <Composition
        id="TrimPathsRadialBurst"
        component={TrimPathsRadialBurst}
        durationInFrames={trimPathsRadialBurstConfig.totalFrames}
        fps={trimPathsRadialBurstConfig.fps}
        width={trimPathsRadialBurstConfig.width}
        height={trimPathsRadialBurstConfig.height}
      />
      <Composition
        id="AETipOverlayGradientBackground"
        component={AETipOverlayGradientBackground}
        durationInFrames={overlayGradientBackgroundConfig.totalFrames}
        fps={overlayGradientBackgroundConfig.fps}
        width={overlayGradientBackgroundConfig.width}
        height={overlayGradientBackgroundConfig.height}
      />
      <Composition
        id="AETipNowLoadingProgressBar"
        component={AETipNowLoadingProgressBar}
        durationInFrames={nowLoadingProgressBarConfig.totalFrames}
        fps={nowLoadingProgressBarConfig.fps}
        width={nowLoadingProgressBarConfig.width}
        height={nowLoadingProgressBarConfig.height}
      />
      <Composition
        id="OverlayRingTitleMinimal"
        component={OverlayRingTitleMinimal}
        durationInFrames={overlayRingTitleMinimalConfig.durationFrames}
        fps={overlayRingTitleMinimalConfig.fps}
        width={overlayRingTitleMinimalConfig.width}
        height={overlayRingTitleMinimalConfig.height}
      />
      <Composition
        id="OverlayRingTitleAccentBurst"
        component={OverlayRingTitleAccentBurst}
        durationInFrames={overlayRingTitleAccentBurstConfig.durationFrames}
        fps={overlayRingTitleAccentBurstConfig.fps}
        width={overlayRingTitleAccentBurstConfig.width}
        height={overlayRingTitleAccentBurstConfig.height}
      />
      <Composition
        id="AETipEchoTextTrain"
        component={AETipEchoTextTrain}
        durationInFrames={echoTextTrainConfig.totalFrames}
        fps={echoTextTrainConfig.fps}
        width={echoTextTrainConfig.width}
        height={echoTextTrainConfig.height}
      />
      <Composition
        id="AETipTextPathMorphing"
        component={AETipTextPathMorphing}
        durationInFrames={textPathMorphingConfig.totalFrames}
        fps={textPathMorphingConfig.fps}
        width={textPathMorphingConfig.width}
        height={textPathMorphingConfig.height}
      />
      <Composition
        id="AETipBubblePopSilhouetteBurst"
        component={AETipBubblePopSilhouetteBurst}
        durationInFrames={bubblePopSilhouetteBurstConfig.totalFrames}
        fps={bubblePopSilhouetteBurstConfig.fps}
        width={bubblePopSilhouetteBurstConfig.width}
        height={bubblePopSilhouetteBurstConfig.height}
      />
    </>
  );
};
