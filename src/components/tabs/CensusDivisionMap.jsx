
// ════════════════════════════════════════════════════════════════
// GEOGRAPHY MAP (from demo-panels)

import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useProfileC } from "../../pages/SegmentProfile";
import { ALL_STATES } from "../../data/profile";

// ════════════════════════════════════════════════════════════════
function CensusDivisionMap({ division, pct }) {
  const C = useProfileC();
  const { theme } = useTheme();
  const [hover, setHover] = useState(null);
  const centers = {
    Pacific: [88, 45],
    Mountain: [128, 45],
    "West North Central": [185, 30],
    "East North Central": [222, 35],
    "West South Central": [165, 78],
    "East South Central": [225, 60],
    "South Atlantic": [250, 60],
    "Mid Atlantic": [258, 28],
    "New England": [278, 18],
  };
  return (
    <div>
      <svg viewBox="10 -2 290 108" width="100%" style={{ maxHeight: 160 }}>
        <rect x="10" y="-2" width="290" height="108" fill={C.bg} rx="4" />
        {ALL_STATES.map((state, i) => {
          const isActive = state.division === division;
          const isHov = hover === state.division && !isActive;
          return (
            <path
              key={i}
              d={state.d}
              fill={
                isActive
                  ? theme.genderChartActive
                  : isHov
                    ? "#2a4a6a"
                    : theme.mapBg
              }
              stroke={isActive ? theme.mapActiveBorder : theme.mapActiveBorder}
              strokeWidth={isActive ? 1.2 : 0.4}
              opacity={isActive ? 1 : isHov ? 0.8 : 0.5}
              style={{ transition: "all 0.3s", cursor: "pointer" }}
              onMouseEnter={() => setHover(state.division)}
              onMouseLeave={() => setHover(null)}
            />
          );
        })}
        {(() => {
          const [cx, cy] = centers[division] || [150, 50];
          return (
            <g>
              <rect
                x={cx - 18}
                y={cy - 8}
                width={36}
                height={16}
                rx={3}
                fill={theme.genderChartActive}
                // fillOpacity={0.95}
                stroke={C.accentLight}
                strokeWidth={0.5}
              />
              <text
                x={cx}
                y={cy + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={9}
                fontWeight={800}
                fill={"#fff"}
                fontFamily="'Nunito',sans-serif"
              >
                {pct}
              </text>
            </g>
          );
        })()}
      </svg>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 6,
          gap: 10,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: theme.genderChartActive,
            fontFamily: "'Nunito',sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            style={{
              width: "7px",
              height: "7px",
              background: theme.genderChartActive,
              borderRadius: "100px",
            }}
          />
          {division}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <span
              style={{
                fontSize: 7,
                color: theme.genderChartActive,
                fontFamily: "'Nunito',sans-serif",
                padding: "5px 12px",
                borderRadius: "5px",
                background: "#D3F8FF",
              }}
            >
              Dominant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CensusDivisionMap