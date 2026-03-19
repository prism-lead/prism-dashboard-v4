import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { NICE_NAMES, SEGMENTS } from "../../data/profile";
import {
  getTopBeliefs,
  INS_REFORM,
  popAvg,
  useProfileC,
} from "../../pages/SegmentProfile";
import ProfDonut from "./ProfDonut";

// ─── TAB: BELIEFS ────────────────────────────────────────────────────────────
function BeliefsPanel({ segIdx }) {
  const C = useProfileC();
  const { theme } = useTheme();
  const top4 = getTopBeliefs(segIdx);
  const believecolors = [
    theme.believecolors1,
    theme.believecolors2,
    theme.believecolors3,
    theme.believecolors4,
  ];
  const party = SEGMENTS[segIdx].party;
  //   const partyColor = party === "GOP" ? C.partyGOP : C.partyDEM;
  const INS_REFORM_RAW = INS_REFORM({});
  const [tooltip, setTooltip] = useState(null);
  // Insurance reform spectrum
  const expandPct = INS_REFORM_RAW[0].v[segIdx] + INS_REFORM_RAW[1].v[segIdx];
  const preservePct = INS_REFORM_RAW[2].v[segIdx] + INS_REFORM_RAW[3].v[segIdx];

  const leanLabel =
    expandPct > preservePct + 0.1
      ? "Leans Expand"
      : preservePct > expandPct + 0.1
        ? "Leans Preserve"
        : "Mixed / Split";
  const leanColor =
    expandPct > preservePct + 0.1
      ? "#a78bfa"
      : preservePct > expandPct + 0.1
        ? "#d4915e"
        : C.steel;

  return (
    <div>
      {/* ═══ WHAT THEY WANT — Own Panel ═══ */}
      <div
        style={{
          padding: "24px 28px",
          background: C.card,
          borderRadius: 10,
          border: `1px solid ${C.cardBorder}`,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 4,
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: C.white,
              letterSpacing: 0.5,
            }}
          >
            WHAT THEY WANT
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: leanColor }}>
            {leanLabel}
          </div>
        </div>
        <div
          style={{
            fontSize: 11,
            color: C.insuranceText,
            fontWeight: 500,
            marginBottom: 16,
          }}
        >
          Preferred direction for U.S. health insurance reform
        </div>

        {/* Segment bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 6,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: C.textDim,
              width: 50,
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            Segment
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              height: 32,
              borderRadius: 6,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {INS_REFORM(theme).map((cat, ci) => {
              const pct = cat.v[segIdx] * 100;

              return (
                <div
                  key={ci}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setTooltip({
                      label: cat.l,
                      value: cat.tooltipContent,
                      x: rect.left + rect.width / 2,
                      y: rect.top,
                    });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    width: `${pct}%`,
                    height: "100%",
                    background: cat.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  {pct >= 8 && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#0f1a2e",
                        textShadow: "0 0 4px rgba(255,255,255,0.3)",
                      }}
                    >
                      {pct.toFixed(0)}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Population bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 14,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 600,
              color: C.textDim,
              width: 50,
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            Pop avg
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              height: 16,
              borderRadius: 4,
              overflow: "hidden",
              opacity: 0.55,
            }}
          >
            {INS_REFORM(theme).map((cat, ci) => {
              const pct = popAvg(cat.v) * 100;
              return (
                <div
                  key={ci}
                  style={{
                    width: `${pct}%`,
                    height: "100%",
                    background: cat.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setTooltip({
                      label: cat.l,
                      value: cat.tooltipContent,
                      x: rect.left + rect.width / 2,
                      y: rect.top,
                    });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                >
                  {pct >= 10 && (
                    <span
                      style={{ fontSize: 8, fontWeight: 700, color: "#0f1a2e" }}
                    >
                      {pct.toFixed(0)}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend — prominent, above bars */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginBottom: 14,
            marginTop: 20,
          }}
        >
          {INS_REFORM(theme).map((cat, ci) => (
            <div
              key={ci}
              style={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 3,
                  background: cat.color,
                }}
              />
              <span style={{ fontSize: 11, fontWeight: 600, color: cat.color }}>
                {cat.l}
              </span>
            </div>
          ))}
        </div>
        {/* Spectrum endpoints */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 8,
            borderTop: `1px solid ${C.cardBorder}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                fontSize: 9,
                color: theme.singlePayerBg,
                fontWeight: 600,
              }}
            >
              ← Expand Coverage
            </span>
            <span style={{ fontSize: 8, color: theme.singlePayerBg }}>
              ({(expandPct * 100).toFixed(0)}%)
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 9, color: "#d4915e", fontWeight: 600 }}>
              Preserve Market →
            </span>
            <span style={{ fontSize: 8, color: "#d4915e" }}>
              ({(preservePct * 100).toFixed(0)}%)
            </span>
          </div>
        </div>
      </div>
      {tooltip && (
        <div
          style={{
            position: "fixed",
            top: tooltip.y - 95,
            left: tooltip.x,
            transform: "translateX(-50%)",
            background: C.card,
            border: `1px solid ${C.cardBorder}`,
            borderRadius: 8,
            padding: "10px 12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
            pointerEvents: "none",
            zIndex: 1000,
            maxWidth: 220,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: theme.publicOption,
              marginBottom: 4,
            }}
          >
            {tooltip.label.toUpperCase()}
          </div>

          <div
            style={{
              fontSize: 10,
              color: theme.countriesTagline,
            }}
          >
            {tooltip.value}
          </div>

          <div
            style={{
              fontSize: 8,
              fontStyle: "italic",
              marginTop: 5,
              color: "#1A7A3C",
            }}
          >
            (Agree)
          </div>

          {/* arrow */}
          <div
            style={{
              position: "absolute",
              bottom: -8,
              left: "90%",
              transform: "translateX(-50%)",
              width: 10,
              height: 10,
              background: C.card,
              // borderLeft: `1px solid ${C.cardBorder}`,
              borderBottom: `1px solid transparent`,
              transformOrigin: "center",
              rotate: "45deg",
            }}
          />
        </div>
      )}

      {/* ═══ WHAT THEY BELIEVE — Cards Panel ═══ */}
      <div
        style={{
          padding: "24px 28px",
          background: C.card,
          borderRadius: 10,
          border: `1px solid ${C.cardBorder}`,
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
            WHAT THEY BELIEVE
          </div>
          <div style={{ fontSize: 11, color: C.textMuted, fontWeight: 500 }}>
            Top discriminating attitudes &amp; policies
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {top4.map((b, i) => {
            const isUp = b.delta > 0;
            const ac = isUp ? C.green : C.red;
            const niceName = NICE_NAMES[b.v] || b.v;
            const isPartyUp = b.deltaParty > 0;
            const pac = isPartyUp ? C.green : C.red;
            return (
              <div
                key={i}
                style={{
                  flex: "1 1 220px",
                  minWidth: 220,
                  maxWidth: "100%",
                  padding: "20px 18px 16px",
                  borderRadius: 10,
                  background: theme.believeCardBg,
                  border: `1px solid ${believecolors[i]}30`,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Left accent bar */}
                {/* <div
                  style={{
                    position: "absolute",
                    top: 8,
                    left: 0,
                    width: 3,
                    height: "calc(100% - 16px)",
                    background: believecolors[i],
                    borderRadius: 3,
                  }}
                /> */}

                {/* Title */}
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: C.white,
                    marginBottom: 14,
                    lineHeight: 1.3,
                    paddingLeft: 4,
                  }}
                >
                  {niceName}
                </div>

                {/* Donut + dual deltas */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 14,
                    paddingLeft: 4,
                  }}
                >
                  <ProfDonut
                    value={b.t3b[segIdx]}
                    avg={b.a}
                    color={believecolors[i]}
                  />
                  <div>
                    {/* vs all population */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        marginBottom: 5,
                        background: theme.minusBg,
                        padding: "2px 5px",
                        borderRadius: "100px",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        style={{
                          transform: isUp ? "none" : "rotate(180deg)",
                          flexShrink: 0,
                        }}
                      >
                        <path d="M7 1 L13 11 L1 11 Z" fill={ac} />
                      </svg>
                      <span
                        style={{
                          fontSize: 8,
                          fontWeight: 800,
                          color: ac,
                          fontFamily: "'DM Sans',sans-serif",
                        }}
                      >
                        {isUp ? "+" : ""}
                        {(b.delta * 100).toFixed(0)}
                      </span>
                      <span style={{ fontSize: 9, color: C.text1 }}>
                        vs pop
                      </span>
                    </div>
                    {/* vs own party */}
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
                        width="10"
                        height="10"
                        viewBox="0 0 14 14"
                        style={{
                          transform: isPartyUp ? "none" : "rotate(180deg)",
                          flexShrink: 0,
                        }}
                      >
                        <path d="M7 1 L13 11 L1 11 Z" fill={pac} />
                      </svg>
                      <span
                        style={{
                          fontSize: 8,
                          fontWeight: 700,
                          color: pac,
                          fontFamily: "'DM Sans',sans-serif",
                        }}
                      >
                        {isPartyUp ? "+" : ""}
                        {(b.deltaParty * 100).toFixed(0)}
                      </span>
                      <span style={{ fontSize: 9, color: C.text1 }}>
                        vs {party}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div
                  style={{
                    fontSize: 10.5,
                    color: C.textMuted,
                    lineHeight: 1.5,
                    flex: 1,
                    paddingLeft: 4,
                    fontStyle: "italic",
                  }}
                >
                  {b.t}
                </div>

                {/* T2B footnote */}
                <div
                  style={{
                    fontSize: 8,
                    color: C.textDim,
                    marginTop: 10,
                    paddingTop: 8,
                    borderTop: `1px solid ${C.cardBorder}`,
                    paddingLeft: 4,
                  }}
                >
                  Top-3-box · Somewhat Agree + Agree + Strongly Agree on 7-pt
                  scale
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BeliefsPanel;
