import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { DEM_AXES, DEM_VECTORS, GOP_AXES, GOP_VECTORS, VECTOR_DEFS } from "../../data/profile";
import { useProfileC } from "../../pages/SegmentProfile";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";

// Diverging bar detail for vectors
function VectorBars({ seg }) {
  const { theme } = useTheme();
  const C = useProfileC();
  const isGOP = seg.party === "GOP";
  const vectors = isGOP ? GOP_VECTORS[seg.code] : DEM_VECTORS[seg.code];
  const axes = isGOP ? GOP_AXES : DEM_AXES;
  const [hovAxis, setHovAxis] = useState(null);
  if (!vectors) return null;
//   const barColor = isGOP ? "#f87171" : "#60a5fa";
  const barBg = C.militaryLineChart;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        position: "relative",
      }}
    >
      {axes.map((ax) => {
        const val = vectors[ax.key];
        const isPos = val >= 0;
        const absPct = Math.min((Math.abs(val) / 0.85) * 100, 100);
        const isHov = hovAxis === ax.key;
        return (
          <div key={ax.key}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              <span
                onMouseEnter={() => setHovAxis(ax.key)}
                onMouseLeave={() => setHovAxis(null)}
                style={{
                  fontSize: 8,
                  color: !isPos ? theme.lineChartMiuns : "#6B7280",
                  fontWeight: !isPos ? 700 : 400,
                  fontFamily: "'Nunito',sans-serif",
                  cursor: "pointer",
                  textDecoration: isHov ? "underline" : "none",
                }}
              >
                <FaArrowUp /> {ax.neg}
              </span>
              <span
                onMouseEnter={() => setHovAxis(ax.key)}
                onMouseLeave={() => setHovAxis(null)}
                style={{
                  fontSize: 8,
                  color: isPos ? theme.lineChartPlus : "#6B7280",
                  fontWeight: isPos ? 700 : 400,
                  fontFamily: "'Nunito',sans-serif",
                  cursor: "pointer",
                  textDecoration: isHov ? "underline" : "none",
                }}
              >
               {ax.pos} <FaArrowRight />
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <div
                style={{
                  flex: 1,
                  height: 22,
                  background: theme.militaryLineChart,
                  borderRadius: "4px 0 0 4px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {!isPos && (
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 0,
                      height: "100%",
                      width: `${absPct}%`,
                      background: theme.lineChartMiuns,
                      borderRadius: "4px 0 0 4px",
                      opacity: 0.7,
                      transition: "width 0.5s",
                    }}
                  />
                )}
                {!isPos && (
                  <div
                    style={{
                      position: "absolute",
                      right: 6,
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#fff",
                      fontFamily: "'Nunito',sans-serif",
                    }}
                  >
                    {val.toFixed(2)}
                  </div>
                )}
              </div>
              <div
                style={{
                  width: 2,
                  height: 28,
                  background: "#475569",
                  flexShrink: 0,
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: 22,
                  background: theme.militaryLineChart,
                  borderRadius: "0 4px 4px 0",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {isPos && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: `${absPct}%`,
                      background: theme.lineChartPlus,
                      borderRadius: "0 4px 4px 0",
                      opacity: 0.7,
                      transition: "width 0.5s",
                    }}
                  />
                )}
                {isPos && (
                  <div
                    style={{
                      position: "absolute",
                      left: 6,
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#fff",
                      fontFamily: "'Nunito',sans-serif",
                    }}
                  >
                    +{val.toFixed(2)}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
      {hovAxis && VECTOR_DEFS[hovAxis] && (
        <div
          style={{
            position: "absolute",
            top: -8,
            left: "50%",
            transform: "translate(-50%, -100%)",
            width: 280,
            background: "#1e293b",
            border: "1px solid #334155",
            borderRadius: 8,
            padding: "10px 12px",
            zIndex: 50,
            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
            pointerEvents: "none",
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
export default VectorBars;
