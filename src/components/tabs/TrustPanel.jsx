/* eslint-disable react-hooks/static-components */

import { useTheme } from "../../context/ThemeContext";
import { ENTITIES, TRUST_DATA } from "../../data/profile";
import { AVG_C, AVG_G, GAP_AVG, getDistinctive, useProfileC } from "../../pages/SegmentProfile";

// ─── TAB: TRUST ──────────────────────────────────────────────────────────────
function TrustPanel({ segIdx }) {
  const { theme } = useTheme();
  const C = useProfileC();
  const govt = TRUST_DATA.GOVT[segIdx],
    corp = TRUST_DATA.CORP[segIdx],
    gap = TRUST_DATA.GAP[segIdx];
  const pct = (v) => ((v - 1) / 6) * 100;
  const gP = pct(govt),
    cP = pct(corp),
    aG = pct(AVG_G),
    aC = pct(AVG_C);
  const lo = Math.min(gP, cP),
    hi = Math.max(gP, cP);
  const mid = (govt + corp) / 2,
    aMid = (AVG_G + AVG_C) / 2;
  const posture =
    mid > aMid + 0.25
      ? "High-trust"
      : mid < aMid - 0.25
        ? "Low-trust"
        : "Moderate-trust";
  const gapLbl =
    gap > GAP_AVG + 0.3
      ? "wide gap"
      : gap < GAP_AVG - 0.2
        ? "narrow gap"
        : "typical gap";
//   const pC =
//     mid > aMid + 0.25 ? C.green : mid < aMid - 0.25 ? C.red : C.textMuted;

  const DotStrip2 = ({ title, color, ents }) => (
    <div
      style={{
        flex: 1,
        padding: "14px 18px",
        background: C.card,
        borderRadius: 8,
        border: `1px solid ${C.cardBorder}`,
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          color:theme.text,
          marginBottom: 12,
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        <div
          style={{ width: 6, height: 6, borderRadius: 3, background: color }}
        />
        {title}
      </div>
      {ents.map((k) => {
        const e = ENTITIES[k];
        const sv = e.v[segIdx];
        const d = sv - e.a;
        return (
          <div key={k} style={{ marginBottom: 12 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 3,
                alignItems: "baseline",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: C.text }}>
                {e.l}
              </span>
              <span style={{ fontSize: 10 }}>
              
                <span style={{ fontSize: 12, color: d >= 0 ? C.green : C.red }}>
                  {d >= 0 ? "+" : ""}
                  {d.toFixed(2)}
                </span>
              </span>
            </div>
            <div style={{ position: "relative", height: 16 }}>
              <div
                style={{
                  position: "absolute",
                  top: 6,
                  left: 0,
                  right: 0,
                  height: 4,
                  borderRadius: 2,
                  background: theme.militaryLineChart,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 2,
                  left: `${pct(e.a)}%`,
                  transform: "translateX(-50%)",
                  width: 1.5,
                  height: 12,
                  background: C.steel,
                  opacity: 0.3,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${pct(sv)}%`,
                  transform: "translateX(-50%)",
                  width: 16,
                  height: 16,
                  borderRadius: 100,
                  background: color,
                  border: `2px solid #fff`,
                  boxShadow: `0 0 6px ${color}55`,
                }}
              />
            </div>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 8,
          color: C.textDim,
          marginTop: 4,
          paddingTop: 4,
          borderTop: `1px solid ${C.cardBorder}`,
        }}
      >
        <span>1 No trust</span>
        <span>7 High trust</span>
      </div>
    </div>
  );

  return (
    <div>
      {/* Dumbbell */}
      <div
        style={{
          padding: "18px 22px",
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
            gap: 5,
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: C.text,
            }}
          >
            Trust Posture
          </div>
          <div
            style={{ fontSize: 10, color: theme.textDim, fontWeight: 600 }}
          >
            {posture} · {gapLbl}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 14,
            marginBottom: 14,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: C.govtBlue,
              }}
            />
            <span style={{ fontSize: 12, color: C.textMuted }}>Govt</span>
            <span
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: C.white,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {govt.toFixed(2)}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: C.corpAmber,
              }}
            />
            <span style={{ fontSize: 12, color: C.textMuted }}>Corp</span>
            <span
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: C.white,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {corp.toFixed(2)}
            </span>
          </div>
          <span style={{ fontSize: 12, color: C.textMuted }}>
            Gap{" "}
            <span style={{ fontSize: 16, fontWeight: 700, color: "#5B93C7" }}>
              {gap.toFixed(2)}
            </span>
            <span style={{ fontSize: 10, color: C.textDim, marginLeft: 4 }}>
              avg {GAP_AVG.toFixed(2)}
            </span>
          </span>
        </div>
        <div style={{ position: "relative", height: 50, marginBottom: 6 }}>
          <div
            style={{
              position: "absolute",
              top: 18,
              left: 0,
              right: 0,
              height: 8,
              borderRadius: 4,
              background: theme.militaryLineChart,
              border: `1px solid ${theme.militaryLineChart}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 20,
              left: `${Math.min(aG, aC)}%`,
              width: `${Math.abs(aG - aC)}%`,
              height: 4,
              borderRadius: 2,
              background: `${C.steel}20`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 16,
              left: `${aG}%`,
              transform: "translateX(-50%)",
              width: 10,
              height: 10,
              borderRadius: 5,
              background: `${theme.gradientSecondColor}30`,
              border: `1.5px dashed ${theme.gradientSecondColor}50`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 16,
              left: `${aC}%`,
              transform: "translateX(-50%)",
              width: 10,
              height: 10,
              borderRadius: 5,
              background: `${theme.gradientFirstColor}30`,
              border: `1.5px dashed ${theme.gradientFirstColor}50`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 20,
              left: `${lo}%`,
              width: `${hi - lo}%`,
              height: 4,
              borderRadius: 2,
              background: `linear-gradient(to right,${theme.gradientFirstColor}88,${theme.gradientSecondColor}88)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 13,
              left: `${cP}%`,
              transform: "translateX(-50%)",
              width: 16,
              height: 16,
              borderRadius: 8,
              background: theme.gradientFirstColor,
              border: `2px solid #fff`,
              boxShadow: `0 0 8px ${C.corpAmber}55`,
              zIndex: 3,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 1,
              left: `${cP}%`,
              transform: "translateX(-50%)",
              fontSize: 9,
              fontWeight: 700,
              color: C.corpAmber,
            }}
          >
            {corp.toFixed(1)}
          </div>
          <div
            style={{
              position: "absolute",
              top: 13,
              left: `${gP}%`,
              transform: "translateX(-50%)",
              width: 16,
              height: 16,
              borderRadius: 8,
              background: theme.gradientSecondColor,
              border: `2px solid #fff`,
              boxShadow: `0 0 8px ${C.govtBlue}55`,
              zIndex: 3,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 1,
              left: `${gP}%`,
              transform: "translateX(-50%)",
              fontSize: 9,
              fontWeight: 700,
              color: C.govtBlue,
            }}
          >
            {govt.toFixed(1)}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 8,
            color: C.textDim,
          }}
        >
          <span>1 No trust</span>
          <span>7 High trust</span>
        </div>
      </div>
      {/* Entity strips */}
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <DotStrip2
          title="Corporate / Market"
          color={theme.tier2Percent}
          ents={["PHARMA", "INSURER", "HOSPITAL", "PROVIDER"]}
        />
        <DotStrip2
          title="Government / Institutional"
          color={theme.tabsBorderDarkActive}
          ents={["MEDICARE", "NIH", "FED", "ACADEMIA"]}
        />
      </div>
      {/* Distinctive institutions */}
      {(() => {
        const top3 = getDistinctive(segIdx);
        const dColors = [C.cyan, C.violet, C.rose];
        return (
          <div
            style={{
              padding: "18px 22px",
              background: C.card,
              borderRadius: 10,
              border: `1px solid ${C.cardBorder}`,
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
              }}
            >
              Most Distinctive Trust Gaps
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {top3.map((d, i) => {
                const isUp = d.delta >= 0;
                const ac = isUp ? C.green : C.red;
                return (
                  <div
                    key={d.k}
                    style={{
                      flex: 1,
                      padding: "14px 16px",
                      background: C.card,
                      borderRadius: 8,
                      border: `1px solid ${dColors[i]}30`,
                      position: "relative",
                    }}
                  >
                    {/* <div
                      style={{
                        position: "absolute",
                        top: 6,
                        left: 0,
                        width: 3,
                        height: "calc(100% - 12px)",
                        background: dColors[i],
                        borderRadius: 3,
                      }}
                    /> */}
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: C.text1,
                        marginBottom: 8,  
                        paddingLeft: 4,
                      }}
                    >
                      {d.l}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        flexDirection: "column",
                        gap: 6,
                        paddingLeft: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 22,
                          fontWeight: 800,
                          color: theme.mostdistinctiveText,
                          fontFamily: "'DM Sans',sans-serif",
                        }}
                      >
                        {d.val.toFixed(2)}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
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
                            <path d="M7 1 L13 11 L1 11 Z" fill={ac} />
                          </svg>
                          <span
                            style={{ fontSize: 8, fontWeight: 700, color: ac }}
                          >
                            {isUp ? "+" : ""}
                            {d.delta.toFixed(2)}
                          </span>
                          <span style={{ fontSize: 9, color: ac }}>
                            vs pop avg
                          </span>
                        </div>
                        <span style={{ fontSize: 9, color: theme.textDim }}>
                          pop avg {d.avg.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default TrustPanel