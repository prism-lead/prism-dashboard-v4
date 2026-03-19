import { useTheme } from "../../context/ThemeContext";
import { HBIS_SUM, SEGMENTS, WELL_LIFE, WELL_ORIENT } from "../../data/profile";
import { HBar, POP_T, popAvg, useProfileC } from "../../pages/SegmentProfile";
import ProfDonut from "./ProfDonut";





// ─── TAB: WELLNESS ───────────────────────────────────────────────────────────
function WellnessPanel({ segIdx }) {
  const { theme } = useTheme();
  const C = useProfileC();
  const headline = WELL_ORIENT[0]; // "US much less healthy"
  const reasons = WELL_ORIENT.slice(1);
  const hVal = headline.v[segIdx];
  const hAvg = popAvg(headline.v);
  const hDelta = hVal - hAvg;
  const hbis = HBIS_SUM[segIdx];
  const hbisAvg = popAvg(HBIS_SUM);

  return (
    <div style={{}}>
      {/* Row 1: Health Pessimism donut + Why bars */}
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        {/* Headline donut */}
        <div
          style={{
            width: 320,
            flexShrink: 0,
            padding: "20px 18px",
            background: C.card,
            borderRadius: 10,
            border: `1px solid ${C.cardBorder}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: C.white,
              marginBottom: 14,
              textAlign: "start",
            }}
          >
            America's Health
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <ProfDonut
              value={hVal}
              avg={hAvg}
              color={theme.firstCultureLineChartActive}
              size={110}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  background: hDelta <= 0 ? theme.minusBg : theme.plusBg,
                  padding: "2px 5px",
                  borderRadius: "100px",
                }}
              >
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 14 14"
                  style={{
                    transform: hDelta <= 0 ? "none" : "rotate(180deg)",
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M7 1 L13 11 L1 11 Z"
                    fill={hDelta <= 0 ? C.rose : C.green}
                  />
                </svg>
                <span
                  style={{
                    fontSize: 8,
                    fontWeight: 700,
                    color: hDelta <= 0 ? C.rose : C.green,
                  }}
                >
                  {hDelta >= 0 ? "+" : ""}
                  {(hDelta * 100).toFixed(0)}pp vs avg
                </span>
              </div>
            </div>
            <div style={{ fontSize: 8, color: C.textDim, marginTop: 4 }}>
              pop avg {(hAvg * 100).toFixed(0)}%
            </div>
          </div>

          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: theme.countriesTagline,
              marginTop: 12,
              textAlign: "center",
              paddingTop: "10px",
              lineHeight: 1.3,
              borderTop: `1px solid ${C.border}`,
            }}
          >
            "America is much less healthy than other countries"
          </div>
        </div>
        {/* Reasons bars */}
        <div
          style={{
            flex: 1,
            padding: "16px 20px",
            background: C.card,
            borderRadius: 10,
            border: `1px solid ${C.cardBorder}`,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: C.white,
              marginBottom: 14,
            }}
          >
            Why Is America Sick? · Top Reasons
          </div>
          {reasons.map((d, i) => (
            <HBar
              key={i}
              label={d.l}
              value={d.v[segIdx]}
              avg={popAvg(d.v)}
              color={theme.firstCultureLineChartActive}
              maxVal={0.7}
            />
          ))}
        </div>
      </div>

      {/* Row 2: HBIS Gauge + Wellness Lifestyles */}
      <div style={{ display: "flex", gap: 12 }}>
        {/* HBIS Gauge */}
        <div
          style={{
            width: 320,
            flexShrink: 0,
            padding: "20px 18px",
            background: C.card,
            borderRadius: 10,
            border: `1px solid ${C.cardBorder}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: C.text1,
              marginBottom: 14,
              textAlign: "start",
              width:'100%'
            }}
          >
            Wellness Behavior Index
          </div>
          {/* Semi-circle gauge */}
          {(() => {
            const maxScale = 6;
            const r = 52,
              cx = 60,
              cy = 58,
              sw = 10;
            const halfCirc = Math.PI * r;
            const frac = Math.min(1, hbis / maxScale);
            const filled = halfCirc * frac;
            const gap = halfCirc - filled;
            const avgFrac = Math.min(1, hbisAvg / maxScale);
            const avgAng = Math.PI + avgFrac * Math.PI;
            const tx = cx + r * Math.cos(avgAng);
            const ty = cy + r * Math.sin(avgAng);
            return (
              <svg
                width={120}
                height={70}
                viewBox="0 0 120 70"
                style={{ display: "block" }}
              >
                <path
                  d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                  fill="none"
                  stroke={C.dotStrip}
                  strokeWidth={sw}
                  strokeLinecap="round"
                />
                <path
                  d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                  fill="none"
                  stroke={theme.SecondCultureLineChartActive}
                  strokeWidth={sw}
                  strokeLinecap="round"
                  strokeDasharray={`${filled} ${gap}`}
                />
                {/* <circle
                  cx={tx}
                  cy={ty}
                  r={4}
                  fill="none"
                  stroke={C.steel}
                  strokeWidth={1.5}
                /> */}
                <text
                  x={cx}
                  y={cy - 4}
                  textAnchor="middle"
                  fill={C.white}
                  fontSize="22"
                  fontWeight="800"
                  fontFamily="'DM Sans',sans-serif"
                >
                  {hbis.toFixed(1)}
                </text>
              </svg>
            );
          })()}
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: C.teal,
              marginTop: 6,
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            Avg activities out of 10
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginTop: 8,
            }}
          >
            {(() => {
              const d = hbis - hbisAvg;
              const dc = d >= 0 ? C.green : C.red;
              return (
                <>
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 14 14"
                    style={{
                      transform: d >= 0 ? "none" : "rotate(180deg)",
                      flexShrink: 0,
                    }}
                  >
                    <path d="M7 1 L13 11 L1 11 Z" fill={dc} />
                  </svg>
                  <span style={{ fontSize: 12, fontWeight: 700, color: dc }}>
                    {d >= 0 ? "+" : ""}
                    {d.toFixed(2)} vs avg
                  </span>
                </>
              );
            })()}
          </div>
          <div style={{ fontSize: 8, color: C.textDim, marginTop: 4 }}>
            pop avg {hbisAvg.toFixed(1)}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              fontSize: 7,
              color: C.textDim,
              marginTop: 10,
              paddingTop: 6,
              borderTop: `1px solid ${C.cardBorder}`,
            }}
          >
            <span>0 None</span>
            <span>6 High engagement</span>
          </div>
        </div>
        {/* Wellness Lifestyles bars */}
        <div
          style={{
            flex: 1,
            padding: "16px 20px",
            background: C.card,
            borderRadius: 10,
            border: `1px solid ${C.cardBorder}`,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: C.white,
              marginBottom: 14,
            }}
          >
            Wellness Lifestyles · "What do you do?"
          </div>
          {WELL_LIFE.map((d, i) => (
            <HBar
              key={i}
              label={d.l}
              value={d.v[segIdx]}
              avg={popAvg(d.v)}
              color={theme.SecondCultureLineChartActive}
              maxVal={0.85}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WellnessPanel