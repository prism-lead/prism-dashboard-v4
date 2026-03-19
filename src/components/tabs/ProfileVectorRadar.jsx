// ════════════════════════════════════════════════════════════════
// VECTOR RADAR (prominent, larger)

import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { DEM_AXES, DEM_VECTORS, GOP_AXES, GOP_VECTORS, VECTOR_DEFS } from "../../data/profile";

// ════════════════════════════════════════════════════════════════
function ProfileVectorRadar({ seg }) {
  const { theme } = useTheme();
  const isGOP = seg.party === "GOP";
  const vectors = isGOP ? GOP_VECTORS[seg.code] : DEM_VECTORS[seg.code];
  const axes = isGOP ? GOP_AXES : DEM_AXES;
  const [hovAxis, setHovAxis] = useState(null);
  if (!vectors) return null;

  const size = 260;
  const cx = size / 2,
    cy = size / 2,
    maxR = 90;
  const SCALE_MIN = -0.85,
    SCALE_MAX = 0.85,
    SCALE_RANGE = SCALE_MAX - SCALE_MIN;
  const valToR = (val) => ((val - SCALE_MIN) / SCALE_RANGE) * maxR;

  // const partyColor = isGOP ? "#ef4444" : "#3b82f6";
  const fillColor = isGOP ? "#CC7A0033" : "rgba(59,130,246,0.22)";
  const strokeColor = isGOP ? "#CC7A00" : "#60a5fa";
  const angles = [-Math.PI / 2, 0, Math.PI / 2, Math.PI];

  const getPoint = (angle, radius) => ({
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius,
  });

  const gridVals = [-0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6];
  const values = axes.map((a) => vectors[a.key]);
  const polyPoints = values.map((v, i) => getPoint(angles[i], valToR(v)));
  const polyStr = polyPoints.map((p) => `${p.x},${p.y}`).join(" ");
  const dots = values.map((v, i) => ({
    ...getPoint(angles[i], valToR(v)),
    val: v,
  }));

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
        {gridVals.map((gv, gi) => {
          const r = valToR(gv);
          const isZero = gv === 0;
          const isMajor = Math.abs(gv) === 0.4;
          return (
            <circle
              key={gi}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={isZero ? "#475569" : isMajor ? "#1e293b" : "#141a28"}
              strokeWidth={isZero ? 1.5 : 0.5}
              strokeDasharray={isZero ? "none" : isMajor ? "3,3" : "1,3"}
            />
          );
        })}
        <circle
          cx={cx}
          cy={cy}
          r={maxR}
          fill="none"
          stroke="#1e293b"
          strokeWidth={0.5}
        />
        {angles.map((a, i) => {
          const outer = getPoint(a, maxR);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={outer.x}
              y2={outer.y}
              stroke="#1e293b"
              strokeWidth={0.5}
            />
          );
        })}
        <polygon
          points={polyStr}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        {dots.map((d, i) => (
          <g key={i}>
            <circle
              cx={d.x}
              cy={d.y}
              r={5}
              fill={strokeColor}
              stroke="#0a0e1a"
              strokeWidth={2}
            />
            <text
              x={d.x + (i === 1 ? 12 : i === 3 ? -12 : 0)}
              y={d.y + (i === 0 ? -11 : i === 2 ? 15 : 0)}
              textAnchor={i === 1 ? "start" : i === 3 ? "end" : "middle"}
              dominantBaseline={
                i === 0 ? "auto" : i === 2 ? "hanging" : "central"
              }
              fontSize={10}
              fontWeight={700}
              fill={strokeColor}
              fontFamily="'Nunito',sans-serif"
            >
              {d.val > 0 ? "+" : ""}
              {d.val.toFixed(2)}
            </text>
          </g>
        ))}
        {axes.map((ax, i) => {
          const labelR = maxR + 24;
          const p = getPoint(angles[i], labelR);
          const anchor = i === 1 ? "start" : i === 3 ? "end" : "middle";
          const dy = i === 0 ? -5 : i === 2 ? 7 : 0;
          const isHov = hovAxis === ax.key;
          return (
            <g
              key={`label-${i}`}
              onMouseEnter={() => setHovAxis(ax.key)}
              onMouseLeave={() => setHovAxis(null)}
              style={{ cursor: "pointer" }}
            >
              <text
                x={p.x}
                y={p.y + dy}
                textAnchor={anchor}
                dominantBaseline="central"
                fontSize={9}
                fontWeight={700}
                fill={isHov ? theme.chartLabel : theme.chartLabel}
                fontFamily="'Nunito',sans-serif"
                letterSpacing={0.3}
                textDecoration={isHov ? "underline" : "none"}
              >
                {ax.pos.toUpperCase()}
              </text>
              <text
                x={p.x}
                y={p.y + dy + 11}
                textAnchor={anchor}
                dominantBaseline="central"
                fontSize={9}
                fontWeight={400}
                fill="#9AA0AD"
                fontFamily="'Nunito',sans-serif"
              >
                ↑ {ax.neg}
              </text>
            </g>
          );
        })}
      </svg>
      {hovAxis && VECTOR_DEFS[hovAxis] && (
        <div
          style={{
            position: "absolute",
            bottom: -8,
            left: "50%",
            transform: "translate(-50%, 100%)",
            width: 280,
            background: "#1e293b",
            border: "1px solid #334155",
            borderRadius: 8,
            padding: "10px 12px",
            zIndex: 50,
            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#a78bfa",
              fontFamily: "'Nunito',sans-serif",
              marginBottom: 4,
              lineHeight: 1.3,
            }}
          >
            {VECTOR_DEFS[hovAxis].title}
          </div>
          <div
            style={{
              fontSize: 9,
              color: "#cbd5e1",
              fontFamily: "'Nunito',sans-serif",
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
