import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { config, loopFrames, rightPanelWidth } from "./config";
import { getSpokeAngles } from "./lib/spoke-layout";
import { getTrimWindow, type TrimWindow } from "./lib/trim-window";

const panelStyle = (width: number): React.CSSProperties => ({
  width,
  height: config.panelHeight,
  background: "#0d0d0d",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: config.panelRadius,
  overflow: "hidden",
  position: "relative",
});

const formatPercent = (value: number) => `${Math.round(value * 100)}%`;

const SpokeGuide: React.FC<{
  length: number;
  radius: number;
  centerX: number;
  centerY: number;
}> = ({ length, radius, centerX, centerY }) => {
  return (
    <g>
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke={config.dimGuideColor}
        strokeWidth={1}
      />
      <line
        x1={centerX}
        y1={centerY}
        x2={centerX}
        y2={centerY - length}
        stroke={config.guideColor}
        strokeWidth={2}
        strokeDasharray="8 10"
      />
      <circle cx={centerX} cy={centerY} r={4} fill={config.secondaryAccentColor} />
    </g>
  );
};

const VisibleSpoke: React.FC<{
  centerX: number;
  centerY: number;
  length: number;
  strokeWidth: number;
  stroke: string;
  window: TrimWindow;
}> = ({ centerX, centerY, length, strokeWidth, stroke, window }) => {
  if (!window.visible) {
    return null;
  }

  const startY = centerY - window.start * length;
  const endY = centerY - window.end * length;

  return (
    <>
      <line
        x1={centerX}
        y1={startY}
        x2={centerX}
        y2={endY}
        stroke={config.accentColor}
        strokeWidth={strokeWidth * 1.55}
        strokeLinecap="round"
        opacity={0.18}
      />
      <line
        x1={centerX}
        y1={startY}
        x2={centerX}
        y2={endY}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx={centerX} cy={endY} r={strokeWidth * 0.42} fill={config.accentColor} />
      <circle
        cx={centerX}
        cy={startY}
        r={strokeWidth * 0.24}
        fill={config.secondaryAccentColor}
        opacity={0.75}
      />
    </>
  );
};

const TimingRow: React.FC<{
  title: string;
  subtitle: string;
  activeLength?: number;
  window: TrimWindow;
}> = ({ title, subtitle, activeLength = config.strokeLength, window }) => {
  const width = config.leftPanelWidth;
  const rowHeight = 304;
  const centerX = width / 2;
  const centerY = 196;

  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "24px 24px 0",
        height: rowHeight,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 16,
          fontFamily: '"Courier New", monospace',
        }}
      >
        <div>
          <div style={{ color: config.textColor, fontSize: 18, fontWeight: 700 }}>
            {title}
          </div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
            {subtitle}
          </div>
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.56)",
            fontSize: 13,
            display: "flex",
            gap: 16,
          }}
        >
          <span>start {formatPercent(window.start)}</span>
          <span>end {formatPercent(window.end)}</span>
        </div>
      </div>
      <svg width={width - 48} height={220} viewBox={`0 0 ${width - 48} 220`}>
        <SpokeGuide
          centerX={centerX - 24}
          centerY={centerY}
          length={activeLength}
          radius={activeLength}
        />
        <VisibleSpoke
          centerX={centerX - 24}
          centerY={centerY}
          length={activeLength}
          strokeWidth={config.strokeWidth}
          stroke={config.burstStrokeColor}
          window={window}
        />
      </svg>
    </div>
  );
};

const BurstStage: React.FC<{ window: TrimWindow }> = ({ window }) => {
  const width = rightPanelWidth;
  const height = config.panelHeight;
  const centerX = width / 2;
  const centerY = height / 2 + 40;
  const safeRadius = config.strokeLength + 60;
  const angles = getSpokeAngles(config.spokeCount, config.rotationOffsetDeg);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <circle
        cx={centerX}
        cy={centerY}
        r={safeRadius}
        fill="none"
        stroke={config.dimGuideColor}
        strokeWidth={1}
      />
      <circle
        cx={centerX}
        cy={centerY}
        r={safeRadius * 0.66}
        fill="none"
        stroke={config.dimGuideColor}
        strokeWidth={1}
      />

      {angles.map((angle) => (
        <g key={angle} transform={`rotate(${angle} ${centerX} ${centerY})`}>
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX}
            y2={centerY - config.strokeLength}
            stroke={config.guideColor}
            strokeWidth={2}
            strokeDasharray="8 10"
          />
          <VisibleSpoke
            centerX={centerX}
            centerY={centerY}
            length={config.strokeLength}
            strokeWidth={config.strokeWidth}
            stroke={config.burstStrokeColor}
            window={window}
          />
        </g>
      ))}

      <circle cx={centerX} cy={centerY} r={8} fill={config.accentColor} />
      <circle
        cx={centerX}
        cy={centerY}
        r={20}
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TrimPathsRadialBurst: React.FC = () => {
  const frame = useCurrentFrame();
  const loopFrame = ((frame % loopFrames) + loopFrames) % loopFrames;

  const linearWindow = getTrimWindow({
    frame: loopFrame,
    drawDurationFrames: config.drawDurationFrames,
    eraseDelayFrames: config.eraseDelayFrames,
    eraseDurationFrames: config.eraseDurationFrames,
    easing: "linear",
  });

  const easedWindow = getTrimWindow({
    frame: loopFrame,
    drawDurationFrames: config.drawDurationFrames,
    eraseDelayFrames: config.eraseDelayFrames,
    eraseDurationFrames: config.eraseDurationFrames,
    easing: "ae-like",
  });

  return (
    <AbsoluteFill
      style={{
        background: config.background,
        color: config.textColor,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 20%, rgba(255,122,69,0.12), transparent 32%), radial-gradient(circle at 50% 65%, rgba(255,255,255,0.04), transparent 42%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: config.panelInsetX,
          right: config.panelInsetX,
          top: 52,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            style={{
              color: config.accentColor,
              fontFamily: '"Courier New", monospace',
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            AE TIP 02
          </div>
          <div style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.02 }}>
            Trim Paths Radial Burst
          </div>
          <div
            style={{
              marginTop: 12,
              color: "rgba(255,255,255,0.68)",
              fontFamily: '"Courier New", monospace',
              fontSize: 20,
            }}
          >
            Draw-on + delayed erase-on + 6-way repeater.
          </div>
        </div>
        <div
          style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 16,
            color: "rgba(255,255,255,0.56)",
            textAlign: "right",
            lineHeight: 1.6,
          }}
        >
          <div>loop={loopFrames}f</div>
          <div>draw={config.drawDurationFrames}f</div>
          <div>eraseDelay={config.eraseDelayFrames}f</div>
          <div>erase={config.eraseDurationFrames}f</div>
          <div>spokes={config.spokeCount}</div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: config.panelInsetX,
          top: config.panelTop,
          display: "flex",
          gap: config.panelGap,
        }}
      >
        <div style={panelStyle(config.leftPanelWidth)}>
          <div
            style={{
              padding: "20px 24px",
              fontFamily: '"Courier New", monospace',
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div>
              <div style={{ color: config.labelColor, fontSize: 18, fontWeight: 700 }}>
                timing study
              </div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13 }}>
                same trim window, different easing
              </div>
            </div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13 }}>
              frame {loopFrame + 1}/{loopFrames}
            </div>
          </div>
          <TimingRow
            title="linear"
            subtitle="uniform velocity, less AE-like"
            activeLength={config.strokeLength * 0.78}
            window={linearWindow}
          />
          <TimingRow
            title="ae-like ease"
            subtitle="midpoint acceleration, easy-ease approximation"
            activeLength={config.strokeLength * 0.78}
            window={easedWindow}
          />
        </div>

        <div style={panelStyle(rightPanelWidth)}>
          <div
            style={{
              padding: "20px 24px",
              fontFamily: '"Courier New", monospace',
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div>
              <div style={{ color: config.labelColor, fontSize: 18, fontWeight: 700 }}>
                radial burst
              </div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13 }}>
                repeater = {config.spokeCount}, rotate = {360 / config.spokeCount}deg
              </div>
            </div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13 }}>
              center-anchored symmetrical burst
            </div>
          </div>
          <BurstStage window={easedWindow} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
