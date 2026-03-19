import React, { useState, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

// ─── SEGMENT ORDER ───
const SEGS = [
  { code: "TSP", name: "TRUST THE SCIENCE PRAGMATISTS", party: "GOP" },
  { code: "CEC", name: "CONSUMER EMPOWERMENT CHAMPIONS", party: "GOP" },
  { code: "TC", name: "TRADITIONAL CONSERVATIVES", party: "GOP" },
  { code: "WE", name: "WELLNESS EVANGELISTS", party: "GOP" },
  { code: "PP", name: "PRICE POPULISTS", party: "GOP" },
  { code: "HF", name: "HEALTH FUTURISTS", party: "GOP" },
  { code: "PFF", name: "PALEO FREEDOM FIGHTERS", party: "GOP" },
  { code: "HHN", name: "HOLISTIC HEALTH NATURALISTS", party: "GOP" },
  { code: "MFL", name: "MEDICAL FREEDOM LIBERTARIANS", party: "GOP" },
  { code: "VS", name: "VACCINE SKEPTICS", party: "GOP" },
  { code: "UCP", name: "UNIVERSAL CARE PROGRESSIVES", party: "DEM" },
  { code: "FJP", name: "FAITH & JUSTICE PROGRESSIVES", party: "DEM" },
  { code: "HCP", name: "HEALTH CARE PROTECTIONISTS", party: "DEM" },
  { code: "HAD", name: "HEALTH ABUNDANCE DEMOCRATS", party: "DEM" },
  { code: "HCI", name: "HEALTH CARE INCREMENTALISTS", party: "DEM" },
  { code: "GHI", name: "GLOBAL HEALTH INSTITUTIONALISTS", party: "DEM" },
];

// ─── GROUPED DIMENSIONS ───
const GROUPS = [
  {
    label: "MARKETS",
    value: "≤3.0",
    color: "#5B8DEF",
    dims: [
      {
        key: "regulation",
        label: "Regulation",
        lo: "Necessary",
        hi: "Harmful",
      },
      {
        key: "sizeofgovt",
        label: "Size of Govt",
        lo: "Do more",
        hi: "Spends too much",
      },
      {
        key: "profit",
        label: "Profit",
        lo: "Too much profit",
        hi: "Fair profit",
      },
    ],
  },
  {
    label: "MFA",
    value: "3.0–3.5",
    color: "#9B6BD4",
    dims: [
      {
        key: "mfa",
        label: "Health Care",
        lo: "Right / public system",
        hi: "Private market",
      },
    ],
  },
  {
    label: "PLANET",
    value: "3.5–4.5",
    color: "#1A52B3",
    dims: [
      {
        key: "enviro",
        label: "Environment",
        lo: "Protect",
        hi: "Gone too far",
      },
      {
        key: "climate",
        label: "Climate Change",
        lo: "Serious threat",
        hi: "Overblown",
      },
    ],
  },
  {
    label: "MORALITY",
    value: "4.5–5.5",
    color: "#C0392B",
    dims: [
      {
        key: "homosexuals",
        label: "Homosexuality",
        lo: "Acceptance",
        hi: "Discouragement",
      },
      {
        key: "familystruc",
        label: "Family Structure",
        lo: "Diversity",
        hi: "Traditional",
      },
      { key: "abortion", label: "Abortion", lo: "Pro-choice", hi: "Pro-life" },
      {
        key: "religion",
        label: "Religion",
        lo: "Without God",
        hi: "Requires God",
      },
    ],
  },
  {
    label: "POPULISM",
    value: "≥5.5",
    color: "#F0A500",
    dims: [
      {
        key: "immigration",
        label: "Immigration",
        lo: "Strengthens",
        hi: "Threatens",
      },
      { key: "trade", label: "Trade", lo: "Free trade", hi: "Protectionism" },
      {
        key: "globalism",
        label: "Globalism",
        lo: "Global leader",
        hi: "America First",
      },
      { key: "patriotism", label: "Patriotism", lo: "Not proud", hi: "Proud" },
      {
        key: "authority",
        label: "Authority",
        lo: "Strong measures",
        hi: "Trust system",
      },
    ],
  },
];

const ALL_DIMS = GROUPS.flatMap((g) => g.dims);

const DATA = {
  regulation: [
    4.76, 4.78, 5.28, 5.34, 4.49, 4.08, 4.91, 4.73, 5.26, 4.67, 3.49, 3.77,
    4.02, 3.93, 4.02, 3.3,
  ],
  sizeofgovt: [
    4.17, 4.42, 5.0, 5.01, 3.66, 3.88, 4.53, 4.16, 4.2, 4.09, 2.39, 3.17, 3.15,
    3.31, 4.02, 2.66,
  ],
  profit: [
    4.31, 4.4, 4.38, 4.15, 3.74, 4.25, 3.65, 3.96, 4.12, 3.8, 3.29, 3.62, 3.53,
    3.94, 3.84, 3.53,
  ],
  mfa: [
    3.98, 4.26, 4.42, 4.54, 3.81, 3.4, 4.56, 4.01, 4.06, 4.47, 2.26, 3.21, 3.04,
    3.29, 3.09, 2.48,
  ],
  enviro: [
    4.6, 4.71, 4.76, 5.16, 4.24, 3.81, 4.65, 4.52, 4.38, 4.76, 2.48, 3.29, 2.85,
    3.19, 2.86, 2.28,
  ],
  climate: [
    5.0, 5.29, 5.31, 5.58, 4.69, 4.07, 4.89, 4.56, 4.99, 4.76, 3.01, 3.73, 3.97,
    4.17, 3.99, 3.49,
  ],
  homosexuals: [
    4.77, 4.69, 5.33, 5.48, 4.22, 4.27, 4.96, 4.16, 4.23, 4.56, 3.0, 3.7, 3.59,
    4.35, 3.77, 2.84,
  ],
  familystruc: [
    4.87, 3.43, 5.01, 5.59, 3.75, 4.04, 4.85, 4.54, 4.04, 4.19, 2.41, 3.31,
    3.12, 3.73, 3.03, 2.23,
  ],
  abortion: [
    4.42, 4.59, 4.84, 5.05, 4.84, 4.23, 5.14, 4.38, 4.89, 4.69, 2.6, 3.07, 3.66,
    3.73, 3.39, 2.51,
  ],
  religion: [
    4.59, 4.54, 4.77, 4.31, 4.19, 3.66, 4.26, 4.41, 4.35, 3.73, 3.07, 4.17,
    3.39, 3.65, 3.14, 2.8,
  ],
  immigration: [
    4.95, 4.95, 5.05, 5.3, 4.55, 4.37, 4.88, 4.39, 5.06, 5.22, 2.48, 3.14, 3.39,
    3.61, 3.43, 2.68,
  ],
  trade: [
    4.71, 5.07, 4.74, 4.94, 4.52, 4.56, 5.05, 4.77, 4.87, 4.97, 3.15, 3.86,
    4.21, 4.17, 3.53, 2.6,
  ],
  globalism: [
    5.29, 5.3, 5.45, 5.34, 4.65, 4.35, 4.9, 5.04, 4.92, 5.21, 3.24, 3.73, 4.31,
    4.17, 4.94, 3.75,
  ],
  patriotism: [
    4.48, 4.31, 4.83, 4.62, 4.3, 3.82, 4.45, 4.21, 4.26, 4.35, 3.64, 4.1, 4.34,
    4.11, 4.31, 3.9,
  ],
  authority: [
    4.75, 3.4, 4.58, 4.95, 3.88, 3.78, 4.82, 4.41, 3.7, 3.83, 2.72, 4.11, 3.17,
    3.97, 2.93, 2.61,
  ],
};

// ─── SOFTER COLOR SCALE ───
function getColor(val, theme) {
  const t = Math.max(0, Math.min(1, (val - 1.5) / 5.0));

  const light = [
    theme.valueTable1,
    theme.valueTable2,
    theme.valueTable3,
    theme.valueTable4,
    theme.valueTable5,
    theme.valueTable6,
    theme.valueTable7,
  ];

  const dark = [
    theme.valueTable1,
    theme.valueTable2,
    theme.valueTable3,
    theme.valueTable4,
    theme.valueTable5,
    theme.valueTable6,
    theme.valueTable7,
  ];

  const colors = theme === "dark" ? dark : light;

  const scaled = t * (colors.length - 1);
  const i = Math.floor(scaled);
  const f = scaled - i;

  const c1 = hexToRgb(colors[i]);
  const c2 = hexToRgb(colors[Math.min(i + 1, colors.length - 1)]);

  const r = Math.round(c1.r + (c2.r - c1.r) * f);
  const g = Math.round(c1.g + (c2.g - c1.g) * f);
  const b = Math.round(c1.b + (c2.b - c1.b) * f);

  return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
}

function getTextColor(bgColor) {
  const rgb = bgColor.match(/\d+/g)?.map(Number);
  if (!rgb) return "#000";

  const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  return brightness > 140 ? "#111" : "#fff";
}

export default function IdeologyHeatmap() {
  const { theme: t } = useTheme();
  const [hoverRow, setHoverRow] = useState(null);
  const [hoverCol, setHoverCol] = useState(null);
  const [sortCol, setSortCol] = useState(null);

  const means = useMemo(() => {
    const m = {};
    ALL_DIMS.forEach((d) => {
      const vals = DATA[d.key];
      m[d.key] = vals.reduce((a, b) => a + b, 0) / vals.length;
    });
    return m;
  }, []);

  const sortedGroups = useMemo(() => {
    if (sortCol === null) return GROUPS;
    return GROUPS.map((g) => ({
      ...g,
      dims: [...g.dims].sort(
        (a, b) => DATA[b.key][sortCol] - DATA[a.key][sortCol],
      ),
    }));
  }, [sortCol]);

  return (
    <div
      style={{
        fontFamily: "'Quicksand',-apple-system,sans-serif",
        color: t.text,
      }}
    >
      <div style={{ maxWidth: 1500, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontFamily: "'Quicksand',sans-serif",
              fontSize: 9,
              letterSpacing: 3,
              color: t.textDim,
              marginBottom: 3,
              fontWeight: 600,
            }}
          >
            RESERVOIR HEALTH PRISM PULSE
          </div>
          <h1
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 22,
              fontWeight: 800,
              color: t.text,
              margin: 0,
            }}
          >
            IDEOLOGY HEATMAP
          </h1>
          <div
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: t.believecolors2,
              marginTop: 2,
            }}
          >
            15 IDEOLOGICAL DIMENSIONS × 16 PRISM SEGMENTS
          </div>
          <div
            style={{
              fontSize: 11,
              color: t.textMuted,
              maxWidth: 900,
              lineHeight: 1.6,
              marginTop: 6,
              textDecoration: "underline",
            }}
          >
            Segment means on 1–7 bipolar scales grouped by factor domain.
            Deviation from the 16-segment mean shown below each score. Click any
            segment header to sort within groups.
          </div>
        </div>

        {/* Legend */}
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            borderRadius: 4,
            overflow: "hidden",
            width: "100%",
          }}
        >
          {[2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0].map((v) => (
            <>
              <div
                key={v}
                style={{
                  flex: 1,
                  height: 14,
                  background: getColor(v, t),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </>
          ))}
        </div> */}

        {/* Gradient Bar */}
        <div style={{ width: "100%", userSelect: "none" }}>
          <div
            style={{
              width: "100%",
              height: 14,
              borderRadius: 99,
              background:
                "linear-gradient(to right, #2563eb, #93c5fd, #ffffff, #fca5a5, #dc2626)",
            }}
          />

          {/* Tick Labels */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 4,
              paddingX: "2px",
            }}
          >
            {[2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0].map((v) => (
              <span
                key={v}
                style={{
                  fontSize: 8,
                  color: t.textMuted,
                  fontFamily: "'JetBrains Mono', monospace",
                  textAlign: "center",
                }}
              >
                {v.toFixed(1)}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            borderRadius: 4,
            marginTop: 10,
            marginBottom: 10,
            overflow: "hidden",
            width: "100%",
          }}
        >
          {[2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0].map((v) => (
            <>
              <span
                style={{
                  flex: 1,
                  fontSize: 5.5,
                  color: "#9AA0AD",
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {v.toFixed(1)}
              </span>
            </>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            marginBottom: 14,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 8, color: "#60a5fa", fontWeight: 600 }}>
            ← progressive
          </span>
          <span style={{ fontSize: 8, color: "#f87171", fontWeight: 600 }}>
            conservative →
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontFamily: "'Quicksand',sans-serif",
              fontSize: 9,
              letterSpacing: 3,
              color: t.textDim,
              marginBottom: 3,
              fontWeight: 600,
            }}
          >
            SCORE:
          </span>
          {GROUPS.map((g) => (
            <div key={g.label}>
              <div
                style={{
                  padding: "2px 10px",
                  borderRadius: 4,
                  background: g.color,
                  lineHeight: "10px",
                  height: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: 7,
                    color: "#fff",
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    margin: 0,
                  }}
                >
                  {g.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto", background: t.card, marginTop: 20 }}>
          <table
            style={{
              borderCollapse: "separate",
              borderSpacing: "1px 1px",
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th style={{ background: t.background, width: 36 }} />
                <th style={{ background: t.background, width: 86 }} />
                <th style={{ background: t.background, width: 80 }} />
                <th
                  colSpan={10}
                  style={{
                    background: "rgba(192,57,43,0.08)",
                    color: t.repRed,
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 2,
                    padding: "4px 0",
                    textAlign: "center",
                    borderBottom: "2px solid rgba(248,113,113,0.4)",
                  }}
                >
                  REPUBLICAN
                </th>
                <th
                  colSpan={6}
                  style={{
                    background: "rgba(42,82,160,0.08)",
                    color: t.demBlue,
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 2,
                    padding: "4px 0",
                    textAlign: "center",
                    borderBottom: `2px solid ${t.demBlue}`,
                  }}
                >
                  DEMOCRAT
                </th>
              </tr>
              <tr>
                <th style={{ background: t.surfaceInner, padding: 2 }} />
                <th
                  style={{
                    background: t.surfaceInner,
                    padding: "3px 4px",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      color: t.textDim,
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    dimension
                  </span>
                </th>
                <th
                  style={{
                    background: t.surfaceInner,
                    padding: "3px 4px",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      color: t.textDim,
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    polarity
                  </span>
                </th>
                {SEGS.map((seg, si) => {
                  const partyColor = seg.party === "GOP" ? t.repRed : t.demBlue;
                  const partyBackground =
                    seg.party === "GOP" ? t.repRed : t.demBlue;
                  return (
                    <th
                      key={seg.code}
                      onClick={() => setSortCol(sortCol === si ? null : si)}
                      onMouseEnter={() => setHoverCol(si)}
                      onMouseLeave={() => setHoverCol(null)}
                      style={{
                        background: sortCol === si ? t.surface : t.surfaceInner,
                        width: 58,
                        minWidth: 58,
                        maxWidth: 58,
                        padding: "4px 1px",
                        cursor: "pointer",
                        verticalAlign: "bottom",
                        textAlign: "center",
                        borderBottom:
                          sortCol === si
                            ? `2px solid ${seg.party === "GOP" ? t.repRed : t.demBlue}`
                            : "1px solid transparent",
                        transition: "all 0.15s",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            border: `2px solid ${partyColor}`,
                            background: partyBackground,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 8,
                            fontWeight: 800,
                            color: "#fff",
                            fontFamily: "'JetBrains Mono',monospace",
                            flexShrink: 0,
                            margin: "0 auto",
                          }}
                        >
                          {seg.code}
                        </div>
                        <div
                          style={{
                            fontSize: 8,
                            fontWeight: 700,
                            color: t.text,
                            textTransform: "uppercase",
                            lineHeight: 1.2,
                            marginTop: 10,
                            wordBreak: "break-word",
                            overflowWrap: "break-word",
                          }}
                        >
                          {seg.code}
                        </div>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {sortedGroups.map((group, gi) => (
                <React.Fragment key={group.label}>
                  {group.dims.map((dim, di) => {
                    const vals = DATA[dim.key];
                    const mean = means[dim.key];
                    const isFirst = di === 0;
                    const isHovRow = hoverRow === dim.key;

                    return (
                      <tr
                        key={dim.key}
                        onMouseEnter={() => setHoverRow(dim.key)}
                        onMouseLeave={() => setHoverRow(null)}
                      >
                        {isFirst && (
                          <td
                            rowSpan={group.dims.length}
                            style={{
                              background: t.surfaceInner,
                              // borderLeft: `3px solid ${group.color}`,
                              width: 36,
                              padding: 0,
                              position: "relative",
                            }}
                          >
                            {/* Full height color bar */}
                            <div
                              style={{
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 10,
                                width: 5,
                                background: group.color,
                                borderRadius: 3,
                              }}
                            />

                            {/* Content */}
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                paddingLeft: 6,
                              }}
                            >
                              <div
                                style={{
                                  writingMode: "vertical-rl",
                                  textOrientation: "mixed",
                                  transform: "rotate(180deg)",
                                  fontFamily: "'Poppins',sans-serif",
                                  fontSize: 7,
                                  fontWeight: 700,
                                  color: group.color,
                                  letterSpacing: 1.5,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {group.label}
                              </div>
                            </div>
                          </td>
                        )}

                        <td
                          style={{
                            background: isHovRow ? t.surface : t.surfaceInner,
                            padding: "5px 4px",
                            verticalAlign: "middle",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              color: t.text,
                              letterSpacing: 0.2,
                            }}
                          >
                            {dim.label}
                          </span>
                        </td>

                        <td
                          style={{
                            background: isHovRow ? t.surface : t.surfaceInner,
                            padding: "3px 4px",
                            verticalAlign: "middle",
                          }}
                        >
                          <div
                            style={{
                              fontSize: 7,
                              color: "#4A5568",
                              fontWeight: 600,
                              lineHeight: 1.3,
                            }}
                          >
                            {dim.lo} ↔ {dim.hi}
                          </div>
                          {/* <div
                            style={{
                              fontSize: 6,
                              color: t.textMuted,
                              fontWeight: 600,
                              lineHeight: 1.3,
                              marginTop: 1,
                            }}
                          >
                            
                          </div> */}
                        </td>

                        {vals.map((val, si) => {
                          const dev = val - mean;
                          const isColActive = hoverCol === si || sortCol === si;
                          const isHov = isHovRow && isColActive;
                          const bg = getColor(val, t);
                          const textColor = getTextColor(bg);
                          return (
                            <td
                              key={si}
                              style={{
                                background: getColor(val, t),
                                textAlign: "center",
                                padding: "4px 1px",
                                borderRadius: 2,
                                outline: isHov
                                  ? "1.5px solid rgba(241,245,249,0.35)"
                                  : "none",
                                outlineOffset: -1,
                                transition: "all 0.1s",
                                width: 58,
                                minWidth: 58,
                                maxWidth: 58,
                              }}
                            >
                              <div
                                style={{
                                  fontSize: 11,
                                  fontWeight: 600,
                                  color: textColor,
                                  lineHeight: 1,
                                  letterSpacing: -0.2,
                                }}
                              >
                                {val.toFixed(1)}
                              </div>
                              <div
                                style={{
                                  fontSize: 6,
                                  fontWeight: 600,
                                  marginTop: 2,
                                  color: textColor,
                                }}
                              >
                                {dev > 0 ? "+" : ""}
                                {dev.toFixed(1)}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                  {gi < sortedGroups.length - 1 && (
                    <tr>
                      <td
                        colSpan={19}
                        style={{ height: 5, background: t.background }}
                      />
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <span
            style={{
              fontFamily: "'Quicksand',sans-serif",
              fontSize: 9,
              letterSpacing: 3,
              color: t.textDim,
              marginTop: 10,
              marginBottom: 10,
              fontWeight: 600,
              width: "100% ",
              display: "block",
              textAlign: "center",
            }}
          >
            BIPOLAR IDEOLOGY SCALES · 1–7 · N=16 SEGMENTS
          </span>
        </div>

        {/* <div
          style={{
            marginTop: 16,
            padding: "8px 0",
            borderTop: `1px solid ${t.border}`,
            fontSize: 8,
            color: t.textDim,
            fontWeight: 600,
            display: "flex",
            justifyContent: "space-between",
            background: "#fff",
          }}
        >
          <span>
            PRISM V3.1 · RESERVOIR COMMUNICATIONS GROUP · CONFIDENTIAL &
            PROPRIETARY
          </span>
          <span>BIPOLAR IDEOLOGY SCALES · 1–7 · N=16 SEGMENTS</span>
        </div> */}
      </div>
    </div>
  );
}
