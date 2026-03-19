import { useTheme } from "../../context/ThemeContext";
import { useProfileC } from "../../pages/SegmentProfile";


function Donut({ value, label, subLabel, size = 88, strokeW = 9 }) {
  const { theme } = useTheme();
  const C = useProfileC();
  const r = (size - strokeW) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - value / 100);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={"#F0F2F5"}
            strokeWidth={strokeW}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={theme.genderChartActive}
            strokeWidth={strokeW}
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.6s" }}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: C.text1,
              fontFamily: "'Nunito',sans-serif",
              lineHeight: 1,
            }}
          >
            {value}%
          </div>
        </div>
      </div>
      <div style={{ marginTop: 6, textAlign: "center" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: C.text1,
            fontFamily: "'Nunito',sans-serif",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 10,
            color: C.text3,
            fontFamily: "'Nunito',sans-serif",
            marginTop: 1,
          }}
        >
          {subLabel}
        </div>
      </div>
    </div>
  );
}


export default Donut