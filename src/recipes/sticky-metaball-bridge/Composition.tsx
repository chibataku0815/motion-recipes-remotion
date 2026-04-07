import React from "react";
import { OrthographicCamera } from "@react-three/drei";
import { ThreeCanvas } from "@remotion/three";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import * as THREE from "three";
import { config, rightPanelWidth } from "./config";

type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type MotionState = {
  distance: number;
  phaseLabel: string;
  bridgeStrength: number;
  offsetAmount: number;
  rotationDeg: number;
};

const SERIF_FONT = '"Iowan Old Style", Georgia, serif';
const SANS_FONT = 'Inter, "Helvetica Neue", Arial, sans-serif';
const MONO_FONT = '"Courier New", monospace';
const TAU = Math.PI * 2;
const CONTENT_HEIGHT =
  config.panelHeight - config.contentInsetTop - config.contentInsetBottom;
const LEFT_CANVAS_WIDTH = config.leftPanelWidth - config.contentInsetX * 2;
const RIGHT_CANVAS_WIDTH = rightPanelWidth - config.contentInsetX * 2;

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform vec2 uResolution;
uniform float uRadius;
uniform float uSeparation;
uniform float uSmoothness;
uniform float uBridge;
uniform float uFrame;
uniform vec3 uPaper;
uniform vec3 uInk;
uniform vec3 uBlue;
uniform vec3 uYellow;
uniform vec3 uLilac;

varying vec2 vUv;

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float dotPattern(vec2 p, float spacing, float radiusValue) {
  vec2 offset = mod(p, spacing) - spacing * 0.5;
  float distanceToDot = length(offset);
  return 1.0 - smoothstep(radiusValue - 0.8, radiusValue + 0.8, distanceToDot);
}

float sceneSdf(vec3 p, out float mixValue) {
  float wobble = sin(uFrame * 0.085) * 0.05 * uBridge;
  vec3 centerA = vec3(-uSeparation * 0.5, 0.05 + wobble, -0.08);
  vec3 centerB = vec3(uSeparation * 0.5, -0.04 - wobble, 0.08);

  float distA = length(p - centerA) - uRadius;
  float distB = length(p - centerB) - uRadius;
  float blend = clamp(0.5 + 0.5 * (distB - distA) / max(uSmoothness, 0.0001), 0.0, 1.0);

  mixValue = blend;

  float merged = smin(distA, distB, uSmoothness);

  float bridgeActivation = smoothstep(0.12, 0.42, uBridge);
  if (bridgeActivation > 0.0) {
    vec3 bridgePoint = p;
    bridgePoint.y *= mix(1.36, 0.92, bridgeActivation);
    bridgePoint.z *= 1.08;
    bridgePoint.x *= mix(1.42, 0.96, bridgeActivation);
    float bridgeCore = length(bridgePoint) - mix(0.02, 0.26, bridgeActivation);
    merged = smin(merged, bridgeCore, uSmoothness * mix(0.16, 0.8, bridgeActivation));
  }

  return merged;
}

float sceneSdf(vec3 p) {
  float mixValue = 0.0;
  return sceneSdf(p, mixValue);
}

vec3 getNormal(vec3 p) {
  vec2 e = vec2(0.0015, 0.0);
  return normalize(vec3(
    sceneSdf(p + e.xyy) - sceneSdf(p - e.xyy),
    sceneSdf(p + e.yxy) - sceneSdf(p - e.yxy),
    sceneSdf(p + e.yyx) - sceneSdf(p - e.yyx)
  ));
}

void main() {
  vec2 screenUv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / uResolution.y;
  vec3 rayOrigin = vec3(0.0, 0.0, 4.4);
  vec3 rayDirection = normalize(vec3(screenUv, -2.65));

  float hitDistance = 0.0;
  float materialMix = 0.5;
  bool hit = false;

  for (int i = 0; i < 96; i++) {
    vec3 position = rayOrigin + rayDirection * hitDistance;
    float currentMix = materialMix;
    float distanceToScene = sceneSdf(position, currentMix);

    if (distanceToScene < 0.0012) {
      materialMix = currentMix;
      hit = true;
      break;
    }

    hitDistance += max(distanceToScene * 0.72, 0.018);

    if (hitDistance > 10.0) {
      break;
    }
  }

  if (!hit) {
    discard;
  }

  vec3 position = rayOrigin + rayDirection * hitDistance;
  vec3 normal = getNormal(position);
  vec3 lightDirection = normalize(vec3(-0.28, 0.74, 1.0));
  float lambert = max(dot(normal, lightDirection), 0.0);
  float diffuse = 0.82 + 0.18 * lambert;
  float rim = pow(1.0 - max(dot(normal, -rayDirection), 0.0), 2.2);

  vec3 fill = mix(uBlue, uYellow, materialMix);
  float stripeBand = 1.0 - smoothstep(0.12, 0.42, abs(position.y + 0.04));
  fill = mix(fill, uLilac, stripeBand * 0.52);

  float editorialPatch = 1.0 - smoothstep(0.08, 0.34, length(position.xy - vec2(-0.34, 0.18)));
  fill = mix(fill, mix(uPaper, uLilac, 0.42), editorialPatch * 0.16);

  float rightSide = smoothstep(0.12, 0.88, materialMix);
  float dots = dotPattern(gl_FragCoord.xy + vec2(0.0, mod(floor(gl_FragCoord.y / 16.0), 2.0) * 8.0), 16.0, 3.2);
  fill = mix(fill, mix(fill, uInk, 0.16), dots * rightSide * 0.24);

  vec3 color = mix(fill, fill * diffuse, 0.42);
  color = mix(color, uPaper, 0.045);
  color = mix(color, uInk, smoothstep(0.46, 0.86, rim) * 0.78);

  gl_FragColor = vec4(color, 1.0);
}
`;

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

const getBridgeStrength = (distance: number) =>
  clamp01(
    (config.object.bridgeBreakDistance - distance) /
      (config.object.bridgeBreakDistance - config.object.tightDistance),
  );

const getMotionState = (frame: number): MotionState => {
  const loopFrame =
    ((frame % config.loopFrames) + config.loopFrames) % config.loopFrames;

  const approachFrames = 48;
  const squeezeFrames = 36;
  const stretchFrames = 48;
  const releaseFrames = 48;

  let distance = config.object.farDistance;
  let phaseLabel = "hold / disconnected";

  if (loopFrame < approachFrames) {
    const t = clamp01(loopFrame / approachFrames);
    const eased = 1 - Math.pow(1 - t, 4);
    distance =
      config.object.farDistance +
      (config.object.approachDistance - config.object.farDistance) * eased;
    phaseLabel = "approach";
  } else if (loopFrame < approachFrames + squeezeFrames) {
    const t = clamp01((loopFrame - approachFrames) / squeezeFrames);
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    distance =
      config.object.approachDistance +
      (config.object.tightDistance - config.object.approachDistance) * eased;
    phaseLabel = "compress";
  } else if (loopFrame < approachFrames + squeezeFrames + stretchFrames) {
    const t = clamp01(
      (loopFrame - approachFrames - squeezeFrames) / stretchFrames,
    );
    const eased = 1 - Math.pow(1 - t, 5);
    distance =
      config.object.tightDistance +
      (config.object.stretchDistance - config.object.tightDistance) * eased;
    phaseLabel = "stretch";
  } else {
    const t = clamp01(
      (loopFrame - approachFrames - squeezeFrames - stretchFrames) /
        releaseFrames,
    );
    const eased = 1 - Math.pow(1 - t, 3);
    distance =
      config.object.stretchDistance +
      (config.object.farDistance - config.object.stretchDistance) * eased;
    phaseLabel = "release";
  }

  const bridgeStrength = getBridgeStrength(distance);

  return {
    distance,
    phaseLabel,
    bridgeStrength,
    offsetAmount: bridgeStrength * 52,
    rotationDeg:
      Math.sin((loopFrame / config.loopFrames) * TAU - Math.PI / 3) *
      config.object.maxRotationDeg,
  };
};

const paperBackground: React.CSSProperties = {
  backgroundColor: config.palette.paper,
  backgroundImage: [
    "radial-gradient(circle at 18% 24%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.00) 19%)",
    "radial-gradient(circle at 82% 18%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.00) 16%)",
    "radial-gradient(circle at 72% 76%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.00) 18%)",
    "repeating-linear-gradient(0deg, rgba(0,0,0,0.015) 0px, rgba(0,0,0,0.015) 1px, transparent 1px, transparent 4px)",
  ].join(", "),
};

const panelStyle = (rect: Rect): React.CSSProperties => ({
  position: "absolute",
  left: rect.x,
  top: rect.y,
  width: rect.width,
  height: rect.height,
  borderRadius: config.panelRadius,
  background: config.palette.panelPaper,
  border: `3px solid ${config.palette.ink}`,
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  overflow: "hidden",
});

const labelStyle: React.CSSProperties = {
  fontFamily: MONO_FONT,
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: "0.04em",
  color: config.palette.ink,
};

const noteStyle: React.CSSProperties = {
  fontFamily: SANS_FONT,
  fontSize: 15,
  lineHeight: 1.45,
  color: config.palette.mutedInk,
};

const fourPointStar = (size: number) =>
  `M 0 ${-size} L ${size * 0.28} ${-size * 0.28} L ${size} 0 L ${size * 0.28} ${size * 0.28} L 0 ${size} L ${-size * 0.28} ${size * 0.28} L ${-size} 0 L ${-size * 0.28} ${-size * 0.28} Z`;

const NaivePanelGraphic: React.FC<{ state: MotionState }> = ({ state }) => {
  const radius = 70;
  const maxDistance = config.object.farDistance;
  const minDistance = config.object.tightDistance;
  const travel = LEFT_CANVAS_WIDTH - radius * 2 - 48;
  const normalized = clamp01((state.distance - minDistance) / (maxDistance - minDistance));
  const gap = 48 + normalized * (travel - 48);
  const leftX = 20;
  const rightX = leftX + gap;
  const centerY = 190;

  return (
    <svg
      width={LEFT_CANVAS_WIDTH}
      height={CONTENT_HEIGHT}
      viewBox={`0 0 ${LEFT_CANVAS_WIDTH} ${CONTENT_HEIGHT}`}
      style={{ display: "block" }}
    >
      <defs>
        <pattern id="naive-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="3.1" fill="rgba(17,17,17,0.18)" />
        </pattern>
      </defs>

      <line
        x1="18"
        x2={LEFT_CANVAS_WIDTH - 18}
        y1={304}
        y2={304}
        stroke="rgba(17,17,17,0.12)"
        strokeWidth="1"
      />

      <circle
        cx={leftX + radius}
        cy={centerY}
        r={radius}
        fill={config.palette.blue}
        stroke={config.palette.ink}
        strokeWidth={config.outlineWidth}
      />
      <rect
        x={leftX + 14}
        y={centerY - 12}
        width="72"
        height="24"
        rx="12"
        fill={config.palette.lilac}
        opacity="0.88"
      />

      <circle
        cx={rightX + radius}
        cy={centerY + 8}
        r={radius}
        fill={config.palette.yellow}
        stroke={config.palette.ink}
        strokeWidth={config.outlineWidth}
      />
      <circle
        cx={rightX + radius + 16}
        cy={centerY - 10}
        r={radius * 0.5}
        fill="url(#naive-dots)"
      />
      <rect
        x={rightX + 12}
        y={centerY + 34}
        width="68"
        height="13"
        rx="6.5"
        fill={config.palette.ink}
      />
    </svg>
  );
};

const MetaballShaderPanel: React.FC<{
  state: MotionState;
  frame: number;
  width: number;
  height: number;
}> = ({ state, frame, width, height }) => {
  const material = React.useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uResolution: { value: new THREE.Vector2(width, height) },
        uRadius: { value: 0.96 },
        uSeparation: { value: 2.4 },
        uSmoothness: { value: 0.42 },
        uBridge: { value: 0.0 },
        uFrame: { value: frame },
        uPaper: { value: new THREE.Color(config.palette.panelPaper) },
        uInk: { value: new THREE.Color(config.palette.ink) },
        uBlue: { value: new THREE.Color(config.palette.blue) },
        uYellow: { value: new THREE.Color(config.palette.yellow) },
        uLilac: { value: new THREE.Color(config.palette.lilac) },
      },
      vertexShader,
      fragmentShader,
    });
  }, [height, width]);

  const normalizedDistance = clamp01(
    (state.distance - config.object.tightDistance) /
      (config.object.farDistance - config.object.tightDistance),
  );
  const centerY = height * 0.60;
  const centerB = width * 0.5 + (1.15 + normalizedDistance * 2.3) * 86;

  material.uniforms.uResolution.value.set(width, height);
  material.uniforms.uRadius.value = 0.96;
  material.uniforms.uSeparation.value = 1.15 + normalizedDistance * 2.3;
  material.uniforms.uSmoothness.value = 0.18 + state.bridgeStrength * 0.82;
  material.uniforms.uBridge.value = state.bridgeStrength;
  material.uniforms.uFrame.value = frame;

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 18,
          borderRadius: 34,
          background:
            "radial-gradient(circle at 50% 46%, rgba(255,255,255,0.98) 0%, rgba(241,235,225,0.98) 44%, rgba(225,217,205,0.98) 100%)",
          border: "1px solid rgba(17,17,17,0.14)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.5), inset 0 0 90px rgba(17,17,17,0.06)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 54,
          right: 54,
          top: 94,
          bottom: 70,
          borderRadius: 28,
          background:
            "radial-gradient(circle at 50% 42%, rgba(255,255,255,0.76) 0%, rgba(243,236,226,0.66) 34%, rgba(222,214,202,0.92) 100%)",
          border: "1px solid rgba(17,17,17,0.1)",
          boxShadow:
            "inset 0 -20px 50px rgba(17,17,17,0.08), inset 0 16px 24px rgba(255,255,255,0.45)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: width * 0.5 - 288,
          top: height * 0.60 - 162,
          width: 576,
          height: 312,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.24) 34%, rgba(255,255,255,0.00) 72%)",
          filter: "blur(18px)",
          opacity: 0.92,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: width * 0.5 - 236,
          top: height * 0.60 + 132,
          width: 472,
          height: 88,
          borderRadius: 999,
          background: "rgba(17,17,17,0.18)",
          filter: "blur(24px)",
          transform: `scaleX(${1 + state.bridgeStrength * 0.2}) scaleY(${1 - state.bridgeStrength * 0.1})`,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 78,
          right: 78,
          top: 116,
          bottom: 98,
          borderRadius: 22,
          border: "1px dashed rgba(17,17,17,0.12)",
          opacity: 0.6,
        }}
      />

      <ThreeCanvas width={width} height={height}>
        <OrthographicCamera
          makeDefault
          left={width / -2}
          right={width / 2}
          top={height / 2}
          bottom={height / -2}
          near={0.1}
          far={10}
          position={[0, 0, 1]}
        />
        <mesh>
          <planeGeometry args={[width, height]} />
          <primitive object={material} attach="material" />
        </mesh>
      </ThreeCanvas>

      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <line
          x1="40"
          x2={width - 40}
          y1={height * 0.76}
          y2={height * 0.76}
          stroke="rgba(17,17,17,0.1)"
          strokeWidth="1"
        />
        <g transform={`translate(${centerB + 96} ${centerY - 144})`}>
          <path d={fourPointStar(18)} fill={config.palette.ink} />
        </g>
        <g opacity="0.62">
          <line
            x1="86"
            x2="86"
            y1="116"
            y2={height - 108}
            stroke="rgba(17,17,17,0.12)"
            strokeWidth="1"
            strokeDasharray="4 10"
          />
          <line
            x1={width - 86}
            x2={width - 86}
            y1="116"
            y2={height - 108}
            stroke="rgba(17,17,17,0.12)"
            strokeWidth="1"
            strokeDasharray="4 10"
          />
        </g>
      </svg>
    </div>
  );
};

export const AETipStickyMetaballBridge: React.FC = () => {
  const frame = useCurrentFrame();
  const state = getMotionState(frame);

  const leftPanel: Rect = {
    x: config.pageInsetX,
    y: config.panelTop,
    width: config.leftPanelWidth,
    height: config.panelHeight,
  };

  const rightPanel: Rect = {
    x: config.pageInsetX + config.leftPanelWidth + config.panelGap,
    y: config.panelTop,
    width: rightPanelWidth,
    height: config.panelHeight,
  };

  return (
    <AbsoluteFill style={paperBackground}>
      <div
        style={{
          position: "absolute",
          inset: config.outerFrameWidth,
          border: "1px solid rgba(17,17,17,0.10)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          boxSizing: "border-box",
          borderTop: `${config.outerFrameWidth}px solid ${config.palette.ink}`,
          borderBottom: `${config.outerFrameWidth}px solid ${config.palette.ink}`,
          borderLeft: `${config.outerFrameWidth}px solid ${config.palette.ink}`,
          borderRight: `${config.outerFrameWidth}px solid ${config.palette.ink}`,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: config.pageInsetX,
          top: 78,
          fontFamily: MONO_FONT,
          fontSize: 14,
          fontWeight: 700,
          color: config.palette.ink,
        }}
      >
        AE TIP 55
      </div>

      <div
        style={{
          position: "absolute",
          left: config.pageInsetX,
          top: 96,
          fontFamily: SERIF_FONT,
          fontSize: 82,
          lineHeight: 1,
          color: config.palette.ink,
        }}
      >
        Sticky Bridge
      </div>

      <div
        style={{
          position: "absolute",
          left: config.pageInsetX,
          top: 170,
          fontFamily: SANS_FONT,
          fontSize: 16,
          fontWeight: 600,
          color: config.palette.mutedInk,
        }}
      >
        WebGL metaball field for fluid merge / separation, with the editorial poster system kept around it.
      </div>

      <div
        style={{
          position: "absolute",
          right: config.pageInsetX - 4,
          top: 246,
          transform: "rotate(90deg)",
          transformOrigin: "top right",
          fontFamily: MONO_FONT,
          fontSize: 14,
          fontWeight: 700,
          color: config.palette.ink,
        }}
      >
        PALETTE / OBJECT / TEXTURE / MOTION
      </div>

      <div
        style={{
          position: "absolute",
          left: 784,
          top: 74,
          width: 268,
          height: 104,
          backgroundImage:
            "radial-gradient(circle, rgba(17,17,17,0.12) 0 2px, transparent 3px)",
          backgroundSize: "16px 16px",
          opacity: 0.6,
        }}
      />

      <div style={panelStyle(leftPanel)}>
        <div style={{ position: "absolute", left: 18, top: 14, ...labelStyle }}>
          NAIVE OVERLAP
        </div>
        <div
          style={{
            position: "absolute",
            left: 18,
            top: 36,
            fontFamily: SANS_FONT,
            fontSize: 17,
            fontWeight: 800,
            color: config.palette.ink,
          }}
        >
          Two circles only
        </div>
        <div style={{ position: "absolute", left: 18, top: 61, width: 334, ...noteStyle }}>
          No field composition. The spheres stay discrete and never produce a liquid bridge.
        </div>

        <div
          style={{
            position: "absolute",
            left: config.contentInsetX,
            top: config.contentInsetTop,
            width: LEFT_CANVAS_WIDTH,
            height: CONTENT_HEIGHT,
          }}
        >
          <NaivePanelGraphic state={state} />
        </div>
      </div>

      <div style={panelStyle(rightPanel)}>
        <div style={{ position: "absolute", left: 18, top: 14, ...labelStyle }}>
          WEBGL FIELD / METABALL
        </div>
        <div
          style={{
            position: "absolute",
            left: 18,
            top: 36,
            fontFamily: SANS_FONT,
            fontSize: 17,
            fontWeight: 800,
            color: config.palette.ink,
          }}
        >
          Fluid merge study
        </div>
        <div style={{ position: "absolute", left: 18, top: 61, width: 620, ...noteStyle }}>
          Two spheres are raymarched as a metaball volume, so the neck actually forms and
          peels apart.
        </div>
        <div style={{ position: "absolute", right: 18, top: 14, ...labelStyle }}>
          join = field iso-surface
        </div>

        <div
          style={{
            position: "absolute",
            left: config.contentInsetX,
            top: config.contentInsetTop,
            width: RIGHT_CANVAS_WIDTH,
            height: CONTENT_HEIGHT,
          }}
        >
          <MetaballShaderPanel
            state={state}
            frame={frame}
            width={RIGHT_CANVAS_WIDTH}
            height={CONTENT_HEIGHT}
          />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: config.pageInsetX,
          bottom: 88,
          fontFamily: MONO_FONT,
          fontSize: 13,
          lineHeight: 1.7,
          color: config.palette.ink,
        }}
      >
        <div>palette: off-white paper / deep black / acid yellow / lilac / periwinkle</div>
        <div>object grammar: circle + fluid bridge + orbit line + star + restrained poster labels</div>
        <div>
          phase: {state.phaseLabel} &nbsp;&nbsp; distance: {Math.round(state.distance)}px
          &nbsp;&nbsp; bridge: {state.bridgeStrength.toFixed(2)}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: config.pageInsetX,
          bottom: 92,
          textAlign: "right",
          fontFamily: SANS_FONT,
          fontSize: 14,
          lineHeight: 1.65,
          color: config.palette.mutedInk,
        }}
      >
        <div>anti-patterns: glossy gradients / random blobs / generic UI cards / spring spam</div>
        <div>this version prioritizes actual fluid union over the previous 2D outline trick.</div>
      </div>
    </AbsoluteFill>
  );
};
