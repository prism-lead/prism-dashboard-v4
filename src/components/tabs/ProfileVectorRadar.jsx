import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  DEM_AXES,
  DEM_VECTORS,
  GOP_AXES,
  GOP_VECTORS,
  VECTOR_DEFS,
} from "../../data/profile";

function ProfileVectorRadar({ seg }) {
  const { theme, isDark } = useTheme();
  const isGOP = seg.party === "GOP";
  const vectors = isGOP ? GOP_VECTORS[seg.code] : DEM_VECTORS[seg.code];
  const axes = isGOP ? GOP_AXES : DEM_AXES;
  const [hovAxis, setHovAxis] = useState(null);
  if (!vectors) return null;

  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = 95;

  const SCALE_MIN = -0.85;
  const SCALE_MAX = 0.85;
  const SCALE_RANGE = SCALE_MAX - SCALE_MIN;
  const valToR = (val) => ((val - SCALE_MIN) / SCALE_RANGE) * maxR;

  const fillColor = isGOP ? "#CC7A0033" : "rgba(59,130,246,0.22)";
  const strokeColor = isGOP ? "#CC7A00" : "#60a5fa";
  const dotColor = isGOP ? "#CC7A00" : "#60a5fa";

  // Diamond axes: top, right, bottom, left
  const angles = [-Math.PI / 2, 0, Math.PI / 2, Math.PI];

  const getPoint = (angle, radius) => ({
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius,
  });

  // Grid: concentric diamonds at these radii
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0].map((f) => f * maxR);

  const diamondPath = (r) => {
    const top = getPoint(-Math.PI / 2, r);
    const right = getPoint(0, r);
    const bottom = getPoint(Math.PI / 2, r);
    const left = getPoint(Math.PI, r);
    return `M ${top.x},${top.y} L ${right.x},${right.y} L ${bottom.x},${bottom.y} L ${left.x},${left.y} Z`;
  };

  const values = axes.map((a) => vectors[a.key]);
  const polyPoints = values.map((v, i) => getPoint(angles[i], valToR(v)));
  const polyStr = polyPoints.map((p) => `${p.x},${p.y}`).join(" ");
  const dots = values.map((v, i) => ({
    ...getPoint(angles[i], valToR(v)),
    val: v,
  }));

  // Grid line colors based on theme
  const gridStroke = isDark ? "#2a3347" : "#d1d5db";
  const gridStrokeOuter = isDark ? "#374151" : "#9ca3af";
  const axisStroke = isDark ? "#2a3347" : "#d1d5db";
  const labelColor = isDark ? theme.chartLabel || "#e2e8f0" : "#374151";
  const subLabelColor = isDark ? "#64748b" : "#9ca3af";

  // Label positions — push further out from the diamond tip
  const labelOffsets = [
    { dy: -28, anchor: "middle" }, // top
    { dx: 28, anchor: "start" }, // right
    { dy: 28, anchor: "middle" }, // bottom
    { dx: -28, anchor: "end" }, // left
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ overflow: "visible" }}
      >
        {/* Concentric diamond grid */}
        {gridLevels.map((r, gi) => {
          const isOuter = gi === gridLevels.length - 1;
          return (
            <path
              key={gi}
              d={diamondPath(r)}
              fill="none"
              stroke={isOuter ? gridStrokeOuter : gridStroke}
              strokeWidth={isOuter ? 1 : 0.75}
            />
          );
        })}

        {/* Axis lines from center to each tip */}
        {angles.map((a, i) => {
          const outer = getPoint(a, maxR);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={outer.x}
              y2={outer.y}
              stroke={axisStroke}
              strokeWidth={0.75}
            />
          );
        })}

        {/* Filled polygon */}
        <polygon
          points={polyStr}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={2.2}
          strokeLinejoin="round"
        />

        {/* Dots + value labels */}
        {dots.map((d, i) => (
          <g key={i}>
            <circle
              cx={d.x}
              cy={d.y}
              r={5}
              fill={dotColor}
              stroke={isDark ? "#0a0e1a" : "#ffffff"}
              strokeWidth={2}
            />
            <text
              x={d.x + (i === 1 ? 13 : i === 3 ? -13 : 0)}
              y={d.y + (i === 0 ? -12 : i === 2 ? 14 : 4)}
              textAnchor={i === 1 ? "start" : i === 3 ? "end" : "middle"}
              fontSize={9}
              fontWeight={700}
              fill={strokeColor}
              fontFamily="'JetBrains Mono', monospace"
            >
              {d.val > 0 ? "+" : ""}
              {d.val.toFixed(2)}
            </text>
          </g>
        ))}

        {/* Axis labels */}
        {axes.map((ax, i) => {
          const tipPoint = getPoint(angles[i], maxR);
          const off = labelOffsets[i];
          const lx = tipPoint.x + (off.dx ?? 0);
          const ly = tipPoint.y + (off.dy ?? 0);
          const isHov = hovAxis === ax.key;

          return (
            <g
              key={`label-${i}`}
              onMouseEnter={() => setHovAxis(ax.key)}
              onMouseLeave={() => setHovAxis(null)}
              style={{ cursor: "pointer" }}
            >
              {/* Sub-label (↑ neg) — drawn first so it appears below */}
              <text
                x={lx}
                y={ly + (i === 0 ? -12 : i === 2 ? 13 : 1)}
                textAnchor={off.anchor}
                dominantBaseline={
                  i === 0 ? "auto" : i === 2 ? "hanging" : "text-before-edge"
                }
                fontSize={8.5}
                fontWeight={400}
                fill={subLabelColor}
                fontFamily="'Nunito', sans-serif"
              >
                ↑ {ax.neg}
              </text>

              {/* Main label */}
              <text
                x={lx}
                y={ly}
                textAnchor={off.anchor}
                dominantBaseline={
                  i === 0 ? "text-before-edge" : i === 2 ? "center" : "text-after-edge"
                }
                fontSize={13}
                fontWeight={800}
                fill={isHov ? strokeColor : labelColor}
                fontFamily="'Nunito', sans-serif"
                letterSpacing={0.5}
                textDecoration={isHov ? "underline" : "none"}
              >
                {ax.pos.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Hover tooltip */}
      {hovAxis && VECTOR_DEFS[hovAxis] && (
        <div
          style={{
            position: "absolute",
            bottom: -8,
            left: "50%",
            transform: "translate(-50%, 100%)",
            width: 280,
            background: isDark ? "#1e293b" : "#f8fafc",
            border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
            borderRadius: 8,
            padding: "10px 12px",
            zIndex: 50,
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#f59e0b",
              fontFamily: "'Nunito', sans-serif",
              marginBottom: 4,
            }}
          >
            {VECTOR_DEFS[hovAxis].title}
          </div>
          <div
            style={{
              fontSize: 9,
              color: isDark ? "#cbd5e1" : "#475569",
              fontFamily: "'Nunito', sans-serif",
              lineHeight: 1.5,
            }}
          >
            {VECTOR_DEFS[hovAxis].text}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileVectorRadar;
