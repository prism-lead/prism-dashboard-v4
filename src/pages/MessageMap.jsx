/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo } from "react";
import { getStudyData } from "../data/loader";
import { useTheme } from "../context/ThemeContext";
import { FaEye } from "react-icons/fa";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { GoSidebarCollapse } from "react-icons/go";

// ─── Theme colors ───
const THEME_COLORS = {
  Financial: "#B07800",
  Coverage: "#1D4ED8",
  Innovation: "#6D28D9",
  Freedom: "#15803D",
  "Social Contract": "#DC2626",
  Trust: "#5eead4",
  Other: "#94a3b8",
};
const PARTY_COLOR = { GOP: "#e57373", DEM: "#64b5f6" };

// function getSopC(v) {
//   if (v >= 15) return { bg: "#10B981", t: "#ECFDF5" };
//   if (v >= 13) return { bg: "#059669", t: "#D1FAE5" };
//   if (v >= 11) return { bg: "#047857", t: "#A7F3D0" };
//   if (v >= 9) return { bg: "#065F46", t: "#6EE7B7" };
//   if (v >= 8) return { bg: "#334D47", t: "#94A3B8" };
//   if (v >= 7) return { bg: "#374151", t: "#D1D5DB" };
//   if (v >= 6) return { bg: "#475569", t: "#CBD5E1" };
//   if (v >= 5) return { bg: "#4A4A4A", t: "#D1D5DB" };
//   if (v >= 4) return { bg: "#4A3838", t: "#E5E7EB" };
//   if (v >= 3) return { bg: "#7F1D1D", t: "#FCA5A5" };
//   return { bg: "#991B1B", t: "#FEE2E2" };
// }

function getSopC(v) {
  if (v >= 15) return { bg: "#10B981", t: "#ECFDF5" }; // Bright green
  if (v >= 13) return { bg: "#059669", t: "#D1FAE5" }; // Green
  if (v >= 11) return { bg: "#047857", t: "#A7F3D0" }; // Dark green
  if (v >= 9) return { bg: "#065F46", t: "#6EE7B7" }; // Forest green
  if (v >= 8) return { bg: "#334D47", t: "#94A3B8" }; // Green-gray
  if (v >= 7) return { bg: "#374151", t: "#D1D5DB" }; // Gray
  if (v >= 6) return { bg: "#475569", t: "#CBD5E1" }; // Light gray
  if (v >= 5) return { bg: "#4A4A4A", t: "#D1D5DB" }; // Neutral gray
  if (v >= 4) return { bg: "#4A3838", t: "#E5E7EB" }; // Gray-red
  if (v >= 3) return { bg: "#7F1D1D", t: "#FCA5A5" }; // Dark red

  return { bg: "#991B1B", t: "#FEE2E2" }; // Deep red
}

function getSopCLight(v) {
  if (v >= 15) return { bg: "#D1FAE5", t: "#065F46" };
  if (v >= 13) return { bg: "#A7F3D0", t: "#047857" };
  if (v >= 11) return { bg: "#6EE7B7", t: "#065F46" };
  if (v >= 9) return { bg: "#34D399", t: "#064E3B" };
  if (v >= 8) return { bg: "#E2E8F0", t: "#475569" };
  if (v >= 7) return { bg: "#CBD5E1", t: "#334155" };
  if (v >= 6) return { bg: "#B0BAC8", t: "#1E293B" };
  if (v >= 5) return { bg: "#F1D9D9", t: "#7F1D1D" };
  if (v >= 4) return { bg: "#FECACA", t: "#991B1B" };
  if (v >= 3) return { bg: "#FCA5A5", t: "#7F1D1D" };
  return { bg: "#F87171", t: "#450A0A" };
}

function Tooltip({ msg, x, y }) {
  return (
    <div
      style={{
        position: "fixed",
        left: Math.min(x + 12, window.innerWidth - 420),
        top: Math.max(y - 80, 8),
        width: 400,
        background: "#111827",
        border: "1px solid #334155",
        borderRadius: 6,
        padding: 12,
        zIndex: 9999,
        pointerEvents: "none",
        boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: "#e2e8f0",
            textTransform: "uppercase",
          }}
        >
          {msg.shortName}
        </span>
      </div>
      <div
        style={{
          fontSize: 11,
          color: "#cbd5e1",
          lineHeight: 1.6,
          fontStyle: "italic",
        }}
      >
        "{msg.text}"
      </div>
    </div>
  );
}

export default function MessageMap() {
  const { theme: t, themeId } = useTheme();
  const [sortCol, setSortCol] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const [study, setStudy] = useState("ESI");
  const [hoverRow, setHoverRow] = useState(null);
  const [hoverCol, setHoverCol] = useState(null);

  // ─── Collapse state ───
  const [gopCollapsed, setGopCollapsed] = useState(false);
  const [demCollapsed, setDemCollapsed] = useState(false);

  const getSop = themeId === "light" ? getSopCLight : getSopC;
  const studyData = getStudyData(study);
  const SEGMENTS = studyData.segments;
  const MESSAGES = studyData.messages;

  // Split segments by party
  const gopSegments = SEGMENTS.map((seg, si) => ({ seg, si })).filter(
    ({ seg }) => seg.party === "GOP",
  );
  const demSegments = SEGMENTS.map((seg, si) => ({ seg, si })).filter(
    ({ seg }) => seg.party === "DEM",
  );

  const sorted = useMemo(() => {
    const ix = MESSAGES.map((m, i) => ({ ...m, idx: i }));
    if (sortCol === null) return ix;
    return [...ix].sort(
      (a, b) => MESSAGES[b.idx].sop[sortCol] - MESSAGES[a.idx].sop[sortCol],
    );
  }, [sortCol, study, MESSAGES]);

  const totalIdx = 0;
  const segStartIdx = 1;
  const peIdx = 17;

  const isColActive = (colIdx) => hoverCol === colIdx;
  const isRowActive = (rowKey) => hoverRow === rowKey;
  const FADED_OPACITY = 0.38;
  const colOpacityWhenSorted = (colIdx) =>
    sortCol === null ? 1 : sortCol === colIdx ? 1 : FADED_OPACITY;

  // Header bg helpers
  // const headerBg1 = themeId === "light" ? "#e2e8f0" : "#0c1220";
  const headerBg2 = themeId === "light" ? "#f1f5f9" : "#111827";

  // Collapse button style
  const collapseBtn = (color) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 16,
    height: 16,
    borderRadius: 3,
    color,
    cursor: "pointer",
    flexShrink: 0,
    marginLeft: 10,
  });

  return (
    <div style={{ maxWidth: 1650, margin: "0 auto", color: t.text }}>
      {/* Description */}
      <div style={{ marginBottom: 12 }}>
        <div
          style={{
            fontSize: 11,
            color: t.textMuted,
            maxWidth: 1100,
            lineHeight: 1.5,
          }}
        >
          <strong style={{ color: t.text }}>Share of Preference</strong> heatmap{" "}
          <span style={{ color: t.textDim }}>
            (a measure from a discrete choice model depicting how likely a
            message is chosen as the most compelling relative to other messages)
          </span>{" "}
          · 15-item MaxDiff · 16 PRISM segments + Policy Elites.
        </div>
      </div>

      {/* Study toggle */}
      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        {[
          { k: "ESI", l: "ESI STUDY" },
          { k: "MA", l: "MA STUDY" },
        ].map((s) => (
          <button
            key={s.k}
            onClick={() => {
              setStudy(s.k);
              setSortCol(null);
            }}
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 9,
              letterSpacing: 0.5,
              padding: "5px 14px",
              border: `1px solid`,
              borderRadius: 4,
              cursor: "pointer",
              // background:study===s.k?t.accent+"20":t.surfaceInner,
              // color:study===s.k?t.accent:t.textMuted,
              borderColor: study === s.k ? t.accentBackground : t.border,
              background: study === s.k ? t.accentBackground : t.surfaceInner,
              color: study === s.k ? t.accent : t.textMuted,
              transition: "all 0.15s",
            }}
          >
            {s.l}
          </button>
        ))}
      </div>

      {/* Legend */}
      {/* <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:6,flexWrap:"wrap"}}>
        <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:t.textDim,letterSpacing:1}}>SoP:</span>
        {[{l:"≤6",val:5},{l:"7-8",val:7.5},{l:"9-10",val:9.5},{l:"11-12",val:11.5},{l:"≥13",val:15}].map((h,i)=>{
          const {bg,t:tx}=getSop(h.val);
          return (<div key={i} style={{display:"flex",alignItems:"center",gap:2}}><div style={{width:10,height:10,borderRadius:2,background:bg,border:`1px solid ${t.border}`}}/><span style={{fontSize:7,color:tx}}>{h.l}</span></div>);
        })}
        <span style={{marginLeft:10,fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:t.textDim,letterSpacing:1}}>THEME:</span>
        {Object.entries(THEME_COLORS).filter(([k])=>k!=="Other").map(([k,c])=>(<div key={k} style={{display:"flex",alignItems:"center",gap:2}}><div style={{width:6,height:6,borderRadius:"50%",background:c}}/><span style={{fontSize:7,color:t.textMuted}}>{k}</span></div>))}
      </div> */}

      {/* Heatmap table */}
      <div
        style={{
          overflowX: "auto",
          marginBottom: 2,
          background: t.card,
          boxShadow: "10px 0 0 #00000013",
          borderRadius: 10,
        }}
      >
        <table
          style={{
            width: "100%",
            borderSpacing: 0,
            fontSize: 11,
            columnGap: 0,
          }}
        >
          <thead>
            {/* ─── ROW 1: Party group headers ─── */}
            <tr>
              <th
                colSpan={3}
                style={{
                  background: t.roiLeftBar,
                  padding: 4,
                  borderBottom:
                    themeId === "light"
                      ? "2px solid #E0E4EB"
                      : "2px solid #1e293b",
                }}
              />

              {/* TOTAL */}
              <th
                style={{
                  // background: t.totalColumn,
                  // color: t.totalColumnText,
                  fontFamily: "'JetBrains Mono',monospace",
                  borderRight: `2px solid ${t.border}`,
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 2.5,
                  padding: "6px 0",
                  textAlign: "center",
                  textShadow:
                    themeId === "dark"
                      ? "0 0 12px " + t.green + "40"
                      : undefined,
                  opacity: colOpacityWhenSorted(totalIdx),
                }}
              >
                TOTAL
              </th>

              {/* REPUBLICAN — colSpan shrinks to 1 when collapsed */}
              <th
                colSpan={gopCollapsed ? 1 : gopSegments.length}
                style={{
                  background: t.republicColumn,
                  color: t.repRed,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 2.5,
                  padding: "6px 8px",
                  borderRight: `1px solid ${t.border}`,
                  borderBottom: `1px solid ${t.border}`,
                  textAlign: "center",
                  textShadow:
                    themeId === "dark"
                      ? "0 0 12px " + t.repRed + "40"
                      : undefined,
                  cursor: "pointer",
                  userSelect: "none",
                  whiteSpace: "nowrap",

                  gap: 6,
                }}
                onClick={() => setGopCollapsed((c) => !c)}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  REPUBLICAN
                  <span style={collapseBtn(t.repRed)}>
                    {gopCollapsed ? (
                      <GoSidebarCollapse size={16} />
                    ) : (
                      <TbLayoutSidebarLeftCollapse size={16} />
                    )}
                  </span>
                </p>
              </th>

              {/* DEMOCRAT — colSpan shrinks to 1 when collapsed */}
              <th
                colSpan={demCollapsed ? 1 : demSegments.length}
                style={{
                  background: t.democatColumn,
                  color: t.demBlue,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 2.5,
                  padding: "6px 8px",
                  textAlign: "center",
                  borderRight: `1px solid ${t.border}`,
                  borderBottom: `1px solid ${t.border}`,
                  textShadow:
                    themeId === "dark"
                      ? "0 0 12px " + t.demBlue + "40"
                      : undefined,
                  cursor: "pointer",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                }}
                onClick={() => setDemCollapsed((c) => !c)}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  DEMOCRAT
                  <span style={collapseBtn(t.demBlue)}>
                    {demCollapsed ? (
                      <GoSidebarCollapse size={16} />
                    ) : (
                      <TbLayoutSidebarLeftCollapse size={16} />
                    )}
                  </span>
                </p>
              </th>

              {/* ELITE */}
              <th
                style={{
                  background: t.roiLeftBar,
                  color: t.elitesColumnText,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 2.5,
                  padding: "6px 0",
                  textAlign: "center",
                  textShadow:
                    themeId === "dark"
                      ? "0 0 12px " + t.violet + "40"
                      : undefined,
                  borderBottom: `1px solid ${t.border}`,
                  opacity: colOpacityWhenSorted(totalIdx),
                }}
              >
                ELITE
              </th>
            </tr>

            {/* ─── ROW 2: Segment headers ─── */}
            <tr>
              <th
                style={{
                  background: t.roiLeftBar,
                  width: 24,
                  padding: 4,
                  borderBottom: `2px solid ${t.border}`,
                }}
              />
              <th
                style={{
                  background: t.roiLeftBar,
                  textAlign: "left",
                  width: 140,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  color: t.textDim,
                  padding: "4px 6px",
                  verticalAlign: "bottom",
                  borderBottom: `2px solid ${t.border}`,
                  borderRight: `2px solid ${t.border}`,
                }}
              >
                MESSAGE
              </th>
              <th
                style={{
                  background: t.roiLeftBar,
                  width: 80,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  color: t.textDim,
                  padding: 4,
                  verticalAlign: "bottom",
                  borderBottom: `2px solid ${t.border}`,
                  alignItems: "center",
                  gap: 10,
                  marginTop: "auto",
                  marginBottom: "0",
                }}
              >
                THEME <FaEye />
              </th>

              {/* TOTAL col header */}
              <th
                onClick={() =>
                  setSortCol(sortCol === totalIdx ? null : totalIdx)
                }
                onMouseEnter={() => setHoverCol(totalIdx)}
                onMouseLeave={() => setHoverCol(null)}
                style={{
                  background: t.totalColumn,
                  minWidth: 62,
                  padding: "8px 2px 6px",
                  cursor: "pointer",
                  verticalAlign: "bottom",
                  textAlign: "center",
                  borderBottom:
                    sortCol === totalIdx
                      ? `3px solid ${t.accent}`
                      : `2px solid ${t.border}`,
                  transition: "all 0.15s",
                  opacity: colOpacityWhenSorted(totalIdx),
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      border: `2px solid #fff`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 7,
                      fontWeight: 800,
                      color: t.white,
                      fontFamily: "'JetBrains Mono',monospace",
                      background: "transparent",
                    }}
                  >
                    ALL
                  </div>
                  <div
                    style={{
                      fontSize: 6,
                      fontWeight: 700,
                      color: "#FFFFFFB2",
                      fontFamily: "'JetBrains Mono',monospace",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    TOTAL
                  </div>
                  {sortCol === totalIdx && (
                    <div style={{ fontSize: 7, color: t.accent }}>▼</div>
                  )}
                </div>
              </th>

              {/* GOP segment headers — hidden when collapsed, show summary col when collapsed */}
              {gopCollapsed ? (
                <th
                  onClick={() => setGopCollapsed(false)}
                  style={{
                    background: t.roiLeftBar,
                    minWidth: 36,
                    padding: "8px 4px 6px",
                    cursor: "pointer",
                    verticalAlign: "bottom",
                    textAlign: "center",
                    borderBottom: `2px solid ${t.border}`,
                    borderLeft: `2px solid ${t.repRed}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 7,
                        fontWeight: 800,
                        color: t.repRed,
                        fontFamily: "'JetBrains Mono',monospace",
                        letterSpacing: 1,
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        lineHeight: 1,
                      }}
                    >
                      {gopSegments.length} segs
                    </div>
                    <div style={{ fontSize: 8, color: t.repRed }}>▶</div>
                  </div>
                </th>
              ) : (
                gopSegments.map(({ seg, si }) => {
                  const colIdx = si + segStartIdx;
                  const isSorted = sortCol === colIdx;
                  const pc = t.repRed;
                  return (
                    <th
                      key={seg.id}
                      onClick={() => setSortCol(isSorted ? null : colIdx)}
                      onMouseEnter={() => setHoverCol(colIdx)}
                      onMouseLeave={() => setHoverCol(null)}
                      style={{
                        background: isSorted ? t.republicColumn : headerBg2,
                        minWidth: 68,
                        padding: "8px 2px 6px",
                        cursor: "pointer",
                        verticalAlign: "bottom",
                        textAlign: "center",
                        borderBottom: isSorted
                          ? `3px solid ${t.accent}`
                          : `2px solid ${t.border}`,
                        borderRight: `1px solid ${t.border}`,
                        transition: "all 0.15s",
                        opacity: colOpacityWhenSorted(colIdx),
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 3,
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            border: `2px solid ${pc}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 7,
                            fontWeight: 800,
                            color: "white",
                            fontFamily: "'JetBrains Mono',monospace",
                            background: pc,
                          }}
                        >
                          {seg.code || seg.id}
                        </div>
                        <div
                          style={{
                            fontSize: 6,
                            fontWeight: 700,
                            color: pc,
                            fontFamily: "'JetBrains Mono',monospace",
                            textAlign: "center",
                            lineHeight: 1.2,
                            minHeight: 22,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0 1px",
                          }}
                        >
                          {seg.name.toUpperCase()}
                        </div>
                        <div
                          style={{
                            fontSize: 7,
                            color: t.textMuted,
                            fontFamily: "'JetBrains Mono',monospace",
                          }}
                        >
                          {seg.pop}%
                        </div>
                        {isSorted && (
                          <div style={{ fontSize: 7, color: pc }}>▼</div>
                        )}
                      </div>
                    </th>
                  );
                })
              )}

              {/* DEM segment headers — hidden when collapsed */}
              {demCollapsed ? (
                <th
                  onClick={() => setDemCollapsed(false)}
                  style={{
                    background: headerBg2,
                    minWidth: 36,
                    padding: "8px 4px 6px",
                    cursor: "pointer",
                    verticalAlign: "bottom",
                    textAlign: "center",
                    borderBottom: `2px solid ${t.border}`,
                    borderLeft: `2px solid ${t.demBlue}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 7,
                        fontWeight: 800,
                        color: t.demBlue,
                        fontFamily: "'JetBrains Mono',monospace",
                        letterSpacing: 1,
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        lineHeight: 1,
                      }}
                    >
                      {demSegments.length} segs
                    </div>
                    <div style={{ fontSize: 8, color: t.demBlue }}>▶</div>
                  </div>
                </th>
              ) : (
                demSegments.map(({ seg, si }) => {
                  const colIdx = si + segStartIdx;
                  const isSorted = sortCol === colIdx;
                  const pc = t.demBlue;
                  return (
                    <th
                      key={seg.id}
                      onClick={() => setSortCol(isSorted ? null : colIdx)}
                      onMouseEnter={() => setHoverCol(colIdx)}
                      onMouseLeave={() => setHoverCol(null)}
                      style={{
                        background: isSorted
                          ? themeId === "light"
                            ? "#e2e8f0"
                            : "#1a2332"
                          : headerBg2,
                        minWidth: 68,
                        padding: "8px 2px 6px",
                        cursor: "pointer",
                        verticalAlign: "bottom",
                        textAlign: "center",
                        borderBottom: isSorted
                          ? `3px solid ${t.accent}`
                          : `2px solid ${t.border}`,
                        borderRight: `1px solid ${t.border}`,
                        transition: "all 0.15s",
                        opacity: colOpacityWhenSorted(colIdx),
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 3,
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            border: `2px solid ${pc}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 7,
                            fontWeight: 800,
                            color: "white",
                            fontFamily: "'JetBrains Mono',monospace",
                            background: pc,
                          }}
                        >
                          {seg.code || seg.id}
                        </div>
                        <div
                          style={{
                            fontSize: 6,
                            fontWeight: 700,
                            color: pc,
                            fontFamily: "'JetBrains Mono',monospace",
                            textAlign: "center",
                            lineHeight: 1.2,
                            minHeight: 22,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0 1px",
                          }}
                        >
                          {seg.name.toUpperCase()}
                        </div>
                        <div
                          style={{
                            fontSize: 7,
                            color: t.textMuted,
                            fontFamily: "'JetBrains Mono',monospace",
                          }}
                        >
                          {seg.pop}%
                        </div>
                        {isSorted && (
                          <div style={{ fontSize: 7, color: pc }}>▼</div>
                        )}
                      </div>
                    </th>
                  );
                })
              )}

              {/* PE col header */}
              <th
                onClick={() => setSortCol(sortCol === peIdx ? null : peIdx)}
                onMouseEnter={() => setHoverCol(peIdx)}
                onMouseLeave={() => setHoverCol(null)}
                style={{
                  background: sortCol === peIdx ? t.democatColumn : headerBg2,
                  minWidth: 62,
                  padding: "8px 2px 6px",
                  cursor: "pointer",
                  verticalAlign: "bottom",
                  textAlign: "center",
                  borderBottom:
                    sortCol === peIdx
                      ? `3px solid ${t.accent}`
                      : `2px solid ${t.border}`,
                  transition: "all 0.15s",
                  opacity: colOpacityWhenSorted(peIdx),
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      border: `2px solid ${t.elitesColumn}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 7,
                      fontWeight: 800,
                      color: "white",
                      fontFamily: "'JetBrains Mono',monospace",
                      background: t.elitesColumn,
                    }}
                  >
                    PE
                  </div>
                  <div
                    style={{
                      fontSize: 6,
                      fontWeight: 700,
                      color: t.text,
                      fontFamily: "'JetBrains Mono',monospace",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    POLICY
                    <br />
                    ELITES
                  </div>
                  {sortCol === peIdx && (
                    <div style={{ fontSize: 7, color: t.elitesColumn }}>▼</div>
                  )}
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {sorted.map((msg) => {
              const sop = MESSAGES[msg.idx].sop;
              const rowActive = isRowActive(msg.id);
              const rowBrightness = rowActive
                ? "brightness(1.18)"
                : "brightness(1)";

              // For collapsed GOP: show the average of its segment values
              const gopAvg = gopSegments.length
                ? gopSegments.reduce(
                    (acc, { si }) => acc + sop[si + segStartIdx],
                    0,
                  ) / gopSegments.length
                : 0;
              const demAvg = demSegments.length
                ? demSegments.reduce(
                    (acc, { si }) => acc + sop[si + segStartIdx],
                    0,
                  ) / demSegments.length
                : 0;

              return (
                <tr
                  key={msg.id}
                  onMouseEnter={() => setHoverRow(msg.id)}
                  onMouseLeave={() => setHoverRow(null)}
                  style={{ filter: rowBrightness, transition: "filter 0.1s" }}
                >
                  {/* Row # */}
                  <td
                    style={{
                      background: t.massageColumn,
                      textAlign: "center",
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 7,
                      color: t.textMuted,
                      fontWeight: 700,
                      padding: 2,
                    }}
                  >
                    {msg.id}
                  </td>

                  {/* Message name */}
                  <td
                    onMouseEnter={(e) =>
                      setTooltip({ msg, x: e.clientX, y: e.clientY })
                    }
                    onMouseMove={(e) =>
                      setTooltip((t2) =>
                        t2 ? { ...t2, x: e.clientX, y: e.clientY } : null,
                      )
                    }
                    onMouseLeave={() => setTooltip(null)}
                    style={{
                      background: rowActive ? "#1A2030" : t.massageColumn,
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: 11,
                      color: t.massageColumnText,
                      fontWeight: 600,
                      padding: "3px 4px",
                      whiteSpace: "nowrap",
                      cursor: "help",
                      transition: "all 0.1s",
                    }}
                  >
                    {msg.shortName}
                  </td>

                  {/* Theme badge */}
                  <td
                    style={{
                      background: rowActive ? t.surface : t.surfaceInner,
                      textAlign: "center",
                      padding: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 8,
                        fontFamily: "'JetBrains Mono',monospace",
                        padding: "1px 4px",
                        borderRadius: 3,
                        color: THEME_COLORS[msg.theme] || t.textMuted,
                        fontWeight: 700,
                      }}
                    >
                      {(msg.theme || "").toUpperCase()}
                    </span>
                  </td>

                  {/* Total cell */}
                  {(() => {
                    const val = sop[totalIdx],
                      { bg, t: tx } = getSop(val),
                      isSel = sortCol === totalIdx,
                      isHovC = isColActive(totalIdx);
                    return (
                      <td
                        onMouseEnter={() => setHoverCol(totalIdx)}
                        onMouseLeave={() => setHoverCol(null)}
                        style={{
                          textAlign: "center",
                          // borderRadius: 2,
                          background: bg,
                          fontFamily: "'JetBrains Mono',monospace",
                          fontWeight: 700,
                          fontSize: 12,
                          color: tx,
                          padding: "6px 2px",
                          minWidth: 62,
                          opacity:
                            sortCol !== null
                              ? colOpacityWhenSorted(totalIdx)
                              : isSel || isHovC || rowActive
                                ? 1
                                : 0.85,
                          transition: "all 0.2s ease",
                          borderLeft: "2px solid #34d399",
                          // borderRight: "2px solid #1e293b",
                          boxShadow:
                            isHovC && rowActive
                              ? "inset 0 0 0 1px rgba(96,165,250,0.5)"
                              : "none",
                        }}
                      >
                        {val.toFixed(1)}
                      </td>
                    );
                  })()}

                  {/* GOP: collapsed summary cell OR individual cells */}
                  {gopCollapsed
                    ? (() => {
                        const { bg, t: tx } = getSop(gopAvg);
                        return (
                          <td
                            onClick={() => setGopCollapsed(false)}
                            style={{
                              textAlign: "center",
                              // borderRadius: 2,
                              background: bg,
                              fontFamily: "'JetBrains Mono',monospace",
                              fontWeight: 700,
                              fontSize: 11,
                              color: tx,
                              padding: "6px 4px",
                              minWidth: 36,
                              cursor: "pointer",
                              borderLeft: `2px solid ${t.repRed}`,
                              title: "Click to expand",
                            }}
                          >
                            <div
                              style={{
                                fontSize: 9,
                                opacity: 0.7,
                                marginBottom: 1,
                                color: tx,
                              }}
                            >
                              avg
                            </div>
                            {gopAvg.toFixed(1)}
                          </td>
                        );
                      })()
                    : gopSegments.map(({ seg, si }) => {
                        const colIdx = si + segStartIdx;
                        const val = sop[colIdx];
                        const { bg, t: tx } = getSop(val);
                        const isSel = sortCol === colIdx,
                          isHovC = isColActive(colIdx);
                        return (
                          <td
                            key={seg.id}
                            onMouseEnter={() => setHoverCol(colIdx)}
                            onMouseLeave={() => setHoverCol(null)}
                            style={{
                              textAlign: "center",
                              // borderRadius: 2,
                              background: bg,
                              fontFamily: "'JetBrains Mono',monospace",
                              fontWeight: 700,
                              fontSize: 12,
                              color: tx,
                              padding: "6px 2px",
                              minWidth: 68,
                              opacity:
                                sortCol !== null
                                  ? colOpacityWhenSorted(colIdx)
                                  : isSel || isHovC || rowActive
                                    ? 1
                                    : 0.85,
                              transition: "all 0.2s ease",
                              boxShadow:
                                isHovC && rowActive
                                  ? "inset 0 0 0 1px rgba(96,165,250,0.5)"
                                  : "none",
                            }}
                          >
                            {val.toFixed(1)}
                          </td>
                        );
                      })}

                  {/* DEM: collapsed summary cell OR individual cells */}
                  {demCollapsed
                    ? (() => {
                        const { bg, t: tx } = getSop(demAvg);
                        return (
                          <td
                            onClick={() => setDemCollapsed(false)}
                            style={{
                              textAlign: "center",
                              // borderRadius: 2,
                              background: bg,
                              fontFamily: "'JetBrains Mono',monospace",
                              fontWeight: 700,
                              fontSize: 11,
                              color: tx,
                              padding: "6px 4px",
                              minWidth: 36,
                              cursor: "pointer",
                              borderLeft: `2px solid ${t.demBlue}`,
                            }}
                          >
                            <div
                              style={{
                                fontSize: 9,
                                opacity: 0.7,
                                marginBottom: 1,
                                color: tx,
                              }}
                            >
                              avg
                            </div>
                            {demAvg.toFixed(1)}
                          </td>
                        );
                      })()
                    : demSegments.map(({ seg, si }) => {
                        const colIdx = si + segStartIdx;
                        const val = sop[colIdx];
                        const { bg, t: tx } = getSop(val);
                        const isSel = sortCol === colIdx,
                          isHovC = isColActive(colIdx);
                        return (
                          <td
                            key={seg.id}
                            onMouseEnter={() => setHoverCol(colIdx)}
                            onMouseLeave={() => setHoverCol(null)}
                            style={{
                              textAlign: "center",
                              // borderRadius: 2,
                              background: bg,
                              fontFamily: "'JetBrains Mono',monospace",
                              fontWeight: 700,
                              fontSize: 12,
                              color: tx,
                              padding: "6px 2px",
                              minWidth: 68,
                              opacity:
                                sortCol !== null
                                  ? colOpacityWhenSorted(colIdx)
                                  : isSel || isHovC || rowActive
                                    ? 1
                                    : 0.85,
                              transition: "all 0.2s ease",
                              boxShadow:
                                isHovC && rowActive
                                  ? "inset 0 0 0 1px rgba(96,165,250,0.5)"
                                  : "none",
                            }}
                          >
                            {val.toFixed(1)}
                          </td>
                        );
                      })}

                  {/* PE cell */}
                  {(() => {
                    const val = sop[peIdx],
                      { bg, t: tx } = getSop(val),
                      isSel = sortCol === peIdx,
                      isHovC = isColActive(peIdx);
                    return (
                      <td
                        onMouseEnter={() => setHoverCol(peIdx)}
                        onMouseLeave={() => setHoverCol(null)}
                        style={{
                          textAlign: "center",
                          // borderRadius: 2,
                          background: bg,
                          fontFamily: "'JetBrains Mono',monospace",
                          fontWeight: 700,
                          fontSize: 12,
                          color: tx,
                          padding: "6px 2px",
                          minWidth: 62,
                          opacity:
                            sortCol !== null
                              ? colOpacityWhenSorted(peIdx)
                              : isSel || isHovC || rowActive
                                ? 1
                                : 0.85,
                          transition: "all 0.2s ease",
                          borderLeft: "2px solid #a78bfa",
                          boxShadow:
                            isHovC && rowActive
                              ? "inset 0 0 0 1px rgba(96,165,250,0.5)"
                              : "none",
                        }}
                      >
                        {val.toFixed(1)}
                      </td>
                    );
                  })()}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {tooltip && <Tooltip msg={tooltip.msg} x={tooltip.x} y={tooltip.y} />}
    </div>
  );
}
