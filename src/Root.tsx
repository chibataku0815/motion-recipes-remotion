import React from "react";
import { Composition } from "remotion";
import { EchoDitherTrail } from "./recipes/echo-dither-trail/Composition";
import { config as echoDitherTrailConfig } from "./recipes/echo-dither-trail/config";
import { TrimPathsRadialBurst } from "./recipes/trim-paths-radial-burst/Composition";
import { config as trimPathsRadialBurstConfig } from "./recipes/trim-paths-radial-burst/config";

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
    </>
  );
};
