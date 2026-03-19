/* eslint-disable react-hooks/static-components */
import { useTheme } from "../../context/ThemeContext";
import { EXP_DATA, INSURANCE_TYPE } from "../../data/profile";
import { popAvg, useProfileC } from "../../pages/SegmentProfile";
import ProfDonut from "./ProfDonut";

// ─── TAB: EXPERIENTIAL ───────────────────────────────────────────────────────
function ExpPanel({ segIdx }) {
  const { theme } = useTheme();
  const C = useProfileC();
  const um = EXP_DATA[0]; // Any UM
  const deny = EXP_DATA[1]; // Claim Denied
  const prior = EXP_DATA[2]; // Prior Auth
  const surprise = EXP_DATA[3];
  const closure = EXP_DATA[4];
  const tele = EXP_DATA[5];
  const diag = EXP_DATA[6];

  const cards = [
    { d: tele, label: "Telehealth", accent: theme.telehealthPie },
    { d: closure, label: "Hospital Closure", accent: theme.closurePie },
    { d: diag, label: "Recent Diagnosis", accent: theme.diagnosisPie },
  ];

  // Semi-circle gauge for UM
  function UMGauge({ value, avg }) {
    const r = 52,
      cx = 60,
      cy = 58,
      sw = 10;
    const halfCirc = Math.PI * r;
    const filled = halfCirc * Math.min(1, value / 0.4);
    const gap = halfCirc - filled;
    const avgFrac = Math.min(1, avg / 0.4);
    const avgAng = Math.PI + avgFrac * Math.PI;
    const tx = cx + r * Math.cos(avgAng);
    const ty = cy + r * Math.sin(avgAng);
    return (
      <svg
        width={120}
        height={70}
        viewBox="0 0 120 70"
        style={{ display: "block", flexShrink: 0 }}
      >
        {/* Track */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke={theme.militaryLineChart}
          strokeWidth={sw}
          strokeLinecap="round"
        />
        {/* Filled arc */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke={theme.coverageLineSecond}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeDasharray={`${filled} ${gap}`}
        />
        {/* Avg marker */}
        {/* <circle
          cx={tx}
          cy={ty}
          r={4}
          fill={theme.coverageLineSecond}
          stroke={"#fff"}
          strokeWidth={1.5}
        /> */}
        {/* Center text */}
        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          fill={C.white}
          fontSize="22"
          fontWeight="800"
          fontFamily="'DM Sans',sans-serif"
        >
          {(value * 100).toFixed(0)}%
        </text>
      </svg>
    );
  }

  // Sub-bar for claim denial / prior auth / surprise bill
  function SubBar({ label, value, avg }) {
    const pct = (v) => Math.max(0, Math.min(100, (v / 0.4) * 100));
    const delta = value - avg;
    return (
      <div style={{ marginBottom: 10 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 3,
            alignItems: "baseline",
          }}
        >
          <span style={{ fontSize: 10, fontWeight: 600, color: C.textMuted }}>
            {label}
          </span>
          <span style={{ fontSize: 10 }}>
            <span style={{ color: C.white, fontWeight: 700 }}>
              {(value * 100).toFixed(0)}%
            </span>{" "}
            <span style={{ fontSize: 9, color: delta >= 0 ? C.rose : C.green }}>
              {delta >= 0 ? "+" : ""}
              {(delta * 100).toFixed(0)} vs avg
            </span>
          </span>
        </div>
        <div
          style={{
            position: "relative",
            height: 14,
            background: theme.militaryLineChart,
            borderRadius: 4,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 14,
              width: `${pct(value)}%`,
              background: `${theme.coverageLineSecond}`,
              borderRadius: 4,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -2,
              left: `${pct(avg)}%`,
              width: 2,
              height: 14,
              background: C.steel,
              opacity: 0.6,
              transform: "translateX(-1px)",
              borderRadius: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 11,
              left: `${pct(avg)}%`,
              transform: "translateX(-50%)",
              fontSize: 7,
              color: C.textDim,
              whiteSpace: "nowrap",
            }}
          >
            avg {(avg * 100).toFixed(0)}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "70% 30%",
        gap: 10,
      }}
    >
      <div>
        {/* Insurance Coverage HBars */}
        <div
          style={{
            background: C.card,
            borderRadius: 10,
            border: `1px solid ${C.steel}25`,
            padding: "20px 22px",
            marginBottom: 16,
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: C.white,
                letterSpacing: 0.5,
                marginBottom: 2,
              }}
            >
              HEALTH COVERAGE
            </div>
            <div style={{ fontSize: 11, color: C.textMuted, fontWeight: 500 }}>
              Primary insurance type · segment vs. population average
            </div>
          </div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: C.steel,
              marginBottom: 14,
            }}
          >
            Primary Insurance Type
          </div>
          {INSURANCE_TYPE.map((cat, ci) => {
            const val = cat.v[segIdx];
            const avg = popAvg(cat.v);
            const delta = val - avg;
            const maxVal = 0.6;
            const pct = (v) => Math.max(0, Math.min(100, (v / maxVal) * 100));
            return (
              <div key={ci} style={{ marginBottom: 10 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 3,
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{ fontSize: 11, fontWeight: 600, color: C.text }}
                  >
                    {cat.l}
                  </span>
                  <span style={{ fontSize: 11 }}>
                    <span style={{ color: C.white, fontWeight: 700 }}>
                      {(val * 100).toFixed(0)}%
                    </span>{" "}
                    <span
                      style={{
                        fontSize: 9,
                        color: delta >= 0 ? C.green : C.red,
                      }}
                    >
                      {delta >= 0 ? "+" : ""}
                      {(delta * 100).toFixed(0)} vs avg
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    position: "relative",
                    height: 18,
                    background: theme.militaryLineChart,
                    borderRadius: 3,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: 14,
                      width: `${pct(val)}%`,
                      background: `${theme.coverageLineFirst}`,
                      borderRadius: 3,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: `${pct(avg)}%`,
                      width: 2,
                      height: 14,
                      background: C.steel,
                      opacity: 0.5,
                      transform: "translateX(-1px)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      left: `${pct(avg)}%`,
                      transform: "translateX(-50%)",
                      fontSize: 7,
                      color: C.textDim,
                      whiteSpace: "nowrap",
                    }}
                  >
                    avg {(avg * 100).toFixed(0)}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* UM Feature Card */}
        <div
          style={{
            background: C.card,
            borderRadius: 10,
            border: `1px solid ${C.teal}25`,
            padding: "20px 22px",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 16,
            }}
          >
            <UMGauge value={um.v[segIdx]} avg={popAvg(um.v)} />
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: C.white,
                  marginBottom: 4,
                }}
              >
                Insurance Friction
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: C.textMuted,
                  lineHeight: 1.4,
                  maxWidth: 260,
                }}
              >
                Negative experience with insurer in past year
              </div>
              <div style={{ fontSize: 9, color: C.textDim, marginTop: 6 }}>
                ○ Pop avg {(popAvg(um.v) * 100).toFixed(0)}%
              </div>
            </div>
          </div>
          {/* Sub-components */}
          <div
            style={{ borderTop: `1px solid ${C.cardBorder}`, paddingTop: 12 }}
          >
            <SubBar
              label="Claim Denied"
              value={deny.v[segIdx]}
              avg={popAvg(deny.v)}
              color={theme.coverageLineSecond}
            />
            <SubBar
              label="Prior Auth Delay"
              value={prior.v[segIdx]}
              avg={popAvg(prior.v)}
              color={theme.coverageLineSecond}
            />
            <SubBar
              label="Surprise Bill"
              value={surprise.v[segIdx]}
              avg={popAvg(surprise.v)}
              color={theme.coverageLineSecond}
            />
          </div>
        </div>
      </div>
      <div>
        {/* Four individual cards */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {cards.map((c, i) => {
            const val = c.d.v[segIdx];
            const avg = popAvg(c.d.v);
            const delta = val - avg;
            const isUp = delta >= 0;
            return (
              <div
                key={i}
                style={{
                  flex: "1 1 140px",
                  minWidth: "100%",
                  background: C.card,
                  borderRadius: 10,
                  padding: "16px 14px",
                  display: "flex",
                  // flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <div>
                  {/* Label */}
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: C.white,
                      marginTop: 10,
                      textAlign: "center",
                    }}
                  >
                    {c.label}
                  </div>

                  {/* Donut */}
                  <ProfDonut value={val} avg={avg} color={c.accent} size={92} />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    marginTop: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: theme.plusBg,
                      padding: "2px 5px",
                      borderRadius: "100px",
                    }}
                  >
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 14 14"
                      style={{
                        transform: isUp ? "none" : "rotate(180deg)",
                        flexShrink: 0,
                      }}
                    >
                      <path
                        d="M7 1 L13 11 L1 11 Z"
                        fill={isUp ? C.rose : C.green}
                      />
                    </svg>
                    <span
                      style={{
                        fontSize: 8,
                        fontWeight: 700,
                        color: isUp ? C.rose : C.green,
                      }}
                    >
                      {isUp ? "+" : ""}
                      {(delta * 100).toFixed(0)}pp vs avg
                    </span>
                  </div>
                  <span style={{ fontSize: 9, color: theme.textDim }}>
                    pop avg {(avg * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExpPanel