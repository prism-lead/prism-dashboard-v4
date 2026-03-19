import { useProfileC } from "../../pages/SegmentProfile";

function MiniDonut({ value, size = 44, color = "#3b82f6", bg, strokeW = 4 }) {
  const C = useProfileC();
  const strokeBg = bg ?? C.border;
  const r = (size - strokeW) / 2,
    c = 2 * Math.PI * r,
    o = c * (1 - value / 100);
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={strokeBg}
        strokeWidth={strokeW}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={strokeW}
        strokeDasharray={c}
        strokeDashoffset={o}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.6s" }}
      />
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill={C.text1}
        fontSize={size < 36 ? 8 : 10}
        fontWeight={700}
        fontFamily="'Nunito',sans-serif"
        style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
      >
        {value}%
      </text>
    </svg>
  );
}
export default MiniDonut;
