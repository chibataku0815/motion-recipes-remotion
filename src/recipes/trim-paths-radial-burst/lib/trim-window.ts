type EasingName = "linear" | "ae-like";

export type TrimWindow = {
  start: number;
  end: number;
  head: number;
  tail: number;
  visible: boolean;
};

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

const applyEasing = (value: number, easing: EasingName) => {
  const t = clamp01(value);
  if (easing === "linear") {
    return t;
  }

  // AE Easy Ease approximation with max velocity near midpoint.
  return 0.5 - Math.cos(Math.PI * t) / 2;
};

export const getTrimWindow = ({
  frame,
  drawDurationFrames,
  eraseDelayFrames,
  eraseDurationFrames,
  easing,
}: {
  frame: number;
  drawDurationFrames: number;
  eraseDelayFrames: number;
  eraseDurationFrames: number;
  easing: EasingName;
}): TrimWindow => {
  const end = applyEasing(frame / drawDurationFrames, easing);
  const start = applyEasing(
    (frame - eraseDelayFrames) / eraseDurationFrames,
    easing,
  );

  return {
    start,
    end,
    head: Math.max(start, end),
    tail: Math.min(start, end),
    visible: end - start > 0.0001,
  };
};
