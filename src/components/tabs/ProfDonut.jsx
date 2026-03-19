import { useTheme } from "../../context/ThemeContext";
import { useProfileC } from "../../pages/SegmentProfile";

// ─── DONUT CHART ─────────────────────────────────────────────────────────────
function ProfDonut({ value, avg, color, size = 96 }) {
  const { theme } = useTheme();
  const C = useProfileC();
  const r = 34,
    cx = 48,
    cy = 48,
    sw = 8;
  const circ = 2 * Math.PI * r;
  const filled = circ * Math.max(0, Math.min(1, value));
  const gap = circ - filled;
  // Avg tick position on the arc (from 12 o'clock)
  const avgFrac = Math.max(0, Math.min(1, avg));
  const avgAng = (-90 + avgFrac * 360) * (Math.PI / 180);
  const tx = cx + r * Math.cos(avgAng);
  const ty = cy + r * Math.sin(avgAng);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* Track */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={theme.militaryLineChart}
        strokeWidth={sw}
      />
      {/* Filled arc */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={sw}
        strokeDasharray={`${filled} ${gap}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: "stroke-dasharray 0.4s ease" }}
      />
      {/* Avg marker */}
      {/* <circle
        cx={tx}
        cy={ty}
        r={4}
        fill={C.bg}
        stroke={color}
        strokeWidth={1.5}
      /> */}
      {/* Center percentage */}
      <text
        x={cx}
        y={cy + 1}
        textAnchor="middle"
        dominantBaseline="central"
        fill={C.white}
        fontSize="19"
        fontWeight="800"
        style={{ fontFamily: "'DM Sans',sans-serif" }}
      >
        {(value * 100).toFixed(0)}%
      </text>
    </svg>
  );
}
export default ProfDonut