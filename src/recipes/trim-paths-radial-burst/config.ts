export const config = {
  fps: 30,
  width: 1920,
  height: 1080,
  totalFrames: 180,
  drawDurationFrames: 12,
  eraseDelayFrames: 2,
  eraseDurationFrames: 12,
  loopGapFrames: 6,
  spokeCount: 6,
  strokeLength: 220,
  strokeWidth: 18,
  rotationOffsetDeg: 0,
  background: "#060606",
  panelInsetX: 72,
  panelTop: 176,
  panelGap: 32,
  panelHeight: 768,
  panelRadius: 28,
  leftPanelWidth: 540,
  accentColor: "#ff7a45",
  secondaryAccentColor: "#ffd2c2",
  burstStrokeColor: "#f7f2e9",
  guideColor: "rgba(255,255,255,0.1)",
  dimGuideColor: "rgba(255,255,255,0.06)",
  labelColor: "#d8d2c7",
  textColor: "#f7f2e9",
} as const;

export const loopFrames =
  Math.max(
    config.drawDurationFrames,
    config.eraseDelayFrames + config.eraseDurationFrames,
  ) + config.loopGapFrames;

export const rightPanelWidth =
  config.width - config.panelInsetX * 2 - config.leftPanelWidth - config.panelGap;
